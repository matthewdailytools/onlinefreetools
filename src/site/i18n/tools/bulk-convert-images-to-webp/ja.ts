/**
 * i18n ツール分片（bulk-convert-images-to-webp / ja）。
 * H1 は検索句「画像を WebP に一括変換」。ユースケースという見出しは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：サイト素材を有損 WebP にそろえ、透過があれば残す。 */
const ja: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'サイト素材を WebP にしたいとき、PNG ロゴと写真をこのタブで有損 .webp にする。元に透過があれば残し、このブラウザが書けない行は飛ばして ZIP。メールが WebP を拒むなら JPG へ。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_webp_chip_q80: '画質 0.8',
	tool_bulk_convert_images_to_webp_choose_files: '画像を選ぶ',
	tool_bulk_convert_images_to_webp_clear: 'クリア',
	tool_bulk_convert_images_to_webp_col_after: '変換後',
	tool_bulk_convert_images_to_webp_col_before: '変換前',
	tool_bulk_convert_images_to_webp_col_name: 'ファイル',
	tool_bulk_convert_images_to_webp_col_status: '状態',
	tool_bulk_convert_images_to_webp_convert: 'すべて変換',
	tool_bulk_convert_images_to_webp_desc:
		'画像を WebP に一括変換し、有損画質、元に透過があれば残して ZIP。端末内で処理し、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_webp_description:
		'画像を WebP に一括変換：PNG ロゴや写真をこのタブで有損 WebP にし、JPEG マットは敷かず、書けない行は飛ばして ZIP。手順：束を選び、画質は 0.8 付近、すべて変換。例：不透明な写真と穴あきロゴがどちらも .webp になる。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_webp_download_zip: 'ZIP をダウンロード',
	tool_bulk_convert_images_to_webp_drop_hint: 'JPEG、PNG、WebP、GIF をドロップ（最大 20）。変換はこのタブ内。',
	tool_bulk_convert_images_to_webp_empty: '先に画像を追加してください。',
	tool_bulk_convert_images_to_webp_err_decode: 'このファイルは読めません。スキップしました。',
	tool_bulk_convert_images_to_webp_err_encode: 'このファイルを WebP に書けませんでした。スキップしました。',
	tool_bulk_convert_images_to_webp_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザを試してください。',
	tool_bulk_convert_images_to_webp_err_too_many: '一度に 20 枚までです。超過分は入れていません。',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'このブラウザは WebP を返しませんでした。その行はスキップし、JPEG にはしません。',
	tool_bulk_convert_images_to_webp_example:
		'サンプル読込は不透明な色面と透明ロゴを入れ、二つの .webp を書き、ZIP ダウンロードを有効にします。ロゴの穴は残ります。',
	tool_bulk_convert_images_to_webp_example_title: '例',
	tool_bulk_convert_images_to_webp_faq_a1:
		'送りません。読み取りと WebP 書き出しはこのタブ内です。ファイルは端末に留まり、サーバーにアップロードしません。ZIP 用スクリプトはこのサイトから読みますが、画像はタブを出ません。',
	tool_bulk_convert_images_to_webp_faq_a2:
		'ここでできます。png を webp にするにはファイルを選び、画質は 0.8 付近、すべて変換。PNG にアルファがあれば穴は残ります。',
	tool_bulk_convert_images_to_webp_faq_a3:
		'メールや CMS がまだ WebP を拒むことがあります。その添付は「画像を JPG に一括変換」を使ってください。',
	tool_bulk_convert_images_to_webp_faq_a4:
		'その行はスキップします。JPEG にすり替えません。新しい Chrome、Edge、Firefox を試してください。',
	tool_bulk_convert_images_to_webp_faq_a5:
		'動きません。先頭フレームだけ静止 WebP になり、その行に注記します。',
	tool_bulk_convert_images_to_webp_faq_q1: 'サーバーに送られますか？',
	tool_bulk_convert_images_to_webp_faq_q2: 'PNG を WebP にするには？',
	tool_bulk_convert_images_to_webp_faq_q3: 'メールはこれらの WebP を受け取れますか？',
	tool_bulk_convert_images_to_webp_faq_q4: 'このブラウザが WebP を書けないときは？',
	tool_bulk_convert_images_to_webp_faq_q5: 'アニメ GIF は動き続けますか？',
	tool_bulk_convert_images_to_webp_file_count_tpl: 'キューに {n} 枚',
	tool_bulk_convert_images_to_webp_how_body:
		'サイト用に WebP にしたい画像を選び、JPEG マットなしでここで変換し、成功分の ZIP を持ち帰ります。',
	tool_bulk_convert_images_to_webp_how_item_1: 'サイトに載せたい写真や穴あき PNG を選びます。',
	tool_bulk_convert_images_to_webp_how_item_2: '小さくしたいとき以外は画質 0.8 付近。JPEG マットはありません。',
	tool_bulk_convert_images_to_webp_how_item_3: 'すべて変換を押します。toBlob が WebP でなければその行は失敗し、JPEG にはしません。',
	tool_bulk_convert_images_to_webp_how_item_4: 'メール用 JPG なら「画像を JPG に一括変換」。可逆 PNG なら「画像を PNG に一括変換」。',
	tool_bulk_convert_images_to_webp_how_item_5: '1 枚でも成功したら ZIP をダウンロード。初回表示でサンプル読込は済んでいます。',
	tool_bulk_convert_images_to_webp_how_title: 'WebP にする流れ',
	tool_bulk_convert_images_to_webp_quality_label: 'WebP の画質',
	tool_bulk_convert_images_to_webp_rules_body:
		'出力は常に WebP です。透過を JPEG マットに潰さず、JPEG にもフォールバックしません。',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'元にアルファがあれば残します。JPEG 源に残せるアルファはありません。',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'画質の初期値は 0.8。サイトの容量が足りないときだけ下げます。',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'このブラウザが WebP を書けない行はスキップ。読み取り失敗もスキップ。ZIP 内の重複名は 名前 (2).webp。',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'ファイルは端末内に留まり、サーバーにアップロードしません。',
	tool_bulk_convert_images_to_webp_rules_title: '決まっていること',
	tool_bulk_convert_images_to_webp_sample: 'サンプル読込',
	tool_bulk_convert_images_to_webp_status_compressing: 'まとめて WebP に変換しています…',
	tool_bulk_convert_images_to_webp_status_done: '一括が終わりました。表を確認して ZIP をダウンロード。',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP できました',
	tool_bulk_convert_images_to_webp_status_skip: 'スキップ',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} 枚できました · {skip} 枚スキップ',
	tool_bulk_convert_images_to_webp_title: '画像を WebP に一括変換',
	tool_bulk_convert_images_to_webp_usecase_1: 'サイトのヒーローやサムネイルを、形式切り替えなしで WebP にする。',
	tool_bulk_convert_images_to_webp_usecase_2: '元に穴があるスタンプを png から webp にする。',
	tool_bulk_convert_images_to_webp_usecase_3: 'メールが WebP を拒むときは添付を JPEG のまま。',
	tool_bulk_convert_images_to_webp_usecases_title: 'こんなときに',
	tool_bulk_convert_images_to_webp_warn_anim: 'アニメーションは先頭フレームだけ静止 WebP になります。',
	tool_bulk_convert_images_to_webp_warn_edge: '幅または高さが 8192 px を超えるファイルがあり、時間がかかります。',
	tool_bulk_convert_images_to_webp_warn_large: '25 MB を超えるファイルがあり、このタブのメモリが足りないことがあります。',
};

export default ja;
