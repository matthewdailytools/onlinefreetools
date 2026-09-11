/**
 * i18n tool shard (trim-an-audio-clip-and-export / de).
 * H1: Audioclip zuschneiden und exportieren. MP3 Cutter nur in FAQ absorbieren.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Texte: Audioclip zuschneiden und exportieren. */
const de: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: 'Erweiterte Einstellungen (optional)',
  tool_trim_an_audio_clip_and_export_article:
    'Öffnen Sie eine Audiodatei auf dem Gerät, setzen Sie Start und Ende, klicken Sie Zuschneiden, dann WAV exportieren oder MP3 exportieren. Die Datei bleibt auf Ihrem Gerät, ohne Server-Upload. Ein Schnitt, kein Wellenform-Studio.',
  tool_trim_an_audio_clip_and_export_bitrate: 'MP3-Bitrate',
  tool_trim_an_audio_clip_and_export_bitrate_hint: 'Standard 128 kbps. Wird nur bei MP3 exportieren genutzt.',
  tool_trim_an_audio_clip_and_export_choose_file: 'Audiodatei wählen',
  tool_trim_an_audio_clip_and_export_clear: 'Leeren',
  tool_trim_an_audio_clip_and_export_desc:
    'Audio zuschneiden oder trimmen, Start und Ende setzen, WAV oder MP3 exportieren. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
  tool_trim_an_audio_clip_and_export_description:
    'Audio zuschneiden auf dem Gerät: setzen Sie Start und Ende eines lokalen Clips und laden Sie WAV oder MP3 herunter — ohne Server-Upload. Schritte: Datei öffnen, auf der Wellenform klicken oder ziehen (oder Start und Ende tippen), Zuschneiden, WAV exportieren oder MP3 exportieren. Beispiel: aus einem 5-Sekunden-Ton 1,00–3,00 s als WAV behalten (oder MP3 mit 128 kbps). mp3 schneiden, audio trimmen, Audioclip zuschneiden oder ein mp3 cutter ist derselbe Start–Ende-Export. Kein voller Wellenform-Editor; Video ist keine Haupteingabe.',
  tool_trim_an_audio_clip_and_export_drop_hint: 'Oder legen Sie WAV, MP3, M4A oder OGG hier ab. Die Arbeit bleibt in diesem Tab.',
  tool_trim_an_audio_clip_and_export_empty: 'Zuerst eine Audiodatei wählen.',
  tool_trim_an_audio_clip_and_export_end: 'Ende (Sekunden)',
  tool_trim_an_audio_clip_and_export_err_caps:
    'Diese Datei liegt über dem Limit dieses Geräts (etwa 40 MB / 20 Min. am Desktop, 20 MB / 8 Min. auf schmalem Bildschirm). Kürzen Sie sie woanders oder nehmen Sie eine kürzere Datei.',
  tool_trim_an_audio_clip_and_export_err_decode:
    'Dieser Browser konnte die Datei nicht dekodieren. Versuchen Sie WAV oder MP3 oder einen Clip ohne DRM.',
  tool_trim_an_audio_clip_and_export_err_empty: 'Nichts zum Zuschneiden. Laden Sie zuerst eine Datei oder das Beispiel.',
  tool_trim_an_audio_clip_and_export_err_lame: 'Der MP3-Encoder ließ sich nicht laden. Bleiben Sie in diesem Tab und versuchen Sie MP3 exportieren erneut.',
  tool_trim_an_audio_clip_and_export_err_range: 'Ende muss nach Start liegen, innerhalb der dekodierten Dauer.',
  tool_trim_an_audio_clip_and_export_err_video:
    'Diese Seite nimmt Video nicht als Haupteingabe. Extrahieren Sie zuerst das Audio und schneiden Sie die Tondatei.',
  tool_trim_an_audio_clip_and_export_example:
    'Beispiel laden erzeugt im Speicher einen 5,00-s-Ton, setzt Start 1,00 und Ende 3,00; Zuschneiden behält etwa 2,00 s. WAV exportieren schreibt PCM; MP3 exportieren nutzt 128 kbps, außer Sie ändern die erweiterten Einstellungen.',
  tool_trim_an_audio_clip_and_export_example_title: 'Beispiel',
  tool_trim_an_audio_clip_and_export_export_mp3: 'MP3 exportieren',
  tool_trim_an_audio_clip_and_export_export_wav: 'WAV exportieren',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'Nein. Dekodieren und Schneiden laufen in diesem Tab. Skripte kommen von dieser Site. Die Datei geht nicht an unsere Server.',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'Nein. mp3 schneiden, audio zuschneiden, audio trimmen, Audioclip zuschneiden oder ein mp3 cutter ist dieses Werkzeug: Start–Ende behalten, dann WAV exportieren oder MP3 exportieren.',
  tool_trim_an_audio_clip_and_export_faq_a3:
    'Standardmäßig rastet der Schnitt an einem nahen Nulldurchgang ein, damit die Naht weniger klickt. Unter Erweiterte Einstellungen (optional) abschaltbar.',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV behält das geschnittene PCM. MP3 ist kleiner (Standard 128 kbps); der Encoder lädt erst bei MP3 exportieren.',
  tool_trim_an_audio_clip_and_export_faq_a5:
    'Nein. Hier nur Start und Ende schneiden und exportieren. Ein voller Online-Sound-Editor / Wellenform-Arbeitsplatz ist ein späteres, separates Tool.',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'Sie können auf etwa 30 s kürzen, aber wir schreiben kein M4A und kein automatisches Fade. Die Klingelton-Spezifikation ist eine andere Aufgabe.',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'Nein. Video-Demux und YouTube-Rip sind außen vor. Nutzen Sie eine Tondatei, die Sie bearbeiten dürfen.',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'Desktop: etwa 40 MB oder 20 Minuten. Schmaler Bildschirm: etwa 20 MB oder 8 Minuten. Über dem Limit: Ablehnung, kein stilles Kürzen.',
  tool_trim_an_audio_clip_and_export_faq_q1: 'Wird mein Audio hochgeladen?',
  tool_trim_an_audio_clip_and_export_faq_q2: 'Ich habe nach mp3 schneiden, audio zuschneiden oder audio trimmen gesucht. Ist das ein anderes Werkzeug?',
  tool_trim_an_audio_clip_and_export_faq_q3: 'Warum springt der Schnitt? Auf anderen Sites höre ich ein Klicken.',
  tool_trim_an_audio_clip_and_export_faq_q4: 'WAV oder MP3 exportieren?',
  tool_trim_an_audio_clip_and_export_faq_q5: 'Ist das ein Online-Sound-Editor?',
  tool_trim_an_audio_clip_and_export_faq_q6: 'Kann ich einen iPhone-Klingelton als M4A machen?',
  tool_trim_an_audio_clip_and_export_faq_q7: 'Kann ich Audio aus einem Video oder YouTube ziehen?',
  tool_trim_an_audio_clip_and_export_faq_q8: 'Wie groß darf die Datei sein?',
  tool_trim_an_audio_clip_and_export_how_body:
    'Behalten Sie nur den Teil zwischen Start und Ende und laden Sie WAV oder MP3 herunter — ohne Server-Upload.',
  tool_trim_an_audio_clip_and_export_how_item_1: 'Öffnen Sie eine Audiodatei (oder klicken Sie Beispiel laden).',
  tool_trim_an_audio_clip_and_export_how_item_2: 'Klicken oder ziehen Sie auf der Wellenform (oder tippen Sie Start und Ende) den zu behaltenden Teil.',
  tool_trim_an_audio_clip_and_export_how_item_3: 'Klicken Sie Zuschneiden.',
  tool_trim_an_audio_clip_and_export_how_item_4: 'Klicken Sie WAV exportieren oder MP3 exportieren.',
  tool_trim_an_audio_clip_and_export_how_title: 'So funktioniert es',
  tool_trim_an_audio_clip_and_export_hud_decode: 'Datei wird in diesem Tab dekodiert…',
  tool_trim_an_audio_clip_and_export_hud_decoded: 'Dekodiert. Setzen Sie Start und Ende, dann Zuschneiden.',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: '{s}s vergangen',
  tool_trim_an_audio_clip_and_export_hud_encode: 'MP3 wird kodiert…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'Datei oder Zeiten korrigieren, dann erneut Zuschneiden.',
  tool_trim_an_audio_clip_and_export_hud_fail_title: 'Zuschnitt gestoppt',
  tool_trim_an_audio_clip_and_export_hud_next: 'Fertig. Nächster Schritt: WAV exportieren oder MP3 exportieren.',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: 'Fertig. Der MP3-Download sollte starten.',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: 'Dekodieren',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'Kodieren',
  tool_trim_an_audio_clip_and_export_hud_step_trim: 'Zuschneiden',
  tool_trim_an_audio_clip_and_export_hud_title: 'Zuschnitt-Fortschritt',
  tool_trim_an_audio_clip_and_export_hud_trim: 'Start–Ende-Bereich wird geschnitten…',
  tool_trim_an_audio_clip_and_export_hud_working: 'Start…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} Kan.',
  tool_trim_an_audio_clip_and_export_pause: 'Pause',
  tool_trim_an_audio_clip_and_export_play: 'Abspielen',
  tool_trim_an_audio_clip_and_export_preview_hint: 'Klicken oder ziehen Sie auf der Wellenform, um Start und Ende zu setzen. Abspielen hört diesen Bereich.',
  tool_trim_an_audio_clip_and_export_result_tpl: '{dur}s behalten ({start}–{end}s). Export bereit.',
  tool_trim_an_audio_clip_and_export_rules_body:
    'Abtastwerte zwischen Start und Ende werden in einen neuen Puffer kopiert. Standardmäßig rastet jede Kante an einem nahen Nulldurchgang. WAV schreibt 16-Bit-PCM. MP3 ist CBR mit der gewählten Bitrate.',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'Desktop-Limit etwa 40 MB oder 20 Minuten; schmaler Bildschirm etwa 20 MB oder 8 Minuten. Darüber: Ablehnung, kein stilles Kürzen.',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Der MP3-Encoder lädt von dieser Site erst nach MP3 exportieren.',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    'Das Dekodieren hängt vom Browser ab. DRM, manche Codecs und Videocontainer scheitern mit einer klaren Fehlermeldung.',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'Kein Mischen, kein Fade, kein M4A, kein YouTube-Abruf. Eine Datei, ein Bereich, ein Export.',
  tool_trim_an_audio_clip_and_export_rules_title: 'Regeln, mit denen Sie rechnen sollten',
  tool_trim_an_audio_clip_and_export_sample: 'Beispiel laden',
  tool_trim_an_audio_clip_and_export_start: 'Start (Sekunden)',
  tool_trim_an_audio_clip_and_export_status_done: 'Fertig.',
  tool_trim_an_audio_clip_and_export_title: 'Audioclip zuschneiden und exportieren',
  tool_trim_an_audio_clip_and_export_trim: 'Zuschneiden',
  tool_trim_an_audio_clip_and_export_usecase_1: 'Audio zuschneiden in einem Podcast: 8-s-Bumper überspringen, MP3 für den Chat exportieren.',
  tool_trim_an_audio_clip_and_export_usecase_2: '12 s Zitat aus einer Besprechung behalten und WAV archivieren.',
  tool_trim_an_audio_clip_and_export_usecase_3: 'Stille an beiden Enden einer Sprachnotiz wegschneiden — derselbe Schnitt wie mp3 schneiden oder audio trimmen.',
  tool_trim_an_audio_clip_and_export_usecases_title: 'Gute Passungen',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    'Für einen Schnitt und einen Download gebaut, mit Limits und Klick-Minderung, die Sie auf der Seite prüfen können.',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    'Dekodieren und Schneiden bleiben in diesem Tab; das Encoder-Skript kommt erst bei MP3 exportieren.',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    'Zu große oder zu lange Dateien werden abgelehnt, nicht still gekürzt.',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'Nulldurchgang ist standardmäßig an, damit die Naht weniger klickt; abschaltbar.',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV und MP3 sind getrennte Export-Buttons, wie in den Schritten; Bitrate nur unter Erweitert.',
  tool_trim_an_audio_clip_and_export_why_choose_title: 'Warum unsere Tools Audioclip zuschneiden und exportieren wählen',
  tool_trim_an_audio_clip_and_export_zerocross: 'Start und Ende an einen nahen Nulldurchgang rasten',
  tool_trim_an_audio_clip_and_export_zerocross_hint: 'Standard an. Weniger Klicks an der Naht. Aus für kantengenaue Samples.',
};
export default de;
