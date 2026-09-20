/**
 * 工具侧栏：按主题分层手风琴；当前主题默认展开，其余收起，点击主题名切换。
 * 工具页预渲染时只写占位，完整目录由 Worker 从 Assets `_chrome/{lang}/tool-sidebar.html` 注入（见 toolChrome.ts）。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { TOOL_PAGES, getToolLogoUrl } from '../../site/tools';
import {
	TOOL_TOPIC_ORDER,
	TOPIC_I18N_KEYS,
	TOPICS_HUB_PATH,
	type ToolTopic,
} from '../../site/topics';
import {
	TOOL_SIDEBAR_CHROME_DATA_ATTR,
	TOOL_SIDEBAR_CHROME_MARKER,
} from '../../site/toolChrome';
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
	/** 工具 slug（共享 chrome 用于边缘高亮） */
	toolSlug?: string;
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
 * buildToolSidebarItems 返回值上挂载的 chrome 元数据 Symbol（不可枚举逻辑用）。
 * 工具页调用方无需改动：仍传 groups: buildToolSidebarItems(...)，renderSidebar 识别后输出占位。
 */
const TOOL_SIDEBAR_CHROME_META = Symbol.for('oft.toolSidebarChrome');

/** 挂在 groups 数组上的 chrome 定位信息 */
type ToolSidebarChromeMeta = {
	/** 当前工具 slug */
	currentSlug: string;
	/** 可选页内锚点 */
	currentAnchor?: string;
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
 * 构建共享侧栏主题分组（无当前高亮、默认全部收起；供 Assets chrome 预渲染）。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言
 */
export const buildSharedToolSidebarGroups = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
}): SidebarTopicGroup[] => {
	return TOOL_TOPIC_ORDER.map((topic) => {
		const meta = TOPIC_I18N_KEYS[topic];
		const tools = TOOL_PAGES.filter((p) => p.primaryTopic === topic).sort((a, b) =>
			a.slug.localeCompare(b.slug)
		);
		const items: SidebarItem[] = tools.map((tool) => {
			const path = withLangPrefix(opts.lang, tool.path, opts.defaultLang);
			const label = t(opts.lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default);
			return {
				href: path,
				label,
				logo: getToolLogoUrl(tool),
				toolSlug: tool.slug,
				current: false,
			};
		});
		return {
			topicId: topic,
			label: t(opts.lang, meta.labelKey as keyof typeof import('../../site/i18n/en').default),
			hubHref: withLangPrefix(opts.lang, `${TOPICS_HUB_PATH}/${topic}`, opts.defaultLang),
			expanded: false,
			items,
		};
	}).filter((g) => g.items.length > 0);
};

/**
 * 渲染共享侧栏手风琴内层 HTML（写入 Assets `_chrome/{lang}/tool-sidebar.html`）。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言
 * @param opts.id 手风琴容器 id（默认 toolNav）
 */
export const renderSharedToolSidebarInnerHtml = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	id?: string;
}): string => {
	const groups = buildSharedToolSidebarGroups({
		lang: opts.lang,
		defaultLang: opts.defaultLang,
	});
	return renderTopicAccordion(groups, opts.id || 'toolNav');
};

/**
 * 构建工具页侧栏「请求」：不再内联全量目录，仅携带当前 slug/锚点供占位与边缘高亮。
 * 保留函数名与参数，避免数百个 *Page.ts 改动。
 * @param opts.lang 当前语言（占位阶段未使用；保留签名兼容）
 * @param opts.defaultLang 默认语言（占位阶段未使用；保留签名兼容）
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
	const groups: SidebarTopicGroup[] = [];
	const meta: ToolSidebarChromeMeta = {
		currentSlug: opts.currentSlug,
		currentAnchor: opts.currentAnchor,
	};
	Object.defineProperty(groups, TOOL_SIDEBAR_CHROME_META, {
		value: meta,
		enumerable: false,
		configurable: true,
	});
	return groups;
};

/**
 * 读取 buildToolSidebarItems 挂载的 chrome 元数据。
 * @param groups 侧栏分组数组
 */
const readToolSidebarChromeMeta = (groups?: SidebarTopicGroup[]): ToolSidebarChromeMeta | null => {
	if (!groups) return null;
	const meta = (groups as SidebarTopicGroup[] & { [TOOL_SIDEBAR_CHROME_META]?: ToolSidebarChromeMeta })[
		TOOL_SIDEBAR_CHROME_META
	];
	return meta || null;
};

/**
 * 渲染工具页侧栏占位（标题 + chrome 标记；完整目录由 Worker 注入）。
 * @param opts.title 侧栏标题
 * @param opts.id 手风琴容器 id（注入后由 chrome 内层使用）
 * @param opts.currentSlug 当前工具 slug
 * @param opts.currentAnchor 可选页内锚点
 */
const renderToolSidebarChromePlaceholder = (opts: {
	title: string;
	id?: string;
	currentSlug: string;
	currentAnchor?: string;
}): string => {
	const anchorAttr = opts.currentAnchor
		? ` data-current-anchor="${escapeHtml(opts.currentAnchor)}"`
		: '';
	const idAttr = opts.id ? ` data-chrome-target-id="${escapeHtml(opts.id)}"` : '';
	return `
    <aside id="sidebar" class="border-end" ${TOOL_SIDEBAR_CHROME_DATA_ATTR} data-current-slug="${escapeHtml(opts.currentSlug)}"${anchorAttr}${idAttr}>
      <h2 class="sidebar-title h6">${escapeHtml(opts.title)}</h2>
      ${TOOL_SIDEBAR_CHROME_MARKER}
    </aside>`;
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
			const slugAttr = i.toolSlug ? ` data-tool-slug="${escapeHtml(i.toolSlug)}"` : '';
			const icon = i.logo
				? `<img class="sidebar-tool-logo" src="${escapeHtml(i.logo)}" width="20" height="20" alt="" decoding="async" loading="lazy" />`
				: '';
			return `<a class="list-group-item list-group-item-action${activeClass}" href="${escapeHtml(i.href)}"${currentAttr}${slugAttr}>${icon}<span class="sidebar-tool-label">${escapeHtml(i.label)}</span></a>`;
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
					const slugAttr = i.toolSlug ? ` data-tool-slug="${escapeHtml(i.toolSlug)}"` : '';
					const icon = i.logo
						? `<img class="sidebar-tool-logo" src="${escapeHtml(i.logo)}" width="20" height="20" alt="" decoding="async" loading="lazy" />`
						: '';
					return `<a class="list-group-item list-group-item-action sidebar-topic-tool${activeClass}" href="${escapeHtml(i.href)}"${currentAttr}${slugAttr}>${icon}<span class="sidebar-tool-label">${escapeHtml(i.label)}</span></a>`;
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
 * - 传 `groups` 且来自 buildToolSidebarItems：工具页 chrome 占位（边缘注入）
 * - 传普通 `groups`：主题手风琴（少见；完整内联）
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
	const chromeMeta = readToolSidebarChromeMeta(opts.groups);
	if (chromeMeta) {
		return renderToolSidebarChromePlaceholder({
			title: opts.title,
			id: opts.id,
			currentSlug: chromeMeta.currentSlug,
			currentAnchor: chromeMeta.currentAnchor,
		});
	}

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
