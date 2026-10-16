/**
 * i18n 工具分片（write-ifs-formula-in-excel / fr）。
 * 有序条件 → =IFS(...)；TRUE 兜底；需 Excel 2019 / Microsoft 365。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: "Générateur de formule IFS (SI.SI) Excel — tests ordonnés avec TRUE en rattrapage",
	tool_write_ifs_formula_in_excel_description: "Créez une formule IFS pour Excel 2019 ou Microsoft 365 à partir de tests ordonnés (égal, contient, vide). Exemple : West → A, East → B, sinon Other → =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\"). Essayez dans le navigateur, puis copiez. Indisponible dans Excel 2016 perpétuel.",
	tool_write_ifs_formula_in_excel_article: "Ajoutez des tests ordonnés, définissez chaque résultat et un sinon TRUE, prévisualisez une valeur d’essai, puis copiez une formule IFS complète.",
	tool_write_ifs_formula_in_excel_desc: "Tests ordonnés → formule IFS avec TRUE en rattrapage, essai navigateur et copie.",

	tool_write_ifs_formula_in_excel_hint: "Les conditions sont testées de haut en bas. Le générateur ajoute TRUE,sinon en rattrapage. Excel 2019, Microsoft 365 ou plus récent. Noms anglais et virgules.",
	tool_write_ifs_formula_in_excel_note_2016: "IFS exige Excel 2019, Microsoft 365 ou plus récent. Pour Excel plus ancien, utilisez le générateur SI imbriqué.",
	tool_write_ifs_formula_in_excel_cell_label: "Cellule cible",
	tool_write_ifs_formula_in_excel_cell_ph: "ex. A1",
	tool_write_ifs_formula_in_excel_trial_label: "Valeur d’essai",
	tool_write_ifs_formula_in_excel_trial_ph: "ex. West",
	tool_write_ifs_formula_in_excel_else_label: "Sinon (TRUE en rattrapage)",
	tool_write_ifs_formula_in_excel_else_ph: "ex. Other",
	tool_write_ifs_formula_in_excel_col_op: "Test",
	tool_write_ifs_formula_in_excel_col_val: "Valeur / texte",
	tool_write_ifs_formula_in_excel_col_then: "Alors résultat",
	tool_write_ifs_formula_in_excel_op_eq: "égal à",
	tool_write_ifs_formula_in_excel_op_contains: "contient",
	tool_write_ifs_formula_in_excel_op_blank: "est vide",
	tool_write_ifs_formula_in_excel_add: "Ajouter une condition",
	tool_write_ifs_formula_in_excel_write: "Écrire la formule",
	tool_write_ifs_formula_in_excel_sample: "Charger l’exemple",
	tool_write_ifs_formula_in_excel_clear: "Effacer",
	tool_write_ifs_formula_in_excel_copy: "Copier la formule",
	tool_write_ifs_formula_in_excel_copied: "Copié.",
	tool_write_ifs_formula_in_excel_formula_label: "Formule IFS",
	tool_write_ifs_formula_in_excel_trial_result_label: "Résultat d’essai",
	tool_write_ifs_formula_in_excel_empty: "Ajoutez au moins une condition (ou chargez l’exemple), puis écrivez la formule.",
	tool_write_ifs_formula_in_excel_copy_fail: "Impossible de copier. Sélectionnez la formule et copiez-la manuellement.",

	tool_write_ifs_formula_in_excel_how_title: "Comment écrire une formule IFS",
	tool_write_ifs_formula_in_excel_how_body: "Indiquez la cellule cible et les tests ordonnés. Écrire la formule affiche IFS avec TRUE en rattrapage et évalue votre valeur d’essai. La copie utilise la syntaxe Excel anglaise avec virgules.",
	tool_write_ifs_formula_in_excel_how_item_1: "Définissez la cellule cible et une valeur d’essai optionnelle.",
	tool_write_ifs_formula_in_excel_how_item_2: "Ajoutez des lignes égal, contient ou vide dans l’ordre d’évaluation.",
	tool_write_ifs_formula_in_excel_how_item_3: "Renseignez chaque Alors et la valeur Sinon (associée à TRUE).",
	tool_write_ifs_formula_in_excel_how_item_4: "Cliquez Écrire la formule, vérifiez l’essai, puis Copier. Utilisez SI imbriqué sous Excel 2016.",

	tool_write_ifs_formula_in_excel_why_choose_title: "Ce que ce générateur IFS vous apporte",
	tool_write_ifs_formula_in_excel_why_choose_item_1: "Tests ordonnés égal / contient / vide dans un seul appel IFS.",
	tool_write_ifs_formula_in_excel_why_choose_item_2: "Paire automatique TRUE,sinon en rattrapage.",
	tool_write_ifs_formula_in_excel_why_choose_item_3: "Essai dans le navigateur avant de coller dans Excel.",
	tool_write_ifs_formula_in_excel_why_choose_item_4: "Exemples rotatifs pour régions, notes et contient.",
	tool_write_ifs_formula_in_excel_why_choose_item_5: "Limite Excel 2016 claire avec lien vers SI imbriqué.",

	tool_write_ifs_formula_in_excel_rules_title: "Règles à prévoir",
	tool_write_ifs_formula_in_excel_rules_body: "Le générateur émet IFS(test,valeur,...,TRUE,sinon). Les guillemets texte sont doublés dans les chaînes Excel.",
	tool_write_ifs_formula_in_excel_rules_item_1: "Les guillemets texte sont doublés dans les chaînes Excel.",
	tool_write_ifs_formula_in_excel_rules_item_2: "Contient émet ISNUMBER(SEARCH(...)) ; vide teste le texte vide.",
	tool_write_ifs_formula_in_excel_rules_item_3: "Le premier test vrai gagne ; TRUE en rattrapage s’exécute en dernier.",
	tool_write_ifs_formula_in_excel_rules_item_4: "IFS exige Excel 2019, Microsoft 365 ou plus récent — pas Excel 2016 perpétuel.",
	tool_write_ifs_formula_in_excel_rules_item_5: "Noms de fonctions anglais et virgules peuvent nécessiter une localisation dans votre Excel.",

	tool_write_ifs_formula_in_excel_example_title: "Exemples concrets",
	tool_write_ifs_formula_in_excel_example: "Charger l’exemple démarre avec West → A et East → B, sinon Other → =IFS(...,TRUE,\"Other\"), essai West → A. Le suivant construit des notes simples. Le dernier utilise contient pour « promo ».",

	tool_write_ifs_formula_in_excel_usecases_title: "Quand utiliser un générateur de formule IFS",
	tool_write_ifs_formula_in_excel_usecase_1: "Mapper des codes région vers des libellés sans parenthèses SI profondément imbriquées.",
	tool_write_ifs_formula_in_excel_usecase_2: "Ébaucher des bandes de notes ou de risque pour des classeurs Microsoft 365.",
	tool_write_ifs_formula_in_excel_usecase_3: "Tester l’ordre des branches avant de coller dans une feuille partagée.",
	tool_write_ifs_formula_in_excel_usecase_4: "Passer à la page SI imbriqué quand des collègues utilisent encore Excel 2016.",

	tool_write_ifs_formula_in_excel_faq_q1: "Excel 2016 exécute-t-il IFS ?",
	tool_write_ifs_formula_in_excel_faq_a1: "La version perpétuelle Excel 2016 non. Utilisez SI imbriqué, Excel 2019 ou plus récent, ou Microsoft 365.",
	tool_write_ifs_formula_in_excel_faq_q2: "Que se passe-t-il si aucun test ne correspond ?",
	tool_write_ifs_formula_in_excel_faq_a2: "TRUE est associé à votre valeur sinon comme résultat de rattrapage.",
	tool_write_ifs_formula_in_excel_faq_q3: "Les valeurs sont-elles envoyées en ligne ?",
	tool_write_ifs_formula_in_excel_faq_a3: "Non. La construction et l’essai restent dans votre navigateur.",
	tool_write_ifs_formula_in_excel_faq_q4: "Excel localisé l’acceptera-t-il ?",
	tool_write_ifs_formula_in_excel_faq_a4: "Certaines installations demandent des noms traduits (ex. SI.SI) ou des points-virgules.",
	tool_write_ifs_formula_in_excel_faq_q5: "En quoi cela diffère d’un SI imbriqué ?",
	tool_write_ifs_formula_in_excel_faq_a5: "IFS est une liste plate de tests. Le SI imbriqué enveloppe SI dans SI. Pour Excel ancien, utilisez la page SI imbriqué liée.",
	tool_write_ifs_formula_in_excel_faq_q6: "Que produit « contient » ?",
	tool_write_ifs_formula_in_excel_faq_a6: "ISNUMBER(SEARCH(\"texte\", cellule)) comme argument de test dans IFS.",

	tool_write_ifs_formula_in_excel_references: "Documentation Microsoft de la fonction IFS.",
	tool_write_ifs_formula_in_excel_ref_a_label: "Microsoft — fonction IFS",
	tool_write_ifs_formula_in_excel_ref_b_label: "Microsoft — fonction IF",
};

export default fr;
