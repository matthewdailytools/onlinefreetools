/**
 * i18n tool shard (make-a-seamless-audio-loop / id).
 * H1: buat loop audio yang mulus; looper / crossfade masuk FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: membuat loop audio mulus lalu mengekspor. */
const id: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: 'Pengaturan lanjutan (opsional)',
  tool_make_a_seamless_audio_loop_article:
    'Buat loop audio yang mulus di tab ini: buka berkas lokal, tandai Awal dan Akhir, atur crossfade, klik Buat loop, lalu Ekspor WAV atau Ekspor MP3. Ujung dilebur ke awal supaya sambungan tidak klik. Berkas tetap di perangkat dan tidak diunggah ke server.',
  tool_make_a_seamless_audio_loop_bitrate: 'Bitrate MP3',
  tool_make_a_seamless_audio_loop_bitrate_hint: 'Default 128 kbps. Hanya dipakai saat Anda klik Ekspor MP3.',
  tool_make_a_seamless_audio_loop_choose_file: 'Pilih berkas audio',
  tool_make_a_seamless_audio_loop_clear: 'Hapus',
  tool_make_a_seamless_audio_loop_crossfade: 'Crossfade (ms)',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    'Default 50 md. 20 md untuk drum; 200–500 md untuk pad, drone, dan bed ambient.',
  tool_make_a_seamless_audio_loop_desc:
    'Buat loop audio yang mulus di perangkat: campur ujung klip lokal ke awal, lalu ekspor WAV atau MP3, tanpa unggah ke server.',
  tool_make_a_seamless_audio_loop_description:
    'Buat loop audio yang mulus di perangkat Anda: crossfade ujung klip lokal ke awalnya, lalu unduh WAV atau MP3 — berkas tidak diunggah ke server. Langkah: buka berkas, tandai Awal dan Akhir, atur Crossfade (50 md), Buat loop, Putar untuk mendengar sambungan, Ekspor WAV atau Ekspor MP3. Contoh: 1,00–3,00 dtk dari nada 5 dtk dengan 50 md equal-power menjadi sekitar 1,95 dtk. Loop audio, pengulangan audio, audio looping, atau loop maker adalah pekerjaan yang sama. Bukan editor gelombang; tidak menyambung dua lagu berbeda atau mengunduh YouTube.',
  tool_make_a_seamless_audio_loop_disclaimer:
    'Anda harus berhak mengolah berkas ini. Halaman ini tidak memberi lisensi musik dan tidak mengambil stream.',
  tool_make_a_seamless_audio_loop_drop_hint: 'Atau jatuhkan WAV, MP3, M4A, atau OGG ke sini. Pemrosesan tetap di tab ini.',
  tool_make_a_seamless_audio_loop_empty: 'Pilih berkas audio dulu.',
  tool_make_a_seamless_audio_loop_end: 'Akhir (detik)',
  tool_make_a_seamless_audio_loop_equal_power: 'Crossfade equal-power',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    'Default aktif agar kerasnya sambungan lebih stabil. Matikan untuk campuran linear.',
  tool_make_a_seamless_audio_loop_err_bake:
    'Hasil yang dipanggang akan lebih dari sekitar 3 menit. Turunkan Pengulangan atau persingkat wilayah.',
  tool_make_a_seamless_audio_loop_err_caps:
    'Berkas ini melewati batas perangkat (sekitar 40 MB / 20 mnt di desktop, 20 MB / 8 mnt di layar sempit). Potong di tempat lain atau pakai berkas lebih pendek.',
  tool_make_a_seamless_audio_loop_err_decode:
    'Browser ini tidak bisa mendekode berkas itu. Coba WAV atau MP3, atau klip tanpa DRM.',
  tool_make_a_seamless_audio_loop_err_empty: 'Tidak ada yang di-loop. Muat berkas atau contoh dulu.',
  tool_make_a_seamless_audio_loop_err_fade:
    'Crossfade harus lebih pendek dari wilayah. Turunkan milidetik atau panjangkan Awal–Akhir.',
  tool_make_a_seamless_audio_loop_err_lame:
    'Encoder MP3 gagal dimuat. Tetap di tab ini dan klik Ekspor MP3 lagi.',
  tool_make_a_seamless_audio_loop_err_range: 'Akhir harus setelah Awal, di dalam durasi hasil dekode.',
  tool_make_a_seamless_audio_loop_err_video:
    'Halaman ini tidak menerima video sebagai input utama. Ekstrak audio dulu, lalu buat loop dari berkas suara.',
  tool_make_a_seamless_audio_loop_example:
    'Muat contoh membuat nada 5,00 detik di memori, menandai Awal 1,00 dan Akhir 3,00, memakai 50 md equal-power, lalu Buat loop menulis sekitar 1,95 detik (satu siklus). Ekspor WAV menulis PCM; Ekspor MP3 memakai 128 kbps kecuali Anda mengubah pengaturan lanjutan.',
  tool_make_a_seamless_audio_loop_example_title: 'Contoh',
  tool_make_a_seamless_audio_loop_export_mp3: 'Ekspor MP3',
  tool_make_a_seamless_audio_loop_export_wav: 'Ekspor WAV',
  tool_make_a_seamless_audio_loop_faq_a1:
    'Tidak. Dekode dan pelipatan berjalan di tab ini. Skrip dimuat dari situs ini. Berkas tidak dikirim ke server kami.',
  tool_make_a_seamless_audio_loop_faq_a2:
    'Bukan. Loop audio, pengulangan audio, audio looping, loop maker, atau buat loop adalah alat ini: tandai wilayah, crossfade sambungan, lalu Ekspor WAV atau Ekspor MP3.',
  tool_make_a_seamless_audio_loop_faq_a3:
    'Crossfade mencampur ekor wilayah ke kepalanya. Default 50 md equal-power. Sekitar 20 md untuk drum; 200–500 md untuk pad.',
  tool_make_a_seamless_audio_loop_faq_a4:
    'Siklus yang diekspor lebih pendek dari Awal–Akhir sebesar panjang crossfade karena tumpang tindih hanya dicampur sekali.',
  tool_make_a_seamless_audio_loop_faq_a5:
    'WAV untuk mesin game yang mengulang berkas. MP3 lebih kecil (128 kbps) jika aplikasi siaran tidak bisa loop; encoder baru dimuat saat Ekspor MP3.',
  tool_make_a_seamless_audio_loop_faq_a6:
    'Pengulangan default 1. Di pengaturan lanjutan Anda bisa memanggang 4 atau 8 salinan. Lebih dari sekitar 3 menit ditolak. Ini bukan generator 10 jam.',
  tool_make_a_seamless_audio_loop_faq_a7:
    'Tidak menyambung dua lagu berbeda, bukan editor suara daring, tidak menulis nada dering M4A, tidak mencari titik loop sendiri, dan tidak mengunduh YouTube.',
  tool_make_a_seamless_audio_loop_faq_a8:
    'Desktop: sekitar 40 MB atau 20 menit. Layar sempit: sekitar 20 MB atau 8 menit. Berkas di atas batas ditolak, tidak dipotong diam-diam.',
  tool_make_a_seamless_audio_loop_faq_q1: 'Apakah audio saya diunggah?',
  tool_make_a_seamless_audio_loop_faq_q2: 'Saya mencari loop audio, pengulangan audio, atau loop maker. Apakah itu alat lain?',
  tool_make_a_seamless_audio_loop_faq_q3: 'Bagaimana crossfade menghilangkan bunyi klik di sambungan?',
  tool_make_a_seamless_audio_loop_faq_q4: 'Mengapa ekspor lebih pendek dari wilayah yang saya tandai?',
  tool_make_a_seamless_audio_loop_faq_q5: 'Ekspor WAV untuk game atau MP3 untuk siaran?',
  tool_make_a_seamless_audio_loop_faq_q6: 'Aplikasi siaran tidak bisa loop. Bisa menempel beberapa putaran?',
  tool_make_a_seamless_audio_loop_faq_q7: 'Apakah ini DJ crossfade dua lagu, nada dering, atau pencari loop AI?',
  tool_make_a_seamless_audio_loop_faq_q8: 'Seberapa besar berkas yang bisa diproses?',
  tool_make_a_seamless_audio_loop_how_body:
    'Tandai wilayah yang diulang, leburkan ujung ke awal dengan crossfade, lalu unduh WAV atau MP3 tanpa mengunggah berkas.',
  tool_make_a_seamless_audio_loop_how_item_1: 'Buka berkas audio (atau klik Muat contoh).',
  tool_make_a_seamless_audio_loop_how_item_2:
    'Klik atau seret gelombang (atau ketik Awal dan Akhir). Ubah Crossfade jika 50 md tidak pas (20 / 50 / 200 / 500 md).',
  tool_make_a_seamless_audio_loop_how_item_3: 'Klik Buat loop.',
  tool_make_a_seamless_audio_loop_how_item_4: 'Klik Putar untuk mendengar sambungan, lalu Ekspor WAV atau Ekspor MP3.',
  tool_make_a_seamless_audio_loop_how_title: 'Cara kerjanya',
  tool_make_a_seamless_audio_loop_hud_decode: 'Mendekode berkas di tab ini…',
  tool_make_a_seamless_audio_loop_hud_decoded: 'Selesai didekode. Atur Awal, Akhir, dan Crossfade, lalu klik Buat loop.',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: '{s}d berlalu',
  tool_make_a_seamless_audio_loop_hud_encode: 'Mengode MP3…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'Perbaiki berkas, waktu, atau crossfade, lalu Buat loop lagi.',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'Buat loop berhenti',
  tool_make_a_seamless_audio_loop_hud_loop: 'Melipat ekor ke kepala…',
  tool_make_a_seamless_audio_loop_hud_next: 'Selesai. Berikutnya: Putar sambungan, lalu Ekspor WAV atau Ekspor MP3.',
  tool_make_a_seamless_audio_loop_hud_next_mp3: 'Selesai. Unduhan MP3 seharusnya mulai.',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: 'Dekode',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'Kode',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'Loop',
  tool_make_a_seamless_audio_loop_hud_title: 'Progres loop',
  tool_make_a_seamless_audio_loop_hud_working: 'Memulai…',
  tool_make_a_seamless_audio_loop_make: 'Buat loop',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}d · {rate} Hz · {ch} ch',
  tool_make_a_seamless_audio_loop_pause: 'Jeda',
  tool_make_a_seamless_audio_loop_play: 'Putar',
  tool_make_a_seamless_audio_loop_preview_hint:
    'Klik atau seret gelombang untuk Awal dan Akhir. Setelah Buat loop, Putar mengulang hasil agar Anda mendengar sambungan.',
  tool_make_a_seamless_audio_loop_repeats: 'Pengulangan (salinan dipanggang)',
  tool_make_a_seamless_audio_loop_repeats_hint:
    'Default 1 siklus untuk pemutar yang bisa mengulang berkas. Pakai 4 atau 8 jika tidak. Keluaran lebih dari sekitar 3 menit ditolak.',
  tool_make_a_seamless_audio_loop_result_tpl:
    'Loop {dur}d dari {start}–{end}d dengan crossfade {fade} md ({n} ulangan). Ekspor siap.',
  tool_make_a_seamless_audio_loop_rules_body:
    'Wilayah disalin, lalu equal-power (atau linear) mencampur sampel fade terakhir ke yang pertama. Panjang keluaran = wilayah dikurangi fade. Pengulangan menempel siklus itu. WAV adalah PCM 16-bit. MP3 adalah CBR.',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'Batas desktop sekitar 40 MB atau 20 menit; layar sempit sekitar 20 MB atau 8 menit. Di atas itu ditolak, tidak dipotong.',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'Berkas tetap di perangkat; tidak diunggah ke server. Encoder MP3 dimuat dari situs ini hanya setelah Ekspor MP3.',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'Crossfade harus lebih pendek dari wilayah. Siklus yang diekspor lebih pendek sebesar tumpang tindih itu. Equal-power adalah kurva default.',
  tool_make_a_seamless_audio_loop_rules_item_4:
    'Dekode bergantung pada browser. DRM, sebagian codec, dan wadah video gagal dengan galat yang jelas.',
  tool_make_a_seamless_audio_loop_rules_item_5:
    'Halaman ini tidak mencampur dua lagu, tidak menulis M4A, tidak mengukur BPM, tidak mencari titik loop, dan tidak mengambil YouTube. Satu berkas, satu wilayah, satu loop.',
  tool_make_a_seamless_audio_loop_rules_title: 'Aturan yang perlu diketahui',
  tool_make_a_seamless_audio_loop_sample: 'Muat contoh',
  tool_make_a_seamless_audio_loop_start: 'Awal (detik)',
  tool_make_a_seamless_audio_loop_status_done: 'Selesai.',
  tool_make_a_seamless_audio_loop_title: 'Buat loop audio yang mulus',
  tool_make_a_seamless_audio_loop_usecase_1:
    'Ubah bed game dua detik menjadi loop audio yang mulus dan ekspor WAV untuk mesin yang mengulang berkas.',
  tool_make_a_seamless_audio_loop_usecase_2:
    'Bed siaran: tandai groove, pertahankan crossfade 50 md, panggang 8 putaran di pengaturan lanjutan, ekspor MP3.',
  tool_make_a_seamless_audio_loop_usecase_3:
    'Haluskan loop ambient atau drone dengan crossfade 200–500 md agar sambungan menghilang.',
  tool_make_a_seamless_audio_loop_usecases_title: 'Cocok untuk',
  tool_make_a_seamless_audio_loop_why_choose_body:
    'Dibangun untuk satu pelipatan dan satu unduhan, dengan fade yang bisa didengar dan batas yang tertulis di halaman.',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    'Dekode dan pelipatan tetap di tab ini; Ekspor MP3 adalah pertama kalinya skrip encoder dimuat.',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    'Crossfade equal-power default aktif; chip 20 / 50 / 200 / 500 md mencocokkan drum versus pad.',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'Setelah Buat loop, Putar mengulang hasil sehingga Anda menilai sambungan sebelum mengunduh.',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    'Berkas terlalu besar dan keluaran panggang lebih dari sekitar 3 menit ditolak, bukan dipotong diam-diam.',
  tool_make_a_seamless_audio_loop_why_choose_title: 'Mengapa memakai Buat loop audio yang mulus',
  tool_make_a_seamless_audio_loop_zerocross: 'Rekatkan Awal dan Akhir ke zero-crossing terdekat',
  tool_make_a_seamless_audio_loop_zerocross_hint:
    'Default aktif. Menstabilkan tepi sebelum wrap. Matikan jika butuh tepi akurat per sampel.',
};
export default id;
