/**
 * i18n tool shard (how-to-calculate-markup / ja).
 * マークアップ：原価/売価から％を求める、または売価・原価を逆算；粗利率を並べて表示。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語 UI 文案：マークアップ計算は学習用。価格設定や金融助言ではない。 */
const ja: SiteLangDict = {
	tool_markup_title: "マークアップ計算機 — 原価と売価から上乗せ率を求める",
	tool_markup_description:
		"原価と売価から markup（マークアップ）率を計算するか、マークアップ率が分かっているときは売価や原価を逆算します。例：原価 50、売価 80 → markup 60%（粗利率 37.5%）。マークアップは原価で割り、粗利率は売価で割ります。小売の学習用計算であり、経営・税務・投資の助言ではありません。",
	tool_markup_article:
		"markup %、売価、原価のいずれかを求め、対応する粗利率を表示して、マークアップと粗利率の混同を防ぎます。",
	tool_markup_desc: "原価と売価から markup % を計算するか、売価/原価を逆算。粗利率も並べて表示。",

	tool_markup_mode_label: "求める項目",
	tool_markup_mode_pct: "マークアップ %",
	tool_markup_mode_sell: "売価",
	tool_markup_mode_cost: "原価",
	tool_markup_hint:
		"未知量を選びます。マークアップの分母は原価、粗利率の分母は売価です。小数はカンマ入力も可。学習用のみ — 価格助言ではありません。",
	tool_markup_cost_label: "原価",
	tool_markup_cost_ph: "例 50",
	tool_markup_sell_label: "売価",
	tool_markup_sell_ph: "例 80",
	tool_markup_mk_label: "マークアップ %",
	tool_markup_mk_ph: "例 60",
	tool_markup_calculate: "計算する",
	tool_markup_sample: "サンプルを読み込む",
	tool_markup_clear: "クリア",
	tool_markup_markupOut_label: "マークアップ %",
	tool_markup_sellOut_label: "売価",
	tool_markup_costOut_label: "原価",
	tool_markup_profitOut_label: "上乗せ額",
	tool_markup_marginOut_label: "粗利率 %",
	tool_markup_steps_title: "計算の流れ",
	tool_markup_step_pct_tpl:
		"マークアップ % = (売価 − 原価) ÷ 原価 × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct}%。",
	tool_markup_step_sell_tpl: "売価 = 原価 × (1 + マークアップ%/100) = {cost} × (1 + {pct}/100) = {sell}。",
	tool_markup_step_cost_tpl: "原価 = 売価 ÷ (1 + マークアップ%/100) = {sell} ÷ (1 + {pct}/100) = {cost}。",
	tool_markup_step_margin_tpl:
		"粗利率 % = (売価 − 原価) ÷ 売価 × 100 = {dollar} ÷ {sell} × 100 = {margin}%。",
	tool_markup_result_note:
		"マークアップは原価で割り、粗利率は売価で割ります。同じ上乗せ額でも％は異なります。学習用のみ — 税務・価格・投資の助言ではありません。",
	tool_markup_err_generic:
		"選択したモードで、正の原価と有効な売価またはマークアップ % を入力してください（例：原価 50、売価 80）。",

	tool_markup_how_title: "マークアップ計算機の使い方",
	tool_markup_how_body:
		"markup %、売価、原価のどれが必要か選び、表示された欄を入力して「計算する」を押します。「サンプルを読み込む」は 原価/売価→％、原価/％→売価、売価/％→原価 を順に切り替えます。",
	tool_markup_how_item_1: "「求める項目」でマークアップ %、売価、原価のいずれかを選びます。",
	tool_markup_how_item_2: "既知の値を入力します（原価と売価、または原価と markup %、または売価と markup %）。",
	tool_markup_how_item_3: "「計算する」で不足値、上乗せ額、対応する粗利率 % を確認します。",
	tool_markup_how_item_4:
		"「サンプルを読み込む」で 50/80→60%、原価 40・25%→売価 50、売価 120・50%→原価 80 を試せます。",

	tool_markup_why_choose_title: "このマークアップ計算機を使う理由",
	tool_markup_why_choose_item_1: "3モード：原価と売価から markup %、原価と％から売価、売価と％から原価。",
	tool_markup_why_choose_item_2: "上乗せ額と粗利率 % を markup の横に表示し、用語を区別しやすくします。",
	tool_markup_why_choose_item_3: "手順行にあなたの数値を (売価−原価)/原価 と (売価−原価)/売価 へ代入します。",
	tool_markup_why_choose_item_4: "モードに不要な入力欄は非表示になります。",
	tool_markup_why_choose_item_5: "教育目的の免責が明示されており、経営・税務・投資助言ではありません。",

	tool_markup_formula_title: "マークアップの式",
	tool_markup_formula_body:
		"マークアップは原価に対する上乗せの割合です。粗利率は同じ利益額を売価で割った割合です。",
	tool_markup_formula_item_1: "マークアップ % = (売価 − 原価) ÷ 原価 × 100。例：(80 − 50) ÷ 50 × 100 = 60%。",
	tool_markup_formula_item_2: "売価 = 原価 × (1 + マークアップ%/100)。例：40 × 1.25 = 50（25% markup）。",
	tool_markup_formula_item_3: "原価 = 売価 ÷ (1 + マークアップ%/100)。例：120 ÷ 1.5 = 80（50% markup）。",
	tool_markup_formula_item_4: "粗利率 % = (売価 − 原価) ÷ 売価 × 100。同じ 50/80 → 37.5%。",
	tool_markup_formula_item_5:
		"マークアップ 100% は売価 = 原価の2倍（粗利率 50%）。売価が原価の2倍を超えれば markup は 100% を超えます。",

	tool_markup_example_title: "計算例",
	tool_markup_example:
		"サンプルは原価 50・売価 80 から開始 → markup 60%、上乗せ額 30、粗利率 37.5%。次：原価 40・25% → 売価 50。続いて売価 120・50% → 原価 80。損益分岐（100/100）で markup 0%・粗利率 0%。",

	tool_markup_usecases_title: "こんなときに使う",
	tool_markup_usecase_1: "小売の宿題：原価と定価から markup % へ、途中式つきで変換。",
	tool_markup_usecase_2: "価格表の確認：目標 markup % から原価に対する売価を求める。",
	tool_markup_usecase_3: "原価の逆算：既知の売価と markup 方針から、暗黙の原価を推定。",
	tool_markup_usecase_4: "用語の混同解消：markup 60% が粗利率 60% と同じでない理由を示す。",

	tool_markup_faq_q1: "markup（マークアップ）率はどう計算しますか？",
	tool_markup_faq_a1: "売価から原価を引き、原価で割り、100 を掛けます。例：原価 50、売価 80 → (80−50)/50 × 100 = 60%。",
	tool_markup_faq_q2: "マークアップと粗利率の違いは？",
	tool_markup_faq_a2:
		"マークアップは利益額を原価で割り、粗利率は売価で割ります。同じ 50/80 の取引は markup 60%、粗利率 37.5% です。",
	tool_markup_faq_q3: "原価と markup % から売価を求めるには？",
	tool_markup_faq_a3: "売価 = 原価 × (1 + マークアップ%/100)。原価 40・25% なら 40 × 1.25 = 50。",
	tool_markup_faq_q4: "markup は 100% を超えられますか？",
	tool_markup_faq_a4: "はい。売価が原価の2倍を超えれば 100% を超えます。例：原価 50、売価 150 → markup 200%。",
	tool_markup_faq_q5: "原価割れで売った場合は？",
	tool_markup_faq_a5: "マークアップと粗利率は負になり、他費用前の単位あたり損失を意味します。",
	tool_markup_faq_q6: "税や値引きは含みますか？",
	tool_markup_faq_a6: "含みません。税・値引きを自分で反映したうえで、比較したい原価と売価を入力してください。",
	tool_markup_faq_q7: "金融助言ですか？",
	tool_markup_faq_a7: "いいえ。小売算数の学習用デモであり、税務・価格戦略・投資助言ではありません。",

	tool_markup_disclaimer: "マークアップの学習用試算のみ — 金融・税務・価格設定・投資の助言ではありません。",
	tool_markup_references: "Investopedia と標準的な教科書公式（学習用）。",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — 利益率",
};

export default ja;
