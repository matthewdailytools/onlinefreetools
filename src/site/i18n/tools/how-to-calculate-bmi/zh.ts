/**
 * i18n tool shard (how-to-calculate-bmi / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_bmi_article: '本工具说明成人 BMI 如何由体重与身高算出，含公制/英制公式、分类切点，以及运动员、儿童等局限。计算在浏览器本地完成，不上传数据。',
  tool_bmi_calculate: '计算 BMI',
  tool_bmi_description:
    '用成人筛查公式在线计算身体质量指数（BMI）。流程：选择公制或英制单位，输入体重与身高，按公式算出 BMI，再对照偏瘦/正常/超重/肥胖等常见成人分类。示例：70 公斤、175 厘米 → BMI 约 22.9（正常）。本工具仅供学习与筛查参考，不能替代医疗诊断。',
  tool_bmi_disclaimer: '本 BMI 计算器仅供成人学习与筛查参考，不构成医疗建议，不能替代具备资质的医疗专业人士意见。',
  tool_bmi_example: '示例（公制）：体重 70 kg，身高 175 cm → 身高 = 1.75 m → BMI = 70 / (1.75²) ≈ 22.9 → 正常筛查区间。',
  tool_bmi_example_title: '示例',
  tool_bmi_faq_a1: '公制：BMI = 体重(kg) / 身高(m)²；英制：BMI = 703 × 体重(lb) / 身高(in)²。',
  tool_bmi_faq_a2: '成人常用筛查切点：偏瘦 <18.5，正常 18.5–24.9，超重 25–29.9，肥胖 ≥30。这是筛查参考，不是诊断。',
  tool_bmi_faq_a3: '不能保证。BMI 不区分肌肉与脂肪。运动员可能 BMI 偏高但体脂偏低，请咨询专业人士做个体评估。',
  tool_bmi_faq_a4: '本页成人切点不适用于儿童、青少年或孕期。请使用年龄专用图表并遵循临床指导。',
  tool_bmi_faq_q1: 'BMI 公式是什么？',
  tool_bmi_faq_q2: 'BMI 分类代表什么？',
  tool_bmi_faq_q3: '运动员的 BMI 准吗？',
  tool_bmi_faq_q4: '儿童或孕期能用这套切点吗？',
  tool_bmi_formula_body: '公制：BMI = 体重(kg) ÷ 身高(m)²。英制：BMI = 703 × 体重(lb) ÷ 身高(in)²。本页成人切点采用常见公开筛查区间。',
  tool_bmi_formula_item_1: '偏瘦：BMI < 18.5',
  tool_bmi_formula_item_2: '正常：BMI 18.5–24.9',
  tool_bmi_formula_item_3: '超重：BMI 25–29.9',
  tool_bmi_formula_item_4: '肥胖：BMI ≥ 30',
  tool_bmi_formula_title: 'BMI 公式与成人分类',
  tool_bmi_height_label: '身高（厘米）',
  tool_bmi_height_placeholder: '请输入身高（cm）',
  tool_bmi_how_body: '先选公制或英制，输入体重与身高后计算。工具按成人 BMI 公式得出一位小数，并映射到常见筛查分类。数值在本地计算，不会上传。',
  tool_bmi_how_title: '怎么用',
  tool_bmi_ref_cdc_label: 'CDC — 成人 BMI 分类',
  tool_bmi_ref_who_label: 'WHO — 超重与肥胖概况',
  tool_bmi_references: '世界卫生组织超重与肥胖概况；CDC 成人 BMI 分类指引；公制/英制 BMI 标准公式。',
  tool_bmi_title: 'BMI 计算器 — 如何计算身体质量指数',
  tool_bmi_usecase_1: '常规体检前做一次成人自查（仅筛查参考）。',
  tool_bmi_usecase_2: '健身入门时记录基线 BMI，并与其他指标一起看。',
  tool_bmi_usecase_3: '同一组测量在公制与英制之间核对换算。',
  tool_bmi_usecases_title: '适合什么场景',
  tool_bmi_weight_label: '体重（公斤）',
  tool_bmi_weight_placeholder: '请输入体重（kg）',
};
export default zh;
