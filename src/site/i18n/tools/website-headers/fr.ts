/**
 * i18n tool shard (website-headers / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_headers_article:
    'Consultez les en-têtes que l\'edge reçoit pour une URL publique — cache, CORS, redirections et en-têtes de sécurité. Requête proxyée ; nous ne conservons pas le corps de page.',
  tool_headers_description:
    'Inspectez en ligne les en-têtes HTTP de réponse d\'une URL depuis notre edge. Déroulé : saisir https, envoyer HEAD (GET si besoin), suivre les redirections, afficher statut et carte d\'en-têtes ; bloquer les hôtes privés. Exemple : lire Cache-Control, CORS et HSTS lors d\'un debug CDN ou redirection.',
  tool_headers_example:
    'exemple.com → statut 200, URL finale inchangée ; en-têtes avec content-type: text/html et, selon l\'origine, cache-control ou en-têtes de sécurité.',
  tool_headers_example_title: 'Exemple',
  tool_headers_faq_a1: 'Des métadonnées serveur : type de contenu, cache, redirections et politiques HSTS, CSP ou CORS.',
  tool_headers_faq_a2: 'HEAD d\'abord, GET si nécessaire. But : inspecter les en-têtes, pas scraper ni stocker le corps.',
  tool_headers_faq_a3: 'Les réseaux privés sont bloqués pour empêcher le worker de sonder des hôtes internes.',
  tool_headers_faq_a4:
    'Pas toujours. Vous voyez la réponse depuis notre edge ; CDN, géo ou anti-bot peuvent différer de votre poste.',
  tool_headers_faq_a5: 'Requête edge éphémère, sans historique d\'URL. N\'insérez pas de secrets dans la query string.',
  tool_headers_faq_q1: 'Que contiennent les en-têtes de réponse HTTP ?',
  tool_headers_faq_q2: 'L\'outil télécharge-t-il le corps HTML complet ?',
  tool_headers_faq_q3: 'Pourquoi localhost et IP privées sont-ils interdits ?',
  tool_headers_faq_q4: 'Est-ce identique aux DevTools du navigateur ?',
  tool_headers_faq_q5: 'Conservez-vous l\'historique des URL vérifiées ?',
  tool_headers_how_body:
    'Collez une URL http(s) publique puis lancez la vérification. Le worker edge envoie HEAD (GET au besoin), suit les redirections et renvoie statut, URL finale et en-têtes observés. Les cibles privées sont rejetées. Vue edge — peut différer de votre navigateur si le CDN route par région.',
  tool_headers_how_title: 'Fonctionnement',
  tool_headers_ref_mdn_label: 'MDN — En-têtes HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Sémantique HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Mise en cache HTTP',
  tool_headers_rules_body:
    'Proxy éphémère dédié à l\'inspection d\'en-têtes ; aucun stockage du contenu page. Les noms respectent la sémantique HTTP (voir Références).',
  tool_headers_rules_item_1: 'HEAD en priorité ; GET si l\'origine ne supporte pas HEAD.',
  tool_headers_rules_item_2: 'Suit les redirections et indique l\'URL finale.',
  tool_headers_rules_item_3: 'Bloque localhost et IP de réseau privé.',
  tool_headers_rules_item_4: 'Met en évidence Cache-Control, CORS, CSP et en-têtes courants.',
  tool_headers_rules_title: 'Règles du vérificateur',
  tool_headers_title: 'Vérifier les en-têtes HTTP d\'un site — Inspecter les response headers',
  tool_headers_usecase_1: 'Avant une mise en prod, valider Cache-Control ou le cache CDN.',
  tool_headers_usecase_2: 'Diagnostiquer un preflight CORS via Access-Control-*.',
  tool_headers_usecase_3: 'Vérifier que CSP, HSTS ou d\'autres en-têtes de sécurité sont bien servis.',
  tool_headers_usecases_title: 'Situations utiles',
};
export default fr;
