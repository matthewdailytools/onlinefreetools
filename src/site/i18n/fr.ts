import type { SiteLangDict } from './types';
const fr: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Accueil',
  nav_devlogs: 'Journaux de développement',
  nav_tools: 'Outils',
  footer_text: 'Online Free Tools · Projet d\'apprentissage · En cours d\'itération',
  tool_headers_title: 'Vérifier les en-têtes HTTP d\'un site — Inspecter les response headers',
  tool_headers_description:
    'Inspectez en ligne les en-têtes HTTP de réponse d\'une URL depuis notre edge. Déroulé : saisir https, envoyer HEAD (GET si besoin), suivre les redirections, afficher statut et carte d\'en-têtes ; bloquer les hôtes privés. Exemple : lire Cache-Control, CORS et HSTS lors d\'un debug CDN ou redirection.',
  tool_headers_article:
    'Consultez les en-têtes que l\'edge reçoit pour une URL publique — cache, CORS, redirections et en-têtes de sécurité. Requête proxyée ; nous ne conservons pas le corps de page.',
  url_label: 'URL',
  url_placeholder: 'par exemple https://exemple.com',
  fetch_button: 'Vérifier les en-têtes',
  result_title: 'Résultat',
  status_label: 'Statut',
  final_url_label: 'URL finale',
  headers_label: 'En-têtes',
  error_prefix: 'Erreur : ',
  note_title: 'Notes',
  note_1: 'Si HEAD est refusé, nous passons en GET. L\'objectif est les en-têtes, pas le téléchargement du HTML.',
  note_2: 'localhost et réseaux privés sont bloqués pour empêcher le worker de sonder des hôtes internes.',
  tool_headers_how_title: 'Fonctionnement',
  tool_headers_how_body:
    'Collez une URL http(s) publique puis lancez la vérification. Le worker edge envoie HEAD (GET au besoin), suit les redirections et renvoie statut, URL finale et en-têtes observés. Les cibles privées sont rejetées. Vue edge — peut différer de votre navigateur si le CDN route par région.',
  tool_headers_rules_title: 'Règles du vérificateur',
  tool_headers_rules_body:
    'Proxy éphémère dédié à l\'inspection d\'en-têtes ; aucun stockage du contenu page. Les noms respectent la sémantique HTTP (voir Références).',
  tool_headers_rules_item_1: 'HEAD en priorité ; GET si l\'origine ne supporte pas HEAD.',
  tool_headers_rules_item_2: 'Suit les redirections et indique l\'URL finale.',
  tool_headers_rules_item_3: 'Bloque localhost et IP de réseau privé.',
  tool_headers_rules_item_4: 'Met en évidence Cache-Control, CORS, CSP et en-têtes courants.',
  tool_headers_example_title: 'Exemple',
  tool_headers_example:
    'exemple.com → statut 200, URL finale inchangée ; en-têtes avec content-type: text/html et, selon l\'origine, cache-control ou en-têtes de sécurité.',
  tool_headers_usecases_title: 'Situations utiles',
  tool_headers_usecase_1: 'Avant une mise en prod, valider Cache-Control ou le cache CDN.',
  tool_headers_usecase_2: 'Diagnostiquer un preflight CORS via Access-Control-*.',
  tool_headers_usecase_3: 'Vérifier que CSP, HSTS ou d\'autres en-têtes de sécurité sont bien servis.',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Sémantique HTTP',
  tool_headers_ref_mdn_label: 'MDN — En-têtes HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Mise en cache HTTP',
  tool_markdown_title: 'Markdown vers HTML assaini — et retour Markdown',
  tool_markdown_description:
    'Publier du Markdown en HTML propre, ou récupérer du Markdown depuis un HTML collé : choisissez le sens. marked / Turndown et DOMPurify restent dans le navigateur. Exemple : README → page .html, ou HTML de CMS → fichier pour Git.',
  tool_markdown_article:
    'Deux sens, une URL, avec ce que l’assainissement retire et ce que Turndown ne garde pas. Collage local ; CDN = bibliothèques seulement.',
  tool_markdown_dir_label: 'Sens de conversion',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'Copier HTML',
  tool_markdown_copy_md: 'Copier Markdown',
  tool_markdown_copy_done: 'Copié',
  tool_markdown_download: 'Télécharger HTML',
  tool_markdown_download_md: 'Télécharger Markdown',
  tool_markdown_clear: 'Effacer',
  tool_markdown_full_doc: 'Générer un document HTML complet',
  tool_markdown_input_label: 'Entrée Markdown',
  tool_markdown_preview_label: 'Aperçu HTML',
  tool_markdown_html_input_label: 'Entrée HTML',
  tool_markdown_md_output_label: 'Sortie Markdown',
  tool_markdown_placeholder:
    "# Titre\n\nMarkdown de base : **gras**, listes et blocs de code.\n\n- Élément 1\n- Élément 2\n\n```js\nconsole.log('Bonjour Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>Titre</h1>\n<p>Bonjour <strong>le monde</strong></p>',
  tool_markdown_sample_md:
    "# Titre\n\nMarkdown de base : **gras**, listes et blocs de code.\n\n- Élément 1\n- Élément 2\n\n```js\nconsole.log('Bonjour Markdown');\n```",
  tool_markdown_sample_html: '<h1>Titre</h1>\n<p>Bonjour <strong>le monde</strong></p>',
  tool_markdown_export_title: 'Export Markdown vers HTML',
  tool_markdown_export_description:
    'Générer un document HTML complet depuis Markdown avec modèle et métadonnées. Étapes : rendre, injecter dans le modèle, ajouter meta, télécharger. Exemple : exporter un article en .html autonome.',
  tool_markdown_large_warn:
    'Collage très volumineux (>200k caractères). La conversion peut être lente — essayez un extrait plus court.',
  tool_markdown_need_lib: 'Impossible de charger une bibliothèque de conversion. Vérifiez la connexion et rechargez.',
  tool_markdown_loss_hint:
    'Peu ou pas de Markdown — scripts, balises vides ou balisage non pris en charge ont pu être retirés. Voir Règles et FAQ.',
  tool_markdown_how_title: 'En pratique',
  tool_markdown_how_body:
    'Onglets = sens. Saisie à gauche, rendu local à droite. Côté HTML : fragment ou coquille minimale ; côté Markdown : texte pour dépôt ou LLM.',
  tool_markdown_rules_title: 'Règles selon le sens',
  tool_markdown_rules_intro:
    'Pas de seconde page mince juste pour “html en markdown”.',
  tool_markdown_rules_item_md_html:
    'Vers HTML : parse CommonMark puis DOMPurify avant affichage/export.',
  tool_markdown_rules_item_html_md:
    'Vers Markdown : nettoyage puis Turndown (titres ATX, blocs clôturés).',
  tool_markdown_rules_item_loss:
    'Styles, scripts, tableaux complexes : souvent aplatis. Aller-retour non identique.',
  tool_markdown_rules_privacy:
    'Le texte collé reste ici. Charger une lib via CDN n’envoie pas votre article.',
  tool_markdown_example_title: 'Exemple',
  tool_markdown_example:
    '`# Titre` et `Bonjour **monde**` donnent un HTML assaini ; le HTML fort revient en `**gras**`.',
  tool_markdown_usecases_title: 'Usages typiques',
  tool_markdown_usecase_1:
    'Livrer un HTML sûr au CMS.',
  tool_markdown_usecase_2:
    'Repasser un export HTML en Markdown éditable.',
  tool_markdown_usecase_3:
    'Nettoyer un collage riche avant un prompt.',
  tool_markdown_faq_q1: 'Le HTML est-il filtré ?',
  tool_markdown_faq_a1:
    'Oui en Markdown → HTML : DOMPurify avant aperçu et téléchargement.',
  tool_markdown_faq_q2: 'Le rendu CSS survit-il en Markdown ?',
  tool_markdown_faq_a2:
    'Rarement. Objectif : brouillon lisible, pas maquette.',
  tool_markdown_faq_q3: 'Le collage part-il sur un serveur ?',
  tool_markdown_faq_a3:
    'Conversion locale. Le CDN ne fait qu’apporter le code des libs.',
  tool_markdown_faq_q4: 'Aller-retour sans perte ?',
  tool_markdown_faq_a4:
    'Non garanti — passez par un diff si besoin.',
  tool_markdown_faq_q5: 'Couverture CommonMark et exports ?',
  tool_markdown_faq_a5:
    'Titres, listes, liens, emphase, code fence ; option document HTML complet hors-ligne.',
  tool_yaml_json_title: 'YAML vers JSON — et retour YAML (types, multi-doc)',
  tool_yaml_json_description:
    'Convertissez YAML en JSON ou JSON en YAML dans le navigateur. Étapes : choisissez le sens, collez la config, activez au besoin les types JSON sûrs, puis copiez ou téléchargez. Les multi-docs séparés par --- deviennent un tableau JSON. Exemple : transformer une petite carte de service en JSON indenté pour un client API — le collage reste local.',
  tool_yaml_json_article:
    'Conversion YAML ↔ JSON bidirectionnelle : règles de typage explicites, politique multi-document, et notes honnêtes sur le traitement local. Pensé pour l’échange de configs, pas pour une seconde URL creuse.',
  tool_yaml_json_dir_label: 'Sens de conversion',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_convert: 'Convertir',
  tool_yaml_json_copy_json: 'Copier JSON',
  tool_yaml_json_copy_yaml: 'Copier YAML',
  tool_yaml_json_copy_done: 'Copié',
  tool_yaml_json_download_json: 'Télécharger JSON',
  tool_yaml_json_download_yaml: 'Télécharger YAML',
  tool_yaml_json_sample: 'Charger un exemple',
  tool_yaml_json_clear: 'Effacer',
  tool_yaml_json_json_safe: 'Types JSON sûrs (garder yes/no nus en chaînes)',
  tool_yaml_json_indent_label: 'Indentation',
  tool_yaml_json_indent_2: '2 espaces',
  tool_yaml_json_indent_4: '4 espaces',
  tool_yaml_json_indent_minify: 'Minifier le JSON',
  tool_yaml_json_yaml_input_label: 'Entrée YAML',
  tool_yaml_json_json_output_label: 'Sortie JSON',
  tool_yaml_json_json_input_label: 'Entrée JSON',
  tool_yaml_json_yaml_output_label: 'Sortie YAML',
  tool_yaml_json_yaml_placeholder: 'nom: demo\nactif: true\néléments:\n  - a\n  - b',
  tool_yaml_json_json_placeholder: '{\n  "titre": "Bonjour",\n  "compte": 2\n}',
  tool_yaml_json_sample_yaml: 'nom: demo\nactif: true\néléments:\n  - a\n  - b',
  tool_yaml_json_sample_json: '{\n  "titre": "Bonjour",\n  "compte": 2\n}',
  tool_yaml_json_large_warn:
    'Collage très volumineux (>200k caractères). La conversion peut ralentir — essayez un extrait plus court.',
  tool_yaml_json_need_lib: 'Impossible de charger js-yaml. Vérifiez la connexion et rechargez.',
  tool_yaml_json_empty: 'Collez d’abord du contenu.',
  tool_yaml_json_how_title: 'En pratique',
  tool_yaml_json_how_body:
    'js-yaml tourne dans cet onglet : basculez YAML → JSON ou l’inverse, collez, convertissez. Un flux multi-document découpé par --- devient un tableau JSON dès qu’il y a au moins deux documents ; un seul document reste une valeur JSON unique. Les erreurs YAML affichent ligne et colonne lorsque le parseur fournit un mark.',
  tool_yaml_json_rules_title: 'Règles à anticiper',
  tool_yaml_json_rules_body:
    'Les deux directions vivent sur la même page pour éviter un slug porte d’entrée « json en yaml ». Sans case Types JSON sûrs, le typage suit le schéma DEFAULT classique de js-yaml.',
  tool_yaml_json_rules_item_1:
    'Typage : avec le schéma DEFAULT, yes/no/on/off nus et certains scalaires date-like peuvent devenir booléens ou d’autres types. Le schéma JSON sûr garde les scalaires non cités en chaînes sauf typage explicite.',
  tool_yaml_json_rules_item_2:
    'Multi-doc : loadAll — un document → cette valeur JSON ; deux ou plus → un tableau JSON. On ne jette pas silencieusement tout ce qui suit le premier.',
  tool_yaml_json_rules_item_3:
    'Pertes en aller-retour : les commentaires disparaissent (JSON n’en a pas) ; ancres/alias s’étendent en valeurs dupliquées ; l’ordre des clés et le style peuvent changer après dump.',
  tool_yaml_json_rules_item_4:
    'Confidentialité : votre collage n’est pas envoyé. Charger js-yaml via un CDN ne télécharge que le code de la bibliothèque, pas le texte de config.',
  tool_yaml_json_example_title: 'Exemple',
  tool_yaml_json_example:
    'YAML `nom: demo` + liste `éléments: [a, b]` → JSON `{"nom":"demo","éléments":["a","b"]}`. JSON `{"titre":"Bonjour","compte":2}` se dump en YAML indenté. Frontière : `flag: yes` nu devient true sous DEFAULT ; activez Types JSON sûrs pour garder la chaîne "yes".',
  tool_yaml_json_usecases_title: 'Situations concrètes',
  tool_yaml_json_usecase_1:
    'DevOps : transformer un YAML Kubernetes multi-ressources (séparé par ---) en tableau JSON pour des scripts.',
  tool_yaml_json_usecase_2:
    'Développement : passer une réponse API JSON en YAML lisible avant d’éditer la config à la main.',
  tool_yaml_json_usecase_3:
    'Pipelines data / IA : relier des paramètres YAML édités à la main à des outils qui n’acceptent que du JSON.',
  tool_bmi_title: 'Calculateur d\'IMC — Comment calculer l\'indice de masse corporelle',
  tool_bmi_description:
    'Calculez l\'indice de masse corporelle (IMC) avec la formule de dépistage adulte. Étapes : choisissez métrique ou impérial, saisissez poids et taille, obtenez l\'IMC puis comparez aux catégories courantes. Exemple : 70 kg et 175 cm → IMC 22,9 (normal). Usage éducatif — pas un diagnostic.',
  tool_bmi_article:
    'Calculateur gratuit qui montre comment l\'IMC adulte se déduit du poids et de la taille : formules, seuils, limites (sportifs, enfants). Le calcul reste dans votre navigateur, sans envoi de données.',
  tool_bmi_weight_label: 'Poids (kg)',
  tool_bmi_weight_placeholder: 'Saisissez le poids en kilogrammes',
  tool_bmi_height_label: 'Taille (cm)',
  tool_bmi_height_placeholder: 'Saisissez la taille en centimètres',
  tool_bmi_calculate: 'Calculer l\'IMC',
  tool_bmi_how_title: 'Fonctionnement',
  tool_bmi_how_body:
    'Choisissez métrique ou impérial, entrez poids et taille, puis calculez. L\'outil applique la formule adulte standard, affiche un décimal et place le résultat dans les bandes de dépistage usuelles. Tout se fait localement ; vos mesures ne sont pas transmises.',
  tool_bmi_formula_title: 'Formule IMC et catégories adultes',
  tool_bmi_formula_body:
    'Métrique : IMC = poids (kg) ÷ taille (m)². Impérial : IMC = 703 × poids (lb) ÷ taille (in)². Les seuils adultes reprennent des bandes de dépistage largement publiées.',
  tool_bmi_formula_item_1: 'Insuffisance pondérale : IMC < 18,5',
  tool_bmi_formula_item_2: 'Normal : IMC 18,5–24,9',
  tool_bmi_formula_item_3: 'Surpoids : IMC 25–29,9',
  tool_bmi_formula_item_4: 'Obésité : IMC ≥ 30',
  tool_bmi_example_title: 'Exemple',
  tool_bmi_example:
    'Exemple (métrique) : poids 70 kg, taille 175 cm → taille = 1,75 m → IMC = 70 / (1,75²) ≈ 22,9 → bande normale de dépistage.',
  tool_bmi_usecases_title: 'Usages typiques',
  tool_bmi_usecase_1: 'Auto-contrôle avant une visite médicale de routine (dépistage uniquement).',
  tool_bmi_usecase_2: 'Noter un IMC de référence en début de programme sportif.',
  tool_bmi_usecase_3: 'Vérifier la même mesure en unités métriques et impériales.',
  tool_bmi_ref_who_label: 'OMS — Fiche d\'information sur l\'obésité et le surpoids',
  tool_bmi_ref_cdc_label: 'CDC — Catégories d\'IMC chez l\'adulte',
  bmi_chart_title: 'Catégories IMC adulte (dépistage)',
  bmi_underweight: 'Insuffisance pondérale',
  bmi_normal: 'Normal',
  bmi_overweight: 'Surpoids',
  bmi_obese: 'Obésité',
  bmi_metric_units: 'Métrique',
  bmi_imperial_units: 'Impérial',
  bmi_unit_group_label: 'Système d\'unités',
  bmi_result_label: 'Votre IMC',
  bmi_invalid_input: 'Saisissez un poids et une taille positifs pour calculer.',
  bmi_weight_lbs: 'Poids (lb)',
  bmi_weight_lbs_placeholder: 'Poids en livres',
  bmi_height_ft: 'Taille (ft)',
  bmi_height_ft_placeholder: 'Pieds',
  bmi_height_in: 'Taille (in)',
  bmi_height_in_placeholder: 'Pouces',
  bmi_interpretation_underweight:
    'Résultat de dépistage : bande d\'insuffisance pondérale. L\'IMC ne diagnostique pas — consultez un professionnel de santé si besoin.',
  bmi_interpretation_normal:
    'Résultat de dépistage : bande normale pour adultes. L\'IMC seul ne mesure ni masse grasse ni forme physique.',
  bmi_interpretation_overweight:
    'Résultat de dépistage : bande de surpoids. L\'IMC ne diagnostique pas — consultez un professionnel de santé si besoin.',
  bmi_interpretation_obese:
    'Résultat de dépistage : bande d\'obésité. L\'IMC ne diagnostique pas — consultez un professionnel de santé si besoin.',
  tool_text_diff_description:
    'Comparez deux textes en ligne et voyez ce qui a changé. Processus : collez l’original et la version modifiée, choisissez ligne, mot ou caractère, ignorez éventuellement les espaces ou unifiez les fins de ligne Windows (CRLF→LF), puis surlignez ajouts et suppressions dans le navigateur. Exemple : passez de « bonjour monde » à « bonjour ami » — le mode mot montre un seul remplacement.',
  tool_text_diff_article:
    'Outil gratuit pour comparer deux textes côte à côte. Mode ligne pour configs et code ; mode mot pour rédaction et prompts ; mode caractère pour les coquilles. Tout reste dans votre navigateur — rien n’est envoyé.',
  tool_text_diff_example:
    'Exemple (mode mot) : A = « Bonjour monde », B = « Bonjour ami » → un changement (monde → ami). Si seule la ligne du milieu change dans un bloc de trois, le mode ligne la marque.',
  tool_text_diff_sample_a: 'Bonjour monde\nligne deux\nligne trois',
  tool_text_diff_sample_b: 'Bonjour ami\nligne deux\nligne trois',
  tool_text_diff_label_a: 'Texte d’origine',
  tool_text_diff_label_b: 'Texte modifié',
  tool_text_diff_placeholder_a: 'Collez le texte d’origine…',
  tool_text_diff_placeholder_b: 'Collez le texte modifié…',
  tool_text_diff_mode_label: 'Comparer par',
  tool_text_diff_mode_lines: 'Ligne',
  tool_text_diff_mode_words: 'Mot',
  tool_text_diff_mode_chars: 'Caractère',
  tool_text_diff_ignore_ws: 'Ignorer les espaces',
  tool_text_diff_normalize_eol: 'Traiter CRLF et LF de la même façon',
  tool_text_diff_compare: 'Comparer',
  tool_text_diff_swap: 'Inverser les côtés',
  tool_text_diff_clear: 'Effacer',
  tool_text_diff_result_label: 'Différences',
  tool_text_diff_legend: 'Vert = ajouté · Rouge = supprimé',
  tool_text_diff_summary: '{added} ajoutés, {removed} supprimés',
  tool_text_diff_no_diff: 'Aucune différence — les deux textes sont identiques.',
  tool_text_diff_empty_hint: 'Collez du texte d’un côté ou des deux, puis comparez.',
  tool_text_diff_large_warn: 'Collage très long (>100k caractères). Ça peut ralentir — essayez un extrait plus court.',
  tool_text_diff_need_lib: 'Impossible de charger l’outil de comparaison. Vérifiez la connexion et rechargez.',
  tool_text_diff_how_title: 'Comment ça marche',
  tool_text_diff_how_body:
    'Collez deux versions, choisissez la finesse (ligne, mot ou caractère), puis regardez les ajouts en vert et les suppressions en rouge. Votre texte collé n’est ni envoyé ni stocké chez nous. La page peut charger la bibliothèque open-source jsdiff via un CDN pour comparer dans le navigateur.',
  tool_text_diff_rules_title: 'Comment les différences sont calculées',
  tool_text_diff_rules_body:
    'L’outil cherche une courte liste de modifications pour passer du texte A au texte B (diff classique / approche Myers via jsdiff). Mode ligne : configs et code. Mode mot : phrases et prompts. Mode caractère : petites coquilles, mais plus bruyant. Ignorer les espaces masque les seuls changements d’indentation. Traiter CRLF et LF pareil évite qu’une ligne entière rougisse pour un simple saut de ligne.',
  tool_text_diff_rules_intro:
    'L’outil cherche une courte liste de modifications pour passer du texte A au texte B (diff classique / approche Myers via jsdiff). Choisissez le mode selon la tâche :',
  tool_text_diff_rules_item_lines:
    'Ligne — idéal pour .env, YAML et code ; une ligne modifiée est surlignée en entier. Rapide à parcourir, mais un seul mot modifié rougit toute la ligne.',
  tool_text_diff_rules_item_words:
    'Mot — idéal pour phrases, e-mails et prompts ; surligne les mots. Plus clair en prose ; la ponctuation peut découper le résultat.',
  tool_text_diff_rules_item_chars:
    'Caractère — idéal pour les coquilles ; le plus précis, mais bruyant sur de longs changements.',
  tool_text_diff_rules_options:
    'Ignorer les espaces masque les seuls changements d’indentation. Traiter CRLF et LF pareil évite qu’une ligne entière rougisse pour un simple saut de ligne (Windows vs Unix).',
  tool_text_diff_example_title: 'Exemple',
  tool_text_diff_usecases_title: 'Cas concrets',
  tool_text_diff_usecase_1: 'Vérifier une config : comparez deux extraits .env ou YAML ligne par ligne.',
  tool_text_diff_usecase_2: 'Retoucher un prompt : mode mot pour voir les formulations ajoutées ou retirées.',
  tool_text_diff_usecase_3: 'Relire un texte ou une traduction : confirmez que seules les phrases voulues ont changé.',
  tool_text_diff_faq_q1: 'Comparer par ligne ou par mot ?',
  tool_text_diff_faq_a1: 'Ligne pour le code et les configs. Mot pour les phrases, e-mails et prompts : seuls les mots modifiés sont surlignés.',
  tool_text_diff_faq_q2: 'Mon texte est-il envoyé sur un serveur ?',
  tool_text_diff_faq_a2:
    'Votre texte collé n’est ni envoyé ni stocké chez nous — la comparaison se fait dans le navigateur. La page peut charger jsdiff (open source) via un CDN ; cela n’envoie pas votre texte à nos serveurs.',
  tool_text_diff_faq_q3: 'Pourquoi un simple saut de ligne met toute la ligne en rouge ?',
  tool_text_diff_faq_a3: 'Windows utilise souvent CRLF, macOS/Linux LF. Activez « Traiter CRLF et LF de la même façon » puis comparez.',
  tool_text_diff_faq_q4: 'Puis-je comparer des images ou des fichiers binaires ?',
  tool_text_diff_faq_a4: 'Non. Texte brut uniquement.',
  tool_headers_faq_q1: 'Que contiennent les en-têtes de réponse HTTP ?',
  tool_headers_faq_a1:
    'Des métadonnées serveur : type de contenu, cache, redirections et politiques HSTS, CSP ou CORS.',
  tool_headers_faq_q2: 'L\'outil télécharge-t-il le corps HTML complet ?',
  tool_headers_faq_a2:
    'HEAD d\'abord, GET si nécessaire. But : inspecter les en-têtes, pas scraper ni stocker le corps.',
  tool_headers_faq_q3: 'Pourquoi localhost et IP privées sont-ils interdits ?',
  tool_headers_faq_a3:
    'Les réseaux privés sont bloqués pour empêcher le worker de sonder des hôtes internes.',
  tool_headers_faq_q4: 'Est-ce identique aux DevTools du navigateur ?',
  tool_headers_faq_a4:
    'Pas toujours. Vous voyez la réponse depuis notre edge ; CDN, géo ou anti-bot peuvent différer de votre poste.',
  tool_headers_faq_q5: 'Conservez-vous l\'historique des URL vérifiées ?',
  tool_headers_faq_a5:
    'Requête edge éphémère, sans historique d\'URL. N\'insérez pas de secrets dans la query string.',
  tool_yaml_json_faq_q1: 'Mon collage quitte-t-il le navigateur ?',
  tool_yaml_json_faq_a1:
    'La conversion reste dans l’onglet. Un CDN peut servir js-yaml : cette requête ne télécharge que du code — ce n’est pas un envoi de votre texte YAML ou JSON.',
  tool_yaml_json_faq_q2: 'Que deviennent plusieurs documents séparés par --- ?',
  tool_yaml_json_faq_a2:
    'Ils sont lus avec loadAll. Un seul document → une valeur JSON ; deux ou plus → un tableau JSON. On ne conserve pas uniquement le premier.',
  tool_yaml_json_faq_q3: 'Un yes ou no nu devient-il un booléen ?',
  tool_yaml_json_faq_a3:
    'Souvent oui sous le schéma DEFAULT de js-yaml : yes/no/on/off non cités peuvent devenir booléens. Cochez « Types JSON sûrs » pour les garder en chaînes sauf typage explicite.',
  tool_yaml_json_faq_q4: 'Peut-on faire un aller-retour sans rien perdre ?',
  tool_yaml_json_faq_a4:
    'Non. Les commentaires ne survivent pas au JSON. Les ancres s’étendent en valeurs répétées. Repasser du JSON en YAML ne restaure ni commentaires ni noms d’ancres.',
  tool_yaml_json_faq_q5: 'D’où viennent les numéros de ligne d’erreur ?',
  tool_yaml_json_faq_a5:
    'Un YAML invalide lève un mark parseur avec ligne et colonne quand c’est disponible. Un JSON invalide est signalé par JSON.parse, sans mark style YAML.',

  tool_csv_json_title: 'Convertisseur CSV ↔ JSON — types, séparateur, local',
  tool_csv_json_description:
    'Convertissez CSV en JSON ou JSON en CSV dans votre navigateur. Étapes : choisissez le sens, collez ou importez, réglez le séparateur et l’en-tête, puis copiez ou téléchargez. Gère les champs entre guillemets avec virgules, points-virgules et tabulations ; de JSON vers CSV, les objets imbriqués sont aplatis en colonnes. Exemple : transformez une feuille produits (sku, titre, prix) en tableau JSON — les données restent locales.',
  tool_csv_json_article:
    'CSV ↔ JSON bidirectionnel avec des règles claires de types, séparateur et guillemets, et la façon dont le JSON imbriqué est aplati en colonnes. Pensé pour l’échange tableur ↔ API, pas pour une URL vide de plus.',
  tool_csv_json_dir_label: 'Sens de conversion',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_convert: 'Convertir',
  tool_csv_json_copy_json: 'Copier JSON',
  tool_csv_json_copy_csv: 'Copier CSV',
  tool_csv_json_copy_done: 'Copié',
  tool_csv_json_download_json: 'Télécharger JSON',
  tool_csv_json_download_csv: 'Télécharger CSV',
  tool_csv_json_sample: 'Charger un exemple',
  tool_csv_json_clear: 'Effacer',
  tool_csv_json_delimiter_label: 'Séparateur',
  tool_csv_json_delimiter_auto: 'Détection auto',
  tool_csv_json_delimiter_comma: 'Virgule ,',
  tool_csv_json_delimiter_semicolon: 'Point-virgule ;',
  tool_csv_json_delimiter_tab: 'Tabulation',
  tool_csv_json_header: 'Première ligne = en-têtes',
  tool_csv_json_typing: 'Inférer les types (nombres/booléens)',
  tool_csv_json_indent_label: 'Indentation',
  tool_csv_json_indent_2: '2 espaces',
  tool_csv_json_indent_4: '4 espaces',
  tool_csv_json_indent_minify: 'Minifier le JSON',
  tool_csv_json_csv_input_label: 'Entrée CSV',
  tool_csv_json_json_output_label: 'Sortie JSON',
  tool_csv_json_json_input_label: 'Entrée JSON',
  tool_csv_json_csv_output_label: 'Sortie CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_large_warn:
    'Entrée très volumineuse (plus de 2 millions de caractères). La conversion peut être lente ; essayez un fichier plus petit.',
  tool_csv_json_need_lib: 'Impossible de charger Papa Parse. Vérifiez votre connexion et rechargez.',
  tool_csv_json_empty: 'Collez d’abord du contenu.',
  tool_csv_json_how_title: 'Comment ça marche',
  tool_csv_json_how_body:
    'Choisissez CSV → JSON ou JSON → CSV ; l’analyse et la génération se font ici avec Papa Parse. En CSV, choisissez le séparateur (ou détection auto), si la première ligne est un en-tête et si les nombres/booléens sont inférés. En JSON, les objets imbriqués deviennent des colonnes en chemin pointé et les colonnes sont l’union de toutes les clés.',
  tool_csv_json_rules_title: 'Règles à prévoir',
  tool_csv_json_rules_body:
    'Par défaut, chaque cellule reste du texte pour préserver les identifiants. Les deux sens sont sur une page pour que « json en csv » ne soit pas une URL satellite.',
  tool_csv_json_rules_item_1:
    'Types : les cellules CSV sont du texte par défaut. Activez « Inférer les types » pour des nombres/booléens, mais 007 devient 7 et les longues suites de chiffres peuvent perdre en précision ; laissez désactivé pour SKU, codes postaux et téléphones.',
  tool_csv_json_rules_item_2:
    'Séparateurs : virgule, point-virgule (fréquent dans Excel européen) et tabulation (TSV) ; la détection auto devine d’après le texte. Les champs contenant le séparateur, des guillemets ou des sauts de ligne sont entourés de guillemets doubles selon la RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV : les objets sont aplatis en chemins pointés (dim.w, dim.h) ; les tableaux deviennent une chaîne JSON dans une cellule ; les colonnes sont l’union de toutes les clés, les valeurs manquantes restent vides.',
  tool_csv_json_rules_item_4:
    'Confidentialité : votre texte et vos fichiers ne sont pas envoyés. Charger Papa Parse depuis un CDN ne télécharge que le code de la bibliothèque, pas vos données.',
  tool_csv_json_example_title: 'Exemple',
  tool_csv_json_example:
    'Le CSV `sku,title,price` avec la ligne `A-001,"Chair, oak",129.9` devient JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (sans types, price reste du texte ; activez-les pour le nombre 129.9). Inversement : `[{"sku":"A-001","dim":{"w":40,"h":90}}]` génère l’en-tête `sku,dim.w,dim.h` avec la ligne `A-001,40,90`.',
  tool_csv_json_usecases_title: 'Bons cas',
  tool_csv_json_usecase_1:
    'E-commerce : transformez une feuille produits exportée (sku, titre, prix) en tableau JSON pour l’API d’une boutique ou d’une marketplace.',
  tool_csv_json_usecase_2:
    'Développeurs : reformatez une réponse JSON en CSV pour tableur, rapprochement ou livraison.',
  tool_csv_json_usecase_3:
    'Data/ops : passez un CSV de rapports ou d’événements (virgule, point-virgule ou TSV) en JSON pour un pipeline, virgules et sauts de ligne bien échappés.',
  tool_csv_json_faq_q1: 'Le point-virgule ou la tabulation sont-ils gérés, pas seulement la virgule ?',
  tool_csv_json_faq_a1:
    'Oui. Choisissez virgule, point-virgule ou tabulation, ou laissez la détection auto : Papa Parse devine d’après le texte. Le point-virgule est fréquent dans les exports Excel européens ; la tabulation correspond au TSV.',
  tool_csv_json_faq_q2: 'Mes nombres, zéros initiaux et identifiants restent-ils intacts ?',
  tool_csv_json_faq_a2:
    'Par défaut chaque cellule reste du texte, donc 007 et les identifiants longs sont préservés. Avec « Inférer les types », les valeurs numériques deviennent des nombres : 007 devient 7 et les très longues suites de chiffres peuvent perdre en précision. Laissez désactivé pour SKU, codes postaux et téléphones.',
  tool_csv_json_faq_q3: 'Comment sont gérés les champs avec virgules, guillemets ou sauts de ligne ?',
  tool_csv_json_faq_a3:
    'Ils sont entourés de guillemets doubles et les guillemets internes sont doublés, selon la RFC 4180. Un titre comme Chair, oak reste ainsi dans un seul champ au lieu d’être coupé en deux colonnes.',
  tool_csv_json_faq_q4: 'Comment le JSON imbriqué devient-il des colonnes CSV ?',
  tool_csv_json_faq_a4:
    'Les objets sont aplatis en colonnes à chemin pointé (dim.w, dim.h). Les tableaux deviennent une chaîne JSON dans une seule cellule. Les colonnes sont l’union des clés de tous les enregistrements et les valeurs manquantes restent vides.',
  tool_csv_json_faq_q5: 'Mes données quittent-elles le navigateur ?',
  tool_csv_json_faq_a5:
    'Non. L’analyse reste dans cet onglet et les fichiers choisis sont lus en local. Un CDN peut servir Papa Parse ; cette requête ne télécharge que du code, elle n’envoie pas votre CSV ni votre JSON.',
  tool_bmi_faq_q1: 'Quelle est la formule de l\'IMC ?',
  tool_bmi_faq_a1: 'Métrique : IMC = poids(kg) / taille(m)². Impérial : IMC = 703 × poids(lb) / taille(in)².',
  tool_bmi_faq_q2: 'Que signifient les catégories d\'IMC ?',
  tool_bmi_faq_a2:
    'Seuils adultes courants : insuffisance <18,5 ; normal 18,5–24,9 ; surpoids 25–29,9 ; obésité ≥30. Ce sont des repères de dépistage, pas un diagnostic.',
  tool_bmi_faq_q3: 'L\'IMC convient-il aux sportifs ?',
  tool_bmi_faq_a3:
    'Pas toujours. L\'IMC ne distingue pas muscle et graisse. Un sportif peut être en bande élevée avec peu de graisse — demandez un avis personnalisé.',
  tool_bmi_faq_q4: 'Puis-je l\'utiliser pour un enfant ou une grossesse ?',
  tool_bmi_faq_a4:
    'Ces seuils adultes ne conviennent pas aux mineurs ni à la grossesse. Utilisez des courbes par âge et un suivi clinique.',
  tool_bmi_disclaimer:
    'Ce calculateur d\'IMC sert uniquement au dépistage éducatif chez l\'adulte. Ce n\'est pas un avis médical, ne diagnostique pas une maladie et ne remplace pas un professionnel de santé.',
  tool_bmi_references:
    'Fiche OMS sur l\'obésité et le surpoids ; guide CDC sur les catégories d\'IMC adulte ; formules métriques et impériales standard.',

  /* --- IG: ip / roi / mr --- */
