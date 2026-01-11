import type { SiteLangDict } from './types';
const fr: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Accueil',
  nav_devlogs: 'Journaux de développement',
  nav_tools: 'Outils',
  footer_text: 'Online Free Tools · Projet d\'apprentissage · En cours d\'itération',
  tool_headers_title: 'Récupérer les en-têtes de réponse du site web',
  tool_headers_description:
    'Entrez une URL pour récupérer ses en-têtes de réponse HTTP (requête côté serveur).',
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
  tool_markdown_title: 'Markdown → HTML',
  tool_markdown_description:
    'Transformez le Markdown en HTML avec aperçu, copie et téléchargement du document complet.',
  tool_markdown_article:
    'Quoi : Convertit le Markdown en HTML nettoyé avec aperçu et options d\'exportation. Utile pour préparer des articles de blog, de la documentation ou partager du contenu rendu. Scénarios : rédaction, aperçus rapides et génération d\'exportations HTML statiques.',
  tool_markdown_copy: 'Copier HTML',
  tool_markdown_copy_done: 'Copié',
  tool_markdown_download: 'Télécharger HTML',
  tool_markdown_clear: 'Effacer',
  tool_markdown_full_doc: 'Générer le document HTML complet',
  tool_markdown_input_label: 'Saisie Markdown',
  tool_markdown_preview_label: 'Aperçu HTML',
  tool_markdown_placeholder:
    "# Titre\n\nMarkdown basique pris en charge : **gras**, listes et blocs de code.\n\n- Élément 1\n- Élément 2\n\n```js\nconsole.log('Bonjour Markdown');\n```",
  tool_markdown_export_title: 'Exportation Markdown vers HTML',
  tool_markdown_export_description: 'Exportation HTML statique générée à partir de Markdown',
  tool_ip_address_title: 'Quelle est mon adresse IP ?',
  tool_ip_address_description: 'Découvrez votre adresse IP publique en un seul clic.',
  tool_ip_address_article: 'Quoi : Trouvez votre adresse IP publique telle que vue par Internet. Votre adresse IP identifie votre appareil sur le réseau et est utilisée par les sites web pour vous livrer du contenu. Scénarios : accès distant, dépannage réseau, configuration du pare-feu et services de géolocalisation.',
  ip_label: 'Votre adresse IP',
  fetch_ip_button: 'Actualiser l\'IP',
  fetching_message: 'Récupération de votre adresse IP...',
  what_is_ip_title: 'Qu\'est-ce qu\'une adresse IP ?',
  what_is_ip_content: 'Une adresse de protocole Internet (IP) est une étiquette numérique attribuée à chaque appareil connecté à un réseau informatique. Elle remplit deux fonctions principales : l\'identification de l\'hôte ou de l\'interface réseau et l\'adressage de localisation. Il existe actuellement deux versions en usage : IPv4 et IPv6.',
};
export default fr;