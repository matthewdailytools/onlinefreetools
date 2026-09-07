/**
 * i18n tool shard (batch-convert-web-pages-to-excel / ja).
 * H1: ウェブページをまとめてExcelにする。
 * IG: HTML の表セルを 1 つのブックへ。スクショでも A4 PDF でも Word の文章でもない。
 */
import type { SiteLangDict } from '../../../types';

/** ウェブ→Excel 変換の表示文案（ja）。 */
const ja: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: '詳細設定（任意）',
	tool_batch_convert_web_pages_to_excel_article:
		'公開 URL の HTML テーブルを 1 つの Excel ブックにします。各表は並べ替えや数式ができるセルになります。本文やスクリーンショットは入りません。A4 の印刷用 PDF でも Word 文書でもありません。各アドレスはサーバー経由で一度だけ取得し、保存しません。貼った HTML はこのタブ内に留まります。印刷は「ウェブページをまとめて PDF にする」。見出しを直すなら「HTMLのウェブページをWord文書にする」。',
	tool_batch_convert_web_pages_to_excel_clear: 'クリア',
	tool_batch_convert_web_pages_to_excel_col_file: 'シート',
	tool_batch_convert_web_pages_to_excel_col_status: '状態',
	tool_batch_convert_web_pages_to_excel_col_url: 'URL',
	tool_batch_convert_web_pages_to_excel_convert: 'すべて変換',
	tool_batch_convert_web_pages_to_excel_desc:
		'URL リストの HTML 表を 1 つの Excel にする。スクショでも PDF でも Word でもない。',
	tool_batch_convert_web_pages_to_excel_description:
		'ウェブページをまとめてExcelにする（HTMLテーブルをExcelに / HTMLをExcelに変換）：URL の表を 1 つの .xlsx にする。スクショでも A4 PDF でもない。手順：URL を貼る → すべて変換 → Excelをダウンロード。例：価格表と在庫表が 2 シートになる。取得は一度だけで保存しない。',
	tool_batch_convert_web_pages_to_excel_download: 'Excelをダウンロード',
	tool_batch_convert_web_pages_to_excel_empty: 'ページ URL を 1 件以上貼るか、「HTMLを貼る」に切り替えてください。',
	tool_batch_convert_web_pages_to_excel_err_convert: 'そのページに使える HTML 表がありません。スキップしました。',
	tool_batch_convert_web_pages_to_excel_err_html_empty: '先に <table> を含む HTML を貼ってください。',
	tool_batch_convert_web_pages_to_excel_err_load: 'Excel 用ライブラリの読み込みに失敗しました。再読み込みしてから試してください。',
	tool_batch_convert_web_pages_to_excel_err_too_many: 'URL は最大 10 件です。超えた行は入れていません。',
	tool_batch_convert_web_pages_to_excel_err_url: 'その URL を取得できませんでした。アドレスを確認するか、相手サイトが取得を拒んでいます。',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'その行は有効な http(s) URL ではありません。スキップしました。',
	tool_batch_convert_web_pages_to_excel_example:
		'サンプル読込は価格表と在庫表の URL を入れ、本番へは行かずローカル HTML 表から 1 冊のブックを作り、Excelをダウンロードを有効にします。「すべて変換」は貼った実 URL を取得します。HTMLを貼るは URL なしで同じ表マッピングです。',
	tool_batch_convert_web_pages_to_excel_example_title: '例',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'貼った HTML はこのタブから出ません。URL を変換する場合、各アドレスを一度だけサーバーへ送って HTML を取得し、保存しません。.xlsx はブラウザ内で作ります。',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'Word 側は見出し・リスト・段落を直せる .docx にします。こちらは本文を無視し、HTML 表のセルだけ Excel シートにします。取得は同じでも成果物が違います。',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG はビューポートのスクリーンショット（画像 ZIP）。PDF は A4 の印刷ページです。こちらは Excel で絞り込める数字と文字——1 つのブックであり、写真の ZIP ではありません。',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'できます。1 行でウェブページを Excel にできます。成功した URL は複数シートの 1 つの .xlsx に入ります。',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'できません。OCR も PDF 解析もありません。HTML ページを変換するか、表のマークアップを貼ってください。既に CSV なら CSV ↔ JSON。',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'「HTMLを貼る」タブ（HTMLをExcelに変換 / HTMLテーブルをExcelに）。Chrome の完全ページ / .mhtml は対象外です。HTML を書き出すか表をコピーしてください。Web 版 Excel ではありません。',
	tool_batch_convert_web_pages_to_excel_faq_q1: 'ページはアップロードされて保存されますか？',
	tool_batch_convert_web_pages_to_excel_faq_q2: '「HTMLのウェブページをWord文書にする」との違いは？',
	tool_batch_convert_web_pages_to_excel_faq_q3: 'ウェブページの JPG / PNG / PDF 一括変換との違いは？',
	tool_batch_convert_web_pages_to_excel_faq_q4: 'URL 1 件だけでも変換できますか？',
	tool_batch_convert_web_pages_to_excel_faq_q5: 'PDF の表を取り出せますか？',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'URL ではなく HTML や HTML テーブルがあります。Excel オンラインや mhtml は？',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: 'キューに {n} 件の URL',
	tool_batch_convert_web_pages_to_excel_how_body:
		'HTML 表がある公開 URL を貼り、「すべて変換」のあと Excel を 1 冊ダウンロードします。本文は飛ばし、<table> のセルだけシートになります。',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'1 行に https の URL を 1 件（価格表や公開 HTML 表向き）。ウェブページを Excel にするなら 1 行で足ります。',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'「すべて変換」を押します。各公開 URL は一度取得し、使える表がない行はスキップ、残りは続きます。',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'URL がなくマークアップだけ（HTMLをExcelに / HTMLテーブルをExcelに）なら「HTMLを貼る」に切って貼り、「すべて変換」。',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'表ごとではなく URL ごとに 1 シートにしたい、または小さいナビ表も残したいときは詳細設定。',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'A4 印刷は「ウェブページをまとめて PDF にする」。見出しは「HTMLのウェブページをWord文書にする」。既に CSV なら CSV ↔ JSON。',
	tool_batch_convert_web_pages_to_excel_how_item_6: '表が 1 つでもマップできたら Excelをダウンロード。',
	tool_batch_convert_web_pages_to_excel_how_title: '使い方',
	tool_batch_convert_web_pages_to_excel_html_hint: '<table> を含む断片でも文書全体でも貼れます。変換はこのタブ内で、アップロードしません。',
	tool_batch_convert_web_pages_to_excel_html_label: '表を含む HTML',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>数量</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'シート',
	tool_batch_convert_web_pages_to_excel_layout_table: 'HTML 表ごとに 1 シート',
	tool_batch_convert_web_pages_to_excel_layout_url: 'URL ごとに 1 シート（表を縦に積む）',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'既定は 1 冊のブックで「表ごとに 1 シート」。URL 単位にすると、そのページの表が空行を挟んで 1 シートに積まれます。2 行または 2 列に満たない小さい表は、ナビ格子がファイルを汚さないよう既定でスキップします。',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'コピーするのは HTML の <table> セルだけ。http(s) URL は 1 行 1 件、最大 10。失敗行はスキップ。成功した表は 1 つの .xlsx に入ります。拡張子を変えたスクショでも PDF 書き出しでもありません。',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'各 URL は HTML 取得のため一度だけ送り、保存しません。貼った HTML はタブ内に留まります。ブックはこの場で作ります。',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'社内ネット、ログイン壁、<table> がないページはその行が失敗し、残りは続きます。',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan は空セルで埋めます。rowspan は平らにします（各行は独立）。スクリプトは除去するので、JS だけの表は空になります。',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'サイト全体のクローラーでも Web 版 Excel でもありません。手元の URL か HTML を貼ってください。シート名は 31 文字までです。',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'Word 変換と比べると表だけ（見出し・リストなし）。JPG/PNG/PDF 一括と比べると 1 冊のセルであり、画像 ZIP や A4 ではありません。CSV ↔ JSON と比べると入力はウェブページで、既にあるファイルではありません。',
	tool_batch_convert_web_pages_to_excel_rules_title: '想定してほしいルール',
	tool_batch_convert_web_pages_to_excel_sample: 'サンプル読込',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: '小さい表をスキップ（2×2 未満）',
	tool_batch_convert_web_pages_to_excel_status_converting: 'HTML 表をマッピングしています…',
	tool_batch_convert_web_pages_to_excel_status_done: '一括が終わりました。表を確認してから Excel をダウンロードしてください。',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'ページ HTML を取得しています…',
	tool_batch_convert_web_pages_to_excel_status_ok: '表をマップ済み',
	tool_batch_convert_web_pages_to_excel_status_queued: '待機中',
	tool_batch_convert_web_pages_to_excel_status_skip: 'スキップ',
	tool_batch_convert_web_pages_to_excel_status_working: '一括変換中…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} 成功 · {skip} スキップ',
	tool_batch_convert_web_pages_to_excel_tab_html: 'HTMLを貼る',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'ページ URL',
	tool_batch_convert_web_pages_to_excel_title: 'ウェブページをまとめてExcelにする',
	tool_batch_convert_web_pages_to_excel_url_hint: '公開 http(s) URL を 1 行 1 件、最大 10。各ページは一度取得します。スクリプトは除去。シートになるのは HTML 表だけです。',
	tool_batch_convert_web_pages_to_excel_url_label: 'ページ URL（1 行 1 件）',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'公開の価格表や SKU の HTML 表を Excel に残し、数量を絞り込める数字のままにする。PNG だと画素だけです。',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'ヘルプ 2 件のパラメータ表を 1 冊にまとめ、自分で SUM 列を足す。Word なら見出しが文章のままです。',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'A4 印刷は PDF 一括、手元の CSV は CSV ↔ JSON。ソースがまだウェブの表ならこのページです。',
	tool_batch_convert_web_pages_to_excel_usecases_title: '向いているとき',
};

export default ja;
