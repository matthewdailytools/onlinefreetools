/**
 * i18n tool shard (image-merge / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_image_merge_article: 'Lokales Multi-Bild-Collage mit Layout, Abstand, Hintergrund, Raster-Fit, Format und Größen-Presets.',
  tool_image_merge_bg_label: 'Hintergrund',
  tool_image_merge_choose_files: 'Bilder hinzufügen',
  tool_image_merge_clear: 'Löschen',
  tool_image_merge_cols_label: 'Spalten',
  tool_image_merge_description:
    'Kombinieren Sie Fotos zu einer Collage oder einem zusammengefügten Bild im Browser. Schritte: Bilder hinzufügen, Layout horizontal/vertikal/Raster wählen, Abstand & Hintergrund setzen, zusammenfügen, JPEG/WebP/PNG laden. Beispiel: drei Sample-Blöcke in einer Reihe, weißer Hintergrund, 8 px Abstand → ein WebP — Dateien verlassen Ihr Gerät nicht; optionale Größen-Presets für übliche Posts.',
  tool_image_merge_download: 'Download',
  tool_image_merge_drop_hint: 'Oder zwei oder mehr JPEG, PNG oder WebP hier ablegen. Zusammenfügen bleibt in diesem Tab.',
  tool_image_merge_empty: 'Zuerst mindestens ein Bild hinzufügen.',
  tool_image_merge_err_decode: 'Der Browser konnte eine Datei nicht dekodieren. JPEG, PNG oder WebP versuchen.',
  tool_image_merge_err_encode: 'Export fehlgeschlagen. Kleineres Layout oder anderes Format versuchen.',
  tool_image_merge_example:
    'Dreifarben-Sample laden, Horizontal, Abstand 8 px, weißer Hintergrund, WebP 0,90, Preset Keins, zusammenfügen. Ergebnis: Streifen ~728×180 px. Raster mit 3 Spalten für eine Reihe gleicher Zellen.',
  tool_image_merge_example_title: 'Beispiel',
  tool_image_merge_faq_a1: 'Nein. Dekodieren, Layout und Export laufen im Browser. Network-Tab — kein POST der Bilder.',
  tool_image_merge_faq_a2:
    'Horizontal vereinheitlicht die Höhe und wächst in der Breite; vertikal die Breite und in der Höhe. Raster nutzt feste Zellen mit Einpassen oder Füllen.',
  tool_image_merge_faq_a3:
    'Nein. Nur übliche Ausgabegrößen. Plattformregeln ändern sich — prüfen Sie die App, in der Sie posten.',
  tool_image_merge_faq_a4: 'Nur der erste Frame wird dekodiert und gezeichnet. Animation geht in der Ausgabe verloren.',
  tool_image_merge_faq_a5:
    'Kanten über ~8192 px oder zu viele Megapixel können den Browser-Speicher sprengen. Weniger Bilder, Raster-Spalten oder vorher zuschneiden.',
  tool_image_merge_faq_q1: 'Werden meine Fotos hochgeladen?',
  tool_image_merge_faq_q2: 'Unterschied horizontal vs. vertikal?',
  tool_image_merge_faq_q3: 'Garantieren 1080- oder 1200-Presets Instagram/Facebook-Freigabe?',
  tool_image_merge_faq_q4: 'Was passiert mit animierten GIFs?',
  tool_image_merge_faq_q5: 'Warum scheitert ein riesiges Collage?',
  tool_image_merge_fit_contain: 'Einpassen',
  tool_image_merge_fit_cover: 'Füllen',
  tool_image_merge_fit_label: 'Zellen-Fit',
  tool_image_merge_format_jpeg: 'JPEG',
  tool_image_merge_format_label: 'Ausgabeformat',
  tool_image_merge_format_png: 'PNG',
  tool_image_merge_format_webp: 'WebP',
  tool_image_merge_gap_label: 'Abstand (px)',
  tool_image_merge_how_body:
    'Zwei oder mehr Bilder hinzufügen, bei Bedarf sortieren, Layout, Abstand und Hintergrund wählen, dann zusammenfügen. Die Seite baut lokal eine Canvas, zeichnet jedes Foto der Reihe nach, skaliert optional auf übliche Quadrat- oder Link-Vorschau-Größen, und lässt Sie laden — ohne Upload.',
  tool_image_merge_how_title: 'So funktioniert es',
  tool_image_merge_layout_grid: 'Raster',
  tool_image_merge_layout_horizontal: 'Horizontal',
  tool_image_merge_layout_label: 'Layout',
  tool_image_merge_layout_vertical: 'Vertikal',
  tool_image_merge_merge: 'Zusammenfügen',
  tool_image_merge_move_down: 'Nach unten',
  tool_image_merge_move_up: 'Nach oben',
  tool_image_merge_need_two: 'Mindestens zwei Bilder zum Zusammenfügen nötig.',
  tool_image_merge_preset_fb: '1200×630 (übliche Link-Vorschau)',
  tool_image_merge_preset_ig: '1080×1080 (übliches Quadrat)',
  tool_image_merge_preset_label: 'Größen-Preset',
  tool_image_merge_preset_none: 'Keins',
  tool_image_merge_preview_label: 'Vorschau',
  tool_image_merge_quality_label: 'Qualität',
  tool_image_merge_remove: 'Entfernen',
  tool_image_merge_rules_body:
    'Die Canvas-Größe folgt den Formeln unten. Im Raster teilen Zellen Breite und Höhe; Einpassen lässt Ränder, Füllen schneidet zu.',
  tool_image_merge_rules_item_1:
    'Horizontal: Höhe = max der Quellen; jedes Bild auf diese Höhe skaliert; Breite = Summe skalierten Breiten + (n−1)×Abstand.',
  tool_image_merge_rules_item_2:
    'Vertikal: Breite = max der Quellen; jedes Bild auf diese Breite skaliert; Höhe = Summe skalierten Höhen + (n−1)×Abstand.',
  tool_image_merge_rules_item_3:
    'Raster: 2–4 Spalten; Zeilen = ceil(n/Spalten); Zelle = max Breite × max Höhe; Abstand zwischen Zellen; Einpassen oder Füllen in jeder Zelle.',
  tool_image_merge_rules_item_4:
    'Presets skalieren das fertige Collage in 1080×1080 oder 1200×630 mit Ihrem Hintergrund (übliche Größen, keine Plattform-Freigabe). Hintergrund wird vor dem Zeichnen gefüllt.',
  tool_image_merge_rules_title: 'Layout-Regeln',
  tool_image_merge_sample: 'Beispiel laden',
  tool_image_merge_stats_tpl: '{w}×{h} · {mime} · {bytes}',
  tool_image_merge_status_done: 'Fertig — Vorschau unten; Download zum Speichern.',
  tool_image_merge_status_merging: 'Bilder werden zusammengefügt…',
  tool_image_merge_title: 'Bilder zusammenfügen — Fotos zu einer Collage',
  tool_image_merge_usecase_1: 'Vorher/Nachher: zwei Fotos nebeneinander für Reviews oder Fitness-Fortschritt.',
  tool_image_merge_usecase_2: 'Tutorial-Schritte: Screenshots vertikal zu einem langen Bild stapeln.',
  tool_image_merge_usecase_3: 'Produktwinkel oder Storyboard: 3×3-Raster, dann komprimieren wenn die Datei schwer ist.',
  tool_image_merge_usecases_title: 'Gute Einsätze',
  tool_image_merge_warn_animation: 'Animiertes GIF: nur der erste Frame wird zusammengefügt.',
  tool_image_merge_warn_edge: 'Canvas-Kante über ~8192 px — manche Browser scheitern oder laufen aus Speicher.',
  tool_image_merge_warn_large: 'Große Datei (>25 MB) — Dekodierung kann langsam sein.',
};
export default de;
