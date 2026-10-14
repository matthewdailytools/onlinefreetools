/**
 * i18n tool shard (flip-image / id).
 * Bahasa Indonesia: pencarian «balik gambar / cermin horizontal»;
 * tombol Balik / Unduh. Kumpulan kunci harus sama persis dengan en.ts.
 */
import type { SiteLangDict } from '../../../types';

/** Kamus teks alat (cermin H/V di Canvas tab lokal, tanpa unggah ke server). */
const id: SiteLangDict = {
	tool_flip_image_title: 'Balik gambar — cermin horizontal atau vertikal',
	tool_flip_image_desc:
		'Cerminkan foto kiri-kanan atau atas-bawah di perangkat Anda, lalu unduh JPEG/WebP/PNG — tanpa unggah ke server.',
	tool_flip_image_description:
		'Balik foto secara cermin horizontal atau vertikal di browser — cocok memperbaiki selfie. Langkah: pilih gambar, centang arah, klik Balik, lalu Unduh. Contoh: kisi A/B/C/D → cermin horizontal memindahkan A ke kanan. File tetap di perangkat, tanpa unggah ke server.',
	tool_flip_image_choose_file: 'Pilih gambar',
	tool_flip_image_drop_hint: 'Atau jatuhkan JPEG, PNG, WebP, atau GIF di sini. Pemrosesan tetap di tab ini.',
	tool_flip_image_flip: 'Balik',
	tool_flip_image_download: 'Unduh',
	tool_flip_image_sample: 'Muat contoh',
	tool_flip_image_clear: 'Hapus',
	tool_flip_image_flip_h: 'Cermin horizontal',
	tool_flip_image_flip_v: 'Cermin vertikal',
	tool_flip_image_advanced: 'Pengaturan lanjutan (opsional)',
	tool_flip_image_format_label: 'Format keluaran',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint:
		'WebP file kecil dan bisa transparan. PNG tanpa kehilangan. JPEG butuh warna latar.',
	tool_flip_image_quality_label: 'Kualitas',
	tool_flip_image_quality_hint: 'Hanya untuk JPEG dan WebP. PNG mengabaikan penggeser ini.',
	tool_flip_image_jpeg_bg_label: 'Latar JPEG',
	tool_flip_image_jpeg_bg_hint: 'Mengisi piksel transparan sebelum ekspor JPEG. Default putih.',
	tool_flip_image_preview_label: 'Pratinjau',
	tool_flip_image_progress: 'Membalik gambar…',
	tool_flip_image_step_decode: 'Baca',
	tool_flip_image_step_flip: 'Balik piksel',
	tool_flip_image_step_encode: 'Enkode',
	tool_flip_image_decode_step: 'Membaca gambar…',
	tool_flip_image_flip_step: 'Menerapkan transformasi cermin…',
	tool_flip_image_encode_step: 'Mengenkode {fmt}…',
	tool_flip_image_elapsed: 'Berlalu {s}d',
	tool_flip_image_empty: 'Pilih gambar dulu.',
	tool_flip_image_no_flip: 'Centang Cermin horizontal dan/atau Cermin vertikal.',
	tool_flip_image_err_decode: 'Gambar gagal dibaca. Coba JPEG, PNG, atau WebP.',
	tool_flip_image_err_encode: 'Ekspor gagal. Coba gambar lebih kecil atau format lain.',
	tool_flip_image_warn_large: 'File besar (>25 MB) — bisa lambat.',
	tool_flip_image_warn_edge: 'Sisi melebihi ~8192 px — sebagian browser bisa gagal.',
	tool_flip_image_warn_animation: 'GIF animasi: hanya bingkai pertama yang dipakai.',
	tool_flip_image_status_working: 'Memproses…',
	tool_flip_image_status_done: 'Selesai — klik Unduh untuk menyimpan.',
	tool_flip_image_stats_tpl: 'Dibalik {w}×{h} → {fmt} ({bytes})',
	tool_flip_image_how_title: 'Cara membalik gambar',
	tool_flip_image_how_body:
		'Alat ini menggambar ulang bitmap sebagai cermin sungguhan, bukan sekadar efek CSS. Setelah itu file dienkode ulang ke format yang Anda pilih di pengaturan lanjutan.',
	tool_flip_image_how_item_1: 'Pilih gambar atau jatuhkan JPEG, PNG, WebP, atau GIF ke kotak.',
	tool_flip_image_how_item_2:
		'Centang Cermin horizontal dan/atau Cermin vertikal — pratinjau langsung berubah.',
	tool_flip_image_how_item_3:
		'Opsional: buka Pengaturan lanjutan untuk JPEG, WebP, atau PNG, kualitas, dan warna latar JPEG.',
	tool_flip_image_how_item_4: 'Klik Balik, tunggu bilah progres, lalu klik Unduh.',
	tool_flip_image_why_choose_title: 'Mengapa memakai Balik gambar di sini',
	tool_flip_image_why_choose_item_1:
		'Pratinjau langsung menunjukkan ke sisi mana tanda berpindah sebelum Anda menyimpan.',
	tool_flip_image_why_choose_item_2:
		'Dua arah sekaligus: centang keduanya pada foto persegi panjang = setara putar 180°.',
	tool_flip_image_why_choose_item_3:
		'Ekspor JPEG / WebP / PNG dengan pengatur kualitas dan latar untuk JPEG.',
	tool_flip_image_why_choose_item_4:
		'Peringatan lembut untuk file besar, sisi piksel ekstrem, dan GIF animasi (hanya bingkai pertama).',
	tool_flip_image_why_choose_item_5:
		'Berjalan sepenuhnya di tab ini — foto tetap di perangkat dan tidak diunggah ke server kami.',
	tool_flip_image_rules_title: 'Aturan cermin',
	tool_flip_image_rules_body:
		'Kanvas seukuran sumber, sumbu yang dipilih dicerminkan, lalu file dikodekan untuk unduhan.',
	tool_flip_image_rules_item_1: 'Horizontal: cermin pada sumbu vertikal (kiri↔kanan).',
	tool_flip_image_rules_item_2: 'Vertikal: cermin pada sumbu horizontal (atas↔bawah).',
	tool_flip_image_rules_item_3: 'Keduanya dicentang = setara putar 180° pada gambar persegi panjang (sudut bertukar).',
	tool_flip_image_rules_item_4:
		'GIF animasi hanya bingkai pertama; PNG/WebP menjaga transparansi; JPEG diisi warna latar.',
	tool_flip_image_rules_item_5:
		'Balik hanya menyusun ulang piksel; menyimpan sebagai JPEG/WebP mengenkode ulang dan bisa mengubah ukuran file.',
	tool_flip_image_example_title: 'Contoh',
	tool_flip_image_example:
		'Muat contoh membuat kisi 480×320 berlabel A B / C D. Cermin horizontal (default) memindahkan A ke kanan. Klik Balik, lalu Unduh. Centang juga Cermin vertikal dan Balik lagi untuk melihat setara putar 180°.',
	tool_flip_image_usecases_title: 'Kapan dipakai',
	tool_flip_image_usecase_1:
		'Memperbaiki selfie yang tercermin agar tulisan di kaos terbaca benar sebelum diposting.',
	tool_flip_image_usecase_2:
		'Menukar kiri/kanan mockup produk agar tombol ajakan ada di sisi yang diinginkan.',
	tool_flip_image_usecase_3: 'Meluruskan halaman pindaian yang difoto terbalik — pakai Cermin vertikal.',
	tool_flip_image_usecase_4:
		'Menyiapkan varian tata letak cermin untuk cetak tanpa membuka editor desktop.',
	tool_flip_image_faq_q1: 'Apakah gambar diunggah?',
	tool_flip_image_faq_a1:
		'Tidak. Membaca, membalik, dan mengekspor berjalan di tab browser Anda. Skrip pustaka dimuat dari folder vendor situs ini hanya saat diperlukan; byte file tetap lokal dan tidak diunggah ke server kami.',
	tool_flip_image_faq_q2: 'Apakah kualitas berkurang?',
	tool_flip_image_faq_a2:
		'Proses balik sendiri hanya menyusun ulang piksel. Menyimpan sebagai JPEG atau WebP mengenkode ulang dan bisa mengubah byte. Untuk unduhan tanpa kehilangan, pilih PNG di Pengaturan lanjutan.',
	tool_flip_image_faq_q3: 'Balik versus putar?',
	tool_flip_image_faq_a3:
		'Balik mencerminkan pada sumbu. Putar memutar sudut. Halaman ini hanya cermin — untuk langkah 90° gunakan alat putar.',
	tool_flip_image_faq_q4: 'Bisa dua arah sekaligus?',
	tool_flip_image_faq_a4:
		'Ya. Centang Cermin horizontal dan Cermin vertikal bersama. Pada foto persegi panjang itu setara putar 180°.',
	tool_flip_image_faq_q5: 'Bagaimana dengan GIF animasi?',
	tool_flip_image_faq_a5:
		'Hanya bingkai pertama yang dibaca dan dibalik. Animasi multi-bingkai tidak dipertahankan di file unduhan.',
	tool_flip_image_faq_q6: 'Mengapa JPEG terlihat beda dari pratinjau?',
	tool_flip_image_faq_a6:
		'JPEG tidak punya transparansi. Piksel transparan diisi warna latar JPEG sebelum dienkode. Pratinjau di halaman memakai papan catur untuk transparansi.',
	tool_flip_image_faq_q7: 'Balik gambar vs potong atau abu-abu?',
	tool_flip_image_faq_a7:
		'Halaman ini hanya mencerminkan. Potong memangkas tepi; abu-abu menghapus warna. Pakai alat terkait Potong gambar atau Gambar skala abu-abu untuk itu.',
	tool_flip_image_article:
		'Cermin Canvas lokal horizontal dan vertikal; piksel digambar ulang, bukan hanya dibalik CSS.',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

/** Ekspor default: digabung ke kamus id situs oleh merge:tools. */
export default id;
