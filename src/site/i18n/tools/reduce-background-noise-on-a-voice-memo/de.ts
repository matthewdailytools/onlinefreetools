import type { SiteLangDict } from '../../../types';

/**
 * German copy for reduce-background-noise-on-a-voice-memo (S24).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / dehum / EQ.
 */
const de: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "Hintergrundgeräusche einer Sprachnotiz reduzieren",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "Senken Sie stetiges Lüfter- oder Klimageräusch in einer Sprachnotiz mit Light, Medium oder Strong (Hochpass + Rauschboden-Gate) und laden Sie ein 16-Bit-WAV herunter. Nur geräteinterne Näherung.",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "Reduzieren Sie Hintergrundgeräusche einer Sprachnotiz mit Light-, Medium- oder Strong-Presets aus Hochpass und Rauschboden-Gate. Schritte: Entrauschen, anhören, WAV herunterladen. Beispiel: zischende Probe laden. Browser-Näherung—kein Adobe Enhance Speech, kein 50/60-Hz-Dehum, kein dumpfes Stimmen-EQ. Audio bleibt auf dem Gerät; nie hochgeladen.",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "Sprachnotizen liegen oft auf stetigem Lüfter-, Klima- oder Raumrauschen. Diese Seite filtert mit Hochpass, schätzt den Rauschboden aus ruhigen Frames und dämpft sanft nahe diesem Boden. Light, Medium und Strong steuern, wie stark ruhige Abschnitte abgesenkt werden. Das ist eine ehrliche Browser-Näherung—kein Cloud-Enhance, keine schmale Netzbrumm-Notch, kein Drei-Band-EQ. Musik kann dumpfer klingen. Kanäle bleiben 1 oder 2. Original behalten; Download ist ein neues 16-Bit-WAV. Verarbeitung im Browser auf Ihrem Gerät.",
  tool_reduce_background_noise_on_a_voice_memo_choose: "Audiodatei wählen",
  tool_reduce_background_noise_on_a_voice_memo_hint: "Eine WAV-, MP3-, M4A-, AAC- oder OGG-Datei. Maximal 40 MiB und 10 Minuten; Mono oder Stereo.",
  tool_reduce_background_noise_on_a_voice_memo_convert: "Entrauschen",
  tool_reduce_background_noise_on_a_voice_memo_download: "WAV herunterladen",
  tool_reduce_background_noise_on_a_voice_memo_sample: "Beispiel laden",
  tool_reduce_background_noise_on_a_voice_memo_clear: "Löschen",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "Entrauschungsstärke",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "Stärke der Rauschunterdrückung",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "Light",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "Medium",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "Strong",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "Medium balanciert Sprache und stetiges Zischen. Light ist sanfter. Strong dämpft ruhige Frames stärker und kann Konsonanten verdünnen. Hochpass plus Gate—kein ML-Enhance.",
  tool_reduce_background_noise_on_a_voice_memo_progress: "Entrauschungsfortschritt",
  tool_reduce_background_noise_on_a_voice_memo_read: "Lesen",
  tool_reduce_background_noise_on_a_voice_memo_decode: "Dekodieren",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "Entrauschen",
  tool_reduce_background_noise_on_a_voice_memo_write: "Schreiben",
  tool_reduce_background_noise_on_a_voice_memo_done: "Fertig. WAV anhören, dann herunterladen.",
  tool_reduce_background_noise_on_a_voice_memo_failed: "Entrauschen fehlgeschlagen. Kleinere gültige Datei versuchen.",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "{s}s vergangen",
  tool_reduce_background_noise_on_a_voice_memo_preview: "Entrauschtes WAV anhören",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds}s · {preset} · Rauschboden {floor} · WAV {output} KiB",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "drei-sekunden-zischende-sprachnotiz-demo",
  tool_reduce_background_noise_on_a_voice_memo_empty: "Zuerst Audio wählen oder Beispiel laden.",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "Genau eine Audiodatei ablegen.",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "Nicht unterstützt oder beschädigt. WAV, MP3, M4A, AAC oder OGG verwenden.",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "Maximal 40 MiB oder 10 Minuten, ein oder zwei Kanäle.",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "Browser konnte dieses Audio nicht dekodieren.",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "WAV konnte nicht geschrieben werden. Stärke prüfen und erneut versuchen.",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "Fast Stille—nichts zu entrauschen. Hörbare Aufnahme verwenden.",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "So reduzieren Sie Hintergrundgeräusche einer Sprachnotiz",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "Stärke wählen, Hochpass und Gate ausführen, anhören, 16-Bit-WAV laden—ohne Upload.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "Audiodatei wählen oder Beispiel laden (drei Sekunden mit Zischen).",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "Unter Entrauschungsstärke Light, Medium (Standard) oder Strong wählen.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "Entrauschen klicken und Lesen → Dekodieren → Entrauschen → Schreiben abwarten.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "Ruhigeres Bett prüfen, Ergebniszeile lesen, WAV herunterladen.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "Warum unsere Werkzeuge Hintergrundgeräusche einer Sprachnotiz reduzieren",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "Stärkename, geschätzter Rauschboden und Ausgabe-KiB vor dem Speichern.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "Drei klare Stärken—ein Memo-Denoise-Job, kein DAW-Rack und kein Cloud-Enhance-Upsell.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "Dekodierung, Hochpass, Gate und WAV laufen auf dem Gerät; keine Upload-Verarbeitung.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "Stärke- oder Eingabewechsel verwirft den alten Download.",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "Stärke, Rauschboden und ehrliche Browser-Grenzen",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "Jede Stärke: Hochpass, Rauschboden aus ruhigen Frames, sanftes Gate. Stetiges Zischen verbessert sich am meisten; Konsonanten und Musik können dünner werden.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "Light, Medium und Strong ändern Hochpass-Grenze und Restverstärkung. Standard: Medium.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "Browser-Näherung. Kein Adobe Enhance Speech, kein 50/60-Hz-Dehum, kein dumpfes Stimmen-EQ.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "Kanäle 1 oder 2. Tags werden nicht kopiert. Original wird nie überschrieben.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "Eine Datei bis 40 MiB und zehn Minuten. Strong kann Artefakte erzeugen; bei hohlem Klang zu Light/Medium zurück.",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "Zischende Notiz ausprobieren",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "Beispiel erzeugt drei Sekunden sprachähnlichen Ton unter stetigem Zischen und entrauscht automatisch mit Medium. Wiedergabe startet nicht von allein—Play in der Vorschau drücken.",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "Wann das hilft",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "Telefonnotiz mit Lüfter- oder Klima-Zischen—Medium, Entrauschen, WAV laden.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "Feldnotiz mit weniger Raumrauschen, bevor Fades oder EQ woanders folgen.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_3: "Stetiges Lüfter-/AC-Rauschen unter der Stimme; ein weiches Gate soll Lücken beruhigen.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "Ist das Adobe Enhance Speech?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "Nein. Cloud-Enhance baut Sprache mit großen Modellen neu. Hier nur Hochpass und Rauschboden-Gate im Browser—bescheidene, ehrliche Ergebnisse.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "Entfernt das 50/60-Hz-Netzbrumm?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "Nicht als dediziertes Dehum. Vor allem Breitband-Zischen verbessert sich. Für eine schmale 50/60-Hz-Netzbrumm-Notch nutzen Sie Netzbrummen aus einer Aufnahme entfernen.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "Ist das dasselbe wie EQ a muffled voice recording?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "Nein. Diese Seite formt Klangfarbe. Hier geht es um stetiges Hintergrundrauschen. Für dumpfen Ton danach EQ a muffled voice recording nutzen.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "Kann Strong Sprache oder Musik ruinieren?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "Ja. Strong dämpft ruhige Frames härter und kann Konsonanten verdünnen. Meist Medium; bei leiser Sprache Light.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "Was ändern Light, Medium und Strong?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "Sie heben die Hochpass-Grenze leicht und senken die Restverstärkung nahe dem geschätzten Rauschboden. Standard: Medium.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "Wird mein Audio hochgeladen?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "Nein. Dekodierung, Entrauschen und WAV laufen im Browser. Netz beim ersten Laden nötig; Offline nicht garantiert. Für weiche Kanten Fade in and fade out an audio clip; für dumpfen Ton EQ a muffled voice recording.",
};
export default de;
