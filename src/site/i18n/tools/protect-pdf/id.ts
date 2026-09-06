/**
 * i18n tool shard (protect-pdf / id). Tulis ulang untuk pencarian Indonesia.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_protect_pdf_article:
    'Lindungi PDF dengan kata sandi di browser sebelum mengirim lampiran sensitif. File tetap di perangkat, tanpa unggah ke server.',
  tool_protect_pdf_choose_file: 'Pilih PDF',
  tool_protect_pdf_clear: 'Hapus',
  tool_protect_pdf_confirm_label: 'Konfirmasi kata sandi',
  tool_protect_pdf_desc: 'Tambahkan kata sandi buka PDF di perangkat — tanpa unggah ke server.',
  tool_protect_pdf_description:
    'Lindungi PDF dengan kata sandi di browser sebelum dibagikan — tidak diunggah ke server. Langkah: pilih PDF, masukkan dan konfirmasi kata sandi (kosong ditolak), klik Lindungi lalu unduh protected.pdf. Contoh: sampel satu halaman dienkripsi dengan sample siap diunduh. Enkripsi kata sandi pengguna standar, bukan tingkat militer; buka nanti butuh kata sandi yang sama (gunakan Buka Kunci PDF nanti — kami tidak membobol sandi). File ~25 MB bisa lambat.',
  tool_protect_pdf_download: 'Unduh',
  tool_protect_pdf_drop_hint: 'Atau jatuhkan PDF di sini. Proses di tab ini.',
  tool_protect_pdf_empty: 'Pilih PDF dulu.',
  tool_protect_pdf_err_encrypted: 'PDF ini sudah terlihat terlindungi. Buka dengan sandi yang Anda tahu, lalu lindungi lagi.',
  tool_protect_pdf_err_load: 'PDF tidak terbaca (rusak atau tidak didukung). Coba file lain.',
  tool_protect_pdf_err_password_empty: 'Masukkan kata sandi — kosong tidak diizinkan.',
  tool_protect_pdf_err_password_mismatch: 'Kata sandi tidak cocok. Ketik ulang keduanya.',
  tool_protect_pdf_err_protect: 'Enkripsi gagal. Periksa file dan sandi lalu coba lagi.',
  tool_protect_pdf_example:
    'Sampel membuat satu halaman, enkripsi dengan sample, aktifkan Unduh protected.pdf, dan tampilkan sandi di status.',
  tool_protect_pdf_example_title: 'Lindungi PDF dengan kata sandi',
  tool_protect_pdf_faq_a1:
    'Tidak. pustaka PDF berjalan di tab Anda (skrip dari situs ini). PDF tidak diunggah ke server kami.',
  tool_protect_pdf_faq_a2:
    'Enkripsi PDF umum: perlu sandi untuk membuka. Bukan tingkat militer — pilih sandi kuat yang Anda ingat.',
  tool_protect_pdf_faq_a3:
    'Butuh sandi yang sama seperti di sini. Saat alat Buka Kunci PDF tersedia, gunakan di sana — kami tidak membobol sandi.',
  tool_protect_pdf_faq_a4: 'PDF yang sudah terenkripsi biasanya gagal dimuat. Hapus sandi lama dengan alat tepercaya lalu lindungi lagi.',
  tool_protect_pdf_faq_q1: 'Apakah PDF diunggah?',
  tool_protect_pdf_faq_q2: 'Seberapa kuat enkripsinya?',
  tool_protect_pdf_faq_q3: 'Bagaimana membukanya nanti?',
  tool_protect_pdf_faq_q4: 'Bagaimana jika sudah terlindungi?',
  tool_protect_pdf_how_body: 'Pilih PDF, ketik sandi dua kali sama, klik Lindungi lalu Unduh. Enkripsi di tab ini setelah pustaka PDF dimuat—tanpa unggah ke server.',
  tool_protect_pdf_how_item_1: "Pilih masukan dengan “Pilih PDF”",
  tool_protect_pdf_how_item_2: "Atur opsi lalu klik “Lindungi”",
  tool_protect_pdf_how_item_3: "Periksa pratinjau, jumlah halaman, atau status",
  tool_protect_pdf_how_item_4: "Klik “Unduh” untuk menyimpan hasil",
  tool_protect_pdf_how_title: 'Cara kerja',
  tool_protect_pdf_pages_label: 'Halaman',
  tool_protect_pdf_password_label: 'Kata sandi',
  tool_protect_pdf_protect: 'Lindungi',
  tool_protect_pdf_rules_body: 'Aturan sandi, cakupan enkripsi, privasi, dan kegagalan.',
  tool_protect_pdf_rules_item_1: 'Sandi wajib; konfirmasi harus cocok. Kosong ditolak sebelum enkripsi.',
  tool_protect_pdf_rules_item_2: 'pustaka PDF set sandi pengguna dan pemilik sama — diperlukan untuk membuka.',
  tool_protect_pdf_rules_item_3: 'Keluaran: PDF terenkripsi (protected.pdf). Input sudah terlindungi gagal dengan pesan jelas.',
  tool_protect_pdf_rules_item_4: 'Privasi: byte di tab; bukan militer; peringatan ~25 MB; file besar bisa gagal.',
  tool_protect_pdf_rules_title: 'Aturan yang diharapkan',
  tool_protect_pdf_sample: 'Muat contoh',
  tool_protect_pdf_stats_tpl: '{pages} hal. · terenkripsi · {bytes}',
  tool_protect_pdf_status_done: 'Selesai — klik Unduh untuk simpan protected.pdf.',
  tool_protect_pdf_status_sample_pwd: 'Contoh siap — sandi: «{pwd}». Unduh protected.pdf untuk coba.',
  tool_protect_pdf_status_working: 'Mengenkripsi PDF…',
  tool_protect_pdf_title: 'Lindungi PDF dengan kata sandi',
  tool_protect_pdf_usecase_1: 'Kantor: sandi buka sebelum kirim kontrak lewat email.',
  tool_protect_pdf_usecase_2: 'Operasi: kunci laporan sekali pakai sebelum portal klien.',
  tool_protect_pdf_usecase_3: 'Pelajar: lindungi scan tugas dengan sandi hanya untuk dosen.',
  tool_protect_pdf_usecases_title: 'Cocok untuk',
  tool_protect_pdf_warn_large: 'File lebih dari ~25 MB — enkripsi bisa lambat atau gagal.',
  tool_protect_pdf_warn_pdflib: 'Gagal memuat pustaka PDF. Periksa jaringan dan coba lagi.',
};
export default id;
