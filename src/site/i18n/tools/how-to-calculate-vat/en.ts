/**
 * i18n tool shard (how-to-calculate-vat / en).
 * Add VAT/GST to net or extract tax from gross; rate chips; reverse check.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_vat_title: "VAT / GST Calculator — Add Tax to Net or Extract Tax from Gross",
	tool_vat_description: "Add VAT or GST to a net amount, or extract tax from a gross (tax-inclusive) price. Example: net 100 at 20% → gross 120, tax 20. Enter your own rate — no country matrix. Educational arithmetic only — not tax filing advice.",
	tool_vat_article: "Add VAT/GST to a net price or reverse a gross amount into net and tax, with step-by-step working and a reverse check.",
	tool_vat_desc: "Add or extract VAT/GST with your own rate. Shows net, gross, tax and a reverse check.",

	tool_vat_safety_banner: "Educational only. Enter the rate that applies to your situation yourself — this page does not look up country rates and is not filing or compliance advice.",
	tool_vat_mode_label: "Mode",
	tool_vat_mode_add: "Add tax to net",
	tool_vat_mode_extract: "Extract tax from gross",
	tool_vat_amount_label: "Amount",
	tool_vat_amount_ph: "e.g. 100",
	tool_vat_rate_label: "VAT/GST %",
	tool_vat_rate_ph: "e.g. 20",
	tool_vat_hint: "Choose add (net → gross) or extract (gross → net). Type any non-negative rate percent. Rate chips are shortcuts only — confirm the legal rate for your invoice.",
	tool_vat_chips_label: "Common rate shortcuts",
	tool_vat_chip_5: "5%",
	tool_vat_chip_10: "10%",
	tool_vat_chip_20: "20%",
	tool_vat_chip_21: "21%",
	tool_vat_calculate: "Calculate",
	tool_vat_sample: "Load sample",
	tool_vat_clear: "Clear",
	tool_vat_grossOut_label: "Gross",
	tool_vat_netOut_label: "Net",
	tool_vat_taxOut_label: "Tax",
	tool_vat_row_check: "Reverse check",
	tool_vat_steps_title: "Steps",
	tool_vat_step_add_tpl: "Add tax: gross = net × (1 + rate/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_step_extract_tpl: "Extract tax: net = gross ÷ (1 + rate/100) = {gross} ÷ (1 + {pct}/100) = {net}.",
	tool_vat_step_tax_tpl: "Tax = gross − net = {gross} − {net} = {tax}.",
	tool_vat_step_check_tpl: "Check: net × (1 + rate/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_result_note: "You supply the percent. Multi-rate invoices, exemptions and filing rules are not modeled. Educational only — not tax, accounting or investment advice.",
	tool_vat_err_generic: "Enter a positive amount and a tax rate of 0 or more (for example amount 100 and rate 20).",

	tool_vat_how_title: "How to use the VAT / GST calculator",
	tool_vat_how_body: "Pick add or extract, enter the amount and your rate, then Calculate. Load sample cycles add 100@20%, extract 120@20%, add 50@10% and extract 107.1@7%.",
	tool_vat_how_item_1: "Choose Add tax to net or Extract tax from gross.",
	tool_vat_how_item_2: "Enter the money amount and the VAT/GST percent (or tap a rate chip).",
	tool_vat_how_item_3: "Click Calculate to see gross, net, tax and a reverse-check line.",
	tool_vat_how_item_4: "Use Load sample to rotate common add/extract examples.",

	tool_vat_why_choose_title: "What this VAT calculator gives you",
	tool_vat_why_choose_item_1: "Both directions: add tax to net, or pull net and tax out of a gross price.",
	tool_vat_why_choose_item_2: "A reverse check that multiplies net × (1+r) back to gross.",
	tool_vat_why_choose_item_3: "Step lines that plug your numbers into the formulas.",
	tool_vat_why_choose_item_4: "Rate chips (5 / 10 / 20 / 21%) as typing shortcuts — not legal rate advice.",
	tool_vat_why_choose_item_5: "Clear boundary: you enter the rate; no country tax matrix and no filing help.",

	tool_vat_formula_title: "VAT / GST formulas",
	tool_vat_formula_body: "Let r be the decimal rate (percent ÷ 100). The same identities work for VAT, GST or sales tax when the tax is a single percentage of the net.",
	tool_vat_formula_item_1: "Add: gross = net × (1 + r). Example: 100 × 1.20 = 120 at 20%.",
	tool_vat_formula_item_2: "Extract: net = gross ÷ (1 + r). Example: 120 ÷ 1.20 = 100 at 20%.",
	tool_vat_formula_item_3: "Tax = gross − net. Same sample → tax 20.",
	tool_vat_formula_item_4: "Tax fraction of gross = r ÷ (1 + r). At 20%, tax is 1/6 of the gross price.",
	tool_vat_formula_item_5: "GST vs VAT: the add/extract math is the same; labels and filing rules differ by country.",

	tool_vat_example_title: "Worked examples",
	tool_vat_example: "Load sample starts with add: net 100 at 20% → gross 120, tax 20. Next extracts the same 120 back to net 100. Then add 50 at 10% → 55. The last sample extracts 107.1 at 7% ≈ net 100. Always confirm the rate that applies to your invoice.",

	tool_vat_usecases_title: "When to use a VAT / GST calculator",
	tool_vat_usecase_1: "Homework: add tax to a net price and show the (1+r) steps.",
	tool_vat_usecase_2: "Receipt checks: start from a tax-inclusive total and recover the net and tax.",
	tool_vat_usecase_3: "Quick quotes: apply a known rate percent without opening a spreadsheet.",
	tool_vat_usecase_4: "Clarify GST vs VAT wording while using the same arithmetic.",

	tool_vat_faq_q1: "How do you add VAT to a net amount?",
	tool_vat_faq_a1: "Multiply by (1 + rate/100). Net 100 at 20% → 100 × 1.20 = 120 gross; tax = 20.",
	tool_vat_faq_q2: "How do you extract VAT from a gross price?",
	tool_vat_faq_a2: "Divide by (1 + rate/100). Gross 120 at 20% → 120 ÷ 1.20 = 100 net; tax = 20.",
	tool_vat_faq_q3: "Do you include country VAT rates?",
	tool_vat_faq_a3: "No. Enter the percent yourself. Rate chips are only typing shortcuts, not a legal rate table.",
	tool_vat_faq_q4: "Is GST calculated differently from VAT?",
	tool_vat_faq_a4: "For a single percentage of the net, the add/extract formulas are the same. Names and filing rules differ by jurisdiction.",
	tool_vat_faq_q5: "Can the rate be zero?",
	tool_vat_faq_a5: "Yes. A 0% rate leaves net = gross and tax = 0, which is useful for zero-rated teaching examples.",
	tool_vat_faq_q6: "Does this handle multiple VAT rates on one invoice?",
	tool_vat_faq_a6: "No. Run each line separately or use bookkeeping software that supports mixed rates and exemptions.",
	tool_vat_faq_q7: "Is this tax filing advice?",
	tool_vat_faq_a7: "No. It is educational arithmetic only — not accounting, tax filing or investment advice.",

	tool_vat_disclaimer: "Educational VAT/GST arithmetic only — not financial, tax filing, accounting or investment advice.",
	tool_vat_references: "Investopedia and standard textbook formulas for educational context.",
	tool_vat_ref_a_label: "Investopedia — VAT",
	tool_vat_ref_b_label: "Investopedia — Sales tax",
};

export default en;
