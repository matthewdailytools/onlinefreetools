/**
 * 轻量加载仓库根目录 dotenv 文件到 process.env（不覆盖已存在的环境变量）。
 * 用于本机 R2 S3 凭据等，避免每次 export；密钥文件须 gitignore。
 */
import { readFileSync } from 'node:fs';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** 仓库根目录（本文件位于 scripts/lib/） */
const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

/** 已加载过的绝对路径集合（避免重复读盘） */
const loadedPaths = new Set();

/**
 * 解析单行 KEY=VALUE（支持可选引号；忽略空行与 # 注释）。
 * @param {string} line
 * @returns {{ key: string, value: string } | null}
 */
const parseDotenvLine = (line) => {
	const trimmed = String(line).trim();
	if (!trimmed || trimmed.startsWith('#')) return null;
	const eq = trimmed.indexOf('=');
	if (eq <= 0) return null;
	/** 环境变量名 */
	const key = trimmed.slice(0, eq).trim();
	if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) return null;
	/** 原始值（去首尾空白） */
	let value = trimmed.slice(eq + 1).trim();
	if (
		(value.startsWith('"') && value.endsWith('"')) ||
		(value.startsWith("'") && value.endsWith("'"))
	) {
		value = value.slice(1, -1);
	}
	return { key, value };
};

/**
 * 同步将文件内容写入 process.env（已存在的 key 不覆盖）。
 * @param {string} absPath
 * @param {string} text
 * @returns {number} 新写入的键数量
 */
const applyDotenvText = (absPath, text) => {
	let applied = 0;
	for (const line of text.split(/\r?\n/)) {
		const parsed = parseDotenvLine(line);
		if (!parsed) continue;
		if (process.env[parsed.key] !== undefined && process.env[parsed.key] !== '') continue;
		process.env[parsed.key] = parsed.value;
		applied += 1;
	}
	loadedPaths.add(absPath);
	return applied;
};

/**
 * 从仓库根加载 dotenv 文件（默认 `.env`，可选 `.env.local`）。
 * 可重复调用；同一路径只加载一次。已存在的环境变量优先。
 * @param {{ files?: string[] }} [opts]
 * @returns {Promise<{ loaded: string[], applied: number }>}
 */
export const loadProjectEnv = async (opts = {}) => {
	/** 相对仓库根的文件名列表 */
	const files = opts.files || ['.env', '.env.local'];
	/** @type {string[]} */
	const loaded = [];
	let applied = 0;
	for (const rel of files) {
		const abs = path.join(PROJECT_ROOT, rel);
		if (loadedPaths.has(abs)) continue;
		try {
			const text = await fs.readFile(abs, 'utf8');
			applied += applyDotenvText(abs, text);
			loaded.push(rel);
		} catch (err) {
			if (err && err.code === 'ENOENT') continue;
			throw err;
		}
	}
	return { loaded, applied };
};

/**
 * 同步版：供模块顶层在读凭据前调用。
 * @param {{ files?: string[] }} [opts]
 * @returns {{ loaded: string[], applied: number }}
 */
export const loadProjectEnvSync = (opts = {}) => {
	const files = opts.files || ['.env', '.env.local'];
	/** @type {string[]} */
	const loaded = [];
	let applied = 0;
	for (const rel of files) {
		const abs = path.join(PROJECT_ROOT, rel);
		if (loadedPaths.has(abs)) continue;
		try {
			const text = readFileSync(abs, 'utf8');
			applied += applyDotenvText(abs, text);
			loaded.push(rel);
		} catch (err) {
			if (err && err.code === 'ENOENT') continue;
			throw err;
		}
	}
	return { loaded, applied };
};
