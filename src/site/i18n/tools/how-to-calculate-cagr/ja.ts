/**
 * i18n ツール断片（how-to-calculate-cagr / ja）。
 * CAGR %・終値・年数を求める。YMYL は教材の算術のみ — 投資助言ではない。
 * プレースホルダはそのまま残す：{end} {begin} {years} {rate}。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語辞書：キーは en 母版と同一。当地の検索語に合わせて独立に書き直し。 */
const ja: SiteLangDict = {
	tool_cagr_title: "CAGR計算ツール — 二つの値の年平均成長率",
	tool_cagr_description: "期首値と期末値から年平均成長率（CAGR）を求めたり、期末値や必要年数を逆算したりできます。例：10000 → 16105.10 を 5 年 → 約 10.00% の CAGR。学習用の例示のみで、投資助言ではなく、将来の成果を保証しません。",
	tool_cagr_article: "標準の恒等式 ((終値/始値)^(1/n)−1) で CAGR・終値・年数を計算し、手順と逆算チェックを示します。",
	tool_cagr_desc: "期首値から CAGR %・終値・年数。学習用のみ。",

	tool_cagr_safety_banner: "学習用のみ。このページは教科書どおりの CAGR 算術です。投資・税務・財務の助言ではなく、過去や仮想の成長は将来を保証しません。",
	tool_cagr_mode_label: "何を求めますか？",
	tool_cagr_mode_rate: "期首 / 期末 / 年数から CAGR %",
	tool_cagr_mode_end: "期首 / CAGR / 年数から期末値",
	tool_cagr_mode_years: "期首 / 期末 / CAGR から年数",
	tool_cagr_hint: "有効な入力はすべて 0 より大きい必要があります。CAGR は期中のキャッシュフローを無視し、年1回の複利を仮定します。",
	tool_cagr_begin_label: "期首値",
	tool_cagr_begin_ph: "例：10000",
	tool_cagr_end_label: "期末値",
	tool_cagr_end_ph: "例：16105.10",
	tool_cagr_rate_label: "CAGR %",
	tool_cagr_rate_ph: "例：10",
	tool_cagr_years_label: "年数",
	tool_cagr_years_ph: "例：5",
	tool_cagr_calculate: "計算する",
	tool_cagr_sample: "サンプルを読み込む",
	tool_cagr_clear: "クリア",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "期末値",
	tool_cagr_yearsOut_label: "年数",
	tool_cagr_multOut_label: "総成長倍率",
	tool_cagr_steps_title: "計算手順",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%。",
	tool_cagr_step_end_tpl: "期末値 = {begin} × (1 + {rate}/100)^{years} ≈ {end}。",
	tool_cagr_step_years_tpl: "年数 = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}。",
	tool_cagr_step_check_tpl: "検算：{begin} × (1 + {rate}/100)^{years} ≈ {end}。",
	tool_cagr_result_note: "年1回複利・期中キャッシュフローなしを仮定。学習用の例示のみ — 投資助言ではありません。",
	tool_cagr_err_generic: "有効な欄には正の数を入力してください（例：期首 10000、期末 16105.1、年数 5）。",

	tool_cagr_how_title: "CAGR計算ツールの使い方",
	tool_cagr_how_body: "CAGR %・期末値・年数のどれを求めるかを選び、既知の正の値を入れて「計算する」を押します。「サンプルを読み込む」は 10000→16105.1 を 5 年（約 10%）、10% での期末逆算、同じ端点での年数、短い 5000→8000 を 3 年、の順で切り替わります。",
	tool_cagr_how_item_1: "求める結果の種類を選ぶ。",
	tool_cagr_how_item_2: "そのモードで既知の正の値を入れる。",
	tool_cagr_how_item_3: "「計算する」で答え・成長倍率・手順を確認する。",
	tool_cagr_how_item_4: "「サンプルを読み込む」で教材チェックポイントを回す。",

	tool_cagr_why_choose_title: "本サイトのCAGR計算ツールを使う理由",
	tool_cagr_why_choose_item_1: "三方向：CAGR %・期末値・年数。",
	tool_cagr_why_choose_item_2: "主結果の横に総成長倍率（期末 ÷ 期首）を表示。",
	tool_cagr_why_choose_item_3: "あなたの数値を CAGR 恒等式に当てはめた手順行。",
	tool_cagr_why_choose_item_4: "逆算チェック：期首 × (1+r)^n が期末に戻るか。",
	tool_cagr_why_choose_item_5: "明確な YMYL 境界：学習用の算術のみ — 投資助言ではない。",

	tool_cagr_formula_title: "CAGR の計算式",
	tool_cagr_formula_body: "CAGR は、年1回複利で n 年かけて期首値を期末値まで伸ばす一定の年率です。",
	tool_cagr_formula_item_1: "CAGR = ((期末 ÷ 期首)^(1 ÷ n) − 1) × 100。例：((16105.1/10000)^(1/5)−1)×100 ≈ 10%。",
	tool_cagr_formula_item_2: "期末 = 期首 × (1 + CAGR/100)^n。",
	tool_cagr_formula_item_3: "n = ln(期末 ÷ 期首) ÷ ln(1 + CAGR/100)。",
	tool_cagr_formula_item_4: "期首 > 0、期末 > 0、n > 0 が必要（年数を解くとき CAGR ≠ −100%）。",
	tool_cagr_formula_item_5: "手数料・税・期中キャッシュフローは無視 — 完全な IRR とは異なります。",

	tool_cagr_example_title: "計算例",
	tool_cagr_example: "サンプルはまず 10000 → 16105.10 を 5 年 → CAGR ≈ 10%。次に 10000 を 10% で 5 年伸ばして ≈16105。同じ端点と 10% から年数を解きます。最後は 5000 → 8000 を 3 年です。",

	tool_cagr_usecases_title: "CAGR計算ツールを使う場面",
	tool_cagr_usecase_1: "宿題：標準の CAGR 式で複数年の成長を年率化する。",
	tool_cagr_usecase_2: "売上やポートフォリオの端点を年率ベースで比べる（例示のみ）。",
	tool_cagr_usecase_3: "ある CAGR で目標に達するまでの年数を逆算する。",
	tool_cagr_usecase_4: "年数が重要なときは関連 ROI ページの単純リターンと対比する。",

	tool_cagr_faq_q1: "どの CAGR 式を使いますか？",
	tool_cagr_faq_a1: "CAGR = ((期末 ÷ 期首)^(1 ÷ 年数) − 1) × 100。三つとも 0 より大きい必要があります。",
	tool_cagr_faq_q2: "CAGR と単純 ROI の違いは？",
	tool_cagr_faq_a2: "単純 ROI は何年かかったかを無視します。CAGR は入力した年数で成長を年率化します。",
	tool_cagr_faq_q3: "期首や期末が 0 または負のときは？",
	tool_cagr_faq_a3: "どちらも 0 より大きくしてください。0 や負では標準 CAGR 式はここでは定義できません。",
	tool_cagr_faq_q4: "投資助言ですか？",
	tool_cagr_faq_a4: "いいえ。数値は学習用の例示のみで、投資・税務・財務の助言ではありません。",
	tool_cagr_faq_q5: "CAGR は入金や出金を含みますか？",
	tool_cagr_faq_a5: "含みません。期首・期末・年数だけです。不規則なキャッシュフローには IRR ツールを使ってください。",
	tool_cagr_faq_q6: "期末値や年数も解けますか？",
	tool_cagr_faq_a6: "はい。モードを切り替えて期首を前方に伸ばすか、期首/期末/CAGR から年数を求められます。",
	tool_cagr_faq_q7: "複利は年1回ですか？",
	tool_cagr_faq_a7: "このページでは年1回です。年内のタイミングは無視します。",

	tool_cagr_disclaimer: "CAGR の結果は学習用の例示であり、投資・税務・財務の助言ではありません。過去や仮想のリターンは将来を保証しません。実ポートフォリオの手数料・税・キャッシュフロー・リスクは本ページではモデル化していません。",
	tool_cagr_references: "Investopedia の CAGR 定義と計算式ガイド；標準 ((終値/始値)^(1/n) − 1) の年率成長率。",
	tool_cagr_ref_cagr_label: "Investopedia — Compound Annual Growth Rate（CAGR）",
	tool_cagr_ref_formula_label: "Investopedia — CAGR の計算式",
};

export default ja;
