/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / ja)。
 * H1 は「ウェブページをまとめてJPGに変換」。ユースケース等の空殻英借は使わない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: '詳細設定（任意）',
	tool_batch_convert_web_pages_to_jpg_article:
		'公開ページの URL を1行ずつ貼り、選んだ表示幅で JPEG にし、失敗した行は飛ばして ZIP にまとめます。各アドレスはサーバー経由で一度だけ取得し保存しません。画像化はこのタブ内です。A4 の PDF ではありません。',
	tool_batch_convert_web_pages_to_jpg_capture_first: '最初の画面だけ',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: '非表示のページ取り込み枠',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'ページ全体',
	tool_batch_convert_web_pages_to_jpg_capture_label: '取り込み範囲',
	tool_batch_convert_web_pages_to_jpg_clear: 'クリア',
	tool_batch_convert_web_pages_to_jpg_col_file: 'ファイル名',
	tool_batch_convert_web_pages_to_jpg_col_status: '状態',
	tool_batch_convert_web_pages_to_jpg_col_url: 'URL',
	tool_batch_convert_web_pages_to_jpg_convert: 'すべて変換',
	tool_batch_convert_web_pages_to_jpg_desc:
		'URL リストのウェブページをまとめて JPG にし ZIP で渡す。取得は一度きりで保存せず、変換は端末内。',
	tool_batch_convert_web_pages_to_jpg_description:
		'ウェブページをまとめてJPGに変換。URLリストを貼れば1件でも可。表示幅と画質、全体か最初の画面かを選べ、ZIPで受け取る。手順：貼る → すべて変換 → ZIPをダウンロード。例：ヘルプ2件がJPEG2枚になる。取得は一度きりで保存せず、変換はこのタブ内。',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'ZIPをダウンロード',
	tool_batch_convert_web_pages_to_jpg_empty: '先にページ URL を1件以上貼ってください。',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'このページは JPEG にできませんでした。スキップしました。',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザで試してください。',
	tool_batch_convert_web_pages_to_jpg_err_load: '変換ライブラリの読み込みに失敗しました。再読み込みしてください。',
	tool_batch_convert_web_pages_to_jpg_err_too_many: 'URL は最大10件です。余分な行は入れていません。',
	tool_batch_convert_web_pages_to_jpg_err_url: 'その URL を読み込めませんでした。アドレスを確認するか、先方が取得を拒んでいる可能性があります。',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'この行は有効な http(s) URL ではありません。スキップしました。',
	tool_batch_convert_web_pages_to_jpg_example:
		'サンプル読込は example.com の URL を2件入れ、本番サイトへは行かずローカル HTML で2枚の JPEG を作り、ZIP ダウンロードを有効にします。「すべて変換」を押すと貼った実 URL を取得します。表示幅・品質・全体/最初の画面で画素が変わります。',
	tool_batch_convert_web_pages_to_jpg_example_title: '例',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'変換はこのタブで行います。URL リストを変換するとき、各アドレスをサーバーへ一度送って HTML を取ります。ページは保存しません。JPEG は端末内で作り、ここで ZIP にします。',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'PDF 側は A4 にページ分割して読む・印刷するための文書です。こちらは URL ごとに、選んだ幅（デスクトップ 1280、タブレット 768、スマホ 390）で JPEG 1枚にします。品質と全体/最初の画面も選べます。同じリストでも成果物が違います。',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'PDF を JPG にするツールは、アップロードした PDF が起点です。こちらはウェブページの URL が起点です。すでに PDF があるならそちら、リンクの一覧があるならこのページです。',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'一致しません。スクリプトは削除されます。ログイン壁や有料壁、JavaScript で描画するアプリは本番と違うことが多いです。レスポンシブ CSS は選んだ表示幅に従います。',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'成功した行はそれぞれ JPEG になり、1つの ZIP に入ります。1行だけでも構いません。複数画像を1枚に結合はしません。',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'表示幅でレイアウトが変わります（スマホ向けとデスクトップ向け）。JPEG 品質はファイルサイズと圧縮ノイズのトレードオフです。全体はスクロール高（巨大なトップは上限あり）。最初の画面はおおよそ1画面分です。',
	tool_batch_convert_web_pages_to_jpg_faq_q1: 'ページはサーバーにアップロードされ保存されますか？',
	tool_batch_convert_web_pages_to_jpg_faq_q2: 'ウェブページをまとめてPDFに変換するツールとの違いは？',
	tool_batch_convert_web_pages_to_jpg_faq_q3: 'PDF を JPG にするツールとの違いは？',
	tool_batch_convert_web_pages_to_jpg_faq_q4: 'ログインが必要なサイトやスクリプトが多いサイトは本番と同じになりますか？',
	tool_batch_convert_web_pages_to_jpg_faq_q5: '結果は1枚の JPG ですか、ZIP ですか？URL 1件だけでもできますか？',
	tool_batch_convert_web_pages_to_jpg_faq_q6: '表示幅、JPEG 品質、「最初の画面」は何を変えますか？',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: 'キューに {n} 件の URL',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'公開ページの URL リストを貼り、「すべて変換」を押します（初期値はデスクトップ 1280、JPEG 85%、ページ全体）。できた画像を ZIP で受け取ります。',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'https の URL を1行ずつ貼ります（ヘルプやチケットのリンク向き）。1行だけでも URL を JPG にできます。',
	tool_batch_convert_web_pages_to_jpg_how_item_2: '「すべて変換」を押します。初期値はデスクトップ 1280、JPEG 85%、ページ全体です。公開 URL は一度だけ取得し、失敗行は飛ばします。',
	tool_batch_convert_web_pages_to_jpg_how_item_3: 'スマホ幅や最初の画面だけ、または画像が空白なら待ち秒を増やしたいときは「詳細設定（任意）」で表示幅・画質・範囲・待ち秒を変えます。',
	tool_batch_convert_web_pages_to_jpg_how_item_4: '画面の切り抜きではなく印刷できる A4 が必要なら、ウェブページをまとめてPDFに変換を使います。すでに PDF があるなら PDF を JPG に。',
	tool_batch_convert_web_pages_to_jpg_how_item_5: '1行でも成功したら「ZIPをダウンロード」できます。',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'「サンプルを読み込む」でローカルの2ページを試せます。変換中は進捗パネルが出ます。',
	tool_batch_convert_web_pages_to_jpg_how_title: '使い方',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: '{s}秒経過',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: '取得',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: '画像',
	tool_batch_convert_web_pages_to_jpg_hud_title: '一括の進捗',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'表示幅でレイアウトが変わります。JPEG 品質でファイルサイズが変わります。全体は縦長の切り抜き、最初の画面はおおよそ1画面分です。',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'JPEG 品質',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'http(s) URL を1行1件、最大10件。直列変換。失敗行はスキップ。できた JPEG は ZIP へ。表示幅・品質・範囲で画素が変わります。PDF の拡張子を変えたものではありません。',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'各 URL は HTML 取得のためサーバーへ一度だけ送り、保存しません。JPEG はこのタブで作ります。',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'社内網、ログイン、欠けたページはその行だけ失敗します。残りの行は続きます。',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'ZIP 内の同名は name (2).jpg になります。スクリプトと noscript のリフレッシュ罠は削除します。極端に高いトップは上限をかけてタブが落ちないようにします。',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'サイト全体のクローラーではありません。手元にある URL を貼ってください。',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'ウェブページをまとめてPDFに変換との違い：A4 分割なし。PDF を JPG にとの違い：入力は URL リストで、PDF のアップロードではない。画像一括変換との違い：入力はウェブページで、手元の写真ではない。',
	tool_batch_convert_web_pages_to_jpg_rules_title: '想定しておきたいルール',
	tool_batch_convert_web_pages_to_jpg_sample: 'サンプルを読み込む',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'JPEG を描画中… このタブが数秒止まることがあります',
	tool_batch_convert_web_pages_to_jpg_status_done: '一括が終わりました。表を確認して ZIP をダウンロードしてください。',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'ページ HTML を取得しています…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG 準備完了',
	tool_batch_convert_web_pages_to_jpg_status_queued: '待機中',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'スキップ',
	tool_batch_convert_web_pages_to_jpg_status_waiting: '画像の読み込み待ち…',
	tool_batch_convert_web_pages_to_jpg_status_working: '一括を変換しています…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} 成功 · {skip} スキップ',
	tool_batch_convert_web_pages_to_jpg_title: 'ウェブページをまとめてJPGに変換',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'公開の http(s) URL を1行1件、最大10件。各ページを一度取得し、CSS と画像 URL を書き換えます。取り込み前にスクリプトは外します。',
	tool_batch_convert_web_pages_to_jpg_url_label: 'ページ URL（1行1件）',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'ヘルプやチケットの URL をまとめて JPEG にし、タブを一つずつ開かずにチャットへ貼る。',
	tool_batch_convert_web_pages_to_jpg_usecase_2: '同じ公開ページをスマホ 390 とデスクトップ 1280 で最初の画面だけ切り、レビュー前にレイアウトを比べる。',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'A4 の保管用 PDF はウェブページをまとめてPDFに変換へ。URL リストから画像ファイルが欲しいときだけこのページ。',
	tool_batch_convert_web_pages_to_jpg_usecases_title: '向いている作業',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'デスクトップ 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: '表示幅',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'スマホ 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'タブレット 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'画像の読み込みが始まったあと追加で待つ秒数。初期値は1。JPEG に空の枠が残るなら上げてください。',
	tool_batch_convert_web_pages_to_jpg_wait_label: '読み込み待ち（秒）',
};

export default ja;
