/**
 * i18n tool shard (image-optimizer / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_image_optimizer_article:
    'Lokaler WASM-Bildoptimierer: Codec-Wahl, Qualität/Aufwand, optionale Max-Seite, Vergleichsregler und ehrliche Hinweise zur AVIF-Dauer.',
  tool_image_optimizer_avif_slow: 'AVIF kann bei großen Fotos dauern — Abbrechen ist möglich.',
  tool_image_optimizer_cancel: 'Abbrechen',
  tool_image_optimizer_cancelled: 'Abgebrochen.',
  tool_image_optimizer_choose_file: 'Bild wählen',
  tool_image_optimizer_clear: 'Leeren',
  tool_image_optimizer_codec_avif: 'AVIF',
  tool_image_optimizer_codec_label: 'Codec / Ausgabe',
  tool_image_optimizer_codec_mozjpeg: 'MozJPEG (JPEG)',
  tool_image_optimizer_codec_oxipng: 'OxiPNG (PNG)',
  tool_image_optimizer_codec_webp: 'WebP',
  tool_image_optimizer_description:
    'Optimieren Sie Bilder fürs Web im Browser mit MozJPEG, WebP, AVIF oder OxiPNG. Schritte: Bild wählen, Engine laden, Codec und Einstellungen wählen, Vorher/Nachher per Schieberegler vergleichen, herunterladen. Beispiel: großes Hero-JPEG zu kleinerem WebP — Dateien bleiben nach dem Laden der Engine auf dem Gerät.',
  tool_image_optimizer_download: 'Herunterladen',
  tool_image_optimizer_drop_hint:
    'Oder JPEG, PNG oder WebP hier ablegen. Nach dem Laden der Engine bleibt die Optimierung in diesem Tab.',
  tool_image_optimizer_effort_label: 'Aufwand / Tempo',
  tool_image_optimizer_empty: 'Bitte zuerst ein Bild wählen.',
  tool_image_optimizer_engine_failed: 'Engine konnte nicht geladen werden. Verbindung prüfen und erneut versuchen.',
  tool_image_optimizer_engine_loading: 'Engine wird geladen…',
  tool_image_optimizer_engine_needed: 'Laden Sie die Engine, bevor Sie encodieren.',
  tool_image_optimizer_engine_ready: 'Engine bereit — Codec wählen und optimieren.',
  tool_image_optimizer_err_decode: 'Dekodieren fehlgeschlagen. Versuchen Sie JPEG, PNG oder WebP.',
  tool_image_optimizer_err_encode: 'Encoding fehlgeschlagen. Anderen Codec, weniger Aufwand oder kleineres Bild versuchen.',
  tool_image_optimizer_example:
    'Dasselbe Handy-JPEG (~3–4 MB): MozJPEG landet oft unter einem beiläufigen Browser-JPEG; WebP spart bei ähnlichem Eindruck meist weiter; AVIF kann noch kleiner werden, braucht bei großen Frames aber Sekunden. Zahlen sind Größenordnungen — vertrauen Sie dem Regler an Ihrer Datei.',
  tool_image_optimizer_example_title: 'Beispiel',
  tool_image_optimizer_faq_a1:
    'Nein. Nach dem Laden der Engine bleiben Dekodieren und Encodieren hier. In Network sehen Sie, dass das Bild nicht per POST geht.',
  tool_image_optimizer_faq_a2:
    'Codecs sind groß. Wir warten auf den Klick, damit der erste Paint leicht bleibt — Download nur bei Codec-Optimierung.',
  tool_image_optimizer_faq_a3:
    'Der Kompressor ist ein schneller Größen-/Qualitätsdurchlauf (gut für Ziel-KB). Hier laden Sie eine Engine, wählen MozJPEG, WebP, AVIF oder OxiPNG und vergleichen per Regler.',
  tool_image_optimizer_faq_a4:
    'AVIF-Encoding belastet die CPU stark, besonders bei großen Fotos. Wir zeigen Fortschritt und erlauben Abbrechen statt „sofort fertig“ vorzutäuschen.',
  tool_image_optimizer_faq_a5:
    'Wenn Sie vor allem den Typ wechseln wollen (inkl. JPEG-Hintergrund für Transparenz). Diesen Optimierer nutzen, wenn Größe und Codec-Kontrolle wichtiger sind als ein schneller Formatwechsel.',
  tool_image_optimizer_faq_a6:
    'Animationen werden zum ersten Standbild. Re-Encode entfernt EXIF meist; Tags vorher mit dem EXIF-Tool prüfen, falls nötig.',
  tool_image_optimizer_faq_q1: 'Verlassen meine Dateien den Browser?',
  tool_image_optimizer_faq_q2: 'Warum zuerst eine Engine laden?',
  tool_image_optimizer_faq_q3: 'Unterschied zum Bildkompressor?',
  tool_image_optimizer_faq_q4: 'Warum ist AVIF so langsam?',
  tool_image_optimizer_faq_q5: 'Wann den Formatkonverter?',
  tool_image_optimizer_faq_q6: 'Animation und EXIF?',
  tool_image_optimizer_how_body:
    'Bild wählen, Engine einmal laden, MozJPEG, WebP, AVIF oder OxiPNG wählen, Qualität oder Aufwand einstellen, optional die längste Seite begrenzen und per Regler vergleichen. Encoding bleibt lokal. Für schnelles Verkleinern ohne Codec-Wahl den leichten Kompressor nutzen.',
  tool_image_optimizer_how_title: 'So funktioniert’s',
  tool_image_optimizer_load_engine: 'Engine laden',
  tool_image_optimizer_max_edge_label: 'Max. Seite',
  tool_image_optimizer_optimize: 'Optimieren',
  tool_image_optimizer_optimizing: 'Optimierung läuft…',
  tool_image_optimizer_preview_after: 'Nachher',
  tool_image_optimizer_preview_before: 'Vorher',
  tool_image_optimizer_quality_label: 'Qualität',
  tool_image_optimizer_ratio_tpl: '{from} → {to} ({pct}% kleiner)',
  tool_image_optimizer_resize_on: 'Längste Seite begrenzen',
  tool_image_optimizer_rules_body:
    'Codecs tauschen Größe, Eindruck, Transparenz und Zeit unterschiedlich. Vor dem Jagd nach der kleinsten Datei lesen.',
  tool_image_optimizer_rules_item_1:
    'MozJPEG: verlustbehaftetes JPEG, oft kleiner als typischer Browser-JPEG-Export — sinnvoll, wenn .jpg bleiben muss.',
  tool_image_optimizer_rules_item_2: 'WebP: Fotos oft kleiner bei ähnlichem Eindruck; mit Transparenz. Guter Standard für viele Sites.',
  tool_image_optimizer_rules_item_3: 'AVIF: oft die kleinsten Lossy-Dateien, aber langsamer — Fortschritt und Abbrechen gehören dazu.',
  tool_image_optimizer_rules_item_4:
    'OxiPNG: verlustfrei PNG verkleinern. Fotos bleiben groß; stark bei scharfer UI mit Alpha. Re-Encode entfernt meist EXIF; Bytes verlassen den Tab nicht.',
  tool_image_optimizer_rules_title: 'Was Sie erwarten sollten',
  tool_image_optimizer_sample: 'Beispiel laden',
  tool_image_optimizer_stats_tpl: '{codec} · {w}×{h} · {bytes} · {ms} ms',
  tool_image_optimizer_status_done: 'Fertig — Regler und Größe prüfen, dann herunterladen.',
  tool_image_optimizer_title: 'Bild optimieren — WebP, AVIF & MozJPEG lokal',
  tool_image_optimizer_usecase_1: 'Hero- oder Produktfoto als WebP/AVIF ausliefern, nachdem der Regler den Eindruck bestätigt.',
  tool_image_optimizer_usecase_2: 'JPEG behalten, aber MozJPEG nutzen, wenn Browser-JPEG noch zu schwer ist.',
  tool_image_optimizer_usecase_3: 'Transparente UI-PNGs mit OxiPNG oder nahezu verlustfreiem WebP vor der Übergabe schrumpfen.',
  tool_image_optimizer_usecases_title: 'Gute Einsatzfälle',
  tool_image_optimizer_warn_animation: 'Animationen: nur das erste Frame wird optimiert.',
  tool_image_optimizer_warn_edge: 'Sehr große Abmessungen (>8192 px) — mit Verzögerung rechnen; längste Seite begrenzen.',
  tool_image_optimizer_warn_large: 'Große Datei (>25 MB) — kann langsam werden oder Speicher knapp machen.',
};
export default de;
