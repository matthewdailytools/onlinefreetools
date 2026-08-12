/**
 * 本地 Wrangler 开发进程管理：PID、端口、健康检查、启停辅助。
 * 供 ops/dev/start-dev.mjs 与 ops/dev/stop-dev.mjs 共用。
 */
import { promises as fs } from 'node:fs';
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
 * @param {number} port
 * @param {{ timeoutMs?: number, pollMs?: number, host?: string }} [opts]
 * @returns {Promise<boolean>}
 */
export const waitForDevReady = async (port = defaultDevPort, opts = {}) => {
  const { timeoutMs = 90_000, pollMs = 500, host = defaultDevHost } = opts;
  const deadline = Date.now() + timeoutMs;
  const readyNeedle = `Ready on http://${host}:${port}`;

  while (Date.now() < deadline) {
    const fatal = await readDevLogFatalError();
    if (fatal) return false;

    try {
      const log = await fs.readFile(logFilePath, 'utf-8');
      if (log.includes(readyNeedle) && (await healthCheck(port, host))) {
        return true;
      }
    } catch {
      // 日志尚未创建
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
