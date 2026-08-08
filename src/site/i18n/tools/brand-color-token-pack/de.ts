/**
 * i18n tool shard (brand-color-token-pack / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'Eine Marken-Basisfarbe wird zum vollständigen Token-Paket: HEX, RGB, HSL, OKLCH, Skala 50–950, Schwarz/Weiß-Textpaare pro Stufe und kopierbare CSS-Variablen oder JSON — alles im Browser.',
  tool_brand_color_token_pack_bad_hex: 'Gültigen 3- oder 6-stelligen HEX eingeben (z. B. #2563EB).',
  tool_brand_color_token_pack_base_label: 'Basisfarbe',
  tool_brand_color_token_pack_clear: 'Leeren',
  tool_brand_color_token_pack_contrast_col: 'Text',
  tool_brand_color_token_pack_copy_css: 'CSS kopieren',
  tool_brand_color_token_pack_copy_done: 'Kopiert',
  tool_brand_color_token_pack_copy_json: 'JSON kopieren',
  tool_brand_color_token_pack_desc:
    'Eine Basis → HEX/RGB/HSL/OKLCH, Skala 50–950, Kontrastpaare, CSS-Variablen — lokal.',
  tool_brand_color_token_pack_description:
    'Erstellen Sie ein Markenfarben-Token-Pack aus einer Basisfarbe im Browser. Schritte: Basis wählen (HEX oder Farbwähler), HEX/RGB/HSL/OKLCH ansehen, Skala 50–950 mit Schwarz/Weiß-Textpaaren pro Stufe erzeugen, dann CSS-Variablen oder JSON kopieren. Beim Öffnen lädt Beispielblau #2563eb — nichts wird hochgeladen.',
  tool_brand_color_token_pack_empty: 'Zuerst Tokens erzeugen, dann CSS oder JSON kopieren.',
  tool_brand_color_token_pack_example:
    'Beispiel laden (#2563EB). Der Farbraum-Block zeigt HEX, RGB, HSL und OKLCH der Basis; das Raster listet 50–950 mit empfohlenem Schwarz- oder Weißtext und Kontrastverhältnis. CSS kopieren liefert :root { --color-50: …; … --color-950: …; } für Ihr Stylesheet.',
  tool_brand_color_token_pack_example_title: 'Beispiel',
  tool_brand_color_token_pack_faq_a1:
    'Nein. Berechnung und Export laufen in diesem Tab — Ihre Farben gehen nicht an einen Server.',
  tool_brand_color_token_pack_faq_a2:
    'Stufe 500 entspricht Ihrer Basisfarbe. Hellere Stufen (50–400) mischen Richtung Weiß; dunklere (600–950) Richtung Schwarz. Die Mischung ist linear in sRGB, damit der Farbton stabil bleibt.',
  tool_brand_color_token_pack_faq_a3:
    'Jede Farbkarte vergleicht Schwarz- und Weißtext auf diesem Hintergrund und wählt das höhere WCAG-Kontrastverhältnis. Labels zeigen das Verhältnis und ob Normaltext vermutlich AA (4,5:1) oder großer Text AA (3:1) erreicht.',
  tool_brand_color_token_pack_faq_a4:
    'CSS kopieren gibt :root-Eigenschaften (--color-50 bis --color-950). JSON kopieren liefert dieselbe Skala plus Basis-Farbräume als strukturierte Daten für Design Tokens.',
  tool_brand_color_token_pack_faq_a5:
    'Das sind schnelle Schwarz/Weiß-Vorschläge pro Stufe. Für eigene Vorder-/Hintergrundpaare oder exakte WCAG-Stufen öffnen Sie den WCAG-Kontrastchecker und fügen den HEX einer Karte ein.',
  tool_brand_color_token_pack_faq_q1: 'Verlässt meine Farbe den Browser?',
  tool_brand_color_token_pack_faq_q2: 'Wie entsteht die Skala 50–950?',
  tool_brand_color_token_pack_faq_q3: 'Was bedeuten die Kontrastspalten?',
  tool_brand_color_token_pack_faq_q4: 'Was enthalten CSS kopieren und JSON kopieren?',
  tool_brand_color_token_pack_faq_q5: 'Wann den Kontrastchecker nutzen?',
  tool_brand_color_token_pack_generate: 'Erzeugen',
  tool_brand_color_token_pack_how_body:
    'Geben Sie eine Marken-Basisfarbe ein oder wählen Sie sie. Die Seite zeigt HEX, RGB, HSL und OKLCH, baut eine 11-stufige Skala (50–950) mit UI-Vorschau und empfiehlt pro Karte Schwarz- oder Weißtext mit Kontrastverhältnis. CSS-Variablen oder JSON kopieren, wenn die Rampe passt — alles lokal.',
  tool_brand_color_token_pack_how_title: 'So funktioniert es',
  tool_brand_color_token_pack_preview_label: 'UI-Vorschau',
  tool_brand_color_token_pack_rules_body:
    'Was Sie von Skala, Farbräumen, Kontrast-Hinweisen und Datenschutz erwarten können.',
  tool_brand_color_token_pack_rules_item_1:
    'Stufe 500 ist Ihre Basis. Darunter wird durch Mischung mit Weiß aufgehellt; darüber durch Mischung mit Schwarz abgedunkelt (lineare sRGB-Mischung).',
  tool_brand_color_token_pack_rules_item_2:
    'Der Basis-Block listet HEX, RGB, HSL und OKLCH derselben Farbe. OKLCH nutzt sRGB → linear → OKLab für Vergleich mit moderner CSS-Syntax.',
  tool_brand_color_token_pack_rules_item_3:
    'Jede Karte empfiehlt Schwarz- oder Weißtext — je nachdem, was auf diesem Hintergrund mehr Kontrast bietet. Verhältnisse folgen WCAG-Relativhelligkeit; AA-Labels sind Hinweise.',
  tool_brand_color_token_pack_rules_item_4:
    'Datenschutz: Erzeugung, Vorschau und Kopieren laufen lokal in diesem Tab — Markenfarben werden nicht hochgeladen.',
  tool_brand_color_token_pack_rules_title: 'Regeln, die Sie kennen sollten',
  tool_brand_color_token_pack_sample: 'Beispiel',
  tool_brand_color_token_pack_scale_label: 'Farbskala (50–950)',
  tool_brand_color_token_pack_spaces_label: 'Farbräume (Basis)',
  tool_brand_color_token_pack_text_on: 'Text auf Basis',
  tool_brand_color_token_pack_title: 'Markenfarben-Token-Pack — HEX/HSL/OKLCH-Skala',
  tool_brand_color_token_pack_ui_body: 'Vorschau-Text auf Ihrer Basisfarbe mit empfohlener Textfarbe.',
  tool_brand_color_token_pack_ui_btn: 'Hauptaktion',
  tool_brand_color_token_pack_ui_title: 'Vorschau-Überschrift',
  tool_brand_color_token_pack_usecase_1:
    'Design Systems: von einem Marken-HEX eine konsistente 50–950-Rampe plus CSS-Variablen für Komponenten.',
  tool_brand_color_token_pack_usecase_2:
    'Dark Mode: helle Stufen (50–300) für Flächen, tiefe (700–950) für Text auf der Markenfarbe prüfen.',
  tool_brand_color_token_pack_usecase_3:
    'Übergabe an Entwicklung: JSON-Tokens oder CSS Custom Properties statt HEX aus Screenshots abtippen.',
  tool_brand_color_token_pack_usecases_title: 'Gute Einsätze',
};
export default de;
