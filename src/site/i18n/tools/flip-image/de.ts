/**
 * i18n tool shard (flip-image / de).
 * Deutsch: Nutzer suchen «Bild spiegeln / horizontal spiegeln / Bild umdrehen»;
 * Hauptaktionen Spiegeln / Herunterladen. Schlüsselmenge muss 1:1 mit en.ts übereinstimmen.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Tool-Texte (Spiegeln H/V, lokale Canvas-Verarbeitung, kein Server-Upload). */
const de: SiteLangDict = {
	tool_flip_image_title: 'Bild spiegeln — horizontal oder vertikal',
	tool_flip_image_desc:
		'Foto lokal spiegeln (links-rechts oder oben-unten) und als JPEG, WebP oder PNG herunterladen — ohne Server-Upload.',
	tool_flip_image_description:
		'Spiegeln Sie ein Foto horizontal oder vertikal im Browser — z. B. Selfies. Schritte: Bild wählen, Richtung anhaken, Spiegeln, dann Herunterladen. Beispiel: Raster A/B/C/D → horizontal wandert A nach rechts. Dateien bleiben auf Ihrem Gerät, kein Server-Upload.',
	tool_flip_image_choose_file: 'Bild wählen',
	tool_flip_image_drop_hint: 'Oder JPEG, PNG, WebP bzw. GIF hier ablegen. Die Verarbeitung bleibt in diesem Tab.',
	tool_flip_image_flip: 'Spiegeln',
	tool_flip_image_download: 'Herunterladen',
	tool_flip_image_sample: 'Beispiel laden',
	tool_flip_image_clear: 'Leeren',
	tool_flip_image_flip_h: 'Horizontal spiegeln',
	tool_flip_image_flip_v: 'Vertikal spiegeln',
	tool_flip_image_advanced: 'Erweiterte Einstellungen (optional)',
	tool_flip_image_format_label: 'Ausgabeformat',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint:
		'WebP bleibt klein und kann Transparenz halten. PNG ist verlustfrei. JPEG braucht eine Hintergrundfarbe.',
	tool_flip_image_quality_label: 'Qualität',
	tool_flip_image_quality_hint: 'Gilt nur für JPEG und WebP. PNG ignoriert diesen Regler.',
	tool_flip_image_jpeg_bg_label: 'JPEG-Hintergrund',
	tool_flip_image_jpeg_bg_hint: 'Füllt transparente Pixel vor dem JPEG-Export. Standard ist Weiß.',
	tool_flip_image_preview_label: 'Vorschau',
	tool_flip_image_progress: 'Bild wird gespiegelt…',
	tool_flip_image_step_decode: 'Dekodieren',
	tool_flip_image_step_flip: 'Pixel spiegeln',
	tool_flip_image_step_encode: 'Kodieren',
	tool_flip_image_decode_step: 'Bild wird gelesen…',
	tool_flip_image_flip_step: 'Spiegel-Transformation wird angewendet…',
	tool_flip_image_encode_step: '{fmt} wird kodiert…',
	tool_flip_image_elapsed: 'Vergangen {s}s',
	tool_flip_image_empty: 'Bitte zuerst ein Bild wählen.',
	tool_flip_image_no_flip: 'Horizontal spiegeln und/oder Vertikal spiegeln aktivieren.',
	tool_flip_image_err_decode: 'Bild konnte nicht gelesen werden. Versuchen Sie JPEG, PNG oder WebP.',
	tool_flip_image_err_encode: 'Export fehlgeschlagen. Kleineres Bild oder anderes Format versuchen.',
	tool_flip_image_warn_large: 'Große Datei (>25 MB) — kann langsam werden.',
	tool_flip_image_warn_edge: 'Eine Kante übersteigt ~8192 px — manche Browser scheitern daran.',
	tool_flip_image_warn_animation: 'Animiertes GIF: nur das erste Einzelbild wird verwendet.',
	tool_flip_image_status_working: 'Arbeitet…',
	tool_flip_image_status_done: 'Fertig — zum Speichern auf Herunterladen klicken.',
	tool_flip_image_stats_tpl: 'Gespiegelt {w}×{h} → {fmt} ({bytes})',
	tool_flip_image_how_title: 'So spiegeln Sie ein Bild',
	tool_flip_image_how_body:
		'Die Seite zeichnet die Bitmap wirklich neu (Spiegel an der Achse), nicht nur als CSS-Vorschau. Anschließend wird ins gewählte Format aus den erweiterten Einstellungen neu kodiert.',
	tool_flip_image_how_item_1: 'Bild wählen oder JPEG, PNG, WebP bzw. GIF in den Bereich ziehen.',
	tool_flip_image_how_item_2: 'Horizontal spiegeln und/oder Vertikal spiegeln anhaken — die Vorschau folgt sofort.',
	tool_flip_image_how_item_3:
		'Optional unter Erweiterte Einstellungen JPEG, WebP oder PNG, Qualität und JPEG-Hintergrund wählen.',
	tool_flip_image_how_item_4: 'Auf Spiegeln klicken, den Fortschritt abwarten, dann Herunterladen.',
	tool_flip_image_why_choose_title: 'Warum Bild spiegeln auf dieser Seite',
	tool_flip_image_why_choose_item_1:
		'Live-Vorschau zeigt, wohin Markierungen wandern, bevor Sie exportieren.',
	tool_flip_image_why_choose_item_2:
		'Beide Achsen in einem Durchgang — beide Haken ergeben bei Rechteckfotos die 180°-Entsprechung.',
	tool_flip_image_why_choose_item_3:
		'JPEG-, WebP- und PNG-Export mit Qualitätsregler und JPEG-Hintergrundfarbe.',
	tool_flip_image_why_choose_item_4:
		'Sanfte Hinweise bei riesigen Dateien, extremen Pixelkanten und animierten GIFs (nur erstes Frame).',
	tool_flip_image_why_choose_item_5:
		'Läuft komplett in diesem Tab — die Datei bleibt auf Ihrem Gerät und wird nicht auf unseren Server geladen.',
	tool_flip_image_rules_title: 'Regeln',
	tool_flip_image_rules_body:
		'Gespiegelt wird auf einer Canvas in Originalgröße; danach Export über einen Blob-Download.',
	tool_flip_image_rules_item_1: 'Horizontal: Spiegel an der vertikalen Achse (links↔rechts).',
	tool_flip_image_rules_item_2: 'Vertikal: Spiegel an der horizontalen Achse (oben↔unten).',
	tool_flip_image_rules_item_3: 'Beide aktiv = bei Rechteckbildern wie 180° drehen (Ecken tauschen).',
	tool_flip_image_rules_item_4:
		'Animiertes GIF: nur erstes Frame; PNG/WebP behalten Transparenz; JPEG füllt mit der Hintergrundfarbe.',
	tool_flip_image_rules_item_5:
		'Spiegeln ordnet Pixel neu; Speichern als JPEG/WebP kodiert neu und kann die Dateigröße ändern.',
	tool_flip_image_example_title: 'Beispiel',
	tool_flip_image_example:
		'Beispiel laden erzeugt ein 480×320-Raster mit A B / C D. Horizontal spiegeln (Standard) rückt A nach rechts. Spiegeln tippen, dann Herunterladen. Zusätzlich Vertikal spiegeln und erneut Spiegeln — das entspricht einer 180°-Drehung.',
	tool_flip_image_usecases_title: 'Wann es hilft',
	tool_flip_image_usecase_1:
		'Gespiegeltes Selfie vor dem Posten korrigieren, damit Schrift auf dem Shirt lesbar ist.',
	tool_flip_image_usecase_2:
		'Produkt-Mockup links/rechts tauschen, damit der Call-to-Action auf der bevorzugten Seite sitzt.',
	tool_flip_image_usecase_3: 'Fotografierte Scan-Seite, die auf dem Kopf steht, mit Vertikal spiegeln richten.',
	tool_flip_image_usecase_4:
		'Gespiegelte Druckvariante vorbereiten, ohne einen Desktop-Editor zu öffnen.',
	tool_flip_image_faq_q1: 'Werden Bilder hochgeladen?',
	tool_flip_image_faq_a1:
		'Nein. Lesen, Spiegeln und Export laufen in Ihrem Browser-Tab. Skripte kommen bei Bedarf nur vom Vendor-Ordner dieser Website; Ihre Dateibytes bleiben lokal und gehen nicht auf unseren Server.',
	tool_flip_image_faq_q2: 'Geht Qualität verloren?',
	tool_flip_image_faq_a2:
		'Das Spiegeln selbst verschiebt nur Pixel. Speichern als JPEG oder WebP kodiert neu und kann Bytes ändern. Für verlustfrei PNG in den erweiterten Einstellungen wählen.',
	tool_flip_image_faq_q3: 'Spiegeln oder drehen?',
	tool_flip_image_faq_a3:
		'Spiegeln spiegelt an einer Achse. Drehen dreht um einen Winkel. Diese Seite spiegelt nur — für 90°-Schritte ein Dreh-Tool nutzen.',
	tool_flip_image_faq_q4: 'Beide Richtungen gleichzeitig?',
	tool_flip_image_faq_a4:
		'Ja. Horizontal spiegeln und Vertikal spiegeln zusammen anhaken. Bei Rechteckfotos entspricht das einer 180°-Drehung.',
	tool_flip_image_faq_q5: 'Und animierte GIFs?',
	tool_flip_image_faq_a5:
		'Nur das erste Einzelbild wird gelesen und gespiegelt. Mehrframe-Animation bleibt im Download nicht erhalten.',
	tool_flip_image_faq_q6: 'Warum sieht JPEG anders aus als die Vorschau?',
	tool_flip_image_faq_a6:
		'JPEG kennt keine Transparenz. Transparente Pixel werden vor dem Kodieren mit der JPEG-Hintergrundfarbe gefüllt. Die Vorschau zeigt Transparenz als Schachbrett.',
	tool_flip_image_faq_q7: 'Bild spiegeln vs. zuschneiden oder Graustufen?',
	tool_flip_image_faq_a7:
		'Diese Seite spiegelt nur. Zuschneiden kürzt Ränder; Graustufen entfernen Farbe. Dafür die verwandten Tools Bild zuschneiden bzw. Bild in Graustufen nutzen.',
	tool_flip_image_article:
		'Lokales Canvas-Spiegeln horizontal und vertikal; Pixel werden neu gezeichnet, nicht nur per CSS gespiegelt.',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

/** Standard-Export: wird von merge:tools in das deutsche Site-Wörterbuch gemerged. */
export default de;
