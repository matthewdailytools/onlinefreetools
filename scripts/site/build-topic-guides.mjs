/**
 * 生成 scripts/site/i18n-topics-guides.mjs：各 topic leaf 的 guide + FAQ4 增量文案。
 * 运行：node scripts/site/build-topic-guides.mjs
 */
import { writeFileSync } from 'node:fs';
import { TOOL_TOPIC_ORDER, topicKeyFragment } from './topics.mjs';

/** @type {Record<string, {guideTitle:string, guideBody:string, faqQ4:string, faqA4:string}>} */
const EN = {
  'health-body': {
    guideTitle: 'Which tool matches your health question',
    guideBody:
      'Screening size/weight ratios: open the BMI calculator for population-style screening, or ideal weight when you want a target band from height and frame.\n\n' +
      'Energy and nutrition planning: BMR/TDEE estimates resting and total daily burn; macros splits protein, carbs, and fat once you have a calorie target.\n\n' +
      'Training zones and load: heart-rate zones for cardio targets; pace when you know a recent race or run distance; one-rep max when programming barbell loads from a submaximal lift.\n\n' +
      'Body composition: body fat uses skinfold or Navy-style inputs—skip it if you lack the measurements the page asks for.',
    faqQ4: 'Can I chain BMI → TDEE → macros in one session?',
    faqA4:
      'Yes, as a planning sketch. Use BMI or ideal weight for context, TDEE for a daily calorie budget, then macros to split that budget. Re-run when weight or training volume changes; do not treat the chain as a medical prescription.',
  },
  'personal-money': {
    guideTitle: 'Everyday money tools by checkout moment',
    guideBody:
      'At the register: tip calculator for service bills; discount for sale prices; VAT when tax is excluded from the shelf price.\n\n' +
      'Pay and work: salary↔hourly when comparing job offers or freelance rates.\n\n' +
      'Borrowing: EMI for a fixed installment loan sketch; debt payoff when you want avalanche/snowball order with extra payments.\n\n' +
      'Growth and purchasing power: compound interest and Rule of 72 for doubling intuition; present value and CAGR for investment framing; inflation for real purchasing power; percent change when you already have old and new dollar amounts.',
    faqQ4: 'Which tool for a store receipt vs a mortgage?',
    faqA4:
      'Receipts and checkout math usually start with tip, discount, or VAT. Mortgages and car loans belong on EMI or debt payoff with rate, term, and fee details from the lender—not tip or VAT helpers.',
  },
  'business-finance': {
    guideTitle: 'Deal math workflow on this site',
    guideBody:
      'Unit economics first: markup vs margin tools (they use different denominators); gross, profit, and contribution margin for layered P&L views; marginal revenue when price or volume moves.\n\n' +
      'Capacity: break-even when you need units or revenue to cover fixed plus variable costs.\n\n' +
      'Capital allocation: ROI for campaign or project return; NPV and IRR when cash flows span time (keep discount rate explicit); payback period when leadership asks “how fast cash returns” without discounting nuance.\n\n' +
      'Cross-topic listings: discount, VAT, compound interest, or present value may appear here secondarily when pricing policy overlaps shopper tools.',
    faqQ4: 'Why are margin and markup separate pages?',
    faqA4:
      'They answer different denominators. Markup is uplift over cost; margin is profit over selling price. Mixing them in one headline often causes 50%-markup-is-not-50%-margin errors in pricing meetings.',
  },
  'math-stats': {
    guideTitle: 'Pick the statistic or algebra helper you need',
    guideBody:
      'Typical value and spread: mean and median for center; standard deviation for dispersion; z-score when you compare one value to a distribution.\n\n' +
      'Inference helpers: p-value and confidence interval when you already chose a test; sample size when planning a survey or A/B test power.\n\n' +
      'Counting and school algebra: permutation/combination for arrangements; quadratic equation, exponent, and logarithm for symbolic steps; GPA when transcript policy matters.\n\n' +
      'Lab notation: scientific notation and significant figures for measurement reporting—physics motion tools live under science-physics.',
    faqQ4: 'Should I start with mean or median for my dataset?',
    faqA4:
      'If outliers or skew dominate (income, latency, ratings), lead with median and show mean second. If the distribution is symmetric and every value matters to the formula, mean is fine—state which you used.',
  },
  'geometry-measure': {
    guideTitle: 'Shapes, slope, ratio, and units',
    guideBody:
      'Named shapes: triangle area, circle, volume, and Pythagorean theorem when you can label sides or radius.\n\n' +
      'Grade and screen math: slope and gradient for ramps, roads, or roof pitch; aspect ratio for crops and layout boxes.\n\n' +
      'Generic conversion: unit converter for length, mass, temperature, and more—DIY material estimators (paint, tile, concrete, square feet) live under home-diy when the job is buying supplies.',
    faqQ4: 'Volume here vs concrete estimator in home-diy?',
    faqA4:
      'Volume here is the geometric formula (L×W×H or similar). Concrete estimator turns that volume into bags and waste for a pour. Use geometry first, then DIY when you are ordering mix.',
  },
  'science-physics': {
    guideTitle: 'Physics quantities by chapter',
    guideBody:
      'Kinematics: velocity and acceleration when you know displacement, time, or rate of change.\n\n' +
      'Electricity: Ohm’s law for V–I–R relationships in learning problems—not for sizing household wiring alone.\n\n' +
      'Materials: density from mass and volume.\n\n' +
      'Fields: magnetic-field helper for sensor-style readings—calibrate against a known reference before safety decisions.\n\n' +
      'Notation cross-links: scientific notation and significant figures are primary under math-stats with secondary physics listings.',
    faqQ4: 'When should I switch to math-stats notation tools?',
    faqA4:
      'When the task is formatting or rounding a measurement—not solving a physics identity. Use physics pages when the unknown is a physical quantity (force, velocity, resistance).',
  },
  'home-diy': {
    guideTitle: 'Room and material estimators',
    guideBody:
      'Area baseline: square feet when plans mix feet and inches or you need room area before material math.\n\n' +
      'Surface coverage: paint for walls/ceilings with coats; tile for floor/wall area plus waste; concrete for form volume and bag counts.\n\n' +
      'Overlap with geometry: volume or unit converter may list here secondarily when a job needs both shape math and material purchase planning.',
    faqQ4: 'Do I measure inside or outside dimensions for tile?',
    faqA4:
      'Measure the finished surface you will cover (clearance for trim and fixtures). Add pattern waste after net area—diagonal layouts need more cut waste than straight runs.',
  },
  'time-calendar': {
    guideTitle: 'Age, spans, zones, and epoch time',
    guideBody:
      'Human dates: age for birthday-based years; date difference for project or booking spans—say whether you need calendar days or exact 24-hour counts.\n\n' +
      'Meetings across regions: timezone converter with an IANA zone ID, not only a city nickname.\n\n' +
      'Engineering logs: Unix timestamp for seconds vs milliseconds in APIs and log lines.\n\n' +
      'Cross-topic: pace under health-body uses time over distance; timezone and Unix also list under dev-data when the job is debugging code.',
    faqQ4: 'Why did my age change a day before my birthday?',
    faqA4:
      'Age counts completed years in a timezone. UTC vs local midnight can shift the boundary—pick the zone that matches the legal or personal context you care about.',
  },
  'pdf-docs': {
    guideTitle: 'PDF jobs in a sensible order',
    guideBody:
      'Structure first: merge, split, organize, rotate, and page numbers when the page order or orientation is wrong.\n\n' +
      'Size and framing: compress when email or upload limits bite; crop when margins or bleed need trimming.\n\n' +
      'Access control: protect to add a password you control; unlock only for files you legitimately own.\n\n' +
      'Export and handoff: PDF to Markdown for docs/git pipelines; PDF to JPG or page-to-image sizes for raster specs; watermark for draft marking.\n\n' +
      'Image-first batch jobs (images to PDF/PPT/Word) primary-live under image-media with secondary listings here.',
    faqQ4: 'Merge before or after compress?',
    faqA4:
      'Usually merge to the final page order first, then compress once on the combined file so you preview pagination at full quality. Keep an uncompressed backup until recipients confirm.',
  },
  'image-media': {
    guideTitle: 'Image workflows grouped by delivery job',
    guideBody:
      'Platform size specs: YouTube thumbnail, Instagram post/story, LinkedIn banner, Open Graph, Amazon main image, App Store icons and screenshots—use when you need pixel dimensions and safe zones, not arbitrary cropping.\n\n' +
      'Transform and weight: compress and optimizer for bytes-on-the-wire; crop, flip, border, grayscale, and format converter for visual changes; SVG optimizer for vector weight.\n\n' +
      'Compose and animate: merge, overlay, images-to-GIF, add watermark for attribution.\n\n' +
      'Metadata and privacy: EXIF viewer/stripper before public sharing; color-from-image when exploring palettes (brand tokens finalize under design-brand).\n\n' +
      'Document export: images to PDF/PPT/Word when the deliverable is an office package—PDF-centric edits stay under pdf-docs.',
    faqQ4: 'Compress, optimizer, or format converter first?',
    faqA4:
      'Convert format first if the target channel requires JPEG/PNG/WebP. Then compress/optimizer for byte budget. Crop before compress when framing changes remove large unused areas.',
  },
  'design-brand': {
    guideTitle: 'Color systems from check to handoff',
    guideBody:
      'Accessibility gate: WCAG contrast checker for text/UI pairs against AA or AAA thresholds.\n\n' +
      'Palette direction: smart website color scheme when you need a coherent light/dark set from a seed brand color.\n\n' +
      'Token export: brand color token pack for CSS variables or design tokens; brand style guide when you need documented roles (surface, accent, text).\n\n' +
      'Upstream inspiration: extract colors from photos under image-media, then lock accessible tokens here.',
    faqQ4: 'Contrast passed—am I done with accessibility?',
    faqA4:
      'No. Contrast is necessary but not sufficient—font size, weight, focus states, and non-color cues still matter. Run user tests for critical flows; contrast tools catch luminance failures, not every cognitive barrier.',
  },
  'seo-growth': {
    guideTitle: 'SEO workflow stages on this site',
    guideBody:
      'Snippet craft: meta tag generator and SERP preview for titles/descriptions; Open Graph preview for social cards.\n\n' +
      'Technical surface: robots.txt and sitemap XML generators; hreflang generator for locale clusters; schema JSON-LD when visible copy already supports the type.\n\n' +
      'Crawl and quality signals: IndexNow after meaningful publishes; on-page SEO checker for a quick visible audit; Core Web Vitals checker when LCP/INP/CLS need a lab snapshot.\n\n' +
      'Campaigns and unblockers: UTM builder for tagged links; website headers or add-www-to-dns under network-ip when crawl issues are really DNS/TLS/header paths.',
    faqQ4: 'What order after publishing a new tool page?',
    faqA4:
      'Confirm indexable copy and canonical/hreflang, update sitemap, optionally ping IndexNow, then spot-check SERP/OG previews. Rankings are not guaranteed—treat tools as decision support, not rank manipulation.',
  },
  'network-ip': {
    guideTitle: 'Network layers: IP, DNS, HTTP, CIDR',
    guideBody:
      'Egress identity: public IP tool shows what our edge sees—useful behind VPN or carrier NAT.\n\n' +
      'Name resolution: domain lookup for records; add-www-to-dns when apex/www routing is the question.\n\n' +
      'HTTP behavior: website headers for cache, security, and redirect clues on URLs you may test.\n\n' +
      'Addressing plans: CIDR cheat sheet and private ranges for quick reference; CIDR↔range converters; IPv6 CIDR; Terraform cidrsubnet and AWS VPC planner when designing cloud prefixes.\n\n' +
      'Use only on systems you are authorized to test.',
    faqQ4: 'CIDR calculator vs Terraform cidrsubnet—which first?',
    faqA4:
      'Start with CIDR↔range or cheat sheet to sanity-check prefix size and host counts. Open Terraform cidrsubnet when you already know parent prefix and need nested index math for modules.',
  },
  'dev-data': {
    guideTitle: 'Developer transforms by payload type',
    guideBody:
      'Transport encoding: Base64 and HTML entity encode/decode for safe text channels.\n\n' +
      'Structured data: YAML↔JSON and CSV↔JSON for config and tabular bridges; JSON Schema validator for shape checks—not business rules.\n\n' +
      'Debug tokens and HTTP: JWT decoder for claim inspection on samples you may view; curl-to-fetch when rewriting shell examples for fetch().\n\n' +
      'Docs pipelines: Markdown↔HTML and ChatGPT export to Markdown for content repos.\n\n' +
      'Compare and time tools (text diff, JSON diff, file compare, Excel compare, timezone, Unix) primary-live under text-compare or time-calendar with secondary dev-data listings.',
    faqQ4: 'Validate JSON Schema before or after diffing two JSON files?',
    faqA4:
      'Validate each document against the schema first if you care about contract shape. Then diff to see semantic changes. Diff alone will not tell you which side violated the schema.',
  },
  'ai-prompt-template-builder': {
    guideTitle: 'Prompt builders by artifact you need',
    guideBody:
      'Reusable templates: Prompt template builder for Role/Task/Constraints/Output with scene chips (writing, web, copilot, mobile).\n\n' +
      'Writing fiction: Writing prompt generator for dialogue, character, script, or random starters.\n\n' +
      'Visual prompts: Midjourney prompt builder for image parameters; Sketch prompt generator for line-art and composition controls.\n\n' +
      'Long-form video: Film prompt builder for logline and three-act beats; Short drama prompt generator for vertical serial hooks.\n\n' +
      'Product and mobile agents: Product design prompt builder for UX briefs; Android and iOS prompt builders for Kotlin/Compose or Swift/SwiftUI agent specs.\n\n' +
      'Local Build/Roll stays on-device; Expand/Polish sends only that click’s text to Cloudflare Workers AI after Turnstile.',
    faqQ4: 'Do I need a separate page for ChatGPT vs Gemini?',
    faqA4:
      'No separate URL per model—that would be the same form with a swapped title. Paste the assembled prompt into ChatGPT, Gemini, Claude, or DeepSeek yourself; pages name platforms in copy, not in slug.',
  },
  'text-compare': {
    guideTitle: 'Compare tools matched to your inputs',
    guideBody:
      'Pasted plain text: Check difference between two texts (text-diff) for strings already in the clipboard.\n\n' +
      'Two text files: Compare two text files online for .txt/.md uploads with line-oriented diff.\n\n' +
      'Word documents: Compare two Word documents for differences extracts readable .docx prose— not desktop Track Changes merge.\n\n' +
      'JSON APIs: JSON diff checker online for path-level adds/changes/deletes with key-order ignored by default.\n\n' +
      'Spreadsheets: Excel compare files for cell-by-cell diffs on xlsx/csv—pick the page that matches the object you already have.',
    faqQ4: 'Can one page diff JSON and Excel together?',
    faqA4:
      'No. JSON needs tree/path diff semantics; spreadsheets need grid coordinates. Forcing both into a paste-only text diff hides structure—use the JSON or Excel page instead.',
  },
  'security-ids': {
    guideTitle: 'Secrets, identifiers, and integrity checks',
    guideBody:
      'Human secrets: password generator with length and charset controls—copy into a password manager, not email.\n\n' +
      'Opaque IDs: UUID generator (v4 random is common for public identifiers).\n\n' +
      'Integrity: file hash for checksums on files you may process locally.\n\n' +
      'Inspection: file metadata analyzer for basic file facts; JWT decoder lists under dev-data/security when debugging token shape.\n\n' +
      'Document and photo privacy: PDF protect/unlock and EXIF tools may list here secondarily when access or metadata stripping is the job.',
    faqQ4: 'Is UUID v4 enough for session tokens?',
    faqA4:
      'Use platform-vetted session libraries with proper signing and rotation. UUIDs are fine as opaque database keys; they are not authentication by themselves.',
  },
  'files-archives': {
    guideTitle: 'Zip, unzip, extract, and magnet inspection',
    guideBody:
      'Create handoffs: create zip file for modest folder packaging in the browser.\n\n' +
      'Open existing archives: unzip file or archive extractor to list or pull contents—watch memory on huge trees.\n\n' +
      'Magnet links: magnet link decoder to read display name and hash fields from a URI—does not start downloads.\n\n' +
      'Integrity cross-links: file hash and metadata tools may list here secondarily when verifying downloads.',
    faqQ4: 'Browser zip vs desktop 7-Zip for large repos?',
    faqA4:
      'Browser tools hit tab memory limits. Exclude node_modules-scale trees or split archives; use a native archiver for multi-gigabyte jobs or exotic compression formats.',
  },
};

/** @type {Record<string, typeof EN>} */
const BY_LANG = { en: EN };

