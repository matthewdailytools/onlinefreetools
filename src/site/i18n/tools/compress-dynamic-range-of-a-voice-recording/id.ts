import type { SiteLangDict } from '../../../types';

/**
 * Indonesian copy for compress-dynamic-range-of-a-voice-recording (S18).
 */
const id: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "Mengompres rentang dinamis rekaman suara",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    
    "Ratakan puncak suara dengan preset ringan/sedang/berat dan makeup opsional, lalu unduh WAV 16-bit. Hanya di perangkat.",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    
    "Kompres rentang dinamis rekaman suara dengan preset ringan, sedang, atau berat plus makeup opsional. Langkah: kompres, pratinjau, unduh WAV. Contoh: muat sampel tidak rata. Membentuk ulang dinamika—bukan kompres ukuran MP3, bukan gain dB tetap, bukan normalisasi peak/LUFS. Audio tetap di perangkat; tidak pernah diunggah.",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    
    "Rekaman suara sering loncat dari bisikan ke puncak. Halaman ini menjalankan kompresor amplop peak murni JavaScript: ringan/sedang soft knee, berat hard knee (ringan ≈ −18 dB / 2:1, sedang ≈ −24 / 3:1 bawaan, berat ≈ −30 / 6:1). Makeup opsional mengembalikan level keseluruhan setelah puncak dijinakkan, dengan proteksi peak lembut sebelum WAV 16-bit. Itu kompresi rentang dinamis, bukan mengecilkan MP3 demi byte, bukan gain tetap, bukan normalisasi peak, dan bukan penyesuaian LUFS. Saluran 1 atau 2. Simpan master; unduhan file baru.",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "Pilih file audio",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "Letakkan satu WAV, MP3, M4A, AAC, atau OGG. Maksimum 40 MiB dan 10 menit; mono atau stereo.",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "Kompres",
  tool_compress_dynamic_range_of_a_voice_recording_download: "Unduh WAV",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "Muat sampel",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "Hapus",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "Pengaturan kompresor",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "Preset intensitas",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "Ringan",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "Sedang",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "Berat",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "Gain makeup",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "Aktif",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "Nonaktif",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    
    "Ringan (−18 dB, 2:1, soft knee) lembut. Sedang (−24 dB, 3:1) cocok untuk banyak voice-over. Berat (−30 dB, 6:1, hard knee) menekan lebih keras. Makeup (Aktif bawaan) mengembalikan level setelah kompresi dengan proteksi peak.",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "Progres kompres",
  tool_compress_dynamic_range_of_a_voice_recording_read: "Baca",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "Dekode",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "Kompres",
  tool_compress_dynamic_range_of_a_voice_recording_write: "Tulis",
  tool_compress_dynamic_range_of_a_voice_recording_done: "Siap. Pratinjau WAV terkompres, lalu Unduh WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "Kompres gagal. Coba file audio valid yang lebih kecil.",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "{s}d berlalu",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "Dengarkan WAV terkompres",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds}d · {preset} · makeup {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "demo-suara-dinamis-dua-detik",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "Pilih audio atau muat sampel dulu.",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "Letakkan tepat satu file audio.",
  tool_compress_dynamic_range_of_a_voice_recording_err_format: "Audio tidak didukung atau rusak. Gunakan file yang dapat didekode browser (WAV, MP3, M4A, AAC, atau OGG).",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "Gunakan file tidak lebih dari 40 MiB atau 10 menit, dengan satu atau dua saluran.",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "Browser tidak dapat mendekode audio ini. Coba rekaman valid lain.",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "Tidak dapat menulis WAV terkompres. Periksa preset dan makeup, lalu coba Kompres lagi.",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "Level hampir sunyi—tidak ada yang dikompres.",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "Cara mengompres rentang dinamis rekaman suara",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    
    "Pilih preset intensitas, aktifkan makeup jika perlu, kompres dinamika, dengarkan, unduh WAV 16-bit—tanpa mengunggah file.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "Pilih rekaman suara, atau Muat sampel untuk nada dua detik berdinamika tinggi.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    
    "Buka pengaturan dan pilih Ringan, Sedang (bawaan), atau Berat; biarkan Makeup Aktif kecuali Anda hanya ingin mengontrol puncak.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "Klik Kompres dan tunggu Baca → Dekode → Kompres → Tulis.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "Pratinjau, cek preset/ambang/rasio/makeup dan peak, lalu Unduh WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "Mengapa memilih alat kompres rentang dinamis kami",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "Lihat preset, ambang, rasio, makeup, peak, dan KiB keluaran sebelum menyimpan.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "Tiga preset suara jelas—satu pekerjaan dinamika, bukan dinding ukuran MP3/gain/normalisasi.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3: "Dekode, kompresi, dan penulisan WAV berjalan di perangkat; halaman tidak mengunggah rekaman.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "Mengubah preset, makeup, atau masukan menghapus unduhan lama agar WAV basi tidak tersimpan.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "Ambang, rasio, makeup, dan batas",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    
    "Kompresor amplop peak menurunkan gain di atas ambang menurut rasio (soft knee pada Ringan/Sedang; hard knee pada Berat). Makeup mengalikan sesudahnya; proteksi peak lembut menjaga sampel di bawah ~0,99. Membentuk ulang keras vs lembut—berbeda dari gain tetap, normalisasi peak, LUFS, atau perkecil bitrate MP3.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1:
    
    "Sedang (−24 dB, 3:1, soft knee) adalah bawaan. Ringan lebih lembut; Berat memakai ambang lebih rendah, rasio lebih tinggi, dan hard knee.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2:
    
    "Makeup bawaan Aktif mengembalikan level setelah puncak dijinakkan. Nonaktif jika hanya ingin puncak lebih pelan tanpa angkat.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "Ekspor mempertahankan 1 atau 2 saluran. Tag tidak disalin. File asli tidak ditimpa.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4:
    "Satu file hingga 40 MiB dan sepuluh menit. Bukan kompres ukuran MP3, bukan amplifikasi gain tetap, bukan normalisasi peak, dan bukan penyesuaian LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "Coba kompres rentang dinamis nyata",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    
    "Muat sampel membuat nada 440 Hz dua detik dengan burst keras dan lembut, lalu Kompres otomatis di Sedang dengan Makeup Aktif. Pemutaran tidak mulai sendiri—tekan play di pratinjau.",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "Kapan ini membantu",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "Voice-over yang loncat dari frasa pelan ke puncak keras—pilih Podcast, kompres, unduh WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "Wawancara yang ingin lebih rata sebelum penyesuaian loudness, tanpa mengecilkan MP3 demi ukuran.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_3: "Bisikan dan puncak bertarung dalam satu take; Anda ingin level dengaran lebih rata.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "Apakah sama dengan mengompres / mengecilkan ukuran file MP3?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "Tidak. “Kompres” di sini berarti rentang dinamis (ambang/rasio), bukan bitrate atau byte. Untuk MP3 lebih kecil gunakan Reduce an MP3 file size. Dalam bahasa Tionghoa: 压缩人声动态 ≠ 压缩 MP3 体积.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "Apakah sama dengan membuat rekaman pelan lebih keras dengan gain dB tetap?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2:
    "Tidak. Gain tetap mengalikan seluruh klip. Di sini bagian keras ditekan lebih banyak. Untuk boost seragam gunakan Make a quiet recording louder.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "Apakah normalisasi peak atau penyesuaian LUFS podcast?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "Tidak. Peak menargetkan dBFS; LUFS menargetkan loudness terintegrasi. Halaman ini membentuk ulang dinamika dengan kompresor. Gunakan Normalize an audio file to peak atau Match podcast loudness to −16 LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "Apa yang diubah Ringan, Sedang, dan Berat?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4:
    
    "Mereka mengatur ambang, rasio, dan knee. Ringan ≈ −18 / 2:1 soft; Sedang ≈ −24 / 3:1 soft; Berat ≈ −30 / 6:1 hard. Makeup Aktif/Nonaktif terpisah.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "Apakah Makeup harus tetap Aktif?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    
    "Biasanya ya—kompresi dapat menurunkan rata-rata; makeup mengembalikannya dengan proteksi peak. Pilih Nonaktif untuk puncak lebih pelan saja.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "Apakah audio saya diunggah ke server?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "Tidak. Dekode, kompresi, dan penulisan WAV berjalan di browser pada perangkat Anda. Perlu jaringan saat pertama dimuat; offline tidak dijamin. Untuk loudness atau gain: Match podcast loudness to −16 LUFS atau Make a quiet recording louder.",
};
export default id;
