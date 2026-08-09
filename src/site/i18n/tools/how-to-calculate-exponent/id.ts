/**
 * i18n tool shard (how-to-calculate-exponent / id).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_exponent_title: "Kalkulator eksponen — Cara menghitung pangkat",
	tool_exponent_description: "Hitung pangkat a^b dengan contoh 2^10=1024. Menuliskan Infinity untuk magnitudo besar dan NaN untuk basis negatif dengan eksponen non-integer. Di browser bersama log dan notasi ilmiah.",
	tool_exponent_calculate: "Hitung",
	tool_exponent_sample: "Muat contoh",
	tool_exponent_clear: "Hapus",
	tool_exponent_base_label: "Basis a",
	tool_exponent_base_ph: "mis. 2",
	tool_exponent_exp_label: "Eksponen b",
	tool_exponent_exp_ph: "mis. 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "Menghitung a^b dengan Math.pow untuk belajar. |b| sangat besar bisa Infinity.",
	tool_exponent_err_generic: "Masukkan basis dan eksponen hingga.",
	tool_exponent_how_title: "Cara kerja",
	tool_exponent_how_body: "Masukkan a dan b. Mengembalikan a^b. Basis negatif dengan eksponen non-integer bisa NaN dan dianggap error.",
	tool_exponent_formula_title: "Rumus",
	tool_exponent_formula_body: "Eksponensiasi a^b:",
	tool_exponent_formula_item_1: "Jika b bilangan bulat non-negatif, a^b adalah perkalian berulang.",
	tool_exponent_formula_item_2: "Eksponen pecahan/negatif mengikuti Math.pow real.",
	tool_exponent_formula_item_3: "0^0 diambil 1 di sini (konvensi pemrograman) — ada perdebatan.",
	tool_exponent_formula_item_4: "Padankan dengan halaman log untuk cek log_a(a^b)=b.",
	tool_exponent_example_title: "Contoh",
	tool_exponent_example: "Contoh: 2^10 = 1024.",
	tool_exponent_usecases_title: "Kapan dipakai",
	tool_exponent_usecase_1: "PR: pangkat sederhana seperti 2^10.",
	tool_exponent_usecase_2: "Cek faktor notasi ilmiah.",
	tool_exponent_usecase_3: "Silang-cek log dengan pangkat balik.",
	tool_exponent_disclaimer: "Hanya pangkat real edukasi; bukan CAS.",
	tool_exponent_references: "Wikipedia exponentiation.",
	tool_exponent_ref_exp_label: "Wikipedia — Exponentiation",
	tool_exponent_ref_pow_label: "Wikipedia — Exponent",
	tool_exponent_article: "Hitung pangkat a^b di browser dengan catatan domain.",
	tool_exponent_faq_q1: "Bisakah hasil Infinity?",
	tool_exponent_faq_a1: "Ya untuk magnitudo sangat besar.",
	tool_exponent_faq_q2: "0^0 di halaman ini?",
	tool_exponent_faq_a2: "Diambil 1 (konvensi JS); ada perdebatan.",
	tool_exponent_faq_q3: "Basis negatif gagal kapan?",
	tool_exponent_faq_a3: "Pangkat real non-integer sering NaN di JS.",
	tool_exponent_faq_q4: "Cek dengan log?",
	tool_exponent_faq_a4: "Jika terdefinisi, log_a(a^b)≈b.",
};

export default id;
