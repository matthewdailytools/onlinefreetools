/**
 * i18n tool shard (how-to-calculate-break-even / ja).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_break_even_title: "損益分岐点の計算ツール — 何個売れば元が取れるか",
	tool_break_even_description: "固定費・販売単価・単位あたり変動費から損益分岐点の販売数量と売上高を計算し、貢献利益も表示します。例：固定費 10000、単価 50、変動費 30 → 500 個、売上 25000。ブラウザ内で計算；学習用の試算であり、経営や投資の助言ではありません。",
	tool_break_even_article: "損益分岐点は貢献利益が固定費をちょうど賄う販売量です。本ページは数量 = 固定費 ÷（単価 − 変動費）を使い、売上と貢献利益を同じ教育用 URL に載せます。",
	tool_break_even_calculate: "計算する",
	tool_break_even_sample: "サンプルを入れる",
	tool_break_even_clear: "クリア",
	tool_break_even_fixed_label: "固定費",
	tool_break_even_fixed_ph: "例: 10000",
	tool_break_even_price_label: "販売単価",
	tool_break_even_price_ph: "例: 50",
	tool_break_even_var_label: "単位あたり変動費",
	tool_break_even_var_ph: "例: 30",
	tool_break_even_result_units: "損益分岐の販売数量",
	tool_break_even_result_revenue: "損益分岐の売上高",
	tool_break_even_result_cm: "単位あたり貢献利益",
	tool_break_even_result_note: "学習用の試算です。経営・投資の助言ではありません。",
	tool_break_even_err_fixed: "固定費は 0 より大きい必要があります。",
	tool_break_even_err_price: "単価は 0 より大きく、変動費は 0 以上にしてください。",
	tool_break_even_err_margin: "単価は変動費より高く、貢献利益が正である必要があります。",
	tool_break_even_how_title: "使い方",
	tool_break_even_how_body: "固定費・単価・単位変動費を入力します。貢献利益・分岐数量・分岐売上が出ます。業種名は利用シーン文に留め、別 URL にはしません。",
	tool_break_even_formula_title: "計算式と前提",
	tool_break_even_formula_body: "数量 Q = FC / (P − V)。売上 = Q × P。貢献利益 = P − V。前提:",
	tool_break_even_formula_item_1: "費用と価格は一定とみなす。税・割引・在庫はモデル外。",
	tool_break_even_formula_item_2: "単一商品（または平均単位）の見方。",
	tool_break_even_formula_item_3: "結果は学習用であり予測や助言ではない。",
	tool_break_even_example_title: "例",
	tool_break_even_example: "例：固定費 10000・単価 50・変動費 30 → 貢献利益 20 → 500 個、売上 25000。",
	tool_break_even_usecases_title: "こんなときに",
	tool_break_even_usecase_1: "授業：固定の FC・P・V で公式を練習。",
	tool_break_even_usecase_2: "相談前に「だいたい何個で固定費を賄うか」の目安（試算のみ）。",
	tool_break_even_usecase_3: "貢献利益と分岐売上を一ページで確認。",
	tool_break_even_faq_q1: "どの式を使いますか？",
	tool_break_even_faq_a1: "Q = FC / (P − V)。売上は Q × P。貢献利益は P − V。",
	tool_break_even_faq_q2: "単価＝変動費のときは？",
	tool_break_even_faq_a2: "有限の分岐数量はありません。モデル上で単価を上げるか変動費を下げてください。",
	tool_break_even_faq_q3: "経営助言ですか？",
	tool_break_even_faq_a3: "いいえ。数値は学習用の試算であり、経営・税務・投資の助言ではありません。",
	tool_break_even_faq_q4: "数量と売上の分岐は？",
	tool_break_even_faq_a4: "結果に両方出ます。売上は数量×単価で、別ツールにはしません。",
	tool_break_even_disclaimer: "損益分岐の結果は学習用の試算にすぎず、経営・財務・税務・投資の助言ではありません。",
	tool_break_even_references: "Investopedia の損益分岐点・貢献利益の説明；標準の FC/(P−V) 式。",
	tool_break_even_ref_bep_label: "Investopedia — 損益分岐点",
	tool_break_even_ref_cm_label: "Investopedia — 貢献利益",
};

export default ja;
