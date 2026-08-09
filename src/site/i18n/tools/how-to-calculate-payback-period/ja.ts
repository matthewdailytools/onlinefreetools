/**
 * i18n tool shard (how-to-calculate-payback-period / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_payback_period_title: "回収期間の計算ツール",
	tool_payback_period_description: "初期投資と毎年一定のキャッシュ流入から単純回収年数を見積もります。例：投資 10000、毎年 2500 → 4年。学習用であり投資助言ではありません。。計算はブラウザ内で行いサーバーにアップロードしません。学習用の目安であり投資・税務・経営の助言ではありません。",
	tool_payback_period_calculate: "計算する",
	tool_payback_period_sample: "サンプル",
	tool_payback_period_clear: "クリア",
	tool_payback_period_invest_label: "初期投資",
	tool_payback_period_invest_ph: "例 10000",
	tool_payback_period_cf_label: "年間キャッシュ流入",
	tool_payback_period_cf_ph: "例 2500",
	tool_payback_period_yearsOut_label: "回収年数",
	tool_payback_period_result_note: "単純回収 = 投資 / 年CF（割引なし）。学習用。",
	tool_payback_period_err_generic: "投資と年流入は > 0。",
	tool_payback_period_how_title: "使い方",
	tool_payback_period_how_body: "初期投資と毎年一定の流入を入力。年数 = 投資 ÷ 年CF。割引回収はNPV系へ。",
	tool_payback_period_formula_title: "計算式",
	tool_payback_period_formula_body: "回収年数 = I0 / 年CF。注意:",
	tool_payback_period_formula_item_1: "貨幣の時間価値や不均一CFは無視。",
	tool_payback_period_formula_item_2: "両方とも正。",
	tool_payback_period_formula_item_3: "それ単体では収益性指標ではない。",
	tool_payback_period_example_title: "例",
	tool_payback_period_example: "例：I0=10000、CF=2500 → 4年。",
	tool_payback_period_usecases_title: "こんなときに",
	tool_payback_period_usecase_1: "単純回収の宿題。",
	tool_payback_period_usecase_2: "NPV/IRR前の粗スクリーニング。",
	tool_payback_period_usecase_3: "割引法と対照。",
	tool_payback_period_faq_q1: "例は？",
	tool_payback_period_faq_a1: "4年。",
	tool_payback_period_faq_q2: "割引回収は？",
	tool_payback_period_faq_a2: "本ページは単純法のみ。",
	tool_payback_period_faq_q3: "不均一CFは？",
	tool_payback_period_faq_a3: "表計算やNPVへ。",
	tool_payback_period_faq_q4: "助言？",
	tool_payback_period_faq_a4: "学習用です。",
	tool_payback_period_article: "単純回収期間",
	tool_payback_period_disclaimer: "回収期間の学習用試算であり、投資・税務の助言ではありません。",
	tool_payback_period_references: "Investopedia と標準的な教科書公式。",
	tool_payback_period_ref_a_label: "Investopedia — Payback period",
	tool_payback_period_ref_b_label: "Investopedia — NPV",
};

export default ja;
