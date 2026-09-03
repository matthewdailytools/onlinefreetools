/**
 * Pecahan i18n (bulk-convert-images-to-jpg / id).
 * H1 mengikuti pencarian «Ubah gambar menjadi JPG sekaligus».
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: formulir yang hanya menerima JPG; nada situs alat sehari-hari. */
const id: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'Kalau lampiran harus .jpg, ubah setumpuk foto, logo PNG, dan HEIC HP di tab ini: satu latar untuk transparan, yang gagal dilewati, lalu unduh ZIP. Tetap di perangkat, tanpa unggah ke server.',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: 'Latar putih',
	tool_bulk_convert_images_to_jpg_choose_files: 'Pilih gambar',
	tool_bulk_convert_images_to_jpg_clear: 'Hapus',
	tool_bulk_convert_images_to_jpg_col_after: 'Sesudah',
	tool_bulk_convert_images_to_jpg_col_before: 'Sebelum',
	tool_bulk_convert_images_to_jpg_col_name: 'Berkas',
	tool_bulk_convert_images_to_jpg_col_status: 'Status',
	tool_bulk_convert_images_to_jpg_convert: 'Ubah semua',
	tool_bulk_convert_images_to_jpg_desc:
		'Ubah gambar menjadi JPG sekaligus dengan latar bersama lalu unduh ZIP; tetap di perangkat, tanpa unggah ke server.',
	tool_bulk_convert_images_to_jpg_description:
		'Ubah gambar menjadi JPG sekaligus: masukkan foto, logo PNG, atau jepretan HEIC, lapisi transparan dengan satu latar, tulis .jpg di tab ini, lewati yang gagal, unduh ZIP. Langkah: pilih tumpukan, biarkan latar putih kecuali diminta hitam, ubah semua. Contoh: foto padat plus logo bolong di atas putih jadi dua berkas .jpg. Tetap di perangkat, tanpa unggah ke server.',
	tool_bulk_convert_images_to_jpg_download_zip: 'Unduh ZIP',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'Jatuhkan PNG, JPEG, WebP, GIF, atau HEIC (maks. 20). Konversi tetap di tab ini.',
	tool_bulk_convert_images_to_jpg_empty: 'Tambahkan gambar dulu.',
	tool_bulk_convert_images_to_jpg_err_decode: 'Berkas ini tidak bisa dibaca (HEIC mungkin butuh browser lain). Dilewati.',
	tool_bulk_convert_images_to_jpg_err_encode: 'Tidak bisa menulis .jpg untuk berkas ini. Dilewati.',
	tool_bulk_convert_images_to_jpg_err_fflate: 'Browser ini tidak bisa merakit ZIP. Coba browser yang lebih baru.',
	tool_bulk_convert_images_to_jpg_err_too_many: 'Paling banyak 20 gambar. Kelebihan tidak dimasukkan.',
	tool_bulk_convert_images_to_jpg_example:
		'Muat contoh menaruh blok buram dan logo transparan, mengecat keduanya di putih, menulis dua nama .jpg, dan mengaktifkan Unduh ZIP.',
	tool_bulk_convert_images_to_jpg_example_title: 'Contoh',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'Tidak. Membaca dan menulis .jpg terjadi di tab ini. Tetap di perangkat, tanpa unggah ke server. Pembantu ZIP bisa dimuat dari CDN; gambar Anda tidak keluar dari tab.',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'Ya. PNG ke JPG di sini: pilih berkas, biarkan latar putih agar lubang tidak jadi hitam, ubah semua.',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'Kalau browser tidak membaca HEIC, baris itu dilewati dan sisanya masuk ZIP. Coba Safari atau ubah dulu di HP.',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'Tidak. JPEG dan JPG hasilnya sama. Nama berkas memakai .jpg.',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'Di sini hanya mengganti akhiran jadi JPG. Mengecilkan foto etalase menuju 200 KB adalah Kompres foto produk sekaligus.',
	tool_bulk_convert_images_to_jpg_faq_q1: 'Apakah berkas diunggah ke server?',
	tool_bulk_convert_images_to_jpg_faq_q2: 'Bagaimana PNG ke JPG di sini?',
	tool_bulk_convert_images_to_jpg_faq_q3: 'Kalau HEIC ke JPG gagal?',
	tool_bulk_convert_images_to_jpg_faq_q4: 'Perlu alat JPEG terpisah selain JPG?',
	tool_bulk_convert_images_to_jpg_faq_q5: 'Ini sama dengan kompres foto?',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '{n} gambar dalam antrean',
	tool_bulk_convert_images_to_jpg_how_body:
		'Kalau formulir hanya mau JPG, masukkan gambar ke antrean, pakai satu latar untuk piksel transparan, ubah di sini, lalu bawa ZIP yang berhasil.',
	tool_bulk_convert_images_to_jpg_how_item_1: 'Pilih foto, PNG, atau HEIC yang formulirnya hanya menerima JPG.',
	tool_bulk_convert_images_to_jpg_how_item_2: 'Biarkan Latar putih kecuali mereka minta hitam. JPG tidak menyimpan lubang.',
	tool_bulk_convert_images_to_jpg_how_item_3: 'Turunkan kualitas sedikit jika lampiran email harus ringan — tugasnya tetap jadi JPG, bukan kejar 200 KB.',
	tool_bulk_convert_images_to_jpg_how_item_4: 'Tekan Ubah semua. HEIC yang tidak terbaca dilewati; sisanya tetap .jpg.',
	tool_bulk_convert_images_to_jpg_how_item_5: 'Unduh ZIP setelah minimal satu berhasil. Muat contoh sudah jalan saat halaman dibuka.',
	tool_bulk_convert_images_to_jpg_how_title: 'Cara jadi JPG',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: 'Hitam',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: 'Kustom',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: 'Latar di balik transparan',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: 'Putih',
	tool_bulk_convert_images_to_jpg_quality_label: 'Kualitas JPG',
	tool_bulk_convert_images_to_jpg_rules_body:
		'JPG tidak punya saluran alfa. Setiap berkas dilukis di latar yang sama lalu disimpan sebagai .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'Nama keluaran selalu berakhiran .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'Piksel transparan diisi latar bersama sebelum ditulis. Tidak ada mode tanpa latar yang meninggalkan blok hitam tanpa alasan.',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'Gagal baca atau tulis melewatkan baris itu. Nama ganda di ZIP menjadi nama (2).jpg. Animasi memakai bingkai pertama.',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'Tetap di perangkat, tanpa unggah ke server.',
	tool_bulk_convert_images_to_jpg_rules_title: 'Aturan yang berlaku',
	tool_bulk_convert_images_to_jpg_sample: 'Muat contoh',
	tool_bulk_convert_images_to_jpg_status_compressing: 'Mengubah tumpukan menjadi JPG…',
	tool_bulk_convert_images_to_jpg_status_done: 'Selesai — cek tabel lalu unduh ZIP.',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG siap',
	tool_bulk_convert_images_to_jpg_status_skip: 'Dilewati',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} siap · {skip} dilewati',
	tool_bulk_convert_images_to_jpg_title: 'Ubah gambar menjadi JPG sekaligus',
	tool_bulk_convert_images_to_jpg_usecase_1: 'Pendaftaran menolak PNG dan hanya menerima lampiran JPG.',
	tool_bulk_convert_images_to_jpg_usecase_2: 'Kirim paket foto produk ke percetakan yang mensyaratkan .jpg.',
	tool_bulk_convert_images_to_jpg_usecase_3: 'HEIC HP yang Windows tidak buka — ubah yang bisa dibaca browser ini.',
	tool_bulk_convert_images_to_jpg_usecases_title: 'Cocok untuk',
	tool_bulk_convert_images_to_jpg_warn_anim: 'Berkas animasi: hanya bingkai pertama yang diubah.',
	tool_bulk_convert_images_to_jpg_warn_edge: 'Ada berkas lebih lebar atau lebih tinggi dari 8192 px — akan lambat.',
	tool_bulk_convert_images_to_jpg_warn_large: 'Ada berkas lebih dari 25 MB — tab ini bisa kehabisan memori.',
};

export default id;
