/**
 * i18n tool shard (cidr-cheat-sheet / fr).
 * Requêtes : antisèche cidr / tableau cidr / qu’est-ce que cidr.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'Antisèche CIDR — Cliquez un préfixe pour voir masque et hôtes',
	tool_cidr_cheat_sheet_desc:
		'Antisèche CIDR : cliquez /8–/32 pour masque, wildcard et hôtes. Le même tableau qu’un CIDR chart. Sur votre appareil.',
	tool_cidr_cheat_sheet_description:
		'Antisèche CIDR : cliquez un préfixe de /8 à /32 pour le masque de sous-réseau, le wildcard et les hôtes utilisables. Exemple : /24 → 255.255.255.0 et 254 hôtes. Colonne orientée CompTIA et notes /31 /32. C’est le même tableau qu’un CIDR chart. Pour développer un bloc précis, utilisez CIDR vers plage IP. Consultations dans le navigateur, rien n’est envoyé à un serveur.',
	tool_cidr_cheat_sheet_article: 'Tableau IPv4 cliquable. Pas une calculatrice pour une adresse hôte quelconque.',
	tool_cidr_cheat_sheet_sample: 'Charger l’exemple',
	tool_cidr_cheat_sheet_clear: 'Retirer le surlignage',
	tool_cidr_cheat_sheet_jump: 'Afficher',
	tool_cidr_cheat_sheet_jump_label: 'Aller au préfixe',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: 'Préfixe choisi',
	tool_cidr_cheat_sheet_col_prefix: 'Préfixe',
	tool_cidr_cheat_sheet_col_mask: 'Masque',
	tool_cidr_cheat_sheet_col_wild: 'Wildcard',
	tool_cidr_cheat_sheet_col_hosts: 'Hôtes utilisables',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Souvent dans les tableaux type Network+',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'Adresses totales',
	tool_cidr_cheat_sheet_note_31: '/31 : les deux adresses sont utilisables (RFC 3021).',
	tool_cidr_cheat_sheet_note_32: '/32 : un seul hôte. Le réseau est cette adresse.',
	tool_cidr_cheat_sheet_err_jump: 'Saisissez un préfixe entier de 8 à 32.',
	tool_cidr_cheat_sheet_how_title: 'Fonctionnement',
	tool_cidr_cheat_sheet_how_body:
		'L’antisèche CIDR compare la longueur slash au masque et aux hôtes. Cliquez une ligne plutôt qu’un PDF.',
	tool_cidr_cheat_sheet_how_item_1: 'Vérifiez que la tâche est de consulter un préfixe, pas de développer une IP précise.',
	tool_cidr_cheat_sheet_how_item_2: 'Cliquez une ligne /8–/32 ou tapez le préfixe puis Afficher (l’exemple choisit /24).',
	tool_cidr_cheat_sheet_how_item_3: 'Lisez masque, wildcard, hôtes et la colonne CompTIA.',
	tool_cidr_cheat_sheet_how_item_4: 'Pour /31 et /32, lisez la note : ne soustrayez pas deux.',
	tool_cidr_cheat_sheet_how_item_5: 'Pour développer 192.168.1.0/24, utilisez CIDR vers plage IP.',
	tool_cidr_cheat_sheet_formula_title: 'Règles',
	tool_cidr_cheat_sheet_formula_body:
		'Masque = 2^32 − 2^(32−n). Wildcard = NON du masque. Hôtes : /32 → 1 ; /31 → 2 ; sinon 2^(32−n) − 2.',
	tool_cidr_cheat_sheet_formula_item_1: 'Préfixes IPv4 /8 à /32 uniquement.',
	tool_cidr_cheat_sheet_formula_item_2: 'La colonne CompTIA est un indice d’étude, pas le programme officiel.',
	tool_cidr_cheat_sheet_formula_item_3: 'Les notes /31 et /32 remplacent le « moins deux » classique.',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR = Classless Inter-Domain Routing. Le CIDR vétérinaire est un autre mot.',
	tool_cidr_cheat_sheet_example_title: 'Exemple',
	tool_cidr_cheat_sheet_example:
		'Choisissez /24. Sortie : masque 255.255.255.0, wildcard 0.0.0.255, hôtes 254, total 256. Identique à l’exemple initial.',
	tool_cidr_cheat_sheet_usecases_title: 'Quand ça sert',
	tool_cidr_cheat_sheet_usecase_1: 'Réviser /24 /25 /26 avant une question de tableau type Network+.',
	tool_cidr_cheat_sheet_usecase_2: 'Vérifier les hôtes d’un /28 avant d’écrire l’ACL.',
	tool_cidr_cheat_sheet_usecase_3: 'Expliquer qu’un « slash 24 » fait 256 adresses et le masque 255.255.255.0.',
	tool_cidr_cheat_sheet_faq_q1: 'Que signifie CIDR ?',
	tool_cidr_cheat_sheet_faq_a1: 'Classless Inter-Domain Routing. Le slash est la longueur. C’est une antisèche, pas un cours.',
	tool_cidr_cheat_sheet_faq_q2: 'Quels préfixes dans les tableaux CompTIA ?',
	tool_cidr_cheat_sheet_faq_a2: 'Souvent /8, /16, /24 et /25–/28, /30. La colonne les marque ; ce n’est pas le programme officiel.',
	tool_cidr_cheat_sheet_faq_q3: 'Comment compter /31 et /32 ?',
	tool_cidr_cheat_sheet_faq_a3: '/32 un hôte. /31 suit RFC 3021. Les autres soustraient deux.',
	tool_cidr_cheat_sheet_faq_q4: 'Est-ce l’implant vétérinaire CIDR ?',
	tool_cidr_cheat_sheet_faq_a4: 'Non. En élevage CIDR a un autre sens. Ici uniquement des préfixes réseau.',
	tool_cidr_cheat_sheet_faq_q5: 'Puis-je développer 192.168.1.37/24 ici ?',
	tool_cidr_cheat_sheet_faq_a5: 'Non. Utilisez CIDR vers plage IP.',
	tool_cidr_cheat_sheet_faq_q6: 'Les clics sont-ils envoyés ?',
	tool_cidr_cheat_sheet_faq_a6: 'Non. Ils restent sur votre appareil, dans cet onglet, et ne sont pas envoyés à un serveur.',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — Routage inter-domaines sans classes',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — Préfixes de 31 bits sur liaisons point à point',
	tool_cidr_cheat_sheet_disclaimer:
		'Les chiffres suivent l’arithmétique CIDR IPv4 courante. La colonne CompTIA est un indice d’étude, pas le programme officiel.',
};

export default fr;
