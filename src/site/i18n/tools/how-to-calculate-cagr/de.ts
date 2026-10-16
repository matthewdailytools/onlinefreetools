/**
 * i18n tool shard (how-to-calculate-cagr / de).
 * CAGR %, Endwert oder Jahre; YMYL nur Lernmathematik — keine Anlageberatung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_cagr_title: "CAGR-Rechner — Annualisiertes Wachstum zwischen zwei Werten",
	tool_cagr_description: "Jährliche Wachstumsrate (CAGR) aus Anfangs- und Endwert berechnen oder rückwärts Endwert bzw. Jahre lösen. Beispiel: 10.000 → 16.105,10 in 5 Jahren → etwa 10,00 % CAGR. Nur Lernillustration — keine Anlageberatung.",
	tool_cagr_article: "CAGR, Endwert oder Jahre mit den Standardidentitäten ((EW/AW)^(1/n)−1), Rechenschritten und einer Rückwärtskontrolle ermitteln.",
	tool_cagr_desc: "CAGR %, Endwert oder Jahre aus dem Anfangswert. Nur zu Lernzwecken.",

	tool_cagr_safety_banner: "Nur zu Lernzwecken. Diese Seite rechnet Lehrbuch-CAGR. Das ist keine Anlage-, Steuer- oder Finanzberatung; vergangenes oder hypothetisches Wachstum garantiert keine künftigen Ergebnisse.",
	tool_cagr_mode_label: "Was möchtest du berechnen?",
	tool_cagr_mode_rate: "CAGR % aus Anfang / Ende / Jahre",
	tool_cagr_mode_end: "Endwert aus Anfang / CAGR / Jahre",
	tool_cagr_mode_years: "Jahre aus Anfang / Ende / CAGR",
	tool_cagr_hint: "Alle aktiven Eingaben müssen größer als null sein. Die CAGR ignoriert Mittelzu- und -abflüsse und setzt einmalige Verzinsung pro Jahr voraus.",
	tool_cagr_begin_label: "Anfangswert",
	tool_cagr_begin_ph: "z. B. 10000",
	tool_cagr_end_label: "Endwert",
	tool_cagr_end_ph: "z. B. 16105.10",
	tool_cagr_rate_label: "CAGR %",
	tool_cagr_rate_ph: "z. B. 10",
	tool_cagr_years_label: "Anzahl der Jahre",
	tool_cagr_years_ph: "z. B. 5",
	tool_cagr_calculate: "Berechnen",
	tool_cagr_sample: "Beispiel laden",
	tool_cagr_clear: "Leeren",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "Endwert",
	tool_cagr_yearsOut_label: "Jahre",
	tool_cagr_multOut_label: "Gesamt-Wachstumsfaktor",
	tool_cagr_steps_title: "Rechenschritte",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%.",
	tool_cagr_step_end_tpl: "Endwert = {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_step_years_tpl: "Jahre = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}.",
	tool_cagr_step_check_tpl: "Kontrolle: {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_result_note: "Geht von jährlicher Verzinsung und keinen Zwischen-Cashflows aus. Nur Lernillustration — keine Anlageberatung.",
	tool_cagr_err_generic: "Gib positive Zahlen für die aktiven Felder ein (z. B. Anfang 10000, Ende 16105.1, Jahre 5).",

	tool_cagr_how_title: "So nutzt du den CAGR-Rechner",
	tool_cagr_how_body: "Wähle CAGR %, Endwert oder Jahre. Trage die bekannten Werte ein und tippe Berechnen. Beispiel laden wechselt 10000→16105.1 über 5 Jahre (10 %), den Endwert-Rückwärtsfall, Jahre bei 10 % CAGR und den kürzeren Fall 5000→8000 über 3 Jahre.",
	tool_cagr_how_item_1: "Wähle, was du finden willst.",
	tool_cagr_how_item_2: "Gib die bekannten positiven Werte für diesen Modus ein.",
	tool_cagr_how_item_3: "Klicke Berechnen für Antwort, Wachstumsfaktor und Schritte.",
	tool_cagr_how_item_4: "Mit Beispiel laden die Lehrbuch-Prüfpunkte durchschalten.",

	tool_cagr_why_choose_title: "Was dieser CAGR-Rechner liefert",
	tool_cagr_why_choose_item_1: "Drei Richtungen: CAGR %, Endwert oder Jahre.",
	tool_cagr_why_choose_item_2: "Neben der Hauptantwort den Wachstumsfaktor (Ende ÷ Anfang).",
	tool_cagr_why_choose_item_3: "Schritte, die deine Zahlen in die CAGR-Identitäten einsetzen.",
	tool_cagr_why_choose_item_4: "Rückwärtskontrolle: Anfang × (1+r)^n soll wieder zum Ende führen.",
	tool_cagr_why_choose_item_5: "Klarer YMYL-Rahmen: nur Lernmathematik — keine Anlageberatung.",

	tool_cagr_formula_title: "CAGR-Formeln",
	tool_cagr_formula_body: "Die CAGR ist die konstante jährliche Rate, die einen Anfangswert über n Jahre bei einmaliger Verzinsung pro Jahr zum Endwert führt.",
	tool_cagr_formula_item_1: "CAGR = ((EW ÷ AW)^(1 ÷ n) − 1) × 100. Beispiel: ((16105.1/10000)^(1/5)−1)×100 ≈ 10%.",
	tool_cagr_formula_item_2: "EW = AW × (1 + CAGR/100)^n.",
	tool_cagr_formula_item_3: "n = ln(EW ÷ AW) ÷ ln(1 + CAGR/100).",
	tool_cagr_formula_item_4: "Voraussetzung: AW > 0, EW > 0, n > 0 (und CAGR ≠ −100 %, wenn nach Jahren gelöst wird).",
	tool_cagr_formula_item_5: "Ignoriert Gebühren, Steuern und Zwischen-Cashflows — anders als ein vollständiger IRR.",

	tool_cagr_example_title: "Durchgerechnete Beispiele",
	tool_cagr_example: "Beispiel laden startet mit 10.000 → 16.105,10 über 5 Jahre → CAGR ≈ 10 %. Als Nächstes wächst 10.000 mit 10 % über 5 Jahre wieder auf ≈16.105. Dann Jahre aus denselben Endpunkten bei 10 %. Das letzte Beispiel: 5.000 → 8.000 über 3 Jahre.",

	tool_cagr_usecases_title: "Wann ein CAGR-Rechner hilft",
	tool_cagr_usecase_1: "Hausaufgaben: Mehrjahreswachstum mit der Standard-CAGR-Formel annualisieren.",
	tool_cagr_usecase_2: "Umsatz- oder Portfolio-Endpunkte auf Jahresbasis vergleichen (nur Illustration).",
	tool_cagr_usecase_3: "Rückrechnen, wie viele Jahre eine gegebene CAGR bis zum Ziel braucht.",
	tool_cagr_usecase_4: "Mit einfachem ROI auf der verwandten ROI-Seite kontrastieren, wenn die Jahre zählen.",

	tool_cagr_faq_q1: "Ist das Anlageberatung?",
	tool_cagr_faq_a1: "Nein. Die Zahlen sind nur Lernillustrationen — keine Anlage-, Steuer- oder Finanzberatung.",
	tool_cagr_faq_q2: "Welche CAGR-Formel nutzt die Seite?",
	tool_cagr_faq_a2: "CAGR = ((Ende ÷ Anfang)^(1 ÷ Jahre) − 1) × 100. Alle drei Werte müssen größer als null sein.",
	tool_cagr_faq_q3: "Worin unterscheidet sich CAGR vom einfachen ROI?",
	tool_cagr_faq_a3: "Einfacher ROI ignoriert, über wie viele Jahre die Veränderung lief. Die CAGR annualisiert das Wachstum über die eingegebenen Jahre.",
	tool_cagr_faq_q4: "Was, wenn Anfangs- oder Endwert null oder negativ ist?",
	tool_cagr_faq_a4: "Beide müssen größer als null sein. Null oder negative Eingaben machen die Standard-CAGR-Formel hier undefiniert.",
	tool_cagr_faq_q5: "Kann ich Endwert oder Jahre lösen?",
	tool_cagr_faq_a5: "Ja. Wechsle den Modus, um einen Anfangswert vorwärts zu wachsen oder Jahre aus Anfang/Ende/CAGR zu lösen.",
	tool_cagr_faq_q6: "Berücksichtigt die CAGR Einzahlungen oder Entnahmen?",
	tool_cagr_faq_a6: "Nein. Sie nutzt nur Anfang, Ende und Jahre. Bei unregelmäßigen Cashflows brauchst du ein IRR-Tool.",
	tool_cagr_faq_q7: "Wird jährliche Verzinsung angenommen?",
	tool_cagr_faq_a7: "Ja auf dieser Seite. Timing innerhalb des Jahres wird ignoriert.",

	tool_cagr_disclaimer: "CAGR-Ergebnisse sind nur Lernillustrationen und keine Anlage-, Steuer- oder Finanzberatung. Vergangene oder hypothetische Renditen garantieren keine künftigen Ergebnisse. Reale Portfolios haben Gebühren, Steuern, Cashflows und Risiken, die diese Seite nicht modelliert.",
	tool_cagr_references: "Investopedia-Leitfäden zu CAGR-Definition und Formel; Standardrate ((EW/AW)^(1/n) − 1) als annualisierte Wachstumsrate.",
	tool_cagr_ref_cagr_label: "Investopedia — Compound Annual Growth Rate (CAGR)",
	tool_cagr_ref_formula_label: "Investopedia — Formula for calculating CAGR",
};

export default de;
