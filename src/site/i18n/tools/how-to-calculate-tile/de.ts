/**
 * i18n tool shard (how-to-calculate-tile / de).
 * Eigenständige deutsche Lokalisierung: Fliesenrechner / Fliesenmenge.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_tile_title: 'Fliesenrechner — Fliesenmenge schätzen',
	tool_tile_description:
		'Schätzen Sie den Fliesenbedarf aus der Raumfläche in m² (oder Länge × Breite), der Fliesengröße in cm und dem Verschnittanteil (Standard 10 %). Beispiel: Raum 12 m², Fliesen 30×30 cm, 10 % Verschnitt → 147 Stück (aufrunden). Die Rechnung läuft im Browser; Zahlen bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_tile_article:
		'Wandelt Raumfläche und Einzelgröße in eine Einkaufsmenge um. Geben Sie die Fläche oder die Maße in Metern ein, die Fliese in Zentimetern und den Verschnitt. Das Ergebnis wird aufgerundet für Zuschnitte und Bruch.',
	tool_tile_calculate: 'Berechnen',
	tool_tile_sample: 'Beispiel',
	tool_tile_clear: 'Löschen',
	tool_tile_mode_label: 'Raumgröße eingeben',
	tool_tile_mode_area: 'Fläche (m²)',
	tool_tile_mode_lw: 'Länge × Breite',
	tool_tile_area_label: 'Raumfläche (m²)',
	tool_tile_area_ph: 'z. B. 12',
	tool_tile_room_l_label: 'Raumlänge (m)',
	tool_tile_room_w_label: 'Raumbreite (m)',
	tool_tile_room_l_ph: 'z. B. 4',
	tool_tile_room_w_ph: 'z. B. 3',
	tool_tile_tile_l_label: 'Fliesenlänge (cm)',
	tool_tile_tile_w_label: 'Fliesenbreite (cm)',
	tool_tile_tile_l_ph: 'z. B. 30',
	tool_tile_tile_w_ph: 'z. B. 30',
	tool_tile_waste_label: 'Verschnitt (%)',
	tool_tile_waste_ph: 'z. B. 10',
	tool_tile_waste_hint: 'Standard 10 % für Zuschnitte und etwas Bruch; bei Diagonalverlegung höher ansetzen.',
	tool_tile_result_tiles: 'Benötigte Fliesen',
	tool_tile_result_area: 'Verwendete Raumfläche',
	tool_tile_result_tile_area: 'Fläche pro Fliese',
	tool_tile_err_input: 'Geben Sie eine positive Fläche (oder Länge und Breite), positive Fliesenmaße und Verschnitt ≥ 0 ein.',
	tool_tile_how_title: 'So funktioniert es',
	tool_tile_how_body:
		'Wählen Sie Fläche oder Länge × Breite, tragen Sie cm-Maße und Verschnitt ein. Die Fliese wird in m² umgerechnet, die Fläche mit (1 + Verschnitt/100) multipliziert, geteilt und aufgerundet. Alles bleibt im Browser-Tab; nichts geht an einen Server.',
	tool_tile_formula_title: 'Formel und Annahmen',
	tool_tile_formula_body: 'Die Menge ergibt sich aus Raumfläche, Einzelfläche und Verschnitt:',
	tool_tile_formula_item_1: 'Raumfläche A = direkte m² oder Länge × Breite in Metern.',
	tool_tile_formula_item_2: 'Fliesenfläche a = (Länge_cm ÷ 100) × (Breite_cm ÷ 100) in m².',
	tool_tile_formula_item_3: 'Fliesen = ceil(A × (1 + Verschnitt% ÷ 100) ÷ a). Standard-Verschnitt: 10 %.',
	tool_tile_example_title: 'Beispiel',
	tool_tile_example:
		'Beispiel: Raum 12 m², Fliesen 30×30 cm, Verschnitt 10 %. Eine Fliese ist 0,09 m². Mit Verschnitt 12 × 1,10 = 13,2 m². Fliesen = ceil(13,2 ÷ 0,09) = 147.',
	tool_tile_usecases_title: 'Typische Einsatzfälle',
	tool_tile_usecase_1: 'Bodenfliesen für Bad oder Küche vor dem Einkauf grob bestellen.',
	tool_tile_usecase_2: 'Ein Wandfliesen-Angebot mit Fläche und Verschnitt gegenrechnen.',
	tool_tile_usecase_3: '30×30 cm mit größeren Formaten vergleichen, indem Sie nur die Fliesengröße ändern.',
	tool_tile_faq_q1: 'Warum wird aufgerundet?',
	tool_tile_faq_a1: 'Bruchstücke kann man nicht kaufen. Aufrunden entspricht dem realen Einkauf nach Zuschnitt und Bruch.',
	tool_tile_faq_q2: 'Was bedeutet der Verschnittanteil?',
	tool_tile_faq_a2: 'Extrafläche für Zuschnitte, Musterpassung und Bruch. Standard ist 10 %; bei Diagonal oft mehr.',
	tool_tile_faq_q3: 'Fläche oder Länge × Breite?',
	tool_tile_faq_a3: 'Beides geht. Nutzen Sie die Fläche, wenn Sie die m² kennen; sonst Länge × Breite in Metern.',
	tool_tile_faq_q4: 'Werden meine Zahlen hochgeladen?',
	tool_tile_faq_a4: 'Nein. Die Berechnung läuft im Browser auf Ihrem Gerät, ohne Server-Upload.',
	tool_tile_references:
		'Umrechnungsfaktoren NIST SP 811; TCNA-Hinweise zu Verlegung und Verschnittplanung.',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811 (Einheitenumrechnung)',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default de;
