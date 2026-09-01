/**
 * i18n-Fragment (ios-app-icon-size / de).
 * Lokales H1: iOS App Icon Größe; Standardjob ist das opake 1024-PNG für den App Store.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Texte: 1024-Abgabe, Größen-ZIP, bleibt auf dem Gerät. */
const de: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'Machen Sie aus dem Logo das opake 1024×1024-PNG, das der App Store verlangt. Bei Bedarf enthält das ZIP 180 fürs iPhone, 167 fürs iPad und 512 für Play. Dateien bleiben auf dem Gerät und werden nicht hochgeladen.',
	tool_ios_app_icon_size_bg_label: 'Opaker Hintergrund',
	tool_ios_app_icon_size_choose_image: 'Logo wählen',
	tool_ios_app_icon_size_clear: 'Leeren',
	tool_ios_app_icon_size_desc:
		'iOS App Icon Größe 1024×1024 als opakes PNG exportieren; bleibt auf dem Gerät, wird nicht hochgeladen.',
	tool_ios_app_icon_size_description:
		'iOS App Icon Größe: Logo wählen, auf ein opakes 1024×1024-Quadrat für App Store Connect legen, PNG speichern. Beispiel: Das Musterlogo sitzt beim Öffnen bereits auf 1024×1024. Optionale Chips liefern 180, 167 und Play 512 im ZIP. Dateien bleiben auf dem Gerät und werden nicht an einen Server geschickt.',
	tool_ios_app_icon_size_download: 'PNG speichern',
	tool_ios_app_icon_size_download_zip: 'Größen-ZIP speichern',
	tool_ios_app_icon_size_drop_hint: 'Ein quadratisches Logo ablegen. Es wird auf opaken Grund zentriert, ohne Rundmaske.',
	tool_ios_app_icon_size_empty: 'Zuerst ein Logo wählen.',
	tool_ios_app_icon_size_err_decode: 'Dieses Bild ließ sich nicht lesen. PNG oder JPEG versuchen.',
	tool_ios_app_icon_size_err_fflate: 'ZIP-Engine nicht geladen. Netz prüfen und erneut versuchen.',
	tool_ios_app_icon_size_example:
		'Beispiel laden zeichnet eine Marke, setzt sie auf 1024×1024 opak und schaltet PNG speichern frei. Das ZIP ergänzt 180, 167, Play 512 und kleinere Slots.',
	tool_ios_app_icon_size_example_title: 'Beispiel',
	tool_ios_app_icon_size_faq_a1:
		'Nein. Das Logo wird in diesem Tab dekodiert. Nichts geht auf unsere Server.',
	tool_ios_app_icon_size_faq_a2:
		'App Store Connect verlangt weiter ein 1024×1024-PNG ohne Transparenz. Das ist die Standard-iOS-App-Icon-Größe dieser Seite.',
	tool_ios_app_icon_size_faq_a3:
		'Das System setzt das Squircle. Das volle Quadrat exportieren; Ecken nicht vorher runden.',
	tool_ios_app_icon_size_faq_a4:
		'180 ist iPhone 60 pt @3x. 167 ist iPad Pro 83,5 pt @2x. Chips, kein zweites H1.',
	tool_ios_app_icon_size_faq_a5:
		'Play-High-Res 512 liegt im ZIP. Kein Adaptive-XML und keine eigene Pack-URL.',
	tool_ios_app_icon_size_faq_q1: 'Wird mein Logo hochgeladen?',
	tool_ios_app_icon_size_faq_q2: 'Warum 1024×1024?',
	tool_ios_app_icon_size_faq_q3: 'Soll ich die Ecken runden?',
	tool_ios_app_icon_size_faq_q4: 'Wozu 180 und 167?',
	tool_ios_app_icon_size_faq_q5: 'Wo ist das Google-Play-Icon?',
	tool_ios_app_icon_size_how_body:
		'Logo für den Store wählen, opakes 1024×1024-PNG exportieren, optional iPhone-, iPad- und Play-Größen zippen.',
	tool_ios_app_icon_size_how_item_1: 'Logo für die iOS App Icon Größe wählen — der Job ist das 1024-PNG des Stores.',
	tool_ios_app_icon_size_how_item_2: '1024 lassen, außer die Chips 180 / 167 / Play 512 werden gebraucht.',
	tool_ios_app_icon_size_how_item_3: 'Opaken Hintergrund behalten, damit Connect Transparenz nicht ablehnt.',
	tool_ios_app_icon_size_how_item_4: 'PNG oder Größen-ZIP speichern. Das Beispiel lief schon beim ersten Paint.',
	tool_ios_app_icon_size_how_title: 'So funktioniert es',
	tool_ios_app_icon_size_load_sample: 'Beispiel laden',
	tool_ios_app_icon_size_out_size_label: 'Ausgabegröße',
	tool_ios_app_icon_size_rules_body:
		'Store-Icons brauchen Quadrat, opake Füllung und eine klare Trennung von Website-apple-touch-icon-Seiten.',
	tool_ios_app_icon_size_rules_item_1:
		'Standardfläche ist 1024×1024 PNG. Das Logo wird enthalten und zentriert, nicht gestreckt.',
	tool_ios_app_icon_size_rules_item_2:
		'Hintergrund ist opak (Standard weiß). Alpha wird bewusst abgeflacht.',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 liegen im ZIP und ändern das H1 nicht.',
	tool_ios_app_icon_size_rules_item_4:
		'Kein Assets.xcassets-Projekt und kein Adaptive-Icon-Pack.',
	tool_ios_app_icon_size_rules_title: 'Regeln, die Sie erwarten sollten',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'Icon fertig — speichern oder Logo tauschen.',
	tool_ios_app_icon_size_status_working: 'Quadrat wird gezeichnet…',
	tool_ios_app_icon_size_title: 'iOS App Icon Größe',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect: 1024×1024-Icon exportieren, bevor Screenshots angehängt werden.',
	tool_ios_app_icon_size_usecase_2:
		'iPhone-Home: 180 aus dem ZIP nehmen, um 60 pt @3x zu prüfen.',
	tool_ios_app_icon_size_usecase_3:
		'Play-Listing: Chip 512 nutzen, ohne eine extra Pack-URL zu öffnen.',
	tool_ios_app_icon_size_usecases_title: 'Gute Einsätze',
};

export default de;
