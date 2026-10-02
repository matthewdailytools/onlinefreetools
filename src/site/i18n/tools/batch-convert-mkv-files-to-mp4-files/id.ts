import type { SiteLangDict } from '../../../types';

/**
 * Bahasa Indonesia (D3 batch): banyak MKV lokal → MP4 AAC stereo, unduh ZIP.
 * Niat pencarian: ubah banyak mkv ke mp4, batch mkv, tanpa unggah ke server.
 */
const id: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'Ubah banyak file MKV menjadi MP4',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'Ubah beberapa MKV lokal ke MP4 AAC stereo di browser, lalu unduh satu ZIP. ~20 file, ~5 GiB with OPFS per file. Tanpa unggah ke server.',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    'Ubah batch MKV lokal ke MP4 AAC stereo di perangkat Anda, lalu unduh satu ZIP. Langkah: tambah MKV → Ubah semua → Unduh ZIP. Contoh: Muat contoh mengantre dua clip Matroska pendek dan mengemas kedua MP4. sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa) per file, antrean ~20. Baris gagal dilewati; yang sukses tetap masuk ZIP sebagian. Hanya file lokal, bukan tautan YouTube; tetap di perangkat tanpa unggah ke server. Satu file saja? Ubah satu file MKV ke MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    'Folder rekaman Matroska sering perlu MP4 untuk editor. Halaman ini memakai konversi AAC yang sama dengan alat satu file, tapi mengantre banyak MKV, menampilkan status per baris, dan mengemas MP4 sukses ke ZIP. Bukan ekstrak audio batch saja, bukan unduh URL — satu clip → halaman satu file.',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'Pilih file MKV',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'Jatuhkan beberapa .mkv lokal (sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa) per file, hingga ~20). Audio jadi AAC stereo. Bukan YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'Antrean',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '{n} file dalam antrean',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'Ubah semua',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'Unduh ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'Muat contoh',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'Hapus',
  tool_batch_convert_mkv_files_to_mp4_files_stop: 'Berhenti',
  tool_batch_convert_mkv_files_to_mp4_files_remove: 'Buang',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: 'Pengaturan audio (opsional)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: 'Saluran audio',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'Stereo (bawaan)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'Mono',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'Kualitas AAC',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: 'Ukuran lebih kecil',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'Seimbang',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: 'Kualitas lebih tinggi (bawaan)',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    'Bawaan berlaku untuk setiap file di antrean. Mengubah pengaturan menghapus ZIP yang sudah jadi.',
  tool_batch_convert_mkv_files_to_mp4_files_progress: 'Progres batch',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'Muat mesin',
  tool_batch_convert_mkv_files_to_mp4_files_read: 'Baca',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'Dekode',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'Enkode',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'Kemas ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_done:
    'Selesai. Unduh ZIP — atau buka halaman satu MKV→MP4 jika hanya satu clip.',
  tool_batch_convert_mkv_files_to_mp4_files_failed:
    'Batch gagal. Periksa error per baris atau coba MKV lebih kecil/lebih sedikit.',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: '{s} dtk berlalu',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'Hasil ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_result: '{n} MP4 dikemas · ZIP {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '{ok} sukses, {fail} gagal · ZIP {output} KiB (sebagian). Unduhan tetap berisi yang sukses.',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'Tambah MKV atau muat contoh dulu.',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'Belum ada file. Jatuhkan .mkv lokal (~5 GiB with OPFS per file) atau Muat contoh. Bukan YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: 'Mengantre',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: 'Mengubah…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 siap',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: 'Gagal',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: 'Dihentikan',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'Jatuhkan satu atau lebih file MKV.',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: 'File tidak didukung. Halaman ini hanya .mkv.',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'Sebuah file melebihi sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa) atau antrean terlalu besar untuk browser ini.',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'Terlalu banyak file. Pertahankan ~20 MKV atau kurang per batch.',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'Tidak bisa membuka file sebagai Matroska atau tidak ada trek video/audio yang bisa dipakai.',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'Sebuah codec tidak bisa didekode/dienkode di sini. Baris itu gagal; yang lain bisa dikemas.',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: 'Tidak bisa menulis MP4 untuk satu baris. Coba lagi atau buang.',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'Tidak bisa membuat ZIP. Klik Ubah semua lagi.',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'Contoh MKV tidak termuat. Pakai file Anda sendiri.',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'Mesin konversi tidak termuat di browser ini.',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: 'Konversi dihentikan.',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'Cara batch ubah MKV ke MP4',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'Antrekan MKV lokal, Ubah semua, lalu Unduh ZIP — setiap sukses adalah MP4 AAC stereo.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    'Pilih beberapa .mkv lokal (~5 GiB with OPFS per file) atau Muat contoh.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    'Opsional: buka Pengaturan audio untuk mono atau AAC lebih kecil (berlaku seluruh batch).',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    'Klik Ubah semua dan pantau tiap baris (atau Berhenti). Baris gagal dilewati; sisanya lanjut.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    'Saat progres selesai, Unduh ZIP. Satu clip saja → halaman satu MKV ke MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'Mengapa pakai batch MKV→MP4 ini',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    'Satu ZIP MP4 AAC tanpa mengunggah folder Matroska ke cloud.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    'Status per baris dan lewati jika gagal — satu trek rusak tidak menghentikan seluruh batch.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    'Mesin AAC sama dengan halaman satu file, batas jelas — bukan remux diam-diam.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    'Jalur jelas ke konversi satu file dan ekstrak audio setelah MP4 siap.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: 'Batas batch MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    'Hanya .mkv lokal. Audio di-enkode ulang ke AAC. Batas dan gagal per baris dijelaskan di awal — rip besar tetap butuh ffmpeg desktop.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    'sekitar 5 GiB dengan OPFS (sekitar 1 GiB tanpa) per file, ~20 per batch. Jika melebihi, halaman memberi pesan jelas.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'Tanpa unduh URL atau YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC stereo (atau mono) sengaja ditulis. E-AC-3 bisa lewat helper bersama; video eksotis bisa gagal satu baris.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    'MKV asli tidak ditimpa. Bukan ekstrak audio batch saja — lihat halaman terkait.',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: 'Coba batch nyata',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'Muat contoh mengantre dua MKV pendek situs; Ubah semua mengemas ke ZIP. Uji sendiri pakai file Anda di bawah batas.',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'Kapan cocok',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    'Folder rekaman layar MKV harus jadi MP4 karena editor menolak Matroska.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    'Beberapa MKV DDP/Atmos perlu AAC sebelum mengekstrak audio dari MP4 hasilnya.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    'Ingin unduh ZIP sekaligus tanpa mengirim batch ke konverter online.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: 'Bisa tempel URL YouTube?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'Tidak. Hanya file .mkv lokal.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: 'Bedanya dengan ubah satu MKV ke MP4?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'Halaman itu satu file dan unduh MP4 langsung. Ini mengantre banyak file dan unduh ZIP. Mesin AAC sama.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: 'Kalau satu MKV gagal?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'Baris menampilkan Gagal dan dilewati. MP4 sukses tetap masuk ZIP sebagian untuk diunduh.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: 'Hanya remux (codec audio sama)?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'Tidak. Audio selalu di-enkode ulang ke AAC. Video disalin jika memungkinkan.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: 'Hanya butuh WAV/MP3 dari banyak MKV — salah halaman?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    'Hanya suara: pakai ekstrak audio batch dari MKV. Di sini keluaran MP4 video dalam ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: 'Apakah folder saya diunggah?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    'Tidak. Konversi di tab browser; file tetap di perangkat tanpa unggah ke server. Skrip mesin dimuat sekali dari situs ini.',
};

export default id;
