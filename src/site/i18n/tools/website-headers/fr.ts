/**
 * i18n tool shard (website-headers / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_headers_article:
    'Consultez les en-têtes que l\'edge reçoit pour une URL publique — cache, CORS, redirections et en-têtes de sécurité. Requête proxyée ; nous ne conservons pas le corps de page.',
  tool_headers_description:
    'Inspectez en ligne les en-têtes HTTP de réponse d\'une URL depuis notre edge. Déroulé : saisir https, envoyer HEAD (GET si besoin), suivre les redirections, afficher statut et carte d\'en-têtes ; bloquer les hôtes privés. Bonus : lecture en langage simple de Cache-Control, X-Robots-Tag et de la chaîne de redirection. Exemple : lire Cache-Control, CORS et HSTS lors d\'un debug CDN ou redirection.',
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
    'Collez une URL http(s) publique puis lancez la vérification. Le worker edge envoie HEAD (GET au besoin), suit les redirections une à une (jusqu\'à 5 sauts) et renvoie statut, URL finale, en-têtes observés et la chaîne de redirection. Les cibles privées sont rejetées. Vue edge — peut différer de votre navigateur si le CDN route par région.',
  tool_headers_how_title: 'Fonctionnement',
  tool_headers_faq_a6:
    'Pour le SEO, l\'utile est de savoir si la réponse est mise en cache (no-store vs max-age), combien de temps les caches partagés la gardent (s-maxage) et si elle impose une revalidation (no-cache). Les pages qui changent peu gagnent un max-age long pour que le CDN les serve sans toucher l\'origine.',
  tool_headers_faq_a7:
    'x-robots-tag s\'applique à tout type de réponse — HTML, PDF, images — alors que robots meta ne fonctionne que dans le HTML. Utilisez-le pour empêcher l\'indexation d\'actifs non HTML ou des règles difficiles à placer dans la page. En conflit, x-robots-tag l\'emporte.',
  tool_headers_faq_q6: 'Que regarder dans cache-control ?',
  tool_headers_faq_q7: 'Pourquoi x-robots-tag compte-t-il si robots meta existe ?',
  tool_headers_ref_mdn_label: 'MDN — En-têtes HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Sémantique HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Mise en cache HTTP',
  tool_headers_rules_body:
    'Proxy éphémère dédié à l\'inspection d\'en-têtes ; aucun stockage du contenu page. Les noms respectent la sémantique HTTP (voir Références).',
  tool_headers_rules_item_1: 'HEAD en priorité ; GET si l\'origine ne supporte pas HEAD.',
  tool_headers_rules_item_2: 'Suit les redirections et indique l\'URL finale.',
  tool_headers_rules_item_3: 'Bloque localhost et IP de réseau privé.',
  tool_headers_rules_item_4: 'Met en évidence Cache-Control, CORS, CSP et en-têtes courants.',
  tool_headers_rules_item_5: 'Recueille la chaîne de redirection (jusqu\'à 5 sauts) avec statut et Location de chaque étape.',
  tool_headers_rules_title: 'Règles du vérificateur',
  tool_headers_seo_cache_absent: 'Aucun en-tête Cache-Control. Navigateurs et CDN utilisent des heuristiques ; un contenu récent peut être servi obsolète.',
  tool_headers_seo_cache_heading: 'Cache-Control',
  tool_headers_seo_cache_immutable: 'immutable : pas de revalidation pendant la durée de fraîcheur — typique des assets à empreinte.',
  tool_headers_seo_cache_maxage: 'max-age={n} : navigateurs et caches partagés peuvent réutiliser cette réponse pendant {n} secondes sans consulter l\'origine.',
  tool_headers_seo_cache_mustrevalidate: 'must-revalidate : les réponses périmées doivent être revalidées avant réutilisation.',
  tool_headers_seo_cache_nocache: 'no-cache : stockage possible mais revalidation obligatoire avant réutilisation.',
  tool_headers_seo_cache_nostore: 'no-store : rien n\'est mis en cache ; chaque requête atteint l\'origine. Adapté aux pages privées ou volatiles.',
  tool_headers_seo_cache_other: 'Directive non expliquée ici : {d}',
  tool_headers_seo_cache_private: 'private : seul le cache du navigateur peut stocker ; les caches partagés non.',
  tool_headers_seo_cache_public: 'public : n\'importe quel cache peut stocker la réponse.',
  tool_headers_seo_cache_smaxage: 's-maxage={n} : les caches partagés (CDN/proxy) peuvent servir pendant {n} secondes ; écrase max-age pour eux.',
  tool_headers_seo_intro: 'Lecture en langage simple des en-têtes les plus importants pour la recherche et l\'exploration.',
  tool_headers_seo_redirect_301: '301 Permanent : les moteurs transfèrent les signaux de classement à la destination — parfait pour pages déplacées et changements de www.',
  tool_headers_seo_redirect_302: '302/307 Temporaire : à garder pour des changements courts — les signaux restent sur l\'URL d\'origine.',
  tool_headers_seo_redirect_chain: 'La requête a suivi {n} redirection(s) avant la réponse finale :',
  tool_headers_seo_redirect_cross_host: 'Ce saut quitte l\'hôte d\'origine : {from} → {to}.',
  tool_headers_seo_redirect_heading: 'Redirection',
  tool_headers_seo_redirect_ok: 'Aucune redirection : l\'URL finale est celle vérifiée.',
  tool_headers_robots_absent: 'Aucun en-tête X-Robots-Tag. Les règles d\'indexation viennent de robots.txt et du robots meta de la page.',
  tool_headers_robots_blocked: 'Cette page est exclue de l\'indexation par cet en-tête.',
  tool_headers_seo_robots_heading: 'X-Robots-Tag',
  tool_headers_robots_maxsnippet: 'max-snippet={n} : limite le fragment à {n} caractères.',
  tool_headers_robots_noarchive: 'noarchive : les moteurs n\'afficheront pas de copie en cache de cette URL.',
  tool_headers_robots_nofollow: 'nofollow : les robots ne suivront pas les liens de cette réponse.',
  tool_headers_robots_noindex: 'noindex : cette URL est exclue des résultats de recherche.',
  tool_headers_robots_none: 'none : équivaut à noindex + nofollow.',
  tool_headers_seo_title: 'Vérifications SEO des en-têtes',
  tool_headers_title: 'Vérifier les en-têtes HTTP d\'un site — Inspecter les response headers',
  tool_headers_usecase_1: 'Avant une mise en prod, valider Cache-Control ou le cache CDN.',
  tool_headers_usecase_2: 'Diagnostiquer un preflight CORS via Access-Control-*.',
  tool_headers_usecase_3: 'Vérifier que CSP, HSTS ou d\'autres en-têtes de sécurité sont bien servis.',
  tool_headers_usecases_title: 'Situations utiles',
};
export default fr;
