/**
 * 工具侧栏：按主题分层手风琴；当前主题默认展开，其余收起，点击主题名切换。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { TOOL_PAGES, getToolBySlug, getToolLogoUrl } from '../../site/tools';
import {
	TOOL_TOPIC_ORDER,
	TOPIC_I18N_KEYS,
	TOPICS_HUB_PATH,
	type ToolTopic,
} from '../../site/topics';
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

/** 侧栏主题分组：手风琴一层 */
export type SidebarTopicGroup = {
	/** 主题 id */
	topicId: ToolTopic;
	/** 主题短标签 */
	label: string;
	/** 主题 hub 链接 */
	hubHref: string;
	/** 是否默认展开（当前工具所属 primary 主题） */
	expanded: boolean;
	/** 该主题下的 primary 工具链接 */
	items: SidebarItem[];
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
 * 构建按主题分层的侧栏分组（primary 归属；当前主题 expanded）。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言
 * @param opts.currentSlug 当前工具 slug
 * @param opts.currentAnchor 当前页内锚点（可选）
 */
export const buildToolSidebarItems = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	/** 当前工具 slug */
	currentSlug: string;
	/** 当前页内锚点（如 #converter）；省略则链到工具规范路径 */
	currentAnchor?: string;
}): SidebarTopicGroup[] => {
	const current = getToolBySlug(opts.currentSlug);
	const currentTopic: ToolTopic | null = current?.primaryTopic ?? null;

	return TOOL_TOPIC_ORDER.map((topic) => {
		const meta = TOPIC_I18N_KEYS[topic];
		const tools = TOOL_PAGES.filter((p) => p.primaryTopic === topic).sort((a, b) =>
			a.slug.localeCompare(b.slug)
		);
		const items: SidebarItem[] = tools.map((tool) => {
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
		return {
			topicId: topic,
			label: t(opts.lang, meta.labelKey as keyof typeof import('../../site/i18n/en').default),
			hubHref: withLangPrefix(opts.lang, `${TOPICS_HUB_PATH}/${topic}`, opts.defaultLang),
			expanded: currentTopic === topic,
			items,
		};
	}).filter((g) => g.items.length > 0);
};

/**
 * 渲染扁平链接列表（主题 hub / About 等非工具页侧栏）。
 * @param items 链接项
 * @param id 列表容器 id
 */
const renderFlatList = (items: SidebarItem[], id: string): string =>
	items
		.map((i) => {
			const currentAttr = i.current ? ' aria-current="page"' : '';
			const activeClass = i.current ? ' active' : '';
			const icon = i.logo
				? `<img class="sidebar-tool-logo" src="${escapeHtml(i.logo)}" width="20" height="20" alt="" decoding="async" loading="lazy" />`
				: '';
			return `<a class="list-group-item list-group-item-action${activeClass}" href="${escapeHtml(i.href)}"${currentAttr}>${icon}<span class="sidebar-tool-label">${escapeHtml(i.label)}</span></a>`;
		})
		.join('');

/**
 * 渲染主题手风琴侧栏（details/summary：当前主题 open，点击展开其他主题）。
 * @param groups 主题分组
 * @param id 根容器 id
 */
const renderTopicAccordion = (groups: SidebarTopicGroup[], id: string): string => {
	const blocks = groups
		.map((g) => {
			const openAttr = g.expanded ? ' open' : '';
			const currentClass = g.expanded ? ' sidebar-topic--current' : '';
			const tools = g.items
				.map((i) => {
					const currentAttr = i.current ? ' aria-current="page"' : '';
					const activeClass = i.current ? ' active' : '';
					const icon = i.logo
						? `<img class="sidebar-tool-logo" src="${escapeHtml(i.logo)}" width="20" height="20" alt="" decoding="async" loading="lazy" />`
						: '';
					return `<a class="list-group-item list-group-item-action sidebar-topic-tool${activeClass}" href="${escapeHtml(i.href)}"${currentAttr}>${icon}<span class="sidebar-tool-label">${escapeHtml(i.label)}</span></a>`;
				})
				.join('');
			return `<details class="sidebar-topic${currentClass}" data-topic="${escapeHtml(g.topicId)}"${openAttr}>
        <summary class="sidebar-topic-summary">
          <span class="sidebar-topic-label">${escapeHtml(g.label)}</span>
          <span class="sidebar-topic-count" aria-hidden="true">${g.items.length}</span>
        </summary>
        <div class="list-group list-group-flush small sidebar-topic-tools">
          <a class="list-group-item list-group-item-action sidebar-topic-hub" href="${escapeHtml(g.hubHref)}">${escapeHtml(g.label)} →</a>
          ${tools}
        </div>
      </details>`;
		})
		.join('');
	return `<div class="sidebar-topic-accordion" id="${escapeHtml(id)}">${blocks}</div>`;
};

/**
 * 渲染左侧菜单。
 * - 传 `groups`：主题手风琴（工具页）
 * - 传 `items`：扁平列表（主题 hub / 信息页等）
 * @param opts.title 侧栏标题
 * @param opts.groups 主题分组（优先）
 * @param opts.items 扁平项（无 groups 时使用）
 * @param opts.id 列表/手风琴容器 id
 */
export const renderSidebar = (opts: {
	title: string;
	items?: SidebarItem[];
	groups?: SidebarTopicGroup[];
	id?: string;
}) => {
	const id = opts.id || 'sidebarList';
	const body =
		opts.groups && opts.groups.length
			? renderTopicAccordion(opts.groups, id)
			: `<div class="list-group list-group-flush small" id="${escapeHtml(id)}">${renderFlatList(opts.items || [], id)}</div>`;

	return `
    <aside id="sidebar" class="border-end">
      <h2 class="sidebar-title h6">${escapeHtml(opts.title)}</h2>
      ${body}
    </aside>`;
};
