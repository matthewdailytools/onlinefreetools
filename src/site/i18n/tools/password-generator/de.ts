/**
 * i18n tool shard (password-generator / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_password_generator_article:
    'Erstelle Zufallspasswörter aus gewählten Zeichensätzen mit crypto.getRandomValues — für schnelle Demos, Wegwerf-Konten oder zum Testen von Länge/Charset-Regeln. Kein Passwort-Manager und keine Stärke-Garantie.',
  tool_password_generator_charset_label: 'Zeichensätze',
  tool_password_generator_clear: 'Leeren',
  tool_password_generator_copy: 'Kopieren',
  tool_password_generator_copy_done: 'Kopiert',
  tool_password_generator_count_label: 'Anzahl (1–100)',
  tool_password_generator_desc:
    'Zufallspasswörter mit Länge und Charset-Optionen — lokal mit crypto.getRandomValues erzeugt.',
  tool_password_generator_description:
    'Erzeuge Zufallspasswörter im Browser. Schritte: Länge (8–128) setzen, Groß-/Kleinbuchstaben/Ziffern/Symbole ankreuzen, optional Mehrdeutige ausschließen, Generieren klicken, kopieren. Beispiel: 16 Zeichen mit gemischter Schreibweise, Ziffern und Symbolen. Nur crypto.getRandomValues — nicht gespeichert oder hochgeladen.',
  tool_password_generator_digits: 'Ziffern',
  tool_password_generator_disclaimer:
    'Demo-Generator zur Bequemlichkeit — kein Passwort-Tresor. Für Banking oder Hauptkonten einen dedizierten Passwort-Manager nutzen. Passwörter werden lokal erzeugt und nicht auf unseren Servern gespeichert.',
  tool_password_generator_empty_charset: 'Mindestens einen Zeichensatz aktivieren (nach Ausschlüssen).',
  tool_password_generator_example:
    'Länge 16 mit allen Sätzen aktiv könnte so aussehen: `Xk9#mP2$vL4@nQ8!` — gemischte Schreibweise, Ziffern und Symbole. Jeder Klick erzeugt neue Zeichenkette; Beispiel laden = Länge 16 und alles aktiv.',
  tool_password_generator_example_title: 'Beispiel',
  tool_password_generator_exclude_ambiguous: 'Mehrdeutige ausschließen (0 O I l 1)',
  tool_password_generator_faq_a1:
    'Nein. Erzeugung läuft vollständig im Browser. Wir protokollieren, speichern oder übertragen keine hier erstellten Passwörter.',
  tool_password_generator_faq_a2:
    'Zufall kommt von crypto.getRandomValues (CSPRNG), nicht Math.random. Längere Passwörter mit mehr Zeichenklassen widerstehen Raten besser, aber kein Tab verspricht „unknackbar“ — folgen Sie der Org-Richtlinie und nutzen Sie einen Manager für Prod-Geheimnisse.',
  tool_password_generator_faq_a3:
    'Nein. Diese Seite erzeugt nur neue Zufallsstrings. Sie kann keine bestehenden Passwörter prüfen, knacken oder wiederherstellen.',
  tool_password_generator_faq_a4:
    'Entfernt visuell ähnliche Zeichen (0/O, 1/l/I) für leichteres Vorlesen oder Tippen — auf Kosten eines etwas kleineren Charsets.',
  tool_password_generator_faq_a5:
    'Bis zu 100 Passwörter pro Klick, eines pro Zeile. Erneut Generieren für weiteren Batch.',
  tool_password_generator_faq_q1: 'Werden Passwörter gespeichert oder an einen Server gesendet?',
  tool_password_generator_faq_q2: 'Wie stark sind diese Passwörter?',
  tool_password_generator_faq_q3: 'Kann dieses Tool mein bestehendes Passwort knacken?',
  tool_password_generator_faq_q4: 'Was bewirkt „Mehrdeutige ausschließen“?',
  tool_password_generator_faq_q5: 'Wie viele Passwörter kann ich auf einmal erzeugen?',
  tool_password_generator_generate: 'Generieren',
  tool_password_generator_how_body:
    'Länge schieben, Zeichenklassen wählen, optional mehrdeutige Glyphen ausschließen, Anzahl setzen, dann Generieren. Jedes Zeichen wird mit crypto.getRandomValues aus dem kombinierten Pool gewählt. Liste kopieren — nach Verlassen der Seite bleibt nichts.',
  tool_password_generator_how_item_1: 'Länge mit dem Schieberegler einstellen.',
  tool_password_generator_how_item_2: 'Zeichenklassen ankreuzen; optional mehrdeutige Zeichen ausschließen.',
  tool_password_generator_how_item_3: 'Anzahl festlegen, dann auf Generieren klicken.',
  tool_password_generator_how_item_4: 'Eine Zeile oder alles kopieren und im Passwort-Manager speichern.',
  tool_password_generator_how_title: 'So funktioniert es',
  tool_password_generator_length_label: 'Länge',
  tool_password_generator_lower: 'Kleinbuchstaben',
  tool_password_generator_output_label: 'Passwörter',
  tool_password_generator_rules_body:
    'Charset-Regeln, Zufallsquelle und ehrliche Grenzen — vor Nutzung auf echtem Konto lesen.',
  tool_password_generator_rules_item_1:
    'Pools: A–Z, a–z, 0–9 und Standard-Symbolset. Mindestens ein Pool muss nach Toggles und Mehrdeutig-Ausschluss übrig bleiben.',
  tool_password_generator_rules_item_2:
    'Der Zufallsindex nutzt crypto.getRandomValues-Bytes, nie Math.random. Bytes, die den Modulo verzerren würden, werden verworfen — jedes Zeichen im Pool bleibt gleich wahrscheinlich.',
  tool_password_generator_rules_item_3:
    'Keine NIST-zertifizierte Zusammensetzung (keine erzwungene „je eine pro Klasse“-Regel). Sets manuell aktivieren.',
  tool_password_generator_rules_item_4:
    'Datenschutz: nur lokale Erzeugung; Ausgabe auf gemeinsamen Rechnern löschen.',
  tool_password_generator_rules_title: 'Erwartete Regeln',
  tool_password_generator_sample: 'Beispiel laden',
  tool_password_generator_symbols: 'Symbole',
  tool_password_generator_title: 'Zufalls-Passwort-Generator — Passwörter lokal erstellen',
  tool_password_generator_upper: 'Großbuchstaben',
  tool_password_generator_usecase_1: 'Einmal-Credential für Staging-Login, das Sie bald rotieren.',
  tool_password_generator_usecase_2: 'Signup-Formulare prototypen, die Sample-Strong-Passwords in QA-Skripten brauchen.',
  tool_password_generator_usecase_3: 'Vergleichen, wie Länge und Symbole Lesbarkeit ändern, bevor Team-Richtlinie aktualisiert wird.',
  tool_password_generator_usecases_title: 'Gute Einsatzfälle',
};
export default de;
