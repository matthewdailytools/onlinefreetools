/**
 * i18n tool shard (wcag-contrast-checker / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA teks besar',
  tool_wcag_contrast_checker_aa_normal: 'AA teks normal',
  tool_wcag_contrast_checker_aaa_large: 'AAA teks besar',
  tool_wcag_contrast_checker_aaa_normal: 'AAA teks normal',
  tool_wcag_contrast_checker_article:
    'Pemeriksa kontras WCAG dengan luminansi relatif, lencana AA/AAA, pratinjau langsung, dan saran warna aksesibel — semuanya lokal di browser.',
  tool_wcag_contrast_checker_bad_hex: 'Masukkan warna HEX valid (#RGB atau #RRGGBB).',
  tool_wcag_contrast_checker_bg_label: 'Latar belakang',
  tool_wcag_contrast_checker_check: 'Periksa',
  tool_wcag_contrast_checker_clear: 'Hapus',
  tool_wcag_contrast_checker_copy: 'Salin ringkasan',
  tool_wcag_contrast_checker_copy_done: 'Tersalin',
  tool_wcag_contrast_checker_desc:
    'Cek rasio kontras dan lolos AA/AAA — warna tidak diunggah ke server.',
  tool_wcag_contrast_checker_description:
    'Pilih warna teks dan latar untuk melihat rasio kontras WCAG serta status AA/AAA pada teks normal dan besar. Langkah: pilih atau ketik HEX, klik Periksa, baca rasio dan lencana, tukar atau coba saran. Contoh: #767676 di #ffffff ≈ 4,54:1 — lolos AA teks normal, gagal AAA teks normal. Warna tetap di browser Anda.',
  tool_wcag_contrast_checker_empty: 'Periksa dulu, baru salin.',
  tool_wcag_contrast_checker_example:
    'Muat contoh: latar depan #767676 pada latar #ffffff memberi sekitar 4,54:1. AA teks normal lulus (≥4,5:1), AA teks besar lulus (≥3:1), AAA teks normal gagal (≥7:1), AAA teks besar lulus (≥4,5:1). Tukar warna untuk melihat perubahan rasio.',
  tool_wcag_contrast_checker_example_title: 'Contoh',
  tool_wcag_contrast_checker_fail: 'Gagal',
  tool_wcag_contrast_checker_faq_a1:
    'AA teks normal minimal 4,5:1; AA teks besar (18 pt reguler atau 14 pt tebal) 3:1; AAA teks normal 7:1; AAA teks besar 4,5:1. Halaman ini menampilkan keempat lencana sekaligus.',
  tool_wcag_contrast_checker_faq_a2:
    'Teks besar lebih mudah dibaca sehingga kontras boleh lebih rendah. WCAG menetapkan ≥18 pt reguler atau ≥14 pt tebal. Pratinjau menampilkan baris besar dan normal untuk perbandingan.',
  tool_wcag_contrast_checker_faq_a3:
    'Tidak. Perhitungan berjalan sepenuhnya di browser — nilai warna tidak diunggah.',
  tool_wcag_contrast_checker_faq_a4:
    'Jika rasio di bawah 4,5:1, alat dapat menyarankan latar depan atau latar yang lebih terang/gelap agar AA teks normal tercapai. Saran ini titik awal dengan campuran ke putih/hitam, bukan palet merek final.',
  tool_wcag_contrast_checker_faq_a5:
    'Gunakan halaman ini untuk memvalidasi pasangan teks/latar apa pun. Untuk palet merek lengkap dengan token semantik, buka alat paket token warna; Anda juga bisa ambil sampel dari foto dengan alat ekstraksi warna.',
  tool_wcag_contrast_checker_faq_q1: 'Berapa ambang kontras WCAG?',
  tool_wcag_contrast_checker_faq_q2: 'Apa yang dianggap teks besar?',
  tool_wcag_contrast_checker_faq_q3: 'Apakah warna saya dikirim ke server?',
  tool_wcag_contrast_checker_faq_q4: 'Bagaimana memakai saran warna?',
  tool_wcag_contrast_checker_faq_q5: 'Hubungannya dengan token warna merek?',
  tool_wcag_contrast_checker_fg_label: 'Latar depan',
  tool_wcag_contrast_checker_how_body:
    'Atur teks dan latar dengan pemilih warna atau ketik HEX. Halaman mengonversi sRGB ke luminansi relatif, menghitung rasio, lalu menampilkan Lulus/Gagal untuk AA dan AAA (teks normal dan besar). Tukar pasangan, salin ringkasan, atau terapkan saran saat kontras terlalu rendah.',
  tool_wcag_contrast_checker_how_title: 'Cara kerja',
  tool_wcag_contrast_checker_pass: 'Lulus',
  tool_wcag_contrast_checker_preview_label: 'Pratinjau langsung',
  tool_wcag_contrast_checker_preview_large: 'Contoh teks besar',
  tool_wcag_contrast_checker_preview_normal: 'Contoh teks normal',
  tool_wcag_contrast_checker_ratio_label: 'Rasio kontras',
  tool_wcag_contrast_checker_rules_body:
    'Kontras WCAG berdasarkan luminansi relatif — bukan hue saja. Gunakan daftar ini jika rasio terasa aneh.',
  tool_wcag_contrast_checker_rules_item_1:
    'Luminansi relatif L dihitung dari kanal sRGB setelah kurva linearisasi WCAG. Rasio = (Lterang + 0,05) / (Lgelap + 0,05).',
  tool_wcag_contrast_checker_rules_item_2:
    'Ambang: AA teks normal 4,5:1, AA teks besar 3:1, AAA teks normal 7:1, AAA teks besar 4,5:1. Satu rasio mengisi keempat lencana.',
  tool_wcag_contrast_checker_rules_item_3:
    'Hanya HEX sRGB opak (#RGB atau #RRGGBB). HEX tidak valid menampilkan error; latar depan dan latar sama memberi 1:1 dan gagal semua level.',
  tool_wcag_contrast_checker_rules_item_4:
    'Privasi: warna diproses lokal di tab ini — tidak ada yang dikirim ke server.',
  tool_wcag_contrast_checker_rules_title: 'Aturan yang perlu diingat',
  tool_wcag_contrast_checker_sample: 'Contoh',
  tool_wcag_contrast_checker_suggest_bg: 'Coba latar {hex} dengan latar depan ini untuk AA teks normal.',
  tool_wcag_contrast_checker_suggest_fg: 'Coba latar depan {hex} pada latar ini untuk AA teks normal.',
  tool_wcag_contrast_checker_suggest_label: 'Saran',
  tool_wcag_contrast_checker_suggest_none: 'Sudah memenuhi AA teks normal (4,5:1).',
  tool_wcag_contrast_checker_swap: 'Tukar',
  tool_wcag_contrast_checker_title: 'Pemeriksa Kontras WCAG — Rasio AA/AAA',
  tool_wcag_contrast_checker_usecase_1:
    'Desain UI: pastikan teks isi dan label aman di atas latar merek sebelum serah terima.',
  tool_wcag_contrast_checker_usecase_2:
    'Tombol dan chip: uji putih di atas warna atau sebaliknya untuk AA normal atau besar.',
  tool_wcag_contrast_checker_usecase_3:
    'Mode gelap: tukar permukaan terang/gelap dan pastikan teks sekunder tetap ≥4,5:1 atau 3:1 untuk teks besar.',
  tool_wcag_contrast_checker_usecases_title: 'Cocok untuk',
};
export default id;
