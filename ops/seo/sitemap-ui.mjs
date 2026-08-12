#!/usr/bin/env node
/**
 * 本地 Sitemap 操作页服务（仅绑定 127.0.0.1）。
 *
 *   npm run sitemap:ui
 *   浏览器打开 http://127.0.0.1:8791/
 *   进入密码：环境变量 SITEMAP_UI_PASSWORD（默认 345621）
 *
 * 安全：不监听 0.0.0.0；会话 cookie HttpOnly；勿把本服务暴露到公网。
 */
import http from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

import {
  buildSitemapXml,
  DEFAULT_FILTERED_SITEMAP_PATH,
  DEFAULT_SITEMAP_PATH,
  getSitemapUiMeta,
  SITEMAP_INFO_PAGES,
} from '../../scripts/site/sitemap.mjs';
import { marked } from 'marked';

/** 本文件所在目录。 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** 仓库根目录。 */
const ROOT_DIR = path.resolve(__dirname, '../..');

/** HTML 操作页路径。 */
const UI_HTML_PATH = path.join(__dirname, 'sitemap-ui.html');

/**
 * 可在 UI 展示的运维手册（白名单，禁止任意路径读取）。
 * id → 相对仓库根的路径与展示标题。
 * @type {ReadonlyArray<{ id: string, file: string, title: string }>}
 */
const HANDBOOK_DOCS = Object.freeze([
  { id: 'ops-readme', file: 'ops/README.md', title: '运维手册（ops/README）' },
  {
    id: 'worker-r2',
    file: 'ops/worker-r2-ops.md',
    title: 'Worker + R2 运维（upload / git push / verify）',
  },
  {
    id: 'inbound-outreach',
    file: 'ops/seo/inbound-link-outreach.md',
    title: '白帽入站获链月度清单',
  },
  {
    id: 'keyword-to-tool',
    file: 'ops/seo/keyword-to-tool-ops.md',
    title: '关键词 → 工具漏斗（操作）',
  },
]);

/**
 * 按 id 解析手册条目。
 * @param {string} id
 * @returns {{ id: string, file: string, title: string }|null}
 */
const resolveHandbookDoc = (id) =>
  HANDBOOK_DOCS.find((d) => d.id === id) || null;

/**
 * 读取并渲染运维手册 Markdown → HTML。
 * @param {string} id 文档 id
 * @returns {Promise<{ id: string, title: string, file: string, markdown: string, html: string, docs: typeof HANDBOOK_DOCS }>}
 */
const loadHandbook = async (id) => {
  const meta = resolveHandbookDoc(id) || HANDBOOK_DOCS[0];
  const abs = path.resolve(ROOT_DIR, meta.file);
  /** 防目录穿越：必须仍落在仓库 ops/ 下。 */
  const opsRoot = path.resolve(ROOT_DIR, 'ops') + path.sep;
  if (!abs.startsWith(opsRoot)) {
    throw new Error('handbook path rejected');
  }
  const markdown = await fs.readFile(abs, 'utf8');
  const html = marked.parse(markdown, { async: false });
  return {
    id: meta.id,
    title: meta.title,
    file: meta.file,
    markdown,
    html: typeof html === 'string' ? html : String(html),
    docs: HANDBOOK_DOCS,
  };
};

/** 监听主机（强制本机回环）。 */
const HOST = '127.0.0.1';

/** 监听端口（可用 SITEMAP_UI_PORT 覆盖）。 */
const PORT = Number(process.env.SITEMAP_UI_PORT || 8791);

/**
 * 进入密码（可用环境变量覆盖）。
 * @returns {string}
 */
const getPassword = () => String(process.env.SITEMAP_UI_PASSWORD || '345621');

/** 已登录会话 token 集合。 */
const sessions = new Set();

/**
 * 解析 Cookie 头。
 * @param {string|undefined} header
 * @returns {Record<string,string>}
 */
const parseCookies = (header) => {
  /** @type {Record<string,string>} */
  const out = {};
  String(header || '')
    .split(';')
    .forEach((part) => {
      const i = part.indexOf('=');
      if (i < 0) return;
      const k = part.slice(0, i).trim();
      const v = part.slice(i + 1).trim();
      if (k) out[k] = decodeURIComponent(v);
    });
  return out;
};

/**
 * 是否已登录。
 * @param {http.IncomingMessage} req
 * @returns {boolean}
 */
