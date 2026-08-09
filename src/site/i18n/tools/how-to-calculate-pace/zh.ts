/**
 * i18n tool shard (how-to-calculate-pace / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_pace_title: "配速计算器 — 分/公里与时速",
	tool_pace_description: "由距离与时间计算配速（分:秒 /km）与速度（km/h）。示例：5 km、25 分钟 → 5:00 /km、12 km/h。浏览器本地计算。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，请核对公式假设。；全程浏览器本地计算，数据不上传服务器；结果仅供学习对照，请核对公式假设。",
	tool_pace_calculate: "计算",
	tool_pace_sample: "加载样例",
	tool_pace_clear: "清空",
	tool_pace_distKm_label: "距离 (km)",
	tool_pace_distKm_ph: "例如 5",
	tool_pace_minutes_label: "时间（分钟）",
	tool_pace_minutes_ph: "例如 25",
	tool_pace_paceOut_label: "配速",
	tool_pace_speedOut_label: "速度 (km/h)",
	tool_pace_result_note: "结果按配速公式在浏览器本地计算。",
	tool_pace_err_generic: "请检查输入是否有效。",
	tool_pace_how_title: "怎么用",
	tool_pace_how_body: "填写所需字段后计算配速。",
	tool_pace_formula_title: "公式",
	tool_pace_formula_body: "配速相关公式见 Formula 节。注意：",
	tool_pace_formula_item_1: "核对单位与符号。",
	tool_pace_formula_item_2: "边界输入可能无定义。",
	tool_pace_formula_item_3: "仅供学习对照。",
	tool_pace_example_title: "示例",
	tool_pace_example: "示例：5 km、25 分钟 → 5:00 /km、12 km/h。",
	tool_pace_usecases_title: "适合什么场景",
	tool_pace_usecase_1: "课堂作业。",
	tool_pace_usecase_2: "快速验算。",
	tool_pace_usecase_3: "与相关工具对照。",
	tool_pace_faq_q1: "样例？",
	tool_pace_faq_a1: "示例：5 km、25 分钟 → 5:00 /km、12 km/h。",
	tool_pace_faq_q2: "公式？",
	tool_pace_faq_a2: "见公式节。",
	tool_pace_faq_q3: "专业建议？",
	tool_pace_faq_a3: "不是。",
	tool_pace_faq_q4: "相关？",
	tool_pace_faq_a4: "见相关工具。",
	tool_pace_article: "配速",
	tool_pace_disclaimer: "结果仅为配速学习演示，不构成专业建议。",
	tool_pace_references: "常见教材公式。",
	tool_pace_ref_a_label: "Wikipedia",
	tool_pace_ref_b_label: "Textbook formula",
};

export default zh;
