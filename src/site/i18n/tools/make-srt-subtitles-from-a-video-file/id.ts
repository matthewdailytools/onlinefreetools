import type { SiteLangDict } from '../../../types';

/**
 * Indonesian (id) copy for make-srt-subtitles-from-a-video-file.
 * Local search: video ke srt / subtitle dari video / buat srt dari video.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: tanpa unggah ke server; tetap di perangkat.
 */
const id: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: 'Buat subtitle SRT dari file video',
  tool_make_srt_subtitles_from_a_video_file_desc:
    'Ubah video lokal berdialog menjadi cue .srt berwaktu dengan Whisper di perangkat—file tetap di perangkat dan tidak diunggah ke server.',
  tool_make_srt_subtitles_from_a_video_file_description:
    'Buat subtitle SRT berwaktu dari file video lokal di browser dengan Whisper di perangkat: file tetap di perangkat Anda dan tidak diunggah ke server. Langkah: pilih video berdialog, putar untuk cek klip, bahasa (atau otomatis), Buat SRT, sunting cue, unduh .srt. Contoh: Contoh menjalankan MP4 berbicara singkat lewat Whisper. Jalankan pertama mengunduh sekitar 45 MB sekali (lalu cache). WAV/MP3 audio saja ke Buat subtitle SRT dari file audio. Tanpa burn-in; waktu dari segmen Whisper.',
  tool_make_srt_subtitles_from_a_video_file_article:
    'Orang yang mencari «video ke srt» atau «buat srt dari video» ingin file subtitle berwaktu yang bisa diunduh dari rekaman lokal—bukan halaman memo suara. Alat ini menjalankan Whisper tiny di perangkat dari skrip same-origin /vendor/whisper: mendekode trek audio video di tab, menampilkan pratinjau video agar dialog bisa dicocokkan dengan gambar, mengambil stempel segmen, memformat SRT standar yang bisa disunting, lalu mengunduh. File audio murni ditolak dengan tautan jelas ke Buat subtitle SRT dari file audio. Tidak ada jalur mikrofon. Jalankan pertama mengunduh sekitar 45 MB sekali dan menyimpannya di cache. Waktu cue adalah batas segmen Whisper, bukan penyelarasan paksa tingkat bingkai, dan halaman ini tidak membakar subtitle ke video.',
  tool_make_srt_subtitles_from_a_video_file_choose: 'Pilih file video',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'MP4, WebM, MOV lokal, atau video lain yang bisa didekode browser—hingga sekitar 120 MiB dan sekitar 2 jam setelah dekode. File harus punya trek audio yang bisa dipakai. Klip panjang memakai jendela geser (jendela n dari N; Stop menyimpan SRT sebagian jika memungkinkan). Audio murni milik alat SRT audio terkait.',
  tool_make_srt_subtitles_from_a_video_file_lang_label: 'Bahasa ucapan',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    'Otomatis membiarkan Whisper mendeteksi bahasa di soundtrack. Pilih bahasa jika sudah tahu agar cue lebih stabil.',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: 'Deteksi otomatis',
  tool_make_srt_subtitles_from_a_video_file_lang_en: 'Inggris',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: 'Tionghoa',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'Spanyol',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: 'Jepang',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'Jerman',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'Prancis',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'Portugis',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'Indonesia',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'Arab',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'Rusia',
  tool_make_srt_subtitles_from_a_video_file_convert: 'Buat SRT',
  tool_make_srt_subtitles_from_a_video_file_stop: 'Stop',
  tool_make_srt_subtitles_from_a_video_file_download: 'Unduh SRT',
  tool_make_srt_subtitles_from_a_video_file_sample: 'Contoh',
  tool_make_srt_subtitles_from_a_video_file_clear: 'Hapus',
  tool_make_srt_subtitles_from_a_video_file_source_play: 'Putar video asli',
  tool_make_srt_subtitles_from_a_video_file_advanced: 'Batas jujur',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny berjalan di tab ini dari /vendor/whisper same-origin. Buat SRT pertama mengunduh sekitar 45 MB sekali, lalu memakai ulang cache. Klip panjang memakai jendela (~2 menit). Waktu cue mengikuti segmen Whisper—bukan penyelarasan paksa tingkat bingkai. Halaman ini hanya menerima video dan tidak membakar subtitle. Untuk catatan suara tanpa gambar, pakai alat SRT audio terkait.',
  tool_make_srt_subtitles_from_a_video_file_progress: 'Progres subtitle',
  tool_make_srt_subtitles_from_a_video_file_hud_title: 'Progres subtitle',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: 'Selesai. Langkah berikutnya: sunting cue jika perlu, lalu Unduh SRT.',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'SRT tidak selesai',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint:
    'Coba video lain, klip lebih pendek, atau Contoh. File tetap di perangkat.',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: 'Mengunduh {file} — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: 'Memulai…',
  tool_make_srt_subtitles_from_a_video_file_model: 'Model',
  tool_make_srt_subtitles_from_a_video_file_decode: 'Dekode',
  tool_make_srt_subtitles_from_a_video_file_transcribe: 'Transkripsi',
  tool_make_srt_subtitles_from_a_video_file_write: 'Tulis SRT',
  tool_make_srt_subtitles_from_a_video_file_done: 'Siap. Sunting SRT jika perlu, lalu Unduh SRT.',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'Tidak bisa membuat SRT. Coba Contoh, video berbicara yang lebih jelas, atau klip lebih pendek di bawah sekitar 2 jam.',
  tool_make_srt_subtitles_from_a_video_file_elapsed: '{s} dtk berlalu',
  tool_make_srt_subtitles_from_a_video_file_preview: 'Pratinjau SRT',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} cue · {chars} karakter',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'Pilih file video lokal dengan ucapan di soundtrack.',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'Belum ada SRT. Jatuhkan video berdialog dan klik Buat SRT. Contoh menjalankan MP4 berbicara singkat lewat Whisper di perangkat. Putar pratinjau untuk mencocokkan gambar dengan cue. File tetap di perangkat.',
  tool_make_srt_subtitles_from_a_video_file_file_label: 'Video: {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: 'Memuat model Whisper di perangkat (jalankan pertama bisa mengunduh ~45 MB)…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'Mendekode trek audio video di tab ini…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'Mentranskripsi dengan Whisper…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: 'Mentranskripsi jendela {n} dari {total}…',
  tool_make_srt_subtitles_from_a_video_file_status_write: 'Menulis cue SRT berwaktu…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: 'Dihentikan. SRT sebagian disimpan jika cue sudah tersedia.',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'Pilih satu file video lokal, atau gunakan Contoh.',
  tool_make_srt_subtitles_from_a_video_file_err_format:
    'Jenis tidak didukung. Gunakan kontainer video umum yang bisa didekode browser (misalnya MP4 atau WebM) dengan trek audio.',
  tool_make_srt_subtitles_from_a_video_file_err_limit:
    'Gunakan video hingga sekitar 120 MiB dan sekitar 2 jam setelah dekode. Klip sangat panjang di ponsel ber-RAM rendah masih bisa gagal—potong atau kompres dulu.',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'Browser tidak bisa mendekode trek audio yang bisa dipakai dari video ini. Video sunyi, tanpa audio, atau codec tidak didukung gagal di sini.',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'Web Audio yang dibutuhkan jalur ini tidak tersedia di browser ini.',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper tidak menghasilkan teks ucapan yang bisa dipakai. Coba klip atau pengaturan bahasa lain.',
  tool_make_srt_subtitles_from_a_video_file_err_model:
    'Tidak bisa memuat model Whisper di perangkat dari situs ini. Tetap daring untuk unduhan pertama, lalu coba lagi.',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'Halaman ini hanya menerima file video. Untuk WAV, MP3, atau ucapan audio saja, gunakan Buat subtitle SRT dari file audio.',
  tool_make_srt_subtitles_from_a_video_file_how_title: 'Cara membuat subtitle SRT dari file video',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    'Pilih video lokal berucapan, pratinjau klip, jalankan Whisper di perangkat untuk cue berwaktu, sunting SRT, lalu unduh.',
  tool_make_srt_subtitles_from_a_video_file_how_item_1:
    'Pilih file video lokal (atau Contoh), lalu Deteksi otomatis atau bahasa ucapan.',
  tool_make_srt_subtitles_from_a_video_file_how_item_2:
    'Putar video asli jika ingin mencocokkan dialog dengan gambar, lalu klik Buat SRT.',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    'Pantau kartu progres: Model, Dekode, Transkripsi (jendela n dari N pada file panjang), lalu Tulis SRT. Stop membatalkan dan menyimpan SRT sebagian jika memungkinkan.',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: 'Sunting pratinjau SRT jika perlu, lalu Unduh SRT.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: 'Kenapa memakai Buat subtitle SRT dari file video di sini',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    'Utama video: pratinjau klip di halaman, lalu buat .srt dari soundtrack dengan Whisper di perangkat—rekaman tidak diunggah ke server kami untuk ASR.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    'Batas jelas dari alat SRT audio: halaman ini menolak audio murni dan tanpa jalur mikrofon, jadi pencari video ke srt tidak jatuh ke UI memo suara.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    'Biaya jalankan pertama jujur (~45 MB sekali) plus HUD dengan progres jendela geser pada rekaman panjang.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    'Hanya .srt samping yang bisa disunting—tidak dibakar ke video. Alat terkait mencakup SRT audio saja dan video gelombang.',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'Aturan SRT dan batas Whisper untuk video',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'Whisper tiny berjalan di browser dari aset same-origin. Browser harus bisa mendekode trek audio yang dipakai dari video Anda. Batas ukuran dan durasi menjaga tab tetap nyaman.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    'Hanya kontainer video (misalnya MP4, WebM, MOV). File audio saja harus memakai halaman SRT audio terkait.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'Sekitar 120 MiB dan sekitar 2 jam setelah dekode, ditranskripsi dalam jendela geser. File lebih panjang atau lebih besar menampilkan kesalahan batas yang jelas.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'Stempel waktu adalah batas segmen Whisper—cukup untuk pemutar, bukan penyelarasan paksa tingkat bingkai ke potongan gambar.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Video Anda tetap di perangkat untuk Whisper. Halaman ini tidak membakar subtitle ke file dan tidak mengunduh subtitle dari platform video.',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'Coba klip video contoh',
  tool_make_srt_subtitles_from_a_video_file_example:
    'Contoh mengambil MP4 berbicara singkat, menjalankan Buat SRT lewat Whisper di perangkat, dan mengisi pratinjau SRT. Halaman tidak menjalankan contoh saat dibuka agar unduhan model pertama ~45 MB tidak mengenai setiap pengunjung.',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'Kapan ini membantu',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    'Anda punya wawancara, talking-head, atau rekaman layar MP4 lokal dan butuh .srt yang bisa diunduh untuk pemutar atau editor.',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    'Anda ingin memberi subtitle file video tanpa mengunggah rekaman ke situs ASR cloud, dan perlu mempratinjau gambar sambil memeriksa cue.',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'Anda sudah mengekspor MP4/WebM dari kamera atau editor dan butuh SRT awal untuk direvisi sebelum diterbitkan.',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: 'Apakah video saya diunggah ke server?',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'Tidak untuk jalur Whisper: Buat SRT menjalankan Whisper tiny di perangkat dari file vendor same-origin. Video tetap di perangkat dan tidak diunggah ke server kami untuk pengenalan.',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: 'Kenapa Buat SRT pertama lambat atau besar?',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'Jalankan pertama mengunduh sekitar 45 MB model Whisper tiny dan WASM dari situs ini ke cache browser. Setelah itu dipakai ulang. Video panjang menampilkan Transkripsi sebagai jendela n dari N; Stop bisa membatalkan dan menyimpan SRT sebagian.',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: 'Apa bedanya dengan Buat subtitle SRT dari file audio?',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    'Alat terkait itu untuk catatan suara dan file audio-first lain (plus dikte mikrofon opsional). Halaman ini untuk file video: pratinjau video, daftar terima hanya video, dan kata-kata video ke srt. Mesin Whisper di perangkat di bawahnya sama.',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: 'Bisakah saya memakai WAV atau MP3 di sini?',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    'Tidak. Audio murni ditolak agar pencari video ke srt tidak tercampur ke UI audio. Buka Buat subtitle SRT dari file audio untuk WAV/MP3/M4A.',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'Seberapa akurat stempel waktu SRT?',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'Mengikuti awal dan akhir segmen Whisper di soundtrack—cukup untuk kebanyakan pemutar, bukan sinkron bingkai ke setiap potongan gambar.',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: 'Bisakah membakar subtitle ke video atau mengambil dari YouTube?',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'Tidak. Hanya mengunduh .srt samping. Juga tidak mengambil subtitle otomatis dari YouTube atau platform lain.',
};
export default id;
