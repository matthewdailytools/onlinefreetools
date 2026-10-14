/**
 * i18n tool shard (how-to-calculate-gradient / de).
 * Multivariable Gradient auf Deutsch: ∇f an einem Punkt, Prozess, Betrag und Einheitsrichtung; kein Zwei-Punkte-Steigungsrechner.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche UI-/SEO-Texte (Sie-Form). */
const de: SiteLangDict = {
	tool_gradient_title: "Gradient berechnen — multivariable ∇f an einem Punkt",
	tool_gradient_desc: "Werten Sie den Gradienten ∇f einer Demo-Skalarfunktion an einem Punkt (x, y) aus.",
	tool_gradient_description:
		"Gradient berechnen: multivariable ∇f als Vektor der partiellen Ableitungen, mit Prozess, Schritten, Berechnung und Betrag. Beispiel: für f(x,y)=x²y+3y bei (1,2) gilt ∂f/∂x=4 und ∂f/∂y=4, also ∇f=(4,4) mit |∇f|≈5,6569. Formel und Rechenweg inklusive. Kein Steigungsrechner zwischen zwei Punkten.",
	tool_gradient_calculate: "∇f auswerten",
	tool_gradient_sample: "Beispiel laden",
	tool_gradient_clear: "Leeren",
	tool_gradient_fn_label: "Demo-Funktion",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "z. B. 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "z. B. 2",
	tool_gradient_result_label: "Gradient an Ihrem Punkt",
	tool_gradient_work_label: "Rechnung",
	tool_gradient_mag_label: "Betrag |∇f|",
	tool_gradient_unit_label: "Einheitsrichtung",
	tool_gradient_result_note: "Ausgewertet bei ({x}, {y}). ∇f zeigt in Richtung des steilsten lokalen Anstiegs von f.",
	tool_gradient_zero_mag: "∇f = 0 (kritischer Punkt — keine eindeutige Richtung)",
	tool_gradient_invalid_input: "Geben Sie endliche numerische Werte für x und y ein.",
	tool_gradient_how_title: "So berechnen Sie einen multivariablen Gradienten",
	tool_gradient_how_body:
		"Für ein Skalarfeld f(x,y) differenzieren Sie nach jeder Variablen bei fester anderer, stapeln die partiellen Ableitungen zu ∇f und setzen Ihren Punkt ein. Die Box zeigt feste Demo-Funktionen, damit Sie die Arithmetik prüfen können.",
	tool_gradient_how_item_1: "Wählen Sie eine Demo-Funktion und lesen Sie das symbolische ∇f darunter.",
	tool_gradient_how_item_2: "Geben Sie die Koordinaten (x, y) ein, an denen Sie den Vektor brauchen.",
	tool_gradient_how_item_3: "Klicken Sie auf ∇f auswerten.",
	tool_gradient_how_item_4: "Lesen Sie ∇f, die Rechnung je partieller Ableitung, den Betrag |∇f| und die Einheitsrichtung.",
	tool_gradient_why_choose_title: "Warum unseren Gradientenrechner — multivariable ∇f an einem Punkt nutzen",
	tool_gradient_why_choose_item_1: "Vier Demo-Funktionen mit fertigen symbolischen Partiellen — kein leeres symbolisches CAS.",
	tool_gradient_why_choose_item_2: "Die Rechnung je Komponente ist sichtbar — hilfreich zum Gegenprüfen von Hausaufgaben.",
	tool_gradient_why_choose_item_3: "Betrag und Einheitsvektor verbinden ∇f mit der Richtung des steilsten Anstiegs.",
	tool_gradient_why_choose_item_4: "Klarer Modellrahmen: ∇f der Analysis mehrerer Veränderlicher, nicht Steigung rise/run zwischen zwei Punkten.",
	tool_gradient_why_choose_item_5: "Läuft im Browser; es wird nichts hochgeladen.",
	tool_gradient_formula_title: "Formel des multivariablen Gradienten",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). Bei zwei Variablen: ∇f(x,y) = (∂f/∂x, ∂f/∂y). Die Richtung von ∇f ist steilster Anstieg; −∇f wird beim Gradientenabstieg genutzt.",
	tool_gradient_formula_item_1: "Bilden Sie ∂f/∂xᵢ für jede Variable und halten Sie die übrigen konstant.",
	tool_gradient_formula_item_2: "Setzen Sie die Komponenten zum Vektor ∇f zusammen.",
	tool_gradient_formula_item_3: "Werten Sie am Punkt aus. Beispiel: f=x²y+3y bei (1,2) → (4, 4).",
	tool_gradient_formula_item_4: "Betrag |∇f| = √(gx² + gy²). Beispiel: √(16+16) = √32 ≈ 5,6569.",
	tool_gradient_example_title: "Beispiel",
	tool_gradient_example:
		"Für f(x,y)=x²y+3y sind die Partiellen ∂f/∂x=2xy und ∂f/∂y=x²+3. Bei (1,2): ∂f/∂x=2·1·2=4, ∂f/∂y=1+3=4, also ∇f=(4,4). Der Betrag ist √32≈5,6569 und die Einheitsrichtung (4/√32, 4/√32)≈(0,7071, 0,7071). Wechseln Sie zur gleichen Stelle auf f=x²+y² und erhalten Sie ∇f=(2,4).",
	tool_gradient_usecases_title: "Wann Sie ihn nutzen",
	tool_gradient_usecase_1: "Partielle Ableitungen in Hausaufgaben prüfen, bevor Sie einen Optimierungsschritt einsetzen.",
	tool_gradient_usecase_2: "Gradientenabstieg erklären: jeder Schritt geht entgegen ∇loss an den aktuellen Parametern.",
	tool_gradient_usecase_3: "Physik- oder Feldintuition: ∇f zeigt, wo das Skalarfeld am schnellsten wächst.",
	tool_gradient_usecase_4: "Prüfen, ob ein Punkt kritisch ist (|∇f|=0) auf einer einfachen Demo-Fläche.",
	tool_gradient_faq_q1: "Was ist ein Gradient in der Analysis mehrerer Veränderlicher?",
	tool_gradient_faq_a1:
		"Der Gradient ∇f ist der Vektor der ersten partiellen Ableitungen. Er zeigt in Richtung des steilsten lokalen Anstiegs von f; seine Länge |∇f| misst, wie steil dieser Anstieg ist.",
	tool_gradient_faq_q2: "Wie berechne ich ∇f von Hand?",
	tool_gradient_faq_a2:
		"Differenzieren Sie nach jeder Variablen bei konstanten übrigen, setzen Sie die Komponenten zu einem Vektor zusammen und werten Sie am Punkt aus. Für f=x²y+3y ergibt das (2xy, x²+3).",
	tool_gradient_faq_q3: "Ist das derselbe „Gradient“ wie beim ML-Gradientenabstieg?",
	tool_gradient_faq_a3:
		"Dasselbe mathematische Objekt: ∇ einer skalaren Verlustfunktion. Abstiegsschritte gehen entgegen ∇loss. Diese Seite lehrt die Analysis-Definition an Demo-Funktionen — sie trainiert kein Modell.",
	tool_gradient_faq_q4: "Ist das ein Steigungsrechner zwischen zwei Punkten (rise/run)?",
	tool_gradient_faq_a4:
		"Nein. Die Geradensteigung zwischen zwei Punkten gehört zum Steigungs-Tool. Hier ist ∇f der Vektor der partiellen Ableitungen eines Skalarfeldes mit mehreren Variablen.",
	tool_gradient_faq_q5: "Was bedeutet |∇f| = 0?",
	tool_gradient_faq_a5:
		"Ein verschwindender Gradient ist ein kritischer Punkt: es gibt keine eindeutige Richtung steilsten Anstiegs. Versuchen Sie f=x²+y² bei (0,0): ∇f=(0,0).",
	tool_gradient_faq_q6: "Warum nur Demo-Funktionen?",
	tool_gradient_faq_a6:
		"Symbolisches Differenzieren beliebiger Ausdrücke braucht ein CAS. Feste Demos halten die Arithmetik nachprüfbar und die Seite auf die Definition von ∇f fokussiert.",
	tool_gradient_faq_q7: "Bogenmaß oder Grad für sin und cos?",
	tool_gradient_faq_a7:
		"Die Demo sin(x)+cos(y) verwendet Bogenmaß wie in der Standard-Analysis. cos(1)≈0,5403, nicht cos(1°).",
	tool_gradient_article:
		"Der Gradient einer multivariablen Skalarfunktion ist der Vektor ihrer ersten partiellen Ableitungen. Er zeigt in Richtung des steilsten lokalen Anstiegs und untermauert gradientenbasierte Optimierung.",
	tool_gradient_references: "Wikipedia- und Khan-Academy-Quellen zum multivariablen Gradienten.",
	tool_gradient_ref_wiki_label: "Wikipedia — Gradient",
	tool_gradient_ref_khan_label: "Khan Academy — The gradient",
};

export default de;
