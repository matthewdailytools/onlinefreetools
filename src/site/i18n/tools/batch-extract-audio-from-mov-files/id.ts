import type { SiteLangDict } from '../../../types';

/**
 * Bahasa Indonesia: banyak MOV lokal → ZIP audio (hanya .mov, berurutan, tanpa YouTube).
 * Arah pencarian: «ekstrak audio mov batch», «banyak mov ke mp3».
 */
const id: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: 'Ekstrak audio dari banyak file MOV',
	tool_batch_extract_audio_from_mov_files_desc:
		'Antrian hanya MOV lokal: satu per satu, gagal dilewati, ZIP WAV/MP3. Tidak diunggah ke server.',
	tool_batch_extract_audio_from_mov_files_description:
		'Ekstrak audio dari banyak MOV lokal secara berurutan di browser dan simpan ZIP WAV atau MP3. Langkah: tambah .mov → Ekstrak → unduh ZIP. Contoh: «Muat contoh» membuat dua MOV sintetis pendek dan mengemas audionya. Per file, batas demux+OPFS sama dengan alat MOV tunggal (dengan OPFS ~5 GiB / 6 jam, tanpa ~1 GiB). Baris gagal dilewati, sukses dikemas. Di perangkat — tanpa unggah. Tanpa YouTube. Satu file → «Ekstrak audio dari file MOV». MP4/WebM/MKV campur → «Ekstrak audio dari file video (batch)».',
	tool_batch_extract_audio_from_mov_files_article:
		'Folder MOV ponsel sering hanya butuh trek AAC. Halaman ini hanya mengantri .mov, menolak ekstensi lain, mengekstrak berurutan agar RAM stabil, dan memasukkan sukses ke ZIP. Bukan pengunduh YouTube dan bukan hub kontainer campuran.',
	tool_batch_extract_audio_from_mov_files_choose: 'Pilih file MOV',
	tool_batch_extract_audio_from_mov_files_hint:
		'Maksimal 30 .mov lokal. Format lain ditolak — lihat batch campuran. Batas per file = alat MOV tunggal.',
	tool_batch_extract_audio_from_mov_files_list_label: 'Antrian MOV',
	tool_batch_extract_audio_from_mov_files_convert: 'Ekstrak',
	tool_batch_extract_audio_from_mov_files_stop: 'Berhenti',
	tool_batch_extract_audio_from_mov_files_download: 'Unduh ZIP',
	tool_batch_extract_audio_from_mov_files_sample: 'Muat contoh',
	tool_batch_extract_audio_from_mov_files_clear: 'Hapus',
	tool_batch_extract_audio_from_mov_files_advanced: 'Format ekspor (opsional)',
	tool_batch_extract_audio_from_mov_files_format_label: 'Format keluaran',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV (16-bit)',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'Bitrate MP3',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'MOV pendek: WAV bawaan. File besar bisa memaksa MP3 streaming per baris. Tanpa URL/YouTube.',
	tool_batch_extract_audio_from_mov_files_progress: 'Progres ekstraksi MOV batch',
	tool_batch_extract_audio_from_mov_files_read: 'Baca',
	tool_batch_extract_audio_from_mov_files_decode: 'Demux',
	tool_batch_extract_audio_from_mov_files_extract: 'Ekstrak',
	tool_batch_extract_audio_from_mov_files_write: 'Tulis',
	tool_batch_extract_audio_from_mov_files_pack: 'Kemas ZIP',
	tool_batch_extract_audio_from_mov_files_done: 'Selesai. Unduh ZIP audio yang diekstrak.',
	tool_batch_extract_audio_from_mov_files_failed: 'Batch gagal. Hapus MOV rusak atau kurangi jumlah file.',
	tool_batch_extract_audio_from_mov_files_elapsed: 'Berlalu {s} dtk',
	tool_batch_extract_audio_from_mov_files_preview: 'Hasil batch',
	tool_batch_extract_audio_from_mov_files_result: '{n} audio dikemas · ZIP {output} KiB',
	tool_batch_extract_audio_from_mov_files_partial: '{ok} sukses, {fail} gagal · ZIP hanya sukses ({output} KiB)',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: 'Tambahkan minimal satu MOV atau muat contoh.',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'Belum ada MOV. Jatuhkan .mov lokal atau muat contoh. Tanpa YouTube, tanpa non-MOV.',
	tool_batch_extract_audio_from_mov_files_remove: 'Hapus',
	tool_batch_extract_audio_from_mov_files_queue_count: '{n} MOV dalam antrian',
	tool_batch_extract_audio_from_mov_files_status_pending: 'Menunggu',
	tool_batch_extract_audio_from_mov_files_status_running: 'Mengekstrak…',
	tool_batch_extract_audio_from_mov_files_status_ok: 'Selesai',
	tool_batch_extract_audio_from_mov_files_status_fail: 'Gagal',
	tool_batch_extract_audio_from_mov_files_status_stopped: 'Dihentikan',
	tool_batch_extract_audio_from_mov_files_err_file: 'Hanya tambahkan file .mov.',
	tool_batch_extract_audio_from_mov_files_err_format:
		'Hanya .mov. Untuk MP4, WebM, atau MKV: batch video campuran.',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'MOV melebihi batas demux (OPFS ~5 GiB / 6 jam, tanpa ~1 GiB). Baris dilewati.',
	tool_batch_extract_audio_from_mov_files_err_container:
		'MOV ISOBMFF tidak bisa di-demux. Baris dilewati.',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'MOV dengan codec audio yang jalur ini tidak dekode. Baris dilewati.',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'MOV dengan tata letak saluran tidak didukung. Baris dilewati.',
	tool_batch_extract_audio_from_mov_files_err_decode: 'Browser gagal mendekode audio dari MOV. Baris dilewati.',
	tool_batch_extract_audio_from_mov_files_err_encoder: 'Gagal mengekspor audio. Periksa format dan ekstrak lagi.',
	tool_batch_extract_audio_from_mov_files_err_zip: 'Tidak bisa membuat ZIP. Kurangi jumlah MOV.',
	tool_batch_extract_audio_from_mov_files_err_too_many: 'Maksimal 30 MOV dalam antrian.',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'Tidak bisa membuat MOV contoh di browser ini. Jatuhkan .mov Anda sendiri.',
	tool_batch_extract_audio_from_mov_files_err_unsupported: 'Web Audio yang dibutuhkan untuk ekstraksi tidak ada.',
	tool_batch_extract_audio_from_mov_files_err_empty: 'Tidak ada audio yang bisa dipakai di antrian MOV.',
	tool_batch_extract_audio_from_mov_files_forced_mp3: 'MOV panjang/besar ini memaksa MP3 streaming pada baris ini.',
	tool_batch_extract_audio_from_mov_files_how_title: 'Cara mengekstrak audio dari banyak MOV',
	tool_batch_extract_audio_from_mov_files_how_body:
		'Antrikan MOV lokal, ekstrak satu per satu, unduh ZIP — tanpa unggah dan tanpa tempel URL.',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'Pilih beberapa .mov lokal atau «Muat contoh» untuk dua MOV sintetis pendek.',
	tool_batch_extract_audio_from_mov_files_how_item_2: 'Jika perlu MP3, buka «Format ekspor» dan atur bitrate.',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'Klik «Ekstrak»: Baca → Demux → Ekstrak → Tulis per file. «Berhenti» membatalkan sisanya.',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'Setelah HUD selesai: «Unduh ZIP». Baris gagal dilewati; ≥1 sukses → dikemas.',
	tool_batch_extract_audio_from_mov_files_why_choose_title: 'Mengapa batch MOV ini?',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'Hanya MOV — tanpa mencampur diam-diam MP4/WebM/MKV di folder «banyak mov ke mp3».',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'Ekstraksi berurutan menjaga RAM stabil untuk MOV ponsel berukuran GiB (AAC dalam ISOBMFF).',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'Status per baris Menunggu/Mengekstrak/Selesai/Gagal — satu MOV rusak tidak merusak seluruh ZIP.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'«Berhenti» memotong antrian. Unduhan ZIP tetap mati sampai ada arsip nyata.',
	tool_batch_extract_audio_from_mov_files_rules_title: 'Antrian MOV, berurutan, ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'Klasifikasikan tiap MOV, ekstrak sendiri, masukkan ke ZIP. Sukses sebagian tetap ada. Bukan YouTube→MP3 atau re-encode video bisu.',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'Maksimal 30 .mov; batas demux per file (OPFS ~5 GiB / 6 jam).',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'Non-MOV ditolak saat masuk antrian — MP4/WebM/MKV → hub campuran.',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'Gagal baris = baris itu saja; ≥1 sukses → dikemas.',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'Semua di browser di perangkat — tanpa unggah ke server.',
	tool_batch_extract_audio_from_mov_files_example_title: 'Coba batch MOV nyata',
	tool_batch_extract_audio_from_mov_files_example:
		'Muat contoh membuat dua MOV pendek bersuara (jika MediaRecorder mendukung H.264+AAC), mengekstrak, dan memasukkan dua audio ke ZIP.',
	tool_batch_extract_audio_from_mov_files_usecases_title: 'Kasus penggunaan',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'Folder MOV ponsel menjadi ZIP audio gaya «mov ke mp3 batch» tanpa cloud.',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'Rekam layar MOV seminggu jadi audio yang bisa dibagikan — lokal, bukan YouTube.',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'Kumpulkan AAC dari take kamera dan biarkan MOV asli utuh.',
	tool_batch_extract_audio_from_mov_files_faq_q1: 'Bisakah saya tempel URL atau playlist YouTube?',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'Tidak. Hanya .mov lokal lewat jatuhkan atau pilih. Simpan dulu di perangkat.',
	tool_batch_extract_audio_from_mov_files_faq_q2: 'Saya punya satu MOV — halaman ini?',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'Satu file → alat MOV tunggal. Halaman ini untuk banyak MOV dan ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q3: 'Folder berisi .mov dan .mp4 campur?',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'Di sini hanya .mov. Kontainer campuran: «Ekstrak audio dari file video (batch)».',
	tool_batch_extract_audio_from_mov_files_faq_q4: 'Apakah ini «mov ke mp3 batch» online?',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'Niat sama untuk MOV lokal: demux AAC, ZIP MP3/WAV di perangkat — tanpa ambil URL.',
	tool_batch_extract_audio_from_mov_files_faq_q5: 'Mengapa berurutan, bukan paralel?',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'Dekode paralel membuat RAM melonjak. Berurutan hanya menyimpan audio saat ini untuk ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q6: 'Apakah video diunggah ke server?',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'Tidak. Baca, demux, dan ZIP tetap di browser di perangkat Anda.',
};
export default id;
