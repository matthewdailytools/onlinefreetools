/**
 * i18n tool shard (android-prompt-builder / id).
 * Pencarian lokal: «generator prompt Android», «prompt ChatGPT untuk developer Android». Kata utama di H1; kata pendukung (stack Kotlin, Compose, Gradle, minSdk, ekspor JSON) di description, FAQ, dan contoh pemakaian.
 * Batas nyata: dirakit di browser tanpa permintaan jaringan; Perluas/Perhalus opsional mengirim draf ke Cloudflare Workers AI (perlu Turnstile, ada kuota) dan jawabannya menggantikan seluruh area hasil.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_android_prompt_builder_article:
		'Ubah kebutuhan aplikasi Android menjadi prompt yang siap ditempel: tulis fiturnya, stack Kotlin, layar Compose, dan batasan Gradle, lalu halaman ini merangkai teksnya sebagai Markdown atau JSON di dalam browser. Secara bawaan tidak ada permintaan yang dikirim; draf baru keluar saat Anda menekan Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI (perlu Turnstile, kuota terbatas).',
	tool_android_prompt_builder_build:
		'Rakit prompt',
	tool_android_prompt_builder_clear:
		'Kosongkan',
	tool_android_prompt_builder_copy:
		'Salin',
	tool_android_prompt_builder_desc:
		'Generator prompt Android: isi fitur, stack Kotlin, layar Compose, dan batasan Gradle; teks dirangkai di browser sebagai Markdown atau JSON, AI bersifat opsional.',
	tool_android_prompt_builder_description:
		'Generator prompt Android: tulis fitur, stack (Kotlin 2.0, Jetpack Compose, Room), layar, dan batasan Gradle, lalu halaman menatanya ke blok Role / Task / Constraints / Output dalam Markdown atau JSON tanpa keluar dari browser. Contoh: «daftar bacaan offline dengan pencarian teks penuh dan arsip lewat geser» menjadi tugas dengan minSdk 26. Tombol Muat contoh mengisi preset dan langsung merakit prompt-nya; Perluas atau Perhalus lewat Cloudflare Workers AI bersifat opsional (Turnstile, kuota harian).',
	tool_android_prompt_builder_download:
		'Unduh',
	tool_android_prompt_builder_empty:
		'Isi minimal satu kolom sebelum merakit.',
	tool_android_prompt_builder_example:
		'Masukan: Fitur = daftar bacaan offline, simpan dari share sheet, pencarian teks penuh, arsip lewat geser dengan urungkan; Stack = Kotlin 2.0, Jetpack Compose, Room FTS4, Hilt; Compose = LazyColumn dengan header tanggal menempel dan SwipeToDismissBox; Gradle = minSdk 26, targetSdk 35, modul :core:data. Keluaran (Markdown): ## Role memuat peran engineer Android senior, ## Task memuat satu baris per kolom.',
	tool_android_prompt_builder_example_title:
		'Contoh',
	tool_android_prompt_builder_faq_a1:
		'Secara bawaan tidak. Mengisi kolom dan menekan Rakit prompt terjadi hanya di tab ini, tanpa permintaan jaringan. Draf baru keluar ketika Anda menekan Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI; dari server kami teks itu tidak diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek.',
	tool_android_prompt_builder_faq_a2:
		'Tidak. Mode lokal hanya menata isian Anda ke blok Role / Task / Constraints / Output. AI opsional berjalan melalui Cloudflare Workers AI setelah Turnstile, bukan melalui API ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_android_prompt_builder_faq_a3:
		'Perakit templat prompt memberi empat blok umum Role / Task / Constraints / Output untuk topik apa pun. Di sini kolomnya sudah khas proyek Android: fitur, stack Kotlin, layar Compose, minSdk, dan pembagian modul Gradle, lengkap dengan contoh serta batasannya sendiri.',
	tool_android_prompt_builder_faq_a4:
		'Ya. Selesaikan Turnstile di panel AI sebelum menekan Perluas atau Perhalus. Tanpa token yang sah tombol AI menampilkan galat, sementara mode lokal tetap jalan.',
	tool_android_prompt_builder_faq_a5:
		'Bisa. Ganti format keluaran ke JSON: Anda mendapat kolom terpisah plus teks prompt yang sudah dirakit, cocok untuk pengujian atau pipeline konfigurasi.',
	tool_android_prompt_builder_faq_a6:
		'Bisa. Hasilnya teks biasa: salin lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek. Halaman ini tidak memanggil API mereka untuk Anda.',
	tool_android_prompt_builder_faq_q1:
		'Apakah isian saya diunggah ke server?',
	tool_android_prompt_builder_faq_q2:
		'Apakah halaman ini memanggil API ChatGPT atau model lain?',
	tool_android_prompt_builder_faq_q3:
		'Apa bedanya dengan perakit templat prompt?',
	tool_android_prompt_builder_faq_q4:
		'Mengapa AI opsional meminta Turnstile?',
	tool_android_prompt_builder_faq_q5:
		'Bisakah mengekspor JSON?',
	tool_android_prompt_builder_faq_q6:
		'Cocok dipakai di ChatGPT, Gemini, Claude, dan DeepSeek?',
	tool_android_prompt_builder_faq_q7:
		'Apa bedanya rakitan lokal dengan Cloudflare AI opsional?',
	tool_android_prompt_builder_faq_a7:
		'Rakitan lokal hanya menata isian Anda: tanpa permintaan jaringan dan tanpa kuota. Perluas atau Perhalus mengirim draf ke Cloudflare Workers AI (Turnstile wajib, penggunaan dibatasi) dan teks balasannya menggantikan seluruh area hasil — periksa dulu sebelum menyalin. Kalau gagal atau kuota habis, lanjutkan dengan rakitan lokal.',
	tool_android_prompt_builder_ai_expand:
		'Perluas dengan AI',
	tool_android_prompt_builder_ai_polish:
		'Perhalus dengan AI',
	tool_android_prompt_builder_ai_panel_label:
		'Cloudflare AI opsional (Turnstile)',
	tool_android_prompt_builder_ai_consent_title:
		'Kirim draf ke Cloudflare Workers AI?',
	tool_android_prompt_builder_ai_consent_body:
		'Langkah opsional: draf Anda saat ini dikirim ke Cloudflare Workers AI untuk diproses. Dari server kami teks itu tidak diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek. Tanpa AI pun perakitan di browser tetap berfungsi.',
	tool_android_prompt_builder_ai_consent_ok:
		'Lanjutkan',
	tool_android_prompt_builder_ai_consent_cancel:
		'Batal',
	tool_android_prompt_builder_ai_working:
		'Cloudflare AI sedang bekerja…',
	tool_android_prompt_builder_ai_done:
		'Teks AI menggantikan hasil. Periksa sebelum menyalin.',
	tool_android_prompt_builder_ai_err_generic:
		'AI gagal; hasilnya tidak berubah.',
	tool_android_prompt_builder_ai_err_rate:
		'Kuota AI habis. Pakai mode lokal atau coba besok (UTC).',
	tool_android_prompt_builder_ai_err_turnstile:
		'Selesaikan Turnstile sebelum memakai AI.',
	tool_android_prompt_builder_fmt_json:
		'JSON',
	tool_android_prompt_builder_fmt_label:
		'Format keluaran',
	tool_android_prompt_builder_fmt_md:
		'Markdown',
	tool_android_prompt_builder_feature_spec_label:
		'Fitur / Spesifikasi',
	tool_android_prompt_builder_feature_spec_ph:
		'Mis.: daftar bacaan offline dengan pencarian…',
	tool_android_prompt_builder_kotlin_stack_label:
		'Kotlin / Stack proyek',
	tool_android_prompt_builder_kotlin_stack_ph:
		'Mis.: Kotlin 2.0, Jetpack Compose, Room, Hilt…',
	tool_android_prompt_builder_compose_ui_label:
		'Compose / Layar',
	tool_android_prompt_builder_compose_ui_ph:
		'Mis.: LazyColumn dengan header menempel…',
	tool_android_prompt_builder_gradle_constraints_label:
		'Gradle / Batasan',
	tool_android_prompt_builder_gradle_constraints_ph:
		'Mis.: minSdk 26, targetSdk 35, modul :core:data…',
	tool_android_prompt_builder_how_body:
		'Isi empat kolomnya, biarkan halaman merangkai Markdown (atau JSON) di browser, dan kalau butuh lebih rinci minta Cloudflare AI memperluasnya sebelum prompt ditempel ke chat.',
	tool_android_prompt_builder_how_item_1:
		'Tekan Muat contoh: kolomnya terisi dan satu prompt langsung dirakit — tinggal Anda sunting.',
	tool_android_prompt_builder_how_item_2:
		'Ubah fitur, stack, layar, dan batasan lalu tekan Rakit prompt; pindah ke JSON kalau kolomnya perlu diekspor.',
	tool_android_prompt_builder_how_item_3:
		'Opsional: selesaikan Turnstile lalu tekan Perluas atau Perhalus — teks AI akan mengisi area hasil.',
	tool_android_prompt_builder_how_item_4:
		'Salin atau unduh hasilnya, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_android_prompt_builder_how_title:
		'Cara pakai',
	tool_android_prompt_builder_load_sample:
		'Muat contoh',
	tool_android_prompt_builder_platforms_lead:
		'Prompt jadinya teks biasa, jadi bisa ditempel apa adanya ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_android_prompt_builder_result_label:
		'Hasil prompt',
	tool_android_prompt_builder_rules_body:
		'Halaman ini hanya menyusun kebutuhan menjadi teks: tidak mengompilasi kode dan tidak menjalankan Gradle. AI opsional punya kuota dan mewajibkan Turnstile.',
	tool_android_prompt_builder_rules_item_1:
		'Setiap kolom masuk ke blok Markdown-nya sendiri: Role, Task, Constraints, Output.',
	tool_android_prompt_builder_rules_item_2:
		'Keluaran bawaan Markdown; area yang sama bisa menampilkan JSON berisi kolom dan prompt yang sudah dirakit.',
	tool_android_prompt_builder_rules_item_3:
		'Cloudflare AI tidak menggantikan rakitan lokal: jawabannya mengisi seluruh area hasil, jadi periksa sebelum menyalin.',
	tool_android_prompt_builder_rules_item_4:
		'Alat ini hanya merangkai teks: tidak mengompilasi Kotlin, tidak menjalankan Gradle, dan tidak memanggil API chat atas nama Anda.',
	tool_android_prompt_builder_rules_title:
		'Batasan yang perlu diketahui',
	tool_android_prompt_builder_sec_constraints:
		'Constraints',
	tool_android_prompt_builder_sec_output:
		'Output',
	tool_android_prompt_builder_sec_role:
		'Role',
	tool_android_prompt_builder_sec_task:
		'Task',
	tool_android_prompt_builder_status_copied:
		'Tersalin ke papan klip.',
	tool_android_prompt_builder_status_done:
		'Prompt siap.',
	tool_android_prompt_builder_status_working:
		'Merakit prompt…',
	tool_android_prompt_builder_title:
		'Generator prompt Android — dirakit di browser, AI opsional',
	tool_android_prompt_builder_usecase_1:
		'Mengubah kebutuhan yang tadinya cuma diucapkan di rapat sprint menjadi prompt siap tempel untuk chat tim.',
	tool_android_prompt_builder_usecase_2:
		'Mengekspor JSON untuk menyambungkan kolom ke uji regresi, lalu memperluasnya lewat Cloudflare AI bila perlu.',
	tool_android_prompt_builder_usecase_3:
		'Kalau kolom khas Android tidak diperlukan dan templat umum empat blok sudah cukup, pakai perakit templat prompt.',
	tool_android_prompt_builder_usecase_4:
		'Menyusun deskripsi internal di browser lebih dulu, lalu memutuskan apakah layak dikirim ke AI opsional.',
	tool_android_prompt_builder_usecases_title:
		'Cocok untuk',
};

export default id;
