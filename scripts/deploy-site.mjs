#!/usr/bin/env node
/**
 * 生产发版编排：upload R2 → 校验版本一致 →（Worker/Assets 由 GitHub push 触发 Cloudflare）→ 可选线上再校验。
 *
 * 通常由 `npm run deploy` 调用；其前会跑 npm `predeploy`（全量 build:site + lint）。
 * 远程 upload 优先读仓库根 `.env` 的 R2 S3 凭据（见 ops/worker-r2-ops.md §3.1）；
 * 默认 hash 增量 `upload:r2`，随后 `upload:r2:og`（公开 OG 图 → 桶 `assets`）。
 *
 * 用法：
 *   node scripts/deploy-site.mjs                  # 默认只上传变化的 .html.gz
 *   node scripts/deploy-site.mjs --full           # 强制全量上传
 *   node scripts/deploy-site.mjs --skip-upload    # 假定 R2 已是最新，仅 verify
 *   node scripts/deploy-site.mjs --live           # 假定 CF 已部署完，立刻打生产 /api/ops/pages-build
 *   node scripts/deploy-site.mjs --base-url=https://onlinefreetools.org
 *   node scripts/deploy-site.mjs --wrangler-deploy # 紧急：本机 wrangler deploy（默认注释掉的路径）
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const skipUpload = argv.includes('--skip-upload');
const fullUpload = argv.includes('--full') || argv.includes('--all');
const changedUpload = !fullUpload;
/** 默认不自动 live：须等 GitHub→CF 部署完成后再加 --live 或单独 `npm run verify:r2:live` */
const runLive = argv.includes('--live') && !argv.includes('--skip-live');
const useWranglerDeploy = argv.includes('--wrangler-deploy');
const baseUrlArg = argv.find((a) => a.startsWith('--base-url='));

/**
 * 跑一条 npm/npx 命令，失败则退出。
 * @param {string} label
 * @param {string} command
 * @param {string[]} args
 */
const run = (label, command, args) => {
	console.log(`\n=== [deploy] ${label} ===`);
	const res = spawnSync(command, args, {
		cwd: root,
		stdio: 'inherit',
		env: process.env,
		shell: false,
	});
	if (res.status !== 0) {
		console.error(`[deploy] failed: ${label} (exit ${res.status})`);
		process.exit(res.status || 1);
	}
};

/**
 * 打印用 GitHub push 替代本机 wrangler deploy 的后续步骤。
 * @returns {void}
 */
const printGithubDeployNextSteps = () => {
	console.log(`
=== [deploy] Worker + Assets：请用 GitHub push（Cloudflare 拉仓库部署）===

1. 确认本机改动已 commit（含 wrangler.jsonc / vendor / Worker 源码；*_pages HTML.gz 不入库）
   OG 位图可入库 Git，但 `.assetsignore` 会排除 `og/tools/`，CF 部署不会带上这些图
   少量工具改动可用：npm run commit:tools:changed -- --slug=<slug[,slug]> -m "tools: update <slug>"
2. git push 到 Cloudflare 已绑定的分支
3. 在 Cloudflare Dashboard 等本次部署成功
4. 再跑：npm run verify:r2:live

紧急本机直发 Worker（一般不需要）：
  npm run deploy:worker-only
  # 或：node scripts/deploy-site.mjs --wrangler-deploy
`);
};

const main = () => {
	if (!skipUpload) {
		run(changedUpload ? 'upload changed R2 objects' : 'upload all R2 objects', 'npm', [
			'run',
			changedUpload ? 'upload:r2' : 'upload:r2:full',
		]);
		run(changedUpload ? 'upload changed OG assets' : 'upload all OG assets', 'npm', [
			'run',
			changedUpload ? 'upload:r2:og' : 'upload:r2:og:full',
		]);
	} else {
		console.log('[deploy] skip upload (--skip-upload)');
	}

	run('verify R2 ↔ Worker version', 'npm', ['run', 'verify:r2']);

	// 默认：不本机 wrangler deploy，改由 GitHub push → Cloudflare 拉取。
	// run('wrangler deploy', 'npx', ['wrangler', 'deploy']);
	if (useWranglerDeploy) {
		run('wrangler deploy (--wrangler-deploy)', 'npx', ['wrangler', 'deploy']);
	} else {
		printGithubDeployNextSteps();
	}

	if (runLive) {
		const verifyArgs = ['run', 'verify:r2', '--', '--live'];
		if (baseUrlArg) verifyArgs.push(baseUrlArg);
		run('verify live Worker ↔ R2', 'npm', verifyArgs);
	} else {
		console.log('[deploy] skip live verify（等 CF 部署完成后再：npm run verify:r2:live 或加 --live）');
	}

	console.log('\n[deploy] OK — R2 uploaded/verified; Worker/Assets via GitHub→CF (unless --wrangler-deploy)');
};

main();
