/**
 * i18n tool shard (password-generator / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_password_generator_article:
    'Buat password acak dari charset pilihan dengan crypto.getRandomValues — untuk demo cepat, akun sementara, atau uji aturan panjang/charset. Bukan password manager dan bukan jaminan kekuatan.',
  tool_password_generator_charset_label: 'Charset',
  tool_password_generator_clear: 'Hapus',
  tool_password_generator_copy: 'Salin',
  tool_password_generator_copy_done: 'Disalin',
  tool_password_generator_count_label: 'Jumlah (1–100)',
  tool_password_generator_desc:
    'Password acak dengan opsi panjang dan charset — dihasilkan lokal dengan crypto.getRandomValues.',
  tool_password_generator_description:
    'Generate password acak di browser. Langkah: atur panjang (8–128), centang huruf besar/kecil/angka/simbol, opsional kecualikan ambigu, klik Generate, salin. Contoh: 16 karakter campuran huruf, angka, simbol. Hanya crypto.getRandomValues — tidak disimpan atau diunggah.',
  tool_password_generator_digits: 'Angka',
  tool_password_generator_disclaimer:
    'Generator tingkat demo untuk kemudahan — bukan brankas password. Untuk perbankan atau akun utama gunakan password manager khusus. Password dibuat lokal dan tidak disimpan di server kami.',
  tool_password_generator_empty_charset: 'Aktifkan minimal satu charset (setelah pengecualian).',
  tool_password_generator_example:
    'Panjang 16 dengan semua charset aktif bisa seperti `Xk9#mP2$vL4@nQ8!` — huruf besar/kecil, angka, simbol. Setiap klik string baru; Muat contoh = panjang 16 semua aktif.',
  tool_password_generator_example_title: 'Contoh',
  tool_password_generator_exclude_ambiguous: 'Kecualikan ambigu (0 O I l 1)',
  tool_password_generator_faq_a1:
    'Tidak. Generate sepenuhnya di browser. Kami tidak log, simpan, atau kirim password yang Anda buat di sini.',
  tool_password_generator_faq_a2:
    'Randomness dari crypto.getRandomValues (CSPRNG), bukan Math.random. Password lebih panjang dengan lebih banyak kelas lebih tahan tebak, tapi tab browser tidak menjanjikan «tak bisa dipecah» — ikuti kebijakan org dan pakai manager untuk secret produksi.',
  tool_password_generator_faq_a3:
    'Tidak. Halaman ini hanya membuat string acak baru. Tidak bisa audit, crack, atau pulihkan password yang sudah ada.',
  tool_password_generator_faq_a4:
    'Menghapus karakter mirip visual (0/O, 1/l/I) agar mudah dibaca/diketik — dengan charset sedikit lebih kecil.',
  tool_password_generator_faq_a5:
    'Hingga 100 password per klik, satu per baris. Generate lagi untuk batch berikutnya.',
  tool_password_generator_faq_q1: 'Apakah password disimpan atau dikirim ke server?',
  tool_password_generator_faq_q2: 'Seberapa kuat password ini?',
  tool_password_generator_faq_q3: 'Bisakah alat ini crack password saya?',
  tool_password_generator_faq_q4: 'Apa fungsi «kecualikan ambigu»?',
  tool_password_generator_faq_q5: 'Berapa banyak password bisa digenerate sekaligus?',
  tool_password_generator_generate: 'Generate',
  tool_password_generator_how_body:
    'Atur panjang, pilih kelas karakter, opsional kecualikan glif ambigu, set jumlah lalu Generate. Setiap karakter dipilih dengan crypto.getRandomValues dari pool gabungan. Salin daftar — tidak ada yang tersisa setelah Anda tinggalkan halaman.',
  tool_password_generator_how_title: 'Cara kerja',
  tool_password_generator_length_label: 'Panjang',
  tool_password_generator_lower: 'Huruf kecil',
  tool_password_generator_output_label: 'Password',
  tool_password_generator_rules_body:
    'Aturan charset, sumber random, dan batas jujur — baca sebelum pakai output untuk akun nyata.',
  tool_password_generator_rules_item_1:
    'Pool: A–Z, a–z, 0–9, dan simbol default. Minimal satu pool harus tersisa setelah toggle dan pengecualian ambigu.',
  tool_password_generator_rules_item_2:
    'Indeks acak memakai byte crypto.getRandomValues, bukan Math.random. Byte yang membuat modulo bias dibuang lalu diambil ulang, jadi setiap karakter dalam kumpulan punya peluang sama.',
  tool_password_generator_rules_item_3:
    'Bukan enforcement komposisi NIST (tanpa aturan «satu per kelas»). Aktifkan set yang Anda butuhkan manual.',
  tool_password_generator_rules_item_4:
    'Privasi: generate lokal saja; hapus output di mesin bersama setelah selesai.',
  tool_password_generator_rules_title: 'Aturan yang perlu diharapkan',
  tool_password_generator_sample: 'Muat contoh',
  tool_password_generator_symbols: 'Simbol',
  tool_password_generator_title: 'Generator Password Acak — buat sandi di browser',
  tool_password_generator_upper: 'Huruf besar',
  tool_password_generator_usecase_1: 'Buat kredensial sekali pakai untuk login staging yang akan segera dirotasi.',
  tool_password_generator_usecase_2: 'Prototipe form signup yang butuh sample password kuat di skrip QA.',
  tool_password_generator_usecase_3: 'Bandingkan dampak panjang dan simbol pada keterbacaan sebelum update kebijakan tim.',
  tool_password_generator_usecases_title: 'Cocok untuk',
};
export default id;
