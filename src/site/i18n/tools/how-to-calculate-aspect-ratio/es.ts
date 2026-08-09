/**
 * i18n tool shard (how-to-calculate-aspect-ratio / es).
 * Spanish rewrite for búsqueda «relación de aspecto / escalar proporción».
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_aspect_ratio_title: 'Calculadora de relación de aspecto — Calcular y escalar proporciones',
	tool_aspect_ratio_description:
		'Obtén la relación de aspecto simplificada a partir del ancho × alto y escala a un ancho (o alto) objetivo. Los ajustes 16:9, 4:3 y 1:1 son opciones en la misma página. Ejemplo: 1920×1080 → 16:9; ancho 1280 → alto 720. Funciona en el navegador; los números permanecen en tu dispositivo y no se suben al servidor.',
	tool_aspect_ratio_article:
		'Reduce un par de píxeles a su proporción más simple y mantiene esa proporción al cambiar el tamaño de exportación. Útil para vídeo, maquetas y viewports.',
	tool_aspect_ratio_calculate: 'Calcular',
	tool_aspect_ratio_sample: 'Cargar ejemplo',
	tool_aspect_ratio_clear: 'Limpiar',
	tool_aspect_ratio_preset_label: 'Ajuste predefinido (opcional)',
	tool_aspect_ratio_preset_custom: 'Personalizado',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: 'Ancho',
	tool_aspect_ratio_h_label: 'Alto',
	tool_aspect_ratio_w_ph: 'p. ej. 1920',
	tool_aspect_ratio_h_ph: 'p. ej. 1080',
	tool_aspect_ratio_scale_mode_label: 'Escalar por',
	tool_aspect_ratio_scale_by_w: 'Ancho objetivo',
	tool_aspect_ratio_scale_by_h: 'Alto objetivo',
	tool_aspect_ratio_target_w_label: 'Ancho objetivo',
	tool_aspect_ratio_target_h_label: 'Alto objetivo',
	tool_aspect_ratio_target_w_ph: 'p. ej. 1280',
	tool_aspect_ratio_target_h_ph: 'p. ej. 720',
	tool_aspect_ratio_result_ratio: 'Relación de aspecto',
	tool_aspect_ratio_result_scaled: 'Tamaño escalado',
	tool_aspect_ratio_err_input: 'Introduce ancho y alto positivos, y un tamaño objetivo positivo para el lado que escalas.',
	tool_aspect_ratio_how_title: 'Cómo funciona',
	tool_aspect_ratio_how_body:
		'Escribe ancho y alto o elige un preset 16:9, 4:3 o 1:1. La herramienta simplifica con el máximo común divisor y calcula el otro lado al fijar un objetivo. Todo ocurre en tu pestaña; no se sube nada al servidor.',
	tool_aspect_ratio_formula_title: 'Fórmula y supuestos',
	tool_aspect_ratio_formula_body: 'La simplificación y el escalado usan el mcd del par de entrada:',
	tool_aspect_ratio_formula_item_1: 'Sea g = mcd(redondeo(W), redondeo(H)). Relación = (W÷g):(H÷g).',
	tool_aspect_ratio_formula_item_2: 'Por ancho: H′ = anchoObj × H ÷ W. Por alto: W′ = altoObj × W ÷ H.',
	tool_aspect_ratio_formula_item_3: 'Los presets solo rellenan tamaños de ejemplo; no son páginas aparte.',
	tool_aspect_ratio_example_title: 'Ejemplo',
	tool_aspect_ratio_example:
		'Ejemplo: 1920×1080. mcd(1920,1080)=120 → 16:9. Con ancho 1280, el alto = 1280 × 1080 ÷ 1920 = 720.',
	tool_aspect_ratio_usecases_title: 'Cuándo usarla',
	tool_aspect_ratio_usecase_1: 'Elegir un tamaño de exportación de vídeo 16:9 sin deformar la imagen.',
	tool_aspect_ratio_usecase_2: 'Ajustar un lienzo de diseño a la proporción de un móvil o monitor.',
	tool_aspect_ratio_usecase_3: 'Convertir una resolución conocida en una etiqueta corta de proporción.',
	tool_aspect_ratio_faq_q1: '¿Puedo escalar por altura?',
	tool_aspect_ratio_faq_a1: 'Sí. Cambia a «Alto objetivo» y se calcula el ancho que mantiene la misma relación.',
	tool_aspect_ratio_faq_q2: '¿Cómo se simplifica la relación?',
	tool_aspect_ratio_faq_a2: 'Se divide ancho y alto por su máximo común divisor tras redondear; 1920×1080 pasa a 16:9.',
	tool_aspect_ratio_faq_q3: '¿Por qué 16:9 no tiene URL propia?',
	tool_aspect_ratio_faq_a3: 'Porque es un punto de partida habitual; mantenerlo como opción evita calculadoras casi idénticas.',
	tool_aspect_ratio_faq_q4: '¿Se suben mis números?',
	tool_aspect_ratio_faq_a4: 'No. El cálculo se hace en tu navegador, en el dispositivo, sin subir al servidor.',
	tool_aspect_ratio_references: 'NIST SP 811 sobre conversiones de longitud y unidades.',
	tool_aspect_ratio_ref_nist_label: 'NIST — Publicación especial 811 (conversiones)',
};

export default es;
