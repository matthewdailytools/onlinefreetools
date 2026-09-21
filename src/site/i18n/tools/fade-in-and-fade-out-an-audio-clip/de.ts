import type { SiteLangDict } from '../../../types';

/**
 * German copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Edge fades; ≠ seamless loop wrap (S5), ≠ limiter/EQ.
 */
const de: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "Audio-Clip ein- und ausblenden",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "Abrupte Starts und Stops mit 0,5–3-s-Chips und linearer oder Equal-Power-Kurve weichzeichnen, dann 16-Bit-WAV laden. Nur auf dem Gerät.",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "Audio-Clip ein- und ausblenden mit Chips von 0,5, 1, 2 oder 3 Sekunden je Ende und linearer oder Equal-Power-Kurve. Schritte: Überblenden, Vorschau, WAV herunterladen. Beispiel: abrupte Probe laden. Nur Kanten—kein Wrap-Crossfade für nahtlose Loops, kein Limiter oder EQ. Audio bleibt auf dem Gerät; wird nie hochgeladen.",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "Harte Schnitte am Anfang oder Ende knacken an Lautsprechern und wirken in Timelines abrupt. Diese Seite legt am Kopf eine Fade-in- und am Ende eine Fade-out-Hüllkurve. Wählen Sie 0,5, 1, 2 oder 3 s je Seite, dann Linear oder Equal-Power. Überschreitet die Summe die Länge, schrumpfen beide Seiten proportional. Das ist Kanten-Fade an einem Clip—kein Einwickeln des Endes in den Anfang für einen nahtlosen Loop, kein Peak-Limiting und kein EQ. Kanäle bleiben 1 oder 2. Original behalten; Download ist ein neues 16-Bit-WAV. Die Arbeit läuft im Browser auf dem Gerät.",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "Audiodatei wählen",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "Eine WAV-, MP3-, M4A-, AAC- oder OGG-Datei. Maximal 40 MiB und 10 Minuten; mono oder stereo.",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "Überblenden",
  tool_fade_in_and_fade_out_an_audio_clip_download: "WAV herunterladen",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "Probe laden",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "Leeren",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "Fade-Einstellungen",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "Einblenden",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "Ausblenden",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "Kurve",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "Linear",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "Equal-Power",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "Standard: 1 s rein, 1 s raus, Equal-Power. Kurze Chips für Drums; längere für Pads und Sprache. Überschneiden sie die Länge, schrumpfen sie gemeinsam.",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "Fade-Fortschritt",
  tool_fade_in_and_fade_out_an_audio_clip_read: "Lesen",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "Dekodieren",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "Überblenden",
  tool_fade_in_and_fade_out_an_audio_clip_write: "Schreiben",
  tool_fade_in_and_fade_out_an_audio_clip_done: "Fertig. Vorschau des gefadeten WAV, dann WAV herunterladen.",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "Fade fehlgeschlagen. Kleinere, gültige Audiodatei versuchen.",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "{s}s vergangen",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "Gefadetes WAV anhören",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds}s · rein {fadeIn}s · raus {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "vier-sekunden-abrupt-demo",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "Zuerst Audiodatei wählen oder Probe laden.",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "Genau eine Audiodatei ablegen.",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "Nicht unterstütztes oder beschädigtes Audio. Nutzen Sie eine vom Browser dekodierbare Datei (WAV, MP3, M4A, AAC oder OGG).",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "Datei höchstens 40 MiB oder 10 Minuten, mit einem oder zwei Kanälen.",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "Der Browser konnte dieses Audio nicht dekodieren. Andere gültige Aufnahme versuchen.",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "Gefadetes WAV konnte nicht geschrieben werden. Einstellungen prüfen und erneut Überblenden.",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "Pegel praktisch Stille—nichts zu faden. Aufnahme mit hörbarem Pegel wählen.",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "Clip zu kurz für sinnvolles Fading. Datei länger als etwa 50 ms verwenden.",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "So blenden Sie einen Audio-Clip ein und aus",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "Längen und Kurve wählen, anwenden, anhören, 16-Bit-WAV laden—ohne Upload.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "Audiodatei wählen oder Probe laden für eine abrupte Vier-Sekunden-Demo.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "Fade-Einstellungen öffnen und Chips für Ein-/Ausblenden (0,5 / 1 / 2 / 3 s) wählen. Standard je 1 s.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "Linear oder Equal-Power (Standard) wählen, Überblenden klicken und Lesen → Dekodieren → Überblenden → Schreiben abwarten.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "Weichen Start und Stop prüfen, Ergebniszeile lesen, dann WAV herunterladen.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title: "Warum unsere Audio-Clip ein- und ausblenden-Tools",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "Vor dem Speichern Ein-/Ausblendsekunden, Kurvenname und Ausgabe-KiB sehen.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "Klare Dauer-Chips und zwei Kurven—ein Kanten-Job, kein nahtloser Loop-Wrap und keine Limiter/EQ-Kette.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "Dekodieren, Hüllkurven und WAV-Schreiben laufen auf dem Gerät; die Seite lädt Ihre Aufnahme nicht hoch.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "Ändern von Chips, Kurve oder Eingabe verwirft den alten Download, damit kein veraltetes WAV gespeichert wird.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "Längen, Kurven und Grenzen",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "Einblenden steigt aus Stille; Ausblenden fällt in Stille. Linear ist gerade Rampe; Equal-Power nutzt Sinus/Kosinus. Überlappende Anfragen schrumpfen proportional.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "Jedes Ende bietet 0,5, 1, 2 oder 3 Sekunden. Standard: 1 s / 1 s und Equal-Power.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "Nur Kanten eines Clips. Kein Wrap-Crossfade für nahtlose Loops, kein Peak-Limiting, kein EQ.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "Export behält 1 oder 2 Kanäle. Tags werden nicht kopiert. Original wird nie überschrieben.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "Eine Datei bis 40 MiB und zehn Minuten. Überschreitet die Summe die Länge, skalieren beide Seiten nach unten.",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "Echten Kanten-Fade testen",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "Probe laden erzeugt einen vier Sekunden langen Ton mit abruptem Start/Stop und fadet automatisch mit 1 s / 1 s Equal-Power. Wiedergabe startet nicht von selbst—Play in der Vorschau drücken, um weiche Kanten zu hören.",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "Wann das hilft",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "Voiceover oder Musikbett knackt an Schnittpunkten—1 s / 1 s wählen, Überblenden, WAV laden.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "Clip braucht weiche Kanten vor dem Zuschneiden oder der Timeline—ohne nahtlosen Loop zu bauen.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_3: "Klingelton oder Bumper startet und endet abrupt und braucht weiche Kanten.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "Ist das dasselbe wie Nahtlosen Audio-Loop erzeugen?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "Nein. Dort wird das gewählte Ende in den Anfang mit Crossfade gewickelt, damit die Naht sauber loopt. Hier werden nur Start und Ende eines Clips weich. Für nahtlose Loops jene Seite nutzen.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "Limitiert das Peaks oder equalisiert es?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "Nein. Es multipliziert Samples nur mit einer Fade-Hüllkurve. Für Limiting, Bass-Boost oder dumpfe Sprach-EQ die jeweiligen Tools nutzen.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "Equal-Power versus Linear?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "Linear ramppt Gain geradlinig. Equal-Power nutzt Sinus beim Einblenden und die passende Kosinusform beim Ausblenden für glattere Lautheit. Standard ist Equal-Power.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "Was, wenn 3 s + 3 s länger als der Clip sind?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "Beide Enden schrumpfen proportional, damit die Summe die Länge nicht überschreitet. Die Ergebniszeile zeigt die tatsächlichen Sekunden.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "Nur ein Ende faden?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "Chips setzen beide Enden; am kaum gewünschten Ende den kürzesten Chip (0,5 s) wählen oder zuerst mit Audio-Clip zuschneiden und exportieren kürzen.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "Wird mein Audio auf einen Server hochgeladen?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "Nein. Dekodieren, Fades und WAV-Schreiben laufen im Browser auf dem Gerät. Beim ersten Laden braucht die Seite Netz; Offline ist nicht garantiert. Für Loops bzw. Zuschneiden die jeweiligen Tools nutzen.",
};
export default de;
