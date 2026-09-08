/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / id).
 * H1 lokal: Ubah PDF hasil pindai menjadi Word dengan OCR sekaligus.
 * Nama kunci sama dengan en.ts; isi ditulis ulang, bukan salinan kerangka Inggris.
 */
import type { SiteLangDict } from '../../../types';

/** Salinan antarmuka dan penjelasan alat ini dalam bahasa Indonesia. */
const id: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: 'Pengaturan lanjutan (opsional)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'Kalau PDF-nya hasil pindai (huruf tidak bisa disorot), antrekan di sini lalu Konversi semua dan Unduh Word. Bawaan: satu Word untuk seluruh antrean; bisa diganti satu Word per PDF (beberapa yang berhasil lalu Unduh ZIP). Tiap berkas jadi judul; tiap halaman berhasil jadi paragraf yang bisa diedit. Gambar halaman ikut secara bawaan supaya bisa dicek. Halaman buram dilewati, sisanya tetap di dokumen yang sama. Berkas tetap di perangkat, tanpa unggah ke server. PDF yang sudah punya lapisan teks: Ubah PDF menjadi dokumen Word. Tumpukan foto: Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'Pilih berkas PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'Hapus',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'Berkas',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'Catatan',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'Halaman',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: 'Status',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'Konversi semua',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} berkas (maks. 5, 20 halaman)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'Ubah PDF hasil pindai menjadi Word dengan OCR sekaligus: antrekan, Konversi semua, Unduh Word — tetap di perangkat, tanpa unggah ke server.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'PDF pindai ke Word dikerjakan di tab ini: halaman digambar, dibaca, lalu jadi satu DOCX yang bisa diedit. Urutan: tambah PDF, Konversi semua, Unduh Word. Contoh: PDF cetak dua halaman jadi satu Word berjudul dengan gambar halaman opsional. Orang juga mencari OCR PDF ke Word atau beberapa PDF ke Word. Berkas tetap di perangkat, tanpa unggah ke server. Lapisan teks siap pakai ada di Ubah PDF menjadi dokumen Word. Foto ada di Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'Unduh Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'Unduh ZIP',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'Jatuhkan PDF hasil pindai di sini (maks. 5 berkas, 20 halaman). Proses tetap di tab ini.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: 'Tambahkan PDF hasil pindai dulu.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'Peramban ini tidak merakit berkas Word. Coba peramban yang lebih baru.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'Peramban ini tidak merakit berkas ZIP. Coba peramban yang lebih baru.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty:
		'Tidak ada huruf cetak di halaman itu. Dilewati. Pakai pindaian yang lebih tajam, bukan tulisan tangan.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'PDF itu berkatasandi. Tidak ditambahkan.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'Gambar PDF atau mesin OCR gagal dimuat. Muat ulang lalu Konversi semua. Halaman yang sudah selesai masih bisa diunduh.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'Halaman ini menerima PDF hasil pindai, bukan foto. JPG, PNG, atau WebP pakai Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR. Berkas itu tidak ditambahkan.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'PDF itu tidak bisa dibaca. Dilewati.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'Perender PDF tidak dimuat di tab ini. Muat ulang lalu coba lagi.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: 'Lebih dari 12 MB. Kompres dulu. Berkas itu tidak ditambahkan.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'Maksimal 5 PDF. Kelebihan tidak ditambahkan.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: 'Satu batch membaca paling banyak 20 halaman. Berkas ekstra tidak ditambahkan.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'Muat contoh menaruh sample-scan.pdf (halaman 1: ONLINEFREETOOLS dan The quick brown fox; halaman 2: SAMPLE TWO dan Printed sample page), menjalankan Konversi semua, dan mengaktifkan Unduh Word dengan satu judul dan dua halaman.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: 'Contoh',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'Tidak. PDF tetap di tab peramban ini. Skrip gambar, OCR, dan rakitan Word dimuat dari situs ini; berkas tidak diunggah ke server kami.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'Ubah PDF menjadi dokumen Word menyalin lapisan teks yang sudah ada dan tidak menjalankan OCR. Di sini tiap halaman digambar lalu gambarnya dibaca, jadi pindaian tanpa teks tersorot tetap bisa jadi paragraf. Kalau kata sudah bisa disorot, pakai alat itu.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR adalah antrean foto. Di sini hanya PDF. JPG yang dijatuhkan ditolak dengan sengaja.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'Tidak. Halaman yang gagal dilewati; halaman lain dan PDF lain tetap masuk Word yang sama.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'Mode bawaan «satu Word se-batch»: setiap PDF berhasil jadi judul (nama berkas). Setiap halaman berhasil: gambar opsional, paragraf OCR, ganti halaman. Mau dokumen terpisah, pilih satu Word per PDF. Tabel dan kolom tidak mengikuti tata letak asli.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'Tidak. Foto ada di Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR. Zona jatuh di sini PDF saja.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'Huruf cetak paling andal. Tulisan tangan bersambung sering gagal di halaman itu. Ini bukan produk tulisan tangan.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'Hasilnya Word, bukan TXT dan bukan PDF yang bisa dicari yang ditulis ulang. Yang mencari PDF pindai ke Word atau OCR PDF ke Word untuk berkas hasil scan ada di sini. Dump lapisan teks ada di Ekstrak teks dari PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'Paling banyak 5 PDF, 12 MB masing-masing, 20 halaman se-batch. Satu PDF pun memakai Konversi semua lalu Unduh Word; tidak ada alamat terpisah untuk berkas tunggal.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'Bisa. Pilih satu Word per PDF, lalu Konversi semua. Satu PDF yang berhasil tetap memakai Unduh Word. Dua atau lebih yang berhasil memakai Unduh ZIP, berisi satu .docx per berkas masukan. Gabung jadi satu Word tetap bawaan.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: 'Berkas saya dikirim ke server?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: 'PDF-nya sudah bisa disorot teksnya. Salah tempat — harusnya Ubah PDF menjadi dokumen Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: 'Saya punya tumpukan JPG, bukan PDF. Ke mana?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: 'Satu halaman gagal. Word-nya kosong semua?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'Isi berkas Word seperti apa?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: 'Boleh jatuhkan foto JPG di sini?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: 'OCR tulisan tangan jalan di sini?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: 'Keluaran TXT / PDF yang bisa dicari, atau Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: 'Batas berkas dan halaman berapa?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: 'Bisa satu Word per PDF, tidak digabung?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'Pindaian kertas jadi Word yang bisa diedit: tambah PDF, klik Konversi semua (klik pertama memuat gambar PDF dan mesin OCR di tab ini, lalu halaman demi halaman), kemudian Unduh Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'Jatuhkan satu atau lebih PDF hasil pindai (atau pilih berkas).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: 'Opsional: pilih chip bahasa untuk seluruh batch (Tionghoa dan Inggris bawaan).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'Opsional: tetap satu Word se-batch, atau satu Word per PDF (beberapa PDF berhasil lalu Unduh ZIP).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'Klik Konversi semua — jalankan pertama memuat gambar PDF dan mesin OCR di tab ini, lalu membaca halaman satu per satu. Halaman gagal dilewati.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'Klik Unduh Word — atau Unduh ZIP jika Anda memilih satu Word per PDF dan lebih dari satu berkas berhasil.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: 'Cara pakai',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: '{s}d berlalu',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: 'Muat ulang lalu Konversi semua. Halaman yang sudah dibaca masih bisa diunduh.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: 'Konversi berhenti',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: 'Selesai. Langkah berikutnya: Unduh Word, atau Unduh ZIP jika Anda memilih satu Word per PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: 'Muat',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: 'Rakit',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: 'Baca',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: 'Gambar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: 'Kemajuan konversi',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: 'Mulai…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'Arab',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'Inggris',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: 'Jepang',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'Bahasa pengenalan untuk seluruh batch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: 'Tionghoa',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: 'Tionghoa + Inggris',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: 'Sisi terpanjang sebelum dibaca (px)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: 'Bawaan 2048. Lebih kecil lebih ringan di ponsel.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'Bawaan satu berkas Word. Satu Word per PDF: Unduh Word jika hanya satu yang berhasil; Unduh ZIP jika beberapa berhasil.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Ekspor Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'Satu Word untuk seluruh batch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'Satu Word per PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint:
		'Nyala secara bawaan. Tiap halaman Word menampilkan pindaian di atas paragraf OCR untuk dicek.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: 'Sertakan gambar halaman di atas teks',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · halaman {page}/{pages}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'Antrean sampai 5 berkas dan 20 halaman. Tiap halaman digambar, diperkecil jika sisi terpanjang melewati batas, lalu dibaca urutan visual. Satu pekerja OCR jalan berurutan. Halaman gagal dilewati. Ekspor bisa satu Word gabungan atau satu Word per PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'Bawaan: satu Word, judul per PDF, gambar opsional dan paragraf OCR per halaman, lalu ganti halaman. Satu Word per PDF: tiap masukan berhasil jadi .docx sendiri; beberapa berkas diunduh sebagai ZIP. Bukan ZIP berisi TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2:
		'Berkas tetap di perangkat Anda; tidak diunggah ke server. Skrip dimuat dari situs ini.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'Tulisan tangan, buram parah, dan perspektif kuat sering gagal di halaman itu. Tabel jadi baris urutan baca. Kolom tidak mengikuti pindaian asli. PDF digital berlapisan teks tetap diraster di sini; pakai Ubah PDF menjadi dokumen Word jika Anda hanya butuh lapisan itu.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'Tanpa masukan foto. Tumpukan JPG ada di Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR. Tidak menulis PDF yang bisa dicari dan tidak mengunduh TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: 'Yang perlu diharapkan',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'Muat contoh',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: 'Selesai',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: 'Mengantre',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: 'Membaca',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: 'Menggambar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'Dilewati',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: 'Berjalan',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: 'Selesai.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: 'Memuat gambar PDF dan OCR…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'Merakit berkas Word…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'Ubah PDF hasil pindai menjadi Word dengan OCR sekaligus',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1:
		'Masukkan PDF kuliah hasil pindai lalu unduh satu Word untuk mengganti judul bagian.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2:
		'Gabungkan dua kontrak hasil pindai jadi satu dokumen pengecekan, gambar halaman di atas tiap bagian OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3:
		'Ubah pindaian faktur banyak halaman jadi Word agar rekan bisa menyunting (kolom faktur tidak diekstrak).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'Cocok untuk',
};

export default id;
