/**
 * i18n tool shard (how-to-calculate-ideal-weight / zh)。
 * 按 03 brief 用中文独立重写，非英模同构直译。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_ideal_weight_title: '理想体重计算器 — 如何估算理想体重区间',
	tool_ideal_weight_description:
		'在同一页用 Devine、Robinson、Miller、Hamwi 估算理想体重（IBW）区间。示例：男性身高 178 cm → Devine 约 73.2 kg（各公式约 70.4–75.2 kg）。浏览器内计算，不上传数据；仅供学习参考，不构成医疗建议或诊断。',
	tool_ideal_weight_article:
		'理想体重公式只根据身高与性别给出参考体重。本页把 Devine、Robinson、Miller、Hamwi 放在同一地址对比区间，并写清非医疗免责，避免拆成多个「标准体重」薄页。',
	tool_ideal_weight_calculate: '开始估算',
	tool_ideal_weight_sample: '加载示例',
	tool_ideal_weight_clear: '清空',
	tool_ideal_weight_sex_label: '性别（公式用表）',
	tool_ideal_weight_sex_male: '男',
	tool_ideal_weight_sex_female: '女',
	tool_ideal_weight_height_label: '身高（厘米）',
	tool_ideal_weight_height_ph: '例如 178',
	tool_ideal_weight_formula_label: '公式视图',
	tool_ideal_weight_formula_all: '全部公式（区间）',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: '估算理想体重',
	tool_ideal_weight_result_range: '公式区间',
	tool_ideal_weight_result_note: '仅供学习估算，不构成医疗建议或诊断。',
	tool_ideal_weight_err_height: '身高必须大于零。',
	tool_ideal_weight_err_short: '这些 IBW 公式在约 152 cm（5 英尺）以下定义很差。结果仅作示意，请谨慎解读。',
	tool_ideal_weight_how_title: '怎么用',
	tool_ideal_weight_how_body:
		'选择性别并填写厘米身高。工具会换算成英寸再套用经典 IBW 公式，结果以公斤显示。可在本页对比各公式；BMI、体脂请用站内其他工具。',
	tool_ideal_weight_formula_title: '公式与假设',
	tool_ideal_weight_formula_body:
		'换算：1 英寸 = 2.54 cm。身高超过 60 英寸（5 英尺）时，男性 Devine = 50 + 2.3×(英寸−60)；女性 Devine = 45.5 + 2.3×(英寸−60)。Robinson、Miller、Hamwi 为同类线性式，系数不同。请注意：',
	tool_ideal_weight_formula_item_1: '公式多源于成人给药/参考场景，不是个人目标体重方案。',
	tool_ideal_weight_formula_item_2: '未建模体格、肌肉量与妊娠等因素。',
	tool_ideal_weight_formula_item_3: '结果仅为教学示意，不是临床目标或医疗建议。',
	tool_ideal_weight_example_title: '示例',
	tool_ideal_weight_example:
		'示例：男性、178 cm → Devine 约 73.2 kg；Robinson 约 71.1、Miller 约 70.4、Hamwi 约 75.2（约 70.4–75.2 kg）。',
	tool_ideal_weight_usecases_title: '适合什么场景',
	tool_ideal_weight_usecase_1: '课堂练习：同一身高对比经典 IBW 公式。',
	tool_ideal_weight_usecase_2: '咨询专业人士前，粗看参考体重量级（不是目标计划）。',
	tool_ideal_weight_usecase_3: '在同一页看 Devine 与 Robinson 差异，无需另开多个计算器。',
	tool_ideal_weight_faq_q1: '哪套理想体重公式才「正确」？',
	tool_ideal_weight_faq_a1:
		'没有放之四海皆准的一套。教学里常见 Devine；Robinson、Miller、Hamwi 系数不同。可在本页直接对比。',
	tool_ideal_weight_faq_q2: '这和 BMI 一样吗？',
	tool_ideal_weight_faq_a2:
		'不一样。BMI 用体重与身高的比值；IBW 只根据身高与性别估算参考体重。',
	tool_ideal_weight_faq_q3: '这是医疗建议吗？',
	tool_ideal_weight_faq_a3:
		'不是。数字仅供学习估算，不构成诊断、治疗方案或营养处方。',
	tool_ideal_weight_faq_q4: '为什么要换算成英寸？',
	tool_ideal_weight_faq_a4:
		'已发表的 Devine 类公式以「超过 5 英尺的英寸」定义。输入厘米后会先换算再套公式。',
	tool_ideal_weight_disclaimer:
		'理想体重结果仅为教育向示意，不构成医疗建议、诊断，也不能替代临床评估。健康相关决定请咨询具备资质的专业人士。',
	tool_ideal_weight_references:
		'经典 Devine/Robinson/Miller/Hamwi IBW 公式；NCBI Bookshelf 给药/IBW 教学背景。',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — 理想体重相关说明',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default zh;
