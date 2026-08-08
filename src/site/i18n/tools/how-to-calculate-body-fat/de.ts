/**
 * i18n tool shard (how-to-calculate-body-fat / de).
 * Independent rewrite in German (not English skeleton); Navy/Army circumference, FAQ, YMYL.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_body_fat_title: 'Körperfett-Rechner — Anteil über Umfangsmaße schätzen',
	tool_body_fat_description:
		'Schätzen Sie den Körperfettanteil mit U.S.-Navy-Umfangsformeln (Army-Option auf derselben Seite). Beispiel: Mann, 178 cm Größe, Hals 40 cm, Taille 86 cm → ~15,3 %. Berechnung im Browser; nur zu Lernzwecken — keine medizinische Beratung oder Diagnose.',
	tool_body_fat_article:
		'Umfangsverfahren schätzen Körperfett aus Größe und Maßbandwerten. Navy und Army (DoD-Familie) teilen sich diese Bildungs-URL; Hautfalten werden in FAQ als andere Methode erklärt — ohne separate Seite.',
	tool_body_fat_calculate: 'Berechnen',
	tool_body_fat_sample: 'Beispiel laden',
	tool_body_fat_clear: 'Zurücksetzen',
	tool_body_fat_method_label: 'Methode',
	tool_body_fat_method_navy: 'U.S. Navy Umfangsmaße',
	tool_body_fat_method_army: 'U.S. Army / DoD-Stil Umfangsmaße',
	tool_body_fat_sex_label: 'Geschlecht (Formeltabellen)',
	tool_body_fat_sex_male: 'Mann',
	tool_body_fat_sex_female: 'Frau',
	tool_body_fat_height_label: 'Größe (cm)',
	tool_body_fat_height_ph: 'z. B. 178',
	tool_body_fat_neck_label: 'Halsumfang (cm)',
	tool_body_fat_neck_ph: 'z. B. 40',
	tool_body_fat_waist_label: 'Taillenumfang (cm)',
	tool_body_fat_waist_ph: 'z. B. 86',
	tool_body_fat_hip_label: 'Hüftumfang (cm, Frau)',
	tool_body_fat_hip_ph: 'z. B. 96',
	tool_body_fat_result_label: 'Geschätzter Körperfettanteil',
	tool_body_fat_result_note: 'Nur Bildungsschätzung — keine medizinische Beratung oder Diagnose.',
	tool_body_fat_err_input: 'Größe, Hals und Taille müssen positive Zahlen sein.',
	tool_body_fat_err_hip: 'Frauenformeln brauchen einen positiven Hüftumfang.',
	tool_body_fat_err_geom: 'Taille muss größer als Hals sein (bei Frauen auch Taille+Hüfte > Hals).',
	tool_body_fat_how_title: 'So funktioniert es',
	tool_body_fat_how_body:
		'Geben Sie Geschlecht, Größe und Maßbandwerte in Zentimetern ein. Das Tool rechnet in Zoll für die veröffentlichten log10-Umfangsformeln um und zeigt den geschätzten Körperfett-%. Hautfalten stehen in FAQ — dieselbe Seite.',
	tool_body_fat_formula_title: 'Formel und Messannahmen',
	tool_body_fat_formula_body:
		'Mann: %KF ≈ 86,010×log10(Taille−Hals) − 70,041×log10(Größe) + 36,387 (Zoll). Frau: %KF ≈ 163,205×log10(Taille+Hüfte−Hals) − 97,684×log10(Größe) + 78,387. Annahmen:',
	tool_body_fat_formula_item_1: 'Maßband an Standard-Navy/DoD-Punkten; Haltung und Kleidung ändern Ergebnisse.',
	tool_body_fat_formula_item_2: 'Eingabe in cm, Umrechnung 1 in = 2,54 cm vor den log10-Formeln.',
	tool_body_fat_formula_item_3: 'Schätzungen sind Bildungsbeispiele, keine DXA/Bod-Pod-Klinikwerte oder medizinische Beratung.',
	tool_body_fat_example_title: 'Beispiel',
	tool_body_fat_example:
		'Beispiel: Mann, Navy-Methode, Größe 178 cm, Hals 40 cm, Taille 86 cm → ~15,3 % Körperfett.',
	tool_body_fat_usecases_title: 'Wann nutzen',
	tool_body_fat_usecase_1: 'Unterricht: Navy-Umfangsformeln mit festen Zahlen üben.',
	tool_body_fat_usecase_2: 'Grobe Fitness-Illustration vor dem Gespräch mit Klinikern (keine Diagnose).',
	tool_body_fat_usecase_3: 'Navy- vs Army-Bezeichnungen auf einer Seite vergleichen, ohne zweite URL.',
	tool_body_fat_faq_q1: 'Welche Formel wird verwendet?',
	tool_body_fat_faq_a1:
		'U.S.-Navy-/DoD-Stil log10-Umfangsformeln in Zoll nach cm-Umrechnung.',
	tool_body_fat_faq_q2: 'Navy vs Army auf dieser Seite?',
	tool_body_fat_faq_a2:
		'Beides sind Umfangsschätzer derselben Familie. Bezeichnungen dienen der Suche; Messdisziplin zählt mehr als das Label.',
	tool_body_fat_faq_q3: 'Ist das medizinische Beratung?',
	tool_body_fat_faq_a3:
		'Nein. Ergebnisse sind Bildungsschätzungen, keine Diagnose, kein Behandlungsplan und kein klinischer Körperzusammensetzungstest.',
	tool_body_fat_faq_q4: 'Was ist mit Hautfalten?',
	tool_body_fat_faq_a4:
		'Hautfaltengleichungen brauchen mehrere Messpunkte und geschulte Technik. Hier in FAQ erklärt, nicht als separate Tool-URL.',
	tool_body_fat_disclaimer:
		'Körperfettschätzungen sind nur Bildungsillustrationen und ersetzen keine medizinische Beratung, Diagnose oder klinische Körperzusammensetzungstests. Wenden Sie sich für Gesundheitsentscheidungen an qualifizierte Fachkräfte.',
	tool_body_fat_references:
		'U.S.-Navy-/DoD-Umfangsmethoden-Gleichungen; ACE-Bildungsnotizen zu Körperfettrechnern; peer-reviewte Umfangsverfahren-Literatur.',
	tool_body_fat_ref_ace_label: 'ACE — Körperfett-Rechner (Bildung)',
	tool_body_fat_ref_pmc_label: 'PMC — Umfangsbasierte Körperfettmethoden',
};

export default de;
