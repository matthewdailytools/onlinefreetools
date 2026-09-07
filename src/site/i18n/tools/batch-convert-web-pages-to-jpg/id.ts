/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / id).
 * H1: Ubah beberapa halaman web jadi JPG (bukan calque Batch convert…).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: 'Pengaturan lanjutan (opsional)',
	tool_batch_convert_web_pages_to_jpg_article:
		'Tempel satu alamat halaman publik per baris, potret tiap halaman jadi JPEG pada lebar yang Anda pilih, lewati baris yang gagal, lalu unduh ZIP. Tiap URL diambil sekali lewat server dan tidak disimpan; gambar dibuat di tab ini. Ini tangkapan layar, bukan PDF A4.',
	tool_batch_convert_web_pages_to_jpg_capture_first: 'Layar pertama saja',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: 'Bingkai tangkapan tersembunyi',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'Seluruh halaman',
	tool_batch_convert_web_pages_to_jpg_capture_label: 'Cakupan tangkapan',
	tool_batch_convert_web_pages_to_jpg_clear: 'Hapus',
	tool_batch_convert_web_pages_to_jpg_col_file: 'Berkas',
	tool_batch_convert_web_pages_to_jpg_col_status: 'Status',
	tool_batch_convert_web_pages_to_jpg_col_url: 'URL',
	tool_batch_convert_web_pages_to_jpg_convert: 'Ubah semua',
	tool_batch_convert_web_pages_to_jpg_desc:
		'Ubah beberapa halaman web jadi JPG dari daftar URL, lalu unduh ZIP. Tiap alamat diambil sekali dan tidak disimpan.',
	tool_batch_convert_web_pages_to_jpg_description:
		'Ubah beberapa halaman web jadi JPG dari daftar URL (satu baris pun cukup). Pilih lebar layar dan mutu JPEG, seluruh halaman atau layar pertama, lalu unduh ZIP. Langkah: tempel URL, Ubah semua, Unduh ZIP. Contoh: dua halaman bantuan jadi dua JPEG. Tiap URL diminta sekali dan tidak disimpan.',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'Unduh ZIP',
	tool_batch_convert_web_pages_to_jpg_empty: 'Tempel setidaknya satu URL halaman dulu.',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'Halaman ini gagal jadi JPEG. Dilewati.',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'Peramban ini tidak bisa merakit ZIP. Coba yang lebih baru.',
	tool_batch_convert_web_pages_to_jpg_err_load: 'Pustaka konversi gagal dimuat. Segarkan lalu coba lagi.',
	tool_batch_convert_web_pages_to_jpg_err_too_many: 'Paling banyak 10 URL. Baris ekstra tidak dimasukkan.',
	tool_batch_convert_web_pages_to_jpg_err_url: 'URL itu gagal dimuat. Periksa alamat, atau situsnya menolak pengambilan.',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'Baris itu bukan URL http(s) yang sah. Dilewati.',
	tool_batch_convert_web_pages_to_jpg_example:
		'Muat contoh mengisi dua URL example.com, merakit dua JPEG dari HTML lokal (tanpa mengunjungi situs live), dan mengaktifkan Unduh ZIP. Ubah semua mengambil alamat yang Anda tempel. Lebar layar, mutu, dan seluruh halaman vs layar pertama mengubah piksel.',
	tool_batch_convert_web_pages_to_jpg_example_title: 'Contoh',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'Konversi berjalan di tab ini. Saat mengubah daftar, kami kirim tiap alamat ke server sekali untuk mengambil HTML; halaman tidak disimpan. JPEG dibuat di perangkat Anda dan dikemas ZIP di sini.',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'Saudara PDF memotong ke halaman A4 untuk dibaca dan dicetak. Halaman ini meraster satu JPEG per URL pada lebar yang Anda pilih (desktop 1280, tablet 768, atau ponsel 390), plus mutu dan seluruh halaman atau layar pertama. Daftar sama, berkas beda.',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'PDF ke JPG dimulai dari berkas PDF yang Anda unggah. Di sini titik awalnya URL halaman. Sudah punya PDF? Pakai PDF ke JPG. Punya daftar tautan? Pakai halaman ini.',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'Tidak. Skrip dihapus. Dinding login, paywall, dan aplikasi yang banyak JavaScript sering tidak cocok dengan situs live. CSS responsif mengikuti lebar layar yang dipilih.',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'Baris yang berhasil jadi JPEG terpisah dalam satu ZIP. Satu URL tetap jalan. Gambar tidak digabung jadi satu berkas.',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'Lebar layar mengubah tata letak (ponsel vs desktop). Mutu JPEG menyeimbangkan ukuran dan artefak. Seluruh halaman mengambil tinggi gulir (ada batas agar tab tidak crash); layar pertama kira-kira satu tinggi viewport.',
	tool_batch_convert_web_pages_to_jpg_faq_q1: 'Apakah halaman saya diunggah dan disimpan di server?',
	tool_batch_convert_web_pages_to_jpg_faq_q2: 'Apa bedanya dengan mengubah beberapa halaman web jadi PDF?',
	tool_batch_convert_web_pages_to_jpg_faq_q3: 'Apa bedanya dengan PDF ke JPG?',
	tool_batch_convert_web_pages_to_jpg_faq_q4: 'Situs yang butuh login atau banyak JavaScript, apakah sama dengan yang live?',
	tool_batch_convert_web_pages_to_jpg_faq_q5: 'Hasilnya satu JPG atau ZIP? Bisa ubah satu URL saja?',
	tool_batch_convert_web_pages_to_jpg_faq_q6: 'Apa yang diubah lebar layar, mutu JPEG, dan layar pertama?',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '{n} URL dalam antrean',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'Tempel daftar halaman publik, tekan Ubah semua (bawaan desktop 1280, JPEG 85%, seluruh halaman), lalu bawa ZIP dari yang berhasil.',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'Tempel satu URL https per baris (halaman bantuan atau tiket cocok). Satu baris cukup untuk URL ke JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_2: 'Tekan Ubah semua. Bawaan: desktop 1280, JPEG 85%, seluruh halaman. Tiap URL publik diambil sekali; baris gagal dilewati.',
	tool_batch_convert_web_pages_to_jpg_how_item_3: 'Perlu tampilan ponsel, layar pertama saja, atau jeda lebih lama jika gambar kosong? Buka Pengaturan lanjutan untuk lebar, mutu JPEG, jangkauan, dan jeda muat.',
	tool_batch_convert_web_pages_to_jpg_how_item_4: 'Butuh berkas A4 yang bisa dicetak, bukan tangkapan? Pakai Ubah beberapa halaman web jadi PDF. Sudah punya PDF? Pakai PDF ke JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_5: 'Unduh ZIP setelah setidaknya satu baris berhasil.',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'Muat contoh untuk dua halaman lokal; panel kemajuan tampil saat mengubah.',
	tool_batch_convert_web_pages_to_jpg_how_title: 'Cara kerjanya',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: '{s}d berlalu',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: 'Ambil',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: 'Gambar',
	tool_batch_convert_web_pages_to_jpg_hud_title: 'Kemajuan batch',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'Lebar layar mengubah tata letak. Mutu JPEG mengubah ukuran berkas. Seluruh halaman adalah potret tinggi; layar pertama kira-kira satu viewport.',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'Mutu JPEG',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'Satu URL http(s) per baris, paling banyak 10. Konversi berurutan. Baris gagal dilewati. JPEG yang sukses masuk ZIP. Lebar, mutu, dan cakupan mengubah piksel — ini bukan PDF ganti ekstensi.',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'Tiap URL dikirim ke server sekali untuk mengambil HTML dan tidak disimpan. JPEG dibuat di tab ini.',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'Jaringan privat, login, dan halaman hilang menggagalkan baris itu. Sisa batch tetap jalan.',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'Nama ZIP kembar menjadi name (2).jpg. Skrip dan jebakan refresh noscript dihapus. Beranda sangat tinggi dibatasi agar kanvas tidak meruntuhkan tab.',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'Ini bukan crawler seluruh situs. Tempel URL yang sudah Anda punya.',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'Bandingkan dengan Ubah beberapa halaman web jadi PDF: tanpa pemotongan A4. Bandingkan dengan PDF ke JPG: masukannya daftar URL, bukan unggahan PDF. Bandingkan dengan pengubah foto massal: masukannya halaman web, bukan foto lokal.',
	tool_batch_convert_web_pages_to_jpg_rules_title: 'Aturan yang perlu Anda tahu',
	tool_batch_convert_web_pages_to_jpg_sample: 'Muat contoh',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'Menggambar JPEG… tab ini bisa berhenti beberapa detik',
	tool_batch_convert_web_pages_to_jpg_status_done: 'Batch selesai — cek tabel, lalu unduh ZIP.',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'Mengambil HTML halaman…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG siap',
	tool_batch_convert_web_pages_to_jpg_status_queued: 'Mengantre',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'Dilewati',
	tool_batch_convert_web_pages_to_jpg_status_waiting: 'Menunggu gambar selesai…',
	tool_batch_convert_web_pages_to_jpg_status_working: 'Mengubah batch…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} siap · {skip} dilewati',
	tool_batch_convert_web_pages_to_jpg_title: 'Ubah beberapa halaman web jadi JPG',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'Satu URL http(s) publik per baris, paling banyak 10. Kami ambil tiap halaman sekali dan menulis ulang CSS/gambar. Skrip dibuang sebelum tangkapan.',
	tool_batch_convert_web_pages_to_jpg_url_label: 'URL halaman (satu per baris)',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'Jatuhkan beberapa URL bantuan atau tiket dan dapatkan JPEG untuk chat tanpa membuka tiap tab.',
	tool_batch_convert_web_pages_to_jpg_usecase_2: 'Potret halaman publik yang sama di 390 (ponsel) dan 1280 (desktop) untuk membandingkan layar pertama sebelum tinjauan.',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'Simpan arsip A4 di Ubah beberapa halaman web jadi PDF; pakai halaman ini saat butuh berkas gambar dari daftar URL.',
	tool_batch_convert_web_pages_to_jpg_usecases_title: 'Cocok untuk',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'Desktop 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: 'Lebar layar',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'Ponsel 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'Tablet 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'Detik tambahan setelah gambar mulai dimuat. Baku 1. Naikkan jika JPEG masih kotak kosong.',
	tool_batch_convert_web_pages_to_jpg_wait_label: 'Jeda muat (detik)',
};

export default id;
