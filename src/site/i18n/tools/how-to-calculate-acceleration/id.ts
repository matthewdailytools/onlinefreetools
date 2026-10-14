/**
 * i18n tool shard (how-to-calculate-acceleration / id).
 * Versi Indonesia (koma desimal): cara menghitung percepatan dengan rumus a=(v−v0)/t;
 * cari a, v, v0 atau t beserta langkah perhitungan. Ditulis mandiri berdasarkan 03-locale-briefs (id).
 */
import type { SiteLangDict } from '../../../types';

/** Kamus bahasa Indonesia untuk kalkulator percepatan; set kunci sama dengan en.ts. */
const id: SiteLangDict = {
	tool_acceleration_title: "Kalkulator Percepatan — dari Perubahan Kecepatan terhadap Waktu",
	tool_acceleration_description:
		"Hitung percepatan konstan dengan rumus a = (v − v0) ÷ t, atau balik rumusnya untuk mencari kecepatan akhir, kecepatan awal, maupun waktu. Contoh: dari 0 ke 10 dalam 2 detik → a = 5. Setiap langkah perhitungan ikut ditampilkan.",
	tool_acceleration_calculate: "Hitung",
	tool_acceleration_sample: "Muat contoh",
	tool_acceleration_clear: "Hapus",
	tool_acceleration_solve_label: "Yang dicari",
	tool_acceleration_solve_a: "Percepatan (a)",
	tool_acceleration_solve_v: "Kecepatan akhir (v)",
	tool_acceleration_solve_v0: "Kecepatan awal (v0)",
	tool_acceleration_solve_t: "Waktu (t)",
	tool_acceleration_v0_label: "Kecepatan awal v0",
	tool_acceleration_v0_ph: "mis. 0",
	tool_acceleration_v_label: "Kecepatan akhir v",
	tool_acceleration_v_ph: "mis. 10",
	tool_acceleration_t_label: "Waktu t",
	tool_acceleration_t_ph: "mis. 2",
	tool_acceleration_a_label: "Percepatan a",
	tool_acceleration_a_ph: "mis. 5",
	tool_acceleration_accOut_label: "Percepatan",
	tool_acceleration_vOut_label: "Kecepatan akhir",
	tool_acceleration_v0Out_label: "Kecepatan awal",
	tool_acceleration_tOut_label: "Waktu",
	tool_acceleration_work_label: "Langkah perhitungan",
	tool_acceleration_result_note:
		"Berlaku untuk gerak lurus berubah beraturan (percepatan tetap). Gunakan satuan kecepatan dan waktu yang sepadan (m/s dan s menghasilkan m/s²). Nilai a negatif berarti benda melambat, asalkan kedua kecepatan diukur dengan arah positif yang sama.",
	tool_acceleration_err_finite: "Isi setiap kolom yang terlihat dengan angka yang valid.",
	tool_acceleration_err_time: "Waktu harus lebih besar dari 0.",
	tool_acceleration_err_zero_a: "Waktu tidak bisa dihitung jika a = 0 (pembagian dengan nol).",
	tool_acceleration_how_title: "Cara menghitung percepatan",
	tool_acceleration_how_body:
		"Percepatan adalah perubahan kecepatan dibagi waktu: a = (v − v0) ÷ t. Pilih besaran yang belum diketahui, isi tiga besaran lainnya, lalu kalkulator menyusun ulang rumus yang sama untuk Anda.",
	tool_acceleration_how_item_1:
		"Pada menu “Yang dicari”, pilih percepatan, kecepatan akhir, kecepatan awal, atau waktu.",
	tool_acceleration_how_item_2:
		"Isi semua kolom yang muncul dengan satu sistem satuan yang konsisten — paling mudah memakai SI (m/s dan s).",
	tool_acceleration_how_item_3: "Klik “Hitung”.",
	tool_acceleration_how_item_4:
		"Baca hasil beserta baris langkah perhitungannya, misalnya a = (10 − 0) ÷ 2 = 5.",
	tool_acceleration_why_choose_title: "Kenapa memakai Kalkulator Percepatan ini",
	tool_acceleration_why_choose_item_1:
		"Bisa mulai dari data yang ada di soal: satu rumus, empat besaran yang dapat dicari — bukan hanya kolom a.",
	tool_acceleration_why_choose_item_2:
		"Model fisikanya jelas: percepatan tetap pada lintasan lurus (GLBB), bukan percepatan yang berubah-ubah atau gerak melingkar.",
	tool_acceleration_why_choose_item_3:
		"Langkah perhitungan ditampilkan lengkap, sehingga (v − v0) ÷ t atau v = v0 + a × t bisa langsung disalin ke buku tugas.",
	tool_acceleration_why_choose_item_4:
		"Kasus yang mustahil diberi tahu dengan jelas: t ≤ 0, atau a = 0 saat yang dicari adalah waktu.",
	tool_acceleration_why_choose_item_5:
		"Perhitungan berjalan di browser Anda; angka yang dimasukkan tetap di perangkat dan tidak dikirim ke server.",
	tool_acceleration_formula_title: "Rumus percepatan dan turunannya",
	tool_acceleration_formula_body:
		"Untuk percepatan tetap berlaku a = (v − v0) ÷ t. Persamaan yang sama bisa dibalik untuk mencari besaran lain tanpa mengubah fisikanya.",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t. Contoh: (10 − 0) ÷ 2 = 5.",
	tool_acceleration_formula_item_2: "v = v0 + a × t. Contoh: 0 + 5 × 2 = 10.",
	tool_acceleration_formula_item_3: "v0 = v − a × t. Contoh: 10 − 5 × 2 = 0.",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a, hanya jika a ≠ 0. Contoh: (10 − 0) ÷ 5 = 2.",
	tool_acceleration_example_title: "Contoh soal",
	tool_acceleration_example:
		"Sebuah benda bergerak dari keadaan diam hingga kecepatannya 10 dalam 2 satuan waktu. Mencari a: a = (10 − 0) ÷ 2 = 5. Ganti ke “Kecepatan akhir”, isi v0 = 0, a = 5, t = 2, dan hasilnya v = 10 — gerak yang sama, dihitung dari arah sebaliknya.",
	tool_acceleration_usecases_title: "Kapan kalkulator ini berguna",
	tool_acceleration_usecase_1:
		"Mengecek jawaban dari buku paket langkah demi langkah dengan perhitungan sendiri.",
	tool_acceleration_usecase_2:
		"Mengerjakan PR fisika tentang gerak lurus berubah beraturan (GLBB).",
	tool_acceleration_usecase_3:
		"Membuktikan apakah mobil yang melaju dari 0 ke 20 m/s dalam 4 s memang memiliki percepatan rata-rata 5 m/s².",
	tool_acceleration_usecase_4:
		"Menghitung berapa lama perlambatan tetap membuat kendaraan berhenti total.",
	tool_acceleration_faq_q1: "Bagaimana cara menghitung percepatan?",
	tool_acceleration_faq_a1:
		"Kurangi kecepatan akhir dengan kecepatan awal, lalu bagi dengan waktu: a = (v − v0) ÷ t. Dari 0 ke 10 m/s dalam 2 detik, percepatannya 5 m/s².",
	tool_acceleration_faq_q2: "Satuan apa yang harus dipakai?",
	tool_acceleration_faq_a2:
		"Satuan apa pun asalkan konsisten. Meter dan detik menghasilkan m/s². Mencampur km/jam dengan detik tanpa dikonversi dulu (km/jam ÷ 3,6 = m/s) akan memberi hasil yang salah.",
	tool_acceleration_faq_q3: "Apakah percepatan gravitasi 9,8 m/s²?",
	tool_acceleration_faq_a3:
		"Di dekat permukaan Bumi, jika hambatan udara diabaikan, biasanya dipakai g ≈ 9,8 m/s². Bila arah ke atas dianggap positif, masukkan a = −9,8 untuk mencari kecepatan atau waktu pada gerak jatuh bebas.",
	tool_acceleration_faq_q4: "Apa artinya percepatan bernilai negatif?",
	tool_acceleration_faq_a4:
		"Itu perlambatan, atau percepatan yang berlawanan dengan arah positif yang Anda pilih. Jika kecepatan turun dari 20 ke 10 m/s dalam 2 s, maka a = (10 − 20) ÷ 2 = −5 m/s².",
	tool_acceleration_faq_q5: "Bisakah dipakai untuk gerak melingkar?",
	tool_acceleration_faq_a5:
		"Tidak. Kalkulator ini untuk percepatan tetap pada lintasan lurus. Percepatan sentripetal bergantung pada kelajuan dan jari-jari, dengan rumus yang berbeda.",
	tool_acceleration_faq_q6: "Apa bedanya percepatan dengan kecepatan rata-rata?",
	tool_acceleration_faq_a6:
		"Kecepatan rata-rata adalah jarak dibagi waktu. Percepatan menunjukkan seberapa cepat kecepatan itu sendiri berubah. Jika hanya perlu kecepatan dari jarak dan waktu, gunakan kalkulator kecepatan.",
	tool_acceleration_faq_q7: "Mengapa waktu tidak bisa dihitung saat a = 0?",
	tool_acceleration_faq_a7:
		"Jika a = 0, kecepatan tidak pernah berubah, sehingga t = (v − v0) ÷ a tidak terdefinisi. Artinya, v0 dan v memang sudah sama, atau percepatannya sebenarnya tidak nol.",
	tool_acceleration_article: "Percepatan",
	tool_acceleration_disclaimer:
		"Untuk belajar dan mengecek PR. Mengasumsikan percepatan tetap pada lintasan lurus; gerak nyata bisa berbeda.",
	tool_acceleration_references:
		"Wikipedia (bahasa Inggris) — Acceleration; The Physics Hypertextbook — Equations of Motion (bahasa Inggris).",
	tool_acceleration_ref_a_label: "Wikipedia (bahasa Inggris) — Acceleration",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion (bahasa Inggris)",
};

export default id;
