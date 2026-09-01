/**
 * i18n tool shard (prompt-template-builder / id).
 * Master H1: pembuat templat Prompt; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Ubah draf prompt menjadi templat Role / Task / Constraints / Output yang bisa dipakai ulang di halaman ini. Tempel teks bebas atau isi kolom, lalu salin Markdown atau JSON ke ChatGPT, Gemini, Claude, atau DeepSeek. Tidak ada panggilan API model. Teks tetap di perangkat dan tidak diunggah ke server.',
	tool_prompt_template_builder_build: 'Buat templat',
	tool_prompt_template_builder_clear: 'Hapus',
	tool_prompt_template_builder_constraints_label: 'Batasan',
	tool_prompt_template_builder_constraints_ph: 'Batas nada, ruang lingkup, yang dihindari…',
	tool_prompt_template_builder_copy: 'Salin',
	tool_prompt_template_builder_desc:
		'Pembuat templat Prompt untuk ChatGPT, Gemini, Claude & DeepSeek — Markdown/JSON; tetap di perangkat.',
	tool_prompt_template_builder_description:
		'Pembuat templat Prompt untuk ChatGPT, Gemini, Claude, dan DeepSeek: gabungkan Role, Task, Constraints, dan Output menjadi templat yang bisa dipakai ulang. Chip adegan mencakup review kode, film layar lebar, drama pendek, Android, dan iOS. Contoh: preset Agent review kode berjalan saat halaman dibuka. Markdown default; JSON mengeluarkan {role,task,constraints,output}. Parsing di tab ini — bukan LLM. Teks tetap di perangkat dan tidak diunggah ke server.',
	tool_prompt_template_builder_download: 'Unduh',
	tool_prompt_template_builder_empty: 'Tambahkan teks bebas atau minimal satu kolom sebelum membuat.',
	tool_prompt_template_builder_example:
		'Muat contoh mengisi preset Agent review kode, membuat Markdown dengan empat bagian ##, dan mengaktifkan Salin serta Unduh. Coba chip Film, Drama pendek, Android, atau iOS untuk default lain.',
	tool_prompt_template_builder_example_title: 'Contoh',
	tool_prompt_template_builder_faq_a1:
		'Tidak. Templat dibuat di tab browser ini. Tidak diunggah ke OpenAI, Google, Anthropic, DeepSeek, atau server kami.',
	tool_prompt_template_builder_faq_a2:
		'Tidak. Halaman ini hanya memformat teks Anda menjadi blok. Tidak memanggil ChatGPT, Gemini, Claude, DeepSeek, atau API model lain.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown mengubah ekspor chat jadi file yang bisa dibaca. Di sini Anda menyusun system prompt yang bisa dipakai ulang — gunakan keduanya saat arsip chat lalu perhalus templat.',
	tool_prompt_template_builder_faq_a4:
		'Ya. Chip JSON mengeluarkan {role,task,constraints,output} untuk config atau tes. Gabungkan dengan validator JSON Schema jika perlu.',
	tool_prompt_template_builder_faq_a5:
		'Baris yang diawali Role:, Task:, Constraints:, atau Output: di kotak bebas dipisah jadi bagian. Kolom eksplisit lebih diutamakan.',
	tool_prompt_template_builder_faq_a6:
		'Ya. Salin templat yang dibuat ke ChatGPT, Gemini, Claude, atau DeepSeek — struktur empat kolom yang sama berfungsi di setiap UI chat. Kami tidak memelihara URL terpisah per platform karena pekerjaannya memformat teks, bukan memanggil API.',
	tool_prompt_template_builder_faq_q1: 'Apakah prompt diunggah?',
	tool_prompt_template_builder_faq_q2: 'Apakah memanggil LLM?',
	tool_prompt_template_builder_faq_q3: 'Bedanya dengan ekspor ChatGPT ke Markdown?',
	tool_prompt_template_builder_faq_q4: 'Bisa dapat JSON?',
	tool_prompt_template_builder_faq_q5: 'Bagaimana parsing teks bebas?',
	tool_prompt_template_builder_faq_q6: 'Bisa dipakai dengan ChatGPT, Gemini, Claude, atau DeepSeek?',
	tool_prompt_template_builder_faq_q7: 'Bedanya mode lokal vs Cloudflare AI opsional?',
	tool_prompt_template_builder_faq_a7:
		'Mode lokal hanya memformat di tab ini—tidak diunggah. Expand/Polish opsional mengirim teks klik itu ke Cloudflare Workers AI (terbatas, Turnstile). Jika gagal atau kuota habis, tetap pakai mode lokal. Kami tidak menjanjikan AI tanpa batas.',
	tool_prompt_template_builder_ai_expand: 'Perluas dengan AI',
	tool_prompt_template_builder_ai_polish: 'Poles dengan AI',
	tool_prompt_template_builder_ai_panel_label: 'Cloudflare AI opsional',
	tool_prompt_template_builder_ai_consent_title: 'Kirim teks ke Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Langkah opsional ini mengirim draf Anda ke Cloudflare Workers AI. Bukan ke OpenAI, Google, Anthropic, atau DeepSeek dari server kami. Perakitan lokal tetap jalan tanpa AI.',
	tool_prompt_template_builder_ai_consent_ok: 'Lanjut',
	tool_prompt_template_builder_ai_consent_cancel: 'Batal',
	tool_prompt_template_builder_ai_working: 'Cloudflare AI bekerja…',
	tool_prompt_template_builder_ai_done: 'Saran AI diterapkan. Tinjau sebelum menyalin.',
	tool_prompt_template_builder_ai_err_generic: 'AI gagal. Template lokal tidak berubah.',
	tool_prompt_template_builder_ai_err_rate: 'Kuota AI habis. Pakai mode lokal atau coba besok (UTC).',
	tool_prompt_template_builder_ai_err_turnstile: 'Selesaikan Turnstile sebelum memakai AI.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Format keluaran',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt bebas (opsional)',
	tool_prompt_template_builder_free_ph: 'Tempel draf atau baris Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Pilih chip adegan atau tulis draf sendiri, isi Role / Task / Constraints / Output, buat templat, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Pilih Review kode, Film, Drama pendek, Android, atau iOS — atau tempel draf di kotak bebas.',
	tool_prompt_template_builder_how_item_2: 'Klik Buat templat (Muat contoh sudah menjalankan preset review kode saat halaman dibuka).',
	tool_prompt_template_builder_how_item_3: 'Ganti ke JSON jika butuh {role,task,constraints,output} untuk kode atau config.',
	tool_prompt_template_builder_how_item_4: 'Salin atau unduh, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_prompt_template_builder_how_title: 'Cara kerja',
	tool_prompt_template_builder_load_sample: 'Muat contoh',
	tool_prompt_template_builder_output_fmt_label: 'Format keluaran',
	tool_prompt_template_builder_output_fmt_ph: 'Bagian Markdown, bentuk JSON, daftar…',
	tool_prompt_template_builder_platforms_lead:
		'Dibuat untuk ChatGPT, Gemini, Claude, dan DeepSeek — salin templat jadi ke salah satu UI chat tersebut.',
	tool_prompt_template_builder_result_label: 'Templat',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Peran yang harus dijalankan model…',
	tool_prompt_template_builder_rules_body:
		'Templat yang bisa dipakai ulang butuh blok jelas, prioritas kolom, dan batas jujur — bukan produk generator kedua.',
	tool_prompt_template_builder_rules_item_1:
		'Empat blok: Role, Task, Constraints, Output. Yang kosong tidak muncul di Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Kolom eksplisit menang atas baris hasil parse teks bebas.',
	tool_prompt_template_builder_rules_item_3: 'Default Markdown dengan ##. JSON adalah chip di halaman yang sama.',
	tool_prompt_template_builder_rules_item_4:
		'Chip adegan preset kolom untuk film, drama pendek, dan kode mobile — builder yang sama, tanpa URL terpisah per platform.',
	tool_prompt_template_builder_rules_title: 'Aturan yang diharapkan',
	tool_prompt_template_builder_scene_android: 'Kode Android',
	tool_prompt_template_builder_scene_code: 'Review kode',
	tool_prompt_template_builder_scene_ios: 'Kode iOS',
	tool_prompt_template_builder_scene_label: 'Preset adegan',
	tool_prompt_template_builder_scene_movie: 'Film layar lebar',
	tool_prompt_template_builder_scene_short_drama: 'Drama pendek',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'Disalin ke clipboard.',
	tool_prompt_template_builder_status_done: 'Templat siap.',
	tool_prompt_template_builder_status_working: 'Membuat templat…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Langkah yang harus dilakukan…',
	tool_prompt_template_builder_title: 'pembuat templat Prompt',
	tool_prompt_template_builder_usecase_1:
		'Bagikan system prompt Agent review kode yang tim bisa tempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_prompt_template_builder_usecase_2:
		'Ubah catatan rapat jadi blok Role/Task/Constraints sebelum sambungkan API ke penyedia chat mana pun.',
	tool_prompt_template_builder_usecase_3:
		'Ekspor JSON lalu buka validator JSON Schema untuk cek file konfigurasi downstream.',
	tool_prompt_template_builder_usecase_4:
		'Muat chip Film untuk lembar beat tiga babak yang ditempel ke UI chat favorit Anda.',
	tool_prompt_template_builder_usecase_5:
		'Muat Drama pendek untuk hook dan cliffhanger serial vertikal — episode mobile gaya binge.',
	tool_prompt_template_builder_usecase_6:
		'Muat Android atau iOS untuk templat agent coding Kotlin/Swift tanpa membuka empat halaman khusus platform.',
	tool_prompt_template_builder_usecases_title: 'Cocok untuk',
};

export default id;
