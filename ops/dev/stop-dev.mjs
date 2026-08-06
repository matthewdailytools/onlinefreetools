#!/usr/bin/env node
/**
 * 停止本地 wrangler dev 开发服务器。
 *
 * 优先按端口 LISTEN 进程停止（Wrangler 子进程），再停 PID 文件记录。
 *
 * 用法：
 *   node ops/dev/stop-dev.mjs
 *   node ops/dev/stop-dev.mjs --port 8787
 *
 * 等价 npm：npm run stop:dev
 */
import {
  cleanupDevServer,
  defaultDevPort,
  findPidByPort,
  parsePortArg,
  readPid,
} from '../lib/dev-process.mjs';

const argv = process.argv.slice(2);
const port = parsePortArg(argv, defaultDevPort);

const main = async () => {
  const filePid = await readPid();
  const portPidBefore = findPidByPort(port);

  if (!filePid && !portPidBefore) {
    console.log('No dev server process found.');
    await cleanupDevServer(port);
    return;
  }

  await cleanupDevServer(port);

  const portPidAfter = findPidByPort(port);
  if (portPidAfter) {
    console.warn(`Port ${port} may still be in use (PID ${portPidAfter}). Try again or reboot.`);
    process.exit(1);
  }

  const stopped = [];
  if (portPidBefore) stopped.push(`port ${port} (PID ${portPidBefore})`);
  if (filePid && filePid !== portPidBefore) stopped.push(`PID file (PID ${filePid})`);

  console.log(`Stopped dev server${stopped.length ? `: ${stopped.join(', ')}` : ''}.`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
