/**
 * i18n tool shard (meta-serp-preview / id).
 * Indonesian locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_serp_home_title: 'Pratinjau hasil Google',
	tool_serp_home_desc: 'Judul yang terpotong membuat Anda kehilangan klik di pencarian—cek potongannya sebelum publikasi.',
	tool_serp_title: 'Pratinjau hasil Google — cek potongan judul dan deskripsi',
	tool_serp_description:
		'Judul terpotong membuang klik Google. Tempel judul dan deskripsi untuk pratinjau potongan desktop dan seluler. Hanya browser. Contoh: EN vs CJK.',
	tool_serp_preview: 'Pratinjau',
	tool_serp_sample: 'Contoh',
	tool_serp_clear: 'Bersihkan',
	tool_serp_copy: 'Salin',
	tool_serp_copied: 'Tersalin',
	tool_serp_title_label: 'Judul',
	tool_serp_title_ph: 'Judul halaman yang tampil di hasil pencarian',
	tool_serp_desc_label: 'Meta description',
	tool_serp_desc_ph: 'Teks cuplikan di bawah judul hasil',
	tool_serp_url_label: 'URL (opsional)',
	tool_serp_url_ph: 'mis. https://example.com/page',
	tool_serp_compare_label: 'Bandingkan dengan judul kedua',
	tool_serp_title_b_label: 'Judul B',
	tool_serp_title_b_ph: 'Tempel judul alternatif untuk dibandingkan',
	tool_serp_desktop: 'Tampilan desktop',
	tool_serp_mobile: 'Tampilan ponsel',
	tool_serp_char_count: '{n} karakter',
	tool_serp_px_width: '~{n}px',
	tool_serp_cut_warning: 'Terpotong — baris melebihi viewport ~{limit}px',
	tool_serp_fit: 'Muai dalam viewport',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: 'Masukkan judul untuk melihat pratinjau.',
	tool_serp_how_title: 'Cara kerja',
	tool_serp_how_body:
		'Ketik atau tempel judul, deskripsi, dan URL opsional. Alat memperkirakan berapa karakter dan piksel perkiraan setiap baris memakai pendekatan metrik font (glif CJK yang lebar dihitung lebih banyak daripada huruf ASCII yang sempit), lalu menggambar cuplikan gaya Google untuk desktop dan ponsel. Baris yang lebih lebar dari viewport perkiraan diberi tanda potong.',
	tool_serp_rules_title: 'Yang ditampilkan pratinjau',
	tool_serp_rules_body:
		'Batas piksel bersifat perkiraan. Google mengukur lebar render, bukan jumlah karakter, jadi bahasa padat dan glif lebar terpotong pada jumlah karakter lebih sedikit.',
	tool_serp_rules_item_1: 'Batas judul desktop diperkirakan ~600px dan ponsel ~460px. Baris yang lebih lebar ditampilkan dengan tanda potong.',
	tool_serp_rules_item_2: 'Deskripsi diperkirakan sekitar dua baris (~600px desktop dan 460px ponsel per baris).',
	tool_serp_rules_item_3: 'Lebar glif diperkirakan: huruf dan angka ASCII sekitar 0.5em, karakter CJK mendekati 1em, dan emoji lebih lebar.',
	tool_serp_rules_item_4: 'Ini perkiraan untuk perencanaan. Google dapat menulis ulang judul atau deskripsi, dan render sebenarnya tergantung font serta viewport pencari.',
	tool_serp_example_title: 'Contoh',
	tool_serp_example:
		'Contoh: judul “Meta SERP Preview — How to Preview Google Title & Description Truncation Online”, deskripsi sekitar dua baris, URL example.com/page → di desktop judul terpotong mendekati karakter ke-57 dengan “…”, dan di ponsel lebih awal; deskripsi tetap dalam dua baris.',
	tool_serp_usecases_title: 'Cocok untuk',
	tool_serp_usecase_1: 'Sebelum publikasi: tempel judul dan deskripsi final untuk melihat apakah kata kunci bertahan dari potongan piksel.',
	tool_serp_usecase_2: 'Bandingkan dua judul kandidat berdampingan dan pilih yang menjaga kata kunci utama tetap terlihat di ponsel.',
	tool_serp_usecase_3: 'Halaman CJK: cek berapa karakter Mandarin yang muat sebelum terpotong, karena glif lebar mencapai batas pada jumlah lebih sedikit.',
	tool_serp_faq_q1: 'Mengapa judul CJK 30 karakter terpotong sebelum judul Inggris 60 karakter?',
	tool_serp_faq_a1: 'Hasil pencarian dipotong berdasarkan lebar piksel render, bukan jumlah karakter. Glif CJK sekitar satu em sedangkan huruf ASCII rata-rata setengah em, jadi karakter lebih sedikit mengisi viewport yang sama.',
	tool_serp_faq_q2: 'Apakah batas pikselnya akurat?',
	tool_serp_faq_a2: 'Tidak. Viewport desktop dan ponsel bervariasi menurut perangkat dan font. Alat ini memakai batas umum ~600px desktop dan ~460px ponsel sebagai perkiraan perencanaan, bukan jaminan bagaimana Google akan merender halaman Anda.',
	tool_serp_faq_q3: 'Adakah alat Google yang bisa menampilkan cuplikan akhirnya?',
	tool_serp_faq_a3: 'Tidak ada. Inspeksi URL melaporkan status perayapan dan pengindeksan beserta tangkapan layar halaman yang dirender, sedangkan Rich Results Test memeriksa kelayakan data terstruktur — keduanya tidak memratinjau cuplikan teks. Google juga menulis ulang tautan judul saat title kurang cocok dengan kueri, jadi satu-satunya pengecekan nyata adalah menelusuri URL yang sudah live.',
	tool_serp_faq_q4: 'Apakah judul saya diunggah ke mana pun?',
	tool_serp_faq_a4: 'Tidak. Semua teks tetap di tab browser Anda dan tidak pernah dikirim ke server. Tutup tabnya dan semuanya hilang.',
	tool_serp_references: 'Google Search Central — Kontrol judul di hasil pencarian; Google Search Central — Kontrol cuplikan.',
	tool_serp_ref_title_label: 'Search Central — Kontrol judul',
	tool_serp_ref_snippet_label: 'Search Central — Kontrol cuplikan',
};

export default id;
