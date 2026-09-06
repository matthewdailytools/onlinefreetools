/**
 * Pecahan i18n (bulk-convert-images-to-webp / id).
 * H1 mengikuti pencarian «Ubah gambar menjadi WebP sekaligus».
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: aset situs ke WebP lossy dengan transparansi. */
const id: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'Kalau situs minta WebP, ubah logo PNG dan foto di tab ini jadi .webp berloss: transparansi tetap jika sumber punya, yang peramban ini tidak bisa tulis dilewati, lalu unduh ZIP. Beberapa surel masih menolak WebP; pakai JPG. File tetap di perangkat, tidak diunggah ke server.',
	tool_bulk_convert_images_to_webp_chip_q80: 'Kualitas 0.8',
	tool_bulk_convert_images_to_webp_choose_files: 'Pilih gambar',
	tool_bulk_convert_images_to_webp_clear: 'Hapus',
	tool_bulk_convert_images_to_webp_col_after: 'Sesudah',
	tool_bulk_convert_images_to_webp_col_before: 'Sebelum',
	tool_bulk_convert_images_to_webp_col_name: 'Berkas',
	tool_bulk_convert_images_to_webp_col_status: 'Status',
	tool_bulk_convert_images_to_webp_convert: 'Ubah semua',
	tool_bulk_convert_images_to_webp_desc:
		'Ubah gambar menjadi WebP sekaligus dengan kualitas berloss dan alfa jika sumber punya; ZIP; file tetap di perangkat, tidak diunggah ke server.',
	tool_bulk_convert_images_to_webp_description:
		'Ubah gambar menjadi WebP sekaligus: masukkan logo PNG atau foto, tulis WebP berloss di tab ini tanpa alas JPEG, lewati yang peramban ini tidak tulis, unduh ZIP. Langkah: pilih tumpukan, biarkan kualitas dekat 0.8, ubah semua. Contoh: foto padat dan logo berlubang sama-sama jadi .webp. File tetap di perangkat dan tidak diunggah ke server.',
	tool_bulk_convert_images_to_webp_download_zip: 'Unduh ZIP',
	tool_bulk_convert_images_to_webp_drop_hint: 'Jatuhkan JPEG, PNG, WebP, atau GIF (hingga 20). Konversi tetap di tab ini.',
	tool_bulk_convert_images_to_webp_empty: 'Tambahkan gambar dulu.',
	tool_bulk_convert_images_to_webp_err_decode: 'Berkas ini tidak bisa dibaca. Dilewati.',
	tool_bulk_convert_images_to_webp_err_encode: 'Tidak bisa menulis WebP untuk berkas ini. Dilewati.',
	tool_bulk_convert_images_to_webp_err_fflate: 'Peramban ini tidak bisa merakit ZIP. Coba yang lebih baru.',
	tool_bulk_convert_images_to_webp_err_too_many: 'Paling banyak 20 gambar. Kelebihan tidak dimasukkan.',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'Peramban ini tidak mengembalikan blob WebP. Baris itu dilewati, bukan ditulis JPEG.',
	tool_bulk_convert_images_to_webp_example:
		'Muat contoh menaruh blok buram dan logo transparan, menulis dua .webp, dan mengaktifkan Unduh ZIP. Lubang logo tetap ada.',
	tool_bulk_convert_images_to_webp_example_title: 'Contoh',
	tool_bulk_convert_images_to_webp_faq_a1:
		'Tidak. Pembacaan dan penulisan WebP terjadi di tab ini. File tetap di perangkat, tidak diunggah ke server. Pembantu ZIP bisa dimuat dari situs ini; gambar Anda tetap di tab.',
	tool_bulk_convert_images_to_webp_faq_a2:
		'Ya. png ke webp adalah halaman ini: pilih berkas, biarkan kualitas dekat 0.8, ubah semua. Lubang tetap jika PNG punya alfa.',
	tool_bulk_convert_images_to_webp_faq_a3:
		'Beberapa aplikasi surel dan CMS masih menolak WebP. Untuk lampiran itu pakai Ubah gambar menjadi JPG sekaligus.',
	tool_bulk_convert_images_to_webp_faq_a4:
		'Baris itu dilewati. Halaman ini tidak diam-diam menulis JPEG. Coba Chrome, Edge, atau Firefox terbaru.',
	tool_bulk_convert_images_to_webp_faq_a5:
		'Tidak. Hanya bingkai pertama disimpan sebagai WebP diam, dan baris itu dicatat.',
	tool_bulk_convert_images_to_webp_faq_q1: 'Apakah gambar diunggah ke server?',
	tool_bulk_convert_images_to_webp_faq_q2: 'Bagaimana PNG ke WebP di sini?',
	tool_bulk_convert_images_to_webp_faq_q3: 'Apakah surel menerima WebP ini?',
	tool_bulk_convert_images_to_webp_faq_q4: 'Kalau peramban ini tidak bisa menulis WebP?',
	tool_bulk_convert_images_to_webp_faq_q5: 'Apakah GIF animasi tetap bergerak?',
	tool_bulk_convert_images_to_webp_file_count_tpl: '{n} gambar dalam antrean',
	tool_bulk_convert_images_to_webp_how_body:
		'Pilih gambar yang harus jadi WebP di situs, ubah di sini tanpa alas JPEG, lalu bawa ZIP yang berhasil.',
	tool_bulk_convert_images_to_webp_how_item_1: 'Pilih foto atau stiker PNG yang harus WebP di situs.',
	tool_bulk_convert_images_to_webp_how_item_2: 'Biarkan kualitas dekat 0.8 kecuali butuh berkas lebih kecil. Tidak ada alas JPEG.',
	tool_bulk_convert_images_to_webp_how_item_3: 'Tekan Ubah semua. Jika toBlob bukan WebP, baris itu gagal, bukan ditulis JPEG.',
	tool_bulk_convert_images_to_webp_how_item_4: 'Butuh JPG untuk surel? Pakai Ubah gambar menjadi JPG sekaligus. Butuh PNG lossless? Ubah gambar menjadi PNG sekaligus.',
	tool_bulk_convert_images_to_webp_how_item_5: 'Unduh ZIP setelah setidaknya satu berkas berhasil. Muat contoh sudah jalan saat halaman dibuka.',
	tool_bulk_convert_images_to_webp_how_title: 'Cara mengubah ke WebP',
	tool_bulk_convert_images_to_webp_quality_label: 'Kualitas WebP',
	tool_bulk_convert_images_to_webp_rules_body:
		'Keluaran selalu WebP. Halaman ini tidak meratakan transparansi ke alas JPEG dan tidak jatuh ke JPEG.',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'Alfa disimpan jika sumber memilikinya. Sumber JPEG tidak punya alfa untuk disimpan.',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'Kualitas bawaan 0.8. Turunkan hanya jika anggaran situs butuh berkas lebih kecil.',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'Jika peramban ini tidak menulis WebP, baris itu dilewati. Gagal baca dilewati. Nama ganda di ZIP jadi nama (2).webp.',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'File tetap di perangkat dan tidak diunggah ke server.',
	tool_bulk_convert_images_to_webp_rules_title: 'Yang perlu diharapkan',
	tool_bulk_convert_images_to_webp_sample: 'Muat contoh',
	tool_bulk_convert_images_to_webp_status_compressing: 'Mengubah tumpukan ke WebP…',
	tool_bulk_convert_images_to_webp_status_done: 'Selesai — cek tabel, lalu unduh ZIP.',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP siap',
	tool_bulk_convert_images_to_webp_status_skip: 'Dilewati',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} siap · {skip} dilewati',
	tool_bulk_convert_images_to_webp_title: 'Ubah gambar menjadi WebP sekaligus',
	tool_bulk_convert_images_to_webp_usecase_1: 'Kecilkan hero dan thumbnail situs ke WebP tanpa dropdown format.',
	tool_bulk_convert_images_to_webp_usecase_2: 'png ke webp untuk stiker yang sudah berlubang.',
	tool_bulk_convert_images_to_webp_usecase_3: 'Tetap JPEG untuk surel jika klien masih menolak WebP.',
	tool_bulk_convert_images_to_webp_usecases_title: 'Cocok untuk',
	tool_bulk_convert_images_to_webp_warn_anim: 'Berkas bergerak: hanya bingkai pertama disimpan sebagai WebP diam.',
	tool_bulk_convert_images_to_webp_warn_edge: 'Ada berkas lebih lebar atau tinggi dari 8192 px — akan lambat.',
	tool_bulk_convert_images_to_webp_warn_large: 'Ada berkas lebih dari 25 MB — tab ini bisa kehabisan memori.',
};

export default id;
