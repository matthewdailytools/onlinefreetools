/**
 * i18n tool shard (how-to-calculate-acceleration / de).
 * Deutsche Fassung (Sie-Form, Dezimalkomma): Beschleunigung berechnen über a=(v−v0)/t;
 * nach a, v, v0 oder t umstellen, mit Rechenweg. Eigenständig nach 03-locale-briefs (de) geschrieben.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsches Wörterbuch des Beschleunigungsrechners; Schlüsselsatz identisch mit en.ts. */
const de: SiteLangDict = {
	tool_acceleration_title: "Beschleunigung berechnen — aus Geschwindigkeitsänderung und Zeit",
	tool_acceleration_description:
		"Beschleunigung berechnen mit der Formel a = (v − v0) ÷ t – oder umstellen nach Endgeschwindigkeit, Anfangsgeschwindigkeit oder Zeit. Beispiel: von 0 auf 10 in 2 Sekunden ergibt a = 5. Jeder Rechenschritt wird mit angezeigt.",
	tool_acceleration_calculate: "Berechnen",
	tool_acceleration_sample: "Beispiel laden",
	tool_acceleration_clear: "Leeren",
	tool_acceleration_solve_label: "Gesuchte Größe",
	tool_acceleration_solve_a: "Beschleunigung (a)",
	tool_acceleration_solve_v: "Endgeschwindigkeit (v)",
	tool_acceleration_solve_v0: "Anfangsgeschwindigkeit (v0)",
	tool_acceleration_solve_t: "Zeit (t)",
	tool_acceleration_v0_label: "Anfangsgeschwindigkeit v0",
	tool_acceleration_v0_ph: "z. B. 0",
	tool_acceleration_v_label: "Endgeschwindigkeit v",
	tool_acceleration_v_ph: "z. B. 10",
	tool_acceleration_t_label: "Zeit t",
	tool_acceleration_t_ph: "z. B. 2",
	tool_acceleration_a_label: "Beschleunigung a",
	tool_acceleration_a_ph: "z. B. 5",
	tool_acceleration_accOut_label: "Beschleunigung",
	tool_acceleration_vOut_label: "Endgeschwindigkeit",
	tool_acceleration_v0Out_label: "Anfangsgeschwindigkeit",
	tool_acceleration_tOut_label: "Zeit",
	tool_acceleration_work_label: "Rechenweg",
	tool_acceleration_result_note:
		"Gilt für eine gleichmäßig beschleunigte Bewegung auf einer Geraden. Geben Sie Geschwindigkeit und Zeit in zusammenpassenden Einheiten an (m/s und s ergeben m/s²). Ein negatives a bedeutet Abbremsen, sofern beide Geschwindigkeiten dieselbe Richtung als positiv zählen.",
	tool_acceleration_err_finite: "Bitte tragen Sie in jedes sichtbare Feld eine gültige Zahl ein.",
	tool_acceleration_err_time: "Die Zeit muss größer als 0 sein.",
	tool_acceleration_err_zero_a: "Bei a = 0 lässt sich keine Zeit berechnen – das wäre eine Division durch null.",
	tool_acceleration_how_title: "So berechnen Sie die Beschleunigung",
	tool_acceleration_how_body:
		"Die Beschleunigung ist die Geschwindigkeitsänderung pro Zeit: a = (v − v0) ÷ t. Sie wählen, welche der vier Größen fehlt, tragen die übrigen ein, und der Rechner stellt dieselbe Formel passend um.",
	tool_acceleration_how_item_1:
		"Wählen Sie unter „Gesuchte Größe“ aus, ob Sie Beschleunigung, Endgeschwindigkeit, Anfangsgeschwindigkeit oder Zeit suchen.",
	tool_acceleration_how_item_2:
		"Füllen Sie alle eingeblendeten Felder aus – durchgehend im selben Einheitensystem, am einfachsten in m/s und s.",
	tool_acceleration_how_item_3: "Klicken Sie auf „Berechnen“.",
	tool_acceleration_how_item_4:
		"Lesen Sie das Ergebnis samt Rechenweg ab, etwa a = (10 − 0) ÷ 2 = 5.",
	tool_acceleration_why_choose_title: "Warum Sie die Beschleunigung mit diesem Rechner berechnen sollten",
	tool_acceleration_why_choose_item_1:
		"Der Rechenweg steht direkt unter dem Ergebnis – Sie können (v − v0) ÷ t oder v = v0 + a · t so ins Heft übernehmen, wie es die Lehrkraft sehen will.",
	tool_acceleration_why_choose_item_2:
		"Eine Formel, vier Richtungen: Gegeben sind in der Aufgabe oft a und t statt v? Dann stellen Sie einfach auf Endgeschwindigkeit oder Anfangsgeschwindigkeit um.",
	tool_acceleration_why_choose_item_3:
		"Klare Grenzen des Modells: gleichmäßig beschleunigte, geradlinige Bewegung – keine veränderliche Beschleunigung und keine Kreisbewegung.",
	tool_acceleration_why_choose_item_4:
		"Unmögliche Eingaben werden benannt statt still verrechnet: t ≤ 0 oder a = 0 bei gesuchter Zeit.",
	tool_acceleration_why_choose_item_5:
		"Die Rechnung läuft in Ihrem Browser; Ihre Zahlen werden nicht an einen Server gesendet.",
	tool_acceleration_formula_title: "Formel und Umstellungen",
	tool_acceleration_formula_body:
		"Bei konstanter Beschleunigung gilt a = (v − v0) ÷ t. Umgestellt beschreibt dieselbe Gleichung denselben Bewegungsablauf, nur mit einer anderen Unbekannten.",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t. Beispiel: (10 − 0) ÷ 2 = 5.",
	tool_acceleration_formula_item_2: "v = v0 + a · t. Beispiel: 0 + 5 · 2 = 10.",
	tool_acceleration_formula_item_3: "v0 = v − a · t. Beispiel: 10 − 5 · 2 = 0.",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a, nur für a ≠ 0. Beispiel: (10 − 0) ÷ 5 = 2.",
	tool_acceleration_example_title: "Rechenbeispiel",
	tool_acceleration_example:
		"Ein Körper startet aus dem Stand und erreicht nach 2 Zeiteinheiten die Geschwindigkeit 10. Gesucht ist a: a = (10 − 0) ÷ 2 = 5. Stellen Sie danach auf Endgeschwindigkeit um und geben v0 = 0, a = 5 und t = 2 ein, erhalten Sie wieder v = 10 – derselbe Vorgang, nur rückwärts gelesen.",
	tool_acceleration_usecases_title: "Wofür Sie den Rechner nutzen können",
	tool_acceleration_usecase_1:
		"Hausaufgaben und Klausurvorbereitung zur gleichmäßig beschleunigten Bewegung in der Physik.",
	tool_acceleration_usecase_2:
		"Nachprüfen, ob ein Auto, das in 4 s von 0 auf 20 m/s kommt, tatsächlich mit 5 m/s² beschleunigt.",
	tool_acceleration_usecase_3:
		"Bremsweg-Aufgaben vorbereiten: berechnen, wie lange eine konstante Verzögerung bis zum Stillstand braucht.",
	tool_acceleration_usecase_4:
		"Die Lösung aus dem Lehrbuch Schritt für Schritt mit dem eigenen Rechenweg vergleichen.",
	tool_acceleration_faq_q1: "Wie berechnet man die Beschleunigung?",
	tool_acceleration_faq_a1:
		"Ziehen Sie die Anfangsgeschwindigkeit von der Endgeschwindigkeit ab und teilen Sie das Ergebnis durch die Zeit: a = (v − v0) ÷ t. Von 0 auf 10 m/s in 2 Sekunden ergibt a = 5 m/s².",
	tool_acceleration_faq_q2: "In welchen Einheiten muss ich rechnen?",
	tool_acceleration_faq_a2:
		"In beliebigen, aber einheitlichen Einheiten. Mit Metern und Sekunden erhalten Sie m/s². Wer km/h mit Sekunden mischt, ohne vorher umzurechnen (km/h ÷ 3,6 = m/s), bekommt ein falsches Ergebnis.",
	tool_acceleration_faq_q3: "Was bedeutet eine negative Beschleunigung?",
	tool_acceleration_faq_a3:
		"Der Körper wird langsamer (Verzögerung) oder beschleunigt entgegen der als positiv gewählten Richtung. Bremst ein Fahrzeug in 2 s von 20 auf 10 m/s ab, gilt a = (10 − 20) ÷ 2 = −5 m/s².",
	tool_acceleration_faq_q4: "Beträgt die Fallbeschleunigung 9,8 m/s²?",
	tool_acceleration_faq_a4:
		"In Erdnähe rechnet man ohne Luftwiderstand meist mit g ≈ 9,8 m/s² (genauer etwa 9,81). Zählt nach oben als positiv, tragen Sie a = −9,8 ein, um beim freien Fall Geschwindigkeit oder Zeit zu bestimmen.",
	tool_acceleration_faq_q5: "Worin unterscheidet sich Beschleunigung von Durchschnittsgeschwindigkeit?",
	tool_acceleration_faq_a5:
		"Die Durchschnittsgeschwindigkeit ist Strecke ÷ Zeit. Die Beschleunigung beschreibt, wie schnell sich die Geschwindigkeit selbst ändert. Brauchen Sie nur die Geschwindigkeit aus Weg und Zeit, nutzen Sie den Geschwindigkeitsrechner.",
	tool_acceleration_faq_q6: "Warum lässt sich bei a = 0 keine Zeit berechnen?",
	tool_acceleration_faq_a6:
		"Ohne Beschleunigung ändert sich die Geschwindigkeit nie, t = (v − v0) ÷ a ist dann nicht definiert. Entweder sind v0 und v bereits gleich, oder die Beschleunigung ist eben nicht null.",
	tool_acceleration_faq_q7: "Funktioniert das auch bei einer Kreisbewegung?",
	tool_acceleration_faq_a7:
		"Nein. Hier geht es um konstante Beschleunigung entlang einer Geraden. Die Zentripetalbeschleunigung hängt von Bahngeschwindigkeit und Radius ab und folgt einer anderen Formel.",
	tool_acceleration_article: "Beschleunigung",
	tool_acceleration_disclaimer:
		"Zum Lernen und zum Kontrollieren von Hausaufgaben. Vorausgesetzt ist eine konstante Beschleunigung auf gerader Bahn; reale Bewegungen können davon abweichen.",
	tool_acceleration_references:
		"Wikipedia (englisch) — Acceleration; The Physics Hypertextbook — Equations of Motion (englisch).",
	tool_acceleration_ref_a_label: "Wikipedia (englisch) — Acceleration",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion (englisch)",
};

export default de;
