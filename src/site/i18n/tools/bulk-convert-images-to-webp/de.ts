/**
 * i18n-Shard (bulk-convert-images-to-webp / de).
 * H1 folgt der Suche «Bilder in Masse nach WebP umwandeln».
 */
import type { SiteLangDict } from '../../../types';

/** Deutsch: Website-Assets als lossy WebP mit Transparenz. */
const de: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'Wenn die Website WebP braucht, wandeln Sie PNG-Logos und Fotos in diesem Tab in lossy .webp um: Transparenz bleibt, wenn die Quelle sie hat, was dieser Browser nicht schreiben kann, wird übersprungen, danach ein ZIP. Manche Mails lehnen WebP noch ab — dann JPG. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_webp_chip_q80: 'Qualität 0.8',
	tool_bulk_convert_images_to_webp_choose_files: 'Bilder wählen',
	tool_bulk_convert_images_to_webp_clear: 'Leeren',
	tool_bulk_convert_images_to_webp_col_after: 'Danach',
	tool_bulk_convert_images_to_webp_col_before: 'Davor',
	tool_bulk_convert_images_to_webp_col_name: 'Datei',
	tool_bulk_convert_images_to_webp_col_status: 'Status',
	tool_bulk_convert_images_to_webp_convert: 'Alle umwandeln',
	tool_bulk_convert_images_to_webp_desc:
		'Bilder in Masse nach WebP umwandeln, lossy Qualität, Alpha wenn die Quelle sie hat, ZIP; bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_webp_description:
		'Bilder in Masse nach WebP umwandeln: legen Sie PNG-Logos oder Fotos ab, kodieren Sie lossy WebP in diesem Tab ohne JPEG-Unterlage, überspringen Sie, was dieser Browser nicht schreibt, laden Sie ein ZIP. Schritte: wählen Sie den Stapel, lassen Sie die Qualität bei etwa 0.8, wandeln Sie alles um. Beispiel: ein undurchsichtiges Foto und ein Logo mit Loch werden zu .webp. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_webp_download_zip: 'ZIP herunterladen',
	tool_bulk_convert_images_to_webp_drop_hint: 'JPEG, PNG, WebP oder GIF ablegen (bis 20). Die Umwandlung bleibt in diesem Tab.',
	tool_bulk_convert_images_to_webp_empty: 'Zuerst Bilder hinzufügen.',
	tool_bulk_convert_images_to_webp_err_decode: 'Diese Datei ließ sich nicht lesen. Übersprungen.',
	tool_bulk_convert_images_to_webp_err_encode: 'Für diese Datei ließ sich kein WebP schreiben. Übersprungen.',
	tool_bulk_convert_images_to_webp_err_fflate: 'Dieser Browser konnte das ZIP nicht bauen. Versuchen Sie einen aktuellen.',
	tool_bulk_convert_images_to_webp_err_too_many: 'Höchstens 20 Bilder. Zusätzliche Dateien wurden nicht aufgenommen.',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'Dieser Browser hat kein WebP-Blob zurückgegeben. Die Zeile wird übersprungen, kein JPEG geschrieben.',
	tool_bulk_convert_images_to_webp_example:
		'Beispiel laden legt einen undurchsichtigen Block und ein transparentes Logo ab, schreibt zwei .webp und aktiviert ZIP herunterladen. Das Loch im Logo bleibt.',
	tool_bulk_convert_images_to_webp_example_title: 'Beispiel',
	tool_bulk_convert_images_to_webp_faq_a1:
		'Nein. Lesen und WebP-Schreiben laufen in diesem Tab. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Die ZIP-Hilfe kommt von dieser Website; Ihre Bilder verlassen den Tab nicht.',
	tool_bulk_convert_images_to_webp_faq_a2:
		'Ja. PNG zu WebP ist diese Seite: Dateien wählen, Qualität bei etwa 0.8, alles umwandeln. Löcher bleiben, wenn das PNG Alpha hatte.',
	tool_bulk_convert_images_to_webp_faq_a3:
		'Manche Mail-Apps und CMS lehnen WebP noch ab. Für solche Anhänge nutzen Sie Bilder in Masse nach JPG umwandeln.',
	tool_bulk_convert_images_to_webp_faq_a4:
		'Diese Zeile wird übersprungen. Diese Seite schreibt kein JPEG heimlich. Versuchen Sie aktuelles Chrome, Edge oder Firefox.',
	tool_bulk_convert_images_to_webp_faq_a5:
		'Nein. Nur das erste Bild wird als stilles WebP gespeichert, und die Zeile wird vermerkt.',
	tool_bulk_convert_images_to_webp_faq_q1: 'Werden Dateien auf einen Server hochgeladen?',
	tool_bulk_convert_images_to_webp_faq_q2: 'Wie mache ich PNG zu WebP hier?',
	tool_bulk_convert_images_to_webp_faq_q3: 'Akzeptiert E-Mail diese WebP-Dateien?',
	tool_bulk_convert_images_to_webp_faq_q4: 'Was, wenn dieser Browser kein WebP schreiben kann?',
	tool_bulk_convert_images_to_webp_faq_q5: 'Bleiben animierte GIFs animiert?',
	tool_bulk_convert_images_to_webp_file_count_tpl: '{n} Bilder in der Warteschlange',
	tool_bulk_convert_images_to_webp_how_body:
		'Wählen Sie Bilder, die auf der Website WebP werden sollen, wandeln Sie sie hier ohne JPEG-Unterlage um und nehmen Sie ein ZIP der gelungenen Dateien mit.',
	tool_bulk_convert_images_to_webp_how_item_1: 'Wählen Sie Fotos oder PNG-Sticker, die auf der Website WebP sein müssen.',
	tool_bulk_convert_images_to_webp_how_item_2: 'Lassen Sie die Qualität bei etwa 0.8, außer Sie brauchen eine kleinere Datei. Keine JPEG-Unterlage.',
	tool_bulk_convert_images_to_webp_how_item_3: 'Drücken Sie Alle umwandeln. Ist toBlob kein WebP, scheitert die Zeile statt JPEG zu schreiben.',
	tool_bulk_convert_images_to_webp_how_item_4: 'JPG für E-Mail? Bilder in Masse nach JPG umwandeln. Verlustfreies PNG? Bilder in Masse nach PNG umwandeln.',
	tool_bulk_convert_images_to_webp_how_item_5: 'ZIP herunterladen, sobald mindestens eine Datei gelungen ist. Beispiel laden lief schon beim Öffnen.',
	tool_bulk_convert_images_to_webp_how_title: 'So werden daraus WebP-Dateien',
	tool_bulk_convert_images_to_webp_quality_label: 'WebP-Qualität',
	tool_bulk_convert_images_to_webp_rules_body:
		'Die Ausgabe ist immer WebP. Diese Seite flacht Transparenz nicht auf eine JPEG-Unterlage und fällt nicht auf JPEG zurück.',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'Alpha bleibt, wenn die Quelle es hat. Eine JPEG-Quelle hat kein Alpha zum Behalten.',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'Die Standardqualität ist 0.8. Senken Sie sie nur, wenn das Website-Budget eine kleinere Datei braucht.',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'Kann dieser Browser kein WebP schreiben, wird die Zeile übersprungen. Lesefehler werden übersprungen. Doppelte ZIP-Namen werden Name (2).webp.',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_webp_rules_title: 'Was Sie erwarten sollten',
	tool_bulk_convert_images_to_webp_sample: 'Beispiel laden',
	tool_bulk_convert_images_to_webp_status_compressing: 'Stapel wird nach WebP umgewandelt…',
	tool_bulk_convert_images_to_webp_status_done: 'Stapel fertig — Tabelle prüfen, dann ZIP herunterladen.',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP bereit',
	tool_bulk_convert_images_to_webp_status_skip: 'Übersprungen',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} bereit · {skip} übersprungen',
	tool_bulk_convert_images_to_webp_title: 'Bilder in Masse nach WebP umwandeln',
	tool_bulk_convert_images_to_webp_usecase_1: 'Helden und Miniaturen der Website ohne Formatmenü nach WebP bringen.',
	tool_bulk_convert_images_to_webp_usecase_2: 'PNG zu WebP für Sticker, die schon Löcher haben.',
	tool_bulk_convert_images_to_webp_usecase_3: 'Bei E-Mail JPEG behalten, wenn der Client WebP noch ablehnt.',
	tool_bulk_convert_images_to_webp_usecases_title: 'Passt gut, wenn',
	tool_bulk_convert_images_to_webp_warn_anim: 'Animierte Dateien: nur das erste Bild wird als stilles WebP gespeichert.',
	tool_bulk_convert_images_to_webp_warn_edge: 'Eine Datei ist breiter oder höher als 8192 px — das wird langsam.',
	tool_bulk_convert_images_to_webp_warn_large: 'Eine Datei ist größer als 25 MB — diesem Tab kann der Speicher ausgehen.',
};

export default de;
