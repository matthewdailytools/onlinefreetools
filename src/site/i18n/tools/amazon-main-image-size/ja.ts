/**
 * i18n ツール分片（amazon-main-image-size / ja）。
 * H1 は検索フレーズに合わせ、ピクセル数値は説明と FAQ に置く。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語のツールサイト向けに書き直した文案（英語骨格の直訳ではない）。 */
const ja: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'商品写真を白背景の正方形に載せ、メイン画像用 JPEG を保存します。ファイルは端末内に留まり、サーバーにはアップロードしません。',
	tool_amazon_main_image_size_check_fill: '枠の約 85% に収める',
	tool_amazon_main_image_size_choose_image: '画像を選ぶ',
	tool_amazon_main_image_size_clear: 'クリア',
	tool_amazon_main_image_size_desc:
		'白背景の Amazon メイン画像を 2000×2000 で書き出し、ズーム 1000px を確認。端末内で処理します。',
	tool_amazon_main_image_size_description:
		'Amazon メイン画像サイズ：商品写真を選び、白背景 RGB 255 の 2000×2000 JPEG を書き出し、ズーム下限 1000px を確認します。例：サンプル写真は正方形の約 85% に収まります。ファイルは端末内に留まり、サーバーにはアップロードしません。Seller Central の公式審査ではありません。',
	tool_amazon_main_image_size_download: 'JPEGをダウンロード',
	tool_amazon_main_image_size_drop_hint: '商品写真を1枚ドロップ。処理はこのタブ内だけです。',
	tool_amazon_main_image_size_empty: '先に商品写真を選んでください。',
	tool_amazon_main_image_size_err_decode: 'この画像は読めません。JPEG・PNG・WebP を試してください。',
	tool_amazon_main_image_size_example:
		'「サンプル」は仮の商品写真を描き、2000×2000 の白正方形へ約 85% で収めて JPEG ダウンロードを有効にします。ズーム表示は最長辺が 1000px を超えていることを示します。',
	tool_amazon_main_image_size_example_title: '例',
	tool_amazon_main_image_size_faq_a1:
		'Amazon のズームは、だいたい最長辺 1000 ピクセル以上を求めます。チップは書き出した辺とこの下限を比べます。小さな写真を無理に拡大すると、数値は通ってもぼやけます。',
	tool_amazon_main_image_size_faq_a2:
		'いいえ。写真はこのブラウザタブで読み込みます。当サイトのサーバーにも Amazon にも送りません。',
	tool_amazon_main_image_size_faq_a3:
		'既定の書き出しは 2000×2000 です。1600 は以前よく使われたサイズで、チップとして残しています。数値は見出しに入れません。',
	tool_amazon_main_image_size_faq_a4:
		'ギャラリーや A+ は別の役割です。このページはメイン画像だけです。自由な切り抜きは関連の切り抜きツールへ。',
	tool_amazon_main_image_size_faq_a5:
		'メイン画像は純白が前提です。このページは RGB 255,255,255 で塗り、必要なら商品を正方形の約 85% に収めて端に当てません。',
	tool_amazon_main_image_size_faq_q1: '1000px 未満だとズームが失敗するのはなぜ？',
	tool_amazon_main_image_size_faq_q2: '写真は Amazon やこのサイトにアップロードされますか？',
	tool_amazon_main_image_size_faq_q3: 'なぜ 1600 ではなく 2000 なのか？',
	tool_amazon_main_image_size_faq_q4: 'サブ画像も書き出せますか？',
	tool_amazon_main_image_size_faq_q5: '白背景と枠の 85% とは？',
	tool_amazon_main_image_size_fill_label: '枠の占有',
	tool_amazon_main_image_size_how_body:
		'メインにしたい商品写真を選び、白の上に載せ、正方形を書き出してズーム表示を読みます。他サイズはチップだけです。',
	tool_amazon_main_image_size_how_item_1: 'Amazon のメイン画像にしたい写真を選ぶ。それがこのページの仕事です。',
	tool_amazon_main_image_size_how_item_2: '古い 1600 正方形が必要なとき以外は、2000×2000 のまま。',
	tool_amazon_main_image_size_how_item_3: 'すでに意図どおり枠を埋めているなら、85% フィットは外してよい。',
	tool_amazon_main_image_size_how_item_4: 'JPEG をダウンロードし、ズーム下限の表示を読む。開いた時点でサンプルは実行済み。',
	tool_amazon_main_image_size_how_title: '使い方',
	tool_amazon_main_image_size_load_sample: 'サンプル',
	tool_amazon_main_image_size_out_size_label: '出力サイズ',
	tool_amazon_main_image_size_quality_label: 'JPEG 画質',
	tool_amazon_main_image_size_rules_body:
		'ブラウザでメイン画像を出すには、正方形キャンバス、白塗り、ズーム下限、そして「公式審査ではない」という線引きが必要です。',
	tool_amazon_main_image_size_rules_item_1:
		'既定キャンバスは 2000×2000。1600×1600 は任意。写真は引き伸ばさず RGB 255 の白の上に収めます。',
	tool_amazon_main_image_size_rules_item_2:
		'任意の 85% フィットは、商品を正方形の内側に縮小して端に触れないようにします。',
	tool_amazon_main_image_size_rules_item_3:
		'ズーム表示：書き出しの最長辺は ≥1000px であるべきです。Amazon がファイルを受け入れるとは書いていません。',
	tool_amazon_main_image_size_rules_item_4:
		'サブ画像・インフォグラフィック・A+ は対象外。ここは Seller Central ではありません。',
	tool_amazon_main_image_size_rules_title: '押さえておくこと',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'メイン画像の準備ができました。ダウンロードするか写真を差し替えてください。',
	tool_amazon_main_image_size_status_working: '正方形を作成中…',
	tool_amazon_main_image_size_title: 'Amazon メイン画像サイズ',
	tool_amazon_main_image_size_usecase_1:
		'新規出品の前に、スマホ写真を白背景のメイン画像にしてから出品管理を開く。',
	tool_amazon_main_image_size_usecase_2:
		'ズームが効かない：最長辺がまだ 1000px 未満か確認し、2000 で出し直す。',
	tool_amazon_main_image_size_usecase_3:
		'引き継いだ小さいメイン画像を差し替え、JPEG が重いときは関連の圧縮ツールへ。',
	tool_amazon_main_image_size_usecases_title: 'こんなときに',
	tool_amazon_main_image_size_zoom_fail: '最長辺が 1000px 未満です。ズームが失敗することがあります。',
	tool_amazon_main_image_size_zoom_ok: '最長辺はズーム下限 1000px を満たしています。',
	tool_amazon_main_image_size_zoom_label: 'ズーム下限',
};

export default ja;
