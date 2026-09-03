/**
 * i18n-Fragment (bulk-compress-png-images / de).
 * Die H1 folgt der Suche «PNG-Bilder in Masse komprimieren».
 */
import type { SiteLangDict } from '../../../types';

/** Deutsch: transparente Logo-PNG bleiben PNG auf dem Gerät, ohne Server-Upload. */
const de: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'Komprimieren Sie in diesem Tab einen Ordner Logo- oder UI-PNG, behalten Sie die Transparenz, überspringen Sie Fehler und laden Sie eine ZIP. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_compress_png_images_chip_1024: '1024 px',
	tool_bulk_compress_png_images_chip_reencode: 'Nur neu kodieren',
	tool_bulk_compress_png_images_choose_files: 'PNG-Bilder wählen',
	tool_bulk_compress_png_images_clear: 'Leeren',
	tool_bulk_compress_png_images_col_after: 'Danach',
	tool_bulk_compress_png_images_col_before: 'Davor',
	tool_bulk_compress_png_images_col_name: 'Datei',
	tool_bulk_compress_png_images_col_status: 'Status',
	tool_bulk_compress_png_images_compress: 'Alle komprimieren',
	tool_bulk_compress_png_images_desc:
		'PNG in Masse komprimieren, Transparenz behalten, ZIP holen — Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_compress_png_images_description:
		'PNG-Bilder in Masse komprimieren: Logos oder UI-Schnitte hinzufügen, Transparenz behalten, die längste Kante bei Bedarf deckeln, in diesem Tab als PNG neu speichern, Fehler überspringen, ZIP laden. Schritte: Stapel wählen, den 1024-px-Chip lassen wenn Icons schrumpfen sollen, alles komprimieren, Tabelle lesen. Beispiel: zwei Schachbrett-Proben bleiben PNG mit Löchern. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_compress_png_images_download_zip: 'ZIP herunterladen',
	tool_bulk_compress_png_images_drop_hint: 'PNG ablegen (bis 20). Andere Bilder kommen ebenfalls als PNG. Bleibt in diesem Tab.',
	tool_bulk_compress_png_images_empty: 'Zuerst PNG-Bilder hinzufügen.',
	tool_bulk_compress_png_images_err_decode: 'Dieses Bild ließ sich nicht dekodieren. Es wurde übersprungen.',
	tool_bulk_compress_png_images_err_encode: 'Dieses Bild ließ sich nicht als PNG schreiben. Es wurde übersprungen.',
	tool_bulk_compress_png_images_err_fflate: 'In diesem Browser ließ sich keine ZIP bauen. Versuchen Sie einen aktuellen Browser.',
	tool_bulk_compress_png_images_err_too_many: 'Höchstens 20 Dateien auf einmal. Extra-Dateien wurden nicht übernommen.',
	tool_bulk_compress_png_images_example:
		'Beispiel laden legt zwei transparente Schachbrett-PNG ab, kodiert sie als PNG neu, füllt die Tabelle und aktiviert ZIP herunterladen. Doppelte Namen werden name (2).png.',
	tool_bulk_compress_png_images_example_title: 'Beispiel',
	tool_bulk_compress_png_images_faq_a1:
		'Nein. Dekodieren und PNG-Schreiben laufen in diesem Tab. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Ein ZIP-Helfer kann von einem CDN kommen; Ihre Bilder verlassen den Tab nicht.',
	tool_bulk_compress_png_images_faq_a2:
		'Nein. Die Ausgabe ist immer PNG. Es gibt keine JPEG-Unterlage. Wenn JPEG für Produktfotos akzeptabel und kleiner sein soll, nutzen Sie Produktfotos in Masse komprimieren.',
	tool_bulk_compress_png_images_faq_a3:
		'Ja. Pixel werden ohne deckenden Hintergrund gezeichnet und als PNG gespeichert, Löcher bleiben Löcher.',
	tool_bulk_compress_png_images_faq_a4:
		'Oft, wenn Sie die längste Kante nicht verkleinern. Dieses Canvas-PNG ist kein Paletten-Optimierer. Indizierte Farben können nach dem Neu-Kodieren Bänder zeigen.',
	tool_bulk_compress_png_images_faq_a5:
		'Nein. Nur das erste Bild wird als stilles PNG gespeichert.',
	tool_bulk_compress_png_images_faq_q1: 'Wird beim PNG-Komprimieren auf einen Server hochgeladen?',
	tool_bulk_compress_png_images_faq_q2: 'Macht PNG online komprimieren daraus JPEG?',
	tool_bulk_compress_png_images_faq_q3: 'Geht PNG ohne Transparenzverlust?',
	tool_bulk_compress_png_images_faq_q4: 'Warum ist die Datei nach PNG verkleinern noch groß?',
	tool_bulk_compress_png_images_faq_q5: 'Bleibt ein animiertes GIF animiert?',
	tool_bulk_compress_png_images_file_count_tpl: '{n} Dateien in der Warteschlange',
	tool_bulk_compress_png_images_how_body:
		'Wenn die Dateien PNG bleiben müssen, teilen Sie bei Bedarf eine längste-Kante-Grenze, komprimieren Sie hier und nehmen Sie eine ZIP der gelungenen Dateien mit.',
	tool_bulk_compress_png_images_how_item_1: 'Wählen Sie die PNG-Logos oder UI-Schnitte, die Transparenz behalten müssen.',
	tool_bulk_compress_png_images_how_item_2: 'Den 1024-px-Chip nutzen, wenn Icons schrumpfen sollen; Nur neu kodieren, wenn die Pixelgröße bleiben muss.',
	tool_bulk_compress_png_images_how_item_3: 'Alle komprimieren drücken. Jede Zeile bleibt PNG. Fehler werden übersprungen, der Rest kommt ins Paket.',
	tool_bulk_compress_png_images_how_item_4: 'Wenn ein fotoähnliches PNG kaum schrumpft, warnt die Tabelle — JPEG auf der Produktfoto-Seite ist oft kleiner.',
	tool_bulk_compress_png_images_how_item_5: 'ZIP herunterladen, sobald mindestens eine Datei geklappt hat. Beispiel laden lief schon beim ersten Zeichnen.',
	tool_bulk_compress_png_images_how_title: 'So geht der Stapel',
	tool_bulk_compress_png_images_max_edge_label: 'Längste Kante',
	tool_bulk_compress_png_images_resize_on: 'Längste Seite begrenzen',
	tool_bulk_compress_png_images_rules_body:
		'Es wird kein JPEG-Hintergrund gemalt. Die Größe sinkt meist, wenn Sie die längste Kante verkleinern, nicht beim bloßen Neu-Speichern.',
	tool_bulk_compress_png_images_rules_item_1:
		'Das Ausgabe-MIME ist PNG. Alpha wird nicht flachgelegt. Kein Qualitätsschieber, weil PNG hier verlustfrei ist.',
	tool_bulk_compress_png_images_rules_item_2:
		'Die längste Seite skaliert proportional herunter und nie hoch. Nur neu kodieren behält die Pixelgröße und ändert Bytes oft kaum.',
	tool_bulk_compress_png_images_rules_item_3:
		'Ein Dekodier- oder Schreibfehler überspringt die Zeile. Doppelte ZIP-Namen werden name (2).png. Indizierte Paletten können Bänder zeigen.',
	tool_bulk_compress_png_images_rules_item_4:
		'Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_bulk_compress_png_images_rules_title: 'Was Sie erwarten sollten',
	tool_bulk_compress_png_images_sample: 'Beispiel laden',
	tool_bulk_compress_png_images_status_compressing: 'PNG-Stapel wird komprimiert…',
	tool_bulk_compress_png_images_status_done: 'Stapel fertig — Tabelle prüfen, dann ZIP holen.',
	tool_bulk_compress_png_images_status_ok: 'PNG bereit',
	tool_bulk_compress_png_images_status_same: 'Immer noch groß',
	tool_bulk_compress_png_images_status_skip: 'Übersprungen',
	tool_bulk_compress_png_images_summary_tpl: '{ok} bereit · {same} kaum kleiner · {skip} übersprungen',
	tool_bulk_compress_png_images_title: 'PNG-Bilder in Masse komprimieren',
	tool_bulk_compress_png_images_usecase_1: 'Ein Ordner transparenter Logos, die der Shop weiter als PNG ausliefern muss.',
	tool_bulk_compress_png_images_usecase_2: 'UI-Exporte, die vor der Übergabe dieselbe längste Kante brauchen.',
	tool_bulk_compress_png_images_usecase_3: 'Promo-Sticker mit Löchern; JPEG würde die Löcher mit einer Unterlage füllen.',
	tool_bulk_compress_png_images_usecases_title: 'Wann das passt',
	tool_bulk_compress_png_images_warn_anim: 'Animierte Dateien: nur das erste Bild wird als stilles PNG gespeichert.',
	tool_bulk_compress_png_images_warn_edge: 'Eine Datei ist breiter oder höher als 8192 px — rechnen Sie mit Wartezeit.',
	tool_bulk_compress_png_images_warn_large: 'Eine Datei ist größer als 25 MB — diesem Tab kann der Speicher ausgehen.',
	tool_bulk_compress_png_images_warn_same: 'Manche PNG sind kaum kleiner geworden. Längste Kante verkleinern, oder Produktfoto-Komprimierung nutzen wenn JPEG geht.',
};

export default de;
