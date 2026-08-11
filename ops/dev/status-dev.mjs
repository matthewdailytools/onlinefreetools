#!/usr/bin/env node
/**
 * 查看本地 wrangler dev 与 Ops UI 状态（端口、PID、HTTP 健康检查）。
 *
 * 用法：node ops/dev/status-dev.mjs
 * 等价 npm：npm run status:dev
 */
import {
  defaultDevPort,
  defaultOpsUiPort,
  devServerOrigin,
  findPidByPort,
  healthCheck,
  logFilePath,
  opsUiHealthCheck,
  opsUiLogFilePath,
  opsUiOrigin,
  opsUiPidFilePath,
  parsePortArg,
  pidFilePath,
  readOpsUiPid,
  readPid,
} from '../lib/dev-process.mjs';

/** CLI 参数 */
const argv = process.argv.slice(2);
/** wrangler 端口 */
const port = parsePortArg(argv, defaultDevPort);
/** Ops UI 端口 */
const opsUiPort = defaultOpsUiPort;

const main = async () => {
  const filePid = await readPid();
  const portPid = findPidByPort(port);
  const healthy = await healthCheck(port);

  console.log('— wrangler dev —');
  console.log(`URL:  ${devServerOrigin(port)}/`);
  console.log(`Port listener PID: ${portPid ?? 'none'}`);
  console.log(`PID file: ${filePid ?? 'none'} (${pidFilePath})`);
  console.log(`HTTP health (Accept: text/html): ${healthy ? 'OK' : 'FAIL'}`);
  console.log(`Log: ${logFilePath}`);

  const opsUiFilePid = await readOpsUiPid();
  const opsUiPortPid = findPidByPort(opsUiPort);
  const opsUiHealthy = await opsUiHealthCheck(opsUiPort);

  console.log('— Ops UI (sitemap:ui / ops:ui) —');
  console.log(`URL:  ${opsUiOrigin(opsUiPort)}/`);
  console.log(`Port listener PID: ${opsUiPortPid ?? 'none'}`);
  console.log(`PID file: ${opsUiFilePid ?? 'none'} (${opsUiPidFilePath})`);
  console.log(`HTTP health: ${opsUiHealthy ? 'OK' : 'FAIL'}`);
  console.log(`Log: ${opsUiLogFilePath}`);

  if (!healthy || !opsUiHealthy) {
    /** wrangler 未起且 Ops 也未起：视为「无服务」退出 0；任一侧失败且对侧在跑则 1 */
    if (!portPid && !opsUiPortPid) process.exit(0);
    process.exit(1);
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
