/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / id).
 * H1 lokal: Ubah banyak halaman web jadi PDF.
 * IG vs JPG: A4 potret terpaginasi untuk cetak, bukan tangkapan viewport.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Tempel URL publik; tiap halaman jadi PDF A4 potret yang dipotong untuk dicetak dan dibaca per halaman — bukan JPEG tak berujung. Baris gagal dilewati; yang berhasil masuk ZIP. Tiap alamat diambil sekali dan tidak disimpan. Butuh tangkapan chat atau bandingkan ponsel vs desktop? Ubah beberapa halaman web jadi JPG.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Bingkai tangkapan halaman tersembunyi',
	tool_batch_convert_web_pages_to_pdf_clear: 'Hapus',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Berkas',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Status',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Konversi semua',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Simpan daftar URL sebagai PDF A4 potret siap cetak — ZIP; bukan tangkapan halaman web.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Ubah banyak halaman web jadi PDF: daftar URL keluar sebagai A4 potret untuk dicetak dan dibolak-balik — bukan JPEG tinggi. Langkah: tempel daftar, Konversi semua, Unduh ZIP. Contoh: dua kebijakan jadi dua PDF. Tiap URL diambil sekali dan tidak disimpan. Cuplikan HTML: Konversi HTML ke PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Unduh ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Tempel setidaknya satu URL halaman dulu.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Halaman ini tidak bisa jadi PDF. Dilewati.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Peramban ini tidak bisa merakit ZIP. Coba peramban yang lebih baru.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'Pustaka konversi gagal dimuat. Segarkan lalu coba lagi.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'Paling banyak 10 URL. Baris ekstra tidak ditambahkan.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'URL itu gagal dimuat. Periksa alamatnya, atau situsnya memblokir pengambilan.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Baris itu bukan URL http(s) yang sah. Dilewati.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Muat contoh mengisi bantuan dan kebijakan example.com, membuat dua PDF A4 lokal dengan putus halaman CSS (tanpa kunjungi situs hidup), lalu mengaktifkan Unduh ZIP. Konversi semua mengambil alamat yang Anda tempel. CSS cetak mengubah titik potong.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Contoh',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'Kertas selalu A4 potret. Halaman panjang dipotong aturan page-break CSS (plus cadangan lama). Bukan selembar tak berujung. Tangkapan panjang: Ubah beberapa halaman web jadi JPG.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'Saudara JPG meraster JPEG per URL di 1280 / 768 / 390, dengan mutu serta halaman penuh atau layar pertama. Di sini tiap URL diiris jadi lembar A4 untuk dicetak. Daftar sama, hasil beda.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Halaman ini untuk daftar URL: banyak halaman publik → PDF A4 terpisah → ZIP. Cuplikan HTML plus pratinjau: Konversi HTML ke PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Konversi berjalan di tab ini. Tiap alamat dikirim sekali ke server untuk HTML; halaman tidak disimpan. PDF dibuat di perangkat, ZIP dirakit di sini.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Baris yang berhasil jadi PDF terpisah dalam satu ZIP. Kami tidak menggabungkannya — setelah unduh, pakai Gabungkan berkas jadi satu PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'Tidak. Skrip dihapus. Dinding login, paywall, dan aplikasi JavaScript sering tidak cocok dengan situs hidup. CSS cetak juga bisa menggeser potongan.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Ukuran kertas apa? Apakah jadi satu halaman super panjang?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Apa bedanya dengan mengubah beberapa halaman web jadi JPG?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Apa bedanya dengan Konversi HTML ke PDF?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Apakah halaman saya diunggah dan disimpan di server?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Hasilnya satu PDF atau ZIP berisi banyak berkas?',
	tool_batch_convert_web_pages_to_pdf_faq_q6: 'Apakah situs ber-login atau penuh JavaScript sama dengan yang live?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URL dalam antrean',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Tempel URL publik yang ingin diarsip atau dicetak, ubah jadi PDF A4 potret, lalu bawa ZIP yang berhasil.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Tempel satu URL https per baris. Kebijakan, bantuan, dan dokumen publik yang akan dicetak cocok.',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Biarkan jeda muat sekitar 1 detik kecuali gambar di selembar A4 kosong.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Tekan Konversi semua. Tiap URL publik diambil sekali dan dipaginasi A4 potret (CSS page-break bisa memotong bagian). Yang gagal dilewati.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'Cuplikan HTML plus pratinjau? Konversi HTML ke PDF. Tangkapan lebar layar, bukan kertas? Ubah beberapa halaman web jadi JPG.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Unduh ZIP setelah minimal satu baris berhasil. Muat contoh menguji dua halaman A4 lokal dengan putus CSS.',
	tool_batch_convert_web_pages_to_pdf_how_item_6: 'Untuk menjilid beberapa PDF jadi satu, unduh dulu lalu Gabungkan berkas jadi satu PDF.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Cara kerja',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Progres batch',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s} dtk berjalan',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Ambil',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Gambar',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Satu URL http(s) per baris, maksimal 10. Keluaran A4 potret dengan putus CSS, bukan JPEG halaman penuh. Konversi berurutan. Gagal dilewati. PDF sukses masuk ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Tiap URL dikirim sekali ke server untuk HTML dan tidak disimpan. PDF dibuat di tab ini pada kertas A4 potret.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Paginasi mengikuti CSS page-break (plus cadangan lama). Gaya cetak bisa beda dari layar. Halaman sangat tinggi dibatasi agar tab tidak mogok.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Jaringan privat, login, dan halaman hilang hanya menggagalkan baris itu. Nama duplikat di ZIP jadi name (2).pdf. Skrip dihapus sebelum tangkapan.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Bukan crawler seluruh situs dan bukan alat screenshot. Tempel URL publik yang sudah Anda miliki.',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'Bandingkan Ubah beberapa halaman web jadi JPG: JPEG di viewport. Bandingkan Konversi HTML ke PDF: tempelan HTML. Bandingkan Gabungkan berkas jadi satu PDF: di sini tidak digabung.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'Aturan yang perlu diketahui',
	tool_batch_convert_web_pages_to_pdf_sample: 'Muat contoh',
	tool_batch_convert_web_pages_to_pdf_status_done: 'Batch selesai — cek tabel lalu unduh ZIP.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'Mengambil HTML halaman…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF siap',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'Dilewati',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'Menunggu gambar selesai…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'Menyusun PDF… tab ini bisa terhenti beberapa detik',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'Dalam antrean',
	tool_batch_convert_web_pages_to_pdf_status_working: 'Mengonversi batch…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} siap · {skip} dilewati',
	tool_batch_convert_web_pages_to_pdf_title: 'Ubah banyak halaman web jadi PDF',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'Satu URL http(s) publik per baris, hingga 10. Kami mengambil tiap halaman sekali dan menulis ulang CSS serta gambar. Skrip dihapus; hasilnya A4 potret dengan putus CSS.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URL halaman (satu per baris)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Sebelum rapat, arsipkan beberapa bantuan atau dokumen publik sebagai PDF A4 siap cetak, tanpa membuka Cetak di setiap tab.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Kemas kebijakan, syarat, atau pengumuman ke ZIP untuk dibaca nanti atau dilampirkan email.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Tempel HTML tetap di Konversi HTML ke PDF. Tangkapan chat dan banding ponsel/desktop di JPG. Di sini arsip cetak dari daftar URL.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Cocok untuk',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Detik ekstra setelah gambar mulai dimuat di tiap lembar A4. Bawaan 1. Naikkan jika PDF menampilkan kotak kosong.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Tunggu muat (detik)',
};

export default id;
