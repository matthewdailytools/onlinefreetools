/**
 * 构建侧应用场景 / 工具类型标签（与 src/site/taxonomy.ts 保持同步）。
 */

/** 应用场景列表 hub / leaf 路径前缀（规范 URL）。 */
export const SCENARIO_HUB_PATH = '/where-to-use-tools';

/** 工具类型（原操作对象）列表 hub / leaf 路径前缀（规范 URL）。 */
export const SUBJECT_HUB_PATH = '/tool-type';

/** @type {string[]} */
export const TOOL_SCENARIO_ORDER = [
  'finance',
  'health',
  'sports',
  'math',
  'construction',
  'everyday',
  'physics',
  'developer',
  'design',
  'media',
  'documents',
];

/** @type {string[]} */
export const TOOL_SUBJECT_ORDER = ['image', 'pdf', 'text', 'number', 'color', 'network', 'unit', 'data'];

/** @type {Record<string, {labelKey:string,titleKey:string,descKey:string,blurbKey:string}>} */
export const SCENARIO_I18N_KEYS = Object.fromEntries(
  TOOL_SCENARIO_ORDER.map((id) => [
    id,
    {
      labelKey: `taxonomy_scenario_${id}`,
      titleKey: `taxonomy_scenario_${id}_title`,
      descKey: `taxonomy_scenario_${id}_desc`,
      blurbKey: `taxonomy_scenario_${id}_blurb`,
    },
  ])
);

/** @type {Record<string, {labelKey:string,titleKey:string,descKey:string,blurbKey:string}>} */
export const SUBJECT_I18N_KEYS = Object.fromEntries(
  TOOL_SUBJECT_ORDER.map((id) => [
    id,
    {
      labelKey: `taxonomy_subject_${id}`,
      titleKey: `taxonomy_subject_${id}_title`,
      descKey: `taxonomy_subject_${id}_desc`,
      blurbKey: `taxonomy_subject_${id}_blurb`,
    },
  ])
);

/**
 * @param {string} value
 */
export const isToolScenario = (value) => TOOL_SCENARIO_ORDER.includes(value);

/**
 * @param {string} value
 */
export const isToolSubject = (value) => TOOL_SUBJECT_ORDER.includes(value);
