/**
 * Bing IndexNow 批量提交通知脚本。
 *
 * 用途：在页面新增/更新后，将 URL 通知给 IndexNow 网络（Bing / Yandex / Seznam / Naver 等）。
 * 协议文档：https://www.indexnow.org/documentation
 *
 * 所有权验证：站点根路径必须可访问 `/{key}.txt`，且文件正文等于 key 本身。
 * 注意：IndexNow key 是**所有权证明用公钥**（须公开托管），不是 OAuth/API Token 类密钥。
 *
 * 用法：
 *   npm run indexnow                          # 提交 public/sitemap.xml 全部 <loc>
 *   npm run indexnow -- --url https://...     # 仅提交指定 URL（可重复）
 *   npm run indexnow -- --dry-run             # 只解析与打印，不发请求
 *   npm run indexnow -- --endpoint bing       # 使用 www.bing.com/indexnow
 *   INDEXNOW_KEY=... npm run indexnow         # 覆盖默认 key（须与 public/{key}.txt 一致）
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { siteConfig } from './site/config.mjs';

/** 仓库根目录（scripts/ 的上一级） */
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** 默认 sitemap 路径（由 npm run build:site 生成） */
const defaultSitemapPath = path.join(rootDir, 'public', 'sitemap.xml');

/** IndexNow 官方聚合端点（一次提交会共享给参与引擎） */
const ENDPOINT_INDEXNOW = 'https://api.indexnow.org/indexnow';

/** Bing 直连端点（仅通知 Bing；仍可能按协议共享） */
const ENDPOINT_BING = 'https://www.bing.com/indexnow';

/** 单次 POST 允许的最大 URL 数（协议上限） */
const MAX_URLS_PER_POST = 10_000;

/**
 * 解析命令行参数。
 * @param {string[]} argv process.argv 切片（通常为 process.argv.slice(2)）
 * @returns {{
 *   dryRun: boolean,
 *   endpointName: 'indexnow' | 'bing',
 *   sitemapPath: string,
 *   urls: string[],
 *   help: boolean,
 * }}
 */
const parseArgs = (argv) => {
  /** 是否只预览不提交 */
  let dryRun = false;
  /** 端点别名：indexnow | bing */
  let endpointName = 'indexnow';
  /** sitemap 文件绝对或相对路径 */
  let sitemapPath = defaultSitemapPath;
  /** CLI 显式传入的 URL 列表 */
  const urls = [];
  /** 是否打印帮助并退出 */
  let help = false;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      help = true;
      continue;
    }
    if (arg === '--dry-run') {
      dryRun = true;
      continue;
    }
    if (arg === '--endpoint') {
      const value = String(argv[i + 1] || '').trim().toLowerCase();
      i += 1;
      if (value !== 'indexnow' && value !== 'bing') {
        throw new Error(`Invalid --endpoint "${value}". Use "indexnow" or "bing".`);
      }
      endpointName = value;
      continue;
    }
    if (arg === '--sitemap') {
      sitemapPath = path.resolve(String(argv[i + 1] || ''));
      i += 1;
      continue;
    }
    if (arg === '--url') {
      const value = String(argv[i + 1] || '').trim();
      i += 1;
      if (!value) throw new Error('--url requires a value');
      urls.push(value);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}. Use --help.`);
  }

  return { dryRun, endpointName, sitemapPath, urls, help };
};

/**
 * 打印 CLI 帮助信息到 stdout。
 */
const printHelp = () => {
  console.log(`Usage: node scripts/submit-indexnow.mjs [options]

Options:
  --dry-run              Parse and print payload only; do not POST
  --endpoint <name>      indexnow (default) | bing
  --sitemap <path>       Sitemap XML to read (default: public/sitemap.xml)
  --url <absolute-url>   Submit only this URL (repeatable)
  -h, --help             Show help

Env:
  INDEXNOW_KEY           Override key (must match public/{key}.txt)
  SITE_BASE_URL          Host base, default https://onlinefreetools.org
