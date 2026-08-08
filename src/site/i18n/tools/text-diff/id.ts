/**
 * i18n tool shard (text-diff / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_text_diff_article:
    'Alat gratis untuk membandingkan dua teks berdampingan. Mode baris untuk config dan kode; mode kata untuk tulisan dan prompt; mode karakter untuk typo kecil. Semua di browser — teks Anda tidak diunggah.',
  tool_text_diff_clear: 'Kosongkan',
  tool_text_diff_compare: 'Bandingkan',
  tool_text_diff_description:
    'Bandingkan dua teks online dan lihat apa yang berubah. Proses: tempel teks asli dan revisi, pilih per baris, per kata, atau per karakter, opsional abaikan spasi atau samakan baris baru Windows (CRLF→LF), lalu sorot penambahan dan penghapusan di browser. Contoh: ubah "halo dunia" menjadi "halo kawan" — mode kata menampilkan satu penggantian.',
  tool_text_diff_empty_hint: 'Tempel teks di satu atau kedua sisi, lalu bandingkan.',
  tool_text_diff_example:
    'Contoh (mode kata): A = "Halo dunia", B = "Halo teman" → satu perubahan (dunia → teman). Jika hanya baris tengah dari tiga baris yang berubah, mode baris menandai baris itu.',
  tool_text_diff_example_title: 'Contoh',
  tool_text_diff_faq_a1:
    'Baris untuk kode dan config. Kata untuk kalimat, email, dan prompt — hanya kata yang berubah yang disorot.',
  tool_text_diff_faq_a2:
    'Teks yang Anda tempel tidak diunggah atau disimpan oleh kami — perbandingan berjalan di browser. Halaman dapat memuat jsdiff (open source) dari CDN; itu tidak mengirim teks Anda ke server kami.',
  tool_text_diff_faq_a3:
    'Windows sering memakai CRLF; Mac/Linux biasanya LF. Aktifkan “Samakan CRLF dan LF” lalu bandingkan lagi.',
  tool_text_diff_faq_a4: 'Tidak. Hanya teks biasa.',
  tool_text_diff_faq_q1: 'Bandingkan per baris atau per kata?',
  tool_text_diff_faq_q2: 'Apakah teks saya diunggah ke server?',
  tool_text_diff_faq_q3: 'Mengapa hanya beda baris baru membuat seluruh baris merah?',
  tool_text_diff_faq_q4: 'Bisakah membandingkan gambar atau file biner?',
  tool_text_diff_how_body:
    'Tempel dua versi, pilih ketelitian (baris, kata, atau karakter), lalu lihat tambahan hijau dan penghapusan merah. Teks yang Anda tempel tidak diunggah atau disimpan oleh kami. Halaman dapat memuat pustaka open-source jsdiff dari CDN agar perbandingan berjalan di browser.',
  tool_text_diff_how_title: 'Cara memakai',
  tool_text_diff_ignore_ws: 'Abaikan spasi',
  tool_text_diff_label_a: 'Teks asli',
  tool_text_diff_label_b: 'Teks revisi',
  tool_text_diff_large_warn: 'Tempelan sangat besar (>100k karakter). Bisa lambat — coba cuplikan lebih pendek.',
  tool_text_diff_legend: 'Hijau = ditambahkan · Merah = dihapus',
  tool_text_diff_mode_chars: 'Karakter',
  tool_text_diff_mode_label: 'Bandingkan per',
  tool_text_diff_mode_lines: 'Baris',
  tool_text_diff_mode_words: 'Kata',
  tool_text_diff_need_lib: 'Gagal memuat pembanding. Periksa koneksi dan muat ulang.',
  tool_text_diff_no_diff: 'Tidak ada perbedaan — kedua teks sama.',
  tool_text_diff_normalize_eol: 'Samakan CRLF dan LF',
  tool_text_diff_placeholder_a: 'Tempel teks asli…',
  tool_text_diff_placeholder_b: 'Tempel teks revisi…',
  tool_text_diff_result_label: 'Perbedaan',
  tool_text_diff_rules_body:
    'Alat ini mencari daftar singkat perubahan dari teks A ke B (diff klasik / pendekatan Myers dengan jsdiff). Mode baris: config dan kode. Mode kata: kalimat dan prompt. Mode karakter: typo kecil, tapi lebih ramai. Abaikan spasi menyembunyikan perubahan indent saja. Samakan CRLF dan LF agar baris tidak merah hanya karena gaya baris baru.',
  tool_text_diff_rules_intro:
    'Alat ini mencari daftar singkat suntingan untuk mengubah teks A menjadi B (diff klasik / pendekatan Myers dengan jsdiff). Pilih mode sesuai tugas:',
  tool_text_diff_rules_item_chars: 'Karakter — cocok untuk typo kecil; paling teliti, tapi berisik pada suntingan panjang.',
  tool_text_diff_rules_item_lines:
    'Baris — cocok untuk .env, YAML, dan kode; satu baris berubah ditandai utuh. Cepat dibaca, tapi satu kata saja tetap membuat seluruh baris merah.',
  tool_text_diff_rules_item_words:
    'Kata — cocok untuk kalimat, email, dan prompt; menyorot kata. Lebih jelas untuk prosa; tanda baca bisa memecah hasil.',
  tool_text_diff_rules_options:
    'Abaikan spasi menyembunyikan perubahan indentasi saja. Samakan CRLF dan LF agar baris utuh tidak merah hanya karena gaya baris baru (Windows vs Unix).',
  tool_text_diff_rules_title: 'Cara perbedaan dihitung',
  tool_text_diff_sample_a: 'Halo dunia\\nbaris dua\\nbaris tiga',
  tool_text_diff_sample_b: 'Halo teman\\nbaris dua\\nbaris tiga',
  tool_text_diff_summary: '{added} ditambah, {removed} dihapus',
  tool_text_diff_swap: 'Tukar sisi',
  tool_text_diff_usecase_1: 'Cek config: bandingkan cuplikan .env atau YAML baris demi baris.',
  tool_text_diff_usecase_2: 'Revisi prompt: mode kata untuk melihat frasa yang ditambah atau dihapus.',
  tool_text_diff_usecase_3: 'Koreksi teks atau terjemahan: pastikan hanya kalimat yang dimaksud yang berubah.',
  tool_text_diff_usecases_title: 'Kapan dipakai',
};
export default id;
