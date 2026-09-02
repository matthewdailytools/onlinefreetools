/**
 * i18n tool shard (check-ssl-certificate-expiration / fr).
 * Scène : hostname → crt.sh CT → expiration du cert le plus récent (pas un handshake live).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'Vérifier l’expiration du certificat SSL',
	tool_check_ssl_certificate_expiration_home_desc:
		'Voyez quand expire le certificat CT le plus récent d’un hostname (crt.sh — pas un handshake live).',
	tool_check_ssl_certificate_expiration_desc:
		'Voyez quand expire le certificat CT le plus récent d’un hostname (crt.sh — pas un handshake live).',
	tool_check_ssl_certificate_expiration_title: 'Vérifier l’expiration du certificat SSL',
	tool_check_ssl_certificate_expiration_description:
		'Saisissez un hostname pour ce vérificateur d’expiration SSL : interroge Certificate Transparency via crt.sh, puis affiche notBefore, notAfter, émetteur et jours restants du match le plus récent. Pas un handshake TLS live. Exemple : example.com.',
	tool_check_ssl_certificate_expiration_host_label: 'Hostname',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: 'Vérifier',
	tool_check_ssl_certificate_expiration_sample: 'Exemple',
	tool_check_ssl_certificate_expiration_clear: 'Effacer',
	tool_check_ssl_certificate_expiration_running: 'Interrogation de Certificate Transparency…',
	tool_check_ssl_certificate_expiration_host_error: 'Saisissez un hostname (ou collez une URL https).',
	tool_check_ssl_certificate_expiration_error_prefix: 'Erreur : ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'Impossible d’interroger crt.sh. Limitation de débit ou indisponibilité possible.',
	tool_check_ssl_certificate_expiration_privacy_note:
		'Le hostname est envoyé à notre Worker pour interroger crt.sh. Nous ne le conservons pas comme base produit.',
	tool_check_ssl_certificate_expiration_result_found_yes: 'Certificat CT trouvé',
	tool_check_ssl_certificate_expiration_result_found_no: 'Aucune ligne CT pour cet hôte',
	tool_check_ssl_certificate_expiration_result_host: 'Hostname',
	tool_check_ssl_certificate_expiration_result_cn: 'Nom commun',
	tool_check_ssl_certificate_expiration_result_issuer: 'Émetteur',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter (expiration)',
	tool_check_ssl_certificate_expiration_result_days_left: 'Jours restants',
	tool_check_ssl_certificate_expiration_result_expired_yes: 'Expiré (selon CT notAfter)',
	tool_check_ssl_certificate_expiration_result_expired_no: 'Non expiré (selon CT notAfter)',
	tool_check_ssl_certificate_expiration_result_source: 'Source',
	tool_check_ssl_certificate_expiration_result_row_count: 'Lignes CT renvoyées',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'Retard des logs CT — ce n’est pas le certificat pair d’un handshake TLS live. Les dates peuvent suivre l’émission ou le renouvellement.',
	tool_check_ssl_certificate_expiration_result_none: '(aucun)',
	tool_check_ssl_certificate_expiration_how_title: 'Comment ça marche',
	tool_check_ssl_certificate_expiration_how_body:
		'Cette page répond à une question : quand expire le match CT le plus récent pour ce hostname ? Ce n’est pas un audit de handshake SSL live.',
	tool_check_ssl_certificate_expiration_how_item_1: 'Saisissez un hostname (pas de chemin).',
	tool_check_ssl_certificate_expiration_how_item_2: 'Cliquez sur Vérifier ; le Worker interroge le JSON crt.sh.',
	tool_check_ssl_certificate_expiration_how_item_3: 'Lisez notBefore, notAfter, émetteur et jours restants du match le plus récent.',
	tool_check_ssl_certificate_expiration_how_item_4: 'Traitez les dates comme publiées en CT — confirmez par handshake local si le timing compte.',
	tool_check_ssl_certificate_expiration_formula_title: 'Règles de requête CT (pas TLS live)',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers ne peuvent pas lire le certificat pair via fetch. Nous utilisons les données publiques Certificate Transparency via crt.sh.',
	tool_check_ssl_certificate_expiration_formula_item_1: 'Interroger crt.sh avec le hostname et parser la liste JSON.',
	tool_check_ssl_certificate_expiration_formula_item_2: 'Trier par notBefore décroissant et prendre la ligne la plus récente.',
	tool_check_ssl_certificate_expiration_formula_item_3: 'Afficher notBefore, notAfter, émetteur, daysLeft et expired.',
	tool_check_ssl_certificate_expiration_formula_item_4: 'Les logs CT peuvent retarder l’émission ou le renouvellement live.',
	tool_check_ssl_certificate_expiration_formula_item_5: 'Hôtes privés ou bloqués rejetés. Pas un walker de chaîne complète ni un outil de commande CA.',
	tool_check_ssl_certificate_expiration_example_title: 'Exemple',
	tool_check_ssl_certificate_expiration_example:
		'Entrée d’exemple example.com. Le Worker interroge crt.sh, choisit le certificat le plus récent et affiche notBefore, notAfter, émetteur, daysLeft et l’avertissement de retard CT.',
	tool_check_ssl_certificate_expiration_usecases_title: 'Cas d’usage',
	tool_check_ssl_certificate_expiration_usecase_1: 'Checker d’expiration SSL avant renouvellement : jours restants sur la feuille CT la plus récente.',
	tool_check_ssl_certificate_expiration_usecase_2: 'Après bascule CDN : confirmer qu’un nouveau notAfter apparaît en CT.',
	tool_check_ssl_certificate_expiration_usecase_3: 'Inventaire rapide de domaines fournisseurs quand seules les dates d’expiration comptent.',
	tool_check_ssl_certificate_expiration_faq_q1: 'Est-ce un handshake SSL live ?',
	tool_check_ssl_certificate_expiration_faq_a1:
		'Non. Workers ne lisent pas le certificat pair via fetch ; nous interrogeons Certificate Transparency (crt.sh).',
	tool_check_ssl_certificate_expiration_faq_q2: 'Pourquoi les dates peuvent-elles retarder ?',
	tool_check_ssl_certificate_expiration_faq_a2:
		'Les logs CT peuvent suivre l’émission ou le renouvellement. Si le timing compte, confirmez par handshake local.',
	tool_check_ssl_certificate_expiration_faq_q3: 'Vérifiez-vous toute la chaîne ?',
	tool_check_ssl_certificate_expiration_faq_a3:
		'Le focus est l’expiration du match le plus récent. Un checker chaîne seule est secondaire — pas le H1.',
	tool_check_ssl_certificate_expiration_faq_q4: 'Le titre est-il « SSL certificate checker » ?',
	tool_check_ssl_certificate_expiration_faq_a4:
		'Non. Le H1 est Vérifier l’expiration du certificat SSL. Le head plus large n’est pas le titre unique.',
	tool_check_ssl_certificate_expiration_faq_q5: 'Et les hôtes en IP privée ?',
	tool_check_ssl_certificate_expiration_faq_a5:
		'Les hôtes privés ou bloqués sont rejetés. Voir l’outil des plages CIDR privées pour le contexte.',
	tool_check_ssl_certificate_expiration_references: 'crt.sh ; Certificate Transparency.',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default fr;
