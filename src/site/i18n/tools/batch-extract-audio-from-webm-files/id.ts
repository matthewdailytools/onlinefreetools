import type { SiteLangDict } from '../../../types';

/**
 * Bahasa Indonesia: Ekstrak audio dari banyak file WebM.
 * Antrean hanya .webm ; ekstrak berurutan ; ZIP parsial menyimpan yang berhasil ;
 * batas fallback ~500 MiB / 4 jam per file ; maks 30 file ; tanpa YouTube.
 */
const id: SiteLangDict = {
  tool_batch_extract_audio_from_webm_files_title: 'Ekstrak audio dari banyak file WebM',
  tool_batch_extract_audio_from_webm_files_desc:
    'Ekstrak audio dari WebM lokal satu per satu ke ZIP WAV/MP3. Fallback ~500 MiB tiap file—ZIP parsial menyimpan yang berhasil.',
  tool_batch_extract_audio_from_webm_files_description:
    'Antrekan file WebM lokal, ekstrak berurutan lewat jalur fallback mesin bersama (~500 MiB / 4 jam tiap file), lewati kegagalan dengan kode jelas, unduh ZIP. Langkah: tambah WebM → Ekstrak → Unduh ZIP. Contoh: Muat sampel membuat dua klip pendek saat MediaRecorder berfungsi. Bukan YouTube. Untuk satu file gunakan Ekstrak audio dari file WebM.',
  tool_batch_extract_audio_from_webm_files_article:
    'Folder tangkapan WebM sering butuh paket ZIP hanya suara. Halaman ini mengantrekan .webm saja, mengekstrak satu per satu, melewatkan yang terlalu besar dengan err_container, dan mengemas yang berhasil. Tanpa YouTube. Tanpa klaim demux 5 GiB.',
  tool_batch_extract_audio_from_webm_files_choose: 'Pilih file WebM',
  tool_batch_extract_audio_from_webm_files_hint:
    'Hingga 30 file .webm lokal. Fallback per file ~500 MiB / 4 jam. Kegagalan dilewati; ZIP menyimpan yang berhasil.',
  tool_batch_extract_audio_from_webm_files_list_label: 'Antrean file',
  tool_batch_extract_audio_from_webm_files_convert: 'Ekstrak',
  tool_batch_extract_audio_from_webm_files_stop: 'Berhenti',
  tool_batch_extract_audio_from_webm_files_download: 'Unduh ZIP',
  tool_batch_extract_audio_from_webm_files_sample: 'Muat sampel',
  tool_batch_extract_audio_from_webm_files_clear: 'Hapus',
  tool_batch_extract_audio_from_webm_files_advanced: 'Format ekspor (opsional)',
  tool_batch_extract_audio_from_webm_files_format_label: 'Format keluaran',
  tool_batch_extract_audio_from_webm_files_format_wav: 'WAV (16-bit)',
  tool_batch_extract_audio_from_webm_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_webm_files_bitrate: 'Bitrate MP3',
  tool_batch_extract_audio_from_webm_files_settings_hint:
    'WAV default untuk klip pendek. Batas mengikuti jalur fallback. Tanpa URL.',
  tool_batch_extract_audio_from_webm_files_progress: 'Progres ekstrak batch',
  tool_batch_extract_audio_from_webm_files_read: 'Baca',
  tool_batch_extract_audio_from_webm_files_decode: 'Decode',
  tool_batch_extract_audio_from_webm_files_extract: 'Ekstrak',
  tool_batch_extract_audio_from_webm_files_write: 'Tulis',
  tool_batch_extract_audio_from_webm_files_pack: 'Kemas ZIP',
  tool_batch_extract_audio_from_webm_files_done: 'Siap. Unduh ZIP file audio hasil ekstrak.',
  tool_batch_extract_audio_from_webm_files_failed:
    'Ekstrak batch gagal. Hapus file rusak atau coba lebih sedikit.',
  tool_batch_extract_audio_from_webm_files_elapsed: '{s}d berlalu',
  tool_batch_extract_audio_from_webm_files_preview: 'Hasil batch',
  tool_batch_extract_audio_from_webm_files_result: '{n} file audio dikemas · ZIP {output} KiB',
  tool_batch_extract_audio_from_webm_files_partial:
    'OK {ok}, gagal {fail} · ZIP tetap berisi yang berhasil ({output} KiB)',
  tool_batch_extract_audio_from_webm_files_sample_name: 'batch-webm-audio-demo',
  tool_batch_extract_audio_from_webm_files_empty: 'Tambahkan setidaknya satu file WebM atau muat sampel dulu.',
  tool_batch_extract_audio_from_webm_files_empty_state:
    'Belum ada file. Jatuhkan .webm lokal. Bukan YouTube.',
  tool_batch_extract_audio_from_webm_files_remove: 'Hapus',
  tool_batch_extract_audio_from_webm_files_queue_count: '{n} file dalam antrean',
  tool_batch_extract_audio_from_webm_files_status_pending: 'Menunggu',
  tool_batch_extract_audio_from_webm_files_status_running: 'Mengekstrak…',
  tool_batch_extract_audio_from_webm_files_status_ok: 'Selesai',
  tool_batch_extract_audio_from_webm_files_status_fail: 'Gagal',
  tool_batch_extract_audio_from_webm_files_status_stopped: 'Dihentikan',
  tool_batch_extract_audio_from_webm_files_err_file: 'Tambahkan file WebM yang bisa didekode browser.',
  tool_batch_extract_audio_from_webm_files_err_format:
    'File tidak didukung. Gunakan hanya .webm di halaman ini.',
  tool_batch_extract_audio_from_webm_files_err_limit:
    'Sebuah file melebihi batas ukuran/durasi di jalur fallback.',
  tool_batch_extract_audio_from_webm_files_err_container:
    'Sebuah file melebihi batas fallback ~500 MiB / 4 jam—atau bukan WebM valid. Baris dilewati.',
  tool_batch_extract_audio_from_webm_files_err_codec:
    'Sebuah file memakai codec audio yang tidak didukung. Baris dilewati.',
  tool_batch_extract_audio_from_webm_files_err_channels:
    'Sebuah file memakai layout saluran yang tidak didukung. Baris dilewati.',
  tool_batch_extract_audio_from_webm_files_err_decode: 'Browser tidak bisa mendekode audio dari sebuah file.',
  tool_batch_extract_audio_from_webm_files_err_encoder: 'Tidak bisa menulis file audio.',
  tool_batch_extract_audio_from_webm_files_err_zip: 'Tidak bisa membuat ZIP.',
  tool_batch_extract_audio_from_webm_files_err_too_many: 'Batas antrean adalah 30 file.',
  tool_batch_extract_audio_from_webm_files_err_sample: 'Tidak bisa membuat sampel. Jatuhkan file Anda sendiri.',
  tool_batch_extract_audio_from_webm_files_err_unsupported: 'Browser ini tidak punya Web Audio.',
  tool_batch_extract_audio_from_webm_files_err_empty: 'Tidak ada sampel audio yang bisa dipakai.',
  tool_batch_extract_audio_from_webm_files_forced_mp3: 'File panjang/besar memakai streaming MP3.',
  tool_batch_extract_audio_from_webm_files_how_title: 'Cara mengekstrak audio dari banyak file WebM',
  tool_batch_extract_audio_from_webm_files_how_body:
    'Antrekan WebM lokal, ekstrak satu per satu, unduh ZIP.',
  tool_batch_extract_audio_from_webm_files_how_item_1: 'Pilih beberapa .webm atau Muat sampel.',
  tool_batch_extract_audio_from_webm_files_how_item_2: 'Opsional atur MP3 sebagai ganti WAV.',
  tool_batch_extract_audio_from_webm_files_how_item_3:
    'Klik Ekstrak; gunakan Berhenti untuk membatalkan baris yang tersisa.',
  tool_batch_extract_audio_from_webm_files_how_item_4: 'Unduh ZIP. Baris gagal dilewati.',
  tool_batch_extract_audio_from_webm_files_why_choose_title:
    'Mengapa memakai Ekstrak audio dari banyak file WebM',
  tool_batch_extract_audio_from_webm_files_why_choose_item_1:
    'Ekstrak berurutan menjaga memori stabil.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_2:
    'Status per baris; satu kegagalan tidak menghapus ZIP.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_3: 'Batas fallback jujur untuk WebM.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_4:
    'Pemrosesan di perangkat; hub dekat untuk format campuran.',
  tool_batch_extract_audio_from_webm_files_rules_title: 'Ekstrak WebM berurutan dan kejujuran ZIP',
  tool_batch_extract_audio_from_webm_files_rules_body:
    'Setiap WebM diklasifikasi lalu diekstrak sendiri. ZIP parsial menyimpan yang berhasil.',
  tool_batch_extract_audio_from_webm_files_rules_item_1:
    'Hingga 30 file; masing-masing ~500 MiB / 4 jam fallback.',
  tool_batch_extract_audio_from_webm_files_rules_item_2: 'Tanpa URL atau unduhan YouTube.',
  tool_batch_extract_audio_from_webm_files_rules_item_3:
    'Kegagalan dilewati dengan err_container / err_codec bila berlaku.',
  tool_batch_extract_audio_from_webm_files_rules_item_4: 'File tetap di perangkat Anda.',
  tool_batch_extract_audio_from_webm_files_example_title: 'Coba batch nyata',
  tool_batch_extract_audio_from_webm_files_example:
    'Muat sampel membuat dua klip pendek bila memungkinkan, lalu mengemas ZIP.',
  tool_batch_extract_audio_from_webm_files_usecases_title: 'Kapan ini membantu',
  tool_batch_extract_audio_from_webm_files_usecase_1:
    'Folder tangkapan WebM butuh trek suara dalam satu ZIP.',
  tool_batch_extract_audio_from_webm_files_usecase_2: 'Ekstrak massal tanpa mengunggah setiap file.',
  tool_batch_extract_audio_from_webm_files_usecase_3:
    'Campur dengan file terlalu besar—ZIP parsial tetap berguna.',
  tool_batch_extract_audio_from_webm_files_faq_q1: 'Playlist YouTube?',
  tool_batch_extract_audio_from_webm_files_faq_a1: 'Tidak. Hanya .webm lokal.',
  tool_batch_extract_audio_from_webm_files_faq_q2: 'Hanya satu file?',
  tool_batch_extract_audio_from_webm_files_faq_a2: 'Gunakan halaman ekstrak WebM tunggal.',
  tool_batch_extract_audio_from_webm_files_faq_q3: 'Mengapa 500 MiB bukan 5 GiB?',
  tool_batch_extract_audio_from_webm_files_faq_a3:
    'Belum ada demux WebM; batas fallback berlaku. MP4/MOV punya demux besar.',
  tool_batch_extract_audio_from_webm_files_faq_q4: 'Diunggah?',
  tool_batch_extract_audio_from_webm_files_faq_a4: 'Tidak. Hanya di browser.',
  tool_batch_extract_audio_from_webm_files_faq_q5: 'Satu file raksasa gagal?',
  tool_batch_extract_audio_from_webm_files_faq_a5:
    'Baris itu gagal dengan err_container; yang lain tetap dikemas.',
  tool_batch_extract_audio_from_webm_files_faq_q6: 'Potong setelahnya?',
  tool_batch_extract_audio_from_webm_files_faq_a6:
    'Unduh ZIP, lalu gunakan alat potong per file.',
};
export default id;
