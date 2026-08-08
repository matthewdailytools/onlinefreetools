#!/usr/bin/env node
/**
 * 一次性拆分（可重跑）：把合并后的 catalog / i18n 拆回分片。
 *
 * - tool-catalog.json → tool-catalog.d/{slug}.json
 * - src/site/i18n/{lang}.ts → core/{lang}.ts + tools/{slug}/{lang}.ts
 *
 * 警告：日常开发请只编辑分片后 `npm run merge:tools`。
 * 若已改分片却未 merge，再跑本脚本会用旧的合并文件覆盖分片。
 *
 * 拆完后务必：`npm run merge:tools`
 */
import fs from 'node:fs';
import path from 'node:path';
import {
	ROOT,
	LANGS,
	CATALOG_PATH,
	CATALOG_DIR,
	I18N_DIR,
	I18N_CORE_DIR,
	I18N_TOOLS_DIR,
	ensureDir,
	readJson,
	writeJson,
	defaultPageMeta,
	parseLocaleDict,
	writeLocaleTs,
} from './lib.mjs';

/**
 * Split catalog into per-slug shards with page wiring metadata.
 */
function splitCatalog() {
	const catalog = readJson(CATALOG_PATH);
	ensureDir(CATALOG_DIR);
	for (const tool of catalog) {
		const page = defaultPageMeta(tool.slug);
		const shard = { ...tool, page };
		writeJson(path.join(CATALOG_DIR, `${tool.slug}.json`), shard);
	}
	console.log(`catalog shards: ${catalog.length} → ${CATALOG_DIR}`);
	return catalog;
}

/**
 * Split each locale file into core + per-tool shards using faqPrefix ownership.
 * @param {Array<{slug:string,faqPrefix:string}>} catalog
 */
function splitI18n(catalog) {
	/** Longest prefix first so tool_image_overlay wins over tool_image */
	const prefixes = catalog
		.map((t) => ({ slug: t.slug, prefix: t.faqPrefix }))
		.sort((a, b) => b.prefix.length - a.prefix.length);

	for (const lang of LANGS) {
		const srcPath = path.join(I18N_DIR, `${lang}.ts`);
		const dict = parseLocaleDict(fs.readFileSync(srcPath, 'utf8'));
		/** @type {Record<string, Record<string, string>>} */
		const bySlug = {};
		/** @type {Record<string, string>} */
		const core = {};

		for (const [key, value] of Object.entries(dict)) {
			let owned = null;
			if (key.startsWith('tool_')) {
				for (const { slug, prefix } of prefixes) {
					if (key === prefix || key.startsWith(`${prefix}_`)) {
						owned = slug;
						break;
					}
				}
			}
			if (owned) {
				if (!bySlug[owned]) bySlug[owned] = {};
				bySlug[owned][key] = value;
			} else {
				core[key] = value;
			}
		}

		writeLocaleTs(
			path.join(I18N_CORE_DIR, `${lang}.ts`),
			lang,
			core,
			`i18n core (${lang}) — shared site chrome. Edit this file for non-tool keys.`
		);

		for (const tool of catalog) {
			const shard = bySlug[tool.slug] || {};
			writeLocaleTs(
				path.join(I18N_TOOLS_DIR, tool.slug, `${lang}.ts`),
				lang,
				shard,
				`i18n tool shard (${tool.slug} / ${lang}). Edit only this tool's keys.`
			);
		}

		console.log(
			`i18n ${lang}: core=${Object.keys(core).length} tools=${Object.keys(bySlug).length}`
		);
	}
}

const catalog = splitCatalog();
splitI18n(catalog);
console.log('split-once done. Next: npm run merge:tools');
