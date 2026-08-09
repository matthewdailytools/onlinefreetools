/**
 * i18n tool shard (how-to-calculate-p-value / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_p_value_title: "p 值计算器 — 如何计算 p 值",
	tool_p_value_description: "由 z 分数用 erfc 近似求双侧正态 p 值。示例：z = 1.96 → 双侧 p ≈ 0.05。写清标准正态与双侧假设。浏览器内计算，适合作业与快速对照学习。 Educational illustration of the two-tailed normal tail probability under stated assumptions.",
	tool_p_value_calculate: "计算",
	tool_p_value_sample: "加载样例",
	tool_p_value_clear: "清空",
	tool_p_value_z_label: "z 分数",
	tool_p_value_z_ph: "例如 1.96",
	tool_p_value_pOut_label: "双侧 p 值",
	tool_p_value_result_note: "标准正态、双侧近似，供学习对照——不是完整假设检验套件。",
	tool_p_value_err_generic: "请输入有限的 z 分数。",
	tool_p_value_how_title: "怎么用",
	tool_p_value_how_body: "输入标准正态检验得到的 z 分数。工具用 erfc 近似给出双侧 p 值，并写明假设：标准正态抽样模型、计入两侧尾部。计算在浏览器内完成，适合作业与快速核对。",
	tool_p_value_formula_title: "公式与假设",
	tool_p_value_formula_body: "双侧 p ≈ erfc(|z| / √2)（标准正态）。请注意：",
	tool_p_value_formula_item_1: "假定连续标准正态 z（均值 0、方差 1），不是 t、χ² 或精确离散检验。",
	tool_p_value_formula_item_2: "本页只做双侧：计入 ±|z| 外侧两侧。",
	tool_p_value_formula_item_3: "使用数值 erfc 近似，供学习，不能当作认证统计软件。",
	tool_p_value_formula_item_4: "p 值小并不自动证明科学结论成立。",
	tool_p_value_example_title: "示例",
	tool_p_value_example: "示例：z = 1.96 → 双侧 p ≈ erfc(1.96 / √2) ≈ 0.05（本近似约 0.049996）。",
	tool_p_value_usecases_title: "适合什么场景",
	tool_p_value_usecase_1: "作业：已知 z，求近似双侧 p。",
	tool_p_value_usecase_2: "在别处算完均值与标准差得到 z 后，快速对照 p。",
	tool_p_value_usecase_3: "核对常见的 1.96 ↔ 0.05 经验规则。",
	tool_p_value_faq_q1: "这是单侧还是双侧？",
	tool_p_value_faq_a1: "双侧。报告的 p 覆盖标准正态下 ±|z| 外侧两侧。",
	tool_p_value_faq_q2: "假定什么分布？",
	tool_p_value_faq_a2: "连续标准正态。不是 t 检验、χ² 或精确二项计算器。",
	tool_p_value_faq_q3: "为什么 z=1.96 接近 0.05？",
	tool_p_value_faq_a3: "在标准正态下，|z|≈1.96 是双侧 5% 检验的常用临界值；本页 erfc 近似约得到 0.05。",
	tool_p_value_faq_q4: "p 值小就能证明备择假设吗？",
	tool_p_value_faq_a4: "不能。p 值是在给定假设下的尾概率，不是自动证明。",
	tool_p_value_disclaimer: "结果是在标准正态双侧模型下的教育近似，不能替代统计软件、研究设计或专业分析。",
	tool_p_value_references: "维基百科 p 值与正态分布条目；用互补误差函数描述正态尾部。",
	tool_p_value_ref_pvalue_label: "维基百科 — P 值",
	tool_p_value_ref_normal_label: "维基百科 — 正态分布",
	tool_p_value_article: "由 z 分数用 erfc 近似求双侧正态 p 值，并写清标准正态与双侧假设，供学习使用。",
};

export default zh;
