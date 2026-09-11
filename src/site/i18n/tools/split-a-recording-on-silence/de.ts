/**
 * i18n tool shard (split-a-recording-on-silence / de).
 * Job: split a recording on silence into a ZIP of clips (Aufnahme an Stille teilen).
 */
import type { SiteLangDict } from '../../../types';

/** German copy: Aufnahme an Stille in mehrere Dateien teilen und als ZIP herunterladen. */
const de: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: 'Erweiterte Einstellungen (optional)',
  tool_split_a_recording_on_silence_article:
    'In diesem Tab teilen Sie Audio an Stille: lokale Datei öffnen, An Stille teilen, danach ZIP herunterladen. Lange Pausen werden in der Mitte des Gaps geschnitten; Clips bleiben eigene Dateien. Die Aufnahme bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
  tool_split_a_recording_on_silence_bitrate: 'MP3-Bitrate',
  tool_split_a_recording_on_silence_bitrate_hint: 'Startwert 128 kbps. Nur nötig, wenn das ZIP-Format MP3 ist.',
  tool_split_a_recording_on_silence_choose_file: 'Audiodatei wählen',
  tool_split_a_recording_on_silence_clear: 'Löschen',
  tool_split_a_recording_on_silence_clip_download: 'Clip speichern',
  tool_split_a_recording_on_silence_clip_play: 'Clip abspielen',
  tool_split_a_recording_on_silence_clip_row_tpl: 'Clip {n} · {dur}s ({start}s–{end}s)',
  tool_split_a_recording_on_silence_clips_title: 'Clips für das ZIP',
  tool_split_a_recording_on_silence_desc:
    'Aufnahme an Pausen zerlegen und Clips als ZIP holen — Dateien bleiben auf dem Gerät, ohne Server-Upload.',
  tool_split_a_recording_on_silence_description:
    'Aufnahme an Stille in mehrere Dateien teilen, ohne die Datei auf einen Server zu schicken: lange Pausen werden Schnittpunkte, das ZIP sammelt die Clips. Wer Audio an Stille splitten, Stille erkennen und teilen oder Clips als ZIP sucht, meint dieselbe Mehrdatei-Aufgabe. Schritte: Aufnahme öffnen, An Stille teilen (Werkseinstellung −40 dB / 1.0 s / 0.3 s Mindestclip), ZIP herunterladen. Beispiel: ein 5.00-s-Beispiel mit zwei 1.20-s-Lücken ergibt drei Clips 1.40 / 2.00 / 1.60 s. Kein Ein-Datei-Stille-Entfernen, keine Gleichdauer-Teilung, kein Video-Mute.',
  tool_split_a_recording_on_silence_download_zip: 'ZIP herunterladen',
  tool_split_a_recording_on_silence_drop_hint: 'Oder WAV, MP3, M4A oder OGG hierher ziehen. Die Verarbeitung bleibt in diesem Tab.',
  tool_split_a_recording_on_silence_empty: 'Bitte zuerst eine Audiodatei wählen.',
  tool_split_a_recording_on_silence_err_caps:
    'Diese Datei liegt über dem Limit dieses Geräts (etwa 40 MB / 20 min am Desktop, 20 MB / 8 min auf schmalem Bildschirm). Kürzen Sie sie anderswo oder nehmen Sie eine kürzere Datei.',
  tool_split_a_recording_on_silence_err_decode:
    'Dieser Browser konnte die Datei nicht dekodieren. Versuchen Sie WAV oder MP3, oder einen Clip ohne DRM.',
  tool_split_a_recording_on_silence_err_empty: 'Nichts zu verarbeiten. Laden Sie zuerst eine Datei oder das Beispiel.',
  tool_split_a_recording_on_silence_err_lame: 'Der MP3-Encoder ließ sich nicht laden. Bleiben Sie im Tab und klicken Sie erneut auf ZIP herunterladen.',
  tool_split_a_recording_on_silence_err_no_clips:
    'Kein Clip ist lang genug. Senken Sie die Mindestcliplänge oder erhöhen Sie die Mindeststille, damit kurze Atemzüge keine Schnitte werden.',
  tool_split_a_recording_on_silence_err_too_many:
    'Mehr als 50 Clips. Erhöhen Sie die Mindeststille oder machen Sie den Schwellenwert negativer, damit benachbarte Pausen zusammenfallen, dann erneut An Stille teilen. Die Seite bricht ab statt zu kürzen.',
  tool_split_a_recording_on_silence_err_video:
    'Video ist keine Haupteingabe. Hier wird eine Tondatei an Pausen zerlegt; es wird weder Bild stummgeschaltet noch Footage jump-cut.',
  tool_split_a_recording_on_silence_err_zip: 'Die ZIP-Bibliothek ließ sich nicht laden. Bleiben Sie im Tab und klicken Sie erneut auf ZIP herunterladen.',
  tool_split_a_recording_on_silence_example:
    'Beispiel laden baut einen 5.00-s-Ton mit zwei 1.20-s-Stillelücken (0.80 + 1.20 + 0.80 + 1.20 + 1.00). An Stille teilen bei −40 dB / 1.0 s / 0.3 s Mindestclip schneidet bei 1.40 s und 3.40 s, also drei Clips 1.40 / 2.00 / 1.60 s. ZIP herunterladen schreibt WAV-Dateien namens sample-01.wav, außer Sie wählen MP3 unter Erweiterte Einstellungen.',
  tool_split_a_recording_on_silence_example_title: 'Durchgerechnetes Beispiel',
  tool_split_a_recording_on_silence_faq_a1:
    'Nein. Dekodieren, Erkennen, Schneiden und ZIP-Packen laufen in diesem Tab. Skripte kommen von dieser Site. Die Datei geht nicht auf unsere Server.',
  tool_split_a_recording_on_silence_faq_a2:
    'Dieselbe Aufgabe. Audio an Stille splitten, Aufnahme an Pausen zerlegen, Stille erkennen und teilen oder Segmente als ZIP holen heißt: an langen Pausen schneiden und viele Dateien in einem ZIP.',
  tool_split_a_recording_on_silence_faq_a3:
    'Anderer Job. Stille aus einer Aufnahme entfernen löscht Leerlauf und näht eine kürzere Datei. Hier bleiben Pausen Schnittpunkte und es entstehen viele Clips. Ohne ZIP die Ein-Datei-Seite nutzen.',
  tool_split_a_recording_on_silence_faq_a4:
    'Nein. Gleichlange Stücke (alle N Sekunden) sind später eine andere Arbeit. Cue-Sheet-Alben ebenfalls nicht. Geschnitten wird nur, wo die Stille lange genug anhält.',
  tool_split_a_recording_on_silence_faq_a5:
    'Start mit Sprache (−40 dB / 1.0 s / 0.3 s Mindestclip). Vorträge: Vortrag (−40 dB / 2.0 s). Albumlücken: Album (−45 dB / 1.5 s / 1.0 s Mindestclip). Werden Atemzüge zu Clips, Mindeststille erhöhen.',
  tool_split_a_recording_on_silence_faq_a6:
    'Im ZIP heißen Dateien {stem}-01.wav (oder .mp3). Einzelne Clips können Sie aus der Liste speichern. Obergrenze 50 Clips; darüber wird abgelehnt.',
  tool_split_a_recording_on_silence_faq_a7:
    'Nein. Weder Entrauschen noch Äh-Entfernen, Video-Mute, Cue/APE oder YouTube-Rip. Nutzen Sie eine Tondatei, an der Sie Rechte haben.',
  tool_split_a_recording_on_silence_faq_a8:
    'Desktop: etwa 40 MB oder 20 Minuten. Schmaler Bildschirm: etwa 20 MB oder 8 Minuten. Überlimit wird vor dem Dekodieren abgelehnt. Musik mit großem Dynamikumfang kann wie Stille wirken — Mindestlücke erhöhen oder das Werkzeug lassen.',
  tool_split_a_recording_on_silence_faq_q1: 'Wird meine Aufnahme auf einen Server hochgeladen?',
  tool_split_a_recording_on_silence_faq_q2: 'Ich habe nach Audio an Stille splitten oder Clips als ZIP gesucht. Ist das ein anderes Werkzeug?',
  tool_split_a_recording_on_silence_faq_q3: 'Ich wollte eine kürzere Datei ohne Leerlauf. Ist das der Stille-Entferner?',
  tool_split_a_recording_on_silence_faq_q4: 'Teilt es in gleiche Teile oder nach Cue-Sheet?',
  tool_split_a_recording_on_silence_faq_q5: 'Welchen Schwellenwert nehmen? Schneidet es auch Atemzüge?',
  tool_split_a_recording_on_silence_faq_q6: 'Wie heißen die Dateien, und wie viele Clips sind möglich?',
  tool_split_a_recording_on_silence_faq_q7: 'Kann es entrauschen, Video teilen, Cue folgen oder YouTube rippen?',
  tool_split_a_recording_on_silence_faq_q8: 'Wie groß darf die Datei sein? Was ist mit leiser Musik?',
  tool_split_a_recording_on_silence_format: 'Dateiformat im ZIP',
  tool_split_a_recording_on_silence_format_hint: 'WAV ist verlustfreies PCM. Der MP3-Encoder lädt erst beim Klick auf ZIP herunterladen.',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    'Lange genug stille Lücken finden, in der Mitte jeder Lücke schneiden, ZIP der Clips holen — ohne Upload auf einen Server, Dateien bleiben auf dem Gerät.',
  tool_split_a_recording_on_silence_how_item_1: 'Aufnahme öffnen (oder Beispiel laden).',
  tool_split_a_recording_on_silence_how_item_2: 'Defaults lassen oder Erweiterte Einstellungen (optional) für Schwelle und Mindeststille öffnen.',
  tool_split_a_recording_on_silence_how_item_3: 'An Stille teilen klicken.',
  tool_split_a_recording_on_silence_how_item_4: 'ZIP herunterladen klicken.',
  tool_split_a_recording_on_silence_how_title: 'So gehen Sie vor',
  tool_split_a_recording_on_silence_hud_decode: 'Datei wird in diesem Tab dekodiert…',
  tool_split_a_recording_on_silence_hud_decoded: 'Dekodiert. Rote Marken sind Lücken. An Stille teilen, wenn die Werte passen.',
  tool_split_a_recording_on_silence_hud_detect: 'Stille Fenster werden gemessen…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}s vergangen',
  tool_split_a_recording_on_silence_hud_encode: 'MP3-Clips werden encodiert…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'Datei oder Einstellungen korrigieren, dann erneut An Stille teilen.',
  tool_split_a_recording_on_silence_hud_fail_title: 'An Stille teilen abgebrochen',
  tool_split_a_recording_on_silence_hud_next: 'Fertig. Als Nächstes: ZIP herunterladen.',
  tool_split_a_recording_on_silence_hud_next_zip: 'Fertig. Der ZIP-Download sollte starten.',
  tool_split_a_recording_on_silence_hud_pack: 'Clips werden ins ZIP gepackt…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: 'Schnitt in der Stillemitte…',
  tool_split_a_recording_on_silence_hud_step_decode: 'Dekodieren',
  tool_split_a_recording_on_silence_hud_step_detect: 'Erkennen',
  tool_split_a_recording_on_silence_hud_step_pack: 'Packen',
  tool_split_a_recording_on_silence_hud_step_split: 'Teilen',
  tool_split_a_recording_on_silence_hud_title: 'Fortschritt: An Stille teilen',
  tool_split_a_recording_on_silence_hud_working: 'Start…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: 'Mindestclip (Sekunden)',
  tool_split_a_recording_on_silence_min_clip_hint: 'Startwert 0.3 s. Kürzere Scheiben nach einem Schnitt fallen weg.',
  tool_split_a_recording_on_silence_min_silence: 'Mindeststille (Sekunden)',
  tool_split_a_recording_on_silence_min_silence_hint: 'Startwert 1.0 s, damit kurze Atemzüge keine Schnitte werden.',
  tool_split_a_recording_on_silence_pause: 'Pause',
  tool_split_a_recording_on_silence_play: 'Abspielen',
  tool_split_a_recording_on_silence_preset_album: 'Album',
  tool_split_a_recording_on_silence_preset_hint: 'Sprache ist der Start. Vortrag wartet auf längere Kapitelpausen. Album erwartet Lücken zwischen Tracks.',
  tool_split_a_recording_on_silence_preset_lecture: 'Vortrag',
  tool_split_a_recording_on_silence_preset_speech: 'Sprache',
  tool_split_a_recording_on_silence_preview_hint: 'Rote Bänder sind Lücken, die lang genug zum Teilen sind. Abspielen hört die aktuelle Datei an.',
  tool_split_a_recording_on_silence_result_one:
    '{orig}s · keine Pause lang genug, das ZIP würde nur diese eine Datei enthalten. Mindeststille senken oder Schwelle näher an 0. ZIP herunterladen ist bereit.',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}s · {gaps} Lücke(n) → {count} Clip(s): {list}. ZIP herunterladen ist bereit.',
  tool_split_a_recording_on_silence_rules_body:
    'Etwa alle 50 ms misst die Seite RMS und rechnet in dB: levelDb = 20 × log10(rms). Ein Stück unter der Schwelle, das mindestens die Mindeststille dauert, wird in der Mitte geschnitten. Clips unter dem Mindestclip fallen weg. WAV ist 16-Bit-PCM. MP3 ist CBR bei der gewählten Bitrate. Das ZIP entsteht in diesem Tab.',
  tool_split_a_recording_on_silence_rules_item_1:
    'Sprache: −40 dB, 1.0 s Mindeststille, 0.3 s Mindestclip. Vortrag: −40 dB / 2.0 s / 0.5 s. Albumlücken: −45 dB / 1.5 s / 1.0 s.',
  tool_split_a_recording_on_silence_rules_item_2:
    'Desktop-Limit etwa 40 MB oder 20 Minuten; schmaler Bildschirm etwa 20 MB oder 8 Minuten. Überlimit wird abgelehnt, nicht gekürzt. Mehr als 50 Clips ebenfalls abgelehnt.',
  tool_split_a_recording_on_silence_rules_item_3:
    'Dateien bleiben auf Ihrem Gerät; sie werden nicht auf einen Server hochgeladen. JSZip und der MP3-Encoder laden von dieser Site erst nach ZIP herunterladen.',
  tool_split_a_recording_on_silence_rules_item_4:
    'Dekodieren hängt vom Browser ab. DRM, manche Codecs und Videocontainer scheitern mit klarer Fehlermeldung.',
  tool_split_a_recording_on_silence_rules_item_5:
    'Viele Dateien in einem ZIP. Keine kürzere Einzeldatei, keine feste Dauer, kein Cue-Sheet, kein Entrauschen, kein Video-Mute, kein YouTube-Abruf.',
  tool_split_a_recording_on_silence_rules_title: 'Regeln, mit denen Sie rechnen sollten',
  tool_split_a_recording_on_silence_sample: 'Beispiel laden',
  tool_split_a_recording_on_silence_split: 'An Stille teilen',
  tool_split_a_recording_on_silence_status_done: 'Fertig.',
  tool_split_a_recording_on_silence_threshold: 'Stille-Schwelle (dB)',
  tool_split_a_recording_on_silence_threshold_hint: 'Startwert −40 dB. Näher an 0 wertet mehr der Datei als Stille.',
  tool_split_a_recording_on_silence_title: 'Aufnahme an Stille in mehrere Dateien teilen',
  tool_split_a_recording_on_silence_usecase_1:
    'Vortrag an Kapitelpausen in eigene Dateien im ZIP legen, ohne Gleichdauer-Häckseln.',
  tool_split_a_recording_on_silence_usecase_2:
    'Interview an Stille splitten, damit Antworten später eigene, beschriftbare Clips sind.',
  tool_split_a_recording_on_silence_usecase_3:
    'Mixtape mit Track-Lücken ohne Cue-Sheet: Aufnahme an Pausen zerlegen reicht.',
  tool_split_a_recording_on_silence_usecases_title: 'Passt gut, wenn',
  tool_split_a_recording_on_silence_why_choose_body:
    'Gebaut für ein ZIP aus Clips, die in der Pausenmitte geschnitten werden, mit benannten Defaults Sprache / Vortrag / Album auf der Seite.',
  tool_split_a_recording_on_silence_why_choose_item_1:
    'Schnitt in der Mitte langer stiller Lücken, viele Dateien im ZIP; keine kürzere Einzeldatei.',
  tool_split_a_recording_on_silence_why_choose_item_2:
    'Sprache (−40 dB / 1.0 s / 0.3 s Mindestclip) häckselt Atemzüge nicht; Vortrag und Album stehen namentlich auf der Seite.',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'Die Datei bleibt in diesem Browser-Tab und wird nicht hochgeladen; JSZip und lamejs laden erst beim Klick auf ZIP herunterladen.',
  tool_split_a_recording_on_silence_why_choose_item_4:
    'Zu große Dateien und mehr als 50 Clips werden abgelehnt, bevor ein verstümmeltes ZIP entsteht — kein 1-GB-Versprechen, das den Tab killt.',
  tool_split_a_recording_on_silence_why_choose_title: 'Warum Aufnahme an Stille in mehrere Dateien teilen hier nutzen',
};
export default de;
