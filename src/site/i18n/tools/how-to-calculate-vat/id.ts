/**
 * i18n tool shard (how-to-calculate-vat / id).
 * 增值税/VAT/GST：净价加税或含税拆税；费率快捷芯片；逆向验算。
 */
import type { SiteLangDict } from '../../../types';

/** 印尼语工具文案分片（PPN / VAT / GST 计算器）。 */
const id: SiteLangDict = {
	tool_vat_title: "Kalkulator PPN / VAT / GST — Tambah Pajak ke Net atau Ekstrak dari Gross",
	tool_vat_description: "Tambahkan PPN/VAT/GST ke jumlah net, atau ekstrak pajak dari harga gross (sudah termasuk pajak). Contoh: net 100 dengan 20% → gross 120, pajak 20. Masukkan tarif sendiri — tanpa matriks negara. Aritmetika edukatif di browser, bukan saran pelaporan pajak.",
	tool_vat_article: "Tambahkan PPN/VAT/GST ke harga net atau balikkan gross menjadi net dan pajak, dengan langkah perhitungan dan cek balik.",
	tool_vat_desc: "Tambah atau ekstrak PPN/VAT/GST dengan tarif Anda. Menampilkan net, gross, pajak, dan cek balik.",

	tool_vat_safety_banner: "Hanya edukatif. Masukkan sendiri tarif yang berlaku — halaman ini tidak mencari tarif negara dan bukan saran pelaporan atau kepatuhan.",
	tool_vat_mode_label: "Mode",
	tool_vat_mode_add: "Tambah pajak ke net",
	tool_vat_mode_extract: "Ekstrak pajak dari gross",
	tool_vat_amount_label: "Jumlah",
	tool_vat_amount_ph: "mis. 100",
	tool_vat_rate_label: "PPN/VAT/GST %",
	tool_vat_rate_ph: "mis. 20",
	tool_vat_hint: "Pilih tambah (net → gross) atau ekstrak (gross → net). Ketik persen tarif non-negatif. Chip tarif hanya pintasan — pastikan tarif legal untuk faktur Anda.",
	tool_vat_chips_label: "Pintasan tarif umum",
	tool_vat_chip_5: "5%",
	tool_vat_chip_10: "10%",
	tool_vat_chip_20: "20%",
	tool_vat_chip_21: "21%",
	tool_vat_calculate: "Hitung",
	tool_vat_sample: "Muat contoh",
	tool_vat_clear: "Hapus",
	tool_vat_grossOut_label: "Gross",
	tool_vat_netOut_label: "Net",
	tool_vat_taxOut_label: "Pajak",
	tool_vat_row_check: "Cek balik",
	tool_vat_steps_title: "Langkah",
	tool_vat_step_add_tpl: "Tambah pajak: gross = net × (1 + tarif/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_step_extract_tpl: "Ekstrak pajak: net = gross ÷ (1 + tarif/100) = {gross} ÷ (1 + {pct}/100) = {net}.",
	tool_vat_step_tax_tpl: "Pajak = gross − net = {gross} − {net} = {tax}.",
	tool_vat_step_check_tpl: "Cek: net × (1 + tarif/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_result_note: "Anda yang memasukkan persen. Faktur multi-tarif, pembebasan, dan aturan pelaporan tidak dimodelkan. Hanya edukatif — bukan saran pajak, akuntansi, atau investasi.",
	tool_vat_err_generic: "Masukkan jumlah positif dan tarif pajak 0 atau lebih (misalnya jumlah 100 dan tarif 20).",

	tool_vat_how_title: "Cara memakai kalkulator PPN / VAT / GST",
	tool_vat_how_body: "Pilih tambah atau ekstrak, masukkan jumlah dan tarif, lalu Hitung. Muat contoh bergilir: tambah 100@20%, ekstrak 120@20%, tambah 50@10%, dan ekstrak 107,1@7%.",
	tool_vat_how_item_1: "Pilih Tambah pajak ke net atau Ekstrak pajak dari gross.",
	tool_vat_how_item_2: "Masukkan jumlah uang dan persen PPN/VAT/GST (atau ketuk chip tarif).",
	tool_vat_how_item_3: "Klik Hitung untuk melihat gross, net, pajak, dan baris cek balik.",
	tool_vat_how_item_4: "Pakai Muat contoh untuk contoh tambah/ekstrak yang umum.",

	tool_vat_why_choose_title: "Apa yang didapat dari kalkulator PPN ini",
	tool_vat_why_choose_item_1: "Dua arah: tambah pajak ke net, atau keluarkan net dan pajak dari harga gross.",
	tool_vat_why_choose_item_2: "Cek balik yang mengalikan net × (1+r) kembali ke gross.",
	tool_vat_why_choose_item_3: "Baris langkah yang memasukkan angka Anda ke rumus.",
	tool_vat_why_choose_item_4: "Chip tarif (5 / 10 / 20 / 21%) sebagai pintasan ketik — bukan saran tarif legal.",
	tool_vat_why_choose_item_5: "Batas jelas: Anda isi tarif; tanpa matriks pajak negara dan tanpa bantuan pelaporan.",

	tool_vat_formula_title: "Rumus PPN / VAT / GST",
	tool_vat_formula_body: "Misalkan r tarif desimal (persen ÷ 100). Identitas yang sama berlaku untuk PPN, VAT, GST, atau pajak penjualan saat pajak satu persen dari net.",
	tool_vat_formula_item_1: "Tambah: gross = net × (1 + r). Contoh: 100 × 1,20 = 120 pada 20%.",
	tool_vat_formula_item_2: "Ekstrak: net = gross ÷ (1 + r). Contoh: 120 ÷ 1,20 = 100 pada 20%.",
	tool_vat_formula_item_3: "Pajak = gross − net. Contoh sama → pajak 20.",
	tool_vat_formula_item_4: "Bagian pajak dari gross = r ÷ (1 + r). Pada 20%, pajak 1/6 dari harga gross.",
	tool_vat_formula_item_5: "GST vs VAT: matematika tambah/ekstrak sama; label dan aturan pelaporan beda per negara.",

	tool_vat_example_title: "Contoh terhitung",
	tool_vat_example: "Muat contoh dimulai dengan tambah: net 100 pada 20% → gross 120, pajak 20. Lalu mengekstrak 120 kembali ke net 100. Kemudian tambah 50 pada 10% → 55. Contoh terakhir: ekstrak 107,1 pada 7% ≈ net 100. Selalu pastikan tarif yang berlaku untuk faktur Anda.",

	tool_vat_usecases_title: "Kapan memakai kalkulator PPN / VAT / GST",
	tool_vat_usecase_1: "PR sekolah: tambah pajak ke harga net dan tunjukkan langkah (1+r).",
	tool_vat_usecase_2: "Cek struk: mulai dari total termasuk pajak dan pulihkan net serta pajak.",
	tool_vat_usecase_3: "Penawaran cepat: terapkan persen tarif yang sudah diketahui tanpa spreadsheet.",
	tool_vat_usecase_4: "Perjelas istilah GST vs VAT dengan aritmetika yang sama.",

	tool_vat_faq_q1: "Bagaimana menambahkan PPN ke jumlah net?",
	tool_vat_faq_a1: "Kalikan dengan (1 + tarif/100). Net 100 pada 20% → 100 × 1,20 = 120 gross; pajak = 20.",
	tool_vat_faq_q2: "Bagaimana mengekstrak PPN dari harga gross?",
	tool_vat_faq_a2: "Bagi dengan (1 + tarif/100). Gross 120 pada 20% → 120 ÷ 1,20 = 100 net; pajak = 20.",
	tool_vat_faq_q3: "Apakah ada tarif PPN per negara?",
	tool_vat_faq_a3: "Tidak. Masukkan persen sendiri. Chip tarif hanya pintasan ketik, bukan tabel tarif legal.",
	tool_vat_faq_q4: "Apakah GST dihitung berbeda dari VAT?",
	tool_vat_faq_a4: "Untuk satu persen dari net, rumus tambah/ekstrak sama. Nama dan aturan pelaporan beda menurut yurisdiksi.",
	tool_vat_faq_q5: "Bisakah tarif nol?",
	tool_vat_faq_a5: "Ya. Tarif 0% membuat net = gross dan pajak = 0, berguna untuk contoh bebas pajak edukatif.",
	tool_vat_faq_q6: "Apakah menangani beberapa tarif PPN dalam satu faktur?",
	tool_vat_faq_a6: "Tidak. Hitung tiap baris terpisah atau pakai software akuntansi untuk tarif campuran dan pembebasan.",
	tool_vat_faq_q7: "Apakah ini saran pelaporan pajak?",
	tool_vat_faq_a7: "Tidak. Hanya aritmetika edukatif — bukan akuntansi, pelaporan pajak, atau saran investasi.",

	tool_vat_disclaimer: "Hanya aritmetika PPN/VAT/GST edukatif — bukan saran keuangan, pelaporan pajak, akuntansi, atau investasi.",
	tool_vat_references: "Investopedia dan rumus buku teks standar untuk konteks edukatif.",
	tool_vat_ref_a_label: "Investopedia — VAT",
	tool_vat_ref_b_label: "Investopedia — Pajak penjualan",
};

export default id;
