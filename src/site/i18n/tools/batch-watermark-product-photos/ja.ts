/**
 * i18n ツール分片（batch-watermark-product-photos / ja）。
 * H1 は検索句「商品画像に一括で透かし」。ユースケースという見出しは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：出品写真の束に同じ著作権行を入れる。 */
const ja: SiteLangDict = {
	tool_batch_watermark_product_photos_anchor_bc: '下',
	tool_batch_watermark_product_photos_anchor_bl: '左下',
	tool_batch_watermark_product_photos_anchor_br: '右下',
	tool_batch_watermark_product_photos_anchor_label: '位置',
	tool_batch_watermark_product_photos_anchor_mc: '中央',
	tool_batch_watermark_product_photos_anchor_ml: '左中',
	tool_batch_watermark_product_photos_anchor_mr: '右中',
	tool_batch_watermark_product_photos_anchor_tc: '上',
	tool_batch_watermark_product_photos_anchor_tl: '左上',
	tool_batch_watermark_product_photos_anchor_tr: '右上',
	tool_batch_watermark_product_photos_apply: 'すべて適用',
	tool_batch_watermark_product_photos_article:
		'出品前の商品写真の束に、同じ著作権の一行をこのタブで入れる。字の大きさは各写真の短辺に合わせ、横位置と縦位置が同じ相対コーナーに来る。1 枚プレビューしてからすべて適用し、小さすぎるキャンバスは飛ばして ZIP。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_batch_watermark_product_photos_chip_draft: '斜め DRAFT',
	tool_batch_watermark_product_photos_choose_files: '写真を選ぶ',
	tool_batch_watermark_product_photos_clear: 'クリア',
	tool_batch_watermark_product_photos_col_after: '処理後',
	tool_batch_watermark_product_photos_col_before: '処理前',
	tool_batch_watermark_product_photos_col_name: 'ファイル',
	tool_batch_watermark_product_photos_col_status: '状態',
	tool_batch_watermark_product_photos_color_label: '色',
	tool_batch_watermark_product_photos_desc:
		'商品画像に一括で透かし。短辺パーセントの字、1 枚プレビュー、すべて適用、ZIP。端末内で処理し、サーバーにアップロードしない。',
	tool_batch_watermark_product_photos_description:
		'商品画像に一括で透かし：出品写真の束を入れ、短辺から字の大きさを決め、1 枚プレビューしてからすべて適用し、小さすぎるキャンバスは飛ばして ZIP。手順：束を選び、角の印のまま、1 枚プレビュー、すべて適用。例：横位置と縦位置が同じ相対 SAMPLE を共有する。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_batch_watermark_product_photos_download_zip: 'ZIP をダウンロード',
	tool_batch_watermark_product_photos_drop_hint: 'JPEG、PNG、WebP の出品写真をドロップ（最大 20）。透かしはこのタブ内。',
	tool_batch_watermark_product_photos_empty: '先に写真を追加してください。',
	tool_batch_watermark_product_photos_empty_text: '適用する前に透かし文字を入れてください。',
	tool_batch_watermark_product_photos_err_decode: 'このファイルは読めません。スキップしました。',
	tool_batch_watermark_product_photos_err_encode: 'このファイルを書けませんでした。スキップしました。',
	tool_batch_watermark_product_photos_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザを試してください。',
	tool_batch_watermark_product_photos_err_tiny: '短辺が 64 px 未満のため、その行は透かしをスキップしました。',
	tool_batch_watermark_product_photos_err_too_many: '一度に 20 枚までです。超過分は入れていません。',
	tool_batch_watermark_product_photos_example:
		'サンプル読込は横の色面と縦の色面を入れ、SAMPLE を設定し、先頭をプレビューし、同じ相対位置を両方に適用して ZIP ダウンロードを有効にします。',
	tool_batch_watermark_product_photos_example_title: '例',
	tool_batch_watermark_product_photos_faq_a1:
		'送りません。読み取りと Canvas の透かしはこのタブ内です。ファイルは端末に留まり、サーバーにアップロードしません。ZIP 用スクリプトはこのサイトから読みますが、写真はタブを出ません。',
	tool_batch_watermark_product_photos_faq_a2:
		'ずれません。字の大きさは各写真の短辺のパーセント、九つのアンカーはそのキャンバスの割合です。縦も横も同じ相対コーナーです。',
	tool_batch_watermark_product_photos_faq_a3:
		'できません。このページは写真用です。PDF の透かしは別作業で、ページが必要なときは PDF 透かしツールを使ってください。',
	tool_batch_watermark_product_photos_faq_a4:
		'写真に文字の透かしは 1 枚のピクセル調整です。このページは束で一つの印を共有し、1 枚見てからすべて ZIP にします。',
	tool_batch_watermark_product_photos_faq_a5:
		'「まとめて透かし」でもここに来ます。このサイトに bulk-watermark の別 URL はありません。',
	tool_batch_watermark_product_photos_faq_q1: 'サーバーに送られますか？',
	tool_batch_watermark_product_photos_faq_q2: '横と縦で位置はずれますか？',
	tool_batch_watermark_product_photos_faq_q3: 'ここで PDF に透かしできますか？',
	tool_batch_watermark_product_photos_faq_q4: '写真に文字の透かしと何が違う？',
	tool_batch_watermark_product_photos_faq_q5: 'まとめて透かしで検索したらここですか？',
	tool_batch_watermark_product_photos_file_count_tpl: 'キューに {n} 枚',
	tool_batch_watermark_product_photos_format_jpeg: 'JPEG',
	tool_batch_watermark_product_photos_format_label: '出力',
	tool_batch_watermark_product_photos_format_png: 'PNG',
	tool_batch_watermark_product_photos_how_body:
		'束をキューへ入れ、一つの印を決め、1 枚プレビューしてから同じ相対位置をすべてに適用し、ZIP を持ち帰ります。',
	tool_batch_watermark_product_photos_how_item_1: '同じ著作権行が必要な出品写真を選びます。',
	tool_batch_watermark_product_photos_how_item_2: '文字・コーナー・短辺パーセントを設定。初期は SAMPLE、右下、短辺 8%。',
	tool_batch_watermark_product_photos_how_item_3: '1 枚プレビューを押します。横と縦が同じ相対コーナーか確認します。',
	tool_batch_watermark_product_photos_how_item_4: 'すべて適用を押します。短辺 64 px 未満はスキップ。JPEG は先に白マットを敷きます。',
	tool_batch_watermark_product_photos_how_item_5: '1 枚でも成功したら ZIP をダウンロード。1 枚だけ直すなら「写真に文字の透かし」。',
	tool_batch_watermark_product_photos_how_title: '透かしを入れる流れ',
	tool_batch_watermark_product_photos_opacity_label: '不透明度',
	tool_batch_watermark_product_photos_pct_label: '短辺に対する大きさ',
	tool_batch_watermark_product_photos_preview: '1枚プレビュー',
	tool_batch_watermark_product_photos_rotation_label: '角度',
	tool_batch_watermark_product_photos_rules_body:
		'字のピクセルは短辺×パーセントです。アンカーはそのキャンバスの割合であり、固定ピクセルではありません。',
	tool_batch_watermark_product_photos_rules_item_1:
		'初期の印：SAMPLE、右下、短辺の 8%、不透明度 45%。JPEG 出力は白マット。',
	tool_batch_watermark_product_photos_rules_item_2:
		'短辺 64 px 未満はその行が失敗。空文字ではすべて適用できません。読み取り失敗はスキップ。',
	tool_batch_watermark_product_photos_rules_item_3:
		'斜め DRAFT は文字を画面に敷きます。ZIP 内の重複名は 名前 (2).jpg または .png。',
	tool_batch_watermark_product_photos_rules_item_4:
		'ファイルは端末内に留まり、サーバーにアップロードしません。',
	tool_batch_watermark_product_photos_rules_title: '決まっていること',
	tool_batch_watermark_product_photos_sample: 'サンプル読込',
	tool_batch_watermark_product_photos_status_applying: '束に透かしを入れています…',
	tool_batch_watermark_product_photos_status_done: '一括が終わりました。表を確認して ZIP をダウンロード。',
	tool_batch_watermark_product_photos_status_ok: '透かし済み',
	tool_batch_watermark_product_photos_status_preview: 'プレビューはキューの先頭です。',
	tool_batch_watermark_product_photos_status_skip: 'スキップ',
	tool_batch_watermark_product_photos_status_tiny: '小さすぎ',
	tool_batch_watermark_product_photos_summary_tpl: '{ok} 枚済み · {skip} 枚スキップ',
	tool_batch_watermark_product_photos_text_label: '透かし文字',
	tool_batch_watermark_product_photos_title: '商品画像に一括で透かし',
	tool_batch_watermark_product_photos_usecase_1: '公開前にフォルダの出品写真へ店名を入れる。',
	tool_batch_watermark_product_photos_usecase_2: 'サンプルショットに SAMPLE を入れ、プレビューを出品に使われないようにする。',
	tool_batch_watermark_product_photos_usecase_3: '著作権行を複数枚に入れ、1 枚ずつ透かしツールを開かない。',
	tool_batch_watermark_product_photos_usecases_title: 'こんなときに',
	tool_batch_watermark_product_photos_warn_anim: 'アニメーションは先頭フレームだけ透かしします。',
	tool_batch_watermark_product_photos_warn_edge: '幅または高さが 8192 px を超えるファイルがあり、時間がかかります。',
	tool_batch_watermark_product_photos_warn_large: '25 MB を超えるファイルがあり、このタブのメモリが足りないことがあります。',
};

export default ja;
