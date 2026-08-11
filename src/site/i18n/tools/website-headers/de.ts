/**
 * i18n tool shard (website-headers / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_headers_article:
    'Sehen Sie, welche Header unser Edge für eine öffentliche URL erhält — nützlich für Caching, CORS, Redirects und Security-Header. Anfrage wird proxyt; Seiteninhalt speichern wir nicht.',
  tool_headers_description:
    'HTTP-Header steuern Crawl und Index—falsches X-Robots-Tag kann blockieren. Header am Edge laden; Cache-Control, X-Robots-Tag, Redirects prüfen. Beispiel: CDN.',
  tool_headers_example:
    'beispiel.de → Status 200, finale URL unverändert; Header mit content-type: text/html und je nach Origin cache-control oder Security-Header.',
  tool_headers_example_title: 'Beispiel',
  tool_headers_faq_a1:
    'Metadaten der Antwort: Content-Type, Cache-Regeln, Redirects sowie Richtlinien wie HSTS, CSP oder CORS.',
  tool_headers_faq_a2:
    'HEAD bevorzugt, GET nur bei Bedarf. Ziel ist Header-Inspektion, kein Scraping oder Speichern des Bodys.',
  tool_headers_faq_a3: 'Private Netze werden blockiert, damit der Worker nicht als Sonde für interne Hosts missbraucht wird.',
  tool_headers_faq_a4:
    'Nicht zwingend. Sie sehen die Edge-Antwort; CDN, Geo-Routing oder Bot-Filter können vom lokalen Browser abweichen.',
  tool_headers_faq_a5: 'Kurze Edge-Anfrage ohne URL-Verlauf. Keine Geheimnisse in Query-Strings einfügen.',
  tool_headers_faq_q1: 'Was zeigen HTTP-Response-Header?',
  tool_headers_faq_q2: 'Lädt das Tool den kompletten HTML-Body herunter?',
  tool_headers_faq_q3: 'Warum sind localhost und private IPs gesperrt?',
  tool_headers_faq_q4: 'Entspricht das den Browser-DevTools?',
  tool_headers_faq_q5: 'Speichert ihr die geprüften URLs?',
  tool_headers_how_body:
    'Öffentliche http(s)-URL einfügen und prüfen. Der Edge-Worker sendet HEAD (ggf. GET), folgt Redirects einzeln (max. 5 Sprünge) und liefert Status, finale URL, beobachtete Header und die Redirect-Kette. Private Ziele werden abgewiesen. Edge-Sicht — kann von lokalem Browser abweichen, wenn CDN regional routet.',
  tool_headers_how_title: 'So funktioniert es',
  tool_headers_faq_a6:
    'Für SEO wichtig: ob die Antwort überhaupt gecacht wird (no-store vs. max-age), wie lange Shared Caches sie halten (s-maxage) und ob sie revalidieren muss (no-cache). Seiten, die sich selten ändern, profitieren von einem langen max-age, damit das CDN ohne Origin-Aufruf ausliefert.',
  tool_headers_faq_a7:
    'x-robots-tag gilt für jeden Antworttyp — HTML, PDF, Bilder —, robots meta nur innerhalb von HTML. Nutzen Sie ihn, um Nicht-HTML-Assets von der Indexierung auszuschließen oder Regeln anzuwenden, die schwer in die Seite selbst passen. Bei Konflikten gewinnt x-robots-tag.',
  tool_headers_faq_q6: 'Worauf bei cache-control achten?',
  tool_headers_faq_q7: 'Warum ist x-robots-tag wichtig, wenn robots meta existiert?',
  tool_headers_ref_mdn_label: 'MDN — HTTP-Header',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — HTTP-Semantik',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP-Caching',
  tool_headers_rules_body:
    'Kurzlebiger Proxy nur zur Header-Inspektion; speichert keinen Seiteninhalt. Namen folgen HTTP-Semantik (siehe Referenzen).',
  tool_headers_rules_item_1: 'HEAD bevorzugen; GET, wenn HEAD nicht unterstützt wird.',
  tool_headers_rules_item_2: 'Redirects folgen und finale URL melden.',
  tool_headers_rules_item_3: 'localhost und private IPs blockieren.',
  tool_headers_rules_item_4: 'Häufige Header hervorheben: Cache-Control, CORS, CSP usw.',
  tool_headers_rules_item_5: 'Redirect-Kette (max. 5 Sprünge) mit Status und Location je Schritt sammeln.',
  tool_headers_rules_title: 'Was der Checker macht',
  tool_headers_seo_cache_absent: 'Kein Cache-Control-Header. Browser und CDNs nutzen Heuristiken; frisch geänderte Inhalte können veraltet ausgeliefert werden.',
  tool_headers_seo_cache_heading: 'Cache-Control',
  tool_headers_seo_cache_immutable: 'immutable: Caches müssen während der Frischephase nicht revalidieren — typisch für Assets mit Fingerprint.',
  tool_headers_seo_cache_maxage: 'max-age={n}: Browser und Shared Caches dürfen diese Antwort {n} Sekunden ohne Origin-Abfrage wiederverwenden.',
  tool_headers_seo_cache_mustrevalidate: 'must-revalidate: veraltete Antworten müssen vor Wiederverwendung revalidiert werden.',
  tool_headers_seo_cache_nocache: 'no-cache: Speicherung erlaubt, aber vor Wiederverwendung muss revalidiert werden.',
  tool_headers_seo_cache_nostore: 'no-store: nichts wird gecacht; jede Anfrage erreicht den Origin. Gut für private oder volatile Seiten.',
  tool_headers_seo_cache_other: 'Hier nicht erklärte Direktive: {d}',
  tool_headers_seo_cache_private: 'private: nur der Browser-Cache darf speichern; Shared Caches nicht.',
  tool_headers_seo_cache_public: 'public: jeder Cache darf die Antwort speichern.',
  tool_headers_seo_cache_smaxage: 's-maxage={n}: Shared Caches (CDN/Proxy) dürfen {n} Sekunden ausliefern; überschreibt max-age für sie.',
  tool_headers_seo_intro: 'Verständliche Erklärung der Header, die für Suche und Crawling am wichtigsten sind.',
  tool_headers_seo_redirect_301: '301 Permanent: Suchmaschinen übertragen Ranking-Signale ans Ziel — richtig für verschobene Seiten und www-Änderungen.',
  tool_headers_seo_redirect_302: '302/307 Temporär: für kurzfristige Verschiebungen behalten — Ranking-Signale bleiben auf der Original-URL.',
  tool_headers_seo_redirect_chain: 'Die Anfrage folgte {n} Redirect(s) vor der finalen Antwort:',
  tool_headers_seo_redirect_cross_host: 'Dieser Sprung verlässt den ursprünglichen Host: {from} → {to}.',
  tool_headers_seo_redirect_heading: 'Redirect',
  tool_headers_seo_redirect_ok: 'Kein Redirect: die finale URL ist die geprüfte.',
  tool_headers_robots_absent: 'Kein X-Robots-Tag-Header. Indexierungsregeln kommen von robots.txt und dem robots meta der Seite.',
  tool_headers_robots_blocked: 'Diese Seite wird durch diesen Header von der Indexierung ausgeschlossen.',
  tool_headers_seo_robots_heading: 'X-Robots-Tag',
  tool_headers_robots_maxsnippet: 'max-snippet={n}: begrenzt den Snippet auf {n} Zeichen.',
  tool_headers_robots_noarchive: 'noarchive: Suchmaschinen zeigen keine gecachte Kopie dieser URL.',
  tool_headers_robots_nofollow: 'nofollow: Crawler folgen den Links dieser Antwort nicht.',
  tool_headers_robots_noindex: 'noindex: diese URL wird aus den Suchergebnissen ausgeschlossen.',
  tool_headers_robots_none: 'none: entspricht noindex + nofollow.',
  tool_headers_seo_title: 'SEO-Header-Checks',
  tool_headers_title: 'HTTP-Header einer Website prüfen — Response-Header anzeigen',
  tool_headers_usecase_1: 'Vor dem Release Cache-Control oder CDN-Cache bestätigen.',
  tool_headers_usecase_2: 'CORS-Preflight debuggen, indem Access-Control-* gelesen wird.',
  tool_headers_usecase_3: 'Prüfen, ob CSP, HSTS und andere Security-Header wirklich ausgeliefert werden.',
  tool_headers_usecases_title: 'Typische Einsätze',
};
export default de;
