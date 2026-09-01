/**
 * i18n ツール断片（apple-touch-icon / ja）。
 * 検索向け書き直し：H1 は apple-touch-icon 180×180。端末内処理・サーバー非アップロード。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語の画面文言：ホーム画面 180、任意 ZIP、不透明背景。 */
const ja: SiteLangDict = {
	tool_apple_touch_icon_article:
		'ロゴをホーム画面用の apple-touch-icon にする：既定は不透明 PNG 180×180。マニフェスト用なら ZIP に favicon 32 と PWA の 192 / 512 を足せます。処理は端末内、サーバーにはアップロードしません。',
	tool_apple_touch_icon_bg_label: '不透明な背景',
	tool_apple_touch_icon_choose_image: 'ロゴを選ぶ',
	tool_apple_touch_icon_clear: 'クリア',
	tool_apple_touch_icon_desc:
		'apple-touch-icon 180×180 の不透明 PNG。端末内で処理し、サーバーにアップロードしません。',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180：ロゴを選び、不透明な正方形に載せて PNG を保存。例：開いた時点でサンプルが 180×180 に収まっています。手順：選ぶ → 180 のまま → ダウンロード。任意の ZIP に favicon 32 と PWA 192 / 512。ファイルは端末内に留まり、サーバーにアップロードしません。',
	tool_apple_touch_icon_download: 'PNGをダウンロード',
	tool_apple_touch_icon_download_zip: 'サイズ入り ZIP をダウンロード',
	tool_apple_touch_icon_drop_hint: 'ロゴを1枚ドロップ。不透明な正方形の中央に置きます。',
	tool_apple_touch_icon_empty: '先にロゴを選んでください。',
	tool_apple_touch_icon_err_decode:
		'画像を読めませんでした。PNG / JPEG、または SVG をビットマップ化したものを試してください。',
	tool_apple_touch_icon_err_fflate: 'ZIP エンジンを読み込めませんでした。回線を確認して再試行してください。',
	tool_apple_touch_icon_example:
		'サンプルを押すと仮のマークを描き、180×180 の不透明正方形に収めて PNG ダウンロードが可能になります。ZIP には 32、192、512 が入ります。',
	tool_apple_touch_icon_example_title: '例',
	tool_apple_touch_icon_faq_a1:
		'いいえ。このタブ内でデコードします。ロゴはサーバーにアップロードしません。',
	tool_apple_touch_icon_faq_a2:
		'ホーム画面用のタッチアイコンは 180×180 が実務的です。先にこの PNG を出し、link を書きます。',
	tool_apple_touch_icon_faq_a3:
		'不透明（precomposed 寄りの塗り）にして、iOS が透明部分に光沢を重ねないようにします。',
	tool_apple_touch_icon_faq_a4:
		'32 は小さな favicon PNG。192 と 512 は PWA 用。ZIP に同梱し、既定の仕事は 180×180 のままです。',
	tool_apple_touch_icon_faq_a5:
		'古い iPad の 167 / 152 / 120 は ZIP に入れられます。既定の書き出しは 180×180 です。',
	tool_apple_touch_icon_faq_q1: 'ロゴはアップロードされますか？',
	tool_apple_touch_icon_faq_q2: 'ホーム画面なら 180×180 で足りますか？',
	tool_apple_touch_icon_faq_q3: 'なぜ不透明にするのですか？',
	tool_apple_touch_icon_faq_q4: '32 や PWA の 192/512 は何用？',
	tool_apple_touch_icon_faq_q5: '167 や 152 も出しますか？',
	tool_apple_touch_icon_how_body:
		'「ホーム画面に追加」で見せたいロゴを選び、不透明 PNG 180×180 を書き出します。必要なら追加サイズを ZIP にします。',
	tool_apple_touch_icon_how_item_1: 'apple-touch-icon 180×180 用のロゴを選ぶ。',
	tool_apple_touch_icon_how_item_2: '特に 32 / 192 / 512 が要らない限り 180 を選んだままにする。',
	tool_apple_touch_icon_how_item_3: '不透明背景を維持し、ホーム画面で透けないようにする。',
	tool_apple_touch_icon_how_item_4: 'PNG かサイズ ZIP をダウンロード。開いた時点でサンプルは済んでいます。',
	tool_apple_touch_icon_how_title: '使い方',
	tool_apple_touch_icon_load_sample: 'サンプル',
	tool_apple_touch_icon_out_size_label: '出力サイズ',
	tool_apple_touch_icon_rules_body:
		'ホーム画面アイコンは正方形・塗りつぶし・180 の PNG。ICO 一式の生成ではありません。',
	tool_apple_touch_icon_rules_item_1: '既定キャンバスは 180×180 PNG。ロゴは縦横比を保って収め、中央寄せ。',
	tool_apple_touch_icon_rules_item_2: '背景は不透明（既定白）。透明は意図的に潰します。',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 は ZIP の追加ファイルで、既定出力は変わりません。',
	tool_apple_touch_icon_rules_item_4: 'ICO パッケージも browserconfig.xml も出しません。',
	tool_apple_touch_icon_rules_title: '想定されるルール',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'アイコンの準備ができました。ダウンロードするか、ロゴを差し替えてください。',
	tool_apple_touch_icon_status_working: '正方形を描いています…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'link を書く前に、ホーム画面用の apple-touch-icon.png を 180×180 で書き出す。',
	tool_apple_touch_icon_usecase_2: 'PWA なら ZIP から 192 と 512 をマニフェストへ。',
	tool_apple_touch_icon_usecase_3:
		'ブラウザが小さな正方形 PNG を求めるときは ZIP の favicon 32。ICO 一式は不要。',
	tool_apple_touch_icon_usecases_title: 'こんなときに',
};

export default ja;
