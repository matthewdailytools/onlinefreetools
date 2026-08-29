/**
 * 构建侧工具目录：与 src/site/tool-catalog.json 保持同一数据源。
 */
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const catalogPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../src/site/tool-catalog.json'
);

/**
 * 构建侧工具目录条目。
 * launchedAt 为首次上线时间（merge 时冻结）；updatedAt 为内容最近编辑时间。
 * @typedef {{slug:string,path:string,category:string,primaryTopic:string,secondaryTopics?:string[],scenario:string,subject:string,featured?:boolean,ymyl?:boolean,localProcessing?:boolean,i18nKey:string,homeTitleKey:string,homeDescKey:string,faqPrefix:string,logo:string,related?:string[],updatedAt?:string,launchedAt?:string}} ToolCatalogEntry
 */
/** @type {ToolCatalogEntry[]} */
export const TOOL_CATALOG = require(catalogPath);

/** 首页「最新上线」默认展示条数 */
export const LATEST_TOOL_COUNT = 8;

/**
 * 解析工具首次上线时间（毫秒）。缺 launchedAt 时回退 updatedAt。
 * @param {ToolCatalogEntry} tool
 * @returns {number}
 */
const launchTimeMs = (tool) => Date.parse(tool.launchedAt || tool.updatedAt || '') || 0;

/**
 * 解析工具 logo 公共路径。
 * @param {{slug:string,logo?:string}} tool
 */
export const getToolLogoUrl = (tool) =>
  tool.logo && String(tool.logo).trim() ? tool.logo : `/icons/tools/${tool.slug}.svg`;

/**
 * 按 slug 查找工具。
 * @param {string} slug
 */
export const getToolBySlug = (slug) => TOOL_CATALOG.find((p) => p.slug === slug);

/**
 * 按分类筛选工具。
 * @param {string} category
 */
export const getToolsByCategory = (category) =>
  TOOL_CATALOG.filter((p) => p.category === category);

/**
 * 按主主题筛选工具（顶栏下拉）。
 * @param {string} topic
 */
export const getToolsByPrimaryTopic = (topic) =>
  TOOL_CATALOG.filter((p) => p.primaryTopic === topic);

/**
 * 按主题成员资格筛选（primary 或 secondary；hub leaf 用）。
 * primary 在前，同组按 slug 排序。
 * @param {string} topic
 */
export const getToolsByTopicMembership = (topic) => {
  const primary = [];
  const secondary = [];
  for (const p of TOOL_CATALOG) {
    if (p.primaryTopic === topic) {
      primary.push(p);
      continue;
    }
    if (Array.isArray(p.secondaryTopics) && p.secondaryTopics.includes(topic)) {
      secondary.push(p);
    }
  }
  const bySlug = (a, b) => String(a.slug).localeCompare(String(b.slug));
  return [...primary.sort(bySlug), ...secondary.sort(bySlug)];
};

/**
 * 仅 secondary 命中该主题的工具。
 * @param {string} topic
 */
export const getToolsBySecondaryTopicOnly = (topic) =>
  TOOL_CATALOG.filter(
    (p) =>
      p.primaryTopic !== topic &&
      Array.isArray(p.secondaryTopics) &&
      p.secondaryTopics.includes(topic)
  ).sort((a, b) => String(a.slug).localeCompare(String(b.slug)));

/**
 * 按应用场景筛选工具。
 * @param {string} scenario
 */
export const getToolsByScenario = (scenario) =>
  TOOL_CATALOG.filter((p) => p.scenario === scenario);

/**
 * 按操作对象筛选工具。
 * @param {string} subject
 */
export const getToolsBySubject = (subject) =>
  TOOL_CATALOG.filter((p) => p.subject === subject);

/**
 * 首页「最新上线」列表：按 launchedAt 降序，同秒再按 slug 稳定排序。
 * @param {number} [limit] 条数，默认 LATEST_TOOL_COUNT
 * @returns {ToolCatalogEntry[]}
 */
export const getLatestTools = (limit = LATEST_TOOL_COUNT) =>
  [...TOOL_CATALOG]
    .sort((a, b) => {
      const delta = launchTimeMs(b) - launchTimeMs(a);
      if (delta !== 0) return delta;
      return String(a.slug).localeCompare(String(b.slug));
    })
    .slice(0, Math.max(0, limit));

export default TOOL_CATALOG;
