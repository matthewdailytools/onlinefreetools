/**
 * i18n tool shard (measuring-magnetic-fields / de).
 * Suche: Magnetfeld messen / Feldstärke / Gauss eines Magneten.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_measuring_magnetic_fields_title: 'Magnetfeld messen — Feldstärke-Rechner',
	tool_measuring_magnetic_fields_description:
		'Magnetfeld messen: Hall-Sonde oder Gaussmeter ablesen und die Feldstärke umrechnen. Beispiel: 200 G → 0,02 T. Gauss eines Magneten mit einer Größenordnungstabelle vergleichen oder das axiale Feld eines Stabmagneten schätzen. Die Berechnung läuft im Browser; Zahlen werden nicht auf einen Server hochgeladen.',
	tool_measuring_magnetic_fields_article:
		'Zuerst Gerät und Sondenlage, dann die Einheit. Die Geometrie-Schätzung ersetzt kein kalibriertes Messgerät und liefert keine Abreißkraft in Kilogramm.',
	tool_measuring_magnetic_fields_calculate: 'Umrechnen',
	tool_measuring_magnetic_fields_sample: 'Beispiel laden',
	tool_measuring_magnetic_fields_clear: 'Leeren',
	tool_measuring_magnetic_fields_estimate: 'Feld schätzen',
	tool_measuring_magnetic_fields_convert_heading: 'Messwert umrechnen',
	tool_measuring_magnetic_fields_estimate_heading: 'Optional: Feld eines Magneten schätzen',
	tool_measuring_magnetic_fields_value_label: 'Messwert',
	tool_measuring_magnetic_fields_value_ph: 'z. B. 200',
	tool_measuring_magnetic_fields_unit_label: 'Einheit am Gerät',
	tool_measuring_magnetic_fields_vacuum_label: 'H im Vakuum/in Luft zusätzlich zeigen (A/m und Oersted)',
	tool_measuring_magnetic_fields_result_t: 'Tesla (T)',
	tool_measuring_magnetic_fields_result_mt: 'Millitesla (mT)',
	tool_measuring_magnetic_fields_result_ut: 'Mikrotesla (µT)',
	tool_measuring_magnetic_fields_result_nt: 'Nanotesla (nT)',
	tool_measuring_magnetic_fields_result_g: 'Gauss (G)',
	tool_measuring_magnetic_fields_result_mg: 'Milligauss (mG)',
	tool_measuring_magnetic_fields_result_kg: 'Kilogauss (kG)',
	tool_measuring_magnetic_fields_earth_line: 'Etwa das {n}-fache des Erdfelds (~50 µT als Lehr-Mittelpunkt).',
	tool_measuring_magnetic_fields_result_h: 'H (A/m), Vakuum/Luft',
	tool_measuring_magnetic_fields_result_oe: 'Oersted (Oe), Vakuum/Luft',
	tool_measuring_magnetic_fields_result_note:
		'Feldformel: 1 T = 10⁴ G. Optionales H nutzt B = μ₀H nur im Vakuum/in Luft; B und H sind nicht dieselbe Größe.',
	tool_measuring_magnetic_fields_err_generic: 'Geben Sie einen endlichen, nicht negativen Messwert ein.',
	tool_measuring_magnetic_fields_err_negative: 'Diese Seite nimmt den Betrag; negative Werte werden abgelehnt.',
	tool_measuring_magnetic_fields_err_z: 'Der axiale Abstand z muss ≥ 0 sein (mm von der Fläche).',
	tool_measuring_magnetic_fields_err_grade: 'Wählen Sie eine N-Sorte aus der Liste (N35–N52).',
	tool_measuring_magnetic_fields_err_dims: 'Geben Sie endliche, positive Maße in Millimetern ein.',
	tool_measuring_magnetic_fields_grade_label: 'NdFeB-Sorte (Br-Mittelpunkt)',
	tool_measuring_magnetic_fields_shape_label: 'Form',
	tool_measuring_magnetic_fields_shape_disc: 'Scheibe / Zylinder',
	tool_measuring_magnetic_fields_shape_block: 'Block / Stabmagnet',
	tool_measuring_magnetic_fields_diam_label: 'Durchmesser (mm)',
	tool_measuring_magnetic_fields_thick_label: 'Dicke entlang der Achse (mm)',
	tool_measuring_magnetic_fields_len_label: 'Länge der Fläche (mm)',
	tool_measuring_magnetic_fields_width_label: 'Breite der Fläche (mm)',
	tool_measuring_magnetic_fields_z_label: 'Abstand von der Fläche z (mm)',
	tool_measuring_magnetic_fields_estimate_out_t: 'Axiales B (T)',
	tool_measuring_magnetic_fields_estimate_out_g: 'Axiales B (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'Gleichmäßige axiale Magnetisierung und Scheibenformel (Block mit Ersatzradius). Der Gradient nahe der Fläche ist steil: kein kalibriertes Gaussmeter und keine Abreißkraft in kg.',
	tool_measuring_magnetic_fields_chart_title: 'Magnet-Feldstärketabelle (Größenordnungen)',
	tool_measuring_magnetic_fields_chart_col_source: 'Quelle',
	tool_measuring_magnetic_fields_chart_col_b: 'Typisches B',
	tool_measuring_magnetic_fields_chart_earth: 'Erdmagnetfeld (Kontrolle schwacher Felder)',
	tool_measuring_magnetic_fields_chart_earth_b: '~25–65 µT (hier ~50 µT als Mitte)',
	tool_measuring_magnetic_fields_chart_fridge: 'Kühlschrankmagnet / schwacher Magnet (Gauss)',
	tool_measuring_magnetic_fields_chart_fridge_b: '~5–50 mT (~50–500 G) nahe der Fläche',
	tool_measuring_magnetic_fields_chart_ndfeb: 'NdFeB-Oberfläche (Feld eines Magneten)',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '~0,2–0,6 T typisch nahe der Fläche — keine Kraft in kg',
	tool_measuring_magnetic_fields_chart_mri: 'MRT (nur Größenordnung)',
	tool_measuring_magnetic_fields_chart_mri_b: '~1,5–3 T — keine Gerätespezifikation und keine Sicherheitsaussage',
	tool_measuring_magnetic_fields_how_title: 'So misst man ein Magnetfeld',
	tool_measuring_magnetic_fields_how_body:
		'Gerät wählen, Sonde setzen, Einheit ablesen, dann umrechnen. Ein Stabmagnet-Schätzwert ist optional und ersetzt kein Messgerät.',
	tool_measuring_magnetic_fields_how_item_1:
		'Passendes Gerät: Gaussmeter oder Hall-Sonde für Magnete (mT–T); das Handy-Magnetometer nur für schwache Felder wie ~50 µT der Erde.',
	tool_measuring_magnetic_fields_how_item_2:
		'Sensor auf die gewünschte Achse setzen, Abstand zur Fläche notieren, Sättigung beachten (billige Sensoren gehen neben Neodym in den Anschlag).',
	tool_measuring_magnetic_fields_how_item_3: 'Zahl und Einheit am Gerät ablesen (Gauss oder Tesla).',
	tool_measuring_magnetic_fields_how_item_4:
		'Umrechnen und mit der Tabelle vergleichen. Beispiel laden setzt 200 G → 0,02 T.',
	tool_measuring_magnetic_fields_how_item_5:
		'Ohne Messgerät „Feld schätzen“ öffnen und das Feld von Scheibe oder Stab aus Sorte und Größe annähern — das ist eine Schätzung.',
	tool_measuring_magnetic_fields_formula_title: 'Magnetfeld-Formel',
	tool_measuring_magnetic_fields_formula_body:
		'Die Umrechnung läuft über das SI-Tesla. H erscheint nur, wenn Vakuum/Luft aktiv ist.',
	tool_measuring_magnetic_fields_formula_item_1:
		'Formel: 1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT; 1 G = 10⁻⁴ T; 1 kG = 0,1 T; 1 mG = 10⁻⁷ T.',
	tool_measuring_magnetic_fields_formula_item_2:
		'Feldstärke H (Vakuum/Luft): B(T) = μ₀ H(A/m), μ₀ = 4π×10⁻⁷ N·A⁻². 1 Oe ≈ 79,577 A/m; 1 G entspricht 1 Oe nur in dieser Näherung. B und H sind nicht dieselbe physikalische Größe.',
	tool_measuring_magnetic_fields_formula_item_3:
		'Scheibe (gleichmäßige axiale Magnetisierung): B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)] in Metern. Der Block nutzt R = √(Länge×Breite der Fläche / π); das ist kein Finite-Elemente-Modell.',
	tool_measuring_magnetic_fields_formula_item_4:
		'Der Fluss Φ = B A gilt nur bei homogenem, senkrechtem B — diese Seite gibt B aus, nicht Φ. Die Schätzung nutzt Rest-Br, keinen vollständigen Momentenlöser. N-Sorten-Br sind Intervallmitten.',
	tool_measuring_magnetic_fields_example_title: 'Beispiel',
	tool_measuring_magnetic_fields_example:
		'Beispiel: Die Hall-Sonde zeigt 200 G. Umrechnen → 0,02 T = 20 mT = 2×10⁴ µT = 200 G, etwa 400× das Erdfeld ~50 µT. Dieser Gauss-Wert liegt zwischen Kühlschrankmagnet und starker NdFeB-Fläche.',
	tool_measuring_magnetic_fields_usecases_title: 'Wann das hilft',
	tool_measuring_magnetic_fields_usecase_1:
		'Laborheft: Das Gaussmeter zeigt 200 G, der Bericht will Tesla (Magnetfeld messen / Feldstärke).',
	tool_measuring_magnetic_fields_usecase_2:
		'Gauss eines Magneten: Ablesung mit der Tabelle vergleichen, damit eine Handy-Sättigung nicht als Oberflächenfeld gilt.',
	tool_measuring_magnetic_fields_usecase_3:
		'Feld eines Stabmagneten: axiales B aus Sorte und Größe schätzen — nicht die Kraft zwischen zwei Magneten.',
	tool_measuring_magnetic_fields_faq_q1: 'Wie misst man ein Magnetfeld?',
	tool_measuring_magnetic_fields_faq_a1:
		'Für Magnete Hall-Sonde oder Gaussmeter (mT–T). Sonde auf die Achse, Abstand notieren, Messbereich einhalten — das Handy-Magnetometer sättigt neben Neodym. Einheit ablesen, dann hier umrechnen (Beispiel: 200 G → 0,02 T). Ein Kraftmesser in Newton ist eine andere Aufgabe.',
	tool_measuring_magnetic_fields_faq_q2: 'Was ist die Magnetfeld- / Feldstärkeformel?',
	tool_measuring_magnetic_fields_faq_a2:
		'B-Umrechnung: 1 T = 10⁴ G. Im Vakuum oder in Luft folgt H aus B = μ₀H; 1 G ≈ 1 Oe nur in dieser Näherung. Der Fluss Φ = BA wird hier nicht berechnet.',
	tool_measuring_magnetic_fields_faq_q3: 'Gauss eines Magneten gegenüber der Feldstärketabelle?',
	tool_measuring_magnetic_fields_faq_a3:
		'Gauss ist B in dieser Einheit. Die Tabelle sind Größenordnungen (Erde, Kühlschrank, NdFeB), keine Laden-Abreißkraft in kg.',
	tool_measuring_magnetic_fields_faq_q4: 'Ist Magnetkraft dasselbe wie Magnetfeld?',
	tool_measuring_magnetic_fields_faq_a4:
		'Nein. Diese Seite rechnet und schätzt B. Kraft (zwischen zwei Magneten oder F = qvB) ist eine andere Rechnung und wird nicht gelöst.',
	tool_measuring_magnetic_fields_faq_q5: 'Kann ich Feldlinien oder ein homogenes Feld zeichnen?',
	tool_measuring_magnetic_fields_faq_a5:
		'Kein interaktives Diagramm. Qualitativ fällt axiales B eines Stabmagneten mit dem Abstand. Ein homogenes Feld ist eine Idealisierung; Kühlschrank- und Scheibenmagnete sind stark inhomogen.',
	tool_measuring_magnetic_fields_disclaimer:
		'Ergebnisse sind Lehr-Umrechnungen und Geometrie-Schätzungen, keine kalibrierte Messung und kein medizinischer, Implantat- oder MRT-Sicherheitshinweis.',
	tool_measuring_magnetic_fields_references:
		'BIPM-SI-Broschüre (Tesla); NIST CODATA μ₀; NOAA-Geomagnetismus-FAQ für die Größenordnung des Erdfelds.',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — SI-Broschüre (Tesla)',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — magnetische Vakuumpermeabilität μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — Geomagnetismus-FAQ',
};

export default de;
