/**
 * i18n tool shard (how-to-calculate-markup / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_markup_title: "マークアップ計算 — 原価に対する上乗せ率",
	tool_markup_description: "原価と売価からマークアップ率を計算します。例：原価 50、売価 80 → マークアップ 60%。利益率（分母が売上）とは別物です。ブラウザ内の学習用計算であり、経営助言ではありません。サーバーにアップロードしません。学習用の目安であり、公式の前提を必ず確認してください。",
	tool_markup_calculate: "計算する",
	tool_markup_sample: "サンプル",
	tool_markup_clear: "クリア",
	tool_markup_cost_label: "原価",
	tool_markup_cost_ph: "例 50",
	tool_markup_sell_label: "売価",
	tool_markup_sell_ph: "例 80",
	tool_markup_markupOut_label: "マークアップ %",
	tool_markup_profitOut_label: "上乗せ額",
	tool_markup_result_note: "マークアップ = (売価 − 原価) / 原価 × 100。利益率とは別。",
	tool_markup_err_generic: "原価 > 0、売価 ≥ 0 を入力。",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — 利益率",
	tool_markup_how_title: "使い方",
	tool_markup_how_body: "原価と売価を入力します。マークアップは差額を原価で割ります（売上ではありません）。",
	tool_markup_formula_title: "計算式",
	tool_markup_formula_body: "マークアップ% = (売価 − 原価) / 原価 × 100。注意:",
	tool_markup_formula_item_1: "分母は原価 — 利益率との違いです。",
	tool_markup_formula_item_2: "負の値は原価割れ販売。",
	tool_markup_formula_item_3: "税や値引きは入力に含めない限り扱いません。",
	tool_markup_usecases_title: "こんなときに",
	tool_markup_usecase_1: "小売の宿題：原価と定価から上乗せ率。",
	tool_markup_usecase_2: "財務確認前の価格表チェック。",
	tool_markup_usecase_3: "粗利率と用語を混同しないための対照。",
	tool_markup_example_title: "例",
	tool_markup_example: "例：原価 50、売価 80 → マークアップ = (80−50)/50 × 100 = 60%。",
	tool_markup_article: "マークアップ計算 — 原価に対する上乗せ率",
	tool_markup_disclaimer: "markupの学習用試算であり、投資・税務・ファイナンスの助言ではありません。",
	tool_markup_references: "Investopedia と標準的な教科書公式（学習用）。",
	tool_markup_faq_q1: "マークアップと利益率の違いは？",
	tool_markup_faq_a1: "マークアップは原価で割り、利益率は売価で割ります。",
	tool_markup_faq_q2: "例の結果は？",
	tool_markup_faq_a2: "原価50・売価80 → 60%。",
	tool_markup_faq_q3: "100%を超えますか？",
	tool_markup_faq_a3: "売価が原価の2倍超なら可能です。",
	tool_markup_faq_q4: "価格助言ですか？",
	tool_markup_faq_a4: "いいえ、学習用の計算です。",
};

export default ja;
