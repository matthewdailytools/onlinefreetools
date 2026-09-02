/**
 * Topic leaf IG 其余八语：检索向独立重写（非英模锁句）。
 * 结构须与 topic-ig-copy-en.mjs 对齐：同 chrome 键、同 18 主题、同 row/secondary slug、同 flow 长度、FAQ×4、同 cite id。
 * 由 build-topic-ig.mjs 动态 import；勿在生成物里改。
 */
import { buildArTopics } from './topic-ig-copy-rest-ar.mjs';
import { buildPtTopics } from './topic-ig-copy-rest-pt.mjs';
import { buildIdTopics } from './topic-ig-copy-rest-id.mjs';
import { buildFrTopics } from './topic-ig-copy-rest-fr.mjs';
import { buildJaTopics } from './topic-ig-copy-rest-ja.mjs';
import { buildRuTopics } from './topic-ig-copy-rest-ru.mjs';
import { buildDeTopics } from './topic-ig-copy-rest-de.mjs';
// 以上分文件避免单文件超限；PACKS 仍从此入口导出。

/**
 * 表行：任务、已有输入、何时跳过；card 缺省等于 need。
 * @param {string} job
 * @param {string} need
 * @param {string} skip
 * @param {string} [card]
 */
const r = (job, need, skip, card) => ({ job, need, skip, card: card || need });

/**
 * 组装一语包。
 * @param {Record<string, string>} chrome
 * @param {Record<string, object>} topics
 */
const pack = (chrome, topics) => ({ chrome, topics });

/** 西班牙语表头（tú，工具站口语） */
const chromeEs = {
  topics_ig_col_job: 'Qué quieres resolver',
  topics_ig_col_tool: 'Calculadora de este sitio',
  topics_ig_col_need: 'Qué ya tienes a mano',
  topics_ig_col_skip: 'Mejor no abras esta página si',
  topics_ig_workflow: 'Orden que suele funcionar',
  topics_ig_related: 'Otros temas cercanos',
  topics_ig_refs: 'Fuentes',
};

