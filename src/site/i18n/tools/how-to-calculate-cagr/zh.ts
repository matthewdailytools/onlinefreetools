/**
 * i18n tool shard (how-to-calculate-cagr / zh).
 * 中文独立重写：检索向 title/desc、完整 UI/How/Formula/FAQ，含 YMYL 非投资建议声明。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_cagr_title: 'CAGR 计算器 — 如何计算复合年增长率',
	tool_cagr_description:
		'根据期初金额、期末金额与持有年数，用标准公式算出 CAGR（复合年增长率 / 年化增长率）。示例：期初 10000、期末 16105.10、共 5 年 → 约 10.00%。全程在浏览器本地计算，数据不上传服务器；结果仅供学习演示，不构成投资、理财或税务建议。',
	tool_cagr_article:
		'CAGR 是把期初值在若干年内“匀速复利”滚到期末值时，对应的恒定年化增长率。适合粗略对比多年增长；它不是预测，也不计入中途追加或取出的现金流。',
	tool_cagr_calculate: '开始计算',
	tool_cagr_sample: '加载示例',
	tool_cagr_clear: '清空',
	tool_cagr_begin_label: '期初值',
	tool_cagr_begin_ph: '例如 10000',
	tool_cagr_end_label: '期末值',
	tool_cagr_end_ph: '例如 16105.10',
	tool_cagr_years_label: '年数',
	tool_cagr_years_ph: '例如 5',
	tool_cagr_result_label: 'CAGR',
	tool_cagr_result_note: '仅供学习演示，不是投资建议。',
	tool_cagr_err_begin: '期初值必须大于 0。',
	tool_cagr_err_end: '期末值必须大于 0。',
	tool_cagr_err_years: '年数必须大于 0。',
	tool_cagr_how_title: '怎么用',
	tool_cagr_how_body:
		'填入大于 0 的期初值、期末值与年数，点开始计算即可得到 CAGR 百分比。工具按标准复合年增长率公式运算；零或负数会提示错误。计算在浏览器内完成，仅作教学演示。',
	tool_cagr_formula_title: '公式与假设',
	tool_cagr_formula_body:
		'CAGR = ((期末值 ÷ 期初值)^(1 ÷ 年数) − 1) × 100。使用时请记住：',
	tool_cagr_formula_item_1: '按每年复利一次处理，年内具体时点忽略。',
	tool_cagr_formula_item_2: '不考虑中途存入或取出，只看期初、期末与年数。',
	tool_cagr_formula_item_3: '结果是教学示意，不是收益预测或投资建议。',
	tool_cagr_example_title: '示例',
	tool_cagr_example:
		'示例：期初 10000，期末 16105.10，年数 5 → CAGR = ((16105.10 / 10000)^(1/5) − 1) × 100 ≈ 10.00%。',
	tool_cagr_usecases_title: '适合什么场景',
	tool_cagr_usecase_1: '把多年投资或营收变化折成年化口径，做粗略对照（仅示意）。',
	tool_cagr_usecase_2: '课堂作业：用固定期初、期末与年数练习 CAGR 百分比。',
	tool_cagr_usecase_3: '见顾问前先画一张年化草图——不能代替完整分析。',
	tool_cagr_faq_q1: '本页用的 CAGR 公式是什么？',
	tool_cagr_faq_a1:
		'CAGR = ((期末值 ÷ 期初值)^(1 ÷ 年数) − 1) × 100。期初、期末与年数都必须大于 0。',
	tool_cagr_faq_q2: 'CAGR 和简单 ROI 有什么不同？',
	tool_cagr_faq_a2:
		'简单 ROI 只看一段涨跌百分比，不看经历了多少年。CAGR 会按你填的年数做年化。',
	tool_cagr_faq_q3: '期初或期末为 0 或负数可以算吗？',
	tool_cagr_faq_a3:
		'不可以。本计算器要求两端金额都大于 0；零或负数会使标准 CAGR 公式无意义或误导。',
	tool_cagr_faq_q4: '这是投资建议吗？',
	tool_cagr_faq_a4:
		'不是。数字仅供学习演示，不构成投资、税务或理财建议。历史或假设增长不保证未来结果。',
	tool_cagr_disclaimer:
		'CAGR 结果仅供学习演示，不构成投资、税务或理财建议。历史或假设收益不代表未来表现。真实组合还会面临费用、税费、现金流与风险，本页均未建模。',
	tool_cagr_references:
		'Investopedia 对 CAGR 的定义与公式说明；标准年化增长率 ((EV/BV)^(1/n) − 1)。',
	tool_cagr_ref_cagr_label: 'Investopedia — Compound Annual Growth Rate（CAGR）',
	tool_cagr_ref_formula_label: 'Investopedia — 如何计算 CAGR 的公式',
};

export default zh;
