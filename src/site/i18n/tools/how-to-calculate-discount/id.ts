/**
 * Shard i18n alat (how-to-calculate-discount / id).
 * Harga setelah diskon dari persen potongan, persen antara dua harga, atau
 * balik ke harga asli; diskon kedua bertumpuk opsional. Hanya aritmetika edukatif —
 * bukan kasir toko atau mesin pajak.
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: kalkulator diskon / harga setelah potongan */
const id: SiteLangDict = {
	tool_discount_title: "Kalkulator diskon — Harga setelah potongan atau persen",
	tool_discount_description:
		"Hitung harga jual setelah diskon dari harga asli dan persen potongan, pulihkan harga daftar dari struk diskon, atau ukur persen diskon antara dua harga. Contoh: 100 diskon 20% → 80. Diskon kedua opsional diterapkan pada harga yang sudah dipotong. Aritmetika belanja edukatif — bukan kasir toko.",
	tool_discount_article:
		"Harga setelah persen diskon, persen potongan antara dua harga, atau harga asli dari total diskon, dengan diskon kedua bertumpuk opsional dan langkah kerja terlihat.",
	tool_discount_desc:
		"Harga setelah diskon, persen potongan, atau harga asli. Tumpuk diskon kedua dan lihat % efektif yang dihemat.",

	tool_discount_mode_label: "Apa yang ingin dihitung?",
	tool_discount_mode_sale: "Harga jual dari % diskon",
	tool_discount_mode_pct: "Persen diskon antara dua harga",
	tool_discount_mode_original: "Harga asli dari harga jual + % diskon",
	tool_discount_hint:
		"Pilih mode yang cocok dengan dua nilai yang sudah Anda tahu. Diskon kedua, jika diisi, mengalikan harga yang sudah dipotong (tumpuk), bukan harga asli.",
	tool_discount_original_label: "Harga asli",
	tool_discount_original_ph: "mis. 100",
	tool_discount_sale_label: "Harga jual / akhir",
	tool_discount_sale_ph: "mis. 80",
	tool_discount_pct_label: "Diskon (% potongan)",
	tool_discount_pct_ph: "mis. 20",
	tool_discount_pct2_label: "Diskon kedua % (opsional)",
	tool_discount_pct2_ph: "mis. 10",
	tool_discount_chips_label: "Pintasan persen diskon umum",
	tool_discount_chip_10: "Diskon 10%",
	tool_discount_chip_15: "Diskon 15%",
	tool_discount_chip_20: "Diskon 20%",
	tool_discount_chip_25: "Diskon 25%",
	tool_discount_chip_50: "Diskon 50%",
	tool_discount_calculate: "Hitung",
	tool_discount_sample: "Muat contoh",
	tool_discount_clear: "Hapus",
	tool_discount_finalOut_label: "Harga jual",
	tool_discount_savedOut_label: "Jumlah dihemat",
	tool_discount_pctOut_label: "Persen diskon",
	tool_discount_originalOut_label: "Harga asli",
	tool_discount_effectiveOut_label: "% diskon efektif",
	tool_discount_steps_title: "Langkah",
	tool_discount_step_sale_tpl: "Setelah diskon pertama: {original} × (1 − {pct}/100) = {mid}.",
	tool_discount_step_sale2_tpl: "Tumpuk diskon kedua: {mid} × (1 − {pct2}/100) = {final}.",
	tool_discount_step_saved_tpl: "Hemat = asli − jual = {original} − {final} = {saved}.",
	tool_discount_step_pct_tpl:
		"Persen diskon = (asli − jual) ÷ asli × 100 = ({original} − {sale}) ÷ {original} × 100 = {pct}%.",
	tool_discount_step_original_tpl:
		"Asli = jual ÷ (1 − persen/100) = {sale} ÷ (1 − {pct}/100) = {original}.",
	tool_discount_step_effective_tpl:
		"% diskon efektif = (asli − akhir) ÷ asli × 100 = ({original} − {final}) ÷ {original} × 100 = {eff}%.",
	tool_discount_result_note:
		"Diskon kedua, jika ada, diterapkan pada harga yang sudah dipotong (tumpuk). Pajak, kupon nominal tetap, dan pembulatan kasir tidak dimodelkan. Hanya edukatif — bukan checkout.",
	tool_discount_err_generic:
		"Masukkan jumlah positif yang cocok dengan mode (misalnya asli 100 dan diskon 20%, atau asli 100 dan jual 80). Persen diskon harus 0–100; balik ke harga asli membutuhkan persen di bawah 100.",

	tool_discount_how_title: "Cara memakai kalkulator diskon",
	tool_discount_how_body:
		"Pilih harga jual, persen diskon, atau harga asli. Masukkan nilai yang diketahui, opsional ketuk chip persen, lalu Hitung. Muat contoh bergilir: 100@20% → 80, persen dari 100→80, balik 80 setelah 20%, dan tumpuk 20%+10%.",
	tool_discount_how_item_1: "Pilih mode yang cocok dengan dua angka yang sudah Anda tahu.",
	tool_discount_how_item_2: "Masukkan harga asli dan/atau harga jual serta persen diskon (atau ketuk chip).",
	tool_discount_how_item_3: "Opsional: tambahkan persen kedua bertumpuk di mode harga jual.",
	tool_discount_how_item_4: "Klik Hitung untuk melihat jawaban, penghematan, dan baris langkah.",

	tool_discount_why_choose_title: "Apa yang diberikan kalkulator diskon ini",
	tool_discount_why_choose_item_1:
		"Tiga arah: harga jual dari % diskon, persen antara harga, atau asli dari total diskon.",
	tool_discount_why_choose_item_2: "Diskon kedua bertumpuk opsional dengan % gabungan efektif.",
	tool_discount_why_choose_item_3: "Baris langkah yang memasukkan angka Anda ke rumus.",
	tool_discount_why_choose_item_4: "Chip persen (10 / 15 / 20 / 25 / 50%) sebagai pintasan ketik.",
	tool_discount_why_choose_item_5:
		"Batas jelas: hanya aritmetika persen diskon — tanpa pajak, kupon tetap, atau pembulatan kasir.",

	tool_discount_formula_title: "Rumus diskon",
	tool_discount_formula_body:
		"Misalkan d = persen diskon ÷ 100. Harga jual dan balik ke asli memakai faktor (1 − d). Diskon bertumpuk mengalikan faktor beruntun.",
	tool_discount_formula_item_1: "Harga jual = asli × (1 − d). Contoh: 100 × 0.80 = 80 pada diskon 20%.",
	tool_discount_formula_item_2: "Hemat = asli − jual. Contoh yang sama → hemat 20.",
	tool_discount_formula_item_3:
		"Persen diskon = (asli − jual) ÷ asli × 100. Contoh: (100 − 80) ÷ 100 × 100 = 20%.",
	tool_discount_formula_item_4:
		"Asli dari jual = jual ÷ (1 − d). Contoh: 80 ÷ 0.80 = 100 pada diskon 20%.",
	tool_discount_formula_item_5:
		"Tumpuk: akhir = asli × (1 − d₁) × (1 − d₂). 20% lalu 10% pada 100 → 72 (efektif 28% off), bukan 30%.",

	tool_discount_example_title: "Contoh terhitung",
	tool_discount_example:
		"Muat contoh mulai dari asli 100 diskon 20% → jual 80, hemat 20. Berikutnya mengukur persen dari 100→80 (=20%). Lalu membalik jual 80 setelah 20% ke asli 100. Contoh terakhir menumpuk 20% lalu 10% pada 100 → 72 (efektif 28% off).",

	tool_discount_usecases_title: "Kapan memakai kalkulator diskon",
	tool_discount_usecase_1: "Belanja: ubah persen diskon iklan menjadi harga yang diharapkan sebelum pajak.",
	tool_discount_usecase_2: "PR sekolah: latihan diskon persen tunggal dan berturut dengan langkah terlihat.",
	tool_discount_usecase_3: "Cek struk: pulihkan harga daftar asli dari total diskon dan persen yang diketahui.",
	tool_discount_usecase_4: "Bandingkan promo bertumpuk: lihat bahwa 20% lalu 10% bukan sama dengan 30% off.",

	tool_discount_faq_q1: "Bagaimana menghitung harga jual dari persen diskon?",
	tool_discount_faq_a1:
		"Kalikan dengan (1 − persen/100). Asli 100 diskon 20% → 100 × 0.80 = 80; hemat = 20.",
	tool_discount_faq_q2: "Bagaimana diskon ganda diterapkan?",
	tool_discount_faq_a2:
		"Persen kedua mengalikan harga yang sudah didiskon, bukan harga asli. 20% lalu 10% pada 100 → 72, yaitu 28% efektif — bukan 30%.",
	tool_discount_faq_q3: "Bagaimana mencari persen diskon antara dua harga?",
	tool_discount_faq_a3:
		"Persen diskon = (asli − jual) ÷ asli × 100. Dari 100 ke 80 → diskon 20%.",
	tool_discount_faq_q4: "Bagaimana mencari harga asli setelah diskon?",
	tool_discount_faq_a4:
		"Bagi harga jual dengan (1 − persen/100). Jual 80 setelah diskon 20% → 80 ÷ 0.80 = 100.",
	tool_discount_faq_q5: "Apakah diskon 20% sama dengan membayar 20%?",
	tool_discount_faq_a5: "Tidak. Diskon 20% berarti Anda membayar 80% dari asli (kalikan 0.8).",
	tool_discount_faq_q6: "Apakah ini termasuk pajak penjualan?",
	tool_discount_faq_a6:
		"Tidak. Masukkan jumlah sebelum pajak. Gunakan halaman pajak terpisah jika perlu PPN/GST atau pajak penjualan di atasnya.",
	tool_discount_faq_q7: "Bisakah saya memasukkan kupon nominal tetap?",
	tool_discount_faq_a7:
		"Halaman ini hanya persen diskon. Kurangi kupon tetap sendiri sebelum atau sesudah hitung persen.",

	tool_discount_disclaimer:
		"Ilustrasi harga edukatif saja — bukan kasir toko, mesin pajak, atau saran keuangan.",
	tool_discount_references:
		"Ringkasan diskon Investopedia; aritmetika diskon ritel OpenStax untuk konteks edukatif.",
	tool_discount_ref_a_label: "Investopedia — Diskon (Discount)",
	tool_discount_ref_b_label: "OpenStax — Diskon, Markup, dan Pajak Penjualan",
};

export default id;
