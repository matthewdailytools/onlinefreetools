/**
 * Pecahan i18n (chatgpt-export-to-markdown / id).
 * H1 lokal: ekspor ChatGPT ke Markdown.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'Ubah ekspor ChatGPT menjadi Markdown di halaman ini. Tempel atau jatuhkan JSON, dapatkan giliran yang terbaca, lalu opsional ganti ke JSON atau CSV. Ekspor Claude memakai kanvas yang sama. Tetap di perangkat, tidak diunggah ke server.',
	tool_chatgpt_export_to_markdown_choose_file: 'Pilih file',
	tool_chatgpt_export_to_markdown_clear: 'Hapus',
	tool_chatgpt_export_to_markdown_convert: 'Konversi',
	tool_chatgpt_export_to_markdown_copy: 'Salin',
	tool_chatgpt_export_to_markdown_desc:
		'Ekspor ChatGPT ke Markdown (chip JSON/CSV); tetap di perangkat, tidak diunggah.',
	tool_chatgpt_export_to_markdown_description:
		'Ekspor ChatGPT ke Markdown: jatuhkan atau tempel JSON ekspor, petakan giliran pengguna/asisten, unduh Markdown. Contoh: percakapan sampel sudah Markdown saat dibuka. JSON dan CSV adalah chip keluaran. chat_messages Claude terdeteksi di halaman yang sama. File tetap di perangkat dan tidak diunggah ke server. Bukan penghitung token dan bukan sinkronisasi cloud.',
	tool_chatgpt_export_to_markdown_download: 'Unduh',
	tool_chatgpt_export_to_markdown_drop_hint: 'Jatuhkan JSON conversations atau tempel di bawah. Parsing tetap di tab ini.',
	tool_chatgpt_export_to_markdown_empty: 'Tempel atau pilih file ekspor dulu.',
	tool_chatgpt_export_to_markdown_err_none: 'Tidak ada giliran. Pastikan JSON punya mapping, messages, atau chat_messages.',
	tool_chatgpt_export_to_markdown_err_parse: 'JSON itu tidak bisa dibaca. Tempel ekspor ChatGPT atau Claude yang valid.',
	tool_chatgpt_export_to_markdown_example:
		'Muat contoh menyisipkan JSON mapping dua giliran, mengubahnya ke Markdown dengan judul User dan Assistant, lalu mengaktifkan Salin dan Unduh.',
	tool_chatgpt_export_to_markdown_example_title: 'Contoh',
	tool_chatgpt_export_to_markdown_faq_a1: 'Tidak. Ekspor dibaca di tab ini. Tidak ada yang dikirim ke OpenAI, Anthropic, atau server kami.',
	tool_chatgpt_export_to_markdown_faq_a2: 'Jalur utama adalah ekspor data ChatGPT dengan pohon mapping. Array role/content datar dan chat_messages Claude juga diterima.',
	tool_chatgpt_export_to_markdown_faq_a3: 'Ya. chat_messages Claude (sender + text) diserap di sini. Tidak ada URL kedua.',
	tool_chatgpt_export_to_markdown_faq_a4: 'Node system kosong dan cangkang tool tanpa teks dilewati. Lampiran dan gambar tidak dibangun ulang sebagai file.',
	tool_chatgpt_export_to_markdown_faq_a5: 'Menghitung token adalah pekerjaan lain (ditunda). H1 ini untuk ekspor → Markdown.',
	tool_chatgpt_export_to_markdown_faq_q1: 'Apakah chat saya diunggah?',
	tool_chatgpt_export_to_markdown_faq_q2: 'Bentuk ekspor mana yang bekerja?',
	tool_chatgpt_export_to_markdown_faq_q3: 'Apakah ekspor Claude bisa?',
	tool_chatgpt_export_to_markdown_faq_q4: 'Bidang mana yang hilang?',
	tool_chatgpt_export_to_markdown_faq_q5: 'Apakah ini penghitung token?',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: 'Format keluaran',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body:
		'Ekspor chat, tempel atau jatuhkan JSON, konversi ke Markdown, lalu salin atau unduh. JSON dan CSV adalah chip pekerjaan yang sama.',
	tool_chatgpt_export_to_markdown_how_item_1: 'Ambil ekspor data ChatGPT (atau JSON Claude) — tugasnya ekspor ChatGPT ke Markdown.',
	tool_chatgpt_export_to_markdown_how_item_2: 'Jatuhkan file atau tempel JSON ke kotak.',
	tool_chatgpt_export_to_markdown_how_item_3: 'Biarkan Markdown kecuali Anda butuh chip JSON atau CSV.',
	tool_chatgpt_export_to_markdown_how_item_4: 'Salin atau unduh. Contoh sudah jalan saat pertama dilukis.',
	tool_chatgpt_export_to_markdown_how_title: 'Cara kerjanya',
	tool_chatgpt_export_to_markdown_input_label: 'JSON ekspor',
	tool_chatgpt_export_to_markdown_input_ph: 'Tempel JSON conversations di sini…',
	tool_chatgpt_export_to_markdown_load_sample: 'Muat contoh',
	tool_chatgpt_export_to_markdown_output_label: 'Hasil',
	tool_chatgpt_export_to_markdown_role_assistant: 'Asisten',
	tool_chatgpt_export_to_markdown_role_system: 'Sistem',
	tool_chatgpt_export_to_markdown_role_tool: 'Alat',
	tool_chatgpt_export_to_markdown_role_user: 'Pengguna',
	tool_chatgpt_export_to_markdown_rules_body:
		'Konversi ekspor butuh peta bidang, Markdown bawaan, dan privasi yang jelas — bukan URL konverter kedua per vendor.',
	tool_chatgpt_export_to_markdown_rules_item_1: 'Keluaran bawaan adalah Markdown dengan bagian ## Pengguna / ## Asisten dan # judul opsional.',
	tool_chatgpt_export_to_markdown_rules_item_2: 'Pohon mapping ChatGPT, array datar, dan chat_messages Claude diurai di satu halaman.',
	tool_chatgpt_export_to_markdown_rules_item_3: 'Chip JSON dan CSV mengeluarkan giliran yang sama. H1 tidak berubah.',
	tool_chatgpt_export_to_markdown_rules_item_4: 'Format vendor berubah. Jika gagal, tempel JSON mentah dan cek FAQ.',
	tool_chatgpt_export_to_markdown_rules_title: 'Aturan yang perlu diantisipasi',
	tool_chatgpt_export_to_markdown_status_copied: 'Disalin ke papan klip.',
	tool_chatgpt_export_to_markdown_status_done: 'Siap — {n} giliran ({source}).',
	tool_chatgpt_export_to_markdown_status_working: 'Mengurai ekspor…',
	tool_chatgpt_export_to_markdown_title: 'ekspor ChatGPT ke Markdown',
	tool_chatgpt_export_to_markdown_usecase_1: 'Arsipkan ekspor ChatGPT hari ini sebagai Markdown sebelum menghapus utas.',
	tool_chatgpt_export_to_markdown_usecase_2: 'Pindah ke CSV saat butuh kolom role/content untuk spreadsheet.',
	tool_chatgpt_export_to_markdown_usecase_3: 'Jatuhkan JSON chat_messages Claude di halaman yang sama — tanpa alat kedua.',
	tool_chatgpt_export_to_markdown_usecases_title: 'Cocok untuk ini',
};

export default id;
