/**
 * 校验分片键集合与顺序是否与 en 完全一致（只比较键名，不比较值）。
 * 用法：node scripts/tmp/check-shard-keys.mjs <slug> [...]
 */
import { readFile } from 'node:fs/promises';

const langs = ['en', 'zh', 'es', 'pt', 'fr', 'de', 'ja', 'ru', 'ar', 'id'];

/**
 * 抓取分片中的键名顺序。
 * @param {string} src 源码
 * @returns {string[]} 键名数组
 */
const keys = (src) => [...src.matchAll(/^\t([a-zA-Z0-9_]+):/gm)].map((m) => m[1]);

let bad = 0;
for (const slug of process.argv.slice(2)) {
	const ref = keys(await readFile(`src/site/i18n/tools/${slug}/en.ts`, 'utf8'));
	for (const lang of langs.slice(1)) {
		const cur = keys(await readFile(`src/site/i18n/tools/${slug}/${lang}.ts`, 'utf8'));
		if (cur.join('|') !== ref.join('|')) {
			bad += 1;
			const missing = ref.filter((k) => !cur.includes(k));
			const extra = cur.filter((k) => !ref.includes(k));
			console.log(`MISMATCH ${slug}/${lang} count=${cur.length}/${ref.length} missing=${missing} extra=${extra}`);
		}
	}
	console.log(`${slug}: ref keys=${ref.length}`);
}
console.log(bad ? `BAD ${bad}` : 'KEYS OK');
