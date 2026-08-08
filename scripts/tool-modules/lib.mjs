/**
 * 工具分片拆分/合并共用库：catalog 分片、i18n 分片、页面注册元数据。
 *
 * 导出路径常量、kebab↔camel、locale 字典解析/写出、catalog 分片加载等。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '../..');
export const LANGS = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

export const CATALOG_PATH = path.join(ROOT, 'src/site/tool-catalog.json');
export const CATALOG_DIR = path.join(ROOT, 'src/site/tool-catalog.d');
export const I18N_DIR = path.join(ROOT, 'src/site/i18n');
export const I18N_CORE_DIR = path.join(I18N_DIR, 'core');
export const I18N_TOOLS_DIR = path.join(I18N_DIR, 'tools');
export const REGISTRY_OUT = path.join(ROOT, 'src/site/toolPageRegistry.generated.ts');
export const HOME_I18N_OUT = path.join(ROOT, 'scripts/site/i18n-tools.generated.mjs');

/**
 * Ensure a directory exists.
 * @param {string} dir
 */
export function ensureDir(dir) {
	fs.mkdirSync(dir, { recursive: true });
}

/**
 * Read JSON file.
 * @param {string} file
 */
export function readJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * Write JSON with trailing newline.
 * @param {string} file
 * @param {unknown} data
 */
export function writeJson(file, data) {
	ensureDir(path.dirname(file));
	fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

/**
 * kebab-case → camelCase (flip-image → flipImage).
 * @param {string} slug
 */
export function kebabToCamel(slug) {
	return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * Default page wiring from slug convention.
 * @param {string} slug
 */
export function defaultPageMeta(slug) {
	const camel = kebabToCamel(slug);
	/** 页面文件名特例（与 kebab→camel 约定不一致） */
	const moduleOverrides = {
		'how-to-calculate-marginal-revenue': '../pages/marginalRevenuePage',
		indexnow: '../pages/indexNowPage',
	};
	/** 导出名特例（不匹配 render{Camel}Page） */
	const exportOverrides = {
		'how-to-calculate-marginal-revenue': 'renderMarginalRevenuePage',
		indexnow: 'renderIndexNowPage',
	};
	const styleOverrides = {
		'website-headers': 'pair',
		'ip-address': 'pair',
	};
	return {
		module: moduleOverrides[slug] || `../pages/${camel}Page`,
		export: exportOverrides[slug] || `render${camel.charAt(0).toUpperCase()}${camel.slice(1)}Page`,
		style: styleOverrides[slug] || 'opts',
	};
}

/**
 * Parse a SiteLangDict object literal from a .ts locale file into a key→value map.
 * Supports single-quoted strings (including escaped quotes) and multi-line `key:\\n  'value'` forms.
 * @param {string} source
 * @returns {Record<string, string>}
 */
export function parseLocaleDict(source) {
	const start = source.indexOf('{');
	const end = source.lastIndexOf('};');
	if (start < 0 || end < 0) throw new Error('locale dict braces not found');
	const body = source.slice(start + 1, end);
	/** @type {Record<string, string>} */
	const out = {};
	let i = 0;
	const n = body.length;

	const skipWs = () => {
		while (i < n && /\s/.test(body[i])) i += 1;
	};

	while (i < n) {
		skipWs();
		if (i >= n) break;
		if (body.startsWith('//', i)) {
			while (i < n && body[i] !== '\n') i += 1;
			continue;
		}
		if (body.startsWith('/*', i)) {
			const close = body.indexOf('*/', i + 2);
			i = close < 0 ? n : close + 2;
			continue;
		}
		const keyMatch = body.slice(i).match(/^([A-Za-z0-9_]+)\s*:/);
		if (!keyMatch) {
			i += 1;
			continue;
		}
		const key = keyMatch[1];
		i += keyMatch[0].length;
		skipWs();
		if (body[i] !== "'" && body[i] !== '"') {
			// skip non-string values
			continue;
		}
		const quote = body[i];
		i += 1;
		let value = '';
		while (i < n) {
			const ch = body[i];
			if (ch === '\\') {
				const next = body[i + 1] || '';
				/** 解析 JS 单引号字符串转义（\\n → 真换行，避免双重转义残留字面 \\n） */
				if (next === 'n') value += '\n';
				else if (next === 'r') value += '\r';
				else if (next === 't') value += '\t';
				else if (next === '\\') value += '\\';
				else if (next === "'") value += "'";
				else if (next === '"') value += '"';
				else value += next;
				i += 2;
				continue;
			}
			if (ch === quote) {
				i += 1;
				break;
			}
			value += ch;
			i += 1;
		}
		out[key] = value;
		skipWs();
		if (body[i] === ',') i += 1;
	}
	return out;
}

/**
 * Escape a string for a single-quoted TS/JS literal（含换行 → \\n）。
 * @param {string} s
 */
export function escapeSingleQuoted(s) {
	return s
		.replace(/\\/g, '\\\\')
		.replace(/'/g, "\\'")
		.replace(/\r/g, '\\r')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t');
}

/**
 * Format dict entries as TypeScript object fields.
 * @param {Record<string, string>} dict
 */
export function formatTsDictEntries(dict) {
	const keys = Object.keys(dict).sort();
	const lines = [];
	for (const key of keys) {
		const val = escapeSingleQuoted(dict[key]);
		if (val.length > 100) {
			lines.push(`  ${key}:\n    '${val}',`);
		} else {
			lines.push(`  ${key}: '${val}',`);
		}
	}
	return lines.join('\n');
}

/**
 * Write a locale .ts module.
 * @param {string} file Absolute path of the output .ts file
 * @param {string} lang
 * @param {Record<string, string>} dict
 * @param {string} banner
 */
export function writeLocaleTs(file, lang, dict, banner) {
	ensureDir(path.dirname(file));
	const relTypes = file.includes(`${path.sep}i18n${path.sep}tools${path.sep}`)
		? '../../../types'
		: file.includes(`${path.sep}i18n${path.sep}core${path.sep}`)
			? '../types'
			: './types';
	const body = `/**
 * ${banner}
 */
import type { SiteLangDict } from '${relTypes}';
const ${lang}: SiteLangDict = {
${formatTsDictEntries(dict)}
};
export default ${lang};
`;
	fs.writeFileSync(file, body, 'utf8');
}

/**
 * List catalog shard files sorted by slug.
 */
export function listCatalogShards() {
	if (!fs.existsSync(CATALOG_DIR)) return [];
	return fs
		.readdirSync(CATALOG_DIR)
		.filter((f) => f.endsWith('.json'))
		.sort()
		.map((f) => path.join(CATALOG_DIR, f));
}

/**
 * Load all catalog shards (including `page` meta).
 */
export function loadCatalogShards() {
	return listCatalogShards().map((file) => readJson(file));
}

/**
 * Public catalog entry without internal `page` field.
 * @param {Record<string, unknown>} shard
 */
export function toPublicCatalogEntry(shard) {
	const { page, ...rest } = shard;
	return rest;
}
