/**
 * i18n tool shard (make-a-seamless-audio-loop / de).
 * H1: nahtlose Audio-Schleife; Looper / Crossfade in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsch: eine nahtlose Audio-Schleife erzeugen und exportieren. */
const de: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: 'Erweiterte Einstellungen (optional)',
  tool_make_a_seamless_audio_loop_article:
    'Eine nahtlose Audio-Schleife erstellen in diesem Tab: lokale Datei öffnen, Start und Ende setzen, Crossfade wählen, auf Schleife erstellen klicken, dann WAV exportieren oder MP3 exportieren. Das Ende wird in den Anfang gemischt, damit die Naht nicht knackt. Die Datei bleibt auf dem Gerät und wird nicht auf einen Server hochgeladen.',
  tool_make_a_seamless_audio_loop_bitrate: 'MP3-Bitrate',
  tool_make_a_seamless_audio_loop_bitrate_hint: 'Standard 128 kbit/s. Nur beim Klick auf MP3 exportieren.',
  tool_make_a_seamless_audio_loop_choose_file: 'Audiodatei wählen',
  tool_make_a_seamless_audio_loop_clear: 'Leeren',
  tool_make_a_seamless_audio_loop_crossfade: 'Crossfade (ms)',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    'Standard 50 ms. 20 ms für Drums; 200–500 ms für Pads, Drohnen und Ambient-Betten.',
  tool_make_a_seamless_audio_loop_desc:
    'Eine nahtlose Audio-Schleife auf dem Gerät: das Ende eines lokalen Clips in den Anfang überblenden, dann WAV oder MP3 exportieren — ohne Server-Upload.',
  tool_make_a_seamless_audio_loop_description:
    'Eine nahtlose Audio-Schleife auf Ihrem Gerät erstellen: das Ende eines lokalen Clips per Crossfade in den Anfang legen, dann WAV oder MP3 herunterladen — die Datei wird nicht auf einen Server hochgeladen. Schritte: Datei öffnen, Start und Ende setzen, Crossfade (50 ms), Schleife erstellen, Abspielen um die Naht zu hören, WAV exportieren oder MP3 exportieren. Beispiel: 1,00–3,00 s eines 5-s-Tons mit 50 ms Equal-Power werden etwa 1,95 s. Audioschleife, Audio loop, nahtlose Schleife oder Crossfade ist dieselbe Aufgabe. Kein Wellenform-Studio; kein DJ-Mix zweier Songs, kein YouTube-Rip.',
  tool_make_a_seamless_audio_loop_disclaimer:
    'Sie müssen das Recht haben, die Datei zu verarbeiten. Diese Seite vergibt keine Musiklizenzen und holt keine Streams.',
  tool_make_a_seamless_audio_loop_drop_hint: 'Oder legen Sie WAV, MP3, M4A oder OGG hier ab. Die Verarbeitung bleibt in diesem Tab.',
  tool_make_a_seamless_audio_loop_empty: 'Bitte zuerst eine Audiodatei wählen.',
  tool_make_a_seamless_audio_loop_end: 'Ende (Sekunden)',
  tool_make_a_seamless_audio_loop_equal_power: 'Equal-Power-Crossfade',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    'Standard an, damit die Naht nicht leiser wird. Aus für eine lineare Mischung.',
  tool_make_a_seamless_audio_loop_err_bake:
    'Die gebackene Ausgabe wäre länger als etwa 3 Minuten. Wiederholungen senken oder den Bereich kürzen.',
  tool_make_a_seamless_audio_loop_err_caps:
    'Diese Datei liegt über dem Limit dieses Geräts (etwa 40 MB / 20 Min. am Desktop, 20 MB / 8 Min. auf schmalem Bildschirm). Kürzen Sie sie woanders oder nehmen Sie eine kürzere Datei.',
  tool_make_a_seamless_audio_loop_err_decode:
    'Dieser Browser konnte die Datei nicht dekodieren. Versuchen Sie WAV oder MP3 oder einen Clip ohne DRM.',
  tool_make_a_seamless_audio_loop_err_empty: 'Nichts zum Loopen. Laden Sie eine Datei oder das Beispiel.',
  tool_make_a_seamless_audio_loop_err_fade:
    'Das Crossfade muss kürzer sein als der Bereich. Millisekunden senken oder Start–Ende verlängern.',
  tool_make_a_seamless_audio_loop_err_lame:
    'Der MP3-Encoder hat nicht geladen. Bleiben Sie in diesem Tab und klicken Sie erneut auf MP3 exportieren.',
  tool_make_a_seamless_audio_loop_err_range: 'Ende muss nach Start liegen, innerhalb der dekodierten Dauer.',
  tool_make_a_seamless_audio_loop_err_video:
    'Diese Seite nimmt Video nicht als Haupteingabe. Ziehen Sie zuerst den Ton, dann machen Sie die Schleife.',
  tool_make_a_seamless_audio_loop_example:
    'Beispiel laden erzeugt einen 5,00-s-Ton, setzt Start 1,00 und Ende 3,00, nutzt 50 ms Equal-Power, dann schreibt Schleife erstellen etwa 1,95 s (ein Zyklus). WAV exportieren schreibt PCM; MP3 exportieren nutzt 128 kbit/s, sofern Sie die erweiterten Einstellungen nicht ändern.',
  tool_make_a_seamless_audio_loop_example_title: 'Beispiel',
  tool_make_a_seamless_audio_loop_export_mp3: 'MP3 exportieren',
  tool_make_a_seamless_audio_loop_export_wav: 'WAV exportieren',
  tool_make_a_seamless_audio_loop_faq_a1:
    'Nein. Dekodieren und Wickeln laufen in diesem Tab. Skripte kommen von dieser Site. Die Datei geht nicht an unsere Server.',
  tool_make_a_seamless_audio_loop_faq_a2:
    'Nein. Audioschleife, Audio loop, nahtlose Schleife, Loop Maker oder Looper ist dieses Werkzeug: Bereich markieren, Naht überblenden, WAV oder MP3 exportieren.',
  tool_make_a_seamless_audio_loop_faq_a3:
    'Crossfade mischt das Ende des Bereichs in den Anfang. Standard 50 ms Equal-Power. Etwa 20 ms für Drums; 200–500 ms für Pads.',
  tool_make_a_seamless_audio_loop_faq_a4:
    'Der exportierte Zyklus ist um die Crossfade-Länge kürzer als Start–Ende, weil die Überlappung nur einmal gemischt wird.',
  tool_make_a_seamless_audio_loop_faq_a5:
    'WAV für Spielengines, die die Datei wiederholen. MP3 kleiner (128 kbit/s), wenn die Livestream-App nicht loopen kann; der Encoder lädt erst bei MP3 exportieren.',
  tool_make_a_seamless_audio_loop_faq_a6:
    'Wiederholungen ist standardmäßig 1. Unter erweiterten Einstellungen backen Sie 4 oder 8 Kopien. Mehr als etwa 3 Minuten wird abgelehnt. Kein 10-Stunden-Generator.',
  tool_make_a_seamless_audio_loop_faq_a7:
    'Mischt nicht zwei Songs, ist kein Online-Soundeditor, schreibt kein M4A-Klingelton, findet den Loop-Punkt nicht automatisch und reißt kein YouTube.',
  tool_make_a_seamless_audio_loop_faq_a8:
    'Desktop: etwa 40 MB oder 20 Minuten. Schmaler Bildschirm: etwa 20 MB oder 8 Minuten. Darüber Ablehnung, kein stilles Abschneiden.',
  tool_make_a_seamless_audio_loop_faq_q1: 'Wird mein Audio hochgeladen?',
  tool_make_a_seamless_audio_loop_faq_q2: 'Ich habe Audioschleife, Audio loop oder Loop Maker gesucht. Ist das ein anderes Tool?',
  tool_make_a_seamless_audio_loop_faq_q3: 'Wie nimmt das Crossfade den Klick aus der Naht?',
  tool_make_a_seamless_audio_loop_faq_q4: 'Warum ist der Export kürzer als mein Bereich?',
  tool_make_a_seamless_audio_loop_faq_q5: 'Exportiere ich WAV fürs Spiel oder MP3 für den Stream?',
  tool_make_a_seamless_audio_loop_faq_q6: 'Die Streaming-App loopt nicht. Kann ich mehrere Umläufe backen?',
  tool_make_a_seamless_audio_loop_faq_q7: 'Ist das ein DJ-Mix zweier Songs, ein Klingelton oder eine KI-Loopsuche?',
  tool_make_a_seamless_audio_loop_faq_q8: 'Wie groß darf die Datei sein?',
  tool_make_a_seamless_audio_loop_how_body:
    'Markieren Sie den zu wiederholenden Bereich, blenden Sie das Ende in den Anfang und laden Sie WAV oder MP3 herunter, ohne die Datei hochzuladen.',
  tool_make_a_seamless_audio_loop_how_item_1: 'Öffnen Sie eine Audiodatei (oder klicken Sie auf Beispiel laden).',
  tool_make_a_seamless_audio_loop_how_item_2:
    'Klicken oder ziehen Sie die Wellenform (oder tippen Sie Start und Ende). Ändern Sie Crossfade, wenn 50 ms nicht passt (20 / 50 / 200 / 500 ms).',
  tool_make_a_seamless_audio_loop_how_item_3: 'Klicken Sie auf Schleife erstellen.',
  tool_make_a_seamless_audio_loop_how_item_4: 'Klicken Sie auf Abspielen, um die Naht zu hören, dann WAV exportieren oder MP3 exportieren.',
  tool_make_a_seamless_audio_loop_how_title: 'So funktioniert es',
  tool_make_a_seamless_audio_loop_hud_decode: 'Datei wird in diesem Tab dekodiert…',
  tool_make_a_seamless_audio_loop_hud_decoded: 'Dekodiert. Setzen Sie Start, Ende und Crossfade, dann Schleife erstellen.',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: '{s}s vergangen',
  tool_make_a_seamless_audio_loop_hud_encode: 'MP3 wird kodiert…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'Datei, Zeiten oder Crossfade korrigieren, dann erneut Schleife erstellen.',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'Schleife erstellen gestoppt',
  tool_make_a_seamless_audio_loop_hud_loop: 'Ende wird in den Anfang gewickelt…',
  tool_make_a_seamless_audio_loop_hud_next: 'Fertig. Als Nächstes: Naht abspielen, dann WAV exportieren oder MP3 exportieren.',
  tool_make_a_seamless_audio_loop_hud_next_mp3: 'Fertig. Der MP3-Download sollte starten.',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: 'Dekodieren',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'Kodieren',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'Schleife',
  tool_make_a_seamless_audio_loop_hud_title: 'Schleifenfortschritt',
  tool_make_a_seamless_audio_loop_hud_working: 'Start…',
  tool_make_a_seamless_audio_loop_make: 'Schleife erstellen',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_make_a_seamless_audio_loop_pause: 'Pause',
  tool_make_a_seamless_audio_loop_play: 'Abspielen',
  tool_make_a_seamless_audio_loop_preview_hint:
    'Klicken oder ziehen Sie die Wellenform für Start und Ende. Nach Schleife erstellen wiederholt Abspielen das Ergebnis, damit Sie die Naht hören.',
  tool_make_a_seamless_audio_loop_repeats: 'Wiederholungen (eingebackene Kopien)',
  tool_make_a_seamless_audio_loop_repeats_hint:
    'Standard 1 Zyklus, wenn der Player loopen kann. 4 oder 8, wenn nicht. Mehr als etwa 3 Minuten wird abgelehnt.',
  tool_make_a_seamless_audio_loop_result_tpl:
    'Schleife ist {dur}s ({start}–{end}s, Crossfade {fade} ms, {n} Wiederholung(en)). Export ist bereit.',
  tool_make_a_seamless_audio_loop_rules_body:
    'Der Bereich wird kopiert, dann mischt Equal-Power (oder linear) die letzten Fade-Samples in die ersten. Ausgabelänge = Bereich minus Fade. Wiederholungen kleben diesen Zyklus. WAV ist 16-Bit-PCM. MP3 ist CBR.',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'Desktop-Limit etwa 40 MB oder 20 Minuten; schmaler Bildschirm etwa 20 MB oder 8 Minuten. Darüber Ablehnung, kein Abschneiden.',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'Dateien bleiben auf Ihrem Gerät; sie werden nicht auf einen Server hochgeladen. Der MP3-Encoder lädt von dieser Site erst nach MP3 exportieren.',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'Crossfade muss kürzer sein als der Bereich. Der exportierte Zyklus ist um diese Überlappung kürzer. Equal-Power ist die Standardkurve.',
  tool_make_a_seamless_audio_loop_rules_item_4:
    'Das Dekodieren hängt vom Browser ab. DRM, manche Codecs und Videocontainer scheitern mit einer klaren Fehlermeldung.',
  tool_make_a_seamless_audio_loop_rules_item_5:
    'Mischt nicht zwei Songs, schreibt kein M4A, misst kein BPM, sucht den Loop-Punkt nicht und holt kein YouTube. Eine Datei, ein Bereich, eine Schleife.',
  tool_make_a_seamless_audio_loop_rules_title: 'Regeln, mit denen Sie rechnen sollten',
  tool_make_a_seamless_audio_loop_sample: 'Beispiel laden',
  tool_make_a_seamless_audio_loop_start: 'Start (Sekunden)',
  tool_make_a_seamless_audio_loop_status_done: 'Fertig.',
  tool_make_a_seamless_audio_loop_title: 'Eine nahtlose Audio-Schleife erstellen',
  tool_make_a_seamless_audio_loop_usecase_1:
    'Ein zwei Sekunden langes Spielebett zur nahtlosen Audio-Schleife machen und WAV für eine Engine exportieren, die die Datei wiederholt.',
  tool_make_a_seamless_audio_loop_usecase_2:
    'Livestream-Bett: Groove markieren, 50 ms Crossfade behalten, in den erweiterten Einstellungen 8 Umläufe backen, MP3 exportieren.',
  tool_make_a_seamless_audio_loop_usecase_3:
    'Ein Ambient- oder Drohnenloop mit 200–500 ms Crossfade glätten, bis die Naht verschwindet.',
  tool_make_a_seamless_audio_loop_usecases_title: 'Wann es passt',
  tool_make_a_seamless_audio_loop_why_choose_body:
    'Gebaut für ein Wickeln und einen Download, mit einem Fade, den Sie hören, und Limits auf der Seite.',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    'Dekodieren und Wickeln bleiben in diesem Tab; MP3 exportieren ist das erste Laden des Encoders.',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    'Equal-Power-Crossfade ist standardmäßig an; Chips 20 / 50 / 200 / 500 ms decken Drums und Pads ab.',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'Nach Schleife erstellen wiederholt Abspielen das Ergebnis, damit Sie die Naht vor dem Download prüfen.',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    'Zu große Dateien und gebackene Ausgaben über etwa 3 Minuten werden abgelehnt, nicht still abgeschnitten.',
  tool_make_a_seamless_audio_loop_why_choose_title: 'Warum Eine nahtlose Audio-Schleife erstellen nutzen',
  tool_make_a_seamless_audio_loop_zerocross: 'Start und Ende an den nächsten Nulldurchgang schnappen',
  tool_make_a_seamless_audio_loop_zerocross_hint:
    'Standard an. Stabilisiert die Kanten vor dem Wrap. Aus, wenn Sie samplegenaue Kanten brauchen.',
};
export default de;
