/**
 * i18n tool shard (writing-prompt-generator / de).
 * Such-orientierte H1: Schreib-Prompt-Generator — Dialog, Figur, Drehbuch, Zufall.
 * Der Zusammenbau läuft im Browser; Erweitern/Verfeinern ist optional über Cloudflare Workers AI
 * (Turnstile + Kontingent) und die Antwort ersetzt den Ergebnisblock.
 * ChatGPT / Gemini / Claude / DeepSeek stehen in Description und erster Bildschirmseite.
 */
import type { SiteLangDict } from '../../../types';

/** Schreib-Prompt-Generator — deutschsprachiger Text-Shard */
const de: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Stellen Sie einfügefertige Schreib-Prompts zusammen: Dialogszenen, Charakterstudien, Skizzen für Drehbücher oder zufällige Story-Starter. Wählen Sie einen Modus, füllen Sie Felder aus oder würfeln Sie, kopieren Sie dann Markdown oder JSON nach ChatGPT, Gemini, Claude oder DeepSeek. Standardmäßig entsteht der Prompt im Browser, und wir rufen für Sie keine Chat-API auf; erst wenn Sie „Mit KI erweitern“ oder „Mit KI verfeinern“ klicken, geht der aktuelle Entwurf an Cloudflare Workers AI (Turnstile nötig, Kontingent begrenzt).',
	tool_writing_prompt_generator_build: 'Prompt erstellen',
	tool_writing_prompt_generator_char_flaw_label: 'Schwäche / Makel',
	tool_writing_prompt_generator_char_flaw_ph: 'Was sie ausbremst…',
	tool_writing_prompt_generator_char_goal_label: 'Ziel',
	tool_writing_prompt_generator_char_goal_ph: 'Was sie in dieser Geschichte will…',
	tool_writing_prompt_generator_char_name_label: 'Charaktername',
	tool_writing_prompt_generator_char_name_ph: 'Vorname oder Rollenbezeichnung…',
	tool_writing_prompt_generator_char_traits_label: 'Eigenschaften',
	tool_writing_prompt_generator_char_traits_ph: 'Persönlichkeit, Gewohnheiten, Widersprüche…',
	tool_writing_prompt_generator_char_voice_label: 'Stimme / Diktion',
	tool_writing_prompt_generator_char_voice_ph: 'Satzrhythmus, Wortschatz…',
	tool_writing_prompt_generator_clear: 'Leeren',
	tool_writing_prompt_generator_copy: 'Kopieren',
	tool_writing_prompt_generator_desc:
		'Schreib-Prompt-Generator — Modi Dialog, Figur, Drehbuch und Zufall; Zusammenbau lokal im Browser, Cloudflare-KI optional.',
	tool_writing_prompt_generator_description:
		'Schreib-Prompt-Generator: Wählen Sie einen Modus — Dialog, Figur, Drehbuch oder Zufall —, füllen Sie die Felder aus und erhalten Sie in wenigen Schritten einen Prompt zum Einfügen in ChatGPT, Gemini, Claude oder DeepSeek. Beim Öffnen läuft ein Dialog-Beispiel; im Zufallsmodus würfeln Sie einen Story-Starter, ein Seed wiederholt denselben Wurf. Export als Markdown oder JSON; die Cloudflare-KI bleibt optional.',
	tool_writing_prompt_generator_dlg_characters_label: 'Figuren',
	tool_writing_prompt_generator_dlg_characters_ph: 'Namen + Rollen in einer Zeile…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Konflikt',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Welche Spannung die Szene antreibt…',
	tool_writing_prompt_generator_dlg_genre_label: 'Genre / Ton',
	tool_writing_prompt_generator_dlg_genre_ph: 'Zeitgenössisches Drama, Rom-Com…',
	tool_writing_prompt_generator_dlg_setting_label: 'Schauplatz',
	tool_writing_prompt_generator_dlg_setting_ph: 'Ort, Zeit, Atmosphäre…',
	tool_writing_prompt_generator_dlg_tone_label: 'Dialogstil',
	tool_writing_prompt_generator_dlg_tone_ph: 'Subtext, Schlagabtausch, knapp…',
	tool_writing_prompt_generator_download: 'Herunterladen',
	tool_writing_prompt_generator_empty: 'Füllen Sie in diesem Modus mindestens ein Feld aus, bevor Sie erstellen.',
	tool_writing_prompt_generator_example:
		'Eingabe (Dialog, Beispiel): Genre = zeitgenössisches Drama; Characters = Maya (Barista) & Jonah (Musiker); Conflict = Maya erkennt das Lied über den Ex. Ausgabe (Markdown): ## Rolle → Schreibcoach; ## Aufgabe → genre/characters/setting/conflict/tone. Drehbuch = Leuchtturm-Fax-Rätsel — nicht der Food-Truck aus Film.',
	tool_writing_prompt_generator_example_title: 'Beispiel',
	tool_writing_prompt_generator_faq_a1:
		'Standardmäßig entsteht der Prompt in diesem Tab, nichts verlässt den Browser. Nur Erweitern/Verfeinern schickt den Text dieses Klicks an Cloudflare Workers AI; von unseren Servern geht nichts an OpenAI, Google, Anthropic oder DeepSeek.',
	tool_writing_prompt_generator_faq_a2:
		'Der lokale Modus formatiert nur Ihre Schreibfelder in diesem Tab. Erweitern/Verfeinern nutzt nach dem Turnstile Cloudflare Workers AI — wir öffnen weder ChatGPT noch Gemini, Claude oder DeepSeek für Sie.',
	tool_writing_prompt_generator_faq_a3:
		'Der Prompt-Vorlagen-Builder strukturiert generische Role/Task/Constraints/Output-Vorlagen. Diese Seite fokussiert Schreibmodi — Dialogfelder, Charakterbögen, Drehbuch-Beats und einen Zufalls-Prompt-Generator auf einer Leinwand.',
	tool_writing_prompt_generator_faq_a4:
		'Ja. Der Zufallsmodus würfelt Genre, Schauplatz, Objekt, Emotion und Konflikt. Ein optionaler numerischer Seed wiederholt genau denselben Wurf. Das Ergebnis ist Anregung, keine Qualitätsgarantie.',
	tool_writing_prompt_generator_faq_a5:
		'Ja. Lösen Sie das Turnstile-Widget im KI-Panel, bevor Sie Erweitern oder Verfeinern klicken; ohne gültiges Token meldet der Button einen Fehler, der lokale Modus läuft weiter.',
	tool_writing_prompt_generator_faq_a6:
		'Ja. Der JSON-Chip liefert {mode,fields,role,task,constraints,output} für Tests oder Configs. Markdown nutzt die Überschriften ## Rolle / Aufgabe / Einschränkungen / Ausgabeformat.',
	tool_writing_prompt_generator_faq_q1: 'Wird mein Schreib-Prompt hochgeladen?',
	tool_writing_prompt_generator_faq_q2: 'Ruft das einen LLM auf?',
	tool_writing_prompt_generator_faq_q3: 'Worin unterscheidet es sich vom Prompt-Vorlagen-Builder?',
	tool_writing_prompt_generator_faq_q4:
		'Funktioniert der Zufalls-Prompt-Generator hier?',
	tool_writing_prompt_generator_faq_q5: 'Warum verlangt die optionale KI ein Turnstile?',
	tool_writing_prompt_generator_faq_q6: 'Kann ich JSON erhalten?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Ausgabeformat',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Wählen Sie einen Schreibmodus, füllen Sie Felder aus oder würfeln Sie, erstellen Sie einen Prompt-Block und fügen Sie ihn in ChatGPT, Gemini, Claude oder DeepSeek ein.',
	tool_writing_prompt_generator_how_item_1:
		'Wählen Sie Dialog, Figur, Drehbuch oder Zufall — Beispiel laden hat beim Öffnen bereits das Dialog-Preset ausgeführt.',
	tool_writing_prompt_generator_how_item_2: 'Füllen Sie modusspezifische Felder aus (oder geben Sie einen Seed ein und klicken Zufall würfeln).',
	tool_writing_prompt_generator_how_item_3: 'Klicken Sie Prompt erstellen (in Zufall ausgeblendet — Zufall würfeln nutzen).',
	tool_writing_prompt_generator_how_item_4: 'Kopieren oder laden Sie Markdown/JSON herunter und fügen Sie es in Ihre Chat-Oberfläche ein.',
	tool_writing_prompt_generator_how_title: 'So funktioniert es',
	tool_writing_prompt_generator_load_sample: 'Beispiel laden',
	tool_writing_prompt_generator_mode_character: 'Figur',
	tool_writing_prompt_generator_mode_dialogue: 'Dialog',
	tool_writing_prompt_generator_mode_label: 'Schreibmodus',
	tool_writing_prompt_generator_mode_random: 'Zufall',
	tool_writing_prompt_generator_mode_script: 'Drehbuch / Gliederung',
	tool_writing_prompt_generator_platforms_lead:
		'Für ChatGPT, Gemini, Claude und DeepSeek — kopieren Sie den fertigen Schreib-Prompt in eine dieser Chat-Oberflächen.',
	tool_writing_prompt_generator_random_lead:
		'Würfeln Sie einen Story-Starter aus Genre, Schauplatz, Objekt, Emotion und Konflikt. Optionaler Seed wiederholt denselben Wurf.',
	tool_writing_prompt_generator_random_roll: 'Zufall würfeln',
	tool_writing_prompt_generator_random_seed_label: 'Zufalls-Seed (optional)',
	tool_writing_prompt_generator_random_seed_ph: 'z. B. 42',
	tool_writing_prompt_generator_result_label: 'Schreib-Prompt',
	tool_writing_prompt_generator_rules_body:
		'Schreib-Prompts brauchen Felder je Modus, eine ehrliche Ansage, was der Zufall liefert, und denselben lokalen Zusammenbau wie die anderen Builder.',
	tool_writing_prompt_generator_rules_item_1:
		'Vier Blöcke in der Ausgabe: Role, Task, Constraints, Output — im Einklang mit strukturierten Prompt-Vorlagen.',
	tool_writing_prompt_generator_rules_item_2:
		'Der Zufallsmodus sitzt auf derselben Leinwand: Er würfelt Genre, Schauplatz, Objekt, Emotion und Konflikt, mit einem Seed wiederholen Sie den Wurf.',
	tool_writing_prompt_generator_rules_item_3:
		'Standardexport ist Markdown. JSON ist ein Chip auf derselben Leinwand.',
	tool_writing_prompt_generator_rules_item_4:
		'Die optionale Cloudflare-KI ersetzt den lokalen Modus nie — prüfen Sie ihren Text vor dem Kopieren. Dieses Tool baut den Prompt, es schreibt nicht die fertige Geschichte.',
	tool_writing_prompt_generator_rules_title: 'Was Sie erwarten sollten',
	tool_writing_prompt_generator_scr_notes_label: 'Beat-Notizen',
	tool_writing_prompt_generator_scr_notes_ph: 'Szenenzahl, Tempo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Prämisse / Logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup in einem Absatz…',
	tool_writing_prompt_generator_scr_structure_label: 'Struktur',
	tool_writing_prompt_generator_scr_structure_ph: 'Drei Akte, Save the Cat, episodisch…',
	tool_writing_prompt_generator_sec_constraints: 'Einschränkungen',
	tool_writing_prompt_generator_sec_output: 'Ausgabeformat',
	tool_writing_prompt_generator_sec_role: 'Rolle',
	tool_writing_prompt_generator_sec_task: 'Aufgabe',
	tool_writing_prompt_generator_status_copied: 'In die Zwischenablage kopiert.',
	tool_writing_prompt_generator_status_done: 'Prompt bereit.',
	tool_writing_prompt_generator_status_working: 'Prompt wird erstellt…',
	tool_writing_prompt_generator_title:
		'Schreib-Prompt-Generator — Lokal + optionale KI',
	tool_writing_prompt_generator_usecase_1:
		'Entwerfen Sie einen Dialogszenen-Prompt für eine Schreibgruppe — fügen Sie ihn in ChatGPT oder Claude für Beat-Vorschläge ein, nicht für vollständige Prosa.',
	tool_writing_prompt_generator_usecase_2:
		'Würfeln Sie, wenn Sie einen frischen Story-Starter brauchen, ohne eine separate Zufallsseite zu öffnen.',
	tool_writing_prompt_generator_usecase_3:
		'Exportieren Sie Charakterbogen-Prompt-JSON für einen Pipeline-Test, dann öffnen Sie den Prompt-Vorlagen-Builder für API-Vierfeld-Vorlagen.',
	tool_writing_prompt_generator_usecase_4:
		'Skizzieren Sie lokal ein Kurzdrehbuch-Beat-Sheet, bevor Sie den Prompt in Gemini für Table Reads übernehmen.',
	tool_writing_prompt_generator_usecases_title: 'Gute Einsatzfälle',
	tool_writing_prompt_generator_ai_expand:
		'Mit KI erweitern',
	tool_writing_prompt_generator_ai_polish:
		'Mit KI verfeinern',
	tool_writing_prompt_generator_ai_panel_label:
		'Optionale Cloudflare-KI (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'Text an Cloudflare Workers AI senden?',
	tool_writing_prompt_generator_ai_consent_body:
		'Dieser optionale Schritt schickt Ihren aktuellen Entwurf zur Inferenz an Cloudflare Workers AI. Von unseren Servern geht nichts an OpenAI, Google, Anthropic oder DeepSeek. Ohne KI funktioniert der lokale Zusammenbau unverändert.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Weiter',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Abbrechen',
	tool_writing_prompt_generator_ai_working:
		'Die Cloudflare-KI arbeitet…',
	tool_writing_prompt_generator_ai_done:
		'Der KI-Text steht vollständig im Ergebnis. Bitte vor dem Kopieren prüfen.',
	tool_writing_prompt_generator_ai_err_generic:
		'Die KI ist fehlgeschlagen. Ihr lokaler Prompt bleibt unverändert.',
	tool_writing_prompt_generator_ai_err_rate:
		'KI-Kontingent erschöpft. Nutzen Sie den lokalen Modus oder versuchen Sie es morgen (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Lösen Sie das Turnstile, bevor Sie die KI nutzen.',
	tool_writing_prompt_generator_faq_q7:
		'Kann ich es mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
	tool_writing_prompt_generator_faq_a7:
		'Ja. Kopieren Sie den fertigen Prompt nach ChatGPT, Gemini, Claude oder DeepSeek. Die Seite bereitet nur den Text auf; sie meldet sich nirgends an und ruft keine API auf.',
	tool_writing_prompt_generator_faq_q8:
		'Was unterscheidet den lokalen Modus von der optionalen Cloudflare-KI?',
	tool_writing_prompt_generator_faq_a8:
		'Lokal: alles entsteht in diesem Tab, ohne Versand. Erweitern/Verfeinern schickt den Entwurf an Cloudflare Workers AI (Turnstile und Tageskontingent), und die Antwort ersetzt den Ergebnisblock. Bei Fehler oder erschöpftem Kontingent bleiben Sie beim lokalen Modus.',
};

export default de;
