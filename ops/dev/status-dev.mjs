#!/usr/bin/env node
/**
 * 查看本地 wrangler dev 状态（端口、PID、HTTP 健康检查）。
 *
 * 用法：node ops/dev/status-dev.mjs
 * 等价 npm：npm run status:dev
 */
import {
  defaultDevPort,
  devServerOrigin,
  findPidByPort,
  healthCheck,
  logFilePath,
  parsePortArg,
  pidFilePath,
  readPid,
} from '../lib/dev-process.mjs';

const argv = process.argv.slice(2);
const port = parsePortArg(argv, defaultDevPort);

const main = async () => {
  const filePid = await readPid();
  const portPid = findPidByPort(port);
  const healthy = await healthCheck(port);

  console.log(`URL:  ${devServerOrigin(port)}/`);
  console.log(`Port listener PID: ${portPid ?? 'none'}`);
  console.log(`PID file: ${filePid ?? 'none'} (${pidFilePath})`);
  console.log(`HTTP health (Accept: text/html): ${healthy ? 'OK' : 'FAIL'}`);
  console.log(`Log: ${logFilePath}`);

  if (!healthy) {
    process.exit(portPid ? 1 : 0);
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
