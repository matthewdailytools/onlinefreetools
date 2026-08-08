/**
 * i18n tool shard (yaml-json / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_yaml_json_article:
    'Conversion YAML ↔ JSON bidirectionnelle : règles de typage explicites, politique multi-document, et notes honnêtes sur le traitement local. Pensé pour l’échange de configs, pas pour une seconde URL creuse.',
  tool_yaml_json_clear: 'Effacer',
  tool_yaml_json_convert: 'Convertir',
  tool_yaml_json_copy_done: 'Copié',
  tool_yaml_json_copy_json: 'Copier JSON',
  tool_yaml_json_copy_yaml: 'Copier YAML',
  tool_yaml_json_description:
    'Convertissez YAML en JSON ou JSON en YAML dans le navigateur. Étapes : choisissez le sens, collez la config, activez au besoin les types JSON sûrs, puis copiez ou téléchargez. Les multi-docs séparés par --- deviennent un tableau JSON. Exemple : transformer une petite carte de service en JSON indenté pour un client API — le collage reste local.',
  tool_yaml_json_dir_label: 'Sens de conversion',
  tool_yaml_json_download_json: 'Télécharger JSON',
  tool_yaml_json_download_yaml: 'Télécharger YAML',
  tool_yaml_json_empty: 'Collez d’abord du contenu.',
  tool_yaml_json_example:
    'YAML `nom: demo` + liste `éléments: [a, b]` → JSON `{"nom":"demo","éléments":["a","b"]}`. JSON `{"titre":"Bonjour","compte":2}` se dump en YAML indenté. Frontière : `flag: yes` nu devient true sous DEFAULT ; activez Types JSON sûrs pour garder la chaîne "yes".',
  tool_yaml_json_example_title: 'Exemple',
  tool_yaml_json_faq_a1:
    'La conversion reste dans l’onglet. Un CDN peut servir js-yaml : cette requête ne télécharge que du code — ce n’est pas un envoi de votre texte YAML ou JSON.',
  tool_yaml_json_faq_a2:
    'Ils sont lus avec loadAll. Un seul document → une valeur JSON ; deux ou plus → un tableau JSON. On ne conserve pas uniquement le premier.',
  tool_yaml_json_faq_a3:
    'Souvent oui sous le schéma DEFAULT de js-yaml : yes/no/on/off non cités peuvent devenir booléens. Cochez « Types JSON sûrs » pour les garder en chaînes sauf typage explicite.',
  tool_yaml_json_faq_a4:
    'Non. Les commentaires ne survivent pas au JSON. Les ancres s’étendent en valeurs répétées. Repasser du JSON en YAML ne restaure ni commentaires ni noms d’ancres.',
  tool_yaml_json_faq_a5:
    'Un YAML invalide lève un mark parseur avec ligne et colonne quand c’est disponible. Un JSON invalide est signalé par JSON.parse, sans mark style YAML.',
  tool_yaml_json_faq_q1: 'Mon collage quitte-t-il le navigateur ?',
  tool_yaml_json_faq_q2: 'Que deviennent plusieurs documents séparés par --- ?',
  tool_yaml_json_faq_q3: 'Un yes ou no nu devient-il un booléen ?',
  tool_yaml_json_faq_q4: 'Peut-on faire un aller-retour sans rien perdre ?',
  tool_yaml_json_faq_q5: 'D’où viennent les numéros de ligne d’erreur ?',
  tool_yaml_json_how_body:
    'js-yaml tourne dans cet onglet : basculez YAML → JSON ou l’inverse, collez, convertissez. Un flux multi-document découpé par --- devient un tableau JSON dès qu’il y a au moins deux documents ; un seul document reste une valeur JSON unique. Les erreurs YAML affichent ligne et colonne lorsque le parseur fournit un mark.',
  tool_yaml_json_how_title: 'En pratique',
  tool_yaml_json_indent_2: '2 espaces',
  tool_yaml_json_indent_4: '4 espaces',
  tool_yaml_json_indent_label: 'Indentation',
  tool_yaml_json_indent_minify: 'Minifier le JSON',
  tool_yaml_json_json_input_label: 'Entrée JSON',
  tool_yaml_json_json_output_label: 'Sortie JSON',
  tool_yaml_json_json_placeholder: '{\\n  "titre": "Bonjour",\\n  "compte": 2\\n}',
  tool_yaml_json_json_safe: 'Types JSON sûrs (garder yes/no nus en chaînes)',
  tool_yaml_json_large_warn:
    'Collage très volumineux (>200k caractères). La conversion peut ralentir — essayez un extrait plus court.',
  tool_yaml_json_need_lib: 'Impossible de charger js-yaml. Vérifiez la connexion et rechargez.',
  tool_yaml_json_rules_body:
    'À quoi s’attendre lors de la conversion : comment les valeurs sans guillemets sont typées, comment le YAML multidocument correspond au JSON, et où un aller-retour peut perdre commentaires ou mise en forme.',
  tool_yaml_json_rules_item_1:
    'Typage : avec le schéma DEFAULT, yes/no/on/off nus et certains scalaires date-like peuvent devenir booléens ou d’autres types. Le schéma JSON sûr garde les scalaires non cités en chaînes sauf typage explicite.',
  tool_yaml_json_rules_item_2:
    'Multi-doc : loadAll — un document → cette valeur JSON ; deux ou plus → un tableau JSON. On ne jette pas silencieusement tout ce qui suit le premier.',
  tool_yaml_json_rules_item_3:
    'Pertes en aller-retour : les commentaires disparaissent (JSON n’en a pas) ; ancres/alias s’étendent en valeurs dupliquées ; l’ordre des clés et le style peuvent changer après dump.',
  tool_yaml_json_rules_item_4:
    'Confidentialité : votre collage n’est pas envoyé. Charger js-yaml via un CDN ne télécharge que le code de la bibliothèque, pas le texte de config.',
  tool_yaml_json_rules_title: 'Règles à anticiper',
  tool_yaml_json_sample: 'Charger un exemple',
  tool_yaml_json_sample_json: '{\\n  "titre": "Bonjour",\\n  "compte": 2\\n}',
  tool_yaml_json_sample_yaml: 'nom: demo\\nactif: true\\néléments:\\n  - a\\n  - b',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_title: 'YAML vers JSON — et retour YAML (types, multi-doc)',
  tool_yaml_json_usecase_1:
    'DevOps : transformer un YAML Kubernetes multi-ressources (séparé par ---) en tableau JSON pour des scripts.',
  tool_yaml_json_usecase_2: 'Développement : passer une réponse API JSON en YAML lisible avant d’éditer la config à la main.',
  tool_yaml_json_usecase_3:
    'Pipelines data / IA : relier des paramètres YAML édités à la main à des outils qui n’acceptent que du JSON.',
  tool_yaml_json_usecases_title: 'Situations concrètes',
  tool_yaml_json_yaml_input_label: 'Entrée YAML',
  tool_yaml_json_yaml_output_label: 'Sortie YAML',
  tool_yaml_json_yaml_placeholder: 'nom: demo\\nactif: true\\néléments:\\n  - a\\n  - b',
};
export default fr;