/** 简体中文：独立重写，非英译腔 */
BY_LANG.zh = {
  'health-body': {
    guideTitle: '按健康问题选工具',
    guideBody:
      '体型筛查：BMI 适合人群常用的身高体重比；理想体重适合按身高与骨架给出目标区间。\n\n' +
      '能量与营养：BMR/TDEE 估静息与每日总消耗；宏量营养素在确定热量目标后拆分蛋白、碳水与脂肪。\n\n' +
      '训练区间与负荷：心率区间用于有氧目标；配速需要最近一次跑步或距离；一次最大力量（1RM）从次极限重量外推杠铃负荷。\n\n' +
      '体成分：体脂工具需要皮褶或 Navy 法等输入——没有量具就不要硬套。',
    faqQ4: '能 BMI → TDEE → 宏量营养素连着算吗？',
    faqA4:
      '可以，当作规划草图：BMI/理想体重看背景，TDEE 定每日热量，宏量营养素再拆分。体重或训练量明显变化要重算；整条链路不能替代医疗或营养处方。',
  },
  'personal-money': {
    guideTitle: '按消费场景选理财工具',
    guideBody:
      '结账当场：小费、折扣、VAT（价外税）分别对应账单、促销价与含税/未税标价。\n\n' +
      '工资与工时：年薪↔时薪适合比 offer 或自由职业报价。\n\n' +
      '借贷：EMI 估固定分期；债务偿还算 avalanche/snowball 顺序与额外还款。\n\n' +
      '增长与购买力：复利与 72 法则看翻倍直觉；现值与 CAGR 看投资框架；通胀看实际购买力；百分比变化适合已有新旧两个金额。',
    faqQ4: '小票算法和房贷用同一个工具吗？',
    faqA4:
      '通常不用。小票从小费/折扣/VAT 入手；房贷、车贷用 EMI 或债务偿还，并填入 lender 给的利率、期限与费用——不要用结账类工具代算贷款。',
  },
  'business-finance': {
    guideTitle: '经营测算推荐顺序',
    guideBody:
      '单位经济： markup 与 margin 分母不同； gross/profit/contribution margin 看分层利润表；边际收入看量价变动。\n\n' +
      '产能与盈亏：break-even 看覆盖固定+变动成本所需销量或收入。\n\n' +
      '资本配置：ROI 看项目/活动回报；NPV、IRR 看跨期现金流（折扣率要写清）；回收期回答「多久回本」但不含折现细节。\n\n' +
      '跨主题：折扣、VAT、复利、现值等也可能在 shopper 工具下二次收录。',
    faqQ4: '为什么 markup 和 margin 分两页？',
    faqA4:
      '因为公式分母不同：markup 基于成本加价，margin 基于售价算利润率。50% markup 不等于 50% margin——定价会议混用极易出错。',
  },
  'math-stats': {
    guideTitle: '按统计或代数问题选型',
    guideBody:
      '集中趋势与离散：mean/median 看典型值；标准差看波动；z-score 看相对分布的位置。\n\n' +
      '推断辅助：p-value、置信区间在已选定检验后使用；sample size 用于调查或 A/B 功效规划。\n\n' +
      '计数与代数：排列组合；二次方程、指数、对数；GPA 须对照本校规则。\n\n' +
      '实验记数：科学计数法与有效数字——运动学等物理量工具在 science-physics 主题。',
    faqQ4: '偏态数据先看 mean 还是 median？',
    faqA4:
      '收入、延迟、评分等长尾/偏态数据建议 median 为主、mean 为辅并说明用途。对称分布且每个值都参与公式时 mean 即可——务必写清你采用了哪一个。',
  },
  'geometry-measure': {
    guideTitle: '图形、坡度、比例与单位',
    guideBody:
      '具名图形：三角形面积、圆、体积、勾股定理——能标出边长或半径时使用。\n\n' +
      '坡度与画面：slope/gradient 看道路、坡道、屋顶；aspect ratio 看裁剪与版式。\n\n' +
      '通用换算：unit converter；要买涂料/瓷砖/混凝土或算房间面积时，home-diy 下的材料估算更合适。',
    faqQ4: '几何体积和混凝土估算有什么区别？',
    faqA4:
      '本主题体积是 L×W×H 等几何公式；混凝土估算把体积换成袋数与损耗。先几何算体积，再买材料时用 home-diy。',
  },
  'science-physics': {
    guideTitle: '按物理章节选工具',
    guideBody:
      '运动学：velocity、acceleration。\n\n' +
      '电路：Ohm 定律用于 V–I–R 学习题——不能单独用来定家庭布线规格。\n\n' +
      '材料：density（质量/体积）。\n\n' +
      '磁场：传感器式读数须与已知标定对照后再做安全判断。\n\n' +
      '记数法：科学计数法与有效数字主收录在 math-stats，physics 为次要入口。',
    faqQ4: '什么时候该去 math-stats 的记数工具？',
    faqA4:
      '任务是格式化或修约测量值、而非求物理量时，用记数工具；未知量是速度、电阻等物理量时，用本主题对应计算器。',
  },
  'home-diy': {
    guideTitle: '房间与材料估算',
    guideBody:
      '面积基线：square feet 统一英尺/英寸或算房间面积。\n\n' +
      '表面用量：paint（墙/顶+遍数）、tile（面积+损耗）、concrete（模板体积与袋数）。\n\n' +
      '与几何重叠：volume、unit converter 可能在次要列表出现，用于既要算形状又要买材料的场景。',
    faqQ4: '铺砖量内尺寸还是外尺寸？',
    faqA4:
      '量最终要覆盖的完成面（留踢脚线、洁具净空）。净面积算完再加排版损耗——对角铺比直铺耗更多。',
  },
  'time-calendar': {
    guideTitle: '年龄、间隔、时区与 Unix 时间',
    guideBody:
      '日历问题：age 按生日算年数；date difference 算项目或预订跨度——说明要日历日还是精确 24 小时。\n\n' +
      '跨区会议：timezone converter 用 IANA 时区 ID，不要只写城市昵称。\n\n' +
      '工程日志：unix timestamp 区分秒与毫秒。\n\n' +
      '跨主题：配速在 health-body；时区/Unix 在 dev-data 也有次要入口。',
    faqQ4: '生日前一天年龄差一天怎么回事？',
    faqA4:
      '年龄按某时区已完成的整年计数。UTC 与本地午夜可能差一天——选对与你法律或生活场景一致的时区。',
  },
  'pdf-docs': {
    guideTitle: 'PDF 处理推荐顺序',
    guideBody:
      '结构：merge、split、organize、rotate、页码——页序或方向不对时先做。\n\n' +
      '体积与裁切：compress 应对邮件/上传限制；crop 修边距或 bleed。\n\n' +
      '权限：protect 加你控制的密码；unlock 仅限你有权处理的文件。\n\n' +
      '导出：PDF→Markdown（文档/git）；PDF→JPG 或页面尺寸规格；watermark 标草稿。\n\n' +
      '以图片批处理为主（images→PDF/PPT/Word）的工具主收录在 image-media。',
    faqQ4: '先合并还是先压缩？',
    faqA4:
      '通常先 merge 定稿页序，再对合并文件 compress 一次，便于全质量检查分页。发给对方确认前保留未压缩备份。',
  },
  'image-media': {
    guideTitle: '按交付任务分组选图工具',
    guideBody:
      '平台尺寸：YouTube 缩略图、Instagram 帖子/Story、LinkedIn 横幅、Open Graph、Amazon 主图、App Store 图标与截图——需要像素与安全区时用，不是随意裁剪。\n\n' +
      '变换与体积：compress/optimizer 控字节；crop、flip、border、灰度、格式转换做视觉调整；SVG optimizer 减矢量体积。\n\n' +
      '合成与动图：merge、overlay、images-to-GIF、加水印。\n\n' +
      '元数据与隐私：EXIF 查看/剥离；color-from-image 探色（品牌 token 在 design-brand 定稿）。\n\n' +
      '文档导出：images→PDF/PPT/Word；PDF -centric 编辑在 pdf-docs。',
    faqQ4: '先压缩还是先转格式？',
    faqA4:
      '渠道若限定 JPEG/PNG/WebP，先 format converter，再 compress/optimizer。大幅裁剪应在压缩前完成，避免对无用区域浪费码率。',
  },
  'design-brand': {
    guideTitle: '从对比度检查到设计交付',
    guideBody:
      '无障碍门槛：WCAG contrast checker 对文本/UI 做 AA/AAA。\n\n' +
      '配色方向：smart website color scheme 从品牌色扩展 light/dark 套系。\n\n' +
      'Token 导出：brand color token pack；brand style guide 记录 surface/accent/text 等角色。\n\n' +
      '上游：image-media 抽色后，在本主题锁定可访问 token。',
    faqQ4: '对比度过了就够了吗？',
    faqA4:
      '不够。字号、字重、焦点态与非颜色提示仍要测；对比度工具查亮度差，查不出所有认知障碍。',
  },
  'seo-growth': {
    guideTitle: 'SEO 工作流分段工具',
    guideBody:
      '摘要撰写：meta tag generator、SERP preview、Open Graph preview。\n\n' +
      '技术面：robots.txt、sitemap XML、hreflang、schema JSON-LD（须与可见文案一致）。\n\n' +
      '抓取与质量：IndexNow 在实质更新后；on-page SEO checker 快审；Core Web Vitals checker 看 LCP/INP/CLS 实验值。\n\n' +
      '投放与排障：UTM builder；抓取问题若在 DNS/TLS/响应头，见 network-ip 的 headers/add-www。',
    faqQ4: '新工具页上线后建议顺序？',
    faqA4:
      '确认可索引正文与 canonical/hreflang → 更新 sitemap → 可选 IndexNow → 抽查 SERP/OG 预览。不保证排名——工具是决策辅助，不是操纵排名的套件。',
  },
  'network-ip': {
    guideTitle: '网络分层：IP、DNS、HTTP、CIDR',
    guideBody:
      '出口身份：public IP 看边缘所见地址（VPN/CGN 时常与路由器页不同）。\n\n' +
      '解析：domain lookup；add-www-to-dns 解决 apex/www 路由。\n\n' +
      'HTTP：website headers 看缓存、安全与重定向线索。\n\n' +
      '编址：CIDR 备忘、私网段、CIDR↔范围、IPv6、Terraform cidrsubnet、AWS VPC planner。\n\n' +
      '仅在你有权测试的系统上使用。',
    faqQ4: '先 CIDR 计算器还是 Terraform cidrsubnet？',
    faqA4:
      '先用 CIDR↔范围或备忘表核对前缀大小与主机数；已知父网要划分子网索引时，再用 Terraform cidrsubnet。',
  },
  'dev-data': {
    guideTitle: '按载荷类型选开发者工具',
    guideBody:
      '传输编码：Base64、HTML entity。\n\n' +
      '结构化：YAML↔JSON、CSV↔JSON；JSON Schema validator 验形状非业务规则。\n\n' +
      '调试：JWT decoder；curl-to-fetch 改写 fetch 示例。\n\n' +
      '文档链：Markdown↔HTML、ChatGPT export→Markdown。\n\n' +
      '对比与时间类（text diff、JSON diff、文件/Excel 对比、时区、Unix）主收录在 text-compare 或 time-calendar。',
    faqQ4: 'JSON diff 前先 Schema 校验吗？',
    faqA4:
      '若关心契约形状，先分别 validate 再 diff。单独 diff 看不出哪一侧违反了 schema。',
  },
  'ai-prompt-template-builder': {
    guideTitle: '按产出物选 Prompt 构建器',
    guideBody:
      '通用模板：Prompt template builder（Role/Task/Constraints/Output + 场景芯片）。\n\n' +
      '写作：Writing prompt generator（对白/角色/剧本/随机）。\n\n' +
      '图像：Midjourney prompt builder；Sketch prompt generator（线稿/构图）。\n\n' +
      '影视：Film prompt builder（logline/三幕）；Short drama prompt generator（竖屏连载钩子）。\n\n' +
      '产品与移动端：Product design prompt builder；Android/iOS prompt builder（Agent 规格）。\n\n' +
      'Build/Roll 默认本地；Expand/Polish 经 Turnstile 后仅当次文本送 Cloudflare Workers AI。',
    faqQ4: '要为 ChatGPT 和 Gemini 各建一页吗？',
    faqA4:
      '不要——同表单换平台名是 doorway。组装好的 prompt 自行粘贴到 ChatGPT、Gemini、Claude 或 DeepSeek；文案可点名平台，slug 不拆。',
  },
  'text-compare': {
    guideTitle: '按输入类型选对比工具',
    guideBody:
      '粘贴纯文本：Check difference between two texts（text-diff）。\n\n' +
      '两个文本文件：Compare two text files online（.txt/.md，按行 diff）。\n\n' +
      'Word：Compare two Word documents for differences（抽 .docx 可读文本，非桌面修订合并）。\n\n' +
      'JSON：JSON diff checker online（路径级增删改，默认忽略键序）。\n\n' +
      '表格：Excel compare files（xlsx/csv 按单元格）。',
    faqQ4: '一页同时 diff JSON 和 Excel 可以吗？',
    faqA4:
      '不行。JSON 要树/路径语义，表格要坐标。硬塞进粘贴 diff 会丢结构——请用对应专页。',
  },
  'security-ids': {
    guideTitle: '密钥、标识与完整性',
    guideBody:
      '人类密钥：password generator——立即存入密码管理器。\n\n' +
      '不透明 ID：UUID generator（v4 常用于公开标识）。\n\n' +
      '完整性：file hash 本地校验。\n\n' +
      '检视：file metadata analyzer；JWT 在 dev-data/security 次要收录。\n\n' +
      '文档/照片：PDF protect/unlock、EXIF 可能在次要列表。',
    faqQ4: 'UUID v4 能当 session token 吗？',
    faqA4:
      '应用平台推荐的 session 库（签名与轮换）。UUID 适合作数据库主键，本身不是认证。',
  },
  'files-archives': {
    guideTitle: '压缩、解压与 magnet 解析',
    guideBody:
      '打包：create zip file（ modest 体量的浏览器打包）。\n\n' +
      '解压：unzip file、archive extractor——大树注意内存。\n\n' +
      'Magnet：magnet link decoder 读显示名与 hash，不发起下载。\n\n' +
      '校验：file hash/metadata 可能次要收录于此。',
    faqQ4: '浏览器 zip 和 7-Zip 怎么选？',
    faqA4:
      '浏览器受标签页内存限制；node_modules 级目录请拆分或用桌面 archiver。多 GB 或 exotic 格式用本机工具。',
  },
};

/** 西班牙语：检索向独立重写 */
BY_LANG.es = {
  'health-body': {
    guideTitle: 'Qué herramienta encaja con tu pregunta de salud',
    guideBody:
      'Cribado de peso/talla: calculadora BMI para un ratio poblacional, o peso ideal si buscas una banda objetivo según altura y complexión.\n\n' +
      'Energía y nutrición: BMR/TDEE estima el gasto en reposo y diario; macros reparte proteínas, carbohidratos y grasas una vez fijada la meta calórica.\n\n' +
      'Zonas y carga de entreno: zonas de frecuencia cardíaca para cardio; pace si tienes una carrera o distancia reciente; 1RM para programar cargas con barra a partir de un levantamiento submáximo.\n\n' +
      'Composición corporal: grasa corporal usa pliegues o método Navy—omítela si no tienes las medidas que pide la página.',
    faqQ4: '¿Puedo encadenar BMI → TDEE → macros en una sesión?',
    faqA4:
      'Sí, como borrador de planificación. Usa BMI o peso ideal como contexto, TDEE para el presupuesto calórico diario y macros para repartirlo. Recalcula si cambia peso o volumen de entreno; no sustituye una prescripción médica.',
  },
  'personal-money': {
    guideTitle: 'Herramientas de dinero según el momento de compra',
    guideBody:
      'En caja: calculadora de propina para servicios; descuento para rebajas; VAT cuando el impuesto no está en el precio de etiqueta.\n\n' +
      'Sueldo y trabajo: salario↔hora al comparar ofertas o tarifas freelance.\n\n' +
      'Préstamos: EMI para un esquema de cuota fija; debt payoff si quieres orden avalanche/snowball con pagos extra.\n\n' +
      'Crecimiento y poder adquisitivo: interés compuesto y regla del 72; valor presente y CAGR para inversiones; inflación para poder real; percent change cuando ya tienes importes antiguo y nuevo.',
    faqQ4: '¿Qué herramienta para un ticket de tienda vs una hipoteca?',
    faqA4:
      'Tickets y caja suelen empezar con propina, descuento o VAT. Hipotecas y préstamos de coche van en EMI o debt payoff con tasa, plazo y comisiones del prestamista—no uses ayudas de caja para préstamos.',
  },
  'business-finance': {
    guideTitle: 'Flujo de cálculo para negocios en este sitio',
    guideBody:
      'Economía unitaria: markup vs margin (denominadores distintos); gross, profit y contribution margin para capas de P&L; marginal revenue cuando cambian precio o volumen.\n\n' +
      'Capacidad: break-even para unidades o ingresos que cubran costes fijos y variables.\n\n' +
      'Asignación de capital: ROI para retorno de campaña o proyecto; NPV e IRR con flujos en el tiempo (explicita la tasa de descuento); payback period cuando piden “cuándo vuelve el efectivo” sin matices de descuento.\n\n' +
      'Listados cruzados: descuento, VAT, interés compuesto o valor presente pueden aparecer aquí cuando la política de precios se solapa con herramientas de compra.',
    faqQ4: '¿Por qué margin y markup son páginas separadas?',
    faqA4:
      'Responden a denominadores distintos. Markup es incremento sobre coste; margin es beneficio sobre precio de venta. Mezclarlos en un titular provoca el error “50% markup no es 50% margin” en reuniones de pricing.',
  },
  'math-stats': {
    guideTitle: 'Elige el helper de estadística o álgebra que necesitas',
    guideBody:
      'Valor típico y dispersión: mean y median para el centro; desviación estándar para la dispersión; z-score al comparar un valor con una distribución.\n\n' +
      'Inferencia: p-value e intervalo de confianza cuando ya elegiste un test; sample size para planificar encuesta o potencia A/B.\n\n' +
      'Conteo y álgebra escolar: permutación/combinación; ecuación cuadrática, exponente y logaritmo; GPA cuando importa la política del centro.\n\n' +
      'Notación de laboratorio: notación científica y cifras significativas—herramientas de cinemática en science-physics.',
    faqQ4: '¿Empiezo con mean o median para mi dataset?',
    faqA4:
      'Si dominan outliers o asimetría (ingresos, latencia, valoraciones), prioriza median y muestra mean después. Si la distribución es simétrica y cada valor cuenta en la fórmula, mean vale—indica cuál usaste.',
  },
  'geometry-measure': {
    guideTitle: 'Formas, pendiente, ratio y unidades',
    guideBody:
      'Formas nombradas: área de triángulo, círculo, volumen y teorema de Pitágoras cuando puedas etiquetar lados o radio.\n\n' +
      'Pendiente y pantalla: slope y gradient para rampas, carreteras o inclinación de tejado; aspect ratio para recortes y cajas de layout.\n\n' +
      'Conversión genérica: unit converter para longitud, masa, temperatura y más—estimadores de materiales DIY (pintura, azulejo, hormigón, square feet) en home-diy cuando compras suministros.',
    faqQ4: '¿Volumen aquí vs estimador de hormigón en home-diy?',
    faqA4:
      'Volumen aquí es la fórmula geométrica (L×W×H o similar). El estimador de hormigón convierte ese volumen en sacos y merma. Usa geometría primero, luego DIY al pedir mezcla.',
  },
  'science-physics': {
    guideTitle: 'Magnitudes de física por capítulo',
    guideBody:
      'Cinemática: velocity y acceleration cuando conoces desplazamiento, tiempo o tasa de cambio.\n\n' +
      'Electricidad: ley de Ohm para relaciones V–I–R en problemas de aprendizaje—no para dimensionar cableado doméstico solo.\n\n' +
      'Materiales: density a partir de masa y volumen.\n\n' +
      'Campos: helper de campo magnético para lecturas tipo sensor—calibra contra referencia conocida antes de decisiones de seguridad.\n\n' +
      'Enlaces cruzados: notación científica y cifras significativas son primarias en math-stats con listados secundarios en física.',
    faqQ4: '¿Cuándo pasar a herramientas de notación en math-stats?',
    faqA4:
      'Cuando la tarea es formatear o redondear una medida—no resolver una identidad física. Usa páginas de física cuando la incógnita es una magnitud física (fuerza, velocidad, resistencia).',
  },
  'home-diy': {
    guideTitle: 'Estimadores de habitación y material',
    guideBody:
      'Base de área: square feet cuando mezclas pies y pulgadas o necesitas área de habitación antes del material.\n\n' +
      'Cobertura superficial: paint para paredes/techos con manos; tile para suelo/pared más merma; concrete para volumen de encofrado y sacos.\n\n' +
      'Solapamiento con geometría: volume o unit converter pueden listarse aquí cuando el trabajo necesita forma y compra de material.',
    faqQ4: '¿Mido dimensiones interiores o exteriores para azulejo?',
    faqA4:
      'Mide la superficie acabada que cubrirás (holgura para rodapié y sanitarios). Añade merma de patrón tras el área neta—disposiciones diagonales exigen más recorte que filas rectas.',
  },
  'time-calendar': {
    guideTitle: 'Edad, intervalos, zonas y tiempo epoch',
    guideBody:
      'Fechas humanas: age por años de cumpleaños; date difference para proyectos o reservas—aclara si necesitas días calendario o conteos exactos de 24 h.\n\n' +
      'Reuniones entre regiones: timezone converter con ID IANA, no solo apodo de ciudad.\n\n' +
      'Logs de ingeniería: Unix timestamp para segundos vs milisegundos en APIs y líneas de log.\n\n' +
      'Cruzado: pace en health-body usa tiempo sobre distancia; timezone y Unix también listan en dev-data al depurar código.',
    faqQ4: '¿Por qué mi edad cambió un día antes de mi cumpleaños?',
    faqA4:
      'Age cuenta años completados en una zona horaria. UTC vs medianoche local puede mover el límite—elige la zona que coincida con el contexto legal o personal que te importa.',
  },
  'pdf-docs': {
    guideTitle: 'Trabajos PDF en orden sensato',
    guideBody:
      'Estructura primero: merge, split, organize, rotate y números de página cuando el orden u orientación fallan.\n\n' +
      'Tamaño y encuadre: compress cuando muerden límites de email o subida; crop cuando hay que recortar márgenes o sangrado.\n\n' +
      'Control de acceso: protect para contraseña que controles; unlock solo en archivos que te pertenezcan legítimamente.\n\n' +
      'Exportación: PDF to Markdown para pipelines docs/git; PDF to JPG o tamaños por página para specs raster; watermark para borradores.\n\n' +
      'Lotes desde imagen (images to PDF/PPT/Word) viven primariamente en image-media con listados secundarios aquí.',
    faqQ4: '¿Merge antes o después de compress?',
    faqA4:
      'Suele hacerse merge al orden final de páginas primero, luego compress una vez en el archivo combinado para revisar paginación a calidad plena. Guarda copia sin comprimir hasta que confirmen los destinatarios.',
  },
  'image-media': {
    guideTitle: 'Flujos de imagen agrupados por entrega',
    guideBody:
      'Specs de plataforma: YouTube thumbnail, Instagram post/story, LinkedIn banner, Open Graph, Amazon main image, iconos y capturas App Store—cuando necesitas píxeles y zonas seguras, no recorte arbitrario.\n\n' +
      'Transformación y peso: compress y optimizer para bytes en red; crop, flip, border, grayscale y format converter para cambios visuales; SVG optimizer para peso vectorial.\n\n' +
      'Componer y animar: merge, overlay, images-to-GIF, add watermark para atribución.\n\n' +
      'Metadatos y privacidad: EXIF viewer/stripper antes de compartir; color-from-image al explorar paletas (tokens de marca se cierran en design-brand).\n\n' +
      'Export a documentos: images to PDF/PPT/Word cuando el entregable es paquete office—ediciones centradas en PDF quedan en pdf-docs.',
    faqQ4: '¿Compress, optimizer o format converter primero?',
    faqA4:
      'Convierte formato primero si el canal exige JPEG/PNG/WebP. Luego compress/optimizer para presupuesto de bytes. Recorta antes de compress cuando el encuadre elimina áreas grandes sin usar.',
  },
  'design-brand': {
    guideTitle: 'Sistemas de color de la revisión a la entrega',
    guideBody:
      'Puerta de accesibilidad: WCAG contrast checker para pares texto/UI frente a umbrales AA o AAA.\n\n' +
      'Dirección de paleta: smart website color scheme para un set coherente claro/oscuro desde color semilla de marca.\n\n' +
      'Export de tokens: brand color token pack para variables CSS o design tokens; brand style guide cuando documentas roles (surface, accent, text).\n\n' +
      'Inspiración upstream: extrae colores de fotos en image-media, luego fija tokens accesibles aquí.',
    faqQ4: 'Pasó el contraste—¿terminé con accesibilidad?',
    faqA4:
      'No. El contraste es necesario pero no suficiente—tamaño y peso de fuente, estados de foco y señales no cromáticas siguen importando. Prueba flujos críticos con usuarios; las herramientas de contraste detectan fallos de luminancia, no toda barrera cognitiva.',
  },
  'seo-growth': {
    guideTitle: 'Etapas del flujo SEO en este sitio',
    guideBody:
      'Snippet: meta tag generator y SERP preview para títulos/descripciones; Open Graph preview para tarjetas sociales.\n\n' +
      'Superficie técnica: generadores robots.txt y sitemap XML; hreflang generator para clusters de locale; schema JSON-LD cuando el copy visible ya respalda el tipo.\n\n' +
      'Rastreo y calidad: IndexNow tras publicaciones con sustancia; on-page SEO checker para auditoría visible rápida; Core Web Vitals checker cuando LCP/INP/CLS necesitan snapshot de laboratorio.\n\n' +
      'Campañas y desbloqueo: UTM builder para enlaces etiquetados; website headers o add-www-to-dns en network-ip cuando el rastreo es en realidad DNS/TLS/headers.',
    faqQ4: '¿Qué orden tras publicar una nueva página de herramienta?',
    faqA4:
      'Confirma copy indexable y canonical/hreflang, actualiza sitemap, opcionalmente ping IndexNow, luego revisa SERP/OG previews. El ranking no está garantizado—trata las herramientas como apoyo a decisiones, no manipulación de posiciones.',
  },
  'network-ip': {
    guideTitle: 'Capas de red: IP, DNS, HTTP, CIDR',
    guideBody:
      'Identidad de salida: public IP muestra lo que ve nuestro edge—útil tras VPN o NAT de operador.\n\n' +
      'Resolución de nombres: domain lookup para registros; add-www-to-dns cuando la duda es enrutamiento apex/www.\n\n' +
      'Comportamiento HTTP: website headers para pistas de caché, seguridad y redirección en URLs que puedas probar.\n\n' +
      'Planificación de direcciones: CIDR cheat sheet y rangos privados; conversores CIDR↔range; IPv6 CIDR; Terraform cidrsubnet y AWS VPC planner al diseñar prefijos cloud.\n\n' +
      'Usa solo en sistemas que estés autorizado a probar.',
    faqQ4: '¿Calculadora CIDR vs Terraform cidrsubnet—cuál primero?',
    faqA4:
      'Empieza con CIDR↔range o cheat sheet para validar tamaño de prefijo y conteo de hosts. Abre Terraform cidrsubnet cuando ya conoces el prefijo padre y necesitas matemática de índices anidados para módulos.',
  },
  'dev-data': {
    guideTitle: 'Transformaciones de desarrollador por tipo de payload',
    guideBody:
      'Codificación de transporte: Base64 y HTML entity encode/decode para canales de texto seguros.\n\n' +
      'Datos estructurados: YAML↔JSON y CSV↔JSON para puentes config/tabular; JSON Schema validator para forma—no reglas de negocio.\n\n' +
      'Debug de tokens y HTTP: JWT decoder para inspección de claims en muestras permitidas; curl-to-fetch al reescribir ejemplos shell para fetch().\n\n' +
      'Pipelines de docs: Markdown↔HTML y ChatGPT export to Markdown para repos de contenido.\n\n' +
      'Compare y tiempo (text diff, JSON diff, file compare, Excel compare, timezone, Unix) viven primariamente en text-compare o time-calendar con listados secundarios en dev-data.',
    faqQ4: '¿Validar JSON Schema antes o después de diff de dos JSON?',
    faqA4:
      'Valida cada documento contra el schema primero si te importa la forma del contrato. Luego diff para ver cambios semánticos. El diff solo no dirá qué lado violó el schema.',
  },
  'ai-prompt-template-builder': {
    guideTitle: 'Constructores de prompt por artefacto que necesitas',
    guideBody:
      'Plantillas reutilizables: Prompt template builder con Role/Task/Constraints/Output y chips de escena (writing, web, copilot, mobile).\n\n' +
      'Ficción: Writing prompt generator para diálogo, personaje, guion o arranques aleatorios.\n\n' +
      'Prompts visuales: Midjourney prompt builder para parámetros de imagen; Sketch prompt generator para line-art y composición.\n\n' +
      'Video largo: Film prompt builder para logline y tres actos; Short drama prompt generator para ganchos de serial vertical.\n\n' +
      'Producto y agentes móviles: Product design prompt builder para briefs UX; Android e iOS prompt builders para specs de agente Kotlin/Compose o Swift/SwiftUI.\n\n' +
      'Build/Roll local en dispositivo; Expand/Polish envía solo el texto de ese clic a Cloudflare Workers AI tras Turnstile.',
    faqQ4: '¿Necesito página separada para ChatGPT vs Gemini?',
    faqA4:
      'No—misma URL con otro título sería el mismo formulario. Pega el prompt ensamblado en ChatGPT, Gemini, Claude o DeepSeek tú mismo; las páginas nombran plataformas en copy, no en slug.',
  },
  'text-compare': {
    guideTitle: 'Herramientas de comparación según tus entradas',
    guideBody:
      'Texto plano pegado: Check difference between two texts (text-diff) para cadenas ya en el portapapeles.\n\n' +
      'Dos archivos de texto: Compare two text files online para .txt/.md con diff por líneas.\n\n' +
      'Word: Compare two Word documents for differences extrae prosa legible de .docx—no fusión Track Changes de escritorio.\n\n' +
      'APIs JSON: JSON diff checker online para altas/cambios/bajas a nivel de ruta—orden de claves ignorado por defecto.\n\n' +
      'Hojas: Excel compare files para diffs celda a celda en xlsx/csv—elige la página que coincida con el objeto que ya tienes.',
    faqQ4: '¿Una página puede diff JSON y Excel juntos?',
    faqA4:
      'No. JSON necesita semántica árbol/ruta; hojas necesitan coordenadas de rejilla. Forzar ambos en un text-diff de pegado oculta estructura—usa la página JSON o Excel.',
  },
  'security-ids': {
    guideTitle: 'Secretos, identificadores e integridad',
    guideBody:
      'Secretos humanos: password generator con longitud y charset—copia a gestor de contraseñas, no a email.\n\n' +
      'IDs opacos: UUID generator (v4 aleatorio es común para identificadores públicos).\n\n' +
      'Integridad: file hash para checksums en archivos que proceses localmente.\n\n' +
      'Inspección: file metadata analyzer para datos básicos; JWT decoder lista en dev-data/security al depurar forma de token.\n\n' +
      'Privacidad documento/foto: PDF protect/unlock y EXIF pueden listarse aquí cuando el trabajo es acceso o eliminar metadatos.',
    faqQ4: '¿UUID v4 basta para tokens de sesión?',
    faqA4:
      'Usa bibliotecas de sesión validadas por la plataforma con firma y rotación adecuadas. UUID sirve como claves opacas de base de datos; no son autenticación por sí solos.',
  },
  'files-archives': {
    guideTitle: 'Zip, unzip, extract e inspección magnet',
    guideBody:
      'Crear entregas: create zip file para empaquetado modesto de carpetas en el navegador.\n\n' +
      'Abrir archivos existentes: unzip file o archive extractor para listar o extraer—cuidado con memoria en árboles enormes.\n\n' +
      'Enlaces magnet: magnet link decoder lee nombre visible y campos hash de un URI—no inicia descargas.\n\n' +
      'Enlaces cruzados de integridad: file hash y metadata pueden listarse aquí al verificar descargas.',
    faqQ4: '¿Zip en navegador vs 7-Zip de escritorio para repos grandes?',
    faqA4:
      'Las herramientas de navegador chocan con límites de memoria de pestaña. Excluye árboles tipo node_modules o divide archivos; usa archivador nativo para trabajos multigigabyte o formatos exóticos.',
  },
};

