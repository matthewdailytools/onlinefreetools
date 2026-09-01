/**
 * i18n tool shard (curl-to-fetch / fr).
 * H1: curl vers fetch — convertir une commande curl en JavaScript fetch.
 */
import type { SiteLangDict } from '../../../types';

/** Textes français. */
const fr: SiteLangDict = {
	tool_curl_to_fetch_article:
		'Collez une commande cURL (doc API ou terminal) et obtenez un extrait fetch JavaScript — méthode, en-têtes, corps JSON, Basic auth et -G. Analyse dans le navigateur, sans envoi au serveur.',
	tool_curl_to_fetch_clear: 'Effacer',
	tool_curl_to_fetch_convert: 'Convertir',
	tool_curl_to_fetch_copy: 'Copier',
	tool_curl_to_fetch_copy_done: 'Copié',
	tool_curl_to_fetch_copy_empty: 'Rien à copier — convertissez d’abord un cURL.',
	tool_curl_to_fetch_desc:
		'Passez de cURL à fetch dans le navigateur — reste sur l’appareil, sans envoi au serveur.',
	tool_curl_to_fetch_description:
		'Collez cURL, obtenez fetch en JavaScript — méthode, en-têtes, JSON, Basic auth (-u) et -G. L’exemple POST JSON se charge à l’ouverture. La commande reste sur l’appareil et n’est pas envoyée au serveur.',
	tool_curl_to_fetch_error_empty: 'Collez d’abord une commande cURL.',
	tool_curl_to_fetch_error_no_url: 'URL introuvable. Ajoutez https://… ou --url.',
	tool_curl_to_fetch_error_parse: 'Impossible d’analyser ce cURL. Vérifiez guillemets et continuations.',
	tool_curl_to_fetch_error_unclosed_quote: 'Guillemet non fermé — corrigez et réessayez.',
	tool_curl_to_fetch_example: 'Entrée : curl -X POST … → Sortie : fetch avec method, headers, body.',
	tool_curl_to_fetch_example_title: 'Exemple',
	tool_curl_to_fetch_faq_a1: 'Non. L’analyse se fait dans cet onglet ; nous n’envoyons pas le cURL à nos serveurs.',
	tool_curl_to_fetch_faq_a2: 'URL, -X, -H, -d, -u, -G, chaînes quotées et \\ en fin de ligne. Drapeaux exotiques ignorés avec avertissement.',
	tool_curl_to_fetch_faq_a3: '-G déplace --data dans la query URL, pas dans le body.',
	tool_curl_to_fetch_faq_a4: '-u user:pass → Authorization Basic en base64.',
	tool_curl_to_fetch_faq_a5: 'Cette page vise fetch navigateur. axios ou Python : adaptez à la main.',
	tool_curl_to_fetch_faq_q1: 'Mon cURL est-il envoyé ?',
	tool_curl_to_fetch_faq_q2: 'Quels flags curl sont pris en charge ?',
	tool_curl_to_fetch_faq_q3: 'Que fait -G ici ?',
	tool_curl_to_fetch_faq_q4: 'Comment -u est-il géré ?',
	tool_curl_to_fetch_faq_q5: 'axios ou Python possible ?',
	tool_curl_to_fetch_how_body: 'Copiez cURL depuis la doc ; nous analysons les flags courants et affichons un fetch prêt à coller.',
	tool_curl_to_fetch_how_item_1: 'Collez le cURL complet (\\ de continuation accepté).',
	tool_curl_to_fetch_how_item_2: 'Choisissez fetch ou async/await, puis Convertir.',
	tool_curl_to_fetch_how_item_3: 'Vérifiez method, headers et body générés.',
	tool_curl_to_fetch_how_item_4: 'Copiez dans votre projet ; reconvertissez après édition.',
	tool_curl_to_fetch_how_title: 'Fonctionnement',
	tool_curl_to_fetch_input_label: 'Commande cURL',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.exemple.com/…',
	tool_curl_to_fetch_large_warn: 'Commande volumineuse (>50 KB) — analyse plus lente.',
	tool_curl_to_fetch_load_sample: 'Charger l’exemple',
	tool_curl_to_fetch_output_label: 'Sortie fetch JavaScript',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: 'Format de sortie',
	tool_curl_to_fetch_rules_body: 'Correspondance curl → fetch et limites du fetch navigateur.',
	tool_curl_to_fetch_rules_item_1: '-X POST → method POST ; -d seul → POST sauf avec -G.',
	tool_curl_to_fetch_rules_item_2: 'Chaque -H dans headers ; Content-Type conservé.',
	tool_curl_to_fetch_rules_item_3: '-d dans body ; -G fusionné à l’URL.',
	tool_curl_to_fetch_rules_item_4: 'Cookies, certificats, proxy : non reproduits en fetch navigateur.',
	tool_curl_to_fetch_rules_title: 'Règles à connaître',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: 'Converti — vérifiez le fetch ci-dessous.',
	tool_curl_to_fetch_title: 'curl vers fetch',
	tool_curl_to_fetch_usecase_1: 'Exemples curl OpenAPI — collez pour démarrer un fetch frontend.',
	tool_curl_to_fetch_usecase_2: 'Déboguer Bearer : gardez Authorization en passant au JavaScript.',
	tool_curl_to_fetch_usecase_3: 'Convertir une commande curl en fetch lors d’une migration shell.',
	tool_curl_to_fetch_usecases_title: 'Bonnes situations',
	tool_curl_to_fetch_warn_unknown_flags: 'Flags non pris en charge ignorés : {flags}',
};

export default fr;
