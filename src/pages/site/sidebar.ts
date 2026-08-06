/**
 * 工具侧栏：列表渲染 + 全站工具导航去重构建。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { TOOL_PAGES, getToolLogoUrl } from '../../site/tools';
import { escapeHtml } from './layout';

/** 侧栏单项：链接、文案、logo、是否当前页 */
export type SidebarItem = {
	/** 链接（工具路径或页内锚点） */
	href: string;
	/** 可见文案 */
	label: string;
	/** 工具 logo 路径（可选） */
	logo?: string;
	/** 是否为当前工具（高亮） */
	current?: boolean;
};

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 路径
 * @param defaultLang 默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 构建去重后的工具侧栏项（每个工具只出现一次）。
 * 当前工具可指向页内锚点，并标记 current 高亮。
 */
export const buildToolSidebarItems = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	/** 当前工具 slug */
	currentSlug: string;
	/** 当前页内锚点（如 #converter）；省略则链到工具规范路径 */
	currentAnchor?: string;
}): SidebarItem[] => {
	return TOOL_PAGES.map((tool) => {
		const isCurrent = tool.slug === opts.currentSlug;
		const path = withLangPrefix(opts.lang, tool.path, opts.defaultLang);
		const label = t(opts.lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default);
		return {
			href: isCurrent && opts.currentAnchor ? opts.currentAnchor : path,
			label,
			logo: getToolLogoUrl(tool),
			current: isCurrent,
		};
	});
};

/**
 * 渲染左侧工具菜单（含工具 logo）。
 * @param opts.title 侧栏标题
 * @param opts.items 菜单项（勿重复同一工具）
 * @param opts.id 列表容器 id
 */
export const renderSidebar = (opts: { title: string; items: SidebarItem[]; id?: string }) => {
	const list = (opts.items || [])
		.map((i) => {
			const currentAttr = i.current ? ' aria-current="page"' : '';
			const activeClass = i.current ? ' active' : '';
			const icon = i.logo
				? `<img class="sidebar-tool-logo" src="${escapeHtml(i.logo)}" width="20" height="20" alt="" decoding="async" />`
				: '';
			return `<a class="list-group-item list-group-item-action${activeClass}" href="${escapeHtml(i.href)}"${currentAttr}>${icon}<span class="sidebar-tool-label">${escapeHtml(i.label)}</span></a>`;
		})
		.join('');

	return `
    <aside id="sidebar" class="border-end">
      <h2 class="sidebar-title h6">${escapeHtml(opts.title)}</h2>
      <div class="list-group list-group-flush small" id="${escapeHtml(opts.id || 'sidebarList')}">${list}</div>
    </aside>`;
};
