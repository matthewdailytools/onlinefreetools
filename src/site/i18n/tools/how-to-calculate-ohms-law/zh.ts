/**
 * i18n 工具分片（how-to-calculate-ohms-law / zh）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_ohms_law_title: "欧姆定律计算器 — 求电压电流电阻并算出功率",
	tool_ohms_law_description: "用欧姆定律 V=IR 求电压、电流或电阻，并同步给出功率 P=VI。示例：V=12、I=2 → R=6 Ω、P=24 W。支持三种求解模式（求 R / V / I），步骤行会代入你的数字。仅理想直流公式，浏览器内教学演算，不是接线步骤或用电安全指导。",
	tool_ohms_law_article: "先选要求的量，再填另外两个已知数，即可得到未知量与功率，并附逐步算式。",
	tool_ohms_law_desc: "欧姆定律 V=IR，可求 V、I 或 R，并显示功率。仅理想直流教学。",

	tool_ohms_law_safety_banner: "仅供教学。理想直流欧姆定律算术——不是接线步骤、产品额定值或电气安全建议。",
	tool_ohms_law_hint: "先选求解模式，再输入两个已知量。求 R 时电流不能为 0；由 R 求 I 或 V 时电阻须大于 0。",
	tool_ohms_law_mode_label: "求解目标",
	tool_ohms_law_mode_r: "电阻 R（由 V 与 I）",
	tool_ohms_law_mode_v: "电压 V（由 I 与 R）",
	tool_ohms_law_mode_i: "电流 I（由 V 与 R）",
	tool_ohms_law_V_label: "电压 V（伏特）",
	tool_ohms_law_V_ph: "例如 12",
	tool_ohms_law_I_label: "电流 I（安培）",
	tool_ohms_law_I_ph: "例如 2",
	tool_ohms_law_R_label: "电阻 R（欧姆）",
	tool_ohms_law_R_ph: "例如 6",
	tool_ohms_law_calculate: "计算",
	tool_ohms_law_sample: "加载样例",
	tool_ohms_law_clear: "清空",
	tool_ohms_law_primary_label: "结果",
	tool_ohms_law_rOut_label: "电阻 R",
	tool_ohms_law_vOut_label: "电压 V",
	tool_ohms_law_iOut_label: "电流 I",
	tool_ohms_law_pOut_label: "功率 P",
	tool_ohms_law_steps_title: "计算步骤",
	tool_ohms_law_step_r_tpl: "R = V ÷ I = {v} ÷ {i} = {r} Ω。",
	tool_ohms_law_step_v_tpl: "V = I × R = {i} × {r} = {v} V。",
	tool_ohms_law_step_i_tpl: "I = V ÷ R = {v} ÷ {r} = {i} A。",
	tool_ohms_law_step_p_tpl: "P = V × I = {v} × {i} = {p} W。",
	tool_ohms_law_result_note: "仅理想直流形式。请保持单位一致（V、A → Ω 与 W）。不覆盖交流阻抗或非欧姆器件。",
	tool_ohms_law_err_generic: "请为已知字段填写有限正数。求 R 时电流 ≠ 0；求 V 或 I 时电阻 > 0。",

	tool_ohms_law_how_title: "如何使用欧姆定律计算器",
	tool_ohms_law_how_body: "选择要求 R、V 还是 I，填入另外两个量，点计算即可看到未知量、功率与步骤。「加载样例」会轮换三种模式。",
	tool_ohms_law_how_item_1: "选择求解模式：由 V 与 I 求 R、由 I 与 R 求 V，或由 V 与 R 求 I。",
	tool_ohms_law_how_item_2: "用一致单位输入两个已知值。",
	tool_ohms_law_how_item_3: "点击「计算」查看未知量、功率与步骤。",
	tool_ohms_law_how_item_4: "用「加载样例」轮换 V=12/I=2、I=2/R=6、V=12/R=6。",

	tool_ohms_law_why_choose_title: "为什么用本站的欧姆定律计算器",
	tool_ohms_law_why_choose_item_1: "三种求解模式，覆盖 V = I·R 的全部变形。",
	tool_ohms_law_why_choose_item_2: "功率 P = V·I 与未知量同屏显示。",
	tool_ohms_law_why_choose_item_3: "步骤行把你的数字代入公式。",
	tool_ohms_law_why_choose_item_4: "样例按模式轮换，方便快速试算。",
	tool_ohms_law_why_choose_item_5: "边界清楚：仅理想直流教学——不是接线建议。",

	tool_ohms_law_formula_title: "欧姆定律公式",
	tool_ohms_law_formula_body: "理想电阻在直流条件下，电压、电流与电阻由 V = I·R 联系；功率由 P = V·I 给出。",
	tool_ohms_law_formula_item_1: "电流不为零时：R = V ÷ I。",
	tool_ohms_law_formula_item_2: "V = I × R。",
	tool_ohms_law_formula_item_3: "电阻大于零时：I = V ÷ R。",
	tool_ohms_law_formula_item_4: "P = V × I（理想情形也可用 P = I²R 或 P = V²/R）。",
	tool_ohms_law_formula_item_5: "本页只用理想直流——不含交流阻抗或安全设计。",

	tool_ohms_law_example_title: "计算示例",
	tool_ohms_law_example: "R 模式加载样例：V=12、I=2 → R=6 Ω、P=24 W。V 模式用 I=2、R=6 → V=12。I 模式用 V=12、R=6 → I=2。",

	tool_ohms_law_usecases_title: "什么时候用欧姆定律计算器",
	tool_ohms_law_usecase_1: "电子学作业：把 V = I·R 变形求缺失量。",
	tool_ohms_law_usecase_2: "用表读数快速核对理想直流下的电阻或功率。",
	tool_ohms_law_usecase_3: "对照密度、速度等物理页，练习统一单位习惯。",
	tool_ohms_law_usecase_4: "在求出未知量的同时看到功率，不必另开功率工具。",

	tool_ohms_law_faq_q1: "欧姆定律说什么？",
	tool_ohms_law_faq_a1: "理想电阻在直流下满足 V = I·R。本页同时给出 P = V·I。",
	tool_ohms_law_faq_q2: "能求电压或电流吗？",
	tool_ohms_law_faq_a2: "可以。用「求解目标」选择 V、I 或 R。",
	tool_ohms_law_faq_q3: "能算交流电路吗？",
	tool_ohms_law_faq_a3: "不能。仅理想直流形式——不含阻抗与相位。",
	tool_ohms_law_faq_q4: "求 R 时电流为 0 怎么办？",
	tool_ohms_law_faq_a4: "I = 0 时 R = V/I 无定义，本页会拒绝该输入。",
	tool_ohms_law_faq_q5: "这是接线或安全建议吗？",
	tool_ohms_law_faq_a5: "不是。仅教学算术——不是产品额定或用电安全指导。",

	tool_ohms_law_disclaimer: "仅供欧姆定律教学——不是专业、接线或电气安全建议。",
	tool_ohms_law_references: "标准教材中的欧姆定律与电功率参考。",
	tool_ohms_law_ref_a_label: "维基百科 — 欧姆定律",
	tool_ohms_law_ref_b_label: "维基百科 — 电功率",
};

export default zh;
