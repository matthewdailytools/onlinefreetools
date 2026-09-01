/**
 * i18n ツール分片（instagram-post-size / ja）。
 * 検索向け H1：Instagram投稿サイズ。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_instagram_post_size_article:
		'写真を Instagram投稿サイズ 1080×1080（1:1）に cover して JPEG を保存します。4:5 と横長は同じキャンバスのチップです。ファイルは端末に留まり、サーバーへは送りません。',
	tool_instagram_post_size_choose_image: '画像を選ぶ',
	tool_instagram_post_size_clear: 'クリア',
	tool_instagram_post_size_desc: 'Instagram投稿サイズ 1080×1080（1:1）を書き出し。端末内に留まり、サーバーへは送りません。',
	tool_instagram_post_size_description:
		'Instagram投稿サイズ：写真を選び、1080×1080（1:1）に cover して JPEG を保存します。例：開いた時点でサンプルは正方形のフィード枠です。4:5（1080×1350）と横長（1080×566）はチップです。ファイルは端末に留まり、サーバーへは送りません。9:16 のストーリーでも 1200×630 の Open Graph カードでもありません。',
	tool_instagram_post_size_download: 'JPEGを保存',
	tool_instagram_post_size_drop_hint: '写真をドロップ。cover で端が切れることがあります。',
	tool_instagram_post_size_empty: '先に画像を選んでください。',
	tool_instagram_post_size_err_decode: 'その画像は読めません。JPEG、PNG、WebP を試してください。',
	tool_instagram_post_size_example: 'サンプル読込は正方形を描き、1080×1080 を埋め、JPEGを保存を有効にします。4:5 と横長はチップです。',
	tool_instagram_post_size_example_title: '例',
	tool_instagram_post_size_faq_a1: 'いいえ。写真はこのタブで復号します。Instagram にも当方サーバーにも送りません。',
	tool_instagram_post_size_faq_a2: 'フィードの正方形は今も 1080×1080 が一般的です。ここでの Instagram投稿サイズの既定です。',
	tool_instagram_post_size_faq_a3: '4:5 は本ページでは 1080×1350。チップを切り替えるだけで、別 URL は不要です。',
	tool_instagram_post_size_faq_a4: 'ストーリーは 9:16。Instagramストーリーサイズのページの仕事で、この投稿ではありません。',
	tool_instagram_post_size_faq_a5: 'Facebook のフィード写真も同じ 1:1 が多いです。約 1200×630 のリンクカードは Open Graph ページへ。',
	tool_instagram_post_size_faq_q1: '写真はアップロードされますか？',
	tool_instagram_post_size_faq_q2: 'なぜ 1080×1080 ですか？',
	tool_instagram_post_size_faq_q3: '4:5 はどこですか？',
	tool_instagram_post_size_faq_q4: 'これはストーリーですか？',
	tool_instagram_post_size_faq_q5: 'Facebook フィードの写真は？',
	tool_instagram_post_size_how_body: '今日の投稿写真を選び、1080×1080 を埋めて保存。ストーリーとカードは関連ページです。',
	tool_instagram_post_size_how_item_1: 'Instagram投稿サイズ用の写真を選ぶ — 仕事は 1080×1080 の正方形フィードです。',
	tool_instagram_post_size_how_item_2: '4:5 や横長チップが要るとき以外は正方形のまま。',
	tool_instagram_post_size_how_item_3: 'JPEG を保存。cover は端を切ることがあり、黒帯を避けます。',
	tool_instagram_post_size_how_item_4: 'サンプルは初回描画ですでに動いています。ストーリーと OG は関連ページへ。',
	tool_instagram_post_size_how_title: '使い方',
	tool_instagram_post_size_load_sample: 'サンプル読込',
	tool_instagram_post_size_out_size_label: '出力サイズ',
	tool_instagram_post_size_quality_label: 'JPEG 品質',
	tool_instagram_post_size_rules_body: 'フィード投稿の既定は 1:1 の cover であり、9:16 ストーリーでもリンクカードでもありません。',
	tool_instagram_post_size_rules_item_1: '既定キャンバスは 1080×1080 JPEG。正方形が埋まるまで cover。',
	tool_instagram_post_size_rules_item_2: '4:5 は 1080×1350、横長は 1080×566。チップは H1 を変えません。',
	tool_instagram_post_size_rules_item_3: 'ストーリーは 9:16 のまま関連ストーリーページへ。',
	tool_instagram_post_size_rules_item_4: 'Open Graph 1200×630 は別仕事。Facebook の正方形写真はこの 1:1 を使えます。',
	tool_instagram_post_size_rules_title: '想定してよい規則',
	tool_instagram_post_size_size_45: '4:5 1080×1350',
	tool_instagram_post_size_size_land: '横長 1080×566',
	tool_instagram_post_size_size_square: '正方形 1080×1080',
	tool_instagram_post_size_status_done: '投稿準備完了 — 保存するか差し替える。',
	tool_instagram_post_size_status_working: '枠を埋めています…',
	tool_instagram_post_size_title: 'Instagram投稿サイズ',
	tool_instagram_post_size_usecase_1: '今日のフィード：シェア前に 1080×1080 を書き出す。',
	tool_instagram_post_size_usecase_2: '縦を残したい：4:5 に切り替えてポートレートをフィードに多く残す。',
	tool_instagram_post_size_usecase_3: '誤ってストーリーを開いた：9:16 ではなくここで 1:1 に切り直す。',
	tool_instagram_post_size_usecases_title: '向いている場面',
};

export default ja;
