/**
 * i18n tool shard (svg-optimizer / id).
 * H1: pengoptimal SVG.
 */
import type { SiteLangDict } from '../../../types';

/** Teks Bahasa Indonesia. */
const id: SiteLangDict = {
	tool_svg_optimizer_article:
		'Tempel atau jatuhkan SVG, aktifkan opsi pembersihan, lihat penghematan byte dan pratinjau. Terinspirasi SVGOMG; di browser — tetap di perangkat, tanpa unggah ke server.',
	tool_svg_optimizer_choose_file: 'Pilih file SVG',
	tool_svg_optimizer_clear: 'Hapus',
	tool_svg_optimizer_copy: 'Salin',
	tool_svg_optimizer_desc:
		'Optimalkan SVG di browser dengan byte dan pratinjau; tanpa unggah ke server.',
	tool_svg_optimizer_description:
		'Pengoptimal SVG: tempel atau jatuhkan SVG, pilih opsi pembersihan, bandingkan byte asli vs optimal dengan pratinjau. Contoh: ikon sampel dimuat saat buka halaman dan menunjukkan penghematan setelah komentar/metadata editor dihapus. Salin atau unduh hasilnya. Tetap di perangkat dan tidak diunggah ke server. Ini pipeline ringan di browser, bukan SVGO penuh.',
	tool_svg_optimizer_download: 'Unduh',
	tool_svg_optimizer_drop_hint: 'Atau jatuhkan .svg di sini. Optimasi di tab ini.',
	tool_svg_optimizer_empty: 'Tempel SVG atau pilih file dulu.',
	tool_svg_optimizer_err_not_svg: 'Tidak seperti SVG. Tempel markup dengan elemen akar <svg>.',
	tool_svg_optimizer_example:
		'Muat contoh memasukkan ikon dengan komentar XML, namespace Inkscape, spasi ekstra. Semua opsi aktif menurunkan byte; pratinjau tetap sama.',
	tool_svg_optimizer_example_title: 'Contoh',
	tool_svg_optimizer_faq_a1:
		'Tidak. SVG dibaca dan dioptimalkan di tab ini. Tidak dikirim ke server kami.',
	tool_svg_optimizer_faq_a2:
		'Pipeline ringan (komentar, metadata, spasi, pembulatan, grup kosong). SVGO penuh punya lebih banyak plugin — gunakan saat perlu kedalaman itu.',
	tool_svg_optimizer_faq_a3:
		'Hapus komentar: buang <!-- … -->. Metadata editor: buang xmlns/atribut Inkscape/Sketch dan <metadata>. Lipat spasi: gabung tag. Bulatkan angka: dua desimal di path. Grup kosong: hapus <g></g> kosong.',
	tool_svg_optimizer_faq_a4:
		'Pratinjau menampilkan SVG optimal sebagai gambar di tab ini; tidak menyuntikkan markup ke DOM halaman.',
	tool_svg_optimizer_faq_q1: 'Apakah SVG diunggah?',
	tool_svg_optimizer_faq_q2: 'Bedanya dengan SVGO atau SVGOMG?',
	tool_svg_optimizer_faq_q3: 'Apa fungsi opsi?',
	tool_svg_optimizer_faq_q4: 'Apakah pratinjau aman?',
	tool_svg_optimizer_how_body:
		'Tempel atau jatuhkan SVG, sesuaikan chip pembersihan, cek byte dan pratinjau, lalu salin atau unduh. Semua lokal di browser.',
	tool_svg_optimizer_how_item_1: 'Tempel markup SVG atau jatuhkan file .svg.',
	tool_svg_optimizer_how_item_2: 'Opsi: komentar, metadata editor, spasi, desimal, grup kosong.',
	tool_svg_optimizer_how_item_3: 'Baca byte asli, optimal, dan persen hemat.',
	tool_svg_optimizer_how_item_4: 'Konfirmasi pratinjau lalu salin atau unduh optimized.svg.',
	tool_svg_optimizer_how_title: 'Cara kerja',
	tool_svg_optimizer_input_label: 'Input SVG',
	tool_svg_optimizer_input_ph: 'Tempel <svg>…</svg> di sini…',
	tool_svg_optimizer_load_sample: 'Muat contoh',
	tool_svg_optimizer_opt_collapse_whitespace: 'Lipat spasi antar tag',
	tool_svg_optimizer_opt_round_numbers: 'Bulatkan angka path ke 2 desimal',
	tool_svg_optimizer_opt_strip_comments: 'Hapus komentar XML/HTML',
	tool_svg_optimizer_opt_strip_empty: 'Hapus <g> kosong dan spasi atribut',
	tool_svg_optimizer_opt_strip_metadata: 'Buang metadata editor (Inkscape, Sketch…)',
	tool_svg_optimizer_optimize: 'Optimalkan',
	tool_svg_optimizer_options_label: 'Opsi',
	tool_svg_optimizer_output_label: 'SVG optimal',
	tool_svg_optimizer_preview_label: 'Pratinjau',
	tool_svg_optimizer_rules_body:
		'Pembersihan SVG di browser mengutamakan umpan balik instan. Tinjau sebelum rilis.',
	tool_svg_optimizer_rules_item_1:
		'Komentar dan xmlns editor biasanya aman dihapus untuk ikon produksi.',
	tool_svg_optimizer_rules_item_2:
		'Pembulatan koordinat mengecilkan file tetapi bisa menggeser stroke — cek pratinjau.',
	tool_svg_optimizer_rules_item_3:
		'Hapus grup kosong membantu ekspor Sketch/Figma; grup dengan id/transform tetap.',
	tool_svg_optimizer_rules_item_4:
		'Perlu kompres raster juga? Gunakan pengoptimal gambar untuk PNG/WebP.',
	tool_svg_optimizer_rules_title: 'Aturan yang perlu tahu',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: 'Optimal',
	tool_svg_optimizer_size_original: 'Asli',
	tool_svg_optimizer_size_saved: 'Hemat',
	tool_svg_optimizer_stats_tpl: 'Asli {orig} B → Optimal {opt} B (hemat {pct}%)',
	tool_svg_optimizer_status_copied: 'Disalin ke clipboard.',
	tool_svg_optimizer_status_done: 'Dioptimalkan — cek byte dan pratinjau.',
	tool_svg_optimizer_title: 'Pengoptimal SVG',
	tool_svg_optimizer_usecase_1: 'Kecilkan ikon dari Sketch sebelum commit ke repo.',
	tool_svg_optimizer_usecase_2: 'Bersihkan SVG inline di landing tanpa pasang SVGO.',
	tool_svg_optimizer_usecase_3: 'Buang komentar dari handoff desain dengan pratinjau sama.',
	tool_svg_optimizer_usecases_title: 'Cocok untuk',
};

export default id;