/** @type {Record<string, object>} */
const topicsEs = {
  'health-body': {
    title: '¿IMC, calorías del día o macros: por cuál empiezas?',
    desc: 'El IMC solo criba talla y peso. El TDEE arma un presupuesto de kcal; los macros lo parten. Es educativo, no un diagnóstico. Sin plicómetro no inventes grasa corporal.',
    intro:
      'Ábrelo si tienes talla, peso, edad, sexo, actividad o un entreno reciente y quieres un número transparente antes de hablar con un clínico o un entrenador.',
    tableTitle: 'Qué calculadora encaja con los datos que ya tienes',
    groups: {
      screening: 'Cribado (sin analíticas)',
      energy: 'Presupuesto energético y luego macros',
      composition: 'Estimación de grasa (hace falta medir más)',
      training: 'Zonas de pulso y carga de fuerza',
    },
    rows: {
      'how-to-calculate-bmi': r(
        'Cribado talla–peso',
        'Solo estatura y peso. Categorías adultas de población, no músculo frente a grasa.',
        'Estás embarazada, con edema o eres atleta muy musculado: el IMC te clasifica mal.'
      ),
      'how-to-calculate-ideal-weight': r(
        'Franja de peso a partir de la talla/complexión',
        'Talla más el marco o la fórmula que lista la página.',
        'Necesitas ingesta (usa TDEE) o % de grasa (solo si tienes pliegues).'
      ),
      'how-to-calculate-bmr-tdee': r(
        'Gasto en reposo y kcal del día',
        'Edad, sexo, talla, peso y un factor de actividad que puedas defender.',
        'Solo querías la categoría de IMC, o no tienes un nivel de actividad honesto.'
      ),
      'how-to-calculate-macros': r(
        'Repartir un objetivo de kcal ya elegido',
        'Un número diario de kcal (casi siempre del TDEE) y una política de proteína/carbo/grasa.',
        'Aún no tienes presupuesto calórico: pasa primero por TDEE.'
      ),
      'how-to-calculate-body-fat': r(
        'Composición con pliegues o medidas Navy',
        'Plicómetro, cinta o las medidas Navy que pide el formulario.',
        'No tienes esas medidas: no inventes milímetros de pliegue.'
      ),
      'how-to-calculate-heart-rate': r(
        'Zonas cardio con edad o un FC máx. real',
        'Edad o un esfuerzo reciente al máximo de pulso.',
        'Estás cambiando medicación que altera el pulso: pregunta primero en consulta.'
      ),
      'how-to-calculate-pace': r(
        'Ritmo a partir de distancia y tiempo conocidos',
        'Una carrera o trote reciente de distancia declarada.',
        'Necesitas edad civil o husos: eso vive en Tiempo y calendario.'
      ),
      'how-to-calculate-one-rep-max': r(
        'Carga de barra desde una serie submáxima',
        'Una serie reciente honesta (reps y kg), no al fallo feo.',
        'No tienes registro reciente, o necesitas programación más allá de un estimado.'
      ),
    },
    flow: [
      'Criba el tamaño con IMC solo si talla y peso es todo lo que tienes.',
      'Fija el presupuesto diario con TDEE y un factor de actividad defendible.',
      'Parte ese presupuesto en macros; recalcula si cambian peso o volumen de entreno.',
    ],
    exampleTitle: 'Cadena trabajada (educativa, no prescripción)',
    exampleBody:
      'Ejemplo: 70 kg, 175 cm, 30 años, actividad moderada. Primero el IMC como cribado. El TDEE esboza kcal/día. Los macros parten proteína/carbo/grasa. Salta grasa corporal si no hay pliegues ni cinta Navy. Recalcula tras un cambio de peso material; no es consejo médico.',
    boundary:
      'El ritmo también aparece en Tiempo y calendario. La notación (cifras significativas) es Matemáticas, no un diagnóstico.',
    secondary: {},
    faq: [
      {
        q: '¿Un «IMC saludable» diagnostica algo?',
        a: 'No. La OMS usa el IMC en estudios de población. En persona importan cintura, analíticas y un clínico. El número es solo contexto.',
      },
      {
        q: '¿Puedo armar macros con el BMR en vez del TDEE?',
        a: 'Los planes suelen partir del TDEE (o de un objetivo ajustado por un coach). El BMR es solo reposo; comer al BMR no es dieta por defecto.',
      },
      {
        q: '¿Por qué 1RM y ritmo piden un esfuerzo reciente?',
        a: 'Extrapolan. Un PR viejo o una serie al fallo tuerce la siguiente sesión. Usa un esfuerzo reciente y redondea a la baja.',
      },
      {
        q: '¿Estas páginas suben mis medidas a un servidor?',
        a: 'Las marcadas «sin subir» corren en tu pestaña. Aun así, no pegues historiales identificables si tu política prohíbe cualquier herramienta en línea.',
      },
    ],
    cites: {
      'who-bmi': 'OMS: ficha de obesidad y sobrepeso (contexto de IMC adulto)',
    },
  },
  'personal-money': {
    title: '¿Propina, cuota mensual o interés compuesto: qué cuenta primero?',
    desc: 'Propina, descuento o IVA en caja; EMI o liquidación si hay préstamo; interés compuesto cuando tienes tasa y plazo. Matemática educativa, no asesoría financiera.',
    intro:
      'Para quien revisa un ticket, una tarifa, un bosquejo de préstamo o cómo la inflación mueve el poder de compra. Confirma con el emisor antes de firmar.',
    tableTitle: 'Empareja el momento de caja con la calculadora',
    groups: {
      checkout: 'En caja',
      pay: 'Nómina y tarifas freelance',
      borrow: 'Cuotas y pagos extra',
      growth: 'Crecimiento, inflación y cambio porcentual',
    },
    rows: {
      'how-to-calculate-tip': r(
        'Propina sobre el consumo',
        'Subtotal antes de propina y el % que eliges.',
        'El importe es IVA o una cuota de préstamo: usa IVA o EMI.'
      ),
      'how-to-calculate-discount': r(
        'Precio de oferta con un % de descuento',
        'Precio original y el % de la etiqueta.',
        'Necesitas recargo sobre coste (finanzas de negocio) o un bosquejo hipotecario (EMI).'
      ),
      'how-to-calculate-vat': r(
        'Precio sin IVA frente a con IVA',
        'Importe neto o bruto más el tipo de la factura.',
        'Estás partiendo una propina de restaurante o un auto a 5 años.'
      ),
      'how-to-calculate-salary-hourly': r(
        'Comparar sueldo anual y tarifa por hora',
        'Pago anual (o mensual) y las horas/año que realmente trabajarás.',
        'Necesitas EMI o una propina en un ticket.'
      ),
      'how-to-calculate-emi': r(
        'Bosquejo de cuota fija',
        'Capital, TEA/APR y plazo de la hoja del prestamista—no un «12%» redondo si hay comisiones.',
        'Solo querías propina, o el orden de pagos extra (liquidación de deudas).'
      ),
      'how-to-calculate-debt-payoff': r(
        'Avalancha/bola de nieve con extras',
        'Cada saldo, tasa, mínimo y el extra que puedes enviar.',
        'Tienes una oferta nueva que dimensionar: empieza por EMI y luego ven aquí.'
      ),
      'how-to-calculate-compound-interest': r(
        'Saldo tras tasa × tiempo × capitalización',
        'Capital, tasa, años y frecuencia de capitalización del producto.',
        'Solo tienes inicio y fin (usa CAGR) o una heurística de duplicar (regla del 72).'
      ),
      'how-to-calculate-rule-of-72': r(
        'Años para duplicar (atajo mental)',
        'Una tasa constante; no es el rendimiento del contrato.',
        'Tienes valores reales de inicio/fin y un plazo: usa CAGR.'
      ),
      'how-to-calculate-present-value': r(
        'Descontar un cobro futuro',
        'Valor futuro, tasa de descuento y periodos que defenderás.',
        'Querías una propina o un % de descuento en góndola.'
      ),
      'how-to-calculate-cagr': r(
        'Retorno anualizado entre dos valores',
        'Valor inicial, valor final y años transcurridos.',
        'Solo conoces un APR con depósitos: usa interés compuesto.'
      ),
      'how-to-calculate-inflation': r(
        'Cambio del poder de compra',
        'Un nivel de precios entonces y ahora, o una tasa que cites.',
        'Estás calculando la propina de una cena.'
      ),
      'how-to-calculate-percentage-change': r(
        'Importe viejo frente a nuevo (precios, sueldo, saldos)',
        'Dos cantidades que ya tienes.',
        'La misma fórmula de deberes está en Matemáticas; usa ese tema si no es dinero.'
      ),
    },
    flow: [
      'Dimensiona un préstamo nuevo en EMI con tasa, plazo y comisiones del prestamista.',
      'Si pagarás extra, lleva los mismos saldos a liquidación para ordenar avalancha frente a bola de nieve.',
    ],
    exampleTitle: 'Ticket de cena frente a un préstamo de 10.000',
    exampleBody:
      'La cena usa propina (e IVA si el impuesto va aparte). Un préstamo de 10.000 al 12% a 5 años va a EMI; 50 extra al mes va a liquidación. La regla del 72 solo responde «más o menos cuánto tarda en duplicar», no sustituye un CAGR entre dos carteras conocidas.',
    boundary:
      'Recargo, ROI, VAN e TIR son Finanzas de negocio. La edad es Tiempo y calendario aunque aparezca aquí de forma secundaria.',
    secondary: {
      'how-to-calculate-age': 'Edad por cumpleaños cuando una cotización usa años cumplidos—no es matemática de préstamo.',
      'how-to-calculate-markup': 'Recargo sobre coste al fijar un SKU, no el descuento del comprador.',
      'how-to-calculate-roi': 'Retorno de campaña o proyecto como trato, no un atajo de ahorro hogareño.',
    },
    faq: [
      {
        q: '¿Por qué el banco me cobra otra cuota?',
        a: 'Convención de días, comisiones capitalizadas, seguros o reset de tasa. Sigue la hoja de oferta; esta página es una segunda opinión, no el contrato.',
      },
      {
        q: '¿Regla del 72 o CAGR?',
        a: '72 es un atajo para duplicar. El CAGR pide inicio, fin y tiempo. Usa 72 solo para intuir.',
      },
      {
        q: '¿Esto es consejo de inversión?',
        a: 'No. Son ayudas educativas YMYL. Impuestos, crédito y cláusulas: confirma con un asesor o el emisor.',
      },
      {
        q: '¿Cambio porcentual para deberes?',
        a: 'La fórmula es la misma. Abre Matemáticas si el relato es un dato, no un precio o un sueldo.',
      },
    ],
    cites: {
      cfpb: 'CFPB — herramientas de dinero para consumidores',
    },
  },
  'business-finance': {
    title: '¿Recargo, umbral de rentabilidad o VAN: qué número del trato primero?',
    desc: 'Primero recargo frente a margen (el denominador cambia), luego unidades de equilibrio, luego VAN si el efectivo dura años. Ejemplo: coste 40 a precio 80 es 100% de recargo, no 50% de margen.',
    intro: 'Para quien fija un SKU o esboza un proyecto antes del modelo completo. Separa caja de devengo.',
    tableTitle: 'Economía unitaria, luego capacidad, luego capital',
    groups: {
      unit: 'Economía unitaria (mira el denominador)',
      capacity: 'Volumen para cubrir costes',
      capital: 'Retorno, payback y caja descontada',
    },
    rows: {
      'how-to-calculate-markup': r(
        'Subida sobre el coste',
        'Coste unitario y el % de recargo que usa tu hoja.',
        'Querías beneficio sobre el precio de venta: eso es margen, no recargo.'
      ),
      'how-to-calculate-gross-margin': r(
        'Beneficio bruto sobre ventas',
        'Ingresos y COGS del mismo periodo.',
        'Solo tienes coste y quieres «más 50%»: eso es recargo.'
      ),
      'how-to-calculate-profit-margin': r(
        'Beneficio neto (u operativo) sobre ventas',
        'Beneficio e ingresos con la misma base contable.',
        'Necesitas contribución tras costes variables: usa margen de contribución.'
      ),
      'how-to-calculate-contribution-margin': r(
        'Precio menos coste variable',
        'Precio de venta y coste variable por unidad (o en total).',
        'Querías margen bruto GAAP con overhead que aún no modelaste.'
      ),
      'how-to-calculate-marginal-revenue': r(
        'Ingreso extra de una unidad más (o un cambio de precio)',
        'Cantidades e ingresos en dos puntos cercanos.',
        'Necesitas el ROI de una campaña de un solo gasto y un solo retorno.'
      ),
      'how-to-calculate-break-even': r(
        'Unidades o ingresos para cubrir fijo + variable',
        'Costes fijos, variable unitario y precio.',
        'Ya tienes el calendario de caja y la tasa: salta al VAN.'
      ),
      'how-to-calculate-roi': r(
        'Retorno sobre un desembolso',
        'Ganancia y coste que defenderás en la misma moneda.',
        'La caja se reparte en años con una tasa: usa VAN o TIR, no solo un ratio ROI.'
      ),
      'how-to-calculate-payback-period': r(
        'Qué tan rápido vuelve la caja (sin descontar)',
        'Inversión y entradas periódicas, sin tasa de descuento.',
        'Los proyectos diferencian escala o cola: VAN/TIR después de ver el payback.'
      ),
      'how-to-calculate-npv': r(
        'Valor de flujos descontados',
        'Un calendario completo de caja y una tasa explícita.',
        'Solo preguntabas «en cuántos meses recupero»: usa payback primero.'
      ),
      'how-to-calculate-irr': r(
        'Tasa que anula el VAN',
        'El mismo calendario que el VAN; ojo a cambios de signo no convencionales.',
        'Los flujos cambian de signo más de una vez: la TIR puede engañar; prefiere VAN.'
      ),
    },
    flow: [
      'Cierra recargo frente a margen en el mismo SKU para que el denominador sea el mismo en la sala.',
      'Talla las unidades de equilibrio con fijo, variable y precio.',
      'Si la caja dura años, corre VAN con una tasa que nombres (TIR solo si el calendario es convencional).',
    ],
    exampleTitle: 'Coste 40, precio 80',
    exampleBody:
      'Recargo: (80−40)/40 = 100%. Margen bruto: (80−40)/80 = 50%. Mezclar «50% de recargo» con «50% de margen» es el error típico de pricing. El equilibrio pide fijos; el VAN pide una tasa que declares.',
    boundary:
      'IVA, descuento, interés compuesto, CAGR y valor presente pueden listarse aquí de forma secundaria; la URL primaria sigue en Dinero personal.',
    secondary: {
      'how-to-calculate-cagr': 'Retorno anualizado cuando el pack de junta ya trae inicio y fin.',
      'how-to-calculate-compound-interest': 'Capitalización tipo ahorro cuando el precio toca un producto de consumo.',
      'how-to-calculate-discount': 'El % de góndola que aún informa lista frente a promo.',
      'how-to-calculate-present-value': 'Descontar un solo monto futuro sin un calendario TIR completo.',
      'how-to-calculate-vat': 'IVA de factura cuando la cotización va neta.',
    },
    faq: [
      {
        q: '¿Por qué recargo y margen son páginas distintas?',
        a: 'Denominadores distintos. Un recargo del 50% no es un margen del 50%. Un titular que los mezcla rompe el pricing.',
      },
      {
        q: '¿Cuándo basta el payback?',
        a: 'Cuando liderazgo solo pregunta qué tan rápido vuelve la caja. Usa VAN/TIR si timing, escala o riesgo difieren.',
      },
      {
        q: '¿Son estados financieros auditados?',
        a: 'No. Ignoran impuestos multi-entidad, coberturas FX y presentación IFRS/GAAP salvo que tú las codifiques.',
      },
      {
        q: '¿La TIR puede fallar aunque la cuenta esté bien?',
        a: 'Sí, con flujos no convencionales (varias TIR). En ese caso prefiere VAN con una tasa declarada.',
      },
    ],
    cites: {},
  },
  'math-stats': {
    title: '¿Media, mediana o p-valor: qué estadístico primero?',
    desc: 'Mediana si mandan los atípicos; media si cada valor entra en una fórmula; p-valor solo después de elegir el test. Ejemplo: {2, 3, 100} — empieza por la mediana.',
    intro: 'Para estudiantes y analistas que ya saben qué estadístico o ecuación necesitan y quieren ver los pasos.',
    tableTitle: 'Centro, inferencia, álgebra escolar o notación de lab',
    groups: {
      center: 'Valor típico y dispersión',
      inference: 'Tests que ya elegiste',
      school: 'Conteo, GPA y álgebra',
      notation: 'Cómo escribes el número',
    },
    rows: {
      'how-to-calculate-mean': r(
        'Promedio de todos los valores',
        'Una lista donde cada observación debe contar.',
        'El sesgo o un atípico 100× manda: lidera con la mediana.'
      ),
      'how-to-calculate-median': r(
        'Valor del medio (resistente a atípicos)',
        'Lista ordenada; la página cubre longitud impar/par.',
        'Una fórmula paramétrica pide explícitamente la media.'
      ),
      'how-to-calculate-standard-deviation': r(
        'Dispersión alrededor de la media',
        'La misma lista de la media, más muestra frente a población.',
        'Solo querías un valor típico y aún no elegiste media o mediana.'
      ),
      'how-to-calculate-z-score': r(
        'Cuántas DE te apartas de una media',
        'Un valor, más media y DE de la distribución de referencia.',
        'Aún no calculaste la dispersión, o la forma está muy sesgada.'
      ),
      'how-to-calculate-p-value': r(
        'Evidencia contra un nulo que ya nombraste',
        'Un estadístico de prueba y el test elegido—aquí no se autoelige.',
        'Querías tamaño de efecto o un IC; un p chico no es un efecto grande.'
      ),
      'how-to-calculate-confidence-interval': r(
        'Rango para un parámetro a un nivel declarado',
        'Estimación, EE o DE, n y nivel (p. ej. 95%).',
        'No has elegido familia de test; esto no es selección automática de modelo.'
      ),
      'how-to-calculate-sample-size': r(
        'Cuántas observaciones para potencia/precisión',
        'Tamaño de efecto, alfa y potencia (o ancho de IC) que defenderás.',
        'Ya recolectaste los datos y necesitas un p sobre esa muestra.'
      ),
      'how-to-calculate-permutation-combination': r(
        'Contar arreglos frente a conjuntos sin orden',
        'n y k, más si el orden importa.',
        'Necesitas una cuadrática o puntos de GPA.'
      ),
      'how-to-calculate-quadratic-equation': r(
        'Resolver ax²+bx+c=0',
        'Coeficientes a, b, c (a ≠ 0).',
        'Necesitabas reescribir log/exponente, no las raíces.'
      ),
      'how-to-calculate-exponent': r(
        'Potencias y factores de crecimiento',
        'Base y exponente que usa el ejercicio.',
        'Necesitabas un logaritmo para deshacer una potencia.'
      ),
      'how-to-calculate-logarithm': r(
        'Log en una base declarada',
        'Argumento y base (común, natural u otra).',
        'Necesitabas una potenciación cruda.'
      ),
      'how-to-calculate-gpa': r(
        'Promedio de notas en una escala',
        'Créditos y notas más la escala de tu escuela (4.0 u otra).',
        'La política del transcript difiere: sigue al registro, no un 4.0 genérico.'
      ),
      'how-to-calculate-scientific-notation': r(
        'Reescribir una medida como a×10^n',
        'Un decimal o entero que debes reportar en forma científica.',
        'La incógnita es velocidad o ley de Ohm: usa Ciencia y física.'
      ),
      'how-to-calculate-significant-figures': r(
        'Redondear a un conteo de dígitos',
        'El valor crudo y cuántas cifras pide el lab.',
        'Estás resolviendo una identidad física, no reportando dígitos.'
      ),
    },
    flow: [
      'Si tus datos son {2, 3, 100}, reporta primero la mediana.',
      'Muestra la media después solo si una fórmula necesita cada valor.',
      'No calcules un z hasta que media y DE describan de verdad la distribución.',
    ],
    exampleTitle: 'Conjunto {2, 3, 100}',
    exampleBody:
      'La mediana es 3. La media es 35. Un z de 100 con esa media/DE estira si la forma es un atípico. Los p-valores no miden el efecto. Las escalas de GPA son de cada escuela.',
    boundary:
      'Pitágoras y el cambio porcentual pueden listarse de forma secundaria. El movimiento físico vive en Ciencia y física.',
    secondary: {
      'how-to-calculate-percentage-change': 'Viejo frente a nuevo cuando el relato es un dato, no una etiqueta de precio.',
      'how-to-calculate-pythagorean-theorem': 'Lados de un triángulo rectángulo cuando el deber es geometría, no inferencia.',
    },
    faq: [
      {
        q: '¿Un p chico significa un efecto grande?',
        a: 'No. Una n grande vuelve «significativos» efectos minúsculos. Acompaña el p con un IC o un tamaño de efecto del campo.',
      },
      {
        q: '¿Desviación muestral o poblacional?',
        a: 'Alinea el control de la página con el contexto (n frente a n−1). Mezclarlas rompe los z en silencio.',
      },
      {
        q: '¿Es un paquete estadístico completo?',
        a: 'No hay modelos mixtos, ponderaciones de encuesta ni elección automática de test. Tú eliges la identidad.',
      },
      {
        q: '¿Por qué las cifras significativas están con estadística?',
        a: 'Reportar en lab es alfabetización cuantitativa. Las cinemáticas se quedan en Ciencia y física.',
      },
    ],
    cites: {},
  },
  'geometry-measure': {
    title: '¿Área, pendiente o conversión de unidades: qué medición?',
    desc: 'Figuras con nombre usan triángulo, círculo, volumen o Pitágoras. Rampas usan pendiente o gradiente. Pintura o concreto van a Hogar y bricolaje.',
    intro:
      'Para deberes y taller cuando puedes nombrar lados, radio, rise/run o de-unidad/a-unidad—sin abrir CAD.',
    tableTitle: 'Figuras, grado, ratio o unidades genéricas',
    groups: {
      shapes: 'Figuras euclidianas con nombre',
      grade: 'Pendiente, grado y ratio de pantalla',
      units: 'Conversión genérica de unidades',
    },
    rows: {
      'how-to-calculate-triangle-area': r(
        'Área del triángulo con los lados o base/altura que lista el formulario',
        'Las longitudes que exige la fórmula elegida (sin lado faltante).',
        'Estás pidiendo azulejo: usa Hogar y bricolaje después del área neta.'
      ),
      'how-to-calculate-circle': r(
        'Circunferencia o área del disco',
        'Radio o diámetro, no un recorte de captura.',
        'Necesitabas el ratio de píxeles para un recorte social.'
      ),
      'how-to-calculate-volume': r(
        'Volumen de caja o prisma (L×A×H o el sólido listado)',
        'Las tres dimensiones en un solo sistema de unidades.',
        'Necesitas cuántos sacos para un vaciado: abre el estimador de concreto.'
      ),
      'how-to-calculate-pythagorean-theorem': r(
        'Lado que falta en un triángulo rectángulo',
        'Dos lados de un triángulo rectángulo.',
        'El triángulo no es rectángulo, o necesitas área y no un lado.'
      ),
      'how-to-calculate-slope': r(
        'Rise/run (o equivalente) de una recta',
        'Rise y run en unidades consistentes.',
        'Tu spec es % de grado o un ángulo: lee gradiente frente a pendiente en la página.'
      ),
      'how-to-calculate-gradient': r(
        'Notación de grado de caminos/rampas',
        'El mismo rise/run, en el estándar de tu spec.',
        'Necesitabas la pendiente de un gráfico de álgebra (página de pendiente).'
      ),
      'how-to-calculate-aspect-ratio': r(
        'Relación ancho:alto',
        'Dos lados en píxeles o longitud.',
        'Necesitas recortar píxeles de verdad: usa recorte/plataformas en Imagen y media.'
      ),
      'unit-converter': r(
        'Longitud, masa, temperatura y otras conversiones genéricas',
        'Un valor de origen y dos unidades.',
        'El trabajo es cobertura de pintura/azulejo: los estimadores de Hogar incluyen merma.'
      ),
    },
    flow: [
      'Calcula el volumen (o el área) geométrico en un solo sistema de unidades.',
      'Convierte unidades solo después de la fórmula, para no mezclar pies y metros en L×A×H.',
    ],
    exampleTitle: 'Losa antes de los sacos',
    exampleBody:
      'Una losa de 12×10×0,33 pies es una identidad de volumen aquí. El conteo de sacos y la merma viven en concreto de Hogar y bricolaje. Mezclar pulgadas y pies en el mismo producto es el error típico al pedir material.',
    boundary:
      'Los pies cuadrados de habitación son primarios en Hogar y bricolaje aunque se listen aquí de forma secundaria. Curvatura de agrimensura y códigos de obra quedan fuera.',
    secondary: {
      'square-feet': 'Área de habitación o lote cuando el trabajo es comprar material, no geometría abstracta.',
    },
    faq: [
      {
        q: '¿Pendiente o gradiente?',
        a: 'Están emparentadas, pero ratio, % de grado y ángulo son notaciones distintas. Sigue el spec de camino, rampa o techo.',
      },
      {
        q: '¿El aspect ratio sustituye el recorte?',
        a: 'No. Solo declara el ratio objetivo. El recorte de píxeles es Imagen y media.',
      },
      {
        q: '¿Por qué la conversión de unidades no es bricolaje?',
        a: 'Es genérica. Las páginas de Hogar añaden tasas de cobertura y merma para una compra.',
      },
      {
        q: '¿Incluyen curvatura GIS?',
        a: 'No. Solo fórmulas euclidianas planas/sólidas.',
      },
    ],
    cites: {},
  },
  'science-physics': {
    title: '¿Velocidad, ley de Ohm o densidad: qué identidad de física?',
    desc: 'Sigue el capítulo: cinemática, Ohm, densidad o un ayudante de campo. Ejemplo: 12 V y 3 A → 4 Ω en un ejercicio—no cableado de casa.',
    intro: 'Para deberes STEM cuando ya sabes qué magnitud despejas y puedes mantener las unidades consistentes.',
    tableTitle: 'Magnitudes según la incógnita que nombraste',
    groups: {
      motion: 'Cinemática',
      circuits: 'Ley de Ohm (solo aprendizaje)',
      materials: 'Identidad de densidad',
      fields: 'Ayuda de campo magnético',
    },
    rows: {
      'how-to-calculate-velocity': r(
        'Rapidez o velocidad desde desplazamiento y tiempo (como define la página)',
        'Distancia o desplazamiento y tiempo transcurrido en unidades consistentes.',
        'Necesitabas aceleración (cambio de velocidad) o densidad masa/volumen.'
      ),
      'how-to-calculate-acceleration': r(
        'Cambio de velocidad en el tiempo',
        'Dos velocidades (o Δv) y Δt.',
        'Solo tienes una rapidez media sin intervalo para Δv.'
      ),
      'how-to-calculate-ohms-law': r(
        'Relaciones V = IR en problemas de aprendizaje',
        'Cualesquiera dos de V, I, R para despejar la tercera.',
        'Estás dimensionando cableado, breakers o derating de casa: contrata a un electricista calificado.'
      ),
      'how-to-calculate-density': r(
        'Masa entre volumen',
        'Masa y volumen de la misma muestra.',
        'Necesitabas volumen de vaciado en sacos (Hogar), no una identidad de ciencia.'
      ),
      'measuring-magnetic-fields': r(
        'Ayuda de lectura tipo sensor',
        'Las entradas que lista la página; calibra contra una referencia conocida.',
        'Decisiones de seguridad sin un instrumento calibrado.'
      ),
    },
    flow: [
      'Si la incógnita es qué tan rápido cambia la posición, usa velocidad con unidades consistentes.',
      'Si la incógnita es qué tan rápido cambia la velocidad, usa aceleración con dos rapideces y Δt.',
    ],
    exampleTitle: '12 V, 3 A (solo deberes)',
    exampleBody:
      'Ohm: R = V/I = 12/3 = 4 Ω. Esa identidad no dimensiona el cable de casa. La densidad es masa/volumen, no un estimador de sacos. La notación científica vive en Matemáticas.',
    boundary:
      'Fricción, relatividad y dispositivos no óhmicos no se modelan. Las herramientas de notación se listan aquí de forma secundaria.',
    secondary: {
      'how-to-calculate-scientific-notation': 'Reescribe un número de lab como a×10^n cuando ya tienes la magnitud.',
      'how-to-calculate-significant-figures': 'Redondea los dígitos reportados; no despeja V=IR por ti.',
    },
    faq: [
      {
        q: '¿La ley de Ohm dimensiona el cableado de casa?',
        a: 'No de forma segura. Códigos, curvas de breaker y derating térmico piden un electricista. Usa la página solo para V=IR de deberes.',
      },
      {
        q: '¿Sustituyen un libro de texto?',
        a: 'No. Revisan la aritmética de identidades que tú ya armaste.',
      },
      {
        q: '¿Densidad o volumen de bricolaje?',
        a: 'Densidad es ciencia masa/volumen. El volumen de Hogar es un vaciado o un recipiente de materiales.',
      },
      {
        q: '¿Me fío del magnetómetro del teléfono?',
        a: 'Trátalo como educativo. Calibra contra una referencia conocida antes de cualquier decisión de seguridad.',
      },
    ],
    cites: {
      'nist-si': 'NIST — unidades SI',
    },
  },
  'home-diy': {
    title: '¿Pintura, azulejo o concreto: qué material estimas?',
    desc: 'Mide el área primero; luego pintura (manos), azulejo (merma) o concreto (volumen y sacos). El volumen geométrico va primero; el rendimiento del saco está en concreto.',
    intro: 'Para dueños y contratistas chicos que planean un refresco o un vaciado. No inspeccionan humedad ni carga estructural.',
    tableTitle: 'Área base, luego cobertura con merma',
    groups: {
      area: 'Área de habitación en unidades mezcladas',
      materials: 'Compras de pintura, azulejo y concreto',
    },
    rows: {
      'square-feet': r(
        'Área de habitación o lote cuando el plano mezcla pies y pulgadas',
        'Largo y ancho de la superficie terminada.',
        'Solo querías L×A×H abstracto sin compra: el volumen de Geometría basta.'
      ),
      'how-to-calculate-paint': r(
        'Cobertura de muro/techo con manos',
        'Área neta más manos; el rendimiento de etiqueta es superficie ideal.',
        'Estás azulejando un piso o vaciando una zapata.'
      ),
      'how-to-calculate-tile': r(
        'Azulejo de piso/muro más merma de patrón',
        'Área neta más un % de merma (a menudo ~10%, más en diagonales).',
        'Estás comprando cubetas de pintura o sacos de premix.'
      ),
      'how-to-calculate-concrete': r(
        'Volumen del encofrado y luego sacos',
        'Dimensiones internas del molde y el rendimiento impreso en el saco.',
        'Solo querías volumen geométrico sin sacos: usa Geometría si la pregunta son las cotas.'
      ),
    },
    flow: [
      'Saca el área neta (pies cuadrados) de la superficie terminada, no el muro exterior si azulejas por dentro.',
      'Pasa el volumen a sacos en concreto usando el rendimiento de la ficha, no un peso genérico de internet.',
    ],
    exampleTitle: 'Losa 12×10×0,33 pies',
    exampleBody:
      'El volumen es 12×10×0,33 pies cúbicos en la identidad geométrica si solo necesitas L×A×H. El concreto aplica merma y rendimiento. No saltes zócalos y fixtures antes de la merma de azulejo.',
    boundary:
      'Gradiente, volumen y conversor se listan de forma secundaria cuando el trabajo pide forma y compra.',
    secondary: {
      'how-to-calculate-gradient': 'Grado de rampa o drenaje cuando el spec es % de pendiente, no cobertura de pintura.',
      'how-to-calculate-volume': 'L×A×H antes de la cuenta de sacos cuando el molde es una caja simple.',
      'unit-converter': 'm² ↔ ft² cuando el plano mezcla SI y US.',
    },
    faq: [
      {
        q: '¿Cuánta merma de azulejo?',
        a: 'Trazados simples suelen ~10%; diagonales y espina a menudo 15%+. Cruza el tamaño de pieza con las cotas para evitar tiras finas.',
      },
      {
        q: '¿La etiqueta de pintura coincide con el muro real?',
        a: 'El rendimiento asume superficies ideales. Textura, color oscuro y primer cambian el consumo: redondea hacia arriba.',
      },
      {
        q: '¿Volumen es lo mismo que sacos?',
        a: 'Primero el volumen; los sacos siguen el rendimiento impreso. Humedad y compactación cambian el rendimiento de campo.',
      },
      {
        q: '¿Cotas internas o externas para azulejo?',
        a: 'Mide la superficie terminada que vas a cubrir. Suma merma de patrón después del área neta.',
      },
    ],
    cites: {},
  },
  'time-calendar': {
    title: '¿Edad, plazo entre fechas, huso o Unix: qué reloj?',
    desc: 'La edad usa cumpleaños; la diferencia usa dos fechas; las reuniones piden un ID IANA. Unix de 10 dígitos son segundos; 13 suelen ser milisegundos.',
    intro:
      'Para quien planea un viaje o depura: ¿cuántos años?, ¿cuántos días?, ¿qué hora allá?, ¿qué instante UTC es este epoch?',
    tableTitle: 'Fechas humanas, IDs de zona o dígitos de epoch',
    groups: {
      human: 'Edad y tramos de calendario',
      zones: 'Reuniones entre regiones',
      epoch: 'Marcas Unix',
    },
    rows: {
      'how-to-calculate-age': r(
        'Años cumplidos desde un cumpleaños',
        'Fecha de nacimiento y un huso que coincida con el contexto legal o personal.',
        'Necesitabas días de proyecto entre dos reservas (diferencia de fechas).'
      ),
      'how-to-calculate-date-difference': r(
        'Días (o duración) entre dos fechas',
        'Inicio y fin; di si son días de calendario o tramos exactos de 24 h.',
        'Necesitabas edad en años cumplidos, o segundos epoch para una API.'
      ),
      'timezone-converter': r(
        'Hora de pared en otra zona IANA',
        'Un ID IANA real (p. ej. America/Mexico_City), no solo un apodo de ciudad.',
        'Estás convirtiendo milisegundos epoch de logs: usa Unix primero.'
      ),
      'unix-timestamp': r(
        'Epoch en segundos o ms ↔ hora civil',
        'Largo de dígitos (~10 frente a ~13) o un conmutador explícito segundos/ms.',
        'Solo querías «qué edad tengo» con un cumpleaños.'
      ),
    },
    flow: [
      'Si el log muestra 13 dígitos, trata Unix como milisegundos antes de convertir.',
      'Luego pasa la hora civil con un ID IANA, no con un apodo de tres letras.',
    ],
    exampleTitle: '10 dígitos frente a 13',
    exampleBody:
      'Los segundos Unix rondan 10 dígitos; muchas APIs de JavaScript usan ~13 de milisegundos. Mezclarlos recorre siglos. La edad cerca de medianoche sigue dependiendo del huso. Los plazos legales pueden usar días hábiles que estas páginas no codifican.',
    boundary:
      'El ritmo de carrera es Salud y cuerpo. Unix y huso también aparecen en Dev y datos cuando el trabajo es depurar código.',
    secondary: {
      'how-to-calculate-pace': 'Distancia sobre tiempo de entreno, no un tramo de reserva de calendario.',
    },
    faq: [
      {
        q: '¿Por qué la edad cambió un día antes de mi cumpleaños?',
        a: 'Años cumplidos en un huso. UTC frente a medianoche local puede mover el corte.',
      },
      {
        q: '¿Segundos o milisegundos?',
        a: 'Mira el largo de dígitos o el conmutador. No adivines.',
      },
      {
        q: '¿La conversión de huso cubre el horario de verano?',
        a: 'Las zonas IANA incluyen DST. Las horas ambiguas de retroceso aún piden un offset explícito.',
      },
      {
        q: '¿Plazos de días hábiles?',
        a: 'Fuera de alcance. No hay festivos bancarios aquí.',
      },
    ],
    cites: {
      'iana-tz': 'Base IANA de husos horarios',
    },
  },
  'pdf-docs': {
    title: '¿Unir, comprimir o proteger: qué paso de PDF primero?',
    desc: 'Arregla el orden de páginas (unir/organizar) antes de comprimir una sola vez. Protege solo archivos que te pertenecen. Guarda un respaldo sin comprimir. Aquí no hay OCR ni firma electrónica.',
    intro:
      'Para oficina y ops que rehacen paquetes PDF en el navegador. Prefiere páginas sin subir para archivos sensibles. Este tema no hace OCR, e-firma ni Control de cambios de Word de escritorio.',
    tableTitle: 'Estructura, luego peso, luego acceso, luego exportar',
    groups: {
      structure: 'Orden y orientación de páginas',
      size: 'Bytes y recuadro',
      access: 'Contraseñas que controlas',
      export: 'Markdown, imágenes, marca de agua',
    },
    rows: {
      'merge-pdf': r(
        'Juntar archivos en un orden de páginas',
        'Los PDF en la secuencia final (aún puedes reordenar después).',
        'Solo querías achicar un archivo ya final: comprime después de unir, no en su lugar.'
      ),
      'split-pdf': r(
        'Sacar un rango de páginas a un archivo nuevo',
        'Un PDF y los números de página que tienes derecho a copiar.',
        'Querías barajar páginas dentro de un archivo: usa organizar.'
      ),
      'organize-pdf': r(
        'Reordenar, rotar o quitar páginas en un archivo',
        'Un PDF cuya lista de páginas vas a editar.',
        'Estás concatenando muchos archivos: une primero y luego organiza.'
      ),
      'rotate-pdf': r(
        'Corregir la orientación de páginas elegidas',
        'Páginas de lado o al revés.',
        'Necesitabas recortar márgenes/sangrado más que rotar.'
      ),
      'pdf-page-numbers': r(
        'Números de página estampados',
        'Un esquema de paginación (inicio, posición) que vas a conservar.',
        'El archivo aún está en el orden equivocado: organiza antes de numerar.'
      ),
      'compress-pdf': r(
        'Bajar bytes para tope de correo o subida',
        'Un archivo cuyo orden de páginas ya es final; previsualiza al 100% después.',
        'Aún debes unir seis borradores: une primero para comprimir una sola vez.'
      ),
      'crop-pdf': r(
        'Recortar márgenes o sangrado',
        'Intención visible de caja de recorte; guarda un respaldo.',
        'Necesitabas exportar páginas a JPEG (PDF a JPG) más que un recorte vectorial.'
      ),
      'protect-pdf': r(
        'Poner una contraseña que controlas',
        'Una contraseña que guardarás en un gestor, más el archivo que te pertenece.',
        'No conoces la contraseña de un archivo ajeno: no intentes eludirla.'
      ),
      'unlock-pdf': r(
        'Quitar una contraseña que conoces de forma legítima',
        'La contraseña de propietario de un archivo sobre el que tienes derechos.',
        'El archivo usa DRM que no te pertenece: desbloquear no es un cracker.'
      ),
      'pdf-to-markdown': r(
        'PDF de texto → borrador Markdown para git/docs',
        'Un PDF basado en texto (los escaneos salen mal).',
        'Necesitabas imágenes de páginas (PDF a JPG) o comparar dos Word (Comparar texto).'
      ),
      'pdf-to-jpg': r(
        'Rasterizar páginas a imágenes',
        'Un PDF que puedes renderizar; elige el DPI que permite el spec.',
        'Necesitabas unir PDF o poner una contraseña.'
      ),
      'pdf-page-to-image-sizes': r(
        'Tamaños de píxel objetivo para renders de página',
        'Un spec de tamaño (plataforma o impresión) antes del lote.',
        'Aún decides si unir o partir.'
      ),
      'pdf-watermark': r(
        'Marca visible de borrador/atribución',
        'Texto o imagen y colocación; no es DRM.',
        'Necesitabas cifrado (proteger) más que un sello visible.'
      ),
    },
    flow: [
      'Une al orden de páginas previsto (luego organiza/rota/numera si hace falta).',
      'Organiza hasta que la paginación se vea bien a calidad plena.',
      'Comprime una vez el archivo combinado para el tope de correo/subida.',
      'Protege al final si el destinatario necesita una contraseña que controlas; guarda un respaldo sin comprimir.',
    ],
    exampleTitle: 'Paquete de 12 páginas, tope de 8 MB',
    exampleBody:
      'Une las doce páginas, corrige rotación, comprime una vez y previsualiza al 100%. Comprimir cada archivo primero te obliga a adivinar el tamaño combinado. Los diffs Word a Word son Comparar texto. Imágenes a PDF empieza en Imagen y media.',
    boundary:
      'Este tema no hace OCR de escaneos, no rellena XFA ni e-firma. Imágenes a PDF/PPT/Word y comparar Word se listan de forma secundaria cuando el trabajo arranca de esos insumos.',
    secondary: {
      'compare-two-word-documents-for-differences': 'Dos .docx: extrae texto legible y compara—no son herramientas de página PDF.',
      'images-to-pdf': 'Lote de fotos a PDF; las ediciones de página siguen aquí después de exportar.',
      'images-to-ppt': 'Presentación de oficina desde imágenes, no unión de PDF.',
      'images-to-word': 'Lote de imágenes a Word, no partir PDF.',
      'markdown-to-html': 'HTML de pipeline de docs cuando PDF→Markdown fue el paso previo.',
    },
    faq: [
      {
        q: '¿La compresión conserva la nitidez vectorial?',
        a: 'Depende de páginas vectoriales frente a imagen y del downsampling. Previsualiza páginas críticas al 100% antes de imprimir.',
      },
      {
        q: '¿Desbloquear sirve para cualquier PDF cerrado?',
        a: 'Solo archivos sobre los que tienes derechos, con una contraseña que conoces de forma legítima. Eludir el DRM ajeno puede ser ilegal.',
      },
      {
        q: '¿Unir antes o después de comprimir?',
        a: 'Casi siempre une y organiza primero, comprime una vez. Conserva un respaldo sin comprimir hasta que confirmen los destinatarios.',
      },
      {
        q: '¿Se suben los archivos a un servidor?',
        a: 'La marca «sin subir» significa que el PDF se queda en esta pestaña. Las de borde se marcan aparte. No proceses secretos si tu política prohíbe cualquier herramienta en línea.',
      },
    ],
    cites: {},
  },
  'image-media': {
    title: '¿Medida de plataforma o comprimir: qué trabajo de imagen?',
    desc: 'Usa la página de medida de plataforma para píxeles exactos. Recorta, convierte formato y luego comprime. Quita EXIF antes de un post público. Aquí no hay upscale generativo.',
    intro:
      'Para creadores y marketing que preparan assets en el navegador. Las páginas de plataforma no son un recorte genérico; comprimir no es una plantilla de tamaño social.',
    tableTitle: 'Spec de píxel, transformar, componer o exportar—no un solo volcado',
    groups: {
      platform: 'Specs de canal y zonas seguras',
      transform: 'Recorte, formato y luego bytes',
      compose: 'Unir, GIF, marca de agua',
      export: 'Paquetes de oficina, Base64, EXIF, colores',
    },
    rows: {
      'youtube-thumbnail-size': r(
        'Caja de píxel y zona segura de miniatura de YouTube',
        'Un still que debe coincidir con las cotas actuales de miniatura de YouTube.',
        'Solo querías recorte genérico o bajar bytes sin spec de plataforma.'
      ),
      'instagram-post-size': r(
        'Spec de píxel de publicación del feed de Instagram',
        'El aspect de feed que la app espera hoy para ese hueco.',
        'Necesitabas cotas de Stories (otro spec) o banner de LinkedIn.'
      ),
      'instagram-story-size': r(
        'Spec de píxel de story de Instagram/Facebook',
        'Un marco 9:16 de story, no un post cuadrado de feed.',
        'Necesitabas una miniatura de YouTube o una tarjeta Open Graph.'
      ),
      'linkedin-banner-size': r(
        'Píxeles de portada/banner de LinkedIn',
        'Un banner ancho con la zona segura de LinkedIn en mente.',
        'Necesitabas un set de capturas de App Store o la imagen principal de Amazon.'
      ),
      'open-graph-image-size': r(
        'Píxeles de tarjeta Open Graph / social',
        'Una imagen de share dimensionada para crawlers OG.',
        'Necesitabas specs de Instagram en feed o tamaños de raster de página PDF.'
      ),
      'amazon-main-image-size': r(
        'Píxel y fondo de imagen principal de Amazon que lista la página',
        'Un still de producto que debe cumplir las reglas de imagen principal del marketplace.',
        'Necesitabas un icono de app iOS o una miniatura de YouTube.'
      ),
      'apple-touch-icon': r(
        'Tamaños de Apple touch icon',
        'Un icono cuadrado para home-screen / destinos táctiles.',
        'Necesitabas cotas de captura de App Store en vez de un touch icon.'
      ),
      'ios-app-icon-size': r(
        'Set de píxeles de icono de app iOS',
        'Arte maestro de icono que exportarás a los tamaños iOS listados.',
        'Necesitabas capturas de App Store de iPhone (stills de marketing, no el icono).'
      ),
      'iphone-app-store-screenshot': r(
        'Presets de píxel de capturas de App Store',
        'Marcos de clase de dispositivo que pide el listing.',
        'Necesitabas un icono 1024 o un banner de LinkedIn.'
      ),
      'image-crop': r(
        'Recorte / aspect de píxel arbitrario',
        'Una imagen y una caja objetivo que eliges.',
        'Una plataforma con nombre ya tiene página de spec: ábrela para ver zonas seguras.'
      ),
      'image-format-converter': r(
        'Conversión JPEG / PNG / WebP (y formatos listados)',
        'Un archivo origen y un formato destino requerido.',
        'El canal ya tiene el formato correcto y solo necesitas bytes: comprime después.'
      ),
      'image-compress': r(
        'Bajar bytes con calidad que puedes previsualizar',
        'Un archivo cuyo encuadre ya es correcto (recorta primero si hay márgenes muertos).',
        'Aún debes convertir a WebP/JPEG que pide el canal: convierte primero.'
      ),
      'image-optimizer': r(
        'Pase de peso orientado a CWV, con mandos distintos a comprimir',
        'Un hero o candidato LCP que compararás al 100%.',
        'Necesitabas peso de trazos SVG (optimizador SVG) o solo quitar EXIF.'
      ),
      'svg-optimizer': r(
        'Reducción de bytes de SVG vectorial',
        'Un SVG, no una foto raster.',
        'El archivo es JPEG/PNG: usa comprimir/optimizar, no herramientas SVG.'
      ),
      'flip-image': r(
        'Espejo o rotación de píxeles',
        'Una imagen mal espejada o mal orientada.',
        'Necesitabas recorte seguro de plataforma más que un volteo.'
      ),
      'image-border': r(
        'Añadir un borde en píxeles',
        'Grosor y color que conservarás en el export.',
        'Necesitabas una marca de agua de atribución, no un borde uniforme.'
      ),
      'image-grayscale': r(
        'Quitar croma',
        'Un original a color que quieres aplanar.',
        'Necesitabas ICC de impresión: esto no es un pipeline de color completo.'
      ),
      'image-merge': r(
        'Juntar imágenes en un lienzo',
        'Los stills en orden de layout.',
        'Necesitabas una animación GIF (imágenes a GIF) o un paquete PDF.'
      ),
      'image-overlay': r(
        'Apilar un primer plano sobre un fondo',
        'Dos (o más) capas con tamaños conocidos.',
        'Necesitabas unir lado a lado sin semántica de overlay.'
      ),
      'images-to-gif': r(
        'Secuencia de frames → GIF',
        'Frames ordenados y un delay con el que puedas vivir.',
        'Necesitabas un collage estático (unir) o un PDF.'
      ),
      'add-watermark': r(
        'Marca visible de atribución',
        'Una marca y una colocación; guarda un master sin marca.',
        'Necesitabas quitar GPS de EXIF por privacidad más que un sello visible.'
      ),
      'images-to-pdf': r(
        'Fotos → paquete PDF',
        'Archivos de imagen cuyo trabajo principal es un pack de documento.',
        'Necesitabas unir/partir/comprimir PDF ya existentes (PDF y docs).'
      ),
      'images-to-ppt': r(
        'Imágenes → PowerPoint',
        'Stills para una deck, no un editor de PDF.',
        'El entregable es un pack PDF: usa imágenes a PDF o herramientas PDF.'
      ),
      'images-to-word': r(
        'Imágenes → Word',
        'Stills para un .docx, no herramientas de página PDF.',
        'Necesitabas Markdown desde un PDF de texto (PDF a Markdown).'
      ),
      'image-to-base64': r(
        'Data URL listo para embeber',
        'Un asset pequeño; las fotos enormes revientan CSS/HTML.',
        'Necesitabas bajar peso para LCP, no una data URL.'
      ),
      'image-exif': r(
        'Ver o quitar metadatos (incluido GPS)',
        'Un original de cámara/teléfono que podrías compartir en público.',
        'Solo querías comprimir calidad JPEG sin preocupación de metadatos.'
      ),
      'color-from-image': r(
        'Muestrear colores de una foto',
        'Una imagen usada como mood board, no un sistema de tokens cerrado.',
        'Necesitas contraste WCAG o tokens CSS: termina en Diseño y marca.'
      ),
    },
    flow: [
      'Recorta al spec de plataforma (o a una caja elegida) para no comprimir píxeles muertos.',
      'Convierte al formato que exige el canal (a menudo JPEG/WebP).',
      'Comprime/optimiza al final y compara el hero al 100%.',
    ],
    exampleTitle: 'Hero PNG 4K para una tarjeta social',
    exampleBody:
      'Recorta primero al spec de Open Graph o YouTube. Convierte PNG→WebP si el canal lo permite. Luego comprime al presupuesto de bytes. Quitar EXIF es un paso de privacidad aparte antes de un post público. No empieces comprimiendo un lienzo 4K lleno de margen muerto.',
    boundary:
      'La matemática de aspect sin píxeles es Geometría. Checks de lab CWV y preview OG viven en SEO. Las marcas de agua sobre PDF existentes son PDF y docs.',
    secondary: {
      'core-web-vitals-checker': 'Snapshot de lab LCP/INP/CLS después de comprimir el hero.',
      'how-to-calculate-aspect-ratio': 'Identidad ancho:alto cuando aún no recortas píxeles.',
      'pdf-page-to-image-sizes': 'Objetivos de raster de página PDF, no stills sociales.',
      'pdf-to-jpg': 'Páginas PDF a JPEG, no exports del carrete.',
      'pdf-watermark': 'Marca de agua en un paquete PDF, no un still PNG/JPEG.',
    },
    faq: [
      {
        q: '¿Comprimir, optimizar o convertir primero?',
        a: 'El formato primero si el canal exige JPEG/PNG/WebP. Recorta antes de comprimir si hay márgenes muertos grandes. Optimizar frente a comprimir: lee los mandos; compara héroes.',
      },
      {
        q: '¿Las marcas de agua impiden reutilizar?',
        a: 'No. Disuaden el reuse casual. Guarda masters sin marca en privado.',
      },
      {
        q: '¿Por qué imágenes a PDF está con imágenes?',
        a: 'El trabajo arranca de insumos de imagen. Las ediciones centradas en PDF se quedan en PDF y docs; este destino puede listarse en ambos temas.',
      },
      {
        q: '¿Memoria del navegador con RAW enorme?',
        a: 'Las pestañas topean TIFF/RAW muy grandes. Aquí no hay «magia de upscale con IA»: espera un remuestreo honesto.',
      },
    ],
    cites: {},
  },
  'design-brand': {
    title: '¿Contraste, paleta o tokens: qué paso de color?',
    desc: 'Pasa el contraste WCAG antes de cerrar tokens CSS. Ejemplo: un hex de marca sobre blanco puede cumplir AA y fallar AAA. Las paletas de foto empiezan en Imagen y media.',
    intro: 'Para diseño y PM que alinean color de marca con accesibilidad. No es una librería de componentes de Figma.',
    tableTitle: 'Puerta de accesibilidad, luego paleta, luego handoff',
    groups: {
      a11y: 'Contraste de luminancia',
      palette: 'Sets coherentes claro/oscuro',
      tokens: 'Roles con nombre y export',
    },
    rows: {
      'wcag-contrast-checker': r(
        'Par texto/UI contra AA o AAA',
        'Hex de primer plano y fondo (y texto grande frente a cuerpo).',
        'Solo muestreaste una paleta de foto y aún no elegiste un par texto/fondo.'
      ),
      'smart-website-color-scheme': r(
        'Esquema coherente desde un color semilla de marca',
        'Un hex semilla que de verdad vas a publicar.',
        'Necesitabas un veredicto de contraste sobre dos colores ya elegidos, no una escala generada.'
      ),
      'brand-color-token-pack': r(
        'Variables CSS / tokens de diseño desde roles',
        'Roles semánticos (superficie, texto, acento) con valores claro/oscuro.',
        'Un solo hex no es un sistema dark: mapea roles y luego haz QA en pantallas reales.'
      ),
      'brand-style-guide': r(
        'Roles de color documentados para un equipo',
        'Los mismos roles que pegarás en la guía.',
        'Aún fallas contraste en cuerpo: corrige pares antes de documentar excepciones.'
      ),
    },
    flow: [
      'Pasa pares de cuerpo y UI por el checker de contraste (AA frente a AAA según tu política).',
      'Exporta tokens solo para colores que ya tienen rol e historia de contraste.',
    ],
    exampleTitle: '#1a73e8 sobre blanco',
    exampleBody:
      'Corre el par a tamaño de cuerpo y umbrales de texto grande. Pasar AA no es AAA. El modo oscuro pide valores aparte de superficie/texto, no el mismo hex invertido a ciegas. Extraer colores de una foto es Imagen y media; aquí cierras tokens.',
    boundary:
      'Preview Open Graph y color-from-image se listan de forma secundaria. Sigue haciendo user testing.',
    secondary: {
      'color-from-image': 'Muestreo de mood board antes de cerrar tokens accesibles.',
      'open-graph-preview': 'Chequeo de tarjeta social cuando ya elegiste colores de marca.',
    },
    faq: [
      {
        q: '¿AA o AAA por defecto?',
        a: 'Muchos productos apuntan AA en UI de cuerpo y reservan AAA para texto crítico. Confirma la política y prueba texto grande por separado.',
      },
      {
        q: '¿Bastan tokens hex para dark mode?',
        a: 'Suele hacer falta roles semánticos con valores claro/oscuro. Los temas igual piden QA.',
      },
      {
        q: '¿El contraste atrapa daltonismo?',
        a: 'Ayuda a separar luminancia, no todas las deficiencias. Combina con pistas que no sean solo color.',
      },
      {
        q: '¿Pasé contraste: listo con a11y?',
        a: 'No. Quedan tamaño, peso, focus y carga cognitiva. El contraste caza fallos de luminancia.',
      },
    ],
    cites: {
      'wcag-contrast': 'W3C WCAG 2.2 Understanding — contraste mínimo',
    },
  },
  'seo-growth': {
    title: '¿Meta, sitemap o IndexNow: qué paso SEO después de publicar?',
    desc: 'Escribe títulos visibles primero, luego sitemap, luego IndexNow opcional. Un ping no posiciona. No hay garantía de ranking. Los rich results de FAQ ya no se muestran.',
    intro: 'Para SEO y webmasters que hacen checks people-first. No es un kit para manipular rankings.',
    tableTitle: 'Snippet, archivos técnicos, señales y luego etiquetas de campaña',
    groups: {
      snippet: 'Títulos, SERP y tarjetas sociales',
      technical: 'robots, sitemap, hreflang, schema',
      signals: 'Aviso de índice, auditoría on-page, lab CWV',
      campaigns: 'Parámetros UTM',
    },
    rows: {
      'meta-tag-generator': r(
        'Borrador de markup de título/descripción',
        'Copy que ya existe en la página visible (sin cloaking).',
        'Necesitabas un preview de píxel SERP renderizado: usa preview SERP cuando ya existan las cadenas.'
      ),
      'meta-serp-preview': r(
        'Cómo puede envolver un título/descripción en una SERP',
        'Candidatos de título y descripción; Google igual puede reescribir.',
        'Aún no tienes H1 en página: escribe la página primero.'
      ),
      'open-graph-preview': r(
        'Tarjeta de share social',
        'Imagen OG y título que coincidan con la URL.',
        'Necesitabas Core Web Vitals del HTML, no una tarjeta de Facebook.'
      ),
      'robots-txt-generator': r(
        'Borrador de robots.txt',
        'Rutas que de verdad quieres permitir o bloquear.',
        'Necesitabas una lista de URL para crawlers (sitemap), no reglas robots.'
      ),
      'sitemap-xml-generator': r(
        'Lista de URL para crawlers',
        'URL canónicas que de verdad vas a publicar.',
        'Pensabas que IndexNow sustituye sitemaps: no lo hace.'
      ),
      'hreflang-generator': r(
        'Anotaciones de clúster de locale',
        'El mapa hreflang real de URL que publicas.',
        'Un sitio de un solo idioma sin variantes de locale.'
      ),
      'schema-jsonld-generator': r(
        'JSON-LD que coincide con el copy visible',
        'Un tipo que la página realmente soporta (sin ratings falsos).',
        'Querías JSON Schema de APIs (Dev y datos), no markup de búsqueda.'
      ),
      'indexnow': r(
        'Avisar a motores participantes de cambios de URL',
        'Una publicación o update con sentido, más tu clave.',
        'Aún no dejaste la URL rastreable (robots, enlaces, sitemap).'
      ),
      'on-page-seo-checker': r(
        'Auditoría visible rápida de una URL que puedes probar',
        'Una URL pública; esto no es Search Console.',
        'Necesitabas depurar DNS/TLS/cabeceras: Red e IP primero.'
      ),
      'core-web-vitals-checker': r(
        'Snapshot de lab LCP/INP/CLS',
        'Una URL y una corrida de lab que no confundirás con CrUX de campo.',
        'Aún no comprimiste la imagen LCP: los compresores de imagen pueden listarse de forma secundaria.'
      ),
      'utm-builder': r(
        'URL de campaña etiquetadas',
        'Source/medium/campaign que mantendrás consistentes en analytics.',
        'Necesitabas hreflang o un sitemap, no parámetros de ads.',
      ),
    },
    flow: [
      'Confirma copy visible indexable, título y canonical/hreflang.',
      'Actualiza el sitemap con las URL canónicas en vivo.',
      'Opcionalmente avisa por IndexNow tras un cambio con sentido—no como interruptor de ranking.',
    ],
    exampleTitle: 'Después de publicar una página de herramienta nueva',
    exampleBody:
      'La página debe ser rastreable y apta para snippet. El sitemap incluye la URL. IndexNow es un aviso opcional. No hay garantía de posiciones. No agregues llms.txt ni schema solo para IA. El FAQ de la página es para personas; los rich results de FAQ se retiraron en 2026.',
    boundary:
      'Cabeceras, DNS y enrutado www que desbloquean el rastreo viven en Red e IP. Los compresores de imagen aparecen aquí solo como ayuda de LCP.',
    secondary: {
      'add-www-to-dns': 'Ápice frente a www cuando el problema de rastreo es DNS, no copy.',
      'image-compress': 'Bytes del hero cuando el lab CWV marca LCP.',
      'image-optimizer': 'El mismo trabajo LCP con mandos de optimizador.',
      'smart-website-color-scheme': 'Colores de marca para un landing, no una palanca de ranking.',
      'svg-optimizer': 'Peso vectorial en plantillas que publican SVG.',
      'wcag-contrast-checker': 'Contraste de snippet/UI, no un factor de ranking por sí solo.',
      'website-headers': 'Cabeceras de caché y seguridad en una URL que estás autorizado a pedir.',
    },
    faq: [
      {
        q: '¿IndexNow sustituye los sitemaps?',
        a: 'No. Sigues necesitando sitemaps precisos, reglas robots y enlaces rastreables.',
      },
      {
        q: '¿Cada página debe perseguir AI Overviews?',
        a: 'Google: indexada y apta para snippet, con contenido people-first. Evita schemas solo para IA y menciones inventadas.',
      },
      {
        q: '¿Estas páginas garantizan posiciones?',
        a: 'No. Apoyan checks. Search Console sigue siendo la fuente del estado de índice.',
      },
      {
        q: '¿Por qué enlazar compresores de imagen desde SEO?',
        a: 'Los bytes de imagen suelen dominar LCP. El tema primario sigue siendo Imagen y media.',
      },
    ],
    cites: {
      'g-essentials': 'Google Search Essentials',
    },
  },
  'network-ip': {
    title: '¿IP pública, DNS, cabeceras o CIDR: qué capa de red?',
    desc: 'La IP pública es lo que ve nuestro edge detrás de VPN/NAT. Un /24 son 256 direcciones (a menudo 254 hosts). Solo sistemas autorizados. RFC1918 es espacio privado.',
    intro:
      'Para SRE/devops que diagnostican identidad de egress, DNS, cabeceras de respuesta o matemática de subred. No escanees redes de terceros sin permiso.',
    tableTitle: 'Identidad, nombres, HTTP y luego matemática de prefijo',
    groups: {
      identity: 'Lo que ven los peers',
      dns: 'Registros de nombre y www',
      http: 'Cabeceras de una petición',
      cidr: 'Plan de prefijo IPv4/IPv6',
    },
    rows: {
      'ip-address': r(
        'Dirección de egress visible para nuestro edge',
        'Una sesión de navegador; detrás de CGNAT/VPN no es tu RFC1918 de LAN.',
        'Necesitabas conteos de host CIDR o una consulta de registro DNS.'
      ),
      'domain-lookup': r(
        'Registros DNS de un nombre que puedes consultar',
        'Un dominio que estás autorizado a inspeccionar.',
        'Necesitabas cabeceras de caché/seguridad HTTP en una URL (cabeceras del sitio).'
      ),
      'add-www-to-dns': r(
        'Pregunta de enrutado ápice frente a www',
        'El layout DNS que controlas.',
        'Necesitabas un planner CIDR para una VPC, no un CNAME www.'
      ),
      'website-headers': r(
        'Cabeceras de respuesta en una ruta de petición',
        'Una URL que estás autorizado a pedir; los CDN varían por cookie y geografía.',
        'Necesitabas IndexNow o un sitemap (tema SEO).'
      ),
      'cidr-cheat-sheet': r(
        'Largo de prefijo → conteo de hosts de referencia rápida',
        'Un largo de prefijo (p. ej. /24) y la familia de direcciones.',
        'Ya conoces el prefijo padre y necesitas matemática de índice Terraform (cidrsubnet).'
      ),
      'private-cidr-ranges': r(
        'Rangos privados RFC1918 (y listados)',
        'Un plan que debe quedarse en espacio privado.',
        'Necesitabas una IP de egress pública (ip-address).'
      ),
      'cidr-to-ip-range': r(
        'CIDR → primero/último (y campos listados)',
        'Un prefijo en notación CIDR.',
        'Tienes un rango inicio–fin y necesitas un prefijo que lo cubra (rango a CIDR).'
      ),
      'ip-range-to-cidr': r(
        'Rango de direcciones → CIDR(s) que cubren',
        'IP de inicio y de fin.',
        'Ya tienes un solo prefijo para expandir (CIDR a rango).'
      ),
      'ipv6-cidr': r(
        'Matemática de prefijo IPv6',
        'Un prefijo IPv6; no pegues intuición v4 a ciegas.',
        'Tu red es solo IPv4 para esta tarea.'
      ),
      'terraform-cidrsubnet': r(
        'Índices de subred anidada para Terraform',
        'Prefijo padre, newbits e índice como en cidrsubnet().',
        'Aún necesitas un sanity-check de hosts: cheat sheet o CIDR↔rango primero.'
      ),
      'aws-vpc-cidr-planner': r(
        'Bosquejo de prefijo VPC/subred para AWS',
        'Un CIDR padre y cómo partirás público/privado.',
        'Producción aún pide IAM, routing e IPAM: esto solo apoya la aritmética.',
      ),
    },
    flow: [
      'Revisa tamaño de prefijo y hosts en el cheat sheet o en CIDR↔rango.',
      'Abre cidr-to-ip-range cuando tienes un prefijo y necesitas el tramo de direcciones.',
      'Abre Terraform cidrsubnet cuando el prefijo padre ya está elegido y necesitas índices anidados.',
    ],
    exampleTitle: 'IPv4 /24',
    exampleBody:
      'Un /24 son 256 direcciones; muchos planes tratan 254 como hosts usables (red y broadcast reservados). Confirma la convención de tu IPAM. La IP pública no es la página LAN del router. El check de cabeceras es un camino, no cada POP del CDN.',
    boundary: 'Los problemas de rastreo SEO que en realidad son DNS/TLS/cabeceras empiezan aquí. Úsalo solo en sistemas que estás autorizado a probar.',
    secondary: {},
    faq: [
      {
        q: '¿Por qué la IP pública no coincide con la del router?',
        a: 'CGNAT, VPN y egress corporativo esconden la dirección del dispositivo. Esta página reporta lo que ve nuestro edge.',
      },
      {
        q: '¿Las cabeceras prueban caché para todos los usuarios?',
        a: 'Muestran una petición. Los CDN varían por cookie, geografía y cache key.',
      },
      {
        q: '¿Basta la matemática CIDR para diseñar una VPC?',
        a: 'Planea prefijos y hosts. Producción aún pide IAM, routing, peering y política IPAM.',
      },
      {
        q: '¿Puedo sondear cualquier host de internet?',
        a: 'No. Solo pruebas autorizadas. No escanees redes de terceros sin permiso.',
      },
    ],
    cites: {
      rfc1918: 'RFC 1918 — asignación de direcciones para internets privadas',
    },
  },
  'dev-data': {
    title: '¿Base64, JSON Schema o YAML↔JSON: qué transformación?',
    desc: 'Base64 es codificación, no cifrado. Valida JSON Schema antes de comparar dos archivos. Un JSON inválido falla el parse primero: el diff no nombra el lado roto.',
    intro: 'Para quien transforma cadenas y payloads. Son utilidades, no una plataforma ETL.',
    tableTitle: 'Transporte, estructura, debug HTTP o pipeline de docs',
    groups: {
      encode: 'Codificación de transporte (no cripto)',
      structure: 'Forma YAML, CSV, JSON',
      http: 'Muestras JWT y curl→fetch',
      docs: 'Markdown/HTML y export de ChatGPT',
    },
    rows: {
      base64: r(
        'Codificar/decodificar binario en texto',
        'Una cadena o archivo que sabes que es encoding, no una bóveda de secretos.',
        'Necesitabas un hash de contraseña o cifrado: Base64 lo revierte cualquiera.'
      ),
      'html-entity': r(
        'Escapar o desescapar entidades HTML',
        'Trozos de markup, no una garantía de sanitizer DOM completo.',
        'Necesitabas validación JSON Schema.'
      ),
      'yaml-json': r(
        'Puente YAML ↔ JSON',
        'Un documento que de verdad es YAML o JSON (no un log al azar).',
        'Necesitabas diff JSON por rutas (página JSON de Comparar texto).'
      ),
      'csv-json': r(
        'Tabla ↔ filas JSON',
        'Una tabla separada por delimitador o un array JSON de objetos.',
        'Necesitabas comparar celdas de Excel (Comparar texto).'
      ),
      'json-schema-validator': r(
        'El documento encaja con un schema que aportas',
        'Instancia JSON más un schema; es forma, no reglas de negocio.',
        'Querías ver qué cambió entre dos payloads: valida cada uno y luego diff JSON.'
      ),
      'jwt-decoder': r(
        'Inspeccionar claims de un token de muestra que puedes ver',
        'Una muestra no productiva; decodificar ≠ verificar firmas en un demo de navegador.',
        'Una cookie de sesión en vivo: no la pegues aquí.'
      ),
      'curl-to-fetch': r(
        'Reescribir un ejemplo curl a fetch()',
        'Un curl que tienes permitido traducir.',
        'Necesitabas DNS o IP pública (Red e IP).'
      ),
      'markdown-to-html': r(
        'Markdown → HTML para docs',
        'Una fuente Markdown; el preview no es un CMS.',
        'Necesitabas PDF→Markdown (tema PDF).'
      ),
      'chatgpt-export-to-markdown': r(
        'Export de chat → Markdown para un repo',
        'Un archivo de export que la página acepta.',
        'Necesitabas un constructor de prompts (tema de prompts), no un conversor de export.',
      ),
    },
    flow: [
      'Si importa la forma del contrato, valida cada JSON contra el schema.',
      'Luego convierte YAML↔JSON solo en documentos que ya parsean.',
    ],
    exampleTitle: 'JSON inválido frente a un diff semántico',
    exampleBody:
      'Un JSON con coma final falla el schema (o el parse) antes de que el diff tenga sentido. Comparar dos documentos válidos tampoco te dice qué lado violó campos required: valida primero. Base64 de una contraseña no es hashing.',
    boundary:
      'Comparar texto, Excel, Unix, CIDR de Terraform, UUID y PDF→Markdown se listan de forma secundaria cuando el trabajo es depurar payloads o docs.',
    secondary: {
      'compare-two-text-files-online': 'Dos .txt/.md, diff de líneas—no parse YAML.',
      'excel-compare-files': 'Celdas de hoja, no rutas JSON.',
      'image-to-base64': 'Data URL de imagen, no Base64 genérico de cadena.',
      'json-diff-checker-online': 'Cambios JSON por ruta después de validar cada lado.',
      'magnet-link-decoder': 'Campos de URI magnet, no JSON.',
      'pdf-to-markdown': 'PDF de texto a Markdown cuando el pipeline arranca de PDF.',
      'schema-jsonld-generator': 'JSON-LD de búsqueda, no JSON Schema de API.',
      'terraform-cidrsubnet': 'Índices de subred cuando el payload es Terraform, no JSON.',
      'text-diff': 'Cadenas pegadas, no archivos ni árboles JSON.',
      'timezone-converter': 'Conversión IANA al depurar timestamps en código.',
      'unix-timestamp': 'Largo de dígitos epoch en logs.',
      'uuid-generator': 'IDs opacos, no cifrado.',
    },
    faq: [
      {
        q: '¿Base64 es cifrado?',
        a: 'No. Cualquiera puede decodificarlo. Usa APIs criptográficas reales para confidencialidad.',
      },
      {
        q: '¿Válido según schema significa listo para producción?',
        a: 'Coincide con el schema que aportaste. No prueba authz ni reglas de negocio.',
      },
      {
        q: '¿Validar antes o después del diff JSON?',
        a: 'Valida cada lado primero si te importa la forma del contrato. El diff solo no nombra la violación de schema.',
      },
      {
        q: '¿Archivos enormes?',
        a: 'Hay tope de memoria de pestaña. Redacta secretos; las extensiones igual pueden observar la pestaña.',
      },
    ],
    cites: {},
  },
  'ai-prompt-template-builder': {
    title: 'Constructores y generadores de prompts para escritura, Midjourney, boceto, cine, drama corto, diseño de producto, Android e iOS',
    desc: 'Cada página tiene campos distintos: los beats de guion no son parámetros de Midjourney. Build local se queda en el dispositivo; la IA opcional usa Turnstile. No hay una URL por modelo.',
    intro:
      'Para quien necesita un prompt listo para pegar en ChatGPT, Gemini, Claude o DeepSeek. Elige la página que coincide con el artefacto, no con la marca del modelo.',
    tableTitle: 'Empareja el artefacto—no el nombre del modelo',
    groups: {
      template: 'Plantillas reutilizables de cuatro campos',
      writing: 'Arranques de ficción y dados aleatorios',
      image: 'Controles de imagen frente a line-art',
      screen: 'Beats de cine frente a serial vertical',
      product: 'Briefs UX y agentes móviles',
    },
    rows: {
      'prompt-template-builder': r(
        'Rol / Tarea / Restricciones / Salida más chips de escena',
        'Un trabajo de plantilla reutilizable (incluidos chips que rellenan y enlazan páginas de escena).',
        'Ya sabes que necesitas parámetros Midjourney o campos de agente SwiftUI: abre esas páginas.'
      ),
      'writing-prompt-generator': r(
        'Diálogo, personaje, guion o semillas de ficción al azar',
        'Un modo de escritura (incluido Aleatorio) que expone el formulario.',
        'Necesitabas campos MJ --ar/--stylize o una página de logline a tres actos.'
      ),
      'midjourney-prompt-builder': r(
        'Prompt de imagen con parámetros estilo Midjourney',
        'Sujeto más los campos de parámetro MJ que posee esta página.',
        'Necesitabas controles de line-art/composición (sketch) o un spec de agente Kotlin.'
      ),
      'sketch-prompt-generator': r(
        'Prompt de composición line-art / sketch',
        'Medio, estilo de línea y controles de composición.',
        'Necesitabas parámetros MJ fotorrealistas o un formulario de cliffhanger de short-drama.'
      ),
      'film-prompt-builder': r(
        'Logline y beats de tres actos',
        'Campos de estructura de cine de largo.',
        'Necesitabas ganchos de short-drama vertical (otro formulario) o un brief UX de producto.'
      ),
      'short-drama-prompt-generator': r(
        'Ganchos y cliffhangers de serial vertical',
        'Campos de episodio/gancho que lista esta página.',
        'Necesitabas un constructor de tres actos de largo.'
      ),
      'product-design-prompt-builder': r(
        'Brief UX: persona, wireframe, tokens',
        'Campos de diseño de producto, no plantillas Kotlin de Android.',
        'Necesitabas prompts de agente Compose o SwiftUI: son páginas aparte.'
      ),
      'android-prompt-builder': r(
        'Plantilla de agente Kotlin / Jetpack Compose',
        'Campos de stack específicos de Android.',
        'Necesitabas campos Swift/SwiftUI de iOS: usa la página iOS, no un cambio de título.'
      ),
      'ios-prompt-builder': r(
        'Plantilla de agente Swift / SwiftUI',
        'Campos de stack específicos de iOS.',
        'Necesitabas campos Compose de Android: usa la página Android.',
      ),
    },
    flow: [
      'Si necesitas un bloque genérico Rol/Tarea/Restricciones/Salida, empieza en el constructor de plantillas (los chips pueden saltar a una página de escena).',
      'Si los campos principales ya son de escena (MJ, cine, iOS…), abre esa página para no rellenar el formulario equivocado.',
    ],
    exampleTitle: 'Local frente a IA opcional',
    exampleBody:
      'Build/Roll se queda en el navegador. Expand/Polish envía solo el texto de ese clic a Cloudflare Workers AI después de Turnstile, con rate limit. Si falla, vuelve a la salida local. Estas páginas no ejecutan Midjourney, no renderizan imágenes ni compilán apps. ChatGPT/Gemini/Claude/DeepSeek aparecen en el copy—no como destinos separados.',
    boundary:
      'No hay una URL por modelo. Dev y datos tiene export de ChatGPT → Markdown cuando el trabajo es convertir un archivo de export.',
    secondary: {},
    faq: [
      {
        q: '¿Necesito una URL de ChatGPT y otra de Gemini?',
        a: 'No. El mismo formulario con otro título no ayuda. Pega el prompt armado en el chat que uses.',
      },
      {
        q: '¿Mi borrador se sube solo?',
        a: 'No en Build/Roll local. Solo Expand/Polish, tras Turnstile, envía ese envío a Workers AI—no a OpenAI/Google/Anthropic/DeepSeek desde nuestros servidores.',
      },
      {
        q: '¿Qué hace Turnstile?',
        a: 'Reduce abuso automatizado de la cuota de IA compartida. El modo local funciona sin él.',
      },
      {
        q: '¿Generaciones de IA ilimitadas?',
        a: 'No. Aplican cuotas compartidas de Neurons/IP. Ante 429, sigue con la salida local.',
      },
    ],
    cites: {},
  },
  'text-compare': {
    title: '¿Pegar, archivos, Word, JSON o Excel: qué comparación?',
    desc: 'Empareja el objeto que tienes: pegado, .txt, prosa Word, rutas JSON o celdas Excel. No pegues .xlsx en la caja de texto. Local cuando esté marcado.',
    intro:
      'Para revisores que necesitan ver qué cambió. Cada página carga un tipo de insumo. Prefiere páginas sin subir para borradores confidenciales.',
    tableTitle: 'Elige según los archivos o cadenas que tienes en la mano',
    groups: {
      paste: 'Cadenas del portapapeles',
      files: 'Subidas de archivo de texto',
      office: 'Prosa Word o celdas de hoja',
      json: 'Rutas de objeto/array',
    },
    rows: {
      'text-diff': r(
        'Dos cadenas planas pegadas',
        'Texto ya en el portapapeles (modos línea/palabra/carácter según la página).',
        'Tienes .docx, .xlsx o JSON: no pegues binario en esta caja.'
      ),
      'compare-two-text-files-online': r(
        'Dos archivos .txt/.md (o texto listado)',
        'Dos selectores de archivo; por defecto diff de líneas UTF-8.',
        'Querías extraer Word o comparar la grilla de Excel.'
      ),
      'compare-two-word-documents-for-differences': r(
        'Dos .docx: extrae texto legible y luego compara',
        'Dos Word que puedes abrir; no se reproduce el merge de diseño ni Control de cambios.',
        'Necesitabas Revisar → Comparar de Microsoft Word, o una herramienta de página PDF.'
      ),
      'excel-compare-files': r(
        'Celda a celda en una hoja elegida',
        'Dos xlsx/csv y la hoja que quieres (a menudo la primera).',
        'Necesitabas diffs de rutas JSON o párrafos pegados.'
      ),
      'json-diff-checker-online': r(
        'Altas/cambios/bajas por ruta; el orden de claves se ignora por defecto',
        'Dos documentos JSON (arrays como listas o conjuntos según controles).',
        'Necesitabas coordenadas de hoja o un diff de líneas de YAML como texto.',
      ),
    },
    flow: [
      'Si ambos lados ya son texto del portapapeles, usa la comparación de dos textos.',
      'Si ambos lados son APIs JSON, usa el diff JSON (valida schema en Dev y datos primero si te importa el contrato).',
    ],
    exampleTitle: 'Las mismas dos cadenas, página equivocada',
    exampleBody:
      'Pegar JSON en el diff de texto esconde la semántica de rutas. Soltar dos hojas en la página de pegado esconde coordenadas de celda. Comparar Word no es Control de cambios de escritorio. Los archivos enormes pueden topear la memoria de la pestaña.',
    boundary: 'Unir/partir PDF es PDF y docs. YAML/XML como árboles no son estas cinco páginas (el texto por líneas aún puede usar pegar/archivo).',
    secondary: {},
    faq: [
      {
        q: '¿Por qué hay más de una página de comparación?',
        a: 'Cargadores y defaults difieren. Una sola UI navaja suiza esconde árboles JSON y grillas Excel.',
      },
      {
        q: '¿Comparar Word sustituye Revisar → Comparar?',
        a: 'No. Este sitio compara prosa extraída. La UI de merge de Word es más rica para formato.',
      },
      {
        q: '¿Se sube el contenido a un servidor?',
        a: 'Las páginas de proceso local corren en el navegador. Las extensiones igual pueden ver la pestaña. Evita secretos de producción si tu política prohíbe herramientas en línea.',
      },
      {
        q: '¿Una página puede comparar JSON y Excel a la vez?',
        a: 'No. Usa la de JSON o la de Excel. Forzar ambos a un diff de texto esconde la estructura.',
      },
    ],
    cites: {},
  },
  'security-ids': {
    title: '¿Contraseña, UUID o hash de archivo: qué identificador?',
    desc: 'Genera contraseñas hacia un gestor. UUID v4 es un id opaco, no una sesión. Hashear no es cifrar. Nunca pegues cookies en vivo aquí.',
    intro:
      'Para generar entropía, acuñar IDs o checksumar archivos que puedes procesar en el dispositivo. Rota cualquier cosa expuesta por accidente.',
    tableTitle: 'Secretos, identificadores o integridad',
    groups: {
      secrets: 'Secretos que un humano recuerda',
      ids: 'Identificadores opacos',
      integrity: 'Checksums y hechos de archivo',
    },
    rows: {
      'password-generator': r(
        'Contraseña aleatoria con largo/charset',
        'Un largo y un set de caracteres que permite tu política; cópiala al gestor de inmediato.',
        'Necesitabas un UUID de clave de base o un checksum de archivo.'
      ),
      'uuid-generator': r(
        'UUID (v4 al azar es habitual para claves opacas)',
        'Necesidad de un identificador, no de un token de login.',
        'Tratas el UUID como autenticación: usa librerías de sesión de la plataforma.'
      ),
      'file-hash': r(
        'Checksum de un archivo que puedes hashear en el dispositivo',
        'Un archivo; el hash es integridad, no confidencialidad.',
        'Necesitabas cifrar un PDF (proteger PDF) o generar una contraseña.'
      ),
      'file-metadata-analyzer': r(
        'Hechos básicos del archivo (tipo, tamaño, metadatos listados)',
        'Un archivo de muestra; no es un sandbox de malware.',
        'Necesitabas quitar GPS EXIF de una foto (EXIF de imagen).',
      ),
    },
    flow: [
      'Copia una contraseña generada a un gestor de confianza en la misma sentada: no te la envíes por correo.',
    ],
    exampleTitle: 'UUID v4 no es una sesión',
    exampleBody:
      'Los IDs v4 sirven como claves opacas de base. No son sesiones firmadas. Hashear una contraseña en un demo de navegador no es almacenamiento Argon2/bcrypt. Inspeccionar claims JWT pertenece a un token de muestra que puedes ver (Dev y datos).',
    boundary:
      'Proteger/desbloquear PDF, EXIF, Base64, curl-to-fetch y JWT se listan de forma secundaria cuando el trabajo es privacidad o inspección.',
    secondary: {
      base64: 'Codificación, no una bóveda de contraseñas: decodificar es trivial.',
      'curl-to-fetch': 'Traducir un curl que puedes ver, no robar cookies.',
      'image-exif': 'Quitar metadatos de ubicación en fotos antes de compartir en público.',
      'jwt-decoder': 'Estructura de claims en muestras—no atacar cuentas.',
      'protect-pdf': 'Contraseña que controlas en un PDF que te pertenece.',
      'unlock-pdf': 'Contraseña de propietario que conoces de forma legítima.',
    },
    faq: [
      {
        q: '¿Qué versión de UUID?',
        a: 'v4 al azar es habitual para ids públicos opacos. Las versiones por tiempo pueden filtrar secuencia. Los UUID no prueban autenticación.',
      },
      {
        q: '¿Dónde guardo una contraseña generada?',
        a: 'En un gestor de contraseñas de confianza, al momento. No dejes secretos en docs compartidos.',
      },
      {
        q: '¿Basta hashear para guardar logins?',
        a: 'Producción pide algoritmos lentos, con sal y memoria, vía librerías revisadas—no un hash casual de navegador.',
      },
      {
        q: '¿Cookies de sesión en vivo?',
        a: 'Nunca las pegues en páginas en las que no confías, incluido este sitio.',
      },
    ],
    cites: {},
  },
  'files-archives': {
    title: '¿Zip, descomprimir o leer un magnet: qué archivo?',
    desc: 'Comprime carpetas modestas en la pestaña. El decode de magnet lee campos URI y no arranca una descarga. Árboles enormes piden un archivador nativo. Solo contenido lícito.',
    intro:
      'Para empaquetar entregas o inspeccionar magnets sobre los que tienes derechos. Escanea archivos no confiables en tu máquina.',
    tableTitle: 'Crear, extraer o inspeccionar un URI magnet',
    groups: {
      zip: 'Zip/unzip/extract en el navegador',
      magnet: 'Metadatos magnet, no un cliente torrent',
    },
    rows: {
      'create-zip-file': r(
        'Empaquetar una carpeta modesta en un zip',
        'Un árbol que cabe en la memoria de la pestaña (excluye vendor enormes).',
        'Necesitas formatos exóticos 7-Zip/RAR o archivos de varios GB: usa una herramienta nativa.'
      ),
      'unzip-file': r(
        'Abrir un zip y sacar archivos',
        'Un zip que puedes extraer; formatos cifrados/exóticos pueden fallar.',
        'Necesitabas armar un zip (crear) o parsear un URI magnet.'
      ),
      'archive-extractor': r(
        'Listar o extraer un archivo soportado',
        'Un formato que la página realmente soporta.',
        'El trabajo es solo checksum (hash de archivo) sin extraer.'
      ),
      'magnet-link-decoder': r(
        'Leer nombre y hashes de un URI magnet',
        'Una cadena magnet; esto no trae payloads.',
        'Contenido infractor o un intento de saltar controles de acceso: no uses esta página para eso.',
      ),
    },
    flow: [
      'Crea un zip para una entrega modesta en el navegador.',
      'Descomprime del lado que recibe; si el árbol es enorme, pasa a un archivador nativo.',
    ],
    exampleTitle: 'URI magnet frente a descarga',
    exampleBody:
      'Decodificar un magnet muestra hashes y trackers opcionales. No arranca un torrent. El zip del navegador falla en árboles tipo node_modules porque las pestañas tienen memoria finita. El hash de archivo se lista aquí de forma secundaria para verificar una descarga que ya tienes.',
    boundary: 'Las herramientas de integridad son primarias en Seguridad e IDs. Solo contenido lícito.',
    secondary: {
      'file-hash': 'Checksum de un archivo descargado que ya posees.',
      'file-metadata-analyzer': 'Tipo/tamaño antes de extraer un archivo no confiable.',
    },
    faq: [
      {
        q: '¿Por qué falló el zip en una carpeta grande?',
        a: 'Memoria de pestaña. Parte el trabajo, excluye árboles enormes o usa un archivador nativo.',
      },
      {
        q: '¿Parsear el magnet arranca una descarga?',
        a: 'No. Un cliente torrent traería payloads—y solo para contenido lícito.',
      },
      {
        q: '¿Los zips sustituyen copias de seguridad?',
        a: 'Un paquete no es una estrategia de backup. Usa backups versionados con pruebas de restore.',
      },
      {
        q: '¿Archivos cifrados?',
        a: 'Pueden no estar soportados. No trates estas páginas como un cracker de contraseñas.',
      },
    ],
    cites: {},
  },
};

