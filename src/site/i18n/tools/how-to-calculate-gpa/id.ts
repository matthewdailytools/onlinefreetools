/**
 * i18n tool shard (how-to-calculate-gpa / id).
 * Bahasa Indonesia ditulis ulang secara independen.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_gpa_title: "Kalkulator GPA — IPK tertimbang",
	tool_gpa_description: "Hitung GPA/IPK tertimbang sks pada skala 4.0 dari nilai poin dan sks per mata kuliah. Contoh: A=4.0 (3 sks) dan B=3.0 (3 sks) → GPA 3.5. Skala berbeda antar kampus/negara; edukasi di browser saja.",
	tool_gpa_article: "GPA tertimbang mengalikan poin nilai dengan sks lalu membagi total sks. Halaman ini memakai skala 4.0 sederhana; kampus Anda mungkin memakai +/- atau sistem lain.",
	tool_gpa_calculate: "Hitung",
	tool_gpa_sample: "Muat contoh",
	tool_gpa_clear: "Hapus",
	tool_gpa_courses_label: "Mata kuliah (poin, sks per baris)",
	tool_gpa_courses_ph: "mis. 4.0, 3",
	tool_gpa_courses_hint: "Satu MK per baris: poin nilai lalu sks. Pada 4.0, A≈4.0, B≈3.0.",
	tool_gpa_result_label: "GPA tertimbang",
	tool_gpa_result_note: "Asumsi skala 4.0. Cocokkan dengan aturan transkrip resmi.",
	tool_gpa_err_parse: "Isi minimal satu baris: poin, sks (mis. 4.0, 3).",
	tool_gpa_err_credits: "Setiap mata kuliah butuh sks > 0.",
	tool_gpa_how_title: "Cara kerja",
	tool_gpa_how_body: "Tulis poin dan sks per mata kuliah. Alat menimbang dan membagi total sks di browser. Selalu cek skala kampus Anda.",
	tool_gpa_formula_title: "Rumus dan catatan skala",
	tool_gpa_formula_body: "GPA = Σ (poin × sks) / Σ sks. Catatan:",
	tool_gpa_formula_item_1: "Demo pemetaan 4.0 sederhana; +/- tidak otomatis.",
	tool_gpa_formula_item_2: "Sks harus positif; poin harus angka terbatas.",
	tool_gpa_formula_item_3: "Sistem kuliah/sekolah bisa berbeda — hanya edukasi.",
	tool_gpa_example_title: "Contoh",
	tool_gpa_example: "Contoh: MK A = 4.0 (3 sks), MK B = 3.0 (3 sks) → GPA = (12 + 9) / 6 = 3.50.",
	tool_gpa_usecases_title: "Kapan dipakai",
	tool_gpa_usecase_1: "Perkiraan IPK semester sebelum portal resmi.",
	tool_gpa_usecase_2: "Latihan rata-rata tertimbang sks skala 4.0.",
	tool_gpa_usecase_3: "Skenario nilai — bukan keputusan masuk kampus.",
	tool_gpa_faq_q1: "Rumus apa yang dipakai?",
	tool_gpa_faq_a1: "GPA tertimbang = Σ (poin × sks) / Σ sks.",
	tool_gpa_faq_q2: "Semua kampus pakai 4.0?",
	tool_gpa_faq_a2: "Tidak. Ada +/- , 5.0, atau persen.",
	tool_gpa_faq_q3: "Boleh huruf langsung?",
	tool_gpa_faq_a3: "Konversi dulu (A→4.0, B→3.0), lalu isi poin dan sks.",
	tool_gpa_faq_q4: "Menjamin diterima?",
	tool_gpa_faq_a4: "Tidak. Hanya ilustrasi edukatif.",
	tool_gpa_references: "Sumber College Board; ringkasan skala nilai AS.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Penilaian akademik di AS",
};

export default id;
