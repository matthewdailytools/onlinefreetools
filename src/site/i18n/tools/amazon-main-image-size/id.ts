/**
 * Pecahan i18n alat amazon-main-image-size (id).
 * H1 mengikuti frasa pencarian; piksel ada di deskripsi/FAQ, bukan di judul.
 */
import type { SiteLangDict } from '../../../types';

/** Salinan Indonesia untuk situs alat, ditulis ulang (bukan kerangka Inggris). */
const id: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'Letakkan foto produk di kotak putih lalu unduh JPEG untuk gambar utama. File tetap di perangkat, tanpa unggah ke server.',
	tool_amazon_main_image_size_check_fill: 'Isi sekitar 85% bingkai',
	tool_amazon_main_image_size_choose_image: 'Pilih gambar',
	tool_amazon_main_image_size_clear: 'Hapus',
	tool_amazon_main_image_size_desc:
		'Gambar utama Amazon 2000×2000 berlatar putih, cek zoom 1000 px — tetap di perangkat.',
	tool_amazon_main_image_size_description:
		'Ukuran gambar utama Amazon: pilih foto produk, ekspor JPEG 2000×2000 di latar putih RGB 255, lalu cek batas zoom 1000 px. Ada contoh: foto sampel menempati sekitar 85% kotak. File tetap di perangkat dan tidak diunggah ke server. Ini bukan tinjauan resmi Seller Central.',
	tool_amazon_main_image_size_download: 'Unduh JPEG',
	tool_amazon_main_image_size_drop_hint: 'Jatuhkan satu foto produk. Pemrosesan hanya di tab ini.',
	tool_amazon_main_image_size_empty: 'Pilih foto produk dulu.',
	tool_amazon_main_image_size_err_decode: 'Gambar tidak bisa dibaca. Coba JPEG, PNG, atau WebP.',
	tool_amazon_main_image_size_example:
		'Muat contoh menggambar foto produk pengganti, menempatkannya di kotak putih 2000×2000 sekitar 85%, lalu mengaktifkan Unduh JPEG. Chip zoom menunjukkan sisi terpanjang di atas 1000 px.',
	tool_amazon_main_image_size_example_title: 'Contoh',
	tool_amazon_main_image_size_faq_a1:
		'Tidak. Foto didekode di tab browser ini. Tidak ada yang diunggah ke server kami, dan halaman ini tidak mengirim ke Amazon.',
	tool_amazon_main_image_size_faq_a2:
		'Galeri dan modul A+ punya tugas lain. Halaman ini hanya gambar utama. Untuk potong bebas, pakai alat pangkas terkait.',
	tool_amazon_main_image_size_faq_a3:
		'Zoom Amazon biasanya minta minimal 1000 piksel di sisi terpanjang. Chip membandingkan tepi ekspor dengan batas itu. Membesarkan foto kecil bisa lolos angka tapi tetap buram.',
	tool_amazon_main_image_size_faq_a4:
		'Ekspor bawaan 2000×2000. 1600 masih ukuran lama yang umum dan tersedia sebagai chip. Angka piksel tidak masuk H1.',
	tool_amazon_main_image_size_faq_a5:
		'Gambar utama diharapkan di putih polos. Halaman ini mengisi RGB 255,255,255 dan bisa menahan produk di sekitar 85% kotak agar tidak menempel tepi.',
	tool_amazon_main_image_size_faq_q1: 'Apakah foto saya diunggah ke Amazon atau ke situs ini?',
	tool_amazon_main_image_size_faq_q2: 'Apakah halaman ini juga mengekspor gambar sekunder?',
	tool_amazon_main_image_size_faq_q3: 'Kenapa zoom gagal di bawah 1000 px?',
	tool_amazon_main_image_size_faq_q4: 'Kenapa 2000×2000, bukan 1600?',
	tool_amazon_main_image_size_faq_q5: 'Bagaimana latar putih dan 85% bingkai?',
	tool_amazon_main_image_size_fill_label: 'Isian bingkai',
	tool_amazon_main_image_size_how_body:
		'Ambil foto yang akan jadi gambar utama, biarkan di putih, unduh kotak, lalu baca chip zoom. Ukuran lain hanya chip, bukan alat kedua.',
	tool_amazon_main_image_size_how_item_1: 'Pilih foto yang ingin jadi gambar utama Amazon — itu tugasnya.',
	tool_amazon_main_image_size_how_item_2: 'Biarkan 2000×2000 terpilih kecuali Anda masih butuh kotak 1600 lama.',
	tool_amazon_main_image_size_how_item_3: 'Pertahankan pas 85% kecuali produk sudah mengisi bingkai sesuai keinginan.',
	tool_amazon_main_image_size_how_item_4: 'Unduh JPEG dan baca chip batas zoom. Contoh sudah berjalan saat halaman dibuka.',
	tool_amazon_main_image_size_how_title: 'Cara kerja',
	tool_amazon_main_image_size_load_sample: 'Muat contoh',
	tool_amazon_main_image_size_out_size_label: 'Ukuran keluaran',
	tool_amazon_main_image_size_quality_label: 'Kualitas JPEG',
	tool_amazon_main_image_size_rules_body:
		'Mengekspor gambar utama di browser butuh kanvas persegi, isian putih, batas zoom, dan batas “bukan tinjauan resmi”.',
	tool_amazon_main_image_size_rules_item_1:
		'Kanvas bawaan 2000×2000. 1600×1600 opsional. Foto dimuat (tidak diregang) di putih RGB 255.',
	tool_amazon_main_image_size_rules_item_2:
		'Opsi pas 85% mengecilkan produk di dalam kotak agar tidak menyentuh tepi.',
	tool_amazon_main_image_size_rules_item_3:
		'Chip zoom: sisi terpanjang keluaran seharusnya ≥1000 px. Halaman tidak mengklaim Amazon akan menerima file itu.',
	tool_amazon_main_image_size_rules_item_4:
		'Gambar sekunder, infografis, dan A+ di luar cakupan. Ini bukan Seller Central.',
	tool_amazon_main_image_size_rules_title: 'Yang perlu diingat',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'Gambar utama siap — unduh atau ganti foto.',
	tool_amazon_main_image_size_status_working: 'Menyusun kotak…',
	tool_amazon_main_image_size_title: 'Ukuran gambar utama Amazon',
	tool_amazon_main_image_size_usecase_1:
		'Daftar baru: ubah foto HP menjadi gambar utama putih sebelum membuka Seller Central.',
	tool_amazon_main_image_size_usecase_2:
		'Zoom rusak: cek apakah sisi terpanjang masih di bawah 1000 px, lalu ekspor ulang di 2000.',
	tool_amazon_main_image_size_usecase_3:
		'Ganti gambar utama kecil yang diwariskan; jika JPEG berat, lanjutkan di kompresor terkait.',
	tool_amazon_main_image_size_usecases_title: 'Kapan dipakai',
	tool_amazon_main_image_size_zoom_fail: 'Sisi terpanjang di bawah 1000 px — zoom mungkin gagal.',
	tool_amazon_main_image_size_zoom_ok: 'Sisi terpanjang memenuhi batas zoom 1000 px.',
	tool_amazon_main_image_size_zoom_label: 'Batas zoom',
};

export default id;
