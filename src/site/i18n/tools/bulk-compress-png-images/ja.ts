/**
 * i18n ツール断片（bulk-compress-png-images / ja）。
 * H1 は検索句「PNG 画像を一括圧縮」。ユースケースという空見出しは使わない。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：透過ロゴと UI 素材を PNG のまままとめて小さくする。 */
const ja: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'このタブでロゴや UI 素材の PNG をまとめ、透過を残し、失敗した分は飛ばして ZIP を受け取ります。端末内で処理し、サーバーにアップロードしません。',
	tool_bulk_compress_png_images_chip_1024: '1024 px',
	tool_bulk_compress_png_images_chip_reencode: '再エンコードのみ',
	tool_bulk_compress_png_images_choose_files: 'PNG 画像を選ぶ',
	tool_bulk_compress_png_images_clear: 'クリア',
	tool_bulk_compress_png_images_col_after: '処理後',
	tool_bulk_compress_png_images_col_before: '処理前',
	tool_bulk_compress_png_images_col_name: 'ファイル',
	tool_bulk_compress_png_images_col_status: '状態',
	tool_bulk_compress_png_images_compress: 'すべて圧縮',
	tool_bulk_compress_png_images_desc:
		'PNG を一括圧縮。透過を保ち、任意で最長辺を抑え、ZIP で受け取る。端末内で処理し、サーバーにアップロードしない。',
	tool_bulk_compress_png_images_description:
		'PNG を一括圧縮：透過ロゴや UI 素材を入れ、必要なら最長辺を抑え、このタブで PNG のまま書き出し、失敗は飛ばして ZIP を受け取ります。手順：PNG を選び、アイコンを小さくしたいなら 1024 px チップを残し、すべて圧縮して表を確認。例：市松模様のサンプルは穴の開いた PNG のまま。端末内で処理し、サーバーにアップロードしません。',
	tool_bulk_compress_png_images_download_zip: 'ZIP をダウンロード',
	tool_bulk_compress_png_images_drop_hint: 'PNG をドロップ（最大 20）。他形式も PNG として出ます。このタブ内で完結します。',
	tool_bulk_compress_png_images_empty: '先に PNG 画像を追加してください。',
	tool_bulk_compress_png_images_err_decode: 'この画像は読めませんでした。飛ばしました。',
	tool_bulk_compress_png_images_err_encode: 'この画像は PNG として書けませんでした。飛ばしました。',
	tool_bulk_compress_png_images_err_fflate: 'このブラウザでは ZIP を組めません。別の現行ブラウザを試してください。',
	tool_bulk_compress_png_images_err_too_many: '一度に扱えるのは 20 ファイルまでです。超えた分は入れていません。',
	tool_bulk_compress_png_images_example:
		'サンプル読込は透過の市松 PNG を 2 枚入れ、PNG として書き直し、表を埋め、ZIP をダウンロードできるようにします。同名は name (2).png になります。',
	tool_bulk_compress_png_images_example_title: '例',
	tool_bulk_compress_png_images_faq_a1:
		'いいえ。読み取りと PNG 書き出しはこのタブ内です。ファイルは端末に残り、サーバーにアップロードしません。ZIP 用スクリプトが CDN から来ることはありますが、画像はタブを出ません。',
	tool_bulk_compress_png_images_faq_a2:
		'いいえ。出力は常に PNG です。JPEG の下地はありません。写真を小さくできて JPEG でよければ、商品写真の一括圧縮を使ってください。',
	tool_bulk_compress_png_images_faq_a3:
		'はい。塗りつぶしなしで描いて PNG に保存するので、穴は穴のままです。',
	tool_bulk_compress_png_images_faq_a4:
		'最長辺を縮めていないと、よくあります。ここはパレット最適化ではありません。インデックスカラーは再エンコード後に縞が出ることがあります。',
	tool_bulk_compress_png_images_faq_a5:
		'いいえ。最初のフレームだけを静止 PNG として残します。',
	tool_bulk_compress_png_images_faq_q1: 'png 圧縮でファイルはサーバーに上がりますか？',
	tool_bulk_compress_png_images_faq_q2: 'png を一括圧縮すると JPEG になりますか？',
	tool_bulk_compress_png_images_faq_q3: '透過を保ったまま圧縮できますか？',
	tool_bulk_compress_png_images_faq_q4: 'png 容量を小さくしたのに、あまり減りません。なぜ？',
	tool_bulk_compress_png_images_faq_q5: 'アニメ GIF は動き続けますか？',
	tool_bulk_compress_png_images_file_count_tpl: 'キューに {n} ファイル',
	tool_bulk_compress_png_images_how_body:
		'透過を捨てられない PNG なら、必要に応じて最長辺の上限を共有し、ここでまとめて処理し、成功分だけ ZIP に入れて持ち帰ります。',
	tool_bulk_compress_png_images_how_item_1: '透過を残したい PNG ロゴや UI 素材を選びます。',
	tool_bulk_compress_png_images_how_item_2: 'アイコンを小さくするなら 1024 px チップ、画素サイズを変えたくないなら再エンコードのみ。',
	tool_bulk_compress_png_images_how_item_3: 'すべて圧縮を押します。各行は PNG のまま。失敗は飛ばし、残りはまとめて梱包します。',
	tool_bulk_compress_png_images_how_item_4: '写真寄りの PNG がほとんど小さくならないときは表が知らせます。商品写真側の JPEG の方が軽いことがあります。',
	tool_bulk_compress_png_images_how_item_5: '1 枚でも成功していれば ZIP をダウンロードできます。初回表示ですでにサンプル読込が走っています。',
	tool_bulk_compress_png_images_how_title: 'まとめ方',
	tool_bulk_compress_png_images_max_edge_label: '最長辺',
	tool_bulk_compress_png_images_resize_on: '最長辺を制限',
	tool_bulk_compress_png_images_rules_body:
		'JPEG の下地は塗りません。容量が落ちるのはたいてい最長辺を縮めたときで、保存し直すだけではほとんど変わりません。',
	tool_bulk_compress_png_images_rules_item_1:
		'出力の種類は PNG です。アルファは潰しません。ここは可逆なので画質スライダーはありません。',
	tool_bulk_compress_png_images_rules_item_2:
		'最長辺は比率を保って縮小するだけで、拡大はしません。再エンコードのみは画素サイズを維持し、バイト数はほぼ動かないことがあります。',
	tool_bulk_compress_png_images_rules_item_3:
		'読めない・書けない行は飛ばします。ZIP 内の同名は name (2).png になります。インデックスパレットは縞が出ることがあります。',
	tool_bulk_compress_png_images_rules_item_4:
		'端末内で処理し、サーバーにアップロードしません。',
	tool_bulk_compress_png_images_rules_title: '先に知っておくこと',
	tool_bulk_compress_png_images_sample: 'サンプル読込',
	tool_bulk_compress_png_images_status_compressing: 'PNG 一括処理中…',
	tool_bulk_compress_png_images_status_done: '一括が終わりました。表を見てから ZIP を受け取ってください。',
	tool_bulk_compress_png_images_status_ok: 'PNG 準備完了',
	tool_bulk_compress_png_images_status_same: 'ほとんど減っていない',
	tool_bulk_compress_png_images_status_skip: 'スキップ',
	tool_bulk_compress_png_images_summary_tpl: '{ok} 準備完了 · {same} ほぼ同じ · {skip} スキップ',
	tool_bulk_compress_png_images_title: 'PNG 画像を一括圧縮',
	tool_bulk_compress_png_images_usecase_1: '店頭用に PNG のまま出したい透過ロゴのフォルダ。',
	tool_bulk_compress_png_images_usecase_2: '受け渡し前に最長辺を揃えたい UI 書き出し。',
	tool_bulk_compress_png_images_usecase_3: '穴のある販促ステッカー。JPEG にすると穴が下地で埋まります。',
	tool_bulk_compress_png_images_usecases_title: 'こんなときに',
	tool_bulk_compress_png_images_warn_anim: 'アニメーション付き：最初のフレームだけ静止 PNG になります。',
	tool_bulk_compress_png_images_warn_edge: '幅または高さが 8192 px を超えるファイルがあります。遅くなります。',
	tool_bulk_compress_png_images_warn_large: '25 MB を超えるファイルがあります。このタブのメモリが足りないことがあります。',
	tool_bulk_compress_png_images_warn_same: 'ほとんど小さくならない PNG があります。最長辺を縮めるか、JPEG でよければ商品写真の圧縮へ。',
};

export default ja;
