import type { SiteLangDict } from '../../../types';

/**
 * German copy for compress-dynamic-range-of-a-voice-recording (S18).
 */
const de: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "Dynamikumfang einer Sprachaufnahme komprimieren",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    "Sprachspitzen mit Leicht/Mittel/Stark-Presets und optionalem Makeup glätten, dann 16-Bit-WAV laden. Nur lokal.",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    
    "Komprimieren Sie den Dynamikumfang einer Sprachaufnahme mit Leicht-, Mittel- oder Stark-Presets und optionalem Makeup. Schritte: komprimieren, anhören, WAV herunterladen. Beispiel: ungleichmäßige Probe laden. Dynamik umformen—kein MP3-Größenkomprimieren, kein fester dB-Gain, keine Peak-/LUFS-Normalisierung. Audio bleibt auf dem Gerät; nie hochgeladen.",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    
    "Sprachaufnahmen springen oft von Flüstern zu Peaks. Diese Seite nutzt einen Peak-Hüllkurven-Kompressor in reinem JavaScript: Leicht/Mittel mit Soft Knee, Stark mit Hard Knee (leicht ≈ −18 dB / 2:1, mittel ≈ −24 / 3:1 Standard, stark ≈ −30 / 6:1). Optionales Makeup stellt den Gesamtpegel nach der Peak-Zähmung wieder her, mit weichem Peak-Schutz vor dem 16-Bit-WAV. Das ist Dynamikkompression, nicht MP3-Bytes sparen, nicht fester Gain, nicht Peak-Normalisieren und nicht Podcast-LUFS. 1 oder 2 Kanäle. Master behalten; Download ist neu.",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "Audiodatei wählen",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "Eine WAV-, MP3-, M4A-, AAC- oder OGG-Datei. Maximal 40 MiB und 10 Minuten; mono oder stereo.",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "Komprimieren",
  tool_compress_dynamic_range_of_a_voice_recording_download: "WAV herunterladen",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "Beispiel laden",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "Leeren",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "Kompressor-Einstellungen",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "Intensitäts-Preset",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "Leicht",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "Mittel",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "Stark",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "Makeup-Gain",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "An",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "Aus",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    
    "Leicht (−18 dB, 2:1, Soft Knee) ist mild. Mittel (−24 dB, 3:1) passt zu vielen Voiceovers. Stark (−30 dB, 6:1, Hard Knee) drückt Peaks härter. Makeup (Standard An) stellt den Pegel nach der Kompression wieder her, mit Peak-Schutz.",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "Kompressionsfortschritt",
  tool_compress_dynamic_range_of_a_voice_recording_read: "Lesen",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "Dekodieren",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "Komprimieren",
  tool_compress_dynamic_range_of_a_voice_recording_write: "Schreiben",
  tool_compress_dynamic_range_of_a_voice_recording_done: "Fertig. Komprimiertes WAV anhören, dann herunterladen.",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "Komprimieren fehlgeschlagen. Kleinere gültige Audiodatei versuchen.",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "{s}s vergangen",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "Komprimiertes WAV anhören",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds}s · {preset} · Makeup {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "zwei-sekunden-dynamik-sprach-demo",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "Zuerst Audiodatei wählen oder Beispiel laden.",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "Genau eine Audiodatei ablegen.",
  tool_compress_dynamic_range_of_a_voice_recording_err_format:
    "Nicht unterstütztes oder beschädigtes Audio. Datei nutzen, die der Browser dekodieren kann (WAV, MP3, M4A, AAC oder OGG).",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "Datei höchstens 40 MiB oder 10 Minuten, mit ein oder zwei Kanälen.",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "Browser konnte dieses Audio nicht dekodieren. Andere gültige Aufnahme versuchen.",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "Komprimiertes WAV konnte nicht geschrieben werden. Preset und Makeup prüfen, erneut Komprimieren.",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "Pegel ist praktisch Stille—nichts zu komprimieren.",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "So komprimieren Sie den Dynamikumfang einer Sprachaufnahme",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    "Intensitäts-Preset wählen, optional Makeup, Dynamik komprimieren, anhören, 16-Bit-WAV laden—ohne Upload.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "Sprachaufnahme wählen oder Beispiel laden (zwei Sekunden hohe Dynamik).",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    
    "Kompressor-Einstellungen: Leicht, Mittel (Standard) oder Stark; Makeup An lassen, außer Sie wollen nur Peak-Kontrolle.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "Komprimieren klicken und Lesen → Dekodieren → Komprimieren → Schreiben abwarten.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "Ergebnis prüfen (Preset/Schwelle/Ratio/Makeup/Peaks), dann WAV herunterladen.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "Warum unsere Dynamikkompressor-Tools",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "Preset, Schwelle, Ratio, Makeup, Peaks und Ausgabe-KiB vor dem Speichern sehen.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "Drei klare Sprach-Presets—ein Dynamik-Job, keine MP3-Größe/Gain/Normalisieren-Wand.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3: "Dekodieren, Kompression und WAV laufen auf dem Gerät; kein Upload zur Verarbeitung.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "Preset-, Makeup- oder Eingabewechsel löscht alten Download—kein veraltetes WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "Schwelle, Ratio, Makeup und Grenzen",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    
    "Ein Peak-Hüllkurven-Kompressor senkt die Verstärkung über der Schwelle nach Ratio (Soft Knee bei Leicht/Mittel; Hard Knee bei Stark). Makeup multipliziert danach; weicher Peak-Schutz hält Samples unter ~0,99. Formt laut vs leise um—anders als fester Gain, Peak-Normalisieren, LUFS oder MP3-Bitrate.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1:
    
    "Mittel (−24 dB, 3:1, Soft Knee) ist Standard. Leicht milder; Stark niedrigere Schwelle, höhere Ratio und Hard Knee.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2: 
    "Makeup standardmäßig An stellt den Pegel nach Peak-Zähmung wieder her. Auf Aus, wenn nur leisere Peaks ohne Anhebung gewünscht sind.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "Export behält 1 oder 2 Kanäle. Tags werden nicht kopiert. Original wird nicht überschrieben.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4:
    "Eine Datei bis 40 MiB und zehn Minuten. Kein MP3-Größenkomprimieren, kein fester Gain, kein Peak-Normalisieren, kein LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "Echte Dynamikkompression ausprobieren",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    
    "Beispiel laden erzeugt einen zweisegündigen 440-Hz-Ton mit lauten und leisen Impulsen und komprimiert automatisch mit Mittel und Makeup An. Wiedergabe startet nicht von allein—Play in der Vorschau drücken.",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "Wann das hilft",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "Voiceover mit ruhigen Phrasen und lauten Peaks—Podcast wählen, komprimieren, WAV laden.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "Interview gleichmäßiger machen vor Loudness-Match, ohne MP3 wegen Größe zu schrumpfen.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "Ist das dasselbe wie MP3-Dateigröße komprimieren/verkleinern?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "Nein. „Komprimieren“ meint hier Dynamikumfang (Schwelle/Ratio), nicht Bitrate/Bytes. Für kleinere MP3: Reduce an MP3 file size. Chinesisch: 压缩人声动态 ≠ 压缩 MP3 体积.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "Ist das fester dB-Gain wie „leise Aufnahme lauter“?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2:
    "Nein. Fester Gain multipliziert alles gleich. Hier werden Laute stärker abgesenkt. Für gleichmäßigen Boost: Make a quiet recording louder.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "Ist das Peak-Normalisieren oder Podcast-LUFS?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "Nein. Peak zielt auf dBFS; LUFS auf integrierte Lautheit. Hier formt ein Kompressor die Dynamik. Nutzen Sie Normalize an audio file to peak oder Match podcast loudness to −16 LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "Was ändern Leicht, Mittel und Stark?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4: 
    "Schwelle, Ratio und Knee. Leicht ≈ −18 / 2:1 soft; Mittel ≈ −24 / 3:1 soft; Stark ≈ −30 / 6:1 hard. Makeup An/Aus ist separat.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "Soll Makeup An bleiben?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    
    "Meist ja—Kompression kann den Durchschnitt senken; Makeup stellt ihn mit Peak-Schutz wieder her. Aus wählen, wenn nur leisere Peaks ohne Boost gewünscht sind.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "Wird mein Audio hochgeladen?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "Nein. Dekodieren, Kompression und WAV laufen im Browser auf dem Gerät. Netz beim ersten Laden nötig; Offline nicht garantiert. Für Loudness/Gain: Match podcast loudness to −16 LUFS oder Make a quiet recording louder.",
};
export default de;
