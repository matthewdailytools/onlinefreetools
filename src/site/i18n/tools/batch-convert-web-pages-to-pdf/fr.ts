/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / fr).
 * H1 local : Convertir plusieurs pages web en PDF (pas le calque Batch convert).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Collez une adresse publique par ligne, convertissez chaque page en PDF A4 dans cet onglet, ignorez les lignes en échec, puis téléchargez un ZIP. Chaque URL est récupérée une fois via le serveur et n’est pas stockée ; la conversion reste sur votre appareil.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Cadre de capture masqué',
	tool_batch_convert_web_pages_to_pdf_clear: 'Effacer',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Fichier',
	tool_batch_convert_web_pages_to_pdf_col_status: 'État',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Tout convertir',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Convertissez plusieurs pages web en PDF depuis une liste d’URL et téléchargez un ZIP ; chaque adresse est demandée une fois et n’est pas conservée.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Convertir plusieurs pages web en PDF : collez une URL https par ligne (jusqu’à 10), générez un PDF A4 ici, ignorez les échecs, téléchargez un ZIP. Étapes : collez la liste, cliquez sur Tout convertir, lisez le tableau, téléchargez. Exemple : deux pages d’aide et de politique d’échantillon deviennent deux PDF dans un ZIP. Chaque URL est demandée une fois au serveur et n’est pas enregistrée ; la conversion reste sur l’appareil. Pour un fragment HTML seul, utilisez Convertir HTML en PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Télécharger le ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Collez d’abord au moins une URL de page.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Cette page n’a pas pu devenir un PDF. Ignorée.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Ce navigateur n’a pas pu assembler le ZIP. Essayez un navigateur récent.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'La bibliothèque de conversion n’a pas chargé. Actualisez puis réessayez.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: '10 URL au plus. Les lignes en trop n’ont pas été ajoutées.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Impossible de charger cette URL. Vérifiez l’adresse, ou le site bloque la requête.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Cette ligne n’est pas une URL http(s) valide. Ignorée.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Charger un exemple remplit deux URL example.com, fabrique deux PDF à partir d’HTML local (sans visiter le site en direct) et active Télécharger le ZIP. Tout convertir interroge les adresses que vous avez collées.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Exemple',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'La conversion se fait dans cet onglet. Pour une liste, nous envoyons chaque adresse au serveur une fois afin de récupérer le HTML ; les pages ne sont pas stockées. Les PDF sont créés sur votre appareil et le ZIP est assemblé ici.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'Cette page sert une liste d’URL (plusieurs pages en PDF puis ZIP). Pour un fragment HTML ou une seule adresse avec aperçu, utilisez Convertir HTML en PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Non. Les scripts sont retirés. Murs de connexion, paywalls et applis rendues en JavaScript collent rarement au site réel. Le CSS d’impression peut aussi différer.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Chaque ligne réussie est un PDF distinct dans un seul ZIP. Nous ne les fusionnons pas — après téléchargement, utilisez Combiner des fichiers en un PDF si besoin.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Jusqu’à 10 URL http(s). Le reste est ignoré. Les lignes en échec sont sautées pour que le lot continue.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Mes pages sont-elles envoyées et stockées sur un serveur ?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Quelle différence avec Convertir HTML en PDF ?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Un site avec connexion ou beaucoup de JavaScript ressemble-t-il à la page réelle ?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Le résultat est-il un seul PDF ou un ZIP de plusieurs fichiers ?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Combien d’URL puis-je convertir d’un coup ?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URL dans la file',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Collez la liste de pages publiques, convertissez-les l’une après l’autre, puis emportez un ZIP des PDF réussis.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Collez une URL https par ligne (centre d’aide ou politiques conviennent).',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Laissez l’attente près de 1 seconde, sauf si les images restent vides dans le PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Cliquez sur Tout convertir. Chaque URL publique est demandée une fois ; les échecs sont ignorés.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'Un fragment HTML plutôt qu’une liste ? Utilisez Convertir HTML en PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Téléchargez le ZIP dès qu’au moins une ligne a réussi. Cliquez sur Charger un exemple pour deux pages locales ; le panneau de progression s’affiche pendant la conversion.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Fonctionnement',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Avancement du lot',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct} %',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s} s écoulées',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Récupération',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Images',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Une URL http(s) par ligne, 10 au plus. Conversion en série. Échecs ignorés. Les PDF OK vont dans le ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Chaque URL part une fois vers le serveur pour le HTML et n’est pas stockée. Le PDF est créé dans cet onglet.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Réseaux privés, connexions et pages manquantes ne font échouer que cette ligne. Le reste continue.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Les doublons dans le ZIP deviennent name (2).pdf. Les scripts sont retirés avant la capture.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Ce n’est pas un robot pour tout un site. Collez les URL que vous avez déjà.',
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
		'Une URL http(s) publique par ligne, jusqu’à 10. Nous demandons chaque page une fois et réécrivons CSS et images. Les scripts sont retirés avant le PDF.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URL des pages (une par ligne)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Enregistrer plusieurs pages d’aide ou de docs en PDF sans les ouvrir une à une.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Archiver une liste d’URL de politiques publiques dans un ZIP à lire plus tard.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Un HTML collé reste sur Convertir HTML en PDF ; cette page sert quand vous avez déjà beaucoup de liens.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Bons usages',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Secondes supplémentaires après le début du chargement des images. La valeur par défaut est 1. Augmentez-la si le PDF montre des cadres vides.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Attente de chargement (s)',
};

export default fr;
