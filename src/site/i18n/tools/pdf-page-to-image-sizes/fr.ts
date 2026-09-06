/**
 * i18n tool shard (pdf-page-to-image-sizes / fr). Réécrit pour les recherches en français.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'Choisissez une page PDF et exportez un ZIP de JPEG prêts pour les réseaux — carré 1080, OG 1200×630, HD 1280×720, vertical 1080×1920. le moteur de rendu rend une fois ; Canvas ajuste chaque preset avec bandes blanches si besoin.',
  tool_pdf_page_to_image_sizes_choose_file: 'Choisir un PDF',
  tool_pdf_page_to_image_sizes_clear: 'Effacer',
  tool_pdf_page_to_image_sizes_desc:
    'Exportez une page PDF en pack JPEG multi-tailles sur l’appareil — ZIP ; sans envoi au serveur.',
  tool_pdf_page_to_image_sizes_description:
    'Transformez une page PDF en pack JPEG multi-tailles dans le navigateur — le fichier reste sur l’appareil et n’est pas envoyé au serveur. Choisissez un PDF, indiquez le numéro de page (1 par défaut), cliquez Exporter puis Télécharger un ZIP avec page-N-WxH.jpg. Exemple : la couverture d’exemple produit quatre presets (1080², 1200×630, 1280×720, 1080×1920). PDF protégé ou endommagé → erreur claire.',
  tool_pdf_page_to_image_sizes_download: 'Télécharger',
  tool_pdf_page_to_image_sizes_drop_hint: 'Ou déposez un PDF ici. Traitement dans cet onglet.',
  tool_pdf_page_to_image_sizes_empty: 'Choisissez d’abord un fichier PDF.',
  tool_pdf_page_to_image_sizes_err_bad_page: 'Numéro de page hors plage. Vérifiez le total.',
  tool_pdf_page_to_image_sizes_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le d’abord.',
  tool_pdf_page_to_image_sizes_err_export: 'Échec de l’export. Vérifiez le fichier et la page.',
  tool_pdf_page_to_image_sizes_err_fflate: 'Bibliothèque ZIP non chargée. Vérifiez le réseau.',
  tool_pdf_page_to_image_sizes_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'Moteur PDF non chargé. Vérifiez le réseau.',
  tool_pdf_page_to_image_sizes_example:
    'L’exemple crée un PDF d’une page, exporte la page 1 en quatre presets JPEG et active Télécharger pour page-1-sizes.zip.',
  tool_pdf_page_to_image_sizes_example_title: 'Exemple',
  tool_pdf_page_to_image_sizes_export: 'Exporter',
  tool_pdf_page_to_image_sizes_faq_a1:
    'Non. le moteur de rendu, la bibliothèque PDF et la bibliothèque ZIP s’exécutent dans votre onglet (scripts parfois depuis ce site). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF vers JPG exporte chaque page à son ratio d’origine. Cet outil choisit une page et l’ajuste à des tailles plateforme fixes (contain, centré, bandes blanches).',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080 (carré Instagram), 1200×630 (aperçu Open Graph / Facebook), 1280×720 (HD paysage), 1080×1920 (story / vertical).',
  tool_pdf_page_to_image_sizes_faq_a4:
    'La page est redimensionnée pour tenir entière sans rognage. L’espace vide devient blanc pour un JPEG propre.',
  tool_pdf_page_to_image_sizes_faq_a5:
    'Fichiers au-delà de ~25 Mo peuvent être lents ou échouer. Pages complexes consomment plus de mémoire.',
  tool_pdf_page_to_image_sizes_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_pdf_page_to_image_sizes_faq_q2: 'Différence avec PDF vers JPG ?',
  tool_pdf_page_to_image_sizes_faq_q3: 'Quelles tailles sont incluses ?',
  tool_pdf_page_to_image_sizes_faq_q4: 'Pourquoi des bandes blanches autour ?',
  tool_pdf_page_to_image_sizes_faq_q5: 'Limite de taille de fichier ?',
  tool_pdf_page_to_image_sizes_how_body:
    'Choisissez un PDF, saisissez le numéro de page (à partir de 1), cliquez Exporter puis Télécharger. Un rendu, ajustement à chaque preset, puis ZIP.',
  tool_pdf_page_to_image_sizes_how_title: 'Fonctionnement',
  tool_pdf_page_to_image_sizes_page_label: 'Numéro de page',
  tool_pdf_page_to_image_sizes_pages_label: 'Pages',
  tool_pdf_page_to_image_sizes_rules_body:
    'Tailles preset, ajustement contain, JPEG, noms ZIP, confidentialité et échecs.',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'Presets : 1080×1080 (instagram-square), 1200×630 (og-facebook), 1280×720 (hd-landscape), 1080×1920 (story-portrait).',
  tool_pdf_page_to_image_sizes_rules_item_2:
    'Rendu de la page choisie une fois à échelle 2×, puis drawImage contain centré ; JPEG qualité 0.9.',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'Noms ZIP : page-{N}-{W}x{H}.jpg. Archive : page-{N}-sizes.zip.',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'Confidentialité & limites : octets dans l’onglet ; PDF chiffré/corrompu échoue clairement ; >~25 Mo peut ralentir.',
  tool_pdf_page_to_image_sizes_rules_title: 'Règles à connaître',
  tool_pdf_page_to_image_sizes_sample: 'Charger l’exemple',
  tool_pdf_page_to_image_sizes_stats_tpl: 'Page {page} · {n} tailles · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: 'Terminé — cliquez Télécharger pour enregistrer le ZIP.',
  tool_pdf_page_to_image_sizes_status_exporting: 'Rendu de la page et création du pack de tailles…',
  tool_pdf_page_to_image_sizes_title: 'Page PDF en plusieurs tailles — pack multi-plateformes',
  tool_pdf_page_to_image_sizes_usecase_1: 'Social : affiche PDF → carré IG, OG et story dans un ZIP.',
  tool_pdf_page_to_image_sizes_usecase_2: 'Webmasters : exportez une couverture 1200×630 pour aperçu de lien sans recadrage.',
  tool_pdf_page_to_image_sizes_usecase_3: 'Étudiants : sauvegardez une diapo en tailles mobile.',
  tool_pdf_page_to_image_sizes_usecases_title: 'Cas d’usage',
  tool_pdf_page_to_image_sizes_warn_large: 'Fichier > ~25 Mo — export peut être lent ou échouer.',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'Bibliothèque PDF non chargée. Vérifiez le réseau.',
};
export default fr;
