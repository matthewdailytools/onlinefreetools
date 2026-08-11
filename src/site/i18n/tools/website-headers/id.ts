/**
 * i18n tool shard (website-headers / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_headers_article:
    'Lihat header yang diterima edge untuk URL publik — berguna untuk cache, CORS, redirect, dan cek header keamanan. Permintaan diproxy; kami tidak menyimpan body halaman.',
  tool_headers_description:
    'Header HTTP mengatur crawl dan indeks—X-Robots-Tag salah bisa memblokir. Ambil di edge; cek Cache-Control, X-Robots-Tag, redirect. Contoh: CDN.',
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
    'Tempel URL http(s) publik lalu periksa. Worker edge mengirim HEAD (GET jika perlu), mengikuti redirect satu per satu (hingga 5 lompatan), lalu mengembalikan status, URL akhir, header yang terlihat, dan rantai redirect. Target privat ditolak. Ini sudut pandang edge — bisa beda dengan browser lokal jika CDN route per wilayah.',
  tool_headers_how_title: 'Cara kerjanya',
  tool_headers_faq_a6:
    'Untuk SEO yang berguna: apakah respons di-cache (no-store vs max-age), berapa lama cache bersama menyimpannya (s-maxage), dan apakah wajib revalidasi (no-cache). Halaman yang jarang berubah cocok dengan max-age panjang agar CDN melayani tanpa menyentuh origin.',
  tool_headers_faq_a7:
    'x-robots-tag berlaku untuk semua jenis respons — HTML, PDF, gambar — sedangkan robots meta hanya bekerja di dalam HTML. Gunakan untuk mencegah indeks aset non-HTML atau aturan yang sulit ditaruh di halaman itu sendiri. Jika bertentangan, x-robots-tag menang.',
  tool_headers_faq_q6: 'Apa yang perlu diperhatikan di cache-control?',
  tool_headers_faq_q7: 'Mengapa x-robots-tag penting jika sudah ada robots meta?',
  tool_headers_ref_mdn_label: 'MDN — Header HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semantik HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP Caching',
  tool_headers_rules_body:
    'Worker berperan sebagai proxy singkat untuk inspeksi header; tidak menyimpan isi halaman. Nama header mengikuti semantik HTTP (lihat Referensi).',
  tool_headers_rules_item_1: 'Utamakan HEAD; GET jika origin tidak mendukung HEAD.',
  tool_headers_rules_item_2: 'Ikuti redirect dan laporkan URL akhir.',
  tool_headers_rules_item_3: 'Blokir localhost dan IP jaringan privat.',
  tool_headers_rules_item_4: 'Tampilkan header umum: Cache-Control, CORS, CSP, dll.',
  tool_headers_rules_item_5: 'Kumpulkan rantai redirect (hingga 5 lompatan) dengan status dan Location tiap langkah.',
  tool_headers_rules_title: 'Aturan pemeriksa',
  tool_headers_seo_cache_absent: 'Tanpa header Cache-Control. Browser dan CDN memakai heuristik; konten yang baru berubah bisa disajikan basi.',
  tool_headers_seo_cache_heading: 'Cache-Control',
  tool_headers_seo_cache_immutable: 'immutable: cache tidak perlu revalidasi selama masa segar — umum untuk aset ber-fingerprint.',
  tool_headers_seo_cache_maxage: 'max-age={n}: browser dan cache bersama boleh memakai ulang respons ini selama {n} detik tanpa bertanya ke origin.',
  tool_headers_seo_cache_mustrevalidate: 'must-revalidate: respons basi wajib divalidasi ulang sebelum dipakai.',
  tool_headers_seo_cache_nocache: 'no-cache: boleh disimpan tetapi harus revalidasi sebelum dipakai ulang.',
  tool_headers_seo_cache_nostore: 'no-store: tidak ada yang di-cache; setiap permintaan sampai ke origin. Cocok untuk halaman privat atau mudah berubah.',
  tool_headers_seo_cache_other: 'Direktif yang tidak dijelaskan di sini: {d}',
  tool_headers_seo_cache_private: 'private: hanya cache browser yang boleh menyimpan; cache bersama tidak.',
  tool_headers_seo_cache_public: 'public: cache mana pun boleh menyimpan respons.',
  tool_headers_seo_cache_smaxage: 's-maxage={n}: cache bersama (CDN/proxy) boleh melayani selama {n} detik; mengesampingkan max-age untuk mereka.',
  tool_headers_seo_intro: 'Bacaan bahasa sederhana untuk header yang paling penting bagi pencarian dan crawling.',
  tool_headers_seo_redirect_301: '301 Permanen: mesin pencari memindahkan sinyal ranking ke tujuan — pas untuk halaman pindah dan perubahan www.',
  tool_headers_seo_redirect_302: '302/307 Sementara: pertahankan untuk perubahan jangka pendek — sinyal ranking tetap di URL asli.',
  tool_headers_seo_redirect_chain: 'Permintaan mengikuti {n} redirect sebelum respons akhir:',
  tool_headers_seo_redirect_cross_host: 'Lompatan ini meninggalkan host asli: {from} → {to}.',
  tool_headers_seo_redirect_heading: 'Redirect',
  tool_headers_seo_redirect_ok: 'Tanpa redirect: URL akhir sama dengan yang Anda cek.',
  tool_headers_robots_absent: 'Tanpa header X-Robots-Tag. Aturan indeks berasal dari robots.txt dan robots meta halaman.',
  tool_headers_robots_blocked: 'Halaman ini dikecualikan dari pengindeksan oleh header ini.',
  tool_headers_seo_robots_heading: 'X-Robots-Tag',
  tool_headers_robots_maxsnippet: 'max-snippet={n}: membatasi panjang snippet menjadi {n} karakter.',
  tool_headers_robots_noarchive: 'noarchive: mesin pencari tidak akan menampilkan salinan cache URL ini.',
  tool_headers_robots_nofollow: 'nofollow: crawler tidak akan mengikuti tautan pada respons ini.',
  tool_headers_robots_noindex: 'noindex: URL ini dikecualikan dari hasil pencarian.',
  tool_headers_robots_none: 'none: setara noindex + nofollow.',
  tool_headers_seo_title: 'Cek SEO pada header',
  tool_headers_title: 'Cek header HTTP website — Lihat response headers',
  tool_headers_usecase_1: 'Sebelum rilis, pastikan Cache-Control atau cache CDN sudah benar.',
  tool_headers_usecase_2: 'Debug preflight CORS dengan membaca Access-Control-* di respons.',
  tool_headers_usecase_3: 'Cek apakah CSP, HSTS, atau header keamanan lain benar-benar terkirim.',
  tool_headers_usecases_title: 'Kapan dipakai',
};
export default id;
