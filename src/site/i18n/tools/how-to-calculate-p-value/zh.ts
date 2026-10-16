/**
 * i18n 工具分片（how-to-calculate-p-value / zh）。
 * 由 z 分数经 erfc 近似求标准正态单侧 / 双侧尾概率；含常用临界 z 快捷与分步演算。
 * 仅供教学，不是 t 检验、χ²、精确检验或研究设计服务。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：由 z 求正态尾部 p 值的工具文案 */
const zh: SiteLangDict = {
	tool_p_value_title: "p 值计算器 — 由 z 分数求正态尾概率",
	tool_p_value_description:
		"输入 z 分数，用互补误差函数（erfc）近似得到标准正态的单侧或双侧 p 值。示例：z = 1.96 → 双侧 p ≈ 0.05。页上同时给出另一侧结果、|z| 与代入步骤。假定连续标准正态，不是 t、χ² 或精确二项检验。仅供作业与自学演算，不能代替统计软件或专业分析。",
	tool_p_value_article:
		"由 z 分数近似标准正态单侧 / 双侧 p 值，提供临界 z 快捷按钮与逐步演算过程。",
	tool_p_value_desc: "由 z 求正态单侧或双侧 p；同时显示另一侧与 |z|。",

	tool_p_value_mode_label: "尾部类型",
	tool_p_value_mode_two: "双侧",
	tool_p_value_mode_one: "单侧",
	tool_p_value_hint:
		"按标准正态模型计算。同一 |z| 下，对称正态的单侧 p 约为双侧 p 的一半。",
	tool_p_value_z_label: "Z 分数",
	tool_p_value_z_ph: "例如 1.96",
	tool_p_value_chips_label: "常用临界 z 快捷",
	tool_p_value_chip_1645: "z = 1.645",
	tool_p_value_chip_196: "z = 1.96",
	tool_p_value_chip_2576: "z = 2.576",
	tool_p_value_calculate: "计算",
	tool_p_value_sample: "加载样例",
	tool_p_value_clear: "清空",
	tool_p_value_pOut_label: "双侧 p 值",
	tool_p_value_pOneOut_label: "单侧 p 值",
	tool_p_value_altOut_label: "另一侧结果",
	tool_p_value_absOut_label: "|z|",
	tool_p_value_steps_title: "计算步骤",
	tool_p_value_step_abs_tpl: "先取绝对值：|z| = |{z}| = {abs}。",
	tool_p_value_step_two_tpl: "双侧 p ≈ erfc(|z| / √2) = erfc({abs} / √2) ≈ {p}。",
	tool_p_value_step_one_tpl: "单侧 p ≈ 双侧 / 2 = {two} / 2 ≈ {one}。",
	tool_p_value_result_note:
		"标准正态近似，供学习对照课本临界值。不是 t 检验、χ²、精确二项或研究设计服务。p 小并不等于自动证明某个结论成立。",
	tool_p_value_err_generic: "请输入有限的 z 分数（例如 1.96）。",

	tool_p_value_how_title: "怎么用这个 p 值计算器",
	tool_p_value_how_body:
		"先选双侧或单侧，填入 z（或点临界 z 快捷），再点计算。加载样例会轮换：1.96 双侧、1.96 单侧、z=0，以及 z=2.576。",
	tool_p_value_how_item_1: "选择双侧或单侧。",
	tool_p_value_how_item_2: "输入有限的 z 分数，或点 1.645 / 1.96 / 2.576。",
	tool_p_value_how_item_3: "点「计算」，查看所选 p、另一侧结果与步骤。",
	tool_p_value_how_item_4: "用「加载样例」轮换课本常见检查点。",

	tool_p_value_why_choose_title: "为什么用本站的 p 值计算器 — 由 z 分数求正态尾概率",
	tool_p_value_why_choose_item_1: "同一 z 下同时给出单侧与双侧正态 p。",
	tool_p_value_why_choose_item_2: "临界 z 快捷对应常见的双侧约 10% / 5% / 1% 检查点。",
	tool_p_value_why_choose_item_3: "步骤行写出 erfc(|z|/√2) 以及单侧取半。",
	tool_p_value_why_choose_item_4: "边界写清楚：只做连续标准正态。",
	tool_p_value_why_choose_item_5: "诚实说明：不是完整假设检验套件，也不能证明某个主张成立。",

	tool_p_value_formula_title: "正态 p 值公式",
	tool_p_value_formula_body:
		"在连续标准正态下，双侧 p ≈ erfc(|z| / √2)。对称正态时，单侧 p 取其一半。",
	tool_p_value_formula_item_1: "双侧 p ≈ erfc(|z| / √2)。例：|z|=1.96 → p ≈ 0.05。",
	tool_p_value_formula_item_2: "单侧 p ≈ 双侧 / 2。同一 |z|=1.96 → 单侧 ≈ 0.025。",
	tool_p_value_formula_item_3: "使用数值 erfc 近似——适合学习对照，不是认证级软件。",
	tool_p_value_formula_item_4: "假定标准正态 z，不是 t、χ² 或离散精确检验。",
	tool_p_value_formula_item_5: "z = 0 → 双侧 p = 1；|z| 越大，p 越小。",

	tool_p_value_example_title: "演算示例",
	tool_p_value_example:
		"加载样例先从 z=1.96 双侧开始 → p≈0.05；下一次显示单侧约一半 ≈0.025；再是 z=0 → p=1；最后用 z=2.576（约对应双侧 1% 临界值）。",

	tool_p_value_usecases_title: "什么时候用 p 值计算器",
	tool_p_value_usecase_1: "作业：已知 z，换算近似正态尾部 p。",
	tool_p_value_usecase_2: "在相关 z 分数页由均值与标准差算出 z 后，快速核对尾概率。",
	tool_p_value_usecase_3: "对照课本里「1.96 ↔ 0.05」经验法则与数值输出。",
	tool_p_value_usecase_4: "同一 |z| 下并排看单侧与双侧。",

	tool_p_value_faq_q1: "这是算单侧还是双侧？",
	tool_p_value_faq_a1:
		"两种都能算。选模式即可。双侧覆盖 ±|z|；对称正态下单侧约为双侧的一半。",
	tool_p_value_faq_q2: "假定什么分布？",
	tool_p_value_faq_a2: "连续标准正态（针对 z）。不是 t 检验、χ² 或精确二项计算器。",
	tool_p_value_faq_q3: "为什么 z = 1.96 接近 0.05？",
	tool_p_value_faq_a3:
		"标准正态下 |z| ≈ 1.96 是双侧 5% 检验的常见临界值；erfc 近似会得到约 0.05。",
	tool_p_value_faq_q4: "p 很小就能证明备择假设成立吗？",
	tool_p_value_faq_a4:
		"不能。p 值是在既定假设下的尾概率，不会自动证明某个主张成立。",
	tool_p_value_faq_q5: "这里单侧和双侧怎么换算？",
	tool_p_value_faq_a5: "对称正态时，同一 |z| 下单侧 p ≈ 双侧 p ÷ 2。",
	tool_p_value_faq_q6: "可以输入负的 z 吗？",
	tool_p_value_faq_a6: "可以。页面用 |z|，所以 −1.96 与 1.96 的双侧 p 相同。",
	tool_p_value_faq_q7: "z 分数从哪里先算出来？",
	tool_p_value_faq_a7: "若从原始分、均值与标准差出发，可先用相关的 z 分数计算器。",

	tool_p_value_disclaimer:
		"仅在标准正态模型下的教学近似——不能替代统计软件、研究设计或专业分析。",
	tool_p_value_references: "维基百科「p 值」「正态分布」；正态尾部用互补误差函数。",
	tool_p_value_ref_pvalue_label: "维基百科 — p 值",
	tool_p_value_ref_normal_label: "维基百科 — 正态分布",
};

export default zh;
