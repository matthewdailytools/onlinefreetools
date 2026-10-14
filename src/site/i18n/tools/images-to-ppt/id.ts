/**
 * i18n tool shard (images-to-ppt / id).
 * 多图转 PowerPoint 印尼语：一图一页 PPTX，可选 16:9/4:3、contain/cover、背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 印尼语文案字典。 */
const id: SiteLangDict = {
	tool_images_to_ppt_title: 'Gambar ke PowerPoint — foto menjadi slide PPTX',
	tool_images_to_ppt_desc: 'Ubah foto lokal jadi .pptx dengan satu slide per gambar.',
	tool_images_to_ppt_description:
		'Ubah gambar jadi PowerPoint: beberapa foto di browser menjadi file .pptx — satu slide per gambar, 16:9 atau 4:3, contain atau cover. Langkah: Pilih gambar, Konversi ke PowerPoint, Unduh. Contoh: tiga foto → tiga slide. File tidak pernah keluar dari tab ini.',
	tool_images_to_ppt_choose_files: 'Pilih gambar',
	tool_images_to_ppt_drop_hint: 'Atau jatuhkan beberapa file JPEG, PNG, WebP, atau GIF di sini. Pemrosesan tetap di tab ini.',
	tool_images_to_ppt_convert: 'Konversi ke PowerPoint',
	tool_images_to_ppt_download: 'Unduh',
	tool_images_to_ppt_sample: 'Muat contoh',
	tool_images_to_ppt_clear: 'Hapus',
	tool_images_to_ppt_advanced: 'Pengaturan lanjutan (opsional)',
	tool_images_to_ppt_layout_label: 'Ukuran slide',
	tool_images_to_ppt_layout_16x9: 'Layar lebar 16:9',
	tool_images_to_ppt_layout_4x3: 'Standar 4:3',
	tool_images_to_ppt_layout_hint: 'Sebagian besar proyektor modern memakai 16:9. Pilih 4:3 untuk deck kelas yang lebih lama.',
	tool_images_to_ppt_fit_label: 'Cara gambar mengisi slide',
	tool_images_to_ppt_fit_contain: 'Muat seluruh gambar (letterbox)',
	tool_images_to_ppt_fit_cover: 'Isi slide (tepi bisa terpotong)',
	tool_images_to_ppt_fit_hint: 'Contain menjaga setiap piksel terlihat. Cover mengisi slide dan bisa memotong foto tinggi atau lebar.',
	tool_images_to_ppt_bg_label: 'Latar slide',
	tool_images_to_ppt_bg_hint: 'Muncul di pita letterbox saat Fit disetel ke contain. Default putih.',
	tool_images_to_ppt_progress: 'Menyusun PowerPoint…',
	tool_images_to_ppt_step_encode: 'Encode gambar',
	tool_images_to_ppt_step_build: 'Bangun slide',
	tool_images_to_ppt_step_pack: 'Kemas PPTX',
	tool_images_to_ppt_encode_step: 'Mengodekan gambar {i} dari {n}…',
	tool_images_to_ppt_build_step: 'Menambahkan slide ke deck…',
	tool_images_to_ppt_pack_step: 'Mengemas file .pptx…',
	tool_images_to_ppt_elapsed: 'Berlalu {s} dtk',
	tool_images_to_ppt_move_up: 'Naik',
	tool_images_to_ppt_move_down: 'Turun',
	tool_images_to_ppt_remove: 'Buang',
	tool_images_to_ppt_empty: 'Tambahkan setidaknya satu gambar dulu.',
	tool_images_to_ppt_err_decode: 'Tidak bisa mendekode gambar. Coba JPEG, PNG, atau WebP.',
	tool_images_to_ppt_err_convert: 'Tidak bisa membangun file PowerPoint. Coba lebih sedikit atau gambar lebih kecil.',
	tool_images_to_ppt_err_lib: 'Pustaka PPTX gagal dimuat. Muat ulang halaman dan coba lagi.',
	tool_images_to_ppt_warn_large: 'File besar (>25 MB) — konversi bisa lambat.',
	tool_images_to_ppt_warn_edge: 'Satu tepi melebihi ~8192 px — beberapa browser bisa gagal.',
	tool_images_to_ppt_warn_animation: 'GIF beranimasi: hanya frame pertama yang dipakai di slide.',
	tool_images_to_ppt_status_converting: 'Mengonversi ke PowerPoint…',
	tool_images_to_ppt_status_done: 'Selesai — klik Unduh untuk menyimpan .pptx.',
	tool_images_to_ppt_stats_tpl: '{n} slide → PPTX siap ({bytes})',
	tool_images_to_ppt_how_title: 'Cara mengubah gambar jadi PowerPoint',
	tool_images_to_ppt_how_body:
		'Setiap file di daftar menjadi satu slide. Susun ulang dengan panah, lalu konversi. Pengaturan opsional mengubah ukuran slide, cara foto mengisi slide, dan warna letterbox.',
	tool_images_to_ppt_how_item_1: 'Pilih gambar atau jatuhkan file JPEG, PNG, WebP, atau GIF ke zona drop.',
	tool_images_to_ppt_how_item_2: 'Susun ulang dengan Naik / Turun jika urutan slide salah. Buang yang tidak perlu.',
	tool_images_to_ppt_how_item_3: 'Opsional buka Pengaturan lanjutan untuk memilih 16:9 atau 4:3, contain atau cover, dan warna latar.',
	tool_images_to_ppt_how_item_4: 'Klik Konversi ke PowerPoint, tunggu bilah progres, lalu klik Unduh.',
	tool_images_to_ppt_why_choose_title: 'Mengapa memilih alat Gambar ke PowerPoint kami',
	tool_images_to_ppt_why_choose_item_1: 'Satu slide per foto, sesuai urutan Anda — tanpa unggah ke cloud dan tanpa akun.',
	tool_images_to_ppt_why_choose_item_2: 'Layar lebar 16:9 atau klasik 4:3, agar deck cocok dengan proyektor ruangan.',
	tool_images_to_ppt_why_choose_item_3: 'Contain menjaga foto utuh; cover mengisi slide bila Anda ingin tampilan full-bleed.',
	tool_images_to_ppt_why_choose_item_4: 'Peringatan lembut untuk file raksasa, tepi piksel besar, dan GIF beranimasi (hanya frame pertama).',
	tool_images_to_ppt_why_choose_item_5: 'HUD progres terlihat saat setiap gambar di-encode dan dikemas ke .pptx.',
	tool_images_to_ppt_rules_title: 'Aturan',
	tool_images_to_ppt_rules_body: 'Deck dibangun dengan PptxGenJS sepenuhnya di tab browser ini.',
	tool_images_to_ppt_rules_item_1: 'Tata letak default layar lebar 16:9; ganti ke 4:3 di Pengaturan lanjutan bila perlu.',
	tool_images_to_ppt_rules_item_2: 'Urutan slide mengikuti daftar. Gunakan Naik / Turun sebelum mengonversi.',
	tool_images_to_ppt_rules_item_3: 'Contain memberi letterbox dengan warna latar; cover memotong agar mengisi kotak konten.',
	tool_images_to_ppt_rules_item_4: 'GIF beranimasi hanya menyumbang frame pertama. Judul dan transisi tidak ditambahkan — edit di PowerPoint setelah unduh.',
	tool_images_to_ppt_rules_item_5: 'Memuat pustaka PPTX dari situs ini tidak mengunggah foto Anda ke server kami.',
	tool_images_to_ppt_example_title: 'Contoh',
	tool_images_to_ppt_example:
		'Muat contoh membuat tiga slide blok warna (sample-a, sample-b, sample-c) pada 16:9 dengan fit contain. Konversi ke PowerPoint selesai di browser; Unduh menyimpan images.pptx. Ganti ke 4:3 atau cover lalu konversi lagi untuk membandingkan potongan.',
	tool_images_to_ppt_usecases_title: 'Kapan dipakai',
	tool_images_to_ppt_usecase_1: 'Mengubah set foto ponsel jadi deck presentasi cepat tanpa membuka PowerPoint desktop dulu.',
	tool_images_to_ppt_usecase_2: 'Walkthrough produk di mana setiap tangkapan layar butuh slide sendiri full-bleed atau letterbox.',
	tool_images_to_ppt_usecase_3: 'Foto kelas atau lapangan yang harus cocok dengan proyektor 4:3 yang masih dipakai.',
	tool_images_to_ppt_usecase_4: 'Membangun draf deck dari gambar sebelum menambah judul, catatan, dan animasi di PowerPoint atau LibreOffice Impress.',
	tool_images_to_ppt_faq_q1: 'Apakah foto saya diunggah?',
	tool_images_to_ppt_faq_a1:
		'Tidak. Dekode, tata letak slide, dan pengemasan PPTX berjalan di tab browser Anda. Satu-satunya permintaan jaringan adalah memuat skrip PptxGenJS dari folder vendor situs ini.',
	tool_images_to_ppt_faq_q2: 'Apakah saya perlu Microsoft PowerPoint terpasang?',
	tool_images_to_ppt_faq_a2:
		'Tidak. Aplikasi apa pun yang membuka .pptx cukup — PowerPoint, Google Slides (File → Impor), LibreOffice Impress, Keynote, dan lainnya.',
	tool_images_to_ppt_faq_q3: 'Bisakah saya menambah judul atau animasi di sini?',
	tool_images_to_ppt_faq_a3:
		'Tidak di halaman ini. Ekspor slide foto dulu, lalu buka file di PowerPoint (atau Impress) untuk menambah teks, transisi, dan catatan pembicara.',
	tool_images_to_ppt_faq_q4: 'Gambar ke PowerPoint vs gambar ke PDF?',
	tool_images_to_ppt_faq_a4:
		'PPTX tetap bisa diedit sebagai slide. PDF tetap untuk handout dan cetak. Pakai alat Gambar ke PDF bila Anda butuh dokumen, bukan deck.',
	tool_images_to_ppt_faq_q5: 'Contain atau cover — mana yang dipilih?',
	tool_images_to_ppt_faq_a5:
		'Contain (default) menampilkan seluruh foto dengan pita letterbox warna latar. Cover mengisi slide dan bisa memotong tepi — berguna untuk foto produk full-bleed.',
	tool_images_to_ppt_faq_q6: 'Apa yang terjadi pada GIF beranimasi?',
	tool_images_to_ppt_faq_a6:
		'Hanya frame pertama yang ditempatkan di slide. PowerPoint tidak memutar GIF multi-frame sebagai animasi dari ekspor ini.',
	tool_images_to_ppt_faq_q7: 'Mengapa konversi lambat atau gagal?',
	tool_images_to_ppt_faq_a7:
		'File sangat besar (>25 MB) atau tepi di atas ~8192 px bisa membebani browser. Ubah ukuran atau kompres gambar, lalu konversi lagi dengan lebih sedikit file bila perlu.',
	tool_images_to_ppt_article: 'Ubah gambar menjadi deck PowerPoint PPTX di browser',
	tool_images_to_ppt_references: 'Referensi PptxGenJS dan MDN Blob untuk jalur ekspor sisi klien.',
	tool_images_to_ppt_ref_a_label: 'PptxGenJS — pustaka PowerPoint JavaScript',
	tool_images_to_ppt_ref_b_label: 'MDN — Blob',
};

export default id;
