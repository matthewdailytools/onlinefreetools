/**
 * i18n tool shard (svg-optimizer / fr).
 * H1: optimiseur SVG.
 */
import type { SiteLangDict } from '../../../types';

/** Textes français. */
const fr: SiteLangDict = {
	tool_svg_optimizer_article:
		'Collez ou déposez un SVG, activez les options de nettoyage et voyez les octets économisés avec aperçu. Inspiré de SVGOMG ; tout dans le navigateur — reste sur l’appareil, sans envoi au serveur.',
	tool_svg_optimizer_choose_file: 'Choisir un fichier SVG',
	tool_svg_optimizer_clear: 'Effacer',
	tool_svg_optimizer_copy: 'Copier',
	tool_svg_optimizer_desc:
		'Optimisez SVG dans le navigateur avec octets et aperçu ; sans envoi au serveur.',
	tool_svg_optimizer_description:
		'Optimiseur SVG : collez ou déposez un SVG, choisissez les options de nettoyage et comparez octets d’origine vs optimisés avec aperçu. Exemple : une icône d’exemple se charge à l’ouverture et montre l’économie après suppression des commentaires et métadonnées d’éditeur. Copiez ou téléchargez le résultat. Reste sur l’appareil et n’est pas envoyé au serveur. Passe légère dans le navigateur, pas SVGO complet.',
	tool_svg_optimizer_download: 'Télécharger',
	tool_svg_optimizer_drop_hint: 'Ou déposez un .svg ici. L’optimisation reste dans cet onglet.',
	tool_svg_optimizer_empty: 'Collez un SVG ou choisissez un fichier d’abord.',
	tool_svg_optimizer_err_not_svg: 'Cela ne ressemble pas à du SVG. Collez du markup avec une racine <svg>.',
	tool_svg_optimizer_example:
		'Charger l’exemple insère une icône avec commentaires XML, bruit Inkscape et espaces superflus. Toutes les options activées réduisent les octets ; l’aperçu reste identique.',
	tool_svg_optimizer_example_title: 'Exemple',
	tool_svg_optimizer_faq_a1:
		'Non. Le SVG est lu et optimisé dans cet onglet. Rien n’est envoyé à nos serveurs.',
	tool_svg_optimizer_faq_a2:
		'Pipeline léger (commentaires, métadonnées, espaces, arrondi, groupes vides). SVGO complet ajoute de nombreux plugins — utilisez-le pour cette profondeur.',
	tool_svg_optimizer_faq_a3:
		'Supprimer commentaires enlève <!-- … -->. Métadonnées éditeur retire xmlns/attributs Inkscape/Sketch et <metadata>. Réduire espaces joint les balises. Arrondir nombres garde deux décimales sur les paths. Groupes vides supprime les <g></g> orphelins.',
	tool_svg_optimizer_faq_a4:
		"L'aperçu affiche le SVG optimisé comme image dans cet onglet ; il n'injecte pas le markup dans le DOM de la page.",
	tool_svg_optimizer_faq_q1: 'Mon SVG est-il envoyé ?',
	tool_svg_optimizer_faq_q2: 'Différence avec SVGO ou SVGOMG ?',
	tool_svg_optimizer_faq_q3: 'Que font les options ?',
	tool_svg_optimizer_faq_q4: 'L’aperçu est-il sûr ?',
	tool_svg_optimizer_how_body:
		'Collez ou déposez SVG, ajustez les puces de nettoyage, lisez octets et aperçu, puis copiez ou téléchargez. Tout localement dans le navigateur.',
	tool_svg_optimizer_how_item_1: 'Collez du markup SVG ou déposez un fichier .svg.',
	tool_svg_optimizer_how_item_2: 'Options : commentaires, métadonnées, espaces, décimales, groupes vides.',
	tool_svg_optimizer_how_item_3: 'Lisez octets d’origine, optimisés et pourcentage économisé.',
	tool_svg_optimizer_how_item_4: 'Confirmez l’aperçu puis copiez ou téléchargez optimized.svg.',
	tool_svg_optimizer_how_title: 'Comment ça marche',
	tool_svg_optimizer_input_label: 'Entrée SVG',
	tool_svg_optimizer_input_ph: 'Collez <svg>…</svg> ici…',
	tool_svg_optimizer_load_sample: 'Charger l’exemple',
	tool_svg_optimizer_opt_collapse_whitespace: 'Réduire les espaces entre balises',
	tool_svg_optimizer_opt_round_numbers: 'Arrondir les nombres de path à 2 décimales',
	tool_svg_optimizer_opt_strip_comments: 'Supprimer les commentaires XML/HTML',
	tool_svg_optimizer_opt_strip_empty: 'Supprimer les <g> vides et espaces d’attributs',
	tool_svg_optimizer_opt_strip_metadata: 'Retirer métadonnées éditeur (Inkscape, Sketch…)',
	tool_svg_optimizer_optimize: 'Optimiser',
	tool_svg_optimizer_options_label: 'Options',
	tool_svg_optimizer_output_label: 'SVG optimisé',
	tool_svg_optimizer_preview_label: 'Aperçu',
	tool_svg_optimizer_rules_body:
		'Le nettoyage SVG navigateur privilégie le retour instantané. Vérifiez avant publication.',
	tool_svg_optimizer_rules_item_1:
		'Commentaires et xmlns d’éditeur sont en général sûrs à retirer pour des icônes prod.',
	tool_svg_optimizer_rules_item_2:
		'Arrondir les coordonnées réduit la taille mais peut déplacer des traits — vérifiez l’aperçu.',
	tool_svg_optimizer_rules_item_3:
		'Supprimer groupes vides aide les exports Sketch/Figma ; groupes avec id/transform conservés.',
	tool_svg_optimizer_rules_item_4:
		'Besoin aussi de compresser du raster ? Utilisez l’optimiseur d’images pour PNG/WebP.',
	tool_svg_optimizer_rules_title: 'Règles à connaître',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: 'Optimisé',
	tool_svg_optimizer_size_original: 'Original',
	tool_svg_optimizer_size_saved: 'Économie',
	tool_svg_optimizer_stats_tpl: 'Original {orig} o → Optimisé {opt} o ({pct} % économisés)',
	tool_svg_optimizer_status_copied: 'Copié dans le presse-papiers.',
	tool_svg_optimizer_status_done: 'Optimisé — vérifiez octets et aperçu.',
	tool_svg_optimizer_title: 'Optimiseur SVG',
	tool_svg_optimizer_usecase_1: 'Réduire une icône exportée de Sketch avant commit.',
	tool_svg_optimizer_usecase_2: 'Nettoyer un SVG inline sur une landing et voir l’économie sans SVGO.',
	tool_svg_optimizer_usecase_3: 'Retirer commentaires d’un handoff design en gardant le même aperçu.',
	tool_svg_optimizer_usecases_title: 'Bonnes situations',
};

export default fr;
