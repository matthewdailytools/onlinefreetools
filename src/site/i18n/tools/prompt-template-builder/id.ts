/**
 * i18n tool shard (prompt-template-builder / id).
 * H1 berorientasi pencarian: pembuat templat prompt; halaman hanya merapikan teks dan tidak
 * memanggil API chat mana pun. ChatGPT / Gemini / Claude / DeepSeek muncul di description dan layar
 * pertama. Perluas/Perhalus bersifat opsional lewat Cloudflare Workers AI (butuh Turnstile + kuota).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Ubah draf prompt menjadi templat Role / Task / Constraints / Output yang bisa dipakai ulang di halaman ini. Tempel teks bebas atau isi kolom, lalu salin Markdown atau JSON ke ChatGPT, Gemini, Claude, atau DeepSeek. Secara default templat disusun di peramban Anda dan kami tidak memanggil API chat mana pun untuk Anda; hanya saat Anda menekan Perluas atau Perhalus dengan AI, draf yang sedang aktif dikirim ke Cloudflare Workers AI (perlu Turnstile, ada batas laju dan kuota).',
	tool_prompt_template_builder_build: 'Buat templat',
	tool_prompt_template_builder_clear: 'Hapus',
	tool_prompt_template_builder_constraints_label: 'Batasan',
	tool_prompt_template_builder_constraints_ph: 'Batas nada, ruang lingkup, yang dihindari…',
	tool_prompt_template_builder_copy: 'Salin',
	tool_prompt_template_builder_desc:
		'Pembuat templat prompt — disusun langsung di peramban, dengan Perluas/Perhalus opsional lewat AI Cloudflare (butuh Turnstile).',
	tool_prompt_template_builder_description:
		'Pembuat templat prompt: rapikan draf Anda lewat empat langkah — Role, Task, Constraints, Output — lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek. Saat halaman dibuka sudah ada contoh review kode yang berjalan; ekspor default Markdown, ganti ke JSON untuk pipeline. Penyusunan berjalan di peramban, dan AI Cloudflare (Perluas/Perhalus) sifatnya opsional serta berkuota.',
	tool_prompt_template_builder_download: 'Unduh',
	tool_prompt_template_builder_empty: 'Tambahkan teks bebas atau minimal satu kolom sebelum membuat.',
	tool_prompt_template_builder_example:
		'Input (Muat contoh, chip Code): Role = reviewer senior (keamanan & keterbacaan); Task = tinjau diff PR yang ditempel; Constraints = maks. 12 poin. Output (Markdown): ## Peran / ## Tugas / ## Batasan / ## Format keluaran — empat bagian siap salin ke ChatGPT atau Claude.',
	tool_prompt_template_builder_example_title: 'Contoh',
	tool_prompt_template_builder_faq_a1:
		'Secara default templat disusun di tab ini dan tidak ada yang keluar. Hanya Perluas/Perhalus yang mengirim teks pada klik tersebut ke Cloudflare Workers AI; dari server kami tidak ada yang diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek.',
	tool_prompt_template_builder_faq_a2:
		'Mode lokal hanya memformat kolom Anda di tab ini. Perluas/Perhalus memakai Cloudflare Workers AI setelah Turnstile — kami tidak membukakan ChatGPT, Gemini, Claude, atau DeepSeek untuk Anda.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown mengubah ekspor chat jadi file yang bisa dibaca. Di sini Anda menyusun system prompt yang bisa dipakai ulang — gunakan keduanya saat arsip chat lalu perhalus templat.',
	tool_prompt_template_builder_faq_a4:
		'Ya. Selesaikan widget Turnstile di panel AI sebelum Perluas atau Perhalus; tanpa token yang sah tombolnya menampilkan galat, dan penyusunan lokal tetap jalan.',
	tool_prompt_template_builder_faq_a5:
		'Baris yang diawali Role:, Task:, Constraints:, atau Output: di kotak bebas dipisah jadi bagian. Kolom eksplisit lebih diutamakan.',
	tool_prompt_template_builder_faq_a6:
		'Ya. Salin templat yang dibuat ke ChatGPT, Gemini, Claude, atau DeepSeek: struktur empat kolom yang sama berlaku di keempat chat itu. Halaman ini hanya menyiapkan teks, tidak login dan tidak memanggil API apa pun.',
	tool_prompt_template_builder_faq_q1: 'Apakah prompt diunggah?',
	tool_prompt_template_builder_faq_q2: 'Apakah memanggil LLM?',
	tool_prompt_template_builder_faq_q3: 'Bedanya dengan ekspor ChatGPT ke Markdown?',
	tool_prompt_template_builder_faq_q4:
		'Kenapa AI opsional minta Turnstile?',
	tool_prompt_template_builder_faq_q5: 'Bagaimana parsing teks bebas?',
	tool_prompt_template_builder_faq_q6: 'Bisa dipakai dengan ChatGPT, Gemini, Claude, atau DeepSeek?',
	tool_prompt_template_builder_faq_q7:
		'Apa beda mode lokal dengan AI Cloudflare opsional?',
	tool_prompt_template_builder_faq_a7:
		'Lokal: semuanya disusun di tab ini tanpa pengiriman. Perluas/Perhalus mengirim draf ke Cloudflare Workers AI (Turnstile dan kuota harian), lalu jawabannya menggantikan isi kotak hasil. Kalau gagal atau kuota habis, lanjutkan dengan mode lokal.',
	tool_prompt_template_builder_ai_expand:
		'Perluas dengan AI',
	tool_prompt_template_builder_ai_polish:
		'Perhalus dengan AI',
	tool_prompt_template_builder_ai_panel_label:
		'AI Cloudflare opsional (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'Kirim teks ke Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Langkah opsional ini mengirim draf Anda saat ini ke Cloudflare Workers AI untuk diproses. Dari server kami tidak ada yang diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek. Tanpa AI, penyusunan lokal tetap berfungsi.',
	tool_prompt_template_builder_ai_consent_ok:
		'Lanjutkan',
	tool_prompt_template_builder_ai_consent_cancel:
		'Batal',
	tool_prompt_template_builder_ai_working:
		'AI Cloudflare sedang memproses…',
	tool_prompt_template_builder_ai_done:
		'Teks AI ditulis utuh ke kotak hasil. Periksa dulu sebelum menyalin.',
	tool_prompt_template_builder_ai_err_generic:
		'AI gagal. Prompt lokal Anda tidak berubah.',
	tool_prompt_template_builder_ai_err_rate:
		'Kuota AI habis. Pakai mode lokal atau coba lagi besok (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Selesaikan Turnstile sebelum memakai AI.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Format keluaran',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt bebas (opsional)',
	tool_prompt_template_builder_free_ph: 'Tempel draf atau baris Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Pilih chip adegan atau tulis draf sendiri, isi Role / Task / Constraints / Output, buat templat, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Pilih Review kode, Film, Drama pendek, Android, atau iOS — atau tempel draf di kotak bebas.',
	tool_prompt_template_builder_how_item_2: 'Klik Buat templat (klik Muat contoh untuk preset review kode).',
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
		'Templat yang bisa dipakai ulang butuh blok yang jelas, urutan prioritas antar kolom, dan keterangan terus terang soal apa yang tidak dikerjakan halaman ini.',
	tool_prompt_template_builder_rules_item_1:
		'Empat blok: Role, Task, Constraints, Output. Yang kosong tidak muncul di Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Kolom eksplisit menang atas baris hasil parse teks bebas.',
	tool_prompt_template_builder_rules_item_3: 'Default Markdown dengan ##. JSON adalah chip di halaman yang sama.',
	tool_prompt_template_builder_rules_item_4:
		'Chip adegan mengisi lebih dulu kolom yang biasa dipakai untuk film, drama pendek, dan kode mobile; sesudah itu semuanya masih bisa Anda ubah manual.',
	tool_prompt_template_builder_rules_title: 'Aturan yang diharapkan',
	tool_prompt_template_builder_scene_android: 'Kode Android',
	tool_prompt_template_builder_scene_code: 'Review kode',
	tool_prompt_template_builder_scene_ios: 'Kode iOS',
	tool_prompt_template_builder_scene_label: 'Preset adegan',
	tool_prompt_template_builder_scene_movie: 'Film layar lebar',
	tool_prompt_template_builder_scene_short_drama: 'Drama pendek',
	tool_prompt_template_builder_sec_constraints: 'Batasan',
	tool_prompt_template_builder_sec_output: 'Format keluaran',
	tool_prompt_template_builder_sec_role: 'Peran',
	tool_prompt_template_builder_sec_task: 'Tugas',
	tool_prompt_template_builder_status_copied: 'Disalin ke papan klip.',
	tool_prompt_template_builder_status_done: 'Templat siap.',
	tool_prompt_template_builder_status_working: 'Membuat templat…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Langkah yang harus dilakukan…',
	tool_prompt_template_builder_title:
		'Pembuat templat Prompt — Lokal + AI opsional',
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
		'Muat Android atau iOS untuk templat agent coding berkonvensi Kotlin/Swift, lalu tambahkan standar tim Anda.',
	tool_prompt_template_builder_usecases_title: 'Cocok untuk',
};

export default id;
