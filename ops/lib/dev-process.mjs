/**
 * 本地 Wrangler 开发进程管理：PID、端口、健康检查、启停辅助。
 * 供 ops/dev/start-dev.mjs 与 ops/dev/stop-dev.mjs 共用。
 */
import { promises as fs, existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

/** 仓库根目录（ops/lib 的上两级） */
export const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..'
);

/** 运行时状态目录（PID、日志，已 gitignore） */
export const runDir = path.join(projectRoot, '.run');

/** Wrangler dev 默认端口 */
export const defaultDevPort = 8787;

/** 默认绑定地址（与 wrangler --ip 一致） */
export const defaultDevHost = '127.0.0.1';

/** PID 文件路径 */
export const pidFilePath = path.join(runDir, 'wrangler-dev.pid');

/** 标准输出/错误日志路径 */
export const logFilePath = path.join(runDir, 'wrangler-dev.log');

/**
 * 本地 Ops UI（`ops/seo/sitemap-ui.mjs`，即 `npm run sitemap:ui` / `ops:ui`）默认端口。
 * 与 `SITEMAP_UI_PORT` 环境变量对齐。
 */
export const defaultOpsUiPort = Number(process.env.SITEMAP_UI_PORT || 8791);

/** Ops UI 绑定地址（强制本机回环，与 sitemap-ui.mjs 一致） */
export const defaultOpsUiHost = '127.0.0.1';

/** Ops UI PID 文件路径 */
export const opsUiPidFilePath = path.join(runDir, 'ops-ui.pid');

/** Ops UI 标准输出/错误日志路径 */
export const opsUiLogFilePath = path.join(runDir, 'ops-ui.log');

/** Ops UI 入口脚本绝对路径 */
export const opsUiEntryPath = path.join(projectRoot, 'ops', 'seo', 'sitemap-ui.mjs');

/**
 * 本地 dev 根 URL。
 * @param {number} [port]
 * @param {string} [host]
 * @returns {string}
 */
export const devServerOrigin = (port = defaultDevPort, host = defaultDevHost) =>
  `http://${host}:${port}`;

/**
 * 确保 .run 目录存在。
 * @returns {Promise<void>}
 */
export const ensureRunDir = async () => {
  await fs.mkdir(runDir, { recursive: true });
};

/**
 * 读取 PID 文件；不存在或无效时返回 null。
 * @returns {Promise<number|null>}
 */
export const readPid = async () => {
  try {
    const raw = (await fs.readFile(pidFilePath, 'utf-8')).trim();
    const pid = Number.parseInt(raw, 10);
    return Number.isFinite(pid) && pid > 0 ? pid : null;
  } catch {
    return null;
  }
};

/**
 * 写入 PID 文件。
 * @param {number} pid
 * @returns {Promise<void>}
 */
export const writePid = async (pid) => {
  await ensureRunDir();
  await fs.writeFile(pidFilePath, String(pid), 'utf-8');
};

/**
 * 删除 PID 文件（忽略不存在）。
 * @returns {Promise<void>}
 */
export const clearPid = async () => {
  try {
    await fs.unlink(pidFilePath);
  } catch {
    // 已停止或未启动
  }
};

/**
 * 检测进程是否仍在运行（跨平台）。
 * @param {number} pid
 * @returns {boolean}
 */
export const isProcessRunning = (pid) => {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
};

/**
 * 终止进程及其子进程（Windows 用 taskkill /T，Unix 用进程组 SIGTERM）。
 * @param {number} pid
 * @returns {boolean} 是否执行了终止命令
 */
export const killProcessTree = (pid) => {
  if (!isProcessRunning(pid)) return false;

  try {
    if (process.platform === 'win32') {
      execSync(`taskkill /PID ${pid} /T /F`, { stdio: 'ignore' });
      return true;
    }

    /** 先向进程本身发信号（listener 常非进程组组长，-pid 会 ESRCH） */
    try {
      process.kill(pid, 'SIGTERM');
    } catch {
      // 已退出或无权限
    }
    try {
      process.kill(-pid, 'SIGTERM');
    } catch {
      // 非组长或已退出
    }
    return true;
  } catch {
    try {
      process.kill(pid, 'SIGKILL');
      return true;
    } catch {
      return false;
    }
  }
};

