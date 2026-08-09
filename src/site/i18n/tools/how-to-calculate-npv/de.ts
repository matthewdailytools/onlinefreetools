/**
 * i18n tool shard (how-to-calculate-npv / de).
 * Deutsch unabhängig umgeschrieben (kein Englisch-Abklatsch).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_npv_title: 'NPV-Rechner — Nettobarwert (Kapitalwert) berechnen',
	tool_npv_description:
		'Berechnen Sie den NPV (Nettobarwert/Kapitalwert) aus jährlichem Diskontsatz, Anfangsinvestition und jährlichen Cashflows. Beispiel: Investition 10.000 bei 10 % mit Cashflows 3.000 / 4.200 / 6.800 → NPV ≈ 1.307,29. Läuft im Browser; nur Lernillustration — keine Anlageberatung.',
	tool_npv_article:
		'Der Nettobarwert diskontiert künftige Cashflows mit einem gewählten Jahreszins und zieht die Anfangsinvestition ab. Ein positiver NPV heißt nur: unter Ihren Annahmen übersteigen die diskontierten Zuflüsse den Abfluss — keine Prognose und keine Kaufempfehlung.',
	tool_npv_calculate: 'Berechnen',
	tool_npv_sample: 'Beispiel laden',
	tool_npv_clear: 'Löschen',
	tool_npv_rate_label: 'Diskontsatz (% pro Jahr)',
	tool_npv_rate_ph: 'z. B. 10',
	tool_npv_invest_label: 'Anfangsinvestition (Abfluss)',
	tool_npv_invest_ph: 'z. B. 10000',
	tool_npv_cf_label: 'Cashflows nach Jahr (Komma oder Zeilenumbruch)',
	tool_npv_cf_ph: 'z. B. 3000, 4200, 6800',
	tool_npv_cf_hint: 'CF1…CFn für Jahre 1…n. Positiv = Zufluss; negative Werte erlaubt.',
	tool_npv_result_label: 'NPV',
	tool_npv_result_note: 'Nur Lernillustration — keine Anlageberatung.',
	tool_npv_err_rate: 'Geben Sie einen endlichen Diskontsatz (% pro Jahr) ein. −100 % oder weniger ist unzulässig.',
	tool_npv_err_invest: 'Die Anfangsinvestition muss größer als null sein.',
	tool_npv_err_cf: 'Geben Sie mindestens eine gültige Cashflow-Zahl ein (Komma oder Zeilenumbruch).',
	tool_npv_how_title: 'So funktioniert’s',
	tool_npv_how_body:
		'Tragen Sie den Jahresdiskontsatz, eine positive Anfangsinvestition (Abfluss in t=0) und die Cashflows der Jahre 1…n ein. Das Tool diskontiert jeden Cashflow und zieht die Anfangsauslage ab. Die Rechnung bleibt im Browser und dient nur dem Lernen.',
	tool_npv_formula_title: 'Formel und Annahmen',
	tool_npv_formula_body:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ) für t = 1…n, wobei r der Jahresdiskontsatz als Dezimalzahl ist. Beachten Sie:',
	tool_npv_formula_item_1: 'Cashflows gelten als Jahresendbeträge; der Zeitpunkt innerhalb des Jahres wird ignoriert.',
	tool_npv_formula_item_2: 'Der Diskontsatz ist über die Jahre konstant; Steuern, Gebühren und Inflation werden nicht modelliert, sofern Sie sie nicht einrechnen.',
	tool_npv_formula_item_3: 'Ergebnisse sind Lernillustrationen, keine Prognosen und keine Anlageberatung.',
	tool_npv_example_title: 'Beispiel',
	tool_npv_example:
		'Beispiel: Anfangsinvestition 10.000, Diskontsatz 10 %/Jahr, Cashflows 3.000 / 4.200 / 6.800 → NPV = −10000 + 3000/1,1 + 4200/1,1² + 6800/1,1³ ≈ 1.307,29.',
	tool_npv_usecases_title: 'Wann sinnvoll',
	tool_npv_usecase_1: 'Grobe Projektvorauswahl: diskontierte Zuflüsse mit Anfangskosten vergleichen (nur Illustration).',
	tool_npv_usecase_2: 'Übungen: NPV-Summe mit festem Satz und kurzer Cashflow-Liste üben.',
	tool_npv_usecase_3: 'Skizze vor dem Beratergespräch — kein Ersatz für eine vollständige Analyse.',
	tool_npv_faq_q1: 'Welche NPV-Formel nutzt dieses Tool?',
	tool_npv_faq_a1:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ). I₀ ist die Anfangsinvestition, r der Jahresdiskontsatz als Dezimalzahl, CFₜ die Cashflows der Jahre 1…n.',
	tool_npv_faq_q2: 'Unterschied zu einfachem ROI oder CAGR?',
	tool_npv_faq_a2:
		'Einfaches ROI ist eine Einperioden-Rendite. CAGR annualisiert das Wachstum zwischen zwei Werten. NPV diskontiert eine Cashflow-Folge und liefert einen Geldbetrag, keinen Wachstumssatz.',
	tool_npv_faq_q3: 'Wie gebe ich Cashflows ein?',
	tool_npv_faq_a3:
		'Listen Sie Beträge für Jahr 1 bis n, getrennt durch Kommas oder Zeilenumbrüche. Positiv = Zufluss; negativ = spätere Abflüsse. Mindestens eine gültige Zahl ist nötig.',
	tool_npv_faq_q4: 'Ist das Anlageberatung?',
	tool_npv_faq_a4:
		'Nein. Zahlen sind nur Lernillustrationen und keine Anlage-, Steuer- oder Finanzberatung. Ein positiver NPV mit Ihren Eingaben garantiert keinen realen Gewinn.',
	tool_npv_disclaimer:
		'NPV-Ergebnisse sind nur Lernillustrationen und stellen keine Anlage-, Steuer- oder Finanzberatung dar. Diskontsatz, Cashflow-Timing, Gebühren, Steuern und Risiko sind vereinfacht. Hypothetische Zahlen garantieren keine künftigen Ergebnisse.',
	tool_npv_references:
		'Investopedia-Definition von NPV sowie Leitfaden Barwert vs. Nettobarwert; Standardformel der diskontierten Cashflows.',
	tool_npv_ref_npv_label: 'Investopedia — Net Present Value (NPV)',
	tool_npv_ref_pv_label: 'Investopedia — Barwert vs. Nettobarwert',
};

export default de;
