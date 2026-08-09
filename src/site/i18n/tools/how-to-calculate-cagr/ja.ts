/**
 * i18n tool shard (how-to-calculate-cagr / ja).
 * 日本語の独立リライト：検索向け title/desc、UI/How/Formula/FAQ、YMYL（投資助言ではない）を含む。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_cagr_title: 'CAGR（年平均成長率）の計算ツール — 複合年間成長率を求める',
	tool_cagr_description:
		'期首値・期末値・経過年数から CAGR（年平均成長率／複合年間成長率）を計算します。例：期首 10000 → 期末 16105.10、5 年で約 10.00%。処理はブラウザ内で完結し、サーバーへは送りません。学習用の図解であり、投資・税務・資産運用の助言ではありません。',
	tool_cagr_article:
		'CAGR とは、期首の値が毎年同じ率で複利成長したと仮定したとき、期末に到達するために必要な一定の年率です。複数年の伸びをざっくり比べる用途向きで、将来予測ではなく、途中の入出金も織り込みません。',
	tool_cagr_calculate: '計算する',
	tool_cagr_sample: 'サンプルを読み込む',
	tool_cagr_clear: 'クリア',
	tool_cagr_begin_label: '期首値',
	tool_cagr_begin_ph: '例: 10000',
	tool_cagr_end_label: '期末値',
	tool_cagr_end_ph: '例: 16105.10',
	tool_cagr_years_label: '年数',
	tool_cagr_years_ph: '例: 5',
	tool_cagr_result_label: 'CAGR',
	tool_cagr_result_note: '学習用の図解であり、投資助言ではありません。',
	tool_cagr_err_begin: '期首値は 0 より大きい必要があります。',
	tool_cagr_err_end: '期末値は 0 より大きい必要があります。',
	tool_cagr_err_years: '年数は 0 より大きい必要があります。',
	tool_cagr_how_title: '使い方',
	tool_cagr_how_body:
		'正の期首値・期末値・年数を入力すると、標準の CAGR 公式でパーセントが求まります。0 以下は受け付けません。結果は端末のブラウザ内に留まり、教育目的のみです。',
	tool_cagr_formula_title: '計算式と前提',
	tool_cagr_formula_body:
		'CAGR = ((期末値 ÷ 期首値)^(1 ÷ 年数) − 1) × 100。次の前提に注意してください。',
	tool_cagr_formula_item_1: '複利は年 1 回として扱い、年内のタイミングは無視します。',
	tool_cagr_formula_item_2: '途中の入金・出金はなく、期首・期末・年数だけを使います。',
	tool_cagr_formula_item_3: '結果は学習用の図解であり、予測や投資助言ではありません。',
	tool_cagr_example_title: '計算例',
	tool_cagr_example:
		'例：期首 10000、期末 16105.10、年数 5 → CAGR = ((16105.10 / 10000)^(1/5) − 1) × 100 ≈ 10.00%。',
	tool_cagr_usecases_title: 'こんなときに',
	tool_cagr_usecase_1: '複数年の投資や売上の伸びを年率ベースでざっくり比べる（図解のみ）。',
	tool_cagr_usecase_2: '課題用：固定の期首・期末・年数で CAGR パーセントを練習する。',
	tool_cagr_usecase_3: '相談前の年率スケッチ — 詳細な分析の代わりにはなりません。',
	tool_cagr_faq_q1: 'このツールの CAGR の式は？',
	tool_cagr_faq_a1:
		'CAGR = ((期末値 ÷ 期首値)^(1 ÷ 年数) − 1) × 100。期首・期末・年数はいずれも 0 より大きい必要があります。',
	tool_cagr_faq_q2: '単純な ROI との違いは？',
	tool_cagr_faq_a2:
		'単純 ROI は一期間の変化率で、何年かかったかを無視します。CAGR は入力した年数にわたって成長を年率化します。',
	tool_cagr_faq_q3: '期首や期末が 0 または負のとき？',
	tool_cagr_faq_a3:
		'両方とも正の値である必要があります。0 や負数では標準の CAGR 式が定義できないか、誤解を招きます。',
	tool_cagr_faq_q4: 'これは投資助言ですか？',
	tool_cagr_faq_a4:
		'いいえ。数値は学習用の図解にすぎず、投資・税務・資産運用の助言ではありません。過去や仮定の成長は将来を保証しません。',
	tool_cagr_disclaimer:
		'CAGR の結果は学習用の図解にすぎず、投資・税務・資産運用の助言ではありません。過去や仮定のリターンは将来を保証しません。実際のポートフォリオには手数料・税金・キャッシュフロー・リスクがあり、本ページではモデル化していません。',
	tool_cagr_references:
		'Investopedia の CAGR 定義と計算ガイド；標準の年率成長 ((EV/BV)^(1/n) − 1)。',
	tool_cagr_ref_cagr_label: 'Investopedia — Compound Annual Growth Rate (CAGR)',
	tool_cagr_ref_formula_label: 'Investopedia — CAGR の計算式',
};

export default ja;
