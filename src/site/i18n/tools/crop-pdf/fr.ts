/**
 * i18n tool shard (crop-pdf / fr). Réécriture indépendante pour la recherche locale.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_crop_pdf_all_sides_label: 'Tous les côtés (pt)',
  tool_crop_pdf_article:
    'Rognez les marges PDF dans le navigateur avec la bibliothèque PDF—uniforme ou par côté en points. Pas un éditeur par glisser-déposer ; le fichier reste sur l’appareil.',
  tool_crop_pdf_bottom_label: 'Bas (pt)',
  tool_crop_pdf_choose_file: 'Choisir un PDF',
  tool_crop_pdf_clear: 'Effacer',
  tool_crop_pdf_crop: 'Rogner',
  tool_crop_pdf_desc:
    'Rognez les marges PDF sur l’appareil—uniforme ou par côté en points ; sans envoi au serveur.',
  tool_crop_pdf_description:
    'Rognez les marges PDF dans le navigateur en resserrant le CropBox—rien n’est envoyé au serveur. Définissez marges haut/droite/bas/gauche en points (36 par défaut) ou une valeur pour tous les côtés, puis téléchargez. Exemple : un échantillon d’une page rogne 36 pt de chaque côté et active cropped.pdf avec tailles avant/après. Ce n’est pas un éditeur par glisser ; les PDF chiffrés échouent avec un message clair.',
  tool_crop_pdf_download: 'Télécharger',
  tool_crop_pdf_drop_hint: 'Ou déposez un PDF ici. Le traitement reste dans cet onglet.',
  tool_crop_pdf_empty: 'Choisissez d’abord un PDF.',
  tool_crop_pdf_err_crop: 'Échec du rognage. Vérifiez marges et fichier, puis réessayez.',
  tool_crop_pdf_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le avant de rogner.',
  tool_crop_pdf_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_crop_pdf_err_margin:
    'Marges trop grandes—largeur ou hauteur rognée serait ≤ 10 pt. Réduisez un ou plusieurs côtés.',
  tool_crop_pdf_example:
    'L’échantillon crée un PDF d’une page, rogne 36 pt de chaque côté et active cropped.pdf avec statistiques de taille.',
  tool_crop_pdf_example_title: 'Exemple',
  tool_crop_pdf_faq_a1:
    'Non. la bibliothèque PDF s’exécute dans votre onglet (scripts éventuellement depuis ce site). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_crop_pdf_faq_a2:
    'Cet outil resserre les boîtes PDF par marges en points—pas de rectangle à glisser sur l’aperçu comme pour une image.',
  tool_crop_pdf_faq_a3:
    'Exact. Saisie en points uniquement ; pas de cadre libre ni d’édition pixel—utilisez un outil image si besoin.',
  tool_crop_pdf_faq_a4:
    'Les PDF protégés par mot de passe échouent en général ici. Retirez le mot de passe avec un outil de confiance, puis rognez.',
  tool_crop_pdf_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_crop_pdf_faq_q2: 'Différence avec rogner une image ?',
  tool_crop_pdf_faq_q3: 'Est-ce un éditeur par glisser pixels ?',
  tool_crop_pdf_faq_q4: 'Et les PDF chiffrés ?',
  tool_crop_pdf_how_body:
    'Choisissez un PDF, définissez marges en points (tous côtés ou chaque bord), cliquez Rogner puis Télécharger. CropBox et MediaBox se réduisent ; lecteurs et impression respectent les nouvelles limites. Tout est local après chargement de la bibliothèque.',
  tool_crop_pdf_how_item_1: "Sélectionnez l’entrée avec « Choisir un PDF »",
  tool_crop_pdf_how_item_2: "Réglez les options puis cliquez sur « Rogner »",
  tool_crop_pdf_how_item_3: "Vérifiez l’aperçu, le nombre de pages ou le statut",
  tool_crop_pdf_how_item_4: "Cliquez sur « Télécharger » pour enregistrer le résultat",
  tool_crop_pdf_how_title: 'Fonctionnement',
  tool_crop_pdf_left_label: 'Gauche (pt)',
  tool_crop_pdf_margins_title: 'Marges à rogner (points)',
  tool_crop_pdf_pages_label: 'Pages du fichier',
  tool_crop_pdf_right_label: 'Droite (pt)',
  tool_crop_pdf_rules_body: 'Calcul des marges, boîtes PDF, limites, confidentialité et échecs en rognage local.',
  tool_crop_pdf_rules_item_1: 'Unités : marges en points PDF (pt). 72 pt ≈ 1 pouce. L’échantillon utilise 36 pt (½ pouce) par côté.',
  tool_crop_pdf_rules_item_2: 'Boîtes : CropBox et MediaBox se réduisent depuis chaque bord. Origine en bas à gauche (spec PDF).',
  tool_crop_pdf_rules_item_3: 'Sécurité : si largeur ou hauteur rognée ≤ 10 pt, les réglages sont rejetés avant enregistrement.',
  tool_crop_pdf_rules_item_4: 'Confidentialité et limites : octets dans l’onglet ; chiffré/corrompu échoue clairement ; gros fichiers peuvent ralentir.',
  tool_crop_pdf_rules_title: 'Règles à connaître',
  tool_crop_pdf_sample: 'Charger l’exemple',
  tool_crop_pdf_stats_page_tpl: 'Page {n} : {ow}×{oh} pt → {nw}×{nh} pt',
  tool_crop_pdf_stats_tpl: '{pages} · {bytes}',
  tool_crop_pdf_status_cropping: 'Rognage du PDF…',
  tool_crop_pdf_status_done: 'Terminé — cliquez Télécharger pour enregistrer cropped.pdf.',
  tool_crop_pdf_title: 'Rogner un PDF — coupez les marges dans le navigateur',
  tool_crop_pdf_top_label: 'Haut (pt)',
  tool_crop_pdf_uniform_hint: 'Modifier « Tous les côtés » met à jour chaque bord ; affinez chaque côté si besoin.',
  tool_crop_pdf_usecase_1: 'Bureau : enlevez les bords blancs d’un scan avant impression ou archivage.',
  tool_crop_pdf_usecase_2: 'Étudiants : resserrez les marges de polycopiés pour voir plus de contenu à l’écran.',
  tool_crop_pdf_usecase_3: 'Webmasters : rognez la même marge sur un flyer exporté d’une page.',
  tool_crop_pdf_usecases_title: 'Bonnes situations',
  tool_crop_pdf_warn_large: 'Fichier > ~25 MB — le rognage peut être lent ou échouer dans certains navigateurs.',
  tool_crop_pdf_warn_pdflib: 'Échec du chargement de la bibliothèque PDF. Vérifiez le réseau et réessayez.',
};
export default fr;
