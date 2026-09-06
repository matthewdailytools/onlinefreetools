/**
 * i18n（compare-two-word-documents-for-differences / fr）。
 * H1: Comparer deux documents Word pour voir les différences.
 * Ce n’est pas Révision → Comparer de Microsoft.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'Choisissez deux .docx et comparez le libellé visible. Styles, en-têtes et volet Révision de Word ne sont pas reproduits. Les fichiers restent sur l’appareil et ne sont pas envoyés au serveur.',
	tool_compare_two_word_documents_for_differences_clear: 'Effacer',
	tool_compare_two_word_documents_for_differences_compare: 'Comparer',
	tool_compare_two_word_documents_for_differences_desc:
		'Comparer deux documents Word pour voir les différences : extraire le texte visible de deux .docx dans le navigateur, sans envoi au serveur.',
	tool_compare_two_word_documents_for_differences_description:
		'Comparer deux documents Word pour voir les différences dans le navigateur. Processus : choisissez deux .docx, extraire le texte visible des paragraphes, puis marquer ajouts et suppressions. Les fichiers restent sur l’appareil et ne sont pas envoyés au serveur. Exemple : deux courts mémos où une phrase change. Ce n’est pas Révision → Comparer de Microsoft ; en-têtes et styles sont écartés. Le PDF n’est pas dans le périmètre.',
	tool_compare_two_word_documents_for_differences_empty: 'Choisissez d’abord deux fichiers Word, ou chargez l’exemple.',
	tool_compare_two_word_documents_for_differences_err_extract:
		'Impossible de lire le texte. Fichier endommagé, chiffré, ou ce n’est pas un .docx.',
	tool_compare_two_word_documents_for_differences_err_no_text: 'Aucun texte extractible des deux côtés (vide ou images seules).',
	tool_compare_two_word_documents_for_differences_err_not_docx: 'Utilisez .docx (Office Open XML). L’ancien .doc n’est pas pris en charge.',
	tool_compare_two_word_documents_for_differences_example:
		'Charger l’exemple crée deux tout petits .docx. Le second mémo remplace « meet at noon » par « meet at 3pm ». Dès l’ouverture, cette différence de libellé s’affiche.',
	tool_compare_two_word_documents_for_differences_example_title: 'Exemple',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'Non. Les fichiers sont lus dans cet onglet. mammoth et jsdiff peuvent arriver en bibliothèque depuis ce site ; vos documents ne sont pas envoyés à nos serveurs.',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'Non. Word peut comparer la mise en forme et le suivi des modifications. Ici on extrait seulement le texte visible, puis on en fait un diff. En-têtes, pieds et styles sont jetés.',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'Si l’extraction échoue : mot de passe, fichier corrompu, ou pas d’OOXML. Une page uniquement image donne un texte vide.',
	tool_compare_two_word_documents_for_differences_faq_a4:
		"La comparaison accepte deux .docx et vérifie le texte extrait. Les PDF et anciens .doc ne sont pas analysés ; la mise en forme et l’historique des révisions Word sont exclus.",
	tool_compare_two_word_documents_for_differences_faq_q1: 'Mes fichiers Word sont-ils envoyés ?',
	tool_compare_two_word_documents_for_differences_faq_q2: 'Est-ce identique à Révision → Comparer dans Word ?',
	tool_compare_two_word_documents_for_differences_faq_q3: 'Pourquoi l’extraction échoue-t-elle ou les en-têtes manquent-ils ?',
	tool_compare_two_word_documents_for_differences_faq_q4: 'Puis-je comparer un PDF ou n’importe quels documents ?',
	tool_compare_two_word_documents_for_differences_how_body:
		'Choisissez deux Word et lisez le diff de libellé. Cette page n’ouvre pas le volet Révision.',
	tool_compare_two_word_documents_for_differences_how_item_1: 'Choisir le premier .docx (original).',
	tool_compare_two_word_documents_for_differences_how_item_2: 'Choisir le second .docx (révisé).',
	tool_compare_two_word_documents_for_differences_how_item_3:
		"Cliquez sur Comparer pour extraire le texte visible et calculer les différences de formulation.",
	tool_compare_two_word_documents_for_differences_how_item_4: 'Lire le vert (ajouts) et le rouge (suppressions).',
	tool_compare_two_word_documents_for_differences_how_title: 'Mode d’emploi',
	tool_compare_two_word_documents_for_differences_label_a: 'Premier document Word',
	tool_compare_two_word_documents_for_differences_label_b: 'Second document Word',
	tool_compare_two_word_documents_for_differences_legend: 'Vert = ajouté · Rouge = supprimé',
	tool_compare_two_word_documents_for_differences_load_sample: 'Charger l’exemple',
	tool_compare_two_word_documents_for_differences_need_lib: 'Une bibliothèque n’a pas chargé. Vérifiez le réseau puis actualisez.',
	tool_compare_two_word_documents_for_differences_no_diff: 'Pas de différence de libellé dans le texte extrait.',
	tool_compare_two_word_documents_for_differences_result_label: 'Différences de libellé',
	tool_compare_two_word_documents_for_differences_rules_body:
		'La comparaison est un diff de texte après extraction. La mise en forme n’est pas un suivi de révisions.',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'mammoth lit les paragraphes visibles de l’OOXML. Ce texte est ensuite comparé ligne à ligne avec jsdiff.',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'En-têtes, pieds, commentaires et la plupart des styles sont écartés. Deux fichiers qui ne changent que le look peuvent paraître identiques.',
	tool_compare_two_word_documents_for_differences_rules_item_3: 'Un .docx chiffré ou endommagé échoue. L’ancien .doc n’est pas analysé.',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'Ce n’est pas « Comparer des documents » de Microsoft. Pour le suivi de mise en forme, utilisez Word.',
	tool_compare_two_word_documents_for_differences_rules_title: 'Règles à connaître',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '{added} ajoutés, {removed} supprimés',
	tool_compare_two_word_documents_for_differences_title: 'Comparer deux documents Word pour voir les différences',
	tool_compare_two_word_documents_for_differences_usecase_1:
		'Brouillons de contrat : voir quelles phrases ont changé entre deux exports .docx.',
	tool_compare_two_word_documents_for_differences_usecase_2: 'Comptes rendus : le fichier de la semaine dernière face à celui de cette semaine.',
	tool_compare_two_word_documents_for_differences_usecase_3: 'Devoirs : deux rendus Word où le libellé compte, pas la mise en page.',
	tool_compare_two_word_documents_for_differences_usecases_title: 'Quand ça convient',
};

export default fr;
