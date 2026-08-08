/**
 * i18n tool shard (how-to-calculate-gradient / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_gradient_article:
    'Der Gradient einer multivariablen skalaren Funktion ist der Vektor ihrer ersten partiellen Ableitungen. Er zeigt steilsten lokalen Anstieg. Keine Steigungsrechner für zwei Punkte.',
  tool_gradient_calculate: '∇f auswerten',
  tool_gradient_desc:
    'Berechnen Sie den Gradienten ∇f eines Skalarfeldes als Vektor partieller Ableitungen. Ablauf: nach jeder Variablen ableiten, ∇f bilden, an einem Punkt auswerten. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); bei (1,2) → (4,4). Für Optimierung und ML-Gradientenabstieg.',
  tool_gradient_description:
    'Berechnen Sie den Gradienten ∇f eines Skalarfeldes als Vektor partieller Ableitungen. Ablauf: nach jeder Variablen ableiten, ∇f bilden, an einem Punkt auswerten. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); bei (1,2) → (4,4). Für Optimierung und ML-Gradientenabstieg.',
  tool_gradient_example: 'f(x,y)=x²y+3y. Partiellen: ∂f/∂x=2xy, ∂f/∂y=x²+3. Bei (1,2): ∇f=(4,4).',
  tool_gradient_example_title: 'Beispiel',
  tool_gradient_faq_a1: '∇f ist der Vektor der partiellen Ableitungen und zeigt steilsten lokalen Anstieg.',
  tool_gradient_faq_a2: 'Nach jeder Variablen ableiten (andere fest), Vektor bilden, am Punkt auswerten.',
  tool_gradient_faq_a3: 'Ja, dasselbe Objekt: ∇ einer skalaren Loss. Die Seite erklärt die Definition, trainiert kein Modell.',
  tool_gradient_faq_a4: 'Nein. Rise/run ist ein anderes Werkzeug; hier ist ∇f der Partielle-Vektor.',
  tool_gradient_faq_q1: 'Was ist ein Gradient in der Mehrvariablen-Analysis?',
  tool_gradient_faq_q2: 'Wie berechnet man ihn von Hand?',
  tool_gradient_faq_q3: 'Gleicher „Gradient“ wie im ML-Gradientenabstieg?',
  tool_gradient_faq_q4: 'Ist das ein Steigungsrechner für zwei Punkte?',
  tool_gradient_fn_hint: 'Demo-Funktion (fest im interaktiven Kasten):',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). Zwei Variablen: ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f = steilster Anstieg; −∇f im Gradientenabstieg.',
  tool_gradient_formula_item_1: '∂f/∂xᵢ für jede Variable bilden',
  tool_gradient_formula_item_2: 'Vektor ∇f zusammensetzen',
  tool_gradient_formula_item_3: 'Komponenten am Punkt auswerten',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: 'Formel des multivariablen Gradienten',
  tool_gradient_how_body:
    'Für ein Skalar f jede partielle ∂f/∂xᵢ bei festen übrigen Variablen bilden, zu ∇f stapeln, Koordinaten einsetzen. Der Kasten nutzt f(x,y)=x²y+3y zum Nachrechnen.',
  tool_gradient_how_title: 'So funktioniert’s',
  tool_gradient_invalid_input: 'Endliche Zahlenwerte für x und y eingeben.',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradient',
  tool_gradient_result_label: 'Gradient an Ihrem Punkt',
  tool_gradient_result_note: 'Ausgewertet f(x,y)=x²y+3y bei ({x}, {y}).',
  tool_gradient_title: 'Gradient berechnen — Multivariables ∇f (partielle Ableitungen)',
  tool_gradient_usecase_1: 'Hausaufgaben-Partiellen vor dem Optimierungsschritt prüfen.',
  tool_gradient_usecase_2: 'Gradientenabstieg erklären: Schritt entgegen ∇loss.',
  tool_gradient_usecase_3: 'Physik-Intuition: ∇f zeigt, wo das Skalarfeld am schnellsten wächst.',
  tool_gradient_usecases_title: 'Optimierung & Machine Learning',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'z. B. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'z. B. 2',
};
export default de;
