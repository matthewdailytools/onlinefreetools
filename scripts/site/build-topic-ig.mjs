/**
 * 将 topic IG 文案扁平化为 i18n-topic-ig.mjs，并校验 catalog 主/次 slug 无遗漏。
 * 运行：node scripts/site/build-topic-ig.mjs
 */
import { writeFileSync } from 'node:fs';
import { TOOL_TOPIC_ORDER, topicKeyFragment } from './topics.mjs';
import { getToolsByPrimaryTopic, getToolsBySecondaryTopicOnly } from './tool-catalog.mjs';
import { TOPIC_IG, topicIgSlugKey } from './topic-ig.mjs';
import { chrome as chromeEn, topics as topicsEn } from './topic-ig-copy-en.mjs';
import { chrome as chromeZh, topics as topicsZh } from './topic-ig-copy-zh.mjs';

/** @type {Record<string, {chrome: Record<string,string>, topics: typeof topicsEn}>} */
const PACKS = {
  en: { chrome: chromeEn, topics: topicsEn },
  zh: { chrome: chromeZh, topics: topicsZh },
};

try {
  const rest = await import('./topic-ig-copy-rest.mjs');
  Object.assign(PACKS, rest.PACKS);
} catch {
  /* rest locales optional until authored */
}

/**
 * 扁平化一语：chrome + 每主题 title/desc/表/工作流/例/边界/次要/FAQ/引用。
 * @param {string} lang
 * @param {{chrome:Record<string,string>, topics: Record<string, any>}} pack
 */
const flatten = (lang, pack) => {
  /** @type {Record<string, string>} */
  const out = { ...pack.chrome };
  for (const id of TOOL_TOPIC_ORDER) {
    const f = topicKeyFragment(id);
    const topic = pack.topics[id];
    if (!topic) throw new Error(`[${lang}] missing topic copy: ${id}`);
    out[`topic_${f}_title`] = topic.title;
    out[`topic_${f}_desc`] = topic.desc;
    if (topic.intro) out[`topic_${f}_intro`] = topic.intro;
    out[`topic_${f}_table_title`] = topic.tableTitle;
    for (const [gid, label] of Object.entries(topic.groups || {})) {
      out[`topic_${f}_grp_${gid}`] = label;
    }
    for (const [slug, row] of Object.entries(topic.rows || {})) {
      const sk = topicIgSlugKey(slug);
      out[`topic_${f}_row_${sk}_job`] = row.job;
      out[`topic_${f}_row_${sk}_need`] = row.need;
      out[`topic_${f}_row_${sk}_skip`] = row.skip;
      out[`topic_${f}_card_${sk}`] = row.card || row.need;
    }
    (topic.flow || []).forEach((step, i) => {
      out[`topic_${f}_flow_${i + 1}`] = step;
    });
    out[`topic_${f}_example_title`] = topic.exampleTitle;
    out[`topic_${f}_example_body`] = topic.exampleBody;
    out[`topic_${f}_boundary`] = topic.boundary;
    for (const [slug, why] of Object.entries(topic.secondary || {})) {
      out[`topic_${f}_sec_${topicIgSlugKey(slug)}`] = why;
    }
    (topic.faq || []).forEach((item, i) => {
      out[`topic_${f}_faq_q${i + 1}`] = item.q;
      out[`topic_${f}_faq_a${i + 1}`] = item.a;
    });
    for (const [citeId, label] of Object.entries(topic.cites || {})) {
      out[`topic_${f}_cite_${citeId}`] = label;
    }
  }
  return out;
};

/**
 * 校验结构与文案覆盖：主工具进表、次要有理由、工作流 slug 存在。
 * @param {string} lang
 * @param {Record<string, any>} topics
 */
const validate = (lang, topics) => {
  const errors = [];
  for (const id of TOOL_TOPIC_ORDER) {
    const ig = TOPIC_IG[id];
    const copy = topics[id];
    const grouped = new Set((ig.groups || []).flatMap((g) => g.slugs));
    for (const tool of getToolsByPrimaryTopic(id)) {
      if (!grouped.has(tool.slug)) errors.push(`${lang} ${id}: primary ${tool.slug} not in TOPIC_IG groups`);
      if (!copy.rows?.[tool.slug]) errors.push(`${lang} ${id}: missing row ${tool.slug}`);
    }
    if (grouped.size !== Object.keys(copy.rows || {}).length) {
      for (const slug of grouped) {
        if (!copy.rows?.[slug]) errors.push(`${lang} ${id}: group slug ${slug} missing row copy`);
      }
    }
    for (const tool of getToolsBySecondaryTopicOnly(id)) {
      if (!copy.secondary?.[tool.slug]) {
        errors.push(`${lang} ${id}: missing secondary why ${tool.slug}`);
      }
    }
    (ig.workflow || []).forEach((slug) => {
      if (!grouped.has(slug) && !getToolsByPrimaryTopic(id).some((t) => t.slug === slug)) {
        errors.push(`${lang} ${id}: workflow slug ${slug} not a primary in this topic`);
      }
    });
    if ((copy.flow || []).length !== (ig.workflow || []).length) {
      errors.push(
        `${lang} ${id}: flow steps ${copy.flow?.length || 0} != workflow ${ig.workflow.length}`
      );
    }
    if ((copy.faq || []).length !== 4) errors.push(`${lang} ${id}: FAQ must be 4 items`);
    if (lang === 'en') {
      const n = String(copy.desc || '').length;
      if (n < 120 || n > 160) errors.push(`${lang} ${id}: desc length ${n} (want 120–160)`);
    }
  }
  return errors;
};

const allErrors = [];
/** @type {Record<string, Record<string, string>>} */
const topicIgTranslations = {};
for (const [lang, pack] of Object.entries(PACKS)) {
  allErrors.push(...validate(lang, pack.topics));
  topicIgTranslations[lang] = flatten(lang, pack);
}

if (allErrors.length) {
  console.error(allErrors.join('\n'));
  process.exit(1);
}

const header = `/**
 * Topic leaf Information Gain 文案（决策表 / 工作流 / 簇级例 / 次要理由 / FAQ 覆盖）。
 * 由 scripts/site/build-topic-ig.mjs 生成；勿手改。
 */

/** @type {Record<string, Record<string, string>>} */
export const topicIgTranslations = ${JSON.stringify(topicIgTranslations, null, 2)};
`;

writeFileSync(new URL('./i18n-topic-ig.mjs', import.meta.url), header, 'utf8');
console.log(
  `Wrote scripts/site/i18n-topic-ig.mjs (${Object.keys(PACKS).join(', ')})`
);
