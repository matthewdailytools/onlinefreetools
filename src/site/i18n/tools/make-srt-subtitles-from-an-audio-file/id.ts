import type { SiteLangDict } from '../../../types';

/**
 * Indonesian locale for make-srt-subtitles-from-an-audio-file.
 * On-device Whisper tiny (q8) via same-origin /vendor/whisper; optional Web Speech mic.
 * Local search: audio ke srt; subtitle dari audio; whisper di browser.
 * Privacy: tanpa unggah ke server; tetap di perangkat.
 */
const id: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: 'Buat subtitle SRT dari file audio',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    'Ubah rekaman suara lokal menjadi cue .srt berwaktu dengan model Whisper di perangkat—file tetap di perangkat dan tanpa unggah ke server.',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'Buat subtitle SRT berwaktu dari file audio atau video lokal di browser dengan Whisper di perangkat—file tetap di perangkat dan tanpa unggah ke server. Langkah: pilih file suara, pilih bahasa (atau otomatis), Buat SRT, sunting cue, Unduh SRT. Contoh: Contoh menjalankan klip bicara pendek lewat Whisper dan menampilkan SRT. Jalankan pertama mengunduh sekitar 45 MB file model sekali (lalu di-cache). Bukan API cloud; waktu berasal dari segmen Whisper.',
  tool_make_srt_subtitles_from_an_audio_file_article:
    'Orang yang mencari audio ke srt atau subtitle dari audio ingin file caption berwaktu yang bisa diunduh dari rekaman lokal. Halaman ini menjalankan Whisper tiny di perangkat dari skrip vendor same-origin: dekode file di tab, ambil stempel waktu segmen, format SRT standar yang bisa disunting, lalu unduh. Video berjalur audio diterima jika browser bisa mendekodenya. Jalur Dikte dengan mikrofon memakai Web Speech hanya jika browser menyediakannya—tanpa API bicara, Buat SRT tetap jalan. Jalankan pertama mengunduh sekitar 45 MB aset model sekali lalu menyimpannya di cache. Waktu cue adalah batas segmen Whisper, bukan forced alignment per frame, dan halaman ini tidak membakar subtitle ke video.',
  tool_make_srt_subtitles_from_an_audio_file_choose: 'Pilih file suara',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'WAV, MP3, M4A, atau audio lokal lain yang bisa didekode browser—hingga sekitar 120 MiB dan sekitar 2 jam setelah dekode. File panjang diproses per jendela geser (jendela n dari N; Berhenti menyimpan SRT sebagian bila ada). Video berjalur audio boleh jika dekode berhasil; jika gagal, ada pesan dekode yang jelas.',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: 'Bahasa ucapan',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    'Deteksi otomatis membiarkan Whisper mendeteksi bahasa. Pilih bahasa jika Anda sudah tahu agar cue lebih stabil. Dikte mikrofon memakai pilihan yang sama bila Web Speech tersedia.',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: 'Deteksi otomatis',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: 'Inggris',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: 'Cina',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'Spanyol',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: 'Jepang',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'Jerman',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'Prancis',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'Portugis',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'Indonesia',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'Arab',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'Rusia',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'Buat SRT',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'Dikte dengan mikrofon',
  tool_make_srt_subtitles_from_an_audio_file_stop: 'Berhenti',
  tool_make_srt_subtitles_from_an_audio_file_download: 'Unduh SRT',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'Contoh',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'Hapus',
  tool_make_srt_subtitles_from_an_audio_file_source_play: 'Putar audio asli',
  tool_make_srt_subtitles_from_an_audio_file_advanced: 'Batas yang jujur',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny berjalan di tab ini dari file /vendor/whisper same-origin. Buat SRT pertama mengunduh sekitar 45 MB sekali, lalu memakai cache. Waktu cue mengikuti segmen Whisper—bukan forced alignment tingkat frame. Dikte mikrofon opsional lewat Web Speech dan bisa memakai layanan bicara vendor browser. Halaman ini tidak membakar subtitle ke video.',
  tool_make_srt_subtitles_from_an_audio_file_progress: 'Progres subtitle',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: 'Progres subtitle',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next: 'Selesai. Langkah berikutnya: sunting cue jika perlu, lalu Unduh SRT.',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'SRT tidak selesai',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint: 'Coba file lain, klip lebih pendek, atau Contoh. File tetap di perangkat.',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: 'Mengunduh {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: 'Memulai…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'Model',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'Dekode',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: 'Transkripsi',
  tool_make_srt_subtitles_from_an_audio_file_write: 'Tulis SRT',
  tool_make_srt_subtitles_from_an_audio_file_done: 'Siap. Sunting SRT jika perlu, lalu Unduh SRT.',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'Gagal membuat SRT. Coba Contoh, file bicara yang lebih jelas, atau klip di bawah sekitar 2 jam.',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: '{s} dtk berlalu',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'Pratinjau SRT',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: 'Sementara (mikrofon)',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} cue · {chars} karakter',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty: 'Pilih file suara lokal, atau Dikte dengan mikrofon bila tersedia.',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'Belum ada SRT. Taruh file suara lalu klik Buat SRT. Contoh menjalankan klip bicara pendek lewat Whisper di perangkat. File tetap di perangkat.',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'Media: {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'Dikte dengan mikrofon tidak tersedia di browser ini (tidak ada Web Speech API). Buat SRT dengan Whisper tetap jalan untuk file lokal.',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'Whisper hampir tidak mengembalikan teks. Coba rekaman lebih jelas atau pilih bahasa yang diucapkan.',
  tool_make_srt_subtitles_from_an_audio_file_status_mic: 'Mendengarkan mikrofon… bicara jelas, lalu Berhenti. Waktu cue memakai waktu sesi.',
  tool_make_srt_subtitles_from_an_audio_file_status_model: 'Memuat model Whisper di perangkat (jalankan pertama bisa unduh ~45 MB)…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'Mendekode audio di tab ini…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'Mentranskripsi dengan Whisper…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: 'Mentranskripsi jendela {n} dari {total}…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: 'Dihentikan. SRT sebagian disimpan jika cue sudah ada.',
  tool_make_srt_subtitles_from_an_audio_file_status_write: 'Menulis cue SRT berwaktu…',
  tool_make_srt_subtitles_from_an_audio_file_err_file: 'Pilih satu file audio atau video lokal, atau gunakan Contoh.',
  tool_make_srt_subtitles_from_an_audio_file_err_format:
    'Jenis media tidak didukung. Pakai audio umum, atau video berjalur audio yang bisa didekode browser.',
  tool_make_srt_subtitles_from_an_audio_file_err_limit: 'Pakai media hingga sekitar 120 MiB dan sekitar 2 jam setelah dekode. Di ponsel berememori rendah, rekaman sangat panjang mungkin gagal—potong atau kompres dulu.',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'Browser tidak bisa mendekode file ini sebagai audio. Video tanpa jalur audio yang bisa dipakai, atau codec tidak didukung, gagal di sini.',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported: 'Web Audio atau API bicara yang dibutuhkan jalur ini tidak tersedia di browser ini.',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    'Izin mikrofon ditolak. Izinkan akses untuk Dikte dengan mikrofon, atau Buat SRT dari file.',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt: 'Whisper tidak menghasilkan teks yang bisa dipakai. Coba klip lain atau pengaturan bahasa.',
  tool_make_srt_subtitles_from_an_audio_file_err_model:
    'Gagal memuat model Whisper di perangkat dari situs ini. Tetap online untuk unduhan pertama, lalu coba lagi.',
  tool_make_srt_subtitles_from_an_audio_file_how_title: 'Cara membuat subtitle SRT dari file audio',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'Pilih file suara lokal, jalankan Whisper di perangkat untuk cue berwaktu, sunting pratinjau, lalu unduh .srt.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1: 'Pilih file suara lokal (atau Contoh), dan pilih Deteksi otomatis atau bahasa ucapan.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2: 'Klik Buat SRT. Pantau kartu progres: Model, Dekode, Transkripsi, lalu Tulis SRT.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3: 'Opsional: klik Dikte dengan mikrofon jika browser mendukung Web Speech, bicara, lalu Berhenti.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4: 'Sunting pratinjau SRT jika perlu, lalu Unduh SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title: 'Kenapa memakai Buat subtitle SRT dari file audio di sini',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    'Whisper tiny di perangkat dari file vendor same-origin—rekaman Anda tanpa unggah ke server kami untuk ASR.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    'Biaya pertama yang jujur: unduhan model sekitar 45 MB sekali, dengan kartu progres Model / Dekode / Transkripsi / Tulis SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3:
    'Pratinjau .srt standar yang bisa disunting sebelum unduh—bukan hanya TXT polos, dan tidak dibakar ke video.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    'Alat terkait mencakup transkrip polos dan video gelombang tanpa memaksa editor hub.',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'Aturan SRT dan batas Whisper di perangkat',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    'Halaman ini menjalankan Whisper tiny di browser dari aset same-origin. Waktu cue dari segmen model. Batas ukuran dan durasi menjaga tab tetap responsif.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    'Jalur utama butuh dekode Web Audio plus tumpukan Whisper di perangkat di /vendor/whisper. Dikte mikrofon butuh Web Speech dan bersifat opsional.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'Sekitar 120 MiB ukuran file dan sekitar 2 jam setelah dekode, dengan jendela geser. File lebih panjang atau lebih besar menampilkan error batas yang jelas; ponsel berememori rendah mungkin perlu klip lebih pendek.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'Stempel waktu adalah batas segmen Whisper—berguna untuk pemutar—bukan forced alignment per frame.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'File Anda tetap di perangkat untuk Whisper. Dikte mikrofon opsional masih bisa memakai layanan bicara vendor browser—periksa pengaturan privasi browser.',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'Coba klip suara contoh',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'Contoh mengambil WAV bicara pendek, menjalankan Buat SRT lewat Whisper di perangkat, dan mengisi pratinjau SRT. Halaman tidak menjalankan contoh otomatis saat dibuka agar unduhan model ~45 MB pertama tidak mengenai setiap pengunjung.',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'Kapan ini membantu',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    'Anda punya catatan suara atau wawancara WAV/MP3 lokal dan butuh .srt yang bisa diunduh untuk pemutar atau editor.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    'Anda punya video pendek berjalur audio dan ingin subtitle berwaktu tanpa unggah ke situs ASR cloud.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    'Anda butuh SRT awal dari Whisper di perangkat untuk disunting sebelum terbit, atau beralih ke Dikte dengan mikrofon saat tidak ada file.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: 'Apakah audio saya diunggah ke server?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'Tidak untuk jalur file Whisper: dekode dan transkripsi terjadi di tab Anda; file tetap di perangkat dan tanpa unggah ke server kami. Tetap online hanya untuk mengambil skrip model same-origin pada pemakaian pertama.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: 'Ini Whisper lokal atau unggahan cloud?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    'Buat SRT menjalankan Whisper tiny di perangkat dari file vendor same-origin. File audio atau video tetap di perangkat dan tanpa unggah ke server kami untuk pengenalan. Dikte dengan mikrofon opsional memakai Web Speech API browser, yang mungkin melibatkan layanan bicara vendor.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'Kenapa Buat SRT pertama lambat atau besar?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'Jalankan pertama mengunduh sekitar 45 MB model Whisper tiny dan aset WASM dari situs ini ke cache browser. Jalankan berikutnya memakai cache itu. Progres terlihat di langkah Model.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: 'Seberapa akurat stempel waktu SRT?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'Mengikuti waktu mulai dan akhir segmen Whisper—cukup untuk kebanyakan pemutar dan editor, bukan forced alignment per frame dari pipeline studio desktop.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: 'Bedanya dengan Transkripsikan file audio menjadi teks?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    'Alat terkait itu fokus pada teks transkrip polos. Halaman ini memformat cue SRT bernomor dengan waktu mulai dan akhir untuk pemutar dan editor yang mengharapkan .srt.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: 'Bisakah ini membakar subtitle ke file video?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'Tidak. Hanya mengunduh sidecar .srt. Untuk video bergaya gelombang dari audio, lihat alat video gelombang terkait—bukan caption yang dibakar.',
};
export default id;
