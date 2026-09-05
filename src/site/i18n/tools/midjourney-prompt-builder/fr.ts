/**
 * i18n tool shard (midjourney-prompt-builder / fr).
 * Réécrit pour qui cherche « générateur de prompt Midjourney » ou « comment écrire un prompt Midjourney » :
 * le terme principal est dans le H1 ; « paramètre --ar », « exporter le prompt en JSON » et
 * « prompt pour ChatGPT » sont placés dans la description, la FAQ et les cas d’usage.
 * Limites réelles : le prompt est assemblé dans le navigateur ; seuls Développer/Peaufiner envoient le brouillon
 * à Cloudflare Workers AI (Turnstile et quota) ; cette page ne produit pas d’image et n’appelle pas Midjourney.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Assemblez ici votre prompt Midjourney avant de le lancer : renseignez le sujet, le style, la lumière, le format et les paramètres, la page les met en forme en Markdown ou en JSON dans le navigateur, prêt à coller dans ChatGPT, Gemini, Claude ou DeepSeek. Cette page ne produit que du texte : elle ne génère pas d’image et n’appelle pas Midjourney. Par défaut rien n’est envoyé ; si vous cliquez sur Développer ou Peaufiner, le brouillon part vers Cloudflare Workers AI après le contrôle Turnstile.',
	tool_midjourney_prompt_builder_build:
		'Générer le prompt',
	tool_midjourney_prompt_builder_clear:
		'Vider',
	tool_midjourney_prompt_builder_copy:
		'Copier',
	tool_midjourney_prompt_builder_desc:
		'Générateur de prompt Midjourney : renseignez sujet, style, lumière et format, la page assemble en Markdown ou JSON ; IA Cloudflare en option avec Turnstile.',
	tool_midjourney_prompt_builder_description:
		'Générateur de prompt Midjourney : vous écrivez le sujet, le style, la lumière, le format et les paramètres, la page en fait une ligne prête à coller, avec --ar déduit du format et --v 6.1 ajouté quand aucune version n’est indiquée. Markdown par défaut, JSON pour vos scripts ; l’exemple du samouraï sur le pont a déjà tourné à l’ouverture. S’il manque du détail, Développer ou Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile, quota). Du texte seulement : aucune image n’est produite ici.',
	tool_midjourney_prompt_builder_download:
		'Télécharger',
	tool_midjourney_prompt_builder_empty:
		'Renseignez au moins un champ avant de générer le prompt.',
	tool_midjourney_prompt_builder_example:
		'Entrée : sujet = samouraï dégainant sur un pont moussu, brume de pluie, torii au loin ; style = encre cinématographique, bleu-vert et charbon, grain fin ; lumière = contre-jour d’aube, brouillard volumétrique ; format = 16:9 ; paramètres = --v 6.1 --style raw --stylize 120 --chaos 8. Sortie (Markdown) : le bloc ## Task contient la ligne Midjourney avec sujet, style et lumière, terminée par --ar 16:9. En JSON, les mêmes données arrivent sous forme de champs.',
	tool_midjourney_prompt_builder_example_title:
		'Exemple',
	tool_midjourney_prompt_builder_faq_a1:
		'L’assemblage se fait dans cet onglet du navigateur : par défaut, rien ne part. C’est seulement quand vous cliquez sur Développer ou Peaufiner que le brouillon en cours est envoyé à Cloudflare Workers AI ; nous ne le transmettons pas depuis nos serveurs à OpenAI, Google, Anthropic ni DeepSeek.',
	tool_midjourney_prompt_builder_faq_a2:
		'En mode local, aucun modèle n’est appelé : la page range simplement vos champs dans les blocs Role, Task, Constraints et Output. Développer et Peaufiner passent par Cloudflare Workers AI après le contrôle Turnstile, sans appeler les API de ChatGPT, Gemini, Claude ou DeepSeek depuis nos serveurs.',
	tool_midjourney_prompt_builder_faq_a3:
		'Le générateur de modèles de prompt fournit la trame générique en quatre blocs, valable pour n’importe quel sujet. Ici, les champs sont déjà ceux de Midjourney — sujet, style, lumière, format, paramètres — avec un exemple chargé à l’ouverture et un tableau de correspondance propre à ce cas.',
	tool_midjourney_prompt_builder_faq_a4:
		'Turnstile bloque les scripts automatiques pour que le quota gratuit reste aux personnes réelles. Validez-le dans le panneau IA avant Développer ou Peaufiner ; sans jeton valide, ces boutons renvoient une erreur et l’assemblage dans le navigateur continue de fonctionner.',
	tool_midjourney_prompt_builder_faq_a5:
		'Oui. En passant sur JSON, la même sortie donne les champs structurés et le prompt déjà assemblé, utilisable pour une série d’images, un test ou un fichier de configuration.',
	tool_midjourney_prompt_builder_faq_a6:
		'Oui. Copiez le résultat et collez-le dans la conversation de votre choix, ou directement dans Midjourney. Cette page se contente de mettre le texte en forme, sans appeler d’API : il n’y a donc pas une adresse différente par plateforme.',
	tool_midjourney_prompt_builder_faq_q1:
		'Ce que je saisis est-il envoyé quelque part ?',
	tool_midjourney_prompt_builder_faq_q2:
		'Cette page appelle-t-elle l’API de ChatGPT ou d’un autre modèle ?',
	tool_midjourney_prompt_builder_faq_q3:
		'Quelle différence avec le générateur de modèles de prompt ?',
	tool_midjourney_prompt_builder_faq_q4:
		'Pourquoi faut-il passer Turnstile pour utiliser l’IA ?',
	tool_midjourney_prompt_builder_faq_q5:
		'Puis-je obtenir la sortie en JSON ?',
	tool_midjourney_prompt_builder_faq_q6:
		'Est-ce utilisable avec ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_midjourney_prompt_builder_faq_q7:
		'Quelle différence entre le mode local et l’IA Cloudflare optionnelle ?',
	tool_midjourney_prompt_builder_faq_a7:
		'En local, tout est assemblé dans cet onglet, sans quitter le navigateur. Développer ou Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile requis, limites de fréquence et quota journalier) et le texte renvoyé est écrit en entier dans la sortie, par-dessus le brouillon affiché : relisez-le avant de copier. En cas d’échec ou de quota épuisé, restez en mode local.',
	tool_midjourney_prompt_builder_ai_expand:
		'Développer avec l’IA',
	tool_midjourney_prompt_builder_ai_polish:
		'Peaufiner avec l’IA',
	tool_midjourney_prompt_builder_ai_panel_label:
		'Facultatif : Cloudflare AI (Turnstile requis)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'Envoyer le brouillon à Cloudflare Workers AI ?',
	tool_midjourney_prompt_builder_ai_consent_body:
		'Cette étape est facultative : elle envoie le brouillon actuellement dans les champs à Cloudflare Workers AI pour une inférence. Nous ne le transmettons pas depuis nos serveurs à OpenAI, Google, Anthropic ni DeepSeek. Sans l’IA, le prompt continue d’être assemblé dans votre navigateur.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'Continuer',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'Annuler',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI travaille…',
	tool_midjourney_prompt_builder_ai_done:
		'Le texte de l’IA a été écrit en entier dans la sortie. Relisez-le avant de copier.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'L’IA n’a pas répondu cette fois ; la sortie est inchangée.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'Quota IA épuisé. Continuez à assembler ici ou réessayez demain (UTC).',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'Validez le contrôle Turnstile avant d’utiliser l’IA.',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'Format de sortie',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'Sujet',
	tool_midjourney_prompt_builder_subject_ph:
		'Par exemple : samouraï dégainant sur un pont…',
	tool_midjourney_prompt_builder_style_label:
		'Style',
	tool_midjourney_prompt_builder_style_ph:
		'Par exemple : encre cinématographique, tons charbon…',
	tool_midjourney_prompt_builder_lighting_label:
		'Lumière',
	tool_midjourney_prompt_builder_lighting_ph:
		'Par exemple : contre-jour d’aube, brouillard…',
	tool_midjourney_prompt_builder_aspect_label:
		'Format',
	tool_midjourney_prompt_builder_aspect_ph:
		'Par exemple 16:9, 9:16 ou 1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'Paramètres MJ',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'Par exemple --v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Correspondance des paramètres Midjourney',
	tool_midjourney_prompt_builder_rules_table_ar:
		'Format → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'Version MJ → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'Un format saisi devient --ar en fin de ligne ; si les paramètres ne contiennent pas de version, --v 6.1 est ajouté.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 carré',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 paysage',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 portrait',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'Version MJ v6 par défaut',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'Remplissez les champs, générez le prompt, puis collez-le dans ChatGPT, Gemini, Claude ou DeepSeek ; s’il manque du détail, passez par Développer ou Peaufiner avec l’IA Cloudflare facultative.',
	tool_midjourney_prompt_builder_how_item_1:
		'Cliquez sur Charger un exemple pour le préréglage par défaut.',
	tool_midjourney_prompt_builder_how_item_2:
		'Modifiez sujet, style, lumière, format et paramètres puis cliquez sur Générer le prompt ; basculez sur JSON pour un export structuré.',
	tool_midjourney_prompt_builder_how_item_3:
		'Facultatif : validez Turnstile dans le panneau IA puis cliquez sur Développer ou Peaufiner ; le texte renvoyé s’écrit dans la sortie.',
	tool_midjourney_prompt_builder_how_item_4:
		'Copiez ou téléchargez, puis collez dans ChatGPT, Gemini, Claude ou DeepSeek pour affiner, ou directement dans Midjourney.',
	tool_midjourney_prompt_builder_how_title:
		'Comment ça marche',
	tool_midjourney_prompt_builder_load_sample:
		'Charger l’exemple',
	tool_midjourney_prompt_builder_platforms_lead:
		'La sortie se colle telle quelle dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_midjourney_prompt_builder_result_label:
		'Prompt généré',
	tool_midjourney_prompt_builder_rules_body:
		'Comment les paramètres sont traduits : le format devient --ar et, sans version indiquée, --v 6.1 est ajouté. L’assemblage dans le navigateur est le comportement par défaut ; l’IA facultative est limitée en usage et demande Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'Chaque champ du formulaire se range dans l’un des blocs Role, Task, Constraints et Output du Markdown.',
	tool_midjourney_prompt_builder_rules_item_2:
		'L’export par défaut est Markdown ; JSON est un bouton au-dessus de la même sortie.',
	tool_midjourney_prompt_builder_rules_item_3:
		'L’IA facultative est une étape en plus, pas un remplacement : le mode local reste disponible et le texte de l’IA remplace entièrement le contenu de la sortie, donc relisez avant de copier.',
	tool_midjourney_prompt_builder_rules_item_4:
		'Cette page assemble seulement du texte : pas de génération d’image, pas d’appel à Midjourney ni à une API de chat.',
	tool_midjourney_prompt_builder_rules_title:
		'Ce qu’elle fait et ne fait pas',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'Copié dans le presse-papiers.',
	tool_midjourney_prompt_builder_status_done:
		'Prompt prêt.',
	tool_midjourney_prompt_builder_status_working:
		'Génération du prompt…',
	tool_midjourney_prompt_builder_title:
		'Générateur de prompt Midjourney — dans le navigateur, IA en option',
	tool_midjourney_prompt_builder_usecase_1:
		'Préparer un prompt Midjourney prêt à coller dans la conversation de l’équipe, sans dicter les paramètres message par message.',
	tool_midjourney_prompt_builder_usecase_2:
		'Exporter le JSON avant une série d’images et garder sujet, style et format comme champs dans votre script ou votre tableur.',
	tool_midjourney_prompt_builder_usecase_3:
		'Si vous cherchez la trame générique en quatre blocs plutôt qu’une image, utilisez le générateur de modèles de prompt.',
	tool_midjourney_prompt_builder_usecase_4:
		'Pour un brouillon de projet encore confidentiel, restez en mode local : le texte ne quitte le navigateur que si vous acceptez l’avertissement de l’IA.',
	tool_midjourney_prompt_builder_usecases_title:
		'Quand c’est utile',
};

export default fr;
