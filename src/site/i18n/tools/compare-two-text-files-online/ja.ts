/**
 * i18n shard for compare-two-text-files-online (Japanese).
 * H1 is the search task “2つのテキストファイルをオンラインで比較”; written for JP search phrasing, not an English sentence skeleton.
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'このタブで2つのテキストファイルを選び、行単位の追加と削除を確認します。ファイルは端末の中に留まり、サーバーへは送りません。大きな貼り付け欄はありません。貼るだけなら「2つのテキストの差分を確認」へ。',
	tool_compare_two_text_files_online_clear: 'クリア',
	tool_compare_two_text_files_online_compare: '比較する',
	tool_compare_two_text_files_online_desc:
		'テキストファイルをオンラインで比較：2つの txt を選び、ブラウザ上で行差分を見る。アップロードなし。',
	tool_compare_two_text_files_online_description:
		'2つのテキストファイルをオンラインで比較します。手順：元ファイルと改訂ファイルを選び、UTF-8 で読み（先頭 BOM は除去）、バイナリは拒否し、行の追加と削除を色分けします。ファイルは端末に留まり、アップロードしません。例：notes-a.txt と notes-b.txt で真ん中の1行だけ違う場合。Word・表計算・JSON は別ページ。txt 比較やファイル diff も同じ作業です。',
	tool_compare_two_text_files_online_empty: '先に2つのテキストファイルを選ぶか、サンプルを読み込んでください。',
	tool_compare_two_text_files_online_err_binary:
		'いずれかがバイナリに見えます（ヌルバイト）。このページは .txt などのプレーンテキスト専用です。',
	tool_compare_two_text_files_online_err_too_large:
		'ファイルがおよそ 1 MB を超えています。タブが重くならないよう、短い抜粋で試してください。',
	tool_compare_two_text_files_online_example:
		'サンプルを読み込むと notes-a.txt（alpha / 2行目 / 3行目）と、真ん中が「変更した行」の notes-b.txt を比べます。行モードはその1行だけ印を付けます。初回表示ですでにこの結果が出ます。',
	tool_compare_two_text_files_online_example_title: '例',
	tool_compare_two_text_files_online_faq_a1:
		'送りません。バイトは FileReader でこのタブ内だけ読みます。jsdiff は CDN からライブラリとして来る場合がありますが、あなたのファイルは当サイトのサーバーへ上がりません。',
	tool_compare_two_text_files_online_faq_a2:
		'UTF-8 でデコードします。先頭 BOM は外すので、それだけで1行目が差分扱いされません。別エンコーディングは文字化けします。先に UTF-8 で保存してください。',
	tool_compare_two_text_files_online_faq_a3:
		'ヌルバイトがあればバイナリとして拒否します。16進ダンプや書庫ツールを使ってください。Word と Excel は専用の比較ページへ。',
	tool_compare_two_text_files_online_faq_a4:
		'対象は .txt / .text です。txt 比較やオンラインのファイル diff も同じ仕事です。「2つのファイルを比較」が Word や表なら、そちらのページへ。貼り付け専用は「2つのテキストの差分を確認」です。',
	tool_compare_two_text_files_online_faq_q1: 'ファイルはアップロードされますか？',
	tool_compare_two_text_files_online_faq_q2: '文字コードと BOM はどう扱いますか？',
	tool_compare_two_text_files_online_faq_q3: 'バイナリや Word、Excel もここで比べられますか？',
	tool_compare_two_text_files_online_faq_q4: 'txt 比較やファイル比較と同じですか？',
	tool_compare_two_text_files_online_how_body:
		'ディスク上にある2つのテキストファイルを選び、色の付いた行を読めば足ります。最初の画面に大きな貼り付け欄はありません。',
	tool_compare_two_text_files_online_how_item_1: '1つ目のテキストファイルを選ぶ（元のスナップショットや書き出し）。',
	tool_compare_two_text_files_online_how_item_2: '2つ目のテキストファイルを選ぶ（改訂版）。',
	tool_compare_two_text_files_online_how_item_3:
		'両方選ぶと自動で比較が走ります。サンプルを読み込むは初回描画ですでに実行済みです。',
	tool_compare_two_text_files_online_how_item_4: '緑が追加、赤が削除です。クリアでこのタブから両方のファイルを外します。',
	tool_compare_two_text_files_online_how_title: '使い方',
	tool_compare_two_text_files_online_label_a: '1つ目のテキストファイル',
	tool_compare_two_text_files_online_label_b: '2つ目のテキストファイル',
	tool_compare_two_text_files_online_legend: '緑 = 追加 · 赤 = 削除',
	tool_compare_two_text_files_online_load_sample: 'サンプルを読み込む',
	tool_compare_two_text_files_online_need_lib: '比較モジュールを読み込めませんでした。通信を確認して再読み込みしてください。',
	tool_compare_two_text_files_online_no_diff: '差分なし。2つのファイルのテキストは一致しています。',
	tool_compare_two_text_files_online_result_label: '行の差分',
	tool_compare_two_text_files_online_rules_body:
		'UTF-8 デコードのあと行単位の差分です。文字コード・BOM・バイナリ判定は色付けの前に行います。',
	tool_compare_two_text_files_online_rules_item_1:
		'各ファイルは FileReader / ArrayBuffer で読み、UTF-8 でデコードします。先頭の UTF-8 BOM は切り、偽の1行目変更を防ぎます。',
	tool_compare_two_text_files_online_rules_item_2:
		'ヌルバイトがあればバイナリとして拒否します。16進ビューアではありません。',
	tool_compare_two_text_files_online_rules_item_3:
		'行モード（jsdiff の diffLines）です。行内の1語だけ変わっても、行全体がハイライトされることがあります。',
	tool_compare_two_text_files_online_rules_item_4:
		'最初の画面に貼り付け欄はありません。ファイルなしで2つの文章を貼る場合は「2つのテキストの差分を確認」へ。',
	tool_compare_two_text_files_online_rules_title: '比較の決まり',
	tool_compare_two_text_files_online_sample_a: 'alpha\n2行目\n3行目',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\n変更した行\n3行目',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '追加 {added}、削除 {removed}',
	tool_compare_two_text_files_online_title: '2つのテキストファイルをオンラインで比較',
	tool_compare_two_text_files_online_usecase_1:
		'書き出し：昨日の log.txt と今日のエクスポートを、何万行も貼らずに並べる。',
	tool_compare_two_text_files_online_usecase_2:
		'設定の控え：ディスク上の .env や .txt の2つのスナップショットを行ごとに見る。',
	tool_compare_two_text_files_online_usecase_3:
		'課題：提出用の2つの .txt で、どの行が変わったか確認する。',
	tool_compare_two_text_files_online_usecases_title: 'こんなときに',
};

export default ja;
