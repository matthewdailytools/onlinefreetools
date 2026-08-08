/**
 * i18n tool shard (how-to-calculate-gross-margin / ja).
 * 日本語：粗利率・売上総利益の独立リライト（英模の直訳禁止）。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_gross_margin_title: '粗利率の計算ツール — 粗利と粗利率を求める',
	tool_gross_margin_description:
		'売上高と売上原価（COGS）から粗利（売上総利益）と粗利率を計算し、金額と比率を同じ結果欄で確認できます。例：売上 10,000、原価 6,000 → 粗利 4,000・粗利率 40%。ブラウザ内で完結し、データは送信しません。学習用の例示であり、経営・投資助言ではありません。',
	tool_gross_margin_article:
		'粗利率は、売上から原価を差し引いた後に残る割合です。本ページは粗利額と粗利率を同一の教育用 URL にまとめ、営業利益率や純利益率は別ツールに分けます。',
	tool_gross_margin_calculate: '計算する',
	tool_gross_margin_sample: 'サンプルを入れる',
	tool_gross_margin_clear: 'クリア',
	tool_gross_margin_revenue_label: '売上高',
	tool_gross_margin_revenue_ph: '例: 10000',
	tool_gross_margin_cogs_label: '売上原価（COGS）',
	tool_gross_margin_cogs_ph: '例: 6000',
	tool_gross_margin_result_profit: '粗利（売上総利益）',
	tool_gross_margin_result_margin: '粗利率',
	tool_gross_margin_result_note: '学習用の例示です。経営・投資助言ではありません。',
	tool_gross_margin_err_revenue: '売上高は 0 より大きい必要があります。',
	tool_gross_margin_err_cogs: '売上原価は 0 以上の数値にしてください。',
	tool_gross_margin_how_title: '使い方',
	tool_gross_margin_how_body:
		'売上高と売上原価を入力すると、粗利と粗利率が出ます。マークアップと純利益の違いは FAQ か関連ツールで扱い、近道用の別 URL は作りません。',
	tool_gross_margin_formula_title: '式と前提',
	tool_gross_margin_formula_body:
		'粗利 = 売上高 − 売上原価。粗利率% =（粗利 ÷ 売上高）× 100。前提：',
	tool_gross_margin_formula_item_1: '売上と原価は同一期間・同一通貨。税金や販管費はモデル化しません。',
	tool_gross_margin_formula_item_2: '原価は製品原価のみ。販管費・支払利息は対象外です。',
	tool_gross_margin_formula_item_3: '結果は教育用の例示であり、予測や助言ではありません。',
	tool_gross_margin_example_title: '例',
	tool_gross_margin_example:
		'例：売上 10,000、原価 6,000 → 粗利 4,000 → 粗利率 40%。',
	tool_gross_margin_usecases_title: 'こんなときに',
	tool_gross_margin_usecase_1: '授業：固定の売上と原価で粗利率の式を練習する。',
	tool_gross_margin_usecase_2: '商品レベルの粗い粗利イメージ（相談前の学習用）。',
	tool_gross_margin_usecase_3: '粗利額と粗利率を同じページで確認する（マークアップ専用 URL は不要）。',
	tool_gross_margin_faq_q1: 'このページの粗利率の式は？',
	tool_gross_margin_faq_a1: '粗利 = 売上 − 原価。粗利率% = 粗利 ÷ 売上 × 100。',
	tool_gross_margin_faq_q2: '原価が売上より大きいと？',
	tool_gross_margin_faq_a2: '粗利と粗利率は負になります。赤字ケースを見るためのモデルで、助言ではありません。',
	tool_gross_margin_faq_q3: '経営や投資の助言ですか？',
	tool_gross_margin_faq_a3: 'いいえ。数値は学習用の例示であり、経営・税務・投資助言ではありません。',
	tool_gross_margin_faq_q4: '粗利率とマークアップの違いは？',
	tool_gross_margin_faq_a4:
		'粗利率は利益÷売上、マークアップは利益÷原価です。本ページは粗利率に集中し、マークアップは FAQ のみで説明します。',
	tool_gross_margin_disclaimer:
		'粗利率の結果は教育目的の例示にすぎず、経営・財務・税務・投資に関する助言ではありません。実際の事業には手数料・税金・原価区分があり、本ページでは扱いません。',
	tool_gross_margin_references:
		'Investopedia の gross margin / gross profit 定義と標準式（売上 − 原価）/ 売上。',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default ja;
