/**
 * i18n shard for compare-two-text-files-online (French).
 * H1 is the search task “Comparer deux fichiers texte en ligne”; FR wording, not a locked English sentence map.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'Dans cet onglet, choisissez deux fichiers texte et voyez les ajouts et suppressions ligne par ligne. Les fichiers restent sur votre appareil et ne sont pas envoyés. Pas de grands champs de collage ici : pour coller seulement, allez sur « Vérifier les différences entre deux textes ».',
	tool_compare_two_text_files_online_clear: 'Effacer',
	tool_compare_two_text_files_online_compare: 'Comparer',
	tool_compare_two_text_files_online_desc:
		'Comparer deux fichiers texte en ligne : prenez deux .txt, lisez le diff dans le navigateur, rien n’est envoyé.',
	tool_compare_two_text_files_online_description:
		'Comparer deux fichiers texte en ligne dans le navigateur. Processus : choisissez le fichier d’origine et la version révisée, décodage UTF-8 (BOM retiré), refus des octets binaires, puis surbrillance des ajouts et suppressions par ligne. Les fichiers restent sur votre appareil et ne sont pas téléversés. Exemple : notes-a.txt face à notes-b.txt, seule la ligne du milieu change. Word, Excel et JSON ont d’autres pages ; ici, uniquement des fichiers texte. Comparer txt relève du même geste.',
	tool_compare_two_text_files_online_empty: 'Choisissez d’abord deux fichiers texte, ou chargez l’exemple.',
	tool_compare_two_text_files_online_err_binary:
		'Un fichier semble binaire (octets nuls). Cette page ne compare que du texte brut, par exemple .txt.',
	tool_compare_two_text_files_online_err_too_large:
		'Un fichier dépasse environ 1 Mo. Coupez un extrait pour que l’onglet reste réactif.',
	tool_compare_two_text_files_online_example:
		'Charger un exemple oppose notes-a.txt (alpha / deuxième ligne / troisième) à notes-b.txt dont le milieu dit « ligne modifiée ». Le mode ligne ne marque que celle-là. Le premier affichage montre déjà ce résultat.',
	tool_compare_two_text_files_online_example_title: 'Exemple',
	tool_compare_two_text_files_online_faq_a1:
		'Non. FileReader lit les octets dans cet onglet. jsdiff peut arriver via un CDN comme bibliothèque ; vos fichiers ne partent pas vers nos serveurs.',
	tool_compare_two_text_files_online_faq_a2:
		'Décodage UTF-8. Un BOM en tête est retiré pour que la première ligne ne soit pas marquée uniquement à cause de ce signe. D’autres encodages peuvent être illisibles : enregistrez d’abord en UTF-8.',
	tool_compare_two_text_files_online_faq_a3:
		'Un octet nul est traité comme binaire et refusé. Utilisez un outil hexadécimal ou d’archive. Word et Excel ont leurs propres pages de comparaison.',
	tool_compare_two_text_files_online_faq_a4:
		'Cette page vise .txt / .text. Comparer txt ou un diff de fichiers en ligne, c’est souvent le même besoin. Si « comparer deux fichiers » visait Word ou un tableur, prenez ces pages. Coller deux textes sans fichiers : « Vérifier les différences entre deux textes ».',
	tool_compare_two_text_files_online_faq_q1: 'Mes fichiers sont-ils envoyés ?',
	tool_compare_two_text_files_online_faq_q2: 'Quelles règles d’encodage et de BOM ?',
	tool_compare_two_text_files_online_faq_q3: 'Puis-je comparer du binaire, Word ou Excel ici ?',
	tool_compare_two_text_files_online_faq_q4: 'Est-ce la même chose que comparer txt ou comparer deux fichiers ?',
	tool_compare_two_text_files_online_how_body:
		'Prenez deux fichiers texte déjà sur le disque, puis lisez les lignes mises en couleur. Le premier écran n’a pas de grande zone de collage.',
	tool_compare_two_text_files_online_how_item_1: 'Choisissez le premier fichier texte (export ou version d’origine).',
	tool_compare_two_text_files_online_how_item_2: 'Choisissez le second fichier texte (version révisée).',
	tool_compare_two_text_files_online_how_item_3:
		'La comparaison se lance dès que les deux sont choisis ; Charger un exemple l’a déjà fait au premier affichage.',
	tool_compare_two_text_files_online_how_item_4: 'Le vert indique les ajouts, le rouge les suppressions. Effacer retire les deux fichiers de cet onglet.',
	tool_compare_two_text_files_online_how_title: 'Comment ça marche',
	tool_compare_two_text_files_online_label_a: 'Premier fichier texte',
	tool_compare_two_text_files_online_label_b: 'Second fichier texte',
	tool_compare_two_text_files_online_legend: 'Vert = ajouté · Rouge = supprimé',
	tool_compare_two_text_files_online_load_sample: 'Charger un exemple',
	tool_compare_two_text_files_online_need_lib: 'Le comparateur n’a pas pu se charger. Vérifiez le réseau puis actualisez.',
	tool_compare_two_text_files_online_no_diff: 'Aucune différence : les deux fichiers sont identiques en texte.',
	tool_compare_two_text_files_online_result_label: 'Écarts par ligne',
	tool_compare_two_text_files_online_rules_body:
		'Après décodage UTF-8, le diff est ligne par ligne. Encodage, BOM et binaire sont contrôlés avant la surbrillance.',
	tool_compare_two_text_files_online_rules_item_1:
		'Chaque fichier est lu avec FileReader / ArrayBuffer et décodé en UTF-8. Un BOM UTF-8 en tête est retiré pour ne pas inventer un changement de première ligne.',
	tool_compare_two_text_files_online_rules_item_2:
		'Un octet nul vaut binaire et est refusé. Ce n’est pas un visualiseur hexadécimal.',
	tool_compare_two_text_files_online_rules_item_3:
		'Le diff est en mode ligne (jsdiff diffLines). Un seul mot changé dans la ligne peut colorer toute la ligne.',
	tool_compare_two_text_files_online_rules_item_4:
		'Pas de zone de collage au premier écran. Pour coller deux textes sans fichiers, utilisez « Vérifier les différences entre deux textes ».',
	tool_compare_two_text_files_online_rules_title: 'Règles à anticiper',
	tool_compare_two_text_files_online_sample_a: 'alpha\ndeuxième ligne\ntroisième',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\nligne modifiée\ntroisième',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '{added} ajoutées, {removed} supprimées',
	tool_compare_two_text_files_online_title: 'Comparer deux fichiers texte en ligne',
	tool_compare_two_text_files_online_usecase_1:
		'Exports : confronter le log.txt d’hier à l’export d’aujourd’hui sans coller des dizaines de milliers de lignes.',
	tool_compare_two_text_files_online_usecase_2:
		'Sauvegardes de config : deux instantanés .env ou .txt sur le disque, ligne à ligne.',
	tool_compare_two_text_files_online_usecase_3:
		'Devoirs : deux .txt de rendu, pour voir quelles lignes ont bougé.',
	tool_compare_two_text_files_online_usecases_title: 'Cas concrets',
};

export default fr;
