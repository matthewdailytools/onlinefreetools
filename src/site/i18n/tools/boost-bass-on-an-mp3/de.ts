import type { SiteLangDict } from '../../../types';

/**
 * German copy for boost-bass-on-an-mp3 (S21).
 * Low-shelf only; ≠ muffled EQ (S20), ≠ whole-file louder (S15).
 */
const de: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "Bass in einer MP3 anheben",
  tool_boost_bass_on_an_mp3_desc:
    "Dünnen Tiefbass mit Mild-, Medium- oder Strong-Low-Shelf-Presets anheben und 16-Bit-WAV laden. Nur auf dem Gerät.",
  tool_boost_bass_on_an_mp3_description:
    "Bass in einer MP3 anheben mit Mild-, Medium- oder Strong-Low-Shelf-Presets. Schritte: Anheben, anhören, WAV herunterladen. Beispiel: dünne Bass-Probe laden. Nur Low-Shelf-Bass—kein volles Mehrband-EQ, kein Datei-weiter Volume-Booster. Audio bleibt auf dem Gerät; wird nie hochgeladen.",
  tool_boost_bass_on_an_mp3_article: "Handy-Exports und Laptop-Lautsprecher lassen Kick und Basslinie oft dünn: genug Mitten, zu wenig Gewicht unter ~100 Hz. Diese Seite führt eine EQ filter-Lowshelf-Stufe in on-device audio processing aus. Mild ist sanft; Medium (Standard) der Alltagslift; Strong drückt stärker. Soft-Peak-Schutz skaliert, wenn der Boost clippen würde. Das ist Bass-Boost—kein Clarity/Warmth/Presence-Drei-Band-EQ für dumpfe Stimme und kein flacher dB-Gain für alles. Kanäle bleiben 1 oder 2. Master behalten; Download ist neues 16-Bit-WAV. Arbeit läuft im Browser.",
  tool_boost_bass_on_an_mp3_choose: "Audiodatei wählen",
  tool_boost_bass_on_an_mp3_hint: "Eine WAV-, MP3-, M4A-, AAC- oder OGG-Datei. Max. 40 MiB und 10 Minuten; mono oder stereo.",
  tool_boost_bass_on_an_mp3_convert: "Anheben",
  tool_boost_bass_on_an_mp3_download: "WAV herunterladen",
  tool_boost_bass_on_an_mp3_sample: "Probe laden",
  tool_boost_bass_on_an_mp3_clear: "Leeren",
  tool_boost_bass_on_an_mp3_advanced: "Bass-Presets",
  tool_boost_bass_on_an_mp3_preset_label: "Low-Shelf-Bass-Preset",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "Standard Medium hebt Tiefen um ~90 Hz an. Mild ist sanfter; Strong stärker. Soft-Peak-Schutz verhindert Clipping nach dem Boost.",
  tool_boost_bass_on_an_mp3_progress: "Bass-Boost-Fortschritt",
  tool_boost_bass_on_an_mp3_read: "Lesen",
  tool_boost_bass_on_an_mp3_decode: "Dekodieren",
  tool_boost_bass_on_an_mp3_boost: "Anheben",
  tool_boost_bass_on_an_mp3_write: "Schreiben",
  tool_boost_bass_on_an_mp3_done: "Fertig. Bass-angehobenes WAV anhören, dann WAV herunterladen.",
  tool_boost_bass_on_an_mp3_failed: "Bass-Boost fehlgeschlagen. Kleinere, gültige Audiodatei versuchen.",
  tool_boost_bass_on_an_mp3_elapsed: "{s}s vergangen",
  tool_boost_bass_on_an_mp3_preview: "Bass-angehobenes WAV anhören",
  tool_boost_bass_on_an_mp3_result: "{seconds}s · {preset} · Peak {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "zwei-sekunden-duenner-bass-demo",
  tool_boost_bass_on_an_mp3_empty: "Zuerst Audiodatei wählen oder Probe laden.",
  tool_boost_bass_on_an_mp3_err_file: "Genau eine Audiodatei ablegen.",
  tool_boost_bass_on_an_mp3_err_format: "Nicht unterstütztes oder beschädigtes Audio. Datei nutzen, die der Browser dekodieren kann (WAV, MP3, M4A, AAC oder OGG).",
  tool_boost_bass_on_an_mp3_err_limit: "Datei höchstens 40 MiB oder 10 Minuten, mit einem oder zwei Kanälen.",
  tool_boost_bass_on_an_mp3_err_decode: "Browser konnte dieses Audio nicht dekodieren. Andere gültige Aufnahme versuchen.",
  tool_boost_bass_on_an_mp3_err_encoder: "Bass-WAV konnte nicht geschrieben werden. Preset prüfen, erneut anheben.",
  tool_boost_bass_on_an_mp3_err_silence: "Pegel ist praktisch Stille—nichts anzuheben. Hörbare Aufnahme nutzen.",
  tool_boost_bass_on_an_mp3_how_title: "So heben Sie Bass in einer MP3 an",
  tool_boost_bass_on_an_mp3_how_body:
    "Low-Shelf-Preset wählen, Bass anheben, anhören, 16-Bit-WAV laden—ohne Upload.",
  tool_boost_bass_on_an_mp3_how_item_1: "Audiodatei wählen oder Probe laden für eine zweisekündige dünne-Bass-Demo.",
  tool_boost_bass_on_an_mp3_how_item_2: "Bass-Presets öffnen und Mild, Medium (Standard) oder Strong wählen.",
  tool_boost_bass_on_an_mp3_how_item_3: "Anheben klicken und Lesen → Dekodieren → Anheben → Schreiben abwarten.",
  tool_boost_bass_on_an_mp3_how_item_4: "Ergebnis anhören, Preset und Peaks prüfen, dann WAV herunterladen.",
  tool_boost_bass_on_an_mp3_why_choose_title: "Warum unsere Bass-Anheben-Tools für MP3",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "Preset-Name, Peak vorher/nachher und Ausgabe-KiB vor dem Speichern sehen.",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "Drei klare Low-Shelf-Presets—ein Bass-Job, kein vergrabenes Zehnband-EQ oder flache Lautstärke-Wand.",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "Dekodieren, Lowshelf-Boost und WAV-Schreiben laufen auf dem Gerät; die Seite lädt Audio nicht hoch.",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "Preset- oder Eingabewechsel löscht den alten Download, damit kein veraltetes WAV gespeichert wird.",
  tool_boost_bass_on_an_mp3_rules_title: "Mild, Medium, Strong und Grenzen",
  tool_boost_bass_on_an_mp3_rules_body:
    "Jedes Preset ist eine Lowshelf-EQ-Stufe. Mild sanft; Medium Alltagslift; Strong stärker. Soft-Peak-Schutz skaliert bei drohendem Clipping.",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "Standard Medium: Lowshelf ~90 Hz bei etwa +8 dB. Mild ~+4 dB; Strong ~+12 dB mit etwas tieferem Shelf.",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "Nur Low-Shelf-Bass. Kein Umschichten von Mitten/Höhen wie bei dumpfem Stimmen-EQ, kein Anheben aller Frequenzen wie ein Volume-Booster.",
  tool_boost_bass_on_an_mp3_rules_item_3: "Export behält 1 oder 2 Kanäle. Tags werden nicht kopiert. Original wird nicht überschrieben.",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "Eine Datei bis 40 MiB und zehn Minuten. Nach Strong kann Peak-Schutz den Gesamtpegel senken, damit das WAV unter Vollaussteuerung bleibt.",
  tool_boost_bass_on_an_mp3_example_title: "Echten Bass-Boost testen",
  tool_boost_bass_on_an_mp3_example:
    "Probe laden erzeugt einen zweisekündigen mittenlastigen Ton mit schwachen Tiefen und hebt automatisch mit Medium an. Wiedergabe startet nicht von selbst—Play in der Vorschau drücken, um das schwerere Ergebnis zu hören.",
  tool_boost_bass_on_an_mp3_usecases_title: "Wann das hilft",
  tool_boost_bass_on_an_mp3_usecase_1: "MP3-Export klingt auf Lautsprechern dünn—Medium wählen, Anheben, WAV laden.",
  tool_boost_bass_on_an_mp3_usecase_2: "Track braucht mehr Kick-Gewicht ohne volles Grafik-EQ oder lautere Gesamtmischung.",
  tool_boost_bass_on_an_mp3_usecase_3: "Ein Handy-MP3 klingt auf dem Laptop dünn; du willst nur mehr Kick, nicht lautere Mitten.",
  tool_boost_bass_on_an_mp3_faq_q1: "Ist das dasselbe wie eine dumpfe Sprachaufnahme entzerrern?",
  tool_boost_bass_on_an_mp3_faq_a1:
    "Nein. Jene Seite nutzt Clarity/Warmth/Presence-Drei-Band-Presets für dumpfe Sprache. Diese hebt nur Tiefen per Lowshelf. Für dumpfes Stimmen-EQ: Eine dumpfe Sprachaufnahme entzerrern.",
  tool_boost_bass_on_an_mp3_faq_q2: "Ist das dasselbe wie eine leise Aufnahme lauter machen?",
  tool_boost_bass_on_an_mp3_faq_a2:
    "Nein. Ein Volume-Booster skaliert jedes Sample mit demselben dB-Gain. Diese Seite shelves nur den Bass. Für Datei-weiten Gain: Eine leise Aufnahme lauter machen.",
  tool_boost_bass_on_an_mp3_faq_q3: "Was machen Mild, Medium und Strong?",
  tool_boost_bass_on_an_mp3_faq_a3:
    "Mild ist ein sanfter Lowshelf. Medium (Standard) der Alltagslift. Strong ein stärkerer Shelf. Soft-Peak-Schutz verhindert Clipping nach dem Boost.",
  tool_boost_bass_on_an_mp3_faq_q4: "Was, wenn Anheben die Datei heißer macht?",
  tool_boost_bass_on_an_mp3_faq_a4:
    "Nach dem Lowshelf skaliert Soft-Peak-Schutz, wenn Peaks etwa −0,2 dBFS überschreiten würden. Für dediziertes Peak-Limiting: Peaks begrenzen, damit eine Datei nicht clippt.",
  tool_boost_bass_on_an_mp3_faq_q5: "Wird mein Audio auf einen Server hochgeladen?",
  tool_boost_bass_on_an_mp3_faq_a5:
    "Nein. Dekodieren, Bass-Boost und WAV-Schreiben laufen im Browser. Beim ersten Laden braucht die Seite Netz; Offline-Nutzung ist nicht garantiert.",
  tool_boost_bass_on_an_mp3_faq_q6: "Nur MP3, oder auch WAV und M4A?",
  tool_boost_bass_on_an_mp3_faq_a6:
    "Jedes Format, das der Browser dekodieren kann—WAV, MP3, M4A, AAC oder OGG. Der Titel nutzt die übliche MP3-Suche; Export ist immer neues 16-Bit-WAV.",
};
export default de;
