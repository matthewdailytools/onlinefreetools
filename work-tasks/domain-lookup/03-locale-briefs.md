# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`domain-lookup`  
**母版语言**：en  
**状态**：`i18n-done`

> `pending-native-review`：仅当仍有语种勾选「待母语抽查」时使用。清掉所有待抽查勾选并完成轮次 3 后，才可标 `i18n-done`。

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：本工具为 **Worker 上游查询**（非文件本地处理）——须说清「查询经本站边缘发往 DNS/RDAP」，勿假称「文件不上服务器」式套话；十语 FAQ/desc 已按诚实边界写明
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02`/`notes` 有覆盖表；见 localization 步 0b）——勾工程/页面/上线清单前必做
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（DNS、WHOIS、RDAP、MX、NS、TXT、SOA、DoH）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

---

## 每语 brief

### en

- 检索词（3–5）：domain lookup；whois lookup；dns lookup；check domain registration；domain registrar expiry
- 语气：偏正式开发者
- Title / H1 方向：Domain Lookup — Check DNS Records & Registration Online
- 按钮短词：Lookup / Clear / Load sample
- 本地示例用词：example.com；A / MX / NS
- 可保留英文/符号：DNS、WHOIS、RDAP、DoH、MX、NS、TXT、SOA
- 额外禁用：title 罗列「A, AAAA, MX, NS, TXT, WHOIS, RDAP」参数目录腔；承诺完整 owner 联系人
- SERP 竞品 title（1–3）：ICANN Lookup；WHOIS Lookup；DNS Lookup
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：域名查询；WHOIS 查询；DNS 查询；域名注册信息查询；查域名解析
- 语气：口语工具站（开发者可读）
- Title / H1 方向：域名查询 — 查看 DNS 解析与注册信息
- 按钮短词：查询 / 清空 / 加载样例
- 本地示例用词：example.com；解析记录；注册商
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS、TXT
- 额外禁用：title「A、AAAA、MX、NS、TXT」目录腔；英式 Use cases 空壳标题
- SERP 竞品 title（1–3）：域名 Whois 查询；DNS 查询；域名信息查询
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：consulta de dominio；whois；consulta DNS；información de registro de dominio；caducidad dominio
- 语气：口语工具站（偏开发者）
- Title / H1 方向：Consulta de dominio — ver DNS y datos de registro
- 按钮短词：Consultar / Limpiar / Ejemplo
- 本地示例用词：example.com
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS
- 额外禁用：title 参数枚举；暗示联系人完整可见
- SERP 竞品 title（1–3）：WHOIS dominio；Consulta DNS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：البحث عن النطاق；WHOIS؛ استعلام DNS؛ معلومات تسجيل النطاق
- 语气：口语工具站
- Title / H1 方向：البحث عن النطاق — تحقق من DNS وبيانات التسجيل
- 按钮短词：بحث / مسح / مثال
- 本地示例用词：example.com
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS
- 额外禁用：英模堆词 title
- SERP 竞品 title（1–3）：WHOIS；فحص DNS للنطاق
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：consulta de domínio；whois；consulta DNS；registro do domínio；validade do domínio
- 语气：口语工具站
- Title / H1 方向：Consulta de domínio — ver DNS e dados de registro
- 按钮短词：Consultar / Limpar / Exemplo
- 本地示例用词：example.com
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS
- 额外禁用：title 参数枚举
- SERP 竞品 title（1–3）：WHOIS domínio；Consulta DNS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：cek domain；whois；lookup DNS；info registrasi domain；kedaluwarsa domain
- 语气：口语工具站
- Title / H1 方向：Cek domain — lihat DNS dan data registrasi
- 按钮短词：Cek / Hapus / Contoh
- 本地示例用词：example.com
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS
- 额外禁用：英借「Use cases」空壳标题
- SERP 竞品 title（1–3）：WHOIS domain；Cek DNS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：recherche de domaine；whois；lookup DNS；informations d’enregistrement；expiration domaine
- 语气：偏正式开发者
- Title / H1 方向：Recherche de domaine — DNS et données d’enregistrement
- 按钮短词：Rechercher / Effacer / Exemple
- 本地示例用词：example.com
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS
- 额外禁用：过度法化丢掉 DNS/WHOIS 检索主词
- SERP 竞品 title（1–3）：WHOIS domaine；Lookup DNS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：ドメイン 調べる；WHOIS；DNS 確認；ドメイン 登録情報；有効期限
- 语气：口语工具站（偏开发者）
- Title / H1 方向：ドメイン照会 — DNSと登録情報を確認
- 按钮短词：照会 / クリア / サンプル
- 本地示例用词：example.com
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS
- 额外禁用：ユースケース；パラメータ羅列タイトル
- SERP 竞品 title（1–3）：WHOIS検索；DNSルックアップ
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：проверка домена；whois；DNS lookup；информация о регистрации домена；срок регистрации
- 语气：口语工具站
- Title / H1 方向：Проверка домена — DNS и данные регистрации
- 按钮短词：Проверить / Очистить / Пример
- 本地示例用词：example.com
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS
- 额外禁用：title 同义堆砌/参数枚举
- SERP 竞品 title（1–3）：WHOIS домена；DNS проверка
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：Domain-Lookup；Whois；DNS-Abfrage；Domain-Registrierung prüfen；Ablaufdatum Domain
- 语气：偏正式开发者
- Title / H1 方向：Domain-Lookup — DNS und Registrierungsdaten prüfen
- 按钮短词：Abfragen / Leeren / Beispiel
- 本地示例用词：example.com
- 可保留英文/符号：DNS、WHOIS、RDAP、MX、NS
- 额外禁用：title「A, AAAA, MX…」目录腔
- SERP 竞品 title（1–3）：Whois Domain；DNS Lookup
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 主词回写 H1「Domain Lookup — Check DNS Records & Registration Online」；去掉初稿参数枚举「A,AAAA,MX,NS,TXT,WHOIS,RDAP」；whois/dns/expiry 次词落 desc/FAQ；slug 保留 domain-lookup 不拆薄页；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | 写 en 完整键（title/desc/How/Rules/FAQ/UI）；主词 Domain Lookup 进 H1；description≥120 含 whois/RDAP 与 example.com | 母版落盘 |
| 1b 母版检索覆盖优化 | 2026-08-08 | 复核 en title 保持结果向「Check DNS Records & Registration」；次词 whois→FAQ q1、dns/MX→desc、expiry→usecase2；无参数枚举 H1；home `_desc` 短检索向 | 通过 phase=2 |
| 2 按 brief 重写 | 2026-08-08 | 按十语 brief 独立重写 zh/es/ar/pt/id/fr/ja/ru/de；FAQ 题序随语种调整；诚实写边缘查询非文件本地 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja：再核 title/desc 主词落点；zh「域名查询」、es「Consulta de dominio」、ja「ドメイン照会」；次词 whois/DNS 有落点；无参数枚举 | 通过 phase=4 |
| 3 抽查+禁词+lint | 2026-08-08 | 抽 en+zh+es+ja：禁词表、边缘查询诚实边界、反同构；lint:seo OK；coverage:gate all 绿 | 通过 |
