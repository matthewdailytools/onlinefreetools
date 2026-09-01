/**
 * i18n-Shard für das Tool amazon-main-image-size (de).
 * H1 folgt der Suchphrase; Pixelmaße stehen in Beschreibung und FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Tool-Copy, neu formuliert (kein englisches Satzgerüst). */
const de: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'Legen Sie das Produktfoto auf ein weißes Quadrat und laden Sie das JPEG für das Hauptbild herunter. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_amazon_main_image_size_check_fill: 'Etwa 85 % des Rahmens füllen',
	tool_amazon_main_image_size_choose_image: 'Bild wählen',
	tool_amazon_main_image_size_clear: 'Leeren',
	tool_amazon_main_image_size_desc:
		'Amazon-Hauptbild 2000×2000 auf Weiß, Zoom-Prüfung 1000 px — bleibt auf Ihrem Gerät.',
	tool_amazon_main_image_size_description:
		'Amazon Hauptbildgröße: wählen Sie ein Produktfoto, exportieren Sie ein 2000×2000-JPEG auf weißem RGB-255-Hintergrund und prüfen Sie die Zoom-Untergrenze von 1000 px. Ein Beispiel: das Musterfoto sitzt bei etwa 85 % des Quadrats. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen. Das ist keine offizielle Seller-Central-Prüfung.',
	tool_amazon_main_image_size_download: 'JPEG herunterladen',
	tool_amazon_main_image_size_drop_hint: 'Ein Produktfoto ablegen. Die Verarbeitung bleibt in diesem Tab.',
	tool_amazon_main_image_size_empty: 'Zuerst ein Produktfoto wählen.',
	tool_amazon_main_image_size_err_decode: 'Das Bild ließ sich nicht lesen. Versuchen Sie JPEG, PNG oder WebP.',
	tool_amazon_main_image_size_example:
		'Beispiel laden zeichnet ein Platzhalter-Produkt, setzt es auf ein weißes 2000×2000-Quadrat bei etwa 85 % und aktiviert JPEG herunterladen. Der Zoom-Chip zeigt, dass die längste Kante über 1000 px liegt.',
	tool_amazon_main_image_size_example_title: 'Beispiel',
	tool_amazon_main_image_size_faq_a1:
		'Galerie- und A+-Bilder haben andere Aufgaben. Diese Seite liefert nur das Hauptbild. Für freie Zuschnitte nutzen Sie das verwandte Zuschneide-Tool.',
	tool_amazon_main_image_size_faq_a2:
		'Nein. Das Foto wird in diesem Browser-Tab dekodiert. Es wird weder auf unsere Server noch von hier zu Amazon hochgeladen.',
	tool_amazon_main_image_size_faq_a3:
		'Der Standard-Export ist 2000×2000. 1600 ist ein älteres, noch übliches Maß und bleibt als Chip. Pixelzahlen gehören nicht in die H1.',
	tool_amazon_main_image_size_faq_a4:
		'Amazon-Zoom verlangt meist mindestens 1000 Pixel auf der längsten Seite. Der Chip vergleicht die Exportkante mit dieser Untergrenze. Ein winziges Foto hochzurechnen kann die Zahl erfüllen und trotzdem weich wirken.',
	tool_amazon_main_image_size_faq_a5:
		'Hauptbilder erwartet man auf reinem Weiß. Die Seite füllt RGB 255,255,255 und kann das Produkt bei etwa 85 % des Quadrats halten, damit es nicht an den Rändern anliegt.',
	tool_amazon_main_image_size_faq_q1: 'Werden auch Zweitbilder exportiert?',
	tool_amazon_main_image_size_faq_q2: 'Wird mein Foto zu Amazon oder auf diese Website hochgeladen?',
	tool_amazon_main_image_size_faq_q3: 'Warum 2000×2000 statt 1600?',
	tool_amazon_main_image_size_faq_q4: 'Warum scheitert Zoom unter 1000 px?',
	tool_amazon_main_image_size_faq_q5: 'Weißer Hintergrund und 85 % des Rahmens?',
	tool_amazon_main_image_size_fill_label: 'Rahmenfüllung',
	tool_amazon_main_image_size_how_body:
		'Nehmen Sie das Foto, das Hauptbild werden soll, behalten Sie Weiß, exportieren Sie das Quadrat und lesen Sie den Zoom-Chip. Andere Maße sind nur Chips.',
	tool_amazon_main_image_size_how_item_1: 'Wählen Sie das Foto, das als Amazon-Hauptbild dienen soll.',
	tool_amazon_main_image_size_how_item_2: 'Lassen Sie 2000×2000 aktiv, außer Sie brauchen noch das ältere 1600-Quadrat.',
	tool_amazon_main_image_size_how_item_3: 'Behalten Sie die 85%-Passung, außer das Produkt füllt den Rahmen schon wie gewünscht.',
	tool_amazon_main_image_size_how_item_4: 'JPEG herunterladen und den Zoom-Untergrenzen-Chip lesen. Das Beispiel lief schon beim Öffnen.',
	tool_amazon_main_image_size_how_title: 'So geht’s',
	tool_amazon_main_image_size_load_sample: 'Beispiel laden',
	tool_amazon_main_image_size_out_size_label: 'Ausgabegröße',
	tool_amazon_main_image_size_quality_label: 'JPEG-Qualität',
	tool_amazon_main_image_size_rules_body:
		'Ein Hauptbild-Export im Browser braucht eine quadratische Fläche, Weißfüllung, eine Zoom-Untergrenze und die klare Grenze: keine offizielle Prüfung.',
	tool_amazon_main_image_size_rules_item_1:
		'Standardfläche 2000×2000. 1600×1600 ist optional. Das Foto wird enthalten (nicht gestreckt) auf RGB-255-Weiß gelegt.',
	tool_amazon_main_image_size_rules_item_2:
		'Die optionale 85%-Passung skaliert das Produkt im Quadrat, damit es die Kanten nicht berührt.',
	tool_amazon_main_image_size_rules_item_3:
		'Zoom-Chip: die längste Exportkante sollte ≥1000 px sein. Die Seite behauptet nicht, dass Amazon die Datei akzeptiert.',
	tool_amazon_main_image_size_rules_item_4:
		'Zweitbilder, Infografiken und A+ liegen außerhalb. Das ist nicht Seller Central.',
	tool_amazon_main_image_size_rules_title: 'Was Sie erwarten sollten',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'Hauptbild fertig — herunterladen oder Foto ersetzen.',
	tool_amazon_main_image_size_status_working: 'Quadrat wird aufgebaut…',
	tool_amazon_main_image_size_title: 'Amazon Hauptbildgröße',
	tool_amazon_main_image_size_usecase_1:
		'Neues Listing: machen Sie aus dem Handyfoto ein weißes Hauptbild, bevor Sie Seller Central öffnen.',
	tool_amazon_main_image_size_usecase_2:
		'Zoom kaputt: prüfen Sie, ob die längste Kante noch unter 1000 px liegt, dann erneut mit 2000 exportieren.',
	tool_amazon_main_image_size_usecase_3:
		'Ersetzen Sie ein kleines übernommenes Hauptbild; ist das JPEG schwer, weiter im verwandten Kompressor.',
	tool_amazon_main_image_size_usecases_title: 'Wann das passt',
	tool_amazon_main_image_size_zoom_fail: 'Längste Kante unter 1000 px — Zoom kann fehlschlagen.',
	tool_amazon_main_image_size_zoom_ok: 'Längste Kante erfüllt die Zoom-Untergrenze von 1000 px.',
	tool_amazon_main_image_size_zoom_label: 'Zoom-Untergrenze',
};

export default de;
