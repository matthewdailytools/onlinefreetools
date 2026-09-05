/**
 * i18n 工具分片（compress-pdf / fr）。按当地检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_compress_pdf_article:
    'Réduisez la taille d\'un PDF dans le navigateur en redessinant chaque page en JPEG puis en reconstruisant le document—le fichier reste sur l\'appareil, sans envoi au serveur. Compression limitée et honnête, pas de ré-encodage cloud.',
  tool_compress_pdf_choose_file: 'Choisir un PDF',
  tool_compress_pdf_clear: 'Effacer',
  tool_compress_pdf_compress: 'Compresser',
  tool_compress_pdf_desc:
    'Compressez un PDF dans le navigateur pour réduire la taille—le fichier reste sur l\'appareil, sans envoi au serveur.',
  tool_compress_pdf_description:
    'Compressez la taille d\'un PDF dans le navigateur et comparez les octets avant/après—rien n\'est envoyé au serveur. Étapes : ouvrez un PDF, choisissez Moyen ou Faible, compressez puis téléchargez. Exemple : un échantillon de deux pages avec images passe de ~180 Ko à ~90 Ko en Moyen. Un PDF texte seul peut à peine changer. Les fichiers chiffrés échouent avec un message clair. Différent d\'Organiser (réordonner) et Fusionner (combiner).',
  tool_compress_pdf_download: 'Télécharger',
  tool_compress_pdf_drop_hint: 'Ou déposez un PDF ici. Le traitement reste dans cet onglet.',
  tool_compress_pdf_empty: 'Ajoutez un PDF à compresser.',
  tool_compress_pdf_err_compress: 'Échec de la compression. Vérifiez le fichier et réessayez.',
  tool_compress_pdf_err_encrypted: 'Ce PDF semble protégé par mot de passe. Déverrouillez-le d\'abord.',
  tool_compress_pdf_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_compress_pdf_example:
    'L\'échantillon charge un PDF de deux pages avec blocs colorés et JPEG intégrés, applique la compression Moyenne, affiche taille avant/après avec pourcentage économisé et active le téléchargement de compressed.pdf.',
  tool_compress_pdf_example_title: 'Réduire la taille d\'un PDF',
  tool_compress_pdf_faq_a1:
    'Non. pdf.js et la bibliothèque PDF s\\\'exécutent dans votre onglet (bibliothèques parfois chargées depuis un CDN). Le PDF n\\\'est pas envoyé à nos serveurs.',
  tool_compress_pdf_faq_a2:
    'L\'outil rasterise chaque page en JPEG et reconstruit le PDF. Les PDF surtout texte ou déjà optimisés peuvent à peine rétrécir. Ce n\'est pas une recompression cloud des flux intégrés.',
  tool_compress_pdf_faq_a3:
    'Non. Les pages sont redessinées comme images dans le navigateur—pas d\'étape cloud et vos octets ne quittent pas l\'appareil.',
  tool_compress_pdf_faq_a4: 'Les PDF protégés par mot de passe échouent généralement ici. Retirez le mot de passe puis compressez.',
  tool_compress_pdf_faq_a5:
    'Moyen garde plus de détail (échelle 1.2, JPEG ~72 %). Faible est plus petit mais plus doux (échelle 1.0, JPEG ~55 %). Choisissez selon limites e-mail vs lisibilité.',
  tool_compress_pdf_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_compress_pdf_faq_q2: 'Pourquoi à peine plus petit ?',
  tool_compress_pdf_faq_q3: 'Est-ce un ré-encodage cloud ?',
  tool_compress_pdf_faq_q4: 'Et les PDF chiffrés ?',
  tool_compress_pdf_faq_q5: 'Quelle qualité choisir ?',
  tool_compress_pdf_how_body:
    'Choisissez un PDF, sélectionnez Moyen ou Faible, cliquez Compresser puis Télécharger. Chaque page est enregistrée en JPEG dans un nouveau PDF. Les stats montrent taille d\'origine, nouvelle et pourcentage. Les bibliothèques se chargent au premier usage.',
  tool_compress_pdf_how_item_1: "Sélectionnez l’entrée avec « Choisir un PDF »",
  tool_compress_pdf_how_item_2: "Réglez les options puis cliquez sur « Compresser »",
  tool_compress_pdf_how_item_3: "Vérifiez l’aperçu, le nombre de pages ou le statut",
  tool_compress_pdf_how_item_4: "Cliquez sur « Télécharger » pour enregistrer le résultat",
  tool_compress_pdf_how_title: 'Fonctionnement',
  tool_compress_pdf_pages_label: 'Pages',
  tool_compress_pdf_quality_label: 'Qualité',
  tool_compress_pdf_quality_low: 'Faible — fichier plus petit',
  tool_compress_pdf_quality_med: 'Moyen — équilibré',
  tool_compress_pdf_rules_body:
    'Presets JPEG raster, stats avant/après, confidentialité et échecs lors d\'une compression locale.',
  tool_compress_pdf_rules_item_1:
    'Moteur : pdf.js dessine chaque page sur canvas ; la bibliothèque PDF intègre des JPEG dans un nouveau PDF—sans envoyer votre fichier au serveur.',
  tool_compress_pdf_rules_item_2:
    'Presets : Moyen (échelle 1.2, JPEG ~72 %) vs Faible (échelle 1.0, JPEG ~55 %). Preset plus bas = plus petit mais plus mou.',
  tool_compress_pdf_rules_item_3:
    'Stats : octets d\'origine, compressés et pourcentage de changement. Gain < 5 % affiche un avis « à peine plus petit ».',
  tool_compress_pdf_rules_item_4:
    'Limites : PDF chiffré/corrompu échoue avec message lisible ; très gros fichiers (>~25 Mo) lents ; PDF texte seul peu efficace.',
  tool_compress_pdf_rules_title: 'Règles à connaître',
  tool_compress_pdf_sample: 'Charger un exemple',
  tool_compress_pdf_stats_tpl: '{from} → {to} · {pct} % économisés',
  tool_compress_pdf_status_done: 'Terminé — cliquez Télécharger pour enregistrer compressed.pdf.',
  tool_compress_pdf_status_working: 'Compression du PDF…',
  tool_compress_pdf_title: 'Réduire la taille du PDF',
  tool_compress_pdf_usecase_1: 'Bureau : réduire une numérisation avant la limite de pièce jointe.',
  tool_compress_pdf_usecase_2: 'Étudiants : alléger un PDF avec photos pour un formulaire.',
  tool_compress_pdf_usecase_3: 'Webmasters : alléger un PDF marketing à partager quand la qualité raster suffit.',
  tool_compress_pdf_usecases_title: 'Cas d\'usage',
  tool_compress_pdf_warn_large: 'Fichier > ~25 Mo—la compression peut être lente ou échouer dans certains navigateurs.',
  tool_compress_pdf_warn_little: 'À peine plus petit—PDF texte ou déjà compressé peu adapté au JPEG raster.',
  tool_compress_pdf_warn_pdflib: 'Échec du chargement de la bibliothèque PDF. Vérifiez le réseau et réessayez.',
  tool_compress_pdf_warn_pdfjs: 'Échec du chargement du moteur PDF. Vérifiez le réseau et réessayez.',
};
export default fr;
