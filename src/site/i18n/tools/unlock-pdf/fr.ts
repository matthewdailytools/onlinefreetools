/**
 * i18n tool shard (unlock-pdf / fr). Local rewrite; known password, not cracking.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_unlock_pdf_article:
    'Retirez le mot de passe d’ouverture d’un PDF lorsque vous le connaissez déjà—dans le navigateur, sans crackage. Le fichier reste sur l’appareil.',
  tool_unlock_pdf_choose_file: 'Choisir un PDF chiffré',
  tool_unlock_pdf_clear: 'Effacer',
  tool_unlock_pdf_desc:
    'Retirez un mot de passe d’ouverture que vous connaissez—sur l’appareil, sans envoi au serveur.',
  tool_unlock_pdf_description:
    'Déverrouillez un PDF protégé dans le navigateur si vous connaissez le mot de passe d’ouverture—sans envoi au serveur. Étapes : choisissez un PDF chiffré, saisissez le mot de passe (vide refusé si requis), cliquez Déverrouiller puis téléchargez unlocked.pdf. Exemple : une page chiffrée avec le mot de passe sample, rempli automatiquement et déverrouillée. Ce n’est pas du crackage, brute force ni récupération de mots de passe oubliés. Au-delà de ~25 Mo, cela peut ralentir.',
  tool_unlock_pdf_download: 'Télécharger',
  tool_unlock_pdf_drop_hint: 'Ou déposez un PDF chiffré ici. Traitement dans cet onglet.',
  tool_unlock_pdf_empty: 'Choisissez d’abord un PDF chiffré.',
  tool_unlock_pdf_encrypted_label: 'Protégé par mot de passe',
  tool_unlock_pdf_err_load: 'Impossible de lire le PDF (endommagé ou non pris en charge). Essayez un autre fichier.',
  tool_unlock_pdf_err_not_encrypted:
    'Ce PDF ne semble pas protégé par mot de passe d’ouverture. Utilisez Fusionner PDF ou d’autres outils.',
  tool_unlock_pdf_err_password_empty: 'Saisissez le mot de passe d’ouverture—vide refusé si le fichier l’exige.',
  tool_unlock_pdf_err_password_wrong:
    'Mot de passe incorrect. Resaisissez celui défini lors de la protection.',
  tool_unlock_pdf_err_unlock: 'Échec du déverrouillage. Vérifiez le fichier et le mot de passe puis réessayez.',
  tool_unlock_pdf_example:
    'L’exemple crée un PDF d’une page chiffré avec le mot de passe sample, remplit le champ, déverrouille et active Télécharger unlocked.pdf.',
  tool_unlock_pdf_example_title: 'Déverrouiller mon PDF',
  tool_unlock_pdf_faq_a1:
    'Non. Retire la protection uniquement si vous fournissez le bon mot de passe. Pas de crackage, brute force ni récupération de mots inconnus.',
  tool_unlock_pdf_faq_a2:
    'Non. la bibliothèque PDF s’exécute dans votre onglet (scripts éventuellement depuis un CDN). Votre PDF n’est pas envoyé à nos serveurs.',
  tool_unlock_pdf_faq_a3:
    'Un message clair indique un mauvais mot de passe. Utilisez celui de Protéger un PDF ou d’une autre app—nous ne le devinons pas.',
  tool_unlock_pdf_faq_a4:
    'Protéger un PDF ajoute un mot de passe ; Fusionner PDF après déverrouillage ici. Déverrouiller ne sert que si le fichier demande déjà un mot de passe à l’ouverture.',
  tool_unlock_pdf_faq_q1: 'Est-ce du crackage ou récupération de mots oubliés ?',
  tool_unlock_pdf_faq_q2: 'Mon PDF est-il envoyé ?',
  tool_unlock_pdf_faq_q3: 'Et si le mot de passe est incorrect ?',
  tool_unlock_pdf_faq_q4: 'Lien avec Protéger un PDF ?',
  tool_unlock_pdf_how_body:
    'Choisissez un PDF protégé, saisissez le mot de passe connu, cliquez Déverrouiller puis Télécharger. Déchiffrement local après chargement de la bibliothèque PDF. Mot de passe vide refusé si requis.',
  tool_unlock_pdf_how_title: 'Fonctionnement',
  tool_unlock_pdf_pages_label: 'Pages',
  tool_unlock_pdf_password_label: 'Mot de passe d’ouverture',
  tool_unlock_pdf_rules_body: 'Règles de mot de passe, périmètre, confidentialité et échecs en el navegador.',
  tool_unlock_pdf_rules_item_1:
    'Périmètre : vous devez connaître le mot de passe. Pas de crackage, brute force ni récupération inconnue.',
  tool_unlock_pdf_rules_item_2: 'Entrée : PDF chiffré uniquement. Non protégé refusé avec message clair.',
  tool_unlock_pdf_rules_item_3: 'Sortie : un PDF non chiffré (unlocked.pdf). Mauvais mot de passe = erreur explicite.',
  tool_unlock_pdf_rules_item_4:
    'Confidentialité : octets dans l’onglet ; sans envoi au serveur ; avertissement ~25 Mo ; gros fichiers peuvent échouer.',
  tool_unlock_pdf_rules_title: 'Règles attendues',
  tool_unlock_pdf_sample: 'Charger un exemple',
  tool_unlock_pdf_stats_tpl: '{pages} p. · déverrouillé · {bytes}',
  tool_unlock_pdf_status_done: 'Terminé — cliquez Télécharger pour enregistrer unlocked.pdf.',
  tool_unlock_pdf_status_sample_pwd: 'Exemple prêt — mot de passe « {pwd} ». Téléchargez unlocked.pdf pour essayer.',
  tool_unlock_pdf_status_working: 'Déverrouillage du PDF…',
  tool_unlock_pdf_title: 'Déverrouiller mon PDF',
  tool_unlock_pdf_unlock: 'Déverrouiller',
  tool_unlock_pdf_usecase_1: 'Bureau : retirez votre mot de passe pour fusionner ou imprimer dans une autre app.',
  tool_unlock_pdf_usecase_2: 'Ops : déverrouillez un export chiffré avant envoi sur un portail.',
  tool_unlock_pdf_usecase_3: 'Étudiants : retirez la protection d’un scan après correction, avec le mot de passe défini.',
  tool_unlock_pdf_usecases_title: 'Bonnes situations',
  tool_unlock_pdf_warn_large: 'Fichier supérieur à ~25 Mo — peut ralentir ou échouer selon le navigateur.',
  tool_unlock_pdf_warn_pdflib: 'Échec du chargement de la bibliothèque PDF. Vérifiez le réseau et réessayez.',
};
export default fr;
