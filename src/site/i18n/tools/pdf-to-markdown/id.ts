/**
 * i18n tool shard (pdf-to-markdown / id). Penulisan independen.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'Ambil teks yang bisa dipilih dari lapisan teks PDF di browser dan unduh Markdown — file tetap di perangkat, tanpa unggah ke server. Tanpa OCR.',
  tool_pdf_to_markdown_choose_file: 'Pilih PDF',
  tool_pdf_to_markdown_clear: 'Hapus',
  tool_pdf_to_markdown_convert: 'Konversi',
  tool_pdf_to_markdown_desc:
    'Ubah teks PDF jadi Markdown di perangkat untuk catatan — tanpa unggah ke server.',
  tool_pdf_to_markdown_description:
    'Ekstrak teks PDF ke Markdown di browser untuk catatan atau LLM — file tetap di perangkat dan tidak diunggah ke server. Langkah: pilih PDF dengan lapisan teks, Konversi, lihat pratinjau, unduh .md. Contoh: sampel satu halaman jadi .md berisi «Hello PDF to Markdown sample.» Scan gambar saja gagal (tanpa OCR). Terenkripsi menampilkan error jelas.',
  tool_pdf_to_markdown_download: 'Unduh .md',
  tool_pdf_to_markdown_drop_hint: 'Atau jatuhkan PDF di sini. Proses tetap di tab ini.',
  tool_pdf_to_markdown_empty: 'Pilih file PDF dulu.',
  tool_pdf_to_markdown_err_convert: 'Konversi gagal. Periksa file dan coba lagi.',
  tool_pdf_to_markdown_err_encrypted: 'PDF ini tampak dilindungi sandi. Buka kuncinya lalu coba lagi.',
  tool_pdf_to_markdown_err_load: 'Tidak bisa membaca PDF (rusak atau tidak didukung). Coba file lain.',
  tool_pdf_to_markdown_err_notext:
    'Tidak ada teks yang bisa dipilih. Hanya baca lapisan teks — tanpa OCR. Coba PDF digital atau PDF ke JPG untuk gambar.',
  tool_pdf_to_markdown_err_pdfjs: 'Gagal memuat perender PDF. Periksa jaringan dan coba lagi.',
  tool_pdf_to_markdown_example:
    'Sampel membuat PDF satu halaman Helvetica, mengonversi, menampilkan kalimat di pratinjau, dan mengaktifkan Unduh .md.',
  tool_pdf_to_markdown_example_title: 'Contoh',
  tool_pdf_to_markdown_faq_a1:
    'Tidak. perender halaman berjalan di tab Anda (skrip mungkin dari CDN). PDF tidak diunggah ke server kami.',
  tool_pdf_to_markdown_faq_a2:
    'Scan biasanya gambar tanpa lapisan teks. Tanpa OCR ekstraksi kosong dan gagal dengan pesan jelas.',
  tool_pdf_to_markdown_faq_a3: 'Tidak membangun ulang heading atau tabel — teks biasa per posisi.',
  tool_pdf_to_markdown_faq_a4:
    'Markdown ke HTML mengubah sintaks Markdown jadi halaman web. Alat ini mengekspor teks PDF ke .md.',
  tool_pdf_to_markdown_faq_a5:
    'PDF ke JPG meraster setiap halaman jadi gambar. Pakai alat ini saat butuh teks yang bisa diedit.',
  tool_pdf_to_markdown_faq_q1: 'Apakah PDF diunggah?',
  tool_pdf_to_markdown_faq_q2: 'Mengapa PDF scan gagal?',
  tool_pdf_to_markdown_faq_q3: 'Apakah heading/tabel dipertahankan?',
  tool_pdf_to_markdown_faq_q4: 'Bedanya dengan Markdown ke HTML?',
  tool_pdf_to_markdown_faq_q5: 'Kapan pakai PDF ke JPG?',
  tool_pdf_to_markdown_how_body:
    'Pilih PDF, Konversi, tinjau pratinjau, unduh .md. Baris dikelompokkan menurut posisi vertikal; halaman dipisah ---. Semua di tab ini setelah pustaka dimuat—file tidak diunggah ke server.',
  tool_pdf_to_markdown_how_item_1: "Pilih masukan dengan “Pilih PDF”",
  tool_pdf_to_markdown_how_item_2: "Atur opsi lalu klik “Konversi”",
  tool_pdf_to_markdown_how_item_3: "Periksa pratinjau, jumlah halaman, atau status",
  tool_pdf_to_markdown_how_item_4: "Klik “Unduh .md” untuk menyimpan hasil",
  tool_pdf_to_markdown_how_title: 'Cara kerja',
  tool_pdf_to_markdown_pages_label: 'Halaman',
  tool_pdf_to_markdown_preview_label: 'Pratinjau Markdown',
  tool_pdf_to_markdown_rules_body: 'Ekstraksi lapisan teks, pemisah halaman, tanpa OCR, privasi dan kegagalan.',
  tool_pdf_to_markdown_rules_item_1: 'Mesin: getTextContent per halaman; item y serupa jadi baris dengan spasi.',
  tool_pdf_to_markdown_rules_item_2: 'Halaman: gabung dengan baris kosong, ---, baris kosong.',
  tool_pdf_to_markdown_rules_item_3: 'Tanpa OCR: teks kosong setelah trim → gagal dengan pesan jelas.',
  tool_pdf_to_markdown_rules_item_4: 'Batas: byte di tab; terenkripsi/rusak gagal jelas; >~25 MB bisa lambat.',
  tool_pdf_to_markdown_rules_title: 'Aturan yang diharapkan',
  tool_pdf_to_markdown_sample: 'Muat contoh',
  tool_pdf_to_markdown_stats_tpl: '{n} halaman · {chars} karakter',
  tool_pdf_to_markdown_status_converting: 'Mengekstrak teks…',
  tool_pdf_to_markdown_status_done: 'Selesai — klik Unduh .md untuk simpan.',
  tool_pdf_to_markdown_title: 'PDF ke Markdown — ekstrak teks untuk catatan di browser',
  tool_pdf_to_markdown_usecase_1: 'Kantor: salin klausul kontrak ke catatan tanpa mengetik ulang.',
  tool_pdf_to_markdown_usecase_2: 'Penulis & AI: ekspor laporan ke Markdown untuk edit atau prompt.',
  tool_pdf_to_markdown_usecase_3: 'Pelajar: teks kuliah dari PDF berlapisan teks — untuk catatan.',
  tool_pdf_to_markdown_usecases_title: 'Cocok untuk',
  tool_pdf_to_markdown_warn_large: 'File lebih dari ~25 MB — ekstraksi bisa lambat atau gagal.',
  tool_pdf_to_markdown_warn_pdflib: 'Gagal memuat pustaka PDF. Periksa jaringan dan coba lagi.',
};
export default id;
