/**
 * i18n 工具分片（how-to-calculate-ohms-law / id）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。
 * 仅教学算术：浏览器内理想直流公式，非布线或电气安全建议。
 */
import type { SiteLangDict } from '../../../types';

/** 印尼语文案字典：键名与 en.ts 完全一致，占位符保留 {v}{i}{r}{p}。 */
const id: SiteLangDict = {
	tool_ohms_law_title: "Kalkulator hukum Ohm — Cari hambatan tegangan arus dan daya",
	tool_ohms_law_description: "Terapkan hukum Ohm untuk mencari tegangan, arus, atau hambatan, lalu lihat daya P=VI. Contoh: V=12, I=2 → R=6 Ω dan P=24 W. Hanya bentuk DC ideal — aritmetika edukatif di browser, bukan panduan pengawatan atau keselamatan listrik.",
	tool_ohms_law_article: "Pilih yang ingin dicari, masukkan dua besaran lain, lalu dapatkan yang belum diketahui plus daya beserta langkahnya.",
	tool_ohms_law_desc: "Hukum Ohm V=IR dengan mode V, I, atau R, plus daya. Hanya edukatif DC ideal.",

	tool_ohms_law_safety_banner: "Hanya edukatif. Aritmetika hukum Ohm DC ideal — bukan instruksi pengawatan, rating produk, atau saran keselamatan listrik.",
	tool_ohms_law_hint: "Pilih mode penyelesaian, lalu masukkan dua nilai yang diketahui. Arus tidak boleh nol saat mencari R. Hambatan harus lebih dari nol saat mencari I atau V dari R.",
	tool_ohms_law_mode_label: "Selesaikan untuk",
	tool_ohms_law_mode_r: "Hambatan R (dari V dan I)",
	tool_ohms_law_mode_v: "Tegangan V (dari I dan R)",
	tool_ohms_law_mode_i: "Arus I (dari V dan R)",
	tool_ohms_law_V_label: "Tegangan V (volt)",
	tool_ohms_law_V_ph: "mis. 12",
	tool_ohms_law_I_label: "Arus I (ampere)",
	tool_ohms_law_I_ph: "mis. 2",
	tool_ohms_law_R_label: "Hambatan R (ohm)",
	tool_ohms_law_R_ph: "mis. 6",
	tool_ohms_law_calculate: "Hitung",
	tool_ohms_law_sample: "Muat contoh",
	tool_ohms_law_clear: "Hapus",
	tool_ohms_law_primary_label: "Hasil",
	tool_ohms_law_rOut_label: "Hambatan R",
	tool_ohms_law_vOut_label: "Tegangan V",
	tool_ohms_law_iOut_label: "Arus I",
	tool_ohms_law_pOut_label: "Daya P",
	tool_ohms_law_steps_title: "Langkah",
	tool_ohms_law_step_r_tpl: "R = V ÷ I = {v} ÷ {i} = {r} Ω.",
	tool_ohms_law_step_v_tpl: "V = I × R = {i} × {r} = {v} V.",
	tool_ohms_law_step_i_tpl: "I = V ÷ R = {v} ÷ {r} = {i} A.",
	tool_ohms_law_step_p_tpl: "P = V × I = {v} × {i} = {p} W.",
	tool_ohms_law_result_note: "Hanya bentuk DC ideal. Jaga satuan konsisten (V, A → Ω dan W). Impedansi AC dan perangkat non-ohmik tidak dimodelkan.",
	tool_ohms_law_err_generic: "Masukkan nilai terbatas positif untuk kolom yang diketahui. Arus ≠ 0 saat mencari R; hambatan > 0 saat mencari V atau I.",

	tool_ohms_law_how_title: "Cara memakai kalkulator hukum Ohm",
	tool_ohms_law_how_body: "Pilih apakah mencari R, V, atau I. Masukkan dua besaran lain, lalu hitung untuk melihat yang belum diketahui dan daya beserta langkahnya. Muat contoh memutar tiap mode.",
	tool_ohms_law_how_item_1: "Pilih mode: R dari V&I, V dari I&R, atau I dari V&R.",
	tool_ohms_law_how_item_2: "Masukkan dua nilai yang diketahui dengan satuan yang konsisten.",
	tool_ohms_law_how_item_3: "Klik Hitung untuk melihat yang belum diketahui, daya, dan langkah.",
	tool_ohms_law_how_item_4: "Gunakan Muat contoh untuk memutar V=12/I=2, I=2/R=6, dan V=12/R=6.",

	tool_ohms_law_why_choose_title: "Apa yang diberikan kalkulator hukum Ohm ini",
	tool_ohms_law_why_choose_item_1: "Tiga mode yang mencakup penataan ulang V = I·R.",
	tool_ohms_law_why_choose_item_2: "Daya P = V·I ditampilkan di samping yang dicari.",
	tool_ohms_law_why_choose_item_3: "Baris langkah yang memasukkan angka Anda ke rumus.",
	tool_ohms_law_why_choose_item_4: "Rotasi contoh untuk setiap mode.",
	tool_ohms_law_why_choose_item_5: "Batas jelas: hanya DC ideal — bukan saran pengawatan.",

	tool_ohms_law_formula_title: "Rumus hukum Ohm",
	tool_ohms_law_formula_body: "Untuk resistor ideal dalam kondisi DC, tegangan, arus, dan hambatan dihubungkan oleh V = I·R. Daya mengikuti P = V·I.",
	tool_ohms_law_formula_item_1: "R = V ÷ I bila arus tidak nol.",
	tool_ohms_law_formula_item_2: "V = I × R.",
	tool_ohms_law_formula_item_3: "I = V ÷ R bila hambatan lebih dari nol.",
	tool_ohms_law_formula_item_4: "P = V × I (juga P = I²R atau P = V²/R untuk kasus ideal).",
	tool_ohms_law_formula_item_5: "Halaman ini hanya memakai DC ideal — bukan impedansi AC atau desain keselamatan.",

	tool_ohms_law_example_title: "Contoh terhitung",
	tool_ohms_law_example: "Contoh mode R: V=12, I=2 → R=6 Ω, P=24 W. Mode V: I=2, R=6 → V=12. Mode I: V=12, R=6 → I=2.",

	tool_ohms_law_usecases_title: "Kapan memakai kalkulator hukum Ohm",
	tool_ohms_law_usecase_1: "PR elektronika: susun ulang V = I·R untuk besaran yang hilang.",
	tool_ohms_law_usecase_2: "Cek cepat DC ideal untuk hambatan atau daya dari bacaan meter.",
	tool_ohms_law_usecase_3: "Bandingkan dengan halaman fisika terkait (massa jenis, kecepatan) untuk latihan satuan.",
	tool_ohms_law_usecase_4: "Lihat daya di samping variabel yang diselesaikan tanpa alat daya terpisah.",

	tool_ohms_law_faq_q1: "Apa isi hukum Ohm?",
	tool_ohms_law_faq_a1: "Untuk resistor ideal di DC, V = I·R. Halaman ini juga menampilkan P = V·I.",
	tool_ohms_law_faq_q2: "Bisakah saya mencari tegangan atau arus?",
	tool_ohms_law_faq_a2: "Ya. Gunakan kontrol Selesaikan untuk memilih V, I, atau R.",
	tool_ohms_law_faq_q3: "Apakah ini memodelkan rangkaian AC?",
	tool_ohms_law_faq_a3: "Tidak. Hanya bentuk DC ideal — impedansi dan fasa tidak disertakan.",
	tool_ohms_law_faq_q4: "Bagaimana jika arus nol saat mencari R?",
	tool_ohms_law_faq_a4: "R = V/I tidak terdefinisi pada I = 0. Halaman menolak kasus itu.",
	tool_ohms_law_faq_q5: "Apakah ini saran pengawatan atau keselamatan?",
	tool_ohms_law_faq_a5: "Tidak. Hanya aritmetika edukatif — bukan rating produk atau panduan keselamatan listrik.",

	tool_ohms_law_disclaimer: "Hukum Ohm edukatif saja — bukan saran profesional, pengawatan, atau keselamatan listrik.",
	tool_ohms_law_references: "Referensi buku teks standar tentang hukum Ohm dan daya listrik.",
	tool_ohms_law_ref_a_label: "Wikipedia — Hukum Ohm",
	tool_ohms_law_ref_b_label: "Wikipedia — Daya listrik",
};

export default id;
