/**
 * i18n-Shard (apple-touch-icon / de).
 * Suchnahe Neuformulierung: H1 apple-touch-icon 180×180; Dateien bleiben auf dem Gerät, kein Server-Upload.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche sichtbare Texte: Homescreen-Icon 180, optionales ZIP, deckender Hintergrund. */
const de: SiteLangDict = {
	tool_apple_touch_icon_article:
		'Aus dem Logo wird das Apple-Touch-Icon für den Homescreen: deckendes PNG 180×180. Braucht das Manifest mehr, kann das ZIP Favicon 32 sowie PWA 192/512 mitnehmen. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_apple_touch_icon_bg_label: 'Deckender Hintergrund',
	tool_apple_touch_icon_choose_image: 'Logo wählen',
	tool_apple_touch_icon_clear: 'Leeren',
	tool_apple_touch_icon_desc:
		'apple-touch-icon 180×180 als deckendes PNG; bleibt auf dem Gerät, ohne Server-Upload.',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180: Logo wählen, auf ein deckendes Quadrat setzen, PNG herunterladen. Beispiel: Beim Öffnen sitzt die Probe schon in 180×180. Schritte: wählen → 180 lassen → laden. Optionales ZIP mit Favicon 32 und PWA 192 / 512. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_apple_touch_icon_download: 'PNG herunterladen',
	tool_apple_touch_icon_download_zip: 'Größen-ZIP herunterladen',
	tool_apple_touch_icon_drop_hint: 'Ein Logo ablegen. Es wird auf einem deckenden Quadrat zentriert.',
	tool_apple_touch_icon_empty: 'Zuerst ein Logo wählen.',
	tool_apple_touch_icon_err_decode:
		'Bild nicht lesbar. PNG, JPEG oder eine Bitmap-Aufnahme des SVG versuchen.',
	tool_apple_touch_icon_err_fflate: 'ZIP-Engine nicht geladen. Netz prüfen und erneut versuchen.',
	tool_apple_touch_icon_example:
		'Beispiel laden zeichnet eine Platzhalter-Marke, setzt sie in 180×180 deckend und schaltet PNG herunterladen frei. Das ZIP ergänzt 32, 192 und 512.',
	tool_apple_touch_icon_example_title: 'Beispiel',
	tool_apple_touch_icon_faq_a1:
		'32 ist ein kleines Favicon-PNG. 192 und 512 sind übliche PWA-Icons. Sie liegen im ZIP; der Standard bleibt 180×180.',
	tool_apple_touch_icon_faq_a2:
		'Für den aktuellen iPhone-Homescreen ist 180×180 die praxisnahe Größe von apple-touch-icon.png vor dem link-Tag.',
	tool_apple_touch_icon_faq_a3:
		'Nein. Das Logo wird in diesem Tab dekodiert. Nichts geht auf unsere Server.',
	tool_apple_touch_icon_faq_a4:
		'Ein deckender Hintergrund (precomposed-ähnlich) verhindert, dass iOS Glanz über Transparenz legt.',
	tool_apple_touch_icon_faq_a5:
		'Ältere iPad-Maße 167 / 152 / 120 können ins ZIP. Der Standard-Export bleibt 180×180.',
	tool_apple_touch_icon_faq_q1: 'Wozu 32 und PWA 192/512?',
	tool_apple_touch_icon_faq_q2: 'Reicht 180×180 für das Apple-Touch-Icon?',
	tool_apple_touch_icon_faq_q3: 'Wird mein Logo hochgeladen?',
	tool_apple_touch_icon_faq_q4: 'Warum deckender Hintergrund?',
	tool_apple_touch_icon_faq_q5: 'Gibt es noch 167 oder 152?',
	tool_apple_touch_icon_how_body:
		'Nehmen Sie das Logo für „Zum Home-Bildschirm“, exportieren Sie das deckende PNG 180×180 und packen Sie bei Bedarf Extra-Größen ins ZIP.',
	tool_apple_touch_icon_how_item_1: 'Logo für apple-touch-icon 180×180 wählen.',
	tool_apple_touch_icon_how_item_2: '180 angehakt lassen, außer Sie brauchen 32 / 192 / 512.',
	tool_apple_touch_icon_how_item_3: 'Deckenden Hintergrund behalten, damit das Icon auf dem Homescreen nicht durchscheint.',
	tool_apple_touch_icon_how_item_4: 'PNG oder Größen-ZIP laden. Das Beispiel lief schon beim ersten Zeichnen.',
	tool_apple_touch_icon_how_title: 'So geht’s',
	tool_apple_touch_icon_load_sample: 'Beispiel laden',
	tool_apple_touch_icon_out_size_label: 'Ausgabegröße',
	tool_apple_touch_icon_rules_body:
		'Homescreen-Icons brauchen Quadrat, deckende Fläche und PNG 180 — kein komplettes ICO-Paket.',
	tool_apple_touch_icon_rules_item_1:
		'Standardfläche ist PNG 180×180. Das Logo wird enthalten (nicht gestreckt) und zentriert.',
	tool_apple_touch_icon_rules_item_2: 'Hintergrund ist deckend (Standard weiß). Transparenz wird absichtlich flachgelegt.',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 sind extra ZIP-Dateien und ändern den Standard-Export nicht.',
	tool_apple_touch_icon_rules_item_4: 'Kein ICO-Paket und keine browserconfig.xml.',
	tool_apple_touch_icon_rules_title: 'Regeln, die Sie erwarten dürfen',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'Icon fertig — herunterladen oder Logo tauschen.',
	tool_apple_touch_icon_status_working: 'Quadrat wird gezeichnet…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'Vor dem link-Tag apple-touch-icon.png in 180×180 für „Zum Home-Bildschirm“ exportieren.',
	tool_apple_touch_icon_usecase_2: 'Für eine PWA 192 und 512 aus dem ZIP ins Manifest.',
	tool_apple_touch_icon_usecase_3:
		'Will der Browser noch ein quadratisches Favicon-PNG 32, nehmen Sie es aus dem ZIP — ohne ICO-Paket.',
	tool_apple_touch_icon_usecases_title: 'Passt, wenn',
};

export default de;
