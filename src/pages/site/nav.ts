/**
 * 全站顶栏导航项构建：各主题名下拉列出该主题 primary 工具链接（多行菜单）。
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

/** 顶栏主题下拉：标签为主题名，子项为工具名 + 链接。 */
export type NavDropdownItem = {
	type: 'dropdown';
	label: string;
	items: { href: string; label: string; openInNewTab?: boolean }[];
};

/** 顶栏导航项：链接或下拉。 */
export type NavItem = NavLinkItem | NavDropdownItem;

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
 * 按主题构建顶栏下拉：主题名为标签，子项为「查看全部」+ primary 工具。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 * @param resolveToolHref 将工具 path 解析为最终 href
 */
export const buildTopicNavDropdowns = (
	lang: SiteLang,
	defaultLang: SiteLang,
	resolveToolHref: (toolPath: string) => string
): NavDropdownItem[] =>
	TOOL_TOPIC_ORDER.map((topic) => {
		const meta = TOPIC_I18N_KEYS[topic];
		const hubHref = withLangPrefix(lang, `${TOPICS_HUB_PATH}/${topic}`, defaultLang);
		return {
			type: 'dropdown',
			label: t(lang, meta.labelKey as keyof typeof import('../../site/i18n/en').default),
			items: [
				{
					href: hubHref,
					label: t(lang, 'topics_view_all' as keyof typeof import('../../site/i18n/en').default),
					openInNewTab: false,
				},
				...getToolsByPrimaryTopic(topic).map((tool) => ({
					href: resolveToolHref(tool.path),
					label: t(lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default),
					/** 工具页在新标签打开，保留当前页上下文 */
					openInNewTab: true,
				})),
			],
		};
	});

/**
 * 主题 / 应用场景 / 工具类型 hub 入口。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 */
export const buildTaxonomyNavLinks = (lang: SiteLang, defaultLang: SiteLang): NavLinkItem[] => [
	{ href: withLangPrefix(lang, TOPICS_HUB_PATH, defaultLang), label: t(lang, 'nav_topics') },
	{ href: withLangPrefix(lang, '/where-to-use-tools', defaultLang), label: t(lang, 'nav_use_cases') },
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
 * 工具页顶栏：首页 + 各主题工具下拉 + 场景/类型 + 开发日志。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 */
export const buildToolPageNavItems = (lang: SiteLang, defaultLang: SiteLang): NavItem[] => [
	{ href: withLangPrefix(lang, '/', defaultLang), label: t(lang, 'nav_home') },
	...buildTopicNavDropdowns(lang, defaultLang, (toolPath) =>
		withLangPrefix(lang, toolPath, defaultLang)
	),
	...buildTaxonomyNavLinks(lang, defaultLang),
	buildDevlogsNavLink(lang),
];
