/**
 * 站点信息页与页脚短链文案（Privacy / Terms / Contact）。
 * 与 `i18n.mjs` 主表分离，避免单文件继续膨胀；由 `t()` 合并查询。
 */

/** @type {Record<string, Record<string, string>>} */
export const sitePageTranslations = {
  en: {
    footer_privacy: 'Privacy',
    footer_terms: 'Terms',
    footer_contact: 'Contact',
    footer_github: 'GitHub',
    footer_nav_label: 'Site links',

    privacy_title: 'Privacy Policy',
    privacy_description:
      'How OnlineFreeTools.org handles data: most tools run locally in your browser; edge tools process short requests; analytics and how to contact us about privacy.',
    privacy_intro:
      'This policy explains what stays on your device, when a short request may hit our Cloudflare Worker, and which analytics scripts load on pages.',
    privacy_local_title: 'Local processing (no upload to a server)',
    privacy_local_body:
      'Many tools (text converters, image editors, PDF tools, most calculators) process your paste or chosen files only in this browser tab. Those bytes are not uploaded to our servers as a product feature. The “No upload” badge on home tool cards marks these tools. A page may still load open-source libraries from a CDN; that request is library code, not your content. A few tools (headers, IP, IndexNow) send short edge requests—those pages say so and do not show the badge.',
    privacy_edge_title: 'When a request leaves your device',
    privacy_edge_body:
      'A few tools need our edge Worker—for example fetching public HTTP headers, checking DNS, reading your public IP as seen by the edge, or submitting IndexNow URL lists. Those requests carry only what the tool needs for that action, and we do not keep them in a content database as a product feature. Tool pages state this clearly where it applies.',
    privacy_workers_ai_title: 'Optional Cloudflare Workers AI (opt-in)',
    privacy_workers_ai_body:
      'On Prompt template builder, local assembly stays in your browser by default. If you choose Expand with AI or Polish with AI, the text you submit for that action is sent to Cloudflare Workers AI for inference only—not to OpenAI, Google, Anthropic, or DeepSeek APIs from our servers. Those chat products are where you paste the finished template afterward. AI actions require Turnstile verification and are rate-limited. We do not store your prompt text in a user content database as a product feature.',
    privacy_analytics_title: 'Analytics',
    privacy_analytics_body:
      'Pages may load Microsoft Clarity (clarity.ms) to understand aggregate traffic and usability. This third party may set cookies or similar identifiers under its own policies. We do not sell personal data.',
    privacy_retention_title: 'Accounts and retention',
    privacy_retention_body:
      'We do not require signup. We do not operate a user-content vault for tool inputs. Operational logs on Cloudflare infrastructure follow that platform’s retention practices and are not used to rebuild your pasted content.',
    privacy_contact_title: 'Privacy questions',
    privacy_contact_body: 'Email {email} with privacy questions. We read messages about this site and its tools.',

    terms_title: 'Terms of Use',
    terms_description:
      'Terms for using OnlineFreeTools.org: acceptable use, no warranty, educational disclaimers for health and finance tools, and how terms may change.',
    terms_intro:
      'By using OnlineFreeTools.org you agree to these terms. The site is a free learning project that ships small utilities—not a paid advisory service.',
    terms_use_title: 'Acceptable use',
    terms_use_body:
      'Use the tools for lawful purposes. Do not abuse edge-proxy tools to scan private networks, overwhelm third-party hosts, or violate applicable law. Do not attempt to disrupt the service or other users.',
    terms_warranty_title: 'No warranty',
    terms_warranty_body:
      'Tools are provided “as is” without warranties of any kind. Results may contain errors, browser limits, or incomplete conversions. You are responsible for verifying outputs before relying on them.',
    terms_advice_title: 'Not professional advice',
    terms_advice_body:
      'Health and finance calculators (such as BMI or ROI) are for education only. They are not medical, legal, tax, or investment advice. Confirm important decisions with a qualified professional.',
    terms_changes_title: 'Changes',
    terms_changes_body:
      'We may update these terms as the project evolves. Continued use after changes means you accept the updated terms. The current version is always published on this page.',

    contact_title: 'Contact',
    contact_description:
      'Contact OnlineFreeTools.org by email for tool feedback, bug reports, or site questions. Public address and what to expect when you write.',
    contact_intro: 'Questions about a tool, a bug report, or feedback on the site—write to us. We are a small learning project and read every message about these tools.',
    contact_email_title: 'Email',
    contact_email_body: 'Public contact address: {email}. Use your mail app or the feedback form on any tool page (it opens a prefilled message).',
    contact_feedback_title: 'Tool feedback',
    contact_feedback_body:
      'On each tool page, the feedback section lets you draft subject and body with the tool name and URL filled in, then open your email app. Prefer that path for tool-specific issues.',
    contact_response_title: 'Response time',
    contact_response_body:
      'We aim to reply when we can, but this is not a 24/7 support desk. Security-related reports are prioritized. Please do not send passwords or unrelated personal data.',
  },

  zh: {
    footer_privacy: '隐私',
    footer_terms: '条款',
    footer_contact: '联系',
    footer_github: 'GitHub',
    footer_nav_label: '站点链接',

    privacy_title: '隐私政策',
    privacy_description:
      'OnlineFreeTools.org 如何处理数据：多数工具在浏览器本地运行；边缘工具仅处理短请求；页面分析脚本说明，以及隐私相关联系方式。',
    privacy_intro: '本政策说明哪些内容只留在你的设备上、何时会向我们的 Cloudflare Worker 发出短请求，以及页面会加载哪些分析脚本。',
    privacy_local_title: '本地处理（不上传服务器）',
    privacy_local_body:
      '许多工具（文本转换、图片编辑、PDF、多数计算器）只在当前标签页处理你粘贴或选择的内容，不会作为产品功能上传到我们的服务器。首页卡片上的「不上传」标签即指这类工具。页面仍可能从 CDN 加载开源库，该请求是库代码，不是你的内容。少数查 Headers / IP / IndexNow 的工具会发短请求，页内会说明，且不挂该标签。',
    privacy_edge_title: '何时会离开本机',
    privacy_edge_body:
      '少数工具需要边缘 Worker，例如读取公开 HTTP 响应头、查询 DNS、查看边缘所见的公网 IP，或提交 IndexNow URL 列表。请求只携带完成该操作所需的数据，我们不会将其作为内容库长期保存。适用工具页会写明这一点。',
    privacy_workers_ai_title: '可选 Cloudflare Workers AI（需主动点击）',
    privacy_workers_ai_body:
      '在 Prompt 模板构建器上，默认只在浏览器本地组装模板。若你选择「AI 扩写」或「AI 润色」，仅该次提交的文字会发往 Cloudflare Workers AI 做推理——不会从我们的服务器调用 OpenAI、Google、Anthropic 或 DeepSeek 的 API；你之后再自行粘贴到这些聊天产品。AI 操作须通过 Turnstile 验证并受频率限制。我们不会把 Prompt 全文作为用户内容库长期保存。',
    privacy_analytics_title: '访问分析',
    privacy_analytics_body:
      '页面可能加载 Microsoft Clarity（clarity.ms），用于了解汇总流量与可用性。该第三方可能按其政策设置 Cookie 或类似标识。我们不出售个人数据。',
    privacy_retention_title: '账号与留存',
    privacy_retention_body:
      '本站无需注册。我们不提供用于保存工具输入的用户内容库。Cloudflare 基础设施上的运维日志遵循该平台的留存实践，不会用来重建你粘贴的内容。',
    privacy_contact_title: '隐私相关问询',
    privacy_contact_body: '隐私相关问题请发邮件至 {email}。我们会阅读与本站及工具有关的来信。',

    terms_title: '使用条款',
    terms_description:
      '使用 OnlineFreeTools.org 的条款：可接受使用、无担保声明、健康/财务类工具的教育性免责，以及条款如何更新。',
    terms_intro: '使用 OnlineFreeTools.org 即表示你同意本条款。本站是免费学习型项目，提供小型工具，不是付费咨询服务。',
    terms_use_title: '可接受使用',
    terms_use_body:
      '请合法使用工具。勿滥用边缘代理类工具扫描私有网络、压垮第三方主机或违反适用法律。勿试图破坏服务或其他用户的使用。',
    terms_warranty_title: '无担保',
    terms_warranty_body:
      '工具按「现状」提供，不作任何明示或暗示担保。结果可能有误差、浏览器限制或不完整转换。依赖结果前请自行核实。',
    terms_advice_title: '非专业建议',
    terms_advice_body:
      '健康与财务类计算器（如 BMI、ROI）仅供学习参考，不构成医疗、法律、税务或投资建议。重要决策请咨询具备资质的专业人士。',
    terms_changes_title: '变更',
    terms_changes_body: '我们可能随项目迭代更新本条款。变更后继续使用即视为接受更新后的条款。现行版本始终发布在本页。',

    contact_title: '联系我们',
    contact_description:
      '通过邮件联系 OnlineFreeTools.org：工具反馈、缺陷报告或站点问题。公开邮箱与回复预期说明。',
    contact_intro: '关于某个工具的问题、缺陷报告或站点反馈，欢迎来信。我们是小型学习型项目，会阅读每一封与这些工具有关的邮件。',
    contact_email_title: '邮箱',
    contact_email_body: '公开联系邮箱：{email}。可用邮件应用直接写信，或在任意工具页的反馈区起草（会预填主题与正文）。',
    contact_feedback_title: '工具反馈',
    contact_feedback_body:
      '每个工具页的反馈区可起草主题与正文（含工具名与页面 URL），再打开系统邮件应用。工具相关问题建议走这条路径。',
    contact_response_title: '回复时间',
    contact_response_body:
      '我们会在力所能及范围内回复，但并非 7×24 客服。安全相关报告优先处理。请勿发送密码或不相关的个人敏感信息。',
  },

  es: {
    footer_privacy: 'Privacidad',
    footer_terms: 'Términos',
    footer_contact: 'Contacto',
    footer_github: 'GitHub',
    footer_nav_label: 'Enlaces del sitio',
    privacy_title: 'Política de privacidad',
    privacy_description:
      'Cómo OnlineFreeTools.org trata los datos: la mayoría de herramientas corren en el navegador; las de edge procesan peticiones breves; analítica y contacto sobre privacidad.',
    privacy_intro:
      'Esta política explica qué permanece en tu dispositivo, cuándo una petición breve puede llegar a nuestro Worker de Cloudflare y qué scripts de analítica cargan las páginas.',
    privacy_local_title: 'Procesamiento local',
    privacy_local_body:
      'Muchas herramientas procesan pegados o archivos solo en esta pestaña. Esos bytes no se suben a nuestros servidores como función del producto. La página puede cargar librerías open source desde un CDN; esa petición es código de librería, no tu contenido.',
    privacy_edge_title: 'Cuando sale una petición',
    privacy_edge_body:
      'Algunas herramientas necesitan el Worker (cabeceras HTTP públicas, DNS, IP pública vista desde el edge o listas IndexNow). Solo se envía lo necesario y no lo guardamos en una base de contenidos. Las páginas lo indican cuando aplica.',
    privacy_workers_ai_title: 'Cloudflare Workers AI opcional (opt-in)',
    privacy_workers_ai_body:
      'En Prompt template builder, el ensamblado local queda en tu navegador por defecto. Si eliges Expandir con IA o Pulir con IA, el texto que envíes solo para esa acción va a Cloudflare Workers AI — no a las APIs de OpenAI, Google, Anthropic o DeepSeek desde nuestros servidores. Luego pegas la plantilla en ChatGPT, Gemini, Claude o DeepSeek. Requiere Turnstile y tiene límites de uso.',
    privacy_analytics_title: 'Analítica',
    privacy_analytics_body:
      'Las páginas pueden cargar Microsoft Clarity (clarity.ms) para tráfico agregado y usabilidad. Este tercero puede usar cookies según su política. No vendemos datos personales.',
    privacy_retention_title: 'Cuentas y retención',
    privacy_retention_body:
      'No pedimos registro ni operamos un almacén de entradas de herramientas. Los registros operativos en Cloudflare siguen las prácticas de esa plataforma.',
    privacy_contact_title: 'Preguntas de privacidad',
    privacy_contact_body: 'Escribe a {email} con preguntas de privacidad. Leemos los mensajes sobre este sitio y sus herramientas.',
    terms_title: 'Términos de uso',
    terms_description:
      'Términos de OnlineFreeTools.org: uso aceptable, sin garantía, avisos educativos de salud/finanzas y cambios de términos.',
    terms_intro:
      'Al usar OnlineFreeTools.org aceptas estos términos. Es un proyecto de aprendizaje gratuito con utilidades pequeñas, no un servicio de asesoría de pago.',
    terms_use_title: 'Uso aceptable',
    terms_use_body:
      'Usa las herramientas con fines lícitos. No abuses de los proxies edge para escanear redes privadas, saturar hosts ajenos o violar la ley. No intentes interrumpir el servicio.',
    terms_warranty_title: 'Sin garantía',
    terms_warranty_body:
      'Las herramientas se ofrecen «tal cual», sin garantías. Puede haber errores o límites del navegador. Verifica los resultados antes de confiar en ellos.',
    terms_advice_title: 'No es consejo profesional',
    terms_advice_body:
      'Las calculadoras de salud y finanzas (p. ej. IMC o ROI) son solo educativas. No son consejo médico, legal, fiscal ni de inversión.',
    terms_changes_title: 'Cambios',
    terms_changes_body:
      'Podemos actualizar estos términos. Seguir usando el sitio tras los cambios implica aceptarlos. La versión actual está siempre en esta página.',
    contact_title: 'Contacto',
    contact_description:
      'Contacta OnlineFreeTools.org por correo para feedback de herramientas, fallos o preguntas del sitio. Dirección pública y expectativas de respuesta.',
    contact_intro:
      '¿Dudas sobre una herramienta, un fallo o feedback del sitio? Escríbenos. Somos un proyecto pequeño y leemos cada mensaje sobre estas herramientas.',
    contact_email_title: 'Correo',
    contact_email_body:
      'Dirección pública: {email}. Usa tu app de correo o el formulario de feedback en cualquier herramienta (abre un mensaje precargado).',
    contact_feedback_title: 'Feedback de herramientas',
    contact_feedback_body:
      'En cada herramienta, la sección de feedback permite redactar asunto y cuerpo con el nombre y la URL, y abrir tu app de correo.',
    contact_response_title: 'Tiempo de respuesta',
    contact_response_body:
      'Respondemos cuando podemos; no es soporte 24/7. Priorizamos reportes de seguridad. No envíes contraseñas ni datos personales ajenos al tema.',
  },

  ar: {
    footer_privacy: 'الخصوصية',
    footer_terms: 'الشروط',
    footer_contact: 'اتصل',
    footer_github: 'GitHub',
    footer_nav_label: 'روابط الموقع',
    privacy_title: 'سياسة الخصوصية',
    privacy_description:
      'كيف يتعامل OnlineFreeTools.org مع البيانات: معظم الأدوات تعمل محليًا في المتصفح؛ أدوات الحافة تعالج طلبات قصيرة؛ التحليلات وكيفية التواصل بشأن الخصوصية.',
    privacy_intro:
      'توضح هذه السياسة ما يبقى على جهازك، ومتى قد يصل طلب قصير إلى Cloudflare Worker، وأي سكربتات تحليلات تُحمَّل في الصفحات.',
    privacy_local_title: 'المعالجة المحلية',
    privacy_local_body:
      'كثير من الأدوات تعالج اللصق أو الملفات في علامة التبويب فقط ولا ترفعها إلى خوادمنا كميزة منتج. قد تُحمَّل مكتبات مفتوحة من CDN؛ ذلك طلب لكود المكتبة لا لمحتواك.',
    privacy_edge_title: 'عندما يغادر الطلب جهازك',
    privacy_edge_body:
      'بعض الأدوات تحتاج Worker (ترويسات HTTP عامة، DNS، IP العامة كما يراها الحافة، أو قوائم IndexNow). نرسل ما يلزم فقط ولا نخزّنها في قاعدة محتوى. الصفحات توضح ذلك عند الحاجة.',
    privacy_workers_ai_title: 'Cloudflare Workers AI اختياري (بموافقتك)',
    privacy_workers_ai_body:
      'في Prompt template builder يبقى التجميع المحلي في متصفحك افتراضيًا. إذا اخترت التوسيع أو التلميع بالذكاء الاصطناعي، يُرسل النص لـ Cloudflare Workers AI فقط — وليس إلى واجهات OpenAI أو Google أو Anthropic أو DeepSeek من خوادمنا. ثم تلصق القالب في ChatGPT أو Gemini أو Claude أو DeepSeek. يتطلب Turnstile وله حدود استخدام.',
    privacy_analytics_title: 'التحليلات',
    privacy_analytics_body:
      'قد تُحمَّل Microsoft Clarity (clarity.ms) لفهم الزيارات المجمّعة وسهولة الاستخدام. قد يضع هذا الطرف الثالث ملفات تعريف وفق سياسته. لا نبيع البيانات الشخصية.',
    privacy_retention_title: 'الحسابات والاحتفاظ',
    privacy_retention_body:
      'لا نطلب تسجيلًا ولا نشغّل مخزنًا لمدخلات الأدوات. سجلات التشغيل على Cloudflare تتبع ممارسات تلك المنصة.',
    privacy_contact_title: 'أسئلة الخصوصية',
    privacy_contact_body: 'راسل {email} بأسئلة الخصوصية. نقرأ الرسائل عن هذا الموقع وأدواته.',
    terms_title: 'شروط الاستخدام',
    terms_description:
      'شروط استخدام OnlineFreeTools.org: الاستخدام المقبول، عدم الضمان، إخلاء المسؤولية التعليمي لأدوات الصحة/المال، وتغيير الشروط.',
    terms_intro:
      'باستخدامك OnlineFreeTools.org توافق على هذه الشروط. الموقع مشروع تعليمي مجاني بأدوات صغيرة، وليس خدمة استشارية مدفوعة.',
    terms_use_title: 'الاستخدام المقبول',
    terms_use_body:
      'استخدم الأدوات لأغراض قانونية. لا تُسِئ استخدام أدوات البروكسي لفحص شبكات خاصة أو إغراق مضيفين أو انتهاك القانون.',
    terms_warranty_title: 'عدم الضمان',
    terms_warranty_body:
      'الأدوات تُقدَّم «كما هي» دون ضمانات. قد توجد أخطاء أو حدود متصفح. تحقّق من النتائج قبل الاعتماد عليها.',
    terms_advice_title: 'ليست نصيحة مهنية',
    terms_advice_body:
      'حاسبات الصحة والمال (مثل مؤشر كتلة الجسم أو العائد على الاستثمار) للتعليم فقط وليست نصيحة طبية أو قانونية أو استثمارية.',
    terms_changes_title: 'التغييرات',
    terms_changes_body:
      'قد نحدّث هذه الشروط. استمرار الاستخدام بعد التغيير يعني قبولك للنسخة المحدّثة. النسخة الحالية دائمًا في هذه الصفحة.',
    contact_title: 'اتصل بنا',
    contact_description:
      'تواصل مع OnlineFreeTools.org بالبريد لملاحظات الأدوات أو الأخطاء أو أسئلة الموقع. العنوان العام وما يُتوقع عند الكتابة.',
    contact_intro: 'أسئلة عن أداة أو بلاغ خطأ أو ملاحظات عن الموقع—راسلنا. نحن مشروع صغير ونقرأ كل رسالة عن هذه الأدوات.',
    contact_email_title: 'البريد',
    contact_email_body:
      'عنوان الاتصال العام: {email}. استخدم تطبيق البريد أو نموذج الملاحظات في أي صفحة أداة (يفتح رسالة مملوءة مسبقًا).',
    contact_feedback_title: 'ملاحظات الأدوات',
    contact_feedback_body:
      'في كل أداة يتيح قسم الملاحظات صياغة الموضوع والنص مع اسم الأداة والرابط ثم فتح تطبيق البريد.',
    contact_response_title: 'وقت الرد',
    contact_response_body:
      'نرد قدر الإمكان ولسنا دعمًا على مدار الساعة. بلاغات الأمن لها أولوية. لا ترسل كلمات مرور أو بيانات شخصية غير ذات صلة.',
  },

  pt: {
    footer_privacy: 'Privacidade',
    footer_terms: 'Termos',
    footer_contact: 'Contacto',
    footer_github: 'GitHub',
    footer_nav_label: 'Ligações do site',
    privacy_title: 'Política de privacidade',
    privacy_description:
      'Como o OnlineFreeTools.org trata dados: a maioria das ferramentas corre no browser; as de edge processam pedidos curtos; analytics e contacto sobre privacidade.',
    privacy_intro:
      'Esta política explica o que fica no seu dispositivo, quando um pedido curto pode chegar ao nosso Worker Cloudflare e que scripts de analytics as páginas carregam.',
    privacy_local_title: 'Processamento local',
    privacy_local_body:
      'Muitas ferramentas processam colagens ou ficheiros só neste separador. Esses bytes não são enviados para os nossos servidores como funcionalidade do produto. A página pode carregar bibliotecas open source de um CDN.',
    privacy_edge_title: 'Quando um pedido sai do dispositivo',
    privacy_edge_body:
      'Algumas ferramentas precisam do Worker (cabeçalhos HTTP públicos, DNS, IP público visto na edge ou listas IndexNow). Enviamos só o necessário e não guardamos numa base de conteúdos.',
    privacy_workers_ai_title: 'Cloudflare Workers AI opcional (opt-in)',
    privacy_workers_ai_body:
      'No Prompt template builder, a montagem local fica no navegador por padrão. Se escolher Expandir ou Polir com IA, o texto enviado só para essa ação vai ao Cloudflare Workers AI — não às APIs OpenAI, Google, Anthropic ou DeepSeek nos nossos servidores. Depois cole o modelo no ChatGPT, Gemini, Claude ou DeepSeek. Exige Turnstile e tem limites de uso.',
    privacy_analytics_title: 'Analytics',
    privacy_analytics_body:
      'As páginas podem carregar Microsoft Clarity (clarity.ms) para tráfego agregado e usabilidade. Esse terceiro pode usar cookies segundo a sua política. Não vendemos dados pessoais.',
    privacy_retention_title: 'Contas e retenção',
    privacy_retention_body:
      'Não exigimos registo nem operamos um cofre de entradas das ferramentas. Registos operacionais na Cloudflare seguem as práticas dessa plataforma.',
    privacy_contact_title: 'Questões de privacidade',
    privacy_contact_body: 'Envie email para {email} com questões de privacidade. Lemos mensagens sobre este site e as ferramentas.',
    terms_title: 'Termos de utilização',
    terms_description:
      'Termos do OnlineFreeTools.org: utilização aceitável, sem garantia, avisos educativos de saúde/finanças e alterações.',
    terms_intro:
      'Ao usar o OnlineFreeTools.org aceita estes termos. É um projeto de aprendizagem gratuito com utilitários pequenos, não um serviço de consultoria pago.',
    terms_use_title: 'Utilização aceitável',
    terms_use_body:
      'Use as ferramentas para fins legais. Não abuse de proxies edge para varrer redes privadas, sobrecarregar hosts ou violar a lei.',
    terms_warranty_title: 'Sem garantia',
    terms_warranty_body:
      'As ferramentas são fornecidas «tal como estão», sem garantias. Pode haver erros ou limites do browser. Verifique os resultados antes de confiar neles.',
    terms_advice_title: 'Não é aconselhamento profissional',
    terms_advice_body:
      'Calculadoras de saúde e finanças (como IMC ou ROI) são só educativas. Não são aconselhamento médico, jurídico, fiscal ou de investimento.',
    terms_changes_title: 'Alterações',
    terms_changes_body:
      'Podemos atualizar estes termos. Continuar a usar após alterações implica aceitá-los. A versão atual está sempre nesta página.',
    contact_title: 'Contacto',
    contact_description:
      'Contacte o OnlineFreeTools.org por email para feedback de ferramentas, erros ou perguntas do site. Endereço público e expectativas de resposta.',
    contact_intro:
      'Dúvidas sobre uma ferramenta, um erro ou feedback do site—escreva-nos. Somos um projeto pequeno e lemos cada mensagem sobre estas ferramentas.',
    contact_email_title: 'Email',
    contact_email_body:
      'Endereço público: {email}. Use a app de email ou o formulário de feedback em qualquer ferramenta (abre uma mensagem pré-preenchida).',
    contact_feedback_title: 'Feedback das ferramentas',
    contact_feedback_body:
      'Em cada ferramenta, a secção de feedback permite redigir assunto e corpo com o nome e URL, e abrir a app de email.',
    contact_response_title: 'Tempo de resposta',
    contact_response_body:
      'Respondemos quando podemos; não é suporte 24/7. Priorizamos relatórios de segurança. Não envie palavras-passe nem dados pessoais irrelevantes.',
  },

  id: {
    footer_privacy: 'Privasi',
    footer_terms: 'Ketentuan',
    footer_contact: 'Kontak',
    footer_github: 'GitHub',
    footer_nav_label: 'Tautan situs',
    privacy_title: 'Kebijakan privasi',
    privacy_description:
      'Cara OnlineFreeTools.org menangani data: sebagian besar alat berjalan di browser; alat edge memproses permintaan singkat; analitik dan kontak privasi.',
    privacy_intro:
      'Kebijakan ini menjelaskan apa yang tetap di perangkat Anda, kapan permintaan singkat dapat ke Cloudflare Worker, dan skrip analitik yang dimuat halaman.',
    privacy_local_title: 'Pemrosesan lokal',
    privacy_local_body:
      'Banyak alat memproses tempelan atau berkas hanya di tab ini. Byte tersebut tidak diunggah ke server kami sebagai fitur produk. Halaman masih bisa memuat pustaka open source dari CDN.',
    privacy_edge_title: 'Saat permintaan meninggalkan perangkat',
    privacy_edge_body:
      'Beberapa alat membutuhkan Worker (header HTTP publik, DNS, IP publik dari edge, atau daftar IndexNow). Hanya data yang diperlukan dikirim; kami tidak menyimpannya di basis konten.',
    privacy_workers_ai_title: 'Cloudflare Workers AI opsional (opt-in)',
    privacy_workers_ai_body:
      'Di Prompt template builder, perakitan lokal tetap di browser secara default. Jika Anda memilih Perluas atau Polestir dengan AI, teks yang Anda kirim hanya untuk aksi itu dikirim ke Cloudflare Workers AI — bukan ke API OpenAI, Google, Anthropic, atau DeepSeek dari server kami. Tempel template ke ChatGPT, Gemini, Claude, atau DeepSeek setelahnya. Perlu Turnstile dan ada batas penggunaan.',
    privacy_analytics_title: 'Analitik',
    privacy_analytics_body:
      'Halaman dapat memuat Microsoft Clarity (clarity.ms) untuk lalu lintas agregat dan kegunaan. Pihak ketiga ini dapat memakai cookie sesuai kebijakannya. Kami tidak menjual data pribadi.',
    privacy_retention_title: 'Akun dan retensi',
    privacy_retention_body:
      'Kami tidak mewajibkan daftar akun dan tidak menyimpan brankas input alat. Log operasional di Cloudflare mengikuti praktik platform tersebut.',
    privacy_contact_title: 'Pertanyaan privasi',
    privacy_contact_body: 'Email {email} untuk pertanyaan privasi. Kami membaca pesan tentang situs dan alat ini.',
    terms_title: 'Ketentuan penggunaan',
    terms_description:
      'Ketentuan OnlineFreeTools.org: penggunaan yang dapat diterima, tanpa jaminan, penafian edukatif kesehatan/keuangan, dan perubahan ketentuan.',
    terms_intro:
      'Dengan menggunakan OnlineFreeTools.org Anda menyetujui ketentuan ini. Situs ini proyek pembelajaran gratis dengan utilitas kecil, bukan layanan konsultasi berbayar.',
    terms_use_title: 'Penggunaan yang dapat diterima',
    terms_use_body:
      'Gunakan alat untuk tujuan yang sah. Jangan menyalahgunakan proxy edge untuk memindai jaringan privat, membanjiri host lain, atau melanggar hukum.',
    terms_warranty_title: 'Tanpa jaminan',
    terms_warranty_body:
      'Alat disediakan “sebagaimana adanya” tanpa jaminan. Hasil bisa salah atau terbatas oleh browser. Verifikasi sebelum mengandalkannya.',
    terms_advice_title: 'Bukan nasihat profesional',
    terms_advice_body:
      'Kalkulator kesehatan dan keuangan (mis. BMI atau ROI) hanya untuk edukasi, bukan nasihat medis, hukum, pajak, atau investasi.',
    terms_changes_title: 'Perubahan',
    terms_changes_body:
      'Kami dapat memperbarui ketentuan ini. Melanjutkan penggunaan setelah perubahan berarti Anda menerima versi terbaru. Versi saat ini selalu di halaman ini.',
    contact_title: 'Kontak',
    contact_description:
      'Hubungi OnlineFreeTools.org lewat email untuk umpan balik alat, laporan bug, atau pertanyaan situs. Alamat publik dan ekspektasi balasan.',
    contact_intro:
      'Pertanyaan tentang alat, laporan bug, atau umpan balik situs—tulis kepada kami. Kami proyek kecil dan membaca setiap pesan tentang alat ini.',
    contact_email_title: 'Email',
    contact_email_body:
      'Alamat kontak publik: {email}. Gunakan aplikasi email atau formulir umpan balik di halaman alat mana pun (membuka pesan terisi).',
    contact_feedback_title: 'Umpan balik alat',
    contact_feedback_body:
      'Di setiap alat, bagian umpan balik memungkinkan menyusun subjek dan isi dengan nama alat serta URL, lalu membuka aplikasi email.',
    contact_response_title: 'Waktu respons',
    contact_response_body:
      'Kami membalas sebisanya; ini bukan dukungan 24/7. Laporan keamanan diprioritaskan. Jangan kirim kata sandi atau data pribadi yang tidak relevan.',
  },

  fr: {
    footer_privacy: 'Confidentialité',
    footer_terms: 'Conditions',
    footer_contact: 'Contact',
    footer_github: 'GitHub',
    footer_nav_label: 'Liens du site',
    privacy_title: 'Politique de confidentialité',
    privacy_description:
      'Comment OnlineFreeTools.org traite les données : la plupart des outils s’exécutent dans le navigateur ; les outils edge traitent de courtes requêtes ; analytique et contact confidentialité.',
    privacy_intro:
      'Cette politique explique ce qui reste sur votre appareil, quand une courte requête peut atteindre notre Worker Cloudflare, et quels scripts d’analytique les pages chargent.',
    privacy_local_title: 'Traitement local',
    privacy_local_body:
      'Beaucoup d’outils traitent collages ou fichiers uniquement dans cet onglet. Ces octets ne sont pas envoyés à nos serveurs comme fonctionnalité produit. La page peut charger des bibliothèques open source depuis un CDN.',
    privacy_edge_title: 'Quand une requête quitte l’appareil',
    privacy_edge_body:
      'Certains outils ont besoin du Worker (en-têtes HTTP publics, DNS, IP publique vue depuis l’edge ou listes IndexNow). Seul le nécessaire est envoyé ; nous ne les stockons pas dans une base de contenus.',
    privacy_workers_ai_title: 'Cloudflare Workers AI optionnel (opt-in)',
    privacy_workers_ai_body:
      'Sur Prompt template builder, l’assemblage local reste dans votre navigateur par défaut. Si vous choisissez Développer ou Peaufiner avec l’IA, le texte envoyé pour cette action part vers Cloudflare Workers AI — pas vers les API OpenAI, Google, Anthropic ou DeepSeek depuis nos serveurs. Collez ensuite le modèle dans ChatGPT, Gemini, Claude ou DeepSeek. Turnstile requis ; usage limité.',
    privacy_analytics_title: 'Analytique',
    privacy_analytics_body:
      'Les pages peuvent charger Microsoft Clarity (clarity.ms) pour le trafic agrégé et l’utilisabilité. Ce tiers peut utiliser des cookies selon sa politique. Nous ne vendons pas de données personnelles.',
    privacy_retention_title: 'Comptes et conservation',
    privacy_retention_body:
      'Pas d’inscription requise, pas de coffre d’entrées d’outils. Les journaux opérationnels sur Cloudflare suivent les pratiques de cette plateforme.',
    privacy_contact_title: 'Questions de confidentialité',
    privacy_contact_body: 'Écrivez à {email} pour les questions de confidentialité. Nous lisons les messages concernant ce site et ses outils.',
    terms_title: 'Conditions d’utilisation',
    terms_description:
      'Conditions d’OnlineFreeTools.org : usage acceptable, absence de garantie, avertissements éducatifs santé/finance et modifications.',
    terms_intro:
      'En utilisant OnlineFreeTools.org vous acceptez ces conditions. Le site est un projet d’apprentissage gratuit avec de petits outils, pas un service de conseil payant.',
    terms_use_title: 'Usage acceptable',
    terms_use_body:
      'Utilisez les outils à des fins licites. N’abusez pas des proxies edge pour scanner des réseaux privés, saturer des hôtes tiers ou violer la loi.',
    terms_warranty_title: 'Absence de garantie',
    terms_warranty_body:
      'Les outils sont fournis « tels quels », sans garantie. Des erreurs ou limites du navigateur sont possibles. Vérifiez les résultats avant de vous y fier.',
    terms_advice_title: 'Pas un conseil professionnel',
    terms_advice_body:
      'Les calculateurs santé et finance (IMC, ROI, etc.) sont uniquement éducatifs. Ce ne sont pas des conseils médicaux, juridiques, fiscaux ou d’investissement.',
    terms_changes_title: 'Modifications',
    terms_changes_body:
      'Nous pouvons mettre à jour ces conditions. Continuer à utiliser le site après modification vaut acceptation. La version actuelle est toujours sur cette page.',
    contact_title: 'Contact',
    contact_description:
      'Contactez OnlineFreeTools.org par e-mail pour retours sur les outils, bugs ou questions sur le site. Adresse publique et délais de réponse.',
    contact_intro:
      'Questions sur un outil, signalement de bug ou retour sur le site—écrivez-nous. Petit projet d’apprentissage, nous lisons chaque message sur ces outils.',
    contact_email_title: 'E-mail',
    contact_email_body:
      'Adresse publique : {email}. Utilisez votre appli mail ou le formulaire de retour sur chaque outil (ouvre un message prérempli).',
    contact_feedback_title: 'Retours sur les outils',
    contact_feedback_body:
      'Sur chaque outil, la section retour permet de rédiger objet et corps avec le nom et l’URL, puis d’ouvrir votre appli mail.',
    contact_response_title: 'Délai de réponse',
    contact_response_body:
      'Nous répondons dans la mesure du possible ; ce n’est pas un support 24/7. Les signalements de sécurité sont prioritaires. N’envoyez pas de mots de passe ni de données personnelles hors sujet.',
  },

  ja: {
    footer_privacy: 'プライバシー',
    footer_terms: '利用規約',
    footer_contact: 'お問い合わせ',
    footer_github: 'GitHub',
    footer_nav_label: 'サイトリンク',
    privacy_title: 'プライバシーポリシー',
    privacy_description:
      'OnlineFreeTools.org のデータ取り扱い：多くのツールはブラウザ内で処理、エッジツールは短いリクエストのみ、分析とプライバシーに関する連絡先。',
    privacy_intro:
      '本ポリシーでは、端末内に留まるもの、Cloudflare Worker へ短いリクエストが届く場合、ページが読み込む分析スクリプトについて説明します。',
    privacy_local_title: 'ローカル処理',
    privacy_local_body:
      '多くのツール（テキスト変換、画像編集、大半の計算機）は、このタブ内だけで貼り付けやファイルを処理します。製品機能としてサーバーへアップロードしません。CDN からオープンソースライブラリを読み込む場合、そのリクエストはライブラリコードであり、あなたの内容ではありません。',
    privacy_edge_title: '端末外へのリクエスト',
    privacy_edge_body:
      '一部ツールは Worker が必要です（公開 HTTP ヘッダー、DNS、エッジから見た公開 IP、IndexNow の URL 一覧など）。必要なデータだけを送り、コンテンツ DB としては保持しません。該当ページに明記します。',
    privacy_workers_ai_title: '任意の Cloudflare Workers AI（オプトイン）',
    privacy_workers_ai_body:
      'Prompt template builder では既定でブラウザ内組み立てです。「AI で展開」「AI で推敲」を選んだ場合のみ、その送信テキストが Cloudflare Workers AI に送られます（当サーバーから OpenAI / Google / Anthropic / DeepSeek API は呼びません）。完成テンプレは ChatGPT、Gemini、Claude、DeepSeek 等へ貼り付けます。Turnstile と利用上限があります。',
    privacy_analytics_title: 'アクセス解析',
    privacy_analytics_body:
      '集計トラフィックと使いやすさの把握のため、Microsoft Clarity（clarity.ms）を読み込む場合があります。当該第三者は自社ポリシーに基づき Cookie 等を使うことがあります。個人データを販売しません。',
    privacy_retention_title: 'アカウントと保持',
    privacy_retention_body:
      '登録は不要で、ツール入力の保管庫もありません。Cloudflare 上の運用ログはそのプラットフォームの慣行に従います。',
    privacy_contact_title: 'プライバシーに関する問い合わせ',
    privacy_contact_body: 'プライバシーに関する質問は {email} まで。本サイトとツールに関するメールを読みます。',
    terms_title: '利用規約',
    terms_description:
      'OnlineFreeTools.org の利用規約：許容される利用、無保証、健康・金融ツールの教育目的免責、規約の変更。',
    terms_intro:
      'OnlineFreeTools.org を利用することで本規約に同意したものとみなします。本サイトは無料の学習プロジェクトで、有料の相談サービスではありません。',
    terms_use_title: '許容される利用',
    terms_use_body:
      '合法な目的でツールを使ってください。エッジプロキシを私有ネットワークの探索や第三者への過負荷、法令違反に使わないでください。',
    terms_warranty_title: '無保証',
    terms_warranty_body:
      'ツールは現状有姿で提供され、いかなる保証もありません。誤りやブラウザ制限があり得ます。結果を頼る前に必ず確認してください。',
    terms_advice_title: '専門的助言ではないこと',
    terms_advice_body:
      '健康・金融の計算機（BMI や ROI など）は教育目的のみであり、医療・法律・税務・投資の助言ではありません。',
    terms_changes_title: '変更',
    terms_changes_body:
      'プロジェクトの進展に伴い本規約を更新することがあります。変更後の継続利用は更新後の規約への同意とみなします。現行版は常に本ページに掲載します。',
    contact_title: 'お問い合わせ',
    contact_description:
      'OnlineFreeTools.org へのメール連絡：ツールへのフィードバック、不具合報告、サイトに関する質問。公開アドレスと返信の目安。',
    contact_intro:
      'ツールの質問、不具合報告、サイトへのフィードバックはメールでどうぞ。小さな学習プロジェクトですが、ツールに関するメールはすべて読みます。',
    contact_email_title: 'メール',
    contact_email_body:
      '公開連絡先：{email}。メールアプリから送るか、各ツールページのフィードバック欄（件名と本文が事前入力されます）を使ってください。',
    contact_feedback_title: 'ツールへのフィードバック',
    contact_feedback_body:
      '各ツールのフィードバック欄で件名と本文を作成し（ツール名と URL 入り）、メールアプリを開けます。ツール固有の問題はこちらがおすすめです。',
    contact_response_title: '返信の目安',
    contact_response_body:
      '可能な範囲で返信しますが、24 時間体制のサポートではありません。セキュリティ報告を優先します。パスワードや無関係な個人情報は送らないでください。',
  },

  ru: {
    footer_privacy: 'Конфиденциальность',
    footer_terms: 'Условия',
    footer_contact: 'Контакты',
    footer_github: 'GitHub',
    footer_nav_label: 'Ссылки сайта',
    privacy_title: 'Политика конфиденциальности',
    privacy_description:
      'Как OnlineFreeTools.org обрабатывает данные: большинство инструментов работают в браузере; edge-инструменты обрабатывают короткие запросы; аналитика и контакты по вопросам конфиденциальности.',
    privacy_intro:
      'В этой политике описано, что остаётся на вашем устройстве, когда короткий запрос может попасть к Cloudflare Worker и какие скрипты аналитики загружают страницы.',
    privacy_local_title: 'Локальная обработка',
    privacy_local_body:
      'Многие инструменты обрабатывают вставку или файлы только во вкладке. Эти байты не загружаются на наши серверы как функция продукта. Страница может подгружать библиотеки с CDN — это код библиотеки, не ваш контент.',
    privacy_edge_title: 'Когда запрос уходит с устройства',
    privacy_edge_body:
      'Некоторым инструментам нужен Worker (публичные HTTP-заголовки, DNS, публичный IP с края сети или списки IndexNow). Передаётся только необходимое; мы не храним это в контентной базе.',
    privacy_workers_ai_title: 'Необязательный Cloudflare Workers AI (opt-in)',
    privacy_workers_ai_body:
      'В Prompt template builder сборка по умолчанию локально в браузере. При «Расширить с ИИ» или «Отполировать с ИИ» текст этой операции отправляется в Cloudflare Workers AI — не в API OpenAI, Google, Anthropic или DeepSeek с наших серверов. Готовый шаблон вставляете в ChatGPT, Gemini, Claude или DeepSeek. Нужен Turnstile; действуют лимиты.',
    privacy_analytics_title: 'Аналитика',
    privacy_analytics_body:
      'Страницы могут загружать Microsoft Clarity (clarity.ms) для агрегированного трафика и удобства. Этот сторонний сервис может ставить cookie по своей политике. Мы не продаём персональные данные.',
    privacy_retention_title: 'Аккаунты и хранение',
    privacy_retention_body:
      'Регистрация не требуется; хранилища вводов инструментов нет. Операционные журналы на Cloudflare следуют практике этой платформы.',
    privacy_contact_title: 'Вопросы о конфиденциальности',
    privacy_contact_body: 'Пишите на {email} по вопросам конфиденциальности. Мы читаем сообщения об этом сайте и инструментах.',
    terms_title: 'Условия использования',
    terms_description:
      'Условия OnlineFreeTools.org: допустимое использование, отсутствие гарантий, образовательные оговорки для здоровья/финансов и изменения условий.',
    terms_intro:
      'Используя OnlineFreeTools.org, вы соглашаетесь с этими условиями. Это бесплатный учебный проект с небольшими утилитами, а не платная консультация.',
    terms_use_title: 'Допустимое использование',
    terms_use_body:
      'Используйте инструменты законно. Не злоупотребляйте edge-прокси для сканирования частных сетей, перегрузки чужих хостов или нарушения закона.',
    terms_warranty_title: 'Без гарантий',
    terms_warranty_body:
      'Инструменты предоставляются «как есть», без гарантий. Возможны ошибки и ограничения браузера. Проверяйте результаты перед тем, как на них полагаться.',
    terms_advice_title: 'Не профессиональный совет',
    terms_advice_body:
      'Калькуляторы здоровья и финансов (например ИМТ или ROI) только для обучения. Это не медицинский, юридический, налоговый или инвестиционный совет.',
    terms_changes_title: 'Изменения',
    terms_changes_body:
      'Мы можем обновлять эти условия. Продолжение использования после изменений означает согласие. Актуальная версия всегда на этой странице.',
    contact_title: 'Контакты',
    contact_description:
      'Свяжитесь с OnlineFreeTools.org по email для отзывов об инструментах, ошибок или вопросов о сайте. Публичный адрес и ожидания по ответу.',
    contact_intro:
      'Вопросы по инструменту, сообщение об ошибке или отзыв о сайте — напишите нам. Мы небольшой учебный проект и читаем каждое сообщение об этих инструментах.',
    contact_email_title: 'Email',
    contact_email_body:
      'Публичный адрес: {email}. Используйте почтовое приложение или форму обратной связи на любой странице инструмента (откроется предзаполненное письмо).',
    contact_feedback_title: 'Отзывы об инструментах',
    contact_feedback_body:
      'На каждой странице инструмента блок обратной связи позволяет составить тему и текст с именем инструмента и URL, затем открыть почтовое приложение.',
    contact_response_title: 'Срок ответа',
    contact_response_body:
      'Мы отвечаем по возможности; это не круглосуточная поддержка. Сообщения о безопасности в приоритете. Не присылайте пароли и посторонние личные данные.',
  },

  de: {
    footer_privacy: 'Datenschutz',
    footer_terms: 'Nutzungsbedingungen',
    footer_contact: 'Kontakt',
    footer_github: 'GitHub',
    footer_nav_label: 'Seitenlinks',
    privacy_title: 'Datenschutzerklärung',
    privacy_description:
      'Wie OnlineFreeTools.org mit Daten umgeht: die meisten Tools laufen im Browser; Edge-Tools verarbeiten kurze Anfragen; Analytics und Kontakt zum Datenschutz.',
    privacy_intro:
      'Diese Erklärung beschreibt, was auf Ihrem Gerät bleibt, wann eine kurze Anfrage unseren Cloudflare Worker erreichen kann und welche Analytics-Skripte Seiten laden.',
    privacy_local_title: 'Lokale Verarbeitung',
    privacy_local_body:
      'Viele Tools verarbeiten Einfügungen oder Dateien nur in diesem Tab. Diese Bytes werden nicht als Produktfunktion auf unsere Server hochgeladen. Die Seite kann Open-Source-Bibliotheken von einem CDN laden — das ist Bibliothekscode, nicht Ihr Inhalt.',
    privacy_edge_title: 'Wenn eine Anfrage das Gerät verlässt',
    privacy_edge_body:
      'Einige Tools brauchen den Worker (öffentliche HTTP-Header, DNS, öffentliche IP aus Edge-Sicht oder IndexNow-URL-Listen). Es wird nur das Nötige gesendet; wir speichern es nicht in einer Inhaltsdatenbank.',
    privacy_workers_ai_title: 'Optionales Cloudflare Workers AI (Opt-in)',
    privacy_workers_ai_body:
      'Beim Prompt template builder bleibt die lokale Montage standardmäßig im Browser. Bei „Mit KI erweitern“ oder „Mit KI polieren“ wird nur der für diese Aktion gesendete Text an Cloudflare Workers AI übermittelt — nicht an OpenAI-, Google-, Anthropic- oder DeepSeek-APIs von unseren Servern. Die fertige Vorlage fügen Sie in ChatGPT, Gemini, Claude oder DeepSeek ein. Turnstile erforderlich; Nutzungslimits gelten.',
    privacy_analytics_title: 'Analytics',
    privacy_analytics_body:
      'Seiten können Microsoft Clarity (clarity.ms) für aggregierten Traffic und Nutzbarkeit laden. Dieser Drittanbieter kann Cookies nach seinen Richtlinien setzen. Wir verkaufen keine personenbezogenen Daten.',
    privacy_retention_title: 'Konten und Aufbewahrung',
    privacy_retention_body:
      'Keine Registrierung nötig; kein Tresor für Tool-Eingaben. Betriebslogs auf Cloudflare folgen den Praktiken dieser Plattform.',
    privacy_contact_title: 'Datenschutzfragen',
    privacy_contact_body: 'Schreiben Sie an {email} bei Datenschutzfragen. Wir lesen Nachrichten zu dieser Website und ihren Tools.',
    terms_title: 'Nutzungsbedingungen',
    terms_description:
      'Bedingungen für OnlineFreeTools.org: zulässige Nutzung, keine Gewährleistung, Bildungs-Hinweise zu Gesundheit/Finanzen und Änderungen.',
    terms_intro:
      'Mit der Nutzung von OnlineFreeTools.org akzeptieren Sie diese Bedingungen. Die Website ist ein kostenloses Lernprojekt mit kleinen Utilities — kein bezahlter Beratungsdienst.',
    terms_use_title: 'Zulässige Nutzung',
    terms_use_body:
      'Nutzen Sie die Tools rechtmäßig. Missbrauchen Sie Edge-Proxys nicht zum Scannen privater Netze, Überlasten fremder Hosts oder Gesetzesverstößen.',
    terms_warranty_title: 'Keine Gewährleistung',
    terms_warranty_body:
      'Tools werden „wie besehen“ ohne Gewährleistung bereitgestellt. Ergebnisse können Fehler oder Browsergrenzen enthalten. Prüfen Sie Ausgaben, bevor Sie sich darauf verlassen.',
    terms_advice_title: 'Kein fachlicher Rat',
    terms_advice_body:
      'Gesundheits- und Finanzrechner (z. B. BMI oder ROI) dienen nur der Bildung. Sie sind keine medizinische, rechtliche, steuerliche oder Anlageberatung.',
    terms_changes_title: 'Änderungen',
    terms_changes_body:
      'Wir können diese Bedingungen aktualisieren. Fortgesetzte Nutzung nach Änderungen bedeutet Zustimmung. Die aktuelle Fassung steht immer auf dieser Seite.',
    contact_title: 'Kontakt',
    contact_description:
      'Kontaktieren Sie OnlineFreeTools.org per E-Mail für Tool-Feedback, Fehlerberichte oder Seitenfragen. Öffentliche Adresse und Antworterwartungen.',
    contact_intro:
      'Fragen zu einem Tool, ein Fehlerbericht oder Feedback zur Website — schreiben Sie uns. Wir sind ein kleines Lernprojekt und lesen jede Nachricht zu diesen Tools.',
    contact_email_title: 'E-Mail',
    contact_email_body:
      'Öffentliche Kontaktadresse: {email}. Nutzen Sie Ihre Mail-App oder das Feedback-Formular auf jeder Tool-Seite (öffnet eine vorausgefüllte Nachricht).',
    contact_feedback_title: 'Tool-Feedback',
    contact_feedback_body:
      'Auf jeder Tool-Seite können Sie im Feedback-Bereich Betreff und Text mit Toolname und URL entwerfen und die Mail-App öffnen.',
    contact_response_title: 'Antwortzeit',
    contact_response_body:
      'Wir antworten, wenn wir können; das ist kein 24/7-Support. Sicherheitsmeldungen haben Vorrang. Senden Sie keine Passwörter oder irrelevante personenbezogene Daten.',
  },
};
