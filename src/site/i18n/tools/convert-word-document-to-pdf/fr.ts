/**
 * i18n 工具分片（convert-word-document-to-pdf / fr）。
 * 法语检索向重写：Convertir un document Word en PDF。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；仅在浏览器内处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 法语文案表；键名与英文母版一一对应。 */
const fr: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: "Le .docx devient un PDF dans cet onglet. Le fichier reste sur votre appareil et n'est pas envoyé à un serveur.",
  tool_convert_word_document_to_pdf_choose_file: "Choisir un fichier Word (.docx)",
  tool_convert_word_document_to_pdf_choose_files: "Choisir des fichiers",
  tool_convert_word_document_to_pdf_clear: "Effacer",
  tool_convert_word_document_to_pdf_convert: "Convertir",
  tool_convert_word_document_to_pdf_desc: "Convertir un document Word en PDF dans le navigateur : choisir le .docx, lire l'aperçu HTML, puis exporter. Le fichier reste sur l'appareil et n'est pas envoyé à un serveur.",
  tool_convert_word_document_to_pdf_description: "Vous avez déjà un .docx et voulez un PDF imprimable dans le navigateur. Passez par « Choisir un fichier Word (.docx) », lisez l'aperçu HTML, puis « Convertir » et « Télécharger le PDF ». Le fichier reste sur cet appareil et n'est pas envoyé à un serveur. « Charger l'exemple » donne un paragraphe et un PDF d'une page.",
  tool_convert_word_document_to_pdf_download: "Télécharger le PDF",
  tool_convert_word_document_to_pdf_drop_hint: "Ou déposez un .docx ici. Le traitement reste dans cet onglet.",
  tool_convert_word_document_to_pdf_empty: "Choisissez d'abord un fichier .docx.",
  tool_convert_word_document_to_pdf_err_convert: "La conversion a échoué. Réessayez avec un document plus simple.",
  tool_convert_word_document_to_pdf_err_encrypted: "Ce fichier semble protégé par un mot de passe. Déverrouillez-le d'abord.",
  tool_convert_word_document_to_pdf_err_load: "Impossible de lire ce fichier .docx.",
  tool_convert_word_document_to_pdf_err_notext: "Aucun texte de corps lisible dans ce document.",
  tool_convert_word_document_to_pdf_err_pdfjs: "Le moteur d'affichage PDF n'a pas pu se charger.",
  tool_convert_word_document_to_pdf_example: "« Charger l'exemple » fabrique un .docx qui ne contient que « Paragraphe Word d'exemple pour la conversion. », affiche l'aperçu HTML, puis exporte un PDF d'une page.",
  tool_convert_word_document_to_pdf_example_title: "Exemple",
  tool_convert_word_document_to_pdf_faq_a1: "Non. La lecture et l'export PDF se font dans cet onglet ; les scripts viennent de ce site. Le document n'est pas envoyé à nos serveurs.",
  tool_convert_word_document_to_pdf_faq_a2: "Le chemin va du .docx à l'aperçu HTML, puis au PDF. En-têtes, formes flottantes et certaines polices s'aplatissent. Si vous avez déjà le balisage, ouvrez « Convertir HTML en PDF ».",
  tool_convert_word_document_to_pdf_faq_a3: "Non. Enregistrez d'abord en .docx. Cette page n'accepte que le paquet Office Open XML et ne fait pas d'OCR sur un scan.",
  tool_convert_word_document_to_pdf_faq_a4: "Ici on part d'un fichier Word déjà écrit. « Écrire un document PDF en ligne » est un éditeur vide.",
  tool_convert_word_document_to_pdf_faq_a5: "Un gros .docx peut être lent. Commencez par un navigateur de bureau.",
  tool_convert_word_document_to_pdf_faq_q1: "Mon fichier Word quitte-t-il cet appareil ?",
  tool_convert_word_document_to_pdf_faq_q2: "Pourquoi le PDF est-il plus simple que dans Word ?",
  tool_convert_word_document_to_pdf_faq_q3: "Un ancien .doc passe-t-il ?",
  tool_convert_word_document_to_pdf_faq_q4: "En quoi est-ce différent d'écrire un PDF dans le navigateur ?",
  tool_convert_word_document_to_pdf_faq_q5: "Les gros fichiers sont-ils acceptés ?",
  tool_convert_word_document_to_pdf_how_body: "Lisez la zone « Aperçu HTML » avant d'exporter. Le départ se fait avec « Choisir un fichier Word (.docx) » ou « Charger l'exemple », puis « Convertir » et « Télécharger le PDF ». Le fichier ne quitte pas cet onglet.",
  tool_convert_word_document_to_pdf_how_item_1: "Cliquez sur « Choisir un fichier Word (.docx) » ou « Charger l'exemple ».",
  tool_convert_word_document_to_pdf_how_item_2: "Lisez la zone « Aperçu HTML » du corps du texte.",
  tool_convert_word_document_to_pdf_how_item_3: "Cliquez sur « Convertir » pour construire le PDF à partir de cet aperçu.",
  tool_convert_word_document_to_pdf_how_item_4: "Cliquez sur « Télécharger le PDF » quand le statut affiche « Terminé. ».",
  tool_convert_word_document_to_pdf_how_title: "Comment convertir un document Word en PDF",
  tool_convert_word_document_to_pdf_preview_label: "Aperçu HTML",
  tool_convert_word_document_to_pdf_rules_body: "Seul le .docx est accepté. La mise en page, les en-têtes et les styles complexes peuvent s'aplatir dans le PDF.",
  tool_convert_word_document_to_pdf_rules_item_1: "Le travail : obtenir un PDF imprimable à partir d'un document Word, dans le navigateur.",
  tool_convert_word_document_to_pdf_rules_item_2: "Tout se passe sur votre appareil ; le fichier n'est pas envoyé à un serveur.",
  tool_convert_word_document_to_pdf_rules_item_3: "Les anciens .doc et les scans sans texte ne passent pas par l'OCR.",
  tool_convert_word_document_to_pdf_rules_item_4: "Un paquet chiffré ou abîmé s'arrête avec un message lisible.",
  tool_convert_word_document_to_pdf_rules_item_5: "En-têtes, formes flottantes et certaines polices s'aplatissent, parce que le chemin va du .docx au HTML puis au PDF.",
  tool_convert_word_document_to_pdf_rules_title: "Ce que la conversion conserve vraiment",
  tool_convert_word_document_to_pdf_sample: "Charger l'exemple",
  tool_convert_word_document_to_pdf_sample_paragraph: "Paragraphe Word d'exemple pour la conversion.",
  tool_convert_word_document_to_pdf_status_done: "Terminé.",
  tool_convert_word_document_to_pdf_status_working: "Conversion en cours…",
  tool_convert_word_document_to_pdf_title: "Convertir un document Word en PDF",
  tool_convert_word_document_to_pdf_usecase_1: "Courrier confidentiel qui doit rester sur l'appareil",
  tool_convert_word_document_to_pdf_usecase_2: "Rendu de devoir : relire un court .docx avant l'impression",
  tool_convert_word_document_to_pdf_usecase_3: "Bureau sans Word installé, pour envoyer un brouillon en PDF",
  tool_convert_word_document_to_pdf_usecases_title: "Dans quelles situations",
  tool_convert_word_document_to_pdf_warn_large: "Fichier volumineux : cela peut être lent.",
};
export default fr;
