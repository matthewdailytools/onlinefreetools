/**
 * i18n 工具分片（how-to-calculate-contribution-margin / id）。
 * 印尼语检索向重写：contribution margin / margin kontribusi、rasio、titik impas (BEP)。YMYL 仅教育用途。
 */
import type { SiteLangDict } from '../../../types';

const id: SiteLangDict = {
	tool_contribution_margin_title: "Kalkulator contribution margin — Rasio CM dan unit break-even",
	tool_contribution_margin_description: "Hitung contribution margin (margin kontribusi) dan rasio CM dari harga jual serta biaya variabel. Contoh: harga 50, BV 30 → CM 20 (40%). Unit opsional memberi CM total; biaya tetap opsional memberi unit titik impas (BEP). Hanya untuk edukasi — bukan nasihat bisnis atau investasi.",
	tool_contribution_margin_article: "Dapatkan CM per unit dan rasio, CM total jika mengisi jumlah unit, serta unit break-even bila biaya tetap diisi.",
	tool_contribution_margin_desc: "CM dan rasio dari harga serta BV. Total dan unit BEP bersifat opsional.",

	tool_contribution_margin_safety_banner: "Hanya untuk edukasi. Halaman ini menghitung aritmetika buku teks contribution margin. Bukan nasihat bisnis, pajak, akuntansi, atau investasi.",
	tool_contribution_margin_hint: "Harga harus lebih dari nol. Biaya variabel harus ≥ 0 dan tidak melebihi harga. Unit dan biaya tetap bersifat opsional.",
	tool_contribution_margin_price_label: "Harga per unit",
	tool_contribution_margin_price_ph: "mis. 50",
	tool_contribution_margin_vc_label: "Biaya variabel per unit",
	tool_contribution_margin_vc_ph: "mis. 30",
	tool_contribution_margin_units_label: "Unit (opsional)",
	tool_contribution_margin_units_ph: "mis. 100",
	tool_contribution_margin_fixed_label: "Biaya tetap (opsional)",
	tool_contribution_margin_fixed_ph: "mis. 10000",
	tool_contribution_margin_calculate: "Hitung",
	tool_contribution_margin_sample: "Muat contoh",
	tool_contribution_margin_clear: "Hapus",
	tool_contribution_margin_cmOut_label: "Contribution margin (per unit)",
	tool_contribution_margin_cmrOut_label: "Rasio CM",
	tool_contribution_margin_totalOut_label: "Total contribution margin",
	tool_contribution_margin_beOut_label: "Unit break-even (titik impas)",
	tool_contribution_margin_steps_title: "Langkah hitung",
	tool_contribution_margin_step_cm_tpl: "CM = harga − BV = {price} − {vc} = {cm}.",
	tool_contribution_margin_step_ratio_tpl: "Rasio CM = CM ÷ harga × 100 = {cm} ÷ {price} × 100 = {ratio}%.",
	tool_contribution_margin_step_total_tpl: "CM total = CM per unit × unit = {cm} × {units} = {total}.",
	tool_contribution_margin_step_be_tpl: "Unit BEP = biaya tetap ÷ CM = {fixed} ÷ {cm} = {be}.",
	tool_contribution_margin_result_note: "CM dipakai menutup biaya tetap dan laba setelah biaya variabel. Bauran multi-produk serta pajak tidak dimodelkan. Hanya edukasi — bukan nasihat bisnis.",
	tool_contribution_margin_err_generic: "Masukkan harga > 0 dan biaya variabel ≥ 0 yang tidak di atas harga (misalnya 50 dan 30). Unit opsional harus > 0; biaya tetap opsional harus ≥ 0.",

	tool_contribution_margin_how_title: "Cara memakai kalkulator contribution margin",
	tool_contribution_margin_how_body: "Isi harga jual dan biaya variabel per unit. Tambahkan unit untuk CM total dan biaya tetap untuk unit BEP jika perlu. «Muat contoh» bergilir: hanya unit, dengan jumlah unit, dengan biaya tetap, lalu kasus gabungan.",
	tool_contribution_margin_how_item_1: "Masukkan harga per unit dan biaya variabel per unit.",
	tool_contribution_margin_how_item_2: "Opsional: isi jumlah unit untuk melihat total contribution margin.",
	tool_contribution_margin_how_item_3: "Opsional: isi biaya tetap untuk melihat unit break-even (perlu CM > 0).",
	tool_contribution_margin_how_item_4: "Klik Hitung untuk melihat CM, rasio, dan baris langkah.",

	tool_contribution_margin_why_choose_title: "Yang Anda dapat dari kalkulator contribution margin ini",
	tool_contribution_margin_why_choose_item_1: "CM per unit dan rasio CM dari harga serta biaya variabel.",
	tool_contribution_margin_why_choose_item_2: "CM total jika Anda mengisi jumlah unit.",
	tool_contribution_margin_why_choose_item_3: "Unit break-even jika Anda mengisi biaya tetap.",
	tool_contribution_margin_why_choose_item_4: "Baris langkah yang memasukkan angka Anda ke rumus.",
	tool_contribution_margin_why_choose_item_5: "Batas YMYL jelas: hanya aritmetika edukatif — bukan nasihat bisnis.",

	tool_contribution_margin_formula_title: "Rumus contribution margin",
	tool_contribution_margin_formula_body: "Contribution margin adalah sisa harga setelah biaya variabel — jumlah yang tersedia untuk menutup biaya tetap dan laba.",
	tool_contribution_margin_formula_item_1: "CM = harga − BV. Contoh: 50 − 30 = 20.",
	tool_contribution_margin_formula_item_2: "Rasio CM = CM ÷ harga. Contoh: 20 ÷ 50 = 40%.",
	tool_contribution_margin_formula_item_3: "CM total = CM per unit × jumlah unit.",
	tool_contribution_margin_formula_item_4: "Unit BEP = biaya tetap ÷ CM per unit (bila CM > 0).",
	tool_contribution_margin_formula_item_5: "Gross margin memakai COGS; CM hanya memakai biaya variabel — keduanya bisa berbeda.",

	tool_contribution_margin_example_title: "Contoh terhitung",
	tool_contribution_margin_example: "«Muat contoh» mulai dengan harga 50 dan BV 30 → CM 20 (40%). Berikutnya dikali 100 unit → CM total 2.000. Lalu biaya tetap 10.000 → break-even 500 unit. Contoh terakhir menggabungkan unit dan biaya tetap.",

	tool_contribution_margin_usecases_title: "Kapan memakai kalkulator contribution margin",
	tool_contribution_margin_usecase_1: "PR: contribution per unit sebelum soal titik impas / BEP.",
	tool_contribution_margin_usecase_2: "Melihat bagaimana perubahan biaya variabel menggeser rasio CM.",
	tool_contribution_margin_usecase_3: "Memperkirakan berapa unit yang menutup total biaya tetap tertentu (hanya ilustrasi).",
	tool_contribution_margin_usecase_4: "Membandingkan dengan gross margin di halaman terkait saat COGS ≠ biaya variabel.",

	tool_contribution_margin_faq_q1: "Bagaimana menghitung contribution margin?",
	tool_contribution_margin_faq_a1: "CM = harga − biaya variabel. Contoh: 50 − 30 = 20; rasio = 20 ÷ 50 = 40%.",
	tool_contribution_margin_faq_q2: "Apa bedanya CM dengan gross margin?",
	tool_contribution_margin_faq_a2: "CM memakai biaya variabel. Gross margin memakai COGS, yang bisa memuat pos yang tidak sepenuhnya variabel.",
	tool_contribution_margin_faq_q3: "Apakah jumlah unit wajib?",
	tool_contribution_margin_faq_a3: "Tidak untuk CM per unit. Isi unit hanya jika Anda ingin CM total.",
	tool_contribution_margin_faq_q4: "Bagaimana unit break-even dihitung di sini?",
	tool_contribution_margin_faq_a4: "Unit BEP = biaya tetap ÷ CM per unit bila CM > 0. Untuk UI break-even yang lebih lengkap, gunakan kalkulator break-even terkait.",
	tool_contribution_margin_faq_q5: "Bisakah biaya variabel melebihi harga?",
	tool_contribution_margin_faq_a5: "Halaman ini menolak kasus itu untuk CM per unit (CM negatif). Periksa lagi input Anda.",
	tool_contribution_margin_faq_q6: "Apakah bauran multi-produk dimodelkan?",
	tool_contribution_margin_faq_a6: "Tidak. Jalankan tiap produk terpisah atau gunakan spreadsheet untuk CM tertimbang.",
	tool_contribution_margin_faq_q7: "Apakah ini nasihat bisnis?",
	tool_contribution_margin_faq_a7: "Tidak. Hanya aritmetika edukatif — bukan nasihat keuangan, pajak, akuntansi, atau investasi.",

	tool_contribution_margin_disclaimer: "Contribution margin hanya untuk edukasi — bukan nasihat keuangan, pajak, akuntansi, bisnis, atau investasi.",
	tool_contribution_margin_references: "Artikel Investopedia tentang contribution margin dan break-even untuk konteks edukatif.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default id;
