/**
 * i18n tool shard (open-graph-preview / id).
 * Bahasa Indonesia — penulisan ulang mandiri untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_og_home_title: 'Pratinjau Open Graph',
	tool_og_home_desc:
		'Buat setiap bagikan halaman Anda mendatangkan klik: pratinjau bagaimana tampilannya di Facebook, X, dan aplikasi pesan, langsung dari browser.',
	tool_og_title: 'Pratinjau Open Graph — cek kartu bagikan media sosial',
	tool_og_description:
		'OG image atau judul hilang mengurangi klik berbagi. Tempel tag og/twitter atau URL untuk pratinjau Facebook, X, dan chat. Tempel lokal. Contoh: 1200×630.',
	tool_og_tags_tab: 'Tempel tag',
	tool_og_url_tab: 'Ambil URL',
	tool_og_tags_ph: 'Tempel tag <meta property="og:*"> dan <meta name="twitter:*"> di sini…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'Ambil URL',
	tool_og_preview: 'Pratinjau',
	tool_og_sample: 'Contoh',
	tool_og_clear: 'Bersihkan',
	tool_og_copy: 'Salin',
	tool_og_copied: 'Tersalin',
	tool_og_running: 'Memeriksa…',
	tool_og_error_prefix: 'Error: ',
	tool_og_url_error: 'Masukkan URL http(s) yang valid.',
	tool_og_fetch_failed: 'Gagal mengambil URL. Halaman mungkin offline, memblokir bot, atau tidak mengembalikan HTML.',
	tool_og_no_tags: 'Tag OG tidak terdeteksi',
	tool_og_no_tags_fallback:
		'Tanpa tag Open Graph, Facebook, X, dan WhatsApp menyusun pratinjau dari judul, meta description, dan gambar pertama halaman.',
	tool_og_required_label: 'Wajib',
	tool_og_optional_label: 'Opsional',
	tool_og_missing_label: 'Hilang',
	tool_og_ok_label: 'Ada',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'Status tag',
	tool_og_ratio_warning: 'og:image sebaiknya sekitar 1200×630 px (1.91:1).',
	tool_og_ratio_ok: 'og:image mendekati 1200×630 px (1.91:1).',
	tool_og_ratio_unknown: 'Tidak dapat membaca ukuran gambar dari URL.',
	tool_og_dimensions: '{w}×{h} px',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'Aplikasi pesan (gaya WhatsApp)',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: 'twitter:card tidak diatur — platform menyimpulkan kartu summary dari tag og:.',
	tool_og_how_title: 'Cara kerja',
	tool_og_how_body:
		'Pratinjau mengurai tag og:/twitter: yang Anda tempel (atau mengekstraknya dari HTML yang diambil dari URL) lalu menggambar tiga kartu. Facebook menampilkan gambar 1.91:1 di kiri dengan judul, deskripsi, dan domain di bawahnya. X mengikuti twitter:card: summary_large_image menampilkan gambar besar di atas, summary menampilkan yang kecil di samping teks. Aplikasi pesan seperti WhatsApp menampilkan satu kartu besar. Tabel kolom menandai empat kolom yang diwajibkan protokol dan mencantumkan kolom opsionalnya.',
	tool_og_how_item_1: 'Tempel tag meta og:/twitter: atau ambil URL.',
	tool_og_how_item_2: 'Klik Pratinjau (atau Contoh).',
	tool_og_how_item_3: 'Bandingkan kartu Facebook, X, dan pesan.',
	tool_og_how_item_4: 'Perbaiki bidang wajib yang hilang di tabel.',
	tool_og_rules_title: 'Aturan yang dipakai pratinjau',
	tool_og_rules_body: 'Berikut ukuran gambar dan fallback yang dipakai platform, berdasarkan protokol Open Graph dan dokumentasi X Cards.',
	tool_og_rules_item_1: 'Diwajibkan protokol Open Graph: og:title, og:type, og:image, dan og:url. og:description bersifat opsional dalam spesifikasi, tetapi semua platform besar menampilkannya — bila dikosongkan, platform menyusun ringkasannya sendiri dari teks halaman.',
	tool_og_rules_item_2: 'og:image 1200×630 px (1.91:1) berfungsi di semua platform utama. Facebook kini juga menerima potongan 2:1 dan 1:1; gambar kecil sering diperbesar dan tampak buram.',
	tool_og_rules_item_3: 'twitter:card summary_large_image cocok dengan gambar besar; summary dengan yang kecil. Tanpa twitter:card, platform menyimpulkan kartu summary dari tag og:.',
	tool_og_rules_item_4: 'Saat og:title atau og:image hilang, platform memakai judul HTML, meta description, dan gambar pertama halaman.',
	tool_og_rules_item_5: 'Ukuran gambar diukur dengan memuat gambar di browser; jika tidak dapat dimuat (diblokir, offline, atau URL salah), pemeriksaan melaporkan tidak diketahui.',
	tool_og_example_title: 'Contoh',
	tool_og_example:
		'Tag contoh menggambarkan artikel blog dengan og:image 1200×630 dan twitter:card summary_large_image. Pratinjau menampilkan kartu Facebook dengan gambar di kiri, kartu besar X, kartu gaya WhatsApp, dan tabel tag yang semua kolom wajibnya ada.',
	tool_og_usecases_title: 'Penggunaan yang tepat',
	tool_og_usecase_1:
		'Sebelum menerbitkan artikel atau landing page, tempel tag sekali dan pastikan kartu terlihat benar di Facebook, X, dan aplikasi pesan.',
	tool_og_usecase_2:
		'Saat tautan yang dibagikan tidak menampilkan gambar atau terpotong, tempel tag og: untuk memeriksa apakah og:image hilang atau rasionya salah.',
	tool_og_usecase_3:
		'Setelah memperbarui CMS atau tema, ambil URL langsung dan pastikan tag og: masih sesuai dengan halaman.',
	tool_og_faq_q1: 'Apa yang terjadi jika halaman tidak punya tag Open Graph?',
	tool_og_faq_a1:
		'Facebook, X, dan WhatsApp beralih ke judul HTML, meta description, dan gambar yang ditemukan di halaman. Perilaku cadangan ini berbeda-beda antarplatform dan berubah seiring waktu, jadi kartunya bisa tidak lengkap atau memilih gambar yang salah — untuk itulah tag og: ada.',
	tool_og_faq_q2: 'Seberapa besar sebaiknya og:image?',
	tool_og_faq_a2:
		'Ukuran aman adalah 1200×630 px, rasio 1.91:1 yang diterima semua platform utama. Facebook kini juga mendukung potongan 2:1 dan 1:1. Gambar yang sangat kecil sering diperbesar dan tampak buram.',
	tool_og_faq_q3: 'Bagaimana hubungan twitter:card dengan tag og:?',
	tool_og_faq_a3:
		'twitter:card menentukan tata letak: summary_large_image menampilkan gambar lebar, summary menampilkan yang kecil. Saat twitter:title, twitter:description, atau twitter:image hilang, X memakai tag og: yang bersesuaian.',
	tool_og_faq_q4: 'Apa yang dilakukan platform saat og:image hilang?',
	tool_og_faq_a4:
		'Platform memakai gambar pertama yang ditemukan di HTML halaman, atau menampilkan kartu tanpa gambar. og:image yang hilang adalah penyebab paling umum tautan yang dibagikan tanpa gambar pratinjau.',
	tool_og_faq_q5: 'Mengapa pemeriksaan rasio melaporkan "tidak diketahui"?',
	tool_og_faq_a5:
		'Pratinjau mencoba memuat og:image dengan pemuatan gambar browser untuk membaca ukuran aslinya. Saat gambar diblokir, offline, lambat, atau server menolak permintaan, ukuran tidak bisa dibaca dan pemeriksaan melaporkan tidak diketahui.',
	tool_og_faq_q6: 'Apakah tag saya diunggah ke mana-mana?',
	tool_og_faq_a6:
		'Tidak. Pada mode tempel, penguraian dan pratinjau berjalan di perangkat Anda. Mode URL mengambil halaman sekali melalui worker kami dan tidak menyimpannya.',
	tool_og_references: 'ogp.me — Protokol Open Graph; X — Markup kartu.',
	tool_og_ref_ogp_label: 'ogp.me — Protokol Open Graph',
	tool_og_ref_x_label: 'X — Markup kartu',
};

export default id;
