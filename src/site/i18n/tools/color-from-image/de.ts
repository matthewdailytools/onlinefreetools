/**
 * i18n tool shard (color-from-image / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_color_from_image_article: 'Lokale Dominantfarben-Palette plus Regionalmittel per Klick, mit kopierbaren HEX/RGB/HSL.',
  tool_color_from_image_choose_file: 'Bild wählen',
  tool_color_from_image_clear: 'Löschen',
  tool_color_from_image_copied: 'Kopiert',
  tool_color_from_image_copy: 'HEX kopieren',
  tool_color_from_image_count_label: 'Farben',
  tool_color_from_image_description:
    'Dominante Farben und eine vollständige Palette aus jedem Foto — oder per Klick-Pipette eine Region sampeln. Schritte: Bild wählen, Farbanzahl (2–12) setzen, extrahieren, HEX/RGB/HSL kopieren, oder in die Vorschau klicken für einen lokalen Mittelwert. Beispiel: sechs Töne aus einem Markenfoto, dann Klick aufs Logo für einen Akzent — Datei bleibt auf dem Gerät.',
  tool_color_from_image_drop_hint: 'Oder JPEG, PNG oder WebP hier ablegen. Extraktion bleibt in diesem Tab.',
  tool_color_from_image_empty: 'Zuerst ein Bild wählen.',
  tool_color_from_image_err_decode: 'Dieser Browser konnte die Datei nicht dekodieren. Versuchen Sie JPEG, PNG oder WebP.',
  tool_color_from_image_err_no_pixels: 'Keine undurchsichtigen Pixel zum Sampeln — das Bild ist evtl. vollständig transparent.',
  tool_color_from_image_example:
    'Vier-Block-Beispiel laden, Farben bei 6 lassen und extrahieren — Teal, Amber, Grün, Creme und Rot sollten sichtbar sein. Dann den roten Kreis anklicken: Die Aufnahme-Karte zeigt ein rotes HEX aus dem ~7×7-Mittel um den Punkt, bereit zum Kopieren.',
  tool_color_from_image_example_title: 'Beispiel',
  tool_color_from_image_extract: 'Extrahieren',
  tool_color_from_image_faq_a1:
    'Nein. Palettenrechnung und Klick-Sampling laufen lokal. Network-Tab prüfen — das Bild wird nicht per POST gesendet.',
  tool_color_from_image_faq_a2:
    'Die Seite verkleinert das Bild, verwirft niedrig-alpha Pixel, teilt den Farbraum mit Median-Cut, mittelt jede Gruppe und sortiert nach Stichprobenzahl.',
  tool_color_from_image_faq_a3:
    'Das Tool mappt den Klick auf Quellpixel und mittelt undurchsichtige Farben in einem kleinen Quadrat (~7×7). Sie erhalten HEX/RGB/HSL für diese Region, getrennt von der Palettenliste.',
  tool_color_from_image_faq_a4:
    'Fotos und UI-Shots sind bei 1×1 verrauscht. Ein kleiner Regionsmittelwert ist stabiler für CSS-Akzente und folgt trotzdem dem Klickpunkt.',
  tool_color_from_image_faq_a5: 'Nur das erste Frame wird gezeichnet, für die Palette genutzt und steht für Klick-Aufnahme bereit.',
  tool_color_from_image_faq_q1: 'Verlässt mein Bild den Browser?',
  tool_color_from_image_faq_q2: 'Wie werden die Hauptfarben gewählt?',
  tool_color_from_image_faq_q3: 'Was passiert, wenn ich ins Bild klicke?',
  tool_color_from_image_faq_q4: 'Warum ist ein Klick kein einzelnes Pixel?',
  tool_color_from_image_faq_q5: 'Werden animierte GIFs vollständig analysiert?',
  tool_color_from_image_how_body:
    'Foto wählen und Palette extrahieren: Die Seite verkleinert eine Arbeitskopie (lange Kante ~256 px), überspringt fast transparente Pixel, gruppiert Farben und sortiert nach Häufigkeit. Separat klicken Sie die Vorschau, um ein kleines Quadrat um den Punkt in voller Auflösung zu mitteln und HEX, RGB oder HSL zu kopieren — nichts wird hochgeladen.',
  tool_color_from_image_how_title: 'So funktioniert es',
  tool_color_from_image_palette_label: 'Palette',
  tool_color_from_image_pct_tpl: '{pct} % der Stichproben',
  tool_color_from_image_pick_hint: 'Klicken Sie ins Bild, um eine kleine Region um den Punkt zu mitteln (etwa 7×7 Quellpixel).',
  tool_color_from_image_pick_label: 'Aufgenommene Farbe',
  tool_color_from_image_pick_transparent: 'An dieser Stelle gibt es keine undurchsichtigen Pixel — woanders klicken.',
  tool_color_from_image_pick_xy_tpl: 'Um ({x}, {y}) · Mittel {size}×{size}',
  tool_color_from_image_preview_label: 'Quelle — Klick zum Aufnehmen',
  tool_color_from_image_rules_body:
    'Palettenextraktion und Klick-Aufnahme teilen ein Bild, beantworten aber verschiedene Fragen. Nutzen Sie die Liste, wenn eine Farbe unerwartet wirkt.',
  tool_color_from_image_rules_item_1:
    'Paletten-Sampling nutzt ein verkleinertes Bitmap (max. Kante ~256 px), damit große Fotos flott bleiben. Feindetails können in benachbarte Farbtöne verschmelzen.',
  tool_color_from_image_rules_item_2:
    'Pixel mit Alpha unter 128 werden für Palette und Klick-Mittelwerte ignoriert. Vollständig transparente Stellen zeigen eine klare Meldung.',
  tool_color_from_image_rules_item_3:
    'Sie fordern 2–12 Palettenfarben; bei flachen Bildern kann es weniger sein. Farben nach Stichprobenanteil sortiert.',
  tool_color_from_image_rules_item_4:
    'Klick mittelt undurchsichtige Pixel in einem ~7×7-Fenster um den Klick in Quellkoordinaten (nicht nur die verkleinerte Vorschau). Regionsprobe, keine Lab-Ein-Pixel-Pipette.',
  tool_color_from_image_rules_item_5: 'Datenschutz: Dekodierung, Palettenrechnung und Klick-Sampling laufen lokal in diesem Tab.',
  tool_color_from_image_rules_title: 'Was Sie erwarten sollten',
  tool_color_from_image_sample: 'Beispiel laden',
  tool_color_from_image_status_done: 'Fertig — Swatch kopieren oder ins Bild klicken, um eine Region aufzunehmen.',
  tool_color_from_image_status_extracting: 'Palette wird extrahiert…',
  tool_color_from_image_status_picked: 'Aufgenommen — HEX/RGB/HSL anklicken zum Kopieren.',
  tool_color_from_image_title: 'Farben aus Bild — Palette & Klick-Pipette',
  tool_color_from_image_usecase_1: 'Markenfotos: Palette ziehen, dann Logo oder Button anklicken für einen konkreten Akzent.',
  tool_color_from_image_usecase_2: 'UI-Screenshots: Interface-Palette prüfen, dann Chip oder Icon anklicken für die exakte Regionsfarbe.',
  tool_color_from_image_usecase_3: 'Verlaufsideen: zwei Akzente aus Palette oder per Klick, dann Verlaufsrechner öffnen.',
  tool_color_from_image_usecases_title: 'Gute Einsätze',
  tool_color_from_image_warn_animation: 'Animierte Dateien: nur das erste Frame wird gesampelt.',
  tool_color_from_image_warn_large: 'Große Datei (>25 MB) — Sampling kann langsam sein.',
};
export default de;
