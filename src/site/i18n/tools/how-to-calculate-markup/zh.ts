/**
 * i18n tool shard (how-to-calculate-markup / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_markup_title: "加价率计算器 — 如何计算 Markup",
	tool_markup_description: "用成本与售价计算加价率（Markup）。示例：成本 50、售价 80 → 加价率 60%。与利润率（分母是收入）不同。全程浏览器本地计算，数据不上传服务器；零售算术学习用，不构成经营建议；结果仅供学习对照，请以官方规则为准；结果仅供学习对照，请以官方规则为准。",
	tool_markup_calculate: "计算",
	tool_markup_sample: "加载样例",
	tool_markup_clear: "清空",
	tool_markup_cost_label: "成本",
	tool_markup_cost_ph: "例如 50",
	tool_markup_sell_label: "售价",
	tool_markup_sell_ph: "例如 80",
	tool_markup_markupOut_label: "加价率 %",
	tool_markup_profitOut_label: "加价金额",
	tool_markup_result_note: "加价率 = (售价 − 成本) / 成本 × 100。与利润率不同。",
	tool_markup_err_generic: "请填写成本 > 0，售价 ≥ 0。",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — 利润率",
	tool_markup_how_title: "怎么用",
	tool_markup_how_body: "填入成本与售价。加价率用「加价金额 ÷ 成本」，不是 ÷ 收入。需要收入视角时请用利润率/毛利率工具。",
	tool_markup_formula_title: "公式",
	tool_markup_formula_body: "加价率 % = (售价 − 成本) / 成本 × 100。注意：",
	tool_markup_formula_item_1: "分母是成本——这是与利润率的关键差别。",
	tool_markup_formula_item_2: "负加价表示低于成本出售。",
	tool_markup_formula_item_3: "税费与折扣除非并入输入，否则不建模。",
	tool_markup_usecases_title: "适合什么场景",
	tool_markup_usecase_1: "零售作业：由成本与标价求加价率。",
	tool_markup_usecase_2: "见财务前粗核价目表。",
	tool_markup_usecase_3: "与毛利率对照，避免术语混用。",
	tool_markup_example_title: "示例",
	tool_markup_example: "示例：成本 50、售价 80 → 加价率 = (80−50)/50 × 100 = 60%。",
	tool_markup_article: "加价率计算器 — 如何计算 Markup",
	tool_markup_disclaimer: "结果仅为markup学习演示，不构成投资、理财或税务建议。",
	tool_markup_references: "Investopedia 与常见教材公式，供教育对照。",
	tool_markup_faq_q1: "Markup vs Marge?",
	tool_markup_faq_a1: "Markup teilt durch Kosten; Marge durch Preis.",
	tool_markup_faq_q2: "Beispielergebnis?",
	tool_markup_faq_a2: "50 und 80 → 60%.",
	tool_markup_faq_q3: "Über 100% möglich?",
	tool_markup_faq_a3: "Ja, wenn Preis > 2× Kosten.",
	tool_markup_faq_q4: "Preisberatung?",
	tool_markup_faq_a4: "Nein, nur Bildungsarithmetik.",
};

export default zh;
