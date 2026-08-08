# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`smart-website-color-scheme`  
**母版语言**：en  
**状态**：`i18n-done`（ar/ja/ru 建议后续母语抽查；禁词表发布前再勾）

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无造词 / 错义借译 / 残缺缩写
- [ ] 场景标题非空壳英借（勿「ユースケース」式）
- [ ] title/H1 非参数枚举目录腔（勿「主色、中性色、状态色、CSS」堆叠当 H1）
- [ ] 十语非同一句式骨架
- [ ] 未依赖英文回退冒充缺语种
- [ ] 未脚本同构灌语；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（见 `02` 覆盖表）
- [ ] **检索覆盖已优化**（i18n 初稿后步 2+4）

**本工具额外禁用**：

- 勿暗示上传 / 账号 / Figma 插件
- 勿写成 Coolors「灵感刷色」或迷你建站器
- 勿与 `brand-color-token-pack` 抢「50–950 / OKLCH 色阶」主卖点文案
- 勿承诺「一键通过所有 WCAG 场景」；自检仅覆盖方案内关键对
- 勿把 Primer/SGDS 写成「本站官方认证」
- 「智能配色 / smart」= 按规则自动推导语义色板；**禁止**写成 ChatGPT/云端 AI 配色、禁止 `ai-color` 误导

---

## 每语 brief

### en

- 检索词：smart website color scheme；smart color scheme；website color scheme；CSS color variables；semantic color tokens
- 语气：口语工具站（略偏开发者）
- Title / H1 方向：Smart Website Color Scheme — semantic CSS tokens you can paste
- 按钮短词：Generate；Load sample；Copy CSS；Copy JSON；Clear；Add theme
- 本地示例用词：tool site chrome；landing theme；`:root`；neutral links
- 可保留：HEX、CSS、WCAG、AA、`:root`、`data-theme`
- SERP：Smart Website Color Scheme；Smart Color Scheme Generator；CSS Variables Palette
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词：智能配色；网站配色方案；网页配色；网站颜色搭配；CSS 变量配色
- 语气：口语工具站
- Title / H1 方向：智能配色 — 网站颜色搭配方案与 CSS 变量
- 按钮短词：生成；加载示例；复制 CSS；复制 JSON；清空；添加主题
- 本地示例用词：工具站顶栏；落地页主题；中性链接；品牌主色
- 可保留：HEX、CSS、WCAG、AA
- 额外禁用：勿「色彩搭配艺术鉴赏」空话；勿「一键高级感」营销腔；勿暗示云端 AI
- SERP：智能配色；网站配色方案生成器；网页配色工具
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词：esquema de colores web；paleta UI sitio；variables CSS colores；tokens semánticos color
- 语气：口语工具站
- Title / H1 方向：Esquema de colores web — tokens CSS semánticos
- 按钮短词：Generar；Cargar ejemplo；Copiar CSS；Copiar JSON；Limpiar
- 本地示例用词：tema de landing；enlaces neutros
- 可保留：HEX、CSS、WCAG
- SERP：Generador esquema colores web；Variables CSS colores
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词：نظام ألوان الموقع؛ مخطط ألوان واجهة؛ متغيرات CSS للألوان
- 语气：口语工具站
- Title / H1 方向：نظام ألوان الموقع — رموز CSS دلالية جاهزة للنسخ
- 按钮短词：إنشاء；تحميل مثال；نسخ CSS；نسخ JSON；مسح
- 可保留：HEX、CSS、WCAG
- SERP：مولد ألوان الموقع
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词：esquema de cores site；paleta UI website；variáveis CSS cores；tokens semânticos
- 语气：口语工具站
- Title / H1 方向：Esquema de cores do site — tokens CSS semânticos
- 按钮短词：Gerar；Carregar exemplo；Copiar CSS；Copiar JSON；Limpar
- 可保留：HEX、CSS、WCAG
- SERP：Gerador esquema cores site
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词：skema warna website；palet warna UI；variabel CSS warna；token warna semantik
- 语气：口语工具站
- Title / H1 方向：Skema warna website — token CSS semantik siap tempel
- 按钮短词：Buat；Muat contoh；Salin CSS；Salin JSON；Bersihkan
- 可保留：HEX、CSS、WCAG
- SERP：Generator skema warna website
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词：schéma de couleurs site；palette UI site web；variables CSS couleurs；tokens sémantiques
- 语气：口语工具站
- Title / H1 方向：Schéma de couleurs web — tokens CSS sémantiques
- 按钮短词：Générer；Charger l’exemple；Copier CSS；Copier JSON；Effacer
- 可保留：HEX、CSS、WCAG
- SERP：Générateur schéma couleurs site
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词：ウェブサイト配色；サイトカラー方案；CSS変数 カラー；セマンティックカラー；UIカラーパレット
- 语气：口语工具站
- Title / H1 方向：サイト配色方案 — 貼れるセマンティック CSS トークン
- 按钮短词：生成；サンプル読込；CSSをコピー；JSONをコピー；クリア
- 额外禁用：场景标题勿「ユースケース」；可用「利用シーン」
- 可保留：HEX、CSS、WCAG
- SERP：ウェブサイト配色ジェネレーター；CSS変数 配色
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru

- 检索词：цветовая схема сайта；палитра UI；CSS переменные цвета；семантические токены цвета
- 语气：口语工具站
- Title / H1 方向：Цветовая схема сайта — семантические CSS-токены
- 按钮短词：Сгенерировать；Пример；Копировать CSS；Копировать JSON；Очистить
- 可保留：HEX、CSS、WCAG
- SERP：Генератор цветовой схемы сайта
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词：Website Farbschema；UI Farbschema Generator；CSS Farbvariablen；semantische Color Tokens
- 语气：口语工具站
- Title / H1 方向：Website-Farbschema — semantische CSS-Tokens zum Einfügen
- 按钮短词：Erzeugen；Beispiel laden；CSS kopieren；JSON kopieren；Leeren
- 可保留：HEX、CSS、WCAG
- SERP：Website Farbschema Generator；CSS Variablen Farben
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | slug→`smart-website-color-scheme`（+智能配色）；title/desc 结果向；与 token 页边界 | 写入 `02` |
| 1 母版+lint | 2026-08-08 | en 母版 + 十语分片；merge + lint:seo OK | 通过 |
| 1b 母版检索覆盖优化 | 2026-08-08 | en desc 补 steps/example；ja 补手順/例 | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 十语独立检索向（非同构机翻） | 完成；ar/ja/ru 仍可母语抽查 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | en+zh+ja desc 关键词 | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | lint:seo OK；icon OK | 通过 |
