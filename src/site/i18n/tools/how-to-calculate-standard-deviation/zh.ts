/**
 * i18n tool shard (how-to-calculate-standard-deviation / zh).
 * 中文独立重写：检索向 title/desc、完整 UI/How/Formula/FAQ。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_std_dev_title: '标准差计算器 — 如何计算标准差与方差',
	tool_std_dev_description:
		'粘贴一列数字，按样本（除以 n−1）或总体（除以 n）算出标准差与方差。经典例 2、4、4、4、5、5、7、9：总体标准差恰好为 2，样本标准差约 2.14。全程在浏览器本地计算，数字留在本机、不上传服务器，适合作业核对与快速查看离散程度。',
	tool_std_dev_article:
		'标准差描述数据相对均值有多散。列表是更大总体的抽样时用样本标准差（除以 n−1）；列表本身就是完整总体时用总体标准差（除以 n）。方差是标准差的平方，单位是原数据单位的平方。',
	tool_std_dev_calculate: '开始计算',
	tool_std_dev_sample: '加载示例',
	tool_std_dev_clear: '清空',
	tool_std_dev_numbers_label: '数值列表',
	tool_std_dev_numbers_ph: '例如 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: '可用逗号、空格或换行分隔。',
	tool_std_dev_mode_label: '计算模式',
	tool_std_dev_mode_sample: '样本（n−1）',
	tool_std_dev_mode_population: '总体（n）',
	tool_std_dev_result_count: '个数',
	tool_std_dev_result_mean: '平均值',
	tool_std_dev_result_variance: '方差',
	tool_std_dev_result_sd: '标准差',
	tool_std_dev_result_note_sample: '样本模式使用贝塞尔校正（除以 n−1）。',
	tool_std_dev_result_note_population: '总体模式除以 n（完整集合）。',
	tool_std_dev_err_empty: '请至少输入一个有效数字。',
	tool_std_dev_err_sample_n: '样本标准差至少需要两个数字。',
	tool_std_dev_how_title: '怎么用',
	tool_std_dev_how_body:
		'把数字粘贴进文本框，选样本或总体，再点开始计算。工具先求均值，再累加平方偏差，按 n−1 或 n 得到方差，开方即为标准差。计算在浏览器内完成，数据不上传服务器。',
	tool_std_dev_formula_title: '公式说明',
	tool_std_dev_formula_body: '设均值为 x̄。方差是平方偏差的平均；标准差是方差的算术平方根：',
	tool_std_dev_formula_item_1: '均值：x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: '样本方差：s² = Σ(xᵢ − x̄)² / (n − 1)；样本标准差 s = √s²',
	tool_std_dev_formula_item_3: '总体方差：σ² = Σ(xᵢ − x̄)² / n；总体标准差 σ = √σ²',
	tool_std_dev_example_title: '计算示例',
	tool_std_dev_example:
		'经典数据 2、4、4、4、5、5、7、9，均值 5，平方偏差之和 32。总体：σ² = 32/8 = 4 → σ = 2。样本：s² = 32/7 ≈ 4.571 → s ≈ 2.138。教材里常写的「标准差 = 2」指总体结果。',
	tool_std_dev_usecases_title: '适合什么场景',
	tool_std_dev_usecase_1: '作业：用短列表核对样本/总体标准差是否算对。',
	tool_std_dev_usecase_2: '看一小列成绩或测量值的离散程度，再决定要不要画图。',
	tool_std_dev_usecase_3: '在同一模式下对比两串短序列的波动大小。',
	tool_std_dev_faq_q1: '样本标准差和总体标准差差在哪？',
	tool_std_dev_faq_a1:
		'样本标准差除以 n−1（贝塞尔校正），用来估计更大总体的离散程度；总体标准差除以 n，适用于列表就是完整总体的情况。',
	tool_std_dev_faq_q2: '方差和标准差是什么关系？',
	tool_std_dev_faq_a2: '方差是相对均值的平方偏差平均；标准差是方差开方，单位与原始数据一致，更好读。',
	tool_std_dev_faq_q3: '为什么经典例子等于 2？',
	tool_std_dev_faq_a3:
		'对 2、4、4、4、5、5、7、9，总体标准差恰好是 2；样本（n−1）标准差约 2.14。很多教材展示的是总体值。',
	tool_std_dev_faq_q4: '数字会上传吗？',
	tool_std_dev_faq_a4: '不会。解析与运算都在浏览器标签页内完成，数字留在本机，不上传服务器。',
	tool_std_dev_references: 'Wikipedia「Standard deviation」「Variance」及常见统计学入门教材中的样本/总体公式。',
	tool_std_dev_ref_sd_label: 'Wikipedia — 标准差（Standard deviation）',
	tool_std_dev_ref_var_label: 'Wikipedia — 方差（Variance）',
};

export default zh;
