/**
 * i18n tool shard (markdown-to-html / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_markdown_article:
    'Deux sens, une URL, avec ce que l’assainissement retire et ce que Turndown ne garde pas. Collage local ; CDN = bibliothèques seulement.',
  tool_markdown_clear: 'Effacer',
  tool_markdown_copy: 'Copier HTML',
  tool_markdown_copy_done: 'Copié',
  tool_markdown_copy_md: 'Copier Markdown',
  tool_markdown_description:
    'Publier du Markdown en HTML propre, ou récupérer du Markdown depuis un HTML collé : choisissez le sens. marked / Turndown et DOMPurify restent dans le navigateur. Exemple : README → page .html, ou HTML de CMS → fichier pour Git.',
  tool_markdown_dir_label: 'Sens de conversion',
  tool_markdown_download: 'Télécharger HTML',
  tool_markdown_download_md: 'Télécharger Markdown',
  tool_markdown_example: '`# Titre` et `Bonjour **monde**` donnent un HTML assaini ; le HTML fort revient en `**gras**`.',
  tool_markdown_example_title: 'Exemple',
  tool_markdown_export_description:
    'Générer un document HTML complet depuis Markdown avec modèle et métadonnées. Étapes : rendre, injecter dans le modèle, ajouter meta, télécharger. Exemple : exporter un article en .html autonome.',
  tool_markdown_export_title: 'Export Markdown vers HTML',
  tool_markdown_faq_a1: 'Oui en Markdown → HTML : DOMPurify avant aperçu et téléchargement.',
  tool_markdown_faq_a2: 'Rarement. Objectif : brouillon lisible, pas maquette.',
  tool_markdown_faq_a3: 'Conversion locale. Le CDN ne fait qu’apporter le code des libs.',
  tool_markdown_faq_a4: 'Non garanti — passez par un diff si besoin.',
  tool_markdown_faq_a5: 'Titres, listes, liens, emphase, code fence ; option document HTML complet hors-ligne.',
  tool_markdown_faq_q1: 'Le HTML est-il filtré ?',
  tool_markdown_faq_q2: 'Le rendu CSS survit-il en Markdown ?',
  tool_markdown_faq_q3: 'Le collage part-il sur un serveur ?',
  tool_markdown_faq_q4: 'Aller-retour sans perte ?',
  tool_markdown_faq_q5: 'Couverture CommonMark et exports ?',
  tool_markdown_full_doc: 'Générer un document HTML complet',
  tool_markdown_how_body:
    'Onglets = sens. Saisie à gauche, rendu local à droite. Côté HTML : fragment ou coquille minimale ; côté Markdown : texte pour dépôt ou LLM.',
  tool_markdown_how_item_1: 'Choisissez l’onglet Markdown → HTML ou HTML → Markdown.',
  tool_markdown_how_item_2: 'Collez l’entrée à gauche (ou Charger un exemple).',
  tool_markdown_how_item_3: 'Pour Markdown → HTML, enveloppez éventuellement un document HTML minimal.',
  tool_markdown_how_item_4: 'Copiez ou téléchargez la sortie convertie à droite.',
  tool_markdown_how_title: 'En pratique',
  tool_markdown_html_input_label: 'Entrée HTML',
  tool_markdown_html_placeholder: '<h1>Titre</h1>\n<p>Bonjour <strong>le monde</strong></p>',
  tool_markdown_input_label: 'Entrée Markdown',
  tool_markdown_large_warn:
    'Collage très volumineux (>200k caractères). La conversion peut être lente — essayez un extrait plus court.',
  tool_markdown_loss_hint:
    'Peu ou pas de Markdown — scripts, balises vides ou balisage non pris en charge ont pu être retirés. Voir Règles et FAQ.',
  tool_markdown_md_output_label: 'Sortie Markdown',
  tool_markdown_need_lib: 'Impossible de charger une bibliothèque de conversion. Vérifiez la connexion et rechargez.',
  tool_markdown_placeholder:
    '# Titre\n\nMarkdown de base : **gras**, listes et blocs de code.\n\n- Élément 1\n- Élément 2\n\n```js\nconsole.log(\'Bonjour Markdown\');\n```',
  tool_markdown_preview_label: 'Aperçu HTML',
  tool_markdown_rules_intro:
    'Ce que couvre la conversion : quelle syntaxe Markdown est prise en charge, comment le HTML est nettoyé et comment votre texte collé est traité en local.',
  tool_markdown_rules_item_html_md: 'Vers Markdown : nettoyage puis Turndown (titres ATX, blocs clôturés).',
  tool_markdown_rules_item_loss: 'Styles, scripts, tableaux complexes : souvent aplatis. Aller-retour non identique.',
  tool_markdown_rules_item_md_html: 'Vers HTML : parse CommonMark puis DOMPurify avant affichage/export.',
  tool_markdown_rules_privacy: 'Le texte collé reste ici. Charger une lib via CDN n’envoie pas votre article.',
  tool_markdown_rules_title: 'Règles selon le sens',
  tool_markdown_sample_html: '<h1>Titre</h1>\n<p>Bonjour <strong>le monde</strong></p>',
  tool_markdown_sample_md:
    '# Titre\n\nMarkdown de base : **gras**, listes et blocs de code.\n\n- Élément 1\n- Élément 2\n\n```js\nconsole.log(\'Bonjour Markdown\');\n```',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_title: 'Markdown vers HTML assaini — et retour Markdown',
  tool_markdown_usecase_1: 'Livrer un HTML sûr au CMS.',
  tool_markdown_usecase_2: 'Repasser un export HTML en Markdown éditable.',
  tool_markdown_usecase_3: 'Nettoyer un collage riche avant un prompt.',
  tool_markdown_usecases_title: 'Usages typiques',
};
export default fr;
