/**
 * i18n tool shard (ios-prompt-builder / de).
 * Lokale Suchbegriffe: „iOS Prompt Generator“, „Prompt für ChatGPT iOS-Entwicklung“. Hauptbegriff im H1; Nebenbegriffe (Swift-Stack, SwiftUI, HIG, VoiceOver, JSON-Export) in Description, FAQ und Einsatzfällen.
 * Tatsächliche Grenzen: Zusammenbau im Browser ohne Anfrage; optionales Erweitern/Feinschliff sendet den Entwurf an Cloudflare Workers AI (Turnstile, Kontingent), die Antwort ersetzt den Ergebnisbereich vollständig.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_ios_prompt_builder_article:
		'Aus einer iOS-Anforderung wird hier ein Prompt zum Einfügen: Funktion, Swift-Stack, SwiftUI-Screen und die Barrierefreiheitsvorgaben der HIG eintragen — die Seite baut den Text im Browser als Markdown oder JSON zusammen. Standardmäßig geht keine Anfrage raus; erst ein Klick auf Erweitern oder Feinschliff schickt den aktuellen Entwurf an Cloudflare Workers AI (Turnstile nötig, Kontingent begrenzt).',
	tool_ios_prompt_builder_build:
		'Prompt erstellen',
	tool_ios_prompt_builder_clear:
		'Leeren',
	tool_ios_prompt_builder_copy:
		'Kopieren',
	tool_ios_prompt_builder_desc:
		'iOS-Prompt-Generator: Funktion, Swift-Stack, SwiftUI-Screen und HIG-Vorgaben eintragen; der Text entsteht im Browser als Markdown oder JSON, KI ist optional.',
	tool_ios_prompt_builder_description:
		'iOS-Prompt-Generator: Funktion, Stack (Swift 5.10, SwiftUI, iOS 17+, SwiftData), Screen und die Barrierefreiheitsvorgaben der HIG eintragen — die Seite sortiert sie im Browser in die Blöcke Role / Task / Constraints / Output, als Markdown oder JSON. Beispiel: „Wochentrend der HealthKit-Schritte plus Ruhepuls-Band“ kommt mit Dynamic Type bis XXL und VoiceOver-Labels an den Diagrammpunkten heraus. Über Beispiel laden füllen Sie das Preset und sehen den fertigen Prompt; Erweitern oder Feinschliff über Cloudflare Workers AI bleibt optional (Turnstile, Tageskontingent).',
	tool_ios_prompt_builder_download:
		'Herunterladen',
	tool_ios_prompt_builder_empty:
		'Füllen Sie mindestens ein Feld aus, bevor Sie erstellen.',
	tool_ios_prompt_builder_example:
		'Eingabe: Funktion = Wochentrend der HealthKit-Schritte und Ruhepuls-Band, Berechtigungen in Alltagssprache begründet; Stack = Swift 5.10, SwiftUI, iOS 17+, async/await, SwiftData-Cache; Screen = NavigationStack und Charts, Berechtigungs-Sheet vor der ersten Abfrage; HIG = Dynamic Type bis XXL, VoiceOver-Labels an den Diagrammpunkten, kein Force-Unwrap. Ausgabe (Markdown): ## Role nennt die Rolle einer erfahrenen iOS-Entwicklerin, ## Task listet pro Feld eine Zeile.',
	tool_ios_prompt_builder_example_title:
		'Beispiel',
	tool_ios_prompt_builder_faq_a1:
		'Standardmäßig nicht. Felder ausfüllen und „Prompt erstellen“ klicken passiert nur in diesem Tab, ohne Anfrage. Der Entwurf verlässt die Seite erst, wenn Sie Erweitern oder Feinschliff anklicken — dann geht er an Cloudflare Workers AI; von unseren Servern wird er nicht an OpenAI, Google, Anthropic oder DeepSeek weitergegeben.',
	tool_ios_prompt_builder_faq_a2:
		'Nein. Der lokale Modus formatiert nur Ihre Eingaben in die Blöcke Role / Task / Constraints / Output. Die optionale KI läuft nach Turnstile über Cloudflare Workers AI, nicht über die APIs von ChatGPT, Gemini, Claude oder DeepSeek.',
	tool_ios_prompt_builder_faq_a3:
		'Der Prompt-Vorlagen-Generator liefert die vier allgemeinen Blöcke Role / Task / Constraints / Output für beliebige Themen. Hier sind die Felder schon auf ein iOS-Projekt zugeschnitten: Funktion, Swift-Stack, Navigation und Diagramme in SwiftUI sowie die HIG-Vorgaben zu Dynamic Type und VoiceOver — mit eigenem Beispiel und eigenen Grenzen.',
	tool_ios_prompt_builder_faq_a4:
		'Ja. Lösen Sie das Turnstile-Widget im KI-Bereich, bevor Sie Erweitern oder Feinschliff drücken. Ohne gültiges Token melden die KI-Schaltflächen einen Fehler, der lokale Modus arbeitet weiter.',
	tool_ios_prompt_builder_faq_a5:
		'Ja. Stellen Sie das Ausgabeformat auf JSON: Sie erhalten die Felder einzeln plus den fertigen Prompt-Text, brauchbar für XCTest-Fälle oder eine Konfigurations-Pipeline.',
	tool_ios_prompt_builder_faq_a6:
		'Ja. Das Ergebnis ist reiner Text — kopieren und in ChatGPT, Gemini, Claude oder DeepSeek einfügen. Die Seite ruft diese APIs nicht für Sie auf.',
	tool_ios_prompt_builder_faq_q1:
		'Werden meine Eingaben hochgeladen?',
	tool_ios_prompt_builder_faq_q2:
		'Ruft die Seite die API von ChatGPT oder anderen Modellen auf?',
	tool_ios_prompt_builder_faq_q3:
		'Wodurch unterscheidet sich das vom Prompt-Vorlagen-Generator?',
	tool_ios_prompt_builder_faq_q4:
		'Warum verlangt die optionale KI Turnstile?',
	tool_ios_prompt_builder_faq_q5:
		'Kann ich JSON exportieren?',
	tool_ios_prompt_builder_faq_q6:
		'Funktioniert das mit ChatGPT, Gemini, Claude und DeepSeek?',
	tool_ios_prompt_builder_faq_q7:
		'Was unterscheidet den lokalen Modus von der Cloudflare-KI?',
	tool_ios_prompt_builder_faq_a7:
		'Lokal wird nur sortiert, was Sie eingetippt haben: keine Anfrage, kein Kontingent. Erweitern oder Feinschliff schickt den Entwurf an Cloudflare Workers AI (Turnstile nötig, begrenztes Kontingent); der zurückkommende Text ersetzt den Ergebnisbereich vollständig — vor dem Kopieren prüfen. Bei Fehler oder erschöpftem Kontingent bleibt der lokale Modus.',
	tool_ios_prompt_builder_ai_expand:
		'Mit KI erweitern',
	tool_ios_prompt_builder_ai_polish:
		'Mit KI feinschleifen',
	tool_ios_prompt_builder_ai_panel_label:
		'Optionale Cloudflare-KI (Turnstile)',
	tool_ios_prompt_builder_ai_consent_title:
		'Entwurf an Cloudflare Workers AI senden?',
	tool_ios_prompt_builder_ai_consent_body:
		'Optionaler Schritt: Ihr aktueller Entwurf geht zur Inferenz an Cloudflare Workers AI. Von unseren Servern wird er nicht an OpenAI, Google, Anthropic oder DeepSeek weitergereicht. Ohne KI funktioniert das Zusammenbauen im Browser weiterhin.',
	tool_ios_prompt_builder_ai_consent_ok:
		'Weiter',
	tool_ios_prompt_builder_ai_consent_cancel:
		'Abbrechen',
	tool_ios_prompt_builder_ai_working:
		'Cloudflare AI arbeitet…',
	tool_ios_prompt_builder_ai_done:
		'Der KI-Text hat das Ergebnis ersetzt. Vor dem Kopieren prüfen.',
	tool_ios_prompt_builder_ai_err_generic:
		'KI fehlgeschlagen; das Ergebnis ist unverändert.',
	tool_ios_prompt_builder_ai_err_rate:
		'KI-Kontingent erschöpft. Lokal weiterarbeiten oder morgen (UTC) erneut versuchen.',
	tool_ios_prompt_builder_ai_err_turnstile:
		'Bitte erst Turnstile lösen, dann die KI nutzen.',
	tool_ios_prompt_builder_fmt_json:
		'JSON',
	tool_ios_prompt_builder_fmt_label:
		'Ausgabeformat',
	tool_ios_prompt_builder_fmt_md:
		'Markdown',
	tool_ios_prompt_builder_feature_spec_label:
		'Funktion / Spezifikation',
	tool_ios_prompt_builder_feature_spec_ph:
		'z. B. Schritt-Trend und Ruhepuls-Band…',
	tool_ios_prompt_builder_swift_stack_label:
		'Swift / Technik-Stack',
	tool_ios_prompt_builder_swift_stack_ph:
		'z. B. Swift 5.10, SwiftUI, iOS 17+, SwiftData…',
	tool_ios_prompt_builder_swiftui_ui_label:
		'SwiftUI / Screen',
	tool_ios_prompt_builder_swiftui_ui_ph:
		'z. B. NavigationStack, Charts, Berechtigungs-Sheet…',
	tool_ios_prompt_builder_hig_constraints_label:
		'HIG / Barrierefreiheit',
	tool_ios_prompt_builder_hig_constraints_ph:
		'z. B. Dynamic Type XXL, VoiceOver, kein Force-Unwrap…',
	tool_ios_prompt_builder_how_body:
		'Vier Felder ausfüllen, die Seite baut daraus im Browser Markdown (oder JSON); wer es ausführlicher braucht, lässt Cloudflare AI erweitern und fügt den Prompt danach in den Chat ein.',
	tool_ios_prompt_builder_how_item_1:
		'Auf Beispiel laden klicken: Das Preset wird gefüllt und ein Prompt steht bereit, an dem Sie weiterarbeiten.',
	tool_ios_prompt_builder_how_item_2:
		'Funktion, Stack, Screen und HIG-Vorgaben anpassen, dann „Prompt erstellen“ klicken; für strukturierten Export auf JSON umstellen.',
	tool_ios_prompt_builder_how_item_3:
		'Optional: Turnstile lösen, dann Erweitern oder Feinschliff — der KI-Text füllt anschließend den Ergebnisbereich.',
	tool_ios_prompt_builder_how_item_4:
		'Ergebnis kopieren oder herunterladen und in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_ios_prompt_builder_how_title:
		'So funktioniert es',
	tool_ios_prompt_builder_load_sample:
		'Beispiel laden',
	tool_ios_prompt_builder_platforms_lead:
		'Der fertige Prompt ist reiner Text und lässt sich unverändert in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_ios_prompt_builder_result_label:
		'Prompt-Ausgabe',
	tool_ios_prompt_builder_rules_body:
		'Die Seite bringt die Anforderung nur in Form: Sie kompiliert nichts und startet kein Xcode. Die optionale KI ist kontingentiert und verlangt Turnstile.',
	tool_ios_prompt_builder_rules_item_1:
		'Jedes Feld landet in einem eigenen Markdown-Block: Role, Task, Constraints, Output.',
	tool_ios_prompt_builder_rules_item_2:
		'Standardausgabe ist Markdown; derselbe Bereich zeigt auf Wunsch JSON mit Feldern und fertigem Prompt.',
	tool_ios_prompt_builder_rules_item_3:
		'Die Cloudflare-KI ersetzt den lokalen Modus nicht: Ihre Antwort füllt den gesamten Ergebnisbereich, also vor dem Kopieren prüfen.',
	tool_ios_prompt_builder_rules_item_4:
		'Das Werkzeug setzt nur Text zusammen: kein Swift-Kompilieren, kein Xcode-Lauf, keine Chat-API-Aufrufe in Ihrem Namen.',
	tool_ios_prompt_builder_rules_title:
		'Erwartbare Grenzen',
	tool_ios_prompt_builder_sec_constraints:
		'Constraints',
	tool_ios_prompt_builder_sec_output:
		'Output',
	tool_ios_prompt_builder_sec_role:
		'Role',
	tool_ios_prompt_builder_sec_task:
		'Task',
	tool_ios_prompt_builder_status_copied:
		'In die Zwischenablage kopiert.',
	tool_ios_prompt_builder_status_done:
		'Prompt fertig.',
	tool_ios_prompt_builder_status_working:
		'Prompt wird gebaut…',
	tool_ios_prompt_builder_title:
		'iOS-Prompt-Generator — lokal, mit optionaler KI',
	tool_ios_prompt_builder_usecase_1:
		'Die im Design-Review mündlich beschriebene Anforderung als einfügbaren Prompt für den Team-Chat festhalten.',
	tool_ios_prompt_builder_usecase_2:
		'JSON exportieren, die HIG-Vorgaben in eine Prüfliste überführen und bei Bedarf mit Cloudflare AI erweitern.',
	tool_ios_prompt_builder_usecase_3:
		'Wenn iOS-Felder überflüssig sind und eine allgemeine Vier-Block-Vorlage genügt, den Prompt-Vorlagen-Generator nehmen.',
	tool_ios_prompt_builder_usecase_4:
		'Die Beschreibung einer noch nicht angekündigten Funktion erst im Browser formulieren und danach über die optionale KI entscheiden.',
	tool_ios_prompt_builder_usecases_title:
		'Passende Fälle',
};

export default de;
