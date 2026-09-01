/**
 * i18n ツール分片（instagram-story-size / ja）。
 * 検索向け H1：Instagramストーリーサイズ。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_instagram_story_size_article:
		'写真を Instagramストーリーサイズ 1080×1920（9:16）に cover し、上部の進捗と下部の返信欄を確認して JPEG を保存します。Reels・TikTok・Shorts は同じキャンバスのチップです。ファイルは端末に留まり、サーバーへは送りません。',
	tool_instagram_story_size_choose_image: '画像を選ぶ',
	tool_instagram_story_size_clear: 'クリア',
	tool_instagram_story_size_desc:
		'Instagramストーリーサイズ 1080×1920 を書き出し、UI 安全域を確認。端末内に留まり、サーバーへは送りません。',
	tool_instagram_story_size_description:
		'Instagramストーリーサイズ：写真を選び、1080×1920（9:16）に cover して JPEG を保存します。例：開いた時点でサンプルはストーリー枠です。暗い重ねは進捗バーと返信欄のプレビューで、ダウンロードには入りません。Reels、TikTok、Shorts はチップです。ファイルは端末に留まり、サーバーへは送りません。正方形の投稿でも 16:9 の動画サムネイルでもありません。',
	tool_instagram_story_size_download: 'JPEGを保存',
	tool_instagram_story_size_drop_hint: '写真をドロップ。cover で端が切れることがあります。文字は暗い重ねの外へ。',
	tool_instagram_story_size_empty: '先に画像を選んでください。',
	tool_instagram_story_size_err_decode: 'その画像は読めません。JPEG、PNG、WebP を試してください。',
	tool_instagram_story_size_example:
		'サンプル読込は縦長の仮画像を 1080×1920 に収め、Story の重ねを出して JPEG 保存を有効にします。',
	tool_instagram_story_size_example_title: '例',
	tool_instagram_story_size_faq_a1: 'いいえ。このタブ内で復号します。Instagram にも当社サーバーにも上げません。',
	tool_instagram_story_size_faq_a2: 'ストーリーは今も 1080×1920 です。このページの既定 Instagramストーリーサイズです。',
	tool_instagram_story_size_faq_a3: '暗い帯は UI のプレビューです。JPEG には書き込みません。',
	tool_instagram_story_size_faq_a4: '1:1 や 4:5 の投稿は別仕事。H1 はストーリー専用で、投稿サイズツールではありません。',
	tool_instagram_story_size_faq_a5: 'YouTube の 16:9 サムネイルは対象外。Shorts は 9:16 チップとして残します。',
	tool_instagram_story_size_faq_q1: '写真はアップロードされますか？',
	tool_instagram_story_size_faq_q2: 'なぜ 1080×1920 ですか？',
	tool_instagram_story_size_faq_q3: '暗い重ねは保存されますか？',
	tool_instagram_story_size_faq_q4: '正方形の投稿にも使えますか？',
	tool_instagram_story_size_faq_q5: 'YouTube 動画のサムネイルは？',
	tool_instagram_story_size_how_body: '今日のストーリー用写真を決め、1080×1920 に cover し、文字を重ねの外へ出して保存します。',
	tool_instagram_story_size_how_item_1: 'Instagramストーリーサイズ用の写真を選ぶ。仕事は 1080×1920 のストーリー。',
	tool_instagram_story_size_how_item_2: 'Reels / TikTok / Shorts が要るとき以外は Story のまま。',
	tool_instagram_story_size_how_item_3: '暗い重ねを見る。顔と文字は上下の UI の外へ。',
	tool_instagram_story_size_how_item_4: 'JPEG を保存。サンプルは最初の描画ですでに実行済み。',
	tool_instagram_story_size_how_title: '使い方',
	tool_instagram_story_size_load_sample: 'サンプル読込',
	tool_instagram_story_size_out_size_label: '出力サイズ',
	tool_instagram_story_size_quality_label: 'JPEG 品質',
	tool_instagram_story_size_rules_body: 'ストーリーは 9:16 の cover で UI に対して判断します。正方形投稿でも 16:9 サムネイルでもありません。',
	tool_instagram_story_size_rules_item_1: '既定は 1080×1920 JPEG。枠が埋まるまで cover します。',
	tool_instagram_story_size_rules_item_2: '重ねはプレビュー専用。保存画素にマスクはありません。',
	tool_instagram_story_size_rules_item_3: 'Reels / TikTok / Shorts も 1080×1920。重ねが変わるだけで H1 は変えません。',
	tool_instagram_story_size_rules_item_4: 'Facebook ストーリーも同じ 9:16。FAQ の注記であり、別 URL ではありません。',
	tool_instagram_story_size_rules_title: '守るルール',
	tool_instagram_story_size_safe_hint: '暗い重ね = UI が被る位置。JPEG には書きません。',
	tool_instagram_story_size_size_reels: 'Reels',
	tool_instagram_story_size_size_shorts: 'Shorts',
	tool_instagram_story_size_size_story: 'Story 1080×1920',
	tool_instagram_story_size_size_tiktok: 'TikTok',
	tool_instagram_story_size_status_done: 'ストーリー準備完了 — 保存するか写真を差し替えてください。',
	tool_instagram_story_size_status_working: 'フレームを敷き詰め中…',
	tool_instagram_story_size_title: 'Instagramストーリーサイズ',
	tool_instagram_story_size_usecase_1: '今日のストーリー：1080×1920 を書き出し、返信欄から文字を外す。',
	tool_instagram_story_size_usecase_2: 'リール表紙：チップを切り替え、9:16 のまま下の UI を確認。',
	tool_instagram_story_size_usecase_3: 'Shorts や TikTok の表紙：同じ画素、違う重ね。別 URL は不要。',
	tool_instagram_story_size_usecases_title: '向いている作業',
};

export default ja;
