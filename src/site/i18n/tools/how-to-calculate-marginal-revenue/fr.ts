/**
 * i18n tool shard (how-to-calculate-marginal-revenue / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_marginal_revenue_article:
    'Le revenu marginal est la variation du revenu total lorsque la quantité change. Ce calculateur montre la dérivation discrète entre deux points.',
  tool_marginal_revenue_calculate: 'Calculer MR',
  tool_marginal_revenue_description:
    'Calculez le revenu marginal avec MR = ΔRT / ΔQ. Processus : saisissez quantité et revenu total en deux points, obtenez ΔRT et ΔQ, puis divisez. Exemple : Q 10→11, RT 1000→1080 → MR = 80. Usage éducatif uniquement — pas un conseil tarifaire.',
  tool_marginal_revenue_detail_tpl: 'ΔRT = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_disclaimer:
    'Ce calculateur sert à apprendre des concepts de microéconomie. Ce n’est pas un conseil commercial, tarifaire ou d’investissement.',
  tool_marginal_revenue_example: 'Exemple : Q₁ = 10, RT₁ = 1000 ; Q₂ = 11, RT₂ = 1080 → ΔRT = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_example_title: 'Exemple',
  tool_marginal_revenue_faq_a1: 'MR = ΔRT / ΔQ avec ΔRT = RT₂ − RT₁ et ΔQ = Q₂ − Q₁. Dérivation discrète, pas une dérivée continue.',
  tool_marginal_revenue_faq_a2: 'Non. Cet outil ne donne pas de conseil tarifaire ou de production ; le coût marginal compte aussi.',
  tool_marginal_revenue_faq_a3: 'Le MR est indéfini si la quantité ne change pas. Choisissez deux quantités distinctes.',
  tool_marginal_revenue_faq_a4:
    'Le revenu moyen est RT / Q à un niveau. Le marginal est la variation de RT quand Q change ; ils ne coïncident que dans des cas particuliers.',
  tool_marginal_revenue_faq_q1: 'Comment le revenu marginal est-il dérivé ici ?',
  tool_marginal_revenue_faq_q2: 'Un MR positif signifie-t-il augmenter la production ?',
  tool_marginal_revenue_faq_q3: 'Que se passe-t-il si ΔQ = 0 ?',
  tool_marginal_revenue_faq_q4: 'Différence avec le revenu moyen ?',
  tool_marginal_revenue_formula_body:
    'Par définition, le revenu marginal mesure comment le revenu total change quand la quantité change. Avec deux points :',
  tool_marginal_revenue_formula_item_1: 'ΔRT = RT₂ − RT₁ (variation du revenu total)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (variation de quantité)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔRT / ΔQ si ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Un pas discret approxime le MR moyen sur l’intervalle ; les modèles continus utilisent dRT/dQ. Un MR négatif signifie un revenu en baisse quand la quantité monte.',
  tool_marginal_revenue_formula_title: 'Dérivation de la formule',
  tool_marginal_revenue_how_body:
    'Saisissez quantité et revenu total pour le palier 1 puis le palier 2. L’outil calcule ΔRT = RT2 − RT1, ΔQ = Q2 − Q1 et MR = ΔRT / ΔQ dans le navigateur.',
  tool_marginal_revenue_how_title: 'Fonctionnement',
  tool_marginal_revenue_q1_label: 'Quantité (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'ex. 10',
  tool_marginal_revenue_q2_label: 'Quantité (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'ex. 11',
  tool_marginal_revenue_quantity_label: 'Quantité',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Revenu marginal (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principes de microéconomie (concurrence)',
  tool_marginal_revenue_references: 'Entrée Investopedia sur le revenu marginal ; traitement introductif de MR = ΔRT/ΔQ (ex. OpenStax).',
  tool_marginal_revenue_result_label: 'Revenu marginal',
  tool_marginal_revenue_revenue_label: 'Revenu total',
  tool_marginal_revenue_title: 'Calculateur de revenu marginal — Formule ΔRT / ΔQ',
  tool_marginal_revenue_tr1_label: 'Revenu total (RT₁)',
  tool_marginal_revenue_tr1_placeholder: 'ex. 1000',
  tool_marginal_revenue_tr2_label: 'Revenu total (RT₂)',
  tool_marginal_revenue_tr2_placeholder: 'ex. 1080',
  tool_marginal_revenue_usecase_1: 'Devoirs : vérifier un tableau quantité/revenu à deux niveaux.',
  tool_marginal_revenue_usecase_2: 'Estimation rapide : variation de revenu quand la production augmente d’une unité.',
  tool_marginal_revenue_usecase_3: 'Comparer revenu marginal et revenu moyen en microéconomie introductive.',
  tool_marginal_revenue_usecases_title: 'Cas d’usage',
  tool_marginal_revenue_zero_dq: 'ΔQ = 0 — la quantité doit changer entre les deux points.',
};
export default fr;
