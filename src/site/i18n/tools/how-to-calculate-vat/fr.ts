/**
 * i18n 工具分片（how-to-calculate-vat / fr）。
 * 功能：VAT/GST 对净价加税或从含税价拆税；常用税率芯片；反算校验。
 */
import type { SiteLangDict } from '../../../types';

/** 法语（fr）VAT/GST 计算器文案键表，与 en 分片键名一一对应。 */
const fr: SiteLangDict = {
	tool_vat_title: "Calculateur TVA / GST — ajouter la taxe au HT ou l’extraire du TTC",
	tool_vat_description: "Ajoutez la TVA ou la GST à un montant HT, ou extrayez la taxe et le HT d’un prix TTC (taxe incluse). Exemple : HT 100 à 20 % → TTC 120, taxe 20. Vous saisissez le taux — pas de tableau par pays. Calcul pédagogique dans le navigateur, pas un conseil de déclaration fiscale.",
	tool_vat_article: "Ajoutez TVA/GST à un prix HT ou décomposez un TTC en HT et taxe, avec étapes détaillées et contrôle inverse.",
	tool_vat_desc: "Ajoutez ou extrayez TVA/GST avec votre taux. Affiche HT, TTC, taxe et contrôle inverse.",

	tool_vat_safety_banner: "Usage pédagogique uniquement. Saisissez vous-même le taux qui s’applique — cette page ne propose pas de barèmes officiels et ne remplace pas un conseil fiscal.",
	tool_vat_mode_label: "Mode",
	tool_vat_mode_add: "Ajouter la taxe au HT",
	tool_vat_mode_extract: "Extraire la taxe du TTC",
	tool_vat_amount_label: "Montant",
	tool_vat_amount_ph: "ex. 100",
	tool_vat_rate_label: "TVA / GST %",
	tool_vat_rate_ph: "ex. 20",
	tool_vat_hint: "Choisissez ajouter (HT → TTC) ou extraire (TTC → HT). Taux en pourcentage ≥ 0. Les puces de taux sont des raccourcis — vérifiez le taux légal sur votre facture.",
	tool_vat_chips_label: "Raccourcis de taux courants",
	tool_vat_chip_5: "5 %",
	tool_vat_chip_10: "10 %",
	tool_vat_chip_20: "20 %",
	tool_vat_chip_21: "21 %",
	tool_vat_calculate: "Calculer",
	tool_vat_sample: "Charger l’exemple",
	tool_vat_clear: "Effacer",
	tool_vat_grossOut_label: "TTC",
	tool_vat_netOut_label: "HT",
	tool_vat_taxOut_label: "Taxe",
	tool_vat_row_check: "Contrôle inverse",
	tool_vat_steps_title: "Étapes",
	tool_vat_step_add_tpl: "Ajout : TTC = HT × (1 + taux/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_step_extract_tpl: "Extraction : HT = TTC ÷ (1 + taux/100) = {gross} ÷ (1 + {pct}/100) = {net}.",
	tool_vat_step_tax_tpl: "Taxe = TTC − HT = {gross} − {net} = {tax}.",
	tool_vat_step_check_tpl: "Vérification : HT × (1 + taux/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_result_note: "Le pourcentage vient de vous. Multi-taux, exonérations et règles de déclaration ne sont pas modélisés. Pédagogique uniquement — pas un conseil fiscal, comptable ou d’investissement.",
	tool_vat_err_generic: "Saisissez un montant positif et un taux ≥ 0 (par ex. montant 100 et taux 20).",

	tool_vat_how_title: "Comment utiliser le calculateur TVA / GST",
	tool_vat_how_body: "Choisissez le mode, le montant et le taux, puis Calculer. Charger l’exemple alterne : ajout 100@20 %, extraction 120@20 %, ajout 50@10 % et extraction 107,1@7 %.",
	tool_vat_how_item_1: "Choisir Ajouter la taxe au HT ou Extraire la taxe du TTC.",
	tool_vat_how_item_2: "Entrer le montant et le pourcentage TVA/GST (ou toucher une puce de taux).",
	tool_vat_how_item_3: "Cliquer Calculer pour voir TTC, HT, taxe et la ligne de contrôle.",
	tool_vat_how_item_4: "Utiliser Charger l’exemple pour parcourir des cas ajout/extraction courants.",

	tool_vat_why_choose_title: "Pourquoi utiliser ce calculateur TVA / GST",
	tool_vat_why_choose_item_1: "Les deux sens : taxe sur HT, ou HT et taxe sortis d’un prix TTC.",
	tool_vat_why_choose_item_2: "Contrôle inverse : HT × (1 + r) ramène au TTC.",
	tool_vat_why_choose_item_3: "Lignes d’étapes avec vos chiffres dans les formules.",
	tool_vat_why_choose_item_4: "Puces 5 / 10 / 20 / 21 % comme raccourcis — pas un barème légal.",
	tool_vat_why_choose_item_5: "Limite claire : vous saisissez le taux ; pas de matrice pays ni d’aide à la déclaration.",

	tool_vat_formula_title: "Formules TVA / GST",
	tool_vat_formula_body: "Soit r le taux décimal (pourcent ÷ 100). Les mêmes identités valent pour TVA, GST ou taxe sur ventes lorsqu’un seul pourcentage s’applique au HT.",
	tool_vat_formula_item_1: "Ajout : TTC = HT × (1 + r). Ex. : 100 × 1,20 = 120 à 20 %.",
	tool_vat_formula_item_2: "Extraction : HT = TTC ÷ (1 + r). Ex. : 120 ÷ 1,20 = 100 à 20 %.",
	tool_vat_formula_item_3: "Taxe = TTC − HT. Même exemple → taxe 20.",
	tool_vat_formula_item_4: "Part de taxe dans le TTC = r ÷ (1 + r). À 20 %, la taxe vaut un sixième du TTC.",
	tool_vat_formula_item_5: "GST vs TVA : même calcul ; libellés et obligations de déclaration varient selon le pays.",

	tool_vat_example_title: "Exemples détaillés",
	tool_vat_example: "Charger l’exemple commence par ajout : HT 100 à 20 % → TTC 120, taxe 20. Puis extraction de 120 vers HT 100. Ensuite HT 50 à 10 % → 55. Dernier cas : TTC 107,1 à 7 % ≈ HT 100. Confirmez toujours le taux de votre facture.",

	tool_vat_usecases_title: "Quand utiliser un calculateur TVA / GST",
	tool_vat_usecase_1: "Devoirs : ajouter la taxe au HT et montrer les étapes (1 + r).",
	tool_vat_usecase_2: "Ticket de caisse : partir d’un total TTC et retrouver HT et taxe.",
	tool_vat_usecase_3: "Devis rapide : appliquer un taux connu sans tableur.",
	tool_vat_usecase_4: "Comparer les termes GST et TVA avec la même arithmétique.",

	tool_vat_faq_q1: "Comment ajouter la TVA à un montant HT ?",
	tool_vat_faq_a1: "Multiplier par (1 + taux/100). HT 100 à 20 % → 100 × 1,20 = 120 TTC ; taxe = 20.",
	tool_vat_faq_q2: "Comment extraire la TVA d’un prix TTC ?",
	tool_vat_faq_a2: "Diviser par (1 + taux/100). TTC 120 à 20 % → 120 ÷ 1,20 = 100 HT ; taxe = 20.",
	tool_vat_faq_q3: "Proposez-vous les taux par pays ?",
	tool_vat_faq_a3: "Non. Saisissez le pourcentage. Les puces ne sont que des raccourcis, pas un barème officiel.",
	tool_vat_faq_q4: "La GST se calcule-t-elle différemment de la TVA ?",
	tool_vat_faq_a4: "Pour un seul pourcentage sur le HT, ajout et extraction sont identiques. Noms et déclaration diffèrent.",
	tool_vat_faq_q5: "Le taux peut-il être 0 % ?",
	tool_vat_faq_a5: "Oui. À 0 %, HT = TTC et taxe = 0 — utile pour des exemples pédagogiques.",
	tool_vat_faq_q6: "Plusieurs taux TVA sur une même facture ?",
	tool_vat_faq_a6: "Non. Calculez ligne par ligne ou utilisez un logiciel gérant taux mixtes et exonérations.",
	tool_vat_faq_q7: "Est-ce un conseil de déclaration fiscale ?",
	tool_vat_faq_a7: "Non. Calcul pédagogique seulement — pas de conseil fiscal, comptable ou d’investissement.",

	tool_vat_disclaimer: "Calcul TVA/GST pédagogique uniquement — pas un conseil financier, fiscal, comptable ou d’investissement.",
	tool_vat_references: "Investopedia et formules de manuel — pour contexte éducatif.",
	tool_vat_ref_a_label: "Investopedia — VAT",
	tool_vat_ref_b_label: "Investopedia — taxe sur ventes",
};

export default fr;
