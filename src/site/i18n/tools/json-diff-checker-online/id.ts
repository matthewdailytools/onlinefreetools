/**
 * i18n（json-diff-checker-online / id）。
 * H1: Pemeriksa diff JSON online.
 * Urutan kunci diabaikan secara default; bukan YAML/XML.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'Tempel dua nilai JSON dan daftar tambah, hapus, serta perubahan per jalur. Urutan kunci diabaikan secara default. Tempelan tetap di perangkat dan tidak diunggah. YAML dan XML tidak diurai di sini.',
	tool_json_diff_checker_online_array_as_set: 'Perlakukan array sebagai himpunan (urutan diabaikan)',
	tool_json_diff_checker_online_clear: 'Hapus',
	tool_json_diff_checker_online_compare: 'Bandingkan',
	tool_json_diff_checker_online_desc:
		'Pemeriksa diff JSON online: bandingkan dua JSON per jalur, abaikan urutan kunci secara default — tempelan tetap di perangkat.',
	tool_json_diff_checker_online_description:
		'Pemeriksa diff JSON online di peramban. Proses: tempel dua JSON, uraikan, abaikan urutan kunci objek (nyala secara default), lalu daftar tambah, hapus, dan perubahan per jalur. Tempelan tetap di perangkat dan tidak diunggah ke server. Contoh: {"b":1,"a":2} vs {"a":2,"b":1} cocok; mengubah price melaporkan /price. Bukan pemeriksa YAML atau XML.',
	tool_json_diff_checker_online_empty: 'Tempel JSON di kedua sisi, atau muat contoh.',
	tool_json_diff_checker_online_err_bad_a: 'Sisi kiri bukan JSON yang valid.',
	tool_json_diff_checker_online_err_bad_b: 'Sisi kanan bukan JSON yang valid.',
	tool_json_diff_checker_online_example:
		'Contoh kiri menulis sku lalu price; kanan menaruh price di depan dan mengubah 9.5 menjadi 10. Dengan abaikan urutan kunci, hanya /price yang dilaporkan. Tampilan pertama sudah menunjukkan jalur itu.',
	tool_json_diff_checker_online_example_title: 'Contoh',
	tool_json_diff_checker_online_faq_a1:
		'Tidak. Teks diurai di tab ini dengan JSON.parse. Tidak ada yang diunggah ke server kami.',
	tool_json_diff_checker_online_faq_a2:
		'Secara default, {"a":1,"b":2} dan {"b":2,"a":1} dianggap objek yang sama. Matikan “Abaikan urutan kunci” jika urutan tulisan penting.',
	tool_json_diff_checker_online_faq_a3:
		'Array adalah daftar menurut indeks. [1,2] vs [2,1] adalah perubahan. Nyalakan “Perlakukan array sebagai himpunan” hanya jika urutan tidak boleh dihitung.',
	tool_json_diff_checker_online_faq_a4:
		'Orang juga mencari json diff checker tanpa “online”. Pekerjaan yang sama. YAML atau XML butuh halaman lain (konversi YAML dulu jika perlu).',
	tool_json_diff_checker_online_faq_q1: 'Apakah JSON saya diunggah?',
	tool_json_diff_checker_online_faq_q2: 'Apakah urutan kunci dihitung sebagai perbedaan?',
	tool_json_diff_checker_online_faq_q3: 'Bagaimana array dibandingkan?',
	tool_json_diff_checker_online_faq_q4: 'Apakah ini sama dengan JSON Diff Checker, atau diff YAML/XML?',
	tool_json_diff_checker_online_how_body:
		'Tempel dua JSON dan baca perubahan per jalur. Urutan kunci diabaikan kecuali Anda mematikannya.',
	tool_json_diff_checker_online_how_item_1: 'Tempel JSON asli di kiri.',
	tool_json_diff_checker_online_how_item_2: 'Tempel JSON revisi di kanan.',
	tool_json_diff_checker_online_how_item_3: 'Biarkan Abaikan urutan kunci menyala, kecuali urutan tulisan diperlukan.',
	tool_json_diff_checker_online_how_item_4: 'Bandingkan mendaftar jalur; Muat contoh sudah jalan saat pertama dibuka.',
	tool_json_diff_checker_online_how_title: 'Cara pakai',
	tool_json_diff_checker_online_ignore_keys: 'Abaikan urutan kunci objek',
	tool_json_diff_checker_online_label_a: 'JSON asli',
	tool_json_diff_checker_online_label_b: 'JSON revisi',
	tool_json_diff_checker_online_load_sample: 'Muat contoh',
	tool_json_diff_checker_online_no_diff: 'Tidak ada perbedaan semantik pada opsi saat ini.',
	tool_json_diff_checker_online_op_added: 'ditambah',
	tool_json_diff_checker_online_op_changed: 'diubah',
	tool_json_diff_checker_online_op_removed: 'dihapus',
	tool_json_diff_checker_online_result_label: 'Perbedaan jalur',
	tool_json_diff_checker_online_rules_body:
		'Setelah JSON.parse, kunci objek bisa diurutkan agar urutan tulisan tidak membuat beda palsu.',
	tool_json_diff_checker_online_rules_item_1:
		'JSON tidak valid dilaporkan per sisi. Kunci ganda mengikuti JSON.parse (yang terakhir menang di mesin yang mengizinkan).',
	tool_json_diff_checker_online_rules_item_2:
		'Abaikan urutan kunci (nyala secara default) mengurutkan kunci objek sebelum menelusuri jalur.',
	tool_json_diff_checker_online_rules_item_3:
		'Array adalah daftar indeks, kecuali Anda menganggapnya himpunan (lalu elemen diurutkan lewat JSON stringify).',
	tool_json_diff_checker_online_rules_item_4:
		'YAML dan XML tidak diurai. Konversi YAML dulu di halaman YAML ↔ JSON terkait jika perlu.',
	tool_json_diff_checker_online_rules_title: 'Aturan yang perlu diketahui',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '{added} ditambah, {removed} dihapus, {changed} diubah',
	tool_json_diff_checker_online_title: 'Pemeriksa diff JSON online',
	tool_json_diff_checker_online_usecase_1:
		'Contoh API: dua tubuh respons yang pretty-print mengacak urutan kunci.',
	tool_json_diff_checker_online_usecase_2: 'Cuplikan config: jalur mana yang benar-benar berubah antar-deploy.',
	tool_json_diff_checker_online_usecase_3: 'JSON model: bandingkan keluaran terstruktur sebelum dikirim ke hilir.',
	tool_json_diff_checker_online_usecases_title: 'Cocok untuk',
};

export default id;