/** 阿拉伯语：检索向独立重写 */
BY_LANG.ar = {
  'health-body': {
    guideTitle: 'أي أداة تناسب سؤالك الصحي',
    guideBody:
      'فحص الوزن/الطول: حاسبة BMI للفحص على مستوى المجموعة، أو ideal weight عندما تريد نطاقاً مستهدفاً من الطول والبنية.\n\n' +
      'الطاقة والتغذية: BMR/TDEE تقدّر الحرق في الراحة واليومي؛ macros تقسّم protein وcarbs وfat بعد تحديد الهدف caloric.\n\n' +
      'مناطق التدريب والحمل: heart-rate zones للأهداف cardio؛ pace عند معرفة سباق أو مسافة جري حديثة؛ one-rep max لبرمجة أحمال barbell من رفع دون الحد الأقصى.\n\n' +
      'تكوين الجسم: body fat يستخدم skinfold أو مدخلات Navy—تخطّها إن لم تتوفر القياسات التي تطلبها الصفحة.',
    faqQ4: 'هل يمكنني ربط BMI → TDEE → macros في جلسة واحدة؟',
    faqA4:
      'نعم، كمسودة تخطيط. استخدم BMI أو ideal weight للسياق، TDEE لميزانية السعرات اليومية، ثم macros للتقسيم. أعد الحساب عند تغيّر الوزن أو حجم التدريب؛ لا تعتبر السلسلة وصفة طبية.',
  },
  'personal-money': {
    guideTitle: 'أدوات المال اليومية حسب لحظة الدفع',
    guideBody:
      'عند الصندوق: tip calculator لفواتير الخدمة؛ discount لأسعار التخفيض؛ VAT عندما لا يُدرج الضريبة في السعر المعروض.\n\n' +
      'الراتب والعمل: salary↔hourly لمقارنة عروض العمل أو أسعار freelance.\n\n' +
      'الاقتراض: EMI لمسودة قرض بقسط ثابت؛ debt payoff لترتيب avalanche/snowball مع دفعات إضافية.\n\n' +
      'النمو والقدرة الشرائية: compound interest وRule of 72؛ present value وCAGR للاستثمار؛ inflation للقوة الشرائية الحقيقية؛ percent change عند وجود مبلغين قديم وجديد.',
    faqQ4: 'أي أداة لإيصال متجر مقابل رهن عقاري؟',
    faqA4:
      'الإيصالات ورياضيات الدفع تبدأ عادةً بtip أو discount أو VAT. الرهن العقاري وقروض السيارات على EMI أو debt payoff مع معدل ومدة ورسوم من المُقرض—لا تستخدم مساعدات الدفع لحساب القروض.',
  },
  'business-finance': {
    guideTitle: 'مسار حسابات الصفقات على هذا الموقع',
    guideBody:
      'اقتصاد الوحدة: markup مقابل margin (مقامات مختلفة)؛ gross وprofit وcontribution margin لطبقات P&L؛ marginal revenue عند تحرّك السعر أو الحجم.\n\n' +
      'القدرة: break-even للوحدات أو الإيراد اللازم لتغطية التكاليف الثابتة والمتغيرة.\n\n' +
      'تخصيص رأس المال: ROI لعائد الحملة أو المشروع؛ NPV وIRR عند تدفقات نقدية عبر الزمن (حدّد معدل الخصم صراحةً)؛ payback period عند سؤال «متى يعود النقد» دون تفاصيل الخصم.\n\n' +
      'قوائم متقاطعة: discount أو VAT أو compound interest أو present value قد تظهر هنا عند تداخل سياسة التسعير مع أدوات المتسوق.',
    faqQ4: 'لماذا margin وmarkup صفحتان منفصلتان؟',
    faqA4:
      'لأنهما يجيبان عن مقامات مختلفة. Markup زيادة فوق التكلفة؛ margin ربح فوق سعر البيع. خلطهما في عنوان يسبب خطأ «50% markup ليس 50% margin» في اجتماعات التسعير.',
  },
  'math-stats': {
    guideTitle: 'اختر مساعد الإحصاء أو الجبر الذي تحتاجه',
    guideBody:
      'القيمة النموذجية والتشتت: mean وmedian للمركز؛ standard deviation للتشتت؛ z-score لمقارنة قيمة واحدة بتوزيع.\n\n' +
      'مساعدات الاستدلال: p-value وconfidence interval بعد اختيار الاختبار؛ sample size لتخطيط استطلاع أو قوة A/B.\n\n' +
      'العد والجبر المدرسي: permutation/combination؛ quadratic equation وexponent وlogarithm؛ GPA عندما تهم سياسة المؤسسة.\n\n' +
      'ترميز المختبر: scientific notation وsignificant figures—أدوات الحركة في science-physics.',
    faqQ4: 'هل أبدأ بmean أم median لمجموعتي؟',
    faqA4:
      'إذا سيطرت القيم الشاذة أو الانحراف (الدخل، زمن الاستجابة، التقييمات)، ابدأ بmedian ثم اعرض mean. إذا كان التوزيع متماثلاً وكل قيمة مهمة للصيغة، mean مناسب—اذكر أيّهما استخدمت.',
  },
  'geometry-measure': {
    guideTitle: 'الأشكال والميل والنسبة والوحدات',
    guideBody:
      'أشكال مسماة: triangle area وcircle وvolume وPythagorean theorem عندما يمكنك تسمية الأضلاع أو نصف القطر.\n\n' +
      'الميل والشاشة: slope وgradient للمنحدرات والطرق أو ميل السقف؛ aspect ratio للقص والتخطيط.\n\n' +
      'تحويل عام: unit converter للطول والكتلة ودرجة الحرارة وغيرها—مقدّرات مواد DIY (paint وtile وconcrete وsquare feet) في home-diy عند شراء المستلزمات.',
    faqQ4: 'الحجم هنا أم مقدّر الخرسانة في home-diy؟',
    faqA4:
      'الحجم هنا هو الصيغة الهندسية (L×W×H أو ما شابه). مقدّر الخرسانة يحوّل ذلك الحجم إلى أكياس وهدر. استخدم الهندسة أولاً، ثم DIY عند طلب الخلطة.',
  },
  'science-physics': {
    guideTitle: 'كميات الفيزياء حسب الفصل',
    guideBody:
      'الحركة: velocity وacceleration عند معرفة الإزاحة أو الزمن أو معدل التغيّر.\n\n' +
      'الكهرباء: قانون Ohm لعلاقات V–I–R في مسائل التعلّم—لا لتحديد أسلاك المنزل وحده.\n\n' +
      'المواد: density من الكتلة والحجم.\n\n' +
      'الحقول: magnetic-field helper لقراءات شبيهة بالحساس—عاير مقابل مرجع معروف قبل قرارات السلامة.\n\n' +
      'روابط متقاطعة: scientific notation وsignificant figures أساسيان في math-stats مع قوائم ثانوية في الفيزياء.',
    faqQ4: 'متى أنتقل إلى أدوات الترميز في math-stats؟',
    faqA4:
      'عندما تكون المهمة تنسيقاً أو تقريباً لقياس—وليس حلّ هوية فيزيائية. استخدم صفحات الفيزياء عندما يكون المجهول كمية فيزيائية (قوة، سرعة، مقاومة).',
  },
  'home-diy': {
    guideTitle: 'مقدّرات الغرفة والمواد',
    guideBody:
      'خط أساس للمساحة: square feet عند خلط الأقدام والبوصات أو حاجتك لمساحة الغرفة قبل حساب المواد.\n\n' +
      'تغطية السطح: paint للجدران/الأسقف مع عدد الطبقات؛ tile للأرض/الجدار مع الهدر؛ concrete لحجم القالب وعدد الأكياس.\n\n' +
      'تداخل مع الهندسة: volume أو unit converter قد يُدرج هنا عندما يحتاج العمل حساب الشكل وتخطيط الشراء معاً.',
    faqQ4: 'هل أقيس الأبعاد الداخلية أم الخارجية للبلاط؟',
    faqA4:
      'قِس السطح النهائي الذي ستغطيه (مع مساحة للزخارف والتجهيزات). أضف هدر النمط بعد المساحة الصافية—التخطيط القطري يحتاج هدر قص أكثر من الصفوف المستقيمة.',
  },
  'time-calendar': {
    guideTitle: 'العمر والفترات والمناطق الزمنية ووقت epoch',
    guideBody:
      'تواريخ بشرية: age لسنوات الميلاد؛ date difference لفترات المشروع أو الحجز—حدّد إن كنت تحتاج أيام تقويم أو عدّاً دقيقاً لـ 24 ساعة.\n\n' +
      'اجتماعات عبر المناطق: timezone converter بمعرّف IANA، لا لقب المدينة فقط.\n\n' +
      'سجلات الهندسة: Unix timestamp للثواني مقابل الميلي ثانية في APIs وسطور السجل.\n\n' +
      'متقاطع: pace في health-body يستخدم الزمن على المسافة؛ timezone وUnix يُدرجان أيضاً في dev-data عند تصحيح الكود.',
    faqQ4: 'لماذا تغيّر عمري يوماً قبل عيد ميلادي؟',
    faqA4:
      'Age يعدّ السنوات المكتملة في منطقة زمنية. UTC مقابل منتصف الليل المحلي قد يحرّك الحد—اختر المنطقة التي تطابق السياق القانوني أو الشخصي الذي يهمك.',
  },
  'pdf-docs': {
    guideTitle: 'مهام PDF بترتيب منطقي',
    guideBody:
      'البنية أولاً: merge وsplit وorganize وrotate وأرقام الصفحات عندما يكون ترتيب الصفحات أو الاتجاه خاطئاً.\n\n' +
      'الحجم والإطار: compress عند حدود البريد أو الرفع؛ crop عند الحاجة لقص الهوامش أو bleed.\n\n' +
      'التحكم بالوصول: protect لإضافة كلمة مرور تتحكم بها؛ unlock فقط للملفات التي تملكها شرعاً.\n\n' +
      'التصدير والتسليم: PDF to Markdown لخطوط docs/git؛ PDF to JPG أو أحجام الصفحة لمواصفات raster؛ watermark لتمييز المسودات.\n\n' +
      'دفعات من الصور (images to PDF/PPT/Word) أساسية في image-media مع قوائم ثانوية هنا.',
    faqQ4: 'merge قبل compress أم بعده؟',
    faqA4:
      'عادةً merge لترتيب الصفحات النهائي أولاً، ثم compress مرة واحدة على الملف المدمج لمعاينة الترقيم بجودة كاملة. احتفظ بنسخة غير مضغوطة حتى يؤكد المستلمون.',
  },
  'image-media': {
    guideTitle: 'سير عمل الصور حسب مهمة التسليم',
    guideBody:
      'مواصفات المنصة: YouTube thumbnail وInstagram post/story وLinkedIn banner وOpen Graph وAmazon main image وأيقونات ولقطات App Store—عند الحاجة لبكسلات ومناطق آمنة، لا قصاً عشوائياً.\n\n' +
      'التحويل والوزن: compress وoptimizer للبايتات على الشبكة؛ crop وflip وborder وgrayscale وformat converter للتغييرات البصرية؛ SVG optimizer لوزن المتجهات.\n\n' +
      'التركيب والحركة: merge وoverlay وimages-to-GIF وadd watermark للإسناد.\n\n' +
      'البيانات الوصفية والخصوصية: EXIF viewer/stripper قبل النشر العام؛ color-from-image لاستكشاف الألوان (brand tokens تُثبت في design-brand).\n\n' +
      'تصدير المستندات: images to PDF/PPT/Word عندما يكون المُسلَّم حزمة office—تعديلات PDF المركزية في pdf-docs.',
    faqQ4: 'compress أم optimizer أم format converter أولاً؟',
    faqA4:
      'حوّل الصيغة أولاً إن كان القناة تتطلب JPEG/PNG/WebP. ثم compress/optimizer لميزانية البايتات. قص قبل compress عندما يزيل الإطار مناطق كبيرة غير مستخدمة.',
  },
  'design-brand': {
    guideTitle: 'أنظمة الألوان من الفحص إلى التسليم',
    guideBody:
      'بوابة إمكانية الوصول: WCAG contrast checker لأزواج النص/UI مقابل عتبات AA أو AAA.\n\n' +
      'اتجاه اللوحة: smart website color scheme لمجموعة م coherent فاتح/داكن من لون العلامة seed.\n\n' +
      'تصدير الرموز: brand color token pack لمتغيرات CSS أو design tokens؛ brand style guide عند توثيق الأدوار (surface وaccent وtext).\n\n' +
      'إلهام upstream: استخرج الألوان من الصور في image-media، ثم ثبّت الرموز المتاحة هنا.',
    faqQ4: 'اجتاز التباين—هل انتهيت من إمكانية الوصول؟',
    faqA4:
      'لا. التباين ضروري لكنه غير كافٍ—حجم الخط ووزنه وحالات التركيز والإشارات غير اللونية ما زالت مهمة. اختبر المسارات الحرجة مع المستخدمين؛ أدوات التباين تكشف فشل الإضاءة، لا كل الحواجز المعرفية.',
  },
  'seo-growth': {
    guideTitle: 'مراحل سير عمل SEO على هذا الموقع',
    guideBody:
      'صياغة المقتطف: meta tag generator وSERP preview للعناوين/الأوصاف؛ Open Graph preview لبطاقات الشبكات.\n\n' +
      'السطح التقني: مولّدات robots.txt وsitemap XML؛ hreflang generator لمجموعات اللغة؛ schema JSON-LD عندما يدعم النص المرئي النوع.\n\n' +
      'الزحف والجودة: IndexNow بعد نشر ذي مضمون؛ on-page SEO checker لمراجعة سريعة؛ Core Web Vitals checker عند الحاجة لـ LCP/INP/CLS في المختبر.\n\n' +
      'الحملات وإزالة العوائق: UTM builder للروابط الموسومة؛ website headers أو add-www-to-dns في network-ip عندما تكون مشكلة الزحف DNS/TLS/headers فعلاً.',
    faqQ4: 'ما الترتيب بعد نشر صفحة أداة جديدة؟',
    faqA4:
      'أكّد النص القابل للفهرسة وcanonical/hreflang، حدّث sitemap، اختيارياً ping IndexNow، ثم راجع SERP/OG previews. الترتيب غير مضمون—عامل الأدوات كدعم قرار، لا كتلاعب بالترتيب.',
  },
  'network-ip': {
    guideTitle: 'طبقات الشبكة: IP وDNS وHTTP وCIDR',
    guideBody:
      'هوية الخروج: public IP يظهر ما يراه edge—مفيد خلف VPN أو NAT للمشغّل.\n\n' +
      'حل الأسماء: domain lookup للسجلات؛ add-www-to-dns عندما السؤال عن توجيه apex/www.\n\n' +
      'سلوك HTTP: website headers لإشارات cache والأمان وإعادة التوجيه على URLs يمكنك اختبارها.\n\n' +
      'تخطيط العناوين: CIDR cheat sheet والنطاقات الخاصة؛ محوّلات CIDR↔range؛ IPv6 CIDR؛ Terraform cidrsubnet وAWS VPC planner عند تصميم بادئات cloud.\n\n' +
      'استخدم فقط على أنظمة مخوّل لك اختبارها.',
    faqQ4: 'حاسبة CIDR أم Terraform cidrsubnet—أيهما أولاً؟',
    faqA4:
      'ابدأ بـ CIDR↔range أو cheat sheet للتحقق من حجم البادئة وعدد المضيفين. افتح Terraform cidrsubnet عندما تعرف البادئة الأب وتحتاج حساب فهرس متداخل للوحدات.',
  },
  'dev-data': {
    guideTitle: 'تحويلات المطوّر حسب نوع الحمولة',
    guideBody:
      'ترميز النقل: Base64 وHTML entity encode/decode لقنوات نص آمنة.\n\n' +
      'بيانات منظمة: YAML↔JSON وCSV↔JSON لجسور config/جدولية؛ JSON Schema validator للشكل—لا قواعد الأعمال.\n\n' +
      'تصحيح الرموز وHTTP: JWT decoder لفحص claims على عينات مسموح بها؛ curl-to-fetch عند إعادة كتابة أمثلة shell لـ fetch().\n\n' +
      'خطوط المستندات: Markdown↔HTML وChatGPT export to Markdown لمستودعات المحتوى.\n\n' +
      'أدوات المقارنة والوقت (text diff وJSON diff وfile compare وExcel compare وtimezone وUnix) أساسية في text-compare أو time-calendar مع قوائم ثانوية في dev-data.',
    faqQ4: 'أتحقق من JSON Schema قبل أم بعد diff ملفين JSON؟',
    faqA4:
      'تحقق من كل مستند مقابل الschema أولاً إن اهتممت بشكل العقد. ثم diff لرؤية التغييرات الدلالية. diff وحده لن يبيّن أي جانب خالف الschema.',
  },
  'ai-prompt-template-builder': {
    guideTitle: 'بناة الـ prompt حسب المخرجات التي تحتاجها',
    guideBody:
      'قوالب قابلة لإعادة الاستخدام: Prompt template builder مع Role/Task/Constraints/Output ورقائق المشهد (writing وweb وcopilot وmobile).\n\n' +
      'كتابة خيالية: Writing prompt generator للحوار والشخصية والسيناريو أو بدايات عشوائية.\n\n' +
      'prompts بصرية: Midjourney prompt builder لمعاملات الصورة؛ Sketch prompt generator للخط والتكوين.\n\n' +
      'فيديو طويل: Film prompt builder للـ logline والثلاث فصول؛ Short drama prompt generator لخطافات المسلسل العمودي.\n\n' +
      'المنتج ووكلاء الجوال: Product design prompt builder لموجز UX؛ Android وiOS prompt builders لمواصفات وكيل Kotlin/Compose أو Swift/SwiftUI.\n\n' +
      'Build/Roll محلي على الجهاز؛ Expand/Polish يرسل نص ذلك النقر فقط إلى Cloudflare Workers AI بعد Turnstile.',
    faqQ4: 'هل أحتاج صفحة منفصلة لـ ChatGPT مقابل Gemini؟',
    faqA4:
      'لا—نفس النموذج بعنوان مختلف سيكون doorway. الصق الـ prompt المجمّع في ChatGPT أو Gemini أو Claude أو DeepSeek بنفسك؛ الصفحات تذكر المنصات في النص، لا في slug.',
  },
  'text-compare': {
    guideTitle: 'أدوات المقارنة حسب مدخلاتك',
    guideBody:
      'نص عادي مُلصق: Check difference between two texts (text-diff) لسلاسل في الحافظة.\n\n' +
      'ملفان نصيان: Compare two text files online لـ .txt/.md مع diff سطري.\n\n' +
      'Word: Compare two Word documents for differences يستخرج نثر .docx مقروءاً—ليس دمج Track Changes على سطح المكتب.\n\n' +
      'JSON APIs: JSON diff checker online لإضافات/تغييرات/حذف على مستوى المسار—ترتيب المفاتيح مُتجاهل افتراضياً.\n\n' +
      'جداول: Excel compare files لـ diffs خلية بخلية على xlsx/csv—اختر الصفحة التي تطابق الكائن الذي لديك.',
    faqQ4: 'هل صفحة واحدة تقارن JSON وExcel معاً؟',
    faqA4:
      'لا. JSON يحتاج دلالات شجرة/مسار؛ الجداول تحتاج إحداثيات شبكة. إجبار الاثنين في text-diff للصق يخفي البنية—استخدم صفحة JSON أو Excel.',
  },
  'security-ids': {
    guideTitle: 'الأسرار والمعرّفات وفحوص السلامة',
    guideBody:
      'أسرار بشرية: password generator بطول وcharset—انسخ إلى مدير كلمات المرور، لا البريد.\n\n' +
      'معرّفات opaque: UUID generator (v4 عشوائي شائع للمعرّفات العامة).\n\n' +
      'السلامة: file hash للـ checksums على ملفات تعالجها محلياً.\n\n' +
      'الفحص: file metadata analyzer لحقائق الملف الأساسية؛ JWT decoder في dev-data/security عند تصحيح شكل الرمز.\n\n' +
      'خصوصية المستند/الصورة: PDF protect/unlock وEXIF قد يُدرجان هنا عندما المهمة هي الوصول أو إزالة البيانات الوصفية.',
    faqQ4: 'هل UUID v4 يكفي لرموز الجلسة؟',
    faqA4:
      'استخدم مكتبات جلسة معتمدة من المنصة مع توقيع وتدوير مناسبين. UUID مناسب كمفاتيح opaque لقاعدة البيانات؛ ليست مصادقة بذاتها.',
  },
  'files-archives': {
    guideTitle: 'Zip وunzip وextract وفحص magnet',
    guideBody:
      'إنشاء تسليمات: create zip file لتغليف مجلدات modest في المتصفح.\n\n' +
      'فتح أرشيفات موجودة: unzip file أو archive extractor لسرد أو سحب المحتويات—انتبه للذاكرة على أشجار ضخمة.\n\n' +
      'روابط magnet: magnet link decoder لقراءة الاسم المعروض وحقول hash من URI—لا يبدأ التنزيلات.\n\n' +
      'روابط سلامة متقاطعة: file hash وmetadata قد يُدرجان هنا عند التحقق من التنزيلات.',
    faqQ4: 'zip المتصفح مقابل 7-Zip على سطح المكتب للمستودعات الكبيرة؟',
    faqA4:
      'أدوات المتصفح تصطدم بحدود ذاكرة التبويب. استثنِ أشجار node_modules أو قسّم الأرشيفات؛ استخدم archiver أصلي للوظائف multigigabyte أو صيغ ضغط exotic.',
  },
};

