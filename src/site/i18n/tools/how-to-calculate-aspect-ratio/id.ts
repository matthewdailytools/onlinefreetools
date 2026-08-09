/**
 * i18n tool shard (how-to-calculate-aspect-ratio / id).
 * Indonesian rewrite for pencarian «rasio aspek / skala rasio».
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_aspect_ratio_title: 'Kalkulator rasio aspek — Cara menghitung dan menskalakan rasio',
	tool_aspect_ratio_description:
		'Temukan rasio aspek yang disederhanakan dari lebar × tinggi, lalu skala ke lebar (atau tinggi) target. Preset 16:9, 4:3, dan 1:1 ada di halaman yang sama. Contoh: 1920×1080 → 16:9; lebar 1280 → tinggi 720. Berjalan di browser; angka tetap di perangkat dan tidak diunggah ke server.',
	tool_aspect_ratio_article:
		'Menyederhanakan pasangan dimensi dengan FPB lalu menjaga rasio saat Anda memilih ukuran ekspor baru.',
	tool_aspect_ratio_calculate: 'Hitung',
	tool_aspect_ratio_sample: 'Muat contoh',
	tool_aspect_ratio_clear: 'Hapus',
	tool_aspect_ratio_preset_label: 'Preset (opsional)',
	tool_aspect_ratio_preset_custom: 'Kustom',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: 'Lebar',
	tool_aspect_ratio_h_label: 'Tinggi',
	tool_aspect_ratio_w_ph: 'mis. 1920',
	tool_aspect_ratio_h_ph: 'mis. 1080',
	tool_aspect_ratio_scale_mode_label: 'Skala berdasarkan',
	tool_aspect_ratio_scale_by_w: 'Lebar target',
	tool_aspect_ratio_scale_by_h: 'Tinggi target',
	tool_aspect_ratio_target_w_label: 'Lebar target',
	tool_aspect_ratio_target_h_label: 'Tinggi target',
	tool_aspect_ratio_target_w_ph: 'mis. 1280',
	tool_aspect_ratio_target_h_ph: 'mis. 720',
	tool_aspect_ratio_result_ratio: 'Rasio aspek',
	tool_aspect_ratio_result_scaled: 'Ukuran setelah skala',
	tool_aspect_ratio_err_input: 'Masukkan lebar dan tinggi positif, serta ukuran target positif untuk sisi yang Anda skalakan.',
	tool_aspect_ratio_how_title: 'Cara kerja',
	tool_aspect_ratio_how_body:
		'Isi lebar dan tinggi atau pilih preset 16:9 / 4:3 / 1:1. Alat menyederhanakan dengan FPB lalu menghitung sisi lain saat Anda menetapkan target. Semua di tab browser; angka tidak diunggah ke server.',
	tool_aspect_ratio_formula_title: 'Rumus dan asumsi',
	tool_aspect_ratio_formula_body: 'Penyederhanaan dan penskalaan memakai FPB pasangan input:',
	tool_aspect_ratio_formula_item_1: 'g = fpb(bulatkan(W), bulatkan(H)). Rasio = (W÷g):(H÷g).',
	tool_aspect_ratio_formula_item_2: 'Menurut lebar: H′ = targetW × H ÷ W. Menurut tinggi: W′ = targetH × W ÷ H.',
	tool_aspect_ratio_formula_item_3: 'Preset hanya mengisi ukuran contoh; bukan halaman terpisah.',
	tool_aspect_ratio_example_title: 'Contoh',
	tool_aspect_ratio_example:
		'Contoh: 1920×1080. fpb=120 → 16:9. Dengan lebar 1280, tinggi = 1280 × 1080 ÷ 1920 = 720.',
	tool_aspect_ratio_usecases_title: 'Kapan dipakai',
	tool_aspect_ratio_usecase_1: 'Memilih ukuran ekspor video 16:9 tanpa meregangkan gambar.',
	tool_aspect_ratio_usecase_2: 'Menyelaraskan kanvas desain ke rasio ponsel atau monitor.',
	tool_aspect_ratio_usecase_3: 'Mengubah resolusi yang sudah diketahui menjadi label rasio singkat.',
	tool_aspect_ratio_faq_q1: 'Bisakah skala menurut tinggi?',
	tool_aspect_ratio_faq_a1: 'Bisa. Pilih tinggi target; lebar dihitung dengan rasio yang sama.',
	tool_aspect_ratio_faq_q2: 'Bagaimana rasio disederhanakan?',
	tool_aspect_ratio_faq_a2: 'Lebar dan tinggi dibagi FPB setelah dibulatkan; 1920×1080 menjadi 16:9.',
	tool_aspect_ratio_faq_q3: 'Mengapa 16:9 hanya preset?',
	tool_aspect_ratio_faq_a3: 'Itu titik awal umum; menyimpannya sebagai opsi menghindari kalkulator hampir kembar.',
	tool_aspect_ratio_faq_q4: 'Apakah angka saya diunggah?',
	tool_aspect_ratio_faq_a4: 'Tidak. Perhitungan di browser pada perangkat Anda, tanpa unggah ke server.',
	tool_aspect_ratio_references: 'NIST SP 811 untuk panduan konversi panjang dan satuan.',
	tool_aspect_ratio_ref_nist_label: 'NIST — Special Publication 811 (konversi satuan)',
};

export default id;
