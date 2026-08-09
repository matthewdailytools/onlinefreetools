/**
 * i18n tool shard (how-to-calculate-exponent / fr).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_exponent_title: "Calculateur d’exposants — Comment calculer des puissances",
	tool_exponent_description: "Calculez a^b avec l’exemple 2^10=1024. Signale Infinity pour de grandes magnitudes et NaN pour certaines bases négatives à exposant non entier. Dans le navigateur, avec logs et notation scientifique.",
	tool_exponent_calculate: "Calculer",
	tool_exponent_sample: "Charger l’exemple",
	tool_exponent_clear: "Effacer",
	tool_exponent_base_label: "Base a",
	tool_exponent_base_ph: "ex. 2",
	tool_exponent_exp_label: "Exposant b",
	tool_exponent_exp_ph: "ex. 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "Calcule a^b avec Math.pow pour apprendre. Un |b| très grand peut donner Infinity.",
	tool_exponent_err_generic: "Saisissez une base et un exposant finis.",
	tool_exponent_how_title: "Fonctionnement",
	tool_exponent_how_body: "Entrez a et b. Renvoie a^b. Bases négatives avec exposants non entiers peuvent donner NaN et sont traitées comme erreur.",
	tool_exponent_formula_title: "Formule",
	tool_exponent_formula_body: "Exponentiation a^b :",
	tool_exponent_formula_item_1: "Si b est un entier ≥0, a^b est a multiplié b fois.",
	tool_exponent_formula_item_2: "Exposants fractionnaires/négatifs suivent Math.pow réel.",
	tool_exponent_formula_item_3: "0^0 vaut 1 ici (convention de programmation) — débat existant.",
	tool_exponent_formula_item_4: "Associez à la page logs pour vérifier log_a(a^b)=b.",
	tool_exponent_example_title: "Exemple",
	tool_exponent_example: "Exemple : 2^10 = 1024.",
	tool_exponent_usecases_title: "Quand l’utiliser",
	tool_exponent_usecase_1: "Devoir : puissances simples comme 2^10.",
	tool_exponent_usecase_2: "Vérifier des facteurs de notation scientifique.",
	tool_exponent_usecase_3: "Croiser avec des logs inverses.",
	tool_exponent_disclaimer: "Puissances réelles pédagogiques seulement ; pas un CAS.",
	tool_exponent_references: "Wikipedia exponentiation.",
	tool_exponent_ref_exp_label: "Wikipedia — Exponentiation",
	tool_exponent_ref_pow_label: "Wikipedia — Exposant",
	tool_exponent_article: "Calculez a^b dans le navigateur avec des notes de domaine.",
	tool_exponent_faq_q1: "0^0 ici ?",
	tool_exponent_faq_a1: "Pris égal à 1 (convention JS) ; débat mathématique.",
	tool_exponent_faq_q2: "Bases négatives ?",
	tool_exponent_faq_a2: "Puissances réelles non entières souvent NaN en JS.",
	tool_exponent_faq_q3: "Infinity possible ?",
	tool_exponent_faq_a3: "Oui pour de très grandes magnitudes.",
	tool_exponent_faq_q4: "Vérifier avec logs ?",
	tool_exponent_faq_a4: "Si défini, log_a(a^b)≈b.",
};

export default fr;
