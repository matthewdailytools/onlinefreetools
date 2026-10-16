/**
 * i18n tool shard (how-to-calculate-one-rep-max / id).
 * 1RM 估算：Epley / Brzycki / Lombardi 公式对比与 %1RM 训练负荷表。
 */
import type { SiteLangDict } from '../../../types';

/** 印尼语工具文案分片（一次最大重量 / 1RM）。 */
const id: SiteLangDict = {
	tool_one_rep_max_title: "Kalkulator 1RM — Perkirakan beban maksimal satu kali dari berat dan repetisi",
	tool_one_rep_max_description: "Perkirakan one-rep max (1RM) dari set submaksimal dengan rumus Epley 1RM ≈ w×(1+rep/30), dan bandingkan Brzycki serta Lombardi. Contoh: 100 untuk 5 rep → sekitar 116,7. Termasuk tabel beban %1RM. Estimasi edukatif saja — bukan pelatihan atau saran medis.",
	tool_one_rep_max_article: "Perkirakan 1RM dari berat dan rep dengan Epley, bandingkan Brzycki dan Lombardi, dan baca persen latihan dari 1RM Epley.",
	tool_one_rep_max_desc: "Perkirakan 1RM dari set submaksimal dengan Epley, Brzycki, dan Lombardi, plus tabel beban %1RM.",

	tool_one_rep_max_safety_banner: "Hanya estimasi edukatif. Jangan mencoba angkat maksimal nyata hanya dari angka ini tanpa pemanasan, spotter, dan pelatih. Bukan saran medis atau latihan.",
	tool_one_rep_max_weight_label: "Beban diangkat",
	tool_one_rep_max_weight_ph: "mis. 100",
	tool_one_rep_max_reps_label: "Rep selesai",
	tool_one_rep_max_reps_ph: "mis. 5",
	tool_one_rep_max_hint: "Pakai beban yang Anda selesaikan beberapa rep bersih dengan form baik. Angka bulat 1–12 paling cocok untuk rumus ini. Koma desimal untuk berat boleh.",
	tool_one_rep_max_calculate: "Hitung",
	tool_one_rep_max_sample: "Muat contoh",
	tool_one_rep_max_clear: "Hapus",
	tool_one_rep_max_ormOut_label: "1RM perkiraan (Epley)",
	tool_one_rep_max_pct_title: "Beban latihan dari 1RM Epley",
	tool_one_rep_max_pct_col_pct: "% dari 1RM",
	tool_one_rep_max_pct_col_load: "Beban",
	tool_one_rep_max_steps_title: "Langkah",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "Selisih rumus: {lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley: 1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}.",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}.",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi: 1RM ≈ w × r^0.1 = {w} × {r}^0.1 = {orm}.",
	tool_one_rep_max_step_pct_tpl: "Pada 80% dari 1RM Epley ({orm}): beban ≈ 0,8 × {orm} = {p80}.",
	tool_one_rep_max_result_note: "Rumus makin berbeda saat rep naik. Lebih baik set ≤10 untuk estimasi belajar. Pemanasan dulu; jangan max hanya dari angka kalkulator.",
	tool_one_rep_max_err_generic: "Masukkan berat positif dan jumlah rep bulat 1–12 (misalnya 100 dan 5).",
	tool_one_rep_max_err_high_reps: "Rumus ini tidak andal di atas sekitar 12 rep. Pakai set lebih berat dengan rep bersih lebih sedikit.",

	tool_one_rep_max_how_title: "Cara memperkirakan one-rep max",
	tool_one_rep_max_how_body: "Masukkan beban yang Anda angkat dan berapa rep bersih selesai, lalu Hitung. Anda dapat 1RM Epley, perbandingan Brzycki dan Lombardi, serta tabel persen latihan umum.",
	tool_one_rep_max_how_item_1: "Masukkan beban barbel atau dumbbell untuk set yang Anda selesaikan dengan form baik.",
	tool_one_rep_max_how_item_2: "Masukkan jumlah rep sukses (angka bulat 1–12 paling baik).",
	tool_one_rep_max_how_item_3: "Klik Hitung untuk melihat 1RM Epley plus Brzycki dan Lombardi berdampingan.",
	tool_one_rep_max_how_item_4: "Baca tabel %1RM (50%–95%) untuk beban kerja kasar, dan Muat contoh untuk berganti 100×5, 60×8, 80×3, dan satu rep nyata.",

	tool_one_rep_max_why_choose_title: "Mengapa memakai kalkulator 1RM ini",
	tool_one_rep_max_why_choose_item_1: "1RM Epley sebagai estimasi utama, dengan Brzycki dan Lombardi untuk perbandingan.",
	tool_one_rep_max_why_choose_item_2: "Baris selisih rumus agar Anda lihat sejauh mana tiga estimasi berbeda.",
	tool_one_rep_max_why_choose_item_3: "Tabel beban latihan 50%–95% dari 1RM Epley.",
	tool_one_rep_max_why_choose_item_4: "Langkah jelas yang memasukkan berat dan rep Anda ke setiap rumus.",
	tool_one_rep_max_why_choose_item_5: "Banner keamanan: hanya edukatif — bukan resep untuk mencoba angkat maksimal.",

	tool_one_rep_max_formula_title: "Rumus one-rep max",
	tool_one_rep_max_formula_body: "One-rep max (1RM) adalah beban terberat yang bisa Anda angkat sekali dengan form baik. Persamaan ini memperkirakannya dari set submaksimal.",
	tool_one_rep_max_formula_item_1: "Epley: 1RM ≈ w × (1 + r/30). Contoh: w = 100, r = 5 → 100 × (1 + 5/30) = 116,67.",
	tool_one_rep_max_formula_item_2: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r). Contoh sama → 100 × 36 ÷ 32 = 112,5. Tidak terdefinisi untuk r ≥ 37.",
	tool_one_rep_max_formula_item_3: "Lombardi: 1RM ≈ w × r^0.1. Contoh sama → 100 × 5^0.1 ≈ 117,46.",
	tool_one_rep_max_formula_item_4: "Estimasi makin berjauhan saat rep naik; pakai rep bersih lebih sedikit untuk estimasi belajar yang lebih rapat.",
	tool_one_rep_max_formula_item_5: "Persen latihan (misalnya 80% 1RM) hanya bantu perencanaan — sesuaikan kelelahan, gerakan, dan pengalaman.",

	tool_one_rep_max_example_title: "Contoh perhitungan",
	tool_one_rep_max_example: "Muat contoh mulai 100 untuk 5 rep: Epley ≈ 116,7, Brzycki 112,5, Lombardi ≈ 117,5. Lalu 60 × 8, 80 × 3, lalu satu rep nyata (135 × 1) di mana semua rumus mengembalikan 135. Jaga form ketat; hentikan set lebih awal jika teknik rusak.",

	tool_one_rep_max_usecases_title: "Kapan memakai kalkulator 1RM",
	tool_one_rep_max_usecase_1: "PR sekolah atau kelas: masukkan berat dan rep ke Epley dan tunjukkan langkahnya.",
	tool_one_rep_max_usecase_2: "Sketsa program kasar: ubah 1RM perkiraan jadi set kerja 70%–85%.",
	tool_one_rep_max_usecase_3: "Bandingkan rumus: lihat Epley, Brzycki, dan Lombardi pada set yang sama.",
	tool_one_rep_max_usecase_4: "Menghindari uji max nyata saat Anda hanya punya set submaksimal tercatat.",

	tool_one_rep_max_faq_q1: "Bagaimana menghitung 1RM dengan rumus Epley?",
	tool_one_rep_max_faq_a1: "Kalikan beban dengan (1 + rep/30). Dengan 100 untuk 5 rep: 100 × (1 + 5/30) = 116,67. Halaman ini juga menampilkan Brzycki dan Lombardi untuk perbandingan.",
	tool_one_rep_max_faq_q2: "Apa beda Epley dan Brzycki?",
	tool_one_rep_max_faq_a2: "Epley menambah rep/30 secara linear. Brzycki memakai 36/(37−rep). Untuk 100×5 yang sama, Epley ≈116,7 dan Brzycki 112,5. Keduanya tidak mengganti tes max berawasi.",
	tool_one_rep_max_faq_q3: "Berapa rep untuk estimasi yang baik?",
	tool_one_rep_max_faq_a3: "Biasanya 1–10 rep bersih. Di atas sekitar 12 rumus ini tidak andal, dan halaman ini minta set lebih berat dengan rep lebih sedikit.",
	tool_one_rep_max_faq_q4: "Apa arti 80% dari 1RM?",
	tool_one_rep_max_faq_a4: "Intensitas kerja umum: beban ≈ 0,8 × 1RM perkiraan. Untuk 1RM Epley 116,7, 80% sekitar 93,3 dalam unit yang sama.",
	tool_one_rep_max_faq_q5: "Apakah aman mencoba 1RM hasil hitungan?",
	tool_one_rep_max_faq_a5: "Tidak hanya dari halaman ini. Anggap angkanya edukatif. Max nyata butuh pemanasan, spotting, teknik baik, dan idealnya pelatih — ini bukan saran untuk max.",
	tool_one_rep_max_faq_q6: "Apakah satuan penting (kg vs lb)?",
	tool_one_rep_max_faq_a6: "Pakai satuan konsisten apa saja. Rumusnya rasio tanpa satuan; 1RM keluar dalam satuan beban yang Anda masukkan.",
	tool_one_rep_max_faq_q7: "Apakah ini saran medis atau pelatihan?",
	tool_one_rep_max_faq_a7: "Tidak. Kalkulator edukatif untuk memahami persamaan 1RM umum. Untuk keputusan latihan atau kesehatan, konsultasikan pelatih atau tenaga medis yang berkompeten.",

	tool_one_rep_max_disclaimer: "Estimasi 1RM edukatif saja — bukan pelatihan, medis, atau saran profesional. Jangan coba angkat maksimal hanya berdasarkan kalkulator ini.",
	tool_one_rep_max_references: "Deskripsi umum di buku teks dan Wikipedia untuk persamaan prediksi 1RM.",
	tool_one_rep_max_ref_a_label: "Wikipedia — One-repetition maximum",
	tool_one_rep_max_ref_b_label: "Wikipedia — Strength training",
};

export default id;
