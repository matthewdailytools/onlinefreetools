/**
 * i18n tool shard (prompt-template-builder / fr).
 * H1 local: générateur de modèles de Prompt.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Transformez un brouillon de prompt en modèle réutilisable Role / Task / Constraints / Output sur cette page. Collez du texte libre ou remplissez les champs, puis copiez Markdown ou JSON. Aucun appel à une API de modèle. Le texte reste sur l’appareil et n’est pas envoyé au serveur.',
	tool_prompt_template_builder_build: 'Créer le modèle',
	tool_prompt_template_builder_clear: 'Effacer',
	tool_prompt_template_builder_constraints_label: 'Contraintes',
	tool_prompt_template_builder_constraints_ph: 'Limites de ton, périmètre, à éviter…',
	tool_prompt_template_builder_copy: 'Copier',
	tool_prompt_template_builder_desc:
		'Modèle Prompt structuré (Markdown/JSON) — reste sur l’appareil, sans envoi au serveur.',
	tool_prompt_template_builder_description:
		'Générateur de modèles de Prompt : fusionnez texte libre et champs Role, Task, Constraints, Output en un modèle réutilisable. Exemple : le modèle agent de revue de code s’affiche à l’ouverture. Markdown par défaut ; JSON émet {role,task,constraints,output}. Tout dans cet onglet — ce n’est pas un LLM ni une bibliothèque cloud. Le texte reste sur l’appareil et n’est pas envoyé au serveur.',
	tool_prompt_template_builder_download: 'Télécharger',
	tool_prompt_template_builder_empty: 'Ajoutez du texte libre ou au moins un champ avant de créer.',
	tool_prompt_template_builder_example:
		'Charger l’exemple remplit Role, Task, Constraints et Output pour un agent de revue de code, génère Markdown avec quatre sections ## et active Copier et Télécharger.',
	tool_prompt_template_builder_example_title: 'Exemple',
	tool_prompt_template_builder_faq_a1:
		'Non. Le modèle est créé dans cet onglet du navigateur. Rien n’est envoyé à OpenAI, Anthropic ou nos serveurs.',
	tool_prompt_template_builder_faq_a2:
		'Non. Cette page formate seulement votre texte en blocs. Elle n’appelle aucun modèle et n’invente pas de contenu.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown transforme des exports de chat en fichiers lisibles. Ici vous structurez un system prompt réutilisable — utilisez les deux après archivage puis affinage.',
	tool_prompt_template_builder_faq_a4:
		'Oui. La puce JSON émet {role,task,constraints,output}. Associez le validateur JSON Schema si besoin.',
	tool_prompt_template_builder_faq_a5:
		'Les lignes commençant par Role:, Task:, Constraints: ou Output: dans le champ libre deviennent des sections. Les champs explicites priment.',
	tool_prompt_template_builder_faq_q1: 'Mon prompt est-il envoyé ?',
	tool_prompt_template_builder_faq_q2: 'Est-ce qu’un LLM est appelé ?',
	tool_prompt_template_builder_faq_q3: 'Différence avec l’export ChatGPT vers Markdown ?',
	tool_prompt_template_builder_faq_q4: 'Puis-je obtenir du JSON ?',
	tool_prompt_template_builder_faq_q5: 'Comment fonctionne l’analyse du texte libre ?',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Format de sortie',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt libre (optionnel)',
	tool_prompt_template_builder_free_ph: 'Collez un brouillon ou des lignes Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Rédigez un brouillon, optionnellement séparez Role / Task / Constraints / Output, créez le modèle, puis copiez ou téléchargez. Markdown et JSON sont des puces pour le même travail.',
	tool_prompt_template_builder_how_item_1:
		'Collez un brouillon ou remplissez Role, Task, Constraints et Output — l’objectif est un modèle prompt structuré.',
	tool_prompt_template_builder_how_item_2: 'Cliquez sur Créer le modèle (l’exemple a déjà tourné à l’ouverture).',
	tool_prompt_template_builder_how_item_3: 'Passez en JSON si vous avez besoin de {role,task,constraints,output} pour le code ou la config.',
	tool_prompt_template_builder_how_item_4: 'Copiez ou téléchargez. Modifiez les champs et recréez quand vous voulez.',
	tool_prompt_template_builder_how_title: 'Comment ça marche',
	tool_prompt_template_builder_load_sample: 'Charger l’exemple',
	tool_prompt_template_builder_output_fmt_label: 'Format de sortie',
	tool_prompt_template_builder_output_fmt_ph: 'Sections Markdown, forme JSON, liste…',
	tool_prompt_template_builder_result_label: 'Modèle',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Qui le modèle doit incarner…',
	tool_prompt_template_builder_rules_body:
		'Un modèle réutilisable exige des blocs clairs et des limites honnêtes — pas un second générateur.',
	tool_prompt_template_builder_rules_item_1:
		'Quatre blocs : Role, Task, Constraints, Output. Les vides sont omis du Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Les champs explicites l’emportent sur le texte libre parsé.',
	tool_prompt_template_builder_rules_item_3: 'Sortie par défaut : Markdown avec ##. JSON est une puce sur la même page.',
	tool_prompt_template_builder_rules_item_4: 'Formate le texte seulement. N’estime pas les tokens ni ne valide JSON contre un schéma.',
	tool_prompt_template_builder_rules_title: 'Règles attendues',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'Copié dans le presse-papiers.',
	tool_prompt_template_builder_status_done: 'Modèle prêt.',
	tool_prompt_template_builder_status_working: 'Création du modèle…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Quoi faire étape par étape…',
	tool_prompt_template_builder_title: 'générateur de modèles de Prompt',
	tool_prompt_template_builder_usecase_1:
		'Publiez un system prompt de revue de code que l’équipe peut coller dans n’importe quelle UI de chat.',
	tool_prompt_template_builder_usecase_2:
		'Transformez des notes de réunion en blocs Role/Task/Constraints avant de brancher l’API.',
	tool_prompt_template_builder_usecase_3:
		'Exportez du JSON puis ouvrez le validateur JSON Schema pour vérifier les fichiers de config.',
	tool_prompt_template_builder_usecases_title: 'Bonnes situations',
};

export default fr;
