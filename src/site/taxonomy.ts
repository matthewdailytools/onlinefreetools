/**
 * 应用场景 / 工具类型标签：枚举、顺序与按标签筛选（与构建侧 scripts/site/taxonomy.mjs 同步）。
 */
import type { ToolPageMeta } from './tools';
import { TOOL_PAGES } from './tools';

/** 应用场景列表 hub / leaf 路径前缀（规范 URL）。 */
export const SCENARIO_HUB_PATH = '/where-to-use-tools';

/** 工具类型（subject 字段）列表 hub / leaf 路径前缀（规范 URL）。 */
export const SUBJECT_HUB_PATH = '/tool-type';

/** 应用场景（每工具恰好一个）。 */
export type ToolScenario =
	| 'finance'
	| 'health'
	| 'sports'
	| 'math'
	| 'construction'
	| 'everyday'
	| 'physics'
	| 'developer'
	| 'design'
	| 'media'
	| 'documents';

/** 操作对象（每工具恰好一个）。 */
export type ToolSubject = 'image' | 'pdf' | 'text' | 'number' | 'color' | 'network' | 'unit' | 'data';

/** 场景展示顺序（列表页 / hub 侧栏）。 */
export const TOOL_SCENARIO_ORDER: ToolScenario[] = [
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

/** 操作对象展示顺序。 */
export const TOOL_SUBJECT_ORDER: ToolSubject[] = [
	'image',
	'pdf',
	'text',
	'number',
	'color',
	'network',
	'unit',
	'data',
];

/** 场景 i18n 键（运行时 / 构建侧共用命名）。 */
export type ScenarioI18nKeys = {
	/** 短标签 */
	labelKey: string;
	/** 列表页 H1 / 导语标题 */
	titleKey: string;
	/** meta description */
	descKey: string;
	/** 页内短说明 */
	blurbKey: string;
};

/** 操作对象 i18n 键。 */
export type SubjectI18nKeys = ScenarioI18nKeys;

/**
 * 各场景的文案键。
 */
export const SCENARIO_I18N_KEYS: Record<ToolScenario, ScenarioI18nKeys> = {
	finance: {
		labelKey: 'taxonomy_scenario_finance',
		titleKey: 'taxonomy_scenario_finance_title',
		descKey: 'taxonomy_scenario_finance_desc',
		blurbKey: 'taxonomy_scenario_finance_blurb',
	},
	health: {
		labelKey: 'taxonomy_scenario_health',
		titleKey: 'taxonomy_scenario_health_title',
		descKey: 'taxonomy_scenario_health_desc',
		blurbKey: 'taxonomy_scenario_health_blurb',
	},
	sports: {
		labelKey: 'taxonomy_scenario_sports',
		titleKey: 'taxonomy_scenario_sports_title',
		descKey: 'taxonomy_scenario_sports_desc',
		blurbKey: 'taxonomy_scenario_sports_blurb',
	},
	math: {
		labelKey: 'taxonomy_scenario_math',
		titleKey: 'taxonomy_scenario_math_title',
		descKey: 'taxonomy_scenario_math_desc',
		blurbKey: 'taxonomy_scenario_math_blurb',
	},
	construction: {
		labelKey: 'taxonomy_scenario_construction',
		titleKey: 'taxonomy_scenario_construction_title',
		descKey: 'taxonomy_scenario_construction_desc',
		blurbKey: 'taxonomy_scenario_construction_blurb',
	},
	everyday: {
		labelKey: 'taxonomy_scenario_everyday',
		titleKey: 'taxonomy_scenario_everyday_title',
		descKey: 'taxonomy_scenario_everyday_desc',
		blurbKey: 'taxonomy_scenario_everyday_blurb',
	},
	physics: {
		labelKey: 'taxonomy_scenario_physics',
		titleKey: 'taxonomy_scenario_physics_title',
		descKey: 'taxonomy_scenario_physics_desc',
		blurbKey: 'taxonomy_scenario_physics_blurb',
	},
	developer: {
		labelKey: 'taxonomy_scenario_developer',
		titleKey: 'taxonomy_scenario_developer_title',
		descKey: 'taxonomy_scenario_developer_desc',
		blurbKey: 'taxonomy_scenario_developer_blurb',
	},
	design: {
		labelKey: 'taxonomy_scenario_design',
		titleKey: 'taxonomy_scenario_design_title',
		descKey: 'taxonomy_scenario_design_desc',
		blurbKey: 'taxonomy_scenario_design_blurb',
	},
	media: {
		labelKey: 'taxonomy_scenario_media',
		titleKey: 'taxonomy_scenario_media_title',
		descKey: 'taxonomy_scenario_media_desc',
		blurbKey: 'taxonomy_scenario_media_blurb',
	},
	documents: {
		labelKey: 'taxonomy_scenario_documents',
		titleKey: 'taxonomy_scenario_documents_title',
		descKey: 'taxonomy_scenario_documents_desc',
		blurbKey: 'taxonomy_scenario_documents_blurb',
	},
};

/**
 * 各操作对象的文案键。
 */
export const SUBJECT_I18N_KEYS: Record<ToolSubject, SubjectI18nKeys> = {
	image: {
		labelKey: 'taxonomy_subject_image',
		titleKey: 'taxonomy_subject_image_title',
		descKey: 'taxonomy_subject_image_desc',
		blurbKey: 'taxonomy_subject_image_blurb',
	},
	pdf: {
		labelKey: 'taxonomy_subject_pdf',
		titleKey: 'taxonomy_subject_pdf_title',
		descKey: 'taxonomy_subject_pdf_desc',
		blurbKey: 'taxonomy_subject_pdf_blurb',
	},
	text: {
		labelKey: 'taxonomy_subject_text',
		titleKey: 'taxonomy_subject_text_title',
		descKey: 'taxonomy_subject_text_desc',
		blurbKey: 'taxonomy_subject_text_blurb',
	},
	number: {
		labelKey: 'taxonomy_subject_number',
		titleKey: 'taxonomy_subject_number_title',
		descKey: 'taxonomy_subject_number_desc',
		blurbKey: 'taxonomy_subject_number_blurb',
	},
	color: {
		labelKey: 'taxonomy_subject_color',
		titleKey: 'taxonomy_subject_color_title',
		descKey: 'taxonomy_subject_color_desc',
		blurbKey: 'taxonomy_subject_color_blurb',
	},
	network: {
		labelKey: 'taxonomy_subject_network',
		titleKey: 'taxonomy_subject_network_title',
		descKey: 'taxonomy_subject_network_desc',
		blurbKey: 'taxonomy_subject_network_blurb',
	},
	unit: {
		labelKey: 'taxonomy_subject_unit',
		titleKey: 'taxonomy_subject_unit_title',
		descKey: 'taxonomy_subject_unit_desc',
		blurbKey: 'taxonomy_subject_unit_blurb',
	},
	data: {
		labelKey: 'taxonomy_subject_data',
		titleKey: 'taxonomy_subject_data_title',
		descKey: 'taxonomy_subject_data_desc',
		blurbKey: 'taxonomy_subject_data_blurb',
	},
};

/**
 * 判断字符串是否为合法场景 id。
 * @param value 候选
 */
export const isToolScenario = (value: string): value is ToolScenario =>
	(TOOL_SCENARIO_ORDER as readonly string[]).includes(value);

/**
 * 判断字符串是否为合法操作对象 id。
 * @param value 候选
 */
export const isToolSubject = (value: string): value is ToolSubject =>
	(TOOL_SUBJECT_ORDER as readonly string[]).includes(value);

/**
 * 按应用场景筛选工具。
 * @param scenario 场景 id
 */
export const getToolsByScenario = (scenario: ToolScenario): ToolPageMeta[] =>
	TOOL_PAGES.filter((p) => p.scenario === scenario);

/**
 * 按操作对象筛选工具。
 * @param subject 操作对象 id
 */
export const getToolsBySubject = (subject: ToolSubject): ToolPageMeta[] =>
	TOOL_PAGES.filter((p) => p.subject === subject);
