/**
 * i18n tool shard（merge-pdf / id）. Ditulis ulang mandiri untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_merge_pdf_article:
    'Gabungkan beberapa PDF sesuai urutan daftar dengan pdf-lib di klien—tanpa unggah ke server. Susun ulang, tangani gagal enkripsi, unduh satu dokumen.',
  tool_merge_pdf_choose_files: 'Pilih PDF',
  tool_merge_pdf_clear: 'Hapus',
  tool_merge_pdf_desc: 'Satukan beberapa PDF menjadi satu di browser—tanpa unggah ke server; file tetap di perangkat Anda.',
  tool_merge_pdf_description:
    'Gabungkan file PDF di browser dan unduh satu dokumen—tanpa unggah ke server. Langkah: tambah dua PDF atau lebih, susun ulang daftar, gabung, lalu unduh. Contoh: dua sampel satu halaman menjadi PDF dua halaman. PDF terenkripsi atau rusak gagal dengan pesan jelas. Berbeda dari Gambar ke PDF yang mulai dari foto.',
  tool_merge_pdf_download: 'Unduh',
  tool_merge_pdf_drop_hint: 'Atau jatuhkan PDF di sini. Pemrosesan tetap di tab ini.',
  tool_merge_pdf_empty: 'Tambahkan setidaknya dua PDF untuk digabung.',
  tool_merge_pdf_err_encrypted: 'Satu file tampak dilindungi kata sandi. Buka kuncinya dulu, lalu coba lagi.',
  tool_merge_pdf_err_load: 'Tidak bisa membaca PDF (rusak atau tidak didukung). Coba file lain.',
  tool_merge_pdf_err_merge: 'Penggabungan gagal. Periksa file dan coba lagi.',
  tool_merge_pdf_example:
    'Sampel memuat dua PDF satu halaman (A dan B), menggabung sesuai urutan daftar, dan mengaktifkan Unduh untuk merged.pdf dua halaman.',
  tool_merge_pdf_example_title: 'Gabungkan file PDF jadi satu',
  tool_merge_pdf_faq_a1:
    'Tidak. pdf-lib berjalan di tab Anda (pustaka dimuat dari situs ini). PDF tidak diunggah ke server kami.',
  tool_merge_pdf_faq_a2:
    'Gambar ke PDF membuat PDF dari foto. Alat ini menggabungkan file PDF yang sudah ada menjadi satu dokumen.',
  tool_merge_pdf_faq_a3:
    'Ya—gunakan Naik/Turun di setiap baris. Urutan daftar dari atas ke bawah menjadi urutan halaman.',
  tool_merge_pdf_faq_a4:
    'PDF berpassword biasanya gagal dibuka di sini. Hapus kata sandinya dengan cara tepercaya, lalu gabungkan.',
  tool_merge_pdf_faq_a5: 'Sebagian besar pembaca PDF di desktop dan ponsel bisa membuka hasilnya.',
  tool_merge_pdf_faq_q1: 'Apakah PDF saya diunggah?',
  tool_merge_pdf_faq_q2: 'Bedanya dengan Gambar ke PDF?',
  tool_merge_pdf_faq_q3: 'Bisakah mengubah urutan gabung?',
  tool_merge_pdf_faq_q4: 'Bagaimana dengan PDF terenkripsi?',
  tool_merge_pdf_faq_q5: 'Apakah hasilnya terbuka di Acrobat atau Preview?',
  tool_merge_pdf_how_body:
    'Tambah dua PDF atau lebih, susun ulang jika perlu, klik Gabung, lalu Unduh. Urutan halaman mengikuti daftar. Semuanya lokal setelah pustaka dimuat.',
  tool_merge_pdf_how_item_1: "Pilih masukan dengan “Pilih PDF”",
  tool_merge_pdf_how_item_2: "Atur opsi lalu klik “Gabung”",
  tool_merge_pdf_how_item_3: "Periksa pratinjau, jumlah halaman, atau status",
  tool_merge_pdf_how_item_4: "Klik “Unduh” untuk menyimpan hasil",
  tool_merge_pdf_how_title: 'Cara kerja',
  tool_merge_pdf_merge: 'Gabung',
  tool_merge_pdf_move_down: 'Turun',
  tool_merge_pdf_move_up: 'Naik',
  tool_merge_pdf_remove: 'Buang',
  tool_merge_pdf_rules_body:
    'Urutan daftar, copyPages, privasi, dan kasus gagal saat menggabung PDF secara lokal.',
  tool_merge_pdf_rules_item_1:
    'Urutan: halaman disalin sesuai daftar (file teratas dulu). Susun ulang sebelum Gabung.',
  tool_merge_pdf_rules_item_2:
    'Mesin: pdf-lib memuat tiap PDF dan copyPages ke dokumen baru—tanpa mengirim file Anda ke server.',
  tool_merge_pdf_rules_item_3:
    'Privasi: byte tetap di tab browser. Skrip pustaka dimuat dari situs ini.',
  tool_merge_pdf_rules_item_4:
    'Batas: butuh ≥2 file; PDF terenkripsi/rusak gagal dengan error terbaca; set sangat besar bisa lambat di memori.',
  tool_merge_pdf_rules_title: 'Aturan yang perlu Anda tahu',
  tool_merge_pdf_sample: 'Muat contoh',
  tool_merge_pdf_stats_tpl: '{n} file → {pages} halaman · {bytes}',
  tool_merge_pdf_status_done: 'Selesai — klik Unduh untuk menyimpan merged.pdf.',
  tool_merge_pdf_status_merging: 'Menggabungkan PDF…',
  tool_merge_pdf_title: 'Gabungkan file PDF menjadi satu',
  tool_merge_pdf_usecase_1: 'Kantor: gabungkan halaman tanda tangan dan lampiran jadi satu paket.',
  tool_merge_pdf_usecase_2: 'Mahasiswa: satukan bab tugas sebelum dikumpulkan.',
  tool_merge_pdf_usecase_3: 'Ops: kemas brief dan spek jadi satu PDF serah terima.',
  tool_merge_pdf_usecases_title: 'Cocok untuk',
  tool_merge_pdf_warn_large: 'Ada file lebih dari ~25 MB — penggabungan bisa lambat atau gagal di sebagian browser.',
  tool_merge_pdf_warn_pdflib: 'Gagal memuat pustaka PDF. Periksa jaringan dan coba lagi.',
};
export default id;
