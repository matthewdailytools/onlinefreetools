/**
 * i18n tool shard (how-to-calculate-gpa / de).
 * Deutsche Locale unabhängig neu geschrieben.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_gpa_title: "GPA-Rechner — Gewichteten Durchschnitt berechnen",
	tool_gpa_description: "Berechnen Sie den kreditgewichteten GPA auf einer 4.0-Skala aus Notenpunkten und Credits pro Kurs. Beispiel: A=4.0 (3 Cr) und B=3.0 (3 Cr) → GPA 3.5. Skalen unterscheiden sich je Schule/Land; nur Bildungszweck im Browser.",
	tool_gpa_article: "Ein gewichteter GPA multipliziert Punkte je Kurs mit Credits und teilt durch die Summe. Diese Seite nutzt eine einfache 4.0-Skala; Ihre Schule kann +/- oder andere Systeme nutzen.",
	tool_gpa_calculate: "Berechnen",
	tool_gpa_sample: "Beispiel",
	tool_gpa_clear: "Löschen",
	tool_gpa_courses_label: "Kurse (Punkte, Credits je Zeile)",
	tool_gpa_courses_ph: "z. B. 4.0, 3",
	tool_gpa_courses_hint: "Ein Kurs pro Zeile: Punkte, dann Credits. Bei 4.0: A≈4.0, B≈3.0.",
	tool_gpa_result_label: "Gewichteter GPA",
	tool_gpa_result_note: "Annahme 4.0-Skala. Prüfen Sie die offiziellen Transcript-Regeln.",
	tool_gpa_err_parse: "Mindestens eine Zeile: Punkte, Credits (z. B. 4.0, 3).",
	tool_gpa_err_credits: "Jeder Kurs braucht Credits > 0.",
	tool_gpa_how_title: "So funktioniert’s",
	tool_gpa_how_body: "Listen Sie Punkte und Credits pro Kurs. Das Tool gewichtet und teilt durch Gesamtpunkte im Browser. Skala Ihrer Schule immer prüfen.",
	tool_gpa_formula_title: "Formel und Skalenhinweise",
	tool_gpa_formula_body: "GPA = Σ (Punkte × Credits) / Σ Credits. Beachten Sie:",
	tool_gpa_formula_item_1: "Demo mit einfachem 4.0-Mapping; kein automatisches +/-.",
	tool_gpa_formula_item_2: "Credits positiv; Punkte endlich.",
	tool_gpa_formula_item_3: "Uni/Schule/Region können abweichen — nur Bildung.",
	tool_gpa_example_title: "Beispiel",
	tool_gpa_example: "Beispiel: Kurs A = 4.0 mit 3 Credits, Kurs B = 3.0 mit 3 Credits → GPA = (12 + 9) / 6 = 3.50.",
	tool_gpa_usecases_title: "Wann sinnvoll",
	tool_gpa_usecase_1: "Semester-GPA schätzen, bevor das Portal aktualisiert.",
	tool_gpa_usecase_2: "Übung kreditgewichteter Mittelwerte auf 4.0.",
	tool_gpa_usecase_3: "Notenszenarien — keine Zulassungsentscheidung.",
	tool_gpa_faq_q1: "Welche Formel?",
	tool_gpa_faq_a1: "Gewichteter GPA = Σ (Punkte × Credits) / Σ Credits.",
	tool_gpa_faq_q2: "Nutzen alle 4.0?",
	tool_gpa_faq_a2: "Nein. Es gibt +/-, 5.0 gewichtet oder Prozente.",
	tool_gpa_faq_q3: "Buchstaben direkt?",
	tool_gpa_faq_a3: "Zuerst umrechnen (A→4.0, B→3.0), dann Punkte und Credits eintragen.",
	tool_gpa_faq_q4: "Garantie für Zulassung?",
	tool_gpa_faq_a4: "Nein. Nur Bildungsillustration.",
	tool_gpa_references: "College-Board-Ressourcen; Überblick US-Notenskalen.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Akademische Noten in den USA",
};

export default de;
