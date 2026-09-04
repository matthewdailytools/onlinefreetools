/**
 * 工具页顶栏导航项构建（slug 工具页 / 信息页 / 首页共用同一套菜单）。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { getToolsByPrimaryTopic } from '../../site/tools';
import { TOOL_TOPIC_ORDER, TOPIC_I18N_KEYS, TOPICS_HUB_PATH } from '../../site/topics';

/** 普通顶栏链接。 */
export type NavLinkItem = {
	type?: 'link';
	href: string;
	label: string;
	/** 为 true 时在新标签打开（工具页入口） */
	openInNewTab?: boolean;
};

/** 顶栏单列下拉（子项为扁平链接）。 */
export type NavDropdownItem = {
	type: 'dropdown';
	label: string;
	items: { href: string; label: string; openInNewTab?: boolean }[];
};

/** 顶栏「工具」巨型菜单：按主题分列，列头链到主题 hub。 */
export type NavMegaItem = {
	type: 'mega';
	/** 顶栏可见标签（如「工具」） */
	label: string;
	/** 切换按钮可选落地 URL（主题总览） */
	href?: string;
	/** 每列：主题 id + 标题 + primary 工具链接 */
	columns: {
		/** 主题 id（两级面板切换用） */
		id: string;
		heading: { href: string; label: string };
		items: { href: string; label: string; openInNewTab?: boolean }[];
	}[];
};

/** 顶栏导航项：链接、下拉或巨型菜单。 */
export type NavItem = NavLinkItem | NavDropdownItem | NavMegaItem;

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang): string => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 构建「工具」巨型菜单：悬停后按主题分列展示 primary 工具（不依赖 Bootstrap Dropdown JS）。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 * @param resolveToolHref 将工具 path 解析为最终 href
 */
export const buildToolsMegaNavItem = (
	lang: SiteLang,
	defaultLang: SiteLang,
	resolveToolHref: (toolPath: string) => string
): NavMegaItem => ({
	type: 'mega',
	label: t(lang, 'nav_tools'),
	href: withLangPrefix(lang, TOPICS_HUB_PATH, defaultLang),
	columns: TOOL_TOPIC_ORDER.map((topic) => {
		const meta = TOPIC_I18N_KEYS[topic];
		return {
			id: topic,
			heading: {
				href: withLangPrefix(lang, `${TOPICS_HUB_PATH}/${topic}`, defaultLang),
				label: t(lang, meta.labelKey as keyof typeof import('../../site/i18n/en').default),
			},
			items: getToolsByPrimaryTopic(topic).map((tool) => ({
				href: resolveToolHref(tool.path),
				label: t(lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default),
				openInNewTab: true,
			})),
		};
	}),
});

/**
 * 主题总览 + 工具类型 hub 入口。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 */
export const buildTaxonomyNavLinks = (lang: SiteLang, defaultLang: SiteLang): NavLinkItem[] => [
	{ href: withLangPrefix(lang, TOPICS_HUB_PATH, defaultLang), label: t(lang, 'nav_topics') },
	{ href: withLangPrefix(lang, '/tool-type', defaultLang), label: t(lang, 'nav_tool_type') },
];

/**
 * 开发日志顶栏入口（全局 `/devlogs/`，无语言前缀）。
 * @param lang 当前语言
 */
export const buildDevlogsNavLink = (lang: SiteLang): NavLinkItem => ({
	href: '/devlogs/',
	label: t(lang, 'nav_devlogs'),
});

/**
 * 工具页顶栏：首页 + 工具巨型菜单 + 主题/类型 + 开发日志。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 */
export const buildToolPageNavItems = (lang: SiteLang, defaultLang: SiteLang): NavItem[] => [
	{ href: withLangPrefix(lang, '/', defaultLang), label: t(lang, 'nav_home') },
	buildToolsMegaNavItem(lang, defaultLang, (toolPath) => withLangPrefix(lang, toolPath, defaultLang)),
	...buildTaxonomyNavLinks(lang, defaultLang),
	buildDevlogsNavLink(lang),
];
