/**
 * i18n tool shard (how-to-calculate-compound-interest / id).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_compound_interest_title: 'Kalkulator bunga majemuk — Hitung nilai masa depan',
	tool_compound_interest_description:
		'Hitung nilai masa depan bunga majemuk dari pokok, suku bunga tahunan, tahun, dan frekuensi compounding. Rumus A = P(1 + r/n)^(nt); mode bunga sederhana opsional. Contoh: 10.000 dengan 5% selama 10 tahun, compounding tahunan → sekitar 16.288,95. Dihitung di browser; hanya edukasi, bukan saran investasi.',
	tool_compound_interest_article:
		'Bunga majemuk menambahkan bunga atas bunga yang sudah terkumpul. Halaman ini menampilkan rumus diskrit standar, memungkinkan perbandingan bunga sederhana dengan input yang sama, dan menjelaskan asumsi untuk belajar serta estimasi pribadi.',
	tool_compound_interest_calculate: 'Hitung',
	tool_compound_interest_sample: 'Muat contoh',
	tool_compound_interest_clear: 'Hapus',
	tool_compound_interest_mode_label: 'Mode bunga',
	tool_compound_interest_mode_compound: 'Bunga majemuk',
	tool_compound_interest_mode_simple: 'Bunga sederhana',
	tool_compound_interest_principal_label: 'Pokok (P)',
	tool_compound_interest_principal_placeholder: 'mis. 10000',
	tool_compound_interest_rate_label: 'Suku bunga tahunan (%)',
	tool_compound_interest_rate_placeholder: 'mis. 5',
	tool_compound_interest_years_label: 'Jangka waktu (tahun)',
	tool_compound_interest_years_placeholder: 'mis. 10',
	tool_compound_interest_freq_label: 'Compounding per tahun (n)',
	tool_compound_interest_freq_1: 'Tahunan (1)',
	tool_compound_interest_freq_2: 'Semester (2)',
	tool_compound_interest_freq_4: 'Kuartalan (4)',
	tool_compound_interest_freq_12: 'Bulanan (12)',
	tool_compound_interest_freq_365: 'Harian (365)',
	tool_compound_interest_result_future: 'Nilai masa depan (A)',
	tool_compound_interest_result_interest: 'Bunga diperoleh',
	tool_compound_interest_result_note: 'Hanya ilustrasi edukatif — bukan saran investasi.',
	tool_compound_interest_err_principal: 'Pokok harus lebih besar dari nol.',
	tool_compound_interest_err_years: 'Jangka waktu dalam tahun harus lebih besar dari nol.',
	tool_compound_interest_err_rate: 'Suku bunga tahunan harus nol atau angka positif.',
	tool_compound_interest_err_overflow: 'Hasil terlalu besar. Coba periode lebih pendek atau suku bunga lebih kecil.',
	tool_compound_interest_how_title: 'Cara kerja',
	tool_compound_interest_how_body:
		'Masukkan pokok, suku bunga tahunan nominal dalam persen, dan tahun. Pada mode majemuk, pilih berapa kali bunga di-compound setiap tahun. Alat ini menghitung nilai masa depan dan bunga. Mode sederhana memakai A = P(1 + r t) dan mengabaikan frekuensi.',
	tool_compound_interest_formula_title: 'Rumus dan asumsi',
	tool_compound_interest_formula_body:
		'Majemuk: A = P (1 + r/n)^(n t), dengan r suku bunga tahunan nominal desimal dan n compounding per tahun. Sederhana: A = P (1 + r t). Perhatikan:',
	tool_compound_interest_formula_item_1:
		'Suku bunga nominal tahunan yang Anda masukkan; pajak, biaya, dan inflasi tidak dikurangkan.',
	tool_compound_interest_formula_item_2:
		'Tidak ada setoran atau penarikan selama periode — hanya pokok awal yang tumbuh.',
	tool_compound_interest_formula_item_3:
		'Frekuensi compounding mengubah pertumbuhan efektif; detail APY dirangkum di FAQ, bukan alat terpisah.',
	tool_compound_interest_formula_item_4:
		'Hasil hanya ilustrasi edukatif, bukan proyeksi atau saran investasi.',
	tool_compound_interest_example_title: 'Contoh',
	tool_compound_interest_example:
		'Contoh: pokok 10.000, suku bunga 5% per tahun, 10 tahun, compounding tahunan → A ≈ 16.288,95 dan bunga ≈ 6.288,95. Input sama dalam mode sederhana → A = 15.000.',
	tool_compound_interest_usecases_title: 'Kapan dipakai',
	tool_compound_interest_usecase_1:
		'Tabungan: perkiraan saldo masa depan jika dana lump sum majemuk pada suku bunga tertentu (hanya ilustrasi).',
	tool_compound_interest_usecase_2:
		'Pelajaran: latihan rumus bunga majemuk dengan P, r, n, dan t tetap.',
	tool_compound_interest_usecase_3:
		'Bandingkan mode: beralih ke bunga sederhana dengan input sama untuk melihat perbedaannya.',
	tool_compound_interest_faq_q1: 'Rumus bunga majemuk apa yang dipakai?',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t) dengan r suku bunga tahunan desimal dan n compounding per tahun. Bunga = A − P.',
	tool_compound_interest_faq_q2: 'Apa bedanya bunga sederhana?',
	tool_compound_interest_faq_a2:
		'Bunga sederhana memakai A = P (1 + r t) tanpa compounding. Pilih Sederhana di mode; frekuensi diabaikan.',
	tool_compound_interest_faq_q3: 'Apa arti frekuensi compounding?',
	tool_compound_interest_faq_a3:
		'n adalah berapa kali bunga ditambahkan per tahun (1 tahunan, 12 bulanan, 365 harian). Dengan suku bunga nominal sama, n lebih besar biasanya membuat saldo lebih besar.',
	tool_compound_interest_faq_q4: 'Apakah ini saran investasi?',
	tool_compound_interest_faq_a4:
		'Tidak. Angka hanya ilustrasi edukatif dan bukan saran investasi, pajak, atau keuangan.',
	tool_compound_interest_faq_q5: 'Bagaimana jika suku bunga nol?',
	tool_compound_interest_faq_a5: 'Jika suku bunga tahunan 0%, nilai masa depan sama dengan pokok dan bunga 0.',
	tool_compound_interest_disclaimer:
		'Hasil bunga majemuk dan sederhana hanya ilustrasi edukatif dan bukan saran investasi, pajak, atau keuangan. Pertumbuhan masa lalu atau hipotetis tidak menjamin hasil di masa depan.',
	tool_compound_interest_references:
		'Definisi bunga majemuk dan sederhana di Investopedia; rumus diskrit standar A = P(1 + r/n)^(nt).',
	tool_compound_interest_ref_compound_label: 'Investopedia — Bunga majemuk',
	tool_compound_interest_ref_simple_label: 'Investopedia — Bunga sederhana',
};

export default id;
