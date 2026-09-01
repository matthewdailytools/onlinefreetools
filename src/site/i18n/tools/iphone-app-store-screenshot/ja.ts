/**
 * i18n tool shard (iphone-app-store-screenshot / ja).
 * H1 は「iPhone 6.9のスクリーンショットサイズ」固定。6.7 は FAQ のみ。
 */
import type { SiteLangDict } from '../../../types';

/** App Store スクリーンショット仕様を探す人向けの独立した日本語。 */
const ja: SiteLangDict = {
	/** ページ内短い説明：書き出しとプライバシー。 */
	tool_iphone_app_store_screenshot_article:
		'1枚のスクリーンショットを現行の iPhone 6.9 App Store ピクセルに書き出し、JPEG、または3サイズ入り ZIP をダウンロードします。端末内で処理し、サーバーにはアップロードしません。',
	/** ファイル選択。 */
	tool_iphone_app_store_screenshot_choose_image: 'スクリーンショットを選ぶ',
	/** クリア。 */
	tool_iphone_app_store_screenshot_clear: 'クリア',
	/** ホームカード用短文。 */
	tool_iphone_app_store_screenshot_desc:
		'iPhone 6.9 の App Store スクリーンショットを 1320×2868 で書き出します。端末内処理、サーバーにアップロードしません。',
	/** メタ：例を含み 120 文字以上。 */
	tool_iphone_app_store_screenshot_description:
		'iPhone 6.9のスクリーンショットサイズ：画像を選び、1320×2868（または 1290×2796 / 1260×2736）にカバーして JPEG をダウンロードします。例：開いた直後にサンプルが 6.9 インチ必須サイズへ切り取られます。端末内で処理し、サーバーにはアップロードしません。旧 6.7 インチは 6.9 にまとまっています。App Review ではありません。',
	/** JPEG ダウンロード。 */
	tool_iphone_app_store_screenshot_download: 'JPEGをダウンロード',
	/** 3サイズ ZIP。 */
	tool_iphone_app_store_screenshot_download_zip: '全サイズをZIPでダウンロード',
	/** ドロップヒント。 */
	tool_iphone_app_store_screenshot_drop_hint: 'スクリーンショットを1枚ドロップ。カバーで端が切れることがあります。',
	/** 未選択。 */
	tool_iphone_app_store_screenshot_empty: '先にスクリーンショットを選んでください。',
	/** デコード失敗。 */
	tool_iphone_app_store_screenshot_err_decode: 'その画像は読めません。PNG か JPEG のスクリーンショットを試してください。',
	/** ZIP エンジン失敗。 */
	tool_iphone_app_store_screenshot_err_fflate: 'ZIP エンジンを読み込めませんでした。回線を確認して再試行してください。',
	/** Example 本文。 */
	tool_iphone_app_store_screenshot_example:
		'サンプルは縦置きの仮画像を描き、1320×2868 にカバーし、「JPEGをダウンロード」を有効にします。ほかの 6.9 サイズはチップ。ZIP は3つまとめて入れます。',
	/** Example 見出し。 */
	tool_iphone_app_store_screenshot_example_title: '例',
	tool_iphone_app_store_screenshot_faq_a1:
		'いいえ。バイトはこのタブ内に留まります。Apple にも当サイトのサーバーにもアップロードしません。',
	tool_iphone_app_store_screenshot_faq_a2:
		'いま必須の iPhone クラスは 6.9 インチです。以前の 6.7 インチ画素表は、この3サイズにまとまっています。',
	tool_iphone_app_store_screenshot_faq_a3:
		'初期値は 1320×2868 です。1290×2796 と 1260×2736 も受理される 6.9 インチの組です。1つ選ぶか、3つ入り ZIP をどうぞ。',
	tool_iphone_app_store_screenshot_faq_a4:
		'はい。カバーは枠いっぱいに拡大してから余った端を切ります。別の構図なら関連の切り抜きツールを使ってください。',
	tool_iphone_app_store_screenshot_faq_a5:
		'iPad のスクリーンショットサイズは最初の画面にはありません。このページは iPhone 6.9 の必須セットです。',
	tool_iphone_app_store_screenshot_faq_q1: 'スクリーンショットはアップロードされますか？',
	tool_iphone_app_store_screenshot_faq_q2: 'なぜ iPhone 6.7 のスクリーンショットサイズではないのですか？',
	tool_iphone_app_store_screenshot_faq_q3: '1320×2868、1290×2796、1260×2736 は何ですか？',
	tool_iphone_app_store_screenshot_faq_q4: '端は切れますか？',
	tool_iphone_app_store_screenshot_faq_q5: 'iPad のスクリーンショットも書き出せますか？',
	tool_iphone_app_store_screenshot_how_body:
		'仕様に合わせる：6.9 インチ枠をカバーしてからダウンロード。追加サイズはチップで、別のデザイン画面ではありません。',
	tool_iphone_app_store_screenshot_how_item_1: 'iPhone 6.9 必須セット用のスクリーンショットを選びます。',
	tool_iphone_app_store_screenshot_how_item_2: 'Connect が別の 6.9 組を指定しない限り、1320×2868 のままにします。',
	tool_iphone_app_store_screenshot_how_item_3: 'JPEG をダウンロードするか、3サイズを ZIP にまとめます。',
	tool_iphone_app_store_screenshot_how_item_4: '開いた時点でサンプル済みなので、カバーの結果がすぐ見えます。',
	tool_iphone_app_store_screenshot_how_title: '使い方',
	tool_iphone_app_store_screenshot_load_sample: 'サンプル',
	tool_iphone_app_store_screenshot_out_size_label: '出力サイズ',
	tool_iphone_app_store_screenshot_quality_label: 'JPEG 品質',
	tool_iphone_app_store_screenshot_rules_body:
		'App Store スクリーンショット書き出しは正確な画素、カバー、そして 6.7 が 6.9 にまとまったことの説明が必要です。',
	tool_iphone_app_store_screenshot_rules_item_1:
		'初期キャンバスは 1320×2868。ほかに受理される 6.9 インチは 1290×2796 と 1260×2736 です。',
	tool_iphone_app_store_screenshot_rules_item_2: 'カバー（レターボックスなし）。余った部分は切れます。',
	tool_iphone_app_store_screenshot_rules_item_3: '6.7 インチ検索は FAQ で答えます。別仕様ではありません。',
	tool_iphone_app_store_screenshot_rules_item_4: 'App Review ではありません。構図・文言・端末枠は Apple に却下されることがあります。',
	tool_iphone_app_store_screenshot_rules_title: '想定してほしいルール',
	tool_iphone_app_store_screenshot_size_2736: '1260×2736',
	tool_iphone_app_store_screenshot_size_2796: '1290×2796',
	tool_iphone_app_store_screenshot_size_2868: '1320×2868',
	tool_iphone_app_store_screenshot_status_done: 'スクリーンショット準備完了 — ダウンロードするか画像を差し替えてください。',
	tool_iphone_app_store_screenshot_status_working: 'カバー処理中…',
	/** 03-locale-briefs の Title/H1 と完全一致。 */
	tool_iphone_app_store_screenshot_title: 'iPhone 6.9のスクリーンショットサイズ',
	tool_iphone_app_store_screenshot_usecase_1: 'Connect アップロード前に、6.9 インチ必須スクリーンショットを書き出す。',
	tool_iphone_app_store_screenshot_usecase_2: '寸法エラー：古い 6.7 ではなく 1320×2868 で出し直す。',
	tool_iphone_app_store_screenshot_usecase_3: '6.9 の3組を ZIP にまとめ、あとで上げる同僚に渡す。',
	tool_iphone_app_store_screenshot_usecases_title: 'こんなときに',
};

export default ja;
