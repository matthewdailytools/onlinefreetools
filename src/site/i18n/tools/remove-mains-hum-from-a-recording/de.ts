import type { SiteLangDict } from '../../../types';

/**
 * German copy for remove-mains-hum-from-a-recording (S26).
 * How≥4, Why≥4, Rules≥4, FAQ≥6; ≠ denoise / declick / EQ.
 */
const de: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "Netzbrummen aus einer Aufnahme entfernen",
  tool_remove_mains_hum_from_a_recording_desc:
    "Schneiden Sie 50- oder 60-Hz-Netzbrummen mit Notch-Filtern und optionalen Obertönen, dann laden Sie eine 16-Bit-WAV herunter. Nur auf dem Gerät.",
  tool_remove_mains_hum_from_a_recording_description:
    "Entfernen Sie Netzbrummen aus einer Aufnahme mit 50- oder 60-Hz-Notch-Filtern und optionalen 2.–5. Obertönen. Schritte: Entbrummen, Vorschau, WAV herunterladen. Beispiel: laden Sie die brummende Probe. Schmale Notches für Netzbrummen—kein Breitband-Denoise, kein Declick, kein dumpfes Sprach-EQ. Audio bleibt auf Ihrem Gerät; wird nie hochgeladen.",
  tool_remove_mains_hum_from_a_recording_article: "Aufnahmen nahe Netzteilen, Dimmern oder schlecht geerdeten Geräten fangen oft ein stetiges 50- oder 60-Hz-Netzbrummen ein, manchmal mit Obertönen. Diese Seite verkettet EQ filter-Notches in on-device audio processing auf der gewählten Grundfrequenz und optional den 2.–5. Harmonischen unter Nyquist. Das zielt auf schmale elektrische Töne—nicht auf Lüfterrauschen-Denoise, nicht auf Klickreparatur und nicht auf ein Drei-Band-EQ für dumpfe Stimme. Bass nahe dem Notch kann etwas dünner werden. Kanalzahl bleibt 1 oder 2. Behalten Sie das Original; der Download ist eine neue 16-Bit-WAV. Die Arbeit läuft im Browser auf Ihrem Gerät.",
  tool_remove_mains_hum_from_a_recording_choose: "Audiodatei wählen",
  tool_remove_mains_hum_from_a_recording_hint: "Eine WAV-, MP3-, M4A-, AAC- oder OGG-Datei ablegen. Maximal 40 MiB und 10 Minuten; Mono oder Stereo.",
  tool_remove_mains_hum_from_a_recording_convert: "Entbrummen",
  tool_remove_mains_hum_from_a_recording_download: "WAV herunterladen",
  tool_remove_mains_hum_from_a_recording_sample: "Beispiel laden",
  tool_remove_mains_hum_from_a_recording_clear: "Löschen",
  tool_remove_mains_hum_from_a_recording_advanced: "Netzfrequenz und Obertöne",
  tool_remove_mains_hum_from_a_recording_hz_label: "Netzfrequenz",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Hz",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Hz",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "Obertöne",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "Nur Grundton",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "Obertöne einbeziehen",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "Standard 50 Hz mit Obertönen notcht den Grundton plus 2.–5. Harmonische unter Nyquist. Wählen Sie 60 Hz für Nordamerika und ähnliche Netze. Nur Grundton schont nahen Bass.",
  tool_remove_mains_hum_from_a_recording_progress: "Entbrumm-Fortschritt",
  tool_remove_mains_hum_from_a_recording_read: "Lesen",
  tool_remove_mains_hum_from_a_recording_decode: "Dekodieren",
  tool_remove_mains_hum_from_a_recording_dehum: "Entbrummen",
  tool_remove_mains_hum_from_a_recording_write: "Schreiben",
  tool_remove_mains_hum_from_a_recording_done: "Fertig. Hören Sie die entbrummte WAV an und laden Sie sie herunter.",
  tool_remove_mains_hum_from_a_recording_failed: "Entbrummen fehlgeschlagen. Versuchen Sie eine kleinere, gültige Audiodatei.",
  tool_remove_mains_hum_from_a_recording_elapsed: "{s}s vergangen",
  tool_remove_mains_hum_from_a_recording_preview: "Entbrummte WAV anhören",
  tool_remove_mains_hum_from_a_recording_result: "{seconds}s · {hz} Hz · {harmonics} · {notches} Notches · WAV {output} KiB",
  tool_remove_mains_hum_from_a_recording_sample_name: "drei-sekunden-netzbrummen-demo",
  tool_remove_mains_hum_from_a_recording_empty: "Wählen Sie zuerst eine Audiodatei oder laden Sie das Beispiel.",
  tool_remove_mains_hum_from_a_recording_err_file: "Legen Sie genau eine Audiodatei ab.",
  tool_remove_mains_hum_from_a_recording_err_format: "Nicht unterstütztes oder beschädigtes Audio. Nutzen Sie eine Datei, die der Browser dekodieren kann (WAV, MP3, M4A, AAC oder OGG).",
  tool_remove_mains_hum_from_a_recording_err_limit: "Nutzen Sie eine Datei von höchstens 40 MiB oder 10 Minuten mit ein oder zwei Kanälen.",
  tool_remove_mains_hum_from_a_recording_err_decode: "Der Browser konnte dieses Audio nicht dekodieren. Versuchen Sie eine andere gültige Aufnahme.",
  tool_remove_mains_hum_from_a_recording_err_encoder: "Die entbrummte WAV konnte nicht geschrieben werden. Prüfen Sie Frequenz und Obertöne und versuchen Sie Entbrummen erneut.",
  tool_remove_mains_hum_from_a_recording_err_silence: "Pegel ist praktisch Stille—nichts zu entbrummen. Versuchen Sie eine Aufnahme mit hörbarem Pegel.",
  tool_remove_mains_hum_from_a_recording_how_title: "So entfernen Sie Netzbrummen aus einer Aufnahme",
  tool_remove_mains_hum_from_a_recording_how_body:
    "Wählen Sie 50 oder 60 Hz, entscheiden Sie über Obertöne, führen Sie die Notches aus, hören Sie zu und laden Sie eine 16-Bit-WAV herunter—ohne Upload.",
  tool_remove_mains_hum_from_a_recording_how_item_1: "Wählen Sie eine Audiodatei oder laden Sie das Beispiel für eine dreisekündige Brumm-Demonstration.",
  tool_remove_mains_hum_from_a_recording_how_item_2: "Öffnen Sie Netzfrequenz und Obertöne: wählen Sie 50 oder 60 Hz, dann Nur Grundton oder Obertöne einbeziehen.",
  tool_remove_mains_hum_from_a_recording_how_item_3: "Klicken Sie Entbrummen und warten Sie auf Lesen → Dekodieren → Entbrummen → Schreiben.",
  tool_remove_mains_hum_from_a_recording_how_item_4: "Hören Sie das ruhigere elektrische Bett an, prüfen Sie die Ergebniszeile und laden Sie die WAV herunter.",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "Warum unsere Tools Netzbrummen aus einer Aufnahme entfernen wählen",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "Sehen Sie Netz-Hz, Obertonmodus, Notch-Anzahl und Ausgabe-KiB vor dem Speichern.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "Ein klarer Entbrumm-Job—50/60-Hz-Notches mit optionalen Obertönen, kein vergrabenes DAW-Rack.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "Dekodierung, Notch-Filterung und WAV-Schreiben laufen auf Ihrem Gerät; die Seite lädt die Aufnahme nicht hoch.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "Ändern von Frequenz, Obertönen oder Eingabe löscht den alten Download, damit Sie keine veraltete WAV speichern.",
  tool_remove_mains_hum_from_a_recording_rules_title: "Notch-Frequenz, Obertöne und ehrliche Browser-Grenzen",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "Jeder Lauf verkettet schmale Notch-Filter auf dem gewählten Grundton und bei Bedarf Harmonische 2–5 unter Nyquist. Echte Netztöne verbessern sich am meisten; Breitband-Rauschen braucht Denoise woanders. Soft-Peak-Schutz hält die WAV unter Vollaussteuerung.",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 Hz oder 60 Hz setzen den Grundton. Obertöne einbeziehen fügt Notches bei 2×–5× unter Nyquist hinzu. Standard: 50 Hz mit Obertönen.",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "Das ist eine Browser-Notch-Kette. Kein Breitband-Denoise, keine Klickreparatur und kein dumpfes Sprach-EQ.",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "Die Ausgabe behält 1 oder 2 Kanäle. Tags werden nicht kopiert. Die Originaldatei wird nie überschrieben.",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "Eine Datei bis 40 MiB und zehn Minuten. Bass nahe dem Notch kann dünner werden; bei hohlem Klang Nur Grundton versuchen.",
  tool_remove_mains_hum_from_a_recording_example_title: "Einen echten Brumm-Clip ausprobieren",
  tool_remove_mains_hum_from_a_recording_example:
    "Beispiel laden erzeugt einen dreisekündigen sprachähnlichen Ton unter 50-Hz-Brummen plus Obertönen und entbrummt automatisch bei 50 Hz mit Obertönen. Die Wiedergabe startet nie von selbst—drücken Sie Play in der Vorschau, wenn Sie das ruhigere Bett hören möchten.",
  tool_remove_mains_hum_from_a_recording_usecases_title: "Wann das hilft",
  tool_remove_mains_hum_from_a_recording_usecase_1: "Eine Sprachnotiz mit stetigem Netzbrummen von Ladegerät oder Dimmer—wählen Sie Ihre Netz-Hz, Entbrummen, WAV herunterladen.",
  tool_remove_mains_hum_from_a_recording_usecase_2: "Eine Feldaufnahme, bei der der Netzton weg muss, bevor Sie Breitband-Rauschen denoisen oder dumpfe Sprache EQ-en.",
  tool_remove_mains_hum_from_a_recording_usecase_3: "Ein 50/60-Hz-Brumm von Netzteilen ist unter dem Take hörbar.",
  tool_remove_mains_hum_from_a_recording_faq_q1: "Ist das dasselbe wie Hintergrundgeräusche einer Sprachnotiz reduzieren?",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "Nein. Jene Seite highpasst und gatet stetiges Lüfter- oder Klimarauschen. Diese Seite notcht schmale 50/60-Hz-Netztöne. Nutzen Sie Hintergrundgeräusche einer Sprachnotiz reduzieren für Breitband-Rauschen.",
  tool_remove_mains_hum_from_a_recording_faq_q2: "Entfernt das Klicks und Pops?",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "Nein. Klicks, Mund-Pops und Vinyl-Knistern brauchen einen Declick-Job. Diese Seite notcht nur Netzgrundton und optionale Obertöne.",
  tool_remove_mains_hum_from_a_recording_faq_q3: "Ist das dasselbe wie EQ a muffled voice recording?",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "Nein. Jene Seite formt den Klang mit Clarity, Warmth oder Presence. Diese Seite entfernt Netzbrummen. Für dumpfen Klang nach dem Entbrummen nutzen Sie EQ a muffled voice recording.",
  tool_remove_mains_hum_from_a_recording_faq_q4: "Soll ich 50 Hz oder 60 Hz wählen?",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "Passen Sie Ihr Stromnetz an. Große Teile Europas, Asiens, Afrikas und Australiens nutzen 50 Hz. Nordamerika und Teile Japans und Südamerikas nutzen 60 Hz. Falsche Hz lassen das Brummen weitgehend unberührt.",
  tool_remove_mains_hum_from_a_recording_faq_q5: "Was macht Obertöne einbeziehen?",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "Es fügt Notches bei dem Zwei- bis Fünffachen des Grundtons hinzu, wenn diese Frequenzen unter Nyquist liegen. Brummen hat oft Obertöne; Nur Grundton schont nahen Bass.",
  tool_remove_mains_hum_from_a_recording_faq_q6: "Wird mein Audio auf einen Server hochgeladen?",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "Nein. Dekodierung, Notch-Filterung und WAV-Schreiben laufen im Browser auf Ihrem Gerät. Die Seite braucht beim ersten Laden Netz; Offline-Verfügbarkeit ist nicht garantiert. Für Breitband-Rauschen nutzen Sie Hintergrundgeräusche einer Sprachnotiz reduzieren; für dumpfen Klang EQ a muffled voice recording.",
};
export default de;
