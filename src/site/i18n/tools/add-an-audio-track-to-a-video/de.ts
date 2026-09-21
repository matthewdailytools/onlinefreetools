import type { SiteLangDict } from '../../../types';

/**
 * de copy for add-an-audio-track-to-a-video (F7 V2).
 * How≥4 Why≥4 Rules≥4 FAQ≥5. Lokales Audio auf lokales Video legen; kein YouTube; nicht nur stummschalten; nicht nur extrahieren.
 */
const de: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: 'Eine Audiospur zu einem Video hinzufügen',
  tool_add_an_audio_track_to_a_video_desc:
    'Lokalen Soundtrack mit lokalem Video zusammenführen und herunterladen. Nur auf dem Gerät—kein YouTube-Download.',
  tool_add_an_audio_track_to_a_video_description:
    'Fügen Sie im Browser einer lokalen Videodatei eine Audiospur hinzu: Bild und gewählten Soundtrack zusammenführen, dann herunterladen. Schritte: Video und Audio wählen, Audio hinzufügen, Vorschau, Download. Beispiel: stummer Clip plus kurzes WAV. Nutzt captureStream und MediaRecorder—oft WebM; kein verlustfreies Remux. Nie hochgeladen. Kein YouTube-Download.',
  tool_add_an_audio_track_to_a_video_article:
    'Stumme oder schwach vertonte Clips brauchen oft einen neuen Soundtrack vor dem Teilen. Diese Seite öffnet lokales Video und lokales Audio, erfasst Frames ohne Originalton, dekodiert den Soundtrack im AudioContext, kombiniert und kodiert mit MediaRecorder neu—oft WebM je nach Browser. Die Länge folgt dem Video; längeres Audio wird gekürzt, kürzeres endet früher. Kein YouTube- oder URL-Download, nicht nur Stummschalten ohne neuen Ton und keine reine Audio-Extraktion. Erfolg hängt davon ab, ob der Browser beide Dateien abspielen und MediaRecorder mit Audio kann. Originale behalten; der Download ist eine neue Datei. Alles läuft auf Ihrem Gerät.',
  tool_add_an_audio_track_to_a_video_choose_video: 'Videodatei wählen',
  tool_add_an_audio_track_to_a_video_hint_video:
    'Lokales MP4, WebM, MOV oder M4V ablegen oder wählen, das der Browser abspielen kann. Bis 80 MiB und etwa 3 Minuten. Kein YouTube und kein URL-Einfügen.',
  tool_add_an_audio_track_to_a_video_choose_audio: 'Audiodatei wählen',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'Lokales WAV, MP3, M4A o. Ä. ablegen oder wählen, das der Browser dekodieren kann. Bis 40 MiB.',
  tool_add_an_audio_track_to_a_video_convert: 'Audio hinzufügen',
  tool_add_an_audio_track_to_a_video_download: 'Herunterladen',
  tool_add_an_audio_track_to_a_video_sample: 'Beispiel laden',
  tool_add_an_audio_track_to_a_video_clear: 'Leeren',
  tool_add_an_audio_track_to_a_video_advanced: 'Hinweise zur Zusammenführung',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'Browser kodieren meist mit MediaRecorder neu, nachdem Originalton entfernt und Ihr Soundtrack angehängt wurde. Ausgabe oft WebM, kein verlustfreies Remux der Original-MP4. Diese Seite lädt nie YouTube herunter.',
  tool_add_an_audio_track_to_a_video_progress: 'Fortschritt Audio hinzufügen',
  tool_add_an_audio_track_to_a_video_read: 'Lesen',
  tool_add_an_audio_track_to_a_video_decode: 'Dekodieren',
  tool_add_an_audio_track_to_a_video_merge: 'Zusammenführen',
  tool_add_an_audio_track_to_a_video_write: 'Schreiben',
  tool_add_an_audio_track_to_a_video_done: 'Fertig. Zusammengeführtes Video prüfen, dann herunterladen.',
  tool_add_an_audio_track_to_a_video_failed:
    'Audio ließ sich nicht auf dieses Video legen. Kürzere, abspielbare Dateien versuchen.',
  tool_add_an_audio_track_to_a_video_elapsed: '{s}s vergangen',
  tool_add_an_audio_track_to_a_video_preview: 'Zusammengeführtes Video ansehen',
  tool_add_an_audio_track_to_a_video_result: '{seconds}s · mit Audio · {mime} · {output} KiB',
  tool_add_an_audio_track_to_a_video_sample_name: 'audio-hinzufuegen-beispiel',
  tool_add_an_audio_track_to_a_video_empty: 'Lokales Video und Audio wählen oder zuerst das Beispiel laden.',
  tool_add_an_audio_track_to_a_video_empty_state:
    'Noch keine Dateien. Lokales Video und Soundtrack ablegen oder Beispiel laden. Dieses Tool legt Audio aufs Bild—nicht nur stumm, nicht nur extrahieren, kein YouTube-Download.',
  tool_add_an_audio_track_to_a_video_video_label: 'Video: {name}',
  tool_add_an_audio_track_to_a_video_audio_label: 'Audio: {name}',
  tool_add_an_audio_track_to_a_video_err_file: 'Je eine unterstützte lokale Video- und Audiodatei wählen.',
  tool_add_an_audio_track_to_a_video_err_format:
    'Nicht unterstützte oder nicht abspielbare Dateien. Gängige Video-/Audiotypen nutzen, die der Browser dekodieren kann. Keine YouTube-URLs.',
  tool_add_an_audio_track_to_a_video_err_limit:
    'Lokales Video bis 80 MiB / etwa 3 Minuten und Audio bis 40 MiB verwenden.',
  tool_add_an_audio_track_to_a_video_err_decode:
    'Browser konnte Video oder Audio nicht dekodieren. Anderen Container oder kürzeren Clip versuchen.',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'MediaRecorder konnte kein zusammengeführtes Video schreiben. Chrome/Edge oder kürzeres WebM/MP4 plus WAV/MP3 versuchen.',
  tool_add_an_audio_track_to_a_video_how_title: 'So fügen Sie einem Video eine Audiospur hinzu',
  tool_add_an_audio_track_to_a_video_how_body:
    'Lokales Video und Audio wählen, Audio hinzufügen, Vorschau, dann herunterladen—ohne Upload und ohne YouTube-Download.',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'Lokales Video und lokales Audio wählen (oder Beispiel laden). Keine YouTube-Links einfügen.',
  tool_add_an_audio_track_to_a_video_how_item_2:
    '„Audio hinzufügen“ klicken und Lesen → Dekodieren → Zusammenführen → Schreiben abwarten.',
  tool_add_an_audio_track_to_a_video_how_item_3:
    'Ergebnis prüfen. Der neue Soundtrack sollte mit dem Bild hörbar sein.',
  tool_add_an_audio_track_to_a_video_how_item_4:
    'Ergebniszeile prüfen, dann Herunterladen klicken.',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'Warum unsere Tools zum Hinzufügen einer Audiospur',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    'Dauer, MIME-Typ und Ausgabe-KiB vor dem Speichern sichtbar.',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    'Ein klarer Merge-Job mit ehrlichen MediaRecorder-Grenzen—kein vorgetäuschtes verlustfreies Remux.',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    'Lesen und Aufnehmen laufen auf Ihrem Gerät; die Seite lädt Dateien nicht zum Verarbeiten hoch.',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'Wechsel einer Datei löscht den alten Download, damit kein veralteter Merge gespeichert wird.',
  tool_add_an_audio_track_to_a_video_rules_title: 'Merge-Regeln und ehrliche Browser-Grenzen',
  tool_add_an_audio_track_to_a_video_rules_body:
    'Jeder Lauf entfernt Originalton, hängt Ihren Soundtrack an und kodiert mit MediaRecorder neu. Ausgabe oft WebM. Kein YouTube-Download, nicht nur stumm, keine Audio-Extraktion.',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'Ein lokales Video bis 80 MiB und etwa drei Minuten plus ein lokales Audio bis 40 MiB. Wiedergabe/Dekodierung muss zuerst gelingen.',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    'Ausgabelänge folgt dem Video. Längeres Audio wird gekürzt; kürzeres endet vor dem Bild.',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'Kein YouTube, keine Podcast-URL, kein Remote-Download. Einfügen wird nicht unterstützt.',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'Container und Codecs können sich ändern. Originale behalten; der Download ist eine neu kodierte Datei.',
  tool_add_an_audio_track_to_a_video_example_title: 'Kurzen stummen Clip plus Tonbett ausprobieren',
  tool_add_an_audio_track_to_a_video_example:
    'Beispiel laden erzeugt ein kurzes Canvas-Video und einen einfachen Ton; danach startet Audio hinzufügen automatisch. Sie sehen Bild mit neuem Soundtrack. Wiedergabe startet nicht von selbst—Play drücken, wenn Sie schauen wollen.',
  tool_add_an_audio_track_to_a_video_usecases_title: 'Wann das hilft',
  tool_add_an_audio_track_to_a_video_usecase_1:
    'Stumme Bildschirmaufnahme und WAV-Bett—hier zusammenführen und zum Teilen herunterladen.',
  tool_add_an_audio_track_to_a_video_usecase_2:
    'Schwache eingebaute Spur durch klareren lokalen Soundtrack ersetzen, ohne Desktop-Editor zu installieren.',
  tool_add_an_audio_track_to_a_video_faq_q1: 'Kann es YouTube herunterladen oder eine URL einfügen?',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'Nein. Nur lokale Dateien, die Sie bereits haben. Kein YouTube-Downloader und kein Remote-Abruf.',
  tool_add_an_audio_track_to_a_video_faq_q2: 'Ist das dasselbe wie Audio aus einem Video entfernen?',
  tool_add_an_audio_track_to_a_video_faq_a2:
    'Nein. Stumm/Entfernen ist ein anderer Job. Diese Seite hängt einen neuen Soundtrack an das Bild.',
  tool_add_an_audio_track_to_a_video_faq_q3: 'Extrahiert es Audio als separaten Download?',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'Nein. Audio aus Video extrahieren ist ein anderes Tool. Hier entsteht eine Videodatei mit zusammengeführtem Ton.',
  tool_add_an_audio_track_to_a_video_faq_q4: 'Ist die Ausgabe dieselbe MP4 wie die Quelle?',
  tool_add_an_audio_track_to_a_video_faq_a4:
    'Meist nicht. Browser kodieren typischerweise mit MediaRecorder neu, oft zu WebM. Qualität und Container können sich ändern.',
  tool_add_an_audio_track_to_a_video_faq_q5: 'Wird etwas auf einen Server hochgeladen?',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'Nein. Dekodierung und Aufnahme laufen im Browser auf Ihrem Gerät. Beim ersten Laden braucht die Seite Netz; Offline-Nutzung ist nicht garantiert.',
  tool_add_an_audio_track_to_a_video_faq_q6: 'Was, wenn Audio länger als das Video ist?',
  tool_add_an_audio_track_to_a_video_faq_a6:
    'Der Merge folgt der Videodauer. Audio hinter dem Bildende bleibt nicht im Download.',
};
export default de;
