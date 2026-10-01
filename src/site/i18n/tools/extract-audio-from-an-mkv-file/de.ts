import type { SiteLangDict } from '../../../types';

/**
 * Deutsch: Audio aus einer MKV-Datei extrahieren.
 * D1-Ehrlichkeit: MediaElement-Fallback ca. 500 MiB / 4 h; Multi-GiB oder DDP/Atmos → ffmpeg auf dem PC zu AAC-Stereo-MP4, dann MP4-Extraktionsseite.
 * Schlüssel 1:1 zur englischen Masterdatei; keine englischen Satzschablonen.
 */
const de: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'Audio aus einer MKV-Datei extrahieren',
  tool_extract_audio_from_an_mkv_file_desc:
    'Audio aus einer lokalen MKV im Browser als WAV oder MP3 speichern, wenn die Datei in den Fallback-Pfad (~500 MiB / 4 h) passt. Multi-GiB oder DDP/Atmos-MKV: zuerst am PC mit ffmpeg in AAC-MP4 umwandeln, dann „Audio aus einer MP4-Datei extrahieren“.',
  tool_extract_audio_from_an_mkv_file_description:
    'Audiospur aus einer lokalen MKV im Browser extrahieren und WAV oder MP3 herunterladen. Ablauf: MKV wählen → Extrahieren → anhören → speichern. Beispiel: Beispiel laden erzeugt bei funktionierendem MediaRecorder einen kurzen synthetischen Ersatz—besser eine echte .mkv unter etwa 500 MiB. Diese Seite nutzt den MediaElement-Fallback (~500 MiB / 4 h); zu große Dateien schlagen sofort mit err_container fehl. Multi-GiB-MKV oder Dolby Digital Plus / Atmos (E-AC-3) werden hier nicht unterstützt—am Computer ffmpeg zu AAC-Stereo-MP4 (Video kann copy), dann „Audio aus einer MP4-Datei extrahieren“ für großen Demux. Nur lokal—kein YouTube-URL-Download, kein Upload. Viele MKV? „Audio aus MKV-Dateien stapelweise extrahieren“.',
  tool_extract_audio_from_an_mkv_file_article:
    'Bildschirmaufnahmen liegen oft als MKV vor. Diese Seite akzeptiert nur .mkv, nutzt den gemeinsamen Fallback-Extraktionspfad und schreibt WAV oder MP3 ohne Upload. Kein ISOBMFF-Demux, kein Multi-GiB-OPFS-Streaming—das gilt für MP4/MOV mit AAC. E-AC-3 / DTS werden im Browser nicht dekodiert. Bei Multi-GiB-Rips oder Atmos-Spuren: ffmpeg auf dem Gerät zu AAC-MP4, dann MP4-Landing. Gemischte Ordner: Video-Hub oder Hub-Batch.',
  tool_extract_audio_from_an_mkv_file_choose: 'MKV-Datei wählen',
  tool_extract_audio_from_an_mkv_file_hint:
    'Eine lokale .mkv bis etwa 500 MiB / 4 h ablegen. Größer oder DDP/Atmos: am PC ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, dann „Audio aus einer MP4-Datei extrahieren“.',
  tool_extract_audio_from_an_mkv_file_convert: 'Extrahieren',
  tool_extract_audio_from_an_mkv_file_download: 'Herunterladen',
  tool_extract_audio_from_an_mkv_file_download_wav: 'WAV herunterladen',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'MP3 herunterladen',
  tool_extract_audio_from_an_mkv_file_sample: 'Beispiel laden',
  tool_extract_audio_from_an_mkv_file_clear: 'Leeren',
  tool_extract_audio_from_an_mkv_file_advanced: 'Exportformat',
  tool_extract_audio_from_an_mkv_file_format_label: 'Ausgabeformat',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV (16-Bit)',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'MP3-Bitrate',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    'WAV passt für kurze MKV. Längere Clips können MP3-Streaming nutzen. Obergrenze ist der Fallback (~500 MiB), nicht MP4-Demux. Keine URL.',
  tool_extract_audio_from_an_mkv_file_progress: 'Extraktionsfortschritt',
  tool_extract_audio_from_an_mkv_file_read: 'Lesen',
  tool_extract_audio_from_an_mkv_file_decode: 'Dekodieren',
  tool_extract_audio_from_an_mkv_file_extract: 'Extrahieren',
  tool_extract_audio_from_an_mkv_file_write: 'Schreiben',
  tool_extract_audio_from_an_mkv_file_done: 'Fertig. Audio anhören, dann WAV oder MP3 herunterladen.',
  tool_extract_audio_from_an_mkv_file_failed:
    'Extraktion fehlgeschlagen. Kleinere MKV versuchen oder zuerst mit ffmpeg in AAC-MP4 umwandeln.',
  tool_extract_audio_from_an_mkv_file_elapsed: '{s}s vergangen',
  tool_extract_audio_from_an_mkv_file_preview: 'Extrahiertes Audio anhören',
  tool_extract_audio_from_an_mkv_file_result: '{seconds}s · {channels} Kan. · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: 'kurz-mkv-audio-demo',
  tool_extract_audio_from_an_mkv_file_empty: 'Zuerst MKV wählen oder Beispiel laden.',
  tool_extract_audio_from_an_mkv_file_empty_state:
    'Noch keine Datei. Lokale .mkv bis etwa 500 MiB ablegen oder Beispiel laden. Multi-GiB / DDP: zuerst ffmpeg zu AAC-MP4. Kein YouTube.',
  tool_extract_audio_from_an_mkv_file_err_file: 'Genau eine MKV-Datei ablegen.',
  tool_extract_audio_from_an_mkv_file_err_format: 'Nicht unterstützt. Auf dieser Seite nur .mkv.',
  tool_extract_audio_from_an_mkv_file_err_limit: 'Diese MKV überschreitet Größen- oder Dauerlimit des Fallback-Pfads.',
  tool_extract_audio_from_an_mkv_file_err_container:
    'Diese MKV überschreitet das Fallback-Limit (~500 MiB / 4 h) oder ist hier nicht dekodierbar. Am Computer: ffmpeg zu AAC-Stereo-MP4 (Video copy), dann „Audio aus einer MP4-Datei extrahieren“—oder kleinere MKV nutzen.',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'Audiocodec dieser MKV wird im Browser nicht unterstützt (oft E-AC-3 / DDP / Atmos). Mit ffmpeg in MP4 nach AAC wandeln, dann MP4-Extraktionsseite.',
  tool_extract_audio_from_an_mkv_file_err_channels:
    'Kanalaufbau kann der Extraktor nicht verarbeiten. Zuerst in MP4 auf Stereo-AAC heruntermischen.',
  tool_extract_audio_from_an_mkv_file_err_decode: 'Der Browser konnte kein Audio aus dieser MKV dekodieren.',
  tool_extract_audio_from_an_mkv_file_err_encoder: 'Audiodatei konnte nicht geschrieben werden. Extrahieren erneut versuchen.',
  tool_extract_audio_from_an_mkv_file_err_sample: 'MKV-Beispiel konnte nicht erstellt werden. Eigene .mkv ablegen.',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'Dieser Browser hat kein Web Audio für die Extraktion.',
  tool_extract_audio_from_an_mkv_file_err_empty: 'Keine brauchbaren Audiosamples erfasst.',
  tool_extract_audio_from_an_mkv_file_stop: 'Stopp',
  tool_extract_audio_from_an_mkv_file_status_stopped: 'Gestoppt. Keine Teil-Audiodatei wird behalten.',
  tool_extract_audio_from_an_mkv_file_forced_mp3: 'Lange/große Eingabe nutzte MP3-Streaming im Fallback-Pfad.',
  tool_extract_audio_from_an_mkv_file_how_title: 'So extrahieren Sie Audio aus einer MKV-Datei',
  tool_extract_audio_from_an_mkv_file_how_body:
    'Kleine lokale MKV: ablegen, Extrahieren, herunterladen. Multi-GiB oder DDP/Atmos: zuerst am Gerät mit ffmpeg in AAC-MP4, dann MP4-Extraktionstool.',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    'Lokale .mkv bis etwa 500 MiB wählen oder Beispiel laden, wenn MediaRecorder funktioniert. Ist die Datei Multi-GiB oder DDP/Atmos, hier stoppen und zuerst mit ffmpeg konvertieren.',
  tool_extract_audio_from_an_mkv_file_how_item_2: 'Exportformat öffnen, WAV oder MP3 wählen; Bitrate bei Bedarf setzen.',
  tool_extract_audio_from_an_mkv_file_how_item_3: 'Extrahieren klicken und Lesen → Dekodieren → Extrahieren → Schreiben abwarten (oder Stopp).',
  tool_extract_audio_from_an_mkv_file_how_item_4: 'Anhören, dann WAV oder MP3 herunterladen.',
  tool_extract_audio_from_an_mkv_file_why_choose_title: 'Warum „Audio aus einer MKV-Datei extrahieren“ hier',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1: 'Nur MKV—Matroska-Dateien vermischen sich nicht mit MP4-Landingpages.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2: 'Ehrliche Fallback-Grenzen—kein falsches 5-GiB-Demux-Marketing für MKV.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3:
    'Klarer Weg bei zu großen/DDP-Dateien: ffmpeg am PC → AAC-MP4 → MP4-Extraktionsseite.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: 'Verarbeitung bleibt auf dem Gerät; Stopp bricht mitten im Lauf ab.',
  tool_extract_audio_from_an_mkv_file_rules_title: 'Nur MKV und Fallback-Limits',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'Eine lokale MKV pro Lauf über MediaElement-Fallback. Kein YouTube-zu-MP3. Kein stummes Video exportieren. Große oder exotische MKV brauchen zuerst AAC-MP4 auf dem Gerät.',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    'Ca. 500 MiB / 4 h Fallback. Darüber → err_container. Großer Demux heute nur MP4/MOV.',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'Keine URL, kein YouTube-Download.',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS scheitern meist mit err_codec. Beispiel am PC: ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, dann „Audio aus einer MP4-Datei extrahieren“.',
  tool_extract_audio_from_an_mkv_file_rules_item_4: 'Original-MKV wird nicht überschrieben. Batch-MKV im MKV-Batch-Tool.',
  tool_extract_audio_from_an_mkv_file_example_title: 'Echte MKV-Extraktion testen',
  tool_extract_audio_from_an_mkv_file_example:
    'Beispiel laden erzeugt bei funktionierendem MediaRecorder einen kurzen synthetischen Ersatz, dann Extrahieren. Eigene .mkv unter dem Fallback-Limit bevorzugen. Multi-GiB-Rips: ffmpeg zu AAC-MP4, dann MP4-Seite.',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'Wann es hilft',
  tool_extract_audio_from_an_mkv_file_usecase_1:
    'Browser-MKV-Capture unter ~500 MiB → teilbares MP3 ohne Upload.',
  tool_extract_audio_from_an_mkv_file_usecase_2: 'Kurzer MKV-Interviewclip braucht nur die Audiospur als WAV.',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    'Datei ist klar Multi-GiB oder DDP—lokal zu AAC-MP4, dann MP4-Extraktion statt dieser Seite.',
  tool_extract_audio_from_an_mkv_file_faq_q1: 'YouTube-URL einfügen?',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'Nein. Nur lokale .mkv.',
  tool_extract_audio_from_an_mkv_file_faq_q2: 'Warum nicht 5 GiB wie auf der MP4-Seite?',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    'Großer Demux ist heute ISOBMFF (MP4/MOV). MKV nutzt MediaElement-Fallback ~500 MiB, bis Matroska-Demux verfügbar ist.',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'Meine MKV ist Multi-GiB oder Dolby Atmos / DDP—was tun?',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    'Diese Seite lehnt ab (err_container und/oder err_codec). Am Computer in AAC-Stereo-MP4 umwandeln, z. B.: ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4. Dann „Audio aus einer MP4-Datei extrahieren“ für den großen Demux-Pfad. Reines Remux ohne AAC scheitert weiter, wenn die Spur E-AC-3 bleibt.',
  tool_extract_audio_from_an_mkv_file_faq_q4: 'MKV stumm schalten (stummes Video)?',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'Nein. Nur Audio nach WAV/MP3 extrahieren.',
  tool_extract_audio_from_an_mkv_file_faq_q5: 'Wird meine Datei hochgeladen?',
  tool_extract_audio_from_an_mkv_file_faq_a5:
    'Nein. Dekodierung und Schreiben laufen im Browser. Der ffmpeg-Schritt (falls nötig) bleibt auf Ihrem Computer.',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'Viele MKV—welche Seite?',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    'Kleine MKV-Ordner: „Audio aus MKV-Dateien stapelweise extrahieren“. Riesige oder DDP-Dateien: jeweils zuerst AAC-MP4, dann „Audio aus MP4-Dateien stapelweise extrahieren“ oder die einzelne MP4-Seite.',
  tool_extract_audio_from_an_mkv_file_faq_q7: 'Nach der Extraktion trimmen?',
  tool_extract_audio_from_an_mkv_file_faq_a7: 'Nicht hier. Herunterladen, dann „Audioclip zuschneiden und exportieren“.',
};
export default de;
