/**
 * i18n tool shard (how-to-calculate-concrete / id).
 * Bahasa Indonesia: kalkulator beton / volume — rewrite mandiri.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_concrete_title: 'Kalkulator beton — Cara mengestimasi volume beton',
	tool_concrete_description:
		'Perkirakan volume beton untuk pelat, kolom, atau silinder dari panjang, lebar, dan tebal (atau diameter dan tinggi). Contoh: pelat 5 m × 4 m × 0.1 m → 2.0 m³. Jumlah kantong opsional memakai 0.015 m³ (atau 0.45 ft³) per kantong — asumsi ditampilkan di halaman. Berjalan di browser; angka tetap di perangkat dan tidak diunggah ke server.',
	tool_concrete_article:
		'Alat ini memperkirakan volume cor dengan geometri sederhana. Pilih pelat, kolom persegi panjang, atau silinder, masukkan ukuran positif dalam meter atau kaki, lalu baca m³ atau ft³. Kantong bersifat opsional dan bergantung pada volume kantong yang dijelaskan di bawah hasil.',
	tool_concrete_calculate: 'Hitung',
	tool_concrete_sample: 'Muat contoh',
	tool_concrete_clear: 'Hapus',
	tool_concrete_shape_label: 'Bentuk',
	tool_concrete_shape_slab: 'Pelat',
	tool_concrete_shape_column: 'Kolom',
	tool_concrete_shape_cylinder: 'Silinder',
	tool_concrete_unit_label: 'Satuan',
	tool_concrete_unit_m: 'Meter (m)',
	tool_concrete_unit_ft: 'Kaki (ft)',
	tool_concrete_length_label: 'Panjang',
	tool_concrete_width_label: 'Lebar',
	tool_concrete_thickness_label: 'Tebal',
	tool_concrete_height_label: 'Tinggi',
	tool_concrete_diameter_label: 'Diameter',
	tool_concrete_length_ph: 'mis. 5',
	tool_concrete_width_ph: 'mis. 4',
	tool_concrete_thickness_ph: 'mis. 0.1',
	tool_concrete_height_ph: 'mis. 2.4',
	tool_concrete_diameter_ph: 'mis. 0.3',
	tool_concrete_bags_check: 'Perkiraan jumlah kantong (opsional)',
	tool_concrete_result_volume: 'Volume',
	tool_concrete_result_bags: 'Kantong (kira-kira)',
	tool_concrete_bags_note:
		'Asumsi kantong: 0.015 m³ per kantong mode metrik, atau 0.45 ft³ mode kaki. Ukuran nyata berbeda menurut merek dan campuran — bulatkan ke atas dan konfirmasi ke pemasok.',
	tool_concrete_err_dims: 'Masukkan angka positif untuk setiap dimensi.',
	tool_concrete_how_title: 'Cara kerja',
	tool_concrete_how_body:
		'Pilih bentuk dan satuan, lalu isi dimensi. Pelat dan kolom persegi panjang memakai panjang × lebar × tebal (atau tinggi); silinder memakai π × (diameter/2)² × tinggi. Jika kantong diaktifkan, volume dibagi ukuran kantong yang tercantum lalu dibulatkan ke atas. Semua di tab browser; angka tidak diunggah ke server.',
	tool_concrete_formula_title: 'Rumus dan asumsi',
	tool_concrete_formula_body: 'Volume memakai benda geometris tertutup:',
	tool_concrete_formula_item_1: 'Pelat: V = panjang × lebar × tebal.',
	tool_concrete_formula_item_2: 'Kolom persegi panjang: V = panjang × lebar × tinggi.',
	tool_concrete_formula_item_3:
		'Silinder: V = π × (diameter ÷ 2)² × tinggi. Kantong = ceil(V ÷ volume kantong) dengan 0.015 m³ atau 0.45 ft³.',
	tool_concrete_example_title: 'Contoh',
	tool_concrete_example:
		'Contoh (pelat, meter): 5 m × 4 m × 0.1 m → V = 2.0 m³. Dengan 0.015 m³/kantong → ≈ 134 kantong.',
	tool_concrete_usecases_title: 'Kapan dipakai',
	tool_concrete_usecase_1: 'Perkiraan kasar pelat teras atau garasi sebelum pesan ready-mix.',
	tool_concrete_usecase_2: 'Menghitung beton kemasan untuk tiang pagar atau pondasi silinder kecil.',
	tool_concrete_usecase_3: 'Mencocokkan penawaran kontraktor dengan geometri P×L×T sederhana.',
	tool_concrete_faq_q1: 'Rumus mode pelat apa?',
	tool_concrete_faq_a1: 'Volume pelat = panjang × lebar × tebal. Contoh 5 × 4 × 0.1 m menghasilkan 2.0 m³.',
	tool_concrete_faq_q2: 'Bagaimana jumlah kantong dihitung?',
	tool_concrete_faq_a2:
		'Kantong = ceil(volume ÷ volume kantong). Metrik 0.015 m³; kaki 0.45 ft³. Asumsi perencanaan, bukan label merek.',
	tool_concrete_faq_q3: 'Silinder butuh jari-jari atau diameter?',
	tool_concrete_faq_a3: 'Masukkan diameter luar; jari-jari = diameter ÷ 2 dalam V = π r² h.',
	tool_concrete_faq_q4: 'Apakah angka saya diunggah?',
	tool_concrete_faq_a4: 'Tidak. Perhitungan di browser pada perangkat Anda dan tidak diunggah ke server.',
	tool_concrete_references: 'Faktor konversi NIST SP 811; panduan Portland Cement Association.',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811 (konversi satuan)',
	tool_concrete_ref_pca_label: 'Portland Cement Association — Pelajari tentang beton',
};

export default id;
