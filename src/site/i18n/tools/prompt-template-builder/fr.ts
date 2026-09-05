/**
 * i18n tool shard (prompt-template-builder / fr).
 * H1 orienté recherche : générateur de modèles de prompt ; la page met en forme le texte, elle
 * n'appelle l'API d'aucun chat. ChatGPT / Gemini / Claude / DeepSeek figurent dans la description
 * et au premier écran. Développer/Peaufiner est optionnel via Cloudflare Workers AI (Turnstile + quota).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Transformez un brouillon de prompt en modèle réutilisable Role / Task / Constraints / Output sur cette page. Collez du texte libre ou remplissez les champs, puis copiez Markdown ou JSON dans ChatGPT, Gemini, Claude ou DeepSeek. Par défaut le modèle est assemblé dans votre navigateur et nous n’appelons l’API d’aucun chat à votre place ; ce n’est qu’en cliquant sur Développer ou Peaufiner avec l’IA que le brouillon en cours part vers Cloudflare Workers AI (Turnstile obligatoire, quota limité).',
	tool_prompt_template_builder_build: 'Créer le modèle',
	tool_prompt_template_builder_clear: 'Effacer',
	tool_prompt_template_builder_constraints_label: 'Contraintes',
	tool_prompt_template_builder_constraints_ph: 'Limites de ton, périmètre, à éviter…',
	tool_prompt_template_builder_copy: 'Copier',
	tool_prompt_template_builder_desc:
		'Générateur de modèles de prompt — assemblage local dans le navigateur, avec Développer/Peaufiner en option via l’IA Cloudflare (Turnstile requis).',
	tool_prompt_template_builder_description:
		'Générateur de modèles de prompt : mettez votre brouillon en forme en quatre étapes — Role, Task, Constraints, Output — puis collez-le dans ChatGPT, Gemini, Claude ou DeepSeek. Un exemple de revue de code tourne dès l’ouverture ; export Markdown par défaut, JSON pour vos pipelines. L’assemblage est local et l’IA Cloudflare (Développer/Peaufiner) reste optionnelle et limitée par un quota.',
	tool_prompt_template_builder_download: 'Télécharger',
	tool_prompt_template_builder_empty: 'Ajoutez du texte libre ou au moins un champ avant de créer.',
	tool_prompt_template_builder_example:
		'Entrée (Charger l’exemple, puce Code) : Role = relecteur senior (sécurité et lisibilité) ; Task = relire le diff PR collé ; Constraints = 12 puces max. Sortie (Markdown) : ## Rôle / ## Tâche / ## Contraintes / ## Format de sortie — quatre sections prêtes pour ChatGPT ou Claude.',
	tool_prompt_template_builder_example_title: 'Exemple',
	tool_prompt_template_builder_faq_a1:
		'Par défaut, le modèle est assemblé dans cet onglet et rien n’en sort. Seul Développer/Peaufiner envoie le texte de ce clic vers Cloudflare Workers AI ; depuis nos serveurs, rien ne part vers OpenAI, Google, Anthropic ou DeepSeek.',
	tool_prompt_template_builder_faq_a2:
		'Le mode local se contente de mettre vos champs en forme dans cet onglet. Développer/Peaufiner passe par Cloudflare Workers AI après le Turnstile : nous n’ouvrons ni ChatGPT, ni Gemini, ni Claude, ni DeepSeek à votre place.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown transforme des exports de chat en fichiers lisibles. Ici vous structurez un system prompt réutilisable — utilisez les deux après archivage puis affinage.',
	tool_prompt_template_builder_faq_a4:
		'Oui. Validez le widget Turnstile du panneau IA avant Développer ou Peaufiner ; sans jeton valide le bouton renvoie une erreur, et l’assemblage local continue de fonctionner.',
	tool_prompt_template_builder_faq_a5:
		'Les lignes commençant par Role:, Task:, Constraints: ou Output: dans le champ libre deviennent des sections. Les champs explicites priment.',
	tool_prompt_template_builder_faq_a6:
		'Oui. Copiez le modèle créé dans ChatGPT, Gemini, Claude ou DeepSeek : la même structure à quatre champs fonctionne dans chacun de ces chats. Cette page prépare seulement le texte, elle ne se connecte à aucun service et n’appelle aucune API.',
	tool_prompt_template_builder_faq_q1: 'Mon prompt est-il envoyé ?',
	tool_prompt_template_builder_faq_q2: 'Est-ce qu’un LLM est appelé ?',
	tool_prompt_template_builder_faq_q3: 'Différence avec l’export ChatGPT vers Markdown ?',
	tool_prompt_template_builder_faq_q4:
		'Pourquoi l’IA optionnelle demande-t-elle un Turnstile ?',
	tool_prompt_template_builder_faq_q5: 'Comment fonctionne l’analyse du texte libre ?',
	tool_prompt_template_builder_faq_q6: 'Puis-je l’utiliser avec ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_prompt_template_builder_faq_q7:
		'Quelle différence entre le mode local et l’IA Cloudflare optionnelle ?',
	tool_prompt_template_builder_faq_a7:
		'Local : tout est assemblé dans cet onglet, sans envoi. Développer/Peaufiner transmet le brouillon à Cloudflare Workers AI (Turnstile et quota journalier) et la réponse remplace le bloc de résultat. En cas d’échec ou de quota atteint, restez en mode local.',
	tool_prompt_template_builder_ai_expand:
		'Développer avec l’IA',
	tool_prompt_template_builder_ai_polish:
		'Peaufiner avec l’IA',
	tool_prompt_template_builder_ai_panel_label:
		'IA Cloudflare optionnelle (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'Envoyer le texte à Cloudflare Workers AI ?',
	tool_prompt_template_builder_ai_consent_body:
		'Cette étape optionnelle envoie votre brouillon actuel à Cloudflare Workers AI pour inférence. Depuis nos serveurs, rien ne part vers OpenAI, Google, Anthropic ou DeepSeek. Sans IA, l’assemblage local fonctionne toujours.',
	tool_prompt_template_builder_ai_consent_ok:
		'Continuer',
	tool_prompt_template_builder_ai_consent_cancel:
		'Annuler',
	tool_prompt_template_builder_ai_working:
		'L’IA Cloudflare travaille…',
	tool_prompt_template_builder_ai_done:
		'Le texte de l’IA a été écrit en entier dans le résultat. Relisez-le avant de copier.',
	tool_prompt_template_builder_ai_err_generic:
		'Échec de l’IA. Votre prompt local est inchangé.',
	tool_prompt_template_builder_ai_err_rate:
		'Quota IA atteint. Restez en mode local ou réessayez demain (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Validez le Turnstile avant d’utiliser l’IA.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Format de sortie',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt libre (optionnel)',
	tool_prompt_template_builder_free_ph: 'Collez un brouillon ou des lignes Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Choisissez une puce scène ou rédigez votre brouillon, remplissez Role / Task / Constraints / Output, créez le modèle, puis collez dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Choisissez Revue de code, Film, Drame court, Android ou iOS — ou collez votre brouillon dans le champ libre.',
	tool_prompt_template_builder_how_item_2: 'Cliquez sur Créer le modèle (cliquez sur Charger l’exemple pour le préréglage revue de code).',
	tool_prompt_template_builder_how_item_3: 'Passez en JSON si vous avez besoin de {role,task,constraints,output} pour le code ou la config.',
	tool_prompt_template_builder_how_item_4: 'Copiez ou téléchargez, puis collez dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_prompt_template_builder_how_title: 'Comment ça marche',
	tool_prompt_template_builder_load_sample: 'Charger l’exemple',
	tool_prompt_template_builder_output_fmt_label: 'Format de sortie',
	tool_prompt_template_builder_output_fmt_ph: 'Sections Markdown, forme JSON, liste…',
	tool_prompt_template_builder_platforms_lead:
		'Conçu pour ChatGPT, Gemini, Claude et DeepSeek — copiez le modèle terminé dans l’une de ces interfaces de chat.',
	tool_prompt_template_builder_result_label: 'Modèle',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Qui le modèle doit incarner…',
	tool_prompt_template_builder_rules_body:
		'Un modèle réutilisable exige des blocs clairs, un ordre de priorité entre les champs et de dire franchement ce que cette page ne fait pas.',
	tool_prompt_template_builder_rules_item_1:
		'Quatre blocs : Role, Task, Constraints, Output. Les vides sont omis du Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Les champs explicites l’emportent sur le texte libre parsé.',
	tool_prompt_template_builder_rules_item_3: 'Sortie par défaut : Markdown avec ##. JSON est une puce sur la même page.',
	tool_prompt_template_builder_rules_item_4:
		'Les puces scène préremplissent les champs habituels du cinéma, du drame court et du code mobile ; vous pouvez ensuite tout retoucher à la main.',
	tool_prompt_template_builder_rules_title: 'Règles attendues',
	tool_prompt_template_builder_scene_android: 'Code Android',
	tool_prompt_template_builder_scene_code: 'Revue de code',
	tool_prompt_template_builder_scene_ios: 'Code iOS',
	tool_prompt_template_builder_scene_label: 'Preset scène',
	tool_prompt_template_builder_scene_movie: 'Long-métrage',
	tool_prompt_template_builder_scene_short_drama: 'Drame court',
	tool_prompt_template_builder_sec_constraints: 'Contraintes',
	tool_prompt_template_builder_sec_output: 'Format de sortie',
	tool_prompt_template_builder_sec_role: 'Rôle',
	tool_prompt_template_builder_sec_task: 'Tâche',
	tool_prompt_template_builder_status_copied: 'Copié dans le presse-papiers.',
	tool_prompt_template_builder_status_done: 'Modèle prêt.',
	tool_prompt_template_builder_status_working: 'Création du modèle…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Quoi faire étape par étape…',
	tool_prompt_template_builder_title:
		'Générateur de modèles de Prompt — Local + IA optionnelle',
	tool_prompt_template_builder_usecase_1:
		'Publiez un system prompt Agent de revue de code que l’équipe peut coller dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_prompt_template_builder_usecase_2:
		'Transformez des notes de réunion en blocs Role/Task/Constraints avant de brancher l’API de n’importe quel fournisseur de chat.',
	tool_prompt_template_builder_usecase_3:
		'Exportez du JSON puis ouvrez le validateur JSON Schema pour vérifier les fichiers de config downstream.',
	tool_prompt_template_builder_usecase_4:
		'Chargez la puce Film pour une fiche de beats en trois actes à coller dans votre UI de chat préférée.',
	tool_prompt_template_builder_usecase_5:
		'Chargez Drame court pour accroches et cliffhangers de série verticale — épisodes mobiles style binge.',
	tool_prompt_template_builder_usecase_6:
		'Chargez Android ou iOS pour des modèles d’agent de code aux conventions Kotlin/Swift, puis ajoutez le style de votre équipe.',
	tool_prompt_template_builder_usecases_title: 'Bonnes situations',
};

export default fr;
