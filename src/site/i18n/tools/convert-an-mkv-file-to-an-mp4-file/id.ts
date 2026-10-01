import type { SiteLangDict } from '../../../types';

/**
 * Bahasa Indonesia: konversi MKV ke MP4 di browser (D2).
 * AAC stereo; bukan remux murni; bukan YouTube; sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa); E-AC-3 via helper WASM.
 * Kunci selaras master EN; tulis ulang native, bukan terjemahan kaku dari Inggris.
 */
const id: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'Konversi file MKV ke file MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'Ubah satu MKV lokal menjadi MP4 di browser, dengan audio AAC stereo. Video disalin jika memungkinkan. sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa). Tidak diunggah.',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    'Konversi satu MKV lokal menjadi MP4 di perangkat Anda, dengan trek AAC stereo agar pemutar dan alat ekstraksi bisa memakainya. Langkah: pilih MKV → Konversi → Unduh. Contoh: Muat contoh mengonversi klip Matroska sintetis pendek. Paket video disalin bila browser bisa mempertahankan codec; audio selalu dienkode ulang ke AAC (E-AC-3 / DDP bisa didekode lewat helper WASM di halaman). Batas awal sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa) — rip lebih besar tetap di ffmpeg desktop. Hanya lokal, bukan unduh tautan YouTube. Tidak pernah diunggah. Hanya butuh suara setelahnya? Buka Ekstrak audio dari file MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    'Editor dan ponsel sering minta MP4, sementara rekaman datang sebagai MKV. Halaman ini remux bila aman dan selalu menulis AAC stereo — bukan remux bisu yang menyisakan E-AC-3 sulit diputar di browser. Tidak mengambil URL jarak jauh, belum ada batch ZIP, dan tidak menggantikan halaman ekstrak audio — setelah MP4 AAC, alat terkait jadi langkah berikutnya.',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'Pilih file MKV',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'Letakkan satu .mkv lokal (sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa). Audio menjadi AAC stereo. Bukan YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: 'Konversi',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'Unduh',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'Muat contoh',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'Hapus',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: 'Berhenti',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: 'Pengaturan audio (opsional)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: 'Saluran audio',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'Stereo (bawaan)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'Mono',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'Kualitas AAC',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: 'Ukuran lebih kecil',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'Seimbang',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: 'Kualitas lebih tinggi (bawaan)',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    'Bawaan cocok untuk kebanyakan file: AAC stereo kualitas tinggi. Mengubah pengaturan menghapus unduhan yang sudah selesai.',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: 'Progres konversi',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'Muat mesin',
  tool_convert_an_mkv_file_to_an_mp4_file_read: 'Baca',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'Dekode',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'Enkode',
  tool_convert_an_mkv_file_to_an_mp4_file_write: 'Tulis',
  tool_convert_an_mkv_file_to_an_mp4_file_done:
    'Siap. Unduh MP4, atau buka alat ekstrak MP4 untuk audio saja.',
  tool_convert_an_mkv_file_to_an_mp4_file_failed:
    'Konversi gagal. Coba MKV lebih kecil atau trek audio lain.',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: '{s} dtk berlalu',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: 'Pratinjau MP4 hasil konversi',
  tool_convert_an_mkv_file_to_an_mp4_file_result: 'Masukan {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: 'demo-pendek-mkv-ke-mp4',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: 'Pilih MKV atau muat contoh terlebih dahulu.',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'Belum ada file. Letakkan .mkv lokal hingga sekitar 5 GiB dengan OPFS, atau Muat contoh. Bukan YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: 'Dihentikan. MP4 sebagian tidak disimpan.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'Letakkan tepat satu file MKV.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: 'File tidak didukung. Halaman ini hanya .mkv.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'MKV ini melebihi batas sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa) untuk konversi browser. Gunakan ffmpeg di komputer untuk file lebih besar.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'Tidak bisa dibuka sebagai Matroska, atau tidak ada trek video/audio yang bisa dipakai.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'Codec audio atau video tidak bisa didekode atau dienkode di sini. Coba trek lain, atau konversi di komputer dengan ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'Tidak bisa menulis MP4. Coba Konversi lagi.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'Tidak bisa memuat contoh MKV. Gunakan file Anda sendiri.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'Tidak bisa memuat mesin konversi di browser ini.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: 'Konversi dihentikan.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'Cara mengonversi file MKV ke file MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'Letakkan MKV lokal, jalankan Konversi, lalu Unduh MP4 — audio menjadi AAC stereo untuk ekstraksi berikutnya.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1:
    'Pilih .mkv lokal hingga sekitar 5 GiB dengan OPFS, atau klik Muat contoh.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2:
    'Opsional: buka Pengaturan audio untuk mono atau kualitas AAC lebih kecil.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3:
    'Klik Konversi dan tunggu Muat mesin → Baca → Dekode → Enkode → Tulis (atau Berhenti).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4:
    'Pratinjau jika ada, lalu Unduh. Hanya suara berikutnya: Ekstrak audio dari file MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title:
    'Mengapa konversi MKV ke MP4 di halaman ini',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1:
    'AAC stereo sengaja ditulis — bukan remux yang mempertahankan E-AC-3 sulit diputar di banyak browser.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2:
    'Video disalin bila memungkinkan sehingga klip panjang selesai lebih cepat daripada enkode ulang penuh.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3:
    'Pemrosesan tetap di perangkat; muat mesin pertama kali hanya dari situs ini.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4:
    'Langkah berikutnya jelas untuk ekstrak audio: halaman MP4 terkait setelah unduh.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV ke MP4 dengan AAC: batas jujur',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    'Satu MKV lokal per proses. Audio dienkode ulang ke AAC. Batas dan codec dijelaskan jujur — rip multi‑GB mungkin masih perlu ffmpeg desktop.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    'sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa). Melebihi → err_limit.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'Tidak ada unduh URL atau YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3 / DDP bisa didekode lewat helper AC-3 bawaan, lalu enkode AAC stereo. Codec video langka bisa err_codec.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    'MKV asli tidak pernah ditimpa. Untuk banyak file, gunakan Ubah banyak file MKV menjadi MP4 (ZIP).',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: 'Coba konversi nyata',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    'Muat contoh mengambil MKV pendek di situs, lalu Konversi berjalan. Untuk uji sungguhan, pakai .mkv Anda di bawah batas.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'Kapan ini membantu',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1:
    'MKV rekaman layar harus dibuka di editor yang hanya terima MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2:
    'MKV DDP/Atmos perlu AAC sebelum Ekstrak audio dari file MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3:
    'Ingin MP4 bisa dibagikan tanpa mengunggah Matroska ke konverter cloud.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: 'Bisa tempel URL YouTube?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'Tidak. Hanya .mkv lokal.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: 'Apakah ini hanya remux (codec audio sama)?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'Tidak. Audio selalu dienkode ulang ke AAC agar demux browser dan banyak pemutar bisa dipakai. Video masih bisa disalin tanpa enkode ulang.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'MKV saya Dolby Atmos / DDP / E-AC-3 — apakah bisa?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'Sering ya di bawah batas ukuran: halaman memuat dekoder AC-3/E-AC-3, downmix ke AAC stereo, lalu menulis MP4. Rip sangat besar bisa gagal atau lambat — pakai ffmpeg desktop.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: 'Apakah file saya diunggah?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4:
    'Tidak. Konversi berjalan di browser. Skrip mesin dimuat sekali dari situs ini.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: 'Saya hanya butuh trek audio — pakai halaman ini?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'Jika MKV sudah cocok fallback ekstraksi dan codec ramah browser: Ekstrak audio dari file MKV. Jika DDP atau terlalu besar untuk ekstraksi: konversi di sini dulu, lalu Ekstrak audio dari file MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: 'WebM atau MOV, bukan MKV?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6:
    'Halaman ini hanya terima .mkv. Kontainer lain nanti punya halaman konversi sendiri.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: 'Konversi banyak MKV sekaligus?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7:
    'Belum ada batch ZIP di halaman ini. Untuk sementara, satu file per proses.',
};
export default id;
