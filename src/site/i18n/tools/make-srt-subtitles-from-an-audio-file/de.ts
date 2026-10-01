import type { SiteLangDict } from '../../../types';

/**
 * Deutsch: SRT-Untertitel aus Audiodatei — Whisper tiny auf dem Gerät (q8),
 * gleiche Keys wie en.ts; Privacy: bleiben auf dem Gerät / ohne Server-Upload.
 */
const de: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: 'SRT-Untertitel aus einer Audiodatei erstellen',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    'Aus lokaler Sprache zeitgestempelte .srt-Cues erzeugen — Whisper tiny läuft im Tab; Dateien bleiben auf dem Gerät und ohne Server-Upload.',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'SRT-Untertitel aus einer Audiodatei oder Videotonspur im Browser: Whisper tiny auf dem Gerät, Dateien bleiben auf dem Gerät und ohne Server-Upload. Schritte: Sprachdatei wählen, Sprache (oder Auto), SRT erstellen, Cues bearbeiten, .srt herunterladen. Beispiel: Beispiel laden führt einen kurzen gesprochenen Clip durch Whisper und zeigt SRT. Beim ersten Mal etwa 45 MB Modell einmalig laden (danach Cache). Keine Cloud-ASR-API; Zeiten kommen aus Whisper-Segmenten.',
  tool_make_srt_subtitles_from_an_audio_file_article:
    'Wer „Audio zu SRT“ oder „Untertitel aus Audio“ sucht, will aus einer lokalen Aufnahme eine herunterladbare, getimte Untertiteldatei. Diese Seite führt Whisper tiny auf dem Gerät aus gleichen /vendor/whisper-Skripten: Datei im Tab dekodieren, Segmentzeiten holen, editierbares Standard-SRT formatieren und speichern. Video mit Tonspur ist ok, wenn der Browser dekodieren kann. Mit Mikrofon diktieren nutzt Web Speech nur wenn vorhanden — fehlende Speech-APIs blockieren SRT erstellen nicht. Erster Lauf lädt einmalig etwa 45 MB Modell und cached. Cue-Zeiten sind Whisper-Segmentgrenzen, keine framegenaue Forced Alignment; Untertitel werden nicht ins Video gebrannt.',
  tool_make_srt_subtitles_from_an_audio_file_choose: 'Sprachdatei wählen',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'Lokales WAV, MP3, M4A oder anderes Audio, das der Browser dekodieren kann — etwa bis 120 MiB und etwa 2 Stunden nach dem Dekodieren. Lange Dateien laufen in Gleitfenstern (Fenster n von N; Stop behält Teil-SRT wenn möglich). Video mit Tonspur ok bei erfolgreicher Dekodierung; sonst klare Fehlermeldung.',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: 'Sprache der Aufnahme',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    'Auto lässt Whisper die Sprache erkennen. Bekannte Sprache wählen für stabilere Cues. Mikrofon-Diktat nutzt dieselbe Wahl, wenn Web Speech verfügbar ist.',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: 'Automatisch erkennen',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: 'Englisch',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: 'Chinesisch',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'Spanisch',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: 'Japanisch',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'Deutsch',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'Französisch',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'Portugiesisch',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'Indonesisch',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'Arabisch',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'Russisch',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'SRT erstellen',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'Mit Mikrofon diktieren',
  tool_make_srt_subtitles_from_an_audio_file_stop: 'Stopp',
  tool_make_srt_subtitles_from_an_audio_file_download: 'SRT herunterladen',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'Beispiel laden',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'Leeren',
  tool_make_srt_subtitles_from_an_audio_file_source_play: 'Originalton abspielen',
  tool_make_srt_subtitles_from_an_audio_file_advanced: 'Ehrliche Grenzen',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny läuft in diesem Tab aus gleichen /vendor/whisper-Dateien. Erstes SRT erstellen lädt einmalig etwa 45 MB, danach Cache. Cue-Zeiten folgen Whisper-Segmenten — keine framegenaue Forced Alignment. Mikrofon-Diktat ist optionales Web Speech und kann einen Hersteller-Spracherkennungsdienst nutzen. Diese Seite brennt keine Untertitel ins Video.',
  tool_make_srt_subtitles_from_an_audio_file_progress: 'Untertitel-Fortschritt',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: 'Untertitel-Fortschritt',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next: 'Fertig. Als Nächstes: Cues bei Bedarf bearbeiten, dann SRT herunterladen.',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'SRT konnte nicht fertiggestellt werden',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint:
    'Andere Datei, kürzeren Clip oder Beispiel laden versuchen. Dateien bleiben auf dem Gerät.',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: 'Lade {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: 'Start…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'Modell',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'Dekodieren',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: 'Transkribieren',
  tool_make_srt_subtitles_from_an_audio_file_write: 'SRT schreiben',
  tool_make_srt_subtitles_from_an_audio_file_done: 'Bereit. SRT bei Bedarf bearbeiten, dann SRT herunterladen.',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'SRT konnte nicht gebaut werden. Beispiel laden, klarere Aufnahme oder kürzeren Clip unter etwa 2 Stunden versuchen.',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: '{s}s vergangen',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'SRT-Vorschau',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: 'Zwischenstand (Mikrofon)',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} Cues · {chars} Zeichen',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty:
    'Lokale Sprachdatei wählen oder Mit Mikrofon diktieren, wenn verfügbar.',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'Noch kein SRT. Sprachdatei ablegen und SRT erstellen. Beispiel laden führt einen kurzen gesprochenen Clip durch Whisper auf dem Gerät. Dateien bleiben auf dem Gerät.',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'Medium: {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'Mit Mikrofon diktieren ist in diesem Browser nicht verfügbar (keine Web Speech API). SRT erstellen mit Whisper funktioniert weiterhin für lokale Dateien.',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'Whisper hat wenig oder keinen Sprachtext geliefert. Klarere Aufnahme oder gesprochene Sprache wählen.',
  tool_make_srt_subtitles_from_an_audio_file_status_mic:
    'Mikrofon hört zu… deutlich sprechen, dann Stopp. Cue-Zeiten nutzen die Sitzungsdauer.',
  tool_make_srt_subtitles_from_an_audio_file_status_model:
    'Whisper-Modell auf dem Gerät wird geladen (erster Lauf kann ~45 MB laden)…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'Audio wird in diesem Tab dekodiert…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'Transkription mit Whisper…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: 'Fenster {n} von {total} wird transkribiert…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: 'Gestoppt. Teil-SRT behalten, sofern schon Cues vorlagen.',
  tool_make_srt_subtitles_from_an_audio_file_status_write: 'Getimte SRT-Cues werden geschrieben…',
  tool_make_srt_subtitles_from_an_audio_file_err_file:
    'Eine lokale Audio- oder Videodatei wählen oder Beispiel laden.',
  tool_make_srt_subtitles_from_an_audio_file_err_format:
    'Nicht unterstützter Medientyp. Übliches Audio oder Video mit Tonspur, die der Browser dekodieren kann.',
  tool_make_srt_subtitles_from_an_audio_file_err_limit:
    'Medien bis etwa 120 MiB und etwa 2 Stunden nach dem Dekodieren verwenden. Auf speicherarmen Handys können sehr lange Aufnahmen scheitern—zuerst kürzen oder komprimieren.',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'Der Browser konnte diese Datei nicht als Audio dekodieren. Video ohne nutzbare Tonspur oder ununterstützter Codec scheitert hier.',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported:
    'Web Audio oder Speech-APIs für diesen Weg sind in diesem Browser nicht verfügbar.',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    'Mikrofonzugriff verweigert. Für Mit Mikrofon diktieren erlauben oder stattdessen SRT erstellen mit einer Datei.',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt:
    'Whisper lieferte keinen brauchbaren Sprachtext. Anderen Clip oder andere Spracheinstellung versuchen.',
  tool_make_srt_subtitles_from_an_audio_file_err_model:
    'Whisper-Modell auf dem Gerät von dieser Site konnte nicht geladen werden. Für den ersten Download online bleiben, dann erneut versuchen.',
  tool_make_srt_subtitles_from_an_audio_file_how_title: 'So erstellen Sie SRT-Untertitel aus einer Audiodatei',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'Lokale Sprachdatei wählen, Whisper auf dem Gerät für getimte Cues starten, Vorschau bearbeiten, dann .srt herunterladen.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1:
    'Lokale Sprachdatei wählen (oder Beispiel laden) und Automatisch erkennen oder eine Sprache der Aufnahme wählen.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2:
    'SRT erstellen klicken. Fortschrittskarte beobachten: Modell, Dekodieren, Transkribieren, dann SRT schreiben.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3:
    'Optional: Mit Mikrofon diktieren, wenn der Browser Web Speech unterstützt, sprechen, dann Stopp.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4:
    'SRT-Vorschau bei Bedarf bearbeiten, dann SRT herunterladen.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title:
    'Warum dieses Tool: SRT-Untertitel aus einer Audiodatei erstellen',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    'Whisper tiny auf dem Gerät aus gleichen Vendor-Dateien — Ihre Aufnahme geht für ASR nicht auf unsere Server (ohne Server-Upload).',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    'Ehrliche Erstkosten: einmalig etwa 45 MB Modell-Download, mit klarer Fortschrittskarte Modell / Dekodieren / Transkribieren / SRT schreiben.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3:
    'Editierbare Standard-.srt-Vorschau vor dem Download — nicht nur Klartext-TXT und nicht ins Video gebrannt.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    'Nachbartools decken reine Transkription und Wellenform-Video ab, ohne einen Hub-Editor zu erzwingen.',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'SRT-Regeln und Grenzen von Whisper auf dem Gerät',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    'Diese Seite führt Whisper tiny im Browser aus gleichen Assets aus. Cue-Zeiten stammen aus Modellsegmenten. Größen- und Dauergrenzen halten den Tab reaktionsschnell.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    'Hauptweg braucht Web-Audio-Dekodierung plus Whisper-Stack unter /vendor/whisper. Mikrofon-Diktat braucht Web Speech und ist optional.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'Etwa 120 MiB Dateigröße und etwa 2 Stunden nach dem Dekodieren, in Gleitfenstern. Längere oder größere Dateien zeigen einen klaren Limit-Fehler; speicherarme Handys brauchen ggf. kürzere Clips.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'Zeitstempel sind Whisper-Segmentgrenzen — nützlich für Player, keine framegenaue Forced Alignment.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'Ihre Datei bleibt für Whisper auf dem Gerät. Optionales Mikrofon-Diktat kann weiterhin einen Hersteller-Spracherkennungsdienst nutzen — Browser-Datenschutz prüfen.',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'Beispiel-Sprachclip ausprobieren',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'Beispiel laden holt ein kurzes gesprochenes WAV, führt SRT erstellen durch Whisper auf dem Gerät aus und füllt die SRT-Vorschau. Die Seite startet das Beispiel beim Öffnen nicht automatisch, damit nicht jeder Besucher den ersten ~45-MB-Modell-Download auslöst.',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'Wann das hilft',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    'Sie haben eine lokale Sprachnotiz oder ein Interview als WAV/MP3 und brauchen ein herunterladbares .srt für Player oder Editor.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    'Sie haben ein kurzes Video mit Tonspur und wollen getimte Untertitel, ohne die Datei zu einer Cloud-ASR-Seite hochzuladen.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    'Sie brauchen ein Start-SRT aus Whisper auf dem Gerät zum Nachbearbeiten — oder fallen auf Mit Mikrofon diktieren zurück, wenn keine Datei da ist.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: 'Läuft das lokal mit Whisper oder als Cloud-Upload?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'SRT erstellen führt Whisper tiny auf dem Gerät aus gleichen Vendor-Dateien aus. Audio- oder Videodatei bleibt auf dem Gerät und ohne Server-Upload zu uns für die Erkennung. Optionales Mit Mikrofon diktieren nutzt die Web Speech API des Browsers, die einen Herstellerdienst einbeziehen kann.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: 'Warum ist das erste SRT erstellen langsam oder groß?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    'Der erste Lauf lädt etwa 45 MB Whisper-tiny-Modell und WASM-Assets von dieser Site in den Browser-Cache. Spätere Läufe nutzen den Cache. Fortschritt erscheint unter dem Schritt Modell.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'Wie genau sind die SRT-Zeitstempel?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'Sie folgen Start und Ende der Whisper-Segmente — für die meisten Player und Editoren ausreichend, keine framegenaue Forced Alignment wie in Desktop-Studio-Pipelines.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: 'Wird mein Audio auf einen Server hochgeladen?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'Nein für den Whisper-Dateiweg: Dekodierung und Transkription laufen im Tab; Dateien bleiben auf dem Gerät und ohne Server-Upload zu uns. Online bleiben Sie nur, um beim ersten Mal gleiche Modellskripte zu holen.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: 'Unterschied zu „Eine Audiodatei in Text umwandeln“?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    'Jenes verwandte Tool liefert vor allem Klartext-Transkript. Diese Seite formatiert nummerierte SRT-Cues mit Start- und Endzeiten für Player und Editoren, die .srt erwarten.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: 'Kann das Untertitel ins Video brennen?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'Nein. Es lädt nur eine .srt-Beilage herunter. Für ein Wellenform-Video aus Audio siehe das verwandte Wellenform-Video-Tool — keine eingebrannten Captions.',
};
export default de;
