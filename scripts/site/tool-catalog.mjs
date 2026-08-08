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

/** @type {Array<{slug:string,path:string,category:string,featured?:boolean,ymyl?:boolean,localProcessing?:boolean,i18nKey:string,homeTitleKey:string,homeDescKey:string,faqPrefix:string,logo:string,related?:string[]}>} */
export const TOOL_CATALOG = require(catalogPath);

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
 * @param {'calculator'|'developer'|'image'} category
 */
export const getToolsByCategory = (category) =>
  TOOL_CATALOG.filter((p) => p.category === category);

export default TOOL_CATALOG;
