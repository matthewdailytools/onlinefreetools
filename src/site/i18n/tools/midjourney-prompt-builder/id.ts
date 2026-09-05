/**
 * i18n tool shard (midjourney-prompt-builder / id).
 * Ditulis ulang untuk pencarian bahasa Indonesia: «generator prompt Midjourney», «cara bikin prompt Midjourney»,
 * «parameter --ar», «ekspor prompt ke JSON». Kata utama ada di H1; sisanya masuk deskripsi, tanya jawab, dan contoh pemakaian.
 * Batas faktual: prompt dirangkai di peramban; hanya Perluas/Perhalus yang mengirim draf ke Cloudflare Workers AI
 * (butuh Turnstile, ada batas kuota). Halaman ini tidak membuat gambar dan tidak memanggil Midjourney.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Rangkai prompt Midjourney di halaman ini sebelum dipakai: isi subjek, gaya, cahaya, rasio, dan parameter MJ, lalu halaman menyusunnya menjadi Markdown atau JSON di dalam peramban supaya bisa langsung ditempel ke ChatGPT, Gemini, Claude, atau DeepSeek. Yang dihasilkan hanya teks — halaman ini tidak membuat gambar dan tidak memanggil Midjourney. Secara bawaan tidak ada yang dikirim; draf baru dikirim ke Cloudflare Workers AI kalau Anda menekan Perluas atau Perhalus dan lolos Turnstile.',
	tool_midjourney_prompt_builder_build:
		'Buat prompt',
	tool_midjourney_prompt_builder_clear:
		'Kosongkan',
	tool_midjourney_prompt_builder_copy:
		'Salin',
	tool_midjourney_prompt_builder_desc:
		'Generator prompt Midjourney: isi subjek, gaya, cahaya, dan rasio lalu halaman merangkainya jadi Markdown atau JSON; AI Cloudflare opsional dengan Turnstile.',
	tool_midjourney_prompt_builder_description:
		'Generator prompt Midjourney: Anda mengisi subjek, gaya, cahaya, rasio, dan parameter MJ, lalu halaman merangkainya jadi satu baris siap tempel — rasio berubah menjadi --ar dan kalau versi tidak ditulis, --v 6.1 ditambahkan. Bawaannya Markdown, tersedia JSON untuk skrip Anda, dan contoh samurai di jembatan sudah jalan begitu halaman terbuka. Kalau deskripsinya masih kurang, Perluas atau Perhalus mengirim draf ke Cloudflare Workers AI (butuh Turnstile, ada kuota). Hanya teks: gambar tidak dibuat di sini.',
	tool_midjourney_prompt_builder_download:
		'Unduh',
	tool_midjourney_prompt_builder_empty:
		'Isi setidaknya satu kolom sebelum membuat prompt.',
	tool_midjourney_prompt_builder_example:
		'Masukan: subjek = samurai menghunus pedang di jembatan berlumut, kabut hujan, gerbang torii di kejauhan; gaya = tinta sinematik, hijau-biru dan arang, butiran halus; cahaya = cahaya belakang saat matahari terbit dengan kabut volumetrik; rasio = 16:9; parameter = --v 6.1 --style raw --stylize 120 --chaos 8. Keluaran (Markdown): blok ## Task memuat satu baris Midjourney berisi subjek, gaya, dan cahaya, ditutup --ar 16:9. Kalau dipindah ke JSON, data yang sama datang sebagai kolom.',
	tool_midjourney_prompt_builder_example_title:
		'Contoh',
	tool_midjourney_prompt_builder_faq_a1:
		'Perangkaian terjadi di tab peramban ini, jadi secara bawaan tidak ada yang dikirim. Pengiriman hanya terjadi saat Anda menekan Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI; kami tidak meneruskan teks itu dari server kami ke OpenAI, Google, Anthropic, atau DeepSeek.',
	tool_midjourney_prompt_builder_faq_a2:
		'Dalam mode lokal tidak ada model yang dipanggil: halaman hanya menata isian Anda ke dalam blok Role, Task, Constraints, dan Output. Perluas dan Perhalus memakai Cloudflare Workers AI setelah lolos Turnstile, dan tidak memanggil API ChatGPT, Gemini, Claude, atau DeepSeek dari server kami.',
	tool_midjourney_prompt_builder_faq_a3:
		'Generator templat prompt memberi kerangka umum empat blok yang cocok untuk topik apa pun. Di sini kolomnya sudah khas Midjourney — subjek, gaya, cahaya, rasio, parameter — lengkap dengan contoh yang terisi saat halaman dibuka dan tabel padanan khusus untuk kasus ini.',
	tool_midjourney_prompt_builder_faq_a4:
		'Turnstile menahan skrip otomatis supaya kuota gratis tetap untuk orang. Selesaikan dulu di panel AI sebelum menekan Perluas atau Perhalus; tanpa token yang sah tombol itu memberi galat, sementara perangkaian di peramban tetap jalan.',
	tool_midjourney_prompt_builder_faq_a5:
		'Bisa. Setelah pindah ke JSON, kolom keluaran yang sama memuat data terstruktur plus teks prompt yang sudah dirangkai, siap dipakai untuk skrip generasi beruntun, pengujian, atau berkas konfigurasi.',
	tool_midjourney_prompt_builder_faq_a6:
		'Bisa. Salin hasilnya dan tempel ke obrolan yang Anda pakai, atau langsung ke Midjourney. Halaman ini cuma merapikan teks dan tidak memanggil API, jadi tidak ada alamat terpisah untuk tiap platform.',
	tool_midjourney_prompt_builder_faq_q1:
		'Apakah yang saya tulis dikirim ke server?',
	tool_midjourney_prompt_builder_faq_q2:
		'Apakah halaman ini memanggil API ChatGPT atau model lain?',
	tool_midjourney_prompt_builder_faq_q3:
		'Apa bedanya dengan generator templat prompt?',
	tool_midjourney_prompt_builder_faq_q4:
		'Kenapa harus lolos Turnstile untuk memakai AI?',
	tool_midjourney_prompt_builder_faq_q5:
		'Bisakah keluarannya berbentuk JSON?',
	tool_midjourney_prompt_builder_faq_q6:
		'Cocok dipakai dengan ChatGPT, Gemini, Claude, atau DeepSeek?',
	tool_midjourney_prompt_builder_faq_q7:
		'Apa bedanya mode lokal dan AI Cloudflare yang opsional?',
	tool_midjourney_prompt_builder_faq_a7:
		'Di mode lokal semuanya dirangkai di tab ini dan tidak keluar dari peramban. Perluas atau Perhalus mengirim draf saat itu ke Cloudflare Workers AI (butuh Turnstile, ada batas frekuensi dan kuota harian), lalu teks yang kembali ditulis utuh ke kolom keluaran menimpa draf yang tadi tampil — baca ulang sebelum menyalin. Kalau gagal atau kuota habis, lanjutkan saja di mode lokal.',
	tool_midjourney_prompt_builder_ai_expand:
		'Perluas dengan AI',
	tool_midjourney_prompt_builder_ai_polish:
		'Perhalus dengan AI',
	tool_midjourney_prompt_builder_ai_panel_label:
		'Opsional: Cloudflare AI (butuh Turnstile)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'Kirim draf ke Cloudflare Workers AI?',
	tool_midjourney_prompt_builder_ai_consent_body:
		'Langkah ini opsional: draf yang sekarang ada di kolom isian dikirim ke Cloudflare Workers AI untuk sekali proses. Kami tidak meneruskannya dari server kami ke OpenAI, Google, Anthropic, atau DeepSeek. Tanpa AI, prompt tetap dirangkai di peramban Anda.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'Lanjutkan',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'Batal',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI sedang bekerja…',
	tool_midjourney_prompt_builder_ai_done:
		'Teks dari AI ditulis utuh ke kolom keluaran. Periksa dulu sebelum menyalin.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'Kali ini AI tidak menjawab; isi kolom keluaran tidak berubah.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'Kuota AI habis. Lanjutkan merangkai di sini atau coba besok (UTC).',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'Selesaikan pemeriksaan Turnstile sebelum memakai AI.',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'Format keluaran',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'Subjek',
	tool_midjourney_prompt_builder_subject_ph:
		'Misalnya: samurai menghunus pedang di jembatan…',
	tool_midjourney_prompt_builder_style_label:
		'Gaya',
	tool_midjourney_prompt_builder_style_ph:
		'Misalnya: tinta sinematik, nuansa arang…',
	tool_midjourney_prompt_builder_lighting_label:
		'Cahaya',
	tool_midjourney_prompt_builder_lighting_ph:
		'Misalnya: cahaya belakang saat matahari terbit…',
	tool_midjourney_prompt_builder_aspect_label:
		'Rasio',
	tool_midjourney_prompt_builder_aspect_ph:
		'Misalnya 16:9, 9:16, atau 1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'Parameter MJ',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'Misalnya --v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Tabel padanan parameter Midjourney',
	tool_midjourney_prompt_builder_rules_table_ar:
		'Rasio → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'Versi → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'Rasio yang Anda tulis berubah menjadi --ar di ujung baris; kalau di parameter tidak ada versi, --v 6.1 ikut ditambahkan.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 persegi',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 mendatar',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 tegak',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'Versi bawaan MJ v6',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'Isi kolomnya, buat prompt, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek; kalau deskripsinya kurang detail, pakai Perluas atau Perhalus lewat AI Cloudflare yang opsional.',
	tool_midjourney_prompt_builder_how_item_1:
		'Klik Muat contoh untuk preset bawaan.',
	tool_midjourney_prompt_builder_how_item_2:
		'Ubah subjek, gaya, cahaya, rasio, dan parameter lalu tekan Buat prompt; pindah ke JSON kalau butuh ekspor berkolom.',
	tool_midjourney_prompt_builder_how_item_3:
		'Opsional: selesaikan Turnstile di panel AI lalu tekan Perluas atau Perhalus; teks yang kembali langsung masuk ke kolom keluaran.',
	tool_midjourney_prompt_builder_how_item_4:
		'Salin atau unduh, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek untuk diutak-atik lagi, atau langsung ke Midjourney.',
	tool_midjourney_prompt_builder_how_title:
		'Cara pakainya',
	tool_midjourney_prompt_builder_load_sample:
		'Muat contoh',
	tool_midjourney_prompt_builder_platforms_lead:
		'Keluarannya bisa ditempel apa adanya ke obrolan ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_midjourney_prompt_builder_result_label:
		'Prompt yang jadi',
	tool_midjourney_prompt_builder_rules_body:
		'Cara parameter diterjemahkan: rasio menjadi --ar dan, kalau versi tidak ditulis, --v 6.1 ditambahkan. Perangkaian di peramban adalah perilaku bawaan; AI opsional dibatasi pemakaiannya dan meminta Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'Setiap kolom isian jatuh ke salah satu blok Markdown: Role, Task, Constraints, atau Output.',
	tool_midjourney_prompt_builder_rules_item_2:
		'Ekspor bawaannya Markdown; JSON adalah tombol di atas kolom keluaran yang sama.',
	tool_midjourney_prompt_builder_rules_item_3:
		'AI opsional itu langkah tambahan, bukan pengganti: mode lokal selalu tersedia, dan teks AI menimpa seluruh isi kolom keluaran, jadi periksa dulu sebelum menyalin.',
	tool_midjourney_prompt_builder_rules_item_4:
		'Halaman ini hanya merangkai teks: tidak membuat gambar dan tidak memanggil Midjourney atau API obrolan mana pun.',
	tool_midjourney_prompt_builder_rules_title:
		'Yang dilakukan dan tidak dilakukan',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'Tersalin ke papan klip.',
	tool_midjourney_prompt_builder_status_done:
		'Prompt siap.',
	tool_midjourney_prompt_builder_status_working:
		'Merangkai prompt…',
	tool_midjourney_prompt_builder_title:
		'Generator prompt Midjourney — dirangkai di peramban, AI opsional',
	tool_midjourney_prompt_builder_usecase_1:
		'Menyerahkan prompt Midjourney yang siap ditempel ke obrolan tim, tanpa mendiktekan parameter satu per satu.',
	tool_midjourney_prompt_builder_usecase_2:
		'Mengekspor JSON sebelum menggenerasi banyak gambar, lalu menyimpan subjek, gaya, dan rasio sebagai kolom di skrip atau lembar kerja sendiri.',
	tool_midjourney_prompt_builder_usecase_3:
		'Kalau yang dibutuhkan kerangka umum empat blok dan bukan gambar, pakai generator templat prompt.',
	tool_midjourney_prompt_builder_usecase_4:
		'Untuk draf proyek yang belum diumumkan, tetap di mode lokal: teks baru keluar dari peramban kalau Anda menyetujui pemberitahuan AI.',
	tool_midjourney_prompt_builder_usecases_title:
		'Kapan berguna',
};

export default id;
