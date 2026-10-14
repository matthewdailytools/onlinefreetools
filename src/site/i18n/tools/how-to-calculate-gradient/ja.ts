/**
 * i18n tool shard (how-to-calculate-gradient / ja).
 * 多変数関数の勾配：デモ関数で ∇f を求め、計算手順・ノルム・単位方向を示す。二点間の傾きではない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語文案辞書。 */
const ja: SiteLangDict = {
	tool_gradient_title: "勾配の計算 — 点における多変数関数の ∇f",
	tool_gradient_desc: "デモ用スカラー関数の勾配 ∇f を点 (x, y) で評価します。",
	tool_gradient_description:
		"多変数関数の勾配 ∇f（偏微分のベクトル）を計算し、過程とノルムを示します。例：f(x,y)=x²y+3y を (1,2) で評価すると ∂f/∂x=4、∂f/∂y=4 より ∇f=(4,4)、|∇f|≈5.6569。二点間の傾き計算機ではありません。",
	tool_gradient_calculate: "∇f を求める",
	tool_gradient_sample: "サンプルを読み込む",
	tool_gradient_clear: "クリア",
	tool_gradient_fn_label: "デモ関数",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "例: 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "例: 2",
	tool_gradient_result_label: "指定点での勾配",
	tool_gradient_work_label: "計算過程",
	tool_gradient_mag_label: "ノルム |∇f|",
	tool_gradient_unit_label: "単位方向",
	tool_gradient_result_note: "({x}, {y}) で評価しました。∇f は f が局所的に最も急に増える向きを指します。",
	tool_gradient_zero_mag: "∇f = 0（臨界点 — 一意な方向なし）",
	tool_gradient_invalid_input: "有限の数値 x と y を入力してください。",
	tool_gradient_how_title: "多変数関数の勾配の求め方",
	tool_gradient_how_body:
		"スカラー f(x,y) について、他変数を固定したまま各変数で微分し、偏微分を ∇f に並べ、点を代入します。枠内は固定デモ関数なので、算術手順を確認できます。",
	tool_gradient_how_item_1: "デモ関数を選び、その下に示された記号的な ∇f を読む。",
	tool_gradient_how_item_2: "ベクトルが欲しい座標 (x, y) を入力する。",
	tool_gradient_how_item_3: "「∇f を求める」をクリックする。",
	tool_gradient_how_item_4: "∇f、各偏微分の計算過程、ノルム |∇f|、単位方向を確認する。",
	tool_gradient_why_choose_title: "この勾配計算ツールを使う理由",
	tool_gradient_why_choose_item_1: "4つのデモ関数に記号的偏微分が用意済み — 空白の記号 CAS ではありません。",
	tool_gradient_why_choose_item_2: "各成分の計算過程が表示され、宿題の検算がしやすい。",
	tool_gradient_why_choose_item_3: "ノルムと単位ベクトルで、∇f と最急上昇方向を結び付けやすい。",
	tool_gradient_why_choose_item_4: "モデルが明確：多変数微積分の ∇f であり、二点間の傾きではない。",
	tool_gradient_why_choose_item_5: "ブラウザ内で動作し、何もアップロードしません。",
	tool_gradient_formula_title: "多変数関数の勾配の公式",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ)。二変数なら ∇f(x,y) = (∂f/∂x, ∂f/∂y)。∇f の向きは最急上昇、勾配降下法では −∇f を使う。",
	tool_gradient_formula_item_1: "他変数を一定に保ち、各変数について ∂f/∂xᵢ を取る。",
	tool_gradient_formula_item_2: "成分をベクトル ∇f に組み立てる。",
	tool_gradient_formula_item_3: "点で評価する。例：f=x²y+3y を (1,2) → (4, 4)。",
	tool_gradient_formula_item_4: "ノルム |∇f| = √(gx² + gy²)。例：√(16+16) = √32 ≈ 5.6569。",
	tool_gradient_example_title: "例",
	tool_gradient_example:
		"f(x,y)=x²y+3y の偏微分は ∂f/∂x=2xy、∂f/∂y=x²+3。(1,2) では ∂f/∂x=2·1·2=4、∂f/∂y=1+3=4 なので ∇f=(4,4)。ノルムは √32≈5.6569、単位方向は (4/√32, 4/√32)≈(0.7071, 0.7071)。同じ点で f=x²+y² に切り替えると ∇f=(2,4) になります。",
	tool_gradient_usecases_title: "こんなときに",
	tool_gradient_usecase_1: "最適化の一歩に入れる前に、宿題の偏微分を検算する。",
	tool_gradient_usecase_2: "勾配降下法の説明：各ステップは現在パラメータでの −∇loss 方向へ進む。",
	tool_gradient_usecase_3: "物理や場の直感：∇f はスカラー場が最も急に増える向きを指す。",
	tool_gradient_usecase_4: "単純なデモ曲面で点が臨界か（|∇f|=0）を確かめる。",
	tool_gradient_faq_q1: "多変数微積分における勾配とは？",
	tool_gradient_faq_a1:
		"勾配 ∇f は一階偏微分のベクトルです。f が局所的に最も急に増える向きを指し、長さ |∇f| がその急さです。",
	tool_gradient_faq_q2: "∇f を手計算するには？",
	tool_gradient_faq_a2:
		"他変数を固定して各変数で微分し、成分をベクトルにまとめ、点で評価します。f=x²y+3y なら (2xy, x²+3) です。",
	tool_gradient_faq_q3: "ML の勾配降下法でいう「勾配」と同じですか？",
	tool_gradient_faq_a3:
		"同じ数学的対象です：スカラー損失の ∇。降下ステップは −∇loss 方向へ進みます。本ページはデモ関数で微積分の定義を教えるもので、モデルは学習しません。",
	tool_gradient_faq_q4: "二点間の傾き（rise/run）計算機ですか？",
	tool_gradient_faq_a4:
		"いいえ。二点間の直線の傾きは傾きツール向けです。ここでの ∇f はスカラー場の多変数偏微分ベクトルです。",
	tool_gradient_faq_q5: "|∇f| = 0 は何を意味しますか？",
	tool_gradient_faq_a5:
		"勾配が消える点は臨界点で、一意な最急上昇方向がありません。f=x²+y² を (0,0) で試すと ∇f=(0,0) です。",
	tool_gradient_faq_q6: "なぜデモ関数だけなのですか？",
	tool_gradient_faq_a6:
		"任意式の記号微分には CAS が必要です。固定デモなら算術を確認でき、ページは ∇f の定義に集中できます。",
	tool_gradient_faq_q7: "sin と cos はラジアンですか、度ですか？",
	tool_gradient_faq_a7:
		"sin(x)+cos(y) デモは標準的な微積分どおりラジアンです。cos(1)≈0.5403 であり、cos(1°) ではありません。",
	tool_gradient_article:
		"多変数スカラー関数の勾配は、一階偏微分からなるベクトルです。局所的な最急上昇方向を指し、勾配に基づく最適化の基礎となります。",
	tool_gradient_references: "多変数の勾配に関する Wikipedia と Khan Academy の参考資料。",
	tool_gradient_ref_wiki_label: "Wikipedia — 勾配",
	tool_gradient_ref_khan_label: "Khan Academy — 勾配",
};

export default ja;
