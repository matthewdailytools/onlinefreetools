/**
 * i18n tool shard (jwt-decoder / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_jwt_decoder_article:
    'Decodifique header e payload de JWT no navegador com regras Base64url, horários de claims registrados e limite claro: sem verificar assinatura. Ideal para depurar OAuth sem enviar o token.',
  tool_jwt_decoder_claims_local: 'Local',
  tool_jwt_decoder_claims_title: 'Horários de claims registrados',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'Limpar',
  tool_jwt_decoder_copy_done: 'Copiado',
  tool_jwt_decoder_copy_header: 'Copiar header',
  tool_jwt_decoder_copy_payload: 'Copiar payload',
  tool_jwt_decoder_decode: 'Decodificar',
  tool_jwt_decoder_desc:
    'Decodifique header e payload JWT localmente — sem verificar assinatura; a colagem fica no navegador.',
  tool_jwt_decoder_description:
    'Cole um JWT para ler header e payload em JSON no navegador — sem verificar a assinatura. Passos: cole o token, decodifique, copie header ou payload. Exemplo: o token de amostra mostra alg HS256 e iat 1516239022 com UTC e hora local. O token não é enviado.',
  tool_jwt_decoder_disclaimer:
    'Não verificado — esta ferramenta só decodifica Base64url. Não valida assinaturas nem serve para decisões de autorização.',
  tool_jwt_decoder_empty: 'Nada para copiar — decodifique um JWT primeiro.',
  tool_jwt_decoder_error_base64_header: 'Header não é Base64url válido.',
  tool_jwt_decoder_error_base64_payload: 'Payload não é Base64url válido.',
  tool_jwt_decoder_error_json_header: 'Header decodificado não é JSON válido.',
  tool_jwt_decoder_error_json_payload: 'Payload decodificado não é JSON válido.',
  tool_jwt_decoder_error_segments:
    'Um JWT deve ter exatamente três segmentos separados por pontos (header.payload.signature).',
  tool_jwt_decoder_example:
    'Entrada: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header: {"alg":"HS256","typ":"JWT"}. Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022} com iat em UTC e hora local. Assinatura em bruto — não verificada.',
  tool_jwt_decoder_example_title: 'Exemplo',
  tool_jwt_decoder_faq_a1:
    'Não. Decodificar só reverte Base64url no header e payload; verificar assinatura exige a chave do emissor — não implementado aqui.',
  tool_jwt_decoder_faq_a2:
    'Confira se colou o token completo com dois pontos e três segmentos. Pontos extras, colagem truncada ou texto que não é JWT falham.',
  tool_jwt_decoder_faq_a3:
    'JWT usa Base64url: - no lugar de +, _ no lugar de /, muitas vezes sem =. Base64 comum pode falhar em tokens URL-safe.',
  tool_jwt_decoder_faq_a4:
    'exp, iat e nbf são segundos Unix UTC. Esta página mostra UTC e seu fuso local; compare exp com agora para expiração.',
  tool_jwt_decoder_faq_a5:
    'Não. Split, Base64url e JSON rodam só na sua aba do navegador.',
  tool_jwt_decoder_faq_q1: 'Esta página verifica a assinatura do JWT?',
  tool_jwt_decoder_faq_q2: 'Por que falha com erro de segmentos?',
  tool_jwt_decoder_faq_q3: 'Como Base64url difere do Base64 normal?',
  tool_jwt_decoder_faq_q4: 'Como ler exp, iat ou nbf?',
  tool_jwt_decoder_faq_q5: 'Meu token é enviado a um servidor?',
  tool_jwt_decoder_header_label: 'Header (JSON)',
  tool_jwt_decoder_how_body:
    'Cole um JWT completo (header.payload.signature). A página divide por pontos, decodifica Base64url nos dois primeiros trechos e formata JSON. exp, iat e nbf numéricos mostram UTC e hora local. A assinatura aparece só como texto — sem verificação.',
  tool_jwt_decoder_how_title: 'Como funciona',
  tool_jwt_decoder_input_label: 'Entrada JWT',
  tool_jwt_decoder_input_placeholder: 'Cole access token ou ID token…',
  tool_jwt_decoder_large_warn: 'Token grande (>8 KB). Pode ficar lento — evite colar JWE enormes.',
  tool_jwt_decoder_payload_label: 'Payload (JSON)',
  tool_jwt_decoder_rules_body:
    'O que este decodificador faz e não faz: estrutura, Base64url, claims registrados e limite sem verificação.',
  tool_jwt_decoder_rules_item_1:
    'Estrutura: JWT assinado (JWS compacto) tem três segmentos Base64url — header (alg, typ), payload (claims), assinatura (bytes, não JSON).',
  tool_jwt_decoder_rules_item_2:
    'Base64url: -→+, _→/, preenche padding até comprimento %4, depois atob, lê esses bytes como UTF-8 e JSON.parse — claims com acentos ou CJK continuam legíveis. Erros indicam header ou payload.',
  tool_jwt_decoder_rules_item_3:
    'Claims registrados: exp, iat e nbf são segundos Unix UTC. Ler JSON não prova que o token é confiável.',
  tool_jwt_decoder_rules_item_4:
    'Privacidade: colagem local; sem HMAC/RSA. Não autorize em produção só com JSON decodificado.',
  tool_jwt_decoder_rules_title: 'Regras que você deve esperar',
  tool_jwt_decoder_sample: 'Carregar exemplo',
  tool_jwt_decoder_signature_label: 'Assinatura (bruto, não verificada)',
  tool_jwt_decoder_title: 'Decodificador JWT — ler header e payload no navegador (sem verificar)',
  tool_jwt_decoder_usecase_1:
    'Depurar OAuth: confira sub, scope e exp de um access token antes da API.',
  tool_jwt_decoder_usecase_2:
    'Contratos de API: valide iss e aud de um ID token com a documentação.',
  tool_jwt_decoder_usecase_3:
    'Aprender: veja header, payload e assinatura nos três segmentos JWS.',
  tool_jwt_decoder_usecases_title: 'Bons casos de uso',
};
export default pt;
