/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / id).
 * Kata lokal: Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: 'Pengaturan lanjutan (opsional)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'Jatuhkan beberapa foto cetak atau tangkapan layar, klik Konversi semua, lalu Unduh Word. Tiap foto jadi satu bagian: judulnya nama berkas, isinya teks yang bisa diedit; foto asli di atas teks secara bawaan untuk dicek. Satu foto buram dilewati. Berkas tetap di perangkat Anda, tidak diunggah ke server. Butuh ZIP berisi TXT? Pakai Ubah banyak JPG menjadi teks dengan OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'Pilih JPG, PNG, atau WebP',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'Hapus',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'Catatan',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'Berkas',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'Piksel',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: 'Status',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'Konversi semua',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} berkas (maks. 10)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR: antre, Konversi semua, Unduh Word — tetap di perangkat, tidak diunggah ke server.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'Jatuhkan beberapa JPG dan unduh satu Word yang bisa diedit. Pengenalan jalan di tab ini, foto demi foto; berkas tetap di perangkat Anda, tidak diunggah ke server. Langkah: tambah gambar, Konversi semua, Unduh Word. Contoh: dua sampel cetak jadi dua bagian berjudul plus foto opsional. Juga dicari sebagai JPG ke Word dengan OCR. Satu foto gagal dilewati. ZIP teks ada di halaman ubah banyak JPG jadi teks.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'Unduh Word',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: 'Jatuhkan beberapa foto di sini (maks. 10). Proses tetap di tab ini.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: 'Tambahkan foto dulu.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'Peramban ini tidak bisa merakit Word. Coba peramban yang lebih baru.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'Tidak ada teks cetak. Dilewati. Coba halaman lebih tajam, bukan tulisan tangan.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'Mesin OCR gagal dimuat. Segarkan lalu Konversi semua. Bagian yang sudah selesai masih bisa diunduh.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'Gambar itu tidak terbaca. Pakai JPEG, PNG, atau WebP. Dilewati.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'Halaman ini membaca foto, bukan PDF. Berkas itu tidak ditambahkan.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: 'Lebih dari 12 MB. Kompres atau potong dulu. Dilewati.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: 'Maksimal 10 foto. Sisanya tidak ditambahkan.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'Muat contoh menambahkan sample-1.jpg (ONLINEFREETOOLS dan The quick brown fox) serta sample-2.jpg (SAMPLE TWO dan 印刷体样例), menjalankan Konversi semua, dan mengaktifkan Unduh Word dengan dua bagian berjudul.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: 'Contoh',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'Tidak. Foto tetap di tab peramban ini. Mesin dan skrip Word dimuat dari situs ini; berkas tidak diunggah ke server kami.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'Ubah banyak JPG menjadi teks dengan OCR mengunduh ZIP berisi TXT. Di sini kami merakit satu Word yang bisa diedit, satu bagian per foto. Mesin sama, pekerjaan beda.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'Gambar ke Word menempel foto sebagai gambar: huruf tidak bisa dipilih. Di sini OCR menulis paragraf yang bisa diedit. Foto asli opsional, untuk dicek.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'Tidak. Foto yang gagal dilewati; sisanya tetap masuk Word yang sama.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'Setiap foto berhasil jadi satu bagian: judul adalah nama berkas, lalu foto opsional, paragraf OCR, lalu ganti halaman. Kolom dan tabel tidak mengikuti tata letak asli.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'Tidak. Halaman ini tidak menerima PDF. PDF hasil pindai ke Ubah PDF hasil pindai menjadi Word dengan OCR sekaligus. PDF digital dengan lapisan teks ke Ubah PDF menjadi dokumen Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'Huruf cetak paling cocok. Tulisan tangan bersambung sering gagal di baris itu. Ini bukan produk tulisan tangan.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'Bisa. JPEG, PNG, dan WebP antre bersama. Meski satu foto, unduhannya Word, bukan TXT. Satu gambar ke teks pakai Ubah satu JPG menjadi teks dengan OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: 'Apakah foto saya diunggah?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: 'Apa bedanya dengan ubah banyak JPG menjadi teks dengan OCR?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: 'Apa bedanya dengan Gambar ke Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: 'Kalau satu foto gagal, apakah Word kosong?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'Bagaimana tampilan tiap bagian di Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: 'Boleh jatuhkan PDF hasil pindai untuk OCR ke Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: 'Apakah tulisan tangan berhasil?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: 'Boleh PNG, atau hanya satu JPG?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'Ubah tumpukan foto cetak menjadi satu Word yang bisa diedit: tambah gambar, klik Konversi semua (mesin dimuat di klik pertama, lalu membaca satu per satu), kemudian Unduh Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'Jatuhkan beberapa JPG, PNG, atau WebP (atau pilih berkas).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'Opsional: pilih chip bahasa untuk seluruh batch (Tionghoa dan Inggris adalah bawaan).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'Klik Konversi semua — pertama kali memuat mesin OCR di tab ini, lalu membaca foto satu per satu. Foto gagal dilewati.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'Klik Unduh Word — satu dokumen dengan satu bagian per foto (judul, foto opsional, teks yang bisa diedit).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: 'Cara kerjanya',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'Arab',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: 'Inggris',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: 'Jepang',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'Bahasa pengenalan untuk seluruh batch',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: 'Tionghoa',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: 'Tionghoa + Inggris',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: 'Sisi terpanjang sebelum dibaca (px)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: 'Bawaan 2048. Lebih kecil lebih ringan di ponsel.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'Nyala secara bawaan. Tiap bagian menampilkan foto di atas paragraf OCR agar bisa dicek di Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: 'Sertakan foto asli di atas teks',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'Antrean sampai 10 foto. Jika sisi terpanjang melebihi batas, diperkecil lalu dibaca urutan visual. Satu worker OCR jalan berurutan. Baris gagal dilewati; yang berhasil jadi bagian satu Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'Setiap foto berhasil adalah satu bagian Word: Heading 1 nama berkas, lalu foto opsional, paragraf OCR, lalu ganti halaman. Itu JPG ke Word dengan OCR untuk tumpukan, bukan ZIP TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'Berkas tetap di perangkat Anda; tidak diunggah ke server. Skrip dimuat dari situs ini.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'Tulisan tangan, buram parah, dan perspektif kuat sering gagal di baris itu. Tabel jadi baris urutan baca. Kolom tidak mengikuti halaman asli.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'Tanpa PDF. ZIP TXT ada di Ubah banyak JPG menjadi teks dengan OCR. Foto tanpa OCR di Gambar ke Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'Yang perlu diharapkan',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'Muat contoh',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: 'Selesai',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: 'Mengantre',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: 'Membaca',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'Dilewati',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: 'Selesai.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'Memuat mesin OCR…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'Merakit berkas Word…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: 'Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1:
		'Foto beberapa halaman handout lalu unduh satu Word untuk mengganti judul.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2:
		'Ubah foto menu jadi satu dokumen dengan gambar di atas tiap bagian OCR untuk dicek.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3:
		'Kumpulkan tangkapan error ke satu Word yang bisa diedit dan kirim ke rekan.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: 'Cocok untuk',
};

export default id;
