# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`brand-style-guide`  
**母版语言**：en  
**状态**：`pending-native-review`

> ar / ja / ru 仍勾「待母语抽查」；en/zh 已按 brief 落地。实现后请再跑 localization 步 2/4 覆盖优化再标 `i18n-done`。

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无造词 / 错义借译 / 残缺缩写
- [ ] 场景标题非空壳英借（勿「ユースケース」式）
- [ ] title/H1 非参数枚举目录腔（勿「模块、元素、性格标签、导出格式」堆叠当 H1）
- [ ] 十语非同一句式骨架
- [ ] 未依赖英文回退冒充缺语种
- [ ] 未脚本同构灌语；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（见 `02` 覆盖表；slug 已改为 `brand-style-guide`）
- [x] **检索覆盖已优化**（i18n 初稿后步 2+4）

**本工具额外禁用**：

- 勿暗示云端 AI / ChatGPT /「一键品牌大师」；**smart = 规则预填**
- 勿写成 Coolors 色板站、Figma 替代、或 VI 印刷全套（名片门头）生成器
- 勿与 `brand-color-token-pack` / `smart-website-color-scheme` 抢色阶/语义 CSS 主卖点
- 勿提供或暗示可下载 NASA/Spotify 等**官方商标资产**；结构 preset 须标明非附属
- 勿承诺输出=律师审过的商标使用许可
- 勿把 Frontify 级 DAM/协作托管当卖点

---

## 每语 brief

### en

- 检索词：brand style guide；brand guidelines；brand style guide generator；brand book；logo do’s and don’ts
- 语气：口语工具站（略偏设计/站长）
- Title / H1 方向：Brand Style Guide — generate a modular draft you can edit
- 按钮短词：Generate；Regenerate smart fields；Load sample；Copy Markdown；Copy JSON；Clear
- 本地示例用词：Northline Studio；clear space；Do/Don’t；personality tags
- 可保留：HEX、WCAG、Markdown、JSON、Logo、Do/Don’t
- 额外禁用：勿 title 堆 Modules/Elements/Samples；勿 AI-powered
- SERP：Free Brand Guidelines Generator；Brand Style Guide Maker；AI Brand Style Guide（竞品；我们反差「rule-based, local」）
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词：品牌手册；品牌设计规范；品牌视觉规范；VI 手册；品牌规范生成
- 语气：口语工具站
- Title / H1 方向：品牌手册 — 智能预填的设计规范，可手动改
- 按钮短词：生成；仅重填未改项；加载示例；复制 Markdown；复制 JSON；清空
- 本地示例用词：净空；禁用示例；性格标签；模块开关
- 可保留：HEX、WCAG、VI、Logo、Markdown
- 额外禁用：勿「高级感一键出品」营销腔；勿暗示云端 AI；勿做成名片门头 VI 套件文案
- SERP：在线生成品牌手册；品牌 VI 手册生成器；品牌设计规范
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词：guía de estilo de marca；manual de identidad；generador guía de marca；uso del logo
- 语气：口语工具站
- Title / H1 方向：Guía de estilo de marca — borrador modular que puedes editar
- 按钮短词：Generar；Regenerar solo sugeridos；Cargar ejemplo；Copiar Markdown；Copiar JSON；Limpiar
- 本地示例用词：espacio de protección；qué sí / qué no
- 可保留：HEX、WCAG、Logo、Markdown
- SERP：Generador de brand guidelines；Guía de estilo de marca online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词：دليل هوية العلامة؛ دليل أسلوب العلامة التجارية؛ إرشادات الشعار
- 语气：口语工具站
- Title / H1 方向：دليل أسلوب العلامة — مسودة وحدات قابلة للتعديل
- 按钮短词：إنشاء؛ إعادة الملء الذكي؛ تحميل مثال؛ نسخ Markdown；نسخ JSON；مسح
- 本地示例用词：مساحة حماية؛ افعل / لا تفعل
- 可保留：HEX、WCAG、Logo、Markdown
- SERP：مولد دليل الهوية البصرية
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[x]

