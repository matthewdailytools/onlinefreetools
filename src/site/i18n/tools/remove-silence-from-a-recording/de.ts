/**
 * i18n tool shard (remove-silence-from-a-recording / de).
 * H1: Stille aus einer Aufnahme entfernen.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsch: Totluft / Pausen löschen, eine Datei. */
const de: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: 'Erweiterte Einstellungen (optional)',
  tool_remove_silence_from_a_recording_article:
    'Stille aus einer Aufnahme in diesem Tab entfernen: lokale Datei öffnen, Stille entfernen, WAV oder MP3 exportieren. Totluft wird geschnitten, Sprache bleibt eine kürzere Datei. Kein Server-Upload.',
  tool_remove_silence_from_a_recording_bitrate: 'MP3-Bitrate',
  tool_remove_silence_from_a_recording_bitrate_hint: 'Standard 128 kbps. Nur bei MP3 exportieren.',
  tool_remove_silence_from_a_recording_choose_file: 'Audiodatei wählen',
  tool_remove_silence_from_a_recording_clear: 'Löschen',
  tool_remove_silence_from_a_recording_desc:
    'Stille aus einer lokalen Aufnahme schneiden und eine kürzere WAV- oder MP3-Datei laden; Dateien bleiben auf dem Gerät, ohne Server-Upload.',
  tool_remove_silence_from_a_recording_description:
    'Stille aus einer Aufnahme entfernen: Totluft und lange Pausen auf dem Gerät schneiden, eine kürzere Datei behalten, WAV oder MP3 laden — ohne Server-Upload. Schritte: Aufnahme öffnen, Stille entfernen (Standard −40 dB / 0,5 s / 0,15 s behalten), WAV oder MP3 exportieren. Beispiel: 5,00 s mit zwei 1,20-s-Lücken werden etwa 2,90 s. Suche nach Stille entfernen, Pausen löschen oder Totluft ist dieselbe Aufgabe. Kein ZIP-Split, kein Stumm-Video.',
  tool_remove_silence_from_a_recording_drop_hint: 'Oder WAV, MP3, M4A oder OGG hier ablegen. Die Verarbeitung bleibt in diesem Tab.',
  tool_remove_silence_from_a_recording_empty: 'Bitte zuerst eine Audiodatei wählen.',
  tool_remove_silence_from_a_recording_err_caps:
    'Die Datei überschreitet die Grenze dieses Geräts (etwa 40 MB / 20 Min. Desktop, 20 MB / 8 Min. schmales Display). Zuerst kürzen oder eine kürzere Datei nutzen.',
  tool_remove_silence_from_a_recording_err_decode:
    'Dieser Browser konnte die Datei nicht decodieren. WAV oder MP3 versuchen, oder einen Clip ohne DRM.',
  tool_remove_silence_from_a_recording_err_empty: 'Nichts zu verarbeiten. Datei oder Beispiel laden.',
  tool_remove_silence_from_a_recording_err_empty_keep:
    'Es bleibt kein Audio. Schwelle negativer setzen oder Mindeststille erhöhen, damit Sprache nicht als Lücke gilt.',
  tool_remove_silence_from_a_recording_err_lame: 'Der MP3-Encoder lud nicht. Tab offen lassen und MP3 exportieren erneut versuchen.',
  tool_remove_silence_from_a_recording_err_video:
    'Diese Seite nimmt kein Video als Haupteingabe. Sie kürzt Tondateien; sie macht Videos nicht stumm und schneidet keine Jump-Cuts.',
  tool_remove_silence_from_a_recording_example:
    'Beispiel laden erzeugt 5,00 s Ton mit zwei 1,20-s-Pausen (0,80 + 1,20 + 0,80 + 1,20 + 1,00). Stille entfernen bei −40 dB / 0,5 s / 0,15 s ergibt etwa 2,90 s. WAV schreibt PCM; MP3 nutzt 128 kbps, außer in den erweiterten Einstellungen geändert.',
  tool_remove_silence_from_a_recording_example_title: 'Beispiel',
  tool_remove_silence_from_a_recording_export_mp3: 'MP3 exportieren',
  tool_remove_silence_from_a_recording_export_wav: 'WAV exportieren',
  tool_remove_silence_from_a_recording_faq_a1:
    'Nein. Decodieren und Schneiden laufen in diesem Tab. Skripte kommen von dieser Site. Die Datei geht nicht auf unsere Server.',
  tool_remove_silence_from_a_recording_faq_a2:
    'Dieselbe Aufgabe. Stille entfernen, Pausen löschen, Totluft entfernen oder Stille rausschneiden heißt: lange leise Lücken schneiden und eine kürzere WAV- oder MP3-Datei exportieren.',
  tool_remove_silence_from_a_recording_faq_a3:
    'Mit Sprache starten (−40 dB / 0,5 s / 0,15 s). Lautes Zimmer: Schwelle Richtung −30 dB, Minimum Richtung 0,8 s. Studio: Sanft (−50 dB). Wenn Endsilben fehlen, Schwelle negativer oder Minimum höher.',
  tool_remove_silence_from_a_recording_faq_a4:
    'Zuschneiden setzt Start und Ende per Hand. Hier fallen auch Lücken in der Mitte weg, danach eine Datei. Nur Ränder per Hand: den Trimmer nutzen.',
  tool_remove_silence_from_a_recording_faq_a5:
    'Nein. Split an Stille in viele Dateien oder ein ZIP ist eine andere Aufgabe. Hier kommt immer eine Datei.',
  tool_remove_silence_from_a_recording_faq_a6:
    'Nein. Rauschreduktion kürzt die Dauer nicht. „Äh“ braucht Transkript. Video stumm oder YouTube ziehen fällt raus. Nur Audio, an dem Sie Rechte haben.',
  tool_remove_silence_from_a_recording_faq_a7:
    'Gleiche Aufgabe, andere Software. Audacity Truncate Silence kürzt Passagen unter einer Schwelle, die lange genug dauern. Hier im Browser, keine Installationsanleitung.',
  tool_remove_silence_from_a_recording_faq_a8:
    'Desktop: etwa 40 MB oder 20 Minuten. Schmales Display: etwa 20 MB oder 8 Minuten. Darüber Ablehnung vor dem Decode. Leise Musikpassagen können falsch geschnitten werden — Minimum erhöhen oder das Tool lassen.',
  tool_remove_silence_from_a_recording_faq_q1: 'Wird meine Aufnahme hochgeladen?',
  tool_remove_silence_from_a_recording_faq_q2: 'Ich suchte Stille entfernen, Totluft oder Pausen löschen. Ist das ein anderes Tool?',
  tool_remove_silence_from_a_recording_faq_q3: 'Welche Schwelle? Werden Atemzüge geschnitten?',
  tool_remove_silence_from_a_recording_faq_q4: 'Ich wollte nur Anfang und Ende kürzen. Ist das der Audiozuschnitt?',
  tool_remove_silence_from_a_recording_faq_q5: 'Wird die Aufnahme in viele Dateien geteilt?',
  tool_remove_silence_from_a_recording_faq_q6: 'Rauschen, Füllwörter, Video stumm oder YouTube?',
  tool_remove_silence_from_a_recording_faq_q7: 'Wie Audacity Truncate Silence?',
  tool_remove_silence_from_a_recording_faq_q8: 'Wie groß darf die Datei sein? Und leise Musik?',
  tool_remove_silence_from_a_recording_how_body:
    'Lange genug leise Lücken finden, kürzen, Sprache zu einer Datei fügen, WAV oder MP3 laden — ohne Upload.',
  tool_remove_silence_from_a_recording_how_item_1: 'Aufnahme öffnen (oder Beispiel laden).',
  tool_remove_silence_from_a_recording_how_item_2: 'Standards lassen oder Erweiterte Einstellungen (optional) für Schwelle und Mindeststille öffnen.',
  tool_remove_silence_from_a_recording_how_item_3: 'Stille entfernen klicken.',
  tool_remove_silence_from_a_recording_how_item_4: 'WAV exportieren oder MP3 exportieren klicken.',
  tool_remove_silence_from_a_recording_how_title: 'So funktioniert es',
  tool_remove_silence_from_a_recording_hud_cut: 'Lücken schneiden und eine Datei fügen…',
  tool_remove_silence_from_a_recording_hud_decode: 'Datei in diesem Tab decodieren…',
  tool_remove_silence_from_a_recording_hud_decoded: 'Decodiert. Rot markiert Lücken. Danach Stille entfernen.',
  tool_remove_silence_from_a_recording_hud_detect: 'Leise Fenster messen…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: '{s}s vergangen',
  tool_remove_silence_from_a_recording_hud_encode: 'MP3 kodieren…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'Datei oder Werte prüfen, dann erneut Stille entfernen.',
  tool_remove_silence_from_a_recording_hud_fail_title: 'Stille entfernen gestoppt',
  tool_remove_silence_from_a_recording_hud_next: 'Fertig. Als Nächstes: WAV oder MP3 exportieren.',
  tool_remove_silence_from_a_recording_hud_next_mp3: 'Fertig. Der MP3-Download sollte starten.',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'Schnitt',
  tool_remove_silence_from_a_recording_hud_step_decode: 'Decode',
  tool_remove_silence_from_a_recording_hud_step_detect: 'Erkennen',
  tool_remove_silence_from_a_recording_hud_step_encode: 'Encode',
  tool_remove_silence_from_a_recording_hud_title: 'Fortschritt Stille entfernen',
  tool_remove_silence_from_a_recording_hud_working: 'Start…',
  tool_remove_silence_from_a_recording_keep: 'Pro Lücke behalten (Sekunden)',
  tool_remove_silence_from_a_recording_keep_hint: 'Standard 0,15 s, damit der Schnitt nicht springt. 0 entfernt die ganze Lücke.',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_remove_silence_from_a_recording_min_silence: 'Mindeststille (Sekunden)',
  tool_remove_silence_from_a_recording_min_silence_hint: 'Standard 0,5 s. Kürzere Pausen zwischen Wörtern bleiben.',
  tool_remove_silence_from_a_recording_pause: 'Pause',
  tool_remove_silence_from_a_recording_play: 'Abspielen',
  tool_remove_silence_from_a_recording_preset_gentle: 'Sanft',
  tool_remove_silence_from_a_recording_preset_hint: 'Sprache ist der Start. Sanft lässt mehr Pausen. Eng schneidet stärker.',
  tool_remove_silence_from_a_recording_preset_speech: 'Sprache',
  tool_remove_silence_from_a_recording_preset_tight: 'Eng',
  tool_remove_silence_from_a_recording_preview_hint: 'Rote Bänder sind Lücken, die lang genug zum Schneiden sind. Abspielen hört die aktuelle Datei (oder das Ergebnis).',
  tool_remove_silence_from_a_recording_remove: 'Stille entfernen',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}s → {next}s. {removed}s entfernt ({pct}%) in {gaps} Lücke(n). Export bereit.',
  tool_remove_silence_from_a_recording_rules_body:
    'Etwa alle 50 ms RMS, dann levelDb = 20 × log10(rms). Ein Stück unter der Schwelle und länger als die Mindeststille wird auf die Keep-Länge gekürzt, Sprache wird angefügt. WAV ist 16-bit-PCM. MP3 ist CBR.',
  tool_remove_silence_from_a_recording_rules_item_1:
    'Sprache: −40 dB, 0,5 s Minimum, 0,15 s behalten. Lautes Zimmer: −30 dB / 0,8 s / 0,20 s. Studio: −50 dB / 0,4 s / 0,15 s.',
  tool_remove_silence_from_a_recording_rules_item_2:
    'Desktop-Grenze etwa 40 MB oder 20 Minuten; schmales Display etwa 20 MB oder 8 Minuten. Darüber Ablehnung, kein stilles Kürzen.',
  tool_remove_silence_from_a_recording_rules_item_3:
    'Dateien bleiben auf dem Gerät, ohne Server-Upload. Der MP3-Encoder lädt von dieser Site erst nach MP3 exportieren.',
  tool_remove_silence_from_a_recording_rules_item_4:
    'Decode hängt vom Browser ab. DRM, manche Codecs und Videocontainer scheitern mit klarer Meldung.',
  tool_remove_silence_from_a_recording_rules_item_5:
    'Eine Datei. Kein ZIP, keine Rauschreduktion, keine Füllwörter, kein Video stumm, kein YouTube.',
  tool_remove_silence_from_a_recording_rules_title: 'Regeln, mit denen Sie rechnen sollten',
  tool_remove_silence_from_a_recording_sample: 'Beispiel laden',
  tool_remove_silence_from_a_recording_status_done: 'Fertig.',
  tool_remove_silence_from_a_recording_threshold: 'Stille-Schwelle (dB)',
  tool_remove_silence_from_a_recording_threshold_hint: 'Standard −40 dB. Näher an 0 behandelt mehr als Stille.',
  tool_remove_silence_from_a_recording_title: 'Stille aus einer Aufnahme entfernen',
  tool_remove_silence_from_a_recording_usecase_1:
    'Totluft in einem Gesprächspodcast schneiden und eine kürzere Folge behalten.',
  tool_remove_silence_from_a_recording_usecase_2:
    'Meeting ohne Sprecher kürzen und eine MP3 exportieren.',
  tool_remove_silence_from_a_recording_usecase_3:
    'Denk-Pausen aus einem Sprachnotiz-Memo nehmen und eine Datei verschicken.',
  tool_remove_silence_from_a_recording_usecases_title: 'Wann es passt',
  tool_remove_silence_from_a_recording_why_choose_body:
    'Für eine kürzere Datei: Schwellen-Tabelle und entfernte Sekunden stehen auf der Seite.',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    'Lücken weg, Sprache in einer Datei — kein ZIP mit Clips.',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    'Sprach-Standard (−40 dB / 0,5 s / 0,15 s) passt zu Stimme; die Ergebniszeile zeigt entfernte Sekunden.',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'Die Datei bleibt in diesem Tab, ohne Server-Upload; MP3-Encoder erst beim Klick.',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    'Zu große oder zu lange Dateien werden vor dem Decode abgelehnt, statt 1 GB zu versprechen.',
  tool_remove_silence_from_a_recording_why_choose_title: 'Warum Stille aus einer Aufnahme entfernen nutzen',
};
export default de;
