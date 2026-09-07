/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / fr).
 * H1 local : Convertir plusieurs pages web en PDF.
 * IG vs JPG : pagination A4 portrait pour l’impression, pas une capture de viewport.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Collez des URL publiques : chaque page devient un PDF A4 portrait, découpé pour l’impression et la lecture page par page — pas un JPEG infini. Les échecs sont ignorés ; les fichiers OK partent dans un ZIP. Chaque adresse est demandée une fois et n’est pas stockée. Captures pour le chat ou premier écran mobile/bureau ? Convertir plusieurs pages web en JPG.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Cadre de capture masqué',
	tool_batch_convert_web_pages_to_pdf_clear: 'Effacer',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Fichier',
	tool_batch_convert_web_pages_to_pdf_col_status: 'État',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Tout convertir',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Enregistrez une liste d’URL en PDF A4 portrait imprimables — ZIP ; ce n’est pas une capture de page.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Convertir plusieurs pages web en PDF : la liste d’URL sort en A4 portrait, pour imprimer et feuilleter — pas un JPEG trop haut. Étapes : coller, Tout convertir, Télécharger le ZIP. Exemple : deux politiques deviennent deux PDF. Chaque URL est demandée une fois et n’est pas conservée. HTML collé : Convertir HTML en PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Télécharger le ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Collez d’abord au moins une URL de page.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Cette page n’a pas pu devenir un PDF. Ignorée.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Ce navigateur n’a pas pu assembler le ZIP. Essayez un navigateur récent.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'La bibliothèque de conversion n’a pas chargé. Actualisez puis réessayez.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: '10 URL au plus. Les lignes en trop n’ont pas été ajoutées.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Impossible de charger cette URL. Vérifiez l’adresse, ou le site bloque la requête.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Cette ligne n’est pas une URL http(s) valide. Ignorée.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Charger un exemple remplit une aide et une politique example.com, fabrique deux PDF A4 locaux avec saut CSS (sans visite live) et active Télécharger le ZIP. Tout convertir interroge les adresses collées. Le CSS d’impression déplace les coupes.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Exemple',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'Le papier est toujours A4 portrait. Les longues pages se coupent via les sauts CSS (plus un repli héritage). Ce n’est pas une feuille infinie. Capture longue : Convertir plusieurs pages web en JPG.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'La sœur JPG rasterise un JPEG par URL en 1280 / 768 / 390, qualité et page entière ou premier écran. Ici chaque URL est tranchée en feuilles A4 à imprimer. Même liste, autre livrable.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Cette page sert une liste d’URL : plusieurs pages publiques → PDF A4 séparés → ZIP. Pour un fragment HTML avec aperçu : Convertir HTML en PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'La conversion se fait dans cet onglet. Chaque adresse part une fois vers le serveur pour le HTML ; les pages ne sont pas stockées. Le PDF est créé sur l’appareil, le ZIP ici.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Chaque ligne réussie est un PDF distinct dans un ZIP. Pas de fusion — après téléchargement, Combiner des fichiers en un PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'Non. Les scripts sont retirés. Murs de connexion, paywalls et applis JavaScript collent rarement au site réel. Le CSS d’impression peut aussi déplacer les sauts.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Quel format papier ? Une page interminable ?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Quelle différence avec Convertir plusieurs pages web en JPG ?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Quelle différence avec Convertir HTML en PDF ?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Mes pages sont-elles envoyées et stockées sur un serveur ?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Le résultat est-il un seul PDF ou un ZIP de plusieurs fichiers ?',
	tool_batch_convert_web_pages_to_pdf_faq_q6: 'Un site avec connexion ou beaucoup de JavaScript ressemble-t-il à la page réelle ?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URL dans la file',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Collez les URL publiques à archiver ou imprimer, convertissez-les en PDF A4 portrait, puis emportez un ZIP des fichiers réussis.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Une URL https par ligne. Politiques, centres d’aide et docs publics à imprimer conviennent.',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Laissez l’attente près de 1 seconde, sauf si des images restent vides sur une feuille A4.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Cliquez sur Tout convertir. Chaque URL publique est demandée une fois et paginée en A4 portrait (les sauts CSS peuvent couper des blocs). Les échecs sont ignorés.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'HTML avec aperçu ? Convertir HTML en PDF. Capture au viewport plutôt que du papier ? Convertir plusieurs pages web en JPG.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Téléchargez le ZIP dès qu’au moins une ligne a réussi. Charger un exemple teste deux pages A4 locales avec saut CSS.',
	tool_batch_convert_web_pages_to_pdf_how_item_6: 'Pour relier plusieurs PDF en un livret, téléchargez d’abord puis Combiner des fichiers en un PDF.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Fonctionnement',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Avancement du lot',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct} %',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s} s écoulées',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Récupération',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Images',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Une URL http(s) par ligne, 10 au plus. Sortie A4 portrait avec sauts CSS, pas un JPEG pleine page. Conversion en série. Échecs ignorés. Les PDF OK vont dans le ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Chaque URL part une fois vers le serveur pour le HTML et n’est pas stockée. Le PDF est créé dans cet onglet en A4 portrait.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'La pagination suit les sauts CSS (repli héritage). Les styles d’impression peuvent différer de l’écran. Les pages très hautes sont plafonnées pour ne pas planter l’onglet.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Réseaux privés, connexions et pages manquantes ne font échouer que cette ligne. Les doublons dans le ZIP deviennent name (2).pdf. Les scripts sont retirés avant.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Ce n’est ni un robot pour tout un site ni un outil de capture. Collez les URL publiques que vous avez déjà.',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'Face à Convertir plusieurs pages web en JPG : un JPEG au viewport. Face à Convertir HTML en PDF : du HTML collé. Face à Combiner des fichiers en un PDF : ici pas de fusion.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'Règles à prévoir',
	tool_batch_convert_web_pages_to_pdf_sample: 'Charger un exemple',
	tool_batch_convert_web_pages_to_pdf_status_done: 'Lot terminé — consultez le tableau, puis téléchargez le ZIP.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'Récupération du HTML…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF prêt',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'Ignoré',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'Attente de la fin des images…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'Génération du PDF… cet onglet peut se figer quelques secondes',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'En file',
	tool_batch_convert_web_pages_to_pdf_status_working: 'Conversion du lot…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} prêts · {skip} ignorés',
	tool_batch_convert_web_pages_to_pdf_title: 'Convertir plusieurs pages web en PDF',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'Une URL http(s) publique par ligne, jusqu’à 10. Nous demandons chaque page une fois et réécrivons CSS et images. Les scripts sont retirés ; le résultat est A4 portrait avec sauts CSS.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URL des pages (une par ligne)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Avant une réunion, archivez plusieurs aides ou docs publics en PDF A4 imprimables, sans ouvrir Imprimer dans chaque onglet.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Mettez politiques, CGU ou avis dans un ZIP pour les lire plus tard ou les joindre à un mail.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Un HTML collé reste sur Convertir HTML en PDF. Captures de chat et contraste mobile/bureau : JPG. Ici, l’archive imprimable de la liste d’URL.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Bons usages',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Secondes supplémentaires après le début du chargement des images sur chaque feuille A4. La valeur par défaut est 1. Augmentez-la si le PDF montre des cadres vides.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Attente de chargement (s)',
};

export default fr;
