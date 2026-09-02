/**
 * i18n tool shard (spf-dkim-dmarc-checker / fr).
 * Recherche: vérificateur spf dkim dmarc; checker enregistrement dmarc; lookup spf.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'Vérificateur SPF DKIM DMARC',
	tool_spf_dkim_dmarc_checker_desc:
		'Vérifiez SPF, DKIM et DMARC d’un domaine et lisez ~all/-all et la politique p= en langage clair.',
	tool_spf_dkim_dmarc_checker_description:
		'Saisissez le domaine d’envoi et un sélecteur DKIM optionnel (défaut google). DoH interroge SPF, _dmarc et selector._domainkey, puis explique ~all/-all et p=. Exemple : google.com.',
	tool_spf_dkim_dmarc_checker_domain_label: 'Domaine',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'Sélecteur DKIM',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: 'Vérifier',
	tool_spf_dkim_dmarc_checker_sample: 'Exemple',
	tool_spf_dkim_dmarc_checker_clear: 'Effacer',
	tool_spf_dkim_dmarc_checker_running: 'Interrogation SPF, DKIM et DMARC via DNS…',
	tool_spf_dkim_dmarc_checker_domain_error: 'Saisissez un nom de domaine valide (hôte seul, ou collez une URL complète).',
	tool_spf_dkim_dmarc_checker_error_prefix: 'Erreur : ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'Échec de la requête DNS. Le résolveur peut être injoignable, ou le nom bloqué.',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'Le domaine et le sélecteur DKIM sont envoyés à notre Worker pour DNS-over-HTTPS. Nous ne les conservons pas comme base produit.',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'Trouvé',
	tool_spf_dkim_dmarc_checker_result_found_no: 'Introuvable',
	tool_spf_dkim_dmarc_checker_result_record: 'Enregistrement',
	tool_spf_dkim_dmarc_checker_result_explain: 'Explication',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'qualificatif all',
	tool_spf_dkim_dmarc_checker_result_policy: 'Politique DMARC (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'Sélecteur',
	tool_spf_dkim_dmarc_checker_result_pubkey: 'Clé publique (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'Présente',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'Absente ou vide',
	tool_spf_dkim_dmarc_checker_how_title: 'Fonctionnement',
	tool_spf_dkim_dmarc_checker_how_body:
		'Les contrôles de délivrabilité exigent souvent SPF, DKIM et DMARC ensemble. Saisissez le domaine d’envoi, ajustez le sélecteur si besoin, puis lisez chaque TXT avec un résumé de politique.',
	tool_spf_dkim_dmarc_checker_how_item_1:
		'Saisissez le domaine d’envoi et le sélecteur DKIM optionnel (défaut google).',
	tool_spf_dkim_dmarc_checker_how_item_2:
		'Cliquez sur Vérifier ; le Worker interroge les TXT via DoH pour SPF, _dmarc et selector._domainkey.',
	tool_spf_dkim_dmarc_checker_how_item_3:
		'Lisez chaque enregistrement et l’explication de ~all/-all ainsi que de la politique DMARC p=.',
	tool_spf_dkim_dmarc_checker_how_item_4:
		'Corrigez le DNS chez votre fournisseur puis revérifiez — cette page ne réécrit pas votre zone.',
	tool_spf_dkim_dmarc_checker_formula_title: 'Ce que nous interrogeons',
	tool_spf_dkim_dmarc_checker_formula_body:
		'Les requêtes suivent les formes TXT publiques des RFC 7208, 6376 et 7489. Nous résumons les champs de politique ; nous n’envoyons pas de mail ni ne sondons les boîtes.',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF : TXT du domaine en v=spf1 ; nous affichons le qualificatif all final (~all soft fail, -all hard fail).',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC : TXT sur _dmarc.domaine en v=DMARC1 ; nous mettons en avant p= (none / quarantine / reject) et pct optionnel.',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM : TXT sur {selector}._domainkey.domaine ; nous vérifions la présence d’une clé publique p= non vide.',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'Les enregistrements manquants sont signalés clairement. Un échec DoH apparaît en erreur — ce n’est pas le test de signature live de votre ESP.',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'Pas de sondage SMTP RCPT ni d’édition de zone. Un validateur « l’adresse e-mail existe-t-elle ? » est hors périmètre.',
	tool_spf_dkim_dmarc_checker_example_title: 'Exemple',
	tool_spf_dkim_dmarc_checker_example:
		'Entrée d’exemple google.com avec sélecteur DKIM google. Le Worker interroge SPF, _dmarc.google.com et google._domainkey.google.com, puis affiche trouvé/enregistrement/explication.',
	tool_spf_dkim_dmarc_checker_usecases_title: 'Quand cela aide',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'Avant la mise en ligne : après publication du DNS ESP, confirmez SPF, DKIM et DMARC du domaine d’envoi.',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'Passe checker d’enregistrement DMARC : lisez p=none vs quarantine/reject sans vous limiter au TXT brut.',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'Lookup SPF si le mail part en spam : voyez ~all ou -all, puis alignez le sélecteur DKIM sur votre ESP.',
	tool_spf_dkim_dmarc_checker_faq_q1: 'Pourquoi trois enregistrements sur une page ?',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'Les boîtes évaluent souvent les trois ensemble. Un checker DMARC seul peut manquer un SPF cassé ou un mauvais sélecteur DKIM.',
	tool_spf_dkim_dmarc_checker_faq_q2: 'Quel est le sélecteur DKIM par défaut ?',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google — courant pour Google Workspace. Changez-le si votre ESP publie un autre (par ex. s1 ou k1).',
	tool_spf_dkim_dmarc_checker_faq_q3: 'Est-ce un validateur d’adresse e-mail ?',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'Non. Authentification DNS du domaine seulement (lookup SPF, clé DKIM, politique DMARC). L’existence des boîtes est hors périmètre.',
	tool_spf_dkim_dmarc_checker_faq_q4: 'N’affichez-vous que le TXT brut ?',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'Non. Les résultats incluent l’enregistrement plus une ligne d’explication des mécanismes SPF all et de la politique DMARC p=.',
	tool_spf_dkim_dmarc_checker_faq_q5: 'Mon domaine est-il stocké ?',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'Le domaine et le sélecteur doivent atteindre le Worker pour DNS-over-HTTPS. Nous ne stockons pas les contrôles comme base produit durable. C’est un outil DNS edge, pas « sans envoi ».',
	tool_spf_dkim_dmarc_checker_references: 'RFC 7208 SPF ; RFC 6376 DKIM ; RFC 7489 DMARC.',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default fr;