/**
 * 按端口查找 LISTEN 进程 PID（Windows: netstat；Unix: lsof）。
 * @param {number} port
 * @param {string} [host]
 * @returns {number|null}
 */
export const findPidByPort = (port, host = defaultDevHost) => {
  try {
    if (process.platform === 'win32') {
      const out = execSync('netstat -ano -p tcp', { encoding: 'utf-8' });
      const suffix = `:${port}`;
      for (const line of out.split('\n')) {
        if (!line.includes('LISTENING') || !line.includes(suffix)) continue;
        if (host === '127.0.0.1' && !line.includes('127.0.0.1')) continue;
        const parts = line.trim().split(/\s+/);
        const pid = Number.parseInt(parts[parts.length - 1], 10);
        if (Number.isFinite(pid) && pid > 0) return pid;
      }
      return null;
    }

    const out = execSync(`lsof -ti tcp:${port} -sTCP:LISTEN`, { encoding: 'utf-8' }).trim();
    const pid = Number.parseInt(out.split('\n')[0], 10);
    return Number.isFinite(pid) && pid > 0 ? pid : null;
  } catch {
    return null;
  }
};

/**
 * HTTP 健康检查：GET / 且带 text/html Accept（Worker 路由要求）。
 * 接受 2xx 与 3xx（语言协商可能 302）。
 * @param {number} port
 * @param {string} [host]
 * @returns {Promise<boolean>}
 */
