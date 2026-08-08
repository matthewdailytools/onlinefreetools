/**
 * i18n tool shard (how-to-calculate-bmi / fr). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const fr: SiteLangDict = {
  tool_bmi_article:
    'Calculateur gratuit qui montre comment l\'IMC adulte se déduit du poids et de la taille : formules, seuils, limites (sportifs, enfants). Le calcul reste dans votre navigateur, sans envoi de données.',
  tool_bmi_calculate: 'Calculer l\'IMC',
  tool_bmi_description:
    'Calculez l\'indice de masse corporelle (IMC) avec la formule de dépistage adulte. Étapes : choisissez métrique ou impérial, saisissez poids et taille, obtenez l\'IMC puis comparez aux catégories courantes. Exemple : 70 kg et 175 cm → IMC 22,9 (normal). Usage éducatif — pas un diagnostic.',
  tool_bmi_disclaimer:
    'Ce calculateur d\'IMC sert uniquement au dépistage éducatif chez l\'adulte. Ce n\'est pas un avis médical, ne diagnostique pas une maladie et ne remplace pas un professionnel de santé.',
  tool_bmi_example:
    'Exemple (métrique) : poids 70 kg, taille 175 cm → taille = 1,75 m → IMC = 70 / (1,75²) ≈ 22,9 → bande normale de dépistage.',
  tool_bmi_example_title: 'Exemple',
  tool_bmi_faq_a1: 'Métrique : IMC = poids(kg) / taille(m)². Impérial : IMC = 703 × poids(lb) / taille(in)².',
  tool_bmi_faq_a2:
    'Seuils adultes courants : insuffisance <18,5 ; normal 18,5–24,9 ; surpoids 25–29,9 ; obésité ≥30. Ce sont des repères de dépistage, pas un diagnostic.',
  tool_bmi_faq_a3:
    'Pas toujours. L\'IMC ne distingue pas muscle et graisse. Un sportif peut être en bande élevée avec peu de graisse — demandez un avis personnalisé.',
  tool_bmi_faq_a4:
    'Ces seuils adultes ne conviennent pas aux mineurs ni à la grossesse. Utilisez des courbes par âge et un suivi clinique.',
  tool_bmi_faq_q1: 'Quelle est la formule de l\'IMC ?',
  tool_bmi_faq_q2: 'Que signifient les catégories d\'IMC ?',
  tool_bmi_faq_q3: 'L\'IMC convient-il aux sportifs ?',
  tool_bmi_faq_q4: 'Puis-je l\'utiliser pour un enfant ou une grossesse ?',
  tool_bmi_formula_body:
    'Métrique : IMC = poids (kg) ÷ taille (m)². Impérial : IMC = 703 × poids (lb) ÷ taille (in)². Les seuils adultes reprennent des bandes de dépistage largement publiées.',
  tool_bmi_formula_item_1: 'Insuffisance pondérale : IMC < 18,5',
  tool_bmi_formula_item_2: 'Normal : IMC 18,5–24,9',
  tool_bmi_formula_item_3: 'Surpoids : IMC 25–29,9',
  tool_bmi_formula_item_4: 'Obésité : IMC ≥ 30',
  tool_bmi_formula_title: 'Formule IMC et catégories adultes',
  tool_bmi_height_label: 'Taille (cm)',
  tool_bmi_height_placeholder: 'Saisissez la taille en centimètres',
  tool_bmi_how_body:
    'Choisissez métrique ou impérial, entrez poids et taille, puis calculez. L\'outil applique la formule adulte standard, affiche un décimal et place le résultat dans les bandes de dépistage usuelles. Tout se fait localement ; vos mesures ne sont pas transmises.',
  tool_bmi_how_title: 'Fonctionnement',
  tool_bmi_ref_cdc_label: 'CDC — Catégories d\'IMC chez l\'adulte',
  tool_bmi_ref_who_label: 'OMS — Fiche d\'information sur l\'obésité et le surpoids',
  tool_bmi_references:
    'Fiche OMS sur l\'obésité et le surpoids ; guide CDC sur les catégories d\'IMC adulte ; formules métriques et impériales standard.',
  tool_bmi_title: 'Calculateur d\'IMC — Comment calculer l\'indice de masse corporelle',
  tool_bmi_usecase_1: 'Auto-contrôle avant une visite médicale de routine (dépistage uniquement).',
  tool_bmi_usecase_2: 'Noter un IMC de référence en début de programme sportif.',
  tool_bmi_usecase_3: 'Vérifier la même mesure en unités métriques et impériales.',
  tool_bmi_usecases_title: 'Usages typiques',
  tool_bmi_weight_label: 'Poids (kg)',
  tool_bmi_weight_placeholder: 'Saisissez le poids en kilogrammes',
};
export default fr;
