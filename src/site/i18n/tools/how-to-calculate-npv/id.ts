/**
 * i18n tool shard (how-to-calculate-npv / id).
 * Bahasa Indonesia ditulis ulang secara mandiri (bukan terjemahan kaku dari Inggris).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_npv_title: 'Kalkulator NPV — Nilai sekarang bersih',
	tool_npv_description:
		'Hitung NPV (nilai sekarang bersih) dari tingkat diskonto tahunan, investasi awal, dan arus kas per tahun. Contoh: investasi 10.000 dengan diskonto 10% dan arus kas 3.000 / 4.200 / 6.800 → NPV ≈ 1.307,29. Berjalan di peramban; ilustrasi edukatif saja — bukan saran investasi.',
	tool_npv_article:
		'Nilai sekarang bersih mendiskontokan arus kas masa depan dengan tingkat tahunan yang dipilih, lalu mengurangi investasi awal. NPV positif hanya berarti, di bawah asumsi Anda, arus masuk terdiskonto melebihi arus keluar — bukan prakiraan atau rekomendasi beli.',
	tool_npv_calculate: 'Hitung',
	tool_npv_sample: 'Muat contoh',
	tool_npv_clear: 'Hapus',
	tool_npv_rate_label: 'Tingkat diskonto (% per tahun)',
	tool_npv_rate_ph: 'mis. 10',
	tool_npv_invest_label: 'Investasi awal (arus keluar)',
	tool_npv_invest_ph: 'mis. 10000',
	tool_npv_cf_label: 'Arus kas per tahun (koma atau baris baru)',
	tool_npv_cf_ph: 'mis. 3000, 4200, 6800',
	tool_npv_cf_hint: 'Masukkan CF1…CFn untuk tahun 1…n. Positif = masuk; negatif diperbolehkan.',
	tool_npv_result_label: 'NPV',
	tool_npv_result_note: 'Hanya ilustrasi edukatif — bukan saran investasi.',
	tool_npv_err_rate: 'Masukkan tingkat diskonto yang valid (% per tahun). −100% atau kurang tidak diizinkan.',
	tool_npv_err_invest: 'Investasi awal harus lebih besar dari nol.',
	tool_npv_err_cf: 'Masukkan setidaknya satu angka arus kas yang valid (dipisah koma atau baris baru).',
	tool_npv_how_title: 'Cara pakai',
	tool_npv_how_body:
		'Masukkan tingkat tahunan, investasi awal positif (arus keluar di t=0), dan daftar arus kas tahun 1…n. Alat ini mendiskontokan setiap arus kas lalu mengurangi pengeluaran awal. Perhitungan tetap di peramban dan hanya untuk belajar.',
	tool_npv_formula_title: 'Rumus dan asumsi',
	tool_npv_formula_body:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ) untuk t = 1…n, di mana r adalah tingkat tahunan dalam desimal. Ingat:',
	tool_npv_formula_item_1: 'Arus kas diperlakukan sebagai akhir tahun; waktu di dalam tahun diabaikan.',
	tool_npv_formula_item_2: 'Tingkat diskonto konstan; pajak, biaya, dan inflasi tidak dimodelkan kecuali Anda memasukkannya sendiri.',
	tool_npv_formula_item_3: 'Hasil adalah ilustrasi edukatif, bukan prakiraan atau saran investasi.',
	tool_npv_example_title: 'Contoh',
	tool_npv_example:
		'Contoh: investasi awal 10.000, diskonto 10%/tahun, arus kas 3.000 / 4.200 / 6.800 → NPV = −10000 + 3000/1,1 + 4200/1,1² + 6800/1,1³ ≈ 1.307,29.',
	tool_npv_usecases_title: 'Kapan dipakai',
	tool_npv_usecase_1: 'Saringan kasar proyek: bandingkan arus masuk terdiskonto dengan biaya awal (hanya ilustrasi).',
	tool_npv_usecase_2: 'Tugas kuliah: latih penjumlahan NPV dengan tingkat tetap dan daftar arus kas pendek.',
	tool_npv_usecase_3: 'Sketsa sebelum bertemu penasihat — bukan pengganti analisis lengkap.',
	tool_npv_faq_q1: 'Rumus NPV apa yang dipakai?',
	tool_npv_faq_a1:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ). I₀ adalah investasi awal, r tingkat tahunan desimal, CFₜ arus kas tahun 1…n.',
	tool_npv_faq_q2: 'Bedanya dengan ROI sederhana atau CAGR?',
	tool_npv_faq_a2:
		'ROI sederhana adalah persentase satu periode. CAGR mengannualisasi pertumbuhan antara dua nilai. NPV mendiskontokan rangkaian arus kas dan menghasilkan jumlah uang, bukan tingkat pertumbuhan.',
	tool_npv_faq_q3: 'Bagaimana memasukkan arus kas?',
	tool_npv_faq_a3:
		'Daftarkan jumlah tahun 1 sampai n dipisah koma atau baris baru. Positif = masuk; negatif = keluar belakangan. Minimal satu angka valid.',
	tool_npv_faq_q4: 'Apakah ini saran investasi?',
	tool_npv_faq_a4:
		'Tidak. Angka hanya ilustrasi edukatif dan bukan saran investasi, pajak, atau keuangan. NPV positif dari input Anda tidak menjamin laba nyata.',
	tool_npv_disclaimer:
		'Hasil NPV hanya ilustrasi edukatif dan bukan saran investasi, pajak, atau keuangan. Tingkat diskonto, waktu arus kas, biaya, pajak, dan risiko disederhanakan. Angka hipotetis tidak menjamin hasil masa depan.',
	tool_npv_references:
		'Definisi NPV Investopedia serta panduan nilai sekarang vs nilai sekarang bersih; rumus arus kas terdiskonto standar.',
	tool_npv_ref_npv_label: 'Investopedia — Net Present Value (NPV)',
	tool_npv_ref_pv_label: 'Investopedia — Nilai sekarang vs NPV',
};

export default id;
