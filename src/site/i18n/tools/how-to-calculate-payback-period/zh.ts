/**
 * i18n tool shard (how-to-calculate-payback-period / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_payback_period_title: "回收期计算器 — 多久收回投资",
	tool_payback_period_description: "用初始投资与每年等额现金流入估算简单回收期。示例：投资 10000、每年流入 2500 → 4 年。浏览器本地计算；财务教育用，非投资建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，不构成投资、理财或经营建议。",
	tool_payback_period_calculate: "计算",
	tool_payback_period_sample: "加载样例",
	tool_payback_period_clear: "清空",
	tool_payback_period_invest_label: "初始投资",
	tool_payback_period_invest_ph: "例如 10000",
	tool_payback_period_cf_label: "年现金流入",
	tool_payback_period_cf_ph: "例如 2500",
	tool_payback_period_yearsOut_label: "回收年数",
	tool_payback_period_result_note: "简单回收期 = 投资 / 年现金流（不折现）。仅供学习。",
	tool_payback_period_err_generic: "投资与年流入均须 > 0。",
	tool_payback_period_how_title: "怎么用",
	tool_payback_period_how_body: "填入初始投资与每年等额流入。年数 = 投资 ÷ 年现金流。折现回收请用 NPV 类工具。",
	tool_payback_period_formula_title: "公式",
	tool_payback_period_formula_body: "回收年数 = I0 / 年 CF。注意：",
	tool_payback_period_formula_item_1: "忽略货币时间价值与不均匀现金流。",
	tool_payback_period_formula_item_2: "两输入须为正。",
	tool_payback_period_formula_item_3: "本身不是盈利能力指标。",
	tool_payback_period_example_title: "示例",
	tool_payback_period_example: "示例：I0=10000、CF=2500 → 4 年。",
	tool_payback_period_usecases_title: "适合什么场景",
	tool_payback_period_usecase_1: "作业：简单回收期。",
	tool_payback_period_usecase_2: "NPV/IRR 前粗筛。",
	tool_payback_period_usecase_3: "与折现方法对照。",
	tool_payback_period_faq_q1: "样例？",
	tool_payback_period_faq_a1: "10000/2500 → 4 年。",
	tool_payback_period_faq_q2: "折现回收？",
	tool_payback_period_faq_a2: "本页仅简单法。",
	tool_payback_period_faq_q3: "不均匀现金流？",
	tool_payback_period_faq_a3: "请用表格或 NPV 日程。",
	tool_payback_period_faq_q4: "投资建议？",
	tool_payback_period_faq_a4: "不是。",
	tool_payback_period_article: "简单回收期",
	tool_payback_period_disclaimer: "结果仅为回收期学习演示，不构成投资、理财或税务建议。",
	tool_payback_period_references: "Investopedia 与常见教材公式。",
	tool_payback_period_ref_a_label: "Investopedia — Payback period",
	tool_payback_period_ref_b_label: "Investopedia — NPV",
};

export default zh;
