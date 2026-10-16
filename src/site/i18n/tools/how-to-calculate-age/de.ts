/**
 * i18n-Tool-Shard (how-to-calculate-age / de).
 * Chronologisches Alter in Jahren/Monaten/Tagen + Gesamttage (UTC-Kalender).
 * Unabhängige DE-Neufassung — kein englisches Parallel-Gerüst.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche UI- und SEO-Texte für den Altersrechner. */
const de: SiteLangDict = {
	tool_age_title: "Altersrechner — Jahre Monate und Tage aus zwei Daten",
	tool_age_description: "Alter in Jahren, Monaten und Tagen aus Geburtsdatum und Stichtag berechnen (UTC-Kalendertage). Beispiel: geboren am 2000-01-01, Stichtag 2026-08-09 → 26 Jahre, 7 Monate, 8 Tage. Zeigt zusätzlich die ganzen Tage dazwischen. Nur Kalenderrechnung zu Lernzwecken — keine Rechtsberatung zum Alter.",
	tool_age_article: "Kalenderalter als Jahre, Monate und Resttage zwischen zwei Daten, plus Gesamttage, mit sichtbaren Leihschritten und einer Heute-Taste.",
	tool_age_desc: "Alter in J/M/T vom Geburtstag bis zum Stichtag. Inklusive Gesamttage.",

	tool_age_hint: "Kalenderdaten im Format JJJJ-MM-TT (UTC-Tagesgrenzen). Der Stichtag muss am oder nach dem Geburtstag liegen. Heute setzt den Stichtag auf das heutige UTC-Datum.",
	tool_age_birth_label: "Geburtsdatum",
	tool_age_asof_label: "Stichtag",
	tool_age_calculate: "Berechnen",
	tool_age_today: "Heute verwenden",
	tool_age_sample: "Beispiel laden",
	tool_age_clear: "Leeren",
	tool_age_ymdOut_label: "Alter",
	tool_age_yearsOut_label: "Jahre",
	tool_age_monthsOut_label: "Monate",
	tool_age_daysOut_label: "Tage",
	tool_age_totalDaysOut_label: "Ganze Tage gesamt",
	tool_age_steps_title: "Rechenschritte",
	tool_age_step_ymd_tpl: "Von {birth} bis {asof}: {y} Jahre, {m} Monate, {d} Tage nach Kalenderleihe.",
	tool_age_step_borrow_tpl: "Tagesleihe: Liegt der Stichtag-Tag vor dem Geburtstag im Monat, werden Tage aus dem Vormonat geborgt.",
	tool_age_step_total_tpl: "Ganze Tage = (Stichtag − Geburt) in UTC-Mitternachten ÷ 86400000 = {total}.",
	tool_age_result_note: "Nur UTC-Kalenderdaten — keine Uhrzeit und keine Zeitzonen für rechtliche Stichtage. Schalttage zählen, wenn sie im Intervall liegen. Nur Lernzweck — keine Auskunft zu Volljährigkeit oder Anspruch.",
	tool_age_err_generic: "Gültige Daten (JJJJ-MM-TT) eingeben. Der Stichtag muss am oder nach dem Geburtsdatum liegen.",

	tool_age_how_title: "So nutzen Sie den Altersrechner",
	tool_age_how_body: "Geburts- und Stichtag eintragen — oder Heute für den Stichtag — danach Berechnen. Beispiel laden wechselt zwischen 2000-01-01→2026-08-09, einem Schalttagsfall, Alter 0 am selben Tag und einer Jahresgrenze mit Leihschritt.",
	tool_age_how_item_1: "Geburtsdatum eintragen.",
	tool_age_how_item_2: "Stichtag eintragen oder Heute verwenden klicken.",
	tool_age_how_item_3: "Berechnen tippen: Jahre, Monate, Tage und Gesamttage erscheinen.",
	tool_age_how_item_4: "Beispiel laden dreht durch typische Kalenderfälle.",

	tool_age_why_choose_title: "Was dieser Altersrechner liefert",
	tool_age_why_choose_item_1: "Vollständiges chronologisches Alter in Jahren, Monaten und Resttagen.",
	tool_age_why_choose_item_2: "Sichtbare Leihschritte, wenn der Monatstag aus dem Vormonat geborgt werden muss.",
	tool_age_why_choose_item_3: "Gesamte ganze Tage zwischen den beiden UTC-Kalenderdaten.",
	tool_age_why_choose_item_4: "Heute-Taste für den Stichtag ohne Tipparbeit.",
	tool_age_why_choose_item_5: "Klare Grenze: nur Kalenderrechnung — keine Rechts- oder Anspruchberatung zum Alter.",

	tool_age_formula_title: "Altersformeln",
	tool_age_formula_body: "Beide Daten als UTC-Mitternacht lesen. Jahre, dann Monate, dann Tage subtrahieren und bei Bedarf leihen. Gesamttage = Millisekunden-Differenz geteilt durch 86400000.",
	tool_age_formula_item_1: "Jahre = Stichtag-Jahr − Geburtsjahr (korrigieren, wenn Monat/Tag noch nicht erreicht).",
	tool_age_formula_item_2: "Ist der Stichtag-Tag kleiner als der Geburtstag, Länge des Vormonats borgen.",
	tool_age_formula_item_3: "Werden Monate negativ, 12 Monate von den Jahren borgen.",
	tool_age_formula_item_4: "Gesamttage = runden((Stichtag − Geburt) / 86400000) in UTC.",
	tool_age_formula_item_5: "Schalttage wirken auf die Summe, wenn sie im Intervall liegen.",

	tool_age_example_title: "Durchgerechnete Beispiele",
	tool_age_example: "Beispiel laden startet mit Geburt 2000-01-01 und Stichtag 2026-08-09 → 26 Jahre, 7 Monate, 8 Tage. Danach ein 29. Februar gegen den 28. Februar 2024. Dann Alter 0 am selben Tag. Zuletzt die Jahresgrenze 1985-12-31 → 2026-01-01.",

	tool_age_usecases_title: "Wann der Altersrechner hilft",
	tool_age_usecase_1: "Formulare, die Alter in Jahren, Monaten und Tagen verlangen.",
	tool_age_usecase_2: "Hausaufgaben zu Kalenderdifferenzen und Monatsleihe.",
	tool_age_usecase_3: "Schneller Blick auf die ganzen Tage zwischen zwei Kalenderdaten.",
	tool_age_usecase_4: "Ergänzend zum Datumsunterschied-Tool, wenn die Spanne nicht als Alter formuliert wird.",

	tool_age_faq_q1: "Was macht die Taste Heute verwenden?",
	tool_age_faq_a1: "Sie setzt den Stichtag auf das heutige UTC-Kalenderdatum und berechnet neu.",
	tool_age_faq_q2: "Wie wird das chronologische Alter ermittelt?",
	tool_age_faq_a2: "Jahre, Monate und Tage mit Kalenderleihe abziehen. Beispiel: 2000-01-01 bis 2026-08-09 → 26 J, 7 M, 8 T.",
	tool_age_faq_q3: "Was, wenn das Geburtsdatum nach dem Stichtag liegt?",
	tool_age_faq_a3: "Die Seite lehnt das ab. Der Stichtag muss am oder nach dem Geburtsdatum liegen.",
	tool_age_faq_q4: "Fließen Zeitzonen ein?",
	tool_age_faq_a4: "Nein. Es zählen UTC-Kalendertage, keine lokale Uhrzeit.",
	tool_age_faq_q5: "Wie wirken Schalttage?",
	tool_age_faq_a5: "Sie zählen bei den Gesamttagen, wenn sie im Intervall liegen; bei der Leihrechnung gelten die echten Monatslängen.",
	tool_age_faq_q6: "Unterschied zum Datumsunterschied-Rechner?",
	tool_age_faq_a6: "Hier wird die Spanne als chronologisches Alter (J/M/T) formuliert. Für andere Formulierungen das verwandte Datumsunterschied-Tool nutzen.",
	tool_age_faq_q7: "Ist das eine Rechtsberatung zum Alter?",
	tool_age_faq_a7: "Nein. Nur didaktische Kalenderrechnung — keine rechtliche, medizinische oder Anspruchberatung.",

	tool_age_disclaimer: "Nur didaktisches Kalenderalter — keine Rechts-, Anspruchs-, Medizin- oder Ausweisberatung.",
	tool_age_references: "Wikipedia zu chronologischem Alter und Kalenderdatum als Lernkontext.",
	tool_age_ref_a_label: "Wikipedia — Chronologisches Alter",
	tool_age_ref_b_label: "Wikipedia — Kalenderdatum",
};

export default de;
