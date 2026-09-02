/**
 * 构建侧工具主题（与 src/site/topics.ts 保持同步）。
 */

/** 主题列表 hub / leaf 路径前缀（规范 URL）。 */
export const TOPICS_HUB_PATH = '/topics';

/** @type {string[]} */
export const TOOL_TOPIC_ORDER = [
  'health-body',
  'personal-money',
  'business-finance',
  'math-stats',
  'geometry-measure',
  'science-physics',
  'home-diy',
  'time-calendar',
  'pdf-docs',
  'image-media',
  'design-brand',
  'seo-growth',
  'network-ip',
  'dev-data',
  'ai-prompt-template-builder',
  'text-compare',
  'security-ids',
  'files-archives',
];

/**
 * 将 topic id 转为 i18n 键片段（连字符 → 下划线）。
 * @param {string} id
 */
export const topicKeyFragment = (id) => String(id).replace(/-/g, '_');

/** @type {Record<string, {labelKey:string,titleKey:string,descKey:string,blurbKey:string,introKey:string,chooseTitleKey:string,chooseBodyKey:string,limitsTitleKey:string,limitsBodyKey:string,faqQ1Key:string,faqA1Key:string,faqQ2Key:string,faqA2Key:string,faqQ3Key:string,faqA3Key:string,faqQ4Key:string,faqA4Key:string,guideTitleKey:string,guideBodyKey:string}>} */
export const TOPIC_I18N_KEYS = Object.fromEntries(
  TOOL_TOPIC_ORDER.map((id) => {
    const f = topicKeyFragment(id);
    return [
      id,
      {
        labelKey: `topic_${f}`,
        titleKey: `topic_${f}_title`,
        descKey: `topic_${f}_desc`,
        blurbKey: `topic_${f}_blurb`,
        introKey: `topic_${f}_intro`,
        /** 旧「如何挑选」段落；叶子页改决策表后不再渲染 */
        chooseTitleKey: `topic_${f}_choose_title`,
        chooseBodyKey: `topic_${f}_choose_body`,
        limitsTitleKey: `topic_${f}_limits_title`,
        limitsBodyKey: `topic_${f}_limits_body`,
        faqQ1Key: `topic_${f}_faq_q1`,
        faqA1Key: `topic_${f}_faq_a1`,
        faqQ2Key: `topic_${f}_faq_q2`,
        faqA2Key: `topic_${f}_faq_a2`,
        faqQ3Key: `topic_${f}_faq_q3`,
        faqA3Key: `topic_${f}_faq_a3`,
        faqQ4Key: `topic_${f}_faq_q4`,
        faqA4Key: `topic_${f}_faq_a4`,
        guideTitleKey: `topic_${f}_guide_title`,
        /** 旧指南正文；叶子页改决策表后不再渲染 */
        guideBodyKey: `topic_${f}_guide_body`,
      },
    ];
  })
);

/**
 * @param {string} value
 */
export const isToolTopic = (value) => TOOL_TOPIC_ORDER.includes(value);

/**
 * @param {string} id
 */
export const topicLeafPath = (id) => `${TOPICS_HUB_PATH}/${id}`;
