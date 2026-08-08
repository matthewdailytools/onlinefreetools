/**
 * i18n tool shard (timezone-converter / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_timezone_converter_article:
    'Wählen Sie einen Zeitpunkt in einer IANA-Quellzone und sehen Sie dieselbe Uhrzeit in UTC, New York, London, Tokio und weiteren Zonen. Für Remote-Teams, Logs und Weltuhr — Intl im Browser, ohne Upload.',
  tool_timezone_converter_clear: 'Leeren',
  tool_timezone_converter_col_local: 'Lokales Datum & Uhrzeit',
  tool_timezone_converter_col_offset: 'UTC-Offset',
  tool_timezone_converter_col_zone: 'Zeitzone',
  tool_timezone_converter_compare_zones: 'In diesen Zonen vergleichen',
  tool_timezone_converter_convert: 'Umrechnen',
  tool_timezone_converter_desc:
    'Einen Moment zwischen IANA-Zonen vergleichen — mit DST-Hinweisen, lokal im Browser.',
  tool_timezone_converter_description:
    'Rechnen Sie Datum und Uhrzeit von einer IANA-Zone in mehrere Zielzonen im Browser um. Prozess: lokale Zeit eingeben, Quellzone wählen, Vergleichszonen ankreuzen, dann Umrechnen. Beispiel: 15.06.2026 14:30 Los Angeles → Zeilen New York, London, Tokio und UTC mit Offset. Erklärt DST-Lücken; kein exportierbares Meeting-Paket.',
  tool_timezone_converter_error_dst_gap:
    'Diese lokale Uhrzeit existiert in der Quellzone nicht (DST-Frühlingssprung). Wählen Sie die benachbarte Stunde.',
  tool_timezone_converter_error_empty: 'Datum/Uhrzeit eingeben und mindestens eine Vergleichszone wählen.',
  tool_timezone_converter_error_invalid: 'Ungültiges Format. Picker oder JJJJ-MM-TTHH:MM verwenden.',
  tool_timezone_converter_example:
    'Festes Beispiel beim Laden: 15.06.2026 14:30 America/Los_Angeles → UTC, New York, London, Tokio mit lokaler Uhr und UTC-Offset nach IANA-Regeln für dieses Datum.',
  tool_timezone_converter_example_title: 'Beispiel',
  tool_timezone_converter_faq_a1:
    'Wir nutzen IANA-Bezeichner wie America/New_York oder Asia/Tokyo — wie Browser und Server. Abkürzungen EST/JST sind mehrdeutig; in Einladungen immer den vollen IANA-Namen.',
  tool_timezone_converter_faq_a2:
    'Beim Sommerzeitbeginn fehlen lokale Stunden — klare Fehlermeldung. Beim Ende kann dieselbe Uhrzeit doppelt vorkommen; Intl wählt einen Offset — kritische Termine an diesen Tagen manuell prüfen.',
  tool_timezone_converter_faq_a3:
    'Unix-Timestamp-Tools wandeln Epoch ↔ Uhr, oft UTC. Hier bleibt die benannte Quellzone und mehrere Ziele stehen nebeneinander — für «wie spät ist es dort?».',
  tool_timezone_converter_faq_a4:
    'Nein. Sofort-Tabelle zur eigenen Orientierung. Kein teilbares Meeting-Paket, keine Teilnehmerliste, kein ICS-Export.',
  tool_timezone_converter_faq_a5:
    'Ja, alles lokal: nur eingebautes Intl.DateTimeFormat; nichts wird hochgeladen.',
  tool_timezone_converter_faq_q1: 'Warum IANA-Namen statt EST, PST oder GMT?',
  tool_timezone_converter_faq_q2: 'Was passiert an Sommerzeit-Umstellungstagen?',
  tool_timezone_converter_faq_q3: 'Unterschied zum Unix-Timestamp-Konverter?',
  tool_timezone_converter_faq_q4: 'Kann ich hier ein Team-Meeting-Zeitzone-Paket exportieren?',
  tool_timezone_converter_faq_q5: 'Werden Datum/Uhrzeit an einen Server gesendet?',
  tool_timezone_converter_how_body:
    'Lokale Datum/Uhrzeit und IANA-Quellzone eingeben. Vergleichszonen ankreuzen und Umrechnen. Die Tabelle zeigt lokale Uhr und UTC-Offset desselben Moments — berechnet mit Intl im Browser.',
  tool_timezone_converter_how_title: 'So funktioniert es',
  tool_timezone_converter_local_tz: 'Ihr Browser',
  tool_timezone_converter_now: 'Jetzt',
  tool_timezone_converter_rules_body:
    'IANA-Regeln, DST-Verhalten und Abgrenzung zu Epoch- oder Meeting-Export-Tools.',
  tool_timezone_converter_rules_item_1:
    'Zonen folgen der IANA Time Zone Database (tzdata). Offsets ändern sich mit DST — die Tabelle gilt für das eingegebene Datum, nicht einen festen GMT-Abstand.',
  tool_timezone_converter_rules_item_2:
    'Frühjahrs-Lücken: nicht existierende Stunde → Fehler. Herbst-Überlappungen: doppelte Uhrzeit → Intl wählt einen Offset; Grenzfälle prüfen.',
  tool_timezone_converter_rules_item_3:
    'CST, IST usw. können verschiedene Regionen meinen. In APIs und Cron volle IANA-Namen verwenden.',
  tool_timezone_converter_rules_item_4:
    'Datenschutz: kein Upload. Nur Lese-Vergleich — kein Meeting-Planer, keine IP-Geolokation.',
  tool_timezone_converter_rules_title: 'Erwartete Regeln',
  tool_timezone_converter_sample: 'Beispiel laden',
  tool_timezone_converter_source_time: 'Quell-Datum & -Uhrzeit',
  tool_timezone_converter_source_tz: 'Quell-Zeitzone',
  tool_timezone_converter_title: 'Zeitzonen-Konverter — einen Moment weltweit vergleichen',
  tool_timezone_converter_usecase_1:
    'Remote-Team: «15:30 Pacific» — New York, London und Tokio auf einen Blick.',
  tool_timezone_converter_usecase_2:
    'Ops/Logs: Zeitstempel in Chicago-Lokalzeit — UTC und eigene Zone ohne Kopfrechnen.',
  tool_timezone_converter_usecase_3:
    'Reise: Ankunft in Dubai — Sydney und Los Angeles parallel für Übergabe-Anrufe.',
  tool_timezone_converter_usecases_title: 'Typische Einsätze',
};
export default de;
