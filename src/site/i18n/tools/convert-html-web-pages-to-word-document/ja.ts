/**
 * i18n tool shard (convert-html-web-pages-to-word-document / ja).
 * H1: HTMLのウェブページをWord文書にする。
 * IG: 編集できる見出し・リスト・表。A4 PDF・スクショ・PDF→Word・画像→Wordではない。
 */
import type { SiteLangDict } from '../../../types';

/** HTML→Word 変換ツールの表示文案（ja）。 */
const ja: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: '詳細設定（任意）',
	tool_convert_html_web_pages_to_word_document_article:
		'貼った HTML か公開 URL を、直せる .docx にします。見出し・リスト・表・リンクは Word のスタイルになります。A4 の印刷用 PDF でも、画面のスクリーンショットでもありません。貼り付けた HTML はこのタブ内に留まり、サーバーには上がりません。URL は一度だけ取得し、保存しません。印刷は「HTML を PDF に変換」。手元が PDF なら「PDF を Word 文書にする」。',
	tool_convert_html_web_pages_to_word_document_clear: 'クリア',
	tool_convert_html_web_pages_to_word_document_convert: '変換',
	tool_convert_html_web_pages_to_word_document_desc:
		'HTML を貼るか URL を取得して、編集できる Word にする。PDF でもスクショでもない。',
	tool_convert_html_web_pages_to_word_document_description:
		'HTMLのウェブページをWord文書にする（HTMLをWordに変換）：貼るか URL を取り、見出しと表が直せる .docx にする。A4 の PDF ではない。手順：貼るまたは取得 → 変換 → ダウンロード。例：リリースノートの見出しと表が Word スタイルになる。貼った HTML はこのタブに残る。URL は一度だけ取得し、保存しない。',
	tool_convert_html_web_pages_to_word_document_download: 'ダウンロード',
	tool_convert_html_web_pages_to_word_document_empty: '先に HTML を貼るか、公開 URL を入れてください。',
	tool_convert_html_web_pages_to_word_document_err_convert: 'その HTML から Word を作れませんでした。マークアップを確認して再試行してください。',
	tool_convert_html_web_pages_to_word_document_err_load: 'Word 用ライブラリの読み込みに失敗しました。再読み込みしてから試してください。',
	tool_convert_html_web_pages_to_word_document_err_url: 'その URL を取得できませんでした。アドレスを確認するか、相手サイトが取得を拒んでいます。',
	tool_convert_html_web_pages_to_word_document_err_url_empty: '先に有効な http(s) の URL を入れてください。',
	tool_convert_html_web_pages_to_word_document_example:
		'「サンプルを読み込む」はリリースノート HTML（H1、リスト、2 列表、リンク）を入れ、変換してダウンロードを有効にします。.docx は見出しと表のスタイルなので文字を直せます。URL タブで変換すると、公開アドレスを取りにいきます。',
	tool_convert_html_web_pages_to_word_document_example_title: '例',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'ダウンロードは .docx です（HTMLをDOCX）。Word か Office Open XML を読めるソフトで開いてください。古い .doc バイナリでも、Chrome の .mhtml でもありません。',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'できます。URL タブに https を1本貼って変換してください。スクリプトは除去します。ログイン壁や JavaScript アプリは本番と一致しないことが多いです。CSS レイアウトはピクセル単位では再現しません。',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'貼った HTML はこのタブから出ず、サーバーにもアップロードしません。URL 変換では、その住所を一度だけサーバーへ送って HTML を取り、保存しません。.docx の組み立てはブラウザ内です。',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'「HTML を PDF に変換」は A4 にページ割りして印刷向けです。こちらは見出し・リスト・表を編集できる Word にマップします。同じ HTML でも成果物が違います。',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'「PDF を Word 文書にする」は PDF ファイルと文字レイヤが起点です。こちらは貼った HTML かウェブの URL が起点です。すでに PDF ならそちらを使ってください。',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'できません。HTML を書き出すかコピーしてください。Chrome の完全保存 / MHTML は別形式で、ここでは解析しません。',
	tool_convert_html_web_pages_to_word_document_faq_q1: '結果は HTMLをワードに／.docx ですか？',
	tool_convert_html_web_pages_to_word_document_faq_q2: 'ウェブページをWordにできますか（URL）？',
	tool_convert_html_web_pages_to_word_document_faq_q3: 'HTML や URL はアップロードして保存されますか？',
	tool_convert_html_web_pages_to_word_document_faq_q4: '「HTML を PDF に変換」と何が違いますか？',
	tool_convert_html_web_pages_to_word_document_faq_q5: '「PDF を Word 文書にする」と何が違いますか？',
	tool_convert_html_web_pages_to_word_document_faq_q6: 'Chrome の .mhtml は変換できますか？',
	tool_convert_html_web_pages_to_word_document_how_body:
		'見出しと表を Word のスタイルにした編集用 .docx が欲しいときは、HTML を貼るか URL を入れて「変換」し、できたファイルを「ダウンロード」します。画面の絵ではありません。',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'手元のソースなら「HTML を貼る」のまま。公開 https をウェブページから Word にするなら URL タブへ。',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'「変換」を押します。スクリプトは除去。見出し・リスト・表・リンクを Word へマップ。読めない画像は飛ばします。',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'HTML 内の <img> も入れたい場合は詳細設定を開きます。埋め込みは既定オンで、ブロックされた画像はスキップします。',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'A4 印刷は「HTML を PDF に変換」。見た目のスクショはウェブページをまとめて PNG / JPG。手元が PDF なら「PDF を Word 文書にする」。',
	tool_convert_html_web_pages_to_word_document_how_item_5: '変換が終わったら「ダウンロード」。.docx を開いて文字を直します。',
	tool_convert_html_web_pages_to_word_document_how_title: '使い方',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'断片でも文書全体でも貼れます。変換前にスクリプトを除きます。CSS の見た目はピクセル単位では作り直しません。',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>リリースノート</h1><p>ここに HTML を貼る…</p>',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'オンだと、ブラウザが読める <img> を埋め込もうとします。壊れた画像やブロックされた画像は飛ばします。文字だけならオフ。',
	tool_convert_html_web_pages_to_word_document_imgs_label: '画像を含める',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'「画像を含める」は HTML の絵を埋め込もうとします。CSS の配置はマップしません。出力は常に1つの .docx です。',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'変換1回で .docx が1つ。見出し・段落・リスト・表・リンクと任意の画像をマップします。絶対配置、固定バー、スクリプトは対象外です。',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'貼った HTML はこのタブに留まり、サーバーには上げません。URL は一度取得して保存しません。',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'h1–h6 は Word 見出し。ul/ol はリスト。table は表。a はハイパーリンク。',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'ログイン壁、JavaScript アプリ、印刷 CSS は本番と食い違いやすいです。スクリーンショットのラスタではありません。',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'「HTML を PDF に変換」との差は編集できる Word であり A4 ではないこと。「PDF を Word 文書にする」との差は入力が HTML か URL であること。「画像をWordに」との差は入力がマークアップであり写真の束ではないこと。',
	tool_convert_html_web_pages_to_word_document_rules_title: '想定してほしいルール',
	tool_convert_html_web_pages_to_word_document_sample: 'サンプルを読み込む',
	tool_convert_html_web_pages_to_word_document_status_done: 'Word の用意ができました。.docx をダウンロードして編集できます。',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'URL の HTML を取得しています…',
	tool_convert_html_web_pages_to_word_document_status_working: 'Word 文書を組み立てています…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'HTML を貼る',
	tool_convert_html_web_pages_to_word_document_tab_url: 'URL',
	tool_convert_html_web_pages_to_word_document_title: 'HTMLのウェブページをWord文書にする',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'公開の http(s) URL を1本。HTML を一度取得し、CSS と画像 URL を書き換えます。Word へマップする前にスクリプトを除きます。',
	tool_convert_html_web_pages_to_word_document_url_label: 'URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'公開リリースノートの URL を取り、表を本物の Word 表のまま残して直せるようにする。',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'ヘルプセンターから書き出した HTML を、法務がコメントできる下書きにする。見出しは見出しのまま。',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'A4 は「HTML を PDF に変換」、見た目の保存は PNG 一括。直せる .docx が要るときだけここを使う。',
	tool_convert_html_web_pages_to_word_document_usecases_title: '向いているとき',
};

export default ja;
