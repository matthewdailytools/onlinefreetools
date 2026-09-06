/**
 * i18n tool shard (file-hash / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_file_hash_algo_label: 'Algorithmen',
  tool_file_hash_article:
    'Berechne MD5- und SHA-Hex-Digests für eingefügten Text oder eine lokale Datei. Vergleiche Release-Checksums, Config-Fingerabdrücke oder prüfe Downloads — Hashing bleibt im Browser, außer einmaligem Laden von dieser Website bei MD5.',
  tool_file_hash_clear: 'Leeren',
  tool_file_hash_copy: 'Alles kopieren',
  tool_file_hash_copy_done: 'Kopiert',
  tool_file_hash_desc:
    'Text oder Dateien lokal hashen — MD5-, SHA-1-, SHA-256-, SHA-384-, SHA-512-Hex-Digests.',
  tool_file_hash_description:
    'Hashe eingefügten Text oder eine lokale Datei im Browser. Schritte: Text oder Datei wählen, MD5/SHA ankreuzen, Hash klicken, Kleinbuchstaben-Hex kopieren. Beispiel: Text `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. Dateien werden lokal gelesen; MD5 lädt crypto-js nur bei Auswahl von dieser Website.',
  tool_file_hash_empty: 'Zuerst Text einfügen oder Datei wählen.',
  tool_file_hash_example:
    'Text `hello` mit SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. MD5 derselben Zeichenkette → `5d41402abc4b2a76b9719d911017c592`. Text nutzt UTF-8-Bytes; Dateien rohe Bytes.',
  tool_file_hash_example_title: 'Beispiel',
  tool_file_hash_faq_a1:
    'MD5 ist schnell und noch in Legacy-Checksums (alte `md5sum`-Listen, manche CDN-ETags). Für Sicherheit (Signaturen, Passwörter, Manipulationsschutz) SHA-256 oder SHA-512 bevorzugen. SHA-1 ist für Zertifikate deprecated, kann aber in alten Artefakten vorkommen.',
  tool_file_hash_faq_a2:
    'Große Dateien werden blockweise mit Fortschrittsbalken gelesen. Über ~100 MB erscheint eine Warnung, wir versuchen es trotzdem. Sehr große Dateien können langsam sein oder Speicher sprengen — für Multi-GB-Archive Desktop-Tool nutzen.',
  tool_file_hash_faq_a3:
    'Text wird als UTF-8-kodierte Bytes gehasht. Eine Datei als roher Byte-Stream. Gleiche Buchstaben in einer `.txt` können vom eingefügten Text abweichen, wenn Encoding oder Zeilenenden differieren.',
  tool_file_hash_faq_a4:
    'Kein Upload. Text und Dateien bleiben auf dem Gerät. SHA-* nutzt Web Crypto. Nur MD5 lädt crypto-js von dieser Website — Inhalt geht nicht an Dritte.',
  tool_file_hash_faq_a5:
    'Ausgabe als Kleinbuchstaben-Hex ohne `0x`-Präfix, eine Zeile pro Algorithmus. Entspricht üblichen `md5sum` / `sha256sum` unter Linux und macOS.',
  tool_file_hash_faq_q1: 'Wann MD5, wann SHA-256?',
  tool_file_hash_faq_q2: 'Wie werden große Dateien behandelt?',
  tool_file_hash_faq_q3: 'Hasht eingefügter Text wie eine Datei?',
  tool_file_hash_faq_q4: 'Wird meine Datei oder mein Text hochgeladen?',
  tool_file_hash_faq_q5: 'Welches Hex-Format wird ausgegeben?',
  tool_file_hash_file_bytes: 'Bytes',
  tool_file_hash_file_label: 'Datei wählen',
  tool_file_hash_hash: 'Hash',
  tool_file_hash_how_body:
    'Wähle Text für Einfügen (UTF-8-Bytes) oder Datei für lokale Datei (rohe Bytes). Einen oder mehr Algorithmen ankreuzen und Hash klicken. SHA über Web Crypto; MD5 lädt beim ersten Mal eine kleine Bibliothek. Ergebnis als Kleinbuchstaben-Hex, eine Zeile pro Algorithmus.',
  tool_file_hash_how_title: 'So funktioniert es',
  tool_file_hash_input_mode_label: 'Eingabemodus',
  tool_file_hash_large_warn:
    'Datei über 100 MB. Hashing kann langsam sein oder viel Speicher brauchen — für sehr große Archive Desktop-Tool erwägen.',
  tool_file_hash_md5_fail: 'MD5-Bibliothek von dieser Website konnte nicht geladen werden. SHA-256 versuchen oder Netzwerk prüfen.',
  tool_file_hash_no_algo: 'Mindestens einen Algorithmus auswählen.',
  tool_file_hash_output_label: 'Hex-Digests',
  tool_file_hash_progress_label: 'Datei wird gelesen…',
  tool_file_hash_rules_body:
    'Algorithmuswahl, Byte-Semantik und Ausgabeformat — was zu erwarten ist, bevor du einen Digest woanders vergleichst.',
  tool_file_hash_rules_item_1:
    'MD5 → 32 Hex (128 Bit). SHA-1 → 40 Hex. SHA-256 → 64 Hex. SHA-384 → 96 Hex. SHA-512 → 128 Hex. Alles Kleinbuchstaben, ohne Präfix.',
  tool_file_hash_rules_item_2:
    'Textmodus: UTF-8 via `TextEncoder`. Dateimodus: gesamter Byte-Stream. UTF-8-BOM oder CRLF in der Datei ändert den Digest gegenüber plain paste.',
  tool_file_hash_rules_item_3:
    'Leerer Text oder Zero-Byte-Datei liefert den Standard-Empty-Input-Digest pro Algorithmus (gültiges Hex).',
  tool_file_hash_rules_item_4:
    'Datenschutz: kein Upload. MD5 ist der einzige Pfad mit Laden von crypto-js von dieser Website; SHA-* nur eingebautes Web Crypto.',
  tool_file_hash_rules_title: 'Erwartete Regeln',
  tool_file_hash_sample: 'Beispiel laden',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'Datei',
  tool_file_hash_tab_text: 'Text',
  tool_file_hash_text_label: 'Texteingabe',
  tool_file_hash_text_placeholder: 'Text zum Hashen als UTF-8 einfügen…',
  tool_file_hash_title: 'Datei-Hash-Prüfer — Digeste im Browser verifizieren',
  tool_file_hash_usecase_1:
    'Release: Installer-SHA-256 mit dem auf der Download-Seite veröffentlichten Wert vergleichen.',
  tool_file_hash_usecase_2:
    'Config: JSON- oder `.env`-Snippet vor und nach Deploy fingerprinten.',
  tool_file_hash_usecase_3:
    'Legacy-QA: prüfen, ob altes MD5-Manifest noch zum neu gebauten Artefakt passt.',
  tool_file_hash_usecases_title: 'Gute Einsatzfälle',
};
export default de;
