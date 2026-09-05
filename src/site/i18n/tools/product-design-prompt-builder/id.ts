/**
 * i18n tool shard (product-design-prompt-builder / id).
 * Pencarian lokal: «generator prompt desain produk», «prompt untuk brief UX». Kata utama di H1; kata pendukung (persona, cakupan wireframe, design token, WCAG AA, ekspor JSON) di description, FAQ, dan contoh pemakaian.
 * Batas nyata: dirakit di browser tanpa permintaan jaringan; Perluas/Perhalus opsional mengirim draf ke Cloudflare Workers AI (perlu Turnstile, ada kuota) dan jawabannya menggantikan seluruh area hasil.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'Ubah permintaan desain produk menjadi prompt yang siap ditempel: tulis personanya, masalahnya, cakupan wireframe, dan design token, lalu halaman ini merangkai teksnya sebagai Markdown atau JSON di dalam browser. Secara bawaan tidak ada permintaan yang dikirim; draf baru keluar saat Anda menekan Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI (perlu Turnstile, kuota terbatas).',
	tool_product_design_prompt_builder_build:
		'Rakit prompt',
	tool_product_design_prompt_builder_clear:
		'Kosongkan',
	tool_product_design_prompt_builder_copy:
		'Salin',
	tool_product_design_prompt_builder_desc:
		'Generator prompt desain produk: isi persona, masalah, cakupan wireframe, dan design token; teks dirangkai di browser sebagai Markdown atau JSON, AI bersifat opsional.',
	tool_product_design_prompt_builder_description:
		'Generator prompt desain produk: tulis persona, masalah, cakupan wireframe (berapa layar dan layar apa), serta design token (grid, warna utama, syarat kontras), lalu halaman menatanya ke blok Role / Task / Constraints / Output dalam Markdown atau JSON tanpa keluar dari browser. Contoh: «orang tua dengan hak asuh bergiliran yang ingin melihat pekan serah terima sekaligus» menjadi cakupan tiga layar dengan grid 8 pt dan kontras WCAG AA. Tombol Muat contoh mengisi preset dan langsung merakit prompt-nya; Perluas atau Perhalus lewat Cloudflare Workers AI bersifat opsional (Turnstile, kuota harian).',
	tool_product_design_prompt_builder_download:
		'Unduh',
	tool_product_design_prompt_builder_empty:
		'Isi minimal satu kolom sebelum merakit.',
	tool_product_design_prompt_builder_example:
		'Masukan: Persona = orang tua dengan hak asuh bergiliran per pekan, satu menyusun jadwal dan satu menjemput, perangkatnya campur Android dan iPhone; Masalah = kalender terlalu penuh, mereka ingin melihat pekan serah terima sekaligus beserta catatan tanpa wajib menautkan akun; Wireframe = bilah pekan dengan legenda warna asuh, sheet detail berisi checklist serah terima, dan undangan lewat tautan SMS (3 layar); Token = grid 8 pt, warna utama #2563eb, #059669 untuk serah terima terkonfirmasi, kontras WCAG AA pada keterangan. Keluaran (Markdown): ## Role memuat pelatih prompt UX untuk brief wireframe, ## Task memuat satu baris per kolom.',
	tool_product_design_prompt_builder_example_title:
		'Contoh',
	tool_product_design_prompt_builder_faq_a1:
		'Secara bawaan tidak. Mengisi kolom dan menekan Rakit prompt terjadi hanya di tab ini, tanpa permintaan jaringan. Draf baru keluar ketika Anda menekan Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI; dari server kami teks itu tidak diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek.',
	tool_product_design_prompt_builder_faq_a2:
		'Tidak. Mode lokal hanya menata isian Anda ke blok Role / Task / Constraints / Output. AI opsional berjalan melalui Cloudflare Workers AI setelah Turnstile, bukan melalui API ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_product_design_prompt_builder_faq_a3:
		'Perakit templat prompt memberi empat blok umum Role / Task / Constraints / Output untuk topik apa pun. Di sini kolomnya adalah kolom brief UX: persona, masalah, berapa layar yang dicakup wireframe, serta design token dan kontras yang harus dipatuhi, lengkap dengan contoh serta batasannya sendiri.',
	tool_product_design_prompt_builder_faq_a4:
		'Ya. Selesaikan Turnstile di panel AI sebelum menekan Perluas atau Perhalus. Tanpa token yang sah tombol AI menampilkan galat, sementara mode lokal tetap jalan.',
	tool_product_design_prompt_builder_faq_a5:
		'Bisa. Ganti format keluaran ke JSON: Anda mendapat kolom terpisah plus teks prompt yang sudah dirakit, cocok disimpan di repositori kebutuhan atau templat review desain.',
	tool_product_design_prompt_builder_faq_a6:
		'Bisa. Hasilnya teks biasa: salin lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek. Halaman ini tidak memanggil API mereka untuk Anda.',
	tool_product_design_prompt_builder_faq_q1:
		'Apakah isian saya diunggah ke server?',
	tool_product_design_prompt_builder_faq_q2:
		'Apakah halaman ini memanggil API ChatGPT atau model lain?',
	tool_product_design_prompt_builder_faq_q3:
		'Apa bedanya dengan perakit templat prompt?',
	tool_product_design_prompt_builder_faq_q4:
		'Mengapa AI opsional meminta Turnstile?',
	tool_product_design_prompt_builder_faq_q5:
		'Bisakah mengekspor JSON?',
	tool_product_design_prompt_builder_faq_q6:
		'Cocok dipakai di ChatGPT, Gemini, Claude, dan DeepSeek?',
	tool_product_design_prompt_builder_faq_q7:
		'Apa bedanya rakitan lokal dengan Cloudflare AI opsional?',
	tool_product_design_prompt_builder_faq_a7:
		'Rakitan lokal hanya menata isian Anda: tanpa permintaan jaringan dan tanpa kuota. Perluas atau Perhalus mengirim draf ke Cloudflare Workers AI (Turnstile wajib, penggunaan dibatasi) dan teks balasannya menggantikan seluruh area hasil — periksa dulu sebelum menyalin. Kalau gagal atau kuota habis, lanjutkan dengan rakitan lokal.',
	tool_product_design_prompt_builder_ai_expand:
		'Perluas dengan AI',
	tool_product_design_prompt_builder_ai_polish:
		'Perhalus dengan AI',
	tool_product_design_prompt_builder_ai_panel_label:
		'Cloudflare AI opsional (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'Kirim draf ke Cloudflare Workers AI?',
	tool_product_design_prompt_builder_ai_consent_body:
		'Langkah opsional: draf Anda saat ini dikirim ke Cloudflare Workers AI untuk diproses. Dari server kami teks itu tidak diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek. Tanpa AI pun perakitan di browser tetap berfungsi.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'Lanjutkan',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'Batal',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI sedang bekerja…',
	tool_product_design_prompt_builder_ai_done:
		'Teks AI menggantikan hasil. Periksa sebelum menyalin.',
	tool_product_design_prompt_builder_ai_err_generic:
		'AI gagal; hasilnya tidak berubah.',
	tool_product_design_prompt_builder_ai_err_rate:
		'Kuota AI habis. Pakai mode lokal atau coba besok (UTC).',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'Selesaikan Turnstile sebelum memakai AI.',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'Format keluaran',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'Persona / Profil pengguna',
	tool_product_design_prompt_builder_persona_ph:
		'Mis.: orang tua dengan hak asuh bergiliran per pekan…',
	tool_product_design_prompt_builder_problem_label:
		'Masalah yang dipecahkan',
	tool_product_design_prompt_builder_problem_ph:
		'Mis.: kalender terlalu penuh, ingin lihat pekan sekaligus…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'Wireframe / Cakupan',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'Mis.: bilah pekan, sheet detail, undangan SMS…',
	tool_product_design_prompt_builder_design_tokens_label:
		'Desain / Token',
	tool_product_design_prompt_builder_design_tokens_ph:
		'Mis.: grid 8 pt, warna utama #2563eb, WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'Isi empat kolomnya, biarkan halaman merangkai Markdown (atau JSON) di browser, dan kalau butuh lebih rinci minta Cloudflare AI memperluasnya sebelum prompt ditempel ke chat.',
	tool_product_design_prompt_builder_how_item_1:
		'Klik Muat contoh untuk memuat preset bawaan.',
	tool_product_design_prompt_builder_how_item_2:
		'Ubah persona, masalah, cakupan wireframe, dan design token lalu tekan Rakit prompt; pindah ke JSON kalau kolomnya perlu diekspor.',
	tool_product_design_prompt_builder_how_item_3:
		'Opsional: selesaikan Turnstile lalu tekan Perluas atau Perhalus — teks AI akan mengisi area hasil.',
	tool_product_design_prompt_builder_how_item_4:
		'Salin atau unduh hasilnya, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_product_design_prompt_builder_how_title:
		'Cara pakai',
	tool_product_design_prompt_builder_load_sample:
		'Muat contoh',
	tool_product_design_prompt_builder_platforms_lead:
		'Prompt jadinya teks biasa, jadi bisa ditempel apa adanya ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_product_design_prompt_builder_result_label:
		'Hasil prompt',
	tool_product_design_prompt_builder_rules_body:
		'Halaman ini hanya menyusun permintaan menjadi teks: tidak menggambar wireframe dan tidak mengekspor berkas Figma. AI opsional punya kuota dan mewajibkan Turnstile.',
	tool_product_design_prompt_builder_rules_item_1:
		'Setiap kolom masuk ke blok Markdown-nya sendiri: Peran, Tugas, Batasan, Format keluaran.',
	tool_product_design_prompt_builder_rules_item_2:
		'Keluaran bawaan Markdown; area yang sama bisa menampilkan JSON berisi kolom dan prompt yang sudah dirakit.',
	tool_product_design_prompt_builder_rules_item_3:
		'Cloudflare AI tidak menggantikan rakitan lokal: jawabannya mengisi seluruh area hasil, jadi periksa sebelum menyalin.',
	tool_product_design_prompt_builder_rules_item_4:
		'Alat ini hanya merangkai teks: tidak membuat tampilan layar, tidak membaca berkas desain Anda, dan tidak memanggil API chat atas nama Anda.',
	tool_product_design_prompt_builder_rules_title:
		'Batasan yang perlu diketahui',
	tool_product_design_prompt_builder_sec_constraints:
		'Batasan',
	tool_product_design_prompt_builder_sec_output:
		'Format keluaran',
	tool_product_design_prompt_builder_sec_role:
		'Peran',
	tool_product_design_prompt_builder_sec_task:
		'Tugas',
	tool_product_design_prompt_builder_status_copied:
		'Tersalin ke papan klip.',
	tool_product_design_prompt_builder_status_done:
		'Prompt siap.',
	tool_product_design_prompt_builder_status_working:
		'Merakit prompt…',
	tool_product_design_prompt_builder_title:
		'Generator prompt desain produk — dirakit di browser, AI opsional',
	tool_product_design_prompt_builder_usecase_1:
		'Mengubah tujuan desain yang tadinya cuma diucapkan di rapat kebutuhan menjadi prompt siap tempel untuk chat tim.',
	tool_product_design_prompt_builder_usecase_2:
		'Mengekspor JSON untuk menyimpan persona dan token di repositori kebutuhan, lalu memperluasnya lewat Cloudflare AI bila perlu.',
	tool_product_design_prompt_builder_usecase_3:
		'Kalau kolom khas UX tidak diperlukan dan templat umum empat blok sudah cukup, pakai perakit templat prompt.',
	tool_product_design_prompt_builder_usecase_4:
		'Menyusun ide produk yang belum diumumkan di browser lebih dulu, lalu memutuskan apakah layak dikirim ke AI opsional.',
	tool_product_design_prompt_builder_usecases_title:
		'Cocok untuk',
};

export default id;
