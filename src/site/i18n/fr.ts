import type { SiteLangDict } from './types';
const fr: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Accueil',
  nav_devlogs: 'Journaux de développement',
  nav_tools: 'Outils',
  footer_text: 'Online Free Tools · Projet d\'apprentissage · En cours d\'itération',
  tool_headers_title: 'Récupérer les en-têtes de réponse du site web',
  tool_headers_description:
    "Récupérer les en-têtes HTTP d'une URL côté serveur (HEAD, fallback GET). Processus : envoyer HEAD, suivre les redirections, collecter les en-têtes et bloquer les hôtes privés. Exemple : vérifier CORS, Cache-Control et HSTS pour diagnostiquer les redirections et la configuration CDN.",
  tool_headers_article:
    'Quoi : Récupère et inspecte les en-têtes de réponse HTTP d\'un site web. Utile pour déboguer CORS, la mise en cache, les redirections et vérifier les en-têtes de sécurité ou CDN. Scénarios : débogage développeur, vérifications SEO et vérification de la configuration serveur.',
  url_label: 'URL',
  url_placeholder: 'par exemple https://exemple.com',
  fetch_button: 'Récupérer les en-têtes',
  result_title: 'Résultat',
  status_label: 'Statut',
  final_url_label: 'URL finale',
  headers_label: 'En-têtes',
  error_prefix: 'Erreur : ',
  note_title: 'Notes',
  note_1: 'Certains sites ne prennent pas en charge HEAD ; nous retomberons sur GET.',
  note_2: 'Pour des raisons de sécurité, les requêtes vers localhost/réseaux privés sont bloquées.',
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

};
export default fr;