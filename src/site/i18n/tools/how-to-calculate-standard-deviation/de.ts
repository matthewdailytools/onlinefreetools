/**
 * i18n tool shard (how-to-calculate-standard-deviation / de).
 * Eigenständige deutsche Fassung (kein englisches Parallelgerüst).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_std_dev_title: 'Standardabweichungs-Rechner — SD und Varianz berechnen',
	tool_std_dev_description:
		'Zahlenliste einfügen und Stichproben- (n−1) oder Populations-Standardabweichung (n) samt Varianz berechnen. Klassikbeispiel 2, 4, 4, 4, 5, 5, 7, 9 → Populations-SD = 2 (Stichprobe ≈ 2,14). Rechnung im Browser; Werte bleiben auf dem Gerät, ohne Server-Upload.',
	tool_std_dev_article:
		'Die Standardabweichung beschreibt die Streuung um den Mittelwert. Stichprobe (Bessel, ÷ n−1), wenn die Liste eine Teilmenge ist; Population (÷ n), wenn sie die komplette Menge ist. Die Varianz ist das Quadrat davon.',
	tool_std_dev_calculate: 'Berechnen',
	tool_std_dev_sample: 'Beispiel laden',
	tool_std_dev_clear: 'Löschen',
	tool_std_dev_numbers_label: 'Zahlen',
	tool_std_dev_numbers_ph: 'z. B. 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: 'Trennen mit Komma, Leerzeichen oder Zeilenumbruch.',
	tool_std_dev_mode_label: 'Modus',
	tool_std_dev_mode_sample: 'Stichprobe (n−1)',
	tool_std_dev_mode_population: 'Population (n)',
	tool_std_dev_result_count: 'Anzahl',
	tool_std_dev_result_mean: 'Mittelwert',
	tool_std_dev_result_variance: 'Varianz',
	tool_std_dev_result_sd: 'Standardabweichung',
	tool_std_dev_result_note_sample: 'Stichprobenmodus: Bessel-Korrektur (Division durch n−1).',
	tool_std_dev_result_note_population: 'Populationsmodus: Division durch n (vollständige Menge).',
	tool_std_dev_err_empty: 'Bitte mindestens eine gültige Zahl eingeben.',
	tool_std_dev_err_sample_n: 'Für die Stichproben-SD braucht es mindestens zwei Zahlen.',
	tool_std_dev_how_title: 'So funktioniert’s',
	tool_std_dev_how_body:
		'Zahlen einfügen, Modus wählen, berechnen. Mittelwert bilden, Summe der Abweichungsquadrate, durch n−1 oder n teilen → Varianz, Wurzel → Standardabweichung. Alles lokal im Browser, ohne Server-Upload.',
	tool_std_dev_formula_title: 'Formeln',
	tool_std_dev_formula_body:
		'x̄ sei der Mittelwert. Die Varianz mittelt die Abweichungsquadrate; die Standardabweichung ist die Wurzel daraus:',
	tool_std_dev_formula_item_1: 'Mittelwert: x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: 'Stichprobenvarianz: s² = Σ(xᵢ − x̄)² / (n − 1); s = √s²',
	tool_std_dev_formula_item_3: 'Populationsvarianz: σ² = Σ(xᵢ − x̄)² / n; σ = √σ²',
	tool_std_dev_example_title: 'Beispiel',
	tool_std_dev_example:
		'Bei 2, 4, 4, 4, 5, 5, 7, 9: Mittelwert 5, Summe der Quadrate 32. Population: σ² = 4 → σ = 2. Stichprobe: s² ≈ 4,571 → s ≈ 2,138. Das bekannte „SD = 2“ ist der Populationswert.',
	tool_std_dev_usecases_title: 'Wann sinnvoll',
	tool_std_dev_usecase_1: 'Hausaufgabe: kurze Notenliste auf Stichprobe vs. Population prüfen.',
	tool_std_dev_usecase_2: 'Schnell die Streuung einer kleinen Spalte vor dem Chart checken.',
	tool_std_dev_usecase_3: 'Zwei kurze Reihen im gleichen Modus auf Volatilität vergleichen.',
	tool_std_dev_faq_q1: 'Wann Stichprobe, wann Population?',
	tool_std_dev_faq_a1:
		'Durch n−1 teilen, um aus einer Stichprobe die Streuung einer größeren Menge zu schätzen. Durch n teilen, wenn die Liste die komplette Population ist.',
	tool_std_dev_faq_q2: 'Wie hängen Varianz und Standardabweichung zusammen?',
	tool_std_dev_faq_a2:
		'Die Varianz mittelt die quadrierten Abweichungen. Die Standardabweichung ist die Wurzel und hat dieselben Einheiten wie die Daten.',
	tool_std_dev_faq_q3: 'Warum ergibt das Klassikbeispiel 2?',
	tool_std_dev_faq_a3:
		'Für diese acht Werte ist die Populations-SD exakt 2; die Stichproben-SD liegt bei etwa 2,14. Lehrbücher zeigen oft den Populationswert.',
	tool_std_dev_faq_q4: 'Werden meine Zahlen hochgeladen?',
	tool_std_dev_faq_a4:
		'Nein. Parsing und Rechnung laufen im Browser-Tab. Die Werte bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_std_dev_references:
		'Wikipedia-Artikel zu Standardabweichung und Varianz; Einführungsformeln Stichprobe/Population.',
	tool_std_dev_ref_sd_label: 'Wikipedia — Standardabweichung',
	tool_std_dev_ref_var_label: 'Wikipedia — Varianz',
};

export default de;
