/**
 * write-ifs-formula-in-excel 日语文案分片：順序付き条件から IFS を生成；TRUE でそれ以外；Excel 2019 / Microsoft 365 向け。
 */
import type { SiteLangDict } from '../../../types';

/** 日本語サイト文案辞書（Excel の IFS 数式ビルダー） */
const ja: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: 'Excel の IFS 数式を書く — 上から順に判定し TRUE でそれ以外',
	tool_write_ifs_formula_in_excel_description:
		'等しい・含む・空白の条件を上から順に並べ、Excel 2019 または Microsoft 365 向けの IFS 数式を作ります。例：West → A、East → B、それ以外 Other → =IFS(A1="West","A",A1="East","B",TRUE,"Other")。ブラウザで試算してからコピー。永久版の Excel 2016 では使えません。',
	tool_write_ifs_formula_in_excel_article:
		'順序付きの条件を追加し、各結果と TRUE のそれ以外を設定して試算し、完成した IFS をコピーします。',
	tool_write_ifs_formula_in_excel_desc: '順序付き条件 → TRUE でそれ以外を付けた IFS。ブラウザ試算とコピー。',

	tool_write_ifs_formula_in_excel_hint:
		'条件は上から順に判定されます。ビルダーは TRUE,それ以外 を末尾に付けます。Excel 2019、Microsoft 365 以降が必要です。英語の関数名とカンマ区切りです。',
	tool_write_ifs_formula_in_excel_note_2016:
		'IFS は Excel 2019、Microsoft 365 以降が必要です。古い Excel では入れ子の IF ビルダーを使ってください。',
	tool_write_ifs_formula_in_excel_cell_label: '対象セル',
	tool_write_ifs_formula_in_excel_cell_ph: '例：A1',
	tool_write_ifs_formula_in_excel_trial_label: '試算値',
	tool_write_ifs_formula_in_excel_trial_ph: '例：West',
	tool_write_ifs_formula_in_excel_else_label: 'それ以外（TRUE）',
	tool_write_ifs_formula_in_excel_else_ph: '例：Other',
	tool_write_ifs_formula_in_excel_col_op: '判定',
	tool_write_ifs_formula_in_excel_col_val: '値 / テキスト',
	tool_write_ifs_formula_in_excel_col_then: 'そのときの結果',
	tool_write_ifs_formula_in_excel_op_eq: '等しい',
	tool_write_ifs_formula_in_excel_op_contains: '含む',
	tool_write_ifs_formula_in_excel_op_blank: '空白',
	tool_write_ifs_formula_in_excel_add: '条件を追加',
	tool_write_ifs_formula_in_excel_write: '数式を書く',
	tool_write_ifs_formula_in_excel_sample: 'サンプルを読み込む',
	tool_write_ifs_formula_in_excel_clear: 'クリア',
	tool_write_ifs_formula_in_excel_copy: '数式をコピー',
	tool_write_ifs_formula_in_excel_copied: 'コピーしました。',
	tool_write_ifs_formula_in_excel_formula_label: 'IFS 数式',
	tool_write_ifs_formula_in_excel_trial_result_label: '試算結果',
	tool_write_ifs_formula_in_excel_empty: '条件を少なくとも1つ追加する（またはサンプルを読み込む）と、数式を書けます。',
	tool_write_ifs_formula_in_excel_copy_fail: 'コピーできませんでした。数式を選択して手動でコピーしてください。',

	tool_write_ifs_formula_in_excel_how_title: 'IFS 数式の書き方',
	tool_write_ifs_formula_in_excel_how_body:
		'対象セルと順序付きの条件を入力します。「数式を書く」で TRUE 付きの IFS が出て、試算値も評価されます。コピーは英語の Excel 構文（カンマ）です。',
	tool_write_ifs_formula_in_excel_how_item_1: '対象セルと、任意の試算値を設定する。',
	tool_write_ifs_formula_in_excel_how_item_2: '判定順に、等しい・含む・空白の行を追加する。',
	tool_write_ifs_formula_in_excel_how_item_3: '各「そのときの結果」と、TRUE と組になるそれ以外の値を入れる。',
	tool_write_ifs_formula_in_excel_how_item_4:
		'「数式を書く」を押し、試算を確認してからコピー。Excel 2016 なら入れ子の IF を使う。',

	tool_write_ifs_formula_in_excel_why_choose_title: 'この IFS ビルダーでできること',
	tool_write_ifs_formula_in_excel_why_choose_item_1: '等しい / 含む / 空白を1本の IFS に順序付きで並べられる。',
	tool_write_ifs_formula_in_excel_why_choose_item_2: 'TRUE,それ以外 のペアを自動で付ける。',
	tool_write_ifs_formula_in_excel_why_choose_item_3: 'Excel に貼る前にブラウザで試算できる。',
	tool_write_ifs_formula_in_excel_why_choose_item_4: '地域・成績・含む、のサンプルを切り替えられる。',
	tool_write_ifs_formula_in_excel_why_choose_item_5: 'Excel 2016 の境界を明示し、入れ子 IF への導線がある。',

	tool_write_ifs_formula_in_excel_rules_title: '押さえておく規則',
	tool_write_ifs_formula_in_excel_rules_body:
		'ビルダーは IFS(条件,値,...,TRUE,それ以外) を出します。Excel 文字列内の引用符は二重化されます。',
	tool_write_ifs_formula_in_excel_rules_item_1: 'Excel 文字列内の引用符は二重化されます。',
	tool_write_ifs_formula_in_excel_rules_item_2: '「含む」は ISNUMBER(SEARCH(...))、「空白」は空文字を見ます。',
	tool_write_ifs_formula_in_excel_rules_item_3: '最初に一致した条件が勝ち、TRUE のそれ以外は最後です。',
	tool_write_ifs_formula_in_excel_rules_item_4:
		'IFS は Excel 2019、Microsoft 365 以降 — 永久版 Excel 2016 では使えません。',
	tool_write_ifs_formula_in_excel_rules_item_5:
		'英語の関数名とカンマは、お使いの Excel ではローカライズが必要な場合があります。',

	tool_write_ifs_formula_in_excel_example_title: '具体例',
	tool_write_ifs_formula_in_excel_example:
		'サンプル読み込みは West → A、East → B、それ以外 Other → =IFS(...,TRUE,"Other") から始まり、試算 West → A。次は成績の等しい判定。最後は「promo」を含む判定です。',

	tool_write_ifs_formula_in_excel_usecases_title: 'IFS 数式ビルダーを使う場面',
	tool_write_ifs_formula_in_excel_usecase_1: '地域コードをラベルに写すとき、深い入れ子 IF のカッコを避けたい。',
	tool_write_ifs_formula_in_excel_usecase_2: 'Microsoft 365 のブック向けに成績やリスク帯の下書きをしたい。',
	tool_write_ifs_formula_in_excel_usecase_3: '共有シートに貼る前に、分岐の順序を試算して確かめたい。',
	tool_write_ifs_formula_in_excel_usecase_4: 'チームがまだ Excel 2016 なら、入れ子 IF のページへ切り替える。',

	tool_write_ifs_formula_in_excel_faq_q1: 'Excel 2016 で IFS は動きますか？',
	tool_write_ifs_formula_in_excel_faq_a1:
		'永久版の Excel 2016 では動きません。入れ子の IF、Excel 2019 以降、または Microsoft 365 を使ってください。',
	tool_write_ifs_formula_in_excel_faq_q2: 'どの条件にも当てはまらないときは？',
	tool_write_ifs_formula_in_excel_faq_a2: 'TRUE とそれ以外の値が組になり、該当なしのときの結果になります。',
	tool_write_ifs_formula_in_excel_faq_q3: '入力した値はアップロードされますか？',
	tool_write_ifs_formula_in_excel_faq_a3: 'いいえ。生成と試算はブラウザ内だけです。',
	tool_write_ifs_formula_in_excel_faq_q4: '日本語版 Excel でもそのまま使えますか？',
	tool_write_ifs_formula_in_excel_faq_a4: '環境によっては関数名の翻訳やセミコロン区切りが必要です。',
	tool_write_ifs_formula_in_excel_faq_q5: '入れ子の IF との違いは？',
	tool_write_ifs_formula_in_excel_faq_a5:
		'IFS は条件の平坦な一覧です。入れ子 IF は IF の中に IF を重ねます。古い Excel では関連の入れ子 IF ページを使ってください。',
	tool_write_ifs_formula_in_excel_faq_q6: '「含む」は何を出しますか？',
	tool_write_ifs_formula_in_excel_faq_a6: 'IFS 内の条件として ISNUMBER(SEARCH("テキスト", セル)) を出します。',

	tool_write_ifs_formula_in_excel_references: 'Microsoft の IFS 関数ドキュメント。',
	tool_write_ifs_formula_in_excel_ref_a_label: 'Microsoft — IFS 関数',
	tool_write_ifs_formula_in_excel_ref_b_label: 'Microsoft — IF 関数',
};

export default ja;
