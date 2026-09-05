/**
 * i18n tool shard (jwt-decoder / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_jwt_decoder_article:
    'Decodifica header y payload de JWT en local con reglas Base64url, tiempos de claims registrados y un límite claro: sin verificar firma. Pensado para depurar OAuth sin subir el token.',
  tool_jwt_decoder_claims_local: 'Local',
  tool_jwt_decoder_claims_title: 'Tiempos de claims registrados',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'Limpiar',
  tool_jwt_decoder_copy_done: 'Copiado',
  tool_jwt_decoder_copy_header: 'Copiar header',
  tool_jwt_decoder_copy_payload: 'Copiar payload',
  tool_jwt_decoder_decode: 'Decodificar',
  tool_jwt_decoder_desc:
    'Decodifica header y payload JWT en local — sin verificar firma; el pegado no sale del navegador.',
  tool_jwt_decoder_description:
    'Pega un JWT para leer header y payload en JSON en tu navegador, sin verificar la firma. Pasos: pegar el token, decodificar, copiar header o payload. Ejemplo: el token de muestra muestra alg HS256 e iat 1516239022 con hora UTC y local. El token no se sube.',
  tool_jwt_decoder_disclaimer:
    'Sin verificar — solo decodifica Base64url. No valida firmas ni sirve para decisiones de autorización.',
  tool_jwt_decoder_empty: 'Nada que copiar: decodifica un JWT primero.',
  tool_jwt_decoder_error_base64_header: 'El header no es Base64url válido.',
  tool_jwt_decoder_error_base64_payload: 'El payload no es Base64url válido.',
  tool_jwt_decoder_error_json_header: 'El header decodificado no es JSON válido.',
  tool_jwt_decoder_error_json_payload: 'El payload decodificado no es JSON válido.',
  tool_jwt_decoder_error_segments:
    'Un JWT debe tener exactamente tres segmentos separados por puntos (header.payload.signature).',
  tool_jwt_decoder_example:
    'Entrada: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header: {"alg":"HS256","typ":"JWT"}. Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022} con iat en UTC y hora local. La firma se muestra en bruto, sin verificar.',
  tool_jwt_decoder_example_title: 'Ejemplo',
  tool_jwt_decoder_faq_a1:
    'No. Decodificar solo invierte Base64url en header y payload; verificar la firma exige la clave del emisor y aquí no lo hacemos.',
  tool_jwt_decoder_faq_a2:
    'Comprueba que pegaste el token completo con dos puntos y tres segmentos. Puntos de más, texto truncado o cadenas que no son JWT fallarán.',
  tool_jwt_decoder_faq_a3:
    'JWT usa Base64url: - en lugar de +, _ en lugar de /, y a menudo sin = final. Un decodificador Base64 clásico puede fallar con tokens URL-safe.',
  tool_jwt_decoder_faq_a4:
    'exp, iat y nbf son segundos Unix en UTC. Esta página los muestra en UTC y en tu zona local; compara exp con la hora actual para caducidad.',
  tool_jwt_decoder_faq_a5:
    'No. El split, la decodificación Base64url y el JSON se ejecutan solo en tu pestaña.',
  tool_jwt_decoder_faq_q1: '¿Verifica la firma del JWT?',
  tool_jwt_decoder_faq_q2: '¿Por qué falla con error de segmentos?',
  tool_jwt_decoder_faq_q3: '¿En qué se diferencia Base64url del Base64 normal?',
  tool_jwt_decoder_faq_q4: '¿Cómo leo exp, iat o nbf?',
  tool_jwt_decoder_faq_q5: '¿Se sube mi token a un servidor?',
  tool_jwt_decoder_header_label: 'Header (JSON)',
  tool_jwt_decoder_how_body:
    'Pega un JWT completo (header.payload.signature). La página separa por puntos, decodifica Base64url en los dos primeros tramos y formatea JSON. exp, iat y nbf numéricos muestran UTC y hora local. La firma solo se muestra en texto, sin verificar.',
  tool_jwt_decoder_how_title: 'Cómo funciona',
  tool_jwt_decoder_input_label: 'Entrada JWT',
  tool_jwt_decoder_input_placeholder: 'Pega access token o ID token…',
  tool_jwt_decoder_large_warn: 'Token grande (>8 KB). Puede ir lento; evita pegar JWE enormes.',
  tool_jwt_decoder_payload_label: 'Payload (JSON)',
  tool_jwt_decoder_rules_body:
    'Qué hace y qué no hace este decodificador: estructura, Base64url, claims registrados y el límite sin verificación.',
  tool_jwt_decoder_rules_item_1:
    'Estructura: un JWT firmado (JWS compacto) tiene tres segmentos Base64url — header (alg, typ), payload (claims), firma (bytes, no JSON).',
  tool_jwt_decoder_rules_item_2:
    'Base64url: -→+, _→/, rellena padding hasta longitud %4, luego atob, interpreta esos bytes como UTF-8 y JSON.parse, así los claims con acentos o CJK se leen bien. Los errores indican header o payload.',
  tool_jwt_decoder_rules_item_3:
    'Claims registrados: exp, iat y nbf son segundos Unix UTC. Leer JSON no prueba que el token sea fiable.',
  tool_jwt_decoder_rules_item_4:
    'Privacidad: el pegado es local; sin HMAC/RSA. No autorices acceso en producción solo con JSON decodificado.',
  tool_jwt_decoder_rules_title: 'Reglas que debes conocer',
  tool_jwt_decoder_sample: 'Cargar ejemplo',
  tool_jwt_decoder_signature_label: 'Firma (bruto, sin verificar)',
  tool_jwt_decoder_title: 'Decodificador JWT — leer header y payload en el navegador (sin verificar)',
  tool_jwt_decoder_usecase_1:
    'Depurar OAuth: revisa sub, scope y exp de un access token antes de configurar la API.',
  tool_jwt_decoder_usecase_2:
    'Contratos API: confirma iss y aud de un ID token con tu documentación.',
  tool_jwt_decoder_usecase_3:
    'Aprender: ver cómo header, payload y firma encajan en tres segmentos JWS.',
  tool_jwt_decoder_usecases_title: 'Cuándo encaja',
};
export default es;
