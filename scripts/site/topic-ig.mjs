/**
 * Topic leaf Information Gain 结构（slug / 分组 / 工作流 / 引用）。
 * 可见文案在 build-topic-ig.mjs → i18n-topic-ig.mjs；本文件只放可校验的结构。
 * 与 tool-catalog.json 的 primaryTopic / secondaryTopics 对齐；生成时校验不得漏 slug。
 */

/** @typedef {{id:string, slugs:string[]}} TopicIgGroup */
/** @typedef {{id:string, href:string}} TopicIgCite */
/**
 * @typedef {{
 *   groups: TopicIgGroup[],
 *   workflow: string[],
 *   relatedTopics: string[],
 *   citations: TopicIgCite[],
 *   ymyl?: boolean,
 *   localCluster?: boolean,
 * }} TopicIgModule
 */

/**
 * 各主题 IG 模块：表分组、有序工作流、跨主题、权威引用。
 * @type {Record<string, TopicIgModule>}
 */
export const TOPIC_IG = {
  'health-body': {
    ymyl: true,
    localCluster: true,
    groups: [
      { id: 'screening', slugs: ['how-to-calculate-bmi', 'how-to-calculate-ideal-weight'] },
      { id: 'energy', slugs: ['how-to-calculate-bmr-tdee', 'how-to-calculate-macros'] },
      { id: 'composition', slugs: ['how-to-calculate-body-fat'] },
      {
        id: 'training',
        slugs: [
          'how-to-calculate-heart-rate',
          'how-to-calculate-pace',
          'how-to-calculate-one-rep-max',
        ],
      },
    ],
    workflow: ['how-to-calculate-bmi', 'how-to-calculate-bmr-tdee', 'how-to-calculate-macros'],
    relatedTopics: ['math-stats', 'time-calendar'],
    citations: [
      {
        id: 'who-bmi',
        href: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight',
      },
    ],
  },
  'personal-money': {
    ymyl: true,
    localCluster: true,
    groups: [
      {
        id: 'checkout',
        slugs: ['how-to-calculate-tip', 'how-to-calculate-discount', 'how-to-calculate-vat'],
      },
      { id: 'pay', slugs: ['how-to-calculate-salary-hourly'] },
      { id: 'borrow', slugs: ['how-to-calculate-emi', 'how-to-calculate-debt-payoff'] },
      {
        id: 'growth',
        slugs: [
          'how-to-calculate-compound-interest',
          'how-to-calculate-rule-of-72',
          'how-to-calculate-present-value',
          'how-to-calculate-cagr',
          'how-to-calculate-inflation',
          'how-to-calculate-percentage-change',
        ],
      },
    ],
    workflow: ['how-to-calculate-emi', 'how-to-calculate-debt-payoff'],
    relatedTopics: ['business-finance', 'math-stats'],
    citations: [
      {
        id: 'cfpb',
        href: 'https://www.consumerfinance.gov/consumer-tools/',
      },
    ],
  },
  'business-finance': {
    ymyl: true,
    localCluster: true,
    groups: [
      {
        id: 'unit',
        slugs: [
          'how-to-calculate-markup',
          'how-to-calculate-gross-margin',
          'how-to-calculate-profit-margin',
          'how-to-calculate-contribution-margin',
          'how-to-calculate-marginal-revenue',
        ],
      },
      { id: 'capacity', slugs: ['how-to-calculate-break-even'] },
      {
        id: 'capital',
        slugs: [
          'how-to-calculate-roi',
          'how-to-calculate-payback-period',
          'how-to-calculate-npv',
          'how-to-calculate-irr',
        ],
      },
    ],
    workflow: [
      'how-to-calculate-markup',
      'how-to-calculate-break-even',
      'how-to-calculate-npv',
    ],
    relatedTopics: ['personal-money'],
    citations: [],
  },
  'math-stats': {
    localCluster: true,
    groups: [
      {
        id: 'center',
        slugs: [
          'how-to-calculate-mean',
          'how-to-calculate-median',
          'how-to-calculate-standard-deviation',
          'how-to-calculate-z-score',
        ],
      },
      {
        id: 'inference',
        slugs: [
          'how-to-calculate-p-value',
          'how-to-calculate-confidence-interval',
          'how-to-calculate-sample-size',
        ],
      },
      {
        id: 'school',
        slugs: [
          'how-to-calculate-permutation-combination',
          'how-to-calculate-quadratic-equation',
          'how-to-calculate-exponent',
          'how-to-calculate-logarithm',
          'how-to-calculate-gpa',
        ],
      },
      {
        id: 'notation',
        slugs: ['how-to-calculate-scientific-notation', 'how-to-calculate-significant-figures'],
      },
    ],
    workflow: ['how-to-calculate-median', 'how-to-calculate-mean', 'how-to-calculate-z-score'],
    relatedTopics: ['geometry-measure', 'science-physics'],
    citations: [],
  },
  'geometry-measure': {
    localCluster: true,
    groups: [
      {
        id: 'shapes',
        slugs: [
          'how-to-calculate-triangle-area',
          'how-to-calculate-circle',
          'how-to-calculate-volume',
          'how-to-calculate-pythagorean-theorem',
        ],
      },
      {
        id: 'grade',
        slugs: ['how-to-calculate-slope', 'how-to-calculate-gradient', 'how-to-calculate-aspect-ratio'],
      },
      { id: 'units', slugs: ['unit-converter'] },
    ],
    workflow: ['how-to-calculate-volume', 'unit-converter'],
    relatedTopics: ['home-diy', 'math-stats'],
    citations: [],
  },
  'science-physics': {
    localCluster: true,
    groups: [
      { id: 'motion', slugs: ['how-to-calculate-velocity', 'how-to-calculate-acceleration'] },
      { id: 'circuits', slugs: ['how-to-calculate-ohms-law'] },
      { id: 'materials', slugs: ['how-to-calculate-density'] },
      { id: 'fields', slugs: ['measuring-magnetic-fields'] },
    ],
    workflow: ['how-to-calculate-velocity', 'how-to-calculate-acceleration'],
    relatedTopics: ['math-stats', 'home-diy'],
    citations: [
      {
        id: 'nist-si',
        href: 'https://www.nist.gov/pml/owm/metric-si/si-units',
      },
    ],
  },
  'home-diy': {
    localCluster: true,
    groups: [
      { id: 'area', slugs: ['square-feet'] },
      {
        id: 'materials',
        slugs: ['how-to-calculate-paint', 'how-to-calculate-tile', 'how-to-calculate-concrete'],
      },
    ],
    workflow: ['square-feet', 'how-to-calculate-concrete'],
    relatedTopics: ['geometry-measure'],
    citations: [],
  },
  'time-calendar': {
    localCluster: true,
    groups: [
      { id: 'human', slugs: ['how-to-calculate-age', 'how-to-calculate-date-difference'] },
      { id: 'zones', slugs: ['timezone-converter'] },
      { id: 'epoch', slugs: ['unix-timestamp'] },
    ],
    workflow: ['unix-timestamp', 'timezone-converter'],
    relatedTopics: ['dev-data', 'health-body'],
    citations: [
      {
        id: 'iana-tz',
        href: 'https://www.iana.org/time-zones',
      },
    ],
  },
  'pdf-docs': {
    localCluster: true,
    groups: [
      {
        id: 'structure',
        slugs: ['merge-pdf', 'split-pdf', 'organize-pdf', 'rotate-pdf', 'pdf-page-numbers'],
      },
      { id: 'size', slugs: ['compress-pdf', 'crop-pdf'] },
      { id: 'access', slugs: ['protect-pdf', 'unlock-pdf'] },
      {
        id: 'export',
        slugs: ['pdf-to-markdown', 'pdf-to-jpg', 'pdf-page-to-image-sizes', 'pdf-watermark'],
      },
    ],
    workflow: ['merge-pdf', 'organize-pdf', 'compress-pdf', 'protect-pdf'],
    relatedTopics: ['image-media', 'text-compare'],
    citations: [],
  },
  'image-media': {
    localCluster: true,
    groups: [
      {
        id: 'platform',
        slugs: [
          'youtube-thumbnail-size',
          'instagram-post-size',
          'instagram-story-size',
          'linkedin-banner-size',
          'open-graph-image-size',
          'amazon-main-image-size',
          'apple-touch-icon',
          'ios-app-icon-size',
          'iphone-app-store-screenshot',
        ],
      },
      {
        id: 'transform',
        slugs: [
          'image-crop',
          'image-format-converter',
          'image-compress',
          'image-optimizer',
          'svg-optimizer',
          'flip-image',
          'image-border',
          'image-grayscale',
        ],
      },
      {
        id: 'compose',
        slugs: ['image-merge', 'image-overlay', 'images-to-gif', 'add-watermark'],
      },
      {
        id: 'export',
        slugs: [
          'images-to-pdf',
          'images-to-ppt',
          'images-to-word',
          'image-to-base64',
          'image-exif',
          'color-from-image',
        ],
      },
    ],
    workflow: ['image-crop', 'image-format-converter', 'image-compress'],
    relatedTopics: ['pdf-docs', 'design-brand', 'seo-growth'],
    citations: [],
  },
  'design-brand': {
    localCluster: true,
    groups: [
      { id: 'a11y', slugs: ['wcag-contrast-checker'] },
      { id: 'palette', slugs: ['smart-website-color-scheme'] },
      { id: 'tokens', slugs: ['brand-color-token-pack', 'brand-style-guide'] },
    ],
    workflow: ['wcag-contrast-checker', 'brand-color-token-pack'],
    relatedTopics: ['image-media', 'seo-growth'],
    citations: [
      {
        id: 'wcag-contrast',
        href: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
      },
    ],
  },
  'seo-growth': {
    localCluster: true,
    groups: [
      {
        id: 'snippet',
        slugs: ['meta-tag-generator', 'meta-serp-preview', 'open-graph-preview'],
      },
      {
        id: 'technical',
        slugs: [
          'robots-txt-generator',
          'sitemap-xml-generator',
          'hreflang-generator',
          'schema-jsonld-generator',
        ],
      },
      {
        id: 'signals',
        slugs: ['indexnow', 'on-page-seo-checker', 'core-web-vitals-checker'],
      },
      { id: 'campaigns', slugs: ['utm-builder'] },
    ],
    workflow: ['meta-tag-generator', 'sitemap-xml-generator', 'indexnow'],
    relatedTopics: ['network-ip', 'image-media'],
    citations: [
      {
        id: 'g-essentials',
        href: 'https://developers.google.com/search/docs/essentials',
      },
    ],
  },
  'network-ip': {
    localCluster: false,
    groups: [
      { id: 'identity', slugs: ['ip-address'] },
      { id: 'dns', slugs: ['domain-lookup', 'add-www-to-dns'] },
      { id: 'http', slugs: ['website-headers'] },
      {
        id: 'cidr',
        slugs: [
          'cidr-cheat-sheet',
          'private-cidr-ranges',
          'cidr-to-ip-range',
          'ip-range-to-cidr',
          'ipv6-cidr',
          'terraform-cidrsubnet',
          'aws-vpc-cidr-planner',
        ],
      },
    ],
    workflow: ['cidr-cheat-sheet', 'cidr-to-ip-range', 'terraform-cidrsubnet'],
    relatedTopics: ['seo-growth', 'dev-data'],
    citations: [
      {
        id: 'rfc1918',
        href: 'https://www.rfc-editor.org/rfc/rfc1918',
      },
    ],
  },
  'dev-data': {
    localCluster: true,
    groups: [
      { id: 'encode', slugs: ['base64', 'html-entity'] },
      {
        id: 'structure',
        slugs: ['yaml-json', 'csv-json', 'json-schema-validator'],
      },
      { id: 'http', slugs: ['jwt-decoder', 'curl-to-fetch'] },
      { id: 'docs', slugs: ['markdown-to-html', 'chatgpt-export-to-markdown'] },
    ],
    workflow: ['json-schema-validator', 'yaml-json'],
    relatedTopics: ['text-compare', 'time-calendar', 'security-ids'],
    citations: [],
  },
  'ai-prompt-template-builder': {
    localCluster: true,
    groups: [
      { id: 'template', slugs: ['prompt-template-builder'] },
      { id: 'writing', slugs: ['writing-prompt-generator'] },
      { id: 'image', slugs: ['midjourney-prompt-builder', 'sketch-prompt-generator'] },
      { id: 'screen', slugs: ['film-prompt-builder', 'short-drama-prompt-generator'] },
      {
        id: 'product',
        slugs: [
          'product-design-prompt-builder',
          'android-prompt-builder',
          'ios-prompt-builder',
        ],
      },
    ],
    workflow: ['prompt-template-builder', 'writing-prompt-generator'],
    relatedTopics: ['dev-data', 'design-brand'],
    citations: [],
  },
  'text-compare': {
    localCluster: true,
    groups: [
      { id: 'paste', slugs: ['text-diff'] },
      { id: 'files', slugs: ['compare-two-text-files-online'] },
      { id: 'office', slugs: ['compare-two-word-documents-for-differences', 'excel-compare-files'] },
      { id: 'json', slugs: ['json-diff-checker-online'] },
    ],
    workflow: ['text-diff', 'json-diff-checker-online'],
    relatedTopics: ['dev-data', 'pdf-docs'],
    citations: [],
  },
  'security-ids': {
    localCluster: true,
    groups: [
      { id: 'secrets', slugs: ['password-generator'] },
      { id: 'ids', slugs: ['uuid-generator'] },
      { id: 'integrity', slugs: ['file-hash', 'file-metadata-analyzer'] },
    ],
    workflow: ['password-generator'],
    relatedTopics: ['dev-data', 'files-archives'],
    citations: [],
  },
  'files-archives': {
    localCluster: true,
    groups: [
      { id: 'zip', slugs: ['create-zip-file', 'unzip-file', 'archive-extractor'] },
      { id: 'magnet', slugs: ['magnet-link-decoder'] },
    ],
    workflow: ['create-zip-file', 'unzip-file'],
    relatedTopics: ['security-ids', 'dev-data'],
    citations: [],
  },
};

/**
 * 将 slug 转为 i18n 键片段。
 * @param {string} slug
 */
export const topicIgSlugKey = (slug) => String(slug).replace(/-/g, '_');
