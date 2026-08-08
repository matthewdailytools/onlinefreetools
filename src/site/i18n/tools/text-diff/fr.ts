/**
 * i18n tool shard (text-diff / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_text_diff_article:
    'Outil gratuit pour comparer deux textes côte à côte. Mode ligne pour configs et code ; mode mot pour rédaction et prompts ; mode caractère pour les coquilles. Tout reste dans votre navigateur — rien n’est envoyé.',
  tool_text_diff_clear: 'Effacer',
  tool_text_diff_compare: 'Comparer',
  tool_text_diff_description:
    'Comparez deux textes en ligne et voyez ce qui a changé. Processus : collez l’original et la version modifiée, choisissez ligne, mot ou caractère, ignorez éventuellement les espaces ou unifiez les fins de ligne Windows (CRLF→LF), puis surlignez ajouts et suppressions dans le navigateur. Exemple : passez de « bonjour monde » à « bonjour ami » — le mode mot montre un seul remplacement.',
  tool_text_diff_empty_hint: 'Collez du texte d’un côté ou des deux, puis comparez.',
  tool_text_diff_example:
    'Exemple (mode mot) : A = « Bonjour monde », B = « Bonjour ami » → un changement (monde → ami). Si seule la ligne du milieu change dans un bloc de trois, le mode ligne la marque.',
  tool_text_diff_example_title: 'Exemple',
  tool_text_diff_faq_a1:
    'Ligne pour le code et les configs. Mot pour les phrases, e-mails et prompts : seuls les mots modifiés sont surlignés.',
  tool_text_diff_faq_a2:
    'Votre texte collé n’est ni envoyé ni stocké chez nous — la comparaison se fait dans le navigateur. La page peut charger jsdiff (open source) via un CDN ; cela n’envoie pas votre texte à nos serveurs.',
  tool_text_diff_faq_a3:
    'Windows utilise souvent CRLF, macOS/Linux LF. Activez « Traiter CRLF et LF de la même façon » puis comparez.',
  tool_text_diff_faq_a4: 'Non. Texte brut uniquement.',
  tool_text_diff_faq_q1: 'Comparer par ligne ou par mot ?',
  tool_text_diff_faq_q2: 'Mon texte est-il envoyé sur un serveur ?',
  tool_text_diff_faq_q3: 'Pourquoi un simple saut de ligne met toute la ligne en rouge ?',
  tool_text_diff_faq_q4: 'Puis-je comparer des images ou des fichiers binaires ?',
  tool_text_diff_how_body:
    'Collez deux versions, choisissez la finesse (ligne, mot ou caractère), puis regardez les ajouts en vert et les suppressions en rouge. Votre texte collé n’est ni envoyé ni stocké chez nous. La page peut charger la bibliothèque open-source jsdiff via un CDN pour comparer dans le navigateur.',
  tool_text_diff_how_title: 'Comment ça marche',
  tool_text_diff_ignore_ws: 'Ignorer les espaces',
  tool_text_diff_label_a: 'Texte d’origine',
  tool_text_diff_label_b: 'Texte modifié',
  tool_text_diff_large_warn: 'Collage très long (>100k caractères). Ça peut ralentir — essayez un extrait plus court.',
  tool_text_diff_legend: 'Vert = ajouté · Rouge = supprimé',
  tool_text_diff_mode_chars: 'Caractère',
  tool_text_diff_mode_label: 'Comparer par',
  tool_text_diff_mode_lines: 'Ligne',
  tool_text_diff_mode_words: 'Mot',
  tool_text_diff_need_lib: 'Impossible de charger l’outil de comparaison. Vérifiez la connexion et rechargez.',
  tool_text_diff_no_diff: 'Aucune différence — les deux textes sont identiques.',
  tool_text_diff_normalize_eol: 'Traiter CRLF et LF de la même façon',
  tool_text_diff_placeholder_a: 'Collez le texte d’origine…',
  tool_text_diff_placeholder_b: 'Collez le texte modifié…',
  tool_text_diff_result_label: 'Différences',
  tool_text_diff_rules_body:
    'L’outil cherche une courte liste de modifications pour passer du texte A au texte B (diff classique / approche Myers via jsdiff). Mode ligne : configs et code. Mode mot : phrases et prompts. Mode caractère : petites coquilles, mais plus bruyant. Ignorer les espaces masque les seuls changements d’indentation. Traiter CRLF et LF pareil évite qu’une ligne entière rougisse pour un simple saut de ligne.',
  tool_text_diff_rules_intro:
    'L’outil cherche une courte liste de modifications pour passer du texte A au texte B (diff classique / approche Myers via jsdiff). Choisissez le mode selon la tâche :',
  tool_text_diff_rules_item_chars: 'Caractère — idéal pour les coquilles ; le plus précis, mais bruyant sur de longs changements.',
  tool_text_diff_rules_item_lines:
    'Ligne — idéal pour .env, YAML et code ; une ligne modifiée est surlignée en entier. Rapide à parcourir, mais un seul mot modifié rougit toute la ligne.',
  tool_text_diff_rules_item_words:
    'Mot — idéal pour phrases, e-mails et prompts ; surligne les mots. Plus clair en prose ; la ponctuation peut découper le résultat.',
  tool_text_diff_rules_options:
    'Ignorer les espaces masque les seuls changements d’indentation. Traiter CRLF et LF pareil évite qu’une ligne entière rougisse pour un simple saut de ligne (Windows vs Unix).',
  tool_text_diff_rules_title: 'Comment les différences sont calculées',
  tool_text_diff_sample_a: 'Bonjour monde\nligne deux\nligne trois',
  tool_text_diff_sample_b: 'Bonjour ami\nligne deux\nligne trois',
  tool_text_diff_summary: '{added} ajoutés, {removed} supprimés',
  tool_text_diff_swap: 'Inverser les côtés',
  tool_text_diff_usecase_1: 'Vérifier une config : comparez deux extraits .env ou YAML ligne par ligne.',
  tool_text_diff_usecase_2: 'Retoucher un prompt : mode mot pour voir les formulations ajoutées ou retirées.',
  tool_text_diff_usecase_3: 'Relire un texte ou une traduction : confirmez que seules les phrases voulues ont changé.',
  tool_text_diff_usecases_title: 'Cas concrets',
};
export default fr;
