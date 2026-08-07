/**
 * 构建侧工具分类顺序与首页锚点（与 src/site/categories.ts 保持同步）。
 */

/** @type {Array<'image'|'developer'|'calculator'>} */
export const TOOL_CATEGORY_ORDER = ['image', 'developer', 'calculator'];

/** @type {Record<string, string>} */
export const CATEGORY_ANCHORS = {
  image: 'cat-image',
  developer: 'cat-dev',
  calculator: 'cat-calculator',
};

/**
 * @param {'image'|'developer'|'calculator'} category
 */
export const getCategoryAnchor = (category) => CATEGORY_ANCHORS[category];

/**
 * @param {'image'|'developer'|'calculator'} category
 */
export const getCategoryHomeLabelKey = (category) => {
  if (category === 'image') return 'home_cat_image';
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
