/**
 * i18n tool shard (how-to-calculate-percentage-change / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_percentage_change_abs_note: 'Absolute change: {delta}',
  tool_percentage_change_article:
    'Relative percentage change answers “how much did this metric move versus its baseline?” Enter the old value and the new value; the tool uses (new − old) / old × 100 and labels increase vs decrease. Use it for KPI reporting, not as a substitute for ROI.',
  tool_percentage_change_calculate: 'Calculate',
  tool_percentage_change_decrease: 'decrease',
  tool_percentage_change_description:
    'Calculate percent increase or decrease from an old value to a new value. Process: enter old and new, apply (new − old) / old × 100, then read the signed result. Example: 80 → 100 = +25%. Built for revenue MoM, DAU, and price moves — not the same as percentage points.',
  tool_percentage_change_example:
    'Worked example: old = 80, new = 100 → Δ = 20 → (20 / 80) × 100 = 25% increase. Same steps for a drop: 100 → 80 = −20% decrease.',
  tool_percentage_change_example_title: 'Example',
  tool_percentage_change_faq_a1: 'Percent change = (new − old) / old × 100. Positive means increase; negative means decrease.',
  tool_percentage_change_faq_a2:
    'Division by zero is undefined. If the baseline is 0, relative percentage change from that base cannot be computed.',
  tool_percentage_change_faq_a3:
    'No. Moving from 10% to 12% is a 2 percentage-point rise, but a 20% relative increase ((12−10)/10×100).',
  tool_percentage_change_faq_a4:
    'ROI compares gain to investment cost. Percentage change compares any new value to an old baseline and is not investment-specific.',
  tool_percentage_change_faq_q1: 'What is the percentage change formula?',
  tool_percentage_change_faq_q2: 'Why must the old value be non-zero?',
  tool_percentage_change_faq_q3: 'Is percentage change the same as percentage points?',
  tool_percentage_change_faq_q4: 'How is this different from ROI?',
  tool_percentage_change_formula_body:
    'Percent change = (new − old) / old × 100. This page uses the signed old value in the denominator (not |old|), so the sign of the result follows the direction of the move when old is positive.',
  tool_percentage_change_formula_item_1: 'Δ = new − old',
  tool_percentage_change_formula_item_2: 'percent = (Δ / old) × 100',
  tool_percentage_change_formula_item_3: 'old = 0 → undefined (tool shows an error)',
  tool_percentage_change_formula_title: 'Percentage change formula',
  tool_percentage_change_how_body:
    'Enter the baseline (old) value and the later (new) value. The calculator subtracts, divides by the old value, and multiplies by 100. Positive means increase; negative means decrease. If old = 0, relative change is undefined.',
  tool_percentage_change_how_title: 'How it works',
  tool_percentage_change_increase: 'increase',
  tool_percentage_change_new_label: 'New value',
  tool_percentage_change_no_change: 'no change',
  tool_percentage_change_original_label: 'Old value',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_result_invalid: 'Old value must be a non-zero number.',
  tool_percentage_change_result_label: 'Percentage change',
  tool_percentage_change_title: 'Percentage Change Calculator — From Old Value to New',
  tool_percentage_change_usecase_1: 'Month-over-month revenue: last month GMV 80 vs this month 100 → +25%.',
  tool_percentage_change_usecase_2: 'Product analytics: DAU rose from 50k to 55k → +10% relative change.',
  tool_percentage_change_usecase_3: 'Pricing: list price cut from 40 to 34 → −15% change (not “6 percentage points”).',
  tool_percentage_change_usecases_title: 'Business & data uses',
};
export default en;
