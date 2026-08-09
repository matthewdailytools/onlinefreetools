/**
 * i18n tool shard (website-headers / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_headers_article:
    'Veja os headers que o edge recebe de uma URL pública — útil para cache, CORS, redirecionamentos e checagens de segurança. A requisição é proxyada; não guardamos o corpo da página.',
  tool_headers_description:
    'Os headers HTTP decidem como o Google rastreia, armazena em cache e indexa suas páginas: um X-Robots-Tag errado pode bloquear a indexação por completo. Verifique online os headers HTTP de resposta de uma URL pelo nosso edge. Fluxo: cole https, envie HEAD (GET se precisar), siga redirecionamentos, mostre status e mapa de headers; bloqueie hosts privados. Extras: leitura em linguagem clara de Cache-Control, X-Robots-Tag e da cadeia de redirects. Exemplo: leia Cache-Control, CORS e HSTS ao depurar CDN ou redirects.',
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
    'Cole uma URL pública http(s) e clique em verificar. O worker no edge envia HEAD (GET se necessário), segue redirects um a um (até 5 saltos) e devolve status, URL final, headers vistos e a cadeia de redirects. Destinos privados são recusados. É a visão do edge — pode divergir do seu navegador se o CDN rotear por região.',
  tool_headers_how_title: 'Como usar',
  tool_headers_faq_a6:
    'Para SEO, o útil é saber se a resposta é armazenada (no-store vs max-age), por quanto tempo caches compartilhadas a guardam (s-maxage) e se obriga revalidação (no-cache). Páginas que mudam pouco ganham com max-age maior para o CDN servi-las sem tocar o origin.',
  tool_headers_faq_a7:
    'x-robots-tag vale para qualquer tipo de resposta — HTML, PDF, imagens — enquanto robots meta só funciona dentro do HTML. Use-o para evitar indexação de arquivos não HTML ou aplicar regras difíceis de colocar na própria página. Se conflitarem, x-robots-tag vence.',
  tool_headers_faq_q6: 'O que devo olhar em cache-control?',
  tool_headers_faq_q7: 'Por que x-robots-tag importa se já existe robots meta?',
  tool_headers_ref_mdn_label: 'MDN — Headers HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semântica HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Cache HTTP',
  tool_headers_rules_body:
    'Proxy de curta duração só para inspecionar headers; não armazena conteúdo da página. Nomes seguem a semântica HTTP (veja Referências).',
  tool_headers_rules_item_1: 'HEAD primeiro; GET quando o origin não aceita HEAD.',
  tool_headers_rules_item_2: 'Segue redirecionamentos e informa a URL final.',
  tool_headers_rules_item_3: 'Bloqueia localhost e IPs de rede privada.',
  tool_headers_rules_item_4: 'Destaca headers comuns: Cache-Control, CORS, CSP, etc.',
  tool_headers_rules_item_5: 'Coleta a cadeia de redirecionamentos (até 5 saltos) com status e Location de cada etapa.',
  tool_headers_rules_title: 'O que o verificador faz',
  tool_headers_seo_cache_absent: 'Sem header Cache-Control. Navegadores e CDN usam heurísticas; conteúdo recém-alterado pode ser servido desatualizado.',
  tool_headers_seo_cache_heading: 'Cache-Control',
  tool_headers_seo_cache_immutable: 'immutable: caches não revalidam durante o tempo de frescor — típico em assets com hash.',
  tool_headers_seo_cache_maxage: 'max-age={n}: navegadores e caches compartilhadas podem reutilizar esta resposta por {n} segundos sem consultar o origin.',
  tool_headers_seo_cache_mustrevalidate: 'must-revalidate: respostas vencidas devem ser revalidadas antes do reuso.',
  tool_headers_seo_cache_nocache: 'no-cache: pode armazenar, mas precisa revalidar antes de reutilizar.',
  tool_headers_seo_cache_nostore: 'no-store: nada é armazenado; cada requisição chega ao origin. Bom para páginas privadas ou voláteis.',
  tool_headers_seo_cache_other: 'Diretiva não explicada aqui: {d}',
  tool_headers_seo_cache_private: 'private: só o cache do navegador pode guardar; caches compartilhadas não.',
  tool_headers_seo_cache_public: 'public: qualquer cache pode guardar a resposta.',
  tool_headers_seo_cache_smaxage: 's-maxage={n}: caches compartilhadas (CDN/proxy) podem servir por {n} segundos; sobrepõe max-age para elas.',
  tool_headers_seo_intro: 'Leitura em linguagem clara dos headers que mais importam para busca e rastreio.',
  tool_headers_seo_redirect_301: '301 Permanente: buscadores transferem os sinais de ranking ao destino — certo para páginas movidas e mudanças de www.',
  tool_headers_seo_redirect_302: '302/307 Temporário: mantenha para mudanças curtas — os sinais de ranking ficam na URL original.',
  tool_headers_seo_redirect_chain: 'A requisição seguiu {n} redirecionamento(s) antes da resposta final:',
  tool_headers_seo_redirect_cross_host: 'Este salto deixa o host original: {from} → {to}.',
  tool_headers_seo_redirect_heading: 'Redirecionamento',
  tool_headers_seo_redirect_ok: 'Sem redirecionamento: a URL final é a que você verificou.',
  tool_headers_robots_absent: 'Sem header X-Robots-Tag. As regras de indexação vêm do robots.txt e do robots meta da página.',
  tool_headers_robots_blocked: 'Esta página é excluída da indexação por este header.',
  tool_headers_seo_robots_heading: 'X-Robots-Tag',
  tool_headers_robots_maxsnippet: 'max-snippet={n}: limita o trecho a {n} caracteres.',
  tool_headers_robots_noarchive: 'noarchive: buscadores não mostrarão uma cópia em cache desta URL.',
  tool_headers_robots_nofollow: 'nofollow: os rastreadores não seguirão links desta resposta.',
  tool_headers_robots_noindex: 'noindex: esta URL fica fora dos resultados de busca.',
  tool_headers_robots_none: 'none: equivale a noindex + nofollow.',
  tool_headers_seo_title: 'Verificações SEO de headers',
  tool_headers_title: 'Verificar cabeçalhos HTTP de um site — Inspecionar response headers',
  tool_headers_usecase_1: 'Antes do deploy, confirme Cache-Control ou cache do CDN.',
  tool_headers_usecase_2: 'Depure preflight CORS lendo Access-Control-* na resposta.',
  tool_headers_usecase_3: 'Confira se CSP, HSTS e outros headers de segurança realmente saem do servidor.',
  tool_headers_usecases_title: 'Bom para',
};
export default pt;
