/**
 * i18n 工具分片（how-to-calculate-contribution-margin / zh）。
 * 按单价与单位变动成本求单位边际贡献、贡献率；可选销量得总边际贡献，可选固定成本得盈亏平衡销量。
 * 仅供教材式算术与作业演算，不构成经营、税务、会计或投资建议。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：边际贡献 / 贡献率 / 盈亏平衡销量计算器文案 */
const zh: SiteLangDict = {
	tool_contribution_margin_title: "边际贡献计算器 — 单价减变动成本求贡献率",
	tool_contribution_margin_description:
		"用单价与单位变动成本算出单位边际贡献和边际贡献率。示例：单价 50、变动成本 30 → 边际贡献 20（贡献率 40%）。可选填销量看总边际贡献；可选填固定成本看盈亏平衡销量。浏览器内教材算术，仅供学习对照，不是经营、税务、会计或投资建议。",
	tool_contribution_margin_article:
		"计算单位边际贡献与贡献率；可选销量得总边际贡献，可选固定成本得盈亏平衡销量。",
	tool_contribution_margin_desc: "由单价与变动成本求单位边际贡献与贡献率；可选总量与盈亏平衡销量。",

	tool_contribution_margin_safety_banner:
		"仅供学习。本页只做教材式的边际贡献加减乘除，不是经营、税务、会计或投资建议。",
	tool_contribution_margin_hint:
		"单价必须大于 0。变动成本须 ≥ 0 且不得超过单价。销量与固定成本为可选项。",
	tool_contribution_margin_price_label: "单价",
	tool_contribution_margin_price_ph: "例如 50",
	tool_contribution_margin_vc_label: "单位变动成本",
	tool_contribution_margin_vc_ph: "例如 30",
	tool_contribution_margin_units_label: "销量（可选）",
	tool_contribution_margin_units_ph: "例如 100",
	tool_contribution_margin_fixed_label: "固定成本（可选）",
	tool_contribution_margin_fixed_ph: "例如 10000",
	tool_contribution_margin_calculate: "计算",
	tool_contribution_margin_sample: "加载样例",
	tool_contribution_margin_clear: "清空",
	tool_contribution_margin_cmOut_label: "单位边际贡献",
	tool_contribution_margin_cmrOut_label: "边际贡献率",
	tool_contribution_margin_totalOut_label: "总边际贡献",
	tool_contribution_margin_beOut_label: "盈亏平衡销量",
	tool_contribution_margin_steps_title: "计算步骤",
	tool_contribution_margin_step_cm_tpl: "边际贡献 = 单价 − 变动成本 = {price} − {vc} = {cm}。",
	tool_contribution_margin_step_ratio_tpl:
		"贡献率 = 边际贡献 ÷ 单价 × 100 = {cm} ÷ {price} × 100 = {ratio}%。",
	tool_contribution_margin_step_total_tpl: "总边际贡献 = 单位边际贡献 × 销量 = {cm} × {units} = {total}。",
	tool_contribution_margin_step_be_tpl: "盈亏平衡销量 = 固定成本 ÷ 单位边际贡献 = {fixed} ÷ {cm} = {be}。",
	tool_contribution_margin_result_note:
		"边际贡献用来覆盖固定成本并形成利润（在扣完变动成本之后）。多产品结构与税费未建模。仅供学习，不是经营建议。",
	tool_contribution_margin_err_generic:
		"请填写单价 > 0，且变动成本 ≥ 0 且不超过单价（例如 50 与 30）。可选销量须 > 0；可选固定成本须 ≥ 0。",

	tool_contribution_margin_how_title: "怎么用边际贡献计算器",
	tool_contribution_margin_how_body:
		"先填单价与单位变动成本。需要看总额时再填销量；需要看保本件数时再填固定成本。加载样例会轮换：仅单位、带销量、带固定成本、以及两者都有。",
	tool_contribution_margin_how_item_1: "填写单价与单位变动成本。",
	tool_contribution_margin_how_item_2: "可选：填写销量，查看总边际贡献。",
	tool_contribution_margin_how_item_3: "可选：填写固定成本，查看盈亏平衡销量（需单位边际贡献 > 0）。",
	tool_contribution_margin_how_item_4: "点击「计算」，查看边际贡献、贡献率与分步算式。",

	tool_contribution_margin_why_choose_title: "为什么用本站的边际贡献计算器",
	tool_contribution_margin_why_choose_item_1: "由单价与变动成本直接给出单位边际贡献与贡献率。",
	tool_contribution_margin_why_choose_item_2: "填销量即可看到总边际贡献，不必另开表格。",
	tool_contribution_margin_why_choose_item_3: "填固定成本即可看到盈亏平衡销量（单位边际贡献为正时）。",
	tool_contribution_margin_why_choose_item_4: "分步算式把你输入的数字代入公式，方便作业核对。",
	tool_contribution_margin_why_choose_item_5: "明确 YMYL 边界：只做教材算术，不是经营建议。",

	tool_contribution_margin_formula_title: "边际贡献公式",
	tool_contribution_margin_formula_body:
		"边际贡献是单价扣掉变动成本后剩下的部分，用来覆盖固定成本并形成利润。",
	tool_contribution_margin_formula_item_1: "单位边际贡献 = 单价 − 变动成本。例：50 − 30 = 20。",
	tool_contribution_margin_formula_item_2: "边际贡献率 = 单位边际贡献 ÷ 单价。例：20 ÷ 50 = 40%。",
	tool_contribution_margin_formula_item_3: "总边际贡献 = 单位边际贡献 × 销量。",
	tool_contribution_margin_formula_item_4: "盈亏平衡销量 = 固定成本 ÷ 单位边际贡献（单位边际贡献 > 0 时）。",
	tool_contribution_margin_formula_item_5: "毛利率多用营业成本（COGS）；边际贡献只用变动成本——二者可以不同。",

	tool_contribution_margin_example_title: "演算示例",
	tool_contribution_margin_example:
		"加载样例先从单价 50、变动成本 30 → 边际贡献 20（贡献率 40%）开始；再乘以 100 件 → 总边际贡献 2,000；再填固定成本 10,000 → 盈亏平衡 500 件；最后一轮把销量与固定成本合在一起演示。",

	tool_contribution_margin_usecases_title: "适合什么时候用",
	tool_contribution_margin_usecase_1: "作业：先求单位边际贡献，再做盈亏平衡题。",
	tool_contribution_margin_usecase_2: "观察变动成本变化如何拉动贡献率。",
	tool_contribution_margin_usecase_3: "估算覆盖某笔固定成本大约需要多少件（仅作图示演算）。",
	tool_contribution_margin_usecase_4: "当营业成本 ≠ 变动成本时，可与本站毛利率页对照差异。",

	tool_contribution_margin_faq_q1: "边际贡献怎么算？",
	tool_contribution_margin_faq_a1: "单位边际贡献 = 单价 − 变动成本。例：50 − 30 = 20；贡献率 = 20 ÷ 50 = 40%。",
	tool_contribution_margin_faq_q2: "边际贡献和毛利率有什么不同？",
	tool_contribution_margin_faq_a2: "边际贡献只用变动成本；毛利率常用营业成本（COGS），其中可能含非纯变动项目。",
	tool_contribution_margin_faq_q3: "一定要填销量吗？",
	tool_contribution_margin_faq_a3: "求单位边际贡献不必填。只有需要总边际贡献时才填销量。",
	tool_contribution_margin_faq_q4: "本页的盈亏平衡销量怎么算？",
	tool_contribution_margin_faq_a4:
		"盈亏平衡销量 = 固定成本 ÷ 单位边际贡献（单位边际贡献 > 0）。需要更完整的盈亏平衡界面时，请用相关盈亏平衡计算器。",
	tool_contribution_margin_faq_q5: "变动成本可以高于单价吗？",
	tool_contribution_margin_faq_a5: "本页拒绝该输入（单位边际贡献为负）。请核对输入。",
	tool_contribution_margin_faq_q6: "多产品组合会建模吗？",
	tool_contribution_margin_faq_a6: "不会。请按产品分别计算，或用表格做加权边际贡献。",
	tool_contribution_margin_faq_q7: "这是经营或投资建议吗？",
	tool_contribution_margin_faq_a7: "不是。仅供教材算术——不构成财务、税务、会计或投资建议。",

	tool_contribution_margin_disclaimer:
		"仅供边际贡献学习演算——不构成财务、税务、会计、经营或投资建议。",
	tool_contribution_margin_references: "Investopedia 边际贡献与盈亏平衡条目（教育背景阅读）。",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default zh;
