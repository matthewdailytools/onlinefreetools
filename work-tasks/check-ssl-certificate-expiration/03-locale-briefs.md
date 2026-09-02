# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`check-ssl-certificate-expiration`  
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

- 检索词（3–5）：check ssl certificate expiration; ssl certificate expiry checker; ssl expiry date; ssl certificate checker; certificate transparency
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Check SSL certificate expiration
- 按钮短词：Check; Load sample; Clear
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：检查 SSL 证书过期; SSL 证书到期检查; SSL 有效期; SSL 证书检查; 证书透明度
- 语气：偏正式开发者 / 站长
- Title / H1 方向：检查 SSL 证书过期时间
- 按钮短词：检查; 加载示例; 清空
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：comprobar caducidad certificado ssl; fecha expiración ssl; checker certificado ssl
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Comprobar la caducidad del certificado SSL
- 按钮短词：Comprobar; Ejemplo; Limpiar
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：فحص انتهاء شهادة SSL; تاريخ انتهاء SSL; فاحص شهادة SSL
- 语气：偏正式开发者 / 站长
- Title / H1 方向：فحص انتهاء صلاحية شهادة SSL
- 按钮短词：فحص; مثال; مسح
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：verificar expiração certificado ssl; validade ssl; checker certificado ssl
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Verificar expiração do certificado SSL
- 按钮短词：Verificar; Exemplo; Limpar
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：cek kedaluwarsa sertifikat ssl; masa berlaku ssl; pemeriksa sertifikat ssl
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Cek kedaluwarsa sertifikat SSL
- 按钮短词：Periksa; Contoh; Hapus
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：vérifier expiration certificat ssl; date expiration ssl; checker certificat ssl
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Vérifier l’expiration du certificat SSL
- 按钮短词：Vérifier; Exemple; Effacer
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：SSL証明書 有効期限 確認; SSL 期限切れ; SSL証明書 チェッカー
- 语气：偏正式开发者 / 站长
- Title / H1 方向：SSL証明書の有効期限を確認
- 按钮短词：確認; サンプル; クリア
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：проверить срок ssl сертификата; истечение ssl; проверка ssl сертификата
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Проверить срок действия SSL-сертификата
- 按钮短词：Проверить; Пример; Очистить
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：ssl zertifikat ablauf prüfen; ssl gültigkeit; ssl zertifikat checker
- 语气：偏正式开发者 / 站长
- Title / H1 方向：SSL-Zertifikatsablauf prüfen
- 按钮短词：Prüfen; Beispiel; Leeren
- 本地示例用词：example.com
- 可保留英文/符号：按工具专名（robots.txt / sitemap / security.txt / SSL / SPF DKIM DMARC）
- 额外禁用：勿写 doorway/薄页/slug 元叙述；勿承诺官方 GSC/CA 结果
- SERP 竞品 title（1–3）：Checker / Validator / Tester 墙（见 selection.md）
- 轮次2已重写：[x]  轮次3已抽查：[x]


---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-02 | 保留 check-ssl-certificate-expiration；H1=Check SSL certificate expiration；次词落 desc/FAQ/usecase；Ads N/A；意图审查总判满足；Bing Related 空用 title 代理 | 覆盖表与 0i 已写入 02；可标 ready |
| 1 母版+lint | 2026-09-02 | Wrote en master keys + Page opts + loadSample example.com; CT disclaimer in Rules/result | en ready for phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-02 | H1=Check SSL certificate expiration; expiry checker in desc+usecase; chain FAQ partial; bare checker head not H1 | phase=2 gate |
| 2 按 brief 重写 | 2026-09-02 | Independent rewrite for zh,es,ar,pt,id,fr,ja,ru,de; CT lag disclaimer localized; FAQ openings varied | ten shards under i18n/tools/check-ssl-certificate-expiration/ |
| 2b 抽查语检索覆盖优化 | 2026-09-02 | Spot-check en,zh,es,ja: H1 expiration scene; expiry/caducidad/有効期限 in desc+usecase; chain FAQ partial; bare checker not H1 | phase=4 gate |
| 3 抽查+禁词+lint | 2026-09-02 | Banlist pass; honest CT vs live TLS; edge privacy | ready for phase=all |
