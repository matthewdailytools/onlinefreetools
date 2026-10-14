#!/usr/bin/env node
/**
 * 全量工具页 Information Gain / 模板化风险审计（只读，不改任何文案）。
 *
 * 读取：
 * - `src/site/tool-catalog.json`（合并后的 catalog；含 faqPrefix / related / ymyl 等）
 * - `src/site/i18n/tools/{slug}/{lang}.ts`（十语 i18n 分片；以 en 为母版统计正文）
 * - 可选 GSC 导出：Performance「网页.csv」（曝光/点击）与「已抓取 - 尚未编入索引」表格
 *
 * 输出（默认 `docs/seo/reviews/<today>/`）：
 * - `04-tool-ig-audit.md`：汇总、分桶、族群表、优先清单与方法说明
 * - `04-tool-ig-audit.csv`：每 slug 一行的全部指标
 *
 * 用法：
 *   node scripts/qa/audit-tool-info-gain.mjs
 *   node scripts/qa/audit-tool-info-gain.mjs --out-dir=docs/seo/reviews/2026-10-13
 *   node scripts/qa/audit-tool-info-gain.mjs --gsc-pages=<网页.csv> --gsc-cni=<表格.csv>[,<表格2.csv>]
 *
 * 判定只给「建议桶」，合并 / 301 / noindex / 改写须人工拍板（见 docs/seo/reviews/2026-10-13/02-next-strategy.md）。
 */
import fs from 'node:fs';
import path from 'node:path';
import {
  CATALOG_DIR,
  CATALOG_PATH,
  I18N_TOOLS_DIR,
  LANGS,
  ROOT,
  defaultPageMeta,
  parseLocaleDict,
} from '../tool-modules/lib.mjs';

/** 母版语言：正文字数、模板相似度均以该语为准。 */
const MASTER_LANG = 'en';

/** 词 n-gram 长度：用于模板骨架（shingle）比对；5 词足够跳过替换进来的工具名。 */
const SHINGLE_SIZE = 5;

/** 某 shingle 出现在 ≥ 该数量的「其他」工具中时，视为跨工具复用的模板骨架。 */
const BOILERPLATE_MIN_OTHER_DOCS = 3;

/** 构建两两相似度时忽略文档频率高于此值的 shingle（全站通用句），避免平方级膨胀。 */
const PAIR_INDEX_MAX_DF = 40;

/** 母版正文低于该词数视为偏薄（仅可见 IG 文案，不含按钮等 UI 标签）。 */
const THIN_WORDS_THRESHOLD = 350;

/** 族群规模达到该值即视为「同构簇」风险因子。 */
const LARGE_FAMILY_SIZE = 10;

/** 默认 GSC Performance 网页导出（断崖前最后一份全量导出）。 */
const DEFAULT_GSC_PAGES = 'docs/seo/reviews/2026-09-10/https___onlinefreetools.org_-Performance-on-Search-2026-09-10/网页.csv';

/** 默认 GSC 网页导出的截止日期：此后才上线的工具没有曝光数据，不能按「0 曝光」判定。 */
const DEFAULT_GSC_DATE = '2026-09-10';

/** 默认「已抓取 - 尚未编入索引」导出（可多份，逗号分隔）。 */
const DEFAULT_GSC_CNI = [
  'docs/seo/reviews/2026-08-12/https___onlinefreetools.org_-Coverage-Drilldown-2026-08-12已抓取未索引/表格.csv',
  'docs/seo/reviews/2026-09-07/表格.csv',
].join(',');

/**
 * IG 正文键后缀（相对 faqPrefix）：与 `src/pages/site/toolContent.ts` 的 `renderToolIgSections` / FAQ / 免责声明渲染一致。
 * 按钮、占位符等 UI 标签不计入正文。
 */
const IG_KEY_RE =
  /^(how_body|how_item_\d+|why_choose_body|why_choose_item_\d+|(?:formula|rules)_(?:body|item_\d+)|example|usecase_\d+|faq_[qa]\d+|disclaimer|references)$/;

/**
 * 「Why choose」空泛卖点识别：命中这些词、无数字且很短的条目，按工具规则视为空话（免费/免注册/本地/快）。
 */
