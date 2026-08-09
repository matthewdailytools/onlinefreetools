/**
 * i18n tool shard (how-to-calculate-paint / id).
 * Indonesian rewrite for pencarian «kalkulator cat / berapa cat».
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_paint_title: 'Kalkulator cat — Cara mengestimasi kebutuhan cat',
	tool_paint_description:
		'Estimasi liter cat dari luas dinding m² (atau panjang × tinggi × jumlah dinding), lapisan, dan daya sebar m²/L (default 10). Contoh: 40 m², 2 lapisan, 10 m²/L → 8 L. Hitungan kaleng opsional memakai 3.78 L per kaleng. Berjalan di browser; angka tetap di perangkat dan tidak diunggah ke server.',
	tool_paint_article:
		'Mengubah luas dinding dan daya sebar produk menjadi perkiraan liter sebelum membeli. Masukkan luas langsung atau susun dari panjang, tinggi, dan jumlah dinding.',
	tool_paint_calculate: 'Hitung',
	tool_paint_sample: 'Muat contoh',
	tool_paint_clear: 'Hapus',
	tool_paint_mode_label: 'Cara isi dinding',
	tool_paint_mode_area: 'Luas (m²)',
	tool_paint_mode_lhw: 'Panjang × tinggi × dinding',
	tool_paint_area_label: 'Luas dinding (m²)',
	tool_paint_area_ph: 'mis. 40',
	tool_paint_len_label: 'Panjang dinding (m)',
	tool_paint_height_label: 'Tinggi dinding (m)',
	tool_paint_walls_label: 'Jumlah dinding',
	tool_paint_len_ph: 'mis. 5',
	tool_paint_height_ph: 'mis. 2.5',
	tool_paint_walls_ph: 'mis. 4',
	tool_paint_coats_label: 'Lapisan',
	tool_paint_coats_ph: 'mis. 2',
	tool_paint_coverage_label: 'Daya sebar (m²/L)',
	tool_paint_coverage_ph: 'mis. 10',
	tool_paint_coverage_hint: '10 m²/L hanya titik awal; cek label kaleng Anda.',
	tool_paint_cans_label: 'Tampilkan juga kaleng (3.78 L tiap kaleng)',
	tool_paint_result_liters: 'Cat yang dibutuhkan',
	tool_paint_result_area: 'Luas dinding dipakai',
	tool_paint_result_cans: 'Jumlah kaleng (3.78 L)',
	tool_paint_err_input: 'Masukkan luas positif (atau panjang, tinggi, dan dinding), lapisan, dan daya sebar positif.',
	tool_paint_how_title: 'Cara kerja',
	tool_paint_how_body:
		'Pilih luas atau panjang × tinggi × dinding, isi lapisan dan daya sebar. Liter = luas × lapisan ÷ daya sebar. Jika kaleng aktif, dibagi 3.78 lalu dibulatkan ke atas. Semua di tab browser; tidak diunggah ke server.',
	tool_paint_formula_title: 'Rumus dan asumsi',
	tool_paint_formula_body: 'Volume cat memakai luas, lapisan, dan daya sebar label:',
	tool_paint_formula_item_1: 'Luas A = m² langsung, atau panjang × tinggi × jumlah dinding (meter).',
	tool_paint_formula_item_2: 'Liter = A × lapisan ÷ daya sebar (m²/L). Default 10.',
	tool_paint_formula_item_3: 'Kaleng opsional = ceil(liter ÷ 3.78). 3.78 L ≈ 1 galon AS, hanya asumsi.',
	tool_paint_example_title: 'Contoh',
	tool_paint_example:
		'Contoh: 40 m², 2 lapisan, 10 m²/L. Liter = 40 × 2 ÷ 10 = 8 L. Dengan kaleng 3.78 L → ceil(8 ÷ 3.78) = 3.',
	tool_paint_usecases_title: 'Kapan dipakai',
	tool_paint_usecase_1: 'Membeli cat dinding interior sebelum ke toko.',
	tool_paint_usecase_2: 'Membandingkan satu vs dua lapisan dengan mengubah kolom lapisan.',
	tool_paint_usecase_3: 'Memeriksa penawaran kontraktor dengan hitungan luas sederhana.',
	tool_paint_faq_q1: 'Bisakah pakai panjang × tinggi × dinding?',
	tool_paint_faq_a1: 'Bisa. Jika belum tahu m², susun luas dari dimensi dan jumlah dinding di halaman yang sama.',
	tool_paint_faq_q2: 'Apa arti daya sebar m²/L?',
	tool_paint_faq_a2: 'Berapa meter persegi yang ditutupi satu liter per lapisan. Nilai 10 hanya awal; utamakan label.',
	tool_paint_faq_q3: 'Mengapa kaleng 3.78 L?',
	tool_paint_faq_a3: 'Perkiraan 1 galon AS. Membantu menghitung kaleng utuh; bukan jaminan ukuran setiap merek.',
	tool_paint_faq_q4: 'Apakah angka saya diunggah?',
	tool_paint_faq_a4: 'Tidak. Perhitungan di browser pada perangkat Anda, tanpa unggah ke server.',
	tool_paint_references: 'NIST SP 811 untuk panduan konversi panjang dan luas.',
	tool_paint_ref_nist_label: 'NIST — Special Publication 811 (konversi satuan)',
};

export default id;
