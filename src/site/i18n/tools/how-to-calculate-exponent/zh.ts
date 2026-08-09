/**
 * i18n tool shard (how-to-calculate-exponent / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_exponent_title: "指数幂计算器 — 如何计算 a 的 b 次方",
	tool_exponent_description: "计算幂 a^b，示例 2^10=1024。写明极大结果可能溢出为 Infinity，以及负底配非整数指数时可能出现 NaN。浏览器内计算，适合作业，并可与对数页、科学计数法页互相核对逆运算与数量级因子；同时注明本页对 0^0 的编程约定处理。",
	tool_exponent_calculate: "计算",
	tool_exponent_sample: "加载样例",
	tool_exponent_clear: "清空",
	tool_exponent_base_label: "底数 a",
	tool_exponent_base_ph: "例如 2",
	tool_exponent_exp_label: "指数 b",
	tool_exponent_exp_ph: "例如 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "用 JavaScript Math.pow 计算 a^b 供学习。|b| 很大时可能溢出为 Infinity。",
	tool_exponent_err_generic: "请输入有限的底数与指数。",
	tool_exponent_how_title: "怎么用",
	tool_exponent_how_body: "输入底数 a 与指数 b，返回 a^b。负底配非整数指数在实数下可能为 NaN，本页视为错误。",
	tool_exponent_formula_title: "公式",
	tool_exponent_formula_body: "幂运算 a^b：",
	tool_exponent_formula_item_1: "b 为非负整数时，a^b 表示 a 自乘 b 次。",
	tool_exponent_formula_item_2: "分数与负指数按 Math.pow 的实数幂规则。",
	tool_exponent_formula_item_3: "此处 0^0 按常见编程约定取 1——学界有争议。",
	tool_exponent_formula_item_4: "可配合对数页在有定义时核对 log_a(a^b)=b。",
	tool_exponent_example_title: "示例",
	tool_exponent_example: "示例：2^10=1024。",
	tool_exponent_usecases_title: "适合什么场景",
	tool_exponent_usecase_1: "作业：计算 2^10 这类简单幂。",
	tool_exponent_usecase_2: "核对科学计数的数量级因子。",
	tool_exponent_usecase_3: "用逆运算核对对数。",
	tool_exponent_disclaimer: "仅为实数教育用幂运算；溢出/NaN 边角不能替代 CAS。",
	tool_exponent_references: "维基百科幂运算。",
	tool_exponent_ref_exp_label: "维基百科 — 幂",
	tool_exponent_ref_pow_label: "维基百科 — 指数",
	tool_exponent_article: "在浏览器内计算 a^b，并写明定义域注意事项。",
	tool_exponent_faq_q1: "很大时会怎样？",
	tool_exponent_faq_a1: "可能得到 Infinity，本页不是任意精度运算。",
	tool_exponent_faq_q2: "本页 0^0 是多少？",
	tool_exponent_faq_a2: "按常见 JS 约定取 1；数学上有争议。",
	tool_exponent_faq_q3: "负底何时失败？",
	tool_exponent_faq_a3: "负底配非整数实数幂在 JS 中常为 NaN。",
	tool_exponent_faq_q4: "如何用对数核对？",
	tool_exponent_faq_a4: "有定义时 log_a(a^b) 应约等于 b。",
};

export default zh;