/** 葡萄牙语：检索向独立重写 */
BY_LANG.pt = {
  'health-body': {
    guideTitle: 'Qual ferramenta combina com a sua pergunta de saúde',
    guideBody:
      'Rastreio peso/altura: calculadora BMI para rastreio populacional, ou peso ideal quando quer uma faixa-alvo a partir da altura e estrutura.\n\n' +
      'Energia e nutrição: BMR/TDEE estima gasto em repouso e diário; macros reparte proteína, hidratos e gordura após definir meta calórica.\n\n' +
      'Zonas e carga de treino: heart-rate zones para cardio; pace quando tem corrida ou distância recente; one-rep max para programar cargas de barbell a partir de levantamento submáximo.\n\n' +
      'Composição corporal: body fat usa pregas ou método Navy—ignore se não tiver as medidas que a página pede.',
    faqQ4: 'Posso encadear BMI → TDEE → macros numa sessão?',
    faqA4:
      'Sim, como esboço de plano. Use BMI ou peso ideal como contexto, TDEE para orçamento calórico diário e macros para repartir. Recalcule quando peso ou volume de treino mudar; não trate a cadeia como prescrição médica.',
  },
  'personal-money': {
    guideTitle: 'Ferramentas de dinheiro por momento de compra',
    guideBody:
      'Na caixa: tip calculator para contas de serviço; discount para saldos; VAT quando o imposto não está no preço de prateleira.\n\n' +
      'Salário e trabalho: salary↔hourly ao comparar ofertas ou tarifas freelance.\n\n' +
      'Empréstimos: EMI para esboço de prestação fixa; debt payoff para ordem avalanche/snowball com pagamentos extra.\n\n' +
      'Crescimento e poder de compra: compound interest e Rule of 72; present value e CAGR para investimento; inflation para poder real; percent change quando já tem valores antigo e novo.',
    faqQ4: 'Qual ferramenta para recibo de loja vs hipoteca?',
    faqA4:
      'Recibos e checkout começam em tip, discount ou VAT. Hipotecas e crédito auto vão para EMI ou debt payoff com taxa, prazo e taxas do credor—não use ajudas de checkout para empréstimos.',
  },
  'business-finance': {
    guideTitle: 'Fluxo de cálculo de negócios neste site',
    guideBody:
      'Economia unitária: markup vs margin (denominadores diferentes); gross, profit e contribution margin para camadas de P&L; marginal revenue quando preço ou volume muda.\n\n' +
      'Capacidade: break-even para unidades ou receita que cubram custos fixos e variáveis.\n\n' +
      'Alocação de capital: ROI para retorno de campanha ou projeto; NPV e IRR com fluxos no tempo (deixe taxa de desconto explícita); payback period quando pedem “quando o cash volta” sem matizes de desconto.\n\n' +
      'Listagens cruzadas: discount, VAT, compound interest ou present value podem aparecer aqui quando política de preço cruza ferramentas de comprador.',
    faqQ4: 'Por que margin e markup são páginas separadas?',
    faqA4:
      'Respondem a denominadores diferentes. Markup é acréscimo sobre custo; margin é lucro sobre preço de venda. Misturá-los num título causa o erro “50% markup não é 50% margin” em reuniões de pricing.',
  },
  'math-stats': {
    guideTitle: 'Escolha o helper de estatística ou álgebra certo',
    guideBody:
      'Valor típico e dispersão: mean e median para centro; standard deviation para dispersão; z-score ao comparar um valor a uma distribuição.\n\n' +
      'Inferência: p-value e confidence interval quando já escolheu o teste; sample size para planear inquérito ou potência A/B.\n\n' +
      'Contagem e álgebra escolar: permutation/combination; quadratic equation, exponent e logarithm; GPA quando importa política da instituição.\n\n' +
      'Notação de laboratório: scientific notation e significant figures—ferramentas de cinemática em science-physics.',
    faqQ4: 'Começo com mean ou median no meu dataset?',
    faqA4:
      'Se outliers ou assimetria dominam (rendimento, latência, ratings), lidere com median e mostre mean depois. Se a distribuição é simétrica e cada valor conta na fórmula, mean serve—indique qual usou.',
  },
  'geometry-measure': {
    guideTitle: 'Formas, inclinação, ratio e unidades',
    guideBody:
      'Formas nomeadas: triangle area, circle, volume e Pythagorean theorem quando pode rotular lados ou raio.\n\n' +
      'Inclinação e ecrã: slope e gradient para rampas, estradas ou inclinação de telhado; aspect ratio para crops e caixas de layout.\n\n' +
      'Conversão genérica: unit converter para comprimento, massa, temperatura e mais—estimadores DIY (paint, tile, concrete, square feet) em home-diy ao comprar material.',
    faqQ4: 'Volume aqui vs estimador de betão em home-diy?',
    faqA4:
      'Volume aqui é fórmula geométrica (L×W×H ou similar). Estimador de betão converte esse volume em sacos e desperdício. Use geometria primeiro, depois DIY ao encomendar mistura.',
  },
  'science-physics': {
    guideTitle: 'Grandezas de física por capítulo',
    guideBody:
      'Cinemática: velocity e acceleration quando conhece deslocamento, tempo ou taxa de variação.\n\n' +
      'Eletricidade: lei de Ohm para relações V–I–R em problemas de aprendizagem—não para dimensionar cablagem doméstica sozinha.\n\n' +
      'Materiais: density a partir de massa e volume.\n\n' +
      'Campos: magnetic-field helper para leituras tipo sensor— calibre contra referência conhecida antes de decisões de segurança.\n\n' +
      'Ligações cruzadas: scientific notation e significant figures são primários em math-stats com listagens secundárias em física.',
    faqQ4: 'Quando mudar para ferramentas de notação em math-stats?',
    faqA4:
      'Quando a tarefa é formatar ou arredondar uma medição—não resolver identidade física. Use páginas de física quando o desconhecido é grandeza física (força, velocidade, resistência).',
  },
  'home-diy': {
    guideTitle: 'Estimadores de divisão e material',
    guideBody:
      'Base de área: square feet quando mistura pés e polegadas ou precisa de área de divisão antes do material.\n\n' +
      'Cobertura de superfície: paint para paredes/tetos com demãos; tile para chão/parede mais desperdício; concrete para volume de forma e sacos.\n\n' +
      'Sobreposição com geometria: volume ou unit converter podem listar aqui quando o trabalho precisa de forma e compra de material.',
    faqQ4: 'Medir dimensões interiores ou exteriores para azulejo?',
    faqA4:
      'Meça a superfície acabada a cobrir (folga para rodapé e louças). Some desperdício de padrão após área líquida—layouts diagonais exigem mais corte que filas rectas.',
  },
  'time-calendar': {
    guideTitle: 'Idade, intervalos, fusos e tempo epoch',
    guideBody:
      'Datas humanas: age para anos de aniversário; date difference para projetos ou reservas—diga se precisa de dias de calendário ou contagens exactas de 24 h.\n\n' +
      'Reuniões entre regiões: timezone converter com ID IANA, não só alcunha de cidade.\n\n' +
      'Logs de engenharia: Unix timestamp para segundos vs milissegundos em APIs e linhas de log.\n\n' +
      'Cruzado: pace em health-body usa tempo sobre distância; timezone e Unix também listam em dev-data ao depurar código.',
    faqQ4: 'Por que a minha idade mudou um dia antes do aniversário?',
    faqA4:
      'Age conta anos completos num fuso horário. UTC vs meia-noite local pode deslocar o limite—escolha o fuso que corresponde ao contexto legal ou pessoal que lhe importa.',
  },
  'pdf-docs': {
    guideTitle: 'Tarefas PDF por ordem sensata',
    guideBody:
      'Estrutura primeiro: merge, split, organize, rotate e números de página quando ordem ou orientação falham.\n\n' +
      'Tamanho e enquadramento: compress quando limites de email ou upload apertam; crop quando margens ou bleed precisam de corte.\n\n' +
      'Controlo de acesso: protect para password que controla; unlock só em ficheiros que possui legitimamente.\n\n' +
      'Exportação: PDF to Markdown para pipelines docs/git; PDF to JPG ou tamanhos por página para specs raster; watermark para rascunhos.\n\n' +
      'Lotes a partir de imagem (images to PDF/PPT/Word) vivem primariamente em image-media com listagens secundárias aqui.',
    faqQ4: 'Merge antes ou depois de compress?',
    faqA4:
      'Normalmente merge à ordem final de páginas primeiro, depois compress uma vez no ficheiro combinado para rever paginação em qualidade plena. Guarde cópia não comprimida até confirmação dos destinatários.',
  },
  'image-media': {
    guideTitle: 'Fluxos de imagem agrupados por entrega',
    guideBody:
      'Specs de plataforma: YouTube thumbnail, Instagram post/story, LinkedIn banner, Open Graph, Amazon main image, ícones e capturas App Store—quando precisa de pixels e zonas seguras, não crop arbitrário.\n\n' +
      'Transformação e peso: compress e optimizer para bytes na rede; crop, flip, border, grayscale e format converter para mudanças visuais; SVG optimizer para peso vectorial.\n\n' +
      'Compor e animar: merge, overlay, images-to-GIF, add watermark para atribuição.\n\n' +
      'Metadados e privacidade: EXIF viewer/stripper antes de partilha pública; color-from-image ao explorar paletas (brand tokens fecham em design-brand).\n\n' +
      'Export documental: images to PDF/PPT/Word quando o entregável é pacote office—edições centradas em PDF ficam em pdf-docs.',
    faqQ4: 'Compress, optimizer ou format converter primeiro?',
    faqA4:
      'Converta formato primeiro se o canal exige JPEG/PNG/WebP. Depois compress/optimizer para orçamento de bytes. Crop antes de compress quando enquadramento remove áreas grandes não usadas.',
  },
  'design-brand': {
    guideTitle: 'Sistemas de cor da revisão à entrega',
    guideBody:
      'Porta de acessibilidade: WCAG contrast checker para pares texto/UI contra limiares AA ou AAA.\n\n' +
      'Direção de paleta: smart website color scheme para conjunto coerente claro/escuro a partir de cor seed de marca.\n\n' +
      'Export de tokens: brand color token pack para variáveis CSS ou design tokens; brand style guide quando documenta papéis (surface, accent, text).\n\n' +
      'Inspiração upstream: extraia cores de fotos em image-media, depois fixe tokens acessíveis aqui.',
    faqQ4: 'Passou contraste—acabei com acessibilidade?',
    faqA4:
      'Não. Contraste é necessário mas não suficiente—tamanho e peso de fonte, estados de foco e pistas não cromáticas ainda importam. Teste fluxos críticos com utilizadores; ferramentas de contraste apanham falhas de luminância, não toda barreira cognitiva.',
  },
  'seo-growth': {
    guideTitle: 'Etapas do fluxo SEO neste site',
    guideBody:
      'Snippet: meta tag generator e SERP preview para títulos/descrições; Open Graph preview para cartões sociais.\n\n' +
      'Superfície técnica: geradores robots.txt e sitemap XML; hreflang generator para clusters de locale; schema JSON-LD quando copy visível já suporta o tipo.\n\n' +
      'Rastreio e qualidade: IndexNow após publicações substantivas; on-page SEO checker para auditoria rápida; Core Web Vitals checker quando LCP/INP/CLS precisam de snapshot de laboratório.\n\n' +
      'Campanhas e desbloqueio: UTM builder para links etiquetados; website headers ou add-www-to-dns em network-ip quando rastreio é mesmo DNS/TLS/headers.',
    faqQ4: 'Que ordem após publicar nova página de ferramenta?',
    faqA4:
      'Confirme copy indexável e canonical/hreflang, actualize sitemap, opcionalmente ping IndexNow, depois verifique SERP/OG previews. Ranking não é garantido—trate ferramentas como apoio à decisão, não manipulação de posição.',
  },
  'network-ip': {
    guideTitle: 'Camadas de rede: IP, DNS, HTTP, CIDR',
    guideBody:
      'Identidade de saída: public IP mostra o que o nosso edge vê—útil atrás de VPN ou NAT de operador.\n\n' +
      'Resolução de nomes: domain lookup para registos; add-www-to-dns quando a questão é routing apex/www.\n\n' +
      'Comportamento HTTP: website headers para pistas de cache, segurança e redirect em URLs que pode testar.\n\n' +
      'Planeamento de endereços: CIDR cheat sheet e ranges privados; conversores CIDR↔range; IPv6 CIDR; Terraform cidrsubnet e AWS VPC planner ao desenhar prefixos cloud.\n\n' +
      'Use só em sistemas que está autorizado a testar.',
    faqQ4: 'Calculadora CIDR vs Terraform cidrsubnet—qual primeiro?',
    faqA4:
      'Comece com CIDR↔range ou cheat sheet para validar tamanho de prefixo e contagem de hosts. Abra Terraform cidrsubnet quando já conhece prefixo pai e precisa de matemática de índice aninhado para módulos.',
  },
  'dev-data': {
    guideTitle: 'Transformações de developer por tipo de payload',
    guideBody:
      'Codificação de transporte: Base64 e HTML entity encode/decode para canais de texto seguros.\n\n' +
      'Dados estruturados: YAML↔JSON e CSV↔JSON para pontes config/tabular; JSON Schema validator para forma—não regras de negócio.\n\n' +
      'Debug de tokens e HTTP: JWT decoder para inspecção de claims em amostras permitidas; curl-to-fetch ao reescrever exemplos shell para fetch().\n\n' +
      'Pipelines de docs: Markdown↔HTML e ChatGPT export to Markdown para repos de conteúdo.\n\n' +
      'Compare e tempo (text diff, JSON diff, file compare, Excel compare, timezone, Unix) vivem primariamente em text-compare ou time-calendar com listagens secundárias em dev-data.',
    faqQ4: 'Validar JSON Schema antes ou depois de diff de dois JSON?',
    faqA4:
      'Valide cada documento contra o schema primeiro se lhe importa forma de contrato. Depois diff para ver mudanças semânticas. Diff sozinho não diz qual lado violou o schema.',
  },
  'ai-prompt-template-builder': {
    guideTitle: 'Builders de prompt por artefacto que precisa',
    guideBody:
      'Templates reutilizáveis: Prompt template builder com Role/Task/Constraints/Output e chips de cena (writing, web, copilot, mobile).\n\n' +
      'Ficção: Writing prompt generator para diálogo, personagem, guião ou arranques aleatórios.\n\n' +
      'Prompts visuais: Midjourney prompt builder para parâmetros de imagem; Sketch prompt generator para line-art e composição.\n\n' +
      'Vídeo longo: Film prompt builder para logline e três actos; Short drama prompt generator para ganchos de serial vertical.\n\n' +
      'Produto e agentes móveis: Product design prompt builder para briefs UX; Android e iOS prompt builders para specs de agente Kotlin/Compose ou Swift/SwiftUI.\n\n' +
      'Build/Roll local no dispositivo; Expand/Polish envia só o texto desse clique para Cloudflare Workers AI após Turnstile.',
    faqQ4: 'Preciso de página separada para ChatGPT vs Gemini?',
    faqA4:
      'Não—mesmo formulário com título trocado seria doorway. Cole o prompt montado em ChatGPT, Gemini, Claude ou DeepSeek você mesmo; páginas nomeiam plataformas no copy, não no slug.',
  },
  'text-compare': {
    guideTitle: 'Ferramentas de comparação conforme os seus inputs',
    guideBody:
      'Texto plano colado: Check difference between two texts (text-diff) para strings já na área de transferência.\n\n' +
      'Dois ficheiros de texto: Compare two text files online para .txt/.md com diff por linhas.\n\n' +
      'Word: Compare two Word documents for differences extrai prosa legível de .docx—não fusão Track Changes de desktop.\n\n' +
      'APIs JSON: JSON diff checker online para adds/changes/deletes a nível de path—ordem de chaves ignorada por defeito.\n\n' +
      'Folhas: Excel compare files para diffs célula a célula em xlsx/csv—escolha a página que corresponde ao objecto que já tem.',
    faqQ4: 'Uma página pode diff JSON e Excel juntos?',
    faqA4:
      'Não. JSON precisa semântica árvore/path; folhas precisam coordenadas de grelha. Forçar ambos num text-diff de colagem esconde estrutura—use página JSON ou Excel.',
  },
  'security-ids': {
    guideTitle: 'Segredos, identificadores e integridade',
    guideBody:
      'Segredos humanos: password generator com comprimento e charset—copie para gestor de passwords, não email.\n\n' +
      'IDs opacos: UUID generator (v4 aleatório é comum para identificadores públicos).\n\n' +
      'Integridade: file hash para checksums em ficheiros que processa localmente.\n\n' +
      'Inspecção: file metadata analyzer para factos básicos; JWT decoder lista em dev-data/security ao depurar forma de token.\n\n' +
      'Privacidade documento/foto: PDF protect/unlock e EXIF podem listar aqui quando o trabalho é acesso ou remover metadados.',
    faqQ4: 'UUID v4 basta para tokens de sessão?',
    faqA4:
      'Use bibliotecas de sessão validadas pela plataforma com assinatura e rotação adequadas. UUID serve como chaves opacas de base de dados; não são autenticação por si só.',
  },
  'files-archives': {
    guideTitle: 'Zip, unzip, extract e inspecção magnet',
    guideBody:
      'Criar entregas: create zip file para embalagem modesta de pastas no browser.\n\n' +
      'Abrir arquivos existentes: unzip file ou archive extractor para listar ou extrair—cuidado com memória em árvores enormes.\n\n' +
      'Links magnet: magnet link decoder lê nome visível e campos hash de URI—não inicia downloads.\n\n' +
      'Ligações cruzadas de integridade: file hash e metadata podem listar aqui ao verificar downloads.',
    faqQ4: 'Zip no browser vs 7-Zip desktop para repos grandes?',
    faqA4:
      'Ferramentas de browser batem em limites de memória de separador. Exclua árvores tipo node_modules ou divida arquivos; use archiver nativo para trabalhos multigigabyte ou formatos exóticos.',
  },
};

