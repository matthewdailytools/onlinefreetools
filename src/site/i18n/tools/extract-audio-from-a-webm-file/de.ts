import type { SiteLangDict } from '../../../types';

/**
 * Deutsch: Audio aus einer WebM-Datei extrahieren (nur .webm; Fallback ca. 500 MiB / 4 h).
 */
const de: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: 'Audio aus einer WebM-Datei extrahieren',
  tool_extract_audio_from_a_webm_file_desc:
    'Nur lokale WebM: Opus/Vorbis auf dem Gerät erfassen und als WAV oder MP3 speichern; MediaElement-Fallback ca. 500 MiB / 4 h—kein 5-GiB-Demux-Versprechen.',
  tool_extract_audio_from_a_webm_file_description:
    'Audiospur aus einer lokalen WebM im Browser extrahieren und WAV oder MP3 laden. Schritte: WebM wählen → Extrahieren → anhören → speichern. Beispiel: Beispiel laden erzeugt eine kurze WebM, wenn MediaRecorder verfügbar ist. Diese Seite nutzt den MediaElement-Fallback (ca. 500 MiB / 4 h); größere Dateien scheitern sofort mit Container-Meldung. Großer Demux für MP4/MOV liegt auf den Formatseiten oder im Video-Hub. Nur lokal—kein YouTube, keine URL. Kein Server-Upload. Viele WebM? Audio aus WebM-Dateien stapelweise extrahieren.',
  tool_extract_audio_from_a_webm_file_article:
    'Bildschirmaufnahmen und Browser-Captures sind oft WebM mit Opus. Diese Seite akzeptiert nur .webm, nutzt den gemeinsamen Fallback-Pfad und schreibt WAV oder MP3 ohne Upload. Kein ISOBMFF-Demux, kein Multi-GiB-OPFS-Streaming—das gilt für MP4/MOV. Keine YouTube-URLs. Gemischte Ordner: Hub oder Hub-Batch.',
  tool_extract_audio_from_a_webm_file_choose: 'WebM-Datei wählen',
  tool_extract_audio_from_a_webm_file_hint:
    'Eine lokale .webm ablegen. Fallback-Limit ca. 500 MiB / 4 h. Größere WebM scheitern mit klarer Container-Meldung—Remux nach MP4 für großen Demux oder Datei verkleinern.',
  tool_extract_audio_from_a_webm_file_convert: 'Extrahieren',
  tool_extract_audio_from_a_webm_file_download: 'Herunterladen',
  tool_extract_audio_from_a_webm_file_download_wav: 'WAV herunterladen',
  tool_extract_audio_from_a_webm_file_download_mp3: 'MP3 herunterladen',
  tool_extract_audio_from_a_webm_file_sample: 'Beispiel laden',
  tool_extract_audio_from_a_webm_file_clear: 'Leeren',
  tool_extract_audio_from_a_webm_file_advanced: 'Exportformat',
  tool_extract_audio_from_a_webm_file_format_label: 'Ausgabeformat',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV (16-Bit)',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'MP3-Bitrate',
  tool_extract_audio_from_a_webm_file_settings_hint:
    'WAV passt für kurze WebM. Längere Clips können MP3-Streaming nutzen. Limit ist der Fallback-Pfad (~500 MiB), nicht MP4-Demux. Keine URL.',
  tool_extract_audio_from_a_webm_file_progress: 'Extraktionsfortschritt',
  tool_extract_audio_from_a_webm_file_read: 'Lesen',
  tool_extract_audio_from_a_webm_file_decode: 'Abspielen',
  tool_extract_audio_from_a_webm_file_extract: 'Extrahieren',
  tool_extract_audio_from_a_webm_file_write: 'Schreiben',
  tool_extract_audio_from_a_webm_file_done: 'Fertig. Audio anhören, dann WAV oder MP3 speichern.',
  tool_extract_audio_from_a_webm_file_failed:
    'Extraktion fehlgeschlagen. Kleinere WebM versuchen, die der Browser dekodieren kann.',
  tool_extract_audio_from_a_webm_file_elapsed: '{s}s vergangen',
  tool_extract_audio_from_a_webm_file_preview: 'Extrahiertes Audio anhören',
  tool_extract_audio_from_a_webm_file_result: '{seconds}s · {channels} Kan. · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_a_webm_file_sample_name: 'kurz-webm-demo',
  tool_extract_audio_from_a_webm_file_empty: 'Zuerst WebM wählen oder Beispiel laden.',
  tool_extract_audio_from_a_webm_file_empty_state:
    'Noch keine Datei. Lokale .webm (~500 MiB) ablegen oder Beispiel laden. Kein YouTube.',
  tool_extract_audio_from_a_webm_file_err_file: 'Genau eine WebM-Datei ablegen.',
  tool_extract_audio_from_a_webm_file_err_format: 'Nicht unterstützt. Auf dieser Seite nur .webm (video/webm).',
  tool_extract_audio_from_a_webm_file_err_limit: 'Diese WebM überschreitet Größen- oder Dauerlimit des Fallback-Pfads.',
  tool_extract_audio_from_a_webm_file_err_container:
    'Diese WebM überschreitet das Fallback-Limit (ca. 500 MiB / 4 h) oder ist hier nicht dekodierbar. Remux nach MP4 für großen Demux oder kleinere WebM nutzen.',
  tool_extract_audio_from_a_webm_file_err_codec: 'Audiocodec dieser WebM wird im Fallback-Pfad nicht unterstützt.',
  tool_extract_audio_from_a_webm_file_err_channels: 'Kanallayout kann der Extraktor nicht verarbeiten.',
  tool_extract_audio_from_a_webm_file_err_decode: 'Browser konnte kein Audio aus dieser WebM dekodieren.',
  tool_extract_audio_from_a_webm_file_err_encoder: 'Audiodatei konnte nicht geschrieben werden. Erneut extrahieren.',
  tool_extract_audio_from_a_webm_file_err_sample: 'WebM-Beispiel konnte nicht erstellt werden. Eigene .webm ablegen.',
  tool_extract_audio_from_a_webm_file_err_unsupported: 'Dieser Browser hat kein Web Audio für Extraktion.',
  tool_extract_audio_from_a_webm_file_err_empty: 'Keine brauchbaren Audiosamples erfasst.',
  tool_extract_audio_from_a_webm_file_stop: 'Stopp',
  tool_extract_audio_from_a_webm_file_status_stopped: 'Gestoppt. Keine Teil-Audiodatei wird behalten.',
  tool_extract_audio_from_a_webm_file_forced_mp3: 'Lange/große Eingabe nutzte MP3-Streaming im Fallback-Pfad.',
  tool_extract_audio_from_a_webm_file_how_title: 'So extrahieren Sie Audio aus einer WebM-Datei',
  tool_extract_audio_from_a_webm_file_how_body:
    'Lokale WebM ablegen, WAV oder MP3 wählen, Extrahieren, anhören, speichern—ohne Upload oder URL.',
  tool_extract_audio_from_a_webm_file_how_item_1:
    'Lokale .webm wählen (~500 MiB) oder Beispiel laden, wenn MediaRecorder funktioniert.',
  tool_extract_audio_from_a_webm_file_how_item_2: 'Exportformat öffnen, WAV oder MP3 wählen; Bitrate bei Bedarf setzen.',
  tool_extract_audio_from_a_webm_file_how_item_3: 'Extrahieren klicken und Lesen → Abspielen → Extrahieren → Schreiben abwarten (oder Stopp).',
  tool_extract_audio_from_a_webm_file_how_item_4: 'Anhören, dann WAV oder MP3 herunterladen.',
  tool_extract_audio_from_a_webm_file_why_choose_title: 'Warum Audio aus einer WebM-Datei extrahieren',
  tool_extract_audio_from_a_webm_file_why_choose_item_1:
    'Nur WebM—Screen-Captures vermischen sich nicht mit MP4-Landingpages.',
  tool_extract_audio_from_a_webm_file_why_choose_item_2:
    'Ehrliche Fallback-Limits—kein falsches 5-GiB-Demux-Marketing für WebM.',
  tool_extract_audio_from_a_webm_file_why_choose_item_3: 'Verarbeitung bleibt auf dem Gerät; Stopp bricht ab.',
  tool_extract_audio_from_a_webm_file_why_choose_item_4: 'Hub und MP4/MOV-Großdatei-Seiten in der Nähe, wenn Demux nötig ist.',
  tool_extract_audio_from_a_webm_file_rules_title: 'Nur WebM und Fallback-Limits',
  tool_extract_audio_from_a_webm_file_rules_body:
    'Eine lokale WebM pro Lauf über MediaElement-Fallback. Kein YouTube-zu-MP3. Kein stummes Video exportieren.',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    'Ca. 500 MiB / 4 h Fallback. Darüber → Container-Meldung. Großer Demux heute nur MP4/MOV.',
  tool_extract_audio_from_a_webm_file_rules_item_2: 'Keine URL, kein YouTube-Download.',
  tool_extract_audio_from_a_webm_file_rules_item_3: 'Erfolg hängt von WebM/Opus-Unterstützung im Browser ab.',
  tool_extract_audio_from_a_webm_file_rules_item_4: 'Original-WebM wird nicht überschrieben. Batch-WebM im WebM-Batch-Tool.',
  tool_extract_audio_from_a_webm_file_example_title: 'Echte WebM-Extraktion testen',
  tool_extract_audio_from_a_webm_file_example:
    'Beispiel laden erzeugt kurze synthetische WebM, wenn MediaRecorder verfügbar ist, dann Extrahieren. Eigene .webm bevorzugen, wenn kein Beispiel.',
  tool_extract_audio_from_a_webm_file_usecases_title: 'Wann es hilft',
  tool_extract_audio_from_a_webm_file_usecase_1: 'Browser-WebM-Capture → teilbares MP3 ohne Upload.',
  tool_extract_audio_from_a_webm_file_usecase_2: 'WebM-Interviewclip braucht nur Opus-Spur als WAV.',
  tool_extract_audio_from_a_webm_file_usecase_3: 'Datei ist klar WebM—Formatsseite statt gemischtem Hub.',
  tool_extract_audio_from_a_webm_file_faq_q1: 'YouTube-URL einfügen?',
  tool_extract_audio_from_a_webm_file_faq_a1: 'Nein. Nur lokale .webm.',
  tool_extract_audio_from_a_webm_file_faq_q2: 'Warum nicht 5 GiB wie auf der MP4-Seite?',
  tool_extract_audio_from_a_webm_file_faq_a2:
    'Großer Demux ist ISOBMFF (MP4/MOV). WebM nutzt MediaElement-Fallback ca. 500 MiB, bis WebM-Demux existiert.',
  tool_extract_audio_from_a_webm_file_faq_q3: 'WebM stumm schalten (stummes Video)?',
  tool_extract_audio_from_a_webm_file_faq_a3: 'Nein. Nur Audio nach WAV/MP3 extrahieren.',
  tool_extract_audio_from_a_webm_file_faq_q4: 'Wird meine Datei hochgeladen?',
  tool_extract_audio_from_a_webm_file_faq_a4: 'Nein. Dekodierung und Schreiben laufen im Browser.',
  tool_extract_audio_from_a_webm_file_faq_q5: 'Viele WebM—welche Seite?',
  tool_extract_audio_from_a_webm_file_faq_a5: 'Audio aus WebM-Dateien stapelweise extrahieren für Erfolgs-ZIP.',
  tool_extract_audio_from_a_webm_file_faq_q6: 'Nach Extraktion trimmen?',
  tool_extract_audio_from_a_webm_file_faq_a6: 'Nicht hier. Laden und Audio-Clip trimmen und exportieren nutzen.',
};
export default de;
