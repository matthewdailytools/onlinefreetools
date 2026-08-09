/**
 * i18n tool shard (how-to-calculate-cagr / id).
 * Penulisan ulang mandiri bahasa Indonesia: UI lengkap, How/Formula/FAQ, dan peringatan YMYL.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_cagr_title: 'Kalkulator CAGR — Tingkat pertumbuhan tahunan majemuk',
	tool_cagr_description:
		'Hitung CAGR dari nilai awal, nilai akhir, dan jumlah tahun. Contoh: 10.000 → 16.105,10 selama 5 tahun → sekitar 10,00%. Berjalan di peramban; hanya ilustrasi edukatif — bukan saran investasi.',
	tool_cagr_article:
		'CAGR adalah tingkat tahunan konstan yang membawa nilai awal ke nilai akhir selama beberapa tahun, dengan asumsi pemajemukan sekali per tahun. Cocok untuk membandingkan pertumbuhan multi-tahun secara kasar; bukan prakiraan dan mengabaikan arus kas di tengah periode.',
	tool_cagr_calculate: 'Hitung',
	tool_cagr_sample: 'Muat contoh',
	tool_cagr_clear: 'Hapus',
	tool_cagr_begin_label: 'Nilai awal',
	tool_cagr_begin_ph: 'mis. 10000',
	tool_cagr_end_label: 'Nilai akhir',
	tool_cagr_end_ph: 'mis. 16105.10',
	tool_cagr_years_label: 'Jumlah tahun',
	tool_cagr_years_ph: 'mis. 5',
	tool_cagr_result_label: 'CAGR',
	tool_cagr_result_note: 'Hanya ilustrasi edukatif — bukan saran investasi.',
	tool_cagr_err_begin: 'Nilai awal harus lebih besar dari nol.',
	tool_cagr_err_end: 'Nilai akhir harus lebih besar dari nol.',
	tool_cagr_err_years: 'Jumlah tahun harus lebih besar dari nol.',
	tool_cagr_how_title: 'Cara memakai',
	tool_cagr_how_body:
		'Masukkan nilai awal, nilai akhir, dan tahun yang positif. Alat ini memakai rumus CAGR standar dalam persen. Nol atau negatif ditolak. Perhitungan tetap di peramban dan hanya untuk belajar.',
	tool_cagr_formula_title: 'Rumus dan asumsi',
	tool_cagr_formula_body:
		'CAGR = ((Nilai akhir ÷ Nilai awal)^(1 ÷ Tahun) − 1) × 100. Ingat asumsi berikut:',
	tool_cagr_formula_item_1: 'Pemajemukan dianggap sekali per tahun; waktu dalam tahun diabaikan.',
	tool_cagr_formula_item_2: 'Tanpa setoran atau penarikan di tengah — hanya awal, akhir, dan tahun.',
	tool_cagr_formula_item_3: 'Hasil adalah ilustrasi edukatif, bukan prakiraan atau saran investasi.',
	tool_cagr_example_title: 'Contoh',
	tool_cagr_example:
		'Contoh: awal 10.000, akhir 16.105,10, tahun 5 → CAGR = ((16105.10 / 10000)^(1/5) − 1) × 100 ≈ 10,00%.',
	tool_cagr_usecases_title: 'Kapan dipakai',
	tool_cagr_usecase_1: 'Membandingkan pertumbuhan investasi atau pendapatan multi-tahun secara tahunan (hanya ilustrasi).',
	tool_cagr_usecase_2: 'Tugas kuliah: berlatih persen CAGR dengan angka tetap.',
	tool_cagr_usecase_3: 'Sketsa kasar imbal hasil tahunan sebelum bertemu penasihat — bukan pengganti analisis lengkap.',
	tool_cagr_faq_q1: 'Rumus CAGR apa yang dipakai di sini?',
	tool_cagr_faq_a1:
		'CAGR = ((Nilai akhir ÷ Nilai awal)^(1 ÷ Tahun) − 1) × 100. Awal, akhir, dan tahun harus lebih besar dari nol.',
	tool_cagr_faq_q2: 'Apa bedanya CAGR dengan ROI sederhana?',
	tool_cagr_faq_a2:
		'ROI sederhana adalah persentase satu periode dan mengabaikan berapa tahun perubahannya. CAGR mengannualisasi pertumbuhan sesuai tahun yang Anda masukkan.',
	tool_cagr_faq_q3: 'Bagaimana jika nilai awal atau akhir nol atau negatif?',
	tool_cagr_faq_a3:
		'Keduanya harus lebih besar dari nol. Nol atau negatif membuat rumus CAGR standar tidak terdefinisi atau menyesatkan di alat ini.',
	tool_cagr_faq_q4: 'Apakah ini saran investasi?',
	tool_cagr_faq_a4:
		'Tidak. Angka hanya ilustrasi edukatif dan bukan saran investasi, pajak, atau keuangan. Pertumbuhan masa lalu atau hipotetis tidak menjamin hasil di masa depan.',
	tool_cagr_disclaimer:
		'Hasil CAGR hanya ilustrasi edukatif dan bukan saran investasi, pajak, atau keuangan. Imbal hasil masa lalu atau hipotetis tidak menjamin hasil di masa depan. Portofolio nyata menghadapi biaya, pajak, arus kas, dan risiko yang tidak dimodelkan di halaman ini.',
	tool_cagr_references:
		'Definisi dan panduan rumus CAGR di Investopedia; tingkat pertumbuhan tahunan standar ((EV/BV)^(1/n) − 1).',
	tool_cagr_ref_cagr_label: 'Investopedia — Compound Annual Growth Rate (CAGR)',
	tool_cagr_ref_formula_label: 'Investopedia — Rumus menghitung CAGR',
};

export default id;
