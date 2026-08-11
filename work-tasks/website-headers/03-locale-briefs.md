# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`website-headers`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清；2026-08-09 S1 增强 SEO 头解读已并入十语；2026-08-11 补齐覆盖门禁文档）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（覆盖表在 02；存量增强补齐）
- [x] **检索覆盖已优化**（十语 title/desc 检索向；en,zh,es,ja 已抽查）

技术专名（HTTP、CORS、CSP、Cache-Control、RFC）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：check http headers；website headers online；view response headers；HTTP header checker；inspect response headers
- 语气：偏正式开发者
- Title / H1 方向：Check Website HTTP Headers Online — Response Header Inspector
- 按钮短词：Check headers / Fetch / Clear；URL placeholder
- 本地示例用词：example.com；`cache-control: max-age=3600`
- 可保留英文/符号：HTTP、HTTPS、CORS、CSP、RFC 9110
- 额外禁用：title 堆砌 security+cors+cache 同义词
- SERP 竞品 title（1–3）：HTTP Header Check；Check Response Headers；Security Headers
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：查看网站响应头；HTTP 头检测；在线查看 HTTP Header；响应头查询；检查网站 Headers
- 语气：口语工具站（开发者可读）
- Title / H1 方向：在线查看网站响应头 — HTTP Header 检测
- 按钮短词：开始检测 / 清空；输入网址
- 本地示例用词：示例站点；`content-type: text/html`
- 可保留英文/符号：HTTP、CORS、CSP、Cache-Control、RFC
- 额外禁用：英式 Use cases 标题；堆砌「安全头缓存头跨域」作 title
- SERP 竞品 title（1–3）：HTTP 响应头查询；网站 Header 检测
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：ver cabeceras HTTP；comprobar headers de un sitio；inspeccionar response headers；cabeceras de respuesta online
- 语气：口语工具站（偏开发者）
- Title / H1 方向：Ver cabeceras HTTP de un sitio — Inspeccionar response headers
- 按钮短词：Comprobar / Limpiar；URL
- 本地示例用词：ejemplo.com；cabecera `cache-control`
- 可保留英文/符号：HTTP、CORS、CSP、RFC
- 额外禁用：把 headers 全译成易混词导致检索丢失（可中英混）
- SERP 竞品 title（1–3）：Comprobar cabeceras HTTP；HTTP Header Check
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：فحص ترويسات HTTP؛ عرض رؤوس الاستجابة؛ فحص هيدرز الموقع؛ HTTP headers أونلاين
- 语气：口语工具站
- Title / H1 方向：فحص ترويسات HTTP للموقع — عرض رؤوس الاستجابة
- 按钮短词：فحص / مسح；رابط الموقع
- 本地示例用词：مثال.com；`content-type`
- 可保留英文/符号：HTTP、CORS、CSP、RFC
- 额外禁用：英模堆词 title
- SERP 竞品 title（1–3）：فحص HTTP Headers；أداة رؤوس الاستجابة
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：verificar cabeçalhos HTTP；ver headers de um site；inspecionar response headers；checar cabeçalhos online
- 语气：口语工具站
- Title / H1 方向：Verificar cabeçalhos HTTP de um site — Inspecionar response headers
- 按钮短词：Verificar / Limpar
- 本地示例用词：exemplo.com
- 可保留英文/符号：HTTP、CORS、CSP、RFC
- 额外禁用：title 同义词堆砌
- SERP 竞品 title（1–3）：Checar headers HTTP；HTTP Header Check
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：cek header HTTP；lihat response header situs；periksa HTTP headers online；inspeksi header website
- 语气：口语工具站
- Title / H1 方向：Cek header HTTP website — Lihat response headers
- 按钮短词：Periksa / Hapus
- 本地示例用词：contoh.com
- 可保留英文/符号：HTTP、CORS、CSP、RFC
- 额外禁用：英借「Use cases」空壳标题
- SERP 竞品 title（1–3）：Cek HTTP Header；Response Header Checker
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：vérifier en-têtes HTTP；voir headers d’un site；inspecter response headers；analyser en-têtes HTTP en ligne
- 语气：偏正式开发者
- Title / H1 方向：Vérifier les en-têtes HTTP d’un site — Inspecter les response headers
- 按钮短词：Vérifier / Effacer
- 本地示例用词：exemple.com
- 可保留英文/符号：HTTP、CORS、CSP、RFC
- 额外禁用：过度法化导致丢检索主词 HTTP headers
- SERP 竞品 title（1–3）：Vérifier en-têtes HTTP；HTTP Header Check
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：HTTPヘッダ 確認；レスポンスヘッダ 確認；サイト ヘッダー チェック；HTTPヘッダー 調べる
- 语气：口语工具站（偏开发者）
- Title / H1 方向：サイトのHTTPヘッダを確認 — レスポンスヘッダ検査
- 按钮短词：確認する / クリア
- 本地示例用词：example.com；`cache-control`
- 可保留英文/符号：HTTP、CORS、CSP、RFC
- 额外禁用：ユースケース；カタカナ過度堆砌
- SERP 竞品 title（1–3）：HTTPヘッダチェック；レスポンスヘッダ確認
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：проверить HTTP заголовки；посмотреть response headers сайта；проверка заголовков HTTP онлайн
- 语气：口语工具站
- Title / H1 方向：Проверить HTTP-заголовки сайта — Посмотреть response headers
- 按钮短词：Проверить / Очистить
- 本地示例用词：example.com
- 可保留英文/符号：HTTP、CORS、CSP、RFC
- 额外禁用：title 同义堆砌
- SERP 竞品 title（1–3）：Проверка HTTP заголовков；HTTP Header Check
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：HTTP-Header prüfen；Response-Header anzeigen；Website-Header checken；HTTP Header online prüfen
- 语气：偏正式开发者
- Title / H1 方向：HTTP-Header einer Website prüfen — Response-Header anzeigen
- 按钮短词：Prüfen / Leeren
- 本地示例用词：beispiel.de
- 可保留英文/符号：HTTP、CORS、CSP、RFC
- 额外禁用：Diff-Granularität 类无关造词；title 堆砌
- SERP 竞品 title（1–3）：HTTP-Header prüfen；Header Check Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-11 | 存量增强补齐：slug 保留 website-headers；H1「Check HTTP Response Headers Online」含主词 HTTP Response Headers；次词 Cache-Control / X-Robots-Tag / redirect / CORS 落入 desc·FAQ·SEO 解读区；禁拆 security-headers 薄页。 | 通过；可 phase=0b |
| 0 briefs | 2026-08-06 | 十语检索 brief 定稿；状态 `briefs-ready` | 待实现阶段轮次 1–3 |
| 1 母版+lint | 2026-08-06 | en/zh 母版落地；边缘拉取 + FAQ/References。 | 通过 |
| 1b 母版检索覆盖优化 | 2026-08-11 | 复核 en title「Check HTTP Response Headers Online」主词落点；desc 前置 SEO 价值（X-Robots-Tag 可阻断收录）并含 Cache-Control / redirect 落点；非参数枚举目录腔。 | 通过；可 phase=2 |
| 2 按 brief 重写 | 2026-08-06 | 十语按当地检索词独立重写。 | 通过 |
| 2b 抽查语检索覆盖优化 | 2026-08-11 | 抽查 en,zh,es,ja：en「Check HTTP Response Headers Online」、zh「在线查看网站响应头」、es「Ver cabeceras HTTP…」、ja「HTTPレスポンスヘッダ…」；无参数枚举；其余语轮次2已重写。 | 通过；可 phase=4 |
| 3 抽查+禁词+lint | 2026-08-06 | 禁词表勾选；十语键集一致。 | 通过 |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
| S1 增强：SEO 头解读 | 2026-08-09 | 存量增强（S1 第 4 项，survey §5）：新增结果区「SEO header checks」子卡——Cache-Control / X-Robots-Tag / Redirect 三块人话解读；Worker 改手动逐跳跟随重定向（≤5 跳）返回 redirects 链；10 语新增 27 键（seo_* 解读 + robots_* 指令 + FAQ q6/q7 + rules_item_5）并统一键集（62 keys，脚本校验一致）。 | 十语 |
| 5 描述 SEO 作用增强 | 2026-08-09 | 10 语 `tool_headers_description` 前置 HTTP 头对抓取/缓存/索引的作用（X-Robots-Tag 可阻断收录）；逐语独立改写。 | 通过 |
| 6 meta 长度收敛 | 2026-08-11 | 按 seo-html-defaults 建议将 `tool_headers_description` 压至约 120–160 字符，保留 SEO 价值首句 + 步骤/示例。 | 通过 |
