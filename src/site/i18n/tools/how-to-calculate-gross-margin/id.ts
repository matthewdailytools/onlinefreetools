/**
 * i18n tool shard (how-to-calculate-gross-margin / id).
 * Bahasa Indonesia: margin kotor / laba kotor — rewrite mandiri.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_gross_margin_title: 'Kalkulator margin kotor — Laba kotor dan persentase',
	tool_gross_margin_description:
		'Hitung laba kotor dan margin kotor (%) dari pendapatan dan harga pokok penjualan (HPP/COGS). Contoh: pendapatan 10.000, HPP 6.000 → laba 4.000 dan margin 40%. Di browser; hanya edukasi — bukan saran bisnis atau investasi.',
	tool_gross_margin_article:
		'Margin kotor menunjukkan berapa bagian pendapatan yang tersisa setelah HPP. Halaman ini menyatukan laba kotor dan margin % di satu URL edukatif; margin bersih atau operasional ada di alat lain.',
	tool_gross_margin_calculate: 'Hitung',
	tool_gross_margin_sample: 'Muat contoh',
	tool_gross_margin_clear: 'Kosongkan',
	tool_gross_margin_revenue_label: 'Pendapatan (penjualan)',
	tool_gross_margin_revenue_ph: 'mis. 10000',
	tool_gross_margin_cogs_label: 'Harga pokok penjualan (HPP/COGS)',
	tool_gross_margin_cogs_ph: 'mis. 6000',
	tool_gross_margin_result_profit: 'Laba kotor',
	tool_gross_margin_result_margin: 'Margin kotor',
	tool_gross_margin_result_note: 'Hanya ilustrasi edukasi — bukan saran bisnis atau investasi.',
	tool_gross_margin_err_revenue: 'Pendapatan harus lebih besar dari nol.',
	tool_gross_margin_err_cogs: 'HPP harus nol atau angka positif.',
	tool_gross_margin_how_title: 'Cara kerja',
	tool_gross_margin_how_body:
		'Masukkan pendapatan dan HPP. Alat menghitung laba kotor dan margin %. Markup vs margin serta laba bersih ada di FAQ atau alat terkait — tanpa URL pintu.',
	tool_gross_margin_formula_title: 'Rumus dan asumsi',
	tool_gross_margin_formula_body:
		'Laba kotor = Pendapatan − HPP. Margin kotor % = (Laba kotor ÷ Pendapatan) × 100. Asumsi:',
	tool_gross_margin_formula_item_1: 'Pendapatan dan HPP memakai periode dan mata uang yang sama; pajak dan biaya operasi tidak dimodelkan.',
	tool_gross_margin_formula_item_2: 'HPP hanya biaya produk — SG&A dan bunga di luar cakupan.',
	tool_gross_margin_formula_item_3: 'Hasil adalah ilustrasi edukasi, bukan prakiraan atau saran.',
	tool_gross_margin_example_title: 'Contoh',
	tool_gross_margin_example:
		'Contoh: pendapatan 10.000, HPP 6.000 → laba kotor 4.000 → margin kotor 40%.',
	tool_gross_margin_usecases_title: 'Kapan dipakai',
	tool_gross_margin_usecase_1: 'Kelas: latihan rumus margin kotor dengan pendapatan dan HPP tetap.',
	tool_gross_margin_usecase_2: 'Sketsa margin produk sebelum bicara ke penasihat (hanya ilustrasi).',
	tool_gross_margin_usecase_3: 'Lihat laba dan margin % sekaligus tanpa URL markup terpisah.',
	tool_gross_margin_faq_q1: 'Rumus margin kotor apa yang dipakai?',
	tool_gross_margin_faq_a1:
		'Laba kotor = Pendapatan − HPP. Margin kotor % = Laba kotor ÷ Pendapatan × 100.',
	tool_gross_margin_faq_q2: 'Bagaimana jika HPP lebih besar dari pendapatan?',
	tool_gross_margin_faq_a2:
		'Laba dan margin menjadi negatif. Model mengizinkan kasus rugi — tetap bukan saran.',
	tool_gross_margin_faq_q3: 'Apakah ini saran bisnis?',
	tool_gross_margin_faq_a3:
		'Tidak. Angka hanya ilustrasi edukasi dan bukan saran pajak, bisnis, atau investasi.',
	tool_gross_margin_faq_q4: 'Margin kotor vs markup?',
	tool_gross_margin_faq_a4:
		'Margin membagi laba dengan pendapatan; markup membagi dengan biaya. Halaman ini fokus margin; markup hanya di FAQ.',
	tool_gross_margin_disclaimer:
		'Hasil margin kotor hanyalah ilustrasi edukasi dan bukan saran bisnis, keuangan, pajak, atau investasi. Bisnis nyata punya biaya, pajak, dan klasifikasi biaya yang tidak dimodelkan di sini.',
	tool_gross_margin_references:
		'Definisi Investopedia untuk gross margin dan gross profit; rumus standar (Pendapatan − HPP) / Pendapatan.',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default id;
