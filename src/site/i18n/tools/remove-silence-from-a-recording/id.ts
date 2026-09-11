/**
 * i18n tool shard (remove-silence-from-a-recording / id).
 * H1: Hapus keheningan dari rekaman.
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: hapus keheningan / buang jeda sunyi. */
const id: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: 'Pengaturan lanjutan (opsional)',
  tool_remove_silence_from_a_recording_article:
    'Hapus keheningan dari rekaman di tab ini: buka berkas lokal, klik Hapus keheningan, lalu ekspor WAV atau MP3. Jeda panjang dipotong; suara dijahit jadi satu berkas lebih pendek, tanpa unggah ke server.',
  tool_remove_silence_from_a_recording_bitrate: 'Bitrate MP3',
  tool_remove_silence_from_a_recording_bitrate_hint: 'Bawaan 128 kbps. Hanya dipakai saat Ekspor MP3.',
  tool_remove_silence_from_a_recording_choose_file: 'Pilih berkas audio',
  tool_remove_silence_from_a_recording_clear: 'Hapus',
  tool_remove_silence_from_a_recording_desc:
    'Buang jeda sunyi dari rekaman lokal dan unduh WAV atau MP3 yang lebih pendek; tetap di perangkat, tanpa unggah ke server.',
  tool_remove_silence_from_a_recording_description:
    'Hapus keheningan dari rekaman di perangkat Anda: potong jeda panjang, tetap satu berkas lebih pendek, lalu unduh WAV atau MP3 — tanpa unggah ke server. Langkah: buka rekaman, klik Hapus keheningan (−40 dB / 0,5 d / 0,15 d disisakan), Ekspor WAV atau Ekspor MP3. Contoh: 5,00 detik dengan dua jeda 1,20 detik jadi sekitar 2,90 detik. Cari buang jeda sunyi, potong bagian senyap, atau hapus silence audio, itu pekerjaan yang sama. Bukan ZIP pecahan, bukan video tanpa suara.',
  tool_remove_silence_from_a_recording_drop_hint: 'Atau jatuhkan WAV, MP3, M4A, atau OGG di sini. Proses tetap di tab ini.',
  tool_remove_silence_from_a_recording_empty: 'Pilih berkas audio dulu.',
  tool_remove_silence_from_a_recording_err_caps:
    'Berkas melebihi batas perangkat ini (sekitar 40 MB / 20 menit di desktop, 20 MB / 8 menit di layar sempit). Pendekkan dulu atau pakai berkas lebih pendek.',
  tool_remove_silence_from_a_recording_err_decode:
    'Peramban ini tidak bisa mendekode berkas itu. Coba WAV atau MP3, atau klip tanpa DRM.',
  tool_remove_silence_from_a_recording_err_empty: 'Tidak ada yang diproses. Muat berkas atau contoh.',
  tool_remove_silence_from_a_recording_err_empty_keep:
    'Tidak ada audio tersisa. Turunkan ambang (lebih negatif) atau naikkan jeda minimum agar ucapan tidak dianggap sunyi.',
  tool_remove_silence_from_a_recording_err_lame: 'Encoder MP3 gagal dimuat. Tetap di tab ini dan coba Ekspor MP3 lagi.',
  tool_remove_silence_from_a_recording_err_video:
    'Halaman ini tidak menerima video sebagai masukan utama. Ia memendekkan berkas suara; tidak membisukan video.',
  tool_remove_silence_from_a_recording_example:
    'Muat contoh membuat nada 5,00 detik dengan dua jeda 1,20 detik (0,80 + 1,20 + 0,80 + 1,20 + 1,00). Hapus keheningan pada −40 dB / 0,5 d / 0,15 d menghasilkan sekitar 2,90 detik. WAV menulis PCM; MP3 memakai 128 kbps kecuali diubah di pengaturan lanjutan.',
  tool_remove_silence_from_a_recording_example_title: 'Contoh',
  tool_remove_silence_from_a_recording_export_mp3: 'Ekspor MP3',
  tool_remove_silence_from_a_recording_export_wav: 'Ekspor WAV',
  tool_remove_silence_from_a_recording_faq_a1:
    'Tidak. Dekode dan potong berjalan di tab ini. Skrip dari situs ini. Berkas tidak dikirim ke server kami.',
  tool_remove_silence_from_a_recording_faq_a2:
    'Pekerjaan yang sama. Hapus keheningan, buang jeda sunyi, potong bagian senyap, atau hapus silence audio artinya memotong celah sepi dan mengekspor satu WAV atau MP3 lebih pendek.',
  tool_remove_silence_from_a_recording_faq_a3:
    'Mulai dari Ucapan (−40 dB / 0,5 d / 0,15 d). Ruang ramai: ambang ke −30 dB, minimum ke 0,8 d. Studio: Lembut (−50 dB). Jika ujung kata terpotong, buat ambang lebih negatif atau naikkan minimum.',
  tool_remove_silence_from_a_recording_faq_a4:
    'Potong klip artinya Anda menandai awal dan akhir. Di sini celah di tengah juga dibuang lalu dijahit satu berkas. Hanya tepi secara manual: pakai pemotong klip.',
  tool_remove_silence_from_a_recording_faq_a5:
    'Tidak. Memecah di keheningan menjadi banyak berkas atau ZIP adalah tugas lain. Di sini selalu satu berkas.',
  tool_remove_silence_from_a_recording_faq_a6:
    'Tidak. Pengurangan bising tidak memendekkan durasi. Menghapus «um» butuh transkrip. Membisukan video atau unduh YouTube di luar cakupan. Pakai audio yang Anda berhak olah.',
  tool_remove_silence_from_a_recording_faq_a7:
    'Tugas sama, perangkat lunak beda. Truncate Silence Audacity memendekkan bagian di bawah ambang yang cukup lama. Di sini di peramban; bukan panduan pasang Audacity.',
  tool_remove_silence_from_a_recording_faq_a8:
    'Desktop: sekitar 40 MB atau 20 menit. Layar sempit: sekitar 20 MB atau 8 menit. Di atas itu ditolak sebelum dekode. Musik pelan bisa terpotong keliru — naikkan jeda minimum atau jangan pakai alat ini.',
  tool_remove_silence_from_a_recording_faq_q1: 'Apakah rekaman diunggah ke server?',
  tool_remove_silence_from_a_recording_faq_q2: 'Saya mencari hapus keheningan atau buang jeda sunyi. Apakah alat lain?',
  tool_remove_silence_from_a_recording_faq_q3: 'Ambang berapa? Apakah napas ikut terpotong?',
  tool_remove_silence_from_a_recording_faq_q4: 'Saya hanya ingin memotong awal dan akhir. Apakah ini pemotong audio?',
  tool_remove_silence_from_a_recording_faq_q5: 'Apakah rekaman dipecah jadi banyak berkas?',
  tool_remove_silence_from_a_recording_faq_q6: 'Bisa kurangi bising, hapus um, bisukan video, atau unduh YouTube?',
  tool_remove_silence_from_a_recording_faq_q7: 'Sama dengan Truncate Silence Audacity?',
  tool_remove_silence_from_a_recording_faq_q8: 'Seberapa besar berkasnya? Bagaimana musik pelan?',
  tool_remove_silence_from_a_recording_how_body:
    'Temukan jeda yang cukup panjang, pendekkan, jahit ucapan jadi satu berkas, lalu unduh WAV atau MP3 tanpa unggah ke server.',
  tool_remove_silence_from_a_recording_how_item_1: 'Buka rekaman (atau klik Muat contoh).',
  tool_remove_silence_from_a_recording_how_item_2: 'Biarkan bawaan, atau buka Pengaturan lanjutan (opsional) untuk ambang dan jeda minimum.',
  tool_remove_silence_from_a_recording_how_item_3: 'Klik Hapus keheningan.',
  tool_remove_silence_from_a_recording_how_item_4: 'Klik Ekspor WAV atau Ekspor MP3.',
  tool_remove_silence_from_a_recording_how_title: 'Cara kerjanya',
  tool_remove_silence_from_a_recording_hud_cut: 'Memotong jeda dan menjahit satu berkas…',
  tool_remove_silence_from_a_recording_hud_decode: 'Mendekode berkas di tab ini…',
  tool_remove_silence_from_a_recording_hud_decoded: 'Selesai dekode. Merah menandai jeda. Klik Hapus keheningan.',
  tool_remove_silence_from_a_recording_hud_detect: 'Mengukur jendela sunyi…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: '{s}d berlalu',
  tool_remove_silence_from_a_recording_hud_encode: 'Mengode MP3…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'Perbaiki berkas atau pengaturan, lalu Hapus keheningan lagi.',
  tool_remove_silence_from_a_recording_hud_fail_title: 'Hapus keheningan berhenti',
  tool_remove_silence_from_a_recording_hud_next: 'Selesai. Lanjut: Ekspor WAV atau Ekspor MP3.',
  tool_remove_silence_from_a_recording_hud_next_mp3: 'Selesai. Unduhan MP3 seharusnya mulai.',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'Potong',
  tool_remove_silence_from_a_recording_hud_step_decode: 'Dekode',
  tool_remove_silence_from_a_recording_hud_step_detect: 'Deteksi',
  tool_remove_silence_from_a_recording_hud_step_encode: 'Kode',
  tool_remove_silence_from_a_recording_hud_title: 'Progres hapus keheningan',
  tool_remove_silence_from_a_recording_hud_working: 'Mulai…',
  tool_remove_silence_from_a_recording_keep: 'Sisakan di tiap jeda (detik)',
  tool_remove_silence_from_a_recording_keep_hint: 'Bawaan 0,15 d agar potongan tidak terasa lompat. 0 membuang seluruh jeda.',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}d · {rate} Hz · {ch} ch',
  tool_remove_silence_from_a_recording_min_silence: 'Jeda minimum (detik)',
  tool_remove_silence_from_a_recording_min_silence_hint: 'Bawaan 0,5 d. Jeda lebih pendek antar kata tetap.',
  tool_remove_silence_from_a_recording_pause: 'Jeda',
  tool_remove_silence_from_a_recording_play: 'Putar',
  tool_remove_silence_from_a_recording_preset_gentle: 'Lembut',
  tool_remove_silence_from_a_recording_preset_hint: 'Ucapan adalah awal. Lembut menyisakan lebih banyak jeda. Ketat memotong lebih banyak.',
  tool_remove_silence_from_a_recording_preset_speech: 'Ucapan',
  tool_remove_silence_from_a_recording_preset_tight: 'Ketat',
  tool_remove_silence_from_a_recording_preview_hint: 'Pita merah adalah jeda yang cukup panjang untuk dipotong. Putar mendengar berkas saat ini (atau hasilnya).',
  tool_remove_silence_from_a_recording_remove: 'Hapus keheningan',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}d → {next}d. Dibuang {removed}d ({pct}%) di {gaps} jeda. Siap ekspor.',
  tool_remove_silence_from_a_recording_rules_body:
    'Kira-kira tiap 50 md diukur RMS lalu levelDb = 20 × log10(rms). Bagian di bawah ambang yang lebih lama dari jeda minimum dipendekkan ke sisa, lalu ucapan disambung. WAV adalah PCM 16-bit. MP3 adalah CBR.',
  tool_remove_silence_from_a_recording_rules_item_1:
    'Ucapan: −40 dB, minimum 0,5 d, sisa 0,15 d. Ruang ramai: −30 dB / 0,8 d / 0,20 d. Studio: −50 dB / 0,4 d / 0,15 d.',
  tool_remove_silence_from_a_recording_rules_item_2:
    'Batas desktop sekitar 40 MB atau 20 menit; layar sempit sekitar 20 MB atau 8 menit. Di atas itu ditolak, tidak dipotong diam-diam.',
  tool_remove_silence_from_a_recording_rules_item_3:
    'Berkas tetap di perangkat, tanpa unggah ke server. Encoder MP3 dimuat dari situs ini hanya setelah Ekspor MP3.',
  tool_remove_silence_from_a_recording_rules_item_4:
    'Dekode bergantung pada peramban. DRM, beberapa codec, dan wadah video gagal dengan pesan jelas.',
  tool_remove_silence_from_a_recording_rules_item_5:
    'Satu berkas. Bukan ZIP, bukan kurangi bising, bukan hapus um, bukan bisukan video, bukan YouTube.',
  tool_remove_silence_from_a_recording_rules_title: 'Aturan yang berlaku',
  tool_remove_silence_from_a_recording_sample: 'Muat contoh',
  tool_remove_silence_from_a_recording_status_done: 'Selesai.',
  tool_remove_silence_from_a_recording_threshold: 'Ambang keheningan (dB)',
  tool_remove_silence_from_a_recording_threshold_hint: 'Bawaan −40 dB. Semakin dekat ke 0, semakin banyak yang dianggap sunyi.',
  tool_remove_silence_from_a_recording_title: 'Hapus keheningan dari rekaman',
  tool_remove_silence_from_a_recording_usecase_1:
    'Buang jeda panjang di podcast dua orang dan tetap satu episode lebih pendek.',
  tool_remove_silence_from_a_recording_usecase_2:
    'Pendekkan rekaman rapat tanpa bicara lalu ekspor satu MP3.',
  tool_remove_silence_from_a_recording_usecase_3:
    'Bersihkan jeda berpikir di memo suara dan kirim satu berkas.',
  tool_remove_silence_from_a_recording_usecases_title: 'Cocok untuk',
  tool_remove_silence_from_a_recording_why_choose_body:
    'Untuk satu berkas lebih pendek, dengan tabel ambang dan detik yang dibuang terlihat di halaman.',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    'Jeda dipotong dan ucapan dijahit jadi satu berkas; bukan ZIP klip.',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    'Bawaan ucapan (−40 dB / 0,5 d / 0,15 d) cocok untuk suara; baris hasil menampilkan detik yang dibuang.',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'Berkas tetap di tab peramban ini, tanpa unggah ke server; encoder MP3 hanya dimuat saat diklik.',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    'Berkas terlalu besar atau panjang ditolak sebelum dekode, tanpa janji 1 GB yang merusak tab.',
  tool_remove_silence_from_a_recording_why_choose_title: 'Mengapa memakai Hapus keheningan dari rekaman',
};
export default id;
