/**
 * i18n tool shard (prompt-template-builder / fr).
 * Master H1: générateur de modèles de Prompt; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Transformez un brouillon de prompt en modèle réutilisable Role / Task / Constraints / Output sur cette page. Collez du texte libre ou remplissez les champs, puis copiez Markdown ou JSON dans ChatGPT, Gemini, Claude ou DeepSeek. Aucun appel à une API de modèle. Le texte reste sur l’appareil et n’est pas envoyé au serveur.',
	tool_prompt_template_builder_build: 'Créer le modèle',
	tool_prompt_template_builder_clear: 'Effacer',
	tool_prompt_template_builder_constraints_label: 'Contraintes',
	tool_prompt_template_builder_constraints_ph: 'Limites de ton, périmètre, à éviter…',
	tool_prompt_template_builder_copy: 'Copier',
	tool_prompt_template_builder_desc:
		'Générateur de modèles de Prompt — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_prompt_template_builder_description:
		'Processus et exemple : Générateur de modèles de Prompt — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_prompt_template_builder_download: 'Télécharger',
	tool_prompt_template_builder_empty: 'Ajoutez du texte libre ou au moins un champ avant de créer.',
	tool_prompt_template_builder_example:
		'Charger l’exemple remplit le preset Agent de revue de code, génère Markdown avec quatre sections ## et active Copier et Télécharger. Essayez les puces Film, Drame court, Android ou iOS pour d’autres valeurs par défaut.',
	tool_prompt_template_builder_example_title: 'Exemple',
	tool_prompt_template_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_prompt_template_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown transforme des exports de chat en fichiers lisibles. Ici vous structurez un system prompt réutilisable — utilisez les deux après archivage puis affinage.',
	tool_prompt_template_builder_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_prompt_template_builder_faq_a5:
		'Les lignes commençant par Role:, Task:, Constraints: ou Output: dans le champ libre deviennent des sections. Les champs explicites priment.',
	tool_prompt_template_builder_faq_a6:
		'Oui. Copiez le modèle créé dans ChatGPT, Gemini, Claude ou DeepSeek — la même structure à quatre champs fonctionne dans chaque UI de chat. Nous ne maintenons pas d’URL séparées par plateforme car le travail est de formater du texte, pas d’appeler des APIs.',
	tool_prompt_template_builder_faq_q1: 'Mon prompt est-il envoyé ?',
	tool_prompt_template_builder_faq_q2: 'Est-ce qu’un LLM est appelé ?',
	tool_prompt_template_builder_faq_q3: 'Différence avec l’export ChatGPT vers Markdown ?',
	tool_prompt_template_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_prompt_template_builder_faq_q5: 'Comment fonctionne l’analyse du texte libre ?',
	tool_prompt_template_builder_faq_q6: 'Puis-je l’utiliser avec ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_prompt_template_builder_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_prompt_template_builder_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_prompt_template_builder_ai_expand:
		'Expandir con IA',
	tool_prompt_template_builder_ai_polish:
		'Pulir con IA',
	tool_prompt_template_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_prompt_template_builder_ai_consent_ok:
		'Continuar',
	tool_prompt_template_builder_ai_consent_cancel:
		'Cancelar',
	tool_prompt_template_builder_ai_working:
		'Cloudflare AI trabajando…',
	tool_prompt_template_builder_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_prompt_template_builder_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_prompt_template_builder_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Format de sortie',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt libre (optionnel)',
	tool_prompt_template_builder_free_ph: 'Collez un brouillon ou des lignes Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Choisissez une puce scène ou rédigez votre brouillon, remplissez Role / Task / Constraints / Output, créez le modèle, puis collez dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Choisissez Revue de code, Film, Drame court, Android ou iOS — ou collez votre brouillon dans le champ libre.',
	tool_prompt_template_builder_how_item_2: 'Cliquez sur Créer le modèle (Charger l’exemple a déjà exécuté le preset revue de code à l’ouverture).',
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
		'Un modèle réutilisable exige des blocs clairs, une priorité des champs et des limites honnêtes — pas un second produit générateur.',
	tool_prompt_template_builder_rules_item_1:
		'Quatre blocs : Role, Task, Constraints, Output. Les vides sont omis du Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Les champs explicites l’emportent sur le texte libre parsé.',
	tool_prompt_template_builder_rules_item_3: 'Sortie par défaut : Markdown avec ##. JSON est une puce sur la même page.',
	tool_prompt_template_builder_rules_item_4:
		'Les puces scène préremplissent les champs pour cinéma, drame court et code mobile — même générateur, sans URL séparées par plateforme.',
	tool_prompt_template_builder_rules_title: 'Règles attendues',
	tool_prompt_template_builder_scene_android: 'Code Android',
	tool_prompt_template_builder_scene_code: 'Revue de code',
	tool_prompt_template_builder_scene_ios: 'Code iOS',
	tool_prompt_template_builder_scene_label: 'Preset scène',
	tool_prompt_template_builder_scene_movie: 'Long-métrage',
	tool_prompt_template_builder_scene_short_drama: 'Drame court',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
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
		'Chargez Android ou iOS pour des modèles d’agent de code Kotlin/Swift sans ouvrir quatre pages spécifiques par plateforme.',
	tool_prompt_template_builder_usecases_title: 'Bonnes situations',
};

export default fr;
