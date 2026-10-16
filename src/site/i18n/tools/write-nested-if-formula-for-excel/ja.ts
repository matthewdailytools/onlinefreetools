/**
 * i18n 工具分片（write-nested-if-formula-for-excel / ja）。
 * 順序付き条件 → Excel ネスト IF；ブラウザ試算；コピー。キーは en.ts と一致。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Excel用ネストIF数式ビルダー — 条件を並べてコピーできる式を作る",
	tool_write_nested_if_formula_for_excel_description: "等しい・含む・空白の条件を上から順に並べ、Excel向けのネストIFを作ります。例：West→A、East→B、それ以外 Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\"))。まずブラウザで試算し、英語関数名とカンマの式をコピーしてください。",
	tool_write_nested_if_formula_for_excel_article: "順序付き条件・各結果・最終のそれ以外を入れ、試算を確認してから完全なネストIFをコピーします。",
	tool_write_nested_if_formula_for_excel_desc: "順序付き条件 → ネストIF。ブラウザ試算のあとコピー。",

	tool_write_nested_if_formula_for_excel_hint: "条件は上から判定し、最初に一致した分岐が採用されます。「含む」は ISNUMBER(SEARCH(...)) を出します。式は英語関数名とカンマです。",
	tool_write_nested_if_formula_for_excel_cell_label: "対象セル",
	tool_write_nested_if_formula_for_excel_cell_ph: "例：A1",
	tool_write_nested_if_formula_for_excel_trial_label: "試算値",
	tool_write_nested_if_formula_for_excel_trial_ph: "例：West",
	tool_write_nested_if_formula_for_excel_else_label: "それ以外（最終の偽）",
	tool_write_nested_if_formula_for_excel_else_ph: "例：Other",
	tool_write_nested_if_formula_for_excel_col_op: "判定",
	tool_write_nested_if_formula_for_excel_col_val: "値 / テキスト",
	tool_write_nested_if_formula_for_excel_col_then: "真のとき",
	tool_write_nested_if_formula_for_excel_op_eq: "等しい",
	tool_write_nested_if_formula_for_excel_op_contains: "含む",
	tool_write_nested_if_formula_for_excel_op_blank: "空白",
	tool_write_nested_if_formula_for_excel_add: "条件を追加",
	tool_write_nested_if_formula_for_excel_write: "数式を作成",
	tool_write_nested_if_formula_for_excel_sample: "サンプルを読み込む",
	tool_write_nested_if_formula_for_excel_clear: "クリア",
	tool_write_nested_if_formula_for_excel_copy: "数式をコピー",
	tool_write_nested_if_formula_for_excel_copied: "コピーしました。",
	tool_write_nested_if_formula_for_excel_formula_label: "ネストIF数式",
	tool_write_nested_if_formula_for_excel_trial_result_label: "試算結果",
	tool_write_nested_if_formula_for_excel_empty: "条件を1行以上追加するかサンプルを読み込んでから、数式を作成してください。",
	tool_write_nested_if_formula_for_excel_copy_fail: "コピーできませんでした。数式を選択して手動でコピーしてください。",

	tool_write_nested_if_formula_for_excel_how_title: "ネストIF数式の作り方",
	tool_write_nested_if_formula_for_excel_how_body: "対象セルと順序付き条件を入れ、「数式を作成」でネストIFと試算結果を表示します。コピーすると英語名・カンマのExcel構文になります。",
	tool_write_nested_if_formula_for_excel_how_item_1: "対象セルを指定し、必要なら試算値も入れる。",
	tool_write_nested_if_formula_for_excel_how_item_2: "Excelが試す順に、等しい・含む・空白の行を追加する。",
	tool_write_nested_if_formula_for_excel_how_item_3: "各「真のとき」と最終の「それ以外」を設定する。",
	tool_write_nested_if_formula_for_excel_how_item_4: "「数式を作成」→試算を確認→「数式をコピー」。",

	tool_write_nested_if_formula_for_excel_why_choose_title: "このExcel用ネストIF数式ビルダーを使う理由",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "等しい・含む・空白を1本のネストIFに並べられる。",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "貼り付け前に、ブラウザ試算でどの分岐が当たるか分かる。",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "地域ラベル・成績帯・「promo」含むなどサンプルが切り替わる。",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "完成した数式文字列をワンクリックでコピー。",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "出力はネストIFのみ（IFSではない。関連のIFSページを参照）。",

	tool_write_nested_if_formula_for_excel_rules_title: "想定しておくルール",
	tool_write_nested_if_formula_for_excel_rules_body: "クラシックなネストIF(...)を出力します。Excel文字列内の引用符は二重化されます。",
	tool_write_nested_if_formula_for_excel_rules_item_1: "テキストの引用符はExcel文字列内で二重になります。",
	tool_write_nested_if_formula_for_excel_rules_item_2: "含むは ISNUMBER(SEARCH(...))；空白は空テキストを判定。",
	tool_write_nested_if_formula_for_excel_rules_item_3: "上から最初に一致した条件が採用されます。",
	tool_write_nested_if_formula_for_excel_rules_item_4: "英語関数名とカンマは、お使いのExcelの言語設定で変換が必要な場合があります。",
	tool_write_nested_if_formula_for_excel_rules_item_5: "IFS()構文が必要なら関連のIFS作成ページを使ってください。",

	tool_write_nested_if_formula_for_excel_example_title: "動作例",
	tool_write_nested_if_formula_for_excel_example: "サンプルは West→A、East→B、それ以外 Other から始まり、試算 West→A。次は成績帯（≥90 / ≥80）。最後は「promo」を含む判定です。",

	tool_write_nested_if_formula_for_excel_usecases_title: "ネストIFビルダーが向いている場面",
	tool_write_nested_if_formula_for_excel_usecase_1: "順序付きルールで成績やリスク帯を振り分ける。",
	tool_write_nested_if_formula_for_excel_usecase_2: "地域コードをレポート用ラベルに変換する。",
	tool_write_nested_if_formula_for_excel_usecase_3: "ブックに貼る前に多分岐式を確認する。",
	tool_write_nested_if_formula_for_excel_usecase_4: "SEARCHを手書きせず含む／空白分岐を試作する。",

	tool_write_nested_if_formula_for_excel_faq_q1: "入力値はアップロードされますか？",
	tool_write_nested_if_formula_for_excel_faq_a1: "いいえ。作成と試算はブラウザ内で完結し、サーバーには送りません。",
	tool_write_nested_if_formula_for_excel_faq_q2: "IFSと同じですか？",
	tool_write_nested_if_formula_for_excel_faq_a2: "いいえ。このページはネストIF(...)を出します。IFS()は関連のIFSビルダーを使ってください。",
	tool_write_nested_if_formula_for_excel_faq_q3: "「含む」はどう動きますか？",
	tool_write_nested_if_formula_for_excel_faq_a3: "IFの条件に ISNUMBER(SEARCH(\"テキスト\", セル)) を出力します。",
	tool_write_nested_if_formula_for_excel_faq_q4: "どの言語版Excelにも貼れますか？",
	tool_write_nested_if_formula_for_excel_faq_a4: "英語関数名とカンマです。環境によっては訳名やセミコロン区切りが必要です。",
	tool_write_nested_if_formula_for_excel_faq_q5: "試算値の役割は？",
	tool_write_nested_if_formula_for_excel_faq_a5: "同じ分岐順をブラウザで評価し、どの「真のとき／それ以外」が当たるか確認します。",
	tool_write_nested_if_formula_for_excel_faq_q6: "条件は2つより多くネストできますか？",
	tool_write_nested_if_formula_for_excel_faq_a6: "できます。行を増やすたびに最終のそれ以外の外側にIF層が追加されます。",

	tool_write_nested_if_formula_for_excel_references: "Microsoft IF 関数のドキュメント。",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — IF 関数",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — IFS 関数",
};

export default ja;
