/**
 * i18n 工具分片（how-to-calculate-one-rep-max / de）。
 * 1RM 估算：Epley / Brzycki / Lombardi 对比与 %1RM 训练负荷表；含安全免责。
 */
import type { SiteLangDict } from '../../../types';

/** 德语界面与 SEO 文案（SiteLangDict；占位符 {w}{r}{orm}{lo}{hi}{p80} 勿改）。 */
const de: SiteLangDict = {
	tool_one_rep_max_title: "1RM-Rechner — Maximalkraft aus Gewicht und Wiederholungen schätzen",
	tool_one_rep_max_description: "Schätzen Sie Ihr Ein-Wiederholungs-Maximum (1RM) aus einer Submaximal-Serie mit Epley 1RM ≈ w×(1+Wdh/30) und vergleichen Sie Brzycki und Lombardi. Beispiel: 100 bei 5 Wdh → etwa 116,7. Mit %1RM-Lasttabelle. Nur Bildungs-Schätzung — kein Trainings- oder Medizinrat.",
	tool_one_rep_max_article: "1RM aus Gewicht und Wiederholungen mit Epley schätzen, Brzycki und Lombardi vergleichen und Trainingsprozente der Epley-1RM ablesen.",
	tool_one_rep_max_desc: "1RM aus Submaximal-Satz mit Epley, Brzycki und Lombardi schätzen, plus %1RM-Lasttabelle.",

	tool_one_rep_max_safety_banner: "Nur eine Bildungs-Schätzung. Versuchen Sie kein echtes Maximum allein aus dieser Zahl — ohne Aufwärmen, Spotter und Anleitung. Kein Medizin- oder Trainingsrat.",
	tool_one_rep_max_weight_label: "Gehobenes Gewicht",
	tool_one_rep_max_weight_ph: "z. B. 100",
	tool_one_rep_max_reps_label: "Ausgeführte Wiederholungen",
	tool_one_rep_max_reps_ph: "z. B. 5",
	tool_one_rep_max_hint: "Tragen Sie ein Gewicht ein, das Sie für mehrere saubere Wiederholungen mit guter Technik geschafft haben. Ganze Wdh von 1 bis 12 passen am besten. Dezimalkomma beim Gewicht ist in Ordnung.",
	tool_one_rep_max_calculate: "Berechnen",
	tool_one_rep_max_sample: "Beispiel laden",
	tool_one_rep_max_clear: "Leeren",
	tool_one_rep_max_ormOut_label: "Geschätztes 1RM (Epley)",
	tool_one_rep_max_pct_title: "Trainingslasten aus Epley-1RM",
	tool_one_rep_max_pct_col_pct: "% der 1RM",
	tool_one_rep_max_pct_col_load: "Last",
	tool_one_rep_max_steps_title: "Schritte",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "Formel-Spanne: {lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley: 1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}.",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}.",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi: 1RM ≈ w × r^0,1 = {w} × {r}^0,1 = {orm}.",
	tool_one_rep_max_step_pct_tpl: "Bei 80 % der Epley-1RM ({orm}): Last ≈ 0,8 × {orm} = {p80}.",
	tool_one_rep_max_result_note: "Formeln weichen bei mehr Wdh stärker ab. Bevorzugen Sie Sätze mit ≤10 Wdh für eine Lehr-Schätzung. Aufwärmen; nie allein nach einer groben Rechnerzahl maximieren.",
	tool_one_rep_max_err_generic: "Geben Sie ein positives Gewicht und eine ganze Wdh-Zahl von 1 bis 12 ein (z. B. 100 und 5).",
	tool_one_rep_max_err_high_reps: "Über etwa 12 Wdh sind diese Formeln unzuverlässig. Nehmen Sie einen schwereren Satz mit weniger sauberen Wdh.",

	tool_one_rep_max_how_title: "So schätzen Sie Ihr Ein-Wiederholungs-Maximum",
	tool_one_rep_max_how_body: "Geben Sie das gehobene Gewicht und die sauberen Wiederholungen ein, dann Berechnen. Sie erhalten Epley-1RM, Brzycki- und Lombardi-Vergleich sowie eine Tabelle üblicher Trainingsprozente.",
	tool_one_rep_max_how_item_1: "Tragen Sie das Langhantel- oder Kurzhantelgewicht eines Satzes mit guter Technik ein.",
	tool_one_rep_max_how_item_2: "Geben Sie die erfolgreichen Wdh ein (ganze Zahlen 1–12 eignen sich am besten).",
	tool_one_rep_max_how_item_3: "Klicken Sie auf Berechnen für Epley-1RM plus Brzycki und Lombardi nebeneinander.",
	tool_one_rep_max_how_item_4: "Lesen Sie die %1RM-Tabelle (50 %–95 %) für grobe Arbeitsgewichte; Beispiel laden wechselt 100×5, 60×8, 80×3 und eine echte Einzelwiederholung.",

	tool_one_rep_max_why_choose_title: "Was dieser 1RM-Rechner Ihnen liefert",
	tool_one_rep_max_why_choose_item_1: "Epley-1RM als Hauptschätzung, Brzycki und Lombardi zum Vergleich.",
	tool_one_rep_max_why_choose_item_2: "Eine Formel-Spanne, damit Sie sehen, wie weit die drei Schätzungen auseinanderliegen.",
	tool_one_rep_max_why_choose_item_3: "Eine Lasttabelle von 50 % bis 95 % der Epley-1RM.",
	tool_one_rep_max_why_choose_item_4: "Klare Schritte, die Ihr Gewicht und Ihre Wdh in jede Formel einsetzen.",
	tool_one_rep_max_why_choose_item_5: "Sicherheitshinweis: nur Bildungszweck — keine Anweisung, ein Maximum zu versuchen.",

	tool_one_rep_max_formula_title: "Formeln für das Ein-Wiederholungs-Maximum",
	tool_one_rep_max_formula_body: "Das Ein-Wiederholungs-Maximum (1RM) ist die schwerste Last, die Sie einmal mit guter Technik heben könnten. Diese Gleichungen schätzen es aus einer Submaximal-Serie.",
	tool_one_rep_max_formula_item_1: "Epley: 1RM ≈ w × (1 + r/30). Beispiel: w = 100, r = 5 → 100 × (1 + 5/30) = 116,67.",
	tool_one_rep_max_formula_item_2: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r). Gleiches Beispiel → 100 × 36 ÷ 32 = 112,5. Für r ≥ 37 nicht definiert.",
	tool_one_rep_max_formula_item_3: "Lombardi: 1RM ≈ w × r^0,1. Gleiches Beispiel → 100 × 5^0,1 ≈ 117,46.",
	tool_one_rep_max_formula_item_4: "Schätzungen divergieren mit steigenden Wdh; weniger saubere Wdh geben eine engere Lehr-Schätzung.",
	tool_one_rep_max_formula_item_5: "Trainingsprozente (z. B. 80 % der 1RM) sind nur Planungshilfen — anpassen für Ermüdung, Übung und Erfahrung.",

	tool_one_rep_max_example_title: "Durchgerechnete Beispiele",
	tool_one_rep_max_example: "Beispiel laden startet bei 100 für 5 Wdh: Epley ≈ 116,7, Brzycki 112,5, Lombardi ≈ 117,5. Danach 60 × 8, dann 80 × 3, dann eine echte Einzelwiederholung (135 × 1), wo alle Formeln 135 liefern. Technik strikt halten; Satz abbrechen, wenn die Form bricht.",

	tool_one_rep_max_usecases_title: "Wann ein 1RM-Rechner sinnvoll ist",
	tool_one_rep_max_usecase_1: "Hausaufgaben oder Unterricht: Gewicht und Wdh in Epley einsetzen und die Schritte zeigen.",
	tool_one_rep_max_usecase_2: "Grobe Programmskizze: geschätzte 1RM in Arbeitsgewichte bei 70 %–85 % umrechnen.",
	tool_one_rep_max_usecase_3: "Formeln vergleichen: sehen, wie Epley, Brzycki und Lombardi beim gleichen Satz abweichen.",
	tool_one_rep_max_usecase_4: "Echten Maximalversuch vermeiden, wenn nur eine Submaximal-Serie protokolliert ist.",

	tool_one_rep_max_faq_q1: "Wie berechnet man 1RM mit der Epley-Formel?",
	tool_one_rep_max_faq_a1: "Multiplizieren Sie das Gewicht mit (1 + Wdh/30). Bei 100 für 5 Wdh: 100 × (1 + 5/30) = 116,67. Diese Seite zeigt auch Brzycki und Lombardi zum Vergleich.",
	tool_one_rep_max_faq_q2: "Was ist der Unterschied zwischen Epley und Brzycki?",
	tool_one_rep_max_faq_a2: "Epley addiert linear Wdh/30. Brzycki nutzt 36/(37−Wdh). Für 100×5 liefert Epley ≈116,7 und Brzycki 112,5. Keiner ersetzt einen betreuten Maximaltest.",
	tool_one_rep_max_faq_q3: "Wie viele Wiederholungen eignen sich für eine gute Schätzung?",
	tool_one_rep_max_faq_a3: "Meist 1–10 saubere Wdh. Über etwa 12 werden die Formeln unzuverlässig; diese Seite bittet um einen schwereren Satz mit weniger Wdh.",
	tool_one_rep_max_faq_q4: "Was bedeutet 80 % der 1RM?",
	tool_one_rep_max_faq_a4: "Eine übliche Arbeitsintensität: Last ≈ 0,8 × geschätzte 1RM. Bei Epley-1RM 116,7 sind 80 % etwa 93,3 in derselben Einheit.",
	tool_one_rep_max_faq_q5: "Ist es sicher, mein berechnetes 1RM zu versuchen?",
	tool_one_rep_max_faq_a5: "Nicht allein nach dieser Seite. Zahl als Bildung behandeln. Echter Maximalversuch braucht Aufwärmen, Spotting, Technik und idealerweise Anleitung — kein Rat zum Maximieren.",
	tool_one_rep_max_faq_q6: "Spielen Einheiten eine Rolle (kg vs. lb)?",
	tool_one_rep_max_faq_a6: "Verwenden Sie eine durchgängige Einheit. Die Formeln sind dimensionslose Verhältnisse; die 1RM hat dieselbe Einheit wie Ihr Gewicht.",
	tool_one_rep_max_faq_q7: "Ist das Medizin- oder Trainingsberatung?",
	tool_one_rep_max_faq_a7: "Nein. Bildungsrechner zum Verständnis üblicher 1RM-Gleichungen. Für Training oder Gesundheit qualifizierten Coach oder Arzt konsultieren.",

	tool_one_rep_max_disclaimer: "Nur bildungsorientierte 1RM-Schätzung — kein Coaching, Medizin- oder Fachrat. Versuchen Sie keinen Maximalversuch allein auf Basis dieses Rechners.",
	tool_one_rep_max_references: "Gängige Lehrbuch- und Wikipedia-Beschreibungen von 1RM-Vorhersagegleichungen.",
	tool_one_rep_max_ref_a_label: "Wikipedia — One-repetition maximum",
	tool_one_rep_max_ref_b_label: "Wikipedia — Krafttraining",
};

export default de;
