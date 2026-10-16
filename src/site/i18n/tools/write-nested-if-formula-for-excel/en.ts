/**
 * i18n 工具分片（write-nested-if-formula-for-excel / en）。
 * 有序条件 → 嵌套 IF 公式；浏览器试算；复制粘贴到 Excel。
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Nested IF Formula Builder for Excel — Ordered Conditions to Copy",
	tool_write_nested_if_formula_for_excel_description: "Build a nested IF formula for Excel from ordered equals, contains, or blank tests. Example: West → A, East → B, otherwise Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")). Trial the result in your browser, then copy. English function names and commas.",
	tool_write_nested_if_formula_for_excel_article: "Add ordered conditions, set each result and a final else, preview a trial value, and copy a complete nested IF formula.",
	tool_write_nested_if_formula_for_excel_desc: "Ordered conditions → nested IF formula with browser trial and copy.",

	tool_write_nested_if_formula_for_excel_hint: "Conditions are tested top to bottom. The first match wins. Contains emits ISNUMBER(SEARCH(...)). Formulas use English names and commas.",
	tool_write_nested_if_formula_for_excel_cell_label: "Target cell",
	tool_write_nested_if_formula_for_excel_cell_ph: "e.g. A1",
	tool_write_nested_if_formula_for_excel_trial_label: "Trial value",
	tool_write_nested_if_formula_for_excel_trial_ph: "e.g. West",
	tool_write_nested_if_formula_for_excel_else_label: "Else (final false)",
	tool_write_nested_if_formula_for_excel_else_ph: "e.g. Other",
	tool_write_nested_if_formula_for_excel_col_op: "Test",
	tool_write_nested_if_formula_for_excel_col_val: "Value / text",
	tool_write_nested_if_formula_for_excel_col_then: "Then result",
	tool_write_nested_if_formula_for_excel_op_eq: "equals",
	tool_write_nested_if_formula_for_excel_op_contains: "contains",
	tool_write_nested_if_formula_for_excel_op_blank: "is blank",
	tool_write_nested_if_formula_for_excel_add: "Add condition",
	tool_write_nested_if_formula_for_excel_write: "Write formula",
	tool_write_nested_if_formula_for_excel_sample: "Load sample",
	tool_write_nested_if_formula_for_excel_clear: "Clear",
	tool_write_nested_if_formula_for_excel_copy: "Copy formula",
	tool_write_nested_if_formula_for_excel_copied: "Copied.",
	tool_write_nested_if_formula_for_excel_formula_label: "Nested IF formula",
	tool_write_nested_if_formula_for_excel_trial_result_label: "Trial result",
	tool_write_nested_if_formula_for_excel_empty: "Add at least one condition (or load the sample), then write the formula.",
	tool_write_nested_if_formula_for_excel_copy_fail: "Could not copy. Select the formula and copy manually.",

	tool_write_nested_if_formula_for_excel_how_title: "How to write a nested IF formula",
	tool_write_nested_if_formula_for_excel_how_body: "Enter the target cell and ordered conditions. Write formula shows the nested IF and evaluates your trial value. Copy pastes English Excel syntax with commas.",
	tool_write_nested_if_formula_for_excel_how_item_1: "Set the target cell and an optional trial value.",
	tool_write_nested_if_formula_for_excel_how_item_2: "Add equals, contains, or blank rows in the order Excel should test them.",
	tool_write_nested_if_formula_for_excel_how_item_3: "Set each Then result and the final Else value.",
	tool_write_nested_if_formula_for_excel_how_item_4: "Click Write formula, check the trial result, then Copy formula.",

	tool_write_nested_if_formula_for_excel_why_choose_title: "What this nested IF builder gives you",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "Ordered equals / contains / blank conditions in one nested IF.",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "Browser trial so you see which branch wins before pasting.",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "Sample rotation for region labels, grade bands, and contains tests.",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "One-click copy of the complete formula string.",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "Clear note: this builds nested IF, not IFS (see the related IFS page).",

	tool_write_nested_if_formula_for_excel_rules_title: "Rules you should expect",
	tool_write_nested_if_formula_for_excel_rules_body: "The builder emits classic nested IF(...). Text quotes are doubled inside Excel strings.",
	tool_write_nested_if_formula_for_excel_rules_item_1: "Text quotes are doubled inside Excel strings.",
	tool_write_nested_if_formula_for_excel_rules_item_2: "Contains emits ISNUMBER(SEARCH(...)); blank tests empty text.",
	tool_write_nested_if_formula_for_excel_rules_item_3: "The first matching condition wins (top to bottom).",
	tool_write_nested_if_formula_for_excel_rules_item_4: "English function names and commas may need localization in your Excel install.",
	tool_write_nested_if_formula_for_excel_rules_item_5: "For IFS() syntax use the related write-IFS page instead.",

	tool_write_nested_if_formula_for_excel_example_title: "Worked examples",
	tool_write_nested_if_formula_for_excel_example: "Load sample starts with West → A and East → B, else Other, trial West → A. Next builds grade bands (≥90 / ≥80). The last sample uses a contains test for \"promo\".",

	tool_write_nested_if_formula_for_excel_usecases_title: "When to use a nested IF formula builder",
	tool_write_nested_if_formula_for_excel_usecase_1: "Assign grade or risk bands from ordered rules.",
	tool_write_nested_if_formula_for_excel_usecase_2: "Turn region codes into reporting labels.",
	tool_write_nested_if_formula_for_excel_usecase_3: "Check a multi-branch formula before pasting it into a workbook.",
	tool_write_nested_if_formula_for_excel_usecase_4: "Prototype contains/blank branches without writing SEARCH by hand.",

	tool_write_nested_if_formula_for_excel_faq_q1: "Are my values uploaded?",
	tool_write_nested_if_formula_for_excel_faq_a1: "No. Building and trial evaluation stay in your browser.",
	tool_write_nested_if_formula_for_excel_faq_q2: "Is this the same as IFS?",
	tool_write_nested_if_formula_for_excel_faq_a2: "No. This page emits nested IF(...). Use the related IFS builder for IFS().",
	tool_write_nested_if_formula_for_excel_faq_q3: "How does contains work?",
	tool_write_nested_if_formula_for_excel_faq_a3: "It emits ISNUMBER(SEARCH(\"text\", cell)) inside the IF test.",
	tool_write_nested_if_formula_for_excel_faq_q4: "Will the formula paste into every Excel language?",
	tool_write_nested_if_formula_for_excel_faq_a4: "It uses English function names and commas. Some installations need translated names or semicolon separators.",
	tool_write_nested_if_formula_for_excel_faq_q5: "What does the trial value do?",
	tool_write_nested_if_formula_for_excel_faq_a5: "It evaluates the same branch order in the browser so you can confirm which Then/Else wins.",
	tool_write_nested_if_formula_for_excel_faq_q6: "Can I nest more than two conditions?",
	tool_write_nested_if_formula_for_excel_faq_a6: "Yes. Add rows; each becomes another IF layer around the final Else.",

	tool_write_nested_if_formula_for_excel_references: "Microsoft IF function documentation.",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — IF function",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — IFS function",
};

export default en;
