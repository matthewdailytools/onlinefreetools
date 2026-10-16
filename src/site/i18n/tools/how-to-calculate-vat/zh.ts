/**
 * i18n 工具分片（how-to-calculate-vat / zh）。
 * 净价加 VAT/GST 或从含税价拆税；税率快捷 chip；反算校验。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：增值税 / GST 互算工具文案 */
const zh: SiteLangDict = {
	tool_vat_title: "增值税 / GST 计算器 — 净价加税或含税拆税",
	tool_vat_description:
		"在净价上按自填税率加 VAT 或 GST，或从含税价反推净价与税额。示例：净价 100、税率 20% → 含税 120、税 20。自行输入税率，不含各国税率表；支持加税/拆税、税率 chip 与反算校验。仅供教育演算，非报税、会计或投资建议。",
	tool_vat_article:
		"给净价加 VAT/GST，或把含税价拆成净价与税额，分步展示计算过程并附反算校验。",
	tool_vat_desc: "按自填税率加算或拆算 VAT/GST，显示净价、含税价、税额与反算校验。",

	tool_vat_safety_banner:
		"仅供学习。请自行输入适用于您情形的税率——本页不查询各国法定税率，亦不构成申报或合规建议。",
	tool_vat_mode_label: "模式",
	tool_vat_mode_add: "净价加税",
	tool_vat_mode_extract: "含税拆税",
	tool_vat_amount_label: "金额",
	tool_vat_amount_ph: "例如 100",
	tool_vat_rate_label: "VAT/GST %",
	tool_vat_rate_ph: "例如 20",
	tool_vat_hint:
		"选「加税」（净价→含税）或「拆税」（含税→净价）。可输入任意非负税率百分比。快捷 chip 仅为输入辅助——发票适用税率请以法规为准。",
	tool_vat_chips_label: "常用税率快捷",
	tool_vat_chip_5: "5%",
	tool_vat_chip_10: "10%",
	tool_vat_chip_20: "20%",
	tool_vat_chip_21: "21%",
	tool_vat_calculate: "计算",
	tool_vat_sample: "加载样例",
	tool_vat_clear: "清空",
	tool_vat_grossOut_label: "含税价",
	tool_vat_netOut_label: "净价",
	tool_vat_taxOut_label: "税额",
	tool_vat_row_check: "反算校验",
	tool_vat_steps_title: "计算步骤",
	tool_vat_step_add_tpl:
		"加税：含税 = 净价 × (1 + 税率/100) = {net} × (1 + {pct}/100) = {gross}。",
	tool_vat_step_extract_tpl:
		"拆税：净价 = 含税 ÷ (1 + 税率/100) = {gross} ÷ (1 + {pct}/100) = {net}。",
	tool_vat_step_tax_tpl: "税额 = 含税 − 净价 = {gross} − {net} = {tax}。",
	tool_vat_step_check_tpl:
		"校验：净价 × (1 + 税率/100) = {net} × (1 + {pct}/100) = {gross}。",
	tool_vat_result_note:
		"税率由您输入。多档税率、免税与申报规则未建模。仅供教育演算——非税务、会计或投资建议。",
	tool_vat_err_generic: "请输入正数金额与 0 及以上的税率（例如金额 100、税率 20）。",

	tool_vat_how_title: "如何使用增值税 / GST 计算器",
	tool_vat_how_body:
		"选择加税或拆税，输入金额与税率后点「计算」。「加载样例」依次演示：加税 100@20%、拆税 120@20%、加税 50@10%、拆税 107.1@7%。",
	tool_vat_how_item_1: "选择「净价加税」或「含税拆税」。",
	tool_vat_how_item_2: "输入金额与 VAT/GST 百分比（或点选税率 chip）。",
	tool_vat_how_item_3: "点击「计算」查看含税价、净价、税额及反算校验行。",
	tool_vat_how_item_4: "用「加载样例」轮换常见加税/拆税示例。",

	tool_vat_why_choose_title: "为什么用本站的增值税 / GST 计算器",
	tool_vat_why_choose_item_1: "双向：净价加税，或从含税价拆出净价与税额。",
	tool_vat_why_choose_item_2: "反算校验：用 净价 × (1+r) 乘回含税价。",
	tool_vat_why_choose_item_3: "分步公式代入您的数字，便于对照作业。",
	tool_vat_why_choose_item_4: "税率 chip（5 / 10 / 20 / 21%）仅为输入快捷——非法定税率建议。",
	tool_vat_why_choose_item_5: "边界清晰：您自填税率；无各国税率矩阵，不提供申报协助。",

	tool_vat_formula_title: "VAT / GST 公式",
	tool_vat_formula_body:
		"设 r 为小数税率（百分数 ÷ 100）。当税率为净价的单一百分比时，VAT、GST 与销售税适用同一组恒等式。",
	tool_vat_formula_item_1: "加税：含税 = 净价 × (1 + r)。例：100 × 1.20 = 120（20%）。",
	tool_vat_formula_item_2: "拆税：净价 = 含税 ÷ (1 + r)。例：120 ÷ 1.20 = 100（20%）。",
	tool_vat_formula_item_3: "税额 = 含税 − 净价。同上例 → 税 20。",
	tool_vat_formula_item_4: "税额占含税比例 = r ÷ (1 + r)。20% 时税额为含税价的 1/6。",
	tool_vat_formula_item_5: "GST 与 VAT：加/拆算法相同；名称与申报规则因国而异。",

	tool_vat_example_title: "演算示例",
	tool_vat_example:
		"「加载样例」首组为加税：净价 100、20% → 含税 120、税 20。下一组将 120 拆回净价 100。随后加税 50@10% → 55；最后一组拆税 107.1@7% ≈ 净价 100。请确认发票适用税率。",

	tool_vat_usecases_title: "何时使用 VAT / GST 计算器",
	tool_vat_usecase_1: "作业：给净价加税并写出 (1+r) 步骤。",
	tool_vat_usecase_2: "小票核对：从含税总额反推净价与税额。",
	tool_vat_usecase_3: "快速报价：套用已知税率，无需开表格。",
	tool_vat_usecase_4: "厘清 GST 与 VAT 用语差异，算法仍相同。",

	tool_vat_faq_q1: "如何给净价加 VAT？",
	tool_vat_faq_a1: "乘以 (1 + 税率/100)。净价 100、20% → 100 × 1.20 = 120 含税；税 20。",
	tool_vat_faq_q2: "如何从含税价拆出 VAT？",
	tool_vat_faq_a2: "除以 (1 + 税率/100)。含税 120、20% → 120 ÷ 1.20 = 100 净价；税 20。",
	tool_vat_faq_q3: "是否内置各国 VAT 税率？",
	tool_vat_faq_a3: "否。请自行输入百分比。chip 仅为输入快捷，非法定税率表。",
	tool_vat_faq_q4: "GST 与 VAT 算法是否不同？",
	tool_vat_faq_a4: "对净价的单一百分比而言，加/拆公式相同；名称与申报规则因法域而异。",
	tool_vat_faq_q5: "税率可以为 0 吗？",
	tool_vat_faq_a5: "可以。0% 时净价 = 含税、税 = 0，便于零税率教学示例。",
	tool_vat_faq_q6: "一张发票多种 VAT 税率怎么办？",
	tool_vat_faq_a6: "不支持。请分行计算，或使用支持混合税率与免税的记账软件。",
	tool_vat_faq_q7: "这是报税建议吗？",
	tool_vat_faq_a7: "不是。仅供教育演算——非会计、报税或投资建议。",

	tool_vat_disclaimer:
		"仅供 VAT/GST 教育演算——非财务、报税、会计或投资建议。",
	tool_vat_references: "Investopedia 与常见教材公式，供学习参考。",
	tool_vat_ref_a_label: "Investopedia — VAT",
	tool_vat_ref_b_label: "Investopedia — 销售税",
};

export default zh;
