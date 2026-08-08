/**
 * i18n tool shard (website-headers / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_headers_article:
    'Veja os headers que o edge recebe de uma URL pública — útil para cache, CORS, redirecionamentos e checagens de segurança. A requisição é proxyada; não guardamos o corpo da página.',
  tool_headers_description:
    'Verifique online os headers HTTP de resposta de uma URL pelo nosso edge. Fluxo: cole https, envie HEAD (GET se precisar), siga redirecionamentos, mostre status e mapa de headers; bloqueie hosts privados. Exemplo: leia Cache-Control, CORS e HSTS ao depurar CDN ou redirects.',
  tool_headers_example:
    'exemplo.com → status 200, URL final igual; headers com content-type: text/html e, conforme o origin, cache-control ou headers de segurança.',
  tool_headers_example_title: 'Exemplo',
  tool_headers_faq_a1: 'Metadados da resposta: tipo de conteúdo, cache, redirects e políticas como HSTS, CSP ou CORS.',
  tool_headers_faq_a2: 'Prefere HEAD e usa GET só se precisar. O foco é inspecionar headers, não raspar nem guardar o corpo.',
  tool_headers_faq_a3: 'Redes privadas ficam fora para que o worker não sirva de sonda contra hosts internos.',
  tool_headers_faq_a4:
    'Nem sempre. Você vê a resposta do nosso edge; CDN, geo ou anti-bot podem diferir do seu navegador local.',
  tool_headers_faq_a5:
    'Cada consulta é uma requisição curta no edge. Não há histórico de URLs; evite colar segredos na query string.',
  tool_headers_faq_q1: 'O que mostram os headers de resposta HTTP?',
  tool_headers_faq_q2: 'A ferramenta baixa o HTML inteiro?',
  tool_headers_faq_q3: 'Por que localhost e IPs privados são bloqueados?',
  tool_headers_faq_q4: 'Dá o mesmo resultado que o DevTools?',
  tool_headers_faq_q5: 'Vocês guardam histórico das URLs que verifico?',
  tool_headers_how_body:
    'Cole uma URL pública http(s) e clique em verificar. O worker no edge envia HEAD (GET se necessário), segue redirects e devolve status, URL final e headers vistos. Destinos privados são recusados. É a visão do edge — pode divergir do seu navegador se o CDN rotear por região.',
  tool_headers_how_title: 'Como usar',
  tool_headers_ref_mdn_label: 'MDN — Headers HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semântica HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Cache HTTP',
  tool_headers_rules_body:
    'Proxy de curta duração só para inspecionar headers; não armazena conteúdo da página. Nomes seguem a semântica HTTP (veja Referências).',
  tool_headers_rules_item_1: 'HEAD primeiro; GET quando o origin não aceita HEAD.',
  tool_headers_rules_item_2: 'Segue redirecionamentos e informa a URL final.',
  tool_headers_rules_item_3: 'Bloqueia localhost e IPs de rede privada.',
  tool_headers_rules_item_4: 'Destaca headers comuns: Cache-Control, CORS, CSP, etc.',
  tool_headers_rules_title: 'O que o verificador faz',
  tool_headers_title: 'Verificar cabeçalhos HTTP de um site — Inspecionar response headers',
  tool_headers_usecase_1: 'Antes do deploy, confirme Cache-Control ou cache do CDN.',
  tool_headers_usecase_2: 'Depure preflight CORS lendo Access-Control-* na resposta.',
  tool_headers_usecase_3: 'Confira se CSP, HSTS e outros headers de segurança realmente saem do servidor.',
  tool_headers_usecases_title: 'Bom para',
};
export default pt;
