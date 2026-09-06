/**
 * i18n tool shard (protect-pdf / de). Unabhängiger Text für deutsche Suche.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_protect_pdf_article:
    'PDF im Browser mit Passwort schützen, bevor Sie sensible Anhänge senden. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
  tool_protect_pdf_choose_file: 'PDF wählen',
  tool_protect_pdf_clear: 'Leeren',
  tool_protect_pdf_confirm_label: 'Passwort bestätigen',
  tool_protect_pdf_desc: 'Öffnungspasswort für PDF auf dem Gerät — ohne Server-Upload.',
  tool_protect_pdf_description:
    'PDF im Browser mit Passwort schützen, bevor Sie teilen — nichts wird hochgeladen. Schritte: PDF wählen, Passwort eingeben und bestätigen (leer wird abgelehnt), Schützen klicken, protected.pdf laden. Beispiel: Einseiten-Muster mit Passwort sample ist downloadbereit. Übliche PDF-Benutzerpasswort-Verschlüsselung, kein Militärniveau; zum Öffnen später dasselbe Passwort (Unlock-PDF folgt — kein Knacken). Dateien über ~25 MB können langsam sein.',
  tool_protect_pdf_download: 'Download',
  tool_protect_pdf_drop_hint: 'Oder PDF hier ablegen. Verarbeitung in diesem Tab.',
  tool_protect_pdf_empty: 'Zuerst ein PDF wählen.',
  tool_protect_pdf_err_encrypted: 'PDF scheint bereits geschützt. Mit bekanntem Passwort entsperren, dann erneut schützen.',
  tool_protect_pdf_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_protect_pdf_err_password_empty: 'Passwort eingeben — leer ist nicht erlaubt.',
  tool_protect_pdf_err_password_mismatch: 'Passwörter stimmen nicht überein. Beide Felder neu eingeben.',
  tool_protect_pdf_err_protect: 'Verschlüsselung fehlgeschlagen. Datei und Passwort prüfen.',
  tool_protect_pdf_example:
    'Muster erstellt eine Seite, verschlüsselt mit sample, aktiviert Download protected.pdf und zeigt das Passwort im Status.',
  tool_protect_pdf_example_title: 'PDF mit Passwort schützen',
  tool_protect_pdf_faq_a1:
    'Nein. die PDF-Bibliothek läuft in Ihrem Tab (Skripte von dieser Website). Ihr PDF wird nicht auf unsere Server hochgeladen.',
  tool_protect_pdf_faq_a2:
    'Gängige PDF-Benutzerpasswort-Verschlüsselung — zum Öffnen nötig. Kein Militärniveau; starkes, merkbares Passwort wählen.',
  tool_protect_pdf_faq_a3:
    'Dasselbe Passwort wie hier. Nutzen Sie das vorhandene Werkzeug Unlock PDF mit diesem Passwort — wir knacken keine Passwörter.',
  tool_protect_pdf_faq_a4: 'Bereits verschlüsselte PDFs laden oft nicht. Altes Passwort mit vertrauenswürdigem Tool entfernen, dann neu schützen.',
  tool_protect_pdf_faq_q1: 'Wird mein PDF hochgeladen?',
  tool_protect_pdf_faq_q2: 'Wie stark ist die Verschlüsselung?',
  tool_protect_pdf_faq_q3: 'Wie öffne ich die Datei später?',
  tool_protect_pdf_faq_q4: 'Was, wenn schon geschützt?',
  tool_protect_pdf_how_body: 'PDF wählen, Passwort zweimal gleich eingeben, Schützen, Download. Verschlüsselung im Tab nach dem Laden der PDF-Bibliothek—ohne Server-Upload.',
  tool_protect_pdf_how_item_1: "Wählen Sie die Eingabe mit „PDF wählen“",
  tool_protect_pdf_how_item_2: "Optionen einstellen und „Schützen“ anklicken",
  tool_protect_pdf_how_item_3: "Vorschau, Seitenzahl oder Statusmeldung prüfen",
  tool_protect_pdf_how_item_4: "Mit „Download“ das Ergebnis speichern",
  tool_protect_pdf_how_title: 'So funktioniert es',
  tool_protect_pdf_pages_label: 'Seiten',
  tool_protect_pdf_password_label: 'Passwort',
  tool_protect_pdf_protect: 'Schützen',
  tool_protect_pdf_rules_body: 'Passwortregeln, Verschlüsselungsumfang, Datenschutz und Fehler.',
  tool_protect_pdf_rules_item_1: 'Passwort Pflicht; Bestätigung muss übereinstimmen. Leer vor Verschlüsselung abgelehnt.',
  tool_protect_pdf_rules_item_2: 'die PDF-Bibliothek setzt Benutzer- und Owner-Passwort gleich — zum Öffnen erforderlich.',
  tool_protect_pdf_rules_item_3: 'Ausgabe: verschlüsseltes PDF (protected.pdf). Bereits geschützte Eingaben: klare Fehlermeldung.',
  tool_protect_pdf_rules_item_4: 'Datenschutz: Bytes im Tab; kein Militärniveau; ~25-MB-Hinweis; riesige Dateien können scheitern.',
  tool_protect_pdf_rules_title: 'Erwartete Regeln',
  tool_protect_pdf_sample: 'Beispiel laden',
  tool_protect_pdf_stats_tpl: '{pages} Seite(n) · verschlüsselt · {bytes}',
  tool_protect_pdf_status_done: 'Fertig — Download für protected.pdf klicken.',
  tool_protect_pdf_status_sample_pwd: 'Beispiel bereit — Passwort: «{pwd}». protected.pdf zum Testen laden.',
  tool_protect_pdf_status_working: 'PDF wird verschlüsselt…',
  tool_protect_pdf_title: 'PDF mit Passwort schützen',
  tool_protect_pdf_usecase_1: 'Büro: Öffnungspasswort vor E-Mail mit Vertrag.',
  tool_protect_pdf_usecase_2: 'Ops: Einmalbericht vor Kundenportal sperren.',
  tool_protect_pdf_usecase_3: 'Studierende: Scan mit Passwort nur für die Lehrkraft schützen.',
  tool_protect_pdf_usecases_title: 'Passende Fälle',
  tool_protect_pdf_warn_large: 'Datei größer als ~25 MB — Verschlüsselung kann langsam sein oder scheitern.',
  tool_protect_pdf_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen.',
};
export default de;
