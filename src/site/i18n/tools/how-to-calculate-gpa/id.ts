/**
 * i18n 工具分片（how-to-calculate-gpa / id）。
 * 印尼语检索向独立重写：kalkulator GPA / IPK tertimbang / SKS / poin mutu；
 * 含字母芯片、步骤行、why_choose、faq_q5–q6；教育用途，非录取决定。
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_gpa_title: "Kalkulator GPA — IPK tertimbang skala 4.0",
	tool_gpa_description: "Hitung GPA/IPK berbobot SKS pada skala 4.0 umum dari poin nilai dan SKS tiap mata kuliah. Contoh: A = 4.0 (3 SKS) dan B = 3.0 (3 SKS) → GPA 3.50. Chip huruf memasukkan poin; langkah menampilkan poin mutu. Hanya untuk pendidikan — bukan keputusan penerimaan. Berjalan di peramban Anda.",
	tool_gpa_article: "Masukkan poin nilai dan SKS per mata kuliah, atau ketuk chip huruf untuk peta 4.0 dasar. Halaman menampilkan GPA tertimbang, poin mutu, total SKS, dan baris langkah.",
	tool_gpa_desc: "GPA/IPK berbobot SKS pada skala 4.0 dengan chip huruf dan baris langkah.",

	tool_gpa_safety_banner: "Ilustrasi edukatif saja. Skala berbeda antar kampus dan wilayah. Ini bukan keputusan penerimaan, beasiswa, atau transkrip resmi.",
	tool_gpa_hint: "Satu mata kuliah per baris: poin nilai lalu SKS (koma atau spasi). SKS harus lebih dari nol. Chip huruf memasukkan peta 4.0 umum (A=4.0, A−=3.7, B+=3.3, …).",
	tool_gpa_courses_label: "Mata kuliah (poin nilai, SKS per baris)",
	tool_gpa_courses_ph: "mis. 4.0, 3",
	tool_gpa_chips_label: "Sisipkan poin huruf (peta 4.0)",
	tool_gpa_calculate: "Hitung",
	tool_gpa_sample: "Muat contoh",
	tool_gpa_clear: "Hapus",
	tool_gpa_result_label: "GPA/IPK tertimbang",
	tool_gpa_qp_label: "Poin mutu (Σ nilai × SKS)",
	tool_gpa_credits_label: "Total SKS",
	tool_gpa_courses_count_label: "Mata kuliah dihitung",
	tool_gpa_steps_title: "Langkah",
	tool_gpa_step_row_tpl: "Mata kuliah {n}: {g} × {c} = {qc}.",
	tool_gpa_step_sum_tpl: "Poin mutu = {qp}; total SKS = {credits}.",
	tool_gpa_step_gpa_tpl: "GPA = {qp} ÷ {credits} = {gpa}.",
	tool_gpa_result_note: "Mengasumsikan skala 4.0 sederhana. Plus/minus dan bobot (mis. 5.0) tidak diterapkan otomatis. Kampus dan negara berbeda — cocokkan dengan aturan transkrip Anda. Hanya edukatif.",
	tool_gpa_err_parse: "Masukkan setidaknya satu baris berupa poin nilai, SKS (misalnya 4.0, 3).",
	tool_gpa_err_credits: "Setiap mata kuliah membutuhkan SKS lebih dari nol.",

	tool_gpa_how_title: "Cara memakai kalkulator GPA",
	tool_gpa_how_body: "Cantumkan tiap mata kuliah sebagai poin nilai dan SKS, atau ketuk chip huruf lalu tambahkan SKS. Hitung menampilkan GPA tertimbang, poin mutu, dan baris langkah. Muat contoh memutar dua mata kuliah setara, poin plus/minus, dan SKS tidak sama.",
	tool_gpa_how_item_1: "Masukkan satu mata kuliah per baris: poin nilai, lalu SKS.",
	tool_gpa_how_item_2: "Opsional: ketuk chip huruf untuk menyisipkan poin 4.0 umum, lalu ketik SKS.",
	tool_gpa_how_item_3: "Klik Hitung untuk melihat GPA, poin mutu, total SKS, dan langkah.",
	tool_gpa_how_item_4: "Gunakan Muat contoh untuk memutar SKS sama, plus/minus, dan kasus SKS tidak sama.",

	tool_gpa_why_choose_title: "Yang diberikan kalkulator GPA ini",
	tool_gpa_why_choose_item_1: "GPA/IPK berbobot SKS = Σ(nilai × SKS) / Σ SKS.",
	tool_gpa_why_choose_item_2: "Chip huruf untuk peta 4.0 dasar (A sampai F).",
	tool_gpa_why_choose_item_3: "Poin mutu dan total SKS di samping GPA.",
	tool_gpa_why_choose_item_4: "Baris langkah yang memasukkan angka Anda ke rumus.",
	tool_gpa_why_choose_item_5: "Batas jelas: hanya edukatif — bukan saran penerimaan.",

	tool_gpa_formula_title: "Rumus GPA dan catatan skala 4.0",
	tool_gpa_formula_body: "GPA tertimbang mengalikan poin tiap mata kuliah dengan SKS-nya, menjumlahkan hasil itu (poin mutu), lalu membagi dengan total SKS.",
	tool_gpa_formula_item_1: "GPA = Σ (poin nilai × SKS) / Σ SKS.",
	tool_gpa_formula_item_2: "Peta 4.0 umum pada chip: A=4.0, A−=3.7, B+=3.3, B=3.0, B−=2.7, C+=2.3, C=2.0, C−=1.7, D+=1.3, D=1.0, F=0.0.",
	tool_gpa_formula_item_3: "Langkah plus/minus dan bobot honors/AP tidak diterapkan otomatis di luar peta chip.",
	tool_gpa_formula_item_4: "SKS harus positif; poin nilai harus bilangan berhingga.",
	tool_gpa_formula_item_5: "Perguruan tinggi, SMA, dan sistem daerah bisa berbeda — hasil hanya edukatif.",

	tool_gpa_example_title: "Contoh terhitung",
	tool_gpa_example: "Muat contoh dimulai dengan 4.0×3 dan 3.0×3 → poin mutu 21, SKS 6, GPA 3.50. Berikutnya memakai poin plus/minus (3.7 dan 3.3). Contoh terakhir memakai SKS tidak sama (4.0×4 dan 2.0×2) → GPA 3.33.",

	tool_gpa_usecases_title: "Kapan memakai kalkulator GPA",
	tool_gpa_usecase_1: "Perkiraan IP semester dari poin nilai dan SKS sebelum portal resmi diperbarui.",
	tool_gpa_usecase_2: "PR: berlatih rata-rata berbobot SKS pada skala 4.0.",
	tool_gpa_usecase_3: "Skenario what-if untuk perencanaan — bukan keputusan penerimaan atau beasiswa.",
	tool_gpa_usecase_4: "Ubah nilai huruf lewat peta chip, lalu sesuaikan jika kampus Anda memakai skala lain.",

	tool_gpa_faq_q1: "Rumus GPA apa yang dipakai?",
	tool_gpa_faq_a1: "GPA tertimbang = Σ (poin nilai × SKS) / Σ SKS. Masukkan poin yang sudah sesuai skala Anda, atau gunakan chip huruf untuk peta 4.0 dasar.",
	tool_gpa_faq_q2: "Apakah setiap kampus memakai skala 4.0?",
	tool_gpa_faq_a2: "Tidak. Banyak kampus AS memakai 4.0 dengan plus/minus; yang lain memakai 5.0 berbobot atau persen. Selalu ikuti aturan transkrip Anda.",
	tool_gpa_faq_q3: "Bisakah saya mencampur nilai huruf langsung?",
	tool_gpa_faq_a3: "Ketuk chip huruf untuk menyisipkan poin, lalu tambahkan SKS di baris yang sama. Atau konversi huruf sendiri jika skala Anda berbeda.",
	tool_gpa_faq_q4: "Apa itu poin mutu?",
	tool_gpa_faq_a4: "Poin mutu adalah Σ (nilai × SKS) — pembilang sebelum dibagi total SKS.",
	tool_gpa_faq_q5: "Apakah ini mencakup mata kuliah honors berbobot (5.0)?",
	tool_gpa_faq_a5: "Tidak ada pembobotan otomatis. Masukkan poin yang ditetapkan kampus Anda (misalnya 5.0) jika itu aturannya.",
	tool_gpa_faq_q6: "Apakah ini menjamin penerimaan kuliah?",
	tool_gpa_faq_a6: "Tidak. Angka ini hanya ilustrasi edukatif dan bukan keputusan penerimaan atau beasiswa.",

	tool_gpa_disclaimer: "Aritmetika GPA edukatif saja — bukan saran penerimaan, beasiswa, atau transkrip resmi. Skala berbeda antar kampus dan wilayah.",
	tool_gpa_references: "Sumber daya mahasiswa College Board; ringkasan skala penilaian akademik di Amerika Serikat.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Penilaian akademik di Amerika Serikat",
};

export default id;
