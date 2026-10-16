/**
 * i18n 工具分片（create-budget-spreadsheet / ja）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 教育规划，非理财建议。
 */
import type { SiteLangDict } from '../../../types';

const ja: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "予算表（スプレッドシート）を作る — 費目と金額を Excel xlsx に",
	tool_create_budget_spreadsheet_description: "費目と金額の行から予算表を作り、合計をプレビューして、ライブ SUM 付きの .xlsx をダウンロード。例：家賃 1200 + 食費 400 → 合計 1600。ブラウザ内だけで動きます。計画用の数字であり、金融・税務の助言ではありません。",
	tool_create_budget_spreadsheet_article: "費目,金額の行を入れ、合計を確認してから、Total セルに SUM が入った再利用可能な budget.xlsx をダウンロード。",
	tool_create_budget_spreadsheet_desc: "費目金額 → 合計プレビュー → SUM 付き xlsx。サーバーにアップロードしない。",

	tool_create_budget_spreadsheet_safety_banner: "計画用の数字のみ。このページは SUM 合計つきの簡単な費目リストを作るだけで、元帳・確定申告・投資助言ではありません。",
	tool_create_budget_spreadsheet_hint: "1行1件：費目,金額（カンマまたはタブ）。金額は有限の数値である必要があります。不正な行はスキップされます。",
	tool_create_budget_spreadsheet_input_label: "予算行（費目, 金額）",
	tool_create_budget_spreadsheet_input_ph: "例：家賃,1200",
	tool_create_budget_spreadsheet_write: "表を作成",
	tool_create_budget_spreadsheet_download: "xlsx をダウンロード",
	tool_create_budget_spreadsheet_sample: "サンプル",
	tool_create_budget_spreadsheet_clear: "クリア",
	tool_create_budget_spreadsheet_preview_title: "プレビュー",
	tool_create_budget_spreadsheet_col_category: "費目",
	tool_create_budget_spreadsheet_col_amount: "金額",
	tool_create_budget_spreadsheet_total_label: "合計",
	tool_create_budget_spreadsheet_rows_label: "有効行数",
	tool_create_budget_spreadsheet_ready_note: "プレビュー準備完了。ダウンロードすると Total セルに SUM が入った budget.xlsx が書き出されます。",
	tool_create_budget_spreadsheet_empty: "有効な「費目,金額」を1行以上入れてください（例：家賃,1200）。またはサンプルを読み込んでください。",
	tool_create_budget_spreadsheet_need_lib: "表計算ライブラリの読み込みに失敗しました。ネットワークを確認して再読み込みしてください。",
	tool_create_budget_spreadsheet_sheet_name: "予算",

	tool_create_budget_spreadsheet_how_title: "予算表の作り方",
	tool_create_budget_spreadsheet_how_body: "支出の費目と金額を並べ、合計つきプレビューを作り、.xlsx をダウンロード。Excel で金額を変えると SUM 合計が再計算されます。",
	tool_create_budget_spreadsheet_how_item_1: "1行ずつ「費目,金額」で入力する。",
	tool_create_budget_spreadsheet_how_item_2: "「表を作成」で行と合計をプレビューする。",
	tool_create_budget_spreadsheet_how_item_3: "合計がおかしいときはスキップされた行を直すか消す。",
	tool_create_budget_spreadsheet_how_item_4: "「xlsx をダウンロード」でライブ SUM 付き budget.xlsx を保存する。",

	tool_create_budget_spreadsheet_why_choose_title: "この予算表メーカーでできること",
	tool_create_budget_spreadsheet_why_choose_item_1: "費目リストがすぐでき、ページ上で合計が見える。",
	tool_create_budget_spreadsheet_why_choose_item_2: "ダウンロード後の合計セルは再計算される Excel の SUM。",
	tool_create_budget_spreadsheet_why_choose_item_3: "月次・旅行・サークル向けのサンプルが切り替わる。",
	tool_create_budget_spreadsheet_why_choose_item_4: "ブラウザ内で処理し、行はサーバーにアップロードしない。",
	tool_create_budget_spreadsheet_why_choose_item_5: "YMYL の境界が明確：計画用のみ — 元帳や税務ツールではない。",

	tool_create_budget_spreadsheet_rules_title: "想定されるルール",
	tool_create_budget_spreadsheet_rules_body: "このツールは費目金額から計画用の1枚の表を作ります。会計ソフトではありません。",
	tool_create_budget_spreadsheet_rules_item_1: "金額は有限の数値；不正な行はスキップ。",
	tool_create_budget_spreadsheet_rules_item_2: "ダウンロードした合計セルは金額列に =SUM を使う。",
	tool_create_budget_spreadsheet_rules_item_3: "支出型の一覧1つだけ — 収入対支出の差異エンジンはない。",
	tool_create_budget_spreadsheet_rules_item_4: "値は端末内に留まり、サーバーにアップロードしない。",
	tool_create_budget_spreadsheet_rules_item_5: "ファイル形式はブラウザ内 SheetJS による一般的な OOXML/xlsx 慣習に従う。",

	tool_create_budget_spreadsheet_example_title: "計算例",
	tool_create_budget_spreadsheet_example: "サンプルは「家賃 1200 + 食費 400 → 合計 1600」から。次は光熱 150 と交通 200 を追加。最後は短い旅行リスト（ホテル、航空券、食費）。",

	tool_create_budget_spreadsheet_usecases_title: "こんなときに予算表を作る",
	tool_create_budget_spreadsheet_usecase_1: "本格テンプレートの前に、短い月次封筒予算の下書き。",
	tool_create_budget_spreadsheet_usecase_2: "旅行やイベントの見込み費用を1枚のダウンロード表にまとめる。",
	tool_create_budget_spreadsheet_usecase_3: "正式な帳簿の前に、サークルの支出計画を用意する。",
	tool_create_budget_spreadsheet_usecase_4: "Excel でまだ再計算される SUM 合計つき .xlsx を渡す。",

	tool_create_budget_spreadsheet_faq_q1: "これは総勘定元帳ですか？",
	tool_create_budget_spreadsheet_faq_a1: "いいえ。勘定科目・仕訳・照合・監査履歴はありません。",
	tool_create_budget_spreadsheet_faq_q2: "行データはアップロードされますか？",
	tool_create_budget_spreadsheet_faq_a2: "いいえ。解析と xlsx 書き出しはブラウザ内で行います。",
	tool_create_budget_spreadsheet_faq_q3: "ダウンロードした xlsx は再計算されますか？",
	tool_create_budget_spreadsheet_faq_a3: "はい。合計セルは金額列に対する SUM 式です。",
	tool_create_budget_spreadsheet_faq_q4: "収入と支出を分けて追跡できますか？",
	tool_create_budget_spreadsheet_faq_a4: "できません。収入・目標・差異・グラフが必要なら、より充実した予算テンプレートを使ってください。",
	tool_create_budget_spreadsheet_faq_q5: "「費目,金額」の形式は？",
	tool_create_budget_spreadsheet_faq_a5: "1行1件。費目と金額をカンマまたはタブで区切ります。例：家賃,1200。",
	tool_create_budget_spreadsheet_faq_q6: "これは金融アドバイスですか？",
	tool_create_budget_spreadsheet_faq_a6: "いいえ。計画用の計算のみ — 金融・税務・投資の助言ではありません。",

	tool_create_budget_spreadsheet_disclaimer: "計画用の数字のみ — 金融・税務・会計・投資の助言ではありません。",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML；ブラウザでの xlsx 書き出しに関する SheetJS ドキュメント。",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "SheetJS ドキュメント",
};

export default ja;
