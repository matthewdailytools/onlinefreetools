/**
 * i18n tool shard (create-zip-file / de).
 * H1: Zip-Datei erstellen.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_create_zip_file_article:
		'Dateien in diesem Tab wählen, zu einem ZIP packen und herunterladen. Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen. Gzip ist ein Nebenmodus für eine Datei.',
	tool_create_zip_file_choose_files: 'Dateien wählen',
	tool_create_zip_file_clear: 'Leeren',
	tool_create_zip_file_desc:
		'Zip im Browser aus mehreren Dateien oder einem Ordnerpfad erstellen und herunterladen — ohne Upload.',
	tool_create_zip_file_description:
		'Zip-Datei erstellen: Dateien wählen (Ordnernamen bleiben, wenn der Browser einen Relativpfad liefert), ZIP belassen und herunterladen. Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen. Das Beispiel packt notes.txt, photo.png und docs/readme.md in sample.zip. Gzip ist ein Nebenmodus für eine Datei. ZIP mit Passwort ist eine FAQ-Grenze, kein Versprechen auf dem ersten Bildschirm.',
	tool_create_zip_file_download: 'ZIP herunterladen',
	tool_create_zip_file_drop_hint: 'Dateien hier ablegen. Ordner behalten Relativpfade, wenn der Browser sie liefert.',
	tool_create_zip_file_empty: 'Zuerst mindestens eine Datei wählen.',
	tool_create_zip_file_err_fflate: 'ZIP-Engine konnte nicht geladen werden. Netz prüfen und erneut versuchen.',
	tool_create_zip_file_err_gzip_many: 'Gzip packt eine Datei. Für mehrere auf ZIP wechseln oder nur eine behalten.',
	tool_create_zip_file_err_too_large: 'Dieser Satz ist zu groß für sicheres Packen im Browser. Dateien entfernen und erneut versuchen.',
	tool_create_zip_file_example:
		'Beispiel laden legt notes.txt, ein kleines photo.png und docs/readme.md an und baut sample.zip. ZIP herunterladen ist auf dem ersten Bildschirm bereit.',
	tool_create_zip_file_example_title: 'Beispiel',
	tool_create_zip_file_faq_a1:
		'Nein. Bytes werden in diesem Tab gelesen. Das Engine-Skript kann von einem CDN kommen, aber Ihre Dateien werden nicht auf unsere Server hochgeladen.',
	tool_create_zip_file_faq_a2:
		'Meldet der Browser webkitRelativePath (Ordner-Drop oder Verzeichniswahl), werden diese Pfade nach Entfernen von ../ zu ZIP-Einträgen. Das ist die Aufgabe „Ordner zippen“ auf dieser Seite.',
	tool_create_zip_file_faq_a3:
		'Diese Seite erzeugt oder knackt kein AES-ZIP auf dem ersten Bildschirm. ZIP mit Passwort bleibt FAQ-Grenze.',
	tool_create_zip_file_faq_a4:
		'Gzip nur bei einer Datei, wenn Sie .gz brauchen. Mehrere Dateien gehören ins ZIP. Gzip ist kein PDF-Kompressor.',
	tool_create_zip_file_faq_a5:
		'Sehr große Sätze können den Tab-Speicher sprengen. Die Seite warnt und stoppt. Zum Entpacken die verwandte Unzip-Seite nutzen.',
	tool_create_zip_file_faq_q1: 'Werden meine Dateien hochgeladen?',
	tool_create_zip_file_faq_q2: 'Kann ich einen Ordner zippen?',
	tool_create_zip_file_faq_q3: 'Erstellt das ein ZIP mit Passwort?',
	tool_create_zip_file_faq_q4: 'Wann Gzip statt ZIP?',
	tool_create_zip_file_faq_q5: 'Was ist mit riesigen Dateien, und wo entpacken?',
	tool_create_zip_file_file_count_label: 'Dateien',
	tool_create_zip_file_how_body:
		'Wählen Sie, was Sie als ein Archiv senden wollen, behalten Sie Ordnernamen, wenn der Browser den Pfad liefert, und laden Sie das ZIP. Gzip ist ein anderer Weg für eine Datei.',
	tool_create_zip_file_how_item_1: 'Dateien wählen, die als ein Zip rausgehen sollen — das ist die Aufgabe, kein zweites Entpacker-Tool.',
	tool_create_zip_file_how_item_2: 'Ordner ablegen, wenn der Browser Relativpfade behält; ../-Segmente werden entfernt.',
	tool_create_zip_file_how_item_3: 'ZIP (Standard) lassen und herunterladen. Das Beispiel hat beim Öffnen bereits drei Dateien gepackt.',
	tool_create_zip_file_how_item_4: 'Nur bei einer Datei und wenn Sie .gz wollen auf Gzip wechseln. Mehrere Dateien bleiben bei ZIP.',
	tool_create_zip_file_how_title: 'So funktioniert es',
	tool_create_zip_file_level_label: 'Kompressionsstufe',
	tool_create_zip_file_load_sample: 'Beispiel laden',
	tool_create_zip_file_mode_gzip: 'Gzip (eine Datei)',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: 'Größe nach dem Packen',
	tool_create_zip_file_rules_body:
		'Packen im Browser braucht Pfadbereinigung, ZIP-vs-Gzip-Trennung, eine Größengrenze und eine klare Passwortgrenze.',
	tool_create_zip_file_rules_item_1:
		'ZIP nutzt DEFLATE über zipSync von fflate. Stufe 0–9 ist optional; das Beispiel nutzt eine leichte Stufe für schnelles Erstbild.',
	tool_create_zip_file_rules_item_2:
		'Namen kommen vom Dateinamen oder webkitRelativePath. Führende Schrägstriche und ../ werden entfernt.',
	tool_create_zip_file_rules_item_3:
		'Gzip-Modus ruft gzipSync genau für eine Datei auf. Mehr als eine Datei muss ZIP nutzen.',
	tool_create_zip_file_rules_item_4:
		'ZIP mit Passwort ist nicht die Ausgabe des ersten Bildschirms. Diese Seite stellt verschlüsselte Archive nicht wieder her und knackt sie nicht.',
	tool_create_zip_file_rules_title: 'Erwartbare Regeln',
	tool_create_zip_file_status_done: 'Archiv bereit — herunterladen oder Dateien ersetzen.',
	tool_create_zip_file_status_packing: 'Wird gepackt…',
	tool_create_zip_file_title: 'Zip-Datei erstellen',
	tool_create_zip_file_usecase_1:
		'E-Mail: mehrere Anhänge vor dem Senden in ein Zip packen, ohne sie auf eine Pack-Website hochzuladen.',
	tool_create_zip_file_usecase_2:
		'Hausaufgabe: Notizordner und Screenshot zippen, wenn ein Archiv verlangt wird.',
	tool_create_zip_file_usecase_3:
		'Kleines Quellenpaket: Readme plus ein paar Dateien, dann das Zip auf der verwandten Datei-Hash-Seite prüfen.',
	tool_create_zip_file_usecases_title: 'Gute Einsätze',
};

export default de;
