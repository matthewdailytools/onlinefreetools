/**
 * i18n tool shard (protect-pdf / fr). Rédaction indépendante pour recherches FR.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_protect_pdf_article:
    'Protégez un PDF par mot de passe dans le navigateur avant d’envoyer des pièces sensibles. Le fichier reste sur l’appareil, sans envoi au serveur.',
  tool_protect_pdf_choose_file: 'Choisir un PDF',
  tool_protect_pdf_clear: 'Effacer',
  tool_protect_pdf_confirm_label: 'Confirmer le mot de passe',
  tool_protect_pdf_desc: 'Ajoutez un mot de passe d’ouverture sur l’appareil — sans envoi au serveur.',
  tool_protect_pdf_description:
    'Protégez un PDF par mot de passe dans le navigateur avant partage — rien n’est envoyé au serveur. Étapes : choisissez un PDF, saisissez et confirmez le mot de passe (vide refusé), cliquez Protéger puis téléchargez protected.pdf. Exemple : un échantillon d’une page chiffré avec sample est prêt à télécharger. Chiffrement utilisateur PDF standard, pas niveau militaire ; pour rouvrir, il faut ce mot de passe (outil Déverrouiller PDF à venir — pas de crack ici). Fichiers ~25 Mo peuvent ralentir.',
  tool_protect_pdf_download: 'Télécharger',
  tool_protect_pdf_drop_hint: 'Ou déposez un PDF ici. Traitement dans cet onglet.',
  tool_protect_pdf_empty: 'Choisissez d’abord un PDF.',
  tool_protect_pdf_err_encrypted: 'Ce PDF semble déjà protégé. Retirez le mot de passe connu puis protégez à nouveau.',
  tool_protect_pdf_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_protect_pdf_err_password_empty: 'Saisissez un mot de passe — vide interdit.',
  tool_protect_pdf_err_password_mismatch: 'Les mots de passe ne correspondent pas. Resaisissez-les.',
  tool_protect_pdf_err_protect: 'Échec du chiffrement. Vérifiez fichier et mot de passe puis réessayez.',
  tool_protect_pdf_example:
    'L’exemple crée une page, la chiffre avec sample, active Télécharger protected.pdf et affiche le mot de passe.',
  tool_protect_pdf_example_title: 'Protéger un PDF par mot de passe',
  tool_protect_pdf_faq_a1:
    'Non. la bibliothèque PDF s’exécute dans votre onglet (scripts éventuellement depuis un CDN). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_protect_pdf_faq_a2:
    'Chiffrement PDF courant : mot de passe requis à l’ouverture. Pas niveau militaire — choisissez un mot de passe fort mémorable.',
  tool_protect_pdf_faq_a3:
    'Il faut le même mot de passe qu’ici. Quand Déverrouiller PDF sera dispo, utilisez-le — nous ne cassons pas les mots de passe.',
  tool_protect_pdf_faq_a4: 'Les PDF déjà chiffrés échouent souvent au chargement. Retirez l’ancien mot de passe avec un outil fiable puis reprotégez.',
  tool_protect_pdf_faq_q1: 'Mon PDF est-il envoyé ?',
  tool_protect_pdf_faq_q2: 'Quelle est la force du chiffrement ?',
  tool_protect_pdf_faq_q3: 'Comment l’ouvrir plus tard ?',
  tool_protect_pdf_faq_q4: 'Et s’il était déjà protégé ?',
  tool_protect_pdf_how_body: 'Choisissez un PDF, tapez deux fois le même mot de passe, Protéger puis Télécharger. Chiffrement local après chargement de la bibliothèque PDF.',
  tool_protect_pdf_how_item_1: "Sélectionnez l’entrée avec « Choisir un PDF »",
  tool_protect_pdf_how_item_2: "Réglez les options puis cliquez sur « Protéger »",
  tool_protect_pdf_how_item_3: "Vérifiez l’aperçu, le nombre de pages ou le statut",
  tool_protect_pdf_how_item_4: "Cliquez sur « Télécharger » pour enregistrer le résultat",
  tool_protect_pdf_how_title: 'Fonctionnement',
  tool_protect_pdf_pages_label: 'Pages',
  tool_protect_pdf_password_label: 'Mot de passe',
  tool_protect_pdf_protect: 'Protéger',
  tool_protect_pdf_rules_body: 'Règles de mot de passe, portée du chiffrement, confidentialité et échecs.',
  tool_protect_pdf_rules_item_1: 'Mot de passe obligatoire ; confirmation identique. Vide refusé avant chiffrement.',
  tool_protect_pdf_rules_item_2: 'la bibliothèque PDF met utilisateur et propriétaire au même mot de passe — requis pour ouvrir.',
  tool_protect_pdf_rules_item_3: 'Sortie : PDF chiffré (protected.pdf). Entrées déjà protégées : erreur claire.',
  tool_protect_pdf_rules_item_4: 'Confidentialité : octets dans l’onglet ; pas militaire ; avertissement ~25 Mo ; gros fichiers peuvent échouer.',
  tool_protect_pdf_rules_title: 'Règles attendues',
  tool_protect_pdf_sample: 'Charger l’exemple',
  tool_protect_pdf_stats_tpl: '{pages} p. · chiffré · {bytes}',
  tool_protect_pdf_status_done: 'Terminé — cliquez Télécharger pour enregistrer protected.pdf.',
  tool_protect_pdf_status_sample_pwd: 'Exemple prêt — mot de passe : « {pwd} ». Téléchargez protected.pdf pour essayer.',
  tool_protect_pdf_status_working: 'Chiffrement du PDF…',
  tool_protect_pdf_title: 'Protéger un PDF par mot de passe',
  tool_protect_pdf_usecase_1: 'Bureau : mot de passe d’ouverture avant d’envoyer un contrat par e-mail.',
  tool_protect_pdf_usecase_2: 'Ops : verrouiller un rapport ponctuel avant le portail client.',
  tool_protect_pdf_usecase_3: 'Étudiants : protéger un scan avec mot de passe connu du professeur seulement.',
  tool_protect_pdf_usecases_title: 'Cas d’usage',
  tool_protect_pdf_warn_large: 'Fichier > ~25 Mo — chiffrement peut être lent ou échouer.',
  tool_protect_pdf_warn_pdflib: 'Échec du chargement de la bibliothèque PDF. Vérifiez le réseau.',
};
export default fr;
