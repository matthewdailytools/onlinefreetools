/**
 * i18n tool shard (how-to-calculate-gross-margin / de).
 * Deutsch: Bruttomarge / Rohertrag — eigenständige Lokalisierung.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_gross_margin_title: 'Bruttomarge-Rechner — Rohertrag und Prozentsatz',
	tool_gross_margin_description:
		'Berechnen Sie Rohertrag und Bruttomarge (%) aus Umsatz und Wareneinsatz (COGS). Beispiel: Umsatz 10.000, COGS 6.000 → Rohertrag 4.000 und Marge 40 %. Im Browser; nur zur Bildung — keine Geschäfts- oder Anlageberatung.',
	tool_gross_margin_article:
		'Die Bruttomarge zeigt, welcher Anteil des Umsatzes nach dem Wareneinsatz bleibt. Diese Seite hält Rohertrag und Marge % auf einer Bildungs-URL; Nettomarge oder Betriebsmarge gehören in andere Tools.',
	tool_gross_margin_calculate: 'Berechnen',
	tool_gross_margin_sample: 'Beispiel laden',
	tool_gross_margin_clear: 'Leeren',
	tool_gross_margin_revenue_label: 'Umsatz',
	tool_gross_margin_revenue_ph: 'z. B. 10000',
	tool_gross_margin_cogs_label: 'Wareneinsatz (COGS)',
	tool_gross_margin_cogs_ph: 'z. B. 6000',
	tool_gross_margin_result_profit: 'Rohertrag',
	tool_gross_margin_result_margin: 'Bruttomarge',
	tool_gross_margin_result_note: 'Nur Bildungsillustration — keine Geschäfts- oder Anlageberatung.',
	tool_gross_margin_err_revenue: 'Der Umsatz muss größer als null sein.',
	tool_gross_margin_err_cogs: 'Der Wareneinsatz muss null oder positiv sein.',
	tool_gross_margin_how_title: 'So funktioniert es',
	tool_gross_margin_how_body:
		'Geben Sie Umsatz und COGS ein. Das Tool berechnet Rohertrag und Bruttomarge %. Markup vs. Marge sowie Nettogewinn bleiben in FAQ oder verwandten Tools — ohne Doorway-URLs.',
	tool_gross_margin_formula_title: 'Formel und Annahmen',
	tool_gross_margin_formula_body:
		'Rohertrag = Umsatz − COGS. Bruttomarge % = (Rohertrag ÷ Umsatz) × 100. Annahmen:',
	tool_gross_margin_formula_item_1: 'Umsatz und COGS gelten für denselben Zeitraum und dieselbe Währung; Steuern und Betriebskosten sind nicht modelliert.',
	tool_gross_margin_formula_item_2: 'COGS meint nur Produktkosten — SG&A und Zinsen sind ausgeschlossen.',
	tool_gross_margin_formula_item_3: 'Ergebnisse sind Bildungsbeispiele, keine Prognosen oder Beratung.',
	tool_gross_margin_example_title: 'Beispiel',
	tool_gross_margin_example:
		'Beispiel: Umsatz 10.000, COGS 6.000 → Rohertrag 4.000 → Bruttomarge 40 %.',
	tool_gross_margin_usecases_title: 'Wann sinnvoll',
	tool_gross_margin_usecase_1: 'Unterricht: Bruttomarge-Formel mit festem Umsatz und COGS üben.',
	tool_gross_margin_usecase_2: 'Grobe Produktmarge vor einem Beratungsgespräch (nur Illustration).',
	tool_gross_margin_usecase_3: 'Rohertrag und Marge % gemeinsam sehen — ohne eigene Markup-URL.',
	tool_gross_margin_faq_q1: 'Welche Bruttomarge-Formel nutzt diese Seite?',
	tool_gross_margin_faq_a1:
		'Rohertrag = Umsatz − COGS. Bruttomarge % = Rohertrag ÷ Umsatz × 100.',
	tool_gross_margin_faq_q2: 'Was, wenn COGS größer als der Umsatz ist?',
	tool_gross_margin_faq_a2:
		'Rohertrag und Marge werden negativ. Das Modell erlaubt Verlustfälle — weiterhin keine Beratung.',
	tool_gross_margin_faq_q3: 'Ist das Geschäftsberatung?',
	tool_gross_margin_faq_a3:
		'Nein. Zahlen sind nur Bildungsillustrationen und keine Steuer-, Geschäfts- oder Anlageberatung.',
	tool_gross_margin_faq_q4: 'Bruttomarge vs. Aufschlag (Markup)?',
	tool_gross_margin_faq_a4:
		'Die Marge teilt den Gewinn durch den Umsatz; der Aufschlag durch die Kosten. Diese Seite fokussiert die Marge; Markup nur in der FAQ.',
	tool_gross_margin_disclaimer:
		'Bruttomarge-Ergebnisse sind ausschließlich Bildungsillustrationen und keine Geschäfts-, Finanz-, Steuer- oder Anlageberatung. Reale Unternehmen haben Gebühren, Steuern und Kostenklassifikationen, die hier nicht modelliert werden.',
	tool_gross_margin_references:
		'Investopedia-Definitionen zu Gross Margin und Gross Profit; Standardformel (Umsatz − COGS) / Umsatz.',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default de;
