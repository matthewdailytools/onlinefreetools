/**
 * i18n tool shard (sitemap-xml-generator / id).
 * Indonesian independent rewrite — keeps sitemap.xml/lastmod/changefreq/priority as technical terms.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_sitemap_home_title: 'Pembuat sitemap XML',
	tool_sitemap_home_desc:
		'Bantu Google menemukan halaman yang terlewat oleh tautan internal Anda: ubah daftar URL menjadi sitemap.xml yang valid dengan lastmod, changefreq, dan priority, langsung di browser.',
	tool_sitemap_title: 'Pembuat sitemap XML — buat sitemap.xml dari daftar URL',
	tool_sitemap_description:
		'Sitemap memberi tahu Google URL mana saja yang ada, terutama yang tertutup tautan internal lemah. Tempel URL https, pratinjau sitemap.xml valid, salin ke root. Contoh: 3 URL → 3 entri.',
	tool_sitemap_generate: 'Buat',
	tool_sitemap_sample: 'Contoh',
	tool_sitemap_clear: 'Bersihkan',
	tool_sitemap_copy: 'Salin',
	tool_sitemap_copied: 'Tersalin',
	tool_sitemap_download: 'Unduh',
	tool_sitemap_urls_label: 'URL (satu per baris)',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'Tiap baris: URL, atau URL | lastmod (yyyy-MM-dd), atau URL | lastmod | changefreq | priority. Contoh: https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'URL non-http dilewati: {url}',
	tool_sitemap_warn_bad_lastmod: 'lastmod tidak valid (pakai yyyy-MM-dd atau tanggal-waktu W3C): {url}',
	tool_sitemap_warn_too_many: 'Lebih dari 50.000 URL: pecah menjadi beberapa sitemap dan hubungkan dengan sitemap index.',
	tool_sitemap_how_title: 'Cara kerjanya',
	tool_sitemap_how_body:
		'Tempel daftar URL, satu per baris. Setelah garis vertikal Anda dapat menambahkan lastmod (yyyy-MM-dd), changefreq, dan priority. Halaman mem-parsing tiap baris, meng-escape karakter cadangan, memastikan URL diawali http(s), lalu menyusun urlset sesuai protokol. Salin XML ke root situs, lalu rujuk dari robots.txt atau kirim di Search Console.',
	tool_sitemap_rules_title: 'Aturan dan batas protokol',
	tool_sitemap_rules_body: 'Ini aturan dari protokol sitemap dan Google yang diikuti pembuat ini.',
	tool_sitemap_rules_item_1:
		'Wajib: setiap <url> harus memuat <loc> dengan URL lengkap. lastmod, changefreq, dan priority opsional.',
	tool_sitemap_rules_item_2:
		'Format lastmod: tanggal W3C (yyyy-MM-dd) atau datetime seperti 2026-08-01T12:00:00+00:00. Format lain diabaikan atau ditolak.',
	tool_sitemap_rules_item_3:
		'changefreq hanyalah petunjuk, bukan sinyal. Google mengabaikannya, jadi mengisinya tidak mengubah frekuensi crawling.',
	tool_sitemap_rules_item_4:
		'Batas: satu sitemap maksimal 50.000 URL dan 50MB setelah kompresi. Lebih dari itu, pecah dan pakai sitemap index.',
	tool_sitemap_example_title: 'Contoh',
	tool_sitemap_example:
		'Input contoh: https://example.com/ dan https://example.com/products dengan lastmod 2026-08-01, plus https://example.com/about — hasilnya urlset berisi tiga elemen url, yang tengah membawa lastmod.',
	tool_sitemap_usecases_title: 'Cocok untuk',
	tool_sitemap_usecase_1:
		'Situs baru: buat sitemap.xml pertama dari daftar URL dan kirim di Search Console.',
	tool_sitemap_usecase_2:
		'Konten diperbarui: isi lastmod hanya untuk halaman yang benar-benar berubah. Google memakai lastmod hanya bila tanggalnya akurat dan konsisten di seluruh file, jadi menaruh tanggal hari ini pada semua URL justru membuat kolom itu diabaikan.',
	tool_sitemap_usecase_3:
		'Discovery: arahkan robots.txt ke URL sitemap agar crawler menemukannya tanpa menunggu pengiriman.',
	tool_sitemap_faq_q1: 'Berapa batas URL untuk satu sitemap?',
	tool_sitemap_faq_a1:
		'50.000 URL atau 50MB (tanpa kompresi). Pembuat ini memberi peringatan saat daftar melewati 50.000 agar Anda memecahnya dan memakai sitemap index.',
	tool_sitemap_faq_q2: 'Format lastmod apa yang diminta?',
	tool_sitemap_faq_a2:
		'Tanggal W3C (yyyy-MM-dd) atau datetime lengkap seperti 2026-08-01T12:00:00+00:00. Baris dengan lastmod tidak sesuai ditandai agar Anda perbaiki sebelum menyimpan.',
	tool_sitemap_faq_q3: 'Apakah changefreq memengaruhi crawling?',
	tool_sitemap_faq_a3:
		'Tidak. Google mengabaikan changefreq; itu hanya petunjuk untuk konsumen lain. Priority juga diabaikan. Metadata yang layak dijaga akurat adalah lastmod.',
	tool_sitemap_faq_q4: 'Apa bedanya dengan IndexNow?',
	tool_sitemap_faq_a4:
		'IndexNow memberi tahu mesin pencari peserta secara langsung saat URL berubah, sedangkan sitemap adalah daftar tetap yang dipol-crawler. Gunakan keduanya: IndexNow untuk notifikasi segera, sitemap untuk discovery berkelanjutan.',
	tool_sitemap_references: 'sitemaps.org — protokol sitemap; Google Search Central — membuat dan mengirim sitemap.',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — protokol',
	tool_sitemap_ref_google_label: 'Search Central — membuat dan mengirim sitemap',
};

export default id;