/** 印尼语：检索向独立重写 */
BY_LANG.id = {
  'health-body': {
    guideTitle: 'Alat mana yang cocok untuk pertanyaan kesehatan Anda',
    guideBody:
      'Skrining berat/tinggi: kalkulator BMI untuk skrining populasi, atau ideal weight jika Anda ingin target band dari tinggi dan kerangka tubuh.\n\n' +
      'Energi dan nutrisi: BMR/TDEE memperkirakan bakar istirahat dan harian; macros membagi protein, karbohidrat, dan lemak setelah target kalori ditetapkan.\n\n' +
      'Zona latihan dan beban: heart-rate zones untuk target kardio; pace jika Anda punya lomba atau jarak lari terbaru; one-rep max untuk memprogram beban barbell dari angkat submaksimal.\n\n' +
      'Komposisi tubuh: body fat memakai skinfold atau input Navy—lewati jika tidak punya pengukuran yang diminta halaman.',
    faqQ4: 'Bisa rangkai BMI → TDEE → macros dalam satu sesi?',
    faqA4:
      'Ya, sebagai sketsa perencanaan. Pakai BMI atau ideal weight untuk konteks, TDEE untuk anggaran kalori harian, lalu macros untuk membagi. Hitung ulang saat berat atau volume latihan berubah; jangan anggap rangkaian ini resep medis.',
  },
  'personal-money': {
    guideTitle: 'Alat uang sehari-hari menurut momen checkout',
    guideBody:
      'Di kasir: tip calculator untuk tagihan layanan; discount untuk harga obral; VAT saat pajak tidak termasuk harga rak.\n\n' +
      'Gaji dan kerja: salary↔hourly saat membandingkan tawaran kerja atau tarif freelance.\n\n' +
      'Pinjaman: EMI untuk sketsa cicilan tetap; debt payoff jika ingin urutan avalanche/snowball dengan pembayaran ekstra.\n\n' +
      'Pertumbuhan dan daya beli: compound interest dan Rule of 72; present value dan CAGR untuk bingkai investasi; inflation untuk daya beli riil; percent change saat sudah punya jumlah lama dan baru.',
    faqQ4: 'Alat mana untuk struk toko vs KPR?',
    faqA4:
      'Struk dan matematika checkout biasanya mulai dari tip, discount, atau VAT. KPR dan kredit mobil masuk EMI atau debt payoff dengan suku bunga, tenor, dan biaya dari pemberi pinjaman—jangan pakai helper checkout untuk pinjaman.',
  },
  'business-finance': {
    guideTitle: 'Alur hitung bisnis di situs ini',
    guideBody:
      'Ekonomi unit: markup vs margin (penyebut berbeda); gross, profit, dan contribution margin untuk lapisan P&L; marginal revenue saat harga atau volume bergerak.\n\n' +
      'Kapasitas: break-even untuk unit atau pendapatan menutup biaya tetap dan variabel.\n\n' +
      'Alokasi modal: ROI untuk return kampanye atau proyek; NPV dan IRR saat arus kas melintasi waktu (jelaskan discount rate); payback period saat leadership tanya “seberapa cepat cash kembali” tanpa nuansa diskonto.\n\n' +
      'Listing silang: discount, VAT, compound interest, atau present value bisa muncul di sini saat kebijakan harga tumpang tindih dengan alat shopper.',
    faqQ4: 'Mengapa margin dan markup halaman terpisah?',
    faqA4:
      'Karena penyebutnya beda. Markup kenaikan atas biaya; margin laba atas harga jual. Mencampurnya di headline sering bikin error “50% markup bukan 50% margin” di rapat pricing.',
  },
  'math-stats': {
    guideTitle: 'Pilih helper statistik atau aljabar yang Anda butuhkan',
    guideBody:
      'Nilai tipikal dan sebaran: mean dan median untuk pusat; standard deviation untuk dispersi; z-score saat membandingkan satu nilai ke distribusi.\n\n' +
      'Inferensi: p-value dan confidence interval setelah uji dipilih; sample size untuk merencanakan survei atau daya A/B.\n\n' +
      'Menghitung dan aljabar sekolah: permutation/combination; quadratic equation, exponent, dan logarithm; GPA saat kebijakan institusi penting.\n\n' +
      'Notasi lab: scientific notation dan significant figures—alat kinematik ada di science-physics.',
    faqQ4: 'Mulai dengan mean atau median untuk dataset saya?',
    faqA4:
      'Jika outlier atau skew dominan (pendapatan, latensi, rating), utamakan median lalu tampilkan mean. Jika distribusi simetris dan setiap nilai penting untuk rumus, mean oke—sebutkan yang Anda pakai.',
  },
  'geometry-measure': {
    guideTitle: 'Bentuk, kemiringan, rasio, dan satuan',
    guideBody:
      'Bentuk bernama: triangle area, circle, volume, dan Pythagorean theorem saat Anda bisa label sisi atau radius.\n\n' +
      'Kemiringan dan layar: slope dan gradient untuk tanjakan, jalan, atau sudut atap; aspect ratio untuk crop dan kotak layout.\n\n' +
      'Konversi generik: unit converter untuk panjang, massa, suhu, dan lainnya—estimator material DIY (paint, tile, concrete, square feet) di home-diy saat beli bahan.',
    faqQ4: 'Volume di sini vs estimator beton di home-diy?',
    faqA4:
      'Volume di sini rumus geometri (L×W×H atau sejenis). Estimator beton mengubah volume jadi karung dan waste. Pakai geometri dulu, lalu DIY saat pesan adukan.',
  },
  'science-physics': {
    guideTitle: 'Besaran fisika per bab',
    guideBody:
      'Kinematika: velocity dan acceleration saat Anda tahu perpindahan, waktu, atau laju perubahan.\n\n' +
      'Listrik: hukum Ohm untuk relasi V–I–R di soal belajar—bukan untuk menentukan kabel rumah saja.\n\n' +
      'Material: density dari massa dan volume.\n\n' +
      'Medan: magnetic-field helper untuk bacaan gaya sensor—kalibrasi ke referensi known sebelum keputusan safety.\n\n' +
      'Tautan silang: scientific notation dan significant figures utama di math-stats dengan listing sekunder di fisika.',
    faqQ4: 'Kapan pindah ke alat notasi di math-stats?',
    faqA4:
      'Saat tugasnya memformat atau membulatkan pengukuran—bukan menyelesaikan identitas fisika. Pakai halaman fisika saat yang dicari besaran fisik (gaya, kecepatan, resistansi).',
  },
  'home-diy': {
    guideTitle: 'Estimator ruangan dan material',
    guideBody:
      'Baseline area: square feet saat rencana campur kaki dan inci atau butuh area ruang sebelum hitung material.\n\n' +
      'Cakupan permukaan: paint untuk dinding/plafon dengan lapisan; tile untuk lantai/dinding plus waste; concrete untuk volume bekisting dan jumlah karung.\n\n' +
      'Overlap geometri: volume atau unit converter bisa listing di sini saat pekerjaan butuh hitung bentuk dan rencana beli material.',
    faqQ4: 'Ukur dimensi dalam atau luar untuk keramik?',
    faqA4:
      'Ukur permukaan jadi yang akan ditutup (clearance untuk trim dan fixture). Tambah waste pola setelah area net—layout diagonal butuh waste potong lebih dari susunan lurus.',
  },
  'time-calendar': {
    guideTitle: 'Usia, rentang, zona waktu, dan waktu epoch',
    guideBody:
      'Tanggal manusia: age untuk tahun berdasarkan ulang tahun; date difference untuk proyek atau booking—jelaskan butuh hari kalender atau hitungan 24 jam persis.\n\n' +
      'Rapat lintas wilayah: timezone converter dengan ID IANA, bukan hanya julukan kota.\n\n' +
      'Log engineering: Unix timestamp untuk detik vs milidetik di API dan baris log.\n\n' +
      'Silang topik: pace di health-body memakai waktu per jarak; timezone dan Unix juga listing di dev-data saat debug kode.',
    faqQ4: 'Mengapa usia saya berubah sehari sebelum ulang tahun?',
    faqA4:
      'Age menghitung tahun selesai dalam zona waktu. UTC vs tengah malam lokal bisa geser batas—pilih zona yang cocok dengan konteks legal atau pribadi Anda.',
  },
  'pdf-docs': {
    guideTitle: 'Urutan pekerjaan PDF yang masuk akal',
    guideBody:
      'Struktur dulu: merge, split, organize, rotate, dan nomor halaman saat urutan atau orientasi salah.\n\n' +
      'Ukuran dan bingkai: compress saat limit email atau upload; crop saat margin atau bleed perlu dipangkas.\n\n' +
      'Kontrol akses: protect untuk password yang Anda kendalikan; unlock hanya untuk file yang sah Anda miliki.\n\n' +
      'Ekspor: PDF to Markdown untuk pipeline docs/git; PDF to JPG atau ukuran halaman untuk spes raster; watermark untuk tandai draft.\n\n' +
      'Batch dari gambar (images to PDF/PPT/Word) utama di image-media dengan listing sekunder di sini.',
    faqQ4: 'Merge dulu atau compress?',
    faqA4:
      'Biasanya merge ke urutan halaman final dulu, lalu compress sekali pada file gabungan agar preview paginasi kualitas penuh. Simpan backup uncompressed sampai penerima konfirmasi.',
  },
  'image-media': {
    guideTitle: 'Alur gambar dikelompokkan menurut pekerjaan deliver',
    guideBody:
      'Spes platform: YouTube thumbnail, Instagram post/story, LinkedIn banner, Open Graph, Amazon main image, ikon dan screenshot App Store—pakai saat butuh pixel dan safe zone, bukan crop sembarang.\n\n' +
      'Transformasi dan berat: compress dan optimizer untuk byte di wire; crop, flip, border, grayscale, dan format converter untuk perubahan visual; SVG optimizer untuk berat vektor.\n\n' +
      'Komposisi dan animasi: merge, overlay, images-to-GIF, add watermark untuk atribusi.\n\n' +
      'Metadata dan privasi: EXIF viewer/stripper sebelum share publik; color-from-image saat eksplor palet (brand token final di design-brand).\n\n' +
      'Ekspor dokumen: images to PDF/PPT/Word saat deliverable paket office—edit PDF-centric tetap di pdf-docs.',
    faqQ4: 'Compress, optimizer, atau format converter dulu?',
    faqA4:
      'Konversi format dulu jika channel target wajib JPEG/PNG/WebP. Lalu compress/optimizer untuk anggaran byte. Crop sebelum compress jika framing menghapus area besar yang tidak terpakai.',
  },
  'design-brand': {
    guideTitle: 'Sistem warna dari cek hingga handoff',
    guideBody:
      'Gerbang aksesibilitas: WCAG contrast checker untuk pasangan teks/UI terhadap ambang AA atau AAA.\n\n' +
      'Arah palet: smart website color scheme untuk set light/dark koheren dari seed brand color.\n\n' +
      'Ekspor token: brand color token pack untuk variabel CSS atau design token; brand style guide saat perlu peran terdokumentasi (surface, accent, text).\n\n' +
      'Inspirasi upstream: ekstrak warna dari foto di image-media, lalu kunci token accessible di sini.',
    faqQ4: 'Kontras lulus—saya sudah selesai soal aksesibilitas?',
    faqA4:
      'Belum. Kontras perlu tapi tidak cukup—ukuran font, berat, focus state, dan isyarat non-warna tetap penting. Uji alur kritis dengan pengguna; alat kontras menangkap kegagalan luminance, bukan semua hambatan kognitif.',
  },
  'seo-growth': {
    guideTitle: 'Tahap alur SEO di situs ini',
    guideBody:
      'Snippet: meta tag generator dan SERP preview untuk title/deskripsi; Open Graph preview untuk kartu sosial.\n\n' +
      'Permukaan teknis: generator robots.txt dan sitemap XML; hreflang generator untuk kluster locale; schema JSON-LD saat copy visible sudah mendukung tipe.\n\n' +
      'Crawl dan sinyal kualitas: IndexNow setelah publish bermakna; on-page SEO checker untuk audit cepat; Core Web Vitals checker saat LCP/INP/CLS butuh snapshot lab.\n\n' +
      'Kampanye dan unblock: UTM builder untuk link bertag; website headers atau add-www-to-dns di network-ip saat masalah crawl sebenarnya DNS/TLS/header.',
    faqQ4: 'Urutan apa setelah publish halaman alat baru?',
    faqA4:
      'Konfirmasi copy indexable dan canonical/hreflang, update sitemap, opsional ping IndexNow, lalu spot-check SERP/OG preview. Ranking tidak dijamin—perlakukan alat sebagai dukungan keputusan, bukan manipulasi peringkat.',
  },
  'network-ip': {
    guideTitle: 'Lapisan jaringan: IP, DNS, HTTP, CIDR',
    guideBody:
      'Identitas egress: public IP menunjukkan apa yang edge kami lihat—berguna di belakang VPN atau carrier NAT.\n\n' +
      'Resolusi nama: domain lookup untuk record; add-www-to-dns saat pertanyaannya routing apex/www.\n\n' +
      'Perilaku HTTP: website headers untuk petunjuk cache, keamanan, dan redirect pada URL yang bisa Anda uji.\n\n' +
      'Perencanaan alamat: CIDR cheat sheet dan private range; konverter CIDR↔range; IPv6 CIDR; Terraform cidrsubnet dan AWS VPC planner saat desain prefix cloud.\n\n' +
      'Pakai hanya pada sistem yang Anda berwenang uji.',
    faqQ4: 'Kalkulator CIDR vs Terraform cidrsubnet—mana dulu?',
    faqA4:
      'Mulai dengan CIDR↔range atau cheat sheet untuk sanity-check ukuran prefix dan jumlah host. Buka Terraform cidrsubnet saat sudah tahu parent prefix dan butuh matematika indeks nested untuk modul.',
  },
  'dev-data': {
    guideTitle: 'Transform developer menurut tipe payload',
    guideBody:
      'Encoding transport: Base64 dan HTML entity encode/decode untuk saluran teks aman.\n\n' +
      'Data terstruktur: YAML↔JSON dan CSV↔JSON untuk jembatan config/tabular; JSON Schema validator untuk cek bentuk—bukan aturan bisnis.\n\n' +
      'Debug token dan HTTP: JWT decoder untuk inspeksi claim pada sampel yang boleh Anda lihat; curl-to-fetch saat menulis ulang contoh shell ke fetch().\n\n' +
      'Pipeline docs: Markdown↔HTML dan ChatGPT export to Markdown untuk repo konten.\n\n' +
      'Alat compare dan waktu (text diff, JSON diff, file compare, Excel compare, timezone, Unix) utama di text-compare atau time-calendar dengan listing sekunder di dev-data.',
    faqQ4: 'Validasi JSON Schema sebelum atau sesudah diff dua file JSON?',
    faqA4:
      'Validasi tiap dokumen terhadap schema dulu jika Anda peduli bentuk kontrak. Lalu diff untuk lihat perubahan semantik. Diff saja tidak memberi tahu sisi mana yang melanggar schema.',
  },
  'ai-prompt-template-builder': {
    guideTitle: 'Builder prompt menurut artefak yang Anda butuhkan',
    guideBody:
      'Template reusable: Prompt template builder untuk Role/Task/Constraints/Output dengan chip scene (writing, web, copilot, mobile).\n\n' +
      'Fiksi: Writing prompt generator untuk dialog, karakter, skrip, atau starter acak.\n\n' +
      'Prompt visual: Midjourney prompt builder untuk parameter gambar; Sketch prompt generator untuk line-art dan kontrol komposisi.\n\n' +
      'Video panjang: Film prompt builder untuk logline dan tiga babak; Short drama prompt generator untuk hook serial vertikal.\n\n' +
      'Produk dan agent mobile: Product design prompt builder untuk brief UX; Android dan iOS prompt builder untuk spes agent Kotlin/Compose atau Swift/SwiftUI.\n\n' +
      'Build/Roll lokal di perangkat; Expand/Polish mengirim hanya teks klik itu ke Cloudflare Workers AI setelah Turnstile.',
    faqQ4: 'Perlu halaman terpisah untuk ChatGPT vs Gemini?',
    faqA4:
      'Tidak—form sama dengan title diganti adalah doorway. Tempel prompt yang dirakit ke ChatGPT, Gemini, Claude, atau DeepSeek sendiri; halaman menyebut platform di copy, bukan di slug.',
  },
  'text-compare': {
    guideTitle: 'Alat compare sesuai input Anda',
    guideBody:
      'Teks plain tempel: Check difference between two texts (text-diff) untuk string di clipboard.\n\n' +
      'Dua file teks: Compare two text files online untuk upload .txt/.md dengan diff per baris.\n\n' +
      'Word: Compare two Word documents for differences mengekstrak prosa .docx yang terbaca—bukan merge Track Changes desktop.\n\n' +
      'API JSON: JSON diff checker online untuk add/change/delete level path—urutan key diabaikan secara default.\n\n' +
      'Spreadsheet: Excel compare files untuk diff sel demi sel pada xlsx/csv—pilih halaman yang cocok dengan objek yang sudah Anda punya.',
    faqQ4: 'Satu halaman bisa diff JSON dan Excel sekaligus?',
    faqA4:
      'Tidak. JSON butuh semantik tree/path; spreadsheet butuh koordinat grid. Memaksa keduanya ke text-diff paste-only menyembunyikan struktur—pakai halaman JSON atau Excel.',
  },
  'security-ids': {
    guideTitle: 'Rahasia, identifier, dan cek integritas',
    guideBody:
      'Rahasia manusia: password generator dengan kontrol panjang dan charset—salin ke password manager, bukan email.\n\n' +
      'ID opaque: UUID generator (v4 random umum untuk identifier publik).\n\n' +
      'Integritas: file hash untuk checksum pada file yang Anda proses lokal.\n\n' +
      'Inspeksi: file metadata analyzer untuk fakta file dasar; JWT decoder listing di dev-data/security saat debug bentuk token.\n\n' +
      'Privasi dokumen/foto: PDF protect/unlock dan EXIF bisa listing di sini saat pekerjaannya akses atau strip metadata.',
    faqQ4: 'Apakah UUID v4 cukup untuk session token?',
    faqA4:
      'Pakai library session yang disetujui platform dengan signing dan rotasi proper. UUID cocok sebagai kunci database opaque; bukan autentikasi sendiri.',
  },
  'files-archives': {
    guideTitle: 'Zip, unzip, extract, dan inspeksi magnet',
    guideBody:
      'Buat handoff: create zip file untuk packaging folder modest di browser.\n\n' +
      'Buka arsip existing: unzip file atau archive extractor untuk list atau tarik isi—waspada memori pada pohon besar.\n\n' +
      'Link magnet: magnet link decoder untuk baca display name dan field hash dari URI—tidak memulai download.\n\n' +
      'Tautan integritas silang: file hash dan metadata bisa listing di sini saat verifikasi download.',
    faqQ4: 'Zip browser vs 7-Zip desktop untuk repo besar?',
    faqA4:
      'Alat browser kena limit memori tab. Kecualikan pohon skala node_modules atau split arsip; pakai archiver native untuk pekerjaan multigigabyte atau format kompresi exotic.',
  },
};