/**
 * 将紧凑 rows（slug → [job, need, skip]）展开为 Row 对象。
 * @param {object} t
 */
const expand = (t) => {
  const rows = {};
  for (const [slug, trip] of Object.entries(t.rows)) {
    rows[slug] = r(trip[0], trip[1], trip[2], trip[3]);
  }
  return { ...t, rows };
};

/** 阿拉伯语表头 */
const chromeAr = {
  topics_ig_col_job: 'ماذا تريد أن تحسب',
  topics_ig_col_tool: 'حاسبة هذا الموقع',
  topics_ig_col_need: 'ما لديك جاهزًا',
  topics_ig_col_skip: 'تجاوز هذه الصفحة إذا',
  topics_ig_workflow: 'ترتيب عملي مقترح',
  topics_ig_related: 'موضوعات قريبة',
  topics_ig_refs: 'مراجع',
};

/** برتغالي البرازيل */
const chromePt = {
  topics_ig_col_job: 'O que você quer resolver',
  topics_ig_col_tool: 'Calculadora deste site',
  topics_ig_col_need: 'O que você já tem',
  topics_ig_col_skip: 'Não use esta página se',
  topics_ig_workflow: 'Ordem que costuma funcionar',
  topics_ig_related: 'Temas próximos',
  topics_ig_refs: 'Fontes',
};

