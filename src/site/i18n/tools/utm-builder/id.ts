/**
 * i18n tool shard (utm-builder / id).
 * Bahasa Indonesia — penulisan ulang mandiri untuk pencarian lokal.
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_utm_home_title: 'Pembuat UTM',
	tool_utm_home_desc:
		'Ukur kampanye mana yang benar-benar mendatangkan lalu lintas Anda: buat link pelacakan bersih dengan utm_source, medium, campaign, term, dan content dari browser.',
	tool_utm_title: 'Pembuat UTM — buat link pelacakan kampanye',
	tool_utm_description:
		'UTM berantakan membuat kampanye tak terlacak. Buat tautan dengan source, medium, campaign, term, content di browser. Contoh: newsletter + email + sale.',
	tool_utm_url_label: 'URL halaman tujuan',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'Masukkan URL halaman tujuan.',
	tool_utm_url_invalid: 'URL terlihat tidak valid. Periksa alamatnya lalu coba lagi.',
	tool_utm_url_protocol: 'Protokol tidak terdeteksi — https:// ditambahkan otomatis.',
	tool_utm_source_label: 'Sumber kampanye (utm_source)',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'Di mana link dilihat: newsletter, facebook, google.',
	tool_utm_medium_label: 'Medium kampanye (utm_medium)',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'Bagaimana link dikirim: email, cpc, social, referral.',
	tool_utm_campaign_label: 'Nama kampanye (utm_campaign)',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'Promosi atau produk tempat link ini berada.',
	tool_utm_campaign_required: 'Nama kampanye (utm_campaign) wajib diisi.',
	tool_utm_term_label: 'Istilah kampanye (utm_term)',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: 'Opsional. Mengidentifikasi kata kunci pencarian berbayar.',
	tool_utm_content_label: 'Konten kampanye (utm_content)',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: 'Opsional. Membedakan iklan atau link yang mengarah ke URL yang sama.',
	tool_utm_generate: 'Buat',
	tool_utm_sample: 'Contoh',
	tool_utm_clear: 'Bersihkan',
	tool_utm_copy: 'Salin',
	tool_utm_copied: 'Tersalin',
	tool_utm_error_prefix: 'Error: ',
	tool_utm_output_label: 'URL yang dihasilkan',
	tool_utm_table_title: 'Rincian parameter',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: 'Nilai',
	tool_utm_param_status: 'Status',
	tool_utm_param_required: 'Wajib',
	tool_utm_param_optional: 'Opsional',
	tool_utm_param_empty: 'Kosong',
	tool_utm_encoding_note:
		'Nilai di-encode dengan encodeURIComponent: spasi menjadi %20 dan karakter non-ASCII ikut di-encode.',
	tool_utm_case_note:
		'Google Analytics membedakan huruf besar/kecil pada nilai. Gunakan gaya huruf kecil yang konsisten agar kanal yang sama menyatu.',
	tool_utm_how_title: 'Cara kerja',
	tool_utm_how_body:
		'Pembuat mem-parsing URL dasar Anda, mempertahankan parameter kueri yang ada, lalu menambahkan parameter UTM dengan pemisah &. Setiap nilai di-encode persen sehingga spasi, karakter Tionghoa, dan simbol tetap aman di dalam link. Jika URL punya hash, hash dipindah ke belakang semua parameter. Lima parameter UTM inilah yang dibaca Google Analytics untuk mengatribusikan kunjungan ke sumber, medium, dan kampanye.',
	tool_utm_how_item_1: 'Masukkan URL dasar landing page.',
	tool_utm_how_item_2: 'Isi utm_source, utm_medium, dan utm_campaign (serta parameter opsional).',
	tool_utm_how_item_3: 'Klik Buat untuk menambahkan parameter UTM yang di-encode.',
	tool_utm_how_item_4: 'Salin URL pelacakan yang sudah jadi.',
	tool_utm_rules_title: 'Aturan yang dipakai pembuat',
	tool_utm_rules_body: 'Berikut definisi dan aturan encoding parameter UTM menurut dokumentasi Google Analytics.',
	tool_utm_rules_item_1: 'utm_source mengidentifikasi di mana link dilihat; utm_medium mengidentifikasi bagaimana link dikirim. Keduanya wajib untuk atribusi.',
	tool_utm_rules_item_2: 'utm_campaign adalah nama promosi dan wajib di sini. utm_term dan utm_content opsional: term untuk kata kunci berbayar, content untuk membedakan dua link.',
	tool_utm_rules_item_3: 'Jika URL dasar sudah punya parameter kueri, parameter itu dipertahankan dan UTM ditambahkan dengan &; parameter yang sama namanya diganti nilai barunya.',
	tool_utm_rules_item_4: 'Nilai parameter di-encode persen: spasi menjadi %20 dan karakter non-ASCII ikut di-encode. Fragmen (#anchor) selalu berada di belakang string kueri.',
	tool_utm_rules_item_5: 'Gunakan gaya huruf kecil yang konsisten. Nilai UTM peka huruf besar/kecil di Google Analytics, jadi facebook dan Facebook terbagi menjadi dua sumber.',
	tool_utm_example_title: 'Contoh',
	tool_utm_example:
		'Input contoh adalah https://example.com/page dengan utm_source=newsletter, utm_medium=email, dan utm_campaign=summer_sale. Link yang dihasilkan adalah https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale.',
	tool_utm_usecases_title: 'Penggunaan yang tepat',
	tool_utm_usecase_1:
		'Kampanye sosial: buat satu link per platform dengan utm_campaign yang sama, agar GA4 melaporkan seluruh promosi dalam satu baris.',
	tool_utm_usecase_2:
		'Kiriman email: gunakan utm_source=newsletter, utm_medium=email, dan nilai content berbeda untuk membandingkan dua banner yang mengarah ke halaman yang sama.',
	tool_utm_usecase_3:
		'Kode QR dan link cetak: URL UTM lengkap itu panjang, tapi Anda bisa memperpendeknya setelah dibuat sambil tetap mempertahankan parameternya.',
	tool_utm_faq_q1: 'Apa bedanya utm_source dan utm_medium?',
	tool_utm_faq_a1:
		'utm_source memberi tahu di mana link dilihat (newsletter, facebook, google), sedangkan utm_medium memberi tahu bagaimana link dikirim (email, cpc, social, referral). GA4 menggabungkannya dengan utm_campaign untuk menamai sumber lalu lintas.',
	tool_utm_faq_q2: 'URL sudah punya parameter kueri. Apakah akan hilang?',
	tool_utm_faq_a2:
		'Tidak. Parameter yang ada dipertahankan dan UTM ditambahkan dengan &. Jika URL sudah berisi parameter bernama sama, nilai baru akan menggantikannya.',
	tool_utm_faq_q3: 'Bagaimana dengan spasi, karakter Tionghoa, atau simbol pada nilai?',
	tool_utm_faq_a3:
		'Setiap nilai di-encode persen: spasi menjadi %20 dan karakter non-ASCII ikut di-encode. Link yang dihasilkan tetap valid di klien email, aplikasi pesan, dan browser.',
	tool_utm_faq_q4: 'Apakah nilai UTM peka huruf besar/kecil?',
	tool_utm_faq_a4:
		'Ya. Google Analytics memperlakukan utm_source=Facebook dan utm_source=facebook sebagai dua sumber berbeda. Gunakan gaya huruf kecil yang konsisten agar kanal yang sama menyatu.',
	tool_utm_faq_q5: 'Kapan saya harus memakai utm_term dan utm_content?',
	tool_utm_faq_a5:
		'utm_term mengidentifikasi kata kunci pencarian berbayar, berguna untuk Google Ads. utm_content membedakan dua link atau iklan yang mengarah ke URL yang sama, seperti banner header dan link footer.',
	tool_utm_faq_q6: 'Apakah URL saya dikirim ke mana-mana?',
	tool_utm_faq_a6: 'Tidak. Pembuat berjalan sepenuhnya di browser Anda dan tidak ada yang diunggah.',
	tool_utm_references: 'Google Analytics — Kampanye kustom (UTM); Google Search Central — Parameter URL.',
	tool_utm_ref_ga_label: 'Google Analytics — Kampanye kustom (UTM)',
	tool_utm_ref_searchcentral_label: 'Google Search Central — Parameter URL',
};

export default id;
