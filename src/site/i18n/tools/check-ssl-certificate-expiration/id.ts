/**
 * i18n tool shard (check-ssl-certificate-expiration / id).
 * Adegan: hostname → crt.sh CT → kedaluwarsa sertifikat terbaru (bukan handshake langsung).
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'Cek kedaluwarsa sertifikat SSL',
	tool_check_ssl_certificate_expiration_home_desc:
		'Lihat kapan sertifikat CT terbaru untuk hostname kedaluwarsa (crt.sh — bukan handshake langsung).',
	tool_check_ssl_certificate_expiration_desc:
		'Lihat kapan sertifikat CT terbaru untuk hostname kedaluwarsa (crt.sh — bukan handshake langsung).',
	tool_check_ssl_certificate_expiration_title: 'Cek kedaluwarsa sertifikat SSL',
	tool_check_ssl_certificate_expiration_description:
		'Masukkan hostname untuk pemeriksa masa berlaku SSL: query Certificate Transparency via crt.sh, lalu tampilkan notBefore, notAfter, penerbit, dan sisa hari untuk match terbaru. Bukan handshake TLS langsung. Contoh: example.com.',
	tool_check_ssl_certificate_expiration_host_label: 'Hostname',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: 'Periksa',
	tool_check_ssl_certificate_expiration_sample: 'Contoh',
	tool_check_ssl_certificate_expiration_clear: 'Hapus',
	tool_check_ssl_certificate_expiration_running: 'Mengquery Certificate Transparency…',
	tool_check_ssl_certificate_expiration_host_error: 'Masukkan hostname (atau tempel URL https).',
	tool_check_ssl_certificate_expiration_error_prefix: 'Kesalahan: ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'Tidak dapat mengquery crt.sh. Mungkin dibatasi laju atau tidak terjangkau.',
	tool_check_ssl_certificate_expiration_privacy_note:
		'Hostname dikirim ke Worker agar bisa mengquery crt.sh. Kami tidak menyimpannya sebagai basis data produk.',
	tool_check_ssl_certificate_expiration_result_found_yes: 'Sertifikat CT ditemukan',
	tool_check_ssl_certificate_expiration_result_found_no: 'Tidak ada baris CT untuk host ini',
	tool_check_ssl_certificate_expiration_result_host: 'Hostname',
	tool_check_ssl_certificate_expiration_result_cn: 'Common name',
	tool_check_ssl_certificate_expiration_result_issuer: 'Penerbit',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter (kedaluwarsa)',
	tool_check_ssl_certificate_expiration_result_days_left: 'Sisa hari',
	tool_check_ssl_certificate_expiration_result_expired_yes: 'Kedaluwarsa (berdasarkan CT notAfter)',
	tool_check_ssl_certificate_expiration_result_expired_no: 'Belum kedaluwarsa (berdasarkan CT notAfter)',
	tool_check_ssl_certificate_expiration_result_source: 'Sumber',
	tool_check_ssl_certificate_expiration_result_row_count: 'Baris CT dikembalikan',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'Lag log CT — bukan sertifikat peer handshake TLS langsung. Tanggal bisa tertinggal dari penerbitan atau perpanjangan.',
	tool_check_ssl_certificate_expiration_result_none: '(tidak ada)',
	tool_check_ssl_certificate_expiration_how_title: 'Cara kerja',
	tool_check_ssl_certificate_expiration_how_body:
		'Halaman ini menjawab satu pertanyaan: kapan match CT terbaru untuk hostname ini kedaluwarsa? Bukan auditor handshake SSL langsung.',
	tool_check_ssl_certificate_expiration_how_item_1: 'Masukkan hostname (tanpa path).',
	tool_check_ssl_certificate_expiration_how_item_2: 'Klik Periksa; Worker mengquery JSON crt.sh.',
	tool_check_ssl_certificate_expiration_how_item_3: 'Baca notBefore, notAfter, penerbit, dan sisa hari untuk match terbaru.',
	tool_check_ssl_certificate_expiration_how_item_4: 'Anggap tanggal sebagai nilai terbit CT — konfirmasi handshake lokal jika waktu kritis.',
	tool_check_ssl_certificate_expiration_formula_title: 'Aturan query CT (bukan TLS langsung)',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers tidak dapat membaca sertifikat peer dari fetch. Kami memakai data Certificate Transparency publik via crt.sh.',
	tool_check_ssl_certificate_expiration_formula_item_1: 'Query crt.sh dengan hostname dan parse daftar JSON.',
	tool_check_ssl_certificate_expiration_formula_item_2: 'Urutkan notBefore menurun dan ambil baris terbaru.',
	tool_check_ssl_certificate_expiration_formula_item_3: 'Tampilkan notBefore, notAfter, penerbit, daysLeft, dan expired.',
	tool_check_ssl_certificate_expiration_formula_item_4: 'Log CT bisa tertinggal dari penerbitan atau perpanjangan langsung.',
	tool_check_ssl_certificate_expiration_formula_item_5: 'Host privat atau diblokir ditolak. Bukan walker rantai penuh atau alat order CA.',
	tool_check_ssl_certificate_expiration_example_title: 'Contoh',
	tool_check_ssl_certificate_expiration_example:
		'Input contoh example.com. Worker mengquery crt.sh, memilih sertifikat terbaru, dan menampilkan notBefore, notAfter, penerbit, daysLeft, plus peringatan lag CT.',
	tool_check_ssl_certificate_expiration_usecases_title: 'Kapan berguna',
	tool_check_ssl_certificate_expiration_usecase_1: 'Pemeriksa kedaluwarsa SSL sebelum perpanjang: berapa hari tersisa pada leaf CT terbaru.',
	tool_check_ssl_certificate_expiration_usecase_2: 'Setelah cutover CDN: pastikan CT menunjukkan notAfter baru.',
	tool_check_ssl_certificate_expiration_usecase_3: 'Inventaris cepat domain vendor saat hanya butuh tanggal kedaluwarsa.',
	tool_check_ssl_certificate_expiration_faq_q1: 'Apakah ini handshake SSL langsung?',
	tool_check_ssl_certificate_expiration_faq_a1:
		'Tidak. Workers tidak membaca sertifikat peer dari fetch; kami mengquery Certificate Transparency (crt.sh).',
	tool_check_ssl_certificate_expiration_faq_q2: 'Mengapa tanggal bisa tertinggal?',
	tool_check_ssl_certificate_expiration_faq_a2:
		'Log CT bisa tertinggal dari penerbitan atau perpanjangan. Jika waktu kritis, konfirmasi dengan handshake lokal.',
	tool_check_ssl_certificate_expiration_faq_q3: 'Apakah rantai sertifikat penuh dicek?',
	tool_check_ssl_certificate_expiration_faq_a3:
		'Fokus pada kedaluwarsa match terbaru. Pemeriksa rantai saja adalah kebutuhan sekunder — bukan H1.',
	tool_check_ssl_certificate_expiration_faq_q4: 'Apakah judulnya “SSL certificate checker”?',
	tool_check_ssl_certificate_expiration_faq_a4:
		'Tidak. H1 adalah Cek kedaluwarsa sertifikat SSL. Head yang lebih luas bukan judul tunggal.',
	tool_check_ssl_certificate_expiration_faq_q5: 'Bagaimana dengan host IP privat?',
	tool_check_ssl_certificate_expiration_faq_a5:
		'Host privat atau diblokir ditolak. Gunakan alat rentang CIDR privat untuk konteks.',
	tool_check_ssl_certificate_expiration_references: 'crt.sh; Certificate Transparency.',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default id;
