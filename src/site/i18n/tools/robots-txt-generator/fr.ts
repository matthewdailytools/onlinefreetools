/**
 * i18n tool shard (robots-txt-generator / fr).
 * French locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_robots_home_title: 'Générateur de robots.txt',
	tool_robots_home_desc:
		'Contrôlez ce que les moteurs de recherche peuvent explorer avec un robots.txt valide : autorisations, blocages et robots d’IA, dans votre navigateur.',
	tool_robots_title: 'Générateur de robots.txt — gérez autorisations et blocages des robots d’IA',
	tool_robots_description:
		'Un mauvais robots.txt peut cacher le site. Créez Allow, Disallow et règles IA dans le navigateur, puis copiez. Exemple : bloquer GPTBot, garder Googlebot.',
	tool_robots_generate: 'Générer',
	tool_robots_sample: 'Exemple',
	tool_robots_clear: 'Effacer',
	tool_robots_copy: 'Copier',
	tool_robots_copied: 'Copié',
	tool_robots_agents_label: 'User-agents',
	tool_robots_agents_hint: 'Cochez les robots à inclure, puis ajoutez des chemins pour chaque groupe.',
	tool_robots_include: 'Inclure ce user-agent',
	tool_robots_agent_add: 'Ajouter un agent personnalisé',
	tool_robots_agent_remove: 'Retirer l’agent',
	tool_robots_allow_label: 'Chemins Allow (un par ligne)',
	tool_robots_disallow_label: 'Chemins Disallow (un par ligne)',
	tool_robots_sitemap_label: 'URL de Sitemap (facultatif)',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'Télécharger',
	tool_robots_empty_agent: 'Choisissez ou ajoutez d’abord un user-agent.',
	tool_robots_owner_of: 'Propriétaire : {owner}',
	tool_robots_how_title: 'Comment ça marche',
	tool_robots_how_body:
		'Sélectionnez les robots ciblés, ajoutez des chemins Allow et Disallow pour chaque groupe, éventuellement une ligne Sitemap, puis cliquez sur Générer. La page assemble le fichier en texte brut selon le format RFC 9309 : une ligne User-agent par groupe, ses lignes Allow/Disallow dessous, une ligne vide entre les groupes et la ligne Sitemap à la fin. Copiez le résultat à la racine de votre site dans /robots.txt.',
	tool_robots_how_item_1: 'Cochez ou ajoutez les user-agents à contrôler.',
	tool_robots_how_item_2: 'Saisissez les chemins Allow et Disallow pour chaque groupe (un chemin par ligne).',
	tool_robots_how_item_3: 'Ajoutez éventuellement une URL Sitemap.',
	tool_robots_how_item_4: 'Cliquez sur Générer, puis copiez ou téléchargez robots.txt.',
	tool_robots_rules_title: 'Règles de syntaxe importantes',
	tool_robots_rules_body:
		'Les règles de robots.txt sont des préfixes de chemin, pas des motifs, et un robot n’applique qu’un seul groupe : celui dont le User-agent le désigne le plus précisément. Voici les règles suivies par ce générateur.',
	tool_robots_rules_item_1:
		'Choix du groupe : un robot obéit au groupe dont le User-agent lui correspond le plus précisément — son propre nom l’emporte sur *, et l’ordre dans le fichier ne tranche rien. Plusieurs lignes User-agent portant le même robot sont fusionnées en un seul groupe (RFC 9309).',
	tool_robots_rules_item_2:
		'Correspondance par préfixe : Allow et Disallow correspondent à des préfixes de chemin, pas à des sous-chaînes ni des regex. Seuls * et $ sont spéciaux (RFC 9309).',
	tool_robots_rules_item_3:
		'Priorité des règles dans un groupe : le chemin correspondant le plus long l’emporte, et à longueur égale entre un Allow et un Disallow, c’est Allow qui gagne. Ainsi Disallow: /admin/ avec Allow: /admin/public/ laisse le sous-dossier public explorable.',
	tool_robots_rules_item_4:
		'Site entier et ligne Sitemap : Disallow: / bloque cet agent sur toutes les URL, tandis qu’un Disallow à valeur vide autorise tout. Sitemap: est une extension hors RFC 9309, insensible à la casse et acceptée n’importe où — ce générateur la place en dernier.',
	tool_robots_example_title: 'Exemple',
	tool_robots_example:
		'Exemple : Googlebot avec Allow: / (entièrement actif), GPTBot avec Disallow: / (bloqué) et une ligne Sitemap pointant vers /sitemap.xml. La sortie reflète ce format : un groupe par robot, ligne vide entre les groupes, sitemap en dernier.',
	tool_robots_usecases_title: 'Quand l’utiliser',
	tool_robots_usecase_1:
		'Sites neufs : générez un robots.txt de départ qui garde les moteurs actifs et masque des chemins de staging privés.',
	tool_robots_usecase_2:
		'Contrôle des robots d’IA : donnez à GPTBot, ClaudeBot, Google-Extended, CCBot ou PerplexityBot leur propre groupe Disallow pendant que Googlebot continue d’explorer. Google-Extended couvre Gemini et l’ancrage Vertex AI ; les AI Overviews de la recherche passent toujours par Googlebot.',
	tool_robots_usecase_3:
		'Découverte : associez robots.txt à une ligne Sitemap pour que les robots trouvent votre sitemap.',
	tool_robots_faq_q1: 'Que se passe-t-il si j’écris Disallow: / ?',
	tool_robots_faq_a1:
		'Cela dit à ce robot de ne récupérer aucune URL sous la racine du site. Si Googlebot reçoit Disallow: /, vos pages peuvent disparaître de la recherche Google. Disallow bloque l’exploration, pas l’indexation : une URL bloquée mais citée par des liens externes peut encore être listée, sans extrait. Pour la faire vraiment disparaître, laissez la page explorable et ajoutez-y noindex. Pour un chemin de staging, utilisez plutôt Disallow: /private/.',
	tool_robots_faq_q2: 'Comment bloquer les robots d’IA comme GPTBot ?',
	tool_robots_faq_a2:
		'Créez un groupe avec le User-agent du robot (par exemple GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot) et ajoutez Disallow: /. Consultez la documentation officielle du robot, car les robots d’IA mettent régulièrement à jour leurs user-agents et plages IP.',
	tool_robots_faq_q3: 'Où doit se trouver la ligne Sitemap ?',
	tool_robots_faq_a3:
		'La position n’affecte pas la façon dont les moteurs la lisent, mais la convention la place à la fin du fichier. Le générateur l’ajoute en dernier lorsque vous fournissez une URL.',
	tool_robots_faq_q4: 'Mon robots.txt est-il envoyé quelque part ?',
	tool_robots_faq_a4:
		'Non. Le fichier est généré dans votre navigateur et n’est jamais envoyé à un serveur. Fermez l’onglet et rien n’est conservé.',
	tool_robots_references: 'RFC 9309 Protocole d’exclusion des robots ; Google Search Central — robots.txt ; Google Search Central — Gérer les robots d’IA.',
	tool_robots_ref_rfc_label: 'RFC 9309 — Protocole d’exclusion des robots',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — Robots d’IA',
};

export default fr;
