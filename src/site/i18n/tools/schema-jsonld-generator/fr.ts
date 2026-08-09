/**
 * i18n tool shard (schema-jsonld-generator / fr).
 * French locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_schema_home_title: 'Générateur JSON-LD',
	tool_schema_home_desc:
		'Aidez Google à comprendre votre page et décrochez des résultats plus riches et plus cliquables avec le JSON-LD Schema.org, généré dans votre navigateur.',
	tool_schema_title: 'Générateur JSON-LD — créez des données structurées pour FAQ, article et fil d’Ariane',
	tool_schema_description:
		'Les données structurées aident Google à comprendre le contenu de votre page et peuvent vous offrir des résultats plus riches et plus cliquables. Générez du JSON-LD dans votre navigateur. Étapes : choisissez un type (FAQ, article, fil d’Ariane, organisation), remplissez les champs obligatoires, puis copiez un balisage Schema.org valide avec une balise script prête à coller. La page distingue champs obligatoires et facultatifs et valide le JSON avant de copier. Rien n’est envoyé. Exemple : une FAQ de deux questions produit un mainEntity avec deux nœuds Question.',
	tool_schema_generate: 'Générer',
	tool_schema_sample: 'Exemple',
	tool_schema_clear: 'Effacer',
	tool_schema_copy: 'Copier',
	tool_schema_copied: 'Copié',
	tool_schema_download: 'Télécharger',
	tool_schema_type_label: 'Type de schéma',
	tool_schema_required: 'Obligatoire',
	tool_schema_optional: 'Facultatif',
	tool_schema_fields_label: 'Champs',
	tool_schema_output_label: 'Sortie JSON-LD',
	tool_schema_wrap_script: 'Envelopper dans <script type="application/ld+json">',
	tool_schema_missing_required: 'Champ obligatoire manquant : {field}',
	tool_schema_err_no_fields: 'Remplissez d’abord les champs obligatoires.',
	tool_schema_breadcrumb_min: 'Le fil d’Ariane nécessite au moins deux niveaux.',
	tool_schema_type_faq: 'FAQ',
	tool_schema_type_article: 'Article',
	tool_schema_type_breadcrumb: 'Fil d’Ariane',
	tool_schema_type_organization: 'Organisation',
	tool_schema_faq_question: 'Question {n}',
	tool_schema_faq_answer: 'Réponse {n}',
	tool_schema_faq_add: 'Ajouter une question',
	tool_schema_faq_remove: 'Retirer',
	tool_schema_article_headline: 'Titre',
	tool_schema_article_description: 'Description',
	tool_schema_article_author: 'Nom de l’auteur',
	tool_schema_article_date_published: 'Date de publication (AAAA-MM-JJ)',
	tool_schema_article_date_modified: 'Date de modification (AAAA-MM-JJ)',
	tool_schema_article_image: 'URL de l’image (facultatif)',
	tool_schema_article_url: 'URL de la page',
	tool_schema_breadcrumb_name: 'Nom {n}',
	tool_schema_breadcrumb_url: 'URL {n}',
	tool_schema_breadcrumb_add: 'Ajouter un niveau',
	tool_schema_org_name: 'Nom de l’organisation',
	tool_schema_org_url: 'URL du site',
	tool_schema_org_logo: 'URL du logo (facultatif)',
	tool_schema_org_description: 'Description courte (facultatif)',
	tool_schema_how_title: 'Comment ça marche',
	tool_schema_how_body:
		'Choisissez un type de schéma, remplissez le formulaire et cliquez sur Générer. La page construit un objet JSON-LD Schema.org, vérifie la présence des champs obligatoires, puis affiche le résultat mis en forme dans une balise script pour le coller dans le <head> de votre page. Une vérification de syntaxe s’exécute avant le rendu ; les champs obligatoires manquants sont listés au lieu de produire un balisage cassé en silence.',
	tool_schema_rules_title: 'Ce que vérifie le générateur',
	tool_schema_rules_body:
		'Chaque type a une forme minimale valide. Le générateur valide que le JSON est bien formé et signale les champs obligatoires vides, mais il ne peut pas savoir si le balisage correspond au contenu visible de votre page.',
	tool_schema_rules_item_1:
		'FAQ : mainEntity contient un tableau de nœuds Question ; chaque élément nécessite name et acceptedAnswer.text.',
	tool_schema_rules_item_2:
		'Article : headline et author sont obligatoires ; datePublished, dateModified, image et description sont facultatifs mais recommandés.',
	tool_schema_rules_item_3:
		'Fil d’Ariane : itemListElement est une liste ordonnée dont chaque position doit être séquentielle (1, 2, 3…).',
	tool_schema_rules_item_4:
		'Cohérence : Google compare les données structurées à la page visible. Baliser du contenu absent de la page enfreint les politiques de spam.',
	tool_schema_example_title: 'Exemple',
	tool_schema_example:
		'Exemple de FAQ avec deux questions : « Comment installer le SDK ? » et « Les données sont-elles traitées localement ? » → la sortie contient un tableau mainEntity avec deux objets Question, chacun avec acceptedAnswer.text, prêt à coller dans le head de votre page.',
	tool_schema_usecases_title: 'Quand l’utiliser',
	tool_schema_usecase_1:
		'Pages FAQ : ajoutez une liste de questions en données structurées pour que les moteurs comprennent mieux les questions et réponses.',
	tool_schema_usecase_2:
		'Articles et documentation : attachez le balisage Article avec auteur et dates pour les sites de contenu et bases de connaissances.',
	tool_schema_usecase_3:
		'Produit et structure du site : utilisez Breadcrumb pour décrire les parcours de navigation et Organization pour le nom et le logo de la marque.',
	tool_schema_faq_q1: 'À qui s’adressent les données structurées JSON-LD ?',
	tool_schema_faq_a1:
		'Aux moteurs de recherche et autres lecteurs du balisage Schema.org. C’est embarqué dans votre HTML pour que les machines comprennent entités, relations et faits — ce n’est pas un contenu visible par l’utilisateur.',
	tool_schema_faq_q2: 'Ajouter le schéma FAQ garantit-il un résultat enrichi ?',
	tool_schema_faq_a2:
		'Non. Les résultats enrichis FAQ ne s’affichent plus sur tout le site depuis mai 2026, et HowTo plus tôt. Google peut continuer à analyser le balisage pour comprendre la page, mais aucune garantie de résultat enrichi : considérez le schéma comme de la clarté pour la compréhension, pas comme un KPI de classement ou de rich result.',
	tool_schema_faq_q3: 'Quels champs sont obligatoires dans le balisage généré ?',
	tool_schema_faq_a3:
		'FAQ nécessite question + réponse par élément ; Article nécessite titre et auteur ; Fil d’Ariane nécessite au moins deux niveaux avec nom et URL ; Organisation nécessite nom et URL. La page marque les obligatoires et liste ce qui manque.',
	tool_schema_faq_q4: 'Pourquoi le balisage doit-il correspondre au contenu visible ?',
	tool_schema_faq_a4:
		'Google traite comme trompeuses les données structurées qui ne reflètent pas la page visible. Par exemple, une question FAQ que la page ne traite pas réellement peut être considérée comme un abus de balisage même si le JSON est valide.',
	tool_schema_references: 'Schema.org ; Google Search Central — Notions de base des données structurées.',
	tool_schema_ref_schema_label: 'Schema.org',
	tool_schema_ref_google_label: 'Search Central — Données structurées',
};

export default fr;
