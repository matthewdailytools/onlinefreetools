/**
 * i18n tool shard (split-an-audio-file-by-duration / de).
 * H1 als Aufgabensatz; gleiche Teile / alle 60 s in desc und FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche Suchcopy: Audiodatei nach Dauer teilen und als ZIP holen. */
const de: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: 'Erweiterte Einstellungen (optional)',
  tool_split_an_audio_file_by_duration_article:
    'Teilen Sie eine Audiodatei nach Dauer in diesem Tab: Datei öffnen, Sekunden setzen, Nach Dauer teilen, dann ZIP herunterladen. Jeder Clip dauert N Sekunden, der letzte behält den Rest. Die Datei bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
  tool_split_an_audio_file_by_duration_bitrate: 'MP3-Bitrate',
  tool_split_an_audio_file_by_duration_bitrate_hint: 'Standard 128 kbps. Nur wenn das ZIP MP3 enthält.',
  tool_split_an_audio_file_by_duration_chip_180: '3 Min.',
  tool_split_an_audio_file_by_duration_chip_30: '30 s',
  tool_split_an_audio_file_by_duration_chip_300: '5 Min.',
  tool_split_an_audio_file_by_duration_chip_60: '60 s',
  tool_split_an_audio_file_by_duration_choose_file: 'Audiodatei wählen',
  tool_split_an_audio_file_by_duration_chunk: 'Stücklänge (Sekunden)',
  tool_split_an_audio_file_by_duration_chunk_hint:
    '2 s passt zum Beispiel. Für eine Vorlesung 60 s oder 3 Min. Der letzte Clip behält Restzeit.',
  tool_split_an_audio_file_by_duration_clear: 'Löschen',
  tool_split_an_audio_file_by_duration_clip_download: 'Diesen Clip speichern',
  tool_split_an_audio_file_by_duration_clip_play: 'Diesen Clip abspielen',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'Clip {n} · {dur}s ({start}s–{end}s)',
  tool_split_an_audio_file_by_duration_clips_title: 'Clips für das ZIP',
  tool_split_an_audio_file_by_duration_desc:
    'Datei nach Dauer in gleich lange Clips teilen und ZIP holen; bleibt auf dem Gerät, ohne Server-Upload.',
  tool_split_an_audio_file_by_duration_description:
    'Audiodatei nach Dauer teilen auf Ihrem Gerät: gleich lange Stücke, der letzte Clip behält den Rest, ZIP zum Download — nicht auf einen Server hochgeladen. Schritte: Datei öffnen, Sekunden setzen (Beispiel 2 s; Chips 30 / 60 / 180 / 300 s), Nach Dauer teilen, ZIP herunterladen. Beispiel: 5,00 s bei 2 s ergeben 2,00 / 2,00 / 1,00 s. Audio nach Dauer teilen, MP3 in gleiche Teile splitten oder alle 60 Sekunden schneiden ist dieselbe Aufgabe. Kein Schnitt an Stille, kein Cue, kein Handzuschnitt, kein Stummschalten von Video.',
  tool_split_an_audio_file_by_duration_download_zip: 'ZIP herunterladen',
  tool_split_an_audio_file_by_duration_drop_hint: 'Oder WAV, MP3, M4A oder OGG hierher ziehen. Die Verarbeitung bleibt in diesem Tab.',
  tool_split_an_audio_file_by_duration_empty: 'Bitte zuerst eine Audiodatei wählen.',
  tool_split_an_audio_file_by_duration_equal_parts: 'Oder in N gleiche Teile splitten',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    'Leer = Sekundenfeld. 2–50 setzt die Stücklänge auf Gesamtdauer ÷ N für diesen Schnitt.',
  tool_split_an_audio_file_by_duration_err_caps:
    'Die Datei überschreitet die Grenze dieses Geräts (etwa 40 MB / 20 Min. am Desktop, 20 MB / 8 Min. auf schmalem Bildschirm). Kürzen Sie sie vorher oder nehmen Sie eine kürzere Datei.',
  tool_split_an_audio_file_by_duration_err_chunk:
    'Die Stücklänge muss zwischen 0,5 und 1200 Sekunden liegen. Erhöhen Sie sie, wenn Sie an 50 Clips stoßen.',
  tool_split_an_audio_file_by_duration_err_decode:
    'Dieser Browser konnte die Datei nicht dekodieren. Versuchen Sie WAV oder MP3 oder einen Clip ohne DRM.',
  tool_split_an_audio_file_by_duration_err_empty: 'Nichts zu verarbeiten. Laden Sie eine Datei oder das Beispiel.',
  tool_split_an_audio_file_by_duration_err_lame: 'Der MP3-Encoder ließ sich nicht laden. Tab offen lassen und ZIP herunterladen erneut versuchen.',
  tool_split_an_audio_file_by_duration_err_too_many:
    'Mehr als 50 Clips. Stücklänge erhöhen (60 s oder 3 Min.). Die Seite lehnt ab, statt zu kürzen.',
  tool_split_an_audio_file_by_duration_err_video:
    'Diese Seite nimmt kein Video als Haupteingabe. Sie teilt eine Tondatei nach Dauer; sie schaltet kein Video stumm.',
  tool_split_an_audio_file_by_duration_err_zip: 'Die ZIP-Bibliothek ließ sich nicht laden. Tab offen lassen und ZIP herunterladen erneut versuchen.',
  tool_split_an_audio_file_by_duration_example:
    'Beispiel laden erzeugt einen 5,00-s-Ton bei 440 Hz. Nach Dauer teilen bei 2,00 s schneidet bei 2,00 s und 4,00 s: drei Clips 2,00 / 2,00 / 1,00 s (letzter Clip behält den Rest). ZIP herunterladen schreibt sample-01.wav, außer Sie wählen MP3 unter Erweiterte Einstellungen.',
  tool_split_an_audio_file_by_duration_example_title: 'Beispiel',
  tool_split_an_audio_file_by_duration_faq_a1:
    'Nein. Dekodieren, Teilen und ZIP-Packen laufen in diesem Tab. Skripte kommen von dieser Site. Die Datei geht nicht auf unsere Server.',
  tool_split_an_audio_file_by_duration_faq_a2:
    'Ja. Audio nach Dauer teilen, MP3 in gleiche Teile splitten, alle 60 Sekunden schneiden oder Clips als ZIP ist dieses Werkzeug: lokale Datei alle N Sekunden schneiden und viele Dateien in einem ZIP mitnehmen. N gleiche Teile stehen unter Erweiterte Einstellungen.',
  tool_split_an_audio_file_by_duration_faq_a3:
    'Der letzte Clip behält Restzeit. 5,00 s bei 2 s werden 2,00 / 2,00 / 1,00 s, ohne Stille aufzufüllen.',
  tool_split_an_audio_file_by_duration_faq_a4:
    'Nein. Aufnahme an Stille teilen schneidet an Pausen. Hier zählt die Uhr. Cue-Sheets und Schnitt nach Dateigröße gehören nicht dazu.',
  tool_split_an_audio_file_by_duration_faq_a5:
    'Beim Beispiel 2 s lassen. Für Kurzclips 30 s oder 60 s; für eine Vorlesung 3 oder 5 Minuten. Vier gleiche Dateien: 4 unter Erweitert eintragen.',
  tool_split_an_audio_file_by_duration_faq_a6:
    'Im ZIP heißen die Dateien {stem}-01.wav (oder .mp3). Einzelne Clips gehen auch aus der Liste. Obergrenze 50; darüber Ablehnung.',
  tool_split_an_audio_file_by_duration_faq_a7:
    'Nein. Kein Entrauschen, kein Stummschalten von Video, kein Cue/APE, kein Handzuschnitt, kein YouTube-Rip. Nur Tondateien, an denen Sie Rechte haben.',
  tool_split_an_audio_file_by_duration_faq_a8:
    'Desktop: etwa 40 MB oder 20 Minuten. Schmaler Bildschirm: etwa 20 MB oder 8 Minuten. Zu große Dateien werden vor dem Dekodieren abgelehnt.',
  tool_split_an_audio_file_by_duration_faq_q1: 'Wird meine Audiodatei hochgeladen?',
  tool_split_an_audio_file_by_duration_faq_q2:
    'Ich habe nach MP3 in gleiche Teile splitten oder Audio nach Dauer teilen gesucht. Ist das ein anderes Werkzeug?',
  tool_split_an_audio_file_by_duration_faq_q3: 'Was passiert mit Restzeit im letzten Clip?',
  tool_split_an_audio_file_by_duration_faq_q4: 'Teilt es an Stille, folgt einem Cue oder nach Dateigröße?',
  tool_split_an_audio_file_by_duration_faq_q5: 'Welche Stücklänge soll ich nehmen?',
  tool_split_an_audio_file_by_duration_faq_q6: 'Wie heißen die Dateien und wie viele Clips sind möglich?',
  tool_split_an_audio_file_by_duration_faq_q7: 'Kann es entrauschen, Video teilen, ein Cue lesen oder YouTube holen?',
  tool_split_an_audio_file_by_duration_faq_q8: 'Wie groß darf die Datei sein?',
  tool_split_an_audio_file_by_duration_format: 'Format im ZIP',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV ist verlustfreies PCM. MP3 lädt den Encoder erst bei ZIP herunterladen.',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    'Alle N Sekunden nach der Uhr schneiden, Rest im letzten Clip lassen, ZIP holen — ohne Upload auf einen Server.',
  tool_split_an_audio_file_by_duration_how_item_1: 'Audiodatei öffnen (oder Beispiel laden).',
  tool_split_an_audio_file_by_duration_how_item_2: '2 Sekunden lassen oder Chip / Sekundenfeld nutzen.',
  tool_split_an_audio_file_by_duration_how_item_3: 'Nach Dauer teilen anklicken.',
  tool_split_an_audio_file_by_duration_how_item_4: 'ZIP herunterladen anklicken.',
  tool_split_an_audio_file_by_duration_how_title: 'So geht es',
  tool_split_an_audio_file_by_duration_hud_decode: 'Datei wird in diesem Tab dekodiert…',
  tool_split_an_audio_file_by_duration_hud_decoded: 'Dekodiert. Weiße Marken sind geplante Schnitte. Nach Dauer teilen, wenn die Länge stimmt.',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: '{s}s vergangen',
  tool_split_an_audio_file_by_duration_hud_encode: 'MP3-Clips werden encodiert…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'Datei oder Stücklänge prüfen, dann erneut Nach Dauer teilen.',
  tool_split_an_audio_file_by_duration_hud_fail_title: 'Nach Dauer teilen gestoppt',
  tool_split_an_audio_file_by_duration_hud_next: 'Fertig. Nächster Schritt: ZIP herunterladen.',
  tool_split_an_audio_file_by_duration_hud_next_zip: 'Fertig. Der ZIP-Download sollte starten.',
  tool_split_an_audio_file_by_duration_hud_pack: 'Clips werden ins ZIP gepackt…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: 'Gleich lange Clips werden geschnitten…',
  tool_split_an_audio_file_by_duration_hud_step_decode: 'Dekodieren',
  tool_split_an_audio_file_by_duration_hud_step_pack: 'Packen',
  tool_split_an_audio_file_by_duration_hud_step_split: 'Teilen',
  tool_split_an_audio_file_by_duration_hud_title: 'Fortschritt Nach Dauer teilen',
  tool_split_an_audio_file_by_duration_hud_working: 'Start…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} Kanäle',
  tool_split_an_audio_file_by_duration_pause: 'Pause',
  tool_split_an_audio_file_by_duration_play: 'Abspielen',
  tool_split_an_audio_file_by_duration_preview_hint: 'Weiße Marken sind Schnitte alle N Sekunden. Abspielen hört die aktuelle Datei.',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}s · Die Stücklänge reicht für die ganze Datei, das ZIP hätte nur diese eine Datei. Stücklänge verkürzen, dann erneut Nach Dauer teilen. ZIP herunterladen ist bereit.',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}s · alle {chunk}s → {count} Clip(s): {list}. ZIP herunterladen ist bereit.',
  tool_split_an_audio_file_by_duration_rules_body:
    'Schnitte liegen bei k × D Sekunden, D ist die Stücklänge. Der letzte Clip ist [floor(T / D) × D, T] und darf kürzer sein. Bei N gleichen Teilen gilt D = T / N für diesen Lauf. WAV ist 16-Bit-PCM. MP3 ist CBR mit der gewählten Bitrate. Das ZIP entsteht in diesem Tab.',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'Beispiel-Standard ist 2 s. Chips schreiben 30 s, 60 s, 180 s (3 Min.) oder 300 s (5 Min.) ins selbe Feld. N gleiche Teile (2–50) sind optional unter Erweitert.',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'Desktop-Grenze etwa 40 MB oder 20 Minuten; schmaler Bildschirm etwa 20 MB oder 8 Minuten. Darüber Ablehnung, kein Abschneiden. Mehr als 50 Clips ebenfalls.',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'Dateien bleiben auf Ihrem Gerät; sie werden nicht auf einen Server hochgeladen. JSZip und der MP3-Encoder laden von dieser Site erst nach ZIP herunterladen.',
  tool_split_an_audio_file_by_duration_rules_item_4:
    'Dekodieren hängt vom Browser ab. DRM, manche Codecs und Videocontainer scheitern mit klarer Meldung.',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'Diese Seite exportiert viele Dateien in einem ZIP nach der Uhr. Kein Stille-Schnitt, kein Cue, kein Schnitt nach Megabyte, kein Entrauschen, kein Stummschalten, kein YouTube.',
  tool_split_an_audio_file_by_duration_rules_title: 'Regeln, mit denen Sie rechnen sollten',
  tool_split_an_audio_file_by_duration_sample: 'Beispiel laden',
  tool_split_an_audio_file_by_duration_split: 'Nach Dauer teilen',
  tool_split_an_audio_file_by_duration_status_done: 'Fertig.',
  tool_split_an_audio_file_by_duration_title: 'Audiodatei nach Dauer in mehrere Dateien teilen',
  tool_split_an_audio_file_by_duration_usecase_1:
    'Vorlesung in 3-Minuten-Pendlerstücke teilen und als ZIP mitnehmen, ohne auf Pausen zu warten.',
  tool_split_an_audio_file_by_duration_usecase_2:
    'MP3 in gleiche Teile splitten für 60-Sekunden-Clips aus einer langen Folge.',
  tool_split_an_audio_file_by_duration_usecase_3:
    'Langes Sprachnotiz-Memo in Stücke unter dem Chat-Zeitlimit; der letzte Clip behält den Rest.',
  tool_split_an_audio_file_by_duration_usecases_title: 'Wann es passt',
  tool_split_an_audio_file_by_duration_why_choose_body:
    'Für ein Uhr-geschnittenes ZIP: Chips 30 s / 60 s / 3 Min. / 5 Min. und ein ehrlich kürzerer letzter Clip.',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'Schneidet alle N Sekunden und packt viele Dateien ins ZIP; der letzte Clip behält den Rest statt Stille aufzufüllen.',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    'Chips 30 s / 60 s / 3 Min. / 5 Min. plus optionale N gleiche Teile; kein Stille-Detektor, der gleiche Schnitte vortäuscht.',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'Die Datei bleibt in diesem Browser-Tab und wird nicht auf einen Server hochgeladen; JSZip und lamejs laden erst bei ZIP herunterladen.',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    'Zu große Dateien und mehr als 50 Clips werden abgelehnt, bevor ein verstümmeltes ZIP entsteht — kein 1-GB-Versprechen, das den Tab killt.',
  tool_split_an_audio_file_by_duration_why_choose_title: 'Warum Audiodatei nach Dauer in mehrere Dateien teilen nutzen',
};
export default de;
