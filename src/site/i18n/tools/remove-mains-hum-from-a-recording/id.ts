import type { SiteLangDict } from '../../../types';

/**
 * Indonesian copy for remove-mains-hum-from-a-recording (S26).
 * How≥4, Why≥4, Rules≥4, FAQ≥6; ≠ denoise / declick / EQ.
 */
const id: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "Hapus dengung listrik dari rekaman",
  tool_remove_mains_hum_from_a_recording_desc:
    "Potong dengung listrik 50 atau 60 Hz dengan filter notch dan harmonik opsional, lalu unduh WAV 16-bit. Hanya di perangkat.",
  tool_remove_mains_hum_from_a_recording_description:
    "Hapus dengung listrik dari rekaman dengan filter notch 50 atau 60 Hz dan harmonik ke-2–ke-5 opsional. Langkah: Dehum, pratinjau, unduh WAV. Contoh: muat sampel yang mendengung. Notch sempit untuk dengung listrik—bukan denoise pita lebar, bukan declick, bukan EQ suara teredam. Audio tetap di perangkat Anda; tidak pernah diunggah.",
  tool_remove_mains_hum_from_a_recording_article: "Rekaman dekat catu daya, dimmer, atau peralatan yang kurang grounding sering menangkap dengung listrik stabil 50 atau 60 Hz, kadang dengan harmonik. Halaman ini merangkai tahap notch EQ filter di on-device audio processing pada fundamental yang dipilih dan, opsional, harmonik ke-2 hingga ke-5 di bawah Nyquist. Menarget nada listrik sempit—bukan denoise desis kipas pita lebar, bukan perbaikan klik, dan bukan EQ tiga pita untuk suara teredam. Bass dekat notch bisa sedikit menipis. Jumlah saluran tetap 1 atau 2. Simpan file asli; unduhan adalah WAV 16-bit baru. Pekerjaan berjalan di browser pada perangkat Anda.",
  tool_remove_mains_hum_from_a_recording_choose: "Pilih file audio",
  tool_remove_mains_hum_from_a_recording_hint: "Jatuhkan satu WAV, MP3, M4A, AAC, atau OGG. Maksimum 40 MiB dan 10 menit; mono atau stereo.",
  tool_remove_mains_hum_from_a_recording_convert: "Dehum",
  tool_remove_mains_hum_from_a_recording_download: "Unduh WAV",
  tool_remove_mains_hum_from_a_recording_sample: "Muat sampel",
  tool_remove_mains_hum_from_a_recording_clear: "Hapus",
  tool_remove_mains_hum_from_a_recording_advanced: "Frekuensi listrik dan harmonik",
  tool_remove_mains_hum_from_a_recording_hz_label: "Frekuensi listrik",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Hz",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Hz",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "Harmonik",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "Hanya fundamental",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "Sertakan harmonik",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "Default 50 Hz dengan harmonik menotch fundamental plus ke-2–ke-5 di bawah Nyquist. Pilih 60 Hz untuk Amerika Utara dan jaringan serupa. Hanya fundamental lebih lembut pada bass dekat.",
  tool_remove_mains_hum_from_a_recording_progress: "Progres dehum",
  tool_remove_mains_hum_from_a_recording_read: "Baca",
  tool_remove_mains_hum_from_a_recording_decode: "Dekode",
  tool_remove_mains_hum_from_a_recording_dehum: "Dehum",
  tool_remove_mains_hum_from_a_recording_write: "Tulis",
  tool_remove_mains_hum_from_a_recording_done: "Siap. Pratinjau WAV yang sudah didehum, lalu Unduh WAV.",
  tool_remove_mains_hum_from_a_recording_failed: "Dehum gagal. Coba file audio valid yang lebih kecil.",
  tool_remove_mains_hum_from_a_recording_elapsed: "{s}d berlalu",
  tool_remove_mains_hum_from_a_recording_preview: "Dengarkan WAV yang sudah didehum",
  tool_remove_mains_hum_from_a_recording_result: "{seconds}d · {hz} Hz · {harmonics} · {notches} notch · WAV {output} KiB",
  tool_remove_mains_hum_from_a_recording_sample_name: "demo-dengung-listrik-tiga-detik",
  tool_remove_mains_hum_from_a_recording_empty: "Pilih file audio atau muat sampel terlebih dahulu.",
  tool_remove_mains_hum_from_a_recording_err_file: "Jatuhkan tepat satu file audio.",
  tool_remove_mains_hum_from_a_recording_err_format: "Audio tidak didukung atau rusak. Gunakan file yang dapat didekode browser (WAV, MP3, M4A, AAC, atau OGG).",
  tool_remove_mains_hum_from_a_recording_err_limit: "Gunakan file tidak lebih dari 40 MiB atau 10 menit, dengan satu atau dua saluran.",
  tool_remove_mains_hum_from_a_recording_err_decode: "Browser tidak dapat mendekode audio ini. Coba rekaman valid lain.",
  tool_remove_mains_hum_from_a_recording_err_encoder: "Tidak dapat menulis WAV yang sudah didehum. Periksa frekuensi dan harmonik, lalu coba Dehum lagi.",
  tool_remove_mains_hum_from_a_recording_err_silence: "Level hampir sunyi—tidak ada yang perlu didehum. Coba rekaman dengan level terdengar.",
  tool_remove_mains_hum_from_a_recording_how_title: "Cara menghapus dengung listrik dari rekaman",
  tool_remove_mains_hum_from_a_recording_how_body:
    "Pilih 50 atau 60 Hz, tentukan harmonik, jalankan notch, dengarkan, lalu unduh WAV 16-bit—tanpa mengunggah file.",
  tool_remove_mains_hum_from_a_recording_how_item_1: "Pilih file audio, atau pilih Muat sampel untuk demonstrasi dengung tiga detik.",
  tool_remove_mains_hum_from_a_recording_how_item_2: "Buka Frekuensi listrik dan harmonik: pilih 50 atau 60 Hz, lalu Hanya fundamental atau Sertakan harmonik.",
  tool_remove_mains_hum_from_a_recording_how_item_3: "Klik Dehum dan tunggu Baca → Dekode → Dehum → Tulis selesai.",
  tool_remove_mains_hum_from_a_recording_how_item_4: "Pratinjau lantai listrik yang lebih tenang, periksa baris hasil, lalu klik Unduh WAV.",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "Mengapa memilih alat Hapus dengung listrik dari rekaman kami",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "Lihat Hz listrik, mode harmonik, jumlah notch, dan KiB keluaran sebelum menyimpan.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "Satu pekerjaan dehum yang jelas—notch 50/60 Hz dengan harmonik opsional, bukan rak DAW tersembunyi.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "Dekode, filtrasi notch, dan penulisan WAV berjalan di perangkat Anda; halaman tidak mengunggah rekaman untuk diproses.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "Mengubah frekuensi, harmonik, atau input menghapus unduhan lama agar Anda tidak menyimpan WAV usang.",
  tool_remove_mains_hum_from_a_recording_rules_title: "Frekuensi notch, harmonik, dan batas jujur browser",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "Setiap proses merangkai filter notch sempit pada fundamental yang dipilih dan, jika diaktifkan, harmonik 2–5 di bawah Nyquist. Nada listrik sejati paling membaik; desis pita lebar perlu denoise di tempat lain. Perlindungan puncak lembut menjaga WAV di bawah skala penuh.",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 Hz atau 60 Hz menetapkan fundamental. Sertakan harmonik menambah notch di 2×–5× di bawah Nyquist. Default: 50 Hz dengan harmonik.",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "Ini rantai notch browser. Bukan denoise pita lebar, bukan perbaikan klik, dan bukan EQ suara teredam.",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "Ekspor mempertahankan 1 atau 2 saluran. Tag tidak disalin. File asli tidak pernah ditimpa.",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "Satu file hingga 40 MiB dan sepuluh menit. Bass dekat notch bisa menipis; jika terdengar berongga, coba Hanya fundamental.",
  tool_remove_mains_hum_from_a_recording_example_title: "Coba klip dengung nyata",
  tool_remove_mains_hum_from_a_recording_example:
    "Muat sampel membuat nada mirip ucapan tiga detik di bawah dengung 50 Hz plus harmonik, lalu Dehum otomatis pada 50 Hz dengan harmonik. Pemutaran tidak pernah mulai sendiri—tekan putar pada pratinjau jika ingin mendengar lantai yang lebih tenang.",
  tool_remove_mains_hum_from_a_recording_usecases_title: "Kapan ini membantu",
  tool_remove_mains_hum_from_a_recording_usecase_1: "Catatan suara dengan dengung listrik stabil dari charger atau dimmer—pilih Hz jaringan Anda, Dehum, unduh WAV.",
  tool_remove_mains_hum_from_a_recording_usecase_2: "Rekaman lapangan yang perlu menghilangkan nada listrik sebelum denoise desis pita lebar atau EQ suara teredam di tempat lain.",
  tool_remove_mains_hum_from_a_recording_usecase_3: "Dengung 50/60 Hz dari listrik terdengar di bawah take.",
  tool_remove_mains_hum_from_a_recording_faq_q1: "Apakah sama dengan kurangi noise latar pada memo suara?",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "Tidak. Halaman itu high-pass dan gate desis kipas atau AC yang stabil. Halaman ini menotch nada listrik sempit 50/60 Hz. Gunakan Kurangi noise latar pada memo suara untuk desis pita lebar.",
  tool_remove_mains_hum_from_a_recording_faq_q2: "Apakah ini menghapus klik dan pop?",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "Tidak. Klik, pop mulut, dan retak vinil butuh pekerjaan declick. Halaman ini hanya menotch fundamental listrik dan harmonik opsional.",
  tool_remove_mains_hum_from_a_recording_faq_q3: "Apakah sama dengan EQ a muffled voice recording?",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "Tidak. Halaman itu membentuk nada dengan Clarity, Warmth, atau Presence. Halaman ini menghapus dengung listrik. Untuk nada teredam setelah dehum, gunakan EQ a muffled voice recording.",
  tool_remove_mains_hum_from_a_recording_faq_q4: "Haruskah saya memilih 50 Hz atau 60 Hz?",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "Sesuaikan dengan jaringan listrik Anda. Sebagian besar Eropa, Asia, Afrika, dan Australia memakai 50 Hz. Amerika Utara dan bagian Jepang serta Amerika Selatan memakai 60 Hz. Hz salah hampir tidak menyentuh dengung.",
  tool_remove_mains_hum_from_a_recording_faq_q5: "Apa yang dilakukan Sertakan harmonik?",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "Menambah notch pada dua hingga lima kali fundamental ketika frekuensi itu di bawah Nyquist. Dengung sering punya harmonik; Hanya fundamental lebih lembut pada bass dekat.",
  tool_remove_mains_hum_from_a_recording_faq_q6: "Apakah audio saya diunggah ke server?",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "Tidak. Dekode, filtrasi notch, dan penulisan WAV berjalan di browser pada perangkat Anda. Halaman butuh jaringan saat pertama dimuat; ketersediaan offline tidak dijamin. Untuk desis pita lebar gunakan Kurangi noise latar pada memo suara; untuk nada teredam gunakan EQ a muffled voice recording.",
};
export default id;
