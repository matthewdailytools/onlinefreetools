/**
 * i18n tool shard (website-headers / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_headers_article:
    'Sehen Sie, welche Header unser Edge für eine öffentliche URL erhält — nützlich für Caching, CORS, Redirects und Security-Header. Anfrage wird proxyt; Seiteninhalt speichern wir nicht.',
  tool_headers_description:
    'HTTP-Response-Header einer URL online vom Edge prüfen. Ablauf: https einfügen, HEAD senden (GET bei Bedarf), Redirects folgen, Status und Header-Map anzeigen; private Hosts blockieren. Beispiel: Cache-Control, CORS und HSTS beim CDN- oder Redirect-Debug lesen.',
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
    'Öffentliche http(s)-URL einfügen und prüfen. Der Edge-Worker sendet HEAD (ggf. GET), folgt Redirects und liefert Status, finale URL und beobachtete Header. Private Ziele werden abgewiesen. Edge-Sicht — kann von lokalem Browser abweichen, wenn CDN regional routet.',
  tool_headers_how_title: 'So funktioniert es',
  tool_headers_ref_mdn_label: 'MDN — HTTP-Header',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — HTTP-Semantik',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP-Caching',
  tool_headers_rules_body:
    'Kurzlebiger Proxy nur zur Header-Inspektion; speichert keinen Seiteninhalt. Namen folgen HTTP-Semantik (siehe Referenzen).',
  tool_headers_rules_item_1: 'HEAD bevorzugen; GET, wenn HEAD nicht unterstützt wird.',
  tool_headers_rules_item_2: 'Redirects folgen und finale URL melden.',
  tool_headers_rules_item_3: 'localhost und private IPs blockieren.',
  tool_headers_rules_item_4: 'Häufige Header hervorheben: Cache-Control, CORS, CSP usw.',
  tool_headers_rules_title: 'Was der Checker macht',
  tool_headers_title: 'HTTP-Header einer Website prüfen — Response-Header anzeigen',
  tool_headers_usecase_1: 'Vor dem Release Cache-Control oder CDN-Cache bestätigen.',
  tool_headers_usecase_2: 'CORS-Preflight debuggen, indem Access-Control-* gelesen wird.',
  tool_headers_usecase_3: 'Prüfen, ob CSP, HSTS und andere Security-Header wirklich ausgeliefert werden.',
  tool_headers_usecases_title: 'Typische Einsätze',
};
export default de;
