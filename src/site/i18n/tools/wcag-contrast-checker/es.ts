/**
 * i18n tool shard (wcag-contrast-checker / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA texto grande',
  tool_wcag_contrast_checker_aa_normal: 'AA texto normal',
  tool_wcag_contrast_checker_aaa_large: 'AAA texto grande',
  tool_wcag_contrast_checker_aaa_normal: 'AAA texto normal',
  tool_wcag_contrast_checker_article:
    'Calculadora de contraste WCAG con luminancia relativa, insignias AA/AAA, vista previa y sugerencias de color accesibles — todo en el navegador.',
  tool_wcag_contrast_checker_bad_hex: 'Introduce colores HEX válidos (#RGB o #RRGGBB).',
  tool_wcag_contrast_checker_bg_label: 'Fondo',
  tool_wcag_contrast_checker_check: 'Calcular',
  tool_wcag_contrast_checker_clear: 'Limpiar',
  tool_wcag_contrast_checker_copy: 'Copiar resumen',
  tool_wcag_contrast_checker_copy_done: 'Copiado',
  tool_wcag_contrast_checker_desc:
    'Comprueba el ratio de contraste y si cumple AA/AAA — sin subir colores al servidor.',
  tool_wcag_contrast_checker_description:
    'Elige color de texto y fondo para ver el ratio WCAG y el cumplimiento AA/AAA en texto normal y grande. Pasos: selecciona o escribe HEX, pulsa Calcular, lee el ratio y las insignias, intercambia o prueba sugerencias. Ejemplo: #767676 sobre #ffffff ≈ 4,54:1 — pasa AA en texto normal, no alcanza AAA en texto normal. Los colores permanecen en tu navegador.',
  tool_wcag_contrast_checker_empty: 'Calcula primero y luego copia.',
  tool_wcag_contrast_checker_example:
    'Carga el ejemplo: primer plano #767676 sobre fondo #ffffff da unos 4,54:1. AA texto normal aprueba (≥4,5:1), AA texto grande aprueba (≥3:1), AAA texto normal falla (≥7:1), AAA texto grande aprueba (≥4,5:1). Intercambia colores para ver cómo cambia el ratio.',
  tool_wcag_contrast_checker_example_title: 'Ejemplo',
  tool_wcag_contrast_checker_fail: 'No cumple',
  tool_wcag_contrast_checker_faq_a1:
    'AA texto normal exige al menos 4,5:1; AA texto grande (18 pt regular o 14 pt negrita) 3:1; AAA texto normal 7:1; AAA texto grande 4,5:1. Esta página muestra las cuatro insignias a la vez.',
  tool_wcag_contrast_checker_faq_a2:
    'El texto grande admite menos contraste porque ocupa más espacio. WCAG lo define como ≥18 pt regular o ≥14 pt en negrita. La vista previa incluye una línea grande y otra normal para comparar.',
  tool_wcag_contrast_checker_faq_a3:
    'No. El cálculo se hace en tu navegador. Revisa la pestaña Red: los valores de color no se envían.',
  tool_wcag_contrast_checker_faq_a4:
    'Si el par queda por debajo de 4,5:1, puede sugerir un primer plano o fondo más claro u oscuro que alcance AA en texto normal. Son puntos de partida mezclando hacia blanco o negro, no paletas de marca finales.',
  tool_wcag_contrast_checker_faq_a5:
    'Usa esta página para validar cualquier par texto/fondo. Para una paleta de marca con tokens semánticos, abre la herramienta de tokens de color; también puedes muestrear colores de una foto con la herramienta de extracción.',
  tool_wcag_contrast_checker_faq_q1: '¿Cuáles son los umbrales de contraste WCAG?',
  tool_wcag_contrast_checker_faq_q2: '¿Qué se considera texto grande?',
  tool_wcag_contrast_checker_faq_q3: '¿Se suben mis colores?',
  tool_wcag_contrast_checker_faq_q4: '¿Cómo usar las sugerencias de color?',
  tool_wcag_contrast_checker_faq_q5: '¿Qué relación tiene con los tokens de marca?',
  tool_wcag_contrast_checker_fg_label: 'Primer plano',
  tool_wcag_contrast_checker_how_body:
    'Define texto y fondo con el selector o escribiendo HEX. La página convierte sRGB a luminancia relativa, calcula el ratio y muestra Aprobado/No cumple para AA y AAA (texto normal y grande). Intercambia el par, copia un resumen o aplica una sugerencia cuando el contraste es bajo.',
  tool_wcag_contrast_checker_how_title: 'Cómo funciona',
  tool_wcag_contrast_checker_pass: 'Cumple',
  tool_wcag_contrast_checker_preview_label: 'Vista previa',
  tool_wcag_contrast_checker_preview_large: 'Muestra de texto grande',
  tool_wcag_contrast_checker_preview_normal: 'Muestra de texto normal',
  tool_wcag_contrast_checker_ratio_label: 'Ratio de contraste',
  tool_wcag_contrast_checker_rules_body:
    'El contraste WCAG depende de la luminancia relativa, no solo del matiz. Consulta estas reglas si el ratio sorprende.',
  tool_wcag_contrast_checker_rules_item_1:
    'La luminancia relativa L sale de los canales sRGB tras la curva de linearización WCAG. Ratio = (Lclaro + 0,05) / (Loscuro + 0,05).',
  tool_wcag_contrast_checker_rules_item_2:
    'Umbrales: AA texto normal 4,5:1, AA texto grande 3:1, AAA texto normal 7:1, AAA texto grande 4,5:1. Un solo ratio alimenta las cuatro insignias.',
  tool_wcag_contrast_checker_rules_item_3:
    'Solo HEX sRGB opaco (#RGB o #RRGGBB). HEX inválido muestra error; primer plano y fondo iguales dan 1:1 y fallan todos los niveles.',
  tool_wcag_contrast_checker_rules_item_4:
    'Privacidad: los colores se procesan localmente en esta pestaña — nada va al servidor.',
  tool_wcag_contrast_checker_rules_title: 'Reglas a tener en cuenta',
  tool_wcag_contrast_checker_sample: 'Ejemplo',
  tool_wcag_contrast_checker_suggest_bg: 'Prueba fondo {hex} con este primer plano para AA texto normal.',
  tool_wcag_contrast_checker_suggest_fg: 'Prueba primer plano {hex} sobre este fondo para AA texto normal.',
  tool_wcag_contrast_checker_suggest_label: 'Sugerencias',
  tool_wcag_contrast_checker_suggest_none: 'Ya cumple AA en texto normal (4,5:1).',
  tool_wcag_contrast_checker_swap: 'Intercambiar',
  tool_wcag_contrast_checker_title: 'Comprobador de contraste WCAG — ratio AA/AAA',
  tool_wcag_contrast_checker_usecase_1:
    'Diseño UI: valida cuerpo de texto y etiquetas sobre el fondo de marca antes de entregar.',
  tool_wcag_contrast_checker_usecase_2:
    'Botones y chips: comprueba blanco sobre color o color sobre blanco para AA normal o grande.',
  tool_wcag_contrast_checker_usecase_3:
    'Modo oscuro: intercambia superficies claras/oscurecidas y confirma que el texto secundario sigue en 4,5:1 o 3:1 en grande.',
  tool_wcag_contrast_checker_usecases_title: 'Cuándo encaja',
};
export default es;
