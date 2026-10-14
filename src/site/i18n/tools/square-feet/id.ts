/**
 * i18n tool shard (square-feet / id).
 * Indonesian (casual spoken): square feet ↔ meter persegi, panjang×lebar ruangan atau luas yang sudah tahu,
 * langkah hitung dan faktor NIST; koma desimal di contoh (78,97 / 11,15 / 92,90).
 * Keys must stay in exact parity with en.ts for this slug.
 */
import type { SiteLangDict } from '../../../types';

/** Teks alat bahasa Indonesia untuk slug square-feet (nada santai). */
const id: SiteLangDict = {
	tool_squarefeet_title: "Square Feet ke Meter Persegi — Konversi Luas Ruangan",
	tool_squarefeet_description:
		"Konversi square feet ke m², atau hitung luas ruangan dari panjang × lebar. Prosesnya langkah demi langkah: masukkan ukuran atau luas yang sudah tahu, pakai rumus dengan faktor NIST 1 ft² = 0.09290304 m². Contoh: 850 sq ft ≈ 78,97 m²; kamar 10×12 ft = 120 ft² ≈ 11,15 m². Ada hitungan lengkapnya.",
	tool_squarefeet_calculate: "Hitung",
	tool_squarefeet_sample: "Muat contoh",
	tool_squarefeet_clear: "Hapus",
	tool_squarefeet_mode_label: "Kamu punya apa?",
	tool_squarefeet_mode_dims: "Panjang dan lebar ruangan",
	tool_squarefeet_mode_area: "Sudah tahu luasnya",
	tool_squarefeet_dim_unit_label: "Satuan panjang",
	tool_squarefeet_unit_ft: "Kaki (ft)",
	tool_squarefeet_unit_m: "Meter (m)",
	tool_squarefeet_unit_in: "Inci (in)",
	tool_squarefeet_length_label: "Panjang",
	tool_squarefeet_length_placeholder: "mis. 10",
	tool_squarefeet_width_label: "Lebar",
	tool_squarefeet_width_placeholder: "mis. 12",
	tool_squarefeet_area_label: "Luas",
	tool_squarefeet_area_placeholder: "mis. 850",
	tool_squarefeet_area_unit_label: "Satuan luas",
	tool_squarefeet_unit_sqft: "Kaki persegi (ft²)",
	tool_squarefeet_unit_sqm: "Meter persegi (m²)",
	tool_squarefeet_sqft_label: "Kaki persegi",
	tool_squarefeet_sqm_label: "Meter persegi",
	tool_squarefeet_work_label: "Cara hitung",
	tool_squarefeet_result_note:
		"Ditampilkan dibulatkan 2 desimal. Faktor tepat: 1 ft² = 0.09290304 m² (NIST / SI). Ini luas datar saja — bukan luas hunian vs bruto, dan bukan perkiraan harga rumah.",
	tool_squarefeet_invalid_input: "Isi angka positif saja.",
	tool_squarefeet_how_title: "Cara kerjanya",
	tool_squarefeet_how_body:
		"Bisa kalikan panjang × lebar setelah kedua sisi dalam kaki, atau konversi luas yang sudah tahu pakai faktor SI tepat. Kamu selalu dapat ft² dan m² plus baris cara hitung.",
	tool_squarefeet_how_item_1:
		"Pilih panjang dan lebar ruangan kalau lagi mengukur, atau sudah tahu luasnya kalau listing sudah tulis sq ft atau m².",
	tool_squarefeet_how_item_2:
		"Untuk ukuran, pilih kaki, meter, atau inci dan isi kedua sisi dengan satuan yang sama. Untuk luas yang sudah tahu, isi angka dan apakah ft² atau m².",
	tool_squarefeet_how_item_3: "Klik Hitung.",
	tool_squarefeet_how_item_4:
		"Baca kedua satuan luas dan cara hitungnya, misalnya 10 × 12 = 120 ft², atau 850 ft² × 0.09290304 = 78,97 m².",
	tool_squarefeet_why_choose_title: "Kenapa pakai Square Feet ke Meter Persegi — Konversi Luas Ruangan di sini",
	tool_squarefeet_why_choose_item_1:
		"Jelas batasnya: bukan pembeda luas hunian vs bruto, dan bukan model harga rumah.",
	tool_squarefeet_why_choose_item_2:
		"Dua mode sesuai yang orang cari: ukuran ruangan dan luas listing yang sudah ada, misalnya 850 atau 1000 sq ft.",
	tool_squarefeet_why_choose_item_3:
		"Cara hitung ditampilkan, jadi kelihatan apakah inci dibagi 12 atau meter dikonversi dengan faktor NIST.",
	tool_squarefeet_why_choose_item_4:
		"Semua di browser; file/data tidak diunggah ke server.",
	tool_squarefeet_why_choose_item_5:
		"Pakai faktor SI tepat 1 ft² = 0.09290304 m² (bukan 0,09 atau 0,093), sesuai NIST SP 811.",
	tool_squarefeet_formula_title: "Rumus dan faktor konversi",
	tool_squarefeet_formula_body:
		"Luas dalam kaki persegi = panjang × lebar setelah kedua sisi dalam kaki. Meter persegi dari faktor tepat di bawah.",
	tool_squarefeet_formula_item_1: "Kaki: A_ft² = L × W. Contoh: 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_2: "Meter: A_ft² = (L × W) ÷ 0.09290304. Contoh: 3 m × 4 m = 12 m² ≈ 129,17 ft².",
	tool_squarefeet_formula_item_3: "Inci: konversi tiap sisi ÷ 12 dulu. Contoh: 120 in × 144 in → 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_4: "Tepat: 1 ft² = 0.09290304 m², jadi m² = ft² × 0.09290304 dan ft² = m² ÷ 0.09290304.",
	tool_squarefeet_example_title: "Contoh",
	tool_squarefeet_example:
		"Contoh kamar: 10 ft × 12 ft. Cara hitung: 10 × 12 = 120 ft² → 120 × 0.09290304 ≈ 11,15 m². Contoh luas yang sudah tahu: 850 sq ft × 0.09290304 ≈ 78,97 m² — berguna kalau listing AS mau dibandingkan dengan iklan lokal yang pakai m².",
	tool_squarefeet_usecases_title: "Kapan ini membantu",
	tool_squarefeet_usecase_1: "Bandingkan listing AS yang pakai sq ft dengan iklan lokal yang pakai m².",
	tool_squarefeet_usecase_2: "Perkiraan lantai atau karpet untuk kamar persegi panjang sebelum pesan bahan (sisakan waste sendiri).",
	tool_squarefeet_usecase_3: "Konversi angka yang sudah tahu seperti 1000 sq ft saat belanja di luar negeri atau baca denah.",
	tool_squarefeet_usecase_4: "Cek kasar cat atau renovasi kalau gambar campur kaki dan meter.",
	tool_squarefeet_faq_q1: "Bisa dipakai untuk perkiraan harga rumah?",
	tool_squarefeet_faq_a1:
		"Tidak. Konversi luas bukan valuasi, appraisal, atau model harga per square foot.",
	tool_squarefeet_faq_q2: "Bagaimana cara mencari luas kamar dalam square feet?",
	tool_squarefeet_faq_a2:
		"Ukur panjang dan lebar dengan satuan yang sama, lalu kalikan. Dalam kaki: 10 × 12 = 120 sq ft. Kalau inci, bagi tiap sisi dengan 12 dulu.",
	tool_squarefeet_faq_q3: "1 square foot berapa meter persegi?",
	tool_squarefeet_faq_a3:
		"Tepat 0.09290304 m² (NIST / SI). Jadi 100 sq ft ≈ 9,29 m², 850 sq ft ≈ 78,97 m², dan 1000 sq ft ≈ 92,90 m².",
	tool_squarefeet_faq_q4: "Bagaimana mengonversi square feet ke meter persegi?",
	tool_squarefeet_faq_a4:
		"Kalikan dengan 0.09290304. Pilih sudah tahu luasnya, masukkan nilai sq ft, dan cara hitung menampilkan perkaliannya.",
	tool_squarefeet_faq_q5: "Kamar berbentuk L bagaimana?",
	tool_squarefeet_faq_a5:
		"Pecah jadi beberapa persegi panjang, konversi satu per satu, lalu jumlahkan. Poligon tidak beraturan tidak dimodelkan di sini.",
	tool_squarefeet_faq_q6: "Apakah ini membedakan luas hunian dan luas bangunan bruto?",
	tool_squarefeet_faq_a6:
		"Tidak. Hanya konversi luas datar persegi panjang antar satuan. Definisi listing (neto/bruto) di luar alat ini.",
	tool_squarefeet_faq_q7: "Berapa waste lantai yang perlu ditambah?",
	tool_squarefeet_faq_a7:
		"Kalkulator hanya memberi luas lantai. Banyak pemasang menambah sekitar 5–10 % untuk potongan dan kesalahan; cek panduan produk bahannya.",
	tool_squarefeet_article: "Square feet",
	tool_squarefeet_disclaimer:
		"Untuk listing dan perencanaan renovasi. Bukan alat valuasi properti, dan bukan definisi luas hunian vs bruto.",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI); Wikipedia — Square foot.",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Panduan Sistem Satuan Internasional (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default id;
