/**
 * i18n 工具分片（write-ifs-formula-in-excel / en）。
 * 有序条件 → =IFS(...)；TRUE 兜底；需 Excel 2019 / Microsoft 365。
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: "IFS Formula Builder for Excel — Ordered Tests with TRUE Catch-All",
	tool_write_ifs_formula_in_excel_description: "Build an IFS formula for Excel 2019 or Microsoft 365 from ordered equals, contains, or blank tests. Example: West → A, East → B, otherwise Other → =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\"). Trial in the browser, then copy. Not available in perpetual Excel 2016.",
	tool_write_ifs_formula_in_excel_article: "Add ordered tests, set each result and a TRUE catch-all else, preview a trial value, and copy a complete IFS formula.",
	tool_write_ifs_formula_in_excel_desc: "Ordered tests → IFS formula with TRUE catch-all, browser trial, and copy.",

	tool_write_ifs_formula_in_excel_hint: "Conditions are tested top to bottom. The builder appends TRUE,else as the catch-all. Requires Excel 2019, Microsoft 365, or later. English names and commas.",
	tool_write_ifs_formula_in_excel_note_2016: "IFS needs Excel 2019, Microsoft 365, or later. For older Excel use the nested IF builder.",
	tool_write_ifs_formula_in_excel_cell_label: "Target cell",
	tool_write_ifs_formula_in_excel_cell_ph: "e.g. A1",
	tool_write_ifs_formula_in_excel_trial_label: "Trial value",
	tool_write_ifs_formula_in_excel_trial_ph: "e.g. West",
	tool_write_ifs_formula_in_excel_else_label: "Else (TRUE catch-all)",
	tool_write_ifs_formula_in_excel_else_ph: "e.g. Other",
	tool_write_ifs_formula_in_excel_col_op: "Test",
	tool_write_ifs_formula_in_excel_col_val: "Value / text",
	tool_write_ifs_formula_in_excel_col_then: "Then result",
	tool_write_ifs_formula_in_excel_op_eq: "equals",
	tool_write_ifs_formula_in_excel_op_contains: "contains",
	tool_write_ifs_formula_in_excel_op_blank: "is blank",
	tool_write_ifs_formula_in_excel_add: "Add condition",
	tool_write_ifs_formula_in_excel_write: "Write formula",
	tool_write_ifs_formula_in_excel_sample: "Load sample",
	tool_write_ifs_formula_in_excel_clear: "Clear",
	tool_write_ifs_formula_in_excel_copy: "Copy formula",
	tool_write_ifs_formula_in_excel_copied: "Copied.",
	tool_write_ifs_formula_in_excel_formula_label: "IFS formula",
	tool_write_ifs_formula_in_excel_trial_result_label: "Trial result",
	tool_write_ifs_formula_in_excel_empty: "Add at least one condition (or load the sample), then write the formula.",
	tool_write_ifs_formula_in_excel_copy_fail: "Could not copy. Select the formula and copy manually.",

	tool_write_ifs_formula_in_excel_how_title: "How to write an IFS formula",
	tool_write_ifs_formula_in_excel_how_body: "Enter the target cell and ordered tests. Write formula shows IFS with a TRUE catch-all and evaluates your trial value. Copy pastes English Excel syntax with commas.",
	tool_write_ifs_formula_in_excel_how_item_1: "Set the target cell and an optional trial value.",
	tool_write_ifs_formula_in_excel_how_item_2: "Add equals, contains, or blank rows in evaluation order.",
	tool_write_ifs_formula_in_excel_how_item_3: "Set each Then result and the Else value (paired with TRUE).",
	tool_write_ifs_formula_in_excel_how_item_4: "Click Write formula, check the trial, then Copy. Use nested IF if you are on Excel 2016.",

	tool_write_ifs_formula_in_excel_why_choose_title: "What this IFS builder gives you",
	tool_write_ifs_formula_in_excel_why_choose_item_1: "Ordered equals / contains / blank tests in one IFS call.",
	tool_write_ifs_formula_in_excel_why_choose_item_2: "Automatic TRUE,else catch-all pair.",
	tool_write_ifs_formula_in_excel_why_choose_item_3: "Browser trial before you paste into Excel.",
	tool_write_ifs_formula_in_excel_why_choose_item_4: "Sample rotation for regions, grades, and contains.",
	tool_write_ifs_formula_in_excel_why_choose_item_5: "Clear Excel 2016 boundary with a link path to nested IF.",

	tool_write_ifs_formula_in_excel_rules_title: "Rules you should expect",
	tool_write_ifs_formula_in_excel_rules_body: "The builder emits IFS(test,value,...,TRUE,else). Text quotes are doubled inside Excel strings.",
	tool_write_ifs_formula_in_excel_rules_item_1: "Text quotes are doubled inside Excel strings.",
	tool_write_ifs_formula_in_excel_rules_item_2: "Contains emits ISNUMBER(SEARCH(...)); blank tests empty text.",
	tool_write_ifs_formula_in_excel_rules_item_3: "The first matching test wins; TRUE catch-all runs last.",
	tool_write_ifs_formula_in_excel_rules_item_4: "IFS needs Excel 2019, Microsoft 365, or later — not perpetual Excel 2016.",
	tool_write_ifs_formula_in_excel_rules_item_5: "English function names and commas may need localization in your Excel install.",

	tool_write_ifs_formula_in_excel_example_title: "Worked examples",
	tool_write_ifs_formula_in_excel_example: "Load sample starts with West → A and East → B, else Other → =IFS(...,TRUE,\"Other\"), trial West → A. Next builds simple grade equals. The last sample uses contains for \"promo\".",

	tool_write_ifs_formula_in_excel_usecases_title: "When to use an IFS formula builder",
	tool_write_ifs_formula_in_excel_usecase_1: "Map region codes to labels without deep nested IF parentheses.",
	tool_write_ifs_formula_in_excel_usecase_2: "Draft grade or risk bands for Microsoft 365 workbooks.",
	tool_write_ifs_formula_in_excel_usecase_3: "Trial branch order before pasting into a shared sheet.",
	tool_write_ifs_formula_in_excel_usecase_4: "Switch to the nested IF page when teammates still use Excel 2016.",

	tool_write_ifs_formula_in_excel_faq_q1: "Does Excel 2016 run IFS?",
	tool_write_ifs_formula_in_excel_faq_a1: "The perpetual Excel 2016 release does not. Use nested IF, Excel 2019 or later, or Microsoft 365.",
	tool_write_ifs_formula_in_excel_faq_q2: "What happens when no test matches?",
	tool_write_ifs_formula_in_excel_faq_a2: "TRUE pairs with your else value as the catch-all result.",
	tool_write_ifs_formula_in_excel_faq_q3: "Are values uploaded?",
	tool_write_ifs_formula_in_excel_faq_a3: "No. Building and trial evaluation stay in your browser.",
	tool_write_ifs_formula_in_excel_faq_q4: "Will localized Excel accept it?",
	tool_write_ifs_formula_in_excel_faq_a4: "Some installations need translated function names or semicolon separators.",
	tool_write_ifs_formula_in_excel_faq_q5: "How is this different from nested IF?",
	tool_write_ifs_formula_in_excel_faq_a5: "IFS is a flat list of tests. Nested IF wraps IF inside IF. Use the related nested IF page for older Excel.",
	tool_write_ifs_formula_in_excel_faq_q6: "What does contains emit?",
	tool_write_ifs_formula_in_excel_faq_a6: "ISNUMBER(SEARCH(\"text\", cell)) as the test argument inside IFS.",

	tool_write_ifs_formula_in_excel_references: "Microsoft IFS function documentation.",
	tool_write_ifs_formula_in_excel_ref_a_label: "Microsoft — IFS function",
	tool_write_ifs_formula_in_excel_ref_b_label: "Microsoft — IF function",
};

export default en;
