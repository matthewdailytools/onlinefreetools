/**
 * i18n tool shard (unit-converter / ja).
 * 日本語：単位換算 — 独立リライト（H1 にカテゴリ列挙の読点羅列を避ける）。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_unit_converter_title: '単位換算ツール — 長さ / 質量 / 温度 / 面積 / 体積 / 速度',
	tool_unit_converter_description:
		'長さ・質量・温度・面積・体積・速度を同じページで換算し、換算係数と温度の式を明示します。単位ペアごとにページを増やさず、よく使うカテゴリを一つのハブにまとめます。例：1 マイル → 1.60934 km、0 ℃ → 32 ℉。ブラウザ内で完結しデータを送信しません。学習用の係数であり、測量器や医療機器の代替ではありません。',
	tool_unit_converter_article:
		'単位換算ハブはよく使うカテゴリを一つの URL にまとめ、cm↔インチのようなペアごとにページを増やしません。縦×横の面積ワークフローは平方フィート専用ツールへ。',
	tool_unit_converter_calculate: '換算する',
	tool_unit_converter_sample: 'サンプルを入れる',
	tool_unit_converter_clear: 'クリア',
	tool_unit_converter_value_label: '数値',
	tool_unit_converter_value_ph: '例: 1',
	tool_unit_converter_from_label: '変換元の単位',
	tool_unit_converter_to_label: '変換先の単位',
	tool_unit_converter_category_label: 'カテゴリ',
	tool_unit_converter_cat_length: '長さ',
	tool_unit_converter_cat_mass: '質量',
	tool_unit_converter_cat_temperature: '温度',
	tool_unit_converter_cat_area: '面積',
	tool_unit_converter_cat_volume: '体積',
	tool_unit_converter_cat_speed: '速度',
	tool_unit_converter_result_label: '結果',
	tool_unit_converter_result_note: '学習用の換算です。認証された測定結果ではありません。',
	tool_unit_converter_err_value: '有限の数値を入力してください。',
	tool_unit_converter_err_temp: '選択した温度目盛で絶対零度を下回っています。',
	tool_unit_converter_how_title: '使い方',
	tool_unit_converter_how_body:
		'カテゴリを選び、数値と変換元/先を指定して換算します。面積単位の相互変換は本ページ、縦×横の面積は平方フィートツールへ。',
	tool_unit_converter_formula_title: '換算係数と温度の式',
	tool_unit_converter_formula_body:
		'線形カテゴリは SI 基準単位経由で換算します。温度は目盛の式を使います。前提：',
	tool_unit_converter_formula_item_1: '係数は一般的な SI / 慣用定義（例：1 mi = 1609.344 m、体積は米ガロン）。',
	tool_unit_converter_formula_item_2: '℃↔℉↔K：F = C×9/5+32、K = C+273.15（逆変換も同様）。',
	tool_unit_converter_formula_item_3: '結果は教育用の例示であり、認証測量ではありません。',
	tool_unit_converter_example_title: '例',
	tool_unit_converter_example: '例（長さ）：1 マイル → 1.60934 km。温度：0 ℃ → 32 ℉。',
	tool_unit_converter_usecases_title: 'こんなときに',
	tool_unit_converter_usecase_1: '宿題：キロとマイルを、ペアごとの別ページなしで換算。',
	tool_unit_converter_usecase_2: '料理や荷造りでの質量・体積のざっくり確認。',
	tool_unit_converter_usecase_3: '天気メモの温度目盛切替 — 投与量計算には使わない。',
	tool_unit_converter_faq_q1: 'なぜ単位ペアごとにページを分けないのですか？',
	tool_unit_converter_faq_a1:
		'ほぼ同じ換算 URL を大量に増やすのは doorway になり得ます。本ハブで主要カテゴリをまとめ、縦×横面積は平方フィートへ。',
	tool_unit_converter_faq_q2: 'マイルとガロンの定義は？',
	tool_unit_converter_faq_a2: '国際マイル（1609.344 m）と米液量ガロン（3.785411784 L）です。',
	tool_unit_converter_faq_q3: '温度はどう換算しますか？',
	tool_unit_converter_faq_a3: '℃を経由：F = C×9/5+32、K = C+273.15。絶対零度未満は拒否します。',
	tool_unit_converter_faq_q4: '平方フィートツールと同じですか？',
	tool_unit_converter_faq_a4: '違います。本ページは面積単位の相互変換、平方フィートは縦×横からの面積計算です。',
	tool_unit_converter_disclaimer:
		'換算結果は標準係数による教育用の例示であり、認証測定でも測量・医療助言でもありません。',
	tool_unit_converter_references: 'NIST の SI 関係、慣用係数、℃/℉/K の標準式。',
	tool_unit_converter_ref_nist_label: 'NIST — SI Units',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default ja;
