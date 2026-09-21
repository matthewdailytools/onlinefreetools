import type { SiteLangDict } from '../../../types';

/**
 * Indonesian copy for reduce-background-noise-on-a-voice-memo (S24).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / dehum / EQ.
 */
const id: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "Kurangi noise latar pada memo suara",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "Tekan desis kipas atau AC yang stabil pada memo dengan Light, Medium, atau Strong (high-pass + noise-floor gate), lalu unduh WAV 16-bit. Hanya perkiraan di perangkat.",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "Kurangi noise latar pada memo suara dengan preset Light, Medium, atau Strong: high-pass plus gate lantai noise. Langkah: Denoise, pratinjau, unduh WAV. Contoh: muat sampel berdesis. Perkiraan browser—bukan Adobe Enhance Speech, bukan dehum 50/60 Hz, bukan EQ suara muffled. Audio tetap di perangkat; tidak pernah diunggah.",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "Memo suara sering membawa desis kipas, AC, atau ruangan yang menutupi ucapan. Halaman ini menerapkan high-pass, memperkirakan lantai noise dari frame tenang, lalu menekan lembut dekat lantai itu. Light, Medium, dan Strong mengatur seberapa agresif. Ini perkiraan jujur di browser—bukan Enhance cloud, bukan notch dengung listrik, bukan EQ tiga pita. Musik bisa terdengar tumpul. Saluran 1 atau 2. Simpan file asli; unduhan adalah WAV 16-bit baru. Pemrosesan di perangkat Anda.",
  tool_reduce_background_noise_on_a_voice_memo_choose: "Pilih file audio",
  tool_reduce_background_noise_on_a_voice_memo_hint: "Jatuhkan satu WAV, MP3, M4A, AAC, atau OGG. Maksimum 40 MiB dan 10 menit; mono atau stereo.",
  tool_reduce_background_noise_on_a_voice_memo_convert: "Denoise",
  tool_reduce_background_noise_on_a_voice_memo_download: "Unduh WAV",
  tool_reduce_background_noise_on_a_voice_memo_sample: "Muat sampel",
  tool_reduce_background_noise_on_a_voice_memo_clear: "Hapus",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "Kekuatan denoise",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "Kekuatan pengurangan noise",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "Light",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "Medium",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "Strong",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "Medium menyeimbangkan ucapan dan desis. Light lebih lembut. Strong menekan frame tenang lebih keras dan bisa menipiskan konsonan. High-pass + gate—bukan Enhance ML.",
  tool_reduce_background_noise_on_a_voice_memo_progress: "Progres denoise",
  tool_reduce_background_noise_on_a_voice_memo_read: "Baca",
  tool_reduce_background_noise_on_a_voice_memo_decode: "Decode",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "Denoise",
  tool_reduce_background_noise_on_a_voice_memo_write: "Tulis",
  tool_reduce_background_noise_on_a_voice_memo_done: "Siap. Pratinjau WAV, lalu Unduh WAV.",
  tool_reduce_background_noise_on_a_voice_memo_failed: "Denoise gagal. Coba file audio valid yang lebih kecil.",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "{s} dtk berlalu",
  tool_reduce_background_noise_on_a_voice_memo_preview: "Dengarkan WAV hasil denoise",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds} dtk · {preset} · lantai noise {floor} · WAV {output} KiB",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "demo-memo-desis-tiga-detik",
  tool_reduce_background_noise_on_a_voice_memo_empty: "Pilih audio atau muat sampel dulu.",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "Jatuhkan tepat satu file audio.",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "Audio tidak didukung atau rusak. Gunakan WAV, MP3, M4A, AAC, atau OGG.",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "Maksimum 40 MiB atau 10 menit, satu atau dua saluran.",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "Browser tidak bisa mendekode audio ini.",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "Tidak bisa menulis WAV. Periksa kekuatan, lalu coba lagi.",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "Level hampir sunyi—tidak ada yang di-denoise. Gunakan rekaman yang terdengar.",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "Cara mengurangi noise latar pada memo suara",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "Pilih kekuatan, jalankan high-pass dan gate, dengarkan, unduh WAV 16-bit—tanpa mengunggah file.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "Pilih file audio, atau Muat sampel untuk demo tiga detik berdesis.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "Buka Kekuatan dan pilih Light, Medium (default), atau Strong.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "Klik Denoise dan tunggu Baca → Decode → Denoise → Tulis.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "Pratinjau, periksa baris hasil, lalu Unduh WAV.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "Mengapa memilih alat Kurangi noise latar pada memo suara kami",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "Lihat nama kekuatan, lantai noise perkiraan, dan KiB keluaran sebelum menyimpan.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "Tiga kekuatan jelas—satu pekerjaan denoise memo, bukan rak DAW atau upsell Enhance cloud.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "Decode, high-pass, gate, dan WAV berjalan di perangkat; halaman tidak mengunggah rekaman.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "Mengubah kekuatan atau input menghapus unduhan lama.",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "Kekuatan, lantai noise, dan batas jujur browser",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "Setiap kekuatan: high-pass, perkiraan lantai dari frame tenang, gate lembut. Desis stabil paling terbantu; konsonan dan musik bisa menipis.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "Light, Medium, dan Strong mengubah cutoff high-pass dan gain sisa. Default: Medium.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "Perkiraan browser. Bukan Adobe Enhance Speech, bukan dehum 50/60 Hz, bukan EQ suara muffled.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "Saluran 1 atau 2. Tag tidak disalin. File asli tidak pernah ditimpa.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "Satu file hingga 40 MiB dan sepuluh menit. Strong bisa meninggalkan artefak; jika terdengar hampa, kembali ke Light atau Medium.",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "Coba memo berdesis",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "Muat sampel membuat tiga detik nada mirip ucapan di bawah desis stabil, lalu Denoise Medium otomatis. Pemutaran tidak mulai sendiri—tekan play di pratinjau.",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "Kapan ini membantu",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "Memo ponsel dengan desis kipas atau AC—pilih Medium, Denoise, unduh WAV.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "Catatan lapangan yang butuh lebih sedikit desis sebelum fade atau EQ di tempat lain.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_3: "Dengung kipas/AC stabil di bawah suara; gate lembut harus menenangkan jeda.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "Apakah ini sama dengan Adobe Enhance Speech?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "Tidak. Enhance cloud membangun ulang ucapan dengan model besar. Di sini hanya high-pass dan gate lantai di browser—hasil sederhana dan jujur.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "Apakah ini menghapus dengung 50/60 Hz?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "Bukan sebagai dehum khusus. Desis pita lebar yang paling terbantu. Untuk notch dengung listrik 50/60 Hz yang sempit, gunakan Hapus dengung listrik dari rekaman.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "Apakah sama dengan EQ a muffled voice recording?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "Tidak. Halaman itu membentuk nada. Halaman ini mengurangi noise latar stabil. Setelah denoise, gunakan EQ a muffled voice recording untuk warna suara.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "Apakah Strong bisa merusak ucapan atau musik?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "Bisa. Strong menekan frame tenang lebih keras dan bisa menipiskan konsonan. Lebih baik Medium; Light jika ucapan sudah lembut.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "Apa yang diubah Light, Medium, dan Strong?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "Mereka sedikit menaikkan cutoff high-pass dan menurunkan gain sisa saat frame dekat lantai perkiraan. Default: Medium.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "Apakah audio saya diunggah ke server?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "Tidak. Decode, denoise, dan penulisan WAV berjalan di browser. Jaringan diperlukan saat memuat halaman; offline tidak dijamin. Untuk tepi lembut gunakan Fade in and fade out an audio clip; untuk nada muffled gunakan EQ a muffled voice recording.",
};
export default id;
