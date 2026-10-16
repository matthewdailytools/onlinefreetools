/**
 * i18n 工具分片（how-to-calculate-body-fat / fr）。
 * 用美国海军围度公式估算体脂率；陆军标签与海军共用同一套 log10 方程。
 * 输入为厘米，代入前按 2.54 换成英寸。身高用法语 stature，腰围用 tour de taille，避免 taille 一词两义。
 * 男性：86.010×log10(tour de taille−cou) − 70.041×log10(stature) + 36.387。
 * 女性：163.205×log10(tour de taille+hanches−cou) − 97.684×log10(stature) − 78.387（减去 78.387，不是加上）。
 * 样例：男 178/40/86 cm 约 15.3%；女 165/34/74/96 cm 约 26.7%。仅供学习，不是诊断。
 */
import type { SiteLangDict } from '../../../types';

/** 体脂率计算器的法语文案；键与英文母版一一对应。 */
const fr: SiteLangDict = {
	tool_body_fat_title: "Calculateur de masse grasse — Estimer le pourcentage avec les tours",
	tool_body_fat_description: "Calculer le pourcentage de graisse corporelle avec la formule des tours de la Marine américaine. Le processus convertit les centimètres en pouces avant le log10. Exemple : homme, stature 178 cm, cou 40 cm, tour de taille 86 cm → environ 15.3%. Femme, stature 165 cm, cou 34 cm, tour de taille 74 cm, hanches 96 cm → environ 26.7%. L'étiquette Armée reprend les mêmes équations. Calcul éducatif : pas un avis médical ni un diagnostic.",
	tool_body_fat_article: "Le sexe et les tours en centimètres suffisent pour une estimation. Les femmes ajoutent le tour de hanches. Les étapes montrent le passage en pouces.",
	tool_body_fat_desc: "Tours de la Marine pour le pourcentage de graisse ; étiquette Armée, mêmes équations ; cm vers pouces ; éducatif.",

	tool_body_fat_safety_banner: "Estimation éducative seulement. Les formules de tours ne sont ni un DXA, ni un Bod Pod, ni un diagnostic. Pas un avis médical.",
	tool_body_fat_hint: "Saisissez des centimètres. La formule femme demande les hanches. Le tour de taille doit dépasser le cou ; pour les femmes, tour de taille + hanches doit aussi dépasser le cou. L'étiquette Armée utilise les mêmes équations éducatives de tours que la Marine.",
	tool_body_fat_method_label: "Étiquette de méthode",
	tool_body_fat_method_navy: "Tours selon la Marine américaine",
	tool_body_fat_method_army: "Tours dans le style Armée américaine / DoD",
	tool_body_fat_sex_label: "Sexe (choisit la formule)",
	tool_body_fat_sex_male: "Homme",
	tool_body_fat_sex_female: "Femme",
	tool_body_fat_height_label: "Stature (cm)",
	tool_body_fat_height_ph: "p. ex. 178",
	tool_body_fat_neck_label: "Tour de cou (cm)",
	tool_body_fat_neck_ph: "p. ex. 40",
	tool_body_fat_waist_label: "Tour de taille (cm)",
	tool_body_fat_waist_ph: "p. ex. 86",
	tool_body_fat_hip_label: "Tour de hanches (cm, femme)",
	tool_body_fat_hip_ph: "p. ex. 96",
	tool_body_fat_calculate: "Calculer",
	tool_body_fat_sample: "Charger l'exemple",
	tool_body_fat_clear: "Effacer",
	tool_body_fat_result_label: "Masse grasse estimée",
	tool_body_fat_steps_title: "Étapes du calcul",
	tool_body_fat_step_convert_tpl: "Conversion des cm en pouces (÷ 2.54) : stature {hIn} in, cou {nIn} in, tour de taille {wIn} in{hipPart}.",
	tool_body_fat_step_hip_part_tpl: ", hanches {hipIn} in",
	tool_body_fat_step_male_tpl: "Hommes %MG ≈ 86.010×log10(tour de taille−cou) − 70.041×log10(stature) + 36.387 = {pct}%.",
	tool_body_fat_step_female_tpl: "Femmes %MG ≈ 163.205×log10(tour de taille+hanches−cou) − 97.684×log10(stature) − 78.387 = {pct}%.",
	tool_body_fat_result_note: "Estimation éducative seulement : pas un avis médical ni un diagnostic. L'emplacement du mètre et la posture changent le résultat.",
	tool_body_fat_err_input: "La stature, le cou et le tour de taille doivent être des nombres supérieurs à 0.",
	tool_body_fat_err_hip: "La formule femme exige un tour de hanches supérieur à 0.",
	tool_body_fat_err_geom: "Le tour de taille doit être supérieur au cou ; pour les femmes, tour de taille + hanches doit aussi être supérieur au cou.",

	tool_body_fat_how_title: "Comment estimer le pourcentage de graisse corporelle",
	tool_body_fat_how_body: "Choisissez l'étiquette Marine ou Armée, indiquez le sexe et les tours en centimètres, puis Calculer. Les deux étiquettes partagent l'équation. Charger l'exemple alterne un homme vers 15.3% et une femme vers 26.7%.",
	tool_body_fat_how_item_1: "Choisir l'étiquette et le sexe. Ici, l'Armée utilise la même équation de tours que la Marine.",
	tool_body_fat_how_item_2: "Entrer stature, cou et tour de taille en centimètres ; ajouter les hanches pour une femme.",
	tool_body_fat_how_item_3: "Cliquer sur Calculer pour lire le pourcentage et les étapes.",
	tool_body_fat_how_item_4: "Cliquer sur Charger l'exemple : homme 178/40/86 cm vers 15.3%, puis femme 165/34/74/96 cm vers 26.7%.",

	tool_body_fat_why_choose_title: "Pourquoi ce calculateur de masse grasse",
	tool_body_fat_why_choose_item_1: "Le résultat rappelle qu'il s'agit d'une estimation éducative, pas d'un diagnostic.",
	tool_body_fat_why_choose_item_2: "Les centimètres sont convertis en pouces juste avant le log10.",
	tool_body_fat_why_choose_item_3: "Marine et Armée affichent deux noms pour la même équation de tours.",
	tool_body_fat_why_choose_item_4: "Les étapes gardent la conversion et la formule avec vos nombres.",
	tool_body_fat_why_choose_item_5: "L'exemple tourne entre un cas homme et un cas femme.",

	tool_body_fat_formula_title: "Formule et hypothèses de mesure",
	tool_body_fat_formula_body: "Hommes : %MG ≈ 86.010×log10(tour de taille−cou) − 70.041×log10(stature) + 36.387 (pouces). Femmes : %MG ≈ 163.205×log10(tour de taille+hanches−cou) − 97.684×log10(stature) − 78.387.",
	tool_body_fat_formula_item_1: "Placez le mètre aux repères habituels Marine/DoD ; la posture et les vêtements changent la lecture.",
	tool_body_fat_formula_item_2: "Vous entrez des centimètres, convertis par 1 in = 2.54 cm avant le log10.",
	tool_body_fat_formula_item_3: "L'étiquette Armée utilise les mêmes équations éducatives de tours que la Marine.",
	tool_body_fat_formula_item_4: "Ce n'est ni un résultat clinique DXA ou Bod Pod, ni un avis médical.",
	tool_body_fat_formula_item_5: "Les plis cutanés demandent plusieurs sites et un geste entraîné ; ce n'est pas la même lecture qu'un tour.",

	tool_body_fat_example_title: "Exemples chiffrés",
	tool_body_fat_example: "Charger l'exemple commence par un homme, Marine : stature 178 cm, cou 40 cm, tour de taille 86 cm → environ 15.3%. Ensuite une femme, étiquette Armée, même équation : stature 165 cm, cou 34 cm, tour de taille 74 cm, hanches 96 cm → environ 26.7%.",

	tool_body_fat_usecases_title: "Dans quels cas estimer la masse grasse",
	tool_body_fat_usecase_1: "Vérifier un pourcentage de graisse corporelle à partir de tours déjà notés sur une fiche.",
	tool_body_fat_usecase_2: "En cours, refaire la formule de la Marine avec des nombres fixes.",
	tool_body_fat_usecase_3: "Voir que les noms Marine et Armée ne changent pas l'équation.",
	tool_body_fat_usecase_4: "Relire la conversion centimètres vers pouces à côté du pourcentage, avant d'en parler à un clinicien — ce n'est pas un diagnostic.",

	tool_body_fat_faq_q1: "Comment obtient-on le pourcentage de graisse corporelle ?",
	tool_body_fat_faq_a1: "Avec les formules log10 de tours, style Marine américaine / DoD, après conversion des centimètres en pouces par 2.54. Hommes : 86.010×log10(tour de taille−cou) − 70.041×log10(stature) + 36.387.",
	tool_body_fat_faq_q2: "Est-ce un avis médical ?",
	tool_body_fat_faq_a2: "Non. C'est une estimation éducative, pas un diagnostic, pas un plan de traitement et pas un examen clinique de composition corporelle.",
	tool_body_fat_faq_q3: "Les plis cutanés donnent-ils le même chiffre ?",
	tool_body_fat_faq_a3: "Non. Le pli se mesure sur plusieurs sites, avec une technique entraînée. Ce calculateur ne prend que des tours de mètre.",
	tool_body_fat_faq_q4: "Marine et Armée, qu'est-ce qui change ?",
	tool_body_fat_faq_a4: "Le nom de l'étiquette, pas l'équation. Les deux utilisent les mêmes formules de tours. L'endroit où vous posez le mètre compte davantage.",
	tool_body_fat_faq_q5: "Pourquoi des pouces ?",
	tool_body_fat_faq_a5: "Les équations log10 publiées sont en pouces. Vous pouvez mesurer en centimètres : la conversion utilise 2.54.",
	tool_body_fat_faq_q6: "Le tour de taille peut-il égaler le cou ?",
	tool_body_fat_faq_a6: "Non. Le tour de taille doit être supérieur au cou. Pour les femmes, tour de taille + hanches doit aussi être supérieur au cou. Leur formule se termine par moins 78.387 : 163.205×log10(tour de taille+hanches−cou) − 97.684×log10(stature) − 78.387.",

	tool_body_fat_disclaimer: "Les estimations de masse grasse sont des illustrations éducatives. Elles ne constituent pas un avis médical, un diagnostic, ni un substitut à un examen clinique de composition corporelle. Pour une décision de santé, parlez-en à un clinicien qualifié.",
	tool_body_fat_references: "Équations de tours de la Marine américaine / du DoD ; notes éducatives du calculateur ACE ; littérature relue sur la méthode des tours.",
	tool_body_fat_ref_ace_label: "ACE — Calculateur de masse grasse (éducatif)",
	tool_body_fat_ref_pmc_label: "PMC — Méthodes de graisse corporelle par tours",
};

export default fr;
