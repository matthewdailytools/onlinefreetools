/**
 * i18n tool shard (how-to-calculate-percentage-change / zh). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const zh: SiteLangDict = {
  tool_percentage_change_abs_note: '绝对变化量：{delta}',
  tool_percentage_change_article: '相对百分比变化回答「相对基准涨了多少」。输入旧值与新值，使用 (新−旧)/旧×100，并标注增加或减少。适合运营指标，不能替代投资回报率（ROI）。',
  tool_percentage_change_calculate: '计算',
  tool_percentage_change_decrease: '减少',
  tool_percentage_change_description:
    '根据旧值与新值计算涨跌幅。公式：(新值 − 旧值) / 旧值 × 100。流程：输入旧值、新值，求差后除以旧值再×100，显示增减。示例：80→100 = +25%。适合月营收环比、日活、调价；注意不是「百分点」，也不同于 ROI 投资回报率。',
  tool_percentage_change_example: '完整推演：旧值 80，新值 100 → Δ=20 → (20/80)×100 = 25% 增加。下跌同理：100→80 = −20% 减少。',
  tool_percentage_change_example_title: '示例',
  tool_percentage_change_faq_a1: '百分比变化 = (新值 − 旧值) / 旧值 × 100。正为增加，负为减少。',
  tool_percentage_change_faq_a2: '除以零无定义。基准为 0 时无法计算相对该基数的百分比变化。',
  tool_percentage_change_faq_a3: '不一样。从 10% 到 12% 是上升 2 个百分点，但相对增幅是 20%（(12−10)/10×100）。',
  tool_percentage_change_faq_a4: 'ROI 用收益对比投资成本；百分比变化是任意新值相对旧基准的相对变化，不专指投资。',
  tool_percentage_change_faq_q1: '百分比变化公式是什么？',
  tool_percentage_change_faq_q2: '为什么旧值不能为 0？',
  tool_percentage_change_faq_q3: '百分比变化和百分点一样吗？',
  tool_percentage_change_faq_q4: '和 ROI 有什么区别？',
  tool_percentage_change_formula_body: '百分比变化 = (新值 − 旧值) / 旧值 × 100。本页分母用带符号的旧值（不用绝对值），在旧值为正时结果符号与涨跌方向一致。',
  tool_percentage_change_formula_item_1: 'Δ = 新值 − 旧值',
  tool_percentage_change_formula_item_2: '百分比 = (Δ / 旧值) × 100',
  tool_percentage_change_formula_item_3: '旧值 = 0 → 无定义（工具报错）',
  tool_percentage_change_formula_title: '百分比变化公式',
  tool_percentage_change_how_body: '填写基准（旧值）与之后的新值。工具做差、除以旧值、再乘 100。正为涨、负为跌。旧值为 0 时相对变化无定义。',
  tool_percentage_change_how_title: '怎么用',
  tool_percentage_change_increase: '增加',
  tool_percentage_change_new_label: '新值',
  tool_percentage_change_no_change: '无变化',
  tool_percentage_change_original_label: '旧值',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — 相对变化（Relative change）',
  tool_percentage_change_result_invalid: '旧值必须是非零数字',
  tool_percentage_change_result_label: '百分比变化',
  tool_percentage_change_title: '百分比变化计算 — 旧值到新值的涨跌幅',
  tool_percentage_change_usecase_1: '月营收环比：上月 GMV 80、本月 100 → +25%。',
  tool_percentage_change_usecase_2: '产品数据：日活从 5 万到 5.5 万 → 相对 +10%。',
  tool_percentage_change_usecase_3: '调价：标价从 40 降到 34 → −15%（不是「降 6 个百分点」那种说法）。',
  tool_percentage_change_usecases_title: '商业与数据场景',
};
export default zh;
