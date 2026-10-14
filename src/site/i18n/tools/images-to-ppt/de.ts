/**
 * i18n tool shard (images-to-ppt / de).
 * 多图转 PowerPoint 德语：一图一页 PPTX，可选 16:9/4:3、contain/cover、背景色。
 */
import type { SiteLangDict } from '../../../types';

/** 德语文案字典。 */
const de: SiteLangDict = {
	tool_images_to_ppt_title: 'Bilder zu PowerPoint — Fotos als PPTX-Folien',
	tool_images_to_ppt_desc: 'Lokale Fotos in ein .pptx mit einer Folie pro Bild umwandeln.',
	tool_images_to_ppt_description:
		'Bilder in PowerPoint umwandeln: Mehrere Fotos werden im Browser zu einem .pptx — eine Folie pro Bild, 16:9 oder 4:3, contain oder cover. Schritte: Bilder wählen, In PowerPoint umwandeln, Herunterladen. Beispiel: drei Fotos → drei Folien. Dateien verlassen diesen Tab nicht.',
	tool_images_to_ppt_choose_files: 'Bilder wählen',
	tool_images_to_ppt_drop_hint: 'Oder mehrere JPEG-, PNG-, WebP- oder GIF-Dateien hier ablegen. Die Verarbeitung bleibt in diesem Tab.',
	tool_images_to_ppt_convert: 'In PowerPoint umwandeln',
	tool_images_to_ppt_download: 'Herunterladen',
	tool_images_to_ppt_sample: 'Beispiel laden',
	tool_images_to_ppt_clear: 'Leeren',
	tool_images_to_ppt_advanced: 'Erweiterte Einstellungen (optional)',
	tool_images_to_ppt_layout_label: 'Folienformat',
	tool_images_to_ppt_layout_16x9: 'Breitbild 16:9',
	tool_images_to_ppt_layout_4x3: 'Standard 4:3',
	tool_images_to_ppt_layout_hint: 'Die meisten modernen Beamer nutzen 16:9. Wählen Sie 4:3 für ältere Klassenzimmer-Decks.',
	tool_images_to_ppt_fit_label: 'Wie Bilder die Folie füllen',
	tool_images_to_ppt_fit_contain: 'Ganzes Bild einpassen (Letterbox)',
	tool_images_to_ppt_fit_cover: 'Folie füllen (Ränder können abgeschnitten werden)',
	tool_images_to_ppt_fit_hint: 'Contain hält jedes Pixel sichtbar. Cover füllt die Folie und kann hohe oder breite Fotos beschneiden.',
	tool_images_to_ppt_bg_label: 'Folienhintergrund',
	tool_images_to_ppt_bg_hint: 'Erscheint in den Letterbox-Streifen, wenn die Anpassung auf contain steht. Standard ist Weiß.',
	tool_images_to_ppt_progress: 'PowerPoint wird erstellt…',
	tool_images_to_ppt_step_encode: 'Bilder kodieren',
	tool_images_to_ppt_step_build: 'Folien bauen',
	tool_images_to_ppt_step_pack: 'PPTX packen',
	tool_images_to_ppt_encode_step: 'Bild {i} von {n} wird kodiert…',
	tool_images_to_ppt_build_step: 'Folien werden dem Deck hinzugefügt…',
	tool_images_to_ppt_pack_step: 'Die .pptx-Datei wird gepackt…',
	tool_images_to_ppt_elapsed: 'Vergangen {s}s',
	tool_images_to_ppt_move_up: 'Nach oben',
	tool_images_to_ppt_move_down: 'Nach unten',
	tool_images_to_ppt_remove: 'Entfernen',
	tool_images_to_ppt_empty: 'Fügen Sie zuerst mindestens ein Bild hinzu.',
	tool_images_to_ppt_err_decode: 'Bild konnte nicht dekodiert werden. Versuchen Sie JPEG, PNG oder WebP.',
	tool_images_to_ppt_err_convert: 'PowerPoint-Datei konnte nicht erstellt werden. Versuchen Sie weniger oder kleinere Bilder.',
	tool_images_to_ppt_err_lib: 'PPTX-Bibliothek konnte nicht geladen werden. Seite neu laden und erneut versuchen.',
	tool_images_to_ppt_warn_large: 'Große Datei (>25 MB) — die Umwandlung kann langsam sein.',
	tool_images_to_ppt_warn_edge: 'Eine Kante überschreitet ~8192 px — manche Browser können scheitern.',
	tool_images_to_ppt_warn_animation: 'Animiertes GIF: nur das erste Frame landet auf der Folie.',
	tool_images_to_ppt_status_converting: 'Wird in PowerPoint umgewandelt…',
	tool_images_to_ppt_status_done: 'Fertig — klicken Sie auf Herunterladen, um die .pptx zu speichern.',
	tool_images_to_ppt_stats_tpl: '{n} Folien → PPTX bereit ({bytes})',
	tool_images_to_ppt_how_title: 'So wandeln Sie Bilder in PowerPoint um',
	tool_images_to_ppt_how_body:
		'Jede Datei in der Liste wird zu einer Folie. Mit den Pfeilen neu ordnen, dann umwandeln. Optionale Einstellungen ändern Folienformat, Füllmodus und Letterbox-Farbe.',
	tool_images_to_ppt_how_item_1: 'Bilder wählen oder JPEG-, PNG-, WebP- bzw. GIF-Dateien in die Ablagezone ziehen.',
	tool_images_to_ppt_how_item_2: 'Mit Nach oben / Nach unten neu ordnen, wenn die Folienreihenfolge falsch ist. Entfernen Sie Unnötiges.',
	tool_images_to_ppt_how_item_3: 'Optional Erweiterte Einstellungen öffnen: 16:9 oder 4:3, contain oder cover und eine Hintergrundfarbe wählen.',
	tool_images_to_ppt_how_item_4: 'Auf In PowerPoint umwandeln klicken, den Fortschrittsbalken abwarten, dann Herunterladen.',
	tool_images_to_ppt_why_choose_title: 'Warum unsere Bilder-zu-PowerPoint-Werkzeuge',
	tool_images_to_ppt_why_choose_item_1: 'Eine Folie pro Foto, in Ihrer Reihenfolge — kein Cloud-Upload und kein Konto.',
	tool_images_to_ppt_why_choose_item_2: 'Breitbild 16:9 oder klassisch 4:3, damit das Deck zum Raumbeamer passt.',
	tool_images_to_ppt_why_choose_item_3: 'Contain zeigt das ganze Foto; Cover füllt die Folie, wenn Sie einen randlosen Look wollen.',
	tool_images_to_ppt_why_choose_item_4: 'Sanfte Warnungen bei Riesen-Dateien, langen Pixelkanten und animierten GIFs (nur erstes Frame).',
	tool_images_to_ppt_why_choose_item_5: 'Sichtbares Fortschritts-HUD, während jedes Bild kodiert und in die .pptx gepackt wird.',
	tool_images_to_ppt_rules_title: 'Regeln',
	tool_images_to_ppt_rules_body: 'Das Deck entsteht mit PptxGenJS vollständig in diesem Browser-Tab.',
	tool_images_to_ppt_rules_item_1: 'Standardlayout ist Breitbild 16:9; wechseln Sie in den Erweiterten Einstellungen zu 4:3, wenn nötig.',
	tool_images_to_ppt_rules_item_2: 'Die Folienreihenfolge folgt der Liste. Nutzen Sie Nach oben / Nach unten vor dem Umwandeln.',
	tool_images_to_ppt_rules_item_3: 'Contain letterboxt mit der Hintergrundfarbe; Cover beschneidet, um den Inhaltsrahmen zu füllen.',
	tool_images_to_ppt_rules_item_4: 'Animierte GIFs liefern nur das erste Frame. Titel und Übergänge werden nicht gesetzt — bearbeiten Sie die nach dem Download in PowerPoint.',
	tool_images_to_ppt_rules_item_5: 'Das Laden der PPTX-Bibliothek von dieser Seite lädt Ihre Fotos nicht auf unsere Server hoch.',
	tool_images_to_ppt_example_title: 'Beispiel',
	tool_images_to_ppt_example:
		'Beispiel laden erzeugt drei Farbblock-Folien (sample-a, sample-b, sample-c) in 16:9 mit contain. In PowerPoint umwandeln läuft im Browser; Herunterladen speichert images.pptx. Wechseln Sie zu 4:3 oder cover und wandeln Sie erneut um, um den Beschnitt zu vergleichen.',
	tool_images_to_ppt_usecases_title: 'Wann es sinnvoll ist',
	tool_images_to_ppt_usecase_1: 'Handy-Fotos schnell zu einem Vortragsdeck machen, ohne zuerst Desktop-PowerPoint zu öffnen.',
	tool_images_to_ppt_usecase_2: 'Produkt-Walkthroughs, in denen jeder Screenshot eine eigene randlose oder letterboxed Folie braucht.',
	tool_images_to_ppt_usecase_3: 'Klassen- oder Außeneinsatz-Fotos, die noch zu einem 4:3-Beamer passen müssen.',
	tool_images_to_ppt_usecase_4: 'Ein Entwurfsdeck aus Bildern bauen, bevor Sie Titel, Notizen und Animationen in PowerPoint oder LibreOffice Impress ergänzen.',
	tool_images_to_ppt_faq_q1: 'Werden meine Fotos hochgeladen?',
	tool_images_to_ppt_faq_a1:
		'Nein. Dekodieren, Folienlayout und PPTX-Packen laufen in Ihrem Browser-Tab. Die einzige Netzwerkanfrage lädt das PptxGenJS-Skript aus dem Vendor-Ordner dieser Seite.',
	tool_images_to_ppt_faq_q2: 'Brauche ich Microsoft PowerPoint installiert?',
	tool_images_to_ppt_faq_a2:
		'Nein. Jede App, die .pptx öffnet, reicht — PowerPoint, Google Slides (Datei → Importieren), LibreOffice Impress, Keynote und andere.',
	tool_images_to_ppt_faq_q3: 'Kann ich hier Titel oder Animationen hinzufügen?',
	tool_images_to_ppt_faq_a3:
		'Nicht auf dieser Seite. Exportieren Sie zuerst die Foto-Folien, öffnen Sie die Datei dann in PowerPoint (oder Impress) und ergänzen Sie Text, Übergänge und Notizen.',
	tool_images_to_ppt_faq_q4: 'Bilder zu PowerPoint oder Bilder zu PDF?',
	tool_images_to_ppt_faq_a4:
		'PPTX bleibt als Folien bearbeitbar. PDF ist fest für Handouts und Druck. Nutzen Sie das Werkzeug Bilder zu PDF, wenn Sie ein Dokument statt eines Decks brauchen.',
	tool_images_to_ppt_faq_q5: 'Contain oder cover — was wählen?',
	tool_images_to_ppt_faq_a5:
		'Contain (Standard) zeigt das ganze Foto mit Letterbox-Streifen in der Hintergrundfarbe. Cover füllt die Folie und kann Ränder abschneiden — nützlich für randlose Produktfotos.',
	tool_images_to_ppt_faq_q6: 'Was passiert mit animierten GIFs?',
	tool_images_to_ppt_faq_a6:
		'Nur das erste Frame landet auf der Folie. PowerPoint spielt Mehrframe-GIFs aus diesem Export nicht als Animation ab.',
	tool_images_to_ppt_faq_q7: 'Warum ist die Umwandlung langsam oder schlägt fehl?',
	tool_images_to_ppt_faq_a7:
		'Sehr große Dateien (>25 MB) oder Kanten über ~8192 px belasten den Browser. Verkleinern oder komprimieren Sie die Bilder und wandeln Sie bei Bedarf mit weniger Dateien erneut um.',
	tool_images_to_ppt_article: 'Bilder im Browser in ein PowerPoint-PPTX-Deck umwandeln',
	tool_images_to_ppt_references: 'PptxGenJS- und MDN-Blob-Referenzen für den clientseitigen Exportweg.',
	tool_images_to_ppt_ref_a_label: 'PptxGenJS — JavaScript-PowerPoint-Bibliothek',
	tool_images_to_ppt_ref_b_label: 'MDN — Blob',
};

export default de;
