import type { SiteLangDict } from '../../../types';

/**
 * Deutsch: Mehrere lokale MOV-Dateien → Audio-ZIP (nur .mov, seriell, kein YouTube).
 * Suchrichtung: „mov audio extrahieren batch“, „mehrere mov zu mp3“.
 */
const de: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: 'Audio aus mehreren MOV-Dateien extrahieren',
	tool_batch_extract_audio_from_mov_files_desc:
		'Nur lokale MOV-Warteschlange: Datei für Datei, Fehler überspringen, WAV/MP3-ZIP. Kein Server-Upload.',
	tool_batch_extract_audio_from_mov_files_description:
		'Extrahiert Audio aus mehreren lokalen MOV-Dateien nacheinander im Browser und speichert ein WAV- oder MP3-ZIP. Ablauf: .mov hinzufügen → Extrahieren → ZIP laden. Beispiel: „Beispiel laden“ erzeugt zwei kurze synthetische MOVs und packt die Audios. Pro Datei gelten dieselben Demux+OPFS-Grenzen wie beim Einzel-MOV-Tool (mit OPFS ~5 GiB / 6 h, sonst ~1 GiB). Fehlzeilen übersprungen, Erfolge gepackt. Nur auf dem Gerät — kein Upload. Kein YouTube. Eine Datei → „Audio aus einer MOV-Datei extrahieren“. Gemischte MP4/WebM/MKV → „Audio aus Videodateien extrahieren (Batch)“.',
	tool_batch_extract_audio_from_mov_files_article:
		'Ordner mit Handy-MOVs brauchen oft nur die AAC-Spur. Diese Seite reiht nur .mov ein, lehnt andere Endungen ab, extrahiert seriell für stabile RAM und packt Erfolge in ein ZIP. Kein YouTube-Downloader und kein Hub für gemischte Container.',
	tool_batch_extract_audio_from_mov_files_choose: 'MOV-Dateien wählen',
	tool_batch_extract_audio_from_mov_files_hint:
		'Bis 30 lokale .mov. Andere Formate abgelehnt — siehe gemischter Batch. Pro Datei wie Einzel-MOV-Tool.',
	tool_batch_extract_audio_from_mov_files_list_label: 'MOV-Warteschlange',
	tool_batch_extract_audio_from_mov_files_convert: 'Extrahieren',
	tool_batch_extract_audio_from_mov_files_stop: 'Stopp',
	tool_batch_extract_audio_from_mov_files_download: 'ZIP herunterladen',
	tool_batch_extract_audio_from_mov_files_sample: 'Beispiel laden',
	tool_batch_extract_audio_from_mov_files_clear: 'Leeren',
	tool_batch_extract_audio_from_mov_files_advanced: 'Exportformat (optional)',
	tool_batch_extract_audio_from_mov_files_format_label: 'Ausgabeformat',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV (16 Bit)',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'MP3-Bitrate',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'Kurze MOVs: Standard WAV. Große Dateien können zeilenweise Streaming-MP3 erzwingen. Keine URL/YouTube.',
	tool_batch_extract_audio_from_mov_files_progress: 'Fortschritt Batch-MOV-Audio',
	tool_batch_extract_audio_from_mov_files_read: 'Lesen',
	tool_batch_extract_audio_from_mov_files_decode: 'Demux',
	tool_batch_extract_audio_from_mov_files_extract: 'Extrahieren',
	tool_batch_extract_audio_from_mov_files_write: 'Schreiben',
	tool_batch_extract_audio_from_mov_files_pack: 'ZIP packen',
	tool_batch_extract_audio_from_mov_files_done: 'Fertig. ZIP mit extrahiertem Audio laden.',
	tool_batch_extract_audio_from_mov_files_failed: 'Batch fehlgeschlagen. Defekte MOVs entfernen oder weniger Dateien wählen.',
	tool_batch_extract_audio_from_mov_files_elapsed: 'Verstrichen {s} s',
	tool_batch_extract_audio_from_mov_files_preview: 'Batch-Ergebnis',
	tool_batch_extract_audio_from_mov_files_result: '{n} Audios gepackt · ZIP {output} KiB',
	tool_batch_extract_audio_from_mov_files_partial: '{ok} ok, {fail} fehlgeschlagen · ZIP nur Erfolge ({output} KiB)',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: 'Mindestens eine MOV hinzufügen oder Beispiel laden.',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'Noch keine MOVs. Lokale .mov ablegen oder Beispiel laden. Kein YouTube, keine Nicht-MOV-Dateien.',
	tool_batch_extract_audio_from_mov_files_remove: 'Entfernen',
	tool_batch_extract_audio_from_mov_files_queue_count: '{n} MOVs in der Warteschlange',
	tool_batch_extract_audio_from_mov_files_status_pending: 'Wartend',
	tool_batch_extract_audio_from_mov_files_status_running: 'Extrahiere…',
	tool_batch_extract_audio_from_mov_files_status_ok: 'Fertig',
	tool_batch_extract_audio_from_mov_files_status_fail: 'Fehlgeschlagen',
	tool_batch_extract_audio_from_mov_files_status_stopped: 'Gestoppt',
	tool_batch_extract_audio_from_mov_files_err_file: 'Nur .mov-Dateien hinzufügen.',
	tool_batch_extract_audio_from_mov_files_err_format:
		'Nur .mov. Für MP4, WebM oder MKV: gemischter Video-Batch.',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'MOV über Demux-Grenze (mit OPFS ~5 GiB / 6 h, sonst ~1 GiB). Zeile übersprungen.',
	tool_batch_extract_audio_from_mov_files_err_container:
		'Kein demuxbares ISOBMFF-MOV. Zeile übersprungen.',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'MOV mit Audio-Codec, den dieser Pfad nicht dekodiert. Zeile übersprungen.',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'MOV mit nicht unterstütztem Kanallayout. Zeile übersprungen.',
	tool_batch_extract_audio_from_mov_files_err_decode: 'Browser konnte Audio aus dem MOV nicht dekodieren. Zeile übersprungen.',
	tool_batch_extract_audio_from_mov_files_err_encoder: 'Audio-Export fehlgeschlagen. Format prüfen und erneut extrahieren.',
	tool_batch_extract_audio_from_mov_files_err_zip: 'ZIP konnte nicht erstellt werden. Weniger MOVs wählen.',
	tool_batch_extract_audio_from_mov_files_err_too_many: 'Maximal 30 MOVs in der Warteschlange.',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'Beispiel-MOVs in diesem Browser nicht erzeugbar. Eigene .mov ablegen.',
	tool_batch_extract_audio_from_mov_files_err_unsupported: 'Web Audio für die Extraktion fehlt.',
	tool_batch_extract_audio_from_mov_files_err_empty: 'Kein nutzbares Audio in der MOV-Warteschlange.',
	tool_batch_extract_audio_from_mov_files_forced_mp3: 'Lange/große MOV in dieser Zeile erzwang Streaming-MP3.',
	tool_batch_extract_audio_from_mov_files_how_title: 'Audio aus mehreren MOV-Dateien extrahieren',
	tool_batch_extract_audio_from_mov_files_how_body:
		'Lokale MOVs einreihen, Datei für Datei extrahieren, ZIP laden — ohne Upload und ohne URL-Paste.',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'Mehrere lokale .mov wählen oder „Beispiel laden“ für zwei kurze synthetische MOVs.',
	tool_batch_extract_audio_from_mov_files_how_item_2: 'Bei Bedarf unter „Exportformat“ MP3 und Bitrate wählen.',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'„Extrahieren“: Lesen → Demux → Extrahieren → Schreiben pro Datei. „Stopp“ bricht Rest ab.',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'Nach HUD-Fertig: „ZIP herunterladen“. Fehlzeilen übersprungen; ab ≥1 Erfolg wird gepackt.',
	tool_batch_extract_audio_from_mov_files_why_choose_title: 'Warum dieser MOV-Batch?',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'Nur MOV — kein stilles Mischen von MP4/WebM/MKV in einem „mehrere mov zu mp3“-Ordner.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'Serielle Extraktion hält RAM stabil bei GiB-großen Handy-MOVs mit AAC in ISOBMFF.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'Zeilenstatus Wartend/Extrahiere/Fertig/Fehlgeschlagen — eine kaputte MOV zerstört nicht das ganze ZIP.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'„Stopp“ bricht ab. ZIP-Download bleibt aus, bis ein echtes Archiv existiert.',
	tool_batch_extract_audio_from_mov_files_rules_title: 'MOV-Warteschlange, seriell, ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'Jede MOV klassifizieren, einzeln extrahieren, in ZIP legen. Teilerfolge bleiben. Kein YouTube→MP3, keine stumme Video-Neuencodierung.',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'Bis 30 .mov; je Datei Demux-Grenze (mit OPFS ~5 GiB / 6 h).',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'Nicht-MOV beim Einreihen abgelehnt — MP4/WebM/MKV → gemischter Hub.',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'Zeilenfehler nur diese Zeile; ab einer erfolgreichen Datei wird gepackt.',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'Alles im Browser auf dem Gerät — kein Server-Upload.',
	tool_batch_extract_audio_from_mov_files_example_title: 'Echten MOV-Batch testen',
	tool_batch_extract_audio_from_mov_files_example:
		'Beispiel laden erzeugt zwei kurze MOVs mit Ton (wenn MediaRecorder H.264+AAC kann), extrahiert und packt zwei Audios ins ZIP.',
	tool_batch_extract_audio_from_mov_files_usecases_title: 'Wann nutzen',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'Handy-MOV-Ordner ohne Cloud in ein Audio-ZIP im Stil „mov zu mp3 batch“.',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'Wochenscreen-MOVs zu teilbaren Audios — lokal, nicht von YouTube.',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'AAC aus Kameraschüssen sammeln und Original-MOVs unberührt lassen.',
	tool_batch_extract_audio_from_mov_files_faq_q1: 'Kann ich YouTube-URLs oder Playlists einfügen?',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'Nein. Nur lokale .mov per Drop oder Auswahl. Zuerst auf dem Gerät speichern.',
	tool_batch_extract_audio_from_mov_files_faq_q2: 'Ich habe nur eine MOV — diese Seite?',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'Eine Datei → Einzel-MOV-Tool. Diese Seite ist für mehrere MOVs und ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q3: 'Ordner mit .mov und .mp4 gemischt?',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'Hier nur .mov. Gemischte Container: „Audio aus Videodateien extrahieren (Batch)“.',
	tool_batch_extract_audio_from_mov_files_faq_q4: 'Ist das ein Online-„mov zu mp3 batch“?',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'Gleiche Absicht für lokale MOVs: AAC demuxen, MP3/WAV-ZIP auf dem Gerät — ohne URL.',
	tool_batch_extract_audio_from_mov_files_faq_q5: 'Warum seriell statt parallel?',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'Paralleles Dekodieren sprengt den RAM. Seriell hält nur das aktuelle Audio fürs ZIP im Speicher.',
	tool_batch_extract_audio_from_mov_files_faq_q6: 'Werden Videos auf einen Server hochgeladen?',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'Nein. Lesen, Demux und ZIP laufen im Browser auf Ihrem Gerät.',
};
export default de;