/** Bahasa Indonesia */
const chromeId = {
  topics_ig_col_job: 'Apa yang ingin dihitung',
  topics_ig_col_tool: 'Kalkulator di situs ini',
  topics_ig_col_need: 'Data yang sudah Anda punya',
  topics_ig_col_skip: 'Lewati halaman ini jika',
  topics_ig_workflow: 'Urutan yang biasanya dipakai',
  topics_ig_related: 'Topik terkait',
  topics_ig_refs: 'Rujukan',
};

/** 法语表头（vouvoiement） */
const chromeFr = {
  topics_ig_col_job: 'Ce que vous voulez calculer',
  topics_ig_col_tool: 'Calculateur de ce site',
  topics_ig_col_need: 'Ce que vous avez déjà',
  topics_ig_col_skip: 'N’ouvrez pas cette page si',
  topics_ig_workflow: 'Ordre qui marche souvent',
  topics_ig_related: 'Sujets proches',
  topics_ig_refs: 'Références',
};

/** 日语表头（不用英语 tools 后缀） */
const chromeJa = {
  topics_ig_col_job: 'いま解きたいこと',
  topics_ig_col_tool: 'このサイトの計算ページ',
  topics_ig_col_need: '手元にある入力',
  topics_ig_col_skip: '使わない方がよい場合',
  topics_ig_workflow: 'おすすめの順',
  topics_ig_related: '近いテーマ',
  topics_ig_refs: '出典',
};

