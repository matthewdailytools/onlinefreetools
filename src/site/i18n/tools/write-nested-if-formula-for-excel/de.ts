/**
 * i18n 工具分片（write-nested-if-formula-for-excel / de）。
 * 有序条件 → 嵌套 IF 公式；浏览器试算；复制粘贴到 Excel。
 * 德语检索向：geschachtelte WENN / verschachtelte IF；示例 West → A。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Geschachtelte WENN-Formel für Excel — Bedingungen in Reihenfolge, fertig zum Kopieren",
	tool_write_nested_if_formula_for_excel_description: "Bauen Sie eine geschachtelte IF-Formel für Excel aus geordneten Gleich-/Enthält-/Leer-Tests. Beispiel: West → A, East → B, sonst Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")). Ergebnis im Browser prüfen, dann kopieren. Englische Funktionsnamen und Kommas.",
	tool_write_nested_if_formula_for_excel_article: "Bedingungen der Reihe nach setzen, je ein Ergebnis und ein finales Sonst wählen, Probewert prüfen und die komplette geschachtelte IF kopieren.",
	tool_write_nested_if_formula_for_excel_desc: "Geordnete Bedingungen → geschachtelte IF mit Browser-Probe und Kopieren.",

	tool_write_nested_if_formula_for_excel_hint: "Bedingungen werden von oben nach unten geprüft. Der erste Treffer gewinnt. Enthält erzeugt ISNUMBER(SEARCH(...)). Formeln mit englischen Namen und Kommas.",
	tool_write_nested_if_formula_for_excel_cell_label: "Zielzelle",
	tool_write_nested_if_formula_for_excel_cell_ph: "z. B. A1",
	tool_write_nested_if_formula_for_excel_trial_label: "Probewert",
	tool_write_nested_if_formula_for_excel_trial_ph: "z. B. West",
	tool_write_nested_if_formula_for_excel_else_label: "Sonst (letzter Falsch-Zweig)",
	tool_write_nested_if_formula_for_excel_else_ph: "z. B. Other",
	tool_write_nested_if_formula_for_excel_col_op: "Prüfung",
	tool_write_nested_if_formula_for_excel_col_val: "Wert / Text",
	tool_write_nested_if_formula_for_excel_col_then: "Dann-Ergebnis",
	tool_write_nested_if_formula_for_excel_op_eq: "gleich",
	tool_write_nested_if_formula_for_excel_op_contains: "enthält",
	tool_write_nested_if_formula_for_excel_op_blank: "ist leer",
	tool_write_nested_if_formula_for_excel_add: "Bedingung hinzufügen",
	tool_write_nested_if_formula_for_excel_write: "Formel erzeugen",
	tool_write_nested_if_formula_for_excel_sample: "Beispiel laden",
	tool_write_nested_if_formula_for_excel_clear: "Leeren",
	tool_write_nested_if_formula_for_excel_copy: "Formel kopieren",
	tool_write_nested_if_formula_for_excel_copied: "Kopiert.",
	tool_write_nested_if_formula_for_excel_formula_label: "Geschachtelte IF-Formel",
	tool_write_nested_if_formula_for_excel_trial_result_label: "Probeergebnis",
	tool_write_nested_if_formula_for_excel_empty: "Mindestens eine Bedingung setzen (oder Beispiel laden), dann Formel erzeugen.",
	tool_write_nested_if_formula_for_excel_copy_fail: "Kopieren fehlgeschlagen. Formel markieren und manuell kopieren.",

	tool_write_nested_if_formula_for_excel_how_title: "So schreiben Sie eine geschachtelte WENN-Formel",
	tool_write_nested_if_formula_for_excel_how_body: "Zielzelle und geordnete Bedingungen eintragen. Formel erzeugen zeigt die geschachtelte IF und wertet den Probewert aus. Kopieren liefert englische Excel-Syntax mit Kommas.",
	tool_write_nested_if_formula_for_excel_how_item_1: "Zielzelle und optionalen Probewert setzen.",
	tool_write_nested_if_formula_for_excel_how_item_2: "Zeilen gleich / enthält / leer in der Reihenfolge anlegen, in der Excel prüfen soll.",
	tool_write_nested_if_formula_for_excel_how_item_3: "Jedes Dann-Ergebnis und den finalen Sonst-Wert festlegen.",
	tool_write_nested_if_formula_for_excel_how_item_4: "Auf Formel erzeugen klicken, Probeergebnis prüfen, dann Formel kopieren.",

	tool_write_nested_if_formula_for_excel_why_choose_title: "Was dieser geschachtelte-WENN-Generator liefert",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "Gleich / enthält / leer in einer geschachtelten IF, in Ihrer Reihenfolge.",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "Browser-Probe zeigt, welcher Zweig greift, bevor Sie einfügen.",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "Beispiel-Rotation für Regionen, Notenstufen und Enthält-Tests.",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "Ein Klick kopiert die komplette Formelzeichenkette.",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "Klar: hier entsteht geschachteltes IF, nicht IFS (siehe verwandte IFS-Seite).",

	tool_write_nested_if_formula_for_excel_rules_title: "Regeln, mit denen Sie rechnen sollten",
	tool_write_nested_if_formula_for_excel_rules_body: "Der Generator schreibt klassisches IF(...). Textanführungszeichen in Excel-Strings werden verdoppelt.",
	tool_write_nested_if_formula_for_excel_rules_item_1: "Anführungszeichen in Excel-Texten werden verdoppelt.",
	tool_write_nested_if_formula_for_excel_rules_item_2: "Enthält erzeugt ISNUMBER(SEARCH(...)); leer prüft leeren Text.",
	tool_write_nested_if_formula_for_excel_rules_item_3: "Die erste passende Bedingung gewinnt (oben nach unten).",
	tool_write_nested_if_formula_for_excel_rules_item_4: "Englische Funktionsnamen und Kommas können in Ihrer Excel-Sprache lokalisiert werden müssen.",
	tool_write_nested_if_formula_for_excel_rules_item_5: "Für IFS()-Syntax die verwandte IFS-Schreibseite nutzen.",

	tool_write_nested_if_formula_for_excel_example_title: "Durchgerechnete Beispiele",
	tool_write_nested_if_formula_for_excel_example: "Beispiel laden startet mit West → A und East → B, sonst Other; Probe West → A. Als Nächstes Notenbänder (≥90 / ≥80). Das letzte Beispiel nutzt einen Enthält-Test für „promo“.",

	tool_write_nested_if_formula_for_excel_usecases_title: "Wann ein Generator für geschachtelte WENN hilft",
	tool_write_nested_if_formula_for_excel_usecase_1: "Noten- oder Risikobänder aus geordneten Regeln zuweisen.",
	tool_write_nested_if_formula_for_excel_usecase_2: "Regionscodes in Berichtslabels übersetzen.",
	tool_write_nested_if_formula_for_excel_usecase_3: "Eine Mehrzweig-Formel prüfen, bevor sie in die Arbeitsmappe wandert.",
	tool_write_nested_if_formula_for_excel_usecase_4: "Enthält-/Leer-Zweige entwerfen, ohne SEARCH von Hand zu tippen.",

	tool_write_nested_if_formula_for_excel_faq_q1: "Werden meine Werte hochgeladen?",
	tool_write_nested_if_formula_for_excel_faq_a1: "Nein. Bau und Probe bleiben im Browser auf Ihrem Gerät, ohne Server-Upload.",
	tool_write_nested_if_formula_for_excel_faq_q2: "Ist das dasselbe wie IFS?",
	tool_write_nested_if_formula_for_excel_faq_a2: "Nein. Diese Seite erzeugt geschachteltes IF(...). Für IFS() den verwandten IFS-Generator nutzen.",
	tool_write_nested_if_formula_for_excel_faq_q3: "Wie funktioniert „enthält“?",
	tool_write_nested_if_formula_for_excel_faq_a3: "Es schreibt ISNUMBER(SEARCH(\"text\", Zelle)) in den IF-Test.",
	tool_write_nested_if_formula_for_excel_faq_q4: "Funktioniert die Formel in jeder Excel-Sprache?",
	tool_write_nested_if_formula_for_excel_faq_a4: "Sie nutzt englische Funktionsnamen und Kommas. Manche Installationen brauchen übersetzte Namen oder Semikolons.",
	tool_write_nested_if_formula_for_excel_faq_q5: "Wozu dient der Probewert?",
	tool_write_nested_if_formula_for_excel_faq_a5: "Er wertet dieselbe Reihenfolge im Browser aus, damit Sie sehen, welches Dann/Sonst greift.",
	tool_write_nested_if_formula_for_excel_faq_q6: "Kann ich mehr als zwei Bedingungen schachteln?",
	tool_write_nested_if_formula_for_excel_faq_a6: "Ja. Zeilen hinzufügen; jede wird eine weitere IF-Schicht um das finale Sonst.",

	tool_write_nested_if_formula_for_excel_references: "Microsoft-Dokumentation zur IF-Funktion.",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — Funktion IF",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — Funktion IFS",
};

export default de;
