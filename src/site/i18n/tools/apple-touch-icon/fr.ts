/**
 * Fragment i18n (apple-touch-icon / fr).
 * Réécriture d’intention : H1 apple-touch-icon 180×180 ; fichiers sur l’appareil, sans envoi au serveur.
 */
import type { SiteLangDict } from '../../../types';

/** Textes FR visibles : icône d’accueil 180, ZIP optionnel, fond opaque. */
const fr: SiteLangDict = {
	tool_apple_touch_icon_article:
		'Passez le logo en icône apple-touch pour l’écran d’accueil : PNG opaque 180×180. Si le manifeste en demande plus, le ZIP peut porter un favicon 32 et les tailles PWA 192/512. Les fichiers restent sur l’appareil, sans envoi au serveur.',
	tool_apple_touch_icon_bg_label: 'Fond opaque',
	tool_apple_touch_icon_choose_image: 'Choisir un logo',
	tool_apple_touch_icon_clear: 'Effacer',
	tool_apple_touch_icon_desc:
		'Exportez apple-touch-icon 180×180 en PNG opaque ; reste sur l’appareil, pas d’envoi au serveur.',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180 : choisissez le logo, placez-le sur un carré opaque, téléchargez le PNG. Exemple : à l’ouverture, l’échantillon tient déjà en 180×180. Étapes : choisir → garder 180 → télécharger. ZIP optionnel avec favicon 32 et PWA 192 / 512. Les fichiers restent sur l’appareil et ne sont pas envoyés au serveur.',
	tool_apple_touch_icon_download: 'Télécharger le PNG',
	tool_apple_touch_icon_download_zip: 'Télécharger le ZIP des tailles',
	tool_apple_touch_icon_drop_hint: 'Déposez un logo. Il est centré sur un carré opaque.',
	tool_apple_touch_icon_empty: 'Choisissez d’abord un logo.',
	tool_apple_touch_icon_err_decode:
		'Image illisible. Essayez PNG, JPEG, ou une capture bitmap du SVG.',
	tool_apple_touch_icon_err_fflate: 'Le moteur ZIP n’a pas chargé. Vérifiez le réseau puis réessayez.',
	tool_apple_touch_icon_example:
		'Charger l’exemple dessine une marque de test, la contient en 180×180 opaque et active Télécharger le PNG. Le ZIP ajoute 32, 192 et 512.',
	tool_apple_touch_icon_example_title: 'Exemple',
	tool_apple_touch_icon_faq_a1:
		'Un fond opaque (style precomposed) évite qu’iOS pose un vernis sur la transparence à l’accueil.',
	tool_apple_touch_icon_faq_a2:
		'32 est un petit favicon PNG. 192 et 512 servent au manifeste PWA. Ils voyagent dans le ZIP ; l’export par défaut reste 180×180.',
	tool_apple_touch_icon_faq_a3:
		'Non. Le décodage se fait dans cet onglet. Rien n’est envoyé à nos serveurs.',
	tool_apple_touch_icon_faq_a4:
		'Pour l’accueil iPhone actuel, 180×180 est la taille utile d’apple-touch-icon.png avant la balise link.',
	tool_apple_touch_icon_faq_a5:
		'Les 167 / 152 / 120 d’iPad anciens peuvent rejoindre le ZIP. L’export par défaut reste 180×180.',
	tool_apple_touch_icon_faq_q1: 'Pourquoi un fond opaque ?',
	tool_apple_touch_icon_faq_q2: 'À quoi servent 32, 192 et 512 ?',
	tool_apple_touch_icon_faq_q3: 'Le logo quitte-t-il mon appareil ?',
	tool_apple_touch_icon_faq_q4: '180×180 suffit-il pour l’icône apple-touch ?',
	tool_apple_touch_icon_faq_q5: 'Exportez-vous encore 167 ou 152 ?',
	tool_apple_touch_icon_how_body:
		'Prenez le logo visible quand on ajoute le site à l’accueil, exportez le PNG opaque 180×180, puis ZIPpez d’autres tailles si besoin.',
	tool_apple_touch_icon_how_item_1: 'Choisissez le logo pour apple-touch-icon 180×180.',
	tool_apple_touch_icon_how_item_2: 'Laissez 180 coché sauf si vous voulez les puces 32 / 192 / 512.',
	tool_apple_touch_icon_how_item_3: 'Gardez le fond opaque pour que l’icône ne soit pas transparente à l’accueil.',
	tool_apple_touch_icon_how_item_4: 'Téléchargez le PNG ou le ZIP. L’exemple a déjà tourné à l’ouverture.',
	tool_apple_touch_icon_how_title: 'Comment ça marche',
	tool_apple_touch_icon_load_sample: 'Charger l’exemple',
	tool_apple_touch_icon_out_size_label: 'Taille de sortie',
	tool_apple_touch_icon_rules_body:
		'L’icône d’accueil demande un carré, un fond plein et un PNG 180 — pas un pack ICO complet.',
	tool_apple_touch_icon_rules_item_1:
		'Le canevas par défaut est un PNG 180×180. Le logo est contenu (non étiré) et centré.',
	tool_apple_touch_icon_rules_item_2: 'Le fond est opaque (blanc par défaut). La transparence est aplatie exprès.',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 sont des fichiers ZIP en plus, sans changer l’export par défaut.',
	tool_apple_touch_icon_rules_item_4: 'Pas de pack ICO ni de browserconfig.xml.',
	tool_apple_touch_icon_rules_title: 'Règles à attendre',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'Icône prête — téléchargez ou changez le logo.',
	tool_apple_touch_icon_status_working: 'Dessin du carré…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'Avant la balise link, exportez apple-touch-icon.png en 180×180 pour « Ajouter à l’écran d’accueil ».',
	tool_apple_touch_icon_usecase_2: 'Pour une PWA, prenez 192 et 512 dans le ZIP pour le manifeste.',
	tool_apple_touch_icon_usecase_3:
		'Si le navigateur veut encore un favicon PNG 32 carré, prenez-le dans le ZIP, sans pack ICO.',
	tool_apple_touch_icon_usecases_title: 'Ça convient si',
};

export default fr;
