/**
 * i18n tool shard (robots-txt-generator / id).
 * Indonesian locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_robots_home_title: 'Pembuat robots.txt',
	tool_robots_home_desc: 'Buat robots.txt dengan sintaks benar: izin, blokir, dan perayap AI di browser Anda.',
	tool_robots_title: 'Pembuat robots.txt — kelola izin dan blokir perayap AI',
	tool_robots_description:
		'Buat file robots.txt di browser Anda. Langkah: pilih user-agent, tambahkan jalur Allow / Disallow dan baris Sitemap, lalu salin hasil teks polos dengan aturan sintaks dan user-agent terbaru perayap AI yang dijelaskan. Berjalan lokal—tidak ada yang diunggah. Contoh: memblokir GPTBot sambil menjaga Googlebot tetap aktif sepenuhnya.',
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
		'Aturan robots.txt adalah awalan jalur, bukan pola, dan perayap menerapkan grup terakhir yang cocok di file. Ini aturan yang diikuti pembuat ini.',
	tool_robots_rules_item_1: 'Urutan grup: baris User-agent memulai grup untuk perayap tersebut; baris kosong mengakhirinya. Grup terakhir yang cocok menang.',
	tool_robots_rules_item_2: 'Pencocokan awalan: Allow dan Disallow cocok dengan awalan jalur, bukan substring atau regex. Hanya * dan $ yang khusus (RFC 9309).',
	tool_robots_rules_item_3: 'Disallow: / memblokir agen itu dari seluruh situs. Disallow bernilai kosong memperbolehkan segalanya untuk agen itu.',
	tool_robots_rules_item_4: 'Sitemap adalah ekstensi, bukan bagian RFC 9309. Tidak membedakan huruf besar/kecil dan bisa di mana saja, meski biasanya ditaruh di akhir.',
	tool_robots_example_title: 'Contoh',
	tool_robots_example:
		'Contoh: Googlebot dengan Allow: / (aktif penuh), GPTBot dengan Disallow: / (diblokir), dan baris Sitemap menunjuk ke /sitemap.xml. Keluaran mencerminkan tata letak ini: satu grup per perayap, baris kosong antar grup, dan sitemap di akhir.',
	tool_robots_usecases_title: 'Cocok untuk',
	tool_robots_usecase_1: 'Situs baru: buat robots.txt awal yang menjaga mesin pencari aktif dan menyembunyikan jalur staging privat.',
	tool_robots_usecase_2: 'Kontrol perayap AI: blokir GPTBot, ClaudeBot, Google-Extended, CCBot, atau PerplexityBot dari pelatihan atau ekstraksi ringkasan tanpa menyentuh Googlebot.',
	tool_robots_usecase_3: 'Penemuan: padukan robots.txt dengan baris Sitemap agar perayap menemukan sitemap Anda.',
	tool_robots_faq_q1: 'Apa yang terjadi jika saya menulis Disallow: / ?',
	tool_robots_faq_a1: 'Itu memberi tahu perayap tersebut untuk tidak mengambil URL apa pun di bawah akar situs. Jika Googlebot mendapat Disallow: /, halaman Anda bisa hilang dari Google Search. Untuk jalur staging gunakan Disallow: /private/ sebagai gantinya.',
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
