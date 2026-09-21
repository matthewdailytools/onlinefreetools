import type { SiteLangDict } from '../../../types';

/**
 * German copy for eq-a-muffled-voice-recording (S20).
 * ≠ nur Bass (S21), ≠ Denoise (S24), ≠ De-Esser (S31).
 */
const de: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "Eine dumpfe Sprachaufnahme entzerrern",
  tool_eq_a_muffled_voice_recording_desc:
    "Öffne eine dumpfe Stimme mit Clarity-, Warmth- oder Presence-Drei-Band-Presets und lade eine 16-Bit-WAV. Nur auf dem Gerät.",
  tool_eq_a_muffled_voice_recording_description:
    "Eine dumpfe Sprachaufnahme entzerrern mit Clarity-, Warmth- oder Presence-Drei-Band-Presets. Schritte: EQ, Vorschau, WAV herunterladen. Beispiel: dumpfe Probe laden. Nur Klangformung—kein reiner Bass-Booster, keine Rauschunterdrückung, kein De-Esser. Audio bleibt auf dem Gerät; wird nie hochgeladen.",
  tool_eq_a_muffled_voice_recording_article:
    "Telefon, Maske und ferne Mikros klingen oft dumpf: zu viel Matsch unter einigen hundert Hertz und zu wenig Klarheit im Sprachband. Diese Seite verkettet drei BiquadFilter in OfflineAudioContext—Lowshelf, Peaking, Highshelf—als benannte Presets. Clarity schneidet Matsch und öffnet Sprache; Warmth gibt Körper und weicht harte Höhen ab; Presence hebt mittlere Höhen und Luft. Das ist tonales EQ für dumpfe Stimme, kein Einband-Bass-Booster, keine Hintergrund-Rauschunterdrückung und kein De-Esser nur gegen Zischlaute. Kanäle bleiben 1 oder 2. Master behalten; Download ist eine neue 16-Bit-WAV. Arbeit läuft im Browser.",
  tool_eq_a_muffled_voice_recording_choose: "Audiodatei wählen",
  tool_eq_a_muffled_voice_recording_hint: "Eine WAV, MP3, M4A, AAC oder OGG. Maximal 40 MiB und 10 Minuten; mono oder stereo.",
  tool_eq_a_muffled_voice_recording_convert: "EQ",
  tool_eq_a_muffled_voice_recording_download: "WAV herunterladen",
  tool_eq_a_muffled_voice_recording_sample: "Beispiel laden",
  tool_eq_a_muffled_voice_recording_clear: "Leeren",
  tool_eq_a_muffled_voice_recording_advanced: "EQ-Presets",
  tool_eq_a_muffled_voice_recording_preset_label: "Stimm-EQ-Preset",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "Standard Clarity schneidet Matsch und öffnet Sprache. Warmth gibt Körper mit weicheren Höhen. Presence hebt mittlere Höhen und Luft. Soft-Peak-Schutz verhindert Clipping nach Boosts.",
  tool_eq_a_muffled_voice_recording_progress: "EQ-Fortschritt",
  tool_eq_a_muffled_voice_recording_read: "Lesen",
  tool_eq_a_muffled_voice_recording_decode: "Dekodieren",
  tool_eq_a_muffled_voice_recording_eq: "EQ",
  tool_eq_a_muffled_voice_recording_write: "Schreiben",
  tool_eq_a_muffled_voice_recording_done: "Fertig. Vorschau der entzerrten WAV, dann WAV herunterladen.",
  tool_eq_a_muffled_voice_recording_failed: "EQ fehlgeschlagen. Kleinere, gültige Audiodatei versuchen.",
  tool_eq_a_muffled_voice_recording_elapsed: "{s}s vergangen",
  tool_eq_a_muffled_voice_recording_preview: "Entzerrte WAV anhören",
  tool_eq_a_muffled_voice_recording_result: "{seconds}s · {preset} · Peak {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_eq_a_muffled_voice_recording_sample_name: "zwei-sekunden-dumpfe-stimme-demo",
  tool_eq_a_muffled_voice_recording_empty: "Zuerst Audiodatei wählen oder Beispiel laden.",
  tool_eq_a_muffled_voice_recording_err_file: "Genau eine Audiodatei ablegen.",
  tool_eq_a_muffled_voice_recording_err_format: "Nicht unterstütztes oder beschädigtes Audio. Datei nutzen, die der Browser dekodieren kann (WAV, MP3, M4A, AAC oder OGG).",
  tool_eq_a_muffled_voice_recording_err_limit: "Datei höchstens 40 MiB oder 10 Minuten, mit ein oder zwei Kanälen.",
  tool_eq_a_muffled_voice_recording_err_decode: "Browser konnte dieses Audio nicht dekodieren. Andere gültige Aufnahme versuchen.",
  tool_eq_a_muffled_voice_recording_err_encoder: "Entzerrte WAV konnte nicht geschrieben werden. Preset prüfen und erneut EQ.",
  tool_eq_a_muffled_voice_recording_err_silence: "Pegel ist praktisch Stille—nichts zu entzerren. Aufnahme mit hörbarem Pegel nutzen.",
  tool_eq_a_muffled_voice_recording_how_title: "So entzerrt man eine dumpfe Sprachaufnahme",
  tool_eq_a_muffled_voice_recording_how_body:
    "Drei-Band-Preset wählen, Ton formen, anhören, 16-Bit-WAV herunterladen—ohne Upload.",
  tool_eq_a_muffled_voice_recording_how_item_1: "Audiodatei wählen oder Beispiel laden für eine zweisekündige dumpfe Demo.",
  tool_eq_a_muffled_voice_recording_how_item_2: "EQ-Presets öffnen und Clarity (Standard), Warmth oder Presence wählen.",
  tool_eq_a_muffled_voice_recording_how_item_3: "EQ klicken und Lesen → Dekodieren → EQ → Schreiben abwarten.",
  tool_eq_a_muffled_voice_recording_how_item_4: "Ergebnis anhören, Preset und Peaks prüfen, dann WAV herunterladen.",
  tool_eq_a_muffled_voice_recording_why_choose_title: "Warum unsere Tools zum Entzerrern einer dumpfen Sprachaufnahme",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "Preset-Name, Peak vor/nach und Ausgabe-KiB vor dem Speichern sehen.",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "Drei klare Stimm-Presets—ein Dumpf-EQ-Job, kein Zehnband-Spielzeug und kein reiner Bass.",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "Dekodierung, Biquad-EQ und WAV-Schreiben laufen auf dem Gerät; die Seite lädt die Aufnahme nicht hoch.",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "Preset- oder Eingabewechsel löscht den alten Download, damit keine veraltete WAV gespeichert wird.",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity, Warmth, Presence und Grenzen",
  tool_eq_a_muffled_voice_recording_rules_body:
    "Jedes Preset sind drei Biquad-Stufen (Lowshelf, Peaking, Highshelf). Clarity öffnet dumpfe Sprache; Warmth gibt Körper; Presence hebt Präsenz und Luft. Soft-Peak-Schutz skaliert bei Clip-Gefahr.",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "Standard Clarity schneidet matschige Bässe und öffnet Sprachklarheit. Warmth hebt Tiefkörper und weicht harte Höhen ab. Presence fokussiert mittlere Höhen.",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "Nur tonales EQ. Entfernt kein Lüfterrauschen, kein Solo-Bass-Boost und kein De-Esser gegen Zischlaute.",
  tool_eq_a_muffled_voice_recording_rules_item_3: "Export behält 1 oder 2 Kanäle. Tags werden nicht kopiert. Original wird nie überschrieben.",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "Eine Datei bis 40 MiB und zehn Minuten. Soft-Peak-Schutz kann nach starken Boosts den Gesamtpegel senken.",
  tool_eq_a_muffled_voice_recording_example_title: "Echten Dumpf-EQ testen",
  tool_eq_a_muffled_voice_recording_example:
    "Beispiel laden baut einen zweisekündigen dumpfen Ton mit starken Bässen und schwachen Höhen und EQ’t automatisch mit Clarity. Wiedergabe startet nicht von selbst—Play in der Vorschau drücken, um das klarere Ergebnis zu hören.",
  tool_eq_a_muffled_voice_recording_usecases_title: "Wann das hilft",
  tool_eq_a_muffled_voice_recording_usecase_1: "Telefon- oder Masken-Take klingt kastig—Clarity wählen, EQ, WAV laden.",
  tool_eq_a_muffled_voice_recording_usecase_2: "Podcast-Stimme braucht wärmeren Körper oder mehr Präsenz ohne volles DAW-EQ.",
  tool_eq_a_muffled_voice_recording_faq_q1: "Ist das dasselbe wie ein Bass-Booster?",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "Nein. Ein Bass-Booster hebt vor allem tiefe Frequenzen. Diese Seite bietet drei Mehrband-Stimm-Presets für dumpfe Sprache. Reiner Bass ist ein anderer Job (Boost bass on an MP3, wenn verfügbar).",
  tool_eq_a_muffled_voice_recording_faq_q2: "Entfernt das Hintergrundrauschen?",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "Nein. EQ formt den Ton; Lüfter, Rauschen oder Raumgeräusch werden nicht unterdrückt. Für Denoise ein eigenes Tool nutzen, wenn verfügbar.",
  tool_eq_a_muffled_voice_recording_faq_q3: "Ist das ein De-Esser?",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "Nein. Ein De-Esser zielt auf harte Sibilanten (S/Sch). Diese Presets formen den dumpfen Gesamtton über Tief-, Mittel- und Hochbänder.",
  tool_eq_a_muffled_voice_recording_faq_q4: "Was machen Clarity, Warmth und Presence?",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity schneidet Matsch und öffnet Sprache. Warmth gibt Tiefkörper und weicht harte Höhen ab. Presence hebt mittlere Höhen und Luft. Soft-Peak-Schutz verhindert Clipping nach Boosts.",
  tool_eq_a_muffled_voice_recording_faq_q5: "Was, wenn EQ die Datei heißer macht?",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "Nach der Filterkette skaliert Soft-Peak-Schutz den Puffer, wenn Peaks etwa −0,2 dBFS überschreiten würden. Für dediziertes Peak-Limiting Peaks begrenzen, damit eine Datei nicht clipt.",
  tool_eq_a_muffled_voice_recording_faq_q6: "Wird mein Audio auf einen Server hochgeladen?",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "Nein. Dekodierung, EQ und WAV-Schreiben laufen im Browser. Beim ersten Laden braucht die Seite Netz; Offline ist nicht garantiert. Für Dynamik nach dem EQ Dynamikbereich einer Sprachaufnahme komprimieren oder Peaks begrenzen nutzen.",
};
export default de;
