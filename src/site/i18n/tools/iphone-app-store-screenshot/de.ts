/**
 * i18n tool shard (iphone-app-store-screenshot / de).
 * H1 locked to “iPhone 6.9 Screenshot-Größe”; 6.7 nur in der FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Eigenständiger Text für Suchen nach Screenshot-Größe / App-Store-Vorgaben. */
const de: SiteLangDict = {
	/** Kurztext auf der Seite: Export und Datenschutz. */
	tool_iphone_app_store_screenshot_article:
		'Exportieren Sie einen Screenshot in die aktuellen iPhone-6.9-Pixel der App Store und laden Sie ein JPEG oder ein ZIP mit allen drei Größen. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	/** Dateiauswahl. */
	tool_iphone_app_store_screenshot_choose_image: 'Screenshot wählen',
	/** Leeren. */
	tool_iphone_app_store_screenshot_clear: 'Leeren',
	/** Kurze Home-Kartenzeile. */
	tool_iphone_app_store_screenshot_desc:
		'App-Store-Screenshot für iPhone 6.9 als 1320×2868 exportieren — bleibt auf dem Gerät, ohne Server-Upload.',
	/** Meta: muss Beispiel enthalten und ≥120 Zeichen. */
	tool_iphone_app_store_screenshot_description:
		'iPhone 6.9 Screenshot-Größe: Screenshot wählen, auf 1320×2868 füllen (oder 1290×2796 / 1260×2736) und JPEG herunterladen. Beispiel: Beim Öffnen ist die Probe schon auf die vorgeschriebene 6,9-Zoll-Größe zugeschnitten. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen. 6,7-Zoll-Maße sind in 6.9 aufgegangen. Das ist keine App Review.',
	/** JPEG-Download. */
	tool_iphone_app_store_screenshot_download: 'JPEG herunterladen',
	/** ZIP aller Größen. */
	tool_iphone_app_store_screenshot_download_zip: 'ZIP aller Größen herunterladen',
	/** Drop-Hinweis. */
	tool_iphone_app_store_screenshot_drop_hint: 'Einen Screenshot ablegen. Füllen kann die Ränder beschneiden.',
	/** Leerzustand. */
	tool_iphone_app_store_screenshot_empty: 'Zuerst einen Screenshot wählen.',
	/** Decode-Fehler. */
	tool_iphone_app_store_screenshot_err_decode: 'Bild nicht lesbar. PNG- oder JPEG-Screenshot versuchen.',
	/** ZIP-Engine fehlgeschlagen. */
	tool_iphone_app_store_screenshot_err_fflate: 'ZIP-Engine nicht geladen. Netz prüfen und erneut versuchen.',
	/** Example-Text. */
	tool_iphone_app_store_screenshot_example:
		'Beispiel laden zeichnet ein Hochformat-Platzhalterbild, füllt 1320×2868 und aktiviert JPEG herunterladen. Die anderen 6.9-Größen sind Chips; das ZIP packt alle drei.',
	/** Example-Überschrift. */
	tool_iphone_app_store_screenshot_example_title: 'Beispiel',
	tool_iphone_app_store_screenshot_faq_a1:
		'Nein. Die Bytes bleiben in diesem Tab. Nichts geht an Apple oder auf unsere Server.',
	tool_iphone_app_store_screenshot_faq_a2:
		'Die aktuell vorgeschriebene iPhone-Klasse ist 6,9 Zoll. Ältere 6,7-Zoll-Pixelisten sind in diesen drei Größen aufgegangen.',
	tool_iphone_app_store_screenshot_faq_a3:
		'Standard ist 1320×2868. 1290×2796 und 1260×2736 sind die anderen akzeptierten 6.9-Paare. Eine wählen oder ein ZIP aller drei laden.',
	tool_iphone_app_store_screenshot_faq_a4:
		'Ja. Füllen skaliert, bis der Rahmen voll ist, und schneidet Überstand. Anderen Ausschnitt: zugehöriges Zuschneide-Tool.',
	tool_iphone_app_store_screenshot_faq_a5:
		'iPad-Screenshotgrößen stehen nicht auf dem ersten Screen. Hier gilt nur das Pflichtset iPhone 6.9.',
	tool_iphone_app_store_screenshot_faq_q1: 'Wird mein Screenshot hochgeladen?',
	tool_iphone_app_store_screenshot_faq_q2: 'Warum nicht iPhone 6.7 Screenshot-Größe?',
	tool_iphone_app_store_screenshot_faq_q3: 'Was sind 1320×2868, 1290×2796 und 1260×2736?',
	tool_iphone_app_store_screenshot_faq_q4: 'Werden die Ränder beschnitten?',
	tool_iphone_app_store_screenshot_faq_q5: 'Werden iPad-Screenshots exportiert?',
	tool_iphone_app_store_screenshot_how_body:
		'An die Vorgaben anpassen: 6,9-Zoll-Rahmen füllen, dann herunterladen. Extra-Größen sind Chips, kein zweites Designstudio.',
	tool_iphone_app_store_screenshot_how_item_1: 'Screenshot für das Pflichtset iPhone 6.9 wählen.',
	tool_iphone_app_store_screenshot_how_item_2: '1320×2868 lassen, außer Connect verlangt ein anderes 6.9-Paar.',
	tool_iphone_app_store_screenshot_how_item_3: 'JPEG herunterladen oder alle drei Größen ins ZIP packen.',
	tool_iphone_app_store_screenshot_how_item_4: 'Beispiel laden ist beim Öffnen schon gelaufen, damit das Füllen sofort sichtbar ist.',
	tool_iphone_app_store_screenshot_how_title: 'So geht’s',
	tool_iphone_app_store_screenshot_load_sample: 'Beispiel laden',
	tool_iphone_app_store_screenshot_out_size_label: 'Ausgabegröße',
	tool_iphone_app_store_screenshot_quality_label: 'JPEG-Qualität',
	tool_iphone_app_store_screenshot_rules_body:
		'App-Store-Screenshot-Export braucht exakte Pixel, Füllen und einen klaren Hinweis, dass 6.7 in 6.9 aufgegangen ist.',
	tool_iphone_app_store_screenshot_rules_item_1:
		'Standardleinwand ist 1320×2868. Die anderen akzeptierten 6.9-Zoll-Paare sind 1290×2796 und 1260×2736.',
	tool_iphone_app_store_screenshot_rules_item_2: 'Füllen (keine leeren Balken). Überstand wird beschnitten.',
	tool_iphone_app_store_screenshot_rules_item_3: 'Suchen nach 6,7 Zoll beantwortet die FAQ; das ist keine zweite Spezifikation.',
	tool_iphone_app_store_screenshot_rules_item_4: 'Das ist keine App Review. Apple kann Ausschnitt, Text oder Geräterahmen trotzdem ablehnen.',
	tool_iphone_app_store_screenshot_rules_title: 'Regeln, mit denen Sie rechnen sollten',
	tool_iphone_app_store_screenshot_size_2736: '1260×2736',
	tool_iphone_app_store_screenshot_size_2796: '1290×2796',
	tool_iphone_app_store_screenshot_size_2868: '1320×2868',
	tool_iphone_app_store_screenshot_status_done: 'Screenshot fertig — herunterladen oder Bild ersetzen.',
	tool_iphone_app_store_screenshot_status_working: 'Wird gefüllt…',
	/** H1 exakt wie 03-locale-briefs. */
	tool_iphone_app_store_screenshot_title: 'iPhone 6.9 Screenshot-Größe',
	tool_iphone_app_store_screenshot_usecase_1: 'Vor Connect: den Pflicht-Screenshot 6,9 Zoll exportieren.',
	tool_iphone_app_store_screenshot_usecase_2: 'Maße-Fehler: neu exportieren als 1320×2868 statt altem 6.7.',
	tool_iphone_app_store_screenshot_usecase_3: 'Alle drei 6.9-Paare ins ZIP für jemanden, der später hochlädt.',
	tool_iphone_app_store_screenshot_usecases_title: 'Passt gut, wenn',
};

export default de;
