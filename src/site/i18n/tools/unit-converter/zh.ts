/**
 * i18n tool shard (unit-converter / zh)。
 * 中文检索向重写：单位换算器；类别落正文/Tab，不进 H1 顿号枚举。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_unit_converter_title: '单位换算器 — 长度 / 质量 / 温度 / 面积 / 体积 / 速度',
	tool_unit_converter_description:
		'在同一页完成长度、质量、温度、面积、体积与速度换算，并给出常用换算因子与温度公式说明，避免为每一对单位单独开页。示例：1 英里 → 1.60934 公里；0 °C → 32 °F。浏览器内计算，数据不上传；仅供学习示意，不能替代测绘仪或医疗设备。',
	tool_unit_converter_article:
		'通用换算枢纽把常见类别放在同一网址，避免为「厘米换英寸」等每一对单位单独开页。需要「长×宽算面积」的装修/房产场景请用平方英尺工具。',
	tool_unit_converter_calculate: '换算',
	tool_unit_converter_sample: '加载示例',
	tool_unit_converter_clear: '清空',
	tool_unit_converter_value_label: '数值',
	tool_unit_converter_value_ph: '例如 1',
	tool_unit_converter_from_label: '源单位',
	tool_unit_converter_to_label: '目标单位',
	tool_unit_converter_category_label: '类别',
	tool_unit_converter_cat_length: '长度',
	tool_unit_converter_cat_mass: '质量',
	tool_unit_converter_cat_temperature: '温度',
	tool_unit_converter_cat_area: '面积',
	tool_unit_converter_cat_volume: '体积',
	tool_unit_converter_cat_speed: '速度',
	tool_unit_converter_result_label: '结果',
	tool_unit_converter_result_note: '仅供学习示意，不能作为认证测量结果。',
	tool_unit_converter_err_value: '请输入有效数字。',
	tool_unit_converter_err_temp: '温度低于所选温标的绝对零度，无法换算。',
	tool_unit_converter_how_title: '怎么用',
	tool_unit_converter_how_body:
		'先选类别，再填数值并选择源/目标单位后换算。面积单位互转在本页；长×宽求面积请用平方英尺工具。',
	tool_unit_converter_formula_title: '换算因子与温度公式',
	tool_unit_converter_formula_body:
		'线性类别经 SI 基准单位换算（如米、千克、平方米）。温度使用温标公式。假设如下：',
	tool_unit_converter_formula_item_1: '因子采用常见 SI/惯用定义（如 1 英里 = 1609.344 米；体积用美制加仑）。',
	tool_unit_converter_formula_item_2: '摄氏↔华氏↔开尔文：F = C×9/5+32；K = C+273.15；反向同理。',
	tool_unit_converter_formula_item_3: '结果仅为教育示意，不是认证测绘或实验测量。',
	tool_unit_converter_example_title: '示例',
	tool_unit_converter_example: '示例（长度）：1 英里 → 1.60934 公里。温度示例：0 °C → 32 °F。',
	tool_unit_converter_usecases_title: '适用场景',
	tool_unit_converter_usecase_1: '作业：公里与英里互转，无需为每一对单位新开网页。',
	tool_unit_converter_usecase_2: '烹饪或行李重量体积的粗算（近似即可）。',
	tool_unit_converter_usecase_3: '天气记录换温标——不可用于给药剂量。',
	tool_unit_converter_faq_q1: '为什么不为每一对单位单独做一页？',
	tool_unit_converter_faq_a1:
		'海量近义换算页容易变成门口页。本枢纽集中常见类别；长×宽面积场景请用平方英尺工具。',
	tool_unit_converter_faq_q2: '英里和加仑用哪套定义？',
	tool_unit_converter_faq_a2: '国际英里（1609.344 米）与美制液体加仑（3.785411784 升）。其他定义不在本页范围。',
	tool_unit_converter_faq_q3: '温度怎么换算？',
	tool_unit_converter_faq_a3: '以摄氏为中间量：F = C×9/5+32，K = C+273.15。低于绝对零度会拒绝。',
	tool_unit_converter_faq_q4: '和平方英尺工具有什么区别？',
	tool_unit_converter_faq_a4: '本页直接换面积单位；平方英尺工具侧重长×宽求面积及房产/装修场景。',
	tool_unit_converter_disclaimer:
		'换算结果仅为使用标准因子的教育示意，不是认证测量，亦不构成测绘签核或医疗建议。',
	tool_unit_converter_references: 'NIST SI 单位关系；常见惯用因子；摄氏/华氏/开尔文标准公式。',
	tool_unit_converter_ref_nist_label: 'NIST — SI 单位',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default zh;
