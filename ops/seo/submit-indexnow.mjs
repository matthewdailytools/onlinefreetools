/**
 * Bing IndexNow 批量提交通知脚本（多场景 CLI）。
 *
 * 协议：https://www.indexnow.org/documentation
 * 所有权：生产站必须可访问 `/{key}.txt`（正文 = key）。IndexNow key 是公开验证公钥，不是私密 Token。
 *
 * 常用场景：
 *   npm run indexnow                                         # 本地 public/sitemap.xml
 *   npm run indexnow -- --sitemap                            # 显式按本地 sitemap 提交
 *   npm run indexnow -- --sitemap public/sitemap.xml         # 指定本地 sitemap 文件
 *   npm run indexnow -- --sitemap https://onlinefreetools.org/sitemap.xml
 *   npm run indexnow -- --remote-sitemap                     # 拉取生产站 /sitemap.xml
 *   npm run indexnow -- --sitemap-only --include /tools/     # 仅 sitemap + 过滤
 *   npm run indexnow -- --tool html-entity                   # 某工具全部语言 URL
 *   npm run indexnow -- --tool html-entity --lang zh,en
 *   npm run indexnow -- --path /tools/html-entity
 *   npm run indexnow -- --home --about
 *   npm run indexnow -- --url https://... / --urls-file ./urls.txt
 *   npm run indexnow -- --check-key / --require-live-key
 *   npm run indexnow -- --dry-run --limit 10 --verbose
 *   npm run indexnow -- --endpoint bing
 *   npm run indexnow -- --incremental                        # 仅推尚未成功提交过的 URL
 *   npm run indexnow -- --baseline                           # 把当前 URL 集写入状态，不提交
 *   npm run indexnow -- --since-git HEAD~1                   # 按 git 变更映射工具/页面 URL
 *   npm run indexnow -- --incremental --since-git origin/main
 */
import fs from 'fs/promises';
import path from 'path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'module';
import { fileURLToPath, pathToFileURL } from 'url';
import { siteConfig, withLangPath } from '../../scripts/site/config.mjs';

/** 仓库根目录（ops/seo/ 的上两级） */
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

/** 用于同步读取 tool-catalog.json */
const require = createRequire(import.meta.url);

/** 工具目录（slug / path） */
const TOOL_CATALOG = require(path.join(rootDir, 'src/site/tool-catalog.json'));

/** 默认 sitemap 路径（由 npm run build:site 生成） */
const defaultSitemapPath = path.join(rootDir, 'public', 'sitemap.xml');

/** 增量推送默认状态文件（.run/ 已 gitignore） */
const defaultStatePath = path.join(rootDir, '.run', 'indexnow-state.json');

/** 状态文件 schema 版本 */
const STATE_VERSION = 1;

/** IndexNow 官方聚合端点（一次提交会共享给参与引擎） */
const ENDPOINT_INDEXNOW = 'https://api.indexnow.org/indexnow';

/** Bing 直连端点 */
const ENDPOINT_BING = 'https://www.bing.com/indexnow';

/** Yandex 端点（可选；通常用聚合端点即可） */
const ENDPOINT_YANDEX = 'https://yandex.com/indexnow';

/** 端点别名 → 完整 URL */
const ENDPOINT_MAP = {
  indexnow: ENDPOINT_INDEXNOW,
  bing: ENDPOINT_BING,
  yandex: ENDPOINT_YANDEX,
};

/** 单次 POST 协议上限 */
const MAX_URLS_PER_POST = 10_000;

/**
 * 将逗号/空白分隔的列表解析为非空字符串数组。
 * @param {string} raw 原始参数值
 * @returns {string[]}
 */
