/**
 * i18n ツール分片（linkedin-banner-size / ja）。
 * 検索向け H1：LinkedInバナーサイズ。既定は個人背景 1584×396 と顔写真の安全域。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：個人バナー、他プラットフォームチップ、端末内処理。 */
const ja: SiteLangDict = {
	tool_linkedin_banner_size_article:
		'写真を LinkedInバナーサイズ 1584×396 に cover し、顔写真が被る位置を確認して JPEG を保存します。必要なら Facebook カバー、X ヘッダー、YouTube チャンネルアートに切り替えます。ファイルは端末に留まり、サーバーへは送りません。',
	tool_linkedin_banner_size_choose_image: '画像を選ぶ',
	tool_linkedin_banner_size_clear: 'クリア',
	tool_linkedin_banner_size_desc:
		'LinkedInバナーサイズ 1584×396 を書き出し、顔写真の安全域を確認。端末内に留まり、サーバーへは送りません。',
	tool_linkedin_banner_size_description:
		'LinkedInバナーサイズ：横写真を選び、個人背景 1584×396 に cover して JPEG を保存します。例：開いた時点でサンプルは 1584×396 です。暗い重ねは顔写真位置のプレビューで、ダウンロードには入りません。Facebook カバー、X ヘッダー、YouTube チャンネルはチップです。ファイルは端末に留まり、サーバーへは送りません。Open Graph のシェアカードではありません。',
	tool_linkedin_banner_size_download: 'JPEGを保存',
	tool_linkedin_banner_size_drop_hint: '横長の写真をドロップ。cover で端が切れることがあります。文字は暗い重ねの外へ。',
	tool_linkedin_banner_size_empty: '先に画像を選んでください。',
	tool_linkedin_banner_size_err_decode: 'その画像は読めません。JPEG、PNG、WebP を試してください。',
	tool_linkedin_banner_size_example:
		'サンプル読込は横長の仮画像を 1584×396 に収め、顔写真の重ねを出して JPEG 保存を有効にします。',
	tool_linkedin_banner_size_example_title: '例',
	tool_linkedin_banner_size_faq_a1: 'いいえ。このタブ内で復号します。LinkedIn にも当社サーバーにも上げません。',
	tool_linkedin_banner_size_faq_a2: '個人背景は 1584×396 です。このページの既定 LinkedInバナーサイズです。',
	tool_linkedin_banner_size_faq_a3: '暗い部分は顔写真の重なりプレビューです。JPEG には書き込みません。',
	tool_linkedin_banner_size_faq_a4: '企業ページのカバーは別トリミング。H1 は個人バナーのまま、URL は増やしません。',
	tool_linkedin_banner_size_faq_a5: '1200×630 は Open Graph 画像サイズ側。ここは超横長カバーと安全域です。',
	tool_linkedin_banner_size_faq_q1: '写真はアップロードされますか？',
	tool_linkedin_banner_size_faq_q2: 'なぜ 1584×396 ですか？',
	tool_linkedin_banner_size_faq_q3: '暗い重ねは保存されますか？',
	tool_linkedin_banner_size_faq_q4: '企業ページのカバーは？',
	tool_linkedin_banner_size_faq_q5: 'Open Graph 画像と同じですか？',
	tool_linkedin_banner_size_how_body: '背景用の写真を決め、1584×396 に cover し、文字を顔写真の外へ出して保存します。',
	tool_linkedin_banner_size_how_item_1: 'LinkedInバナーサイズ用の写真を選ぶ。仕事は個人背景 1584×396。',
	tool_linkedin_banner_size_how_item_2: 'Facebook / X / YouTube が要るとき以外は LinkedIn のまま。',
	tool_linkedin_banner_size_how_item_3: '暗い重ねを見る。顔と見出しはアバターの外へ。',
	tool_linkedin_banner_size_how_item_4: 'JPEG を保存。サンプルは最初の描画ですでに実行済み。',
	tool_linkedin_banner_size_how_title: '使い方',
	tool_linkedin_banner_size_load_sample: 'サンプル読込',
	tool_linkedin_banner_size_out_size_label: '出力サイズ',
	tool_linkedin_banner_size_quality_label: 'JPEG 品質',
	tool_linkedin_banner_size_rules_body: '個人バナーは超横長の cover で、顔写真の重なりで判断します。1.91:1 のカードではありません。',
	tool_linkedin_banner_size_rules_item_1: '既定は 1584×396 JPEG。枠が埋まるまで cover します。',
	tool_linkedin_banner_size_rules_item_2: '重ねはプレビュー専用。保存画素にマスクはありません。',
	tool_linkedin_banner_size_rules_item_3: 'Facebook 851×315、X 1500×500、YouTube 2560×1440 はチップで H1 は変えません。',
	tool_linkedin_banner_size_rules_item_4: 'YouTube チップは中央 1546×423 の外を暗くします。チャンネルアート用の別 URL は作りません。',
	tool_linkedin_banner_size_rules_title: '守るルール',
	tool_linkedin_banner_size_safe_hint: '暗い重ね = UI が被る位置。JPEG には書きません。',
	tool_linkedin_banner_size_size_facebook: 'FBカバー',
	tool_linkedin_banner_size_size_linkedin: '1584×396',
	tool_linkedin_banner_size_size_x: 'Xヘッダー',
	tool_linkedin_banner_size_size_youtube: 'YTチャンネル',
	tool_linkedin_banner_size_status_done: 'バナー準備完了 — 保存するか写真を差し替えてください。',
	tool_linkedin_banner_size_status_working: 'フレームを敷き詰め中…',
	tool_linkedin_banner_size_title: 'LinkedInバナーサイズ',
	tool_linkedin_banner_size_usecase_1: '個人プロフィール：LinkedIn に背景を上げる前に 1584×396 を書き出す。',
	tool_linkedin_banner_size_usecase_2: '見出しを顔写真から外す：重ねを確認してから保存。',
	tool_linkedin_banner_size_usecase_3: 'YouTube チャンネルアート：チップを 2560×1440 と安全窓に切り替える。',
	tool_linkedin_banner_size_usecases_title: '向いている作業',
};

export default ja;
