/**
 * i18n tool shard (film-prompt-builder / fr).
 * Réécrit pour qui cherche « générateur de prompt pour scénario de film » ou « structure en trois actes avec l’IA » :
 * le terme principal est dans le H1 ; « séquencier », « arc du personnage » et « export JSON » sont placés dans
 * la description, la FAQ et les cas d’usage.
 * Limites réelles : le prompt est assemblé dans le navigateur ; seuls Développer/Peaufiner envoient le brouillon
 * à Cloudflare Workers AI (Turnstile, quota). Cette page n’écrit pas le scénario à votre place.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_film_prompt_builder_article:
		'Renseignez le pitch, les trois actes, le séquencier et l’arc du personnage : la page les met en ordre dans le navigateur et renvoie un prompt clairement structuré, en Markdown ou en JSON, prêt à coller dans ChatGPT, Gemini, Claude ou DeepSeek pour continuer le scénario là-bas. Par défaut rien n’est envoyé ; le brouillon ne part vers Cloudflare Workers AI que si vous cliquez sur Développer ou Peaufiner, après le contrôle Turnstile.',
	tool_film_prompt_builder_build:
		'Générer le prompt',
	tool_film_prompt_builder_clear:
		'Vider',
	tool_film_prompt_builder_copy:
		'Copier',
	tool_film_prompt_builder_desc:
		'Générateur de prompt pour scénario de film : pitch, trois actes et séquencier mis en ordre en Markdown ou JSON dans le navigateur ; IA Cloudflare en option avec Turnstile.',
	tool_film_prompt_builder_description:
		'Générateur de prompt pour scénario de film : vous remplissez le pitch, les actes I à III, le séquencier et l’arc du personnage, et la page les répartit dans les blocs Role, Task, Constraints et Output pour que ChatGPT, Gemini, Claude ou DeepSeek sachent par où continuer. Markdown par défaut, JSON pour votre suivi de versions ; l’exemple des deux food trucks qui partagent une cuisine pendant 30 jours a déjà tourné à l’ouverture. Si un acte reste maigre, Développer ou Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile, quota).',
	tool_film_prompt_builder_download:
		'Télécharger',
	tool_film_prompt_builder_empty:
		'Renseignez au moins un champ avant de générer le prompt.',
	tool_film_prompt_builder_example:
		'Entrée : pitch = une erreur d’autorisation municipale force deux patrons de food trucks rivaux à partager la même cuisine pendant 30 jours ; acte II = le succès du festival déraille quand un blogueur attribue la recette au mauvais camp et qu’une vieille querelle familiale d’épices s’étale sur les réseaux ; séquencier = six séquences numérotées ; arc = orgueil → collaboration à contrecœur → associés qui négocient. Sortie (Markdown) : le bloc ## Task énumère Logline, Act1–3, Scene / List et Character / Arc, comme l’exemple chargé à l’ouverture.',
	tool_film_prompt_builder_example_title:
		'Exemple',
	tool_film_prompt_builder_faq_a1:
		'La mise en ordre se fait dans cet onglet du navigateur : par défaut, rien ne part. C’est seulement quand vous cliquez sur Développer ou Peaufiner que le brouillon en cours est envoyé à Cloudflare Workers AI ; nous ne le transmettons pas depuis nos serveurs à OpenAI, Google, Anthropic ni DeepSeek.',
	tool_film_prompt_builder_faq_a2:
		'En mode local, aucun modèle n’est appelé : le pitch, les actes, le séquencier et l’arc sont seulement répartis dans les blocs Role, Task, Constraints et Output. Développer et Peaufiner passent par Cloudflare Workers AI après le contrôle Turnstile, sans appeler les API de ChatGPT, Gemini, Claude ou DeepSeek depuis nos serveurs.',
	tool_film_prompt_builder_faq_a3:
		'Le générateur de modèles de prompt fournit la trame générique en quatre blocs, quel que soit le sujet. Ici les champs sont ceux d’un long métrage — pitch, trois actes, séquencier, arc — avec un exemple complet à l’ouverture et des règles centrées sur les pièges propres à ce type de document.',
	tool_film_prompt_builder_faq_a4:
		'Turnstile bloque les scripts automatiques pour que le quota gratuit reste aux personnes réelles. Validez-le dans le panneau IA avant Développer ou Peaufiner ; sans jeton valide, ces boutons renvoient une erreur et l’assemblage dans le navigateur continue de fonctionner.',
	tool_film_prompt_builder_faq_a5:
		'Oui. En passant sur JSON, la même sortie donne les champs structurés et le prompt déjà assemblé — pratique pour conserver chaque version des actes et du séquencier dans un tableur ou votre dépôt, puis les comparer.',
	tool_film_prompt_builder_faq_a6:
		'Oui. Copiez le résultat et collez-le dans la conversation de votre choix. Cette page se contente d’organiser la structure, sans appeler d’API : il n’y a donc pas une adresse différente par plateforme.',
	tool_film_prompt_builder_faq_q1:
		'Le matériel de scénario que je saisis est-il envoyé quelque part ?',
	tool_film_prompt_builder_faq_q2:
		'Cette page appelle-t-elle l’API de ChatGPT ou d’un autre modèle ?',
	tool_film_prompt_builder_faq_q3:
		'Quelle différence avec le générateur de modèles de prompt ?',
	tool_film_prompt_builder_faq_q4:
		'Pourquoi faut-il passer Turnstile pour utiliser l’IA ?',
	tool_film_prompt_builder_faq_q5:
		'Puis-je obtenir la sortie en JSON ?',
	tool_film_prompt_builder_faq_q6:
		'Est-ce utilisable avec ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_film_prompt_builder_faq_q7:
		'Quelle différence entre le mode local et l’IA Cloudflare optionnelle ?',
	tool_film_prompt_builder_faq_a7:
		'En local, tout est mis en ordre dans cet onglet, sans quitter le navigateur. Développer ou Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile requis, limites de fréquence et quota journalier) et le texte renvoyé est écrit en entier dans la sortie, par-dessus le brouillon affiché : relisez-le avant de copier pour qu’une réécriture ne remplace pas votre version des actes. En cas d’échec ou de quota épuisé, restez en mode local.',
	tool_film_prompt_builder_ai_expand:
		'Développer avec l’IA',
	tool_film_prompt_builder_ai_polish:
		'Peaufiner avec l’IA',
	tool_film_prompt_builder_ai_panel_label:
		'Facultatif : Cloudflare AI (Turnstile requis)',
	tool_film_prompt_builder_ai_consent_title:
		'Envoyer le brouillon à Cloudflare Workers AI ?',
	tool_film_prompt_builder_ai_consent_body:
		'Cette étape est facultative : elle envoie le brouillon actuellement dans les champs à Cloudflare Workers AI pour une inférence. Nous ne le transmettons pas depuis nos serveurs à OpenAI, Google, Anthropic ni DeepSeek. Sans l’IA, le prompt continue d’être assemblé dans votre navigateur.',
	tool_film_prompt_builder_ai_consent_ok:
		'Continuer',
	tool_film_prompt_builder_ai_consent_cancel:
		'Annuler',
	tool_film_prompt_builder_ai_working:
		'Cloudflare AI travaille…',
	tool_film_prompt_builder_ai_done:
		'Le texte de l’IA a été écrit en entier dans la sortie. Relisez-le avant de copier.',
	tool_film_prompt_builder_ai_err_generic:
		'L’IA n’a pas répondu cette fois ; la sortie est inchangée.',
	tool_film_prompt_builder_ai_err_rate:
		'Quota IA épuisé. Continuez à assembler ici ou réessayez demain (UTC).',
	tool_film_prompt_builder_ai_err_turnstile:
		'Validez le contrôle Turnstile avant d’utiliser l’IA.',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'Format de sortie',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'Pitch',
	tool_film_prompt_builder_logline_ph:
		'Par exemple : deux food trucks rivaux partagent une cuisine…',
	tool_film_prompt_builder_act1_label:
		'Acte I',
	tool_film_prompt_builder_act1_ph:
		'Par exemple : d’où vient le conflit et ce qui force à l’accepter…',
	tool_film_prompt_builder_act2_label:
		'Acte II',
	tool_film_prompt_builder_act2_ph:
		'Par exemple : un succès bref, puis tout dérape…',
	tool_film_prompt_builder_act3_label:
		'Acte III',
	tool_film_prompt_builder_act3_ph:
		'Par exemple : affrontement final et accord qui coûte cher…',
	tool_film_prompt_builder_scene_list_label:
		'Séquencier',
	tool_film_prompt_builder_scene_list_ph:
		'Par exemple : 1. Bagarre pour la place 2. Double contrôle…',
	tool_film_prompt_builder_character_arc_label:
		'Arc du personnage',
	tool_film_prompt_builder_character_arc_ph:
		'Par exemple : orgueil → coopérer à contrecœur → associés…',

	tool_film_prompt_builder_how_body:
		'Remplissez pitch, actes et séquencier, générez le prompt et collez-le dans ChatGPT, Gemini, Claude ou DeepSeek pour continuer d’écrire ; si un acte reste sec, passez par Développer ou Peaufiner avec l’IA Cloudflare facultative.',
	tool_film_prompt_builder_how_item_1:
		'Cliquez sur Charger un exemple pour le préréglage par défaut.',
	tool_film_prompt_builder_how_item_2:
		'Modifiez pitch, actes, séquencier et arc du personnage puis cliquez sur Générer le prompt ; basculez sur JSON pour un export structuré.',
	tool_film_prompt_builder_how_item_3:
		'Facultatif : validez Turnstile dans le panneau IA puis cliquez sur Développer ou Peaufiner ; le texte renvoyé s’écrit dans la sortie.',
	tool_film_prompt_builder_how_item_4:
		'Copiez ou téléchargez, puis collez dans ChatGPT, Gemini, Claude ou DeepSeek pour que le modèle poursuive selon cette structure.',
	tool_film_prompt_builder_how_title:
		'Comment ça marche',
	tool_film_prompt_builder_load_sample:
		'Charger l’exemple',
	tool_film_prompt_builder_platforms_lead:
		'La sortie se colle telle quelle dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_film_prompt_builder_result_label:
		'Prompt généré',
	tool_film_prompt_builder_rules_body:
		'L’organisation suit la façon de travailler un long métrage : le pitch fixe la direction, les trois actes le parcours, le séquencier numérote les séquences et l’arc explique ce qui change chez le personnage. L’assemblage dans le navigateur est le comportement par défaut ; l’IA facultative est limitée en usage et demande Turnstile.',
	tool_film_prompt_builder_rules_item_1:
		'Chaque champ du formulaire se range dans l’un des blocs Role, Task, Constraints et Output du Markdown.',
	tool_film_prompt_builder_rules_item_2:
		'L’export par défaut est Markdown ; JSON est un bouton au-dessus de la même sortie.',
	tool_film_prompt_builder_rules_item_3:
		'L’IA facultative est une étape en plus, pas un remplacement : le mode local reste disponible et le texte de l’IA remplace entièrement le contenu de la sortie, donc relisez avant de copier.',
	tool_film_prompt_builder_rules_item_4:
		'Cette page assemble seulement du texte : elle n’écrit pas le scénario à votre place et n’exécute aucun modèle ni API de chat dans votre navigateur.',
	tool_film_prompt_builder_rules_title:
		'Ce qu’elle fait et ne fait pas',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'Copié dans le presse-papiers.',
	tool_film_prompt_builder_status_done:
		'Prompt prêt.',
	tool_film_prompt_builder_status_working:
		'Génération du prompt…',
	tool_film_prompt_builder_title:
		'Générateur de prompt pour scénario de film — trois actes et séquencier dans le navigateur',
	tool_film_prompt_builder_usecase_1:
		'Avant une réunion, réunir les trois actes et le séquencier dans un prompt qui se colle directement dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_film_prompt_builder_usecase_2:
		'Exporter le JSON et garder pitch, actes et arc de chaque version comme champs dans un tableur ou votre dépôt pour les comparer.',
	tool_film_prompt_builder_usecase_3:
		'Si vous cherchez la trame générique en quatre blocs plutôt que la structure d’un long métrage, utilisez le générateur de modèles de prompt.',
	tool_film_prompt_builder_usecase_4:
		'Sur un projet encore non signé, restez en mode local : le texte ne quitte le navigateur que si vous acceptez l’avertissement de l’IA.',
	tool_film_prompt_builder_usecases_title:
		'Quand c’est utile',
};

export default fr;
