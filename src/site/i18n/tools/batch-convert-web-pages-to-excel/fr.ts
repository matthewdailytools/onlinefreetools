/**
 * i18n tool shard (batch-convert-web-pages-to-excel / fr).
 * H1: Convertir des pages web en Excel par lots.
 * IG: cellules de <table> HTML dans un seul classeur — pas une capture, pas un PDF A4, pas de la prose Word.
 */
import type { SiteLangDict } from '../../../types';

/** Textes visibles du convertisseur web→Excel (fr). */
const fr: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: 'Réglages avancés (facultatif)',
	tool_batch_convert_web_pages_to_excel_article:
		'Extrayez les tableaux HTML d’une liste d’URL publiques vers un classeur Excel : chaque tableau devient une feuille de cellules filtrables. Le texte courant et les captures n’entrent pas. Ce n’est ni un PDF A4 ni un document Word. Chaque adresse est récupérée une fois via le serveur et n’est pas stockée. Le HTML collé reste dans cet onglet. Impression : Convertir des pages web en PDF par lots. Titres éditables : Convertir des pages HTML en document Word.',
	tool_batch_convert_web_pages_to_excel_clear: 'Effacer',
	tool_batch_convert_web_pages_to_excel_col_file: 'Feuilles',
	tool_batch_convert_web_pages_to_excel_col_status: 'État',
	tool_batch_convert_web_pages_to_excel_col_url: 'URL',
	tool_batch_convert_web_pages_to_excel_convert: 'Tout convertir',
	tool_batch_convert_web_pages_to_excel_desc:
		'Extrayez les tableaux HTML d’une liste d’URL vers un classeur Excel — pas une capture, ni un PDF, ni Word.',
	tool_batch_convert_web_pages_to_excel_description:
		'Convertir des pages web en Excel par lots : extraire les tableaux HTML vers un .xlsx (HTML vers Excel / tableau HTML vers Excel). Pas une capture ni un PDF A4. Étapes : coller les URL, Tout convertir, Télécharger Excel. Exemple : tarif et stock deviennent deux feuilles. L’URL est récupérée une fois et n’est pas stockée.',
	tool_batch_convert_web_pages_to_excel_download: 'Télécharger Excel',
	tool_batch_convert_web_pages_to_excel_empty: 'Collez au moins une URL, ou passez à Coller le HTML.',
	tool_batch_convert_web_pages_to_excel_err_convert: 'Cette page n’a pas de tableau HTML utilisable. Ignorée.',
	tool_batch_convert_web_pages_to_excel_err_html_empty: 'Collez d’abord du HTML qui contient un <table>.',
	tool_batch_convert_web_pages_to_excel_err_load: 'La bibliothèque Excel n’a pas chargé. Actualisez puis réessayez.',
	tool_batch_convert_web_pages_to_excel_err_too_many: '10 URL maximum. Les lignes en trop n’ont pas été ajoutées.',
	tool_batch_convert_web_pages_to_excel_err_url: 'Impossible de charger cette URL. Vérifiez l’adresse, ou le site refuse la récupération.',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'Cette ligne n’est pas une URL http(s) valide. Ignorée.',
	tool_batch_convert_web_pages_to_excel_example:
		'Charger un exemple remplit un tarif et un stock, construit un classeur local à partir de deux tableaux HTML (sans visiter le site réel) et active Télécharger Excel. Tout convertir récupère les adresses que vous avez collées. Coller le HTML fait le même mapping sans URL.',
	tool_batch_convert_web_pages_to_excel_example_title: 'Exemple',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'Le HTML collé ne quitte pas cet onglet. Si vous convertissez des URL, nous envoyons chaque adresse une fois pour récupérer le HTML et ne le stockons pas. Le .xlsx est construit dans votre navigateur.',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'La page Word mappe titres, listes et paragraphes vers un .docx éditable. Ici on ignore la prose et on copie seulement les cellules de tableaux HTML vers des feuilles Excel. Même récupération, autre fichier.',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG sont des captures de viewport (ZIP d’images). Le PDF pagine en A4 pour imprimer. Ici : des nombres et du texte filtrables dans Excel — un classeur, pas un ZIP de photos.',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'Oui. Une seule ligne suffit pour page web vers Excel. Les URL réussies partagent un .xlsx à plusieurs feuilles.',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'Non. Pas d’OCR ni de lecteur PDF. Convertissez la page HTML ou collez le balisage du tableau. Si vous avez déjà un CSV, utilisez CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'Utilisez l’onglet Coller le HTML (HTML vers Excel / tableau HTML vers Excel). Page complète Chrome / .mhtml hors périmètre : exportez le HTML ou copiez le tableau. Ce n’est pas Excel pour le web.',
	tool_batch_convert_web_pages_to_excel_faq_q1: 'Mes pages sont-elles envoyées et stockées ?',
	tool_batch_convert_web_pages_to_excel_faq_q2: 'Quelle différence avec Convertir des pages HTML en document Word ?',
	tool_batch_convert_web_pages_to_excel_faq_q3: 'Et par rapport aux lots JPG, PNG ou PDF ?',
	tool_batch_convert_web_pages_to_excel_faq_q4: 'Puis-je convertir une seule URL ?',
	tool_batch_convert_web_pages_to_excel_faq_q5: 'Extrayez-vous les tableaux d’un PDF ?',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'J’ai du HTML ou un tableau HTML, pas une URL. Excel en ligne ou mhtml ?',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '{n} URL dans la file',
	tool_batch_convert_web_pages_to_excel_how_body:
		'Collez des URL publiques qui contiennent des tableaux HTML, cliquez sur Tout convertir, puis téléchargez un classeur Excel. Le texte courant est sauté ; seules les cellules <table> deviennent des feuilles.',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'Une URL https par ligne (tarifs et tableaux HTML publics conviennent). Une ligne suffit pour page web vers Excel.',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'Cliquez sur Tout convertir. Chaque URL publique est récupérée une fois ; les pages sans tableau utilisable sont ignorées, le reste continue.',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'Vous avez le balisage, pas l’URL (HTML vers Excel / tableau HTML vers Excel) ? Ouvrez Coller le HTML, collez le code, puis Tout convertir.',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'Une feuille par URL plutôt que par tableau, ou garder les toutes petites tables ? Ouvrez Réglages avancés.',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'PDF A4 ? Convertir des pages web en PDF par lots. Titres ? Convertir des pages HTML en document Word. Déjà un CSV ? CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_how_item_6: 'Télécharger Excel dès qu’au moins un tableau a été mappé.',
	tool_batch_convert_web_pages_to_excel_how_title: 'Fonctionnement',
	tool_batch_convert_web_pages_to_excel_html_hint: 'Collez un fragment ou un HTML complet qui contient <table>. Le mapping reste dans cet onglet ; rien n’est envoyé.',
	tool_batch_convert_web_pages_to_excel_html_label: 'HTML avec tableaux',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>Qté</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'Feuilles',
	tool_batch_convert_web_pages_to_excel_layout_table: 'Une feuille par tableau HTML',
	tool_batch_convert_web_pages_to_excel_layout_url: 'Une feuille par URL (empiler les tableaux)',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'Par défaut, une feuille par tableau HTML dans un seul classeur. Empiler met tous les tableaux d’une URL sur une feuille avec une ligne vide entre eux. Les toutes petites tables (moins de deux lignes ou deux colonnes) sont ignorées pour ne pas encombrer le fichier de grilles de navigation.',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'Seules les cellules de <table> HTML sont copiées. Une URL http(s) par ligne, jusqu’à 10. Les lignes en échec sont ignorées. Les tableaux réussis partagent un .xlsx. Ce n’est pas une capture renommée ni un export PDF.',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'Chaque URL est envoyée une fois pour récupérer le HTML et n’est pas stockée. Le HTML collé ne quitte pas l’onglet. Le classeur est construit ici.',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'Réseaux privés, murs de connexion et pages sans <table> font échouer cette ligne. Le reste continue.',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan insère des cellules vides. rowspan est aplati (chaque ligne est indépendante). Les scripts sont retirés, donc un tableau uniquement JS sera vide.',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'Ce n’est pas un crawler de tout le site ni Excel pour le web. Collez les URL ou le HTML que vous avez déjà. Les noms de feuille sont coupés à 31 caractères.',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'Face à Convertir des pages HTML en Word : tableaux seulement, pas titres/listes. Face aux lots JPG/PNG/PDF : cellules dans un classeur, pas un ZIP de rasters ni de l’A4. Face à CSV ↔ JSON : l’entrée est une page, pas un fichier déjà là.',
	tool_batch_convert_web_pages_to_excel_rules_title: 'Règles à anticiper',
	tool_batch_convert_web_pages_to_excel_sample: 'Charger un exemple',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: 'Ignorer les toutes petites tables (moins de 2×2)',
	tool_batch_convert_web_pages_to_excel_status_converting: 'Mapping des tableaux HTML…',
	tool_batch_convert_web_pages_to_excel_status_done: 'Lot terminé — vérifiez le tableau, puis téléchargez Excel.',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'Récupération du HTML de la page…',
	tool_batch_convert_web_pages_to_excel_status_ok: 'Tableaux mappés',
	tool_batch_convert_web_pages_to_excel_status_queued: 'En file',
	tool_batch_convert_web_pages_to_excel_status_skip: 'Ignorée',
	tool_batch_convert_web_pages_to_excel_status_working: 'Conversion du lot…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} prêtes · {skip} ignorées',
	tool_batch_convert_web_pages_to_excel_tab_html: 'Coller le HTML',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'URL de pages',
	tool_batch_convert_web_pages_to_excel_title: 'Convertir des pages web en Excel par lots',
	tool_batch_convert_web_pages_to_excel_url_hint: 'Une URL http(s) publique par ligne, jusqu’à 10. Chaque page est récupérée une fois. Les scripts sont retirés. Seuls les tableaux HTML deviennent des feuilles.',
	tool_batch_convert_web_pages_to_excel_url_label: 'URL de pages (une par ligne)',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'Archivez un tarif ou des SKU HTML dans Excel pour que les quantités restent des nombres filtrables — un PNG ne serait que des pixels.',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'Regroupez les tableaux de paramètres de deux aides dans un classeur, puis ajoutez votre colonne SUM. Word garderait les titres en prose.',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'Laissez l’impression A4 à Convertir des pages web en PDF par lots et le CSV déjà là à CSV ↔ JSON ; utilisez cette page quand la source est encore un tableau de page.',
	tool_batch_convert_web_pages_to_excel_usecases_title: 'Quand c’est utile',
};

export default fr;
