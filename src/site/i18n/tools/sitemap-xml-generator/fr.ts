/**
 * i18n tool shard (sitemap-xml-generator / fr).
 * French independent rewrite — keeps sitemap.xml/lastmod/changefreq/priority as technical terms.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_sitemap_home_title: 'Générateur de sitemap XML',
	tool_sitemap_home_desc:
		'Aidez Google à découvrir les pages que vos liens internes laissent de côté : transformez une liste d’URL en sitemap.xml valide avec lastmod, changefreq et priority, directement dans le navigateur.',
	tool_sitemap_title: 'Générateur de sitemap XML — créez sitemap.xml à partir d’URLs',
	tool_sitemap_description:
		'Un sitemap indique à Google quelles URL existent, surtout celles que des liens internes faibles cachent. Collez des URL https, prévisualisez le sitemap.xml, copiez-le à la racine. Exemple : 3 URL.',
	tool_sitemap_generate: 'Générer',
	tool_sitemap_sample: 'Exemple',
	tool_sitemap_clear: 'Effacer',
	tool_sitemap_copy: 'Copier',
	tool_sitemap_copied: 'Copié',
	tool_sitemap_download: 'Télécharger',
	tool_sitemap_urls_label: 'URLs (une par ligne)',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
			'Chaque ligne : URL, ou URL | lastmod (yyyy-MM-dd), ou URL | lastmod | changefreq | priority. Exemple : https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'URL non http ignorée : {url}',
	tool_sitemap_warn_bad_lastmod: 'lastmod invalide (utilisez yyyy-MM-dd ou une date-heure W3C) : {url}',
	tool_sitemap_warn_too_many: 'Plus de 50 000 URLs : découpez en plusieurs sitemaps et reliez-les avec un sitemap index.',
	tool_sitemap_how_title: 'Comment ça marche',
	tool_sitemap_how_body:
		'Collez votre liste d’URLs, une par ligne. Après une barre verticale, ajoutez lastmod (yyyy-MM-dd), changefreq et priority. La page analyse chaque ligne, échappe les caractères réservés, vérifie que l’URL commence par http(s) et construit un urlset selon le protocole. Copiez le XML à la racine du site, puis référencez-le depuis robots.txt ou envoyez-le dans Search Console.',
	tool_sitemap_rules_title: 'Règles et limites du protocole',
	tool_sitemap_rules_body: 'Voici les règles du protocole sitemap et de Google suivies par ce générateur.',
	tool_sitemap_rules_item_1:
		'Obligatoire : chaque <url> doit contenir un <loc> avec l’URL complète. lastmod, changefreq et priority sont facultatifs.',
	tool_sitemap_rules_item_2:
		'Format de lastmod : une date W3C (yyyy-MM-dd) ou une date-heure comme 2026-08-01T12:00:00+00:00. Les autres formats sont ignorés ou rejetés.',
	tool_sitemap_rules_item_3:
		'changefreq est une indication, pas un signal. Google l’ignore, donc la renseigner ne change pas la fréquence d’exploration.',
	tool_sitemap_rules_item_4:
		'Limites : un sitemap accepte au maximum 50 000 URLs et 50 Mo après compression. Au-delà, découpez et utilisez un sitemap index.',
	tool_sitemap_example_title: 'Exemple',
	tool_sitemap_example:
		'Saisie d’exemple : https://example.com/ et https://example.com/products avec lastmod 2026-08-01, plus https://example.com/about — la sortie est un urlset à trois éléments url, celui du milieu portant lastmod.',
	tool_sitemap_usecases_title: 'Cas d’usage',
	tool_sitemap_usecase_1:
		'Nouveaux sites : générez un premier sitemap.xml depuis votre liste d’URLs et envoyez-le dans Search Console.',
	tool_sitemap_usecase_2:
		'Contenu mis à jour : ajoutez lastmod uniquement aux pages qui ont réellement changé. Google ne s’en sert que si la date reste fiable dans tout le fichier ; mettre la date du jour sur chaque URL lui fait ignorer le champ.',
	tool_sitemap_usecase_3:
		'Découverte : pointez robots.txt vers l’URL du sitemap pour que les robots le trouvent sans attendre l’envoi.',
	tool_sitemap_faq_q1: 'Quelle est la limite d’URLs d’un sitemap ?',
	tool_sitemap_faq_a1:
		'50 000 URLs ou 50 Mo (non compressé). Le générateur avertit quand la liste dépasse 50 000 afin de découper et d’utiliser un sitemap index.',
	tool_sitemap_faq_q2: 'Quel format de lastmod est requis ?',
	tool_sitemap_faq_a2:
		'Une date W3C (yyyy-MM-dd) ou une date-heure complète comme 2026-08-01T12:00:00+00:00. Les lignes dont le lastmod ne correspond pas sont signalées pour correction avant enregistrement.',
	tool_sitemap_faq_q3: 'changefreq affecte-t-il l’exploration ?',
	tool_sitemap_faq_a3:
		'Non. Google ignore changefreq ; c’est une indication pour d’autres consommateurs. priority est aussi ignorée. La métadonnée qui vaut la peine d’être exacte est lastmod.',
	tool_sitemap_faq_q4: 'Quelle différence avec IndexNow ?',
	tool_sitemap_faq_a4:
		'IndexNow notifie immédiatement les moteurs participants d’un changement d’URL, tandis qu’un sitemap est une liste permanente que les robots consultent. Utilisez les deux : IndexNow pour la notification immédiate, le sitemap pour la découverte continue.',
	tool_sitemap_references: 'sitemaps.org — protocole sitemap ; Google Search Central — créer et soumettre un sitemap.',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — protocole',
	tool_sitemap_ref_google_label: 'Search Central — créer et soumettre un sitemap',
};

export default fr;
