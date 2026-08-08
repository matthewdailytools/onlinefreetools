/**
 * i18n tool shard (wcag-contrast-checker / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA großer Text',
  tool_wcag_contrast_checker_aa_normal: 'AA normaler Text',
  tool_wcag_contrast_checker_aaa_large: 'AAA großer Text',
  tool_wcag_contrast_checker_aaa_normal: 'AAA normaler Text',
  tool_wcag_contrast_checker_article:
    'WCAG-Kontrastprüfung mit relativer Luminanz, AA/AAA-Badges, Live-Vorschau und barrierefreien Farbvorschlägen — alles lokal im Browser.',
  tool_wcag_contrast_checker_bad_hex: 'Gültige HEX-Farben eingeben (#RGB oder #RRGGBB).',
  tool_wcag_contrast_checker_bg_label: 'Hintergrund',
  tool_wcag_contrast_checker_check: 'Prüfen',
  tool_wcag_contrast_checker_clear: 'Leeren',
  tool_wcag_contrast_checker_copy: 'Zusammenfassung kopieren',
  tool_wcag_contrast_checker_copy_done: 'Kopiert',
  tool_wcag_contrast_checker_desc:
    'Kontrastverhältnis und AA/AAA-Erfüllung prüfen — Farben bleiben im Browser.',
  tool_wcag_contrast_checker_description:
    'Wählen Sie Text- und Hintergrundfarbe, um das WCAG-Kontrastverhältnis sowie AA/AAA für normalen und großen Text zu sehen. Schritte: Farbe wählen oder HEX eingeben, Prüfen klicken, Verhältnis und Badges lesen, tauschen oder Vorschläge testen. Beispiel: #767676 auf #ffffff ≈ 4,54:1 — AA normaler Text bestanden, AAA normaler Text nicht bestanden. Farben werden nicht hochgeladen.',
  tool_wcag_contrast_checker_empty: 'Zuerst prüfen, dann kopieren.',
  tool_wcag_contrast_checker_example:
    'Beispiel laden: Vordergrund #767676 auf Hintergrund #ffffff ergibt etwa 4,54:1. AA normaler Text bestanden (≥4,5:1), AA großer Text bestanden (≥3:1), AAA normaler Text nicht bestanden (≥7:1), AAA großer Text bestanden (≥4,5:1). Farben tauschen, um die Änderung des Verhältnisses zu sehen.',
  tool_wcag_contrast_checker_example_title: 'Beispiel',
  tool_wcag_contrast_checker_fail: 'Nicht bestanden',
  tool_wcag_contrast_checker_faq_a1:
    'AA normaler Text mindestens 4,5:1; AA großer Text (18 pt regular oder 14 pt fett) 3:1; AAA normaler Text 7:1; AAA großer Text 4,5:1. Diese Seite zeigt alle vier Badges auf einmal.',
  tool_wcag_contrast_checker_faq_a2:
    'Großer Text ist leichter lesbar und erlaubt weniger Kontrast. WCAG definiert groß als ≥18 pt regular oder ≥14 pt fett. Die Vorschau zeigt eine große und eine normale Zeile zum Vergleich.',
  tool_wcag_contrast_checker_faq_a3:
    'Nein. Die Berechnung läuft vollständig im Browser — Farbwerte werden nicht gesendet.',
  tool_wcag_contrast_checker_faq_a4:
    'Unter 4,5:1 kann das Tool einen helleren oder dunkleren Vorder- oder Hintergrund vorschlagen, der AA für normalen Text erreicht. Das sind Startpunkte durch Mischung mit Schwarz/Weiß, keine finalen Markenpaletten.',
  tool_wcag_contrast_checker_faq_a5:
    'Nutzen Sie diese Seite für jedes Text/Hintergrund-Paar. Für eine vollständige Markenpalette mit semantischen Tokens öffnen Sie das Brand-Color-Token-Tool; Farben aus Fotos können Sie mit dem Farbextraktions-Tool zuerst abtasten.',
  tool_wcag_contrast_checker_faq_q1: 'Welche WCAG-Kontrastschwellen gelten?',
  tool_wcag_contrast_checker_faq_q2: 'Was zählt als großer Text?',
  tool_wcag_contrast_checker_faq_q3: 'Verlassen meine Farben den Browser?',
  tool_wcag_contrast_checker_faq_q4: 'Wie nutze ich die Farbvorschläge?',
  tool_wcag_contrast_checker_faq_q5: 'Zusammenhang mit Brand-Color-Tokens?',
  tool_wcag_contrast_checker_fg_label: 'Vordergrund',
  tool_wcag_contrast_checker_how_body:
    'Legen Sie Text und Hintergrund per Farbwähler oder HEX fest. Die Seite wandelt sRGB in relative Luminanz um, berechnet das Kontrastverhältnis und zeigt Bestanden/Nicht bestanden für AA und AAA (normaler und großer Text). Tauschen, Zusammenfassung kopieren oder Vorschlag anwenden, wenn der Kontrast zu niedrig ist.',
  tool_wcag_contrast_checker_how_title: 'So funktioniert es',
  tool_wcag_contrast_checker_pass: 'Bestanden',
  tool_wcag_contrast_checker_preview_label: 'Live-Vorschau',
  tool_wcag_contrast_checker_preview_large: 'Beispiel großer Text',
  tool_wcag_contrast_checker_preview_normal: 'Beispiel normaler Text',
  tool_wcag_contrast_checker_ratio_label: 'Kontrastverhältnis',
  tool_wcag_contrast_checker_rules_body:
    'WCAG-Kontrast basiert auf relativer Luminanz — nicht allein auf dem Farbton. Diese Regeln helfen, wenn das Verhältnis überrascht.',
  tool_wcag_contrast_checker_rules_item_1:
    'Relative Luminanz L stammt aus sRGB-Kanälen nach der WCAG-Linearisierungskurve. Verhältnis = (Lhell + 0,05) / (Ldunkel + 0,05).',
  tool_wcag_contrast_checker_rules_item_2:
    'Schwellen: AA normaler Text 4,5:1, AA großer Text 3:1, AAA normaler Text 7:1, AAA großer Text 4,5:1. Ein Verhältnis speist alle vier Badges.',
  tool_wcag_contrast_checker_rules_item_3:
    'Nur undurchsichtiges sRGB-HEX (#RGB oder #RRGGBB). Ungültiges HEX zeigt einen Fehler; gleicher Vorder- und Hintergrund ergibt 1:1 und scheitert auf allen Stufen.',
  tool_wcag_contrast_checker_rules_item_4:
    'Datenschutz: Farben werden lokal in diesem Tab verarbeitet — nichts geht an den Server.',
  tool_wcag_contrast_checker_rules_title: 'Erwartete Regeln',
  tool_wcag_contrast_checker_sample: 'Beispiel',
  tool_wcag_contrast_checker_suggest_bg: 'Hintergrund {hex} mit diesem Vordergrund für AA normalen Text testen.',
  tool_wcag_contrast_checker_suggest_fg: 'Vordergrund {hex} auf diesem Hintergrund für AA normalen Text testen.',
  tool_wcag_contrast_checker_suggest_label: 'Vorschläge',
  tool_wcag_contrast_checker_suggest_none: 'Erfüllt bereits AA für normalen Text (4,5:1).',
  tool_wcag_contrast_checker_swap: 'Tauschen',
  tool_wcag_contrast_checker_title: 'WCAG-Kontrast-Checker — AA/AAA-Verhältnis',
  tool_wcag_contrast_checker_usecase_1:
    'UI-Design: Fließtext und Labels auf Markenhintergrund vor Abgabe prüfen.',
  tool_wcag_contrast_checker_usecase_2:
    'Buttons und Chips: Weiß auf Farbe oder umgekehrt für AA normal oder groß testen.',
  tool_wcag_contrast_checker_usecase_3:
    'Dark Mode: helle/dunkle Flächen tauschen und prüfen, ob Sekundärtext 4,5:1 oder 3:1 für großen Text hält.',
  tool_wcag_contrast_checker_usecases_title: 'Gute Einsatzfälle',
};
export default de;
