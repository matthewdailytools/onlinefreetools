import type { SiteLangDict } from '../../../types';

/**
 * German copy for join-audio-files-in-order (F7 A2).
 * Audiodateien der Reihe nach verbinden; ≠ Overlay-Mix; ≠ Crossfade.
 */
const de: SiteLangDict = {
  tool_join_audio_files_in_order_title: 'Audiodateien der Reihe nach verbinden',
  tool_join_audio_files_in_order_desc:
    'Mehrere lokale Clips Ende-an-Ende in Listenreihenfolge verbinden und eine 16-Bit-WAV herunterladen. Nur auf dem Gerät—kein Overlay-Mix.',
  tool_join_audio_files_in_order_description:
    'Verbinden Sie mehrere lokale Audiodateien Ende-an-Ende in Listenreihenfolge im Browser und laden Sie eine 16-Bit-WAV herunter. Schritte: Clips hinzufügen, bei Bedarf umordnen, Verbinden, Vorschau, Download. Beispiel: zwei kurze Sample-Töne laden. Nur aneinanderreihen—kein Overlay-Mix, kein Crossfade. Wird nie hochgeladen.',
  tool_join_audio_files_in_order_article:
    'Podcast-Takes, Sprachnotizen und Songabschnitte sollen oft eine durchgehende Datei werden. Diese Seite lässt mehrere lokale Audiodateien ablegen, in einer Liste umordnen, jeden Clip im Browser dekodieren, Abtastrate und Kanäle angleichen und die Samples in dieser Reihenfolge zu einer 16-Bit-PCM-WAV verbinden. Sie stapelt keine Spuren gleichzeitig (Overlay), macht keinen Crossfade zwischen Songs und extrahiert kein Audio aus Video. Der Erfolg hängt davon ab, ob der Browser jeden Container dekodieren kann. Kanäle bleiben eins oder zwei. Originale behalten; der Download ist neu. Die Arbeit läuft auf Ihrem Gerät.',
  tool_join_audio_files_in_order_choose: 'Audiodateien hinzufügen',
  tool_join_audio_files_in_order_hint:
    'Mehrere WAV, MP3, M4A, AAC oder OGG ablegen oder wählen. Beliebig nachlegen. Bis 20 Clips, je 40 MiB, insgesamt unter 20 Minuten nach dem Verbinden; Mono oder Stereo.',
  tool_join_audio_files_in_order_list_label: 'Verbindungsreihenfolge',
  tool_join_audio_files_in_order_move_up: 'Hoch',
  tool_join_audio_files_in_order_move_down: 'Runter',
  tool_join_audio_files_in_order_remove: 'Entfernen',
  tool_join_audio_files_in_order_convert: 'Verbinden',
  tool_join_audio_files_in_order_download: 'WAV herunterladen',
  tool_join_audio_files_in_order_sample: 'Beispiel laden',
  tool_join_audio_files_in_order_clear: 'Leeren',
  tool_join_audio_files_in_order_advanced: 'Hinweise zum Verbinden',
  tool_join_audio_files_in_order_settings_hint:
    'Clips werden Ende-an-Ende in Listenreihenfolge verbunden. Andere Abtastraten werden an den ersten Clip angeglichen. Nur Aneinanderreihen—kein Overlay und kein Crossfade.',
  tool_join_audio_files_in_order_progress: 'Verbindungsfortschritt',
  tool_join_audio_files_in_order_read: 'Lesen',
  tool_join_audio_files_in_order_decode: 'Dekodieren',
  tool_join_audio_files_in_order_join: 'Verbinden',
  tool_join_audio_files_in_order_write: 'Schreiben',
  tool_join_audio_files_in_order_done: 'Fertig. Vorschau der verbundenen WAV, dann herunterladen.',
  tool_join_audio_files_in_order_failed: 'Verbinden fehlgeschlagen. Weniger, kürzere, gültige Audiodateien versuchen.',
  tool_join_audio_files_in_order_elapsed: '{s}s vergangen',
  tool_join_audio_files_in_order_preview: 'Verbundene WAV anhören',
  tool_join_audio_files_in_order_result:
    '{files} Dateien · {seconds}s · {channels} Kanäle · {rate} Hz · WAV {output} KiB',
  tool_join_audio_files_in_order_sample_name: 'verbind-ton',
  tool_join_audio_files_in_order_empty: 'Mindestens zwei Audiodateien hinzufügen oder zuerst das Beispiel laden.',
  tool_join_audio_files_in_order_empty_state:
    'Noch keine Clips. Mehrere lokale Audiodateien ablegen oder Beispiel laden für zwei kurze Töne. Diese Seite reiht in Listenreihenfolge aneinander—sie mischt Spuren nicht übereinander.',
  tool_join_audio_files_in_order_queue_count: '{n} Datei(en) in der Warteschlange',
  tool_join_audio_files_in_order_err_file: 'Mindestens zwei unterstützte Audiodateien hinzufügen.',
  tool_join_audio_files_in_order_err_format:
    'Nicht unterstütztes oder beschädigtes Audio. WAV, MP3, M4A, AAC oder OGG verwenden, die der Browser dekodieren kann.',
  tool_join_audio_files_in_order_err_limit:
    'Bis 20 Dateien, je 40 MiB, Mono oder Stereo, Gesamtlänge nach dem Verbinden unter 20 Minuten.',
  tool_join_audio_files_in_order_err_decode:
    'Der Browser konnte eine Datei nicht dekodieren. Entfernen oder andere Kodierung versuchen.',
  tool_join_audio_files_in_order_err_encoder: 'Verbundene WAV konnte nicht geschrieben werden. Verbinden erneut versuchen.',
  tool_join_audio_files_in_order_how_title: 'So verbinden Sie Audiodateien der Reihe nach',
  tool_join_audio_files_in_order_how_body:
    'Mehrere lokale Clips hinzufügen, Reihenfolge setzen, Verbinden, anhören, eine 16-Bit-WAV herunterladen—ohne Upload.',
  tool_join_audio_files_in_order_how_item_1:
    'Zwei oder mehr Audiodateien hinzufügen (oder Beispiel für zwei kurze Töne). Erneut ablegen, um mehr anzuhängen.',
  tool_join_audio_files_in_order_how_item_2:
    'Hoch / Runter / Entfernen in der Liste nutzen, damit die Reihenfolge dem Hörwunsch entspricht.',
  tool_join_audio_files_in_order_how_item_3:
    'Verbinden klicken und Lesen → Dekodieren → Verbinden → Schreiben abwarten.',
  tool_join_audio_files_in_order_how_item_4:
    'Durchgehenden Track prüfen, Ergebniszeile lesen, dann WAV herunterladen.',
  tool_join_audio_files_in_order_why_choose_title: 'Warum unsere Tools „Audiodateien der Reihe nach verbinden“',
  tool_join_audio_files_in_order_why_choose_item_1:
    'Dateianzahl, Dauer, Kanäle, Abtastrate und Ausgabe-KiB vor dem Speichern sehen.',
  tool_join_audio_files_in_order_why_choose_item_2:
    'Ein klarer Concatenate-Job—Listenreihenfolge Ende-an-Ende—mit ehrlichen Grenzen, wenn ein Clip nicht dekodiert.',
  tool_join_audio_files_in_order_why_choose_item_3:
    'Lesen, Dekodieren und Schreiben laufen auf Ihrem Gerät; die Seite lädt Clips nicht zum Verarbeiten hoch.',
  tool_join_audio_files_in_order_why_choose_item_4:
    'Änderungen an der Warteschlange löschen den alten Download, damit keine veraltete WAV gespeichert wird.',
  tool_join_audio_files_in_order_rules_title: 'Concatenate-Regeln und ehrliche Browsergrenzen',
  tool_join_audio_files_in_order_rules_body:
    'Jeder Lauf verbindet Clips Ende-an-Ende in Listenreihenfolge. Abtastraten werden an den ersten Clip angeglichen. Export ist 16-Bit-WAV. Kein Overlay-Mix, kein Crossfade, keine Videoextraktion.',
  tool_join_audio_files_in_order_rules_item_1:
    'Zwei bis zwanzig lokale Audiodateien, je bis 40 MiB. Verbundene Länge unter zwanzig Minuten. Kanäle eins oder zwei.',
  tool_join_audio_files_in_order_rules_item_2:
    'Diese Seite reiht aneinander. Sie stapelt Stimme und Musik nicht gleichzeitig und macht keinen Crossfade.',
  tool_join_audio_files_in_order_rules_item_3:
    'Tags werden nicht kopiert. Originale werden nicht überschrieben. Erfolg hängt von der Browser-Dekodierung je Datei ab.',
  tool_join_audio_files_in_order_rules_item_4:
    'Nach dem Verbinden: Audio-Clip zuschneiden und exportieren für Start/Ende. Bei Video zuerst Audio extrahieren.',
  tool_join_audio_files_in_order_example_title: 'Zwei kurze Töne ausprobieren',
  tool_join_audio_files_in_order_example:
    'Beispiel laden fügt zwei kurze WAV-Töne (unterschiedliche Tonhöhe) hinzu und startet Verbinden. Sie hören Ton A, dann Ton B ohne Überlappung. Die Wiedergabe startet nicht von selbst—Play in der Vorschau drücken.',
  tool_join_audio_files_in_order_usecases_title: 'Wann das hilft',
  tool_join_audio_files_in_order_usecase_1:
    'Mehrere Sprachnotizen sollen eine durchgehende Spur werden—der Reihe nach hinzufügen, Verbinden, WAV laden.',
  tool_join_audio_files_in_order_usecase_2:
    'Songabschnitte oder Podcast-Kapitel als Einzeldateien brauchen einen Export ohne Upload zu einem Joiner.',
  tool_join_audio_files_in_order_usecase_3: 'Kapitel-WAVs sollen eine durchgehende Datei in Playlist-Reihenfolge werden.',
  tool_join_audio_files_in_order_faq_q1: 'Ist das dasselbe wie Mischen oder Überlagern zweier Spuren?',
  tool_join_audio_files_in_order_faq_a1:
    'Nein. Overlay spielt Clips gleichzeitig (z. B. Stimme über Musik). Diese Seite setzt sie nur nacheinander in Listenreihenfolge.',
  tool_join_audio_files_in_order_faq_q2: 'Gibt es einen Crossfade zwischen Songs?',
  tool_join_audio_files_in_order_faq_a2:
    'Nein. Kein Crossfade und kein DJ-Übergang. Clips treffen Ende-an-Ende. Crossfade ist ein anderer Job.',
  tool_join_audio_files_in_order_faq_q3: 'Kann ich die Verbindungsreihenfolge ändern?',
  tool_join_audio_files_in_order_faq_a3:
    'Ja. Hoch und Runter pro Zeile nutzen oder Entfernen und erneut hinzufügen. Verbinden folgt immer der Liste von oben nach unten.',
  tool_join_audio_files_in_order_faq_q4: 'Was, wenn Dateien andere Abtastraten haben?',
  tool_join_audio_files_in_order_faq_a4:
    'Spätere Clips werden vor dem Aneinanderreihen an die Abtastrate des ersten angeglichen. Kanäle bleiben Mono oder Stereo.',
  tool_join_audio_files_in_order_faq_q5: 'Wird mein Audio auf einen Server hochgeladen?',
  tool_join_audio_files_in_order_faq_a5:
    'Nein. Lesen, Dekodieren und Schreiben laufen im Browser auf Ihrem Gerät. Beim ersten Laden braucht die Seite Netz; Offline-Nutzung ist nicht garantiert.',
  tool_join_audio_files_in_order_faq_q6: 'Kann ich Audio aus einem Video verbinden?',
  tool_join_audio_files_in_order_faq_a6:
    'Zuerst die Spur mit „Audio aus einer Videodatei extrahieren“ holen, dann die exportierte Audio hier hinzufügen. Diese Seite akzeptiert keine Video-Container als Eingabe.',
};
export default de;
