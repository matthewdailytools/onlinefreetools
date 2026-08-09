# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`robots-txt-generator`
**母版语言**：en
**状态**：`briefs-ready`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（allow/disallow/sitemap 放 Rules/UI，不进 H1 堆砌）
- [x] 隐私句说清设备 + 不上服务器
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

技术专名 robots.txt / User-agent / Allow / Disallow / Sitemap / GPTBot / ClaudeBot / Google-Extended 可保留，但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 robots-txt-generator；H1「Robots.txt Generator — Manage Allow & Disallow Rules for AI Crawlers」（副标题单段动作向，避免参数枚举）；次词 robots.txt 生成器 / block AI crawlers / allow disallow / sitemap 落入 desc·FAQ·Rules·Use cases；禁拆薄页。 | 通过；可 ready |
| 1b 母版检索覆盖优化 | 2026-08-09 | en 母版落地后复核：H1「Robots.txt Generator — Manage Allow & Disallow Rules for AI Crawlers」主词 Robots.txt Generator 在 H1；次词 block AI crawlers / allow disallow / sitemap / GPTBot 落入 description、FAQ、Rules、Use cases；H1 副标题改为单段动作向（参数枚举目录腔门禁要求）。 | 通过；可 phase=2 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均已按各语检索词重写：zh「Robots.txt 生成器 — 管理允许与禁止并配置 AI 爬虫」、es「…gestiona permisos y bloqueos de rastreadores de IA」、ja「…AI クローラーを拒否してアクセスを制御」等，无参数枚举目录腔（副标题单段动作向）；其余语轮次2已重写。 | 通过；可 ship |
| 交互增强 | 2026-08-09 | 按 02 交互规格补齐：① 预设 User-agent 增加「包含此 User-agent」勾选框（进页展示全部 7 个预设，仅 Googlebot/GPTBot 默认勾选，保证输出与 Example 一致）；② Generate 仅输出勾选分组；③ 输出区新增「下载」按钮（robots.txt 纯文本下载）。新增 10 语键：tool_robots_include / tool_robots_agents_hint / tool_robots_download。DOM mock 验证勾选过滤与下载均正常；lint:seo / build:site 全绿。 | 通过 |

---

### en

- 检索词（3–5）：robots.txt generator；block ai crawlers gptbot；robots.txt allow disallow；robots txt generator；disallow all robots
- 语气：偏正式开发者
- Title / H1 方向：Robots.txt Generator — Manage Allow & Disallow Rules for AI Crawlers（单段动作向）
- 按钮短词：Generate / Load sample / Clear / Copy
- 本地示例用词：blocking GPTBot while keeping Googlebot enabled
- 可保留英文/符号：robots.txt, User-agent, Allow, Disallow, Sitemap, GPTBot, ClaudeBot
- 额外禁用：无
- SERP 竞品 title（1–3）：「Robots.txt Generator」「Free Robots.txt Generator Online」「Robots.txt Generator with AI Bots」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：robots.txt 生成；robots.txt 生成器；阻止 AI 爬虫；禁止搜索引擎抓取；robots 文件怎么写
- 语气：偏正式开发者
- Title / H1 方向：Robots.txt 生成器 — 管理允许与禁止并配置 AI 爬虫
- 按钮短词：生成 / 加载样例 / 清空 / 复制
- 本地示例用词：阻止 GPTBot 抓取，同时保持 Googlebot 正常抓取
- 可保留英文/符号：robots.txt, User-agent, Allow, Disallow, Sitemap, GPTBot
- 额外禁用：无
- SERP 竞品 title（1–3）：「robots.txt 生成器」「在线生成 robots.txt」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：generador robots.txt；bloquear rastreadores de ia gptbot；robots txt allow disallow；crear robots.txt
- 语气：偏正式开发者
- Title / H1 方向：Generador de robots.txt — gestiona permisos y bloqueos de rastreadores de IA
- 按钮短词：Generar / Ejemplo / Limpiar / Copiar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：مولّد robots.txt؛ حظر روبوتات الذكاء الاصطناعي؛ allow disallow؛ إنشاء robots.txt
- 语气：偏正式工具站
- Title / H1 方向：مولّد robots.txt — إدارة السماح والمنع وروبوتات الذكاء الاصطناعي
- 按钮短词：توليد / مثال / مسح / نسخ
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：gerador de robots.txt；bloquear rastreadores de ia gptbot；allow disallow robots txt；criar robots.txt
- 语气：偏正式开发者
- Title / H1 方向：Gerador de robots.txt — gerencie permissões e bloqueios de rastreadores de IA
- 按钮短词：Gerar / Exemplo / Limpar / Copiar
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pembuat robots.txt；blokir perayap ai gptbot；allow disallow robots txt；buat robots.txt
- 语气：偏正式开发者
- Title / H1 方向：Pembuat robots.txt — kelola izin dan blokir perayap AI
- 按钮短词：Buat / Contoh / Bersihkan / Salin
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：générateur robots.txt；bloquer les robots d’ia gptbot；allow disallow robots txt；créer robots.txt
- 语气：偏正式开发者
- Title / H1 方向：Générateur de robots.txt — gérez autorisations et blocages des robots d’IA
- 按钮短词：Générer / Exemple / Effacer / Copier
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：robots.txt 生成；robots.txt ジェネレーター；AI クローラー ブロック；GPTBot 拒否
- 语气：偏正式开发者
- Title / H1 方向：robots.txt 生成ツール — AI クローラーを拒否してアクセスを制御
- 按钮短词：生成 / サンプル / クリア / コピー
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：генератор robots.txt؛ заблокировать ИИ-краулеры gptbot؛ allow disallow؛ создать robots.txt
- 语气：偏正式工具站
- Title / H1 方向：Генератор robots.txt — управляйте разрешениями и блокировками ИИ-краулеров
- 按钮短词：Сгенерировать / Пример / Очистить / Копировать
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：Robots.txt Generator；AI-Crawler blocken gptbot；allow disallow robots.txt；robots.txt erstellen
- 语气：偏正式开发者
- Title / H1 方向：Robots.txt Generator — verwalte Erlaubnisse und Sperren für KI-Crawler
- 按钮短词：Generieren / Beispiel / Leeren / Kopieren
- 轮次2已重写：[x]  轮次3已抽查：[ ]
