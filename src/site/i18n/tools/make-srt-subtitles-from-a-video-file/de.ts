import type { SiteLangDict } from '../../../types';

/**
 * German (de) copy for make-srt-subtitles-from-a-video-file.
 * Local search: Video zu SRT / Untertitel aus Video / SRT aus Videodatei.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: ohne Server-Upload; Dateien bleiben auf dem Gerät.
 */
const de: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: 'SRT-Untertitel aus einer Videodatei erstellen',
  tool_make_srt_subtitles_from_a_video_file_desc:
    'Wandelt lokales Video mit Sprache in zeitgestempelte .srt-Cues um—mit Whisper auf dem Gerät. Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.',
  tool_make_srt_subtitles_from_a_video_file_description:
    'Erstellen Sie zeitgestempelte SRT-Untertitel aus einer lokalen Videodatei im Browser mit Whisper auf dem Gerät: Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen. Schritte: Video mit Dialog wählen, abspielen zur Kontrolle, Sprache (oder Auto), SRT erstellen, Cues bearbeiten, .srt herunterladen. Beispiel: Beispiel laden schickt ein kurzes gesprochenes MP4 durch Whisper. Erster Lauf lädt einmal ca. 45 MB (danach Cache). Reines Audio WAV/MP3 gehört auf SRT-Untertitel aus einer Audiodatei erstellen. Kein Einbrennen; Zeiten aus Whisper-Segmenten.',
  tool_make_srt_subtitles_from_a_video_file_article:
    'Wer nach „Video zu SRT“ oder „Untertitel aus Video“ sucht, will eine herunterladbare zeitgestempelte Untertiteldatei aus lokalem Material—keine Sprachnotiz-Seite. Dieses Tool führt Whisper tiny auf dem Gerät aus Same-Origin-/vendor/whisper-Skripten aus: dekodiert die Audiospur des Videos im Tab, zeigt eine Videovorschau zum Abgleich von Dialog und Bild, holt Segmentzeiten, formatiert editierbares Standard-SRT und lädt herunter. Reine Audiodateien werden abgelehnt mit klarem Link zu SRT-Untertitel aus einer Audiodatei erstellen. Es gibt keinen Mikrofonpfad. Erster Lauf lädt ca. 45 MB einmal und cached sie. Cue-Zeiten sind Whisper-Segmentgrenzen, keine framegenaue Zwangsausrichtung, und die Seite brennt Untertitel nicht ins Video ein.',
  tool_make_srt_subtitles_from_a_video_file_choose: 'Videodatei wählen',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'Lokales MP4, WebM, MOV oder anderes Video, das der Browser dekodieren kann—bis ca. 120 MiB und ca. 2 Stunden nach Dekodierung. Die Datei braucht eine nutzbare Audiospur. Lange Clips nutzen Gleitfenster (Fenster n von N; Stopp behält partielles SRT, wenn möglich). Reines Audio gehört auf das verwandte Audio-SRT-Tool.',
  tool_make_srt_subtitles_from_a_video_file_lang_label: 'Sprache der Stimme',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    'Auto lässt Whisper die gesprochene Sprache auf der Tonspur erkennen. Wählen Sie eine Sprache, wenn Sie sie kennen—für stabilere Cues.',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: 'Automatisch erkennen',
  tool_make_srt_subtitles_from_a_video_file_lang_en: 'Englisch',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: 'Chinesisch',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'Spanisch',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: 'Japanisch',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'Deutsch',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'Französisch',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'Portugiesisch',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'Indonesisch',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'Arabisch',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'Russisch',
  tool_make_srt_subtitles_from_a_video_file_convert: 'SRT erstellen',
  tool_make_srt_subtitles_from_a_video_file_stop: 'Stopp',
  tool_make_srt_subtitles_from_a_video_file_download: 'SRT herunterladen',
  tool_make_srt_subtitles_from_a_video_file_sample: 'Beispiel laden',
  tool_make_srt_subtitles_from_a_video_file_clear: 'Leeren',
  tool_make_srt_subtitles_from_a_video_file_source_play: 'Originalvideo abspielen',
  tool_make_srt_subtitles_from_a_video_file_advanced: 'Ehrliche Grenzen',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny läuft in diesem Tab aus Same-Origin-/vendor/whisper-Dateien. Das erste SRT erstellen lädt einmal ca. 45 MB und nutzt danach den Cache. Lange Clips nutzen Gleitfenster (~2 Minuten). Cue-Zeiten folgen Whisper-Segmenten—keine framegenaue Zwangsausrichtung. Diese Seite akzeptiert nur Video und brennt Untertitel nicht ein. Für Sprachnotizen ohne Bild nutzen Sie das verwandte Audio-SRT-Tool.',
  tool_make_srt_subtitles_from_a_video_file_progress: 'Untertitel-Fortschritt',
  tool_make_srt_subtitles_from_a_video_file_hud_title: 'Untertitel-Fortschritt',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: 'Fertig. Nächster Schritt: Cues bei Bedarf bearbeiten, dann SRT herunterladen.',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'SRT konnte nicht fertiggestellt werden',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint:
    'Versuchen Sie ein anderes Video, einen kürzeren Clip oder Beispiel laden. Dateien bleiben auf Ihrem Gerät.',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: 'Lade {file} herunter — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: 'Start…',
  tool_make_srt_subtitles_from_a_video_file_model: 'Modell',
  tool_make_srt_subtitles_from_a_video_file_decode: 'Dekodieren',
  tool_make_srt_subtitles_from_a_video_file_transcribe: 'Transkribieren',
  tool_make_srt_subtitles_from_a_video_file_write: 'SRT schreiben',
  tool_make_srt_subtitles_from_a_video_file_done: 'Bereit. Bearbeiten Sie das SRT bei Bedarf, dann SRT herunterladen.',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'SRT konnte nicht erstellt werden. Versuchen Sie Beispiel laden, ein klareres gesprochenes Video oder einen kürzeren Clip unter ca. 2 Stunden.',
  tool_make_srt_subtitles_from_a_video_file_elapsed: '{s}s vergangen',
  tool_make_srt_subtitles_from_a_video_file_preview: 'SRT-Vorschau',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} Cues · {chars} Zeichen',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'Wählen Sie eine lokale Videodatei mit Sprache auf der Tonspur.',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'Noch kein SRT. Legen Sie ein Video mit Dialog ab und klicken Sie SRT erstellen. Beispiel laden schickt ein kurzes gesprochenes MP4 durch Whisper auf dem Gerät. Spielen Sie die Vorschau ab, um Bild und Cues abzugleichen. Dateien bleiben auf Ihrem Gerät.',
  tool_make_srt_subtitles_from_a_video_file_file_label: 'Video: {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: 'Lade Whisper-Modell auf dem Gerät (erster Lauf kann ~45 MB laden)…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'Dekodiere die Video-Audiospur in diesem Tab…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'Transkribiere mit Whisper…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: 'Transkribiere Fenster {n} von {total}…',
  tool_make_srt_subtitles_from_a_video_file_status_write: 'Schreibe zeitgestempelte SRT-Cues…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: 'Gestoppt. Partielles SRT behalten, wenn bereits Cues vorlagen.',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'Wählen Sie eine lokale Videodatei oder nutzen Sie Beispiel laden.',
  tool_make_srt_subtitles_from_a_video_file_err_format:
    'Nicht unterstützter Typ. Nutzen Sie einen gängigen Videocontainer, den der Browser dekodieren kann (z. B. MP4 oder WebM), mit Audiospur.',
  tool_make_srt_subtitles_from_a_video_file_err_limit:
    'Nutzen Sie Video bis ca. 120 MiB und ca. 2 Stunden nach Dekodierung. Sehr lange Clips auf speicherarmen Handys können trotzdem scheitern—vorher kürzen oder komprimieren.',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'Der Browser konnte keine nutzbare Audiospur aus diesem Video dekodieren. Stilles Video, fehlendes Audio oder nicht unterstützter Codec scheitern hier.',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'Web Audio, das für diesen Pfad nötig ist, ist in diesem Browser nicht verfügbar.',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper hat keinen nutzbaren Sprachtext erzeugt. Versuchen Sie einen anderen Clip oder eine andere Spracheinstellung.',
  tool_make_srt_subtitles_from_a_video_file_err_model:
    'Whisper-Modell auf dem Gerät konnte von dieser Site nicht geladen werden. Bleiben Sie für den ersten Download online und versuchen Sie es erneut.',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'Diese Seite akzeptiert nur Videodateien. Für WAV, MP3 oder andere reine Audio-Sprache nutzen Sie SRT-Untertitel aus einer Audiodatei erstellen.',
  tool_make_srt_subtitles_from_a_video_file_how_title: 'So erstellen Sie SRT-Untertitel aus einer Videodatei',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    'Wählen Sie lokales Video mit Sprache, prüfen Sie die Vorschau, lassen Sie Whisper auf dem Gerät zeitgestempelte Cues erzeugen, bearbeiten Sie das SRT und laden Sie herunter.',
  tool_make_srt_subtitles_from_a_video_file_how_item_1:
    'Wählen Sie eine lokale Videodatei (oder Beispiel laden) und Automatisch erkennen oder eine Sprache der Stimme.',
  tool_make_srt_subtitles_from_a_video_file_how_item_2:
    'Spielen Sie Originalvideo ab, wenn Sie Dialog und Bild abgleichen wollen, dann klicken Sie SRT erstellen.',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    'Beobachten Sie die Fortschrittskarte: Modell, Dekodieren, Transkribieren (Fenster n von N bei langen Dateien), dann SRT schreiben. Stopp bricht ab und behält partielles SRT, wenn möglich.',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: 'Bearbeiten Sie die SRT-Vorschau bei Bedarf, dann SRT herunterladen.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: 'Warum SRT-Untertitel aus einer Videodatei erstellen hier nutzen',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    'Video zuerst: Clip in der Seite vorschauen, dann .srt aus der Tonspur mit Whisper auf dem Gerät—Material wird für ASR nicht auf unsere Server hochgeladen.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    'Klare Trennung vom Audio-SRT-Tool: Diese Seite lehnt reines Audio ab und hat keinen Mikrofonpfad, damit Suchende nach Video zu SRT nicht in einer Sprachnotiz-UI landen.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    'Ehrliche Erstlauf-Kosten (~45 MB einmal) plus Fortschritts-HUD mit Gleitfenstern bei langem Material.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    'Nur editierbares .srt-Sidecar—nicht ins Video eingebrannt. Verwandte Tools decken reines Audio-SRT und Wellenform-Video ab.',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'SRT-Regeln und Grenzen von Whisper bei Video',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'Whisper tiny läuft im Browser aus Same-Origin-Assets. Der Browser muss eine nutzbare Audiospur aus dem Video dekodieren. Größen- und Dauergrenzen halten den Tab nutzbar.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    'Nur Videocontainer (z. B. MP4, WebM, MOV). Reine Audiodateien müssen die verwandte Audio-SRT-Seite nutzen.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'Ca. 120 MiB und ca. 2 Stunden nach Dekodierung, transkribiert in Gleitfenstern. Längere oder größere Dateien zeigen einen klaren Limit-Fehler.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'Zeitstempel sind Whisper-Segmentgrenzen—nützlich für Player, keine framegenaue Zwangsausrichtung an Bildschnitte.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Ihr Video bleibt für Whisper auf dem Gerät. Diese Seite brennt Untertitel nicht ein und lädt keine Untertitel von Videoplattformen herunter.',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'Beispiel-Videoclip ausprobieren',
  tool_make_srt_subtitles_from_a_video_file_example:
    'Beispiel laden holt ein kurzes gesprochenes MP4, führt SRT erstellen mit Whisper auf dem Gerät aus und füllt die SRT-Vorschau. Die Seite startet das Beispiel nicht automatisch beim Öffnen, damit der erste ~45-MB-Modell-Download nicht jeden Besucher trifft.',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'Wann das hilft',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    'Sie haben ein lokales Interview-, Talking-Head- oder Screenrecording-MP4 und brauchen ein herunterladbares .srt für Player oder Editor.',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    'Sie wollen ein Video untertiteln, ohne das Material auf eine Cloud-ASR-Site hochzuladen, und brauchen die Bildvorschau beim Prüfen der Cues.',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'Sie haben bereits ein MP4/WebM aus Kamera oder Editor exportiert und brauchen ein Starter-SRT zum Überarbeiten vor der Veröffentlichung.',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: 'Wie unterscheidet sich das von SRT-Untertitel aus einer Audiodatei erstellen?',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'Das verwandte Tool ist für Sprachnotizen und andere audio-first Dateien (optionales Mikrofon-Diktat). Diese Seite ist für Videodateien: Videovorschau, nur Video akzeptiert, Formulierungen Video zu SRT. Darunter derselbe Whisper-Motor auf dem Gerät.',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: 'Läuft das lokal mit Whisper oder als Cloud-Upload?',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'SRT erstellen führt Whisper tiny auf dem Gerät aus Same-Origin-Vendor-Dateien aus. Ihr Video bleibt auf dem Gerät und wird für die Erkennung nicht auf unsere Server hochgeladen.',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: 'Warum ist das erste SRT erstellen langsam oder groß?',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    'Der erste Lauf lädt ca. 45 MB Whisper-tiny-Modell und WASM von dieser Site in den Browser-Cache. Spätere Läufe nutzen den Cache. Lange Videos zeigen Transkribieren als Fenster n von N; Stopp kann abbrechen und ein partielles SRT behalten.',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: 'Kann ich hier WAV oder MP3 nutzen?',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    'Nein. Reines Audio wird abgelehnt, damit Suchende nach Video zu SRT nicht in einer Audio-UI landen. Öffnen Sie SRT-Untertitel aus einer Audiodatei erstellen für WAV/MP3/M4A.',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'Wie genau sind die SRT-Zeitstempel?',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'Sie folgen Start und Ende der Whisper-Segmente auf der Tonspur—gut genug für die meisten Player, keine framegenaue Sync an jeden Bildschnitt.',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: 'Kann das Untertitel ins Video einbrennen oder von YouTube holen?',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'Nein. Es lädt nur ein .srt-Sidecar herunter. Es holt auch keine Auto-Untertitel von YouTube oder anderen Plattformen.',
};
export default de;
