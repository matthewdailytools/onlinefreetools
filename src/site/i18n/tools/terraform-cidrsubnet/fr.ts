/**
 * i18n tool shard (terraform-cidrsubnet / fr).
 * Recherches locales : terraform cidrsubnet, calculer cidrsubnet, sous-réseau terraform.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — Obtenez le CIDR enfant que Terraform renverrait',
	tool_terraform_cidrsubnet_desc:
		'Calculer terraform cidrsubnet. Exemple : 10.1.2.0/24, 4, 15 → 10.1.2.240/28. Reste sur l’appareil, sans envoi au serveur.',
	tool_terraform_cidrsubnet_description:
		'Calculez terraform cidrsubnet : saisissez le préfixe parent, newbits et netnum pour obtenir le CIDR enfant. Exemple : cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28. cidrhost et cidrnetmask sont sur la même page. Les valeurs restent sur l’appareil et ne sont pas envoyées au serveur.',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet renvoie un préfixe réseau enfant, pas une IP d’hôte. newbits est un nombre de bits de préfixe en plus, pas « quatre sous-réseaux ». netnum commence à 0. cidrhost donne l’hôte ; cidrnetmask n’existe qu’en IPv4. Le calcul tourne dans le navigateur selon HashiCorp.',
	tool_terraform_cidrsubnet_evaluate: 'Calculer',
	tool_terraform_cidrsubnet_sample: 'Charger l’exemple',
	tool_terraform_cidrsubnet_clear: 'Effacer',
	tool_terraform_cidrsubnet_copy_cidr: 'Copier le CIDR',
	tool_terraform_cidrsubnet_copy_hcl: 'Copier le HCL',
	tool_terraform_cidrsubnet_copy_ip: 'Copier l’adresse',
	tool_terraform_cidrsubnet_copy_done: 'Copié',
	tool_terraform_cidrsubnet_prefix_label: 'Préfixe parent',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: 'CIDR enfant',
	tool_terraform_cidrsubnet_result_hcl_label: 'Appel HCL',
	tool_terraform_cidrsubnet_result_len_label: 'Nouvelle longueur',
	tool_terraform_cidrsubnet_result_range_label: 'netnum autorisé',
	tool_terraform_cidrsubnet_result_bits_label: 'Découpage des bits',
	tool_terraform_cidrsubnet_table_title: 'Tous les netnum pour ce newbits',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: 'Autres fonctions',
	tool_terraform_cidrsubnet_host_prefix_label: 'Préfixe cidrhost',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'Calculer cidrhost',
	tool_terraform_cidrsubnet_host_result_label: 'Adresse d’hôte',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'Préfixe cidrnetmask (IPv4 uniquement)',
	tool_terraform_cidrsubnet_netmask_evaluate: 'Calculer cidrnetmask',
	tool_terraform_cidrsubnet_netmask_result_label: 'Masque',
	tool_terraform_cidrsubnet_err_empty: 'Indiquez un préfixe CIDR et des entiers newbits et netnum.',
	tool_terraform_cidrsubnet_err_prefix: 'Ce n’est pas un préfixe CIDR (adresse/longueur, IPv4 ou IPv6).',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits doit être un entier ≥ 0 et la longueur finale ne peut dépasser 32 (IPv4) ou 128 (IPv6).',
	tool_terraform_cidrsubnet_err_netnum:
		'Avec newbits={nb}, seuls les netnum 0–{max} tiennent ; {nn} ne rentre pas — Terraform le refuserait aussi.',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum ne tient pas dans les bits d’hôte restants.',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask est IPv4 uniquement. Pour IPv6, utilisez cidrsubnet ou cidrhost.',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'Parent /{old} plus {nb} bits → /{neu}. netnum {nn} remplit les bits extra ; bits d’hôte restants : {hb}.',
	tool_terraform_cidrsubnet_how_title: 'Fonctionnement',
	tool_terraform_cidrsubnet_how_body:
		'Reprenez les trois arguments de votre HCL pour voir le CIDR enfant avant le apply.',
	tool_terraform_cidrsubnet_how_item_1: 'cidrsubnet renvoie un préfixe de sous-réseau. L’IP d’hôte vient de cidrhost.',
	tool_terraform_cidrsubnet_how_item_2: 'Collez le CIDR parent de votre variable Terraform (ex. 10.1.2.0/24).',
	tool_terraform_cidrsubnet_how_item_3: 'Indiquez newbits (bits de préfixe en plus) et netnum (numéro dès 0).',
	tool_terraform_cidrsubnet_how_item_4: 'Lisez le CIDR enfant, copiez l’appel HCL ou comparez avec terraform console.',
	tool_terraform_cidrsubnet_how_item_5: 'Si newbits ne peut pas contenir netnum, un message s’affiche — Terraform refuse les mêmes valeurs.',
	tool_terraform_cidrsubnet_formula_title: 'Formule',
	tool_terraform_cidrsubnet_formula_body:
		'On met à zéro la partie hôte du parent, puis on écrit netnum dans les bits de préfixe ajoutés. Les zéros en tête d’octets IPv4 se lisent en décimal, comme HashiCorp le documente.',
	tool_terraform_cidrsubnet_formula_item_1: 'nouvelle_longueur = longueur_parent + newbits (IPv4 ≤ 32, IPv6 ≤ 128).',
	tool_terraform_cidrsubnet_formula_item_2: '0 ≤ netnum < 2^newbits.',
	tool_terraform_cidrsubnet_formula_item_3: 'Adresse réseau OU (netnum décalé du nombre de bits d’hôte restants).',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost place hostnum dans les bits d’hôte (négatif depuis la fin). cidrnetmask est le masque IPv4 à points.',
	tool_terraform_cidrsubnet_example_title: 'Exemple',
	tool_terraform_cidrsubnet_example:
		'Entrée : 10.1.2.0/24, newbits 4, netnum 15. Sortie : 10.1.2.240/28. Quatre bits extra tiennent 0–15 ; 15 remplit le nibble haut du dernier octet (240).',
	tool_terraform_cidrsubnet_usecases_title: 'Dans quels cas',
	tool_terraform_cidrsubnet_usecase_1:
		'Prévisualiser les sous-réseaux VPC : cidrsubnet(var.vpc_cidr, 8, count.index) — AZ0 est netnum 0.',
	tool_terraform_cidrsubnet_usecase_2:
		'Reproduire l’exemple officiel 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28, puis cidrhost sur ce /28 (hôtes 1 et 14).',
	tool_terraform_cidrsubnet_usecase_3:
		'Découper un ULA IPv6 : cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72.',
	tool_terraform_cidrsubnet_faq_q1: 'Évaluez-vous cidrsubnets ou le module hashicorp/subnets/cidr ?',
	tool_terraform_cidrsubnet_faq_a1:
		'Non. cidrsubnets (pluriel) alloue plusieurs préfixes d’affilée depuis zéro. Le module Registry est un autre outil. Ici, un seul appel à la fois.',
	tool_terraform_cidrsubnet_faq_q2: 'newbits=4 signifie-t-il quatre sous-réseaux ?',
	tool_terraform_cidrsubnet_faq_a2:
		'Non. Ce sont quatre bits de préfixe en plus : 16 netnum (0–15) et l’enfant est plus long de quatre bits (/24 → /28).',
	tool_terraform_cidrsubnet_faq_q3: 'Pourquoi netnum 16 échoue-t-il avec newbits 4 ?',
	tool_terraform_cidrsubnet_faq_a3:
		'Quatre bits ne stockent que 0–15. Terraform n’enroule pas : il échoue. Ici aussi, pour éviter de copier un CIDR qui n’appliquera jamais.',
	tool_terraform_cidrsubnet_faq_q4: 'Quelle est la différence entre cidrhost et cidrsubnet ?',
	tool_terraform_cidrsubnet_faq_a4:
		'cidrsubnet renvoie préfixe + longueur. cidrhost renvoie une adresse d’hôte. hostnum 0 est le réseau ; un négatif compte depuis la fin (cidrhost("10.0.0.0/8", -2) → 10.255.255.254).',
	tool_terraform_cidrsubnet_faq_q5: 'Pourquoi cidrnetmask refuse-t-il l’IPv6 ?',
	tool_terraform_cidrsubnet_faq_a5:
		'La fonction HashiCorp est IPv4 uniquement et renvoie un masque à points (255.255.255.0). En IPv6, gardez la longueur et utilisez cidrsubnet ou cidrhost.',
	tool_terraform_cidrsubnet_faq_q6: 'Les préfixes sont-ils envoyés au serveur ?',
	tool_terraform_cidrsubnet_faq_a6:
		'Non. Ils restent sur l’appareil, dans cet onglet, sans envoi au serveur. Pour une version CLI précise, utilisez terraform console.',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — fonction cidrsubnet',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — fonction cidrhost',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — fonction cidrnetmask',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — notation CIDR',
	tool_terraform_cidrsubnet_disclaimer:
		'L’objectif est d’aligner cidrsubnet, cidrhost et cidrnetmask HashiCorp. Ce n’est pas terraform console ; en cas d’écart de version, suivez la doc officielle.',
};

export default fr;
