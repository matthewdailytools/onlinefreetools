/**
 * i18n 工具分片（write-ifs-formula-in-excel / de）。
 * 有序条件 → =IFS(...)；TRUE 兜底；需 Excel 2019 / Microsoft 365。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: "IFS-Formel (WENNNS) für Excel bauen — geordnete Tests mit TRUE-Auffang",
	tool_write_ifs_formula_in_excel_description: "Erzeugen Sie eine IFS-Formel für Excel 2019 oder Microsoft 365 aus geordneten Tests (gleich, enthält, leer). Beispiel: West → A, East → B, sonst Other → =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\"). Im Browser ausprobieren, dann kopieren. Nicht in Excel 2016 Perpetual verfügbar.",
	tool_write_ifs_formula_in_excel_article: "Geordnete Tests anlegen, jedes Ergebnis und einen TRUE-Auffang setzen, einen Probewert prüfen und eine fertige IFS-Formel kopieren.",
	tool_write_ifs_formula_in_excel_desc: "Geordnete Tests → IFS-Formel mit TRUE-Auffang, Browser-Probe und Kopieren.",

	tool_write_ifs_formula_in_excel_hint: "Bedingungen werden von oben nach unten geprüft. Der Builder hängt TRUE,sonst als Auffang an. Benötigt Excel 2019, Microsoft 365 oder neuer. Englische Namen und Kommas.",
	tool_write_ifs_formula_in_excel_note_2016: "IFS braucht Excel 2019, Microsoft 365 oder neuer. Für älteres Excel den geschachtelten-WENN-Builder nutzen.",
	tool_write_ifs_formula_in_excel_cell_label: "Zielzelle",
	tool_write_ifs_formula_in_excel_cell_ph: "z. B. A1",
	tool_write_ifs_formula_in_excel_trial_label: "Probewert",
	tool_write_ifs_formula_in_excel_trial_ph: "z. B. West",
	tool_write_ifs_formula_in_excel_else_label: "Sonst (TRUE-Auffang)",
	tool_write_ifs_formula_in_excel_else_ph: "z. B. Other",
	tool_write_ifs_formula_in_excel_col_op: "Test",
	tool_write_ifs_formula_in_excel_col_val: "Wert / Text",
	tool_write_ifs_formula_in_excel_col_then: "Dann-Ergebnis",
	tool_write_ifs_formula_in_excel_op_eq: "gleich",
	tool_write_ifs_formula_in_excel_op_contains: "enthält",
	tool_write_ifs_formula_in_excel_op_blank: "ist leer",
	tool_write_ifs_formula_in_excel_add: "Bedingung hinzufügen",
	tool_write_ifs_formula_in_excel_write: "Formel erzeugen",
	tool_write_ifs_formula_in_excel_sample: "Beispiel laden",
	tool_write_ifs_formula_in_excel_clear: "Leeren",
	tool_write_ifs_formula_in_excel_copy: "Formel kopieren",
	tool_write_ifs_formula_in_excel_copied: "Kopiert.",
	tool_write_ifs_formula_in_excel_formula_label: "IFS-Formel",
	tool_write_ifs_formula_in_excel_trial_result_label: "Probeergebnis",
	tool_write_ifs_formula_in_excel_empty: "Mindestens eine Bedingung hinzufügen (oder Beispiel laden), dann die Formel erzeugen.",
	tool_write_ifs_formula_in_excel_copy_fail: "Kopieren fehlgeschlagen. Formel markieren und manuell kopieren.",

	tool_write_ifs_formula_in_excel_how_title: "So schreiben Sie eine IFS-Formel",
	tool_write_ifs_formula_in_excel_how_body: "Zielzelle und geordnete Tests eingeben. Formel erzeugen zeigt IFS mit TRUE-Auffang und wertet Ihren Probewert aus. Kopieren liefert englische Excel-Syntax mit Kommas.",
	tool_write_ifs_formula_in_excel_how_item_1: "Zielzelle und optionalen Probewert festlegen.",
	tool_write_ifs_formula_in_excel_how_item_2: "Zeilen gleich, enthält oder leer in Auswertungsreihenfolge hinzufügen.",
	tool_write_ifs_formula_in_excel_how_item_3: "Jedes Dann-Ergebnis und den Sonst-Wert (mit TRUE) setzen.",
	tool_write_ifs_formula_in_excel_how_item_4: "Formel erzeugen klicken, Probe prüfen, dann Kopieren. Unter Excel 2016 geschachteltes WENN nutzen.",

	tool_write_ifs_formula_in_excel_why_choose_title: "Was dieser IFS-Builder liefert",
	tool_write_ifs_formula_in_excel_why_choose_item_1: "Geordnete Tests gleich / enthält / leer in einem IFS-Aufruf.",
	tool_write_ifs_formula_in_excel_why_choose_item_2: "Automatisches TRUE,sonst-Auffangpaar.",
	tool_write_ifs_formula_in_excel_why_choose_item_3: "Browser-Probe, bevor Sie in Excel einfügen.",
	tool_write_ifs_formula_in_excel_why_choose_item_4: "Beispiel-Rotation für Regionen, Noten und enthält.",
	tool_write_ifs_formula_in_excel_why_choose_item_5: "Klare Excel-2016-Grenze mit Link zum geschachtelten WENN.",

	tool_write_ifs_formula_in_excel_rules_title: "Regeln, mit denen Sie rechnen sollten",
	tool_write_ifs_formula_in_excel_rules_body: "Der Builder erzeugt IFS(test,wert,...,TRUE,sonst). Text-Anführungszeichen werden in Excel-Zeichenketten verdoppelt.",
	tool_write_ifs_formula_in_excel_rules_item_1: "Text-Anführungszeichen werden in Excel-Zeichenketten verdoppelt.",
	tool_write_ifs_formula_in_excel_rules_item_2: "Enthält erzeugt ISNUMBER(SEARCH(...)); leer prüft leeren Text.",
	tool_write_ifs_formula_in_excel_rules_item_3: "Der erste treffende Test gewinnt; TRUE-Auffang kommt zuletzt.",
	tool_write_ifs_formula_in_excel_rules_item_4: "IFS braucht Excel 2019, Microsoft 365 oder neuer — nicht Excel 2016 Perpetual.",
	tool_write_ifs_formula_in_excel_rules_item_5: "Englische Funktionsnamen und Kommas können in Ihrer Excel-Installation lokalisiert werden müssen (z. B. WENNNS).",

	tool_write_ifs_formula_in_excel_example_title: "Durchgerechnete Beispiele",
	tool_write_ifs_formula_in_excel_example: "Beispiel laden startet mit West → A und East → B, sonst Other → =IFS(...,TRUE,\"Other\"), Probe West → A. Als Nächstes einfache Noten-Gleichheit. Das letzte Beispiel nutzt enthält für „promo“.",

	tool_write_ifs_formula_in_excel_usecases_title: "Wann ein IFS-Formel-Builder hilft",
	tool_write_ifs_formula_in_excel_usecase_1: "Regioncodes auf Labels mappen, ohne tief geschachtelte WENN-Klammern.",
	tool_write_ifs_formula_in_excel_usecase_2: "Noten- oder Risikobänder für Microsoft-365-Mappen entwerfen.",
	tool_write_ifs_formula_in_excel_usecase_3: "Zweigreihenfolge prüfen, bevor Sie in eine geteilte Tabelle einfügen.",
	tool_write_ifs_formula_in_excel_usecase_4: "Zur Seite geschachteltes WENN wechseln, wenn Kollegen noch Excel 2016 nutzen.",

	tool_write_ifs_formula_in_excel_faq_q1: "Führt Excel 2016 IFS aus?",
	tool_write_ifs_formula_in_excel_faq_a1: "Die Perpetual-Version Excel 2016 nicht. Nutzen Sie geschachteltes WENN, Excel 2019 oder neuer, oder Microsoft 365.",
	tool_write_ifs_formula_in_excel_faq_q2: "Was passiert, wenn kein Test passt?",
	tool_write_ifs_formula_in_excel_faq_a2: "TRUE wird mit Ihrem Sonst-Wert als Auffangergebnis gepaart.",
	tool_write_ifs_formula_in_excel_faq_q3: "Werden Werte hochgeladen?",
	tool_write_ifs_formula_in_excel_faq_a3: "Nein. Erzeugen und Probe bleiben in Ihrem Browser.",
	tool_write_ifs_formula_in_excel_faq_q4: "Akzeptiert lokalisiertes Excel die Formel?",
	tool_write_ifs_formula_in_excel_faq_a4: "Manche Installationen brauchen übersetzte Funktionsnamen (z. B. WENNNS) oder Semikolons.",
	tool_write_ifs_formula_in_excel_faq_q5: "Worin unterscheidet sich das von geschachteltem WENN?",
	tool_write_ifs_formula_in_excel_faq_a5: "IFS ist eine flache Testliste. Geschachteltes WENN wickelt WENN in WENN. Für älteres Excel die verlinkte WENN-Seite nutzen.",
	tool_write_ifs_formula_in_excel_faq_q6: "Was erzeugt „enthält“?",
	tool_write_ifs_formula_in_excel_faq_a6: "ISNUMBER(SEARCH(\"text\", Zelle)) als Testargument in IFS.",

	tool_write_ifs_formula_in_excel_references: "Microsoft-Dokumentation zur Funktion IFS.",
	tool_write_ifs_formula_in_excel_ref_a_label: "Microsoft — Funktion IFS",
	tool_write_ifs_formula_in_excel_ref_b_label: "Microsoft — Funktion IF",
};

export default de;
