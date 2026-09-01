/**
 * i18n ツール断片（open-graph-image-size / ja）。
 * H1 は「Open Graph画像サイズ」。短い og image はタイトルに使わない。
 * 副語：1200×630、og:image、シェア画像 → description / FAQ / 場面。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_open_graph_image_size_article:
		'1枚の写真を 1200×630 の Open Graph シェアカード（およそ 1.91:1）に切り、JPEG を保存します。ファイルは端末内に留まり、サーバーにアップロードしません。',
	tool_open_graph_image_size_choose_image: '画像を選ぶ',
	tool_open_graph_image_size_clear: 'クリア',
	tool_open_graph_image_size_desc:
		'1200×630 の Open Graph 画像を書き出します。端末内で処理し、サーバーにアップロードしません。',
	tool_open_graph_image_size_description:
		'Open Graph画像サイズ：写真を選び、1200×630（およそ 1.91:1）にカバー塗りして JPEG を保存します。例：開いた直後のサンプルは、すでにシェアカード枠で切られています。LinkedIn 向け 1200×627 は近い別サイズです。写真は端末内に留まり、サーバーにアップロードしません。URL の og:image タグを確認したいときは関連プレビューページへ。短い og image はタイトルにしません。',
	tool_open_graph_image_size_download: 'JPEGをダウンロード',
	tool_open_graph_image_size_drop_hint: '写真を1枚ドロップ。カバー塗りで端が切れることがあります。',
	tool_open_graph_image_size_empty: '先に画像を選んでください。',
	tool_open_graph_image_size_err_decode: 'その画像は読めません。JPEG、PNG、WebP を試してください。',
	tool_open_graph_image_size_example:
		'サンプルを押すと横長の仮画像を描き、1200×630 を埋め、JPEGをダウンロードが使えます。1200×627 は LinkedIn 用の近いサイズです。',
	tool_open_graph_image_size_example_title: '例',
	tool_open_graph_image_size_faq_a1:
		'いいえ。写真はこのタブの中だけです。Facebook も LinkedIn も、当サイトのサーバーにも送りません。',
	tool_open_graph_image_size_faq_a2:
		'短い「og image」検索は俗称に引っ張られやすいです。このページの見出しはフルフレーズの Open Graph画像サイズです。',
	tool_open_graph_image_size_faq_a3:
		'1200×630 が一般的な 1.91:1 カードです。1200×627 はほぼ同じで、LinkedIn で指定されがちです。ストーリーやチャンネルアートは対象外です。',
	tool_open_graph_image_size_faq_a4:
		'ここは画素の書き出しだけです。og:image が出るか見るなら、関連の Open Graph プレビューを使ってください。',
	tool_open_graph_image_size_faq_a5:
		'はい。カバー塗りは 1200×630 が埋まるまで拡大し、はみ出した端を切ります。',
	tool_open_graph_image_size_faq_q1: '写真はアップロードされますか？',
	tool_open_graph_image_size_faq_q2: 'なぜタイトルを og image にしないのですか？',
	tool_open_graph_image_size_faq_q3: '1200×630 と 1200×627 の違いは？',
	tool_open_graph_image_size_faq_q4: 'og:image が出ているかはどこで確認しますか？',
	tool_open_graph_image_size_faq_q5: '端は切れますか？',
	tool_open_graph_image_size_how_body:
		'リンク共有時に出したい写真を選び、1200×630 を埋めて保存します。タグの確認はプレビュー側です。',
	tool_open_graph_image_size_how_item_1: 'Open Graph シェアカード用の写真を選ぶ——それがこのページの仕事です。',
	tool_open_graph_image_size_how_item_2: '特に 1200×627 を指定されない限り、1200×630 のままにしてください。',
	tool_open_graph_image_size_how_item_3: 'JPEGをダウンロード。カバー塗りで端が切れると、帯なしのカードになります。',
	tool_open_graph_image_size_how_item_4: 'サンプルは初回表示ですでに動いています。タグは関連プレビューで見てください。',
	tool_open_graph_image_size_how_title: '使い方',
	tool_open_graph_image_size_load_sample: 'サンプル',
	tool_open_graph_image_size_out_size_label: '出力サイズ',
	tool_open_graph_image_size_quality_label: 'JPEG 画質',
	tool_open_graph_image_size_rules_body:
		'シェアカード書き出しは約 1.91:1 の枠、カバー塗り、タグ確認との切り分けが前提です。',
	tool_open_graph_image_size_rules_item_1:
		'既定キャンバスは 1200×630。任意の近いサイズは 1200×627。比はおよそ 1.91:1。',
	tool_open_graph_image_size_rules_item_2:
		'カバー塗り（レターボックスなし）。はみ出しは切ります。',
	tool_open_graph_image_size_rules_item_3:
		'og:image タグの確認は関連プレビューページであり、この見出しの仕事ではありません。',
	tool_open_graph_image_size_rules_item_4:
		'ストーリー、YouTube サムネ、チャンネルアートは対象外です。',
	tool_open_graph_image_size_rules_title: '想定してほしいルール',
	tool_open_graph_image_size_size_627: '1200×627',
	tool_open_graph_image_size_size_630: '1200×630',
	tool_open_graph_image_size_status_done: 'シェアカードの準備完了——ダウンロードするか、写真を差し替えてください。',
	tool_open_graph_image_size_status_working: 'カバー塗り中…',
	tool_open_graph_image_size_title: 'Open Graph画像サイズ',
	tool_open_graph_image_size_usecase_1:
		'ブログ記事：og:image を入れる前に 1200×630 の JPEG を書き出す。',
	tool_open_graph_image_size_usecase_2:
		'商品 URL：デザインアプリを開かず、パッケージ写真をカード枠に切る。',
	tool_open_graph_image_size_usecase_3:
		'相手が LinkedIn の 1200×627 を指定してきたとき、そのサイズに切り替える。',
	tool_open_graph_image_size_usecases_title: 'こんなときに',
};

export default ja;
