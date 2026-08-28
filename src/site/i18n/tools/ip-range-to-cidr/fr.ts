/**
 * i18n tool shard (ip-range-to-cidr / fr).
 * Terme local : Plage IP vers CIDR.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'Plage IP vers CIDR — Transformez début–fin en liste de préfixes',
	tool_ip_range_to_cidr_desc:
		'Plage IP vers CIDR : début–fin devient des préfixes. Ex. : 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Sur l’appareil, sans envoi au serveur.',
	tool_ip_range_to_cidr_description:
		'Convertir une plage IP en CIDR : collez début et fin (ou plusieurs lignes) pour obtenir des préfixes couvrant l’intervalle. Exemple : 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Sans alignement, plusieurs préfixes ; plusieurs lignes pour l’agrégation CIDR. Les adresses restent sur l’appareil et ne sont pas envoyées à un serveur.',
	tool_ip_range_to_cidr_article:
		'Passez d’exports ACL en début–fin à une liste de préfixes CIDR prête pour le pare-feu. IPv4 et IPv6 en lots séparés.',
	tool_ip_range_to_cidr_convert: 'Convertir',
	tool_ip_range_to_cidr_sample: 'Charger l’exemple',
	tool_ip_range_to_cidr_clear: 'Effacer',
	tool_ip_range_to_cidr_copy: 'Copier les CIDR',
	tool_ip_range_to_cidr_copy_done: 'Copié',
	tool_ip_range_to_cidr_input_label: 'Plages IP (une par ligne)',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'Préfixes CIDR',
	tool_ip_range_to_cidr_meta_label: 'Résumé',
	tool_ip_range_to_cidr_meta_tpl: '{n} préfixe(s) · {family}',
	tool_ip_range_to_cidr_swap_hint: 'Début et fin ont été échangés car la première adresse était plus grande.',
	tool_ip_range_to_cidr_err_empty: 'Saisissez au moins une plage (début - fin), une par ligne.',
	tool_ip_range_to_cidr_err_parse: 'Impossible d’interpréter cette ligne comme IP ou plage.',
	tool_ip_range_to_cidr_err_mixed: 'Ne mélangez pas IPv4 et IPv6 dans la même conversion.',
	tool_ip_range_to_cidr_err_limit: 'Trop de préfixes CIDR (limite de sécurité). Réduisez les plages.',
	tool_ip_range_to_cidr_how_title: 'Fonctionnement',
	tool_ip_range_to_cidr_how_body:
		'Le résultat couvre l’intervalle fermé avec un ou plusieurs préfixes—pratique quand la règle exige du CIDR et que vous n’avez que début–fin.',
	tool_ip_range_to_cidr_how_item_1: 'Sans alignement, attendez-vous à plusieurs préfixes exacts.',
	tool_ip_range_to_cidr_how_item_2: 'Collez « A - B » ou une ligne par plage pour agréger.',
	tool_ip_range_to_cidr_how_item_3: 'Convertissez, vérifiez, puis copiez.',
	tool_ip_range_to_cidr_how_item_4: 'Ordre inversé → hint d’échange ; familles mélangées → corriger.',
	tool_ip_range_to_cidr_formula_title: 'Formule',
	tool_ip_range_to_cidr_formula_body:
		'Depuis l’adresse courante jusqu’à la fin : prendre le plus grand bloc puissance de deux aligné qui tient encore dans le reste.',
	tool_ip_range_to_cidr_formula_item_1: 'Parser les extrémités en entier ; même famille.',
	tool_ip_range_to_cidr_formula_item_2: 'Si début > fin, échanger et noter.',
	tool_ip_range_to_cidr_formula_item_3: 'Bits hôtes = zéros de fin ∩ puissance de deux de la longueur restante.',
	tool_ip_range_to_cidr_formula_item_4: 'Émettre réseau/préfixe, avancer de 2^bits, répéter.',
	tool_ip_range_to_cidr_example_title: 'Exemple',
	tool_ip_range_to_cidr_example:
		'Entrée : 192.168.1.0 - 192.168.1.255. Sortie : 192.168.1.0/24. Non aligné : 10.0.0.10 - 10.0.0.20 → 10.0.0.10/31, 10.0.0.12/30, 10.0.0.16/30, 10.0.0.20/32.',
	tool_ip_range_to_cidr_usecases_title: 'Cas d’usage',
	tool_ip_range_to_cidr_usecase_1: 'Transformer un export ACL début–fin en règles CIDR de pare-feu.',
	tool_ip_range_to_cidr_usecase_2: 'Remplir des security groups cloud qui n’acceptent que le CIDR.',
	tool_ip_range_to_cidr_usecase_3: 'Agréger plusieurs plages privées d’un ticket, une ligne chacune.',
	tool_ip_range_to_cidr_faq_q1: 'Pourquoi plusieurs CIDR ?',
	tool_ip_range_to_cidr_faq_a1: 'Sans frontière nette, un seul préfixe ne couvre pas exactement ; plusieurs préfixes alignés le font.',
	tool_ip_range_to_cidr_faq_q2: 'Et si je colle la plus grande adresse en premier ?',
	tool_ip_range_to_cidr_faq_a2: 'Échange automatique, court avis, puis conversion.',
	tool_ip_range_to_cidr_faq_q3: 'Puis-je mélanger IPv4 et IPv6 ?',
	tool_ip_range_to_cidr_faq_a3: 'Non. Un lot = une famille ; convertissez séparément.',
	tool_ip_range_to_cidr_faq_q4: 'Comment marche l’agrégation multiligne ?',
	tool_ip_range_to_cidr_faq_a4: 'Chaque ligne est convertie seule ; les trous entre lignes ne sont pas fusionnés.',
	tool_ip_range_to_cidr_faq_q5: 'Mes adresses sont-elles envoyées ?',
	tool_ip_range_to_cidr_faq_a5: 'Non. Elles restent sur l’appareil, dans cet onglet ; pas d’envoi au serveur.',
	tool_ip_range_to_cidr_faq_q6: 'Où est « CIDR vers plage IP » ?',
	tool_ip_range_to_cidr_faq_a6: 'Cette page ne fait que plage→préfixes. Étendre un CIDR est l’inverse, sur un autre outil.',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — Routage CIDR',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — Adressage IPv6',
	tool_ip_range_to_cidr_disclaimer:
		'Les préfixes couvrent l’intervalle fermé saisi. Ce n’est pas un simulateur de protocole de routage ; validez les ACL critiques en labo.',
};

export default fr;
