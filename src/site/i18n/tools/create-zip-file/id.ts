/**
 * i18n tool shard (create-zip-file / id).
 * H1 lokal: Buat file zip.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_create_zip_file_article:
		'Pilih beberapa file di tab ini, kemas menjadi ZIP, lalu unduh. File tetap di perangkat Anda dan tidak diunggah ke server. Gzip adalah mode sekunder untuk satu file.',
	tool_create_zip_file_choose_files: 'Pilih file',
	tool_create_zip_file_clear: 'Hapus',
	tool_create_zip_file_desc:
		'Buat zip di peramban dari beberapa file atau folder berpath, lalu unduh — tidak diunggah ke server.',
	tool_create_zip_file_description:
		'Buat file zip: pilih file (nama folder dipertahankan jika peramban memberi path relatif), biarkan ZIP, lalu unduh. File tetap di perangkat Anda dan tidak diunggah ke server. Contoh memasukkan notes.txt, photo.png, dan docs/readme.md ke sample.zip. Gzip mode sekunder satu file. Zip berpassword hanya batas FAQ, bukan janji layar pertama.',
	tool_create_zip_file_download: 'Unduh ZIP',
	tool_create_zip_file_drop_hint: 'Jatuhkan file di sini. Folder yang dijatuhkan menyimpan path relatif jika peramban menyediakannya.',
	tool_create_zip_file_empty: 'Pilih setidaknya satu file dulu.',
	tool_create_zip_file_err_fflate: 'Mesin ZIP gagal dimuat. Periksa jaringan lalu coba lagi.',
	tool_create_zip_file_err_gzip_many: 'Gzip hanya untuk satu file. Ganti ke ZIP untuk beberapa file, atau sisakan satu.',
	tool_create_zip_file_err_too_large: 'Kumpulan ini terlalu besar untuk dikemas aman di peramban. Kurangi file lalu coba lagi.',
	tool_create_zip_file_example:
		'Muat contoh menaruh notes.txt, photo.png kecil, dan docs/readme.md, lalu membuat sample.zip. Unduh ZIP siap di layar pertama.',
	tool_create_zip_file_example_title: 'Contoh',
	tool_create_zip_file_faq_a1:
		'Tidak. Byte dibaca di tab ini. Skrip mesin ZIP mungkin dari situs ini, tetapi file Anda tidak diunggah ke server kami.',
	tool_create_zip_file_faq_a2:
		'Jika peramban memberi webkitRelativePath (folder dijatuhkan atau pemilih direktori), path itu menjadi entri ZIP setelah ../ dibuang. Itulah tugas zip folder di halaman ini.',
	tool_create_zip_file_faq_a3:
		'Halaman ini tidak membuat atau membobol ZIP AES di layar pertama. Zip berpassword hanya batas FAQ.',
	tool_create_zip_file_faq_a4:
		'Pakai Gzip hanya untuk satu file jika Anda butuh .gz. Beberapa file masuk ZIP. Gzip bukan kompresor PDF.',
	tool_create_zip_file_faq_a5:
		'Kumpulan sangat besar bisa kehabisan memori tab. Halaman memperingatkan lalu berhenti. Untuk mengekstrak, pakai halaman Unzip terkait.',
	tool_create_zip_file_faq_q1: 'Apakah file saya diunggah?',
	tool_create_zip_file_faq_q2: 'Bisakah saya zip folder?',
	tool_create_zip_file_faq_q3: 'Apakah ini membuat zip berpassword?',
	tool_create_zip_file_faq_q4: 'Kapan memakai Gzip, bukan ZIP?',
	tool_create_zip_file_faq_q5: 'Bagaimana file raksasa, dan di mana mengekstrak?',
	tool_create_zip_file_file_count_label: 'File',
	tool_create_zip_file_how_body:
		'Pilih yang ingin dikirim sebagai satu arsip, simpan nama folder jika peramban memberi path, lalu unduh ZIP. Gzip jalur lain untuk satu file.',
	tool_create_zip_file_how_item_1: 'Pilih file yang ingin dikirim sebagai satu zip — itu tugasnya, bukan pengekstrak kedua.',
	tool_create_zip_file_how_item_2: 'Jatuhkan folder jika peramban menyimpan path relatif; segmen ../ dibuang sebelum dikemas.',
	tool_create_zip_file_how_item_3: 'Biarkan ZIP (bawaan) lalu unduh. Contoh sudah mengemas tiga file saat halaman dibuka.',
	tool_create_zip_file_how_item_4: 'Pindah ke Gzip hanya jika satu file dan Anda ingin .gz. Beberapa file tetap ZIP.',
	tool_create_zip_file_how_title: 'Cara kerja',
	tool_create_zip_file_level_label: 'Tingkat kompresi',
	tool_create_zip_file_load_sample: 'Muat contoh',
	tool_create_zip_file_mode_gzip: 'Gzip (satu file)',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: 'Ukuran setelah dikemas',
	tool_create_zip_file_rules_body:
		'Mengemas di peramban butuh pembersihan path, pemisahan ZIP vs Gzip, batas ukuran, dan batas password yang jelas.',
	tool_create_zip_file_rules_item_1:
		'ZIP memakai DEFLATE lewat zipSync fflate. Level 0–9 opsional; contoh memakai level ringan agar layar pertama cepat.',
	tool_create_zip_file_rules_item_2:
		'Nama entri dari nama file atau webkitRelativePath. Garis miring depan dan ../ dibuang.',
	tool_create_zip_file_rules_item_3:
		'Mode Gzip memanggil gzipSync pada tepat satu file. Lebih dari satu harus ZIP.',
	tool_create_zip_file_rules_item_4:
		'ZIP berpassword bukan keluaran layar pertama. Halaman ini tidak memulihkan atau membobol arsip terenkripsi.',
	tool_create_zip_file_rules_title: 'Aturan yang perlu diharapkan',
	tool_create_zip_file_status_done: 'Arsip siap — unduh atau ganti file.',
	tool_create_zip_file_status_packing: 'Mengemas…',
	tool_create_zip_file_title: 'Buat file zip',
	tool_create_zip_file_usecase_1:
		'Email: gabungkan beberapa lampiran jadi satu zip sebelum kirim, tanpa mengunggah ke situs pengemasan.',
	tool_create_zip_file_usecase_2:
		'Tugas: zip folder catatan dan tangkapan layar ketika diminta satu arsip.',
	tool_create_zip_file_usecase_3:
		'Paket sumber kecil: readme plus beberapa file, lalu cek zip di Hash File terkait.',
	tool_create_zip_file_usecases_title: 'Cocok untuk',
};

export default id;
