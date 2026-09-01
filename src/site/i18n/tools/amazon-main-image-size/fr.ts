/**
 * Fragment i18n de l’outil amazon-main-image-size (fr).
 * Le H1 suit la requête locale ; les pixels vont dans la description et la FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Textes français de site d’outils, réécrits (pas un calque de l’anglais). */
const fr: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'Placez la photo produit sur un carré blanc et téléchargez le JPEG d’image principale. Les fichiers restent sur l’appareil, sans envoi au serveur.',
	tool_amazon_main_image_size_check_fill: 'Remplir environ 85 % du cadre',
	tool_amazon_main_image_size_choose_image: 'Choisir une image',
	tool_amazon_main_image_size_clear: 'Effacer',
	tool_amazon_main_image_size_desc:
		'Image principale Amazon 2000×2000 sur fond blanc, seuil de zoom 1000 px — reste sur l’appareil.',
	tool_amazon_main_image_size_description:
		'Taille de l’image principale Amazon : choisissez une photo produit, exportez un JPEG 2000×2000 sur fond blanc RGB 255, puis vérifiez le seuil de zoom 1000 px. Un exemple est fourni : l’échantillon occupe environ 85 % du carré. Les fichiers restent sur l’appareil et ne sont pas envoyés au serveur. Ce n’est pas une validation officielle Seller Central.',
	tool_amazon_main_image_size_download: 'Télécharger le JPEG',
	tool_amazon_main_image_size_drop_hint: 'Déposez une photo produit. Le traitement reste dans cet onglet.',
	tool_amazon_main_image_size_empty: 'Choisissez d’abord une photo produit.',
	tool_amazon_main_image_size_err_decode: 'Impossible de lire l’image. Essayez JPEG, PNG ou WebP.',
	tool_amazon_main_image_size_example:
		'Charger l’exemple dessine un produit fictif, le pose sur un carré blanc 2000×2000 à ~85 %, puis active Télécharger le JPEG. La pastille zoom confirme que le plus long côté dépasse 1000 px.',
	tool_amazon_main_image_size_example_title: 'Exemple',
	tool_amazon_main_image_size_faq_a1:
		'L’image principale est attendue sur blanc pur. La page remplit RGB 255,255,255 et peut garder le produit à environ 85 % du carré pour qu’il ne touche pas les bords.',
	tool_amazon_main_image_size_faq_a2:
		'Le zoom Amazon demande en général au moins 1000 pixels sur le plus long côté. La pastille compare le bord exporté à ce plancher. Agrandir une mini-photo peut passer le chiffre tout en restant floue.',
	tool_amazon_main_image_size_faq_a3:
		'L’export par défaut est 2000×2000. 1600 reste un format ancien encore proposé en pastille. Ces pixels n’entrent pas dans le H1.',
	tool_amazon_main_image_size_faq_a4:
		'Galerie et modules A+ ont d’autres rôles. Cette page ne sort que l’image principale. Pour un recadrage libre, utilisez l’outil de recadrage lié.',
	tool_amazon_main_image_size_faq_a5:
		'Non. La photo est décodée dans cet onglet du navigateur. Rien n’est envoyé à nos serveurs ni à Amazon depuis ici.',
	tool_amazon_main_image_size_faq_q1: 'Fond blanc et 85 % du cadre, c’est quoi ?',
	tool_amazon_main_image_size_faq_q2: 'Pourquoi le zoom échoue sous 1000 px ?',
	tool_amazon_main_image_size_faq_q3: 'Pourquoi 2000×2000 plutôt que 1600 ?',
	tool_amazon_main_image_size_faq_q4: 'Exporte-t-on aussi les images secondaires ?',
	tool_amazon_main_image_size_faq_q5: 'Ma photo est-elle envoyée à Amazon ou à ce site ?',
	tool_amazon_main_image_size_fill_label: 'Occupation du cadre',
	tool_amazon_main_image_size_how_body:
		'Prenez la photo destinée à l’image principale, gardez le blanc, exportez le carré, puis lisez la pastille zoom. Les autres tailles ne sont que des pastilles.',
	tool_amazon_main_image_size_how_item_1: 'Choisissez la photo qui doit devenir l’image principale Amazon.',
	tool_amazon_main_image_size_how_item_2: 'Laissez 2000×2000, sauf si vous avez encore besoin du carré 1600.',
	tool_amazon_main_image_size_how_item_3: 'Gardez l’ajustement 85 % sauf si le produit remplit déjà le cadre comme vous le voulez.',
	tool_amazon_main_image_size_how_item_4: 'Téléchargez le JPEG et lisez la pastille de seuil de zoom. L’exemple a déjà tourné à l’ouverture.',
	tool_amazon_main_image_size_how_title: 'Mode d’emploi',
	tool_amazon_main_image_size_load_sample: 'Charger l’exemple',
	tool_amazon_main_image_size_out_size_label: 'Taille de sortie',
	tool_amazon_main_image_size_quality_label: 'Qualité JPEG',
	tool_amazon_main_image_size_rules_body:
		'Exporter l’image principale dans le navigateur suppose un canevas carré, un fond blanc, un seuil de zoom, et le rappel que ce n’est pas une revue officielle.',
	tool_amazon_main_image_size_rules_item_1:
		'Canevas par défaut 2000×2000 ; 1600×1600 est optionnel. La photo est contenue (non étirée) sur blanc RGB 255.',
	tool_amazon_main_image_size_rules_item_2:
		'L’ajustement optionnel à 85 % réduit le produit dans le carré pour qu’il ne touche pas les bords.',
	tool_amazon_main_image_size_rules_item_3:
		'Pastille zoom : le plus long côté exporté devrait être ≥1000 px. La page ne prétend pas qu’Amazon acceptera le fichier.',
	tool_amazon_main_image_size_rules_item_4:
		'Images secondaires, infographies et A+ hors périmètre. Ce n’est pas Seller Central.',
	tool_amazon_main_image_size_rules_title: 'À retenir',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'Image principale prête — téléchargez ou changez la photo.',
	tool_amazon_main_image_size_status_working: 'Composition du carré…',
	tool_amazon_main_image_size_title: 'Taille de l’image principale Amazon',
	tool_amazon_main_image_size_usecase_1:
		'Nouvelle fiche : passez la photo du téléphone en image principale blanche avant d’ouvrir Seller Central.',
	tool_amazon_main_image_size_usecase_2:
		'Zoom cassé : vérifiez si le plus long côté est encore sous 1000 px, puis réexportez en 2000.',
	tool_amazon_main_image_size_usecase_3:
		'Remplacez une petite image principale héritée ; si le JPEG est lourd, enchaînez sur le compresseur lié.',
	tool_amazon_main_image_size_usecases_title: 'Dans quels cas',
	tool_amazon_main_image_size_zoom_fail: 'Le plus long côté est sous 1000 px — le zoom peut échouer.',
	tool_amazon_main_image_size_zoom_ok: 'Le plus long côté atteint le seuil de zoom 1000 px.',
	tool_amazon_main_image_size_zoom_label: 'Seuil de zoom',
};

export default fr;
