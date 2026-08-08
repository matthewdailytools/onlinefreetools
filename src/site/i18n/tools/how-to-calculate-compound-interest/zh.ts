/**
 * i18n tool shard (how-to-calculate-compound-interest / zh).
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_compound_interest_title: '复利计算器 — 如何计算复利终值与利息',
	tool_compound_interest_description:
		'用本金、年利率、年数与复利频率计算复利终值与利息。公式 A = P(1 + r/n)^(nt)；可切换单利对照。示例：本金 10000、年利率 5%、每年复利一次、共 10 年 → 终值约 16288.95。浏览器内计算，数据不上传；仅供学习演示，非投资建议。',
	tool_compound_interest_article:
		'复利会在已有利息上继续计息。本页给出离散复利标准公式，可用同一组输入对照单利，并写清假设，方便作业与个人粗算。',
	tool_compound_interest_calculate: '开始计算',
	tool_compound_interest_sample: '加载示例',
	tool_compound_interest_clear: '清空',
	tool_compound_interest_mode_label: '计息方式',
	tool_compound_interest_mode_compound: '复利',
	tool_compound_interest_mode_simple: '单利',
	tool_compound_interest_principal_label: '本金 (P)',
	tool_compound_interest_principal_placeholder: '例如 10000',
	tool_compound_interest_rate_label: '年利率 (%)',
	tool_compound_interest_rate_placeholder: '例如 5',
	tool_compound_interest_years_label: '时间（年）',
	tool_compound_interest_years_placeholder: '例如 10',
	tool_compound_interest_freq_label: '每年复利次数 (n)',
	tool_compound_interest_freq_1: '每年 1 次',
	tool_compound_interest_freq_2: '每半年 1 次',
	tool_compound_interest_freq_4: '每季度 1 次',
	tool_compound_interest_freq_12: '每月 1 次',
	tool_compound_interest_freq_365: '每天 1 次',
	tool_compound_interest_result_future: '终值 (A)',
	tool_compound_interest_result_interest: '利息',
	tool_compound_interest_result_note: '仅供学习演示，不是投资建议。',
	tool_compound_interest_err_principal: '本金必须大于 0。',
	tool_compound_interest_err_years: '年数必须大于 0。',
	tool_compound_interest_err_rate: '年利率须为 0 或正数。',
	tool_compound_interest_err_overflow: '结果过大。请缩短年数或降低利率后再试。',
	tool_compound_interest_how_title: '怎么用',
	tool_compound_interest_how_body:
		'输入本金、名义年利率（百分比）和年数。复利模式下选择每年计息次数，即可得到终值与利息。单利模式忽略频率，使用 A = P(1 + r t)。',
	tool_compound_interest_formula_title: '公式与假设',
	tool_compound_interest_formula_body:
		'复利：A = P (1 + r/n)^(n t)，其中 r 为小数年利率，n 为每年复利次数。单利：A = P (1 + r t)。请注意：',
	tool_compound_interest_formula_item_1: '利率为你输入的名义年利率；未扣除税费、手续费与通胀。',
	tool_compound_interest_formula_item_2: '期间没有追加存入或取出，只有期初本金增长。',
	tool_compound_interest_formula_item_3: '复利频率会影响有效增长；有效年利率概念见 FAQ，不另拆页。',
	tool_compound_interest_formula_item_4: '结果仅为教学演示，不是收益预测或投资建议。',
	tool_compound_interest_example_title: '示例',
	tool_compound_interest_example:
		'示例：本金 10000，年利率 5%，10 年，每年复利 1 次 → 终值约 16288.95，利息约 6288.95。同样输入在单利模式下终值为 15000。',
	tool_compound_interest_usecases_title: '适合什么场景',
	tool_compound_interest_usecase_1: '存款粗算：已知利率时估算一笔本金的未来余额（仅供参考）。',
	tool_compound_interest_usecase_2: '课堂作业：用固定 P、r、n、t 练习复利公式。',
	tool_compound_interest_usecase_3: '对照单利：同一组输入切换单利，看复利多滚出多少利息。',
	tool_compound_interest_faq_q1: '本页用的复利公式是什么？',
	tool_compound_interest_faq_a1: 'A = P (1 + r/n)^(n t)，r 为小数年利率，n 为每年复利次数；利息为 A − P。',
	tool_compound_interest_faq_q2: '单利和复利有什么区别？',
	tool_compound_interest_faq_a2: '单利用 A = P (1 + r t)，不计息滚息。在「计息方式」选单利即可；此时忽略频率。',
	tool_compound_interest_faq_q3: '复利频率是什么意思？',
	tool_compound_interest_faq_a3: 'n 表示一年计息几次（1=每年，12=每月，365=每天）。名义利率相同时，n 越大终值通常越高。',
	tool_compound_interest_faq_q4: '这是投资建议吗？',
	tool_compound_interest_faq_a4: '不是。结果仅供学习演示，不构成投资、税务或理财建议。',
	tool_compound_interest_faq_q5: '利率为 0 会怎样？',
	tool_compound_interest_faq_a5: '年利率为 0% 时，终值等于本金，利息为 0。',
	tool_compound_interest_disclaimer:
		'复利与单利结果仅供学习演示，不构成投资、税务或理财建议。假设增长不代表未来实际收益。',
	tool_compound_interest_references:
		'Investopedia 对 compound interest / simple interest 的定义；标准离散复利公式 A = P(1 + r/n)^(nt)。',
	tool_compound_interest_ref_compound_label: 'Investopedia — Compound Interest（复利）',
	tool_compound_interest_ref_simple_label: 'Investopedia — Simple Interest（单利）',
};

export default zh;
