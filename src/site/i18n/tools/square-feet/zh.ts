/**
 * i18n tool shard (square-feet / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_squarefeet_article: '用长×宽估算矩形平面面积，并在平方英尺与平方米之间换算。面向看美式房源、估地板/油漆用量；不做房价估价，也不区分套内与建筑面积口径。',
  tool_squarefeet_calculate: '开始换算',
  tool_squarefeet_description:
    '把房源或图纸上的平方英尺换成平方米（或反过来），方便看房与装修估料。流程：选英尺/米/英寸，输入长×宽，算出面积，再按 1 ft² = 0.09290304 m² 给出平方米。示例：850 平方英尺公寓 ≈ 78.97 m²，便于对照本地挂牌。',
  tool_squarefeet_example:
    '房源例：850 平方英尺公寓 → 850 × 0.09290304 ≈ 78.97 m²。房间例：10 ft × 12 ft = 120 sq ft ≈ 11.15 m²，方便对照本地按平方米挂牌的广告。',
  tool_squarefeet_example_title: '示例',
  tool_squarefeet_faq_a1: '精确使用 1 ft² = 0.09290304 m²（SI / NIST）。页面显示结果保留两位小数。',
  tool_squarefeet_faq_a2: '不会。本工具只做矩形平面面积的单位换算，不定义套内/建筑等挂牌口径。',
  tool_squarefeet_faq_a3: '不能。面积换算不是估价、评估或「每平米房价」模型。',
  tool_squarefeet_faq_a4: '拆成多个矩形分别换算再相加。不规则多边形不在本工具范围内。',
  tool_squarefeet_faq_q1: '平方英尺和平方米用哪个换算因子？',
  tool_squarefeet_faq_q2: '会区分套内面积和建筑面积吗？',
  tool_squarefeet_faq_q3: '能用来估房价吗？',
  tool_squarefeet_faq_q4: 'L 形房间怎么办？',
  tool_squarefeet_formula_body: '面积（ft²）= 长（ft）× 宽（ft）。米制输入：ft² = (L×W) ÷ 0.09290304。英寸输入：先各自 ÷12。精确因子：1 ft² = 0.09290304 m²。',
  tool_squarefeet_formula_item_1: '英尺输入：面积_ft² = L × W',
  tool_squarefeet_formula_item_2: '米输入：面积_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: '英寸输入：面积_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = 面积_ft² × 0.09290304（NIST / SI）',
  tool_squarefeet_formula_title: '面积公式与换算因子',
  tool_squarefeet_how_body: '先选尺寸单位（英尺、米或英寸），输入长和宽。工具先换算到英尺再算面积，再用精确 SI 因子换算平方米。空值或负数会提示错误。',
  tool_squarefeet_how_title: '怎么用',
  tool_squarefeet_invalid_input: '请输入大于 0 的长度和宽度。',
  tool_squarefeet_length_label: '长度',
  tool_squarefeet_length_placeholder: '请输入长度',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — 国际单位制（SI）使用指南',
  tool_squarefeet_result_note: '结果保留两位小数。换算因子：1 ft² = 0.09290304 m²。',
  tool_squarefeet_result_sqm: '≈ {sqm} 平方米',
  tool_squarefeet_title: '平方英尺转平方米 — 看房与装修面积换算',
  tool_squarefeet_unit_group_label: '输入单位',
  tool_squarefeet_usage: '选择单位后输入长宽，得到平方英尺及对应平方米，便于看房对照或装修估料。',
  tool_squarefeet_usage_title: '用法',
  tool_squarefeet_usecase_1: '看美式房源时，把 sq ft 换成当地习惯的平方米再对比。',
  tool_squarefeet_usecase_2: '矩形房间地板/地毯下单前粗算面积。',
  tool_squarefeet_usecase_3: '图纸混用单位时，粗算油漆或装修用量。',
  tool_squarefeet_usecases_title: '适合什么场景',
  tool_squarefeet_width_label: '宽度',
  tool_squarefeet_width_placeholder: '请输入宽度',
};
export default zh;
