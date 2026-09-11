/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / id).
 * H1 kalimat tugas; bagi trek cue / bagi flac cue masuk desc dan FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Salinan Indonesia: pecah image disc dengan cue sheet menjadi ZIP trek. */
const id: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: 'Pengaturan lanjutan (opsional)',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'Di tab ini pecah image disc dengan cue sheet: buka image dan .cue, klik Pecah trek, lalu Unduh ZIP. Potongan mengikuti INDEX 01 (75 frame per detik). Berkas tetap di perangkat dan tidak diunggah ke server.',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'Bitrate MP3',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: 'Bawaan 128 kbps. Hanya dipakai jika ZIP berupa MP3.',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'Pilih image disc dan berkas .cue',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'Hapus',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'Unduh trek',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'Putar trek',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'Lembar cue',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    'Potong image lokal di INDEX 01 lalu unduh trek bernama sebagai ZIP — tetap di perangkat, tidak diunggah.',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'Pecah image disc dengan cue sheet di perangkat: potong INDEX 01, trek bernama dalam ZIP, berkas tidak diunggah. Langkah: buka image dan .cue (atau tempel lembar), Pecah trek, Unduh ZIP. Contoh: sampel 6,00 d dengan INDEX 01 di 0 / 2 / 4 d menjadi Intro / Middle / Outro 2,00 d. Cari bagi trek cue, bagi flac cue, atau ekstrak trek dari cue, itu pekerjaan yang sama. Bukan potong diam, bukan bagian durasi sama, bukan bab YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'Unduh ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'Jatuhkan keduanya: WAV, FLAC, MP3, atau BIN plus .cue. Proses tetap di tab ini.',
  tool_split_a_disc_image_with_a_cue_sheet_empty: 'Tambahkan dulu image dan lembar cue.',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: 'Tambahkan image yang cocok (WAV, FLAC, MP3, atau BIN).',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: 'Tambahkan .cue atau tempel lembar cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'Peramban ini tidak bisa mendekode APE. Ubah image ke WAV atau FLAC, simpan cue yang sama, lalu Pecah trek lagi.',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'Image melebihi batas perangkat ini (sekitar 80 MB / 30 mnt di desktop, 30 MB / 10 mnt di layar sempit). .bin CD 700 MB tidak muat di tab ini.',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'Teks itu bukan lembar cue yang bisa dipakai. Perlu baris TRACK dan INDEX 01 MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'Lembar ini menggambarkan cakram data (trek MODE), bukan image audio. Hanya trek AUDIO yang dipotong.',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'Peramban ini gagal mendekode image itu. Coba WAV atau FLAC, atau berkas tanpa DRM. APE tidak didekode di sini.',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: 'Tidak ada yang diproses. Muat berkas atau contoh dulu.',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'Encoder MP3 gagal dimuat. Tetap di tab ini dan coba Unduh ZIP lagi.',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'Lembar ini mencantumkan lebih dari satu FILE. Itu sudah satu berkas per trek; tidak ada yang dipecah di sini.',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'Tidak ada INDEX 01. Pemecah cue butuh waktu mulai MM:SS:FF itu.',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    'Lebih dari 50 trek. Halaman menolak memotong sisa. Pakai lembar lebih pendek atau shnsplit di komputer.',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    'Halaman ini tidak menerima video sebagai masukan utama. Ia memecah image audio dengan lembar cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'Pustaka ZIP gagal dimuat. Tetap di tab ini dan coba Unduh ZIP lagi.',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'Muat contoh membuat image 6,00 d (440 / 550 / 660 Hz, dua detik masing-masing) dan lembar dengan INDEX 01 di 00:00:00, 00:02:00, 00:04:00 (Intro Tone, Middle Tone, Outro Tone). Pecah trek menghasilkan tiga berkas 2,00 d. Unduh ZIP menulis 01 Intro Tone.wav kecuali Anda pilih MP3 di pengaturan lanjutan.',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: 'Contoh',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'Tidak. Parse, dekode, potong, dan ZIP berjalan di tab ini. Skrip dari situs ini. Image dan lembar tidak dikirim ke server kami.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    'Ya. Bagi trek cue, bagi flac cue, split ape cue, atau ekstrak trek dari cue adalah alat ini: ikuti INDEX 01 dan unduh ZIP bernama. Pencarian APE niatnya sama, tapi .ape tidak didekode — ubah ke WAV/FLAC dan simpan cue.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 adalah awal trek (MM:SS:FF, 75 frame/d). INDEX 00 menandai pregap; ditampilkan, potongan bawaan tetap 01. Trek terakhir sampai akhir image.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'Tidak. Potong di jeda sunyi atau durasi sama adalah halaman lain. Di sini hanya lembar cue. Daftar bab YouTube tanpa FILE/INDEX di luar cakupan.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    'Tempel teks di bawah zona unggah jika tidak ada berkas .cue. Menjatuhkan .cue memakai parse yang sama.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'Di dalam ZIP namanya {nn} {title}.wav (atau .mp3). Satu trek juga bisa diunduh dari daftar. Batas 50; lebih dari itu ditolak.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'Tidak. Bukan denoise, bisukan video, bagian sama, potong tangan, unduh YouTube, atau ISO data. Pakai image audio yang Anda berhak olah.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'Desktop: sekitar 80 MB atau 30 menit. Layar sempit: sekitar 30 MB atau 10 menit. .bin CD 700 MB ditolak. Kelebihan batas berhenti sebelum dekode.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: 'Apakah image disc dan lembar cue diunggah?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2: 'Saya mencari bagi trek cue atau bagi flac cue. Apakah itu alat lain?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'Apa beda INDEX 01 dan INDEX 00?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: 'Apakah dipotong di sunyi, menurut durasi, atau bab YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: 'Boleh menempel lembar cue, bukan berkas .cue?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: 'Bagaimana nama berkas, berapa trek maksimal?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: 'Dekode APE, pecah video, bagian sama, atau unduh YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: 'Seberapa besar image yang bisa diproses?',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'Format di dalam ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV adalah PCM lossless. Encoder MP3 hanya dimuat saat Unduh ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'Baca waktu INDEX 01 dari lembar cue, potong image disc di situ, unduh ZIP trek bernama, tanpa unggah.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'Buka image disc dan .cue-nya (atau Muat contoh).',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'Atau tempel lembar cue jika hanya ada teks.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: 'Klik Pecah trek.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: 'Klik Unduh ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: 'Cara kerja',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'Mendekode image di tab ini…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'Lembar terbaca, image terdekode. Tanda putih adalah INDEX 01. Klik Pecah trek jika daftar sudah benar.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: '{s}d berlalu',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'Mengode trek MP3…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'Perbaiki lembar atau image, lalu Pecah trek lagi.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'Pecah cue berhenti',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: 'Selesai. Langkah berikutnya: Unduh ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: 'Selesai. Unduhan ZIP seharusnya mulai.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'Memasukkan trek ke ZIP…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'Membaca lembar cue…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'Memotong di INDEX 01…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: 'Dekode',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: 'Kemas',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: 'Parse',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: 'Pecah',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'Kemajuan pecah cue',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: 'Mulai…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'Image disc',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}d · {rate} Hz · {ch} ch · {tracks} INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'Tempel lembar cue lengkap (FILE, TRACK, INDEX 01). Bukan daftar bab YouTube.',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'Atau tempel lembar cue',
  tool_split_a_disc_image_with_a_cue_sheet_pause: 'Jeda',
  tool_split_a_disc_image_with_a_cue_sheet_play: 'Putar',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: 'Tanda putih adalah awal INDEX 01. Putar mendengar seluruh image.',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig}d · {count} trek: {list}. Unduh ZIP sudah siap.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'Setiap INDEX 01 adalah mm:ss:ff pada 75 frame/d: t = mm×60 + ss + ff/75. Trek n berjalan sampai INDEX 01 berikutnya; yang terakhir sampai ujung. PCM 16-bit WAV/BIN dipotong menurut ofset bita. Format lain memakai dekoder peramban. ZIP dibuat di tab ini.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    'Potongan adalah INDEX 01. INDEX 00 tampil sebagai pregap, bukan potongan bawaan. Waktu memakai frame CD, bukan milidetik.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'Batas desktop sekitar 80 MB atau 30 menit; layar sempit sekitar 30 MB atau 10 menit. Kelebihan ditolak, tidak dipotong. Lebih dari 50 trek ditolak. .bin 700 MB tidak muat.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'Berkas tetap di perangkat; tidak diunggah. JSZip dan encoder MP3 dimuat dari situs ini hanya setelah Unduh ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE dan BINARY (.bin, sektor CDDA 2352 bita) bisa dipotong tanpa codec penuh. MP3/FLAC/M4A butuh dekoder peramban. APE/TTA/WavPack gagal dengan pesan jelas.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    'Satu FILE plus INDEX 01. Bukan sunyi, durasi sama, bab YouTube, ukuran, bisu video, atau unduh YouTube. Beberapa FILE sudah terpecah.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: 'Aturan yang perlu diingat',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'Muat contoh',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'Pecah trek',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: 'Selesai.',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'Pecah image disc dengan cue sheet',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}d ({start}s–{end}s)',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'Trek siap masuk ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'Pecah rip FLAC+CUE dari Exact Audio Copy atau XLD jadi trek bernama, tanpa memasang shnsplit.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'Potong image WAV atau BIN sisi piringan atau CD beserta lembar cue, lalu bawa ZIP-nya.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'Ambil trek dari set DJ yang datang dengan lembar cue, memakai INDEX 01 bukan menebak jeda sunyi.',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: 'Cocok untuk',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'Dibuat untuk potongan INDEX 01 dan ZIP bernama, jujur soal APE dan .bin yang terlalu besar.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'Memotong di INDEX 01 (75 fps) dan menamai ZIP dari TITLE, bukan potongan N detik atau celah sunyi.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'Satu zona untuk image plus .cue, dengan tempel lembar yang sama — bukan editor bab YouTube yang menyamar.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'Berkas tetap di tab peramban ini dan tidak diunggah; JSZip dan lamejs hanya dimuat saat Unduh ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE, lembar banyak FILE, dan image kelewat besar ditolak dengan bahasa biasa, bukan janji 700 MB yang merusak tab.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title: 'Mengapa memakai Pecah image disc dengan cue sheet',
};
export default id;
