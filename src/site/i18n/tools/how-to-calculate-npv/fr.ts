/**
 * i18n tool shard (how-to-calculate-npv / fr).
 * Français réécrit indépendamment (pas un calque de l’anglais).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_npv_title: 'Calculateur VAN (NPV) — Valeur actuelle nette',
	tool_npv_description:
		'Calculez la VAN (NPV) à partir d’un taux d’actualisation annuel, d’un investissement initial et des flux de trésorerie année par année. Exemple : 10 000 investis à 10 % avec des flux 3 000 / 4 200 / 6 800 → VAN ≈ 1 307,29. Calcul dans le navigateur ; illustration pédagogique uniquement — pas un conseil en investissement.',
	tool_npv_article:
		'La valeur actuelle nette actualise les flux futurs au taux annuel choisi, puis soustrait l’investissement initial. Une VAN positive signifie seulement que, sous vos hypothèses, les entrées actualisées dépassent la sortie ; ce n’est ni une prévision ni un conseil d’achat.',
	tool_npv_calculate: 'Calculer',
	tool_npv_sample: 'Charger l’exemple',
	tool_npv_clear: 'Effacer',
	tool_npv_rate_label: 'Taux d’actualisation (% par an)',
	tool_npv_rate_ph: 'ex. 10',
	tool_npv_invest_label: 'Investissement initial (sortie)',
	tool_npv_invest_ph: 'ex. 10000',
	tool_npv_cf_label: 'Flux par année (virgule ou nouvelle ligne)',
	tool_npv_cf_ph: 'ex. 3000, 4200, 6800',
	tool_npv_cf_hint: 'Saisissez CF1…CFn pour les années 1…n. Positif = entrée ; négatifs autorisés.',
	tool_npv_result_label: 'VAN (NPV)',
	tool_npv_result_note: 'Illustration pédagogique uniquement — pas un conseil en investissement.',
	tool_npv_err_rate: 'Indiquez un taux d’actualisation fini (% par an). −100 % ou moins est interdit.',
	tool_npv_err_invest: 'L’investissement initial doit être supérieur à zéro.',
	tool_npv_err_cf: 'Saisissez au moins un flux numérique valide (séparé par virgules ou retours à la ligne).',
	tool_npv_how_title: 'Mode d’emploi',
	tool_npv_how_body:
		'Entrez le taux annuel, un investissement initial positif (sortie en t=0) et la liste des flux des années 1…n. L’outil actualise chaque flux et retire le débours initial. Le calcul reste dans votre navigateur, à des fins pédagogiques.',
	tool_npv_formula_title: 'Formule et hypothèses',
	tool_npv_formula_body:
		'VAN = −I₀ + Σ (CFₜ / (1 + r)ᵗ) pour t = 1…n, où r est le taux annuel en décimal. Gardez à l’esprit :',
	tool_npv_formula_item_1: 'Les flux sont traités en fin d’année ; le calendrier intra-annuel est ignoré.',
	tool_npv_formula_item_2: 'Le taux est constant ; impôts, frais et inflation ne sont pas modélisés sauf si vous les intégrez.',
	tool_npv_formula_item_3: 'Le résultat est une illustration pédagogique, pas une prévision ni un conseil.',
	tool_npv_example_title: 'Exemple',
	tool_npv_example:
		'Exemple : investissement 10 000, taux 10 %/an, flux 3 000 / 4 200 / 6 800 → VAN = −10000 + 3000/1,1 + 4200/1,1² + 6800/1,1³ ≈ 1 307,29.',
	tool_npv_usecases_title: 'Dans quels cas',
	tool_npv_usecase_1: 'Premier tri de projets : comparer entrées actualisées et coût initial (illustration seule).',
	tool_npv_usecase_2: 'Travaux : pratiquer la somme VAN avec un taux fixe et une courte liste de flux.',
	tool_npv_usecase_3: 'Esquisse avant un conseiller — ne remplace pas une analyse complète.',
	tool_npv_faq_q1: 'Quelle formule de VAN utilise cet outil ?',
	tool_npv_faq_a1:
		'VAN = −I₀ + Σ (CFₜ / (1 + r)ᵗ). I₀ est l’investissement initial, r le taux annuel en décimal, CFₜ les flux des années 1…n.',
	tool_npv_faq_q2: 'Différence avec le ROI simple ou le CAGR ?',
	tool_npv_faq_a2:
		'Le ROI simple est un pourcentage sur une période. Le CAGR annualise la croissance entre deux valeurs. La VAN actualise une suite de flux et donne un montant, pas un taux de croissance.',
	tool_npv_faq_q3: 'Comment saisir les flux ?',
	tool_npv_faq_a3:
		'Listez les montants des années 1 à n séparés par des virgules ou des retours à la ligne. Positifs = entrées ; négatifs = sorties ultérieures. Au moins un nombre valide est requis.',
	tool_npv_faq_q4: 'Est-ce un conseil en investissement ?',
	tool_npv_faq_a4:
		'Non. Les chiffres sont des illustrations pédagogiques et ne constituent pas un conseil en investissement, fiscal ou financier. Une VAN positive avec vos entrées ne garantit pas un gain réel.',
	tool_npv_disclaimer:
		'Les résultats de VAN sont des illustrations pédagogiques uniquement et ne constituent pas un conseil en investissement, fiscal ou financier. Taux, calendrier des flux, frais, impôts et risque sont simplifiés. Les chiffres hypothétiques ne garantissent pas les résultats futurs.',
	tool_npv_references:
		'Définition NPV d’Investopedia et guide valeur actuelle vs valeur actuelle nette ; formule standard des flux actualisés.',
	tool_npv_ref_npv_label: 'Investopedia — Net Present Value (NPV)',
	tool_npv_ref_pv_label: 'Investopedia — Valeur actuelle vs VAN',
};

export default fr;
