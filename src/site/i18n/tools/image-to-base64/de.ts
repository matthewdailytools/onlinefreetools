/**
 * i18n tool shard (image-to-base64 / de).
 * Bild ↔ Base64 / data URL; Tabs Kodieren/Dekodieren; Gold-HUD. Nur Schlüssel dieses Tools bearbeiten.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsches Textwörterbuch (Schlüsselsatz identisch mit en.ts). */
const de: SiteLangDict = {
	tool_image_to_base64_title: 'Bild zu Base64 — lokal kodieren und dekodieren',
	tool_image_to_base64_desc: 'Fotos in Base64 oder data URL umwandeln und Base64-Strings zurück in Bilder – ohne Server-Upload.',
	tool_image_to_base64_description:
		'Bild in Base64 umwandeln oder Base64 zurück in ein Bild – im Browser, ohne Server-Upload; Dateien bleiben auf Ihrem Gerät. Bild wählen, Kodieren klicken, dann Kopieren oder Herunterladen. Beispiel: PNG → data:image/png;base64,… für HTML.',
	tool_image_to_base64_mode_label: 'Modus',
	tool_image_to_base64_tab_encode: 'Kodieren',
	tool_image_to_base64_tab_decode: 'Dekodieren',
	tool_image_to_base64_choose_file: 'Bild wählen',
	tool_image_to_base64_drop_hint: 'Oder JPEG, PNG, WebP bzw. GIF hierher ziehen. Die Verarbeitung bleibt in diesem Tab.',
	tool_image_to_base64_encode: 'Kodieren',
	tool_image_to_base64_decode_btn: 'Dekodieren',
	tool_image_to_base64_copy: 'Kopieren',
	tool_image_to_base64_copy_done: 'Kopiert',
	tool_image_to_base64_download: 'Herunterladen',
	tool_image_to_base64_sample: 'Beispiel laden',
	tool_image_to_base64_clear: 'Leeren',
	tool_image_to_base64_advanced: 'Erweiterte Einstellungen (optional)',
	tool_image_to_base64_strip_prefix: 'data:-Präfix entfernen (nur reines Base64)',
	tool_image_to_base64_strip_hint: 'Aus (Standard): data:image/…;base64, bleibt erhalten und lässt sich direkt in HTML einfügen. An: Es wird nur der Base64-Teil kopiert.',
	tool_image_to_base64_decode_mime_label: 'Standard-MIME für reines Base64',
	tool_image_to_base64_decode_mime_hint: 'Gilt nur, wenn der eingefügte Text kein data:-Präfix hat. Eine data URL bringt ihren MIME-Typ selbst mit.',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'data:image/…;base64,… oder reines Base64 einfügen',
	tool_image_to_base64_output_label: 'Ergebnis',
	tool_image_to_base64_preview_label: 'Vorschau',
	tool_image_to_base64_progress: 'Wird verarbeitet…',
	tool_image_to_base64_step_read: 'Datei lesen',
	tool_image_to_base64_step_encode: 'Kodieren',
	tool_image_to_base64_step_ready: 'Fertig',
	tool_image_to_base64_read_step: 'Datei wird gelesen…',
	tool_image_to_base64_encode_step: 'Data URL wird erzeugt…',
	tool_image_to_base64_ready_step: 'Ergebnis bereit',
	tool_image_to_base64_decode_step_parse: 'Einlesen',
	tool_image_to_base64_decode_step_blob: 'Bild erzeugen',
	tool_image_to_base64_decode_step_ready: 'Fertig',
	tool_image_to_base64_parse_step: 'Base64 wird eingelesen…',
	tool_image_to_base64_blob_step: 'Bilddatei wird erzeugt…',
	tool_image_to_base64_elapsed: '{s} s vergangen',
	tool_image_to_base64_empty: 'Bitte zuerst ein Bild wählen.',
	tool_image_to_base64_empty_decode: 'Bitte zuerst eine data URL oder einen Base64-String einfügen.',
	tool_image_to_base64_err_decode: 'Dekodieren fehlgeschlagen. Prüfen Sie, ob der Text eine gültige Bild-data-URL oder gültiges Base64 ist.',
	tool_image_to_base64_err_encode: 'Die Datei ließ sich nicht kodieren. Versuchen Sie JPEG, PNG oder WebP.',
	tool_image_to_base64_err_invalid: 'Ungültiges Base64 oder ungültige data URL.',
	tool_image_to_base64_warn_large: 'Große Eingabe (>25 MB) – kann langsam sein und viel Arbeitsspeicher belegen.',
	tool_image_to_base64_status_working: 'Wird verarbeitet…',
	tool_image_to_base64_status_done: 'Fertig – String kopieren oder auf Herunterladen klicken.',
	tool_image_to_base64_status_decoded: 'Fertig – die Vorschau steht; mit Herunterladen speichern Sie das Bild.',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} Zeichen · {bytes}',
	tool_image_to_base64_how_title: 'Bild in Base64 umwandeln – so geht’s',
	tool_image_to_base64_how_body:
		'Kodieren liest die Datei im Browser ein und macht daraus eine data URL. Dekodieren nimmt eine komplette data URL oder reines Base64 an (der MIME-Typ kommt dann aus den erweiterten Einstellungen). Hochgeladen wird nichts.',
	tool_image_to_base64_how_item_1: 'Im Tab „Kodieren“ ein Bild wählen oder hineinziehen, dann auf Kodieren klicken.',
	tool_image_to_base64_how_item_2: 'Bei Bedarf die erweiterten Einstellungen öffnen und das data:-Präfix entfernen, um reines Base64 zu erhalten.',
	tool_image_to_base64_how_item_3: 'Mit Kopieren landet der String in der Zwischenablage; Herunterladen speichert die Originalbilddatei.',
	tool_image_to_base64_how_item_4: 'Für den Rückweg zu „Dekodieren“ wechseln, data URL oder Base64 einfügen, Dekodieren klicken und das Bild herunterladen.',
	tool_image_to_base64_why_choose_title: 'Was „Bild zu Base64 — lokal kodieren und dekodieren“ anders macht',
	tool_image_to_base64_why_choose_item_1: 'Vorschau nach jedem Kodieren und Dekodieren – Sie sehen die Pixel, nicht nur Zeichensalat.',
	tool_image_to_base64_why_choose_item_2: 'Hin- und Rückweg in einem Werkzeug: Bild zu Base64 und Base64 zu Bild über zwei Tabs.',
	tool_image_to_base64_why_choose_item_3: 'Das data:-Präfix lässt sich abschalten, wenn ein API-Feld nur reines Base64 annimmt.',
	tool_image_to_base64_why_choose_item_4: 'Hinweis bei sehr großen Dateien, bevor der Speicher des Browsers knapp wird.',
	tool_image_to_base64_why_choose_item_5: 'Läuft in diesem Tab; die Datei wird nicht auf unseren Server hochgeladen.',
	tool_image_to_base64_rules_title: 'Regeln',
	tool_image_to_base64_rules_body: 'Kodieren liest die Datei mit FileReader.readAsDataURL; Dekodieren baut aus der data URL einen Blob, den Sie herunterladen können.',
	tool_image_to_base64_rules_item_1: 'Standardausgabe ist ein vollständiger data:image/…;base64,…-String, passend für das src-Attribut von <img>.',
	tool_image_to_base64_rules_item_2: '„Präfix entfernen“ schneidet alles bis zum ersten Komma ab – praktisch für APIs, die nur reines Base64 wollen.',
	tool_image_to_base64_rules_item_3: 'Reines Base64 ohne Präfix wird mit dem Standard-MIME aus den erweiterten Einstellungen gelesen (voreingestellt image/png).',
	tool_image_to_base64_rules_item_4: 'Ungültige Zeichen oder abgeschnittene Strings führen zu einer Fehlermeldung; hochgeladen wird nichts.',
	tool_image_to_base64_rules_item_5: 'Animierte GIFs werden als ganze Datei kodiert; einzelne Frames bearbeitet dieses Werkzeug nicht.',
	tool_image_to_base64_example_title: 'Beispiel',
	tool_image_to_base64_example:
		'Beispiel laden erzeugt ein 320×200-PNG mit der Aufschrift „Base64“, startet Kodieren und füllt das Ergebnis mit data:image/png;base64,…. Den String setzen Sie in <img src="…"> ein. Danach zu Dekodieren wechseln, denselben String einfügen, Dekodieren klicken und decoded.png herunterladen.',
	tool_image_to_base64_usecases_title: 'Wofür man es braucht',
	tool_image_to_base64_usecase_1: 'Ein kleines Icon oder Logo direkt in HTML oder CSS einbetten, ohne zusätzliche Bildanfrage.',
	tool_image_to_base64_usecase_2: 'Eine E-Mail oder ein Markdown-Dokument prüfen, in dem bereits eine data URL steckt.',
	tool_image_to_base64_usecase_3: 'Aus einem Base64-Dump in einer API-Antwort wieder ein sichtbares Bild machen.',
	tool_image_to_base64_usecase_4: 'Reines Base64 für ein Formularfeld liefern, das das data:-Präfix ablehnt.',
	tool_image_to_base64_faq_q1: 'Werden meine Bilder hochgeladen?',
	tool_image_to_base64_faq_a1:
		'Nein. Einlesen und Dekodieren laufen im Browser-Tab; die Datei bleibt auf Ihrem Gerät, ohne Server-Upload.',
	tool_image_to_base64_faq_q2: 'Was unterscheidet eine data URL von reinem Base64?',
	tool_image_to_base64_faq_a2:
		'Eine data URL beginnt mit data:image/png;base64, und enthält danach die Daten – fertig für HTML. Reines Base64 ist nur der Datenteil; dafür in den erweiterten Einstellungen „data:-Präfix entfernen“ einschalten.',
	tool_image_to_base64_faq_q3: 'Klappt das auch mit sehr großen Dateien?',
	tool_image_to_base64_faq_a3:
		'Ja, kostet aber viel Speicher: Base64 macht die Datei rund 33 % größer. Ab etwa 25 MB das Bild besser vorher komprimieren oder verkleinern.',
	tool_image_to_base64_faq_q4: 'Welcher MIME-Typ gilt beim Dekodieren?',
	tool_image_to_base64_faq_a4:
		'Bei einer data URL der darin angegebene. Bei reinem Base64 der Wert „Standard-MIME“ aus den erweiterten Einstellungen (voreingestellt image/png).',
	tool_image_to_base64_faq_q5: 'Was passiert mit animierten GIFs?',
	tool_image_to_base64_faq_a5:
		'Kodieren übernimmt die komplette Datei als data URL, die Animation bleibt also erhalten. Frames aufteilen oder bearbeiten kann dieses Werkzeug nicht.',
	tool_image_to_base64_faq_q6: 'Brauche ich nicht eher einen Formatkonverter?',
	tool_image_to_base64_faq_a6:
		'Hier entsteht ein Text-String (oder aus einem String wieder ein Bild). Wer nur JPEG, PNG oder WebP ineinander umwandeln will, ist mit dem Bildformat-Konverter besser bedient.',
	tool_image_to_base64_faq_q7: 'Warum ist Kopieren ausgegraut oder leer?',
	tool_image_to_base64_faq_a7:
		'Kopieren braucht ein Ergebnis aus dem Kodieren: Bild wählen, Kodieren klicken, dann Kopieren. Im Tab „Dekodieren“ speichern Sie das Bild stattdessen mit Herunterladen.',
	tool_image_to_base64_article:
		'Bild zu Base64 per FileReader-data-URL; Base64 zu Bild aus data URL oder reinem Base64 mit einstellbarem Standard-MIME.',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — Data-URLs',
};

export default de;
