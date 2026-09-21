import type { SiteLangDict } from '../../../types';

/**
 * Indonesian copy for eq-a-muffled-voice-recording (S20).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ bass saja / denoise / de-esser.
 */
const id: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "EQ rekaman suara yang teredam",
  tool_eq_a_muffled_voice_recording_desc:
    "Buka suara teredam dengan preset Clarity, Warmth, atau Presence tiga pita, lalu unduh WAV 16-bit. Hanya di perangkat.",
  tool_eq_a_muffled_voice_recording_description:
    "EQ rekaman suara yang teredam dengan preset Clarity, Warmth, atau Presence tiga pita. Langkah: EQ, pratinjau, unduh WAV. Contoh: muat sampel teredam. Hanya pembentukan nada—bukan booster bass saja, bukan noise reduction, bukan de-esser. Audio tetap di perangkat Anda; tidak pernah diunggah.",
  tool_eq_a_muffled_voice_recording_article:
    "Panggilan, masker, dan mikrofon jauh sering terdengar teredam: terlalu banyak lumpur di bawah beberapa ratus hertz dan kurang kejelasan di pita bicara. Halaman ini menjalankan tiga tahap BiquadFilter di OfflineAudioContext—lowshelf, peaking, dan highshelf—sebagai preset bernama. Clarity memotong lumpur dan membuka presence bicara; Warmth menaikkan body dan melembutkan high tajam; Presence memfokuskan presence mid-high dan air. Itu adalah EQ tonal untuk suara teredam, bukan booster satu pita bass, bukan pengurangan noise latar, dan bukan de-esser hanya untuk sibilance. Saluran tetap 1 atau 2. Simpan master; unduhan adalah WAV 16-bit baru. Kerja berjalan di browser pada perangkat Anda.",
  tool_eq_a_muffled_voice_recording_choose: "Pilih berkas audio",
  tool_eq_a_muffled_voice_recording_hint: "Jatuhkan satu WAV, MP3, M4A, AAC, atau OGG. Maksimum 40 MiB dan 10 menit; mono atau stereo.",
  tool_eq_a_muffled_voice_recording_convert: "EQ",
  tool_eq_a_muffled_voice_recording_download: "Unduh WAV",
  tool_eq_a_muffled_voice_recording_sample: "Muat sampel",
  tool_eq_a_muffled_voice_recording_clear: "Hapus",
  tool_eq_a_muffled_voice_recording_advanced: "Preset EQ",
  tool_eq_a_muffled_voice_recording_preset_label: "Preset EQ suara",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "Clarity bawaan memotong lumpur dan membuka bicara. Warmth menambah body dengan high lebih lembut. Presence menaikkan presence mid-high dan air. Soft peak protection mencegah clipping setelah boost.",
  tool_eq_a_muffled_voice_recording_progress: "Progres EQ",
  tool_eq_a_muffled_voice_recording_read: "Baca",
  tool_eq_a_muffled_voice_recording_decode: "Dekode",
  tool_eq_a_muffled_voice_recording_eq: "EQ",
  tool_eq_a_muffled_voice_recording_write: "Tulis",
  tool_eq_a_muffled_voice_recording_done: "Siap. Pratinjau WAV hasil EQ, lalu Unduh WAV.",
  tool_eq_a_muffled_voice_recording_failed: "EQ gagal. Coba berkas audio yang lebih kecil dan valid.",
  tool_eq_a_muffled_voice_recording_elapsed: "{s}d berlalu",
  tool_eq_a_muffled_voice_recording_preview: "Dengarkan WAV hasil EQ",
  tool_eq_a_muffled_voice_recording_result: "{seconds}d · {preset} · puncak {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_eq_a_muffled_voice_recording_sample_name: "demo-suara-teredam-dua-detik",
  tool_eq_a_muffled_voice_recording_empty: "Pilih berkas audio atau muat sampel terlebih dahulu.",
  tool_eq_a_muffled_voice_recording_err_file: "Jatuhkan tepat satu berkas audio.",
  tool_eq_a_muffled_voice_recording_err_format: "Audio tidak didukung atau rusak. Gunakan berkas yang dapat didekode browser (WAV, MP3, M4A, AAC, atau OGG).",
  tool_eq_a_muffled_voice_recording_err_limit: "Gunakan berkas paling besar 40 MiB atau 10 menit, dengan satu atau dua saluran.",
  tool_eq_a_muffled_voice_recording_err_decode: "Browser tidak dapat mendekode audio ini. Coba rekaman valid lain.",
  tool_eq_a_muffled_voice_recording_err_encoder: "Tidak dapat menulis WAV hasil EQ. Periksa preset, lalu coba EQ lagi.",
  tool_eq_a_muffled_voice_recording_err_silence: "Level hampir hening—tidak ada yang di-EQ. Coba rekaman dengan level terdengar.",
  tool_eq_a_muffled_voice_recording_how_title: "Cara EQ rekaman suara yang teredam",
  tool_eq_a_muffled_voice_recording_how_body:
    "Pilih preset tiga pita, bentuk ulang nada, dengarkan, lalu unduh WAV 16-bit—tanpa mengunggah berkas.",
  tool_eq_a_muffled_voice_recording_how_item_1: "Pilih berkas audio, atau Muat sampel untuk demo teredam dua detik.",
  tool_eq_a_muffled_voice_recording_how_item_2: "Buka Preset EQ dan pilih Clarity (bawaan), Warmth, atau Presence.",
  tool_eq_a_muffled_voice_recording_how_item_3: "Klik EQ dan tunggu Baca → Dekode → EQ → Tulis selesai.",
  tool_eq_a_muffled_voice_recording_how_item_4: "Pratinjau hasil, periksa preset dan puncak, lalu Unduh WAV.",
  tool_eq_a_muffled_voice_recording_why_choose_title: "Mengapa memilih alat EQ rekaman suara yang teredam kami",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "Lihat nama preset, puncak sebelum/sesudah, dan KiB keluaran sebelum menyimpan.",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "Tiga preset suara jelas—satu pekerjaan EQ teredam, bukan mainan sepuluh pita atau bass saja.",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "Dekode, EQ Biquad, dan penulisan WAV berjalan di perangkat Anda; halaman tidak mengunggah rekaman untuk diproses.",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "Mengubah preset atau input menghapus unduhan lama agar tidak menyimpan WAV usang.",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity, Warmth, Presence, dan batas",
  tool_eq_a_muffled_voice_recording_rules_body:
    "Setiap preset adalah tiga tahap Biquad (lowshelf, peaking, highshelf). Clarity membuka bicara teredam; Warmth menambah body; Presence menaikkan presence dan air. Soft peak protection menskalakan jika boost akan clipping.",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "Clarity bawaan memotong low berlumpur dan menaikkan kejernihan bicara. Warmth menaikkan body low dan melembutkan high tajam. Presence memfokuskan presence mid-high.",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "Hanya EQ tonal. Tidak menghapus noise kipas, tidak boost bass saja, dan tidak menarget sibilance seperti de-esser.",
  tool_eq_a_muffled_voice_recording_rules_item_3: "Ekspor mempertahankan 1 atau 2 saluran. Tag tidak disalin. Berkas asli tidak pernah ditimpa.",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "Satu berkas hingga 40 MiB dan sepuluh menit. Soft peak protection dapat menurunkan level keseluruhan setelah boost kuat agar WAV di bawah skala penuh digital.",
  tool_eq_a_muffled_voice_recording_example_title: "Coba EQ suara teredam nyata",
  tool_eq_a_muffled_voice_recording_example:
    "Muat sampel membuat nada tumpul dua detik dengan low kuat dan high lemah, lalu EQ Clarity otomatis. Pemutaran tidak dimulai sendiri—tekan play pada pratinjau jika ingin mendengar hasil yang lebih jelas.",
  tool_eq_a_muffled_voice_recording_usecases_title: "Kapan ini membantu",
  tool_eq_a_muffled_voice_recording_usecase_1: "Take telepon atau masker yang terdengar seperti di kotak—pilih Clarity, EQ, unduh WAV.",
  tool_eq_a_muffled_voice_recording_usecase_2: "Suara podcast butuh body lebih hangat atau lebih presence tanpa membuka EQ DAW penuh.",
  tool_eq_a_muffled_voice_recording_faq_q1: "Apakah ini sama dengan bass booster?",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "Tidak. Bass booster terutama menaikkan frekuensi rendah. Halaman ini menawarkan tiga preset suara multiband untuk bicara teredam. Boost bass saja adalah pekerjaan lain (Boost bass on an MP3 saat tersedia).",
  tool_eq_a_muffled_voice_recording_faq_q2: "Apakah ini menghapus noise latar?",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "Tidak. EQ membentuk nada; tidak menekan kipas, hiss, atau noise ruangan. Untuk denoise gunakan alat noise-reduction khusus saat tersedia.",
  tool_eq_a_muffled_voice_recording_faq_q3: "Apakah ini de-esser?",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "Tidak. De-esser menarget sibilance tajam (S/Sh). Preset ini membentuk nada teredam keseluruhan di low, mid, dan high. Gunakan alat de-esser saat tersedia.",
  tool_eq_a_muffled_voice_recording_faq_q4: "Apa yang dilakukan Clarity, Warmth, dan Presence?",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity memotong lumpur dan membuka bicara. Warmth menambah body low dan melembutkan high tajam. Presence menaikkan presence mid-high dan air. Soft peak protection mencegah clipping setelah boost.",
  tool_eq_a_muffled_voice_recording_faq_q5: "Bagaimana jika EQ membuat berkas lebih panas?",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "Setelah rantai filter, soft peak protection menskalakan buffer jika puncak akan melebihi sekitar −0,2 dBFS agar WAV aman. Untuk pembatasan puncak khusus, gunakan Batasi puncak agar file tidak clipping.",
  tool_eq_a_muffled_voice_recording_faq_q6: "Apakah audio saya diunggah ke server?",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "Tidak. Dekode, EQ, dan penulisan WAV berjalan di browser pada perangkat Anda. Halaman membutuhkan jaringan saat dimuat pertama kali; offline tidak dijamin. Untuk dinamika setelah EQ, gunakan Mengompres rentang dinamis rekaman suara atau Batasi puncak agar file tidak clipping.",
};
export default id;
