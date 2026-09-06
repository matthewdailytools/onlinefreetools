/**
 * i18n tool shard (csv-json / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_csv_json_article:
    'CSV ↔ JSON dua arah dengan aturan jelas soal tipe, pemisah, dan tanda kutip, serta cara JSON bersarang diratakan menjadi kolom. Untuk pertukaran spreadsheet ↔ API, bukan URL kosong tambahan.',
  tool_csv_json_clear: 'Bersihkan',
  tool_csv_json_convert: 'Konversi',
  tool_csv_json_copy_csv: 'Salin CSV',
  tool_csv_json_copy_done: 'Tersalin',
  tool_csv_json_copy_json: 'Salin JSON',
  tool_csv_json_csv_input_label: 'Masukan CSV',
  tool_csv_json_csv_output_label: 'Keluaran CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: 'Deteksi otomatis',
  tool_csv_json_delimiter_comma: 'Koma ,',
  tool_csv_json_delimiter_label: 'Pemisah',
  tool_csv_json_delimiter_semicolon: 'Titik koma ;',
  tool_csv_json_delimiter_tab: 'Tab',
  tool_csv_json_description:
    'Konversi CSV ke JSON atau JSON ke CSV di browser. Langkah: pilih arah, tempel atau unggah, atur pemisah dan header, lalu salin atau unduh. Menangani kolom bertanda kutip dengan koma, titik koma, dan tab; dari JSON ke CSV, objek bersarang diratakan menjadi kolom. Contoh: ubah lembar produk (sku, judul, harga) menjadi array JSON — data tetap lokal.',
  tool_csv_json_dir_label: 'Arah konversi',
  tool_csv_json_download_csv: 'Unduh CSV',
  tool_csv_json_download_json: 'Unduh JSON',
  tool_csv_json_empty: 'Tempel dulu isinya.',
  tool_csv_json_example:
    'CSV `sku,title,price` dengan baris `A-001,"Chair, oak",129.9` menjadi JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (tanpa tipe, price tetap teks; aktifkan untuk angka 129.9). Sebaliknya: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` menghasilkan header `sku,dim.w,dim.h` dengan baris `A-001,40,90`.',
  tool_csv_json_example_title: 'Contoh',
  tool_csv_json_faq_a1:
    'Secara bawaan setiap sel diperlakukan sebagai teks, jadi 007 dan ID panjang tetap utuh. Jika “Deteksi tipe” aktif, nilai mirip angka menjadi angka: 007 jadi 7 dan deret digit sangat panjang bisa kehilangan presisi. Matikan untuk SKU, kode pos, dan nomor telepon.',
  tool_csv_json_faq_a2:
    'Bisa. Pilih koma, titik koma, atau tab, atau biarkan deteksi otomatis dan Papa Parse menebak dari teks. Titik koma umum pada ekspor Excel Eropa; tab berarti TSV.',
  tool_csv_json_faq_a3:
    'Dibungkus tanda kutip ganda dan tanda kutip di dalamnya digandakan, mengikuti RFC 4180. Jadi judul seperti Chair, oak tetap dalam satu kolom, bukan terpecah jadi dua.',
  tool_csv_json_faq_a4:
    'Objek diratakan menjadi kolom jalur titik (dim.w, dim.h). Array ditulis sebagai string JSON dalam satu sel. Kolom adalah gabungan kunci semua record, dan record tanpa kunci itu dibiarkan kosong.',
  tool_csv_json_faq_a5:
    'Tidak. Penguraian tetap di tab ini dan file yang dipilih dibaca secara lokal. situs ini menyediakan Papa Parse; permintaan itu hanya mengunduh kode, bukan mengunggah CSV atau JSON Anda.',
  tool_csv_json_faq_q1: 'Apakah angka, nol di depan, dan ID tetap utuh?',
  tool_csv_json_faq_q2: 'Bisakah menangani titik koma atau tab, bukan hanya koma?',
  tool_csv_json_faq_q3: 'Bagaimana kolom berisi koma, tanda kutip, atau baris baru ditangani?',
  tool_csv_json_faq_q4: 'Bagaimana JSON bersarang menjadi kolom CSV?',
  tool_csv_json_faq_q5: 'Apakah data saya keluar dari browser?',
  tool_csv_json_header: 'Baris pertama sebagai header',
  tool_csv_json_how_body:
    'Pilih CSV → JSON atau JSON → CSV; penguraian dan pembuatan berjalan di tab ini dengan Papa Parse. Untuk CSV, pilih pemisah (atau deteksi otomatis), apakah baris pertama header, dan apakah angka/boolean dideteksi. Untuk JSON, objek bersarang menjadi kolom jalur titik dan kolom adalah gabungan semua kunci.',
  tool_csv_json_how_item_1: 'Pilih CSV → JSON atau JSON → CSV.',
  tool_csv_json_how_item_2: 'Tempel input dan atur delimiter / opsi header untuk CSV.',
  tool_csv_json_how_item_3: 'Klik Konversi (JSON bersarang diratakan ke kolom saat ekspor CSV).',
  tool_csv_json_how_item_4: 'Salin atau unduh hasilnya.',
  tool_csv_json_how_title: 'Cara kerja',
  tool_csv_json_indent_2: '2 spasi',
  tool_csv_json_indent_4: '4 spasi',
  tool_csv_json_indent_label: 'Indentasi',
  tool_csv_json_indent_minify: 'Perkecil JSON',
  tool_csv_json_json_input_label: 'Masukan JSON',
  tool_csv_json_json_output_label: 'Keluaran JSON',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_large_warn:
    'Masukan sangat besar (lebih dari 2 juta karakter). Konversi bisa terasa lambat; coba file yang lebih kecil.',
  tool_csv_json_need_lib: 'Gagal memuat Papa Parse. Periksa koneksi lalu muat ulang.',
  tool_csv_json_rules_body:
    'Yang bisa diharapkan saat mengonversi: bagaimana tipe sel ditangani, pemisah dan aturan tanda kutip mana yang berlaku, dan bagaimana JSON bersarang dipetakan ke kolom.',
  tool_csv_json_rules_item_1:
    'Tipe: sel CSV bawaannya teks. Aktifkan “Deteksi tipe” untuk angka/boolean, tetapi 007 menjadi 7 dan deret angka panjang bisa kehilangan presisi; matikan untuk SKU, kode pos, dan nomor telepon.',
  tool_csv_json_rules_item_2:
    'Pemisah: koma, titik koma (umum di Excel Eropa), dan tab (TSV); deteksi otomatis menebak dari teks. Kolom yang memuat pemisah, tanda kutip, atau baris baru dibungkus tanda kutip ganda sesuai RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: objek diratakan dengan jalur titik (dim.w, dim.h); array ditulis sebagai string JSON dalam satu sel; kolom adalah gabungan semua kunci, yang kosong dibiarkan kosong.',
  tool_csv_json_rules_item_4:
    'Privasi: teks dan file Anda tidak diunggah. Mengambil Papa Parse dari situs ini hanya mengunduh kode pustaka, bukan data Anda.',
  tool_csv_json_rules_title: 'Aturan yang perlu diketahui',
  tool_csv_json_sample: 'Muat contoh',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'Konverter CSV ↔ JSON — ubah tabel di browser',
  tool_csv_json_typing: 'Deteksi tipe (angka/boolean)',
  tool_csv_json_usecase_1:
    'E-commerce: ubah lembar produk hasil ekspor (sku, judul, harga) menjadi array JSON untuk API toko atau marketplace.',
  tool_csv_json_usecase_2: 'Developer: ubah respons JSON menjadi CSV untuk spreadsheet, rekonsiliasi, atau serah terima.',
  tool_csv_json_usecase_3:
    'Data/operasional: bawa CSV laporan atau event (koma, titik koma, atau TSV) ke JSON untuk pipeline, dengan koma dan baris baru yang aman.',
  tool_csv_json_usecases_title: 'Cocok untuk',
};
export default id;
