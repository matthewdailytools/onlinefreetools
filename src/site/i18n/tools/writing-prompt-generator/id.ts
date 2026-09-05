/**
 * i18n tool shard (writing-prompt-generator / id).
 * H1 berorientasi pencarian: generator prompt menulis — dialog, karakter, skrip, acak.
 * Penyusunan berjalan di peramban; Perluas/Perhalus opsional lewat Cloudflare Workers AI
 * (butuh Turnstile + kuota) dan jawabannya menggantikan isi kotak hasil.
 * ChatGPT / Gemini / Claude / DeepSeek muncul di description dan layar pertama.
 */
import type { SiteLangDict } from '../../../types';

/** Generator prompt menulis — shard teks Bahasa Indonesia */
const id: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Susun prompt menulis siap tempel untuk adegan dialog, studi karakter, kerangka skrip, atau pembuka cerita acak. Pilih mode, isi field atau acak, lalu salin Markdown atau JSON ke ChatGPT, Gemini, Claude, atau DeepSeek. Secara default prompt disusun di peramban Anda dan kami tidak memanggil API chat mana pun untuk Anda; hanya saat Anda menekan Perluas atau Perhalus dengan AI, draf yang sedang aktif dikirim ke Cloudflare Workers AI (perlu Turnstile, ada batas laju dan kuota).',
	tool_writing_prompt_generator_build: 'Buat prompt',
	tool_writing_prompt_generator_char_flaw_label: 'Kelemahan / cacat',
	tool_writing_prompt_generator_char_flaw_ph: 'Apa yang menghambatnya…',
	tool_writing_prompt_generator_char_goal_label: 'Tujuan',
	tool_writing_prompt_generator_char_goal_ph: 'Apa yang diinginkannya dalam cerita ini…',
	tool_writing_prompt_generator_char_name_label: 'Nama karakter',
	tool_writing_prompt_generator_char_name_ph: 'Nama atau label peran…',
	tool_writing_prompt_generator_char_traits_label: 'Sifat',
	tool_writing_prompt_generator_char_traits_ph: 'Kepribadian, kebiasaan, kontradiksi…',
	tool_writing_prompt_generator_char_voice_label: 'Suara / diksi',
	tool_writing_prompt_generator_char_voice_ph: 'Irama kalimat, kosakata…',
	tool_writing_prompt_generator_clear: 'Hapus',
	tool_writing_prompt_generator_copy: 'Salin',
	tool_writing_prompt_generator_desc:
		'Generator prompt menulis — mode dialog, karakter, skrip, dan acak; disusun langsung di peramban dengan AI Cloudflare opsional.',
	tool_writing_prompt_generator_description:
		'Generator prompt menulis: pilih mode — dialog, karakter, skrip, atau acak —, isi kolomnya lewat beberapa langkah, dan dapatkan prompt siap tempel ke ChatGPT, Gemini, Claude, atau DeepSeek. Saat dibuka sudah ada contoh dialog yang berjalan; di mode acak Anda mengacak pembuka cerita dan seed mengulang hasil yang sama. Ekspor Markdown atau JSON; penyusunan di peramban dan AI Cloudflare opsional.',
	tool_writing_prompt_generator_dlg_characters_label: 'Karakter',
	tool_writing_prompt_generator_dlg_characters_ph: 'Nama + peran satu baris…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Konflik',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Ketegangan apa yang menggerakkan adegan…',
	tool_writing_prompt_generator_dlg_genre_label: 'Genre / nada',
	tool_writing_prompt_generator_dlg_genre_ph: 'Drama kontemporer, rom-com…',
	tool_writing_prompt_generator_dlg_setting_label: 'Setting',
	tool_writing_prompt_generator_dlg_setting_ph: 'Tempat, waktu, suasana…',
	tool_writing_prompt_generator_dlg_tone_label: 'Gaya dialog',
	tool_writing_prompt_generator_dlg_tone_ph: 'Subteks, canda, ringkas…',
	tool_writing_prompt_generator_download: 'Unduh',
	tool_writing_prompt_generator_empty: 'Isi minimal satu field di mode ini sebelum membuat.',
	tool_writing_prompt_generator_example:
		'Input (Dialog, Muat contoh): Genre = drama kontemporer; Characters = Maya (barista) & Jonah (musisi); Conflict = Maya mengenali lagu tentang mantan. Output (Markdown): ## Peran → pelatih menulis; ## Tugas → baris genre/characters/setting/conflict/tone. Mode Skrip = misteri faks cuaca mercusuar — bukan food-truck film.',
	tool_writing_prompt_generator_example_title: 'Contoh',
	tool_writing_prompt_generator_faq_a1:
		'Secara default prompt disusun di tab ini dan tidak ada yang keluar. Hanya Perluas/Perhalus yang mengirim teks pada klik tersebut ke Cloudflare Workers AI; dari server kami tidak ada yang diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek.',
	tool_writing_prompt_generator_faq_a2:
		'Mode lokal hanya memformat kolom menulis Anda di tab ini. Perluas/Perhalus memakai Cloudflare Workers AI setelah Turnstile — kami tidak membukakan ChatGPT, Gemini, Claude, atau DeepSeek untuk Anda.',
	tool_writing_prompt_generator_faq_a3:
		'Pembangun template Prompt menyusun template Role/Task/Constraints/Output generik. Halaman ini fokus mode menulis — field dialog, lembar karakter, beat skrip, dan generator prompt acak dalam satu kanvas.',
	tool_writing_prompt_generator_faq_a4:
		'Bisa. Mode acak mengacak genre, setting, objek, emosi, dan konflik. Seed angka opsional mengulang persis hasil yang sama. Keluarannya bahan inspirasi, bukan jaminan mutu.',
	tool_writing_prompt_generator_faq_a5:
		'Ya. Selesaikan widget Turnstile di panel AI sebelum Perluas atau Perhalus; tanpa token yang sah tombolnya menampilkan galat, dan penyusunan lokal tetap jalan.',
	tool_writing_prompt_generator_faq_a6:
		'Ya. Chip JSON mengeluarkan {mode,fields,role,task,constraints,output} untuk uji atau konfigurasi. Markdown memakai heading ## Peran / Tugas / Batasan / Format keluaran.',
	tool_writing_prompt_generator_faq_q1: 'Apakah prompt menulis saya diunggah?',
	tool_writing_prompt_generator_faq_q2: 'Apakah ini memanggil LLM?',
	tool_writing_prompt_generator_faq_q3: 'Bedanya dengan Pembangun template Prompt?',
	tool_writing_prompt_generator_faq_q4:
		'Apakah generator prompt acak jalan di sini?',
	tool_writing_prompt_generator_faq_q5: 'Kenapa AI opsional minta Turnstile?',
	tool_writing_prompt_generator_faq_q6: 'Bisa dapat output JSON?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Format keluaran',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Pilih mode menulis, isi field atau acak, buat blok prompt, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'Pilih Dialog, Karakter, Skrip, atau Acak — Muat contoh sudah menjalankan preset dialog saat halaman dibuka.',
	tool_writing_prompt_generator_how_item_2: 'Isi field sesuai mode (atau masukkan seed lalu klik Acak).',
	tool_writing_prompt_generator_how_item_3: 'Klik Buat prompt (tersembunyi di Acak — pakai Acak).',
	tool_writing_prompt_generator_how_item_4: 'Salin atau unduh Markdown/JSON dan tempel ke UI chat Anda.',
	tool_writing_prompt_generator_how_title: 'Cara kerja',
	tool_writing_prompt_generator_load_sample: 'Muat contoh',
	tool_writing_prompt_generator_mode_character: 'Karakter',
	tool_writing_prompt_generator_mode_dialogue: 'Dialog',
	tool_writing_prompt_generator_mode_label: 'Mode menulis',
	tool_writing_prompt_generator_mode_random: 'Acak',
	tool_writing_prompt_generator_mode_script: 'Skrip / kerangka',
	tool_writing_prompt_generator_platforms_lead:
		'Dibuat untuk ChatGPT, Gemini, Claude, dan DeepSeek — salin prompt menulis jadi ke UI chat mana pun.',
	tool_writing_prompt_generator_random_lead:
		'Acak pembuka cerita dari genre, setting, objek, emosi, dan konflik. Seed opsional mengulang hasil yang sama.',
	tool_writing_prompt_generator_random_roll: 'Acak',
	tool_writing_prompt_generator_random_seed_label: 'Seed (opsional)',
	tool_writing_prompt_generator_random_seed_ph: 'mis. 42',
	tool_writing_prompt_generator_result_label: 'Prompt menulis',
	tool_writing_prompt_generator_rules_body:
		'Prompt menulis butuh kolom yang berbeda tiap mode, keterangan jujur soal batas hasil acak, dan pola penyusunan di peramban yang sama seperti builder lain.',
	tool_writing_prompt_generator_rules_item_1:
		'Empat blok output: Role, Task, Constraints, Output — selaras template prompt terstruktur.',
	tool_writing_prompt_generator_rules_item_2:
		'Mode acak ada di kanvas yang sama: mengacak genre, setting, objek, emosi, dan konflik, dan dengan seed Anda mengulang hasilnya.',
	tool_writing_prompt_generator_rules_item_3:
		'Ekspor default Markdown. JSON adalah chip di kanvas yang sama.',
	tool_writing_prompt_generator_rules_item_4:
		'AI Cloudflare opsional tidak pernah menggantikan mode lokal — periksa teksnya sebelum menyalin. Alat ini merakit prompt, bukan menuliskan ceritanya sampai jadi.',
	tool_writing_prompt_generator_rules_title: 'Aturan yang perlu diharapkan',
	tool_writing_prompt_generator_scr_notes_label: 'Catatan beat',
	tool_writing_prompt_generator_scr_notes_ph: 'Jumlah adegan, tempo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Premis / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup satu paragraf…',
	tool_writing_prompt_generator_scr_structure_label: 'Struktur',
	tool_writing_prompt_generator_scr_structure_ph: 'Tiga babak, save the cat, episodik…',
	tool_writing_prompt_generator_sec_constraints: 'Batasan',
	tool_writing_prompt_generator_sec_output: 'Format keluaran',
	tool_writing_prompt_generator_sec_role: 'Peran',
	tool_writing_prompt_generator_sec_task: 'Tugas',
	tool_writing_prompt_generator_status_copied: 'Disalin ke papan klip.',
	tool_writing_prompt_generator_status_done: 'Prompt siap.',
	tool_writing_prompt_generator_status_working: 'Membuat prompt…',
	tool_writing_prompt_generator_title:
		'Generator prompt menulis — Lokal + AI opsional',
	tool_writing_prompt_generator_usecase_1:
		'Buat draf prompt adegan dialog untuk kelompok penulis — tempel ke ChatGPT atau Claude untuk saran beat, bukan prosa utuh.',
	tool_writing_prompt_generator_usecase_2:
		'Acak saat butuh pembuka cerita segar tanpa membuka situs generator acak terpisah.',
	tool_writing_prompt_generator_usecase_3:
		'Ekspor JSON prompt lembar karakter untuk uji pipeline, lalu buka Pembangun template Prompt untuk template API empat field.',
	tool_writing_prompt_generator_usecase_4:
		'Gariskan beat skrip pendek secara lokal sebelum membawa prompt ke Gemini untuk table read.',
	tool_writing_prompt_generator_usecases_title: 'Cocok untuk',
	tool_writing_prompt_generator_ai_expand:
		'Perluas dengan AI',
	tool_writing_prompt_generator_ai_polish:
		'Perhalus dengan AI',
	tool_writing_prompt_generator_ai_panel_label:
		'AI Cloudflare opsional (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'Kirim teks ke Cloudflare Workers AI?',
	tool_writing_prompt_generator_ai_consent_body:
		'Langkah opsional ini mengirim draf Anda saat ini ke Cloudflare Workers AI untuk diproses. Dari server kami tidak ada yang diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek. Tanpa AI, penyusunan lokal tetap berfungsi.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Lanjutkan',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Batal',
	tool_writing_prompt_generator_ai_working:
		'AI Cloudflare sedang memproses…',
	tool_writing_prompt_generator_ai_done:
		'Teks AI ditulis utuh ke kotak hasil. Periksa dulu sebelum menyalin.',
	tool_writing_prompt_generator_ai_err_generic:
		'AI gagal. Prompt lokal Anda tidak berubah.',
	tool_writing_prompt_generator_ai_err_rate:
		'Kuota AI habis. Pakai mode lokal atau coba lagi besok (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Selesaikan Turnstile sebelum memakai AI.',
	tool_writing_prompt_generator_faq_q7:
		'Bisa dipakai dengan ChatGPT, Gemini, Claude, atau DeepSeek?',
	tool_writing_prompt_generator_faq_a7:
		'Bisa. Salin prompt jadi ke ChatGPT, Gemini, Claude, atau DeepSeek. Halaman ini hanya menyiapkan teks, tidak login dan tidak memanggil API apa pun.',
	tool_writing_prompt_generator_faq_q8:
		'Apa beda mode lokal dengan AI Cloudflare opsional?',
	tool_writing_prompt_generator_faq_a8:
		'Lokal: semuanya disusun di tab ini tanpa pengiriman. Perluas/Perhalus mengirim draf ke Cloudflare Workers AI (Turnstile dan kuota harian), lalu jawabannya menggantikan isi kotak hasil. Kalau gagal atau kuota habis, lanjutkan dengan mode lokal.',
};

export default id;
