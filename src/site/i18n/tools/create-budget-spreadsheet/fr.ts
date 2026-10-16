/**
 * i18n 工具分片（create-budget-spreadsheet / fr）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 教育规划，非理财建议。
 * 检索向：créer un budget Excel / tableur budget / feuille de budget mensuel。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "Créer un budget Excel — catégories et montants en xlsx",
	tool_create_budget_spreadsheet_description: "Composez un tableur budget simple : une ligne catégorie + montant, prévisualisez le total, puis téléchargez un .xlsx avec une formule SUM active. Exemple : Loyer 1200 + Alimentation 400 → Total 1600. Tout reste dans le navigateur — chiffres de planification uniquement, pas un conseil financier, fiscal ou d’investissement.",
	tool_create_budget_spreadsheet_article: "Saisissez des lignes catégorie,montant, prévisualisez le total cumulé, puis téléchargez un budget.xlsx dont la cellule Total utilise SUM.",
	tool_create_budget_spreadsheet_desc: "Montants par catégorie → total en aperçu → xlsx avec SUM. Local uniquement.",

	tool_create_budget_spreadsheet_safety_banner: "Chiffres de planification uniquement. Cette page dresse une liste de catégories avec un total SUM. Ce n’est ni un grand livre, ni une déclaration fiscale, ni un conseil d’investissement.",
	tool_create_budget_spreadsheet_hint: "Une ligne par entrée : catégorie,montant (virgule ou tabulation). Les montants doivent être des nombres finis. Les lignes mal formées sont ignorées.",
	tool_create_budget_spreadsheet_input_label: "Lignes de budget (catégorie, montant)",
	tool_create_budget_spreadsheet_input_ph: "ex. Loyer,1200",
	tool_create_budget_spreadsheet_write: "Créer le tableur",
	tool_create_budget_spreadsheet_download: "Télécharger xlsx",
	tool_create_budget_spreadsheet_sample: "Charger l’exemple",
	tool_create_budget_spreadsheet_clear: "Effacer",
	tool_create_budget_spreadsheet_preview_title: "Aperçu",
	tool_create_budget_spreadsheet_col_category: "Catégorie",
	tool_create_budget_spreadsheet_col_amount: "Montant",
	tool_create_budget_spreadsheet_total_label: "Total",
	tool_create_budget_spreadsheet_rows_label: "Lignes prises en compte",
	tool_create_budget_spreadsheet_ready_note: "Aperçu prêt. Le téléchargement écrit budget.xlsx avec une formule SUM dans la cellule Total.",
	tool_create_budget_spreadsheet_empty: "Ajoutez au moins une ligne valide catégorie,montant (par ex. Loyer,1200), ou chargez l’exemple.",
	tool_create_budget_spreadsheet_need_lib: "Échec du chargement de la bibliothèque tableur. Vérifiez le réseau et actualisez.",
	tool_create_budget_spreadsheet_sheet_name: "Budget",

	tool_create_budget_spreadsheet_how_title: "Comment créer un tableur budget",
	tool_create_budget_spreadsheet_how_body: "Listez chaque catégorie de dépense et son montant, créez un aperçu avec le total, puis téléchargez un .xlsx. Modifier un montant dans Excel recalcule le total SUM.",
	tool_create_budget_spreadsheet_how_item_1: "Saisissez une ligne par entrée au format catégorie,montant.",
	tool_create_budget_spreadsheet_how_item_2: "Cliquez sur Créer le tableur pour prévisualiser les lignes et le total.",
	tool_create_budget_spreadsheet_how_item_3: "Corrigez ou retirez les lignes ignorées si le total semble faux.",
	tool_create_budget_spreadsheet_how_item_4: "Cliquez sur Télécharger xlsx pour enregistrer budget.xlsx avec un SUM dynamique.",

	tool_create_budget_spreadsheet_why_choose_title: "Ce que ce créateur de budget Excel vous apporte",
	tool_create_budget_spreadsheet_why_choose_item_1: "Liste de catégories rapide avec total prévisualisé sur la page.",
	tool_create_budget_spreadsheet_why_choose_item_2: "La cellule Total du fichier téléchargé utilise une formule Excel SUM active.",
	tool_create_budget_spreadsheet_why_choose_item_3: "Exemples en rotation : mensuel, voyage et liste type association.",
	tool_create_budget_spreadsheet_why_choose_item_4: "Tourne dans le navigateur — les lignes ne sont pas envoyées.",
	tool_create_budget_spreadsheet_why_choose_item_5: "Frontière YMYL claire : planification seulement — ni grand livre ni outil fiscal.",

	tool_create_budget_spreadsheet_rules_title: "Règles à attendre",
	tool_create_budget_spreadsheet_rules_body: "Cet outil construit une feuille de planification à partir des montants par catégorie. Ce n’est pas un logiciel de comptabilité.",
	tool_create_budget_spreadsheet_rules_item_1: "Les montants doivent être des nombres finis ; les lignes mal formées sont ignorées.",
	tool_create_budget_spreadsheet_rules_item_2: "La cellule Total téléchargée utilise =SUM sur la colonne des montants.",
	tool_create_budget_spreadsheet_rules_item_3: "Une seule liste type dépenses — pas de moteur écart revenus / dépenses.",
	tool_create_budget_spreadsheet_rules_item_4: "Les valeurs restent sur votre appareil et ne sont pas envoyées.",
	tool_create_budget_spreadsheet_rules_item_5: "Le format suit la pratique OOXML/xlsx courante via SheetJS dans le navigateur.",

	tool_create_budget_spreadsheet_example_title: "Exemples détaillés",
	tool_create_budget_spreadsheet_example: "Charger l’exemple commence par Loyer 1200 et Alimentation 400 → Total 1600. Ensuite s’ajoutent Charges 150 et Transport 200. Le dernier exemple est une courte liste voyage (Hôtel, Vols, Repas).",

	tool_create_budget_spreadsheet_usecases_title: "Quand créer un budget Excel ici",
	tool_create_budget_spreadsheet_usecase_1: "Ébaucher un budget enveloppe mensuel avant un modèle plus complet.",
	tool_create_budget_spreadsheet_usecase_2: "Regrouper les coûts prévus d’un voyage ou d’un événement dans une feuille téléchargeable.",
	tool_create_budget_spreadsheet_usecase_3: "Préparer le plan de dépenses d’une association avant une vraie compta.",
	tool_create_budget_spreadsheet_usecase_4: "Remettre un .xlsx avec un total SUM qui se recalcule encore dans Excel.",

	tool_create_budget_spreadsheet_faq_q1: "Est-ce un grand livre ?",
	tool_create_budget_spreadsheet_faq_a1: "Non. Pas de comptes, transactions, rapprochement ni historique d’audit.",
	tool_create_budget_spreadsheet_faq_q2: "Mes lignes sont-elles envoyées ?",
	tool_create_budget_spreadsheet_faq_a2: "Non. L’analyse et l’écriture xlsx s’exécutent dans votre navigateur.",
	tool_create_budget_spreadsheet_faq_q3: "Le xlsx téléchargé se recalcule-t-il ?",
	tool_create_budget_spreadsheet_faq_a3: "Oui. La cellule Total contient une formule SUM sur la colonne des montants.",
	tool_create_budget_spreadsheet_faq_q4: "Suit-il les revenus face aux dépenses ?",
	tool_create_budget_spreadsheet_faq_a4: "Non. Pour revenus, objectifs, écarts ou graphiques, utilisez un modèle budget plus complet.",
	tool_create_budget_spreadsheet_faq_q5: "Quel format pour catégorie,montant ?",
	tool_create_budget_spreadsheet_faq_a5: "Une ligne par entrée, catégorie puis montant séparés par une virgule ou une tabulation. Exemple : Loyer,1200.",
	tool_create_budget_spreadsheet_faq_q6: "Est-ce un conseil financier ?",
	tool_create_budget_spreadsheet_faq_a6: "Non. Arithmétique de planification uniquement — pas un conseil financier, fiscal ou d’investissement.",

	tool_create_budget_spreadsheet_disclaimer: "Chiffres de planification uniquement — pas un conseil financier, fiscal, comptable ou d’investissement.",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML ; documentation SheetJS pour l’écriture xlsx dans le navigateur.",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "Docs SheetJS",
};

export default fr;