/** 法语：检索向独立重写 */
BY_LANG.fr = {
  'health-body': {
    guideTitle: 'Quel outil correspond à votre question santé',
    guideBody:
      'Dépistage poids/taille : calculateur BMI pour un ratio populationnel, ou poids ideal si vous voulez une fourchette cible selon taille et morphologie.\n\n' +
      'Énergie et nutrition : BMR/TDEE estime la dépense au repos et quotidienne ; macros répartit protéines, glucides et lipides une fois la cible calorique fixée.\n\n' +
      'Zones et charge d’entraînement : heart-rate zones pour le cardio ; pace si vous avez une course ou distance récente ; one-rep max pour programmer des charges barbell à partir d’une levée submaximale.\n\n' +
      'Composition corporelle : body fat utilise plis cutanés ou méthode Navy—passez si vous n’avez pas les mesures demandées par la page.',
    faqQ4: 'Puis-je enchaîner BMI → TDEE → macros en une session ?',
    faqA4:
      'Oui, comme ébauche de plan. Utilisez BMI ou poids ideal pour le contexte, TDEE pour le budget calorique journalier, puis macros pour le répartir. Recalculez si le poids ou le volume d’entraînement change ; ne traitez pas la chaîne comme une prescription médicale.',
  },
  'personal-money': {
    guideTitle: 'Outils argent du quotidien par moment de paiement',
    guideBody:
      'À la caisse : tip calculator pour l’addition ; discount pour les soldes ; VAT quand la taxe n’est pas incluse au prix affiché.\n\n' +
      'Salaire et travail : salary↔hourly pour comparer offres ou tarifs freelance.\n\n' +
      'Emprunt : EMI pour un croquis de mensualité fixe ; debt payoff pour ordre avalanche/snowball avec paiements supplémentaires.\n\n' +
      'Croissance et pouvoir d’achat : compound interest et Rule of 72 ; present value et CAGR pour cadrer l’investissement ; inflation pour le pouvoir d’achat réel ; percent change quand vous avez déjà montants ancien et nouveau.',
    faqQ4: 'Quel outil pour un ticket de caisse vs un crédit immobilier ?',
    faqA4:
      'Tickets et calculs de caisse commencent en général par tip, discount ou VAT. Crédits immo et auto vont sur EMI ou debt payoff avec taux, durée et frais du prêteur—n’utilisez pas les aides caisse pour un prêt.',
  },
  'business-finance': {
    guideTitle: 'Parcours de calcul deal sur ce site',
    guideBody:
      'Économie unitaire : markup vs margin (dénominateurs différents) ; gross, profit et contribution margin pour couches de P&L ; marginal revenue quand prix ou volume bouge.\n\n' +
      'Capacité : break-even pour unités ou revenus couvrant coûts fixes et variables.\n\n' +
      'Allocation de capital : ROI pour retour campagne ou projet ; NPV et IRR quand les flux s’étalent dans le temps (taux d’actualisation explicite) ; payback period quand on demande « quand le cash revient » sans nuance d’actualisation.\n\n' +
      'Listes croisées : discount, VAT, compound interest ou present value peuvent apparaître ici quand la politique prix chevauche les outils shopper.',
    faqQ4: 'Pourquoi margin et markup sont des pages séparées ?',
    faqA4:
      'Ils répondent à des dénominateurs différents. Markup est la majoration sur coût ; margin est la marge sur prix de vente. Les mélanger dans un titre provoque l’erreur « 50 % markup ≠ 50 % margin » en réunion pricing.',
  },
  'math-stats': {
    guideTitle: 'Choisissez l’helper statistique ou algèbre dont vous avez besoin',
    guideBody:
      'Valeur typique et dispersion : mean et median pour le centre ; standard deviation pour la dispersion ; z-score pour comparer une valeur à une distribution.\n\n' +
      'Inférence : p-value et confidence interval une fois le test choisi ; sample size pour planifier enquête ou puissance A/B.\n\n' +
      'Dénombrement et algèbre scolaire : permutation/combination ; quadratic equation, exponent et logarithm ; GPA quand la politique de l’établissement compte.\n\n' +
      'Notation labo : scientific notation et significant figures—outils cinématique sous science-physics.',
    faqQ4: 'Commencer par mean ou median pour mon jeu de données ?',
    faqA4:
      'Si outliers ou asymétrie dominent (revenus, latence, notes), menez avec median et montrez mean ensuite. Si la distribution est symétrique et chaque valeur compte dans la formule, mean convient—indiquez lequel vous avez utilisé.',
  },
  'geometry-measure': {
    guideTitle: 'Formes, pente, ratio et unités',
    guideBody:
      'Formes nommées : triangle area, circle, volume et Pythagorean theorem quand vous pouvez labelliser côtés ou rayon.\n\n' +
      'Pente et écran : slope et gradient pour rampes, routes ou inclinaison de toit ; aspect ratio pour recadrages et blocs de mise en page.\n\n' +
      'Conversion générique : unit converter pour longueur, masse, température, etc.—estimateurs matériaux DIY (paint, tile, concrete, square feet) sous home-diy pour acheter les fournitures.',
    faqQ4: 'Volume ici vs estimateur béton dans home-diy ?',
    faqA4:
      'Volume ici est la formule géométrique (L×W×H ou similaire). L’estimateur béton convertit ce volume en sacs et perte. Géométrie d’abord, puis DIY pour commander le mélange.',
  },
  'science-physics': {
    guideTitle: 'Grandeurs physiques par chapitre',
    guideBody:
      'Cinématique : velocity et acceleration quand vous connaissez déplacement, temps ou taux de variation.\n\n' +
      'Électricité : loi d’Ohm pour relations V–I–R en exercices d’apprentissage—pas pour dimensionner seul le câblage domestique.\n\n' +
      'Matériaux : density à partir masse et volume.\n\n' +
      'Champs : magnetic-field helper pour lectures type capteur—étalonnez contre une référence connue avant décisions de sécurité.\n\n' +
      'Liens croisés : scientific notation et significant figures sont primaires sous math-stats avec listes secondaires en physique.',
    faqQ4: 'Quand passer aux outils de notation math-stats ?',
    faqA4:
      'Quand la tâche est de formater ou arrondir une mesure—pas de résoudre une identité physique. Utilisez les pages physique quand l’inconnue est une grandeur physique (force, vitesse, résistance).',
  },
  'home-diy': {
    guideTitle: 'Estimateurs pièce et matériaux',
    guideBody:
      'Base surface : square feet quand les plans mélangent pieds et pouces ou qu’il faut la surface avant le calcul matériau.\n\n' +
      'Couverture : paint pour murs/plafonds avec couches ; tile pour sol/mur plus perte ; concrete pour volume de coffrage et nombre de sacs.\n\n' +
      'Chevauchement géométrie : volume ou unit converter peuvent lister ici quand le chantier exige à la fois forme et achat matériau.',
    faqQ4: 'Mesurer dimensions intérieures ou extérieures pour le carrelage ?',
    faqA4:
      'Mesurez la surface finie à recouvrir (dégagement pour plinthes et équipements). Ajoutez la perte de pose après surface nette—pose diagonale demande plus de chutes qu’alignement droit.',
  },
  'time-calendar': {
    guideTitle: 'Âge, intervalles, fuseaux et temps epoch',
    guideBody:
      'Dates humaines : age pour années d’anniversaire ; date difference pour projets ou réservations—précisez jours calendaires ou comptage exact 24 h.\n\n' +
      'Réunions inter-régions : timezone converter avec ID IANA, pas seulement surnom de ville.\n\n' +
      'Logs ingénierie : Unix timestamp pour secondes vs millisecondes dans APIs et lignes de log.\n\n' +
      'Transversal : pace sous health-body utilise temps sur distance ; timezone et Unix listent aussi sous dev-data pour déboguer le code.',
    faqQ4: 'Pourquoi mon âge a changé la veille de mon anniversaire ?',
    faqA4:
      'Age compte les années accomplies dans un fuseau. UTC vs minuit local peut décaler la frontière—choisissez le fuseau qui correspond au contexte légal ou personnel qui vous importe.',
  },
  'pdf-docs': {
    guideTitle: 'Tâches PDF dans un ordre sensé',
    guideBody:
      'Structure d’abord : merge, split, organize, rotate et numéros de page quand l’ordre ou l’orientation est faux.\n\n' +
      'Taille et cadrage : compress quand limites email ou upload ; crop quand marges ou fond perdu à rogner.\n\n' +
      'Contrôle d’accès : protect pour mot de passe que vous maîtrisez ; unlock seulement pour fichiers que vous possédez légitimement.\n\n' +
      'Export : PDF to Markdown pour pipelines docs/git ; PDF to JPG ou tailles page pour specs raster ; watermark pour marquer brouillon.\n\n' +
      'Lots image-first (images to PDF/PPT/Word) vivent surtout sous image-media avec listes secondaires ici.',
    faqQ4: 'Merge avant ou après compress ?',
    faqA4:
      'En général merge à l’ordre final des pages d’abord, puis compress une fois sur le fichier combiné pour prévisualiser la pagination en pleine qualité. Gardez une copie non compressée jusqu’à confirmation des destinataires.',
  },
  'image-media': {
    guideTitle: 'Workflows image groupés par livrable',
    guideBody:
      'Specs plateforme : YouTube thumbnail, Instagram post/story, LinkedIn banner, Open Graph, Amazon main image, icônes et captures App Store—quand il faut pixels et zones sûres, pas recadrage arbitraire.\n\n' +
      'Transformation et poids : compress et optimizer pour octets sur le fil ; crop, flip, border, grayscale et format converter pour changements visuels ; SVG optimizer pour poids vectoriel.\n\n' +
      'Composer et animer : merge, overlay, images-to-GIF, add watermark pour attribution.\n\n' +
      'Métadonnées et vie privée : EXIF viewer/stripper avant partage public ; color-from-image pour explorer palettes (brand tokens finalisés sous design-brand).\n\n' +
      'Export document : images to PDF/PPT/Word quand le livrable est un pack office—éditions centrées PDF restent sous pdf-docs.',
    faqQ4: 'Compress, optimizer ou format converter en premier ?',
    faqA4:
      'Convertissez le format d’abord si le canal exige JPEG/PNG/WebP. Puis compress/optimizer pour le budget octets. Recadrez avant compress quand le cadrage supprime de grandes zones inutilisées.',
  },
  'design-brand': {
    guideTitle: 'Systèmes couleur de la vérification à la remise',
    guideBody:
      'Porte accessibilité : WCAG contrast checker pour paires texte/UI contre seuils AA ou AAA.\n\n' +
      'Direction palette : smart website color scheme pour un jeu clair/sombre cohérent à partir d’une couleur marque seed.\n\n' +
      'Export tokens : brand color token pack pour variables CSS ou design tokens ; brand style guide quand vous documentez les rôles (surface, accent, text).\n\n' +
      'Inspiration amont : extrayez couleurs de photos sous image-media, puis verrouillez tokens accessibles ici.',
    faqQ4: 'Contraste OK—j’ai fini avec l’accessibilité ?',
    faqA4:
      'Non. Le contraste est nécessaire mais pas suffisant—taille et graisse de police, états focus et indices non chromatiques comptent encore. Testez les parcours critiques avec des utilisateurs ; les outils contraste détectent les échecs de luminance, pas toutes les barrières cognitives.',
  },
  'seo-growth': {
    guideTitle: 'Étapes workflow SEO sur ce site',
    guideBody:
      'Snippet : meta tag generator et SERP preview pour titres/descriptions ; Open Graph preview pour cartes sociales.\n\n' +
      'Surface technique : générateurs robots.txt et sitemap XML ; hreflang generator pour clusters locale ; schema JSON-LD quand le copy visible supporte déjà le type.\n\n' +
      'Exploration et signaux qualité : IndexNow après publications substantielles ; on-page SEO checker pour audit rapide ; Core Web Vitals checker quand LCP/INP/CLS nécessitent un snapshot labo.\n\n' +
      'Campagnes et déblocage : UTM builder pour liens tagués ; website headers ou add-www-to-dns sous network-ip quand le crawl relève plutôt de DNS/TLS/headers.',
    faqQ4: 'Quel ordre après publication d’une nouvelle page outil ?',
    faqA4:
      'Confirmez copy indexable et canonical/hreflang, mettez à jour sitemap, ping IndexNow optionnel, puis vérifiez SERP/OG previews. Le ranking n’est pas garanti—traitez les outils comme aide à la décision, pas manipulation de position.',
  },
  'network-ip': {
    guideTitle: 'Couches réseau : IP, DNS, HTTP, CIDR',
    guideBody:
      'Identité sortante : public IP montre ce que notre edge voit—utile derrière VPN ou NAT opérateur.\n\n' +
      'Résolution de noms : domain lookup pour enregistrements ; add-www-to-dns quand la question est routage apex/www.\n\n' +
      'Comportement HTTP : website headers pour indices cache, sécurité et redirection sur URLs testables.\n\n' +
      'Plan d’adressage : CIDR cheat sheet et plages privées ; convertisseurs CIDR↔range ; IPv6 CIDR ; Terraform cidrsubnet et AWS VPC planner pour concevoir préfixes cloud.\n\n' +
      'Utilisez seulement sur systèmes que vous êtes autorisé à tester.',
    faqQ4: 'Calculateur CIDR vs Terraform cidrsubnet—lequel d’abord ?',
    faqA4:
      'Commencez par CIDR↔range ou cheat sheet pour valider taille de préfixe et nombre d’hôtes. Ouvrez Terraform cidrsubnet quand vous connaissez déjà le préfixe parent et avez besoin du calcul d’index imbriqué pour modules.',
  },
  'dev-data': {
    guideTitle: 'Transformations développeur par type de payload',
    guideBody:
      'Encodage transport : Base64 et HTML entity encode/decode pour canaux texte sûrs.\n\n' +
      'Données structurées : YAML↔JSON et CSV↔JSON pour ponts config/tabulaire ; JSON Schema validator pour la forme—pas les règles métier.\n\n' +
      'Debug tokens et HTTP : JWT decoder pour inspection claims sur échantillons autorisés ; curl-to-fetch pour réécrire exemples shell en fetch().\n\n' +
      'Pipelines docs : Markdown↔HTML et ChatGPT export to Markdown pour dépôts contenu.\n\n' +
      'Compare et temps (text diff, JSON diff, file compare, Excel compare, timezone, Unix) vivent surtout sous text-compare ou time-calendar avec listes secondaires dev-data.',
    faqQ4: 'Valider JSON Schema avant ou après diff de deux JSON ?',
    faqA4:
      'Validez chaque document contre le schema d’abord si la forme du contrat compte. Puis diff pour voir changements sémantiques. Le diff seul ne dira pas quel côté a violé le schema.',
  },
  'ai-prompt-template-builder': {
    guideTitle: 'Builders prompt par artefact dont vous avez besoin',
    guideBody:
      'Modèles réutilisables : Prompt template builder pour Role/Task/Constraints/Output avec puces scène (writing, web, copilot, mobile).\n\n' +
      'Fiction : Writing prompt generator pour dialogue, personnage, scénario ou amorces aléatoires.\n\n' +
      'Prompts visuels : Midjourney prompt builder pour paramètres image ; Sketch prompt generator pour line-art et contrôle composition.\n\n' +
      'Vidéo longue : Film prompt builder pour logline et trois actes ; Short drama prompt generator pour accroches série verticale.\n\n' +
      'Produit et agents mobile : Product design prompt builder pour briefs UX ; Android et iOS prompt builders pour specs agent Kotlin/Compose ou Swift/SwiftUI.\n\n' +
      'Build/Roll reste local ; Expand/Polish n’envoie que le texte de ce clic à Cloudflare Workers AI après Turnstile.',
    faqQ4: 'Faut-il une page séparée pour ChatGPT vs Gemini ?',
    faqA4:
      'Non—même formulaire avec titre changé serait du doorway. Collez le prompt assemblé dans ChatGPT, Gemini, Claude ou DeepSeek vous-même ; les pages nomment les plateformes dans le copy, pas dans le slug.',
  },
  'text-compare': {
    guideTitle: 'Outils compare adaptés à vos entrées',
    guideBody:
      'Texte brut collé : Check difference between two texts (text-diff) pour chaînes déjà dans le presse-papiers.\n\n' +
      'Deux fichiers texte : Compare two text files online pour .txt/.md avec diff ligne à ligne.\n\n' +
      'Word : Compare two Word documents for differences extrait prose .docx lisible—pas fusion Track Changes bureau.\n\n' +
      'APIs JSON : JSON diff checker online pour ajouts/modifs/suppressions au niveau chemin—ordre des clés ignoré par défaut.\n\n' +
      'Feuilles : Excel compare files pour diffs cellule à cellule sur xlsx/csv—choisissez la page qui correspond à l’objet que vous avez déjà.',
    faqQ4: 'Une page peut diff JSON et Excel ensemble ?',
    faqA4:
      'Non. JSON exige sémantique arbre/chemin ; feuilles exigent coordonnées grille. Forcer les deux dans un text-diff collage masque la structure—utilisez la page JSON ou Excel.',
  },
  'security-ids': {
    guideTitle: 'Secrets, identifiants et contrôles d’intégrité',
    guideBody:
      'Secrets humains : password generator avec longueur et charset—copiez dans un gestionnaire, pas email.\n\n' +
      'IDs opaques : UUID generator (v4 aléatoire courant pour identifiants publics).\n\n' +
      'Intégrité : file hash pour checksums sur fichiers traités localement.\n\n' +
      'Inspection : file metadata analyzer pour faits de base ; JWT decoder liste sous dev-data/security pour déboguer forme token.\n\n' +
      'Vie privée document/photo : PDF protect/unlock et EXIF peuvent lister ici quand le job est accès ou strip metadata.',
    faqQ4: 'UUID v4 suffit pour tokens de session ?',
    faqA4:
      'Utilisez bibliothèques session validées plateforme avec signature et rotation appropriées. UUID convient comme clés opaques base de données ; ce n’est pas l’authentification à eux seuls.',
  },
  'files-archives': {
    guideTitle: 'Zip, unzip, extract et inspection magnet',
    guideBody:
      'Créer livrables : create zip file pour empaquetage modeste de dossiers dans le navigateur.\n\n' +
      'Ouvrir archives existantes : unzip file ou archive extractor pour lister ou extraire—attention mémoire sur grands arbres.\n\n' +
      'Liens magnet : magnet link decoder pour lire nom affiché et champs hash d’un URI—ne lance pas de téléchargements.\n\n' +
      'Liens intégrité croisés : file hash et metadata peuvent lister ici lors de vérification téléchargements.',
    faqQ4: 'Zip navigateur vs 7-Zip bureau pour gros dépôts ?',
    faqA4:
      'Les outils navigateur heurtent limites mémoire d’onglet. Excluez arbres type node_modules ou scindez archives ; utilisez archiver natif pour jobs multigigaoctets ou formats compression exotiques.',
  },
};

