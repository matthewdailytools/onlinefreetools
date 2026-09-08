/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / id).
 * 当地主词：Ubah banyak JPG menjadi teks dengan OCR.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: 'Pengaturan lanjutan (opsional)',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'Masukkan beberapa foto cetak atau tangkapan layar, klik Konversi semua, lalu unduh ZIP. Tiap gambar jadi .txt; berkas gabungan memisahkan nama file. Foto buram dilewati. File tetap di perangkat, tanpa unggah ke server. Satu foto saja? Pakai Ubah JPG jadi teks dengan OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'Pilih JPG, PNG, atau WebP',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'Hapus',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'Catatan',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'Berkas',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'Piksel',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: 'Status',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'Default aktif. ZIP berisi combined.txt dengan --- nama berkas --- di antara foto.',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'Sertakan combined.txt di ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'Konversi semua',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'Disalin.',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: 'Salin teks gabungan',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} berkas (maks. 10)',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'Ubah banyak JPG jadi teks dengan OCR: antre, Konversi semua, ZIP — tetap di perangkat, tanpa unggah ke server.',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'Masukkan beberapa JPG atau screenshot lalu unduh ZIP berisi teks. Pengenalan berjalan di tab ini, satu foto setelah yang lain, tanpa unggah ke server. Langkah: tambah gambar, Konversi semua, Unduh ZIP. Contoh: dua foto cetak jadi dua TXT plus berkas gabungan. Juga disebut OCR massal. Satu foto? Pakai halaman tunggal.',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'Unduh ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint: 'Jatuhkan beberapa foto di sini (maks. 10). Proses tetap di tab ini.',
	tool_batch_convert_jpg_to_text_with_ocr_empty: 'Tambahkan foto dulu.',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'Tidak ada teks cetak. Dilewati. Coba halaman lebih tajam, bukan tulisan tangan.',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'Mesin OCR gagal dimuat. Segarkan lalu Konversi semua. Baris selesai tetap bisa diunduh.',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'ZIP tidak bisa dibuat di peramban ini. Coba peramban lebih baru.',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: 'Gambar tidak terbaca. Pakai JPEG, PNG, atau WebP. Dilewati.',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: 'Halaman ini membaca foto, bukan PDF. Berkas itu tidak masuk antrean.',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: 'Lebih dari 12 MB. Kompres atau potong dulu. Dilewati.',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: 'Paling banyak 10 foto. Kelebihan tidak ditambahkan.',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'Muat contoh menambahkan sample-1.jpg dan sample-2.jpg, menjalankan Konversi semua, lalu mengaktifkan Unduh ZIP berisi dua TXT dan combined.txt.',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: 'Contoh',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'Tidak. Foto tetap di tab peramban. Skrip mesin dan ZIP dari situs ini; berkas tidak diunggah ke server kami.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'Halaman satu JPG menyalin satu teks. Di sini ada antrean: Konversi semua, lewati baris gagal, Unduh ZIP. Mesin sama, pekerjaan beda.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3:
		'Tidak. Foto itu dilewati, sisanya jalan. Yang berhasil tetap masuk ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'Satu .txt per foto, nama mengikuti asli. Combined.txt default, dengan --- nama berkas --- antar halaman, supaya banyak JPG jadi teks sekali unduh.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'Untuk satu foto pakai Ubah JPG jadi teks dengan OCR. Di sini tombolnya Konversi semua dan Unduh ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6: 'Ya. JPEG, PNG, dan WebP dalam antrean yang sama, tanpa URL baru.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'Huruf cetak paling bagus. Tulisan tangan sering gagal di baris itu. Bukan jasa pindai dokumen.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'Tanpa PDF atau spreadsheet. Word yang bisa diedit dengan OCR ada di Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR. PDF digital berlapisan teks ke Ekstrak teks dari PDF.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: 'Apakah foto diunggah ke server?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: 'Apa bedanya dengan mengubah satu JPG dengan OCR?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: 'Kalau satu foto gagal, apakah seluruh batch berhenti?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'Isi ZIP-nya apa?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: 'Saya cuma punya satu foto. Boleh pakai ini?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'Bisa massal PNG atau screenshot WebP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: 'Apakah tulisan tangan atau jasa pindai jalan di sini?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: 'Boleh jatuhkan PDF hasil pindai?',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'Ubah tumpukan foto cetak jadi ZIP teks: tambah gambar, klik Konversi semua (mesin dimuat di klik pertama, lalu baca satu per satu), kemudian Unduh ZIP atau Salin teks gabungan.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'Jatuhkan beberapa JPG, PNG, atau WebP (atau pilih berkas).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2:
		'Opsional: pilih bahasa untuk seluruh batch (China dan Inggris default).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'Klik Konversi semua — pertama kali memuat mesin OCR di tab ini, lalu membaca foto satu per satu. Foto gagal dilewati.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4:
		'Klik Unduh ZIP (satu TXT per foto, plus berkas gabungan) atau Salin teks gabungan.',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: 'Cara kerja',
	tool_batch_convert_jpg_to_text_with_ocr_hud_elapsed_tpl: "{s}d berlalu",
	tool_batch_convert_jpg_to_text_with_ocr_hud_fail_hint: "Muat ulang lalu Konversi semua. Baris selesai masih bisa diunduh.",
	tool_batch_convert_jpg_to_text_with_ocr_hud_fail_title: "Konversi berhenti",
	tool_batch_convert_jpg_to_text_with_ocr_hud_load_api: "Menyalakan pembaca…",
	tool_batch_convert_jpg_to_text_with_ocr_hud_load_core: "Pertama kali: memuat mesin OCR (~4 MB). Tetap di tab ini — bisa sekitar satu menit.",
	tool_batch_convert_jpg_to_text_with_ocr_hud_load_lang: "Pertama kali: memuat data bahasa (beberapa MB). Berikutnya dipakai ulang.",
	tool_batch_convert_jpg_to_text_with_ocr_hud_load_script: "Memuat skrip OCR…",
	tool_batch_convert_jpg_to_text_with_ocr_hud_next: "Selesai. Langkah berikutnya: Unduh ZIP.",
	tool_batch_convert_jpg_to_text_with_ocr_hud_pct_tpl: "{pct}%",
	tool_batch_convert_jpg_to_text_with_ocr_hud_step_load: "Muat",
	tool_batch_convert_jpg_to_text_with_ocr_hud_step_read: "Baca",
	tool_batch_convert_jpg_to_text_with_ocr_hud_title: "Kemajuan konversi",
	tool_batch_convert_jpg_to_text_with_ocr_hud_working: "Mulai…",
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'Arab',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: 'Inggris',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: 'Jepang',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: 'Bahasa pengenalan untuk seluruh batch',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: 'China',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: 'China + Inggris',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: 'Sisi terpanjang sebelum dibaca (px)',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: 'Default 2048. Di ponsel, lebih kecil lebih hemat memori.',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: 'Pratinjau teks gabungan',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'Maksimal 10 foto. Jika sisi panjang melebihi batas, diperkecil. Satu worker OCR membaca berurutan. Baris gagal dilewati; teks berhasil masuk ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'Nama ZIP mengikuti berkas asli. Combined.txt (default nyala) menyisipkan --- nama berkas --- antar foto, seperti buku yang dipotret.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'Berkas tetap di perangkat, tidak diunggah ke server. Skrip dimuat dari situs ini.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'Tulisan tangan, buram parah, dan perspektif kuat sering gagal di baris itu. Tabel jadi baris urutan baca, bukan CSV.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'Tanpa PDF, Word, atau PDF yang bisa dicari. Satu foto dengan salin teks ke Ubah JPG jadi teks dengan OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: 'Yang perlu diantisipasi',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'Muat contoh',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: 'Selesai',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: 'Antri',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: 'Membaca',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'Dilewati',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: 'Selesai.',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: "Pertama kali memuat mesin OCR (~4 MB). Tetap di tab ini…",
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: 'Ubah banyak JPG menjadi teks dengan OCR',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1: 'Foto beberapa lembar handout lalu unduh ZIP TXT untuk catatan.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2:
		'Ubah tumpukan tangkapan chat atau error jadi teks saat piksel tidak bisa dipilih.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3:
		'Gabungkan foto menu jadi combined.txt berpemisah nama, lalu salin untuk dikoreksi.',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'Cocok kapan',
};

export default id;
