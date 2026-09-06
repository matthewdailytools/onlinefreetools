#!/usr/bin/env node
/**
 * 启动本地开发服务器（build:site + wrangler dev 后台）以及本地 Ops UI（sitemap:ui / ops:ui）。
 *
 * 启动后会等待日志 Ready、首页健康检查、以及最新预渲染工具页 200；灌桶或工具页失败则退出且不把 wrangler 当成可用。
 *
 * 用法：
 *   node ops/dev/start-dev.mjs
 *   node ops/dev/start-dev.mjs --no-build
 *   node ops/dev/start-dev.mjs --no-seed-r2
 *   node ops/dev/start-dev.mjs --no-ops-ui
 *   node ops/dev/start-dev.mjs --remote-bindings
 *   node ops/dev/start-dev.mjs --port 8787
 *
 * 灌桶失败会直接退出、不启动 wrangler（首页 Assets 200 不能证明新工具页在本地 R2）。
 * wrangler Ready 后会 GET 最新预渲染工具页（Accept: text/html）；404 则退出 1。
 *
 * 等价 npm：npm run start:dev
 */
import { spawn, execSync } from 'node:child_process';
import { closeSync, openSync, unlinkSync, statSync } from 'node:fs';
import path from 'node:path';
import {
  writeWranglerConfigWithoutRemoteBindings,
  WRANGLER_PERSIST_TO,
} from '../../scripts/lib/local-r2-platform-proxy.mjs';
import {
  assertNewestToolPageServed,
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
  hasRemoteBindingsFlag,
  isDevServerHealthy,
  isOpsUiHealthy,
  isProcessRunning,
  defaultInspectorPort,
  logFilePath,
  opsUiEntryPath,
  opsUiLogFilePath,
  opsUiOrigin,
  parsePortArg,
  projectRoot,
  readDevLogFatalError,
  readSoftNofileLimit,
  waitForDevReady,
  waitForOpsUiReady,
  writeOpsUiPid,
  writePid,
  writeSavedDevPort,
} from '../lib/dev-process.mjs';

/**
 * 打开日志 fd 供子进程 stdout/stderr 写入：文件不存在则创建，已存在则清空。
 * Windows 上不可用 `'a'` + `ftruncateSync`：append 句柄没有截断权限，会 EPERM。
 * 若旧 wrangler 仍锁着日志，先 unlink 再建（Windows 允许 delete-pending 后新开同名文件）。
 * @param {string} filePath 日志绝对路径
 * @returns {number} 可写文件描述符
 */
const openTruncatedLogFd = (filePath) => {
  try {
    return openSync(filePath, 'w');
  } catch (err) {
    const code = err?.code;
    if (code !== 'EPERM' && code !== 'EACCES' && code !== 'EBUSY') {
      throw err;
    }
    try {
      unlinkSync(filePath);
    } catch {
      /* 删除失败则仍尝试 'w'；若仍失败把原始错误抛给调用方 */
    }
    return openSync(filePath, 'w');
  }
};

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
/**
 * 是否允许 wrangler 连 Cloudflare 远程绑定（Workers AI）。
 * 默认 false：灌桶与 HTML 预览不需要 AI；直连超时会让 start:dev 失败。
 */
const enableRemoteBindings = hasRemoteBindingsFlag(argv);
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
 * 失败必须抛错：不得吞掉后继续起 wrangler（否则旧工具 200、新工具 404）。
 * @returns {void}
 */
const runSeedLocalR2 = () => {
  if (skipSeedR2) {
    console.log('Skipping local R2 seed (--no-seed-r2); prerendered HTML will 404 unless the local bucket already has objects.');
    return;
  }
  console.log('Seeding local R2 (npm run upload:r2:local) ...');
  execSync('npm run upload:r2:local', {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: true,
  });
};

/**
 * 后台启动 wrangler dev（Node 直跑 wrangler.js，Windows 下日志与 detached 更稳定）。
 * Unix 经 `/bin/sh` 先把 nofile 提到 65536：macOS GUI/Cursor 终端常见 soft limit=256，
 * wrangler 监视 `public/` 会 EMFILE，stdout 不刷盘，start:dev 表现为空日志超时。
 * `--inspector-port 0` 避免默认 9229 被其他仓库 workerd 占住后卡住。
 * @returns {Promise<number>} 子进程 PID
 */
const spawnWrangler = async () => {
  await ensureRunDir();
  const logFd = openTruncatedLogFd(logFilePath);

  const wranglerBin = path.join(projectRoot, 'node_modules', 'wrangler', 'bin', 'wrangler.js');
  /** persist 钉在仓库 `.wrangler/state`，避免 `-c .cache/...` 用空模拟桶导致工具页 404 */
  const args = [
    'dev',
    '--port',
    String(port),
    '--ip',
    defaultDevHost,
    '--persist-to',
    WRANGLER_PERSIST_TO,
    /** 让 OS 分配空闲 inspector 端口，避开被占用的 9229 */
    '--inspector-port',
    '0',
  ];
  if (!enableRemoteBindings) {
    /** 去掉 AI binding + `--local`：4.58 上仅 remoteBindings:false 仍会连 workers.dev */
    const localConfig = writeWranglerConfigWithoutRemoteBindings();
    args.push('--local', '-c', localConfig);
  }

  /**
   * CI=1 让 wrangler 在 stdin=ignore 时不要停在「是否上报错误」交互提示上。
   * WRANGLER_SEND_METRICS=false 避免启动阶段再打 Cloudflare 遥测。
   */
  const env = {
    ...process.env,
    CI: '1',
    WRANGLER_SEND_METRICS: 'false',
  };

  /** @type {import('node:child_process').ChildProcess} */
  let child;
  if (process.platform === 'win32') {
    child = spawn(process.execPath, [wranglerBin, ...args], {
      cwd: projectRoot,
      detached: true,
      stdio: ['ignore', logFd, logFd],
      windowsHide: true,
      env,
    });
  } else {
    /**
     * `$0` = node，`$@` = wrangler.js + CLI；`exec` 保持同一 PID，PID 文件仍指向 wrangler。
     */
    child = spawn(
      '/bin/sh',
      ['-c', 'ulimit -n 65536 2>/dev/null || true; exec "$0" "$@"', process.execPath, wranglerBin, ...args],
      {
        cwd: projectRoot,
        detached: true,
        stdio: ['ignore', logFd, logFd],
        env,
      }
    );
  }

  child.unref();
  try {
    closeSync(logFd);
  } catch {
    /* 父进程关掉副本；子进程仍持有写入端 */
  }
  await writePid(child.pid);
  await writeSavedDevPort(port);
  return child.pid;
};

