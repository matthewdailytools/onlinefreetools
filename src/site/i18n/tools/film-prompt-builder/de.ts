/**
 * i18n tool shard (film-prompt-builder / de).
 * Neu geschrieben für Suchen wie „Prompt-Generator für Drehbücher“ oder „Drei-Akt-Struktur mit KI“:
 * Hauptbegriff steht in der H1; „Szenenliste“, „Figurenentwicklung“ und „als JSON exportieren“ stehen in
 * Beschreibung, FAQ und Anwendungsfällen.
 * Sachliche Grenzen: Der Prompt entsteht im Browser; nur Erweitern/Verfeinern schickt den Entwurf an
 * Cloudflare Workers AI (Turnstile, Kontingent). Die Seite schreibt das Drehbuch nicht für Sie.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_film_prompt_builder_article:
		'Tragen Sie Logline, die drei Akte, die Szenenliste und die Figurenentwicklung ein: Die Seite ordnet das im Browser und gibt einen klar gegliederten Prompt in Markdown oder JSON zurück, den Sie in ChatGPT, Gemini, Claude oder DeepSeek einfügen und dort weiterschreiben. Standardmäßig wird nichts verschickt; der Entwurf geht erst nach einem Klick auf Erweitern oder Verfeinern — und nach dem Turnstile-Check — an Cloudflare Workers AI.',
	tool_film_prompt_builder_build:
		'Prompt erzeugen',
	tool_film_prompt_builder_clear:
		'Leeren',
	tool_film_prompt_builder_copy:
		'Kopieren',
	tool_film_prompt_builder_desc:
		'Prompt-Generator für Drehbücher: Logline, drei Akte und Szenenliste werden im Browser zu Markdown oder JSON geordnet; Cloudflare-KI optional mit Turnstile.',
	tool_film_prompt_builder_description:
		'Prompt-Generator für Drehbücher: Sie füllen Logline, die Akte I bis III, die Szenenliste und die Figurenentwicklung aus, und die Seite verteilt alles auf die Blöcke Role, Task, Constraints und Output, damit ChatGPT, Gemini, Claude oder DeepSeek wissen, woran sie anschließen. Markdown ist Standard, JSON gibt es für Ihre Fassungsübersicht; das Beispiel mit den zwei Foodtrucks, die 30 Tage eine Küche teilen, ist beim Aufrufen schon durchgelaufen. Bleibt ein Akt dünn, schickt Erweitern oder Verfeinern den Entwurf an Cloudflare Workers AI (Turnstile, Kontingent).',
	tool_film_prompt_builder_download:
		'Herunterladen',
	tool_film_prompt_builder_empty:
		'Füllen Sie mindestens ein Feld aus, bevor Sie den Prompt erzeugen.',
	tool_film_prompt_builder_example:
		'Eingabe: Logline = ein Formfehler bei der Genehmigung zwingt zwei verfeindete Foodtruck-Betreiber, 30 Tage dieselbe Küche zu teilen; Akt II = der Erfolg beim Festival kippt, als ein Blogger das Rezept falsch zuordnet und ein alter Familienstreit um Gewürze öffentlich wird; Szenenliste = sechs nummerierte Sequenzen; Entwicklung = Stolz → widerwillige Zusammenarbeit → Partner, die verhandeln. Ausgabe (Markdown): Der Block ## Task listet Logline, Act1–3, Scene / List und Character / Arc — genau wie das Beispiel beim Aufrufen.',
	tool_film_prompt_builder_example_title:
		'Beispiel',
	tool_film_prompt_builder_faq_a1:
		'Geordnet wird in diesem Browser-Tab, standardmäßig verlässt also nichts Ihr Gerät. Nur wenn Sie Erweitern oder Verfeinern anklicken, geht der aktuelle Entwurf an Cloudflare Workers AI; wir leiten ihn nicht von unseren Servern an OpenAI, Google, Anthropic oder DeepSeek weiter.',
	tool_film_prompt_builder_faq_a2:
		'Im lokalen Modus wird kein Modell angesprochen: Logline, Akte, Szenenliste und Figurenentwicklung werden nur auf die Blöcke Role, Task, Constraints und Output verteilt. Erweitern und Verfeinern laufen nach dem Turnstile-Check über Cloudflare Workers AI und rufen von unseren Servern keine API von ChatGPT, Gemini, Claude oder DeepSeek auf.',
	tool_film_prompt_builder_faq_a3:
		'Der Prompt-Vorlagen-Generator liefert das allgemeine Vier-Block-Gerüst für jedes Thema. Hier sind die Felder die eines Langfilms — Logline, drei Akte, Szenenliste, Figurenentwicklung —, mit einem vollständigen Beispiel beim Aufrufen und Regeln zu den typischen Stolperstellen solcher Papiere.',
	tool_film_prompt_builder_faq_a4:
		'Turnstile hält automatische Skripte fern, damit das kostenlose Kontingent bei echten Nutzern bleibt. Lösen Sie es im KI-Bereich, bevor Sie Erweitern oder Verfeinern anklicken; ohne gültiges Token melden diese Schaltflächen einen Fehler, und der Aufbau im Browser funktioniert weiter.',
	tool_film_prompt_builder_faq_a5:
		'Ja. Nach dem Umschalten auf JSON liefert dieselbe Ausgabe die strukturierten Felder plus den fertigen Prompt-Text — praktisch, um jede Fassung der Akte und der Szenenliste in einer Tabelle oder im Repository abzulegen und später zu vergleichen.',
	tool_film_prompt_builder_faq_a6:
		'Ja. Kopieren Sie das Ergebnis und fügen Sie es in den Chat Ihrer Wahl ein. Diese Seite ordnet nur die Struktur und ruft keine API auf, deshalb gibt es keine eigene Adresse pro Plattform.',
	tool_film_prompt_builder_faq_q1:
		'Wird das eingetippte Drehbuchmaterial irgendwohin geschickt?',
	tool_film_prompt_builder_faq_q2:
		'Ruft diese Seite die API von ChatGPT oder anderen Modellen auf?',
	tool_film_prompt_builder_faq_q3:
		'Was ist der Unterschied zum Prompt-Vorlagen-Generator?',
	tool_film_prompt_builder_faq_q4:
		'Warum brauche ich Turnstile für die optionale KI?',
	tool_film_prompt_builder_faq_q5:
		'Kann ich die Ausgabe als JSON bekommen?',
	tool_film_prompt_builder_faq_q6:
		'Lässt sich das mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
	tool_film_prompt_builder_faq_q7:
		'Worin unterscheiden sich der lokale Modus und die optionale Cloudflare-KI?',
	tool_film_prompt_builder_faq_a7:
		'Lokal wird alles in diesem Tab geordnet, ohne den Browser zu verlassen. Erweitern oder Verfeinern schickt den Entwurf an Cloudflare Workers AI (Turnstile nötig, mit Frequenz- und Tageskontingent); der zurückgegebene Text wird vollständig in die Ausgabe geschrieben und überschreibt den angezeigten Entwurf — lesen Sie ihn vor dem Kopieren, damit eine Umschreibung nicht versehentlich Ihre Aktfassung ersetzt. Bei Fehler oder erschöpftem Kontingent bleiben Sie beim lokalen Modus.',
	tool_film_prompt_builder_ai_expand:
		'Mit KI erweitern',
	tool_film_prompt_builder_ai_polish:
		'Mit KI verfeinern',
	tool_film_prompt_builder_ai_panel_label:
		'Optional: Cloudflare AI (Turnstile erforderlich)',
	tool_film_prompt_builder_ai_consent_title:
		'Entwurf an Cloudflare Workers AI senden?',
	tool_film_prompt_builder_ai_consent_body:
		'Dieser Schritt ist optional: Er schickt den Entwurf, der jetzt in den Feldern steht, für eine Inferenz an Cloudflare Workers AI. Wir leiten ihn nicht von unseren Servern an OpenAI, Google, Anthropic oder DeepSeek weiter. Ohne KI wird der Prompt weiterhin in Ihrem Browser gebaut.',
	tool_film_prompt_builder_ai_consent_ok:
		'Weiter',
	tool_film_prompt_builder_ai_consent_cancel:
		'Abbrechen',
	tool_film_prompt_builder_ai_working:
		'Cloudflare AI arbeitet…',
	tool_film_prompt_builder_ai_done:
		'Der KI-Text steht vollständig in der Ausgabe. Vor dem Kopieren prüfen.',
	tool_film_prompt_builder_ai_err_generic:
		'Die KI hat diesmal nicht geantwortet; die Ausgabe ist unverändert.',
	tool_film_prompt_builder_ai_err_rate:
		'KI-Kontingent erschöpft. Bauen Sie den Prompt hier weiter oder versuchen Sie es morgen (UTC).',
	tool_film_prompt_builder_ai_err_turnstile:
		'Lösen Sie den Turnstile-Check, bevor Sie die KI nutzen.',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'Ausgabeformat',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'Logline',
	tool_film_prompt_builder_logline_ph:
		'Zum Beispiel: zwei verfeindete Foodtrucks teilen eine Küche…',
	tool_film_prompt_builder_act1_label:
		'Akt I',
	tool_film_prompt_builder_act1_ph:
		'Zum Beispiel: woher der Konflikt kommt und was zum Mitmachen zwingt…',
	tool_film_prompt_builder_act2_label:
		'Akt II',
	tool_film_prompt_builder_act2_ph:
		'Zum Beispiel: kurzer Erfolg, dann läuft alles aus dem Ruder…',
	tool_film_prompt_builder_act3_label:
		'Akt III',
	tool_film_prompt_builder_act3_ph:
		'Zum Beispiel: offene Auseinandersetzung und ein Kompromiss mit Preis…',
	tool_film_prompt_builder_scene_list_label:
		'Szenenliste',
	tool_film_prompt_builder_scene_list_ph:
		'Zum Beispiel: 1. Streit um den Stellplatz 2. Doppelte Kontrolle…',
	tool_film_prompt_builder_character_arc_label:
		'Figurenentwicklung',
	tool_film_prompt_builder_character_arc_ph:
		'Zum Beispiel: Stolz → widerwillig kooperieren → Partner…',

	tool_film_prompt_builder_how_body:
		'Logline, Akte und Szenenliste ausfüllen, Prompt erzeugen und in ChatGPT, Gemini, Claude oder DeepSeek weiterschreiben; bleibt ein Akt dünn, hilft Erweitern oder Verfeinern mit der optionalen Cloudflare-KI.',
	tool_film_prompt_builder_how_item_1:
		'Klicken Sie auf Beispiel laden für das Standard-Preset.',
	tool_film_prompt_builder_how_item_2:
		'Logline, Akte, Szenenliste und Figurenentwicklung anpassen und auf Prompt erzeugen klicken; für strukturierten Export auf JSON umschalten.',
	tool_film_prompt_builder_how_item_3:
		'Optional: Turnstile im KI-Bereich lösen und Erweitern oder Verfeinern anklicken; der zurückgegebene Text landet in der Ausgabe.',
	tool_film_prompt_builder_how_item_4:
		'Kopieren oder herunterladen und in ChatGPT, Gemini, Claude oder DeepSeek einfügen, damit das Modell dieser Gliederung folgt.',
	tool_film_prompt_builder_how_title:
		'So gehen Sie vor',
	tool_film_prompt_builder_load_sample:
		'Beispiel laden',
	tool_film_prompt_builder_platforms_lead:
		'Die Ausgabe lässt sich unverändert in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_film_prompt_builder_result_label:
		'Erzeugter Prompt',
	tool_film_prompt_builder_rules_body:
		'Gegliedert wird so, wie man an einem Langfilm arbeitet: Die Logline setzt die Richtung, die drei Akte den Weg, die Szenenliste nummeriert die Sequenzen, und die Figurenentwicklung erklärt die Veränderung. Der Aufbau im Browser ist das Standardverhalten; die optionale KI ist in der Nutzung begrenzt und verlangt Turnstile.',
	tool_film_prompt_builder_rules_item_1:
		'Jedes Formularfeld landet in einem der Markdown-Blöcke Role, Task, Constraints und Output.',
	tool_film_prompt_builder_rules_item_2:
		'Standardexport ist Markdown; JSON ist eine Schaltfläche über derselben Ausgabe.',
	tool_film_prompt_builder_rules_item_3:
		'Die optionale KI ist ein zusätzlicher Schritt, kein Ersatz: Der lokale Modus bleibt nutzbar, und der KI-Text überschreibt die Ausgabe komplett — deshalb vor dem Kopieren prüfen.',
	tool_film_prompt_builder_rules_item_4:
		'Diese Seite baut nur Text zusammen: Sie schreibt das Drehbuch nicht für Sie und führt in Ihrem Browser kein Modell und keine Chat-API aus.',
	tool_film_prompt_builder_rules_title:
		'Was sie tut und was nicht',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'In die Zwischenablage kopiert.',
	tool_film_prompt_builder_status_done:
		'Prompt fertig.',
	tool_film_prompt_builder_status_working:
		'Prompt wird erzeugt…',
	tool_film_prompt_builder_title:
		'Prompt-Generator für Drehbücher — drei Akte und Szenenliste im Browser',
	tool_film_prompt_builder_usecase_1:
		'Vor einer Besprechung die drei Akte und die Szenenliste in einem Prompt bündeln, der direkt in ChatGPT, Gemini, Claude oder DeepSeek passt.',
	tool_film_prompt_builder_usecase_2:
		'Das JSON exportieren und Logline, Akte und Figurenentwicklung jeder Fassung als Felder in einer Tabelle oder im Repository festhalten, um sie zu vergleichen.',
	tool_film_prompt_builder_usecase_3:
		'Wenn Sie das allgemeine Vier-Block-Gerüst brauchen und nicht die Gliederung eines Langfilms, nehmen Sie den Prompt-Vorlagen-Generator.',
	tool_film_prompt_builder_usecase_4:
		'Bei einem noch nicht abgeschlossenen Projekt beim lokalen Modus bleiben: Der Text verlässt den Browser nur, wenn Sie den KI-Hinweis bestätigen.',
	tool_film_prompt_builder_usecases_title:
		'Wofür es sich lohnt',
};

export default de;
