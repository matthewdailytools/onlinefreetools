/**
 * i18n-Fragment (batch-checksum-release-files / de).
 * H1 folgt der Suche «Checksums für Release-Dateien in Masse».
 */
import type { SiteLangDict } from '../../../types';

/** Deutsch: SHA-256-Tabelle der Release-Assets und SUMS-Abgleich. */
const de: SiteLangDict = {
	tool_batch_checksum_release_files_article:
		'Hashed Sie einen Ordner Release-Assets in diesem Tab. Sie erhalten Tabelle, CSV und SHA256SUMS — kein ZIP der Binärdateien. Fügen Sie eine offizielle Liste ein, um Treffer oder Abweichung zu markieren. Die Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_batch_checksum_release_files_choose_files: 'Dateien wählen',
	tool_batch_checksum_release_files_clear: 'Leeren',
	tool_batch_checksum_release_files_col_compare: 'Abgleich',
	tool_batch_checksum_release_files_col_md5: 'MD5',
	tool_batch_checksum_release_files_col_path: 'Pfad',
	tool_batch_checksum_release_files_col_sha256: 'SHA-256',
	tool_batch_checksum_release_files_col_size: 'Größe',
	tool_batch_checksum_release_files_desc:
		'Checksums für Release-Dateien in Masse: SHA-256-Tabelle, optionales MD5, SHA256SUMS einfügen, CSV oder SUMS exportieren; bleiben auf dem Gerät, kein Upload auf einen Server.',
	tool_batch_checksum_release_files_description:
		'Checksums für Release-Dateien in Masse: legen Sie die Assets in die Warteschlange, hashen Sie jede Datei mit SHA-256 in diesem Tab, ergänzen Sie MD5 bei Bedarf, fügen Sie eine SHA256SUMS-Liste zum Vergleich ein, exportieren Sie CSV oder SUMS-Text — kein ZIP der Binärdateien. Schritte: Satz wählen, alle hashen, Liste einfügen falls vorhanden, exportieren. Beispiel: zwei kleine Musterdateien füllen zwei SHA-256-Zeilen und eine Treffer-Spalte. Die Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_batch_checksum_release_files_drop_hint: 'Release-Dateien ablegen (bis 20). Das Hashen bleibt in diesem Tab. Diese Seite packt die Originale nicht ins ZIP.',
	tool_batch_checksum_release_files_empty: 'Zuerst Dateien hinzufügen.',
	tool_batch_checksum_release_files_err_md5: 'Die MD5-Bibliothek lud nicht. Probieren Sie einen aktuellen Browser oder lassen Sie MD5 aus.',
	tool_batch_checksum_release_files_err_read: 'Diese Datei ließ sich nicht lesen. Übersprungen.',
	tool_batch_checksum_release_files_err_too_many: 'Höchstens 20 Dateien. Weitere wurden nicht aufgenommen.',
	tool_batch_checksum_release_files_example:
		'Beispiel laden hasht zwei kleine Binärdateien, füllt SHA-256-Zeilen, fügt eine SUMS-Zeile der ersten Datei ein, damit sie trifft, und aktiviert CSV und SUMS.',
	tool_batch_checksum_release_files_example_title: 'Beispiel',
	tool_batch_checksum_release_files_export_csv: 'CSV exportieren',
	tool_batch_checksum_release_files_export_sums: 'SUMS exportieren',
	tool_batch_checksum_release_files_faq_a1:
		'Nein. Das Hashen läuft in diesem Tab. Die Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen. SHA-256 nutzt Web Crypto. MD5 kann crypto-js von dieser Website laden; Ihre Bytes verlassen den Tab nicht.',
	tool_batch_checksum_release_files_faq_a2:
		'Nein. Exporte sind eine CSV-Tabelle und ein SHA256SUMS. Binärdateien packen ist ZIP erstellen — eine andere Aufgabe.',
	tool_batch_checksum_release_files_faq_a3:
		'Datei-Hash behandelt eine Datei oder einen Paste. Diese Seite hasht einen Release-Satz, vergleicht eine eingefügte SHA256SUMS-Liste und exportiert CSV plus SUMS.',
	tool_batch_checksum_release_files_faq_a4:
		'Schalten Sie Auch MD5 ein. SHA-256 läuft immer. MD5 ist extra für ältere Listen, keine zweite URL.',
	tool_batch_checksum_release_files_faq_a5:
		'Die Pfadspalte bevorzugt webkitRelativePath. Doppelte Namen in der Warteschlange bekommen ein Suffix, damit SUMS-Zeilen eindeutig bleiben.',
	tool_batch_checksum_release_files_faq_q1: 'Werden meine Dateien auf einen Server hochgeladen?',
	tool_batch_checksum_release_files_faq_q2: 'Werden die Release-Binärdateien gezippt?',
	tool_batch_checksum_release_files_faq_q3: 'Worin unterscheidet sich das vom Datei-Hash?',
	tool_batch_checksum_release_files_faq_q4: 'Wo ist MD5?',
	tool_batch_checksum_release_files_faq_q5: 'Was, wenn zwei Dateien denselben Namen haben?',
	tool_batch_checksum_release_files_file_count_tpl: '{n} Dateien in der Warteschlange',
	tool_batch_checksum_release_files_hash_all: 'Alle hashen',
	tool_batch_checksum_release_files_how_body:
		'Legen Sie die Assets in die Warteschlange, hashen Sie jede Datei mit SHA-256, fügen Sie SHA256SUMS ein falls vorhanden, exportieren Sie CSV oder SUMS — kein ZIP der Dateien.',
	tool_batch_checksum_release_files_how_item_1: 'Wählen Sie die Binärdateien, Installer oder Checksums, die Sie veröffentlichen.',
	tool_batch_checksum_release_files_how_item_2: 'Behalten Sie SHA-256. Schalten Sie Auch MD5 nur ein, wenn eine alte Liste es noch braucht.',
	tool_batch_checksum_release_files_how_item_3: 'Drücken Sie Alle hashen. Fortschritt pro Datei. Lesefehler überspringen diese Zeile.',
	tool_batch_checksum_release_files_how_item_4: 'Fügen Sie eine offizielle SHA256SUMS-Liste ein, um Treffer, Abweichung oder Fehlen zu markieren.',
	tool_batch_checksum_release_files_how_item_5: 'CSV oder SUMS exportieren, sobald mindestens ein Hash geklappt hat. Nur eine Datei? Nutzen Sie Datei-Hash.',
	tool_batch_checksum_release_files_how_title: 'So berechnen Sie die Checksums des Stapels',
	tool_batch_checksum_release_files_md5_label: 'Auch MD5 berechnen',
	tool_batch_checksum_release_files_rules_body:
		'SHA-256 nutzt Web Crypto auf Bytes, die in 4-MiB-Scheiben gelesen und zusammengefügt werden. Ausgabe ist Tabelle, CSV und SUMS, nie ein ZIP der Originale.',
	tool_batch_checksum_release_files_rules_item_1:
		'SHA-256 läuft immer. MD5 ist optional und lädt crypto-js von dieser Website; die Bytes bleiben im Tab.',
	tool_batch_checksum_release_files_rules_item_2:
		'SUMS-Zeilen folgen GNU sha256sum: Hex, zwei Leerzeichen oder Leerzeichen-Stern, dann der Name. Extra-Namen im Paste erscheinen als fehlend.',
	tool_batch_checksum_release_files_rules_item_3:
		'Lesefehler überspringen diese Zeile. Doppelte Warteschlangennamen bekommen ein Suffix. Leere Warteschlange sperrt den Export.',
	tool_batch_checksum_release_files_rules_item_4:
		'Die Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_batch_checksum_release_files_rules_title: 'Was Sie erwarten dürfen',
	tool_batch_checksum_release_files_sample: 'Beispiel laden',
	tool_batch_checksum_release_files_status_done: 'Stapel fertig — Tabelle prüfen, dann CSV oder SUMS exportieren.',
	tool_batch_checksum_release_files_status_hashing: 'Jede Release-Datei wird gehasht…',
	tool_batch_checksum_release_files_status_match: 'Treffer',
	tool_batch_checksum_release_files_status_mismatch: 'Abweichung',
	tool_batch_checksum_release_files_status_missing: 'Fehlt',
	tool_batch_checksum_release_files_status_none: '—',
	tool_batch_checksum_release_files_status_ok: 'Gehasht',
	tool_batch_checksum_release_files_status_skip: 'Übersprungen',
	tool_batch_checksum_release_files_summary_tpl: '{ok} gehasht · {skip} übersprungen · {match} Treffer · {mismatch} Abweichung',
	tool_batch_checksum_release_files_sums_label: 'SHA256SUMS zum Vergleich einfügen',
	tool_batch_checksum_release_files_sums_placeholder: 'hex  Dateiname',
	tool_batch_checksum_release_files_title: 'Checksums für Release-Dateien in Masse',
	tool_batch_checksum_release_files_usecase_1: 'GitHub-Release-Assets, neben denen eine SHA256SUMS-Datei stehen soll.',
	tool_batch_checksum_release_files_usecase_2: 'Spiegelfiles gegen die Checksum-Liste der Quelle vergleichen.',
	tool_batch_checksum_release_files_usecase_3: 'Mehrere Dateien hashen, ohne die Binärdateien in ein ZIP zu packen.',
	tool_batch_checksum_release_files_usecases_title: 'Wann das passt',
	tool_batch_checksum_release_files_warn_large: 'Eine Datei ist größer als 64 MB — dieser Tab kann in dieser Zeile den Speicher vollaufen.',
};

export default de;
