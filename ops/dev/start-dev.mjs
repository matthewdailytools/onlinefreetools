#!/usr/bin/env node
/**
 * 启动本地开发服务器（build:site + wrangler dev 后台）以及本地 Ops UI（sitemap:ui / ops:ui）。
 *
 * 启动后会等待日志 Ready 并通过 HTTP 健康检查，失败则自动清理进程。
 *
 * 用法：
 *   node ops/dev/start-dev.mjs
 *   node ops/dev/start-dev.mjs --no-build
 *   node ops/dev/start-dev.mjs --no-seed-r2
 *   node ops/dev/start-dev.mjs --no-ops-ui
 *   node ops/dev/start-dev.mjs --port 8787
 *
 * 等价 npm：npm run start:dev
 */
import { spawn, execSync } from 'node:child_process';
import { openSync, ftruncateSync } from 'node:fs';
import path from 'node:path';
import {
  cleanupDevServer,
  cleanupOpsUi,
  defaultDevHost,
  defaultDevPort,
  defaultOpsUiPort,
  describeOpsUiPortBlocker,
  describePortBlocker,
  devServerOrigin,
  ensurePortFree,
  ensureRunDir,
  findPidByPort,
  hasNoBuildFlag,
  hasNoSeedR2Flag,
  hasNoOpsUiFlag,
  isDevServerHealthy,
  isOpsUiHealthy,
  logFilePath,
  opsUiEntryPath,
  opsUiLogFilePath,
  opsUiOrigin,
  parsePortArg,
  projectRoot,
  readDevLogFatalError,
  waitForDevReady,
  waitForOpsUiReady,
  writeOpsUiPid,
  writePid,
} from '../lib/dev-process.mjs';

/** CLI 参数（去掉 node / 脚本路径） */
const argv = process.argv.slice(2);
/** wrangler 监听端口 */
const port = parsePortArg(argv, defaultDevPort);
/** 是否跳过完整 build:site */
const skipBuild = hasNoBuildFlag(argv);
/** 是否跳过本地 R2 灌桶（跳过则预渲染 HTML 依赖桶内已有对象，否则 404） */
const skipSeedR2 = hasNoSeedR2Flag(argv);
/** 是否跳过本地 Ops / sitemap UI */
const skipOpsUi = hasNoOpsUiFlag(argv);
/** Ops UI 端口（与 SITEMAP_UI_PORT / sitemap-ui.mjs 一致） */
const opsUiPort = defaultOpsUiPort;

/**
 * 若服务已健康运行则提示；否则清理 stale 进程/端口占用。
 * @returns {Promise<boolean>} 若 wrangler 已就绪可跳过重建启动则为 true
 */
const prepareStart = async () => {
  if (await isDevServerHealthy(port)) {
    const portPid = findPidByPort(port);
    console.log(`Dev server already running on ${devServerOrigin(port)} (listener PID ${portPid ?? 'unknown'}).`);
    console.log(`  Log: ${logFilePath}`);
    return true;
  }

  await cleanupDevServer(port);
  return false;
};

/**
 * 执行 npm run build:site。
 * @returns {void}
 */
const runBuildSite = () => {
  console.log('Running npm run build:site ...');
  execSync('npm run build:site', {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: true,
  });
};

/**
 * 将 gzip HTML 灌入本地 R2 模拟桶（与 wrangler dev persist 对齐）。
 * `_pages` 已 `.assetsignore`，未灌桶时预渲染 HTML 会 404。
 * @returns {void}
 */
const runSeedLocalR2 = () => {
  if (skipSeedR2) {
    console.log('Skipping local R2 seed (--no-seed-r2); prerendered HTML will 404 unless the local bucket already has objects.');
    return;
  }
  console.log('Seeding local R2 (npm run upload:r2:local) ...');
  try {
    execSync('npm run upload:r2:local', {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true,
    });
  } catch (err) {
    console.warn('[start-dev] local R2 seed failed (HTML pages will 404 until upload:r2:local succeeds):', err?.message || err);
  }
};

/**
 * 后台启动 wrangler dev（Node 直跑 wrangler.js，Windows 下日志与 detached 更稳定）。
 * @returns {Promise<number>} 子进程 PID
 */
const spawnWrangler = async () => {
  await ensureRunDir();
  /** 先 open 创建文件（若不存在），再按 fd 截断，避免 truncateSync(path) 在 ENOENT 时失败 */
  const logFd = openSync(logFilePath, 'a');
  ftruncateSync(logFd, 0);

  const wranglerBin = path.join(projectRoot, 'node_modules', 'wrangler', 'bin', 'wrangler.js');
  const args = ['dev', '--port', String(port), '--ip', defaultDevHost];

  const child = spawn(process.execPath, [wranglerBin, ...args], {
    cwd: projectRoot,
    detached: true,
    stdio: ['ignore', logFd, logFd],
    windowsHide: true,
    env: { ...process.env },
  });

  child.unref();
  await writePid(child.pid);
  return child.pid;
};

/**
 * 后台启动本地 Ops UI（`ops/seo/sitemap-ui.mjs`，等同 `npm run sitemap:ui` / `ops:ui`）。
 * @returns {Promise<number>} 子进程 PID
 */
