/**
 * i18n tool shard (how-to-calculate-percentage-change / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_percentage_change_abs_note: '絶対変化量：{delta}',
  tool_percentage_change_article: '相対パーセント変化は「基準に対してどれだけ動いたか」を答えます。旧値と新値を入れ、(新−旧)/旧×100。KPI 向けで、ROI の代替ではありません。',
  tool_percentage_change_calculate: '計算する',
  tool_percentage_change_decrease: '減少',
  tool_percentage_change_description:
    '旧値と新値から増減率を計算します。手順：両方を入力し (新−旧)/旧×100 を適用して符号を読む。例：80→100 = +25%。売上の前月比や DAU・値付け向け。百分点（ポイント）とは別物で、ROI（投資対効果）の代替でもありません。',
  tool_percentage_change_example: '完全な例：旧 80、新 100 → Δ=20 → (20/80)×100 = 25% 増加。下落：100→80 = −20%。',
  tool_percentage_change_example_title: '例',
  tool_percentage_change_faq_a1: '変化率 = (新 − 旧) / 旧 × 100。正は増加、負は減少。',
  tool_percentage_change_faq_a2: 'ゼロ除算は定義されません。基準が無いと相対変化は計算できません。',
  tool_percentage_change_faq_a3: '違います。10%→12% は +2 ポイントですが、相対では +20%。',
  tool_percentage_change_faq_a4: 'ROI は投資コストに対する利得。パーセント変化は任意の新値と旧基準の相対比較です。',
  tool_percentage_change_faq_q1: 'パーセント変化の式は？',
  tool_percentage_change_faq_q2: 'なぜ旧値が 0 だとだめ？',
  tool_percentage_change_faq_q3: '百分点（ポイント）と同じ？',
  tool_percentage_change_faq_q4: 'ROI との違いは？',
  tool_percentage_change_formula_body: '変化率 = (新 − 旧) / 旧 × 100。分母は符号付きの旧値（|旧| ではありません）。',
  tool_percentage_change_formula_item_1: 'Δ = 新 − 旧',
  tool_percentage_change_formula_item_2: 'パーセント = (Δ / 旧) × 100',
  tool_percentage_change_formula_item_3: '旧 = 0 → 未定義（エラー）',
  tool_percentage_change_formula_title: 'パーセント変化の式',
  tool_percentage_change_how_body: '基準（旧値）とあとの値を入力。差を取り、旧値で割って×100。正は増加、負は減少。旧値=0 は定義できません。',
  tool_percentage_change_how_title: '使い方の流れ',
  tool_percentage_change_increase: '増加',
  tool_percentage_change_new_label: '新値',
  tool_percentage_change_no_change: '変化なし',
  tool_percentage_change_original_label: '旧値',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change',
  tool_percentage_change_result_invalid: '旧値は 0 以外の数値である必要があります。',
  tool_percentage_change_result_label: 'パーセント変化',
  tool_percentage_change_title: 'パーセント変化の計算 — 旧値から新値への増減率',
  tool_percentage_change_usecase_1: '月次売上：先月 GMV 80、今月 100 → +25%。',
  tool_percentage_change_usecase_2: 'プロダクト：DAU が 5万→5.5万 → 相対 +10%。',
  tool_percentage_change_usecase_3: '値付け：40→34 → −15%（「6ポイント」ではない）。',
  tool_percentage_change_usecases_title: 'ビジネス・データでの使い方',
};
export default ja;
