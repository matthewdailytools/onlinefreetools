/**
 * i18n tool shard (robots-txt-generator / id).
 * Indonesian locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_robots_home_title: 'Pembuat robots.txt',
	tool_robots_home_desc: 'Kendalikan cara mesin pencari merayapi situs Anda dengan robots.txt yang valid: izin, blokir, dan perayap AI di browser.',
	tool_robots_title: 'Pembuat robots.txt — kelola izin dan blokir perayap AI',
	tool_robots_description:
		'robots.txt salah bisa menyembunyikan situs. Susun Allow, Disallow, dan aturan crawler AI di browser, lalu salin. Contoh: blokir GPTBot, biarkan Googlebot.',
	tool_robots_generate: 'Buat',
	tool_robots_sample: 'Contoh',
	tool_robots_clear: 'Bersihkan',
	tool_robots_copy: 'Salin',
	tool_robots_copied: 'Tersalin',
	tool_robots_agents_label: 'User-agent',
	tool_robots_agents_hint: 'Centang crawler yang ingin disertakan, lalu tambahkan jalur untuk setiap grup.',
	tool_robots_include: 'Sertakan user-agent ini',
	tool_robots_agent_add: 'Tambah agen kustom',
	tool_robots_agent_remove: 'Hapus agen',
	tool_robots_allow_label: 'Jalur Allow (satu per baris)',
	tool_robots_disallow_label: 'Jalur Disallow (satu per baris)',
	tool_robots_sitemap_label: 'URL Sitemap (opsional)',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'Unduh',
	tool_robots_empty_agent: 'Pilih atau tambahkan user-agent dulu.',
	tool_robots_owner_of: 'Pemilik: {owner}',
	tool_robots_how_title: 'Cara kerja',
	tool_robots_how_body:
		'Pilih perayap yang ditargetkan, tambahkan jalur Allow dan Disallow untuk setiap grup, opsional baris Sitemap, lalu tekan Buat. Halaman menyusun file teks polos mengikuti tata letak RFC 9309: satu baris User-agent per grup, baris Allow/Disallow di bawahnya, baris kosong antar grup, dan baris Sitemap di akhir. Salin hasilnya ke akar situs Anda di /robots.txt.',
	tool_robots_rules_title: 'Aturan sintaks yang penting',
	tool_robots_rules_body:
		'Aturan robots.txt adalah awalan jalur, bukan pola, dan perayap hanya mengikuti satu grup: grup yang User-agent-nya paling spesifik cocok dengannya. Ini aturan yang diikuti pembuat ini.',
	tool_robots_rules_item_1: 'Pemilihan grup: perayap menuruti grup dengan kecocokan User-agent paling spesifik — namanya sendiri mengalahkan *, dan urutan di dalam file tidak menentukan. Beberapa baris User-agent untuk perayap yang sama digabung menjadi satu grup (RFC 9309).',
	tool_robots_rules_item_2: 'Pencocokan awalan: Allow dan Disallow cocok dengan awalan jalur, bukan substring atau regex. Hanya * dan $ yang khusus (RFC 9309).',
	tool_robots_rules_item_3: 'Prioritas aturan dalam satu grup: jalur cocok terpanjang yang menang, dan bila Allow dan Disallow sama panjang, Allow yang menang. Jadi Disallow: /admin/ bersama Allow: /admin/public/ membuat subfolder publik tetap bisa dirayapi.',
	tool_robots_rules_item_4: 'Seluruh situs dan baris sitemap: Disallow: / memblokir agen itu dari semua URL, sedangkan Disallow bernilai kosong memperbolehkan segalanya. Sitemap: adalah ekstensi di luar RFC 9309, tidak membedakan huruf besar/kecil, dan boleh ditaruh di mana saja — pembuat ini menaruhnya paling akhir.',
	tool_robots_example_title: 'Contoh',
	tool_robots_example:
		'Contoh: Googlebot dengan Allow: / (aktif penuh), GPTBot dengan Disallow: / (diblokir), dan baris Sitemap menunjuk ke /sitemap.xml. Keluaran mencerminkan tata letak ini: satu grup per perayap, baris kosong antar grup, dan sitemap di akhir.',
	tool_robots_usecases_title: 'Cocok untuk',
	tool_robots_usecase_1: 'Situs baru: buat robots.txt awal yang menjaga mesin pencari aktif dan menyembunyikan jalur staging privat.',
	tool_robots_usecase_2: 'Kontrol perayap AI: beri GPTBot, ClaudeBot, Google-Extended, CCBot, atau PerplexityBot grup Disallow sendiri sementara Googlebot tetap merayapi. Google-Extended mencakup Gemini dan grounding Vertex AI — AI Overviews di Google Search tetap memakai Googlebot.',
	tool_robots_usecase_3: 'Penemuan: padukan robots.txt dengan baris Sitemap agar perayap menemukan sitemap Anda.',
	tool_robots_faq_q1: 'Apa yang terjadi jika saya menulis Disallow: / ?',
	tool_robots_faq_a1: 'Itu memberi tahu perayap tersebut untuk tidak mengambil URL apa pun di bawah akar situs. Jika Googlebot mendapat Disallow: /, halaman Anda bisa hilang dari Google Search. Disallow memblokir perayapan, bukan pengindeksan: URL yang diblokir tetapi ditautkan situs lain masih bisa muncul di hasil tanpa cuplikan. Agar benar-benar hilang, biarkan halaman bisa dirayapi lalu beri noindex. Untuk jalur staging gunakan Disallow: /private/ sebagai gantinya.',
	tool_robots_faq_q2: 'Bagaimana cara memblokir perayap AI seperti GPTBot?',
	tool_robots_faq_a2: 'Buat grup dengan User-agent perayap tersebut (misalnya GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot) dan tambahkan Disallow: /. Periksa dokumentasi resmi perayap, karena perayap AI memperbarui user-agent dan rentang IP dari waktu ke waktu.',
	tool_robots_faq_q3: 'Di mana baris Sitemap sebaiknya ditaruh?',
	tool_robots_faq_a3: 'Posisi tidak memengaruhi cara mesin pencari membacanya, tetapi konvensinya menaruhnya di akhir file. Pembuat ini menambahkannya paling akhir saat Anda mengisi URL.',
	tool_robots_faq_q4: 'Apakah robots.txt saya diunggah ke mana pun?',
	tool_robots_faq_a4: 'Tidak. File dibuat di browser Anda dan tidak pernah dikirim ke server. Tutup tabnya dan tidak ada yang tersimpan.',
	tool_robots_references: 'RFC 9309 Robots Exclusion Protocol; Google Search Central — robots.txt; Google Search Central — Kelola perayap AI.',
	tool_robots_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — Kelola perayap AI',
};

export default id;
