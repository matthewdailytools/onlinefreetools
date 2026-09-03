/**
 * i18n-Fragment (batch-compress-pdfs-for-email / de).
 * H1 folgt der Suche «PDFs für E-Mail in Masse komprimieren».
 */
import type { SiteLangDict } from '../../../types';

/** Deutsch: mehrere Anhänge einzeln verkleinern und als ZIP mitnehmen. */
const de: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'Vor dem Versand verkleinern Sie mehrere Angebote oder Scans in diesem Tab. Im ZIP bleiben getrennte PDFs, kein gebundenes Heft. Verschlüsselte oder zu schwere Dateien werden übersprungen, der Rest heruntergeladen. Die Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_batch_compress_pdfs_for_email_choose_files: 'PDFs wählen',
	tool_batch_compress_pdfs_for_email_chip_email: 'E-Mail-Voreinstellung',
	tool_batch_compress_pdfs_for_email_chip_max: 'Maximal verkleinern',
	tool_batch_compress_pdfs_for_email_chip_print: 'Druck-Voreinstellung',
	tool_batch_compress_pdfs_for_email_clear: 'Leeren',
	tool_batch_compress_pdfs_for_email_col_after: 'Danach',
	tool_batch_compress_pdfs_for_email_col_before: 'Davor',
	tool_batch_compress_pdfs_for_email_col_name: 'Datei',
	tool_batch_compress_pdfs_for_email_col_status: 'Status',
	tool_batch_compress_pdfs_for_email_compress: 'Alle komprimieren',
	tool_batch_compress_pdfs_for_email_desc:
		'PDFs für E-Mail in Masse komprimieren: jede Datei einzeln verkleinern, ZIP mit mehreren PDFs; bleiben auf dem Gerät, kein Upload auf einen Server.',
	tool_batch_compress_pdfs_for_email_description:
		'PDFs für E-Mail in Masse komprimieren: legen Sie mehrere Angebote oder Scans in die Warteschlange, wenden Sie die E-Mail-Voreinstellung auf jede Datei an, überspringen Sie verschlüsselte oder zu schwere, laden Sie ein ZIP getrennter PDFs — kein zusammengeführtes Heft. Schritte: Stapel wählen, E-Mail-Voreinstellung behalten, alle komprimieren, gesparte Bytes lesen. Beispiel: zwei kurze Muster-PDFs bleiben zwei Dateien im ZIP. Die Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_batch_compress_pdfs_for_email_download_zip: 'ZIP herunterladen',
	tool_batch_compress_pdfs_for_email_drop_hint: 'PDFs ablegen (bis 20). Jede Datei wird einzeln komprimiert. Die Arbeit bleibt in diesem Tab.',
	tool_batch_compress_pdfs_for_email_empty: 'Zuerst PDFs hinzufügen.',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'Passwortgeschützt. Übersprungen.',
	tool_batch_compress_pdfs_for_email_err_fflate: 'Dieser Browser konnte das ZIP nicht bauen. Probieren Sie einen aktuellen.',
	tool_batch_compress_pdfs_for_email_err_load: 'Diese PDF ließ sich nicht lesen. Übersprungen.',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'Die PDF-Bibliothek lud nicht. Probieren Sie einen aktuellen Browser.',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'pdf.js lud nicht. Probieren Sie einen aktuellen Browser.',
	tool_batch_compress_pdfs_for_email_err_too_many: 'Höchstens 20 PDFs. Weitere wurden nicht aufgenommen.',
	tool_batch_compress_pdfs_for_email_example:
		'Beispiel laden erzeugt zwei kurze PDFs mit einer Bildseite, wendet die E-Mail-Voreinstellung auf jede an, lässt zwei Dateien im ZIP und zeigt gesparte Bytes.',
	tool_batch_compress_pdfs_for_email_example_title: 'Beispiel',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'Nein. Rasterung und Neuaufbau laufen in diesem Tab. Die Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen. pdf.js, pdf-lib und die ZIP-Hilfe können von einem CDN kommen; Ihre PDFs verlassen den Tab nicht.',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'Nein. Sie erhalten ein ZIP mit N PDFs. Zu einem Heft zusammenfügen ist PDF zusammenführen — eine andere Aufgabe, nicht diese Seite.',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'Scans mit Fotos werden oft deutlich kleiner. Eine reine Textdatei bewegt sich manchmal kaum. Die Tabelle zeigt Vorher und Nachher.',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'PDF komprimieren behandelt eine Datei. Diese Seite teilt eine E-Mail-Voreinstellung auf einen Stapel und packt Treffer in ein ZIP.',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'Diese Zeile wird übersprungen, der Rest läuft weiter. Entsperren Sie die Datei woanders und fügen Sie sie erneut hinzu.',
	tool_batch_compress_pdfs_for_email_faq_q1: 'Werden meine PDFs auf einen Server hochgeladen?',
	tool_batch_compress_pdfs_for_email_faq_q2: 'Wird alles zu einer PDF zusammengefügt?',
	tool_batch_compress_pdfs_for_email_faq_q3: 'Werden Scans stärker verkleinert als Text?',
	tool_batch_compress_pdfs_for_email_faq_q4: 'Worin unterscheidet sich das von PDF komprimieren?',
	tool_batch_compress_pdfs_for_email_faq_q5: 'Was, wenn eine Datei verschlüsselt ist?',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '{n} PDFs in der Warteschlange',
	tool_batch_compress_pdfs_for_email_how_body:
		'Legen Sie mehrere Anhänge in die Warteschlange, wählen Sie die E-Mail-Voreinstellung, komprimieren Sie jede Datei einzeln und nehmen Sie ein ZIP der Treffer mit.',
	tool_batch_compress_pdfs_for_email_how_item_1: 'Wählen Sie Angebote oder Scans, die durch die Anhangsgrenze müssen.',
	tool_batch_compress_pdfs_for_email_how_item_2: 'Behalten Sie die E-Mail-Voreinstellung, außer Sie brauchen Druck (schärfer) oder Maximal verkleinern.',
	tool_batch_compress_pdfs_for_email_how_item_3: 'Drücken Sie Alle komprimieren. Dateien bleiben getrennt. Nichts wird zu einem Heft verkettet.',
	tool_batch_compress_pdfs_for_email_how_item_4: 'Verschlüsselte oder kaputte Dateien werden übersprungen. Die Summe zählt gesparte Bytes der Treffer.',
	tool_batch_compress_pdfs_for_email_how_item_5: 'ZIP herunterladen, sobald mindestens eine Datei geklappt hat. Nur eine PDF? Nutzen Sie PDF komprimieren.',
	tool_batch_compress_pdfs_for_email_how_title: 'So komprimieren Sie den Stapel für die E-Mail',
	tool_batch_compress_pdfs_for_email_preset_label: 'Gemeinsame Voreinstellung',
	tool_batch_compress_pdfs_for_email_rules_body:
		'Jede PDF wird in JPEG-Seiten gerastert und neu aufgebaut. Die Ausgabe ist immer ein ZIP getrennter PDFs.',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'E-Mail ist Standard: Skalierung etwa 1.0 und JPEG etwa 0.55. Druck ist schonender. Maximal verkleinert weiter.',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'Verschlüsselt, beschädigt oder ohne Speicher überspringt nur diese Zeile. Doppelte ZIP-Namen werden Name (2).pdf.',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'Reine Textdateien werden oft kaum kleiner. Das ist erwartet; die Tabelle meldet die Größen trotzdem.',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'Die Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_batch_compress_pdfs_for_email_rules_title: 'Was Sie erwarten dürfen',
	tool_batch_compress_pdfs_for_email_sample: 'Beispiel laden',
	tool_batch_compress_pdfs_for_email_status_compressing: 'Jede PDF für E-Mail wird komprimiert…',
	tool_batch_compress_pdfs_for_email_status_done: 'Stapel fertig — Tabelle prüfen, dann ZIP herunterladen.',
	tool_batch_compress_pdfs_for_email_status_ok: 'Komprimiert',
	tool_batch_compress_pdfs_for_email_status_skip: 'Übersprungen',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} fertig · {skip} übersprungen · gespart {saved}',
	tool_batch_compress_pdfs_for_email_title: 'PDFs für E-Mail in Masse komprimieren',
	tool_batch_compress_pdfs_for_email_usecase_1: 'Ein Stapel Angebote, der zusammen die 25-MB-Grenze des Postfachs sprengt.',
	tool_batch_compress_pdfs_for_email_usecase_2: 'Gescannte Belege als getrennte Anhänge senden, nicht als ein Heft.',
	tool_batch_compress_pdfs_for_email_usecase_3: 'Mehrere PDFs vor der E-Mail verkleinern, ohne sie zusammenzuführen.',
	tool_batch_compress_pdfs_for_email_usecases_title: 'Wann das passt',
	tool_batch_compress_pdfs_for_email_warn_large: 'Eine Datei ist größer als 40 MB — dieser Tab kann in dieser Zeile den Speicher vollaufen.',
};

export default de;
