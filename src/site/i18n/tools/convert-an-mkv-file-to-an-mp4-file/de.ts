import type { SiteLangDict } from '../../../types';

/**
 * Deutsch: MKV in MP4 im Browser (AAC-Stereo, D2).
 * Kein reines Remux; kein YouTube; ca. 5 GiB mit OPFS (ca. 1 GiB ohne).
 */
const de: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'MKV-Datei in MP4-Datei umwandeln',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'Eine lokale MKV im Browser in MP4 mit AAC-Stereo. Video wird wenn möglich kopiert. ca. 5 GiB mit OPFS (ca. 1 GiB ohne). Kein Upload.',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    'Wandeln Sie eine lokale MKV auf dem Gerät in MP4 um — mit AAC-Stereo, damit Player und Extraktions-Tools die Spur nutzen können. Ablauf: MKV wählen → Konvertieren → Herunterladen. Beispiel: Beispiel laden konvertiert einen kurzen synthetischen Matroska-Clip. Videopakete werden kopiert, wenn der Browser den Codec behalten kann; Audio wird immer nach AAC neu kodiert (E-AC-3/DDP per WASM-Helfer auf der Seite dekodierbar). Erstes Release: ca. 5 GiB mit OPFS (ca. 1 GiB ohne)-ffmpeg. Nur lokal, kein YouTube-Link-Download, kein Upload. Danach nur Ton? Audio aus einer MP4-Datei extrahieren.',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    'Schnittprogramme und Handys wollen oft MP4, Aufnahmen kommen als MKV. Diese Seite remuxt, wenn es sicher ist, schreibt aber immer AAC-Stereo — kein stummes Remux mit unspielbarem E-AC-3 im Browser. Keine Remote-URLs, noch kein ZIP-Batch, kein Ersatz für Audio-Extraktions-Landingpages — nach dem AAC-MP4 geht es zu den verlinkten Extraktions-Tools.',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'MKV-Datei wählen',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'Eine lokale .mkv ablegen (ca. 5 GiB mit OPFS (ca. 1 GiB ohne). Audio wird AAC-Stereo. Kein YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: 'Konvertieren',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'Herunterladen',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'Beispiel laden',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'Löschen',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: 'Stopp',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: 'Audioeinstellungen (optional)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: 'Audiokanäle',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'Stereo (Standard)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'Mono',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'AAC-Qualität',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: 'Kleinere Datei',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'Ausgewogen',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: 'Höhere Qualität (Standard)',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    'Standard reicht meist: Stereo-AAC in höherer Qualität. Geänderte Einstellungen löschen einen fertigen Download.',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: 'Konvertierungsfortschritt',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'Engine laden',
  tool_convert_an_mkv_file_to_an_mp4_file_read: 'Lesen',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'Dekodieren',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'Kodieren',
  tool_convert_an_mkv_file_to_an_mp4_file_write: 'Schreiben',
  tool_convert_an_mkv_file_to_an_mp4_file_done:
    'Fertig. MP4 herunterladen oder die MP4-Extraktionsseite nur für Audio öffnen.',
  tool_convert_an_mkv_file_to_an_mp4_file_failed:
    'Konvertierung fehlgeschlagen. Kleinere MKV oder andere Audiospur versuchen.',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: '{s}s vergangen',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: 'Vorschau der konvertierten MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_result: 'Eingabe {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: 'kurz-mkv-nach-mp4-demo',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: 'Zuerst MKV wählen oder Beispiel laden.',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'Noch keine Datei. Lokale .mkv bis ca. 5 GiB mit OPFS (ca. 1 GiB ohne). Kein YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: 'Gestoppt. Keine Teil-MP4 wird behalten.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'Genau eine MKV-Datei ablegen.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: 'Nicht unterstützte Datei. Auf dieser Seite nur .mkv.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'Diese MKV überschreitet ca. 5 GiB mit OPFS (ca. 1 GiB ohne). Größere Dateien: Desktop-ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'Konnte nicht als Matroska geöffnet werden oder keine nutzbare Video-/Audiospur.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'Audio- oder Videocodec hier nicht dekodier- oder kodierbar. Andere Spur oder ffmpeg am Rechner.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'MP4 konnte nicht geschrieben werden. Erneut konvertieren.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'Beispiel-MKV konnte nicht geladen werden. Eigene Datei ablegen.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'Konvertierungs-Engine in diesem Browser nicht ladbar.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: 'Konvertierung wurde gestoppt.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'So wandeln Sie eine MKV-Datei in MP4 um',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'Lokale MKV ablegen, Konvertieren, MP4 herunterladen — Audio wird AAC-Stereo für spätere Extraktion.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1:
    'Lokale .mkv bis ca. 5 GiB mit OPFS (ca. 1 GiB ohne).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2:
    'Optional Audioeinstellungen für Mono oder geringere AAC-Qualität öffnen.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3:
    'Konvertieren klicken und warten: Engine laden → Lesen → Dekodieren → Kodieren → Schreiben (oder Stopp).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4:
    'Bei Vorschau ansehen, dann Herunterladen. Nur Sprache danach: Audio aus einer MP4-Datei extrahieren.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title:
    'Warum MKV-Datei in MP4-Datei umwandeln hier nutzen',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1:
    'AAC-Stereo bewusst — kein Remux, das E-AC-3 in vielen Browsern unspielbar lässt.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2:
    'Video wird kopiert, wenn möglich — lange Clips schneller als Voll-Re-Encode.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3:
    'Verarbeitung auf dem Gerät; Engine-Skripte laden einmal von dieser Seite.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4:
    'Klarer nächster Schritt: verlinkte MP4-Extraktion nach dem Download.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV nach MP4 mit AAC — ehrliche Grenzen',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    'Eine lokale MKV pro Lauf. Audio wird nach AAC neu kodiert. Limits und Codecs ehrlich — Multi-GB-Rips oft Desktop-ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    'ca. 5 GiB mit OPFS (ca. 1 GiB ohne). Zu groß → err_limit.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'Kein URL- oder YouTube-Download.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3/DDP per mitgeliefertem AC-3-Helfer dekodierbar, dann AAC-Stereo. Exotische Video-Codecs können err_codec.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    'Original-MKV wird nie überschrieben. Mehrere Dateien: MKV-Dateien stapelweise in MP4 umwandeln (ZIP).',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: 'Echte Konvertierung testen',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    'Beispiel laden holt eine kurze MKV von dieser Seite, dann läuft Konvertieren. Eigene .mkv unter dem Limit für echte Checks.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'Wann das hilft',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1:
    'Screenrecording-MKV soll in einem Editor laufen, der nur MP4 akzeptiert.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2:
    'DDP/Atmos-MKV braucht AAC vor Audio aus einer MP4-Datei extrahieren.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3:
    'Teilbares MP4 ohne Matroska in einen Cloud-Konverter hochzuladen.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: 'Kann ich eine YouTube-URL einfügen?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'Nein. Nur lokale .mkv.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: 'Ist das nur Remux (gleicher Audiocodec)?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'Nein. Audio wird immer nach AAC neu kodiert für Browser-Demux und viele Player. Video kann weiter kopiert werden.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'MKV mit Dolby Atmos / DDP / E-AC-3 — geht das?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'Oft ja unter Größenlimit: AC-3/E-AC-3-Decoder laden, Downmix zu Stereo-AAC, MP4 schreiben. Sehr große Rips können scheitern oder langsam sein — dann Desktop-ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: 'Wird meine Datei hochgeladen?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4:
    'Nein. Konvertierung im Browser. Engine-Skripte laden einmal von dieser Seite.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: 'Ich brauche nur die Audiospur — diese Seite?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'Passt MKV schon zum Extraktions-Fallback und browserfreundlicher Codec: Audio aus einer MKV-Datei extrahieren. Bei DDP oder zu groß für Extraktion: hier konvertieren, dann Audio aus einer MP4-Datei extrahieren.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: 'WebM oder MOV statt MKV?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6:
    'Diese Seite nimmt nur .mkv. Andere Container später eigene Konvertierungsseiten.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: 'Viele MKVs auf einmal?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7:
    'Noch kein ZIP-Batch auf dieser Seite. Vorerst eine Datei nach der anderen.',
};
export default de;
