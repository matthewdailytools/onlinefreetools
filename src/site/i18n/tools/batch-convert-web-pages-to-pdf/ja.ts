/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / ja).
 * H1 は「複数のウェブページをPDFにまとめて変換」。ユースケース等の空殻英借は使わない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'公開ページの URL を1行ずつ貼り、このタブで A4 の PDF に変換し、失敗した行は飛ばして ZIP にまとめます。各アドレスはサーバー経由で一度だけ取得し保存しません。変換は端末内です。',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: '非表示のページ取り込み枠',
	tool_batch_convert_web_pages_to_pdf_clear: 'クリア',
	tool_batch_convert_web_pages_to_pdf_col_file: 'ファイル名',
	tool_batch_convert_web_pages_to_pdf_col_status: '状態',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'すべて変換',
	tool_batch_convert_web_pages_to_pdf_desc:
		'URL リストのウェブページをまとめて PDF にし ZIP で渡す。取得は一度きりで保存せず、変換は端末内。',
	tool_batch_convert_web_pages_to_pdf_description:
		'複数のウェブページをPDFにまとめて変換します。URLリストを1行1件（最大10件）貼り、このタブで A4 PDF にし、失敗行は飛ばして ZIP をダウンロード。手順：リストを貼る → すべて変換 → 表を確認 → ダウンロード。例：ヘルプとポリシーのサンプル2件が ZIP 内の2つの PDF になります。各 URL はサーバーで一度取得して保存しません。変換は端末に残ります。HTML 断片だけなら「HTML を PDF に変換」を使ってください。',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'ZIPをダウンロード',
	tool_batch_convert_web_pages_to_pdf_empty: '先にページ URL を1件以上貼ってください。',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'このページは PDF にできませんでした。スキップしました。',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザで試してください。',
	tool_batch_convert_web_pages_to_pdf_err_load: '変換ライブラリの読み込みに失敗しました。再読み込みしてください。',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'URL は最大10件です。余分な行は入れていません。',
	tool_batch_convert_web_pages_to_pdf_err_url: 'その URL を読み込めませんでした。アドレスを確認するか、先方が取得を拒んでいる可能性があります。',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'この行は有効な http(s) URL ではありません。スキップしました。',
	tool_batch_convert_web_pages_to_pdf_example:
		'サンプル読込は example.com の URL を2件入れ、本番サイトへは行かずローカル HTML で2つの PDF を作り、ZIP ダウンロードを有効にします。「すべて変換」を押すと貼った実 URL を取得します。',
	tool_batch_convert_web_pages_to_pdf_example_title: '例',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'変換はこのタブで行います。URL リストを変換するとき、各アドレスをサーバーへ一度送って HTML を取りますが、ページは保存しません。PDF は端末で作り、ここで ZIP にまとめます。',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'こちらは URL リスト用（複数ページを PDF にして ZIP）です。HTML 断片やプレビュー付きの1件変換は「HTML を PDF に変換」を使ってください。',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'なりません。スクリプトは削除します。ログイン壁・有料壁・JavaScript 描画のアプリは実サイトと一致しないことが多いです。印刷用 CSS も違う場合があります。',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'成功した行は別々の PDF として1つの ZIP に入ります。1ファイルへの結合はしません。必要ならダウンロード後に「ファイルを1つの PDF に結合」を使ってください。',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'http(s) URL は最大10件。それ以上は無視します。失敗した行は飛ばし、残りは続けます。',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'ページはサーバーにアップロードされて保存されますか？',
	tool_batch_convert_web_pages_to_pdf_faq_q2: '「HTML を PDF に変換」との違いは？',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'ログインが必要なページや JS の多いサイトは実物どおりですか？',
	tool_batch_convert_web_pages_to_pdf_faq_q4: '結果は1つの PDF ですか、複数の ZIP ですか？',
	tool_batch_convert_web_pages_to_pdf_faq_q5: '一度に何件の URL を変換できますか？',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: 'キューに {n} 件の URL',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'公開ページの URL リストを貼り、順に PDF へ変換し、できたファイルを ZIP で持ち帰りましょう。',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'https の URL を1行ずつ貼ります（ヘルプやポリシー向き）。',
	tool_batch_convert_web_pages_to_pdf_how_item_2: '読み込み待ちはだいたい1秒のままで構いません。PDF の画像が空白なら秒数を上げてください。',
	tool_batch_convert_web_pages_to_pdf_how_item_3: '「すべて変換」を押します。公開 URL は一度取得し、失敗行はスキップします。',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'リストではなく HTML 断片だけなら「HTML を PDF に変換」へ。',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'1行以上成功したら ZIP をダウンロード。サンプル読込でローカル2ページを試せます。変換中は進捗パネルが出ます。',
	tool_batch_convert_web_pages_to_pdf_how_title: '使い方',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: '一括の進捗',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s}秒経過',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: '取得',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: '画像',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'http(s) URL は1行1件、最大10。直列変換。失敗はスキップ。成功した PDF は ZIP へ。',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'各 URL は HTML 取得のためサーバーへ一度送り、保存しません。PDF はこのタブで作ります。',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'プライベート網・ログイン・存在しないページはその行だけ失敗し、残りは続きます。',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'ZIP 内の同名は name (2).pdf になります。取り込み前にスクリプトを外します。',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'サイト全体のクローラーではありません。手元の URL を貼ってください。',
	tool_batch_convert_web_pages_to_pdf_rules_title: '想定されるルール',
	tool_batch_convert_web_pages_to_pdf_sample: 'サンプル読込',
	tool_batch_convert_web_pages_to_pdf_status_done: '一括処理が終わりました。表を確認して ZIP をダウンロードしてください。',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'ページ HTML を取得しています…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF 準備完了',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'スキップ',
	tool_batch_convert_web_pages_to_pdf_status_waiting: '画像の読み込み待ち…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'PDF を描画中…数秒タブが止まることがあります',
	tool_batch_convert_web_pages_to_pdf_status_queued: '待機中',
	tool_batch_convert_web_pages_to_pdf_status_working: 'まとめて変換しています…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} 件成功 · {skip} 件スキップ',
	tool_batch_convert_web_pages_to_pdf_title: '複数のウェブページをPDFにまとめて変換',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'公開 http(s) URL を1行1件、最大10。各ページを一度取得し CSS と画像 URL を書き換えます。PDF 前にスクリプトを削除します。',
	tool_batch_convert_web_pages_to_pdf_url_label: 'ページ URL（1行に1件）',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'ヘルプやドキュメントの複数ページを、いちいち開かずに PDF 保存する。',
	tool_batch_convert_web_pages_to_pdf_usecase_2: '公開ポリシーの URL リストを ZIP に残して後で読む。',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'HTML の貼り付けは「HTML を PDF に変換」へ。リンクが既に多いときだけこのページ。',
	tool_batch_convert_web_pages_to_pdf_usecases_title: '向いている作業',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'画像の読み込み開始後に待つ秒数です。初期値は1。PDF に空の画像枠が出るときは増やしてください。',
	tool_batch_convert_web_pages_to_pdf_wait_label: '読み込み待ち（秒）',
};

export default ja;
