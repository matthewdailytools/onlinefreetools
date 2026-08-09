/**
 * i18n tool shard (how-to-calculate-exponent / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_exponent_title: "指数計算ツール — a の b 乗の求め方",
	tool_exponent_description: "累乗 a^b を計算します。例：2^10=1024。桁が極端に大きいと Infinity、負の底と非整数指数では NaN になり得ることを明示。ブラウザ内で宿題向けで、対数ページや科学表記ページと逆演算・桁合わせを照合でき、0^0 の扱いも注記します。",
	tool_exponent_calculate: "計算する",
	tool_exponent_sample: "サンプル",
	tool_exponent_clear: "クリア",
	tool_exponent_base_label: "底 a",
	tool_exponent_base_ph: "例: 2",
	tool_exponent_exp_label: "指数 b",
	tool_exponent_exp_ph: "例: 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "学習用に Math.pow で a^b を計算。|b| が大きいと Infinity になり得ます。",
	tool_exponent_err_generic: "有限の底と指数を入力してください。",
	tool_exponent_how_title: "使い方",
	tool_exponent_how_body: "底 a と指数 b を入れると a^b を返します。負の底と非整数指数は実数で NaN になり得、エラー扱いです。",
	tool_exponent_formula_title: "式",
	tool_exponent_formula_body: "累乗 a^b：",
	tool_exponent_formula_item_1: "b が非負整数なら a を b 回掛ける意味。",
	tool_exponent_formula_item_2: "分数・負の指数は Math.pow の実数規則。",
	tool_exponent_formula_item_3: "ここでの 0^0 は 1（よくあるプログラミング慣習）——議論あり。",
	tool_exponent_formula_item_4: "対数ページで定義されるとき log_a(a^b)=b を確認。",
	tool_exponent_example_title: "例",
	tool_exponent_example: "例：2^10 = 1024。",
	tool_exponent_usecases_title: "こんなときに",
	tool_exponent_usecase_1: "2^10 のような簡単な累乗の宿題。",
	tool_exponent_usecase_2: "科学表記の桁因子を確認。",
	tool_exponent_usecase_3: "対数の逆演算と照合。",
	tool_exponent_disclaimer: "実数の学習用累乗のみで、CAS の代わりではありません。",
	tool_exponent_references: "Wikipedia の冪乗。",
	tool_exponent_ref_exp_label: "Wikipedia — 冪乗",
	tool_exponent_ref_pow_label: "Wikipedia — 指数",
	tool_exponent_article: "ブラウザで a^b を計算し、定義域の注意を明示します。",
	tool_exponent_faq_q1: "負の底はいつ失敗？",
	tool_exponent_faq_a1: "非整数の実数累乗は JS では NaN になりがちです。",
	tool_exponent_faq_q2: "このページの 0^0 は？",
	tool_exponent_faq_a2: "1 とします（よくある JS 慣習）。数学では議論があります。",
	tool_exponent_faq_q3: "Infinity になる？",
	tool_exponent_faq_a3: "桁が極端に大きいとあり得ます。",
	tool_exponent_faq_q4: "対数で確認は？",
	tool_exponent_faq_a4: "定義されるとき log_a(a^b)≈b。",
};

export default ja;
