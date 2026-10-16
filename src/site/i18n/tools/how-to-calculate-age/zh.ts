/**
 * i18n tool shard (how-to-calculate-age / zh).
 * 检索向独立重写：年龄计算器 / 两个日期算年·月·日 / UTC 日历借位 / 教育向非法定年龄。
 */
import type { SiteLangDict } from '../../../types';

/** Chinese (zh) strings for the chronological age calculator. */
const zh: SiteLangDict = {
	tool_age_title: "年龄计算器 — 由两个日期算年/月/日",
	tool_age_description: "用出生日期与截至日期（UTC 日历日）算出历时年龄的年、月、剩余天数，并给出区间内的整日总数。示例：出生 2000-01-01、截至 2026-08-09 → 26 年 7 个月 8 天。页面展示借位步骤与「用今天」快捷填入，仅作日历算术学习，不是法定年龄或资格认定建议。",
	tool_age_article: "按两个日历日期求年、月、日年龄差，并附整日总数、借位说明与「用今天」快捷方式。",
	tool_age_desc: "由出生到截至日期算出年/月/日年龄，并显示总天数。",

	tool_age_hint: "请用 YYYY-MM-DD 日历日期（UTC 日界）。截至日期须不早于出生日期。「用今天」会把截至日期填成当天的 UTC 日期。",
	tool_age_birth_label: "出生日期",
	tool_age_asof_label: "截至日期",
	tool_age_calculate: "计算",
	tool_age_today: "用今天",
	tool_age_sample: "加载样例",
	tool_age_clear: "清空",
	tool_age_ymdOut_label: "年龄",
	tool_age_yearsOut_label: "年",
	tool_age_monthsOut_label: "月",
	tool_age_daysOut_label: "天",
	tool_age_totalDaysOut_label: "整日总数",
	tool_age_steps_title: "计算步骤",
	tool_age_step_ymd_tpl: "从 {birth} 到 {asof}：经日历借位后为 {y} 年、{m} 个月、{d} 天。",
	tool_age_step_borrow_tpl: "日借位：当截至日的「日」小于出生日的「日」时，从上一个日历月借入天数。",
	tool_age_step_total_tpl: "整日总数 =（截至 − 出生）按 UTC 午夜毫秒差 ÷ 86400000 = {total}。",
	tool_age_result_note: "仅按 UTC 日历日期计算，不含本地钟点或时区法定截止。区间内的闰日会计入总天数。教育用途——不是法定年龄或资格建议。",
	tool_age_err_generic: "请输入有效日期（YYYY-MM-DD）。截至日期须不早于出生日期。",

	tool_age_how_title: "怎么用年龄计算器",
	tool_age_how_body: "填写出生与截至日期，或点「用今天」填截至日，再点「计算」。加载样例会轮换：2000-01-01→2026-08-09、闰日案例、同日年龄为 0、以及跨年借位。",
	tool_age_how_item_1: "输入出生日期。",
	tool_age_how_item_2: "输入截至日期，或点击「用今天」。",
	tool_age_how_item_3: "点击「计算」，查看年、月、日与整日总数。",
	tool_age_how_item_4: "用「加载样例」轮换教材级日历案例。",

	tool_age_why_choose_title: "为什么用本站的年龄计算器",
	tool_age_why_choose_item_1: "完整历时年龄：年、月与剩余天数一并给出。",
	tool_age_why_choose_item_2: "两个 UTC 日历日之间的整日总数。",
	tool_age_why_choose_item_3: "截至字段提供「用今天」快捷填入。",
	tool_age_why_choose_item_4: "需要从上月借日时，页面写出可见的借位步骤。",
	tool_age_why_choose_item_5: "边界清晰：只做日历算术，不提供法定年龄或资格认定。",

	tool_age_formula_title: "年龄计算公式",
	tool_age_formula_body: "两个日期均按 UTC 午夜解析。先减年，再减月，再减日，并做日历借位。总天数用毫秒差除以 86400000。",
	tool_age_formula_item_1: "years = 截至年 − 出生年（若月日尚未到达则再减 1）。",
	tool_age_formula_item_2: "若截至日 < 出生日，则借入上一个日历月的天数。",
	tool_age_formula_item_3: "若月为负，则从年借入 12 个月。",
	tool_age_formula_item_4: "totalDays = round((截至 − 出生) / 86400000)，按 UTC。",
	tool_age_formula_item_5: "区间内落在其中的闰日会影响总天数与借位时的月长。",

	tool_age_example_title: "计算示例",
	tool_age_example: "加载样例默认：出生 2000-01-01、截至 2026-08-09 → 26 年 7 个月 8 天。下一组用 2 月 29 日出生对照 2024-02-28。再下一组同日年龄为 0。最后一组从 1985-12-31 跨年到 2026-01-01。",

	tool_age_usecases_title: "什么时候用年龄计算器",
	tool_age_usecase_1: "表格或作业要求填写「年、月、日」形式的年龄。",
	tool_age_usecase_2: "练习日历差值与「日不够从上月借」的手算步骤。",
	tool_age_usecase_3: "快速核对本两个日历日之间的整日总数。",
	tool_age_usecase_4: "若只要「间隔」而不叫年龄，可搭配日期间隔工具对照。",

	tool_age_faq_q1: "历时年龄怎么算？",
	tool_age_faq_a1: "按年、月、日做日历借位减法。例如：2000-01-01 到 2026-08-09 → 26 年 7 个月 8 天。",
	tool_age_faq_q2: "「用今天」做什么？",
	tool_age_faq_a2: "把截至日期填成当天的 UTC 日历日并重新计算。",
	tool_age_faq_q3: "会算时区吗？",
	tool_age_faq_a3: "不会。日期一律当作 UTC 日历日，不用本地钟点。",
	tool_age_faq_q4: "出生晚于截至怎么办？",
	tool_age_faq_a4: "页面会拒绝该情况。截至日期必须不早于出生日期。",
	tool_age_faq_q5: "闰日如何影响结果？",
	tool_age_faq_a5: "落在区间内的闰日会计入总天数；借位时月长按真实日历月。",
	tool_age_faq_q6: "这是法定年龄或资格建议吗？",
	tool_age_faq_a6: "不是。仅为教育向日历算术，不是法律、医疗或资格认定建议。",
	tool_age_faq_q7: "和日期间隔工具有何不同？",
	tool_age_faq_a7: "本页把跨度表述为历时年龄（年/月/日）。其他间隔说法请用相关的日期间隔工具。",

	tool_age_disclaimer: "仅供日历年龄学习——不是法定年龄、资格、医疗或官方身份建议。",
	tool_age_references: "维基百科「Chronological age」与「Calendar date」作教育背景参考。",
	tool_age_ref_a_label: "Wikipedia — Chronological age",
	tool_age_ref_b_label: "Wikipedia — Calendar date",
};

export default zh;
