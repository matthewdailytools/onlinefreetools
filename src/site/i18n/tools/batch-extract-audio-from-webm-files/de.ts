import type { SiteLangDict } from '../../../types';

/** Deutsch: Audio aus WebM-Dateien stapelweise extrahieren (Fallback ca. 500 MiB / 4 h pro Datei). */
const de: SiteLangDict = {
  tool_batch_extract_audio_from_webm_files_title: 'Audio aus WebM-Dateien stapelweise extrahieren',
  tool_batch_extract_audio_from_webm_files_desc:
    'Nur lokale WebM: nacheinander, Fehler überspringen, WAV/MP3-ZIP; ohne Server-Upload.',
  tool_batch_extract_audio_from_webm_files_description:
    'Nur lokale WebM nacheinander extrahieren und ZIP mit WAV oder MP3 laden. Schritte: .webm hinzufügen → Extrahieren → ZIP laden. Beispiel: Beispiel laden erzeugt zwei kurze WebM. Ca. 500 MiB / 4 h pro Datei (Fallback), kein MP4/MOV-Demux. Fehler werden übersprungen; Erfolge gepackt. Dateien bleiben auf dem Gerät. Kein YouTube. Eine WebM: Einzel-Tool. Mix MP4/MOV/MKV: Video-Hub-Batch.',
  tool_batch_extract_audio_from_webm_files_article:
    'Ordner mit WebM-Captures brauchen oft nur Sprache. Diese Seite reiht nur .webm, extrahiert nacheinander, überspringt Fehler und packt Erfolge. Kein YouTube, kein gemischter Hub-Batch.',
  tool_batch_extract_audio_from_webm_files_choose: 'WebM-Dateien wählen',
  tool_batch_extract_audio_from_webm_files_hint:
    'Bis 30 lokale .webm. Kein WebM → err_format. Ca. 500 MiB / 4 h pro Datei.',
  tool_batch_extract_audio_from_webm_files_list_label: 'WebM-Warteschlange',
  tool_batch_extract_audio_from_webm_files_convert: 'Extrahieren',
  tool_batch_extract_audio_from_webm_files_stop: 'Stopp',
  tool_batch_extract_audio_from_webm_files_download: 'ZIP herunterladen',
  tool_batch_extract_audio_from_webm_files_sample: 'Beispiel laden',
  tool_batch_extract_audio_from_webm_files_clear: 'Leeren',
  tool_batch_extract_audio_from_webm_files_advanced: 'Exportformat (optional)',
  tool_batch_extract_audio_from_webm_files_format_label: 'Ausgabeformat',
  tool_batch_extract_audio_from_webm_files_format_wav: 'WAV (16-Bit)',
  tool_batch_extract_audio_from_webm_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_webm_files_bitrate: 'MP3-Bitrate',
  tool_batch_extract_audio_from_webm_files_settings_hint:
    'WAV für kurze WebM. Längere können MP3-Streaming nutzen. Keine URL/YouTube.',
  tool_batch_extract_audio_from_webm_files_progress: 'Batch-Fortschritt',
  tool_batch_extract_audio_from_webm_files_read: 'Lesen',
  tool_batch_extract_audio_from_webm_files_decode: 'Abspielen',
  tool_batch_extract_audio_from_webm_files_extract: 'Extrahieren',
  tool_batch_extract_audio_from_webm_files_write: 'Schreiben',
  tool_batch_extract_audio_from_webm_files_pack: 'ZIP packen',
  tool_batch_extract_audio_from_webm_files_done: 'Fertig. Audio-ZIP laden.',
  tool_batch_extract_audio_from_webm_files_failed: 'Batch fehlgeschlagen. Beschädigte WebM entfernen oder weniger Dateien.',
  tool_batch_extract_audio_from_webm_files_elapsed: '{s}s vergangen',
  tool_batch_extract_audio_from_webm_files_preview: 'Batch-Ergebnis',
  tool_batch_extract_audio_from_webm_files_result: '{n} Audios gepackt · ZIP {output} KiB',
  tool_batch_extract_audio_from_webm_files_partial: 'OK {ok}, fehlgeschlagen {fail} · ZIP enthält Erfolge ({output} KiB)',
  tool_batch_extract_audio_from_webm_files_sample_name: 'batch-webm-demo',
  tool_batch_extract_audio_from_webm_files_empty: 'Mindestens eine WebM hinzufügen oder Beispiel laden.',
  tool_batch_extract_audio_from_webm_files_empty_state:
    'Keine WebM. .webm ablegen oder Beispiel laden. Kein YouTube, keine anderen Formate.',
  tool_batch_extract_audio_from_webm_files_remove: 'Entfernen',
  tool_batch_extract_audio_from_webm_files_queue_count: '{n} WebM in Warteschlange',
  tool_batch_extract_audio_from_webm_files_status_pending: 'Warten',
  tool_batch_extract_audio_from_webm_files_status_running: 'Extrahieren…',
  tool_batch_extract_audio_from_webm_files_status_ok: 'Fertig',
  tool_batch_extract_audio_from_webm_files_status_fail: 'Fehlgeschlagen',
  tool_batch_extract_audio_from_webm_files_status_stopped: 'Gestoppt',
  tool_batch_extract_audio_from_webm_files_err_file: 'Nur WebM-Dateien hinzufügen.',
  tool_batch_extract_audio_from_webm_files_err_format:
    'Nur .webm. MP4/MOV/MKV: Audio aus Videodateien stapelweise extrahieren.',
  tool_batch_extract_audio_from_webm_files_err_limit: 'Eine WebM überschritt ca. 500 MiB / 4 h; Zeile übersprungen.',
  tool_batch_extract_audio_from_webm_files_err_container: 'Eine WebM zu groß/lang (ca. 500 MiB / 4 h); Zeile übersprungen.',
  tool_batch_extract_audio_from_webm_files_err_codec: 'Audiocodec in einer WebM nicht unterstützt; Zeile übersprungen.',
  tool_batch_extract_audio_from_webm_files_err_channels: 'Kanallayout nicht unterstützt; Zeile übersprungen.',
  tool_batch_extract_audio_from_webm_files_err_decode: 'Audio aus einer WebM nicht dekodierbar; Zeile übersprungen.',
  tool_batch_extract_audio_from_webm_files_err_encoder: 'Audio konnte nicht geschrieben werden. Format prüfen.',
  tool_batch_extract_audio_from_webm_files_err_zip: 'ZIP konnte nicht erstellt werden. Weniger WebM versuchen.',
  tool_batch_extract_audio_from_webm_files_err_too_many: 'Warteschlangenlimit: 30 WebM.',
  tool_batch_extract_audio_from_webm_files_err_sample: 'WebM-Beispiel nicht erstellbar. Eigene .webm hinzufügen.',
  tool_batch_extract_audio_from_webm_files_err_unsupported: 'Browser hat kein Web Audio.',
  tool_batch_extract_audio_from_webm_files_err_empty: 'Kein brauchbares Audio in der Warteschlange.',
  tool_batch_extract_audio_from_webm_files_forced_mp3: 'Lange WebM nutzte MP3-Streaming in dieser Zeile.',
  tool_batch_extract_audio_from_webm_files_how_title: 'So extrahieren Sie Audio aus WebM-Dateien im Batch',
  tool_batch_extract_audio_from_webm_files_how_body:
    'Lokale WebM einreihen, nacheinander extrahieren, ZIP laden—ohne Upload oder URL.',
  tool_batch_extract_audio_from_webm_files_how_item_1: 'Mehrere .webm wählen oder Beispiel laden (zwei kurze WebM).',
  tool_batch_extract_audio_from_webm_files_how_item_2: 'Bei Bedarf MP3 im Exportformat wählen.',
  tool_batch_extract_audio_from_webm_files_how_item_3:
    'Extrahieren klicken; Lesen→Abspielen→Extrahieren→Schreiben; Stopp bricht Rest ab.',
  tool_batch_extract_audio_from_webm_files_how_item_4:
    'ZIP laden. Fehlzeilen übersprungen; ein Erfolg reicht zum Packen.',
  tool_batch_extract_audio_from_webm_files_why_choose_title: 'Warum Audio aus WebM-Dateien stapelweise extrahieren',
  tool_batch_extract_audio_from_webm_files_why_choose_item_1:
    'Nur WebM—passt zu Capture-Ordnern ohne MP4/MOV-Mix.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_2: 'Nacheinander vermeidet Speicherspitzen bei mehreren großen WebM.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_3: 'Status pro Zeile—eine kaputte WebM löscht nicht das ganze ZIP.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_4:
    'Riesige WebM mit Container-Meldung übersprungen; großer Demux auf MP4/MOV-Seiten.',
  tool_batch_extract_audio_from_webm_files_rules_title: 'WebM-Warteschlange, sequentiell, ZIP',
  tool_batch_extract_audio_from_webm_files_rules_body:
    'Jede WebM wird klassifiziert, abgespielt und ins ZIP geschrieben. Teil-ZIPs behalten Erfolge. Kein YouTube-zu-MP3.',
  tool_batch_extract_audio_from_webm_files_rules_item_1:
    'Bis 30 .webm; je ca. 500 MiB / 4 h. Großer Demux MP4/MOV auf Schwesterseiten.',
  tool_batch_extract_audio_from_webm_files_rules_item_2: 'Kein WebM → err_format. Mix: Hub-Batch.',
  tool_batch_extract_audio_from_webm_files_rules_item_3: 'Ein Fehler überspringt nur die Zeile; andere können packen.',
  tool_batch_extract_audio_from_webm_files_rules_item_4: 'Verarbeitung auf dem Gerät; kein Server-Upload.',
  tool_batch_extract_audio_from_webm_files_example_title: 'Echten WebM-Batch testen',
  tool_batch_extract_audio_from_webm_files_example:
    'Beispiel laden erzeugt zwei kurze WebM wenn möglich und packt ein ZIP.',
  tool_batch_extract_audio_from_webm_files_usecases_title: 'Wann es hilft',
  tool_batch_extract_audio_from_webm_files_usecase_1: 'Ordner voller WebM-Captures → ZIP im Stil WebM zu MP3.',
  tool_batch_extract_audio_from_webm_files_usecase_2: 'Browser-Exporte zu Audio ohne jeden Upload.',
  tool_batch_extract_audio_from_webm_files_usecase_3: 'Opus aus VP9-WebM holen, Originalvideos bleiben.',
  tool_batch_extract_audio_from_webm_files_faq_q1: 'YouTube-Playlist?',
  tool_batch_extract_audio_from_webm_files_faq_a1: 'Nein. Nur lokale WebM. Zuerst auf Gerät speichern.',
  tool_batch_extract_audio_from_webm_files_faq_q2: 'Nur eine WebM?',
  tool_batch_extract_audio_from_webm_files_faq_a2: 'Einzel-Tool Audio aus einer WebM-Datei. Diese Seite ist fürs ZIP.',
  tool_batch_extract_audio_from_webm_files_faq_q3: 'Ordner mit .mp4 und .webm?',
  tool_batch_extract_audio_from_webm_files_faq_a3: 'Hier nur .webm. Mix: Video-Hub-Batch.',
  tool_batch_extract_audio_from_webm_files_faq_q4: 'Bulk WebM zu MP3 online?',
  tool_batch_extract_audio_from_webm_files_faq_a4:
    'Ähnlich für lokale WebM: Opus erfassen und MP3/WAV-ZIP; keine URL.',
  tool_batch_extract_audio_from_webm_files_faq_q5: 'Warum nacheinander?',
  tool_batch_extract_audio_from_webm_files_faq_a5:
    'Mehrere WebM parallel dekodieren sprengt den Speicher. Sequentiell hält nur den aktuellen Blob.',
  tool_batch_extract_audio_from_webm_files_faq_q6: 'Werden Videos hochgeladen?',
  tool_batch_extract_audio_from_webm_files_faq_a6: 'Nein. Lesen, Erfassen und ZIP im Browser auf dem Gerät.',
};
export default de;
