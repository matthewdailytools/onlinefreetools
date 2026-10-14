/**
 * i18n tool shard (flip-image / fr).
 * 法语用户检索「retourner image / miroir horizontal」；按钮 Retourner / Télécharger。
 * 键集须与 en.ts 完全一致；仅编辑本工具键。
 */
import type { SiteLangDict } from '../../../types';

/** 法语文案字典（retourner / miroir，本地 Canvas 处理）。 */
const fr: SiteLangDict = {
	tool_flip_image_title: 'Retourner une image — miroir horizontal ou vertical',
	tool_flip_image_desc: 'Miroir gauche-droite ou haut-bas dans l’onglet, puis téléchargement JPEG, WebP ou PNG — sans envoi au serveur.',
	tool_flip_image_description:
		'Retournez une photo en miroir horizontal ou vertical dans le navigateur, sans l’envoyer au serveur. Étapes : choisissez l’image, cochez le sens, cliquez sur Retourner, puis Télécharger. Exemple : sur la grille A/B/C/D, le A passe à droite. Utile pour corriger un selfie en miroir.',
	tool_flip_image_choose_file: 'Choisir une image',
	tool_flip_image_drop_hint: 'Ou déposez un JPEG, PNG, WebP ou GIF ici. Le traitement reste dans cet onglet.',
	tool_flip_image_flip: 'Retourner',
	tool_flip_image_download: 'Télécharger',
	tool_flip_image_sample: 'Charger un exemple',
	tool_flip_image_clear: 'Effacer',
	tool_flip_image_flip_h: 'Retourner horizontalement',
	tool_flip_image_flip_v: 'Retourner verticalement',
	tool_flip_image_advanced: 'Réglages avancés (facultatif)',
	tool_flip_image_format_label: 'Format de sortie',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint: 'WebP reste léger avec transparence. PNG est sans perte. JPEG exige une couleur de fond.',
	tool_flip_image_quality_label: 'Qualité',
	tool_flip_image_quality_hint: 'S’applique au JPEG et au WebP uniquement. Le PNG ignore ce curseur.',
	tool_flip_image_jpeg_bg_label: 'Fond JPEG',
	tool_flip_image_jpeg_bg_hint: 'Remplit les pixels transparents avant l’export JPEG. Blanc par défaut.',
	tool_flip_image_preview_label: 'Aperçu',
	tool_flip_image_progress: 'Retournement de l’image…',
	tool_flip_image_step_decode: 'Lecture',
	tool_flip_image_step_flip: 'Miroir des pixels',
	tool_flip_image_step_encode: 'Encodage',
	tool_flip_image_decode_step: 'Lecture de l’image…',
	tool_flip_image_flip_step: 'Application du miroir…',
	tool_flip_image_encode_step: 'Encodage en {fmt}…',
	tool_flip_image_elapsed: 'Écoulé : {s} s',
	tool_flip_image_empty: 'Choisissez d’abord une image.',
	tool_flip_image_no_flip: 'Cochez Retourner horizontalement et/ou Retourner verticalement.',
	tool_flip_image_err_decode: 'Impossible de lire l’image. Essayez JPEG, PNG ou WebP.',
	tool_flip_image_err_encode: 'Export impossible. Essayez une image plus petite ou un autre format.',
	tool_flip_image_warn_large: 'Fichier volumineux (> 25 Mo) — cela peut être lent.',
	tool_flip_image_warn_edge: 'Un côté dépasse ~8192 px — certains navigateurs peuvent échouer.',
	tool_flip_image_warn_animation: 'GIF animé : seule la première image est utilisée.',
	tool_flip_image_status_working: 'Traitement…',
	tool_flip_image_status_done: 'Terminé — cliquez sur Télécharger pour enregistrer.',
	tool_flip_image_stats_tpl: 'Retournée {w}×{h} → {fmt} ({bytes})',
	tool_flip_image_how_title: 'Comment retourner une image',
	tool_flip_image_how_body:
		'Retourner, c’est faire un miroir : la photo se reflète sur un axe, elle ne pivote pas d’un angle. Les pixels sont redessinés pour de bon, puis enregistrés dans le format choisi dans les réglages avancés.',
	tool_flip_image_how_item_1: 'Cliquez sur Choisir une image ou déposez un JPEG, PNG, WebP ou GIF dans la zone.',
	tool_flip_image_how_item_2: 'Cochez Retourner horizontalement (gauche ↔ droite) et/ou Retourner verticalement (haut ↔ bas). L’aperçu se met à jour tout de suite.',
	tool_flip_image_how_item_3: 'Au besoin, ouvrez Réglages avancés pour choisir JPEG, WebP ou PNG, la qualité et la couleur de fond JPEG.',
	tool_flip_image_how_item_4: 'Cliquez sur Retourner, attendez la barre de progression, puis cliquez sur Télécharger.',
	tool_flip_image_why_choose_title: 'Pourquoi utiliser Retourner une image',
	tool_flip_image_why_choose_item_1: 'Export JPEG, WebP ou PNG avec qualité et fond JPEG dans les réglages avancés — pas seulement un aperçu figé.',
	tool_flip_image_why_choose_item_2: 'Aperçu en direct : vous voyez de quel côté passe chaque détail avant de télécharger.',
	tool_flip_image_why_choose_item_3: 'Horizontal et vertical en une passe ; cocher les deux équivaut à une rotation de 180° sur une photo rectangulaire.',
	tool_flip_image_why_choose_item_4: 'Tout reste sur l’appareil : aucun envoi au serveur, le traitement se fait dans cet onglet.',
	tool_flip_image_why_choose_item_5: 'Alertes discrètes pour les très gros fichiers, les bords énormes et les GIF animés (première image seule).',
	tool_flip_image_rules_title: 'Règles du miroir',
	tool_flip_image_rules_body:
		'Un canevas à la taille de la source reçoit l’image retournée sur l’axe choisi, puis le fichier est généré dans le format de sortie.',
	tool_flip_image_rules_item_1: 'Horizontal : réflexion sur l’axe vertical — la gauche devient la droite.',
	tool_flip_image_rules_item_2: 'Vertical : réflexion sur l’axe horizontal — le haut devient le bas.',
	tool_flip_image_rules_item_3: 'Les deux cases cochées = équivalent d’une rotation de 180° (les coins s’échangent en diagonale).',
	tool_flip_image_rules_item_4: 'GIF animé : première image seulement ; PNG et WebP gardent la transparence ; JPEG remplit avec la couleur de fond.',
	tool_flip_image_rules_item_5: 'Le miroir ne fait que réordonner les pixels ; un export JPEG ou WebP recomprime et peut changer la taille du fichier.',
	tool_flip_image_example_title: 'Exemple',
	tool_flip_image_example:
		'Charger un exemple crée une grille 480×320 étiquetée A B / C D. Avec Retourner horizontalement (par défaut), cliquez sur Retourner : le A passe à droite. Téléchargez, ou cochez aussi Retourner verticalement et cliquez à nouveau sur Retourner — le A se retrouve en bas à droite, comme après une rotation de 180°.',
	tool_flip_image_usecases_title: 'Quand s’en servir',
	tool_flip_image_usecase_1: 'Corriger un selfie que la caméra frontale a enregistré en miroir, pour que le texte du t-shirt se lise correctement.',
	tool_flip_image_usecase_2: 'Inverser gauche/droite sur une maquette produit pour placer le bouton d’action du bon côté.',
	tool_flip_image_usecase_3: 'Remettre à l’endroit une page scannée ou photographiée à l’envers avec Retourner verticalement.',
	tool_flip_image_usecase_4: 'Préparer une variante miroir pour l’impression (transfert, sérigraphie) sans ouvrir un logiciel de bureau.',
	tool_flip_image_faq_q1: 'Les images sont-elles envoyées sur un serveur ?',
	tool_flip_image_faq_a1:
		'Non. Lecture, miroir et export se font dans l’onglet du navigateur. Les scripts se chargent depuis le dossier vendor de ce site uniquement si besoin ; les octets de votre fichier restent sur l’appareil.',
	tool_flip_image_faq_q2: 'La qualité est-elle dégradée ?',
	tool_flip_image_faq_a2:
		'Le miroir lui-même ne fait que réordonner les pixels. Un enregistrement JPEG ou WebP recomprime et peut modifier le fichier. Pour un téléchargement sans perte, choisissez PNG dans les réglages avancés.',
	tool_flip_image_faq_q3: 'Retourner ou pivoter ?',
	tool_flip_image_faq_a3:
		'Retourner = miroir sur un axe. Pivoter = tourner d’un angle. Cette page ne fait que le miroir — utilisez un outil de rotation pour des pas de 90°.',
	tool_flip_image_faq_q4: 'Puis-je retourner dans les deux sens ?',
	tool_flip_image_faq_a4:
		'Oui. Cochez Retourner horizontalement et Retourner verticalement ensemble. Sur une photo rectangulaire, c’est l’équivalent d’une rotation de 180°.',
	tool_flip_image_faq_q5: 'Et les GIF animés ?',
	tool_flip_image_faq_a5:
		'Seule la première image est lue et retournée. L’animation multi-images n’est pas conservée dans le téléchargement.',
	tool_flip_image_faq_q6: 'Pourquoi le JPEG diffère de l’aperçu ?',
	tool_flip_image_faq_a6:
		'Le JPEG n’a pas de transparence. Les pixels transparents sont remplis avec la couleur de fond JPEG avant l’encodage. L’aperçu de cette page utilise un damier pour la transparence.',
	tool_flip_image_faq_q7: 'Retourner une image, ou plutôt recadrer / niveaux de gris ?',
	tool_flip_image_faq_a7:
		'Cette page ne fait que le miroir. Recadrer coupe les bords ; niveaux de gris enlèvent la couleur. Utilisez Recadrer et redimensionner une image ou Niveaux de gris parmi les outils liés.',
	tool_flip_image_article:
		'Miroir local horizontal et vertical : les pixels sont redessinés, pas seulement retournés en CSS.',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

/** 默认导出：供 merge:tools 合并进站点 fr 字典。 */
export default fr;
