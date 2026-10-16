/**
 * Shard i18n alat (how-to-calculate-z-score / id).
 * Skor mentah ↔ skor-z dengan z = (x − mean) / SD; langkah kerja dan penjaga SD > 0.
 * Hanya edukasi — bukan uji kenormalan atau p-value.
 */
import type { SiteLangDict } from '../../../types';

/** Indonesia: kalkulator skor-z / skor standar */
const id: SiteLangDict = {
	tool_z_score_title: "Kalkulator skor-z — Skor mentah ↔ skor standar",
	tool_z_score_description:
		"Ubah skor mentah menjadi skor-z lewat z = (x − mean) / simpangan baku, atau balik skor-z menjadi nilai mentah. Contoh: x = 85, mean = 70, SD = 10 → z = 1,5. SD harus > 0. Hanya penskalaan linear untuk belajar — bukan uji kenormalan maupun p-value.",
	tool_z_score_article:
		"Hitung skor standar dari nilai mentah, mean, dan SD, atau pulihkan skor mentah dari z, dengan langkah kerja yang terlihat.",
	tool_z_score_desc:
		"Skor mentah ↔ skor-z dengan z = (x − mean) / SD. Menampilkan langkah dan |z|.",

	tool_z_score_mode_label: "Apa yang ingin Anda cari?",
	tool_z_score_mode_z: "Skor-z dari skor mentah",
	tool_z_score_mode_x: "Skor mentah dari skor-z",
	tool_z_score_hint:
		"Masukkan mean dan simpangan baku positif. Pilih apakah Anda mulai dari skor mentah atau dari z.",
	tool_z_score_x_label: "Skor mentah (x)",
	tool_z_score_x_ph: "mis. 85",
	tool_z_score_z_label: "Skor-z (z)",
	tool_z_score_z_ph: "mis. 1,5",
	tool_z_score_mean_label: "Mean (μ)",
	tool_z_score_mean_ph: "mis. 70",
	tool_z_score_sd_label: "Simpangan baku (σ)",
	tool_z_score_sd_ph: "mis. 10",
	tool_z_score_calculate: "Hitung",
	tool_z_score_sample: "Muat contoh",
	tool_z_score_clear: "Hapus",
	tool_z_score_zOut_label: "Skor-z",
	tool_z_score_xOut_label: "Skor mentah",
	tool_z_score_diffOut_label: "x − mean",
	tool_z_score_absOut_label: "|z| (berapa SD dari mean)",
	tool_z_score_steps_title: "Langkah",
	tool_z_score_step_z_tpl: "z = (x − mean) / SD = ({x} − {mean}) / {sd} = {z}.",
	tool_z_score_step_x_tpl: "x = mean + z × SD = {mean} + {z} × {sd} = {x}.",
	tool_z_score_step_diff_tpl: "Selisih dari mean: x − mean = {x} − {mean} = {diff}.",
	tool_z_score_step_abs_tpl: "Jarak dalam SD: |z| = |{z}| = {abs}.",
	tool_z_score_result_note:
		"Aljabar z tidak mensyaratkan normalitas; banyak pemakaian lanjutan (p-value normal) justru memerlukannya. Hanya edukasi — bukan perangkat lunak statistik atau desain studi.",
	tool_z_score_err_generic:
		"Masukkan angka hingga untuk kolom aktif, dan simpangan baku lebih dari 0 (misalnya x=85, mean=70, SD=10).",

	tool_z_score_how_title: "Cara memakai kalkulator skor-z",
	tool_z_score_how_body:
		"Pilih mentah→z atau z→mentah, isi mean dan SD > 0, lalu Hitung. Muat contoh bergilir 85/70/10 → 1,5, balik 1,5 → 85, mean sama dengan x → 0, lalu skor di bawah mean.",
	tool_z_score_how_item_1: "Pilih Skor-z dari skor mentah atau Skor mentah dari skor-z.",
	tool_z_score_how_item_2: "Masukkan mean dan simpangan baku positif.",
	tool_z_score_how_item_3: "Isi skor mentah atau skor-z sesuai mode.",
	tool_z_score_how_item_4: "Klik Hitung untuk melihat jawaban, x−mean, |z|, dan baris langkah.",

	tool_z_score_why_choose_title: "Apa yang diberikan kalkulator skor-z ini",
	tool_z_score_why_choose_item_1: "Dua arah: skor mentah → z, atau z → skor mentah.",
	tool_z_score_why_choose_item_2: "Baris langkah yang memasukkan angka Anda ke z = (x − μ) / σ.",
	tool_z_score_why_choose_item_3: "Penjaga SD > 0 yang jelas agar pembagian nol tidak pernah dijalankan.",
	tool_z_score_why_choose_item_4: "|z| ditampilkan sebagai berapa simpangan baku dari mean.",
	tool_z_score_why_choose_item_5: "Batas jujur: penskalaan linear saja — bukan uji kenormalan atau p-value.",

	tool_z_score_formula_title: "Rumus skor-z",
	tool_z_score_formula_body:
		"Skor-z (skor standar) menskalakan ulang suatu nilai relatif terhadap mean dan simpangan baku yang dinyatakan. Satuan saling hapus; z tanpa dimensi.",
	tool_z_score_formula_item_1: "z = (x − μ) / σ. Contoh: (85 − 70) / 10 = 1,5.",
	tool_z_score_formula_item_2: "x = μ + z × σ. Contoh: 70 + 1,5 × 10 = 85.",
	tool_z_score_formula_item_3: "σ harus positif; SD nol atau negatif ditolak.",
	tool_z_score_formula_item_4: "z = 0 bila x sama dengan mean; z negatif berarti di bawah mean.",
	tool_z_score_formula_item_5:
		"Aljabar tidak mensyaratkan normalitas; p-value ekor normal memerlukannya — gunakan halaman p-value terkait.",

	tool_z_score_example_title: "Contoh terhitung",
	tool_z_score_example:
		"Muat contoh dimulai dengan x=85, mean=70, SD=10 → z=1,5. Berikutnya membalik z=1,5 menjadi x=85. Lalu x=mean → z=0. Contoh terakhir memakai x=55 → z=−1,5 (satu setengah SD di bawah mean).",

	tool_z_score_usecases_title: "Kapan memakai kalkulator skor-z",
	tool_z_score_usecase_1: "PR: ubah nilai ujian menjadi skor standar dengan langkah yang terlihat.",
	tool_z_score_usecase_2: "Bandingkan skor dari sebaran dengan mean atau sebaran berbeda.",
	tool_z_score_usecase_3: "Pulihkan skor mentah bila Anda sudah tahu z, mean, dan SD.",
	tool_z_score_usecase_4: "Siapkan z untuk dimasukkan ke pemeriksaan p-value ekor normal terpisah.",

	tool_z_score_faq_q1: "Arti z = 1,5?",
	tool_z_score_faq_a1: "Skor mentah berada 1,5 simpangan baku di atas mean yang dinyatakan.",
	tool_z_score_faq_q2: "Bolehkah SD nol?",
	tool_z_score_faq_a2: "Tidak. Pembagian nol tidak terdefinisi; masukkan SD > 0.",
	tool_z_score_faq_q3: "Bagaimana mengubah skor-z kembali ke skor mentah?",
	tool_z_score_faq_a3: "Gunakan x = mean + z × SD. Contoh: 70 + 1,5 × 10 = 85.",
	tool_z_score_faq_q4: "Apakah ini mengasumsikan distribusi normal?",
	tool_z_score_faq_a4:
		"Aljabar z tidak mensyaratkan normalitas, tetapi banyak pemakaian lanjutan (seperti p-value normal) memerlukannya.",
	tool_z_score_faq_q5: "Apakah |z| besar otomatis signifikan secara statistik?",
	tool_z_score_faq_a5:
		"Tidak dengan sendirinya. Signifikansi membutuhkan model serta p-value atau nilai kritis — bukan hanya angka z.",
	tool_z_score_faq_q6: "Bagaimana jika x sama dengan mean?",
	tool_z_score_faq_a6: "Maka z = 0. Skor tepat di pusat distribusi yang dinyatakan.",
	tool_z_score_faq_q7: "Di mana saya mendapat p-value dari z?",
	tool_z_score_faq_a7:
		"Gunakan kalkulator p-value terkait setelah Anda punya z. Halaman ini hanya melakukan transformasi linear z.",

	tool_z_score_disclaimer:
		"Hanya edukasi: z = (x − mean) / SD. Bukan pengganti perangkat lunak statistik, uji kenormalan, atau desain studi.",
	tool_z_score_references: "Wikipedia skor standar dan simpangan baku untuk konteks edukasi.",
	tool_z_score_ref_z_label: "Wikipedia — Skor standar",
	tool_z_score_ref_sd_label: "Wikipedia — Simpangan baku",
};

export default id;
