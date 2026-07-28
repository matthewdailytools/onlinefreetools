/**
 * 工具目录：从单一 JSON 数据源加载，供路由注册、侧栏与相关工具互链使用。
 */
import catalog from './tool-catalog.json';

/** 工具分类：计算器或开发者工具。 */
export type ToolCategory = 'calculator' | 'developer';

/** 单个工具的目录元数据。 */
export type ToolPageMeta = {
	/** URL slug，对应 /tools/{slug} */
	slug: string;
	/** 规范路径（默认语无语言前缀） */
	path: string;
	/** 首页/枢纽分类 */
	category: ToolCategory;
	/** 是否在首页 Featured 区展示 */
	featured?: boolean;
	/** 是否属于 YMYL（需免责与出处） */
	ymyl?: boolean;
	/** 运行时 i18n 标题 key */
	i18nKey: string;
	/** 构建侧首页标题 key */
	homeTitleKey: string;
	/** 构建侧首页描述 key */
	homeDescKey: string;
	/** FAQ / disclaimer i18n 前缀，如 tool_bmi → tool_bmi_faq_q1 */
	faqPrefix: string;
	/** 同集群相关工具 slug 列表 */
	related?: string[];
};

/** 全部已上线工具页（单一数据源）。 */
export const TOOL_PAGES: ToolPageMeta[] = catalog as ToolPageMeta[];

/**
 * 按 slug 查找工具元数据。
 * @param slug 工具 slug
 */
export const getToolBySlug = (slug: string): ToolPageMeta | undefined =>
	TOOL_PAGES.find((p) => p.slug === slug);

/**
 * 按分类筛选工具。
 * @param category 分类
 */
export const getToolsByCategory = (category: ToolCategory): ToolPageMeta[] =>
	TOOL_PAGES.filter((p) => p.category === category);

export default TOOL_PAGES;
