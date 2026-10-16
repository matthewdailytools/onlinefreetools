/**
 * i18n 工具分片（how-to-calculate-ohms-law / fr）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。
 * 仅教学算术：浏览器内理想直流公式，非布线或电气安全建议。
 */
import type { SiteLangDict } from '../../../types';

/** 法语文案字典：键名与 en.ts 完全一致，占位符保留 {v}{i}{r}{p}。 */
const fr: SiteLangDict = {
	tool_ohms_law_title: "Calculateur de la loi d'Ohm — Trouver V, I ou R et la puissance",
	tool_ohms_law_description: "Appliquez la loi d'Ohm pour résoudre tension, courant ou résistance, et affichez la puissance P=VI. Exemple : V=12, I=2 → R=6 Ω et P=24 W. Formules CC idéales uniquement — calcul pédagogique dans le navigateur, pas de conseils de câblage ni de sécurité électrique.",
	tool_ohms_law_article: "Choisissez l'inconnue, saisissez les deux autres grandeurs, puis obtenez le résultat et la puissance avec les étapes.",
	tool_ohms_law_desc: "Loi d'Ohm V=IR en modes V, I ou R, plus la puissance. Usage pédagogique CC idéal uniquement.",

	tool_ohms_law_safety_banner: "À but éducatif uniquement. Arithmétique CC idéale de la loi d'Ohm — pas d'instructions de câblage, de valeurs nominales produits, ni de conseils de sécurité électrique.",
	tool_ohms_law_hint: "Choisissez le mode de résolution, puis entrez les deux valeurs connues. Le courant ne doit pas être nul pour trouver R. La résistance doit être strictement positive pour trouver I ou V à partir de R.",
	tool_ohms_law_mode_label: "Résoudre pour",
	tool_ohms_law_mode_r: "Résistance R (à partir de V et I)",
	tool_ohms_law_mode_v: "Tension V (à partir de I et R)",
	tool_ohms_law_mode_i: "Courant I (à partir de V et R)",
	tool_ohms_law_V_label: "Tension V (volts)",
	tool_ohms_law_V_ph: "ex. 12",
	tool_ohms_law_I_label: "Courant I (ampères)",
	tool_ohms_law_I_ph: "ex. 2",
	tool_ohms_law_R_label: "Résistance R (ohms)",
	tool_ohms_law_R_ph: "ex. 6",
	tool_ohms_law_calculate: "Calculer",
	tool_ohms_law_sample: "Charger l'exemple",
	tool_ohms_law_clear: "Effacer",
	tool_ohms_law_primary_label: "Résultat",
	tool_ohms_law_rOut_label: "Résistance R",
	tool_ohms_law_vOut_label: "Tension V",
	tool_ohms_law_iOut_label: "Courant I",
	tool_ohms_law_pOut_label: "Puissance P",
	tool_ohms_law_steps_title: "Étapes",
	tool_ohms_law_step_r_tpl: "R = V ÷ I = {v} ÷ {i} = {r} Ω.",
	tool_ohms_law_step_v_tpl: "V = I × R = {i} × {r} = {v} V.",
	tool_ohms_law_step_i_tpl: "I = V ÷ R = {v} ÷ {r} = {i} A.",
	tool_ohms_law_step_p_tpl: "P = V × I = {v} × {i} = {p} W.",
	tool_ohms_law_result_note: "Forme CC idéale uniquement. Gardez des unités cohérentes (V, A → Ω et W). L'impédance CA et les dispositifs non ohmiques ne sont pas modélisés.",
	tool_ohms_law_err_generic: "Saisissez des valeurs finies positives pour les champs connus. Courant ≠ 0 pour trouver R ; résistance > 0 pour trouver V ou I.",

	tool_ohms_law_how_title: "Comment utiliser le calculateur de la loi d'Ohm",
	tool_ohms_law_how_body: "Choisissez de résoudre R, V ou I. Entrez les deux autres grandeurs, puis calculez pour voir l'inconnue et la puissance avec les étapes. Charger l'exemple fait tourner chaque mode.",
	tool_ohms_law_how_item_1: "Sélectionnez le mode : R depuis V et I, V depuis I et R, ou I depuis V et R.",
	tool_ohms_law_how_item_2: "Saisissez les deux valeurs connues avec des unités cohérentes.",
	tool_ohms_law_how_item_3: "Cliquez sur Calculer pour afficher l'inconnue, la puissance et les étapes.",
	tool_ohms_law_how_item_4: "Utilisez Charger l'exemple pour enchaîner V=12/I=2, I=2/R=6 et V=12/R=6.",

	tool_ohms_law_why_choose_title: "Ce que ce calculateur de la loi d'Ohm vous apporte",
	tool_ohms_law_why_choose_item_1: "Trois modes couvrant les réarrangements de V = I·R.",
	tool_ohms_law_why_choose_item_2: "La puissance P = V·I affichée à côté de l'inconnue.",
	tool_ohms_law_why_choose_item_3: "Des lignes d'étapes qui branchent vos nombres dans les formules.",
	tool_ohms_law_why_choose_item_4: "Rotation d'exemples pour chaque mode.",
	tool_ohms_law_why_choose_item_5: "Frontière claire : CC idéal uniquement — pas de conseils de câblage.",

	tool_ohms_law_formula_title: "Formules de la loi d'Ohm",
	tool_ohms_law_formula_body: "Pour une résistance idéale en courant continu, tension, courant et résistance sont liés par V = I·R. La puissance suit P = V·I.",
	tool_ohms_law_formula_item_1: "R = V ÷ I lorsque le courant n'est pas nul.",
	tool_ohms_law_formula_item_2: "V = I × R.",
	tool_ohms_law_formula_item_3: "I = V ÷ R lorsque la résistance est strictement positive.",
	tool_ohms_law_formula_item_4: "P = V × I (aussi P = I²R ou P = V²/R dans le cas idéal).",
	tool_ohms_law_formula_item_5: "Cette page utilise uniquement le CC idéal — pas d'impédance CA ni de conception de sécurité.",

	tool_ohms_law_example_title: "Exemples résolus",
	tool_ohms_law_example: "Exemple en mode R : V=12, I=2 → R=6 Ω, P=24 W. Mode V : I=2, R=6 → V=12. Mode I : V=12, R=6 → I=2.",

	tool_ohms_law_usecases_title: "Quand utiliser un calculateur de la loi d'Ohm",
	tool_ohms_law_usecase_1: "Devoirs d'électronique : réarranger V = I·R pour la grandeur manquante.",
	tool_ohms_law_usecase_2: "Vérification rapide CC idéale de la résistance ou de la puissance à partir de lectures d'appareil.",
	tool_ohms_law_usecase_3: "Comparer avec d'autres pages de physique (masse volumique, vitesse) pour s'entraîner aux unités.",
	tool_ohms_law_usecase_4: "Voir la puissance à côté de la variable résolue sans outil de puissance séparé.",

	tool_ohms_law_faq_q1: "Que dit la loi d'Ohm ?",
	tool_ohms_law_faq_a1: "Pour une résistance idéale en CC, V = I·R. Cette page montre aussi P = V·I.",
	tool_ohms_law_faq_q2: "Puis-je résoudre pour la tension ou le courant ?",
	tool_ohms_law_faq_a2: "Oui. Utilisez le sélecteur Résoudre pour choisir V, I ou R.",
	tool_ohms_law_faq_q3: "Ce modèle couvre-t-il les circuits CA ?",
	tool_ohms_law_faq_a3: "Non. Formes CC idéales uniquement — impédance et phase non incluses.",
	tool_ohms_law_faq_q4: "Que se passe-t-il si le courant est nul pour trouver R ?",
	tool_ohms_law_faq_a4: "R = V/I n'est pas défini pour I = 0. La page refuse ce cas.",
	tool_ohms_law_faq_q5: "Est-ce un conseil de câblage ou de sécurité ?",
	tool_ohms_law_faq_a5: "Non. Arithmétique pédagogique uniquement — pas de valeurs nominales produits ni de guidance de sécurité électrique.",

	tool_ohms_law_disclaimer: "Loi d'Ohm pédagogique uniquement — pas de conseil professionnel, de câblage ou de sécurité électrique.",
	tool_ohms_law_references: "Références manuelles standard sur la loi d'Ohm et la puissance électrique.",
	tool_ohms_law_ref_a_label: "Wikipédia — Loi d'Ohm",
	tool_ohms_law_ref_b_label: "Wikipédia — Puissance électrique",
};

export default fr;
