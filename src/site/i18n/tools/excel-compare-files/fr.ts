/**
 * i18n（excel-compare-files / fr）。
 * H1: Comparer des fichiers Excel（pas d’« online » dans le titre）。
 * Première feuille par défaut ; cellules vides = chaîne vide.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_excel_compare_files_article:
		'Choisissez deux tableurs et comparez la feuille courante cellule par cellule. Les cellules vides comptent comme une chaîne vide. Les fichiers restent sur l’appareil et ne sont pas envoyés au serveur.',
	tool_excel_compare_files_clear: 'Effacer',
	tool_excel_compare_files_col_addr: 'Cellule',
	tool_excel_compare_files_col_left: 'Premier fichier',
	tool_excel_compare_files_col_right: 'Second fichier',
	tool_excel_compare_files_compare: 'Comparer',
	tool_excel_compare_files_desc:
		'Comparer des fichiers Excel : deux tableurs, feuille courante cellule par cellule — restent sur l’appareil, sans envoi au serveur.',
	tool_excel_compare_files_description:
		'Comparer des fichiers Excel dans le navigateur. Processus : choisissez deux xlsx ou csv, prenez la feuille courante (la première par défaut), puis listez les cellules dont la valeur diffère. Les fichiers restent sur l’appareil et ne sont pas envoyés au serveur. Exemple : deux tableaux de 3 lignes où B3 passe de 2 à 9. Un décalage de colonnes se compare par adresse, pas par nom d’en-tête.',
	tool_excel_compare_files_empty: 'Choisissez d’abord deux fichiers tableur, ou chargez l’exemple.',
	tool_excel_compare_files_err_read:
		'Impossible de lire le tableur. Essayez xlsx ou csv, et déverrouillez d’abord un classeur protégé.',
	tool_excel_compare_files_example:
		'Charger l’exemple compare deux tableaux CSV. Les en-têtes Name/Qty coïncident ; la quantité Gadget vaut 2 contre 9, donc B3 est listée. Dès l’ouverture, cette cellule s’affiche.',
	tool_excel_compare_files_example_title: 'Exemple',
	tool_excel_compare_files_faq_a1:
		'Non. Les octets sont lus dans cet onglet avec SheetJS. La bibliothèque peut arriver via un CDN ; vos fichiers ne sont pas envoyés à nos serveurs.',
	tool_excel_compare_files_faq_a2:
		'Oui : la première feuille est sélectionnée par défaut. Utilisez les listes si vous voulez un autre onglet du même fichier. Les autres feuilles ne sont comparées que lorsqu’on les choisit.',
	tool_excel_compare_files_faq_a3:
		"Oui. Le CSV est lu comme une seule feuille : vous pouvez comparer deux CSV ou un export CSV avec une feuille Excel selon l’adresse des cellules.",
	tool_excel_compare_files_faq_a4:
		'Cellules absentes et vides sont une chaîne vide. Une colonne décalée aligne encore A1 avec A1, pas « la colonne Name » par en-tête, pour éviter les appariements silencieux si les titres bougent.',
	tool_excel_compare_files_faq_q5: "Compare-t-il les formules et la mise en forme ou seulement les valeurs affichées ?",
	tool_excel_compare_files_faq_a5: "Il compare le texte affiché lu dans chaque cellule. Formules, styles, commentaires, largeurs de colonne et structure du classeur ne sont pas comparés séparément ; une formule modifiée avec la même valeur en cache peut sembler identique.",
	tool_excel_compare_files_faq_q1: 'Mes fichiers Excel sont-ils envoyés ?',
	tool_excel_compare_files_faq_q2: 'Compare-t-on seulement la première feuille ?',
	tool_excel_compare_files_faq_q3: 'Puis-je comparer deux CSV ici ?',
	tool_excel_compare_files_faq_q4: 'Comment sont traitées les cellules vides et les colonnes décalées ?',
	tool_excel_compare_files_how_body:
		'Choisissez deux tableaux et voyez quelles adresses de cellule diffèrent sur les feuilles courantes.',
	tool_excel_compare_files_how_item_1: 'Choisir le premier tableur (xlsx, xls ou csv).',
	tool_excel_compare_files_how_item_2: 'Choisir le second tableur.',
	tool_excel_compare_files_how_item_3: 'Laisser la première feuille, sauf si un autre onglet est nécessaire.',
	tool_excel_compare_files_how_item_4: "Cliquez sur Comparer pour lister les cellules dont le texte affiché diffère entre les deux feuilles choisies.",
	tool_excel_compare_files_how_title: 'Mode d’emploi',
	tool_excel_compare_files_label_a: 'Premier tableur',
	tool_excel_compare_files_label_b: 'Second tableur',
	tool_excel_compare_files_load_sample: 'Charger l’exemple',
	tool_excel_compare_files_need_lib: 'SheetJS n’a pas chargé. Vérifiez le réseau puis actualisez.',
	tool_excel_compare_files_no_diff: 'Aucune différence de cellule sur les feuilles courantes.',
	tool_excel_compare_files_result_label: 'Différences de cellules',
	tool_excel_compare_files_rules_body: 'Les valeurs se comparent par adresse de grille, uniquement sur la feuille choisie.',
	tool_excel_compare_files_rules_item_1: 'SheetJS lit le classeur. La feuille par défaut est le premier nom du fichier.',
	tool_excel_compare_files_rules_item_2:
		'Chaque cellule est comparée comme texte après conversion SheetJS. Vides et absentes valent "".',
	tool_excel_compare_files_rules_item_3:
		'Une colonne insérée d’un côté s’aligne encore sur A1/B1, pas sur les libellés d’en-tête.',
	tool_excel_compare_files_rules_item_4:
		'Les autres feuilles du classeur sont ignorées jusqu’à ce que vous les choisissiez. Pas de balayage par défaut de tout le classeur.',
	tool_excel_compare_files_rules_title: 'Règles à connaître',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: 'Feuille du premier fichier',
	tool_excel_compare_files_sheet_b: 'Feuille du second fichier',
	tool_excel_compare_files_summary: '{n} cellules diffèrent',
	tool_excel_compare_files_title: 'Comparer des fichiers Excel',
	tool_excel_compare_files_usecase_1: 'Devis : deux listes de prix exportées où quelques cellules ont bougé.',
	tool_excel_compare_files_usecase_2: 'Présence ou stock en CSV, une semaine contre l’autre.',
	tool_excel_compare_files_usecase_3: 'Tableaux de devoirs enregistrés en xlsx par deux élèves.',
	tool_excel_compare_files_usecases_title: 'Quand ça convient',
};

export default fr;
