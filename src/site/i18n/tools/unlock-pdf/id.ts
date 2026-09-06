/**
 * i18n tool shard (unlock-pdf / id). Local rewrite; known password, not cracking.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_unlock_pdf_article:
    'Hapus kata sandi buka PDF jika Anda sudah mengetahuinya—di browser, bukan alat crack. File tetap di perangkat.',
  tool_unlock_pdf_choose_file: 'Pilih PDF terenkripsi',
  tool_unlock_pdf_clear: 'Hapus',
  tool_unlock_pdf_desc:
    'Hapus kata sandi buka yang sudah Anda tahu—di perangkat, tanpa unggah ke server.',
  tool_unlock_pdf_description:
    'Buka kunci PDF terlindungi di browser jika Anda tahu kata sandi bukanya—tanpa unggah ke server. Langkah: pilih PDF terenkripsi, masukkan kata sandi (kosong ditolak jika wajib), klik Buka kunci lalu unduh unlocked.pdf. Contoh: satu halaman dienkripsi dengan kata sandi sample, diisi otomatis, lalu dibuka. Bukan crack, brute force, atau pemulihan kata sandi yang lupa. Di atas ~25 MB bisa lambat.',
  tool_unlock_pdf_download: 'Unduh',
  tool_unlock_pdf_drop_hint: 'Atau jatuhkan PDF terenkripsi di sini. Proses di tab ini.',
  tool_unlock_pdf_empty: 'Pilih PDF terenkripsi dulu.',
  tool_unlock_pdf_encrypted_label: 'Berpassword',
  tool_unlock_pdf_err_load: 'PDF tidak bisa dibaca (rusak atau tidak didukung). Coba file lain.',
  tool_unlock_pdf_err_not_encrypted:
    'PDF ini tampaknya tidak berpassword buka. Gunakan Gabung PDF atau alat lain.',
  tool_unlock_pdf_err_password_empty: 'Masukkan kata sandi buka—kosong ditolak jika file memerlukannya.',
  tool_unlock_pdf_err_password_wrong:
    'Kata sandi salah. Ketik ulang yang Anda set saat melindungi file.',
  tool_unlock_pdf_err_unlock: 'Gagal membuka kunci. Periksa file dan kata sandi lalu coba lagi.',
  tool_unlock_pdf_example:
    'Contoh membuat PDF satu halaman terenkripsi dengan kata sandi sample, mengisi sandi, membuka kunci, dan mengaktifkan Unduh unlocked.pdf.',
  tool_unlock_pdf_example_title: 'Buka kunci PDF saya',
  tool_unlock_pdf_faq_a1:
    'Tidak. Hanya menghapus proteksi jika Anda memasukkan kata sandi buka yang benar. Tanpa crack, brute force, atau memulihkan sandi yang tidak diketahui.',
  tool_unlock_pdf_faq_a2:
    'Tidak. pustaka PDF berjalan di tab Anda (skrip dari situs ini). PDF tidak diunggah ke server kami.',
  tool_unlock_pdf_faq_a3:
    'Pesan kata sandi salah akan muncul jelas. Gunakan sandi yang sama dari Lindungi PDF atau app lain—kami tidak menebak.',
  tool_unlock_pdf_faq_a4:
    'Lindungi PDF menambah kata sandi; Gabung PDF setelah buka kunci di sini. Buka kunci hanya untuk file yang sudah minta sandi saat dibuka.',
  tool_unlock_pdf_faq_q1: 'Apakah ini crack atau pulihkan sandi yang lupa?',
  tool_unlock_pdf_faq_q2: 'Apakah PDF diunggah?',
  tool_unlock_pdf_faq_q3: 'Bagaimana jika kata sandi salah?',
  tool_unlock_pdf_faq_q4: 'Hubungannya dengan Lindungi PDF?',
  tool_unlock_pdf_how_body:
    'Pilih satu PDF berpassword, masukkan kata sandi buka yang sudah Anda tahu, klik Buka kunci lalu Unduh. Dekripsi di tab ini setelah pustaka PDF dimuat—tanpa unggah ke server. Sandi kosong ditolak jika wajib.',
  tool_unlock_pdf_how_item_1: "Pilih masukan dengan “Pilih PDF terenkripsi”",
  tool_unlock_pdf_how_item_2: "Atur opsi lalu klik “Buka kunci”",
  tool_unlock_pdf_how_item_3: "Periksa pratinjau, jumlah halaman, atau status",
  tool_unlock_pdf_how_item_4: "Klik “Unduh” untuk menyimpan hasil",
  tool_unlock_pdf_how_title: 'Cara kerja',
  tool_unlock_pdf_pages_label: 'Halaman',
  tool_unlock_pdf_password_label: 'Kata sandi buka',
  tool_unlock_pdf_rules_body: 'Aturan sandi, cakupan, privasi, dan kegagalan saat buka kunci di browser.',
  tool_unlock_pdf_rules_item_1:
    'Cakupan: Anda harus tahu kata sandi buka. Tanpa crack, brute force, atau pemulihan sandi tidak dikenal.',
  tool_unlock_pdf_rules_item_2: 'Input: hanya PDF terenkripsi. Tanpa sandi ditolak dengan pesan jelas.',
  tool_unlock_pdf_rules_item_3: 'Output: satu PDF tanpa enkripsi (unlocked.pdf). Sandi salah = error eksplisit.',
  tool_unlock_pdf_rules_item_4:
    'Privasi: byte di tab; tanpa unggah ke server; peringatan ~25 MB; file besar bisa gagal.',
  tool_unlock_pdf_rules_title: 'Aturan yang diharapkan',
  tool_unlock_pdf_sample: 'Muat contoh',
  tool_unlock_pdf_stats_tpl: '{pages} hal. · terbuka · {bytes}',
  tool_unlock_pdf_status_done: 'Selesai — klik Unduh untuk menyimpan unlocked.pdf.',
  tool_unlock_pdf_status_sample_pwd: 'Contoh siap — kata sandi «{pwd}». Unduh unlocked.pdf untuk coba.',
  tool_unlock_pdf_status_working: 'Membuka kunci PDF…',
  tool_unlock_pdf_title: 'Buka kunci PDF saya',
  tool_unlock_pdf_unlock: 'Buka kunci',
  tool_unlock_pdf_usecase_1: 'Kantor: hapus sandi buka sendiri agar bisa digabung atau dicetak di app lain.',
  tool_unlock_pdf_usecase_2: 'Operasi: buka kunci ekspor klien yang Anda enkripsi sebelum unggah ke portal.',
  tool_unlock_pdf_usecase_3: 'Pelajar: hapus sandi scan setelah dinilai, dengan sandi yang Anda set.',
  tool_unlock_pdf_usecases_title: 'Cocok untuk',
  tool_unlock_pdf_warn_large: 'File lebih dari ~25 MB — bisa lambat atau gagal di beberapa browser.',
  tool_unlock_pdf_warn_pdflib: 'Gagal memuat pustaka PDF. Periksa jaringan dan coba lagi.',
};
export default id;
