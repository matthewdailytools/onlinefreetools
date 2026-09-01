/**
 * i18n tool shard (file-metadata-analyzer / id).
 */
import type { SiteLangDict } from '../../../types';

/** 印尼语文案键表。 */
const id: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: 'Menganalisis…',
	tool_file_metadata_analyzer_article:
		'Seret atau pilih berkas lokal untuk melihat nama, ukuran, MIME, dan waktu ubah. Gambar menampilkan lebar×tinggi; audio/video menampilkan durasi jika bisa didekode. Petunjuk magic-byte. Tanpa unggah ke server; tetap di perangkat.',
	tool_file_metadata_analyzer_choose_file: 'Pilih berkas',
	tool_file_metadata_analyzer_clear: 'Hapus',
	tool_file_metadata_analyzer_decode_fail: 'Bidang media tambahan gagal — info dasar tetap ditampilkan.',
	tool_file_metadata_analyzer_desc:
		'Periksa metadata berkas lokal — ukuran, tipe, dimensi, durasi. Tanpa unggah ke server; di perangkat.',
	tool_file_metadata_analyzer_description:
		'Penganalisis metadata berkas: jatuhkan atau pilih berkas untuk membaca nama, byte, MIME, dan modifikasi. Gambar → dimensi; audio/video → durasi. Magic-byte: PNG, JPEG, GIF, WebP, PDF, ZIP, MP4. Contoh: PNG 16×16 saat buka. EXIF mendalam → alat EXIF terkait. Tanpa unggah ke server.',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} px',
	tool_file_metadata_analyzer_drop_hint: 'Atau jatuhkan berkas di sini. Analisis di tab ini.',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: 'Pilih atau jatuhkan berkas dulu.',
	tool_file_metadata_analyzer_example:
		'Muat contoh membuat PNG 16×16 sample-icon.png di memori. Tabel ~100+ byte, image/png, 16×16 px, petunjuk PNG — tanpa unggah.',
	tool_file_metadata_analyzer_example_title: 'Contoh',
	tool_file_metadata_analyzer_faq_a1: 'Tidak. Berkas dibaca dengan File API di tab ini. Tidak dikirim ke server kami.',
	tool_file_metadata_analyzer_faq_a2:
		'Halaman ini untuk dasar kontainer + dimensi/durasi jika bisa. Alat EXIF untuk baca/hapus tag kamera.',
	tool_file_metadata_analyzer_faq_a3: 'file.type sering kosong. Ukuran dan nama tetap; magic-byte bisa menyarankan tipe.',
	tool_file_metadata_analyzer_faq_a4: 'Beberapa codec gagal. Bidang File API tetap; baris catatan menjelaskan.',
	tool_file_metadata_analyzer_faq_a5: 'Kami baca ~12 byte awal (PNG, JPEG, GIF, WebP, PDF, ZIP, MP4). Petunjuk, bukan database penuh.',
	tool_file_metadata_analyzer_faq_q1: 'Apakah berkas diunggah?',
	tool_file_metadata_analyzer_faq_q2: 'Bedanya dengan alat EXIF?',
	tool_file_metadata_analyzer_faq_q3: 'Kenapa MIME kosong?',
	tool_file_metadata_analyzer_faq_q4: 'Kenapa dimensi/durasi hilang?',
	tool_file_metadata_analyzer_faq_q5: 'Apa petunjuk magic-byte?',
	tool_file_metadata_analyzer_field_decode_note: 'Catatan dekode',
	tool_file_metadata_analyzer_field_dimensions: 'Dimensi',
	tool_file_metadata_analyzer_field_duration: 'Durasi',
	tool_file_metadata_analyzer_field_magic: 'Petunjuk magic-byte',
	tool_file_metadata_analyzer_field_modified: 'Terakhir diubah',
	tool_file_metadata_analyzer_field_name: 'Nama berkas',
	tool_file_metadata_analyzer_field_size: 'Ukuran (byte)',
	tool_file_metadata_analyzer_field_size_human: 'Ukuran (manusia)',
	tool_file_metadata_analyzer_field_type: 'MIME / tipe',
	tool_file_metadata_analyzer_how_body: 'Pilih berkas lokal. Kami tampilkan File lalu perdalam gambar/media jika bisa didekode.',
	tool_file_metadata_analyzer_how_item_1: 'Jatuhkan berkas atau klik Pilih berkas.',
	tool_file_metadata_analyzer_how_item_2: 'Baca nama, byte, ukuran manusia, MIME, modifikasi.',
	tool_file_metadata_analyzer_how_item_3: 'Gambar: lebar×tinggi; audio/video: durasi.',
	tool_file_metadata_analyzer_how_item_4: 'Muat contoh atau Hapus untuk reset.',
	tool_file_metadata_analyzer_how_title: 'Cara kerja',
	tool_file_metadata_analyzer_load_sample: 'Muat contoh',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'Hasil metadata',
	tool_file_metadata_analyzer_rules_body: 'Sumber bidang dan batas analisator ini.',
	tool_file_metadata_analyzer_rules_item_1: 'Nama, ukuran, tipe, lastModified dari objek File.',
	tool_file_metadata_analyzer_rules_item_2: 'Dimensi gambar via createImageBitmap atau Image — tab yang sama.',
	tool_file_metadata_analyzer_rules_item_3: 'Durasi via elemen media; codec langka bisa gagal.',
	tool_file_metadata_analyzer_rules_item_4: 'Magic-byte dangkal — bukan pengganti hash atau EXIF mendalam.',
	tool_file_metadata_analyzer_rules_title: 'Aturan yang diharapkan',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: 'Analisis selesai.',
	tool_file_metadata_analyzer_title: 'penganalisis metadata berkas',
	tool_file_metadata_analyzer_usecase_1: 'Pastikan export 1920×1080 sebelum unggah ke CMS.',
	tool_file_metadata_analyzer_usecase_2: 'Cek durasi memo suara tanpa app desktop.',
	tool_file_metadata_analyzer_usecase_3: 'Bandingkan MIME dengan magic-byte jika ekstensi mencurigakan.',
	tool_file_metadata_analyzer_usecases_title: 'Cocok untuk',
	tool_file_metadata_analyzer_waiting: 'Pilih berkas atau muat contoh.',
};

export default id;
