/**
 * 全站顶栏导航项构建：各分类名下拉列出该分类工具链接（图片编辑优先）。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { getToolsByCategory } from '../../site/tools';
import { TOOL_CATEGORY_ORDER, getCategoryRuntimeLabelKey } from '../../site/categories';

/** 普通顶栏链接。 */
export type NavLinkItem = {
	type?: 'link';
	href: string;
	label: string;
};

/** 顶栏分类下拉：标签为分类名，子项为工具名 + 链接。 */
export type NavDropdownItem = {
	type: 'dropdown';
	label: string;
	items: { href: string; label: string }[];
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
 * 按分类构建顶栏下拉：分类名为标签，子项为该分类下各工具。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 * @param resolveToolHref 将工具 path 解析为最终 href
 */
export const buildCategoryNavDropdowns = (
	lang: SiteLang,
	defaultLang: SiteLang,
	resolveToolHref: (toolPath: string) => string
): NavDropdownItem[] =>
	TOOL_CATEGORY_ORDER.map((category) => ({
		type: 'dropdown',
		label: t(lang, getCategoryRuntimeLabelKey(category)),
		items: getToolsByCategory(category).map((tool) => ({
			href: resolveToolHref(tool.path),
			label: t(lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default),
		})),
	}));

/**
 * 工具页顶栏：首页 + 各分类工具下拉（关于、开发日志在页脚）。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 */
export const buildToolPageNavItems = (lang: SiteLang, defaultLang: SiteLang): NavItem[] => [
	{ href: withLangPrefix(lang, '/', defaultLang), label: t(lang, 'nav_home') },
	...buildCategoryNavDropdowns(lang, defaultLang, (toolPath) =>
		withLangPrefix(lang, toolPath, defaultLang)
	),
];
