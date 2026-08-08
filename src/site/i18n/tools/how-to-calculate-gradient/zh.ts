/**
 * i18n tool shard (how-to-calculate-gradient / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_gradient_article:
    '多元标量函数的梯度是其一阶偏导数向量，指向局部上升最快的方向，也是基于梯度的优化基础。本页给出公式，并在固定演示函数上对你输入的 (x,y) 求值；相关工具链到百分比变化与 ROI。这不是两点斜率（rise/run）计算器。',
  tool_gradient_calculate: '求 ∇f',
  tool_gradient_desc:
    '计算标量场的梯度 ∇f（各偏导数组成的向量）。流程：对每个变量求偏导，组成 ∇f，再代入坐标求值。演示函数 f(x,y)=x²y+3y → ∇f=(2xy, x²+3)；在 (1,2) 得 (4,4)。用于最优化与机器学习梯度下降讲解，非两点斜率工具。',
  tool_gradient_description:
    '计算标量场的梯度 ∇f（各偏导数组成的向量）。流程：对每个变量求偏导，组成 ∇f，再代入坐标求值。演示函数 f(x,y)=x²y+3y → ∇f=(2xy, x²+3)；在 (1,2) 得 (4,4)。用于最优化与机器学习梯度下降讲解，非两点斜率工具。',
  tool_gradient_example: 'f(x,y)=x²y+3y。偏导：∂f/∂x=2xy，∂f/∂y=x²+3。在 (1,2)：∂f/∂x=4，∂f/∂y=4 → ∇f=(4,4)。',
  tool_gradient_example_title: '示例',
  tool_gradient_faq_a1: '梯度 ∇f 是各偏导数组成的向量，指向函数局部上升最快的方向。',
  tool_gradient_faq_a2: '对每个变量求偏导（其余变量当常数），组成向量后再代入给定点。',
  tool_gradient_faq_a3: '数学对象相同：标量损失的 ∇。下降步沿 −∇loss。本页用演示函数讲微积分定义，并不训练模型。',
  tool_gradient_faq_a4: '不是。两点斜率请用斜率工具；这里的 ∇f 是多元偏导向量。',
  tool_gradient_faq_q1: '多元微积分里的梯度是什么？',
  tool_gradient_faq_q2: '怎么手算？',
  tool_gradient_faq_q3: '和机器学习里「梯度下降」的梯度是一回事吗？',
  tool_gradient_faq_q4: '这是两点斜率（rise/run）计算器吗？',
  tool_gradient_fn_hint: '演示函数（交互框固定为此式）：',
  tool_gradient_formula_body: '∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ)。二元时：∇f(x,y)=(∂f/∂x, ∂f/∂y)。∇f 指向最速上升；梯度下降沿 −∇f 走。',
  tool_gradient_formula_item_1: '对每个变量求 ∂f/∂xᵢ',
  tool_gradient_formula_item_2: '组装成向量 ∇f',
  tool_gradient_formula_item_3: '在给定点代入求各分量',
  tool_gradient_formula_item_4: '演示：f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: '多元梯度公式',
  tool_gradient_how_body: '对标量 f(x₁,…,xₙ)，固定其余变量求每个偏导 ∂f/∂xᵢ，排成 ∇f，再代入坐标。交互框使用 f(x,y)=x²y+3y，方便核对手算。',
  tool_gradient_how_title: '怎么用',
  tool_gradient_invalid_input: '请输入有限的数字 x、y。',
  tool_gradient_ref_khan_label: 'Khan Academy — 梯度介绍',
  tool_gradient_ref_wiki_label: 'Wikipedia — 梯度（Gradient）',
  tool_gradient_result_label: '该点处的梯度',
  tool_gradient_result_note: '已在 ({x}, {y}) 对 f(x,y)=x²y+3y 求值。',
  tool_gradient_title: '多元函数梯度计算 — ∇f 偏导向量',
  tool_gradient_usecase_1: '作业核对偏导，再代入优化迭代。',
  tool_gradient_usecase_2: '讲解梯度下降：每步沿 −∇loss 更新参数。',
  tool_gradient_usecase_3: '物理场直觉：∇f 指向标量场上升最快的方向。',
  tool_gradient_usecases_title: '优化与机器学习场景',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: '例如 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: '例如 2',
};
export default zh;
