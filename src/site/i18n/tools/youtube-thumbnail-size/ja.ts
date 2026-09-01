/**
 * i18n ツール分片（youtube-thumbnail-size / ja）。
 * 検索向け H1：YouTubeサムネイルサイズ。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_youtube_thumbnail_size_article:
		'静止画を YouTubeサムネイルサイズ 1280×720（16:9）に cover して JPEG を保存します。640×360 は最小チップです。ファイルは端末に留まり、サーバーへは送りません。',
	tool_youtube_thumbnail_size_choose_image: '画像を選ぶ',
	tool_youtube_thumbnail_size_clear: 'クリア',
	tool_youtube_thumbnail_size_desc: 'YouTubeサムネイルサイズ 1280×720（16:9）を書き出し。端末内に留まり、サーバーへは送りません。',
	tool_youtube_thumbnail_size_description:
		'YouTubeサムネイルサイズ：静止画を選び、1280×720（16:9）に cover して JPEG を保存します。例：開いた時点でサンプルはサムネ枠です。640×360 は最小チップです。ファイルは端末に留まり、サーバーへは送りません。1200×630 の Open Graph カードでも 9:16 の Shorts カバーでもありません。',
	tool_youtube_thumbnail_size_download: 'JPEGを保存',
	tool_youtube_thumbnail_size_drop_hint: '写真をドロップ。cover で端が切れることがあります。',
	tool_youtube_thumbnail_size_empty: '先に画像を選んでください。',
	tool_youtube_thumbnail_size_err_decode: 'その画像は読めません。JPEG、PNG、WebP を試してください。',
	tool_youtube_thumbnail_size_example: 'サンプル読込は横長を描き、1280×720 を埋め、JPEGを保存を有効にします。640×360 は最小チップです。',
	tool_youtube_thumbnail_size_example_title: '例',
	tool_youtube_thumbnail_size_faq_a1: 'いいえ。静止画はこのタブで復号します。YouTube にも当方サーバーにも送りません。',
	tool_youtube_thumbnail_size_faq_a2: 'カスタムサムネは今も 1280×720 が推奨です。ここでの YouTubeサムネイルサイズの既定です。',
	tool_youtube_thumbnail_size_faq_a3: 'シェアカードは約 1200×630。この H1 は動画サムネです。リンク確認は Open Graph ページへ。',
	tool_youtube_thumbnail_size_faq_a4: 'Shorts カバーは 9:16。Instagramストーリーサイズのページの仕事で、この 16:9 サムネではありません。',
	tool_youtube_thumbnail_size_faq_a5: '640×360 は文書上の最小です。小さいファイルが要るときだけ。既定は 1280×720 のままです。',
	tool_youtube_thumbnail_size_faq_q1: '写真はアップロードされますか？',
	tool_youtube_thumbnail_size_faq_q2: 'なぜ 1280×720 ですか？',
	tool_youtube_thumbnail_size_faq_q3: 'Open Graph カードと同じですか？',
	tool_youtube_thumbnail_size_faq_q4: 'Shorts のカバーは？',
	tool_youtube_thumbnail_size_faq_q5: '640×360 はいつ使いますか？',
	tool_youtube_thumbnail_size_how_body: '今日の動画の静止画を選び、1280×720 を埋めて保存。カードと Shorts は関連ページです。',
	tool_youtube_thumbnail_size_how_item_1: 'YouTubeサムネイルサイズ用の静止画を選ぶ — 仕事は 1280×720 の 16:9 動画サムネです。',
	tool_youtube_thumbnail_size_how_item_2: '640×360 最小チップが要るとき以外は 1280×720 のまま。',
	tool_youtube_thumbnail_size_how_item_3: 'JPEG を保存。cover は端を切ることがあり、黒帯を避けます。',
	tool_youtube_thumbnail_size_how_item_4: 'サンプルは初回描画ですでに動いています。OG と Shorts は関連ページへ。',
	tool_youtube_thumbnail_size_how_title: '使い方',
	tool_youtube_thumbnail_size_load_sample: 'サンプル読込',
	tool_youtube_thumbnail_size_out_size_label: '出力サイズ',
	tool_youtube_thumbnail_size_quality_label: 'JPEG 品質',
	tool_youtube_thumbnail_size_rules_body: '動画サムネは 16:9 の cover であり、1.91:1 のカードでも 9:16 の Shorts カバーでもありません。',
	tool_youtube_thumbnail_size_rules_item_1: '既定キャンバスは 1280×720 JPEG。16:9 が埋まるまで cover。',
	tool_youtube_thumbnail_size_rules_item_2: '640×360 は文書の最小チップ。H1 は変わりません。',
	tool_youtube_thumbnail_size_rules_item_3: 'Open Graph 1200×630 は別仕事。関連のカードページへ。',
	tool_youtube_thumbnail_size_rules_item_4: 'Shorts とストーリーは 9:16 のまま関連ストーリーページへ。',
	tool_youtube_thumbnail_size_rules_title: '想定してよい規則',
	tool_youtube_thumbnail_size_size_360: '640×360 最小',
	tool_youtube_thumbnail_size_size_720: '1280×720',
	tool_youtube_thumbnail_size_status_done: 'サムネ準備完了 — 保存するか差し替える。',
	tool_youtube_thumbnail_size_status_working: '枠を埋めています…',
	tool_youtube_thumbnail_size_title: 'YouTubeサムネイルサイズ',
	tool_youtube_thumbnail_size_usecase_1: '今日の投稿：カスタムサムネを付ける前に 1280×720 を書き出す。',
	tool_youtube_thumbnail_size_usecase_2: '縦の静止画：16:9 に cover して顔を中央に残す。',
	tool_youtube_thumbnail_size_usecase_3: '誤って 1200×630 を出した：カードページではなくここで 1280×720 に切り直す。',
	tool_youtube_thumbnail_size_usecases_title: '向いている場面',
};

export default ja;
