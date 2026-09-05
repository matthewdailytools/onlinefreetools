/**
 * i18n tool shard (jwt-decoder / de). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_jwt_decoder_article:
    'JWT-Header und -Payload lokal im Browser dekodieren — mit Base64url-Regeln, Zeitangaben für registrierte Claims und klarer Grenze: keine Signaturprüfung. Für OAuth-Debugging ohne Token-Upload.',
  tool_jwt_decoder_claims_local: 'Lokal',
  tool_jwt_decoder_claims_title: 'Zeiten registrierter Claims',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'Leeren',
  tool_jwt_decoder_copy_done: 'Kopiert',
  tool_jwt_decoder_copy_header: 'Header kopieren',
  tool_jwt_decoder_copy_payload: 'Payload kopieren',
  tool_jwt_decoder_decode: 'Dekodieren',
  tool_jwt_decoder_desc:
    'JWT Header & Payload lokal dekodieren — ohne Signaturprüfung; Einfügen bleibt im Browser.',
  tool_jwt_decoder_description:
    'JWT einfügen, um Header und Payload als JSON im Browser zu lesen — ohne Signaturprüfung. Schritte: Token einfügen, dekodieren, Header oder Payload kopieren. Beispiel: Demo-Token zeigt alg HS256 und iat 1516239022 in UTC und Ortszeit. Token wird nicht hochgeladen.',
  tool_jwt_decoder_disclaimer:
    'Nicht verifiziert — dieses Tool dekodiert nur Base64url. Keine Signaturprüfung; nicht für Autorisierungsentscheidungen.',
  tool_jwt_decoder_empty: 'Nichts zu kopieren — zuerst JWT dekodieren.',
  tool_jwt_decoder_error_base64_header: 'Header ist kein gültiges Base64url.',
  tool_jwt_decoder_error_base64_payload: 'Payload ist kein gültiges Base64url.',
  tool_jwt_decoder_error_json_header: 'Dekodierter Header ist kein gültiges JSON.',
  tool_jwt_decoder_error_json_payload: 'Dekodierter Payload ist kein gültiges JSON.',
  tool_jwt_decoder_error_segments:
    'Ein JWT muss genau drei durch Punkte getrennte Segmente haben (header.payload.signature).',
  tool_jwt_decoder_example:
    'Eingabe: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header: {"alg":"HS256","typ":"JWT"}. Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022} mit iat in UTC und Ortszeit. Signatur roh angezeigt — nicht geprüft.',
  tool_jwt_decoder_example_title: 'Beispiel',
  tool_jwt_decoder_faq_a1:
    'Nein. Dekodieren kehrt nur Base64url in Header und Payload um; Signaturprüfung braucht den Issuer-Schlüssel — hier bewusst nicht implementiert.',
  tool_jwt_decoder_faq_a2:
    'Prüfen Sie, ob der vollständige Token mit zwei Punkten und drei Segmenten eingefügt wurde. Extra-Punkte, abgeschnittenes Einfügen oder Nicht-JWT-Strings schlagen fehl.',
  tool_jwt_decoder_faq_a3:
    'JWT nutzt Base64url: - statt +, _ statt /, oft ohne =. Normales Base64 kann bei URL-safe Tokens scheitern.',
  tool_jwt_decoder_faq_a4:
    'exp, iat und nbf sind Unix-Sekunden UTC. Diese Seite zeigt UTC und Ihre Ortszeit; vergleichen Sie exp mit jetzt für Ablauf.',
  tool_jwt_decoder_faq_a5:
    'Nein. Split, Base64url und JSON laufen ausschließlich in Ihrem Browser-Tab.',
  tool_jwt_decoder_faq_q1: 'Wird die JWT-Signatur geprüft?',
  tool_jwt_decoder_faq_q2: 'Warum schlägt mein Token mit Segmentfehler fehl?',
  tool_jwt_decoder_faq_q3: 'Wie unterscheidet sich Base64url von Base64?',
  tool_jwt_decoder_faq_q4: 'Wie lese ich exp, iat oder nbf?',
  tool_jwt_decoder_faq_q5: 'Wird mein Token an einen Server gesendet?',
  tool_jwt_decoder_header_label: 'Header (JSON)',
  tool_jwt_decoder_how_body:
    'Vollständigen JWT einfügen (header.payload.signature). Die Seite teilt an Punkten, dekodiert Base64url der ersten zwei Segmente und formatiert JSON. Numerische exp, iat, nbf zeigen UTC und Ortszeit. Signatur nur als Rohtext — ohne Prüfung.',
  tool_jwt_decoder_how_title: 'So funktioniert es',
  tool_jwt_decoder_input_label: 'JWT-Eingabe',
  tool_jwt_decoder_input_placeholder: 'Access Token oder ID Token einfügen…',
  tool_jwt_decoder_large_warn: 'Großer Token (>8 KB). Dekodierung kann langsamer sein — riesige JWE vermeiden.',
  tool_jwt_decoder_payload_label: 'Payload (JSON)',
  tool_jwt_decoder_rules_body:
    'Was dieser Decoder tut und nicht tut: Struktur, Base64url, registrierte Claims und Grenze ohne Verifikation.',
  tool_jwt_decoder_rules_item_1:
    'Struktur: signierter JWT (kompaktes JWS) hat drei Base64url-Segmente — Header (alg, typ), Payload (Claims), Signatur (Bytes, kein JSON).',
  tool_jwt_decoder_rules_item_2:
    'Base64url: -→+, _→/, Padding bis Länge %4, dann atob, die Bytes als UTF-8 lesen und JSON.parse — Umlaute und CJK-Claims bleiben lesbar. Fehler benennen Header oder Payload.',
  tool_jwt_decoder_rules_item_3:
    'Registrierte Claims: exp, iat, nbf sind Unix-Sekunden UTC. JSON lesen heißt nicht, dem Token zu vertrauen.',
  tool_jwt_decoder_rules_item_4:
    'Datenschutz: Einfügen bleibt lokal; kein HMAC/RSA. In Produktion nicht allein nach dekodiertem JSON autorisieren.',
  tool_jwt_decoder_rules_title: 'Regeln, die Sie kennen sollten',
  tool_jwt_decoder_sample: 'Beispiel laden',
  tool_jwt_decoder_signature_label: 'Signatur (roh, nicht geprüft)',
  tool_jwt_decoder_title: 'JWT-Decoder — Header & Payload lokal lesen (ohne Signaturprüfung)',
  tool_jwt_decoder_usecase_1:
    'OAuth debuggen: sub, scope und exp eines Access Tokens vor dem API-Gateway prüfen.',
  tool_jwt_decoder_usecase_2:
    'API-Verträge: iss und aud eines ID Tokens mit der Doku abgleichen.',
  tool_jwt_decoder_usecase_3:
    'Lernen: sehen, wie Header, Payload und Signatur drei JWS-Segmente bilden.',
  tool_jwt_decoder_usecases_title: 'Passende Einsätze',
};
export default de;
