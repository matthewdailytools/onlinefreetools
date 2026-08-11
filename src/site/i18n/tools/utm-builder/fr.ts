/**
 * i18n tool shard (utm-builder / fr).
 * Français — réécriture indépendante orientée recherche locale.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_utm_home_title: 'Générateur UTM',
	tool_utm_home_desc:
		'Mesurez quelles campagnes génèrent vraiment votre trafic : créez des liens de suivi propres avec utm_source, medium, campaign, term et content depuis le navigateur.',
	tool_utm_title: 'Générateur UTM — créez des liens de suivi de campagne',
	tool_utm_description:
		'Des UTM mal formés rendent les campagnes illisibles. Créez des liens avec source, medium, campaign, term et content. Exemple : newsletter + email + sale.',
	tool_utm_url_label: 'URL de la page d’atterrissage',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'Saisissez l’URL de la page d’atterrissage.',
	tool_utm_url_invalid: 'L’URL semble invalide. Vérifiez l’adresse et réessayez.',
	tool_utm_url_protocol: 'Aucun protocole détecté — https:// a été ajouté automatiquement.',
	tool_utm_source_label: 'Source de la campagne (utm_source)',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'Où le lien est vu : newsletter, facebook, google.',
	tool_utm_medium_label: 'Support de la campagne (utm_medium)',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'Comment le lien est diffusé : email, cpc, social, referral.',
	tool_utm_campaign_label: 'Nom de la campagne (utm_campaign)',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'La promotion ou le produit auquel appartient le lien.',
	tool_utm_campaign_required: 'Le nom de la campagne (utm_campaign) est obligatoire.',
	tool_utm_term_label: 'Mot-clé de la campagne (utm_term)',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: 'Facultatif. Identifie les mots-clés de recherche payante.',
	tool_utm_content_label: 'Contenu de la campagne (utm_content)',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: 'Facultatif. Distingue les annonces ou liens qui pointent vers la même URL.',
	tool_utm_generate: 'Générer',
	tool_utm_sample: 'Exemple',
	tool_utm_clear: 'Effacer',
	tool_utm_copy: 'Copier',
	tool_utm_copied: 'Copié',
	tool_utm_error_prefix: 'Erreur : ',
	tool_utm_output_label: 'URL générée',
	tool_utm_table_title: 'Détail des paramètres',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: 'Valeur',
	tool_utm_param_status: 'État',
	tool_utm_param_required: 'Obligatoire',
	tool_utm_param_optional: 'Facultatif',
	tool_utm_param_empty: 'Vide',
	tool_utm_encoding_note:
		'Les valeurs sont encodées avec encodeURIComponent : les espaces deviennent %20 et les caractères non ASCII sont encodés.',
	tool_utm_case_note:
		'Google Analytics distingue majuscules et minuscules dans les valeurs. Utilisez un style cohérent en minuscules pour que le même canal se regroupe.',
	tool_utm_how_title: 'Comment ça marche',
	tool_utm_how_body:
		'Le générateur analyse votre URL de base, conserve ses paramètres de requête existants puis ajoute les paramètres UTM avec un séparateur &. Chaque valeur est encodée en pourcentage afin que les espaces, les caractères chinois et les symboles survivent dans le lien. Si l’URL a un hash, il est déplacé après tous les paramètres. Les cinq paramètres UTM sont ce que Google Analytics lit pour attribuer la visite à une source, un support et une campagne.',
	tool_utm_rules_title: 'Règles du générateur',
	tool_utm_rules_body: 'Voici les définitions et règles d’encodage des paramètres UTM, selon la documentation Google Analytics.',
	tool_utm_rules_item_1: 'utm_source identifie où le lien a été vu ; utm_medium identifie comment il a été diffusé. Les deux sont obligatoires pour l’attribution.',
	tool_utm_rules_item_2: 'utm_campaign est le nom de la promotion et est obligatoire ici. utm_term et utm_content sont facultatifs : term pour les mots-clés payants, content pour différencier deux liens.',
	tool_utm_rules_item_3: 'Si l’URL de base a déjà des paramètres de requête, ils sont conservés et les UTM sont ajoutés avec & ; un paramètre existant du même nom est remplacé.',
	tool_utm_rules_item_4: 'Les valeurs sont encodées en pourcentage : les espaces deviennent %20 et les caractères non ASCII aussi. Le fragment (#ancre) reste toujours après la chaîne de requête.',
	tool_utm_rules_item_5: 'Utilisez un style cohérent en minuscules. Les valeurs UTM distinguent la casse dans Google Analytics, donc facebook et Facebook seraient deux sources.',
	tool_utm_example_title: 'Exemple',
	tool_utm_example:
		'L’entrée d’exemple est https://example.com/page avec utm_source=newsletter, utm_medium=email et utm_campaign=summer_sale. Le lien généré est https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale.',
	tool_utm_usecases_title: 'Bonnes utilisations',
	tool_utm_usecase_1:
		'Campagnes sociales : créez un lien par plateforme avec le même utm_campaign, pour que GA4 rapporte toute la promotion en une ligne.',
	tool_utm_usecase_2:
		'Envois d’e-mails : utilisez utm_source=newsletter, utm_medium=email et des valeurs content différentes pour comparer deux bannières pointant vers la même page.',
	tool_utm_usecase_3:
		'Codes QR et liens imprimés : une URL UTM complète est longue, mais vous pouvez la raccourcir après génération en conservant les paramètres.',
	tool_utm_faq_q1: 'Quelle est la différence entre utm_source et utm_medium ?',
	tool_utm_faq_a1:
		'utm_source indique où le lien a été vu (newsletter, facebook, google), tandis que utm_medium indique comment il a été diffusé (email, cpc, social, referral). GA4 les combine avec utm_campaign pour nommer la source de trafic.',
	tool_utm_faq_q2: 'L’URL a déjà des paramètres de requête. Vont-ils être perdus ?',
	tool_utm_faq_a2:
		'Non. Les paramètres existants sont conservés et les UTM sont ajoutés avec &. Si l’URL contient déjà un paramètre du même nom, la nouvelle valeur le remplace.',
	tool_utm_faq_q3: 'Et les espaces, caractères chinois ou symboles dans les valeurs ?',
	tool_utm_faq_a3:
		'Chaque valeur est encodée en pourcentage : les espaces deviennent %20 et les caractères non ASCII aussi. Le lien généré reste valide dans les clients e-mail, messageries et navigateurs.',
	tool_utm_faq_q4: 'Les valeurs UTM distinguent-elles la casse ?',
	tool_utm_faq_a4:
		'Oui. Google Analytics traite utm_source=Facebook et utm_source=facebook comme deux sources distinctes. Utilisez un style cohérent en minuscules pour que le même canal se regroupe.',
	tool_utm_faq_q5: 'Quand utiliser utm_term et utm_content ?',
	tool_utm_faq_a5:
		'utm_term identifie les mots-clés de recherche payante, utile pour Google Ads. utm_content distingue deux liens ou annonces pointant vers la même URL, comme une bannière d’en-tête et un lien de pied de page.',
	tool_utm_faq_q6: 'Mon URL est-elle envoyée quelque part ?',
	tool_utm_faq_a6: 'Non. Le générateur fonctionne entièrement dans votre navigateur et rien n’est envoyé.',
	tool_utm_references: 'Google Analytics — Campagnes personnalisées (UTM) ; Google Search Central — Paramètres d’URL.',
	tool_utm_ref_ga_label: 'Google Analytics — Campagnes personnalisées (UTM)',
	tool_utm_ref_searchcentral_label: 'Google Search Central — Paramètres d’URL',
};

export default fr;