const isAuthed = (req) => {
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies.sitemap_ui_session;
  return Boolean(token && sessions.has(token));
};

/**
 * 读取 JSON body。
 * @param {http.IncomingMessage} req
 * @returns {Promise<any>}
 */
const readJson = (req) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8') || '{}';
        resolve(JSON.parse(raw));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });

/**
 * 发送 JSON 响应（可选 Set-Cookie）。
 * @param {http.ServerResponse} res
 * @param {number} status
 * @param {object} body
 * @param {string|undefined} [setCookie]
 */
const sendJson = (res, status, body, setCookie) => {
  const payload = JSON.stringify(body);
  /** @type {http.OutgoingHttpHeaders} */
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  };
  if (setCookie) headers['Set-Cookie'] = setCookie;
  res.writeHead(status, headers);
  res.end(payload);
};

/**
 * 将 UI 勾选规范化为 sitemap 核心选项。
 * - 场景/类型「全选」≡ 默认全部 leaf，且不按该维过滤工具
 * - 「清空」≡ 不输出 leaf，且不按该维过滤工具
 * - 「部分勾选」≡ 仅这些 leaf，并按同 id 过滤工具（与 category OR）
 * @param {object} body
 * @returns {object} 传给 `buildSitemapXml` 的选项（不含 outFile/dryRun）
 */
const bodyToBuildOptions = (body) => {
  const meta = getSitemapUiMeta();
  /** @type {string[]|undefined} */
  let scenarios;
  /** @type {string[]} */
  let toolScenarios = [];
  if (Array.isArray(body.scenarios)) {
    const raw = body.scenarios.map(String);
    const allSelected =
      raw.length === meta.scenarios.length &&
      meta.scenarios.every((id) => raw.includes(id));
    if (allSelected) {
      scenarios = undefined;
      toolScenarios = [];
    } else {
      scenarios = raw;
      toolScenarios = raw;
    }
  }

  /** @type {string[]|undefined} */
  let subjects;
  /** @type {string[]} */
  let toolSubjects = [];
  if (Array.isArray(body.subjects)) {
    const raw = body.subjects.map(String);
    const allSelected =
      raw.length === meta.subjects.length &&
      meta.subjects.every((id) => raw.includes(id));
    if (allSelected) {
      subjects = undefined;
      toolSubjects = [];
    } else {
      subjects = raw;
      toolSubjects = raw;
    }
  }

  let categories = Array.isArray(body.categories)
    ? body.categories.map(String).filter(Boolean)
    : [];
  if (
    categories.length === meta.categories.length &&
    meta.categories.every((id) => categories.includes(id))
  ) {
    categories = [];
  }

  return {
    langs: Array.isArray(body.langs) ? body.langs : undefined,
    includeHome: body.includeHome !== false,
    infoPages: Array.isArray(body.infoPages) ? body.infoPages : undefined,
    includeScenarioHub: body.includeScenarioHub !== false,
    includeSubjectHub: body.includeSubjectHub !== false,
    includeScenarioLeaves: body.includeScenarioLeaves !== false,
    includeSubjectLeaves: body.includeSubjectLeaves !== false,
    includeTools: body.includeTools !== false,
    categories,
    scenarios,
    subjects,
    toolScenarios,
    toolSubjects,
  };
};

/**
 * 判断请求是否为「筛选」而非全量。
 * @param {object} body
 * @returns {boolean}
 */
const bodyIsFiltered = (body) => {
  const meta = getSitemapUiMeta();
  const langs = body.langs || [];
  if (langs.length && langs.length < meta.enabledLangs.length) return true;
  /** 默认剔除信息页；勾选任一项相对生产全量即为筛选。 */
  const info = body.infoPages;
  if (Array.isArray(info) && info.length > 0) return true;
  if (body.includeHome === false) return true;
  if (body.includeTools === false) return true;
  if (body.includeScenarioHub === false || body.includeSubjectHub === false) return true;
  if (body.includeScenarioLeaves === false || body.includeSubjectLeaves === false) return true;
  const cats = body.categories || [];
  if (cats.length && cats.length < meta.categories.length) return true;
  if (Array.isArray(body.scenarios) && body.scenarios.length < meta.scenarios.length)
    return true;
  if (Array.isArray(body.subjects) && body.subjects.length < meta.subjects.length) return true;
  return false;
};

