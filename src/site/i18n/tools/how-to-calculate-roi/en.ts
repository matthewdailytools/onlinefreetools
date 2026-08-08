/**
 * i18n tool shard (how-to-calculate-roi / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_roi_article:
    'Simple return on investment compares net gain to cost as a percentage. Use it for rough campaign or project recaps; it ignores multi-period cash flows unless you encode them yourself in the inputs.',
  tool_roi_calculate: 'Calculate ROI',
  tool_roi_description:
    'Calculate simple ROI with the formula (Gain − Cost) / Cost × 100%, or (Final − Initial) / Initial × 100%. Process: enter cost and final value (or net gain), then review assumptions about tax, fees, and time. Example: cost 1000, final 1300 → ROI 30%. Educational illustration only — not investment advice.',
  tool_roi_disclaimer:
    'ROI results are educational illustrations only and are not investment, tax, or financial advice. Past or hypothetical returns do not guarantee future results.',
  tool_roi_example: 'Example: cost 1000, final value 1300 → net gain 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_example_title: 'Example',
  tool_roi_faq_a1:
    'ROI = (Final − Initial) / Initial × 100%, or Net gain / Cost × 100% when you enter net gain. Positive means a gain on these inputs; negative means a loss.',
  tool_roi_faq_a2:
    'We do not estimate taxes or fees. Fold them into cost or final value yourself. Simple ROI also ignores holding period — it is not annualized.',
  tool_roi_faq_a3: 'ROI is undefined when cost is zero (division by zero). Enter a positive cost amount.',
  tool_roi_faq_a4: 'No. Results are educational illustrations only and are not investment, tax, or financial advice.',
  tool_roi_faq_q1: 'Which ROI formula does this use?',
  tool_roi_faq_q2: 'What about taxes, fees, and time?',
  tool_roi_faq_q3: 'What if initial investment is zero?',
  tool_roi_faq_q4: 'Is this investment advice?',
  tool_roi_final_label: 'Final value',
  tool_roi_final_placeholder: 'e.g. 1300',
  tool_roi_formula_body:
    'ROI = (Final value − Initial investment) / Initial investment × 100%, or ROI = Net gain / Cost × 100% when you supply net gain directly. Keep these assumptions in mind:',
  tool_roi_formula_item_1: 'Taxes: not estimated here — include after-tax amounts in your inputs if that is your target view.',
  tool_roi_formula_item_2: 'Time: simple ROI ignores holding period; it is not an annualized return.',
  tool_roi_formula_item_3: 'Fees: fold commissions, platform fees, and similar costs into cost or final value yourself.',
  tool_roi_formula_item_4: 'Multi-period cash flows and IRR/NPV are out of scope for this single-period percentage.',
  tool_roi_formula_title: 'Formula and assumptions',
  tool_roi_gain_label: 'Net gain (optional)',
  tool_roi_gain_placeholder: 'If known, overrides final − initial',
  tool_roi_how_body:
    'Enter the amount you put in (cost) and either the ending value or a known net gain. The calculator uses ROI = net / cost × 100%. If net gain is blank, net = final − initial. Division by zero cost is rejected.',
  tool_roi_how_title: 'How it works',
  tool_roi_initial_label: 'Initial investment (cost)',
  tool_roi_initial_placeholder: 'e.g. 1000',
  tool_roi_interpret_negative: 'Negative ROI (loss relative to cost) — educational illustration only.',
  tool_roi_interpret_positive: 'Positive ROI (gain relative to cost) — educational illustration only.',
  tool_roi_interpret_zero: 'Zero ROI — no net gain or loss on these inputs.',
  tool_roi_ref_guide_label: 'Investopedia — Guide to calculating ROI',
  tool_roi_ref_investopedia_label: 'Investopedia — Return on Investment (ROI)',
  tool_roi_references:
    'Investopedia definitions and guides on return on investment; standard simple ROI as net gain divided by cost.',
  tool_roi_result_label: 'ROI',
  tool_roi_title: 'ROI Calculator — How to Calculate Return on Investment',
  tool_roi_usecase_1: 'Marketing: rough campaign ROI after you already know spend and attributed revenue.',
  tool_roi_usecase_2: 'Coursework: practice the basic ROI percentage with fixed numbers.',
  tool_roi_usecase_3: 'Project recap: summarize one completed initiative as a single cost/gain pair (estimate only).',
  tool_roi_usecases_title: 'When to use it',
  tool_roi_zero_cost: 'Initial investment must be greater than zero.',
};
export default en;
