/**
 * i18n tool shard (ipv6-cidr / fr).
 * Requêtes locales : calculatrice cidr ipv6 / notation cidr ipv6.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_ipv6_cidr_title: 'Calculateur CIDR IPv6 — Développez un préfixe en plage d’adresses',
	tool_ipv6_cidr_desc:
		'Calculateur CIDR IPv6 : collez 2001:db8:1::/64 pour le réseau, la dernière adresse et la forme compressée. Sur votre appareil.',
	tool_ipv6_cidr_description:
		'Calculateur CIDR IPv6 : collez un préfixe (exemple 2001:db8:1::/64) pour obtenir l’adresse réseau, la dernière, le nombre d’adresses et les formes compressée/étendue RFC 5952. Un avertissement apparaît si le préfixe n’est pas aligné sur un nibble. Couvre /64 LAN, /127 point à point et /128 hôte. Calcul local, rien n’est envoyé à un serveur.',
	tool_ipv6_cidr_article:
		'Transforme un CIDR IPv6 en plage réseau et texte compressé canonique. Un préfixe hors nibble n’est qu’un avertissement.',
	tool_ipv6_cidr_calculate: 'Calculer',
	tool_ipv6_cidr_sample: 'Charger l’exemple',
	tool_ipv6_cidr_clear: 'Effacer',
	tool_ipv6_cidr_copy: 'Copier les champs',
	tool_ipv6_cidr_copy_done: 'Copié',
	tool_ipv6_cidr_input_label: 'CIDR IPv6',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: 'Résultat',
	tool_ipv6_cidr_lbl_network: 'Réseau (compressé)',
	tool_ipv6_cidr_lbl_network_exp: 'Réseau (étendu)',
	tool_ipv6_cidr_lbl_last: 'Dernière adresse (compressée)',
	tool_ipv6_cidr_lbl_last_exp: 'Dernière adresse (étendue)',
	tool_ipv6_cidr_lbl_prefix: 'Longueur de préfixe',
	tool_ipv6_cidr_lbl_count: 'Nombre d’adresses',
	tool_ipv6_cidr_lbl_nibble: 'Aligné nibble',
	tool_ipv6_cidr_nibble_yes: 'Oui — la longueur est un multiple de 4.',
	tool_ipv6_cidr_nibble_no:
		'Non — ce préfixe n’est pas sur une frontière de 4 bits. Le DNS inverse (ip6.arpa) et beaucoup de FAI attendent des pas /4, /8, … /64, /68.',
	tool_ipv6_cidr_note_64: '/64 est le préfixe LAN habituel.',
	tool_ipv6_cidr_note_127: '/127 est le préfixe point à point (RFC 6164) : deux adresses.',
	tool_ipv6_cidr_note_128: '/128 est un hôte unique.',
	tool_ipv6_cidr_err_empty: 'Saisissez un CIDR IPv6 tel que 2001:db8:1::/64.',
	tool_ipv6_cidr_err_parse: 'Impossible d’interpréter cela comme une adresse ou un CIDR IPv6.',
	tool_ipv6_cidr_err_prefix: 'La longueur de préfixe doit être un entier entre 0 et 128.',
	tool_ipv6_cidr_err_ipv4: 'Cette page est réservée à IPv6. Pour IPv4, utilisez CIDR vers plage IP.',
	tool_ipv6_cidr_how_title: 'Fonctionnement',
	tool_ipv6_cidr_how_body:
		'Le calculateur CIDR IPv6 transforme un préfixe en plage réseau et notation compressée. Ce n’est pas un test de connectivité IPv6.',
	tool_ipv6_cidr_how_item_1: 'Vérifiez que la tâche est de calculer la plage d’un CIDR IPv6, pas de tester la connexion.',
	tool_ipv6_cidr_how_item_2: 'Collez un CIDR IPv6 tel que 2001:db8:1::/64 (ou chargez l’exemple).',
	tool_ipv6_cidr_how_item_3: 'Lisez le réseau et la dernière adresse (compressés et étendus) puis copiez ce qu’il faut.',
	tool_ipv6_cidr_how_item_4: 'Si le préfixe n’est pas un multiple de 4, lisez l’avertissement nibble.',
	tool_ipv6_cidr_how_item_5: 'Pour IPv4, utilisez CIDR vers plage IP ; pour agréger début–fin, IP range to CIDR.',
	tool_ipv6_cidr_formula_title: 'Formule',
	tool_ipv6_cidr_formula_body:
		'Analyse le texte IPv6 (un seul « :: »). Masque = 2^128 − 2^(128−préfixe). Réseau = adresse AND masque. Dernière = réseau OR NOT masque. Compression RFC 5952.',
	tool_ipv6_cidr_formula_item_1: 'Refuse les littéraux IPv4 et les préfixes hors 0–128.',
	tool_ipv6_cidr_formula_item_2: 'AND/OR sur 128 bits pour le réseau et la dernière adresse.',
	tool_ipv6_cidr_formula_item_3: 'Tailles spéciales : /128 → 1 ; /127 → 2 (RFC 6164) ; /64 → 2^64.',
	tool_ipv6_cidr_formula_item_4: 'Alignement nibble : préfixe modulo 4 = 0. Les autres longueurs calculent avec un avis.',
	tool_ipv6_cidr_example_title: 'Exemple',
	tool_ipv6_cidr_example:
		'Entrée : 2001:db8:1::/64. Sortie : réseau 2001:db8:1:: (étendu 2001:0db8:0001:0000:0000:0000:0000:0000), dernière 2001:db8:1:0:ffff:ffff:ffff:ffff, nombre 2^64, nibble aligné oui.',
	tool_ipv6_cidr_usecases_title: 'Quand ça sert',
	tool_ipv6_cidr_usecase_1: 'Planifier un LAN de bureau en /64 et coller le réseau compressé dans le routeur.',
	tool_ipv6_cidr_usecase_2: 'Vérifier une liaison point à point qui doit être /127 (RFC 6164).',
	tool_ipv6_cidr_usecase_3: 'Normaliser des préfixes de doc comme 2001:db8::/32 avant une capture.',
	tool_ipv6_cidr_faq_q1: 'Que signifie « non aligné nibble » ?',
	tool_ipv6_cidr_faq_a1:
		'Le DNS inverse IPv6 et beaucoup d’allocations avancent par 4 bits. Un /67 reste une plage valide, mais ip6.arpa et certains FAI attendent ces pas. Ici la plage s’affiche avec un avis.',
	tool_ipv6_cidr_faq_q2: 'Quelle différence entre /64, /127 et /128 ?',
	tool_ipv6_cidr_faq_a2:
		'/64 est le LAN habituel. /127 sont deux adresses point à point (RFC 6164). /128 est un hôte. Le panneau le note quand vous les collez.',
	tool_ipv6_cidr_faq_q3: 'Est-ce la même chose que consulter la notation CIDR IPv6 ?',
	tool_ipv6_cidr_faq_a3:
		'Oui pour transformer la notation en réseau/dernière adresse et texte canonique. Il n’y a pas de tableau de tous les préfixes IPv6 ici.',
	tool_ipv6_cidr_faq_q4: 'Où développer un CIDR IPv4 ?',
	tool_ipv6_cidr_faq_a4: 'Outil CIDR vers plage IP. Cette page refuse volontairement les littéraux IPv4.',
	tool_ipv6_cidr_faq_q5: 'Cela teste-t-il IPv6 sur mon réseau ?',
	tool_ipv6_cidr_faq_a5: 'Non. Les tests de connectivité sont une autre tâche. Ici, seule l’arithmétique de préfixe.',
	tool_ipv6_cidr_faq_q6: 'Les adresses sont-elles envoyées ?',
	tool_ipv6_cidr_faq_a6: 'Non. Elles restent sur votre appareil, dans cet onglet, et ne sont pas envoyées à un serveur.',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — Architecture d’adressage IPv6',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — Représentation textuelle recommandée d’IPv6',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — Préfixes de 127 bits sur les liaisons inter-routeurs',
	tool_ipv6_cidr_disclaimer:
		'Les résultats suivent l’arithmétique CIDR IPv6 courante (RFC 4291, 5952, 6164). Ce n’est pas un conseil de routage ; validez les changements critiques dans votre labo.',
};

export default fr;
