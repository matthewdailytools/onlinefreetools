/**
 * i18n 工具分片（how-to-calculate-markup / id）。
 * 加价率：从成本/售价算百分比，或反推售价/成本；并排显示毛利率以便对照。
 */
import type { SiteLangDict } from '../../../types';

/** 印尼语 markup 计算器文案分片（与 en 键一致）。 */
const id: SiteLangDict = {
	tool_markup_title: "Kalkulator markup — persentase, harga jual, atau biaya",
	tool_markup_description: "Hitung persentase markup dari biaya dan harga jual, atau cari harga jual atau biaya jika markup % sudah diketahui. Contoh: biaya 50, jual 80 → markup 60% (margin 37,5%). Markup dibagi biaya; margin dibagi penjualan. Matematika ritel edukatif — bukan saran bisnis.",
	tool_markup_article: "Temukan % markup, harga jual, atau biaya, dan lihat margin kotor yang sejajar agar markup tidak tertukar dengan margin.",
	tool_markup_desc: "Hitung % markup dari biaya dan harga, atau balik untuk jual/biaya. Menampilkan margin untuk perbandingan.",

	tool_markup_mode_label: "Yang dicari",
	tool_markup_mode_pct: "Markup %",
	tool_markup_mode_sell: "Harga jual",
	tool_markup_mode_cost: "Biaya",
	tool_markup_hint: "Pilih yang dihitung. Markup memakai biaya di penyebut; margin memakai harga jual. Koma desimal juga bisa. Hanya edukasi — bukan saran harga.",
	tool_markup_cost_label: "Biaya",
	tool_markup_cost_ph: "mis. 50",
	tool_markup_sell_label: "Harga jual",
	tool_markup_sell_ph: "mis. 80",
	tool_markup_mk_label: "Markup %",
	tool_markup_mk_ph: "mis. 60",
	tool_markup_calculate: "Hitung",
	tool_markup_sample: "Muat contoh",
	tool_markup_clear: "Hapus",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_sellOut_label: "Harga jual",
	tool_markup_costOut_label: "Biaya",
	tool_markup_profitOut_label: "Markup nominal",
	tool_markup_marginOut_label: "Margin kotor %",
	tool_markup_steps_title: "Langkah",
	tool_markup_step_pct_tpl: "Markup % = (jual − biaya) ÷ biaya × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct}%.",
	tool_markup_step_sell_tpl: "Harga jual = biaya × (1 + markup%/100) = {cost} × (1 + {pct}/100) = {sell}.",
	tool_markup_step_cost_tpl: "Biaya = jual ÷ (1 + markup%/100) = {sell} ÷ (1 + {pct}/100) = {cost}.",
	tool_markup_step_margin_tpl: "Margin kotor % = (jual − biaya) ÷ jual × 100 = {dollar} ÷ {sell} × 100 = {margin}%.",
	tool_markup_result_note: "Markup dibagi biaya; margin dibagi harga jual. Markup nominal sama, persentase beda. Hanya edukasi — bukan pajak, harga, atau investasi.",
	tool_markup_err_generic: "Masukkan biaya positif dan harga jual atau % markup yang valid untuk mode terpilih (misalnya biaya 50 dan jual 80).",

	tool_markup_how_title: "Cara memakai kalkulator markup",
	tool_markup_how_body: "Pilih apakah Anda butuh % markup, harga jual, atau biaya. Isi field yang muncul, lalu Hitung. Muat contoh bergilir biaya/jual → %, biaya/% → jual, dan jual/% → biaya.",
	tool_markup_how_item_1: "Dari Yang dicari, pilih Markup %, Harga jual, atau Biaya.",
	tool_markup_how_item_2: "Masukkan nilai yang diketahui (biaya dan jual, atau biaya dan % markup, atau jual dan % markup).",
	tool_markup_how_item_3: "Klik Hitung untuk melihat nilai yang hilang, markup nominal, dan margin kotor yang sejajar.",
	tool_markup_how_item_4: "Pakai Muat contoh: 50/80 → 60%, biaya 40 dengan 25% → 50, dan jual 120 dengan 50% → biaya 80.",

	tool_markup_why_choose_title: "Apa yang didapat dari kalkulator ini",
	tool_markup_why_choose_item_1: "Tiga mode: % markup dari biaya dan harga, harga dari biaya dan %, atau biaya dari harga dan %.",
	tool_markup_why_choose_item_2: "Markup nominal dan margin kotor % ditampilkan di samping markup agar kedua istilah tetap jelas.",
	tool_markup_why_choose_item_3: "Baris langkah yang memasukkan angka Anda ke (P−C)/C dan (P−C)/P.",
	tool_markup_why_choose_item_4: "Field disembunyikan saat tidak dipakai untuk mode terpilih.",
	tool_markup_why_choose_item_5: "Disclaimer edukatif jelas — bukan bisnis, pajak, atau investasi.",

	tool_markup_formula_title: "Rumus markup",
	tool_markup_formula_body: "Markup mengukur kenaikan relatif terhadap biaya. Margin mengukur laba nominal yang sama relatif terhadap harga jual.",
	tool_markup_formula_item_1: "Markup % = (harga jual − biaya) ÷ biaya × 100. Contoh: (80 − 50) ÷ 50 × 100 = 60%.",
	tool_markup_formula_item_2: "Harga jual = biaya × (1 + markup%/100). Contoh: 40 × 1,25 = 50 pada markup 25%.",
	tool_markup_formula_item_3: "Biaya = harga jual ÷ (1 + markup%/100). Contoh: 120 ÷ 1,5 = 80 pada markup 50%.",
	tool_markup_formula_item_4: "Margin kotor % = (harga jual − biaya) ÷ harga jual × 100. Contoh 50/80 → 37,5%.",
	tool_markup_formula_item_5: "Markup 100% berarti harga = 2 × biaya (margin 50%). Markup di atas 100% mungkin jika harga > 2 × biaya.",

	tool_markup_example_title: "Contoh terhitung",
	tool_markup_example: "Muat contoh mulai biaya 50 dan jual 80 → markup 60%, markup nominal 30, margin 37,5%. Lalu biaya 40 dengan markup 25% → jual 50. Lalu jual 120 dengan markup 50% → biaya 80. Contoh impas (100/100) menampilkan 0% markup dan 0% margin.",

	tool_markup_usecases_title: "Kapan memakai kalkulator markup",
	tool_markup_usecase_1: "PR ritel: ubah biaya dan harga etalase menjadi % markup dengan langkah terlihat.",
	tool_markup_usecase_2: "Cek lembar harga: dengan % markup target, cari harga jual dari biaya.",
	tool_markup_usecase_3: "Biaya balik: dari harga dan kebijakan markup, pulihkan biaya tersirat.",
	tool_markup_usecase_4: "Jelaskan istilah campuran: mengapa markup 60% bukan margin 60%.",

	tool_markup_faq_q1: "Bagaimana menghitung persentase markup?",
	tool_markup_faq_a1: "Kurangi biaya dari harga jual, bagi biaya, kali 100. Contoh: biaya 50, jual 80 → (80−50)/50 × 100 = 60%.",
	tool_markup_faq_q2: "Apa beda markup dan margin?",
	tool_markup_faq_a2: "Markup membagi laba nominal dengan biaya; margin dengan harga jual. Transaksi 50/80 sama = markup 60% dan margin 37,5%.",
	tool_markup_faq_q3: "Bagaimana cari harga jual dari biaya dan % markup?",
	tool_markup_faq_a3: "Jual = biaya × (1 + markup%/100). Biaya 40 dan markup 25%, jual = 40 × 1,25 = 50.",
	tool_markup_faq_q4: "Bisakah markup di atas 100%?",
	tool_markup_faq_a4: "Ya. Jika harga lebih dari dua kali biaya, markup melebihi 100%. Contoh: biaya 50, jual 150 → markup 200%.",
	tool_markup_faq_q5: "Bagaimana jika jual di bawah biaya?",
	tool_markup_faq_a5: "Markup dan margin menjadi negatif. Artinya rugi per unit sebelum biaya lain.",
	tool_markup_faq_q6: "Apakah termasuk pajak atau diskon?",
	tool_markup_faq_a6: "Tidak. Masukkan angka biaya dan harga yang ingin dibandingkan setelah Anda sendiri menerapkan pajak atau diskon.",
	tool_markup_faq_q7: "Apakah ini saran keuangan?",
	tool_markup_faq_a7: "Tidak. Hanya aritmetika ritel edukatif — bukan pajak, strategi harga, atau investasi.",

	tool_markup_disclaimer: "Hanya ilustrasi markup edukatif — bukan saran keuangan, pajak, harga, atau investasi.",
	tool_markup_references: "Investopedia dan rumus buku teks standar untuk konteks edukasi.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Profit margin",
};

export default id;
