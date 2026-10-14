/**
 * i18n tool shard (image-grayscale / de).
 * German rewrite (2026-10-14): Schwarz-Weiß / Graustufen converter with selectable method,
 * strength slider, show-original toggle, Convert → Download, gold progress HUD, collapsed export.
 */
import type { SiteLangDict } from '../../../types';

/** German strings for the image grayscale converter (Sie-Form). */
const de: SiteLangDict = {
	tool_image_grayscale_title: 'Bild in Schwarz-Weiß umwandeln — Graustufen mit wählbarer Methode',
	tool_image_grayscale_desc: 'Farbfoto im Browser schwarz-weiß machen, Graustufenmethode wählen, dann herunterladen.',
	tool_image_grayscale_description:
		'Farbfoto im Browser in Schwarz-Weiß (Graustufen) umwandeln. Schritte: Bild wählen, Methode — Luminanz, Mittelwert, Helligkeit oder einen Farbkanal — und Stärke festlegen, umwandeln und als JPEG, WebP oder PNG speichern.',
	tool_image_grayscale_choose_file: 'Bild wählen',
	tool_image_grayscale_drop_hint: 'Oder JPEG, PNG, WebP oder GIF hier ablegen.',
	tool_image_grayscale_convert: 'In Schwarz-Weiß umwandeln',
	tool_image_grayscale_download: 'Herunterladen',
	tool_image_grayscale_sample: 'Beispiel laden',
	tool_image_grayscale_clear: 'Leeren',
	tool_image_grayscale_method_label: 'Graustufenmethode',
	tool_image_grayscale_method_luma601: 'Luminanz — Rec.601 (empfohlen)',
	tool_image_grayscale_method_luma709: 'Luminanz — Rec.709 / sRGB',
	tool_image_grayscale_method_average: 'Mittelwert aus R, G, B',
	tool_image_grayscale_method_lightness: 'Helligkeit (max + min) ÷ 2',
	tool_image_grayscale_method_red: 'Nur Rotkanal (Rotfilter-Optik)',
	tool_image_grayscale_method_green: 'Nur Grünkanal',
	tool_image_grayscale_method_blue: 'Nur Blaukanal',
	tool_image_grayscale_method_hint: 'Luminanz entspricht der Helligkeit, die das Auge wahrnimmt. Die Vorschau aktualisiert sich beim Wechsel.',
	tool_image_grayscale_amount_label: 'Stärke',
	tool_image_grayscale_amount_hint: '100 % = vollständig Schwarz-Weiß; niedrigere Werte behalten etwas Farbe.',
	tool_image_grayscale_show_original: 'Original anzeigen',
	tool_image_grayscale_advanced: 'Erweiterte Einstellungen (optional)',
	tool_image_grayscale_format_label: 'Ausgabeformat',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP ist klein und behält Transparenz. PNG ist verlustfrei. JPEG braucht eine Hintergrundfarbe.',
	tool_image_grayscale_quality_label: 'Qualität',
	tool_image_grayscale_quality_hint: 'Nur JPEG und WebP; PNG ignoriert den Wert.',
	tool_image_grayscale_jpeg_bg_label: 'JPEG-Hintergrund',
	tool_image_grayscale_jpeg_bg_hint: 'Füllt transparente Bereiche vor dem JPEG-Export. Standard ist Weiß.',
	tool_image_grayscale_preview_label: 'Vorschau',
	tool_image_grayscale_progress: 'Wird in Graustufen umgewandelt…',
	tool_image_grayscale_step_decode: 'Dekodieren',
	tool_image_grayscale_step_gray: 'Pixel umrechnen',
	tool_image_grayscale_step_encode: 'Kodieren',
	tool_image_grayscale_decode_step: 'Bild wird gelesen…',
	tool_image_grayscale_gray_step: 'Jeder Pixel wird neu berechnet…',
	tool_image_grayscale_encode_step: 'Wird als {fmt} gespeichert…',
	tool_image_grayscale_elapsed: 'Vergangen: {s} s',
	tool_image_grayscale_empty: 'Bitte zuerst ein Bild wählen.',
	tool_image_grayscale_err_decode: 'Diese Datei ließ sich nicht als Bild öffnen. Versuchen Sie JPEG, PNG oder WebP.',
	tool_image_grayscale_err_encode: 'Das Bild konnte nicht gespeichert werden. Versuchen Sie ein kleineres Bild oder ein anderes Format.',
	tool_image_grayscale_warn_large: 'Große Datei (über 25 MB) — die Umwandlung kann langsam sein.',
	tool_image_grayscale_warn_edge: 'Eine Seite ist länger als etwa 8.192 px — manche Browser scheitern daran.',
	tool_image_grayscale_warn_animation: 'Animiertes GIF: nur der erste Frame wird umgewandelt.',
	tool_image_grayscale_status_working: 'Wird verarbeitet…',
	tool_image_grayscale_status_done: 'Fertig — zum Speichern auf Herunterladen klicken.',
	tool_image_grayscale_stats_tpl: '{w}×{h} Pixel · {method} → {fmt} ({bytes})',
	tool_image_grayscale_how_title: 'So wandeln Sie ein Bild in Schwarz-Weiß um',
	tool_image_grayscale_how_body:
		'Bei jedem Pixel werden Rot-, Grün- und Blauwerte durch einen gemeinsamen Grauwert ersetzt, sodass R = G = B. Die Methode bestimmt, wie dieser Grauwert berechnet wird — deshalb wirkt dasselbe Foto heller, dunkler oder flacher.',
	tool_image_grayscale_how_item_1: 'Foto wählen oder in den Kasten ziehen.',
	tool_image_grayscale_how_item_2: 'Graustufenmethode und Stärke wählen; „Original anzeigen“ zum Vergleich aktivieren.',
	tool_image_grayscale_how_item_3: 'Auf „In Schwarz-Weiß umwandeln“ klicken und den Fortschrittsbalken abwarten.',
	tool_image_grayscale_how_item_4: 'Auf „Herunterladen“ klicken. Vorher unter Erweiterte Einstellungen PNG, JPEG oder eine andere Qualität wählen, falls nötig.',
	tool_image_grayscale_why_choose_title: 'Warum dieses Graustufen-Werkzeug nutzen',
	tool_image_grayscale_why_choose_item_1:
		'Der Stärkeregler liefert sowohl volles Schwarz-Weiß als auch einen gedämpften, teilweise entsättigten Look.',
	tool_image_grayscale_why_choose_item_2:
		'Sieben Umwandlungsmethoden statt eines festen Filters. Im Beispiel wird reines Rot mit Rec.601-Luminanz zu 76, mit dem einfachen Mittelwert zu 85 — und die Helligkeitsmethode macht Rot, Grün, Blau und Gelb zu demselben Grau 128.',
	tool_image_grayscale_why_choose_item_3:
		'Die Pixel selbst werden überschrieben, deshalb bleibt die heruntergeladene Datei in jeder App schwarz-weiß — anders als ein CSS-Filter oder eine Anzeigeeinstellung.',
	tool_image_grayscale_why_choose_item_4:
		'Einkanal-Modi erzeugen Schwarz-Weiß-Filtereffekte: der Rotkanal verdunkelt blauen Himmel und glättet Haut, der Blaukanal hellt Himmel auf und betont Sommersprossen.',
	tool_image_grayscale_why_choose_item_5:
		'Transparenz bleibt in PNG und WebP erhalten; das Foto wird in diesem Browser-Tab verarbeitet und nicht hochgeladen.',
	tool_image_grayscale_rules_title: 'Verwendete Graustufenformeln',
	tool_image_grayscale_rules_body: 'R, G und B sind die Pixelwerte 0–255; das Ergebnis Y wird in alle drei Kanäle geschrieben.',
	tool_image_grayscale_rules_item_1: 'Rec.601-Luminanz: Y = 0,299 R + 0,587 G + 0,114 B — die klassische TV- und JPEG-Gewichtung, am nächsten an der wahrgenommenen Helligkeit.',
	tool_image_grayscale_rules_item_2: 'Rec.709-Luminanz: Y = 0,2126 R + 0,7152 G + 0,0722 B — die HD-Video-Gewichte, auch vom CSS-Filter grayscale() genutzt. Wie die meisten Editoren wird sie auf die gespeicherten sRGB-Werte ohne Gamma-Linearisierung angewandt.',
	tool_image_grayscale_rules_item_3: 'Mittelwert: Y = (R + G + B) ÷ 3. Helligkeit: Y = (größter + kleinster Wert) ÷ 2. Kanalmodi kopieren nur R, G oder B.',
	tool_image_grayscale_rules_item_4: 'Stärke s: neuer Wert = original + (Y − original) × s. Bei 100 % ist jeder Pixel grau; bei 50 % liegen die Farben auf halbem Weg zum Grau.',
	tool_image_grayscale_rules_item_5: 'Alpha (Transparenz) bleibt unverändert; JPEG füllt sie mit der Hintergrundfarbe. Animierte GIFs nutzen den ersten Frame. Speichern kodiert das Bild neu.',
	tool_image_grayscale_example_title: 'Beispiel',
	tool_image_grayscale_example:
		'Das Beispiel zeigt reine Rot-, Grün-, Blau- und Gelbbalken über einem Regenbogenstreifen. Mit Rec.601 werden sie zu 76, 150, 29 und 226 — vier klar unterschiedliche Grautöne. Rec.709 ergibt 54, 182, 18 und 237; der Mittelwert 85, 85, 85 und 170, sodass Rot, Grün und Blau zusammenfallen; die Helligkeit macht alle vier zu 128. Methoden wechseln, Vorschau beobachten, dann umwandeln und herunterladen.',
	tool_image_grayscale_usecases_title: 'Wann Sie es nutzen',
	tool_image_grayscale_usecase_1: 'Schwarz-Weiß-Fotos für Porträts, Social Posts oder Retro-Look — den Rotkanal für klassische Filmfilter-Optik ausprobieren.',
	tool_image_grayscale_usecase_2: 'Druck auf einem Mono-Laser oder für die Zeitung: zuerst umwandeln, um zu sehen, wie Farben in Grau auseinanderfallen.',
	tool_image_grayscale_usecase_3: 'Diagramm, Logo oder UI-Farbpalette prüfen: werden zwei Farben zum selben Grau, können Menschen mit Farbsehschwäche sie kaum unterscheiden.',
	tool_image_grayscale_usecase_4: 'Scans und Dokumente vorbereiten: Graustufen entfernen Papierfarbstiche und halten die Datei schlicht.',
	tool_image_grayscale_faq_q1: 'Kann ich etwas Farbe behalten?',
	tool_image_grayscale_faq_a1:
		'Ja. Die Stärke senken: 70–80 % wirken verblichen und entsättigt, 0 % lässt das Foto unverändert. Nur eine Farbe behalten (selektive Farbe) braucht Masken — das bietet diese Seite nicht.',
	tool_image_grayscale_faq_q2: 'Wird mein Foto hochgeladen?',
	tool_image_grayscale_faq_a2:
		'Nein. Dekodieren, Umwandeln und Speichern laufen in diesem Browser-Tab. Das Original behalten, falls Sie die Farbversion zurückwollen — der Graudownload lässt sich nicht wieder einfärben.',
	tool_image_grayscale_faq_q3: 'Welche Graustufenmethode soll ich wählen?',
	tool_image_grayscale_faq_a3:
		'Bei Fotos mit Rec.601-Luminanz starten: Grün wird am stärksten, Blau am schwächsten gewichtet — nah an der wahrgenommenen Helligkeit. Rec.709 wirkt bei Grün etwas heller. Mittelwert und Helligkeit sind einfacher, können bunte Bilder aber flacher machen. Einen einzelnen Kanal wählen, wenn Sie bewusst einen Filtereffekt wollen.',
	tool_image_grayscale_faq_q4: 'Was passiert mit transparenten PNG-Bildern?',
	tool_image_grayscale_faq_a4:
		'Transparenz bleibt erhalten, wenn Sie PNG oder WebP herunterladen. JPEG speichert keine Transparenz; diese Bereiche werden mit der JPEG-Hintergrundfarbe aus den Erweiterten Einstellungen gefüllt.',
	tool_image_grayscale_faq_q5: 'Warum wirkt mein Schwarz-Weiß-Foto flach?',
	tool_image_grayscale_faq_a5:
		'Farben, die sich nur im Farbton unterscheiden, können zum selben Grau werden. Eine rote Blume auf grünen Blättern ist der Klassiker: mit dem Mittelwert sind beide 85. Auf Luminanz wechseln oder Rot- bzw. Grünkanal ausprobieren, um sie zu trennen.',
	tool_image_grayscale_faq_q6: 'Ist das dasselbe wie der CSS-Filter grayscale() oder der Mono-Filter am Handy?',
	tool_image_grayscale_faq_a6:
		'CSS grayscale(100 %) nutzt dieselben Gewichte wie die Rec.709-Option, ändert aber nur die Anzeige der Seite; die Datei bleibt farbig. Handyfilter verstärken oft Kontrast oder Ton. Dieses Werkzeug schreibt echte Graupixel in eine neue Datei.',
	tool_image_grayscale_faq_q7: 'Ist die heruntergeladene Datei echtes Graustufenbild — und kleiner?',
	tool_image_grayscale_faq_a7:
		'Jeder Pixel hat gleiche R-, G- und B-Werte und wirkt damit rein grau. Browser speichern sie als normales RGB statt als Einkanaldatei, deshalb sinkt die Größe nur mäßig — meist am stärksten bei PNG. Für einen 8-Bit-Graustufen-Farbmodus brauchen Sie einen Bildeditor.',
	tool_image_grayscale_article: 'Bild in Graustufen',
	tool_image_grayscale_ref_a_label: 'Wikipedia — Graustufen (Umwandlung von Farbe zu Grau)',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — grayscale()-Matrix',
};

export default de;
