#!/usr/bin/env node
/**
 * 查看本地 wrangler dev 与 Ops UI 状态（端口、PID、HTTP 健康检查）。
 * 首页 OK 不能证明工具页在本地 R2；会再探测最新预渲染工具页。
 *
 * 用法：node ops/dev/status-dev.mjs
 * 等价 npm：npm run status:dev
 */
import {
  defaultOpsUiPort,
  devServerOrigin,
  findPidByPort,
  healthCheck,
  logFilePath,
  opsUiHealthCheck,
  opsUiLogFilePath,
  opsUiOrigin,
  opsUiPidFilePath,
  pidFilePath,
  probeNewestToolPage,
  readOpsUiPid,
  readPid,
  resolveManagedDevPort,
} from '../lib/dev-process.mjs';

/** CLI 参数 */
const argv = process.argv.slice(2);
/** Ops UI 端口 */
const opsUiPort = defaultOpsUiPort;

const main = async () => {
  /** 未传 --port 时对齐上次 start:dev 写入的端口文件 */
  const port = await resolveManagedDevPort(argv);
  /** PID 文件中的 wrangler 进程号（可能已 stale） */
  const filePid = await readPid();
  /** 当前占用 wrangler 端口的监听 PID */
  const portPid = findPidByPort(port);
  /** 首页 Accept: text/html 探测（Assets 即可 200） */
  const healthy = await healthCheck(port);

  console.log('— wrangler dev —');
  console.log(`URL:  ${devServerOrigin(port)}/`);
  console.log(`Port listener PID: ${portPid ?? 'none'}`);
  console.log(`PID file: ${filePid ?? 'none'} (${pidFilePath})`);
  console.log(`HTTP health (Accept: text/html): ${healthy ? 'OK' : 'FAIL'}`);
  console.log(`Log: ${logFilePath}`);

  /** 最新工具页：抓住「首页/旧工具 200、新工具 404」 */
  const toolProbe = healthy ? await probeNewestToolPage(port) : null;
  if (toolProbe) {
    if (toolProbe.skipped) {
      console.log(`Tool page: SKIP (${toolProbe.hint})`);
    } else {
      for (const r of toolProbe.results) {
        console.log(`Tool page (${r.lang}/${r.slug}): ${r.ok ? 'OK' : 'FAIL'} HTTP ${r.status}`);
        console.log(`  ${r.url}`);
      }
      if (!toolProbe.ok && toolProbe.hint) console.log(`  ${toolProbe.hint}`);
    }
  }

  /** Ops UI PID 文件 */
  const opsUiFilePid = await readOpsUiPid();
  /** Ops UI 端口监听 PID */
  const opsUiPortPid = findPidByPort(opsUiPort);
  /** Ops UI HTTP 健康 */
  const opsUiHealthy = await opsUiHealthCheck(opsUiPort);

  console.log('— Ops UI (sitemap:ui / ops:ui) —');
  console.log(`URL:  ${opsUiOrigin(opsUiPort)}/`);
  console.log(`Port listener PID: ${opsUiPortPid ?? 'none'}`);
  console.log(`PID file: ${opsUiFilePid ?? 'none'} (${opsUiPidFilePath})`);
  console.log(`HTTP health: ${opsUiHealthy ? 'OK' : 'FAIL'}`);
  console.log(`Log: ${opsUiLogFilePath}`);

  /** 工具页失败视为本地流程不健康（首页 OK 不够） */
  const toolFail = Boolean(toolProbe && !toolProbe.skipped && !toolProbe.ok);

  if (!healthy || !opsUiHealthy || toolFail) {
    /** wrangler 未起且 Ops 也未起：视为「无服务」退出 0；任一侧失败且对侧在跑则 1 */
    if (!portPid && !opsUiPortPid) process.exit(0);
    process.exit(1);
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
