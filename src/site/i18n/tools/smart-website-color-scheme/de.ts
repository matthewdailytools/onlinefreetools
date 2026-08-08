/**
 * i18n tool shard (smart-website-color-scheme / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'Unter AA',
  tool_smart_website_color_scheme_aa_pass: 'AA ok',
  tool_smart_website_color_scheme_add_theme: 'Theme hinzufügen',
  tool_smart_website_color_scheme_article:
    'Aus einer Markenfarbe entsteht ein Website-Farbschema: gemeinsame Neutrals, semantische Tokens (neutrale Links, feste Statusfarben), helles Chrome-Preview, Kontrast-Selbstchecks und kopierbares :root-CSS — alles lokal im Browser.',
  tool_smart_website_color_scheme_bad_hex: 'Gültiges 3- oder 6-stelliges HEX eingeben (z. B. #0F6E8C).',
  tool_smart_website_color_scheme_bad_id:
    'Theme-ID muss eindeutig sein, 1–32 Zeichen: Buchstaben, Ziffern, - oder _.',
  tool_smart_website_color_scheme_check_muted: 'Nebentext auf Fläche',
  tool_smart_website_color_scheme_check_on_action: 'Text auf Action (on-action)',
  tool_smart_website_color_scheme_check_text: 'Fließtext auf Fläche',
  tool_smart_website_color_scheme_checks_label: 'Kontrast-Selbstcheck (aktives Theme)',
  tool_smart_website_color_scheme_clear: 'Leeren',
  tool_smart_website_color_scheme_col_role: 'Rolle',
  tool_smart_website_color_scheme_col_token: 'Token',
  tool_smart_website_color_scheme_col_value: 'Wert',
  tool_smart_website_color_scheme_copy_css: 'CSS kopieren',
  tool_smart_website_color_scheme_copy_done: 'Kopiert',
  tool_smart_website_color_scheme_copy_json: 'JSON kopieren',
  tool_smart_website_color_scheme_cp_brand: 'Marke',
  tool_smart_website_color_scheme_cp_btn: 'Outline-Button',
  tool_smart_website_color_scheme_cp_card_body:
    'Kartentext nutzt gedämpfte Farbe. Links bleiben neutral — nicht die Marken-Action-Farbe.',
  tool_smart_website_color_scheme_cp_card_title: 'Kartentitel',
  tool_smart_website_color_scheme_cp_err: 'Fehlermeldung nutzt danger, nicht die Marke.',
  tool_smart_website_color_scheme_cp_link: 'Verwandter Link',
  tool_smart_website_color_scheme_cp_nav: 'Nav-Eintrag',
  tool_smart_website_color_scheme_cp_side1: 'Seitenleiste',
  tool_smart_website_color_scheme_cp_side2: 'Aktiv',
  tool_smart_website_color_scheme_desc:
    'Website-Schema: Neutrals + semantische CSS-Tokens, neutrale Links, feste Statusfarben — lokal.',
  tool_smart_website_color_scheme_description:
    'Erzeugen Sie ein Website-Farbschema im Browser. Wählen Sie ein Marken-HEX (Beispiel-Teal #0F6E8C), erhalten Sie gemeinsame Neutrals, action/hover/soft/focus, neutrale Links, feste Statusfarben, Chrome-Preview und AA-Selbstchecks; danach :root-CSS oder JSON kopieren. Regelbasiert — keine Cloud-KI; nichts wird hochgeladen.',
  tool_smart_website_color_scheme_empty: 'Zuerst ein Schema erzeugen, dann CSS oder JSON kopieren.',
  tool_smart_website_color_scheme_example:
    'Beispiel laden (Theme-ID teal, #0F6E8C). Preview zeigt weiße Fläche, weiches teal-Highlight am aktiven Sidebar-Eintrag (ohne linken Balken), neutrale Text-Links und eine rote Danger-Zeile. Semantik mappt --link auf Textfarbe (nicht --action). CSS-Kopie liefert :root-Neutrals plus html[data-theme="teal"]-Overrides.',
  tool_smart_website_color_scheme_example_title: 'Beispiel',
  tool_smart_website_color_scheme_faq_a1:
    '„Smart“ heißt hier deterministische Regeln: Neutrals bleiben fest, die Marke leitet action/hover/soft/focus ab, Links bleiben neutral, Statusfarben folgen nicht der Marke. Kein Modellaufruf, kein Upload — die Rechnung läuft in diesem Tab.',
  tool_smart_website_color_scheme_faq_a2:
    'Standard-Links nutzen Textfarben, damit die Seite keine Marken-Hyperlink-Wand wird. Die Markenfarbe bleibt für Aktionen, Auswahl, Fokusringe und leichte Soft-Füllungen.',
  tool_smart_website_color_scheme_faq_a3:
    'Danger, Success, Warning und Info bleiben themenübergreifend fest. Eine bernsteinfarbene Marke darf nicht zur Fehlerfarbe werden — sonst wirkt die ganze UI wie ein Alarm.',
  tool_smart_website_color_scheme_faq_a4:
    'Nutzen Sie Markenfarben-Skala erzeugen für eine 50–950-Rampe oder HEX/HSL/OKLCH-Listen. Diese Seite liefert ein vollständiges helles semantisches Schema (bg/surface/link/action/status) zum Einfügen.',
  tool_smart_website_color_scheme_faq_a5:
    'Selbstchecks decken einige Schlüsselpaare des aktiven Themes ab. Für beliebige Vorder-/Hintergrundpaare oder AAA öffnen Sie den WCAG-Kontrastprüfer und fügen Sie ein Token-HEX ein.',
  tool_smart_website_color_scheme_faq_q1: 'Ist „smart“ dasselbe wie KI-Farbgenerierung?',
  tool_smart_website_color_scheme_faq_q2: 'Warum sind Links nicht in der Markenfarbe?',
  tool_smart_website_color_scheme_faq_q3: 'Warum ändern sich Statusfarben nicht mit dem Theme?',
  tool_smart_website_color_scheme_faq_q4: 'Wann Markenfarben-Skala erzeugen statt dieser Seite?',
  tool_smart_website_color_scheme_faq_q5: 'Wie vollständig ist der Kontrast-Selbstcheck?',
  tool_smart_website_color_scheme_generate: 'Erzeugen',
  tool_smart_website_color_scheme_how_body:
    'Geben Sie bis zu vier Marken-Themes an (ID + HEX). Das Tool hält eine gemeinsame Neutral-Leiter, leitet Action-Tokens aus jeder Marke ab, mappt semantische Rollen (inkl. neutrale Links und feste Statusfarben), malt ein helles Chrome, führt AA-Selbstchecks aus und lässt CSS-Variablen oder JSON kopieren — alles lokal.',
  tool_smart_website_color_scheme_how_title: 'So funktioniert’s',
  tool_smart_website_color_scheme_max_themes: 'Bis zu 4 Themes mit denselben Neutrals möglich.',
  tool_smart_website_color_scheme_preview_label: 'Helles UI-Preview',
  tool_smart_website_color_scheme_primitives_label: 'Primitives (aktives Theme + gemeinsame Neutrals)',
  tool_smart_website_color_scheme_remove_theme: 'Entfernen',
  tool_smart_website_color_scheme_role_action: 'Action / Markenakzent',
  tool_smart_website_color_scheme_role_bg: 'Seiten-/Abschnitts-Hintergrund',
  tool_smart_website_color_scheme_role_border: 'Rahmen & Trenner',
  tool_smart_website_color_scheme_role_focus: 'Fokusring',
  tool_smart_website_color_scheme_role_link: 'Standard-Links (neutral)',
  tool_smart_website_color_scheme_role_muted: 'Nebentext',
  tool_smart_website_color_scheme_role_on_action: 'Text auf solider Action',
  tool_smart_website_color_scheme_role_status: 'Status (von Marke entkoppelt)',
  tool_smart_website_color_scheme_role_surface: 'Erhöhte Fläche / Karten',
  tool_smart_website_color_scheme_role_text: 'Fließ-/Betonungstext',
  tool_smart_website_color_scheme_rules_body:
    'Token-Schichten, Link ≠ Action, unabhängige Statusfarben, Kontrast-Hinweise und Datenschutz.',
  tool_smart_website_color_scheme_rules_item_1:
    'Primitives halten rohe Neutrals und Markenableitungen. Semantik benennt den Zweck (bg, surface, link, action…). Komponenten sollten nur Semantik referenzieren.',
  tool_smart_website_color_scheme_rules_item_2:
    'Marke → --action; Hover verdunkelt ~22 %; Soft ≈ 10 % Alpha; Focus-Ring ≈ 40 % Alpha; --bg ist ein leicht getöntes Neutral.',
  tool_smart_website_color_scheme_rules_item_3:
    'Links mappen auf text / text-strong (neutral). Standard --link nicht an --action binden.',
  tool_smart_website_color_scheme_rules_item_4:
    'Danger / Success / Warning / Info bleiben themenübergreifend fest, damit die Marke nie die Fehler-Semantik ersetzt.',
  tool_smart_website_color_scheme_rules_item_5:
    'Datenschutz: Erzeugung, Preview und Zwischenablage laufen in diesem Tab. Markenfarben werden nicht hochgeladen.',
  tool_smart_website_color_scheme_rules_title: 'Erwartbare Regeln',
  tool_smart_website_color_scheme_sample: 'Beispiel laden',
  tool_smart_website_color_scheme_semantics_label: 'Semantik (aktives Theme)',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'Theme-ID',
  tool_smart_website_color_scheme_themes_hint:
    'Gemeinsame Neutrals und Statusfarben; jedes Theme überschreibt nur markenabgeleitete Tokens. Max. 4 Themes.',
  tool_smart_website_color_scheme_themes_label: 'Marken-Themes',
  tool_smart_website_color_scheme_title: 'Website-Farbschema — semantische CSS-Tokens',
  tool_smart_website_color_scheme_usecase_1:
    'Tool- oder SaaS-Chrome: lesbare helle Hülle mit Markenakzenten auf Auswahl und Fokus — nicht auf jedem Link.',
  tool_smart_website_color_scheme_usecase_2:
    'Landing-Rebrand: Marken über html[data-theme] tauschen, Neutral-Skelett und Statusfarben behalten.',
  tool_smart_website_color_scheme_usecase_3:
    'Design-zu-Dev-Übergabe: :root-CSS-Variablen einfügen statt HEX-Listen aus Screenshots.',
  tool_smart_website_color_scheme_usecases_title: 'Gut geeignet für',
  tool_smart_website_color_scheme_warn_contrast:
    'Warnung: Text auf der Action-Farbe liegt unter 4,5:1 — Marke verdunkeln oder --on-action anpassen, bevor solide Buttons live gehen.',
};
export default de;
