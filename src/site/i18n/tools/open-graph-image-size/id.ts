/**
 * Pecahan i18n (open-graph-image-size / id).
 * H1: «Ukuran gambar Open Graph». Singkatan og image tidak masuk judul.
 * Kata sekunder: 1200×630 dan og:image di description / FAQ / kasus.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_open_graph_image_size_article:
		'Pangkas satu foto ke kartu berbagi Open Graph 1200×630 (sekitar 1,91:1) lalu unduh JPEG. File tetap di perangkat dan tidak diunggah ke server.',
	tool_open_graph_image_size_choose_image: 'Pilih gambar',
	tool_open_graph_image_size_clear: 'Hapus',
	tool_open_graph_image_size_desc:
		'Ekspor gambar Open Graph 1200×630; tetap di perangkat, tanpa unggah ke server.',
	tool_open_graph_image_size_description:
		'Ukuran gambar Open Graph: pilih foto, isi penuh 1200×630 (sekitar 1,91:1), lalu unduh JPEG. Contoh: sampel di halaman sudah terpangkas ke bingkai kartu. Chip LinkedIn 1200×627 tersedia jika diminta. Foto tetap di perangkat dan tidak diunggah ke server. Untuk memeriksa tag og:image di sebuah URL, buka halaman pratinjau terkait — bukan H1 ini. Judulnya bukan singkatan «og image».',
	tool_open_graph_image_size_download: 'Unduh JPEG',
	tool_open_graph_image_size_drop_hint: 'Letakkan satu foto. Isi penuh bisa memotong tepi.',
	tool_open_graph_image_size_empty: 'Pilih gambar dulu.',
	tool_open_graph_image_size_err_decode: 'Gambar ini tidak bisa dibaca. Coba JPEG, PNG, atau WebP.',
	tool_open_graph_image_size_example:
		'Muat contoh menggambar pemandangan, mengisi 1200×630, dan mengaktifkan Unduh JPEG. 1200×627 adalah chip LinkedIn.',
	tool_open_graph_image_size_example_title: 'Contoh',
	tool_open_graph_image_size_faq_a1:
		'Tidak. Foto hanya di tab ini. Tidak dikirim ke Facebook, LinkedIn, atau server kami.',
	tool_open_graph_image_size_faq_a2:
		'Pencarian pendek «og image» mudah terseret slang. H1 halaman ini adalah frasa lengkap: Ukuran gambar Open Graph.',
	tool_open_graph_image_size_faq_a3:
		'1200×630 adalah kartu 1,91:1 yang umum. 1200×627 hampir sama dan sering diminta LinkedIn. Story dan seni saluran di luar cakupan.',
	tool_open_graph_image_size_faq_a4:
		'Halaman ini hanya mengekspor piksel. Cek apakah og:image tampil di URL lewat alat pratinjau Open Graph.',
	tool_open_graph_image_size_faq_a5:
		'Ya. Isi penuh memperbesar sampai bingkai 1200×630 penuh; sisanya dipotong.',
	tool_open_graph_image_size_faq_q1: 'Apakah foto saya diunggah?',
	tool_open_graph_image_size_faq_q2: 'Mengapa judulnya bukan «og image»?',
	tool_open_graph_image_size_faq_q3: '1200×630 vs 1200×627?',
	tool_open_graph_image_size_faq_q4: 'Di mana saya cek og:image tampil?',
	tool_open_graph_image_size_faq_q5: 'Apakah tepinya akan terpotong?',
	tool_open_graph_image_size_how_body:
		'Pilih foto yang harus muncul saat tautan dibagikan, isi 1200×630, lalu unduh. Debug tag ada di halaman pratinjau.',
	tool_open_graph_image_size_how_item_1: 'Pilih foto kartu berbagi Open Graph — itu tugas halaman ini.',
	tool_open_graph_image_size_how_item_2: 'Biarkan 1200×630 kecuali Anda memang butuh chip 1200×627.',
	tool_open_graph_image_size_how_item_3: 'Unduh JPEG. Isi penuh bisa memotong tepi agar kartu tanpa garis.',
	tool_open_graph_image_size_how_item_4: 'Contoh sudah jalan saat halaman dibuka. Cek tag di alat pratinjau.',
	tool_open_graph_image_size_how_title: 'Cara kerjanya',
	tool_open_graph_image_size_load_sample: 'Muat contoh',
	tool_open_graph_image_size_out_size_label: 'Ukuran keluaran',
	tool_open_graph_image_size_quality_label: 'Kualitas JPEG',
	tool_open_graph_image_size_rules_body:
		'Ekspor kartu butuh bingkai ~1,91:1, isi penuh dengan potong, dan terpisah dari pratinjau tag.',
	tool_open_graph_image_size_rules_item_1:
		'Kanvas bawaan 1200×630. Chip opsional 1200×627. Rasio sekitar 1,91:1.',
	tool_open_graph_image_size_rules_item_2:
		'Isi penuh (bukan letterbox). Kelebihan dipotong.',
	tool_open_graph_image_size_rules_item_3:
		'Debug tag og:image ada di halaman pratinjau, bukan H1 ini.',
	tool_open_graph_image_size_rules_item_4:
		'Story, thumbnail YouTube, dan seni saluran di luar cakupan.',
	tool_open_graph_image_size_rules_title: 'Aturan yang perlu Anda harapkan',
	tool_open_graph_image_size_size_627: '1200×627',
	tool_open_graph_image_size_size_630: '1200×630',
	tool_open_graph_image_size_status_done: 'Kartu siap — unduh atau ganti fotonya.',
	tool_open_graph_image_size_status_working: 'Mengisi penuh…',
	tool_open_graph_image_size_title: 'Ukuran gambar Open Graph',
	tool_open_graph_image_size_usecase_1:
		'Tulisan blog: ekspor JPEG 1200×630 dulu, baru isi og:image.',
	tool_open_graph_image_size_usecase_2:
		'Tautan produk: pangkas foto kemasan ke bingkai kartu tanpa aplikasi desain.',
	tool_open_graph_image_size_usecase_3:
		'LinkedIn: pakai chip 1200×627 jika mitra minta pasangan itu.',
	tool_open_graph_image_size_usecases_title: 'Cocok untuk',
};

export default id;
