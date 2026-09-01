/**
 * i18n（compare-two-word-documents-for-differences / id）。
 * H1: Bandingkan dua dokumen Word untuk melihat perbedaan.
 * Bukan Tinjau → Bandingkan milik Microsoft.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'Pilih dua .docx dan bandingkan bunyi teks yang terlihat. Gaya, header, dan panel Tinjau Word tidak ditiru. Berkas tetap di perangkat dan tidak diunggah ke server.',
	tool_compare_two_word_documents_for_differences_clear: 'Hapus',
	tool_compare_two_word_documents_for_differences_compare: 'Bandingkan',
	tool_compare_two_word_documents_for_differences_desc:
		'Bandingkan dua dokumen Word untuk melihat perbedaan: tarik teks terlihat dari dua .docx di peramban, tanpa unggah ke server.',
	tool_compare_two_word_documents_for_differences_description:
		'Bandingkan dua dokumen Word untuk melihat perbedaan di peramban. Proses: pilih dua .docx, tarik teks paragraf yang terlihat, lalu tandai penambahan dan penghapusan. Berkas tetap di perangkat dan tidak diunggah ke server. Contoh: dua memo pendek yang beda satu kalimat. Ini bukan Tinjau → Bandingkan Microsoft; header dan gaya dibuang. PDF di luar cakupan.',
	tool_compare_two_word_documents_for_differences_empty: 'Pilih dulu dua berkas Word, atau muat contoh.',
	tool_compare_two_word_documents_for_differences_err_extract:
		'Teks tidak bisa dibaca. Mungkin rusak, terenkripsi, atau bukan .docx.',
	tool_compare_two_word_documents_for_differences_err_no_text: 'Tidak ada teks yang bisa ditarik dari kedua berkas (kosong atau hanya gambar).',
	tool_compare_two_word_documents_for_differences_err_not_docx: 'Gunakan .docx (Office Open XML). .doc lama tidak didukung di sini.',
	tool_compare_two_word_documents_for_differences_example:
		'Muat contoh membuat dua .docx kecil. Memo kedua mengubah “meet at noon” menjadi “meet at 3pm”. Tampilan pertama sudah menunjukkan beda bunyi itu.',
	tool_compare_two_word_documents_for_differences_example_title: 'Contoh',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'Tidak. Berkas dibaca di tab ini. mammoth dan jsdiff bisa datang sebagai pustaka dari CDN; dokumen Anda tidak diunggah ke server kami.',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'Tidak. Word bisa membandingkan format dan revisi terlacak. Halaman ini hanya menarik teks terlihat lalu mem-diff bunyinya. Header, footer, dan gaya dibuang.',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'Jika ekstraksi gagal, biasanya berkas berpassword, rusak, atau bukan OOXML. Halaman hanya gambar menghasilkan teks kosong.',
	tool_compare_two_word_documents_for_differences_faq_a4:
		'Orang juga mencari bandingkan Word online. Pekerjaan yang sama jika maksudnya dua .docx. Pencarian “bandingkan dua dokumen” yang berarti PDF bukan halaman ini.',
	tool_compare_two_word_documents_for_differences_faq_q1: 'Apakah berkas Word saya diunggah?',
	tool_compare_two_word_documents_for_differences_faq_q2: 'Apakah ini sama dengan Tinjau → Bandingkan di Word?',
	tool_compare_two_word_documents_for_differences_faq_q3: 'Mengapa ekstraksi gagal atau header hilang?',
	tool_compare_two_word_documents_for_differences_faq_q4: 'Bisakah membandingkan PDF atau sembarang dua dokumen?',
	tool_compare_two_word_documents_for_differences_how_body:
		'Pilih dua Word dan baca beda bunyi. Halaman ini tidak membuka panel Tinjau.',
	tool_compare_two_word_documents_for_differences_how_item_1: 'Pilih .docx pertama (asli).',
	tool_compare_two_word_documents_for_differences_how_item_2: 'Pilih .docx kedua (revisi).',
	tool_compare_two_word_documents_for_differences_how_item_3:
		'Bandingkan menarik teks terlihat sendiri; Muat contoh sudah jalan saat pertama dibuka.',
	tool_compare_two_word_documents_for_differences_how_item_4: 'Baca hijau (ditambah) dan merah (dihapus).',
	tool_compare_two_word_documents_for_differences_how_title: 'Cara pakai',
	tool_compare_two_word_documents_for_differences_label_a: 'Dokumen Word pertama',
	tool_compare_two_word_documents_for_differences_label_b: 'Dokumen Word kedua',
	tool_compare_two_word_documents_for_differences_legend: 'Hijau = ditambah · Merah = dihapus',
	tool_compare_two_word_documents_for_differences_load_sample: 'Muat contoh',
	tool_compare_two_word_documents_for_differences_need_lib: 'Pustaka gagal dimuat. Periksa jaringan lalu muat ulang.',
	tool_compare_two_word_documents_for_differences_no_diff: 'Tidak ada beda bunyi pada teks yang ditarik.',
	tool_compare_two_word_documents_for_differences_result_label: 'Perbedaan bunyi teks',
	tool_compare_two_word_documents_for_differences_rules_body:
		'Perbandingan adalah diff teks setelah ekstraksi. Format bukan jejak revisi.',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'mammoth membaca paragraf terlihat dari OOXML. Teks itu lalu di-diff baris dengan jsdiff.',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'Header, footer, komentar, dan hampir semua gaya dibuang. Dua berkas yang hanya diubah tampilannya bisa terlihat sama.',
	tool_compare_two_word_documents_for_differences_rules_item_3: '.docx terenkripsi atau rusak gagal. .doc lama tidak diurai.',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'Ini bukan “Bandingkan Dokumen” Microsoft. Untuk format terlacak, pakai Word sendiri.',
	tool_compare_two_word_documents_for_differences_rules_title: 'Aturan yang perlu diketahui',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '{added} ditambah, {removed} dihapus',
	tool_compare_two_word_documents_for_differences_title: 'Bandingkan dua dokumen Word untuk melihat perbedaan',
	tool_compare_two_word_documents_for_differences_usecase_1:
		'Draf kontrak: lihat kalimat mana yang berubah antara dua ekspor .docx.',
	tool_compare_two_word_documents_for_differences_usecase_2: 'Notulen: bandingkan berkas rapat minggu lalu dengan minggu ini.',
	tool_compare_two_word_documents_for_differences_usecase_3: 'Tugas: dua kiriman Word ketika yang penting bunyi teks, bukan tata letak.',
	tool_compare_two_word_documents_for_differences_usecases_title: 'Cocok untuk',
};

export default id;
