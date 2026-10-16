/**
 * i18n 工具分片（how-to-calculate-discount / zh）。
 * 按折扣百分比求优惠价、反推原价，或由两价差求折扣率；可选叠加第二次折扣。
 * 仅供购物算术与教学演算，非门店结账或税务建议。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：折扣 / 优惠价互算工具文案 */
const zh: SiteLangDict = {
	tool_discount_title: "折扣计算器 — 算优惠价或折扣百分比",
	tool_discount_description:
		"用原价与折扣百分比算出优惠到手价，或从小票反推标价，也能对比两价差得出打几折。示例：原价 100、打 20% 折 → 优惠价 80，节省 20。可选第二次折扣在已减价基础上叠加，并显示综合节省比例。仅供购物算术与作业演算，不是门店结账、税费引擎或理财建议。",
	tool_discount_article:
		"按折扣百分比求优惠价、由两价求折扣率，或从优惠总额反推原价；支持可选叠加折扣与分步演算。",
	tool_discount_desc: "求优惠价、折扣百分比或原价；可叠加第二次折扣并显示综合节省比例。",

	tool_discount_mode_label: "你想求什么？",
	tool_discount_mode_sale: "已知折扣% → 优惠价",
	tool_discount_mode_pct: "两价对比 → 折扣%",
	tool_discount_mode_original: "已知优惠价与折扣% → 原价",
	tool_discount_hint:
		"按你手头已有的两个数选择模式。若填写第二次折扣，会乘在「已减价」上（叠乘），而不是再对原价各算一遍。",
	tool_discount_original_label: "原价",
	tool_discount_original_ph: "例如 100",
	tool_discount_sale_label: "优惠 / 到手价",
	tool_discount_sale_ph: "例如 80",
	tool_discount_pct_label: "折扣（% off）",
	tool_discount_pct_ph: "例如 20",
	tool_discount_pct2_label: "第二次折扣 %（可选）",
	tool_discount_pct2_ph: "例如 10",
	tool_discount_chips_label: "常用折扣快捷",
	tool_discount_chip_10: "减 10%",
	tool_discount_chip_15: "减 15%",
	tool_discount_chip_20: "减 20%",
	tool_discount_chip_25: "减 25%",
	tool_discount_chip_50: "减 50%",
	tool_discount_calculate: "计算",
	tool_discount_sample: "加载样例",
	tool_discount_clear: "清空",
	tool_discount_finalOut_label: "优惠价",
	tool_discount_savedOut_label: "节省金额",
	tool_discount_pctOut_label: "折扣百分比",
	tool_discount_originalOut_label: "原价",
	tool_discount_effectiveOut_label: "综合折扣%",
	tool_discount_steps_title: "计算步骤",
	tool_discount_step_sale_tpl: "第一次折扣后：{original} × (1 − {pct}/100) = {mid}。",
	tool_discount_step_sale2_tpl: "叠加第二次折扣：{mid} × (1 − {pct2}/100) = {final}。",
	tool_discount_step_saved_tpl: "节省 = 原价 − 到手价 = {original} − {final} = {saved}。",
	tool_discount_step_pct_tpl:
		"折扣% = (原价 − 优惠价) ÷ 原价 × 100 = ({original} − {sale}) ÷ {original} × 100 = {pct}%。",
	tool_discount_step_original_tpl:
		"原价 = 优惠价 ÷ (1 − 折扣%/100) = {sale} ÷ (1 − {pct}/100) = {original}。",
	tool_discount_step_effective_tpl:
		"综合折扣% = (原价 − 最终价) ÷ 原价 × 100 = ({original} − {final}) ÷ {original} × 100 = {eff}%。",
	tool_discount_result_note:
		"第二次折扣若填写，作用于已减价（叠乘）。税费、固定金额优惠券与门店抹零未建模。仅供教育演算——非结账系统。",
	tool_discount_err_generic:
		"请输入与模式匹配的正数（例如原价 100 与减 20%，或原价 100 与优惠价 80）。折扣百分比须在 0–100；反推原价时折扣须小于 100。",

	tool_discount_how_title: "如何使用折扣计算器",
	tool_discount_how_body:
		"选择求优惠价、求折扣%或求原价。填入已知数，可点快捷 chip，再点「计算」。「加载样例」轮换：100 减 20% → 80、由 100→80 求折扣%、80 反推原价，以及 20%+10% 叠加。",
	tool_discount_how_item_1: "选与手头两个已知数相符的模式。",
	tool_discount_how_item_2: "填原价和/或优惠价，以及折扣百分比（或点 chip）。",
	tool_discount_how_item_3: "可选：在求优惠价模式下再填第二次叠加折扣。",
	tool_discount_how_item_4: "点「计算」查看结果、节省额与分步公式。",

	tool_discount_why_choose_title: "本折扣计算器能帮你做什么",
	tool_discount_why_choose_item_1: "三个方向：按折扣%求优惠价、两价求折扣%、由优惠总额反推原价。",
	tool_discount_why_choose_item_2: "可选第二次叠加折扣，并给出综合节省百分比。",
	tool_discount_why_choose_item_3: "分步公式把你的数字代入，便于对照作业。",
	tool_discount_why_choose_item_4: "折扣 chip（10 / 15 / 20 / 25 / 50%）作输入快捷。",
	tool_discount_why_choose_item_5: "边界清晰：只做百分比折扣算术——不含税、不含固定券、不模拟结账抹零。",

	tool_discount_formula_title: "折扣公式",
	tool_discount_formula_body:
		"设 d 为折扣百分数 ÷ 100。求优惠价与反推原价都用因子 (1 − d)。叠加折扣则连续相乘各次因子。",
	tool_discount_formula_item_1: "优惠价 = 原价 × (1 − d)。例：100 × 0.80 = 80（减 20%）。",
	tool_discount_formula_item_2: "节省 = 原价 − 优惠价。同上例 → 节省 20。",
	tool_discount_formula_item_3: "折扣% = (原价 − 优惠价) ÷ 原价 × 100。例：(100 − 80) ÷ 100 × 100 = 20%。",
	tool_discount_formula_item_4: "由优惠价反推原价 = 优惠价 ÷ (1 − d)。例：80 ÷ 0.80 = 100（减 20%）。",
	tool_discount_formula_item_5:
		"叠加：最终价 = 原价 × (1 − d₁) × (1 − d₂)。100 先减 20% 再减 10% → 72（综合减 28%），不是减 30%。",

	tool_discount_example_title: "演算示例",
	tool_discount_example:
		"「加载样例」首组：原价 100、减 20% → 优惠价 80、节省 20。下一组由 100→80 测出折扣 20%。再将优惠价 80、减 20% 反推回原价 100。最后一组在 100 上先 20% 再 10% → 72（综合减 28%）。",

	tool_discount_usecases_title: "何时使用折扣计算器",
	tool_discount_usecase_1: "逛街购物：把广告上的「减 xx%」换成税前预期到手价。",
	tool_discount_usecase_2: "作业练习：单次与连续百分比折扣，步骤可见。",
	tool_discount_usecase_3: "核对小票：已知优惠总额与折扣%，反推标价。",
	tool_discount_usecase_4: "比较叠加活动：看清「先 20% 再 10%」不等于「减 30%」。",

	tool_discount_faq_q1: "如何按折扣百分比算优惠价？",
	tool_discount_faq_a1: "乘以 (1 − 折扣%/100)。原价 100、减 20% → 100 × 0.80 = 80；节省 = 20。",
	tool_discount_faq_q2: "两次折扣怎么叠？",
	tool_discount_faq_a2:
		"第二次百分比乘在已打折价格上，不是再对原价各算一遍。100 先 20% 再 10% → 72，综合减 28%，不是 30%。",
	tool_discount_faq_q3: "如何由两价求折扣百分比？",
	tool_discount_faq_a3: "折扣% = (原价 − 优惠价) ÷ 原价 × 100。从 100 到 80 → 减 20%。",
	tool_discount_faq_q4: "打折后如何反推原价？",
	tool_discount_faq_a4: "用优惠价除以 (1 − 折扣%/100)。优惠价 80、减 20% → 80 ÷ 0.80 = 100。",
	tool_discount_faq_q5: "「减 20%」等于「只付 20%」吗？",
	tool_discount_faq_a5: "不等于。减 20% 表示你付原价的 80%（乘 0.8）。",
	tool_discount_faq_q6: "含不含销售税 / VAT？",
	tool_discount_faq_a6: "不含。请输入税前金额。若要加 VAT/GST 或销售税，请用单独的税费页面。",
	tool_discount_faq_q7: "可以输入固定金额优惠券吗？",
	tool_discount_faq_a7: "本页只做百分比折扣。固定金额券请自行在百分比计算前后加减。",

	tool_discount_disclaimer: "仅供价格教育演算——非门店结账、税务引擎或理财建议。",
	tool_discount_references: "Investopedia 折扣概述；OpenStax 零售折扣算术，供学习参考。",
	tool_discount_ref_a_label: "Investopedia — Discount",
	tool_discount_ref_b_label: "OpenStax — Discounts, Markups, and Sales Tax",
};

export default zh;
