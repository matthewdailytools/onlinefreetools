# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`check-robots-txt-url-blocked`  
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
- [x] **检索覆盖已优化**（母版步 2 + 抽查语步 4；2026-09-02）

技术专名可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：check if url blocked robots.txt; robots.txt tester; robots.txt validator; check robots.txt online; googlebot robots test
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Check if a URL is blocked by robots.txt
- 按钮短词：Check; Load sample; Clear; User-agent
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：检查网址是否被 robots.txt 屏蔽; robots.txt 测试; robots.txt 校验; 在线检查 robots.txt; Googlebot 规则
- 语气：偏正式开发者 / 站长
- Title / H1 方向：检查网址是否被 robots.txt 屏蔽
- 按钮短词：检查; 加载示例; 清空; 用户代理
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：comprobar si url bloqueada robots.txt; probador robots.txt; validador robots.txt; robots.txt online
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Comprobar si una URL está bloqueada por robots.txt
- 按钮短词：Comprobar; Ejemplo; Limpiar; Agente
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：فحص حظر رابط robots.txt; اختبار robots.txt; التحقق من robots.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：تحقق مما إذا كان الرابط محظورًا بواسطة robots.txt
- 按钮短词：فحص; مثال; مسح; وكيل
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：verificar se url bloqueada robots.txt; testar robots.txt; validar robots.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Verificar se uma URL está bloqueada pelo robots.txt
- 按钮短词：Verificar; Exemplo; Limpar; Agente
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：cek url diblokir robots.txt; uji robots.txt; validasi robots.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Cek apakah URL diblokir oleh robots.txt
- 按钮短词：Periksa; Contoh; Hapus; User-agent
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：vérifier url bloquée robots.txt; testeur robots.txt; validateur robots.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Vérifier si une URL est bloquée par robots.txt
- 按钮短词：Vérifier; Exemple; Effacer; Agent
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：URL robots.txt ブロック確認; robots.txt テスター; robots.txt 検証
- 语气：偏正式开发者 / 站长
- Title / H1 方向：URLがrobots.txtでブロックされているか確認
- 按钮短词：確認; サンプル; クリア; UA
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：проверить блокировку url robots.txt; тестер robots.txt; валидатор robots.txt
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Проверить, блокирует ли robots.txt URL
- 按钮短词：Проверить; Пример; Очистить; UA
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：url von robots.txt blockiert prüfen; robots.txt tester; robots.txt validator
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Prüfen, ob eine URL von robots.txt blockiert wird
- 按钮短词：Prüfen; Beispiel; Leeren; User-Agent
- 本地示例用词：https://example.com/admin
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[ ]


---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-02 | 保留 check-robots-txt-url-blocked；H1=Check if a URL is blocked by robots.txt；次词落 desc/FAQ/usecase；Ads N/A；意图审查总判满足；Bing Related 空用 title 代理 | 覆盖表与 0i 已写入 02；可标 ready |
| 1 母版+lint | 2026-09-02 | 写 en 母版完整键 + Page opts；主词进 H1；隐私句诚实边缘拉取 | 母版可跑 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-02 | 回写 en title/description：主词「blocked by robots.txt」落 H1；次词 tester/validator/online/AI crawler 写入 desc+FAQ+usecase；去参数枚举 | 母版检索向已优化；可开他语 |
| 2 按 brief 重写 | 2026-09-02 | 按十语 brief 独立重写 title/FAQ/How（非 en 同构）；按钮用当地短词 | 十语分片齐 |
| 2b 抽查语检索覆盖优化 | 2026-09-02 | 再优化 en,zh,es,ja：各地主词落 H1（屏蔽/bloqueada/ブロック）；次词 tester·校验·online 落 desc/FAQ/usecase | 抽查语覆盖齐；勾「检索覆盖已优化」 |
| 3 抽查+禁词+lint | 2026-09-02 | 扫 en+zh+es+ja 禁词/同构/隐私；无 doorway 元叙述；边缘工具无假「不上传」 | 可标 implemented |