/** 日语：检索向独立重写 */
BY_LANG.ja = {
  'health-body': {
    guideTitle: '健康の質問に合うツール',
    guideBody:
      '体型スクリーニング：BMI 計算機で集団向けの比率確認、ideal weight で身長と体格から目標帯を得る。\n\n' +
      'エネルギーと栄養：BMR/TDEE で安静時・総消費を推定；macros でカロリー目標確定後に protein・carbs・fat を配分。\n\n' +
      'トレーニングゾーンと負荷：heart-rate zones で有酸素目標；pace は直近のレースや距離があるとき；one-rep max でサブマックスから barbell 負荷を設計。\n\n' +
      '体組成：body fat は skinfold や Navy 式入力—ページが求める測定がなければ使わない。',
    faqQ4: 'BMI → TDEE → macros を1セッションでつなげられる？',
    faqA4:
      'はい、計画の下書きとして。BMI または ideal weight で文脈、TDEE で1日カロリー、macros で配分。体重やトレ量が変わったら再計算—医療・栄養処方の代わりにはならない。',
  },
  'personal-money': {
    guideTitle: '会計シーン別のお金ツール',
    guideBody:
      'レジ：tip calculator（サービス料）、discount（セール）、VAT（税抜表示）。\n\n' +
      '給与と仕事：salary↔hourly でオファーやフリーランス単価比較。\n\n' +
      '借入：EMI で固定分割の概算；debt payoff で avalanche/snowball と追加返済。\n\n' +
      '成長と購買力：compound interest と Rule of 72；present value と CAGR；inflation；percent change は新旧2金額があるとき。',
    faqQ4: '店のレシートと住宅ローンで同じツール？',
    faqA4:
      '通常は違う。レシートは tip・discount・VAT から。住宅・自動車ローンは EMI または debt payoff に金利・期間・手数料を入力—レジ用ツールでローン計算しない。',
  },
  'business-finance': {
    guideTitle: 'このサイトでのビジネス計算フロー',
    guideBody:
      'ユニットエコノミクス：markup vs margin（分母が異なる）；gross・profit・contribution margin；marginal revenue は価格・数量変動時。\n\n' +
      'キャパシティ：break-even で固定＋変動コストをカバーする数量・売上。\n\n' +
      '資本配分：ROI；NPV・IRR（割引率を明示）；payback period は「いつキャッシュが戻る」に割引なしで答えるとき。\n\n' +
      '横断掲載：discount・VAT・compound interest・present value は shopper ツールと重なる場合にここにも。',
    faqQ4: 'margin と markup が別ページなのはなぜ？',
    faqA4:
      '分母が違うから。markup は原価に対する上乗せ、margin は売価に対する利益率。「50% markup ≠ 50% margin」を価格会議で混同しやすい。',
  },
  'math-stats': {
    guideTitle: '統計・代数ヘルパーの選び方',
    guideBody:
      '代表値とばらつき：mean・median；standard deviation；z-score。\n\n' +
      '推論：p-value・confidence interval（検定選択後）；sample size（調査・A/B パワー）。\n\n' +
      '数え上げと学校代数：permutation/combination；quadratic equation・exponent・logarithm；GPA は校則確認。\n\n' +
      '実験記法：scientific notation・significant figures—運動学は science-physics。',
    faqQ4: 'データセットは mean から median から？',
    faqA4:
      '外れ値・歪みが強い（収入・レイテンシ・評価）なら median 主、mean 副と明記。対称で全値が式に効くなら mean 可—どちらを使ったか書く。',
  },
  'geometry-measure': {
    guideTitle: '図形・勾配・比率・単位',
    guideBody:
      '名前付き図形：triangle area、circle、volume、Pythagorean theorem—辺や半径が分かるとき。\n\n' +
      '勾配と画面：slope・gradient（坂・道路・屋根）；aspect ratio（クロップ・レイアウト）。\n\n' +
      '汎用換算：unit converter—塗料・タイル・コンクリート・square feet は home-diy が材料購入向け。',
    faqQ4: '体積はここ？ home-diy のコンクリート見積？',
    faqA4:
      'ここは L×W×H 等の幾何。コンクリート見積は袋数・ロス換算。先に幾何、発注は home-diy。',
  },
  'science-physics': {
    guideTitle: '物理量を章ごとに',
    guideBody:
      '運動学：velocity・acceleration（変位・時間・変化率）。\n\n' +
      '電気：Ohm 法則で V–I–R 学習—家庭配線寸法だけには使わない。\n\n' +
      '材料：density（質量/体積）。\n\n' +
      '磁場：magnetic-field helper—安全判断前に既知基準で校正。\n\n' +
      '記法リンク：scientific notation・significant figures は math-stats が主、physics は副。',
    faqQ4: 'math-stats の記法ツールに移るタイミングは？',
    faqA4:
      '測定値の書式・丸めが目的なら記法ツール。未知量が物理量（力・速度・抵抗）なら physics ページ。',
  },
  'home-diy': {
    guideTitle: '部屋・材料の見積',
    guideBody:
      '面積ベース：square feet（フィート/インチ混在・部屋面積）。\n\n' +
      '表面：paint（壁/天井・塗回数）、tile（床/壁＋ロス）、concrete（型枠体積・袋数）。\n\n' +
      '幾何との重複：volume・unit converter が副掲載—形状と購入の両方が必要な工事。',
    faqQ4: 'タイルは内寸？外寸？',
    faqA4:
      '仕上げ面を計測（巾木・設備のクリアランス）。正味面積の後にパターン余裕—斜め張りは直張りよりカットロス大。',
  },
  'time-calendar': {
    guideTitle: '年齢・期間・タイムゾーン・Unix 時刻',
    guideBody:
      '日付：age（誕生日ベース）；date difference（プロジェクト・予約—暦日か24時間厳密か明示）。\n\n' +
      '越境会議：timezone converter は IANA ID、都市の俗称だけにしない。\n\n' +
      'ログ：Unix timestamp（秒 vs ミリ秒）。\n\n' +
      '横断：pace は health-body；timezone・Unix は dev-data にも（コードデバッグ）。',
    faqQ4: '誕生日の前日に年齢が1日ずれた？',
    faqA4:
      'age はタイムゾーン内の満年。UTC と現地深夜で境界がずれる—法的・個人的文脈に合うゾーンを選ぶ。',
  },
  'pdf-docs': {
    guideTitle: 'PDF 作業の順序',
    guideBody:
      '構造：merge・split・organize・rotate・ページ番号—順序・向きが狂ったら先に。\n\n' +
      'サイズ・枠：compress（メール/上限）；crop（余白・bleed）。\n\n' +
      'アクセス：protect（自分のパスワード）；unlock は正当な所有ファイルのみ。\n\n' +
      '出力：PDF to Markdown；PDF to JPG やページサイズ；watermark（下書き）。\n\n' +
      '画像バッチ（images to PDF/PPT/Word）は image-media が主、ここは副。',
    faqQ4: 'merge と compress どちらが先？',
    faqA4:
      '通常は最終ページ順で merge 後、結合ファイルを1回 compress して全品質でページ確認。受領確認まで非圧縮バックアップを残す。',
  },
  'image-media': {
    guideTitle: '納品タスク別の画像ワークフロー',
    guideBody:
      'プラットフォーム寸法：YouTube thumbnail、Instagram post/story、LinkedIn banner、Open Graph、Amazon main image、App Store アイコン/スクショ—ピクセルとセーフゾーン用、任意クロップではない。\n\n' +
      '変換と重量：compress・optimizer；crop・flip・border・grayscale・format converter；SVG optimizer。\n\n' +
      '合成・動画：merge・overlay・images-to-GIF・add watermark。\n\n' +
      'メタデータ：EXIF viewer/stripper；color-from-image（brand token は design-brand で確定）。\n\n' +
      '文書出力：images to PDF/PPT/Word—PDF 中心編集は pdf-docs。',
    faqQ4: 'compress・optimizer・format converter の順？',
    faqA4:
      'チャネルが JPEG/PNG/WebP 必須なら format converter 先。次に compress/optimizer。大きな未使用領域を切る crop は compress 前。',
  },
  'design-brand': {
    guideTitle: '色システム：チェックから引き渡し',
    guideBody:
      'a11y ゲート：WCAG contrast checker（AA/AAA）。\n\n' +
      'パレット：smart website color scheme（seed ブランド色から light/dark セット）。\n\n' +
      'トークン：brand color token pack；brand style guide（surface・accent・text）。\n\n' +
      '上流：image-media で写真から抽色→ここで accessible token を固定。',
    faqQ4: 'コントラスト合格＝a11y 完了？',
    faqA4:
      'いいえ。フォントサイズ・ウェイト・フォーカス・非色手がかりも必要。重要フローはユーザーテスト—コントラストツールは輝度差のみ。',
  },
  'seo-growth': {
    guideTitle: 'このサイトの SEO ワークフロー段階',
    guideBody:
      'スニペット：meta tag generator・SERP preview・Open Graph preview。\n\n' +
      '技術面：robots.txt・sitemap XML・hreflang・schema JSON-LD（可視コピーと一致）。\n\n' +
      'クロール・品質：IndexNow（実質更新後）；on-page SEO checker；Core Web Vitals checker（LCP/INP/CLS）。\n\n' +
      'キャンペーン：UTM builder；クロール問題が DNS/TLS/headers なら network-ip の headers/add-www。',
    faqQ4: '新ツールページ公開後の順序は？',
    faqA4:
      'インデックス可能コピーと canonical/hreflang → sitemap 更新 → 任意 IndexNow → SERP/OG 確認。順位保証なし—意思決定支援として使う。',
  },
  'network-ip': {
    guideTitle: 'ネットワーク層：IP・DNS・HTTP・CIDR',
    guideBody:
      '出口 IP：public IP（edge から見えるアドレス、VPN/CGN 時に有用）。\n\n' +
      '名前解決：domain lookup；add-www-to-dns（apex/www ルーティング）。\n\n' +
      'HTTP：website headers（cache・セキュリティ・リダイレクト手がかり）。\n\n' +
      'アドレス設計：CIDR cheat sheet・私設範囲・CIDR↔range・IPv6・Terraform cidrsubnet・AWS VPC planner。\n\n' +
      'テスト権限のあるシステムのみ。',
    faqQ4: 'CIDR 計算機 vs Terraform cidrsubnet、どちらが先？',
    faqA4:
      'CIDR↔range または cheat sheet でプレフィックスサイズとホスト数を確認。親プレフィックスが分かりモジュール用ネスト索引が要るなら Terraform cidrsubnet。',
  },
  'dev-data': {
    guideTitle: 'ペイロード種別の開発者変換',
    guideBody:
      '転送符号：Base64・HTML entity。\n\n' +
      '構造化：YAML↔JSON・CSV↔JSON；JSON Schema validator（形状のみ、業務ルールではない）。\n\n' +
      'デバッグ：JWT decoder；curl-to-fetch。\n\n' +
      'ドキュメント：Markdown↔HTML・ChatGPT export to Markdown。\n\n' +
      '比較・時間（text diff・JSON diff・file/Excel compare・timezone・Unix）は text-compare または time-calendar が主。',
    faqQ4: 'JSON diff の前に Schema 検証？',
    faqA4:
      '契約形状が重要なら各ドキュメントを先に validate、その後 diff。diff だけでは schema 違反側は分からない。',
  },
  'ai-prompt-template-builder': {
    guideTitle: '成果物別 Prompt ビルダー',
    guideBody:
      '汎用：Prompt template builder（Role/Task/Constraints/Output＋シーンチップ）。\n\n' +
      '執筆：Writing prompt generator。\n\n' +
      '画像：Midjourney prompt builder；Sketch prompt generator。\n\n' +
      '映像：Film prompt builder；Short drama prompt generator（縦型連載フック）。\n\n' +
      'プロダクト/モバイル：Product design prompt builder；Android/iOS prompt builder（Agent 仕様）。\n\n' +
      'Build/Roll は端末内；Expand/Polish は Turnstile 後そのクリック分のみ Cloudflare Workers AI へ。',
    faqQ4: 'ChatGPT と Gemini で別 URL が要る？',
    faqA4:
      '不要—同フォームの title 差替は doorway。組み立てた prompt を ChatGPT/Gemini/Claude/DeepSeek に自分で貼る。slug は分けない。',
  },
  'text-compare': {
    guideTitle: '入力に合わせた比較ツール',
    guideBody:
      'プレーンテキスト：Check difference between two texts（text-diff）。\n\n' +
      'テキストファイル2つ：Compare two text files online（.txt/.md 行 diff）。\n\n' +
      'Word：Compare two Word documents for differences（.docx 抽出、デスクトップ Track Changes 統合ではない）。\n\n' +
      'JSON：JSON diff checker online（パス単位、キー順はデフォルト無視）。\n\n' +
      '表：Excel compare files（xlsx/csv セル単位）。',
    faqQ4: '1ページで JSON と Excel を同時 diff？',
    faqA4:
      '不可。JSON はツリー/パス、表はグリッド座標。貼り付け text-diff に無理やり混ぜると構造が消える—専用ページを使う。',
  },
  'security-ids': {
    guideTitle: '秘密・識別子・整合性',
    guideBody:
      '人間用秘密：password generator—パスワードマネージャへ、メール不可。\n\n' +
      '不透明 ID：UUID generator（v4 は公開 ID に一般的）。\n\n' +
      '整合性：file hash（ローカル checksum）。\n\n' +
      '検査：file metadata analyzer；JWT は dev-data/security 副掲載。\n\n' +
      '文書/写真：PDF protect/unlock・EXIF は副掲載可。',
    faqQ4: 'UUID v4 で session token 足りる？',
    faqA4:
      'プラットフォーム推奨の session ライブラリ（署名・ローテーション）を使う。UUID は DB キー向き、認証そのものではない。',
  },
  'files-archives': {
    guideTitle: 'Zip・解凍・magnet 解析',
    guideBody:
      '作成：create zip file（ブラウザ modest パッケージ）。\n\n' +
      '展開：unzip file・archive extractor—巨大ツリーはメモリ注意。\n\n' +
      'Magnet：magnet link decoder（表示名・hash、ダウンロード開始しない）。\n\n' +
      '整合性リンク：file hash・metadata が副掲載可。',
    faqQ4: 'ブラウザ zip vs デスクトップ 7-Zip（大リポ）？',
    faqA4:
      'ブラウザはタブメモリ上限。node_modules 級は除外/分割；多 GB・exotic 形式はネイティブ archiver。',
  },
};

/** 俄语：检索向独立重写 */
BY_LANG.ru = {
  'health-body': {
    guideTitle: 'Какой инструмент под ваш вопрос о здоровье',
    guideBody:
      'Скрининг веса/роста: калькулятор BMI для популяционного скрининга или ideal weight, если нужен целевой диапазон по росту и телосложению.\n\n' +
      'Энергия и питание: BMR/TDEE оценивает расход в покое и за день; macros делит белки, углеводы и жиры после задания калорийной цели.\n\n' +
      'Зоны и нагрузка: heart-rate zones для кардио; pace, если есть недавний забег или дистанция; one-rep max для программирования штанги от субмаксимального подъёма.\n\n' +
      'Состав тела: body fat требует skinfold или Navy-вводов—пропустите, если нет измерений, которые просит страница.',
    faqQ4: 'Можно связать BMI → TDEE → macros в одной сессии?',
    faqA4:
      'Да, как эскиз плана. BMI или ideal weight для контекста, TDEE для суточного бюджета, macros для распределения. Пересчитывайте при изменении веса или объёма тренировок; цепочка не заменяет медицинское назначение.',
  },
  'personal-money': {
    guideTitle: 'Бытовые деньги по моменту оплаты',
    guideBody:
      'На кассе: tip calculator для счёта за услугу; discount для акций; VAT, когда налог не включён в ценник.\n\n' +
      'Зарплата и работа: salary↔hourly при сравнении офферов или ставок freelance.\n\n' +
      'Займы: EMI для эскиза фиксированного платежа; debt payoff для порядка avalanche/snowball с доплатами.\n\n' +
      'Рост и покупательная способность: compound interest и Rule of 72; present value и CAGR; inflation; percent change, когда уже есть старая и новая суммы.',
    faqQ4: 'Какой инструмент для чека магазина vs ипотеки?',
    faqA4:
      'Чеки и касса обычно начинаются с tip, discount или VAT. Ипотека и автокредит — EMI или debt payoff с ставкой, сроком и комиссиями кредитора, а не кассовые помощники.',
  },
  'business-finance': {
    guideTitle: 'Рабочий процесс расчётов сделок на сайте',
    guideBody:
      'Юнит-экономика: markup vs margin (разные знаменатели); gross, profit и contribution margin для слоёв P&L; marginal revenue при изменении цены или объёма.\n\n' +
      'Мощность: break-even для единиц или выручки, покрывающей постоянные и переменные затраты.\n\n' +
      'Распределение капитала: ROI; NPV и IRR при денежных потоках во времени (явно укажите discount rate); payback period, когда спрашивают «когда вернётся cash» без нюансов дисконтирования.\n\n' +
      'Перекрёстные списки: discount, VAT, compound interest или present value могут быть здесь при пересечении с shopper-инструментами.',
    faqQ4: 'Почему margin и markup — разные страницы?',
    faqA4:
      'Они отвечают на разные знаменатели. Markup — надбавка к себестоимости; margin — прибыль к цене продажи. Смешение в заголовке даёт ошибку «50% markup ≠ 50% margin» на pricing-встречах.',
  },
  'math-stats': {
    guideTitle: 'Выберите нужный статистический или алгебраический helper',
    guideBody:
      'Типичное значение и разброс: mean и median для центра; standard deviation; z-score для сравнения значения с распределением.\n\n' +
      'Выводы: p-value и confidence interval после выбора теста; sample size для опроса или мощности A/B.\n\n' +
      'Комбинаторика и школьная алгебра: permutation/combination; quadratic equation, exponent и logarithm; GPA с учётом политики вуза.\n\n' +
      'Лабораторная запись: scientific notation и significant figures — кинематика в science-physics.',
    faqQ4: 'С чего начать — mean или median для моего набора?',
    faqA4:
      'При выбросах или асимметрии (доход, latency, рейтинги) ведите median, mean показывайте вторым. При симметрии, когда каждое значение важно для формулы, подойдёт mean — укажите, что использовали.',
  },
  'geometry-measure': {
    guideTitle: 'Фигуры, уклон, ratio и единицы',
    guideBody:
      'Именованные фигуры: triangle area, circle, volume и Pythagorean theorem, когда можно обозначить стороны или радиус.\n\n' +
      'Уклон и экран: slope и gradient для пандусов, дорог или кровли; aspect ratio для кропа и layout.\n\n' +
      'Общее преобразование: unit converter — оценщики DIY (paint, tile, concrete, square feet) в home-diy при закупке материалов.',
    faqQ4: 'Volume здесь vs оценщик бетона в home-diy?',
    faqA4:
      'Volume здесь — геометрическая формула (L×W×H и т.п.). Оценщик бетона переводит объём в мешки и отходы. Сначала геометрия, затем DIY при заказе смеси.',
  },
  'science-physics': {
    guideTitle: 'Физические величины по главам',
    guideBody:
      'Кinematics: velocity и acceleration при известных перемещении, времени или скорости изменения.\n\n' +
      'Электричество: закон Ohm для V–I–R в учебных задачах — не для одного лишь выбора домашней проводки.\n\n' +
      'Материалы: density из массы и объёма.\n\n' +
      'Поля: magnetic-field helper для sensor-подобных показаний — калибруйте по известному эталону перед решениями по безопасности.\n\n' +
      'Перекрёстные ссылки: scientific notation и significant figures основны в math-stats, вторичны в physics.',
    faqQ4: 'Когда перейти к инструментам записи в math-stats?',
    faqA4:
      'Когда задача — форматировать или округлить измерение, а не решать физическую идентичность. Страницы physics — когда неизвестна физическая величина (сила, скорость, сопротивление).',
  },
  'home-diy': {
    guideTitle: 'Оценщики комнаты и материалов',
    guideBody:
      'Базовая площадь: square feet при смешении футов и дюймов или перед расчётом материала.\n\n' +
      'Покрытие: paint для стен/потолков с coats; tile для пола/стены с waste; concrete для объёма опалубки и мешков.\n\n' +
      'Пересечение с геометрией: volume или unit converter могут быть здесь, когда нужны и форма, и закупка.',
    faqQ4: 'Мерить внутренние или внешние размеры для плитки?',
    faqA4:
      'Мерьте готовую поверхность под покрытие (зазор под плинтус и сантехнику). Добавьте waste узора после чистой площади — диагональная укладка требует больше обрезков.',
  },
  'time-calendar': {
    guideTitle: 'Возраст, интервалы, зоны и epoch-время',
    guideBody:
      'Человеческие даты: age по годам от дня рождения; date difference для проектов или брони — уточните календарные дни или точный счёт 24 часов.\n\n' +
      'Встречи между регионами: timezone converter с IANA ID, не только прозвищем города.\n\n' +
      'Инженерные логи: Unix timestamp для секунд vs миллисекунд в API и логах.\n\n' +
      'Перекрёстно: pace в health-body — время на дистанцию; timezone и Unix также в dev-data при отладке кода.',
    faqQ4: 'Почему возраст изменился за день до дня рождения?',
    faqA4:
      'Age считает завершённые годы в часовом поясе. UTC vs локальная полночь может сдвинуть границу — выберите зону, соответствующую вашему правовому или личному контексту.',
  },
  'pdf-docs': {
    guideTitle: 'PDF-задачи в разумном порядке',
    guideBody:
      'Структура: merge, split, organize, rotate и номера страниц при неверном порядке или ориентации.\n\n' +
      'Размер и кадр: compress при лимитах почты/загрузки; crop для полей или bleed.\n\n' +
      'Доступ: protect с вашим паролем; unlock только для файлов, которыми вы законно владеете.\n\n' +
      'Экспорт: PDF to Markdown; PDF to JPG или размеры страниц; watermark для черновиков.\n\n' +
      'Пакеты из изображений (images to PDF/PPT/Word) в основном в image-media.',
    faqQ4: 'Merge до или после compress?',
    faqA4:
      'Обычно сначала merge в финальный порядок страниц, затем один compress объединённого файла для проверки пагинации в полном качестве. Храните несжатую копию до подтверждения получателями.',
  },
  'image-media': {
    guideTitle: 'Потоки изображений по задаче доставки',
    guideBody:
      'Спеки платформ: YouTube thumbnail, Instagram post/story, LinkedIn banner, Open Graph, Amazon main image, иконки и скриншоты App Store — когда нужны пиксели и safe zones, а не произвольный crop.\n\n' +
      'Преобразование и вес: compress и optimizer; crop, flip, border, grayscale и format converter; SVG optimizer.\n\n' +
      'Сборка и анимация: merge, overlay, images-to-GIF, add watermark.\n\n' +
      'Метаданные: EXIF viewer/stripper; color-from-image (brand tokens финализируются в design-brand).\n\n' +
      'Экспорт документов: images to PDF/PPT/Word — PDF-редактирование в pdf-docs.',
    faqQ4: 'Compress, optimizer или format converter первым?',
    faqA4:
      'Сначала format converter, если канал требует JPEG/PNG/WebP. Затем compress/optimizer. Crop до compress, если кадрирование убирает большие неиспользуемые области.',
  },
  'design-brand': {
    guideTitle: 'Цветовые системы от проверки до handoff',
    guideBody:
      'Доступность: WCAG contrast checker для пар текст/UI против AA или AAA.\n\n' +
      'Палитра: smart website color scheme для coherent light/dark из seed brand color.\n\n' +
      'Токены: brand color token pack; brand style guide для ролей (surface, accent, text).\n\n' +
      'Вдохновение: извлекайте цвета в image-media, фиксируйте accessible tokens здесь.',
    faqQ4: 'Контраст прошёл — accessibility готова?',
    faqA4:
      'Нет. Контраст необходим, но недостаточен — размер и вес шрифта, focus и нецветовые подсказки важны. Тестируйте критические потоки; contrast tools ловят luminance, не все когнитивные барьеры.',
  },
  'seo-growth': {
    guideTitle: 'Этапы SEO-workflow на сайте',
    guideBody:
      'Snippet: meta tag generator и SERP preview; Open Graph preview.\n\n' +
      'Техника: robots.txt и sitemap XML; hreflang generator; schema JSON-LD при поддержке видимым copy.\n\n' +
      'Краул и качество: IndexNow после существенных публикаций; on-page SEO checker; Core Web Vitals checker для LCP/INP/CLS.\n\n' +
      'Кампании: UTM builder; website headers или add-www-to-dns в network-ip, если проблема в DNS/TLS/headers.',
    faqQ4: 'Порядок после публикации новой страницы инструмента?',
    faqA4:
      'Подтвердите indexable copy и canonical/hreflang, обновите sitemap, опционально ping IndexNow, проверьте SERP/OG previews. Ранжирование не гарантировано — инструменты как поддержка решений, не манипуляция.',
  },
  'network-ip': {
    guideTitle: 'Сетевые слои: IP, DNS, HTTP, CIDR',
    guideBody:
      'Egress: public IP показывает, что видит edge — полезно за VPN или carrier NAT.\n\n' +
      'DNS: domain lookup; add-www-to-dns для apex/www routing.\n\n' +
      'HTTP: website headers для cache, security и redirect.\n\n' +
      'Адресация: CIDR cheat sheet и private ranges; CIDR↔range; IPv6 CIDR; Terraform cidrsubnet и AWS VPC planner.\n\n' +
      'Только на системах, которые вы уполномочены тестировать.',
    faqQ4: 'CIDR calculator vs Terraform cidrsubnet — что первым?',
    faqA4:
      'Начните с CIDR↔range или cheat sheet для размера префикса и числа хостов. Terraform cidrsubnet — когда известен parent prefix и нужна nested index math для модулей.',
  },
  'dev-data': {
    guideTitle: 'Developer-преобразования по типу payload',
    guideBody:
      'Кодирование: Base64 и HTML entity encode/decode.\n\n' +
      'Структуры: YAML↔JSON и CSV↔JSON; JSON Schema validator для формы, не бизнес-правил.\n\n' +
      'Debug: JWT decoder; curl-to-fetch.\n\n' +
      'Docs: Markdown↔HTML и ChatGPT export to Markdown.\n\n' +
      'Compare и время (text diff, JSON diff, file compare, Excel compare, timezone, Unix) в основном в text-compare или time-calendar.',
    faqQ4: 'JSON Schema validate до или после diff двух JSON?',
    faqA4:
      'Validate каждый документ против schema сначала, если важна форма контракта. Затем diff для семантических изменений. Diff alone не покажет, какая сторона нарушила schema.',
  },
  'ai-prompt-template-builder': {
    guideTitle: 'Prompt builders по нужному артеfact',
    guideBody:
      'Шаблоны: Prompt template builder (Role/Task/Constraints/Output + scene chips).\n\n' +
      'Fiction: Writing prompt generator.\n\n' +
      'Visual: Midjourney prompt builder; Sketch prompt generator.\n\n' +
      'Video: Film prompt builder; Short drama prompt generator.\n\n' +
      'Product/mobile: Product design prompt builder; Android и iOS prompt builders.\n\n' +
      'Build/Roll локально; Expand/Polish отправляет только текст клика в Cloudflare Workers AI после Turnstile.',
    faqQ4: 'Нужна отдельная страница для ChatGPT vs Gemini?',
    faqA4:
      'Нет — та же форма с другим title была бы doorway. Вставляйте собранный prompt в ChatGPT, Gemini, Claude или DeepSeek сами; платформы в copy, не в slug.',
  },
  'text-compare': {
    guideTitle: 'Compare-инструменты под ваши входы',
    guideBody:
      'Plain text: Check difference between two texts (text-diff).\n\n' +
      'Два text file: Compare two text files online (.txt/.md).\n\n' +
      'Word: Compare two Word documents for differences.\n\n' +
      'JSON: JSON diff checker online.\n\n' +
      'Spreadsheets: Excel compare files (xlsx/csv).',
    faqQ4: 'Одна страница diff JSON и Excel вместе?',
    faqA4:
      'Нет. JSON нужна tree/path semantics; spreadsheets — grid coordinates. Paste-only text diff скрывает структуру — используйте JSON или Excel page.',
  },
  'security-ids': {
    guideTitle: 'Secrets, IDs и проверки целостности',
    guideBody:
      'Secrets: password generator — в password manager, не email.\n\n' +
      'Opaque IDs: UUID generator (v4 для публичных ID).\n\n' +
      'Integrity: file hash локально.\n\n' +
      'Inspection: file metadata analyzer; JWT decoder в dev-data/security.\n\n' +
      'Privacy: PDF protect/unlock и EXIF могут быть здесь вторично.',
    faqQ4: 'UUID v4 достаточно для session tokens?',
    faqA4:
      'Используйте platform-vetted session libraries с signing и rotation. UUID — для opaque DB keys, не authentication сами по себе.',
  },
  'files-archives': {
    guideTitle: 'Zip, unzip, extract и magnet inspection',
    guideBody:
      'Create: create zip file в browser.\n\n' +
      'Open: unzip file или archive extractor — память на huge trees.\n\n' +
      'Magnet: magnet link decoder — не запускает downloads.\n\n' +
      'Integrity cross-links: file hash и metadata вторично.',
    faqQ4: 'Browser zip vs desktop 7-Zip для large repos?',
    faqA4:
      'Browser tools упираются в tab memory. Исключите node_modules-scale или split; native archiver для multi-GB или exotic formats.',
  },
};

