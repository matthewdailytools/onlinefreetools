/**
 * i18n tool shard (color-from-image / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_color_from_image_article:
    'Paleta de colores dominantes en local más promedio regional al hacer clic, con HEX/RGB/HSL copiables.',
  tool_color_from_image_choose_file: 'Elegir imagen',
  tool_color_from_image_clear: 'Limpiar',
  tool_color_from_image_copied: 'Copiado',
  tool_color_from_image_copy: 'Copiar HEX',
  tool_color_from_image_count_label: 'Colores',
  tool_color_from_image_description:
    'Obtén colores dominantes y una paleta completa de cualquier foto — o usa el selector de color con clic en una región. Pasos: elige imagen, define cuántos colores (2–12), extrae, copia HEX/RGB/HSL, o haz clic en la vista previa para un promedio local. Ejemplo: seis tonos de una foto de marca y luego un clic en el logo para un acento — el archivo no sale del dispositivo.',
  tool_color_from_image_drop_hint: 'O suelta aquí un JPEG, PNG o WebP. La extracción ocurre en esta pestaña.',
  tool_color_from_image_empty: 'Elige una imagen primero.',
  tool_color_from_image_err_decode: 'Este navegador no pudo decodificar el archivo. Prueba JPEG, PNG o WebP.',
  tool_color_from_image_err_no_pixels: 'No hay píxeles opacos para muestrear — la imagen puede ser totalmente transparente.',
  tool_color_from_image_example:
    'Carga el ejemplo de cuatro bloques, deja Colores en 6 y extrae — deberías ver turquesa, ámbar, verde, crema y rojo entre las muestras. Luego haz clic en el círculo rojo: la tarjeta de color tomado muestra un HEX rojo del promedio ~7×7 alrededor de ese punto, listo para copiar.',
  tool_color_from_image_example_title: 'Ejemplo',
  tool_color_from_image_extract: 'Extraer',
  tool_color_from_image_faq_a1:
    'No. El cálculo de paleta y el muestreo por clic corren en local. Revisa la pestaña Red — la imagen no se envía por POST.',
  tool_color_from_image_faq_a2:
    'La página reduce la imagen, descarta píxeles de baja opacidad, divide el espacio de color con median-cut, promedia cada grupo y ordena por cuántas muestras cayó en cada uno.',
  tool_color_from_image_faq_a3:
    'La herramienta mapea el clic a píxeles de origen y promedia colores opacos en un cuadrado pequeño (~7×7). Obtienes HEX/RGB/HSL de esa región, aparte de la lista de paleta.',
  tool_color_from_image_faq_a4:
    'Fotos y capturas de UI son ruidosas en 1×1. Un promedio de región pequeña es más estable para acentos CSS y sigue reflejando dónde hiciste clic.',
  tool_color_from_image_faq_a5:
    'Solo se dibuja el primer fotograma, se usa para la paleta y está disponible para tomar color con clic.',
  tool_color_from_image_faq_q1: '¿Mi imagen sale del navegador?',
  tool_color_from_image_faq_q2: '¿Cómo se eligen los colores principales?',
  tool_color_from_image_faq_q3: '¿Qué pasa cuando hago clic en la imagen?',
  tool_color_from_image_faq_q4: '¿Por qué un clic no es un solo píxel?',
  tool_color_from_image_faq_q5: '¿Los GIF animados se analizan enteros?',
  tool_color_from_image_how_body:
    'Elige una foto y extrae una paleta: la página reduce una copia de trabajo (lado largo ~256 px), omite píxeles casi transparentes, agrupa colores y ordena por frecuencia. Por separado, haz clic en la vista previa para promediar un cuadrado pequeño alrededor de ese punto en resolución completa y copiar HEX, RGB o HSL — nada se sube.',
  tool_color_from_image_how_title: 'Cómo funciona',
  tool_color_from_image_palette_label: 'Paleta',
  tool_color_from_image_pct_tpl: '{pct}% de muestras',
  tool_color_from_image_pick_hint:
    'Haz clic en la imagen para promediar una región pequeña alrededor del punto (unos 7×7 píxeles de origen).',
  tool_color_from_image_pick_label: 'Color tomado',
  tool_color_from_image_pick_transparent: 'Ese punto no tiene píxeles opacos — haz clic en otro sitio.',
  tool_color_from_image_pick_xy_tpl: 'Cerca de ({x}, {y}) · promedio {size}×{size}',
  tool_color_from_image_preview_label: 'Origen — clic para tomar color',
  tool_color_from_image_rules_body:
    'La extracción de paleta y el clic para tomar color comparten una imagen pero responden preguntas distintas. Usa la lista si un color parece inesperado.',
  tool_color_from_image_rules_item_1:
    'El muestreo de paleta usa un bitmap reducido (borde máx. ~256 px) para que fotos grandes sigan siendo ágiles. Detalle fino puede fusionarse en tonos cercanos.',
  tool_color_from_image_rules_item_2:
    'Se ignoran píxeles con alfa menor de 128 tanto en la paleta como en los promedios por clic. Los puntos totalmente transparentes muestran un mensaje claro.',
  tool_color_from_image_rules_item_3:
    'Pides de 2 a 12 colores de paleta; en imágenes planas puede haber menos. Los colores se ordenan por proporción de muestras.',
  tool_color_from_image_rules_item_4:
    'El clic promedia píxeles opacos en una ventana de unos 7×7 alrededor del clic en coordenadas de origen (no solo la vista previa reducida). Es una muestra de región, no un cuentagotas de un solo píxel de laboratorio.',
  tool_color_from_image_rules_item_5: 'Privacidad: decodificación, cálculo de paleta y muestreo por clic corren en local en esta pestaña.',
  tool_color_from_image_rules_title: 'Qué debes esperar',
  tool_color_from_image_sample: 'Cargar ejemplo',
  tool_color_from_image_status_done: 'Listo — copia una muestra o haz clic en la imagen para tomar una región.',
  tool_color_from_image_status_extracting: 'Extrayendo paleta…',
  tool_color_from_image_status_picked: 'Tomado — haz clic en HEX/RGB/HSL para copiar.',
  tool_color_from_image_title: 'Extraer colores de imagen — paleta y clic',
  tool_color_from_image_usecase_1: 'Fotos de marca: saca una paleta y luego haz clic en un logo o botón para un acento concreto.',
  tool_color_from_image_usecase_2:
    'Capturas de UI: repasa la paleta de interfaz y luego haz clic en un chip o icono para el color exacto de esa región.',
  tool_color_from_image_usecase_3:
    'Ideas de degradado: toma dos acentos de la paleta o haciendo clic, luego abre la calculadora de gradientes.',
  tool_color_from_image_usecases_title: 'Cuándo encaja',
  tool_color_from_image_warn_animation: 'Archivos animados: solo se muestrea el primer fotograma.',
  tool_color_from_image_warn_large: 'Archivo grande (>25 MB): el muestreo puede ir lento.',
};
export default es;
