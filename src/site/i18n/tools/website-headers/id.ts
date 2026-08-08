/**
 * i18n tool shard (website-headers / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_headers_article:
    'Lihat header yang diterima edge untuk URL publik — berguna untuk cache, CORS, redirect, dan cek header keamanan. Permintaan diproxy; kami tidak menyimpan body halaman.',
  tool_headers_description:
    'Periksa header HTTP response sebuah URL dari edge kami. Alur: tempel https, kirim HEAD (GET bila perlu), ikuti redirect, tampilkan status dan peta header; blokir host privat. Contoh: baca Cache-Control, CORS, HSTS saat debug CDN atau redirect.',
  tool_headers_example:
    'contoh.com → status 200, URL akhir sama; header berisi content-type: text/html dan mungkin cache-control atau header keamanan tergantung origin.',
  tool_headers_example_title: 'Contoh',
  tool_headers_faq_a1:
    'Metadata dari server: tipe konten, aturan cache, redirect, dan kebijakan seperti HSTS, CSP, atau CORS.',
  tool_headers_faq_a2: 'Utamakan HEAD, GET hanya bila perlu. Tujuannya inspeksi header, bukan scraping atau menyimpan body.',
  tool_headers_faq_a3: 'Jaringan privat diblokir agar worker tidak dipakai memindai host internal.',
  tool_headers_faq_a4: 'Belum tentu. Anda melihat dari edge kami; CDN, geo, atau filter bot bisa beda dengan browser lokal.',
  tool_headers_faq_a5: 'Permintaan singkat di edge tanpa produk riwayat URL. Jangan tempel rahasia di query string.',
  tool_headers_faq_q1: 'Apa yang terlihat dari header respons HTTP?',
  tool_headers_faq_q2: 'Apakah alat ini mengunduh body halaman penuh?',
  tool_headers_faq_q3: 'Mengapa localhost dan IP privat diblokir?',
  tool_headers_faq_q4: 'Sama dengan DevTools browser?',
  tool_headers_faq_q5: 'Apakah URL yang saya cek disimpan?',
  tool_headers_how_body:
    'Tempel URL http(s) publik lalu periksa. Worker edge mengirim HEAD (GET jika perlu), mengikuti redirect, lalu mengembalikan status, URL akhir, dan header yang terlihat. Target privat ditolak. Ini sudut pandang edge — bisa beda dengan browser lokal jika CDN route per wilayah.',
  tool_headers_how_title: 'Cara kerjanya',
  tool_headers_ref_mdn_label: 'MDN — Header HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semantik HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP Caching',
  tool_headers_rules_body:
    'Worker berperan sebagai proxy singkat untuk inspeksi header; tidak menyimpan isi halaman. Nama header mengikuti semantik HTTP (lihat Referensi).',
  tool_headers_rules_item_1: 'Utamakan HEAD; GET jika origin tidak mendukung HEAD.',
  tool_headers_rules_item_2: 'Ikuti redirect dan laporkan URL akhir.',
  tool_headers_rules_item_3: 'Blokir localhost dan IP jaringan privat.',
  tool_headers_rules_item_4: 'Tampilkan header umum: Cache-Control, CORS, CSP, dll.',
  tool_headers_rules_title: 'Aturan pemeriksa',
  tool_headers_title: 'Cek header HTTP website — Lihat response headers',
  tool_headers_usecase_1: 'Sebelum rilis, pastikan Cache-Control atau cache CDN sudah benar.',
  tool_headers_usecase_2: 'Debug preflight CORS dengan membaca Access-Control-* di respons.',
  tool_headers_usecase_3: 'Cek apakah CSP, HSTS, atau header keamanan lain benar-benar terkirim.',
  tool_headers_usecases_title: 'Kapan dipakai',
};
export default id;
