/**
 * i18n tool shard (writing-prompt-generator / id).
 * Search H1: generator prompt menulis — dialog, karakter, skrip, acak; perakitan lokal.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Generator prompt menulis — shard teks Bahasa Indonesia */
const id: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Susun prompt menulis siap tempel untuk adegan dialog, studi karakter, kerangka skrip, atau pembuka cerita acak. Pilih mode, isi field atau acak, lalu salin Markdown atau JSON ke ChatGPT, Gemini, Claude, atau DeepSeek. Tidak ada API model yang dipanggil. Teks tetap di perangkat Anda dan tidak diunggah ke server.',
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
		'Generator prompt menulis — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_writing_prompt_generator_description:
		'Proses dan contoh: Generator prompt menulis — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
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
		'Input (Dialog, Muat contoh): Genre = drama kontemporer; Characters = Maya (barista) & Jonah (musisi); Conflict = Maya mengenali lagu tentang mantan. Output (Markdown): ## Role → pelatih menulis; ## Task → baris genre/characters/setting/conflict/tone. Mode Skrip = misteri faks cuaca mercusuar — bukan food-truck film.',
	tool_writing_prompt_generator_example_title: 'Contoh',
	tool_writing_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_writing_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_writing_prompt_generator_faq_a3:
		'Pembangun template Prompt menyusun template Role/Task/Constraints/Output generik. Halaman ini fokus mode menulis — field dialog, lembar karakter, beat skrip, dan generator prompt acak dalam satu kanvas.',
	tool_writing_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_writing_prompt_generator_faq_a5:
		'Ya. Chip JSON mengeluarkan {mode,fields,role,task,constraints,output} untuk uji atau konfigurasi. Markdown memakai heading ## Role / Task / Constraints / Output.',
	tool_writing_prompt_generator_faq_a6:
		'Ya. Salin prompt jadi ke ChatGPT, Gemini, Claude, atau DeepSeek. Kami tidak memisahkan URL per platform karena tugasnya memformat teks, bukan memanggil API.',
	tool_writing_prompt_generator_faq_q1: 'Apakah prompt menulis saya diunggah?',
	tool_writing_prompt_generator_faq_q2: 'Apakah ini memanggil LLM?',
	tool_writing_prompt_generator_faq_q3: 'Bedanya dengan Pembangun template Prompt?',
	tool_writing_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_writing_prompt_generator_faq_q5: 'Bisa dapat output JSON?',
	tool_writing_prompt_generator_faq_q6: 'Bisa dipakai dengan ChatGPT, Gemini, Claude, atau DeepSeek?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Format output',
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
		'Prompt menulis butuh field khusus mode, batas acak yang jujur, dan privasi lokal yang sama seperti builder lain.',
	tool_writing_prompt_generator_rules_item_1:
		'Empat blok output: Role, Task, Constraints, Output — selaras template prompt terstruktur.',
	tool_writing_prompt_generator_rules_item_2:
		'Mode acak menyerap generator prompt acak di URL ini — tanpa halaman terpisah.',
	tool_writing_prompt_generator_rules_item_3:
		'Ekspor default Markdown. JSON adalah chip di kanvas yang sama.',
	tool_writing_prompt_generator_rules_item_4:
		'Alat ini hanya merakit teks. Tidak menghasilkan cerita jadi atau memanggil model cloud.',
	tool_writing_prompt_generator_rules_title: 'Aturan yang perlu diharapkan',
	tool_writing_prompt_generator_scr_notes_label: 'Catatan beat',
	tool_writing_prompt_generator_scr_notes_ph: 'Jumlah adegan, tempo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Premis / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup satu paragraf…',
	tool_writing_prompt_generator_scr_structure_label: 'Struktur',
	tool_writing_prompt_generator_scr_structure_ph: 'Tiga babak, save the cat, episodik…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: 'Disalin ke clipboard.',
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
		'Expandir con IA',
	tool_writing_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_writing_prompt_generator_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_writing_prompt_generator_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_writing_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_writing_prompt_generator_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_writing_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_writing_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_writing_prompt_generator_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_writing_prompt_generator_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
};

export default id;
