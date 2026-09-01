/**
 * Fragment i18n (chatgpt-export-to-markdown / fr).
 * H1 local : exporter ChatGPT en Markdown.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'Transformez un export ChatGPT en Markdown sur cette page. Collez ou déposez le JSON, obtenez des tours lisibles, puis passez éventuellement en JSON ou CSV. Les exports Claude utilisent le même canevas. Reste sur l’appareil, pas envoyé à un serveur.',
	tool_chatgpt_export_to_markdown_choose_file: 'Choisir le fichier',
	tool_chatgpt_export_to_markdown_clear: 'Effacer',
	tool_chatgpt_export_to_markdown_convert: 'Convertir',
	tool_chatgpt_export_to_markdown_copy: 'Copier',
	tool_chatgpt_export_to_markdown_desc:
		'Exporter ChatGPT en Markdown (puces JSON/CSV) ; reste sur l’appareil, pas envoyé au serveur.',
	tool_chatgpt_export_to_markdown_description:
		'Exporter ChatGPT en Markdown : déposez ou collez un JSON d’export, mappez les tours utilisateur/assistant et téléchargez le Markdown. Exemple : la conversation d’échantillon est déjà en Markdown à l’ouverture. JSON et CSV sont des puces de sortie. Les chat_messages Claude sont détectés sur la même page. Les fichiers restent sur l’appareil et ne sont pas envoyés à un serveur. Ce n’est ni un compteur de tokens ni une synchro cloud.',
	tool_chatgpt_export_to_markdown_download: 'Télécharger',
	tool_chatgpt_export_to_markdown_drop_hint: 'Déposez un JSON conversations ou collez-le ci-dessous. L’analyse reste dans cet onglet.',
	tool_chatgpt_export_to_markdown_empty: 'Collez ou choisissez d’abord un fichier d’export.',
	tool_chatgpt_export_to_markdown_err_none: 'Aucun tour trouvé. Vérifiez que le JSON a mapping, messages ou chat_messages.',
	tool_chatgpt_export_to_markdown_err_parse: 'Impossible de lire ce JSON. Collez un export ChatGPT ou Claude valide.',
	tool_chatgpt_export_to_markdown_example:
		'Charger l’exemple insère un JSON mapping à deux tours, le convertit en Markdown avec titres User et Assistant, et active Copier et Télécharger.',
	tool_chatgpt_export_to_markdown_example_title: 'Exemple',
	tool_chatgpt_export_to_markdown_faq_a1: 'Non. L’export est lu dans cet onglet. Rien n’est envoyé vers OpenAI, Anthropic ou nos serveurs.',
	tool_chatgpt_export_to_markdown_faq_a2: 'La voie principale est l’export de données ChatGPT avec arbre mapping. Les tableaux role/content et les chat_messages Claude sont aussi acceptés.',
	tool_chatgpt_export_to_markdown_faq_a3: 'Oui. Les chat_messages Claude (sender + text) sont absorbés ici. Pas de seconde URL.',
	tool_chatgpt_export_to_markdown_faq_a4: 'Les nœuds system vides et les coquilles tool sans texte sont ignorés. Pièces jointes et images ne sont pas reconstruites en fichiers.',
	tool_chatgpt_export_to_markdown_faq_a5: 'Compter les tokens est un autre travail (reporté). Ce H1 couvre export → Markdown.',
	tool_chatgpt_export_to_markdown_faq_q1: 'Mon chat est-il envoyé ?',
	tool_chatgpt_export_to_markdown_faq_q2: 'Quelles formes d’export fonctionnent ?',
	tool_chatgpt_export_to_markdown_faq_q3: 'L’export Claude fonctionne-t-il ?',
	tool_chatgpt_export_to_markdown_faq_q4: 'Quels champs sont perdus ?',
	tool_chatgpt_export_to_markdown_faq_q5: 'Est-ce un compteur de tokens ?',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: 'Format de sortie',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body:
		'Exportez le chat, collez ou déposez le JSON, convertissez en Markdown, puis copiez ou téléchargez. JSON et CSV sont des puces du même travail.',
	tool_chatgpt_export_to_markdown_how_item_1: 'Récupérez un export de données ChatGPT (ou un JSON Claude) — la tâche est exporter ChatGPT en Markdown.',
	tool_chatgpt_export_to_markdown_how_item_2: 'Déposez le fichier ou collez le JSON dans la zone.',
	tool_chatgpt_export_to_markdown_how_item_3: 'Laissez Markdown sauf besoin des puces JSON ou CSV.',
	tool_chatgpt_export_to_markdown_how_item_4: 'Copiez ou téléchargez. L’exemple a déjà tourné à l’ouverture.',
	tool_chatgpt_export_to_markdown_how_title: 'Fonctionnement',
	tool_chatgpt_export_to_markdown_input_label: 'JSON d’export',
	tool_chatgpt_export_to_markdown_input_ph: 'Collez ici le JSON conversations…',
	tool_chatgpt_export_to_markdown_load_sample: 'Charger l’exemple',
	tool_chatgpt_export_to_markdown_output_label: 'Résultat',
	tool_chatgpt_export_to_markdown_role_assistant: 'Assistant',
	tool_chatgpt_export_to_markdown_role_system: 'Système',
	tool_chatgpt_export_to_markdown_role_tool: 'Outil',
	tool_chatgpt_export_to_markdown_role_user: 'Utilisateur',
	tool_chatgpt_export_to_markdown_rules_body:
		'La conversion d’export exige une carte de champs, un Markdown par défaut et une privacy claire — pas une seconde URL convertisseur par éditeur.',
	tool_chatgpt_export_to_markdown_rules_item_1: 'La sortie par défaut est du Markdown avec sections ## Utilisateur / ## Assistant et un # titre optionnel.',
	tool_chatgpt_export_to_markdown_rules_item_2: 'Arbres mapping ChatGPT, tableaux plats et chat_messages Claude sont analysés sur une page.',
	tool_chatgpt_export_to_markdown_rules_item_3: 'Les puces JSON et CSV réémettent les mêmes tours. Elles ne changent pas le H1.',
	tool_chatgpt_export_to_markdown_rules_item_4: 'Les formats évoluent. En cas d’échec, collez le JSON brut et lisez la FAQ.',
	tool_chatgpt_export_to_markdown_rules_title: 'Règles à prévoir',
	tool_chatgpt_export_to_markdown_status_copied: 'Copié dans le presse-papiers.',
	tool_chatgpt_export_to_markdown_status_done: 'Prêt — {n} tours ({source}).',
	tool_chatgpt_export_to_markdown_status_working: 'Analyse de l’export…',
	tool_chatgpt_export_to_markdown_title: 'exporter ChatGPT en Markdown',
	tool_chatgpt_export_to_markdown_usecase_1: 'Archivez l’export ChatGPT du jour en Markdown avant de supprimer le fil.',
	tool_chatgpt_export_to_markdown_usecase_2: 'Passez en CSV quand vous voulez des colonnes role/content pour un tableur.',
	tool_chatgpt_export_to_markdown_usecase_3: 'Déposez un JSON chat_messages Claude sur la même page — pas de second outil.',
	tool_chatgpt_export_to_markdown_usecases_title: 'Bons usages',
};

export default fr;
