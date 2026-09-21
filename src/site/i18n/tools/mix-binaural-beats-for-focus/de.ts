import type { SiteLangDict } from '../../../types';

/**
 * Deutsch (de) für mix-binaural-beats-for-focus（F9 G7）。
 * Locale rewrite for local search habits—not a verbatim machine translation of en.
 * Stereo-L/R-Beat-WAV; nur Unterhaltung/Ambient; keine Therapie- oder Heilversprechen.
 */
const de: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: 'Binaurale Beats für Fokus mischen',
  tool_mix_binaural_beats_for_focus_desc:
    'Mische binaurale Beats für Fokus aus Träger und Beat-Differenz und lade eine Stereo-WAV herunter. Nur auf dem Gerät—Unterhaltungs-Ambient, keine Behandlung.',
  tool_mix_binaural_beats_for_focus_description:
    'Mische binaurale Beats für Fokus im Browser aus Träger und Beat-Differenz und lade eine Stereo-16-Bit-WAV herunter. Schritte: Träger- und Beat-Hz setzen oder Preset tippen, Dauer wählen, Mischen, mit Kopfhörern anhören, herunterladen. Beispiel: 200 Hz Träger mit 10 Hz Differenz für 10 Sekunden. Nur Unterhaltung und Ambient-Fokusklang—keine medizinische Behandlung. Wird nie hochgeladen.',
  tool_mix_binaural_beats_for_focus_article:
    'Wer binaurale Beats für eine Fokus-Session sucht, will oft eine schlichte Stereo-Datei zum Aufbewahren. Hier legst du eine Trägerfrequenz für das linke Ohr und eine etwas höhere für das rechte fest, sodass die Differenz die Beat-Rate ist, wählst die Dauer, synthetisierst Stereo-PCM im Browser bei 44,1 kHz und lädst eine 16-Bit-WAV herunter. Kopfhörer nutzen—der Links/Rechts-Unterschied ist der Punkt. Presets ändern nur Hertz-Werte; sie sind Ambient-Shortcuts, keine medizinischen Protokolle. Diese Seite behauptet keine therapeutische Wirksamkeit, diagnostiziert oder behandelt nichts und dient nur der Unterhaltung oder persönlichem Ambient-Hören. Sie ist kein Mono-Sinus-Generator und kein UI-Benachrichtigungston-Maker. Die Arbeit läuft auf deinem Gerät.',
  tool_mix_binaural_beats_for_focus_carrier_label: 'Träger (linkes Ohr, Hz)',
  tool_mix_binaural_beats_for_focus_carrier_hint: 'Frequenz des linken Kanals, typisch 80–500 Hz. Standard 200 Hz.',
  tool_mix_binaural_beats_for_focus_beat_label: 'Beat-Differenz (Hz)',
  tool_mix_binaural_beats_for_focus_beat_hint: 'Rechtes Ohr spielt Träger + diesen Wert. Differenz zwischen 1 und 40 Hz halten.',
  tool_mix_binaural_beats_for_focus_preset_label: 'Ambient-Beat-Presets',
  tool_mix_binaural_beats_for_focus_dur_label: 'Dauer',
  tool_mix_binaural_beats_for_focus_convert: 'Mischen',
  tool_mix_binaural_beats_for_focus_download: 'WAV herunterladen',
  tool_mix_binaural_beats_for_focus_sample: 'Beispiel laden',
  tool_mix_binaural_beats_for_focus_clear: 'Leeren',
  tool_mix_binaural_beats_for_focus_advanced: 'Binaurale Hinweise',
  tool_mix_binaural_beats_for_focus_settings_hint:
    'Ausgabe ist eine Stereo-16-Bit-WAV bei 44,1 kHz mit kurzen Fades. Kopfhörer nötig für den Links/Rechts-Unterschied. Nur Unterhaltung und Ambient-Fokusklang—keine medizinische Behandlung oder Therapie.',
  tool_mix_binaural_beats_for_focus_progress: 'Mischfortschritt',
  tool_mix_binaural_beats_for_focus_synth: 'Synthese',
  tool_mix_binaural_beats_for_focus_write: 'Schreiben',
  tool_mix_binaural_beats_for_focus_done: 'Fertig. Mit Kopfhörern anhören, dann WAV herunterladen.',
  tool_mix_binaural_beats_for_focus_failed: 'Mischen fehlgeschlagen. Träger, Beat-Differenz und Dauer prüfen.',
  tool_mix_binaural_beats_for_focus_elapsed: '{s}s vergangen',
  tool_mix_binaural_beats_for_focus_preview: 'Binaurale WAV anhören',
  tool_mix_binaural_beats_for_focus_result:
    'L {left} Hz · R {right} Hz · Beat {beat} Hz · {seconds}s · Stereo · {rate} Hz · WAV {output} KiB',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: 'Zuerst Träger und Beat in Hz setzen oder Beispiel laden.',
  tool_mix_binaural_beats_for_focus_empty_state:
    'Träger und Beat-Differenz setzen (oder Preset tippen), Dauer wählen, dann Mischen—oder Beispiel laden (200 Hz / 10 Hz / 10 s). Kopfhörer nutzen. Nur Unterhaltungs-Ambient—keine medizinische Behandlung.',
  tool_mix_binaural_beats_for_focus_err_carrier: 'Träger zwischen 80 und 1000 Hz eingeben.',
  tool_mix_binaural_beats_for_focus_err_beat: 'Beat-Differenz zwischen 1 und 40 Hz eingeben (rechts = Träger + Beat).',
  tool_mix_binaural_beats_for_focus_err_limit: 'Dauer muss zwischen 0 und 120 Sekunden liegen.',
  tool_mix_binaural_beats_for_focus_err_encoder: 'Stereo-WAV konnte nicht geschrieben werden. Nochmals Mischen.',
  tool_mix_binaural_beats_for_focus_how_title: 'So mischt man binaurale Beats für Fokus',
  tool_mix_binaural_beats_for_focus_how_body:
    'Träger und Beat in Hz setzen, Dauer wählen, Mischen, mit Kopfhörern hören, eine Stereo-WAV herunterladen—ohne Upload und ohne Therapieversprechen.',
  tool_mix_binaural_beats_for_focus_how_item_1:
    'Träger-Hz für das linke Ohr eingeben (oder Standard 200 Hz) und Beat-Differenz für das rechte.',
  tool_mix_binaural_beats_for_focus_how_item_2:
    'Optional Ambient-Preset tippen (Differenz 4, 10 oder 16 Hz)—nur Zahlen, keine medizinischen Protokolle.',
  tool_mix_binaural_beats_for_focus_how_item_3:
    'Dauer-Chip wählen, Mischen klicken und Synthese → Schreiben abwarten.',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'Mit Kopfhörern anhören, Ergebniszeile prüfen, dann WAV herunterladen.',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'Warum unsere Tools Binaurale Beats für Fokus mischen',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    'Vor dem Speichern siehst du linke Hz, rechte Hz, Beat-Differenz, Dauer und Ausgabe-KiB.',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'Ein klarer Stereo-Binaural-Job mit ehrlichen YMYL-Grenzen—Unterhaltungs-Ambient, keine Behandlung.',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    'Synthese und Schreiben laufen auf deinem Gerät; nichts wird zum Verarbeiten der Töne hochgeladen.',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'Ändern von Träger, Beat oder Dauer löscht den alten Download, damit keine veraltete WAV gespeichert wird.',
  tool_mix_binaural_beats_for_focus_rules_title: 'Binaurale Regeln und ehrliche Grenzen',
  tool_mix_binaural_beats_for_focus_rules_body:
    'Jeder Lauf synthetisiert links = Träger und rechts = Träger + Beat bei 44,1 kHz mit kurzen Kantenfades. Export ist Stereo-16-Bit-WAV. Nur Unterhaltung/Ambient—keine medizinische Behandlung—und kein Mono-Sinus oder UI-Piepton.',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'Träger zwischen 80 und 1000 Hz. Beat-Differenz zwischen 1 und 40 Hz. Dauer höchstens 120 Sekunden. Ausgabe Stereo.',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    'Kopfhörer sind nötig für einen echten Links/Rechts-Unterschied. Lautsprecher mischen Kanäle und verdecken den Beat-Effekt.',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    'Diese Seite behauptet keine medizinische, Schlaf- oder therapeutische Wirksamkeit. Labels sind Ambient-Shortcuts—keine Behandlungsprotokolle.',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    'Kurze Fades reduzieren Klicks. Der Download ist eine neue Datei; nichts wird hochgeladen. Kein Mono-Sinus-Generator und kein UI-Benachrichtigungston.',
  tool_mix_binaural_beats_for_focus_example_title: 'Versuch: 200 Hz Träger mit 10 Hz Beat für 10 Sekunden',
  tool_mix_binaural_beats_for_focus_example:
    'Beispiel laden setzt 200 Hz Träger, 10 Hz Differenz und 10 Sekunden; Mischen startet automatisch. Mit Kopfhörern solltest du ein stabiles Stereo-Paar hören. Wiedergabe startet nicht von allein—Play drücken, wenn du hören willst.',
  tool_mix_binaural_beats_for_focus_usecases_title: 'Wann das hilft',
  tool_mix_binaural_beats_for_focus_usecase_1:
    'Du willst eine wiederverwendbare Ambient-Fokus-WAV: Träger und Beat setzen, Mischen, herunterladen und für Kopfhörer behalten.',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'Du brauchst eine schnelle Stereo-Beat-Demo ohne Desktop-Ton-App und ohne Therapieversprechen.',
  tool_mix_binaural_beats_for_focus_usecase_3: 'Du willst ein kurzes Stereo-Fokusbett aus Carrier und Beat-Hz nur mit Kopfhörern.',
  tool_mix_binaural_beats_for_focus_faq_q1: 'Ist das medizinische Behandlung oder Therapie?',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'Nein. Diese Seite erzeugt nur Unterhaltungs- und persönlichen Ambient-Fokusklang. Sie diagnostiziert, behandelt oder heilt keine Erkrankung und behauptet keine therapeutische Wirksamkeit.',
  tool_mix_binaural_beats_for_focus_faq_q2: 'Brauche ich Kopfhörer?',
  tool_mix_binaural_beats_for_focus_faq_a2:
    'Ja für den vorgesehenen Links/Rechts-Unterschied. An Lautsprechern mischen sich die Kanäle und der Beat-Effekt wird schwächer oder geht verloren.',
  tool_mix_binaural_beats_for_focus_faq_q3: 'Ist das dasselbe wie ein Mono-Sinus-Tongenerator?',
  tool_mix_binaural_beats_for_focus_faq_a3:
    'Nein. Eine Sinus-Seite macht eine Frequenz in Mono. Diese Seite schreibt immer Stereo mit zwei leicht unterschiedlichen Frequenzen.',
  tool_mix_binaural_beats_for_focus_faq_q4: 'Was bedeuten die Ambient-Presets?',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'Sie setzen nur die Beat-Differenz in Hertz (z. B. 4, 10 oder 16 Hz). Sie sind keine medizinischen Protokolle und versprechen keine Schlaf- oder Fokus-Ergebnisse.',
  tool_mix_binaural_beats_for_focus_faq_q5: 'Wird etwas auf einen Server hochgeladen?',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'Nein. Synthese und Schreiben laufen im Browser auf deinem Gerät. Beim ersten Laden braucht die Seite Netz; Offline-Verfügbarkeit ist nicht garantiert.',
  tool_mix_binaural_beats_for_focus_faq_q6: 'Welches Format hat der Download?',
  tool_mix_binaural_beats_for_focus_faq_a6:
    'Eine Stereo-16-Bit-PCM-WAV bei 44,1 kHz. Eine neue Datei, die du als wiederverwendbaren Ambient-Clip behalten kannst.',
};
export default de;