### pt

- 检索词：guia de estilo da marca；manual de identidade visual；gerador de brand guidelines；uso do logo
- 语气：口语工具站
- Title / H1 方向：Guia de estilo da marca — rascunho modular editável
- 按钮短词：Gerar；Regenerar só sugeridos；Carregar exemplo；Copiar Markdown；Copiar JSON；Limpar
- 本地示例用词：espaço de proteção；pode / não pode
- 可保留：HEX、WCAG、Logo、Markdown
- SERP：Gerador de guia de estilo；Manual de identidade online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词：panduan gaya merek；pedoman identitas merek；generator brand guideline；aturan logo
- 语气：口语工具站
- Title / H1 方向：Panduan gaya merek — draf modular yang bisa diedit
- 按钮短词：Buat；Isi ulang otomatis；Muat contoh；Salin Markdown；Salin JSON；Bersihkan
- 本地示例用词：area aman logo；boleh / jangan
- 可保留：HEX、WCAG、Logo、Markdown
- SERP：Generator pedoman merek；Brand style guide online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词：charte graphique；guide de style de marque；générateur charte graphique；règles logo
- 语气：口语工具站
- Title / H1 方向：Charte graphique — brouillon modulaire à modifier
- 按钮短词：Générer；Régénérer suggestions；Charger l’exemple；Copier Markdown；Copier JSON；Effacer
- 本地示例用词：zone de protection；à faire / à éviter
- 可保留：HEX、WCAG、Logo、Markdown
- SERP：Générateur de charte graphique；Brand guidelines en ligne
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词：ブランドガイドライン；スタイルガイド作成；ブランドマニュアル；ロゴ使用規定
- 语气：口语工具站
- Title / H1 方向：ブランドスタイルガイド — 自動下書きを手直しできる
- 按钮短词：生成；未編集だけ再提案；サンプル読込；Markdownコピー；JSONコピー；クリア
- 本地示例用词：アイソレーション；やってよい／だめな例
- 可保留：HEX、WCAG、Logo、Markdown、VI
- 额外禁用：勿「ユースケース」作小节标题；改「こんなときに」
- SERP：ブランドガイドライン 作成；スタイルガイド ジェネレーター
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[x]

### ru

- 检索词：гайдлайн бренда；фирменный стиль гайд；генератор брендбука；правила логотипа
- 语气：口语工具站
- Title / H1 方向：Гайд по стилю бренда — модульный черновик, который можно править
- 按钮短词：Создать；Перезаполнить умные поля；Пример；Копировать Markdown；Копировать JSON；Очистить
- 本地示例用词：охранное поле；можно / нельзя
- 可保留：HEX、WCAG、Logo、Markdown、брендбук
- SERP：Генератор брендбука；Гайдлайн бренда онлайн
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[x]

### de

- 检索词：Corporate Design Manual；Brand Style Guide；Styleguide Generator；Logo-Richtlinien
- 语气：口语工具站
- Title / H1 方向：Brand-Style-Guide — modularer Entwurf zum Nachbearbeiten
- 按钮短词：Erstellen；Nur Vorschläge neu；Beispiel laden；Markdown kopieren；JSON kopieren；Leeren
- 本地示例用词：Schutzraum；Do’s und Don’ts
- 可保留：HEX、WCAG、Logo、Markdown、Corporate Design
- SERP：Styleguide Generator；Corporate Design Manual erstellen
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

> 行 ID 供 coverage:gate 解析。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | slug→brand-style-guide；主词 style guide / 品牌手册；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 母版 + 十语分片落地；进页样例 | 通过 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title/desc 对齐 brief（EN style guide；ZH 品牌手册） | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 九语独立重写（非同构灌语） | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja；title 结果向；次词落 desc | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | 禁词与 FAQ 抽查 | 完成 |
