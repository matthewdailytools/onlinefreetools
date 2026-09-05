/**
 * i18n tool shard (hreflang-generator / id).
 * Bahasa Indonesia — penulisan ulang mandiri untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_hreflang_home_title: 'Pembuat hreflang',
	tool_hreflang_home_desc:
		'Beri tahu Google versi bahasa mana yang harus ditampilkan kepada siapa — ubah URL bahasa menjadi tag hreflang, header HTTP Link, dan markup sitemap dari browser Anda.',
	tool_hreflang_title: 'Pembuat hreflang — buat tag bahasa untuk situs multibahasa',
	tool_hreflang_description:
		'Tanpa hreflang, Google bisa menganggap terjemahan sebagai duplikat. Ubah URL per bahasa jadi link, HTTP Link, atau sitemap—lokal. Contoh: en, es, ja.',
	tool_hreflang_input_label: 'Daftar URL per bahasa',
	tool_hreflang_input_ph:
		'Satu pasang per baris: kode bahasa + URL. Contoh:\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'Setiap baris berupa «kode-bahasa URL» atau «URL kode-bahasa». Kode memakai bentuk BCP 47 seperti en, en-US, atau zh-Hans.',
	tool_hreflang_xdefault_label: 'URL fallback x-default',
	tool_hreflang_xdefault_none: '— tanpa x-default —',
	tool_hreflang_xdefault_hint:
		'Opsional. x-default memberi tahu Google versi mana yang ditampilkan saat tidak ada bahasa yang cocok, berguna untuk halaman akar atau beranda berbahasa Inggris.',
	tool_hreflang_generate: 'Buat',
	tool_hreflang_sample: 'Muat contoh',
	tool_hreflang_clear: 'Bersihkan',
	tool_hreflang_copy: 'Salin',
	tool_hreflang_copied: 'Tersalin',
	tool_hreflang_error_prefix: 'Error: ',
	tool_hreflang_url_protocol: 'Ada URL tanpa protokol — https:// ditambahkan otomatis.',
	tool_hreflang_lang_invalid: 'Kode bahasa tidak valid: {lang}. Gunakan bentuk BCP 47 seperti en, en-US, atau zh-Hans.',
	tool_hreflang_no_valid_rows: 'Tidak ada baris valid. Tambahkan minimal satu kode bahasa dan URL.',
	tool_hreflang_output_label: 'Markup yang dihasilkan',
	tool_hreflang_tab_link: 'Tag <link>',
	tool_hreflang_tab_http: 'Header HTTP Link',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: 'Cara kerja',
	tool_hreflang_how_body:
		'Pembuat mengurai setiap baris menjadi kode bahasa dan URL, lalu menampilkan rangkaian relasi yang sama dalam tiga bentuk. Bentuk <link> masuk ke <head> setiap halaman. Bentuk header HTTP Link dikirim dalam respons server. Bentuk sitemap menyematkan <xhtml:link> di dalam setiap blok <url>. Setiap URL mendapat anotasi hreflang referensi diri agar setiap versi bahasa menunjuk ke dirinya sendiri, dan entri x-default opsional mencakup pengunjung yang bahasanya tidak tercantum.',
	tool_hreflang_rules_title: 'Aturan yang dipakai pembuat',
	tool_hreflang_rules_body: 'Aturan ini berasal dari Google Search Central dan standar tag bahasa BCP 47.',
	tool_hreflang_rules_item_1:
		'Setiap versi bahasa harus menyertakan anotasi hreflang referensi diri yang menunjuk ke URL-nya sendiri. Menghilangkannya melemahkan sinyal.',
	tool_hreflang_rules_item_2:
		'Setiap URL harus dicantumkan dari semua versi bahasa: rangkaian alternatif lengkap ada di setiap halaman, bukan hanya satu arah.',
	tool_hreflang_rules_item_3:
		'Kode bahasa memakai BCP 47: bahasa dua huruf, opsional wilayah (en-US) dan opsional aksara (zh-Hans). x-default adalah kode fallback khusus.',
	tool_hreflang_rules_item_4:
		'x-default menunjuk ke halaman yang ditampilkan saat tidak ada bahasa yang cocok, misalnya halaman akar berbahasa Inggris. Google dapat memakainya sebagai fallback untuk semua bahasa yang tidak terdeteksi.',
	tool_hreflang_rules_item_5:
		'Google menganggap ketiga bentuk itu setara dan memang membolehkan ketiganya sekaligus, tetapi menyatakan tidak ada manfaatnya di penelusuran. Pilih satu saja per rangkaian halaman: tiga implementasi lama-lama menyimpang, dan anotasi yang saling bertentangan akan diabaikan.',
	tool_hreflang_example_title: 'Contoh',
	tool_hreflang_example:
		'Contoh mencantumkan tiga versi satu halaman: https://example.com/ (en), https://example.com/es/ (es), dan https://example.com/ja/ (ja). Tag <link> yang dihasilkan menyertakan referensi diri untuk setiap bahasa plus x-default opsional yang menunjuk ke akar berbahasa Inggris.',
	tool_hreflang_usecases_title: 'Penggunaan yang tepat',
	tool_hreflang_usecase_1:
		'Meluncurkan situs multibahasa: buat tag <link> sekali per template dan pastikan setiap versi bahasa mencantumkan rangkaian lengkap.',
	tool_hreflang_usecase_2:
		'Setelah restrukturisasi situs, buat ulang markup agar pemetaan URL tetap konsisten antar bahasa dan tidak melenceng.',
	tool_hreflang_usecase_3:
		'Saat hasil pencarian menampilkan bahasa yang salah, periksa apakah referensi diri dan x-default ada serta URL menunjuk ke halaman kanonik.',
	tool_hreflang_faq_q1: 'Manakah dari tiga bentuk yang harus saya pakai?',
	tool_hreflang_faq_a1:
		'Gunakan tag <link> bila Anda dapat mengedit HTML. Gunakan header HTTP Link bila halaman dilayani server yang Anda kendalikan dan HTML sulit diubah. Gunakan bentuk sitemap bila lebih suka menaruhnya di sitemap XML.',
	tool_hreflang_faq_q2: 'Kapan saya harus menambahkan x-default?',
	tool_hreflang_faq_a2:
		'x-default memberi tahu Google versi mana yang ditampilkan saat bahasa pengunjung tidak cocok dengan kode mana pun. Tambahkan bila Anda punya halaman akar atau fallback, biasanya berbahasa Inggris.',
	tool_hreflang_faq_q3: 'Apakah setiap URL perlu hreflang referensi diri?',
	tool_hreflang_faq_a3:
		'Ya. Setiap versi bahasa harus menyertakan URL-nya sendiri dalam rangkaian, dengan hreflang referensi diri yang menunjuk ke dirinya. Google memakai rangkaian lengkap untuk memilih halaman yang tepat per bahasa.',
	tool_hreflang_faq_q4: 'Format kode bahasa apa yang valid?',
	tool_hreflang_faq_a4:
		'Kode BCP 47: bahasa dua atau tiga huruf, opsional wilayah (en-US) dan opsional aksara (zh-Hans). Bahasa dengan huruf kecil, dan jangan membuat kode seperti «en-us-en».',
	tool_hreflang_faq_q5: 'Hreflang ditaruh di <head> atau di sitemap?',
	tool_hreflang_faq_a5:
		'Keduanya berfungsi, tetapi pakai satu bentuk yang konsisten per rangkaian halaman. Tag <link> ada di <head>, header HTTP Link dikirim bersama respons, dan sitemap memakai blok xhtml:link.',
	tool_hreflang_faq_q6: 'Apakah URL saya diunggah ke mana-mana?',
	tool_hreflang_faq_a6: 'Tidak. Pembuat berjalan sepenuhnya di browser Anda dan tidak ada yang diunggah.',
	tool_hreflang_references: 'Google Search Central — Versi dilokalkan (hreflang); tag bahasa BCP 47.',
	tool_hreflang_ref_searchcentral_label: 'Search Central — Versi dilokalkan (hreflang)',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — Tag untuk mengidentifikasi bahasa',
};

export default id;
