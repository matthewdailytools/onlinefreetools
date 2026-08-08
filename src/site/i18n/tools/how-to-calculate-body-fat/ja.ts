/**
 * i18n tool shard (how-to-calculate-body-fat / ja).
 * Independent rewrite in Japanese (not English skeleton); Navy/Army circumference, FAQ, YMYL.
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_body_fat_title: '体脂肪率の計算ツール — 周囲径から推定する',
	tool_body_fat_description:
		'米海軍の周囲径式で体脂肪率を推定（同一ページで陸軍/DoD スタイルも選択可）。例：男性、身長 178 cm、首回り 40 cm、ウエスト 86 cm → 約 15.3%。ブラウザ内で計算；学習用の目安であり、医療助言や診断ではありません。',
	tool_body_fat_article:
		'周囲径法は身長とメジャー値から体脂肪を推定します。Navy と Army（DoD 系）を同一の教育向け URL にまとめ、皮厚 caliper は FAQ で別手法として説明し、薄い別ページは作りません。',
	tool_body_fat_calculate: '計算する',
	tool_body_fat_sample: 'サンプルを入れる',
	tool_body_fat_clear: 'クリア',
	tool_body_fat_method_label: '方法',
	tool_body_fat_method_navy: '米海軍 周囲径法',
	tool_body_fat_method_army: '米陸軍 / DoD スタイル 周囲径法',
	tool_body_fat_sex_label: '性別（式の表）',
	tool_body_fat_sex_male: '男性',
	tool_body_fat_sex_female: '女性',
	tool_body_fat_height_label: '身長（cm）',
	tool_body_fat_height_ph: '例: 178',
	tool_body_fat_neck_label: '首回り（cm）',
	tool_body_fat_neck_ph: '例: 40',
	tool_body_fat_waist_label: 'ウエスト（cm）',
	tool_body_fat_waist_ph: '例: 86',
	tool_body_fat_hip_label: 'ヒップ（cm、女性）',
	tool_body_fat_hip_ph: '例: 96',
	tool_body_fat_result_label: '推定体脂肪率',
	tool_body_fat_result_note: '学習用の推定です。医療助言や診断ではありません。',
	tool_body_fat_err_input: '身長・首回り・ウエストは正の数で入力してください。',
	tool_body_fat_err_hip: '女性用の式には正のヒップ周囲が必要です。',
	tool_body_fat_err_geom: 'ウエストは首回りより大きく（女性はウエスト+ヒップも首より大）。',
	tool_body_fat_how_title: '使い方',
	tool_body_fat_how_body:
		'性別・身長・メジャー値（cm）を入力。公開されている log10 周囲径式のためインチに換算し、推定体脂肪 % を表示します。皮厚法は FAQ に記載、同一ページ内です。',
	tool_body_fat_formula_title: '式と測定の前提',
	tool_body_fat_formula_body:
		'男性：%BF ≈ 86.010×log10(ウエスト−首) − 70.041×log10(身長) + 36.387（インチ）。女性：%BF ≈ 163.205×log10(ウエスト+ヒップ−首) − 97.684×log10(身長) + 78.387。前提：',
	tool_body_fat_formula_item_1: 'Navy/DoD 標準位置でメジャー；姿勢と服装で結果が変わります。',
	tool_body_fat_formula_item_2: '入力は cm、式前に 1 in = 2.54 cm で換算。',
	tool_body_fat_formula_item_3: '推定は教育向けの例示であり、DXA/Bod Pod の臨床結果や医療助言ではありません。',
	tool_body_fat_example_title: '例',
	tool_body_fat_example:
		'例：男性、Navy 法、身長 178 cm、首 40 cm、ウエスト 86 cm → 体脂肪率 約 15.3%。',
	tool_body_fat_usecases_title: 'こんなときに',
	tool_body_fat_usecase_1: '授業：固定数値で Navy 周囲径式を練習。',
	tool_body_fat_usecase_2: '医師に相談する前のざっくりしたフィットネス目安（診断ではない）。',
	tool_body_fat_usecase_3: 'Navy と Army のラベルを同一ページで比較、別 URL 不要。',
	tool_body_fat_faq_q1: 'どの式を使いますか？',
	tool_body_fat_faq_a1:
		'米 Navy / DoD 系の log10 周囲径式。cm 入力はインチ換算後に適用。',
	tool_body_fat_faq_q2: 'このページの Navy と Army の違いは？',
	tool_body_fat_faq_a2:
		'いずれも同系統の周囲径推定。ラベルは検索上の区別用；測定の正確さの方が重要です。',
	tool_body_fat_faq_q3: '医療助言ですか？',
	tool_body_fat_faq_a3:
		'いいえ。結果は学習用推定であり、診断・治療計画・臨床体組成検査ではありません。',
	tool_body_fat_faq_q4: '皮厚 caliper は？',
	tool_body_fat_faq_a4:
		'皮厚式は複数部位と熟練した手技が必要。FAQ で説明し、薄い別ツール URL は作りません。',
	tool_body_fat_disclaimer:
		'体脂肪の推定は教育向けの例示にすぎず、医療助言・診断・臨床体組成検査の代替にはなりません。健康上の判断は資格を持つ専門家にご相談ください。',
	tool_body_fat_references:
		'米 Navy / DoD 周囲径式；ACE の教育向け体脂肪計算メモ；査読付き周囲径法文献。',
	tool_body_fat_ref_ace_label: 'ACE — 体脂肪計算（教育向け）',
	tool_body_fat_ref_pmc_label: 'PMC — 周囲径に基づく体脂肪法',
};

export default ja;
