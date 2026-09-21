import type { SiteLangDict } from '../../../types';

/**
 * id copy for add-an-audio-track-to-a-video (F7 V2).
 * How≥4 Why≥4 Rules≥4 FAQ≥5. Gabungkan audio lokal ke video lokal; tanpa YouTube; bukan hanya bisu; bukan hanya ekstrak.
 */
const id: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: 'Tambahkan trek audio ke video',
  tool_add_an_audio_track_to_a_video_desc:
    'Gabungkan soundtrack lokal dengan video lokal, lalu unduh. Hanya di perangkat—tanpa unduhan YouTube.',
  tool_add_an_audio_track_to_a_video_description:
    'Tambahkan trek audio ke video lokal di peramban dengan menggabungkan gambar dan soundtrack pilihan, lalu unduh. Langkah: pilih video dan audio, Tambah audio, pratinjau, unduh. Contoh: klip bisu plus WAV pendek. Menggunakan captureStream dan MediaRecorder—sering WebM; bukan remux tanpa rugi. Tidak pernah diunggah. Tanpa unduhan YouTube.',
  tool_add_an_audio_track_to_a_video_article:
    'Klip bisu atau bersuara lemah sering butuh soundtrack baru sebelum dibagikan. Halaman ini membuka video dan audio lokal, menangkap bingkai tanpa trek asli, mendekode soundtrack di AudioContext, menggabungkan, lalu merekam ulang dengan MediaRecorder—sering WebM tergantung peramban. Durasi mengikuti video; audio lebih panjang dipotong, yang lebih pendek berakhir lebih awal. Tidak mengunduh YouTube atau URL lain, bukan hanya membisukan tanpa menambah suara, dan bukan mengekstrak audio sebagai berkas terpisah. Keberhasilan bergantung pada kemampuan memutar kedua berkas dan MediaRecorder dengan audio. Simpan aslinya. Semua berjalan di perangkat Anda.',
  tool_add_an_audio_track_to_a_video_choose_video: 'Pilih berkas video',
  tool_add_an_audio_track_to_a_video_hint_video:
    'Jatuhkan atau pilih MP4, WebM, MOV, atau M4V lokal yang dapat diputar peramban. Hingga 80 MiB dan sekitar 3 menit. Tanpa YouTube atau tempel URL.',
  tool_add_an_audio_track_to_a_video_choose_audio: 'Pilih berkas audio',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'Jatuhkan atau pilih WAV, MP3, M4A, atau serupa lokal yang dapat didekode peramban. Hingga 40 MiB.',
  tool_add_an_audio_track_to_a_video_convert: 'Tambah audio',
  tool_add_an_audio_track_to_a_video_download: 'Unduh',
  tool_add_an_audio_track_to_a_video_sample: 'Muat sampel',
  tool_add_an_audio_track_to_a_video_clear: 'Bersihkan',
  tool_add_an_audio_track_to_a_video_advanced: 'Catatan gabungan',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'Peramban biasanya merekam ulang lewat MediaRecorder setelah membuang trek asli dan menempel soundtrack Anda. Keluaran sering WebM, bukan remux tanpa rugi. Halaman ini tidak pernah mengunduh YouTube.',
  tool_add_an_audio_track_to_a_video_progress: 'Progres tambah audio',
  tool_add_an_audio_track_to_a_video_read: 'Baca',
  tool_add_an_audio_track_to_a_video_decode: 'Dekode',
  tool_add_an_audio_track_to_a_video_merge: 'Gabung',
  tool_add_an_audio_track_to_a_video_write: 'Tulis',
  tool_add_an_audio_track_to_a_video_done: 'Siap. Pratinjau video gabungan, lalu Unduh.',
  tool_add_an_audio_track_to_a_video_failed:
    'Tidak bisa menggabungkan audio ke video ini. Coba berkas lebih pendek yang dapat diputar.',
  tool_add_an_audio_track_to_a_video_elapsed: '{s} dtk berlalu',
  tool_add_an_audio_track_to_a_video_preview: 'Pratinjau video gabungan',
  tool_add_an_audio_track_to_a_video_result: '{seconds} dtk · dengan audio · {mime} · {output} KiB',
  tool_add_an_audio_track_to_a_video_sample_name: 'sampel-tambah-audio',
  tool_add_an_audio_track_to_a_video_empty: 'Pilih video dan audio lokal, atau muat sampel dulu.',
  tool_add_an_audio_track_to_a_video_empty_state:
    'Belum ada berkas. Jatuhkan video dan soundtrack lokal, atau klik Muat sampel. Alat ini menggabungkan audio ke gambar—bukan hanya bisu, bukan hanya ekstrak, dan tidak mengunduh YouTube.',
  tool_add_an_audio_track_to_a_video_video_label: 'Video: {name}',
  tool_add_an_audio_track_to_a_video_audio_label: 'Audio: {name}',
  tool_add_an_audio_track_to_a_video_err_file: 'Pilih satu video dan satu audio lokal yang didukung.',
  tool_add_an_audio_track_to_a_video_err_format:
    'Berkas tidak didukung atau tidak dapat diputar. Gunakan tipe video/audio umum yang dapat didekode. Tanpa URL YouTube.',
  tool_add_an_audio_track_to_a_video_err_limit:
    'Gunakan video lokal hingga 80 MiB / sekitar 3 menit, dan audio hingga 40 MiB.',
  tool_add_an_audio_track_to_a_video_err_decode:
    'Peramban tidak dapat mendekode video atau audio. Coba wadah lain atau klip lebih pendek.',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'MediaRecorder tidak dapat menulis video gabungan. Coba Chrome/Edge atau WebM/MP4 lebih pendek plus WAV/MP3.',
  tool_add_an_audio_track_to_a_video_how_title: 'Cara menambahkan trek audio ke video',
  tool_add_an_audio_track_to_a_video_how_body:
    'Pilih video dan audio lokal, jalankan Tambah audio, pratinjau, lalu unduh—tanpa unggah dan tanpa YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'Pilih video dan audio lokal (atau Muat sampel). Jangan tempel tautan YouTube.',
  tool_add_an_audio_track_to_a_video_how_item_2:
    'Klik Tambah audio dan tunggu Baca → Dekode → Gabung → Tulis selesai.',
  tool_add_an_audio_track_to_a_video_how_item_3:
    'Pratinjau hasil. Anda harus mendengar soundtrack baru bersama gambar.',
  tool_add_an_audio_track_to_a_video_how_item_4:
    'Periksa baris hasil, lalu klik Unduh.',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'Mengapa memilih alat tambah trek audio kami',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    'Lihat durasi, tipe MIME, dan KiB keluaran sebelum menyimpan.',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    'Satu pekerjaan gabung yang jelas dengan batas MediaRecorder yang jujur—bukan janji remux tanpa rugi palsu.',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    'Pembacaan dan perekaman di perangkat Anda; halaman tidak mengunggah berkas untuk diproses.',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'Mengganti salah satu berkas menghapus unduhan lama agar tidak menyimpan gabungan usang.',
  tool_add_an_audio_track_to_a_video_rules_title: 'Aturan gabung dan batas jujur peramban',
  tool_add_an_audio_track_to_a_video_rules_body:
    'Setiap proses membuang trek asli, menempel soundtrack Anda, dan merekam ulang dengan MediaRecorder. Keluaran sering WebM. Bukan unduhan YouTube, bukan hanya bisu, bukan ekstrak audio.',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'Satu video lokal hingga 80 MiB dan sekitar tiga menit, plus satu audio lokal hingga 40 MiB. Putar/dekode harus berhasil dulu.',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    'Durasi keluaran mengikuti video. Audio lebih panjang dipotong; lebih pendek berakhir sebelum gambar.',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'Tanpa YouTube, URL podcast, atau unduhan jarak jauh. Tempel tidak didukung.',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'Wadah dan codec dapat berubah. Simpan asli; unduhan adalah berkas rekode baru.',
  tool_add_an_audio_track_to_a_video_example_title: 'Coba klip bisu pendek plus nada',
  tool_add_an_audio_track_to_a_video_example:
    'Muat sampel membuat video canvas pendek dan nada sederhana, lalu Tambah audio berjalan otomatis. Anda melihat gambar dengan soundtrack baru. Putar tidak mulai sendiri—tekan putar jika ingin menonton.',
  tool_add_an_audio_track_to_a_video_usecases_title: 'Kapan ini membantu',
  tool_add_an_audio_track_to_a_video_usecase_1:
    'Rekaman layar bisu dan dasar WAV—gabungkan di sini, lalu unduh untuk dibagikan.',
  tool_add_an_audio_track_to_a_video_usecase_2:
    'Ganti trek bawaan yang lemah dengan soundtrack lokal yang lebih jelas tanpa memasang editor desktop.',
  tool_add_an_audio_track_to_a_video_faq_q1: 'Bisakah mengunduh YouTube atau menempel URL?',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'Tidak. Hanya berkas lokal yang sudah Anda miliki. Tidak ada pengunduh YouTube dan tidak ada ambil jarak jauh.',
  tool_add_an_audio_track_to_a_video_faq_q2: 'Apakah sama dengan menghapus audio dari video?',
  tool_add_an_audio_track_to_a_video_faq_a2:
    'Tidak. Bisu/hapus adalah pekerjaan lain. Halaman ini menempel soundtrack baru ke gambar.',
  tool_add_an_audio_track_to_a_video_faq_q3: 'Apakah mengekstrak audio sebagai unduhan terpisah?',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'Tidak. Mengekstrak audio dari video adalah alat lain. Di sini hasilnya adalah berkas video dengan suara gabungan.',
  tool_add_an_audio_track_to_a_video_faq_q4: 'Apakah keluaran akan sama MP4 dengan sumber?',
  tool_add_an_audio_track_to_a_video_faq_a4:
    'Biasanya tidak. Peramban umumnya merekam ulang dengan MediaRecorder, sering ke WebM. Kualitas dan wadah dapat berubah.',
  tool_add_an_audio_track_to_a_video_faq_q5: 'Apakah ada yang diunggah ke server?',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'Tidak. Dekode dan perekaman berjalan di peramban pada perangkat Anda. Halaman butuh jaringan saat pertama dimuat; offline tidak dijamin.',
  tool_add_an_audio_track_to_a_video_faq_q6: 'Bagaimana jika audio lebih panjang dari video?',
  tool_add_an_audio_track_to_a_video_faq_a6:
    'Gabungan mengikuti durasi video. Audio setelah akhir gambar tidak disimpan dalam unduhan.',
};
export default id;
