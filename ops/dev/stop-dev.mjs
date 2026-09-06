#!/usr/bin/env node
/**
 * 停止本地 wrangler dev 与 Ops UI（sitemap:ui / ops:ui）。
 *
 * 优先按端口 LISTEN 进程停止，再停 PID 文件记录。
 * 外站占用端口时不误杀，也不因此失败退出。
 *
 * 用法：
 *   node ops/dev/stop-dev.mjs
 *   node ops/dev/stop-dev.mjs --port 8787
 *
 * 等价 npm：npm run stop:dev
 */
import {
  cleanupDevServer,
  cleanupOpsUi,
  defaultOpsUiPort,
  describeOpsUiPortBlocker,
  describePortBlocker,
  findPidByPort,
  isProcessRunning,
  readOpsUiPid,
  readPid,
  resolveManagedDevPort,
} from '../lib/dev-process.mjs';

/** CLI 参数 */
const argv = process.argv.slice(2);
/** Ops UI 端口 */
const opsUiPort = defaultOpsUiPort;

const main = async () => {
  /** 未传 --port 时对齐上次 start:dev 写入的端口文件（例如 8799） */
  const port = await resolveManagedDevPort(argv);
  const filePid = await readPid();
  const portPidBefore = findPidByPort(port);
  const opsUiFilePid = await readOpsUiPid();
  const opsUiPortPidBefore = findPidByPort(opsUiPort);

  if (!filePid && !portPidBefore && !opsUiFilePid && !opsUiPortPidBefore) {
    console.log('No dev server or Ops UI process found.');
    await cleanupDevServer(port);
    await cleanupOpsUi(opsUiPort);
    return;
  }

  await cleanupDevServer(port);
  await cleanupOpsUi(opsUiPort);

  const portPidAfter = findPidByPort(port);
  const opsUiPortPidAfter = findPidByPort(opsUiPort);

  /** @type {string[]} 实际已停掉的本项目进程描述 */
  const stopped = [];
  if (portPidBefore && !isProcessRunning(portPidBefore)) {
    stopped.push(`wrangler port ${port} (PID ${portPidBefore})`);
  }
  if (filePid && filePid !== portPidBefore && !isProcessRunning(filePid)) {
    stopped.push(`wrangler PID file (PID ${filePid})`);
  }
  if (opsUiPortPidBefore && !isProcessRunning(opsUiPortPidBefore)) {
    stopped.push(`Ops UI port ${opsUiPort} (PID ${opsUiPortPidBefore})`);
  }
  if (opsUiFilePid && opsUiFilePid !== opsUiPortPidBefore && !isProcessRunning(opsUiFilePid)) {
    stopped.push(`Ops UI PID file (PID ${opsUiFilePid})`);
  }

  if (stopped.length) {
    console.log(`Stopped: ${stopped.join(', ')}.`);
  } else {
    console.log('Cleanup finished (no matching project processes were stopped).');
  }

  let exitCode = 0;
  if (portPidAfter) {
    const blocker = describePortBlocker(port);
    if (blocker?.ours) {
      console.warn(`Port ${port} may still be in use by this project (PID ${portPidAfter}). Try again or reboot.`);
      exitCode = 1;
    } else {
      console.warn(`Port ${port} is still in use by another app (PID ${portPidAfter}); left untouched.`);
    }
  }

  if (opsUiPortPidAfter) {
    const blocker = describeOpsUiPortBlocker(opsUiPort);
    if (blocker?.ours) {
      console.warn(`Ops UI port ${opsUiPort} may still be in use by this project (PID ${opsUiPortPidAfter}). Try again or reboot.`);
      exitCode = 1;
    } else {
      console.warn(`Ops UI port ${opsUiPort} is still in use by another app (PID ${opsUiPortPidAfter}); left untouched.`);
    }
  }

  if (exitCode) process.exit(exitCode);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
