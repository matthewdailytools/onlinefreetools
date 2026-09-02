/**
 * i18n tool shard (sketch-prompt-generator / fr).
 * H1: Générateur de prompts Sketch.app (logiciel design Mac, pas croquis crayon).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'Composez des prompts prêts à coller pour que ChatGPT, Gemini, Claude ou DeepSeek guident l’usage de Sketch.app — planches, Symbols, styles partagés et export. Remplissez les champs, copiez Markdown ou JSON. L’assemblage local reste dans le navigateur ; Expand/Polish optionnel passe par Cloudflare Workers AI avec Turnstile. Le texte reste sur l’appareil sauf si vous activez l’IA.',
	tool_sketch_prompt_generator_build: 'Générer le prompt',
	tool_sketch_prompt_generator_clear: 'Effacer',
	tool_sketch_prompt_generator_copy: 'Copier',
	tool_sketch_prompt_generator_desc:
		'Générateur de prompts Sketch.app — local par défaut + Expand/Polish Cloudflare AI optionnel (Turnstile) ; Markdown/JSON sur l’appareil.',
	tool_sketch_prompt_generator_description:
		'Générateur de prompts Sketch.app — Local + IA optionnelle pour ChatGPT, Gemini, Claude et DeepSeek : assemblez des prompts structurés pour les étapes Sketch.app (planches, Symbols, export) dans le navigateur ; Expand/Polish optionnel via Cloudflare Workers AI (Turnstile, quota). Exemple au chargement. Markdown par défaut ; JSON pour pipelines. Texte local sauf IA.',
	tool_sketch_prompt_generator_download: 'Télécharger',
	tool_sketch_prompt_generator_empty: 'Remplissez au moins un champ avant de générer.',
	tool_sketch_prompt_generator_example:
		'Entrée : Objectif = écran de connexion dans Sketch.app ; Planches = iPhone 14 390×844 ; Symbols = Button/Primary + Input ; Export = PNG 1x/2x/3x + PDF. Sortie (Markdown) : ## Role → assistant Sketch.app ; ## Task → checklist numérotée.',
	tool_sketch_prompt_generator_example_title: 'Exemple',
	tool_sketch_prompt_generator_faq_a1:
		'L’assemblage local s’exécute dans cet onglet — rien n’est envoyé par défaut. Expand/Polish optionnel n’envoie que le texte de ce clic à Cloudflare Workers AI, pas à OpenAI, Google, Anthropic ou DeepSeek depuis nos serveurs.',
	tool_sketch_prompt_generator_faq_a2:
		'Le mode local ne fait que formater. Expand/Polish utilise Cloudflare Workers AI après Turnstile — pas d’API chat ni de contrôle distant de Sketch.app.',
	tool_sketch_prompt_generator_faq_a3:
		'Le constructeur de modèles Prompt couvre des modèles génériques. Cette page vise Sketch.app : objectif, planches, Symbols/styles, export.',
	tool_sketch_prompt_generator_faq_a4:
		'Non. Midjourney vise des styles d’image raster. Ici le prompt guide Sketch.app (logiciel design Mac). Pour un croquis crayon / line-art, utilisez la page Midjourney.',
	tool_sketch_prompt_generator_faq_a5:
		'Oui. Complétez Turnstile dans le panneau IA avant Expand ou Polish. Sans jeton, les boutons IA échouent ; le local reste disponible.',
	tool_sketch_prompt_generator_faq_a6: 'Oui. La pastille JSON émet les champs structurés plus le prompt assemblé.',
	tool_sketch_prompt_generator_faq_a7:
		'Oui. Collez le prompt dans ChatGPT, Gemini, Claude ou DeepSeek pour qu’ils guident les menus Sketch.app. Nous formatons du texte seulement ; Sketch n’est pas exécuté ici.',
	tool_sketch_prompt_generator_faq_a8:
		'Local = formatage dans l’onglet sans envoi. Expand/Polish = Cloudflare Workers AI (quota + Turnstile). En cas d’échec, restez en local.',
	tool_sketch_prompt_generator_faq_q1: 'Mon prompt est-il envoyé ?',
	tool_sketch_prompt_generator_faq_q2: 'Cela appelle-t-il ChatGPT ou contrôle Sketch.app à distance ?',
	tool_sketch_prompt_generator_faq_q3: 'Différence avec le constructeur de modèles Prompt ?',
	tool_sketch_prompt_generator_faq_q4: 'Est-ce pour croquis crayon ou prompts Midjourney ?',
	tool_sketch_prompt_generator_faq_q5: 'Pourquoi Turnstile pour l’IA optionnelle ?',
	tool_sketch_prompt_generator_faq_q6: 'Puis-je obtenir du JSON ?',
	tool_sketch_prompt_generator_faq_q7: 'Compatible ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_sketch_prompt_generator_faq_q8: 'Différence entre local et IA Cloudflare optionnelle ?',
	tool_sketch_prompt_generator_ai_expand: 'Enrichir avec l’IA',
	tool_sketch_prompt_generator_ai_polish: 'Peaufiner avec l’IA',
	tool_sketch_prompt_generator_ai_panel_label: 'IA Cloudflare optionnelle (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title: 'Envoyer le texte à Cloudflare Workers AI ?',
	tool_sketch_prompt_generator_ai_consent_body:
		'Cette étape optionnelle envoie le brouillon à Cloudflare Workers AI. Pas d’envoi vers OpenAI, Google, Anthropic ou DeepSeek depuis nos serveurs. L’assemblage local fonctionne sans IA.',
	tool_sketch_prompt_generator_ai_consent_ok: 'Continuer',
	tool_sketch_prompt_generator_ai_consent_cancel: 'Annuler',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI en cours…',
	tool_sketch_prompt_generator_ai_done: 'Suggestion IA appliquée. Vérifiez avant de copier.',
	tool_sketch_prompt_generator_ai_err_generic: 'Échec IA. Le prompt local est inchangé.',
	tool_sketch_prompt_generator_ai_err_rate: 'Quota IA atteint. Mode local ou réessayez demain (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile: 'Complétez Turnstile avant d’utiliser l’IA.',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: 'Format de sortie',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: 'Objectif / livrable',
	tool_sketch_prompt_generator_goal_ph: 'ex. écran de connexion dans Sketch.app…',
	tool_sketch_prompt_generator_artboard_label: 'Planches / pages',
	tool_sketch_prompt_generator_artboard_ph: 'ex. iPhone 14 390×844, Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'Symbols / styles / bibliothèques',
	tool_sketch_prompt_generator_symbols_ph: 'ex. Button/Primary, Shared Styles…',
	tool_sketch_prompt_generator_export_label: 'Export / remise',
	tool_sketch_prompt_generator_export_ph: 'ex. PNG 1x/2x/3x, revue PDF…',
	tool_sketch_prompt_generator_how_body:
		'Remplissez les champs Sketch.app, générez le prompt en local, optionnellement Enrichir/Peaufiner avec Turnstile, puis collez dans le chat pour guider Sketch.app.',
	tool_sketch_prompt_generator_how_item_1: 'À l’ouverture, l’exemple d’écran de connexion Sketch.app est déjà chargé.',
	tool_sketch_prompt_generator_how_item_2: 'Modifiez Objectif, Planches, Symbols et Export, puis Générer le prompt (ou JSON).',
	tool_sketch_prompt_generator_how_item_3: 'Optionnel : Turnstile, puis Enrichir ou Peaufiner via Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4: 'Copiez ou téléchargez, collez dans le chat et suivez la checklist Sketch.app.',
	tool_sketch_prompt_generator_how_title: 'Fonctionnement',
	tool_sketch_prompt_generator_load_sample: 'Charger l’exemple',
	tool_sketch_prompt_generator_platforms_lead:
		'Conçu pour ChatGPT, Gemini, Claude et DeepSeek — copiez le prompt pour faire coacher les opérations Sketch.app.',
	tool_sketch_prompt_generator_result_label: 'Sortie du prompt',
	tool_sketch_prompt_generator_rules_body:
		'Les champs correspondent au travail Sketch.app. Local par défaut ; IA optionnelle avec Turnstile et quota. Cette page n’ouvre pas Sketch.app.',
	tool_sketch_prompt_generator_rules_item_1: 'Les champs structurés deviennent Role/Task/Constraints/Output en Markdown.',
	tool_sketch_prompt_generator_rules_item_2: 'Markdown par défaut ; JSON sur le même canevas.',
	tool_sketch_prompt_generator_rules_item_3: 'L’IA optionnelle ne remplace pas le local — vérifiez avant de copier.',
	tool_sketch_prompt_generator_rules_item_4:
		'Assemblage texte uniquement ; pas d’exécution locale de Sketch.app, plugins, Midjourney ou API chat.',
	tool_sketch_prompt_generator_rules_title: 'Règles attendues',
	tool_sketch_prompt_generator_sec_constraints: 'Contraintes',
	tool_sketch_prompt_generator_sec_output: 'Format de sortie',
	tool_sketch_prompt_generator_sec_role: 'Rôle',
	tool_sketch_prompt_generator_sec_task: 'Tâche',
	tool_sketch_prompt_generator_status_copied: 'Copié dans le presse-papiers.',
	tool_sketch_prompt_generator_status_done: 'Prompt prêt.',
	tool_sketch_prompt_generator_status_working: 'Génération du prompt…',
	tool_sketch_prompt_generator_title: 'Générateur de prompts Sketch.app — Local + IA optionnelle',
	tool_sketch_prompt_generator_usecase_1:
		'Passer tailles de planches et noms de Symbols au chat d’équipe pour reconstruire un écran dans Sketch.app.',
	tool_sketch_prompt_generator_usecase_2: 'Préparer checklists d’export (PNG, PDF) avant la QA design.',
	tool_sketch_prompt_generator_usecase_3:
		'Comparer avec Product design prompt builder si vous voulez persona/wireframe plutôt que menus Sketch.app.',
	tool_sketch_prompt_generator_usecase_4: 'Garder les brouillons sensibles en local — activer l’IA seulement après consentement.',
	tool_sketch_prompt_generator_usecases_title: 'Bons cas d’usage',
};

export default fr;