const GENERIC_WHY_RE =
  /\b(free|no (?:sign[- ]?up|signup|registration|account|install(?:ation)?|download)|without (?:sign|install|upload|an account)|in your browser|browser[- ]based|on your device|never (?:leaves?|uploaded)|not uploaded|privacy|private|fast|instant(?:ly)?|quick(?:ly)?|easy|simple|no ads|unlimited)\b/i;

/** 空泛卖点条目的最大词数：更长的条目通常已写出具体差异。 */
const GENERIC_WHY_MAX_WORDS = 18;

/**
 * 解析 `--key=value` 形式的命令行参数。
 * @param {string[]} argv process.argv.slice(2)
 * @returns {Record<string, string>} 参数表
 */
const parseArgs = (argv) => {
  /** @type {Record<string, string>} */
  const out = {};
  for (const arg of argv) {
    const m = /^--([^=]+)=(.*)$/.exec(arg);
    if (m) out[m[1]] = m[2];
  }
  return out;
};

/**
 * 本地日期 `YYYY-MM-DD`（默认输出目录名）。
 * @returns {string} 日期串
 */
const todayLocal = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

/**
 * 把相对仓库根的路径转成绝对路径。
 * @param {string} p 相对或绝对路径
 * @returns {string} 绝对路径
 */
const abs = (p) => (path.isAbsolute(p) ? p : path.join(ROOT, p));

/**
 * 统计词数（按空白切分；CJK 等非空格语言不在本审计母版范围内）。
 * @param {string} text 文本
 * @returns {number} 词数
 */
const countWords = (text) => (String(text || '').trim() ? String(text).trim().split(/\s+/).length : 0);

/**
 * 归一化母版文本：小写、数字统一为 #、去标点，便于跨工具找模板骨架。
 * @param {string} text 原文
 * @returns {string[]} 词序列
 */
const normalizeTokens = (text) =>
  String(text || '')
    .toLowerCase()
    .replace(/\d+(?:[.,]\d+)*/g, '#')
    .replace(/[^a-z#\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

/**
 * 生成词 n-gram shingle 集合。
 * @param {string[]} tokens 词序列
 * @param {number} size n
 * @returns {Set<string>} shingle 集
 */
const shingles = (tokens, size) => {
  /** @type {Set<string>} */
  const set = new Set();
  for (let i = 0; i + size <= tokens.length; i += 1) set.add(tokens.slice(i, i + size).join(' '));
  return set;
};

/**
 * 极简 CSV 行解析（支持双引号包裹与转义 ""）。
 * @param {string} line 单行
 * @returns {string[]} 字段
 */
const parseCsvLine = (line) => {
  /** @type {string[]} */
  const cells = [];
  let cur = '';
  let inQuote = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (inQuote) {
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"';
        i += 1;
      } else if (ch === '"') inQuote = false;
      else cur += ch;
    } else if (ch === '"') inQuote = true;
    else if (ch === ',') {
      cells.push(cur);
      cur = '';
    } else cur += ch;
  }
  cells.push(cur);
  return cells;
};

/**
 * 读取 CSV（去 BOM；跳过表头）。文件不存在时返回空数组。
 * @param {string} file 路径
 * @returns {string[][]} 数据行
 */
const readCsvRows = (file) => {
  if (!file || !fs.existsSync(abs(file))) return [];
  const text = fs.readFileSync(abs(file), 'utf8').replace(/^\uFEFF/, '');
  return text
    .split(/\r?\n/)
    .slice(1)
    .filter((l) => l.trim())
    .map(parseCsvLine);
};

/**
 * 从站内 URL 抽出工具 slug（任意语言前缀）。
 * @param {string} url 完整 URL
 * @returns {string} slug；非工具页返回空串
 */
