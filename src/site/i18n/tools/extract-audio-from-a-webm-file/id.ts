import type { SiteLangDict } from '../../../types';

/**
 * Bahasa Indonesia: Ekstrak audio dari file WebM.
 * Hanya .webm ; fallback MediaElement (~500 MiB / 4 jam)—bukan klaim demux 5 GiB.
 * Proses lokal ; keluaran WAV atau MP3 ; tanpa URL YouTube.
 */
const id: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: 'Ekstrak audio dari file WebM',
  tool_extract_audio_from_a_webm_file_desc:
    'Ekstrak audio Opus/Vorbis dari satu WebM lokal ke WAV atau MP3 di perangkat. Fallback browser ~500 MiB / 4 jam—bukan klaim demux 5 GiB.',
  tool_extract_audio_from_a_webm_file_description:
    'Ekstrak trek audio dari satu WebM lokal di browser, lalu unduh WAV atau MP3. Langkah: pilih WebM → Ekstrak → pratinjau → unduh. Contoh: Muat sampel membuat WebM sintetis singkat saat MediaRecorder tersedia. Halaman WebM ini memakai fallback MediaElement bersama (~500 MiB / 4 jam)—file terlalu besar gagal cepat dengan err_container. Demux besar MP4/MOV ada di halaman format itu atau hub video. Hanya lokal—bukan unduhan URL YouTube. Tidak pernah diunggah. Banyak WebM? Gunakan Ekstrak audio dari banyak file WebM.',
  tool_extract_audio_from_a_webm_file_article:
    'Rekaman layar dan tangkapan browser sering berformat WebM dengan audio Opus. Halaman ini hanya menerima .webm, memakai jalur fallback tabel kemampuan ekstrak, dan menulis WAV atau MP3 tanpa unggah. Tidak mengklaim demux ISOBMFF atau streaming OPFS multi-gigabita—itu untuk MP4/MOV. Tidak mengambil URL YouTube. Folder campuran masuk hub atau batch hub.',
  tool_extract_audio_from_a_webm_file_choose: 'Pilih file WebM',
  tool_extract_audio_from_a_webm_file_hint:
    'Jatuhkan satu .webm lokal. Batas fallback ~500 MiB / 4 jam. WebM lebih besar gagal dengan pesan kontainer jelas—remux ke MP4 untuk jalur demux besar, atau kecilkan file.',
  tool_extract_audio_from_a_webm_file_convert: 'Ekstrak',
  tool_extract_audio_from_a_webm_file_download: 'Unduh',
  tool_extract_audio_from_a_webm_file_download_wav: 'Unduh WAV',
  tool_extract_audio_from_a_webm_file_download_mp3: 'Unduh MP3',
  tool_extract_audio_from_a_webm_file_sample: 'Muat sampel',
  tool_extract_audio_from_a_webm_file_clear: 'Hapus',
  tool_extract_audio_from_a_webm_file_advanced: 'Format ekspor',
  tool_extract_audio_from_a_webm_file_format_label: 'Format keluaran',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV (16-bit)',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'Bitrate MP3',
  tool_extract_audio_from_a_webm_file_settings_hint:
    'WAV default cocok untuk WebM pendek. Klip lebih besar bisa stream MP3. Batas adalah jalur fallback (~500 MiB), bukan demux MP4. Tanpa URL.',
  tool_extract_audio_from_a_webm_file_progress: 'Progres ekstrak',
  tool_extract_audio_from_a_webm_file_read: 'Baca',
  tool_extract_audio_from_a_webm_file_decode: 'Decode',
  tool_extract_audio_from_a_webm_file_extract: 'Ekstrak',
  tool_extract_audio_from_a_webm_file_write: 'Tulis',
  tool_extract_audio_from_a_webm_file_done: 'Siap. Pratinjau audio, lalu unduh WAV atau MP3.',
  tool_extract_audio_from_a_webm_file_failed:
    'Ekstrak gagal. Coba WebM lebih kecil yang bisa didekode browser.',
  tool_extract_audio_from_a_webm_file_elapsed: '{s}d berlalu',
  tool_extract_audio_from_a_webm_file_preview: 'Dengarkan audio hasil ekstrak',
  tool_extract_audio_from_a_webm_file_result: '{seconds}d · {channels} kan. · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_a_webm_file_sample_name: 'demo-webm-audio-singkat',
  tool_extract_audio_from_a_webm_file_empty: 'Pilih file WebM atau muat sampel dulu.',
  tool_extract_audio_from_a_webm_file_empty_state:
    'Belum ada file. Jatuhkan .webm lokal (~500 MiB) atau Muat sampel. Bukan YouTube.',
  tool_extract_audio_from_a_webm_file_err_file: 'Jatuhkan tepat satu file WebM.',
  tool_extract_audio_from_a_webm_file_err_format:
    'File tidak didukung. Gunakan hanya .webm (video/webm) di halaman ini.',
  tool_extract_audio_from_a_webm_file_err_limit:
    'WebM ini melebihi batas durasi atau ukuran di jalur fallback.',
  tool_extract_audio_from_a_webm_file_err_container:
    'WebM ini melebihi batas fallback (~500 MiB / 4 jam) atau tidak bisa didekode di sini. Remux ke MP4 untuk demux besar, atau pakai WebM lebih kecil.',
  tool_extract_audio_from_a_webm_file_err_codec:
    'Codec audio WebM ini tidak didukung di jalur fallback browser.',
  tool_extract_audio_from_a_webm_file_err_channels:
    'Trek ini memakai layout saluran yang tidak bisa ditangani ekstraktor.',
  tool_extract_audio_from_a_webm_file_err_decode: 'Browser tidak bisa mendekode audio dari WebM ini.',
  tool_extract_audio_from_a_webm_file_err_encoder: 'Tidak bisa menulis file audio. Coba Ekstrak lagi.',
  tool_extract_audio_from_a_webm_file_err_sample:
    'Tidak bisa membuat sampel WebM. Jatuhkan .webm Anda sendiri.',
  tool_extract_audio_from_a_webm_file_err_unsupported:
    'Browser ini tidak punya Web Audio yang dibutuhkan untuk ekstraksi.',
  tool_extract_audio_from_a_webm_file_err_empty: 'Tidak ada sampel audio yang bisa dipakai.',
  tool_extract_audio_from_a_webm_file_stop: 'Berhenti',
  tool_extract_audio_from_a_webm_file_status_stopped: 'Dihentikan. File audio parsial tidak disimpan.',
  tool_extract_audio_from_a_webm_file_forced_mp3:
    'Input panjang/besar memakai stream MP3 di jalur fallback.',
  tool_extract_audio_from_a_webm_file_how_title: 'Cara mengekstrak audio dari file WebM',
  tool_extract_audio_from_a_webm_file_how_body:
    'Jatuhkan WebM lokal, pilih WAV atau MP3, Ekstrak, pratinjau, unduh—tanpa unggah.',
  tool_extract_audio_from_a_webm_file_how_item_1:
    'Pilih .webm lokal (~500 MiB), atau Muat sampel jika MediaRecorder berfungsi.',
  tool_extract_audio_from_a_webm_file_how_item_2:
    'Buka Format ekspor dan pilih WAV atau MP3; atur bitrate jika perlu.',
  tool_extract_audio_from_a_webm_file_how_item_3:
    'Klik Ekstrak dan tunggu Baca → Decode → Ekstrak → Tulis (atau Berhenti).',
  tool_extract_audio_from_a_webm_file_how_item_4: 'Pratinjau, lalu Unduh WAV atau Unduh MP3.',
  tool_extract_audio_from_a_webm_file_why_choose_title: 'Mengapa memakai Ekstrak audio dari file WebM',
  tool_extract_audio_from_a_webm_file_why_choose_item_1:
    'Hanya menerima WebM agar file tangkapan layar tidak tercampur dengan landing MP4.',
  tool_extract_audio_from_a_webm_file_why_choose_item_2:
    'Batas fallback jujur—tanpa pemasaran demux 5 GiB palsu untuk WebM.',
  tool_extract_audio_from_a_webm_file_why_choose_item_3:
    'Pemrosesan tetap di perangkat Anda; Berhenti membatalkan di tengah jalan.',
  tool_extract_audio_from_a_webm_file_why_choose_item_4:
    'Hub dan halaman file besar MP4/MOV ada di dekatnya saat Anda butuh demux.',
  tool_extract_audio_from_a_webm_file_rules_title: 'Hanya WebM dan batas fallback',
  tool_extract_audio_from_a_webm_file_rules_body:
    'Satu WebM lokal per proses di jalur fallback MediaElement. Bukan YouTube ke MP3. Bukan ekspor video senyap.',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    '~500 MiB / 4 jam fallback. Lebih besar → err_container. Demux besar hari ini hanya MP4/MOV.',
  tool_extract_audio_from_a_webm_file_rules_item_2: 'Tanpa URL atau unduhan YouTube.',
  tool_extract_audio_from_a_webm_file_rules_item_3: 'Keberhasilan bergantung pada dukungan WebM/Opus browser.',
  tool_extract_audio_from_a_webm_file_rules_item_4:
    'WebM asli tidak pernah ditimpa. Banyak WebM: pakai alat batch WebM.',
  tool_extract_audio_from_a_webm_file_example_title: 'Coba ekstrak WebM nyata',
  tool_extract_audio_from_a_webm_file_example:
    'Muat sampel membuat WebM sintetis singkat saat MediaRecorder tersedia, lalu Ekstrak berjalan. Lebih baik pakai .webm Anda jika sampel gagal.',
  tool_extract_audio_from_a_webm_file_usecases_title: 'Kapan ini membantu',
  tool_extract_audio_from_a_webm_file_usecase_1:
    'Tangkapan layar WebM browser → MP3 yang bisa dibagikan tanpa unggah.',
  tool_extract_audio_from_a_webm_file_usecase_2:
    'Klip wawancara WebM hanya butuh trek Opus sebagai WAV.',
  tool_extract_audio_from_a_webm_file_usecase_3:
    'Anda sudah tahu filenya WebM dan ingin landing khusus format—bukan hub campuran.',
  tool_extract_audio_from_a_webm_file_faq_q1: 'Bisakah saya menempel URL YouTube?',
  tool_extract_audio_from_a_webm_file_faq_a1: 'Tidak. Hanya .webm lokal.',
  tool_extract_audio_from_a_webm_file_faq_q2: 'Mengapa tidak 5 GiB seperti halaman MP4?',
  tool_extract_audio_from_a_webm_file_faq_a2:
    'Demux besar hari ini adalah ISOBMFF (MP4/MOV). WebM memakai fallback MediaElement ~500 MiB sampai demux WebM tersedia.',
  tool_extract_audio_from_a_webm_file_faq_q3: 'Apakah ini membisukan WebM (video senyap)?',
  tool_extract_audio_from_a_webm_file_faq_a3: 'Tidak. Hanya mengekstrak audio ke WAV/MP3.',
  tool_extract_audio_from_a_webm_file_faq_q4: 'Apakah file saya diunggah?',
  tool_extract_audio_from_a_webm_file_faq_a4: 'Tidak. Decode dan tulis berjalan di browser Anda.',
  tool_extract_audio_from_a_webm_file_faq_q5: 'Saya punya banyak WebM—halaman mana?',
  tool_extract_audio_from_a_webm_file_faq_a5:
    'Gunakan Ekstrak audio dari banyak file WebM untuk ZIP dari yang berhasil.',
  tool_extract_audio_from_a_webm_file_faq_q6: 'Bisakah saya memotong setelah ekstrak?',
  tool_extract_audio_from_a_webm_file_faq_a6:
    'Tidak di sini. Unduh, lalu gunakan Potong klip audio dan ekspor.',
};
export default id;
