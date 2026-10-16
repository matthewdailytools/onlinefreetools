/**
 * i18n 工具分片（convert-word-document-to-pdf / es）。
 * 西班牙语检索向重写：Convertir un documento Word a PDF。
 * 键与 en.ts 完全一致，含 rules_item_5。
 * 流水线：.docx → HTML 预览 → PDF；仅在浏览器内处理，文件不上传服务器。
 */
import type { SiteLangDict } from '../../../types';

/** 西班牙语文案表；键名与英文母版一一对应。 */
const es: SiteLangDict = {
  tool_convert_word_document_to_pdf_article: "El .docx se vuelve PDF en esta pestaña. El archivo se queda en su dispositivo y no se sube a un servidor.",
  tool_convert_word_document_to_pdf_choose_file: "Elegir un archivo Word (.docx)",
  tool_convert_word_document_to_pdf_choose_files: "Elegir archivos",
  tool_convert_word_document_to_pdf_clear: "Limpiar",
  tool_convert_word_document_to_pdf_convert: "Convertir",
  tool_convert_word_document_to_pdf_desc: "Convertir un documento Word a PDF en el navegador: elija el .docx, revise la vista previa HTML y exporte. El archivo se queda en el dispositivo y no se sube a un servidor.",
  tool_convert_word_document_to_pdf_description: "El resultado es un PDF a partir del texto del Word. Elija el .docx con «Elegir un archivo Word (.docx)», revise la vista previa HTML y pulse «Convertir» y luego «Descargar PDF». El archivo se queda en este dispositivo y no se sube a un servidor. «Cargar ejemplo» arma un párrafo de muestra y un PDF de una página.",
  tool_convert_word_document_to_pdf_download: "Descargar PDF",
  tool_convert_word_document_to_pdf_drop_hint: "O suelte un .docx aquí. El proceso se queda en esta pestaña.",
  tool_convert_word_document_to_pdf_empty: "Primero elija un archivo .docx.",
  tool_convert_word_document_to_pdf_err_convert: "La conversión falló. Pruebe con un documento más simple.",
  tool_convert_word_document_to_pdf_err_encrypted: "Este archivo parece protegido con contraseña. Desbloquéelo antes.",
  tool_convert_word_document_to_pdf_err_load: "No se pudo leer el archivo .docx.",
  tool_convert_word_document_to_pdf_err_notext: "No hay texto de cuerpo legible en este documento.",
  tool_convert_word_document_to_pdf_err_pdfjs: "No se pudo cargar el visor de PDF.",
  tool_convert_word_document_to_pdf_example: "«Cargar ejemplo» crea un .docx con la frase «Párrafo de Word de ejemplo para la conversión.», muestra la vista previa HTML y exporta un PDF de una página.",
  tool_convert_word_document_to_pdf_example_title: "Ejemplo",
  tool_convert_word_document_to_pdf_faq_a1: "No. La lectura y la exportación del PDF ocurren en esta pestaña; los scripts se cargan desde este sitio. El documento no se sube a nuestros servidores.",
  tool_convert_word_document_to_pdf_faq_a2: "El recorrido es .docx, vista previa HTML y después PDF. Encabezados, formas flotantes y algunas fuentes se aplanan. Si ya tiene el marcado, use «Convertir HTML a PDF».",
  tool_convert_word_document_to_pdf_faq_a3: "No. Guárdelo antes como .docx. Esta página solo acepta el paquete Office Open XML y no hace OCR de un escaneo.",
  tool_convert_word_document_to_pdf_faq_a4: "Aquí se parte de un Word que ya existe. «Escribir un documento PDF online» es un editor en blanco.",
  tool_convert_word_document_to_pdf_faq_a5: "Un .docx grande puede ir lento. Pruebe primero en un navegador de escritorio.",
  tool_convert_word_document_to_pdf_faq_q1: "¿El archivo Word sale de este equipo?",
  tool_convert_word_document_to_pdf_faq_q2: "¿Por qué el PDF se ve más simple que en Word?",
  tool_convert_word_document_to_pdf_faq_q3: "¿Puedo pasar un .doc antiguo?",
  tool_convert_word_document_to_pdf_faq_q4: "¿En qué se diferencia de escribir un PDF en el navegador?",
  tool_convert_word_document_to_pdf_faq_q5: "¿Sirve para archivos grandes?",
  tool_convert_word_document_to_pdf_how_body: "Para pasar de Word a PDF, abra el archivo con «Elegir un archivo Word (.docx)» o «Cargar ejemplo», lea la zona «Vista previa HTML» y pulse «Convertir» y «Descargar PDF». El archivo no sale de esta pestaña.",
  tool_convert_word_document_to_pdf_how_item_1: "Pulse «Elegir un archivo Word (.docx)» o «Cargar ejemplo».",
  tool_convert_word_document_to_pdf_how_item_2: "Lea la zona «Vista previa HTML» del texto.",
  tool_convert_word_document_to_pdf_how_item_3: "Pulse «Convertir» para armar el PDF desde esa vista previa.",
  tool_convert_word_document_to_pdf_how_item_4: "Pulse «Descargar PDF» cuando el estado diga «Listo.».",
  tool_convert_word_document_to_pdf_how_title: "Cómo convertir un documento Word a PDF",
  tool_convert_word_document_to_pdf_preview_label: "Vista previa HTML",
  tool_convert_word_document_to_pdf_rules_body: "Solo se acepta .docx. La maquetación, los encabezados y los estilos complejos pueden aplanarse en el PDF.",
  tool_convert_word_document_to_pdf_rules_item_1: "La tarea: convertir un documento Word en un PDF imprimible dentro del navegador.",
  tool_convert_word_document_to_pdf_rules_item_2: "Solo en su dispositivo; el archivo no se sube a un servidor.",
  tool_convert_word_document_to_pdf_rules_item_3: "El .doc antiguo y los escaneos de solo imagen no pasan por OCR.",
  tool_convert_word_document_to_pdf_rules_item_4: "Un paquete cifrado o dañado falla con un aviso legible.",
  tool_convert_word_document_to_pdf_rules_item_5: "Encabezados, formas flotantes y algunas fuentes se aplanan porque el camino es .docx, HTML y luego PDF.",
  tool_convert_word_document_to_pdf_rules_title: "Qué conserva esta conversión",
  tool_convert_word_document_to_pdf_sample: "Cargar ejemplo",
  tool_convert_word_document_to_pdf_sample_paragraph: "Párrafo de Word de ejemplo para la conversión.",
  tool_convert_word_document_to_pdf_status_done: "Listo.",
  tool_convert_word_document_to_pdf_status_working: "Convirtiendo…",
  tool_convert_word_document_to_pdf_title: "Convertir un documento Word a PDF",
  tool_convert_word_document_to_pdf_usecase_1: "Estudiantes: previsualizar un .docx corto y luego imprimirlo",
  tool_convert_word_document_to_pdf_usecase_2: "Oficina sin Word de escritorio, para entregar un borrador en PDF",
  tool_convert_word_document_to_pdf_usecase_3: "Cartas que no pueden salir del dispositivo",
  tool_convert_word_document_to_pdf_usecases_title: "Para quién encaja",
  tool_convert_word_document_to_pdf_warn_large: "Archivo grande: puede ir lento.",
};
export default es;
