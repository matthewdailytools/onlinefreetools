/**
 * i18n tool shard (how-to-calculate-break-even / zh).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_break_even_title: "盈亏平衡计算器 — 如何计算保本销量",
	tool_break_even_description: "用固定成本、销售单价与单位变动成本计算盈亏平衡销量与平衡收入，并显示单位贡献边际。示例：固定成本 10000、单价 50、单位变动成本 30 → 保本 500 件、平衡收入 25000。浏览器内计算，数据不上传；仅供学习示意，不构成经营或投资建议。",
	tool_break_even_article: "盈亏平衡点是贡献边际刚好覆盖固定成本的销量。本页公式为销量 = 固定成本 ÷（单价 − 单位变动成本），并把平衡收入与贡献边际放在同一教育页。",
	tool_break_even_calculate: "开始计算",
	tool_break_even_sample: "加载示例",
	tool_break_even_clear: "清空",
	tool_break_even_fixed_label: "固定成本",
	tool_break_even_fixed_ph: "例如 10000",
	tool_break_even_price_label: "销售单价",
	tool_break_even_price_ph: "例如 50",
	tool_break_even_var_label: "单位变动成本",
	tool_break_even_var_ph: "例如 30",
	tool_break_even_result_units: "保本销量（件）",
	tool_break_even_result_revenue: "平衡收入",
	tool_break_even_result_cm: "单位贡献边际",
	tool_break_even_result_note: "仅供学习示意，不构成经营或投资建议。",
	tool_break_even_err_fixed: "固定成本必须大于 0。",
	tool_break_even_err_price: "单价须大于 0，单位变动成本须为 0 或正数。",
	tool_break_even_err_margin: "单价必须高于单位变动成本，贡献边际才为正。",
	tool_break_even_how_title: "怎么用",
	tool_break_even_how_body: "填写固定成本、单价与单位变动成本。工具计算贡献边际、保本销量与平衡收入。零售/服务等行业只出现在场景说明里，不另开独立网址。",
	tool_break_even_formula_title: "公式与假设",
	tool_break_even_formula_body: "保本销量 Q = FC / (P − V)；平衡收入 = Q × P；单位贡献边际 = P − V。其中 FC 为固定成本，P 为单价，V 为单位变动成本。请注意：",
	tool_break_even_formula_item_1: "成本与价格视为恒定；税费、折扣与库存未建模。",
	tool_break_even_formula_item_2: "按单一产品（或平均单位）视角；产品组合变化不在此页。",
	tool_break_even_formula_item_3: "结果仅为教学示意，不是经营预测或投顾建议。",
	tool_break_even_example_title: "示例",
	tool_break_even_example: "示例：固定成本 10000、单价 50、单位变动成本 30 → 贡献边际 20 → 保本 500 件，平衡收入 25000。",
	tool_break_even_usecases_title: "适合什么场景",
	tool_break_even_usecase_1: "课堂练习：用固定 FC、P、V 练习保本销量公式。",
	tool_break_even_usecase_2: "在咨询顾问前，粗看「大概要卖多少件才覆盖固定成本」（仅示意）。",
	tool_break_even_usecase_3: "同一页查看贡献边际与平衡收入，无需另开工具。",
	tool_break_even_faq_q1: "本页用什么盈亏平衡公式？",
	tool_break_even_faq_a1: "Q = FC / (P − V)。平衡收入为 Q × P；单位贡献边际为 P − V。",
	tool_break_even_faq_q2: "单价等于变动成本时怎么办？",
	tool_break_even_faq_a2: "贡献边际为零或负，不存在有限保本销量。请提高单价或降低单位变动成本（模型内）。",
	tool_break_even_faq_q3: "这是经营建议吗？",
	tool_break_even_faq_a3: "不是。数字仅供学习示意，不构成经营、税务或投资建议。",
	tool_break_even_faq_q4: "销量平衡和收入平衡有何关系？",
	tool_break_even_faq_a4: "结果区同时给出件数与收入（件数×单价），同一页面，不是两个工具。",
	tool_break_even_disclaimer: "盈亏平衡结果仅为教育向示意，不构成经营、财务、税务或投资建议。真实业务可能含税费、折扣与成本变动，本页未建模。",
	tool_break_even_references: "Investopedia 盈亏平衡点与贡献边际释义；标准 FC/(P−V) 销量公式。",
	tool_break_even_ref_bep_label: "Investopedia — 盈亏平衡点",
	tool_break_even_ref_cm_label: "Investopedia — 贡献边际",
};

export default zh;
