/**
 * i18n tool shard (measuring-magnetic-fields / ja).
 * 検索語：磁場を測る / 磁場強度 / 磁石のガウス。磁力リンク（BitTorrent）と混同しない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_measuring_magnetic_fields_title: '磁場を測る — 磁場強度の計算',
	tool_measuring_magnetic_fields_description:
		'磁場を測る：ホールプローブやガウスメータの読みをテスラとガウスに換算します。例：200 G → 0.02 T。磁石のガウス強度を目安表と照らし、棒磁石の軸上磁場を寸法から見積もることもできます。計算はブラウザ内で完結し、数値はサーバーに送りません。',
	tool_measuring_magnetic_fields_article:
		'まず計器のレンジとプローブ位置を決め、そのあと単位を揃えます。幾何からの見積もりは校正測定でも吸着力（kg）でもありません。',
	tool_measuring_magnetic_fields_calculate: '換算',
	tool_measuring_magnetic_fields_sample: 'サンプル',
	tool_measuring_magnetic_fields_clear: 'クリア',
	tool_measuring_magnetic_fields_estimate: '磁場を見積もる',
	tool_measuring_magnetic_fields_convert_heading: '計器の読みを換算',
	tool_measuring_magnetic_fields_estimate_heading: '任意：磁石の磁場を見積もる',
	tool_measuring_magnetic_fields_value_label: '読み取り値',
	tool_measuring_magnetic_fields_value_ph: '例 200',
	tool_measuring_magnetic_fields_unit_label: '計器上の単位',
	tool_measuring_magnetic_fields_vacuum_label: '真空/空気中の H も表示（A/m とエルステッド）',
	tool_measuring_magnetic_fields_result_t: 'テスラ (T)',
	tool_measuring_magnetic_fields_result_mt: 'ミリテスラ (mT)',
	tool_measuring_magnetic_fields_result_ut: 'マイクロテスラ (µT)',
	tool_measuring_magnetic_fields_result_nt: 'ナノテスラ (nT)',
	tool_measuring_magnetic_fields_result_g: 'ガウス (G)',
	tool_measuring_magnetic_fields_result_mg: 'ミリガウス (mG)',
	tool_measuring_magnetic_fields_result_kg: 'キロガウス (kG)',
	tool_measuring_magnetic_fields_earth_line: '地磁気（教材用の中点 ~50 µT）の約 {n} 倍。',
	tool_measuring_magnetic_fields_result_h: 'H（A/m、真空/空気）',
	tool_measuring_magnetic_fields_result_oe: 'エルステッド (Oe、真空/空気）',
	tool_measuring_magnetic_fields_result_note:
		'磁場の関係：1 T = 10⁴ G。任意の H は真空/空気の B = μ₀H のみ。B と H は別の量です。',
	tool_measuring_magnetic_fields_err_generic: '有限の非負の読みを入力してください。',
	tool_measuring_magnetic_fields_err_negative: 'このページは大きさを扱います。負の値は受け付けません。',
	tool_measuring_magnetic_fields_err_z: '軸方向距離 z は 0 以上（面からの mm）にしてください。',
	tool_measuring_magnetic_fields_err_grade: '表にあるグレード（N35–N52）を選んでください。',
	tool_measuring_magnetic_fields_err_dims: '正の有限値をミリメートルで入力してください。',
	tool_measuring_magnetic_fields_grade_label: 'NdFeB グレード（Br の中点）',
	tool_measuring_magnetic_fields_shape_label: '形状',
	tool_measuring_magnetic_fields_shape_disc: '円板 / 円柱',
	tool_measuring_magnetic_fields_shape_block: '角柱 / 棒磁石',
	tool_measuring_magnetic_fields_diam_label: '直径 (mm)',
	tool_measuring_magnetic_fields_thick_label: '軸方向の厚さ (mm)',
	tool_measuring_magnetic_fields_len_label: '端面の長さ (mm)',
	tool_measuring_magnetic_fields_width_label: '端面の幅 (mm)',
	tool_measuring_magnetic_fields_z_label: '面からの距離 z (mm)',
	tool_measuring_magnetic_fields_estimate_out_t: '軸上 B (T)',
	tool_measuring_magnetic_fields_estimate_out_g: '軸上 B (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'一様な軸方向磁化の円板公式（角柱は等価半径）。面の近くは勾配が急です。校正済みガウスメータではなく、吸着力 kg でもありません。',
	tool_measuring_magnetic_fields_chart_title: '磁石の磁場の目安（桁）',
	tool_measuring_magnetic_fields_chart_col_source: '対象',
	tool_measuring_magnetic_fields_chart_col_b: '典型的な B',
	tool_measuring_magnetic_fields_chart_earth: '地磁気（弱磁場の確認）',
	tool_measuring_magnetic_fields_chart_earth_b: '約 25–65 µT（ここでは中点 ~50 µT）',
	tool_measuring_magnetic_fields_chart_fridge: '冷蔵庫マグネット / 弱い磁石（ガウス）',
	tool_measuring_magnetic_fields_chart_fridge_b: '面付近で約 5–50 mT（約 50–500 G）',
	tool_measuring_magnetic_fields_chart_ndfeb: 'ネオジム表面（磁石の磁場）',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '面付近でよくある約 0.2–0.6 T。吸着力 kg ではない',
	tool_measuring_magnetic_fields_chart_mri: 'MRI（桁の目安のみ）',
	tool_measuring_magnetic_fields_chart_mri_b: '約 1.5–3 T。装置仕様や安全判定ではない',
	tool_measuring_magnetic_fields_how_title: '磁場の測り方',
	tool_measuring_magnetic_fields_how_body:
		'計器を選び、プローブを置き、単位を読んでから換算します。棒磁石の見積もりは任意で、測定の代わりにはなりません。',
	tool_measuring_magnetic_fields_how_item_1:
		'用途に合う計器を選ぶ。磁石ならガウスメータやホールプローブ（mT–T）。スマホの磁力計は地磁気 ~50 µT のような弱磁場向け。',
	tool_measuring_magnetic_fields_how_item_2:
		'知りたい軸にセンサを置き、面からの距離を記録し、飽和に注意（安いセンサはネオジムの近くで振り切れる）。',
	tool_measuring_magnetic_fields_how_item_3: '計器の数字と単位（ガウスまたはテスラ）を読む。',
	tool_measuring_magnetic_fields_how_item_4:
		'「換算」して目安表と見比べる。サンプルは 200 G → 0.02 T を入れる。',
	tool_measuring_magnetic_fields_how_item_5:
		'計器がないときは「磁場を見積もる」を開き、グレードと寸法から円板・棒磁石の軸上磁場を近似する。校正値ではない。',
	tool_measuring_magnetic_fields_formula_title: '磁場の公式',
	tool_measuring_magnetic_fields_formula_body:
		'換算の軸は SI のテスラです。H は真空/空気をオンにしたときだけ出ます。',
	tool_measuring_magnetic_fields_formula_item_1:
		'関係：1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT；1 G = 10⁻⁴ T；1 kG = 0.1 T；1 mG = 10⁻⁷ T。',
	tool_measuring_magnetic_fields_formula_item_2:
		'磁場の強さ H（真空/空気）：B(T) = μ₀ H(A/m)、μ₀ = 4π×10⁻⁷ N·A⁻²。1 Oe ≈ 79.577 A/m。この近似でのみ 1 G が 1 Oe に対応。B と H は別物。',
	tool_measuring_magnetic_fields_formula_item_3:
		'円板（一様な軸方向磁化）：B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)]（メートル）。角柱は R = √(端面の長さ×幅 / π)。有限要素ではありません。',
	tool_measuring_magnetic_fields_formula_item_4:
		'磁束 Φ = B A は一様で面に垂直なときだけ。このツールの出力は B であり Φ ではない。見積もりは残留 Br を使い、磁気モーメントの完全解ではない。N グレードの Br は区間の中点。',
	tool_measuring_magnetic_fields_example_title: '例',
	tool_measuring_magnetic_fields_example:
		'例：ホールプローブが 200 G。換算 → 0.02 T = 20 mT = 2×10⁴ µT = 200 G。地磁気 ~50 µT の約 400 倍。冷蔵庫マグネットと強いネオジム表面のあいだのガウス強度です。',
	tool_measuring_magnetic_fields_usecases_title: '向いている場面',
	tool_measuring_magnetic_fields_usecase_1:
		'実験ノート：ガウスメータが 200 G、報告書にはテスラが要る（磁場の測定 / 磁場強度）。',
	tool_measuring_magnetic_fields_usecase_2:
		'磁石のガウス：目安表と照合し、スマホの飽和を表面磁場と取り違えない。',
	tool_measuring_magnetic_fields_usecase_3:
		'棒磁石の磁場：グレードと寸法から軸上 B を見積もる。2 個の吸着力ではない。',
	tool_measuring_magnetic_fields_faq_q1: '磁場はどう測る？',
	tool_measuring_magnetic_fields_faq_a1:
		'磁石ならホールプローブかガウスメータ（mT–T）。軸上に置き、面からの距離を記録し、レンジ内か確認。スマホはネオジムの近くで飽和しやすい。単位を読んでからここで換算（例：200 G → 0.02 T）。引張力（ニュートン）は別作業です。',
	tool_measuring_magnetic_fields_faq_q2: '磁場の公式 / 磁場強度の公式は？',
	tool_measuring_magnetic_fields_faq_a2:
		'B の換算は 1 T = 10⁴ G。真空や空気では H が B = μ₀H。1 G ≈ 1 Oe はその近似だけ。磁束 Φ = BA は計算しません。',
	tool_measuring_magnetic_fields_faq_q3: '磁石のガウスと目安表の違いは？',
	tool_measuring_magnetic_fields_faq_a3:
		'ガウス強度は B をガウスで書いた値。表は地磁気・冷蔵庫・ネオジム表面の桁であり、店頭の吸着力 kg 表ではありません。',
	tool_measuring_magnetic_fields_faq_q4: '磁力と磁場は同じ？',
	tool_measuring_magnetic_fields_faq_a4:
		'違います。ここは B の換算と見積もりです。磁力（2 個の磁石のあいだや F = qvB）は別計算で扱いません。',
	tool_measuring_magnetic_fields_faq_q5: '磁力線や一様磁場の図は出せる？',
	tool_measuring_magnetic_fields_faq_a5:
		'対話的な図はありません。定性的には棒磁石の軸上 B は面から離れると落ちます。一様磁場は理想化で、冷蔵庫や円板磁石は大きく不均一です。',
	tool_measuring_magnetic_fields_disclaimer:
		'結果は教材用の換算と幾何の見積もりであり、校正測定でも、医療・インプラント・MRI の安全判断でもありません。',
	tool_measuring_magnetic_fields_references:
		'BIPM SI 冊子（テスラ）；NIST CODATA μ₀；地磁気の桁は NOAA の FAQ。',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — SI 冊子（テスラ）',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — 真空の透磁率 μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — 地磁気 FAQ',
};

export default ja;
