/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / ja).
 * H1 は「複数のウェブページをPDFにまとめて変換」。
 * JPG 隣ページとの差は A4 縦の印刷用ページ分割であり、表示幅のスクリーンショットではない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'公開 URL を貼ると、このタブで A4 縦の PDF に切り分けます。印刷やページ送り向きで、無限に長い JPEG ではありません。失敗行は飛ばし、できたファイルは ZIP へ。各アドレスはサーバーで一度取得して保存しません。チャット用の画面キャプチャやスマホ／デスクトップの先頭画面の比較は「ウェブページをまとめてJPGに変換」へ。',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: '非表示のページ取り込み枠',
	tool_batch_convert_web_pages_to_pdf_clear: 'クリア',
	tool_batch_convert_web_pages_to_pdf_col_file: 'ファイル名',
	tool_batch_convert_web_pages_to_pdf_col_status: '状態',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'すべて変換',
	tool_batch_convert_web_pages_to_pdf_desc:
		'URL リストを印刷向け A4 縦 PDF にして ZIP で渡す。ウェブの長尺スクショではない。',
	tool_batch_convert_web_pages_to_pdf_description:
		'複数のウェブページをPDFにまとめて変換。URL リストは A4 縦にページ分割され、印刷とページ送り向けです（1枚の長い JPEG ではありません）。手順：貼る → すべて変換 → ZIPをダウンロード。例：ヘルプとポリシーが2つの PDF になる。取得は一度きりで保存しません。HTML 断片は「HTML を PDF に変換」。',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'ZIPをダウンロード',
	tool_batch_convert_web_pages_to_pdf_empty: '先にページ URL を1件以上貼ってください。',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'このページは PDF にできませんでした。スキップしました。',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'このブラウザでは ZIP を作れません。新しいブラウザで試してください。',
	tool_batch_convert_web_pages_to_pdf_err_load: '変換ライブラリの読み込みに失敗しました。再読み込みしてください。',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'URL は最大10件です。余分な行は入れていません。',
	tool_batch_convert_web_pages_to_pdf_err_url: 'その URL を読み込めませんでした。アドレスを確認するか、先方が取得を拒んでいる可能性があります。',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'この行は有効な http(s) URL ではありません。スキップしました。',
	tool_batch_convert_web_pages_to_pdf_example:
		'サンプル読込は example.com のヘルプとポリシーを2件入れ、CSS 改ページ付きの A4 縦 PDF をローカル HTML から作り（本番へは行かず）、ZIP ダウンロードを有効にします。「すべて変換」で貼った実 URL を取得します。印刷用 CSS で切れ目が変わります。',
	tool_batch_convert_web_pages_to_pdf_example_title: '例',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'用紙は常に A4 縦です。長いページは CSS の改ページ（従来モードのフォールバックあり）で切れます。無限に高い1枚にはなりません。長尺スクショが欲しいときは「ウェブページをまとめてJPGに変換」。',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'JPG 側は表示幅（1280 / 768 / 390）で JPEG 1枚を切り、画質と全体／最初の画面を選べます。こちらは印刷向けに A4 へ分割します。同じ URL リストでも成果物が違います。',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'こちらは URL リスト用（複数の公開ページ → 別々の A4 PDF → ZIP）です。HTML 断片やプレビュー付きの1件は「HTML を PDF に変換」。',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'変換はこのタブです。各アドレスをサーバーへ一度送って HTML を取りますが、ページは保存しません。PDF は端末で作り、ここで ZIP にします。',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'成功した行は別々の PDF として1つの ZIP に入ります。1冊への結合はしません。必要ならダウンロード後に「ファイルを1つの PDF に結合」。',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'なりません。スクリプトは削除します。ログイン壁・有料壁・JavaScript 描画は実サイトと一致しないことが多いです。印刷 CSS で切れ目もずれます。',
	tool_batch_convert_web_pages_to_pdf_faq_q1: '用紙サイズは？1枚の超縦長になりますか？',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'ウェブページをまとめてJPGに変換するツールとの違いは？',
	tool_batch_convert_web_pages_to_pdf_faq_q3: '「HTML を PDF に変換」との違いは？',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'ページはサーバーにアップロードされて保存されますか？',
	tool_batch_convert_web_pages_to_pdf_faq_q5: '結果は1つの PDF ですか、複数の ZIP ですか？',
	tool_batch_convert_web_pages_to_pdf_faq_q6: 'ログインが必要なページや JS の多いサイトは実物どおりですか？',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: 'キューに {n} 件の URL',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'印刷や保管したい公開 URL を貼り、A4 縦の PDF にして、できたファイルを ZIP で持ち帰りましょう。',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'https の URL を1行ずつ。ポリシー、ヘルプ、印刷したい公開文書向きです。',
	tool_batch_convert_web_pages_to_pdf_how_item_2: '読み込み待ちはだいたい1秒のまま。ある A4 ページの画像が空白なら秒数を上げてください。',
	tool_batch_convert_web_pages_to_pdf_how_item_3: '「すべて変換」を押します。公開 URL は一度取得し、A4 縦にページ分割します（CSS 改ページが効きます）。失敗行はスキップ。',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'HTML 断片とプレビューなら「HTML を PDF に変換」。表示幅のスクリーンショットなら「ウェブページをまとめてJPGに変換」。',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'1行以上成功したら ZIP をダウンロード。サンプル読込で改ページ付きのローカル A4 を2件試せます。',
	tool_batch_convert_web_pages_to_pdf_how_item_6: '複数 PDF を1冊にするなら、先にダウンロードして「ファイルを1つの PDF に結合」。',
	tool_batch_convert_web_pages_to_pdf_how_title: '使い方',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: '一括の進捗',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s}秒経過',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: '取得',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: '画像',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'http(s) URL は1行1件、最大10。出力は CSS 改ページ付き A4 縦で、全ページ JPEG ではありません。直列変換。失敗はスキップ。成功した PDF は ZIP へ。',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'各 URL は HTML 取得のためサーバーへ一度送り、保存しません。PDF はこのタブで A4 縦に作ります。',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'改ページは CSS（従来モードのフォールバックあり）。印刷スタイルは画面と違うことがあります。極端に高いページはタブ保護のため上限があります。',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'プライベート網・ログイン・存在しないページはその行だけ失敗。ZIP 内の同名は name (2).pdf。取り込み前にスクリプトを外します。',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'サイト全体のクローラーでもスクリーンショット専用でもありません。手元の公開 URL を貼ってください。',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'「ウェブページをまとめてJPGに変換」との差：あちらは表示幅の JPEG 1枚。HTML 側は貼り付け HTML。「ファイルを1つの PDF に結合」は出力の結合であり、本ページではしません。',
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
		'公開 http(s) URL を1行1件、最大10。各ページを一度取得し CSS と画像 URL を書き換えます。PDF 前にスクリプトを削除し、A4 縦＋CSS 改ページにします。',
	tool_batch_convert_web_pages_to_pdf_url_label: 'ページ URL（1行に1件）',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: '会議前にヘルプや公開ドキュメントを印刷できる A4 PDF にしておく。タブごとに印刷しなくてよい。',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'ポリシー・規約・告知の URL リストを ZIP に残し、あとでオフライン閲覧やメール添付に使う。',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'HTML の貼り付けは「HTML を PDF に変換」。チャット用スクショやスマホ／デスクトップ比較は JPG 側。ここは印刷用のページ分割です。',
	tool_batch_convert_web_pages_to_pdf_usecases_title: '向いている作業',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'画像の読み込み開始後に待つ秒数です。初期値は1。ある A4 ページに空の画像枠が出るときは増やしてください。',
	tool_batch_convert_web_pages_to_pdf_wait_label: '読み込み待ち（秒）',
};

export default ja;
