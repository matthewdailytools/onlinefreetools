/**
 * i18n 工具分片（how-to-calculate-gpa / zh）。
 * 学分加权 GPA（4.0 量表）；字母成绩芯片与步骤行；教育用途，非录取决定。
 * 按简体中文检索习惯独立重写：GPA 计算器 / 加权平均绩点 / 学分绩点。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_gpa_title: "GPA 计算器 — 如何计算加权平均绩点",
	tool_gpa_description: "按课程成绩点与学分，用学分加权公式算 4.0 量表上的 GPA（加权平均绩点）。示例：A=4.0（3 学分）与 B=3.0（3 学分）→ GPA 3.50。点字母芯片可插入常见绩点；步骤区展示质量分。仅供学习对照，不是录取、奖学金或成绩单结论。全程在浏览器内计算。",
	tool_gpa_article: "每门课填成绩点与学分，或点字母芯片套用基础 4.0 映射。页面会显示加权 GPA、质量分、总学分和逐步算式。",
	tool_gpa_desc: "4.0 量表学分加权 GPA，带字母芯片与步骤行。",

	tool_gpa_safety_banner: "仅供教育示意。各校、各地区量表不同。这不是录取、奖学金或官方成绩单结论。",
	tool_gpa_hint: "一行一门课：先成绩点后学分（逗号或空格）。学分必须大于 0。字母芯片插入常见 4.0 映射（A=4.0、A−=3.7、B+=3.3 …）。",
	tool_gpa_courses_label: "课程（每行：成绩点, 学分）",
	tool_gpa_courses_ph: "例如 4.0, 3",
	tool_gpa_chips_label: "插入字母成绩点（4.0 映射）",
	tool_gpa_calculate: "开始计算",
	tool_gpa_sample: "加载示例",
	tool_gpa_clear: "清空",
	tool_gpa_result_label: "加权 GPA",
	tool_gpa_qp_label: "质量分（Σ 成绩点 × 学分）",
	tool_gpa_credits_label: "总学分",
	tool_gpa_courses_count_label: "计入课程数",
	tool_gpa_steps_title: "计算步骤",
	tool_gpa_step_row_tpl: "第 {n} 门课：{g} × {c} = {qc}。",
	tool_gpa_step_sum_tpl: "质量分 = {qp}；总学分 = {credits}。",
	tool_gpa_step_gpa_tpl: "GPA = {qp} ÷ {credits} = {gpa}。",
	tool_gpa_result_note: "按简单 4.0 量表示意。加减档与 5.0 加权等规则不会自动套用。学校与地区差异很大——请对照成绩单规则。仅供学习。",
	tool_gpa_err_parse: "请至少填写一行「成绩点, 学分」（例如 4.0, 3）。",
	tool_gpa_err_credits: "每门课的学分必须大于 0。",

	tool_gpa_how_title: "怎么用这个 GPA 计算器",
	tool_gpa_how_body: "按行写成绩点与学分，或先点字母芯片再补学分。开始计算后会显示加权 GPA、质量分和步骤行。加载示例会轮换两门等学分、加减档点数、以及学分不等三种情况。",
	tool_gpa_how_item_1: "一行一门课：先填成绩点，再填学分。",
	tool_gpa_how_item_2: "可选：点字母芯片插入常见 4.0 点数，再补上学分。",
	tool_gpa_how_item_3: "点「开始计算」查看 GPA、质量分、总学分和步骤。",
	tool_gpa_how_item_4: "用「加载示例」轮换等学分、加减档、学分不等三种样例。",

	tool_gpa_why_choose_title: "为什么用本站的 GPA 计算器",
	tool_gpa_why_choose_item_1: "学分加权：GPA = Σ(成绩点 × 学分) / Σ 学分。",
	tool_gpa_why_choose_item_2: "字母芯片覆盖基础 4.0 映射（A 到 F）。",
	tool_gpa_why_choose_item_3: "GPA 旁直接显示质量分与总学分。",
	tool_gpa_why_choose_item_4: "步骤行把你的数字代入公式，便于对照。",
	tool_gpa_why_choose_item_5: "边界清楚：仅供学习，不是录取建议。",

	tool_gpa_formula_title: "GPA 公式与 4.0 量表说明",
	tool_gpa_formula_body: "加权 GPA 把每门课的成绩点乘以学分，把乘积加总（质量分），再除以总学分。",
	tool_gpa_formula_item_1: "GPA = Σ (成绩点 × 学分) / Σ 学分。",
	tool_gpa_formula_item_2: "芯片常用 4.0 映射：A=4.0、A−=3.7、B+=3.3、B=3.0、B−=2.7、C+=2.3、C=2.0、C−=1.7、D+=1.3、D=1.0、F=0.0。",
	tool_gpa_formula_item_3: "芯片以外的加减档、荣誉/AP 加权不会自动套用。",
	tool_gpa_formula_item_4: "学分须为正数；成绩点须为有限数字。",
	tool_gpa_formula_item_5: "大学、高中与地区系统可能不同——结果仅供学习对照。",

	tool_gpa_example_title: "演算示例",
	tool_gpa_example: "加载示例先从 4.0×3 与 3.0×3 开始 → 质量分 21、学分 6、GPA 3.50。下一次用加减档点数（3.7 与 3.3）。最后一次用不等学分（4.0×4 与 2.0×2）→ GPA 3.33。",

	tool_gpa_usecases_title: "什么时候用 GPA 计算器",
	tool_gpa_usecase_1: "官方门户更新前，用成绩点与学分粗算本学期 GPA。",
	tool_gpa_usecase_2: "作业练习：在 4.0 量表上练学分加权平均。",
	tool_gpa_usecase_3: "假设不同成绩做规划——不是录取或奖学金结论。",
	tool_gpa_usecase_4: "用芯片把字母换成点数，若学校量表不同再自行调整。",

	tool_gpa_faq_q1: "本页用的 GPA 公式是什么？",
	tool_gpa_faq_a1: "加权 GPA = Σ (成绩点 × 学分) / Σ 学分。可直接填你量表上的点数，或用字母芯片套基础 4.0 映射。",
	tool_gpa_faq_q2: "是不是所有学校都用 4.0？",
	tool_gpa_faq_a2: "不是。不少北美学校用带加减档的 4.0；也有 5.0 加权或百分制。请以成绩单规则为准。",
	tool_gpa_faq_q3: "能直接混填字母成绩吗？",
	tool_gpa_faq_a3: "点字母芯片插入点数，再在同一行补学分。若学校映射不同，请自己换算后再填。",
	tool_gpa_faq_q4: "什么是质量分？",
	tool_gpa_faq_a4: "质量分是 Σ (成绩点 × 学分)——除以总学分之前的分子。",
	tool_gpa_faq_q5: "会自动算荣誉课 5.0 加权吗？",
	tool_gpa_faq_a5: "不会自动加权。若学校规定如此，请直接填学校给出的成绩点（例如 5.0）。",
	tool_gpa_faq_q6: "算出的 GPA 能保证大学录取吗？",
	tool_gpa_faq_a6: "不能。这个数字只是教育示意，不是录取或奖学金决定。",

	tool_gpa_disclaimer: "仅为教育向的 GPA 算术——不是录取、奖学金或官方成绩单建议。量表因学校与地区而异。",
	tool_gpa_references: "College Board 学生资源；美国学业评分量表概述。",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — 美国学业评分",
};

export default zh;
