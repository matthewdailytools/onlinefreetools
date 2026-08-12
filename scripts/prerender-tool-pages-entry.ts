/**
 * 构建期预渲染入口：将 TOOL_PAGE_RENDERERS 写出到 public/_pages/{lang}/tools/{slug}.html。
 * 由 scripts/prerender-tool-pages.mjs 经 esbuild 打包后在 Node 中执行。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { TOOL_PAGE_RENDERERS } from '../src/site/toolPageRegistry.generated';
import { supportedLangs, type SiteLang } from '../src/site/i18n';

/** 仓库根目录（打包后相对此文件的上一级为 scripts，再上一级为根）。 */
const root = path.resolve(__dirname, '..');
const pagesRoot = path.join(root, 'public', '_pages');
const defaultLang = (process.env.SITE_DEFAULT_LANG || 'en').trim() as SiteLang;

/**
 * 确保目录存在。
 * @param dir 目录路径
 */
const ensureDir = async (dir: string) => {
	await fs.mkdir(dir, { recursive: true });
};

/**
 * 预渲染全部工具 × 语言。
 */
const main = async () => {
	const langs = (supportedLangs || []) as SiteLang[];
	const slugs = Object.keys(TOOL_PAGE_RENDERERS).sort();
	let wrote = 0;
	for (const lang of langs) {
		const toolsDir = path.join(pagesRoot, lang, 'tools');
		await ensureDir(toolsDir);
		for (const slug of slugs) {
			const render = TOOL_PAGE_RENDERERS[slug];
			const html = render(lang, defaultLang, langs);
			if (typeof html !== 'string' || !html) {
				throw new Error(`prerender empty: lang=${lang} slug=${slug}`);
			}
			await fs.writeFile(path.join(toolsDir, `${slug}.html`), html, 'utf8');
			wrote += 1;
		}
		console.log(`[prerender-tools] lang=${lang} tools=${slugs.length}`);
	}
	console.log(`[prerender-tools] wrote=${wrote} defaultLang=${defaultLang}`);
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
