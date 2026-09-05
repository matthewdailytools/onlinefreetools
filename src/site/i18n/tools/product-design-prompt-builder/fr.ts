/**
 * i18n tool shard (product-design-prompt-builder / fr).
 * Recherches locales : « générateur de prompt design produit », « prompt pour brief UX ». Terme principal dans le H1 ; termes secondaires (persona, périmètre du wireframe, design tokens, WCAG AA, export JSON) dans la description, la FAQ et les cas d’usage.
 * Limites réelles : assemblage dans le navigateur sans requête ; Développer/Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile, quota) et la réponse remplace toute la zone de résultat.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_product_design_prompt_builder_article:
		'Mettez une demande de design produit sous forme de prompt prêt à coller : décrivez le persona, le problème, le périmètre du wireframe et les design tokens ; la page assemble le texte en Markdown ou en JSON directement dans le navigateur. Par défaut aucune requête ne part ; seul un clic sur Développer ou Peaufiner transmet le brouillon en cours à Cloudflare Workers AI (Turnstile requis, usage plafonné).',
	tool_product_design_prompt_builder_build:
		'Générer le prompt',
	tool_product_design_prompt_builder_clear:
		'Effacer',
	tool_product_design_prompt_builder_copy:
		'Copier',
	tool_product_design_prompt_builder_desc:
		'Générateur de prompts de design produit : renseignez le persona, le problème, le périmètre du wireframe et les design tokens ; le texte est assemblé dans le navigateur en Markdown ou JSON, IA en option.',
	tool_product_design_prompt_builder_description:
		'Générateur de prompts de design produit : décrivez le persona, le problème, le périmètre du wireframe (combien d’écrans et lesquels) et les design tokens (grille, couleur principale, contraste), et la page les range en blocs Role / Task / Constraints / Output, en Markdown ou en JSON, sans quitter le navigateur. Exemple : « parents en garde alternée qui veulent voir la semaine des relais » devient un périmètre de trois écrans avec grille de 8 pt et contraste WCAG AA. Charger l’exemple remplit le préréglage et monte le prompt ; Développer ou Peaufiner via Cloudflare Workers AI reste optionnel (Turnstile, quota).',
	tool_product_design_prompt_builder_download:
		'Télécharger',
	tool_product_design_prompt_builder_empty:
		'Renseignez au moins un champ avant de générer.',
	tool_product_design_prompt_builder_example:
		'Entrée : Persona = parents en garde alternée à la semaine, l’un planifie, l’autre récupère les enfants, mélange Android et iPhone ; Problème = agendas trop chargés, besoin de voir la semaine des relais d’un coup avec des notes, sans obliger à lier les comptes ; Wireframe = bandeau hebdomadaire avec légende de garde, feuille de détail avec check-list de relais, invitation par SMS (3 écrans) ; Tokens = grille de 8 pt, principale #2563eb, #059669 pour les relais confirmés, contraste WCAG AA sur les légendes. Sortie (Markdown) : ## Role définit un coach de prompts UX pour briefs de wireframe et ## Task reprend une ligne par champ.',
	tool_product_design_prompt_builder_example_title:
		'Exemple',
	tool_product_design_prompt_builder_faq_a1:
		'Par défaut, non. Remplir les champs et cliquer sur Générer le prompt se passe uniquement dans cet onglet, sans requête. Le brouillon ne part que si vous cliquez sur Développer ou Peaufiner, et il va alors vers Cloudflare Workers AI ; nos serveurs ne le relaient pas vers OpenAI, Google, Anthropic ou DeepSeek.',
	tool_product_design_prompt_builder_faq_a2:
		'Non. Le mode local se contente de mettre vos champs en forme dans les blocs Role / Task / Constraints / Output. L’IA optionnelle passe par Cloudflare Workers AI après Turnstile, pas par les API de ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_product_design_prompt_builder_faq_a3:
		'Le générateur de modèles de prompts fournit les quatre blocs génériques Role / Task / Constraints / Output, valables pour n’importe quel sujet. Ici les champs sont ceux d’un brief UX : persona, problème, nombre d’écrans couverts par le wireframe, design tokens et contraste à respecter, avec un exemple et des limites propres à ce cas.',
	tool_product_design_prompt_builder_faq_a4:
		'Oui. Validez le widget Turnstile du panneau IA avant de cliquer sur Développer ou Peaufiner. Sans jeton valide, les boutons renvoient une erreur et le mode local reste utilisable.',
	tool_product_design_prompt_builder_faq_a5:
		'Oui. Passez le format de sortie sur JSON : vous récupérez chaque champ séparément plus le prompt assemblé, pratique pour l’archiver dans un référentiel d’exigences ou un modèle de revue de design.',
	tool_product_design_prompt_builder_faq_a6:
		'Oui. Le résultat est du texte brut : copiez-le puis collez-le dans ChatGPT, Gemini, Claude ou DeepSeek. La page n’appelle pas ces API à votre place.',
	tool_product_design_prompt_builder_faq_q1:
		'Ce que je saisis est-il envoyé quelque part ?',
	tool_product_design_prompt_builder_faq_q2:
		'La page appelle-t-elle l’API de ChatGPT ou d’un autre modèle ?',
	tool_product_design_prompt_builder_faq_q3:
		'Quelle différence avec le générateur de modèles de prompts ?',
	tool_product_design_prompt_builder_faq_q4:
		'Pourquoi l’IA optionnelle demande-t-elle Turnstile ?',
	tool_product_design_prompt_builder_faq_q5:
		'Puis-je exporter en JSON ?',
	tool_product_design_prompt_builder_faq_q6:
		'Est-ce utilisable avec ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_product_design_prompt_builder_faq_q7:
		'Qu’est-ce qui change entre le mode local et l’IA Cloudflare ?',
	tool_product_design_prompt_builder_faq_a7:
		'Le mode local se limite à ranger vos champs : aucune requête, aucun quota. Développer ou Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile obligatoire, usage limité) et le texte renvoyé remplace entièrement la zone de résultat — relisez-le avant de copier. En cas d’échec ou de quota atteint, restez en mode local.',
	tool_product_design_prompt_builder_ai_expand:
		'Développer avec l’IA',
	tool_product_design_prompt_builder_ai_polish:
		'Peaufiner avec l’IA',
	tool_product_design_prompt_builder_ai_panel_label:
		'IA Cloudflare en option (Turnstile)',
	tool_product_design_prompt_builder_ai_consent_title:
		'Envoyer le brouillon à Cloudflare Workers AI ?',
	tool_product_design_prompt_builder_ai_consent_body:
		'Étape optionnelle : votre brouillon actuel est envoyé à Cloudflare Workers AI pour l’inférence. Nos serveurs ne le transmettent pas à OpenAI, Google, Anthropic ni DeepSeek. Sans IA, l’assemblage dans le navigateur fonctionne toujours.',
	tool_product_design_prompt_builder_ai_consent_ok:
		'Continuer',
	tool_product_design_prompt_builder_ai_consent_cancel:
		'Annuler',
	tool_product_design_prompt_builder_ai_working:
		'Cloudflare AI travaille…',
	tool_product_design_prompt_builder_ai_done:
		'Le texte de l’IA a remplacé le résultat. Relisez avant de copier.',
	tool_product_design_prompt_builder_ai_err_generic:
		'Échec de l’IA ; le résultat est inchangé.',
	tool_product_design_prompt_builder_ai_err_rate:
		'Quota d’IA atteint. Restez en local ou revenez demain (UTC).',
	tool_product_design_prompt_builder_ai_err_turnstile:
		'Validez Turnstile avant d’utiliser l’IA.',
	tool_product_design_prompt_builder_fmt_json:
		'JSON',
	tool_product_design_prompt_builder_fmt_label:
		'Format de sortie',
	tool_product_design_prompt_builder_fmt_md:
		'Markdown',
	tool_product_design_prompt_builder_persona_label:
		'Persona / Profil utilisateur',
	tool_product_design_prompt_builder_persona_ph:
		'Ex. : parents en garde alternée à la semaine…',
	tool_product_design_prompt_builder_problem_label:
		'Problème à résoudre',
	tool_product_design_prompt_builder_problem_ph:
		'Ex. : agendas trop chargés, voir la semaine d’un coup…',
	tool_product_design_prompt_builder_wireframe_scope_label:
		'Wireframe / Périmètre',
	tool_product_design_prompt_builder_wireframe_scope_ph:
		'Ex. : bandeau hebdo, feuille de détail, invitation SMS…',
	tool_product_design_prompt_builder_design_tokens_label:
		'Design / Tokens visuels',
	tool_product_design_prompt_builder_design_tokens_ph:
		'Ex. : grille de 8 pt, principale #2563eb, WCAG AA…',
	tool_product_design_prompt_builder_how_body:
		'Remplissez les quatre champs, laissez la page assembler le Markdown (ou le JSON) dans le navigateur, puis demandez si besoin un développement à Cloudflare AI avant de coller le prompt dans votre chat.',
	tool_product_design_prompt_builder_how_item_1:
		'Cliquez sur Charger l’exemple : le préréglage se remplit et un prompt est monté, partez de là.',
	tool_product_design_prompt_builder_how_item_2:
		'Modifiez persona, problème, périmètre du wireframe et design tokens puis cliquez sur Générer le prompt ; basculez en JSON pour exporter les champs.',
	tool_product_design_prompt_builder_how_item_3:
		'Facultatif : validez Turnstile puis cliquez sur Développer ou Peaufiner — le texte de l’IA occupe alors la zone de résultat.',
	tool_product_design_prompt_builder_how_item_4:
		'Copiez ou téléchargez le résultat, puis collez-le dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_product_design_prompt_builder_how_title:
		'Mode d’emploi',
	tool_product_design_prompt_builder_load_sample:
		'Charger l’exemple',
	tool_product_design_prompt_builder_platforms_lead:
		'Le prompt final est du texte brut : il se colle tel quel dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_product_design_prompt_builder_result_label:
		'Prompt produit',
	tool_product_design_prompt_builder_rules_body:
		'La page se limite à mettre la demande en forme : elle ne dessine pas de wireframe et n’exporte pas de fichier Figma. L’IA optionnelle est plafonnée et exige Turnstile.',
	tool_product_design_prompt_builder_rules_item_1:
		'Chaque champ alimente un bloc distinct du Markdown : Role, Task, Constraints, Output.',
	tool_product_design_prompt_builder_rules_item_2:
		'La sortie par défaut est Markdown ; la même zone peut afficher le JSON avec les champs et le prompt assemblé.',
	tool_product_design_prompt_builder_rules_item_3:
		'L’IA Cloudflare ne remplace pas le mode local : sa réponse occupe toute la zone de résultat, relisez-la avant de copier.',
	tool_product_design_prompt_builder_rules_item_4:
		'L’outil assemble seulement du texte : il ne génère pas d’écrans, ne lit pas vos fichiers de design et n’appelle pas les API de chat pour vous.',
	tool_product_design_prompt_builder_rules_title:
		'Limites à connaître',
	tool_product_design_prompt_builder_sec_constraints:
		'Constraints',
	tool_product_design_prompt_builder_sec_output:
		'Output',
	tool_product_design_prompt_builder_sec_role:
		'Role',
	tool_product_design_prompt_builder_sec_task:
		'Task',
	tool_product_design_prompt_builder_status_copied:
		'Copié dans le presse-papiers.',
	tool_product_design_prompt_builder_status_done:
		'Prompt prêt.',
	tool_product_design_prompt_builder_status_working:
		'Assemblage du prompt…',
	tool_product_design_prompt_builder_title:
		'Générateur de prompts de design produit — local, avec IA en option',
	tool_product_design_prompt_builder_usecase_1:
		'Reprendre l’objectif de design exposé en réunion de cadrage sous forme de prompt collable dans le chat de l’équipe.',
	tool_product_design_prompt_builder_usecase_2:
		'Exporter le JSON pour archiver persona et tokens dans un référentiel d’exigences, puis développer via Cloudflare AI si nécessaire.',
	tool_product_design_prompt_builder_usecase_3:
		'Si les champs UX sont inutiles et qu’un modèle générique à quatre blocs suffit, passez au générateur de modèles de prompts.',
	tool_product_design_prompt_builder_usecase_4:
		'Rédiger dans le navigateur une idée de produit non encore publiée, puis décider si elle part vers l’IA optionnelle.',
	tool_product_design_prompt_builder_usecases_title:
		'Quand c’est utile',
};

export default fr;