`);
};

/**
 * 从 sitemap XML 中提取全部 <loc> URL（不依赖第三方 XML 库）。
 * @param {string} xml sitemap 文本
 * @returns {string[]} 绝对 URL 列表（保序、去重）
 */
const extractLocUrls = (xml) => {
  /** 匹配结果集合，用于去重并保持首次出现顺序 */
  const seen = new Set();
  /** 输出列表 */
  const list = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let match = re.exec(xml);
  while (match) {
    const url = match[1].trim();
    if (url && !seen.has(url)) {
      seen.add(url);
      list.push(url);
    }
    match = re.exec(xml);
  }
  return list;
};

/**
 * 校验 URL 是否属于本站 host，并与协议要求一致。
 * @param {string} url 待提交绝对 URL
 * @param {string} host 站点 host（无协议，如 onlinefreetools.org）
 */
const assertUrlBelongsToHost = (url, host) => {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`Invalid URL: ${url}`);
  }
  if (parsed.hostname !== host) {
    throw new Error(`URL host mismatch: ${url} (expected host ${host})`);
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    throw new Error(`Unsupported protocol for ${url}`);
  }
};

/**
 * 将 URL 列表按协议上限分块。
 * @param {string[]} urls 全部待提交 URL
 * @param {number} size 每块大小
 * @returns {string[][]}
 */
const chunkUrls = (urls, size) => {
  /** 分块结果 */
  const chunks = [];
  for (let i = 0; i < urls.length; i += size) {
    chunks.push(urls.slice(i, i + size));
  }
  return chunks;
};

/**
 * 向 IndexNow 端点提交一批 URL。
 * @param {{
 *   endpoint: string,
 *   host: string,
 *   key: string,
 *   keyLocation: string,
 *   urlList: string[],
 *   dryRun: boolean,
 * }} options 提交参数
 * @returns {Promise<{ status: number, body: string }>}
 */
const submitBatch = async ({ endpoint, host, key, keyLocation, urlList, dryRun }) => {
  /** IndexNow JSON 请求体 */
  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  if (dryRun) {
    console.log('[dry-run] POST', endpoint);
    console.log(JSON.stringify(payload, null, 2));
    return { status: 0, body: '' };
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  /** 响应正文（错误时便于排障） */
  const body = await res.text();
  return { status: res.status, body };
};

/**
 * 主流程：解析参数 → 收集 URL → 分批提交 → 按 HTTP 状态码退出。
 */
const main = async () => {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  /** IndexNow 所有权 key（须与 public/{key}.txt 正文一致） */
  const key = (process.env.INDEXNOW_KEY || siteConfig.indexNowKey || '').trim();
  if (!key) {
    throw new Error('INDEXNOW_KEY / siteConfig.indexNowKey is empty');
  }
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
    throw new Error('IndexNow key must be 8–128 chars of [A-Za-z0-9-]');
  }

  /** 站点绝对根 URL（无尾斜杠） */
  const baseUrl = siteConfig.baseUrl.replace(/\/$/, '');
  /** 提交用 host（不含协议） */
  const host = new URL(baseUrl).hostname;
  /** 根目录 key 文件的公开 URL（Option 1） */
  const keyLocation = `${baseUrl}/${key}.txt`;
  /** 实际 POST 目标 */
  const endpoint = args.endpointName === 'bing' ? ENDPOINT_BING : ENDPOINT_INDEXNOW;

  /** 待提交 URL 列表 */
  let urlList = args.urls.slice();
  if (urlList.length === 0) {
    const xml = await fs.readFile(args.sitemapPath, 'utf8');
    urlList = extractLocUrls(xml);
  }
  if (urlList.length === 0) {
    throw new Error('No URLs to submit');
  }

  for (const url of urlList) {
    assertUrlBelongsToHost(url, host);
  }

  /** 本地 key 文件路径（部署前自检） */
  const localKeyPath = path.join(rootDir, 'public', `${key}.txt`);
  try {
    const localKeyBody = (await fs.readFile(localKeyPath, 'utf8')).trim();
    if (localKeyBody !== key) {
      throw new Error(
        `Local key file mismatch: ${localKeyPath} content !== key. Fix before submit.`
      );
    }
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      throw new Error(`Missing key file: ${localKeyPath}. Deploy it to ${keyLocation}`);
    }
    throw err;
  }

  console.log(`IndexNow host=${host}`);
  console.log(`IndexNow keyLocation=${keyLocation}`);
  console.log(`IndexNow endpoint=${endpoint}`);
  console.log(`IndexNow urls=${urlList.length}${args.dryRun ? ' (dry-run)' : ''}`);

  /** 分块后的 URL 批次 */
  const batches = chunkUrls(urlList, MAX_URLS_PER_POST);
  /** 是否出现协议失败状态（非 200/202） */
  let failed = false;

  for (let i = 0; i < batches.length; i += 1) {
    const batch = batches[i];
    const { status, body } = await submitBatch({
      endpoint,
      host,
      key,
      keyLocation,
      urlList: batch,
      dryRun: args.dryRun,
    });

    if (args.dryRun) continue;

    // 200=已接收；202=已接收且 key 校验待完成（首次常见）
    if (status === 200 || status === 202) {
      console.log(`Batch ${i + 1}/${batches.length}: HTTP ${status} OK (${batch.length} URLs)`);
      if (status === 202) {
        console.log(
          'Note: 202 means key validation is pending. Ensure key file is live at keyLocation.'
        );
      }
    } else {
      failed = true;
      console.error(`Batch ${i + 1}/${batches.length}: HTTP ${status}`);
      if (body) console.error(body);
    }
  }

  if (failed) process.exit(1);
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
  main().catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  });
}
