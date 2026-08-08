/**
 * i18n tool shard (how-to-calculate-marginal-revenue / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_marginal_revenue_article:
    'Marginal revenue is the change in total revenue from a change in quantity sold. This calculator shows the discrete two-point derivation step by step for coursework and rough product checks.',
  tool_marginal_revenue_calculate: 'Calculate MR',
  tool_marginal_revenue_description:
    'Learn how to calculate marginal revenue with MR = ΔTR / ΔQ. Process: enter quantity and total revenue at two points, subtract for ΔTR and ΔQ, then divide. Example: Q 10→11, TR 1000→1080 → MR = 80. Educational only — not pricing advice.',
  tool_marginal_revenue_detail_tpl: 'ΔTR = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_disclaimer:
    'This calculator is for learning microeconomics concepts. It is not business, pricing, or investment advice.',
  tool_marginal_revenue_example: 'Example: Q₁ = 10, TR₁ = 1000; Q₂ = 11, TR₂ = 1080 → ΔTR = 80, ΔQ = 1 → MR = 80 / 1 = 80.',
  tool_marginal_revenue_example_title: 'Example',
  tool_marginal_revenue_faq_a1:
    'MR = ΔTR / ΔQ with ΔTR = TR₂ − TR₁ and ΔQ = Q₂ − Q₁. The page shows that discrete derivation, not a continuous derivative.',
  tool_marginal_revenue_faq_a2: 'MR is undefined when quantity does not change. Pick two different quantity points.',
  tool_marginal_revenue_faq_a3:
    'Average revenue is TR / Q for a level of output. Marginal revenue is the change in TR when Q changes — they coincide only in special cases such as perfect competition with constant price.',
  tool_marginal_revenue_faq_a4:
    'No. This tool does not give pricing or production advice. Profit decisions also need marginal cost and other constraints.',
  tool_marginal_revenue_faq_q1: 'How is marginal revenue derived here?',
  tool_marginal_revenue_faq_q2: 'What if ΔQ is zero?',
  tool_marginal_revenue_faq_q3: 'How is MR different from average revenue?',
  tool_marginal_revenue_faq_q4: 'Does a positive MR mean I should raise output?',
  tool_marginal_revenue_formula_body:
    'Start from the definition: marginal revenue is how total revenue changes when quantity changes. For two observed points:',
  tool_marginal_revenue_formula_item_1: 'ΔTR = TR₂ − TR₁ (change in total revenue)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (change in quantity)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔTR / ΔQ when ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'A discrete step approximates average MR over the interval; continuous models use dTR/dQ. Negative MR means revenue fell as quantity rose.',
  tool_marginal_revenue_formula_title: 'Formula derivation',
  tool_marginal_revenue_how_body:
    'Enter quantity and total revenue for period (or tier) 1, then the same for tier 2. The tool computes ΔTR = TR2 − TR1 and ΔQ = Q2 − Q1, then MR = ΔTR / ΔQ. All math runs in your browser.',
  tool_marginal_revenue_how_title: 'How it works',
  tool_marginal_revenue_q1_label: 'Quantity (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'e.g. 10',
  tool_marginal_revenue_q2_label: 'Quantity (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'e.g. 11',
  tool_marginal_revenue_quantity_label: 'Quantity',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Marginal Revenue (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principles of Microeconomics (competition chapter)',
  tool_marginal_revenue_references:
    'Investopedia marginal revenue entry; introductory microeconomics treatment of MR as ΔTR/ΔQ (e.g. OpenStax Principles of Microeconomics).',
  tool_marginal_revenue_result_label: 'Marginal Revenue',
  tool_marginal_revenue_revenue_label: 'Total Revenue',
  tool_marginal_revenue_title: 'How to Calculate Marginal Revenue — MR Calculator (ΔTR / ΔQ)',
  tool_marginal_revenue_tr1_label: 'Total revenue (TR₁)',
  tool_marginal_revenue_tr1_placeholder: 'e.g. 1000',
  tool_marginal_revenue_tr2_label: 'Total revenue (TR₂)',
  tool_marginal_revenue_tr2_placeholder: 'e.g. 1080',
  tool_marginal_revenue_usecase_1: 'Homework: check a two-tier quantity/revenue table from a textbook problem.',
  tool_marginal_revenue_usecase_2: 'Rough product check: estimate revenue change when output steps up one unit.',
  tool_marginal_revenue_usecase_3: 'Compare MR language with average revenue in introductory microeconomics.',
  tool_marginal_revenue_usecases_title: 'When to use it',
  tool_marginal_revenue_zero_dq: 'ΔQ is 0 — quantity must change between the two points.',
};
export default en;
