/**
 * i18n tool shard (how-to-calculate-gradient / ja). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ja: SiteLangDict = {
  tool_gradient_article: '多変数スカラー関数の勾配は一階偏導関数のベクトルで、局所的に最も急な上昇方向を指します。2点間の傾き（rise/run）計算機ではありません。',
  tool_gradient_calculate: '∇f を求める',
  tool_gradient_desc:
    'スカラー場の勾配 ∇f（偏導関数のベクトル）を求めます。手順：各変数で偏微分し ∇f を組み立て、点で評価。デモ f(x,y)=x²y+3y → ∇f=(2xy, x²+3)；点 (1,2) で (4,4)。最適化や機械学習の勾配降下の説明に。',
  tool_gradient_description:
    'スカラー場の勾配 ∇f（偏導関数のベクトル）を求めます。手順：各変数で偏微分し ∇f を組み立て、点で評価。デモ f(x,y)=x²y+3y → ∇f=(2xy, x²+3)；点 (1,2) で (4,4)。最適化や機械学習の勾配降下の説明に。',
  tool_gradient_example: 'f(x,y)=x²y+3y。偏導：∂f/∂x=2xy、∂f/∂y=x²+3。(1,2) で ∇f=(4,4)。',
  tool_gradient_example_title: '例',
  tool_gradient_faq_a1: '∇f は偏導関数のベクトルで、局所的に最も急な上昇方向を指します。',
  tool_gradient_faq_a2: '他を固定して各変数で偏微分し、ベクトルにして点で評価。',
  tool_gradient_faq_a3: '数学的には同じ：スカラー損失の ∇。このページは定義の説明で、モデル学習はしません。',
  tool_gradient_faq_a4: 'いいえ。傾き（rise/run）は別ツール。ここは偏導ベクトル ∇f です。',
  tool_gradient_faq_q1: '多変数微積分の勾配とは？',
  tool_gradient_faq_q2: '手計算の手順は？',
  tool_gradient_faq_q3: '機械学習の「勾配」と同じ？',
  tool_gradient_faq_q4: '2点の傾き計算機ですか？',
  tool_gradient_fn_hint: 'デモ関数（対話ボックス固定）：',
  tool_gradient_formula_body: '∇f = (∂f/∂x₁, …, ∂f/∂xₙ)。2変数：∇f(x,y)=(∂f/∂x, ∂f/∂y)。∇f は最急上昇、勾配降下は −∇f。',
  tool_gradient_formula_item_1: '各変数で ∂f/∂xᵢ を取る',
  tool_gradient_formula_item_2: 'ベクトル ∇f を組む',
  tool_gradient_formula_item_3: '点で各成分を評価',
  tool_gradient_formula_item_4: 'デモ：f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: '多変数勾配の式',
  tool_gradient_how_body: 'スカラー f について他変数を固定して各偏導を求め、∇f に並べ、座標を代入。ボックスは f(x,y)=x²y+3y で手計算チェック用です。',
  tool_gradient_how_title: '使い方の流れ',
  tool_gradient_invalid_input: '有限の数値 x, y を入力してください。',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_ref_wiki_label: 'Wikipedia — 勾配',
  tool_gradient_result_label: '指定点での勾配',
  tool_gradient_result_note: '({x}, {y}) で f(x,y)=x²y+3y を評価しました。',
  tool_gradient_title: '多変数の勾配 ∇f を計算 — 偏導関数ベクトル',
  tool_gradient_usecase_1: '課題の偏導を確認してから最適化ステップへ。',
  tool_gradient_usecase_2: '勾配降下の説明：各ステップは −∇loss 方向。',
  tool_gradient_usecase_3: '物理の直感：∇f はスカラー場が最も速く増える向き。',
  tool_gradient_usecases_title: '最適化・機械学習の場面',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: '例：1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: '例：2',
};
export default ja;
