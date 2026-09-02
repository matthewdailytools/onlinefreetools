/**
 * i18n tool shard (sketch-prompt-generator / id).
 * H1: Generator prompt Sketch.app (app desain Mac, bukan sketsa pensil).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'Susun prompt siap tempel agar ChatGPT, Gemini, Claude, atau DeepSeek memandu pengoperasian Sketch.app — Artboard, Symbol, Shared Style, dan ekspor. Isi bidang, salin Markdown atau JSON. Perakitan lokal tetap di browser; Expand/Polish opsional memakai Cloudflare Workers AI dengan Turnstile. Teks tetap di perangkat kecuali Anda memakai AI.',
	tool_sketch_prompt_generator_build: 'Buat prompt',
	tool_sketch_prompt_generator_clear: 'Hapus',
	tool_sketch_prompt_generator_copy: 'Salin',
	tool_sketch_prompt_generator_desc:
		'Generator prompt Sketch.app — lokal secara default + Expand/Polish opsional Cloudflare AI (Turnstile); Markdown/JSON di perangkat.',
	tool_sketch_prompt_generator_description:
		'Generator prompt Sketch.app — Lokal + AI opsional untuk ChatGPT, Gemini, Claude, dan DeepSeek: rakit prompt terstruktur untuk langkah desain Sketch.app (Artboard, Symbol, ekspor) di browser; Expand/Polish opsional lewat Cloudflare Workers AI (Turnstile, kuota). Contoh saat buka. Markdown default; JSON untuk pipeline. Teks lokal kecuali AI.',
	tool_sketch_prompt_generator_download: 'Unduh',
	tool_sketch_prompt_generator_empty: 'Isi setidaknya satu bidang sebelum membuat.',
	tool_sketch_prompt_generator_example:
		'Input: Tujuan = layar login di Sketch.app; Artboard = iPhone 14 390×844; Symbol = Button/Primary + Input; Ekspor = PNG 1x/2x/3x + PDF. Output (Markdown): ## Role → asisten Sketch.app; ## Task → daftar bernomor.',
	tool_sketch_prompt_generator_example_title: 'Contoh',
	tool_sketch_prompt_generator_faq_a1:
		'Perakitan lokal berjalan di tab ini — tidak diunggah secara default. Expand/Polish opsional hanya mengirim teks klik itu ke Cloudflare Workers AI, bukan ke OpenAI, Google, Anthropic, atau DeepSeek dari server kami.',
	tool_sketch_prompt_generator_faq_a2:
		'Mode lokal hanya memformat bidang. Expand/Polish memakai Cloudflare Workers AI setelah Turnstile — tanpa API chat dan tanpa kendali jarak jauh Sketch.app.',
	tool_sketch_prompt_generator_faq_a3:
		'Pembuat templat Prompt mencakup templat generik. Halaman ini fokus Sketch.app: tujuan, Artboard, Symbol/gaya, ekspor.',
	tool_sketch_prompt_generator_faq_a4:
		'Tidak. Midjourney untuk gaya gambar raster. Di sini prompt memandu Sketch.app (perangkat lunak desain Mac). Untuk sketsa pensil / line-art, pakai halaman Midjourney.',
	tool_sketch_prompt_generator_faq_a5:
		'Ya. Selesaikan Turnstile di panel AI sebelum Expand atau Polish. Tanpa token, tombol AI error; mode lokal tetap jalan.',
	tool_sketch_prompt_generator_faq_a6: 'Ya. Chip JSON mengeluarkan bidang terstruktur plus prompt rakitan.',
	tool_sketch_prompt_generator_faq_a7:
		'Ya. Tempel prompt ke ChatGPT, Gemini, Claude, atau DeepSeek agar chat memandu menu Sketch.app. Kami hanya memformat teks; Sketch tidak dijalankan di sini.',
	tool_sketch_prompt_generator_faq_a8:
		'Lokal memformat di tab tanpa unggah. Expand/Polish ke Cloudflare Workers AI (kuota + Turnstile). Jika gagal, lanjut lokal.',
	tool_sketch_prompt_generator_faq_q1: 'Apakah prompt saya diunggah?',
	tool_sketch_prompt_generator_faq_q2: 'Apakah ini memanggil ChatGPT atau mengendalikan Sketch.app jarak jauh?',
	tool_sketch_prompt_generator_faq_q3: 'Apa bedanya dengan pembuat templat Prompt?',
	tool_sketch_prompt_generator_faq_q4: 'Apakah ini untuk sketsa pensil atau prompt Midjourney?',
	tool_sketch_prompt_generator_faq_q5: 'Mengapa Turnstile untuk AI opsional?',
	tool_sketch_prompt_generator_faq_q6: 'Bisakah saya mendapat JSON?',
	tool_sketch_prompt_generator_faq_q7: 'Bisa dipakai dengan ChatGPT, Gemini, Claude, atau DeepSeek?',
	tool_sketch_prompt_generator_faq_q8: 'Apa bedanya lokal dan AI Cloudflare opsional?',
	tool_sketch_prompt_generator_ai_expand: 'Perluas dengan AI',
	tool_sketch_prompt_generator_ai_polish: 'Rapikan dengan AI',
	tool_sketch_prompt_generator_ai_panel_label: 'AI Cloudflare opsional (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title: 'Kirim teks ke Cloudflare Workers AI?',
	tool_sketch_prompt_generator_ai_consent_body:
		'Langkah opsional ini mengirim draf ke Cloudflare Workers AI. Tidak dikirim ke OpenAI, Google, Anthropic, atau DeepSeek dari server kami. Perakitan lokal tetap jalan tanpa AI.',
	tool_sketch_prompt_generator_ai_consent_ok: 'Lanjut',
	tool_sketch_prompt_generator_ai_consent_cancel: 'Batal',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI sedang bekerja…',
	tool_sketch_prompt_generator_ai_done: 'Saran AI diterapkan. Tinjau sebelum menyalin.',
	tool_sketch_prompt_generator_ai_err_generic: 'AI gagal. Prompt lokal tidak berubah.',
	tool_sketch_prompt_generator_ai_err_rate: 'Kuota AI habis. Pakai lokal atau coba besok (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile: 'Selesaikan Turnstile sebelum memakai AI.',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: 'Format keluaran',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: 'Tujuan / hasil',
	tool_sketch_prompt_generator_goal_ph: 'mis. layar login di Sketch.app…',
	tool_sketch_prompt_generator_artboard_label: 'Artboard / halaman',
	tool_sketch_prompt_generator_artboard_ph: 'mis. iPhone 14 390×844, Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'Symbol / gaya / library',
	tool_sketch_prompt_generator_symbols_ph: 'mis. Button/Primary, Shared Styles…',
	tool_sketch_prompt_generator_export_label: 'Ekspor / serah terima',
	tool_sketch_prompt_generator_export_ph: 'mis. PNG 1x/2x/3x, tinjauan PDF…',
	tool_sketch_prompt_generator_how_body:
		'Isi bidang Sketch.app, buat prompt secara lokal, opsional Perluas/Rapikan dengan Turnstile, lalu tempel ke chat agar AI memandu langkah Sketch.app.',
	tool_sketch_prompt_generator_how_item_1: 'Saat dibuka, contoh layar login Sketch.app sudah dimuat.',
	tool_sketch_prompt_generator_how_item_2: 'Edit Tujuan, Artboard, Symbol, dan Ekspor; klik Buat prompt atau pilih JSON.',
	tool_sketch_prompt_generator_how_item_3: 'Opsional: selesaikan Turnstile, lalu Perluas atau Rapikan lewat Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4: 'Salin atau unduh, tempel ke chat, ikuti checklist Sketch.app.',
	tool_sketch_prompt_generator_how_title: 'Cara kerja',
	tool_sketch_prompt_generator_load_sample: 'Muat contoh',
	tool_sketch_prompt_generator_platforms_lead:
		'Dibuat untuk ChatGPT, Gemini, Claude, dan DeepSeek — salin prompt agar chat melatih operasi Sketch.app.',
	tool_sketch_prompt_generator_result_label: 'Keluaran prompt',
	tool_sketch_prompt_generator_rules_body:
		'Bidang mencerminkan kerja Sketch.app. Lokal adalah default; AI opsional butuh Turnstile dan punya kuota. Halaman ini tidak membuka Sketch.app.',
	tool_sketch_prompt_generator_rules_item_1: 'Bidang terstruktur dipetakan ke Role/Task/Constraints/Output di Markdown.',
	tool_sketch_prompt_generator_rules_item_2: 'Default Markdown; JSON di kanvas yang sama.',
	tool_sketch_prompt_generator_rules_item_3: 'AI Cloudflare opsional tidak menggantikan lokal — tinjau sebelum menyalin.',
	tool_sketch_prompt_generator_rules_item_4:
		'Hanya merakit teks; tidak menjalankan Sketch.app, plugin, Midjourney, atau API chat secara lokal.',
	tool_sketch_prompt_generator_rules_title: 'Aturan yang diharapkan',
	tool_sketch_prompt_generator_sec_constraints: 'Batasan',
	tool_sketch_prompt_generator_sec_output: 'Format keluaran',
	tool_sketch_prompt_generator_sec_role: 'Peran',
	tool_sketch_prompt_generator_sec_task: 'Tugas',
	tool_sketch_prompt_generator_status_copied: 'Disalin ke papan klip.',
	tool_sketch_prompt_generator_status_done: 'Prompt siap.',
	tool_sketch_prompt_generator_status_working: 'Membuat prompt…',
	tool_sketch_prompt_generator_title: 'Generator prompt Sketch.app — Lokal + AI opsional',
	tool_sketch_prompt_generator_usecase_1:
		'Berikan ukuran Artboard dan nama Symbol ke chat tim agar mereka membangun ulang layar di Sketch.app.',
	tool_sketch_prompt_generator_usecase_2: 'Susun checklist ekspor (PNG, PDF) sebelum QA desain.',
	tool_sketch_prompt_generator_usecase_3:
		'Bandingkan dengan Product design prompt builder jika Anda butuh persona/wireframe, bukan menu Sketch.app.',
	tool_sketch_prompt_generator_usecase_4: 'Simpan draf sensitif di lokal — aktifkan AI hanya setelah persetujuan.',
	tool_sketch_prompt_generator_usecases_title: 'Cocok untuk',
};

export default id;