/**
 * 后台启动本地 Ops UI（`ops/seo/sitemap-ui.mjs`，等同 `npm run sitemap:ui` / `ops:ui`）。
 * @returns {Promise<number>} 子进程 PID
 */
const spawnOpsUi = async () => {
  await ensureRunDir();
  const logFd = openTruncatedLogFd(opsUiLogFilePath);

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

/** 本轮是否由本脚本 spawn 了 wrangler；失败回滚时只杀本次拉起的进程 */
let spawnedThisRun = false;

const main = async () => {
  const alreadyRunning = await prepareStart();

  if (!alreadyRunning) {
    if (!skipBuild) {
      runBuildSite();
    } else {
      /** Registry/i18n merge must still run so generated slugs stay fresh */
      console.log('Skipping full build:site (--no-build); running merge:tools + same-origin vendor copy.');
      execSync('npm run merge:tools', { cwd: projectRoot, stdio: 'inherit' });
      /** 确保本地 Bootstrap/字体存在，避免 --no-build 时仍打外网 CDN */
      execSync('node scripts/copy-site-chrome-vendor.mjs', { cwd: projectRoot, stdio: 'inherit' });
      execSync('node scripts/copy-image-optimizer-vendor.mjs', { cwd: projectRoot, stdio: 'inherit' });
      execSync('node scripts/copy-tool-libs-vendor.mjs', { cwd: projectRoot, stdio: 'inherit' });
      console.log('Note: --no-build skips tool HTML prerender; run build:site if /tools/* 404.');
    }

    /** --no-build 仍须灌桶：磁盘上已有 _pages 时，跳过 seed 会沿用旧模拟桶 */
    runSeedLocalR2();

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
    spawnedThisRun = true;
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
      /** 空日志：stdout 未刷盘、EMFILE、inspector 冲突、或进程已退出 */
      try {
        if (statSync(logFilePath).size === 0) {
          console.error(
            '  Log is empty — wrangler produced no stdout before timeout (hang, EMFILE, inspector clash, or prompt).'
          );
          console.error(
            `  Spawn PID ${childPid} still running: ${isProcessRunning(childPid) ? 'yes' : 'no (exited before Ready)'}`
          );
          const nofile = readSoftNofileLimit();
          if (nofile !== null && nofile < 1024) {
            console.error(
              `  Shell nofile (ulimit -n) is ${nofile}; wrangler watching public/ often needs thousands of fds.`
            );
          }
          const inspectorBlocker = describePortBlocker(defaultInspectorPort);
          if (inspectorBlocker) {
            console.error(
              `  Default inspector port ${defaultInspectorPort} is held by PID ${inspectorBlocker.pid}; start:dev now uses --inspector-port 0.`
            );
          }
          const defaultBlocker = describePortBlocker(defaultDevPort);
          if (port !== defaultDevPort && defaultBlocker && !defaultBlocker.ours) {
            console.error(
              `  Note: default port ${defaultDevPort} is held by another app (PID ${defaultBlocker.pid}). Keep using --port ${port}.`
            );
          }
          if (port === defaultDevPort && defaultBlocker && !defaultBlocker.ours) {
            console.error(
              `  Port ${defaultDevPort} is used by another app (PID ${defaultBlocker.pid}). Try: npm run start:dev -- --port 8788`
            );
          }
          console.error(
            `  Failed start already stops the process it spawned. stop:dev without --port looks at ${defaultDevPort} (or the last successful port file).`
          );
          if (port !== defaultDevPort) {
            console.error(`  If a previous server is still up: npm run stop:dev -- --port ${port}`);
          }
        }
      } catch {
        // 日志文件缺失
      }
      await cleanupDevServer(port);
      process.exit(1);
    }

    const listenerPid = findPidByPort(port);
    console.log(`Dev server ready at ${devServerOrigin(port)}/`);
    console.log(`  Listener PID: ${listenerPid ?? 'unknown'} (spawn PID ${childPid})`);
    console.log(`  Log: ${logFilePath}`);
  } else {
    /** 已在跑时仍灌桶，避免「只复用旧进程、新 HTML 从未进模拟桶」 */
    console.log('Re-seeding local R2 while the existing wrangler process stays up.');
    console.log('For a full rebuild of tool HTML, run: npm run stop:dev && npm run start:dev');
    runSeedLocalR2();
  }

  /** 首页健康检查过不了「新工具 404」；Must 在 wrangler Ready 之后 */
  await assertNewestToolPageServed(port);

  await ensureOpsUiRunning();

  console.log('Stop with: npm run stop:dev  (or ./ops/dev/stop-dev.sh)');
};

main().catch(async (err) => {
  console.error(err);
  if (spawnedThisRun) {
    await cleanupDevServer(port);
    if (!skipOpsUi) await cleanupOpsUi(opsUiPort);
  }
  process.exit(1);
});
