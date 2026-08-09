/**
 * i18n tool shard (how-to-calculate-standard-deviation / ja).
 * 日本語として独立に書き直し（英模の直訳でない）。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_std_dev_title: '標準偏差の計算ツール — 標準偏差と分散を求める',
	tool_std_dev_description:
		'数値のリストを貼り付けて、標本（n−1）または母集団（n）の標準偏差と分散を計算します。定番データ 2, 4, 4, 4, 5, 5, 7, 9 では母集団の標準偏差はちょうど 2、標本では約 2.14 です。計算はブラウザ内で完結し、数値は端末内に留まりサーバーにアップロードしません。課題の検算やばらつきのざっくり確認に向いています。',
	tool_std_dev_article:
		'標準偏差は平均からの散らばり具合を表します。より大きな集団からの標本なら標本標準偏差（n−1 で割る）、リスト自体が全体なら母標準偏差（n で割る）を選びます。分散はその二乗です。',
	tool_std_dev_calculate: '計算する',
	tool_std_dev_sample: 'サンプルを入れる',
	tool_std_dev_clear: 'クリア',
	tool_std_dev_numbers_label: '数値',
	tool_std_dev_numbers_ph: '例: 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: 'カンマ・空白・改行で区切れます。',
	tool_std_dev_mode_label: 'モード',
	tool_std_dev_mode_sample: '標本（n−1）',
	tool_std_dev_mode_population: '母集団（n）',
	tool_std_dev_result_count: '個数',
	tool_std_dev_result_mean: '平均',
	tool_std_dev_result_variance: '分散',
	tool_std_dev_result_sd: '標準偏差',
	tool_std_dev_result_note_sample: '標本モードはベッセル補正（n−1 で割る）を使います。',
	tool_std_dev_result_note_population: '母集団モードは n で割ります（全体）。',
	tool_std_dev_err_empty: '有効な数値を 1 つ以上入力してください。',
	tool_std_dev_err_sample_n: '標本標準偏差には数値が 2 つ以上必要です。',
	tool_std_dev_how_title: '使い方',
	tool_std_dev_how_body:
		'数値を貼り、標本か母集団かを選び、計算します。平均を出し、偏差の二乗和を n−1 または n で割って分散にし、平方根が標準偏差です。処理はブラウザ内だけで、サーバーには送りません。',
	tool_std_dev_formula_title: '計算式',
	tool_std_dev_formula_body: '平均を x̄ とします。分散は偏差二乗の平均、標準偏差はその平方根です。',
	tool_std_dev_formula_item_1: '平均: x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: '標本分散: s² = Σ(xᵢ − x̄)² / (n − 1)；標本標準偏差 s = √s²',
	tool_std_dev_formula_item_3: '母分散: σ² = Σ(xᵢ − x̄)² / n；母標準偏差 σ = √σ²',
	tool_std_dev_example_title: '例',
	tool_std_dev_example:
		'定番の 2, 4, 4, 4, 5, 5, 7, 9 は平均 5、偏差二乗和 32。母集団: σ² = 32/8 = 4 → σ = 2。標本: s² = 32/7 ≈ 4.571 → s ≈ 2.138。よく見る「SD = 2」は母集団側の値です。',
	tool_std_dev_usecases_title: 'こんなときに',
	tool_std_dev_usecase_1: '宿題で短い点数リストの標本/母標準偏差を検算する。',
	tool_std_dev_usecase_2: 'グラフ化する前に、小さな列のばらつきをすぐ確認する。',
	tool_std_dev_usecase_3: '同じモードで二つの短い系列の変動の大きさを比べる。',
	tool_std_dev_faq_q1: '標本と母集団の標準偏差の違いは？',
	tool_std_dev_faq_a1:
		'標本は n−1 で割り（ベッセル補正）、より大きな集団を推定します。母集団はリストが全体のときに n で割ります。',
	tool_std_dev_faq_q2: '分散と標準偏差の関係は？',
	tool_std_dev_faq_a2:
		'分散は平均からの偏差二乗の平均です。標準偏差はその平方根で、元データの単位と同じになり読みやすいです。',
	tool_std_dev_faq_q3: 'なぜ定番例は 2 になるの？',
	tool_std_dev_faq_a3:
		'2, 4, 4, 4, 5, 5, 7, 9 の母標準偏差はちょうど 2、標本は約 2.14 です。教科書では母集団の値を示すことが多いです。',
	tool_std_dev_faq_q4: '数値はアップロードされますか？',
	tool_std_dev_faq_a4:
		'いいえ。解析と計算はブラウザのタブ内で行います。数値は端末内に留まり、サーバーにはアップロードしません。',
	tool_std_dev_references: 'Wikipedia の Standard deviation / Variance、および入門統計の標本・母集団の式。',
	tool_std_dev_ref_sd_label: 'Wikipedia — 標準偏差',
	tool_std_dev_ref_var_label: 'Wikipedia — 分散',
};

export default ja;
