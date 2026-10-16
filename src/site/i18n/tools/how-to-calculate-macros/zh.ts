/**
 * i18n 工具分片（how-to-calculate-macros / zh）。
 * 按每日热量与蛋白/碳水/脂肪百分比，用 Atwater 系数 4/4/9 换算成克数。
 * 仅供教材能量算术与作业演算，非医疗或个性化营养建议（YMYL）。
 */
import type { SiteLangDict } from '../../../types';

/** 简体中文：宏量营养素（热量百分比→克数）计算器全文案 */
const zh: SiteLangDict = {
	tool_macros_title: "宏量营养素计算器 — 按热量百分比算克数",
	tool_macros_description:
		"把每日热量与蛋白、碳水、脂肪占比换成克数，按教材常用的每克 4 / 4 / 9 千卡换算。示例：2000 kcal、30/40/30% → 蛋白质 150 g、碳水 200 g、脂肪约 66.7 g。三项百分比须合计恰好 100。本页只做能量算术，不是医疗建议、膳食处方或营养治疗。",
	tool_macros_article:
		"用热量份额与 Atwater 能量密度，把三大宏量营养素拆成克数；提供常用比例快捷填入与分步演算。",
	tool_macros_desc: "热量 + 三大宏量百分比 → 蛋白/碳水/脂肪克数（4/4/9）。仅供学习演算。",

	tool_macros_safety_banner:
		"仅供教学。本页做的是课本里的「热量→克数」算术，不是医疗建议、配餐方案，也不是个性化营养治疗。",
	tool_macros_hint:
		"填写每日千卡，以及三项非负百分比且合计为 100。下方快捷芯片只是替你填数，不是推荐饮食。",
	tool_macros_cal_label: "热量（kcal）",
	tool_macros_cal_ph: "例如 2000",
	tool_macros_pPct_label: "蛋白质 %",
	tool_macros_pPct_ph: "例如 30",
	tool_macros_cPct_label: "碳水 %",
	tool_macros_cPct_ph: "例如 40",
	tool_macros_fPct_label: "脂肪 %",
	tool_macros_fPct_ph: "例如 30",
	tool_macros_chips_label: "常用比例快捷填入",
	tool_macros_chip_304030: "30 / 40 / 30",
	tool_macros_chip_404020: "40 / 40 / 20",
	tool_macros_chip_255025: "25 / 50 / 25",
	tool_macros_calculate: "计算",
	tool_macros_sample: "加载样例",
	tool_macros_clear: "清空",
	tool_macros_pG_label: "蛋白质",
	tool_macros_cG_label: "碳水",
	tool_macros_fG_label: "脂肪",
	tool_macros_sumOut_label: "百分比合计",
	tool_macros_kcalP_label: "蛋白质热量",
	tool_macros_kcalC_label: "碳水热量",
	tool_macros_kcalF_label: "脂肪热量",
	tool_macros_steps_title: "演算步骤",
	tool_macros_step_p_tpl: "蛋白质：{cal} × {pct}% = {kcal} kcal → {kcal} ÷ 4 = {g} g。",
	tool_macros_step_c_tpl: "碳水：{cal} × {pct}% = {kcal} kcal → {kcal} ÷ 4 = {g} g。",
	tool_macros_step_f_tpl: "脂肪：{cal} × {pct}% = {kcal} kcal → {kcal} ÷ 9 = {g} g。",
	tool_macros_step_sum_tpl: "核对百分比：{p}% + {c}% + {f}% = 100%。",
	tool_macros_result_note:
		"采用 Atwater 近似：蛋白/碳水约 4 kcal/g，脂肪约 9 kcal/g。酒精、膳食纤维修正与食品标签四舍五入未建模。仅供学习，非医疗建议。",
	tool_macros_err_generic:
		"请输入大于 0 的热量，以及三项非负且合计恰好为 100 的百分比（例如 2000 kcal、30/40/30）。",

	tool_macros_how_title: "怎么用宏量营养素计算器",
	tool_macros_how_body:
		"填入每日热量与蛋白/碳水/脂肪百分比（或点快捷芯片），再点「计算」。加载样例会轮换：2000@30/40/30、1800@40/40/20、2500@25/50/25、2200@30/35/35。",
	tool_macros_how_item_1: "填写每日热量（单位 kcal）。",
	tool_macros_how_item_2: "填写合计为 100 的蛋白、碳水、脂肪百分比（或点芯片）。",
	tool_macros_how_item_3: "点击「计算」，查看克数、各宏量热量与分步。",
	tool_macros_how_item_4: "用「加载样例」轮换课堂常用比例。",

	tool_macros_why_choose_title: "为什么用本站的宏量营养素计算器",
	tool_macros_why_choose_item_1: "按熟悉的 4 / 4 / 9 千卡每克，直接从热量算出克数。",
	tool_macros_why_choose_item_2: "百分比合计不是 100 时拒绝出结果，避免份额重叠或留空。",
	tool_macros_why_choose_item_3: "预设芯片只是填表快捷方式，不是饮食处方。",
	tool_macros_why_choose_item_4: "分步行同时给出各宏量热量，再除成克数，方便对作业。",
	tool_macros_why_choose_item_5: "明确 YMYL 边界：只做教学算术，不做医疗建议。",

	tool_macros_formula_title: "宏量营养素公式",
	tool_macros_formula_body: "先按百分比切分热量，再除以 Atwater 能量密度。三项百分比必须合计 100。",
	tool_macros_formula_item_1: "蛋白质克数 =（kcal × 蛋白%）÷ 4。例：2000 × 30% ÷ 4 = 150 g。",
	tool_macros_formula_item_2: "碳水克数 =（kcal × 碳水%）÷ 4。例：2000 × 40% ÷ 4 = 200 g。",
	tool_macros_formula_item_3: "脂肪克数 =（kcal × 脂肪%）÷ 9。例：2000 × 30% ÷ 9 ≈ 66.67 g。",
	tool_macros_formula_item_4: "百分比合计不是 100 时直接拒绝计算。",
	tool_macros_formula_item_5: "系数为教材平均值；标签与实验室测值可能略有差异。",

	tool_macros_example_title: "演算示例",
	tool_macros_example:
		"加载样例先给 2000 kcal、30/40/30% → 150 g / 200 g / 约 66.7 g。下一组是 1800、40/40/20；再是 2500、25/50/25；最后 2200、30/35/35。预设仅作示例。",

	tool_macros_usecases_title: "什么时候用宏量营养素计算器",
	tool_macros_usecase_1: "作业：把热量预算和百分比拆成三大营养素克数。",
	tool_macros_usecase_2: "同一总热量下，对比两种百分比方案差多少克。",
	tool_macros_usecase_3: "配合 BMR/TDEE 估算做课堂能量演算（仍非医疗建议）。",
	tool_macros_usecase_4: "换算成克数前，先核对书面方案的百分比是否真的合计 100。",

	tool_macros_faq_q1: "怎样从热量算出三大宏量的克数？",
	tool_macros_faq_a1:
		"先用热量乘各百分比得到该宏量千卡，再把蛋白/碳水千卡除以 4、脂肪千卡除以 9。例：2000、30/40/30 → 150 / 200 / 约 66.7 g。",
	tool_macros_faq_q2: "为什么百分比必须合计 100？",
	tool_macros_faq_a2: "否则热量份额会重叠或留下缺口。本页只接受合计恰好为 100 的输入。",
	tool_macros_faq_q3: "脂肪为什么要除以 9？",
	tool_macros_faq_a3: "在 Atwater 体系里，脂肪约 9 kcal/g；蛋白质与碳水化合物约 4 kcal/g。",
	tool_macros_faq_q4: "快捷比例是不是推荐饮食？",
	tool_macros_faq_a4: "不是。芯片只填充百分比输入框，不是医疗或教练建议。",
	tool_macros_faq_q5: "这算医疗建议吗？",
	tool_macros_faq_a5: "不算。本页只做教育向的能量算术，不做诊断、配餐或营养治疗。",
	tool_macros_faq_q6: "有没有算上酒精或膳食纤维修正？",
	tool_macros_faq_a6: "没有。只按蛋白、碳水、脂肪与 4/4/9 系数计算。",
	tool_macros_faq_q7: "每日热量数字从哪里来？",
	tool_macros_faq_a7: "由你自行填写。相关 BMR/TDEE 工具可作学习估算，仍不是医疗建议。",

	tool_macros_disclaimer:
		"仅供教学的热量→克数算术，不是医疗、膳食或营养治疗建议。个性化指导请咨询合格专业人士。",
	tool_macros_references: "Wikipedia 食物能量（Atwater 系数）；CDC 营养概览（教育背景）。",
	tool_macros_ref_a_label: "Wikipedia — 食物能量",
	tool_macros_ref_b_label: "CDC — 营养",
};

export default zh;
