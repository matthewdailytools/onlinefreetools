/**
 * i18n tool shard (how-to-calculate-inflation / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_inflation_title: "通胀计算器 — 未来购买力粗算",
	tool_inflation_description: "按固定年通胀率把当前金额推算到未来。示例：1000 元、5 年、年通胀 3% → 未来约 1159.27。浏览器本地计算；宏观/理财教育用，非经济预测建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。",
	tool_inflation_calculate: "计算",
	tool_inflation_sample: "加载样例",
	tool_inflation_clear: "清空",
	tool_inflation_amount_label: "当前金额",
	tool_inflation_amount_ph: "例如 1000",
	tool_inflation_rate_label: "年通胀率 %",
	tool_inflation_rate_ph: "例如 3",
	tool_inflation_n_label: "年数",
	tool_inflation_n_ph: "例如 5",
	tool_inflation_futOut_label: "未来名义金额",
	tool_inflation_result_note: "未来值 = 现值 × (1+i)^n。购买力示意，非预测。",
	tool_inflation_err_generic: "金额>0、有效通胀率、年数>0。",
	tool_inflation_how_title: "怎么用",
	tool_inflation_how_body: "填入今天的金额、年通胀率与年数，向前复利。不提供各国 CPI 矩阵。",
	tool_inflation_formula_title: "公式",
	tool_inflation_formula_body: "F = P × (1+i)^n。注意：",
	tool_inflation_formula_item_1: "假定各年通胀率不变。",
	tool_inflation_formula_item_2: "不加载官方 CPI 表。",
	tool_inflation_formula_item_3: "实际工资等需更多背景。",
	tool_inflation_example_title: "示例",
	tool_inflation_example: "示例：P=1000、i=3%、n=5 → ≈1159.27。",
	tool_inflation_usecases_title: "适合什么场景",
	tool_inflation_usecase_1: "通胀复利作业。",
	tool_inflation_usecase_2: "未来标价粗算。",
	tool_inflation_usecase_3: "与 CAGR/复利页对照。",
	tool_inflation_faq_q1: "样例？",
	tool_inflation_faq_a1: "约 1159.27。",
	tool_inflation_faq_q2: "官方 CPI？",
	tool_inflation_faq_a2: "请自填利率；无国家矩阵。",
	tool_inflation_faq_q3: "实际工资？",
	tool_inflation_faq_a3: "超出范围。",
	tool_inflation_faq_q4: "建议？",
	tool_inflation_faq_a4: "仅供学习。",
	tool_inflation_article: "通胀推算",
	tool_inflation_disclaimer: "结果仅为通胀学习演示，不构成投资、理财或税务建议。",
	tool_inflation_references: "Investopedia 与常见教材公式。",
	tool_inflation_ref_a_label: "Investopedia — Inflation",
	tool_inflation_ref_b_label: "Investopedia — Purchasing power",
};

export default zh;
