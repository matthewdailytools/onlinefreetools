/**
 * 工具主题（job / domain）枚举与查询：驱动 /topics 枢纽、顶栏「工具」巨型菜单、侧栏手风琴、工具页 primary 面包屑。
 * 与构建侧 scripts/site/topics.mjs 保持同步。
 */
import type { ToolPageMeta } from './tools';
import { TOOL_PAGES } from './tools';

/** 主题列表 hub / leaf 路径前缀（规范 URL）。 */
export const TOPICS_HUB_PATH = '/topics';

/**
 * 主题 id：按用户任务 / 领域意图划分（见 docs/seo/2026-08-28-tool-topic-reassignment.md）。
 */
export type ToolTopic =
	| 'health-body'
	| 'personal-money'
	| 'business-finance'
	| 'math-stats'
	| 'geometry-measure'
	| 'science-physics'
	| 'home-diy'
	| 'time-calendar'
	| 'pdf-docs'
	| 'image-media'
	| 'design-brand'
	| 'seo-growth'
	| 'network-ip'
	| 'dev-data'
	| 'ai-prompt-template-builder'
	| 'text-compare'
	| 'security-ids'
	| 'files-archives';

/** 主题展示顺序（顶栏、hub 卡片、侧栏）。 */
export const TOOL_TOPIC_ORDER: ToolTopic[] = [
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

/** 单主题文案键（label / 页头 / IG / FAQ）。 */
export type TopicI18nKeys = {
	/** 顶栏与面包屑短标签 */
	labelKey: string;
	/** Leaf H1 */
	titleKey: string;
	/** meta description */
	descKey: string;
	/** Hub 卡片短说明 */
	blurbKey: string;
	/** Leaf 导语（给谁、解决什么 job） */
	introKey: string;
	/** 「如何选用」H2 */
	chooseTitleKey: string;
	/** 「如何选用」正文 */
	chooseBodyKey: string;
	/** 「边界 / 注意」H2 */
	limitsTitleKey: string;
	/** 「边界 / 注意」正文 */
	limitsBodyKey: string;
	/** FAQ 问 1–3 */
	faqQ1Key: string;
	faqA1Key: string;
	faqQ2Key: string;
	faqA2Key: string;
	faqQ3Key: string;
	faqA3Key: string;
};

/**
 * 将 topic id 转为 i18n 键片段（连字符 → 下划线）。
 * @param id 主题 id
 */
export const topicKeyFragment = (id: ToolTopic | string): string => String(id).replace(/-/g, '_');

/**
 * 各主题的文案键。
 */
export const TOPIC_I18N_KEYS: Record<ToolTopic, TopicI18nKeys> = Object.fromEntries(
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
			} satisfies TopicI18nKeys,
		];
	})
) as Record<ToolTopic, TopicI18nKeys>;

/**
 * 判断字符串是否为合法主题 id。
 * @param value 候选
 */
export const isToolTopic = (value: string): value is ToolTopic =>
	(TOOL_TOPIC_ORDER as readonly string[]).includes(value);

/**
 * 主题 leaf 规范路径。
 * @param id 主题 id
 */
export const topicLeafPath = (id: ToolTopic): string => `${TOPICS_HUB_PATH}/${id}`;

/**
 * 按 primary 主题筛选工具（顶栏下拉用）。
 * @param topic 主题 id
 */
export const getToolsByPrimaryTopic = (topic: ToolTopic): ToolPageMeta[] =>
	TOOL_PAGES.filter((p) => p.primaryTopic === topic);

/**
 * 按主题成员资格筛选（primary 或 secondary；hub leaf 列表用）。
 * primary 命中的排在前面，同组内按 slug 稳定排序。
 * @param topic 主题 id
 */
export const getToolsByTopicMembership = (topic: ToolTopic): ToolPageMeta[] => {
	const primary: ToolPageMeta[] = [];
	const secondary: ToolPageMeta[] = [];
	for (const p of TOOL_PAGES) {
		if (p.primaryTopic === topic) {
			primary.push(p);
			continue;
		}
		if (Array.isArray(p.secondaryTopics) && p.secondaryTopics.includes(topic)) {
			secondary.push(p);
		}
	}
	const bySlug = (a: ToolPageMeta, b: ToolPageMeta) => a.slug.localeCompare(b.slug);
	return [...primary.sort(bySlug), ...secondary.sort(bySlug)];
};

/**
 * 仅 secondary 命中该主题的工具（leaf 分区展示）。
 * @param topic 主题 id
 */
export const getToolsBySecondaryTopicOnly = (topic: ToolTopic): ToolPageMeta[] =>
	TOOL_PAGES.filter(
		(p) =>
			p.primaryTopic !== topic &&
			Array.isArray(p.secondaryTopics) &&
			p.secondaryTopics.includes(topic)
	).sort((a, b) => a.slug.localeCompare(b.slug));
