/**
 * i18n tool shard (meta-tag-generator / fr).
 * Français — réécriture indépendante orientée recherche locale.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_meta_home_title: 'Générateur de meta tags',
	tool_meta_home_desc:
		'Écrivez les title, description, canonical et balises Open Graph qui génèrent des clics dans Google : créez le head de votre page en entier depuis le navigateur.',
	tool_meta_title: 'Générateur de meta tags — générez le head de votre page en entier',
	tool_meta_description:
		'Title et meta description sont votre carte Google ; un mauvais canonical dilue les signaux. Remplissez pour balises head prêtes. Exemple : canonical + og.',
	tool_meta_title_label: 'Meta title',
	tool_meta_title_ph: 'Générateur de meta tags — générez le head de votre page en entier',
	tool_meta_title_hint: 'Visez environ 60 caractères. Les moteurs de recherche peuvent réécrire les titres plus longs.',
	tool_meta_desc_label: 'Meta description',
	tool_meta_desc_ph: 'Générez des meta tags de head prêtes à coller, avec indications de longueur, valeurs robots et champs OG.',
	tool_meta_desc_hint: 'Visez environ 155–160 caractères. Un texte plus long peut être tronqué dans le SERP.',
	tool_meta_canonical_label: 'URL canonique',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'L’URL préférée de cette page. Ajoutez l’URL complète avec le protocole.',
	tool_meta_robots_label: 'Robots meta',
	tool_meta_robots_none: '— sans robots meta —',
	tool_meta_robots_index_follow: 'index, follow (par défaut, autorise l’indexation)',
	tool_meta_robots_noindex_follow: 'noindex, follow (masque des résultats, suit les liens)',
	tool_meta_robots_index_nofollow: 'index, nofollow (autorise l’indexation, ne suit pas les liens)',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow (masque la page et ne suit pas les liens)',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image (URL complète)',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: 'Générer',
	tool_meta_sample: 'Charger un exemple',
	tool_meta_clear: 'Effacer',
	tool_meta_copy: 'Copier',
	tool_meta_copied: 'Copié',
	tool_meta_error_prefix: 'Erreur : ',
	tool_meta_canonical_protocol: 'L’URL canonique n’a pas de protocole — ajoutez https:// ou http:// pour que les moteurs la lisent.',
	tool_meta_title_len: 'Titre : {n} caractères',
	tool_meta_title_len_warn: 'Titre : {n} caractères — plus de 60, pensez à le raccourcir.',
	tool_meta_desc_len: 'Description : {n} caractères',
	tool_meta_desc_len_warn: 'Description : {n} caractères — plus de 160, peut être tronquée.',
	tool_meta_output_label: 'Extrait de head généré',
	tool_meta_how_title: 'Comment ça marche',
	tool_meta_how_body:
		'Le générateur prend vos champs et construit les balises de head correspondantes. Les champs facultatifs vides sont ignorés, donc la sortie ne contient que ce que vous avez rempli. Chaque valeur est échappée en HTML : une esperluette devient &amp; et un signe inférieur devient &lt;, ce qui garde les balises valides dans votre page. Les indications de longueur vous préviennent quand le titre ou la description dépasse les limites courantes, sans couper votre texte.',
	tool_meta_rules_title: 'Règles utilisées par le générateur',
	tool_meta_rules_body: 'Ces règles suivent les recommandations de Google Search Central sur les meta tags, les title links et les URLs canoniques.',
	tool_meta_rules_item_1:
		'Le meta title et la description sont des suggestions, pas des directives : les moteurs peuvent les réécrire ou les tronquer, donc visez environ 60 caractères pour le titre et 155–160 pour la description.',
	tool_meta_rules_item_2:
		'Toutes les valeurs sont échappées en HTML : & < > " et \' deviennent des entités, donc les caractères de votre titre ou de votre description ne peuvent pas casser le balisage.',
	tool_meta_rules_item_3:
		'L’URL canonique doit être l’URL absolue complète avec protocole. Une URL relative ou sans protocole ne sert pas de cible canonique.',
	tool_meta_rules_item_4:
		'Le robots meta utilise les valeurs index/noindex et follow/nofollow. En l’absence de balise, les moteurs utilisent leur défaut, qui est d’indexer et de suivre.',
	tool_meta_rules_item_5:
		'Canonical et Open Graph peuvent coexister sur la même page : og:url doit correspondre à l’URL canonique pour que les partages sociaux pointent vers la même adresse.',
	tool_meta_example_title: 'Exemple',
	tool_meta_example:
		'L’exemple remplit le titre, la description, le canonical, les robots et trois champs Open Graph. L’extrait généré sort une balise <title>, la meta description, le lien canonique, le robots meta et les balises og: renseignées.',
	tool_meta_usecases_title: 'Bonnes utilisations',
	tool_meta_usecase_1:
		'Créer un nouveau gabarit de page : générez le bloc de head une fois, vérifiez les indications de longueur et collez-le dans le gabarit avant publication.',
	tool_meta_usecase_2:
		'Livrer un travail à un client : générez l’extrait de head exact avec canonical et OG, puis collez-le dans le CMS.',
	tool_meta_usecase_3:
		'Avant publication, générez les balises et comparez-les à un aperçu de résultat de recherche pour que le titre et la description correspondent à la page visible.',
	tool_meta_faq_q1: 'Que signifient les valeurs du robots meta ?',
	tool_meta_faq_a1:
		'index autorise les moteurs à inclure la page dans les résultats, tandis que noindex l’en exclut. follow autorise le suivi des liens de la page et nofollow l’interdit. Sans balise, le défaut est index, follow.',
	tool_meta_faq_q2: 'Les caractères spéciaux de mes valeurs sont-ils échappés ?',
	tool_meta_faq_a2:
		'Oui. Le générateur échappe & < > " et \', donc une esperluette devient &amp; et un signe inférieur devient &lt;. Vos balises restent valides même si la valeur contient des caractères proches du balisage.',
	tool_meta_faq_q3: 'Canonical et Open Graph peuvent-ils coexister ?',
	tool_meta_faq_a3:
		'Oui, ils couvrent des systèmes différents. Le lien canonique indique aux moteurs l’URL préférée, tandis que les balises og: décrivent la page pour le partage social. Gardez og:url alignée sur l’URL canonique.',
	tool_meta_faq_q4: 'Quelle longueur pour le titre et la description ?',
	tool_meta_faq_a4:
		'Environ 60 caractères pour le titre et 155–160 pour la description sont des limites courantes. Ce sont des suggestions : les moteurs peuvent réécrire ou tronquer des valeurs plus longues.',
	tool_meta_faq_q5: 'Que deviennent les champs vides ?',
	tool_meta_faq_a5:
		'Les champs facultatifs vides sont ignorés, donc l’extrait généré ne contient que les balises des champs que vous avez remplis.',
	tool_meta_faq_q6: 'Mes données sont-elles envoyées quelque part ?',
	tool_meta_faq_a6: 'Non. Le générateur fonctionne entièrement dans votre navigateur et rien n’est envoyé.',
	tool_meta_references: 'Google Search Central — Meta tags que Google comprend ; Contrôlez vos title links ; URLs canoniques.',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — Meta tags que Google comprend',
	tool_meta_ref_searchcentral_title_label: 'Search Central — Contrôlez vos title links',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — URLs canoniques',
};

export default fr;
