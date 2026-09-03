/**
 * i18n tool shard (unlock-pdf / de). Local rewrite; known password, not cracking.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_unlock_pdf_article:
    'Entfernen Sie das PDF-Öffnerpasswort, wenn Sie es kennen—im Browser, kein Knack-Tool. Dateien bleiben auf Ihrem Gerät.',
  tool_unlock_pdf_choose_file: 'Verschlüsseltes PDF wählen',
  tool_unlock_pdf_clear: 'Leeren',
  tool_unlock_pdf_desc:
    'Entfernen Sie ein Öffnerpasswort, das Sie kennen—auf dem Gerät, ohne Server-Upload.',
  tool_unlock_pdf_description:
    'Entsperren Sie ein passwortgeschütztes PDF im Browser, wenn Sie das Öffnerpasswort kennen—ohne Server-Upload. Schritte: verschlüsseltes PDF wählen, Passwort eingeben (leer wird abgelehnt, wenn nötig), Entsperren klicken, unlocked.pdf herunterladen. Beispiel: eine Seite mit Passwort sample, automatisch ausgefüllt und entsperrt. Kein Knacken, Brute Force oder Wiederherstellen vergessener Passwörter. Über ~25 MB kann es langsam werden.',
  tool_unlock_pdf_download: 'Download',
  tool_unlock_pdf_drop_hint: 'Oder verschlüsseltes PDF hier ablegen. Verarbeitung in diesem Tab.',
  tool_unlock_pdf_empty: 'Zuerst ein verschlüsseltes PDF wählen.',
  tool_unlock_pdf_encrypted_label: 'Passwortgeschützt',
  tool_unlock_pdf_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_unlock_pdf_err_not_encrypted:
    'Dieses PDF scheint kein Öffnerpasswort zu haben. PDF zusammenführen oder andere Tools nutzen.',
  tool_unlock_pdf_err_password_empty: 'Öffnerpasswort eingeben—leer wird abgelehnt, wenn die Datei es braucht.',
  tool_unlock_pdf_err_password_wrong:
    'Falsches Passwort. Geben Sie das Passwort erneut ein, das Sie beim Schützen gesetzt haben.',
  tool_unlock_pdf_err_unlock: 'Entsperren fehlgeschlagen. Datei und Passwort prüfen und erneut versuchen.',
  tool_unlock_pdf_example:
    'Das Beispiel erstellt ein einseitiges PDF mit Passwort sample, füllt das Feld, entsperrt und aktiviert Download unlocked.pdf.',
  tool_unlock_pdf_example_title: 'Mein PDF entsperren',
  tool_unlock_pdf_faq_a1:
    'Nein. Entfernt Schutz nur bei korrektem Öffnerpasswort. Kein Knacken, Brute Force oder Wiederherstellen unbekannter Passwörter.',
  tool_unlock_pdf_faq_a2:
    'Nein. die PDF-Bibliothek läuft in Ihrem Tab (Skripte ggf. vom CDN). Ihr PDF wird nicht auf unsere Server hochgeladen.',
  tool_unlock_pdf_faq_a3:
    'Eine klare Meldung bei falschem Passwort. Nutzen Sie dasselbe Passwort wie in PDF schützen oder einer anderen App—wir raten nicht.',
  tool_unlock_pdf_faq_a4:
    'PDF schützen setzt ein Öffnerpasswort; PDF zusammenführen nach dem Entsperren hier. Entsperren nur für Dateien, die beim Öffnen bereits ein Passwort verlangen.',
  tool_unlock_pdf_faq_q1: 'Knackt oder stellt vergessene Passwörter wieder her?',
  tool_unlock_pdf_faq_q2: 'Wird mein PDF hochgeladen?',
  tool_unlock_pdf_faq_q3: 'Was, wenn das Passwort falsch ist?',
  tool_unlock_pdf_faq_q4: 'Bezug zu PDF schützen?',
  tool_unlock_pdf_how_body:
    'Passwortgeschütztes PDF wählen, bekanntes Öffnerpasswort eingeben, Entsperren und Download. Entschlüsselung im Tab nach dem Laden der PDF-Bibliothek—ohne Server-Upload. Leeres Passwort wird abgelehnt, wenn nötig.',
  tool_unlock_pdf_how_title: 'So funktioniert es',
  tool_unlock_pdf_pages_label: 'Seiten',
  tool_unlock_pdf_password_label: 'Öffnerpasswort',
  tool_unlock_pdf_rules_body: 'Passwortregeln, Umfang, Datenschutz und Fehler beim lokalen Entsperren.',
  tool_unlock_pdf_rules_item_1:
    'Umfang: Öffnerpasswort muss bekannt sein. Kein Knacken, Brute Force oder Wiederherstellen unbekannter Passwörter.',
  tool_unlock_pdf_rules_item_2: 'Eingabe: nur verschlüsseltes PDF. Ungeschützte Dateien werden klar abgelehnt.',
  tool_unlock_pdf_rules_item_3: 'Ausgabe: ein unverschlüsseltes PDF (unlocked.pdf). Falsches Passwort = expliziter Fehler.',
  tool_unlock_pdf_rules_item_4:
    'Datenschutz: Bytes im Tab; ohne Server-Upload; ~25-MB-Hinweis; sehr große Dateien können scheitern.',
  tool_unlock_pdf_rules_title: 'Erwartete Regeln',
  tool_unlock_pdf_sample: 'Beispiel laden',
  tool_unlock_pdf_stats_tpl: '{pages} Seite(n) · entsperrt · {bytes}',
  tool_unlock_pdf_status_done: 'Fertig — Download klicken, um unlocked.pdf zu speichern.',
  tool_unlock_pdf_status_sample_pwd: 'Beispiel bereit — Passwort ist «{pwd}». unlocked.pdf herunterladen zum Testen.',
  tool_unlock_pdf_status_working: 'PDF wird entsperrt…',
  tool_unlock_pdf_title: 'Meine PDF entsperren',
  tool_unlock_pdf_unlock: 'Entsperren',
  tool_unlock_pdf_usecase_1: 'Büro: eigenes Öffnerpasswort entfernen, um in anderer App zu mergen oder zu drucken.',
  tool_unlock_pdf_usecase_2: 'Betrieb: zuvor verschlüsselten Kundenexport vor Portal-Upload entsperren.',
  tool_unlock_pdf_usecase_3: 'Studierende: Schutz vom Scan nach Korrektur mit dem gesetzten Passwort entfernen.',
  tool_unlock_pdf_usecases_title: 'Gute Einsatzfälle',
  tool_unlock_pdf_warn_large: 'Datei größer als ~25 MB — kann langsam sein oder in manchen Browsern scheitern.',
  tool_unlock_pdf_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
};
export default de;
