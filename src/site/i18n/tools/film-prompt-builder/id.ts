/**
 * i18n tool shard (film-prompt-builder / id).
 * Ditulis ulang untuk pencarian bahasa Indonesia: «generator prompt skenario film», «struktur tiga babak»,
 * «daftar adegan», «ekspor prompt ke JSON». Kata utama ada di H1; sisanya masuk deskripsi, tanya jawab, dan contoh pemakaian.
 * Batas faktual: prompt dirangkai di peramban; hanya Perluas/Perhalus yang mengirim draf ke Cloudflare Workers AI
 * (butuh Turnstile, ada batas kuota). Halaman ini tidak menulis skenarionya untuk Anda.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_film_prompt_builder_article:
		'Tulis logline, tiga babak, daftar adegan, dan perubahan tokoh: halaman ini menatanya di peramban lalu mengembalikan prompt berstruktur jelas dalam Markdown atau JSON, siap ditempel ke ChatGPT, Gemini, Claude, atau DeepSeek untuk melanjutkan skenarionya di sana. Secara bawaan tidak ada yang dikirim; draf baru berangkat ke Cloudflare Workers AI kalau Anda menekan Perluas atau Perhalus, setelah lolos Turnstile.',
	tool_film_prompt_builder_build:
		'Buat prompt',
	tool_film_prompt_builder_clear:
		'Kosongkan',
	tool_film_prompt_builder_copy:
		'Salin',
	tool_film_prompt_builder_desc:
		'Generator prompt skenario film: logline, tiga babak, dan daftar adegan ditata jadi Markdown atau JSON di peramban; AI Cloudflare opsional dengan Turnstile.',
	tool_film_prompt_builder_description:
		'Generator prompt skenario film: Anda mengisi logline, babak satu sampai tiga, daftar adegan, dan perubahan tokoh, lalu halaman membagikannya ke blok Role, Task, Constraints, dan Output supaya ChatGPT, Gemini, Claude, atau DeepSeek tahu harus menyambung dari mana. Bawaannya Markdown, tersedia JSON untuk catatan versi Anda; contoh dua food truck yang berbagi satu dapur selama 30 hari sudah jalan begitu halaman terbuka. Kalau satu babak masih tipis, Perluas atau Perhalus mengirim draf ke Cloudflare Workers AI (butuh Turnstile, ada kuota).',
	tool_film_prompt_builder_download:
		'Unduh',
	tool_film_prompt_builder_empty:
		'Isi setidaknya satu kolom sebelum membuat prompt.',
	tool_film_prompt_builder_example:
		'Masukan: logline = salah tulis di izin memaksa dua pemilik food truck yang bersaing berbagi satu dapur selama 30 hari; babak II = sukses di festival berantakan waktu seorang blogger salah menyebut pemilik resep dan perselisihan lama keluarga soal rempah naik ke media sosial; daftar adegan = enam sekuens bernomor; perubahan tokoh = gengsi → kerja sama setengah hati → rekan yang mau berunding. Keluaran (Markdown): blok ## Task memuat Logline, Act1–3, Scene / List, dan Character / Arc — sama seperti contoh yang termuat saat halaman dibuka.',
	tool_film_prompt_builder_example_title:
		'Contoh',
	tool_film_prompt_builder_faq_a1:
		'Penataannya terjadi di tab peramban ini, jadi secara bawaan tidak ada yang dikirim. Pengiriman hanya terjadi saat Anda menekan Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI; kami tidak meneruskan teks itu dari server kami ke OpenAI, Google, Anthropic, atau DeepSeek.',
	tool_film_prompt_builder_faq_a2:
		'Dalam mode lokal tidak ada model yang dipanggil: logline, babak, daftar adegan, dan perubahan tokoh cuma dibagi ke blok Role, Task, Constraints, dan Output. Perluas dan Perhalus memakai Cloudflare Workers AI setelah lolos Turnstile, dan tidak memanggil API ChatGPT, Gemini, Claude, atau DeepSeek dari server kami.',
	tool_film_prompt_builder_faq_a3:
		'Generator templat prompt memberi kerangka umum empat blok untuk topik apa pun. Di sini kolomnya khas film panjang — logline, tiga babak, daftar adegan, perubahan tokoh — lengkap dengan contoh utuh saat dibuka dan aturan soal kesalahan yang sering muncul di dokumen semacam ini.',
	tool_film_prompt_builder_faq_a4:
		'Turnstile menahan skrip otomatis supaya kuota gratis tetap untuk orang. Selesaikan dulu di panel AI sebelum menekan Perluas atau Perhalus; tanpa token yang sah tombol itu memberi galat, sementara penataan di peramban tetap jalan.',
	tool_film_prompt_builder_faq_a5:
		'Bisa. Setelah pindah ke JSON, kolom keluaran yang sama memuat data terstruktur plus teks prompt yang sudah dirangkai — enak untuk menyimpan setiap versi babak dan daftar adegan di lembar kerja atau repositori lalu membandingkannya.',
	tool_film_prompt_builder_faq_a6:
		'Bisa. Salin hasilnya dan tempel ke obrolan yang Anda pakai. Halaman ini cuma menata struktur dan tidak memanggil API, jadi tidak ada alamat terpisah untuk tiap platform.',
	tool_film_prompt_builder_faq_q1:
		'Apakah materi skenario yang saya tulis dikirim ke server?',
	tool_film_prompt_builder_faq_q2:
		'Apakah halaman ini memanggil API ChatGPT atau model lain?',
	tool_film_prompt_builder_faq_q3:
		'Apa bedanya dengan generator templat prompt?',
	tool_film_prompt_builder_faq_q4:
		'Kenapa harus lolos Turnstile untuk memakai AI?',
	tool_film_prompt_builder_faq_q5:
		'Bisakah keluarannya berbentuk JSON?',
	tool_film_prompt_builder_faq_q6:
		'Cocok dipakai dengan ChatGPT, Gemini, Claude, atau DeepSeek?',
	tool_film_prompt_builder_faq_q7:
		'Apa bedanya mode lokal dan AI Cloudflare yang opsional?',
	tool_film_prompt_builder_faq_a7:
		'Di mode lokal semuanya ditata di tab ini dan tidak keluar dari peramban. Perluas atau Perhalus mengirim draf saat itu ke Cloudflare Workers AI (butuh Turnstile, ada batas frekuensi dan kuota harian), lalu teks yang kembali ditulis utuh ke kolom keluaran menimpa draf yang tadi tampil — baca dulu sebelum menyalin supaya versi babak Anda tidak tergeser tanpa sengaja. Kalau gagal atau kuota habis, lanjutkan saja di mode lokal.',
	tool_film_prompt_builder_ai_expand:
		'Perluas dengan AI',
	tool_film_prompt_builder_ai_polish:
		'Perhalus dengan AI',
	tool_film_prompt_builder_ai_panel_label:
		'Opsional: Cloudflare AI (butuh Turnstile)',
	tool_film_prompt_builder_ai_consent_title:
		'Kirim draf ke Cloudflare Workers AI?',
	tool_film_prompt_builder_ai_consent_body:
		'Langkah ini opsional: draf yang sekarang ada di kolom isian dikirim ke Cloudflare Workers AI untuk sekali proses. Kami tidak meneruskannya dari server kami ke OpenAI, Google, Anthropic, atau DeepSeek. Tanpa AI, prompt tetap dirangkai di peramban Anda.',
	tool_film_prompt_builder_ai_consent_ok:
		'Lanjutkan',
	tool_film_prompt_builder_ai_consent_cancel:
		'Batal',
	tool_film_prompt_builder_ai_working:
		'Cloudflare AI sedang bekerja…',
	tool_film_prompt_builder_ai_done:
		'Teks dari AI ditulis utuh ke kolom keluaran. Periksa dulu sebelum menyalin.',
	tool_film_prompt_builder_ai_err_generic:
		'Kali ini AI tidak menjawab; isi kolom keluaran tidak berubah.',
	tool_film_prompt_builder_ai_err_rate:
		'Kuota AI habis. Lanjutkan merangkai di sini atau coba besok (UTC).',
	tool_film_prompt_builder_ai_err_turnstile:
		'Selesaikan pemeriksaan Turnstile sebelum memakai AI.',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'Format keluaran',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'Logline',
	tool_film_prompt_builder_logline_ph:
		'Misalnya: dua food truck bersaing berbagi satu dapur…',
	tool_film_prompt_builder_act1_label:
		'Babak I',
	tool_film_prompt_builder_act1_ph:
		'Misalnya: dari mana konfliknya dan apa yang memaksa mereka menerima…',
	tool_film_prompt_builder_act2_label:
		'Babak II',
	tool_film_prompt_builder_act2_ph:
		'Misalnya: sukses sebentar lalu semuanya kacau…',
	tool_film_prompt_builder_act3_label:
		'Babak III',
	tool_film_prompt_builder_act3_ph:
		'Misalnya: bentrok terbuka dan kesepakatan yang ada harganya…',
	tool_film_prompt_builder_scene_list_label:
		'Daftar adegan',
	tool_film_prompt_builder_scene_list_ph:
		'Misalnya: 1. Ribut soal lahan parkir 2. Inspeksi ganda…',
	tool_film_prompt_builder_character_arc_label:
		'Perubahan tokoh',
	tool_film_prompt_builder_character_arc_ph:
		'Misalnya: gengsi → kerja sama setengah hati → rekan…',

	tool_film_prompt_builder_how_body:
		'Isi logline, babak, dan daftar adegan, buat prompt, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek untuk melanjutkan tulisan; kalau satu babak terasa kering, pakai Perluas atau Perhalus lewat AI Cloudflare yang opsional.',
	tool_film_prompt_builder_how_item_1:
		'Klik Muat contoh untuk preset bawaan.',
	tool_film_prompt_builder_how_item_2:
		'Ubah logline, babak, daftar adegan, dan perubahan tokoh lalu tekan Buat prompt; pindah ke JSON kalau butuh ekspor berkolom.',
	tool_film_prompt_builder_how_item_3:
		'Opsional: selesaikan Turnstile di panel AI lalu tekan Perluas atau Perhalus; teks yang kembali langsung masuk ke kolom keluaran.',
	tool_film_prompt_builder_how_item_4:
		'Salin atau unduh, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek supaya modelnya menyambung mengikuti struktur itu.',
	tool_film_prompt_builder_how_title:
		'Cara pakainya',
	tool_film_prompt_builder_load_sample:
		'Muat contoh',
	tool_film_prompt_builder_platforms_lead:
		'Keluarannya bisa ditempel apa adanya ke obrolan ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_film_prompt_builder_result_label:
		'Prompt yang jadi',
	tool_film_prompt_builder_rules_body:
		'Susunannya mengikuti cara orang mengerjakan film panjang: logline menentukan arah, tiga babak menandai jalannya, daftar adegan menomori sekuens, dan perubahan tokoh menjelaskan apa yang bergeser. Perangkaian di peramban adalah perilaku bawaan; AI opsional dibatasi pemakaiannya dan meminta Turnstile.',
	tool_film_prompt_builder_rules_item_1:
		'Setiap kolom isian jatuh ke salah satu blok Markdown: Role, Task, Constraints, atau Output.',
	tool_film_prompt_builder_rules_item_2:
		'Ekspor bawaannya Markdown; JSON adalah tombol di atas kolom keluaran yang sama.',
	tool_film_prompt_builder_rules_item_3:
		'AI opsional itu langkah tambahan, bukan pengganti: mode lokal selalu tersedia, dan teks AI menimpa seluruh isi kolom keluaran, jadi periksa dulu sebelum menyalin.',
	tool_film_prompt_builder_rules_item_4:
		'Halaman ini hanya merangkai teks: tidak menulis skenarionya untuk Anda dan tidak menjalankan model atau API obrolan di peramban Anda.',
	tool_film_prompt_builder_rules_title:
		'Yang dilakukan dan tidak dilakukan',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'Tersalin ke papan klip.',
	tool_film_prompt_builder_status_done:
		'Prompt siap.',
	tool_film_prompt_builder_status_working:
		'Merangkai prompt…',
	tool_film_prompt_builder_title:
		'Generator prompt skenario film — tiga babak dan daftar adegan di peramban',
	tool_film_prompt_builder_usecase_1:
		'Sebelum rapat, mengumpulkan tiga babak dan daftar adegan dalam satu prompt yang langsung bisa ditempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_film_prompt_builder_usecase_2:
		'Mengekspor JSON dan menyimpan logline, babak, serta perubahan tokoh dari tiap versi sebagai kolom di lembar kerja atau repositori untuk dibandingkan.',
	tool_film_prompt_builder_usecase_3:
		'Kalau yang dibutuhkan kerangka umum empat blok dan bukan struktur film panjang, pakai generator templat prompt.',
	tool_film_prompt_builder_usecase_4:
		'Untuk proyek yang kontraknya belum jalan, tetap di mode lokal: teks baru keluar dari peramban kalau Anda menyetujui pemberitahuan AI.',
	tool_film_prompt_builder_usecases_title:
		'Kapan berguna',
};

export default id;
