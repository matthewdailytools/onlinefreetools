/**
 * i18n tool shard (image-to-base64 / id).
 * Gambar ↔ Base64 / data URL; tab Encode/Decode; HUD standar emas. Hanya ubah kunci milik alat ini.
 */
import type { SiteLangDict } from '../../../types';

/** Kamus teks bahasa Indonesia (set kunci sama dengan en.ts). */
const id: SiteLangDict = {
	tool_image_to_base64_title: 'Gambar ke Base64 — encode & decode lokal',
	tool_image_to_base64_desc: 'Ubah foto ke Base64/data URL atau kembalikan string Base64 ke gambar, tanpa unggah ke server.',
	tool_image_to_base64_description:
		'Konversi gambar ke Base64 (data URL) atau Base64 ke gambar langsung di browser—file tetap di perangkat, tanpa unggah ke server. Langkahnya: pilih gambar, klik Encode, lalu Salin atau Unduh. Contoh: PNG → data:image/png;base64,… siap dipakai di HTML.',
	tool_image_to_base64_mode_label: 'Mode',
	tool_image_to_base64_tab_encode: 'Encode',
	tool_image_to_base64_tab_decode: 'Decode',
	tool_image_to_base64_choose_file: 'Pilih gambar',
	tool_image_to_base64_drop_hint: 'Atau seret JPEG, PNG, WebP, atau GIF ke sini. Pemrosesan tetap di tab ini.',
	tool_image_to_base64_encode: 'Encode',
	tool_image_to_base64_decode_btn: 'Decode',
	tool_image_to_base64_copy: 'Salin',
	tool_image_to_base64_copy_done: 'Tersalin',
	tool_image_to_base64_download: 'Unduh',
	tool_image_to_base64_sample: 'Muat contoh',
	tool_image_to_base64_clear: 'Hapus',
	tool_image_to_base64_advanced: 'Pengaturan lanjutan (opsional)',
	tool_image_to_base64_strip_prefix: 'Buang prefiks data: (Base64 mentah saja)',
	tool_image_to_base64_strip_hint: 'Mati (bawaan): data:image/…;base64, tetap ada sehingga bisa langsung ditempel ke HTML. Nyala: hanya isi Base64 yang disalin.',
	tool_image_to_base64_decode_mime_label: 'MIME bawaan untuk Base64 mentah',
	tool_image_to_base64_decode_mime_hint: 'Hanya dipakai bila teks yang ditempel tidak punya prefiks data:. Data URL memakai MIME-nya sendiri.',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'Tempel data:image/…;base64,… atau Base64 mentah',
	tool_image_to_base64_output_label: 'Hasil',
	tool_image_to_base64_preview_label: 'Pratinjau',
	tool_image_to_base64_progress: 'Memproses…',
	tool_image_to_base64_step_read: 'Baca file',
	tool_image_to_base64_step_encode: 'Encode',
	tool_image_to_base64_step_ready: 'Siap',
	tool_image_to_base64_read_step: 'Membaca file…',
	tool_image_to_base64_encode_step: 'Menyusun data URL…',
	tool_image_to_base64_ready_step: 'Hasil siap',
	tool_image_to_base64_decode_step_parse: 'Urai',
	tool_image_to_base64_decode_step_blob: 'Susun gambar',
	tool_image_to_base64_decode_step_ready: 'Siap',
	tool_image_to_base64_parse_step: 'Mengurai Base64…',
	tool_image_to_base64_blob_step: 'Menyusun file gambar…',
	tool_image_to_base64_elapsed: 'Berjalan {s} dtk',
	tool_image_to_base64_empty: 'Pilih gambar dulu.',
	tool_image_to_base64_empty_decode: 'Tempel data URL atau string Base64 dulu.',
	tool_image_to_base64_err_decode: 'Gagal decode. Pastikan teksnya data URL gambar atau Base64 yang valid.',
	tool_image_to_base64_err_encode: 'File gagal di-encode. Coba JPEG, PNG, atau WebP.',
	tool_image_to_base64_err_invalid: 'Base64 atau data URL tidak valid.',
	tool_image_to_base64_warn_large: 'Input besar (>25 MB) — bisa lambat dan memakan banyak memori.',
	tool_image_to_base64_status_working: 'Memproses…',
	tool_image_to_base64_status_done: 'Selesai — salin string-nya atau klik Unduh.',
	tool_image_to_base64_status_decoded: 'Selesai — pratinjau sudah tampil; klik Unduh untuk menyimpan gambar.',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} karakter · {bytes}',
	tool_image_to_base64_how_title: 'Cara mengubah gambar ke Base64',
	tool_image_to_base64_how_body:
		'Encode membaca file di browser lalu mengubahnya menjadi data URL. Decode menerima data URL lengkap atau Base64 mentah (MIME-nya diambil dari Pengaturan lanjutan). Tidak ada yang diunggah.',
	tool_image_to_base64_how_item_1: 'Di tab Encode, pilih atau seret gambar, lalu klik Encode.',
	tool_image_to_base64_how_item_2: 'Kalau butuh Base64 mentah, buka Pengaturan lanjutan dan nyalakan Buang prefiks data:.',
	tool_image_to_base64_how_item_3: 'Klik Salin untuk menaruh string di clipboard, atau Unduh untuk menyimpan file gambar aslinya.',
	tool_image_to_base64_how_item_4: 'Untuk arah sebaliknya, pindah ke tab Decode, tempel data URL atau Base64, klik Decode, lalu Unduh gambarnya.',
	tool_image_to_base64_why_choose_title: 'Alasan memakai Gambar ke Base64 di sini',
	tool_image_to_base64_why_choose_item_1: 'Hasilnya langsung terlihat: pratinjau muncul setelah encode maupun decode, bukan cuma deretan karakter.',
	tool_image_to_base64_why_choose_item_2: 'Prefiks data: bisa dibuang saat kolom API hanya menerima Base64 mentah.',
	tool_image_to_base64_why_choose_item_3: 'Gambar ke Base64 dan Base64 ke gambar dalam satu alat, cukup pindah tab.',
	tool_image_to_base64_why_choose_item_4: 'Ada peringatan untuk file sangat besar yang bisa membebani memori browser.',
	tool_image_to_base64_why_choose_item_5: 'Berjalan di tab ini; file tidak diunggah ke server kami.',
	tool_image_to_base64_rules_title: 'Aturan',
	tool_image_to_base64_rules_body: 'Encode memakai FileReader.readAsDataURL; Decode menyusun Blob dari data URL agar bisa diunduh.',
	tool_image_to_base64_rules_item_1: 'Hasil encode bawaan berupa string data:image/…;base64,… lengkap, cocok untuk atribut src pada <img>.',
	tool_image_to_base64_rules_item_2: 'Buang prefiks memotong semua teks sampai koma pertama—berguna untuk API yang hanya mau Base64 mentah.',
	tool_image_to_base64_rules_item_3: 'Base64 mentah tanpa prefiks dibaca dengan MIME bawaan dari Pengaturan lanjutan (awalnya image/png).',
	tool_image_to_base64_rules_item_4: 'Karakter tidak valid atau string yang terpotong memunculkan pesan error; tidak ada yang diunggah.',
	tool_image_to_base64_rules_item_5: 'GIF animasi di-encode sebagai satu file utuh; alat ini tidak mengedit frame.',
	tool_image_to_base64_example_title: 'Contoh',
	tool_image_to_base64_example:
		'Muat contoh membuat PNG 320×200 bertuliskan “Base64”, menjalankan Encode, dan mengisi hasil dengan data:image/png;base64,…. Tempel string itu ke <img src="…"> di HTML. Lalu pindah ke Decode, tempel string yang sama, klik Decode, dan Unduh decoded.png.',
	tool_image_to_base64_usecases_title: 'Kapan dipakai',
	tool_image_to_base64_usecase_1: 'Menyisipkan ikon atau logo kecil langsung di HTML/CSS tanpa request gambar terpisah.',
	tool_image_to_base64_usecase_2: 'Memeriksa email atau file Markdown yang sudah berisi gambar dalam bentuk data URL.',
	tool_image_to_base64_usecase_3: 'Melihat gambar apa yang tersimpan di Base64 dari respons API.',
	tool_image_to_base64_usecase_4: 'Mengisi kolom formulir yang menolak prefiks data: dengan Base64 mentah.',
	tool_image_to_base64_faq_q1: 'Apakah gambar saya diunggah?',
	tool_image_to_base64_faq_a1:
		'Tidak. Pembacaan file dan decode berjalan di tab browser; file tetap di perangkat Anda, tanpa unggah ke server.',
	tool_image_to_base64_faq_q2: 'Apa beda data URL dan Base64 mentah?',
	tool_image_to_base64_faq_a2:
		'Data URL diawali data:image/png;base64, lalu diikuti isinya—siap dipakai di HTML. Base64 mentah hanya isinya saja; nyalakan Buang prefiks data: di Pengaturan lanjutan untuk menyalin bentuk itu.',
	tool_image_to_base64_faq_q3: 'Bagaimana dengan file yang sangat besar?',
	tool_image_to_base64_faq_a3:
		'Bisa, tapi boros memori: Base64 membuat ukuran naik sekitar 33%. Untuk file di atas ~25 MB, kompres atau perkecil dulu.',
	tool_image_to_base64_faq_q4: 'MIME apa yang dipakai saat decode?',
	tool_image_to_base64_faq_a4:
		'Diambil dari data URL bila ada. Untuk Base64 mentah, dipakai nilai MIME bawaan di Pengaturan lanjutan (awalnya image/png).',
	tool_image_to_base64_faq_q5: 'Bagaimana dengan GIF animasi?',
	tool_image_to_base64_faq_a5:
		'Encode menyimpan seluruh file sebagai data URL, jadi animasinya ikut. Alat ini tidak memecah atau mengedit frame.',
	tool_image_to_base64_faq_q6: 'Apa bedanya dengan konverter format gambar?',
	tool_image_to_base64_faq_a6:
		'Di sini hasilnya berupa string teks (atau gambar yang dipulihkan dari string). Kalau hanya perlu mengubah JPEG, PNG, atau WebP tanpa Base64, pakai Konverter Format Gambar.',
	tool_image_to_base64_faq_q7: 'Kenapa tombol Salin nonaktif atau kosong?',
	tool_image_to_base64_faq_a7:
		'Salin butuh hasil Encode. Pilih gambar, klik Encode, lalu Salin. Di tab Decode, simpan gambarnya dengan Unduh.',
	tool_image_to_base64_article:
		'Gambar ke Base64 lewat data URL FileReader; Base64 ke gambar dari data URL atau Base64 mentah dengan MIME bawaan yang bisa diatur.',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — Data URL',
};

export default id;
