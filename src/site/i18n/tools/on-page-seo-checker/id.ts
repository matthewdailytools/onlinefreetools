/**
 * i18n tool shard (on-page-seo-checker / id).
 * Bahasa Indonesia — penulisan ulang mandiri sesuai kebiasaan pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_onpage_home_title: 'Pemeriksa SEO On-Page',
	tool_onpage_home_desc:
		'Tangkap masalah tag yang menahan peringkat halaman Anda: periksa title, H1, meta description, canonical, Open Graph, dan JSON-LD di browser.',
	tool_onpage_title: 'Pemeriksa SEO On-Page — temukan dan perbaiki masalah tag halaman',
	tool_onpage_description:
		'Judul lemah, meta description hilang, H1 ganda, atau canonical yang salah bisa diam-diam menurunkan peringkat dan klik Anda di hasil pencarian. Tempel URL atau HTML untuk mengaudit title, H1, meta description, canonical, Open Graph, JSON-LD, konten campuran, dan pemblokiran render, masing-masing dengan saran perbaikan. Mode tempel berjalan di perangkat Anda; mode URL mengambil halaman sekali tanpa menyimpannya. Contoh: halaman dengan dua H1 dan satu gambar http://.',
	tool_onpage_url_tab: 'Ambil URL',
	tool_onpage_html_tab: 'Tempel HTML',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'Periksa URL',
	tool_onpage_html_ph: 'Tempel HTML <head> (dan potongan body) di sini…',
	tool_onpage_check: 'Periksa halaman',
	tool_onpage_sample: 'Contoh',
	tool_onpage_clear: 'Bersihkan',
	tool_onpage_copy: 'Salin',
	tool_onpage_copied: 'Tersalin',
	tool_onpage_running: 'Memeriksa…',
	tool_onpage_error_prefix: 'Kesalahan: ',
	tool_onpage_url_error: 'Masukkan URL http(s) yang valid.',
	tool_onpage_fetch_failed: 'Tidak dapat mengambil URL. Halaman mungkin offline, memblokir bot, atau tidak mengembalikan HTML.',
	tool_onpage_no_html: 'Tempel HTML dulu, atau ambil sebuah URL.',
	tool_onpage_no_results: 'Belum ada pemeriksaan untuk ditampilkan.',
	tool_onpage_summary_title: 'Ringkasan pemeriksaan',
	tool_onpage_summary_n_ok: '{n} lulus',
	tool_onpage_summary_n_warn: '{n} peringatan',
	tool_onpage_summary_n_err: '{n} masalah',
	tool_onpage_status_ok: 'OK',
	tool_onpage_status_warn: 'Peringatan',
	tool_onpage_status_err: 'Masalah',
	tool_onpage_title_check: 'Title',
	tool_onpage_title_missing: 'Tag <title> tidak ditemukan. Tambahkan satu di dalam <head>.',
	tool_onpage_title_ok: 'Title {n} karakter. Mendekati 50–60 karakter biasanya tampil baik di hasil pencarian.',
	tool_onpage_title_long: 'Title {n} karakter, kemungkinan terpotong di hasil pencarian. Targetkan sekitar 50–60 karakter.',
	tool_onpage_title_short: 'Title hanya {n} karakter. Tambahkan fokus spesifik halaman agar lebih informatif.',
	tool_onpage_desc_check: 'Meta description',
	tool_onpage_desc_missing: 'Meta description tidak ditemukan. Tulis ringkasan 140–160 karakter yang sesuai isi halaman.',
	tool_onpage_desc_ok: 'Deskripsi {n} karakter. Rentang 140–160 karakter tampil baik di kebanyakan snippet.',
	tool_onpage_desc_long: 'Deskripsi {n} karakter; snippet biasanya terpotong sekitar 160 karakter.',
	tool_onpage_desc_short: 'Deskripsi hanya {n} karakter. Manfaatkan ruang untuk merangkum nilai halaman.',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'H1 tidak ditemukan. Gunakan satu H1 yang menyatakan topik halaman.',
	tool_onpage_h1_multiple: 'Ditemukan {n} tag H1. Pertahankan satu H1 per halaman dan gunakan H2–H6 untuk bagian.',
	tool_onpage_h1_ok: 'Ditemukan satu H1 dan berada di dalam <body>.',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'Canonical belum diatur. Tambahkan <link rel="canonical"> saat konten yang sama dapat diakses dari beberapa URL.',
	tool_onpage_canonical_ok: 'Canonical yang merujuk diri sendiri ditemukan.',
	tool_onpage_canonical_other: 'Canonical menunjuk ke URL lain. Gunakan canonical referensi-diri kecuali halaman ini memang salinan target.',
	tool_onpage_robots_check: 'Robots meta',
	tool_onpage_robots_missing: 'Tidak ada robots meta. Standarnya index,follow, yang sesuai untuk sebagian besar halaman publik.',
	tool_onpage_robots_noindex: 'Halaman menetapkan noindex sehingga tidak muncul di hasil Google. Hapus jika halaman perlu diindeks.',
	tool_onpage_robots_ok: 'Robots meta mengizinkan pengindeksan dan mengikuti tautan.',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'Tag og: tidak ditemukan. Tambahkan og:title, og:description, dan og:image untuk pratinjau berbagi.',
	tool_onpage_og_partial: 'Kurang {n} kolom og: wajib. Pastikan og:title, og:description, dan og:image tersedia.',
	tool_onpage_og_ok: 'og:title, og:description, dan og:image sudah tersedia.',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'Data terstruktur JSON-LD tidak ditemukan. Pertimbangkan menambah markup schema.org yang mendeskripsikan konten terlihat.',
	tool_onpage_jsonld_invalid: 'Blok JSON-LD tidak dapat diuraikan sebagai JSON. Periksa kesalahan sintaks.',
	tool_onpage_jsonld_ok: 'Ditemukan {n} blok JSON-LD. Jaga data terstruktur tetap konsisten dengan apa yang dilihat pengunjung.',
	tool_onpage_mixed_check: 'Konten campuran',
	tool_onpage_mixed_none: 'Tidak ada referensi http:// dalam konteks https.',
	tool_onpage_mixed_found: 'Ditemukan {n} referensi http://. Browser memblokir konten campuran; sajikan sumber daya tersebut melalui https.',
	tool_onpage_render_check: 'Pemblokiran render',
	tool_onpage_render_none: 'Tidak ada stylesheet atau skrip yang jelas memblokir render.',
	tool_onpage_render_found: '{n} <link rel="stylesheet"> tanpa media di <head>. Sejajarkan CSS kritis atau tunda pemuatan untuk meningkatkan LCP.',
	tool_onpage_unknown: 'Tidak dapat menentukan: {label}',
	tool_onpage_how_title: 'Cara kerjanya',
	tool_onpage_how_body:
		'Pemeriksa mengurai markup yang Anda tempel (atau HTML yang diambil dari URL) dan mengevaluasi daftar tetap pemeriksaan SEO on-page. Setiap pemeriksaan membaca satu jenis tag: title, meta description, H1, canonical, robots meta, kolom Open Graph, blok JSON-LD, konten campuran, dan sumber daya yang memblokir render. Mode tempel sepenuhnya di browser Anda; mode URL mengambil halaman sekali melalui worker kami dan tidak menyimpannya.',
	tool_onpage_rules_title: 'Aturan yang diikuti pemeriksaan',
	tool_onpage_rules_body:
		'Berikut standar yang dibandingkan oleh setiap pemeriksaan, bersumber dari Google Search Central dan spesifikasi HTML.',
	tool_onpage_rules_item_1:
		'Title: halaman harus memiliki satu <title> deskriptif. Google dapat menulis ulang, tetapi title ringkas mendekati 50–60 karakter biasanya tampil baik.',
	tool_onpage_rules_item_2:
		'H1: gunakan tepat satu H1 yang menyatakan topik. Judul lainnya harus H2–H6 dan membentuk kerangka logis.',
	tool_onpage_rules_item_3:
		'Canonical: canonical referensi-diri memberi tahu Google URL yang diutamakan saat ada duplikat. Link rel="canonical" diletakkan di <head>.',
	tool_onpage_rules_item_4:
		'Konten campuran: halaman https yang merujuk sumber daya http:// diblokir browser. Pemeriksaan ini mencatatnya sebagai peringatan.',
	tool_onpage_rules_item_5:
		'Pemblokiran render: stylesheet di <head> tanpa atribut media memblokir render. Pemeriksaan ini heuristik dan tidak mengukur waktu muat nyata.',
	tool_onpage_example_title: 'Contoh',
	tool_onpage_example:
		'Input contoh adalah halaman dengan title 71 karakter, tanpa meta description, dua H1, canonical ke URL lain, satu og:image, blok JSON-LD valid, dan satu gambar http://. Pemeriksa melaporkan title berpotensi terpotong, H1 sebagai peringatan, canonical non-referensi-diri, dan konten campuran sebagai peringatan, sesuai yang ditampilkan alat saat contoh dimuat.',
	tool_onpage_usecases_title: 'Cocok untuk',
	tool_onpage_usecase_1:
		'Sebelum redesign atau rilis ulang: jalankan halaman yang sama melalui pemeriksa dan perbaiki masalah yang dilaporkan sekali jalan.',
	tool_onpage_usecase_2:
		'Serah terima template: saat menerima HTML dari agensi atau pembuat halaman, verifikasi tag head alih-alih percaya hasil ekspor.',
	tool_onpage_usecase_3:
		'Pembaruan konten: setelah edit di CMS, pastikan title, description, dan canonical masih sesuai halaman baru.',
	tool_onpage_faq_q1: 'Apa yang diperiksa pemeriksa SEO on-page?',
	tool_onpage_faq_a1:
		'Ia memeriksa tag yang dikendalikan halaman: title, meta description, H1, canonical, robots meta, kolom Open Graph, data terstruktur JSON-LD, konten campuran, dan sumber daya pemblokir render. Tidak mengukur peringkat atau backlink.',
	tool_onpage_faq_q2: 'Mengapa halaman harus memiliki tepat satu H1?',
	tool_onpage_faq_a2:
		'Satu H1 menyatakan topik dengan jelas bagi pembaca dan mesin pencari. Banyak H1 mengaburkan kerangka; gunakan satu H1 dan susun sisanya dengan H2–H6.',
	tool_onpage_faq_q3: 'Apakah canonical harus menunjuk ke dirinya sendiri?',
	tool_onpage_faq_a3:
		'Untuk halaman yang ingin dirangking, ya — canonical referensi-diri adalah sinyal paling jelas. Menunjuk ke URL lain memberi tahu Google halaman ini duplikat, hanya berguna jika memang demikian.',
	tool_onpage_faq_q4: 'Mengapa pemeriksa menandai sumber daya http:// sebagai konten campuran?',
	tool_onpage_faq_a4:
		'Saat halaman disajikan via https dan merujuk gambar, skrip, atau gaya http://, browser memblokir permintaan secara bawaan. Pemeriksaan ini mencatatnya sebagai peringatan agar Anda beralih ke https.',
	tool_onpage_faq_q5: 'Apakah pemeriksaan JSON-LD menguji validasi?',
	tool_onpage_faq_a5:
		'Ia memastikan blok terurai sebagai JSON valid dan mengingatkan agar data terstruktur konsisten dengan konten terlihat. Tidak menjalankan validator schema.org penuh.',
	tool_onpage_faq_q6: 'Apakah HTML saya diunggah ke mana pun?',
	tool_onpage_faq_a6:
		'Tidak. Saat menempel HTML, penguraian terjadi di perangkat Anda dan tidak ada yang dikirim ke server. Mode URL mengambil halaman sekali melalui worker kami dan tidak menyimpannya.',
	tool_onpage_references: 'Google Search Central — meta tag; Google Search Central — canonical; MDN — elemen <meta>.',
	tool_onpage_ref_tags_label: 'Search Central — Meta tag yang dipahami Google',
	tool_onpage_ref_canonical_label: 'Search Central — URL kanonikal',
	tool_onpage_ref_mdn_label: 'MDN — <meta>: elemen metadata',
};

export default id;
