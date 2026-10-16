/**
 * i18n 工具分片（how-to-calculate-contribution-margin / ja）。
 * 単価と単位変動費から単位貢献利益・貢献利益率を求め、任意で数量の総貢献利益、固定費の損益分岐数量を算出。
 * 教科書どおりの算数のみ。経営・税務・会計・投資の助言ではありません。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：貢献利益 / 貢献利益率 / 損益分岐数量の計算ツール文案 */
const ja: SiteLangDict = {
	tool_contribution_margin_title: "貢献利益の計算ツール — 単価・変動費から貢献利益率",
	tool_contribution_margin_description:
		"単価と単位変動費から単位貢献利益と貢献利益率を求めます。例：単価 50、変動費 30 → 貢献利益 20（率 40%）。数量を入れると総貢献利益、固定費を入れると損益分岐数量も出ます。ブラウザ内の教科書算数のみで、経営・税務・会計・投資の助言ではありません。",
	tool_contribution_margin_article:
		"単位貢献利益と貢献利益率を計算し、任意で数量から総貢献利益、固定費から損益分岐数量を求めます。",
	tool_contribution_margin_desc:
		"単価と変動費から単位貢献利益と率。任意で合計と損益分岐数量。",

	tool_contribution_margin_safety_banner:
		"学習用です。このページは教科書どおりの貢献利益の加減乗除だけを行います。経営・税務・会計・投資の助言ではありません。",
	tool_contribution_margin_hint:
		"単価は 0 より大きい必要があります。変動費は ≥ 0 かつ単価以下。数量と固定費は任意です。",
	tool_contribution_margin_price_label: "単価",
	tool_contribution_margin_price_ph: "例 50",
	tool_contribution_margin_vc_label: "単位変動費",
	tool_contribution_margin_vc_ph: "例 30",
	tool_contribution_margin_units_label: "数量（任意）",
	tool_contribution_margin_units_ph: "例 100",
	tool_contribution_margin_fixed_label: "固定費（任意）",
	tool_contribution_margin_fixed_ph: "例 10000",
	tool_contribution_margin_calculate: "計算する",
	tool_contribution_margin_sample: "サンプルを読み込む",
	tool_contribution_margin_clear: "クリア",
	tool_contribution_margin_cmOut_label: "単位貢献利益",
	tool_contribution_margin_cmrOut_label: "貢献利益率",
	tool_contribution_margin_totalOut_label: "総貢献利益",
	tool_contribution_margin_beOut_label: "損益分岐数量",
	tool_contribution_margin_steps_title: "計算の手順",
	tool_contribution_margin_step_cm_tpl: "貢献利益 = 単価 − 変動費 = {price} − {vc} = {cm}。",
	tool_contribution_margin_step_ratio_tpl:
		"貢献利益率 = 貢献利益 ÷ 単価 × 100 = {cm} ÷ {price} × 100 = {ratio}%。",
	tool_contribution_margin_step_total_tpl:
		"総貢献利益 = 単位貢献利益 × 数量 = {cm} × {units} = {total}。",
	tool_contribution_margin_step_be_tpl:
		"損益分岐数量 = 固定費 ÷ 単位貢献利益 = {fixed} ÷ {cm} = {be}。",
	tool_contribution_margin_result_note:
		"貢献利益は変動費を差し引いたあと、固定費の回収と利益に回せる残りです。多品種ミックスや税は扱いません。学習用であり、経営助言ではありません。",
	tool_contribution_margin_err_generic:
		"単価 > 0、変動費 ≥ 0 かつ単価以下（例：50 と 30）を入力してください。任意の数量は > 0、任意の固定費は ≥ 0 です。",

	tool_contribution_margin_how_title: "貢献利益計算ツールの使い方",
	tool_contribution_margin_how_body:
		"まず単価と単位変動費を入れます。合計が必要なら数量、損益分岐数量が必要なら固定費を追加します。「サンプルを読み込む」は単位のみ・数量あり・固定費あり・両方の順で切り替わります。",
	tool_contribution_margin_how_item_1: "単価と単位変動費を入力する。",
	tool_contribution_margin_how_item_2: "任意：数量を入れて総貢献利益を見る。",
	tool_contribution_margin_how_item_3:
		"任意：固定費を入れて損益分岐数量を見る（単位貢献利益 > 0 が必要）。",
	tool_contribution_margin_how_item_4: "「計算する」を押し、貢献利益・率・手順行を確認する。",

	tool_contribution_margin_why_choose_title: "この貢献利益の計算ツールを使う理由",
	tool_contribution_margin_why_choose_item_1: "単価と変動費から単位貢献利益と貢献利益率がすぐ出る。",
	tool_contribution_margin_why_choose_item_2: "数量を入れるだけで総貢献利益も見える。",
	tool_contribution_margin_why_choose_item_3: "固定費を入れると損益分岐数量も出せる。",
	tool_contribution_margin_why_choose_item_4: "手順行が入力値を式に当てはめるので、宿題の検算に使いやすい。",
	tool_contribution_margin_why_choose_item_5: "YMYL の境界を明示：学習用の算数のみで、経営助言ではない。",

	tool_contribution_margin_formula_title: "貢献利益の公式",
	tool_contribution_margin_formula_body:
		"貢献利益は単価から変動費を引いた残りで、固定費の回収と利益に使える金額です。",
	tool_contribution_margin_formula_item_1: "単位貢献利益 = 単価 − 変動費。例：50 − 30 = 20。",
	tool_contribution_margin_formula_item_2: "貢献利益率 = 単位貢献利益 ÷ 単価。例：20 ÷ 50 = 40%。",
	tool_contribution_margin_formula_item_3: "総貢献利益 = 単位貢献利益 × 数量。",
	tool_contribution_margin_formula_item_4:
		"損益分岐数量 = 固定費 ÷ 単位貢献利益（単位貢献利益 > 0 のとき）。",
	tool_contribution_margin_formula_item_5:
		"売上総利益は売上原価（COGS）ベース、貢献利益は変動費のみ——一致しないことがあります。",

	tool_contribution_margin_example_title: "計算例",
	tool_contribution_margin_example:
		"サンプルは単価 50・変動費 30 → 貢献利益 20（率 40%）から始まります。次に数量 100 → 総貢献利益 2,000。さらに固定費 10,000 → 損益分岐 500。最後に数量と固定費を同時に入れた例になります。",

	tool_contribution_margin_usecases_title: "こんなときに使う",
	tool_contribution_margin_usecase_1: "宿題：損益分岐の前に単位貢献利益を求める。",
	tool_contribution_margin_usecase_2: "変動費が変わると貢献利益率がどう動くかを見る。",
	tool_contribution_margin_usecase_3: "ある固定費を賄うのに何個必要かの目安（図解用のみ）。",
	tool_contribution_margin_usecase_4:
		"売上原価と変動費が違うときは、関連ページの売上総利益率と比較する。",

	tool_contribution_margin_faq_q1: "貢献利益はどう計算しますか？",
	tool_contribution_margin_faq_a1:
		"単位貢献利益 = 単価 − 変動費。例：50 − 30 = 20；率 = 20 ÷ 50 = 40%。",
	tool_contribution_margin_faq_q2: "売上総利益（粗利）との違いは？",
	tool_contribution_margin_faq_a2:
		"貢献利益は変動費ベース。売上総利益は売上原価（COGS）ベースで、純粋な変動費以外が含まれることがあります。",
	tool_contribution_margin_faq_q3: "数量は必須ですか？",
	tool_contribution_margin_faq_a3: "単位貢献利益には不要です。総貢献利益が欲しいときだけ数量を入れてください。",
	tool_contribution_margin_faq_q4: "ここでの損益分岐数量の求め方は？",
	tool_contribution_margin_faq_a4:
		"損益分岐数量 = 固定費 ÷ 単位貢献利益（単位貢献利益 > 0）。より本格的な損益分岐 UI は関連の損益分岐計算機を使ってください。",
	tool_contribution_margin_faq_q5: "変動費が単価を超えてもよいですか？",
	tool_contribution_margin_faq_a5:
		"単位貢献利益が負になる入力はこのページでは受け付けません。入力を見直してください。",
	tool_contribution_margin_faq_q6: "多品種ミックスは扱いますか？",
	tool_contribution_margin_faq_a6: "いいえ。製品ごとに計算するか、表計算で加重貢献利益を求めてください。",
	tool_contribution_margin_faq_q7: "これは経営助言ですか？",
	tool_contribution_margin_faq_a7:
		"いいえ。学習用の算数のみで、財務・税務・会計・投資の助言ではありません。",

	tool_contribution_margin_disclaimer:
		"貢献利益の学習用試算のみ — 財務・税務・会計・経営・投資の助言ではありません。",
	tool_contribution_margin_references:
		"学習用の背景として Investopedia の contribution margin / break-even 記事。",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default ja;
