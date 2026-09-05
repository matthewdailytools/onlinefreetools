/**
 * i18n tool shard (android-prompt-builder / de).
 * Lokale Suchbegriffe: „Android Prompt Generator“, „Prompt für ChatGPT Android-Entwicklung“. Hauptbegriff im H1; Nebenbegriffe (Kotlin-Stack, Compose, Gradle, minSdk, JSON-Export) in Description, FAQ und Einsatzfällen.
 * Tatsächliche Grenzen: Zusammenbau im Browser ohne Anfrage; optionales Erweitern/Feinschliff sendet den Entwurf an Cloudflare Workers AI (Turnstile, Kontingent), die Antwort ersetzt den Ergebnisbereich vollständig.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_android_prompt_builder_article:
		'Aus einer Android-Anforderung wird hier ein Prompt zum Einfügen: Funktion, Kotlin-Stack, Compose-Screen und Gradle-Vorgaben eintragen — die Seite baut den Text im Browser als Markdown oder JSON zusammen. Standardmäßig geht keine Anfrage raus; erst ein Klick auf Erweitern oder Feinschliff schickt den aktuellen Entwurf an Cloudflare Workers AI (Turnstile nötig, Kontingent begrenzt).',
	tool_android_prompt_builder_build:
		'Prompt erstellen',
	tool_android_prompt_builder_clear:
		'Leeren',
	tool_android_prompt_builder_copy:
		'Kopieren',
	tool_android_prompt_builder_desc:
		'Android-Prompt-Generator: Funktion, Kotlin-Stack, Compose-Screen und Gradle-Vorgaben eintragen; der Text entsteht im Browser als Markdown oder JSON, KI ist optional.',
	tool_android_prompt_builder_description:
		'Android-Prompt-Generator: Funktion, Stack (Kotlin 2.0, Jetpack Compose, Room), Screen und Gradle-Vorgaben eintragen — die Seite sortiert sie im Browser in die Blöcke Role / Task / Constraints / Output, als Markdown oder JSON. Beispiel: „Offline-Leseliste mit Volltextsuche und Archivieren per Wischen“ wird zu einer Aufgabe mit minSdk 26. Über Beispiel laden füllen Sie das Preset und sehen den fertigen Prompt; Erweitern oder Feinschliff über Cloudflare Workers AI bleibt optional (Turnstile, Tageskontingent).',
	tool_android_prompt_builder_download:
		'Herunterladen',
	tool_android_prompt_builder_empty:
		'Füllen Sie mindestens ein Feld aus, bevor Sie erstellen.',
	tool_android_prompt_builder_example:
		'Eingabe: Funktion = Offline-Leseliste, Speichern über das Share-Sheet, Volltextsuche, Archivieren per Wischen mit Rückgängig; Stack = Kotlin 2.0, Jetpack Compose, Room FTS4, Hilt; Compose = LazyColumn mit klebenden Datumsköpfen und SwipeToDismissBox; Gradle = minSdk 26, targetSdk 35, Modul :core:data. Ausgabe (Markdown): ## Role nennt die Rolle einer erfahrenen Android-Entwicklerin, ## Task listet pro Feld eine Zeile.',
	tool_android_prompt_builder_example_title:
		'Beispiel',
	tool_android_prompt_builder_faq_a1:
		'Standardmäßig nicht. Felder ausfüllen und „Prompt erstellen“ klicken passiert nur in diesem Tab, ohne Anfrage. Der Entwurf verlässt die Seite erst, wenn Sie Erweitern oder Feinschliff anklicken — dann geht er an Cloudflare Workers AI; von unseren Servern wird er nicht an OpenAI, Google, Anthropic oder DeepSeek weitergegeben.',
	tool_android_prompt_builder_faq_a2:
		'Nein. Der lokale Modus formatiert nur Ihre Eingaben in die Blöcke Role / Task / Constraints / Output. Die optionale KI läuft nach Turnstile über Cloudflare Workers AI, nicht über die APIs von ChatGPT, Gemini, Claude oder DeepSeek.',
	tool_android_prompt_builder_faq_a3:
		'Der Prompt-Vorlagen-Generator liefert die vier allgemeinen Blöcke Role / Task / Constraints / Output für beliebige Themen. Hier sind die Felder schon auf ein Android-Projekt zugeschnitten: Funktion, Kotlin-Stack, Compose-Screen, minSdk und Gradle-Module — mit eigenem Beispiel und eigenen Grenzen.',
	tool_android_prompt_builder_faq_a4:
		'Ja. Lösen Sie das Turnstile-Widget im KI-Bereich, bevor Sie Erweitern oder Feinschliff drücken. Ohne gültiges Token melden die KI-Schaltflächen einen Fehler, der lokale Modus arbeitet weiter.',
	tool_android_prompt_builder_faq_a5:
		'Ja. Stellen Sie das Ausgabeformat auf JSON: Sie erhalten die Felder einzeln plus den fertigen Prompt-Text, brauchbar für Tests oder eine Konfigurations-Pipeline.',
	tool_android_prompt_builder_faq_a6:
		'Ja. Das Ergebnis ist reiner Text — kopieren und in ChatGPT, Gemini, Claude oder DeepSeek einfügen. Die Seite ruft diese APIs nicht für Sie auf.',
	tool_android_prompt_builder_faq_q1:
		'Werden meine Eingaben hochgeladen?',
	tool_android_prompt_builder_faq_q2:
		'Ruft die Seite die API von ChatGPT oder anderen Modellen auf?',
	tool_android_prompt_builder_faq_q3:
		'Wodurch unterscheidet sich das vom Prompt-Vorlagen-Generator?',
	tool_android_prompt_builder_faq_q4:
		'Warum verlangt die optionale KI Turnstile?',
	tool_android_prompt_builder_faq_q5:
		'Kann ich JSON exportieren?',
	tool_android_prompt_builder_faq_q6:
		'Funktioniert das mit ChatGPT, Gemini, Claude und DeepSeek?',
	tool_android_prompt_builder_faq_q7:
		'Was unterscheidet den lokalen Modus von der Cloudflare-KI?',
	tool_android_prompt_builder_faq_a7:
		'Lokal wird nur sortiert, was Sie eingetippt haben: keine Anfrage, kein Kontingent. Erweitern oder Feinschliff schickt den Entwurf an Cloudflare Workers AI (Turnstile nötig, begrenztes Kontingent); der zurückkommende Text ersetzt den Ergebnisbereich vollständig — vor dem Kopieren prüfen. Bei Fehler oder erschöpftem Kontingent bleibt der lokale Modus.',
	tool_android_prompt_builder_ai_expand:
		'Mit KI erweitern',
	tool_android_prompt_builder_ai_polish:
		'Mit KI feinschleifen',
	tool_android_prompt_builder_ai_panel_label:
		'Optionale Cloudflare-KI (Turnstile)',
	tool_android_prompt_builder_ai_consent_title:
		'Entwurf an Cloudflare Workers AI senden?',
	tool_android_prompt_builder_ai_consent_body:
		'Optionaler Schritt: Ihr aktueller Entwurf geht zur Inferenz an Cloudflare Workers AI. Von unseren Servern wird er nicht an OpenAI, Google, Anthropic oder DeepSeek weitergereicht. Ohne KI funktioniert das Zusammenbauen im Browser weiterhin.',
	tool_android_prompt_builder_ai_consent_ok:
		'Weiter',
	tool_android_prompt_builder_ai_consent_cancel:
		'Abbrechen',
	tool_android_prompt_builder_ai_working:
		'Cloudflare AI arbeitet…',
	tool_android_prompt_builder_ai_done:
		'Der KI-Text hat das Ergebnis ersetzt. Vor dem Kopieren prüfen.',
	tool_android_prompt_builder_ai_err_generic:
		'KI fehlgeschlagen; das Ergebnis ist unverändert.',
	tool_android_prompt_builder_ai_err_rate:
		'KI-Kontingent erschöpft. Lokal weiterarbeiten oder morgen (UTC) erneut versuchen.',
	tool_android_prompt_builder_ai_err_turnstile:
		'Bitte erst Turnstile lösen, dann die KI nutzen.',
	tool_android_prompt_builder_fmt_json:
		'JSON',
	tool_android_prompt_builder_fmt_label:
		'Ausgabeformat',
	tool_android_prompt_builder_fmt_md:
		'Markdown',
	tool_android_prompt_builder_feature_spec_label:
		'Funktion / Spezifikation',
	tool_android_prompt_builder_feature_spec_ph:
		'z. B. Offline-Leseliste mit Volltextsuche…',
	tool_android_prompt_builder_kotlin_stack_label:
		'Kotlin / Technik-Stack',
	tool_android_prompt_builder_kotlin_stack_ph:
		'z. B. Kotlin 2.0, Jetpack Compose, Room, Hilt…',
	tool_android_prompt_builder_compose_ui_label:
		'Compose / Screen',
	tool_android_prompt_builder_compose_ui_ph:
		'z. B. LazyColumn mit klebenden Kopfzeilen…',
	tool_android_prompt_builder_gradle_constraints_label:
		'Gradle / Vorgaben',
	tool_android_prompt_builder_gradle_constraints_ph:
		'z. B. minSdk 26, targetSdk 35, Modul :core:data…',
	tool_android_prompt_builder_how_body:
		'Vier Felder ausfüllen, die Seite baut daraus im Browser Markdown (oder JSON); wer es ausführlicher braucht, lässt Cloudflare AI erweitern und fügt den Prompt danach in den Chat ein.',
	tool_android_prompt_builder_how_item_1:
		'Auf Beispiel laden klicken: Das Preset wird gefüllt und ein Prompt steht bereit, an dem Sie weiterarbeiten.',
	tool_android_prompt_builder_how_item_2:
		'Funktion, Stack, Screen und Vorgaben anpassen, dann „Prompt erstellen“ klicken; für strukturierten Export auf JSON umstellen.',
	tool_android_prompt_builder_how_item_3:
		'Optional: Turnstile lösen, dann Erweitern oder Feinschliff — der KI-Text füllt anschließend den Ergebnisbereich.',
	tool_android_prompt_builder_how_item_4:
		'Ergebnis kopieren oder herunterladen und in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_android_prompt_builder_how_title:
		'So funktioniert es',
	tool_android_prompt_builder_load_sample:
		'Beispiel laden',
	tool_android_prompt_builder_platforms_lead:
		'Der fertige Prompt ist reiner Text und lässt sich unverändert in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_android_prompt_builder_result_label:
		'Prompt-Ausgabe',
	tool_android_prompt_builder_rules_body:
		'Die Seite bringt die Anforderung nur in Form: Sie kompiliert nichts und startet kein Gradle. Die optionale KI ist kontingentiert und verlangt Turnstile.',
	tool_android_prompt_builder_rules_item_1:
		'Jedes Feld landet in einem eigenen Markdown-Block: Role, Task, Constraints, Output.',
	tool_android_prompt_builder_rules_item_2:
		'Standardausgabe ist Markdown; derselbe Bereich zeigt auf Wunsch JSON mit Feldern und fertigem Prompt.',
	tool_android_prompt_builder_rules_item_3:
		'Die Cloudflare-KI ersetzt den lokalen Modus nicht: Ihre Antwort füllt den gesamten Ergebnisbereich, also vor dem Kopieren prüfen.',
	tool_android_prompt_builder_rules_item_4:
		'Das Werkzeug setzt nur Text zusammen: kein Kotlin-Kompilieren, kein Gradle-Lauf, keine Chat-API-Aufrufe in Ihrem Namen.',
	tool_android_prompt_builder_rules_title:
		'Erwartbare Grenzen',
	tool_android_prompt_builder_sec_constraints:
		'Constraints',
	tool_android_prompt_builder_sec_output:
		'Output',
	tool_android_prompt_builder_sec_role:
		'Role',
	tool_android_prompt_builder_sec_task:
		'Task',
	tool_android_prompt_builder_status_copied:
		'In die Zwischenablage kopiert.',
	tool_android_prompt_builder_status_done:
		'Prompt fertig.',
	tool_android_prompt_builder_status_working:
		'Prompt wird gebaut…',
	tool_android_prompt_builder_title:
		'Android-Prompt-Generator — lokal, mit optionaler KI',
	tool_android_prompt_builder_usecase_1:
		'Die im Sprint-Meeting mündlich beschriebene Anforderung als einfügbaren Prompt für den Team-Chat festhalten.',
	tool_android_prompt_builder_usecase_2:
		'JSON exportieren, die Felder an einen Regressionstest hängen und bei Bedarf mit Cloudflare AI erweitern.',
	tool_android_prompt_builder_usecase_3:
		'Wenn Android-Felder überflüssig sind und eine allgemeine Vier-Block-Vorlage genügt, den Prompt-Vorlagen-Generator nehmen.',
	tool_android_prompt_builder_usecase_4:
		'Eine interne Beschreibung erst im Browser formulieren und danach entscheiden, ob sie an die optionale KI darf.',
	tool_android_prompt_builder_usecases_title:
		'Passende Fälle',
};

export default de;
