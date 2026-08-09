/**
 * i18n tool shard (how-to-calculate-gpa / zh).
 * 中文独立重写：检索向 title/desc、完整 UI/How/Formula/FAQ；量表差异说明。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_gpa_title: "GPA 计算器 — 如何计算加权平均绩点",
	tool_gpa_description: "按课程成绩点与学分，用加权平均公式计算 4.0 量表上的 GPA（学分绩点）。示例：A=4.0（3 学分）与 B=3.0（3 学分）→ 加权 GPA 3.5。各国与各校量表可能不同，结果仅供学习对照，不能代替官方成绩单；全程在浏览器本地计算，数据不上传服务器。",
	tool_gpa_article: "加权 GPA 把每门课的成绩点乘以学分，再除以总学分。本页默认常见 4.0 量表（A=4.0、B=3.0）。你的学校可能有加减档、5.0 加权或其他规则，请以成绩单为准。",
	tool_gpa_calculate: "开始计算",
	tool_gpa_sample: "加载示例",
	tool_gpa_clear: "清空",
	tool_gpa_courses_label: "课程列表（每行：成绩点, 学分）",
	tool_gpa_courses_ph: "例如 4.0, 3",
	tool_gpa_courses_hint: "一行一门课：先成绩点后学分（逗号或空格）。4.0 量表下 A≈4.0、B≈3.0。",
	tool_gpa_result_label: "加权 GPA",
	tool_gpa_result_note: "按 4.0 量表示意。学校与地区量表可能不同，请对照官方成绩规则。",
	tool_gpa_err_parse: "请至少填写一行「成绩点, 学分」（例如 4.0, 3）。",
	tool_gpa_err_credits: "每门课的学分必须大于 0。",
	tool_gpa_how_title: "怎么用",
	tool_gpa_how_body: "按行填写每门课的成绩点与学分，点开始计算即可得到学分加权 GPA。计算在浏览器内完成。务必核对学校官方量表。",
	tool_gpa_formula_title: "公式与量表说明",
	tool_gpa_formula_body: "GPA = Σ (成绩点 × 学分) / Σ 学分。请注意：",
	tool_gpa_formula_item_1: "本页演示用简单 4.0 映射；加减档或荣誉加权不会自动套用。",
	tool_gpa_formula_item_2: "学分须为正，成绩点须为有限数字。",
	tool_gpa_formula_item_3: "大学、高中与地区系统可能不同——结果仅供学习。",
	tool_gpa_example_title: "示例",
	tool_gpa_example: "示例：课程 A = 4.0、3 学分，课程 B = 3.0、3 学分 → GPA = (4.0×3 + 3.0×3) / (3+3) = 21 / 6 = 3.50。",
	tool_gpa_usecases_title: "适合什么场景",
	tool_gpa_usecase_1: "学期成绩出来前，用成绩点与学分粗算本学期 GPA。",
	tool_gpa_usecase_2: "作业练习：在 4.0 量表上练习学分加权平均。",
	tool_gpa_usecase_3: "假设不同成绩对大学/高中申请的影响——不能代替录取决定。",
	tool_gpa_faq_q1: "本页用的 GPA 公式是什么？",
	tool_gpa_faq_a1: "加权 GPA = Σ (成绩点 × 学分) / Σ 学分。请先把字母成绩换成你所用量表上的点数（如 A→4.0）。",
	tool_gpa_faq_q2: "是不是所有学校都用 4.0？",
	tool_gpa_faq_a2: "不是。许多学校有加减档或 5.0 加权，也有百分制。请以成绩单规则为准。",
	tool_gpa_faq_q3: "能直接填字母成绩吗？",
	tool_gpa_faq_a3: "请先换成成绩点（基础 4.0 下 A→4.0、B→3.0），再按行填写点数与学分。",
	tool_gpa_faq_q4: "算出的 GPA 能保证录取吗？",
	tool_gpa_faq_a4: "不能。数字仅供学习对照，不是录取或奖学金决定。",
	tool_gpa_references: "College Board 学生资源；美国成绩量表概述。",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "维基百科 — 美国学业评分",
};

export default zh;
