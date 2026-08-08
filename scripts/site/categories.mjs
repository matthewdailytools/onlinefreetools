/**
 * 构建侧工具分类顺序与首页锚点（与 src/site/categories.ts 保持同步）。
 */

/** @type {Array<'image'|'design'|'pdf'|'developer'|'calculator'>} */
export const TOOL_CATEGORY_ORDER = ['image', 'design', 'pdf', 'developer', 'calculator'];

/** @type {Record<string, string>} */
export const CATEGORY_ANCHORS = {
  image: 'cat-image',
  design: 'cat-design',
  pdf: 'cat-pdf',
  developer: 'cat-dev',
  calculator: 'cat-calculator',
};

/**
 * @param {'image'|'design'|'pdf'|'developer'|'calculator'} category
 */
export const getCategoryAnchor = (category) => CATEGORY_ANCHORS[category];

/**
 * @param {'image'|'design'|'pdf'|'developer'|'calculator'} category
 */
export const getCategoryHomeLabelKey = (category) => {
  if (category === 'image') return 'home_cat_image';
  if (category === 'design') return 'home_cat_design';
  if (category === 'pdf') return 'home_cat_pdf';
  if (category === 'calculator') return 'home_cat_calculator';
  return 'home_cat_dev';
};

/** @type {Record<string, {labelKey:string,descKey:string,blurbKey:string}>} */
export const CATEGORY_HOME_SECTION_KEYS = {
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
