/**
 * i18n tool shard (indexnow / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_indexnow_article:
    'Use IndexNow to tell Bing and other engines that pages changed. Host a key file, verify it online, then POST URL lists. Understand silent 202 failures and host mismatches.',
  tool_indexnow_check: 'Verificar chave',
  tool_indexnow_clear: 'Limpar',
  tool_indexnow_desc: 'IndexNow: gerar chave, checar .txt e enviar URLs ao Bing.',
  tool_indexnow_description:
    'Gere uma chave IndexNow, baixe o .txt, verifique o arquivo ao vivo e envie URLs alteradas ao Bing e mecanismos participantes. Siga os passos, leia a tabela de status (200 vs 202) e um exemplo JSON — notificar mudança não garante indexação.',
  tool_indexnow_disclaimer:
    'Educational webmaster tool only. IndexNow does not guarantee crawl, index, or ranking outcomes. Prefer official IndexNow and Bing docs when policies change.',
  tool_indexnow_download: 'Baixar .txt',
  tool_indexnow_endpoint_bing: 'Bing direct',
  tool_indexnow_endpoint_indexnow: 'api.indexnow.org (shared)',
  tool_indexnow_endpoint_label: 'Endpoint',
  tool_indexnow_err_check: 'Key check failed (file missing, wrong body, HTML error page, or redirect).',
  tool_indexnow_err_host: 'Enter a host first.',
  tool_indexnow_err_host_invalid: 'That host does not look valid.',
  tool_indexnow_err_host_mismatch: 'Every URL and keyLocation must share the same host.',
  tool_indexnow_err_key: 'Key must be 8–128 characters of [A-Za-z0-9-].',
  tool_indexnow_err_limit: 'Too many URLs (max 500 per request here).',
  tool_indexnow_err_submit: 'Submit failed or returned a non-success status.',
  tool_indexnow_err_sitemap:
    'Could not fetch or parse the sitemap. Use a same-host sitemap URL or paste XML with <loc>.',
  tool_indexnow_err_urls:
    'Add at least one page URL, a same-host sitemap URL, or sitemap XML with <loc>.',
  tool_indexnow_example:
    'Host www.example.com, key indexnowdemokey01, URL https://www.example.com/page → POST JSON with host, key, keyLocation https://www.example.com/indexnowdemokey01.txt, and urlList. After hosting the .txt, Check key should report HTTP 200 and bodyMatch true before Submit.',
  tool_indexnow_example_title: 'Exemplo',
  tool_indexnow_faq_a1:
    'Significa que o endpoint aceitou um pedido bem formado. No Bing/global a chave pode ser validada depois. Verifique a chave primeiro.',
  tool_indexnow_faq_a2:
    'Preferred: site root as https://your-host/{key}.txt with the key as the only body text. You may use another path on the same host via keyLocation; Option 2 also limits which URL prefixes that key can cover.',
  tool_indexnow_faq_a3:
    'They are different hosts. If URLs use www, the key file must be on www (and the host field must be www). Fix DNS/canonical hosts first if you are unsure.',
  tool_indexnow_faq_a4: 'Não. Apenas notifica alterações.',
  tool_indexnow_faq_a5:
    'No content database. The Worker forwards your JSON to IndexNow/Bing for the request and does not publish the list as a public page.',
  tool_indexnow_faq_q1: 'HTTP 202 é sucesso?',
  tool_indexnow_faq_q2: 'Where do I put the key file?',
  tool_indexnow_faq_q3: 'Why does www vs non-www matter?',
  tool_indexnow_faq_q4: 'O IndexNow garante indexação?',
  tool_indexnow_faq_q5: 'Do you store my URL list?',
  tool_indexnow_force_confirm:
    'Key was not checked successfully in this session. Submit anyway? A 202 can still be discarded later if the key file is wrong.',
  tool_indexnow_generate: 'Gerar chave',
  tool_indexnow_host_label: 'Host (must match your URLs)',
  tool_indexnow_host_placeholder: 'www.example.com',
  tool_indexnow_how_body:
    '1) Generate a key and download {key}.txt. 2) Host it at your site root (or another path on the same host). 3) Check key so this Worker can fetch and match the body. 4) Paste changed page URLs, a same-host sitemap URL, or sitemap XML — we expand <loc> into the IndexNow urlList (we never submit the sitemap URL itself). Preview JSON, then Submit. Confirm receipts in Bing Webmaster → IndexNow.',
  tool_indexnow_how_title: 'Como funciona',
  tool_indexnow_key_label: 'IndexNow key',
  tool_indexnow_key_placeholder: '8–128 chars: A–Z a–z 0–9 -',
  tool_indexnow_keyloc_hint: 'Default is https://{host}/{key}.txt on the same host. www and apex are different hosts.',
  tool_indexnow_keyloc_label: 'keyLocation (optional)',
  tool_indexnow_keyloc_placeholder: 'https://www.example.com/{key}.txt',
  tool_indexnow_ok_check: 'Live key file matches. Safe to submit.',
  tool_indexnow_ok_submit: 'Endpoint accepted the batch.',
  tool_indexnow_preview: 'Pré-visualizar',
  tool_indexnow_preview_label: 'Result / payload preview',
  tool_indexnow_rules_body: 'Protocol rules for keys, hosts, status codes, and what IndexNow does not promise.',
  tool_indexnow_rules_item_1:
    'Key: 8–128 characters from [A-Za-z0-9-]. Option 1 (recommended): host UTF-8 text at https://{host}/{key}.txt containing only the key.',
  tool_indexnow_rules_item_2:
    'host in the JSON must equal the hostname of every URL and of keyLocation. www.example.com and example.com are different hosts.',
  tool_indexnow_rules_item_3:
    '200 = received; 202 = accepted with key validation often still pending (Bing/global). A green 202 is not proof the key file works — use Check key.',
  tool_indexnow_rules_item_4:
    'Protocol allows up to 10,000 URLs per POST; this page caps at 500 to reduce abuse. Prefer submitting only changed page URLs. A sitemap URL is fetched and expanded to its <loc> list — IndexNow is notified about those pages, not the sitemap file.',
  tool_indexnow_rules_item_5:
    'Privacy: URL lists are sent through this site’s Worker to the IndexNow endpoint you choose, then discarded from our side — we do not store them in a content database.',
  tool_indexnow_rules_title: 'Regras esperadas',
  tool_indexnow_sample: 'Exemplo',
  tool_indexnow_status_200: 'OK — URLs received',
  tool_indexnow_status_200_next: 'Optional: confirm in Bing Webmaster IndexNow log',
  tool_indexnow_status_202: 'Accepted — key validation may still be pending',
  tool_indexnow_status_202_next: 'Verify the live key file; do not assume success from 202 alone',
  tool_indexnow_status_400: 'Bad request — invalid format',
  tool_indexnow_status_400_next: 'Fix JSON/URL encoding and retry',
  tool_indexnow_status_403: 'Forbidden — key not valid',
  tool_indexnow_status_403_next: 'Fix key file path, body, or blocking (auth/HTML error)',
  tool_indexnow_status_422: 'Unprocessable — URL/host/key schema mismatch',
  tool_indexnow_status_422_next: 'Align host and URLs; check key character rules',
  tool_indexnow_status_429: 'Too many requests',
  tool_indexnow_status_429_next: 'Wait and reduce batch frequency',
  tool_indexnow_status_col_code: 'Code',
  tool_indexnow_status_col_meaning: 'Meaning',
  tool_indexnow_status_col_next: 'Next step',
  tool_indexnow_status_intro: 'What common IndexNow responses mean and what to do next.',
  tool_indexnow_status_title: 'Códigos HTTP',
  tool_indexnow_submit: 'Enviar URLs',
  tool_indexnow_title: 'IndexNow — enviar URLs ao Bing, checar chave e códigos',
  tool_indexnow_urls_hint:
    'Same host only. Paste page URLs, a sitemap URL (we fetch and expand <loc>), or sitemap XML. Max 500 page URLs per submit.',
  tool_indexnow_urls_label: 'URL list, sitemap URL, or sitemap XML',
  tool_indexnow_urls_placeholder:
    'One https page URL per line, or https://example.com/sitemap.xml, or paste sitemap <loc>…</loc> XML',
  tool_indexnow_usecase_1:
    'New site or tool launch: deploy the key file, check it, then submit page URLs parsed from your sitemap (not the sitemap URL itself).',
  tool_indexnow_usecase_2: 'Content update: submit only the pages you changed instead of the whole site every time.',
  tool_indexnow_usecase_3: 'Removed pages: submit URLs that now return 404/410 so engines can recrawl sooner.',
  tool_indexnow_usecases_title: 'Bons casos',
  tool_indexnow_warn_banner:
    'HTTP 202 means the endpoint accepted a well-formed request — not that your key file already passed verification. Always Check key first. IndexNow notifies discovery; it does not guarantee indexing or rankings.',
  tool_indexnow_warn_unchecked: 'Check the key file before relying on a green 202.',
};
export default pt;
