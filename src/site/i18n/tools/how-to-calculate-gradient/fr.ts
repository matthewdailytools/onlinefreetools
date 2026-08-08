/**
 * i18n tool shard (how-to-calculate-gradient / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_gradient_article:
    'Le gradient d’une fonction scalaire multivariable est le vecteur de ses dérivées partielles premières. Il pointe vers la plus forte hausse locale. Cette page n’est pas un calculateur de pente entre deux points.',
  tool_gradient_calculate: 'Évaluer ∇f',
  tool_gradient_desc:
    'Calculez le gradient ∇f d’un champ scalaire comme vecteur de dérivées partielles. Processus : dériver pour chaque variable, assembler ∇f, évaluer en un point. Démo f(x,y)=x²y+3y → ∇f=(2xy, x²+3) ; en (1,2) → (4,4). Utile en optimisation et descente de gradient ML.',
  tool_gradient_description:
    'Calculez le gradient ∇f d’un champ scalaire comme vecteur de dérivées partielles. Processus : dériver pour chaque variable, assembler ∇f, évaluer en un point. Démo f(x,y)=x²y+3y → ∇f=(2xy, x²+3) ; en (1,2) → (4,4). Utile en optimisation et descente de gradient ML.',
  tool_gradient_example: 'f(x,y)=x²y+3y. Partielles : ∂f/∂x=2xy, ∂f/∂y=x²+3. En (1,2) : ∇f=(4,4).',
  tool_gradient_example_title: 'Exemple',
  tool_gradient_faq_a1: '∇f est le vecteur des dérivées partielles et pointe vers la plus forte hausse locale.',
  tool_gradient_faq_a2: 'Dérivez pour chaque variable en fixant les autres, formez le vecteur, évaluez en un point.',
  tool_gradient_faq_a3:
    'Oui, le même objet : ∇ d’une perte scalaire. La page enseigne la définition, elle n’entraîne pas un modèle.',
  tool_gradient_faq_a4: 'Non. La pente rise/run est un autre outil ; ici ∇f est le vecteur de partielles.',
  tool_gradient_faq_q1: 'Qu’est-ce qu’un gradient en calcul multivariable ?',
  tool_gradient_faq_q2: 'Comment le calculer à la main ?',
  tool_gradient_faq_q3: 'Est-ce le même « gradient » qu’en ML ?',
  tool_gradient_faq_q4: 'Est-ce un calculateur de pente entre deux points ?',
  tool_gradient_fn_hint: 'Fonction démo (fixe dans la boîte interactive) :',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). À deux variables : ∇f(x,y)=(∂f/∂x, ∂f/∂y). ∇f = montée la plus raide ; −∇f sert à la descente de gradient.',
  tool_gradient_formula_item_1: 'Calculer ∂f/∂xᵢ pour chaque variable',
  tool_gradient_formula_item_2: 'Assembler le vecteur ∇f',
  tool_gradient_formula_item_3: 'Évaluer les composantes au point',
  tool_gradient_formula_item_4: 'Démo : f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: 'Formule du gradient multivariable',
  tool_gradient_how_body:
    'Pour un scalaire f, calculez chaque partielle ∂f/∂xᵢ en fixant les autres, empilez-les dans ∇f, puis substituez les coordonnées. La boîte utilise f(x,y)=x²y+3y pour vérifier à la main.',
  tool_gradient_how_title: 'Comment ça marche',
  tool_gradient_invalid_input: 'Saisissez des x et y numériques finis.',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_ref_wiki_label: 'Wikipédia — Gradient',
  tool_gradient_result_label: 'Gradient en votre point',
  tool_gradient_result_note: 'Évalué f(x,y)=x²y+3y en ({x}, {y}).',
  tool_gradient_title: 'Calculateur de gradient — ∇f multivariable (dérivées partielles)',
  tool_gradient_usecase_1: 'Vérifier des partielles de devoir avant l’étape d’optimisation.',
  tool_gradient_usecase_2: 'Expliquer la descente de gradient : chaque pas va à l’opposé de ∇loss.',
  tool_gradient_usecase_3: 'Intuition physique : ∇f pointe où le champ scalaire croît le plus vite.',
  tool_gradient_usecases_title: 'Optimisation & apprentissage automatique',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'ex. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'ex. 2',
};
export default fr;
