/**
 * i18n tool shard (how-to-calculate-concrete / de).
 * Deutsch: Betonrechner / Volumen — eigenständige Umschreibung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_concrete_title: 'Betonrechner — Betonvolumen schätzen',
	tool_concrete_description:
		'Schätzen Sie das Betonvolumen für Platte, Säule oder Zylinder aus Länge, Breite und Dicke (oder Durchmesser und Höhe). Beispiel: Platte 5 m × 4 m × 0.1 m → 2.0 m³. Optionaler Sackbedarf mit 0.015 m³ (oder 0.45 ft³) pro Sack — Annahme auf der Seite ausgewiesen. Läuft im Browser; Zahlen bleiben auf dem Gerät und werden nicht an einen Server hochgeladen.',
	tool_concrete_article:
		'Dieser Rechner schätzt das Gießvolumen mit einfacher Geometrie. Wählen Sie Platte, rechteckige Säule oder Zylinder, geben Sie positive Maße in Metern oder Fuß ein und lesen Sie m³ oder ft³. Säcke sind optional und hängen vom unter dem Ergebnis dokumentierten Sackvolumen ab.',
	tool_concrete_calculate: 'Berechnen',
	tool_concrete_sample: 'Beispiel',
	tool_concrete_clear: 'Löschen',
	tool_concrete_shape_label: 'Form',
	tool_concrete_shape_slab: 'Platte',
	tool_concrete_shape_column: 'Säule',
	tool_concrete_shape_cylinder: 'Zylinder',
	tool_concrete_unit_label: 'Einheiten',
	tool_concrete_unit_m: 'Meter (m)',
	tool_concrete_unit_ft: 'Fuß (ft)',
	tool_concrete_length_label: 'Länge',
	tool_concrete_width_label: 'Breite',
	tool_concrete_thickness_label: 'Dicke',
	tool_concrete_height_label: 'Höhe',
	tool_concrete_diameter_label: 'Durchmesser',
	tool_concrete_length_ph: 'z. B. 5',
	tool_concrete_width_ph: 'z. B. 4',
	tool_concrete_thickness_ph: 'z. B. 0.1',
	tool_concrete_height_ph: 'z. B. 2.4',
	tool_concrete_diameter_ph: 'z. B. 0.3',
	tool_concrete_bags_check: 'Sackzahl schätzen (optional)',
	tool_concrete_result_volume: 'Volumen',
	tool_concrete_result_bags: 'Säcke (ca.)',
	tool_concrete_bags_note:
		'Sack-Annahme: 0.015 m³ pro Sack im metrischen Modus bzw. 0.45 ft³ in Fuß. Reale Sackgrößen variieren nach Marke und Mischung — aufrunden und beim Lieferanten prüfen.',
	tool_concrete_err_dims: 'Geben Sie für jede Abmessung positive Zahlen ein.',
	tool_concrete_how_title: 'So funktioniert es',
	tool_concrete_how_body:
		'Form und Einheitensystem wählen, dann Maße eingeben. Platte und rechteckige Säule: Länge × Breite × Dicke (bzw. Höhe); Zylinder: π × (Durchmesser/2)² × Höhe. Bei aktivierter Sackschätzung wird das Volumen durch die dokumentierte Sackgröße geteilt und aufgerundet. Alles im Browser-Tab; nichts wird an einen Server hochgeladen.',
	tool_concrete_formula_title: 'Formeln und Annahmen',
	tool_concrete_formula_body: 'Volumina nutzen geschlossene geometrische Körper:',
	tool_concrete_formula_item_1: 'Platte: V = Länge × Breite × Dicke.',
	tool_concrete_formula_item_2: 'Rechteckige Säule: V = Länge × Breite × Höhe.',
	tool_concrete_formula_item_3:
		'Zylinder: V = π × (Durchmesser ÷ 2)² × Höhe. Säcke = ceil(V ÷ Sackvolumen) mit 0.015 m³ oder 0.45 ft³.',
	tool_concrete_example_title: 'Beispiel',
	tool_concrete_example:
		'Beispiel (Platte, Meter): 5 m × 4 m × 0.1 m → V = 2.0 m³. Bei 0.015 m³/Sack → ≈ 134 Säcke.',
	tool_concrete_usecases_title: 'Wann sinnvoll',
	tool_concrete_usecase_1: 'Grobe Bestellung einer Terrassen- oder Garagenplatte vor dem Fertigbetonwerk.',
	tool_concrete_usecase_2: 'Sackbeton für Zaunpfosten oder kleine zylindrische Fundamente dimensionieren.',
	tool_concrete_usecase_3: 'Angebote anhand einfacher L×B×D-Geometrie gegenprüfen.',
	tool_concrete_faq_q1: 'Welche Formel nutzt der Plattenmodus?',
	tool_concrete_faq_a1: 'Plattenvolumen = Länge × Breite × Dicke. Das Beispiel 5 × 4 × 0.1 m ergibt 2.0 m³.',
	tool_concrete_faq_q2: 'Wie werden Säcke berechnet?',
	tool_concrete_faq_a2:
		'Säcke = ceil(Volumen ÷ Sackvolumen). Metrisch 0.015 m³; Fuß 0.45 ft³. Planungsannahme, kein Markenetikett.',
	tool_concrete_faq_q3: 'Zylinder: Radius oder Durchmesser?',
	tool_concrete_faq_a3: 'Außendurchmesser eingeben; Radius = Durchmesser ÷ 2 in V = π r² h.',
	tool_concrete_faq_q4: 'Werden meine Zahlen hochgeladen?',
	tool_concrete_faq_a4:
		'Nein. Die Berechnung läuft im Browser auf Ihrem Gerät und wird nicht an einen Server hochgeladen.',
	tool_concrete_references: 'NIST SP 811 Umrechnungsfaktoren; Einführung der Portland Cement Association.',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811 (Einheitenumrechnung)',
	tool_concrete_ref_pca_label: 'Portland Cement Association — Über Beton lernen',
};

export default de;
