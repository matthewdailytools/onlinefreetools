/**
 * i18n 工具分片（create-budget-spreadsheet / en）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 教育规划，非理财建议。
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "Create a Budget Spreadsheet — Category Amounts to Excel xlsx",
	tool_create_budget_spreadsheet_description: "Build a simple budget spreadsheet from category and amount rows, preview the total, and download an .xlsx with a live SUM formula. Example: Rent 1200 + Food 400 → Total 1600. Runs in your browser — planning numbers only, not financial or tax advice.",
	tool_create_budget_spreadsheet_article: "Enter category,amount lines, preview the running total, then download a reusable budget.xlsx whose Total cell uses SUM.",
	tool_create_budget_spreadsheet_desc: "Category amounts → preview total → download xlsx with SUM. Local only.",

	tool_create_budget_spreadsheet_safety_banner: "Planning numbers only. This page builds a simple category list with a SUM total. It is not a ledger, tax return, or investment advice.",
	tool_create_budget_spreadsheet_hint: "One row per line: category,amount (comma or tab). Amounts must be finite numbers. Malformed lines are skipped.",
	tool_create_budget_spreadsheet_input_label: "Budget rows (category, amount)",
	tool_create_budget_spreadsheet_input_ph: "e.g. Rent,1200",
	tool_create_budget_spreadsheet_write: "Create spreadsheet",
	tool_create_budget_spreadsheet_download: "Download xlsx",
	tool_create_budget_spreadsheet_sample: "Load sample",
	tool_create_budget_spreadsheet_clear: "Clear",
	tool_create_budget_spreadsheet_preview_title: "Preview",
	tool_create_budget_spreadsheet_col_category: "Category",
	tool_create_budget_spreadsheet_col_amount: "Amount",
	tool_create_budget_spreadsheet_total_label: "Total",
	tool_create_budget_spreadsheet_rows_label: "Rows counted",
	tool_create_budget_spreadsheet_ready_note: "Preview ready. Download writes budget.xlsx with a SUM formula in the Total cell.",
	tool_create_budget_spreadsheet_empty: "Add at least one valid category,amount row (for example Rent,1200), or load the sample.",
	tool_create_budget_spreadsheet_need_lib: "Spreadsheet library failed to load. Check the network and refresh.",
	tool_create_budget_spreadsheet_sheet_name: "Budget",

	tool_create_budget_spreadsheet_how_title: "How to create a budget spreadsheet",
	tool_create_budget_spreadsheet_how_body: "List each spending category and amount, create a preview with the total, then download an .xlsx. Changing an amount in Excel recalculates the SUM total.",
	tool_create_budget_spreadsheet_how_item_1: "Enter one row per line as category,amount.",
	tool_create_budget_spreadsheet_how_item_2: "Click Create spreadsheet to preview rows and the total.",
	tool_create_budget_spreadsheet_how_item_3: "Fix or remove skipped lines if the total looks wrong.",
	tool_create_budget_spreadsheet_how_item_4: "Click Download xlsx to save budget.xlsx with a live SUM.",

	tool_create_budget_spreadsheet_why_choose_title: "What this budget spreadsheet maker gives you",
	tool_create_budget_spreadsheet_why_choose_item_1: "Fast category list with an on-page total preview.",
	tool_create_budget_spreadsheet_why_choose_item_2: "Downloaded Total cell uses a live Excel SUM formula.",
	tool_create_budget_spreadsheet_why_choose_item_3: "Sample rotation for monthly, trip, and club-style lists.",
	tool_create_budget_spreadsheet_why_choose_item_4: "Runs in the browser — rows are not uploaded.",
	tool_create_budget_spreadsheet_why_choose_item_5: "Clear YMYL boundary: planning only — not a ledger or tax tool.",

	tool_create_budget_spreadsheet_rules_title: "Rules you should expect",
	tool_create_budget_spreadsheet_rules_body: "This tool builds one planning sheet from category amounts. It is not accounting software.",
	tool_create_budget_spreadsheet_rules_item_1: "Amounts must be finite numbers; malformed rows are skipped.",
	tool_create_budget_spreadsheet_rules_item_2: "The downloaded Total cell uses =SUM over the amount column.",
	tool_create_budget_spreadsheet_rules_item_3: "One expense-style list only — no income vs expense variance engine.",
	tool_create_budget_spreadsheet_rules_item_4: "Values stay on your device and are not uploaded.",
	tool_create_budget_spreadsheet_rules_item_5: "File format follows common OOXML/xlsx practice via SheetJS in the browser.",

	tool_create_budget_spreadsheet_example_title: "Worked examples",
	tool_create_budget_spreadsheet_example: "Load sample starts with Rent 1200 and Food 400 → Total 1600. Next adds Utilities 150 and Transport 200. The last sample is a short trip list (Hotel, Flights, Food).",

	tool_create_budget_spreadsheet_usecases_title: "When to create a budget spreadsheet here",
	tool_create_budget_spreadsheet_usecase_1: "Draft a short monthly envelope budget before a fuller template.",
	tool_create_budget_spreadsheet_usecase_2: "Add expected trip or event costs into one downloadable sheet.",
	tool_create_budget_spreadsheet_usecase_3: "Prepare a club spending plan before formal bookkeeping.",
	tool_create_budget_spreadsheet_usecase_4: "Hand someone an .xlsx with a SUM total that still recalculates in Excel.",

	tool_create_budget_spreadsheet_faq_q1: "Is this a general ledger?",
	tool_create_budget_spreadsheet_faq_a1: "No. It has no accounts, transactions, reconciliation, or audit history.",
	tool_create_budget_spreadsheet_faq_q2: "Are my rows uploaded?",
	tool_create_budget_spreadsheet_faq_a2: "No. Parsing and xlsx writing run in your browser.",
	tool_create_budget_spreadsheet_faq_q3: "Does the downloaded xlsx recalculate?",
	tool_create_budget_spreadsheet_faq_a3: "Yes. The Total cell contains a SUM formula over the amount column.",
	tool_create_budget_spreadsheet_faq_q4: "Does it track income versus expenses?",
	tool_create_budget_spreadsheet_faq_a4: "No. Use a fuller budget template for income, targets, variances, or charts.",
	tool_create_budget_spreadsheet_faq_q5: "What format is category,amount?",
	tool_create_budget_spreadsheet_faq_a5: "One row per line, category then amount separated by a comma or tab. Example: Rent,1200.",
	tool_create_budget_spreadsheet_faq_q6: "Is this financial advice?",
	tool_create_budget_spreadsheet_faq_a6: "No. Planning arithmetic only — not financial, tax, or investment advice.",

	tool_create_budget_spreadsheet_disclaimer: "Planning numbers only — not financial, tax, accounting, or investment advice.",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML; SheetJS documentation for browser xlsx writing.",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "SheetJS docs",
};

export default en;
