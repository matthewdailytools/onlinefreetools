/**
 * i18n tool shard (private-cidr-ranges / fr).
 * Local search: plages cidr privees / adresses ip privees cidr.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'Plages CIDR privées — Vérifiez si une IP ou un préfixe est privé ou à usage spécial',
	tool_private_cidr_ranges_desc:
		'Plages CIDR privées : RFC1918, CGNAT et ULA. Exemple : 100.64.1.10 → espace partagé CGNAT.',
	tool_private_cidr_ranges_description:
		'Plages CIDR privées : collez une IP ou un CIDR pour voir les plages IP privées RFC1918, CGNAT (100.64/10), ULA IPv6 et blocs de documentation (exemple : 100.64.1.10 → espace partagé). Tableau cliquable avec note sur Tailscale et CGNAT. La vérification reste sur votre appareil et n’est pas envoyée au serveur.',
	tool_private_cidr_ranges_article:
		'Collez une adresse ou un CIDR pour faire correspondre des préfixes privés ou à usage spécial (RFC1918, CGNAT, link-local, loopback, documentation, ULA IPv6). Cliquez une ligne du tableau pour charger ce préfixe. Cette page n’étend pas de listes d’hôtes.',
	tool_private_cidr_ranges_check: 'Vérifier',
	tool_private_cidr_ranges_sample: 'Charger l’exemple',
	tool_private_cidr_ranges_clear: 'Effacer',
	tool_private_cidr_ranges_copy: 'Copier le résumé',
	tool_private_cidr_ranges_copy_done: 'Copié',
	tool_private_cidr_ranges_input_label: 'Adresse IP ou CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 ou 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'Tous',
	tool_private_cidr_ranges_filter_v4: 'Tableau IPv4',
	tool_private_cidr_ranges_filter_v6: 'Tableau IPv6',
	tool_private_cidr_ranges_result_label: 'Correspondances',
	tool_private_cidr_ranges_table_title: 'Tableau de référence (cliquer une ligne)',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: 'Nom',
	tool_private_cidr_ranges_col_family: 'Famille',
	tool_private_cidr_ranges_col_spec: 'Norme',
	tool_private_cidr_ranges_no_match:
		'Absent de la liste intégrée privé/usage spécial (peut être unicast global ou autre espace).',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale et d’autres produits utilisent souvent cet espace CGNAT (100.64.0.0/10).',
	tool_private_cidr_ranges_err_empty: 'Saisissez une adresse IPv4/IPv6 ou un CIDR.',
	tool_private_cidr_ranges_err_parse: 'Impossible d’interpréter comme adresse IP ou CIDR.',
	tool_private_cidr_ranges_name_rfc1918_10: 'Privé RFC1918',
	tool_private_cidr_ranges_name_rfc1918_172: 'Privé RFC1918',
	tool_private_cidr_ranges_name_rfc1918_192: 'Privé RFC1918',
	tool_private_cidr_ranges_name_cgnat: 'Espace partagé CGNAT',
	tool_private_cidr_ranges_name_loopback: 'Loopback',
	tool_private_cidr_ranges_name_linklocal_v4: 'Link-local',
	tool_private_cidr_ranges_name_doc_testnet1: 'Documentation (TEST-NET-1)',
	tool_private_cidr_ranges_name_doc_testnet2: 'Documentation (TEST-NET-2)',
	tool_private_cidr_ranges_name_doc_testnet3: 'Documentation (TEST-NET-3)',
	tool_private_cidr_ranges_name_ula: 'ULA IPv6',
	tool_private_cidr_ranges_name_linklocal_v6: 'Link-local IPv6',
	tool_private_cidr_ranges_name_doc_v6: 'Documentation IPv6',
	tool_private_cidr_ranges_note_rfc1918_10: 'Usage privé — 10.0.0.0/8 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_172: 'Usage privé — 172.16.0.0/12 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_192: 'Usage privé — 192.168.0.0/16 (RFC 1918).',
	tool_private_cidr_ranges_note_cgnat: 'Espace partagé pour carrier-grade NAT (RFC 6598). Pas RFC1918.',
	tool_private_cidr_ranges_note_loopback: 'Loopback hôte — 127.0.0.0/8.',
	tool_private_cidr_ranges_note_linklocal_v4: 'Link-local APIPA — 169.254.0.0/16.',
	tool_private_cidr_ranges_note_doc_testnet1: 'Documentation uniquement — ne pas utiliser en production (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet2: 'Documentation uniquement — ne pas utiliser en production (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet3: 'Documentation uniquement — ne pas utiliser en production (RFC 5737).',
	tool_private_cidr_ranges_note_ula: 'Adresses locales uniques — fc00::/7 (RFC 4193).',
	tool_private_cidr_ranges_note_linklocal_v6: 'Link-local IPv6 — fe80::/10.',
	tool_private_cidr_ranges_note_doc_v6: 'Préfixe de documentation — 2001:db8::/32.',
	tool_private_cidr_ranges_how_title: 'Fonctionnement',
	tool_private_cidr_ranges_how_body:
		'Vous classez une adresse dans un CIDR privé ou à usage spécial (RFC1918, CGNAT, ULA, documentation…), sans compter les hôtes. Collez une adresse, lisez la correspondance ou cliquez le tableau.',
	tool_private_cidr_ranges_how_item_1:
		'Vérifiez que vous classez des blocs privés/usage spécial — pas une expansion de liste d’hôtes.',
	tool_private_cidr_ranges_how_item_2: 'Collez une adresse IPv4/IPv6 ou un CIDR (exemple 100.64.1.10).',
	tool_private_cidr_ranges_how_item_3:
		'Lisez la catégorie, le CIDR et la note RFC (et l’indication Tailscale si CGNAT correspond).',
	tool_private_cidr_ranges_how_item_4: 'Optionnel : cliquez une ligne du tableau pour tester ce préfixe.',
	tool_private_cidr_ranges_how_item_5:
		'Sans correspondance, considérez l’adresse hors de cette liste — confirmez avant de la dire « privée ».',
	tool_private_cidr_ranges_formula_title: 'Règles',
	tool_private_cidr_ranges_formula_body:
		'L’entrée est analysée comme adresse ou préfixe, puis testée contre le tableau intégré. Les correspondances les plus longues (plus spécifiques) apparaissent en premier.',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 utilise des entiers 32 bits ; IPv6 des valeurs 128 bits. Les familles ne se mélangent pas.',
	tool_private_cidr_ranges_formula_item_2: 'Pour une adresse seule : correspondre à chaque CIDR du tableau qui la contient.',
	tool_private_cidr_ranges_formula_item_3:
		'Pour un CIDR en entrée : correspondre aux entrées qui contiennent entièrement ce préfixe (test de sous-ensemble).',
	tool_private_cidr_ranges_formula_item_4:
		'Trier par longueur de préfixe décroissante pour afficher d’abord le bloc le plus spécifique.',
	tool_private_cidr_ranges_example_title: 'Exemple',
	tool_private_cidr_ranges_example:
		'Entrée : 100.64.1.10. Sortie : espace partagé CGNAT 100.64.0.0/10 (RFC 6598), avec note que Tailscale et produits similaires utilisent souvent cet espace. Entrée 10.0.0.5 correspond à RFC1918 10.0.0.0/8.',
	tool_private_cidr_ranges_usecases_title: 'Cas d’usage',
	tool_private_cidr_ranges_usecase_1:
		'Choisir un bloc VPC ou lab et confirmer qu’il est bien RFC1918 privé avant d’ouvrir des règles firewall.',
	tool_private_cidr_ranges_usecase_2:
		'Voir des adresses 100.x et distinguer l’espace CGNAT / Tailscale des plages IP privées RFC1918.',
	tool_private_cidr_ranges_usecase_3:
		'Vérifier une ULA IPv6 ou une adresse documentation 2001:db8 avant de la traiter en routage production.',
	tool_private_cidr_ranges_faq_q1: 'Pourquoi signaler les préfixes de documentation ?',
	tool_private_cidr_ranges_faq_a1:
		'Des blocs comme 192.0.2.0/24 et 2001:db8::/32 sont réservés aux exemples et docs. Les utiliser en production casse les attentes de connectivité.',
	tool_private_cidr_ranges_faq_q2: 'Quels sont les trois blocs CIDR privés RFC1918 ?',
	tool_private_cidr_ranges_faq_a2:
		'10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16 — les plages IP privées classiques en notation CIDR.',
	tool_private_cidr_ranges_faq_q3: 'Mes adresses sont-elles envoyées ou les hôtes développés ?',
	tool_private_cidr_ranges_faq_a3:
		'Non — pas de liste d’hôtes ni de broadcast ici ; cela relève d’un outil CIDR-to-range. La vérification reste sur l’appareil et n’est pas envoyée au serveur.',
	tool_private_cidr_ranges_faq_q4: '100.64.0.0/10 est-il « privé » ? Et Tailscale ?',
	tool_private_cidr_ranges_faq_a4:
		'C’est un espace partagé pour carrier-grade NAT (RFC 6598), pas RFC1918. Tailscale et d’autres overlays utilisent souvent ce CIDR CGNAT ; cette page étiquette seulement l’espace — ce n’est pas une console Tailscale.',
	tool_private_cidr_ranges_faq_q5: 'Qu’est-ce que l’ULA IPv6 (fc00::/7) ?',
	tool_private_cidr_ranges_faq_a5:
		'Adresses locales uniques pour réseaux locaux. Ce ne sont pas des unicast Internet publics ; ne comptez pas sur un routage global.',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — Address Allocation for Private Internets',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — IANA-Reserved IPv4 Prefix for Shared Address Space',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — Unique Local IPv6 Unicast Addresses',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — IPv4 Address Blocks Reserved for Documentation',
	tool_private_cidr_ranges_disclaimer:
		'Les correspondances suivent les RFC publiés pour espaces privés et usage spécial. Ceci n’est pas un conseil de routage ou firewall ; validez les changements critiques dans votre lab.',
};

export default fr;
