/**
 * i18n tool shard (midjourney-prompt-builder / de).
 * Neu geschrieben für Suchen wie „Midjourney Prompt Generator“ oder „Midjourney Prompt schreiben“:
 * Hauptbegriff steht in der H1; „--ar Parameter“, „Prompt als JSON exportieren“ und „Prompt für ChatGPT“
 * stehen in Beschreibung, FAQ und Anwendungsfällen.
 * Sachliche Grenzen: Der Prompt entsteht im Browser; nur Erweitern/Verfeinern schickt den Entwurf an
 * Cloudflare Workers AI (Turnstile, Kontingent). Diese Seite erzeugt keine Bilder und ruft Midjourney nicht auf.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Hier setzen Sie Ihren Midjourney-Prompt zusammen, bevor Sie ihn abschicken: Motiv, Stil, Licht, Bildformat und Parameter eintragen — die Seite baut daraus im Browser Markdown oder JSON, das Sie in ChatGPT, Gemini, Claude oder DeepSeek einfügen. Die Seite liefert nur Text: Sie erzeugt keine Bilder und ruft Midjourney nicht auf. Standardmäßig wird nichts verschickt; erst wenn Sie Erweitern oder Verfeinern anklicken, geht der Entwurf nach dem Turnstile-Check an Cloudflare Workers AI.',
	tool_midjourney_prompt_builder_build:
		'Prompt erzeugen',
	tool_midjourney_prompt_builder_clear:
		'Leeren',
	tool_midjourney_prompt_builder_copy:
		'Kopieren',
	tool_midjourney_prompt_builder_desc:
		'Midjourney-Prompt-Generator: Motiv, Stil, Licht und Bildformat eintragen, die Seite baut Markdown oder JSON; Cloudflare-KI optional mit Turnstile.',
	tool_midjourney_prompt_builder_description:
		'Midjourney-Prompt-Generator: Sie tragen Motiv, Stil, Licht, Bildformat und Parameter ein, die Seite baut daraus eine einzeilige, direkt einfügbare Zeile — das Bildformat wird zu --ar, und ohne angegebene Version kommt --v 6.1 dazu. Markdown ist Standard, JSON gibt es für eigene Skripte; das Samurai-Beispiel auf der Brücke ist beim Aufrufen schon durchgelaufen. Fehlt Detail, schickt Erweitern oder Verfeinern den Entwurf an Cloudflare Workers AI (Turnstile, Kontingent). Nur Text: Bilder entstehen hier nicht.',
	tool_midjourney_prompt_builder_download:
		'Herunterladen',
	tool_midjourney_prompt_builder_empty:
		'Füllen Sie mindestens ein Feld aus, bevor Sie den Prompt erzeugen.',
	tool_midjourney_prompt_builder_example:
		'Eingabe: Motiv = Samurai zieht das Schwert auf einer bemoosten Brücke, Regennebel, Torii in der Ferne; Stil = filmische Tuschezeichnung, Blaugrün und Anthrazit, feines Korn; Licht = Gegenlicht im Sonnenaufgang, volumetrischer Nebel; Bildformat = 16:9; Parameter = --v 6.1 --style raw --stylize 120 --chaos 8. Ausgabe (Markdown): Der Block ## Task enthält die Midjourney-Zeile mit Motiv, Stil und Licht und endet auf --ar 16:9. In JSON kommen dieselben Angaben als Felder.',
	tool_midjourney_prompt_builder_example_title:
		'Beispiel',
	tool_midjourney_prompt_builder_faq_a1:
		'Zusammengebaut wird in diesem Browser-Tab, standardmäßig verlässt also nichts Ihr Gerät. Nur wenn Sie Erweitern oder Verfeinern anklicken, geht der aktuelle Entwurf an Cloudflare Workers AI; wir leiten ihn nicht von unseren Servern an OpenAI, Google, Anthropic oder DeepSeek weiter.',
	tool_midjourney_prompt_builder_faq_a2:
		'Im lokalen Modus wird kein Modell angesprochen: Die Seite sortiert Ihre Felder nur in die Blöcke Role, Task, Constraints und Output. Erweitern und Verfeinern laufen nach dem Turnstile-Check über Cloudflare Workers AI und rufen von unseren Servern keine API von ChatGPT, Gemini, Claude oder DeepSeek auf.',
	tool_midjourney_prompt_builder_faq_a3:
		'Der Prompt-Vorlagen-Generator liefert das allgemeine Vier-Block-Gerüst für jedes Thema. Hier sind die Felder schon die von Midjourney — Motiv, Stil, Licht, Bildformat, Parameter —, mit einem Beispiel beim Aufrufen und einer Parametertabelle, die nur zu diesem Fall gehört.',
	tool_midjourney_prompt_builder_faq_a4:
		'Turnstile hält automatische Skripte fern, damit das kostenlose Kontingent bei echten Nutzern bleibt. Lösen Sie es im KI-Bereich, bevor Sie Erweitern oder Verfeinern anklicken; ohne gültiges Token melden diese Schaltflächen einen Fehler, und der Aufbau im Browser funktioniert weiter.',
	tool_midjourney_prompt_builder_faq_a5:
		'Ja. Wenn Sie auf JSON umschalten, liefert dieselbe Ausgabe die strukturierten Felder plus den fertigen Prompt-Text — brauchbar für eine Bildserie, einen Test oder eine Konfigurationsdatei.',
	tool_midjourney_prompt_builder_faq_a6:
		'Ja. Kopieren Sie das Ergebnis und fügen Sie es in den Chat Ihrer Wahl ein, oder direkt in Midjourney. Diese Seite formatiert nur Text und ruft keine API auf, deshalb gibt es keine eigene Adresse pro Plattform.',
	tool_midjourney_prompt_builder_faq_q1:
		'Wird das Eingetippte irgendwohin geschickt?',
	tool_midjourney_prompt_builder_faq_q2:
		'Ruft diese Seite die API von ChatGPT oder anderen Modellen auf?',
	tool_midjourney_prompt_builder_faq_q3:
		'Was ist der Unterschied zum Prompt-Vorlagen-Generator?',
	tool_midjourney_prompt_builder_faq_q4:
		'Warum brauche ich Turnstile für die optionale KI?',
	tool_midjourney_prompt_builder_faq_q5:
		'Kann ich die Ausgabe als JSON bekommen?',
	tool_midjourney_prompt_builder_faq_q6:
		'Lässt sich das mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
	tool_midjourney_prompt_builder_faq_q7:
		'Worin unterscheiden sich der lokale Modus und die optionale Cloudflare-KI?',
	tool_midjourney_prompt_builder_faq_a7:
		'Lokal entsteht alles in diesem Tab, ohne den Browser zu verlassen. Erweitern oder Verfeinern schickt den Entwurf an Cloudflare Workers AI (Turnstile nötig, mit Frequenz- und Tageskontingent); der zurückgegebene Text wird vollständig in die Ausgabe geschrieben und überschreibt den angezeigten Entwurf — vor dem Kopieren prüfen. Bei Fehler oder erschöpftem Kontingent bleiben Sie beim lokalen Modus.',
	tool_midjourney_prompt_builder_ai_expand:
		'Mit KI erweitern',
	tool_midjourney_prompt_builder_ai_polish:
		'Mit KI verfeinern',
	tool_midjourney_prompt_builder_ai_panel_label:
		'Optional: Cloudflare AI (Turnstile erforderlich)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'Entwurf an Cloudflare Workers AI senden?',
	tool_midjourney_prompt_builder_ai_consent_body:
		'Dieser Schritt ist optional: Er schickt den Entwurf, der jetzt in den Feldern steht, für eine Inferenz an Cloudflare Workers AI. Wir leiten ihn nicht von unseren Servern an OpenAI, Google, Anthropic oder DeepSeek weiter. Ohne KI wird der Prompt weiterhin in Ihrem Browser gebaut.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'Weiter',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'Abbrechen',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI arbeitet…',
	tool_midjourney_prompt_builder_ai_done:
		'Der KI-Text steht vollständig in der Ausgabe. Vor dem Kopieren prüfen.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'Die KI hat diesmal nicht geantwortet; die Ausgabe ist unverändert.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'KI-Kontingent erschöpft. Bauen Sie den Prompt hier weiter oder versuchen Sie es morgen (UTC).',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'Lösen Sie den Turnstile-Check, bevor Sie die KI nutzen.',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'Ausgabeformat',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'Motiv',
	tool_midjourney_prompt_builder_subject_ph:
		'Zum Beispiel: Samurai zieht das Schwert auf einer Brücke…',
	tool_midjourney_prompt_builder_style_label:
		'Stil',
	tool_midjourney_prompt_builder_style_ph:
		'Zum Beispiel: filmische Tusche, Anthrazit-Töne…',
	tool_midjourney_prompt_builder_lighting_label:
		'Licht',
	tool_midjourney_prompt_builder_lighting_ph:
		'Zum Beispiel: Gegenlicht im Sonnenaufgang, Nebel…',
	tool_midjourney_prompt_builder_aspect_label:
		'Bildformat',
	tool_midjourney_prompt_builder_aspect_ph:
		'Zum Beispiel 16:9, 9:16 oder 1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'MJ-Parameter',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'Zum Beispiel --v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Midjourney-Parameter im Überblick',
	tool_midjourney_prompt_builder_rules_table_ar:
		'Bildformat → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'MJ-Version → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'Ein eingetragenes Bildformat wird am Zeilenende zu --ar; steht in den Parametern keine Version, kommt --v 6.1 dazu.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 quadratisch',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 im Querformat',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 im Hochformat',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'Standardversion MJ v6',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'Felder ausfüllen, Prompt erzeugen und in ChatGPT, Gemini, Claude oder DeepSeek einfügen; fehlt Detail, hilft Erweitern oder Verfeinern mit der optionalen Cloudflare-KI.',
	tool_midjourney_prompt_builder_how_item_1:
		'Klicken Sie auf Beispiel laden für das Standard-Preset.',
	tool_midjourney_prompt_builder_how_item_2:
		'Motiv, Stil, Licht, Bildformat und Parameter anpassen und auf Prompt erzeugen klicken; für strukturierten Export auf JSON umschalten.',
	tool_midjourney_prompt_builder_how_item_3:
		'Optional: Turnstile im KI-Bereich lösen und Erweitern oder Verfeinern anklicken; der zurückgegebene Text landet in der Ausgabe.',
	tool_midjourney_prompt_builder_how_item_4:
		'Kopieren oder herunterladen und in ChatGPT, Gemini, Claude oder DeepSeek weiter feilen — oder direkt in Midjourney einfügen.',
	tool_midjourney_prompt_builder_how_title:
		'So gehen Sie vor',
	tool_midjourney_prompt_builder_load_sample:
		'Beispiel laden',
	tool_midjourney_prompt_builder_platforms_lead:
		'Die Ausgabe lässt sich unverändert in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_midjourney_prompt_builder_result_label:
		'Erzeugter Prompt',
	tool_midjourney_prompt_builder_rules_body:
		'So werden Parameter übersetzt: Das Bildformat wird zu --ar, und ohne angegebene Version kommt --v 6.1 dazu. Der Aufbau im Browser ist das Standardverhalten; die optionale KI ist in der Nutzung begrenzt und verlangt Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'Jedes Formularfeld landet in einem der Markdown-Blöcke Role, Task, Constraints und Output.',
	tool_midjourney_prompt_builder_rules_item_2:
		'Standardexport ist Markdown; JSON ist eine Schaltfläche über derselben Ausgabe.',
	tool_midjourney_prompt_builder_rules_item_3:
		'Die optionale KI ist ein zusätzlicher Schritt, kein Ersatz: Der lokale Modus bleibt nutzbar, und der KI-Text überschreibt die Ausgabe komplett — deshalb vor dem Kopieren prüfen.',
	tool_midjourney_prompt_builder_rules_item_4:
		'Diese Seite baut nur Text zusammen: keine Bilderzeugung, kein Aufruf von Midjourney oder einer Chat-API.',
	tool_midjourney_prompt_builder_rules_title:
		'Was sie tut und was nicht',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'In die Zwischenablage kopiert.',
	tool_midjourney_prompt_builder_status_done:
		'Prompt fertig.',
	tool_midjourney_prompt_builder_status_working:
		'Prompt wird erzeugt…',
	tool_midjourney_prompt_builder_title:
		'Midjourney-Prompt-Generator — im Browser, KI optional',
	tool_midjourney_prompt_builder_usecase_1:
		'Einen Midjourney-Prompt fertig zum Einfügen in den Team-Chat übergeben, statt Parameter Nachricht für Nachricht durchzugeben.',
	tool_midjourney_prompt_builder_usecase_2:
		'Vor einer Bildserie das JSON exportieren und Motiv, Stil und Bildformat als Felder im eigenen Skript oder in der Tabelle ablegen.',
	tool_midjourney_prompt_builder_usecase_3:
		'Wenn Sie das allgemeine Vier-Block-Gerüst brauchen und kein Bild, nehmen Sie den Prompt-Vorlagen-Generator.',
	tool_midjourney_prompt_builder_usecase_4:
		'Bei Entwürfen zu noch unveröffentlichten Projekten beim lokalen Modus bleiben: Der Text verlässt den Browser nur, wenn Sie den KI-Hinweis bestätigen.',
	tool_midjourney_prompt_builder_usecases_title:
		'Wofür es sich lohnt',
};

export default de;
