/**
 * Pecahan i18n (bulk-compress-png-images / id).
 * H1 mengikuti pencarian «Kompres gambar PNG sekaligus».
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: logo PNG transparan tetap PNG di perangkat. */
const id: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'Kompres folder logo atau potongan UI PNG di tab ini, jaga transparansi, lewati yang gagal, unduh ZIP. File tetap di perangkat, tanpa unggah ke server.',
	tool_bulk_compress_png_images_chip_1024: '1024 px',
	tool_bulk_compress_png_images_chip_reencode: 'Hanya encode ulang',
	tool_bulk_compress_png_images_choose_files: 'Pilih gambar PNG',
	tool_bulk_compress_png_images_clear: 'Hapus',
	tool_bulk_compress_png_images_col_after: 'Sesudah',
	tool_bulk_compress_png_images_col_before: 'Sebelum',
	tool_bulk_compress_png_images_col_name: 'Berkas',
	tool_bulk_compress_png_images_col_status: 'Status',
	tool_bulk_compress_png_images_compress: 'Kompres semua',
	tool_bulk_compress_png_images_desc:
		'Kompres PNG massal, jaga transparansi, unduh ZIP — tetap di perangkat, tanpa unggah ke server.',
	tool_bulk_compress_png_images_description:
		'Kompres gambar PNG sekaligus: masukkan logo atau potongan antarmuka, jaga transparansi, batasi sisi terpanjang bila perlu, tulis ulang PNG di tab ini, lewati kegagalan, unduh ZIP. Langkah: pilih batch, biarkan chip 1024 px jika ikon harus mengecil, kompres semua, baca tabel. Contoh: dua sampel papan catur tetap PNG berlubang. File tetap di perangkat, tanpa unggah ke server.',
	tool_bulk_compress_png_images_download_zip: 'Unduh ZIP',
	tool_bulk_compress_png_images_drop_hint: 'Jatuhkan PNG (maks. 20). Gambar lain juga diekspor sebagai PNG. Tetap di tab ini.',
	tool_bulk_compress_png_images_empty: 'Tambahkan gambar PNG dulu.',
	tool_bulk_compress_png_images_err_decode: 'Gambar ini tidak bisa dibaca. Dilewati.',
	tool_bulk_compress_png_images_err_encode: 'Gambar ini tidak bisa ditulis sebagai PNG. Dilewati.',
	tool_bulk_compress_png_images_err_fflate: 'ZIP tidak bisa dibentuk di peramban ini. Coba peramban mutakhir lain.',
	tool_bulk_compress_png_images_err_too_many: 'Paling banyak 20 berkas sekaligus. Sisanya tidak ditambahkan.',
	tool_bulk_compress_png_images_example:
		'Muat contoh menaruh dua PNG papan catur transparan, menulis ulang sebagai PNG, mengisi tabel, dan mengaktifkan Unduh ZIP. Nama ganda menjadi name (2).png.',
	tool_bulk_compress_png_images_example_title: 'Contoh',
	tool_bulk_compress_png_images_faq_a1:
		'Tidak. Pembacaan dan penulisan PNG berjalan di tab ini. File tetap di perangkat, tanpa unggah ke server. Pembantu ZIP bisa dimuat dari situs ini; gambar Anda tetap tidak meninggalkan tab.',
	tool_bulk_compress_png_images_faq_a2:
		'Tidak. Keluaran selalu PNG. Tidak ada alas JPEG. Jika foto produk boleh JPEG dan harus lebih kecil, pakai Kompres foto produk massal.',
	tool_bulk_compress_png_images_faq_a3:
		'Ya. Piksel digambar tanpa latar padat lalu disimpan PNG, jadi lubang tetap lubang.',
	tool_bulk_compress_png_images_faq_a4:
		'Sering, jika sisi terpanjang tidak diperkecil. PNG kanvas di sini bukan pengoptimal palet. Warna terindeks bisa berpita setelah encode ulang.',
	tool_bulk_compress_png_images_faq_a5:
		'Tidak. Hanya bingkai pertama yang disimpan sebagai PNG diam.',
	tool_bulk_compress_png_images_faq_q1: 'Kompres png massal mengunggah berkas ke server?',
	tool_bulk_compress_png_images_faq_q2: 'Kompres PNG online mengubahnya jadi JPEG?',
	tool_bulk_compress_png_images_faq_q3: 'Bisa kompres png tetap transparan?',
	tool_bulk_compress_png_images_faq_q4: 'Kenapa setelah perkecil png ukurannya hampir sama?',
	tool_bulk_compress_png_images_faq_q5: 'GIF animasi tetap bergerak?',
	tool_bulk_compress_png_images_file_count_tpl: '{n} berkas dalam antrean',
	tool_bulk_compress_png_images_how_body:
		'Kalau folder ini wajib tetap PNG, samakan batas sisi terpanjang bila perlu, kompres di sini, lalu bawa ZIP dari yang berhasil.',
	tool_bulk_compress_png_images_how_item_1: 'Pilih logo atau potongan PNG yang harus menjaga transparansi.',
	tool_bulk_compress_png_images_how_item_2: 'Pakai chip 1024 px jika ikon harus mengecil; Hanya encode ulang jika ukuran piksel tidak boleh berubah.',
	tool_bulk_compress_png_images_how_item_3: 'Tekan Kompres semua. Setiap baris tetap PNG. Yang gagal dilewati, sisanya tetap dikemas.',
	tool_bulk_compress_png_images_how_item_4: 'Jika PNG mirip foto hampir tidak mengecil, tabel memperingatkan — JPEG di halaman foto produk biasanya lebih kecil.',
	tool_bulk_compress_png_images_how_item_5: 'Unduh ZIP setelah minimal satu berkas berhasil. Muat contoh sudah jalan saat halaman pertama kali tampil.',
	tool_bulk_compress_png_images_how_title: 'Cara mengerjakan batch',
	tool_bulk_compress_png_images_max_edge_label: 'Sisi terpanjang',
	tool_bulk_compress_png_images_resize_on: 'Batasi sisi terpanjang',
	tool_bulk_compress_png_images_rules_body:
		'Latar JPEG tidak pernah dilukis. Ukuran biasanya turun saat sisi terpanjang diperkecil, bukan saat hanya disimpan ulang.',
	tool_bulk_compress_png_images_rules_item_1:
		'MIME keluaran adalah PNG. Alfa tidak diratakan. Tidak ada penggeser kualitas karena PNG di sini lossless.',
	tool_bulk_compress_png_images_rules_item_2:
		'Sisi terpanjang mengecil proporsional dan tidak pernah diperbesar. Hanya encode ulang menjaga ukuran piksel dan mungkin hampir tidak mengubah byte.',
	tool_bulk_compress_png_images_rules_item_3:
		'Gagal baca atau tulis melewati baris itu. Nama ganda di ZIP menjadi name (2).png. Palet terindeks bisa berpita.',
	tool_bulk_compress_png_images_rules_item_4:
		'File tetap di perangkat, tanpa unggah ke server.',
	tool_bulk_compress_png_images_rules_title: 'Batas yang perlu diingat',
	tool_bulk_compress_png_images_sample: 'Muat contoh',
	tool_bulk_compress_png_images_status_compressing: 'Mengompres batch PNG…',
	tool_bulk_compress_png_images_status_done: 'Batch selesai — cek tabel, lalu unduh ZIP.',
	tool_bulk_compress_png_images_status_ok: 'PNG siap',
	tool_bulk_compress_png_images_status_same: 'Masih besar',
	tool_bulk_compress_png_images_status_skip: 'Dilewati',
	tool_bulk_compress_png_images_summary_tpl: '{ok} siap · {same} hampir sama · {skip} dilewati',
	tool_bulk_compress_png_images_title: 'Kompres gambar PNG sekaligus',
	tool_bulk_compress_png_images_usecase_1: 'Folder logo transparan yang etalase harus tetap sajikan sebagai PNG.',
	tool_bulk_compress_png_images_usecase_2: 'Ekspor UI yang perlu sisi terpanjang sama sebelum diserahkan ke pengembang.',
	tool_bulk_compress_png_images_usecase_3: 'Stiker promo berlubang; JPEG akan mengisi lubang dengan alas.',
	tool_bulk_compress_png_images_usecases_title: 'Cocok untuk',
	tool_bulk_compress_png_images_warn_anim: 'Berkas beranimasi: hanya bingkai pertama yang disimpan sebagai PNG diam.',
	tool_bulk_compress_png_images_warn_edge: 'Ada berkas lebih dari 8192 px lebar atau tinggi — akan lambat.',
	tool_bulk_compress_png_images_warn_large: 'Ada berkas lebih dari 25 MB — tab ini bisa kehabisan memori.',
	tool_bulk_compress_png_images_warn_same: 'Beberapa PNG hampir tidak mengecil. Perkecil sisi terpanjang, atau pakai kompres foto produk jika JPEG boleh.',
};

export default id;
