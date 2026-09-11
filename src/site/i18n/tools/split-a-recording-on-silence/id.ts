/**
 * i18n tool shard (split-a-recording-on-silence / id).
 * Job: split a recording on silence into a ZIP of clips (pecah rekaman pada jeda sunyi).
 */
import type { SiteLangDict } from '../../../types';

/** Indonesian copy: pecah rekaman pada jeda sunyi lalu unduh ZIP berisi klip. */
const id: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: 'Pengaturan lanjutan (opsional)',
  tool_split_a_recording_on_silence_article:
    'Di tab ini Anda bisa bagi audio pada silence: buka berkas di perangkat, klik Pecah pada jeda, lalu Unduh ZIP. Jeda yang cukup panjang dipotong di titik tengah; tiap klip tetap berkas sendiri. Rekaman tetap di perangkat dan tidak diunggah ke server.',
  tool_split_a_recording_on_silence_bitrate: 'Bitrate MP3',
  tool_split_a_recording_on_silence_bitrate_hint: 'Awal 128 kbps. Dipakai hanya jika format ZIP adalah MP3.',
  tool_split_a_recording_on_silence_choose_file: 'Pilih berkas audio',
  tool_split_a_recording_on_silence_clear: 'Hapus',
  tool_split_a_recording_on_silence_clip_download: 'Simpan klip ini',
  tool_split_a_recording_on_silence_clip_play: 'Putar klip',
  tool_split_a_recording_on_silence_clip_row_tpl: 'Klip {n} · {dur}d ({start}s–{end}s)',
  tool_split_a_recording_on_silence_clips_title: 'Klip siap masuk ZIP',
  tool_split_a_recording_on_silence_desc:
    'Potong rekaman di jeda sunyi dan unduh klip ZIP — tetap di perangkat, tanpa unggah ke server.',
  tool_split_a_recording_on_silence_description:
    'Pecah rekaman pada jeda sunyi di perangkat Anda: jeda panjang jadi titik potong, ZIP menampung klip; berkas tidak diunggah ke server. Pencarian bagi audio pada silence, potong rekaman di jeda, deteksi keheningan lalu pecah, atau unduh klip ZIP adalah pekerjaan multi-berkas yang sama. Langkah: buka rekaman, klik Pecah pada jeda (bawaan −40 dB / 1.0 s / 0.3 s klip minimum), Unduh ZIP. Contoh: contoh 5.00 detik dengan dua jeda 1.20 d menjadi tiga klip 1.40 / 2.00 / 1.60 d. Bukan menghapus sunyi jadi satu berkas, bukan potong durasi sama, bukan mute video.',
  tool_split_a_recording_on_silence_download_zip: 'Unduh ZIP',
  tool_split_a_recording_on_silence_drop_hint: 'Atau jatuhkan WAV, MP3, M4A, atau OGG di sini. Proses tetap di tab ini.',
  tool_split_a_recording_on_silence_empty: 'Pilih berkas audio dulu.',
  tool_split_a_recording_on_silence_err_caps:
    'Berkas ini melewati batas ukuran atau durasi perangkat ini (sekitar 40 MB / 20 menit di desktop, 20 MB / 8 menit di layar sempit). Pendekkan di tempat lain atau pakai berkas lebih pendek.',
  tool_split_a_recording_on_silence_err_decode:
    'Peramban ini tidak bisa mendekode berkas itu. Coba WAV atau MP3, atau klip tanpa DRM.',
  tool_split_a_recording_on_silence_err_empty: 'Tidak ada yang diproses. Muat berkas atau contoh dulu.',
  tool_split_a_recording_on_silence_err_lame: 'Encoder MP3 gagal dimuat. Tetap di tab ini dan coba Unduh ZIP lagi.',
  tool_split_a_recording_on_silence_err_no_clips:
    'Tidak ada klip yang cukup panjang. Turunkan panjang klip minimum, atau naikkan sunyi minimum supaya napas pendek tidak jadi titik potong.',
  tool_split_a_recording_on_silence_err_too_many:
    'Lebih dari 50 klip. Naikkan sunyi minimum atau buat ambang lebih negatif supaya jeda berdekatan menyatu, lalu Pecah pada jeda lagi. Halaman menolak, bukan memotong diam-diam.',
  tool_split_a_recording_on_silence_err_video:
    'Video bukan masukan utama. Halaman ini memecah berkas suara di jeda; tidak mematikan suara video atau jump-cut footage.',
  tool_split_a_recording_on_silence_err_zip: 'Pustaka ZIP gagal dimuat. Tetap di tab ini dan coba Unduh ZIP lagi.',
  tool_split_a_recording_on_silence_example:
    'Muat contoh membuat nada 5.00 detik dengan dua jeda sunyi 1.20 d (0.80 + 1.20 + 0.80 + 1.20 + 1.00). Pecah pada jeda di −40 dB / 1.0 s / 0.3 s klip minimum memotong di 1.40 s dan 3.40 s, jadi tiga klip 1.40 / 2.00 / 1.60 d. Unduh ZIP menulis WAV bernama sample-01.wav kecuali Anda pilih MP3 di Pengaturan lanjutan.',
  tool_split_a_recording_on_silence_example_title: 'Contoh angka',
  tool_split_a_recording_on_silence_faq_a1:
    'Tidak. Dekode, deteksi, pecah, dan packing ZIP berjalan di tab ini. Skrip dimuat dari situs ini. Berkas tidak dikirim ke server kami.',
  tool_split_a_recording_on_silence_faq_a2:
    'Ini alatnya. Bagi audio pada silence, potong rekaman di jeda, deteksi keheningan lalu pecah, atau unduh klip ZIP artinya: potong di jeda panjang dan banyak berkas dalam satu ZIP.',
  tool_split_a_recording_on_silence_faq_a3:
    'Pekerjaan lain. Menghapus sunyi dari rekaman merapatkan udara mati menjadi satu berkas lebih pendek. Di sini jeda jadi titik potong dan hasilnya banyak klip. Kalau tidak butuh ZIP, pakai alat satu berkas.',
  tool_split_a_recording_on_silence_faq_a4:
    'Tidak. Potong durasi sama (setiap N detik) adalah tugas lain. Split album lewat cue sheet juga di luar cakupan. Hanya potong jika jeda sunyi cukup lama.',
  tool_split_a_recording_on_silence_faq_a5:
    'Mulai dari Bicara (−40 dB / 1.0 s / 0.3 s klip minimum). Kuliah: Kuliah (−40 dB / 2.0 s). Jeda album: Album (−45 dB / 1.5 s / 1.0 s klip minimum). Kalau napas jadi klip, naikkan sunyi minimum.',
  tool_split_a_recording_on_silence_faq_a6:
    'Isi ZIP bernama {stem}-01.wav (atau .mp3). Anda juga bisa unduh satu klip dari daftar. Batas 50 klip; lebih dari itu pecahan ditolak.',
  tool_split_a_recording_on_silence_faq_a7:
    'Tidak. Bukan denoise, hapus um/uh, mute video, cue/APE, atau rip YouTube. Pakai berkas suara yang haknya sudah Anda miliki.',
  tool_split_a_recording_on_silence_faq_a8:
    'Desktop: sekitar 40 MB atau 20 menit. Layar sempit: sekitar 20 MB atau 8 menit. Melebihi batas ditolak sebelum dekode. Musik dinamis lebar bisa terlihat seperti sunyi — naikkan jeda minimum atau lewati alat ini.',
  tool_split_a_recording_on_silence_faq_q1: 'Apakah rekaman saya diunggah ke server?',
  tool_split_a_recording_on_silence_faq_q2: 'Saya mencari bagi audio pada silence atau unduh klip ZIP. Apa ini alat lain?',
  tool_split_a_recording_on_silence_faq_q3: 'Saya ingin satu berkas lebih pendek tanpa udara mati. Ini penghapus sunyi?',
  tool_split_a_recording_on_silence_faq_q4: 'Apakah dipotong sama rata atau mengikuti cue sheet?',
  tool_split_a_recording_on_silence_faq_q5: 'Ambang mana yang dipakai? Apakah napas ikut terpotong?',
  tool_split_a_recording_on_silence_faq_q6: 'Nama berkasnya apa, dan berapa klip maksimal?',
  tool_split_a_recording_on_silence_faq_q7: 'Bisa denoise, pecah video, ikuti cue, atau rip YouTube?',
  tool_split_a_recording_on_silence_faq_q8: 'Seberapa besar berkas yang bisa diproses? Bagaimana musik pelan?',
  tool_split_a_recording_on_silence_format: 'Format berkas dalam ZIP',
  tool_split_a_recording_on_silence_format_hint: 'WAV adalah PCM lossless. Encoder MP3 baru dimuat saat Anda klik Unduh ZIP.',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    'Cari jeda sunyi yang cukup panjang, potong di titik tengah tiap jeda, lalu unduh ZIP klip tanpa mengirim berkas ke server; semuanya tetap di perangkat.',
  tool_split_a_recording_on_silence_how_item_1: 'Buka rekaman (atau klik Muat contoh).',
  tool_split_a_recording_on_silence_how_item_2: 'Biarkan bawaan, atau buka Pengaturan lanjutan (opsional) untuk ambang dan sunyi minimum.',
  tool_split_a_recording_on_silence_how_item_3: 'Klik Pecah pada jeda.',
  tool_split_a_recording_on_silence_how_item_4: 'Klik Unduh ZIP.',
  tool_split_a_recording_on_silence_how_title: 'Cara kerjanya',
  tool_split_a_recording_on_silence_hud_decode: 'Mendekode berkas di tab ini…',
  tool_split_a_recording_on_silence_hud_decoded: 'Selesai dekode. Tanda merah adalah jeda. Klik Pecah pada jeda jika pengaturan sudah pas.',
  tool_split_a_recording_on_silence_hud_detect: 'Mengukur jendela sunyi…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}d berlalu',
  tool_split_a_recording_on_silence_hud_encode: 'Mengode klip MP3…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'Perbaiki berkas atau pengaturan, lalu Pecah pada jeda lagi.',
  tool_split_a_recording_on_silence_hud_fail_title: 'Pecah pada jeda berhenti',
  tool_split_a_recording_on_silence_hud_next: 'Selesai. Langkah berikutnya: Unduh ZIP.',
  tool_split_a_recording_on_silence_hud_next_zip: 'Selesai. Unduhan ZIP seharusnya mulai.',
  tool_split_a_recording_on_silence_hud_pack: 'Memasukkan klip ke ZIP…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: 'Memotong di tengah sunyi…',
  tool_split_a_recording_on_silence_hud_step_decode: 'Dekode',
  tool_split_a_recording_on_silence_hud_step_detect: 'Deteksi',
  tool_split_a_recording_on_silence_hud_step_pack: 'Kemas',
  tool_split_a_recording_on_silence_hud_step_split: 'Pecah',
  tool_split_a_recording_on_silence_hud_title: 'Progres Pecah pada jeda',
  tool_split_a_recording_on_silence_hud_working: 'Memulai…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}d · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: 'Klip minimum (detik)',
  tool_split_a_recording_on_silence_min_clip_hint: 'Bawaan 0.3 s. Potongan lebih pendek setelah potong dibuang.',
  tool_split_a_recording_on_silence_min_silence: 'Sunyi minimum (detik)',
  tool_split_a_recording_on_silence_min_silence_hint: 'Bawaan 1.0 s supaya napas pendek tidak jadi titik potong.',
  tool_split_a_recording_on_silence_pause: 'Jeda',
  tool_split_a_recording_on_silence_play: 'Putar',
  tool_split_a_recording_on_silence_preset_album: 'Album',
  tool_split_a_recording_on_silence_preset_hint: 'Bicara adalah bawaan. Kuliah menunggu jeda bab yang lebih panjang. Album mengharapkan celah antar lagu.',
  tool_split_a_recording_on_silence_preset_lecture: 'Kuliah',
  tool_split_a_recording_on_silence_preset_speech: 'Bicara',
  tool_split_a_recording_on_silence_preview_hint: 'Pita merah adalah jeda cukup panjang untuk dipecah. Putar mempratinjau berkas saat ini.',
  tool_split_a_recording_on_silence_result_one:
    '{orig}d · tidak ada jeda cukup panjang, jadi ZIP hanya berisi berkas ini. Turunkan sunyi minimum atau naikkan ambang (lebih dekat ke 0). Unduh ZIP siap.',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}d · {gaps} jeda → {count} klip: {list}. Unduh ZIP siap.',
  tool_split_a_recording_on_silence_rules_body:
    'Kira-kira setiap 50 ms halaman mengukur RMS lalu ke dB: levelDb = 20 × log10(rms). Ruas di bawah ambang yang bertahan setidaknya sunyi minimum dipotong di titik tengah. Klip lebih pendek dari minimum dibuang. WAV adalah PCM 16-bit. MP3 adalah CBR pada bitrate yang dipilih. ZIP disusun di tab ini.',
  tool_split_a_recording_on_silence_rules_item_1:
    'Bicara: −40 dB, 1.0 s sunyi minimum, 0.3 s klip minimum. Kuliah: −40 dB / 2.0 s / 0.5 s. Jeda album: −45 dB / 1.5 s / 1.0 s.',
  tool_split_a_recording_on_silence_rules_item_2:
    'Batas desktop sekitar 40 MB atau 20 menit; layar sempit sekitar 20 MB atau 8 menit. Melebihi batas ditolak, bukan dipotong. Lebih dari 50 klip ditolak.',
  tool_split_a_recording_on_silence_rules_item_3:
    'Berkas tetap di perangkat; tidak diunggah ke server. JSZip dan encoder MP3 dimuat dari situs ini hanya setelah Unduh ZIP.',
  tool_split_a_recording_on_silence_rules_item_4:
    'Dekode bergantung pada peramban. DRM, sebagian codec, dan wadah video gagal dengan pesan jelas.',
  tool_split_a_recording_on_silence_rules_item_5:
    'Mengekspor banyak berkas dalam ZIP. Tidak merapatkan satu berkas lebih pendek, tidak potong durasi tetap, tidak ikut cue, tidak denoise, tidak mute video, tidak mengambil YouTube.',
  tool_split_a_recording_on_silence_rules_title: 'Aturan yang perlu diketahui',
  tool_split_a_recording_on_silence_sample: 'Muat contoh',
  tool_split_a_recording_on_silence_split: 'Pecah pada jeda',
  tool_split_a_recording_on_silence_status_done: 'Selesai.',
  tool_split_a_recording_on_silence_threshold: 'Ambang sunyi (dB)',
  tool_split_a_recording_on_silence_threshold_hint: 'Bawaan −40 dB. Semakin dekat ke 0, semakin banyak bagian dianggap sunyi.',
  tool_split_a_recording_on_silence_title: 'Pecah rekaman pada jeda sunyi',
  tool_split_a_recording_on_silence_usecase_1:
    'Kuliah dengan jeda bab: tiap bab jadi berkas sendiri di ZIP, bukan potongan durasi sama.',
  tool_split_a_recording_on_silence_usecase_2:
    'Wawancara: jawaban jadi klip terpisah yang bisa diberi label nanti.',
  tool_split_a_recording_on_silence_usecase_3:
    'Mixtape dengan celah antar lagu tanpa cue sheet: potong rekaman di jeda sudah cukup.',
  tool_split_a_recording_on_silence_usecases_title: 'Cocok dipakai saat',
  tool_split_a_recording_on_silence_why_choose_body:
    'Dibuat untuk ZIP klip yang dipotong di tengah jeda, dengan bawaan Bicara / Kuliah / Album yang bisa dicek di halaman.',
  tool_split_a_recording_on_silence_why_choose_item_1:
    'Memotong di tengah jeda sunyi yang panjang dan memasukkan banyak berkas ke ZIP; tidak merapatkan satu berkas lebih pendek.',
  tool_split_a_recording_on_silence_why_choose_item_2:
    'Bicara (−40 dB / 1.0 s / 0.3 s klip minimum) menghindari napas terpotong-potong; Kuliah dan Album bernama di halaman.',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'Berkas tetap di tab peramban ini dan tidak diunggah ke server; JSZip dan lamejs baru dimuat saat Anda klik Unduh ZIP.',
  tool_split_a_recording_on_silence_why_choose_item_4:
    'Berkas terlalu besar dan lebih dari 50 klip ditolak sebelum ZIP setengah jadi, bukan janji 1 GB yang merusak tab.',
  tool_split_a_recording_on_silence_why_choose_title: 'Mengapa memakai Pecah rekaman pada jeda sunyi di sini',
};
export default id;
