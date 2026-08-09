/**
 * i18n tool shard (how-to-calculate-inflation / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_inflation_title: "インフレ計算ツール — 将来の購買力",
	tool_inflation_description: "一定の年インフレ率で現在額を将来へ伸ばします。例：1000、5年、年3% → 将来 ≈1159.27。学習用であり経済予測ではありません。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり投資・税務・経営の助言ではありません。",
	tool_inflation_calculate: "計算する",
	tool_inflation_sample: "サンプル",
	tool_inflation_clear: "クリア",
	tool_inflation_amount_label: "現在の金額",
	tool_inflation_amount_ph: "例 1000",
	tool_inflation_rate_label: "年インフレ率 %",
	tool_inflation_rate_ph: "例 3",
	tool_inflation_n_label: "年数",
	tool_inflation_n_ph: "例 5",
	tool_inflation_futOut_label: "将来の名目額",
	tool_inflation_result_note: "将来 = 現在 × (1+i)^n。購買力の学習用。",
	tool_inflation_err_generic: "金額>0、有限な率、年数>0。",
	tool_inflation_how_title: "使い方",
	tool_inflation_how_body: "今日の金額・年率・年数を入れ将来へ複利。国別CPI表は載せません。",
	tool_inflation_formula_title: "計算式",
	tool_inflation_formula_body: "F = P × (1+i)^n。注意:",
	tool_inflation_formula_item_1: "毎年一定率を仮定。",
	tool_inflation_formula_item_2: "公式CPI表なし。",
	tool_inflation_formula_item_3: "実質賃金などは範囲外。",
	tool_inflation_example_title: "例",
	tool_inflation_example: "例：P=1000、i=3%、n=5 → ≈1159.27。",
	tool_inflation_usecases_title: "こんなときに",
	tool_inflation_usecase_1: "インフレ複利の宿題。",
	tool_inflation_usecase_2: "将来価格のざっくり。",
	tool_inflation_usecase_3: "CAGR/複利ページと併用。",
	tool_inflation_faq_q1: "例は？",
	tool_inflation_faq_a1: "約1159.27。",
	tool_inflation_faq_q2: "公式CPIは？",
	tool_inflation_faq_a2: "自分で率を入力。",
	tool_inflation_faq_q3: "実質賃金は？",
	tool_inflation_faq_a3: "範囲外。",
	tool_inflation_faq_q4: "助言？",
	tool_inflation_faq_a4: "学習用です。",
	tool_inflation_article: "インフレ将来額",
	tool_inflation_disclaimer: "インフレの学習用試算であり、投資・税務の助言ではありません。",
	tool_inflation_references: "Investopedia と標準的な教科書公式。",
	tool_inflation_ref_a_label: "Investopedia — Inflation",
	tool_inflation_ref_b_label: "Investopedia — Purchasing power",
};

export default ja;
