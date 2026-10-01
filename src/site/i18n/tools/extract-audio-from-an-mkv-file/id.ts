import type { SiteLangDict } from '../../../types';

/**
 * Bahasa Indonesia: ekstrak audio dari file MKV.
 * Kejujuran D1: fallback MediaElement ~500 MiB / 4 jam; MKV multi‑GB atau DDP/Atmos → ffmpeg di PC → MP4 AAC stereo → halaman MP4.
 * Kunci selaras master EN; tulis ulang native, bukan salinan Spanyol atau terjemahan kaku dari Inggris.
 */
const id: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'Ekstrak audio dari file MKV',
  tool_extract_audio_from_an_mkv_file_desc:
    'Ekstrak audio dari satu MKV lokal ke WAV atau MP3 di browser jika file muat jalur fallback ~500 MiB / 4 jam. MKV multi‑gigabyte atau DDP/Atmos: ubah dulu ke MP4 AAC di komputer, lalu gunakan alat MP4.',
  tool_extract_audio_from_an_mkv_file_description:
    'Ekstrak trek audio dari satu MKV lokal di browser, lalu unduh WAV atau MP3. Langkah: pilih MKV → Ekstrak → dengar → unduh. Contoh: Muat sampel membuat pengganti sintetis pendek jika MediaRecorder berjalan—lebih baik .mkv asli di bawah ~500 MiB. Halaman ini memakai fallback MediaElement (~500 MiB / 4 jam); file lebih besar gagal cepat dengan err_container. MKV multi‑GB atau Dolby Digital Plus / Atmos (E-AC-3) tidak didukung di sini—di PC, jalankan ffmpeg ke MP4 AAC stereo (video bisa copy), lalu buka Ekstrak audio dari file MP4 untuk demux besar. Hanya lokal—bukan unduh URL YouTube. Tidak pernah diunggah. Banyak MKV? Gunakan Ekstrak audio dari file MKV secara batch.',
  tool_extract_audio_from_an_mkv_file_article:
    'Rekaman layar dan tangkapan sering berformat MKV. Halaman ini hanya menerima .mkv, memakai jalur ekstrak fallback bersama, dan menulis WAV atau MP3 tanpa unggah. Tidak mengklaim demux ISOBMFF atau streaming OPFS multi‑GB—itulah jalur MP4/MOV dengan AAC. Juga tidak mendekode E-AC-3 / DTS di browser. Untuk rip multi‑GB atau trek Atmos, konversi di perangkat dengan ffmpeg ke MP4 AAC, lalu landing MP4. Folder campuran: hub video atau batch hub.',
  tool_extract_audio_from_an_mkv_file_choose: 'Pilih file MKV',
  tool_extract_audio_from_an_mkv_file_hint:
    'Jatuhkan satu .mkv lokal sekitar 500 MiB / 4 jam. MKV lebih besar atau DDP/Atmos: di PC, ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, lalu Ekstrak audio dari file MP4.',
  tool_extract_audio_from_an_mkv_file_convert: 'Ekstrak',
  tool_extract_audio_from_an_mkv_file_download: 'Unduh',
  tool_extract_audio_from_an_mkv_file_download_wav: 'Unduh WAV',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'Unduh MP3',
  tool_extract_audio_from_an_mkv_file_sample: 'Muat sampel',
  tool_extract_audio_from_an_mkv_file_clear: 'Hapus',
  tool_extract_audio_from_an_mkv_file_advanced: 'Format ekspor',
  tool_extract_audio_from_an_mkv_file_format_label: 'Format keluaran',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV (16-bit)',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'Bitrate MP3',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    'WAV default cocok untuk MKV pendek. Klip panjang bisa streaming MP3. Batasnya fallback (~500 MiB), bukan demux MP4. Tanpa URL.',
  tool_extract_audio_from_an_mkv_file_progress: 'Progres ekstraksi',
  tool_extract_audio_from_an_mkv_file_read: 'Baca',
  tool_extract_audio_from_an_mkv_file_decode: 'Dekode',
  tool_extract_audio_from_an_mkv_file_extract: 'Ekstrak',
  tool_extract_audio_from_an_mkv_file_write: 'Tulis',
  tool_extract_audio_from_an_mkv_file_done: 'Siap. Dengarkan audio, lalu unduh WAV atau MP3.',
  tool_extract_audio_from_an_mkv_file_failed:
    'Ekstraksi gagal. Coba MKV lebih kecil, atau ubah dulu ke MP4 AAC dengan ffmpeg.',
  tool_extract_audio_from_an_mkv_file_elapsed: '{s} dtk berlalu',
  tool_extract_audio_from_an_mkv_file_preview: 'Dengarkan audio hasil ekstraksi',
  tool_extract_audio_from_an_mkv_file_result: '{seconds} dtk · {channels} sal. · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: 'demo-mkv-pendek',
  tool_extract_audio_from_an_mkv_file_empty: 'Pilih MKV atau muat sampel dulu.',
  tool_extract_audio_from_an_mkv_file_empty_state:
    'Belum ada file. Jatuhkan .mkv lokal (~500 MiB) atau muat sampel. Multi‑GB / DDP: ubah ke MP4 AAC dengan ffmpeg dulu. Bukan YouTube.',
  tool_extract_audio_from_an_mkv_file_err_file: 'Jatuhkan tepat satu file MKV.',
  tool_extract_audio_from_an_mkv_file_err_format: 'File tidak didukung. Halaman ini hanya .mkv.',
  tool_extract_audio_from_an_mkv_file_err_limit: 'MKV ini melewati batas durasi atau ukuran di jalur fallback.',
  tool_extract_audio_from_an_mkv_file_err_container:
    'MKV ini melewati batas fallback (~500 MiB / 4 jam) atau tidak bisa didekode di sini. Di komputer: ffmpeg ke MP4 AAC stereo (video copy), lalu Ekstrak audio dari file MP4—atau pakai MKV lebih kecil.',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'Codec audio MKV ini tidak didukung di browser (sering E-AC-3 / DDP / Atmos). Ubah ke AAC dalam MP4 dengan ffmpeg, lalu halaman ekstrak MP4.',
  tool_extract_audio_from_an_mkv_file_err_channels:
    'Trek ini memakai tata letak saluran yang tidak bisa ditangani ekstraktor. Downmix ke AAC stereo dalam MP4 dulu.',
  tool_extract_audio_from_an_mkv_file_err_decode: 'Browser tidak bisa mendekode audio dari MKV ini.',
  tool_extract_audio_from_an_mkv_file_err_encoder: 'Tidak bisa menulis file audio. Coba Ekstrak lagi.',
  tool_extract_audio_from_an_mkv_file_err_sample: 'Tidak bisa membuat sampel MKV. Gunakan .mkv Anda sendiri.',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'Browser ini tidak punya Web Audio yang diperlukan untuk ekstraksi.',
  tool_extract_audio_from_an_mkv_file_err_empty: 'Tidak ada sampel audio yang bisa dipakai.',
  tool_extract_audio_from_an_mkv_file_stop: 'Berhenti',
  tool_extract_audio_from_an_mkv_file_status_stopped: 'Dihentikan. Tidak ada file audio parsial yang disimpan.',
  tool_extract_audio_from_an_mkv_file_forced_mp3: 'Input panjang/besar memakai streaming MP3 di jalur fallback.',
  tool_extract_audio_from_an_mkv_file_how_title: 'Cara mengekstrak audio dari file MKV',
  tool_extract_audio_from_an_mkv_file_how_body:
    'MKV lokal kecil: jatuhkan, Ekstrak, unduh. Multi‑GB atau DDP/Atmos: ubah ke MP4 AAC dengan ffmpeg di perangkat, lalu alat MP4.',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    'Pilih .mkv lokal (~500 MiB) atau muat sampel jika MediaRecorder berjalan. Jika multi‑GB atau DDP/Atmos, berhenti di sini dan konversi dengan ffmpeg.',
  tool_extract_audio_from_an_mkv_file_how_item_2: 'Buka Format ekspor dan pilih WAV atau MP3; atur bitrate jika perlu.',
  tool_extract_audio_from_an_mkv_file_how_item_3: 'Klik Ekstrak dan tunggu Baca → Dekode → Ekstrak → Tulis (atau Berhenti).',
  tool_extract_audio_from_an_mkv_file_how_item_4: 'Dengarkan, lalu Unduh WAV atau Unduh MP3.',
  tool_extract_audio_from_an_mkv_file_why_choose_title: 'Mengapa memakai Ekstrak audio dari file MKV',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1:
    'Hanya menerima MKV agar Matroska tidak tercampur dengan landing MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2:
    'Batas fallback dijelaskan jujur—tanpa marketing demux 5 GiB palsu untuk MKV.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3:
    'Jalur jelas untuk file besar atau DDP: ffmpeg di PC → MP4 AAC → halaman MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: 'Pemrosesan di perangkat Anda; Berhenti membatalkan di tengah jalan.',
  tool_extract_audio_from_an_mkv_file_rules_title: 'Hanya MKV dan batas fallback',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'Satu MKV lokal per proses di jalur fallback MediaElement. Bukan YouTube ke MP3. Bukan ekspor video bisu. MKV besar atau codec langka butuh MP4 AAC di perangkat dulu.',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    'Fallback ~500 MiB / 4 jam. Melewati batas → err_container. Demux besar hanya MP4/MOV saat ini.',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'Tanpa URL atau unduh YouTube.',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS biasanya gagal err_codec. Contoh di PC: ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4 lalu Ekstrak audio dari file MP4.',
  tool_extract_audio_from_an_mkv_file_rules_item_4:
    'MKV asli tidak pernah ditimpa. Banyak MKV: alat batch MKV.',
  tool_extract_audio_from_an_mkv_file_example_title: 'Coba ekstraksi MKV nyata',
  tool_extract_audio_from_an_mkv_file_example:
    'Muat sampel membuat pengganti sintetis pendek jika MediaRecorder berjalan, lalu Ekstrak jalan. Lebih baik .mkv Anda di bawah batas fallback. Rip multi‑GB: ubah ke MP4 AAC dengan ffmpeg, lalu halaman MP4.',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'Kapan ini membantu',
  tool_extract_audio_from_an_mkv_file_usecase_1:
    'Tangkapan layar MKV di browser (~500 MiB) → MP3 bisa dibagikan tanpa unggah.',
  tool_extract_audio_from_an_mkv_file_usecase_2: 'Klip wawancara MKV pendek: hanya trek audio sebagai WAV.',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    'Anda tahu filenya MKV besar atau DDP—konversi ke MP4 AAC lokal, lalu alat MP4, bukan halaman ini.',
  tool_extract_audio_from_an_mkv_file_faq_q1: 'Bisa tempel URL YouTube?',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'Tidak. Hanya .mkv lokal.',
  tool_extract_audio_from_an_mkv_file_faq_q2: 'Kenapa tidak 5 GiB seperti halaman MP4?',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    'Demux besar saat ini untuk ISOBMFF (MP4/MOV). MKV memakai fallback MediaElement ~500 MiB sampai demux Matroska tersedia.',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'MKV saya multi‑GB atau Dolby Atmos / DDP—harus bagaimana?',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    'Halaman ini akan menolak (err_container dan/atau err_codec). Di komputer, ubah ke MP4 AAC stereo, misalnya: ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4. Lalu buka Ekstrak audio dari file MP4 untuk jalur demux besar. Remux saja tanpa AAC tetap gagal jika trek tetap E-AC-3.',
  tool_extract_audio_from_an_mkv_file_faq_q4: 'Apakah ini membuat MKV bisu (video tanpa suara)?',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'Tidak. Hanya mengekstrak audio ke WAV/MP3.',
  tool_extract_audio_from_an_mkv_file_faq_q5: 'Apakah file saya diunggah?',
  tool_extract_audio_from_an_mkv_file_faq_a5:
    'Tidak. Dekode dan tulis di browser. Langkah ffmpeg (jika perlu) juga tetap di komputer Anda.',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'Saya punya banyak MKV—halaman mana?',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    'Folder MKV kecil: Ekstrak audio dari file MKV secara batch. Besar atau DDP: ubah masing‑masing ke MP4 AAC, lalu Ekstrak audio dari file MP4 secara batch atau halaman MP4 tunggal.',
  tool_extract_audio_from_an_mkv_file_faq_q7: 'Bisa trim setelah ekstrak?',
  tool_extract_audio_from_an_mkv_file_faq_a7: 'Tidak di sini. Unduh, lalu Potong klip audio lalu ekspor.',
};
export default id;
