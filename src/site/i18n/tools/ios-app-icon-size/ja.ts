/**
 * i18n ツール分片（ios-app-icon-size / ja）。
 * 検索向け H1：iOSアプリアイコンサイズ。既定作業は App Store 用 1024 不透明 PNG。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語：1024 提出、倍率 ZIP、端末内処理。 */
const ja: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'ロゴを App Store が求める 1024×1024 の不透明 PNG にします。必要なら ZIP に iPhone 180、iPad 167、Play 512 を同梱します。ファイルは端末内に留まり、サーバーへは送りません。',
	tool_ios_app_icon_size_bg_label: '不透明な背景',
	tool_ios_app_icon_size_choose_image: 'ロゴを選ぶ',
	tool_ios_app_icon_size_clear: 'クリア',
	tool_ios_app_icon_size_desc:
		'iOSアプリアイコンサイズ 1024×1024 の不透明 PNG を書き出します。端末内に留まり、サーバーへは送りません。',
	tool_ios_app_icon_size_description:
		'iOSアプリアイコンサイズ：ロゴを選び、不透明な 1024×1024 に載せて App Store Connect 用 PNG を保存します。手順：画像を選ぶ → 1024 のまま → 保存。例：開いた時点でサンプルが 1024×1024 に収まっています。任意チップで iPhone 180、iPad 167、Play 512 を ZIP にできます。ファイルは端末に留まり、サーバーへは送りません。',
	tool_ios_app_icon_size_download: 'PNGを保存',
	tool_ios_app_icon_size_download_zip: 'サイズZIPを保存',
	tool_ios_app_icon_size_drop_hint: '正方形のロゴをドロップ。不透明な正方形の中央に置き、角丸マスクはかけません。',
	tool_ios_app_icon_size_empty: '先にロゴを選んでください。',
	tool_ios_app_icon_size_err_decode: 'その画像は読めません。PNG か JPEG を試してください。',
	tool_ios_app_icon_size_err_fflate: 'ZIP エンジンを読み込めませんでした。回線を確認して再試行してください。',
	tool_ios_app_icon_size_example:
		'サンプル読込は仮ロゴを描き、1024×1024 の不透明正方形に収めて PNG 保存を有効にします。ZIP には 180、167、Play 512 と小さい枠も入ります。',
	tool_ios_app_icon_size_example_title: '例',
	tool_ios_app_icon_size_faq_a1:
		'いいえ。ロゴはこのタブ内で復号します。当社サーバーへは上げません。',
	tool_ios_app_icon_size_faq_a2:
		'App Store Connect は今も透明なしの 1024×1024 PNG を求めます。このページの既定 iOSアプリアイコンサイズです。',
	tool_ios_app_icon_size_faq_a3:
		'角丸は OS がかけます。正方形のまま書き出してください。先に丸く切らないでください。',
	tool_ios_app_icon_size_faq_a4:
		'180 は iPhone 60pt @3x。167 は iPad Pro 83.5pt @2x。チップであり、第二の見出しではありません。',
	tool_ios_app_icon_size_faq_a5:
		'Play 高解像度 512 は ZIP に入ります。Adaptive の XML も別パック URL も作りません。',
	tool_ios_app_icon_size_faq_q1: 'ロゴはアップロードされますか？',
	tool_ios_app_icon_size_faq_q2: 'なぜ 1024×1024 ですか？',
	tool_ios_app_icon_size_faq_q3: '角を丸めるべきですか？',
	tool_ios_app_icon_size_faq_q4: '180 と 167 は何ですか？',
	tool_ios_app_icon_size_faq_q5: 'Google Play アイコンは？',
	tool_ios_app_icon_size_how_body:
		'ストアに出すロゴを決め、1024×1024 の不透明 PNG を書き出し、必要なら iPhone / iPad / Play サイズを ZIP にします。',
	tool_ios_app_icon_size_how_item_1: 'iOSアプリアイコンサイズ用のロゴを選ぶ。今回の仕事は App Store の 1024 PNG。',
	tool_ios_app_icon_size_how_item_2: '180 / 167 / Play 512 が要るとき以外は 1024 のまま。',
	tool_ios_app_icon_size_how_item_3: '不透明な背景を保ち、透明チャネルで Connect に拒まれないようにする。',
	tool_ios_app_icon_size_how_item_4: 'PNG かサイズ ZIP を保存。サンプルは最初の描画ですでに実行済み。',
	tool_ios_app_icon_size_how_title: '使い方',
	tool_ios_app_icon_size_load_sample: 'サンプル読込',
	tool_ios_app_icon_size_out_size_label: '出力サイズ',
	tool_ios_app_icon_size_rules_body:
		'ストアアイコンは正方形・塗りつぶしで、サイトの apple-touch-icon ページとは分けます。',
	tool_ios_app_icon_size_rules_item_1:
		'既定キャンバスは 1024×1024 PNG。ロゴは contain で中央寄せし、引き伸ばしません。',
	tool_ios_app_icon_size_rules_item_2:
		'背景は不透明（既定は白）。アルファは意図的に潰します。',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 は ZIP 追加であり、H1 は変えません。',
	tool_ios_app_icon_size_rules_item_4:
		'Assets.xcassets プロジェクトでも Adaptive Icon パックでもありません。',
	tool_ios_app_icon_size_rules_title: '守るルール',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'アイコン準備完了 — 保存するかロゴを差し替えてください。',
	tool_ios_app_icon_size_status_working: '正方形を描画中…',
	tool_ios_app_icon_size_title: 'iOSアプリアイコンサイズ',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect：スクリーンショットの前に 1024×1024 の iOS アイコンを書き出す。',
	tool_ios_app_icon_size_usecase_2:
		'iPhone ホーム画面：ZIP の 180 で 60pt @3x を確認する。',
	tool_ios_app_icon_size_usecase_3:
		'Play 掲載：512 チップを使い、別パック URL は開かない。',
	tool_ios_app_icon_size_usecases_title: '向いている作業',
};

export default ja;
