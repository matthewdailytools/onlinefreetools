/**
 * Topic leaf IG 英文母版：H1 写用户任务 + 产品类型 + 完整场景（禁止 which X page），表单元格（须含首页卡片没有的输入/失败事实）、工作流、簇级例、次要理由、FAQ。
 * 由 build-topic-ig.mjs 扁平化；勿在生成物里改。
 */

/** @param {string} job @param {string} need @param {string} skip @param {string} [card] */
const r = (job, need, skip, card) => ({ job, need, skip, card: card || need });

/** 共享表头（枢纽 chrome，不是关键词堆砌） */
export const chrome = {
  topics_ig_col_job: 'Job',
  topics_ig_col_tool: 'This site’s tool',
  topics_ig_col_need: 'You already have',
  topics_ig_col_skip: 'Do not use this page when',
  topics_ig_workflow: 'Suggested order',
  topics_ig_related: 'Related topics',
  topics_ig_refs: 'References',
};

/**
 * @typedef {{job:string,need:string,skip:string,card:string}} Row
 * @typedef {{
 *   title:string, desc:string, intro?:string, tableTitle:string,
 *   groups: Record<string,string>,
 *   rows: Record<string, Row>,
 *   flow: string[],
 *   exampleTitle:string, exampleBody:string,
 *   boundary:string,
 *   secondary: Record<string,string>,
 *   faq: Array<{q:string,a:string}>,
 *   cites: Record<string,string>,
 * }} TopicCopy
 */

