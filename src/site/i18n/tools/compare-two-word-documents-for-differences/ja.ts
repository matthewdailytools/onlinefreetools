/**
 * i18n（compare-two-word-documents-for-differences / ja）。
 * H1: 2つのWord文書の差分を比較。
 * これは Word の「校閲 → 比較」ではない。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'2つの .docx を選び、見える本文だけを比べます。スタイルやヘッダー、Word の校閲ウィンドウは再現しません。ファイルは端末内に留まり、サーバーにアップロードしません。',
	tool_compare_two_word_documents_for_differences_clear: 'クリア',
	tool_compare_two_word_documents_for_differences_compare: '比較',
	tool_compare_two_word_documents_for_differences_desc:
		'2つのWord文書の差分を比較：ブラウザで .docx から見える文字を取り出し、サーバーにアップロードしません。',
	tool_compare_two_word_documents_for_differences_description:
		'2つのWord文書の差分を比較します。手順：2つの .docx を選び、見える段落テキストを取り出し、追加と削除を色分けします。ファイルは端末内で処理し、サーバーにアップロードしません。例：短いメモ2通で1文だけ変わっている場合。Microsoft の「校閲 → 比較」ではありません。ヘッダーとスタイルは捨てます。PDF は対象外です。',
	tool_compare_two_word_documents_for_differences_empty: '先に Word ファイルを2つ選ぶか、サンプルを読み込んでください。',
	tool_compare_two_word_documents_for_differences_err_extract:
		'テキストを読めませんでした。破損・暗号化、または .docx ではない可能性があります。',
	tool_compare_two_word_documents_for_differences_err_no_text: 'どちらからも抽出できる文字がありません（空、または画像のみ）。',
	tool_compare_two_word_documents_for_differences_err_not_docx: '.docx（Office Open XML）を使ってください。古い .doc は扱えません。',
	tool_compare_two_word_documents_for_differences_example:
		'サンプル読込はごく小さい .docx を2つ作ります。2通目は “meet at noon” を “meet at 3pm” に変えています。初回表示ですでにその文言差が出ます。',
	tool_compare_two_word_documents_for_differences_example_title: '例',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'いいえ。このタブ内で読みます。mammoth と jsdiff はこのサイトから読みますが、文書は当社サーバーに送りません。',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'違います。Word は書式や変更履歴まで比べられます。ここは見える文字だけを取り出して差分します。ヘッダー・フッター・スタイルは捨てます。',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'抽出失敗はパスワード付き、破損、OOXML 以外が典型です。画像だけのページは空文字になります。',
	tool_compare_two_word_documents_for_differences_faq_a4:
		"2つの .docx から抽出した文言だけを比較します。PDF と旧形式の .doc は解析せず、書式や Word の変更履歴も結果に含みません。",
	tool_compare_two_word_documents_for_differences_faq_q1: 'Word ファイルはアップロードされますか？',
	tool_compare_two_word_documents_for_differences_faq_q2: 'Word の「校閲 → 比較」と同じですか？',
	tool_compare_two_word_documents_for_differences_faq_q3: '抽出に失敗したりヘッダーが消えるのはなぜ？',
	tool_compare_two_word_documents_for_differences_faq_q4: 'PDF や任意の2文書を比較できますか？',
	tool_compare_two_word_documents_for_differences_how_body:
		'2つの Word を選び、文言の差を読みます。校閲ウィンドウは開きません。',
	tool_compare_two_word_documents_for_differences_how_item_1: '1つ目の .docx（元稿）を選ぶ。',
	tool_compare_two_word_documents_for_differences_how_item_2: '2つ目の .docx（改稿）を選ぶ。',
	tool_compare_two_word_documents_for_differences_how_item_3:
		"「比較」を押し、見えるテキストを抽出して文言差分を実行します。",
	tool_compare_two_word_documents_for_differences_how_item_4: '緑が追加、赤が削除です。',
	tool_compare_two_word_documents_for_differences_how_title: '使い方',
	tool_compare_two_word_documents_for_differences_label_a: '1つ目の Word 文書',
	tool_compare_two_word_documents_for_differences_label_b: '2つ目の Word 文書',
	tool_compare_two_word_documents_for_differences_legend: '緑 = 追加 · 赤 = 削除',
	tool_compare_two_word_documents_for_differences_load_sample: 'サンプルを読み込む',
	tool_compare_two_word_documents_for_differences_need_lib: 'ライブラリの読み込みに失敗しました。通信を確認して再読み込みしてください。',
	tool_compare_two_word_documents_for_differences_no_diff: '抽出したテキストに文言の差はありません。',
	tool_compare_two_word_documents_for_differences_result_label: '文言の差分',
	tool_compare_two_word_documents_for_differences_rules_body:
		'抽出後のテキスト差分です。書式の変更履歴ではありません。',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'mammoth が OOXML から見える段落を読み、jsdiff で行差分します。',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'ヘッダー、フッター、コメント、大半のスタイルは捨てます。字が同じで見た目だけ変えた2通は同一に見えることがあります。',
	tool_compare_two_word_documents_for_differences_rules_item_3: '暗号化または破損した .docx は失敗します。旧 .doc は解析しません。',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'Microsoft の「文書の比較」ではありません。書式の変更履歴が必要なら Word 本体を使ってください。',
	tool_compare_two_word_documents_for_differences_rules_title: '比較の約束事',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '追加 {added}、削除 {removed}',
	tool_compare_two_word_documents_for_differences_title: '2つのWord文書の差分を比較',
	tool_compare_two_word_documents_for_differences_usecase_1: '契約ドラフト：2つの .docx 書き出しでどの文が変わったか見る。',
	tool_compare_two_word_documents_for_differences_usecase_2: '議事録：先週のファイルと今週のファイルを突き合わせる。',
	tool_compare_two_word_documents_for_differences_usecase_3: '課題：レイアウトではなく文言だけ見たい2つの Word。',
	tool_compare_two_word_documents_for_differences_usecases_title: 'こんなときに',
};

export default ja;
