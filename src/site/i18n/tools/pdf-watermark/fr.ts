/**
 * i18n tool shard (pdf-watermark / fr). Réécrit pour recherches locales.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_pdf_watermark_apply: 'Appliquer',
  tool_pdf_watermark_article:
    'Apposez DRAFT, CONFIDENTIEL ou un texte personnalisé sur chaque page PDF dans le navigateur avec la bibliothèque PDF. Logo PNG/JPG optionnel — le fichier reste sur l’appareil, sans envoi au serveur.',
  tool_pdf_watermark_choose_file: 'Choisir un PDF',
  tool_pdf_watermark_clear: 'Effacer',
  tool_pdf_watermark_desc:
    'Filigrane texte sur chaque page PDF dans le navigateur — sans envoi au serveur ; reste sur l’appareil.',
  tool_pdf_watermark_description:
    'Ajoutez un filigrane texte sur chaque page d’un PDF dans le navigateur, sans envoi au serveur. Étapes : ouvrir le PDF, saisir le tampon (ex. DRAFT), régler opacité et angle, logo PNG/JPG optionnel, appliquer, télécharger. Exemple : échantillon deux pages avec DRAFT centré, −45°, opacité 35 % ; téléchargement watermarked.pdf. PDF chiffrés : erreur claire. Diffère de Filigrane image et Rotation PDF.',
  tool_pdf_watermark_download: 'Télécharger',
  tool_pdf_watermark_drop_hint: 'Ou déposez un PDF ici. Traitement dans cet onglet.',
  tool_pdf_watermark_empty: 'Ajoutez un PDF à filigraner.',
  tool_pdf_watermark_err_apply: 'Échec du filigrane. Vérifiez fichier et réglages.',
  tool_pdf_watermark_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le d’abord.',
  tool_pdf_watermark_err_image: 'Image illisible. Utilisez PNG ou JPG.',
  tool_pdf_watermark_err_load: 'PDF illisible (endommagé ou non pris en charge).',
  tool_pdf_watermark_example:
    'L’échantillon crée un PDF deux pages, applique DRAFT centré à 35 % d’opacité et −45° sur chaque page, active Télécharger watermarked.pdf.',
  tool_pdf_watermark_example_title: 'Exemple',
  tool_pdf_watermark_faq_a1:
    'Non. la bibliothèque PDF s’exécute dans votre onglet (scripts éventuellement via CDN). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_pdf_watermark_faq_a2:
    'Filigrane image superpose texte ou logos sur des photos. Cet outil tamponne chaque page d’un document PDF.',
  tool_pdf_watermark_faq_a3:
    'Non. Une fois téléchargé, le filigrane est intégré. Le retirer exige l’original ou une édition lourde.',
  tool_pdf_watermark_faq_a4:
    'Les PDF protégés par mot de passe échouent souvent ici. Retirez le mot de passe avec un outil de confiance.',
  tool_pdf_watermark_faq_a5:
    'Oui — choisissez PNG ou JPG. Redimensionné ~un tiers de la page, même position/opacité/rotation que le texte.',
  tool_pdf_watermark_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_pdf_watermark_faq_q2: 'Différence avec le filigrane pour images ?',
  tool_pdf_watermark_faq_q3: 'Puis-je retirer le filigrane ?',
  tool_pdf_watermark_faq_q4: 'Et les PDF chiffrés ?',
  tool_pdf_watermark_faq_q5: 'Puis-je ajouter un logo ?',
  tool_pdf_watermark_how_body:
    'Choisissez un PDF, saisissez le tampon, réglez opacité et rotation, position, logo PNG/JPG optionnel, cliquez Appliquer puis Télécharger. Chaque page reçoit la même couche.',
  tool_pdf_watermark_how_title: 'Fonctionnement',
  tool_pdf_watermark_image_hint: 'Logo PNG/JPG optionnel (même position que le texte).',
  tool_pdf_watermark_image_label: 'Filigrane image (optionnel)',
  tool_pdf_watermark_opacity_label: 'Opacité',
  tool_pdf_watermark_pages_label: 'Pages',
  tool_pdf_watermark_position_bl: 'Bas gauche',
  tool_pdf_watermark_position_br: 'Bas droite',
  tool_pdf_watermark_position_center: 'Centre',
  tool_pdf_watermark_position_label: 'Position',
  tool_pdf_watermark_position_tl: 'Haut gauche',
  tool_pdf_watermark_position_tr: 'Haut droite',
  tool_pdf_watermark_rotation_label: 'Rotation (degrés)',
  tool_pdf_watermark_rules_body:
    'Règles texte/image, position, opacité, confidentialité et échecs en el navegador.',
  tool_pdf_watermark_rules_item_1:
    'Texte : tampon Helvetica sur chaque page ; échantillon DRAFT centré, 35 % opacité, −45°.',
  tool_pdf_watermark_rules_item_2:
    'Image : PNG/JPG optionnel ~35 % de la page, même position/opacité/rotation.',
  tool_pdf_watermark_rules_item_3:
    'Positions : centre ou coins ; opacité 0,1–1 ; rotation −180° à 180°. Sortie : nouveau PDF sans envoi au serveur.',
  tool_pdf_watermark_rules_item_4:
    'Limites : PDF chiffré/corrompu échoue ; >~25 Mo peut être lent ; retrait non pris en charge.',
  tool_pdf_watermark_rules_title: 'Règles attendues',
  tool_pdf_watermark_sample: 'Charger l’exemple',
  tool_pdf_watermark_stats_tpl: '{pages} page(s) filigranée(s) · {bytes}',
  tool_pdf_watermark_status_done: 'Terminé — cliquez Télécharger pour watermarked.pdf.',
  tool_pdf_watermark_status_working: 'Application du filigrane…',
  tool_pdf_watermark_text_label: 'Texte du filigrane',
  tool_pdf_watermark_title: 'Filigrane PDF — apposez du texte sur chaque page dans le navigateur',
  tool_pdf_watermark_usecase_1: 'Juridique/ops : CONFIDENTIEL sur brouillons de contrat avant envoi.',
  tool_pdf_watermark_usecase_2: 'Étudiants : DRAFT sur chapitres partagés pour relecture.',
  tool_pdf_watermark_usecase_3: 'Webmasters : logo semi-transparent sur chaque page de PDF d’aperçu.',
  tool_pdf_watermark_usecases_title: 'Cas d’usage',
  tool_pdf_watermark_warn_large: 'Fichier >~25 Mo — peut être lent ou échouer.',
  tool_pdf_watermark_warn_pdflib: 'Bibliothèque PDF non chargée. Vérifiez le réseau.',
};
export default fr;
