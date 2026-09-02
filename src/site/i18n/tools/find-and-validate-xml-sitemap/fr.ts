/**
 * Fragment i18n (find-and-validate-xml-sitemap / fr).
 * Scène : URL du site → découvrir le sitemap → valider le XML et échantillons loc (pas de génération).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'Trouver et valider un sitemap XML',
	tool_find_and_validate_xml_sitemap_home_desc:
		'Trouvez le sitemap via robots.txt ou /sitemap.xml et vérifiez structure, type et locs d’exemple.',
	tool_find_and_validate_xml_sitemap_desc:
		'Trouvez le sitemap via robots.txt ou /sitemap.xml et vérifiez structure, type et locs d’exemple.',
	tool_find_and_validate_xml_sitemap_title: 'Trouver et valider un sitemap XML',
	tool_find_and_validate_xml_sitemap_description:
		'Saisissez l’URL du site pour localiser le sitemap XML via les lignes Sitemap: de robots.txt ou /sitemap.xml ; validez la structure, comptez les locs et distinguez urlset et sitemapindex. Pas un générateur. Exemple : sitemaps.org.',
	tool_find_and_validate_xml_sitemap_url_label: 'URL du site',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: 'Trouver et valider',
	tool_find_and_validate_xml_sitemap_sample: 'Exemple',
	tool_find_and_validate_xml_sitemap_clear: 'Effacer',
	tool_find_and_validate_xml_sitemap_running: 'Découverte et validation des sitemaps…',
	tool_find_and_validate_xml_sitemap_url_error: 'Saisissez une URL http(s) valide du site (origine ou page d’accueil).',
	tool_find_and_validate_xml_sitemap_error_prefix: 'Erreur : ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'Impossible de récupérer les candidats sitemap. L’hôte peut être hors ligne ou bloquer les robots.',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'L’URL et le nom d’hôte sont envoyés à notre Worker pour récupérer robots.txt et sitemaps. Nous ne les conservons pas comme base produit.',
	tool_find_and_validate_xml_sitemap_result_site: 'Origine du site',
	tool_find_and_validate_xml_sitemap_result_candidates: 'Candidats testés',
	tool_find_and_validate_xml_sitemap_result_primary: 'Résultat principal',
	tool_find_and_validate_xml_sitemap_result_none_primary: 'Aucune structure de sitemap valide parmi les candidats',
	tool_find_and_validate_xml_sitemap_col_url: 'URL',
	tool_find_and_validate_xml_sitemap_col_status: 'Statut HTTP',
	tool_find_and_validate_xml_sitemap_col_kind: 'Type',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'Nb de loc',
	tool_find_and_validate_xml_sitemap_col_valid: 'Structure valide',
	tool_find_and_validate_xml_sitemap_col_samples: 'Locs d’exemple',
	tool_find_and_validate_xml_sitemap_valid_yes: 'Oui',
	tool_find_and_validate_xml_sitemap_valid_no: 'Non',
	tool_find_and_validate_xml_sitemap_empty_findings: 'Aucun résultat pour ce site.',
	tool_find_and_validate_xml_sitemap_how_title: 'Fonctionnement',
	tool_find_and_validate_xml_sitemap_how_body:
		'Une seule mission : trouver le sitemap XML du site et vérifier s’il ressemble à un urlset ou sitemapindex valide — sans créer de fichier.',
	tool_find_and_validate_xml_sitemap_how_item_1: 'Saisissez l’origine du site ou l’URL d’accueil.',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'Cliquez sur Trouver et valider ; le Worker lit les lignes Sitemap: puis teste /sitemap.xml et les index courants.',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'Consultez dans le tableau le type racine, le nombre d’URL et les <loc> d’exemple.',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'Corrigez les problèmes XML ou de découverte avant IndexNow ou Search Console.',
	tool_find_and_validate_xml_sitemap_formula_title: 'Règles de découverte et de validation',
	tool_find_and_validate_xml_sitemap_formula_body:
		'Selon le protocole sitemaps.org : XML bien formé avec racine urlset ou sitemapindex et entrées <loc> dénombrables.',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'Ordre : directives Sitemap: de robots.txt, puis /sitemap.xml, /sitemap_index.xml, /sitemap-index.xml.',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'Structure valide si la réponse ressemble à du XML sitemap et le HTTP est OK.',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'sitemapindex liste des sitemaps enfants ; urlset liste des locs de pages — les deux sont signalés.',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'Nous comptons les <loc> et affichons jusqu’à 10 échantillons ; nous ne parcourons pas chaque URL.',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'Gzip, corps trop volumineux, redirections et non-XML peuvent échouer. Les hôtes privés sont refusés.',
	tool_find_and_validate_xml_sitemap_example_title: 'Exemple',
	tool_find_and_validate_xml_sitemap_example:
		'Entrée d’exemple https://www.sitemaps.org/. Le Worker teste Sitemap: et les chemins courants, puis affiche statut HTTP, type, nombre de loc, échantillons et validStructure.',
	tool_find_and_validate_xml_sitemap_usecases_title: 'Cas d’usage',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'Chercheur de sitemap : après migration CMS ou CDN, confirmez où la carte est publiée.',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'Vérificateur / validateur XML : avant Search Console, contrôlez que le fichier est bien formé et s’il s’agit d’un index ou d’un urlset.',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'Contrôle rapide des loc : après régénération d’un gros sitemap, parcourez des <loc> d’exemple sans tout télécharger.',
	tool_find_and_validate_xml_sitemap_faq_q1: 'Est-ce un générateur de sitemap ?',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'Non — recherche et validation uniquement. Pour créer un fichier à partir d’une liste d’URL, utilisez le générateur XML Sitemap.',
	tool_find_and_validate_xml_sitemap_faq_q2: 'Où cherchez-vous le sitemap ?',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'D’abord les lignes Sitemap: de robots.txt, puis /sitemap.xml et les index habituels sur le même hôte.',
	tool_find_and_validate_xml_sitemap_faq_q3: 'Quelle différence entre sitemapindex et urlset ?',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex liste des sitemaps enfants ; urlset liste des locs de pages. Les deux sont des racines valides ; le tableau indique le type.',
	tool_find_and_validate_xml_sitemap_faq_q4: 'Parcourez-vous chaque URL du sitemap ?',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'Non. Nous comptons les <loc>, montrons un échantillon et vérifions la structure — pas le statut live de chaque page.',
	tool_find_and_validate_xml_sitemap_faq_q5: 'Mon URL est-elle envoyée ou stockée ?',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'L’URL/hôte doit atteindre le Worker pour récupérer les fichiers. Nous ne stockons pas les contrôles comme base produit. Outil edge, pas « sans envoi ».',
	tool_find_and_validate_xml_sitemap_references:
		'Protocole sitemaps.org ; Google Search Central — aperçu des sitemaps.',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — Protocole',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — Aperçu des sitemaps',
};

export default fr;
