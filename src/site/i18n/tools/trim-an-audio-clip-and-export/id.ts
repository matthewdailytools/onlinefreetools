/**
 * i18n tool shard (trim-an-audio-clip-and-export / id).
 * H1: potong klip lalu ekspor. Jangan pakai "Use case" sebagai H2.
 */
import type { SiteLangDict } from '../../../types';

/** Copy bahasa Indonesia untuk memotong klip audio lalu mengekspor. */
const id: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: 'Pengaturan lanjutan (opsional)',
  tool_trim_an_audio_clip_and_export_article:
    'Buka berkas audio di perangkat, isi Mulai dan Akhir, ketuk Potong, lalu Ekspor WAV atau Ekspor MP3. Berkas tetap di perangkat, tanpa unggah ke server. Ini satu potongan, bukan editor gelombang utuh.',
  tool_trim_an_audio_clip_and_export_bitrate: 'Bitrate MP3',
  tool_trim_an_audio_clip_and_export_bitrate_hint: 'Bawaan 128 kbps. Dipakai hanya saat Anda menekan Ekspor MP3.',
  tool_trim_an_audio_clip_and_export_choose_file: 'Pilih berkas audio',
  tool_trim_an_audio_clip_and_export_clear: 'Hapus',
  tool_trim_an_audio_clip_and_export_desc:
    'Potong audio atau klip lokal dari mulai sampai akhir, lalu ekspor WAV atau MP3. Tetap di perangkat, tanpa unggah ke server.',
  tool_trim_an_audio_clip_and_export_description:
    'Potong audio di perangkat: isi Mulai dan Akhir, lalu unduh WAV atau MP3 tanpa unggah ke server. Langkah: buka berkas, klik atau seret gelombang (atau isi Mulai dan Akhir), Potong, Ekspor WAV atau Ekspor MP3. Contoh: nada 5 detik, simpan 1,00–3,00 detik sebagai WAV (atau MP3 128 kbps). Potong mp3, potong klip audio, gunting lagu, atau trim audio adalah potongan mulai–akhir yang sama. Bukan editor gelombang lengkap; video bukan masukan utama.',
  tool_trim_an_audio_clip_and_export_drop_hint: 'Atau jatuhkan WAV, MP3, M4A, atau OGG di sini. Proses tetap di tab ini.',
  tool_trim_an_audio_clip_and_export_empty: 'Pilih berkas audio dulu.',
  tool_trim_an_audio_clip_and_export_end: 'Akhir (detik)',
  tool_trim_an_audio_clip_and_export_err_caps:
    'Berkas ini melebihi batas perangkat (sekitar 40 MB / 20 menit di desktop, 20 MB / 8 menit di layar sempit). Potong di tempat lain dulu atau pakai berkas lebih pendek.',
  tool_trim_an_audio_clip_and_export_err_decode:
    'Peramban ini tidak bisa mendekode berkas itu. Coba WAV atau MP3, atau klip tanpa DRM.',
  tool_trim_an_audio_clip_and_export_err_empty: 'Tidak ada yang dipotong. Muat berkas atau contoh dulu.',
  tool_trim_an_audio_clip_and_export_err_lame: 'Encoder MP3 gagal dimuat. Tetap di tab ini dan coba Ekspor MP3 lagi.',
  tool_trim_an_audio_clip_and_export_err_range: 'Akhir harus setelah Mulai, di dalam durasi yang sudah didekode.',
  tool_trim_an_audio_clip_and_export_err_video:
    'Halaman ini tidak menerima video sebagai masukan utama. Ambil audionya dulu, baru potong suara.',
  tool_trim_an_audio_clip_and_export_example:
    'Muat contoh membuat nada 5,00 detik di memori, mengisi Mulai 1,00 dan Akhir 3,00, lalu Potong menyisakan sekitar 2,00 detik. Ekspor WAV menulis PCM; Ekspor MP3 memakai 128 kbps kecuali Anda mengubah pengaturan lanjutan.',
  tool_trim_an_audio_clip_and_export_example_title: 'Contoh',
  tool_trim_an_audio_clip_and_export_export_mp3: 'Ekspor MP3',
  tool_trim_an_audio_clip_and_export_export_wav: 'Ekspor WAV',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'Tidak. Dekode dan iris berjalan di tab ini. Skrip dimuat dari situs ini. Berkas tidak dikirim ke server kami.',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'Bukan. Potong mp3, potong audio, potong klip audio, gunting lagu, atau trim audio adalah alat ini: sisakan Mulai–Akhir, lalu Ekspor WAV atau Ekspor MP3.',
  tool_trim_an_audio_clip_and_export_faq_a3:
    'Secara bawaan potongan menempel ke zero-crossing terdekat supaya sambungan jarang klik. Bisa dimatikan di Pengaturan lanjutan (opsional).',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV menyimpan PCM yang diiris. MP3 lebih kecil (bawaan 128 kbps) dan encoder baru dimuat saat Ekspor MP3.',
  tool_trim_an_audio_clip_and_export_faq_a5:
    'Bukan. Halaman ini hanya memotong mulai dan akhir lalu mengekspor. Editor suara / stasiun gelombang utuh adalah alat terpisah nanti.',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'Anda bisa memotong sekitar 30 detik, tapi kami tidak menulis M4A atau fade otomatis. Spesifikasi nada dering itu pekerjaan lain.',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'Tidak. Demuks video dan unduh YouTube di luar cakupan. Pakai berkas suara yang sudah Anda berhak olah.',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'Desktop: sekitar 40 MB atau 20 menit. Layar sempit: sekitar 20 MB atau 8 menit. Di atas batas ditolak, tidak dipotong diam-diam.',
  tool_trim_an_audio_clip_and_export_faq_q1: 'Apakah audio saya diunggah?',
  tool_trim_an_audio_clip_and_export_faq_q2: 'Saya mencari potong mp3, potong audio, atau gunting lagu. Apakah ini alat lain?',
  tool_trim_an_audio_clip_and_export_faq_q3: 'Kenapa potongannya bergeser sedikit? Situs lain bunyi klik.',
  tool_trim_an_audio_clip_and_export_faq_q4: 'Ekspor WAV atau MP3?',
  tool_trim_an_audio_clip_and_export_faq_q5: 'Ini editor audio daring?',
  tool_trim_an_audio_clip_and_export_faq_q6: 'Bisa bikin nada dering M4A iPhone?',
  tool_trim_an_audio_clip_and_export_faq_q7: 'Bisa ambil audio dari video atau YouTube?',
  tool_trim_an_audio_clip_and_export_faq_q8: 'Seberapa besar berkas yang bisa dipotong?',
  tool_trim_an_audio_clip_and_export_how_body:
    'Sisakan hanya bagian antara Mulai dan Akhir, lalu unduh WAV atau MP3 tanpa unggah berkas ke server.',
  tool_trim_an_audio_clip_and_export_how_item_1: 'Buka berkas audio (atau ketuk Muat contoh).',
  tool_trim_an_audio_clip_and_export_how_item_2: 'Klik atau seret di gelombang (atau isi Mulai dan Akhir) untuk bagian yang disimpan.',
  tool_trim_an_audio_clip_and_export_how_item_3: 'Ketuk Potong.',
  tool_trim_an_audio_clip_and_export_how_item_4: 'Ketuk Ekspor WAV atau Ekspor MP3.',
  tool_trim_an_audio_clip_and_export_how_title: 'Cara kerjanya',
  tool_trim_an_audio_clip_and_export_hud_decode: 'Mendekode berkas di tab ini…',
  tool_trim_an_audio_clip_and_export_hud_decoded: 'Selesai didekode. Isi Mulai dan Akhir, lalu ketuk Potong.',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: '{s}d berlalu',
  tool_trim_an_audio_clip_and_export_hud_encode: 'Mengode MP3…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'Perbaiki berkas atau waktunya, lalu Potong lagi.',
  tool_trim_an_audio_clip_and_export_hud_fail_title: 'Potong dihentikan',
  tool_trim_an_audio_clip_and_export_hud_next: 'Selesai. Langkah berikutnya: Ekspor WAV atau Ekspor MP3.',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: 'Selesai. Unduhan MP3 seharusnya mulai.',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: 'Dekode',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'Kode',
  tool_trim_an_audio_clip_and_export_hud_step_trim: 'Potong',
  tool_trim_an_audio_clip_and_export_hud_title: 'Progres potong',
  tool_trim_an_audio_clip_and_export_hud_trim: 'Mengiris rentang mulai–akhir…',
  tool_trim_an_audio_clip_and_export_hud_working: 'Mulai…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}d · {rate} Hz · {ch} ch',
  tool_trim_an_audio_clip_and_export_pause: 'Jeda',
  tool_trim_an_audio_clip_and_export_play: 'Putar',
  tool_trim_an_audio_clip_and_export_preview_hint: 'Klik atau seret di gelombang untuk mengatur Mulai dan Akhir. Putar mendengar rentang itu.',
  tool_trim_an_audio_clip_and_export_result_tpl: 'Disimpan {dur}d ({start}–{end}d). Siap diekspor.',
  tool_trim_an_audio_clip_and_export_rules_body:
    'Sampel antara Mulai dan Akhir disalin ke buffer baru. Bawaan menempelkan tiap tepi ke zero-crossing terdekat. WAV menulis PCM 16-bit. MP3 CBR sesuai bitrate yang dipilih.',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'Batas desktop sekitar 40 MB atau 20 menit; layar sempit sekitar 20 MB atau 8 menit. Melebihi batas ditolak, tidak dipotong diam-diam.',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'Berkas tetap di perangkat, tanpa unggah ke server. Encoder MP3 dimuat dari situs ini hanya setelah Ekspor MP3.',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    'Dekode tergantung peramban. DRM, sebagian codec, dan wadah video gagal dengan pesan jelas.',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'Tidak mencampur trek, tidak menambah fade, tidak menulis M4A, tidak mengambil YouTube. Satu berkas, satu rentang, satu ekspor.',
  tool_trim_an_audio_clip_and_export_rules_title: 'Aturan yang perlu diharapkan',
  tool_trim_an_audio_clip_and_export_sample: 'Muat contoh',
  tool_trim_an_audio_clip_and_export_start: 'Mulai (detik)',
  tool_trim_an_audio_clip_and_export_status_done: 'Selesai.',
  tool_trim_an_audio_clip_and_export_title: 'Potong klip audio lalu ekspor',
  tool_trim_an_audio_clip_and_export_trim: 'Potong',
  tool_trim_an_audio_clip_and_export_usecase_1: 'Potong audio podcast: lewati bumper 8 detik, ekspor MP3 untuk obrolan.',
  tool_trim_an_audio_clip_and_export_usecase_2: 'Simpan kutipan 12 detik dari rekaman rapat dan unduh WAV untuk arsip.',
  tool_trim_an_audio_clip_and_export_usecase_3: 'Buang hening di kedua ujung memo suara — potongan yang sama dengan potong mp3 atau gunting lagu.',
  tool_trim_an_audio_clip_and_export_usecases_title: 'Cocok untuk ini',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    'Dibuat untuk satu potongan dan satu unduhan, dengan batas dan antirklik yang bisa dicek di halaman.',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    'Dekode dan iris tetap di tab ini; skrip encoder baru muncul saat Ekspor MP3.',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    'Berkas kebesaran atau kepanjangan ditolak, bukan dipotong diam-diam.',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'Zero-cross menyala secara bawaan supaya sambungan jarang klik; bisa dimatikan.',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV dan MP3 tombol ekspor terpisah, sama dengan langkah; bitrate hanya di pengaturan lanjutan.',
  tool_trim_an_audio_clip_and_export_why_choose_title: 'Mengapa memilih alat Potong klip audio lalu ekspor kami',
  tool_trim_an_audio_clip_and_export_zerocross: 'Tempelkan Mulai dan Akhir ke zero-crossing terdekat',
  tool_trim_an_audio_clip_and_export_zerocross_hint: 'Nyala secara bawaan. Mengurangi klik di sambungan. Matikan jika ingin tepi persis per sampel.',
};
export default id;