const slugFromUrl = (url) => {
  const m = /\/tools\/([a-z0-9][a-z0-9-]*)\/?(?:[?#].*)?$/i.exec(String(url || ''));
  return m ? m[1] : '';
};

/**
 * 工具所属「同构族群」：对齐 02-next-strategy 的 P0/P1/P2 簇，其余按 catalog category。
 * @param {{ slug: string, category?: string }} tool catalog 条目
 * @returns {string} 族群名
 */
const familyOf = (tool) => {
  const s = tool.slug;
  if (s.startsWith('how-to-calculate-')) return 'how-to-calculate';
  if (s.includes('prompt')) return 'prompt';
  if (s.startsWith('batch-')) return 'batch';
  if (s.includes('pdf')) return 'pdf';
  if (s.endsWith('-calculator')) return 'calculator';
  if (/(image|jpg|jpeg|png|webp|gif|svg|heic|photo)/.test(s)) return 'image';
  if (/(video|audio|mp4|mp3|wav|subtitle|gif)/.test(s)) return 'audio-video';
  return `category:${tool.category || 'other'}`;
};

/**
 * 读取工具某语言 i18n 分片；缺失返回空对象。
 * @param {string} slug 工具 slug
 * @param {string} lang 语言
 * @returns {Record<string, string>} 键值
 */
const loadShard = (slug, lang) => {
  const file = path.join(I18N_TOOLS_DIR, slug, `${lang}.ts`);
  if (!fs.existsSync(file)) return {};
  try {
    return parseLocaleDict(fs.readFileSync(file, 'utf8'));
  } catch {
    return {};
  }
};

/**
 * 推断 IG 键前缀：优先 catalog faqPrefix；若该前缀下没有 how_title，则在分片里找任意 `*_how_title`。
 * @param {Record<string, string>} dict 母版分片
 * @param {string} faqPrefix catalog faqPrefix
 * @returns {string} 前缀
 */
const resolvePrefix = (dict, faqPrefix) => {
  if (faqPrefix && dict[`${faqPrefix}_how_title`] !== undefined) return faqPrefix;
  const hit = Object.keys(dict).find((k) => k.endsWith('_how_title'));
  return hit ? hit.slice(0, -'_how_title'.length) : faqPrefix || '';
};

/**
 * 抽取 IG 正文键（相对前缀的后缀 → 文本）。
 * @param {Record<string, string>} dict 分片
 * @param {string} prefix 前缀
 * @returns {Record<string, string>} 后缀 → 文本
 */
const igEntries = (dict, prefix) => {
  /** @type {Record<string, string>} */
  const out = {};
  const head = `${prefix}_`;
  for (const [k, v] of Object.entries(dict)) {
    if (!k.startsWith(head)) continue;
    const suffix = k.slice(head.length);
    if (IG_KEY_RE.test(suffix) && String(v).trim()) out[suffix] = String(v);
  }
  return out;
};

/**
 * 统计后缀匹配某模式的条目数。
 * @param {Record<string, string>} ig IG 条目
 * @param {RegExp} re 后缀正则
 * @returns {number} 条目数
 */
const countSuffix = (ig, re) => Object.keys(ig).filter((k) => re.test(k)).length;

/**
 * 读取工具 Page 源码（按 catalog 分片 `page.module`，缺省按 slug 约定）；读不到返回空串。
 * @param {string} slug 工具 slug
 * @returns {string} 源码
 */
const loadPageSource = (slug) => {
  const shardFile = path.join(CATALOG_DIR, `${slug}.json`);
  let mod = defaultPageMeta(slug).module;
  if (fs.existsSync(shardFile)) {
    try {
      mod = JSON.parse(fs.readFileSync(shardFile, 'utf8'))?.page?.module || mod;
    } catch {
      /* 分片损坏时沿用约定路径 */
    }
  }
  const file = path.join(ROOT, 'src/site', `${mod}.ts`);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
};

/**
 * 统计 Page 源码里 `renderToolReferencesSection({ links: [...] })` 的链接数。
 * @param {string} source Page 源码
 * @returns {number} 链接数
 */
const countPageReferenceLinks = (source) => {
  const start = source.indexOf('renderToolReferencesSection(');
  if (start < 0) return 0;
  const end = source.indexOf('});', start);
  const call = source.slice(start, end < 0 ? undefined : end);
  return (call.match(/\bhref\s*:/g) || []).length;
};

/**
 * 统计参考资料条数：取 Page 硬编码链接、`_ref_*_label` 键、`references` 文本分号切分三者最大值。
 * @param {Record<string, string>} dict 母版分片
 * @param {string} prefix 前缀
 * @param {Record<string, string>} ig IG 条目
 * @param {string} pageSource Page 源码
 * @returns {number} 条数
 */
const countReferences = (dict, prefix, ig, pageSource) => {
  const labels = Object.keys(dict).filter((k) => k.startsWith(`${prefix}_ref_`) && k.endsWith('_label')).length;
  const refs = ig.references || '';
  const textual = refs ? refs.split(/[;；]/).filter((s) => s.trim()).length : 0;
  return Math.max(labels, textual, countPageReferenceLinks(pageSource));
};

/**
 * 判断 Why choose 条目是否空泛（命中空话词、无数字、且很短）。
 * @param {string} text 条目
 * @returns {boolean} 是否空泛
 */
const isGenericWhy = (text) =>
  GENERIC_WHY_RE.test(text) && !/\d/.test(text) && countWords(text) <= GENERIC_WHY_MAX_WORDS;

/**
 * 加载 GSC 曝光 / 点击（按 slug 汇总全部语言）。
 * @param {string} file 网页.csv
 * @returns {Map<string, { clicks: number, impressions: number }>} slug → 指标
 */
const loadGscPages = (file) => {
  /** @type {Map<string, { clicks: number, impressions: number }>} */
  const map = new Map();
  for (const row of readCsvRows(file)) {
    const slug = slugFromUrl(row[0]);
    if (!slug) continue;
    const cur = map.get(slug) || { clicks: 0, impressions: 0 };
    cur.clicks += Number(row[1]) || 0;
    cur.impressions += Number(row[2]) || 0;
    map.set(slug, cur);
  }
  return map;
};

/**
 * 加载「已抓取未索引」URL 数（按 slug 汇总，多份导出去重 URL）。
 * @param {string} files 逗号分隔的表格.csv
 * @returns {Map<string, number>} slug → URL 数
 */
const loadCrawledNotIndexed = (files) => {
  /** @type {Map<string, Set<string>>} */
  const urls = new Map();
  for (const file of String(files || '').split(',').filter(Boolean)) {
    for (const row of readCsvRows(file)) {
      const slug = slugFromUrl(row[0]);
      if (!slug) continue;
      if (!urls.has(slug)) urls.set(slug, new Set());
      urls.get(slug).add(row[0]);
    }
  }
  return new Map([...urls].map(([slug, set]) => [slug, set.size]));
};

/**
 * 计算 IG 缺口分（越高越缺）；每项对应 tool-creation.mdc 页面结构的一节。
 * @param {object} r 单工具指标
 * @returns {{ score: number, gaps: string[] }} 分数与缺口标签
 */
const scoreIgGaps = (r) => {
  /** @type {string[]} */
  const gaps = [];
  let score = 0;
  /**
   * 记一项缺口。
   * @param {boolean} cond 是否缺
   * @param {number} pts 分值
   * @param {string} label 标签
   */
  const add = (cond, pts, label) => {
    if (!cond) return;
    score += pts;
    gaps.push(label);
  };
  add(r.howItems < 3, 15, 'how-steps<3');
  add(r.whyItems < 3, 15, 'why-choose<3');
  add(r.whyItems >= 3 && r.whyGeneric / r.whyItems >= 0.5, 10, 'why-choose-generic');
  add(!r.hasMid, 5, 'no-formula/rules');
  add(!r.hasExample, 15, 'no-example');
  add(r.usecases < 2, 10, 'usecases<2');
  add(r.faq < 3, 15, 'faq<3');
  add(r.refs < 1, 10, 'no-references');
  add(r.ymyl && !r.hasDisclaimer, 20, 'ymyl-no-disclaimer');
  add(r.words < THIN_WORDS_THRESHOLD, 10, `thin<${THIN_WORDS_THRESHOLD}w`);
  add(r.localeMissing > 0, 10, 'locale-missing-keys');
  add(r.localeSameAsEn > 0, 5, 'locale-untranslated');
  add(r.related < 2, 5, 'related<2');
  return { score, gaps };
};

/**
 * 计算模板化风险分（0–100；越高越像同构铺量）。
 * @param {object} r 单工具指标
 * @returns {number} 分数
 */
const scoreTemplateRisk = (r) => {
  let s = r.boilerplateShare * 50 + r.maxSim * 30;
  if (r.familySize >= LARGE_FAMILY_SIZE) s += 10;
  if (r.whyItems >= 3 && r.whyGeneric / r.whyItems >= 0.5) s += 10;
  return Math.min(100, Math.round(s));
};

/**
 * 建议桶：先处理同构簇的去留（02-next-strategy P0/P1），再给仍有曝光的工具补 IG；其余后排。
 * A 桶整族收录（含有曝光者），曝光仅用于挑选 hub / 幸存页，不作为豁免。
 * @param {object} r 单工具指标（含 templateRisk / igGap / impressions / gscNoData）
 * @returns {'A-consolidate-review'|'B-enrich-first'|'C-enrich-later'|'D-low-priority'} 桶
 */
const bucketOf = (r) => {
  const p0p1 = r.family === 'how-to-calculate' || r.family === 'prompt';
  if (p0p1 || (r.templateRisk >= 60 && r.impressions === 0 && !r.gscNoData)) return 'A-consolidate-review';
  if (r.impressions > 0 && (r.igGap >= 20 || r.templateRisk >= 40)) return 'B-enrich-first';
  if (r.igGap >= 20 || r.templateRisk >= 40) return 'C-enrich-later';
  return 'D-low-priority';
};

/**
 * CSV 字段转义。
 * @param {unknown} v 值
 * @returns {string} 转义后字段
 */
const csvCell = (v) => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

/**
 * Markdown 表格单元转义（竖线、换行）。
 * @param {unknown} v 值
 * @returns {string} 转义后文本
 */
const mdCell = (v) => String(v ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

/**
 * 主流程：采集指标 → 相似度 → 打分分桶 → 写 MD/CSV。
 */
const main = () => {
  /** 命令行参数。 */
  const args = parseArgs(process.argv.slice(2));
  /** 输出目录。 */
  const outDir = abs(args['out-dir'] || `docs/seo/reviews/${todayLocal()}`);
  /** GSC 网页导出路径。 */
  const gscPagesFile = args['gsc-pages'] || DEFAULT_GSC_PAGES;
  /** GSC 已抓取未索引导出路径（逗号分隔）。 */
  const gscCniFiles = args['gsc-cni'] || DEFAULT_GSC_CNI;
  /** GSC 网页导出截止日（YYYY-MM-DD）；launchedAt 晚于此日的工具标记为无数据。 */
  const gscDate = args['gsc-date'] || DEFAULT_GSC_DATE;

  /** 合并后的 catalog 工具列表。 */
  const catalogRaw = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
  /** @type {any[]} */
  const tools = Array.isArray(catalogRaw) ? catalogRaw : catalogRaw.tools || Object.values(catalogRaw);
  /** 工具总数（用于报告）。 */
  const total = tools.length;

  /** slug → GSC 曝光点击。 */
  const gsc = loadGscPages(gscPagesFile);
  /** slug → 已抓取未索引 URL 数。 */
  const cni = loadCrawledNotIndexed(gscCniFiles);

  /** 族群 → 成员数。 */
  const familySizes = new Map();
  for (const t of tools) {
    const f = familyOf(t);
    familySizes.set(f, (familySizes.get(f) || 0) + 1);
  }

  /** @type {any[]} 每工具指标行 */
  const rows = [];
  /** @type {Map<string, Set<string>>} slug → 母版 shingle 集 */
  const shingleSets = new Map();

  for (const tool of tools) {
    const master = loadShard(tool.slug, MASTER_LANG);
    const prefix = resolvePrefix(master, tool.faqPrefix);
    const ig = igEntries(master, prefix);
    const descKey = String(tool.i18nKey || '').replace(/_title$/, '_description');
    const description = master[descKey] || '';

    const whyTexts = Object.entries(ig)
      .filter(([k]) => /^why_choose_item_\d+$/.test(k))
      .map(([, v]) => v);
    const igText = [description, ...Object.values(ig)].join('\n');

    let localeMissing = 0;
    let localeSameAsEn = 0;
    for (const lang of LANGS) {
      if (lang === MASTER_LANG) continue;
      const loc = igEntries(loadShard(tool.slug, lang), prefix);
      for (const [suffix, enText] of Object.entries(ig)) {
        if (!loc[suffix]) localeMissing += 1;
        else if (enText.length > 20 && loc[suffix] === enText) localeSameAsEn += 1;
      }
    }

    shingleSets.set(tool.slug, shingles(normalizeTokens(igText), SHINGLE_SIZE));

    const g = gsc.get(tool.slug) || { clicks: 0, impressions: 0 };
    const family = familyOf(tool);
    const launchedAt = String(tool.launchedAt || '').slice(0, 10);
    rows.push({
      slug: tool.slug,
      launchedAt,
      gscNoData: Boolean(launchedAt) && launchedAt > gscDate,
      family,
      familySize: familySizes.get(family) || 1,
      category: tool.category || '',
      ymyl: Boolean(tool.ymyl),
      related: Array.isArray(tool.related) ? tool.related.length : 0,
      words: countWords(igText),
      howItems: countSuffix(ig, /^how_item_\d+$/),
      whyItems: whyTexts.length,
      whyGeneric: whyTexts.filter(isGenericWhy).length,
      hasMid: countSuffix(ig, /^(formula|rules)_(body|item_\d+)$/) > 0,
      hasExample: Boolean(ig.example),
      usecases: countSuffix(ig, /^usecase_\d+$/),
      faq: countSuffix(ig, /^faq_q\d+$/),
      refs: countReferences(master, prefix, ig, loadPageSource(tool.slug)),
      hasDisclaimer: Boolean(ig.disclaimer),
      localeMissing,
      localeSameAsEn,
      impressions: g.impressions,
      clicks: g.clicks,
      crawledNotIndexed: cni.get(tool.slug) || 0,
      boilerplateShare: 0,
      maxSim: 0,
      nearest: '',
    });
  }

  /** shingle → 出现该 shingle 的 slug 列表（倒排索引）。 */
  const postings = new Map();
  for (const [slug, set] of shingleSets) {
    for (const sh of set) {
      if (!postings.has(sh)) postings.set(sh, []);
      postings.get(sh).push(slug);
    }
  }

  /** "a\u0000b" → 共享 shingle 数（仅统计文档频率不过高的 shingle）。 */
  const pairShared = new Map();
  for (const list of postings.values()) {
    if (list.length < 2 || list.length > PAIR_INDEX_MAX_DF) continue;
    for (let i = 0; i < list.length; i += 1) {
      for (let j = i + 1; j < list.length; j += 1) {
        const key = list[i] < list[j] ? `${list[i]}\u0000${list[j]}` : `${list[j]}\u0000${list[i]}`;
        pairShared.set(key, (pairShared.get(key) || 0) + 1);
      }
    }
  }

  /** slug → 指标行（便于回填相似度）。 */
  const bySlug = new Map(rows.map((r) => [r.slug, r]));
  for (const [key, shared] of pairShared) {
    const [a, b] = key.split('\u0000');
    const sa = shingleSets.get(a).size;
    const sb = shingleSets.get(b).size;
    const jaccard = shared / Math.max(1, sa + sb - shared);
    for (const [self, other] of [
      [a, b],
      [b, a],
    ]) {
      const r = bySlug.get(self);
      if (jaccard > r.maxSim) {
        r.maxSim = jaccard;
        r.nearest = other;
      }
    }
  }

  for (const r of rows) {
    const set = shingleSets.get(r.slug);
    let reused = 0;
    for (const sh of set) if (postings.get(sh).length - 1 >= BOILERPLATE_MIN_OTHER_DOCS) reused += 1;
    r.boilerplateShare = set.size ? reused / set.size : 0;
    r.templateRisk = scoreTemplateRisk(r);
    const { score, gaps } = scoreIgGaps(r);
    r.igGap = score;
    r.gaps = gaps.join(' ');
    r.bucket = bucketOf(r);
  }

  rows.sort((x, y) => x.bucket.localeCompare(y.bucket) || y.impressions - x.impressions || y.templateRisk - x.templateRisk || y.igGap - x.igGap);

  fs.mkdirSync(outDir, { recursive: true });

  /** CSV 列顺序。 */
  const cols = [
    'bucket', 'slug', 'launchedAt', 'gscNoData', 'family', 'familySize', 'category', 'impressions', 'clicks', 'crawledNotIndexed',
    'templateRisk', 'boilerplateShare', 'maxSim', 'nearest', 'igGap', 'gaps', 'words', 'howItems', 'whyItems',
    'whyGeneric', 'hasMid', 'hasExample', 'usecases', 'faq', 'refs', 'ymyl', 'hasDisclaimer', 'related',
    'localeMissing', 'localeSameAsEn',
  ];
  const csv = [cols.join(',')]
    .concat(
      rows.map((r) =>
        cols
          .map((c) => (typeof r[c] === 'number' && !Number.isInteger(r[c]) ? r[c].toFixed(2) : r[c]))
          .map(csvCell)
          .join(',')
      )
    )
    .join('\n');
  fs.writeFileSync(path.join(outDir, '04-tool-ig-audit.csv'), `${csv}\n`, 'utf8');

  /** 桶 → 行。 */
  const buckets = new Map();
  for (const r of rows) {
    if (!buckets.has(r.bucket)) buckets.set(r.bucket, []);
    buckets.get(r.bucket).push(r);
  }

  /**
   * 渲染某桶的前 N 行表格。
   * @param {any[]} list 行
   * @param {number} limit 最多行数
   * @returns {string} Markdown 表格
   */
  const renderTable = (list, limit) => {
    const head =
      '| slug | family | impr | CNI | template | nearest (sim) | IG gap | gaps | words |\n|---|---|---:|---:|---:|---|---:|---|---:|';
    const body = list
      .slice(0, limit)
      .map(
        (r) =>
          `| ${mdCell(r.slug)} | ${mdCell(r.family)} | ${r.gscNoData ? 'new' : r.impressions} | ${r.crawledNotIndexed} | ${r.templateRisk} | ${mdCell(r.nearest)} (${r.maxSim.toFixed(2)}) | ${r.igGap} | ${mdCell(r.gaps)} | ${r.words} |`
      )
      .join('\n');
    return `${head}\n${body}`;
  };

  /** 族群汇总行。 */
  const familyRows = [...familySizes.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([f, n]) => {
      const members = rows.filter((r) => r.family === f);
      const avg = (fn) => (members.reduce((s, r) => s + fn(r), 0) / Math.max(1, members.length)).toFixed(2);
      const withImpr = members.filter((r) => r.impressions > 0).length;
      return `| ${mdCell(f)} | ${n} | ${withImpr} | ${avg((r) => r.boilerplateShare)} | ${avg((r) => r.maxSim)} | ${avg((r) => r.words)} |`;
    })
    .join('\n');

  /** 缺口标签 → 出现次数。 */
  const gapCounts = new Map();
  for (const r of rows) for (const g of r.gaps.split(' ').filter(Boolean)) gapCounts.set(g, (gapCounts.get(g) || 0) + 1);
  const gapRows = [...gapCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([g, n]) => `| ${g} | ${n} |`)
    .join('\n');

  /** 桶说明。 */
  const bucketNotes = {
    'A-consolidate-review': '02 策略 P0/P1 同构簇（how-to-calculate / prompt）整族，外加模板分≥60 且有 GSC 数据却零曝光的页。**先定去留（合并进 hub / 301 / noindex）再谈补文案**；不要给这些页批量加字。表中曝光用于挑 hub 与幸存页。',
    'B-enrich-first': '断崖前仍有曝光，且 IG 缺口≥20 或模板分≥40。**下一轮逐 slug 做 SERP 对比 + 补可验证增量**（每批≤10，十语逐语重写）。',
    'C-enrich-later': '无曝光但有 IG 缺口或模板味；排在 B 之后，或随族群收敛一并处理。',
    'D-low-priority': 'IG 缺口<20 且模板分<40。多数只缺 Why choose；随正常改版顺带补，**不要**为补键单独批量改这些页。',
  };

  const md = `# 工具页 Information Gain 审计（${path.basename(outDir)}）

只读审计，**未改任何工具文案**。脚本：\`node scripts/qa/audit-tool-info-gain.mjs\`；全量明细见同目录 \`04-tool-ig-audit.csv\`。

## 结论速览

- 工具数：**${total}**（catalog）；母版语言 ${MASTER_LANG}，另核对 ${LANGS.length - 1} 语键齐全度。
- 分桶：${[...buckets.entries()].map(([b, l]) => `**${b}** ${l.length}`).join(' · ')}
- GSC 数据：曝光取 \`${gscPagesFile}\`（断崖前）；已抓取未索引（CNI）取 ${gscCniFiles.split(',').map((f) => `\`${f}\``).join('、')}。
- 晚于 ${gscDate} 上线、无 GSC 数据的工具：**${rows.filter((r) => r.gscNoData).length}** 个（表中曝光列记为 \`new\`，不按零曝光处理）。
- 与 \`02-next-strategy.md\` 一致：**先降同构表面积（A 桶），再加固幸存者（B 桶）**。批量给全部页面"加字"本身就是 scaled content 风险，审计不建议这样做。

## 下一轮第一批建议（B 桶按断崖前曝光取前 10）

逐 slug：查当前 SERP 前 5 → 写出本页能补的**可验证增量**（边界、失败态、真实样例、与兄弟工具"何时不该用"）→ 母版改写 → 十语逐语重写 ≥3 轮 → \`npm run verify:tool -- --slug=<slug>\`。缺 Why choose 的顺带补，但须是本页可验证差异，不能三条通用空话。

${renderTable((buckets.get('B-enrich-first') || []).slice().sort((x, y) => y.impressions - x.impressions), 10)}

## 分桶

${[...buckets.entries()]
  .map(([b, list]) => {
    const limit = b === 'D-low-priority' ? 15 : 40;
    const more = list.length > limit ? `\n\n…其余 ${list.length - limit} 条见 CSV。` : '';
    return `### ${b}（${list.length}）\n\n${bucketNotes[b]}\n\n${renderTable(list, limit)}${more}`;
  })
  .join('\n\n')}

