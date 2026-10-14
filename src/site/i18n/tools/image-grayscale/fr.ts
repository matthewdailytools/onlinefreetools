/**
 * i18n tool shard (image-grayscale / fr).
 * French (vouvoiement) rewrite: convertir en noir et blanc / niveaux de gris,
 * désaturation partielle, Convertir → Télécharger with gold HUD and collapsed export settings.
 */
import type { SiteLangDict } from '../../../types';

/** French strings for the image grayscale converter. */
const fr: SiteLangDict = {
	tool_image_grayscale_title: 'Convertir une image en noir et blanc — niveaux de gris, méthode au choix',
	tool_image_grayscale_desc: 'Passez une photo en noir et blanc dans le navigateur, choisissez la méthode, puis téléchargez.',
	tool_image_grayscale_description:
		'Convertissez une photo couleur en noir et blanc (niveaux de gris) dans le navigateur. Étapes : choisissez l’image, choisissez luminance, moyenne, clarté ou un canal, réglez l’intensité, cliquez sur Convertir et téléchargez JPEG, WebP ou PNG. Inclut formule et exemple avec barres de couleur.',
	tool_image_grayscale_choose_file: 'Choisir une image',
	tool_image_grayscale_drop_hint: 'Ou déposez ici un JPEG, PNG, WebP ou GIF.',
	tool_image_grayscale_convert: 'Convertir en noir et blanc',
	tool_image_grayscale_download: 'Télécharger',
	tool_image_grayscale_sample: 'Charger un exemple',
	tool_image_grayscale_clear: 'Effacer',
	tool_image_grayscale_method_label: 'Méthode de niveaux de gris',
	tool_image_grayscale_method_luma601: 'Luminance — Rec.601 (recommandé)',
	tool_image_grayscale_method_luma709: 'Luminance Rec.709 / sRGB',
	tool_image_grayscale_method_average: 'Moyenne de R, G, B',
	tool_image_grayscale_method_lightness: 'Clarté (max + min) ÷ 2',
	tool_image_grayscale_method_red: 'Canal rouge seul (effet filtre rouge)',
	tool_image_grayscale_method_green: 'Canal vert seul',
	tool_image_grayscale_method_blue: 'Canal bleu seul',
	tool_image_grayscale_method_hint: 'La luminance conserve la luminosité perçue par l’œil. L’aperçu se met à jour quand vous changez.',
	tool_image_grayscale_amount_label: 'Intensité',
	tool_image_grayscale_amount_hint: '100 % = noir et blanc complet ; des valeurs plus basses gardent un peu de couleur (désaturer).',
	tool_image_grayscale_show_original: 'Afficher l’original',
	tool_image_grayscale_advanced: 'Réglages avancés (facultatif)',
	tool_image_grayscale_format_label: 'Format de sortie',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP est léger et conserve la transparence. PNG est sans perte. JPEG a besoin d’une couleur de fond.',
	tool_image_grayscale_quality_label: 'Qualité',
	tool_image_grayscale_quality_hint: 'JPEG et WebP uniquement ; PNG l’ignore.',
	tool_image_grayscale_jpeg_bg_label: 'Fond JPEG',
	tool_image_grayscale_jpeg_bg_hint: 'Remplit les zones transparentes avant l’export JPEG. Par défaut : blanc.',
	tool_image_grayscale_preview_label: 'Aperçu',
	tool_image_grayscale_progress: 'Conversion en niveaux de gris…',
	tool_image_grayscale_step_decode: 'Décoder',
	tool_image_grayscale_step_gray: 'Convertir les pixels',
	tool_image_grayscale_step_encode: 'Encoder',
	tool_image_grayscale_decode_step: 'Lecture de l’image…',
	tool_image_grayscale_gray_step: 'Recalcul de chaque pixel…',
	tool_image_grayscale_encode_step: 'Enregistrement en {fmt}…',
	tool_image_grayscale_elapsed: 'Écoulé {s} s',
	tool_image_grayscale_empty: 'Choisissez d’abord une image.',
	tool_image_grayscale_err_decode: 'Ce fichier n’a pas pu être ouvert comme image. Essayez un JPEG, PNG ou WebP.',
	tool_image_grayscale_err_encode: 'L’image n’a pas pu être enregistrée. Essayez une image plus petite ou un autre format.',
	tool_image_grayscale_warn_large: 'Fichier volumineux (plus de 25 Mo) — la conversion peut être lente.',
	tool_image_grayscale_warn_edge: 'Un côté dépasse environ 8 192 px — certains navigateurs peuvent échouer à le traiter.',
	tool_image_grayscale_warn_animation: 'GIF animé : seule la première image est convertie.',
	tool_image_grayscale_status_working: 'Traitement…',
	tool_image_grayscale_status_done: 'Terminé — cliquez sur Télécharger pour enregistrer.',
	tool_image_grayscale_stats_tpl: '{w} × {h} px · {method} → {fmt} ({bytes})',
	tool_image_grayscale_how_title: 'Comment convertir une image en noir et blanc',
	tool_image_grayscale_how_body:
		'Pour chaque pixel, les valeurs rouge, vert et bleu sont remplacées par un seul gris, de sorte que R = G = B. La méthode décide du calcul de ce gris ; c’est pourquoi la même photo peut sortir plus claire, plus sombre ou plus plate.',
	tool_image_grayscale_how_item_1: 'Choisissez une photo ou déposez-la dans la zone.',
	tool_image_grayscale_how_item_2: 'Choisissez une méthode de niveaux de gris et une intensité ; cochez Afficher l’original pour comparer.',
	tool_image_grayscale_how_item_3: 'Cliquez sur Convertir en noir et blanc et attendez la barre de progression.',
	tool_image_grayscale_how_item_4: 'Cliquez sur Télécharger. Ouvrez d’abord les Réglages avancés si vous avez besoin de PNG, JPEG ou d’une autre qualité.',
	tool_image_grayscale_why_choose_title: 'Pourquoi utiliser ce convertisseur noir et blanc',
	tool_image_grayscale_why_choose_item_1:
		'Les pixels sont réécrits : le fichier téléchargé reste en noir et blanc dans n’importe quelle appli — contrairement à un filtre CSS ou à un réglage d’affichage.',
	tool_image_grayscale_why_choose_item_2:
		'Sept méthodes au lieu d’un filtre unique. Sur l’exemple, le rouge pur devient 76 en luminance Rec.601 mais 85 en moyenne simple — et la clarté transforme rouge, vert, bleu et jaune en le même gris 128.',
	tool_image_grayscale_why_choose_item_3:
		'Les modes mono-canal reproduisent des effets de filtre noir et blanc : le canal rouge assombrit les ciels bleus et adoucit la peau ; le bleu éclaircit les ciels et fait ressortir les taches de rousseur.',
	tool_image_grayscale_why_choose_item_4:
		'Le curseur d’intensité donne un rendu désaturé à moitié, pas seulement du noir et blanc total.',
	tool_image_grayscale_why_choose_item_5:
		'La transparence est conservée en PNG et WebP, et la photo est traitée dans cet onglet du navigateur, sans envoi au serveur.',
	tool_image_grayscale_rules_title: 'Formules de niveaux de gris utilisées',
	tool_image_grayscale_rules_body: 'R, G et B sont les valeurs 0–255 du pixel ; le résultat Y est écrit dans les trois canaux.',
	tool_image_grayscale_rules_item_1:
		'Luminance Rec.601 : Y = 0,299 R + 0,587 G + 0,114 B — la pondération classique TV et JPEG, la plus proche de la luminosité perçue de chaque couleur.',
	tool_image_grayscale_rules_item_2:
		'Luminance Rec.709 : Y = 0,2126 R + 0,7152 G + 0,0722 B — poids de la vidéo HD, aussi utilisés par le filtre CSS grayscale(). Comme la plupart des éditeurs, elle s’applique aux valeurs sRGB stockées sans linéarisation du gamma.',
	tool_image_grayscale_rules_item_3:
		'Moyenne : Y = (R + G + B) ÷ 3. Clarté : Y = (le plus grand + le plus petit) ÷ 2. Les modes canal copient R, G ou B seul.',
	tool_image_grayscale_rules_item_4:
		'Intensité s : nouvelle valeur = original + (Y − original) × s. À 100 %, chaque pixel est gris ; à 50 %, les couleurs sont à mi-chemin vers le gris.',
	tool_image_grayscale_rules_item_5:
		'L’alpha (transparence) est inchangé ; le JPEG le remplit avec la couleur de fond. Les GIF animés utilisent la première image. L’enregistrement réencode l’image.',
	tool_image_grayscale_example_title: 'Exemple',
	tool_image_grayscale_example:
		'L’exemple comporte des barres rouge, vert, bleu et jaune purs au-dessus d’une bande arc-en-ciel. Avec Rec.601 elles deviennent 76, 150, 29 et 226 — quatre gris nettement distincts. Rec.709 donne 54, 182, 18 et 237 ; la moyenne donne 85, 85, 85 et 170, donc rouge, vert et bleu se confondent ; la clarté ramène les quatre à 128. Changez de méthode pour voir l’aperçu, puis Convertir et Télécharger.',
	tool_image_grayscale_usecases_title: 'Quand l’utiliser',
	tool_image_grayscale_usecase_1:
		'Photos noir et blanc pour portraits, réseaux ou un look vintage — essayez le canal rouge pour un effet filtre argentique classique.',
	tool_image_grayscale_usecase_2:
		'Impression sur laser monochrome ou pour un journal : convertissez d’abord pour voir comment les couleurs se séparent en gris.',
	tool_image_grayscale_usecase_3:
		'Vérifier un graphique, un logo ou une palette d’interface : si deux couleurs deviennent le même gris, une personne daltonienne peut peiner à les distinguer.',
	tool_image_grayscale_usecase_4:
		'Préparer des scans et documents : les niveaux de gris enlèvent la dominante du papier et simplifient le fichier.',
	tool_image_grayscale_faq_q1: 'Est-ce la même chose que le filtre CSS grayscale() ou le filtre mono du téléphone ?',
	tool_image_grayscale_faq_a1:
		'CSS grayscale(100 %) utilise les mêmes poids que l’option Rec.709, mais ne change que l’affichage de la page ; le fichier reste en couleur. Les filtres téléphone ajoutent souvent contraste ou ton. Cet outil écrit des pixels gris dans un nouveau fichier.',
	tool_image_grayscale_faq_q2: 'Quelle méthode de niveaux de gris choisir ?',
	tool_image_grayscale_faq_a2:
		'Pour les photos, commencez par la luminance Rec.601 : elle pondère surtout le vert et peu le bleu, comme on perçoit la luminosité. Rec.709 est un peu plus claire dans les verts. Moyenne et clarté sont plus simples, mais peuvent aplatir des images très colorées. Utilisez un seul canal pour un effet filtre voulu.',
	tool_image_grayscale_faq_q3: 'Puis-je garder un peu de couleur ?',
	tool_image_grayscale_faq_a3:
		'Oui. Baissez l’intensité : 70–80 % donne un rendu fané et désaturé ; 0 % laisse la photo inchangée. Garder une seule couleur (couleur sélective) demande des masques, ce que cette page ne fait pas.',
	tool_image_grayscale_faq_q4: 'Pourquoi ma photo noir et blanc paraît plate ?',
	tool_image_grayscale_faq_a4:
		'Des couleurs qui ne diffèrent que par la teinte peuvent finir au même gris. Une fleur rouge sur des feuilles vertes est le cas classique : avec la moyenne les deux font 85. Passez à la luminance ou essayez le canal rouge ou vert pour les séparer.',
	tool_image_grayscale_faq_q5: 'Le fichier téléchargé est-il vraiment en niveaux de gris, et est-il plus petit ?',
	tool_image_grayscale_faq_a5:
		'Chaque pixel a R, G et B égaux, donc il s’affiche et s’imprime en gris pur. Les navigateurs l’enregistrent en RGB classique, pas en un seul canal, donc la baisse de taille est modeste — surtout pour le PNG. Utilisez un éditeur si vous avez besoin d’un mode couleur niveaux de gris 8 bits.',
	tool_image_grayscale_faq_q6: 'Que deviennent les PNG transparents ?',
	tool_image_grayscale_faq_a6:
		'La transparence est conservée lors du téléchargement PNG ou WebP. Le JPEG ne stocke pas la transparence : ces zones sont remplies avec la couleur de fond JPEG des Réglages avancés.',
	tool_image_grayscale_faq_q7: 'Ma photo est-elle envoyée quelque part ?',
	tool_image_grayscale_faq_a7:
		'Non. Décodage, conversion et enregistrement s’exécutent dans cet onglet du navigateur. Conservez l’original si vous pourriez vouloir la version couleur — le téléchargement gris ne peut pas redevenir coloré.',
	tool_image_grayscale_article: 'Image en niveaux de gris',
	tool_image_grayscale_ref_a_label: 'Wikipedia — Niveaux de gris (conversion couleur vers gris)',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — matrice grayscale()',
};

export default fr;
