import type { SiteLangDict } from '../../../types';

/**
 * Indonesian copy for boost-bass-on-an-mp3 (S21).
 * Low-shelf only; ≠ muffled EQ (S20), ≠ whole-file louder (S15).
 */
const id: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "Tingkatkan bass pada MP3",
  tool_boost_bass_on_an_mp3_desc:
    "Pertebal bass tipis dengan preset Mild, Medium, atau Strong low-shelf, lalu unduh WAV 16-bit. Hanya di perangkat.",
  tool_boost_bass_on_an_mp3_description:
    "Tingkatkan bass pada MP3 dengan preset Mild, Medium, atau Strong low-shelf. Langkah: Tingkatkan, pratinjau, unduh WAV. Contoh: muat sampel bass tipis. Hanya bass low-shelf—bukan EQ multiband penuh, bukan penguat volume seluruh file. Audio tetap di perangkat Anda; tidak pernah diunggah.",
  tool_boost_bass_on_an_mp3_article:
    "Ekspor ponsel dan speaker laptop sering membuat kick dan bassline tipis: cukup midrange, kurang bobot di bawah ~100 Hz. Halaman ini menjalankan satu tahap BiquadFilter lowshelf di OfflineAudioContext. Mild lembut; Medium (default) angkatan harian; Strong lebih berat. Perlindungan puncak lembut menskala jika boost akan clipping. Itu boost bass—bukan EQ tiga pita Clarity/Warmth/Presence untuk suara teredam, dan bukan gain dB datar yang membesarkan semua frekuensi. Saluran tetap 1 atau 2. Simpan master; unduhan adalah WAV 16-bit baru. Pekerjaan berjalan di browser.",
  tool_boost_bass_on_an_mp3_choose: "Pilih file audio",
  tool_boost_bass_on_an_mp3_hint: "Jatuhkan satu WAV, MP3, M4A, AAC, atau OGG. Maksimum 40 MiB dan 10 menit; mono atau stereo.",
  tool_boost_bass_on_an_mp3_convert: "Tingkatkan",
  tool_boost_bass_on_an_mp3_download: "Unduh WAV",
  tool_boost_bass_on_an_mp3_sample: "Muat sampel",
  tool_boost_bass_on_an_mp3_clear: "Hapus",
  tool_boost_bass_on_an_mp3_advanced: "Preset bass",
  tool_boost_bass_on_an_mp3_preset_label: "Preset bass low-shelf",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "Default Medium mengangkat bass sekitar 90 Hz. Mild lebih lembut; Strong lebih berat. Perlindungan puncak mencegah clipping setelah boost.",
  tool_boost_bass_on_an_mp3_progress: "Progres boost bass",
  tool_boost_bass_on_an_mp3_read: "Baca",
  tool_boost_bass_on_an_mp3_decode: "Dekode",
  tool_boost_bass_on_an_mp3_boost: "Tingkatkan",
  tool_boost_bass_on_an_mp3_write: "Tulis",
  tool_boost_bass_on_an_mp3_done: "Siap. Pratinjau WAV yang diboost, lalu Unduh WAV.",
  tool_boost_bass_on_an_mp3_failed: "Boost bass gagal. Coba file audio valid yang lebih kecil.",
  tool_boost_bass_on_an_mp3_elapsed: "{s} dtk berlalu",
  tool_boost_bass_on_an_mp3_preview: "Dengarkan WAV dengan bass ditingkatkan",
  tool_boost_bass_on_an_mp3_result: "{seconds} dtk · {preset} · puncak {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "demo-bass-tipis-dua-detik",
  tool_boost_bass_on_an_mp3_empty: "Pilih file audio atau muat sampel terlebih dahulu.",
  tool_boost_bass_on_an_mp3_err_file: "Jatuhkan tepat satu file audio.",
  tool_boost_bass_on_an_mp3_err_format: "Audio tidak didukung atau rusak. Gunakan file yang dapat didekode browser (WAV, MP3, M4A, AAC, atau OGG).",
  tool_boost_bass_on_an_mp3_err_limit: "Gunakan file maksimal 40 MiB atau 10 menit, dengan satu atau dua saluran.",
  tool_boost_bass_on_an_mp3_err_decode: "Browser tidak dapat mendekode audio ini. Coba rekaman valid lain.",
  tool_boost_bass_on_an_mp3_err_encoder: "Tidak dapat menulis WAV yang diboost. Periksa preset, lalu Tingkatkan lagi.",
  tool_boost_bass_on_an_mp3_err_silence: "Level hampir sunyi—tidak ada yang diboost. Gunakan rekaman yang terdengar.",
  tool_boost_bass_on_an_mp3_how_title: "Cara meningkatkan bass pada MP3",
  tool_boost_bass_on_an_mp3_how_body:
    "Pilih preset low-shelf, angkat bass, dengarkan, lalu unduh WAV 16-bit—tanpa mengunggah file.",
  tool_boost_bass_on_an_mp3_how_item_1: "Pilih file audio, atau Muat sampel untuk demo bass tipis dua detik.",
  tool_boost_bass_on_an_mp3_how_item_2: "Buka Preset bass dan pilih Mild, Medium (default), atau Strong.",
  tool_boost_bass_on_an_mp3_how_item_3: "Klik Tingkatkan dan tunggu Baca → Dekode → Tingkatkan → Tulis selesai.",
  tool_boost_bass_on_an_mp3_how_item_4: "Pratinjau hasil, periksa preset dan puncak, lalu Unduh WAV.",
  tool_boost_bass_on_an_mp3_why_choose_title: "Mengapa memilih alat tingkatkan bass pada MP3 kami",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "Lihat nama preset, puncak sebelum/sesudah, dan KiB keluaran sebelum menyimpan.",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "Tiga preset low-shelf jelas—satu pekerjaan bass, bukan EQ sepuluh pita atau dinding volume datar.",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "Dekode, boost lowshelf, dan penulisan WAV berjalan di perangkat; halaman tidak mengunggah audio Anda.",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "Mengubah preset atau input membersihkan unduhan lama agar tidak menyimpan WAV usang.",
  tool_boost_bass_on_an_mp3_rules_title: "Mild, Medium, Strong, dan batas",
  tool_boost_bass_on_an_mp3_rules_body:
    "Setiap preset adalah satu tahap lowshelf Biquad. Mild lembut; Medium angkatan harian; Strong lebih berat. Perlindungan puncak menskala jika boost akan clipping.",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "Default Medium memakai lowshelf dekat 90 Hz sekitar +8 dB. Mild ~+4 dB; Strong ~+12 dB dengan shelf sedikit lebih rendah.",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "Hanya bass low-shelf. Tidak membentuk ulang mid/tinggi seperti EQ suara teredam, dan tidak memperkuat semua frekuensi seperti volume booster.",
  tool_boost_bass_on_an_mp3_rules_item_3: "Jumlah saluran ekspor tetap 1 atau 2. Tag tidak disalin. File asli tidak ditimpa.",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "Satu file hingga 40 MiB dan sepuluh menit. Setelah Strong, perlindungan puncak dapat menurunkan level keseluruhan agar WAV di bawah skala penuh.",
  tool_boost_bass_on_an_mp3_example_title: "Coba boost bass nyata",
  tool_boost_bass_on_an_mp3_example:
    "Muat sampel membuat nada dua detik kaya mid dengan bass lemah, lalu Tingkatkan otomatis di Medium. Pemutaran tidak dimulai sendiri—tekan play di pratinjau jika ingin mendengar hasil yang lebih berat.",
  tool_boost_bass_on_an_mp3_usecases_title: "Kapan ini membantu",
  tool_boost_bass_on_an_mp3_usecase_1: "Ekspor MP3 terdengar tipis di speaker—pilih Medium, Tingkatkan, unduh WAV.",
  tool_boost_bass_on_an_mp3_usecase_2: "Trek yang butuh bobot kick lebih dalam tanpa membuka EQ grafik penuh atau membesarkan seluruh mix.",
  tool_boost_bass_on_an_mp3_faq_q1: "Apakah sama dengan EQ rekaman suara yang teredam?",
  tool_boost_bass_on_an_mp3_faq_a1:
    "Tidak. Halaman itu memakai preset Clarity/Warmth/Presence tiga pita untuk ucapan teredam. Halaman ini hanya mengangkat frekuensi rendah dengan lowshelf. Untuk EQ suara teredam, gunakan EQ rekaman suara yang teredam.",
  tool_boost_bass_on_an_mp3_faq_q2: "Apakah sama dengan membuat rekaman tenang lebih keras?",
  tool_boost_bass_on_an_mp3_faq_a2:
    "Tidak. Volume booster menskala setiap sampel dengan gain dB yang sama. Halaman ini hanya shelf bass. Untuk gain seluruh file, gunakan Buat rekaman tenang lebih keras.",
  tool_boost_bass_on_an_mp3_faq_q3: "Apa fungsi Mild, Medium, dan Strong?",
  tool_boost_bass_on_an_mp3_faq_a3:
    "Mild adalah lowshelf lembut. Medium (default) angkatan bass harian. Strong shelf lebih berat. Perlindungan puncak mencegah clipping setelah boost.",
  tool_boost_bass_on_an_mp3_faq_q4: "Bagaimana jika Tingkatkan membuat file lebih panas?",
  tool_boost_bass_on_an_mp3_faq_a4:
    "Setelah lowshelf, jika puncak akan melebihi sekitar −0,2 dBFS, perlindungan menskala buffer. Untuk pembatasan puncak khusus, gunakan Batasi puncak agar file tidak clipping.",
  tool_boost_bass_on_an_mp3_faq_q5: "Apakah audio saya diunggah ke server?",
  tool_boost_bass_on_an_mp3_faq_a5:
    "Tidak. Dekode, boost bass, dan penulisan WAV berjalan di browser perangkat Anda. Jaringan diperlukan saat pertama dimuat; offline tidak dijamin.",
  tool_boost_bass_on_an_mp3_faq_q6: "Hanya MP3, atau WAV dan M4A juga?",
  tool_boost_bass_on_an_mp3_faq_a6:
    "Format apa pun yang dapat didekode browser—WAV, MP3, M4A, AAC, atau OGG. Judul memakai pencarian MP3 yang umum; ekspor selalu WAV 16-bit baru.",
};
export default id;
