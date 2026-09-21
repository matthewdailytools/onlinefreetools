import type { SiteLangDict } from '../../../types';

/**
 * Indonesian copy for join-audio-files-in-order (F7 A2).
 * Gabungkan file audio berurutan; ≠ overlay mix; ≠ crossfade.
 */
const id: SiteLangDict = {
  tool_join_audio_files_in_order_title: 'Gabungkan file audio berurutan',
  tool_join_audio_files_in_order_desc:
    'Gabungkan beberapa klip lokal ujung ke ujung sesuai urutan daftar, lalu unduh satu WAV 16-bit. Hanya di perangkat—bukan overlay mix.',
  tool_join_audio_files_in_order_description:
    'Gabungkan beberapa file audio lokal ujung ke ujung sesuai urutan daftar di browser, lalu unduh satu WAV 16-bit. Langkah: Tambah klip, susun ulang jika perlu, Gabungkan, pratinjau, unduh. Contoh: muat dua nada sampel pendek. Hanya concat—bukan overlay mix, bukan crossfade. Tidak pernah diunggah.',
  tool_join_audio_files_in_order_article:
    'Take podcast, memo suara, dan bagian lagu sering perlu menjadi satu file berkelanjutan. Halaman ini memungkinkan Anda menjatuhkan beberapa file lokal, menyusun ulang di daftar, mendekode setiap klip di browser, menyelaraskan laju sampel dan saluran, lalu menggabungkan sampel dalam urutan itu menjadi satu WAV PCM 16-bit. Halaman ini tidak menumpuk trek sekaligus (overlay), tidak melakukan crossfade antar lagu, dan tidak mengekstrak audio dari video. Keberhasilan bergantung pada apakah browser dapat mendekode setiap kontainer. Saluran tetap satu atau dua. Simpan aslinya; unduhan adalah file baru. Pekerjaan berjalan di perangkat Anda.',
  tool_join_audio_files_in_order_choose: 'Tambah file audio',
  tool_join_audio_files_in_order_hint:
    'Jatuhkan atau pilih beberapa WAV, MP3, M4A, AAC, atau OGG. Boleh menambah lagi. Maksimal 20 klip, 40 MiB masing-masing, total 20 menit setelah digabung; mono atau stereo.',
  tool_join_audio_files_in_order_list_label: 'Urutan gabung',
  tool_join_audio_files_in_order_move_up: 'Naik',
  tool_join_audio_files_in_order_move_down: 'Turun',
  tool_join_audio_files_in_order_remove: 'Hapus',
  tool_join_audio_files_in_order_convert: 'Gabungkan',
  tool_join_audio_files_in_order_download: 'Unduh WAV',
  tool_join_audio_files_in_order_sample: 'Muat sampel',
  tool_join_audio_files_in_order_clear: 'Hapus semua',
  tool_join_audio_files_in_order_advanced: 'Catatan gabung',
  tool_join_audio_files_in_order_settings_hint:
    'Klip digabung ujung ke ujung sesuai urutan daftar. Laju sampel berbeda diselaraskan ke klip pertama. Hanya concat—bukan overlay dan bukan crossfade.',
  tool_join_audio_files_in_order_progress: 'Progres gabung',
  tool_join_audio_files_in_order_read: 'Baca',
  tool_join_audio_files_in_order_decode: 'Dekode',
  tool_join_audio_files_in_order_join: 'Gabung',
  tool_join_audio_files_in_order_write: 'Tulis',
  tool_join_audio_files_in_order_done: 'Siap. Pratinjau WAV hasil gabung, lalu Unduh WAV.',
  tool_join_audio_files_in_order_failed: 'Gabung gagal. Coba lebih sedikit file, lebih pendek, dan valid.',
  tool_join_audio_files_in_order_elapsed: '{s}d berlalu',
  tool_join_audio_files_in_order_preview: 'Dengarkan WAV hasil gabung',
  tool_join_audio_files_in_order_result:
    '{files} file · {seconds}d · {channels} ch · {rate} Hz · WAV {output} KiB',
  tool_join_audio_files_in_order_sample_name: 'nada-gabung',
  tool_join_audio_files_in_order_empty: 'Tambahkan setidaknya dua file audio atau muat sampel dulu.',
  tool_join_audio_files_in_order_empty_state:
    'Belum ada klip. Jatuhkan beberapa file lokal, atau klik Muat sampel untuk dua nada pendek. Alat ini menggabungkan sesuai urutan daftar—tidak menumpuk trek bersamaan.',
  tool_join_audio_files_in_order_queue_count: '{n} file dalam antrean',
  tool_join_audio_files_in_order_err_file: 'Tambahkan setidaknya dua file audio yang didukung.',
  tool_join_audio_files_in_order_err_format:
    'Audio tidak didukung atau rusak. Gunakan WAV, MP3, M4A, AAC, atau OGG yang dapat didekode browser.',
  tool_join_audio_files_in_order_err_limit:
    'Maksimal 20 file, 40 MiB masing-masing, mono atau stereo, total durasi setelah digabung di bawah 20 menit.',
  tool_join_audio_files_in_order_err_decode:
    'Browser tidak dapat mendekode salah satu file. Hapus atau coba encoding lain.',
  tool_join_audio_files_in_order_err_encoder: 'Tidak dapat menulis WAV hasil gabung. Coba Gabungkan lagi.',
  tool_join_audio_files_in_order_how_title: 'Cara menggabungkan file audio berurutan',
  tool_join_audio_files_in_order_how_body:
    'Tambah beberapa klip lokal, atur urutan, jalankan Gabungkan, dengarkan, lalu unduh WAV 16-bit—tanpa mengunggah file.',
  tool_join_audio_files_in_order_how_item_1:
    'Tambah dua atau lebih file audio (atau Muat sampel untuk dua nada pendek). Jatuhkan lagi untuk menambah.',
  tool_join_audio_files_in_order_how_item_2:
    'Gunakan Naik / Turun / Hapus di daftar agar urutan sesuai yang ingin Anda dengar.',
  tool_join_audio_files_in_order_how_item_3:
    'Klik Gabungkan dan tunggu Baca → Dekode → Gabung → Tulis selesai.',
  tool_join_audio_files_in_order_how_item_4:
    'Pratinjau trek berkelanjutan, periksa baris hasil, lalu klik Unduh WAV.',
  tool_join_audio_files_in_order_why_choose_title: 'Mengapa memilih alat Gabungkan file audio berurutan kami',
  tool_join_audio_files_in_order_why_choose_item_1:
    'Lihat jumlah file, durasi, saluran, laju sampel, dan KiB keluaran sebelum menyimpan.',
  tool_join_audio_files_in_order_why_choose_item_2:
    'Satu pekerjaan concat yang jelas—urutan daftar ujung ke ujung—dengan batas jujur jika klip gagal didekode.',
  tool_join_audio_files_in_order_why_choose_item_3:
    'Membaca, mendekode, dan menulis berjalan di perangkat Anda; halaman tidak mengunggah klip untuk diproses.',
  tool_join_audio_files_in_order_why_choose_item_4:
    'Mengubah antrean menghapus unduhan lama agar Anda tidak menyimpan WAV basi.',
  tool_join_audio_files_in_order_rules_title: 'Aturan concat dan batas browser yang jujur',
  tool_join_audio_files_in_order_rules_body:
    'Setiap proses menggabungkan klip ujung ke ujung sesuai urutan daftar. Laju sampel diselaraskan ke klip pertama. Ekspor adalah WAV 16-bit. Bukan overlay mix, bukan crossfade, dan bukan ekstrak video.',
  tool_join_audio_files_in_order_rules_item_1:
    'Dua hingga dua puluh file audio lokal, masing-masing hingga 40 MiB. Durasi gabungan di bawah dua puluh menit. Saluran satu atau dua.',
  tool_join_audio_files_in_order_rules_item_2:
    'Halaman ini menggabungkan. Tidak menumpuk suara di atas musik sekaligus dan tidak melakukan crossfade antar lagu.',
  tool_join_audio_files_in_order_rules_item_3:
    'Tag tidak disalin. File asli tidak ditimpa. Keberhasilan bergantung pada dukungan dekode browser per file.',
  tool_join_audio_files_in_order_rules_item_4:
    'Setelah digabung, gunakan Pangkas klip audio dan ekspor untuk potongan awal/akhir. Untuk video, ekstrak audio dulu.',
  tool_join_audio_files_in_order_example_title: 'Coba dua nada pendek',
  tool_join_audio_files_in_order_example:
    'Muat sampel menambahkan dua nada WAV pendek (pitch berbeda) ke antrean lalu menjalankan Gabungkan. Anda harus mendengar nada A lalu B tanpa tumpang tindih. Pemutaran tidak dimulai sendiri—tekan putar di pratinjau jika ingin mendengar.',
  tool_join_audio_files_in_order_usecases_title: 'Kapan ini membantu',
  tool_join_audio_files_in_order_usecase_1:
    'Beberapa memo suara harus menjadi satu trek berkelanjutan—tambah berurutan, Gabungkan, unduh WAV.',
  tool_join_audio_files_in_order_usecase_2:
    'Bagian lagu atau bab podcast yang tersimpan terpisah perlu satu ekspor tanpa diunggah ke situs joiner.',
  tool_join_audio_files_in_order_usecase_3: 'Beberapa WAV bab harus jadi satu file berurutan.',
  tool_join_audio_files_in_order_faq_q1: 'Apakah ini sama dengan mencampur atau menumpuk dua trek?',
  tool_join_audio_files_in_order_faq_a1:
    'Tidak. Overlay mix memutar klip bersamaan (misalnya suara di atas musik). Halaman ini hanya menempatkannya satu demi satu sesuai urutan daftar.',
  tool_join_audio_files_in_order_faq_q2: 'Apakah ada crossfade antar lagu?',
  tool_join_audio_files_in_order_faq_a2:
    'Tidak. Tidak ada crossfade atau transisi DJ. Klip bertemu ujung ke ujung. Crossfade adalah pekerjaan lain.',
  tool_join_audio_files_in_order_faq_q3: 'Bisakah saya mengubah urutan gabung?',
  tool_join_audio_files_in_order_faq_a3:
    'Ya. Gunakan Naik dan Turun di setiap baris, atau Hapus lalu tambah lagi. Gabungkan selalu mengikuti daftar dari atas ke bawah.',
  tool_join_audio_files_in_order_faq_q4: 'Bagaimana jika file punya laju sampel berbeda?',
  tool_join_audio_files_in_order_faq_a4:
    'Klip berikutnya diselaraskan ke laju sampel klip pertama sebelum digabung. Saluran tetap mono atau stereo.',
  tool_join_audio_files_in_order_faq_q5: 'Apakah audio saya diunggah ke server?',
  tool_join_audio_files_in_order_faq_a5:
    'Tidak. Membaca, mendekode, dan menulis berjalan di browser pada perangkat Anda. Halaman membutuhkan jaringan saat pertama dimuat; ketersediaan offline tidak dijamin.',
  tool_join_audio_files_in_order_faq_q6: 'Bisakah saya menggabungkan audio yang diekstrak dari video?',
  tool_join_audio_files_in_order_faq_a6:
    'Ekstrak trek dulu dengan Ekstrak audio dari file video, lalu tambahkan audio yang diekspor di sini. Halaman ini tidak menerima kontainer video sebagai input gabung.',
};
export default id;
