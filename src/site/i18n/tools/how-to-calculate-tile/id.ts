/**
 * i18n tool shard (how-to-calculate-tile / id).
 * Bahasa Indonesia independen: kalkulator keramik / jumlah ubin.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_tile_title: 'Kalkulator keramik — Cara mengestimasi jumlah ubin',
	tool_tile_description:
		'Hitung berapa ubin yang dibutuhkan dari luas ruangan dalam m² (atau panjang × lebar), ukuran keramik dalam cm, dan persentase waste (bawaan 10%). Contoh: ruangan 12 m², ubin 30×30 cm, waste 10% → 147 keping (dibulatkan ke atas). Berjalan di browser; angka tetap di perangkat dan tidak diunggah ke server.',
	tool_tile_article:
		'Mengubah luas dan ukuran per keping menjadi jumlah pembelian. Masukkan luas atau ukuran dalam meter, ukuran ubin dalam sentimeter, lalu waste. Hasil dibulatkan ke atas untuk potongan dan pecahan.',
	tool_tile_calculate: 'Hitung',
	tool_tile_sample: 'Muat contoh',
	tool_tile_clear: 'Hapus',
	tool_tile_mode_label: 'Cara isi ukuran ruangan',
	tool_tile_mode_area: 'Luas (m²)',
	tool_tile_mode_lw: 'Panjang × lebar',
	tool_tile_area_label: 'Luas ruangan (m²)',
	tool_tile_area_ph: 'mis. 12',
	tool_tile_room_l_label: 'Panjang ruangan (m)',
	tool_tile_room_w_label: 'Lebar ruangan (m)',
	tool_tile_room_l_ph: 'mis. 4',
	tool_tile_room_w_ph: 'mis. 3',
	tool_tile_tile_l_label: 'Panjang ubin (cm)',
	tool_tile_tile_w_label: 'Lebar ubin (cm)',
	tool_tile_tile_l_ph: 'mis. 30',
	tool_tile_tile_w_ph: 'mis. 30',
	tool_tile_waste_label: 'Waste (%)',
	tool_tile_waste_ph: 'mis. 10',
	tool_tile_waste_hint: 'Bawaan 10% untuk potongan dan sedikit pecah; naikkan untuk pola diagonal.',
	tool_tile_result_tiles: 'Ubin yang dibutuhkan',
	tool_tile_result_area: 'Luas ruangan dipakai',
	tool_tile_result_tile_area: 'Luas per ubin',
	tool_tile_err_input: 'Isi luas positif (atau panjang dan lebar), ukuran ubin positif, dan waste ≥ 0.',
	tool_tile_how_title: 'Cara kerja',
	tool_tile_how_body:
		'Pilih luas atau panjang × lebar, masukkan ukuran cm dan waste. Alat mengubah ubin ke m², mengalikan luas dengan (1 + waste/100), membagi, lalu membulatkan ke atas. Semua dihitung di tab browser; tidak diunggah ke server.',
	tool_tile_formula_title: 'Rumus dan asumsi',
	tool_tile_formula_body: 'Jumlah ubin memakai luas ruangan, luas satu ubin, dan waste:',
	tool_tile_formula_item_1: 'Luas A = m² langsung, atau panjang × lebar dalam meter.',
	tool_tile_formula_item_2: 'Luas ubin a = (panjang_cm ÷ 100) × (lebar_cm ÷ 100) dalam m².',
	tool_tile_formula_item_3: 'Ubin = ceil(A × (1 + waste% ÷ 100) ÷ a). Waste bawaan 10%.',
	tool_tile_example_title: 'Contoh',
	tool_tile_example:
		'Contoh: ruangan 12 m², ubin 30×30 cm, waste 10%. Satu ubin 0,09 m². Luas dengan waste = 12 × 1,10 = 13,2 m². Ubin = ceil(13,2 ÷ 0,09) = 147.',
	tool_tile_usecases_title: 'Kapan dipakai',
	tool_tile_usecase_1: 'Memesan keramik lantai kamar mandi atau dapur sebelum ke toko.',
	tool_tile_usecase_2: 'Mengecek penawaran dinding dengan hitungan luas dan waste sederhana.',
	tool_tile_usecase_3: 'Membandingkan 30×30 cm dengan ukuran lebih besar hanya dengan mengubah ukuran ubin.',
	tool_tile_faq_q1: 'Mengapa dibulatkan ke atas?',
	tool_tile_faq_a1: 'Ubin tidak dibeli pecahan. Pembulatan ke atas mencerminkan pembelian nyata setelah potong dan pecah.',
	tool_tile_faq_q2: 'Apa arti persentase waste?',
	tool_tile_faq_a2: 'Cadangan ekstra untuk potongan, pola, dan pecahan. Bawaan 10%; pola diagonal biasanya butuh lebih.',
	tool_tile_faq_q3: 'Luas atau panjang × lebar?',
	tool_tile_faq_a3: 'Keduanya valid. Pakai luas jika sudah tahu m²; pakai panjang × lebar jika punya ukuran meter.',
	tool_tile_faq_q4: 'Apakah angka saya diunggah?',
	tool_tile_faq_a4: 'Tidak. Perhitungan di browser pada perangkat Anda dan tidak diunggah ke server.',
	tool_tile_references:
		'Faktor konversi NIST SP 811; panduan pemasangan TCNA terkait waste dan perencanaan.',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811 (konversi satuan)',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default id;
