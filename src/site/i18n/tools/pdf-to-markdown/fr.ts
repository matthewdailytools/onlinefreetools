/**
 * i18n tool shard (pdf-to-markdown / fr). Rédaction indépendante.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'Extrayez du texte sélectionnable de la couche texte PDF dans le navigateur et téléchargez du Markdown — le fichier reste sur l’appareil, sans envoi au serveur. Pas d’OCR.',
  tool_pdf_to_markdown_choose_file: 'Choisir un PDF',
  tool_pdf_to_markdown_clear: 'Effacer',
  tool_pdf_to_markdown_convert: 'Convertir',
  tool_pdf_to_markdown_desc:
    'Passez le texte PDF en Markdown sur l’appareil pour vos notes — sans envoi au serveur.',
  tool_pdf_to_markdown_description:
    'Extrayez du PDF vers Markdown dans le navigateur pour notes ou LLM — le fichier reste sur l’appareil et n’est pas envoyé au serveur. Étapes : choisissez un PDF avec couche texte, Convertir, prévisualisez, téléchargez .md. Exemple : l’échantillon d’une page produit un .md avec « Hello PDF to Markdown sample. » Les scans image seule échouent (pas d’OCR). Chiffrés : erreur claire.',
  tool_pdf_to_markdown_download: 'Télécharger .md',
  tool_pdf_to_markdown_drop_hint: 'Ou déposez un PDF ici. Le traitement reste dans cet onglet.',
  tool_pdf_to_markdown_empty: 'Choisissez d’abord un fichier PDF.',
  tool_pdf_to_markdown_err_convert: 'Échec de la conversion. Vérifiez le fichier et réessayez.',
  tool_pdf_to_markdown_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le puis réessayez.',
  tool_pdf_to_markdown_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_pdf_to_markdown_err_notext:
    'Aucun texte sélectionnable. Nous lisons uniquement la couche texte — pas d’OCR. Essayez un PDF natif ou PDF en JPG pour les images.',
  tool_pdf_to_markdown_err_pdfjs: 'Échec du chargement du moteur PDF. Vérifiez le réseau et réessayez.',
  tool_pdf_to_markdown_example:
    'L’exemple crée un PDF d’une page Helvetica, convertit, affiche la phrase en prévisualisation et active Télécharger .md.',
  tool_pdf_to_markdown_example_title: 'Exemple',
  tool_pdf_to_markdown_faq_a1:
    'Non. le moteur de rendu s’exécute dans votre onglet (scripts éventuellement via CDN). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_pdf_to_markdown_faq_a2:
    'Les scans sont souvent des images sans couche texte. Sans OCR, l’extraction est vide et échoue avec un message clair.',
  tool_pdf_to_markdown_faq_a3: 'Ne reconstruit pas titres ni tableaux — lignes de texte brut par position.',
  tool_pdf_to_markdown_faq_a4:
    'Extraire le texte d’un PDF télécharge un .txt brut avec lignes vides entre pages. Ici chaque page devient ## Page N, séparée par --- pour éditeurs Markdown.',
  tool_pdf_to_markdown_faq_a5:
    'PDF en JPG rasterise chaque page en image. Utilisez cet outil pour du texte éditable depuis un PDF numérique.',
  tool_pdf_to_markdown_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_pdf_to_markdown_faq_q2: 'Pourquoi mon PDF scanné échoue ?',
  tool_pdf_to_markdown_faq_q3: 'Conserve-t-il titres ou tableaux ?',
  tool_pdf_to_markdown_faq_q4: 'Différence avec Extraire le texte d’un PDF ?',
  tool_pdf_to_markdown_faq_q5: 'Quand utiliser PDF en JPG ?',
  tool_pdf_to_markdown_how_body:
    'Choisissez un PDF avec couche texte, convertissez, relisez le brouillon Markdown avec titres par page, puis téléchargez .md. Scans sans texte échouent clairement — pas d’OCR.',
  tool_pdf_to_markdown_how_item_1: "Choisissez ou déposez un PDF avec couche texte (ou Charger un exemple)",
  tool_pdf_to_markdown_how_item_2: "Cliquez sur Convertir pour construire le brouillon Markdown",
  tool_pdf_to_markdown_how_item_3: "Vérifiez les sections ## Page N et séparateurs --- dans l’aperçu",
  tool_pdf_to_markdown_how_item_4: "Cliquez sur Télécharger .md pour enregistrer le brouillon",
  tool_pdf_to_markdown_how_title: 'Fonctionnement',
  tool_pdf_to_markdown_pages_label: 'Pages',
  tool_pdf_to_markdown_preview_label: 'Aperçu Markdown',
  tool_pdf_to_markdown_rules_body: 'Extraction couche texte, séparateurs, pas d’OCR, confidentialité et échecs.',
  tool_pdf_to_markdown_rules_item_1: 'Chaque page devient ## Page N plus ses lignes ; pages séparées par --- pour éditeurs Markdown.',
  tool_pdf_to_markdown_rules_item_2: 'Contrairement à Extraire le texte d’un PDF (.txt), ce téléchargement est un brouillon .md pour éditeurs — pas une conversion fidèle au layout.',
  tool_pdf_to_markdown_rules_item_3: 'Pas d’OCR : texte vide après trim → échec explicite.',
  tool_pdf_to_markdown_rules_item_4: 'Limites : octets dans l’onglet ; chiffré/corrompu échoue clairement ; >~25 Mo peut ralentir.',
  tool_pdf_to_markdown_rules_title: 'Règles attendues',
  tool_pdf_to_markdown_sample: 'Charger un exemple',
  tool_pdf_to_markdown_stats_tpl: '{n} page(s) · {chars} caractères',
  tool_pdf_to_markdown_status_converting: 'Extraction du texte…',
  tool_pdf_to_markdown_status_done: 'Terminé — cliquez Télécharger .md pour enregistrer.',
  tool_pdf_to_markdown_title: 'PDF en Markdown — extrayez le texte pour vos notes dans le navigateur',
  tool_pdf_to_markdown_usecase_1: 'Bureau : copiez des clauses de contrat dans vos notes sans retaper.',
  tool_pdf_to_markdown_usecase_2: 'Rédacteurs & IA : exportez des rapports en Markdown pour édition ou prompts.',
  tool_pdf_to_markdown_usecase_3: 'Étudiants : texte de cours depuis PDF avec couche texte.',
  tool_pdf_to_markdown_usecases_title: 'Cas d’usage',
  tool_pdf_to_markdown_warn_large: 'Fichier > ~25 Mo — extraction lente ou échec possible.',
  tool_pdf_to_markdown_warn_pdflib: 'Échec du chargement de la bibliothèque PDF. Vérifiez le réseau.',
};
export default fr;
