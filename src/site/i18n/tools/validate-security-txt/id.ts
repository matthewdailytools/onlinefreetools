/**
 * i18n tool shard (validate-security-txt / id).
 * Adegan: masukkan domain → ambil security.txt → cek field RFC 9116.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_validate_security_txt_home_title: 'Validasi security.txt',
	tool_validate_security_txt_home_desc:
		'Periksa apakah situs memublikasikan security.txt valid dengan Contact dan Expires.',
	tool_validate_security_txt_desc:
		'Periksa apakah situs memublikasikan security.txt valid dengan Contact dan Expires.',
	tool_validate_security_txt_title: 'Validasi security.txt',
	tool_validate_security_txt_description:
		'Masukkan domain atau URL untuk pemeriksa security.txt: ambil /.well-known/security.txt (cadangan /security.txt), parse Contact dan Expires, tandai field wajib yang hilang. Contoh: google.com.',
	tool_validate_security_txt_url_label: 'Domain atau URL',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ atau example.com',
	tool_validate_security_txt_check: 'Validasi',
	tool_validate_security_txt_sample: 'Contoh',
	tool_validate_security_txt_clear: 'Hapus',
	tool_validate_security_txt_running: 'Mengambil security.txt…',
	tool_validate_security_txt_url_error: 'Masukkan domain atau URL http(s).',
	tool_validate_security_txt_error_prefix: 'Kesalahan: ',
	tool_validate_security_txt_fetch_failed:
		'Tidak dapat mengambil security.txt. Host mungkin offline atau memblokir bot.',
	tool_validate_security_txt_privacy_note:
		'URL dan hostname dikirim ke Worker agar bisa mengambil security.txt. Kami tidak menyimpannya sebagai basis data produk.',
	tool_validate_security_txt_result_found_yes: 'security.txt ditemukan',
	tool_validate_security_txt_result_found_no: 'security.txt tidak ditemukan',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: 'Wajib hilang',
	tool_validate_security_txt_result_missing_none: 'Field wajib ada',
	tool_validate_security_txt_result_expired_yes: 'Expires sudah lewat',
	tool_validate_security_txt_result_expired_no: 'Expires masih valid (atau belum terparse)',
	tool_validate_security_txt_result_file_url: 'URL yang diambil',
	tool_validate_security_txt_result_http_status: 'Status HTTP',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'Pratinjau security.txt',
	tool_validate_security_txt_result_none: '(tidak ada)',
	tool_validate_security_txt_how_title: 'Cara kerja',
	tool_validate_security_txt_how_body:
		'Validator ini menjawab satu hal: apakah situs memublikasikan file discovery dengan Contact yang berguna dan Expires yang masuk akal?',
	tool_validate_security_txt_how_item_1: 'Masukkan domain atau URL HTTPS.',
	tool_validate_security_txt_how_item_2:
		'Klik Validasi; Worker mencoba /.well-known/security.txt lalu /security.txt.',
	tool_validate_security_txt_how_item_3:
		'Tinjau Contact, Expires, Preferred-Languages, Canonical, dan pratinjau.',
	tool_validate_security_txt_how_item_4:
		'Perbaiki field yang ditandai sebelum memublikasikan security.txt Anda.',
	tool_validate_security_txt_formula_title: 'Aturan field RFC 9116',
	tool_validate_security_txt_formula_body:
		'Selaras dengan RFC 9116 dan praktik umum securitytxt.org.',
	tool_validate_security_txt_formula_item_1:
		'Urutan: dulu /.well-known/security.txt, lalu /security.txt.',
	tool_validate_security_txt_formula_item_2:
		'Contact wajib; kami daftar nilainya dan menandai jika hilang.',
	tool_validate_security_txt_formula_item_3:
		'Expires sangat diharapkan; hilang atau tanggal lampau = celah.',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages dan Canonical ditampilkan jika ada; tidak wajib untuk checklist.',
	tool_validate_security_txt_formula_item_5:
		'Hanya ambil dan parse — bukan kotak laporan kerentanan dan bukan pentest.',
	tool_validate_security_txt_example_title: 'Contoh',
	tool_validate_security_txt_example:
		'Input contoh https://www.google.com/. Worker mencoba well-known dan root, lalu menampilkan found, Contact, Expires, missingRequired, expired, dan pratinjau.',
	tool_validate_security_txt_usecases_title: 'Kapan berguna',
	tool_validate_security_txt_usecase_1:
		'Pemeriksa security.txt sebelum rilis: apakah well-known merespons dan ada Contact?',
	tool_validate_security_txt_usecase_2:
		'Setelah mengedit Expires: pastikan tanggal terbaca dan belum kedaluwarsa.',
	tool_validate_security_txt_usecase_3:
		'Sebelum menghubungi vendor: pastikan domain mereka memublikasikan file discovery.',
	tool_validate_security_txt_faq_q1: 'Di mana security.txt harus berada?',
	tool_validate_security_txt_faq_a1:
		'Utamakan /.well-known/security.txt. /security.txt di host yang sama adalah cadangan terdokumentasi.',
	tool_validate_security_txt_faq_q2: 'Field mana yang wajib?',
	tool_validate_security_txt_faq_a2:
		'Minimal Contact. Expires sangat diharapkan dalam praktik RFC 9116; kami menandai celah.',
	tool_validate_security_txt_faq_q3: 'Apakah H1-nya “RFC 9116”?',
	tool_validate_security_txt_faq_a3:
		'Tidak. H1 adalah Validasi security.txt. RFC ada di Aturan dan Referensi.',
	tool_validate_security_txt_faq_q4: 'Apakah laporan kerentanan disimpan?',
	tool_validate_security_txt_faq_a4:
		'Tidak. Kami hanya mengambil dan mem-parse file yang dipublikasikan. Bukan mailbox disclosure.',
	tool_validate_security_txt_faq_q5: 'Apakah URL disimpan?',
	tool_validate_security_txt_faq_a5:
		'URL/host harus sampai ke Worker untuk pengambilan. Kami tidak menyimpan cek sebagai DB produk. Alat edge, bukan “tanpa unggah”.',
	tool_validate_security_txt_references: 'RFC 9116; securitytxt.org.',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default id;
