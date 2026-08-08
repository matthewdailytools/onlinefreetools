/**
 * i18n tool shard (unit-converter / de).
 * Deutsch: Einheitenumrechner — eigenständige Lokalisierung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_unit_converter_title: 'Einheitenumrechner — Länge / Masse / Temperatur / Fläche / Volumen / Geschwindigkeit',
	tool_unit_converter_description:
		'Rechnen Sie Länge, Masse, Temperatur, Fläche, Volumen und Geschwindigkeit auf einer Seite mit klaren Faktoren um. Beispiel: 1 Meile → 1,60934 km. Im Browser; Bildungsfaktoren — kein Vermessungsgerät und kein Medizinprodukt.',
	tool_unit_converter_article:
		'Ein Umrechnungs-Hub hält gängige Kategorien auf einer URL, damit nicht jedes Paar (cm↔Zoll) eine eigene Seite braucht. Flächen aus Länge×Breite bleiben beim Square-Feet-Tool.',
	tool_unit_converter_calculate: 'Umrechnen',
	tool_unit_converter_sample: 'Beispiel laden',
	tool_unit_converter_clear: 'Leeren',
	tool_unit_converter_value_label: 'Wert',
	tool_unit_converter_value_ph: 'z. B. 1',
	tool_unit_converter_from_label: 'Von Einheit',
	tool_unit_converter_to_label: 'Nach Einheit',
	tool_unit_converter_category_label: 'Kategorie',
	tool_unit_converter_cat_length: 'Länge',
	tool_unit_converter_cat_mass: 'Masse',
	tool_unit_converter_cat_temperature: 'Temperatur',
	tool_unit_converter_cat_area: 'Fläche',
	tool_unit_converter_cat_volume: 'Volumen',
	tool_unit_converter_cat_speed: 'Geschwindigkeit',
	tool_unit_converter_result_label: 'Ergebnis',
	tool_unit_converter_result_note: 'Nur Bildungs-Umrechnung — keine zertifizierte Messung.',
	tool_unit_converter_err_value: 'Bitte eine endliche Zahl eingeben.',
	tool_unit_converter_err_temp: 'Temperatur unter dem absoluten Nullpunkt der gewählten Skala.',
	tool_unit_converter_how_title: 'So funktioniert es',
	tool_unit_converter_how_body:
		'Kategorie wählen, Wert und Von/Nach-Einheiten setzen. Kategorien bleiben hier; Fläche aus L×B auf square-feet.',
	tool_unit_converter_formula_title: 'Faktoren und Temperaturformeln',
	tool_unit_converter_formula_body:
		'Lineare Kategorien laufen über eine SI-Basiseinheit. Temperatur nutzt Skalenformeln. Annahmen:',
	tool_unit_converter_formula_item_1: 'SI-/übliche Faktoren (z. B. 1 mi = 1609,344 m; US-Gallon beim Volumen).',
	tool_unit_converter_formula_item_2: '°C ↔ °F ↔ K: F = C×9/5+32; K = C+273,15; entsprechend umgekehrt.',
	tool_unit_converter_formula_item_3: 'Ergebnisse sind Bildungsbeispiele, keine zertifizierten Labormessungen.',
	tool_unit_converter_example_title: 'Beispiel',
	tool_unit_converter_example: 'Beispiel (Länge): 1 Meile → 1,60934 km. Temperatur: 0 °C → 32 °F.',
	tool_unit_converter_usecases_title: 'Wann sinnvoll',
	tool_unit_converter_usecase_1: 'Hausaufgaben: km und Meilen ohne neue Seite pro Paar.',
	tool_unit_converter_usecase_2: 'Schnelle Massen-/Volumenchecks beim Kochen oder Packen.',
	tool_unit_converter_usecase_3: 'Temperaturskalen für Wetterskizzen — nicht für Medikamentendosen.',
	tool_unit_converter_faq_q1: 'Warum keine Seite pro Einheitenpaar?',
	tool_unit_converter_faq_a1:
		'Hunderte nahezu doppelter URLs wirken doorway-artig. Dieser Hub deckt gängige Paare ab; square-feet für L×B.',
	tool_unit_converter_faq_q2: 'Welche Meilen- und Gallonendefinition?',
	tool_unit_converter_faq_a2: 'Internationale Meile (1609,344 m) und US-Flüssigkeitsgallone (3,785411784 L).',
	tool_unit_converter_faq_q3: 'Wie wird Temperatur umgerechnet?',
	tool_unit_converter_faq_a3: 'Über °C: F = C×9/5+32 und K = C+273,15. Unter absolutem Nullpunkt abgelehnt.',
	tool_unit_converter_faq_q4: 'Gleich wie das Square-Feet-Tool?',
	tool_unit_converter_faq_a4: 'Nein. Hier: Flächeneinheiten direkt. Square-feet: Fläche aus Länge×Breite.',
	tool_unit_converter_disclaimer:
		'Ergebnisse sind Bildungsillustrationen mit Standardfaktoren. Keine zertifizierten Messungen und keine Vermessungs-, Ingenieur- oder Medizinberatung.',
	tool_unit_converter_references: 'NIST-SI-Beziehungen; übliche Faktoren; °C/°F/K-Formeln.',
	tool_unit_converter_ref_nist_label: 'NIST — SI-Einheiten',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default de;
