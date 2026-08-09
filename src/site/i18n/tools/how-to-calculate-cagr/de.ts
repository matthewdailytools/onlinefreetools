/**
 * i18n tool shard (how-to-calculate-cagr / de).
 * Eigenständige deutsche Fassung: vollständige UI, How/Formel/FAQ und YMYL-Hinweis.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_cagr_title: 'CAGR-Rechner — Jährliche Wachstumsrate berechnen',
	tool_cagr_description:
		'Berechnen Sie die CAGR aus Anfangswert, Endwert und Jahren. Beispiel: 10.000 → 16.105,10 in 5 Jahren → etwa 10,00 %. Läuft im Browser; nur zur Veranschaulichung — keine Anlageberatung.',
	tool_cagr_article:
		'Die CAGR ist die konstante jährliche Rate, die einen Anfangswert über mehrere Jahre zum Endwert führt — bei einmaliger Verzinsung pro Jahr. Geeignet für grobe Mehrjahresvergleiche; keine Prognose und ohne Mittelzu- oder -abflüsse.',
	tool_cagr_calculate: 'Berechnen',
	tool_cagr_sample: 'Beispiel laden',
	tool_cagr_clear: 'Leeren',
	tool_cagr_begin_label: 'Anfangswert',
	tool_cagr_begin_ph: 'z. B. 10000',
	tool_cagr_end_label: 'Endwert',
	tool_cagr_end_ph: 'z. B. 16105.10',
	tool_cagr_years_label: 'Anzahl der Jahre',
	tool_cagr_years_ph: 'z. B. 5',
	tool_cagr_result_label: 'CAGR',
	tool_cagr_result_note: 'Nur zur Veranschaulichung — keine Anlageberatung.',
	tool_cagr_err_begin: 'Der Anfangswert muss größer als null sein.',
	tool_cagr_err_end: 'Der Endwert muss größer als null sein.',
	tool_cagr_err_years: 'Die Anzahl der Jahre muss größer als null sein.',
	tool_cagr_how_title: 'So funktioniert’s',
	tool_cagr_how_body:
		'Geben Sie einen positiven Anfangswert, Endwert und die Jahre ein. Der Rechner ermittelt den CAGR-% mit der Standardformel. Null oder negative Werte werden abgelehnt. Die Berechnung bleibt im Browser und dient nur dem Lernen.',
	tool_cagr_formula_title: 'Formel und Annahmen',
	tool_cagr_formula_body:
		'CAGR = ((Endwert ÷ Anfangswert)^(1 ÷ Jahre) − 1) × 100. Bitte beachten:',
	tool_cagr_formula_item_1: 'Verzinsung einmal pro Jahr; der genaue Zeitpunkt innerhalb des Jahres wird ignoriert.',
	tool_cagr_formula_item_2: 'Keine Ein- oder Auszahlungen zwischendurch — nur Anfang, Ende und Jahre.',
	tool_cagr_formula_item_3: 'Ergebnisse sind Lernbeispiele, keine Prognosen und keine Anlageberatung.',
	tool_cagr_example_title: 'Beispiel',
	tool_cagr_example:
		'Beispiel: Anfang 10.000, Ende 16.105,10, Jahre 5 → CAGR = ((16105.10 / 10000)^(1/5) − 1) × 100 ≈ 10,00 %.',
	tool_cagr_usecases_title: 'Wann sinnvoll',
	tool_cagr_usecase_1: 'Mehrjähriges Anlage- oder Umsatzwachstum auf Jahresbasis grob vergleichen (nur Illustration).',
	tool_cagr_usecase_2: 'Übungen: CAGR-Prozent mit festen Anfangs-/Endwerten und Jahren trainieren.',
	tool_cagr_usecase_3: 'Grobe annualisierte Skizze vor dem Beratungsgespräch — kein Ersatz für eine volle Analyse.',
	tool_cagr_faq_q1: 'Welche CAGR-Formel nutzt dieses Tool?',
	tool_cagr_faq_a1:
		'CAGR = ((Endwert ÷ Anfangswert)^(1 ÷ Jahre) − 1) × 100. Anfang, Ende und Jahre müssen jeweils größer als null sein.',
	tool_cagr_faq_q2: 'Worin unterscheidet sich CAGR von einfachem ROI?',
	tool_cagr_faq_a2:
		'Einfacher ROI ist ein Einperioden-Prozentsatz und ignoriert die Dauer. CAGR annualisiert das Wachstum über die eingegebenen Jahre.',
	tool_cagr_faq_q3: 'Was, wenn Anfang oder Ende null oder negativ ist?',
	tool_cagr_faq_a3:
		'Beide Werte müssen größer als null sein. Null oder negativ macht die Standardformel hier undefiniert oder irreführend.',
	tool_cagr_faq_q4: 'Ist das Anlageberatung?',
	tool_cagr_faq_a4:
		'Nein. Die Zahlen sind nur Lernbeispiele und keine Anlage-, Steuer- oder Finanzberatung. Vergangene oder hypothetische Entwicklungen garantieren keine künftigen Ergebnisse.',
	tool_cagr_disclaimer:
		'CAGR-Ergebnisse dienen nur der Veranschaulichung und sind keine Anlage-, Steuer- oder Finanzberatung. Vergangene oder hypothetische Renditen garantieren keine künftigen Ergebnisse. Reale Portfolios unterliegen Gebühren, Steuern, Cashflows und Risiken, die diese Seite nicht modelliert.',
	tool_cagr_references:
		'Investopedia-Definition und CAGR-Formeln; standardisierte annualisierte Wachstumsrate ((EV/BV)^(1/n) − 1).',
	tool_cagr_ref_cagr_label: 'Investopedia — Compound Annual Growth Rate (CAGR)',
	tool_cagr_ref_formula_label: 'Investopedia — Formel zur Berechnung der CAGR',
};

export default de;
