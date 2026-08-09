/**
 * i18n tool shard (how-to-calculate-contribution-margin / id).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_contribution_margin_title: "Kalkulator contribution margin",
	tool_contribution_margin_description: "Hitung contribution margin dan rasionya dari harga dan biaya variabel. Contoh: harga 50, VC 30 → 20 (40%). Edukatif. Perhitungan edukatif di browser; bukan saran profesional.",
	tool_contribution_margin_calculate: "Hitung",
	tool_contribution_margin_sample: "Muat contoh",
	tool_contribution_margin_clear: "Hapus",
	tool_contribution_margin_price_label: "Harga satuan",
	tool_contribution_margin_price_ph: "mis. 50",
	tool_contribution_margin_vc_label: "Biaya variabel per unit",
	tool_contribution_margin_vc_ph: "mis. 30",
	tool_contribution_margin_cmOut_label: "Contribution margin",
	tool_contribution_margin_cmrOut_label: "Rasio CM",
	tool_contribution_margin_result_note: "Edukatif.",
	tool_contribution_margin_err_generic: "Harga > 0 dan VC ≥ 0.",
	tool_contribution_margin_how_title: "Cara kerja",
	tool_contribution_margin_how_body: "Isi harga dan biaya variabel per unit.",
	tool_contribution_margin_formula_title: "Rumus",
	tool_contribution_margin_formula_body: "CM = P − VC; rasio = CM / P.",
	tool_contribution_margin_formula_item_1: "VC with units; fixed costs → break-even.",
	tool_contribution_margin_formula_item_2: "Price > 0.",
	tool_contribution_margin_formula_item_3: "Simplified.",
	tool_contribution_margin_example_title: "Contoh",
	tool_contribution_margin_example: "Contoh: 50 dan 30 → 20 (40%).",
	tool_contribution_margin_usecases_title: "Kapan dipakai",
	tool_contribution_margin_usecase_1: "Unit CM homework.",
	tool_contribution_margin_usecase_2: "VC sensitivity.",
	tool_contribution_margin_usecase_3: "With break-even tool.",
	tool_contribution_margin_faq_q1: "Contoh?",
	tool_contribution_margin_faq_a1: "20 / 40%",
	tool_contribution_margin_faq_q2: "CM vs gross?",
	tool_contribution_margin_faq_a2: "VC vs COGS.",
	tool_contribution_margin_faq_q3: "Qty needed?",
	tool_contribution_margin_faq_a3: "Not for unit CM.",
	tool_contribution_margin_faq_q4: "Advice?",
	tool_contribution_margin_faq_a4: "No.",
	tool_contribution_margin_article: "Kalkulator contribution margin",
	tool_contribution_margin_disclaimer: "Hanya ilustrasi edukatif (contribution margin); bukan saran keuangan.",
	tool_contribution_margin_references: "Investopedia dan rumus buku teks.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default id;
