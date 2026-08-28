/**
 * i18n tool shard (measuring-magnetic-fields / es).
 * Búsqueda local: medir campos magnéticos / intensidad / calculadora de campo.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_measuring_magnetic_fields_title: 'Medir campos magnéticos — Calculadora de intensidad',
	tool_measuring_magnetic_fields_description:
		'Medir campos magnéticos: introduce la lectura de una sonda Hall o un gausímetro y convierte la intensidad. Ejemplo: 200 G → 0,02 T. Compara los gauss de un imán con una tabla de órdenes de magnitud, o estima el campo axial de un imán de barra. El cálculo se hace en el navegador; los números no se suben a un servidor.',
	tool_measuring_magnetic_fields_article:
		'Primero el instrumento y la colocación de la sonda; después la conversión. La estimación geométrica no sustituye un medidor calibrado ni da la fuerza de atracción en kilogramos.',
	tool_measuring_magnetic_fields_calculate: 'Convertir',
	tool_measuring_magnetic_fields_sample: 'Cargar ejemplo',
	tool_measuring_magnetic_fields_clear: 'Borrar',
	tool_measuring_magnetic_fields_estimate: 'Estimar campo',
	tool_measuring_magnetic_fields_convert_heading: 'Convertir una lectura',
	tool_measuring_magnetic_fields_estimate_heading: 'Opcional: estimar el campo de un imán',
	tool_measuring_magnetic_fields_value_label: 'Lectura',
	tool_measuring_magnetic_fields_value_ph: 'p. ej. 200',
	tool_measuring_magnetic_fields_unit_label: 'Unidad en el aparato',
	tool_measuring_magnetic_fields_vacuum_label: 'Mostrar también H en vacío/aire (A/m y oersted)',
	tool_measuring_magnetic_fields_result_t: 'Tesla (T)',
	tool_measuring_magnetic_fields_result_mt: 'Militesla (mT)',
	tool_measuring_magnetic_fields_result_ut: 'Microtesla (µT)',
	tool_measuring_magnetic_fields_result_nt: 'Nanotesla (nT)',
	tool_measuring_magnetic_fields_result_g: 'Gauss (G)',
	tool_measuring_magnetic_fields_result_mg: 'Miligauss (mG)',
	tool_measuring_magnetic_fields_result_kg: 'Kilogauss (kG)',
	tool_measuring_magnetic_fields_earth_line: 'Unas {n} veces el campo terrestre (~50 µT de referencia).',
	tool_measuring_magnetic_fields_result_h: 'H (A/m), vacío/aire',
	tool_measuring_magnetic_fields_result_oe: 'Oersted (Oe), vacío/aire',
	tool_measuring_magnetic_fields_result_note:
		'Fórmula del campo: 1 T = 10⁴ G. H opcional usa B = μ₀H solo en vacío/aire; B y H no son la misma magnitud.',
	tool_measuring_magnetic_fields_err_generic: 'Introduce una lectura finita y no negativa.',
	tool_measuring_magnetic_fields_err_negative: 'Esta página trata la lectura como magnitud: se rechazan valores negativos.',
	tool_measuring_magnetic_fields_err_z: 'La distancia axial z debe ser ≥ 0 (mm desde la cara).',
	tool_measuring_magnetic_fields_err_grade: 'Elige un grado N de la lista (N35–N52).',
	tool_measuring_magnetic_fields_err_dims: 'Introduce dimensiones finitas y positivas en milímetros.',
	tool_measuring_magnetic_fields_grade_label: 'Grado NdFeB (Br medio)',
	tool_measuring_magnetic_fields_shape_label: 'Forma',
	tool_measuring_magnetic_fields_shape_disc: 'Disco / cilindro',
	tool_measuring_magnetic_fields_shape_block: 'Bloque / imán de barra',
	tool_measuring_magnetic_fields_diam_label: 'Diámetro (mm)',
	tool_measuring_magnetic_fields_thick_label: 'Espesor axial (mm)',
	tool_measuring_magnetic_fields_len_label: 'Largo de la cara (mm)',
	tool_measuring_magnetic_fields_width_label: 'Ancho de la cara (mm)',
	tool_measuring_magnetic_fields_z_label: 'Distancia desde la cara z (mm)',
	tool_measuring_magnetic_fields_estimate_out_t: 'B axial (T)',
	tool_measuring_magnetic_fields_estimate_out_g: 'B axial (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'Magnetización axial uniforme y fórmula de disco (el bloque usa un radio equivalente). El gradiente cerca de la cara es fuerte: no es un gausímetro calibrado ni fuerza de arranque en kg.',
	tool_measuring_magnetic_fields_chart_title: 'Tabla de intensidad de imanes (órdenes de magnitud)',
	tool_measuring_magnetic_fields_chart_col_source: 'Fuente',
	tool_measuring_magnetic_fields_chart_col_b: 'B típico',
	tool_measuring_magnetic_fields_chart_earth: 'Campo terrestre (comprobación de campo débil)',
	tool_measuring_magnetic_fields_chart_earth_b: '~25–65 µT (aquí ~50 µT como punto medio)',
	tool_measuring_magnetic_fields_chart_fridge: 'Imán de nevera / imán débil (gauss)',
	tool_measuring_magnetic_fields_chart_fridge_b: '~5–50 mT (~50–500 G) cerca de la cara',
	tool_measuring_magnetic_fields_chart_ndfeb: 'Superficie NdFeB (campo de un imán)',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '~0,2–0,6 T típico cerca de la cara — no es fuerza en kg',
	tool_measuring_magnetic_fields_chart_mri: 'IRM (solo orden de magnitud)',
	tool_measuring_magnetic_fields_chart_mri_b: '~1,5–3 T — no es ficha técnica ni consejo de seguridad',
	tool_measuring_magnetic_fields_how_title: 'Cómo medir un campo magnético',
	tool_measuring_magnetic_fields_how_body:
		'Elige el aparato, coloca la sonda, lee la unidad y convierte. Estimar un imán de barra es opcional y no sustituye al medidor.',
	tool_measuring_magnetic_fields_how_item_1:
		'Elige un instrumento acorde: gausímetro o sonda Hall para imanes (mT–T); el magnetómetro del teléfono solo para campos débiles como los ~50 µT terrestres.',
	tool_measuring_magnetic_fields_how_item_2:
		'Coloca el sensor en el eje que te importa, anota la distancia a la cara y vigila la saturación (los sensores baratos se clavan junto a un neodimio).',
	tool_measuring_magnetic_fields_how_item_3: 'Lee el número y la unidad del aparato (gauss o tesla).',
	tool_measuring_magnetic_fields_how_item_4:
		'Pulsa Convertir y compara con la tabla. Cargar ejemplo rellena 200 G → 0,02 T.',
	tool_measuring_magnetic_fields_how_item_5:
		'Si aún no tienes medidor, abre Estimar campo y aproxima el campo de un disco o imán de barra por grado y tamaño: es una estimación.',
	tool_measuring_magnetic_fields_formula_title: 'Fórmula del campo magnético',
	tool_measuring_magnetic_fields_formula_body:
		'La conversión usa el tesla SI como eje. H solo aparece si marcas vacío/aire.',
	tool_measuring_magnetic_fields_formula_item_1:
		'Fórmula: 1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT; 1 G = 10⁻⁴ T; 1 kG = 0,1 T; 1 mG = 10⁻⁷ T.',
	tool_measuring_magnetic_fields_formula_item_2:
		'Intensidad H (vacío/aire): B(T) = μ₀ H(A/m), μ₀ = 4π×10⁻⁷ N·A⁻². 1 Oe ≈ 79,577 A/m; 1 G corresponde a 1 Oe solo en esa aproximación. B y H no son lo mismo.',
	tool_measuring_magnetic_fields_formula_item_3:
		'Disco (magnetización axial uniforme): B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)] en metros. El bloque usa R = √(largo×ancho / π); no es un modelo de elementos finitos.',
	tool_measuring_magnetic_fields_formula_item_4:
		'El flujo Φ = B A vale si B es uniforme y perpendicular al área: esta página da B, no Φ. La estimación usa Br remanente, no resuelve el momento magnético completo. Los Br de grado N son puntos medios de intervalo.',
	tool_measuring_magnetic_fields_example_title: 'Ejemplo',
	tool_measuring_magnetic_fields_example:
		'Ejemplo: la sonda Hall marca 200 G. Convertir → 0,02 T = 20 mT = 2×10⁴ µT = 200 G, unas 400 veces los ~50 µT terrestres. Ese valor queda entre un imán de nevera y una cara fuerte de NdFeB.',
	tool_measuring_magnetic_fields_usecases_title: 'Cuándo sirve',
	tool_measuring_magnetic_fields_usecase_1:
		'Cuaderno de laboratorio: el gausímetro marca 200 G y el informe pide tesla (medir el campo / intensidad).',
	tool_measuring_magnetic_fields_usecase_2:
		'Gauss de un imán: comparar la lectura con la tabla para no tomar una saturación del teléfono como campo de superficie.',
	tool_measuring_magnetic_fields_usecase_3:
		'Campo de un imán de barra: estimar B axial a una distancia; no es la fuerza entre dos imanes.',
	tool_measuring_magnetic_fields_faq_q1: '¿Cómo se mide un campo magnético?',
	tool_measuring_magnetic_fields_faq_a1:
		'Para imanes, sonda Hall o gausímetro (mT–T). Coloca la sonda en el eje, anota la distancia y respeta el rango: el magnetómetro del móvil se satura junto al neodimio. Lee la unidad y convierte aquí (ejemplo: 200 G → 0,02 T). Un dinamómetro de atracción es otro trabajo.',
	tool_measuring_magnetic_fields_faq_q2: '¿Cuál es la fórmula del campo / de la intensidad?',
	tool_measuring_magnetic_fields_faq_a2:
		'B: 1 T = 10⁴ G. En vacío o aire, H sigue B = μ₀H; 1 G ≈ 1 Oe solo en esa aproximación. El flujo Φ = BA no se calcula aquí.',
	tool_measuring_magnetic_fields_faq_q3: '¿Gauss de un imán frente a la tabla de intensidad?',
	tool_measuring_magnetic_fields_faq_a3:
		'Los gauss son B en esa unidad. La tabla son órdenes de magnitud (Tierra, nevera, NdFeB), no una tabla de fuerza de arranque en kg.',
	tool_measuring_magnetic_fields_faq_q4: '¿La fuerza magnética es lo mismo que el campo?',
	tool_measuring_magnetic_fields_faq_a4:
		'No. Aquí se convierte y estima B. La fuerza (entre dos imanes o F = qvB) es otro cálculo y no se resuelve.',
	tool_measuring_magnetic_fields_faq_q5: '¿Puedo dibujar líneas de campo o un campo uniforme?',
	tool_measuring_magnetic_fields_faq_a5:
		'No hay diagrama interactivo. Cualitativamente, B axial de un imán de barra cae con la distancia. Un campo uniforme es una idealización; los imanes de nevera y disco son muy no uniformes.',
	tool_measuring_magnetic_fields_disclaimer:
		'Los resultados son conversiones y estimaciones educativas, no una medida calibrada ni consejo médico, de implantes o de IRM.',
	tool_measuring_magnetic_fields_references:
		'Folleto SI del BIPM (tesla); NIST CODATA μ₀; FAQ de geomagnetismo de NOAA para el orden del campo terrestre.',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — Folleto SI (tesla)',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — permeabilidad magnética del vacío μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — FAQ de geomagnetismo',
};

export default es;
