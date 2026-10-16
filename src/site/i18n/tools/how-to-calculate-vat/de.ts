/**
 * i18n 工具分片（how-to-calculate-vat / de）。
 * 功能：VAT/GST 对净价加税或从含税价拆税；常用税率芯片；反算校验。
 */
import type { SiteLangDict } from '../../../types';

/** 德语（de）VAT/GST 计算器文案键表，与 en 分片键名一一对应。 */
const de: SiteLangDict = {
	tool_vat_title: "MwSt-/GST-Rechner — Steuer auf Netto aufschlagen oder aus Brutto herausrechnen",
	tool_vat_description: "MwSt oder GST auf einen Nettobetrag aufschlagen oder Steuer und Netto aus einem Bruttopreis (steuerinklusive) herausrechnen. Beispiel: Netto 100 bei 20 % → Brutto 120, Steuer 20. Sie geben den Satz selbst ein — keine Ländertabelle. Nur Bildungsrechnung im Browser, keine Steuererklärungs- oder Compliance-Beratung.",
	tool_vat_article: "MwSt/GST auf einen Nettopreis aufschlagen oder einen Bruttobetrag in Netto und Steuer zerlegen — mit Rechenschritten und Gegenprobe.",
	tool_vat_desc: "MwSt/GST mit eigenem Satz auf- oder abrechnen. Zeigt Netto, Brutto, Steuer und eine Gegenprobe.",

	tool_vat_safety_banner: "Nur zu Lernzwecken. Tragen Sie den für Ihre Rechnung geltenden Satz selbst ein — diese Seite schlägt keine Staatssätze vor und ersetzt keine Steuerberatung.",
	tool_vat_mode_label: "Modus",
	tool_vat_mode_add: "Steuer auf Netto aufschlagen",
	tool_vat_mode_extract: "Steuer aus Brutto herausrechnen",
	tool_vat_amount_label: "Betrag",
	tool_vat_amount_ph: "z. B. 100",
	tool_vat_rate_label: "MwSt/GST %",
	tool_vat_rate_ph: "z. B. 20",
	tool_vat_hint: "Wählen Sie Aufschlagen (Netto → Brutto) oder Herausrechnen (Brutto → Netto). Beliebiger nicht negativer Prozentsatz. Die Satz-Chips sind nur Tippkurzwege — prüfen Sie den gesetzlichen Satz auf Ihrer Rechnung.",
	tool_vat_chips_label: "Häufige Satz-Kurzwege",
	tool_vat_chip_5: "5 %",
	tool_vat_chip_10: "10 %",
	tool_vat_chip_20: "20 %",
	tool_vat_chip_21: "21 %",
	tool_vat_calculate: "Berechnen",
	tool_vat_sample: "Beispiel laden",
	tool_vat_clear: "Leeren",
	tool_vat_grossOut_label: "Brutto",
	tool_vat_netOut_label: "Netto",
	tool_vat_taxOut_label: "Steuer",
	tool_vat_row_check: "Gegenprobe",
	tool_vat_steps_title: "Schritte",
	tool_vat_step_add_tpl: "Aufschlagen: Brutto = Netto × (1 + Satz/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_step_extract_tpl: "Herausrechnen: Netto = Brutto ÷ (1 + Satz/100) = {gross} ÷ (1 + {pct}/100) = {net}.",
	tool_vat_step_tax_tpl: "Steuer = Brutto − Netto = {gross} − {net} = {tax}.",
	tool_vat_step_check_tpl: "Prüfung: Netto × (1 + Satz/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_result_note: "Der Prozentsatz kommt von Ihnen. Mehrere Steuersätze, Befreiungen und Abgaberegeln werden nicht abgebildet. Nur zu Lernzwecken — keine Steuer-, Buchhaltungs- oder Anlageberatung.",
	tool_vat_err_generic: "Geben Sie einen positiven Betrag und einen Steuersatz von 0 oder mehr ein (z. B. Betrag 100 und Satz 20).",

	tool_vat_how_title: "So nutzen Sie den MwSt-/GST-Rechner",
	tool_vat_how_body: "Modus wählen, Betrag und Satz eingeben, dann Berechnen. Beispiel laden wechselt: Aufschlagen 100@20 %, Herausrechnen 120@20 %, Aufschlagen 50@10 % und Herausrechnen 107,1@7 %.",
	tool_vat_how_item_1: "Steuer auf Netto aufschlagen oder Steuer aus Brutto herausrechnen wählen.",
	tool_vat_how_item_2: "Geldbetrag und MwSt-/GST-Prozentsatz eingeben (oder einen Satz-Chip antippen).",
	tool_vat_how_item_3: "Auf Berechnen klicken — Brutto, Netto, Steuer und Gegenprobe erscheinen.",
	tool_vat_how_item_4: "Mit Beispiel laden typische Auf-/Abrechnungen durchklicken.",

	tool_vat_why_choose_title: "Warum dieser MwSt-/GST-Rechner",
	tool_vat_why_choose_item_1: "Beide Richtungen: Steuer auf Netto oder Netto und Steuer aus dem Bruttopreis.",
	tool_vat_why_choose_item_2: "Gegenprobe: Netto × (1 + r) wird wieder zum Bruttobetrag.",
	tool_vat_why_choose_item_3: "Rechenschritte mit Ihren Zahlen in den Formeln.",
	tool_vat_why_choose_item_4: "Satz-Chips (5 / 10 / 20 / 21 %) als Tippkurzwege — kein Steuertarif-Ratgeber.",
	tool_vat_why_choose_item_5: "Klare Grenze: Sie tragen den Satz ein; keine Ländermatrix und keine Abgabehilfe.",

	tool_vat_formula_title: "Formeln für MwSt / GST",
	tool_vat_formula_body: "Sei r der Dezimalsatz (Prozent ÷ 100). Dieselben Gleichungen gelten für MwSt, GST oder Umsatzsteuer, wenn ein einziger Prozentsatz auf das Netto anfällt.",
	tool_vat_formula_item_1: "Aufschlagen: Brutto = Netto × (1 + r). Beispiel: 100 × 1,20 = 120 bei 20 %.",
	tool_vat_formula_item_2: "Herausrechnen: Netto = Brutto ÷ (1 + r). Beispiel: 120 ÷ 1,20 = 100 bei 20 %.",
	tool_vat_formula_item_3: "Steuer = Brutto − Netto. Im Beispiel → Steuer 20.",
	tool_vat_formula_item_4: "Steueranteil am Brutto = r ÷ (1 + r). Bei 20 % ist die Steuer ein Sechstel des Bruttopreises.",
	tool_vat_formula_item_5: "GST vs. MwSt: dieselbe Rechenlogik; Bezeichnungen und Melderegeln unterscheiden sich je Land.",

	tool_vat_example_title: "Durchgerechnete Beispiele",
	tool_vat_example: "Beispiel laden startet mit Aufschlagen: Netto 100 bei 20 % → Brutto 120, Steuer 20. Danach wird 120 wieder auf Netto 100 zerlegt. Weiter: Netto 50 bei 10 % → 55. Letztes Beispiel: Brutto 107,1 bei 7 % ≈ Netto 100. Prüfen Sie immer den Satz auf Ihrer Rechnung.",

	tool_vat_usecases_title: "Wann ein MwSt-/GST-Rechner hilft",
	tool_vat_usecase_1: "Schularbeit: Steuer auf Netto legen und die Schritte mit (1 + r) zeigen.",
	tool_vat_usecase_2: "Kassenbon prüfen: vom steuerinklusive Betrag Netto und Steuer zurückrechnen.",
	tool_vat_usecase_3: "Schnellangebot: bekannten Prozentsatz anwenden, ohne Tabellenkalkulation.",
	tool_vat_usecase_4: "GST- und MwSt-Begriffe vergleichen — dieselbe Mathematik.",

	tool_vat_faq_q1: "Wie schlägt man MwSt auf einen Nettobetrag auf?",
	tool_vat_faq_a1: "Mit (1 + Satz/100) multiplizieren. Netto 100 bei 20 % → 100 × 1,20 = 120 Brutto; Steuer = 20.",
	tool_vat_faq_q2: "Wie rechnet man MwSt aus einem Bruttopreis heraus?",
	tool_vat_faq_a2: "Durch (1 + Satz/100) teilen. Brutto 120 bei 20 % → 120 ÷ 1,20 = 100 Netto; Steuer = 20.",
	tool_vat_faq_q3: "Enthält die Seite Ländersätze?",
	tool_vat_faq_a3: "Nein. Prozentsatz selbst eingeben. Chips sind nur Kurzwege, keine amtliche Satztabelle.",
	tool_vat_faq_q4: "Wird GST anders berechnet als MwSt?",
	tool_vat_faq_a4: "Bei einem einzigen Netto-Prozentsatz sind Auf- und Abrechnung identisch. Namen und Meldung unterscheiden sich.",
	tool_vat_faq_q5: "Kann der Satz 0 % sein?",
	tool_vat_faq_a5: "Ja. Bei 0 % bleibt Netto = Brutto und Steuer = 0 — sinnvoll für nullsteuerliche Übungsbeispiele.",
	tool_vat_faq_q6: "Mehrere Steuersätze auf einer Rechnung?",
	tool_vat_faq_a6: "Nein. Jede Position separat rechnen oder Buchhaltungssoftware mit Mischsätzen nutzen.",
	tool_vat_faq_q7: "Ist das Steuererklärungsberatung?",
	tool_vat_faq_a7: "Nein. Nur Bildungsrechnung — keine Steuer-, Buchhaltungs- oder Anlageberatung.",

	tool_vat_disclaimer: "Nur Bildungsrechnung zu MwSt/GST — keine Finanz-, Steuererklärungs-, Buchhaltungs- oder Anlageberatung.",
	tool_vat_references: "Investopedia und übliche Lehrbuchformeln — nur zur Einordnung.",
	tool_vat_ref_a_label: "Investopedia — VAT",
	tool_vat_ref_b_label: "Investopedia — Umsatzsteuer",
};

export default de;