tool_ip_address_title: 'Quelle est mon adresse IP — Voir votre IP publique',
  tool_ip_address_description:
    'Affichez l’IP publique observée par notre edge pour votre connexion. Processus : ouvrez la page ou cliquez sur Actualiser ; le worker lit l’adresse client de confiance. Exemple : peut afficher 203.0.113.10. Avec un VPN/proxy, vous voyez l’IP de sortie, pas celle du LAN.',
  tool_ip_address_article:
    'Cette page montre votre IP de sortie publique vue depuis notre edge — utile pour vérifier un VPN, donner l’IP au support ou déboguer des listes d’autorisation. Ce n’est pas un outil de géolocalisation ou d’ISP.',
  tool_ip_address_how_title: 'Fonctionnement',
  tool_ip_address_how_body:
    'Le navigateur appelle notre API edge. Le worker renvoie l’IP client liée à la connexion (pas seulement un en-tête falsifiable). Actualisez à tout moment ; aucun compte requis.',
  tool_ip_address_rules_title: 'Ce que signifie cette IP',
  tool_ip_address_rules_body:
    'C’est l’adresse publique associée à votre connexion TCP/TLS sur l’edge — l’identité de sortie que voient souvent les sites. Limites :',
  tool_ip_address_rules_item_1: 'Avec un VPN ou un proxy HTTP, vous voyez l’IP de sortie du fournisseur, pas le LAN domestique.',
  tool_ip_address_rules_item_2: 'Derrière le NAT, plusieurs appareils partagent une IP publique ; 192.168.x.x n’apparaît pas ici.',
  tool_ip_address_rules_item_3: 'Nous privilégions l’IP client de l’edge plutôt que X-Forwarded-For seul (falsifiable).',
  tool_ip_address_rules_item_4: 'IPv4 ou IPv6 selon le chemin ; en dual-stack, cela peut changer après reconnexion.',
  tool_ip_address_example_title: 'Exemple',
  tool_ip_address_example:
    'Exemple documentaire : l’edge voit 203.0.113.10 (adresse réservée TEST-NET-3). Votre résultat réel sera votre IP publique de sortie.',
  tool_ip_address_usecases_title: 'Cas d’usage',
  tool_ip_address_usecase_1: 'Vérifier qu’un VPN/proxy change bien l’IP publique.',
  tool_ip_address_usecase_2: 'Indiquer au support ou au pare-feu l’IP publique à autoriser.',
  tool_ip_address_usecase_3: 'Contrôle rapide lors du débogage d’accès distant ou d’allowlist d’API.',
  tool_ip_address_ref_mdn_label: 'MDN — En-tête X-Forwarded-For (risques d’usurpation)',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — Qu’est-ce qu’une adresse IP ?',
  ip_label: 'Votre IP publique',
  fetch_ip_button: 'Actualiser',
  fetching_message: 'Récupération…',
  tool_ip_address_faq_q1: 'Que se passe-t-il avec un VPN ou un proxy ?',
  tool_ip_address_faq_a1:
    'Vous voyez en général l’IP de sortie du VPN/proxy. C’est attendu : les sites voient la même identité.',
  tool_ip_address_faq_q2: 'Comment la page obtient-elle mon IP ?',
  tool_ip_address_faq_a2:
    'Le navigateur interroge l’API edge ; le worker renvoie l’IP client de confiance de cette connexion.',
  tool_ip_address_faq_q3: 'Pourquoi différente de mon IP LAN ?',
  tool_ip_address_faq_a3:
    'Les adresses privées (ex. 192.168.x.x) restent sur le réseau local via le NAT. Ici seule l’IP publique apparaît.',
  tool_ip_address_faq_q4: 'Stockez-vous mon IP ?',
  tool_ip_address_faq_a4:
    'La requête est courte sur l’edge. Nous ne proposons pas d’historique d’IP.',

  tool_roi_title: 'Calculateur de ROI — Calculer le retour sur investissement',
  tool_roi_description:
    'Calculez le ROI simple avec (Gain − Coût) / Coût × 100 %, ou (Valeur finale − Initiale) / Initiale × 100 %. Processus : saisissez le coût et la valeur finale (ou le gain net), puis examinez les hypothèses fiscales, de frais et de temps. Exemple : coût 1000, finale 1300 → ROI 30 %. Illustration éducative uniquement — pas un conseil d’investissement.',
  tool_roi_article:
    'Le ROI simple exprime le gain net par rapport au coût en pourcentage. Utile pour un bilan approximatif de campagne ou de projet ; pas d’IRR/VAN multipériode.',
  tool_roi_initial_label: 'Investissement initial (coût)',
  tool_roi_initial_placeholder: 'ex. 1000',
  tool_roi_final_label: 'Valeur finale',
  tool_roi_final_placeholder: 'ex. 1300',
  tool_roi_gain_label: 'Gain net (facultatif)',
  tool_roi_gain_placeholder: 'S’il est connu, remplace finale − initiale',
  tool_roi_calculate: 'Calculer',
  tool_roi_result_label: 'ROI',
  tool_roi_how_title: 'Fonctionnement',
  tool_roi_how_body:
    'Saisissez le coût et la valeur finale ou un gain net connu. ROI = net / coût × 100 %. Sans gain, net = finale − initiale. Coût nul refusé.',
  tool_roi_formula_title: 'Formule et hypothèses',
  tool_roi_formula_body:
    'ROI = (Valeur finale − Investissement initial) / Investissement initial × 100 %, ou Gain net / Coût × 100 %. À retenir :',
  tool_roi_formula_item_1: 'Impôts : non estimés — saisissez des montants après impôts si besoin.',
  tool_roi_formula_item_2: 'Temps : le ROI simple ignore la durée de détention ; ce n’est pas un rendement annualisé.',
  tool_roi_formula_item_3: 'Frais : intégrez commissions et frais de plateforme dans le coût ou la valeur finale.',
  tool_roi_formula_item_4: 'Flux multipériodes et IRR/VAN hors périmètre de ce pourcentage mono-période.',
  tool_roi_example_title: 'Exemple',
  tool_roi_example:
    'Exemple : coût 1000, valeur finale 1300 → gain 300 → ROI = 300 / 1000 × 100 % = 30 %.',
  tool_roi_usecases_title: 'Cas d’usage',
  tool_roi_usecase_1: 'Marketing : ROI approximatif d’une campagne quand dépense et revenus attribués sont connus.',
  tool_roi_usecase_2: 'Cours : s’entraîner au pourcentage ROI de base avec des chiffres fixes.',
  tool_roi_usecase_3: 'Bilan de projet : résumer une initiative en une paire coût/gain (estimation seulement).',
  tool_roi_ref_investopedia_label: 'Investopedia — Retour sur investissement (ROI)',
  tool_roi_ref_guide_label: 'Investopedia — Guide de calcul du ROI',
  tool_roi_interpret_positive: 'ROI positif (gain par rapport au coût) — illustration éducative uniquement.',
  tool_roi_interpret_zero: 'ROI nul — ni gain ni perte sur ces entrées.',
  tool_roi_interpret_negative: 'ROI négatif (perte par rapport au coût) — illustration éducative uniquement.',
  tool_roi_zero_cost: 'L’investissement initial doit être supérieur à zéro.',
  tool_roi_faq_q1: 'Quels impôts, frais et délai ?',
  tool_roi_faq_a1:
    'Nous n’estimons ni impôts ni frais — intégrez-les vous-même. Le ROI simple n’annualise pas non plus la période.',
  tool_roi_faq_q2: 'Quelle formule est utilisée ?',
  tool_roi_faq_a2:
    'ROI = (Finale − Initiale) / Initiale × 100 %, ou Gain net / Coût × 100 % si vous saisissez le gain.',
  tool_roi_faq_q3: 'Et si le coût est nul ?',
  tool_roi_faq_a3: 'Le ROI est indéfini (division par zéro). Saisissez un coût positif.',
  tool_roi_faq_q4: 'Est-ce un conseil d’investissement ?',
  tool_roi_faq_a4: 'Non. Les résultats sont des illustrations éducatives uniquement.',
  tool_roi_disclaimer:
    'Les résultats de ROI sont des illustrations éducatives uniquement et ne constituent pas un conseil d’investissement, fiscal ou financier. Les rendements passés ou hypothétiques ne garantissent pas les résultats futurs.',
  tool_roi_references:
    'Définitions et guides Investopedia sur le ROI ; ROI simple = gain net / coût.',

  tool_marginal_revenue_title: 'Calculateur de revenu marginal — Formule ΔRT / ΔQ',
  tool_marginal_revenue_description:
    'Calculez le revenu marginal avec MR = ΔRT / ΔQ. Processus : saisissez quantité et revenu total en deux points, obtenez ΔRT et ΔQ, puis divisez. Exemple : Q 10→11, RT 1000→1080 → MR = 80. Usage éducatif uniquement — pas un conseil tarifaire.',
  tool_marginal_revenue_article:
    'Le revenu marginal est la variation du revenu total lorsque la quantité change. Ce calculateur montre la dérivation discrète entre deux points.',
  tool_marginal_revenue_how_title: 'Fonctionnement',
  tool_marginal_revenue_how_body:
    'Saisissez quantité et revenu total pour le palier 1 puis le palier 2. L’outil calcule ΔRT = RT2 − RT1, ΔQ = Q2 − Q1 et MR = ΔRT / ΔQ dans le navigateur.',
  tool_marginal_revenue_formula_title: 'Dérivation de la formule',
  tool_marginal_revenue_formula_body:
    'Par définition, le revenu marginal mesure comment le revenu total change quand la quantité change. Avec deux points :',
  tool_marginal_revenue_formula_item_1: 'ΔRT = RT₂ − RT₁ (variation du revenu total)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (variation de quantité)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔRT / ΔQ si ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Un pas discret approxime le MR moyen sur l’intervalle ; les modèles continus utilisent dRT/dQ. Un MR négatif signifie un revenu en baisse quand la quantité monte.',
  tool_marginal_revenue_example_title: 'Exemple',
  tool_marginal_revenue_example:
    'Exemple : Q₁ = 10, RT₁ = 1000 ; Q₂ = 11, RT₂ = 1080 → ΔRT = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_usecases_title: 'Cas d’usage',
  tool_marginal_revenue_usecase_1: 'Devoirs : vérifier un tableau quantité/revenu à deux niveaux.',
  tool_marginal_revenue_usecase_2: 'Estimation rapide : variation de revenu quand la production augmente d’une unité.',
  tool_marginal_revenue_usecase_3: 'Comparer revenu marginal et revenu moyen en microéconomie introductive.',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Revenu marginal (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principes de microéconomie (concurrence)',
  tool_marginal_revenue_q1_label: 'Quantité (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'ex. 10',
  tool_marginal_revenue_tr1_label: 'Revenu total (RT₁)',
  tool_marginal_revenue_tr1_placeholder: 'ex. 1000',
  tool_marginal_revenue_q2_label: 'Quantité (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'ex. 11',
  tool_marginal_revenue_tr2_label: 'Revenu total (RT₂)',
  tool_marginal_revenue_tr2_placeholder: 'ex. 1080',
  tool_marginal_revenue_quantity_label: 'Quantité',
  tool_marginal_revenue_revenue_label: 'Revenu total',
  tool_marginal_revenue_calculate: 'Calculer MR',
  tool_marginal_revenue_result_label: 'Revenu marginal',
  tool_marginal_revenue_zero_dq: 'ΔQ = 0 — la quantité doit changer entre les deux points.',
  tool_marginal_revenue_detail_tpl: 'ΔRT = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_faq_q1: 'Comment le revenu marginal est-il dérivé ici ?',
  tool_marginal_revenue_faq_a1:
    'MR = ΔRT / ΔQ avec ΔRT = RT₂ − RT₁ et ΔQ = Q₂ − Q₁. Dérivation discrète, pas une dérivée continue.',
  tool_marginal_revenue_faq_q2: 'Un MR positif signifie-t-il augmenter la production ?',
  tool_marginal_revenue_faq_a2:
    'Non. Cet outil ne donne pas de conseil tarifaire ou de production ; le coût marginal compte aussi.',
  tool_marginal_revenue_faq_q3: 'Que se passe-t-il si ΔQ = 0 ?',
  tool_marginal_revenue_faq_a3: 'Le MR est indéfini si la quantité ne change pas. Choisissez deux quantités distinctes.',
  tool_marginal_revenue_faq_q4: 'Différence avec le revenu moyen ?',
  tool_marginal_revenue_faq_a4:
    'Le revenu moyen est RT / Q à un niveau. Le marginal est la variation de RT quand Q change ; ils ne coïncident que dans des cas particuliers.',
  tool_marginal_revenue_disclaimer:
    'Ce calculateur sert à apprendre des concepts de microéconomie. Ce n’est pas un conseil commercial, tarifaire ou d’investissement.',
  tool_marginal_revenue_references:
    'Entrée Investopedia sur le revenu marginal ; traitement introductif de MR = ΔRT/ΔQ (ex. OpenStax).',

  tool_squarefeet_title: 'Pieds carrés en m² — Conversion pour logement et rénovation',
  tool_squarefeet_description:
    'Convertissez la surface d’une pièce entre pieds carrés et mètres carrés pour annonces et rénovation. Processus : choisissez ft/m/in, saisissez longueur × largeur, calculez l’aire, puis affichez ft² et m² avec le facteur NIST 1 ft² = 0.09290304 m². Exemple : appart. 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_article:
    'Estimez une surface rectangulaire à partir de la longueur et de la largeur, puis convertissez entre pieds carrés et mètres carrés. Pensé pour les annonces, sols et peinture — pas une estimation de prix, ni une distinction surface utile / construite.',
  tool_squarefeet_length_label: 'Longueur',
  tool_squarefeet_length_placeholder: 'Saisissez la longueur',
  tool_squarefeet_width_label: 'Largeur',
  tool_squarefeet_width_placeholder: 'Saisissez la largeur',
  tool_squarefeet_calculate: 'Convertir la surface',
  tool_squarefeet_unit_group_label: 'Unités d’entrée',
  unit_feet: 'Pieds',
  unit_meters: 'Mètres',
  unit_inches: 'Pouces',
  sqft_unit: 'sq ft',
  tool_squarefeet_result_note: 'Arrondi à deux décimales. Facteur : 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_invalid_input: 'Saisissez une longueur et une largeur positives.',
  tool_squarefeet_usage_title: 'Utilisation',
  tool_squarefeet_usage: 'Choisissez l’unité, saisissez longueur et largeur pour obtenir des pieds carrés et l’équivalent en m².',
  tool_squarefeet_how_title: 'Comment ça marche',
  tool_squarefeet_how_body:
    'Choisissez pieds, mètres ou pouces. Multipliez longueur × largeur après conversion en pieds, puis passez en m² avec le facteur SI. Les valeurs vides ou négatives sont refusées.',
  tool_squarefeet_formula_title: 'Formule de surface et facteur de conversion',
  tool_squarefeet_formula_body:
    'Surface (ft²) = longueur (ft) × largeur (ft). En mètres : ft² = (L×W) ÷ 0.09290304. En pouces : divisez chaque côté par 12. Facteur : 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Entrée en pieds : surface_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Entrée en mètres : surface_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Entrée en pouces : surface_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = surface_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_example_title: 'Exemple',
  tool_squarefeet_example:
    'Annonce : appart. 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Pièce : 10 ft × 12 ft = 120 sq ft ≈ 11,15 m².',
  tool_squarefeet_usecases_title: 'Cas concrets',
  tool_squarefeet_usecase_1: 'Comparer une annonce US en sq ft avec des pubs locales en m².',
  tool_squarefeet_usecase_2: 'Estimer sol ou moquette d’une pièce rectangulaire avant commande.',
  tool_squarefeet_usecase_3: 'Contrôle rapide peinture/rénovation quand le plan mélange les unités.',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Guide du Système international d’unités (SI)',
  tool_squarefeet_faq_q1: 'Quel facteur ft² ↔ m² utilisez-vous ?',
  tool_squarefeet_faq_a1: 'Exactement 1 ft² = 0.09290304 m² (repère SI / NIST). Affichage à deux décimales.',
  tool_squarefeet_faq_q2: 'Distinguez-vous surface utile et construite ?',
  tool_squarefeet_faq_a2: 'Non. Seule la surface plane d’un rectangle est convertie.',
  tool_squarefeet_faq_q3: 'Peut-on estimer le prix d’un bien ?',
  tool_squarefeet_faq_a3: 'Non. La conversion d’aire n’est pas une estimation ni un modèle de prix.',
  tool_squarefeet_faq_q4: 'Et les pièces en L ?',
  tool_squarefeet_faq_a4: 'Découpez en rectangles, convertissez chacun, puis additionnez.',
  tool_percentage_change_title: 'Calculateur de variation en % — De l’ancienne à la nouvelle valeur',
  tool_percentage_change_description:
    'Calculez la hausse ou la baisse en pourcentage entre une ancienne et une nouvelle valeur. Processus : saisissez les deux, appliquez (nouveau − ancien) / ancien × 100, lisez le signe. Exemple : 80 → 100 = +25 %. Pensé pour CA MoM, DAU et prix — pas des points de pourcentage.',
  tool_percentage_change_article:
    'La variation relative répond « de combien la métrique a bougé vs sa base ? ». Saisissez l’ancienne et la nouvelle valeur ; formule (nouveau − ancien) / ancien × 100. Pour les KPI, pas un substitut au ROI.',
  tool_percentage_change_original_label: 'Ancienne valeur',
  tool_percentage_change_new_label: 'Nouvelle valeur',
  tool_percentage_change_calculate: 'Calculer',
  tool_percentage_change_result_label: 'Variation en pourcentage',
  tool_percentage_change_example:
    'Exemple complet : ancien 80, nouveau 100 → Δ = 20 → (20 / 80) × 100 = +25 %. Baisse : 100 → 80 = −20 %.',
  tool_percentage_change_result_invalid: 'L’ancienne valeur doit être un nombre non nul.',
  tool_percentage_change_increase: 'hausse',
  tool_percentage_change_decrease: 'baisse',
  tool_percentage_change_no_change: 'aucun changement',
  tool_percentage_change_abs_note: 'Variation absolue : {delta}',
  tool_percentage_change_how_title: 'Comment ça marche',
  tool_percentage_change_how_body:
    'Saisissez la base (ancien) et la valeur suivante. On soustrait, on divise par l’ancien, on multiplie par 100. Positif = hausse ; négatif = baisse. Si ancien = 0, la variation relative est indéfinie.',
  tool_percentage_change_formula_title: 'Formule de variation en pourcentage',
  tool_percentage_change_formula_body:
    'Variation % = (nouveau − ancien) / ancien × 100. Le dénominateur utilise l’ancien signé (pas |ancien|).',
  tool_percentage_change_formula_item_1: 'Δ = nouveau − ancien',
  tool_percentage_change_formula_item_2: 'pourcentage = (Δ / ancien) × 100',
  tool_percentage_change_formula_item_3: 'ancien = 0 → indéfini (erreur)',
  tool_percentage_change_example_title: 'Exemple',
  tool_percentage_change_usecases_title: 'Usages business & data',
  tool_percentage_change_usecase_1: 'CA mensuel : GMV 80 le mois dernier vs 100 ce mois → +25 %.',
  tool_percentage_change_usecase_2: 'Produit : DAU de 50k à 55k → +10 % relatif.',
  tool_percentage_change_usecase_3: 'Prix : de 40 à 34 → −15 % (pas « 6 points de pourcentage »).',
  tool_percentage_change_ref_wiki_label: 'Wikipédia — Relative change and difference',
  tool_percentage_change_faq_q1: 'Quelle est la formule de variation en % ?',
  tool_percentage_change_faq_a1: 'Variation % = (nouveau − ancien) / ancien × 100. Positif = hausse ; négatif = baisse.',
  tool_percentage_change_faq_q2: 'Pourquoi l’ancienne valeur ne peut-elle pas être zéro ?',
  tool_percentage_change_faq_a2: 'La division par zéro est indéfinie. Sans base, pas de variation relative.',
  tool_percentage_change_faq_q3: 'Est-ce la même chose que les points de pourcentage ?',
  tool_percentage_change_faq_a3: 'Non. De 10 % à 12 % = +2 points, mais +20 % en variation relative.',
  tool_percentage_change_faq_q4: 'Différence avec le ROI ?',
  tool_percentage_change_faq_a4: 'Le ROI compare le gain au coût d’investissement. La variation % compare toute nouvelle valeur à une base ancienne.',
  tool_gradient_title: 'Calculateur de gradient — ∇f multivariable (dérivées partielles)',
  tool_gradient_description:
    'Calculez le gradient ∇f d’un champ scalaire comme vecteur de dérivées partielles. Processus : dériver pour chaque variable, assembler ∇f, évaluer en un point. Démo f(x,y)=x²y+3y → ∇f=(2xy, x²+3) ; en (1,2) → (4,4). Utile en optimisation et descente de gradient ML.',
  tool_gradient_desc:
    'Calculez le gradient ∇f d’un champ scalaire comme vecteur de dérivées partielles. Processus : dériver pour chaque variable, assembler ∇f, évaluer en un point. Démo f(x,y)=x²y+3y → ∇f=(2xy, x²+3) ; en (1,2) → (4,4). Utile en optimisation et descente de gradient ML.',
  tool_gradient_article:
    'Le gradient d’une fonction scalaire multivariable est le vecteur de ses dérivées partielles premières. Il pointe vers la plus forte hausse locale. Cette page n’est pas un calculateur de pente entre deux points.',
  tool_gradient_fn_hint: 'Fonction démo (fixe dans la boîte interactive) :',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'ex. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'ex. 2',
  tool_gradient_calculate: 'Évaluer ∇f',
  tool_gradient_result_label: 'Gradient en votre point',
  tool_gradient_result_note: 'Évalué f(x,y)=x²y+3y en ({x}, {y}).',
  tool_gradient_invalid_input: 'Saisissez des x et y numériques finis.',
  tool_gradient_how_title: 'Comment ça marche',
  tool_gradient_how_body:
    'Pour un scalaire f, calculez chaque partielle ∂f/∂xᵢ en fixant les autres, empilez-les dans ∇f, puis substituez les coordonnées. La boîte utilise f(x,y)=x²y+3y pour vérifier à la main.',
  tool_gradient_formula_title: 'Formule du gradient multivariable',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). À deux variables : ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f = montée la plus raide ; −∇f sert à la descente de gradient.',
  tool_gradient_formula_item_1: 'Calculer ∂f/∂xᵢ pour chaque variable',
  tool_gradient_formula_item_2: 'Assembler le vecteur ∇f',
  tool_gradient_formula_item_3: 'Évaluer les composantes au point',
  tool_gradient_formula_item_4: 'Démo : f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_example_title: 'Exemple',
  tool_gradient_example:
    'f(x,y)=x²y+3y. Partielles : ∂f/∂x=2xy, ∂f/∂y=x²+3. En (1,2) : ∇f=(4,4).',
  tool_gradient_usecases_title: 'Optimisation & apprentissage automatique',
  tool_gradient_usecase_1: 'Vérifier des partielles de devoir avant l’étape d’optimisation.',
  tool_gradient_usecase_2: 'Expliquer la descente de gradient : chaque pas va à l’opposé de ∇loss.',
  tool_gradient_usecase_3: 'Intuition physique : ∇f pointe où le champ scalaire croît le plus vite.',
  tool_gradient_ref_wiki_label: 'Wikipédia — Gradient',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_faq_q1: 'Qu’est-ce qu’un gradient en calcul multivariable ?',
  tool_gradient_faq_a1: '∇f est le vecteur des dérivées partielles et pointe vers la plus forte hausse locale.',
  tool_gradient_faq_q2: 'Comment le calculer à la main ?',
  tool_gradient_faq_a2: 'Dérivez pour chaque variable en fixant les autres, formez le vecteur, évaluez en un point.',
  tool_gradient_faq_q3: 'Est-ce le même « gradient » qu’en ML ?',
  tool_gradient_faq_a3: 'Oui, le même objet : ∇ d’une perte scalaire. La page enseigne la définition, elle n’entraîne pas un modèle.',
  tool_gradient_faq_q4: 'Est-ce un calculateur de pente entre deux points ?',
  tool_gradient_faq_a4: 'Non. La pente rise/run est un autre outil ; ici ∇f est le vecteur de partielles.',

};
export default fr;