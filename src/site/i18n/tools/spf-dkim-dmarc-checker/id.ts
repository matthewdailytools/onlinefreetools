/**
 * i18n tool shard (spf-dkim-dmarc-checker / id).
 * Pencarian: pemeriksa spf dkim dmarc; cek record dmarc; lookup spf.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'Pemeriksa SPF DKIM DMARC',
	tool_spf_dkim_dmarc_checker_desc:
		'Periksa SPF, DKIM, dan DMARC suatu domain; baca ~all/-all serta kebijakan p= dengan bahasa sederhana.',
	tool_spf_dkim_dmarc_checker_description:
		'Masukkan domain pengirim dan selector DKIM opsional (default google). DoH mencari SPF, _dmarc, dan selector._domainkey, lalu menjelaskan ~all/-all serta p=. Contoh: google.com.',
	tool_spf_dkim_dmarc_checker_domain_label: 'Domain',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'Selector DKIM',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: 'Periksa',
	tool_spf_dkim_dmarc_checker_sample: 'Contoh',
	tool_spf_dkim_dmarc_checker_clear: 'Hapus',
	tool_spf_dkim_dmarc_checker_running: 'Sedang mencari SPF, DKIM, dan DMARC lewat DNS…',
	tool_spf_dkim_dmarc_checker_domain_error: 'Masukkan nama domain yang valid (host saja, atau tempel URL lengkap).',
	tool_spf_dkim_dmarc_checker_error_prefix: 'Kesalahan: ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'Lookup DNS gagal. Resolver mungkin tidak terjangkau, atau nama diblokir.',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'Domain dan selector DKIM dikirim ke Worker untuk DNS-over-HTTPS. Kami tidak menyimpannya sebagai basis data produk.',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'Ditemukan',
	tool_spf_dkim_dmarc_checker_result_found_no: 'Tidak ditemukan',
	tool_spf_dkim_dmarc_checker_result_record: 'Record',
	tool_spf_dkim_dmarc_checker_result_explain: 'Penjelasan',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'kualifier all',
	tool_spf_dkim_dmarc_checker_result_policy: 'Kebijakan DMARC (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'Selector',
	tool_spf_dkim_dmarc_checker_result_pubkey: 'Kunci publik (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'Ada',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'Hilang atau kosong',
	tool_spf_dkim_dmarc_checker_how_title: 'Cara kerja',
	tool_spf_dkim_dmarc_checker_how_body:
		'Pemeriksaan deliverability biasanya membutuhkan SPF, DKIM, dan DMARC sekaligus. Masukkan domain pengirim, ubah selector bila perlu, lalu baca setiap TXT plus ringkasan kebijakan.',
	tool_spf_dkim_dmarc_checker_how_item_1:
		'Masukkan domain pengirim dan selector DKIM opsional (default google).',
	tool_spf_dkim_dmarc_checker_how_item_2:
		'Klik Periksa; Worker menanyakan TXT lewat DoH untuk SPF, _dmarc, dan selector._domainkey.',
	tool_spf_dkim_dmarc_checker_how_item_3:
		'Baca setiap record serta penjelasan ~all/-all dan kebijakan DMARC p=.',
	tool_spf_dkim_dmarc_checker_how_item_4:
		'Perbaiki DNS di penyedia Anda lalu periksa lagi — halaman ini tidak menulis ulang zona.',
	tool_spf_dkim_dmarc_checker_formula_title: 'Apa yang kami cari',
	tool_spf_dkim_dmarc_checker_formula_body:
		'Kueri mengikuti bentuk TXT publik RFC 7208, 6376, dan 7489. Kami merangkum field kebijakan; tidak mengirim email atau memeriksa kotak surat.',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF: TXT di domain dengan v=spf1; kami menampilkan kualifier all di akhir (~all soft fail, -all hard fail).',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC: TXT di _dmarc.domain dengan v=DMARC1; kami sorot p= (none / quarantine / reject) dan pct opsional.',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM: TXT di {selector}._domainkey.domain; kami cek apakah kunci publik p= non-kosong ada.',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'Record yang hilang dilaporkan jujur. Kegagalan DoH muncul sebagai error — bukan tes tanda tangan langsung ESP.',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'Tanpa probe SMTP RCPT dan tanpa edit zona. Pemeriksa «apakah alamat email ada» di luar cakupan.',
	tool_spf_dkim_dmarc_checker_example_title: 'Contoh',
	tool_spf_dkim_dmarc_checker_example:
		'Input contoh google.com dengan selector DKIM google. Worker mencari SPF, _dmarc.google.com, dan google._domainkey.google.com lalu menampilkan ditemukan/record/penjelasan.',
	tool_spf_dkim_dmarc_checker_usecases_title: 'Kapan berguna',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'Sebelum go-live: setelah DNS ESP dipublikasikan, pastikan SPF, DKIM, dan DMARC domain pengirim sudah ada.',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'Cek record DMARC: baca p=none vs quarantine/reject dengan bahasa sederhana, bukan hanya dump TXT.',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'Lookup SPF saat email masuk spam: lihat ~all atau -all, lalu selaraskan selector DKIM dengan ESP.',
	tool_spf_dkim_dmarc_checker_faq_q1: 'Mengapa tiga record dalam satu halaman?',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'Penyedia inbox biasanya menilai ketiganya. Checker DMARC saja bisa melewatkan SPF rusak atau selector DKIM yang salah.',
	tool_spf_dkim_dmarc_checker_faq_q2: 'Apa selector DKIM default-nya?',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google — umum untuk Google Workspace. Ubah jika ESP memublikasikan selector lain (misalnya s1 atau k1).',
	tool_spf_dkim_dmarc_checker_faq_q3: 'Apakah ini validator alamat email?',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'Tidak. Hanya autentikasi DNS domain (lookup SPF, kunci DKIM, kebijakan DMARC). Keberadaan kotak surat di luar cakupan.',
	tool_spf_dkim_dmarc_checker_faq_q4: 'Hasilnya hanya TXT mentah?',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'Tidak. Ada record plus baris penjelasan untuk mekanisme SPF all dan kebijakan DMARC p=.',
	tool_spf_dkim_dmarc_checker_faq_q5: 'Apakah domain saya disimpan?',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'Domain dan selector harus sampai ke Worker untuk DNS-over-HTTPS. Kami tidak menyimpan pemeriksaan sebagai basis data produk jangka panjang. Ini alat DNS edge, bukan «tanpa unggah».',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF; RFC 6376 DKIM; RFC 7489 DMARC.',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default id;