export const healthCheck = async (port = defaultDevPort, host = defaultDevHost) => {
  try {
    const res = await fetch(`${devServerOrigin(port, host)}/`, {
      headers: { Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8' },
      redirect: 'manual',
    });
    return res.status >= 200 && res.status < 400;
  } catch {
    return false;
  }
};

/**
 * 预渲染工具 HTML 目录（含 `.html` 与 `.html.gz`）。
 * @param {string} lang 语言码，默认 en
 * @returns {string}
 */
export const prerenderedToolsDir = (lang = 'en') =>
  path.join(projectRoot, 'public', '_pages', lang, 'tools');

/**
 * 按 mtime 取本地最新预渲染工具 slug（用来抓住「新页 404、旧页仍 200」）。
 * @param {string} [lang]
 * @returns {string | null}
 */
export const pickNewestPrerenderedToolSlug = (lang = 'en') => {
  const dir = prerenderedToolsDir(lang);
  if (!existsSync(dir)) return null;
  /** @type {string | null} */
  let best = null;
  let bestMtime = -1;
  for (const name of readdirSync(dir)) {
    const m = name.match(/^(.+)\.html(?:\.gz)?$/);
    if (!m) continue;
    const mtime = statSync(path.join(dir, name)).mtimeMs;
    if (mtime >= bestMtime) {
      bestMtime = mtime;
      best = m[1];
    }
  }
  return best;
};

/**
 * 带 Accept: text/html 探测工具页是否从本地 R2 返回 200。
 * 默认语 en 无前缀；其它语为 `/{lang}/tools/{slug}`。
 * 首页 Assets 200 不能证明灌桶成功，须用本函数（或 assertNewestToolPageServed）。
 * @param {number} port wrangler 端口
 * @param {string} slug 工具 slug
 * @param {string} [lang] 探测语言，默认 zh（与常见本机验收一致）
 * @param {string} [host] 绑定主机，默认 127.0.0.1
 * @returns {Promise<{ ok: boolean, status: number, url: string }>}
 */
export const toolPageHealthCheck = async (port, slug, lang = 'zh', host = defaultDevHost) => {
  /** 默认语无路径前缀；其它语 `/{lang}` */
  const prefix = lang === 'en' ? '' : `/${lang}`;
  /** 带 Accept: text/html 的探测 URL（Worker 对无 Accept 的 / 会 404） */
  const url = `${devServerOrigin(port, host)}${prefix}/tools/${encodeURIComponent(slug)}`;
  try {
    const res = await fetch(url, {
      headers: { Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8' },
      redirect: 'manual',
    });
    return { ok: res.status === 200, status: res.status, url };
  } catch {
    return { ok: false, status: 0, url };
  }
};

/**
 * 判断某语种下是否已有该 slug 的预渲染 HTML（明文或 gzip）。
 * @param {string} slug 工具 slug
 * @param {string} lang 语言码
 * @returns {boolean}
 */
export const prerenderedToolExists = (slug, lang) => {
  const dir = prerenderedToolsDir(lang);
  return existsSync(path.join(dir, `${slug}.html`)) || existsSync(path.join(dir, `${slug}.html.gz`));
};

/**
 * catalog shard 中 `updatedAt` 最新的 slug（新工具通常比旧页 mtime 更准）。
 * 全量 prerender/gzip 会把所有 `.html.gz` 写成相近 mtime，不能单靠磁盘时间找新页。
 * @returns {string | null}
 */
export const pickNewestCatalogToolSlug = () => {
  const dir = path.join(projectRoot, 'src', 'site', 'tool-catalog.d');
  if (!existsSync(dir)) return null;
  /** @type {string | null} */
  let best = null;
  /** ISO 时间字符串，字符串比较与 ISO-8601 一致 */
  let bestAt = '';
  for (const name of readdirSync(dir)) {
    if (!name.endsWith('.json')) continue;
    const slug = name.slice(0, -'.json'.length);
    try {
      const raw = JSON.parse(readFileSync(path.join(dir, name), 'utf8'));
      const at = String(raw?.updatedAt || '');
      if (at >= bestAt) {
        bestAt = at;
        best = slug;
      }
    } catch {
      /* 跳过损坏 shard */
    }
  }
  return best;
};

/**
 * 启动/status 要探测的工具页：catalog 最新 updatedAt + 磁盘 mtime 最新（去重）。
 * 只靠 mtime 会误探旧 slug，灌桶失败时新工具 404 仍会被当成健康。
 * @returns {Array<{ slug: string, lang: string }>}
 */
export const listToolPageProbes = () => {
  const lang = existsSync(prerenderedToolsDir('zh'))
    ? 'zh'
    : existsSync(prerenderedToolsDir('en'))
      ? 'en'
      : null;
  if (!lang) return [];
  /** @type {Set<string>} */
  const slugs = new Set();
  const catalogSlug = pickNewestCatalogToolSlug();
  if (catalogSlug && prerenderedToolExists(catalogSlug, lang)) slugs.add(catalogSlug);
  const mtimeSlug = pickNewestPrerenderedToolSlug(lang);
  if (mtimeSlug) slugs.add(mtimeSlug);
  return [...slugs].map((slug) => ({ slug, lang }));
};

/**
 * 选取 status/start 探测用的最新工具页（优先 catalog updatedAt）。
 * @returns {{ slug: string, lang: string } | null}
 */
export const pickNewestToolPageProbe = () => listToolPageProbes()[0] ?? null;

/**
 * 探测 catalog 最新 + 磁盘 mtime 最新的工具页。任一 404 即视为灌桶失败。
 * 首页 200 + 新工具 404 通常是本地 R2 未灌上。
 * @param {number} [port]
 * @param {string} [host]
 * @returns {Promise<{
 *   ok: boolean,
 *   skipped: boolean,
 *   status: number,
 *   url: string,
 *   slug: string | null,
 *   lang: string | null,
 *   hint: string,
 *   results: Array<{ ok: boolean, status: number, url: string, slug: string, lang: string }>,
 * }>}
 */
export const probeNewestToolPage = async (port = defaultDevPort, host = defaultDevHost) => {
  const probes = listToolPageProbes();
  if (!probes.length) {
    return {
      ok: true,
      skipped: true,
      status: 0,
      url: '',
      slug: null,
      lang: null,
      hint: 'no public/_pages/{lang}/tools HTML; run npm run build:site then npm run upload:r2:local',
      results: [],
    };
  }
  /** 每条探测的 HTTP 结果 */
  const results = [];
  for (const p of probes) {
    const result = await toolPageHealthCheck(port, p.slug, p.lang, host);
    results.push({ ...result, slug: p.slug, lang: p.lang });
  }
  const failed = results.find((r) => !r.ok);
  const first = failed || results[0];
  /** 灌桶失败时首页仍可能从 Assets 返回 200 */
  const hint = failed
    ? 'Home can be 200 from Assets while new tools 404 if local R2 seed failed. Fix: npm run upload:r2:local (start:dev no longer swallows seed errors).'
    : '';
  return {
    ok: !failed,
    skipped: false,
    status: first.status,
    url: first.url,
    slug: first.slug,
    lang: first.lang,
    hint,
    results,
  };
};

/**
 * start:dev 硬闸：探测页非 200 则抛错（无预渲染文件时警告并跳过）。
 * @param {number} port wrangler 端口
 * @returns {Promise<void>}
 */
export const assertNewestToolPageServed = async (port) => {
  const probe = await probeNewestToolPage(port);
  if (probe.skipped) {
    console.warn(`[start-dev] skip tool-page smoke (${probe.hint}).`);
    return;
  }
  if (!probe.ok) {
    throw new Error(`Tool page ${probe.url} returned ${probe.status} (expected 200). ${probe.hint}`);
  }
  for (const r of probe.results) {
    console.log(`Tool page smoke OK: ${r.url}`);
  }
};

/**
 * 读取进程命令行（Unix: ps；Windows: wmic）。
 * @param {number} pid
 * @returns {string}
 */
export const getProcessCommandLine = (pid) => {
  try {
    if (process.platform === 'win32') {
      const out = execSync(`wmic process where processid=${pid} get commandline /format:list`, {
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore'],
      });
      const line = out.split('\n').find((l) => l.startsWith('CommandLine='));
      return line ? line.slice('CommandLine='.length).trim() : '';
    }
    return execSync(`ps -p ${pid} -o command=`, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
};

/**
 * 判断占用端口的进程是否为本仓库 wrangler dev（避免误杀其他项目）。
 * @param {number} pid
 * @returns {boolean}
 */
export const isProjectDevProcess = (pid) => {
  const cmd = getProcessCommandLine(pid);
  if (!cmd) return false;
  const wranglerNeedle = path.join(projectRoot, 'node_modules', 'wrangler');
  return cmd.includes(projectRoot) || cmd.includes(wranglerNeedle);
};

/**
 * 描述当前占用端口的进程。
 * @param {number} [port]
 * @returns {{ pid: number, cmd: string, ours: boolean } | null}
 */
export const describePortBlocker = (port = defaultDevPort) => {
  const pid = findPidByPort(port);
  if (!pid) return null;
  const cmd = getProcessCommandLine(pid);
  return { pid, cmd, ours: isProjectDevProcess(pid) };
};

/**
 * 释放本项目的 dev 端口；若为其他项目占用则不杀进程。
 * @param {number} [port]
 * @param {{ maxWaitMs?: number, pollMs?: number }} [opts]
 * @returns {Promise<{ ok: boolean, pid: number|null, foreign: boolean }>}
 */
export const ensurePortFree = async (port = defaultDevPort, opts = {}) => {
  const { maxWaitMs = 12_000, pollMs = 250 } = opts;
  const deadline = Date.now() + maxWaitMs;

  while (Date.now() < deadline) {
    const blocker = describePortBlocker(port);
    if (!blocker) return { ok: true, pid: null, foreign: false };
    if (!blocker.ours) {
      return { ok: false, pid: blocker.pid, foreign: true };
    }
    killProcessTree(blocker.pid);
    await new Promise((resolve) => setTimeout(resolve, pollMs));
  }

  const remaining = describePortBlocker(port);
  if (!remaining) return { ok: true, pid: null, foreign: false };
  return { ok: false, pid: remaining.pid, foreign: !remaining.ours };
};

/** wrangler 日志中的致命错误片段（出现则不必等满超时） */
const DEV_LOG_FATAL_NEEDLES = [
  'Address already in use',
  'failed: ::bind(sockfd',
  'Specify a different port with --port',
  'was not found',
  'entry-point file',
];

/**
 * 读取 dev 日志是否含致命错误。
 * @returns {Promise<string|null>} 匹配到的片段，无则 null
 */
export const readDevLogFatalError = async () => {
  try {
    const log = await fs.readFile(logFilePath, 'utf-8');
    return DEV_LOG_FATAL_NEEDLES.find((needle) => log.includes(needle)) ?? null;
  } catch {
    return null;
  }
};

/**
 * 等待 wrangler 日志出现 Ready 且 HTTP 可访问。
 * macOS/Linux 上 wrangler 可能打印 `127.0.0.1` 或 `localhost`；
 * 若日志缓冲/重定向导致长时间为空，则以端口健康检查为准（避免误报超时）。
 * @param {number} port
 * @param {{ timeoutMs?: number, pollMs?: number, host?: string }} [opts]
 * @returns {Promise<boolean>}
 */
export const waitForDevReady = async (port = defaultDevPort, opts = {}) => {
  const { timeoutMs = 90_000, pollMs = 500, host = defaultDevHost } = opts;
  const deadline = Date.now() + timeoutMs;
  /** wrangler 在不同 OS 上 Ready 行主机名不一致 */
  const readyNeedles = [
    `Ready on http://${host}:${port}`,
    `Ready on http://127.0.0.1:${port}`,
    `Ready on http://localhost:${port}`,
  ];
  /** 连续健康检查通过次数（防 workerd 刚 bind 尚未可服务） */
  let healthyStreak = 0;

  while (Date.now() < deadline) {
    const fatal = await readDevLogFatalError();
    if (fatal) return false;

    const healthy = await healthCheck(port, host);
    if (healthy) {
      healthyStreak += 1;
    } else {
      healthyStreak = 0;
    }

    try {
      const log = await fs.readFile(logFilePath, 'utf-8');
      const sawReady = readyNeedles.some((needle) => log.includes(needle));
      if (sawReady && healthy) {
        return true;
      }
      /**
       * 日志为空或未刷出 Ready，但本机端口已连续可服务：
       * detached + 共享 fd 偶发不写盘时，仍视为就绪。
       */
      if (healthyStreak >= 3) {
        return true;
      }
    } catch {
      // 日志尚未创建：仅依赖健康检查 streak
      if (healthyStreak >= 3) {
        return true;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, pollMs));
  }
  return false;
};

/**
 * 解析 CLI 中的 --port 参数。
 * @param {string[]} argv process.argv.slice(2)
 * @param {number} fallback
 * @returns {number}
 */
export const parsePortArg = (argv, fallback = defaultDevPort) => {
  const idx = argv.indexOf('--port');
  if (idx === -1 || !argv[idx + 1]) return fallback;
  const port = Number.parseInt(argv[idx + 1], 10);
  return Number.isFinite(port) && port > 0 ? port : fallback;
};

/**
 * 是否包含 --no-build 标志（跳过 build:site）。
 * @param {string[]} argv
 * @returns {boolean}
 */
export const hasNoBuildFlag = (argv) => argv.includes('--no-build');

/**
 * 是否包含 --no-seed-r2 标志（跳过本地 R2 灌桶；未灌则预渲染 HTML 依赖桶内已有对象）。
 * @param {string[]} argv
 * @returns {boolean}
 */
export const hasNoSeedR2Flag = (argv) => argv.includes('--no-seed-r2');

/**
 * 是否包含 --remote-bindings（允许 wrangler 为 Workers AI 开 Cloudflare preview session）。
 * 默认关闭：本机直连 `*.workers.dev` 超时时 start:dev 会卡死。
 * @param {string[]} argv
 * @returns {boolean}
 */
export const hasRemoteBindingsFlag = (argv) => argv.includes('--remote-bindings');

/**
 * 是否包含 --no-ops-ui 标志（不启动本地 Ops / sitemap UI）。
 * @param {string[]} argv
 * @returns {boolean}
 */
export const hasNoOpsUiFlag = (argv) => argv.includes('--no-ops-ui');

/**
 * Ops UI 根 URL。
 * @param {number} [port]
 * @param {string} [host]
 * @returns {string}
 */
export const opsUiOrigin = (port = defaultOpsUiPort, host = defaultOpsUiHost) =>
  `http://${host}:${port}`;

/**
 * 读取 Ops UI PID 文件；不存在或无效时返回 null。
 * @returns {Promise<number|null>}
 */
export const readOpsUiPid = async () => {
  try {
    const raw = (await fs.readFile(opsUiPidFilePath, 'utf-8')).trim();
    const pid = Number.parseInt(raw, 10);
    return Number.isFinite(pid) && pid > 0 ? pid : null;
  } catch {
    return null;
  }
};

/**
 * 写入 Ops UI PID 文件。
 * @param {number} pid
 * @returns {Promise<void>}
 */
export const writeOpsUiPid = async (pid) => {
  await ensureRunDir();
  await fs.writeFile(opsUiPidFilePath, String(pid), 'utf-8');
};

/**
 * 删除 Ops UI PID 文件（忽略不存在）。
 * @returns {Promise<void>}
 */
export const clearOpsUiPid = async () => {
  try {
    await fs.unlink(opsUiPidFilePath);
  } catch {
    // 已停止或未启动
  }
};

/**
 * 判断占用 Ops UI 端口的进程是否为本仓库 sitemap-ui。
 * @param {number} pid
 * @returns {boolean}
 */
export const isProjectOpsUiProcess = (pid) => {
  const cmd = getProcessCommandLine(pid);
  if (!cmd) return false;
  return (
    cmd.includes('sitemap-ui.mjs') ||
    cmd.includes(opsUiEntryPath) ||
    (cmd.includes(projectRoot) && cmd.includes('sitemap-ui'))
  );
};

/**
 * 描述占用 Ops UI 端口的进程。
 * @param {number} [port]
 * @returns {{ pid: number, cmd: string, ours: boolean } | null}
 */
export const describeOpsUiPortBlocker = (port = defaultOpsUiPort) => {
  const pid = findPidByPort(port, defaultOpsUiHost);
  if (!pid) return null;
  const cmd = getProcessCommandLine(pid);
  return { pid, cmd, ours: isProjectOpsUiProcess(pid) };
};

/**
 * Ops UI HTTP 健康检查（登录页或任意 2xx/3xx 即视为就绪）。
 * @param {number} [port]
 * @param {string} [host]
 * @returns {Promise<boolean>}
 */
export const opsUiHealthCheck = async (
  port = defaultOpsUiPort,
  host = defaultOpsUiHost
) => {
  try {
    const res = await fetch(`${opsUiOrigin(port, host)}/`, {
      headers: { Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8' },
      redirect: 'manual',
    });
    return res.status >= 200 && res.status < 400;
  } catch {
    return false;
  }
};

/**
 * 若 Ops UI 已健康运行则返回 true。
 * @param {number} [port]
 * @returns {Promise<boolean>}
 */
export const isOpsUiHealthy = async (port = defaultOpsUiPort) => {
  const portPid = findPidByPort(port, defaultOpsUiHost);
  if (!portPid) return false;
  return opsUiHealthCheck(port);
};

/**
 * 等待 Ops UI HTTP 可访问。
 * @param {number} [port]
 * @param {{ timeoutMs?: number, pollMs?: number }} [opts]
 * @returns {Promise<boolean>}
 */
export const waitForOpsUiReady = async (port = defaultOpsUiPort, opts = {}) => {
  const { timeoutMs = 15_000, pollMs = 250 } = opts;
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await opsUiHealthCheck(port)) return true;
    await new Promise((resolve) => setTimeout(resolve, pollMs));
  }
  return false;
};

/**
 * 清理本项目 Ops UI 进程与 stale PID 文件。
 * @param {number} [port]
 * @returns {Promise<void>}
 */
export const cleanupOpsUi = async (port = defaultOpsUiPort) => {
  const filePid = await readOpsUiPid();
  const portBlocker = describeOpsUiPortBlocker(port);
  const portPid = portBlocker?.pid ?? null;

  if (portPid && portBlocker?.ours) killProcessTree(portPid);
  if (filePid && filePid !== portPid) killProcessTree(filePid);

  await clearOpsUiPid();
  await new Promise((resolve) => setTimeout(resolve, 400));
};

/**
 * 返回 wrangler 可执行路径（Windows 用 .cmd）。
 * @returns {string}
 */
export const wranglerExecutable = () => {
  const bin = process.platform === 'win32' ? 'wrangler.cmd' : 'wrangler';
  return path.join(projectRoot, 'node_modules', '.bin', bin);
};

/**
 * 清理占用端口的进程与 stale PID 文件。
 * @param {number} port
 * @returns {Promise<void>}
 */
export const cleanupDevServer = async (port = defaultDevPort) => {
  const filePid = await readPid();
  const portBlocker = describePortBlocker(port);
  const portPid = portBlocker?.pid ?? null;

  if (portPid && portBlocker?.ours) killProcessTree(portPid);
  if (filePid && filePid !== portPid) killProcessTree(filePid);

  await clearPid();
  await new Promise((resolve) => setTimeout(resolve, 800));
};

/**
 * 若 dev 已健康运行则返回 true。
 * @param {number} port
 * @returns {Promise<boolean>}
 */
export const isDevServerHealthy = async (port = defaultDevPort) => {
  const portPid = findPidByPort(port);
  if (!portPid) return false;
  return healthCheck(port);
};
