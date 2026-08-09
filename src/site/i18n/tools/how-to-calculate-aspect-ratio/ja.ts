/**
 * i18n tool shard (how-to-calculate-aspect-ratio / ja).
 * 日本語独立重写：检索向「アスペクト比 / 解像度スケール」。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_aspect_ratio_title: 'アスペクト比の計算ツール — 比率の求め方と拡大縮小',
	tool_aspect_ratio_description:
		'幅と高さから最も簡単なアスペクト比を求め、目標の幅（または高さ）に合わせてもう一方をスケールします。16:9・4:3・1:1 は同一ページのプリセットです。例：1920×1080 → 16:9、幅 1280 にすると高さ 720。ブラウザ内で計算し、数値は端末に留まりサーバーへアップロードしません。',
	tool_aspect_ratio_article:
		'画素や辺の組を最大公約数で約分し、比率を保ったまま書き出しサイズを決めます。動画・デザイン・UI の解像度調整向けです。',
	tool_aspect_ratio_calculate: '計算する',
	tool_aspect_ratio_sample: 'サンプル',
	tool_aspect_ratio_clear: 'クリア',
	tool_aspect_ratio_preset_label: 'プリセット（任意）',
	tool_aspect_ratio_preset_custom: 'カスタム',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: '幅',
	tool_aspect_ratio_h_label: '高さ',
	tool_aspect_ratio_w_ph: '例: 1920',
	tool_aspect_ratio_h_ph: '例: 1080',
	tool_aspect_ratio_scale_mode_label: 'スケール基準',
	tool_aspect_ratio_scale_by_w: '目標の幅',
	tool_aspect_ratio_scale_by_h: '目標の高さ',
	tool_aspect_ratio_target_w_label: '目標の幅',
	tool_aspect_ratio_target_h_label: '目標の高さ',
	tool_aspect_ratio_target_w_ph: '例: 1280',
	tool_aspect_ratio_target_h_ph: '例: 720',
	tool_aspect_ratio_result_ratio: 'アスペクト比',
	tool_aspect_ratio_result_scaled: 'スケール後のサイズ',
	tool_aspect_ratio_err_input: '正の幅・高さと、スケールする側の正の目標値を入力してください。',
	tool_aspect_ratio_how_title: '使い方',
	tool_aspect_ratio_how_body:
		'幅と高さを入れるか、16:9 / 4:3 / 1:1 のプリセットでよく使う解像度を入れます。最大公約数で約分し、目標の幅または高さからもう一方を求めます。計算はブラウザのタブ内だけで、サーバーには送りません。',
	tool_aspect_ratio_formula_title: '式と前提',
	tool_aspect_ratio_formula_body: '約分と比例スケールは入力の最大公約数を使います：',
	tool_aspect_ratio_formula_item_1: 'g = gcd(丸めたW, 丸めたH)。簡約比 = (W÷g):(H÷g)。',
	tool_aspect_ratio_formula_item_2: '幅基準: H′ = 目標幅 × H ÷ W。高さ基準: W′ = 目標高さ × W ÷ H。',
	tool_aspect_ratio_formula_item_3: 'プリセットは例の解像度を埋めるだけで、別ページではありません。',
	tool_aspect_ratio_example_title: '例',
	tool_aspect_ratio_example:
		'例：幅 1920、高さ 1080。gcd(1920,1080)=120 なので 16:9。幅を 1280 にすると高さ = 1280 × 1080 ÷ 1920 = 720。',
	tool_aspect_ratio_usecases_title: 'こんなときに',
	tool_aspect_ratio_usecase_1: '16:9 のまま動画の書き出し解像度を決めたいとき。',
	tool_aspect_ratio_usecase_2: 'スマホやモニタの比率に合わせてデザインカンバスを合わせるとき。',
	tool_aspect_ratio_usecase_3: '既知の解像度を短い比率表記にして仕様に書くとき。',
	tool_aspect_ratio_faq_q1: 'なぜ 16:9 だけ別ツールにしないのですか？',
	tool_aspect_ratio_faq_a1: 'よく使う出発点なので、同一ページの選択肢にまとめています。ほぼ同じ計算を URL ごとに増やす必要はありません。',
	tool_aspect_ratio_faq_q2: '比率はどう約分されますか？',
	tool_aspect_ratio_faq_a2: '整数に丸めたあと最大公約数で割ります。1920×1080 は 16:9 になります。',
	tool_aspect_ratio_faq_q3: '高さから幅を求められますか？',
	tool_aspect_ratio_faq_a3: 'はい。「目標の高さ」に切り替えれば、同じ比率のまま幅を計算します。',
	tool_aspect_ratio_faq_q4: '数値はアップロードされますか？',
	tool_aspect_ratio_faq_a4: 'いいえ。端末上のブラウザで計算し、サーバーにはアップロードしません。',
	tool_aspect_ratio_references: '長さ・単位換算の参考として NIST SP 811。',
	tool_aspect_ratio_ref_nist_label: 'NIST — Special Publication 811（単位換算）',
};

export default ja;
