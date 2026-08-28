/**
 * i18n tool shard (cidr-to-ip-range / fr).
 * Local search: cidr vers plage ip; calculatrice / notation cidr absorbées en desc+FAQ.
 * H1 = intention CIDR→plage (pas « Calculatrice CIDR » seule); sous-titre orienté résultat.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'CIDR vers plage IP — Développez un préfixe en adresses utilisables',
	tool_cidr_to_ip_range_desc:
		'CIDR vers plage IP : collez 192.168.1.0/24 pour le réseau, le broadcast, les hôtes utilisables et le masque. Calcul sur votre appareil.',
	tool_cidr_to_ip_range_description:
		'CIDR vers plage IP : collez un CIDR IPv4 (exemple 192.168.1.0/24) pour obtenir l’adresse réseau, le broadcast, le premier et le dernier hôte utilisables, le nombre d’hôtes et le masque de sous-réseau. Convertissez aussi masque ↔ préfixe, vérifiez si une IP est dans le bloc, ou développez la liste d’adresses avec une limite de lignes. Même tâche qu’une calculatrice de notation CIDR—le calcul reste sur votre appareil, rien n’est envoyé au serveur.',
	tool_cidr_to_ip_range_article:
		'Collez un CIDR IPv4 pour voir réseau, broadcast, premier/dernier hôte utilisable, nombre d’hôtes, masque et wildcard. Modes optionnels : conversion masque ↔ préfixe, contient/chevauchement, ou développement plafonné.',
	tool_cidr_to_ip_range_calculate: 'Calculer',
	tool_cidr_to_ip_range_sample: 'Charger l’exemple',
	tool_cidr_to_ip_range_clear: 'Effacer',
	tool_cidr_to_ip_range_copy: 'Copier les champs',
	tool_cidr_to_ip_range_copy_done: 'Copié',
	tool_cidr_to_ip_range_mode_label: 'Mode',
	tool_cidr_to_ip_range_mode_range: 'Préfixe → plage',
	tool_cidr_to_ip_range_mode_mask: 'Masque ↔ préfixe',
	tool_cidr_to_ip_range_mode_check: 'Contient / chevauchement',
	tool_cidr_to_ip_range_mode_expand: 'Développer (plafonné)',
	tool_cidr_to_ip_range_input_label: 'CIDR IPv4',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'Masque de sous-réseau (pointé)',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'IP ou second CIDR',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 ou 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: 'Résultat',
	tool_cidr_to_ip_range_lbl_network: 'Réseau',
	tool_cidr_to_ip_range_lbl_broadcast: 'Broadcast',
	tool_cidr_to_ip_range_lbl_first: 'Premier utilisable',
	tool_cidr_to_ip_range_lbl_last: 'Dernier utilisable',
	tool_cidr_to_ip_range_lbl_hosts: 'Nombre d’hôtes',
	tool_cidr_to_ip_range_lbl_mask: 'Masque de sous-réseau',
	tool_cidr_to_ip_range_lbl_wildcard: 'Masque wildcard',
	tool_cidr_to_ip_range_lbl_prefix: 'Longueur de préfixe',
	tool_cidr_to_ip_range_lbl_normalized: 'CIDR normalisé',
	tool_cidr_to_ip_range_norm_hint: 'Des bits d’hôte étaient non nuls ; les valeurs affichées utilisent l’adresse réseau.',
	tool_cidr_to_ip_range_expand_limit:
		'Développement arrêté à la limite de sécurité ({limit} lignes). Utilisez un préfixe plus long ou relevez la limite plus tard.',
	tool_cidr_to_ip_range_check_in: 'L’adresse est dans le CIDR.',
	tool_cidr_to_ip_range_check_out: 'L’adresse est hors du CIDR.',
	tool_cidr_to_ip_range_overlap_equal: 'Les blocs sont identiques.',
	tool_cidr_to_ip_range_overlap_contain: 'Le premier CIDR contient le second.',
	tool_cidr_to_ip_range_overlap_inside: 'Le premier CIDR est à l’intérieur du second.',
	tool_cidr_to_ip_range_overlap_overlap: 'Les blocs se chevauchent partiellement.',
	tool_cidr_to_ip_range_overlap_disjoint: 'Les blocs sont disjoints.',
	tool_cidr_to_ip_range_mask_to_prefix: 'Préfixe issu du masque : /{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'Masque issu du préfixe : {mask}',
	tool_cidr_to_ip_range_err_empty: 'Saisissez un CIDR IPv4 tel que 192.168.1.0/24.',
	tool_cidr_to_ip_range_err_parse: 'Impossible d’analyser cela comme adresse IPv4 ou CIDR.',
	tool_cidr_to_ip_range_err_prefix: 'La longueur de préfixe doit être un entier de 0 à 32.',
	tool_cidr_to_ip_range_err_ipv6: 'Cette page est IPv4 uniquement. Pour l’IPv6, utilisez un outil CIDR IPv6.',
	tool_cidr_to_ip_range_err_mask: 'Ce masque pointé n’est pas un masque de sous-réseau IPv4 contigu.',
	tool_cidr_to_ip_range_err_second: 'Saisissez une seconde adresse IPv4 ou un CIDR pour contient/chevauchement.',
	tool_cidr_to_ip_range_how_title: 'Fonctionnement',
	tool_cidr_to_ip_range_how_body:
		'Transformez un préfixe CIDR en plage IP : réseau, broadcast, hôtes utilisables et masque. C’est le même besoin qu’une calculatrice de notation CIDR.',
	tool_cidr_to_ip_range_how_item_1:
		'Clarifiez la tâche : passer d’un préfixe CIDR à une plage (pas début–fin → CIDR).',
	tool_cidr_to_ip_range_how_item_2: 'Collez un CIDR IPv4 comme 192.168.1.0/24 (ou utilisez Charger l’exemple).',
	tool_cidr_to_ip_range_how_item_3:
		'Lisez réseau, broadcast, premier/dernier utilisable, nombre d’hôtes et masque ; copiez ce qu’il faut.',
	tool_cidr_to_ip_range_how_item_4:
		'Au besoin, passez en conversion de masque, contient/chevauchement ou développement plafonné.',
	tool_cidr_to_ip_range_how_item_5:
		'Pour début–fin → CIDR, utilisez l’outil associé plage IP vers CIDR ; pour IPv6, une page dédiée quand elle existe.',
	tool_cidr_to_ip_range_formula_title: 'Formule',
	tool_cidr_to_ip_range_formula_body:
		'Masque = 2^32 − 2^(32−préfixe). Réseau = adresse AND masque. Broadcast = réseau OR NOT masque. Hôtes utilisables : cas /31 (RFC 3021) et /32.',
	tool_cidr_to_ip_range_formula_item_1: 'Analyser a.b.c.d/nn ; refuser IPv6 et préfixes hors 0–32.',
	tool_cidr_to_ip_range_formula_item_2: 'Calculer les bits du masque, puis réseau et broadcast en AND/OR bit à bit.',
	tool_cidr_to_ip_range_formula_item_3:
		'Utilisables : /32 → un hôte ; /31 → les deux adresses (RFC 3021) ; sinon first=réseau+1, last=broadcast−1.',
	tool_cidr_to_ip_range_formula_item_4:
		'Si des bits d’hôte étaient présents, normaliser vers l’adresse réseau et afficher un indice.',
	tool_cidr_to_ip_range_example_title: 'Exemple',
	tool_cidr_to_ip_range_example:
		'Entrée : 192.168.1.0/24. Sortie : réseau 192.168.1.0, broadcast 192.168.1.255, utilisables 192.168.1.1–192.168.1.254, masque 255.255.255.0, hôtes 254. L’entrée 192.168.1.37/24 se normalise en 192.168.1.0/24.',
	tool_cidr_to_ip_range_usecases_title: 'Cas d’usage',
	tool_cidr_to_ip_range_usecase_1:
		'Développer le CIDR d’un security group en premier/dernier avant d’écrire une ACL encore basée sur des plages.',
	tool_cidr_to_ip_range_usecase_2:
		'Transmettre à un collègue le masque pointé et le nombre d’hôtes utilisables d’un /24 sans ouvrir un tableur.',
	tool_cidr_to_ip_range_usecase_3:
		'Valider un plan Proxmox ou bridge : confirmer réseau et broadcast pour le CIDR à assigner.',
	tool_cidr_to_ip_range_faq_q1: 'Comment compte-t-on les hôtes utilisables en /31 et /32 ?',
	tool_cidr_to_ip_range_faq_a1:
		'/32 est un hôte unique (réseau = cette adresse ; pas de broadcast classique). /31 suit la RFC 3021 : les deux adresses sont utilisables en point à point ; pas de paire réseau/broadcast inutilisée.',
	tool_cidr_to_ip_range_faq_q2: 'Que se passe-t-il si je colle 192.168.1.37/24 ?',
	tool_cidr_to_ip_range_faq_a2:
		'L’outil normalise en 192.168.1.0/24, indique brièvement que les bits d’hôte ont été ignorés, puis affiche réseau, broadcast et plage utilisable pour ce bloc.',
	tool_cidr_to_ip_range_faq_q3: 'Est-ce la même chose qu’une calculatrice de notation CIDR ?',
	tool_cidr_to_ip_range_faq_a3:
		'Oui pour la tâche courante : transformer la notation CIDR en champs réseau/broadcast/hôtes utilisables et masque. Le titre dit « CIDR vers plage IP » car cela décrit le résultat ; les recherches « calculatrice » aboutissent au même outil.',
	tool_cidr_to_ip_range_faq_q4: 'Puis-je lister chaque IP d’un grand bloc ?',
	tool_cidr_to_ip_range_faq_a4:
		'Utilisez le mode Développer. La liste s’arrête à une limite de sécurité (1024 lignes) pour qu’un /8 ne fige pas l’onglet. Resserrez le préfixe ou lisez seulement les champs résumé.',
	tool_cidr_to_ip_range_faq_q5: 'Où convertir début–fin en CIDR ?',
	tool_cidr_to_ip_range_faq_a5:
		'Cette tâche inverse est sur l’outil associé plage IP vers CIDR. Cette page ne développe qu’un préfixe en champs de plage (et listes plafonnées optionnelles).',
	tool_cidr_to_ip_range_faq_q6: 'Mes adresses sont-elles envoyées au serveur ?',
	tool_cidr_to_ip_range_faq_a6:
		'Non. Les adresses restent sur votre appareil dans cet onglet du navigateur et ne sont pas uploadées vers un serveur.',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'Les résultats suivent l’arithmétique CIDR IPv4 courante (y compris RFC 3021 pour /31). Ce n’est pas un conseiller de politique de routage ou de pare-feu ; vérifiez les changements critiques dans votre propre lab.',
};

export default fr;
