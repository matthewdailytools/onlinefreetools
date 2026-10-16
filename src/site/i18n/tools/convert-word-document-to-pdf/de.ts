/**
 * i18n 工具分片（convert-word-document-to-pdf / de）。
 * 德语检索向重写：Word-Dokument in PDF umwandeln。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；仅在浏览器内处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 德语文案表；键名与英文母版一一对应。 */
const de: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: "In diesem Tab wird aus .docx ein PDF. Die Datei bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.",
  tool_convert_word_document_to_pdf_choose_file: "Word-Datei (.docx) wählen",
  tool_convert_word_document_to_pdf_choose_files: "Dateien wählen",
  tool_convert_word_document_to_pdf_clear: "Leeren",
  tool_convert_word_document_to_pdf_convert: "Umwandeln",
  tool_convert_word_document_to_pdf_desc: "Word-Dokument im Browser in ein PDF umwandeln: .docx wählen, HTML-Vorschau prüfen, dann exportieren. Die Datei bleibt auf dem Gerät und wird nicht auf einen Server hochgeladen.",
  tool_convert_word_document_to_pdf_description: "„Beispiel laden“ baut ein Word-Dokument mit einem Absatz und ein einseitiges PDF. Für eigene Dateien „Word-Datei (.docx) wählen“, die HTML-Vorschau lesen, dann „Umwandeln“ und „PDF herunterladen“. Die Datei bleibt auf diesem Gerät und wird nicht auf einen Server hochgeladen. Kopfzeilen können flach werden.",
  tool_convert_word_document_to_pdf_download: "PDF herunterladen",
  tool_convert_word_document_to_pdf_drop_hint: "Oder eine .docx hierher ziehen. Die Verarbeitung bleibt in diesem Tab.",
  tool_convert_word_document_to_pdf_empty: "Wählen Sie zuerst eine .docx-Datei.",
  tool_convert_word_document_to_pdf_err_convert: "Die Umwandlung ist fehlgeschlagen. Versuchen Sie ein einfacheres Dokument.",
  tool_convert_word_document_to_pdf_err_encrypted: "Die Datei scheint passwortgeschützt zu sein. Entsperren Sie sie zuerst.",
  tool_convert_word_document_to_pdf_err_load: "Die .docx-Datei ließ sich nicht lesen.",
  tool_convert_word_document_to_pdf_err_notext: "Im Dokument steht kein lesbarer Fließtext.",
  tool_convert_word_document_to_pdf_err_pdfjs: "Die PDF-Darstellung konnte nicht geladen werden.",
  tool_convert_word_document_to_pdf_example: "„Beispiel laden“ erzeugt eine .docx mit dem Satz „Beispielabsatz aus Word für die Umwandlung.“, zeigt die HTML-Vorschau und exportiert ein einseitiges PDF.",
  tool_convert_word_document_to_pdf_example_title: "Beispiel",
  tool_convert_word_document_to_pdf_faq_a1: "Nein. Lesen und PDF-Export laufen in diesem Tab; die Skripte kommen von dieser Website. Ihr Dokument wird nicht auf unsere Server hochgeladen.",
  tool_convert_word_document_to_pdf_faq_a2: "Der Weg ist .docx, dann HTML-Vorschau, dann PDF. Kopfzeilen, schwebende Formen und manche Schriften werden flach. Liegt die Auszeichnung schon vor, nutzen Sie „HTML in PDF umwandeln“.",
  tool_convert_word_document_to_pdf_faq_a3: "Nein. Speichern Sie zuerst als .docx. Diese Seite nimmt nur das Office-Open-XML-Paket an und liest keine Scanbilder per OCR.",
  tool_convert_word_document_to_pdf_faq_a4: "Hier starten Sie mit einer vorhandenen Word-Datei. „PDF-Dokument online schreiben“ ist ein leerer Editor.",
  tool_convert_word_document_to_pdf_faq_a5: "Große .docx-Dateien können langsam sein. Ein Desktop-Browser ist der bessere erste Versuch.",
  tool_convert_word_document_to_pdf_faq_q1: "Verlässt meine Word-Datei diesen Rechner?",
  tool_convert_word_document_to_pdf_faq_q2: "Warum wirkt das PDF schlichter als in Word?",
  tool_convert_word_document_to_pdf_faq_q3: "Geht auch eine alte .doc-Datei?",
  tool_convert_word_document_to_pdf_faq_q4: "Was ist der Unterschied zum PDF-Schreiben im Browser?",
  tool_convert_word_document_to_pdf_faq_q5: "Klappt das auch mit großen Dateien?",
  tool_convert_word_document_to_pdf_how_body: "Prüfen Sie zuerst die HTML-Vorschau. Danach „Umwandeln“ und „PDF herunterladen“. Der Start geht über „Word-Datei (.docx) wählen“ oder „Beispiel laden“. Die Datei verlässt diesen Tab nicht.",
  tool_convert_word_document_to_pdf_how_item_1: "Klicken Sie auf „Word-Datei (.docx) wählen“ oder „Beispiel laden“.",
  tool_convert_word_document_to_pdf_how_item_2: "Lesen Sie die HTML-Vorschau des Fließtexts.",
  tool_convert_word_document_to_pdf_how_item_3: "Klicken Sie auf „Umwandeln“, damit aus dieser Vorschau das PDF entsteht.",
  tool_convert_word_document_to_pdf_how_item_4: "Klicken Sie auf „PDF herunterladen“, sobald der Status „Fertig.“ anzeigt.",
  tool_convert_word_document_to_pdf_how_title: "So wandeln Sie ein Word-Dokument in ein PDF um",
  tool_convert_word_document_to_pdf_preview_label: "HTML-Vorschau",
  tool_convert_word_document_to_pdf_rules_body: "Angenommen wird nur .docx. Layout, Kopfzeilen und aufwendige Formate können im PDF flach werden.",
  tool_convert_word_document_to_pdf_rules_item_1: "Aufgabe: aus einem Word-Dokument im Browser ein druckbares PDF machen.",
  tool_convert_word_document_to_pdf_rules_item_2: "Nur auf Ihrem Gerät; die Datei wird nicht auf einen Server hochgeladen.",
  tool_convert_word_document_to_pdf_rules_item_3: "Ältere .doc-Dateien und reine Scanbilder werden nicht per OCR gelesen.",
  tool_convert_word_document_to_pdf_rules_item_4: "Passwortgeschützte oder beschädigte Pakete enden mit einer lesbaren Meldung.",
  tool_convert_word_document_to_pdf_rules_item_5: "Kopfzeilen, schwebende Formen und manche Schriften werden flach, weil der Weg von .docx über HTML zum PDF führt.",
  tool_convert_word_document_to_pdf_rules_title: "Was bei der Umwandlung erhalten bleibt",
  tool_convert_word_document_to_pdf_sample: "Beispiel laden",
  tool_convert_word_document_to_pdf_sample_paragraph: "Beispielabsatz aus Word für die Umwandlung.",
  tool_convert_word_document_to_pdf_status_done: "Fertig.",
  tool_convert_word_document_to_pdf_status_working: "Wird umgewandelt…",
  tool_convert_word_document_to_pdf_title: "Word-Dokument in PDF umwandeln",
  tool_convert_word_document_to_pdf_usecase_1: "Entwurf ohne installiertes Word als PDF weitergeben",
  tool_convert_word_document_to_pdf_usecase_2: "Kurzes Referat als .docx prüfen und dann drucken",
  tool_convert_word_document_to_pdf_usecase_3: "Vertraulicher Brief, der auf dem Gerät bleiben muss",
  tool_convert_word_document_to_pdf_usecases_title: "Wann sich die Umwandlung lohnt",
  tool_convert_word_document_to_pdf_warn_large: "Große Datei — kann dauern.",
};
export default de;
