/**
 * i18n tool shard (how-to-calculate-gradient / id). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const id: SiteLangDict = {
  tool_gradient_article:
    'Gradien fungsi skalar multivariabel adalah vektor turunan parsial orde pertama. Menunjuk kenaikan lokal tercepat. Halaman ini bukan kalkulator kemiringan dua titik.',
  tool_gradient_calculate: 'Hitung ∇f',
  tool_gradient_desc:
    'Hitung gradien ∇f medan skalar sebagai vektor turunan parsial. Alur: turunkan tiap variabel, susun ∇f, evaluasi di sebuah titik. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); di (1,2) → (4,4). Berguna untuk optimasi dan penjelasan gradient descent ML.',
  tool_gradient_description:
    'Hitung gradien ∇f medan skalar sebagai vektor turunan parsial. Alur: turunkan tiap variabel, susun ∇f, evaluasi di sebuah titik. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); di (1,2) → (4,4). Berguna untuk optimasi dan penjelasan gradient descent ML.',
  tool_gradient_example: 'f(x,y)=x²y+3y. Parsial: ∂f/∂x=2xy, ∂f/∂y=x²+3. Di (1,2): ∇f=(4,4).',
  tool_gradient_example_title: 'Contoh',
  tool_gradient_faq_a1: '∇f adalah vektor turunan parsial dan menunjuk kenaikan lokal tercepat.',
  tool_gradient_faq_a2: 'Turunkan tiap variabel dengan yang lain tetap, susun vektor, evaluasi di titik.',
  tool_gradient_faq_a3: 'Objek matematikanya sama: ∇ dari loss skalar. Halaman ini mengajarkan definisi, bukan melatih model.',
  tool_gradient_faq_a4: 'Bukan. Kemiringan rise/run alat lain; di sini ∇f adalah vektor parsial.',
  tool_gradient_faq_q1: 'Apa itu gradien dalam kalkulus multivariabel?',
  tool_gradient_faq_q2: 'Bagaimana menghitung manual?',
  tool_gradient_faq_q3: 'Sama dengan “gradien” di ML gradient descent?',
  tool_gradient_faq_q4: 'Apakah ini kalkulator kemiringan dua titik?',
  tool_gradient_fn_hint: 'Fungsi demo (tetap di kotak interaktif):',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). Dua variabel: ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f adalah naik curam; −∇f dipakai di gradient descent.',
  tool_gradient_formula_item_1: 'Hitung ∂f/∂xᵢ untuk tiap variabel',
  tool_gradient_formula_item_2: 'Susun vektor ∇f',
  tool_gradient_formula_item_3: 'Evaluasi komponen di titik',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: 'Rumus gradien multivariabel',
  tool_gradient_how_body:
    'Untuk skalar f, hitung tiap parsial ∂f/∂xᵢ dengan variabel lain tetap, susun ∇f, lalu substitusi koordinat. Kotak memakai f(x,y)=x²y+3y agar bisa dicek manual.',
  tool_gradient_how_title: 'Cara kerja',
  tool_gradient_invalid_input: 'Masukkan nilai numerik hingga untuk x dan y.',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradient',
  tool_gradient_result_label: 'Gradien di titik Anda',
  tool_gradient_result_note: 'Dievaluasi f(x,y)=x²y+3y di ({x}, {y}).',
  tool_gradient_title: 'Kalkulator gradien — ∇f multivariabel (turunan parsial)',
  tool_gradient_usecase_1: 'Cek parsial PR sebelum langkah optimasi.',
  tool_gradient_usecase_2: 'Jelaskan gradient descent: tiap langkah berlawanan ∇loss.',
  tool_gradient_usecase_3: 'Intuisi fisika: ∇f menunjuk di mana medan skalar naik paling cepat.',
  tool_gradient_usecases_title: 'Optimasi & machine learning',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'mis. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'mis. 2',
};
export default id;
