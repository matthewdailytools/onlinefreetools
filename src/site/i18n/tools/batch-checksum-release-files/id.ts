/**
 * i18n tool shard (batch-checksum-release-files / id).
 * H1 mengikuti pencarian «Checksum file rilis sekaligus».
 */
import type { SiteLangDict } from '../../../types';

/** Bahasa Indonesia: tabel SHA-256 aset rilis dan pencocokan SUMS. */
const id: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'Hash folder aset rilis di tab ini. Anda mendapat tabel, CSV, dan SHA256SUMS — bukan ZIP biner. Tempel daftar resmi untuk menandai cocok atau beda. File tetap di perangkat dan tidak diunggah ke server.',
	tool_batch_checksum_release_files_choose_files: 'Pilih berkas',
	tool_batch_checksum_release_files_clear: 'Hapus',
	tool_batch_checksum_release_files_col_compare: 'Bandingkan',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'Jalur',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'Ukuran',
	tool_batch_checksum_release_files_desc:
		'Checksum file rilis sekaligus: tabel SHA-256, MD5 opsional, tempel SHA256SUMS, ekspor CSV atau SUMS; tetap di perangkat, tidak diunggah ke server.',
	tool_batch_checksum_release_files_description:
		'Checksum file rilis sekaligus: masukkan aset, hash tiap berkas dengan SHA-256 di tab ini, tambah MD5 bila perlu, tempel daftar SHA256SUMS untuk membandingkan, ekspor CSV atau teks SUMS — bukan ZIP biner. Langkah: pilih set, hash semua, tempel daftar jika ada, ekspor. Contoh: dua biner sampel kecil mengisi dua baris SHA-256 dan kolom cocok. File tetap di perangkat dan tidak diunggah ke server.',
	tool_batch_checksum_release_files_drop_hint: 'Jatuhkan berkas rilis (maks. 20). Hash tetap di tab ini. Halaman ini tidak men-ZIP asli.',
	tool_batch_checksum_release_files_empty: 'Tambahkan berkas dulu.',
	tool_batch_checksum_release_files_err_md5: 'Pustaka MD5 tidak dimuat. Coba peramban lebih baru atau matikan MD5.',
	tool_batch_checksum_release_files_err_read: 'Berkas ini tidak bisa dibaca. Dilewati.',
	tool_batch_checksum_release_files_err_too_many: 'Paling banyak 20 berkas. Sisanya tidak ditambahkan.',
	tool_batch_checksum_release_files_example:
		'Muat contoh meng-hash dua biner kecil, mengisi baris SHA-256, menempel satu baris SUMS berkas pertama agar cocok, dan mengaktifkan CSV serta SUMS.',
	tool_batch_checksum_release_files_example_title: 'Contoh',
	tool_batch_checksum_release_files_export_csv: 'Ekspor CSV',
	tool_batch_checksum_release_files_export_sums: 'Ekspor SUMS',
	tool_batch_checksum_release_files_faq_a1:
		'Tidak. Hash terjadi di tab ini. File tetap di perangkat dan tidak diunggah ke server. SHA-256 memakai Web Crypto. MD5 bisa memuat crypto-js dari situs ini; byte Anda tidak meninggalkan tab.',
	tool_batch_checksum_release_files_faq_a2:
		'Tidak. Ekspor adalah tabel CSV dan SHA256SUMS. Mengemas biner adalah Buat ZIP — pekerjaan lain.',
	tool_batch_checksum_release_files_faq_a3:
		'Hash berkas menangani satu berkas atau tempelan. Halaman ini meng-hash set rilis, membandingkan SHA256SUMS yang ditempel, dan mengekspor CSV plus SUMS.',
	tool_batch_checksum_release_files_faq_a4:
		'Nyalakan Juga MD5. SHA-256 selalu jalan. MD5 extra untuk daftar lama; bukan URL kedua.',
	tool_batch_checksum_release_files_faq_a5:
		'Kolom jalur lebih suka webkitRelativePath. Nama ganda di antrean dapat akhiran agar baris SUMS tidak bentrok.',
	tool_batch_checksum_release_files_faq_q1: 'Apakah berkas diunggah ke server?',
	tool_batch_checksum_release_files_faq_q2: 'Apakah ini men-ZIP biner rilis?',
	tool_batch_checksum_release_files_faq_q3: 'Apa bedanya dengan Hash berkas?',
	tool_batch_checksum_release_files_faq_q4: 'Di mana MD5?',
	tool_batch_checksum_release_files_faq_q5: 'Bagaimana jika dua berkas sama nama?',
	tool_batch_checksum_release_files_file_count_tpl: '{n} berkas dalam antrean',
	tool_batch_checksum_release_files_hash_all: 'Hash semua',
	tool_batch_checksum_release_files_how_body:
		'Masukkan aset rilis, hash tiap berkas dengan SHA-256, tempel SHA256SUMS jika ada, lalu ekspor CSV atau SUMS — bukan ZIP berkas.',
	tool_batch_checksum_release_files_how_item_1: 'Pilih biner, penginstal, atau checksum yang akan Anda terbitkan.',
	tool_batch_checksum_release_files_how_item_2: 'Biarkan SHA-256. Nyalakan Juga MD5 hanya jika daftar lama masih memakainya.',
	tool_batch_checksum_release_files_how_item_3: 'Tekan Hash semua. Progres per berkas. Gagal baca melewati baris itu.',
	tool_batch_checksum_release_files_how_item_4: 'Tempel SHA256SUMS resmi untuk menandai cocok, beda, atau hilang.',
	tool_batch_checksum_release_files_how_item_5: 'Ekspor CSV atau SUMS bila paling tidak satu hash berhasil. Satu berkas saja? Gunakan Hash berkas.',
	tool_batch_checksum_release_files_how_title: 'Cara menghitung checksum tumpukan',
	tool_batch_checksum_release_files_md5_label: 'Hitung MD5 juga',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 memakai Web Crypto pada byte yang dibaca irisan 4 MiB lalu digabung. Keluaran tabel, CSV, dan SUMS, bukan ZIP asli.',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 selalu jalan. MD5 opsional dan memuat crypto-js dari situs ini; byte tetap di tab.',
	tool_batch_checksum_release_files_rules_item_2:
		'Baris SUMS mengikuti sha256sum GNU: hex, dua spasi atau spasi-bintang, lalu nama. Nama ekstra di tempelan tampil hilang.',
	tool_batch_checksum_release_files_rules_item_3:
		'Gagal baca melewati baris itu. Nama ganda di antrean mendapat akhiran. Antrean kosong menonaktifkan ekspor.',
	tool_batch_checksum_release_files_rules_item_4:
		'File tetap di perangkat dan tidak diunggah ke server.',
	tool_batch_checksum_release_files_rules_title: 'Yang perlu diharapkan',
	tool_batch_checksum_release_files_sample: 'Muat contoh',
	tool_batch_checksum_release_files_status_done: 'Tumpukan selesai — cek tabel, lalu ekspor CSV atau SUMS.',
	tool_batch_checksum_release_files_status_hashing: 'Meng-hash tiap berkas rilis…',
	tool_batch_checksum_release_files_status_match: 'Cocok',
	tool_batch_checksum_release_files_status_mismatch: 'Tidak cocok',
	tool_batch_checksum_release_files_status_missing: 'Hilang',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'Di-hash',
	tool_batch_checksum_release_files_status_skip: 'Dilewati',
	tool_batch_checksum_release_files_summary_tpl: '{ok} di-hash · {skip} dilewati · {match} cocok · {mismatch} tidak cocok',
	tool_batch_checksum_release_files_sums_label: 'Tempel SHA256SUMS untuk membandingkan',
	tool_batch_checksum_release_files_sums_placeholder: 'hex  nama berkas',
	tool_batch_checksum_release_files_title: 'Checksum file rilis sekaligus',
	tool_batch_checksum_release_files_usecase_1: 'Aset GitHub Release yang butuh SHA256SUMS di samping unduhan.',
	tool_batch_checksum_release_files_usecase_2: 'Membandingkan berkas cermin dengan daftar checksum hulu.',
	tool_batch_checksum_release_files_usecase_3: 'Hash beberapa berkas tanpa mengemas biner ke ZIP.',
	tool_batch_checksum_release_files_usecases_title: 'Cocok untuk ini',
	tool_batch_checksum_release_files_warn_large: 'Ada berkas lebih dari 64 MB — tab ini bisa kehabisan memori di baris itu.',
};

export default id;
