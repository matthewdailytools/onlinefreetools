/**
 * i18n ツール断片（how-to-calculate-discount / ja）。
 * 割引率からセール価格、2価格から割引率、または割引後から定価を逆算。
 * 任意の二重割引（積み上げ）対応。教育用の買い物算数であり、レジや税務助言ではない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：割引・セール価格の計算ツール文言 */
const ja: SiteLangDict = {
	tool_discount_title: "割引計算ツール — セール価格や割引率を求める",
	tool_discount_description:
		"定価と割引率からセール価格を出したり、レシートから定価を逆算したり、2つの価格の差から割引率を測れます。例：定価 100、20% オフ → セール価格 80。任意の2回目割引は値引き後の価格に積み上げます。買い物の算数学習用であり、店舗レジや税計算エンジンではありません。",
	tool_discount_article:
		"割引率からセール価格、2価格間の割引率、または割引後合計から定価を逆算。任意の二重割引と手順付きの式展開。",
	tool_discount_desc:
		"セール価格・割引率・定価を相互に計算。2回目割引の積み上げと実効割引率も表示。",

	tool_discount_mode_label: "何を求めますか？",
	tool_discount_mode_sale: "割引率からセール価格",
	tool_discount_mode_pct: "2価格から割引率",
	tool_discount_mode_original: "セール価格と割引率から定価",
	tool_discount_hint:
		"すでに分かっている2つの値に合うモードを選んでください。2回目の割引を入れると、値引き後の価格に掛けます（積み上げ）。定価へもう一度掛けるのではありません。",
	tool_discount_original_label: "定価（元の価格）",
	tool_discount_original_ph: "例: 100",
	tool_discount_sale_label: "セール / 最終価格",
	tool_discount_sale_ph: "例: 80",
	tool_discount_pct_label: "割引（%オフ）",
	tool_discount_pct_ph: "例: 20",
	tool_discount_pct2_label: "2回目の割引 %（任意）",
	tool_discount_pct2_ph: "例: 10",
	tool_discount_chips_label: "よく使う割引率ショートカット",
	tool_discount_chip_10: "10%オフ",
	tool_discount_chip_15: "15%オフ",
	tool_discount_chip_20: "20%オフ",
	tool_discount_chip_25: "25%オフ",
	tool_discount_chip_50: "50%オフ",
	tool_discount_calculate: "計算する",
	tool_discount_sample: "サンプルを読み込む",
	tool_discount_clear: "クリア",
	tool_discount_finalOut_label: "セール価格",
	tool_discount_savedOut_label: "節約額",
	tool_discount_pctOut_label: "割引率",
	tool_discount_originalOut_label: "定価",
	tool_discount_effectiveOut_label: "実効割引率",
	tool_discount_steps_title: "計算手順",
	tool_discount_step_sale_tpl: "1回目の割引後: {original} × (1 − {pct}/100) = {mid}。",
	tool_discount_step_sale2_tpl: "2回目割引を積み上げ: {mid} × (1 − {pct2}/100) = {final}。",
	tool_discount_step_saved_tpl: "節約額 = 定価 − セール価格 = {original} − {final} = {saved}。",
	tool_discount_step_pct_tpl:
		"割引率 = (定価 − セール価格) ÷ 定価 × 100 = ({original} − {sale}) ÷ {original} × 100 = {pct}%。",
	tool_discount_step_original_tpl:
		"定価 = セール価格 ÷ (1 − 割引率/100) = {sale} ÷ (1 − {pct}/100) = {original}。",
	tool_discount_step_effective_tpl:
		"実効割引率 = (定価 − 最終価格) ÷ 定価 × 100 = ({original} − {final}) ÷ {original} × 100 = {eff}%。",
	tool_discount_result_note:
		"2回目割引があれば、すでに値引きされた価格に適用します（積み上げ）。税金・定額クーポン・店舗の端数処理はモデル化しません。教育用のみ — レジではありません。",
	tool_discount_err_generic:
		"モードに合う正の金額を入力してください（例: 定価 100 と 20%オフ、または定価 100 とセール価格 80）。割引率は 0〜100。定価の逆算では割引率は 100 未満が必要です。",

	tool_discount_how_title: "割引計算ツールの使い方",
	tool_discount_how_body:
		"セール価格・割引率・定価のいずれかを選び、分かっている値を入力し、必要ならパーセントチップをタップして「計算する」を押します。「サンプルを読み込む」は 100@20% → 80、100→80 の割引率、80 から 20% で定価逆算、20%+10% の積み上げを順に切り替えます。",
	tool_discount_how_item_1: "すでに分かっている2つの数に合うモードを選びます。",
	tool_discount_how_item_2: "定価および/またはセール価格と割引率を入力します（チップでも可）。",
	tool_discount_how_item_3: "任意: セール価格モードで2回目の積み上げ割引を追加します。",
	tool_discount_how_item_4: "「計算する」で答え・節約額・手順行を表示します。",

	tool_discount_why_choose_title: "この割引計算ツールでできること",
	tool_discount_why_choose_item_1:
		"3方向: 割引率からセール価格、2価格から割引率、セール合計から定価の逆算。",
	tool_discount_why_choose_item_2: "任意の2回目積み上げ割引と、合成された実効割引率。",
	tool_discount_why_choose_item_3: "あなたの数字を式に当てはめた手順行。",
	tool_discount_why_choose_item_4: "割引チップ（10 / 15 / 20 / 25 / 50%）は入力ショートカット。",
	tool_discount_why_choose_item_5:
		"境界は明確: パーセント割引の算数のみ — 税・定額クーポン・レジ端数は対象外。",

	tool_discount_formula_title: "割引の公式",
	tool_discount_formula_body:
		"d を割引率（%）÷ 100 とします。セール価格と定価の逆算は因子 (1 − d) を使います。積み上げ割引は因子を順に掛けます。",
	tool_discount_formula_item_1:
		"セール価格 = 定価 × (1 − d)。例: 100 × 0.80 = 80（20%オフ）。",
	tool_discount_formula_item_2: "節約額 = 定価 − セール価格。同じ例 → 節約 20。",
	tool_discount_formula_item_3:
		"割引率 = (定価 − セール価格) ÷ 定価 × 100。例: (100 − 80) ÷ 100 × 100 = 20%。",
	tool_discount_formula_item_4:
		"セール価格から定価 = セール価格 ÷ (1 − d)。例: 80 ÷ 0.80 = 100（20%オフ）。",
	tool_discount_formula_item_5:
		"積み上げ: 最終 = 定価 × (1 − d₁) × (1 − d₂)。100 に 20% のあと 10% → 72（実効 28%オフ）、30%ではない。",

	tool_discount_example_title: "計算例",
	tool_discount_example:
		"「サンプルを読み込む」はまず定価 100・20%オフ → セール 80、節約 20。次に 100→80 の割引率（=20%）。続けてセール 80 を 20%オフから定価 100 へ逆算。最後は 100 に 20% のあと 10% → 72（実効 28%オフ）。",

	tool_discount_usecases_title: "割引計算ツールを使う場面",
	tool_discount_usecase_1: "買い物: 広告の「○%オフ」を税抜きの想定支払い価格に換算する。",
	tool_discount_usecase_2: "宿題: 単一・連続のパーセント割引を手順付きで練習する。",
	tool_discount_usecase_3: "レシート確認: 割引後合計と既知の割引率から定価を取り戻す。",
	tool_discount_usecase_4: "重ね割りの比較: 20% のあと 10% が 30%オフと同じではないことを確認する。",

	tool_discount_faq_q1: "割引率からセール価格はどう求めますか？",
	tool_discount_faq_a1:
		"(1 − 割引率/100) を掛けます。定価 100・20%オフ → 100 × 0.80 = 80；節約 = 20。",
	tool_discount_faq_q2: "二重割引はどう適用されますか？",
	tool_discount_faq_a2:
		"2回目のパーセントは、すでに値引きされた価格に掛けます。100 に 20% のあと 10% → 72、実効 28%オフ — 30%ではありません。",
	tool_discount_faq_q3: "2つの価格から割引率をどう求めますか？",
	tool_discount_faq_a3:
		"割引率 = (定価 − セール価格) ÷ 定価 × 100。100 から 80 → 20%オフ。",
	tool_discount_faq_q4: "割引後から定価をどう逆算しますか？",
	tool_discount_faq_a4:
		"セール価格を (1 − 割引率/100) で割ります。セール 80・20%オフ → 80 ÷ 0.80 = 100。",
	tool_discount_faq_q5: "「20%オフ」と「2割だけ払う」は同じですか？",
	tool_discount_faq_a5:
		"違います。20%オフは定価の 80% を払うこと（0.8 を掛ける）です。",
	tool_discount_faq_q6: "消費税や VAT は含まれますか？",
	tool_discount_faq_a6:
		"含まれません。税抜き金額を入力してください。VAT/GST や売上税を足す場合は別の税ページを使ってください。",
	tool_discount_faq_q7: "定額クーポンを入力できますか？",
	tool_discount_faq_a7:
		"このページはパーセント割引のみです。定額クーポンはパーセント計算の前後で自分で差し引いてください。",

	tool_discount_disclaimer:
		"価格の教育用イラストのみ — 店舗レジ・税エンジン・金融助言ではありません。",
	tool_discount_references:
		"Investopedia の割引概要；OpenStax の小売割引の算数（教育的文脈）。",
	tool_discount_ref_a_label: "Investopedia — Discount",
	tool_discount_ref_b_label: "OpenStax — Discounts, Markups, and Sales Tax",
};

export default ja;
