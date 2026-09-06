/**
 * Pecahan i18n (bulk-convert-images-to-png / id).
 * H1 mengikuti pencarian «Ubah gambar menjadi PNG sekaligus».
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: tangkapan layar dan logo yang harus PNG dengan transparansi; nada alat harian. */
const id: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'Kalau kiriman harus PNG, ubah foto JPEG, tangkapan layar, dan logo berlubang di tab ini: transparansi tetap jika sumber punya, yang gagal dilewati, lalu unduh ZIP. JPEG ke PNG sering membesar; tabel menandainya. File tetap di perangkat, tidak diunggah ke server.',
	tool_bulk_convert_images_to_png_choose_files: 'Pilih gambar',
	tool_bulk_convert_images_to_png_clear: 'Hapus',
	tool_bulk_convert_images_to_png_col_after: 'Sesudah',
	tool_bulk_convert_images_to_png_col_before: 'Sebelum',
	tool_bulk_convert_images_to_png_col_name: 'Berkas',
	tool_bulk_convert_images_to_png_col_status: 'Status',
	tool_bulk_convert_images_to_png_convert: 'Ubah semua',
	tool_bulk_convert_images_to_png_desc:
		'Ubah gambar menjadi PNG sekaligus, jaga transparansi jika sumber punya, unduh ZIP; file tetap di perangkat, tidak diunggah ke server.',
	tool_bulk_convert_images_to_png_description:
		'Ubah gambar menjadi PNG sekaligus: masukkan JPEG atau tangkapan layar, tulis ulang sebagai PNG di tab ini tanpa alas JPEG, lewati yang gagal, unduh ZIP. Langkah: pilih tumpukan, ubah semua, baca tabel jika JPEG membesar sebagai PNG. Contoh: foto padat dan logo berlubang sama-sama jadi .png. File tetap di perangkat dan tidak diunggah ke server.',
	tool_bulk_convert_images_to_png_download_zip: 'Unduh ZIP',
	tool_bulk_convert_images_to_png_drop_hint: 'Jatuhkan JPEG, PNG, WebP, atau GIF (hingga 20). Konversi tetap di tab ini.',
	tool_bulk_convert_images_to_png_empty: 'Tambahkan gambar dulu.',
	tool_bulk_convert_images_to_png_err_decode: 'Berkas ini tidak bisa dibaca. Dilewati.',
	tool_bulk_convert_images_to_png_err_encode: 'Tidak bisa menulis PNG untuk berkas ini. Dilewati.',
	tool_bulk_convert_images_to_png_err_fflate: 'Peramban ini tidak bisa merakit ZIP. Coba yang lebih baru.',
	tool_bulk_convert_images_to_png_err_too_many: 'Paling banyak 20 gambar. Kelebihan tidak dimasukkan.',
	tool_bulk_convert_images_to_png_example:
		'Muat contoh menaruh blok JPEG dan logo transparan, menulis dua .png, dan mengaktifkan Unduh ZIP. Baris JPEG sering menunjukkan PNG yang lebih besar.',
	tool_bulk_convert_images_to_png_example_title: 'Contoh',
	tool_bulk_convert_images_to_png_faq_a1:
		'Tidak. Pembacaan dan penulisan PNG terjadi di tab ini. File tetap di perangkat, tidak diunggah ke server. Pembantu ZIP bisa dimuat dari situs ini; gambar Anda tetap di tab.',
	tool_bulk_convert_images_to_png_faq_a2:
		'Tidak. JPEG tidak pernah menyimpan lubang. jpg ke png hanya membungkus PNG; latar tetap buram. Lubang sungguhan hanya bertahan jika sumber sudah punya alfa.',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG tanpa kehilangan. JPEG foto sering membesar. Tabel menandai «lebih besar». Perkecil piksel di Kompres gambar PNG sekaligus, atau tetap JPEG jika PNG tidak perlu.',
	tool_bulk_convert_images_to_png_faq_a4:
		'Kompres PNG untuk berkas yang sudah PNG dan harus tetap PNG, hanya lebih kecil. Halaman ini mengganti akhiran menjadi PNG.',
	tool_bulk_convert_images_to_png_faq_a5:
		'Tidak. Hanya bingkai pertama disimpan sebagai PNG diam, dan baris itu dicatat.',
	tool_bulk_convert_images_to_png_faq_q1: 'Apakah gambar diunggah ke server?',
	tool_bulk_convert_images_to_png_faq_q2: 'Apakah jpg ke png mengembalikan transparansi?',
	tool_bulk_convert_images_to_png_faq_q3: 'Mengapa PNG lebih besar dari JPEG?',
	tool_bulk_convert_images_to_png_faq_q4: 'Apa bedanya dengan kompres PNG?',
	tool_bulk_convert_images_to_png_faq_q5: 'Apakah GIF animasi tetap bergerak?',
	tool_bulk_convert_images_to_png_file_count_tpl: '{n} gambar dalam antrean',
	tool_bulk_convert_images_to_png_how_body:
		'Pilih gambar yang harus jadi PNG, ubah di sini tanpa mengecat alas, lalu bawa ZIP yang berhasil.',
	tool_bulk_convert_images_to_png_how_item_1: 'Pilih tangkapan layar atau logo yang harus PNG.',
	tool_bulk_convert_images_to_png_how_item_2: 'Tidak ada sakelar alas putih — lubang tetap jika sumber punya alfa.',
	tool_bulk_convert_images_to_png_how_item_3: 'Tekan Ubah semua. Sumber JPEG jadi PNG buram; tabel memperingatkan jika membesar.',
	tool_bulk_convert_images_to_png_how_item_4: 'Butuh JPG? Pakai Ubah gambar menjadi JPG sekaligus. Butuh PNG lebih kecil? Pakai Kompres gambar PNG sekaligus.',
	tool_bulk_convert_images_to_png_how_item_5: 'Unduh ZIP setelah setidaknya satu berkas berhasil. Muat contoh sudah jalan saat halaman dibuka.',
	tool_bulk_convert_images_to_png_how_title: 'Cara mengubah ke PNG',
	tool_bulk_convert_images_to_png_max_edge_label: 'Sisi terpanjang',
	tool_bulk_convert_images_to_png_resize_on: 'Batasi sisi terpanjang',
	tool_bulk_convert_images_to_png_rules_body:
		'Keluaran selalu PNG. Halaman ini tidak meratakan transparansi ke alas JPEG.',
	tool_bulk_convert_images_to_png_rules_item_1:
		'Alfa disimpan jika sumber memilikinya. Sumber JPEG tidak punya alfa untuk disimpan.',
	tool_bulk_convert_images_to_png_rules_item_2:
		'Pengecilan sisi terpanjang opsional dan mati secara bawaan agar konversi tidak mengubah ukuran diam-diam.',
	tool_bulk_convert_images_to_png_rules_item_3:
		'Jika PNG lebih besar dari aslinya, baris itu mengatakannya. Gagal baca dilewati. Nama ganda di ZIP jadi nama (2).png.',
	tool_bulk_convert_images_to_png_rules_item_4:
		'File tetap di perangkat dan tidak diunggah ke server.',
	tool_bulk_convert_images_to_png_rules_title: 'Yang perlu diharapkan',
	tool_bulk_convert_images_to_png_sample: 'Muat contoh',
	tool_bulk_convert_images_to_png_status_compressing: 'Mengubah tumpukan ke PNG…',
	tool_bulk_convert_images_to_png_status_done: 'Selesai — cek tabel, lalu unduh ZIP.',
	tool_bulk_convert_images_to_png_status_larger: 'Lebih besar dari sumber',
	tool_bulk_convert_images_to_png_status_ok: 'PNG siap',
	tool_bulk_convert_images_to_png_status_skip: 'Dilewati',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} siap · {larger} lebih besar · {skip} dilewati',
	tool_bulk_convert_images_to_png_title: 'Ubah gambar menjadi PNG sekaligus',
	tool_bulk_convert_images_to_png_usecase_1: 'Arsipkan tangkapan layar sebagai PNG untuk serah terima desain.',
	tool_bulk_convert_images_to_png_usecase_2: 'Seragamkan stiker sebagai PNG ketika sumber sudah berlubang.',
	tool_bulk_convert_images_to_png_usecase_3: 'jpg ke png ketika CMS hanya menerima PNG — foto biasanya membesar.',
	tool_bulk_convert_images_to_png_usecases_title: 'Cocok untuk',
	tool_bulk_convert_images_to_png_warn_anim: 'Berkas bergerak: hanya bingkai pertama disimpan sebagai PNG diam.',
	tool_bulk_convert_images_to_png_warn_edge: 'Ada berkas lebih lebar atau tinggi dari 8192 px — akan lambat.',
	tool_bulk_convert_images_to_png_warn_large: 'Ada berkas lebih dari 25 MB — tab ini bisa kehabisan memori.',
	tool_bulk_convert_images_to_png_warn_larger: 'Beberapa PNG lebih besar dari aslinya. Itu wajar untuk JPEG foto.',
};

export default id;
