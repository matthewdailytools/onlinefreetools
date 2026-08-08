/**
 * i18n tool shard (how-to-calculate-bmi / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_bmi_article:
    'This free BMI calculator shows how adult Body Mass Index is computed from weight and height, including metric and imperial formulas, category cutoffs, and clear limits (athletes, children). Results stay in your browser.',
  tool_bmi_calculate: 'Calculate BMI',
  tool_bmi_description:
    'Calculate Body Mass Index (BMI) with the adult screening formula. Process: pick metric or imperial units, enter weight and height, compute BMI, then map to common adult categories. Example: 70 kg and 175 cm → BMI 22.9 (Normal). Educational screening only — not a diagnosis.',
  tool_bmi_disclaimer:
    'This BMI calculator is for educational adult screening only. It is not medical advice, does not diagnose disease, and does not replace care from a qualified health professional.',
  tool_bmi_example:
    'Example (metric): weight 70 kg, height 175 cm → height = 1.75 m → BMI = 70 / (1.75²) ≈ 22.9 → Normal screening band.',
  tool_bmi_example_title: 'Example',
  tool_bmi_faq_a1: 'Metric: BMI = weight(kg) / height(m)². Imperial: BMI = 703 × weight(lb) / height(in)².',
  tool_bmi_faq_a2:
    'Common adult screening cutoffs: underweight <18.5, normal 18.5–24.9, overweight 25–29.9, obesity ≥30. Bands are aids, not diagnoses.',
  tool_bmi_faq_a3:
    'No guarantee. BMI ignores muscle vs fat. Athletes can land in a high band with low body fat — ask a clinician for personal assessment.',
  tool_bmi_faq_a4:
    'These adult cutoffs are not designed for children, teens, or pregnancy. Use age-specific charts and clinical guidance instead.',
  tool_bmi_faq_q1: 'What is the BMI formula?',
  tool_bmi_faq_q2: 'What do the BMI categories mean?',
  tool_bmi_faq_q3: 'Is BMI accurate for athletes?',
  tool_bmi_faq_q4: 'Can I use this for children or during pregnancy?',
  tool_bmi_formula_body:
    'Metric: BMI = weight (kg) ÷ height (m)². Imperial: BMI = 703 × weight (lb) ÷ height (in)². Adult cutoffs used here follow widely published screening bands.',
  tool_bmi_formula_item_1: 'Underweight: BMI < 18.5',
  tool_bmi_formula_item_2: 'Normal: BMI 18.5–24.9',
  tool_bmi_formula_item_3: 'Overweight: BMI 25–29.9',
  tool_bmi_formula_item_4: 'Obesity: BMI ≥ 30',
  tool_bmi_formula_title: 'BMI formula and adult categories',
  tool_bmi_height_label: 'Height (cm)',
  tool_bmi_height_placeholder: 'Enter height in centimeters',
  tool_bmi_how_body:
    'Choose metric or imperial units, enter weight and height, then calculate. The tool applies the standard adult BMI formula, shows one decimal place, and maps the value to common adult screening categories. Numbers are computed in your browser and are not uploaded.',
  tool_bmi_how_title: 'How it works',
  tool_bmi_ref_cdc_label: 'CDC — Adult BMI categories',
  tool_bmi_ref_who_label: 'WHO — Obesity and overweight fact sheet',
  tool_bmi_references:
    'WHO obesity and overweight fact sheet; CDC adult BMI category guidance; standard metric and imperial BMI formulas.',
  tool_bmi_title: 'BMI Calculator — How to Calculate Body Mass Index',
  tool_bmi_usecase_1: 'Quick adult self-check before a routine health visit (screening only).',
  tool_bmi_usecase_2: 'Fitness onboarding to record a baseline BMI alongside other metrics.',
  tool_bmi_usecase_3: 'Convert and verify the same measurement in metric vs imperial units.',
  tool_bmi_usecases_title: 'When to use it',
  tool_bmi_weight_label: 'Weight (kg)',
  tool_bmi_weight_placeholder: 'Enter weight in kilograms',
};
export default en;
