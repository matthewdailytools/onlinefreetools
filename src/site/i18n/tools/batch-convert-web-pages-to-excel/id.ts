/**
 * i18n tool shard (batch-convert-web-pages-to-excel / id).
 * H1: Ubah banyak halaman web menjadi Excel.
 * IG: sel tabel HTML dalam satu buku kerja — bukan screenshot, bukan PDF A4, bukan prosa Word.
 */
import type { SiteLangDict } from '../../../types';

/** Teks tampilan konverter web→Excel (id). */
const id: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: 'Pengaturan lanjutan (opsional)',
	tool_batch_convert_web_pages_to_excel_article:
		'Ambil tabel HTML dari daftar URL publik ke satu buku Excel: tiap tabel jadi lembar berisi sel yang bisa disaring. Teks narasi dan tangkapan layar tidak masuk. Bukan PDF cetak A4 dan bukan dokumen Word. Tiap alamat diambil sekali lewat server dan tidak disimpan. HTML yang ditempel tetap di tab ini. Cetak: Ubah banyak halaman web menjadi PDF. Judul yang bisa diedit: Ubah halaman HTML menjadi dokumen Word.',
	tool_batch_convert_web_pages_to_excel_clear: 'Hapus',
	tool_batch_convert_web_pages_to_excel_col_file: 'Lembar',
	tool_batch_convert_web_pages_to_excel_col_status: 'Status',
	tool_batch_convert_web_pages_to_excel_col_url: 'URL',
	tool_batch_convert_web_pages_to_excel_convert: 'Ubah semua',
	tool_batch_convert_web_pages_to_excel_desc:
		'Ambil tabel HTML dari daftar URL jadi satu buku Excel; bukan screenshot, bukan PDF, bukan Word.',
	tool_batch_convert_web_pages_to_excel_description:
		'Ubah banyak halaman web menjadi Excel (tabel HTML ke Excel / HTML ke Excel): tarik tabel ke satu .xlsx, bukan screenshot atau PDF A4. Langkah: tempel URL, Ubah semua, Unduh Excel. Contoh: daftar harga dan stok jadi dua lembar. URL diambil sekali, tidak disimpan.',
	tool_batch_convert_web_pages_to_excel_download: 'Unduh Excel',
	tool_batch_convert_web_pages_to_excel_empty: 'Tempel minimal satu URL halaman, atau pindah ke Tempel HTML.',
	tool_batch_convert_web_pages_to_excel_err_convert: 'Halaman itu tidak punya tabel HTML yang bisa dipakai. Dilewati.',
	tool_batch_convert_web_pages_to_excel_err_html_empty: 'Tempel dulu HTML yang berisi <table>.',
	tool_batch_convert_web_pages_to_excel_err_load: 'Pustaka Excel gagal dimuat. Segarkan lalu coba lagi.',
	tool_batch_convert_web_pages_to_excel_err_too_many: 'Paling banyak 10 URL. Baris ekstra tidak ditambahkan.',
	tool_batch_convert_web_pages_to_excel_err_url: 'URL itu tidak bisa diambil. Cek alamat, atau situs menolak pengambilan.',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'Baris itu bukan URL http(s) yang valid. Dilewati.',
	tool_batch_convert_web_pages_to_excel_example:
		'Muat contoh mengisi URL daftar harga dan stok, merakit satu buku lokal dari dua tabel HTML (tanpa mengunjungi situs hidup), lalu mengaktifkan Unduh Excel. Ubah semua mengambil alamat yang Anda tempel. Tempel HTML memakai pemetaan tabel yang sama tanpa URL.',
	tool_batch_convert_web_pages_to_excel_example_title: 'Contoh',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'HTML yang ditempel tidak keluar dari tab ini. Jika Anda mengubah URL, kami mengirim tiap alamat sekali untuk mengambil HTML dan tidak menyimpannya. File .xlsx dibuat di peramban Anda.',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'Halaman Word memetakan judul, daftar, dan paragraf ke .docx yang bisa diedit. Halaman ini mengabaikan prosa dan hanya menyalin sel tabel HTML ke lembar Excel. Pengambilan sama, hasil beda.',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG adalah tangkapan viewport (ZIP gambar). PDF memotong halaman cetak A4. Di sini angka dan teks yang bisa Anda saring di Excel: satu buku, bukan ZIP foto.',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'Bisa. Satu baris cukup untuk halaman web ke Excel. URL yang berhasil berbagi satu .xlsx dengan banyak lembar.',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'Tidak. Tidak ada OCR dan tidak ada pembaca PDF. Ubah halaman HTML atau tempel markup tabel. Kalau sudah punya CSV, pakai CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'Pakai tab Tempel HTML (HTML ke Excel / tabel HTML ke Excel). Halaman lengkap Chrome / .mhtml di luar cakupan: ekspor HTML atau salin tabel. Ini bukan Excel di web.',
	tool_batch_convert_web_pages_to_excel_faq_q1: 'Apakah halaman saya diunggah dan disimpan?',
	tool_batch_convert_web_pages_to_excel_faq_q2: 'Apa bedanya dengan Ubah halaman HTML menjadi dokumen Word?',
	tool_batch_convert_web_pages_to_excel_faq_q3: 'Bagaimana dengan JPG, PNG, atau PDF massal?',
	tool_batch_convert_web_pages_to_excel_faq_q4: 'Boleh ubah satu URL saja?',
	tool_batch_convert_web_pages_to_excel_faq_q5: 'Bisakah mengekstrak tabel dari PDF?',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'Saya punya HTML atau tabel HTML, bukan URL. Bagaimana Excel daring atau mhtml?',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '{n} URL dalam antrean',
	tool_batch_convert_web_pages_to_excel_how_body:
		'Tempel URL publik yang berisi tabel HTML, tekan Ubah semua, lalu unduh satu buku Excel. Narasi dilewati; hanya sel <table> jadi lembar.',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'Satu URL https per baris (daftar harga dan tabel HTML publik cocok). Satu baris cukup untuk halaman web ke Excel.',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'Tekan Ubah semua. Tiap URL publik diambil sekali; halaman tanpa tabel yang bisa dipakai dilewati, sisanya lanjut.',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'Punya markup, bukan URL (HTML ke Excel / tabel HTML ke Excel)? Buka Tempel HTML, tempel sumber, lalu Ubah semua.',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'Ingin satu lembar per URL, bukan per tabel, atau menyimpan tabel kecil? Buka Pengaturan lanjutan.',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'PDF A4? Ubah banyak halaman web menjadi PDF. Judul? Ubah halaman HTML menjadi dokumen Word. Sudah punya CSV? CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_how_item_6: 'Unduh Excel setelah minimal satu tabel dipetakan.',
	tool_batch_convert_web_pages_to_excel_how_title: 'Cara kerja',
	tool_batch_convert_web_pages_to_excel_html_hint: 'Tempel cuplikan atau dokumen HTML lengkap yang berisi <table>. Pemetaan tetap di tab ini, tidak diunggah.',
	tool_batch_convert_web_pages_to_excel_html_label: 'HTML berisi tabel',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>Jml</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'Lembar',
	tool_batch_convert_web_pages_to_excel_layout_table: 'Satu lembar per tabel HTML',
	tool_batch_convert_web_pages_to_excel_layout_url: 'Satu lembar per URL (tumpuk tabel)',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'Bawaan: satu lembar per tabel HTML dalam satu buku. Menumpuk menaruh semua tabel dari satu URL di satu lembar dengan baris kosong di antaranya. Tabel kecil (kurang dari dua baris atau dua kolom) dilewati agar kisi navigasi tidak memenuhi berkas.',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'Hanya sel <table> HTML yang disalin. Satu URL http(s) per baris, sampai 10. Baris gagal dilewati. Tabel yang berhasil berbagi satu .xlsx. Bukan screenshot ganti ekstensi dan bukan ekspor PDF.',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'Tiap URL dikirim sekali untuk mengambil HTML dan tidak disimpan. HTML tempelan tidak keluar dari tab. Buku kerja dibuat di sini.',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'Jaringan privat, dinding login, dan halaman tanpa <table> gagal di baris itu. Sisanya lanjut.',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan menyisipkan sel kosong. rowspan diratakan (tiap baris mandiri). Skrip dihapus, jadi tabel yang hanya JS akan kosong.',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'Bukan crawler seluruh situs dan bukan Excel di web. Tempel URL atau HTML yang sudah Anda punya. Nama lembar dipotong 31 karakter.',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'Dibanding Ubah halaman HTML menjadi Word: hanya tabel, bukan judul/daftar. Dibanding JPG/PNG/PDF massal: sel dalam satu buku, bukan ZIP raster atau A4. Dibanding CSV ↔ JSON: masukannya halaman, bukan berkas yang sudah ada.',
	tool_batch_convert_web_pages_to_excel_rules_title: 'Aturan yang perlu diantisipasi',
	tool_batch_convert_web_pages_to_excel_sample: 'Muat contoh',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: 'Lewati tabel kecil (kurang dari 2×2)',
	tool_batch_convert_web_pages_to_excel_status_converting: 'Memetakan tabel HTML…',
	tool_batch_convert_web_pages_to_excel_status_done: 'Batch selesai — cek tabel, lalu unduh Excel.',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'Mengambil HTML halaman…',
	tool_batch_convert_web_pages_to_excel_status_ok: 'Tabel dipetakan',
	tool_batch_convert_web_pages_to_excel_status_queued: 'Mengantri',
	tool_batch_convert_web_pages_to_excel_status_skip: 'Dilewati',
	tool_batch_convert_web_pages_to_excel_status_working: 'Mengubah batch…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} siap · {skip} dilewati',
	tool_batch_convert_web_pages_to_excel_tab_html: 'Tempel HTML',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'URL halaman',
	tool_batch_convert_web_pages_to_excel_title: 'Ubah banyak halaman web menjadi Excel',
	tool_batch_convert_web_pages_to_excel_url_hint: 'Satu URL http(s) publik per baris, sampai 10. Tiap halaman diambil sekali. Skrip dihapus. Hanya tabel HTML jadi lembar.',
	tool_batch_convert_web_pages_to_excel_url_label: 'URL halaman (satu per baris)',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'Arsipkan daftar harga atau SKU HTML ke Excel agar jumlah tetap angka yang bisa disaring — PNG hanya piksel.',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'Gabungkan tabel parameter dari dua halaman bantuan ke satu buku, lalu tambah kolom SUM. Word akan menyimpan judul sebagai prosa.',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'Cetak A4 di Ubah banyak halaman web menjadi PDF, CSV yang sudah ada di CSV ↔ JSON; pakai halaman ini ketika sumbernya masih tabel halaman web.',
	tool_batch_convert_web_pages_to_excel_usecases_title: 'Cocok untuk',
};

export default id;
