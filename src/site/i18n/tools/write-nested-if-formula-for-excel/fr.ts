/**
 * i18n 工具分片（write-nested-if-formula-for-excel / fr）。
 * 有序条件 → 嵌套 SI/IF 公式；浏览器试算；复制粘贴到 Excel。
 * 法文检索主词：formule SI imbriquée；公式输出仍为英文函数名与逗号。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Générateur de formule SI imbriquée pour Excel — conditions ordonnées à copier",
	tool_write_nested_if_formula_for_excel_description: "Créez une formule SI imbriquée (nested IF) pour Excel à partir de tests égal, contient ou vide, dans l’ordre. Exemple : West → A, East → B, sinon Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")). Essayez le résultat dans le navigateur, puis copiez. Noms de fonctions anglais et virgules.",
	tool_write_nested_if_formula_for_excel_article: "Ajoutez des conditions ordonnées, un résultat par ligne et un sinon final, prévisualisez une valeur d’essai, puis copiez la formule SI imbriquée complète.",
	tool_write_nested_if_formula_for_excel_desc: "Conditions ordonnées → formule SI imbriquée, essai dans le navigateur et copie.",

	tool_write_nested_if_formula_for_excel_hint: "Les conditions sont testées de haut en bas. Le premier match gagne. Contient émet ISNUMBER(SEARCH(...)). Formules en anglais avec virgules.",
	tool_write_nested_if_formula_for_excel_cell_label: "Cellule cible",
	tool_write_nested_if_formula_for_excel_cell_ph: "ex. A1",
	tool_write_nested_if_formula_for_excel_trial_label: "Valeur d’essai",
	tool_write_nested_if_formula_for_excel_trial_ph: "ex. West",
	tool_write_nested_if_formula_for_excel_else_label: "Sinon (faux final)",
	tool_write_nested_if_formula_for_excel_else_ph: "ex. Other",
	tool_write_nested_if_formula_for_excel_col_op: "Test",
	tool_write_nested_if_formula_for_excel_col_val: "Valeur / texte",
	tool_write_nested_if_formula_for_excel_col_then: "Alors résultat",
	tool_write_nested_if_formula_for_excel_op_eq: "égal",
	tool_write_nested_if_formula_for_excel_op_contains: "contient",
	tool_write_nested_if_formula_for_excel_op_blank: "est vide",
	tool_write_nested_if_formula_for_excel_add: "Ajouter une condition",
	tool_write_nested_if_formula_for_excel_write: "Générer la formule",
	tool_write_nested_if_formula_for_excel_sample: "Charger l’exemple",
	tool_write_nested_if_formula_for_excel_clear: "Effacer",
	tool_write_nested_if_formula_for_excel_copy: "Copier la formule",
	tool_write_nested_if_formula_for_excel_copied: "Copié.",
	tool_write_nested_if_formula_for_excel_formula_label: "Formule SI imbriquée",
	tool_write_nested_if_formula_for_excel_trial_result_label: "Résultat d’essai",
	tool_write_nested_if_formula_for_excel_empty: "Ajoutez au moins une condition (ou chargez l’exemple), puis générez la formule.",
	tool_write_nested_if_formula_for_excel_copy_fail: "Copie impossible. Sélectionnez la formule et copiez-la manuellement.",

	tool_write_nested_if_formula_for_excel_how_title: "Comment écrire une formule SI imbriquée",
	tool_write_nested_if_formula_for_excel_how_body: "Indiquez la cellule cible et les conditions ordonnées. Générer la formule affiche le SI imbriqué et évalue votre valeur d’essai. Copier colle la syntaxe Excel anglaise avec virgules.",
	tool_write_nested_if_formula_for_excel_how_item_1: "Réglez la cellule cible et une valeur d’essai optionnelle.",
	tool_write_nested_if_formula_for_excel_how_item_2: "Ajoutez des lignes égal, contient ou vide dans l’ordre où Excel doit les tester.",
	tool_write_nested_if_formula_for_excel_how_item_3: "Renseignez chaque Alors résultat et la valeur Sinon finale.",
	tool_write_nested_if_formula_for_excel_how_item_4: "Cliquez Générer la formule, vérifiez le résultat d’essai, puis Copier la formule.",

	tool_write_nested_if_formula_for_excel_why_choose_title: "Ce que ce générateur de SI imbriquée vous apporte",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "Conditions égal / contient / vide ordonnées dans un seul SI imbriqué.",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "Essai dans le navigateur pour voir quelle branche gagne avant de coller.",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "Rotation d’exemples : régions, notes, et tests contient.",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "Copie en un clic de la chaîne de formule complète.",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "Note claire : ceci construit SI imbriqué, pas IFS (voir la page IFS liée).",

	tool_write_nested_if_formula_for_excel_rules_title: "Règles à prévoir",
	tool_write_nested_if_formula_for_excel_rules_body: "Le générateur émet le SI imbriqué classique IF(...). Les guillemets dans les chaînes Excel sont doublés.",
	tool_write_nested_if_formula_for_excel_rules_item_1: "Les guillemets dans les chaînes Excel sont doublés.",
	tool_write_nested_if_formula_for_excel_rules_item_2: "Contient émet ISNUMBER(SEARCH(...)) ; vide teste le texte vide.",
	tool_write_nested_if_formula_for_excel_rules_item_3: "La première condition qui correspond gagne (haut en bas).",
	tool_write_nested_if_formula_for_excel_rules_item_4: "Noms de fonctions anglais et virgules : votre Excel localisé peut exiger SI/point-virgule.",
	tool_write_nested_if_formula_for_excel_rules_item_5: "Pour la syntaxe IFS(), utilisez plutôt la page write-IFS liée.",

	tool_write_nested_if_formula_for_excel_example_title: "Exemples détaillés",
	tool_write_nested_if_formula_for_excel_example: "Charger l’exemple commence par West → A et East → B, sinon Other, essai West → A. Le suivant construit des tranches de notes (≥90 / ≥80). Le dernier utilise un test contient pour « promo ».",

	tool_write_nested_if_formula_for_excel_usecases_title: "Quand utiliser un générateur de SI imbriquée",
	tool_write_nested_if_formula_for_excel_usecase_1: "Attribuer des notes ou des niveaux de risque selon des règles ordonnées.",
	tool_write_nested_if_formula_for_excel_usecase_2: "Transformer des codes région en libellés de reporting.",
	tool_write_nested_if_formula_for_excel_usecase_3: "Vérifier une formule multi-branches avant de la coller dans un classeur.",
	tool_write_nested_if_formula_for_excel_usecase_4: "Prototyper des branches contient/vide sans écrire SEARCH à la main.",

	tool_write_nested_if_formula_for_excel_faq_q1: "Mes valeurs sont-elles envoyées quelque part ?",
	tool_write_nested_if_formula_for_excel_faq_a1: "Non. La construction et l’essai restent dans votre navigateur.",
	tool_write_nested_if_formula_for_excel_faq_q2: "Est-ce la même chose que IFS ?",
	tool_write_nested_if_formula_for_excel_faq_a2: "Non. Cette page émet IF(...) imbriqué. Utilisez le générateur IFS lié pour IFS().",
	tool_write_nested_if_formula_for_excel_faq_q3: "Comment fonctionne contient ?",
	tool_write_nested_if_formula_for_excel_faq_a3: "Il émet ISNUMBER(SEARCH(\"texte\", cellule)) dans le test IF.",
	tool_write_nested_if_formula_for_excel_faq_q4: "La formule colle-t-elle dans toutes les langues Excel ?",
	tool_write_nested_if_formula_for_excel_faq_a4: "Elle utilise des noms anglais et des virgules. Certaines installations demandent SI/SI.CONDITIONS ou des points-virgules.",
	tool_write_nested_if_formula_for_excel_faq_q5: "À quoi sert la valeur d’essai ?",
	tool_write_nested_if_formula_for_excel_faq_a5: "Elle évalue le même ordre de branches dans le navigateur pour confirmer quel Alors/Sinon gagne.",
	tool_write_nested_if_formula_for_excel_faq_q6: "Puis-je imbriquer plus de deux conditions ?",
	tool_write_nested_if_formula_for_excel_faq_a6: "Oui. Ajoutez des lignes ; chacune devient une couche IF autour du Sinon final.",

	tool_write_nested_if_formula_for_excel_references: "Documentation Microsoft de la fonction IF.",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — fonction IF",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — fonction IFS",
};

export default fr;
