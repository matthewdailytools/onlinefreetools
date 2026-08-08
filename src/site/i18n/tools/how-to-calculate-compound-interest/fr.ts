/**
 * i18n tool shard (how-to-calculate-compound-interest / fr).
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_compound_interest_title: 'Calculateur d’intérêts composés — Valeur future',
	tool_compound_interest_description:
		'Calculez la valeur future des intérêts composés à partir du capital, du taux annuel, des années et de la fréquence de capitalisation. Formule A = P(1 + r/n)^(nt) ; mode intérêt simple en option. Exemple : 10 000 à 5 % sur 10 ans, capitalisation annuelle → environ 16 288,95. Calcul dans le navigateur ; usage pédagogique uniquement, pas un conseil en investissement.',
	tool_compound_interest_article:
		'Les intérêts composés ajoutent des intérêts sur les intérêts déjà acquis. Cette page présente la formule discrète standard, permet de comparer l’intérêt simple avec les mêmes données et précise les hypothèses pour les cours et estimations personnelles.',
	tool_compound_interest_calculate: 'Calculer',
	tool_compound_interest_sample: 'Charger un exemple',
	tool_compound_interest_clear: 'Effacer',
	tool_compound_interest_mode_label: 'Mode d’intérêt',
	tool_compound_interest_mode_compound: 'Intérêts composés',
	tool_compound_interest_mode_simple: 'Intérêt simple',
	tool_compound_interest_principal_label: 'Capital (P)',
	tool_compound_interest_principal_placeholder: 'p. ex. 10000',
	tool_compound_interest_rate_label: 'Taux annuel (%)',
	tool_compound_interest_rate_placeholder: 'p. ex. 5',
	tool_compound_interest_years_label: 'Durée (années)',
	tool_compound_interest_years_placeholder: 'p. ex. 10',
	tool_compound_interest_freq_label: 'Capitalisations par an (n)',
	tool_compound_interest_freq_1: 'Annuelle (1)',
	tool_compound_interest_freq_2: 'Semestrielle (2)',
	tool_compound_interest_freq_4: 'Trimestrielle (4)',
	tool_compound_interest_freq_12: 'Mensuelle (12)',
	tool_compound_interest_freq_365: 'Quotidienne (365)',
	tool_compound_interest_result_future: 'Valeur future (A)',
	tool_compound_interest_result_interest: 'Intérêts acquis',
	tool_compound_interest_result_note: 'Illustration pédagogique uniquement — pas un conseil en investissement.',
	tool_compound_interest_err_principal: 'Le capital doit être supérieur à zéro.',
	tool_compound_interest_err_years: 'La durée en années doit être supérieure à zéro.',
	tool_compound_interest_err_rate: 'Le taux annuel doit être zéro ou un nombre positif.',
	tool_compound_interest_err_overflow: 'Le résultat est trop grand. Essayez une durée plus courte ou un taux plus faible.',
	tool_compound_interest_how_title: 'Fonctionnement',
	tool_compound_interest_how_body:
		'Saisissez capital, taux annuel nominal en pourcentage et nombre d’années. En mode composé, choisissez la fréquence de capitalisation. L’outil calcule valeur future et intérêts. En mode simple : A = P(1 + r t), la fréquence est ignorée.',
	tool_compound_interest_formula_title: 'Formule et hypothèses',
	tool_compound_interest_formula_body:
		'Composé : A = P (1 + r/n)^(n t), r étant le taux annuel nominal en décimal et n les capitalisations par an. Simple : A = P (1 + r t). À retenir :',
	tool_compound_interest_formula_item_1:
		'Le taux est nominal annuel saisi ; taxes, frais et inflation ne sont pas déduits.',
	tool_compound_interest_formula_item_2:
		'Aucun versement ni retrait pendant la période — seul le capital initial croît.',
	tool_compound_interest_formula_item_3:
		'La fréquence de capitalisation modifie la croissance effective ; le TAEG est résumé dans la FAQ, pas comme outil séparé.',
	tool_compound_interest_formula_item_4:
		'Les résultats sont des illustrations pédagogiques, pas des prévisions ni un conseil en investissement.',
	tool_compound_interest_example_title: 'Exemple',
	tool_compound_interest_example:
		'Exemple : capital 10 000, taux 5 % par an, 10 ans, capitalisation annuelle → A ≈ 16 288,95 et intérêts ≈ 6 288,95. Mêmes données en intérêt simple → A = 15 000.',
	tool_compound_interest_usecases_title: 'Quand l’utiliser',
	tool_compound_interest_usecase_1:
		'Épargne : estimer un solde futur si un capital unique capitalise à un taux donné (illustration seulement).',
	tool_compound_interest_usecase_2:
		'Cours : s’entraîner à la formule des intérêts composés avec P, r, n et t fixes.',
	tool_compound_interest_usecase_3:
		'Comparer les modes : passez à l’intérêt simple avec les mêmes données pour voir l’effet de la capitalisation.',
	tool_compound_interest_faq_q1: 'Quelle formule d’intérêts composés est utilisée ?',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t), avec r taux annuel en décimal et n capitalisations par an. Intérêts = A − P.',
	tool_compound_interest_faq_q2: 'En quoi l’intérêt simple diffère-t-il ?',
	tool_compound_interest_faq_a2:
		'L’intérêt simple utilise A = P (1 + r t) sans capitalisation. Choisissez Simple dans le mode ; la fréquence est ignorée.',
	tool_compound_interest_faq_q3: 'Que signifie la fréquence de capitalisation ?',
	tool_compound_interest_faq_a3:
		'n indique combien de fois par an les intérêts sont ajoutés (1 annuel, 12 mensuel, 365 quotidien). À taux nominal égal, un n plus élevé accroît généralement le solde.',
	tool_compound_interest_faq_q4: 'Est-ce un conseil en investissement ?',
	tool_compound_interest_faq_a4:
		'Non. Les chiffres sont des illustrations pédagogiques et ne constituent pas un conseil en investissement, fiscal ou financier.',
	tool_compound_interest_faq_q5: 'Et si le taux est nul ?',
	tool_compound_interest_faq_a5: 'Avec un taux annuel de 0 %, la valeur future égale le capital et les intérêts sont 0.',
	tool_compound_interest_disclaimer:
		'Les résultats en intérêts composés et simples sont des illustrations pédagogiques et ne constituent pas un conseil en investissement, fiscal ou financier. Une croissance passée ou hypothétique ne garantit pas les résultats futurs.',
	tool_compound_interest_references:
		'Définitions des intérêts composés et simples sur Investopedia ; formule discrète standard A = P(1 + r/n)^(nt).',
	tool_compound_interest_ref_compound_label: 'Investopedia — Intérêts composés',
	tool_compound_interest_ref_simple_label: 'Investopedia — Intérêt simple',
};

export default fr;
