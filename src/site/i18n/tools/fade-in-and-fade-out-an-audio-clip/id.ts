import type { SiteLangDict } from '../../../types';

/**
 * Indonesian copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Edge fades; ≠ seamless loop wrap (S5), ≠ limiter/EQ.
 */
const id: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "Fade in dan fade out pada klip audio",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "Haluskan awal dan akhir mendadak dengan chip 0,5–3 dtk serta kurva linear atau equal-power, lalu unduh WAV 16-bit. Hanya di perangkat.",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "Fade in dan fade out pada klip audio dengan chip 0,5, 1, 2, atau 3 detik di tiap ujung serta kurva linear atau equal-power. Langkah: Fade, pratinjau, unduh WAV. Contoh: muat sampel mendadak. Hanya tepi—bukan wrap crossfade untuk loop mulus, bukan limiter atau EQ. Audio tetap di perangkat Anda; tidak pernah diunggah.",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "Potongan keras di awal atau akhir berbunyi klik di speaker dan terasa mendadak di timeline. Halaman ini menerapkan envelope fade-in di kepala dan fade-out di ekor. Pilih 0,5, 1, 2, atau 3 dtk per ujung, lalu Linear atau Equal-power. Jika jumlah melebihi panjang, kedua sisi menyusut proporsional. Ini fade tepi pada satu klip—bukan membungkus ekor ke kepala untuk loop mulus, bukan membatasi puncak, dan bukan EQ. Saluran tetap 1 atau 2. Simpan asli; unduhan adalah WAV 16-bit baru. Pekerjaan berjalan di browser pada perangkat Anda.",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "Pilih file audio",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "Jatuhkan satu WAV, MP3, M4A, AAC, atau OGG. Maksimum 40 MiB dan 10 menit; mono atau stereo.",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "Fade",
  tool_fade_in_and_fade_out_an_audio_clip_download: "Unduh WAV",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "Muat sampel",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "Hapus",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "Pengaturan fade",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "Fade in",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "Fade out",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "Kurva",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "Linear",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "Equal-power",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "Default 1 dtk in, 1 dtk out, Equal-power. Chip pendek cocok untuk drum; panjang untuk pad dan suara. Jika melebihi panjang, keduanya menyusut bersama.",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "Progres fade",
  tool_fade_in_and_fade_out_an_audio_clip_read: "Baca",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "Dekode",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "Fade",
  tool_fade_in_and_fade_out_an_audio_clip_write: "Tulis",
  tool_fade_in_and_fade_out_an_audio_clip_done: "Siap. Pratinjau WAV yang di-fade, lalu Unduh WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "Fade gagal. Coba file audio valid yang lebih kecil.",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "{s} dtk berlalu",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "Dengarkan WAV yang di-fade",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds} dtk · in {fadeIn}s · out {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "demo-mendadak-empat-detik",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "Pilih file audio atau muat sampel terlebih dahulu.",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "Jatuhkan tepat satu file audio.",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "Audio tidak didukung atau rusak. Gunakan file yang dapat didekode browser (WAV, MP3, M4A, AAC, atau OGG).",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "Gunakan file tidak lebih dari 40 MiB atau 10 menit, dengan satu atau dua saluran.",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "Browser tidak dapat mendekode audio ini. Coba rekaman valid lain.",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "Tidak dapat menulis WAV yang di-fade. Periksa pengaturan, lalu coba Fade lagi.",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "Level hampir sunyi—tidak ada yang di-fade. Coba rekaman dengan level terdengar.",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "Klip terlalu pendek untuk fade yang bermakna. Gunakan file lebih dari sekitar 50 ms.",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "Cara fade in dan fade out pada klip audio",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "Pilih durasi dan kurva, terapkan, dengarkan, lalu unduh WAV 16-bit—tanpa mengunggah file.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "Pilih file audio, atau Muat sampel untuk demo mendadak empat detik.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "Buka Pengaturan fade dan pilih chip fade-in serta fade-out (0,5 / 1 / 2 / 3 dtk). Default masing-masing 1 dtk.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "Pilih Linear atau Equal-power (default), klik Fade, dan tunggu Baca → Dekode → Fade → Tulis.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "Pratinjau awal dan akhir lembut, periksa baris hasil, lalu klik Unduh WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title: "Mengapa memilih alat Fade in dan fade out pada klip audio kami",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "Lihat detik fade-in/out, nama kurva, dan KiB keluaran sebelum menyimpan.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "Chip durasi jelas dan dua kurva—satu pekerjaan tepi, bukan wrap loop mulus atau rantai limiter/EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "Dekode, envelope, dan penulisan WAV berjalan di perangkat Anda; halaman tidak mengunggah rekaman Anda.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "Mengubah chip, kurva, atau input menghapus unduhan lama agar tidak menyimpan WAV usang.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "Durasi, kurva, dan batas",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "Fade-in naik dari sunyi; fade-out turun ke sunyi. Linear adalah ramp lurus; Equal-power memakai sinus/kosinus. Permintaan yang tumpang tindih menyusut proporsional.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "Tiap ujung menawarkan 0,5, 1, 2, atau 3 detik. Default: 1 dtk / 1 dtk dan Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "Hanya memfade tepi satu klip. Tidak membungkus ekor ke kepala untuk loop mulus, tidak membatasi puncak, dan tidak EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "Ekspor mempertahankan 1 atau 2 saluran. Tag tidak disalin. File asli tidak pernah ditimpa.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "Satu file hingga 40 MiB dan sepuluh menit. Jika jumlah melebihi panjang, kedua sisi mengecil bersama.",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "Coba fade tepi sungguhan",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "Muat sampel membuat nada empat detik yang mulai dan berhenti mendadak, lalu Fade otomatis di 1 dtk / 1 dtk Equal-power. Pemutaran tidak mulai sendiri—tekan putar di pratinjau jika ingin mendengar tepi lembut.",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "Kapan ini membantu",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "Voiceover atau music bed yang berklik di potongan—pilih 1 dtk / 1 dtk, Fade, unduh WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "Klip yang butuh tepi lembut sebelum dipotong di tempat lain atau dimasukkan timeline—tanpa membangun loop mulus.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_3: "Nada dering atau bumper mulai/akhir mendadak dan butuh tepi lembut.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "Apakah sama dengan Membuat loop audio mulus?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "Tidak. Alat itu membungkus ekor terpilih ke kepala dengan crossfade agar sambungan loop bersih. Halaman ini hanya menghaluskan awal dan akhir satu klip. Untuk loop mulus, gunakan Membuat loop audio mulus.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "Apakah ini membatasi puncak atau melakukan EQ?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "Tidak. Hanya mengalikan sampel dengan envelope fade. Untuk limiting, boost bass, atau EQ suara redup, gunakan alat khusus.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "Equal-power versus Linear?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "Linear meramp gain secara lurus. Equal-power memakai sinus untuk fade-in dan bentuk kosinus yang cocok untuk fade-out agar kekerasan terdengar lebih halus. Default: Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "Bagaimana jika 3 dtk + 3 dtk lebih panjang dari klip?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "Kedua ujung menyusut proporsional agar jumlah tidak melebihi panjang. Baris hasil menampilkan detik yang benar-benar diterapkan.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "Bisakah hanya memfade satu ujung?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "Chip mengatur kedua ujung; gunakan chip terpendek (0,5 dtk) pada ujung yang hampir tidak ingin disentuh, atau potong dulu dengan Pangkas klip audio dan ekspor.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "Apakah audio saya diunggah ke server?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "Tidak. Dekode, fade, dan penulisan WAV berjalan di browser pada perangkat Anda. Halaman butuh jaringan saat dimuat pertama kali; offline tidak dijamin. Untuk loop mulus atau potong panjang, gunakan alat khusus.",
};
export default id;
