/**
 * 审计 Prompt 工具簇十语分片：找出与 en / es 完全相同的“未本地化”键，并输出报告。
 *
 * 判定：非 en 分片中的键若与 en 值逐字相同 → 英文残留；
 * 非 es 分片中的键若与 es 值逐字相同 → 西语模板污染。
 * 报告写入 scripts/tmp/prompt-i18n-report.json，供后续逐语重写使用。
 */
import { readFile, writeFile } from 'node:fs/promises';

/** 九个 Prompt 工具 slug。 */
const slugs = [
	'prompt-template-builder',
	'writing-prompt-generator',
	'midjourney-prompt-builder',
	'sketch-prompt-generator',
	'film-prompt-builder',
	'short-drama-prompt-generator',
	'product-design-prompt-builder',
	'android-prompt-builder',
	'ios-prompt-builder',
];

/** 站点十语。 */
const langs = ['en', 'zh', 'es', 'pt', 'fr', 'de', 'ja', 'ru', 'ar', 'id'];

/**
 * 极简解析分片：抓取 `key: '...'` / `key:\n\t\t'...'` 形式的键值。
 * @param {string} source 分片源码
 * @returns {Map<string, string>} 键值表
 */
const parseShard = (source) => {
	const map = new Map();
	const re = /^\t([a-zA-Z0-9_]+):\s*(?:\n\t\t)?((?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")),?$/gm;
	let m;
	while ((m = re.exec(source))) {
		map.set(m[1], m[2].slice(1, -1));
	}
	return map;
};

/** 报告结构：slug → lang → 待重写键列表。 */
const report = {};
for (const slug of slugs) {
	/** 各语言键值表。 */
	const byLang = new Map();
	for (const lang of langs) {
		const path = `src/site/i18n/tools/${slug}/${lang}.ts`;
		byLang.set(lang, parseShard(await readFile(path, 'utf8')));
	}
	const en = byLang.get('en');
	const es = byLang.get('es');
	report[slug] = {};
	for (const lang of langs) {
		if (lang === 'en') continue;
		const dict = byLang.get(lang);
		/** 该语言需要重写的键。 */
		const bad = [];
		for (const [key, value] of dict) {
			if (!value || value.length < 12) continue;
			const sameEn = en.get(key) === value;
			const sameEs = lang !== 'es' && es.get(key) === value;
			if (sameEn || sameEs) bad.push({ key, reason: sameEn ? 'en-leftover' : 'es-pollution' });
		}
		if (bad.length) report[slug][lang] = bad;
	}
}

await writeFile('scripts/tmp/prompt-i18n-report.json', `${JSON.stringify(report, null, 2)}\n`);

let total = 0;
for (const slug of Object.keys(report)) {
	for (const lang of Object.keys(report[slug])) {
		total += report[slug][lang].length;
		console.log(`${slug}\t${lang}\t${report[slug][lang].length}`);
	}
}
console.log(`TOTAL ${total}`);
