/**
 * i18n-Shard (bulk-convert-images-to-jpg / de).
 * H1 folgt der Suche «Bilder in Masse nach JPG umwandeln».
 */
import type { SiteLangDict } from '../../../types';

/** Deutsch: Formulare, die nur JPG nehmen; alltäglicher Werkzeugton. */
const de: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'Wenn der Anhang .jpg sein muss, wandeln Sie einen Stapel Fotos, PNG-Logos und Handy-HEIC in diesem Tab um: eine gemeinsame Unterlage für Transparenz, Fehler werden übersprungen, danach ein ZIP. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: 'Weißer Hintergrund',
	tool_bulk_convert_images_to_jpg_choose_files: 'Bilder wählen',
	tool_bulk_convert_images_to_jpg_clear: 'Leeren',
	tool_bulk_convert_images_to_jpg_col_after: 'Danach',
	tool_bulk_convert_images_to_jpg_col_before: 'Davor',
	tool_bulk_convert_images_to_jpg_col_name: 'Datei',
	tool_bulk_convert_images_to_jpg_col_status: 'Status',
	tool_bulk_convert_images_to_jpg_convert: 'Alle umwandeln',
	tool_bulk_convert_images_to_jpg_desc:
		'Bilder in Masse nach JPG umwandeln, gemeinsame Unterlage, ZIP laden; Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_jpg_description:
		'Bilder in Masse nach JPG umwandeln: Fotos, PNG-Logos oder HEIC-Aufnahmen einlegen, eine Unterlage hinter Transparenz malen, hier .jpg schreiben, Fehler überspringen, ZIP laden. Schritte: Stapel wählen, weißen Hintergrund lassen außer Schwarz ist verlangt, alles umwandeln. Beispiel: ein Foto und ein durchsichtiges Logo auf Weiß werden zwei .jpg. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_jpg_download_zip: 'ZIP herunterladen',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'PNG, JPEG, WebP, GIF oder HEIC ablegen (bis 20). Die Umwandlung bleibt in diesem Tab.',
	tool_bulk_convert_images_to_jpg_empty: 'Zuerst Bilder hinzufügen.',
	tool_bulk_convert_images_to_jpg_err_decode: 'Diese Datei ließ sich nicht lesen (HEIC braucht oft einen anderen Browser). Übersprungen.',
	tool_bulk_convert_images_to_jpg_err_encode: 'Für diese Datei ließ sich kein .jpg schreiben. Übersprungen.',
	tool_bulk_convert_images_to_jpg_err_fflate: 'Dieser Browser konnte das ZIP nicht bauen. Versuchen Sie einen aktuellen Browser.',
	tool_bulk_convert_images_to_jpg_err_too_many: 'Höchstens 20 Bilder. Zusätzliche Dateien wurden nicht aufgenommen.',
	tool_bulk_convert_images_to_jpg_example:
		'Beispiel laden setzt einen opaken Block und ein transparentes Logo, malt beide auf Weiß, zeigt zwei .jpg-Namen und aktiviert ZIP herunterladen.',
	tool_bulk_convert_images_to_jpg_example_title: 'Beispiel',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'Nein. Lesen und .jpg-Schreiben laufen in diesem Tab. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Ein ZIP-Helfer kann von einem CDN kommen; Ihre Bilder verlassen den Tab nicht.',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'Ja. PNG zu JPG ist hier: Dateien wählen, weißen Hintergrund lassen damit Löcher nicht schwarz werden, alles umwandeln.',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'Kann der Browser HEIC nicht lesen, wird die Zeile übersprungen und der Rest kommt ins ZIP. Safari versuchen oder zuerst am Handy umwandeln.',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'Nein. JPEG und JPG sind dieselbe Ausgabe. Dateien heißen .jpg.',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'Hier ändert sich nur die Endung zu JPG. Angebotsfotos Richtung 200 KB zu drücken ist Produktfotos stapelweise komprimieren.',
	tool_bulk_convert_images_to_jpg_faq_q1: 'Werden die Bilder auf einen Server geladen?',
	tool_bulk_convert_images_to_jpg_faq_q2: 'Wie mache ich PNG zu JPG hier?',
	tool_bulk_convert_images_to_jpg_faq_q3: 'Was, wenn HEIC zu JPG scheitert?',
	tool_bulk_convert_images_to_jpg_faq_q4: 'Brauche ich extra ein JPEG-Werkzeug neben JPG?',
	tool_bulk_convert_images_to_jpg_faq_q5: 'Ist das dasselbe wie Fotos komprimieren?',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '{n} Bilder in der Warteschlange',
	tool_bulk_convert_images_to_jpg_how_body:
		'Wenn das Formular nur JPG nimmt, legen Sie die Bilder in die Warteschlange, teilen Sie eine Unterlage für transparente Pixel, wandeln Sie hier um und nehmen Sie das ZIP der gelungenen Dateien mit.',
	tool_bulk_convert_images_to_jpg_how_item_1: 'Wählen Sie Fotos, PNG oder HEIC, die das Formular nur als JPG akzeptiert.',
	tool_bulk_convert_images_to_jpg_how_item_2: 'Lassen Sie Weißen Hintergrund, außer Schwarz ist verlangt. JPG speichert keine Löcher.',
	tool_bulk_convert_images_to_jpg_how_item_3: 'Qualität etwas senken, wenn der Mailanhang klein bleiben muss — die Aufgabe bleibt JPG, keine 200-KB-Jagd.',
	tool_bulk_convert_images_to_jpg_how_item_4: 'Alle umwandeln drücken. Unlesbares HEIC wird übersprungen, der Rest wird .jpg.',
	tool_bulk_convert_images_to_jpg_how_item_5: 'ZIP herunterladen, sobald mindestens eine Datei geklappt hat. Beispiel laden lief schon beim Öffnen.',
	tool_bulk_convert_images_to_jpg_how_title: 'So werden daraus JPG-Dateien',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: 'Schwarz',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: 'Eigene Farbe',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: 'Unterlage hinter Transparenz',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: 'Weiß',
	tool_bulk_convert_images_to_jpg_quality_label: 'JPG-Qualität',
	tool_bulk_convert_images_to_jpg_rules_body:
		'JPG hat keinen Alphakanal. Jede Datei wird auf dieselbe Unterlage gezeichnet und als .jpg gespeichert.',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'Ausgabenamen enden immer auf .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'Transparente Pixel werden vor dem Speichern mit der gemeinsamen Unterlage gefüllt. Es gibt keinen Modus ohne Unterlage, der unerklärte schwarze Blöcke hinterließe.',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'Les- oder Schreibfehler überspringen diese Zeile. Doppelte ZIP-Namen werden Name (2).jpg. Animationen nutzen das erste Bild.',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_jpg_rules_title: 'Was Sie erwarten sollten',
	tool_bulk_convert_images_to_jpg_sample: 'Beispiel laden',
	tool_bulk_convert_images_to_jpg_status_compressing: 'Stapel wird nach JPG umgewandelt…',
	tool_bulk_convert_images_to_jpg_status_done: 'Stapel fertig — Tabelle prüfen, dann ZIP laden.',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG fertig',
	tool_bulk_convert_images_to_jpg_status_skip: 'Übersprungen',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} fertig · {skip} übersprungen',
	tool_bulk_convert_images_to_jpg_title: 'Bilder in Masse nach JPG umwandeln',
	tool_bulk_convert_images_to_jpg_usecase_1: 'Anmeldung lehnt PNG ab und nimmt nur JPG-Anhänge.',
	tool_bulk_convert_images_to_jpg_usecase_2: 'Der Druckerei ein Paket Produktfotos schicken, die .jpg sein müssen.',
	tool_bulk_convert_images_to_jpg_usecase_3: 'Handy-HEIC, die Windows nicht öffnet — wandeln Sie um, was dieser Browser lesen kann.',
	tool_bulk_convert_images_to_jpg_usecases_title: 'Wann das passt',
	tool_bulk_convert_images_to_jpg_warn_anim: 'Animierte Dateien: nur das erste Bild wird umgewandelt.',
	tool_bulk_convert_images_to_jpg_warn_edge: 'Eine Datei ist breiter oder höher als 8192 px — das wird langsam.',
	tool_bulk_convert_images_to_jpg_warn_large: 'Eine Datei ist größer als 25 MB — diesem Tab kann der Speicher ausgehen.',
};

export default de;
