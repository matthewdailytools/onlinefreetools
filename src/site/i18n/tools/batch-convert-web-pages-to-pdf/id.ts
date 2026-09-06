/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / id).
 * H1 lokal: Ubah banyak halaman web jadi PDF (bukan kerangka Batch convert…).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Tempel satu alamat halaman publik per baris, ubah tiap halaman jadi PDF A4 di tab ini, lewati baris yang gagal, unduh ZIP. Setiap URL diambil sekali lewat server dan tidak disimpan; konversi tetap di perangkat Anda.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Bingkai tangkapan halaman tersembunyi',
	tool_batch_convert_web_pages_to_pdf_clear: 'Hapus',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Berkas',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Status',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Konversi semua',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Ubah banyak halaman web jadi PDF dari daftar URL lalu unduh ZIP; tiap alamat diambil sekali dan tidak disimpan.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Ubah banyak halaman web jadi PDF: tempel satu URL https per baris (maksimal 10), buat PDF A4 di tab ini, lewati yang gagal, unduh ZIP. Langkah: tempel daftar, klik Konversi semua, cek tabel, unduh. Contoh: dua halaman bantuan dan kebijakan sampel jadi dua PDF dalam satu ZIP. Tiap URL diminta sekali ke server dan tidak disimpan; konversi tetap di perangkat. Kalau hanya cuplikan HTML, pakai Ubah HTML jadi PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Unduh ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Tempel setidaknya satu URL halaman dulu.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Halaman ini tidak bisa jadi PDF. Dilewati.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Peramban ini tidak bisa merakit ZIP. Coba peramban yang lebih baru.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'Pustaka konversi gagal dimuat. Segarkan lalu coba lagi.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'Paling banyak 10 URL. Baris ekstra tidak ditambahkan.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'URL itu gagal dimuat. Periksa alamatnya, atau situsnya memblokir pengambilan.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Baris itu bukan URL http(s) yang sah. Dilewati.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Muat contoh mengisi dua URL example.com, membuat dua PDF dari HTML lokal (tanpa mengunjungi situs hidup), dan mengaktifkan Unduh ZIP. Konversi semua yang mengambil alamat yang Anda tempel.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Contoh',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'Konversi berjalan di tab ini. Saat mengubah daftar URL, kami mengirim tiap alamat ke server sekali untuk mengambil HTML; halaman tidak disimpan. PDF dibuat di perangkat Anda dan ZIP dirakit di sini.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'Halaman ini untuk daftar URL (banyak halaman jadi PDF lalu ZIP). Untuk satu cuplikan HTML atau satu alamat plus pratinjau, pakai Ubah HTML jadi PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Tidak. Skrip dihapus. Dinding login, paywall, dan aplikasi yang dirender JavaScript sering tidak cocok dengan situs hidup. CSS cetak juga bisa berbeda.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Baris yang berhasil jadi PDF terpisah dalam satu ZIP. Kami tidak menggabungkannya jadi satu berkas — setelah unduh, pakai Gabungkan berkas jadi satu PDF jika perlu.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Hingga 10 URL http(s). Sisanya diabaikan. Baris gagal dilewati agar batch tetap jalan.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Apakah halaman saya diunggah dan disimpan di server?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Apa bedanya dengan Ubah HTML jadi PDF?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Apakah situs ber-login atau penuh JavaScript sama dengan yang live?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Hasilnya satu PDF atau ZIP berisi banyak berkas?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Berapa URL yang bisa dikonversi sekaligus?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URL dalam antrean',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Tempel daftar halaman publik, ubah satu per satu, lalu bawa ZIP berisi PDF yang berhasil.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Tempel satu URL https per baris (halaman bantuan atau kebijakan cocok).',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Biarkan jeda muat sekitar 1 detik kecuali gambar di PDF kosong.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Tekan Konversi semua. Tiap URL publik diambil sekali; yang gagal dilewati.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'Hanya cuplikan HTML, bukan daftar? Pakai Ubah HTML jadi PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Unduh ZIP setelah minimal satu baris berhasil. Klik Muat contoh untuk dua halaman lokal; panel progres tampil saat konversi.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Cara kerja',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Progres batch',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s} dtk berjalan',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Ambil',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Gambar',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Satu URL http(s) per baris, maksimal 10. Konversi berurutan. Gagal dilewati. PDF sukses masuk ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Tiap URL dikirim sekali ke server untuk HTML dan tidak disimpan. PDF dibuat di tab ini.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Jaringan privat, login, dan halaman hilang hanya menggagalkan baris itu. Sisanya lanjut.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Nama ganda di ZIP menjadi name (2).pdf. Skrip dibuang sebelum tangkapan.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Ini bukan perayap seluruh situs. Tempel URL yang sudah Anda punya.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'Aturan yang perlu diketahui',
	tool_batch_convert_web_pages_to_pdf_sample: 'Muat contoh',
	tool_batch_convert_web_pages_to_pdf_status_done: 'Batch selesai — cek tabel, lalu unduh ZIP.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'Mengambil HTML halaman…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF siap',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'Dilewati',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'Menunggu gambar selesai…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'Menyusun PDF… tab ini bisa terhenti beberapa detik',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'Antri',
	tool_batch_convert_web_pages_to_pdf_status_working: 'Mengonversi batch…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} siap · {skip} dilewati',
	tool_batch_convert_web_pages_to_pdf_title: 'Ubah banyak halaman web jadi PDF',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'Satu URL http(s) publik per baris, hingga 10. Kami mengambil tiap halaman sekali dan menulis ulang URL CSS/gambar. Skrip dibuang sebelum PDF.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URL halaman (satu per baris)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Simpan beberapa halaman bantuan atau dokumen sebagai PDF tanpa membuka satu per satu.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Arsipkan daftar URL kebijakan publik ke ZIP untuk dibaca nanti.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Tempel HTML tetap di Ubah HTML jadi PDF; pakai halaman ini saat tautan sudah banyak.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Cocok untuk',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Detik tambahan setelah gambar mulai dimuat. Bawaan 1. Naikkan jika PDF menampilkan kotak gambar kosong.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Tunggu muat (detik)',
};

export default id;
