/**
 * i18n tool shard (archive-extractor / de).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
  tool_archive_extractor_article:
    'Öffnen Sie ZIP-, TAR- und TAR.GZ-Archive im Browser, prüfen Sie den Dateibaum, sehen Sie gängige Text- oder Bilddateien an und exportieren Sie unterstützte Inhalte als sauberes ZIP. Das Archiv bleibt auf Ihrem Gerät und wird nicht an einen Server hochgeladen.',
  tool_archive_extractor_choose_file: 'Archiv wählen',
  tool_archive_extractor_clear: 'Leeren',
  tool_archive_extractor_desc:
    'Archiv online entpacken: ZIP, TAR und TAR.GZ im Browser öffnen, Dateien ansehen und ZIP exportieren — ohne Server-Upload.',
  tool_archive_extractor_description:
    'Nutzen Sie diesen Online-Archiv-Extractor, um komprimierte Dateien im Browser zu öffnen: ZIP, TAR oder TAR.GZ wählen, Dateibaum prüfen, Text oder Bilder ansehen, eine Datei herunterladen oder unterstützte Inhalte als sauberes ZIP exportieren. Dateien bleiben auf Ihrem Gerät und werden nicht an einen Server hochgeladen. Das Beispiel sample-archive.tar.gz zeigt README.txt, src/index.js und assets/logo.png mit sicheren Pfaden.',
  tool_archive_extractor_download_all: 'ZIP exportieren',
  tool_archive_extractor_download_file: 'Datei herunterladen',
  tool_archive_extractor_drop_hint:
    'Ein Archiv hier ablegen. ZIP, TAR und TAR.GZ funktionieren jetzt; RAR, 7Z und ISO zeigen Support-Hinweise.',
  tool_archive_extractor_empty: 'Wählen Sie zuerst ein Archiv.',
  tool_archive_extractor_engine_badge: 'Support-Hinweise',
  tool_archive_extractor_err_archive:
    'Dieses Archiv konnte nicht gelesen werden. Es ist eventuell beschädigt, verschlüsselt, in Volumes aufgeteilt oder nutzt eine nicht unterstützte Kompressionsmethode.',
  tool_archive_extractor_err_engine:
    'RAR, 7Z und ISO benötigen eine schwerere Multi-Format-Engine, die in dieser Version nicht gebündelt ist. ZIP, TAR und TAR.GZ funktionieren weiterhin im Browser.',
  tool_archive_extractor_err_fflate: 'Archiv-Engine konnte nicht geladen werden. Prüfen Sie die Verbindung und versuchen Sie es erneut.',
  tool_archive_extractor_err_no_file: 'Es ist keine extrahierte Datei ausgewählt.',
  tool_archive_extractor_err_unsupported:
    'Dieser Dateityp wird hier noch nicht unterstützt. Versuchen Sie ZIP, TAR oder TAR.GZ oder nutzen Sie ein Desktop-Archivprogramm für dieses Format.',
  tool_archive_extractor_example:
    'Das integrierte Beispiel sample-archive.tar.gz öffnet sich als echtes Archiv mit drei Einträgen: README.txt, src/index.js und assets/logo.png. Die Seite zeigt den Baum, zeigt README.txt in der Vorschau und kann unterstützte Inhalte als extracted-archive.zip exportieren.',
  tool_archive_extractor_example_title: 'Beispiel',
  tool_archive_extractor_exported_all: 'Die Dateien wurden mit sicheren Pfaden in ein neues ZIP gepackt.',
  tool_archive_extractor_faq_a1:
    'Nein. Das Archiv wird im Browser-Tab gelesen, und extrahierte Bytes bleiben auf Ihrem Gerät. Das Hilfsskript kann von einem CDN geladen werden, aber Ihre Dateien werden nicht an unsere Server hochgeladen.',
  tool_archive_extractor_faq_a2:
    'In dieser Version funktionieren ZIP, TAR, TAR.GZ und TGZ. RAR, 7Z und ISO erscheinen als Formate mit Support-Hinweisen, bis eine schwerere Multi-Format-Engine aktiviert wird.',
  tool_archive_extractor_faq_a3:
    'Passwortgeschützte Archive erfordern Ihr Passwort und können trotzdem scheitern, wenn Format oder Verschlüsselung nicht unterstützt werden. Dieses Tool knackt, errät oder stellt keine Passwörter wieder her.',
  tool_archive_extractor_faq_a4:
    'Absolute Pfade, ../-Segmente, doppelte Namen oder unsichere Zeichen werden vor dem Export umbenannt oder blockiert. Ziele von Symlinks werden nicht als Links geschrieben.',
  tool_archive_extractor_faq_a5:
    'Große Archive können im Browser langsam sein oder den Speicher erschöpfen, besonders auf Smartphones. Die Seite warnt, wenn Dateianzahl, entpackte Größe oder Expansionsrate riskant wirken.',
  tool_archive_extractor_faq_a6:
    'ZIP exportieren bedeutet, die bereits extrahierten unterstützten Dateien mit bereinigten Pfaden neu zu packen. Es verspricht nicht, jede Funktion des ursprünglichen Archivformats zu erhalten.',
  tool_archive_extractor_faq_q1: 'Wird mein Archiv hochgeladen?',
  tool_archive_extractor_faq_q2: 'Welche Archivformate funktionieren?',
  tool_archive_extractor_faq_q3: 'Kann es passwortgeschützte RAR- oder 7Z-Dateien öffnen?',
  tool_archive_extractor_faq_q4: 'Was passiert mit unsicheren Pfaden oder Symlinks?',
  tool_archive_extractor_faq_q5: 'Wie werden sehr große Archive behandelt?',
  tool_archive_extractor_faq_q6: 'Ist RAR zu ZIP oder 7Z zu ZIP eine echte Konvertierung?',
  tool_archive_extractor_file_count_label: 'Dateien',
  tool_archive_extractor_format_label: 'Format',
  tool_archive_extractor_how_body:
    'Wählen Sie ein Archiv oder legen Sie es ab. Die Seite erkennt ZIP, TAR oder TAR.GZ, erstellt eine sichere Dateiliste und zeigt kleine Text- oder Bilddateien an. Wählen Sie eine Zeile zum Herunterladen einer Datei oder exportieren Sie unterstützte Dateien als neues ZIP.',
  tool_archive_extractor_how_title: 'So funktioniert es',
  tool_archive_extractor_load_engine: 'Multi-Format-Engine laden',
  tool_archive_extractor_load_sample: 'Beispiel laden',
  tool_archive_extractor_no_preview:
    'Für diesen Dateityp ist keine Vorschau verfügbar. Sie können die Datei trotzdem herunterladen.',
  tool_archive_extractor_preview_title: 'Vorschau',
  tool_archive_extractor_rules_body:
    'Archiv-Extraktion braucht klare Regeln für Formatunterstützung, Pfadsicherheit, Vorschau und ZIP-Export.',
  tool_archive_extractor_rules_item_1:
    'ZIP liest das zentrale Verzeichnis. TAR.GZ öffnet in zwei Schritten: GZIP entpacken und danach TAR-Header lesen.',
  tool_archive_extractor_rules_item_2:
    'RAR, 7Z und ISO brauchen eine schwerere Multi-Format-Engine; die Seite stellt diese Wege erst nach dem Laden als aktiv dar.',
  tool_archive_extractor_rules_item_3:
    'Pfadsicherheit: führende Schrägstriche, Laufwerksbuchstaben, ../, doppelte Namen und unsichere Zeichen werden vor dem Export bereinigt.',
  tool_archive_extractor_rules_item_4:
    'Vorschau: kleine Textdateien, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP und SVG können angezeigt werden; andere Dateien zeigen nur Metadaten.',
  tool_archive_extractor_rules_item_5:
    'Grenzen: verschlüsselte, geteilte, beschädigte, solid oder ungewöhnlich stark expandierende Archive können scheitern oder ein Desktop-Tool erfordern.',
  tool_archive_extractor_rules_title: 'Zu erwartende Regeln',
  tool_archive_extractor_selected_label: 'Ausgewählt',
  tool_archive_extractor_size_label: 'Entpackte Größe',
  tool_archive_extractor_status_done: 'Archiv geöffnet — Datei auswählen oder ZIP exportieren.',
  tool_archive_extractor_status_reading: 'Archiv wird gelesen...',
  tool_archive_extractor_title:
    'Archiv online entpacken — komprimierte Dateien im Browser öffnen',
  tool_archive_extractor_total_size_label: 'Entpackte Größe',
  tool_archive_extractor_usecase_1:
    'Entwicklung: eine .tar.gz-Quellversion öffnen, README und src prüfen und nur benötigte Dateien laden.',
  tool_archive_extractor_usecase_2:
    'Betrieb: ein ZIP-, RAR- oder 7Z-Paket eines Lieferanten prüfen und unterstützte Dateien als sauberes ZIP für das Team exportieren.',
  tool_archive_extractor_usecase_3:
    'Verwaltete Geräte: Kursmaterial oder Anhänge auf einem Chromebook prüfen, ohne Desktop-Software zu installieren.',
  tool_archive_extractor_usecases_title: 'Geeignete Fälle',
  tool_archive_extractor_warn_dangerous:
    'Einige Pfade wurden vor dem Export aus Sicherheitsgründen umbenannt oder übersprungen.',
  tool_archive_extractor_warn_large:
    'Warnung bei großem Archiv: Diese Datei kann im Browser langsam sein oder viel Speicher benötigen.',
};

export default de;
