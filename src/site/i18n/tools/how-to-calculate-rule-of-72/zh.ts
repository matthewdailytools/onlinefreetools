/**
 * i18n tool shard (how-to-calculate-rule-of-72 / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_rule_of_72_title: "72 法则计算器 — 多久翻倍",
	tool_rule_of_72_description: "用 72 法则估算资金翻倍所需年数：年数 ≈ 72 ÷ 年化收益率%。示例：年化 6% → 约 12 年。教学近似；浏览器本地计算，非投资建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。",
	tool_rule_of_72_calculate: "计算",
	tool_rule_of_72_sample: "加载样例",
	tool_rule_of_72_clear: "清空",
	tool_rule_of_72_rate_label: "年化收益率 %",
	tool_rule_of_72_rate_ph: "例如 6",
	tool_rule_of_72_yearsOut_label: "约需年数（翻倍）",
	tool_rule_of_72_result_note: "年数 ≈ 72 / 利率%。经验法则，非精确复利预测。",
	tool_rule_of_72_err_generic: "请填写利率 > 0。",
	tool_rule_of_72_how_title: "怎么用",
	tool_rule_of_72_how_body: "填入年化百分比，用 72÷利率 估算翻倍年数。",
	tool_rule_of_72_formula_title: "公式",
	tool_rule_of_72_formula_body: "年数 ≈ 72 / r%。注意：",
	tool_rule_of_72_formula_item_1: "中等利率更准；极高/极低误差大。",
	tool_rule_of_72_formula_item_2: "不是完整复利表。",
	tool_rule_of_72_formula_item_3: "精确计算请用复利/CAGR 工具。",
	tool_rule_of_72_example_title: "示例",
	tool_rule_of_72_example: "示例：6% → 72/6 = 12 年。",
	tool_rule_of_72_usecases_title: "适合什么场景",
	tool_rule_of_72_usecase_1: "课堂翻倍直觉。",
	tool_rule_of_72_usecase_2: "精确 FV 前的速算。",
	tool_rule_of_72_usecase_3: "与 CAGR/复利对照。",
	tool_rule_of_72_faq_q1: "样例？",
	tool_rule_of_72_faq_a1: "6% → 12 年。",
	tool_rule_of_72_faq_q2: "精确吗？",
	tool_rule_of_72_faq_a2: "教学近似。",
	tool_rule_of_72_faq_q3: "为何是 72？",
	tool_rule_of_72_faq_a3: "接近对数翻倍的方便整数。",
	tool_rule_of_72_faq_q4: "投资建议？",
	tool_rule_of_72_faq_a4: "不是。",
	tool_rule_of_72_article: "72 法则",
	tool_rule_of_72_disclaimer: "结果仅为72法则学习演示，不构成投资、理财或税务建议。",
	tool_rule_of_72_references: "Investopedia 与常见教材公式。",
	tool_rule_of_72_ref_a_label: "Investopedia — Rule of 72",
	tool_rule_of_72_ref_b_label: "Investopedia — Compound interest",
};

export default zh;
