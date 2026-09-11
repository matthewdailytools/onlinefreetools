/**
 * i18n tool shard (split-an-audio-file-by-duration / id).
 * H1 kalimat tugas; bagian sama / tiap 60 detik di desc dan FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Salinan Indonesia: pecah berkas audio berdasarkan durasi lalu unduh ZIP. */
const id: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: 'Pengaturan lanjutan (opsional)',
  tool_split_an_audio_file_by_duration_article:
    'Pecah berkas audio berdasarkan durasi di tab ini: buka berkas, isi detik, klik Pecah menurut durasi, lalu Unduh ZIP. Tiap klip N detik, yang terakhir menyimpan sisa. Berkas tetap di perangkat dan tidak diunggah ke server.',
  tool_split_an_audio_file_by_duration_bitrate: 'Bitrate MP3',
  tool_split_an_audio_file_by_duration_bitrate_hint: 'Bawaan 128 kbps. Hanya dipakai jika ZIP berisi MP3.',
  tool_split_an_audio_file_by_duration_chip_180: '3 mnt',
  tool_split_an_audio_file_by_duration_chip_30: '30 d',
  tool_split_an_audio_file_by_duration_chip_300: '5 mnt',
  tool_split_an_audio_file_by_duration_chip_60: '60 d',
  tool_split_an_audio_file_by_duration_choose_file: 'Pilih berkas audio',
  tool_split_an_audio_file_by_duration_chunk: 'Panjang tiap potongan (detik)',
  tool_split_an_audio_file_by_duration_chunk_hint:
    '2 detik cocok untuk contoh. Untuk kuliah, coba 60 d atau 3 mnt. Klip terakhir menyimpan sisa waktu.',
  tool_split_an_audio_file_by_duration_clear: 'Hapus',
  tool_split_an_audio_file_by_duration_clip_download: 'Unduh klip ini',
  tool_split_an_audio_file_by_duration_clip_play: 'Putar klip ini',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'Klip {n} · {dur}d ({start}s–{end}s)',
  tool_split_an_audio_file_by_duration_clips_title: 'Klip siap masuk ZIP',
  tool_split_an_audio_file_by_duration_desc:
    'Potong berkas jadi klip sama panjang dan unduh ZIP; tetap di perangkat, tanpa unggah ke server.',
  tool_split_an_audio_file_by_duration_description:
    'Pecah berkas audio berdasarkan durasi di perangkat: potongan sama panjang, terakhir menyimpan sisa, ZIP siap — tanpa unggah ke server. Langkah: buka berkas, atur detik (contoh 2 d; chip 30 / 60 / 180 / 300 d), Pecah menurut durasi, Unduh ZIP. Contoh: 5,00 d dengan 2 d jadi 2,00 / 2,00 / 1,00 d. Bagi audio menurut durasi, bagi mp3 jadi bagian sama, atau potong audio tiap 60 detik adalah pekerjaan yang sama. Bukan pecah pada jeda sunyi, bukan cue, bukan potong manual, bukan bisukan video.',
  tool_split_an_audio_file_by_duration_download_zip: 'Unduh ZIP',
  tool_split_an_audio_file_by_duration_drop_hint: 'Atau jatuhkan WAV, MP3, M4A, atau OGG di sini. Proses tetap di tab ini.',
  tool_split_an_audio_file_by_duration_empty: 'Pilih berkas audio dulu.',
  tool_split_an_audio_file_by_duration_equal_parts: 'Atau bagi jadi N bagian sama',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    'Kosong = pakai kolom detik. 2–50 membuat panjang potongan = total ÷ N untuk pemotongan ini.',
  tool_split_an_audio_file_by_duration_err_caps:
    'Berkas melebihi batas perangkat ini (sekitar 40 MB / 20 mnt di desktop, 20 MB / 8 mnt di layar sempit). Pendekkan dulu atau pakai berkas lebih pendek.',
  tool_split_an_audio_file_by_duration_err_chunk:
    'Panjang potongan harus 0,5 sampai 1200 detik. Naikkan jika kena batas 50 klip.',
  tool_split_an_audio_file_by_duration_err_decode:
    'Peramban ini tidak bisa mendekode berkas itu. Coba WAV atau MP3, atau klip tanpa DRM.',
  tool_split_an_audio_file_by_duration_err_empty: 'Tidak ada yang diproses. Muat berkas atau contoh dulu.',
  tool_split_an_audio_file_by_duration_err_lame: 'Encoder MP3 gagal dimuat. Tetap di tab ini dan coba Unduh ZIP lagi.',
  tool_split_an_audio_file_by_duration_err_too_many:
    'Lebih dari 50 klip. Perbesar detik (coba 60 d atau 3 mnt). Halaman menolak, tidak memotong diam-diam.',
  tool_split_an_audio_file_by_duration_err_video:
    'Halaman ini tidak menerima video sebagai masukan utama. Ia memecah berkas suara menurut durasi; tidak membisukan video.',
  tool_split_an_audio_file_by_duration_err_zip: 'Pustaka ZIP gagal dimuat. Tetap di tab ini dan coba Unduh ZIP lagi.',
  tool_split_an_audio_file_by_duration_example:
    'Muat contoh membuat nada 5,00 detik 440 Hz. Pecah menurut durasi 2,00 d memotong di 2,00 d dan 4,00 d: tiga klip 2,00 / 2,00 / 1,00 d (terakhir menyimpan sisa). Unduh ZIP menulis sample-01.wav kecuali Anda pilih MP3 di Pengaturan lanjutan.',
  tool_split_an_audio_file_by_duration_example_title: 'Contoh',
  tool_split_an_audio_file_by_duration_faq_a1:
    'Tidak. Dekode, potong, dan ZIP berjalan di tab ini. Skrip dari situs ini. Berkas tidak dikirim ke server kami.',
  tool_split_an_audio_file_by_duration_faq_a2:
    'Ya. Pecah audio berdasarkan durasi, bagi mp3 jadi bagian sama, potong audio tiap 60 detik, atau unduh klip ZIP adalah alat ini: potong berkas lokal tiap N detik dan bawa banyak berkas dalam satu ZIP. N bagian sama ada di Pengaturan lanjutan.',
  tool_split_an_audio_file_by_duration_faq_a3:
    'Klip terakhir menyimpan sisa waktu. Berkas 5,00 d dengan 2 d jadi 2,00 / 2,00 / 1,00 d, tanpa diisi sunyi.',
  tool_split_an_audio_file_by_duration_faq_a4:
    'Tidak. Pecah rekaman pada jeda sunyi memotong di jeda. Di sini yang diikuti jam. Cue dan pecah menurut ukuran berkas di luar cakupan.',
  tool_split_an_audio_file_by_duration_faq_a5:
    'Di contoh biarkan 2 d. Untuk klip sosial 30 d atau 60 d; kuliah 3 mnt atau 5 mnt. Empat berkas sama: isi 4 di lanjutan.',
  tool_split_an_audio_file_by_duration_faq_a6:
    'Di dalam ZIP namanya {stem}-01.wav (atau .mp3). Satu klip juga bisa diunduh dari daftar. Batas 50; lebih dari itu ditolak.',
  tool_split_an_audio_file_by_duration_faq_a7:
    'Tidak. Bukan peredam derau, bukan bisukan video, bukan cue/APE, bukan potong manual, bukan unduh YouTube. Pakai berkas suara yang Anda berhak olah.',
  tool_split_an_audio_file_by_duration_faq_a8:
    'Desktop: sekitar 40 MB atau 20 menit. Layar sempit: sekitar 20 MB atau 8 menit. Melebihi batas ditolak sebelum dekode.',
  tool_split_an_audio_file_by_duration_faq_q1: 'Apakah berkas audio diunggah ke server?',
  tool_split_an_audio_file_by_duration_faq_q2:
    'Saya mencari bagi mp3 jadi bagian sama atau pecah audio berdasarkan durasi. Apakah itu alat lain?',
  tool_split_an_audio_file_by_duration_faq_q3: 'Kalau tidak habis dibagi, bagaimana klip terakhir?',
  tool_split_an_audio_file_by_duration_faq_q4: 'Apa dipotong di jeda sunyi, mengikuti cue, atau menurut ukuran?',
  tool_split_an_audio_file_by_duration_faq_q5: 'Berapa detik per potongan yang pas?',
  tool_split_an_audio_file_by_duration_faq_q6: 'Bagaimana nama berkas, dan berapa klip maksimal?',
  tool_split_an_audio_file_by_duration_faq_q7: 'Bisa redam derau, potong video, baca cue, atau unduh YouTube?',
  tool_split_an_audio_file_by_duration_faq_q8: 'Seberapa besar berkas yang bisa diproses?',
  tool_split_an_audio_file_by_duration_format: 'Format di dalam ZIP',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV adalah PCM lossless. MP3 memuat encoder hanya saat Anda klik Unduh ZIP.',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    'Potong tiap N detik menurut jam, sisa di klip terakhir, lalu unduh ZIP tanpa unggah ke server.',
  tool_split_an_audio_file_by_duration_how_item_1: 'Buka berkas audio (atau klik Muat contoh).',
  tool_split_an_audio_file_by_duration_how_item_2: 'Biarkan 2 detik, atau sentuh chip / ketik durasi.',
  tool_split_an_audio_file_by_duration_how_item_3: 'Klik Pecah menurut durasi.',
  tool_split_an_audio_file_by_duration_how_item_4: 'Klik Unduh ZIP.',
  tool_split_an_audio_file_by_duration_how_title: 'Cara memakai',
  tool_split_an_audio_file_by_duration_hud_decode: 'Mendekode berkas di tab ini…',
  tool_split_an_audio_file_by_duration_hud_decoded: 'Selesai dekode. Garis putih adalah potongan rencana. Klik Pecah menurut durasi jika panjangnya pas.',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: '{s}d berlalu',
  tool_split_an_audio_file_by_duration_hud_encode: 'Mengode klip MP3…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'Perbaiki berkas atau detik, lalu Pecah menurut durasi lagi.',
  tool_split_an_audio_file_by_duration_hud_fail_title: 'Pecah menurut durasi berhenti',
  tool_split_an_audio_file_by_duration_hud_next: 'Selesai. Langkah berikutnya: Unduh ZIP.',
  tool_split_an_audio_file_by_duration_hud_next_zip: 'Selesai. Unduhan ZIP seharusnya mulai.',
  tool_split_an_audio_file_by_duration_hud_pack: 'Memasukkan klip ke ZIP…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: 'Memotong klip sama panjang…',
  tool_split_an_audio_file_by_duration_hud_step_decode: 'Dekode',
  tool_split_an_audio_file_by_duration_hud_step_pack: 'Kemas',
  tool_split_an_audio_file_by_duration_hud_step_split: 'Pecah',
  tool_split_an_audio_file_by_duration_hud_title: 'Progres Pecah menurut durasi',
  tool_split_an_audio_file_by_duration_hud_working: 'Mulai…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}d · {rate} Hz · {ch} kanal',
  tool_split_an_audio_file_by_duration_pause: 'Jeda',
  tool_split_an_audio_file_by_duration_play: 'Putar',
  tool_split_an_audio_file_by_duration_preview_hint: 'Garis putih adalah potongan tiap N detik. Putar untuk mendengar berkas sekarang.',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}d · panjang potongan mencakup seluruh berkas, jadi ZIP hanya berisi berkas ini. Perpendek detik, lalu Pecah menurut durasi lagi. Unduh ZIP sudah siap.',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}d · tiap {chunk}d → {count} klip: {list}. Unduh ZIP sudah siap.',
  tool_split_an_audio_file_by_duration_rules_body:
    'Titik potong di k × D detik, D adalah panjang potongan. Klip terakhir [floor(T / D) × D, T] dan boleh lebih pendek. Jika Anda isi N bagian sama, D = T / N untuk putaran itu. WAV adalah PCM 16-bit. MP3 CBR sesuai bitrate. ZIP dibuat di tab ini.',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'Contoh memakai 2 d. Chip menulis 30 d, 60 d, 180 d (3 mnt), atau 300 d (5 mnt) ke kolom yang sama. N bagian sama (2–50) opsional di lanjutan.',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'Batas desktop sekitar 40 MB atau 20 menit; layar sempit sekitar 20 MB atau 8 menit. Melebihi ditolak, tidak dipotong. Lebih dari 50 klip juga ditolak.',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'Berkas tetap di perangkat; tidak diunggah ke server. JSZip dan encoder MP3 dimuat dari situs ini hanya setelah Unduh ZIP.',
  tool_split_an_audio_file_by_duration_rules_item_4:
    'Dekode tergantung peramban. DRM, sebagian codec, dan wadah video gagal dengan pesan jelas.',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'Halaman ini mengekspor banyak berkas dalam ZIP menurut jam. Tidak memotong di sunyi, tidak mengikuti cue, tidak pecah per megabita, tidak meredam derau, tidak membisukan video, tidak mengambil YouTube.',
  tool_split_an_audio_file_by_duration_rules_title: 'Aturan yang perlu diantisipasi',
  tool_split_an_audio_file_by_duration_sample: 'Muat contoh',
  tool_split_an_audio_file_by_duration_split: 'Pecah menurut durasi',
  tool_split_an_audio_file_by_duration_status_done: 'Selesai.',
  tool_split_an_audio_file_by_duration_title: 'Pecah berkas audio berdasarkan durasi',
  tool_split_an_audio_file_by_duration_usecase_1:
    'Pecah kuliah jadi potongan 3 menit untuk perjalanan dan bawa ZIP, tanpa menunggu jeda.',
  tool_split_an_audio_file_by_duration_usecase_2:
    'Bagi mp3 jadi bagian sama 60 detik untuk media sosial dari episode panjang.',
  tool_split_an_audio_file_by_duration_usecase_3:
    'Potong memo suara panjang agar muat batas waktu obrolan; klip terakhir menyimpan sisa.',
  tool_split_an_audio_file_by_duration_usecases_title: 'Kapan cocok dipakai',
  tool_split_an_audio_file_by_duration_why_choose_body:
    'Dibuat untuk ZIP yang dipotong jam, dengan chip 30 d / 60 d / 3 mnt / 5 mnt dan klip terakhir yang jujur lebih pendek.',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'Memotong tiap N detik dan memasukkan banyak berkas ke ZIP; klip terakhir menyimpan sisa, bukan mengisi sunyi.',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    'Chip 30 d / 60 d / 3 mnt / 5 mnt plus N bagian sama opsional; bukan detektor sunyi yang berpura-pura memotong rata.',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'Berkas tetap di tab peramban ini dan tidak diunggah ke server; JSZip dan lamejs hanya dimuat saat Anda klik Unduh ZIP.',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    'Berkas terlalu besar dan lebih dari 50 klip ditolak sebelum ZIP setengah jadi — tanpa janji 1 GB yang merusak tab.',
  tool_split_an_audio_file_by_duration_why_choose_title: 'Mengapa memakai Pecah berkas audio berdasarkan durasi',
};
export default id;
