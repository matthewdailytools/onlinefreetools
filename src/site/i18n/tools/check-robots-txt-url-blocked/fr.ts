/**
 * Fragment i18n (check-robots-txt-url-blocked / fr).
 * Scène : coller une URL → Worker récupère /robots.txt → indiquer si le chemin est bloqué.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'Vérifier une URL robots.txt',
	tool_check_robots_txt_url_blocked_home_desc:
		'Collez l’URL d’une page pour voir si robots.txt bloque ce chemin pour Googlebot ou d’autres bots.',
	tool_check_robots_txt_url_blocked_desc:
		'Collez l’URL d’une page pour voir si robots.txt bloque ce chemin pour Googlebot ou d’autres bots.',
	tool_check_robots_txt_url_blocked_title: 'Vérifier si une URL est bloquée par robots.txt',
	tool_check_robots_txt_url_blocked_description:
		'Collez une URL et testez en ligne si robots.txt bloque ce chemin pour Googlebot, *, Bingbot ou GPTBot. Fetch edge + règle correspondante. Ex. : /admin Inclut un processus, des étapes et un exemple sur la page.',
	tool_check_robots_txt_url_blocked_url_label: 'URL de la page',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'Agent',
	tool_check_robots_txt_url_blocked_check: 'Vérifier',
	tool_check_robots_txt_url_blocked_sample: 'Exemple',
	tool_check_robots_txt_url_blocked_clear: 'Effacer',
	tool_check_robots_txt_url_blocked_running: 'Récupération de robots.txt…',
	tool_check_robots_txt_url_blocked_url_error: 'Saisissez une URL http(s) valide avec le chemin concerné.',
	tool_check_robots_txt_url_blocked_error_prefix: 'Erreur : ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'Impossible de récupérer robots.txt. L’hôte peut être hors ligne ou refuser les bots.',
	tool_check_robots_txt_url_blocked_privacy_note:
		'L’URL et le nom d’hôte sont envoyés à notre Worker pour récupérer /robots.txt. Nous ne les conservons pas comme base produit.',
	tool_check_robots_txt_url_blocked_result_allowed_yes: 'Autorisée',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'Bloquée',
	tool_check_robots_txt_url_blocked_result_matched: 'Règle correspondante',
	tool_check_robots_txt_url_blocked_result_matched_none: 'Aucun Allow/Disallow (traité comme autorisé)',
	tool_check_robots_txt_url_blocked_result_http_status: 'Statut HTTP de robots.txt',
	tool_check_robots_txt_url_blocked_result_path: 'Chemin évalué',
	tool_check_robots_txt_url_blocked_result_ua: 'Agent utilisé',
	tool_check_robots_txt_url_blocked_result_robots_url: 'URL robots.txt',
	tool_check_robots_txt_url_blocked_result_group: 'Groupe User-agent',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'Pas de corps robots.txt (absent ou page HTML d’erreur). Traité comme tout autoriser.',
	tool_check_robots_txt_url_blocked_result_preview: 'Aperçu robots.txt',
	tool_check_robots_txt_url_blocked_how_title: 'Fonctionnement',
	tool_check_robots_txt_url_blocked_how_body:
		'Indique si, pour le crawler choisi, robots.txt autorise ou bloque ce chemin. Seul /robots.txt est récupéré, pas le corps de la page.',
	tool_check_robots_txt_url_blocked_how_item_1: 'Collez l’URL complète (le chemin compte, pas seulement le domaine).',
	tool_check_robots_txt_url_blocked_how_item_2: 'Choisissez l’agent (Googlebot par défaut ; aussi *, Bingbot ou GPTBot).',
	tool_check_robots_txt_url_blocked_how_item_3: 'Cliquez sur Vérifier et attendez que le Worker récupère /robots.txt.',
	tool_check_robots_txt_url_blocked_how_item_4: 'Lisez Autorisée/Bloquée, la ligne correspondante et le statut HTTP.',
	tool_check_robots_txt_url_blocked_how_item_5: 'Consultez l’aperçu pour confirmer le groupe appliqué si besoin.',
	tool_check_robots_txt_url_blocked_formula_title: 'Règles de correspondance',
	tool_check_robots_txt_url_blocked_formula_body:
		'Pratique courante alignée sur la doc Google et la RFC 9309 : plus long préfixe ; Allow prime sur Disallow à longueur égale.',
	tool_check_robots_txt_url_blocked_formula_item_1: 'On prend le groupe User-agent correspondant, sinon le groupe *.',
	tool_check_robots_txt_url_blocked_formula_item_2: 'Parmi les Allow/Disallow qui matchent le chemin, le plus long préfixe gagne.',
	tool_check_robots_txt_url_blocked_formula_item_3: 'À longueur égale, Allow l’emporte sur Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_4: 'robots.txt absent ou groupes vides = tout autoriser ; le statut HTTP reste affiché.',
	tool_check_robots_txt_url_blocked_formula_item_5: 'Seul /robots.txt est demandé ; hôtes privés refusés. Ce n’est pas le testeur officiel Search Console.',
	tool_check_robots_txt_url_blocked_example_title: 'Exemple',
	tool_check_robots_txt_url_blocked_example:
		'Exemple https://www.bing.com/search avec Googlebot. Le Worker récupère https://www.bing.com/robots.txt, évalue /search et indique Autorisée ou Bloquée avec la ligne Disallow/Allow le cas échéant.',
	tool_check_robots_txt_url_blocked_usecases_title: 'Cas d’usage',
	tool_check_robots_txt_url_blocked_usecase_1:
		'Avant mise en ligne : confirmer que /admin ou /staging est bloqué tout en laissant crawler les pages publiques.',
	tool_check_robots_txt_url_blocked_usecase_2:
		'Testeur / validateur robots.txt : après un Disallow, vérifier que l’URL visée correspond bien.',
	tool_check_robots_txt_url_blocked_usecase_3:
		'Règles crawlers IA : choisir GPTBot (ou *) et contrôler des chemins sensibles sans générer le fichier.',
	tool_check_robots_txt_url_blocked_faq_q1: 'Cet outil génère-t-il un robots.txt ?',
	tool_check_robots_txt_url_blocked_faq_a1:
		'Non. Il vérifie seulement le blocage. Pour écrire des règles, utilisez le générateur robots.txt.',
	tool_check_robots_txt_url_blocked_faq_q2: 'Pourquoi tester Googlebot et * séparément ?',
	tool_check_robots_txt_url_blocked_faq_a2:
		'Googlebot utilise son propre groupe s’il existe ; beaucoup d’autres bots retombent sur *. Les séparer évite de croire qu’une seule règle couvre tout.',
	tool_check_robots_txt_url_blocked_faq_q3: 'Et si robots.txt manque ou renvoie 404 ?',
	tool_check_robots_txt_url_blocked_faq_a3:
		'La pratique courante traite cela comme tout autoriser. L’outil affiche le statut HTTP pour voir le 404 ou la redirection.',
	tool_check_robots_txt_url_blocked_faq_q4: 'Puis-je tester des crawlers IA comme GPTBot ?',
	tool_check_robots_txt_url_blocked_faq_a4:
		'Oui — choisissez GPTBot dans la liste. La correspondance suit la RFC 9309 en évaluation edge, pas un verdict officiel.',
	tool_check_robots_txt_url_blocked_faq_q5: 'Mon URL est-elle stockée ?',
	tool_check_robots_txt_url_blocked_faq_a5:
		'L’URL/hôte doit atteindre le Worker pour récupérer /robots.txt. Nous ne les stockons pas comme base produit. Outil edge, pas « sans envoi ».',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt ; RFC 9309 Robots Exclusion Protocol.',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default fr;
