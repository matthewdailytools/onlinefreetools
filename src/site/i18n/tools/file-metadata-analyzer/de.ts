/**
 * i18n tool shard (file-metadata-analyzer / de).
 */
import type { SiteLangDict } from '../../../types';

/** 德语文案键表。 */
const de: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: 'Analyse…',
	tool_file_metadata_analyzer_article:
		'Datei lokal ablegen oder wählen: Name, Größe, MIME und Änderungsdatum. Bilder: Breite×Höhe; Audio/Video: Dauer wenn decodierbar. Magic-Byte-Hinweise. Ohne Server-Upload; Dateien bleiben auf Ihrem Gerät.',
	tool_file_metadata_analyzer_choose_file: 'Datei wählen',
	tool_file_metadata_analyzer_clear: 'Leeren',
	tool_file_metadata_analyzer_decode_fail: 'Zusatz-Medienfelder nicht decodierbar — Basisinfos bleiben sichtbar.',
	tool_file_metadata_analyzer_desc:
		'Lokale Dateimetadaten prüfen — Größe, Typ, Abmessungen, Dauer. Ohne Server-Upload; auf dem Gerät.',
	tool_file_metadata_analyzer_description:
		'Datei-Metadaten-Analysator: Datei ablegen für Name, Bytes, MIME und Änderung. Bilder → Abmessungen; Audio/Video → Dauer. Magic-Byte: PNG, JPEG, GIF, WebP, PDF, ZIP, MP4. Beispiel: 16×16 PNG beim Laden. Tiefes EXIF → EXIF-Tool. Ohne Server-Upload.',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} px',
	tool_file_metadata_analyzer_drop_hint: 'Oder Datei hier ablegen. Analyse in diesem Tab.',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: 'Zuerst Datei wählen oder ablegen.',
	tool_file_metadata_analyzer_example:
		'Beispiel laden erzeugt PNG 16×16 sample-icon.png im Speicher. Tabelle ~100+ Bytes, image/png, 16×16 px, PNG-Hinweis — ohne Upload.',
	tool_file_metadata_analyzer_example_title: 'Beispiel',
	tool_file_metadata_analyzer_faq_a1: 'Nein. Datei wird per File API in diesem Tab gelesen. Kein Upload zu unseren Servern.',
	tool_file_metadata_analyzer_faq_a2:
		'Diese Seite: Container-Basics + Abmessungen/Dauer wenn möglich. EXIF-Tool liest/entfernt Kamera-Tags.',
	tool_file_metadata_analyzer_faq_a3: 'file.type kann leer sein. Größe und Name bleiben; Magic-Byte kann Typ vorschlagen.',
	tool_file_metadata_analyzer_faq_a4: 'Manche Codecs scheitern. File-API-Felder bleiben; Hinweiszeile erklärt.',
	tool_file_metadata_analyzer_faq_a5: 'Wir lesen ~12 Anfangsbytes (PNG, JPEG, GIF, WebP, PDF, ZIP, MP4). Hinweis, keine vollständige DB.',
	tool_file_metadata_analyzer_faq_q1: 'Wird meine Datei hochgeladen?',
	tool_file_metadata_analyzer_faq_q2: 'Unterschied zum EXIF-Tool?',
	tool_file_metadata_analyzer_faq_q3: 'Warum ist MIME leer?',
	tool_file_metadata_analyzer_faq_q4: 'Warum fehlen Abmessungen oder Dauer?',
	tool_file_metadata_analyzer_faq_q5: 'Was sind Magic-Byte-Hinweise?',
	tool_file_metadata_analyzer_field_decode_note: 'Decodier-Hinweis',
	tool_file_metadata_analyzer_field_dimensions: 'Abmessungen',
	tool_file_metadata_analyzer_field_duration: 'Dauer',
	tool_file_metadata_analyzer_field_magic: 'Magic-Byte-Hinweis',
	tool_file_metadata_analyzer_field_modified: 'Zuletzt geändert',
	tool_file_metadata_analyzer_field_name: 'Dateiname',
	tool_file_metadata_analyzer_field_size: 'Größe (Bytes)',
	tool_file_metadata_analyzer_field_size_human: 'Größe (lesbar)',
	tool_file_metadata_analyzer_field_type: 'MIME / Typ',
	tool_file_metadata_analyzer_how_body: 'Lokale Datei wählen. File-Felder, dann Vertiefung für Bilder/Medien wenn decodierbar.',
	tool_file_metadata_analyzer_how_item_1: 'Datei ablegen oder Datei wählen klicken.',
	tool_file_metadata_analyzer_how_item_2: 'Name, Bytes, lesbare Größe, MIME, Änderung in der Tabelle lesen.',
	tool_file_metadata_analyzer_how_item_3: 'Bilder: Breite×Höhe; Audio/Video: Dauer.',
	tool_file_metadata_analyzer_how_item_4: 'Beispiel laden oder Leeren zum Zurücksetzen.',
	tool_file_metadata_analyzer_how_title: 'So funktioniert es',
	tool_file_metadata_analyzer_load_sample: 'Beispiel laden',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'Metadaten-Ergebnisse',
	tool_file_metadata_analyzer_rules_body: 'Herkunft der Felder und Grenzen dieses Analysators.',
	tool_file_metadata_analyzer_rules_item_1: 'Name, Größe, type, lastModified vom File-Objekt.',
	tool_file_metadata_analyzer_rules_item_2: 'Bildabmessungen via createImageBitmap oder Image — gleicher Tab.',
	tool_file_metadata_analyzer_rules_item_3: 'Dauer via Media-Element; exotische Codecs können scheitern.',
	tool_file_metadata_analyzer_rules_item_4: 'Magic-Byte ist oberflächlich — kein Ersatz für Hash oder tiefes EXIF.',
	tool_file_metadata_analyzer_rules_title: 'Erwartete Regeln',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: 'Analyse abgeschlossen.',
	tool_file_metadata_analyzer_title: 'Datei-Metadaten-Analysator',
	tool_file_metadata_analyzer_usecase_1: '1920×1080 vor CMS-Upload bestätigen.',
	tool_file_metadata_analyzer_usecase_2: 'Dauer einer Sprachnotiz ohne Desktop-Tool prüfen.',
	tool_file_metadata_analyzer_usecase_3: 'MIME mit Magic-Byte vergleichen bei verdächtiger Endung.',
	tool_file_metadata_analyzer_usecases_title: 'Gute Einsätze',
	tool_file_metadata_analyzer_waiting: 'Datei wählen oder Beispiel laden.',
};

export default de;
