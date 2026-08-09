/**
 * i18n tool shard (how-to-calculate-standard-deviation / id).
 * Penulisan ulang mandiri bahasa Indonesia.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_std_dev_title: 'Kalkulator simpangan baku — SD dan varians',
	tool_std_dev_description:
		'Tempel daftar angka untuk menghitung simpangan baku dan varians mode sampel (n−1) atau populasi (n). Set klasik 2, 4, 4, 4, 5, 5, 7, 9 → SD populasi = 2 (sampel ≈ 2,14). Perhitungan di browser; angka tetap di perangkat, tanpa unggah ke server.',
	tool_std_dev_article:
		'Simpangan baku menggambarkan seberapa menyebar angka di sekitar rata-rata. Pilih sampel (koreksi Bessel, ÷ n−1) jika daftar adalah sampel, atau populasi (÷ n) jika daftar adalah seluruh himpunan. Varians adalah kuadrat simpangan baku itu.',
	tool_std_dev_calculate: 'Hitung',
	tool_std_dev_sample: 'Muat contoh',
	tool_std_dev_clear: 'Hapus',
	tool_std_dev_numbers_label: 'Angka',
	tool_std_dev_numbers_ph: 'mis. 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: 'Pisahkan dengan koma, spasi, atau baris baru.',
	tool_std_dev_mode_label: 'Mode',
	tool_std_dev_mode_sample: 'Sampel (n−1)',
	tool_std_dev_mode_population: 'Populasi (n)',
	tool_std_dev_result_count: 'Jumlah',
	tool_std_dev_result_mean: 'Rata-rata',
	tool_std_dev_result_variance: 'Varians',
	tool_std_dev_result_sd: 'Simpangan baku',
	tool_std_dev_result_note_sample: 'Mode sampel memakai koreksi Bessel (bagi n−1).',
	tool_std_dev_result_note_population: 'Mode populasi membagi dengan n (himpunan penuh).',
	tool_std_dev_err_empty: 'Masukkan setidaknya satu angka valid.',
	tool_std_dev_err_sample_n: 'Simpangan baku sampel butuh minimal dua angka.',
	tool_std_dev_how_title: 'Cara kerja',
	tool_std_dev_how_body:
		'Tempel angka, pilih sampel atau populasi, lalu hitung. Alat mencari rata-rata, menjumlahkan kuadrat simpangan, membagi dengan n−1 atau n untuk varians, lalu mengambil akar untuk SD. Semua tetap di browser, tanpa unggah ke server.',
	tool_std_dev_formula_title: 'Rumus',
	tool_std_dev_formula_body:
		'Misalkan x̄ adalah rata-rata. Varians adalah rata-rata kuadrat simpangan; simpangan baku adalah akarnya:',
	tool_std_dev_formula_item_1: 'Rata-rata: x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: 'Varians sampel: s² = Σ(xᵢ − x̄)² / (n − 1); s = √s²',
	tool_std_dev_formula_item_3: 'Varians populasi: σ² = Σ(xᵢ − x̄)² / n; σ = √σ²',
	tool_std_dev_example_title: 'Contoh',
	tool_std_dev_example:
		'Untuk 2, 4, 4, 4, 5, 5, 7, 9: rata-rata 5, jumlah kuadrat 32. Populasi: σ² = 4 → σ = 2. Sampel: s² ≈ 4,571 → s ≈ 2,138. Angka “SD = 2” yang sering disebut adalah nilai populasi.',
	tool_std_dev_usecases_title: 'Kapan dipakai',
	tool_std_dev_usecase_1: 'PR: cek SD sampel vs populasi pada daftar nilai pendek.',
	tool_std_dev_usecase_2: 'Cek cepat sebaran kolom kecil sebelum membuat grafik.',
	tool_std_dev_usecase_3: 'Bandingkan volatilitas dua deret pendek dengan mode yang sama.',
	tool_std_dev_faq_q1: 'Apa beda sampel dan populasi?',
	tool_std_dev_faq_a1:
		'SD sampel membagi dengan n−1 (Bessel) untuk menaksir populasi lebih besar. SD populasi membagi dengan n bila daftar adalah seluruh himpunan.',
	tool_std_dev_faq_q2: 'Hubungan varians dan simpangan baku?',
	tool_std_dev_faq_a2:
		'Varians adalah rata-rata kuadrat simpangan dari rata-rata. Simpangan baku adalah akarnya, dalam satuan yang sama dengan data.',
	tool_std_dev_faq_q3: 'Mengapa contoh klasik menghasilkan 2?',
	tool_std_dev_faq_a3:
		'Pada himpunan itu SD populasi tepat 2; SD sampel sekitar 2,14. Buku teks sering menampilkan angka populasi.',
	tool_std_dev_faq_q4: 'Apakah angkaku diunggah?',
	tool_std_dev_faq_a4:
		'Tidak. Parsing dan hitungan berjalan di tab browser. Nilai tetap di perangkat dan tidak diunggah ke server.',
	tool_std_dev_references:
		'Artikel Wikipedia Standard deviation dan Variance; rumus pengantar sampel vs populasi.',
	tool_std_dev_ref_sd_label: 'Wikipedia — Simpangan baku',
	tool_std_dev_ref_var_label: 'Wikipedia — Varians',
};

export default id;
