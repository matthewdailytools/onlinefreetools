/**
 * i18n tool shard (iphone-app-store-screenshot / fr).
 * H1 locked to “Taille de capture iPhone 6.9”; 6.7 uniquement en FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Texte autonome pour les recherches taille de capture / spécifications App Store. */
const fr: SiteLangDict = {
	/** Accroche page : export + confidentialité. */
	tool_iphone_app_store_screenshot_article:
		'Exportez une capture aux tailles pixels iPhone 6.9 actuelles de l’App Store, puis téléchargez un JPEG ou un ZIP des trois. Les fichiers restent sur l’appareil, sans envoi au serveur.',
	/** Sélecteur de fichier. */
	tool_iphone_app_store_screenshot_choose_image: 'Choisir une capture',
	/** Effacer. */
	tool_iphone_app_store_screenshot_clear: 'Effacer',
	/** Ligne courte de la carte d’accueil. */
	tool_iphone_app_store_screenshot_desc:
		'Exportez la capture App Store iPhone 6.9 en 1320×2868 — reste sur l’appareil, sans envoi au serveur.',
	/** Meta : doit contenir exemple et ≥120 caractères. */
	tool_iphone_app_store_screenshot_description:
		'Taille de capture iPhone 6.9 : choisissez une capture, remplissez le cadre en 1320×2868 (ou 1290×2796 / 1260×2736) et téléchargez le JPEG. Exemple : à l’ouverture, l’échantillon est déjà recadré à la taille exigée 6,9 pouces. Les fichiers restent sur l’appareil, sans envoi au serveur. Les mesures 6,7 pouces sont regroupées dans le 6,9. Ce n’est pas l’App Review.',
	/** Téléchargement JPEG. */
	tool_iphone_app_store_screenshot_download: 'Télécharger le JPEG',
	/** ZIP des trois tailles. */
	tool_iphone_app_store_screenshot_download_zip: 'Télécharger le ZIP de toutes les tailles',
	/** Zone de dépôt. */
	tool_iphone_app_store_screenshot_drop_hint: 'Déposez une capture. Le remplissage peut couper les bords.',
	/** État vide. */
	tool_iphone_app_store_screenshot_empty: 'Choisissez d’abord une capture.',
	/** Erreur de décodage. */
	tool_iphone_app_store_screenshot_err_decode: 'Impossible de lire cette image. Essayez une capture PNG ou JPEG.',
	/** Échec du moteur ZIP. */
	tool_iphone_app_store_screenshot_err_fflate: 'Le moteur ZIP n’a pas chargé. Vérifiez le réseau et réessayez.',
	/** Corps Example. */
	tool_iphone_app_store_screenshot_example:
		'Charger l’exemple dessine un portrait de substitution, remplit 1320×2868 et active Télécharger le JPEG. Les autres tailles 6,9 sont des puces ; le ZIP les regroupe.',
	/** Titre Example. */
	tool_iphone_app_store_screenshot_example_title: 'Exemple',
	tool_iphone_app_store_screenshot_faq_a1:
		'Non. Les octets restent dans cet onglet. Rien n’est envoyé à Apple ni à nos serveurs.',
	tool_iphone_app_store_screenshot_faq_a2:
		'La classe iPhone exigée aujourd’hui est 6,9 pouces. Les listes 6,7 pouces plus anciennes sont regroupées dans ces trois tailles.',
	tool_iphone_app_store_screenshot_faq_a3:
		'Par défaut 1320×2868. 1290×2796 et 1260×2736 sont les autres paires 6,9 acceptées. Choisissez-en une, ou téléchargez un ZIP des trois.',
	tool_iphone_app_store_screenshot_faq_a4:
		'Oui. Le remplissage agrandit jusqu’à remplir le cadre, puis recadre le surplus. Pour un autre cadrage, utilisez l’outil de recadrage lié.',
	tool_iphone_app_store_screenshot_faq_a5:
		'Les tailles iPad ne sont pas au premier écran. Cette page couvre le jeu obligatoire iPhone 6.9.',
	tool_iphone_app_store_screenshot_faq_q1: 'Ma capture est-elle envoyée ?',
	tool_iphone_app_store_screenshot_faq_q2: 'Pourquoi pas la taille de capture iPhone 6.7 ?',
	tool_iphone_app_store_screenshot_faq_q3: 'Que sont 1320×2868, 1290×2796 et 1260×2736 ?',
	tool_iphone_app_store_screenshot_faq_q4: 'Les bords seront-ils recadrés ?',
	tool_iphone_app_store_screenshot_faq_q5: 'Exporte-t-on des captures iPad ?',
	tool_iphone_app_store_screenshot_how_body:
		'Alignez-vous sur les tailles exigées : remplissez le cadre 6,9 pouces, puis téléchargez. Les tailles en plus sont des puces, pas un second studio.',
	tool_iphone_app_store_screenshot_how_item_1: 'Choisissez la capture du jeu obligatoire iPhone 6.9.',
	tool_iphone_app_store_screenshot_how_item_2: 'Laissez 1320×2868 sauf si Connect demande une autre paire 6,9.',
	tool_iphone_app_store_screenshot_how_item_3: 'Téléchargez le JPEG, ou regroupez les trois tailles dans un ZIP.',
	tool_iphone_app_store_screenshot_how_item_4: 'Charger l’exemple a déjà tourné à l’ouverture pour voir le remplissage tout de suite.',
	tool_iphone_app_store_screenshot_how_title: 'Comment ça marche',
	tool_iphone_app_store_screenshot_load_sample: 'Charger l’exemple',
	tool_iphone_app_store_screenshot_out_size_label: 'Taille de sortie',
	tool_iphone_app_store_screenshot_quality_label: 'Qualité JPEG',
	tool_iphone_app_store_screenshot_rules_body:
		'L’export de capture App Store demande des pixels exacts, un remplissage, et une note 6,7 → 6,9.',
	tool_iphone_app_store_screenshot_rules_item_1:
		'Le canevas par défaut est 1320×2868. Les autres paires 6,9 acceptées sont 1290×2796 et 1260×2736.',
	tool_iphone_app_store_screenshot_rules_item_2: 'Remplissage (pas de barres vides). Le surplus est recadré.',
	tool_iphone_app_store_screenshot_rules_item_3: 'Les recherches 6,7 pouces sont tranchées dans la FAQ ; ce n’est pas une autre fiche.',
	tool_iphone_app_store_screenshot_rules_item_4: 'Ce n’est pas l’App Review. Apple peut encore refuser cadrage, texte ou chrome d’appareil.',
	tool_iphone_app_store_screenshot_rules_title: 'Règles à prévoir',
	tool_iphone_app_store_screenshot_size_2736: '1260×2736',
	tool_iphone_app_store_screenshot_size_2796: '1290×2796',
	tool_iphone_app_store_screenshot_size_2868: '1320×2868',
	tool_iphone_app_store_screenshot_status_done: 'Capture prête — téléchargez ou changez l’image.',
	tool_iphone_app_store_screenshot_status_working: 'Remplissage…',
	/** H1 identique au brief 03. */
	tool_iphone_app_store_screenshot_title: 'Taille de capture iPhone 6.9',
	tool_iphone_app_store_screenshot_usecase_1: 'Avant Connect : exportez la capture obligatoire 6,9 pouces.',
	tool_iphone_app_store_screenshot_usecase_2: 'Erreur de dimensions : réexportez en 1320×2868 plutôt qu’un ancien 6,7.',
	tool_iphone_app_store_screenshot_usecase_3: 'Regroupez les trois paires 6,9 dans un ZIP pour un collègue qui enverra plus tard.',
	tool_iphone_app_store_screenshot_usecases_title: 'Ça convient si',
};

export default fr;
