/**
 * i18n tool shard (password-generator / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_password_generator_article:
    'Créez des mots de passe aléatoires à partir des jeux de caractères choisis via crypto.getRandomValues — pour démos rapides, comptes jetables ou tester longueur/charset. Ce n\'est ni un gestionnaire de mots de passe ni une garantie de robustesse.',
  tool_password_generator_charset_label: 'Jeux de caractères',
  tool_password_generator_clear: 'Effacer',
  tool_password_generator_copy: 'Copier',
  tool_password_generator_copy_done: 'Copié',
  tool_password_generator_count_label: 'Quantité (1–100)',
  tool_password_generator_desc:
    'Mots de passe aléatoires avec longueur et charset configurables — générés en local avec crypto.getRandomValues.',
  tool_password_generator_description:
    'Générez des mots de passe aléatoires dans votre navigateur. Étapes : réglez la longueur (8–128), cochez majuscules/minuscules/chiffres/symboles, optionnel exclure ambigus, cliquez Générer, copiez. Exemple : 16 caractères mélangeant casse, chiffres et symboles. crypto.getRandomValues uniquement — rien n\'est stocké ni envoyé.',
  tool_password_generator_digits: 'Chiffres',
  tool_password_generator_disclaimer:
    'Générateur de démonstration pour la commodité — pas un coffre-fort. Pour la banque ou comptes principaux, utilisez un gestionnaire dédié et son générateur. Les mots de passe sont créés en local et ne sont pas enregistrés sur nos serveurs.',
  tool_password_generator_empty_charset: 'Activez au moins un jeu de caractères (après exclusions).',
  tool_password_generator_example:
    'Longueur 16 avec tous les jeux activés pourrait ressembler à `Xk9#mP2$vL4@nQ8!` — majuscules, minuscules, chiffres et symboles. Chaque clic produit une nouvelle chaîne ; Charger l\'exemple = longueur 16 et tout activé.',
  tool_password_generator_example_title: 'Exemple',
  tool_password_generator_exclude_ambiguous: 'Exclure ambigus (0 O I l 1)',
  tool_password_generator_faq_a1:
    'Non. La génération se fait entièrement dans le navigateur. Nous n\'enregistrons, ne stockons ni ne transmettons les mots de passe créés ici.',
  tool_password_generator_faq_a2:
    'L\'aléatoire vient de crypto.getRandomValues (CSPRNG), pas Math.random. Des mots de passe plus longs avec plus de classes résistent mieux, mais aucun onglet ne promet l\'« incassable » — suivez la politique de votre org et utilisez un gestionnaire pour les secrets de prod.',
  tool_password_generator_faq_a3:
    'Non. Cette page ne crée que de nouvelles chaînes aléatoires. Elle ne peut pas auditer, cracker ni récupérer des mots de passe existants.',
  tool_password_generator_faq_a4:
    'Retire les caractères visuellement similaires (0/O, 1/l/I) pour faciliter lecture à voix haute ou saisie — au prix d\'un charset légèrement plus petit.',
  tool_password_generator_faq_a5:
    'Jusqu\'à 100 mots de passe par clic, un par ligne. Relancez Générer pour un autre lot.',
  tool_password_generator_faq_q1: 'Les mots de passe sont-ils stockés ou envoyés au serveur ?',
  tool_password_generator_faq_q2: 'Quelle est la robustesse de ces mots de passe ?',
  tool_password_generator_faq_q3: 'Cet outil peut-il cracker mon mot de passe actuel ?',
  tool_password_generator_faq_q4: 'Que fait « exclure ambigus » ?',
  tool_password_generator_faq_q5: 'Combien de mots de passe puis-je générer d\'un coup ?',
  tool_password_generator_generate: 'Générer',
  tool_password_generator_how_body:
    'Réglez la longueur, choisissez les classes, excluez éventuellement les glyphes ambigus, définissez la quantité puis Générer. Chaque caractère est tiré avec crypto.getRandomValues du pool combiné. Copiez la liste — rien ne persiste en quittant la page.',
  tool_password_generator_how_title: 'Fonctionnement',
  tool_password_generator_length_label: 'Longueur',
  tool_password_generator_lower: 'Minuscules',
  tool_password_generator_output_label: 'Mots de passe',
  tool_password_generator_rules_body:
    'Règles de charset, source d\'aléatoire et limites honnêtes — à lire avant d\'utiliser la sortie sur un vrai compte.',
  tool_password_generator_rules_item_1:
    'Pools : A–Z, a–z, 0–9 et symboles par défaut. Au moins un pool doit rester après toggles et exclusion ambiguë.',
  tool_password_generator_rules_item_2:
    'L\'index aléatoire utilise des octets crypto.getRandomValues — jamais Math.random.',
  tool_password_generator_rules_item_3:
    'Pas de composition NIST certifiée (pas de règle forcée « un de chaque classe »). Activez manuellement les jeux nécessaires.',
  tool_password_generator_rules_item_4:
    'Confidentialité : génération locale uniquement ; effacez la sortie sur machines partagées.',
  tool_password_generator_rules_title: 'Règles à connaître',
  tool_password_generator_sample: 'Charger l\'exemple',
  tool_password_generator_symbols: 'Symboles',
  tool_password_generator_title: 'Générateur de mots de passe aléatoires — créer des mots de passe localement',
  tool_password_generator_upper: 'Majuscules',
  tool_password_generator_usecase_1: 'Créer un identifiant à usage unique pour un login staging que vous rotierez bientôt.',
  tool_password_generator_usecase_2: 'Prototyper des formulaires d\'inscription qui ont besoin de mots de passe forts d\'exemple dans des scripts QA.',
  tool_password_generator_usecase_3: 'Comparer l\'impact de longueur et symboles sur la lisibilité avant de mettre à jour la politique d\'équipe.',
  tool_password_generator_usecases_title: 'Cas d\'usage adaptés',
};
export default fr;