/** 德语：检索向独立重写 */
BY_LANG.de = {
  'health-body': {
    guideTitle: 'Welches Tool passt zu Ihrer Gesundheitsfrage',
    guideBody:
      'Größen-/Gewichtsscreening: BMI-Rechner für populationsnahes Screening oder ideal weight, wenn Sie aus Größe und Statur eine Zielspanne wollen.\n\n' +
      'Energie und Ernährung: BMR/TDEE schätzt Ruhe- und Gesamtverbrauch; macros teilt Protein, Kohlenhydrate und Fett nach Kalorienziel.\n\n' +
      'Trainingszonen und Last: heart-rate zones für Cardio; pace bei kürzlichem Lauf oder Distanz; one-rep max für Langhantel-Programmierung aus submaximalem Hub.\n\n' +
      'Körperzusammensetzung: body fat braucht skinfold oder Navy-Eingaben—überspringen ohne die von der Seite verlangten Messungen.',
    faqQ4: 'Kann ich BMI → TDEE → macros in einer Sitzung verketten?',
    faqA4:
      'Ja, als Planungsskizze. BMI oder ideal weight für Kontext, TDEE für Tagesbudget, macros zum Aufteilen. Neu rechnen bei Gewichts- oder Trainingsvolumenänderung; keine medizinische Verordnung.',
  },
  'personal-money': {
    guideTitle: 'Alltags-Geld-Tools nach Checkout-Moment',
    guideBody:
      'An der Kasse: tip calculator für Service; discount für Angebote; VAT wenn Steuer nicht im Regalpreis.\n\n' +
      'Gehalt und Arbeit: salary↔hourly beim Vergleich von Jobs oder Freelance-Raten.\n\n' +
      'Kredit: EMI für Festraten-Skizze; debt payoff für avalanche/snowball mit Extra-Zahlungen.\n\n' +
      'Wachstum und Kaufkraft: compound interest und Rule of 72; present value und CAGR; inflation; percent change bei altem und neuem Betrag.',
    faqQ4: 'Welches Tool für Kassenbon vs Hypothek?',
    faqA4:
      'Bon und Checkout beginnen mit tip, discount oder VAT. Hypothek und Autokredit gehören auf EMI oder debt payoff mit Satz, Laufzeit und Gebühren des Kreditgebers—keine Kassenhelfer für Kredite.',
  },
  'business-finance': {
    guideTitle: 'Deal-Math-Workflow auf dieser Site',
    guideBody:
      'Unit Economics: markup vs margin (unterschiedliche Nenner); gross, profit und contribution margin für P&L-Schichten; marginal revenue bei Preis- oder Volumenänderung.\n\n' +
      'Kapazität: break-even für Einheiten oder Umsatz zur Deckung fixer und variabler Kosten.\n\n' +
      'Kapitalallokation: ROI; NPV und IRR bei zeitlichen Cashflows (Diskontsatz explizit); payback period wenn „wie schnell Cash zurück“ ohne Diskont-Nuance gefragt wird.\n\n' +
      'Querlisten: discount, VAT, compound interest oder present value können hier erscheinen, wenn Pricing shopper-Tools überlappt.',
    faqQ4: 'Warum margin und markup getrennte Seiten?',
    faqA4:
      'Unterschiedliche Nenner. Markup ist Aufschlag auf Kosten; margin Gewinn auf Verkaufspreis. Vermischung im Headline verursacht „50 % markup ist nicht 50 % margin“ in Pricing-Meetings.',
  },
  'math-stats': {
    guideTitle: 'Statistik- oder Algebra-Helper wählen',
    guideBody:
      'Typischer Wert und Streuung: mean und median; standard deviation; z-score zum Vergleich mit Verteilung.\n\n' +
      'Inferenz: p-value und confidence interval nach Testwahl; sample size für Umfrage oder A/B-Power.\n\n' +
      'Zählen und Schulalgebra: permutation/combination; quadratic equation, exponent und logarithm; GPA bei Institutsregeln.\n\n' +
      'Lab-Notation: scientific notation und significant figures—Kinematik unter science-physics.',
    faqQ4: 'Mit mean oder median für meinen Datensatz starten?',
    faqA4:
      'Bei Outliers oder Schiefe (Einkommen, Latenz, Ratings) median führen, mean zweit. Bei symmetrischer Verteilung, wo jeder Wert zählt, mean ok—angeben, welches Sie nutzten.',
  },
  'geometry-measure': {
    guideTitle: 'Formen, Steigung, Ratio und Einheiten',
    guideBody:
      'Benannte Formen: triangle area, circle, volume, Pythagorean theorem bei benennbaren Seiten oder Radius.\n\n' +
      'Steigung und Screen: slope und gradient für Rampen, Straßen oder Dachneigung; aspect ratio für Crops und Layout.\n\n' +
      'Allgemeine Umrechnung: unit converter—DIY-Materialschätzer (paint, tile, concrete, square feet) unter home-diy beim Einkauf.',
    faqQ4: 'Volume hier vs Beton-Schätzer in home-diy?',
    faqA4:
      'Volume hier ist Geometrieformel (L×W×H o.ä.). Beton-Schätzer macht daraus Säcke und Verschnitt. Erst Geometrie, dann DIY beim Bestellen.',
  },
  'science-physics': {
    guideTitle: 'Physikgrößen nach Kapitel',
    guideBody:
      'Kinematik: velocity und acceleration bei Weg, Zeit oder Änderungsrate.\n\n' +
      'Elektrizität: Ohm-Gesetz für V–I–R in Lernaufgaben—nicht allein für Hausverkabelung.\n\n' +
      'Materialien: density aus Masse und Volumen.\n\n' +
      'Felder: magnetic-field helper für Sensor-artige Werte—gegen Referenz kalibrieren vor Sicherheitsentscheidungen.\n\n' +
      'Querverweise: scientific notation und significant figures primär unter math-stats.',
    faqQ4: 'Wann zu math-stats-Notationstools wechseln?',
    faqA4:
      'Wenn Aufgabe Formatierung oder Runden einer Messung ist—nicht physikalische Identität lösen. Physik-Seiten, wenn Unbekannte physikalische Größe ist (Kraft, Geschwindigkeit, Widerstand).',
  },
  'home-diy': {
    guideTitle: 'Raum- und Materialschätzer',
    guideBody:
      'Flächenbasis: square feet bei Fuß/Zoll-Mix oder Raumfläche vor Materialrechnung.\n\n' +
      'Oberfläche: paint für Wände/Decken mit Anstrichen; tile für Boden/Wand plus Verschnitt; concrete für Schalungsvolumen und Säcke.\n\n' +
      'Overlap Geometrie: volume oder unit converter sekundär, wenn Form und Einkauf zusammenfallen.',
    faqQ4: 'Innen- oder Außenmaße für Fliesen?',
    faqA4:
      'Fertige zu bedeckende Fläche messen (Spiel für Leisten und Armaturen). Musterverschnitt nach Nettofläche—Diagonalverlegung braucht mehr Schnitt als gerade Läufe.',
  },
  'time-calendar': {
    guideTitle: 'Alter, Spannen, Zonen und Epoch-Zeit',
    guideBody:
      'Datumsfragen: age nach Geburtstagsjahren; date difference für Projekt oder Buchung—Kalendertage oder exakte 24-h-Zählung angeben.\n\n' +
      'Meetings über Regionen: timezone converter mit IANA-ID, nicht nur Stadtnickname.\n\n' +
      'Engineering-Logs: Unix timestamp für Sekunden vs Millisekunden in APIs und Logzeilen.\n\n' +
      'Quer: pace unter health-body; timezone und Unix auch unter dev-data beim Debuggen.',
    faqQ4: 'Warum änderte sich mein Alter einen Tag vor dem Geburtstag?',
    faqA4:
      'Age zählt vollendete Jahre in einer Zeitzone. UTC vs lokale Mitternacht kann die Grenze verschieben—Zone wählen, die zu Ihrem rechtlichen oder persönlichen Kontext passt.',
  },
  'pdf-docs': {
    guideTitle: 'PDF-Jobs in sinnvoller Reihenfolge',
    guideBody:
      'Struktur zuerst: merge, split, organize, rotate und Seitenzahlen bei falscher Reihenfolge oder Orientierung.\n\n' +
      'Größe und Rahmen: compress bei Mail-/Upload-Limits; crop für Ränder oder bleed.\n\n' +
      'Zugriff: protect mit Passwort unter Ihrer Kontrolle; unlock nur für legitime Dateien.\n\n' +
      'Export: PDF to Markdown; PDF to JPG oder Seitengrößen; watermark für Entwürfe.\n\n' +
      'Bild-Batches (images to PDF/PPT/Word) primär unter image-media.',
    faqQ4: 'Merge vor oder nach compress?',
    faqA4:
      'Meist zuerst merge zur finalen Seitenfolge, dann einmal compress auf der kombinierten Datei für Pagination in voller Qualität. Unkomprimiertes Backup bis Empfang bestätigt.',
  },
  'image-media': {
    guideTitle: 'Bild-Workflows nach Delivery-Job',
    guideBody:
      'Plattform-Specs: YouTube thumbnail, Instagram post/story, LinkedIn banner, Open Graph, Amazon main image, App-Store-Icons und Screenshots—bei Pixeln und Safe Zones, nicht willkürlichem Crop.\n\n' +
      'Transform und Gewicht: compress und optimizer; crop, flip, border, grayscale und format converter; SVG optimizer.\n\n' +
      'Compose und animieren: merge, overlay, images-to-GIF, add watermark.\n\n' +
      'Metadaten: EXIF viewer/stripper; color-from-image (brand tokens in design-brand).\n\n' +
      'Dokumentexport: images to PDF/PPT/Word—PDF-zentrierte Edits in pdf-docs.',
    faqQ4: 'Compress, optimizer oder format converter zuerst?',
    faqA4:
      'Format zuerst, wenn Kanal JPEG/PNG/WebP verlangt. Dann compress/optimizer. Crop vor compress, wenn Framing große ungenutzte Bereiche entfernt.',
  },
  'design-brand': {
    guideTitle: 'Farbsysteme vom Check bis Handoff',
    guideBody:
      'Accessibility-Gate: WCAG contrast checker für Text/UI-Paare gegen AA oder AAA.\n\n' +
      'Palettenrichtung: smart website color scheme für kohärentes light/dark aus Seed-Brandfarbe.\n\n' +
      'Token-Export: brand color token pack; brand style guide für Rollen (surface, accent, text).\n\n' +
      'Upstream: Farben aus Fotos in image-media, dann accessible Tokens hier fixieren.',
    faqQ4: 'Kontrast bestanden—Accessibility fertig?',
    faqA4:
      'Nein. Kontrast nötig, nicht hinreichend—Schriftgröße, -stärke, Fokus und Nicht-Farb-Hinweise zählen. User-Tests für kritische Flows; Kontrasttools finden Luminanz, nicht jede kognitive Barriere.',
  },
  'seo-growth': {
    guideTitle: 'SEO-Workflow-Stufen auf dieser Site',
    guideBody:
      'Snippet: meta tag generator und SERP preview; Open Graph preview.\n\n' +
      'Technik: robots.txt und sitemap XML; hreflang generator; schema JSON-LD wenn sichtbarer Copy den Typ stützt.\n\n' +
      'Crawl und Qualität: IndexNow nach substanziellen Publishes; on-page SEO checker; Core Web Vitals checker für LCP/INP/CLS.\n\n' +
      'Kampagnen: UTM builder; website headers oder add-www-to-dns unter network-ip bei DNS/TLS/Header-Problemen.',
    faqQ4: 'Welche Reihenfolge nach neuer Tool-Seite?',
    faqA4:
      'Indexierbaren Copy und canonical/hreflang bestätigen, sitemap aktualisieren, optional IndexNow ping, SERP/OG prüfen. Ranking nicht garantiert—Tools als Entscheidungshilfe, nicht Rank-Manipulation.',
  },
  'network-ip': {
    guideTitle: 'Netzwerk-Schichten: IP, DNS, HTTP, CIDR',
    guideBody:
      'Egress: public IP zeigt, was unser Edge sieht—nützlich hinter VPN oder Carrier-NAT.\n\n' +
      'Namensauflösung: domain lookup; add-www-to-dns bei apex/www-Routing.\n\n' +
      'HTTP: website headers für Cache, Security und Redirect-Hinweise.\n\n' +
      'Adressplanung: CIDR cheat sheet und private ranges; CIDR↔range; IPv6 CIDR; Terraform cidrsubnet und AWS VPC planner.\n\n' +
      'Nur auf Systemen testen, die Sie dürfen.',
    faqQ4: 'CIDR-Rechner vs Terraform cidrsubnet—was zuerst?',
    faqA4:
      'Mit CIDR↔range oder cheat sheet Prefix-Größe und Hosts prüfen. Terraform cidrsubnet, wenn Parent-Prefix bekannt und nested Index-Math für Module nötig.',
  },
  'dev-data': {
    guideTitle: 'Developer-Transforms nach Payload-Typ',
    guideBody:
      'Transport-Encoding: Base64 und HTML entity encode/decode.\n\n' +
      'Strukturierte Daten: YAML↔JSON und CSV↔JSON; JSON Schema validator für Form, nicht Business Rules.\n\n' +
      'Debug: JWT decoder; curl-to-fetch.\n\n' +
      'Docs-Pipelines: Markdown↔HTML und ChatGPT export to Markdown.\n\n' +
      'Compare und Zeit (text diff, JSON diff, file compare, Excel compare, timezone, Unix) primär unter text-compare oder time-calendar.',
    faqQ4: 'JSON Schema validate vor oder nach Diff zweier JSON?',
    faqA4:
      'Jedes Dokument gegen Schema validieren, wenn Vertragsform zählt. Dann diff für semantische Änderungen. Diff allein zeigt nicht, welche Seite Schema verletzte.',
  },
  'ai-prompt-template-builder': {
    guideTitle: 'Prompt-Builder nach gewünschtem Artefakt',
    guideBody:
      'Templates: Prompt template builder (Role/Task/Constraints/Output + Scene-Chips).\n\n' +
      'Fiction: Writing prompt generator.\n\n' +
      'Visual: Midjourney prompt builder; Sketch prompt generator.\n\n' +
      'Video: Film prompt builder; Short drama prompt generator.\n\n' +
      'Product/Mobile: Product design prompt builder; Android und iOS prompt builders.\n\n' +
      'Build/Roll lokal; Expand/Polish sendet nur Klick-Text an Cloudflare Workers AI nach Turnstile.',
    faqQ4: 'Separate Seite für ChatGPT vs Gemini?',
    faqA4:
      'Nein—gleiches Formular mit anderem Titel wäre Doorway. Prompt selbst in ChatGPT, Gemini, Claude oder DeepSeek einfügen; Plattformen im Copy, nicht im slug.',
  },
  'text-compare': {
    guideTitle: 'Compare-Tools passend zu Ihren Inputs',
    guideBody:
      'Plain text: Check difference between two texts (text-diff).\n\n' +
      'Zwei Textdateien: Compare two text files online.\n\n' +
      'Word: Compare two Word documents for differences.\n\n' +
      'JSON: JSON diff checker online.\n\n' +
      'Sheets: Excel compare files.',
    faqQ4: 'Eine Seite diff JSON und Excel zusammen?',
    faqA4:
      'Nein. JSON braucht Tree/Path-Semantik; Sheets Grid-Koordinaten. Paste-only text diff verbirgt Struktur—JSON- oder Excel-Seite nutzen.',
  },
  'security-ids': {
    guideTitle: 'Secrets, IDs und Integritätsprüfungen',
    guideBody:
      'Secrets: password generator—in Password Manager, nicht E-Mail.\n\n' +
      'Opaque IDs: UUID generator (v4 üblich für öffentliche IDs).\n\n' +
      'Integrität: file hash lokal.\n\n' +
      'Inspection: file metadata analyzer; JWT decoder unter dev-data/security.\n\n' +
      'Privacy: PDF protect/unlock und EXIF sekundär.',
    faqQ4: 'Reicht UUID v4 für Session-Tokens?',
    faqA4:
      'Platform-geprüfte Session-Libraries mit Signing und Rotation. UUID für opaque DB-Keys; keine Authentifizierung allein.',
  },
  'files-archives': {
    guideTitle: 'Zip, unzip, extract und Magnet-Inspektion',
    guideBody:
      'Handoffs: create zip file im Browser.\n\n' +
      'Archive öffnen: unzip file oder archive extractor—Speicher bei huge trees.\n\n' +
      'Magnet: magnet link decoder—startet keine Downloads.\n\n' +
      'Integrität: file hash und metadata sekundär.',
    faqQ4: 'Browser-Zip vs Desktop-7-Zip für große Repos?',
    faqA4:
      'Browser-Tools stoßen an Tab-Speicher. node_modules ausschließen oder splitten; native Archiver für Multi-GB oder exotische Formate.',
  },
};

/** 将结构化 guide 转为 i18n 扁平键 */
const flattenGuides = (langTable) => {
  /** @type {Record<string, string>} */
  const out = {};
  for (const id of TOOL_TOPIC_ORDER) {
    const f = topicKeyFragment(id);
    const row = langTable[id];
    out[`topic_${f}_guide_title`] = row.guideTitle;
    out[`topic_${f}_guide_body`] = row.guideBody;
    out[`topic_${f}_faq_q4`] = row.faqQ4;
    out[`topic_${f}_faq_a4`] = row.faqA4;
  }
  return out;
};

/** @type {Record<string, Record<string, string>>} */
const topicGuideTranslations = {};
for (const [lang, table] of Object.entries(BY_LANG)) {
  topicGuideTranslations[lang] = flattenGuides(table);
}

const header = `/**
 * Topic leaf 增量 Info Gain：场景→工具指南 + 第 4 条 FAQ。
 * 由 scripts/site/build-topic-guides.mjs 生成；勿手改——改 build-topic-guides.mjs 后重跑。
 * 键与 scripts/site/topics.mjs 的 guideTitleKey / faqQ4Key 一致。
 */

/** @type {Record<string, Record<string, string>>} */
export const topicGuideTranslations = ${JSON.stringify(topicGuideTranslations, null, 2)};
`;

writeFileSync(new URL('./i18n-topics-guides.mjs', import.meta.url), header, 'utf8');
console.log('Wrote scripts/site/i18n-topics-guides.mjs');
