/**
 * i18n tool shard (jwt-decoder / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_jwt_decoder_article:
    'Décodez header et payload JWT dans le navigateur avec les règles Base64url, les horodatages de claims enregistrés et une limite claire : pas de vérification de signature. Pensé pour déboguer OAuth sans envoyer le jeton.',
  tool_jwt_decoder_claims_local: 'Local',
  tool_jwt_decoder_claims_title: 'Horodatages des claims enregistrés',
  tool_jwt_decoder_claims_utc: 'UTC',
  tool_jwt_decoder_clear: 'Effacer',
  tool_jwt_decoder_copy_done: 'Copié',
  tool_jwt_decoder_copy_header: 'Copier en-tête',
  tool_jwt_decoder_copy_payload: 'Copier payload',
  tool_jwt_decoder_decode: 'Décoder',
  tool_jwt_decoder_desc:
    'Décodez header et payload JWT en local — sans vérifier la signature ; le collage reste dans le navigateur.',
  tool_jwt_decoder_description:
    'Collez un JWT pour lire header et payload en JSON dans votre navigateur — sans vérification de signature. Étapes : coller le jeton, décoder, copier header ou payload. Exemple : le jeton d’exemple affiche alg HS256 et iat 1516239022 en UTC et heure locale. Le jeton n’est pas envoyé.',
  tool_jwt_decoder_disclaimer:
    'Non vérifié — cet outil décode uniquement Base64url. Il ne valide pas les signatures et ne doit pas servir aux décisions d’autorisation.',
  tool_jwt_decoder_empty: 'Rien à copier — décodez d’abord un JWT.',
  tool_jwt_decoder_error_base64_header: 'L’en-tête n’est pas un Base64url valide.',
  tool_jwt_decoder_error_base64_payload: 'Le payload n’est pas un Base64url valide.',
  tool_jwt_decoder_error_json_header: 'L’en-tête décodé n’est pas du JSON valide.',
  tool_jwt_decoder_error_json_payload: 'Le payload décodé n’est pas du JSON valide.',
  tool_jwt_decoder_error_segments:
    'Un JWT doit comporter exactement trois segments séparés par des points (header.payload.signature).',
  tool_jwt_decoder_example:
    'Entrée : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9eIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c → Header : {"alg":"HS256","typ":"JWT"}. Payload : {"sub":"1234567890","name":"John Doe","iat":1516239022} avec iat en UTC et heure locale. Signature affichée brute — non vérifiée.',
  tool_jwt_decoder_example_title: 'Exemple',
  tool_jwt_decoder_faq_a1:
    'Non. Décoder inverse seulement Base64url sur header et payload ; vérifier la signature exige la clé de l’émetteur — volontairement absent ici.',
  tool_jwt_decoder_faq_a2:
    'Vérifiez d’avoir collé le jeton complet avec deux points et trois segments. Points en trop, collage tronqué ou chaîne non-JWT échouent.',
  tool_jwt_decoder_faq_a3:
    'JWT utilise Base64url : - au lieu de +, _ au lieu de /, souvent sans =. Un Base64 classique peut échouer sur des jetons URL-safe.',
  tool_jwt_decoder_faq_a4:
    'exp, iat et nbf sont des secondes Unix UTC. Cette page les affiche en UTC et dans votre fuseau local ; comparez exp à l’heure actuelle.',
  tool_jwt_decoder_faq_a5:
    'Non. Découpage, Base64url et JSON s’exécutent entièrement dans votre onglet.',
  tool_jwt_decoder_faq_q1: 'Cette page vérifie-t-elle la signature JWT ?',
  tool_jwt_decoder_faq_q2: 'Pourquoi mon jeton échoue sur le nombre de segments ?',
  tool_jwt_decoder_faq_q3: 'Quelle différence entre Base64url et Base64 ?',
  tool_jwt_decoder_faq_q4: 'Comment lire exp, iat ou nbf ?',
  tool_jwt_decoder_faq_q5: 'Mon jeton est-il envoyé à un serveur ?',
  tool_jwt_decoder_header_label: 'En-tête (JSON)',
  tool_jwt_decoder_how_body:
    'Collez un JWT complet (header.payload.signature). La page sépare par points, décode Base64url sur les deux premiers segments et formate le JSON. exp, iat et nbf numériques affichent UTC et heure locale. La signature n’est montrée qu’en texte brut — sans vérification.',
  tool_jwt_decoder_how_title: 'Fonctionnement',
  tool_jwt_decoder_input_label: 'Saisie JWT',
  tool_jwt_decoder_input_placeholder: 'Collez access token ou ID token…',
  tool_jwt_decoder_large_warn: 'Jeton volumineux (>8 Ko). Le décodage peut ralentir — évitez les gros JWE.',
  tool_jwt_decoder_payload_label: 'Payload (JSON)',
  tool_jwt_decoder_rules_body:
    'Ce que ce décodeur fait et ne fait pas : structure, Base64url, claims enregistrés et limite sans vérification.',
  tool_jwt_decoder_rules_item_1:
    'Structure : un JWT signé (JWS compact) a trois segments Base64url — header (alg, typ), payload (claims), signature (octets, pas JSON).',
  tool_jwt_decoder_rules_item_2:
    'Base64url : -→+, _→/, compléter le padding jusqu’à longueur %4, puis atob, relire ces octets en UTF-8 et JSON.parse — les claims accentués ou CJK restent lisibles. Les erreurs ciblent header ou payload.',
  tool_jwt_decoder_rules_item_3:
    'Claims enregistrés : exp, iat et nbf sont des secondes Unix UTC. Lire le JSON ne prouve pas que le jeton est fiable.',
  tool_jwt_decoder_rules_item_4:
    'Confidentialité : collage local ; pas de HMAC/RSA. N’autorisez pas en production sur le seul JSON décodé.',
  tool_jwt_decoder_rules_title: 'Règles à connaître',
  tool_jwt_decoder_sample: 'Charger l’exemple',
  tool_jwt_decoder_signature_label: 'Signature (brute, non vérifiée)',
  tool_jwt_decoder_title: 'Décodeur JWT — lire header et payload localement (sans vérifier)',
  tool_jwt_decoder_usecase_1:
    'Débogage OAuth : inspectez sub, scope et exp d’un access token avant la passerelle API.',
  tool_jwt_decoder_usecase_2:
    'Contrats API : confirmez iss et aud d’un ID token avec votre documentation.',
  tool_jwt_decoder_usecase_3:
    'Apprentissage : voir comment header, payload et signature forment trois segments JWS.',
  tool_jwt_decoder_usecases_title: 'Cas d’usage',
};
export default fr;
