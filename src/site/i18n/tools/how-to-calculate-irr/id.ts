/**
 * i18n tool shard (how-to-calculate-irr / id).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_irr_title: "Kalkulator IRR",
	tool_irr_description: "Perkirakan IRR dari daftar arus kas sederhana dengan metode Newton. Contoh: −1000, 300, 420, 680 → IRR perkiraan. Edukatif.",
	tool_irr_calculate: "Hitung",
	tool_irr_sample: "Muat contoh",
	tool_irr_clear: "Hapus",
	tool_irr_cf_label: "Arus kas (koma/baris; CF0 dulu)",
	tool_irr_cf_ph: "mis. -1000, 300, 420, 680",
	tool_irr_irrOut_label: "IRR perkiraan",
	tool_irr_result_note: "Edukatif.",
	tool_irr_err_generic: "Periksa input.",
	tool_irr_how_title: "Cara kerja",
	tool_irr_how_body: "Tempel CF0…CFn. Mencari r agar NPV(r)=0 dengan Newton.",
	tool_irr_formula_title: "Rumus",
	tool_irr_formula_body: "Tempel CF0…CFn. Mencari r agar NPV(r)=0 dengan Newton.",
	tool_irr_formula_item_1: "See formula notes.",
	tool_irr_formula_item_2: "Check inputs.",
	tool_irr_formula_item_3: "Educational only.",
	tool_irr_example_title: "Contoh",
	tool_irr_example: "Contoh: −1000, 300, 420, 680 → IRR ≈ 18.9%.",
	tool_irr_usecases_title: "Kapan dipakai",
	tool_irr_usecase_1: "Homework.",
	tool_irr_usecase_2: "Quick sketch.",
	tool_irr_usecase_3: "Compare related tools.",
	tool_irr_faq_q1: "Contoh?",
	tool_irr_faq_a1: "Contoh: −1000, 300, 420, 680 → IRR ≈ 18.9%.",
	tool_irr_faq_q2: "Formula?",
	tool_irr_faq_a2: "See Formula section.",
	tool_irr_faq_q3: "Advice?",
	tool_irr_faq_a3: "Educational only.",
	tool_irr_faq_q4: "Related?",
	tool_irr_faq_a4: "See related tools.",
	tool_irr_article: "Kalkulator IRR",
	tool_irr_disclaimer: "Hanya ilustrasi edukatif (IRR); bukan saran keuangan.",
	tool_irr_references: "Investopedia dan rumus buku teks.",
	tool_irr_ref_a_label: "Investopedia",
	tool_irr_ref_b_label: "Wikipedia",
};

export default id;
