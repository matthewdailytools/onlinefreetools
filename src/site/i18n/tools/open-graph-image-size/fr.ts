/**
 * Fragment i18n (open-graph-image-size / fr).
 * H1 : « Taille d'image Open Graph ». Le raccourci « og image » n’est pas le titre.
 * Secondaires : 1200×630 et og:image dans la description / FAQ / cas.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_open_graph_image_size_article:
		'Recadrez une photo au format de carte Open Graph 1200×630 (environ 1,91:1) et téléchargez un JPEG. Les fichiers restent sur l’appareil, sans envoi au serveur.',
	tool_open_graph_image_size_choose_image: 'Choisir une image',
	tool_open_graph_image_size_clear: 'Effacer',
	tool_open_graph_image_size_desc:
		'Exportez une image Open Graph en 1200×630 ; elle reste sur l’appareil, sans envoi au serveur.',
	tool_open_graph_image_size_description:
		'Taille d’image Open Graph : choisissez une photo, remplissez le cadre 1200×630 (vers 1,91:1), puis téléchargez un JPEG. Exemple : l’échantillon à l’ouverture est déjà recadré sur la carte. Le couple LinkedIn 1200×627 est une puce optionnelle. Les fichiers restent sur l’appareil et ne partent pas vers un serveur. Pour contrôler la balise og:image d’une URL, utilisez la page d’aperçu liée — pas ce H1. Le titre n’est pas le raccourci « og image ».',
	tool_open_graph_image_size_download: 'Télécharger le JPEG',
	tool_open_graph_image_size_drop_hint: 'Déposez une photo. Le remplissage peut rogner les bords.',
	tool_open_graph_image_size_empty: 'Choisissez d’abord une image.',
	tool_open_graph_image_size_err_decode: 'Impossible de lire cette image. Essayez JPEG, PNG ou WebP.',
	tool_open_graph_image_size_example:
		'Charger l’exemple dessine un paysage, remplit 1200×630 et active Télécharger le JPEG. 1200×627 est la puce LinkedIn.',
	tool_open_graph_image_size_example_title: 'Exemple',
	tool_open_graph_image_size_faq_a1:
		'Non. La photo reste dans cet onglet. Rien n’est envoyé à Facebook, LinkedIn ou nos serveurs.',
	tool_open_graph_image_size_faq_a2:
		'Les requêtes courtes « og image » virent au jargon. Le H1 de cette page est la phrase complète : Taille d’image Open Graph.',
	tool_open_graph_image_size_faq_a3:
		'1200×630 est la carte 1,91:1 habituelle. 1200×627 est presque identique et souvent demandé sur LinkedIn. Stories et visuels de chaîne hors périmètre.',
	tool_open_graph_image_size_faq_a4:
		'Cette page n’exporte que des pixels. Pour voir si og:image s’affiche sur une URL, ouvrez l’outil d’aperçu Open Graph.',
	tool_open_graph_image_size_faq_a5:
		'Oui. Le remplissage agrandit jusqu’à couvrir 1200×630 et coupe le surplus.',
	tool_open_graph_image_size_faq_q1: 'Ma photo est-elle envoyée ?',
	tool_open_graph_image_size_faq_q2: 'Pourquoi le titre n’est-il pas « og image » ?',
	tool_open_graph_image_size_faq_q3: '1200×630 ou 1200×627 ?',
	tool_open_graph_image_size_faq_q4: 'Où vérifier que og:image s’affiche ?',
	tool_open_graph_image_size_faq_q5: 'Les bords seront-ils coupés ?',
	tool_open_graph_image_size_how_body:
		'Choisissez la photo qui doit apparaître au partage du lien, remplissez 1200×630, puis téléchargez. Le débogage des balises est sur la page d’aperçu.',
	tool_open_graph_image_size_how_item_1: 'Choisissez la photo de la carte Open Graph — c’est la tâche.',
	tool_open_graph_image_size_how_item_2: 'Gardez 1200×630 sauf si l’on vous impose 1200×627.',
	tool_open_graph_image_size_how_item_3: 'Téléchargez le JPEG. Le recadrage évite les bandes sur la carte.',
	tool_open_graph_image_size_how_item_4: 'L’exemple a déjà tourné à l’ouverture. Les balises se vérifient dans l’aperçu.',
	tool_open_graph_image_size_how_title: 'Comment ça marche',
	tool_open_graph_image_size_load_sample: 'Charger l’exemple',
	tool_open_graph_image_size_out_size_label: 'Taille de sortie',
	tool_open_graph_image_size_quality_label: 'Qualité JPEG',
	tool_open_graph_image_size_rules_body:
		'Exporter la carte demande un cadre ~1,91:1, un remplissage avec coupe, et une séparation d’avec l’aperçu des balises.',
	tool_open_graph_image_size_rules_item_1:
		'Canevas par défaut : 1200×630. Puce optionnelle : 1200×627. Ratio ~1,91:1.',
	tool_open_graph_image_size_rules_item_2:
		'Remplissage (pas de bandes). Le surplus est coupé.',
	tool_open_graph_image_size_rules_item_3:
		'Le débogage og:image se fait sur la page d’aperçu, pas sur ce H1.',
	tool_open_graph_image_size_rules_item_4:
		'Stories, miniatures YouTube et visuels de chaîne sont hors périmètre.',
	tool_open_graph_image_size_rules_title: 'Règles à anticiper',
	tool_open_graph_image_size_size_627: '1200×627',
	tool_open_graph_image_size_size_630: '1200×630',
	tool_open_graph_image_size_status_done: 'Carte prête — téléchargez ou changez la photo.',
	tool_open_graph_image_size_status_working: 'Remplissage…',
	tool_open_graph_image_size_title: 'Taille d\'image Open Graph',
	tool_open_graph_image_size_usecase_1:
		'Article de blog : exportez le JPEG 1200×630 avant de renseigner og:image.',
	tool_open_graph_image_size_usecase_2:
		'URL produit : recadrez le packing shot dans le cadre sans ouvrir un logiciel de PAO.',
	tool_open_graph_image_size_usecase_3:
		'LinkedIn : prenez la puce 1200×627 si le partenaire exige ce couple.',
	tool_open_graph_image_size_usecases_title: 'Ça sert surtout à',
};

export default fr;
