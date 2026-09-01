/**
 * i18n tool shard (writing-prompt-generator / de).
 * Search H1: Schreib-Prompt-Generator — Dialog, Figur, Drehbuch, Zufall; lokale Montage.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Schreib-Prompt-Generator — deutschsprachiger Text-Shard */
const de: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Stellen Sie einfügefertige Schreib-Prompts zusammen: Dialogszenen, Charakterstudien, Skizzen für Drehbücher oder zufällige Story-Starter. Wählen Sie einen Modus, füllen Sie Felder aus oder würfeln Sie, kopieren Sie dann Markdown oder JSON nach ChatGPT, Gemini, Claude oder DeepSeek. Es wird keine Modell-API aufgerufen. Der Text bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
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
		'Schreib-Prompt-Generator für Dialog, Figur, Drehbuch & Zufall — Markdown/JSON; bleibt auf dem Gerät.',
	tool_writing_prompt_generator_description:
		'Schreib-Prompt-Generator für ChatGPT, Gemini, Claude und DeepSeek: Dialog-, Charakter-, Drehbuch- oder Zufalls-Story-Prompts lokal zusammenstellen. Der Zufallsmodus würfelt Genre, Schauplatz, Objekt und Konflikt auf derselben Seite — integrierter Zufalls-Prompt-Generator. Beispiel: Eine Dialogszene im Nacht-Diner läuft beim ersten Laden. Standard Markdown; JSON liefert {mode,fields,role,task,constraints,output}. Kein LLM — der Text bleibt auf dem Gerät und wird nicht auf einen Server hochgeladen.',
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
		'Beispiel laden wählt den Modus Dialog, füllt eine Nacht-Diner-Szene, erzeugt Markdown mit Role/Task/Constraints/Output-Abschnitten und aktiviert Kopieren. Probieren Sie die Chips Figur, Drehbuch oder Zufall für andere Voreinstellungen.',
	tool_writing_prompt_generator_example_title: 'Beispiel',
	tool_writing_prompt_generator_faq_a1:
		'Nein. Prompts werden in diesem Browser-Tab zusammengestellt. Nichts wird an OpenAI, Google, Anthropic, DeepSeek oder unsere Server gesendet.',
	tool_writing_prompt_generator_faq_a2:
		'Nein. Diese Seite formatiert nur Ihr Schreib-Brief in Prompt-Blöcke. Sie ruft ChatGPT, Gemini, Claude, DeepSeek oder keine andere Modell-API auf.',
	tool_writing_prompt_generator_faq_a3:
		'Der Prompt-Vorlagen-Builder strukturiert generische Role/Task/Constraints/Output-Vorlagen. Diese Seite fokussiert Schreibmodi — Dialogfelder, Charakterbögen, Drehbuch-Beats und einen Zufalls-Prompt-Generator auf einer Leinwand.',
	tool_writing_prompt_generator_faq_a4:
		'Ja. Der Zufallsmodus würfelt Genre, Schauplatz, Objekt, Emotion und Konflikt. Optionaler numerischer Seed wiederholt denselben Wurf. Zufallsausgabe ist nur Inspiration — ohne Qualitätsgarantie.',
	tool_writing_prompt_generator_faq_a5:
		'Ja. Der JSON-Chip liefert {mode,fields,role,task,constraints,output} für Tests oder Configs. Markdown nutzt ## Role / Task / Constraints / Output-Überschriften.',
	tool_writing_prompt_generator_faq_a6:
		'Ja. Kopieren Sie den fertigen Prompt nach ChatGPT, Gemini, Claude oder DeepSeek. Wir trennen keine URLs pro Plattform, weil die Aufgabe Textformatierung ist, nicht API-Aufrufe.',
	tool_writing_prompt_generator_faq_q1: 'Wird mein Schreib-Prompt hochgeladen?',
	tool_writing_prompt_generator_faq_q2: 'Ruft das einen LLM auf?',
	tool_writing_prompt_generator_faq_q3: 'Worin unterscheidet es sich vom Prompt-Vorlagen-Builder?',
	tool_writing_prompt_generator_faq_q4: 'Funktioniert hier ein Zufalls-Prompt-Generator?',
	tool_writing_prompt_generator_faq_q5: 'Kann ich JSON erhalten?',
	tool_writing_prompt_generator_faq_q6: 'Kann ich es mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
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
	tool_writing_prompt_generator_random_seed_label: 'Seed (optional)',
	tool_writing_prompt_generator_random_seed_ph: 'z. B. 42',
	tool_writing_prompt_generator_result_label: 'Schreib-Prompt',
	tool_writing_prompt_generator_rules_body:
		'Schreib-Prompts brauchen modusspezifische Felder, ehrliche Zufallsgrenzen und dieselbe lokale Privatsphäre wie andere Builder.',
	tool_writing_prompt_generator_rules_item_1:
		'Vier Blöcke in der Ausgabe: Role, Task, Constraints, Output — im Einklang mit strukturierten Prompt-Vorlagen.',
	tool_writing_prompt_generator_rules_item_2:
		'Der Zufallsmodus integriert den Zufalls-Prompt-Generator unter dieser URL — ohne separate Seite.',
	tool_writing_prompt_generator_rules_item_3:
		'Standardexport ist Markdown. JSON ist ein Chip auf derselben Leinwand.',
	tool_writing_prompt_generator_rules_item_4:
		'Dieses Tool stellt nur Text zusammen. Es erzeugt keine fertigen Geschichten und ruft keine Cloud-Modelle auf.',
	tool_writing_prompt_generator_rules_title: 'Was Sie erwarten sollten',
	tool_writing_prompt_generator_scr_notes_label: 'Beat-Notizen',
	tool_writing_prompt_generator_scr_notes_ph: 'Szenenzahl, Tempo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Prämisse / Logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup in einem Absatz…',
	tool_writing_prompt_generator_scr_structure_label: 'Struktur',
	tool_writing_prompt_generator_scr_structure_ph: 'Drei Akte, Save the Cat, episodisch…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: 'In die Zwischenablage kopiert.',
	tool_writing_prompt_generator_status_done: 'Prompt bereit.',
	tool_writing_prompt_generator_status_working: 'Prompt wird erstellt…',
	tool_writing_prompt_generator_title: 'Schreib-Prompt-Generator',
	tool_writing_prompt_generator_usecase_1:
		'Entwerfen Sie einen Dialogszenen-Prompt für eine Schreibgruppe — fügen Sie ihn in ChatGPT oder Claude für Beat-Vorschläge ein, nicht für vollständige Prosa.',
	tool_writing_prompt_generator_usecase_2:
		'Würfeln Sie, wenn Sie einen frischen Story-Starter brauchen, ohne eine separate Zufallsseite zu öffnen.',
	tool_writing_prompt_generator_usecase_3:
		'Exportieren Sie Charakterbogen-Prompt-JSON für einen Pipeline-Test, dann öffnen Sie den Prompt-Vorlagen-Builder für API-Vierfeld-Vorlagen.',
	tool_writing_prompt_generator_usecase_4:
		'Skizzieren Sie lokal ein Kurzdrehbuch-Beat-Sheet, bevor Sie den Prompt in Gemini für Table Reads übernehmen.',
	tool_writing_prompt_generator_usecases_title: 'Gute Einsatzfälle',
};

export default de;
