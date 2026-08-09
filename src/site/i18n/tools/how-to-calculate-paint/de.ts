/**
 * i18n tool shard (how-to-calculate-paint / de).
 * German rewrite for Suche «Farbrechner / Farbmenge».
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_paint_title: 'Farbrechner — Farbbedarf schätzen',
	tool_paint_description:
		'Schätzen Sie Lack-/Farbliter aus Wandfläche in m² (oder Länge × Höhe × Wände), Anstrichen und Ergiebigkeit in m²/L (Standard 10). Beispiel: 40 m², 2 Anstriche, 10 m²/L → 8 L. Optionale Dosenanzahl nimmt 3,78 L pro Dose an. Berechnung im Browser; Zahlen bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_paint_article:
		'Wandfläche und Produkt-Ergiebigkeit werden vor dem Kauf in Liter umgerechnet. Fläche direkt eingeben oder aus Länge, Höhe und Wandanzahl bilden.',
	tool_paint_calculate: 'Berechnen',
	tool_paint_sample: 'Beispiel',
	tool_paint_clear: 'Löschen',
	tool_paint_mode_label: 'Wandeingabe',
	tool_paint_mode_area: 'Fläche (m²)',
	tool_paint_mode_lhw: 'Länge × Höhe × Wände',
	tool_paint_area_label: 'Wandfläche (m²)',
	tool_paint_area_ph: 'z. B. 40',
	tool_paint_len_label: 'Wandlänge (m)',
	tool_paint_height_label: 'Wandhöhe (m)',
	tool_paint_walls_label: 'Anzahl Wände',
	tool_paint_len_ph: 'z. B. 5',
	tool_paint_height_ph: 'z. B. 2.5',
	tool_paint_walls_ph: 'z. B. 4',
	tool_paint_coats_label: 'Anstriche',
	tool_paint_coats_ph: 'z. B. 2',
	tool_paint_coverage_label: 'Ergiebigkeit (m²/L)',
	tool_paint_coverage_ph: 'z. B. 10',
	tool_paint_coverage_hint: '10 m²/L ist ein Planungsstart; prüfen Sie das Etikett.',
	tool_paint_cans_label: 'Auch Dosen anzeigen (je 3,78 L)',
	tool_paint_result_liters: 'Benötigte Farbe',
	tool_paint_result_area: 'Verwendete Wandfläche',
	tool_paint_result_cans: 'Dosen (3,78 L)',
	tool_paint_err_input: 'Geben Sie eine positive Fläche (oder Länge, Höhe und Wände), positive Anstriche und Ergiebigkeit ein.',
	tool_paint_how_title: 'So funktioniert’s',
	tool_paint_how_body:
		'Fläche oder Länge × Höhe × Wände wählen, Anstriche und Ergiebigkeit eingeben. Liter = Fläche × Anstriche ÷ Ergiebigkeit. Mit Dosen: Division durch 3,78 und Aufrunden. Alles im Browser-Tab; kein Server-Upload.',
	tool_paint_formula_title: 'Formel und Annahmen',
	tool_paint_formula_body: 'Das Volumen nutzt Fläche, Anstriche und Etikett-Ergiebigkeit:',
	tool_paint_formula_item_1: 'Fläche A = direkte m² oder Länge × Höhe × Wandanzahl (Meter).',
	tool_paint_formula_item_2: 'Liter = A × Anstriche ÷ Ergiebigkeit (m²/L). Standard 10.',
	tool_paint_formula_item_3: 'Optionale Dosen = ceil(Liter ÷ 3,78). 3,78 L ≈ 1 US-Gallon — nur Annahme.',
	tool_paint_example_title: 'Beispiel',
	tool_paint_example:
		'Beispiel: 40 m², 2 Anstriche, 10 m²/L. Liter = 40 × 2 ÷ 10 = 8 L. Bei 3,78-L-Dosen → ceil(8 ÷ 3,78) = 3.',
	tool_paint_usecases_title: 'Wann sinnvoll',
	tool_paint_usecase_1: 'Innenwandfarbe vor dem Einkauf grob bemessen.',
	tool_paint_usecase_2: 'Ein- vs. Zweifachanstrich durch Ändern der Anstrichzahl vergleichen.',
	tool_paint_usecase_3: 'Angebote mit einfacher Flächen- und Ergiebigkeitrechnung gegenprüfen.',
	tool_paint_faq_q1: 'Was bedeutet Ergiebigkeit m²/L?',
	tool_paint_faq_a1: 'Wie viele Quadratmeter ein Liter pro Anstrich deckt. Der Wert 10 ist ein Start; das Etikett hat Vorrang.',
	tool_paint_faq_q2: 'Kann ich Länge × Höhe × Wände nutzen?',
	tool_paint_faq_a2: 'Ja. Wenn die m² unbekannt sind, bilden Sie die Fläche aus Maßen und Wandanzahl auf derselben Seite.',
	tool_paint_faq_q3: 'Warum 3,78 L pro Dose?',
	tool_paint_faq_a3: 'Annäherung an 1 US-Gallon. Hilft bei ganzen Dosen; keine Garantie für jede Markenpackung.',
	tool_paint_faq_q4: 'Werden meine Zahlen hochgeladen?',
	tool_paint_faq_a4: 'Nein. Die Berechnung läuft im Browser auf Ihrem Gerät, ohne Server-Upload.',
	tool_paint_references: 'NIST SP 811 zu Längen- und Flächenumrechnungen.',
	tool_paint_ref_nist_label: 'NIST — Special Publication 811 (Einheitenumrechnung)',
};

export default de;