/** @type {Record<string, TopicCopy>} */
export const topics = {
  'health-body': {
    title: 'BMI, TDEE, or macros: which health number first',
    desc: 'Pick BMI to screen height/weight, TDEE for a calorie budget, then macros to split it. Educational only—not a diagnosis. Skip body-fat without calipers.',
    intro:
      'Use this hub when you have height, weight, age, sex, activity, or a recent run/lift and need one transparent number before talking to a clinician or coach.',
    tableTitle: 'Which health calculator matches the inputs you already have',
    groups: {
      screening: 'Screening ratios (no labs)',
      energy: 'Energy budget then macro split',
      composition: 'Body-fat estimates (extra measurements)',
      training: 'Cardio zones and strength load',
    },
    rows: {
      'how-to-calculate-bmi': r(
        'Height–weight screening ratio',
        'Height and weight only. Adult population categories, not muscle vs fat.',
        'You are pregnant, edematous, or a heavily muscled athlete—BMI will misclassify.'
      ),
      'how-to-calculate-ideal-weight': r(
        'Target weight band from height/frame',
        'Height plus a frame or formula choice the page lists.',
        'You need energy intake (use TDEE) or fat % (use body-fat if you have skinfolds).'
      ),
      'how-to-calculate-bmr-tdee': r(
        'Resting burn and daily calorie budget',
        'Age, sex, height, weight, and an activity multiplier you can defend.',
        'You only wanted a BMI category, or you have no honest activity level.'
      ),
      'how-to-calculate-macros': r(
        'Split an already-chosen calorie target',
        'A daily kcal number (usually from TDEE) plus protein/carb/fat policy.',
        'You do not yet have a calorie budget—run TDEE first.'
      ),
      'how-to-calculate-body-fat': r(
        'Composition estimate from skinfolds or Navy inputs',
        'Calipers, tape, or the Navy measurements the form asks for.',
        'You lack those measurements—do not invent skinfold millimeters.'
      ),
      'how-to-calculate-heart-rate': r(
        'Cardio zones from age or a known max HR',
        'Age or a recent true max-HR effort.',
        'You are changing medication that alters heart rate—get clinical advice first.'
      ),
      'how-to-calculate-pace': r(
        'Speed from a known distance and time',
        'A recent race or run of a stated distance.',
        'You need calendar age or timezone math—those live under Time & calendar.'
      ),
      'how-to-calculate-one-rep-max': r(
        'Barbell load from a submaximal set',
        'A recent honest set (reps and kg) not taken to ugly failure.',
        'You have no recent lift log, or you need programming beyond a single estimate.'
      ),
    },
    flow: [
      'Screen size with BMI only if height and weight are all you have.',
      'Set a daily budget with TDEE using a defensible activity factor.',
      'Split that budget on the macros page; recalculate when weight or training volume changes.',
    ],
    exampleTitle: 'Worked chain (educational, not a prescription)',
    exampleBody:
      'Example: 70 kg, 175 cm, 30-year-old, moderately active. BMI is a screening ratio first. TDEE then gives a daily kcal sketch. Macros split that sketch into protein/carbs/fat. Skip body-fat unless you have skinfolds or Navy tape. Re-run after a material weight change; this is not medical advice.',
    boundary:
      'Pace also lists under Time & calendar. Notation (sig figs) is Math & stats, not a health diagnosis.',
    secondary: {},
    faq: [
      {
        q: 'Is a “healthy BMI” a diagnosis?',
        a: 'No. WHO uses BMI in population studies. Individuals need waist trends, labs, and a clinician. Treat the number as context only.',
      },
      {
        q: 'Can I use BMR instead of TDEE for macros?',
        a: 'Macro plans usually start from TDEE (or a coach’s adjusted target). BMR is resting burn only; eating at BMR is not a default diet.',
      },
      {
        q: 'Why do 1RM and pace insist on a recent effort?',
        a: 'They extrapolate. A stale PR or a maximal-failure set skews next-session loads. Use a recent, honest effort and round conservatively.',
      },
      {
        q: 'Do these calculators upload my measurements?',
        a: 'Pages marked no-upload run in your browser. Still avoid entering identifying health records if your policy forbids any online tool.',
      },
    ],
    cites: {
      'who-bmi': 'WHO fact sheet: obesity and overweight (adult BMI context)',
    },
  },
  'personal-money': {
    title: 'Tip, EMI, or compound interest: which money math first',
    desc: 'Use tip, discount, or VAT at checkout; EMI or debt payoff for loans; compound interest when you have rate and time. Educational math, not financial advice.',
    intro:
      'For shoppers, employees, and households checking a bill, a pay rate, a loan sketch, or how inflation moves purchasing power. Confirm with the issuer before you sign.',
    tableTitle: 'Match the cash-flow moment to the calculator',
    groups: {
      checkout: 'At the register',
      pay: 'Pay and freelance rates',
      borrow: 'Installments and extra payments',
      growth: 'Growth, inflation, and percent change',
    },
    rows: {
      'how-to-calculate-tip': r(
        'Service bill gratuity',
        'Pre-tip subtotal and a tip percent you choose.',
        'The amount is VAT-exclusive tax or a loan installment—use VAT or EMI instead.'
      ),
      'how-to-calculate-discount': r(
        'Sale price from a percent off',
        'Original price and discount percent from the shelf sticker.',
        'You need markup over cost for a firm (Business finance) or a mortgage sketch (EMI).'
      ),
      'how-to-calculate-vat': r(
        'Tax exclusive vs inclusive price',
        'Net or gross amount plus the VAT rate on the invoice.',
        'You are splitting a restaurant tip or computing a 5-year car loan.'
      ),
      'how-to-calculate-salary-hourly': r(
        'Salary ↔ hourly comparison',
        'Annual (or monthly) pay and the hours-per-year assumption you will actually work.',
        'You need loan EMI or a tip on a receipt.'
      ),
      'how-to-calculate-emi': r(
        'Fixed installment loan sketch',
        'Principal, APR, and term from the lender sheet—not a round “12%” guess if the offer lists fees.',
        'You only want tipping math, or you need extra-payment order (debt payoff).'
      ),
      'how-to-calculate-debt-payoff': r(
        'Avalanche/snowball with extra payments',
        'Each balance, rate, minimum, and extra cash you can send.',
        'You have a single new loan offer to size—start with EMI, then come here for extras.'
      ),
      'how-to-calculate-compound-interest': r(
        'Balance after rate × time × compounding',
        'Principal, rate, years, and compounding frequency from the product.',
        'You only have start and end values (use CAGR) or a doubling heuristic (Rule of 72).'
      ),
      'how-to-calculate-rule-of-72': r(
        'Years to double (heuristic)',
        'A constant rate; this is mental math, not a contract yield.',
        'You have actual start/end values and a real span—use CAGR.'
      ),
      'how-to-calculate-present-value': r(
        'Discount a future cash amount',
        'Future value, discount rate, and periods you will stand behind.',
        'You wanted a tip or a sale-price percent off.'
      ),
      'how-to-calculate-cagr': r(
        'Annualized return between two values',
        'Start value, end value, and elapsed years.',
        'You only know a stated APR with deposits—use compound interest.'
      ),
      'how-to-calculate-inflation': r(
        'Purchasing-power change',
        'A price level then vs now, or an inflation rate you cite.',
        'You are computing a restaurant tip.'
      ),
      'how-to-calculate-percentage-change': r(
        'Old vs new amount (prices, pay, balances)',
        'Two dollar (or percent) amounts you already have.',
        'The same formula for homework lives under Math; use that hub if it is not money.'
      ),
    },
    flow: [
      'Size a new loan on EMI with the lender’s rate, term, and fee treatment.',
      'If you will pay extra, move the same balances onto debt payoff to order avalanche vs snowball.',
    ],
    exampleTitle: 'Receipt vs $10k loan',
    exampleBody:
      'A dinner check uses tip (and VAT if tax is excluded). A $10,000, 12% APR, 5-year installment belongs on EMI; adding $50 extra per month belongs on debt payoff. Rule of 72 is only “about how long to double,” not a substitute for CAGR between two known portfolio values.',
    boundary:
      'Markup, ROI, NPV, and IRR are Business finance. Age calculators are Time & calendar even when listed here secondarily.',
    secondary: {
      'how-to-calculate-age': 'Birthday-based age when a quote or benefit uses completed years—not loan math.',
      'how-to-calculate-markup': 'Retail cost-uplift when you are pricing a SKU, not a shopper discount.',
      'how-to-calculate-roi': 'Campaign or project return framed as a deal, not a household savings heuristic.',
    },
    faq: [
      {
        q: 'Why is my bank EMI different?',
        a: 'Day-count, fees capitalized into principal, insurance add-ons, or rate resets. Match the offer sheet; this page is a second opinion, not the contract.',
      },
      {
        q: 'Rule of 72 vs CAGR?',
        a: '72 is a doubling shortcut. CAGR needs start, end, and time. Use 72 for intuition only.',
      },
      {
        q: 'Is this investment advice?',
        a: 'No. Household tools are educational YMYL helpers. Confirm tax, credit, and product disclosures with a licensed advisor or the issuer.',
      },
      {
        q: 'Percent change for school homework?',
        a: 'The formula is the same. Open Math & stats when the story is data, not prices or pay.',
      },
    ],
    cites: {
      cfpb: 'Consumer Financial Protection Bureau — consumer money tools',
    },
  },
  'business-finance': {
    title: 'Markup, break-even, or NPV: which deal math first',
    desc: 'Start with markup vs margin (different denominators), then break-even, then NPV if cash spans years. $40 cost at $80 is 100% markup, not 50% margin.',
    intro:
      'For operators pricing a SKU or sketching a project before a full model. Keep cash vs accrual timing explicit.',
    tableTitle: 'Unit economics, then capacity, then capital',
    groups: {
      unit: 'Unit economics (watch the denominator)',
      capacity: 'Volume to cover costs',
      capital: 'Return, payback, and discounted cash',
    },
    rows: {
      'how-to-calculate-markup': r(
        'Uplift over cost',
        'Unit cost and the markup percent your sheet actually uses.',
        'You meant profit over selling price—that is margin, not markup.'
      ),
      'how-to-calculate-gross-margin': r(
        'Gross profit over sales',
        'Revenue and COGS for the same period.',
        'You only have cost and want “plus 50%”—that is markup.'
      ),
      'how-to-calculate-profit-margin': r(
        'Net (or operating) profit over sales',
        'Profit and revenue on the same accounting basis.',
        'You need contribution after variable costs only—use contribution margin.'
      ),
      'how-to-calculate-contribution-margin': r(
        'Price minus variable cost',
        'Selling price and variable cost per unit (or in total).',
        'You wanted GAAP gross margin including allocated overhead you have not modeled.'
      ),
      'how-to-calculate-marginal-revenue': r(
        'Extra revenue from one more unit (or a price move)',
        'Quantities and revenues at two nearby points.',
        'You need a one-shot campaign ROI with a single spend and return.'
      ),
      'how-to-calculate-break-even': r(
        'Units or revenue to cover fixed + variable',
        'Fixed costs, variable cost per unit, and price.',
        'You already know the cash-flow calendar and discount rate—jump to NPV.'
      ),
      'how-to-calculate-roi': r(
        'Return on a spend or project outlay',
        'Gain and cost you will defend in the same currency.',
        'Cash is spread over years with a discount rate—use NPV or IRR, not a single ROI ratio alone.'
      ),
      'how-to-calculate-payback-period': r(
        'How fast cash returns (undiscounted)',
        'Investment and periodic inflows without a discount rate.',
        'Projects differ in scale or tail cash—NPV/IRR after payback is shown.'
      ),
      'how-to-calculate-npv': r(
        'Discounted cash-flow value',
        'A full cash calendar and one explicit discount rate.',
        'You only asked “how many months to get cash back”—use payback first.'
      ),
      'how-to-calculate-irr': r(
        'Rate that zeros NPV',
        'The same cash calendar as NPV; watch non-conventional sign flips.',
        'Cash flows change sign more than once—IRR can mislead; prefer NPV.'
      ),
    },
    flow: [
      'Lock markup vs margin on the same SKU so the denominator is shared in the room.',
      'Size break-even units from fixed, variable, and price.',
      'If cash spans years, run NPV with an explicit discount rate (IRR only if the calendar is conventional).',
    ],
    exampleTitle: '$40 cost, $80 price',
    exampleBody:
      'Markup is ($80−$40)/$40 = 100%. Gross margin is ($80−$40)/$80 = 50%. Mixing “50% markup” with “50% margin” is the usual pricing-meeting error. Break-even then needs fixed costs; NPV needs a rate you name.',
    boundary:
      'Shopper VAT, discount, compound interest, CAGR, and present value may list here secondarily—the URLs stay on Personal money as primary.',
    secondary: {
      'how-to-calculate-cagr': 'Annualized return when a board pack already has start/end values.',
      'how-to-calculate-compound-interest': 'Savings-style compounding when pricing overlaps a consumer product.',
      'how-to-calculate-discount': 'Shelf percent-off that still informs list vs promo policy.',
      'how-to-calculate-present-value': 'Discounting a single future amount without a full IRR calendar.',
      'how-to-calculate-vat': 'Invoice tax when a quote is net of VAT.',
    },
    faq: [
      {
        q: 'Why are markup and margin separate pages?',
        a: 'Different denominators. A 50% markup is not a 50% margin. One headline that mixes them causes pricing errors.',
      },
      {
        q: 'When is payback enough?',
        a: 'When leadership only asks how fast cash returns. Use NPV/IRR when timing, scale, or risk differs across projects.',
      },
      {
        q: 'Are these audited financials?',
        a: 'No. They ignore multi-entity tax, FX hedges, and IFRS/GAAP presentation unless you encode them.',
      },
      {
        q: 'Can IRR be wrong even if the math is correct?',
        a: 'Yes, with non-conventional cash flows (multiple IRRs). Prefer NPV with a stated discount rate in that case.',
      },
    ],
    cites: {},
  },
  'math-stats': {
    title: 'Mean, median, or p-value: which math tool first',
    desc: 'Use median when outliers dominate, mean when every value feeds a formula, p-value only after you chose a test. Example: {2, 3, 100} — lead with median.',
    intro:
      'For students and analysts who already know which statistic or equation they need and want visible steps.',
    tableTitle: 'Center, inference, school algebra, or lab notation',
    groups: {
      center: 'Typical value and spread',
      inference: 'Tests you already chose',
      school: 'Counting, GPA, and algebra',
      notation: 'How you write the number',
    },
    rows: {
      'how-to-calculate-mean': r(
        'Average of every value',
        'A list where each observation should count.',
        'Skew or a 100× outlier dominates—lead with median.'
      ),
      'how-to-calculate-median': r(
        'Middle value (resistant to outliers)',
        'An ordered list; odd/even length handled on the page.',
        'A parametric formula explicitly needs the mean.'
      ),
      'how-to-calculate-standard-deviation': r(
        'Spread around the mean',
        'The same list you used for the mean, plus sample vs population choice.',
        'You only wanted a typical value and have not chosen mean vs median yet.'
      ),
      'how-to-calculate-z-score': r(
        'How many SDs from a mean',
        'One value, plus mean and SD of the reference distribution.',
        'You have not computed spread yet, or the distribution is badly skewed.'
      ),
      'how-to-calculate-p-value': r(
        'Evidence against a null you already named',
        'A test statistic and the test you chose—not auto-selected here.',
        'You wanted effect size or a CI; a small p is not a large effect.'
      ),
      'how-to-calculate-confidence-interval': r(
        'Range for a parameter at a stated level',
        'Estimate, SE or SD, n, and confidence level (e.g. 95%).',
        'You have not picked a test family; this is not automated model selection.'
      ),
      'how-to-calculate-sample-size': r(
        'How many observations for a power/precision target',
        'Effect size, alpha, power (or CI width) you will defend.',
        'You already collected the data and need a p-value on that sample.'
      ),
      'how-to-calculate-permutation-combination': r(
        'Counting arrangements vs unordered sets',
        'n and k, plus whether order matters.',
        'You need a quadratic solver or GPA points.'
      ),
      'how-to-calculate-quadratic-equation': r(
        'Solve ax²+bx+c=0',
        'Coefficients a, b, c (a ≠ 0).',
        'You needed log/exponent rewrite, not roots.'
      ),
      'how-to-calculate-exponent': r(
        'Powers and growth factors',
        'Base and exponent the homework actually uses.',
        'You needed logarithm to undo a power.'
      ),
      'how-to-calculate-logarithm': r(
        'Log to a stated base',
        'Argument and base (common, natural, or other).',
        'You needed a raw exponentiation.'
      ),
      'how-to-calculate-gpa': r(
        'Grade-point average on a scale',
        'Credits and grades plus your school’s scale (4.0 vs other).',
        'Your transcript policy differs—match the registrar, not a generic 4.0.'
      ),
      'how-to-calculate-scientific-notation': r(
        'Rewrite a measurement as a×10^n',
        'A decimal or integer you must report in sci form.',
        'The unknown is velocity or Ohm’s law—use Science & physics.'
      ),
      'how-to-calculate-significant-figures': r(
        'Round to a digit count',
        'The raw value and how many sig figs the lab asks for.',
        'You are solving a physics identity, not reporting digits.'
      ),
    },
    flow: [
      'If {2, 3, 100} is your data, report median first.',
      'Show mean second only if a formula needs every value.',
      'Do not compute a z-score until mean and SD actually describe the distribution.',
    ],
    exampleTitle: 'Dataset {2, 3, 100}',
    exampleBody:
      'Median is 3. Mean is 35. A z-score on 100 using that mean/SD is a stretch if the shape is one outlier. P-values do not measure effect size. GPA scales are school-specific.',
    boundary:
      'Pythagorean theorem and percent change may list secondarily. Physics motion tools live under Science & physics.',
    secondary: {
      'how-to-calculate-percentage-change': 'Old vs new when the story is data, not a price tag.',
      'how-to-calculate-pythagorean-theorem': 'Right-triangle sides when the homework is geometry, not inference.',
    },
    faq: [
      {
        q: 'Does a small p-value mean a large effect?',
        a: 'No. Large n can make tiny effects “significant.” Pair p with a CI or a field-standard effect size.',
      },
      {
        q: 'Sample or population standard deviation?',
        a: 'Match the page control to your context (n vs n−1). Mixing them silently breaks z-scores.',
      },
      {
        q: 'Is this a full stats package?',
        a: 'No mixed models, survey weights, or automatic test picking. You choose the identity.',
      },
      {
        q: 'Why are sig figs with stats?',
        a: 'Lab reporting is quantitative literacy. Kinematics calculators stay under Science & physics.',
      },
    ],
    cites: {},
  },
  'geometry-measure': {
    title: 'Area, slope, or unit convert: which measure tool',
    desc: 'Named shapes use triangle, circle, volume, or Pythagoras. Ramps use slope or gradient. Buying paint or concrete belongs under Home & DIY.',
    intro:
      'For homework and fabrication when you can name sides, radius, rise/run, or from-unit/to-unit—without opening CAD.',
    tableTitle: 'Shapes, grade, ratio, or generic units',
    groups: {
      shapes: 'Named Euclidean shapes',
      grade: 'Slope, grade, and screen ratio',
      units: 'Generic unit conversion',
    },
    rows: {
      'how-to-calculate-triangle-area': r(
        'Triangle area from the sides or base/height the form lists',
        'The lengths the chosen formula requires (no missing side).',
        'You are ordering tile—use Home & DIY after net area.'
      ),
      'how-to-calculate-circle': r(
        'Circumference or disk area',
        'Radius or diameter, not a screenshot crop.',
        'You needed pixel aspect ratio for a social crop.'
      ),
      'how-to-calculate-volume': r(
        'Box or prism volume (L×W×H or listed solid)',
        'All three dimensions in one unit system.',
        'You need bag count for a pour—open the concrete estimator next.'
      ),
      'how-to-calculate-pythagorean-theorem': r(
        'Right-triangle missing side',
        'Two sides of a right triangle.',
        'The triangle is not right-angled, or you need area not a side.'
      ),
      'how-to-calculate-slope': r(
        'Rise/run (or equivalent) for a line',
        'Rise and run in consistent units.',
        'Your spec is percent grade or an angle—read gradient vs slope on the page.'
      ),
      'how-to-calculate-gradient': r(
        'Grade notation used in roads/ramps',
        'The same rise/run, expressed as the standard your spec uses.',
        'You needed a graph slope for algebra homework (slope tool).'
      ),
      'how-to-calculate-aspect-ratio': r(
        'Width:height relationship',
        'Two pixel or length sides.',
        'You need to actually crop pixels—use Image & media crop/platform tools.'
      ),
      'unit-converter': r(
        'Length, mass, temperature, and other generic conversions',
        'A from-value and two units.',
        'The job is paint/tile coverage—Home & DIY estimators include waste.'
      ),
    },
    flow: [
      'Compute geometric volume (or area) in one unit system.',
      'Convert units only after the formula, so you do not mix feet and meters in L×W×H.',
    ],
    exampleTitle: 'Slab before bags',
    exampleBody:
      'A 12×10×0.33 ft slab is a volume identity here. Bag count and waste live on the Home & DIY concrete tool. Mixing in and ft in the same product is the usual ordering error.',
    boundary:
      'Square-feet for rooms is primary under Home & DIY even when listed here secondarily. Survey curvature and building codes are out of scope.',
    secondary: {
      'square-feet': 'Room or lot area when the job is buying materials, not abstract geometry.',
    },
    faq: [
      {
        q: 'Slope vs gradient?',
        a: 'Related, but ratio, percent grade, and angle are different notations. Match the road, ramp, or roof spec.',
      },
      {
        q: 'Can aspect ratio replace crop?',
        a: 'No. It only states the target ratio. Pixel cropping is Image & media.',
      },
      {
        q: 'Why is unit conversion not DIY?',
        a: 'It is generic. DIY pages add coverage rates and waste for a purchase.',
      },
      {
        q: 'Do these include GIS curvature?',
        a: 'No. Euclidean planar/solid formulas only.',
      },
    ],
    cites: {},
  },
  'science-physics': {
    title: 'Velocity, Ohm’s law, or density: which physics identity',
    desc: 'Match the chapter: kinematics, Ohm’s law, density, or a field helper. Example: 12 V and 3 A → 4 Ω for homework—not house wiring.',
    intro:
      'For STEM homework when you already know which quantity you are solving for and can keep units consistent.',
    tableTitle: 'Physics quantities by the unknown you named',
    groups: {
      motion: 'Kinematics',
      circuits: 'Ohm’s law (learning only)',
      materials: 'Density identity',
      fields: 'Magnetic-field helper',
    },
    rows: {
      'how-to-calculate-velocity': r(
        'Speed or velocity from displacement and time (as the page defines)',
        'Distance or displacement and elapsed time in consistent units.',
        'You needed acceleration (rate of change of velocity) or a density mass/volume.'
      ),
      'how-to-calculate-acceleration': r(
        'Change of velocity over time',
        'Two velocities (or Δv) and Δt.',
        'You only have a single average speed with no time span for Δv.'
      ),
      'how-to-calculate-ohms-law': r(
        'V = IR relationships in learning problems',
        'Any two of V, I, R to solve the third.',
        'You are sizing household wiring, breakers, or derating—hire a qualified electrician.'
      ),
      'how-to-calculate-density': r(
        'Mass divided by volume',
        'Mass and volume of the same sample.',
        'You needed DIY pour volume in bags (Home & DIY), not a science identity.'
      ),
      'measuring-magnetic-fields': r(
        'Sensor-style field reading helper',
        'The inputs the page lists; calibrate against a known reference.',
        'Safety-critical decisions without a calibrated instrument.'
      ),
    },
    flow: [
      'If the unknown is how fast position changes, use velocity with consistent units.',
      'If the unknown is how fast velocity changes, use acceleration with two speeds and Δt.',
    ],
    exampleTitle: '12 V, 3 A (homework only)',
    exampleBody:
      'Ohm’s law: R = V/I = 12/3 = 4 Ω. That identity does not size house cable. Density is mass/volume, not a concrete bag estimator. Scientific notation lives under Math & stats.',
    boundary:
      'Friction, relativity, and non-ohmic devices are not modeled. Notation tools list here secondarily.',
    secondary: {
      'how-to-calculate-scientific-notation': 'Rewrite a lab number as a×10^n after you have the quantity.',
      'how-to-calculate-significant-figures': 'Round the reported digits; does not solve V=IR for you.',
    },
    faq: [
      {
        q: 'Can Ohm’s law size house wiring?',
        a: 'Not safely. Codes, breaker curves, and temperature derating need a qualified electrician. Use the page for V=IR homework only.',
      },
      {
        q: 'Do these replace a textbook?',
        a: 'No. They check arithmetic on identities you already set up.',
      },
      {
        q: 'Density vs DIY volume?',
        a: 'Density is mass/volume science. DIY volume is a pour or container for materials.',
      },
      {
        q: 'Should I trust a phone magnetometer?',
        a: 'Treat it as educational. Calibrate against a known reference before any safety decision.',
      },
    ],
    cites: {
      'nist-si': 'NIST — SI units',
    },
  },
  'home-diy': {
    title: 'Paint, tile, or concrete: which materials estimate',
    desc: 'Measure area first, then paint (coats), tile (waste), or concrete (volume then bags). Geometry volume first; bag yield is on the concrete page.',
    intro:
      'For homeowners and small contractors planning a refresh or pour. Tools do not inspect moisture or structural load.',
    tableTitle: 'Area baseline, then coverage with waste',
    groups: {
      area: 'Room area in mixed units',
      materials: 'Paint, tile, concrete purchases',
    },
    rows: {
      'square-feet': r(
        'Room or lot area when drawings mix feet and inches',
        'Length and width of the finished surface.',
        'You only needed an abstract L×W×H formula with no purchase—Geometry volume is enough.'
      ),
      'how-to-calculate-paint': r(
        'Wall/ceiling coverage with coats',
        'Net area plus coats; label spread rate is ideal-surface.',
        'You are tiling a floor or pouring a footing.'
      ),
      'how-to-calculate-tile': r(
        'Floor/wall tile plus pattern waste',
        'Net area plus a waste % (often ~10%, more for diagonals).',
        'You are buying paint cans or ready-mix bags.'
      ),
      'how-to-calculate-concrete': r(
        'Form volume then bag count',
        'Inside form dimensions, then the yield printed on the bag.',
        'You only wanted geometric volume with no bags—use Geometry first if dimensions are the question.'
      ),
    },
    flow: [
      'Get net area (square feet) of the finished surface, not the exterior wall if you are tiling inside.',
      'Turn volume into bags on the concrete page using the mix data sheet yield, not a generic internet bag weight.',
    ],
    exampleTitle: '12×10×0.33 ft slab',
    exampleBody:
      'Volume is 12×10×0.33 cubic feet on the geometry identity if you need L×W×H only. The concrete tool then applies waste and bag yield. Do not skip measuring trim and fixtures before tile waste.',
    boundary:
      'Gradient, volume, and unit converter list secondarily when a job needs both shape math and a purchase.',
    secondary: {
      'how-to-calculate-gradient': 'Ramp or drainage grade when the spec is percent slope, not paint coverage.',
      'how-to-calculate-volume': 'L×W×H before bag math when the form is a simple box.',
      'unit-converter': 'm² ↔ ft² when drawings mix SI and US customary.',
    },
    faq: [
      {
        q: 'How much tile waste?',
        a: 'Simple layouts often ~10%; diagonals and herringbone often 15%+. Check tile size against room dimensions to avoid slivers.',
      },
      {
        q: 'Paint label vs real walls?',
        a: 'Spread rates assume ideal surfaces. Texture, deep color, and primer change consumption—round up.',
      },
      {
        q: 'Is volume the same as bag count?',
        a: 'Volume first; bags follow printed yield. Moisture and compaction change field yield.',
      },
      {
        q: 'Inside or outside dimensions for tile?',
        a: 'Measure the finished surface you will cover. Add pattern waste after net area.',
      },
    ],
    cites: {},
  },
  'time-calendar': {
    title: 'Age, date span, timezone, or Unix: which time tool',
    desc: 'Age uses birthdays; date difference uses two dates; meetings need an IANA zone ID. 10-digit Unix is seconds; 13-digit is usually milliseconds.',
    intro:
      'For trip planners and engineers answering how old, how many days, what time there, or what UTC instant this epoch is.',
    tableTitle: 'Human dates vs zone IDs vs epoch digits',
    groups: {
      human: 'Age and calendar spans',
      zones: 'Meetings across regions',
      epoch: 'Unix timestamps',
    },
    rows: {
      'how-to-calculate-age': r(
        'Completed years from a birthday',
        'Birth date and a timezone that matches the legal or personal context.',
        'You needed elapsed project days between two booking dates (date difference).'
      ),
      'how-to-calculate-date-difference': r(
        'Days (or duration) between two dates',
        'Start and end dates; say whether you mean calendar days or exact 24-hour spans.',
        'You needed age in completed years, or epoch seconds for an API.'
      ),
      'timezone-converter': r(
        'Wall time in another IANA zone',
        'A real IANA ID (e.g. America/New_York), not only a city nickname.',
        'You are converting epoch milliseconds from logs—use Unix timestamp first.'
      ),
      'unix-timestamp': r(
        'Epoch seconds or milliseconds ↔ civil time',
        'Digit length (~10 vs ~13) or an explicit seconds/millis toggle.',
        'You only needed “how old am I” with a birthday.'
      ),
    },
    flow: [
      'If the log shows 13 digits, treat Unix time as milliseconds before converting.',
      'Then convert the civil time with an IANA zone ID, not a three-letter nickname.',
    ],
    exampleTitle: '10 digits vs 13 digits',
    exampleBody:
      'Unix seconds are ~10 digits; many JavaScript APIs use ~13-digit milliseconds. Mixing them shifts the result by centuries. Age near midnight still depends on timezone. Legal deadlines may use business-day calendars these tools do not encode.',
    boundary:
      'Run pace is Health & body. Unix and timezone also list under Dev & data when the job is debugging code.',
    secondary: {
      'how-to-calculate-pace': 'Distance over time for training, not a calendar booking span.',
    },
    faq: [
      {
        q: 'Why did age change a day before my birthday?',
        a: 'Completed years in a timezone. UTC vs local midnight can shift the boundary.',
      },
      {
        q: 'Seconds or milliseconds?',
        a: 'Check digit length or the page toggle. Do not guess.',
      },
      {
        q: 'Does timezone conversion handle DST?',
        a: 'IANA zones include DST rules. Ambiguous fallback times still need an explicit offset choice.',
      },
      {
        q: 'Business-day deadlines?',
        a: 'Out of scope. These tools do not encode bank holidays.',
      },
    ],
    cites: {
      'iana-tz': 'IANA time zone database',
    },
  },
  'pdf-docs': {
    title: 'Merge, compress, or protect: which PDF step first',
    desc: 'Fix page order (merge/organize) before you compress once. Protect only files you own. Keep an uncompressed backup. No OCR or e-sign on this hub.',
    intro:
      'For office and ops reshaping PDF packages in the browser. Prefer no-upload pages for sensitive files. This hub does not do OCR, e-sign, or desktop Word Track Changes.',
    tableTitle: 'Structure first, then size, then access, then export',
    groups: {
      structure: 'Page order and orientation',
      size: 'Bytes and framing',
      access: 'Passwords you control',
      export: 'Markdown, images, watermark',
    },
    rows: {
      'merge-pdf': r(
        'Combine files into one page order',
        'The PDFs in the final sequence (you can still reorder after).',
        'You only needed to shrink one already-final file—compress after merge, not instead of it.'
      ),
      'split-pdf': r(
        'Extract a page range into a new file',
        'A single PDF and the page numbers you have rights to copy.',
        'You wanted to shuffle pages inside one file—use organize.'
      ),
      'organize-pdf': r(
        'Reorder, rotate, or drop pages in one file',
        'One PDF whose page list you will edit.',
        'You are concatenating many files—merge first, then organize.'
      ),
      'rotate-pdf': r(
        'Fix orientation of selected pages',
        'Pages that are sideways or upside down.',
        'You needed crop for margins/bleed rather than rotation.'
      ),
      'pdf-page-numbers': r(
        'Stamped page numbers',
        'A pagination scheme (start number, position) you will keep.',
        'The file is still in the wrong order—organize before numbering.'
      ),
      'compress-pdf': r(
        'Reduce bytes for email or upload caps',
        'A file whose page order is already final; preview at 100% after.',
        'You still need to merge six drafts—merge first so you compress once.'
      ),
      'crop-pdf': r(
        'Trim margins or bleed',
        'Visible crop box intent; keep a backup.',
        'You needed JPEG export of pages (PDF to JPG) rather than vector crop.'
      ),
      'protect-pdf': r(
        'Add a password you control',
        'A password you will store in a manager, plus the file you own.',
        'You do not know the password of someone else’s file—do not attempt circumvention.'
      ),
      'unlock-pdf': r(
        'Remove a password you legitimately know',
        'The owner password for a file you have rights to.',
        'The file uses DRM you do not own—unlock is not a cracker.'
      ),
      'pdf-to-markdown': r(
        'Text PDF → Markdown draft for git/docs',
        'A text-based PDF (scans will be poor).',
        'You needed pixel images of pages (PDF to JPG) or a compare of two Word files (Text compare).'
      ),
      'pdf-to-jpg': r(
        'Rasterize pages to images',
        'A PDF you may render; pick DPI the spec allows.',
        'You needed to merge PDFs or add a password.'
      ),
      'pdf-page-to-image-sizes': r(
        'Target pixel sizes for page renders',
        'A size spec (platform or print) before batch raster.',
        'You are still deciding merge vs split.'
      ),
      'pdf-watermark': r(
        'Visible draft/attribution mark',
        'Text or image mark plus placement; not DRM.',
        'You needed encryption (protect) rather than a visible stamp.'
      ),
    },
    flow: [
      'Merge to the intended page order (then organize/rotate/page numbers if needed).',
      'Organize until pagination looks right at full quality.',
      'Compress once on the combined file for the email/upload cap.',
      'Protect last if the recipient needs a password you control; keep an uncompressed backup.',
    ],
    exampleTitle: '12-page pack, 8 MB email cap',
    exampleBody:
      'Merge the twelve pages, fix rotation, then compress once and preview at 100%. Compressing each file first makes you guess the combined size. Word-to-word diffs are Text compare, not this hub. Images-to-PDF starts under Image & media.',
    boundary:
      'This topic does not OCR scans, fill XFA, or e-sign. Images-to-PDF/PPT/Word and Word compare list secondarily when the job starts from those inputs.',
    secondary: {
      'compare-two-word-documents-for-differences': 'Two .docx files: extract readable text and diff—not PDF page tools.',
      'images-to-pdf': 'Batch photos into a PDF; page edits still happen here after export.',
      'images-to-ppt': 'Office deck from images, not PDF merge.',
      'images-to-word': 'Image batch to Word, not PDF split.',
      'markdown-to-html': 'Docs pipeline HTML output when PDF→Markdown was the prior step.',
    },
    faq: [
      {
        q: 'Will compress keep vector sharpness?',
        a: 'Depends on vector vs image pages and downsampling. Preview critical pages at 100% before print.',
      },
      {
        q: 'Is unlock for any locked PDF?',
        a: 'Only files you have rights to, with a password you legitimately know. Circumventing others’ DRM can be unlawful.',
      },
      {
        q: 'Merge before or after compress?',
        a: 'Usually merge and organize first, compress once. Keep an uncompressed backup until recipients confirm.',
      },
      {
        q: 'Are files uploaded?',
        a: 'No-upload badges mean the PDF stays in this browser tab. Edge tools are marked separately. Do not process secrets if policy forbids any online tool.',
      },
    ],
    cites: {},
  },
  'image-media': {
    title: 'Platform size or compress: pick the image job',
    desc: 'Use a platform-size page for exact pixels. Crop, then convert format, then compress. Strip EXIF before public posts. No generative upscale here.',
    intro:
      'For creators and marketers preparing assets in the browser. Platform pages are not generic crop; compress is not a social-size template.',
    tableTitle: 'Pixel spec, transform, compose, or export—not one dump',
    groups: {
      platform: 'Channel pixel specs and safe zones',
      transform: 'Crop, format, then bytes',
      compose: 'Merge, GIF, watermark',
      export: 'Office packages, Base64, EXIF, colors',
    },
    rows: {
      'youtube-thumbnail-size': r(
        'YouTube thumbnail pixel box and safe zone',
        'A still that must match YouTube’s current thumbnail dimensions.',
        'You only wanted generic crop or byte reduction with no platform spec.'
      ),
      'instagram-post-size': r(
        'Instagram feed post pixel spec',
        'The feed aspect the app currently expects for that slot.',
        'You needed Stories dimensions (different spec) or LinkedIn banner.'
      ),
      'instagram-story-size': r(
        'Instagram/Facebook story pixel spec',
        'A 9:16 story frame, not a square feed post.',
        'You needed a YouTube thumbnail or Open Graph card.'
      ),
      'linkedin-banner-size': r(
        'LinkedIn cover/banner pixels',
        'A wide banner with LinkedIn’s safe area in mind.',
        'You needed an App Store screenshot set or Amazon main image.'
      ),
      'open-graph-image-size': r(
        'Open Graph / social card pixels',
        'A share-card image sized for OG crawlers.',
        'You needed in-feed Instagram specs or PDF page raster sizes.'
      ),
      'amazon-main-image-size': r(
        'Amazon main-image pixel and background rules the page lists',
        'A product still that must meet marketplace main-image constraints.',
        'You needed an iOS app icon or YouTube thumb.'
      ),
      'apple-touch-icon': r(
        'Apple touch icon sizes',
        'A square icon export for home-screen / touch targets.',
        'You needed App Store screenshot dimensions instead of a touch icon.'
      ),
      'ios-app-icon-size': r(
        'iOS app icon pixel set',
        'Icon master art you will export to the listed iOS sizes.',
        'You needed iPhone App Store screenshots (marketing stills, not the icon).'
      ),
      'iphone-app-store-screenshot': r(
        'App Store screenshot pixel presets',
        'Device-class screenshot frames the store listing requires.',
        'You needed a 1024 app icon or a LinkedIn banner.'
      ),
      'image-crop': r(
        'Arbitrary pixel crop / aspect',
        'An image and a target box you choose.',
        'A named platform already has a spec page—open that so safe zones are visible.'
      ),
      'image-format-converter': r(
        'JPEG / PNG / WebP (and listed formats) conversion',
        'A source file and a required target format.',
        'The channel already has the right format and you only need bytes—compress next.'
      ),
      'image-compress': r(
        'Reduce bytes with quality you can preview',
        'A file whose framing is already correct (crop first if large unused margins).',
        'You still need to convert to WebP/JPEG the channel requires—convert first.'
      ),
      'image-optimizer': r(
        'CWV-oriented weight pass with different knobs than compress',
        'A hero or LCP candidate you will A/B at 100% zoom.',
        'You needed SVG path weight (SVG optimizer) or EXIF strip only.'
      ),
      'svg-optimizer': r(
        'Vector SVG byte reduction',
        'An SVG, not a photo raster.',
        'The file is JPEG/PNG—use compress/optimizer, not SVG tools.'
      ),
      'flip-image': r(
        'Mirror or rotate pixels',
        'An image that is wrongly mirrored or oriented.',
        'You needed platform-safe cropping more than a flip.'
      ),
      'image-border': r(
        'Add a border in pixels',
        'Stroke width and color you will keep in the export.',
        'You needed a watermark for attribution, not a uniform border.'
      ),
      'image-grayscale': r(
        'Remove chroma',
        'A color original you intend to flatten.',
        'You needed print ICC—this is not a full color-managed pipeline.'
      ),
      'image-merge': r(
        'Combine images into one canvas',
        'The stills in layout order.',
        'You needed a GIF animation (images-to-GIF) or a PDF package.'
      ),
      'image-overlay': r(
        'Stack a foreground on a background',
        'Two (or more) layers with known sizes.',
        'You needed side-by-side merge without overlay semantics.'
      ),
      'images-to-gif': r(
        'Frame sequence → GIF',
        'Ordered frames and a delay you can live with.',
        'You needed a static collage (merge) or a PDF.'
      ),
      'add-watermark': r(
        'Visible attribution mark',
        'A mark and placement; keep an unmarked master.',
        'You needed EXIF GPS strip for privacy rather than a visible stamp.'
      ),
      'images-to-pdf': r(
        'Photos → PDF package',
        'Image files whose primary job is a document pack.',
        'You needed PDF merge/split/compress on existing PDFs (PDF & docs).'
      ),
      'images-to-ppt': r(
        'Images → PowerPoint',
        'Stills for a slide deck, not a PDF editor.',
        'The deliverable is a PDF pack—use images-to-PDF or PDF tools.'
      ),
      'images-to-word': r(
        'Images → Word',
        'Stills for a .docx, not PDF page tools.',
        'You needed Markdown from a text PDF (PDF to Markdown).'
      ),
      'image-to-base64': r(
        'Embed-ready data URL',
        'A small asset; huge photos blow CSS/HTML.',
        'You needed file-weight reduction for LCP, not a data URL.'
      ),
      'image-exif': r(
        'View or strip metadata (including GPS)',
        'A camera/phone original you might share publicly.',
        'You only needed JPEG quality compress with no metadata concern.'
      ),
      'color-from-image': r(
        'Sample colors from a photo',
        'An image used as a mood board, not a locked token system.',
        'You need WCAG contrast or CSS tokens—finish under Design & brand.'
      ),
    },
    flow: [
      'Crop to the platform spec (or a chosen box) so you are not compressing unused pixels.',
      'Convert to the format the channel requires (often JPEG/WebP).',
      'Compress/optimize last and A/B the hero at 100% zoom.',
    ],
    exampleTitle: '4K PNG hero for a social card',
    exampleBody:
      'Crop to the Open Graph or YouTube pixel spec first. Convert PNG→WebP if the channel allows it. Then compress for the byte budget. Stripping EXIF is a separate privacy step before a public post. Do not start with compress on a 4K canvas full of unused margin.',
    boundary:
      'Aspect-ratio math without pixels is Geometry. CWV lab checks and OG preview list under SEO. PDF watermarks on existing PDFs are PDF & docs.',
    secondary: {
      'core-web-vitals-checker': 'Lab LCP/INP/CLS snapshot after you already compressed the hero.',
      'how-to-calculate-aspect-ratio': 'Width:height identity when you are not cropping pixels yet.',
      'pdf-page-to-image-sizes': 'PDF page raster targets, not social stills.',
      'pdf-to-jpg': 'PDF pages to JPEG, not camera roll exports.',
      'pdf-watermark': 'Watermarking a PDF package, not a PNG/JPEG still.',
    },
    faq: [
      {
        q: 'Compress, optimizer, or converter first?',
        a: 'Format first if the channel requires JPEG/PNG/WebP. Crop before compress when unused margins are large. Optimizer vs compress: read the knobs; A/B heroes.',
      },
      {
        q: 'Do watermarks stop reuse?',
        a: 'No. They deter casual reuse. Keep unmarked masters private.',
      },
      {
        q: 'Why is images-to-PDF under images?',
        a: 'The job starts from image inputs. PDF-centric edits stay under PDF & docs; this slug can list in both hubs.',
      },
      {
        q: 'Browser memory on huge RAW?',
        a: 'Tabs cap very large TIFF/RAW jobs. There is no “AI upscale magic” here—expect honest resampling.',
      },
    ],
    cites: {},
  },
  'design-brand': {
    title: 'Contrast, palette, or tokens: which color step',
    desc: 'Check WCAG contrast before locking CSS tokens. Example: a brand hex on white may pass AA and fail AAA. Photo palettes start under Image & media.',
    intro:
      'For designers and PMs aligning brand color with accessibility. Not a Figma component library.',
    tableTitle: 'Accessibility gate, then palette, then handoff',
    groups: {
      a11y: 'Luminance contrast',
      palette: 'Coherent light/dark sets',
      tokens: 'Named roles and export',
    },
    rows: {
      'wcag-contrast-checker': r(
        'Text/UI pair against AA or AAA',
        'Foreground and background hex (and large-text vs body).',
        'You only sampled a photo palette and have not picked a text/background pair yet.'
      ),
      'smart-website-color-scheme': r(
        'Coherent scheme from a seed brand color',
        'A seed hex you will actually ship.',
        'You needed a contrast verdict on two already-chosen colors, not a generated scale.'
      ),
      'brand-color-token-pack': r(
        'CSS variables / design tokens from roles',
        'Semantic roles (surface, text, accent) with light/dark values.',
        'A single hex is not a dark-mode system—map roles, then QA on real screens.'
      ),
      'brand-style-guide': r(
        'Documented color roles for a team',
        'The same roles you will paste into the guide.',
        'You still fail contrast on body text—fix pairs before documenting exceptions.'
      ),
    },
    flow: [
      'Gate body and UI pairs on the contrast checker (AA vs AAA per your policy).',
      'Export tokens only for colors that already have a role and a contrast story.',
    ],
    exampleTitle: '#1a73e8 on white',
    exampleBody:
      'Run the pair at body size and large-text thresholds. AA passing is not AAA. Dark mode needs separate surface/text values, not the same hex inverted blindly. Extracting colors from a photo is Image & media, then lock tokens here.',
    boundary:
      'Open Graph preview and color-from-image list secondarily. User testing still required.',
    secondary: {
      'color-from-image': 'Mood-board sampling before you lock accessible tokens.',
      'open-graph-preview': 'Social card check after brand colors are chosen.',
    },
    faq: [
      {
        q: 'AA vs AAA default?',
        a: 'Many products target AA for body UI and reserve AAA for critical text. Confirm policy and test large-text separately.',
      },
      {
        q: 'Are hex tokens enough for dark mode?',
        a: 'Usually you need semantic roles with light/dark values. Themes still need QA.',
      },
      {
        q: 'Does contrast catch color-blind issues?',
        a: 'It helps luminance separation, not all color-vision deficiencies. Pair with non-color cues.',
      },
      {
        q: 'Contrast passed—done with a11y?',
        a: 'No. Font size, weight, focus states, and cognitive load remain. Contrast tools catch luminance failures.',
      },
    ],
    cites: {
      'wcag-contrast': 'W3C WCAG 2.2 Understanding — contrast minimum',
    },
  },
  'seo-growth': {
    title: 'Meta, sitemap, or IndexNow: which SEO step after publish',
    desc: 'Write visible titles first, then sitemap, then optional IndexNow. Pinging does not rank a page. No rank guarantee. FAQ rich results are retired.',
    intro:
      'For SEOs and webmasters doing people-first checks. These helpers are not a rank-manipulation kit.',
    tableTitle: 'Snippet, technical files, signals, then campaign tags',
    groups: {
      snippet: 'Titles, SERP and social cards',
      technical: 'robots, sitemap, hreflang, schema',
      signals: 'Index notify, on-page audit, CWV lab',
      campaigns: 'UTM parameters',
    },
    rows: {
      'meta-tag-generator': r(
        'Title/description markup draft',
        'Copy that already exists on the visible page (no cloaking).',
        'You needed a rendered SERP pixel preview—use SERP preview after the strings exist.'
      ),
      'meta-serp-preview': r(
        'How a title/description may wrap in a SERP',
        'Candidate title and description; Google may rewrite anyway.',
        'You still have no on-page H1—write the page first.'
      ),
      'open-graph-preview': r(
        'Social share card',
        'OG image and title that match the URL.',
        'You needed Core Web Vitals on the HTML, not a Facebook card.'
      ),
      'robots-txt-generator': r(
        'robots.txt draft',
        'Paths you truly want allowed or disallowed.',
        'You needed a URL list for crawlers (sitemap), not robots rules.'
      ),
      'sitemap-xml-generator': r(
        'URL list for crawlers',
        'Canonical URLs you will actually publish.',
        'You thought IndexNow replaces sitemaps—it does not.'
      ),
      'hreflang-generator': r(
        'Locale cluster annotations',
        'The real hreflang map of URLs you ship.',
        'A single-language site with no locale variants.'
      ),
      'schema-jsonld-generator': r(
        'JSON-LD that matches visible copy',
        'A type the page actually supports (no fake ratings).',
        'You wanted JSON Schema for APIs (Dev & data), not search markup.'
      ),
      'indexnow': r(
        'Notify participating engines of URL changes',
        'A meaningful publish or update, plus your key.',
        'You have not made the URL crawlable (robots, links, sitemap) yet.'
      ),
      'on-page-seo-checker': r(
        'Quick visible audit of a URL you may test',
        'A public URL; this is not Search Console.',
        'You needed DNS/TLS/header debugging—Network & IP first.'
      ),
      'core-web-vitals-checker': r(
        'Lab LCP/INP/CLS snapshot',
        'A URL and a lab run you will not confuse with field CrUX.',
        'You have not compressed the LCP image yet—Image compressors may list secondarily.'
      ),
      'utm-builder': r(
        'Tagged campaign URLs',
        'Source/medium/campaign you will keep consistent in analytics.',
        'You needed hreflang or a sitemap, not ads parameters.',
      ),
    },
    flow: [
      'Confirm indexable visible copy, title, and canonical/hreflang.',
      'Refresh sitemap with the live canonical URLs.',
      'Optionally ping IndexNow after a meaningful change—not as a rank switch.',
    ],
    exampleTitle: 'After shipping a new tool page',
    exampleBody:
      'The page must be crawlable and snippet-eligible. Sitemap includes the URL. IndexNow is an optional notify. Rankings are not guaranteed. Do not add llms.txt or AI-only schema. FAQ on the page is for humans; FAQ rich results were retired in 2026.',
    boundary:
      'Headers, DNS, and www routing that unblock crawl live under Network & IP. Image compressors list here only as LCP helpers.',
    secondary: {
      'add-www-to-dns': 'Apex vs www when crawl issues are DNS, not copy.',
      'image-compress': 'Hero bytes after a CWV lab flags LCP.',
      'image-optimizer': 'Same LCP job with optimizer knobs.',
      'smart-website-color-scheme': 'Brand colors for a landing page, not a ranking lever.',
      'svg-optimizer': 'Vector weight on templates that ship SVG.',
      'wcag-contrast-checker': 'Snippet/UI contrast, not a ranking factor by itself.',
      'website-headers': 'Cache and security headers on a URL you are authorized to fetch.',
    },
    faq: [
      {
        q: 'Does IndexNow replace sitemaps?',
        a: 'No. You still need accurate sitemaps, robots rules, and crawlable links.',
      },
      {
        q: 'Should every page chase AI Overviews?',
        a: 'Google: be indexed and snippet-eligible with people-first content. Avoid AI-only schemas and fake mentions.',
      },
      {
        q: 'Do these tools guarantee rankings?',
        a: 'No. They support checks. Search Console remains the index-state source.',
      },
      {
        q: 'Why link image compressors from SEO?',
        a: 'Image bytes often dominate LCP. Primary topic is still Image & media.',
      },
    ],
    cites: {
      'g-essentials': 'Google Search Essentials',
    },
  },
  'network-ip': {
    title: 'Public IP, DNS, headers, or CIDR: which network layer',
    desc: 'Public IP is what our edge sees behind VPN/NAT. A /24 is 256 addresses (often 254 hosts). Authorized systems only. RFC1918 is private space.',
    intro:
      'For SRE/devops diagnosing egress identity, DNS, response headers, or subnet math. Do not scan third-party networks without permission.',
    tableTitle: 'Identity, names, HTTP, then prefix math',
    groups: {
      identity: 'What peers see',
      dns: 'Name records and www',
      http: 'One request’s headers',
      cidr: 'IPv4/IPv6 prefix planning',
    },
    rows: {
      'ip-address': r(
        'Egress address visible to our edge',
        'A browser session; behind CGNAT/VPN this is not your LAN RFC1918 address.',
        'You needed CIDR host counts or a DNS record lookup.'
      ),
      'domain-lookup': r(
        'DNS records for a name you may query',
        'A domain you are authorized to inspect.',
        'You needed HTTP cache/security headers on a URL (website headers).'
      ),
      'add-www-to-dns': r(
        'Apex vs www routing question',
        'The DNS layout you control.',
        'You needed a CIDR planner for a VPC, not a www CNAME.'
      ),
      'website-headers': r(
        'Response headers on one request path',
        'A URL you are authorized to fetch; CDNs vary by cookie and geography.',
        'You needed IndexNow or a sitemap (SEO hub).'
      ),
      'cidr-cheat-sheet': r(
        'Prefix length → host count quick reference',
        'A prefix length (e.g. /24) and the address family.',
        'You already know parent prefix and need Terraform index math (cidrsubnet).'
      ),
      'private-cidr-ranges': r(
        'RFC1918 (and listed) private ranges',
        'A plan that must stay in private space.',
        'You needed a public egress IP (ip-address).'
      ),
      'cidr-to-ip-range': r(
        'CIDR → first/last (and listed fields)',
        'A prefix in CIDR notation.',
        'You have a start–end range and need a covering prefix (range to CIDR).'
      ),
      'ip-range-to-cidr': r(
        'Address range → covering CIDR(s)',
        'Start and end IPs.',
        'You already have a single prefix to expand (CIDR to range).'
      ),
      'ipv6-cidr': r(
        'IPv6 prefix math',
        'An IPv6 prefix; do not paste v4 intuition blindly.',
        'Your network is IPv4-only for this task.'
      ),
      'terraform-cidrsubnet': r(
        'Nested subnet index math for Terraform',
        'Parent prefix, newbits, and index as in cidrsubnet().',
        'You still need a sanity-check of host counts—cheat sheet or CIDR↔range first.'
      ),
      'aws-vpc-cidr-planner': r(
        'VPC/subnet prefix sketch for AWS',
        'A parent CIDR and how you will carve public/private.',
        'Production still needs IAM, routing, and IPAM—this is arithmetic support only.',
      ),
    },
    flow: [
      'Sanity-check prefix size and host counts on the cheat sheet or CIDR↔range tools.',
      'Open cidr-to-ip-range when you have a prefix and need the address span.',
      'Open Terraform cidrsubnet when the parent prefix is already chosen and you need nested indexes.',
    ],
    exampleTitle: 'IPv4 /24',
    exampleBody:
      'A /24 is 256 addresses; many plans treat 254 as usable hosts (network and broadcast reserved). Confirm the convention your IPAM uses. Public IP is not your router LAN page. Header checks are one path, not every CDN POP.',
    boundary: 'SEO crawl issues that are really DNS/TLS/headers start here. Use only on systems you are authorized to test.',
    secondary: {},
    faq: [
      {
        q: 'Why does public IP differ from my router page?',
        a: 'CGNAT, VPNs, and corporate egress hide the device address. This tool reports what our edge sees.',
      },
      {
        q: 'Do headers prove cache for all users?',
        a: 'They show one request. CDNs vary by cookie, geography, and cache key.',
      },
      {
        q: 'Is CIDR math enough to design a VPC?',
        a: 'It plans prefixes and host counts. Production still needs IAM, routing, peering, and IPAM policy.',
      },
      {
        q: 'May I probe any host on the internet?',
        a: 'No. Authorized testing only. Do not scan third-party networks without permission.',
      },
    ],
    cites: {
      rfc1918: 'RFC 1918 — Address Allocation for Private Internets',
    },
  },
  'dev-data': {
    title: 'Base64, JSON Schema, or YAML↔JSON: which transform',
    desc: 'Base64 is encoding, not encryption. Validate JSON Schema before diffing two files. Invalid JSON fails parse first—diff will not name the broken side.',
    intro:
      'For builders transforming strings and payloads. These are utilities, not an ETL platform.',
    tableTitle: 'Transport, structure, HTTP debug, or docs pipeline',
    groups: {
      encode: 'Encoding for transport (not crypto)',
      structure: 'YAML, CSV, JSON shape',
      http: 'JWT samples and curl→fetch',
      docs: 'Markdown/HTML and ChatGPT export',
    },
    rows: {
      base64: r(
        'Binary-in-text encode/decode',
        'A string or file you know is encoding, not a secret vault.',
        'You needed a password hash or encryption—Base64 is reversible by anyone.'
      ),
      'html-entity': r(
        'Escape or unescape HTML entities',
        'Markup snippets, not a full DOM sanitizer guarantee.',
        'You needed JSON Schema validation.'
      ),
      'yaml-json': r(
        'YAML ↔ JSON bridge',
        'A document that is actually YAML or JSON (not a random log).',
        'You needed path-level JSON diff (Text compare JSON page).'
      ),
      'csv-json': r(
        'Table ↔ JSON rows',
        'A delimiter-separated table or a JSON array of objects.',
        'You needed Excel cell-by-cell compare (Text compare).'
      ),
      'json-schema-validator': r(
        'Document matches a schema you supply',
        'JSON instance plus a schema; this is shape, not business rules.',
        'You wanted to see what changed between two payloads—validate each, then JSON diff.'
      ),
      'jwt-decoder': r(
        'Inspect claims on a sample token you may view',
        'A non-production sample; decoding ≠ verifying signatures in a browser demo.',
        'A live session cookie—do not paste it here.'
      ),
      'curl-to-fetch': r(
        'Rewrite a curl example to fetch()',
        'A curl you are allowed to translate.',
        'You needed DNS or public IP (Network & IP).'
      ),
      'markdown-to-html': r(
        'Markdown → HTML for docs',
        'A Markdown source; preview is not a CMS.',
        'You needed PDF→Markdown (PDF hub).'
      ),
      'chatgpt-export-to-markdown': r(
        'Chat export → Markdown for a repo',
        'An export file the page accepts.',
        'You needed a prompt builder (AI prompt topic), not an export converter.',
      ),
    },
    flow: [
      'If contract shape matters, validate each JSON document against the schema.',
      'Then convert YAML↔JSON only for documents that already parse.',
    ],
    exampleTitle: 'Invalid JSON vs a semantic diff',
    exampleBody:
      'A trailing-comma JSON file fails schema (or parse) before any diff is meaningful. Diffing two valid documents still will not tell you which side violated required fields—validate first. Base64 of a password is not hashing.',
    boundary:
      'Text compare, Excel compare, Unix time, Terraform CIDR, UUID, and PDF→Markdown list secondarily when the job is debugging payloads or docs.',
    secondary: {
      'compare-two-text-files-online': 'Two .txt/.md files, line diff—not YAML parse.',
      'excel-compare-files': 'Spreadsheet cells, not JSON paths.',
      'image-to-base64': 'Image data URL, not generic string Base64.',
      'json-diff-checker-online': 'Path-level JSON changes after each side validates.',
      'magnet-link-decoder': 'Magnet URI fields, not JSON.',
      'pdf-to-markdown': 'Text PDF to Markdown when the pipeline starts from PDF.',
      'schema-jsonld-generator': 'Search JSON-LD, not API JSON Schema.',
      'terraform-cidrsubnet': 'Subnet indexes when the payload is Terraform, not JSON.',
      'text-diff': 'Pasted strings, not files or JSON trees.',
      'timezone-converter': 'IANA conversion while debugging timestamps in code.',
      'unix-timestamp': 'Epoch digit length in logs.',
      'uuid-generator': 'Opaque IDs, not encryption.',
    },
    faq: [
      {
        q: 'Is Base64 encryption?',
        a: 'No. Anyone can decode it. Use real cryptography APIs for confidentiality.',
      },
      {
        q: 'Schema-valid means production-safe?',
        a: 'It matches the schema you supplied. It does not prove authz or business rules.',
      },
      {
        q: 'Validate before or after JSON diff?',
        a: 'Validate each side first if you care about contract shape. Diff alone will not name the schema violation.',
      },
      {
        q: 'Huge files?',
        a: 'Browser memory caps apply. Redact secrets; extensions can still observe the tab.',
      },
    ],
    cites: {},
  },
  'ai-prompt-template-builder': {
    title: 'AI prompt builders and generators for writing, Midjourney, sketch, film, short drama, product design, Android, and iOS',
    desc: 'Each page has different fields: screenplay beats are not Midjourney parameters. Local Build stays on-device; optional AI uses Turnstile. No per-model URLs.',
    intro:
      'For creators who need a paste-ready prompt for ChatGPT, Gemini, Claude, or DeepSeek. Pick the builder or generator that matches the artifact, not the model brand.',
    tableTitle: 'Match the artifact—not the model name',
    groups: {
      template: 'Reusable four-field templates',
      writing: 'Fiction starters and random rolls',
      image: 'Image vs line-art controls',
      screen: 'Film vs vertical serial beats',
      product: 'UX briefs and mobile agents',
    },
    rows: {
      'prompt-template-builder': r(
        'Role / Task / Constraints / Output plus scene chips',
        'A reusable template job (including chips that prefill and link to scene pages).',
        'You already know you need Midjourney parameters or SwiftUI agent fields—open those pages.'
      ),
      'writing-prompt-generator': r(
        'Dialogue, character, script, or random fiction seeds',
        'A writing mode (including Random) the form exposes.',
        'You needed MJ --ar/--stylize fields or a three-act film logline page.'
      ),
      'midjourney-prompt-builder': r(
        'Image prompt with Midjourney-style parameters',
        'Subject plus MJ parameter fields this page owns.',
        'You needed line-art/composition controls (sketch) or a Kotlin agent spec.'
      ),
      'sketch-prompt-generator': r(
        'Line-art / sketch composition prompt',
        'Medium, line style, and composition controls.',
        'You needed photoreal MJ parameters or a short-drama cliffhanger form.'
      ),
      'film-prompt-builder': r(
        'Logline and three-act beats',
        'Long-form film structure fields.',
        'You needed vertical short-drama hooks (different form) or a product UX brief.'
      ),
      'short-drama-prompt-generator': r(
        'Vertical serial hooks and cliffhangers',
        'Episode/hook fields this page lists.',
        'You needed a feature-length three-act builder.'
      ),
      'product-design-prompt-builder': r(
        'UX brief: persona, wireframe, tokens',
        'Product-design fields, not Android Kotlin templates.',
        'You needed Compose or SwiftUI agent prompts—those are separate pages.'
      ),
      'android-prompt-builder': r(
        'Kotlin / Jetpack Compose agent template',
        'Android-specific stack fields.',
        'You needed iOS Swift/SwiftUI fields—use the iOS page, not a title swap.'
      ),
      'ios-prompt-builder': r(
        'Swift / SwiftUI agent template',
        'iOS-specific stack fields.',
        'You needed Android Compose fields—use the Android page.',
      ),
    },
    flow: [
      'If you need a generic Role/Task/Constraints/Output block, start on Prompt template builder (chips can jump to a scene page).',
      'If the primary fields are already scene-specific (MJ, film, iOS…), open that URL so you are not filling the wrong form.',
    ],
    exampleTitle: 'Local vs optional AI',
    exampleBody:
      'Build/Roll stays in the browser. Expand/Polish sends only that click’s text to Cloudflare Workers AI after Turnstile, rate-limited. Failure falls back to local output. These pages do not run Midjourney, render images, or compile apps. ChatGPT/Gemini/Claude/DeepSeek are named in copy—not separate slugs.',
    boundary:
      'No per-model doorway URLs. Dev & data has ChatGPT export → Markdown when the job is converting an export file.',
    secondary: {},
    faq: [
      {
        q: 'Do I need a ChatGPT URL and a Gemini URL?',
        a: 'No. Same form with a swapped title would be a doorway. Paste the assembled prompt into the chat you use.',
      },
      {
        q: 'Is my draft uploaded automatically?',
        a: 'Not for local Build/Roll. Only Expand/Polish after Turnstile sends that submission to Workers AI—not to OpenAI/Google/Anthropic/DeepSeek from our servers.',
      },
      {
        q: 'What does Turnstile do?',
        a: 'It reduces automated abuse of shared AI quota. Local mode works without it.',
      },
      {
        q: 'Unlimited AI generations?',
        a: 'No. Shared Neurons/IP quotas apply. On 429, keep using local output.',
      },
    ],
    cites: {},
  },
  'text-compare': {
    title: 'Paste, files, Word, JSON, or Excel compare tools',
    desc: 'Match the object you have: paste, .txt, Word prose, JSON paths, or Excel cells. Do not paste .xlsx into the text-diff box. Local when marked.',
    intro:
      'For reviewers who need to see what changed. Each page loads one kind of input. Prefer no-upload pages for confidential drafts.',
    tableTitle: 'Choose by the files or strings in your hands',
    groups: {
      paste: 'Clipboard strings',
      files: 'Text file uploads',
      office: 'Word prose or spreadsheet cells',
      json: 'Object/array paths',
    },
    rows: {
      'text-diff': r(
        'Two pasted plain strings',
        'Text already on the clipboard (line/word/char modes as the page offers).',
        'You have .docx, .xlsx, or JSON files—do not paste binary into this box.'
      ),
      'compare-two-text-files-online': r(
        'Two .txt/.md (or listed text) files',
        'Two file pickers; default UTF-8 line diff.',
        'You wanted Word extract or Excel grid compare.'
      ),
      'compare-two-word-documents-for-differences': r(
        'Two .docx: extract readable text, then diff',
        'Two Word files you may open; layout and Track Changes merge are not reproduced.',
        'You needed Microsoft Word Review → Compare, or a PDF page tool.'
      ),
      'excel-compare-files': r(
        'Cell-by-cell on a chosen sheet',
        'Two xlsx/csv files and the sheet you mean (default often first sheet).',
        'You needed JSON path diffs or pasted paragraphs.'
      ),
      'json-diff-checker-online': r(
        'Path-level add/change/delete; key order ignored by default',
        'Two JSON documents (arrays as lists vs sets per page controls).',
        'You needed spreadsheet coordinates or YAML-as-text line diff.',
      ),
    },
    flow: [
      'If both sides are already clipboard text, use Check difference between two texts.',
      'If both sides are JSON APIs, use JSON diff (schema validate under Dev & data first if you care about contracts).',
    ],
    exampleTitle: 'Same two strings, wrong page',
    exampleBody:
      'Pasting JSON into the text-diff page hides path semantics. Dropping two spreadsheets on the paste page hides cell coordinates. Word compare is not desktop Track Changes. Huge files can hit tab memory.',
    boundary: 'PDF merge/split is PDF & docs. YAML/XML as trees are not these five URLs (line text can still use the paste/file pages).',
    secondary: {},
    faq: [
      {
        q: 'Why more than one compare page?',
        a: 'Loaders and defaults differ. One Swiss-army UI hides JSON trees and Excel grids.',
      },
      {
        q: 'Does Word compare replace Review → Compare?',
        a: 'No. This site diffs extracted prose. Word’s merge UI is richer for formatting.',
      },
      {
        q: 'Is content uploaded?',
        a: 'Local-processing pages run in the browser. Extensions can still observe the tab. Avoid production secrets if policy forbids online tools.',
      },
      {
        q: 'Can one page diff JSON and Excel together?',
        a: 'No. Use the JSON page or the Excel page. Forcing both into paste-only text diff hides structure.',
      },
    ],
    cites: {},
  },
  'security-ids': {
    title: 'Password, UUID, or file hash: which ID tool',
    desc: 'Generate passwords into a manager. UUID v4 is an opaque id, not a session. Hashing is not encryption. Never paste live cookies here.',
    intro:
      'For generating entropy, minting IDs, or checksumming files you may process locally. Rotate anything accidentally exposed.',
    tableTitle: 'Secrets, identifiers, or integrity',
    groups: {
      secrets: 'Human-memorable secrets',
      ids: 'Opaque identifiers',
      integrity: 'Checksums and file facts',
    },
    rows: {
      'password-generator': r(
        'Random password with length/charset controls',
        'A length and character set your policy allows; copy into a manager immediately.',
        'You needed a UUID for a database key, or a file checksum.'
      ),
      'uuid-generator': r(
        'UUID (v4 random is common for opaque keys)',
        'A need for an identifier, not a login token.',
        'You treat UUID as authentication—use platform session libraries instead.'
      ),
      'file-hash': r(
        'Checksum of a file you may hash locally',
        'A file; hashing is integrity, not confidentiality.',
        'You needed to encrypt a PDF (PDF protect) or generate a password.'
      ),
      'file-metadata-analyzer': r(
        'Basic file facts (type, size, listed metadata)',
        'A sample file; not a malware sandbox.',
        'You needed EXIF GPS strip on a photo (Image EXIF).',
      ),
    },
    flow: [
      'Copy a generated password into a reputable manager in the same sitting—do not email it to yourself.',
    ],
    exampleTitle: 'UUID v4 is not a session',
    exampleBody:
      'v4 IDs are fine as opaque database keys. They are not signed sessions. Hashing a password in a browser demo is not Argon2/bcrypt storage. JWT claim inspection belongs on a sample token you may view (Dev & data).',
    boundary:
      'PDF protect/unlock, EXIF, Base64, curl-to-fetch, and JWT list secondarily when privacy or inspection is the job.',
    secondary: {
      base64: 'Encoding, not a password vault—decode is trivial.',
      'curl-to-fetch': 'Translating a curl you may view, not stealing cookies.',
      'image-exif': 'Strip location metadata on photos before public sharing.',
      'jwt-decoder': 'Claim structure on samples—not attacking accounts.',
      'protect-pdf': 'Password you control on a PDF you own.',
      'unlock-pdf': 'Owner password you legitimately know.',
    },
    faq: [
      {
        q: 'Which UUID version?',
        a: 'v4 random is common for opaque public ids. Time-based versions can leak sequencing. UUIDs are not proof of authentication.',
      },
      {
        q: 'Where do I store a generated password?',
        a: 'A reputable password manager immediately. Do not keep secrets in shared docs.',
      },
      {
        q: 'Is hashing enough for login storage?',
        a: 'Production needs slow, salted, memory-hard algorithms via vetted libraries—not a casual browser hash of a password.',
      },
      {
        q: 'Live session cookies?',
        a: 'Never paste them into untrusted pages, including this site.',
      },
    ],
    cites: {},
  },
  'files-archives': {
    title: 'Zip, unzip, or magnet parse: which archive job',
    desc: 'Zip modest folders in the tab. Magnet decode reads URI fields and does not start a download. Huge trees need a native archiver. Lawful content only.',
    intro:
      'For packaging handoffs or inspecting magnets you have rights to. Scan untrusted archives on your machine.',
    tableTitle: 'Create, extract, or inspect a magnet URI',
    groups: {
      zip: 'Browser zip/unzip/extract',
      magnet: 'Magnet metadata, not a torrent client',
    },
    rows: {
      'create-zip-file': r(
        'Pack a modest folder into a zip',
        'A tree that fits tab memory (exclude huge vendor dirs).',
        'You need 7-Zip/RAR exotic formats or multi-gigabyte archives—use a native tool.'
      ),
      'unzip-file': r(
        'Open a zip and pull files',
        'A zip you may extract; encrypted/exotic formats may fail.',
        'You needed to build a zip (create) or parse a magnet URI.'
      ),
      'archive-extractor': r(
        'List or extract a supported archive',
        'A format the page actually supports.',
        'The job is only checksum (file hash) with no extract.'
      ),
      'magnet-link-decoder': r(
        'Read display name and hash fields from a magnet URI',
        'A magnet string; this does not fetch payloads.',
        'Infringing content or an attempt to bypass access controls—do not use this tool for that.',
      ),
    },
    flow: [
      'Create a zip for a modest handoff in the browser.',
      'Unzip on the receiving side; if the tree is huge, switch to a native archiver.',
    ],
    exampleTitle: 'Magnet URI vs download',
    exampleBody:
      'Decoding a magnet shows hashes and optional trackers. It does not start a torrent. Browser zip fails on node_modules-scale trees because tabs have finite memory. File hash lists here secondarily to verify a download you already have.',
    boundary: 'Integrity tools are primary under Security & IDs. Lawful content only.',
    secondary: {
      'file-hash': 'Checksum a downloaded archive you already possess.',
      'file-metadata-analyzer': 'Type/size facts before you extract an untrusted file.',
    },
    faq: [
      {
        q: 'Why did zip fail on a large folder?',
        a: 'Tab memory. Split the job, exclude huge trees, or use a native archiver.',
      },
      {
        q: 'Does magnet parse start a download?',
        a: 'No. A torrent client would fetch payloads—and only for lawful content.',
      },
      {
        q: 'Can zips replace backups?',
        a: 'Packages are not a backup strategy. Use versioned backups with restore tests.',
      },
      {
        q: 'Encrypted archives?',
        a: 'May be unsupported. Do not treat these pages as a password cracker.',
      },
    ],
    cites: {},
  },
};
