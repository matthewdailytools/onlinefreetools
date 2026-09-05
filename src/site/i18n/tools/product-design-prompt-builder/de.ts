/**
 * i18n tool shard (product-design-prompt-builder / de).
 * Lokale Suchbegriffe: „Prompt Generator Produktdesign“, „Prompt für UX-Brief“. Hauptbegriff im H1; Nebenbegriffe (Persona, Wireframe-Umfang, Design-Tokens, WCAG AA, JSON-Export) in Description, FAQ und Einsatzfällen.
 * Tatsächliche Grenzen: Zusammenbau im Browser ohne Anfrage; optionales Erweitern/Feinschliff sendet den Entwurf an Cloudflare Workers AI (Turnstile, Kontingent), die Antwort ersetzt den Ergebnisbereich vollständig.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'Aus einem Produktdesign-Auftrag wird hier ein Prompt zum Einfügen: Persona, Problem, Wireframe-Umfang und Design-Tokens eintragen — die Seite baut den Text im Browser als Markdown oder JSON zusammen. Standardmäßig geht keine Anfrage raus; erst ein Klick auf Erweitern oder Feinschliff schickt den aktuellen Entwurf an Cloudflare Workers AI (Turnstile nötig, Kontingent begrenzt).',
	tool_product_design_prompt_builder_build:
		'Prompt erstellen',
	tool_product_design_prompt_builder_clear:
		'Leeren',
	tool_product_design_prompt_builder_copy:
		'Kopieren',
	tool_product_design_prompt_builder_desc:
		'Prompt-Generator für Produktdesign: Persona, Problem, Wireframe-Umfang und Design-Tokens eintragen; der Text entsteht im Browser als Markdown oder JSON, KI ist optional.',
	tool_product_design_prompt_builder_description:
		'Prompt-Generator für Produktdesign: Persona, Problem, Wireframe-Umfang (wie viele Screens und welche) und Design-Tokens (Raster, Primärfarbe, Kontrast) eintragen — die Seite sortiert sie im Browser in die Blöcke Role / Task / Constraints / Output, als Markdown oder JSON. Beispiel: „Eltern im Wechselmodell, die die Übergabewoche auf einen Blick sehen wollen“ wird zu einem Umfang von drei Screens mit 8-pt-Raster und WCAG-AA-Kontrast. Über Beispiel laden füllen Sie das Preset und sehen den fertigen Prompt; Erweitern oder Feinschliff über Cloudflare Workers AI bleibt optional (Turnstile, Tageskontingent).',
	tool_product_design_prompt_builder_download:
		'Herunterladen',
	tool_product_design_prompt_builder_empty:
		'Füllen Sie mindestens ein Feld aus, bevor Sie erstellen.',
	tool_product_design_prompt_builder_example:
		'Eingabe: Persona = Eltern im wöchentlichen Wechselmodell, eine Person plant, die andere holt ab, Android und iPhone gemischt; Problem = überfüllte Kalender, gewünscht ist die Übergabewoche auf einen Blick samt Notizen, ohne Kontozwang; Wireframe = Wochenleiste mit Übergabelegende, Detail-Sheet mit Übergabe-Checkliste, Einladung per SMS (3 Screens); Tokens = 8-pt-Raster, Primärfarbe #2563eb, #059669 für bestätigte Übergaben, WCAG-AA-Kontrast bei Bildtexten. Ausgabe (Markdown): ## Role beschreibt einen UX-Prompt-Coach für Wireframe-Briefs, ## Task listet pro Feld eine Zeile.',
	tool_product_design_prompt_builder_example_title:
		'Beispiel',
	tool_product_design_prompt_builder_faq_a1:
		'Standardmäßig nicht. Felder ausfüllen und „Prompt erstellen“ klicken passiert nur in diesem Tab, ohne Anfrage. Der Entwurf verlässt die Seite erst, wenn Sie Erweitern oder Feinschliff anklicken — dann geht er an Cloudflare Workers AI; von unseren Servern wird er nicht an OpenAI, Google, Anthropic oder DeepSeek weitergegeben.',
	tool_product_design_prompt_builder_faq_a2:
		'Nein. Der lokale Modus formatiert nur Ihre Eingaben in die Blöcke Role / Task / Constraints / Output. Die optionale KI läuft nach Turnstile über Cloudflare Workers AI, nicht über die APIs von ChatGPT, Gemini, Claude oder DeepSeek.',
	tool_product_design_prompt_builder_faq_a3:
		'Der Prompt-Vorlagen-Generator liefert die vier allgemeinen Blöcke Role / Task / Constraints / Output für beliebige Themen. Hier sind die Felder die eines UX-Briefs: Persona, Problem, wie viele Screens das Wireframe abdeckt und welche Design-Tokens und Kontrastwerte gelten — mit eigenem Beispiel und eigenen Grenzen.',
	tool_product_design_prompt_builder_faq_a4:
		'Ja. Lösen Sie das Turnstile-Widget im KI-Bereich, bevor Sie Erweitern oder Feinschliff drücken. Ohne gültiges Token melden die KI-Schaltflächen einen Fehler, der lokale Modus arbeitet weiter.',
	tool_product_design_prompt_builder_faq_a5:
		'Ja. Stellen Sie das Ausgabeformat auf JSON: Sie erhalten die Felder einzeln plus den fertigen Prompt-Text — praktisch für ein Anforderungs-Repository oder eine Vorlage fürs Design-Review.',
	tool_product_design_prompt_builder_faq_a6:
		'Ja. Das Ergebnis ist reiner Text — kopieren und in ChatGPT, Gemini, Claude oder DeepSeek einfügen. Die Seite ruft diese APIs nicht für Sie auf.',
	tool_product_design_prompt_builder_faq_q1:
		'Werden meine Eingaben hochgeladen?',
	tool_product_design_prompt_builder_faq_q2:
		'Ruft die Seite die API von ChatGPT oder anderen Modellen auf?',
	tool_product_design_prompt_builder_faq_q3:
		'Wodurch unterscheidet sich das vom Prompt-Vorlagen-Generator?',
	tool_product_design_prompt_builder_faq_q4:
		'Warum verlangt die optionale KI Turnstile?',
	tool_product_design_prompt_builder_faq_q5:
		'Kann ich JSON exportieren?',
	tool_product_design_prompt_builder_faq_q6:
		'Funktioniert das mit ChatGPT, Gemini, Claude und DeepSeek?',
	tool_product_design_prompt_builder_faq_q7:
		'Was unterscheidet den lokalen Modus von der Cloudflare-KI?',
	tool_product_design_prompt_builder_faq_a7:
		'Lokal wird nur sortiert, was Sie eingetippt haben: keine Anfrage, kein Kontingent. Erweitern oder Feinschliff schickt den Entwurf an Cloudflare Workers AI (Turnstile nötig, begrenztes Kontingent); der zurückkommende Text ersetzt den Ergebnisbereich vollständig — vor dem Kopieren prüfen. Bei Fehler oder erschöpftem Kontingent bleibt der lokale Modus.',
	tool_product_design_prompt_builder_ai_expand:
		'Mit KI erweitern',
	tool_product_design_prompt_builder_ai_polish:
		'Mit KI feinschleifen',
	tool_product_design_prompt_builder_ai_panel_label:
		'Optionale Cloudflare-KI (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'Entwurf an Cloudflare Workers AI senden?',
	tool_product_design_prompt_builder_ai_consent_body:
		'Optionaler Schritt: Ihr aktueller Entwurf geht zur Inferenz an Cloudflare Workers AI. Von unseren Servern wird er nicht an OpenAI, Google, Anthropic oder DeepSeek weitergereicht. Ohne KI funktioniert das Zusammenbauen im Browser weiterhin.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'Weiter',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'Abbrechen',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI arbeitet…',
	tool_product_design_prompt_builder_ai_done:
		'Der KI-Text hat das Ergebnis ersetzt. Vor dem Kopieren prüfen.',
	tool_product_design_prompt_builder_ai_err_generic:
		'KI fehlgeschlagen; das Ergebnis ist unverändert.',
	tool_product_design_prompt_builder_ai_err_rate:
		'KI-Kontingent erschöpft. Lokal weiterarbeiten oder morgen (UTC) erneut versuchen.',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'Bitte erst Turnstile lösen, dann die KI nutzen.',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'Ausgabeformat',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'Persona / Nutzerprofil',
	tool_product_design_prompt_builder_persona_ph:
		'z. B. Eltern im wöchentlichen Wechselmodell…',
	tool_product_design_prompt_builder_problem_label:
		'Problem / Bedarf',
	tool_product_design_prompt_builder_problem_ph:
		'z. B. überfüllte Kalender, Woche auf einen Blick…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'Wireframe / Umfang',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'z. B. Wochenleiste, Detail-Sheet, SMS-Einladung…',
	tool_product_design_prompt_builder_design_tokens_label:
		'Design / Design-Tokens',
	tool_product_design_prompt_builder_design_tokens_ph:
		'z. B. 8-pt-Raster, Primärfarbe #2563eb, WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'Vier Felder ausfüllen, die Seite baut daraus im Browser Markdown (oder JSON); wer es ausführlicher braucht, lässt Cloudflare AI erweitern und fügt den Prompt danach in den Chat ein.',
	tool_product_design_prompt_builder_how_item_1:
		'Auf Beispiel laden klicken: Das Preset wird gefüllt und ein Prompt steht bereit, an dem Sie weiterarbeiten.',
	tool_product_design_prompt_builder_how_item_2:
		'Persona, Problem, Wireframe-Umfang und Design-Tokens anpassen, dann „Prompt erstellen“ klicken; für strukturierten Export auf JSON umstellen.',
	tool_product_design_prompt_builder_how_item_3:
		'Optional: Turnstile lösen, dann Erweitern oder Feinschliff — der KI-Text füllt anschließend den Ergebnisbereich.',
	tool_product_design_prompt_builder_how_item_4:
		'Ergebnis kopieren oder herunterladen und in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_product_design_prompt_builder_how_title:
		'So funktioniert es',
	tool_product_design_prompt_builder_load_sample:
		'Beispiel laden',
	tool_product_design_prompt_builder_platforms_lead:
		'Der fertige Prompt ist reiner Text und lässt sich unverändert in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_product_design_prompt_builder_result_label:
		'Prompt-Ausgabe',
	tool_product_design_prompt_builder_rules_body:
		'Die Seite bringt den Auftrag nur in Form: Sie zeichnet keine Wireframes und exportiert keine Figma-Dateien. Die optionale KI ist kontingentiert und verlangt Turnstile.',
	tool_product_design_prompt_builder_rules_item_1:
		'Jedes Feld landet in einem eigenen Markdown-Block: Role, Task, Constraints, Output.',
	tool_product_design_prompt_builder_rules_item_2:
		'Standardausgabe ist Markdown; derselbe Bereich zeigt auf Wunsch JSON mit Feldern und fertigem Prompt.',
	tool_product_design_prompt_builder_rules_item_3:
		'Die Cloudflare-KI ersetzt den lokalen Modus nicht: Ihre Antwort füllt den gesamten Ergebnisbereich, also vor dem Kopieren prüfen.',
	tool_product_design_prompt_builder_rules_item_4:
		'Das Werkzeug setzt nur Text zusammen: es erzeugt keine Screens, liest Ihre Designdateien nicht und ruft keine Chat-APIs in Ihrem Namen auf.',
	tool_product_design_prompt_builder_rules_title:
		'Erwartbare Grenzen',
	tool_product_design_prompt_builder_sec_constraints:
		'Constraints',
	tool_product_design_prompt_builder_sec_output:
		'Output',
	tool_product_design_prompt_builder_sec_role:
		'Role',
	tool_product_design_prompt_builder_sec_task:
		'Task',
	tool_product_design_prompt_builder_status_copied:
		'In die Zwischenablage kopiert.',
	tool_product_design_prompt_builder_status_done:
		'Prompt fertig.',
	tool_product_design_prompt_builder_status_working:
		'Prompt wird gebaut…',
	tool_product_design_prompt_builder_title:
		'Prompt-Generator für Produktdesign — lokal, mit optionaler KI',
	tool_product_design_prompt_builder_usecase_1:
		'Das im Kick-off mündlich genannte Designziel als einfügbaren Prompt für den Team-Chat festhalten.',
	tool_product_design_prompt_builder_usecase_2:
		'JSON exportieren, Persona und Tokens im Anforderungs-Repository ablegen und bei Bedarf mit Cloudflare AI erweitern.',
	tool_product_design_prompt_builder_usecase_3:
		'Wenn UX-Felder überflüssig sind und eine allgemeine Vier-Block-Vorlage genügt, den Prompt-Vorlagen-Generator nehmen.',
	tool_product_design_prompt_builder_usecase_4:
		'Eine noch unveröffentlichte Produktidee erst im Browser formulieren und danach über die optionale KI entscheiden.',
	tool_product_design_prompt_builder_usecases_title:
		'Passende Fälle',
};

export default de;
