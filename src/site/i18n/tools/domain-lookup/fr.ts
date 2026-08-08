/**
 * i18n tool shard (domain-lookup / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
	tool_domain_lookup_article:
		'Consultez en un seul endroit les enregistrements DNS en direct et les données d’enregistrement d’un domaine. Les requêtes passent par notre edge vers DNS-over-HTTPS et RDAP ; les contacts sont souvent masqués et le résultat peut différer de votre résolveur local.',
	tool_domain_lookup_clear: 'Effacer',
	tool_domain_lookup_col_data: 'Données',
	tool_domain_lookup_col_name: 'Nom',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'Type',
	tool_domain_lookup_copied: 'Copié',
	tool_domain_lookup_copy: 'Copier le résumé',
	tool_domain_lookup_desc:
		'Recherche de domaine : vérifiez DNS et enregistrement (WHOIS/RDAP) — A/MX/NS, registrar et expiration en une vue.',
	tool_domain_lookup_description:
		'Recherche de domaine en ligne : vérifiez les enregistrements DNS live et les données d’enregistrement type WHOIS via RDAP. Étapes : saisissez un domaine comme example.com, lancez DNS-over-HTTPS et RDAP en parallèle, puis comparez A/AAAA/MX/NS/TXT avec registrar, statut et dates d’expiration. Les contacts sont souvent masqués ; la requête passe par notre edge sans historique conservé.',
	tool_domain_lookup_domain_label: 'Domaine',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: 'Aucune réponse DNS pour les types demandés.',
	tool_domain_lookup_dns_fail: 'Échec de la recherche DNS.',
	tool_domain_lookup_dns_heading: 'Enregistrements DNS',
	tool_domain_lookup_err_empty: 'Saisissez un nom de domaine.',
	tool_domain_lookup_err_need_one: 'Sélectionnez DNS, enregistrement ou les deux.',
	tool_domain_lookup_events: 'Événements',
	tool_domain_lookup_example:
		'Exemple : recherchez example.com → DNS peut afficher des A/AAAA/NS publics via DoH ; Enregistrement peut lister registrar, codes de statut et événements d’expiration depuis RDAP (champs parfois masqués).',
	tool_domain_lookup_example_title: 'Exemple',
	tool_domain_lookup_faq_a1:
		'On parle encore de WHOIS. Pour la plupart des gTLD, le registre publie les mêmes données via RDAP (JSON sur HTTPS). Cet outil utilise RDAP ; certains ccTLD peuvent ne pas avoir de RDAP.',
	tool_domain_lookup_faq_a2:
		'Le navigateur appelle notre API edge ; le worker interroge DoH et RDAP en amont. Nous ne proposons pas d’historique de domaines ; considérez le résultat comme éphémère.',
	tool_domain_lookup_faq_a3:
		'Après les règles de confidentialité, email et téléphone du titulaire sont souvent masqués. Registrar, statut et dates restent en général visibles. Nous affichons ce que renvoie le serveur RDAP.',
	tool_domain_lookup_faq_a4:
		'Les réponses DNS viennent d’une vue publique (DoH). Les NS RDAP sont ceux enregistrés au registre. Propagation ou changement récent peuvent les faire diverger.',
	tool_domain_lookup_faq_a5:
		'TLD non pris en charge, délai dépassé ou DNS vide type NXDOMAIN s’affichent par section pour qu’un échec ne masque pas l’autre.',
	tool_domain_lookup_faq_q1: 'Est-ce une recherche WHOIS ?',
	tool_domain_lookup_faq_q2: 'Conservez-vous les domaines que je consulte ?',
	tool_domain_lookup_faq_q3: 'Pourquoi le contact du titulaire est-il vide ?',
	tool_domain_lookup_faq_q4: 'Pourquoi les NS DNS peuvent-ils différer de l’enregistrement ?',
	tool_domain_lookup_faq_q5: 'Que se passe-t-il si DNS ou RDAP échoue ?',
	tool_domain_lookup_how_body:
		'Saisissez le domaine et choisissez DNS, enregistrement ou les deux. Depuis l’edge, le worker interroge Cloudflare DNS-over-HTTPS pour les types courants et le RDAP du TLD (via bootstrap IANA) pour registrar, statut, événements et NS du registre. Chaque bloc peut réussir ou échouer indépendamment.',
	tool_domain_lookup_how_title: 'Fonctionnement',
	tool_domain_lookup_loading: 'Recherche…',
	tool_domain_lookup_lookup: 'Rechercher',
	tool_domain_lookup_ns_mismatch:
		'Note : les NS DNS diffèrent des NS RDAP — souvent à cause de la propagation ou d’un changement récent.',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: 'Enregistrement',
	tool_domain_lookup_rdap_fail: 'Échec de la recherche d’enregistrement (RDAP).',
	tool_domain_lookup_rdap_heading: 'Enregistrement (RDAP)',
	tool_domain_lookup_rdap_link: 'URL RDAP',
	tool_domain_lookup_rdap_ns: 'NS du registre',
	tool_domain_lookup_rdap_ok: 'Données d’enregistrement depuis RDAP.',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — API DNS over HTTPS',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup (RDAP)',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — Noms de domaine',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'Registrar',
	tool_domain_lookup_rules_body:
		'Utilisez cette page pour inspecter le DNS du résolveur et les données du registre. Limites et sens :',
	tool_domain_lookup_rules_item_1:
		'Types DNS interrogés : A, AAAA, CNAME, MX, NS, TXT, SOA (vue DoH publique).',
	tool_domain_lookup_rules_item_2:
		'Les données d’enregistrement viennent de RDAP, successeur structuré du WHOIS classique pour la plupart des gTLD.',
	tool_domain_lookup_rules_item_3:
		'Les contacts peuvent être masqués ; ne supposez pas des détails complets du titulaire.',
	tool_domain_lookup_rules_item_4:
		'Réponses DNS et NS RDAP peuvent diverger pendant la propagation.',
	tool_domain_lookup_rules_item_5:
		'Les requêtes passent par notre edge vers les serveurs amont ; nous ne modifions ni votre DNS ni votre enregistrement.',
	tool_domain_lookup_rules_title: 'Ce que vous obtenez',
	tool_domain_lookup_sample: 'Exemple',
	tool_domain_lookup_status: 'Statut',
	tool_domain_lookup_title: 'Recherche de domaine — DNS et données d’enregistrement',
	tool_domain_lookup_usecase_1:
		'Avant mise en production : confirmez que A/AAAA/CNAME pointent vers l’hôte attendu.',
	tool_domain_lookup_usecase_2:
		'Renouvellement ou transfert : vérifiez registrar, statut et événements d’expiration (contacts parfois masqués).',
	tool_domain_lookup_usecase_3:
		'Courriel : inspectez MX et extraits TXT associés (pas un audit complet de délivrabilité).',
	tool_domain_lookup_usecases_title: 'Cas d’usage',
};
export default fr;
