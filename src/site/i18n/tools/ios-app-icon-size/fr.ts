/**
 * Fragment i18n (ios-app-icon-size / fr).
 * H1 local : « taille icône app iOS » ; tâche par défaut = PNG 1024 opaque App Store.
 */
import type { SiteLangDict } from '../../../types';

/** Textes français : export 1024, ZIP d’échelles, reste sur l’appareil. */
const fr: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'Transformez le logo en PNG 1024×1024 opaque exigé par l’App Store. Au besoin, le ZIP ajoute 180 iPhone, 167 iPad et 512 Play. Les fichiers restent sur l’appareil et ne sont pas envoyés à un serveur.',
	tool_ios_app_icon_size_bg_label: 'Fond opaque',
	tool_ios_app_icon_size_choose_image: 'Choisir le logo',
	tool_ios_app_icon_size_clear: 'Effacer',
	tool_ios_app_icon_size_desc:
		'Exportez la taille icône app iOS 1024×1024 opaque ; reste sur l’appareil, pas envoyé au serveur.',
	tool_ios_app_icon_size_description:
		'Taille icône app iOS : choisissez un logo, placez-le sur un carré opaque 1024×1024 pour App Store Connect, puis téléchargez le PNG. Exemple : le logo d’échantillon tient déjà en 1024×1024 à l’ouverture. Les puces optionnelles exportent 180, 167 et Play 512 dans un ZIP. Les fichiers restent sur l’appareil et ne sont pas envoyés à un serveur.',
	tool_ios_app_icon_size_download: 'Télécharger PNG',
	tool_ios_app_icon_size_download_zip: 'Télécharger le ZIP des tailles',
	tool_ios_app_icon_size_drop_hint: 'Déposez un logo carré. Il est centré sur un fond opaque, sans masque arrondi.',
	tool_ios_app_icon_size_empty: 'Choisissez d’abord un logo.',
	tool_ios_app_icon_size_err_decode: 'Impossible de lire cette image. Essayez PNG ou JPEG.',
	tool_ios_app_icon_size_err_fflate: 'Le moteur ZIP n’a pas chargé. Vérifiez le réseau puis réessayez.',
	tool_ios_app_icon_size_example:
		'Charger l’exemple dessine une marque, l’inscrit dans 1024×1024 opaque et active Télécharger PNG. Le ZIP ajoute 180, 167, Play 512 et des créneaux plus petits.',
	tool_ios_app_icon_size_example_title: 'Exemple',
	tool_ios_app_icon_size_faq_a1:
		'Non. Le logo est décodé dans cet onglet. Rien n’est envoyé vers nos serveurs.',
	tool_ios_app_icon_size_faq_a2:
		'App Store Connect demande encore un PNG 1024×1024 sans transparence. C’est la taille icône app iOS par défaut ici.',
	tool_ios_app_icon_size_faq_a3:
		'Le système pose le squircle. Exportez le carré entier ; ne arrondissez pas les coins avant.',
	tool_ios_app_icon_size_faq_a4:
		'180 = iPhone 60 pt @3x. 167 = iPad Pro 83,5 pt @2x. Ce sont des puces, pas un second H1.',
	tool_ios_app_icon_size_faq_a5:
		'L’icône haute définition Play 512 est dans le ZIP. Pas de XML Adaptive ni d’URL pack séparée.',
	tool_ios_app_icon_size_faq_q1: 'Mon logo est-il envoyé ?',
	tool_ios_app_icon_size_faq_q2: 'Pourquoi 1024×1024 ?',
	tool_ios_app_icon_size_faq_q3: 'Dois-je arrondir les coins ?',
	tool_ios_app_icon_size_faq_q4: 'À quoi servent 180 et 167 ?',
	tool_ios_app_icon_size_faq_q5: 'Où est l’icône Google Play ?',
	tool_ios_app_icon_size_how_body:
		'Choisissez le logo de la fiche, exportez le PNG 1024×1024 opaque, puis zippez au besoin les échelles iPhone, iPad et Play.',
	tool_ios_app_icon_size_how_item_1: 'Choisissez le logo pour la taille icône app iOS — la tâche est le PNG 1024 boutique.',
	tool_ios_app_icon_size_how_item_2: 'Laissez 1024 sauf si vous avez besoin des puces 180 / 167 / Play 512.',
	tool_ios_app_icon_size_how_item_3: 'Gardez le fond opaque pour que Connect ne refuse pas la transparence.',
	tool_ios_app_icon_size_how_item_4: 'Téléchargez le PNG ou le ZIP. L’exemple a déjà tourné à l’ouverture.',
	tool_ios_app_icon_size_how_title: 'Fonctionnement',
	tool_ios_app_icon_size_load_sample: 'Charger l’exemple',
	tool_ios_app_icon_size_out_size_label: 'Taille de sortie',
	tool_ios_app_icon_size_rules_body:
		'L’icône boutique veut un carré, un fond opaque, et ne pas se confondre avec apple-touch-icon d’un site.',
	tool_ios_app_icon_size_rules_item_1:
		'Le canevas par défaut est un PNG 1024×1024. Le logo est contenu et centré, pas étiré.',
	tool_ios_app_icon_size_rules_item_2:
		'Le fond est opaque (blanc par défaut). Le canal alpha est aplati exprès.',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 vont dans le ZIP et ne changent pas le H1.',
	tool_ios_app_icon_size_rules_item_4:
		'Ce n’est pas un projet Assets.xcassets ni un pack Adaptive Icon.',
	tool_ios_app_icon_size_rules_title: 'Règles à prévoir',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'Icône prête — téléchargez ou changez le logo.',
	tool_ios_app_icon_size_status_working: 'Dessin du carré…',
	tool_ios_app_icon_size_title: 'taille icône app iOS',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect : exportez l’icône 1024×1024 avant de joindre les captures.',
	tool_ios_app_icon_size_usecase_2:
		'Écran d’accueil iPhone : prenez le 180 du ZIP pour voir 60 pt @3x.',
	tool_ios_app_icon_size_usecase_3:
		'Fiche Play : utilisez la puce 512 sans ouvrir une autre URL pack.',
	tool_ios_app_icon_size_usecases_title: 'Bons usages',
};

export default fr;
