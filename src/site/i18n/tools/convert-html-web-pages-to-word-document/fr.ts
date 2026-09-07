/**
 * i18n tool shard (convert-html-web-pages-to-word-document / fr).
 * H1: Convertir des pages HTML en document Word.
 * IG: titres/listes/tableaux Word éditables — pas un PDF A4, pas une capture, pas PDF→Word, pas images→Word.
 */
import type { SiteLangDict } from '../../../types';

/** Textes visibles du convertisseur HTML→Word (fr). */
const fr: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: 'Réglages avancés (facultatif)',
	tool_convert_html_web_pages_to_word_document_article:
		'Collez du HTML ou une URL publique : vous obtenez un .docx modifiable. Titres, listes, tableaux et liens deviennent des styles Word. Ce n’est ni un PDF A4 ni une capture. Le HTML collé reste dans cet onglet, sans envoi au serveur. Une URL est récupérée une fois et n’est pas stockée. Pour imprimer : Convertir HTML en PDF. Déjà un PDF : Transformer un PDF en document Word.',
	tool_convert_html_web_pages_to_word_document_clear: 'Effacer',
	tool_convert_html_web_pages_to_word_document_convert: 'Convertir',
	tool_convert_html_web_pages_to_word_document_desc:
		'Collez du HTML ou une URL : Word éditable, pas un PDF ni une capture d’écran.',
	tool_convert_html_web_pages_to_word_document_description:
		'Convertir des pages HTML en document Word (HTML vers Word) : collez du code ou une URL, obtenez un .docx éditable, pas un PDF A4. Étapes : coller ou récupérer, Convertir, Télécharger. Exemple : notes de version avec tableau deviennent des styles Word. Le HTML collé reste dans cet onglet ; l’URL est récupérée une fois et n’est pas stockée.',
	tool_convert_html_web_pages_to_word_document_download: 'Télécharger',
	tool_convert_html_web_pages_to_word_document_empty: 'Collez d’abord du HTML ou une URL publique.',
	tool_convert_html_web_pages_to_word_document_err_convert: 'Impossible de construire le Word à partir de ce HTML. Vérifiez le balisage et réessayez.',
	tool_convert_html_web_pages_to_word_document_err_load: 'La bibliothèque Word n’a pas chargé. Actualisez puis réessayez.',
	tool_convert_html_web_pages_to_word_document_err_url: 'Impossible de charger cette URL. Vérifiez l’adresse, ou le site refuse la récupération.',
	tool_convert_html_web_pages_to_word_document_err_url_empty: 'Saisissez d’abord une URL http(s) valide.',
	tool_convert_html_web_pages_to_word_document_example:
		'Charger un exemple remplit un HTML de notes de version (H1, liste, tableau à deux colonnes, lien), lance Convertir et active Télécharger. Le .docx a de vrais styles de titre et de tableau. Dans l’onglet URL, Convertir récupère une adresse en ligne.',
	tool_convert_html_web_pages_to_word_document_example_title: 'Exemple',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'Transformer un PDF en document Word part d’un fichier PDF et de sa couche texte. Ici, on part du HTML collé ou d’une URL. Si vous avez déjà un PDF, utilisez cet autre outil.',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'Oui. Onglet URL, une adresse https, puis Convertir. Les scripts sont retirés. Murs de connexion et applis JavaScript collent rarement au site réel. Le CSS n’est pas recréé au pixel près.',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'Le fichier est un .docx (HTML vers DOCX). Ouvrez-le dans Word ou un éditeur Open XML. Ce n’est ni un .doc binaire ni un .mhtml Chrome.',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'Le HTML collé ne quitte pas cet onglet et n’est pas envoyé au serveur. Pour une URL, nous envoyons l’adresse une fois pour récupérer le HTML, sans le stocker. Le .docx se construit dans le navigateur.',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'Convertir HTML en PDF pagine en A4 pour l’impression. Ici, le HTML devient des paragraphes, titres, listes et tableaux éditables. Même HTML, autre livrable.',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'Non. Exportez ou copiez le HTML. La sauvegarde complète / MHTML de Chrome est un autre format, non analysé ici.',
	tool_convert_html_web_pages_to_word_document_faq_q1: 'Quelle différence avec Transformer un PDF en document Word ?',
	tool_convert_html_web_pages_to_word_document_faq_q2: 'Puis-je convertir une URL (page web vers Word) ?',
	tool_convert_html_web_pages_to_word_document_faq_q3: 'Le résultat est-il HTML vers DOCX / un .docx ?',
	tool_convert_html_web_pages_to_word_document_faq_q4: 'Mon HTML ou mes URL sont-ils envoyés et stockés ?',
	tool_convert_html_web_pages_to_word_document_faq_q5: 'Quelle différence avec Convertir HTML en PDF ?',
	tool_convert_html_web_pages_to_word_document_faq_q6: 'Puis-je convertir un .mhtml Chrome ?',
	tool_convert_html_web_pages_to_word_document_how_body:
		'Appuyez sur Convertir, puis Télécharger : vous obtenez un .docx dont les titres et tableaux restent éditables. HTML vers Word, pas une photo de l’écran.',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'Code déjà sous la main : restez sur Coller le HTML. Une https publique (page web vers Word) : onglet URL.',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'Convertir. Scripts retirés. Titres, listes, tableaux, liens mappés dans Word. Images en échec ignorées.',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'Images des balises <img> ? Réglages avancés — Inclure les images est activé par défaut ; les visuels bloqués sont quand même sautés.',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'Impression A4 : Convertir HTML en PDF. Capture : Convertir plusieurs pages web en PNG ou JPG. Déjà un PDF : Transformer un PDF en document Word.',
	tool_convert_html_web_pages_to_word_document_how_item_5: 'Quand Convertir réussit, Télécharger. Ouvrez le .docx et corrigez le texte.',
	tool_convert_html_web_pages_to_word_document_how_title: 'Fonctionnement',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'Fragment ou document HTML complet. Scripts retirés avant conversion. Le CSS de mise en page n’est pas recréé au pixel près.',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>Notes de version</h1><p>Collez le HTML ici…</p>',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'Activé : on tente d’embarquer les <img> lisibles. Images cassées ou bloquées ignorées. Désactivez pour un Word texte seul.',
	tool_convert_html_web_pages_to_word_document_imgs_label: 'Inclure les images',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'Inclure les images tente d’embarquer les visuels du HTML. Le positionnement CSS n’est pas mappé. La sortie est toujours un .docx.',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'Un Convertir produit un .docx. Titres, paragraphes, listes, tableaux, liens et images optionnelles sont mappés. CSS absolu, barres fixes et scripts ne le sont pas.',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'Le HTML collé reste dans cet onglet, sans envoi au serveur. Une URL est récupérée une fois et n’est pas stockée.',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'h1–h6 deviennent titres Word. ul/ol des listes. table un tableau. a un hyperlien.',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'Login, applis JavaScript et CSS d’impression collent rarement au site réel. Ce n’est pas un raster de capture.',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'Face à Convertir HTML en PDF : Word éditable, pas de feuilles A4. Face à Transformer un PDF en document Word : l’entrée est du HTML ou une URL. Face à Images vers Word : l’entrée est du balisage, pas une pile de photos.',
	tool_convert_html_web_pages_to_word_document_rules_title: 'Règles à anticiper',
	tool_convert_html_web_pages_to_word_document_sample: 'Charger un exemple',
	tool_convert_html_web_pages_to_word_document_status_done: 'Word prêt — téléchargez le .docx et modifiez-le.',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'Récupération du HTML…',
	tool_convert_html_web_pages_to_word_document_status_working: 'Construction du document Word…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'Coller le HTML',
	tool_convert_html_web_pages_to_word_document_tab_url: 'URL',
	tool_convert_html_web_pages_to_word_document_title: 'Convertir des pages HTML en document Word',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'Une URL http(s) publique. Nous récupérons le HTML une fois et réécrivons CSS/images. Les scripts sont retirés avant le mapping Word.',
	tool_convert_html_web_pages_to_word_document_url_label: 'URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'Transformer un export HTML du centre d’aide en brouillon que le juridique peut annoter — les titres restent des titres.',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'Garder l’A4 dans Convertir HTML en PDF et les captures dans le lot PNG ; venir ici pour un .docx éditable.',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'Récupérer une URL publique de notes de version et conserver le tableau comme vrai tableau Word.',
	tool_convert_html_web_pages_to_word_document_usecases_title: 'Quand c’est utile',
};

export default fr;
