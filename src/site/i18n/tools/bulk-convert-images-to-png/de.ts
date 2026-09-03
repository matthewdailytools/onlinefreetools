/**
 * i18n-Shard (bulk-convert-images-to-png / de).
 * H1 folgt der Suche «Bilder in Masse nach PNG umwandeln».
 */
import type { SiteLangDict } from '../../../types';

/** Deutsch: Screenshots und Logos, die PNG mit Transparenz werden sollen; alltäglicher Werkzeugton. */
const de: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'Wenn die Abgabe PNG sein muss, wandeln Sie JPEG-Fotos, Screenshots und Logos mit Loch in diesem Tab um: Transparenz bleibt, wenn die Quelle sie hat, Fehler werden übersprungen, danach ein ZIP. JPEG zu PNG wird oft größer; die Tabelle markiert das. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_png_choose_files: 'Bilder wählen',
	tool_bulk_convert_images_to_png_clear: 'Leeren',
	tool_bulk_convert_images_to_png_col_after: 'Danach',
	tool_bulk_convert_images_to_png_col_before: 'Davor',
	tool_bulk_convert_images_to_png_col_name: 'Datei',
	tool_bulk_convert_images_to_png_col_status: 'Status',
	tool_bulk_convert_images_to_png_convert: 'Alle umwandeln',
	tool_bulk_convert_images_to_png_desc:
		'Bilder in Masse nach PNG umwandeln, Transparenz behalten wenn die Quelle sie hat, ZIP herunterladen; bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_png_description:
		'Bilder in Masse nach PNG umwandeln: legen Sie JPEGs oder Screenshots ab, kodieren Sie sie in diesem Tab als PNG ohne JPEG-Unterlage, überspringen Sie Fehler und laden Sie ein ZIP. Schritte: wählen Sie den Stapel, wandeln Sie alles um, sehen Sie in der Tabelle, ob ein JPEG als PNG gewachsen ist. Beispiel: ein undurchsichtiges Foto und ein Logo mit Loch werden zu .png. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_png_download_zip: 'ZIP herunterladen',
	tool_bulk_convert_images_to_png_drop_hint: 'JPEG, PNG, WebP oder GIF ablegen (bis 20). Die Umwandlung bleibt in diesem Tab.',
	tool_bulk_convert_images_to_png_empty: 'Zuerst Bilder hinzufügen.',
	tool_bulk_convert_images_to_png_err_decode: 'Diese Datei ließ sich nicht lesen. Übersprungen.',
	tool_bulk_convert_images_to_png_err_encode: 'Für diese Datei ließ sich kein PNG schreiben. Übersprungen.',
	tool_bulk_convert_images_to_png_err_fflate: 'Dieser Browser konnte das ZIP nicht bauen. Versuchen Sie einen aktuellen.',
	tool_bulk_convert_images_to_png_err_too_many: 'Höchstens 20 Bilder. Zusätzliche Dateien wurden nicht aufgenommen.',
	tool_bulk_convert_images_to_png_example:
		'Beispiel laden legt einen JPEG-Block und ein transparentes Logo ab, schreibt zwei .png und aktiviert ZIP herunterladen. Die JPEG-Zeile zeigt oft ein größeres PNG.',
	tool_bulk_convert_images_to_png_example_title: 'Beispiel',
	tool_bulk_convert_images_to_png_faq_a1:
		'Nein. Lesen und PNG-Schreiben laufen in diesem Tab. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Die ZIP-Hilfe kann von einem CDN kommen; Ihre Bilder verlassen den Tab nicht.',
	tool_bulk_convert_images_to_png_faq_a2:
		'Nein. JPEG hat nie Löcher gespeichert. JPG zu PNG gibt eine PNG-Hülle; der Hintergrund bleibt undurchsichtig. Echte Löcher überleben nur, wenn die Quelle schon Alpha hatte.',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG ist verlustfrei. Ein Foto-JPEG wird oft größer. Die Tabelle markiert „größer“. Pixel verkleinern Sie unter PNG-Bilder in Masse komprimieren, oder bleiben Sie bei JPEG, wenn Sie kein PNG brauchen.',
	tool_bulk_convert_images_to_png_faq_a4:
		'PNG komprimieren gilt für Dateien, die schon PNG sind und PNG bleiben sollen, nur kleiner. Diese Seite ändert die Endung zu PNG.',
	tool_bulk_convert_images_to_png_faq_a5:
		'Nein. Nur das erste Bild wird als stilles PNG gespeichert, und die Zeile wird vermerkt.',
	tool_bulk_convert_images_to_png_faq_q1: 'Werden Dateien auf einen Server hochgeladen?',
	tool_bulk_convert_images_to_png_faq_q2: 'Stellt JPG zu PNG Transparenz wieder her?',
	tool_bulk_convert_images_to_png_faq_q3: 'Warum ist das PNG größer als das JPEG?',
	tool_bulk_convert_images_to_png_faq_q4: 'Worin unterscheidet sich das vom PNG-Komprimieren?',
	tool_bulk_convert_images_to_png_faq_q5: 'Bleiben animierte GIFs animiert?',
	tool_bulk_convert_images_to_png_file_count_tpl: '{n} Bilder in der Warteschlange',
	tool_bulk_convert_images_to_png_how_body:
		'Wählen Sie Bilder, die PNG werden sollen, wandeln Sie sie hier ohne Unterlage um und nehmen Sie ein ZIP der gelungenen Dateien mit.',
	tool_bulk_convert_images_to_png_how_item_1: 'Wählen Sie Screenshots oder Logos, die PNG sein müssen.',
	tool_bulk_convert_images_to_png_how_item_2: 'Es gibt keine Weiß-Unterlage-Schalter — Löcher bleiben, wenn die Quelle Alpha hat.',
	tool_bulk_convert_images_to_png_how_item_3: 'Drücken Sie Alle umwandeln. JPEG wird undurchsichtiges PNG; die Tabelle warnt, wenn die Datei gewachsen ist.',
	tool_bulk_convert_images_to_png_how_item_4: 'JPG nötig? Bilder in Masse nach JPG umwandeln. Kleineres PNG? PNG-Bilder in Masse komprimieren.',
	tool_bulk_convert_images_to_png_how_item_5: 'ZIP herunterladen, sobald mindestens eine Datei gelungen ist. Beispiel laden lief schon beim Öffnen.',
	tool_bulk_convert_images_to_png_how_title: 'So werden daraus PNG-Dateien',
	tool_bulk_convert_images_to_png_max_edge_label: 'Längste Kante',
	tool_bulk_convert_images_to_png_resize_on: 'Längste Seite begrenzen',
	tool_bulk_convert_images_to_png_rules_body:
		'Die Ausgabe ist immer PNG. Diese Seite flacht Transparenz nicht auf eine JPEG-Unterlage.',
	tool_bulk_convert_images_to_png_rules_item_1:
		'Alpha bleibt, wenn die Quelle es hat. Eine JPEG-Quelle hat kein Alpha zum Behalten.',
	tool_bulk_convert_images_to_png_rules_item_2:
		'Die optionale Verkleinerung der langen Seite ist standardmäßig aus, damit die Umwandlung nicht heimlich skaliert.',
	tool_bulk_convert_images_to_png_rules_item_3:
		'Ist das PNG größer als das Original, sagt die Zeile das. Lesefehler werden übersprungen. Doppelte ZIP-Namen werden Name (2).png.',
	tool_bulk_convert_images_to_png_rules_item_4:
		'Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_convert_images_to_png_rules_title: 'Was Sie erwarten sollten',
	tool_bulk_convert_images_to_png_sample: 'Beispiel laden',
	tool_bulk_convert_images_to_png_status_compressing: 'Stapel wird nach PNG umgewandelt…',
	tool_bulk_convert_images_to_png_status_done: 'Stapel fertig — Tabelle prüfen, dann ZIP herunterladen.',
	tool_bulk_convert_images_to_png_status_larger: 'Größer als die Quelle',
	tool_bulk_convert_images_to_png_status_ok: 'PNG bereit',
	tool_bulk_convert_images_to_png_status_skip: 'Übersprungen',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} bereit · {larger} größer · {skip} übersprungen',
	tool_bulk_convert_images_to_png_title: 'Bilder in Masse nach PNG umwandeln',
	tool_bulk_convert_images_to_png_usecase_1: 'Screenshots als PNG für die Design-Übergabe ablegen.',
	tool_bulk_convert_images_to_png_usecase_2: 'Sticker als PNG vereinheitlichen, wenn die Quelle schon Löcher hat.',
	tool_bulk_convert_images_to_png_usecase_3: 'JPG zu PNG, wenn das CMS nur PNG nimmt — Foto-Dateien werden oft größer.',
	tool_bulk_convert_images_to_png_usecases_title: 'Passt gut, wenn',
	tool_bulk_convert_images_to_png_warn_anim: 'Animierte Dateien: nur das erste Bild wird als stilles PNG gespeichert.',
	tool_bulk_convert_images_to_png_warn_edge: 'Eine Datei ist breiter oder höher als 8192 px — das wird langsam.',
	tool_bulk_convert_images_to_png_warn_large: 'Eine Datei ist größer als 25 MB — diesem Tab kann der Speicher ausgehen.',
	tool_bulk_convert_images_to_png_warn_larger: 'Einige PNGs sind größer als das Original. Bei Foto-JPEGs ist das üblich.',
};

export default de;
