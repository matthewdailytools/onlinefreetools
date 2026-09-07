/**
 * i18n tool shard (batch-convert-web-pages-to-png / id).
 * H1: Ubah banyak halaman web menjadi PNG. IG vs JPG: PNG tanpa lossy, tepi UI 1 px tajam, latar transparan opsional, 1×/2× — bukan kualitas JPEG, bukan A4.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: 'Pengaturan lanjutan (opsional)',
	tool_batch_convert_web_pages_to_png_article:
		'Setiap URL publik jadi PNG tanpa lossy pada lebar yang Anda pilih (desktop 1280, tablet 768, atau ponsel 390). Latar putih atau transparan, 1× atau 2×, lalu ZIP untuk baris yang berhasil. Cocok untuk screenshot UI tajam — bukan JPEG obrolan dan bukan cetakan A4. Setiap alamat diambil sekali (HTML) dan tidak disimpan. Konversi PNG berjalan di tab ini. File lebih kecil untuk chat: Ubah beberapa halaman web jadi JPG.',
	tool_batch_convert_web_pages_to_png_bg_label: 'Latar',
	tool_batch_convert_web_pages_to_png_bg_transparent: 'Transparan',
	tool_batch_convert_web_pages_to_png_bg_white: 'Putih',
	tool_batch_convert_web_pages_to_png_capture_first: 'Layar pertama',
	tool_batch_convert_web_pages_to_png_capture_frame_title: 'Bingkai tangkapan tersembunyi',
	tool_batch_convert_web_pages_to_png_capture_full: 'Seluruh halaman',
	tool_batch_convert_web_pages_to_png_capture_label: 'Cakupan tangkapan',
	tool_batch_convert_web_pages_to_png_clear: 'Hapus',
	tool_batch_convert_web_pages_to_png_col_file: 'Berkas',
	tool_batch_convert_web_pages_to_png_col_status: 'Status',
	tool_batch_convert_web_pages_to_png_col_url: 'URL',
	tool_batch_convert_web_pages_to_png_convert: 'Ubah semua',
	tool_batch_convert_web_pages_to_png_desc:
		'Daftar URL ke PNG tanpa lossy (latar transparan dan 2× opsional), dikemas ZIP. Bukan JPEG, bukan A4.',
	tool_batch_convert_web_pages_to_png_description:
		'Ubah banyak halaman web menjadi PNG: tangkapan tanpa lossy plus ZIP dari daftar URL. Putih atau transparan, 1× atau 2×. Langkah: tempel URL, Ubah semua, Unduh ZIP. Contoh: dua UI jadi PNG tajam. Satu baris cukup untuk URL ke PNG. Diambil sekali, tidak disimpan; konversi di tab ini.',
	tool_batch_convert_web_pages_to_png_download_zip: 'Unduh ZIP',
	tool_batch_convert_web_pages_to_png_empty: 'Tempel dulu minimal satu URL publik.',
	tool_batch_convert_web_pages_to_png_err_convert: 'Alamat ini tidak bisa jadi PNG. Dilewati.',
	tool_batch_convert_web_pages_to_png_err_fflate: 'Browser ini tidak bisa merakit ZIP. Coba browser yang lebih baru.',
	tool_batch_convert_web_pages_to_png_err_load: 'Pustaka konversi gagal dimuat. Segarkan lalu coba lagi.',
	tool_batch_convert_web_pages_to_png_err_too_many: 'Maksimal 10 URL. Baris berlebih tidak ditambahkan.',
	tool_batch_convert_web_pages_to_png_err_url: 'URL itu tidak bisa dimuat. Periksa alamat, atau situs memblokir pengambilan.',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'Baris itu bukan URL http(s) yang sah. Dilewati.',
	tool_batch_convert_web_pages_to_png_example:
		'Muat contoh mengisi kit komponen dan overlay transparan, membuat dua PNG di tab (tepi 1 px tetap tajam; latar transparan menjaga alfa) tanpa mengambil situs hidup, dan mengaktifkan Unduh ZIP. Ubah semua mengambil URL yang Anda tempel. Lebar, latar, skala, serta seluruh halaman vs layar pertama mengubah piksel.',
	tool_batch_convert_web_pages_to_png_example_title: 'Contoh',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'Baris yang berhasil jadi PNG terpisah dalam satu ZIP. Satu URL tetap jalan (tangkapan layar web PNG / URL ke PNG tanpa lossy): tempel satu baris. Beberapa gambar tidak digabung jadi satu berkas.',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'Konversi berjalan di tab ini. Jika Anda mengubah daftar URL, kami kirim tiap alamat sekali ke server kami untuk mengambil HTML; kami tidak menyimpan halaman. PNG dibuat di peramban Anda dan ZIP dirakit di sini — hasil tidak diunggah ke server untuk disimpan.',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'Saudara JPG menulis JPEG lossy (penggeser kualitas) untuk chat dan tiket. Di sini artefaknya PNG tanpa lossy agar tepi UI 1 px dan teks tetap tajam, plus latar transparan opsional dan 1×/2×. Daftar URL sama, berkas berbeda — tanpa penggeser JPEG.',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'Tidak. Skrip dibuang. Dinding login, paywall, dan aplikasi yang digambar JavaScript jarang cocok dengan tampilan setelah masuk. CSS responsif mengikuti lebar yang Anda pilih.',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'Ubah banyak halaman web jadi PDF memotong ke A4 untuk dibaca dan dicetak. Di sini satu raster PNG per URL. Butuh kertas cetak? Pakai alat PDF.',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'Transparan hanya terlihat di bagian yang punya alfa (atau tidak diisi warna padat). Beranda putih tetap putih. 2× menggandakan piksel (tinjauan retina) dan memperbesar berkas. Blok warna padat tidak bisa “dilubangi” sampai papan catur.',
	tool_batch_convert_web_pages_to_png_faq_q1: 'Hasilnya satu PNG atau ZIP? Bisa ubah satu URL saja?',
	tool_batch_convert_web_pages_to_png_faq_q2: 'Apakah halaman saya diunggah dan disimpan di server?',
	tool_batch_convert_web_pages_to_png_faq_q3: 'Apa bedanya dengan Ubah beberapa halaman web jadi JPG?',
	tool_batch_convert_web_pages_to_png_faq_q4: 'Situs login atau penuh JavaScript akan sama dengan yang live?',
	tool_batch_convert_web_pages_to_png_faq_q5: 'Apa bedanya dengan Ubah banyak halaman web jadi PDF?',
	tool_batch_convert_web_pages_to_png_faq_q6: 'Kapan latar transparan terlihat, dan apa yang diubah 2×?',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '{n} URL dalam antrean',
	tool_batch_convert_web_pages_to_png_how_body:
		'Tekan Ubah semua dulu (bawaan: desktop 1280, latar putih, 1×, seluruh halaman), lalu unduh ZIP PNG yang berhasil. Satu baris URL sudah cukup jika Anda hanya butuh tangkapan layar web PNG.',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'Tempel satu URL https per baris (kit komponen dan dokumen UI publik cocok). Satu baris cukup untuk URL ke PNG.',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'Tekan Ubah semua. Bawaan: desktop 1280, putih, 1×, seluruh halaman. Setiap URL publik diambil sekali; baris gagal dilewati.',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'Butuh latar transparan, 2×, lebar ponsel, atau hanya layar pertama? Buka Pengaturan lanjutan (opsional) untuk lebar, latar, skala, cakupan, dan jeda muat.',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'JPEG lebih kecil untuk chat: Ubah beberapa halaman web jadi JPG. A4 untuk cetak: Ubah banyak halaman web jadi PDF. Foto sudah di perangkat: Ubah gambar menjadi PNG sekaligus.',
	tool_batch_convert_web_pages_to_png_how_item_5: 'Bila minimal satu baris berhasil, tekan Unduh ZIP.',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'Muat contoh mencoba dua UI lokal; panel kemajuan tampil saat konversi.',
	tool_batch_convert_web_pages_to_png_how_title: 'Cara kerja',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: '{s}d berlalu',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: 'Ambil',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: 'Gambar',
	tool_batch_convert_web_pages_to_png_hud_title: 'Kemajuan batch',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'Lebar tampilan mengubah tata letak. Latar transparan menjaga alfa. 2× menggandakan piksel. Seluruh halaman adalah tangkapan tinggi; layar pertama kira-kira setinggi satu viewport.',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'Satu URL http(s) per baris, hingga 10. Serial. Gagal dilewati. PNG sukses masuk ZIP. Latar dan skala mengubah piksel — bukan JPEG ganti ekstensi dan bukan ekspor PDF.',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'Setiap URL dikirim sekali ke server kami untuk mengambil HTML dan tidak disimpan. PNG dibuat di tab ini.',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'Jaringan privat, login, dan alamat hilang menggagalkan baris itu. Sisa batch lanjut.',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'Nama ZIP kembar jadi name (2).png. Skrip dan jebakan noscript muat ulang dibuang. Tangkapan sangat tinggi dibatasi agar tab tidak crash.',
	tool_batch_convert_web_pages_to_png_rules_item_4: 'Bukan crawler seluruh situs. Tempel URL yang sudah Anda punya.',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'Dibanding batch JPG: PNG tanpa lossy, tanpa penggeser JPEG, latar transparan opsional. Dibanding batch PDF: tanpa pemotongan A4. Dibanding Ubah gambar menjadi PNG sekaligus: masukan adalah URL web, bukan foto di perangkat.',
	tool_batch_convert_web_pages_to_png_rules_title: 'Aturan yang perlu diketahui',
	tool_batch_convert_web_pages_to_png_sample: 'Muat contoh',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2× (retina)',
	tool_batch_convert_web_pages_to_png_scale_label: 'Skala piksel',
	tool_batch_convert_web_pages_to_png_status_converting: 'Menggambar PNG… tab ini mungkin diam beberapa detik',
	tool_batch_convert_web_pages_to_png_status_done: 'Batch selesai — cek tabel, lalu unduh ZIP.',
	tool_batch_convert_web_pages_to_png_status_fetching: 'Mengambil HTML…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG siap',
	tool_batch_convert_web_pages_to_png_status_queued: 'Antrean',
	tool_batch_convert_web_pages_to_png_status_skip: 'Dilewati',
	tool_batch_convert_web_pages_to_png_status_waiting: 'Menunggu gambar selesai…',
	tool_batch_convert_web_pages_to_png_status_working: 'Mengubah batch…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} siap · {skip} dilewati',
	tool_batch_convert_web_pages_to_png_title: 'Ubah banyak halaman web menjadi PNG',
	tool_batch_convert_web_pages_to_png_url_hint:
		'Satu URL http(s) publik per baris, hingga 10. Kami ambil sekali dan menulis ulang URL CSS/gambar. Skrip dibuang sebelum tangkapan. Tata letak mengikuti lebar tampilan.',
	tool_batch_convert_web_pages_to_png_url_label: 'URL (satu per baris)',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'Simpan kit komponen sebagai PNG tajam agar label dan tepi 1 px tetap terbaca. JPEG mengaburkan pinggir.',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'Ekspor panel mengambang dengan PNG transparan lalu taruh di Figma. Beranda putih padat tetap putih.',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'JPEG chat tetap di Ubah beberapa halaman web jadi JPG; A4 di Ubah banyak halaman web jadi PDF. Pakai ini hanya untuk raster UI tanpa lossy.',
	tool_batch_convert_web_pages_to_png_usecases_title: 'Cocok untuk',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'Desktop 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: 'Lebar tampilan',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'Ponsel 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'Tablet 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'Detik tambahan setelah gambar jarak jauh mulai dimuat. Bawaan 1. Naikkan jika PNG menampilkan kotak kosong.',
	tool_batch_convert_web_pages_to_png_wait_label: 'Jeda muat (dtk)',
};

export default id;
