/**
 * i18n tool shard (ios-prompt-builder / id).
 * Pencarian lokal: «generator prompt iOS», «prompt ChatGPT untuk developer iOS». Kata utama di H1; kata pendukung (stack Swift, SwiftUI, HIG, VoiceOver, ekspor JSON) di description, FAQ, dan contoh pemakaian.
 * Batas nyata: dirakit di browser tanpa permintaan jaringan; Perluas/Perhalus opsional mengirim draf ke Cloudflare Workers AI (perlu Turnstile, ada kuota) dan jawabannya menggantikan seluruh area hasil.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_ios_prompt_builder_article:
		'Ubah kebutuhan aplikasi iOS menjadi prompt yang siap ditempel: tulis fiturnya, stack Swift, layar SwiftUI, dan aturan aksesibilitas dari HIG, lalu halaman ini merangkai teksnya sebagai Markdown atau JSON di dalam browser. Secara bawaan tidak ada permintaan yang dikirim; draf baru keluar saat Anda menekan Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI (perlu Turnstile, kuota terbatas).',
	tool_ios_prompt_builder_build:
		'Rakit prompt',
	tool_ios_prompt_builder_clear:
		'Kosongkan',
	tool_ios_prompt_builder_copy:
		'Salin',
	tool_ios_prompt_builder_desc:
		'Generator prompt iOS: isi fitur, stack Swift, layar SwiftUI, dan aturan HIG; teks dirangkai di browser sebagai Markdown atau JSON, AI bersifat opsional.',
	tool_ios_prompt_builder_description:
		'Generator prompt iOS: tulis fitur, stack (Swift 5.10, SwiftUI, iOS 17+, SwiftData), layar, dan aturan aksesibilitas dari HIG, lalu halaman menatanya ke blok Role / Task / Constraints / Output dalam Markdown atau JSON tanpa keluar dari browser. Contoh: «tren langkah mingguan dari HealthKit dan rentang detak jantung istirahat» keluar dengan Dynamic Type sampai XXL dan label VoiceOver di titik grafik. Tombol Muat contoh mengisi preset dan langsung merakit prompt-nya; Perluas atau Perhalus lewat Cloudflare Workers AI bersifat opsional (Turnstile, kuota harian).',
	tool_ios_prompt_builder_download:
		'Unduh',
	tool_ios_prompt_builder_empty:
		'Isi minimal satu kolom sebelum merakit.',
	tool_ios_prompt_builder_example:
		'Masukan: Fitur = tren langkah mingguan dari HealthKit dan rentang detak jantung istirahat, dengan alasan izin dijelaskan secara awam; Stack = Swift 5.10, SwiftUI, iOS 17+, async/await, cache SwiftData; Layar = NavigationStack dan Charts, sheet izin sebelum kueri pertama; HIG = Dynamic Type sampai XXL, label VoiceOver di titik grafik, tanpa force-unwrap. Keluaran (Markdown): ## Role memuat peran engineer iOS senior, ## Task memuat satu baris per kolom.',
	tool_ios_prompt_builder_example_title:
		'Contoh',
	tool_ios_prompt_builder_faq_a1:
		'Secara bawaan tidak. Mengisi kolom dan menekan Rakit prompt terjadi hanya di tab ini, tanpa permintaan jaringan. Draf baru keluar ketika Anda menekan Perluas atau Perhalus, dan tujuannya Cloudflare Workers AI; dari server kami teks itu tidak diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek.',
	tool_ios_prompt_builder_faq_a2:
		'Tidak. Mode lokal hanya menata isian Anda ke blok Role / Task / Constraints / Output. AI opsional berjalan melalui Cloudflare Workers AI setelah Turnstile, bukan melalui API ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_ios_prompt_builder_faq_a3:
		'Perakit templat prompt memberi empat blok umum Role / Task / Constraints / Output untuk topik apa pun. Di sini kolomnya sudah khas proyek iOS: fitur, stack Swift, navigasi dan grafik di SwiftUI, serta aturan HIG soal Dynamic Type dan VoiceOver, lengkap dengan contoh serta batasannya sendiri.',
	tool_ios_prompt_builder_faq_a4:
		'Ya. Selesaikan Turnstile di panel AI sebelum menekan Perluas atau Perhalus. Tanpa token yang sah tombol AI menampilkan galat, sementara mode lokal tetap jalan.',
	tool_ios_prompt_builder_faq_a5:
		'Bisa. Ganti format keluaran ke JSON: Anda mendapat kolom terpisah plus teks prompt yang sudah dirakit, cocok untuk kasus XCTest atau pipeline konfigurasi.',
	tool_ios_prompt_builder_faq_a6:
		'Bisa. Hasilnya teks biasa: salin lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek. Halaman ini tidak memanggil API mereka untuk Anda.',
	tool_ios_prompt_builder_faq_q1:
		'Apakah isian saya diunggah ke server?',
	tool_ios_prompt_builder_faq_q2:
		'Apakah halaman ini memanggil API ChatGPT atau model lain?',
	tool_ios_prompt_builder_faq_q3:
		'Apa bedanya dengan perakit templat prompt?',
	tool_ios_prompt_builder_faq_q4:
		'Mengapa AI opsional meminta Turnstile?',
	tool_ios_prompt_builder_faq_q5:
		'Bisakah mengekspor JSON?',
	tool_ios_prompt_builder_faq_q6:
		'Cocok dipakai di ChatGPT, Gemini, Claude, dan DeepSeek?',
	tool_ios_prompt_builder_faq_q7:
		'Apa bedanya rakitan lokal dengan Cloudflare AI opsional?',
	tool_ios_prompt_builder_faq_a7:
		'Rakitan lokal hanya menata isian Anda: tanpa permintaan jaringan dan tanpa kuota. Perluas atau Perhalus mengirim draf ke Cloudflare Workers AI (Turnstile wajib, penggunaan dibatasi) dan teks balasannya menggantikan seluruh area hasil — periksa dulu sebelum menyalin. Kalau gagal atau kuota habis, lanjutkan dengan rakitan lokal.',
	tool_ios_prompt_builder_ai_expand:
		'Perluas dengan AI',
	tool_ios_prompt_builder_ai_polish:
		'Perhalus dengan AI',
	tool_ios_prompt_builder_ai_panel_label:
		'Cloudflare AI opsional (Turnstile)',
	tool_ios_prompt_builder_ai_consent_title:
		'Kirim draf ke Cloudflare Workers AI?',
	tool_ios_prompt_builder_ai_consent_body:
		'Langkah opsional: draf Anda saat ini dikirim ke Cloudflare Workers AI untuk diproses. Dari server kami teks itu tidak diteruskan ke OpenAI, Google, Anthropic, atau DeepSeek. Tanpa AI pun perakitan di browser tetap berfungsi.',
	tool_ios_prompt_builder_ai_consent_ok:
		'Lanjutkan',
	tool_ios_prompt_builder_ai_consent_cancel:
		'Batal',
	tool_ios_prompt_builder_ai_working:
		'Cloudflare AI sedang bekerja…',
	tool_ios_prompt_builder_ai_done:
		'Teks AI menggantikan hasil. Periksa sebelum menyalin.',
	tool_ios_prompt_builder_ai_err_generic:
		'AI gagal; hasilnya tidak berubah.',
	tool_ios_prompt_builder_ai_err_rate:
		'Kuota AI habis. Pakai mode lokal atau coba besok (UTC).',
	tool_ios_prompt_builder_ai_err_turnstile:
		'Selesaikan Turnstile sebelum memakai AI.',
	tool_ios_prompt_builder_fmt_json:
		'JSON',
	tool_ios_prompt_builder_fmt_label:
		'Format keluaran',
	tool_ios_prompt_builder_fmt_md:
		'Markdown',
	tool_ios_prompt_builder_feature_spec_label:
		'Fitur / Spesifikasi',
	tool_ios_prompt_builder_feature_spec_ph:
		'Mis.: tren langkah dan detak jantung istirahat…',
	tool_ios_prompt_builder_swift_stack_label:
		'Swift / Stack proyek',
	tool_ios_prompt_builder_swift_stack_ph:
		'Mis.: Swift 5.10, SwiftUI, iOS 17+, SwiftData…',
	tool_ios_prompt_builder_swiftui_ui_label:
		'SwiftUI / Layar',
	tool_ios_prompt_builder_swiftui_ui_ph:
		'Mis.: NavigationStack, Charts, sheet izin…',
	tool_ios_prompt_builder_hig_constraints_label:
		'HIG / Aksesibilitas',
	tool_ios_prompt_builder_hig_constraints_ph:
		'Mis.: Dynamic Type XXL, VoiceOver, tanpa force-unwrap…',
	tool_ios_prompt_builder_how_body:
		'Isi empat kolomnya, biarkan halaman merangkai Markdown (atau JSON) di browser, dan kalau butuh lebih rinci minta Cloudflare AI memperluasnya sebelum prompt ditempel ke chat.',
	tool_ios_prompt_builder_how_item_1:
		'Tekan Muat contoh: kolomnya terisi dan satu prompt langsung dirakit — tinggal Anda sunting.',
	tool_ios_prompt_builder_how_item_2:
		'Ubah fitur, stack, layar, dan aturan HIG lalu tekan Rakit prompt; pindah ke JSON kalau kolomnya perlu diekspor.',
	tool_ios_prompt_builder_how_item_3:
		'Opsional: selesaikan Turnstile lalu tekan Perluas atau Perhalus — teks AI akan mengisi area hasil.',
	tool_ios_prompt_builder_how_item_4:
		'Salin atau unduh hasilnya, lalu tempel ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_ios_prompt_builder_how_title:
		'Cara pakai',
	tool_ios_prompt_builder_load_sample:
		'Muat contoh',
	tool_ios_prompt_builder_platforms_lead:
		'Prompt jadinya teks biasa, jadi bisa ditempel apa adanya ke ChatGPT, Gemini, Claude, atau DeepSeek.',
	tool_ios_prompt_builder_result_label:
		'Hasil prompt',
	tool_ios_prompt_builder_rules_body:
		'Halaman ini hanya menyusun kebutuhan menjadi teks: tidak mengompilasi kode dan tidak menjalankan Xcode. AI opsional punya kuota dan mewajibkan Turnstile.',
	tool_ios_prompt_builder_rules_item_1:
		'Setiap kolom masuk ke blok Markdown-nya sendiri: Role, Task, Constraints, Output.',
	tool_ios_prompt_builder_rules_item_2:
		'Keluaran bawaan Markdown; area yang sama bisa menampilkan JSON berisi kolom dan prompt yang sudah dirakit.',
	tool_ios_prompt_builder_rules_item_3:
		'Cloudflare AI tidak menggantikan rakitan lokal: jawabannya mengisi seluruh area hasil, jadi periksa sebelum menyalin.',
	tool_ios_prompt_builder_rules_item_4:
		'Alat ini hanya merangkai teks: tidak mengompilasi Swift, tidak menjalankan Xcode, dan tidak memanggil API chat atas nama Anda.',
	tool_ios_prompt_builder_rules_title:
		'Batasan yang perlu diketahui',
	tool_ios_prompt_builder_sec_constraints:
		'Constraints',
	tool_ios_prompt_builder_sec_output:
		'Output',
	tool_ios_prompt_builder_sec_role:
		'Role',
	tool_ios_prompt_builder_sec_task:
		'Task',
	tool_ios_prompt_builder_status_copied:
		'Tersalin ke papan klip.',
	tool_ios_prompt_builder_status_done:
		'Prompt siap.',
	tool_ios_prompt_builder_status_working:
		'Merakit prompt…',
	tool_ios_prompt_builder_title:
		'Generator prompt iOS — dirakit di browser, AI opsional',
	tool_ios_prompt_builder_usecase_1:
		'Mengubah kebutuhan yang tadinya cuma diucapkan di review desain menjadi prompt siap tempel untuk chat tim.',
	tool_ios_prompt_builder_usecase_2:
		'Mengekspor JSON untuk memindahkan aturan HIG ke daftar periksa, lalu memperluasnya lewat Cloudflare AI bila perlu.',
	tool_ios_prompt_builder_usecase_3:
		'Kalau kolom khas iOS tidak diperlukan dan templat umum empat blok sudah cukup, pakai perakit templat prompt.',
	tool_ios_prompt_builder_usecase_4:
		'Menyusun deskripsi fitur yang belum diumumkan di browser lebih dulu, lalu memutuskan apakah layak dikirim ke AI opsional.',
	tool_ios_prompt_builder_usecases_title:
		'Cocok untuk',
};

export default id;
