/**
 * 预渲染入口：写出 public/_chrome/{lang}/tool-sidebar.html，并更新 chromeVersion.generated.ts。
 */
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { renderSharedToolSidebarInnerHtml } from '../src/pages/site/sidebar';
import { supportedLangs, type SiteLang } from '../src/site/i18n';

/** 仓库根（本文件位于 scripts/） */
const root = path.resolve(__dirname, '..');
/** Assets 侧栏根目录 */
const chromeRoot = path.join(root, 'public', '_chrome');
/** Worker 导入的 chrome 版本文件 */
const versionFile = path.join(root, 'src', 'site', 'chromeVersion.generated.ts');

/**
 * 构建全部语言的共享侧栏，并写入内容指纹。
 */
const main = async () => {
	const defaultLang = (process.env.SITE_DEFAULT_LANG || 'en').trim() as SiteLang;
	const langs = (supportedLangs || [defaultLang]) as SiteLang[];
	await fs.mkdir(chromeRoot, { recursive: true });

	/** 按语言拼接后统一哈希，保证任一语种变更都会 bump 版本 */
	const hash = createHash('sha256');
	for (const lang of langs) {
		const html = renderSharedToolSidebarInnerHtml({ lang, defaultLang, id: 'toolNav' });
		const outDir = path.join(chromeRoot, lang);
		await fs.mkdir(outDir, { recursive: true });
		const outFile = path.join(outDir, 'tool-sidebar.html');
		await fs.writeFile(outFile, html, 'utf8');
		hash.update(lang);
		hash.update('\0');
		hash.update(html);
		hash.update('\n');
		console.log(`[build-tool-chrome] wrote ${path.relative(root, outFile)} bytes=${html.length}`);
	}

	const version = hash.digest('hex').slice(0, 16);
	const versionSource = `/**
 * 工具侧栏共享 chrome 内容指纹（由 scripts/build-tool-chrome 在构建时写入）。
 * Worker 将其并入 HTML Cache API 版本，使菜单更新无需重传全部工具页也能失效旧组合缓存。
 */
export const CHROME_CACHE_VERSION = '${version}';
`;
	await fs.writeFile(versionFile, versionSource, 'utf8');
	console.log(`[build-tool-chrome] CHROME_CACHE_VERSION=${version} langs=${langs.length}`);
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
