/**
 * i18n tool shard (meta-serp-preview / fr).
 * French locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_serp_home_title: 'Aperçu des résultats Google',
	tool_serp_home_desc: 'Un titre tronqué vous fait perdre des clics dans Google — vérifiez la coupure avant de publier.',
	tool_serp_title: 'Aperçu des résultats Google — vérifiez la coupure du titre et de la description',
	tool_serp_description:
		'Un titre ou une description tronqué dans les résultats peut vous coûter des clics dans Google. Collez un titre et une description pour prévisualiser leur troncature dans les résultats Google, sur ordinateur et mobile. Saisissez titre, description et URL facultative ; consultez le nombre de caractères, la largeur estimée en pixels et le point de coupe de l’extrait ; comparez deux titres côte à côte. Tout se passe dans votre navigateur, rien n’est envoyé. Exemple : un titre de 60 caractères latins et un de 30 caractères CJK peuvent atteindre la limite de pixels avec des comptages différents.',
	tool_serp_preview: 'Aperçu',
	tool_serp_sample: 'Exemple',
	tool_serp_clear: 'Effacer',
	tool_serp_copy: 'Copier',
	tool_serp_copied: 'Copié',
	tool_serp_title_label: 'Titre',
	tool_serp_title_ph: 'Le titre de la page affiché dans les résultats',
	tool_serp_desc_label: 'Meta description',
	tool_serp_desc_ph: 'Le texte de l’extrait sous le titre du résultat',
	tool_serp_url_label: 'URL (facultatif)',
	tool_serp_url_ph: 'ex. https://example.com/page',
	tool_serp_compare_label: 'Comparer avec un second titre',
	tool_serp_title_b_label: 'Titre B',
	tool_serp_title_b_ph: 'Collez un titre alternatif à comparer',
	tool_serp_desktop: 'Aperçu ordinateur',
	tool_serp_mobile: 'Aperçu mobile',
	tool_serp_char_count: '{n} caractères',
	tool_serp_px_width: '~{n}px',
	tool_serp_cut_warning: 'Tronqué — la ligne dépasse le viewport d’environ {limit}px',
	tool_serp_fit: 'Tient dans le viewport',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: 'Saisissez un titre pour voir l’aperçu.',
	tool_serp_how_title: 'Comment ça marche',
	tool_serp_how_body:
		'Saisissez ou collez le titre, la description et une URL facultative. L’outil estime combien de caractères et de pixels approximatifs occupe chaque ligne avec une approximation de métriques de police (les glyphes larges CJK comptent plus que les lettres ASCII étroites), puis dessine un extrait style Google pour ordinateur et un pour mobile. Les lignes plus larges que le viewport estimé reçoivent une marque de coupe.',
	tool_serp_rules_title: 'Ce que montre l’aperçu',
	tool_serp_rules_body:
		'Les limites en pixels sont approximatives. Google mesure la largeur rendue, pas le nombre de caractères : les langues denses et les glyphes larges tronquent avec moins de caractères.',
	tool_serp_rules_item_1: 'La limite du titre est estimée à ~600px sur ordinateur et ~460px sur mobile. Une ligne plus large est affichée avec une marque de coupe.',
	tool_serp_rules_item_2: 'Les descriptions sont estimées à environ deux lignes (~600px ordinateur, 460px mobile par ligne).',
	tool_serp_rules_item_3: 'La largeur des glyphes est estimée : lettres et chiffres ASCII environ 0,5 em, caractères CJK proches de 1 em, emoji plus larges.',
	tool_serp_rules_item_4: 'Ce sont des estimations pour planifier. Google peut réécrire les titres ou les descriptions, et le rendu réel dépend de la police et du viewport de l’internaute.',
	tool_serp_example_title: 'Exemple',
	tool_serp_example:
		'Exemple : titre « Meta SERP Preview — How to Preview Google Title & Description Truncation Online », description d’environ deux lignes, URL example.com/page → sur ordinateur le titre est coupé près du 57e caractère avec « … », et plus tôt sur mobile ; la description tient en deux lignes.',
	tool_serp_usecases_title: 'Quand l’utiliser',
	tool_serp_usecase_1: 'Avant publication : collez le titre et la description finaux pour vérifier que les mots clés survivent à la coupe.',
	tool_serp_usecase_2: 'Comparez deux titres candidats côte à côte et choisissez celui qui garde le mot clé principal visible sur mobile.',
	tool_serp_usecase_3: 'Pages CJK : vérifiez combien de caractères chinois tiennent avant la troncature, car les glyphes larges atteignent la limite avec moins de caractères.',
	tool_serp_faq_q1: 'Pourquoi un titre CJK de 30 caractères tronque avant un titre anglais de 60 ?',
	tool_serp_faq_a1: 'Les résultats sont coupés selon la largeur rendue en pixels, pas le nombre de caractères. Les glyphes CJK font presque un em tandis que les lettres ASCII font en moyenne un demi-em : moins de caractères remplissent le même viewport.',
	tool_serp_faq_q2: 'Les limites en pixels sont-elles exactes ?',
	tool_serp_faq_a2: 'Non. Les viewports ordinateur et mobile varient selon l’appareil et la police. Cet outil utilise les limites usuelles d’environ 600px (ordinateur) et 460px (mobile) comme estimation de planification, pas comme garantie du rendu de Google.',
	tool_serp_faq_q3: 'Correspond-il à l’aperçu mobile de Search Console ?',
	tool_serp_faq_a3: 'C’est une estimation locale dans le même sens. Pour l’apparence finale, ouvrez votre page dans l’inspection d’URL de Search Console ou dans le test des résultats enrichis, qui rendent dans l’environnement réel de Google.',
	tool_serp_faq_q4: 'Mon titre est-il envoyé quelque part ?',
	tool_serp_faq_a4: 'Non. Tout le texte reste dans l’onglet de votre navigateur et n’est jamais envoyé à un serveur. Fermez l’onglet et tout disparaît.',
	tool_serp_references: 'Google Search Central — Contrôler les liens de titre ; Google Search Central — Contrôler les extraits.',
	tool_serp_ref_title_label: 'Search Central — Contrôle des titres',
	tool_serp_ref_snippet_label: 'Search Central — Contrôle des extraits',
};

export default fr;
