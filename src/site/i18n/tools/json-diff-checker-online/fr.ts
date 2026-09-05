/**
 * i18n（json-diff-checker-online / fr）。
 * H1: Vérificateur de diff JSON en ligne.
 * Ordre des clés ignoré par défaut ; pas de YAML/XML.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'Collez deux valeurs JSON et listez ajouts, suppressions et changements par chemin. L’ordre des clés est ignoré par défaut. Le collage reste sur l’appareil et n’est pas envoyé. YAML et XML ne sont pas analysés ici.',
	tool_json_diff_checker_online_array_as_set: "Ignorer l’ordre du tableau (doublons conservés)",
	tool_json_diff_checker_online_clear: 'Effacer',
	tool_json_diff_checker_online_compare: 'Comparer',
	tool_json_diff_checker_online_desc:
		'Vérificateur de diff JSON en ligne : comparer deux JSON par chemin, ignorer l’ordre des clés par défaut — le collage reste sur l’appareil.',
	tool_json_diff_checker_online_description:
		'Vérificateur de diff JSON en ligne, dans le navigateur. Processus : coller deux JSON, les analyser, ignorer l’ordre des clés d’objet (activé par défaut), puis lister ajouts, suppressions et changements par chemin. Le collage reste sur l’appareil et n’est pas envoyé au serveur. Exemple : {"b":1,"a":2} et {"a":2,"b":1} concordent ; changer price signale /price. Ce n’est pas un vérificateur YAML ou XML.',
	tool_json_diff_checker_online_empty: 'Collez du JSON des deux côtés, ou chargez l’exemple.',
	tool_json_diff_checker_online_err_bad_a: 'La gauche n’est pas du JSON valide.',
	tool_json_diff_checker_online_err_bad_b: 'La droite n’est pas du JSON valide.',
	tool_json_diff_checker_online_example:
		'L’exemple de gauche écrit sku puis price ; à droite, price passe devant et 9.5 devient 10. Avec l’ordre des clés ignoré, seul /price est signalé. Dès l’ouverture, ce chemin s’affiche.',
	tool_json_diff_checker_online_example_title: 'Exemple',
	tool_json_diff_checker_online_faq_a1:
		'Non. Le texte est analysé dans cet onglet avec JSON.parse. Rien n’est envoyé à nos serveurs.',
	tool_json_diff_checker_online_faq_a2:
		'Par défaut, {"a":1,"b":2} et {"b":2,"a":1} sont le même objet. Désactivez « Ignorer l’ordre des clés » si l’ordre écrit compte.',
	tool_json_diff_checker_online_faq_a3:
		"Par défaut, les tableaux sont comparés par indice. Si l’ordre est ignoré, les éléments normalisés sont triés, les doublons comptent toujours et les indices suivent ce tri ; les objets ne sont pas associés par leur champ id.",
	tool_json_diff_checker_online_faq_a4:
		"Seul un JSON valide est analysé. La syntaxe YAML ou XML n’est pas acceptée ; convertissez d’abord YAML en JSON ou utilisez un comparateur adapté.",
	tool_json_diff_checker_online_faq_q1: 'Mon JSON est-il envoyé ?',
	tool_json_diff_checker_online_faq_q2: 'L’ordre des clés compte-t-il comme une différence ?',
	tool_json_diff_checker_online_faq_q3: 'Comment les tableaux sont-ils comparés ?',
	tool_json_diff_checker_online_faq_q4: 'Est-ce le même JSON Diff Checker, ou un diff YAML/XML ?',
	tool_json_diff_checker_online_how_body:
		'Collez deux JSON et lisez les changements par chemin. L’ordre des clés est ignoré sauf si vous le désactivez.',
	tool_json_diff_checker_online_how_item_1: 'Coller le JSON d’origine à gauche.',
	tool_json_diff_checker_online_how_item_2: 'Coller le JSON révisé à droite.',
	tool_json_diff_checker_online_how_item_3: 'Laisser Ignorer l’ordre des clés actif, sauf si l’ordre écrit vous importe.',
	tool_json_diff_checker_online_how_item_4: "Cliquez sur Comparer pour lister les chemins ajoutés, supprimés et modifiés avec les options actuelles.",
	tool_json_diff_checker_online_how_title: 'Mode d’emploi',
	tool_json_diff_checker_online_ignore_keys: 'Ignorer l’ordre des clés d’objet',
	tool_json_diff_checker_online_label_a: 'JSON d’origine',
	tool_json_diff_checker_online_label_b: 'JSON révisé',
	tool_json_diff_checker_online_load_sample: 'Charger l’exemple',
	tool_json_diff_checker_online_no_diff: 'Aucune différence sémantique avec les options actuelles.',
	tool_json_diff_checker_online_op_added: 'ajouté',
	tool_json_diff_checker_online_op_changed: 'modifié',
	tool_json_diff_checker_online_op_removed: 'supprimé',
	tool_json_diff_checker_online_result_label: 'Différences par chemin',
	tool_json_diff_checker_online_rules_body:
		'Après JSON.parse, on peut trier les clés pour que l’ordre d’écriture ne simule pas un changement.',
	tool_json_diff_checker_online_rules_item_1:
		'Le JSON invalide est signalé par côté. Les clés en double suivent JSON.parse (la dernière gagne si le moteur l’accepte).',
	tool_json_diff_checker_online_rules_item_2:
		'Ignorer l’ordre des clés (activé par défaut) trie les clés d’objet avant de parcourir les chemins.',
	tool_json_diff_checker_online_rules_item_3:
		"Ignorer l’ordre trie les éléments normalisés tout en conservant les doublons ; les indices indiquent alors l’ordre comparé, pas la position d’origine.",
	tool_json_diff_checker_online_rules_item_4:
		'YAML et XML ne sont pas analysés. Convertissez d’abord le YAML sur la page YAML ↔ JSON liée si besoin.',
	tool_json_diff_checker_online_rules_title: 'Règles à connaître',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '{added} ajoutés, {removed} supprimés, {changed} modifiés',
	tool_json_diff_checker_online_title: 'Vérificateur de diff JSON en ligne',
	tool_json_diff_checker_online_usecase_1:
		'Échantillons d’API : deux corps de réponse où le pretty-print mélange l’ordre des clés.',
	tool_json_diff_checker_online_usecase_2: 'Instantanés de config : quels chemins ont vraiment changé entre déploiements.',
	tool_json_diff_checker_online_usecase_3: 'JSON de modèle : comparer la sortie structurée avant de l’envoyer plus loin.',
	tool_json_diff_checker_online_usecases_title: 'Quand ça convient',
};

export default fr;
