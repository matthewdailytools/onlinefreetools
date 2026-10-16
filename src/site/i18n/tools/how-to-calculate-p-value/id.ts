/**
 * i18n tool shard (how-to-calculate-p-value / id).
 * Nilai-p satu ekor atau dua ekor dari skor-z lewat erfc; pintasan z kritis.
 * Penulisan ulang mandiri bahasa Indonesia — edukatif saja.
 */
import type { SiteLangDict } from '../../../types';

/** Indonesia: kalkulator nilai-p dari skor-z */
const id: SiteLangDict = {
	tool_p_value_title: "Kalkulator nilai-p — Dari skor-z (ekor normal)",
	tool_p_value_description:
		"Hitung nilai-p normal satu ekor atau dua ekor dari skor-z dengan pendekatan erfc. Contoh: z = 1.96 → nilai-p dua ekor ≈ 0.05. Mengasumsikan normal baku kontinu — bukan uji-t, χ², atau uji eksak. Hanya untuk pembelajaran.",
	tool_p_value_article:
		"Perkiraan nilai-p normal baku satu atau dua ekor dari skor-z dengan erfc, pintasan z kritis, dan langkah kerja berurutan.",
	tool_p_value_desc:
		"Nilai-p normal satu atau dua ekor dari z. Menampilkan kedua ekor dan |z|.",

	tool_p_value_mode_label: "Jenis ekor",
	tool_p_value_mode_two: "Dua ekor",
	tool_p_value_mode_one: "Satu ekor",
	tool_p_value_hint:
		"Memakai model normal baku. Nilai-p satu ekor adalah setengah dari dua ekor pada normal simetris ( |z| yang sama).",
	tool_p_value_z_label: "Skor-z",
	tool_p_value_z_ph: "mis. 1.96",
	tool_p_value_chips_label: "Pintasan z kritis umum",
	tool_p_value_chip_1645: "z = 1.645",
	tool_p_value_chip_196: "z = 1.96",
	tool_p_value_chip_2576: "z = 2.576",
	tool_p_value_calculate: "Hitung",
	tool_p_value_sample: "Muat contoh",
	tool_p_value_clear: "Hapus",
	tool_p_value_pOut_label: "Nilai-p dua ekor",
	tool_p_value_pOneOut_label: "Nilai-p satu ekor",
	tool_p_value_altOut_label: "Jenis ekor lainnya",
	tool_p_value_absOut_label: "|z|",
	tool_p_value_steps_title: "Langkah",
	tool_p_value_step_abs_tpl: "Ambil nilai mutlak: |z| = |{z}| = {abs}.",
	tool_p_value_step_two_tpl: "Dua ekor p ≈ erfc(|z| / √2) = erfc({abs} / √2) ≈ {p}.",
	tool_p_value_step_one_tpl: "Satu ekor p ≈ dua ekor / 2 = {two} / 2 ≈ {one}.",
	tool_p_value_result_note:
		"Pendekatan normal baku untuk belajar. Bukan uji-t, χ², binomial eksak, atau jasa desain studi. p kecil saja tidak membuktikan klaim.",
	tool_p_value_err_generic: "Masukkan skor-z berhingga (contoh 1.96).",

	tool_p_value_how_title: "Cara memakai kalkulator nilai-p",
	tool_p_value_how_body:
		"Pilih dua ekor atau satu ekor, masukkan z (atau ketuk chip z kritis), lalu Hitung. Muat contoh bergiliran: 1.96 dua ekor, 1.96 satu ekor, z=0, dan z=2.576.",
	tool_p_value_how_item_1: "Pilih dua ekor atau satu ekor.",
	tool_p_value_how_item_2: "Masukkan skor-z berhingga, atau ketuk 1.645 / 1.96 / 2.576.",
	tool_p_value_how_item_3: "Klik Hitung untuk melihat p yang dipilih, jenis ekor lain, dan langkahnya.",
	tool_p_value_how_item_4: "Pakai Muat contoh untuk memutar titik cek buku teks yang umum.",

	tool_p_value_why_choose_title: "Apa yang diberikan kalkulator nilai-p ini",
	tool_p_value_why_choose_item_1: "Nilai-p satu ekor dan dua ekor dari skor-z yang sama.",
	tool_p_value_why_choose_item_2: "Chip z kritis untuk titik dua ekor 10% / 5% / 1% yang familiar.",
	tool_p_value_why_choose_item_3: "Baris langkah yang menampilkan erfc(|z|/√2) dan setengah satu ekor.",
	tool_p_value_why_choose_item_4: "Asumsi jelas: hanya normal baku kontinu.",
	tool_p_value_why_choose_item_5: "Batas jujur: bukan suite uji hipotesis lengkap atau bukti klaim.",

	tool_p_value_formula_title: "Rumus nilai-p normal",
	tool_p_value_formula_body:
		"Pada normal baku kontinu, dua ekor p ≈ erfc(|z| / √2). Satu ekor adalah setengahnya untuk normal simetris.",
	tool_p_value_formula_item_1: "Dua ekor p ≈ erfc(|z| / √2). Contoh: |z|=1.96 → p ≈ 0.05.",
	tool_p_value_formula_item_2: "Satu ekor p ≈ dua ekor / 2. |z|=1.96 yang sama → satu ekor ≈ 0.025.",
	tool_p_value_formula_item_3: "Memakai pendekatan erfc numerik — akurasi belajar, bukan perangkat lunak tersertifikasi.",
	tool_p_value_formula_item_4: "Mengasumsikan z normal baku, bukan t, χ², atau uji eksak diskrit.",
	tool_p_value_formula_item_5: "z = 0 → dua ekor p = 1; |z| lebih besar → p lebih kecil.",

	tool_p_value_example_title: "Contoh terhitung",
	tool_p_value_example:
		"Muat contoh dimulai dengan z=1.96 dua ekor → p≈0.05. Berikutnya menampilkan setengah satu ekor ≈0.025. Lalu z=0 → p=1. Contoh terakhir memakai z=2.576 (kira-kira nilai kritis dua ekor 1%).",

	tool_p_value_usecases_title: "Kapan memakai kalkulator nilai-p",
	tool_p_value_usecase_1: "PR: ubah z yang sudah diketahui menjadi perkiraan p ekor normal.",
	tool_p_value_usecase_2: "Cek cepat setelah menghitung z dari rata-rata dan SD di halaman skor-z terkait.",
	tool_p_value_usecase_3: "Bandingkan aturan jempol 1.96 ↔ 0.05 dengan keluaran numerik.",
	tool_p_value_usecase_4: "Lihat satu ekor vs dua ekor berdampingan untuk |z| yang sama.",

	tool_p_value_faq_q1: "Ini satu ekor atau dua ekor?",
	tool_p_value_faq_a1:
		"Keduanya. Pilih mode. Dua ekor mencakup ±|z|; satu ekor adalah setengahnya pada normal simetris.",
	tool_p_value_faq_q2: "Distribusi apa yang diasumsikan?",
	tool_p_value_faq_a2:
		"Normal baku kontinu untuk z. Bukan kalkulator uji-t, χ², atau binomial eksak.",
	tool_p_value_faq_q3: "Mengapa z = 1.96 mendekati 0.05?",
	tool_p_value_faq_a3:
		"Pada normal baku, |z| ≈ 1.96 adalah nilai kritis familiar untuk uji dua ekor 5%; pendekatan erfc menghasilkan sekitar 0.05.",
	tool_p_value_faq_q4: "Apakah p kecil membuktikan hipotesis alternatif?",
	tool_p_value_faq_a4:
		"Tidak. Nilai-p adalah peluang ekor di bawah asumsi yang dinyatakan, bukan bukti otomatis suatu klaim.",
	tool_p_value_faq_q5: "Bagaimana hubungan satu ekor dengan dua ekor di sini?",
	tool_p_value_faq_a5:
		"Untuk normal simetris, satu ekor p ≈ dua ekor p ÷ 2 untuk |z| yang sama.",
	tool_p_value_faq_q6: "Bolehkah memasukkan z negatif?",
	tool_p_value_faq_a6:
		"Ya. Halaman memakai |z|, jadi −1.96 dan 1.96 memberi nilai-p dua ekor yang sama.",
	tool_p_value_faq_q7: "Dari mana mendapat skor-z terlebih dulu?",
	tool_p_value_faq_a7:
		"Pakai kalkulator skor-z terkait jika Anda mulai dari skor mentah, rata-rata, dan SD.",

	tool_p_value_disclaimer:
		"Pendekatan edukatif di bawah model normal baku saja — bukan pengganti perangkat lunak statistik, desain studi, atau analisis profesional.",
	tool_p_value_references:
		"Wikipedia nilai-p dan distribusi normal; fungsi error komplementer untuk ekor normal.",
	tool_p_value_ref_pvalue_label: "Wikipedia — Nilai-p (P-value)",
	tool_p_value_ref_normal_label: "Wikipedia — Distribusi normal",
};

export default id;
