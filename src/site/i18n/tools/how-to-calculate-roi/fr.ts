/**
 * i18n tool shard (how-to-calculate-roi / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_roi_article:
    'Le ROI simple exprime le gain net par rapport au coût en pourcentage. Utile pour un bilan approximatif de campagne ou de projet ; pas d’IRR/VAN multipériode.',
  tool_roi_calculate: 'Calculer',
  tool_roi_description:
    'Calculez le ROI simple avec (Gain − Coût) / Coût × 100 %, ou (Valeur finale − Initiale) / Initiale × 100 %. Processus : saisissez le coût et la valeur finale (ou le gain net), puis examinez les hypothèses fiscales, de frais et de temps. Exemple : coût 1000, finale 1300 → ROI 30 %. Illustration éducative uniquement — pas un conseil d’investissement.',
  tool_roi_disclaimer:
    'Les résultats de ROI sont des illustrations éducatives uniquement et ne constituent pas un conseil d’investissement, fiscal ou financier. Les rendements passés ou hypothétiques ne garantissent pas les résultats futurs.',
  tool_roi_example: 'Exemple : coût 1000, valeur finale 1300 → gain 300 → ROI = 300 / 1000 × 100 % = 30 %.',
  tool_roi_example_title: 'Exemple',
  tool_roi_faq_a1:
    'Nous n’estimons ni impôts ni frais — intégrez-les vous-même. Le ROI simple n’annualise pas non plus la période.',
  tool_roi_faq_a2: 'ROI = (Finale − Initiale) / Initiale × 100 %, ou Gain net / Coût × 100 % si vous saisissez le gain.',
  tool_roi_faq_a3: 'Le ROI est indéfini (division par zéro). Saisissez un coût positif.',
  tool_roi_faq_a4: 'Non. Les résultats sont des illustrations éducatives uniquement.',
  tool_roi_faq_q1: 'Quels impôts, frais et délai ?',
  tool_roi_faq_q2: 'Quelle formule est utilisée ?',
  tool_roi_faq_q3: 'Et si le coût est nul ?',
  tool_roi_faq_q4: 'Est-ce un conseil d’investissement ?',
  tool_roi_final_label: 'Valeur finale',
  tool_roi_final_placeholder: 'ex. 1300',
  tool_roi_formula_body:
    'ROI = (Valeur finale − Investissement initial) / Investissement initial × 100 %, ou Gain net / Coût × 100 %. À retenir :',
  tool_roi_formula_item_1: 'Impôts : non estimés — saisissez des montants après impôts si besoin.',
  tool_roi_formula_item_2: 'Temps : le ROI simple ignore la durée de détention ; ce n’est pas un rendement annualisé.',
  tool_roi_formula_item_3: 'Frais : intégrez commissions et frais de plateforme dans le coût ou la valeur finale.',
  tool_roi_formula_item_4: 'Flux multipériodes et IRR/VAN hors périmètre de ce pourcentage mono-période.',
  tool_roi_formula_title: 'Formule et hypothèses',
  tool_roi_gain_label: 'Gain net (facultatif)',
  tool_roi_gain_placeholder: 'S’il est connu, remplace finale − initiale',
  tool_roi_how_body:
    'Saisissez le coût et la valeur finale ou un gain net connu. ROI = net / coût × 100 %. Sans gain, net = finale − initiale. Coût nul refusé.',
  tool_roi_how_title: 'Fonctionnement',
  tool_roi_initial_label: 'Investissement initial (coût)',
  tool_roi_initial_placeholder: 'ex. 1000',
  tool_roi_interpret_negative: 'ROI négatif (perte par rapport au coût) — illustration éducative uniquement.',
  tool_roi_interpret_positive: 'ROI positif (gain par rapport au coût) — illustration éducative uniquement.',
  tool_roi_interpret_zero: 'ROI nul — ni gain ni perte sur ces entrées.',
  tool_roi_ref_guide_label: 'Investopedia — Guide de calcul du ROI',
  tool_roi_ref_investopedia_label: 'Investopedia — Retour sur investissement (ROI)',
  tool_roi_references: 'Définitions et guides Investopedia sur le ROI ; ROI simple = gain net / coût.',
  tool_roi_result_label: 'ROI',
  tool_roi_title: 'Calculateur de ROI — Calculer le retour sur investissement',
  tool_roi_usecase_1: 'Marketing : ROI approximatif d’une campagne quand dépense et revenus attribués sont connus.',
  tool_roi_usecase_2: 'Cours : s’entraîner au pourcentage ROI de base avec des chiffres fixes.',
  tool_roi_usecase_3: 'Bilan de projet : résumer une initiative en une paire coût/gain (estimation seulement).',
  tool_roi_usecases_title: 'Cas d’usage',
  tool_roi_zero_cost: 'L’investissement initial doit être supérieur à zéro.',
};
export default fr;
