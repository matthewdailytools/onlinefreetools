/**
 * i18n tool shard (measuring-magnetic-fields / fr).
 * Recherche locale : mesurer un champ magnétique / intensité / gauss d’un aimant.
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_measuring_magnetic_fields_title: 'Mesurer un champ magnétique — Calculateur d’intensité',
	tool_measuring_magnetic_fields_description:
		'Mesurer un champ magnétique : saisissez la lecture d’une sonde de Hall ou d’un teslamètre et convertissez l’intensité. Exemple : 200 G → 0,02 T. Comparez le gauss d’un aimant à un tableau d’ordres de grandeur, ou estimez le champ axial d’un aimant droit. Le calcul reste dans le navigateur ; les nombres ne sont pas envoyés à un serveur.',
	tool_measuring_magnetic_fields_article:
		'D’abord l’instrument et la position de la sonde, ensuite la conversion. L’estimation géométrique ne remplace pas un appareil étalonné et ne donne pas une force d’arrachement en kg.',
	tool_measuring_magnetic_fields_calculate: 'Convertir',
	tool_measuring_magnetic_fields_sample: 'Exemple',
	tool_measuring_magnetic_fields_clear: 'Effacer',
	tool_measuring_magnetic_fields_estimate: 'Estimer le champ',
	tool_measuring_magnetic_fields_convert_heading: 'Convertir une lecture',
	tool_measuring_magnetic_fields_estimate_heading: 'Optionnel : estimer le champ d’un aimant',
	tool_measuring_magnetic_fields_value_label: 'Lecture',
	tool_measuring_magnetic_fields_value_ph: 'ex. 200',
	tool_measuring_magnetic_fields_unit_label: 'Unité sur l’appareil',
	tool_measuring_magnetic_fields_vacuum_label: 'Afficher aussi H dans le vide/l’air (A/m et œrsted)',
	tool_measuring_magnetic_fields_result_t: 'Tesla (T)',
	tool_measuring_magnetic_fields_result_mt: 'Millitesla (mT)',
	tool_measuring_magnetic_fields_result_ut: 'Microtesla (µT)',
	tool_measuring_magnetic_fields_result_nt: 'Nanotesla (nT)',
	tool_measuring_magnetic_fields_result_g: 'Gauss (G)',
	tool_measuring_magnetic_fields_result_mg: 'Milligauss (mG)',
	tool_measuring_magnetic_fields_result_kg: 'Kilogauss (kG)',
	tool_measuring_magnetic_fields_earth_line: 'Environ {n} fois le champ terrestre (~50 µT de référence pédagogique).',
	tool_measuring_magnetic_fields_result_h: 'H (A/m), vide/air',
	tool_measuring_magnetic_fields_result_oe: 'Œrsted (Oe), vide/air',
	tool_measuring_magnetic_fields_result_note:
		'Formule du champ : 1 T = 10⁴ G. H optionnel utilise B = μ₀H uniquement dans le vide/l’air ; B et H ne sont pas la même grandeur.',
	tool_measuring_magnetic_fields_err_generic: 'Saisissez une lecture finie et non négative.',
	tool_measuring_magnetic_fields_err_negative: 'Cette page traite la lecture comme une grandeur : les valeurs négatives sont refusées.',
	tool_measuring_magnetic_fields_err_z: 'La distance axiale z doit être ≥ 0 (mm depuis la face).',
	tool_measuring_magnetic_fields_err_grade: 'Choisissez un grade N de la liste (N35–N52).',
	tool_measuring_magnetic_fields_err_dims: 'Saisissez des dimensions finies et positives en millimètres.',
	tool_measuring_magnetic_fields_grade_label: 'Grade NdFeB (Br médian)',
	tool_measuring_magnetic_fields_shape_label: 'Forme',
	tool_measuring_magnetic_fields_shape_disc: 'Disque / cylindre',
	tool_measuring_magnetic_fields_shape_block: 'Pavé / aimant droit',
	tool_measuring_magnetic_fields_diam_label: 'Diamètre (mm)',
	tool_measuring_magnetic_fields_thick_label: 'Épaisseur selon l’axe (mm)',
	tool_measuring_magnetic_fields_len_label: 'Longueur de face (mm)',
	tool_measuring_magnetic_fields_width_label: 'Largeur de face (mm)',
	tool_measuring_magnetic_fields_z_label: 'Distance depuis la face z (mm)',
	tool_measuring_magnetic_fields_estimate_out_t: 'B axial (T)',
	tool_measuring_magnetic_fields_estimate_out_g: 'B axial (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'Aimantation axiale uniforme et formule disque (le pavé utilise un rayon équivalent). Le gradient près de la face est fort : ce n’est ni un teslamètre étalonné ni une force d’arrachement en kg.',
	tool_measuring_magnetic_fields_chart_title: 'Tableau d’intensité des aimants (ordres de grandeur)',
	tool_measuring_magnetic_fields_chart_col_source: 'Source',
	tool_measuring_magnetic_fields_chart_col_b: 'B typique',
	tool_measuring_magnetic_fields_chart_earth: 'Champ terrestre (contrôle de champ faible)',
	tool_measuring_magnetic_fields_chart_earth_b: '~25–65 µT (ici ~50 µT comme milieu)',
	tool_measuring_magnetic_fields_chart_fridge: 'Aimant de frigo / aimant faible (gauss)',
	tool_measuring_magnetic_fields_chart_fridge_b: '~5–50 mT (~50–500 G) près de la face',
	tool_measuring_magnetic_fields_chart_ndfeb: 'Surface NdFeB (champ d’un aimant)',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '~0,2–0,6 T typique près de la face — pas une force en kg',
	tool_measuring_magnetic_fields_chart_mri: 'IRM (ordre de grandeur seulement)',
	tool_measuring_magnetic_fields_chart_mri_b: '~1,5–3 T — pas une fiche technique ni un avis de sécurité',
	tool_measuring_magnetic_fields_how_title: 'Comment mesurer un champ magnétique',
	tool_measuring_magnetic_fields_how_body:
		'Choisissez l’appareil, placez la sonde, lisez l’unité, puis convertissez. Estimer un aimant droit est facultatif et ne remplace pas le mesureur.',
	tool_measuring_magnetic_fields_how_item_1:
		'Choisissez un instrument adapté : teslamètre ou sonde de Hall pour les aimants (mT–T) ; magnétomètre de téléphone seulement pour les champs faibles comme ~50 µT terrestres.',
	tool_measuring_magnetic_fields_how_item_2:
		'Placez le capteur sur l’axe qui vous intéresse, notez la distance à la face et surveillez la saturation (les capteurs bon marché saturent près d’un néodyme).',
	tool_measuring_magnetic_fields_how_item_3: 'Lisez le nombre et l’unité sur l’appareil (gauss ou tesla).',
	tool_measuring_magnetic_fields_how_item_4:
		'Cliquez sur Convertir et comparez au tableau. Exemple remplit 200 G → 0,02 T.',
	tool_measuring_magnetic_fields_how_item_5:
		'Sans appareil, ouvrez Estimer le champ et approximez le champ d’un disque ou d’un aimant droit d’après le grade et la taille — c’est une estimation.',
	tool_measuring_magnetic_fields_formula_title: 'Formule du champ magnétique',
	tool_measuring_magnetic_fields_formula_body:
		'La conversion passe par le tesla SI. H n’apparaît que si vide/air est coché.',
	tool_measuring_magnetic_fields_formula_item_1:
		'Formule : 1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT ; 1 G = 10⁻⁴ T ; 1 kG = 0,1 T ; 1 mG = 10⁻⁷ T.',
	tool_measuring_magnetic_fields_formula_item_2:
		'Intensité H (vide/air) : B(T) = μ₀ H(A/m), μ₀ = 4π×10⁻⁷ N·A⁻². 1 Oe ≈ 79,577 A/m ; 1 G correspond à 1 Oe seulement dans cette approximation. B et H ne sont pas la même grandeur.',
	tool_measuring_magnetic_fields_formula_item_3:
		'Disque (aimantation axiale uniforme) : B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)] en mètres. Le pavé utilise R = √(longueur×largeur de face / π) ; ce n’est pas un modèle éléments finis.',
	tool_measuring_magnetic_fields_formula_item_4:
		'Le flux Φ = B A vaut si B est uniforme et perpendiculaire à la surface : cette page sort B, pas Φ. L’estimation utilise Br rémanent, pas un solveur de moment magnétique complet. Les Br de grade N sont des milieux d’intervalle.',
	tool_measuring_magnetic_fields_example_title: 'Exemple',
	tool_measuring_magnetic_fields_example:
		'Exemple : la sonde de Hall lit 200 G. Convertir → 0,02 T = 20 mT = 2×10⁴ µT = 200 G, environ 400 fois les ~50 µT terrestres. Ce gauss se situe entre un aimant de frigo et une face NdFeB forte.',
	tool_measuring_magnetic_fields_usecases_title: 'Quand c’est utile',
	tool_measuring_magnetic_fields_usecase_1:
		'Cahier de labo : le teslamètre affiche 200 G et le rapport demande des teslas (mesurer le champ / intensité).',
	tool_measuring_magnetic_fields_usecase_2:
		'Gauss d’un aimant : comparer la lecture au tableau pour ne pas prendre une saturation de téléphone pour le champ de surface.',
	tool_measuring_magnetic_fields_usecase_3:
		'Champ d’un aimant droit : estimer B axial à une distance ; ce n’est pas la force entre deux aimants.',
	tool_measuring_magnetic_fields_faq_q1: 'Comment mesurer un champ magnétique ?',
	tool_measuring_magnetic_fields_faq_a1:
		'Pour les aimants, sonde de Hall ou teslamètre (mT–T). Placez la sonde sur l’axe, notez la distance et restez dans la plage : le magnétomètre du téléphone sature près du néodyme. Lisez l’unité puis convertissez ici (exemple : 200 G → 0,02 T). Un dynamomètre d’arrachement est un autre travail.',
	tool_measuring_magnetic_fields_faq_q2: 'Quelle est la formule du champ / de l’intensité ?',
	tool_measuring_magnetic_fields_faq_a2:
		'B : 1 T = 10⁴ G. Dans le vide ou l’air, H suit B = μ₀H ; 1 G ≈ 1 Oe seulement dans cette approximation. Le flux Φ = BA n’est pas calculé ici.',
	tool_measuring_magnetic_fields_faq_q3: 'Gauss d’un aimant face au tableau d’intensité ?',
	tool_measuring_magnetic_fields_faq_a3:
		'Le gauss est B dans cette unité. Le tableau donne des ordres de grandeur (Terre, frigo, NdFeB), pas une table de force d’arrachement en kg.',
	tool_measuring_magnetic_fields_faq_q4: 'La force magnétique est-elle le champ ?',
	tool_measuring_magnetic_fields_faq_a4:
		'Non. Cette page convertit et estime B. La force (entre deux aimants ou F = qvB) est un autre calcul et n’est pas résolue.',
	tool_measuring_magnetic_fields_faq_q5: 'Puis-je tracer des lignes de champ ou un champ uniforme ?',
	tool_measuring_magnetic_fields_faq_a5:
		'Pas de diagramme interactif. Qualitativement, B axial d’un aimant droit diminue avec la distance. Un champ uniforme est une idéalisation ; aimants de frigo et disques sont très non uniformes.',
	tool_measuring_magnetic_fields_disclaimer:
		'Les résultats sont des conversions et estimations pédagogiques, pas une mesure étalonnée ni un avis médical, d’implant ou d’IRM.',
	tool_measuring_magnetic_fields_references:
		'Brochure SI du BIPM (tesla) ; NIST CODATA μ₀ ; FAQ NOAA de géomagnétisme pour l’ordre du champ terrestre.',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — Brochure SI (tesla)',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — perméabilité magnétique du vide μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — FAQ géomagnétisme',
};

export default fr;
