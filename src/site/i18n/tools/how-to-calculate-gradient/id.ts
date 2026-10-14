/**
 * i18n tool shard (how-to-calculate-gradient / id).
 * Gradien fungsi multivariabel: ∇f di suatu titik, proses, magnitudo, dan arah satuan; bukan kemiringan dua titik.
 */
import type { SiteLangDict } from '../../../types';

/** Teks UI/SEO bahasa Indonesia. */
const id: SiteLangDict = {
	tool_gradient_title: "Kalkulator Gradien — ∇f multivariabel di suatu titik",
	tool_gradient_desc: "Hitung gradien ∇f dari fungsi skalar demo di titik (x, y).",
	tool_gradient_description:
		"Hitung gradien multivariabel ∇f sebagai vektor turunan parsial, lengkap dengan proses, langkah, rumus, dan magnitudo. Contoh: untuk f(x,y)=x²y+3y di (1,2), ∂f/∂x=4 dan ∂f/∂y=4 sehingga ∇f=(4,4) dengan |∇f|≈5,6569. Bukan kalkulator kemiringan dua titik.",
	tool_gradient_calculate: "Hitung ∇f",
	tool_gradient_sample: "Muat contoh",
	tool_gradient_clear: "Hapus",
	tool_gradient_fn_label: "Fungsi demo",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "mis. 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "mis. 2",
	tool_gradient_result_label: "Gradien di titik Anda",
	tool_gradient_work_label: "Perhitungan",
	tool_gradient_mag_label: "Magnitudo |∇f|",
	tool_gradient_unit_label: "Arah satuan",
	tool_gradient_result_note: "Dievaluasi di ({x}, {y}). ∇f menunjuk ke kenaikan lokal f yang paling curam.",
	tool_gradient_zero_mag: "∇f = 0 (titik kritis — tidak ada arah unik)",
	tool_gradient_invalid_input: "Masukkan nilai numerik berhingga untuk x dan y.",
	tool_gradient_how_title: "Cara menghitung gradien multivariabel",
	tool_gradient_how_body:
		"Untuk skalar f(x,y), diferensiasikan terhadap tiap variabel sambil menahan yang lain, susun turunan parsial menjadi ∇f, lalu substitusikan titik Anda. Kotak memakai fungsi demo tetap agar aritmetika bisa dicek.",
	tool_gradient_how_item_1: "Pilih fungsi demo dan baca ∇f simbolik di bawahnya.",
	tool_gradient_how_item_2: "Masukkan koordinat (x, y) tempat Anda ingin vektornya.",
	tool_gradient_how_item_3: "Klik Hitung ∇f.",
	tool_gradient_how_item_4: "Baca ∇f, baris perhitungan tiap turunan parsial, magnitudo |∇f|, dan arah satuan.",
	tool_gradient_why_choose_title: "Mengapa memilih Kalkulator Gradien — ∇f multivariabel di suatu titik",
	tool_gradient_why_choose_item_1: "Empat fungsi demo dengan turunan parsial simbolik siap pakai — bukan CAS simbolik kosong.",
	tool_gradient_why_choose_item_2: "Perhitungan tiap komponen ditampilkan, sehingga pengecekan tugas terlihat jelas.",
	tool_gradient_why_choose_item_3: "Magnitudo dan vektor satuan menghubungkan ∇f dengan arah kenaikan paling curam.",
	tool_gradient_why_choose_item_4: "Model jelas: ∇f kalkulus multivariabel, bukan kemiringan rise/run dua titik.",
	tool_gradient_why_choose_item_5: "Berjalan di peramban Anda; tidak ada yang diunggah.",
	tool_gradient_formula_title: "Rumus gradien multivariabel",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). Untuk dua variabel: ∇f(x,y) = (∂f/∂x, ∂f/∂y). Arah ∇f adalah kenaikan paling curam; −∇f dipakai pada gradient descent.",
	tool_gradient_formula_item_1: "Ambil ∂f/∂xᵢ untuk setiap variabel, dengan yang lain tetap.",
	tool_gradient_formula_item_2: "Susun komponen menjadi vektor ∇f.",
	tool_gradient_formula_item_3: "Evaluasi di titik. Contoh: f=x²y+3y di (1,2) → (4, 4).",
	tool_gradient_formula_item_4: "Magnitudo |∇f| = √(gx² + gy²). Contoh: √(16+16) = √32 ≈ 5,6569.",
	tool_gradient_example_title: "Contoh",
	tool_gradient_example:
		"Untuk f(x,y)=x²y+3y, turunan parsialnya ∂f/∂x=2xy dan ∂f/∂y=x²+3. Di (1,2): ∂f/∂x=2·1·2=4, ∂f/∂y=1+3=4, jadi ∇f=(4,4). Magnitudonya √32≈5,6569 dan arah satuan (4/√32, 4/√32)≈(0,7071, 0,7071). Ganti ke f=x²+y² di titik yang sama untuk mendapat ∇f=(2,4).",
	tool_gradient_usecases_title: "Kapan menggunakannya",
	tool_gradient_usecase_1: "Memeriksa turunan parsial tugas sebelum memasukkannya ke langkah optimasi.",
	tool_gradient_usecase_2: "Menjelaskan gradient descent: setiap langkah bergerak berlawanan ∇loss pada parameter saat ini.",
	tool_gradient_usecase_3: "Intuisi fisika atau medan: ∇f menunjuk ke tempat medan skalar naik paling cepat.",
	tool_gradient_usecase_4: "Menemukan apakah suatu titik kritis (|∇f|=0) pada permukaan demo sederhana.",
	tool_gradient_faq_q1: "Apa itu gradien dalam kalkulus multivariabel?",
	tool_gradient_faq_a1:
		"Gradien ∇f adalah vektor turunan parsial pertama. Ia menunjuk ke kenaikan lokal f yang paling curam, dan panjang |∇f| mengukur seberapa curam kenaikan itu.",
	tool_gradient_faq_q2: "Bagaimana menghitung ∇f secara manual?",
	tool_gradient_faq_a2:
		"Diferensiasikan terhadap tiap variabel sambil menahan yang lain, susun komponen menjadi vektor, lalu evaluasi di titik Anda. Untuk f=x²y+3y hasilnya (2xy, x²+3).",
	tool_gradient_faq_q3: "Apakah ini sama dengan “gradien” ML pada gradient descent?",
	tool_gradient_faq_a3:
		"Objek matematikanya sama: ∇ dari loss skalar. Langkah descent bergerak berlawanan ∇loss. Halaman ini mengajarkan definisi kalkulus pada fungsi demo — tidak melatih model.",
	tool_gradient_faq_q4: "Apakah ini kalkulator kemiringan dua titik (rise/run)?",
	tool_gradient_faq_a4:
		"Tidak. Kemiringan garis antara dua titik ada di alat slope. Di sini ∇f adalah vektor turunan parsial multivariabel dari medan skalar.",
	tool_gradient_faq_q5: "Apa arti |∇f| = 0?",
	tool_gradient_faq_a5:
		"Gradien yang hilang adalah titik kritis: tidak ada arah kenaikan paling curam yang unik. Coba f=x²+y² di (0,0): ∇f=(0,0).",
	tool_gradient_faq_q6: "Mengapa hanya fungsi demo?",
	tool_gradient_faq_a6:
		"Diferensiasi simbolik ekspresi sembarang membutuhkan CAS. Demo tetap membuat aritmetika bisa dicek dan halaman fokus pada definisi ∇f.",
	tool_gradient_faq_q7: "Radian atau derajat untuk sin dan cos?",
	tool_gradient_faq_a7:
		"Demo sin(x)+cos(y) memakai radian, seperti kalkulus standar. cos(1)≈0,5403, bukan cos(1°).",
	tool_gradient_article:
		"Gradien fungsi skalar multivariabel adalah vektor turunan parsial pertamanya. Ia menunjuk ke kenaikan lokal paling curam dan mendasari optimasi berbasis gradien.",
	tool_gradient_references: "Referensi Wikipedia dan Khan Academy untuk gradien multivariabel.",
	tool_gradient_ref_wiki_label: "Wikipedia — Gradient",
	tool_gradient_ref_khan_label: "Khan Academy — The gradient",
};

export default id;
