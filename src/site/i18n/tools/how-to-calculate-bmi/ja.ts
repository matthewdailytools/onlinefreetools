/**
 * i18n tool shard (how-to-calculate-bmi / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_bmi_article: '体重と身長から成人のBMIをどう求めるか、メートル法・ヤード・ポンド法の式、区分の目安、アスリート・子どもなどの限界を説明します。計算はブラウザ内で完結し、データは送信しません。',
  tool_bmi_calculate: 'BMIを計算',
  tool_bmi_description:
    '成人向けの体格指数（BMI）を式で算出します。手順：メートル法かヤード・ポンド法を選び、体重と身長を入力して計算し、一般的な成人区分と照合。例：70 kg・175 cm → BMI 約22.9（標準）。学習・ざっくり確認用で、診断ではありません。',
  tool_bmi_disclaimer: '本BMI計算は成人向けの学習・参考用です。医療アドバイスではなく、診断や資格を持つ医療者の判断に代わるものではありません。',
  tool_bmi_example: '例（メートル法）：体重 70 kg、身長 175 cm → 身長 = 1.75 m → BMI = 70 / (1.75²) ≈ 22.9 → 標準の区分。',
  tool_bmi_example_title: '例',
  tool_bmi_faq_a1: 'メートル法：BMI = 体重(kg) / 身長(m)²。ヤード・ポンド法：BMI = 703 × 体重(lb) / 身長(in)²。',
  tool_bmi_faq_a2: '成人向けの目安：低体重 <18.5、標準 18.5–24.9、過体重 25–29.9、肥満 ≥30。参考区分であり診断ではありません。',
  tool_bmi_faq_a3: '必ずしも当てはまりません。BMIは筋肉と脂肪を区別しません。筋肉量が多い人は高い区分でも体脂肪は低いことがあります。個別評価は専門家へ。',
  tool_bmi_faq_a4: 'このページの成人区分は、子ども・思春期・妊娠には向きません。年齢別チャートと医療の指示に従ってください。',
  tool_bmi_faq_q1: 'BMIの計算式は？',
  tool_bmi_faq_q2: '区分の意味は？',
  tool_bmi_faq_q3: 'アスリートにも当てはまりますか？',
  tool_bmi_faq_q4: '子どもや妊娠中にも使えますか？',
  tool_bmi_formula_body: 'メートル法：BMI = 体重(kg) ÷ 身長(m)²。ヤード・ポンド法：BMI = 703 × 体重(lb) ÷ 身長(in)²。ここでは広く使われる成人向け区分を採用しています。',
  tool_bmi_formula_item_1: '低体重：BMI < 18.5',
  tool_bmi_formula_item_2: '標準：BMI 18.5–24.9',
  tool_bmi_formula_item_3: '過体重：BMI 25–29.9',
  tool_bmi_formula_item_4: '肥満：BMI ≥ 30',
  tool_bmi_formula_title: 'BMIの式と成人区分',
  tool_bmi_height_label: '身長（cm）',
  tool_bmi_height_placeholder: '身長をセンチメートルで入力',
  tool_bmi_how_body: 'メートル法かヤード・ポンド法を選び、体重と身長を入力して計算します。成人向けBMI式で小数第1位まで表示し、一般的な区分に当てはめます。数値は端末内で処理され、アップロードされません。',
  tool_bmi_how_title: '使い方',
  tool_bmi_ref_cdc_label: 'CDC — 成人BMI区分',
  tool_bmi_ref_who_label: 'WHO — 肥満と過体重の概要',
  tool_bmi_references: 'WHO 肥満・過体重の概要；CDC 成人BMI区分；メートル法・ヤード・ポンド法の標準BMI式。',
  tool_bmi_title: 'BMI計算ツール — 体格指数の求め方',
  tool_bmi_usecase_1: '定期健診の前に、成人としてざっくり自己確認（参考値のみ）。',
  tool_bmi_usecase_2: 'フィットネス開始時に、他の指標と一緒に基準BMIを記録する。',
  tool_bmi_usecase_3: '同じ測定値をメートル法とヤード・ポンド法で突き合わせる。',
  tool_bmi_usecases_title: 'こんなときに',
  tool_bmi_weight_label: '体重（kg）',
  tool_bmi_weight_placeholder: '体重をキログラムで入力',
};
export default ja;
