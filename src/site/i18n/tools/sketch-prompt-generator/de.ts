/**
 * i18n tool shard (sketch-prompt-generator / de).
 * H1: Sketch.app-Prompt-Generator (Mac-Design-App, kein Bleistift-Skizzen-Bildprompt).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'Erstellen Sie kopierfertige Prompts, die ChatGPT, Gemini, Claude oder DeepSeek anleiten, Sketch.app zu bedienen — Artboards, Symbols, Shared Styles und Export. Felder ausfüllen, Markdown oder JSON kopieren. Standardmäßig entsteht der Prompt in Ihrem Browser; erst ein Klick auf Erweitern oder Glätten schickt den aktuellen Entwurf an Cloudflare Workers AI (Turnstile nötig, Rate- und Kontingentgrenzen), und die Antwort ersetzt den Ausgabeblock vollständig.',
	tool_sketch_prompt_generator_build: 'Prompt erstellen',
	tool_sketch_prompt_generator_clear: 'Leeren',
	tool_sketch_prompt_generator_copy: 'Kopieren',
	tool_sketch_prompt_generator_desc:
		'Sketch.app-Prompt-Generator — Artboards, Symbols und Export-Schritte im Browser zusammenbauen; optional Erweitern/Glätten per Cloudflare AI (Turnstile).',
	tool_sketch_prompt_generator_description:
		'Sketch.app-Prompt-Generator — Lokal + optionale KI für ChatGPT, Gemini, Claude und DeepSeek: Ziel, Artboards, Symbols und Export eintragen, und der Browser baut daraus einen strukturierten Prompt mit den Arbeitsschritten in Sketch.app. Beim Öffnen läuft bereits ein änderbares Beispiel; danach optional Erweitern oder Glätten über Cloudflare Workers AI (Turnstile nötig, Kontingent). Markdown als Standard, JSON für Pipelines.',
	tool_sketch_prompt_generator_download: 'Herunterladen',
	tool_sketch_prompt_generator_empty: 'Füllen Sie vor dem Erstellen mindestens ein Feld aus.',
	tool_sketch_prompt_generator_example:
		'Eingabe: Ziel = Login-Screen in Sketch.app; Artboards = iPhone 14 390×844; Symbols = Button/Primary + Input; Export = 1x/2x/3x PNG + PDF. Ausgabe (Markdown): ## Rolle → Sketch.app-Assistent; ## Aufgabe → nummerierte Checkliste.',
	tool_sketch_prompt_generator_example_title: 'Beispiel',
	tool_sketch_prompt_generator_faq_a1:
		'Lokaler Zusammenbau läuft in diesem Tab — standardmäßig kein Upload. Optionales Expand/Polish sendet nur den Text dieses Klicks an Cloudflare Workers AI, nicht an OpenAI, Google, Anthropic oder DeepSeek von unseren Servern.',
	tool_sketch_prompt_generator_faq_a2:
		'Lokal formatiert nur Felder. Expand/Polish nutzt Cloudflare Workers AI nach Turnstile — keine Chat-APIs und keine Fernsteuerung von Sketch.app.',
	tool_sketch_prompt_generator_faq_a3:
		'Prompt-Vorlagen-Builder deckt generische Vier-Felder-Vorlagen ab. Diese Seite fokussiert Sketch.app: Ziel, Artboards, Symbols/Styles, Export.',
	tool_sketch_prompt_generator_faq_a4:
		'Nein. Midjourney zielt auf Raster-Bildstile. Hier geht es um Sketch.app (Mac-Designsoftware). Für Bleistift-/Line-Art-Bildprompts Midjourney-Seite nutzen.',
	tool_sketch_prompt_generator_faq_a5:
		'Ja. Turnstile im optionalen KI-Panel vor Expand/Polish ausfüllen. Ohne Token schlagen KI-Buttons fehl; Lokalmodus bleibt nutzbar.',
	tool_sketch_prompt_generator_faq_a6: 'Ja. Der JSON-Chip liefert strukturierte Felder plus zusammengebauten Prompt.',
	tool_sketch_prompt_generator_faq_a7:
		'Ja. Prompt in ChatGPT, Gemini, Claude oder DeepSeek einfügen, damit der Chat durch Sketch.app-Menüs führt. Wir formatieren nur Text; Sketch läuft nicht bei uns.',
	tool_sketch_prompt_generator_faq_a8:
		'Lokal wird alles in diesem Tab formatiert, nichts verlässt den Browser. Erweitern/Glätten schickt den Entwurf an Cloudflare Workers AI (Turnstile und Tageskontingent); die Antwort ersetzt den Ausgabeblock komplett. Bei Fehler oder erschöpftem Kontingent lokal weiterarbeiten.',
	tool_sketch_prompt_generator_faq_q1: 'Wird mein Prompt hochgeladen?',
	tool_sketch_prompt_generator_faq_q2: 'Ruft das ChatGPT auf oder steuert Sketch.app remote?',
	tool_sketch_prompt_generator_faq_q3: 'Unterschied zum Prompt-Vorlagen-Builder?',
	tool_sketch_prompt_generator_faq_q4: 'Ist das für Bleistiftskizzen oder Midjourney-Line-Art?',
	tool_sketch_prompt_generator_faq_q5: 'Warum Turnstile für optionale KI?',
	tool_sketch_prompt_generator_faq_q6: 'Kann ich JSON erhalten?',
	tool_sketch_prompt_generator_faq_q7: 'Nutzbar mit ChatGPT, Gemini, Claude oder DeepSeek?',
	tool_sketch_prompt_generator_faq_q8: 'Unterschied zwischen lokal und optionaler Cloudflare-KI?',
	tool_sketch_prompt_generator_ai_expand: 'Mit KI erweitern',
	tool_sketch_prompt_generator_ai_polish: 'Mit KI glätten',
	tool_sketch_prompt_generator_ai_panel_label: 'Optionale Cloudflare-KI (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title: 'Text an Cloudflare Workers AI senden?',
	tool_sketch_prompt_generator_ai_consent_body:
		'Dieser optionale Schritt sendet den Entwurf an Cloudflare Workers AI. Nicht an OpenAI, Google, Anthropic oder DeepSeek von unseren Servern. Lokaler Zusammenbau funktioniert ohne KI.',
	tool_sketch_prompt_generator_ai_consent_ok: 'Weiter',
	tool_sketch_prompt_generator_ai_consent_cancel: 'Abbrechen',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI arbeitet…',
	tool_sketch_prompt_generator_ai_done: 'Der KI-Text steht vollständig im Ausgabefeld. Vor dem Kopieren prüfen.',
	tool_sketch_prompt_generator_ai_err_generic: 'KI fehlgeschlagen. Lokaler Prompt unverändert.',
	tool_sketch_prompt_generator_ai_err_rate: 'KI-Kontingent erreicht. Lokal nutzen oder morgen (UTC) erneut versuchen.',
	tool_sketch_prompt_generator_ai_err_turnstile: 'Turnstile vor KI-Nutzung abschließen.',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: 'Ausgabeformat',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: 'Ziel / Liefergegenstand',
	tool_sketch_prompt_generator_goal_ph: 'z. B. Login-Screen in Sketch.app…',
	tool_sketch_prompt_generator_artboard_label: 'Artboards / Seiten',
	tool_sketch_prompt_generator_artboard_ph: 'z. B. iPhone 14 390×844, Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'Symbols / Styles / Libraries',
	tool_sketch_prompt_generator_symbols_ph: 'z. B. Button/Primary, Shared Styles…',
	tool_sketch_prompt_generator_export_label: 'Export / Übergabe',
	tool_sketch_prompt_generator_export_ph: 'z. B. 1x/2x/3x PNG, PDF-Review…',
	tool_sketch_prompt_generator_how_body:
		'Sketch.app-Felder ausfüllen, Prompt lokal bauen, optional Expand/Polish mit Turnstile, dann in den Chat einfügen, damit die KI Sketch.app-Schritte führt.',
	tool_sketch_prompt_generator_how_item_1: 'Beim Öffnen lief bereits das Login-Screen-Beispiel für Sketch.app.',
	tool_sketch_prompt_generator_how_item_2: 'Ziel, Artboards, Symbols und Export bearbeiten, Prompt erstellen oder JSON wählen.',
	tool_sketch_prompt_generator_how_item_3: 'Optional: Turnstile, dann Erweitern oder Glätten mit Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4: 'Kopieren oder laden, in den Chat einfügen und der Sketch.app-Checkliste folgen.',
	tool_sketch_prompt_generator_how_title: 'So funktioniert es',
	tool_sketch_prompt_generator_load_sample: 'Beispiel laden',
	tool_sketch_prompt_generator_platforms_lead:
		'Für ChatGPT, Gemini, Claude und DeepSeek — Prompt kopieren, damit der Chat Sie durch die Sketch.app-Bedienung führt.',
	tool_sketch_prompt_generator_result_label: 'Prompt-Ausgabe',
	tool_sketch_prompt_generator_rules_body:
		'Felder bilden Sketch.app-Arbeit ab. Lokal ist Standard; optionale KI braucht Turnstile und hat Limit. Diese Seite startet Sketch.app nicht.',
	tool_sketch_prompt_generator_rules_item_1: 'Strukturierte Felder werden zu Role/Task/Constraints/Output in Markdown.',
	tool_sketch_prompt_generator_rules_item_2: 'Standard ist Markdown; JSON auf derselben Fläche.',
	tool_sketch_prompt_generator_rules_item_3: 'Optionale Cloudflare-KI ersetzt Lokalmodus nicht — vor dem Kopieren prüfen.',
	tool_sketch_prompt_generator_rules_item_4:
		'Nur Textzusammenbau; kein lokales Ausführen von Sketch.app, Plugins, Midjourney oder Chat-APIs.',
	tool_sketch_prompt_generator_rules_title: 'Erwartete Regeln',
	tool_sketch_prompt_generator_sec_constraints: 'Einschränkungen',
	tool_sketch_prompt_generator_sec_output: 'Ausgabeformat',
	tool_sketch_prompt_generator_sec_role: 'Rolle',
	tool_sketch_prompt_generator_sec_task: 'Aufgabe',
	tool_sketch_prompt_generator_status_copied: 'In die Zwischenablage kopiert.',
	tool_sketch_prompt_generator_status_done: 'Prompt bereit.',
	tool_sketch_prompt_generator_status_working: 'Prompt wird erstellt…',
	tool_sketch_prompt_generator_title: 'Sketch.app-Prompt-Generator — Lokal + optionale KI',
	tool_sketch_prompt_generator_usecase_1:
		'Artboard-Größen und Symbolnamen an die Team-Chat-KI geben, um Screens in Sketch.app nachzubauen.',
	tool_sketch_prompt_generator_usecase_2: 'Export-Checklisten (PNG, PDF) vor Design-QA entwerfen.',
	tool_sketch_prompt_generator_usecase_3:
		'Mit Product design prompt builder vergleichen, wenn Persona/Wireframe statt Sketch.app-Menüs gebraucht werden.',
	tool_sketch_prompt_generator_usecase_4: 'Sensible Entwürfe lokal halten — KI nur nach Zustimmung.',
	tool_sketch_prompt_generator_usecases_title: 'Gute Passungen',
};

export default de;
