/**
 * i18n tool shard (square-feet / de).
 * German (Sie-Form): Square Feet ↔ Quadratmeter, Raum L×B oder bekannte Fläche,
 * Rechenweg und NIST-Faktor; Dezimal-Komma in Beispielen (78,97 / 11,15 / 92,90).
 * Keys must stay in exact parity with en.ts for this slug.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Werkzeugtexte für slug square-feet (Sie-Anrede). */
const de: SiteLangDict = {
	tool_squarefeet_title: "Square Feet in Quadratmeter umrechnen — Raumfläche berechnen",
	tool_squarefeet_description:
		"Square Feet in m² umrechnen oder Raumfläche aus Länge × Breite berechnen. Prozess in Schritten: Maße oder bekannte Fläche eingeben, Formel mit NIST-Faktor 1 ft² = 0.09290304 m² anwenden. Beispiel: 850 sq ft ≈ 78,97 m²; Raum 10×12 ft = 120 ft² ≈ 11,15 m². Berechnung inkl. Rechenweg.",
	tool_squarefeet_calculate: "Berechnen",
	tool_squarefeet_sample: "Beispiel laden",
	tool_squarefeet_clear: "Leeren",
	tool_squarefeet_mode_label: "Was haben Sie?",
	tool_squarefeet_mode_dims: "Raumlänge und -breite",
	tool_squarefeet_mode_area: "Fläche ist schon bekannt",
	tool_squarefeet_dim_unit_label: "Längeneinheit",
	tool_squarefeet_unit_ft: "Fuß (ft)",
	tool_squarefeet_unit_m: "Meter (m)",
	tool_squarefeet_unit_in: "Zoll (in)",
	tool_squarefeet_length_label: "Länge",
	tool_squarefeet_length_placeholder: "z. B. 10",
	tool_squarefeet_width_label: "Breite",
	tool_squarefeet_width_placeholder: "z. B. 12",
	tool_squarefeet_area_label: "Fläche",
	tool_squarefeet_area_placeholder: "z. B. 850",
	tool_squarefeet_area_unit_label: "Flächeneinheit",
	tool_squarefeet_unit_sqft: "Quadratfuß (ft²)",
	tool_squarefeet_unit_sqm: "Quadratmeter (m²)",
	tool_squarefeet_sqft_label: "Quadratfuß",
	tool_squarefeet_sqm_label: "Quadratmeter",
	tool_squarefeet_work_label: "Rechenweg",
	tool_squarefeet_result_note:
		"Anzeige auf zwei Dezimalstellen gerundet. Exakter Faktor: 1 ft² = 0.09290304 m² (NIST / SI). Nur ebene Fläche — keine Wohn- vs. Bruttogrundfläche und keine Preisschätzung.",
	tool_squarefeet_invalid_input: "Bitte nur positive Zahlen eingeben.",
	tool_squarefeet_how_title: "So funktioniert es",
	tool_squarefeet_how_body:
		"Entweder Länge × Breite nach Umrechnung beider Seiten in Fuß multiplizieren, oder eine bekannte Fläche mit dem exakten SI-Faktor umrechnen. Sie erhalten immer ft² und m² plus den Rechenweg.",
	tool_squarefeet_how_item_1:
		"Wählen Sie Raumlänge und -breite, wenn Sie ausmessen, oder Fläche ist schon bekannt, wenn das Inserat bereits sq ft oder m² nennt.",
	tool_squarefeet_how_item_2:
		"Bei Maßen Fuß, Meter oder Zoll wählen und beide Seiten in derselben Einheit eingeben. Bei bekannter Fläche Zahl und Einheit (ft² oder m²) angeben.",
	tool_squarefeet_how_item_3: "Auf Berechnen klicken.",
	tool_squarefeet_how_item_4:
		"Beide Flächeneinheiten und den Rechenweg lesen, z. B. 10 × 12 = 120 ft² oder 850 ft² × 0.09290304 = 78,97 m².",
	tool_squarefeet_why_choose_title: "Warum unser Rechner Square Feet in Quadratmeter umrechnen — Raumfläche berechnen",
	tool_squarefeet_why_choose_item_1:
		"Exakter SI-Faktor 1 ft² = 0.09290304 m² (nicht 0,09 oder 0,093), wie in NIST SP 811.",
	tool_squarefeet_why_choose_item_2:
		"Zwei Modi decken die üblichen Suchen ab: Raummaße und bekannte Inseratsfläche wie 850 oder 1000 sq ft.",
	tool_squarefeet_why_choose_item_3:
		"Der Rechenweg bleibt sichtbar — Sie sehen, ob Zoll ÷ 12 oder Meter mit dem NIST-Faktor umgerechnet wurden.",
	tool_squarefeet_why_choose_item_4:
		"Klar begrenzt: keine Wohn- vs. Bruttogrundfläche und kein Immobilienpreis-Modell.",
	tool_squarefeet_why_choose_item_5: "Alles läuft im Browser; nichts wird auf einen Server hochgeladen.",
	tool_squarefeet_formula_title: "Formeln und Umrechnungsfaktor",
	tool_squarefeet_formula_body:
		"Fläche in Quadratfuß ist Länge × Breite, sobald beide Seiten in Fuß vorliegen. Quadratmeter folgen aus dem exakten Faktor darunter.",
	tool_squarefeet_formula_item_1: "Fuß: A_ft² = L × W. Beispiel: 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_2: "Meter: A_ft² = (L × W) ÷ 0.09290304. Beispiel: 3 m × 4 m = 12 m² ≈ 129,17 ft².",
	tool_squarefeet_formula_item_3: "Zoll: jede Seite zuerst ÷ 12. Beispiel: 120 in × 144 in → 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_4: "Exakt: 1 ft² = 0.09290304 m², also m² = ft² × 0.09290304 und ft² = m² ÷ 0.09290304.",
	tool_squarefeet_example_title: "Beispiel",
	tool_squarefeet_example:
		"Beispielraum: 10 ft × 12 ft. Rechenweg: 10 × 12 = 120 ft² → 120 × 0.09290304 ≈ 11,15 m². Bekannte Fläche: 850 sq ft × 0.09290304 ≈ 78,97 m² — sinnvoll, wenn ein US-Inserat mit lokalen m²-Anzeigen verglichen werden soll.",
	tool_squarefeet_usecases_title: "Wann das hilft",
	tool_squarefeet_usecase_1: "US-Inserat in sq ft mit lokalen Anzeigen in m² vergleichen.",
	tool_squarefeet_usecase_2: "Boden oder Teppich für einen rechteckigen Raum vor der Bestellung grob schätzen (Verschnitt separat).",
	tool_squarefeet_usecase_3: "Bekannte Größe wie 1000 sq ft umrechnen, wenn Pläne oder Angebote im Ausland in m² stehen.",
	tool_squarefeet_usecase_4: "Farbe oder Renovierung grob prüfen, wenn Zeichnungen Fuß und Meter mischen.",
	tool_squarefeet_faq_q1: "Wie rechne ich Square Feet in Quadratmeter um?",
	tool_squarefeet_faq_a1:
		"Mit 0.09290304 multiplizieren. Modus Fläche ist schon bekannt wählen, den sq-ft-Wert eingeben — der Rechenweg zeigt die Multiplikation.",
	tool_squarefeet_faq_q2: "Wie viele Quadratmeter hat 1 Quadratfuß?",
	tool_squarefeet_faq_a2:
		"Genau 0.09290304 m² (NIST / SI). Also 100 sq ft ≈ 9,29 m², 850 sq ft ≈ 78,97 m² und 1000 sq ft ≈ 92,90 m².",
	tool_squarefeet_faq_q3: "Unterscheidet das Wohnfläche und Bruttogrundfläche?",
	tool_squarefeet_faq_a3:
		"Nein. Es wandelt nur die ebene Rechteckfläche zwischen Einheiten. Inseratsdefinitionen (netto/brutto, Wohn-/Bruttofläche) liegen außerhalb dieses Tools.",
	tool_squarefeet_faq_q4: "Wie finde ich die Quadratfuß-Fläche eines Raums?",
	tool_squarefeet_faq_a4:
		"Länge und Breite in derselben Einheit messen und multiplizieren. In Fuß: 10 × 12 = 120 sq ft. In Zoll jede Seite zuerst durch 12 teilen.",
	tool_squarefeet_faq_q5: "Kann ich damit Immobilienpreise schätzen?",
	tool_squarefeet_faq_a5:
		"Nein. Flächenumrechnung ist keine Bewertung, Gutachten oder Preis-pro-Quadratfuß-Marktmodell.",
	tool_squarefeet_faq_q6: "Wie viel Verschnitt beim Bodenbelag einplanen?",
	tool_squarefeet_faq_a6:
		"Der Rechner liefert nur die Bodenfläche. Viele Verleger rechnen etwa 5–10 % für Zuschnitte und Fehler; prüfen Sie die Produktanleitung.",
	tool_squarefeet_faq_q7: "Und L-förmige Räume?",
	tool_squarefeet_faq_a7:
		"Form in Rechtecke teilen, jedes umrechnen und addieren. Unregelmäßige Polygone werden hier nicht modelliert.",
	tool_squarefeet_article: "Quadratfuß",
	tool_squarefeet_disclaimer:
		"Für Inserate und Renovierungsplanung. Kein Bewertungstool und keine Definition von Wohn- vs. Bruttogrundfläche.",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI); Wikipedia — Square foot.",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Leitfaden zum Internationalen Einheitensystem (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default de;
