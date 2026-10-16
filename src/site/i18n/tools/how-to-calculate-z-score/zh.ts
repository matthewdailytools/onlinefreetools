/**
 * i18n 工具分片（how-to-calculate-z-score / zh）。
 * 原始分 ↔ Z 分数（标准分）互算：z = (x − 均值) / 标准差；含分步演算与 SD > 0 校验。
 * 仅供教学线性换算，不是正态性检验、p 值或研究设计。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：Z 分数 / 标准分互算工具文案 */
const zh: SiteLangDict = {
	tool_z_score_title: "Z 分数计算器 — 原始分与标准分互算",
	tool_z_score_description:
		"用 z = (x − 均值) / 标准差把原始分换算成 Z 分数（标准分），也能由 z、均值与标准差反推原始分。示例：x = 85、均值 = 70、标准差 = 10 → z = 1.5。要求标准差 > 0。仅供教学线性尺度换算——不是正态性检验，也不直接给出 p 值。",
	tool_z_score_article:
		"输入原始分、均值与标准差求标准分，或已知 z 反推原始分，并给出分步代入过程。",
	tool_z_score_desc: "原始分 ↔ Z 分数：z = (x − 均值) / 标准差。显示步骤与 |z|。",

	tool_z_score_mode_label: "你想求什么？",
	tool_z_score_mode_z: "由原始分求 Z 分数",
	tool_z_score_mode_x: "由 Z 分数求原始分",
	tool_z_score_hint: "填写均值以及大于 0 的标准差，再选择从原始分出发还是从 z 出发。",
	tool_z_score_x_label: "原始分（x）",
	tool_z_score_x_ph: "例如 85",
	tool_z_score_z_label: "Z 分数（z）",
	tool_z_score_z_ph: "例如 1.5",
	tool_z_score_mean_label: "均值（μ）",
	tool_z_score_mean_ph: "例如 70",
	tool_z_score_sd_label: "标准差（σ）",
	tool_z_score_sd_ph: "例如 10",
	tool_z_score_calculate: "计算",
	tool_z_score_sample: "加载样例",
	tool_z_score_clear: "清空",
	tool_z_score_zOut_label: "Z 分数",
	tool_z_score_xOut_label: "原始分",
	tool_z_score_diffOut_label: "x − 均值",
	tool_z_score_absOut_label: "|z|（距均值几个标准差）",
	tool_z_score_steps_title: "计算步骤",
	tool_z_score_step_z_tpl: "z = (x − 均值) / 标准差 = ({x} − {mean}) / {sd} = {z}。",
	tool_z_score_step_x_tpl: "x = 均值 + z × 标准差 = {mean} + {z} × {sd} = {x}。",
	tool_z_score_step_diff_tpl: "相对均值的差：x − 均值 = {x} − {mean} = {diff}。",
	tool_z_score_step_abs_tpl: "距均值的标准差个数：|z| = |{z}| = {abs}。",
	tool_z_score_result_note:
		"z 的代数本身不要求正态分布；后续若要用正态尾部 p 值才需要正态假设。仅供学习——不能替代统计软件或研究设计。",
	tool_z_score_err_generic:
		"请为当前模式填写有限数字，且标准差必须大于 0（例如 x=85、均值=70、标准差=10）。",

	tool_z_score_how_title: "怎么用这个 Z 分数计算器",
	tool_z_score_how_body:
		"先选「原始分→z」或「z→原始分」，填好均值与大于 0 的标准差，再点计算。加载样例会轮换：85/70/10 → 1.5、反向 1.5 → 85、x 等于均值 → 0，以及低于均值的分数。",
	tool_z_score_how_item_1: "选择「由原始分求 Z 分数」或「由 Z 分数求原始分」。",
	tool_z_score_how_item_2: "填写均值，以及大于 0 的标准差。",
	tool_z_score_how_item_3: "按所选模式输入原始分或 Z 分数。",
	tool_z_score_how_item_4: "点击「计算」，查看结果、x−均值、|z| 与分步算式。",

	tool_z_score_why_choose_title: "为什么用本站的 Z 分数计算器",
	tool_z_score_why_choose_item_1: "双向互算：原始分 → z，或 z → 原始分。",
	tool_z_score_why_choose_item_2: "分步把你的数字代入 z = (x − μ) / σ，便于对照作业。",
	tool_z_score_why_choose_item_3: "明确拦截标准差 ≤ 0，避免除以零。",
	tool_z_score_why_choose_item_4: "用 |z| 直接标出距均值几个标准差。",
	tool_z_score_why_choose_item_5: "边界说清楚：只做线性换算——不是正态性检验，也不出 p 值。",

	tool_z_score_formula_title: "Z 分数公式",
	tool_z_score_formula_body:
		"Z 分数（标准分）把一个取值相对给定均值与标准差重新标度。量纲会消掉，z 本身无量纲。",
	tool_z_score_formula_item_1: "z = (x − μ) / σ。示例：(85 − 70) / 10 = 1.5。",
	tool_z_score_formula_item_2: "x = μ + z × σ。示例：70 + 1.5 × 10 = 85。",
	tool_z_score_formula_item_3: "σ 必须为正；零或负的标准差会被拒绝。",
	tool_z_score_formula_item_4: "x 等于均值时 z = 0；负的 z 表示低于均值。",
	tool_z_score_formula_item_5: "代数不要求正态；正态尾部 p 值才要求——可改用相关的 p 值页。",

	tool_z_score_example_title: "演算示例",
	tool_z_score_example:
		"加载样例先算 x=85、均值=70、标准差=10 → z=1.5；下一次把 z=1.5 反推回 x=85；再来 x=均值 → z=0；最后 x=55 → z=−1.5（低于均值一个半标准差）。",

	tool_z_score_usecases_title: "什么时候用 Z 分数计算器",
	tool_z_score_usecase_1: "作业：把考试原始分换成标准分，并看清代入步骤。",
	tool_z_score_usecase_2: "比较均值或离散程度不同的两套分数在各自分布中的位置。",
	tool_z_score_usecase_3: "已经知道 z、均值与标准差时，反推原始分。",
	tool_z_score_usecase_4: "先算出 z，再拿到另一页去做正态尾部 p 值对照。",

	tool_z_score_faq_q1: "z = 1.5 表示什么？",
	tool_z_score_faq_a1: "原始分比给定均值高出 1.5 个标准差。",
	tool_z_score_faq_q2: "标准差可以是 0 吗？",
	tool_z_score_faq_a2: "不可以。除以零无定义，请输入大于 0 的标准差。",
	tool_z_score_faq_q3: "怎样把 Z 分数换回原始分？",
	tool_z_score_faq_a3: "用 x = 均值 + z × 标准差。示例：70 + 1.5 × 10 = 85。",
	tool_z_score_faq_q4: "算 z 一定要假定正态分布吗？",
	tool_z_score_faq_a4: "z 的代数本身不要求正态；但后续若用正态 p 值，通常需要正态假设。",
	tool_z_score_faq_q5: "|z| 很大就一定统计显著吗？",
	tool_z_score_faq_a5: "单看 |z| 不够。显著性还需要模型以及 p 值或临界值，不能只凭这个数。",
	tool_z_score_faq_q6: "如果 x 正好等于均值呢？",
	tool_z_score_faq_a6: "此时 z = 0，该分正好落在给定分布的中心。",
	tool_z_score_faq_q7: "由 z 怎么得到 p 值？",
	tool_z_score_faq_a7: "先在本页算出 z，再去相关的 p 值计算器。本页只做线性的 z 变换。",

	tool_z_score_disclaimer:
		"仅供教学：z = (x − 均值) / 标准差。不能替代统计软件、正态性检验或研究设计。",
	tool_z_score_references: "维基百科「标准分数」与「标准差」条目（教学参考）。",
	tool_z_score_ref_z_label: "维基百科 — 标准分数",
	tool_z_score_ref_sd_label: "维基百科 — 标准差",
};

export default zh;
