/**
 * i18n tool shard (how-to-calculate-contribution-margin / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_contribution_margin_title: "边际贡献计算器 — 单价减变动成本",
	tool_contribution_margin_description: "用单价与单位变动成本计算边际贡献与贡献率。示例：单价 50、变动成本 30 → 边际贡献 20（贡献率 40%）。可与盈亏平衡对照。浏览器本地计算；教育用，非经营建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。",
	tool_contribution_margin_calculate: "计算",
	tool_contribution_margin_sample: "加载样例",
	tool_contribution_margin_clear: "清空",
	tool_contribution_margin_price_label: "单价",
	tool_contribution_margin_price_ph: "例如 50",
	tool_contribution_margin_vc_label: "单位变动成本",
	tool_contribution_margin_vc_ph: "例如 30",
	tool_contribution_margin_cmOut_label: "边际贡献",
	tool_contribution_margin_cmrOut_label: "贡献率",
	tool_contribution_margin_result_note: "边际贡献 = 单价 − 变动成本；贡献率 = 边际贡献 / 单价。仅供学习。",
	tool_contribution_margin_err_generic: "请填写单价 > 0，变动成本 ≥ 0。",
	tool_contribution_margin_how_title: "怎么用",
	tool_contribution_margin_how_body: "填入单价与单位变动成本。边际贡献用于覆盖固定成本并形成利润。",
	tool_contribution_margin_formula_title: "公式",
	tool_contribution_margin_formula_body: "CM = P − VC；贡献率 = CM / P。注意：",
	tool_contribution_margin_formula_item_1: "变动成本随销量变化；固定成本请用盈亏平衡工具。",
	tool_contribution_margin_formula_item_2: "单价必须 > 0。",
	tool_contribution_margin_formula_item_3: "多产品与税费不建模。",
	tool_contribution_margin_example_title: "示例",
	tool_contribution_margin_example: "示例：单价 50、变动成本 30 → CM=20；贡献率=40%。",
	tool_contribution_margin_usecases_title: "适合什么场景",
	tool_contribution_margin_usecase_1: "作业：求单位边际贡献。",
	tool_contribution_margin_usecase_2: "观察变动成本变动对贡献率的影响。",
	tool_contribution_margin_usecase_3: "配合盈亏平衡看固定成本。",
	tool_contribution_margin_faq_q1: "样例？",
	tool_contribution_margin_faq_a1: "50 与 30 → CM 20、率 40%。",
	tool_contribution_margin_faq_q2: "与毛利率差别？",
	tool_contribution_margin_faq_a2: "边际贡献用变动成本；毛利常用 COGS。",
	tool_contribution_margin_faq_q3: "需要销量吗？",
	tool_contribution_margin_faq_a3: "单位 CM 不需要；总额 = CM×销量。",
	tool_contribution_margin_faq_q4: "经营建议？",
	tool_contribution_margin_faq_a4: "不是。",
	tool_contribution_margin_article: "边际贡献计算器 — 单价减变动成本",
	tool_contribution_margin_disclaimer: "结果仅为边际贡献学习演示，不构成投资、理财或税务建议。",
	tool_contribution_margin_references: "Investopedia 与常见教材公式。",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default zh;
