/**
 * i18n tool shard (unit-converter / id).
 * Bahasa Indonesia: konverter satuan — rewrite mandiri.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_unit_converter_title: 'Konverter satuan — Panjang / Massa / Suhu / Luas / Volume / Kecepatan',
	tool_unit_converter_description:
		'Ubah panjang, massa, suhu, luas, volume, dan kecepatan di satu halaman dengan faktor yang jelas. Contoh: 1 mil → 1,60934 km. Di browser; faktor edukatif — bukan alat survei atau perangkat medis.',
	tool_unit_converter_article:
		'Hub konversi menyatukan kategori umum di satu URL agar tidak membuat halaman per pasangan (cm↔inci). Alur luas dari panjang×lebar tetap di alat square-feet.',
	tool_unit_converter_calculate: 'Konversi',
	tool_unit_converter_sample: 'Muat contoh',
	tool_unit_converter_clear: 'Kosongkan',
	tool_unit_converter_value_label: 'Nilai',
	tool_unit_converter_value_ph: 'mis. 1',
	tool_unit_converter_from_label: 'Dari satuan',
	tool_unit_converter_to_label: 'Ke satuan',
	tool_unit_converter_category_label: 'Kategori',
	tool_unit_converter_cat_length: 'Panjang',
	tool_unit_converter_cat_mass: 'Massa',
	tool_unit_converter_cat_temperature: 'Suhu',
	tool_unit_converter_cat_area: 'Luas',
	tool_unit_converter_cat_volume: 'Volume',
	tool_unit_converter_cat_speed: 'Kecepatan',
	tool_unit_converter_result_label: 'Hasil',
	tool_unit_converter_result_note: 'Hanya konversi edukasi — bukan pengukuran tersertifikasi.',
	tool_unit_converter_err_value: 'Masukkan angka berhingga.',
	tool_unit_converter_err_temp: 'Suhu di bawah nol mutlak untuk skala yang dipilih.',
	tool_unit_converter_how_title: 'Cara kerja',
	tool_unit_converter_how_body:
		'Pilih kategori, nilai, serta satuan asal/tujuan. Kategori di hub ini; luas dari P×L di square-feet.',
	tool_unit_converter_formula_title: 'Faktor dan rumus suhu',
	tool_unit_converter_formula_body:
		'Kategori linear lewat satuan dasar SI. Suhu memakai rumus skala. Asumsi:',
	tool_unit_converter_formula_item_1: 'Faktor SI / umum (mis. 1 mi = 1609,344 m; galon US untuk volume).',
	tool_unit_converter_formula_item_2: '°C ↔ °F ↔ K: F = C×9/5+32; K = C+273,15; kebalikannya sesuai.',
	tool_unit_converter_formula_item_3: 'Hasil edukatif, bukan pengukuran laboratorium tersertifikasi.',
	tool_unit_converter_example_title: 'Contoh',
	tool_unit_converter_example: 'Contoh (panjang): 1 mil → 1,60934 km. Suhu: 0 °C → 32 °F.',
	tool_unit_converter_usecases_title: 'Kapan dipakai',
	tool_unit_converter_usecase_1: 'PR: km dan mil tanpa halaman baru per pasangan.',
	tool_unit_converter_usecase_2: 'Cek cepat massa atau volume saat memasak atau mengepak.',
	tool_unit_converter_usecase_3: 'Ganti skala suhu untuk catatan cuaca — bukan untuk dosis obat.',
	tool_unit_converter_faq_q1: 'Mengapa tidak satu halaman per pasangan satuan?',
	tool_unit_converter_faq_a1:
		'Ratusan URL hampir kembar mirip doorway. Hub ini mencakup pasangan umum; square-feet untuk P×L.',
	tool_unit_converter_faq_q2: 'Definisi mil dan galon yang mana?',
	tool_unit_converter_faq_a2: 'Mil internasional (1609,344 m) dan galon cair US (3,785411784 L).',
	tool_unit_converter_faq_q3: 'Bagaimana konversi suhu?',
	tool_unit_converter_faq_a3: 'Lewat °C: F = C×9/5+32 dan K = C+273,15. Di bawah nol mutlak ditolak.',
	tool_unit_converter_faq_q4: 'Sama dengan alat square-feet?',
	tool_unit_converter_faq_a4: 'Tidak. Di sini konversi satuan luas; square-feet menghitung luas dari P×L.',
	tool_unit_converter_disclaimer:
		'Hasil adalah ilustrasi edukasi dengan faktor standar. Bukan pengukuran tersertifikasi dan bukan saran survei, teknik, atau medis.',
	tool_unit_converter_references: 'Hubungan SI NIST; faktor umum; rumus °C/°F/K.',
	tool_unit_converter_ref_nist_label: 'NIST — Satuan SI',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default id;
