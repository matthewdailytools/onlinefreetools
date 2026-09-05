/**
 * i18n tool shard (open-graph-preview / fr).
 * Français — réécriture indépendante orientée recherche locale.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_og_home_title: 'Aperçu Open Graph',
	tool_og_home_desc:
		'Faites en sorte que chaque partage de votre page génère des clics : aperçu de son apparence sur Facebook, X et les applis de messagerie, depuis le navigateur.',
	tool_og_title: 'Aperçu Open Graph — vérifiez les cartes de partage social',
	tool_og_description:
		'Sans image OG ou titre, les partages perdent des clics. Collez balises og/twitter ou URL pour prévisualiser Facebook, X et chats. Local. Exemple : 1200×630.',
	tool_og_tags_tab: 'Coller les balises',
	tool_og_url_tab: 'Récupérer l’URL',
	tool_og_tags_ph: 'Collez ici vos balises <meta property="og:*"> et <meta name="twitter:*">…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'Récupérer l’URL',
	tool_og_preview: 'Aperçu',
	tool_og_sample: 'Exemple',
	tool_og_clear: 'Effacer',
	tool_og_copy: 'Copier',
	tool_og_copied: 'Copié',
	tool_og_running: 'Vérification…',
	tool_og_error_prefix: 'Erreur : ',
	tool_og_url_error: 'Saisissez une URL http(s) valide.',
	tool_og_fetch_failed: 'Impossible de récupérer l’URL. La page peut être hors ligne, bloquer les bots ou ne pas renvoyer de HTML.',
	tool_og_no_tags: 'Aucune balise OG détectée',
	tool_og_no_tags_fallback:
		'Sans balises Open Graph, Facebook, X et WhatsApp construisent l’aperçu à partir du titre, de la meta description et de la première image de la page.',
	tool_og_required_label: 'Obligatoire',
	tool_og_optional_label: 'Optionnel',
	tool_og_missing_label: 'Manquant',
	tool_og_ok_label: 'Présent',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'État des balises',
	tool_og_ratio_warning: 'og:image doit faire environ 1200×630 px (1.91:1).',
	tool_og_ratio_ok: 'og:image est proche de 1200×630 px (1.91:1).',
	tool_og_ratio_unknown: 'Impossible de lire la taille de l’image depuis l’URL.',
	tool_og_dimensions: '{w}×{h} px',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'Applis de messagerie (style WhatsApp)',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: 'Aucun twitter:card défini — les plateformes déduisent une carte summary des balises og:.',
	tool_og_how_title: 'Comment ça marche',
	tool_og_how_body:
		'L’aperçu analyse les balises og:/twitter: que vous collez (ou les extrait du HTML récupéré pour une URL) et dessine trois cartes. Facebook affiche l’image 1.91:1 à gauche avec titre, description et domaine dessous. X suit twitter:card : summary_large_image montre une grande image en haut, summary une petite à côté du texte. Les applis de messagerie comme WhatsApp montrent une grande carte. Le tableau des champs signale les quatre champs exigés par le protocole et liste ceux qui restent facultatifs.',
	tool_og_how_item_1: 'Collez les meta og:/twitter: ou récupérez une URL.',
	tool_og_how_item_2: 'Cliquez sur Aperçu (ou Exemple).',
	tool_og_how_item_3: 'Comparez les cartes Facebook, X et messagerie.',
	tool_og_how_item_4: 'Corrigez les champs obligatoires manquants dans le tableau.',
	tool_og_rules_title: 'Règles suivies par l’aperçu',
	tool_og_rules_body: 'Voici les tailles et replis utilisés par les plateformes, selon le protocole Open Graph et la documentation X Cards.',
	tool_og_rules_item_1: 'Obligatoires selon le protocole Open Graph : og:title, og:type, og:image et og:url. og:description est facultatif dans la spécification, mais toutes les grandes plateformes l’affichent : sans elle, la plateforme rédige son propre résumé à partir du texte de la page.',
	tool_og_rules_item_2: 'og:image en 1200×630 px (1.91:1) fonctionne sur toutes les grandes plateformes. Facebook accepte aussi les recadrages 2:1 et 1:1 ; les petites images sont souvent agrandies et floues.',
	tool_og_rules_item_3: 'twitter:card summary_large_image va avec une grande image ; summary avec une petite. Sans twitter:card, les plateformes déduisent une carte summary des balises og:.',
	tool_og_rules_item_4: 'Quand og:title ou og:image manque, les plateformes utilisent le titre HTML, la meta description et la première image de la page.',
	tool_og_rules_item_5: 'La taille est mesurée en chargeant l’image dans le navigateur ; si elle ne se charge pas (bloquée, hors ligne ou mauvaise URL), la vérification rapporte « inconnu ».',
	tool_og_example_title: 'Exemple',
	tool_og_example:
		'Les balises d’exemple décrivent un article avec une og:image 1200×630 et twitter:card summary_large_image. L’aperçu montre une carte Facebook avec l’image à gauche, une grande carte X, une carte style WhatsApp et un tableau où tous les champs obligatoires sont présents.',
	tool_og_usecases_title: 'Bonnes utilisations',
	tool_og_usecase_1:
		'Avant de publier un article ou une page d’atterrissage, collez les balises une fois et confirmez que la carte s’affiche bien sur Facebook, X et les applis de messagerie.',
	tool_og_usecase_2:
		'Quand un lien partagé ne montre pas d’image ou une image recadrée, collez les balises og: pour voir si og:image manque ou a un mauvais ratio.',
	tool_og_usecase_3:
		'Après une mise à jour de CMS ou de thème, récupérez l’URL en direct et vérifiez que les balises og: correspondent toujours à la page.',
	tool_og_faq_q1: 'Que se passe-t-il si une page n’a pas de balises Open Graph ?',
	tool_og_faq_a1:
		'Facebook, X et WhatsApp se rabattent sur le titre HTML, la meta description et une image trouvée dans la page. Ces solutions de repli diffèrent selon la plateforme et évoluent avec le temps : la carte peut donc être incomplète ou retenir la mauvaise image, d’où l’intérêt des balises og:.',
	tool_og_faq_q2: 'Quelle taille pour og:image ?',
	tool_og_faq_a2:
		'La taille sûre est 1200×630 px, un ratio 1.91:1 accepté par toutes les grandes plateformes. Facebook prend désormais aussi en charge les recadrages 2:1 et 1:1. Les images très petites sont souvent agrandies et deviennent floues.',
	tool_og_faq_q3: 'Quel est le lien entre twitter:card et les balises og: ?',
	tool_og_faq_a3:
		'twitter:card choisit la mise en page : summary_large_image montre une image large, summary une petite. Quand twitter:title, twitter:description ou twitter:image manquent, X utilise la balise og: correspondante.',
	tool_og_faq_q4: 'Que fait la plateforme si og:image manque ?',
	tool_og_faq_a4:
		'Elle utilise la première image trouvée dans le HTML de la page, ou affiche la carte sans image. Une og:image manquante est la cause la plus fréquente d’un lien partagé sans image d’aperçu.',
	tool_og_faq_q5: 'Pourquoi la vérification du ratio indique « inconnu » ?',
	tool_og_faq_a5:
		'L’aperçu tente de charger og:image avec un chargement d’image du navigateur pour lire sa taille réelle. Quand l’image est bloquée, hors ligne, lente ou que le serveur refuse la requête, la taille ne peut pas être lue et la vérification indique inconnu.',
	tool_og_faq_q6: 'Mes balises sont-elles envoyées quelque part ?',
	tool_og_faq_a6:
		'Non. En mode coller, l’analyse et l’aperçu se font sur votre appareil. Le mode URL récupère la page une fois via notre worker et ne la stocke pas.',
	tool_og_references: 'ogp.me — Le protocole Open Graph ; X — Marquage des cartes.',
	tool_og_ref_ogp_label: 'ogp.me — Le protocole Open Graph',
	tool_og_ref_x_label: 'X — Marquage des cartes',
};

export default fr;
