/**
 * i18n tool shard (how-to-calculate-standard-deviation / en).
 * English master — full UI, How/Formula/FAQ for sample vs population SD and variance.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_std_dev_title: 'Standard Deviation Calculator — How to Calculate SD and Variance',
	tool_std_dev_description:
		'Calculate sample (n−1) or population (n) standard deviation and variance from a pasted number list. Example: 2, 4, 4, 4, 5, 5, 7, 9 → population SD = 2 (sample SD ≈ 2.14). Runs in your browser; numbers stay on your device.',
	tool_std_dev_article:
		'Standard deviation measures how spread out numbers are around the mean. Choose sample (Bessel-corrected, divide by n−1) when the list is a sample from a larger population, or population (divide by n) when the list is the full set. Variance is the square of that standard deviation.',
	tool_std_dev_calculate: 'Calculate',
	tool_std_dev_sample: 'Load sample',
	tool_std_dev_clear: 'Clear',
	tool_std_dev_numbers_label: 'Numbers',
	tool_std_dev_numbers_ph: 'e.g. 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: 'Separate values with commas, spaces, or new lines.',
	tool_std_dev_mode_label: 'Mode',
	tool_std_dev_mode_sample: 'Sample (n−1)',
	tool_std_dev_mode_population: 'Population (n)',
	tool_std_dev_result_count: 'Count',
	tool_std_dev_result_mean: 'Mean',
	tool_std_dev_result_variance: 'Variance',
	tool_std_dev_result_sd: 'Standard deviation',
	tool_std_dev_result_note_sample: 'Sample mode uses Bessel’s correction (divide by n−1).',
	tool_std_dev_result_note_population: 'Population mode divides by n (full set).',
	tool_std_dev_err_empty: 'Enter at least one valid number.',
	tool_std_dev_err_sample_n: 'Sample standard deviation needs at least two numbers.',
	tool_std_dev_how_title: 'How it works',
	tool_std_dev_how_body:
		'Paste numbers, pick sample or population, then calculate. The tool finds the mean, sums squared deviations, divides by n−1 (sample) or n (population) for variance, and takes the square root for standard deviation. Results stay in your browser and are not uploaded to a server.',
	tool_std_dev_formula_title: 'Formula',
	tool_std_dev_formula_body:
		'Let x̄ be the mean of the numbers. Variance is the average of squared deviations; standard deviation is its square root:',
	tool_std_dev_formula_item_1: 'Mean: x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: 'Sample variance: s² = Σ(xᵢ − x̄)² / (n − 1); sample SD s = √s²',
	tool_std_dev_formula_item_3: 'Population variance: σ² = Σ(xᵢ − x̄)² / n; population SD σ = √σ²',
	tool_std_dev_example_title: 'Example',
	tool_std_dev_example:
		'Classic set 2, 4, 4, 4, 5, 5, 7, 9 has mean 5 and sum of squared deviations 32. Population: σ² = 32/8 = 4 → σ = 2. Sample: s² = 32/7 ≈ 4.571 → s ≈ 2.138. (The well-known “SD = 2” demo is the population value.)',
	tool_std_dev_usecases_title: 'When to use it',
	tool_std_dev_usecase_1: 'Homework: check sample vs population SD on a short list of exam or lab scores.',
	tool_std_dev_usecase_2: 'Quick spread check for a small CSV column before charting or reporting.',
	tool_std_dev_usecase_3: 'Compare volatility of two short numeric series using the same mode (sample or population).',
	tool_std_dev_faq_q1: 'What is the difference between sample and population standard deviation?',
	tool_std_dev_faq_a1:
		'Sample SD divides by n−1 (Bessel’s correction) and estimates the SD of a larger population. Population SD divides by n when your list is the complete set.',
	tool_std_dev_faq_q2: 'How are variance and standard deviation related?',
	tool_std_dev_faq_a2:
		'Variance is the average of squared deviations from the mean. Standard deviation is the square root of variance, so it is in the same units as the original numbers.',
	tool_std_dev_faq_q3: 'Why does the classic example equal 2?',
	tool_std_dev_faq_a3:
		'For 2, 4, 4, 4, 5, 5, 7, 9 the population standard deviation is exactly 2. The sample (n−1) standard deviation is about 2.14 — textbooks often show the population figure.',
	tool_std_dev_faq_q4: 'Are my numbers uploaded?',
	tool_std_dev_faq_a4:
		'No. Parsing and math run in your browser tab. Values stay on your device and are not uploaded to a server.',
	tool_std_dev_references:
		'Wikipedia Standard deviation and Variance articles; common introductory statistics textbooks for sample vs population formulas.',
	tool_std_dev_ref_sd_label: 'Wikipedia — Standard deviation',
	tool_std_dev_ref_var_label: 'Wikipedia — Variance',
};

export default en;
