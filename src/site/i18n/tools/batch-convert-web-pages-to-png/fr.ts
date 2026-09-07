/**
 * i18n tool shard (batch-convert-web-pages-to-png / fr).
 * H1: Convertir plusieurs pages web en PNG. IG vs JPG: PNG sans perte, bords 1 px nets, fond transparent optionnel, 1×/2× — pas de qualité JPEG, pas d’A4.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: 'Réglages avancés (facultatif)',
	tool_batch_convert_web_pages_to_png_article:
		'Chaque URL publique devient un PNG sans perte à la largeur choisie (bureau 1280, tablette 768, téléphone 390). Fond blanc ou transparent, 1× ou 2×, puis un ZIP des lignes réussies. Pensé pour une capture d’interface nette, pas pour un JPEG de discussion ni un PDF A4. Chaque adresse est récupérée une fois (HTML) et n’est pas stockée. La conversion se fait dans cet onglet. Fichier plus léger pour le chat : Convertir plusieurs pages web en JPG.',
	tool_batch_convert_web_pages_to_png_bg_label: 'Fond',
	tool_batch_convert_web_pages_to_png_bg_transparent: 'Transparent',
	tool_batch_convert_web_pages_to_png_bg_white: 'Blanc',
	tool_batch_convert_web_pages_to_png_capture_first: 'Premier écran',
	tool_batch_convert_web_pages_to_png_capture_frame_title: 'Cadre de capture masqué',
	tool_batch_convert_web_pages_to_png_capture_full: 'Page entière',
	tool_batch_convert_web_pages_to_png_capture_label: 'Étendue de la capture',
	tool_batch_convert_web_pages_to_png_clear: 'Effacer',
	tool_batch_convert_web_pages_to_png_col_file: 'Fichier',
	tool_batch_convert_web_pages_to_png_col_status: 'Statut',
	tool_batch_convert_web_pages_to_png_col_url: 'URL',
	tool_batch_convert_web_pages_to_png_convert: 'Tout convertir',
	tool_batch_convert_web_pages_to_png_desc:
		'Liste d’URL en PNG sans perte (fond transparent et 2× en option), ZIP. Ni JPEG ni A4.',
	tool_batch_convert_web_pages_to_png_description:
		'Convertir plusieurs pages web en PNG : captures sans perte et ZIP à partir d’une liste d’URL. Blanc ou transparent, 1× ou 2×. Étapes : coller les URL, Tout convertir, Télécharger le ZIP. Exemple : deux interfaces nettes en PNG. Une ligne suffit pour une capture de page en PNG / URL vers PNG. Fetch une fois, non stocké ; conversion dans cet onglet.',
	tool_batch_convert_web_pages_to_png_download_zip: 'Télécharger le ZIP',
	tool_batch_convert_web_pages_to_png_empty: 'Collez d’abord au moins une URL publique.',
	tool_batch_convert_web_pages_to_png_err_convert: 'Cette adresse n’a pas pu devenir un PNG. Ignorée.',
	tool_batch_convert_web_pages_to_png_err_fflate: 'Ce navigateur n’a pas pu assembler le ZIP. Essayez un navigateur récent.',
	tool_batch_convert_web_pages_to_png_err_load: 'La bibliothèque de conversion n’a pas chargé. Actualisez puis réessayez.',
	tool_batch_convert_web_pages_to_png_err_too_many: '10 URL au maximum. Les lignes en trop n’ont pas été ajoutées.',
	tool_batch_convert_web_pages_to_png_err_url: 'Impossible de charger cette URL. Vérifiez l’adresse, ou le site refuse la requête.',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'Cette ligne n’est pas une URL http(s) valable. Ignorée.',
	tool_batch_convert_web_pages_to_png_example:
		'Charger un exemple remplit un kit de composants et un calque semi-transparent, fabrique deux PNG dans l’onglet (bord 1 px net ; fond transparent = alpha conservé) sans aller chercher le site en ligne, et active Télécharger le ZIP. Tout convertir interroge les URL collées. Largeur, fond, échelle et page entière vs premier écran changent les pixels.',
	tool_batch_convert_web_pages_to_png_example_title: 'Exemple',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'Oui. Une ligne unique suffit pour une capture de page en PNG. Les lignes réussies deviennent des PNG séparés dans un seul ZIP. On ne fusionne pas plusieurs captures en un fichier.',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'La conversion a lieu dans cet onglet. Pour une liste d’URL, nous envoyons chaque adresse une fois à notre serveur afin de récupérer le HTML ; nous ne stockons pas les pages. Les PNG se construisent dans votre navigateur, le ZIP aussi — pas d’envoi au serveur pour archivage.',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'Convertir plusieurs pages web en JPG produit un JPEG avec perte (curseur de qualité) pour le chat et les tickets. Ici le fichier est un PNG sans perte : texte et bords 1 px nets, PNG transparent optionnel, échelle 1×/2×. Même liste, autre artefact.',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'Non. Les scripts sont retirés. Murs de connexion, paywalls et applis rendues en JavaScript collent rarement à la vue authentifiée. Le CSS responsive suit la largeur choisie.',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'Le transparent n’apparaît que là où la page a de l’alpha (ou aucun fond plein). Une home blanche reste blanche. 2× double les pixels (relecture retina) et alourdit le fichier. Une plage unie ne se « perce » pas jusqu’au damier.',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'Convertir plusieurs pages web en PDF pagine en A4 pour la lecture et l’impression. Ici : un PNG tramé par URL. Besoin de feuilles imprimables ? Utilisez l’outil PDF.',
	tool_batch_convert_web_pages_to_png_faq_q1: 'Une seule URL suffit-elle (capture de page en PNG) ? ZIP ou un seul fichier ?',
	tool_batch_convert_web_pages_to_png_faq_q2: 'Mes pages sont-elles envoyées et conservées sur un serveur ?',
	tool_batch_convert_web_pages_to_png_faq_q3: 'Quelle différence avec Convertir plusieurs pages web en JPG ?',
	tool_batch_convert_web_pages_to_png_faq_q4: 'Un site avec connexion ou beaucoup de JavaScript ressemblera-t-il au live ?',
	tool_batch_convert_web_pages_to_png_faq_q5: 'Quand le fond transparent se voit-il, et que change le 2× ?',
	tool_batch_convert_web_pages_to_png_faq_q6: 'Quelle différence avec Convertir plusieurs pages web en PDF ?',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '{n} URL en file',
	tool_batch_convert_web_pages_to_png_how_body:
		'Une seule ligne d’URL suffit déjà pour une capture nette ; pour un lot, collez la liste, cliquez Tout convertir (bureau 1280, fond blanc, 1×, page entière par défaut), puis Télécharger le ZIP.',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'Une URL https par ligne (kits de composants et docs d’UI publiques conviennent). Une ligne = capture de page en PNG.',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'Cliquez Tout convertir. Défaut : bureau 1280, blanc, 1×, page entière. Chaque URL publique est récupérée une fois ; les échecs sont sautés.',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'Fond transparent, 2×, largeur téléphone ou premier écran seulement : ouvrez Réglages avancés (facultatif) pour vue, fond, échelle, étendue et attente de chargement.',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'JPEG compact pour le chat : Convertir plusieurs pages web en JPG. A4 imprimable : Convertir plusieurs pages web en PDF. Photos déjà sur l’appareil : Convertir des images en PNG en lot.',
	tool_batch_convert_web_pages_to_png_how_item_5: 'Dès qu’une ligne a réussi, cliquez Télécharger le ZIP.',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'Charger un exemple teste deux interfaces locales ; le panneau de progression s’affiche pendant la conversion.',
	tool_batch_convert_web_pages_to_png_how_title: 'En pratique',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: '{s}s écoulées',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: 'Récupérer',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: 'Images',
	tool_batch_convert_web_pages_to_png_hud_title: 'Avancement du lot',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'La largeur de vue change la mise en page. Le fond transparent conserve l’alpha. 2× double les pixels. Page entière = capture haute ; premier écran ≈ une hauteur de vue.',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'Une URL http(s) par ligne, 10 au plus. Traitement en série. Échecs ignorés. PNG réussis dans un ZIP. Fond et échelle changent les pixels — ce n’est ni un JPEG renommé ni un export PDF.',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'Chaque URL part une fois vers notre serveur pour le HTML et n’est pas stockée. Le PNG se fabrique dans cet onglet.',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'Réseaux privés, connexions et adresses manquantes font échouer cette ligne. Le reste du lot continue.',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'Noms ZIP en double → name (2).png. Scripts et pièges noscript de rechargement sont retirés. Les captures très hautes sont plafonnées pour ne pas faire planter l’onglet.',
	tool_batch_convert_web_pages_to_png_rules_item_4: 'Ce n’est pas un crawler de site entier. Collez les URL que vous avez déjà.',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'Face au lot JPG : PNG sans perte, pas de curseur JPEG, fond transparent optionnel. Face au lot PDF : pas de pagination A4. Face au lot d’images PNG : l’entrée est une URL web, pas une photo sur l’appareil.',
	tool_batch_convert_web_pages_to_png_rules_title: 'À savoir',
	tool_batch_convert_web_pages_to_png_sample: 'Charger un exemple',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2× (retina)',
	tool_batch_convert_web_pages_to_png_scale_label: 'Échelle de pixels',
	tool_batch_convert_web_pages_to_png_status_converting: 'Rendu PNG… cet onglet peut se figer quelques secondes',
	tool_batch_convert_web_pages_to_png_status_done: 'Lot terminé — vérifiez le tableau, puis téléchargez le ZIP.',
	tool_batch_convert_web_pages_to_png_status_fetching: 'Récupération du HTML…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG prêt',
	tool_batch_convert_web_pages_to_png_status_queued: 'En file',
	tool_batch_convert_web_pages_to_png_status_skip: 'Ignoré',
	tool_batch_convert_web_pages_to_png_status_waiting: 'Attente de la fin des images…',
	tool_batch_convert_web_pages_to_png_status_working: 'Conversion du lot…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} prêts · {skip} ignorés',
	tool_batch_convert_web_pages_to_png_title: 'Convertir plusieurs pages web en PNG',
	tool_batch_convert_web_pages_to_png_url_hint:
		'Une URL http(s) publique par ligne, 10 au plus. Récupération unique, réécriture CSS/images. Scripts retirés avant la capture. La mise en page suit la largeur choisie.',
	tool_batch_convert_web_pages_to_png_url_label: 'URL (une par ligne)',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'Archiver un kit de composants en PNG net : labels et bord 1 px restent lisibles. Le JPEG les bave.',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'Exporter un panneau flottant en PNG transparent et le poser sur un frame Figma. Une home unie reste opaque.',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'Gardez le JPEG de chat sur Convertir plusieurs pages web en JPG et l’A4 sur Convertir plusieurs pages web en PDF ; ici, uniquement des rasters d’interface sans perte.',
	tool_batch_convert_web_pages_to_png_usecases_title: 'Cas concrets',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'Bureau 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: 'Largeur de vue',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'Téléphone 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'Tablette 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'Secondes supplémentaires une fois le chargement des images lancé. Défaut 1. Augmentez si le PNG montre des cadres vides.',
	tool_batch_convert_web_pages_to_png_wait_label: 'Attente de chargement (s)',
};

export default fr;
