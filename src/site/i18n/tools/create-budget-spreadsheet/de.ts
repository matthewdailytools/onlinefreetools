/**
 * i18n 工具分片（create-budget-spreadsheet / de）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 仅规划数字，非理财/税务建议。
 * 当地检索向：Haushaltsplan / Budget-Tabelle Excel erstellen。
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "Haushaltsplan als Excel-Tabelle erstellen — Kategorien und Beträge",
	tool_create_budget_spreadsheet_description: "Aus Kategorie- und Betragszeilen eine einfache Budget-Tabelle bauen, die Summe vorab prüfen und als .xlsx mit live SUM-Formel herunterladen. Beispiel: Miete 1200 + Essen 400 → Summe 1600. Läuft im Browser — nur Planungszahlen, keine Finanz- oder Steuerberatung.",
	tool_create_budget_spreadsheet_article: "Zeilen als Kategorie,Betrag eingeben, die laufende Summe prüfen und budget.xlsx mit SUM in der Summenzelle laden.",
	tool_create_budget_spreadsheet_desc: "Kategorie + Betrag → Summe prüfen → xlsx mit SUM. Bleibt auf dem Gerät, ohne Server-Upload.",

	tool_create_budget_spreadsheet_safety_banner: "Nur Planungszahlen. Diese Seite baut eine einfache Kategorieliste mit SUM-Summe. Kein Hauptbuch, keine Steuererklärung, keine Anlageberatung.",
	tool_create_budget_spreadsheet_hint: "Eine Zeile pro Zeile: Kategorie,Betrag (Komma oder Tab). Beträge müssen endliche Zahlen sein. Fehlerhafte Zeilen werden übersprungen.",
	tool_create_budget_spreadsheet_input_label: "Budgetzeilen (Kategorie, Betrag)",
	tool_create_budget_spreadsheet_input_ph: "z. B. Miete,1200",
	tool_create_budget_spreadsheet_write: "Tabelle erzeugen",
	tool_create_budget_spreadsheet_download: "xlsx herunterladen",
	tool_create_budget_spreadsheet_sample: "Beispiel laden",
	tool_create_budget_spreadsheet_clear: "Leeren",
	tool_create_budget_spreadsheet_preview_title: "Vorschau",
	tool_create_budget_spreadsheet_col_category: "Kategorie",
	tool_create_budget_spreadsheet_col_amount: "Betrag",
	tool_create_budget_spreadsheet_total_label: "Summe",
	tool_create_budget_spreadsheet_rows_label: "Gezählte Zeilen",
	tool_create_budget_spreadsheet_ready_note: "Vorschau bereit. Download schreibt budget.xlsx mit SUM-Formel in der Summenzelle.",
	tool_create_budget_spreadsheet_empty: "Mindestens eine gültige Zeile Kategorie,Betrag (z. B. Miete,1200) oder Beispiel laden.",
	tool_create_budget_spreadsheet_need_lib: "Tabellenbibliothek konnte nicht geladen werden. Netz prüfen und Seite neu laden.",
	tool_create_budget_spreadsheet_sheet_name: "Budget",

	tool_create_budget_spreadsheet_how_title: "So erstellen Sie einen Haushaltsplan als Tabelle",
	tool_create_budget_spreadsheet_how_body: "Ausgabenkategorien und Beträge listen, Vorschau mit Summe erzeugen, dann .xlsx laden. Geänderte Beträge in Excel rechnen die SUM-Summe neu.",
	tool_create_budget_spreadsheet_how_item_1: "Pro Zeile Kategorie,Betrag eintragen.",
	tool_create_budget_spreadsheet_how_item_2: "Auf Tabelle erzeugen klicken, um Zeilen und Summe zu prüfen.",
	tool_create_budget_spreadsheet_how_item_3: "Übersprungene Zeilen korrigieren oder entfernen, wenn die Summe nicht stimmt.",
	tool_create_budget_spreadsheet_how_item_4: "Auf xlsx herunterladen klicken — budget.xlsx enthält eine live SUM.",

	tool_create_budget_spreadsheet_why_choose_title: "Warum dieser Haushaltsplan-Tabellen-Maker",
	tool_create_budget_spreadsheet_why_choose_item_1: "Schnelle Kategorieliste mit Summenvorschau auf der Seite.",
	tool_create_budget_spreadsheet_why_choose_item_2: "Die heruntergeladene Summenzelle nutzt eine live Excel-SUM-Formel.",
	tool_create_budget_spreadsheet_why_choose_item_3: "Beispiel-Rotation für Monat, Reise und Vereinslisten.",
	tool_create_budget_spreadsheet_why_choose_item_4: "Läuft im Browser — Zeilen bleiben auf dem Gerät, ohne Server-Upload.",
	tool_create_budget_spreadsheet_why_choose_item_5: "Klare YMYL-Grenze: nur Planung — kein Hauptbuch und kein Steuertool.",

	tool_create_budget_spreadsheet_rules_title: "Regeln, mit denen Sie rechnen sollten",
	tool_create_budget_spreadsheet_rules_body: "Dieses Werkzeug baut aus Kategoriebeträgen ein Planungsblatt. Es ist keine Buchhaltungssoftware.",
	tool_create_budget_spreadsheet_rules_item_1: "Beträge müssen endliche Zahlen sein; fehlerhafte Zeilen werden übersprungen.",
	tool_create_budget_spreadsheet_rules_item_2: "Die heruntergeladene Summenzelle nutzt =SUM über die Betragsspalte.",
	tool_create_budget_spreadsheet_rules_item_3: "Nur eine Ausgabenliste — keine Einnahmen-Ausgaben-Abweichungsengine.",
	tool_create_budget_spreadsheet_rules_item_4: "Werte bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.",
	tool_create_budget_spreadsheet_rules_item_5: "Dateiformat folgt üblicher OOXML/xlsx-Praxis via SheetJS im Browser.",

	tool_create_budget_spreadsheet_example_title: "Durchgerechnete Beispiele",
	tool_create_budget_spreadsheet_example: "Beispiel laden startet mit Miete 1200 und Essen 400 → Summe 1600. Als Nächstes kommen Nebenkosten 150 und Transport 200. Das letzte Beispiel ist eine kurze Reiseliste (Hotel, Flüge, Essen).",

	tool_create_budget_spreadsheet_usecases_title: "Wann Sie hier einen Haushaltsplan als Tabelle anlegen",
	tool_create_budget_spreadsheet_usecase_1: "Kurzen monatlichen Umschlagplan skizzieren, bevor Sie eine größere Vorlage nutzen.",
	tool_create_budget_spreadsheet_usecase_2: "Erwartete Reise- oder Eventkosten in ein herunterladbares Blatt bringen.",
	tool_create_budget_spreadsheet_usecase_3: "Vereinsausgaben planen, bevor die formelle Buchhaltung beginnt.",
	tool_create_budget_spreadsheet_usecase_4: "Jemandem ein .xlsx mit SUM-Summe geben, die in Excel weiter mitrechnet.",

	tool_create_budget_spreadsheet_faq_q1: "Ist das ein Hauptbuch?",
	tool_create_budget_spreadsheet_faq_a1: "Nein. Es gibt keine Konten, Buchungen, Abstimmung oder Prüfhistorie.",
	tool_create_budget_spreadsheet_faq_q2: "Werden meine Zeilen hochgeladen?",
	tool_create_budget_spreadsheet_faq_a2: "Nein. Parsen und xlsx-Schreiben laufen im Browser; Daten bleiben auf dem Gerät, ohne Server-Upload.",
	tool_create_budget_spreadsheet_faq_q3: "Rechnet das heruntergeladene xlsx neu?",
	tool_create_budget_spreadsheet_faq_a3: "Ja. Die Summenzelle enthält eine SUM-Formel über die Betragsspalte.",
	tool_create_budget_spreadsheet_faq_q4: "Vergleicht es Einnahmen und Ausgaben?",
	tool_create_budget_spreadsheet_faq_a4: "Nein. Für Einkommen, Ziele, Abweichungen oder Diagramme brauchen Sie eine vollere Budgetvorlage.",
	tool_create_budget_spreadsheet_faq_q5: "Welches Format hat Kategorie,Betrag?",
	tool_create_budget_spreadsheet_faq_a5: "Eine Zeile pro Zeile, Kategorie und Betrag durch Komma oder Tab getrennt. Beispiel: Miete,1200.",
	tool_create_budget_spreadsheet_faq_q6: "Ist das Finanzberatung?",
	tool_create_budget_spreadsheet_faq_a6: "Nein. Nur Planungsarithmetik — keine Finanz-, Steuer- oder Anlageberatung.",

	tool_create_budget_spreadsheet_disclaimer: "Nur Planungszahlen — keine Finanz-, Steuer-, Buchhaltungs- oder Anlageberatung.",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML; SheetJS-Dokumentation zum Schreiben von xlsx im Browser.",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "SheetJS-Docs",
};

export default de;