const spawnOpsUi = async () => {
  await ensureRunDir();
  const logFd = openSync(opsUiLogFilePath, 'a');
  ftruncateSync(logFd, 0);

  const child = spawn(process.execPath, [opsUiEntryPath], {
    cwd: projectRoot,
    detached: true,
    stdio: ['ignore', logFd, logFd],
    windowsHide: true,
    env: {
      ...process.env,
      SITEMAP_UI_PORT: String(opsUiPort),
    },
  });

  child.unref();
  await writeOpsUiPid(child.pid);
  return child.pid;
};

/**
 * 确保 Ops UI 在后台运行；已健康则跳过，否则清理后启动并等待就绪。
 * @returns {Promise<void>}
 */
const ensureOpsUiRunning = async () => {
  if (skipOpsUi) {
    console.log('Skipping Ops UI (--no-ops-ui). Start manually: npm run ops:ui');
    return;
  }

  if (await isOpsUiHealthy(opsUiPort)) {
    const pid = findPidByPort(opsUiPort);
    console.log(`Ops UI already running at ${opsUiOrigin(opsUiPort)}/ (PID ${pid ?? 'unknown'}).`);
    return;
  }

  await cleanupOpsUi(opsUiPort);

  const blocker = describeOpsUiPortBlocker(opsUiPort);
  if (blocker && !blocker.ours) {
    console.warn(`Ops UI port ${opsUiPort} is used by another app (PID ${blocker.pid}).`);
    if (blocker.cmd) console.warn(`  ${blocker.cmd}`);
    console.warn(`Skip Ops UI, or free the port / set SITEMAP_UI_PORT and restart.`);
    return;
  }

  const childPid = await spawnOpsUi();
  console.log(`Starting Ops UI (PID ${childPid}), waiting for ready ...`);

  const ready = await waitForOpsUiReady(opsUiPort);
  if (!ready) {
    console.error(`Ops UI failed to become ready within timeout.`);
    console.error(`  Check log: ${opsUiLogFilePath}`);
    await cleanupOpsUi(opsUiPort);
    console.warn('Continuing without Ops UI. You can start it later: npm run ops:ui');
    return;
  }

  const listenerPid = findPidByPort(opsUiPort);
  console.log(`Ops UI ready at ${opsUiOrigin(opsUiPort)}/`);
  console.log(`  Listener PID: ${listenerPid ?? 'unknown'} (spawn PID ${childPid})`);
  console.log(`  Log: ${opsUiLogFilePath}`);
  console.log('  Auth: SITEMAP_UI_PASSWORD (default 345621). Bind: 127.0.0.1 only.');
};

const main = async () => {
  const alreadyRunning = await prepareStart();

  if (!alreadyRunning) {
    if (!skipBuild) {
      runBuildSite();
      runSeedLocalR2();
    } else {
      /** Registry/i18n merge must still run so generated slugs stay fresh */
      console.log('Skipping full build:site (--no-build); running merge:tools + site chrome vendor.');
      execSync('npm run merge:tools', { cwd: projectRoot, stdio: 'inherit' });
      /** 确保本地 Bootstrap/字体存在，避免 --no-build 时仍打外网 CDN */
      execSync('node scripts/copy-site-chrome-vendor.mjs', { cwd: projectRoot, stdio: 'inherit' });
      execSync('node scripts/copy-image-optimizer-vendor.mjs', { cwd: projectRoot, stdio: 'inherit' });
      console.log('Note: --no-build skips tool HTML prerender; run build:site if /tools/* 404.');
    }

    /** build 后再清端口，避免 stale listener 占用导致 wrangler bind 失败 */
    const portStatus = await ensurePortFree(port);
    if (!portStatus.ok) {
      if (portStatus.foreign) {
        const blocker = describePortBlocker(port);
        console.error(`Port ${port} is already used by another app (PID ${portStatus.pid ?? 'unknown'}).`);
        if (blocker?.cmd) console.error(`  ${blocker.cmd}`);
        console.error(`Use another port for this project: npm run start:dev -- --port 8788`);
      } else {
        console.error(`Port ${port} is still in use (PID ${portStatus.pid ?? 'unknown'}).`);
        console.error('Try: npm run stop:dev');
        if (portStatus.pid) console.error(`Or: kill ${portStatus.pid}`);
      }
      process.exit(1);
    }

    const childPid = await spawnWrangler();
    console.log(`Starting wrangler dev (PID ${childPid}), waiting for ready ...`);

    const ready = await waitForDevReady(port);
    if (!ready) {
      const fatal = await readDevLogFatalError();
      console.error(`Dev server failed to become ready${fatal ? ` (${fatal})` : ' within timeout'}.`);
      console.error(`  Check log: ${logFilePath}`);
      if (fatal?.includes('Address already in use')) {
        const blocker = findPidByPort(port);
        console.error(`  Port ${port} may be blocked by PID ${blocker ?? 'unknown'}. Run: npm run stop:dev`);
      }
      await cleanupDevServer(port);
      process.exit(1);
    }

    const listenerPid = findPidByPort(port);
    console.log(`Dev server ready at ${devServerOrigin(port)}/`);
    console.log(`  Listener PID: ${listenerPid ?? 'unknown'} (spawn PID ${childPid})`);
    console.log(`  Log: ${logFilePath}`);
  }

  await ensureOpsUiRunning();

  console.log('Stop with: npm run stop:dev  (or ./ops/dev/stop-dev.sh)');
};

main().catch(async (err) => {
  console.error(err);
  await cleanupDevServer(port);
  if (!skipOpsUi) await cleanupOpsUi(opsUiPort);
  process.exit(1);
});
