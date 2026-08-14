import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
  tool_unzip_file_article:
    'Öffnen Sie eine ZIP-Datei im Browser, prüfen Sie den Dateibaum, zeigen Sie Text oder Bilder an und laden Sie benötigte Dateien herunter. Das Archiv bleibt auf Ihrem Gerät und wird nicht an einen Server hochgeladen.',
  tool_unzip_file_choose_file: 'ZIP wählen',
  tool_unzip_file_clear: 'Leeren',
  tool_unzip_file_desc:
    'ZIP online entpacken, Inhalte im Browser ansehen und Dateien herunterladen — ohne Server-Upload.',
  tool_unzip_file_description:
    'Entpacken Sie eine ZIP-Datei online im Browser: ZIP wählen oder ablegen, Dateibaum prüfen, Text oder Bilder ansehen und eine Datei herunterladen oder alles exportieren. Dateien bleiben auf Ihrem Gerät und werden nicht an einen Server hochgeladen. Das Beispiel project-files.zip zeigt readme.txt, assets/logo.png und docs/notes.md mit sicheren Pfaden.',
  tool_unzip_file_download_all: 'Alles exportieren',
  tool_unzip_file_download_file: 'Datei herunterladen',
  tool_unzip_file_drop_hint: 'Eine .zip-Datei hier ablegen. Die Verarbeitung bleibt in diesem Tab.',
  tool_unzip_file_empty: 'Wählen Sie zuerst eine ZIP-Datei.',
  tool_unzip_file_err_archive: 'Die ZIP-Datei konnte nicht gelesen werden. Sie ist eventuell beschädigt, verschlüsselt oder kein ZIP-Archiv.',
  tool_unzip_file_err_fflate: 'ZIP-Engine konnte nicht geladen werden. Prüfen Sie die Verbindung und versuchen Sie es erneut.',
  tool_unzip_file_err_no_file: 'Es ist keine entpackte Datei ausgewählt.',
  tool_unzip_file_example:
    'Das integrierte Beispiel project-files.zip entpackt drei sichere Einträge: readme.txt, assets/logo.png und docs/notes.md. Die Seite zeigt den Baum, die Vorschau von readme.txt und aktiviert Datei herunterladen sowie Alles exportieren.',
  tool_unzip_file_example_title: 'Beispiel',
  tool_unzip_file_exported_all: 'Die Dateien wurden mit sicheren Pfaden in eine neue ZIP-Datei gepackt.',
  tool_unzip_file_faq_a1:
    'Nein. Die ZIP-Datei wird im Browser-Tab gelesen, und extrahierte Daten bleiben auf Ihrem Gerät. Das ZIP-Skript kann von einem CDN geladen werden, aber Ihr Archiv wird nicht an unsere Server gesendet.',
  tool_unzip_file_faq_a2:
    'Diese Seite ist auf ZIP ausgelegt. RAR, 7Z, ISO und TAR.GZ benötigen eine schwerere Mehrformat-Engine und sollten von einem separaten Archiv-Extractor unterstützt werden, sobald diese Funktion existiert.',
  tool_unzip_file_faq_a3:
    'Passwortgeschützte ZIP-Dateien können ohne kompatible Passwortunterstützung fehlschlagen. Dieses Tool knackt oder rekonstruiert keine Passwörter.',
  tool_unzip_file_faq_a4:
    'Absolute Pfade, ../-Segmente, leere Namen oder doppelte Namen werden vor dem Export umbenannt oder blockiert. Die Liste zeigt, wenn ein Pfad geändert wurde.',
  tool_unzip_file_faq_a5:
    'Große ZIP-Dateien können im Browser langsam sein oder Speicher verbrauchen, besonders auf Smartphones. Die Seite warnt, wenn Dateianzahl, entpackte Größe oder Expansionsrate riskant wirken.',
  tool_unzip_file_faq_q1: 'Wird meine ZIP-Datei hochgeladen?',
  tool_unzip_file_faq_q2: 'Kann es RAR, 7Z oder TAR.GZ entpacken?',
  tool_unzip_file_faq_q3: 'Öffnet es passwortgeschützte ZIP-Dateien?',
  tool_unzip_file_faq_q4: 'Was passiert mit unsicheren Pfaden?',
  tool_unzip_file_faq_q5: 'Wie werden sehr große ZIP-Dateien behandelt?',
  tool_unzip_file_file_count_label: 'Dateien',
  tool_unzip_file_how_body:
    'Wählen Sie eine ZIP-Datei oder legen Sie sie ab. Die Seite liest das Archiv, normalisiert Pfade, erstellt die Dateiliste und zeigt sichere Vorschauen für Text und Bilder. Wählen Sie eine Zeile zum Ansehen und Herunterladen oder exportieren Sie alles als neue ZIP-Datei mit bereinigten Pfaden.',
  tool_unzip_file_how_title: 'So funktioniert es',
  tool_unzip_file_load_sample: 'Beispiel laden',
  tool_unzip_file_no_preview:
    'Für diesen Dateityp ist keine Vorschau verfügbar. Sie können die Datei trotzdem herunterladen.',
  tool_unzip_file_preview_title: 'Vorschau',
  tool_unzip_file_rules_body:
    'ZIP-Entpacken im Browser braucht klare Regeln für Pfade, Vorschau, Download-Modi und Fehlerfälle.',
  tool_unzip_file_rules_item_1:
    'Pfadsicherheit: führende Schrägstriche, Laufwerksbuchstaben, ../-Segmente und doppelte Namen werden vor dem Export bereinigt.',
  tool_unzip_file_rules_item_2:
    'Vorschau: kleiner Text, Markdown, JSON, CSV, PNG, JPEG, GIF, WebP und SVG können angezeigt werden; andere Dateien zeigen nur Metadaten.',
  tool_unzip_file_rules_item_3:
    'Download: die ausgewählte Datei wird direkt geladen; Alles exportieren erstellt eine neue ZIP-Datei aus bereinigten Dateien.',
  tool_unzip_file_rules_item_4:
    'Grenzen: verschlüsselte, geteilte, beschädigte oder ungewöhnlich stark expandierende Archive können fehlschlagen oder in künftigen Versionen eine Bestätigung brauchen.',
  tool_unzip_file_rules_title: 'Regeln, die gelten',
  tool_unzip_file_selected_label: 'Ausgewählt',
  tool_unzip_file_size_label: 'Entpackte Größe',
  tool_unzip_file_status_done: 'ZIP entpackt — Datei auswählen oder alles exportieren.',
  tool_unzip_file_status_reading: 'ZIP wird gelesen...',
  tool_unzip_file_title: 'ZIP online entpacken — Dateien im Browser ansehen und extrahieren',
  tool_unzip_file_total_size_label: 'Entpackte Größe',
  tool_unzip_file_usecase_1:
    'Büro: Öffnen Sie eine Lieferanten-ZIP und laden Sie nur die benötigte Rechnung oder Grafik herunter.',
  tool_unzip_file_usecase_2:
    'Lernen: Prüfen Sie Kursmaterial auf einem verwalteten Computer oder Tablet ohne Desktop-App.',
  tool_unzip_file_usecase_3:
    'Entwicklung: Prüfen Sie den Quellcode-Baum einer Release und speichern Sie danach die Prüfsumme der Original-ZIP.',
  tool_unzip_file_usecases_title: 'Geeignete Fälle',
  tool_unzip_file_warn_dangerous:
    'Einige Pfade wurden vor dem Export aus Sicherheitsgründen umbenannt.',
  tool_unzip_file_warn_large:
    'Warnung für großes Archiv: Diese ZIP-Datei kann im Browser langsam sein oder viel Speicher nutzen.',
};

export default de;
