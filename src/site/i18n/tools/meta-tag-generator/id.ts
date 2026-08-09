/**
 * i18n tool shard (meta-tag-generator / id).
 * Bahasa Indonesia — penulisan ulang mandiri untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_meta_home_title: 'Pembuat meta tag',
	tool_meta_home_desc:
		'Tulis tag judul, deskripsi, canonical, dan Open Graph yang mendatangkan klik di pencarian: buat tag head halaman secara lengkap dari browser.',
	tool_meta_title: 'Pembuat meta tag — buat tag head halaman secara lengkap',
	tool_meta_description:
		'Judul dan meta description Anda adalah yang dilihat pengguna di Google, dan canonical yang salah dapat membagi peringkat Anda ke URL duplikat. Isi kolom judul, deskripsi, canonical, robots, dan Open Graph untuk menghasilkan tag meta <head> siap tempel. Langkah: masukkan kolom Anda, baca petunjuk panjang dan pratinjau, salin HTML yang dihasilkan dengan escaping yang benar. Karakter khusus seperti & dan < otomatis di-escape agar tag tetap valid. Berjalan sepenuhnya di perangkat Anda—tidak ada yang diunggah. Contoh: tag canonical dan og berdampingan.',
	tool_meta_title_label: 'Meta title',
	tool_meta_title_ph: 'Pembuat meta tag — buat tag head halaman secara lengkap',
	tool_meta_title_hint: 'Pertahankan sekitar 60 karakter. Mesin pencari dapat menulis ulang judul yang lebih panjang.',
	tool_meta_desc_label: 'Meta description',
	tool_meta_desc_ph: 'Buat tag head siap tempel dengan petunjuk panjang, nilai robots, dan kolom OG.',
	tool_meta_desc_hint: 'Pertahankan sekitar 155–160 karakter. Teks lebih panjang dapat terpotong di SERP.',
	tool_meta_canonical_label: 'URL kanonik',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'URL pilihan untuk halaman ini. Tambahkan URL lengkap beserta protokolnya.',
	tool_meta_robots_label: 'Robots meta',
	tool_meta_robots_none: '— tanpa robots meta —',
	tool_meta_robots_index_follow: 'index, follow (default, izinkan indeks)',
	tool_meta_robots_noindex_follow: 'noindex, follow (sembunyikan dari hasil, tetap ikuti tautan)',
	tool_meta_robots_index_nofollow: 'index, nofollow (izinkan indeks, jangan ikuti tautan)',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow (sembunyikan halaman dan jangan ikuti tautan)',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image (URL lengkap)',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: 'Buat',
	tool_meta_sample: 'Muat contoh',
	tool_meta_clear: 'Bersihkan',
	tool_meta_copy: 'Salin',
	tool_meta_copied: 'Tersalin',
	tool_meta_error_prefix: 'Error: ',
	tool_meta_canonical_protocol: 'URL kanonik tidak memiliki protokol — tambahkan https:// atau http:// agar dapat dibaca mesin pencari.',
	tool_meta_title_len: 'Judul: {n} karakter',
	tool_meta_title_len_warn: 'Judul: {n} karakter — lebih dari 60, pertimbangkan memendekkannya.',
	tool_meta_desc_len: 'Deskripsi: {n} karakter',
	tool_meta_desc_len_warn: 'Deskripsi: {n} karakter — lebih dari 160, dapat terpotong.',
	tool_meta_output_label: 'Cuplikan head yang dihasilkan',
	tool_meta_how_title: 'Cara kerja',
	tool_meta_how_body:
		'Pembuat mengambil kolom Anda dan membangun tag head yang sesuai. Kolom opsional kosong dilewati, sehingga keluaran hanya berisi yang Anda isi. Setiap nilai di-escape HTML: ampersand menjadi &amp; dan tanda kurang dari menjadi &lt;, menjaga tag tetap valid di dalam halaman Anda. Petunjuk panjang memperingatkan saat judul atau deskripsi melewati batas umum, tanpa memotong teks Anda.',
	tool_meta_rules_title: 'Aturan yang dipakai pembuat',
	tool_meta_rules_body: 'Aturan ini mengikuti panduan Google Search Central tentang meta tag, title link, dan URL kanonik.',
	tool_meta_rules_item_1:
		'Meta title dan deskripsi adalah saran, bukan perintah: mesin pencari dapat menulis ulang atau memotongnya, jadi pertahankan judul sekitar 60 karakter dan deskripsi sekitar 155–160.',
	tool_meta_rules_item_2:
		'Semua nilai di-escape HTML: & < > " dan \' menjadi entitas, sehingga karakter dalam judul atau deskripsi Anda tidak dapat merusak markup.',
	tool_meta_rules_item_3:
		'URL kanonik harus berupa URL absolut lengkap dengan protokol. URL relatif atau tanpa protokol tidak berguna sebagai target kanonik.',
	tool_meta_rules_item_4:
		'Robots meta memakai nilai index/noindex dan follow/nofollow. Saat tidak dicantumkan, mesin pencari memakai defaultnya sendiri, yaitu indeks dan ikuti.',
	tool_meta_rules_item_5:
		'Canonical dan Open Graph dapat berdampingan di halaman yang sama: og:url harus cocok dengan URL kanonik agar berbagi sosial menunjuk ke alamat yang sama.',
	tool_meta_example_title: 'Contoh',
	tool_meta_example:
		'Contoh mengisi judul, deskripsi, canonical, robots, dan tiga kolom Open Graph. Cuplikan yang dihasilkan mengeluarkan tag <title>, meta description, tautan kanonik, robots meta, dan tag og: yang diisi.',
	tool_meta_usecases_title: 'Penggunaan yang tepat',
	tool_meta_usecase_1:
		'Membangun template halaman baru: buat blok head sekali, tinjau petunjuk panjang, lalu tempel ke template sebelum dipublikasikan.',
	tool_meta_usecase_2:
		'Menyerahkan pekerjaan ke klien: buat cuplikan head persis dengan canonical dan OG, lalu tempel ke CMS.',
	tool_meta_usecase_3:
		'Sebelum publikasi, buat tag dan cocokkan dengan pratinjau hasil pencarian agar judul dan deskripsi sesuai dengan halaman yang terlihat.',
	tool_meta_faq_q1: 'Apa arti nilai robots meta?',
	tool_meta_faq_a1:
		'index mengizinkan mesin pencari menyertakan halaman di hasil, sedangkan noindex mengeluarkannya. follow mengizinkan merayapi tautan di halaman dan nofollow mencegahnya. Tanpa tag, defaultnya index, follow.',
	tool_meta_faq_q2: 'Apakah karakter khusus dalam nilai saya di-escape?',
	tool_meta_faq_a2:
		'Ya. Pembuat meng-escape & < > " dan \', sehingga ampersand menjadi &amp; dan tanda kurang dari menjadi &lt;. Tag Anda tetap valid meski nilainya mengandung karakter mirip markup.',
	tool_meta_faq_q3: 'Bisakah canonical dan Open Graph berdampingan?',
	tool_meta_faq_a3:
		'Bisa, keduanya melayani sistem berbeda. Tautan kanonik memberi tahu mesin pencari URL pilihan, sementara tag og: mendeskripsikan halaman untuk berbagi sosial. Jaga og:url selaras dengan URL kanonik.',
	tool_meta_faq_q4: 'Berapa panjang judul dan deskripsi yang ideal?',
	tool_meta_faq_a4:
		'Sekitar 60 karakter untuk judul dan 155–160 untuk deskripsi adalah batas umum. Ini saran: mesin pencari dapat menulis ulang atau memotong nilai yang lebih panjang.',
	tool_meta_faq_q5: 'Bagaimana dengan kolom kosong?',
	tool_meta_faq_a5:
		'Kolom opsional kosong dilewati, sehingga cuplikan yang dihasilkan hanya berisi tag untuk kolom yang Anda isi.',
	tool_meta_faq_q6: 'Apakah data saya diunggah ke mana-mana?',
	tool_meta_faq_a6: 'Tidak. Pembuat berjalan sepenuhnya di browser Anda dan tidak ada yang diunggah.',
	tool_meta_references: 'Google Search Central — Meta tag yang dipahami Google; Kontrol tautan judul Anda; URL kanonik.',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — Meta tag yang dipahami Google',
	tool_meta_ref_searchcentral_title_label: 'Search Central — Kontrol tautan judul Anda',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — URL kanonik',
};

export default id;
