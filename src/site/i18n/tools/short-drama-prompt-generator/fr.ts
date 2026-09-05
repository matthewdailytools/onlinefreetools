/**
 * i18n tool shard (short-drama-prompt-generator / fr).
 * Réécrit pour qui cherche « générateur de prompt pour série courte verticale » ou « accroche par épisode avec l’IA » :
 * le terme principal est dans le H1 ; « cliffhanger de fin d’épisode », « format 9:16 avec sous-titres incrustés »
 * et « export JSON » sont placés dans la description, la FAQ et les cas d’usage.
 * Limites réelles : le prompt est assemblé dans le navigateur ; seuls Développer/Peaufiner envoient le brouillon
 * à Cloudflare Workers AI (Turnstile, quota). Aucune vidéo n’est produite ici.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Indiquez le nombre d’épisodes et leur durée, l’accroche d’ouverture, le cliffhanger qui referme chaque épisode, le format vertical et le genre : la page met tout en ordre dans le navigateur et renvoie un prompt directement exploitable, en Markdown ou en JSON, à coller dans ChatGPT, Gemini, Claude ou DeepSeek pour écrire épisode par épisode. Par défaut rien n’est envoyé ; le brouillon ne part vers Cloudflare Workers AI que si vous cliquez sur Développer ou Peaufiner, après Turnstile. Ici on produit du texte, pas de la vidéo.',
	tool_short_drama_prompt_generator_build:
		'Générer le prompt',
	tool_short_drama_prompt_generator_clear:
		'Vider',
	tool_short_drama_prompt_generator_copy:
		'Copier',
	tool_short_drama_prompt_generator_desc:
		'Générateur de prompt pour série courte verticale : épisodes, accroche, cliffhanger et format 9:16 mis en ordre en Markdown ou JSON dans le navigateur ; IA Cloudflare en option avec Turnstile.',
	tool_short_drama_prompt_generator_description:
		'Générateur de prompt pour série courte verticale : vous renseignez le nombre et la durée des épisodes, l’accroche des deux premières secondes, le cliffhanger de chaque fin, le format vertical et le genre, et la page les répartit dans les blocs Role, Task, Constraints et Output pour que ChatGPT, Gemini, Claude ou DeepSeek écrivent au rythme des épisodes. Markdown par défaut, JSON pour votre tableau d’épisodes ; l’exemple 12 × 75 s avec un secret professionnel a déjà tourné à l’ouverture. Si une accroche reste molle, Développer ou Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile, quota).',
	tool_short_drama_prompt_generator_download:
		'Télécharger',
	tool_short_drama_prompt_generator_empty:
		'Renseignez au moins un champ avant de générer le prompt.',
	tool_short_drama_prompt_generator_example:
		'Entrée : épisodes = 12 × 75 s ; accroche = une stagiaire révèle une fuite sur les salaires et le patron reconnaît sa voix dans un message vocal de dix ans plus tôt à propos d’une garde d’enfant ; cliffhanger = l’épisode 6 se termine sur le patron qui supprime le message en pleine écoute, l’épisode 7 ouvre sur un face-à-face muet dans l’ascenseur ; format = 9:16, sous-titres incrustés, ouverture qui arrête le pouce dans les deux premières secondes. Sortie (Markdown) : le bloc ## Task énumère Episodes, Hook, Cliffhanger, Vertical / Format et Genre pour une série verticale.',
	tool_short_drama_prompt_generator_example_title:
		'Exemple',
	tool_short_drama_prompt_generator_faq_a1:
		'La mise en ordre se fait dans cet onglet du navigateur : par défaut, rien ne part. C’est seulement quand vous cliquez sur Développer ou Peaufiner que le brouillon en cours est envoyé à Cloudflare Workers AI ; nous ne le transmettons pas depuis nos serveurs à OpenAI, Google, Anthropic ni DeepSeek.',
	tool_short_drama_prompt_generator_faq_a2:
		'En mode local, aucun modèle n’est appelé : les épisodes, l’accroche, le cliffhanger, le format et le genre sont seulement répartis dans les blocs Role, Task, Constraints et Output. Développer et Peaufiner passent par Cloudflare Workers AI après le contrôle Turnstile, sans appeler les API de ChatGPT, Gemini, Claude ou DeepSeek depuis nos serveurs.',
	tool_short_drama_prompt_generator_faq_a3:
		'Le générateur de modèles de prompt fournit la trame générique en quatre blocs, quel que soit le sujet. Ici les champs sont ceux d’une série verticale — épisodes et durée, accroche, cliffhanger, format, genre — avec un exemple complet à l’ouverture et des règles centrées sur ce qui rate dans la consommation par épisodes.',
	tool_short_drama_prompt_generator_faq_a4:
		'Turnstile bloque les scripts automatiques pour que le quota gratuit reste aux personnes réelles. Validez-le dans le panneau IA avant Développer ou Peaufiner ; sans jeton valide, ces boutons renvoient une erreur et l’assemblage dans le navigateur continue de fonctionner.',
	tool_short_drama_prompt_generator_faq_a5:
		'Oui. En passant sur JSON, la même sortie donne les champs structurés et le prompt déjà assemblé — pratique pour consigner chaque épisode dans un tableau et vérifier que les accroches et les cliffhangers ne se répètent pas.',
	tool_short_drama_prompt_generator_faq_a6:
		'Oui. Copiez le résultat et collez-le dans la conversation de votre choix. Cette page se contente d’organiser le découpage par épisodes, sans appeler d’API : il n’y a donc pas une adresse différente par plateforme.',
	tool_short_drama_prompt_generator_faq_q1:
		'L’intrigue que je saisis est-elle envoyée quelque part ?',
	tool_short_drama_prompt_generator_faq_q2:
		'Cette page appelle-t-elle l’API de ChatGPT ou d’un autre modèle ?',
	tool_short_drama_prompt_generator_faq_q3:
		'Quelle différence avec le générateur de modèles de prompt ?',
	tool_short_drama_prompt_generator_faq_q4:
		'Pourquoi faut-il passer Turnstile pour utiliser l’IA ?',
	tool_short_drama_prompt_generator_faq_q5:
		'Puis-je obtenir la sortie en JSON ?',
	tool_short_drama_prompt_generator_faq_q6:
		'Est-ce utilisable avec ChatGPT, Gemini, Claude ou DeepSeek ?',
	tool_short_drama_prompt_generator_faq_q7:
		'Quelle différence entre le mode local et l’IA Cloudflare optionnelle ?',
	tool_short_drama_prompt_generator_faq_a7:
		'En local, tout est mis en ordre dans cet onglet, sans quitter le navigateur. Développer ou Peaufiner envoie le brouillon à Cloudflare Workers AI (Turnstile requis, limites de fréquence et quota journalier) et le texte renvoyé est écrit en entier dans la sortie, par-dessus le brouillon affiché : relisez-le avant de copier pour qu’une réécriture ne bouscule pas votre enchaînement de cliffhangers. En cas d’échec ou de quota épuisé, restez en mode local.',
	tool_short_drama_prompt_generator_ai_expand:
		'Développer avec l’IA',
	tool_short_drama_prompt_generator_ai_polish:
		'Peaufiner avec l’IA',
	tool_short_drama_prompt_generator_ai_panel_label:
		'Facultatif : Cloudflare AI (Turnstile requis)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'Envoyer le brouillon à Cloudflare Workers AI ?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'Cette étape est facultative : elle envoie le brouillon actuellement dans les champs à Cloudflare Workers AI pour une inférence. Nous ne le transmettons pas depuis nos serveurs à OpenAI, Google, Anthropic ni DeepSeek. Sans l’IA, le prompt continue d’être assemblé dans votre navigateur.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Continuer',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Annuler',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI travaille…',
	tool_short_drama_prompt_generator_ai_done:
		'Le texte de l’IA a été écrit en entier dans la sortie. Relisez-le avant de copier.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'L’IA n’a pas répondu cette fois ; la sortie est inchangée.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'Quota IA épuisé. Continuez à assembler ici ou réessayez demain (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Validez le contrôle Turnstile avant d’utiliser l’IA.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'Format de sortie',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Épisodes et durée',
	tool_short_drama_prompt_generator_episodes_ph:
		'Par exemple : 12 × 75 s…',
	tool_short_drama_prompt_generator_hook_label:
		'Accroche d’ouverture',
	tool_short_drama_prompt_generator_hook_ph:
		'Par exemple : une stagiaire révèle une fuite sur les salaires…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Cliffhanger de fin d’épisode',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Par exemple : l’épisode 6 finit sur la suppression du message…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Format vertical',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Par exemple : 9:16, sous-titres incrustés, accroche en 2 s…',
	tool_short_drama_prompt_generator_genre_label:
		'Genre',
	tool_short_drama_prompt_generator_genre_ph:
		'Par exemple : mélodrame de bureau avec secret de famille…',

	tool_short_drama_prompt_generator_how_body:
		'Remplissez épisodes, accroche et cliffhanger, générez le prompt et collez-le dans ChatGPT, Gemini, Claude ou DeepSeek pour écrire épisode par épisode ; si une accroche reste molle, passez par Développer ou Peaufiner avec l’IA Cloudflare facultative.',
	tool_short_drama_prompt_generator_how_item_1:
		'Cliquez sur Charger un exemple pour le préréglage par défaut.',
	tool_short_drama_prompt_generator_how_item_2:
		'Modifiez épisodes et durée, accroche, cliffhanger, format vertical et genre puis cliquez sur Générer le prompt ; basculez sur JSON pour un export structuré.',
	tool_short_drama_prompt_generator_how_item_3:
		'Facultatif : validez Turnstile dans le panneau IA puis cliquez sur Développer ou Peaufiner ; le texte renvoyé s’écrit dans la sortie.',
	tool_short_drama_prompt_generator_how_item_4:
		'Copiez ou téléchargez, puis collez dans ChatGPT, Gemini, Claude ou DeepSeek pour que le modèle poursuive selon ce découpage.',
	tool_short_drama_prompt_generator_how_title:
		'Comment ça marche',
	tool_short_drama_prompt_generator_load_sample:
		'Charger l’exemple',
	tool_short_drama_prompt_generator_platforms_lead:
		'La sortie se colle telle quelle dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_short_drama_prompt_generator_result_label:
		'Prompt généré',
	tool_short_drama_prompt_generator_rules_body:
		'L’organisation suit le rythme de la consommation verticale : le nombre et la durée des épisodes fixent la capacité, l’accroche décide si le pouce s’arrête dans les deux premières secondes, le cliffhanger pousse vers l’épisode suivant, et le format précise le cadre et les sous-titres. L’assemblage dans le navigateur est le comportement par défaut ; l’IA facultative est limitée en usage et demande Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'Chaque champ du formulaire se range dans l’un des blocs Role, Task, Constraints et Output du Markdown.',
	tool_short_drama_prompt_generator_rules_item_2:
		'L’export par défaut est Markdown ; JSON est un bouton au-dessus de la même sortie.',
	tool_short_drama_prompt_generator_rules_item_3:
		'L’IA facultative est une étape en plus, pas un remplacement : le mode local reste disponible et le texte de l’IA remplace entièrement le contenu de la sortie, donc relisez avant de copier.',
	tool_short_drama_prompt_generator_rules_item_4:
		'Cette page assemble seulement du texte : elle ne produit pas de vidéo et n’exécute aucun modèle ni API de chat dans votre navigateur.',
	tool_short_drama_prompt_generator_rules_title:
		'Ce qu’elle fait et ne fait pas',
	tool_short_drama_prompt_generator_sec_constraints:
		'Constraints',
	tool_short_drama_prompt_generator_sec_output:
		'Output',
	tool_short_drama_prompt_generator_sec_role:
		'Role',
	tool_short_drama_prompt_generator_sec_task:
		'Task',
	tool_short_drama_prompt_generator_status_copied:
		'Copié dans le presse-papiers.',
	tool_short_drama_prompt_generator_status_done:
		'Prompt prêt.',
	tool_short_drama_prompt_generator_status_working:
		'Génération du prompt…',
	tool_short_drama_prompt_generator_title:
		'Générateur de prompt pour série courte verticale — accroches et cliffhangers dans le navigateur',
	tool_short_drama_prompt_generator_usecase_1:
		'Avant une réunion, réunir les épisodes, l’accroche et les cliffhangers dans un prompt qui se colle directement dans ChatGPT, Gemini, Claude ou DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'Exporter le JSON et garder l’accroche et le cliffhanger de chaque épisode comme champs dans un tableau, pour repérer les procédés qui reviennent.',
	tool_short_drama_prompt_generator_usecase_3:
		'Si vous cherchez la trame générique en quatre blocs plutôt que les champs d’une série verticale, utilisez le générateur de modèles de prompt.',
	tool_short_drama_prompt_generator_usecase_4:
		'Sur un projet non encore diffusé, restez en mode local : le texte ne quitte le navigateur que si vous acceptez l’avertissement de l’IA.',
	tool_short_drama_prompt_generator_usecases_title:
		'Quand c’est utile',
};

export default fr;
