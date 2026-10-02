import type { SiteLangDict } from '../../../types';

/**
 * Deutsch (D3 Stapel): mehrere lokale MKV → MP4 mit AAC-Stereo, Ausgabe als ZIP.
 * Suchintention: mehrere MKV in MP4, MKV-Stapel, ohne Server-Upload.
 */
const de: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'MKV-Dateien stapelweise in MP4 umwandeln',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'Wandeln Sie mehrere lokale MKV im Browser in MP4 mit AAC-Stereo um und laden Sie ein ZIP herunter. ~20 Dateien, je ca. 5 GiB mit OPFS. Ohne Server-Upload.',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    'Wandeln Sie auf Ihrem Gerät mehrere MKV stapelweise in MP4 mit AAC-Stereo um und holen Sie sich ein ZIP. Schritte: MKV hinzufügen → Alle umwandeln → ZIP herunterladen. Beispiel: Beispiel laden stellt zwei kurze Matroska-Clips in die Warteschlange und packt beide MP4s. about 5 GiB with OPFS (about 1 GiB without) pro Datei, bis ~20 in der Queue. Fehlgeschlagene Zeilen werden übersprungen; Erfolge landen in einem Teil-ZIP. Nur lokale Dateien, keine YouTube-URLs; Dateien bleiben auf Ihrem Gerät und werden nicht hochgeladen.',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    'Ordner mit Matroska-Aufnahmen brauchen oft MP4 für Schnittprogramme. Diese Seite nutzt dieselbe AAC-zuerst-Konvertierung wie das Einzeldatei-Tool, aber mit Warteschlange, Zeilenstatus und ZIP der erfolgreichen MP4s. Kein reines Audio-Extrahieren im Stapel, kein URL-Abruf — bei nur einem Clip bitte die Einzeldatei-Seite.',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'MKV-Dateien wählen',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'Mehrere lokale .mkv ablegen (about 5 GiB with OPFS (about 1 GiB without) je Datei, bis ~20). Audio wird AAC-Stereo. Kein YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'Warteschlange',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '{n} Datei(en) in der Warteschlange',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'Alle umwandeln',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'ZIP herunterladen',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'Beispiel laden',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'Leeren',
  tool_batch_convert_mkv_files_to_mp4_files_stop: 'Stoppen',
  tool_batch_convert_mkv_files_to_mp4_files_remove: 'Entfernen',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: 'Audioeinstellungen (optional)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: 'Audiokanäle',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'Stereo (Standard)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'Mono',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'AAC-Qualität',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: 'Kleinere Datei',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'Ausgewogen',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: 'Höhere Qualität (Standard)',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    'Standard gilt für jede Datei in der Warteschlange. Geänderte Einstellungen löschen ein fertiges ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_progress: 'Stapel-Fortschritt',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'Engine laden',
  tool_batch_convert_mkv_files_to_mp4_files_read: 'Lesen',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'Dekodieren',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'Kodieren',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'ZIP packen',
  tool_batch_convert_mkv_files_to_mp4_files_done:
    'Fertig. ZIP herunterladen — oder bei nur einem Clip die Einzel-MKV→MP4-Seite öffnen.',
  tool_batch_convert_mkv_files_to_mp4_files_failed:
    'Stapel fehlgeschlagen. Zeilenfehler prüfen oder weniger/kleinere MKV versuchen.',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: '{s} s vergangen',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'ZIP-Ergebnis',
  tool_batch_convert_mkv_files_to_mp4_files_result: '{n} MP4 gepackt · ZIP {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '{ok} erfolgreich, {fail} fehlgeschlagen · ZIP {output} KiB (Teil). Download enthält die Erfolge.',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'Zuerst MKV hinzufügen oder Beispiel laden.',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'Noch keine Dateien. Lokale .mkv (ca. 5 GiB mit OPFS je Datei) ablegen oder Beispiel laden. Kein YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: 'In Warteschlange',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: 'Wird umgewandelt…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 bereit',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: 'Fehlgeschlagen',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: 'Gestoppt',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'Eine oder mehrere MKV-Dateien ablegen.',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: 'Datei nicht unterstützt. Auf dieser Seite nur .mkv.',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'Eine Datei überschreitet about 5 GiB with OPFS (about 1 GiB without) oder die Warteschlange ist für diesen Browser zu groß.',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'Zu viele Dateien. Pro Stapel etwa 20 MKV oder weniger.',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'Datei ließ sich nicht als Matroska öffnen oder es blieb keine nutzbare Video-/Audiospur.',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'Ein Codec ließ sich hier nicht dekodieren/kodieren. Diese Zeile scheitert; andere können gepackt werden.',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: 'MP4 für eine Zeile konnte nicht geschrieben werden. Erneut versuchen oder entfernen.',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'ZIP konnte nicht erstellt werden. Erneut Alle umwandeln.',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'Beispiel-MKV konnte nicht geladen werden. Eigene Dateien verwenden.',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'Konvertierungs-Engine ließ sich in diesem Browser nicht laden.',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: 'Umwandlung gestoppt.',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'MKV stapelweise in MP4 umwandeln',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'Lokale MKV in die Queue, Alle umwandeln, dann ZIP herunterladen — jeder Erfolg ist MP4 mit AAC-Stereo.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    'Mehrere lokale .mkv (ca. 5 GiB mit OPFS je Datei) wählen oder Beispiel laden.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    'Optional Audioeinstellungen für Mono oder kleinere AAC-Qualität (gilt für den ganzen Stapel).',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    'Alle umwandeln und jede Zeile beobachten (oder Stoppen). Fehlzeilen werden übersprungen.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    'Nach dem HUD ZIP herunterladen. Nur ein Clip? Einzel-MKV→MP4-Seite nutzen.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'Warum dieser Stapel-MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    'Ein ZIP mit AAC-MP4s, ohne einen Matroska-Ordner in die Cloud hochzuladen.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    'Status pro Zeile und Überspringen bei Fehler — eine kaputte Spur stoppt nicht alles.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    'Gleiche AAC-Engine wie die Einzeldatei-Seite, mit klaren Limits statt stillem Remux.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    'Klare Wege zur Einzelkonvertierung und zu Audio-Extraktion, sobald MP4s da sind.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: 'Grenzen beim Stapel MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    'Nur lokale .mkv. Audio wird nach AAC neu kodiert. Limits und Zeilenfehler sind vorab genannt — riesige Rips eher Desktop-ffmpeg.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    'about 5 GiB with OPFS (about 1 GiB without) pro Datei, ~20 pro Stapel. Bei Überschreitung meldet die Seite das klar.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'Kein URL- oder YouTube-Download.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC-Stereo (oder Mono) bewusst. E-AC-3 kann über Helfer dekodiert werden; exotisches Video kann eine Zeile killen.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    'Original-MKV werden nicht überschrieben. Kein reines Audio-Extrahieren im Stapel — dafür die passenden Seiten.',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: 'Echten Stapel testen',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'Beispiel laden → zwei kurze MKV der Seite; Alle umwandeln packt sie ins ZIP. Eigene Dateien unter dem Limit für echte Checks.',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'Typische Fälle',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    'Ein Ordner Screen-Capture-MKV soll MP4 werden, weil der Editor Matroska ablehnt.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    'Mehrere DDP/Atmos-MKV brauchen AAC, bevor Sie Audio aus den MP4s extrahieren.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    'Ein ZIP-Download ohne Upload des ganzen Stapels zu einem Online-Konverter.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: 'YouTube-URLs einfügen?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'Nein. Nur lokale .mkv-Dateien.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: 'Unterschied zur Einzel-MKV→MP4-Seite?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'Dort eine Datei und direkter MP4-Download. Hier viele Dateien in der Queue und ZIP. Gleiche AAC-Engine.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: 'Was, wenn ein MKV scheitert?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'Zeile zeigt Fehlgeschlagen und wird übersprungen. Erfolgreiche MP4s bleiben im Teil-ZIP zum Download.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: 'Nur Remux (gleicher Audiocodec)?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'Nein. Audio wird immer nach AAC neu kodiert. Video wird kopiert, wenn möglich.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: 'Nur WAV/MP3 aus vielen MKV — falsche Seite?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    'Nur Ton: Stapel-Audio aus MKV nutzen. Hier gibt es Video-MP4s im ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: 'Wird mein Ordner hochgeladen?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    'Nein. Die Umwandlung läuft im Browser; Dateien bleiben auf Ihrem Gerät ohne Server-Upload. Engine-Skripte laden einmal von dieser Site.',
};

export default de;
