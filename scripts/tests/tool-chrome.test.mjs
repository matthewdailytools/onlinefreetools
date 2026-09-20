/**
 * 工具侧栏 chrome 边缘组合单元测试。
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promises as fs } from 'node:fs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(import.meta.url);
const outFile = path.join(root, '.cache', 'tool-chrome.test.cjs');

/**
 * 用 esbuild 把 toolChrome.ts 打成 CJS 供 Node 测试导入。
 * @returns {Promise<typeof import('../../src/site/toolChrome')>}
 */
const loadToolChrome = async () => {
	/** @type {typeof import('esbuild')} */
	let esbuild;
	try {
		esbuild = require('esbuild');
	} catch {
		const wranglerPkg = path.dirname(require.resolve('wrangler/package.json'));
		esbuild = require(path.join(wranglerPkg, 'node_modules', 'esbuild'));
	}
	await fs.mkdir(path.dirname(outFile), { recursive: true });
	await esbuild.build({
		entryPoints: [path.join(root, 'src', 'site', 'toolChrome.ts')],
		bundle: true,
		platform: 'node',
		format: 'cjs',
		target: 'node20',
		outfile: outFile,
		logLevel: 'silent',
	});
	delete require.cache[outFile];
	return require(outFile);
};

test('compose injects chrome and highlights current slug + anchor', async () => {
	const {
		TOOL_SIDEBAR_CHROME_MARKER,
		composeToolPageWithSidebarChrome,
		extractToolSidebarChromeRequest,
		applyToolSidebarCurrentState,
		langFromPagesAssetPath,
		toolSidebarChromeAssetPath,
	} = await loadToolChrome();

	assert.equal(toolSidebarChromeAssetPath('zh'), '/_chrome/zh/tool-sidebar.html');
	assert.equal(langFromPagesAssetPath('/_pages/zh/tools/bmi.html'), 'zh');
	assert.equal(langFromPagesAssetPath('/_pages/en/tools/x.html', 'en'), 'en');

	const page = `<html><aside id="sidebar" data-chrome="tool-sidebar" data-current-slug="how-to-calculate-bmi" data-current-anchor="#bmi"><h2>Tools</h2>${TOOL_SIDEBAR_CHROME_MARKER}</aside></html>`;
	const req = extractToolSidebarChromeRequest(page);
	assert.deepEqual(req, { currentSlug: 'how-to-calculate-bmi', currentAnchor: '#bmi' });

	const chrome = `<div class="sidebar-topic-accordion" id="toolNav">
<details class="sidebar-topic" data-topic="health">
<summary>Health</summary>
<div>
<a class="list-group-item list-group-item-action sidebar-topic-tool" href="/tools/how-to-calculate-bmi" data-tool-slug="how-to-calculate-bmi"><span>BMI</span></a>
<a class="list-group-item list-group-item-action sidebar-topic-tool" href="/tools/other" data-tool-slug="other"><span>Other</span></a>
</div>
</details>
</div>`;

	const highlighted = applyToolSidebarCurrentState(chrome, {
		currentSlug: 'how-to-calculate-bmi',
		currentAnchor: '#bmi',
	});
	assert.match(highlighted, /\bactive\b/);
	assert.match(highlighted, /data-tool-slug="how-to-calculate-bmi"/);
	assert.match(highlighted, /href="#bmi"/);
	assert.match(highlighted, /aria-current="page"/);
	assert.match(highlighted, /<details[^>]*\bopen\b/);
	assert.match(highlighted, /sidebar-topic--current/);
	assert.ok(!/data-tool-slug="other"[^>]*\bactive\b/.test(highlighted));
	assert.ok(highlighted.includes('class="active list-group-item'));

	const composed = composeToolPageWithSidebarChrome(page, chrome, req);
	assert.equal(composed.includes(TOOL_SIDEBAR_CHROME_MARKER), false);
	assert.match(composed, /data-tool-slug="how-to-calculate-bmi"/);
	assert.match(composed, /href="#bmi"/);
});

test('pages without chrome marker are left unchanged', async () => {
	const { extractToolSidebarChromeRequest, composeToolPageWithSidebarChrome } = await loadToolChrome();
	const page = '<html><aside id="sidebar">flat</aside></html>';
	assert.equal(extractToolSidebarChromeRequest(page), null);
	assert.equal(composeToolPageWithSidebarChrome(page, '<div>x</div>', { currentSlug: 'x' }), page);
});
