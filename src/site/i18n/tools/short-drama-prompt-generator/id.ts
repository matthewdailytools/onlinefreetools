/**
 * i18n tool shard (short-drama-prompt-generator / id).
 * Ditulis ulang untuk pencarian Indonesia: «generator prompt drama pendek vertikal», «kail pembuka»,
 * «cliffhanger», «format 9:16», «ekspor JSON». Kata utama di H1; sisanya di deskripsi, FAQ, dan kasus pakai.
 * Batas faktual: rakitan di peramban secara bawaan; Perluas/Perhalus mengirim draf ke Cloudflare Workers AI
 * (butuh Turnstile, ada kuota). Halaman ini tidak menghasilkan video.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Tulis jumlah dan durasi episode, kail pembuka, cliffhanger di akhir tiap episode, format vertikal, dan genre: halaman menatanya di peramban lalu mengembalikan prompt siap pakai dalam Markdown atau JSON untuk ditempel ke ChatGPT, Gemini, Claude, atau DeepSeek dan ditulis episode demi episode. Secara bawaan tidak ada yang dikirim; draf baru ke Cloudflare Workers AI setelah Perluas atau Perhalus dan Turnstile. Yang keluar teks, bukan video.',
	tool_short_drama_prompt_generator_build:
		'Buat prompt',
	tool_short_drama_prompt_generator_clear:
		'Kosongkan',
	tool_short_drama_prompt_generator_copy:
		'Salin',
	tool_short_drama_prompt_generator_desc:
		'Generator prompt drama pendek vertikal: episode, kail, cliffhanger, dan format 9:16 ditata jadi Markdown atau JSON di peramban; AI Cloudflare opsional dengan Turnstile.',
	tool_short_drama_prompt_generator_description:
		'Generator prompt drama pendek vertikal: isi jumlah dan durasi episode, kail dua detik pertama, cliffhanger tiap penutup, format vertikal, dan genre — halaman membaginya ke blok Peran / Tugas / Batasan / Format keluaran supaya ChatGPT, Gemini, Claude, atau DeepSeek menulis dengan ritme bab. Bawaannya Markdown; JSON untuk lembar episode Anda. Kalau kail masih lemah, Perluas atau Perhalus mengirim draf ke Cloudflare Workers AI (Turnstile, kuota). Contoh: klik Muat contoh untuk preset, lalu Buat atau Perluas/Perhalus opsional.',
	tool_short_drama_prompt_generator_download:
		'Unduh',
	tool_short_drama_prompt_generator_empty:
		'Isi setidaknya satu kolom sebelum membuat prompt.',
	tool_short_drama_prompt_generator_example:
		'Masukan: episode = 12 × 75 dtk; kail = magang mengungkap kebocoran gaji dan bos mengenali suaranya di pesan suara sepuluh tahun soal hak asuh; cliffhanger = episode 6 berakhir saat bos menghapus pesan di tengah putar, episode 7 dibuka dengan tatapan diam di lift; format = 9:16, subtitle terbakar, pembuka yang menghentikan jempol dalam dua detik. Keluaran (Markdown): blok ## Tugas memuat episode, kail, cliffhanger, format vertikal, dan genre.',
	tool_short_drama_prompt_generator_example_title:
		'Contoh',
	tool_short_drama_prompt_generator_faq_a1:
		'Perakitan terjadi di tab ini, jadi secara bawaan tidak ada yang dikirim. Pengiriman hanya saat Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI; kami tidak meneruskan teks dari server kami ke OpenAI, Google, Anthropic, atau DeepSeek.',
	tool_short_drama_prompt_generator_faq_a2:
		'Mode lokal tidak memanggil model: episode, kail, cliffhanger, format, dan genre hanya dibagi ke blok. Perluas dan Perhalus memakai Cloudflare Workers AI setelah Turnstile, tanpa memanggil API ChatGPT, Gemini, Claude, atau DeepSeek dari server kami.',
	tool_short_drama_prompt_generator_faq_a3:
		'Generator templat prompt memberi empat blok umum untuk topik apa pun. Di sini kolomnya khas drama pendek vertikal — episode, kail, cliffhanger, format 9:16 — dengan contoh dan aturan ritme binge sendiri.',
	tool_short_drama_prompt_generator_faq_a4:
		'Ya. Selesaikan Turnstile di panel AI sebelum menekan Perluas atau Perhalus. Tanpa token yang sah tombol AI error, sementara mode lokal tetap jalan.',
	tool_short_drama_prompt_generator_faq_a5:
		'Bisa. Pindah ke JSON: kolom keluaran yang sama menampilkan field terstruktur plus teks prompt yang sudah dirakit — enak untuk lembar episode dan mengecek kail/cliffhanger yang berulang.',
	tool_short_drama_prompt_generator_faq_a6:
		'Bisa. Salin prompt jadi lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek. Tidak ada URL terpisah per platform: tugasnya merapikan teks, bukan memanggil API.',
	tool_short_drama_prompt_generator_faq_q1:
		'Apakah prompt saya diunggah?',
	tool_short_drama_prompt_generator_faq_q2:
		'Apakah halaman ini memanggil API ChatGPT atau model lain?',
	tool_short_drama_prompt_generator_faq_q3:
		'Apa bedanya dengan generator templat prompt?',
	tool_short_drama_prompt_generator_faq_q4:
		'Kenapa AI opsional butuh Turnstile?',
	tool_short_drama_prompt_generator_faq_q5:
		'Bisa dapat keluaran JSON?',
	tool_short_drama_prompt_generator_faq_q6:
		'Cocok untuk ChatGPT, Gemini, Claude, atau DeepSeek?',
	tool_short_drama_prompt_generator_faq_q7:
		'Apa bedanya mode lokal dan AI Cloudflare opsional?',
	tool_short_drama_prompt_generator_faq_a7:
		'Lokal: tab ini saja, tanpa unggahan. Perluas atau Perhalus mengirim draf ke Cloudflare Workers AI (Turnstile, kuota). Kalau gagal atau kuota habis, lanjutkan mode lokal.',
	tool_short_drama_prompt_generator_ai_expand:
		'Perluas dengan AI',
	tool_short_drama_prompt_generator_ai_polish:
		'Perhalus dengan AI',
	tool_short_drama_prompt_generator_ai_panel_label:
		'Opsional: Cloudflare AI (butuh Turnstile)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'Kirim draf ke Cloudflare Workers AI?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'Langkah opsional: draf saat ini dikirim ke Cloudflare Workers AI. Kami tidak meneruskannya dari server kami ke OpenAI, Google, Anthropic, atau DeepSeek. Tanpa AI, perakitan di peramban tetap jalan.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Lanjutkan',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Batal',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI sedang bekerja…',
	tool_short_drama_prompt_generator_ai_done:
		'Teks AI menggantikan hasil. Periksa sebelum menyalin.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'AI gagal; prompt lokal tidak berubah.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'Kuota AI habis. Pakai mode lokal atau coba besok (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Selesaikan Turnstile sebelum memakai AI.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'Format keluaran',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Episode dan durasi',
	tool_short_drama_prompt_generator_episodes_ph:
		'Mis.: 12 episode × 75 dtk…',
	tool_short_drama_prompt_generator_hook_label:
		'Kail pembuka',
	tool_short_drama_prompt_generator_hook_ph:
		'Mis.: magang mengungkap kebocoran gaji…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Cliffhanger akhir episode',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Mis.: episode 6 berakhir saat pesan dihapus…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Format vertikal',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Mis.: 9:16, subtitle terbakar, pembuka 2 dtk…',
	tool_short_drama_prompt_generator_genre_label:
		'Genre',
	tool_short_drama_prompt_generator_genre_ph:
		'Mis.: drama kantor dengan rahasia keluarga…',
	tool_short_drama_prompt_generator_how_body:
		'Isi episode, kail, dan cliffhanger, buat prompt, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek untuk menulis bab demi bab; kalau kail lemah, Perluas atau Perhalus dengan AI Cloudflare opsional.',
	tool_short_drama_prompt_generator_how_item_1:
		'Klik Muat contoh untuk preset bawaan.',
	tool_short_drama_prompt_generator_how_item_2:
		'Ubah episode dan durasi, kail, cliffhanger, format vertikal, dan genre lalu tekan Buat prompt; pindah ke JSON bila butuh ekspor terstruktur.',
	tool_short_drama_prompt_generator_how_item_3:
		'Opsional: selesaikan Turnstile di panel AI lalu tekan Perluas atau Perhalus — teks balasan masuk ke area hasil.',
	tool_short_drama_prompt_generator_how_item_4:
		'Salin atau unduh lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek agar model ikut pembagian episode ini.',
	tool_short_drama_prompt_generator_how_title:
		'Cara pakai',
	tool_short_drama_prompt_generator_load_sample:
		'Muat contoh',
	tool_short_drama_prompt_generator_platforms_lead:
		'Hasilnya bisa ditempel apa adanya ke chat ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_short_drama_prompt_generator_result_label:
		'Prompt hasil',
	tool_short_drama_prompt_generator_rules_body:
		'Struktur mengikuti ritme tonton vertikal: jumlah dan durasi episode menetapkan kapasitas, kail memutuskan apakah jempol berhenti di dua detik pertama, cliffhanger mendorong ke episode berikutnya, format menjelaskan bingkai dan subtitle. Rakitan di peramban adalah bawaan; AI opsional berkuota dan butuh Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'Setiap kolom formulir masuk ke salah satu blok Markdown: Peran, Tugas, Batasan, atau Format keluaran.',
	tool_short_drama_prompt_generator_rules_item_2:
		'Ekspor bawaan Markdown; JSON adalah tombol di atas area hasil yang sama.',
	tool_short_drama_prompt_generator_rules_item_3:
		'AI opsional adalah langkah tambahan, bukan pengganti: mode lokal selalu tersedia, teks AI mengganti seluruh hasil — periksa sebelum menyalin.',
	tool_short_drama_prompt_generator_rules_item_4:
		'Halaman ini hanya merakit teks: tidak membuat video dan tidak menjalankan model atau API chat di peramban Anda.',
	tool_short_drama_prompt_generator_rules_title:
		'Apa yang dilakukan dan tidak',
	tool_short_drama_prompt_generator_sec_constraints:
		'Batasan',
	tool_short_drama_prompt_generator_sec_output:
		'Format keluaran',
	tool_short_drama_prompt_generator_sec_role:
		'Peran',
	tool_short_drama_prompt_generator_sec_task:
		'Tugas',
	tool_short_drama_prompt_generator_status_copied:
		'Tersalin ke papan klip.',
	tool_short_drama_prompt_generator_status_done:
		'Prompt siap.',
	tool_short_drama_prompt_generator_status_working:
		'Merakit prompt…',
	tool_short_drama_prompt_generator_title:
		'Generator prompt drama pendek vertikal — kail dan cliffhanger di peramban',
	tool_short_drama_prompt_generator_usecase_1:
		'Sebelum rapat, kumpulkan episode, kail, dan cliffhanger dalam satu prompt yang langsung ditempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'Ekspor JSON dan simpan kail serta cliffhanger tiap episode sebagai kolom di lembar kerja untuk mengecek pola yang berulang.',
	tool_short_drama_prompt_generator_usecase_3:
		'Kalau yang dibutuhkan kerangka empat blok umum — bukan kolom serial vertikal — pakai generator templat prompt.',
	tool_short_drama_prompt_generator_usecase_4:
		'Untuk proyek yang belum tayang, tetap di mode lokal: teks baru keluar dari peramban setelah Anda setuju di dialog AI.',
	tool_short_drama_prompt_generator_usecases_title:
		'Kapan berguna',
};

export default id;
