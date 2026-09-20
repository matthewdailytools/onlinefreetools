/**
 * 工具页共享侧栏（chrome）边缘组合：占位标记、注入、当前项高亮。
 * Worker 出站时用 Assets 中的侧栏片段替换占位，爬虫仍拿到完整 HTML 内链。
 */

/** 预渲染 HTML 中侧栏手风琴的占位注释（由 Worker 替换为真实目录）。 */
export const TOOL_SIDEBAR_CHROME_MARKER = '<!--CHROME:tool-sidebar-->';

/** aside 上标识「需注入 tool-sidebar chrome」的属性片段。 */
export const TOOL_SIDEBAR_CHROME_DATA_ATTR = 'data-chrome="tool-sidebar"';

/**
 * 共享侧栏在 Workers Assets 中的路径。
 * @param lang 语言码（如 en / zh）
 */
export const toolSidebarChromeAssetPath = (lang: string): string =>
	`/_chrome/${encodeURIComponent(lang)}/tool-sidebar.html`;

/**
 * 从预渲染页 HTML 解析侧栏 chrome 请求（当前 slug / 可选锚点）。
 * @param pageHtml 工具页明文 HTML
 * @returns 需注入时返回元数据；无需注入时返回 null
 */
export const extractToolSidebarChromeRequest = (
	pageHtml: string
): { currentSlug: string; currentAnchor?: string } | null => {
	if (!pageHtml.includes(TOOL_SIDEBAR_CHROME_MARKER)) return null;
	const asideMatch = pageHtml.match(
		/<aside\b[^>]*\bdata-chrome="tool-sidebar"[^>]*>/i
	);
	if (!asideMatch) return null;
	const tag = asideMatch[0];
	const slugMatch = tag.match(/\bdata-current-slug="([^"]*)"/i);
	const currentSlug = slugMatch?.[1]?.trim() || '';
	if (!currentSlug) return null;
	const anchorMatch = tag.match(/\bdata-current-anchor="([^"]*)"/i);
	const currentAnchor = anchorMatch?.[1]?.trim() || undefined;
	return { currentSlug, currentAnchor };
};

/**
 * 转义正则特殊字符。
 * @param value 原始字符串
 */
const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * 在共享侧栏 HTML 上标记当前工具、展开所属主题，并按需把当前项 href 换成页内锚点。
 * @param innerHtml 无当前态的侧栏手风琴 HTML
 * @param opts.currentSlug 当前工具 slug
 * @param opts.currentAnchor 可选页内锚点（如 #bmi）
 */
export const applyToolSidebarCurrentState = (
	innerHtml: string,
	opts: { currentSlug: string; currentAnchor?: string }
): string => {
	const slug = opts.currentSlug.trim();
	if (!slug) return innerHtml;
	const slugRe = escapeRegExp(slug);
	const anchor = opts.currentAnchor?.trim();

	const withActiveLinks = innerHtml.replace(
		new RegExp(`(<a\\b)([^>]*\\bdata-tool-slug="${slugRe}"[^>]*)(>)`, 'gi'),
		(_full, start: string, attrs: string, end: string) => {
			let nextAttrs = attrs;
			if (/\bclass="/i.test(nextAttrs)) {
				if (!/\bactive\b/i.test(nextAttrs)) {
					nextAttrs = nextAttrs.replace(/\bclass="/i, 'class="active ');
				}
			} else {
				nextAttrs += ' class="active"';
			}
			if (!/\baria-current="/i.test(nextAttrs)) {
				nextAttrs += ' aria-current="page"';
			}
			if (anchor) {
				if (/\bhref="/i.test(nextAttrs)) {
					nextAttrs = nextAttrs.replace(/\bhref="[^"]*"/i, `href="${anchor}"`);
				} else {
					nextAttrs += ` href="${anchor}"`;
				}
			}
			return `${start}${nextAttrs}${end}`;
		}
	);

	return withActiveLinks.replace(
		/<details\b([^>]*\bdata-topic="[^"]*"[^>]*)>([\s\S]*?)<\/details>/gi,
		(full, attrs: string, body: string) => {
			if (!new RegExp(`\\bdata-tool-slug="${slugRe}"`, 'i').test(body)) {
				return full;
			}
			let nextAttrs = attrs;
			if (!/\bopen\b/i.test(nextAttrs)) {
				nextAttrs += ' open';
			}
			if (/\bclass="/i.test(nextAttrs)) {
				if (!/\bsidebar-topic--current\b/i.test(nextAttrs)) {
					nextAttrs = nextAttrs.replace(/\bclass="/i, 'class="sidebar-topic--current ');
				}
			} else {
				nextAttrs += ' class="sidebar-topic--current"';
			}
			return `<details${nextAttrs}>${body}</details>`;
		}
	);
};

/**
 * 将工具页占位替换为带当前态的侧栏片段。
 * @param pageHtml 含 TOOL_SIDEBAR_CHROME_MARKER 的页面 HTML
 * @param chromeInnerHtml Assets 中的共享侧栏 HTML（无当前态）
 * @param opts 当前工具定位
 */
export const composeToolPageWithSidebarChrome = (
	pageHtml: string,
	chromeInnerHtml: string,
	opts: { currentSlug: string; currentAnchor?: string }
): string => {
	const ready = applyToolSidebarCurrentState(chromeInnerHtml, opts);
	if (!pageHtml.includes(TOOL_SIDEBAR_CHROME_MARKER)) {
		return pageHtml;
	}
	return pageHtml.split(TOOL_SIDEBAR_CHROME_MARKER).join(ready);
};

/**
 * 从 R2/内部路径推断语言码（`/_pages/{lang}/...`）。
 * @param assetHtmlPath 内部明文路径
 * @param fallback 无法解析时的回退语言
 */
export const langFromPagesAssetPath = (assetHtmlPath: string, fallback = 'en'): string => {
	const match = String(assetHtmlPath || '').match(/^\/_pages\/([^/]+)\//i);
	return match?.[1] || fallback;
};
