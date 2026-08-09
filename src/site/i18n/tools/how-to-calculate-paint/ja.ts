/**
 * i18n tool shard (how-to-calculate-paint / ja).
 * 日本語独立重写：检索向「ペンキ・塗料 / 必要量」。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_paint_title: 'ペンキ・塗料の計算ツール — 必要量の見積もり',
	tool_paint_description:
		'壁の面積（m²、または長さ×高さ×面数）、塗り回数、塗布面積（m²/L、既定 10）から必要なリットル数を見積もります。例：40 m²・2 回塗り・10 m²/L → 8 L。缶数は 1 缶 3.78 L の仮定で任意表示。ブラウザ内で計算し、数値は端末に留まりサーバーへアップロードしません。',
	tool_paint_article:
		'壁面積と製品の塗布面積から購入前のリットル目安を出します。面積を直接入れるか、長さ・高さ・面数から組み立てます。',
	tool_paint_calculate: '計算する',
	tool_paint_sample: 'サンプル',
	tool_paint_clear: 'クリア',
	tool_paint_mode_label: '壁の入力方法',
	tool_paint_mode_area: '面積（m²）',
	tool_paint_mode_lhw: '長さ × 高さ × 面数',
	tool_paint_area_label: '壁面積（m²）',
	tool_paint_area_ph: '例: 40',
	tool_paint_len_label: '壁の長さ（m）',
	tool_paint_height_label: '壁の高さ（m）',
	tool_paint_walls_label: '面数',
	tool_paint_len_ph: '例: 5',
	tool_paint_height_ph: '例: 2.5',
	tool_paint_walls_ph: '例: 4',
	tool_paint_coats_label: '塗り回数',
	tool_paint_coats_ph: '例: 2',
	tool_paint_coverage_label: '塗布面積（m²/L）',
	tool_paint_coverage_ph: '例: 10',
	tool_paint_coverage_hint: '既定の 10 m²/L は目安です。缶の表示を優先してください。',
	tool_paint_cans_label: '缶数も表示（1 缶 3.78 L）',
	tool_paint_result_liters: '必要な塗料',
	tool_paint_result_area: '使用した壁面積',
	tool_paint_result_cans: '必要な缶数（3.78 L）',
	tool_paint_err_input: '正の壁面積（または長さ・高さ・面数）、塗り回数、塗布面積を入力してください。',
	tool_paint_how_title: '使い方',
	tool_paint_how_body:
		'面積か長さ×高さ×面数を選び、塗り回数と m²/L を入れます。リットル = 面積 × 回数 ÷ 塗布面積。缶数をオンにすると 3.78 で割って切り上げます。計算はブラウザのタブ内だけで、サーバーには送りません。',
	tool_paint_formula_title: '式と前提',
	tool_paint_formula_body: '塗料量は面積・回数・表示塗布面積から求めます：',
	tool_paint_formula_item_1: '面積 A = 直接 m²、または 長さ × 高さ × 面数（メートル）。',
	tool_paint_formula_item_2: 'リットル = A × 塗り回数 ÷ 塗布面積（m²/L）。既定は 10。',
	tool_paint_formula_item_3: '任意の缶数 = ceil(リットル ÷ 3.78)。3.78 L は約 1 米ガロンの仮定であり、銘柄保証ではありません。',
	tool_paint_example_title: '例',
	tool_paint_example:
		'例：壁 40 m²、2 回塗り、10 m²/L。リットル = 40 × 2 ÷ 10 = 8 L。3.78 L 缶なら ceil(8 ÷ 3.78) = 3 缶。',
	tool_paint_usecases_title: 'こんなときに',
	tool_paint_usecase_1: '室内の壁塗り前に買うリットルの目安を知りたいとき。',
	tool_paint_usecase_2: '塗り回数を変えて 1 回塗りと 2 回塗りを比べたいとき。',
	tool_paint_usecase_3: '工事見積もりを簡単な面積計算でざっと確認したいとき。',
	tool_paint_faq_q1: '塗布面積（m²/L）とは？',
	tool_paint_faq_a1: '1 リットルで 1 回塗りできるおよその平方メートルです。既定 10 は出発点で、缶表示を優先します。',
	tool_paint_faq_q2: 'なぜ 3.78 L 缶ですか？',
	tool_paint_faq_a2: '約 1 米ガロンに相当するよくあるサイズです。整数缶の目安であり、すべての製品がちょうど 3.78 L とは限りません。',
	tool_paint_faq_q3: '面積と長さ×高さ×面数、どちら？',
	tool_paint_faq_a3: 'どちらでも構いません。m² が分かっていれば面積、寸法と面数なら後者を使います。',
	tool_paint_faq_q4: '数値はアップロードされますか？',
	tool_paint_faq_a4: 'いいえ。端末上のブラウザで計算し、サーバーにはアップロードしません。',
	tool_paint_references: '長さ・面積の換算参考として NIST SP 811。',
	tool_paint_ref_nist_label: 'NIST — Special Publication 811（単位換算）',
};

export default ja;
