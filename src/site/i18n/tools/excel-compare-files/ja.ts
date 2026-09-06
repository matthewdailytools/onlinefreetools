/**
 * i18n（excel-compare-files / ja）。
 * H1: Excelファイルを比較（online は H1 に入れない）。
 * 既定は先頭シート。空セルは空文字。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_excel_compare_files_article:
		'2つの表を選び、いまのシートをセル単位で比べます。空セルは空文字です。ファイルは端末内に留まり、サーバーにアップロードしません。',
	tool_excel_compare_files_clear: 'クリア',
	tool_excel_compare_files_col_addr: 'セル',
	tool_excel_compare_files_col_left: '1つ目のファイル',
	tool_excel_compare_files_col_right: '2つ目のファイル',
	tool_excel_compare_files_compare: '比較',
	tool_excel_compare_files_desc:
		'Excelファイルを比較：2つの表を選び、いまのシートをセル単位で。端末内処理、サーバーにアップロードしません。',
	tool_excel_compare_files_description:
		'Excelファイルを比較します。手順：xlsx か csv を2つ選び、いまのシート（既定は先頭シート）を指定し、値が違うセルを並べます。ファイルは端末内に留まり、サーバーにアップロードしません。例：3行の表で B3 が 2 から 9 に変わる場合。列がずれたときは見出し名ではなくアドレスで合わせます。',
	tool_excel_compare_files_empty: '先に表ファイルを2つ選ぶか、サンプルを読み込んでください。',
	tool_excel_compare_files_err_read:
		'表を読めませんでした。xlsx か csv を試し、保護されたブックは先に解除してください。',
	tool_excel_compare_files_example:
		'サンプル読込は2つの CSV を比べます。Name/Qty の見出しは同じで、Gadget の数量が 2 対 9 なので B3 が出ます。初回表示ですでにそのセルが出ます。',
	tool_excel_compare_files_example_title: '例',
	tool_excel_compare_files_faq_a1:
		'いいえ。このタブで SheetJS がバイトを読みます。ライブラリはこのサイトから読みますが、ファイルは当社サーバーに送りません。',
	tool_excel_compare_files_faq_a2:
		'既定では先頭シートが選ばれます。同じファイルの別タブが要るときはシート一覧を使います。選んでいないシートは比べません。',
	tool_excel_compare_files_faq_a3:
		"できます。CSV は1枚のシートとして読み込むため、2つの CSV 同士や、CSV 書き出しと Excel シートをセル番地で比較できます。",
	tool_excel_compare_files_faq_a4:
		'欠けたセルも空セルも空文字です。列がずれても A1 は A1 同士です。「Name 列」という見出し合わせはしません。見出しが動くと黙って食い違うのを避けるためです。',
	tool_excel_compare_files_faq_q5: "数式や書式も比較しますか、それとも表示値だけですか？",
	tool_excel_compare_files_faq_a5: "各セルから読み取った表示テキストを比較します。数式そのもの、書式、コメント、列幅、ブック構造は別に比較しません。同じキャッシュ表示値を持つ数式変更は差分なしに見える場合があります。",
	tool_excel_compare_files_faq_q1: 'Excel ファイルはアップロードされますか？',
	tool_excel_compare_files_faq_q2: '先頭シートだけ比べますか？',
	tool_excel_compare_files_faq_q3: '2つの CSV もここで比べられますか？',
	tool_excel_compare_files_faq_q4: '空セルと列ずれはどう扱いますか？',
	tool_excel_compare_files_how_body: '2つの表を選び、いまのシートでどのセル番地が違うかを読みます。',
	tool_excel_compare_files_how_item_1: '1つ目の表（xlsx、xls、csv）を選ぶ。',
	tool_excel_compare_files_how_item_2: '2つ目の表を選ぶ。',
	tool_excel_compare_files_how_item_3: '別タブが要るとき以外は先頭シートのままにする。',
	tool_excel_compare_files_how_item_4: "「比較」を押し、選んだ2枚のシートで表示テキストが異なるセルを一覧にします。",
	tool_excel_compare_files_how_title: '使い方',
	tool_excel_compare_files_label_a: '1つ目の表',
	tool_excel_compare_files_label_b: '2つ目の表',
	tool_excel_compare_files_load_sample: 'サンプルを読み込む',
	tool_excel_compare_files_need_lib: 'SheetJS の読み込みに失敗しました。通信を確認して再読み込みしてください。',
	tool_excel_compare_files_no_diff: 'いまのシートにセル差はありません。',
	tool_excel_compare_files_result_label: 'セルの差分',
	tool_excel_compare_files_rules_body: '選んだシートだけで、格子アドレスの値を比べます。',
	tool_excel_compare_files_rules_item_1: 'SheetJS がブックを読みます。既定シートはファイル内の先頭の名前です。',
	tool_excel_compare_files_rules_item_2: '各セルは変換後のテキストで比べます。空と欠けは "" です。',
	tool_excel_compare_files_rules_item_3: '片側に列を挿入しても A1/B1 のアドレス合わせで、見出しラベルではありません。',
	tool_excel_compare_files_rules_item_4: '選んでいないシートは無視します。ブック全体の一括走査は既定ではありません。',
	tool_excel_compare_files_rules_title: '比較の約束事',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: '1つ目のファイルのシート',
	tool_excel_compare_files_sheet_b: '2つ目のファイルのシート',
	tool_excel_compare_files_summary: '{n} 個のセルが異なります',
	tool_excel_compare_files_title: 'Excelファイルを比較',
	tool_excel_compare_files_usecase_1: '見積：書き出した価格表2つで、数セルだけ動いたとき。',
	tool_excel_compare_files_usecase_2: '出欠や在庫の CSV を週ごとに突き合わせる。',
	tool_excel_compare_files_usecase_3: '課題の表を xlsx で出した2人分。',
	tool_excel_compare_files_usecases_title: 'こんなときに',
};

export default ja;
