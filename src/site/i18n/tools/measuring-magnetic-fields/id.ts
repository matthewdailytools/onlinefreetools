/**
 * i18n tool shard (measuring-magnetic-fields / id).
 * Pencarian lokal: mengukur medan magnet / kekuatan medan / gauss magnet.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_measuring_magnetic_fields_title: 'Mengukur medan magnet — Kalkulator kekuatan medan',
	tool_measuring_magnetic_fields_description:
		'Mengukur medan magnet: masukkan bacaan probe Hall atau gaussmeter lalu konversi kekuatannya. Contoh: 200 G → 0,02 T. Bandingkan gauss magnet dengan tabel orde besaran, atau perkirakan medan aksial magnet batang. Perhitungan berjalan di peramban; angka tidak diunggah ke server.',
	tool_measuring_magnetic_fields_article:
		'Pilih instrumen dan letak probe dulu, baru samakan satuan. Perkiraan geometri bukan pengukuran terkalibrasi dan bukan gaya tarik dalam kilogram.',
	tool_measuring_magnetic_fields_calculate: 'Konversi',
	tool_measuring_magnetic_fields_sample: 'Contoh',
	tool_measuring_magnetic_fields_clear: 'Hapus',
	tool_measuring_magnetic_fields_estimate: 'Perkiraan medan',
	tool_measuring_magnetic_fields_convert_heading: 'Konversi bacaan alat',
	tool_measuring_magnetic_fields_estimate_heading: 'Opsional: perkirakan medan magnet',
	tool_measuring_magnetic_fields_value_label: 'Bacaan',
	tool_measuring_magnetic_fields_value_ph: 'mis. 200',
	tool_measuring_magnetic_fields_unit_label: 'Satuan di alat',
	tool_measuring_magnetic_fields_vacuum_label: 'Tampilkan juga H di vakum/udara (A/m dan oersted)',
	tool_measuring_magnetic_fields_result_t: 'Tesla (T)',
	tool_measuring_magnetic_fields_result_mt: 'Militesla (mT)',
	tool_measuring_magnetic_fields_result_ut: 'Mikrotesla (µT)',
	tool_measuring_magnetic_fields_result_nt: 'Nanotesla (nT)',
	tool_measuring_magnetic_fields_result_g: 'Gauss (G)',
	tool_measuring_magnetic_fields_result_mg: 'Miligauss (mG)',
	tool_measuring_magnetic_fields_result_kg: 'Kilogauss (kG)',
	tool_measuring_magnetic_fields_earth_line: 'Sekitar {n}× medan Bumi (~50 µT titik tengah pengajaran).',
	tool_measuring_magnetic_fields_result_h: 'H (A/m), vakum/udara',
	tool_measuring_magnetic_fields_result_oe: 'Oersted (Oe), vakum/udara',
	tool_measuring_magnetic_fields_result_note:
		'Rumus medan: 1 T = 10⁴ G. H opsional memakai B = μ₀H hanya di vakum/udara; B dan H bukan besaran yang sama.',
	tool_measuring_magnetic_fields_err_generic: 'Masukkan bacaan hingga dan tidak negatif.',
	tool_measuring_magnetic_fields_err_negative: 'Halaman ini memakai magnitudo; nilai negatif ditolak.',
	tool_measuring_magnetic_fields_err_z: 'Jarak aksial z harus ≥ 0 (mm dari muka).',
	tool_measuring_magnetic_fields_err_grade: 'Pilih grade N dari daftar (N35–N52).',
	tool_measuring_magnetic_fields_err_dims: 'Masukkan ukuran hingga dan positif dalam milimeter.',
	tool_measuring_magnetic_fields_grade_label: 'Grade NdFeB (titik tengah Br)',
	tool_measuring_magnetic_fields_shape_label: 'Bentuk',
	tool_measuring_magnetic_fields_shape_disc: 'Cakram / silinder',
	tool_measuring_magnetic_fields_shape_block: 'Balok / magnet batang',
	tool_measuring_magnetic_fields_diam_label: 'Diameter (mm)',
	tool_measuring_magnetic_fields_thick_label: 'Tebal sepanjang sumbu (mm)',
	tool_measuring_magnetic_fields_len_label: 'Panjang muka (mm)',
	tool_measuring_magnetic_fields_width_label: 'Lebar muka (mm)',
	tool_measuring_magnetic_fields_z_label: 'Jarak dari muka z (mm)',
	tool_measuring_magnetic_fields_estimate_out_t: 'B aksial (T)',
	tool_measuring_magnetic_fields_estimate_out_g: 'B aksial (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'Magnetisasi aksial seragam dan rumus cakram (balok memakai jari-jari setara). Gradien dekat muka curam: ini bukan gaussmeter terkalibrasi dan bukan gaya tarik kg.',
	tool_measuring_magnetic_fields_chart_title: 'Tabel kekuatan magnet (orde besaran)',
	tool_measuring_magnetic_fields_chart_col_source: 'Sumber',
	tool_measuring_magnetic_fields_chart_col_b: 'B khas',
	tool_measuring_magnetic_fields_chart_earth: 'Medan Bumi (cek medan lemah)',
	tool_measuring_magnetic_fields_chart_earth_b: '~25–65 µT (di sini ~50 µT sebagai titik tengah)',
	tool_measuring_magnetic_fields_chart_fridge: 'Magnet kulkas / magnet lemah (gauss)',
	tool_measuring_magnetic_fields_chart_fridge_b: '~5–50 mT (~50–500 G) dekat muka',
	tool_measuring_magnetic_fields_chart_ndfeb: 'Permukaan NdFeB (medan magnet)',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '~0,2–0,6 T khas dekat muka — bukan gaya tarik kg',
	tool_measuring_magnetic_fields_chart_mri: 'MRI (hanya orde besaran)',
	tool_measuring_magnetic_fields_chart_mri_b: '~1,5–3 T — bukan spesifikasi alat atau nasihat keselamatan',
	tool_measuring_magnetic_fields_how_title: 'Cara mengukur medan magnet',
	tool_measuring_magnetic_fields_how_body:
		'Pilih alat, letakkan probe, baca satuan, lalu konversi. Perkiraan magnet batang bersifat opsional dan tidak menggantikan meter.',
	tool_measuring_magnetic_fields_how_item_1:
		'Pilih instrumen yang cocok: gaussmeter atau probe Hall untuk magnet (mT–T); magnetometer ponsel hanya untuk medan lemah seperti ~50 µT Bumi.',
	tool_measuring_magnetic_fields_how_item_2:
		'Letakkan sensor di sumbu yang Anda pedulikan, catat jarak dari muka, dan waspadai saturasi (sensor murah mentok dekat neodimium).',
	tool_measuring_magnetic_fields_how_item_3: 'Baca angka dan satuan di alat (gauss atau tesla).',
	tool_measuring_magnetic_fields_how_item_4:
		'Tekan Konversi dan bandingkan dengan tabel. Contoh mengisi 200 G → 0,02 T.',
	tool_measuring_magnetic_fields_how_item_5:
		'Jika belum punya meter, buka Perkiraan medan dan hampiri medan cakram atau batang dari grade dan ukuran — itu perkiraan, bukan kalibrasi.',
	tool_measuring_magnetic_fields_formula_title: 'Rumus medan magnet',
	tool_measuring_magnetic_fields_formula_body:
		'Konversi memakai tesla SI sebagai poros. H hanya muncul jika vakum/udara dicentang.',
	tool_measuring_magnetic_fields_formula_item_1:
		'Rumus: 1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT; 1 G = 10⁻⁴ T; 1 kG = 0,1 T; 1 mG = 10⁻⁷ T.',
	tool_measuring_magnetic_fields_formula_item_2:
		'Kekuatan H (vakum/udara): B(T) = μ₀ H(A/m), μ₀ = 4π×10⁻⁷ N·A⁻². 1 Oe ≈ 79,577 A/m; 1 G setara 1 Oe hanya pada pendekatan itu. B dan H bukan besaran yang sama.',
	tool_measuring_magnetic_fields_formula_item_3:
		'Cakram (magnetisasi aksial seragam): B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)] dalam meter. Balok memakai R = √(panjang×lebar muka / π); bukan model elemen hingga.',
	tool_measuring_magnetic_fields_formula_item_4:
		'Fluks Φ = B A berlaku jika B seragam dan tegak lurus luas — alat ini mengeluarkan B, bukan Φ. Perkiraan memakai Br sisa, bukan pemecah momen magnet lengkap. Br grade N adalah titik tengah rentang.',
	tool_measuring_magnetic_fields_example_title: 'Contoh',
	tool_measuring_magnetic_fields_example:
		'Contoh: probe Hall membaca 200 G. Konversi → 0,02 T = 20 mT = 2×10⁴ µT = 200 G, sekitar 400× medan Bumi ~50 µT. Gauss itu berada di antara magnet kulkas dan muka NdFeB kuat.',
	tool_measuring_magnetic_fields_usecases_title: 'Kapan berguna',
	tool_measuring_magnetic_fields_usecase_1:
		'Catatan lab: gaussmeter menunjukkan 200 G dan laporan meminta tesla (mengukur medan / kekuatan medan).',
	tool_measuring_magnetic_fields_usecase_2:
		'Gauss magnet: bandingkan bacaan dengan tabel agar saturasi ponsel tidak disangka medan permukaan.',
	tool_measuring_magnetic_fields_usecase_3:
		'Medan magnet batang: perkirakan B aksial dari grade dan ukuran — bukan gaya tarik dua magnet.',
	tool_measuring_magnetic_fields_faq_q1: 'Bagaimana cara mengukur medan magnet?',
	tool_measuring_magnetic_fields_faq_a1:
		'Untuk magnet, pakai probe Hall atau gaussmeter (mT–T). Letakkan di sumbu, catat jarak, dan jaga rentang — magnetometer ponsel mudah jenuh dekat neodimium. Baca satuan lalu konversi di sini (contoh: 200 G → 0,02 T). Pengukur gaya tarik newton adalah pekerjaan lain.',
	tool_measuring_magnetic_fields_faq_q2: 'Apa rumus medan / rumus kekuatan medan?',
	tool_measuring_magnetic_fields_faq_a2:
		'Konversi B: 1 T = 10⁴ G. Di vakum atau udara, H mengikuti B = μ₀H; 1 G ≈ 1 Oe hanya pada pendekatan itu. Fluks Φ = BA tidak dihitung di sini.',
	tool_measuring_magnetic_fields_faq_q3: 'Gauss magnet versus tabel kekuatan?',
	tool_measuring_magnetic_fields_faq_a3:
		'Gauss adalah B dalam satuan itu. Tabel adalah orde besaran (Bumi, kulkas, NdFeB), bukan tabel gaya tarik kg toko.',
	tool_measuring_magnetic_fields_faq_q4: 'Apakah gaya magnet sama dengan medan?',
	tool_measuring_magnetic_fields_faq_a4:
		'Tidak. Halaman ini mengonversi dan memperkirakan B. Gaya (antara dua magnet atau F = qvB) perhitungan lain dan tidak diselesaikan.',
	tool_measuring_magnetic_fields_faq_q5: 'Bisakah saya menggambar garis medan atau medan seragam?',
	tool_measuring_magnetic_fields_faq_a5:
		'Tidak ada diagram interaktif. Secara kualitatif B aksial magnet batang turun dengan jarak. Medan seragam adalah idealisasi; magnet kulkas dan cakram sangat tidak seragam.',
	tool_measuring_magnetic_fields_disclaimer:
		'Hasil adalah konversi dan perkiraan edukatif, bukan pengukuran terkalibrasi, dan bukan nasihat medis, implan, atau MRI.',
	tool_measuring_magnetic_fields_references:
		'Brosur SI BIPM (tesla); NIST CODATA μ₀; FAQ geomagnetisme NOAA untuk orde medan Bumi.',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — Brosur SI (tesla)',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — permeabilitas magnet vakum μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — FAQ geomagnetisme',
};

export default id;
