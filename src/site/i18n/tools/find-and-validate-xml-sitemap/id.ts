/**
 * Shard i18n (find-and-validate-xml-sitemap / id).
 * Skenario: URL situs → temukan sitemap → validasi XML + sampel loc (bukan generator).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'Temukan & validasi sitemap XML',
	tool_find_and_validate_xml_sitemap_home_desc:
		'Temukan sitemap lewat robots.txt atau /sitemap.xml, lalu cek struktur, jenis, dan sampel loc.',
	tool_find_and_validate_xml_sitemap_desc:
		'Temukan sitemap lewat robots.txt atau /sitemap.xml, lalu cek struktur, jenis, dan sampel loc.',
	tool_find_and_validate_xml_sitemap_title: 'Temukan dan validasi sitemap XML',
	tool_find_and_validate_xml_sitemap_description:
		'Masukkan URL situs untuk menemukan sitemap XML lewat baris Sitemap: di robots.txt atau /sitemap.xml; validasi struktur, hitung loc, dan bedakan urlset vs sitemapindex. Bukan generator. Contoh: sitemaps.org.',
	tool_find_and_validate_xml_sitemap_url_label: 'URL situs',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: 'Temukan & validasi',
	tool_find_and_validate_xml_sitemap_sample: 'Contoh',
	tool_find_and_validate_xml_sitemap_clear: 'Hapus',
	tool_find_and_validate_xml_sitemap_running: 'Sedang menemukan dan memvalidasi sitemap…',
	tool_find_and_validate_xml_sitemap_url_error: 'Masukkan URL http(s) situs yang valid (origin atau beranda).',
	tool_find_and_validate_xml_sitemap_error_prefix: 'Error: ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'Gagal mengambil kandidat sitemap. Host mungkin offline atau memblokir bot.',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'URL dan hostname dikirim ke Worker untuk mengambil robots.txt dan sitemap. Kami tidak menyimpannya sebagai database produk.',
	tool_find_and_validate_xml_sitemap_result_site: 'Origin situs',
	tool_find_and_validate_xml_sitemap_result_candidates: 'Kandidat yang dicoba',
	tool_find_and_validate_xml_sitemap_result_primary: 'Temuan utama',
	tool_find_and_validate_xml_sitemap_result_none_primary: 'Tidak ada struktur sitemap valid di antara kandidat',
	tool_find_and_validate_xml_sitemap_col_url: 'URL',
	tool_find_and_validate_xml_sitemap_col_status: 'Status HTTP',
	tool_find_and_validate_xml_sitemap_col_kind: 'Jenis',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'Jumlah loc',
	tool_find_and_validate_xml_sitemap_col_valid: 'Struktur valid',
	tool_find_and_validate_xml_sitemap_col_samples: 'Sampel loc',
	tool_find_and_validate_xml_sitemap_valid_yes: 'Ya',
	tool_find_and_validate_xml_sitemap_valid_no: 'Tidak',
	tool_find_and_validate_xml_sitemap_empty_findings: 'Tidak ada temuan untuk situs ini.',
	tool_find_and_validate_xml_sitemap_how_title: 'Cara kerja',
	tool_find_and_validate_xml_sitemap_how_body:
		'Satu tugas: temukan sitemap XML situs dan lihat apakah tampak seperti urlset atau sitemapindex yang valid — tidak membuat file baru.',
	tool_find_and_validate_xml_sitemap_how_item_1: 'Masukkan origin situs atau URL beranda.',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'Klik Temukan & validasi; Worker membaca Sitemap: di robots.txt lalu mencoba /sitemap.xml dan path indeks umum.',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'Tinjau jenis root, jumlah URL, dan sampel <loc> di tabel temuan.',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'Perbaiki masalah XML atau discovery sebelum IndexNow atau Search Console.',
	tool_find_and_validate_xml_sitemap_formula_title: 'Aturan discovery dan validasi',
	tool_find_and_validate_xml_sitemap_formula_body:
		'Sesuai protokol sitemaps.org: XML terbentuk baik dengan root urlset atau sitemapindex dan entri <loc> yang dapat dihitung.',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'Urutan: arahan Sitemap: di robots.txt, lalu /sitemap.xml, /sitemap_index.xml, /sitemap-index.xml.',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'Struktur valid jika respons tampak seperti XML sitemap dan status HTTP OK.',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'sitemapindex mencantumkan sitemap anak; urlset mencantumkan loc halaman — keduanya dilaporkan.',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'Kami menghitung <loc> dan menampilkan hingga 10 sampel; tidak merayapi setiap URL.',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'Gzip, body besar, redirect, dan non-XML bisa gagal. Host privat ditolak.',
	tool_find_and_validate_xml_sitemap_example_title: 'Contoh',
	tool_find_and_validate_xml_sitemap_example:
		'Input contoh https://www.sitemaps.org/. Worker mencoba Sitemap: dan path umum, lalu menampilkan status HTTP, jenis, jumlah loc, sampel, dan validStructure.',
	tool_find_and_validate_xml_sitemap_usecases_title: 'Kapan berguna',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'Pencari sitemap: setelah migrasi CMS atau CDN, pastikan lokasi publikasi peta situs.',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'Pemeriksa / validator XML: sebelum Search Console, pastikan file terbentuk baik dan apakah indeks atau urlset.',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'Cek cepat loc: setelah regenerasi sitemap besar, lihat sampel <loc> tanpa unduh penuh.',
	tool_find_and_validate_xml_sitemap_faq_q1: 'Apakah ini generator sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'Tidak — hanya menemukan dan memvalidasi. Untuk membuat file dari daftar URL gunakan generator XML Sitemap.',
	tool_find_and_validate_xml_sitemap_faq_q2: 'Di mana sitemap dicari?',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'Pertama baris Sitemap: di robots.txt, lalu /sitemap.xml dan path indeks umum di host yang sama.',
	tool_find_and_validate_xml_sitemap_faq_q3: 'Apa bedanya sitemapindex dan urlset?',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex mendaftarkan sitemap anak; urlset mendaftarkan loc halaman. Keduanya root protokol yang sah; tabel menampilkan jenisnya.',
	tool_find_and_validate_xml_sitemap_faq_q4: 'Apakah setiap URL di sitemap di-crawl?',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'Tidak. Kami menghitung <loc>, menampilkan sampel, dan cek struktur saja — bukan status hidup setiap halaman.',
	tool_find_and_validate_xml_sitemap_faq_q5: 'Apakah URL saya diunggah atau disimpan?',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'URL/hostname harus sampai ke Worker agar robots.txt dan sitemap bisa diambil. Kami tidak menyimpan pengecekan sebagai DB produk. Ini tool edge, bukan «tanpa unggah».',
	tool_find_and_validate_xml_sitemap_references:
		'Protokol sitemaps.org; Google Search Central — ringkasan sitemaps.',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — Protokol',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — Ringkasan sitemaps',
};

export default id;
