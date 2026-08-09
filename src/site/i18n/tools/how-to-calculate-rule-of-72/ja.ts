/**
 * i18n tool shard (how-to-calculate-rule-of-72 / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_rule_of_72_title: "72の法則 — 倍増までの年数",
	tool_rule_of_72_description: "72の法則で倍増までの年数を見積もります：年数 ≈ 72 ÷ 年利%。例：6% → 約12年。学習用の近似であり投資助言ではありません。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり投資・税務・経営の助言ではありません。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり投資・税務・経営の助言ではありません。",
	tool_rule_of_72_calculate: "計算する",
	tool_rule_of_72_sample: "サンプル",
	tool_rule_of_72_clear: "クリア",
	tool_rule_of_72_rate_label: "年利 %",
	tool_rule_of_72_rate_ph: "例 6",
	tool_rule_of_72_yearsOut_label: "倍増までのおおよその年数",
	tool_rule_of_72_result_note: "年数 ≈ 72 / 利率%。経験則であり精密予測ではありません。",
	tool_rule_of_72_err_generic: "利率 > 0 を入力。",
	tool_rule_of_72_how_title: "使い方",
	tool_rule_of_72_how_body: "年率を入れ、72÷利率で倍増年数をざっくり見ます。",
	tool_rule_of_72_formula_title: "計算式",
	tool_rule_of_72_formula_body: "年数 ≈ 72 / r%。注意:",
	tool_rule_of_72_formula_item_1: "中程度の利率で精度が良い。",
	tool_rule_of_72_formula_item_2: "完全な複利表ではない。",
	tool_rule_of_72_formula_item_3: "精密計算は複利/CAGRへ。",
	tool_rule_of_72_example_title: "例",
	tool_rule_of_72_example: "例：6% → 72/6 = 12年。",
	tool_rule_of_72_usecases_title: "こんなときに",
	tool_rule_of_72_usecase_1: "授業での倍増の直感。",
	tool_rule_of_72_usecase_2: "精密FVの前の速算。",
	tool_rule_of_72_usecase_3: "CAGR/複利と併用。",
	tool_rule_of_72_faq_q1: "例は？",
	tool_rule_of_72_faq_a1: "6%→12年。",
	tool_rule_of_72_faq_q2: "正確？",
	tool_rule_of_72_faq_a2: "学習用の近似。",
	tool_rule_of_72_faq_q3: "なぜ72？",
	tool_rule_of_72_faq_a3: "対数的倍増に近い便利な数。",
	tool_rule_of_72_faq_q4: "助言？",
	tool_rule_of_72_faq_a4: "学習用です。",
	tool_rule_of_72_article: "72の法則",
	tool_rule_of_72_disclaimer: "72の法則の学習用試算であり、投資・税務の助言ではありません。",
	tool_rule_of_72_references: "Investopedia と標準的な教科書公式。",
	tool_rule_of_72_ref_a_label: "Investopedia — Rule of 72",
	tool_rule_of_72_ref_b_label: "Investopedia — Compound interest",
};

export default ja;