## 族群（同构簇）

| family | 工具数 | 有曝光 | 平均模板骨架占比 | 平均最近邻相似度 | 平均正文词数 |
|---|---:|---:|---:|---:|---:|
${familyRows}

## IG 缺口分布

| 缺口 | 工具数 |
|---|---:|
${gapRows}

## 指标与方法

- **正文**：只统计可见 IG 文案（description、How 总答与步骤、Why choose、Formula/Rules、Example、Use cases、FAQ、Disclaimer、References），不含按钮/占位符。键前缀取 catalog \`faqPrefix\`，与 \`renderToolIgSections\` 一致。
- **模板骨架占比（boilerplateShare）**：母版正文按 ${SHINGLE_SIZE} 词 shingle 切分（小写、数字归一为 #），某 shingle 同时出现在 ≥${BOILERPLATE_MIN_OTHER_DOCS} 个其他工具中即算"复用骨架"；占比越高越像"换名不换壳"。
- **最近邻相似度（maxSim / nearest）**：与全站其他工具的 shingle Jaccard 最大值（忽略出现在 >${PAIR_INDEX_MAX_DF} 个工具里的通用句）。
- **模板分（templateRisk, 0–100）**：骨架占比×50 + 最近邻×30 + 族群≥${LARGE_FAMILY_SIZE} 加 10 + Why choose 过半空泛加 10。
- **IG 缺口分（igGap）**：How 步骤<3、Why choose<3 或过半空泛、无 Formula/Rules、无 Example、Use cases<2、FAQ<3、无 References、YMYL 无免责声明、正文<${THIN_WORDS_THRESHOLD} 词、他语缺键或与英文相同、related<2，按项加分（见 CSV \`gaps\` 列）。
- **Why choose 空泛**：命中"免费/免注册/本地/浏览器/快/简单"等词、无数字且≤${GENERIC_WHY_MAX_WORDS} 词。

## 边界

- 这是**结构与模板化**的机器审计，不等于逐页 SERP 对比；B 桶落地时仍须按 \`tool-i18n-seo.mdc\` / \`tool-i18n-localization.mdc\` 逐 slug 检索、补可验证增量、十语独立重写 ≥3 轮。
- 自定义在 \`*Page.ts\` 里硬编码的说明区不在统计内，个别工具的正文可能被低估。
- 曝光数据截至 2026-09-10，断崖（2026-10-06）后的曝光不可用于排序。
- 去留（A 桶）属产品决策：脚本只给建议，不会改 catalog / robots / 路由。
`;
  fs.writeFileSync(path.join(outDir, '04-tool-ig-audit.md'), md, 'utf8');

  console.log(
    `audit-tool-info-gain: ${total} tools → ${path.relative(ROOT, outDir)}/04-tool-ig-audit.{md,csv}; ` +
      [...buckets.entries()].map(([b, l]) => `${b}=${l.length}`).join(' ')
  );
};

main();
