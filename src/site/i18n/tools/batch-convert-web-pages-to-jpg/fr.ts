/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / fr).
 * H1 : Convertir plusieurs pages web en JPG (pas le calque Batch convert…).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: 'Paramètres avancés (facultatif)',
	tool_batch_convert_web_pages_to_jpg_article:
		'Collez une adresse publique par ligne, capturez chaque page en JPEG à la largeur choisie, ignorez les lignes en échec puis téléchargez un ZIP. Chaque URL est récupérée une fois via le serveur et n’est pas stockée ; l’image se construit dans cet onglet. C’est une capture, pas un PDF A4.',
	tool_batch_convert_web_pages_to_jpg_capture_first: 'Premier écran seulement',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: 'Cadre de capture masqué',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'Page entière',
	tool_batch_convert_web_pages_to_jpg_capture_label: 'Capture',
	tool_batch_convert_web_pages_to_jpg_clear: 'Effacer',
	tool_batch_convert_web_pages_to_jpg_col_file: 'Fichier',
	tool_batch_convert_web_pages_to_jpg_col_status: 'État',
	tool_batch_convert_web_pages_to_jpg_col_url: 'URL',
	tool_batch_convert_web_pages_to_jpg_convert: 'Tout convertir',
	tool_batch_convert_web_pages_to_jpg_desc:
		'Convertissez plusieurs pages web en JPG depuis une liste d’URLs, puis téléchargez un ZIP. Chaque adresse est récupérée une fois et n’est pas stockée.',
	tool_batch_convert_web_pages_to_jpg_description:
		'Convertir plusieurs pages web en JPG depuis une liste d’URLs (une ligne suffit). Largeur et qualité JPEG, page entière ou premier écran, puis un ZIP. Étapes : coller les URLs, Tout convertir, Télécharger le ZIP. Exemple : deux pages d’aide deviennent deux JPEG. Chaque URL est demandée une fois et n’est pas enregistrée.',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'Télécharger le ZIP',
	tool_batch_convert_web_pages_to_jpg_empty: 'Collez d’abord au moins une URL de page.',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'Cette page n’a pas pu devenir un JPEG. Ignorée.',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'Ce navigateur n’a pas pu assembler le ZIP. Essayez-en un récent.',
	tool_batch_convert_web_pages_to_jpg_err_load: 'La bibliothèque de conversion n’a pas chargé. Actualisez puis réessayez.',
	tool_batch_convert_web_pages_to_jpg_err_too_many: '10 URLs maximum. Les lignes en trop n’ont pas été ajoutées.',
	tool_batch_convert_web_pages_to_jpg_err_url: 'Impossible de charger cette URL. Vérifiez l’adresse, ou le site bloque la récupération.',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'Cette ligne n’est pas une URL http(s) valide. Ignorée.',
	tool_batch_convert_web_pages_to_jpg_example:
		'Charger l’exemple remplit deux URLs example.com, fabrique deux JPEG avec du HTML local (sans visiter le site en direct) et active Télécharger le ZIP. Tout convertir récupère les adresses collées. Viewport, qualité et page entière vs premier écran changent les pixels.',
	tool_batch_convert_web_pages_to_jpg_example_title: 'Exemple',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'La conversion se fait dans cet onglet. Pour une liste, nous envoyons chaque adresse au serveur une fois afin de récupérer le HTML ; nous ne stockons pas les pages. Les JPEG se créent sur votre appareil et sont empaquetés ici en ZIP.',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'L’outil PDF pagine en A4 pour lire et imprimer. Cette page rasterise un JPEG par URL à la largeur choisie (bureau 1280, tablette 768 ou téléphone 390), avec qualité et page entière ou premier écran. Même liste, autre fichier.',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'PDF vers JPG part d’un fichier PDF que vous envoyez. Ici le point de départ est une liste d’URLs. Si vous avez déjà des PDF, utilisez PDF vers JPG ; si vous avez des liens, cette page.',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'Non. Les scripts sont retirés. Murs de connexion, paywalls et applis très JavaScript collent rarement au site en direct. Le CSS adaptatif suit la largeur de viewport choisie.',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'Chaque ligne réussie devient un JPEG distinct dans un ZIP. Une seule URL fonctionne aussi. Les images ne sont pas fusionnées en un fichier.',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'La largeur de viewport change la mise en page (mobile vs bureau). La qualité JPEG arbitrage taille et artefacts. Page entière capture la hauteur de défilement (plafonnée pour ne pas planter l’onglet) ; premier écran fait à peu près un viewport.',
	tool_batch_convert_web_pages_to_jpg_faq_q1: 'Mes pages sont-elles envoyées et stockées sur un serveur ?',
	tool_batch_convert_web_pages_to_jpg_faq_q2: 'Quelle différence avec Convertir plusieurs pages web en PDF ?',
	tool_batch_convert_web_pages_to_jpg_faq_q3: 'Quelle différence avec PDF vers JPG ?',
	tool_batch_convert_web_pages_to_jpg_faq_q4: 'Un site avec connexion ou beaucoup de JavaScript ressemblera-t-il au live ?',
	tool_batch_convert_web_pages_to_jpg_faq_q5: 'Résultat : un JPG ou un ZIP ? Puis-je convertir une seule URL ?',
	tool_batch_convert_web_pages_to_jpg_faq_q6: 'Que changent le viewport, la qualité JPEG et le premier écran ?',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '{n} URLs dans la file',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'Collez la liste de pages publiques, cliquez sur Tout convertir (bureau 1280, JPEG 85 %, page entière par défaut), puis emportez un ZIP des images réussies.',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'Collez une URL https par ligne (centre d’aide ou tickets conviennent). Une ligne suffit pour URL vers JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_2: 'Cliquez sur Tout convertir. Par défaut : bureau 1280, JPEG 85 % et page entière. Chaque URL publique est récupérée une fois ; les lignes en échec sont ignorées.',
	tool_batch_convert_web_pages_to_jpg_how_item_3: 'Mise en page téléphone, premier écran seulement, ou plus d’attente si les images restent vides ? Ouvrez Paramètres avancés pour viewport, qualité JPEG, capture et attente de chargement.',
	tool_batch_convert_web_pages_to_jpg_how_item_4: 'Besoin de A4 imprimable plutôt que de captures ? Utilisez Convertir plusieurs pages web en PDF. Vous avez déjà un PDF ? Utilisez PDF vers JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_5: 'Téléchargez le ZIP dès qu’une ligne a réussi.',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'Charger l’exemple teste deux pages locales ; le panneau de progression s’affiche pendant la conversion.',
	tool_batch_convert_web_pages_to_jpg_how_title: 'Fonctionnement',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: '{s}s écoulées',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: 'Récupération',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: 'Images',
	tool_batch_convert_web_pages_to_jpg_hud_title: 'Progression du lot',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'La largeur de viewport change la mise en page. La qualité JPEG change la taille. Page entière est une capture haute ; premier écran fait à peu près un viewport.',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'Qualité JPEG',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'Une URL http(s) par ligne, jusqu’à 10. Conversion en série. Les échecs sont ignorés. Les JPEG réussis vont dans un ZIP. Viewport, qualité et mode de capture changent les pixels — ce n’est pas un PDF renommé.',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'Chaque URL est envoyée une fois au serveur pour récupérer le HTML et n’est pas stockée. Le JPEG se construit dans cet onglet.',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'Réseaux privés, connexions et pages manquantes font échouer cette ligne. Le reste du lot continue.',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'Les noms ZIP en double deviennent name (2).jpg. Scripts et pièges noscript de rafraîchissement sont retirés. Les homepages très hautes sont plafonnées pour ne pas planter l’onglet.',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'Ce n’est pas un robot d’un site entier. Collez les URLs que vous avez déjà.',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'Face à Convertir plusieurs pages web en PDF : pas de pagination A4. Face à PDF vers JPG : l’entrée est une liste d’URLs, pas un PDF. Face aux convertisseurs d’images : l’entrée est une page web, pas une photo locale.',
	tool_batch_convert_web_pages_to_jpg_rules_title: 'Règles à prévoir',
	tool_batch_convert_web_pages_to_jpg_sample: 'Charger l’exemple',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'Rendu JPEG… cet onglet peut se figer quelques secondes',
	tool_batch_convert_web_pages_to_jpg_status_done: 'Lot terminé — vérifiez le tableau puis téléchargez le ZIP.',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'Récupération du HTML de la page…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG prêt',
	tool_batch_convert_web_pages_to_jpg_status_queued: 'En file',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'Ignorée',
	tool_batch_convert_web_pages_to_jpg_status_waiting: 'Attente de la fin des images…',
	tool_batch_convert_web_pages_to_jpg_status_working: 'Conversion du lot…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} prêtes · {skip} ignorées',
	tool_batch_convert_web_pages_to_jpg_title: 'Convertir plusieurs pages web en JPG',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'Une URL http(s) publique par ligne, jusqu’à 10. Nous récupérons chaque page une fois et réécrivons CSS et images. Les scripts sont retirés avant la capture.',
	tool_batch_convert_web_pages_to_jpg_url_label: 'URLs de page (une par ligne)',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'Déposez plusieurs URLs d’aide ou de tickets et obtenez des JPEG pour le chat sans ouvrir chaque onglet.',
	tool_batch_convert_web_pages_to_jpg_usecase_2: 'Capturez la même page publique en 390 (téléphone) et 1280 (bureau) pour comparer le premier écran avant une relecture.',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'Gardez les PDF A4 d’archive sur Convertir plusieurs pages web en PDF ; utilisez cette page pour des fichiers image depuis une liste d’URLs.',
	tool_batch_convert_web_pages_to_jpg_usecases_title: 'Bons usages',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'Bureau 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: 'Largeur d’affichage',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'Téléphone 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'Tablette 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'Secondes en plus après le début du chargement des images. Valeur par défaut : 1. Augmentez si le JPEG montre des cadres vides.',
	tool_batch_convert_web_pages_to_jpg_wait_label: 'Attente de chargement (s)',
};

export default fr;
