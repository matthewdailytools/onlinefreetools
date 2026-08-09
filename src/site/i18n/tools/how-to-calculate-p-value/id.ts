/**
 * i18n tool shard (how-to-calculate-p-value / id).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_p_value_title: "Kalkulator nilai-p — Cara menghitung p-value",
	tool_p_value_description: "Nilai-p normal dua sisi dari skor z dengan aproksimasi erfc. Contoh: z = 1,96 → p ≈ 0,05. Menuliskan asumsi normal baku dan dua sisi. Di browser untuk belajar dan cek cepat.",
	tool_p_value_calculate: "Hitung",
	tool_p_value_sample: "Muat contoh",
	tool_p_value_clear: "Hapus",
	tool_p_value_z_label: "Skor z",
	tool_p_value_z_ph: "mis. 1.96",
	tool_p_value_pOut_label: "Nilai-p dua sisi",
	tool_p_value_result_note: "Perkiraan normal baku dua sisi untuk belajar — bukan suite uji hipotesis lengkap.",
	tool_p_value_err_generic: "Masukkan skor z hingga.",
	tool_p_value_how_title: "Cara kerja",
	tool_p_value_how_body: "Masukkan skor z dari uji normal baku. Alat ini memperkirakan nilai-p dua sisi dengan aproksimasi erfc dan menuliskan asumsi: model normal baku serta kedua ekor. Di browser untuk tugas dan cek cepat.",
	tool_p_value_formula_title: "Rumus dan asumsi",
	tool_p_value_formula_body: "p dua sisi ≈ erfc(|z| / √2) di bawah normal baku. Batasan:",
	tool_p_value_formula_item_1: "Mengasumsikan z normal baku kontinu, bukan t, χ², atau uji eksak diskret.",
	tool_p_value_formula_item_2: "Hanya dua sisi di halaman ini.",
	tool_p_value_formula_item_3: "Memakai aproksimasi erfc numerik untuk belajar, bukan perangkat lunak tersertifikasi.",
	tool_p_value_formula_item_4: "p kecil tidak dengan sendirinya membuktikan klaim ilmiah.",
	tool_p_value_example_title: "Contoh",
	tool_p_value_example: "Contoh: z = 1,96 → p dua sisi ≈ 0,05 (sekitar 0,049996 dengan aproksimasi ini).",
	tool_p_value_usecases_title: "Kapan dipakai",
	tool_p_value_usecase_1: "PR: ubah z yang diketahui menjadi p dua sisi perkiraan.",
	tool_p_value_usecase_2: "Cek cepat setelah menghitung z dari mean dan SD.",
	tool_p_value_usecase_3: "Bandingkan aturan 1,96 ↔ 0,05 dengan angka.",
	tool_p_value_faq_q1: "Satu sisi atau dua sisi?",
	tool_p_value_faq_a1: "Dua sisi; mencakup kedua sisi di luar ±|z|.",
	tool_p_value_faq_q2: "Distribusi apa yang diasumsikan?",
	tool_p_value_faq_a2: "Normal baku kontinu. Bukan kalkulator t atau χ².",
	tool_p_value_faq_q3: "Mengapa z=1,96 mendekati 0,05?",
	tool_p_value_faq_a3: "Nilai kritis umum untuk uji 5% dua sisi; erfc memberi sekitar 0,05.",
	tool_p_value_faq_q4: "Apakah p kecil membuktikan alternatif?",
	tool_p_value_faq_a4: "Tidak. Itu peluang ekor di bawah asumsi, bukan bukti otomatis.",
	tool_p_value_disclaimer: "Hasil edukasi di bawah model normal baku dua sisi; tidak menggantikan perangkat lunak statistik atau analisis profesional.",
	tool_p_value_references: "Artikel Wikipedia tentang nilai-p dan distribusi normal; fungsi error komplementer.",
	tool_p_value_ref_pvalue_label: "Wikipedia — Nilai-p",
	tool_p_value_ref_normal_label: "Wikipedia — Distribusi normal",
	tool_p_value_article: "Hitung nilai-p normal dua sisi dari skor z dengan aproksimasi erfc dan asumsi yang jelas.",
};

export default id;
