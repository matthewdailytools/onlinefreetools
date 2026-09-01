#!/usr/bin/env node
/**
 * 将 wrangler kv namespace create 返回的 id 写入 wrangler.jsonc → RATE_LIMIT_KV。
 *
 * 用法：
 *   node scripts/ops/patch-rate-limit-kv.mjs --id=<prod-id> [--preview-id=<preview-id>]
 *
 * 示例：
 *   npx wrangler kv namespace create RATE_LIMIT_KV
 *   npx wrangler kv namespace create RATE_LIMIT_KV --preview
 *   node scripts/ops/patch-rate-limit-kv.mjs \
 *     --id=abc123... \
 *     --preview-id=def456...
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** 仓库根目录（本脚本位于 scripts/ops/） */
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

/** wrangler 配置文件路径 */
const WRANGLER_PATH = path.join(ROOT, 'wrangler.jsonc');

/** 32 位 hex KV namespace id 校验 */
const KV_ID_RE = /^[0-9a-f]{32}$/i;

/**
 * 解析 CLI 参数 `--key=value`。
 * @param {string[]} argv process.argv 切片
 * @returns {Record<string, string>}
 */
function parseArgs(argv) {
	/** @type {Record<string, string>} */
	const out = {};
	for (const raw of argv) {
		if (!raw.startsWith('--')) continue;
		const eq = raw.indexOf('=');
		if (eq === -1) {
			out[raw.slice(2)] = 'true';
		} else {
			out[raw.slice(2, eq)] = raw.slice(eq + 1);
		}
	}
	return out;
}

/**
 * 校验 KV namespace id 格式。
 * @param {string} label 参数名（用于报错）
 * @param {string} value id 字符串
 */
function assertKvId(label, value) {
	if (!value || !KV_ID_RE.test(value.trim())) {
		console.error(`错误：${label} 须为 32 位 hex（wrangler kv namespace create 输出中的 id）`);
		process.exit(1);
	}
}

/**
 * 替换 wrangler.jsonc 中 RATE_LIMIT_KV 的 id / preview_id。
 * @param {string} prodId 生产 namespace id
 * @param {string} previewId 预览 namespace id（可与 prod 相同，dev 本地模拟）
 */
function patchWrangler(prodId, previewId) {
	if (!fs.existsSync(WRANGLER_PATH)) {
		console.error(`错误：找不到 ${WRANGLER_PATH}`);
		process.exit(1);
	}
	const before = fs.readFileSync(WRANGLER_PATH, 'utf8');
	const placeholder = '00000000000000000000000000000000';

	if (!before.includes('"binding": "RATE_LIMIT_KV"')) {
		console.error('错误：wrangler.jsonc 中未找到 RATE_LIMIT_KV binding');
		process.exit(1);
	}

	let next = before;
	/** 匹配 RATE_LIMIT_KV 块内的 id / preview_id */
	const idRe = /("binding": "RATE_LIMIT_KV"[\s\S]*?"id": ")[^"]+(")/;
	const previewRe = /("binding": "RATE_LIMIT_KV"[\s\S]*?"preview_id": ")[^"]+(")/;

	if (!idRe.test(before)) {
		console.error('错误：未找到 RATE_LIMIT_KV.id 字段');
		process.exit(1);
	}

	next = next.replace(idRe, `$1${prodId}$2`);
	if (previewRe.test(next)) {
		next = next.replace(previewRe, `$1${previewId}$2`);
	}

	if (next === before) {
		console.error('错误：未发生替换，请检查 wrangler.jsonc 格式');
		process.exit(1);
	}

	fs.writeFileSync(WRANGLER_PATH, next, 'utf8');

	const wasPlaceholder = before.includes(placeholder);
	console.log('已更新 wrangler.jsonc → RATE_LIMIT_KV');
	console.log(`  id:         ${prodId}`);
	console.log(`  preview_id: ${previewId}`);
	if (wasPlaceholder) {
		console.log('\n下一步：git add wrangler.jsonc && commit，然后按 ops/prompt-ai-deploy-checklist.md 部署。');
	}
}

/** CLI 入口 */
function main() {
	const args = parseArgs(process.argv.slice(2));
	const prodId = String(args.id || '').trim();
	const previewId = String(args['preview-id'] || args.previewId || prodId).trim();

	if (!prodId) {
		console.log(`用法: node scripts/ops/patch-rate-limit-kv.mjs --id=<prod-id> [--preview-id=<preview-id>]

先创建 namespace：
  npx wrangler kv namespace create RATE_LIMIT_KV
  npx wrangler kv namespace create RATE_LIMIT_KV --preview

输出示例：
  { "id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "title": "RATE_LIMIT_KV", ... }
`);
		process.exit(1);
	}

	assertKvId('--id', prodId);
	assertKvId('--preview-id', previewId);
	patchWrangler(prodId, previewId);
}

main();
