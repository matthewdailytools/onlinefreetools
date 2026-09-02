# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`spf-dkim-dmarc-checker`  
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
- [x] **检索覆盖已优化**（待母版 i18n 后步 2+4）

技术专名可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：spf dkim dmarc checker; dmarc record checker; check dmarc record; spf lookup; dkim selector check
- 语气：偏正式开发者 / 站长
- Title / H1 方向：SPF DKIM DMARC checker
- 按钮短词：Check; Load sample; Clear; DKIM selector
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：SPF DKIM DMARC 检查; DMARC 记录检查; 查询 DMARC; SPF 查询; DKIM selector
- 语气：偏正式开发者 / 站长
- Title / H1 方向：SPF DKIM DMARC 检查器
- 按钮短词：检查; 加载示例; 清空; DKIM 选择器
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：comprobador spf dkim dmarc; checker registro dmarc; consulta spf; selector dkim
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Comprobador SPF DKIM DMARC
- 按钮短词：Comprobar; Ejemplo; Limpiar; Selector DKIM
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：فاحص SPF DKIM DMARC; فحص سجل DMARC; استعلام SPF; محدد DKIM
- 语气：偏正式开发者 / 站长
- Title / H1 方向：فاحص SPF DKIM DMARC
- 按钮短词：فحص; مثال; مسح; محدد DKIM
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：verificador spf dkim dmarc; checker registro dmarc; consulta spf; seletor dkim
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Verificador SPF DKIM DMARC
- 按钮短词：Verificar; Exemplo; Limpar; Seletor DKIM
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：pemeriksa spf dkim dmarc; cek record dmarc; lookup spf; selector dkim
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Pemeriksa SPF DKIM DMARC
- 按钮短词：Periksa; Contoh; Hapus; Selector DKIM
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：vérificateur spf dkim dmarc; checker enregistrement dmarc; lookup spf; sélecteur dkim
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Vérificateur SPF DKIM DMARC
- 按钮短词：Vérifier; Exemple; Effacer; Sélecteur DKIM
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：SPF DKIM DMARC チェック; DMARC レコード 確認; SPF 照会; DKIM セレクタ
- 语气：偏正式开发者 / 站长
- Title / H1 方向：SPF DKIM DMARCチェッカー
- 按钮短词：確認; サンプル; クリア; DKIMセレクタ
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：проверка spf dkim dmarc; проверка dmarc записи; spf lookup; dkim selector
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Проверка SPF DKIM DMARC
- 按钮短词：Проверить; Пример; Очистить; DKIM selector
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：spf dkim dmarc checker; dmarc record prüfen; spf lookup; dkim selector
- 语气：偏正式开发者 / 站长
- Title / H1 方向：SPF-DKIM-DMARC-Checker
- 按钮短词：Prüfen; Beispiel; Leeren; DKIM-Selektor
- 本地示例用词：google.com (selector: google)
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]


---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-02 | 保留 spf-dkim-dmarc-checker；H1=SPF DKIM DMARC checker；次词落 desc/FAQ/usecase；Ads N/A；意图审查总判满足；Bing Related 空用 title 代理 | 覆盖表与 0i 已写入 02；可标 ready |
| 1 母版+lint | 2026-09-02 | en 完整键 + Page opts；loadSample=google.com/google；refs RFC 7208/6376/7489 | 母版可进 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-02 | 主词 SPF DKIM DMARC checker 落 H1；次词 dmarc record checker / spf lookup / email authentication 消歧写入 desc·FAQ·usecase；去参数枚举 | phase=2 绿 |
| 2 按 brief 重写 | 2026-09-02 | 十语按当地检索词独立重写 title/FAQ/How；按钮与隐私句本地化；样例统一 google.com | 十语分片齐 |
| 2b 抽查语检索覆盖优化 | 2026-09-02 | 抽查 en,zh,es,ja：主词进 H1；次词 dmarc/spf lookup 落 desc·FAQ·usecase；句式非英模同构 | phase=4 绿 |
| 3 抽查+禁词+lint | 2026-09-02 | 禁词表扫 title/按钮/FAQ；诚实边缘隐私；无 t() 英文回退 | i18n-done |
