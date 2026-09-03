/**
 * i18n ツール分片（bulk-convert-images-to-png / ja）。
 * H1 は検索句「画像を PNG に一括変換」。ユースケースという見出しは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：透過を残したまま PNG にそろえる一括変換。口語のツールサイト。 */
const ja: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'提出先が PNG のとき、JPEG 写真・スクリーンショット・穴あきロゴをこのタブで .png にする。元に透過があれば残し、失敗した行は飛ばして ZIP。JPEG を PNG にすると大きくなりがちで、表に出る。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_png_choose_files: '画像を選ぶ',
	tool_bulk_convert_images_to_png_clear: 'クリア',
	tool_bulk_convert_images_to_png_col_after: '変換後',
	tool_bulk_convert_images_to_png_col_before: '変換前',
	tool_bulk_convert_images_to_png_col_name: 'ファイル',
	tool_bulk_convert_images_to_png_col_status: '状態',
	tool_bulk_convert_images_to_png_convert: 'すべて変換',
	tool_bulk_convert_images_to_png_desc:
		'画像を PNG に一括変換し、元に透過があれば残して ZIP でまとめる。端末内で処理し、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_png_description:
		'画像を PNG に一括変換：JPEG やスクリーンショットをこのタブで PNG に書き直し、JPEG マットは敷かず、失敗は飛ばして ZIP にする。手順：束を選び、すべて変換し、JPEG が PNG で大きくなったかを表で確認。例：不透明な写真と穴あきロゴがどちらも .png になる。ファイルは端末内に留まり、サーバーにアップロードしない。',
	tool_bulk_convert_images_to_png_download_zip: 'ZIP をダウンロード',
	tool_bulk_convert_images_to_png_drop_hint: 'JPEG、PNG、WebP、GIF をドロップ（最大 20）。変換はこのタブ内。',
	tool_bulk_convert_images_to_png_empty: '先に画像を追加してください。',
	tool_bulk_convert_images_to_png_err_decode: 'このファイルは読めません。スキップしました。',
	tool_bulk_convert_images_to_png_err_encode: 'このファイルを PNG に書けませんでした。スキップしました。',
	tool_bulk_convert_images_to_png_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザを試してください。',
	tool_bulk_convert_images_to_png_err_too_many: '一度に 20 枚までです。超過分は入れていません。',
	tool_bulk_convert_images_to_png_example:
		'サンプル読込は JPEG の色面と透明ロゴを入れ、二つの .png を書き、ZIP ダウンロードを有効にします。JPEG の行は PNG の方が大きいことがよくあります。',
	tool_bulk_convert_images_to_png_example_title: '例',
	tool_bulk_convert_images_to_png_faq_a1:
		'送りません。読み取りと PNG 書き出しはこのタブ内です。ファイルは端末に留まり、サーバーにアップロードしません。ZIP 用スクリプトが CDN から来ることはありますが、画像はタブを出ません。',
	tool_bulk_convert_images_to_png_faq_a2:
		'戻りません。JPEG は穴を保存していません。jpg を png にしても包みが PNG になるだけで、背景は不透明のままです。本当の穴は、元ファイルにアルファがあったときだけ残ります。',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG は可逆です。写真 JPEG は大きくなりがちです。表に「元より大きい」と出ます。画素を小さくするのは「PNG 画像を一括圧縮」。PNG が不要なら JPEG のまま。',
	tool_bulk_convert_images_to_png_faq_a4:
		'PNG 圧縮は、すでに PNG で、PNG のまま小さくしたいファイル向けです。このページは拡張子を PNG に変えます。',
	tool_bulk_convert_images_to_png_faq_a5:
		'動きません。先頭フレームだけ静止 PNG になり、その行に注記します。',
	tool_bulk_convert_images_to_png_faq_q1: 'サーバーに送られますか？',
	tool_bulk_convert_images_to_png_faq_q2: 'JPG を PNG にすると透過は戻りますか？',
	tool_bulk_convert_images_to_png_faq_q3: 'なぜ PNG の方が JPEG より大きい？',
	tool_bulk_convert_images_to_png_faq_q4: 'PNG 圧縮と何が違う？',
	tool_bulk_convert_images_to_png_faq_q5: 'アニメ GIF は動き続けますか？',
	tool_bulk_convert_images_to_png_file_count_tpl: 'キューに {n} 枚',
	tool_bulk_convert_images_to_png_how_body:
		'PNG にしたい画像を選び、マットを塗らずここで変換し、成功分の ZIP を持ち帰ります。',
	tool_bulk_convert_images_to_png_how_item_1: 'PNG でなければならないスクリーンショットやロゴを選びます。',
	tool_bulk_convert_images_to_png_how_item_2: '白マットの操作はありません。元にアルファがあれば穴はそのままです。',
	tool_bulk_convert_images_to_png_how_item_3: 'すべて変換を押します。JPEG 源は不透明 PNG になり、大きくなった行は表が知らせます。',
	tool_bulk_convert_images_to_png_how_item_4: 'JPG が必要なら「画像を JPG に一括変換」。小さい PNG なら「PNG 画像を一括圧縮」。',
	tool_bulk_convert_images_to_png_how_item_5: '1 枚でも成功したら ZIP をダウンロード。初回表示でサンプル読込は済んでいます。',
	tool_bulk_convert_images_to_png_how_title: 'PNG にする流れ',
	tool_bulk_convert_images_to_png_max_edge_label: '最長辺',
	tool_bulk_convert_images_to_png_resize_on: '最長辺を制限',
	tool_bulk_convert_images_to_png_rules_body:
		'出力は常に PNG です。このページは透過を JPEG マットに潰しません。',
	tool_bulk_convert_images_to_png_rules_item_1:
		'元にアルファがあれば残します。JPEG 源に残せるアルファはありません。',
	tool_bulk_convert_images_to_png_rules_item_2:
		'最長辺の縮小は初期オフです。変換のついでにサイズを変えないためです。',
	tool_bulk_convert_images_to_png_rules_item_3:
		'PNG が元より大きいとその行に出ます。読み取り失敗はスキップ。ZIP 内の重複名は 名前 (2).png。',
	tool_bulk_convert_images_to_png_rules_item_4:
		'ファイルは端末内に留まり、サーバーにアップロードしません。',
	tool_bulk_convert_images_to_png_rules_title: '決まっていること',
	tool_bulk_convert_images_to_png_sample: 'サンプル読込',
	tool_bulk_convert_images_to_png_status_compressing: 'まとめて PNG に変換しています…',
	tool_bulk_convert_images_to_png_status_done: '一括が終わりました。表を確認して ZIP をダウンロード。',
	tool_bulk_convert_images_to_png_status_larger: '元より大きい',
	tool_bulk_convert_images_to_png_status_ok: 'PNG できました',
	tool_bulk_convert_images_to_png_status_skip: 'スキップ',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} 枚できました · {larger} 枚が大きい · {skip} 枚スキップ',
	tool_bulk_convert_images_to_png_title: '画像を PNG に一括変換',
	tool_bulk_convert_images_to_png_usecase_1: 'デザイン受け渡し用にスクリーンショットを PNG で残す。',
	tool_bulk_convert_images_to_png_usecase_2: '元に穴があるスタンプ素材を PNG にそろえる。',
	tool_bulk_convert_images_to_png_usecase_3: 'CMS が PNG しか受けないときの jpg を png に。写真ファイルは大きくなりがち。',
	tool_bulk_convert_images_to_png_usecases_title: 'こんなときに',
	tool_bulk_convert_images_to_png_warn_anim: 'アニメーションは先頭フレームだけ静止 PNG になります。',
	tool_bulk_convert_images_to_png_warn_edge: '幅または高さが 8192 px を超えるファイルがあり、時間がかかります。',
	tool_bulk_convert_images_to_png_warn_large: '25 MB を超えるファイルがあり、このタブのメモリが足りないことがあります。',
	tool_bulk_convert_images_to_png_warn_larger: 'PNG が元より大きい行があります。写真 JPEG ではよくあることです。',
};

export default ja;
