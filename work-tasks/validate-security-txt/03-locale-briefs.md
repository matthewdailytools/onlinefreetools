# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`validate-security-txt`  
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
- [x] **检索覆盖已优化**（母版步 2 + 抽查 en,zh,es,ja 步 4；2026-09-02）

技术专名可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：validate security.txt; security.txt checker; security.txt validator; well-known security.txt; rfc 9116 fields
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Validate security.txt
- 按钮短词：Validate; Load sample; Clear
- 本地示例用词：https://onlinefreetools.org
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：验证 security.txt; security.txt 检查; security.txt 校验; well-known security.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：验证 security.txt
- 按钮短词：验证; 加载示例; 清空
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：validar security.txt; comprobador security.txt; validador security.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Validar security.txt
- 按钮短词：Validar; Ejemplo; Limpiar
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：التحقق من security.txt; فاحص security.txt; مدقق security.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：التحقق من security.txt
- 按钮短词：تحقق; مثال; مسح
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：validar security.txt; verificador security.txt; validador security.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Validar security.txt
- 按钮短词：Validar; Exemplo; Limpar
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：validasi security.txt; pemeriksa security.txt; validator security.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Validasi security.txt
- 按钮短词：Validasi; Contoh; Hapus
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：valider security.txt; vérificateur security.txt; validateur security.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Valider security.txt
- 按钮短词：Valider; Exemple; Effacer
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：security.txt 検証; security.txt チェッカー; well-known security.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：security.txtを検証
- 按钮短词：検証; サンプル; クリア
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：проверить security.txt; валидатор security.txt; well-known security.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Проверить security.txt
- 按钮短词：Проверить; Пример; Очистить
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：security.txt prüfen; security.txt checker; security.txt validator
- 语气：偏正式开发者 / 站长
- Title / H1 方向：security.txt prüfen
- 按钮短词：Prüfen; Beispiel; Leeren
- 本地示例用词：https://www.google.com/
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]


---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-02 | 保留 validate-security-txt；H1=Validate security.txt；次词落 desc/FAQ/usecase；Ads N/A；意图审查总判满足；Bing Related 空用 title 代理 | 覆盖表与 0i 已写入 02；可标 ready |
| 1 母版+lint | 2026-09-02 | Wrote en master keys (title/desc/How/Rules/FAQ/UI) + Page opts + loadSample google.com | en lint path ready for phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-02 | H1=Validate security.txt; checker/validator in desc+FAQ/usecase; RFC 9116 in Rules/References not H1; .well-known in How | phase=2 gate |
| 2 按 brief 重写 | 2026-09-02 | Independent rewrite for zh,es,ar,pt,id,fr,ja,ru,de from local search phrases; FAQ/How openings varied | ten shards under i18n/tools/validate-security-txt/ |
| 2b 抽查语检索覆盖优化 | 2026-09-02 | Spot-check en,zh,es,ja: H1=Validate/验证/Validar/検証; checker/comprobador/チェッカー in desc+usecase; RFC stays in Rules/Refs | phase=4 gate |
| 3 抽查+禁词+lint | 2026-09-02 | Banlist pass on titles/buttons/FAQ; no doorway meta; edge privacy honest | ready for phase=all |
