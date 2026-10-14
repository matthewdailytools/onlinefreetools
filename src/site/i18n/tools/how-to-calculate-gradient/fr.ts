/**
 * i18n tool shard (how-to-calculate-gradient / fr).
 * Gradient multivarié en français : ∇f en un point, processus, norme et direction unitaire ; pas une pente entre deux points.
 */
import type { SiteLangDict } from '../../../types';

/** Dictionnaire de copy en français. */
const fr: SiteLangDict = {
	tool_gradient_title: "Calcul de gradient — ∇f multivarié en un point",
	tool_gradient_desc: "Évalue le gradient ∇f d’une fonction scalaire démo en un point (x, y).",
	tool_gradient_description:
		"Calculer le gradient multivarié ∇f comme vecteur des dérivées partielles, avec processus, étapes et norme. Exemple : pour f(x,y)=x²y+3y en (1,2), ∂f/∂x=4 et ∂f/∂y=4 donc ∇f=(4,4) avec |∇f|≈5,6569. Inclut la formule symbolique. Ce n’est pas une calculatrice de pente entre deux points.",
	tool_gradient_calculate: "Évaluer ∇f",
	tool_gradient_sample: "Charger un exemple",
	tool_gradient_clear: "Effacer",
	tool_gradient_fn_label: "Fonction démo",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "ex. 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "ex. 2",
	tool_gradient_result_label: "Gradient en votre point",
	tool_gradient_work_label: "Développement",
	tool_gradient_mag_label: "Norme |∇f|",
	tool_gradient_unit_label: "Direction unitaire",
	tool_gradient_result_note: "Évalué en ({x}, {y}). ∇f pointe vers la plus forte augmentation locale de f.",
	tool_gradient_zero_mag: "∇f = 0 (point critique — pas de direction unique)",
	tool_gradient_invalid_input: "Saisissez des valeurs numériques finies pour x et y.",
	tool_gradient_how_title: "Comment calculer un gradient multivarié",
	tool_gradient_how_body:
		"Pour un scalaire f(x,y), dérivez par rapport à chaque variable en maintenant l’autre fixe, empilez les partielles dans ∇f, puis substituez votre point. Le cadre utilise des fonctions démo fixes pour vérifier l’arithmétique.",
	tool_gradient_how_item_1: "Choisissez une fonction démo et lisez le ∇f symbolique affiché dessous.",
	tool_gradient_how_item_2: "Entrez les coordonnées (x, y) où vous voulez le vecteur.",
	tool_gradient_how_item_3: "Cliquez sur Évaluer ∇f.",
	tool_gradient_how_item_4: "Lisez ∇f, le développement de chaque partielle, la norme |∇f| et la direction unitaire.",
	tool_gradient_why_choose_title: "Pourquoi utiliser notre Calcul de gradient — ∇f multivarié en un point",
	tool_gradient_why_choose_item_1: "Quatre fonctions démo avec partielles symboliques prêtes — pas un CAS symbolique vide.",
	tool_gradient_why_choose_item_2: "Le développement de chaque composante est visible, utile pour vérifier un devoir.",
	tool_gradient_why_choose_item_3: "Norme et vecteur unitaire relient ∇f à la direction de plus forte montée.",
	tool_gradient_why_choose_item_4: "Modèle clair : ∇f du calcul multivarié, pas une pente entre deux points.",
	tool_gradient_why_choose_item_5: "Tourne dans votre navigateur ; rien n’est envoyé au serveur.",
	tool_gradient_formula_title: "Formule du gradient multivarié",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). En deux variables : ∇f(x,y) = (∂f/∂x, ∂f/∂y). La direction de ∇f est la plus forte montée ; −∇f sert en descente de gradient.",
	tool_gradient_formula_item_1: "Calculez ∂f/∂xᵢ pour chaque variable, les autres étant tenues constantes.",
	tool_gradient_formula_item_2: "Assemblez les composantes dans le vecteur ∇f.",
	tool_gradient_formula_item_3: "Évaluez au point. Exemple : f=x²y+3y en (1,2) → (4, 4).",
	tool_gradient_formula_item_4: "Norme |∇f| = √(gx² + gy²). Exemple : √(16+16) = √32 ≈ 5,6569.",
	tool_gradient_example_title: "Exemple",
	tool_gradient_example:
		"Pour f(x,y)=x²y+3y, les partielles sont ∂f/∂x=2xy et ∂f/∂y=x²+3. En (1,2) : ∂f/∂x=2·1·2=4, ∂f/∂y=1+3=4, donc ∇f=(4,4). La norme est √32≈5,6569 et la direction unitaire (4/√32, 4/√32)≈(0,7071, 0,7071). Passez à f=x²+y² au même point pour obtenir ∇f=(2,4).",
	tool_gradient_usecases_title: "Quand l’utiliser",
	tool_gradient_usecase_1: "Vérifier des partielles de devoir avant une étape d’optimisation.",
	tool_gradient_usecase_2: "Expliquer la descente de gradient : chaque pas va à l’opposé de ∇loss aux paramètres courants.",
	tool_gradient_usecase_3: "Intuition physique ou de champs : ∇f pointe où le champ scalaire croît le plus vite.",
	tool_gradient_usecase_4: "Savoir si un point est critique (|∇f|=0) sur une surface démo simple.",
	tool_gradient_faq_q1: "Qu’est-ce qu’un gradient en calcul multivarié ?",
	tool_gradient_faq_a1:
		"Le gradient ∇f est le vecteur des dérivées partielles premières. Il pointe vers la plus forte augmentation locale de f, et sa longueur |∇f| mesure la pente de cette hausse.",
	tool_gradient_faq_q2: "Comment calculer ∇f à la main ?",
	tool_gradient_faq_a2:
		"Dérivez par rapport à chaque variable en maintenant les autres constantes, formez le vecteur, puis évaluez en votre point. Pour f=x²y+3y on obtient (2xy, x²+3).",
	tool_gradient_faq_q3: "Est-ce le même « gradient » que en ML (descente de gradient) ?",
	tool_gradient_faq_a3:
		"Le même objet mathématique : ∇ d’une loss scalaire. Les pas de descente vont en −∇loss. Cette page enseigne la définition de calcul sur des démos — elle n’entraîne pas un modèle.",
	tool_gradient_faq_q4: "Est-ce une calculatrice de pente entre deux points ?",
	tool_gradient_faq_a4:
		"Non. La pente entre deux points relève de l’outil de pente. Ici ∇f est le vecteur des dérivées partielles d’un champ scalaire multivarié.",
	tool_gradient_faq_q5: "Que signifie |∇f| = 0 ?",
	tool_gradient_faq_a5:
		"Un gradient nul est un point critique : il n’y a pas de direction unique de plus forte montée. Essayez f=x²+y² en (0,0) : ∇f=(0,0).",
	tool_gradient_faq_q6: "Pourquoi seulement des fonctions démo ?",
	tool_gradient_faq_a6:
		"Différencier des expressions arbitraires demande un CAS. Des démos fixes rendent l’arithmétique vérifiable et centrent la page sur la définition de ∇f.",
	tool_gradient_faq_q7: "Radians ou degrés pour sin et cos ?",
	tool_gradient_faq_a7:
		"La démo sin(x)+cos(y) utilise les radians, comme en calcul standard. cos(1)≈0,5403, pas cos(1°).",
	tool_gradient_article:
		"Le gradient d’une fonction scalaire multivariée est le vecteur de ses dérivées partielles premières. Il pointe vers la plus forte augmentation locale et fonde l’optimisation par gradient.",
	tool_gradient_references: "Références Wikipedia et Khan Academy sur le gradient multivarié.",
	tool_gradient_ref_wiki_label: "Wikipedia — Gradient",
	tool_gradient_ref_khan_label: "Khan Academy — The gradient",
};

export default fr;
