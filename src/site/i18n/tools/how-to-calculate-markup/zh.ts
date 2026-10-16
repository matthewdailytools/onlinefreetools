/**
 * i18n 工具分片（how-to-calculate-markup / zh）。
 * 加价率（Markup）：由成本/售价算百分比，或反推售价/成本；并排显示毛利率以便对照。
 */
import type { SiteLangDict } from '../../../types';

/** 中文（简体）工具文案：加价率计算器，YMYL 教育向，非定价或财务建议。 */
const zh: SiteLangDict = {
	tool_markup_title: "加价率计算器 — 由成本与售价求 Markup 或反推价格",
	tool_markup_description:
		"用成本与售价计算 markup 加价率，或在已知加价率时反推售价或成本，并并排查看毛利率。示例：成本 50、售价 80 → markup 60%（毛利率 37.5%）。加价率以成本为分母，毛利率以售价为分母。零售算术学习用，不构成经营、税务或投资建议。",
	tool_markup_article: "求 markup 加价率、售价或成本，并显示对应的毛利率，避免把加价率与毛利率混为一谈。",
	tool_markup_desc: "由成本与售价算 markup %，或反推售价/成本；同时显示毛利率供对照。",

	tool_markup_mode_label: "要求哪一项",
	tool_markup_mode_pct: "加价率 %",
	tool_markup_mode_sell: "售价",
	tool_markup_mode_cost: "成本",
	tool_markup_hint:
		"选择要反推的未知量。加价率分母是成本，毛利率分母是售价。小数可用逗号输入。仅供学习演算，不是定价建议。",
	tool_markup_cost_label: "成本",
	tool_markup_cost_ph: "例如 50",
	tool_markup_sell_label: "售价",
	tool_markup_sell_ph: "例如 80",
	tool_markup_mk_label: "加价率 %",
	tool_markup_mk_ph: "例如 60",
	tool_markup_calculate: "计算",
	tool_markup_sample: "加载样例",
	tool_markup_clear: "清空",
	tool_markup_markupOut_label: "加价率 %",
	tool_markup_sellOut_label: "售价",
	tool_markup_costOut_label: "成本",
	tool_markup_profitOut_label: "加价金额",
	tool_markup_marginOut_label: "毛利率 %",
	tool_markup_steps_title: "计算步骤",
	tool_markup_step_pct_tpl:
		"加价率 % = (售价 − 成本) ÷ 成本 × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct}%。",
	tool_markup_step_sell_tpl: "售价 = 成本 × (1 + 加价率%/100) = {cost} × (1 + {pct}/100) = {sell}。",
	tool_markup_step_cost_tpl: "成本 = 售价 ÷ (1 + 加价率%/100) = {sell} ÷ (1 + {pct}/100) = {cost}。",
	tool_markup_step_margin_tpl:
		"毛利率 % = (售价 − 成本) ÷ 售价 × 100 = {dollar} ÷ {sell} × 100 = {margin}%。",
	tool_markup_result_note:
		"加价率除以成本，毛利率除以售价；同一笔加价金额，百分比不同。仅供学习，不构成税务、定价或投资建议。",
	tool_markup_err_generic: "请为当前模式输入正的成本，以及有效的售价或加价率 %（例如成本 50、售价 80）。",

	tool_markup_how_title: "如何使用加价率计算器",
	tool_markup_how_body:
		"先选需要 markup %、售价还是成本。填写出现的字段后点「计算」。「加载样例」会轮换：成本/售价→%、成本/%→售价、售价/%→成本。",
	tool_markup_how_item_1: "在「要求哪一项」中选择加价率 %、售价或成本。",
	tool_markup_how_item_2: "输入已知数值（成本与售价，或成本与加价率 %，或售价与加价率 %）。",
	tool_markup_how_item_3: "点击「计算」查看缺失项、加价金额及对应的毛利率 %。",
	tool_markup_how_item_4: "用「加载样例」体验 50/80→60%、成本 40 加价 25%→售价 50、售价 120 加价 50%→成本 80。",

	tool_markup_why_choose_title: "为什么用本站的加价率计算器",
	tool_markup_why_choose_item_1: "三种反推模式：由成本与售价求 markup %，由成本与 % 求售价，或由售价与 % 求成本。",
	tool_markup_why_choose_item_2: "结果区同时显示加价金额与毛利率 %，便于区分 markup 与 margin。",
	tool_markup_why_choose_item_3: "分步公式把你的数字代入 (售价−成本)/成本 与 (售价−成本)/售价。",
	tool_markup_why_choose_item_4: "未用到的输入框会随模式隐藏，界面更干净。",
	tool_markup_why_choose_item_5: "明确的教育向免责声明，不是经营、税务或投资建议。",

	tool_markup_formula_title: "加价率公式",
	tool_markup_formula_body: "加价率衡量相对成本的加幅；毛利率衡量同一笔利润相对售价的比例。",
	tool_markup_formula_item_1: "加价率 % = (售价 − 成本) ÷ 成本 × 100。例：(80 − 50) ÷ 50 × 100 = 60%。",
	tool_markup_formula_item_2: "售价 = 成本 × (1 + 加价率%/100)。例：成本 40、加价 25% → 40 × 1.25 = 50。",
	tool_markup_formula_item_3: "成本 = 售价 ÷ (1 + 加价率%/100)。例：售价 120、加价 50% → 120 ÷ 1.5 = 80。",
	tool_markup_formula_item_4: "毛利率 % = (售价 − 成本) ÷ 售价 × 100。同样 50/80 → 37.5%。",
	tool_markup_formula_item_5: "加价率 100% 表示售价 = 2 × 成本（毛利率 50%）。售价超过成本两倍时，加价率可高于 100%。",

	tool_markup_example_title: "算例",
	tool_markup_example:
		"加载样例从成本 50、售价 80 开始 → markup 60%、加价金额 30、毛利率 37.5%。接着：成本 40、加价 25% → 售价 50；售价 120、加价 50% → 成本 80。保本样例（100/100）显示 0% 加价率与 0% 毛利率。",

	tool_markup_usecases_title: "适合什么时候用",
	tool_markup_usecase_1: "零售作业：把成本与标价换算成 markup %，并看到逐步演算。",
	tool_markup_usecase_2: "定价表核对：给定目标加价率，由成本反推应设售价。",
	tool_markup_usecase_3: "反推成本：已知售价与公司加价政策时，估算隐含成本。",
	tool_markup_usecase_4: "澄清混用术语：说明为何 markup 60% 不等于毛利率 60%。",

	tool_markup_faq_q1: "markup 加价率百分比怎么算？",
	tool_markup_faq_a1: "售价减成本，除以成本，再乘 100。例：成本 50、售价 80 → (80−50)/50 × 100 = 60%。",
	tool_markup_faq_q2: "加价率和毛利率有什么区别？",
	tool_markup_faq_a2: "加价率用利润除以成本；毛利率用利润除以售价。同一笔 50/80 的交易是 60% markup、37.5% 毛利率。",
	tool_markup_faq_q3: "已知成本和加价率，售价怎么求？",
	tool_markup_faq_a3: "售价 = 成本 × (1 + 加价率%/100)。成本 40、加价 25% 时，售价 = 40 × 1.25 = 50。",
	tool_markup_faq_q4: "加价率可以超过 100% 吗？",
	tool_markup_faq_a4: "可以。售价超过成本两倍时 markup 就超过 100%。例：成本 50、售价 150 → markup 200%。",
	tool_markup_faq_q5: "如果售价低于成本呢？",
	tool_markup_faq_a5: "加价率与毛利率都会为负，表示单件层面亏损（未计其他费用）。",
	tool_markup_faq_q6: "是否包含税费或折扣？",
	tool_markup_faq_a6: "不包含。请自行处理税与折扣后，再输入要对比的成本与售价数字。",
	tool_markup_faq_q7: "这是财务建议吗？",
	tool_markup_faq_a7: "不是。仅为零售算术学习演示，不构成税务、定价策略或投资建议。",

	tool_markup_disclaimer: "加价率示意仅供教育学习，不构成财务、税务、定价或投资建议。",
	tool_markup_references: "Investopedia 及常见教科书公式，供学习对照。",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — 利润率",
};

export default zh;
