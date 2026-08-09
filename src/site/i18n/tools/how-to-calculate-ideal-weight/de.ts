/**
 * i18n tool shard (how-to-calculate-ideal-weight / de).
 * Eigenständige Neufassung laut 03-Brief (Idealgewicht); keine englische 1:1-Übersetzung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_ideal_weight_title: 'Idealgewicht-Rechner — Gewichtsspanne schätzen',
	tool_ideal_weight_description:
		'Schätzen Sie das Idealgewicht (IBW) mit Devine, Robinson, Miller und Hamwi auf einer Seite. Beispiel: Mann 178 cm → Devine ≈ 73,2 kg (Spanne ≈ 70,4–75,2 kg). Berechnung im Browser; nur zur Orientierung — keine medizinische Beratung und keine Diagnose.',
	tool_ideal_weight_article:
		'Idealgewichtsformeln schätzen ein Referenzgewicht aus Größe und Geschlecht. Hier liegen Devine, Robinson, Miller und Hamwi nebeneinander zum Vergleich — mit klarem Hinweis, dass es keine Klinikempfehlung ist.',
	tool_ideal_weight_calculate: 'Berechnen',
	tool_ideal_weight_sample: 'Beispiel laden',
	tool_ideal_weight_clear: 'Leeren',
	tool_ideal_weight_sex_label: 'Geschlecht (Formeltabellen)',
	tool_ideal_weight_sex_male: 'Männlich',
	tool_ideal_weight_sex_female: 'Weiblich',
	tool_ideal_weight_height_label: 'Körpergröße (cm)',
	tool_ideal_weight_height_ph: 'z. B. 178',
	tool_ideal_weight_formula_label: 'Formelansicht',
	tool_ideal_weight_formula_all: 'Alle Formeln (Spanne)',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: 'Geschätztes Idealgewicht',
	tool_ideal_weight_result_range: 'Formelspanne',
	tool_ideal_weight_result_note: 'Nur Lernschätzung — keine medizinische Beratung und keine Diagnose.',
	tool_ideal_weight_err_height: 'Die Körpergröße muss größer als null sein.',
	tool_ideal_weight_err_short:
		'Diese IBW-Formeln sind unter etwa 152 cm (5 ft) schlecht definiert. Ergebnisse nur als Illustration lesen.',
	tool_ideal_weight_how_title: 'So funktioniert’s',
	tool_ideal_weight_how_body:
		'Geschlecht und Größe in Zentimetern eingeben. Das Tool rechnet für klassische IBW-Formeln in Zoll um und zeigt Kilogramm. Formeln hier vergleichen; BMI und Körperfett bleiben eigene Tools.',
	tool_ideal_weight_formula_title: 'Formeln und Annahmen',
	tool_ideal_weight_formula_body:
		'Umrechnung: 1 in = 2,54 cm. Über 60 in (5 ft): männlich Devine = 50 + 2,3×(in−60); weiblich = 45,5 + 2,3×(in−60). Robinson, Miller und Hamwi nutzen ähnliche lineare Formen mit anderen Koeffizienten. Bitte beachten:',
	tool_ideal_weight_formula_item_1: 'Abgeleitet für Erwachsenen-Dosierung/Referenz — keine persönlichen Zielgewichte.',
	tool_ideal_weight_formula_item_2: 'Körperbau, Muskelmasse und Schwangerschaft sind nicht modelliert.',
	tool_ideal_weight_formula_item_3: 'Ergebnisse sind Lehrillustrationen, keine klinischen Ziele und kein medizinischer Rat.',
	tool_ideal_weight_example_title: 'Beispiel',
	tool_ideal_weight_example:
		'Beispiel: Mann, 178 cm → Devine ≈ 73,2 kg; Robinson ≈ 71,1, Miller ≈ 70,4, Hamwi ≈ 75,2 (≈ 70,4–75,2 kg).',
	tool_ideal_weight_usecases_title: 'Wann sinnvoll',
	tool_ideal_weight_usecase_1: 'Unterricht: klassische IBW-Formeln mit einer Größe vergleichen.',
	tool_ideal_weight_usecase_2: 'Grobe Lernreferenz vor dem Gespräch mit Fachpersonal (kein Zielplan).',
	tool_ideal_weight_usecase_3: 'Devine vs. Robinson auf einer Seite sehen — ohne Extra-URLs.',
	tool_ideal_weight_faq_q1: 'Welche Idealgewichtsformel ist die „richtige“?',
	tool_ideal_weight_faq_a1:
		'Keine ist universell richtig. Devine ist in der Lehre üblich; Robinson, Miller und Hamwi unterscheiden sich in den Koeffizienten. Hier direkt vergleichen.',
	tool_ideal_weight_faq_q2: 'Ist das dasselbe wie BMI?',
	tool_ideal_weight_faq_a2:
		'Nein. BMI ist ein Verhältnis aus Gewicht und Größe. IBW schätzt ein Referenzgewicht nur aus Größe und Geschlecht.',
	tool_ideal_weight_faq_q3: 'Ist das medizinische Beratung?',
	tool_ideal_weight_faq_a3:
		'Nein. Zahlen sind nur Lernschätzungen — keine Diagnose, kein Behandlungsplan und keine Ernährungsvorschrift.',
	tool_ideal_weight_faq_q4: 'Warum Umrechnung in Zoll?',
	tool_ideal_weight_faq_a4:
		'Veröffentlichte Devine-ähnliche Gleichungen sind in Zoll über 5 Fuß definiert. Zentimeter werden vor der Formel umgerechnet.',
	tool_ideal_weight_disclaimer:
		'Idealgewichtsergebnisse sind nur Bildungsillustrationen und ersetzen keine medizinische Beratung, Diagnose oder klinische Einschätzung. Für Gesundheitsentscheidungen qualifiziertes Fachpersonal hinzuziehen.',
	tool_ideal_weight_references:
		'Klassische Devine/Robinson/Miller/Hamwi-IBW-Gleichungen; NCBI-Bookshelf-Kontext zu Dosierung/IBW.',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — Kontext Idealgewicht',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default de;
