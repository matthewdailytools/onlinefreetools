/**
 * Shard i18n (check-robots-txt-url-blocked / id).
 * Tugas: tempel URL → Worker ambil /robots.txt → laporkan diblokir atau tidak.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'Cek URL diblokir robots.txt',
	tool_check_robots_txt_url_blocked_home_desc:
		'Tempel URL halaman dan lihat apakah robots.txt memblokir path itu untuk Googlebot atau bot lain.',
	tool_check_robots_txt_url_blocked_desc:
		'Tempel URL halaman dan lihat apakah robots.txt memblokir path itu untuk Googlebot atau bot lain.',
	tool_check_robots_txt_url_blocked_title: 'Cek apakah URL diblokir oleh robots.txt',
	tool_check_robots_txt_url_blocked_description:
		'Tempel URL halaman lalu uji online apakah robots.txt memblokir path itu untuk Googlebot, *, Bingbot, atau GPTBot. Fetch di edge + aturan yang cocok. Contoh: /admin.',
	tool_check_robots_txt_url_blocked_url_label: 'URL halaman',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'User-agent',
	tool_check_robots_txt_url_blocked_check: 'Periksa',
	tool_check_robots_txt_url_blocked_sample: 'Contoh',
	tool_check_robots_txt_url_blocked_clear: 'Hapus',
	tool_check_robots_txt_url_blocked_running: 'Mengambil robots.txt…',
	tool_check_robots_txt_url_blocked_url_error: 'Masukkan URL http(s) valid yang menyertakan path yang Anda pedulikan.',
	tool_check_robots_txt_url_blocked_error_prefix: 'Kesalahan: ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'Tidak bisa mengambil robots.txt. Host mungkin offline atau menolak bot.',
	tool_check_robots_txt_url_blocked_privacy_note:
		'URL dan hostname dikirim ke Worker kami agar bisa mengambil /robots.txt. Kami tidak menyimpannya sebagai database produk.',
	tool_check_robots_txt_url_blocked_result_allowed_yes: 'Diizinkan',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'Diblokir',
	tool_check_robots_txt_url_blocked_result_matched: 'Aturan yang cocok',
	tool_check_robots_txt_url_blocked_result_matched_none: 'Tidak ada Allow/Disallow (dianggap izinkan)',
	tool_check_robots_txt_url_blocked_result_http_status: 'Status HTTP robots.txt',
	tool_check_robots_txt_url_blocked_result_path: 'Path yang dievaluasi',
	tool_check_robots_txt_url_blocked_result_ua: 'User-agent yang dipakai',
	tool_check_robots_txt_url_blocked_result_robots_url: 'URL robots.txt',
	tool_check_robots_txt_url_blocked_result_group: 'Grup User-agent',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'Tidak ada isi robots.txt (hilang atau halaman HTML error). Dianggap izinkan semua.',
	tool_check_robots_txt_url_blocked_result_preview: 'Pratinjau robots.txt',
	tool_check_robots_txt_url_blocked_how_title: 'Cara kerja',
	tool_check_robots_txt_url_blocked_how_body:
		'Menjawab apakah, untuk crawler yang dipilih, robots.txt mengizinkan atau memblokir path itu. Hanya mengambil /robots.txt, bukan isi halaman.',
	tool_check_robots_txt_url_blocked_how_item_1: 'Tempel URL halaman lengkap (path penting, bukan hanya domain).',
	tool_check_robots_txt_url_blocked_how_item_2: 'Pilih user-agent (default Googlebot; juga *, Bingbot, atau GPTBot).',
	tool_check_robots_txt_url_blocked_how_item_3: 'Klik Periksa dan tunggu Worker mengambil /robots.txt.',
	tool_check_robots_txt_url_blocked_how_item_4: 'Baca Diizinkan/Diblokir, baris aturan yang cocok, dan status HTTP.',
	tool_check_robots_txt_url_blocked_how_item_5: 'Lihat pratinjau bila perlu memastikan grup yang dipakai.',
	tool_check_robots_txt_url_blocked_formula_title: 'Aturan pencocokan',
	tool_check_robots_txt_url_blocked_formula_body:
		'Mengikuti praktik umum selaras dokumen Google dan RFC 9309: pencocokan terpanjang; Allow mengalahkan Disallow jika panjang sama.',
	tool_check_robots_txt_url_blocked_formula_item_1: 'Ambil grup User-agent yang cocok; jika tidak ada, jatuh ke grup *.',
	tool_check_robots_txt_url_blocked_formula_item_2: 'Di antara Allow/Disallow yang cocok pada path, prefix terpanjang menang.',
	tool_check_robots_txt_url_blocked_formula_item_3: 'Panjang sama: Allow diprioritaskan atas Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_4: 'robots.txt hilang atau grup kosong = izinkan semua; status HTTP tetap ditampilkan.',
	tool_check_robots_txt_url_blocked_formula_item_5: 'Hanya /robots.txt yang diambil; host privat ditolak. Bukan tester resmi Search Console.',
	tool_check_robots_txt_url_blocked_example_title: 'Contoh',
	tool_check_robots_txt_url_blocked_example:
		'Contoh https://www.bing.com/search dengan Googlebot. Worker mengambil https://www.bing.com/robots.txt, mengevaluasi /search, lalu melaporkan Diizinkan atau Diblokir beserta baris yang cocok.',
	tool_check_robots_txt_url_blocked_usecases_title: 'Kapan berguna',
	tool_check_robots_txt_url_blocked_usecase_1:
		'Sebelum rilis: pastikan /admin atau /staging terblokir sementara halaman publik masih bisa di-crawl.',
	tool_check_robots_txt_url_blocked_usecase_2:
		'Uji / validasi robots.txt: setelah Disallow, cek apakah URL target benar-benar kena.',
	tool_check_robots_txt_url_blocked_usecase_3:
		'Aturan crawler AI: pilih GPTBot (atau *) dan cek path sensitif tanpa menulis file baru.',
	tool_check_robots_txt_url_blocked_faq_q1: 'Apakah ini membuat file robots.txt?',
	tool_check_robots_txt_url_blocked_faq_a1:
		'Tidak. Hanya memeriksa blokir. Untuk menulis aturan, pakai generator robots.txt.',
	tool_check_robots_txt_url_blocked_faq_q2: 'Mengapa uji Googlebot dan * terpisah?',
	tool_check_robots_txt_url_blocked_faq_a2:
		'Googlebot memakai grup sendiri jika ada; banyak bot lain jatuh ke *. Memisahkan mencegah asumsi satu aturan untuk semua.',
	tool_check_robots_txt_url_blocked_faq_q3: 'Bagaimana jika robots.txt hilang atau 404?',
	tool_check_robots_txt_url_blocked_faq_a3:
		'Praktik umum memperlakukannya sebagai izinkan semua. Alat tetap menampilkan status HTTP agar 404/redirect terlihat.',
	tool_check_robots_txt_url_blocked_faq_q4: 'Bisa uji crawler AI seperti GPTBot?',
	tool_check_robots_txt_url_blocked_faq_a4:
		'Ya — pilih GPTBot di daftar. Pencocokan mengikuti RFC 9309 sebagai evaluasi edge, bukan putusan resmi crawler.',
	tool_check_robots_txt_url_blocked_faq_q5: 'Apakah URL saya disimpan?',
	tool_check_robots_txt_url_blocked_faq_a5:
		'URL/hostname harus sampai ke Worker untuk mengambil /robots.txt. Kami tidak menyimpannya sebagai database produk. Ini alat edge, bukan “tanpa unggah”.',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt; RFC 9309 Robots Exclusion Protocol.',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default id;
