/**
 * i18n tool shard (short-drama-prompt-generator / de).
 * Neu geschrieben für Suchen wie „Prompt-Generator für vertikale Kurzserien“ oder „Aufhänger pro Folge mit KI“:
 * Hauptbegriff steht in der H1; „Cliffhanger am Folgenende“, „9:16 mit eingebrannten Untertiteln“ und
 * „als JSON exportieren“ stehen in Beschreibung, FAQ und Anwendungsfällen.
 * Sachliche Grenzen: Der Prompt entsteht im Browser; nur Erweitern/Verfeinern schickt den Entwurf an
 * Cloudflare Workers AI (Turnstile, Kontingent). Video entsteht hier nicht.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Geben Sie an, wie viele Folgen und wie lang, was in den ersten Sekunden hängen bleibt, welcher Cliffhanger jede Folge schließt, welches Hochformat und welches Genre: Die Seite ordnet das im Browser und gibt einen direkt verwendbaren Prompt in Markdown oder JSON zurück, den Sie in ChatGPT, Gemini, Claude oder DeepSeek einfügen, um Folge für Folge zu schreiben. Standardmäßig wird nichts verschickt; der Entwurf geht erst nach einem Klick auf Erweitern oder Verfeinern — und nach Turnstile — an Cloudflare Workers AI. Hier entsteht Text, kein Video.',
	tool_short_drama_prompt_generator_build:
		'Prompt erzeugen',
	tool_short_drama_prompt_generator_clear:
		'Leeren',
	tool_short_drama_prompt_generator_copy:
		'Kopieren',
	tool_short_drama_prompt_generator_desc:
		'Prompt-Generator für vertikale Kurzserien: Folgen, Aufhänger, Cliffhanger und 9:16-Format werden im Browser zu Markdown oder JSON geordnet; Cloudflare-KI optional mit Turnstile.',
	tool_short_drama_prompt_generator_description:
		'Prompt-Generator für vertikale Kurzserien: Sie tragen Anzahl und Länge der Folgen, den Aufhänger für die ersten zwei Sekunden, den Cliffhanger jedes Folgenendes, das Hochformat und das Genre ein, und die Seite verteilt alles auf die Blöcke Role, Task, Constraints und Output, damit ChatGPT, Gemini, Claude oder DeepSeek im Folgenrhythmus schreiben. Markdown ist Standard, JSON gibt es für Ihre Folgenübersicht; das Beispiel mit 12 × 75 s und einem Geheimnis aus dem Job ist beim Aufrufen schon durchgelaufen. Bleibt ein Aufhänger schwach, schickt Erweitern oder Verfeinern den Entwurf an Cloudflare Workers AI (Turnstile, Kontingent).',
	tool_short_drama_prompt_generator_download:
		'Herunterladen',
	tool_short_drama_prompt_generator_empty:
		'Füllen Sie mindestens ein Feld aus, bevor Sie den Prompt erzeugen.',
	tool_short_drama_prompt_generator_example:
		'Eingabe: Folgen = 12 × 75 s; Aufhänger = eine Praktikantin deckt ein Leck bei den Lohnabrechnungen auf, und der Chef erkennt ihre Stimme aus einer zehn Jahre alten Sprachnachricht zum Sorgerecht; Cliffhanger = Folge 6 endet damit, dass der Chef die Nachricht mitten im Abspielen löscht, Folge 7 beginnt mit einem stummen Blickduell im Aufzug; Format = 9:16, eingebrannte Untertitel, ein Einstieg, der in zwei Sekunden den Daumen stoppt. Ausgabe (Markdown): Der Block ## Task listet Episodes, Hook, Cliffhanger, Vertical / Format und Genre für eine vertikale Serie.',
	tool_short_drama_prompt_generator_example_title:
		'Beispiel',
	tool_short_drama_prompt_generator_faq_a1:
		'Geordnet wird in diesem Browser-Tab, standardmäßig verlässt also nichts Ihr Gerät. Nur wenn Sie Erweitern oder Verfeinern anklicken, geht der aktuelle Entwurf an Cloudflare Workers AI; wir leiten ihn nicht von unseren Servern an OpenAI, Google, Anthropic oder DeepSeek weiter.',
	tool_short_drama_prompt_generator_faq_a2:
		'Im lokalen Modus wird kein Modell angesprochen: Folgen, Aufhänger, Cliffhanger, Format und Genre werden nur auf die Blöcke Role, Task, Constraints und Output verteilt. Erweitern und Verfeinern laufen nach dem Turnstile-Check über Cloudflare Workers AI und rufen von unseren Servern keine API von ChatGPT, Gemini, Claude oder DeepSeek auf.',
	tool_short_drama_prompt_generator_faq_a3:
		'Der Prompt-Vorlagen-Generator liefert das allgemeine Vier-Block-Gerüst für jedes Thema. Hier sind die Felder die einer vertikalen Serie — Folgen und Länge, Aufhänger, Cliffhanger, Format, Genre —, mit einem vollständigen Beispiel beim Aufrufen und Regeln zu dem, was beim Schauen Folge für Folge typischerweise schiefgeht.',
	tool_short_drama_prompt_generator_faq_a4:
		'Turnstile hält automatische Skripte fern, damit das kostenlose Kontingent bei echten Nutzern bleibt. Lösen Sie es im KI-Bereich, bevor Sie Erweitern oder Verfeinern anklicken; ohne gültiges Token melden diese Schaltflächen einen Fehler, und der Aufbau im Browser funktioniert weiter.',
	tool_short_drama_prompt_generator_faq_a5:
		'Ja. Nach dem Umschalten auf JSON liefert dieselbe Ausgabe die strukturierten Felder plus den fertigen Prompt-Text — praktisch, um jede Folge in einer Tabelle festzuhalten und zu prüfen, ob sich Aufhänger und Cliffhanger wiederholen.',
	tool_short_drama_prompt_generator_faq_a6:
		'Ja. Kopieren Sie das Ergebnis und fügen Sie es in den Chat Ihrer Wahl ein. Diese Seite ordnet nur die Aufteilung nach Folgen und ruft keine API auf, deshalb gibt es keine eigene Adresse pro Plattform.',
	tool_short_drama_prompt_generator_faq_q1:
		'Wird die eingetippte Handlung irgendwohin geschickt?',
	tool_short_drama_prompt_generator_faq_q2:
		'Ruft diese Seite die API von ChatGPT oder anderen Modellen auf?',
	tool_short_drama_prompt_generator_faq_q3:
		'Was ist der Unterschied zum Prompt-Vorlagen-Generator?',
	tool_short_drama_prompt_generator_faq_q4:
		'Warum brauche ich Turnstile für die optionale KI?',
	tool_short_drama_prompt_generator_faq_q5:
		'Kann ich die Ausgabe als JSON bekommen?',
	tool_short_drama_prompt_generator_faq_q6:
		'Lässt sich das mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
	tool_short_drama_prompt_generator_faq_q7:
		'Worin unterscheiden sich der lokale Modus und die optionale Cloudflare-KI?',
	tool_short_drama_prompt_generator_faq_a7:
		'Lokal wird alles in diesem Tab geordnet, ohne den Browser zu verlassen. Erweitern oder Verfeinern schickt den Entwurf an Cloudflare Workers AI (Turnstile nötig, mit Frequenz- und Tageskontingent); der zurückgegebene Text wird vollständig in die Ausgabe geschrieben und überschreibt den angezeigten Entwurf — lesen Sie ihn vor dem Kopieren, damit eine Umschreibung Ihre Cliffhanger-Reihenfolge nicht durcheinanderbringt. Bei Fehler oder erschöpftem Kontingent bleiben Sie beim lokalen Modus.',
	tool_short_drama_prompt_generator_ai_expand:
		'Mit KI erweitern',
	tool_short_drama_prompt_generator_ai_polish:
		'Mit KI verfeinern',
	tool_short_drama_prompt_generator_ai_panel_label:
		'Optional: Cloudflare AI (Turnstile erforderlich)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'Entwurf an Cloudflare Workers AI senden?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'Dieser Schritt ist optional: Er schickt den Entwurf, der jetzt in den Feldern steht, für eine Inferenz an Cloudflare Workers AI. Wir leiten ihn nicht von unseren Servern an OpenAI, Google, Anthropic oder DeepSeek weiter. Ohne KI wird der Prompt weiterhin in Ihrem Browser gebaut.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Weiter',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Abbrechen',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI arbeitet…',
	tool_short_drama_prompt_generator_ai_done:
		'Der KI-Text steht vollständig in der Ausgabe. Vor dem Kopieren prüfen.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'Die KI hat diesmal nicht geantwortet; die Ausgabe ist unverändert.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'KI-Kontingent erschöpft. Bauen Sie den Prompt hier weiter oder versuchen Sie es morgen (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Lösen Sie den Turnstile-Check, bevor Sie die KI nutzen.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'Ausgabeformat',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Folgen und Länge',
	tool_short_drama_prompt_generator_episodes_ph:
		'Zum Beispiel: 12 × 75 s…',
	tool_short_drama_prompt_generator_hook_label:
		'Aufhänger zum Einstieg',
	tool_short_drama_prompt_generator_hook_ph:
		'Zum Beispiel: Praktikantin deckt ein Lohn-Leck auf…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Cliffhanger am Folgenende',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Zum Beispiel: Folge 6 endet mit dem Löschen der Nachricht…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Hochformat',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Zum Beispiel: 9:16, eingebrannte Untertitel, Einstieg in 2 s…',
	tool_short_drama_prompt_generator_genre_label:
		'Genre',
	tool_short_drama_prompt_generator_genre_ph:
		'Zum Beispiel: Büro-Melodram mit Familiengeheimnis…',

	tool_short_drama_prompt_generator_how_body:
		'Folgen, Aufhänger und Cliffhanger ausfüllen, Prompt erzeugen und in ChatGPT, Gemini, Claude oder DeepSeek Folge für Folge weiterschreiben; bleibt ein Aufhänger schwach, hilft Erweitern oder Verfeinern mit der optionalen Cloudflare-KI.',
	tool_short_drama_prompt_generator_how_item_1:
		'Klicken Sie auf Beispiel laden für das Standard-Preset.',
	tool_short_drama_prompt_generator_how_item_2:
		'Folgen und Länge, Aufhänger, Cliffhanger, Hochformat und Genre anpassen und auf Prompt erzeugen klicken; für strukturierten Export auf JSON umschalten.',
	tool_short_drama_prompt_generator_how_item_3:
		'Optional: Turnstile im KI-Bereich lösen und Erweitern oder Verfeinern anklicken; der zurückgegebene Text landet in der Ausgabe.',
	tool_short_drama_prompt_generator_how_item_4:
		'Kopieren oder herunterladen und in ChatGPT, Gemini, Claude oder DeepSeek einfügen, damit das Modell dieser Folgenaufteilung folgt.',
	tool_short_drama_prompt_generator_how_title:
		'So gehen Sie vor',
	tool_short_drama_prompt_generator_load_sample:
		'Beispiel laden',
	tool_short_drama_prompt_generator_platforms_lead:
		'Die Ausgabe lässt sich unverändert in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_short_drama_prompt_generator_result_label:
		'Erzeugter Prompt',
	tool_short_drama_prompt_generator_rules_body:
		'Gegliedert wird nach dem Rhythmus des vertikalen Schauens: Zahl und Länge der Folgen setzen den Rahmen, der Aufhänger entscheidet, ob der Daumen in den ersten zwei Sekunden stehen bleibt, der Cliffhanger treibt in die nächste Folge, und das Format klärt Bildausschnitt und Untertitel. Der Aufbau im Browser ist das Standardverhalten; die optionale KI ist in der Nutzung begrenzt und verlangt Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'Jedes Formularfeld landet in einem der Markdown-Blöcke Rolle, Aufgabe, Einschränkungen und Ausgabeformat.',
	tool_short_drama_prompt_generator_rules_item_2:
		'Standardexport ist Markdown; JSON ist eine Schaltfläche über derselben Ausgabe.',
	tool_short_drama_prompt_generator_rules_item_3:
		'Die optionale KI ist ein zusätzlicher Schritt, kein Ersatz: Der lokale Modus bleibt nutzbar, und der KI-Text überschreibt die Ausgabe komplett — deshalb vor dem Kopieren prüfen.',
	tool_short_drama_prompt_generator_rules_item_4:
		'Diese Seite baut nur Text zusammen: Sie erzeugt kein Video und führt in Ihrem Browser kein Modell und keine Chat-API aus.',
	tool_short_drama_prompt_generator_rules_title:
		'Was sie tut und was nicht',
	tool_short_drama_prompt_generator_sec_constraints:
		'Einschränkungen',
	tool_short_drama_prompt_generator_sec_output:
		'Ausgabeformat',
	tool_short_drama_prompt_generator_sec_role:
		'Rolle',
	tool_short_drama_prompt_generator_sec_task:
		'Aufgabe',
	tool_short_drama_prompt_generator_status_copied:
		'In die Zwischenablage kopiert.',
	tool_short_drama_prompt_generator_status_done:
		'Prompt fertig.',
	tool_short_drama_prompt_generator_status_working:
		'Prompt wird erzeugt…',
	tool_short_drama_prompt_generator_title:
		'Prompt-Generator für vertikale Kurzserien — Aufhänger und Cliffhanger im Browser',
	tool_short_drama_prompt_generator_usecase_1:
		'Vor einer Besprechung Folgen, Aufhänger und Cliffhanger in einem Prompt bündeln, der direkt in ChatGPT, Gemini, Claude oder DeepSeek passt.',
	tool_short_drama_prompt_generator_usecase_2:
		'Das JSON exportieren und Aufhänger und Cliffhanger jeder Folge als Felder in einer Tabelle festhalten, um wiederkehrende Muster zu erkennen.',
	tool_short_drama_prompt_generator_usecase_3:
		'Wenn Sie das allgemeine Vier-Block-Gerüst brauchen und nicht die Felder einer vertikalen Serie, nehmen Sie den Prompt-Vorlagen-Generator.',
	tool_short_drama_prompt_generator_usecase_4:
		'Bei einem noch nicht veröffentlichten Projekt beim lokalen Modus bleiben: Der Text verlässt den Browser nur, wenn Sie den KI-Hinweis bestätigen.',
	tool_short_drama_prompt_generator_usecases_title:
		'Wofür es sich lohnt',
};

export default de;
