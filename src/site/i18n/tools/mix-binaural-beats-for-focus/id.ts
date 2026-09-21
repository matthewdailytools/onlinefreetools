import type { SiteLangDict } from '../../../types';

/**
 * Bahasa Indonesia (id) untuk mix-binaural-beats-for-focus（F9 G7）。
 * Locale rewrite for local search habits—not a verbatim machine translation of en.
 * Stereo L/R beat WAV; hiburan/ambient saja; tanpa klaim medis, terapi, atau penyembuhan.
 */
const id: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: 'Campur binaural beats untuk fokus',
  tool_mix_binaural_beats_for_focus_desc:
    'Campur binaural beats untuk fokus dari carrier dan selisih beat, lalu unduh WAV stereo. Hanya di perangkat—ambient hiburan, bukan pengobatan.',
  tool_mix_binaural_beats_for_focus_description:
    'Campur binaural beats untuk fokus di browser dari carrier dan selisih beat, lalu unduh WAV stereo 16-bit. Langkah: atur Hz carrier dan beat atau ketuk preset, pilih durasi, Campur, dengarkan dengan headphone, unduh. Contoh: carrier 200 Hz dengan selisih 10 Hz selama 10 detik. Hanya hiburan dan suara ambient fokus—bukan pengobatan medis. Tidak pernah diunggah.',
  tool_mix_binaural_beats_for_focus_article:
    'Orang yang mencari binaural beats untuk sesi fokus sering ingin file stereo sederhana yang bisa disimpan. Halaman ini memberi Anda frekuensi carrier untuk telinga kiri dan frekuensi sedikit lebih tinggi di kanan agar selisihnya menjadi laju beat, pilih durasi, sintesis PCM stereo di browser pada 44,1 kHz, lalu unduh WAV 16-bit. Pakai headphone—perbedaan kiri/kanan adalah intinya. Preset hanya mengubah nilai Hertz; itu pintasan ambient, bukan protokol medis. Halaman ini tidak mengklaim efikasi terapeutik, tidak mendiagnosis atau mengobati kondisi apa pun, dan hanya untuk hiburan atau mendengarkan ambient pribadi. Bukan generator sine mono dan bukan pembuat bunyi notifikasi UI. Pekerjaan berjalan di perangkat Anda.',
  tool_mix_binaural_beats_for_focus_carrier_label: 'Carrier (telinga kiri, Hz)',
  tool_mix_binaural_beats_for_focus_carrier_hint: 'Frekuensi saluran kiri, tipikal 80–500 Hz. Default 200 Hz.',
  tool_mix_binaural_beats_for_focus_beat_label: 'Selisih beat (Hz)',
  tool_mix_binaural_beats_for_focus_beat_hint: 'Telinga kanan memutar carrier + nilai ini. Jaga selisih antara 1 dan 40 Hz.',
  tool_mix_binaural_beats_for_focus_preset_label: 'Preset beat ambient',
  tool_mix_binaural_beats_for_focus_dur_label: 'Durasi',
  tool_mix_binaural_beats_for_focus_convert: 'Campur',
  tool_mix_binaural_beats_for_focus_download: 'Unduh WAV',
  tool_mix_binaural_beats_for_focus_sample: 'Muat sampel',
  tool_mix_binaural_beats_for_focus_clear: 'Bersihkan',
  tool_mix_binaural_beats_for_focus_advanced: 'Catatan binaural',
  tool_mix_binaural_beats_for_focus_settings_hint:
    'Keluaran adalah WAV stereo 16-bit pada 44,1 kHz dengan fade pendek. Headphone wajib untuk perbedaan kiri/kanan. Hanya hiburan dan suara ambient fokus—bukan pengobatan medis atau terapi.',
  tool_mix_binaural_beats_for_focus_progress: 'Progres campur',
  tool_mix_binaural_beats_for_focus_synth: 'Sintesis',
  tool_mix_binaural_beats_for_focus_write: 'Tulis',
  tool_mix_binaural_beats_for_focus_done: 'Siap. Dengarkan dengan headphone, lalu Unduh WAV.',
  tool_mix_binaural_beats_for_focus_failed: 'Campur gagal. Periksa carrier, selisih beat, dan durasi.',
  tool_mix_binaural_beats_for_focus_elapsed: '{s}d berlalu',
  tool_mix_binaural_beats_for_focus_preview: 'Dengarkan WAV binaural',
  tool_mix_binaural_beats_for_focus_result:
    'L {left} Hz · R {right} Hz · beat {beat} Hz · {seconds}d · stereo · {rate} Hz · WAV {output} KiB',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: 'Atur dulu carrier dan beat Hz, atau muat sampel.',
  tool_mix_binaural_beats_for_focus_empty_state:
    'Atur carrier dan selisih beat (atau ketuk preset), pilih durasi, lalu Campur—atau Muat sampel (200 Hz / 10 Hz / 10 d). Pakai headphone. Ambient hiburan saja—bukan pengobatan medis.',
  tool_mix_binaural_beats_for_focus_err_carrier: 'Masukkan carrier antara 80 dan 1000 Hz.',
  tool_mix_binaural_beats_for_focus_err_beat: 'Masukkan selisih beat antara 1 dan 40 Hz (kanan = carrier + beat).',
  tool_mix_binaural_beats_for_focus_err_limit: 'Durasi harus antara 0 dan 120 detik.',
  tool_mix_binaural_beats_for_focus_err_encoder: 'Tidak bisa menulis WAV stereo. Coba Campur lagi.',
  tool_mix_binaural_beats_for_focus_how_title: 'Cara mencampur binaural beats untuk fokus',
  tool_mix_binaural_beats_for_focus_how_body:
    'Atur carrier dan beat Hz, pilih durasi, Campur, dengarkan dengan headphone, unduh satu WAV stereo—tanpa mengunggah file dan tanpa klaim terapi.',
  tool_mix_binaural_beats_for_focus_how_item_1:
    'Masukkan Hz carrier untuk telinga kiri (atau biarkan 200 Hz) dan selisih beat untuk telinga kanan.',
  tool_mix_binaural_beats_for_focus_how_item_2:
    'Opsional: ketuk preset ambient (selisih 4, 10, atau 16 Hz)—hanya mengubah angka, bukan protokol medis.',
  tool_mix_binaural_beats_for_focus_how_item_3:
    'Pilih chip durasi, klik Campur, dan tunggu Sintesis → Tulis selesai.',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'Pratinjau dengan headphone, cek baris hasil, lalu klik Unduh WAV.',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'Mengapa memilih alat Campur binaural beats untuk fokus kami',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    'Lihat Hz kiri, kanan, selisih beat, durasi, dan KiB keluaran sebelum menyimpan.',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'Satu pekerjaan binaural stereo yang jelas dengan batas YMYL jujur—ambient hiburan, bukan pengobatan.',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    'Sintesis dan penulisan berjalan di perangkat Anda; tidak ada yang diunggah untuk memproses nada.',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'Mengubah carrier, beat, atau durasi menghapus unduhan lama agar Anda tidak menyimpan WAV usang.',
  tool_mix_binaural_beats_for_focus_rules_title: 'Aturan binaural dan batas yang jujur',
  tool_mix_binaural_beats_for_focus_rules_body:
    'Setiap jalankan mensintesis kiri = carrier dan kanan = carrier + beat pada 44,1 kHz dengan fade tepi pendek. Ekspor WAV stereo 16-bit. Hanya hiburan/ambient—bukan pengobatan medis—dan bukan generator sine mono atau bip UI.',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'Carrier antara 80 dan 1000 Hz. Selisih beat antara 1 dan 40 Hz. Durasi maksimal 120 detik. Keluaran stereo.',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    'Headphone wajib untuk perbedaan kiri/kanan yang sebenarnya. Speaker mencampur saluran dan menyembunyikan efek beat.',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    'Halaman ini tidak mengklaim efikasi medis, tidur, atau terapeutik. Label hanyalah pintasan ambient—bukan protokol pengobatan.',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    'Fade pendek mengurangi klik. Unduhan adalah file baru; tidak ada yang diunggah. Bukan generator sine mono dan bukan bunyi notifikasi UI.',
  tool_mix_binaural_beats_for_focus_example_title: 'Coba carrier 200 Hz dengan beat 10 Hz selama 10 detik',
  tool_mix_binaural_beats_for_focus_example:
    'Muat sampel mengatur carrier 200 Hz, selisih 10 Hz, dan 10 detik, lalu Campur berjalan otomatis. Dengan headphone Anda harus mendengar pasangan stereo yang stabil. Pemutaran tidak mulai sendiri—tekan play jika ingin mendengarkan.',
  tool_mix_binaural_beats_for_focus_usecases_title: 'Kapan ini membantu',
  tool_mix_binaural_beats_for_focus_usecase_1:
    'Anda ingin WAV ambient fokus yang bisa dipakai ulang—atur carrier dan beat, Campur, unduh, dan simpan file untuk headphone.',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'Anda butuh demo beat stereo cepat tanpa memasang aplikasi nada desktop atau mempercayai klaim terapi.',
  tool_mix_binaural_beats_for_focus_faq_q1: 'Apakah ini pengobatan medis atau terapi?',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'Tidak. Halaman ini hanya membuat suara hiburan dan ambient fokus pribadi. Tidak mendiagnosis, mengobati, atau menyembuhkan kondisi apa pun dan tidak mengklaim efikasi terapeutik.',
  tool_mix_binaural_beats_for_focus_faq_q2: 'Apakah saya perlu headphone?',
  tool_mix_binaural_beats_for_focus_faq_a2:
    'Ya untuk perbedaan kiri/kanan yang dimaksud. Di speaker saluran bercampur dan efek beat berkurang atau hilang.',
  tool_mix_binaural_beats_for_focus_faq_q3: 'Apakah ini sama dengan generator nada sine mono?',
  tool_mix_binaural_beats_for_focus_faq_a3:
    'Tidak. Halaman sine membuat satu frekuensi dalam mono. Halaman ini selalu menulis stereo dengan dua frekuensi yang sedikit berbeda.',
  tool_mix_binaural_beats_for_focus_faq_q4: 'Apa arti preset ambient?',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'Mereka hanya mengatur selisih beat dalam Hertz (misalnya 4, 10, atau 16 Hz). Bukan protokol medis dan tidak menjanjikan hasil tidur atau fokus.',
  tool_mix_binaural_beats_for_focus_faq_q5: 'Apakah ada yang diunggah ke server?',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'Tidak. Sintesis dan penulisan berjalan di browser pada perangkat Anda. Halaman butuh jaringan saat pertama dimuat; ketersediaan offline tidak dijamin.',
  tool_mix_binaural_beats_for_focus_faq_q6: 'Format unduhan apa?',
  tool_mix_binaural_beats_for_focus_faq_a6:
    'WAV PCM stereo 16-bit pada 44,1 kHz. File baru yang bisa Anda simpan sebagai klip ambient yang bisa dipakai ulang.',
};
export default id;
