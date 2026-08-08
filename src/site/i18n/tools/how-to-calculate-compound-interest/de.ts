/**
 * i18n tool shard (how-to-calculate-compound-interest / de).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_compound_interest_title: 'Zinseszinsrechner — Endkapital berechnen',
	tool_compound_interest_description:
		'Berechnen Sie das Endkapital mit Zinseszins aus Kapital, Jahreszins, Laufzeit und Verzinsungshäufigkeit. Formel A = P(1 + r/n)^(nt); optionaler Modus für einfache Zinsen. Beispiel: 10.000 bei 5 % über 10 Jahre, jährliche Verzinsung → etwa 16.288,95. Berechnung im Browser; nur zu Lernzwecken, keine Anlageberatung.',
	tool_compound_interest_article:
		'Beim Zinseszins werden Zinsen auf bereits gutgeschriebene Zinsen berechnet. Diese Seite zeigt die übliche diskrete Formel, ermöglicht den Vergleich mit einfachen Zinsen bei gleichen Eingaben und nennt die Annahmen für Unterricht und private Schätzungen.',
	tool_compound_interest_calculate: 'Berechnen',
	tool_compound_interest_sample: 'Beispiel laden',
	tool_compound_interest_clear: 'Löschen',
	tool_compound_interest_mode_label: 'Zinsart',
	tool_compound_interest_mode_compound: 'Zinseszins',
	tool_compound_interest_mode_simple: 'Einfache Zinsen',
	tool_compound_interest_principal_label: 'Kapital (P)',
	tool_compound_interest_principal_placeholder: 'z. B. 10000',
	tool_compound_interest_rate_label: 'Jahreszins (%)',
	tool_compound_interest_rate_placeholder: 'z. B. 5',
	tool_compound_interest_years_label: 'Laufzeit (Jahre)',
	tool_compound_interest_years_placeholder: 'z. B. 10',
	tool_compound_interest_freq_label: 'Verzinsungen pro Jahr (n)',
	tool_compound_interest_freq_1: 'Jährlich (1)',
	tool_compound_interest_freq_2: 'Halbjährlich (2)',
	tool_compound_interest_freq_4: 'Vierteljährlich (4)',
	tool_compound_interest_freq_12: 'Monatlich (12)',
	tool_compound_interest_freq_365: 'Täglich (365)',
	tool_compound_interest_result_future: 'Endkapital (A)',
	tool_compound_interest_result_interest: 'Zinsertrag',
	tool_compound_interest_result_note: 'Nur Lehrbeispiel — keine Anlageberatung.',
	tool_compound_interest_err_principal: 'Das Kapital muss größer als null sein.',
	tool_compound_interest_err_years: 'Die Laufzeit in Jahren muss größer als null sein.',
	tool_compound_interest_err_rate: 'Der Jahreszins muss null oder eine positive Zahl sein.',
	tool_compound_interest_err_overflow: 'Das Ergebnis ist zu groß. Kürzere Laufzeit oder niedrigeren Zins wählen.',
	tool_compound_interest_how_title: 'So funktioniert es',
	tool_compound_interest_how_body:
		'Kapital, nominalen Jahreszins in Prozent und Jahre eingeben. Im Zinseszins-Modus wählen Sie, wie oft pro Jahr verzinst wird. Das Tool berechnet Endkapital und Zinsen. Im Modus einfache Zinsen gilt A = P(1 + r t); die Häufigkeit wird ignoriert.',
	tool_compound_interest_formula_title: 'Formel und Annahmen',
	tool_compound_interest_formula_body:
		'Zinseszins: A = P (1 + r/n)^(n t), wobei r der nominale Jahreszins als Dezimalzahl und n Verzinsungen pro Jahr ist. Einfach: A = P (1 + r t). Beachten Sie:',
	tool_compound_interest_formula_item_1:
		'Der Zins ist der eingegebene nominale Jahreszins; Steuern, Gebühren und Inflation werden nicht abgezogen.',
	tool_compound_interest_formula_item_2:
		'Keine Ein- oder Auszahlungen in der Laufzeit — nur das Anfangskapital wächst.',
	tool_compound_interest_formula_item_3:
		'Die Verzinsungshäufigkeit beeinflusst das effektive Wachstum; APY-Details stehen in den FAQ, nicht als separates Tool.',
	tool_compound_interest_formula_item_4:
		'Ergebnisse sind Lehrbeispiele, keine Prognosen oder Anlageberatung.',
	tool_compound_interest_example_title: 'Beispiel',
	tool_compound_interest_example:
		'Beispiel: Kapital 10.000, 5 % p. a., 10 Jahre, einmal jährlich verzinst → A ≈ 16.288,95, Zinsen ≈ 6.288,95. Gleiche Eingaben bei einfachen Zinsen → A = 15.000.',
	tool_compound_interest_usecases_title: 'Wann sinnvoll',
	tool_compound_interest_usecase_1:
		'Sparen: grobe Schätzung des Endkapitals bei Einmalanlage und gegebenem Zins (nur Illustration).',
	tool_compound_interest_usecase_2:
		'Unterricht: die Zinseszinsformel mit festen P, r, n und t üben.',
	tool_compound_interest_usecase_3:
		'Modi vergleichen: auf einfache Zinsen mit gleichen Werten wechseln und den Unterschied sehen.',
	tool_compound_interest_faq_q1: 'Welche Zinseszinsformel wird verwendet?',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t) mit r als dezimaler Jahreszins und n Verzinsungen pro Jahr. Zinsertrag = A − P.',
	tool_compound_interest_faq_q2: 'Worin unterscheiden sich einfache Zinsen?',
	tool_compound_interest_faq_a2:
		'Einfache Zinsen: A = P (1 + r t), ohne Zinseszins. Modus „Einfache Zinsen“ wählen; Häufigkeit wird ignoriert.',
	tool_compound_interest_faq_q3: 'Was bedeutet die Verzinsungshäufigkeit?',
	tool_compound_interest_faq_a3:
		'n ist, wie oft pro Jahr Zinsen gutgeschrieben werden (1 jährlich, 12 monatlich, 365 täglich). Bei gleichem Nominalzins führt höheres n meist zu mehr Endkapital.',
	tool_compound_interest_faq_q4: 'Ist das Anlageberatung?',
	tool_compound_interest_faq_a4:
		'Nein. Die Zahlen sind nur Lehrbeispiele und keine Anlage-, Steuer- oder Finanzberatung.',
	tool_compound_interest_faq_q5: 'Was passiert bei null Prozent Zins?',
	tool_compound_interest_faq_a5: 'Bei 0 % Jahreszins entspricht das Endkapital dem Kapital; Zinsertrag ist 0.',
	tool_compound_interest_disclaimer:
		'Ergebnisse für Zinses- und einfache Zinsen sind nur Lehrbeispiele und keine Anlage-, Steuer- oder Finanzberatung. Vergangenes oder hypothetisches Wachstum garantiert keine künftigen Ergebnisse.',
	tool_compound_interest_references:
		'Investopedia-Definitionen zu compound interest und simple interest; Standardformel diskreter Verzinsung A = P(1 + r/n)^(nt).',
	tool_compound_interest_ref_compound_label: 'Investopedia — Zinseszins',
	tool_compound_interest_ref_simple_label: 'Investopedia — Einfache Zinsen',
};

export default de;