/**
 * 解析最终写入路径。
 * 筛选默认写 filtered；勾选覆盖主文件（或全量）时写 sitemap.xml。
 * @param {object} body 请求体
 * @param {boolean} filtered 是否筛选内容
 * @returns {{ outFile: string, overwriteMain: boolean }}
 */
const resolveOutFile = (body, filtered) => {
  /** 显式布尔：避免非严格 JSON 里的异常真值干扰。 */
  const overwriteMain = body.overwriteMain === true || body.overwriteMain === 'true';
  if (body.outFile) {
    const raw = String(body.outFile);
    const outFile = path.isAbsolute(raw) ? raw : path.join(process.cwd(), raw);
    return { outFile, overwriteMain };
  }
  const outFile =
    filtered && !overwriteMain ? DEFAULT_FILTERED_SITEMAP_PATH : DEFAULT_SITEMAP_PATH;
  return { outFile, overwriteMain };
};

/**
 * HTTP 请求处理。
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
const handler = async (req, res) => {
  const url = new URL(req.url || '/', `http://${HOST}:${PORT}`);
  const { pathname } = url;
  const method = req.method || 'GET';

  try {
    if (method === 'GET' && (pathname === '/' || pathname === '/index.html')) {
      const html = await fs.readFile(UI_HTML_PATH, 'utf-8');
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      });
      res.end(html);
      return;
    }

    if (method === 'GET' && pathname === '/api/session') {
      sendJson(res, 200, { ok: isAuthed(req) });
      return;
    }

    if (method === 'POST' && pathname === '/api/login') {
      const body = await readJson(req);
      if (String(body.password || '') !== getPassword()) {
        sendJson(res, 401, { error: '密码错误' });
        return;
      }
      const token = crypto.randomBytes(24).toString('hex');
      sessions.add(token);
      sendJson(
        res,
        200,
        { ok: true },
        `sitemap_ui_session=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Strict`
      );
      return;
    }

    if (method === 'POST' && pathname === '/api/logout') {
      const cookies = parseCookies(req.headers.cookie);
      if (cookies.sitemap_ui_session) sessions.delete(cookies.sitemap_ui_session);
      sendJson(
        res,
        200,
        { ok: true },
        'sitemap_ui_session=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict'
      );
      return;
    }

    if (!isAuthed(req)) {
      sendJson(res, 401, { error: '未登录' });
      return;
    }

    if (method === 'GET' && pathname === '/api/meta') {
      sendJson(res, 200, getSitemapUiMeta());
      return;
    }

    if (method === 'GET' && pathname === '/api/handbook') {
      const id = String(url.searchParams.get('id') || 'ops-readme');
      if (!resolveHandbookDoc(id)) {
        sendJson(res, 404, { error: `unknown handbook id: ${id}` });
        return;
      }
      const doc = await loadHandbook(id);
      sendJson(res, 200, doc);
      return;
    }

    if (method === 'POST' && pathname === '/api/generate') {
      const body = await readJson(req);
      const dryRun = Boolean(body.dryRun);
      const filtered = bodyIsFiltered(body);
      const { outFile, overwriteMain } = resolveOutFile(body, filtered);
      /** 相对仓库 cwd 的展示路径（预览与实写都返回，便于确认覆盖主文件是否生效）。 */
      const outFileRel = path.relative(process.cwd(), outFile);

      const result = await buildSitemapXml({
        ...bodyToBuildOptions(body),
        outFile,
        dryRun,
      });

      sendJson(res, 200, {
        ok: true,
        filtered,
        dryRun,
        overwriteMain,
        entryCount: result.entryCount,
        urlCount: result.urlCount,
        langs: result.langs,
        /** 始终返回解析后的目标路径（dry-run 也会带上）。 */
        outFile: outFileRel,
        wrote: Boolean(result.outFile),
      });
      return;
    }

    sendJson(res, 404, { error: 'not found' });
  } catch (err) {
    sendJson(res, 500, { error: err?.message || String(err) });
  }
};

/**
 * 启动服务。
 */
const main = () => {
  const server = http.createServer((req, res) => {
    handler(req, res);
  });

  server.listen(PORT, HOST, () => {
    console.log(`Ops UI: http://${HOST}:${PORT}/`);
    console.log('Tabs: Sitemap · 运维手册. Auth: SITEMAP_UI_PASSWORD. Bind: 127.0.0.1 only.');
  });
};

const isDirectRun = (() => {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return import.meta.url === pathToFileURL(entry).href;
  } catch {
    return false;
  }
})();

if (isDirectRun) {
  main();
}
