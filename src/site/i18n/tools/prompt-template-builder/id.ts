/**
 * i18n tool shard (prompt-template-builder / id).
 * H1 local: pembuat templat Prompt.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Ubah draf prompt menjadi templat Role / Task / Constraints / Output yang bisa dipakai ulang di halaman ini. Tempel teks bebas atau isi kolom, lalu salin Markdown atau JSON. Tidak ada panggilan API model. Teks tetap di perangkat dan tidak diunggah ke server.',
	tool_prompt_template_builder_build: 'Buat templat',
	tool_prompt_template_builder_clear: 'Hapus',
	tool_prompt_template_builder_constraints_label: 'Batasan',
	tool_prompt_template_builder_constraints_ph: 'Batas nada, ruang lingkup, yang dihindari…',
	tool_prompt_template_builder_copy: 'Salin',
	tool_prompt_template_builder_desc:
		'Templat Prompt terstruktur (Markdown/JSON) — tetap di perangkat, tanpa unggah ke server.',
	tool_prompt_template_builder_description:
		'Pembuat templat Prompt: gabungkan teks bebas dengan Role, Task, Constraints, dan Output menjadi templat yang bisa dipakai ulang. Contoh: templat agent review kode muncul saat halaman dibuka. Markdown default; JSON mengeluarkan {role,task,constraints,output}. Semua di tab ini — bukan LLM dan bukan perpustakaan cloud. Teks tetap di perangkat dan tidak diunggah ke server.',
	tool_prompt_template_builder_download: 'Unduh',
	tool_prompt_template_builder_empty: 'Tambahkan teks bebas atau minimal satu kolom sebelum membuat.',
	tool_prompt_template_builder_example:
		'Muat contoh mengisi Role, Task, Constraints, dan Output untuk agent review kode, membuat Markdown dengan empat bagian ##, dan mengaktifkan Salin serta Unduh.',
	tool_prompt_template_builder_example_title: 'Contoh',
	tool_prompt_template_builder_faq_a1:
		'Tidak. Templat dibuat di tab browser ini. Tidak diunggah ke OpenAI, Anthropic, atau server kami.',
	tool_prompt_template_builder_faq_a2:
		'Tidak. Halaman ini hanya memformat teks Anda menjadi blok. Tidak memanggil model atau menulis teks baru.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown mengubah ekspor chat jadi file yang bisa dibaca. Di sini Anda menyusun system prompt yang bisa dipakai ulang — gunakan keduanya saat arsip chat lalu perhalus templat.',
	tool_prompt_template_builder_faq_a4:
		'Ya. Chip JSON mengeluarkan {role,task,constraints,output}. Gabungkan dengan validator JSON Schema jika perlu.',
	tool_prompt_template_builder_faq_a5:
		'Baris yang diawali Role:, Task:, Constraints:, atau Output: di kotak bebas dipisah jadi bagian. Kolom eksplisit lebih diutamakan.',
	tool_prompt_template_builder_faq_q1: 'Apakah prompt diunggah?',
	tool_prompt_template_builder_faq_q2: 'Apakah memanggil LLM?',
	tool_prompt_template_builder_faq_q3: 'Bedanya dengan ekspor ChatGPT ke Markdown?',
	tool_prompt_template_builder_faq_q4: 'Bisa dapat JSON?',
	tool_prompt_template_builder_faq_q5: 'Bagaimana parsing teks bebas?',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Format keluaran',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt bebas (opsional)',
	tool_prompt_template_builder_free_ph: 'Tempel draf atau baris Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Tulis draf, opsional pisahkan Role / Task / Constraints / Output, buat templat, lalu salin atau unduh. Markdown dan JSON adalah chip tugas yang sama.',
	tool_prompt_template_builder_how_item_1:
		'Tempel draf atau isi Role, Task, Constraints, dan Output — tujuannya templat prompt terstruktur.',
	tool_prompt_template_builder_how_item_2: 'Klik Buat templat (contoh sudah jalan saat halaman dibuka).',
	tool_prompt_template_builder_how_item_3: 'Ganti ke JSON jika butuh {role,task,constraints,output} untuk kode atau config.',
	tool_prompt_template_builder_how_item_4: 'Salin atau unduh. Edit kolom dan buat ulang kapan saja.',
	tool_prompt_template_builder_how_title: 'Cara kerja',
	tool_prompt_template_builder_load_sample: 'Muat contoh',
	tool_prompt_template_builder_output_fmt_label: 'Format keluaran',
	tool_prompt_template_builder_output_fmt_ph: 'Bagian Markdown, bentuk JSON, daftar…',
	tool_prompt_template_builder_result_label: 'Templat',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Peran yang harus dijalankan model…',
	tool_prompt_template_builder_rules_body:
		'Templat yang bisa dipakai ulang butuh blok jelas dan batas jujur — bukan generator kedua.',
	tool_prompt_template_builder_rules_item_1:
		'Empat blok: Role, Task, Constraints, Output. Yang kosong tidak muncul di Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Kolom eksplisit menang atas baris hasil parse teks bebas.',
	tool_prompt_template_builder_rules_item_3: 'Default Markdown dengan ##. JSON adalah chip di halaman yang sama.',
	tool_prompt_template_builder_rules_item_4: 'Hanya memformat teks. Tidak estimasi token atau validasi JSON terhadap schema.',
	tool_prompt_template_builder_rules_title: 'Aturan yang diharapkan',
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
		'Bagikan system prompt review kode yang tim bisa tempel di UI chat mana pun.',
	tool_prompt_template_builder_usecase_2:
		'Ubah catatan rapat jadi blok Role/Task/Constraints sebelum sambungkan API.',
	tool_prompt_template_builder_usecase_3:
		'Ekspor JSON lalu buka validator JSON Schema untuk cek file konfigurasi.',
	tool_prompt_template_builder_usecases_title: 'Cocok untuk',
};

export default id;
