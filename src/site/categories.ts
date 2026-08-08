/**
 * 工具分类顺序与首页锚点：全站侧栏、首页分区、顶栏分类下拉共用。
 */
import type { ToolCategory } from './tools';

/** 分类在首页与导航中的展示顺序（图片 → 设计 → PDF → 开发者 → 计算器）。 */
export const TOOL_CATEGORY_ORDER: ToolCategory[] = ['image', 'design', 'pdf', 'developer', 'calculator'];

/** 各分类在首页 `#all-tools` 下的锚点 id。 */
export const CATEGORY_ANCHORS: Record<ToolCategory, string> = {
	image: 'cat-image',
	design: 'cat-design',
	pdf: 'cat-pdf',
	developer: 'cat-dev',
	calculator: 'cat-calculator',
};

/**
 * 返回分类对应的首页锚点 id。
 * @param category 工具分类
 */
export const getCategoryAnchor = (category: ToolCategory): string => CATEGORY_ANCHORS[category];

/** 运行时顶栏分类下拉使用的 i18n 键。 */
type CategoryRuntimeLabelKey =
	| 'tool_category_image'
	| 'tool_category_design'
	| 'tool_category_pdf'
	| 'tool_category_developer'
	| 'tool_category_calculator';

/** 静态首页构建使用的分类标题 i18n 键。 */
type CategoryHomeLabelKey =
	| 'home_cat_image'
	| 'home_cat_design'
	| 'home_cat_pdf'
	| 'home_cat_dev'
	| 'home_cat_calculator';

/**
 * 运行时工具页顶栏下拉使用的 i18n 键（见各语 `tool_category_*`）。
 * @param category 工具分类
 */
export const getCategoryRuntimeLabelKey = (category: ToolCategory): CategoryRuntimeLabelKey => {
	if (category === 'image') return 'tool_category_image';
	if (category === 'design') return 'tool_category_design';
	if (category === 'pdf') return 'tool_category_pdf';
	if (category === 'calculator') return 'tool_category_calculator';
	return 'tool_category_developer';
};

/**
 * 静态首页构建使用的 i18n 键（见 `scripts/site/i18n.mjs` 的 `home_cat_*`）。
 * @param category 工具分类
 */
export const getCategoryHomeLabelKey = (category: ToolCategory): CategoryHomeLabelKey => {
	if (category === 'image') return 'home_cat_image';
	if (category === 'design') return 'home_cat_design';
	if (category === 'pdf') return 'home_cat_pdf';
	if (category === 'calculator') return 'home_cat_calculator';
	return 'home_cat_dev';
};

/** 首页各分类区块的标题/描述/导语 i18n 键。 */
export const CATEGORY_HOME_SECTION_KEYS: Record<
	ToolCategory,
	{
		labelKey: CategoryHomeLabelKey;
		descKey: string;
		blurbKey: string;
	}
> = {
	image: {
		labelKey: 'home_cat_image',
		descKey: 'home_cat_image_desc',
		blurbKey: 'home_cat_image_blurb',
	},
	design: {
		labelKey: 'home_cat_design',
		descKey: 'home_cat_design_desc',
		blurbKey: 'home_cat_design_blurb',
	},
	pdf: {
		labelKey: 'home_cat_pdf',
		descKey: 'home_cat_pdf_desc',
		blurbKey: 'home_cat_pdf_blurb',
	},
	developer: {
		labelKey: 'home_cat_dev',
		descKey: 'home_cat_dev_desc',
		blurbKey: 'home_cat_dev_blurb',
	},
	calculator: {
		labelKey: 'home_cat_calculator',
		descKey: 'home_cat_calculator_desc',
		blurbKey: 'home_cat_calculator_blurb',
	},
};
