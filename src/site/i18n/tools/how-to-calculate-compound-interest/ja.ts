/**
 * i18n tool shard (how-to-calculate-compound-interest / ja).
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_compound_interest_title: '複利計算ツール — 将来価値の求め方',
	tool_compound_interest_description:
		'元本・年利率・年数・複利回数から複利の将来価値を計算します。式 A = P(1 + r/n)^(nt)、単利モードも選択可。例：元本10000・年利5%・10年・年1回複利 → 約16288.95。ブラウザ内で計算；学習用の試算であり、投資助言ではありません。',
	tool_compound_interest_article:
		'複利はすでに付いた利息にも利息が乗ります。本ページでは離散複利の標準式を示し、同じ入力で単利と比較でき、授業や個人の概算向けに前提も明示します。',
	tool_compound_interest_calculate: '計算する',
	tool_compound_interest_sample: 'サンプルを読み込む',
	tool_compound_interest_clear: 'クリア',
	tool_compound_interest_mode_label: '利息の方式',
	tool_compound_interest_mode_compound: '複利',
	tool_compound_interest_mode_simple: '単利',
	tool_compound_interest_principal_label: '元本 (P)',
	tool_compound_interest_principal_placeholder: '例 10000',
	tool_compound_interest_rate_label: '年利率 (%)',
	tool_compound_interest_rate_placeholder: '例 5',
	tool_compound_interest_years_label: '期間（年）',
	tool_compound_interest_years_placeholder: '例 10',
	tool_compound_interest_freq_label: '年間の複利回数 (n)',
	tool_compound_interest_freq_1: '年1回 (1)',
	tool_compound_interest_freq_2: '半年ごと (2)',
	tool_compound_interest_freq_4: '四半期ごと (4)',
	tool_compound_interest_freq_12: '毎月 (12)',
	tool_compound_interest_freq_365: '毎日 (365)',
	tool_compound_interest_result_future: '将来価値 (A)',
	tool_compound_interest_result_interest: '利息',
	tool_compound_interest_result_note: '学習用の試算です — 投資助言ではありません。',
	tool_compound_interest_err_principal: '元本は0より大きい必要があります。',
	tool_compound_interest_err_years: '年数は0より大きい必要があります。',
	tool_compound_interest_err_rate: '年利率は0または正の数である必要があります。',
	tool_compound_interest_err_overflow: '結果が大きすぎます。期間を短くするか利率を下げてください。',
	tool_compound_interest_how_title: '使い方',
	tool_compound_interest_how_body:
		'元本、名目年利率（％）、年数を入力します。複利モードでは1年あたりの複利回数を選び、将来価値と利息を算出します。単利モードは A = P(1 + r t) で、複利回数は使いません。',
	tool_compound_interest_formula_title: '式と前提',
	tool_compound_interest_formula_body:
		'複利：A = P (1 + r/n)^(n t)。r は小数の名目年利率、n は年間複利回数。単利：A = P (1 + r t)。次の点に注意：',
	tool_compound_interest_formula_item_1:
		'入力するのは名目年利率。税金・手数料・インフレは差し引きません。',
	tool_compound_interest_formula_item_2:
		'期間中の追加入金・引出しはなし。期初元本のみが増えます。',
	tool_compound_interest_formula_item_3:
		'複利回数は実効的な伸びを変えます。実効年率の詳細はFAQにまとめ、別ツールにはしません。',
	tool_compound_interest_formula_item_4:
		'結果は学習用の試算であり、将来予測や投資助言ではありません。',
	tool_compound_interest_example_title: '計算例',
	tool_compound_interest_example:
		'例：元本10000、年利5%、10年、年1回複利 → A ≈ 16288.95、利息 ≈ 6288.95。同じ条件を単利にすると A = 15000。',
	tool_compound_interest_usecases_title: 'こんなときに',
	tool_compound_interest_usecase_1:
		'貯蓄の概算：一括元本が所定利率で複利運用された場合の将来残高（参考試算のみ）。',
	tool_compound_interest_usecase_2:
		'授業・演習：P、r、n、t を固定して複利の式を練習する。',
	tool_compound_interest_usecase_3:
		'単利との比較：同じ入力で単利に切り替え、複利の差を確認する。',
	tool_compound_interest_faq_q1: 'どの複利の式を使っていますか？',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t)。r は小数の年利率、n は年間複利回数。利息は A − P。',
	tool_compound_interest_faq_q2: '単利との違いは？',
	tool_compound_interest_faq_a2:
		'単利は A = P (1 + r t) で利息の再投資はありません。方式で単利を選べば複利回数は無視されます。',
	tool_compound_interest_faq_q3: '複利回数（n）とは？',
	tool_compound_interest_faq_a3:
		'1年に利息を何回加算するか（1=年1回、12=毎月、365=毎日）。名目利率が同じなら、一般に n が大きいほど残高は増えやすいです。',
	tool_compound_interest_faq_q4: '投資助言ですか？',
	tool_compound_interest_faq_a4:
		'いいえ。表示は学習用の試算であり、投資・税務・金融の助言ではありません。',
	tool_compound_interest_faq_q5: '利率が0%のときは？',
	tool_compound_interest_faq_a5: '年利率0%なら将来価値は元本と同じで、利息は0です。',
	tool_compound_interest_disclaimer:
		'複利・単利の結果は学習用の試算であり、投資・税務・金融の助言ではありません。過去または仮定の成長が将来の結果を保証するものではありません。',
	tool_compound_interest_references:
		'Investopedia の compound interest / simple interest の定義；標準離散複利式 A = P(1 + r/n)^(nt)。',
	tool_compound_interest_ref_compound_label: 'Investopedia — 複利 (Compound Interest)',
	tool_compound_interest_ref_simple_label: 'Investopedia — 単利 (Simple Interest)',
};

export default ja;
