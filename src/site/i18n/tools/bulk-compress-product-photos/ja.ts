/**
 * i18n ツール断片（bulk-compress-product-photos / ja）。
 * H1 は「商品画像を一括圧縮」。bulk を見出しに埋め込まない。
 */
import type { SiteLangDict } from '../../../types';

/** 出品写真をまとめて小さくする、口語のツール文。 */
const ja: SiteLangDict = {
	tool_bulk_compress_product_photos_article:
		'出品用の写真をこのタブでまとめ圧縮し、失敗したファイルは飛ばして ZIP にします。ファイルは端末内に留まり、サーバーにはアップロードしません。',
	tool_bulk_compress_product_photos_chip_200kb: '200 KB',
	tool_bulk_compress_product_photos_chip_jpeg: 'JPEG',
	tool_bulk_compress_product_photos_chip_jpg: '.jpg',
	tool_bulk_compress_product_photos_choose_files: '商品画像を選ぶ',
	tool_bulk_compress_product_photos_clear: 'クリア',
	tool_bulk_compress_product_photos_col_after: '圧縮後',
	tool_bulk_compress_product_photos_col_before: '圧縮前',
	tool_bulk_compress_product_photos_col_name: 'ファイル',
	tool_bulk_compress_product_photos_col_status: '結果',
	tool_bulk_compress_product_photos_compress: 'すべて圧縮',
	tool_bulk_compress_product_photos_desc:
		'商品画像を約 200 KB まで一括圧縮して ZIP にする。端末内で処理し、サーバーにアップロードしない。',
	tool_bulk_compress_product_photos_description:
		'商品画像を一括圧縮：出品写真をまとめ、最長辺と 200 KB 上限を共有し、このタブで JPEG または WebP にします。失敗は飛ばし、成功分を ZIP にします。手順：写真を入れ、200 KB チップを残し、すべて圧縮を押して当たり外れを見る。例：開いた時点でサンプル2枚が圧縮されます。ファイルは端末内に留まり、サーバーにはアップロードしません。',
	tool_bulk_compress_product_photos_download_zip: 'ZIP をダウンロード',
	tool_bulk_compress_product_photos_drop_hint: 'JPEG / PNG / WebP をドロップ（最大 20）。圧縮はこのタブ内です。',
	tool_bulk_compress_product_photos_empty: '先に商品画像を追加してください。',
	tool_bulk_compress_product_photos_err_decode: 'この写真は読めなかったためスキップしました。',
	tool_bulk_compress_product_photos_err_encode: 'この写真は圧縮できなかったためスキップしました。',
	tool_bulk_compress_product_photos_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザで試してください。',
	tool_bulk_compress_product_photos_err_too_many: '一度に 20 枚までです。超えた分は入れていません。',
	tool_bulk_compress_product_photos_err_webp: 'WebP を書けないブラウザです。JPEG（.jpg）に切り替えました。',
	tool_bulk_compress_product_photos_example:
		'サンプル読込は出品用のダミー2枚を入れ、既定の 200 KB JPEG で圧縮し、表を埋めて ZIP を有効にします。ZIP 内の同名は name (2).jpg になります。',
	tool_bulk_compress_product_photos_example_title: '例',
	tool_bulk_compress_product_photos_faq_a1:
		'いいえ。復号と再エンコードはこのタブ内です。ファイルは端末に留まり、サーバーにはアップロードしません。ZIP 用スクリプトが CDN から来ることはありますが、写真自体は送りません。',
	tool_bulk_compress_product_photos_faq_a2:
		'必ずではありません。画質 0.5 でも上限を超えると「未達」になりますが、いちばん近い結果は ZIP に残します。',
	tool_bulk_compress_product_photos_faq_a3:
		'別ページは不要です。JPEG も JPG も同じ出力で、拡張子は .jpg です。',
	tool_bulk_compress_product_photos_faq_a4:
		'透過 PNG のまま小さくしたいロゴは PNG 圧縮向けです。ここはカタログ写真を JPEG/WebP にする作業です。',
	tool_bulk_compress_product_photos_faq_a5:
		'動きは残りません。最初のフレームだけを静止画として圧縮し、警告に出します。',
	tool_bulk_compress_product_photos_faq_q1: '商品写真はサーバーに上がりますか？',
	tool_bulk_compress_product_photos_faq_q2: '必ず 200 KB に収まりますか？',
	tool_bulk_compress_product_photos_faq_q3: 'jpeg 検索用に別ツールが要りますか？',
	tool_bulk_compress_product_photos_faq_q4: '透過 PNG ロゴにも使えますか？',
	tool_bulk_compress_product_photos_faq_q5: 'アニメ GIF は動いたままですか？',
	tool_bulk_compress_product_photos_file_count_tpl: 'キューに {n} 枚',
	tool_bulk_compress_product_photos_format_jpeg: 'JPEG（.jpg）',
	tool_bulk_compress_product_photos_format_webp: 'WebP',
	tool_bulk_compress_product_photos_how_body:
		'出品したい写真をまとめ、容量上限を共有してここで圧縮し、できた分だけ ZIP で持ち帰ります。',
	tool_bulk_compress_product_photos_how_item_1: '小さくしたい商品画像をまとめて選びます。',
	tool_bulk_compress_product_photos_how_item_2: 'モールが 200 KB ならチップを残します。既定出力は JPEG（.jpg）です。',
	tool_bulk_compress_product_photos_how_item_3: 'スマホ原版が巨大なら、先に最長辺を落とします。',
	tool_bulk_compress_product_photos_how_item_4: 'すべて圧縮を押し、当たり・未達・スキップを行ごとに確認します。',
	tool_bulk_compress_product_photos_how_item_5: '1枚でも成功すれば ZIP をダウンロードできます。開いた時点でサンプルは済んでいます。',
	tool_bulk_compress_product_photos_how_title: '使い方',
	tool_bulk_compress_product_photos_jpeg_bg_black: '黒',
	tool_bulk_compress_product_photos_jpeg_bg_custom: '指定色',
	tool_bulk_compress_product_photos_jpeg_bg_label: 'JPEG の背景',
	tool_bulk_compress_product_photos_jpeg_bg_white: '白',
	tool_bulk_compress_product_photos_max_edge_label: '最長辺',
	tool_bulk_compress_product_photos_output_label: '出力',
	tool_bulk_compress_product_photos_quality_label: '画質',
	tool_bulk_compress_product_photos_resize_on: '最長辺を制限',
	tool_bulk_compress_product_photos_rules_body:
		'設定はバッチ全体で共有します。上限未達は成功バナーではなく表で示します。',
	tool_bulk_compress_product_photos_rules_item_1: '最長辺は縮小のみで拡大しません。',
	tool_bulk_compress_product_photos_rules_item_2: '画質は JPEG/WebP に効きます。200 KB 指定時は 0.5 まで下げます。',
	tool_bulk_compress_product_photos_rules_item_3: '読めないファイルはその行だけスキップ。ZIP の同名は name (2).jpg です。',
	tool_bulk_compress_product_photos_rules_item_4: '写真は端末内に留まり、サーバーにはアップロードしません。再エンコードで EXIF は大抵消えます。',
	tool_bulk_compress_product_photos_rules_title: '守るルール',
	tool_bulk_compress_product_photos_sample: 'サンプル読込',
	tool_bulk_compress_product_photos_status_compressing: 'まとめて圧縮しています…',
	tool_bulk_compress_product_photos_status_done: '完了です。表を見て ZIP を保存してください。',
	tool_bulk_compress_product_photos_status_hit: '達成',
	tool_bulk_compress_product_photos_status_miss: '上限未達',
	tool_bulk_compress_product_photos_status_skip: 'スキップ',
	tool_bulk_compress_product_photos_summary_tpl: '成功 {ok} · 未達 {miss} · スキップ {skip}',
	tool_bulk_compress_product_photos_target_kb_label: '最大サイズ',
	tool_bulk_compress_product_photos_target_on: '目標サイズを目指す',
	tool_bulk_compress_product_photos_title: '商品画像を一括圧縮',
	tool_bulk_compress_product_photos_usecase_1: '出品当日、SKU 写真をモールの 200 KB 目安まで落とす。',
	tool_bulk_compress_product_photos_usecase_2: '購入者へ実写をメールするとき、添付上限に収める。',
	tool_bulk_compress_product_photos_usecase_3: '同じ撮影データをデザインへ渡す前に、軽い ZIP にする。',
	tool_bulk_compress_product_photos_usecases_title: '向いている場面',
	tool_bulk_compress_product_photos_warn_anim: 'アニメーションは先頭フレームだけ圧縮します。',
	tool_bulk_compress_product_photos_warn_edge: '8192 px を超える写真があり、遅くなることがあります。',
	tool_bulk_compress_product_photos_warn_large: '25 MB 超のファイルがあり、メモリ不足になることがあります。',
};

export default ja;
