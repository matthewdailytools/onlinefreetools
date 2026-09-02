/**
 * i18n tool shard (validate-security-txt / fr).
 * Scène : domaine → récupérer security.txt → checklist RFC 9116.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_validate_security_txt_home_title: 'Valider security.txt',
	tool_validate_security_txt_home_desc:
		'Vérifiez si un site publie un security.txt valide avec Contact et Expires.',
	tool_validate_security_txt_desc:
		'Vérifiez si un site publie un security.txt valide avec Contact et Expires.',
	tool_validate_security_txt_title: 'Valider security.txt',
	tool_validate_security_txt_description:
		'Saisissez un domaine ou une URL pour ce vérificateur security.txt : récupère /.well-known/security.txt (repli /security.txt), analyse Contact et Expires, signale les champs obligatoires manquants. Exemple : google.com.',
	tool_validate_security_txt_url_label: 'Domaine ou URL',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ ou example.com',
	tool_validate_security_txt_check: 'Valider',
	tool_validate_security_txt_sample: 'Exemple',
	tool_validate_security_txt_clear: 'Effacer',
	tool_validate_security_txt_running: 'Récupération de security.txt…',
	tool_validate_security_txt_url_error: 'Saisissez un domaine ou une URL http(s).',
	tool_validate_security_txt_error_prefix: 'Erreur : ',
	tool_validate_security_txt_fetch_failed:
		'Impossible de récupérer security.txt. L’hôte peut être hors ligne ou bloquer les bots.',
	tool_validate_security_txt_privacy_note:
		'L’URL et le nom d’hôte sont envoyés à notre Worker pour récupérer security.txt. Nous ne les conservons pas comme base produit.',
	tool_validate_security_txt_result_found_yes: 'security.txt trouvé',
	tool_validate_security_txt_result_found_no: 'security.txt introuvable',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: 'Obligatoires manquants',
	tool_validate_security_txt_result_missing_none: 'Champs obligatoires présents',
	tool_validate_security_txt_result_expired_yes: 'Expires dépassé',
	tool_validate_security_txt_result_expired_no: 'Expires encore valide (ou non analysé)',
	tool_validate_security_txt_result_file_url: 'URL récupérée',
	tool_validate_security_txt_result_http_status: 'Statut HTTP',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'Aperçu security.txt',
	tool_validate_security_txt_result_none: '(aucun)',
	tool_validate_security_txt_how_title: 'Comment ça marche',
	tool_validate_security_txt_how_body:
		'Ce validateur répond à une question : le site publie-t-il un fichier de découverte avec un Contact utilisable et un Expires cohérent ?',
	tool_validate_security_txt_how_item_1: 'Saisissez un domaine ou une URL HTTPS.',
	tool_validate_security_txt_how_item_2:
		'Cliquez sur Valider ; le Worker tente /.well-known/security.txt puis /security.txt.',
	tool_validate_security_txt_how_item_3:
		'Examinez Contact, Expires, Preferred-Languages, Canonical et l’aperçu.',
	tool_validate_security_txt_how_item_4:
		'Corrigez les champs signalés avant de publier votre propre security.txt.',
	tool_validate_security_txt_formula_title: 'Règles de champs RFC 9116',
	tool_validate_security_txt_formula_body:
		'Aligné sur la RFC 9116 et les pratiques courantes de securitytxt.org.',
	tool_validate_security_txt_formula_item_1:
		'Ordre : d’abord /.well-known/security.txt, puis /security.txt.',
	tool_validate_security_txt_formula_item_2:
		'Contact est obligatoire ; nous listons les valeurs et signalons l’absence.',
	tool_validate_security_txt_formula_item_3:
		'Expires est fortement attendu ; manquant ou date passée = lacune.',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages et Canonical s’affichent s’ils existent ; pas obligatoires pour la checklist.',
	tool_validate_security_txt_formula_item_5:
		'Récupération et analyse seulement — pas une boîte à vulnérabilités ni un pentest.',
	tool_validate_security_txt_example_title: 'Exemple',
	tool_validate_security_txt_example:
		'Entrée d’exemple https://www.google.com/. Le Worker teste well-known et la racine, puis affiche found, Contact, Expires, missingRequired, expired et l’aperçu.',
	tool_validate_security_txt_usecases_title: 'Cas d’usage',
	tool_validate_security_txt_usecase_1:
		'Vérificateur security.txt avant mise en ligne : well-known répond-il avec un Contact ?',
	tool_validate_security_txt_usecase_2:
		'Après édition d’Expires : confirmer que la date est lue et non dépassée.',
	tool_validate_security_txt_usecase_3:
		'Avant de contacter un éditeur : vérifier qu’il publie le fichier de découverte.',
	tool_validate_security_txt_faq_q1: 'Où doit se trouver security.txt ?',
	tool_validate_security_txt_faq_a1:
		'Préférez /.well-known/security.txt. /security.txt sur le même hôte est le repli documenté.',
	tool_validate_security_txt_faq_q2: 'Quels champs sont obligatoires ?',
	tool_validate_security_txt_faq_a2:
		'Au moins Contact. Expires est fortement attendu selon la pratique RFC 9116 ; nous signalons les lacunes.',
	tool_validate_security_txt_faq_q3: 'Le H1 est-il « RFC 9116 » ?',
	tool_validate_security_txt_faq_a3:
		'Non. Le H1 est Valider security.txt. La RFC figure dans Règles et Références.',
	tool_validate_security_txt_faq_q4: 'Stockez-vous les rapports de vulnérabilité ?',
	tool_validate_security_txt_faq_a4:
		'Non. Nous récupérons et analysons uniquement le fichier publié. Pas une boîte de divulgation.',
	tool_validate_security_txt_faq_q5: 'Mon URL est-elle conservée ?',
	tool_validate_security_txt_faq_a5:
		'L’URL/hôte doit atteindre le Worker pour la récupération. Nous ne stockons pas les contrôles comme base produit. Outil edge, pas « sans envoi ».',
	tool_validate_security_txt_references: 'RFC 9116 ; securitytxt.org.',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default fr;
