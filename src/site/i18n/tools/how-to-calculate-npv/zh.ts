/**
 * i18n tool shard (how-to-calculate-npv / zh).
 * 中文独立重写：检索向 title/desc、完整 UI/How/Formula/FAQ，含 YMYL 非投资建议声明。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_npv_title: 'NPV 计算器 — 如何计算净现值',
	tool_npv_description:
		'按年折现率、初始投资与逐年现金流，用标准公式计算 NPV（净现值）。示例：投入 10000、年折现率 10%、现金流 3000 / 4200 / 6800 → 净现值约 1307.29。全程在浏览器本地计算，数据不上传服务器；结果仅供学习演示，不构成投资、理财或税务建议。',
	tool_npv_article:
		'净现值（NPV）把未来各期现金流按选定年折现率折回今天，再减去初始投资。正 NPV 只表示在你设定的假设下，折现后的流入大于流出；它不是预测，也不是买入建议。',
	tool_npv_calculate: '开始计算',
	tool_npv_sample: '加载示例',
	tool_npv_clear: '清空',
	tool_npv_rate_label: '折现率（每年 %）',
	tool_npv_rate_ph: '例如 10',
	tool_npv_invest_label: '初始投资（流出）',
	tool_npv_invest_ph: '例如 10000',
	tool_npv_cf_label: '各年现金流（逗号或换行）',
	tool_npv_cf_ph: '例如 3000, 4200, 6800',
	tool_npv_cf_hint: '按第 1…n 年填写 CF1…CFn。正数为流入，后续流出可填负数。',
	tool_npv_result_label: '净现值 NPV',
	tool_npv_result_note: '仅供学习演示，不是投资建议。',
	tool_npv_err_rate: '请填写有效的年折现率（百分比）。不允许 −100% 及以下。',
	tool_npv_err_invest: '初始投资必须大于 0。',
	tool_npv_err_cf: '请至少填写一个可解析的现金流数字（用逗号或换行分隔）。',
	tool_npv_how_title: '怎么用',
	tool_npv_how_body:
		'填入年折现率、大于 0 的初始投资（视为时点 0 的流出），以及第 1…n 年的现金流列表，点开始计算即可得到 NPV。计算在浏览器内完成，仅作教学演示。',
	tool_npv_formula_title: '公式与假设',
	tool_npv_formula_body:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ)，t = 1…n，其中 r 为年折现率的小数形式。使用时请记住：',
	tool_npv_formula_item_1: '现金流按年末发生处理，年内具体时点忽略。',
	tool_npv_formula_item_2: '各年折现率相同；税费、费用与通胀除非你自行并入 r 或现金流，否则不建模。',
	tool_npv_formula_item_3: '结果是教学示意，不是收益预测或投资建议。',
	tool_npv_example_title: '示例',
	tool_npv_example:
		'示例：初始投资 10000，年折现率 10%，现金流 3000 / 4200 / 6800 → NPV = −10000 + 3000/1.1 + 4200/1.1² + 6800/1.1³ ≈ 1307.29。',
	tool_npv_usecases_title: '适合什么场景',
	tool_npv_usecase_1: '项目粗筛：在给定折现率下，对照折现流入与前期投入（仅示意）。',
	tool_npv_usecase_2: '课堂作业：用固定折现率与短现金流列表练习 NPV 求和。',
	tool_npv_usecase_3: '见顾问前先看多年现金流是否越过门槛利率——不能代替完整分析。',
	tool_npv_faq_q1: '本页用的 NPV 公式是什么？',
	tool_npv_faq_a1:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ)。I₀ 为初始投资（正数流出），r 为年折现率小数，CFₜ 为第 1…n 年现金流。',
	tool_npv_faq_q2: 'NPV 和简单 ROI、CAGR 有什么不同？',
	tool_npv_faq_a2:
		'简单 ROI 是单期收益率；CAGR 是两端金额的年化增长率。NPV 对一串现金流折现，结果是金额，不是增长率。',
	tool_npv_faq_q3: '现金流要怎么填？',
	tool_npv_faq_a3:
		'用逗号或换行列出第 1 年到第 n 年金额。正数为流入，负数表示后续流出。至少需要一个有效数字。',
	tool_npv_faq_q4: '这是投资建议吗？',
	tool_npv_faq_a4:
		'不是。数字仅供学习演示，不构成投资、税务或理财建议。在你输入下算出正 NPV，也不保证现实中盈利。',
	tool_npv_disclaimer:
		'NPV 结果仅供学习演示，不构成投资、税务或理财建议。本页对折现率、现金流时点、费用、税费与风险做了简化。历史或假设数字不代表未来表现。',
	tool_npv_references:
		'Investopedia 对 NPV 的定义，以及现值与净现值差异说明；标准贴现现金流 NPV 公式。',
	tool_npv_ref_npv_label: 'Investopedia — Net Present Value（NPV）',
	tool_npv_ref_pv_label: 'Investopedia — 现值与净现值的区别',
};

export default zh;
