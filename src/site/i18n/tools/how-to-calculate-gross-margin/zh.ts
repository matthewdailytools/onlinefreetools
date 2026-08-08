/**
 * i18n tool shard (how-to-calculate-gross-margin / zh)。
 * 中文独立检索向重写：毛利率 / 毛利 / 销货成本；非英模直译。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_gross_margin_title: '毛利率计算器 — 如何计算毛利与毛利率',
	tool_gross_margin_description:
		'用销售收入与销货成本（COGS）计算毛利金额与毛利率百分比，并把毛利与毛利率放在同一结果区便于对照。示例：收入 10000、销货成本 6000 → 毛利 4000、毛利率 40%。浏览器内计算，数据不上传；仅供学习示意，不构成经营或投资建议。',
	tool_gross_margin_article:
		'毛利率反映扣除销货成本后，收入还剩多少比例。本页把毛利金额与毛利率放在同一教育页；净利润率、营业利润率请用其他工具，不并入本 URL。',
	tool_gross_margin_calculate: '计算',
	tool_gross_margin_sample: '加载示例',
	tool_gross_margin_clear: '清空',
	tool_gross_margin_revenue_label: '销售收入',
	tool_gross_margin_revenue_ph: '例如 10000',
	tool_gross_margin_cogs_label: '销货成本（COGS）',
	tool_gross_margin_cogs_ph: '例如 6000',
	tool_gross_margin_result_profit: '毛利',
	tool_gross_margin_result_margin: '毛利率',
	tool_gross_margin_result_note: '仅供学习示意，不构成经营或投资建议。',
	tool_gross_margin_err_revenue: '销售收入必须大于 0。',
	tool_gross_margin_err_cogs: '销货成本须为 0 或正数。',
	tool_gross_margin_how_title: '怎么用',
	tool_gross_margin_how_body:
		'填写销售收入与销货成本，即可得到毛利与毛利率。加价率与净利润对照放在 FAQ，不另开近义 URL。',
	tool_gross_margin_formula_title: '公式与假设',
	tool_gross_margin_formula_body:
		'毛利 = 销售收入 − 销货成本。毛利率% = 毛利 ÷ 销售收入 × 100。假设如下：',
	tool_gross_margin_formula_item_1: '收入与成本同一期间、同一币种；税费与期间费用未建模。',
	tool_gross_margin_formula_item_2: '销货成本仅指产品成本，不含销售管理费用与利息。',
	tool_gross_margin_formula_item_3: '结果仅为教育示意，不是预测或经营建议。',
	tool_gross_margin_example_title: '示例',
	tool_gross_margin_example: '示例：收入 10000、销货成本 6000 → 毛利 4000 → 毛利率 40%。',
	tool_gross_margin_usecases_title: '适用场景',
	tool_gross_margin_usecase_1: '课堂练习：用固定收入与成本练习毛利率公式。',
	tool_gross_margin_usecase_2: '产品毛利粗算示意（咨询顾问前仅作学习，不作决策依据）。',
	tool_gross_margin_usecase_3: '同一页同时看毛利金额与毛利率，无需单独加价率工具页。',
	tool_gross_margin_faq_q1: '本页用什么毛利率公式？',
	tool_gross_margin_faq_a1: '毛利 = 收入 − 销货成本；毛利率% = 毛利 ÷ 收入 × 100。',
	tool_gross_margin_faq_q2: '销货成本大于收入会怎样？',
	tool_gross_margin_faq_a2: '毛利与毛利率为负，模型允许显示亏损情形，仍非经营建议。',
	tool_gross_margin_faq_q3: '这是经营或投资建议吗？',
	tool_gross_margin_faq_a3: '不是。数字仅供学习示意，不构成经营、税务或投资建议。',
	tool_gross_margin_faq_q4: '毛利率和加价率有何不同？',
	tool_gross_margin_faq_a4: '毛利率用利润除以收入；加价率用利润除以成本。本页聚焦毛利率，加价率仅在 FAQ 说明，不拆第二 URL。',
	tool_gross_margin_disclaimer:
		'毛利率结果仅为教育向示意，不构成经营、财务、税务或投资建议。真实业务可能含税费、折扣与成本分类差异，本页未建模。',
	tool_gross_margin_references: 'Investopedia 毛利率与毛利定义；标准（收入 − 销货成本）/ 收入公式。',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin（毛利率）',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit（毛利）',
};

export default zh;
