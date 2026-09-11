/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / de).
 * H1 als Aufgabensatz; CUE Splitter / FLAC CUE in desc und FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche suchnahe Texte: Disc-Image mit CUE-Sheet in Titel splitten. */
const de: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: 'Erweiterte Einstellungen (optional)',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'In diesem Tab splitten Sie ein Disc-Image mit einem CUE-Sheet: Image und .cue öffnen, auf Titel splitten, dann ZIP herunterladen. Schnitte folgen INDEX 01 (75 Frames pro Sekunde). Dateien bleiben auf dem Gerät und werden nicht auf einen Server geladen.',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'MP3-Bitrate',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: 'Standard 128 kbps. Nur wenn das ZIP MP3 enthält.',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'Disc-Image und .cue-Datei wählen',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'Löschen',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'Titel speichern',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'Titel abspielen',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'CUE-Sheet',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    'Lokales Image an INDEX 01 schneiden und benannte Titel als ZIP holen — bleibt auf dem Gerät, kein Upload.',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'Disc-Image mit CUE-Sheet in Titel splitten: auf dem Gerät an INDEX 01 schneiden, benannte Titel im ZIP, Dateien werden nicht hochgeladen. Schritte: Image und .cue öffnen (Sheet lässt sich auch einfügen), Titel splitten, ZIP herunterladen. Beispiel: 6,00-s-Sample mit INDEX 01 bei 0 / 2 / 4 s ergibt Intro / Middle / Outro zu je 2,00 s. Suche nach CUE Splitter, FLAC CUE splitten, WAV CUE splitten oder Titel aus CUE extrahieren ist dieselbe Aufgabe. Kein Stille-Schnitt, keine gleichen Sekundenstücke, keine YouTube-Kapitel.',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'ZIP herunterladen',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'Beide Dateien ablegen: WAV, FLAC, MP3 oder BIN plus .cue. Verarbeitung bleibt in diesem Tab.',
  tool_split_a_disc_image_with_a_cue_sheet_empty: 'Bitte zuerst Image und CUE-Sheet hinzufügen.',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: 'Passendes Image hinzufügen (WAV, FLAC, MP3 oder BIN).',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: '.cue-Datei hinzufügen oder das Sheet einfügen.',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'Dieser Browser kann APE nicht dekodieren. Image nach WAV oder FLAC wandeln, dasselbe CUE behalten, dann erneut Titel splitten.',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'Image über der Gerätegrenze (ca. 80 MB / 30 Min. Desktop, 30 MB / 10 Min. schmales Display). Ein 700-MB-CD-.bin passt nicht in diesen Tab.',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'Dieser Text ist kein nutzbares CUE-Sheet. Es braucht TRACK-Zeilen und INDEX 01 als MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'Dieses Sheet beschreibt eine Daten-CD (MODE-Tracks), kein Audio-Image. Es werden nur AUDIO-Tracks geschnitten.',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'Dieser Browser konnte das Image nicht dekodieren. WAV oder FLAC versuchen, oder eine Datei ohne DRM. APE wird hier nicht dekodiert.',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: 'Nichts zu verarbeiten. Dateien oder das Beispiel laden.',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'MP3-Encoder nicht geladen. Tab offen lassen und ZIP herunterladen erneut versuchen.',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'Dieses Sheet listet mehr als eine FILE-Zeile. Das ist schon eine Datei pro Titel — hier gibt es nichts zu splitten.',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'Keine INDEX-01-Zeiten gefunden. Ein CUE-Splitter braucht diese MM:SS:FF-Starts.',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    'Mehr als 50 Titel. Die Seite kürzt nicht, sie lehnt ab. Kürzeres Sheet oder shnsplit am Rechner nutzen.',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    'Video ist keine Haupteingabe. Hier wird ein Audio-Image mit CUE-Sheet geschnitten.',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'ZIP-Bibliothek nicht geladen. Tab offen lassen und ZIP herunterladen erneut versuchen.',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'Beispiel laden erzeugt ein 6,00-s-Image (440 / 550 / 660 Hz à zwei Sekunden) und ein Sheet mit INDEX 01 bei 00:00:00, 00:02:00, 00:04:00 (Intro Tone, Middle Tone, Outro Tone). Titel splitten liefert drei Dateien à 2,00 s. ZIP herunterladen schreibt 01 Intro Tone.wav, außer unter Erweitert ist MP3 gewählt.',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: 'Beispiel',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'Nein. Parsen, Dekodieren, Schneiden und ZIP laufen in diesem Tab. Skripte kommen von dieser Site. Image und Sheet gehen nicht auf unsere Server.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    'Ja. CUE Splitter, FLAC CUE splitten, WAV CUE splitten, APE+CUE oder Titel aus CUE extrahieren ist dieses Werkzeug: INDEX 01 folgen und benannte Dateien im ZIP. APE als Suche ist dieselbe Aufgabe, aber .ape wird nicht dekodiert — nach WAV/FLAC wandeln und das Sheet behalten.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 ist der Titelstart (MM:SS:FF, 75 Frames/s). INDEX 00 markiert Pregap; angezeigt, Schnitt bleibt bei 01. Der letzte Titel läuft bis zum Image-Ende.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'Nein. Stille-Schnitt und gleiche Dauer sind andere Seiten. Hier gilt nur das CUE-Sheet. YouTube-Kapitel ohne FILE/INDEX liegen außerhalb.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    'Sheet-Text unter der Ablage einfügen, wenn keine .cue-Datei da ist. Eine .cue ablegen parst dasselbe.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'Im ZIP heißen Dateien {nn} {title}.wav (oder .mp3). Einzelne Titel gehen auch aus der Liste. Cap 50; darüber Ablehnung.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'Nein. Kein Denoise, kein Video stummschalten, keine gleichen Stücke, kein Hand-Trim, kein YouTube-Rip, keine ISO-Daten-CD. Nur Audio-Images mit Nutzungsrecht.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'Desktop ca. 80 MB oder 30 Minuten. Schmales Display ca. 30 MB oder 10 Minuten. Ein 700-MB-CD-.bin wird abgelehnt. Übergröße stoppt vor dem Dekodieren.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: 'Werden Disc-Image und CUE-Sheet hochgeladen?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2: 'Ich suchte CUE Splitter oder FLAC CUE splitten. Ist das ein anderes Tool?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'Was ist INDEX 01 gegenüber INDEX 00?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: 'Schnitt bei Stille, nach Dauer oder YouTube-Kapiteln?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: 'Kann ich das CUE-Sheet statt einer .cue-Datei einfügen?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: 'Wie heißen die Dateien, wie viele Titel maximal?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: 'APE dekodieren, Video splitten, gleich teilen oder YouTube rippen?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: 'Wie groß darf das Image sein?',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'Format im ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV ist verlustfreies PCM. Der MP3-Encoder lädt erst bei ZIP herunterladen.',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'INDEX-01-Zeiten aus dem CUE-Sheet lesen, das Disc-Image dort schneiden, ZIP mit Titel-Namen laden — ohne Upload.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'Disc-Image und .cue öffnen (oder Beispiel laden).',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'Oder das CUE-Sheet einfügen, wenn nur der Text da ist.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: 'Auf Titel splitten klicken.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: 'ZIP herunterladen klicken.',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: 'So funktioniert es',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'Image wird in diesem Tab dekodiert…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'Sheet gelesen, Image dekodiert. Weiße Marken sind INDEX-01-Starts. Titel splitten, wenn die Liste stimmt.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: '{s}s vergangen',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'MP3-Titel werden kodiert…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'Sheet oder Image korrigieren, dann erneut Titel splitten.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'CUE-Split gestoppt',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: 'Fertig. Nächster Schritt: ZIP herunterladen.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: 'Fertig. Der ZIP-Download sollte starten.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'Titel werden ins ZIP gepackt…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'CUE-Sheet wird gelesen…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'Schnitt an INDEX 01…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: 'Dekodieren',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: 'Packen',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: 'Parsen',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: 'Splitten',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'Fortschritt CUE-Split',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: 'Start…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'Disc-Image',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch · {tracks} INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'Vollständiges CUE-Sheet einfügen (FILE, TRACK, INDEX 01). Keine YouTube-Kapitelliste.',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'Oder CUE-Sheet einfügen',
  tool_split_a_disc_image_with_a_cue_sheet_pause: 'Pause',
  tool_split_a_disc_image_with_a_cue_sheet_play: 'Abspielen',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: 'Weiße Marken sind INDEX-01-Starts. Abspielen hört das ganze Image.',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig}s · {count} Titel: {list}. ZIP herunterladen ist bereit.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'INDEX 01 ist mm:ss:ff bei 75 Frames/s: t = mm×60 + ss + ff/75. Titel n läuft bis zum nächsten INDEX 01, der letzte bis zum Ende. 16-Bit-PCM von WAV/BIN wird per Byte-Offset geschnitten. Andere Formate nutzen den Browser-Decoder. Das ZIP entsteht in diesem Tab.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    'Schnitt ist INDEX 01. INDEX 00 erscheint als Pregap, ist aber nicht der Standard-Schnitt. Zeiten sind CD-Frames, keine Millisekunden.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'Desktop ca. 80 MB oder 30 Minuten; schmales Display ca. 30 MB oder 10 Minuten. Übergröße wird abgelehnt, nicht gekürzt. Mehr als 50 Titel ebenfalls. 700-MB-.bin passt nicht.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'Dateien bleiben auf dem Gerät, kein Server-Upload. JSZip und MP3-Encoder laden von dieser Site erst nach ZIP herunterladen.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE und BINARY (.bin, 2352-Byte-CDDA-Sektoren) können ohne Vollcodec geschnitten werden. MP3/FLAC/M4A brauchen den Browser-Decoder. APE/TTA/WavPack scheitern mit klarem Fehler.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    'Ein FILE plus INDEX 01. Kein Stille-Schnitt, keine gleiche Dauer, keine YouTube-Kapitel, keine MB-Grenze, kein Video-Mute, kein YouTube-Rip. Mehrere FILE-Zeilen sind schon gesplittet.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: 'Regeln, mit denen Sie rechnen sollten',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'Beispiel laden',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'Titel splitten',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: 'Fertig.',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'Disc-Image mit CUE-Sheet in Titel splitten',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}s ({start}s–{end}s)',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'Titel für das ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'FLAC+CUE-Rip aus Exact Audio Copy oder XLD in benannte Titel, ohne shnsplit zu installieren.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'WAV- oder BIN-Image einer Vinylseite oder CD mit CUE-Sheet schneiden und das ZIP mitnehmen.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'Titel aus einem DJ-Set mit CUE-Sheet holen — über INDEX 01, nicht über geratene Stille.',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: 'Gute Einsätze',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'Für INDEX-01-Album-Splits mit benannten ZIP-Titeln gebaut, ehrlich zu APE und zu großen .bin-Images.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'Schnitt an INDEX 01 (75 Frames/s), ZIP-Namen aus TITLE — nicht gleiche Sekunden und nicht Stille-Lücken.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'Eine Ablage für Image plus .cue, Einfügen desselben Sheets — kein YouTube-Kapitel-Editor als CUE-Splitter.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'Dateien bleiben in diesem Tab, kein Upload; JSZip und lamejs laden erst bei ZIP herunterladen.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE, Multi-FILE-Sheets und Übergröße werden klar abgelehnt statt mit einem 700-MB-Versprechen den Tab zu sprengen.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title:
    'Warum Disc-Image mit CUE-Sheet in Titel splitten nutzen',
};
export default de;
