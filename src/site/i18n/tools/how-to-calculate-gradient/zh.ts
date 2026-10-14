/**
 * i18n tool shard (how-to-calculate-gradient / zh).
 * 多元函数梯度中文：示例函数求 ∇f、计算过程、模长与单位方向；非两点斜率。
 */
import type { SiteLangDict } from '../../../types';

/** 中文文案字典。 */
const zh: SiteLangDict = {
	tool_gradient_title: "梯度计算器 — 在给定点求多元函数 ∇f",
	tool_gradient_desc: "在给定点 (x, y) 计算演示标量函数的梯度 ∇f。",
	tool_gradient_description:
		"计算多元函数梯度 ∇f（偏导数组成的向量），并展示计算过程、步骤与模长公式。示例：f(x,y)=x²y+3y 在点 (1,2) 处 ∂f/∂x=4、∂f/∂y=4，故 ∇f=(4,4)，|∇f|≈5.6569。本页不是两点斜率计算器，可对照作业验算。",
	tool_gradient_calculate: "计算 ∇f",
	tool_gradient_sample: "加载样例",
	tool_gradient_clear: "清空",
	tool_gradient_fn_label: "演示函数",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "例如 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "例如 2",
	tool_gradient_result_label: "该点处的梯度",
	tool_gradient_work_label: "计算过程",
	tool_gradient_mag_label: "模长 |∇f|",
	tool_gradient_unit_label: "单位方向",
	tool_gradient_result_note: "已在 ({x}, {y}) 处求值。∇f 指向 f 局部增长最快的方向。",
	tool_gradient_zero_mag: "∇f = 0（临界点 — 无唯一方向）",
	tool_gradient_invalid_input: "请输入有限的数值 x 与 y。",
	tool_gradient_how_title: "如何求多元函数的梯度",
	tool_gradient_how_body:
		"对标量 f(x,y)，分别对每个变量求偏导（其余变量视为常数），再把偏导数排成 ∇f，最后代入你的点。下方框内是固定演示函数，便于核对算术步骤。",
	tool_gradient_how_item_1: "选择一个演示函数，并阅读其下方显示的符号形式 ∇f。",
	tool_gradient_how_item_2: "输入你想求梯度向量的坐标 (x, y)。",
	tool_gradient_how_item_3: "点击「计算 ∇f」。",
	tool_gradient_how_item_4: "查看 ∇f、各分量的计算过程、模长 |∇f| 以及单位方向。",
	tool_gradient_why_choose_title: "为何使用本梯度计算器",
	tool_gradient_why_choose_item_1: "四个演示函数配好现成符号偏导 — 不是空白符号 CAS。",
	tool_gradient_why_choose_item_2: "每个分量都显示计算过程，便于对照作业核对。",
	tool_gradient_why_choose_item_3: "模长与单位向量帮助把 ∇f 与最速上升方向联系起来。",
	tool_gradient_why_choose_item_4: "模型边界清晰：多元微积分中的 ∇f，不是两点升降比斜率。",
	tool_gradient_why_choose_item_5: "在浏览器本地运行，不会上传任何数据。",
	tool_gradient_formula_title: "多元函数梯度公式",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ)。二元时：∇f(x,y) = (∂f/∂x, ∂f/∂y)。∇f 方向为最速上升；梯度下降则沿 −∇f 迈步。",
	tool_gradient_formula_item_1: "对每个变量求 ∂f/∂xᵢ，其余变量保持不变。",
	tool_gradient_formula_item_2: "把各分量组装成向量 ∇f。",
	tool_gradient_formula_item_3: "在给定点求值。示例：f=x²y+3y 在 (1,2) → (4, 4)。",
	tool_gradient_formula_item_4: "模长 |∇f| = √(gx² + gy²)。示例：√(16+16) = √32 ≈ 5.6569。",
	tool_gradient_example_title: "示例",
	tool_gradient_example:
		"对 f(x,y)=x²y+3y，偏导为 ∂f/∂x=2xy、∂f/∂y=x²+3。在 (1,2)：∂f/∂x=2·1·2=4，∂f/∂y=1+3=4，故 ∇f=(4,4)。模长 √32≈5.6569，单位方向 (4/√32, 4/√32)≈(0.7071, 0.7071)。同一点改用 f=x²+y² 则得 ∇f=(2,4)。",
	tool_gradient_usecases_title: "适用场景",
	tool_gradient_usecase_1: "把偏导代入优化步骤前，先核对作业里的偏导结果。",
	tool_gradient_usecase_2: "讲解梯度下降：每一步沿当前参数处 −∇loss 的方向移动。",
	tool_gradient_usecase_3: "物理或场直觉：∇f 指向标量场增长最快的方向。",
	tool_gradient_usecase_4: "在简单演示曲面上判断某点是否临界（|∇f|=0）。",
	tool_gradient_faq_q1: "多元微积分里的梯度是什么？",
	tool_gradient_faq_a1:
		"梯度 ∇f 是一阶偏导数组成的向量。它指向 f 局部增长最快的方向，长度 |∇f| 表示该方向上的陡峭程度。",
	tool_gradient_faq_q2: "如何手工计算 ∇f？",
	tool_gradient_faq_a2:
		"对每个变量求偏导（其余变量视为常数），再组装成向量，最后在给定点求值。对 f=x²y+3y，结果是 (2xy, x²+3)。",
	tool_gradient_faq_q3: "这和机器学习里梯度下降中的「梯度」是一回事吗？",
	tool_gradient_faq_a3:
		"是同一数学对象：标量损失的 ∇。下降步沿 −∇loss 移动。本页用演示函数讲清微积分定义 — 并不训练模型。",
	tool_gradient_faq_q4: "这是两点斜率（升降比）计算器吗？",
	tool_gradient_faq_a4:
		"不是。两点间直线斜率请用斜率工具。这里的 ∇f 是标量场的多元偏导向量。",
	tool_gradient_faq_q5: "|∇f| = 0 表示什么？",
	tool_gradient_faq_a5:
		"梯度为零即临界点：没有唯一的最速上升方向。试 f=x²+y² 在 (0,0)：∇f=(0,0)。",
	tool_gradient_faq_q6: "为什么只有演示函数？",
	tool_gradient_faq_a6:
		"任意表达式的符号求导需要 CAS。固定演示函数让算术可核对，并让页面专注于 ∇f 的定义。",
	tool_gradient_faq_q7: "sin 与 cos 用弧度还是角度？",
	tool_gradient_faq_a7:
		"sin(x)+cos(y) 演示按标准微积分使用弧度。cos(1)≈0.5403，不是 cos(1°)。",
	tool_gradient_article:
		"多元标量函数的梯度是其一阶偏导数组成的向量。它指向局部最速上升方向，也是基于梯度的优化方法的基础。",
	tool_gradient_references: "维基百科与可汗学院关于多元函数梯度的参考资料。",
	tool_gradient_ref_wiki_label: "维基百科 — 梯度",
	tool_gradient_ref_khan_label: "可汗学院 — 梯度",
};

export default zh;
