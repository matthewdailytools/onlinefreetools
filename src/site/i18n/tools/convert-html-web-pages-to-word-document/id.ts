/**
 * i18n tool shard (convert-html-web-pages-to-word-document / id).
 * H1: Ubah halaman HTML menjadi dokumen Word.
 * IG: judul/daftar/tabel Word yang bisa diedit — bukan PDF A4, bukan screenshot, bukan PDF→Word, bukan gambar→Word.
 */
import type { SiteLangDict } from '../../../types';

/** Teks tampilan konverter HTML→Word (id). */
const id: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: 'Pengaturan lanjutan (opsional)',
	tool_convert_html_web_pages_to_word_document_article:
		'Tempel HTML atau URL publik, hasilnya .docx yang bisa diedit: judul, daftar, tabel, dan tautan jadi gaya Word. Bukan PDF cetak A4 dan bukan tangkapan layar. HTML yang ditempel tetap di tab ini, tanpa unggah ke server. URL diambil sekali dan tidak disimpan. Butuh cetak? Konversi HTML ke PDF. Sudah punya PDF? Ubah PDF menjadi dokumen Word.',
	tool_convert_html_web_pages_to_word_document_clear: 'Hapus',
	tool_convert_html_web_pages_to_word_document_convert: 'Ubah',
	tool_convert_html_web_pages_to_word_document_desc:
		'Tempel HTML atau ambil URL jadi Word yang bisa diedit; bukan PDF, bukan screenshot.',
	tool_convert_html_web_pages_to_word_document_description:
		'Ubah halaman HTML menjadi dokumen Word (HTML ke Word / HTML ke DOCX): tempel atau ambil URL, dapatkan .docx yang bisa diedit, bukan PDF A4. Langkah: tempel atau ambil, Ubah, Unduh. Contoh: catatan rilis berisi judul dan tabel jadi gaya Word. HTML yang ditempel tetap di tab ini; URL diambil sekali, tidak disimpan.',
	tool_convert_html_web_pages_to_word_document_download: 'Unduh',
	tool_convert_html_web_pages_to_word_document_empty: 'Tempel HTML dulu atau isi URL publik.',
	tool_convert_html_web_pages_to_word_document_err_convert: 'HTML itu gagal jadi file Word. Cek markup lalu coba lagi.',
	tool_convert_html_web_pages_to_word_document_err_load: 'Pustaka Word gagal dimuat. Segarkan lalu coba lagi.',
	tool_convert_html_web_pages_to_word_document_err_url: 'URL itu tidak bisa diambil. Cek alamat, atau situs menolak pengambilan.',
	tool_convert_html_web_pages_to_word_document_err_url_empty: 'Isi dulu URL http(s) yang valid.',
	tool_convert_html_web_pages_to_word_document_example:
		'Muat contoh mengisi HTML catatan rilis (H1, daftar, tabel dua kolom, tautan), menjalankan Ubah, lalu mengaktifkan Unduh. File .docx memakai gaya judul dan tabel — teksnya bisa diubah. Di tab URL, Ubah mengambil alamat yang sedang tayang.',
	tool_convert_html_web_pages_to_word_document_example_title: 'Contoh',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'Unduhannya .docx (HTML ke DOCX). Buka di Word atau editor yang membaca Office Open XML. Bukan .doc biner dan bukan .mhtml Chrome.',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'Konversi HTML ke PDF memotong ke kertas A4 untuk cetak. Di sini HTML dipetakan ke paragraf, judul, daftar, dan tabel yang bisa diedit. HTML sama, hasil beda.',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'Bisa. Buka tab URL, tempel satu https, lalu Ubah. Skrip dibuang. Dinding login dan aplikasi JavaScript sering tidak sama dengan situs hidup. Tata letak CSS tidak dibuat ulang per piksel.',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'HTML yang ditempel tidak keluar dari tab ini dan tidak diunggah ke server. Kalau memakai URL, kami kirim alamat itu sekali untuk mengambil HTML dan tidak menyimpannya. File .docx dirakit di peramban.',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'Ubah PDF menjadi dokumen Word berangkat dari berkas PDF dan lapisan teksnya. Di sini berangkat dari HTML tempelan atau URL. Sudah punya PDF, pakai alat itu.',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'Tidak. Ekspor atau salin HTML. Paket halaman lengkap / MHTML Chrome format lain dan tidak diurai di sini.',
	tool_convert_html_web_pages_to_word_document_faq_q1: 'Hasilnya HTML ke Word / berkas .docx?',
	tool_convert_html_web_pages_to_word_document_faq_q2: 'Bedanya dengan Konversi HTML ke PDF?',
	tool_convert_html_web_pages_to_word_document_faq_q3: 'Bisa ubah URL (halaman web ke Word)?',
	tool_convert_html_web_pages_to_word_document_faq_q4: 'HTML atau URL saya diunggah dan disimpan?',
	tool_convert_html_web_pages_to_word_document_faq_q5: 'Bedanya dengan Ubah PDF menjadi dokumen Word?',
	tool_convert_html_web_pages_to_word_document_faq_q6: 'Bisa ubah simpanan .mhtml Chrome?',
	tool_convert_html_web_pages_to_word_document_how_body:
		'Tekan Ubah lalu Unduh: judul dan tabel jadi gaya Word yang bisa diketik ulang. HTML ke Word, bukan gambar layar.',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'Sumber sudah ada: tetap di Tempel HTML. Satu https publik (halaman web ke Word): tab URL.',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'Tekan Ubah. Skrip dibuang. Judul, daftar, tabel, tautan masuk Word. Gambar gagal dilewati.',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'Butuh <img> di dalam HTML? Buka pengaturan lanjutan — Sertakan gambar default nyala; gambar diblokir tetap dilewati. Mau draf tanpa gaya judul dan tabel Word? Centang Teks polos (gambar ikut dimatikan).',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'Cetak A4: Konversi HTML ke PDF. Screenshot: Ubah banyak halaman web menjadi PNG atau JPG. Sudah PDF: Ubah PDF menjadi dokumen Word.',
	tool_convert_html_web_pages_to_word_document_how_item_5: 'Kalau Ubah berhasil, Unduh. Buka .docx dan sunting teksnya.',
	tool_convert_html_web_pages_to_word_document_how_title: 'Cara kerja',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'Boleh cuplikan atau dokumen HTML utuh. Skrip dibuang sebelum konversi. CSS tata letak tidak dibuat ulang per piksel.',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>Catatan rilis</h1><p>Tempel HTML di sini…</p>',
	tool_convert_html_web_pages_to_word_document_hud_download: 'Unduh berkas Word',
	tool_convert_html_web_pages_to_word_document_hud_elapsed_tpl: '{s} dtk berjalan',
	tool_convert_html_web_pages_to_word_document_hud_fail_hint: 'Periksa HTML atau URL, lalu tekan Ubah lagi.',
	tool_convert_html_web_pages_to_word_document_hud_fail_title: 'Konversi gagal',
	tool_convert_html_web_pages_to_word_document_hud_next: 'Konversi selesai. Langkah berikutnya: unduh .docx, buka, lalu sunting teksnya.',
	tool_convert_html_web_pages_to_word_document_hud_pct_tpl: '{pct}%',
	tool_convert_html_web_pages_to_word_document_hud_step_fetch: 'Ambil',
	tool_convert_html_web_pages_to_word_document_hud_step_map: 'Petakan',
	tool_convert_html_web_pages_to_word_document_hud_step_pack: 'Kemas',
	tool_convert_html_web_pages_to_word_document_hud_title: 'Progres konversi',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'Kalau nyala, <img> yang bisa dibaca peramban dicoba disematkan. Gambar rusak atau diblokir dilewati. Matikan untuk Word teks saja.',
	tool_convert_html_web_pages_to_word_document_imgs_label: 'Sertakan gambar',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'Sertakan gambar mencoba menyematkan foto dari HTML. Teks polos meratakan judul, tabel, dan tautan menjadi paragraf. Posisi CSS tidak dipetakan. Keluaran selalu satu .docx.',
	tool_convert_html_web_pages_to_word_document_plain_hint:
		'Hanya paragraf yang bisa disunting: tanpa gaya judul Word, tanpa objek tabel, tanpa gambar tertanam. Tautan jadi “teks (URL)”. Sel tabel jadi baris dipisah tab.',
	tool_convert_html_web_pages_to_word_document_plain_label: 'Teks polos',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'Satu kali Ubah menghasilkan satu .docx. Judul, paragraf, daftar, tabel, tautan, dan gambar opsional dipetakan. CSS absolut, bilah tetap, dan skrip tidak.',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'HTML yang ditempel tetap di tab ini, tanpa unggah ke server. URL diambil sekali dan tidak disimpan.',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'Default: h1–h6 jadi judul Word, ul/ol daftar, table tabel, a hyperlink. Teks polos di pengaturan lanjutan mengubah semuanya jadi paragraf biasa.',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'Dinding login, aplikasi JavaScript, dan CSS cetak sering tidak sama dengan situs hidup. Ini bukan raster screenshot.',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'Banding Konversi HTML ke PDF: Word yang bisa diedit, bukan kertas A4. Banding Ubah PDF menjadi dokumen Word: masukan HTML atau URL, bukan unggahan PDF. Banding Gambar ke Word: masukan markup, bukan tumpukan foto.',
	tool_convert_html_web_pages_to_word_document_rules_title: 'Aturan yang perlu diantisipasi',
	tool_convert_html_web_pages_to_word_document_sample: 'Muat contoh',
	tool_convert_html_web_pages_to_word_document_status_done: 'Selesai — langkah berikutnya Unduh.',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'Mengambil HTML dari URL…',
	tool_convert_html_web_pages_to_word_document_status_mapping: 'Memetakan HTML jadi paragraf Word…',
	tool_convert_html_web_pages_to_word_document_status_packing: 'Mengemas berkas .docx…',
	tool_convert_html_web_pages_to_word_document_status_working: 'Merakit dokumen Word…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'Tempel HTML',
	tool_convert_html_web_pages_to_word_document_tab_url: 'URL',
	tool_convert_html_web_pages_to_word_document_title: 'Ubah halaman HTML menjadi dokumen Word',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'Satu URL http(s) publik. Kami ambil HTML sekali dan menulis ulang URL CSS/gambar. Skrip dibuang sebelum pemetaan Word.',
	tool_convert_html_web_pages_to_word_document_url_label: 'URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'Ambil URL catatan rilis publik dan biarkan tabel tetap tabel Word yang bisa diedit.',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'Ubah ekspor HTML pusat bantuan jadi draf yang legal bisa komentari — judul tetap judul, bukan gambar pipih.',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'Cetak A4 di Konversi HTML ke PDF, screenshot di PNG massal; ke sini hanya jika butuh .docx yang bisa disunting.',
	tool_convert_html_web_pages_to_word_document_usecases_title: 'Cocok untuk',
};

export default id;
