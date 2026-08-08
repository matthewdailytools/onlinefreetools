#!/usr/bin/env node
/**
 * 启动本地开发服务器（build:site + wrangler dev 后台运行）。
 *
 * 启动后会等待日志 Ready 并通过 HTTP 健康检查，失败则自动清理进程。
 *
 * 用法：
 *   node ops/dev/start-dev.mjs
 *   node ops/dev/start-dev.mjs --no-build
 *   node ops/dev/start-dev.mjs --port 8787
 *
 * 等价 npm：npm run start:dev
 */
import { spawn, execSync } from 'node:child_process';
import { openSync, ftruncateSync } from 'node:fs';
import path from 'node:path';
import {
  cleanupDevServer,
  defaultDevHost,
  defaultDevPort,
  devServerOrigin,
  describePortBlocker,
  ensurePortFree,
  ensureRunDir,
  findPidByPort,
  hasNoBuildFlag,
  isDevServerHealthy,
  logFilePath,
  parsePortArg,
  projectRoot,
  readDevLogFatalError,
  waitForDevReady,
  writePid,
} from '../lib/dev-process.mjs';

const argv = process.argv.slice(2);
const port = parsePortArg(argv, defaultDevPort);
const skipBuild = hasNoBuildFlag(argv);

/**
 * 若服务已健康运行则提示并退出；否则清理 stale 进程/端口占用。
 * @returns {Promise<void>}
 */
const prepareStart = async () => {
  if (await isDevServerHealthy(port)) {
    const portPid = findPidByPort(port);
    console.log(`Dev server already running on ${devServerOrigin(port)} (listener PID ${portPid ?? 'unknown'}).`);
    console.log(`  Log: ${logFilePath}`);
    console.log('Stop with: npm run stop:dev');
    process.exit(0);
  }

  await cleanupDevServer(port);
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

const main = async () => {
  await prepareStart();

  if (!skipBuild) {
    runBuildSite();
  } else {
    /** Registry/i18n merge must still run so wrangler sees toolPageRegistry.generated.ts */
    console.log('Skipping full build:site (--no-build); running merge:tools + site chrome vendor.');
    execSync('npm run merge:tools', { cwd: projectRoot, stdio: 'inherit' });
    /** 确保本地 Bootstrap/字体存在，避免 --no-build 时仍打外网 CDN */
    execSync('node scripts/copy-site-chrome-vendor.mjs', { cwd: projectRoot, stdio: 'inherit' });
    execSync('node scripts/copy-image-optimizer-vendor.mjs', { cwd: projectRoot, stdio: 'inherit' });
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
  console.log('Stop with: npm run stop:dev');
};

main().catch(async (err) => {
  console.error(err);
  await cleanupDevServer(port);
  process.exit(1);
});
