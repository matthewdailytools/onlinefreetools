/**
 * i18n tool shard (on-page-seo-checker / fr).
 * Français — réécriture indépendante orientée recherche locale.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_onpage_home_title: 'Audit SEO On-Page',
	tool_onpage_home_desc:
		'Repérez les balises qui freinent votre page dans Google : vérifiez title, H1, meta description, canonical, Open Graph et JSON-LD depuis votre navigateur.',
	tool_onpage_title: 'Audit SEO On-Page — détectez et corrigez les balises de la page',
	tool_onpage_description:
		'Auditez title, meta description, H1, canonical, robots, Open Graph et JSON-LD. Collez le HTML : il reste sur votre appareil. Exemple : deux H1 détectés.',
	tool_onpage_url_tab: 'Récupérer l’URL',
	tool_onpage_html_tab: 'Coller le HTML',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'Vérifier l’URL',
	tool_onpage_html_ph: 'Collez ici le HTML du <head> (et un extrait du body)…',
	tool_onpage_check: 'Vérifier la page',
	tool_onpage_sample: 'Exemple',
	tool_onpage_clear: 'Effacer',
	tool_onpage_copy: 'Copier',
	tool_onpage_copied: 'Copié',
	tool_onpage_running: 'Vérification…',
	tool_onpage_error_prefix: 'Erreur : ',
	tool_onpage_url_error: 'Saisissez une URL http(s) valide.',
	tool_onpage_fetch_failed: 'Impossible de récupérer l’URL. La page peut être hors ligne, bloquer les bots ou ne pas renvoyer de HTML.',
	tool_onpage_no_html: 'Collez d’abord du HTML ou récupérez une URL.',
	tool_onpage_no_results: 'Aucune vérification à afficher pour l’instant.',
	tool_onpage_summary_title: 'Résumé de la vérification',
	tool_onpage_summary_n_ok: '{n} OK',
	tool_onpage_summary_n_warn: '{n} avertissements',
	tool_onpage_summary_n_err: '{n} problèmes',
	tool_onpage_status_ok: 'OK',
	tool_onpage_status_warn: 'Avertissement',
	tool_onpage_status_err: 'Problème',
	tool_onpage_title_check: 'Title',
	tool_onpage_title_missing: 'Aucune balise <title>. Ajoutez-en une dans <head>.',
	tool_onpage_title_ok: 'Title de {n} caractères. Proche de 50–60 caractères, il s’affiche bien dans les résultats.',
	tool_onpage_title_long: 'Le title fait {n} caractères et sera probablement tronqué dans les résultats. Visez environ 50–60 caractères.',
	tool_onpage_title_short: 'Le title ne fait que {n} caractères. Ajoutez le focus précis de la page pour le rendre plus utile.',
	tool_onpage_desc_check: 'Meta description',
	tool_onpage_desc_missing: 'Aucune meta description. Google composera alors l’extrait à partir du texte de la page. Rédigez la vôtre si vous voulez maîtriser cette formulation.',
	tool_onpage_desc_ok: 'Description de {n} caractères. La plage 140–160 caractères s’affiche bien dans la plupart des extraits.',
	tool_onpage_desc_long: 'La description fait {n} caractères ; les extraits coupent souvent autour de 160.',
	tool_onpage_desc_short: 'La description ne fait que {n} caractères. Utilisez l’espace pour résumer ce que propose la page.',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'Aucun H1 trouvé. Ajoutez un titre de premier niveau qui énonce le sujet de la page : les lecteurs d’écran comme le titre de l’extrait s’appuient dessus.',
	tool_onpage_h1_multiple: '{n} balises H1 trouvées. Google positionne les pages quel que soit le nombre de H1 : ce n’est donc pas une pénalité. Un seul H1 avec des sections H2–H6 reste plus lisible pour les lecteurs d’écran.',
	tool_onpage_h1_ok: 'Un H1 trouvé, situé dans <body>.',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'Aucune URL canonique définie. Ajoutez <link rel="canonical"> lorsque le même contenu est accessible via plusieurs URL.',
	tool_onpage_canonical_ok: 'Canonical auto-référent trouvé.',
	tool_onpage_canonical_other: 'Le canonical pointe vers une autre URL : vous déclarez ainsi que cette page en est un doublon. Ne le gardez que si c’est le cas ; le canonical reste une indication, et Google peut retenir une autre URL.',
	tool_onpage_robots_check: 'Balise robots',
	tool_onpage_robots_missing: 'Pas de balise robots. La valeur par défaut index,follow convient à la plupart des pages publiques.',
	tool_onpage_robots_noindex: 'La page définit noindex et n’apparaîtra pas dans Google. Retirez-le si la page doit être indexée.',
	tool_onpage_robots_ok: 'La balise robots autorise l’indexation et le suivi des liens.',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'Aucune balise og: trouvée. Ajoutez og:title, og:description et og:image pour les aperçus de partage.',
	tool_onpage_og_partial: 'Il manque {n} champ(s) og: obligatoire(s). Assurez-vous que og:title, og:description et og:image sont présents.',
	tool_onpage_og_ok: 'og:title, og:description et og:image sont présents.',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'Aucune donnée structurée JSON-LD trouvée. Envisagez d’ajouter un balisage schema.org lorsqu’il décrit du contenu visible.',
	tool_onpage_jsonld_invalid: 'Un bloc JSON-LD n’a pas pu être analysé comme JSON. Vérifiez les erreurs de syntaxe.',
	tool_onpage_jsonld_ok: '{n} bloc(s) JSON-LD trouvé(s). Gardez les données structurées cohérentes avec ce que voient les visiteurs.',
	tool_onpage_mixed_check: 'Contenu mixte',
	tool_onpage_mixed_none: 'Aucune référence http:// dans un contexte https.',
	tool_onpage_mixed_found: '{n} référence(s) http:// trouvée(s). Les navigateurs bloquent le contenu mixte ; servez ces ressources en https.',
	tool_onpage_render_check: 'Blocage du rendu',
	tool_onpage_render_none: 'Aucune feuille de style ou script bloquant visiblement le rendu.',
	tool_onpage_render_found: '{n} <link rel="stylesheet"> sans media dans <head>. Intégrez le CSS critique ou differez le chargement pour améliorer le LCP.',
	tool_onpage_unknown: 'Impossible de déterminer : {label}',
	tool_onpage_how_title: 'Comment ça marche',
	tool_onpage_how_body:
		'Le vérificateur analyse le balisage que vous collez (ou le HTML récupéré d’une URL) et évalue une liste fixe de vérifications SEO on-page. Chaque vérification lit un type de balise : title, meta description, H1, canonical, balise robots, champs Open Graph, blocs JSON-LD, contenu mixte et ressources bloquant le rendu. Le mode coller s’exécute entièrement dans votre navigateur ; le mode URL récupère la page une fois via notre worker et ne la stocke pas.',
	tool_onpage_how_item_1: 'Restez sur Coller le HTML ou passez à Récupérer l’URL pour une page en ligne.',
	tool_onpage_how_item_2: 'Collez le markup ou saisissez une URL https.',
	tool_onpage_how_item_3: 'Cliquez sur Vérifier la page (ou Exemple pour une démo).',
	tool_onpage_how_item_4: 'Passez en revue chaque statut et corrigez les balises signalées.',
	tool_onpage_rules_title: 'Règles suivies par les vérifications',
	tool_onpage_rules_body:
		'Voici à quoi chaque vérification se compare, et avec quel degré de certitude. Le comportement des balises (robots, canonical, contenu mixte) suit Google Search Central et la spécification HTML. Les conseils sur la longueur et les titres sont des repères d’affichage ou de lisibilité, pas des règles de classement.',
	tool_onpage_rules_item_1:
		'Title : une page doit avoir un <title> descriptif. Google peut le réécrire, mais un titre concis proche de 50–60 caractères s’affiche généralement bien.',
	tool_onpage_rules_item_2:
		'H1 : la page a besoin d’un titre qui énonce son sujet. Google n’impose aucun nombre idéal de titres et ne pénalise pas les H1 supplémentaires ; les H1 multiples ne sont donc signalés que pour la clarté du plan et l’accessibilité.',
	tool_onpage_rules_item_3:
		'Canonical : <link rel="canonical"> dans <head> est une indication sur l’URL préférée parmi des doublons, pas une directive. Google la pèse avec les redirections, les sitemaps et les liens internes avant de trancher.',
	tool_onpage_rules_item_4:
		'Contenu mixte : une page https qui référence des ressources http:// est bloquée par les navigateurs. Cette vérification les liste comme avertissements.',
	tool_onpage_rules_item_5:
		'Blocage du rendu : une feuille de style dans <head> sans attribut media bloque le rendu. Cette vérification est heuristique et ne mesure pas le temps réel.',
	tool_onpage_example_title: 'Exemple',
	tool_onpage_example:
		'L’entrée d’exemple est une page avec un title de 71 caractères, sans meta description, deux H1, un canonical vers une autre URL, un og:image, un bloc JSON-LD valide et une image http://. Le vérificateur signale le title comme probablement tronqué, le H1 en avertissement, le canonical comme non auto-référent et le contenu mixte en avertissement, comme l’outil le montre au chargement de l’exemple.',
	tool_onpage_usecases_title: 'Bonnes utilisations',
	tool_onpage_usecase_1:
		'Avant une refonte ou un relancement : passez la même page au vérificateur et corrigez les problèmes signalés en une passe.',
	tool_onpage_usecase_2:
		'Livraison de template : à la réception de HTML d’une agence ou d’un constructeur de pages, vérifiez les balises head plutôt que de faire confiance à l’export.',
	tool_onpage_usecase_3:
		'Mises à jour de contenu : après une édition CMS, confirmez que title, description et canonical correspondent toujours à la nouvelle page.',
	tool_onpage_faq_q1: 'Que vérifie un audit SEO on-page ?',
	tool_onpage_faq_a1:
		'Il vérifie les balises que la page contrôle : title, meta description, H1, canonical, balise robots, champs Open Graph, données structurées JSON-LD, contenu mixte et ressources bloquant le rendu. Il ne mesure ni le classement ni les backlinks.',
	tool_onpage_faq_q2: 'Plusieurs balises H1 nuisent-elles au SEO ?',
	tool_onpage_faq_a2:
		'Non. Google indique qu’il n’existe pas de nombre idéal de titres et positionne des pages qui en ont zéro, un ou plusieurs. Garder un seul H1 sert l’accessibilité et la clarté du plan, et augmente les chances que Google reprenne votre titre comme titre de l’extrait.',
	tool_onpage_faq_q3: 'Le canonical doit-il pointer vers lui-même ?',
	tool_onpage_faq_a3:
		'Pas forcément, mais un canonical auto-référent est le signal le plus clair pour une page qui doit se positionner par elle-même. Le pointer ailleurs revient à déclarer cette page comme un doublon. Dans les deux cas, Google traite le canonical comme une indication et peut retenir une autre URL.',
	tool_onpage_faq_q4: 'Pourquoi le vérificateur signale les ressources http:// comme contenu mixte ?',
	tool_onpage_faq_a4:
		'Lorsqu’une page est servie en https et référence des images, scripts ou styles http://, le navigateur bloque la requête par défaut. Cette vérification les liste en avertissements pour que vous passiez en https.',
	tool_onpage_faq_q5: 'La vérification JSON-LD teste-t-elle la validation ?',
	tool_onpage_faq_a5:
		'Elle vérifie que les blocs se parsent comme du JSON valide et rappelle de garder les données structurées cohérentes avec le contenu visible. Elle n’exécute pas un validateur schema.org complet.',
	tool_onpage_faq_q6: 'Mon HTML est-il envoyé quelque part ?',
	tool_onpage_faq_a6:
		'Non. En collant du HTML, l’analyse se fait sur votre appareil et rien n’est envoyé à un serveur. Le mode URL récupère la page une fois via notre worker et ne la stocke pas.',
	tool_onpage_references: 'Google Search Central — balises meta ; Google Search Central — canonical ; MDN — élément <meta>.',
	tool_onpage_ref_tags_label: 'Search Central — Balises meta que Google comprend',
	tool_onpage_ref_canonical_label: 'Search Central — URL canoniques',
	tool_onpage_ref_mdn_label: 'MDN — <meta> : l’élément de métadonnées',
};

export default fr;
