/**
 * write-countif-formula-in-excel 日语 i18n 分片：Excel COUNTIF 数式、ワイルドカードと空白セル。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語サイト文案辞書（COUNTIF 数式ツール） */
const ja: SiteLangDict = {
	tool_write_countif_formula_in_excel_title: 'ExcelでCOUNTIF数式を書く — 条件カウントとワイルドカード',
	tool_write_countif_formula_in_excel_description:
		'A1 形式の範囲と条件1つから、コピー可能な COUNTIF 数式を作成します。例：A2:A6 と West → =COUNTIF(A2:A6,"West")。ワイルドカード * ?、>10 のような演算子、空白セル用 "" に対応。サンプル表で一致数を確認。ブラウザ内で処理し、サーバーにアップロードしません。',
	tool_write_countif_formula_in_excel_article:
		'A1 範囲と条件を入力すると、テキスト・数値・演算子・ワイルドカード向けの COUNTIF 数式が完成し、サンプル表で一致セル数を確認してから Excel に貼り付けられます。',
	tool_write_countif_formula_in_excel_desc:
		'範囲と条件1つで COUNTIF 数式をコピー。ワイルドカード・演算子・空白セルに対応。',

	tool_write_countif_formula_in_excel_range: '範囲',
	tool_write_countif_formula_in_excel_range_ph: '例 A2:A6',
	tool_write_countif_formula_in_excel_criteria: '条件',
	tool_write_countif_formula_in_excel_crit_ph: '例 West、*west*、>10',
	tool_write_countif_formula_in_excel_hint:
		'範囲は A1 表記。* は任意の文字列、? は1文字に一致。>10 などは数式内で引用符付き。空白セルは条件 ""（ダブルクォート2つ）。',
	tool_write_countif_formula_in_excel_chips_label: 'よく使う条件',
	tool_write_countif_formula_in_excel_write: '数式を作成',
	tool_write_countif_formula_in_excel_sample: 'サンプル',
	tool_write_countif_formula_in_excel_copy: 'コピー',
	tool_write_countif_formula_in_excel_clear: 'クリア',
	tool_write_countif_formula_in_excel_formula: '数式',
	tool_write_countif_formula_in_excel_preview_title: 'サンプル一致プレビュー',
	tool_write_countif_formula_in_excel_col_cell: 'セル',
	tool_write_countif_formula_in_excel_col_value: '値',
	tool_write_countif_formula_in_excel_steps_title: '手順',
	tool_write_countif_formula_in_excel_empty: '範囲と条件を入力するか、先にサンプルを読み込んでください。',
	tool_write_countif_formula_in_excel_err_range: 'A2:A6 や $B$2:$B$10 のような A1 範囲を指定してください。',
	tool_write_countif_formula_in_excel_copied: '数式をコピーしました。',
	tool_write_countif_formula_in_excel_row_count: '一致数',
	tool_write_countif_formula_in_excel_row_quoted: '数式内の条件リテラル',
	tool_write_countif_formula_in_excel_row_match_tpl: 'サンプル {total} セル中 {n} セルが一致。',
	tool_write_countif_formula_in_excel_step_range_tpl: '範囲：{r}',
	tool_write_countif_formula_in_excel_step_crit_tpl: '条件：{c}',
	tool_write_countif_formula_in_excel_step_lit_tpl: '数式に入るリテラル：{lit}',
	tool_write_countif_formula_in_excel_step_out_tpl: '結果：{f}',
	tool_write_countif_formula_in_excel_result_note:
		'プレビューはブラウザ上の簡易一致で、ルール理解用です。数式を Excel や Google スプレッドシートに貼り、実データで確認してください。ロケールによって引数区切りが , ではなく ; になる場合があります。',
	tool_write_countif_formula_in_excel_chip_eq: 'West と一致',
	tool_write_countif_formula_in_excel_chip_contains: 'west を含む（*west*）',
	tool_write_countif_formula_in_excel_chip_gt: '10 より大きい',
	tool_write_countif_formula_in_excel_chip_blank: '空白セル',
	tool_write_countif_formula_in_excel_header_region: '地域',
	tool_write_countif_formula_in_excel_header_qty: '数量',
	tool_write_countif_formula_in_excel_ref_ms_label: 'Microsoft：COUNTIF 関数',

	tool_write_countif_formula_in_excel_how_title: 'COUNTIF 数式の書き方',
	tool_write_countif_formula_in_excel_how_body:
		'A1 範囲と条件を入力し「数式を作成」を押して Excel にコピー。サンプルは一致・部分一致・大小比較・空白セルを順に試せ、一致数がリアルタイムで表示されます。',
	tool_write_countif_formula_in_excel_how_item_1: 'A2:A6 のような A1 範囲を入力（$A$2:$A$6 の絶対参照も可）。',
	tool_write_countif_formula_in_excel_how_item_2:
		'条件は1つ：テキスト（West）、ワイルドカード（*west*）、演算子（>10）、または空白セルカウント用に空欄。',
	tool_write_countif_formula_in_excel_how_item_3: '「数式を作成」で =COUNTIF(範囲,条件) を組み立て、サンプルで一致セルを確認。',
	tool_write_countif_formula_in_excel_how_item_4: '数式を Excel に貼り、シート上の既知の範囲と照合して検証。',

	tool_write_countif_formula_in_excel_why_choose_title: 'この COUNTIF ヘルパーが向いている理由',
	tool_write_countif_formula_in_excel_why_choose_item_1:
		'テキスト・演算子・空白 "" の引用符まで整った =COUNTIF(...) をそのままコピーできます。',
	tool_write_countif_formula_in_excel_why_choose_item_2:
		'Excel 式ワイルドカード：* は任意列、? は1文字、~ で * ? を文字として扱えます。',
	tool_write_countif_formula_in_excel_why_choose_item_3: 'サンプル表で一致セルを強調し、貼る前に件数を確認できます。',
	tool_write_countif_formula_in_excel_why_choose_item_4: '一致・*west* 部分一致・大小比較・空白セルなど、ワンクリックの条件チップ付き。',
	tool_write_countif_formula_in_excel_why_choose_item_5:
		'単一条件の COUNTIF のみ。複数範囲・複数条件は COUNTIFS を使ってください。',

	tool_write_countif_formula_in_excel_rules_title: 'COUNTIF のルールと引用符',
	tool_write_countif_formula_in_excel_rules_body: 'COUNTIF は1つの範囲で1条件に一致するセル数を数えます。引用符とワイルドカードは Excel の慣例に従います。',
	tool_write_countif_formula_in_excel_rules_item_1: '構文：=COUNTIF(範囲, 条件)。例：=COUNTIF(A2:A6,"West")。',
	tool_write_countif_formula_in_excel_rules_item_2: '* は任意の文字列、? は1文字。リテラルの * ? の前に ~。',
	tool_write_countif_formula_in_excel_rules_item_3: '裸の数値は引用符なし（10）。比較演算子付きは引用符（">10"、"<>0"）。',
	tool_write_countif_formula_in_excel_rules_item_4: '空白セル：条件 ""。空白でない："<>".',
	tool_write_countif_formula_in_excel_rules_item_5:
		'複数条件・複数範囲は COUNTIFS。このページは単一 COUNTIF のみ生成。一部 Excel は ; で引数を区切ります。',

	tool_write_countif_formula_in_excel_example_title: '具体例',
	tool_write_countif_formula_in_excel_example:
		'サンプルは A2:A6 と West から → =COUNTIF(A2:A6,"West")、地域列で3件一致。*west* → =COUNTIF(A2:A6,"*west*")。続いて B2:B6 と >10 → =COUNTIF(B2:B6,">10")。空白例は "" で空セルをカウント。いずれも Excel に貼ったら実シートで確認を。',

	tool_write_countif_formula_in_excel_usecases_title: 'COUNTIF 数式が活きる場面',
	tool_write_countif_formula_in_excel_usecase_1: '出席・ステータス列：Present や West など、特定値と一致する行数を数える。',
	tool_write_countif_formula_in_excel_usecase_2: '在庫のしきい値：>10 や >=100 で、一定を超える数量セルをカウント。',
	tool_write_countif_formula_in_excel_usecase_3: '部分一致：*west* で文字列を含むセル、West* で先頭一致を数える。',
	tool_write_countif_formula_in_excel_usecase_4: 'データ整備：穴埋め前に列の空白セル数を "" 条件で把握する。',

	tool_write_countif_formula_in_excel_faq_q1: 'Excel で COUNTIF 数式はどう書きますか？',
	tool_write_countif_formula_in_excel_faq_a1:
		'=COUNTIF(範囲, 条件) です。範囲は A1 形式（A2:A6）、条件は1ルール。このページで完成形を組み、サンプル一致数を見ながらコピーして検証できます。',
	tool_write_countif_formula_in_excel_faq_q2: 'COUNTIF のワイルドカード（LIKE 的な使い方）は？',
	tool_write_countif_formula_in_excel_faq_a2:
		'* は任意長の文字列、? は1文字。"*west*" は West や Midwest などに一致。リテラルの * ? の前に ~ を付けます。',
	tool_write_countif_formula_in_excel_faq_q3: 'COUNTIFS はいつ使うべきですか？',
	tool_write_countif_formula_in_excel_faq_a3:
		'2つ以上の範囲や条件をすべて満たすとき（例：地域=West かつ 数量>10）。このページは単一条件 COUNTIF のみ生成します。',
	tool_write_countif_formula_in_excel_faq_q4: '数値や演算子の引用符は？',
	tool_write_countif_formula_in_excel_faq_a4: '10 のような数値だけなら引用符不要。">10"、"<=5"、"<>0" のように演算子を含む条件は引用符必須。テキストも常に引用符。',
	tool_write_countif_formula_in_excel_faq_q5: '空白セルを COUNTIF で数えるには？',
	tool_write_countif_formula_in_excel_faq_a5:
		'条件を ""（ダブルクォート2つ）、例 =COUNTIF(A2:A6,"")。非空白は "<>"。「空白セル」チップでサンプルを読み込めます。',
	tool_write_countif_formula_in_excel_faq_q6: '入力内容はアップロードされますか？',
	tool_write_countif_formula_in_excel_faq_a6:
		'いいえ。数式はブラウザ内で組み立てられ、入力データはサーバーにアップロードされません。Excel では必ず実シートで確認してください。',
	tool_write_countif_formula_in_excel_faq_q7: 'Excel でカンマの代わりにセミコロンになるのはなぜ？',
	tool_write_countif_formula_in_excel_faq_a7:
		'日本語 Excel などではリスト区切りに ; を使うことがあります。コピー後、=COUNTIF(A2:A6,"West") を =COUNTIF(A2:A6;"West") に直す必要がある場合があります。',

	tool_write_countif_formula_in_excel_add: '行を追加',
	tool_write_countif_formula_in_excel_alt: '#N/A のとき',
	tool_write_countif_formula_in_excel_bar: '棒グラフ',
	tool_write_countif_formula_in_excel_buyer: '買い手',
	tool_write_countif_formula_in_excel_cell: 'セル',
	tool_write_countif_formula_in_excel_count: 'カウント',
	tool_write_countif_formula_in_excel_csv: 'CSV 貼り付け',
	tool_write_countif_formula_in_excel_download: 'xlsx をダウンロード',
	tool_write_countif_formula_in_excel_draw: '描画',
	tool_write_countif_formula_in_excel_else: 'それ以外',
	tool_write_countif_formula_in_excel_err_read: 'ファイルを読めませんでした。xlsx、xls、csv を試してください。',
	tool_write_countif_formula_in_excel_file: 'スプレッドシートファイル',
	tool_write_countif_formula_in_excel_filter: 'フィルター',
	tool_write_countif_formula_in_excel_inner: '内部数式',
	tool_write_countif_formula_in_excel_line: '行',
	tool_write_countif_formula_in_excel_lines: 'desc,qty,price',
	tool_write_countif_formula_in_excel_need_lib: 'スプレッドシートライブラリの読み込みに失敗しました。ネットワークを確認して更新してください。',
	tool_write_countif_formula_in_excel_note_2016: 'IFS は Excel 2019、Microsoft 365 以降が必要です。',
	tool_write_countif_formula_in_excel_op_blank: '空白',
	tool_write_countif_formula_in_excel_op_contains: '含む',
	tool_write_countif_formula_in_excel_op_eq: '一致',
	tool_write_countif_formula_in_excel_row_field: '行フィールド',
	tool_write_countif_formula_in_excel_seller: '売り手',
	tool_write_countif_formula_in_excel_sheet: 'シート',
	tool_write_countif_formula_in_excel_sum: '合計',
	tool_write_countif_formula_in_excel_tax: '税率 %',
	tool_write_countif_formula_in_excel_trial: '試行値',
	tool_write_countif_formula_in_excel_val_field: '値フィールド',
};

export default ja;