/** 俄语表头（вы） */
const chromeRu = {
  topics_ig_col_job: 'Что нужно посчитать',
  topics_ig_col_tool: 'Калькулятор этого сайта',
  topics_ig_col_need: 'Что уже есть на руках',
  topics_ig_col_skip: 'Не открывайте страницу, если',
  topics_ig_workflow: 'Порядок, который обычно работает',
  topics_ig_related: 'Соседние темы',
  topics_ig_refs: 'Источники',
};

/** 德语表头（Sie） */
const chromeDe = {
  topics_ig_col_job: 'Was Sie klären wollen',
  topics_ig_col_tool: 'Rechner auf dieser Website',
  topics_ig_col_need: 'Was Sie schon haben',
  topics_ig_col_skip: 'Diese Seite nicht nutzen, wenn',
  topics_ig_workflow: 'Reihenfolge, die oft hilft',
  topics_ig_related: 'Nahe Themen',
  topics_ig_refs: 'Quellen',
};

export const PACKS = {
  es: pack(chromeEs, topicsEs),
  ar: pack(chromeAr, buildArTopics(expand)),
  pt: pack(chromePt, buildPtTopics(expand)),
  id: pack(chromeId, buildIdTopics(expand)),
  fr: pack(chromeFr, buildFrTopics(expand)),
  ja: pack(chromeJa, buildJaTopics(expand)),
  ru: pack(chromeRu, buildRuTopics(expand)),
  de: pack(chromeDe, buildDeTopics(expand)),
};

