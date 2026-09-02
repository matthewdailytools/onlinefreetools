# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`find-and-validate-xml-sitemap`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非「ユースケース」式空壳英借
- [x] title/H1 非「参数A、参数B、参数C」目录腔
- [x] 隐私句诚实：边缘工具写清「URL/域名经 Worker 请求，不作业务库长期存储」（非假「不上传」标签）
- [x] 十语非同一句式骨架（实现时再勾）
- [x] 未依赖 `t()` 英文回退（实现时再勾）
- [x] 未使用「脚本批量同构灌语」（实现时再勾）
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02` 有覆盖表；2026-09-02）
- [x] **用户意图审查已做**（`02` 总判：满足）
- [x] **检索覆盖已优化**（母版步 2 + 抽查语 en,zh,es,ja 步 4；2026-09-02）

技术专名可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：find and validate xml sitemap; xml sitemap checker; xml sitemap validator; sitemap finder; validate xml sitemap
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Find and validate XML sitemap
- 按钮短词：Find & validate; Load sample; Clear
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：查找并验证 XML 站点地图; XML sitemap 检查; sitemap 校验; 查找 sitemap; 验证 sitemap
- 语气：偏正式开发者 / 站长
- Title / H1 方向：查找并验证 XML 站点地图
- 按钮短词：查找并验证; 加载示例; 清空
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：encontrar y validar sitemap xml; comprobador sitemap; validador sitemap; buscador sitemap
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Encontrar y validar el sitemap XML
- 按钮短词：Buscar y validar; Ejemplo; Limpiar
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：العثور على خريطة موقع XML والتحقق; فاحص sitemap; مدقق sitemap
- 语气：偏正式开发者 / 站长
- Title / H1 方向：العثور على خريطة موقع XML والتحقق منها
- 按钮短词：بحث وتحقق; مثال; مسح
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：encontrar e validar sitemap xml; verificador sitemap; validador sitemap
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Encontrar e validar sitemap XML
- 按钮短词：Encontrar e validar; Exemplo; Limpar
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：temukan dan validasi sitemap xml; pemeriksa sitemap; validator sitemap
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Temukan dan validasi sitemap XML
- 按钮短词：Temukan & validasi; Contoh; Hapus
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：trouver et valider sitemap xml; vérificateur sitemap; validateur sitemap
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Trouver et valider un sitemap XML
- 按钮短词：Trouver et valider; Exemple; Effacer
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：XMLサイトマップ 検索 検証; サイトマップ チェッカー; サイトマップ バリデータ
- 语气：偏正式开发者 / 站长
- Title / H1 方向：XMLサイトマップを見つけて検証
- 按钮短词：検索して検証; サンプル; クリア
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：найти и проверить xml sitemap; проверка sitemap; валидатор sitemap
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Найти и проверить XML-sitemap
- 按钮短词：Найти и проверить; Пример; Очистить
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：xml sitemap finden und prüfen; sitemap checker; sitemap validator; sitemap finder
- 语气：偏正式开发者 / 站长
- Title / H1 方向：XML-Sitemap finden und prüfen
- 按钮短词：Finden & prüfen; Beispiel; Leeren
- 本地示例用词：https://www.sitemaps.org/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]


---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-02 | 保留 find-and-validate-xml-sitemap；H1=Find and validate XML sitemap；次词落 desc/FAQ/usecase；Ads N/A；意图审查总判满足；Bing Related 空用 title 代理 | 覆盖表与 0i 已写入 02；可标 ready |
| 1 母版+lint | 2026-09-02 | 写 en 母版全键（How×4、Rules×5、FAQ×5、UI、refs）；Page opts + findings 表；样例 sitemaps.org | 母版可跑 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-02 | 核对 en：主词「Find and validate XML sitemap」落 H1；次词 xml sitemap checker/validator → desc+FAQ；sitemap finder → usecase_1；validate → formula；去参数枚举 | 主词 H1；次词 desc/FAQ/usecase；gate phase=2 |
| 2 按 brief 重写 | 2026-09-02 | 十语按当地检索词独立重写 title/FAQ/How（非 en 同构灌语）；按钮与样例对齐 brief | 十语分片齐全 |
| 2b 抽查语检索覆盖优化 | 2026-09-02 | 抽查 en,zh,es,ja：再核当地主词进 H1、次词落 desc/FAQ/usecase（zh 查找并验证；es Encontrar y validar；ja 見つけて検証）；样例统一 sitemaps.org | en,zh,es,ja 检索向落点确认；gate phase=4 |
| 3 抽查+禁词+lint | 2026-09-02 | 禁词表扫 title/FAQ；边缘隐私句诚实；无 doorway 元叙述；清 ar/ja/ru 待母语抽查 | i18n-done |
