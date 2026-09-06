/**
 * i18n ツール分片（bulk-convert-images-to-jpg / ja）。
 * H1 は検索句「画像を JPG に一括変換」。ユースケースという見出しは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：提出先が JPG しか受けないときの一括変換。口語のツールサイト。 */
const ja: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'提出欄が .jpg だけのとき、写真・PNG ロゴ・スマホの HEIC をこのタブでまとめて .jpg にする。透明部分は共通のマット、失敗した行は飛ばして ZIP。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: '白マット',
	tool_bulk_convert_images_to_jpg_choose_files: '画像を選ぶ',
	tool_bulk_convert_images_to_jpg_clear: 'クリア',
	tool_bulk_convert_images_to_jpg_col_after: '変換後',
	tool_bulk_convert_images_to_jpg_col_before: '変換前',
	tool_bulk_convert_images_to_jpg_col_name: 'ファイル',
	tool_bulk_convert_images_to_jpg_col_status: '状態',
	tool_bulk_convert_images_to_jpg_convert: 'すべて変換',
	tool_bulk_convert_images_to_jpg_desc:
		'画像を JPG に一括変換し、透明は共通マット、ZIP でまとめる。端末内で処理し、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_jpg_description:
		'画像を JPG に一括変換：写真、PNG ロゴ、HEIC をまとめてマットを敷き、このタブで .jpg を書き、失敗は飛ばして ZIP にする。手順：束を選び、黒が指定されていなければ白マットのまま、すべて変換。例：不透明な写真と穴あきロゴを白に載せると .jpg が二つできる。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_jpg_download_zip: 'ZIP をダウンロード',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'PNG、JPEG、WebP、GIF、HEIC をドロップ（最大 20）。変換はこのタブ内。',
	tool_bulk_convert_images_to_jpg_empty: '先に画像を追加してください。',
	tool_bulk_convert_images_to_jpg_err_decode: 'このファイルは読めません（HEIC は別ブラウザが必要なことがあります）。スキップしました。',
	tool_bulk_convert_images_to_jpg_err_encode: 'このファイルを .jpg に書けませんでした。スキップしました。',
	tool_bulk_convert_images_to_jpg_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザを試してください。',
	tool_bulk_convert_images_to_jpg_err_too_many: '一度に 20 枚までです。超過分は入れていません。',
	tool_bulk_convert_images_to_jpg_example:
		'サンプル読込は不透明な色面と透明ロゴを白マットに載せ、二つの .jpg 名を出し、ZIP ダウンロードを有効にします。',
	tool_bulk_convert_images_to_jpg_example_title: '例',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'送りません。読み取りと .jpg 書き出しはこのタブ内です。ファイルは端末に留まり、サーバーにアップロードしません。ZIP 用スクリプトはこのサイトから読みますが、画像はタブを出ません。',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'ここでできます。PNG を JPG にするにはファイルを選び、穴が黒くならないよう白マットのまま、すべて変換します。',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'このブラウザが HEIC を読めない行は飛ばし、残りは ZIP に入ります。Safari にするか、先にスマホ側で変換してください。',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'不要です。JPEG も JPG も同じ出力で、ファイル名は .jpg です。',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'ここでは拡張子を JPG にします。出品写真を 200 KB 付近まで小さくするのは「商品写真を一括圧縮」です。',
	tool_bulk_convert_images_to_jpg_faq_q1: 'サーバーに送られますか？',
	tool_bulk_convert_images_to_jpg_faq_q2: 'PNG を JPG にするには？',
	tool_bulk_convert_images_to_jpg_faq_q3: 'HEIC を JPG にできなかったら？',
	tool_bulk_convert_images_to_jpg_faq_q4: 'JPEG 用の別ツールが要りますか？',
	tool_bulk_convert_images_to_jpg_faq_q5: '写真の圧縮と同じですか？',
	tool_bulk_convert_images_to_jpg_file_count_tpl: 'キューに {n} 枚',
	tool_bulk_convert_images_to_jpg_how_body:
		'JPG しか受け付けない提出先向けに、対象をキューへ入れ、透明ピクセルは一つのマットで塗ってここで変換し、成功分の ZIP を持ち帰ります。',
	tool_bulk_convert_images_to_jpg_how_item_1: '提出先が JPG しか受けない写真・PNG・HEIC を選びます。',
	tool_bulk_convert_images_to_jpg_how_item_2: '黒背景の指定がなければ白マットのまま。JPG は穴を残せません。',
	tool_bulk_convert_images_to_jpg_how_item_3: 'メール添付を軽くしたいときだけ画質を下げます。仕事は JPG 化であり、200 KB 狙いではありません。',
	tool_bulk_convert_images_to_jpg_how_item_4: 'すべて変換を押します。読めない HEIC は飛ばし、残りは .jpg になります。',
	tool_bulk_convert_images_to_jpg_how_item_5: '1 枚でも成功したら ZIP をダウンロード。初回表示でサンプル読込は済んでいます。',
	tool_bulk_convert_images_to_jpg_how_title: 'JPG にする流れ',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: '黒',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: '指定色',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: '透明の下に敷く色',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: '白',
	tool_bulk_convert_images_to_jpg_quality_label: 'JPG の画質',
	tool_bulk_convert_images_to_jpg_rules_body:
		'JPG にアルファはありません。どのファイルも同じマットの上に描いて .jpg で保存します。',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'出力名は必ず .jpg で終わります。',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'透明ピクセルは書き出し前に共通マットで埋めます。「マットなし」はなく、穴が突然の黒塊になるのを避けます。',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'読み取りや書き出しの失敗はその行だけスキップ。ZIP 内の重複名は 名前 (2).jpg。アニメは先頭フレームだけ。',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'ファイルは端末内に留まり、サーバーにアップロードしません。',
	tool_bulk_convert_images_to_jpg_rules_title: '決まっていること',
	tool_bulk_convert_images_to_jpg_sample: 'サンプル読込',
	tool_bulk_convert_images_to_jpg_status_compressing: 'まとめて JPG に変換しています…',
	tool_bulk_convert_images_to_jpg_status_done: '一括が終わりました。表を確認して ZIP をダウンロード。',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG できました',
	tool_bulk_convert_images_to_jpg_status_skip: 'スキップ',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} 枚できました · {skip} 枚スキップ',
	tool_bulk_convert_images_to_jpg_title: '画像を JPG に一括変換',
	tool_bulk_convert_images_to_jpg_usecase_1: '申し込みが PNG を拒み、添付は JPG だけ。',
	tool_bulk_convert_images_to_jpg_usecase_2: '印刷所へ渡す商品写真の束を .jpg でメールする。',
	tool_bulk_convert_images_to_jpg_usecase_3: 'Windows が開けないスマホ HEIC を、このブラウザが読める分だけ JPG にする。',
	tool_bulk_convert_images_to_jpg_usecases_title: 'こんなときに',
	tool_bulk_convert_images_to_jpg_warn_anim: 'アニメーションは先頭フレームだけ変換します。',
	tool_bulk_convert_images_to_jpg_warn_edge: '幅または高さが 8192 px を超えるファイルがあり、時間がかかります。',
	tool_bulk_convert_images_to_jpg_warn_large: '25 MB を超えるファイルがあり、このタブのメモリが足りないことがあります。',
};

export default ja;
