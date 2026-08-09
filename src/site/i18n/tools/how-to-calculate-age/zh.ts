/**
 * i18n tool shard (how-to-calculate-age / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_age_title: "年龄计算器 — 由出生日期算周岁",
	tool_age_description: "按出生日期与截止日期（UTC YYYY-MM-DD）计算日历年龄。示例：2000-01-01 出生、截至 2026-08-09 → 26 岁 7 个月 8 天。浏览器本地计算，数据不上传。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，请核对公式假设。",
	tool_age_calculate: "计算",
	tool_age_sample: "加载样例",
	tool_age_clear: "清空",
	tool_age_birth_label: "出生日期",
	tool_age_asof_label: "截止日期",
	tool_age_yearsOut_label: "岁（年）",
	tool_age_monthsOut_label: "月",
	tool_age_daysOut_label: "天",
	tool_age_totalDaysOut_label: "总天数",
	tool_age_result_note: "按 UTC 日历日期计算岁/月/天。",
	tool_age_err_generic: "请填写有效 YYYY-MM-DD；截止 ≥ 出生。",
	tool_age_how_title: "怎么用",
	tool_age_how_body: "填写出生与截止日期，输出岁/月/天与总天数。",
	tool_age_formula_title: "公式",
	tool_age_formula_body: "UTC 解析后借位相减。注意：",
	tool_age_formula_item_1: "核对单位与符号。",
	tool_age_formula_item_2: "边界输入可能无定义。",
	tool_age_formula_item_3: "仅供学习对照。",
	tool_age_example_title: "示例",
	tool_age_example: "示例：2000-01-01 → 2026-08-09 = 26岁7月8天。",
	tool_age_usecases_title: "适合什么场景",
	tool_age_usecase_1: "课堂作业。",
	tool_age_usecase_2: "快速验算。",
	tool_age_usecase_3: "与相关工具对照。",
	tool_age_faq_q1: "样例？",
	tool_age_faq_a1: "示例：2000-01-01 → 2026-08-09 = 26岁7月8天。",
	tool_age_faq_q2: "公式？",
	tool_age_faq_a2: "见公式节。",
	tool_age_faq_q3: "专业建议？",
	tool_age_faq_a3: "不是。",
	tool_age_faq_q4: "相关？",
	tool_age_faq_a4: "见相关工具。",
	tool_age_article: "日历年龄",
	tool_age_disclaimer: "结果仅为年龄学习演示，不构成专业建议。",
	tool_age_references: "常见教材公式。",
	tool_age_ref_a_label: "Wikipedia — Ageing",
	tool_age_ref_b_label: "Wikipedia — Calendar date",
};

export default zh;