const splitList = (raw) =>
  String(raw || '')
    .split(/[,|\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);

/**
 * 去重并保持首次出现顺序。
 * @param {string[]} list URL 列表
 * @returns {string[]}
 */
const uniquePreserveOrder = (list) => {
  /** 已见集合 */
  const seen = new Set();
  /** 输出 */
  const out = [];
  for (const item of list) {
    if (!item || seen.has(item)) continue;
    seen.add(item);
    out.push(item);
  }
  return out;
};

/**
 * 解析命令行参数为结构化选项。
 * @param {string[]} argv process.argv.slice(2)
 * @returns {object} CLI 选项对象
 */
const parseArgs = (argv) => {
  /** 是否打印帮助 */
  let help = false;
  /** 是否只预览不提交 */
  let dryRun = false;
  /** 是否只检查线上 key */
  let checkKey = false;
  /** 提交前是否要求线上 key HTTP 200 */
  let requireLiveKey = false;
  /** 是否跳过本地 public/{key}.txt 校验 */
  let skipLocalKeyCheck = false;
  /** 安静模式（少日志） */
  let quiet = false;
  /** 详细模式（打印全部 URL） */
  let verbose = false;
  /** 端点别名或完整 URL */
  let endpointName = 'indexnow';
  /**
   * sitemap 来源列表（本地路径或 http(s) URL）。
   * 空数组 + 默认模式时使用 defaultSitemapPath。
   */
  const sitemapSources = [];
  /** 是否显式要求读取 sitemap（可与 --tool 等合并） */
  let useSitemap = false;
  /** 仅从 sitemap 收集 URL（忽略 --tool/--path/--url 等选择器） */
  let sitemapOnly = false;
  /** 使用生产站远程 sitemap（`${SITE_BASE_URL}/sitemap.xml`） */
  let remoteSitemap = false;
  /** 自定义 keyLocation（Option 2） */
  let keyLocation = '';
  /** 覆盖 host（不含协议） */
  let hostOverride = '';
  /** 覆盖 key */
  let keyOverride = '';
  /** 批量大小 */
  let batchSize = MAX_URLS_PER_POST;
  /** 最多提交条数（0 = 不限制） */
  let limit = 0;
  /** 语言过滤（空 = 全部 enabledLangs） */
  const langs = [];
  /** 工具 slug 列表 */
  const tools = [];
  /** 站点内路径（将按语言展开） */
  const paths = [];
  /** 绝对 URL */
  const urls = [];
  /** URL 列表文件路径 */
  const urlsFiles = [];
  /** sitemap / 结果 include 子串过滤 */
  const include = [];
  /** sitemap / 结果 exclude 子串过滤 */
  const exclude = [];
  /** 是否提交各语言首页 */
  let home = false;
  /** 是否提交各语言 About */
  let about = false;
  /** 是否启用增量推送（对照本地状态文件，跳过已成功提交的 URL） */
  let incremental = false;
  /** 是否只写入 baseline 状态、不真正 POST */
  let baseline = false;
  /** 是否删除状态文件后退出（可与提交流程分开用） */
  let resetState = false;
  /** 成功提交后是否跳过写回状态 */
  let noSaveState = false;
  /** 自定义状态文件路径 */
  let stateFile = '';
  /** git 起始引用（与 HEAD 比较，映射变更文件 → URL） */
  let sinceGit = '';

  for (let i = 0; i < argv.length; i += 1) {
    /** 当前参数 */
    const arg = argv[i];

    /**
     * 读取下一个必填值。
     * @param {string} flag 标志名（用于报错）
     * @returns {string}
     */
    const takeValue = (flag) => {
      const value = argv[i + 1];
      i += 1;
      if (value == null || value.startsWith('-')) {
        throw new Error(`${flag} requires a value`);
      }
      return value;
    };

    if (arg === '--help' || arg === '-h') {
      help = true;
      continue;
    }
    if (arg === '--dry-run') {
      dryRun = true;
      continue;
    }
    if (arg === '--check-key') {
      checkKey = true;
      continue;
    }
    if (arg === '--require-live-key') {
      requireLiveKey = true;
      continue;
    }
    if (arg === '--skip-local-key-check') {
      skipLocalKeyCheck = true;
      continue;
    }
    if (arg === '--quiet' || arg === '-q') {
      quiet = true;
      continue;
    }
    if (arg === '--verbose' || arg === '-v') {
      verbose = true;
      continue;
    }
    if (arg === '--sitemap' || arg === '--sitemaps') {
      useSitemap = true;
      /** 可选值：本地路径或 http(s) URL；可省略（默认本地 public/sitemap.xml） */
      const next = argv[i + 1];
      if (next && !next.startsWith('-')) {
        i += 1;
        for (const source of splitList(next)) {
          sitemapSources.push(source);
        }
      } else {
        sitemapSources.push(defaultSitemapPath);
      }
      continue;
    }
    if (arg === '--sitemap-url') {
      useSitemap = true;
      const value = String(takeValue('--sitemap-url')).trim();
      if (!/^https?:\/\//i.test(value)) {
        throw new Error('--sitemap-url requires an http(s) URL');
      }
      sitemapSources.push(value);
      continue;
    }
    if (arg === '--remote-sitemap') {
      useSitemap = true;
      remoteSitemap = true;
      continue;
    }
    if (arg === '--sitemap-only') {
      useSitemap = true;
      sitemapOnly = true;
      if (!sitemapSources.length) sitemapSources.push(defaultSitemapPath);
      continue;
    }
    if (arg === '--from-sitemap') {
      // 兼容旧参数：追加默认本地 sitemap
      useSitemap = true;
      if (!sitemapSources.length) sitemapSources.push(defaultSitemapPath);
      continue;
    }
    if (arg === '--endpoint') {
      /** 端点原始值（别名或完整 URL） */
      const rawEndpoint = String(takeValue('--endpoint')).trim();
      if (/^https?:\/\//i.test(rawEndpoint)) {
        endpointName = rawEndpoint;
      } else {
        endpointName = rawEndpoint.toLowerCase();
        if (!ENDPOINT_MAP[endpointName]) {
          throw new Error(
            `Invalid --endpoint "${rawEndpoint}". Use: ${Object.keys(ENDPOINT_MAP).join(', ')} or full URL`
          );
        }
      }
      continue;
    }
    if (arg === '--key') {
      keyOverride = String(takeValue('--key')).trim();
      continue;
    }
    if (arg === '--key-location') {
      keyLocation = String(takeValue('--key-location')).trim();
      continue;
    }
    if (arg === '--host') {
      hostOverride = String(takeValue('--host'))
        .trim()
        .replace(/^https?:\/\//i, '')
        .replace(/\/$/, '');
      continue;
    }
    if (arg === '--batch-size') {
      batchSize = Number(takeValue('--batch-size'));
      if (!Number.isFinite(batchSize) || batchSize < 1 || batchSize > MAX_URLS_PER_POST) {
        throw new Error(`--batch-size must be 1..${MAX_URLS_PER_POST}`);
      }
      continue;
    }
    if (arg === '--limit') {
      limit = Number(takeValue('--limit'));
      if (!Number.isFinite(limit) || limit < 0) {
        throw new Error('--limit must be a non-negative number');
      }
      continue;
    }
    if (arg === '--lang' || arg === '--langs') {
      langs.push(...splitList(takeValue(arg)));
      continue;
    }
    if (arg === '--tool' || arg === '--tools') {
      tools.push(...splitList(takeValue(arg)));
      continue;
    }
    if (arg === '--path' || arg === '--paths') {
      paths.push(...splitList(takeValue(arg)));
      continue;
    }
    if (arg === '--url' || arg === '--urls') {
      urls.push(...splitList(takeValue(arg)));
      continue;
    }
    if (arg === '--urls-file') {
      urlsFiles.push(path.resolve(takeValue('--urls-file')));
      continue;
    }
    if (arg === '--include') {
      include.push(...splitList(takeValue('--include')));
      continue;
    }
    if (arg === '--exclude') {
      exclude.push(...splitList(takeValue('--exclude')));
      continue;
    }
    if (arg === '--home') {
      home = true;
      continue;
    }
    if (arg === '--about') {
      about = true;
      continue;
    }
    if (arg === '--incremental') {
      incremental = true;
      continue;
    }
    if (arg === '--baseline') {
      baseline = true;
      continue;
    }
    if (arg === '--reset-state') {
      resetState = true;
      continue;
    }
    if (arg === '--no-save-state') {
      noSaveState = true;
      continue;
    }
    if (arg === '--state-file') {
      stateFile = path.resolve(takeValue('--state-file'));
      continue;
    }
    if (arg === '--since-git') {
      sinceGit = String(takeValue('--since-git')).trim();
      if (!sinceGit) throw new Error('--since-git requires a git ref (e.g. HEAD~1, origin/main)');
      continue;
    }
    if (arg.startsWith('-')) {
      throw new Error(`Unknown argument: ${arg}. Use --help.`);
    }

    // 位置参数：绝对 URL 或站点相对路径
    if (/^https?:\/\//i.test(arg)) {
      urls.push(arg);
    } else {
      paths.push(arg.startsWith('/') ? arg : `/${arg}`);
    }
  }

  return {
    help,
    dryRun,
    checkKey,
    requireLiveKey,
    skipLocalKeyCheck,
    quiet,
    verbose,
    endpointName,
    sitemapSources: uniquePreserveOrder(sitemapSources),
    useSitemap,
    sitemapOnly,
    remoteSitemap,
    keyLocation,
    hostOverride,
    keyOverride,
    batchSize,
    limit,
    langs: uniquePreserveOrder(langs),
    tools: uniquePreserveOrder(tools),
    paths: uniquePreserveOrder(paths),
    urls: uniquePreserveOrder(urls),
    urlsFiles: uniquePreserveOrder(urlsFiles),
    include,
    exclude,
    home,
    about,
    incremental,
    baseline,
    resetState,
    noSaveState,
    stateFile,
    sinceGit,
  };
};

/**
 * 打印 CLI 帮助。
 */
const printHelp = () => {
  console.log(`Usage: npm run indexnow -- [options] [url-or-path...]

Sitemap submission:
  (default)                      Submit <loc> from public/sitemap.xml
  --sitemap [path|url]           Explicit sitemap source (optional value; repeatable)
  --sitemap-url <https-url>      Remote sitemap URL
  --remote-sitemap               Fetch \${SITE_BASE_URL}/sitemap.xml
  --sitemap-only                 Only sitemap URLs (ignore --tool/--path/--url...)
  --from-sitemap                 Alias: also include default local sitemap
  --include / --exclude          Substring filters on final URL list

Other selectors:
  --tool <slug[,slug]>           All locale URLs for catalog tool(s)
  --path </path>                 Expand path across --lang
  --home / --about               Localized home and/or about pages
  --url <abs-url>                Explicit absolute URL(s)
  --urls-file <file>             One URL/path per line (# comments ok)
  positional args                Absolute URL or site path

Incremental:
  --incremental                  Skip URLs already recorded in state (after success)
  --since-git <ref>              Map git changes since <ref> → tool/page URLs
                                 (alone: only those URLs; with sitemap: union)
  --baseline                     Write collected URLs to state; do not POST
  --reset-state                  Delete state file (alone: exit; with other flags: continue)
  --state-file <path>            Default: .run/indexnow-state.json
  --no-save-state                Do not update state after a successful POST

Common flags:
  --check-key / --require-live-key
  --dry-run / --endpoint <name|url> / --lang <codes>
  --limit N / --batch-size N
  --key / --key-location / --host
  --skip-local-key-check
  -q/--quiet  -v/--verbose  -h/--help

Env:
  INDEXNOW_KEY     Override key (must match public/{key}.txt)
  SITE_BASE_URL    Default https://onlinefreetools.org

Examples:
  npm run indexnow
  npm run indexnow -- --sitemap
  npm run indexnow -- --sitemap public/sitemap.xml --include /tools/
  npm run indexnow -- --remote-sitemap --dry-run
  npm run indexnow -- --sitemap https://onlinefreetools.org/sitemap.xml --limit 20
  npm run indexnow -- --sitemap-only --exclude /zh/
  npm run indexnow -- --tool html-entity --lang zh
  npm run indexnow -- --check-key
  npm run indexnow -- --baseline --remote-sitemap
  npm run indexnow -- --incremental --remote-sitemap
  npm run indexnow -- --since-git HEAD~1 --lang zh,en
  npm run indexnow -- --incremental --since-git origin/main --require-live-key
`);
};

/**
 * 解析目标语言列表（CLI 覆盖或 siteConfig.enabledLangs）。
 * @param {string[]} requested CLI --lang 列表
 * @returns {string[]}
 */
const resolveLangs = (requested) => {
  /** 站点启用语言 */
  const enabled = siteConfig.enabledLangs || [siteConfig.defaultLang || 'en'];
  if (!requested.length) return enabled.slice();
  for (const lang of requested) {
    if (!enabled.includes(lang)) {
      throw new Error(`Unsupported --lang "${lang}". Enabled: ${enabled.join(', ')}`);
    }
  }
  return requested.slice();
};

/**
 * 用指定 host 生成站点根 URL（保留 SITE_BASE_URL 的协议）。
 * @param {string} host 主机名
 * @returns {string} 无尾斜杠的根 URL
 */
const baseUrlForHost = (host) => {
  /** 配置中的协议 */
  const protocol = new URL(siteConfig.baseUrl).protocol.replace(':', '') || 'https';
  return `${protocol}://${host}`;
};

/**
 * 按语言把站点相对路径展开为绝对 URL。
 * @param {string} pathname 以 / 开头的路径（通常无语言前缀）
 * @param {string[]} langs 语言代码
 * @param {string} baseUrl 站点根
 * @returns {string[]}
 */
const expandPathForLangs = (pathname, langs, baseUrl) => {
  /** 规范化路径 */
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return langs.map((lang) => {
    const localized = withLangPath(lang, safePath);
    return `${baseUrl}${localized.startsWith('/') ? localized : `/${localized}`}`;
  });
};

/**
 * 根据 tool slug 查 catalog 并展开多语言 URL。
 * @param {string} slug 工具 slug
 * @param {string[]} langs 语言列表
 * @param {string} baseUrl 站点根
 * @returns {string[]}
 */
const expandToolUrls = (slug, langs, baseUrl) => {
  /** 匹配到的工具条目 */
  const tool = TOOL_CATALOG.find((t) => t.slug === slug || t.path === `/tools/${slug}`);
  if (!tool) {
    const known = TOOL_CATALOG.map((t) => t.slug).join(', ');
    throw new Error(`Unknown --tool "${slug}". Known: ${known}`);
  }
  return expandPathForLangs(tool.path, langs, baseUrl);
};

/**
 * 从文本文件读取 URL/路径行。
 * @param {string} filePath 文件绝对路径
 * @returns {Promise<string[]>}
 */
const readUrlsFile = async (filePath) => {
  const text = await fs.readFile(filePath, 'utf8');
  return text
    .split(/\r?\n/)
    .map((line) => line.replace(/#.*$/, '').trim())
    .filter(Boolean);
};

/**
 * 从 XML 中提取全部 <loc> 文本（urlset / sitemapindex 通用）。
 * @param {string} xml sitemap 或 sitemapindex 文本
 * @returns {string[]}
 */
const extractLocTexts = (xml) => {
  /** 结果（可含重复，后续再去重） */
  const list = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let match = re.exec(xml);
  while (match) {
    const url = match[1].trim();
    if (url) list.push(url);
    match = re.exec(xml);
  }
  return list;
};

/**
 * 判断 XML 是否为 sitemap index。
 * @param {string} xml XML 文本
 * @returns {boolean}
 */
const isSitemapIndex = (xml) => /<sitemapindex[\s>]/i.test(xml);

/**
 * 读取本地或远程 sitemap 文本。
 * @param {string} source 本地路径或 http(s) URL
 * @returns {Promise<{ source: string, xml: string }>}
 */
const readSitemapXml = async (source) => {
  if (/^https?:\/\//i.test(source)) {
    const res = await fetch(source, {
      method: 'GET',
      redirect: 'follow',
      headers: { Accept: 'application/xml,text/xml,*/*' },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch sitemap ${source}: HTTP ${res.status}`);
    }
    return { source, xml: await res.text() };
  }

  /** 本地绝对路径 */
  const filePath = path.isAbsolute(source) ? source : path.resolve(rootDir, source);
  try {
    const xml = await fs.readFile(filePath, 'utf8');
    return { source: filePath, xml };
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      throw new Error(`Sitemap file not found: ${filePath}`);
    }
    throw err;
  }
};

/**
 * 从单个 sitemap 来源解析页面 URL；若为 sitemapindex 则递归拉取子 sitemap。
 * @param {string} source 本地路径或 URL
 * @param {number} depth 递归深度（防止环）
 * @param {Set<string>} visited 已访问来源
 * @returns {Promise<string[]>} 页面绝对 URL 列表
 */
const loadUrlsFromSitemapSource = async (source, depth = 0, visited = new Set()) => {
  if (depth > 3) {
    throw new Error(`Sitemap index nesting too deep (>3): ${source}`);
  }
  if (visited.has(source)) return [];
  visited.add(source);

  const { xml } = await readSitemapXml(source);
  const locs = extractLocTexts(xml);

  if (isSitemapIndex(xml)) {
    /** 子 sitemap 展开后的 URL */
    const nested = [];
    for (const child of locs) {
      nested.push(...(await loadUrlsFromSitemapSource(child, depth + 1, visited)));
    }
    return nested;
  }

  return locs;
};

/**
 * 解析全部 sitemap 来源并合并 <loc>。
 * @param {string[]} sources 来源列表
 * @param {{ verbose?: boolean, quiet?: boolean }} log 日志选项
 * @returns {Promise<string[]>}
 */
const loadUrlsFromSitemaps = async (sources, log = {}) => {
  /** 合并结果 */
  const urls = [];
  for (const source of sources) {
    const fromOne = await loadUrlsFromSitemapSource(source);
    if (log.verbose && !log.quiet) {
      console.log(`Sitemap ${source}: ${fromOne.length} URL(s)`);
    }
    urls.push(...fromOne);
  }
  return uniquePreserveOrder(urls);
};

/**
 * 按 include/exclude 子串过滤 URL。
 * @param {string[]} urls URL 列表
 * @param {string[]} include 须匹配其一（空 = 不过滤）
 * @param {string[]} exclude 匹配任一则剔除
 * @returns {string[]}
 */
const filterUrls = (urls, include, exclude) =>
  urls.filter((url) => {
    if (include.length && !include.some((needle) => url.includes(needle))) return false;
    if (exclude.length && exclude.some((needle) => url.includes(needle))) return false;
    return true;
  });

/**
 * 规范化绝对 URL（保留 sitemap 中的尾斜杠形态，避免 /zh/ 被改成 /zh）。
 * @param {string} absolute 绝对 URL
 * @returns {string}
 */
const canonicalizeUrl = (absolute) => {
  // 仅做 URL 合法性解析；不改写 pathname，以保持与 sitemap/线上一致
  return new URL(absolute).toString();
};

/**
 * 把任意输入规范化为属于本站 host 的绝对 URL。
 * @param {string} input 绝对 URL 或站点路径
 * @param {string} host 期望 host
 * @param {string} baseUrl 站点根（无尾斜杠）
 * @returns {string}
 */
const normalizeToAbsoluteUrl = (input, host, baseUrl) => {
  /** 绝对 URL 文本 */
  let absolute = input;
  if (!/^https?:\/\//i.test(input)) {
    const pathname = input.startsWith('/') ? input : `/${input}`;
    absolute = `${baseUrl}${pathname}`;
  }
  let parsed;
  try {
    parsed = new URL(absolute);
  } catch {
    throw new Error(`Invalid URL: ${input}`);
  }
  if (parsed.hostname !== host) {
    throw new Error(`URL host mismatch: ${absolute} (expected host ${host})`);
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    throw new Error(`Unsupported protocol for ${absolute}`);
  }
  return canonicalizeUrl(parsed.toString());
};

/**
 * 判断路径是否已带语言前缀（如 /zh/...）。
 * @param {string} pathname 站点路径
 * @returns {boolean}
 */
const hasExplicitLangPrefix = (pathname) => {
  const enabled = siteConfig.enabledLangs || [];
  return enabled.some((code) => pathname === `/${code}` || pathname.startsWith(`/${code}/`));
};

/**
 * 分块。
 * @param {string[]} urls URL 列表
 * @param {number} size 块大小
 * @returns {string[][]}
 */
const chunkUrls = (urls, size) => {
  /** 结果块 */
  const chunks = [];
  for (let i = 0; i < urls.length; i += size) {
    chunks.push(urls.slice(i, i + size));
  }
  return chunks;
};

/**
 * 检查线上 key 文件是否可访问且正文匹配。
 * @param {string} keyLocation key 文件绝对 URL
 * @param {string} key 期望正文
 * @returns {Promise<{ ok: boolean, status: number, body: string }>}
 */
const checkLiveKey = async (keyLocation, key) => {
  const res = await fetch(keyLocation, {
    method: 'GET',
    redirect: 'follow',
    headers: { Accept: 'text/plain,*/*' },
  });
  /** 响应正文（去首尾空白） */
  const body = (await res.text()).trim();
  /** 状态与正文均匹配才算通过 */
  const ok = res.status === 200 && body === key;
  return { ok, status: res.status, body };
};

/**
 * POST 一批 URL 到 IndexNow。
 * @param {object} options 提交参数
 * @returns {Promise<{ status: number, body: string }>}
 */
const submitBatch = async ({ endpoint, host, key, keyLocation, urlList, dryRun }) => {
  /** JSON 请求体 */
  const payload = { host, key, keyLocation, urlList };

  if (dryRun) {
    console.log('[dry-run] POST', endpoint);
    console.log(JSON.stringify(payload, null, 2));
    return { status: 0, body: '' };
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  return { status: res.status, body: await res.text() };
};

/**
 * 解析本次应读取的 sitemap 来源列表。
 * @param {object} args parseArgs 结果
 * @param {string} baseUrl 站点根
 * @param {boolean} hasSelectors 是否存在非 sitemap 选择器
 * @param {boolean} gitOnly 是否仅按 git 变更收集（跳过默认全量 sitemap）
 * @returns {string[]}
 */
const resolveSitemapSources = (args, baseUrl, hasSelectors, gitOnly) => {
  /** 来源列表 */
  const sources = args.sitemapSources.slice();

  if (args.remoteSitemap) {
    sources.push(`${baseUrl}/sitemap.xml`);
  }

  // 默认模式（无选择器、非 git-only、且未显式指定来源）→ 本地 sitemap
  if (
    !gitOnly &&
    !hasSelectors &&
    !args.useSitemap &&
    !args.remoteSitemap &&
    sources.length === 0
  ) {
    sources.push(defaultSitemapPath);
  }

  // 显式 --sitemap / --from-sitemap / --sitemap-only 但未给值时，parseArgs 已塞入默认路径
  // 若仅 --remote-sitemap，上面已加入远程 URL
  if ((args.useSitemap || args.sitemapOnly) && sources.length === 0) {
    sources.push(defaultSitemapPath);
  }

  return uniquePreserveOrder(sources);
};

/**
 * 解析增量状态文件绝对路径。
 * @param {object} args parseArgs 结果
 * @returns {string}
 */
const resolveStatePath = (args) => args.stateFile || defaultStatePath;

/**
 * 读取增量状态；文件不存在时返回空状态。
 * @param {string} statePath 状态文件路径
 * @param {string} host 期望 host（不一致时忽略旧 URL）
 * @returns {Promise<{ version: number, host: string, updatedAt: string, urls: Record<string, { submittedAt: string, endpoint?: string }> }>}
 */
const loadState = async (statePath, host) => {
  /** 空状态模板 */
  const empty = { version: STATE_VERSION, host, updatedAt: '', urls: {} };
  try {
    const raw = await fs.readFile(statePath, 'utf8');
    /** 解析后的 JSON */
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return empty;
    /** 历史 URL 表 */
    const urls =
      parsed.urls && typeof parsed.urls === 'object' && !Array.isArray(parsed.urls)
        ? parsed.urls
        : {};
    if (parsed.host && parsed.host !== host) {
      console.warn(
        `IndexNow state host mismatch (state=${parsed.host}, now=${host}); ignoring prior URLs.`
      );
      return empty;
    }
    return {
      version: Number(parsed.version) || STATE_VERSION,
      host,
      updatedAt: String(parsed.updatedAt || ''),
      urls,
    };
  } catch (err) {
    if (err && err.code === 'ENOENT') return empty;
    throw err;
  }
};

/**
 * 将状态原子写入磁盘（先写临时文件再 rename）。
 * @param {string} statePath 状态文件路径
 * @param {{ version: number, host: string, updatedAt: string, urls: Record<string, object> }} state 状态对象
 * @returns {Promise<void>}
 */
const saveState = async (statePath, state) => {
  await fs.mkdir(path.dirname(statePath), { recursive: true });
  /** 临时文件路径 */
  const tmpPath = `${statePath}.${process.pid}.tmp`;
  await fs.writeFile(tmpPath, `${JSON.stringify(state, null, 2)}\n`, 'utf8');
  await fs.rename(tmpPath, statePath);
};

/**
 * 删除增量状态文件（不存在则忽略）。
 * @param {string} statePath 状态文件路径
 * @returns {Promise<boolean>} 是否实际删除了文件
 */
const deleteState = async (statePath) => {
  try {
    await fs.unlink(statePath);
    return true;
  } catch (err) {
    if (err && err.code === 'ENOENT') return false;
    throw err;
  }
};

/**
 * 列出 git 引用相对 HEAD 的变更文件（name-only）。
 * @param {string} gitRef 起始引用（如 HEAD~1、origin/main）
 * @returns {string[]} 相对仓库根的路径列表
 */
const listChangedFilesSince = (gitRef) => {
  try {
    /** git diff 输出 */
    const out = execFileSync('git', ['diff', '--name-only', `${gitRef}...HEAD`], {
      cwd: rootDir,
      encoding: 'utf8',
    });
    return out
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  } catch (err) {
    /** 错误信息 */
    const detail = err && err.stderr ? String(err.stderr).trim() : String(err?.message || err);
    throw new Error(`git diff failed for --since-git ${gitRef}: ${detail}`);
  }
};

/**
 * 从 catalog 构建「页面模块文件名 → slug」映射。
 * @returns {Map<string, string>} 如 indexNowPage.ts → indexnow
 */
const buildPageFileToSlugMap = () => {
  /** 映射表 */
  const map = new Map();
  for (const tool of TOOL_CATALOG) {
    /** page.module 如 ../pages/indexNowPage */
    const mod = tool?.page?.module;
    if (!mod || !tool.slug) continue;
    /** 模块 basename（无扩展名） */
    const base = path.basename(String(mod));
    map.set(base, tool.slug);
    map.set(`${base}.ts`, tool.slug);
    map.set(`${base}.js`, tool.slug);
  }
  return map;
};

/**
 * 将仓库相对路径映射为 IndexNow 选择器（tools / site paths / home）。
 * @param {string[]} files git 变更文件列表
 * @returns {{ tools: string[], paths: string[], home: boolean, about: boolean, unmatched: string[] }}
 */
const mapChangedFilesToSelectors = (files) => {
  /** 工具 slug 集合 */
  const tools = new Set();
  /** 站点路径集合（无语言前缀） */
  const paths = new Set();
  /** 是否包含首页 */
  let home = false;
  /** 是否包含 About */
  let about = false;
  /** 未能映射的文件（供 verbose 日志） */
  const unmatched = [];
  /** 页面文件 → slug */
  const pageToSlug = buildPageFileToSlugMap();

  for (const file of files) {
    /** i18n 工具分片 */
    let match = file.match(/^src\/site\/i18n\/tools\/([^/]+)\//);
    if (match) {
      tools.add(match[1]);
      continue;
    }
    /** catalog 分片 */
    match = file.match(/^src\/site\/tool-catalog\.d\/([^/]+)\.json$/);
    if (match) {
      tools.add(match[1]);
      continue;
    }
    /** 工具图标 */
    match = file.match(/^public\/icons\/tools\/([^/]+)\.svg$/);
    if (match) {
      tools.add(match[1]);
      continue;
    }
    /** 工具页面实现 */
    if (file.startsWith('src/pages/') && /\.(ts|js)$/.test(file)) {
      /** 文件名（含扩展名） */
      const baseWithExt = path.basename(file);
      /** 无扩展名 */
      const base = path.basename(file, path.extname(file));
      /** 匹配到的 slug */
      const slug = pageToSlug.get(baseWithExt) || pageToSlug.get(base);
      if (slug) {
        tools.add(slug);
        continue;
      }
      if (/^about/i.test(base)) {
        about = true;
        continue;
      }
      if (/privacy/i.test(base)) {
        paths.add('/privacy');
        continue;
      }
      if (/terms/i.test(base)) {
        paths.add('/terms');
        continue;
      }
      if (/contact/i.test(base)) {
        paths.add('/contact');
        continue;
      }
    }
    if (
      file === 'scripts/site/content-home.mjs' ||
      file === 'src/site/tool-catalog.json' ||
      /home/i.test(path.basename(file))
    ) {
      home = true;
      continue;
    }
    if (/about/i.test(file) && (file.startsWith('scripts/') || file.startsWith('src/pages/'))) {
      about = true;
      continue;
    }
    unmatched.push(file);
  }

  return {
    tools: [...tools].sort(),
    paths: [...paths].sort(),
    home,
    about,
    unmatched,
  };
};

/**
 * 按 git 变更展开为绝对 URL 列表。
 * @param {string} gitRef 起始引用
 * @param {string[]} langs 语言列表
 * @param {string} baseUrl 站点根
 * @param {{ verbose?: boolean, quiet?: boolean }} log 日志选项
 * @returns {string[]}
 */
const collectUrlsFromGitSince = (gitRef, langs, baseUrl, log = {}) => {
  /** 变更文件 */
  const files = listChangedFilesSince(gitRef);
  /** 映射结果 */
  const mapped = mapChangedFilesToSelectors(files);
  if (!log.quiet) {
    console.log(
      `IndexNow --since-git ${gitRef}: ${files.length} file(s) → tools=[${mapped.tools.join(', ') || '-'}] paths=[${mapped.paths.join(', ') || '-'}] home=${mapped.home} about=${mapped.about}`
    );
    if (log.verbose && mapped.unmatched.length) {
      console.log(`IndexNow --since-git unmatched files (${mapped.unmatched.length}):`);
      for (const f of mapped.unmatched.slice(0, 40)) console.log(`  ${f}`);
      if (mapped.unmatched.length > 40) {
        console.log(`  ... +${mapped.unmatched.length - 40} more`);
      }
    }
  }

  /** 展开后的 URL */
  const urls = [];
  if (mapped.home) urls.push(...expandPathForLangs('/', langs, baseUrl));
  if (mapped.about) urls.push(...expandPathForLangs('/about', langs, baseUrl));
  for (const slug of mapped.tools) {
    try {
      urls.push(...expandToolUrls(slug, langs, baseUrl));
    } catch (err) {
      if (!log.quiet) {
        console.warn(`IndexNow --since-git skip unknown tool "${slug}": ${err.message || err}`);
      }
    }
  }
  for (const p of mapped.paths) {
    urls.push(...expandPathForLangs(p, langs, baseUrl));
  }
  return uniquePreserveOrder(urls);
};

/**
 * 从候选列表中剔除已在状态中的 URL（增量）。
 * @param {string[]} urls 候选 URL
 * @param {Record<string, object>} stateUrls 状态中的 URL 表
 * @returns {{ pending: string[], skipped: number }}
 */
const filterIncrementalUrls = (urls, stateUrls) => {
  /** 待提交 */
  const pending = [];
  /** 跳过计数 */
  let skipped = 0;
  for (const url of urls) {
    if (stateUrls[url]) {
      skipped += 1;
      continue;
    }
    pending.push(url);
  }
  return { pending, skipped };
};

/**
 * 把成功提交的 URL 合并进状态。
 * @param {object} state 当前状态
 * @param {string[]} submittedUrls 成功批次中的 URL
 * @param {string} endpoint 端点 URL
 * @param {string} host 站点 host
 * @returns {object} 更新后的状态
 */
const mergeSubmittedIntoState = (state, submittedUrls, endpoint, host) => {
  /** ISO 时间戳 */
  const submittedAt = new Date().toISOString();
  /** 新 URL 表（浅拷贝） */
  const urls = { ...(state.urls || {}) };
  for (const url of submittedUrls) {
    urls[url] = { submittedAt, endpoint };
  }
  return {
    version: STATE_VERSION,
    host,
    updatedAt: submittedAt,
    urls,
  };
};

/**
 * 用完整 URL 列表覆盖式写入 baseline 状态。
 * @param {string[]} urlList URL 列表
 * @param {string} host 站点 host
 * @param {string} [note] 备注（写入每条记录）
 * @returns {object}
 */
const buildBaselineState = (urlList, host, note = 'baseline') => {
  /** ISO 时间戳 */
  const submittedAt = new Date().toISOString();
  /** URL 表 */
  const urls = {};
  for (const url of urlList) {
    urls[url] = { submittedAt, note };
  }
  return {
    version: STATE_VERSION,
    host,
    updatedAt: submittedAt,
    urls,
  };
};

/**
 * 判断 CLI 是否带有显式非 sitemap 选择器。
 * @param {object} args parseArgs 结果
 * @returns {boolean}
 */
const hasExplicitSelectors = (args) =>
  args.tools.length > 0 ||
  args.paths.length > 0 ||
  args.urls.length > 0 ||
  args.urlsFiles.length > 0 ||
  args.home ||
  args.about;

/**
 * 根据 CLI 选项收集待提交 URL（不含 --limit；limit 在增量过滤后应用）。
 * @param {object} args parseArgs 结果
 * @param {string} host 站点 host
 * @param {string} baseUrl 站点根
 * @returns {Promise<string[]>}
 */
const collectUrls = async (args, host, baseUrl) => {
  /** 目标语言 */
  const langs = resolveLangs(args.langs);
  /** 累积原始条目（路径或 URL） */
  const collected = [];

  /** 是否存在显式非 sitemap 选择器 */
  const hasSelectors = hasExplicitSelectors(args);
  /** 仅 --since-git、无其它选择器/sitemap → 不拉全量 sitemap */
  const gitOnly =
    Boolean(args.sinceGit) &&
    !hasSelectors &&
    !args.useSitemap &&
    !args.remoteSitemap &&
    !args.sitemapOnly;

  if (args.sitemapOnly && hasSelectors) {
    throw new Error(
      '--sitemap-only cannot be combined with --tool/--path/--url/--home/--about/--urls-file'
    );
  }

  if (!args.sitemapOnly) {
    if (args.home) collected.push(...expandPathForLangs('/', langs, baseUrl));
    if (args.about) collected.push(...expandPathForLangs('/about', langs, baseUrl));

    for (const slug of args.tools) {
      collected.push(...expandToolUrls(slug, langs, baseUrl));
    }

    for (const p of args.paths) {
      if (hasExplicitLangPrefix(p)) {
        collected.push(`${baseUrl}${p}`);
      } else {
        collected.push(...expandPathForLangs(p, langs, baseUrl));
      }
    }

    for (const u of args.urls) {
      collected.push(u);
    }

    for (const filePath of args.urlsFiles) {
      const lines = await readUrlsFile(filePath);
      for (const line of lines) {
        if (/^https?:\/\//i.test(line)) {
          collected.push(line);
        } else {
          const pathname = line.startsWith('/') ? line : `/${line}`;
          if (hasExplicitLangPrefix(pathname)) {
            collected.push(`${baseUrl}${pathname}`);
          } else {
            collected.push(...expandPathForLangs(pathname, langs, baseUrl));
          }
        }
      }
    }

    if (args.sinceGit) {
      collected.push(
        ...collectUrlsFromGitSince(args.sinceGit, langs, baseUrl, {
          verbose: args.verbose,
          quiet: args.quiet,
        })
      );
    }
  }

  /** 应读取的 sitemap 来源 */
  const sitemapSources = resolveSitemapSources(args, baseUrl, hasSelectors, gitOnly);
  /** 无选择器 / 显式要求 sitemap / sitemap-only → 读取 sitemap（git-only 除外） */
  const shouldReadSitemap =
    args.sitemapOnly ||
    args.useSitemap ||
    args.remoteSitemap ||
    (!hasSelectors && !gitOnly);

  if (shouldReadSitemap) {
    if (sitemapSources.length === 0) {
      throw new Error('No sitemap source resolved. Use --sitemap, --remote-sitemap, or --sitemap-url.');
    }
    if (!args.quiet) {
      console.log(`IndexNow sitemap source(s): ${sitemapSources.join(', ')}`);
    }
    const fromSitemap = await loadUrlsFromSitemaps(sitemapSources, {
      verbose: args.verbose,
      quiet: args.quiet,
    });
    collected.push(...fromSitemap);
  }

  /** 规范化 + host 校验 */
  let urlList = uniquePreserveOrder(
    collected.map((item) => normalizeToAbsoluteUrl(item, host, baseUrl))
  );

  if (args.include.length || args.exclude.length) {
    urlList = filterUrls(urlList, args.include, args.exclude);
  }

  return urlList;
};

/**
 * 主流程：解析参数 → 校验 key → 收集 URL → 增量过滤 → 分批提交 → 写状态。
 */
const main = async () => {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  /** 增量状态文件路径 */
  const statePath = resolveStatePath(args);

  if (args.resetState) {
    /** 是否删除成功 */
    const removed = await deleteState(statePath);
    if (!args.quiet) {
      console.log(removed ? `Removed state: ${statePath}` : `No state file: ${statePath}`);
    }
    // 单独 --reset-state 时直接结束；若同时带 baseline/提交参数则继续
    const onlyReset =
      !args.baseline &&
      !args.incremental &&
      !args.sinceGit &&
      !args.checkKey &&
      !hasExplicitSelectors(args) &&
      !args.useSitemap &&
      !args.remoteSitemap &&
      !args.sitemapOnly;
    if (onlyReset) return;
  }

  /** IndexNow key */
  const key = (args.keyOverride || process.env.INDEXNOW_KEY || siteConfig.indexNowKey || '').trim();
  if (!key) throw new Error('INDEXNOW_KEY / siteConfig.indexNowKey / --key is empty');
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
    throw new Error('IndexNow key must be 8–128 chars of [A-Za-z0-9-]');
  }

  /** 提交用 host */
  const host = args.hostOverride || new URL(siteConfig.baseUrl).hostname;
  /** 与 host 对齐的站点根 */
  const baseUrl = baseUrlForHost(host);
  /** key 文件公开 URL */
  const resolvedKeyLocation = args.keyLocation || `${baseUrl}/${key}.txt`;
  /** POST 端点 */
  const endpoint = ENDPOINT_MAP[args.endpointName] || args.endpointName;

  if (!args.skipLocalKeyCheck) {
    /** 本地 key 文件路径 */
    const localKeyPath = path.join(rootDir, 'public', `${key}.txt`);
    try {
      const localKeyBody = (await fs.readFile(localKeyPath, 'utf8')).trim();
      if (localKeyBody !== key) {
        throw new Error(`Local key file mismatch: ${localKeyPath}`);
      }
    } catch (err) {
      if (err && err.code === 'ENOENT') {
        throw new Error(`Missing key file: ${localKeyPath}. Deploy it to ${resolvedKeyLocation}`);
      }
      throw err;
    }
  }

  if (args.checkKey || args.requireLiveKey) {
    const live = await checkLiveKey(resolvedKeyLocation, key);
    if (!args.quiet) {
      console.log(`Live key: ${resolvedKeyLocation}`);
      console.log(`Live key HTTP ${live.status}; bodyMatch=${live.ok}`);
      if (!live.ok && live.body) {
        console.log(`Live key body (trimmed): ${live.body.slice(0, 120)}`);
      }
    }
    if (args.checkKey) {
      if (!live.ok) process.exit(1);
      return;
    }
    if (args.requireLiveKey && !live.ok) {
      throw new Error(
        `Live key check failed (HTTP ${live.status}). Bind/deploy key to ${resolvedKeyLocation} before submit.`
      );
    }
  }

  // --check-key 已在上方 return；此处继续提交流程
  /** 收集到的候选 URL（增量过滤前） */
  let urlList = await collectUrls(args, host, baseUrl);

  /** 当前增量状态 */
  let state = await loadState(statePath, host);

  if (args.incremental) {
    /** 过滤结果 */
    const { pending, skipped } = filterIncrementalUrls(urlList, state.urls || {});
    if (!args.quiet) {
      console.log(
        `IndexNow incremental: candidates=${urlList.length}, skip_known=${skipped}, pending=${pending.length}`
      );
      console.log(`IndexNow state: ${statePath} (${Object.keys(state.urls || {}).length} known URL(s))`);
    }
    urlList = pending;
  }

  if (args.limit > 0) {
    urlList = urlList.slice(0, args.limit);
  }

  if (args.baseline) {
    if (urlList.length === 0) {
      throw new Error('No URLs to baseline. See --help for scenarios.');
    }
    /** baseline 状态 */
    const next = buildBaselineState(urlList, host);
    if (args.dryRun) {
      if (!args.quiet) {
        console.log(`[dry-run] would write baseline ${urlList.length} URL(s) → ${statePath}`);
        if (args.verbose) for (const u of urlList) console.log(`  ${u}`);
      }
      return;
    }
    await saveState(statePath, next);
    if (!args.quiet) {
      console.log(`Wrote baseline ${urlList.length} URL(s) → ${statePath}`);
    }
    return;
  }

  if (urlList.length === 0) {
    if (args.incremental) {
      if (!args.quiet) console.log('IndexNow incremental: nothing new to submit.');
      return;
    }
    throw new Error('No URLs to submit. See --help for scenarios.');
  }

  if (!args.quiet) {
    console.log(`IndexNow host=${host}`);
    console.log(`IndexNow keyLocation=${resolvedKeyLocation}`);
    console.log(`IndexNow endpoint=${endpoint}`);
    console.log(`IndexNow urls=${urlList.length}${args.dryRun ? ' (dry-run)' : ''}`);
    if (args.verbose) {
      for (const u of urlList) console.log(`  ${u}`);
    }
  }

  /** 分批列表 */
  const batches = chunkUrls(urlList, args.batchSize);
  /** 是否出现失败批次 */
  let failed = false;
  /** 本轮成功提交的 URL（用于写状态） */
  const succeededUrls = [];

  for (let i = 0; i < batches.length; i += 1) {
    const batch = batches[i];
    const { status, body } = await submitBatch({
      endpoint,
      host,
      key,
      keyLocation: resolvedKeyLocation,
      urlList: batch,
      dryRun: args.dryRun,
    });

    if (args.dryRun) continue;

    if (status === 200 || status === 202) {
      succeededUrls.push(...batch);
      if (!args.quiet) {
        console.log(`Batch ${i + 1}/${batches.length}: HTTP ${status} OK (${batch.length} URLs)`);
      }
      if (status === 202 && !args.quiet) {
        console.log('Note: 202 = accepted; key validation may still be pending.');
      }
    } else {
      failed = true;
      console.error(`Batch ${i + 1}/${batches.length}: HTTP ${status}`);
      if (body) console.error(body);
    }
  }

  // 成功批次默认写回状态，供后续 --incremental 跳过；可用 --no-save-state 关闭
  if (!args.dryRun && !args.noSaveState && succeededUrls.length > 0) {
    /** 合并成功 URL 后的状态 */
    state = mergeSubmittedIntoState(state, succeededUrls, endpoint, host);
    await saveState(statePath, state);
    if (!args.quiet) {
      console.log(
        `Updated state ${statePath} (+${succeededUrls.length}, total ${Object.keys(state.urls).length})`
      );
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
