# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`add-www-to-dns`  
**母版语言**：en  
**状态**：`i18n-done`（实现已落盘十语；ar/ja/ru 教程为检索向精简版，如需母语润色可再开「待母语抽查」）

> `briefs-ready`：brief 已填、待实现阶段按 brief 逐语重写并做 ≥3 轮核查。

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无 granularity / 对比粒度 等造词
- [ ] 无错义借译（如把 apex 译成「顶点」而不说明根域/裸域；把 CNAME 误成「改名公司」）
- [ ] 无残缺缩写
- [ ] 场景标题非「ユースケース」式空壳英借
- [ ] 十语非同一句式骨架；title 含该语检索说法
- [ ] 未依赖 `t()` 英文回退冒充缺语种
- [ ] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（DNS、CNAME、A、AAAA、TTL、ALIAS、DoH、apex、www、RFC）可保留，**不可**替代本地主 title。

**本工具额外禁用**：勿承诺「一键改好你的 DNS」（本工具只生成记录/查询，不登录用户面板）；勿把 301 说成 DNS 记录类型；可见正文勿写 doorway/薄页/slug 元叙述；Provider 教程勿十语同构机翻步骤（面板菜单名可保留英文产品词，说明句须本地化）。

**Provider guides（实现时每语独立键）**：G1 通用面板 · G2 Cloudflare · G3 Route 53 · G4 Vercel · G5 Netlify · G6 阿里云解析 · G7 自建 VPS。每语至少写清「章节标题 + 4–7 步 + 注意点」；官方产品名可保留英文。

---

## 每语 brief

### en

- 检索词（3–5）：add www to dns；www cname record；point www to domain；cloudflare add www；vercel www dns
- 语气：偏正式开发者 / 站长
- Title / H1 方向：Add WWW to DNS — A/CNAME, apex rules & provider guides
- 按钮短词：Generate；Copy；Check current DNS；Clear；Load sample；Scheme (A+CNAME / Dual A / CDN host)；Guides (Cloudflare / Route 53 / Vercel / …)
- 本地示例用词：example.com；203.0.113.10
- 可保留英文/符号：DNS、CNAME、A、AAAA、TTL、ALIAS、www
- 额外禁用：勿承诺 auto-apply to registrar
- SERP 竞品 title（1–3）：How to Add a WWW CNAME；WWW vs Non-WWW；Create DNS Records for WWW
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词（3–5）：给域名加 www；www DNS 记录；Cloudflare 添加 www；阿里云解析 www；Vercel www
- 语气：口语工具站（偏站长可读）
- Title / H1 方向：给域名添加 www DNS — 记录生成与各平台教程
- 按钮短词：生成；复制；查询当前 DNS；清空；载入示例；方案；教程（Cloudflare / 阿里云 / Vercel / …）
- 本地示例用词：example.com；203.0.113.10
- 可保留英文/符号：DNS、CNAME、A、AAAA、TTL、www
- 额外禁用：「apex」可写「根域/裸域」；勿承诺一键写入控制台
- SERP 竞品 title（1–3）：如何设置 www 域名；www 子域名 CNAME；根域名 DNS 配置
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词（3–5）：añadir www al dns；registro cname www；apuntar www al dominio；www vs sin www；cname en apex
- 语气：口语工具站
- Title / H1 方向：Añadir WWW al DNS — registros A/CNAME y reglas del apex
- 按钮短词：Generar；Copiar；Comprobar DNS；Limpiar；Ejemplo；Esquema
- 本地示例用词：example.com
- 可保留英文/符号：DNS、CNAME、A、AAAA、TTL
- 额外禁用：no prometer cambiar el panel del registrador
- SERP 竞品 title（1–3）：Cómo añadir WWW al DNS；Registro CNAME para www
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词（3–5）：إضافة www إلى DNS؛ سجل CNAME لـ www；توجيه www؛ www مقابل بدون www
- 语气：偏正式开发者
- Title / H1 方向：إضافة WWW إلى DNS — سجلات A/CNAME وقواعد الجذر
- 按钮短词：إنشاء；نسخ；فحص DNS؛مسح；مثال؛المخطط
- 本地示例用词：example.com
- 可保留英文/符号：DNS، CNAME، A، AAAA، TTL، www
- 额外禁用：لا تَعِد بتعديل لوحة DNS تلقائيًا
- SERP 竞品 title（1–3）：إضافة www إلى DNS
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：adicionar www ao dns；registro cname www；apontar www；www vs sem www；cname no apex
- 语气：口语工具站
- Title / H1 方向：Adicionar WWW ao DNS — registros A/CNAME e regras do apex
- 按钮短词：Gerar；Copiar；Verificar DNS；Limpar；Exemplo；Esquema
- 本地示例用词：example.com
- 可保留英文/符号：DNS、CNAME、A、AAAA
- 额外禁用：não prometer gravar no painel
- SERP 竞品 title（1–3）：Como adicionar WWW no DNS
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：tambah www ke dns；record cname www；arahkan www；www vs non-www；cname apex
- 语气：偏正式开发者
- Title / H1 方向：Tambah WWW ke DNS — record A/CNAME & aturan apex
- 按钮短词：Generate；Salin；Cek DNS；Hapus；Contoh；Skema
- 本地示例用词：example.com
- 可保留英文/符号：DNS、CNAME、A、AAAA、TTL
- 额外禁用：jangan janjikan ubah panel registrar
- SERP 竞品 title（1–3）：Cara menambah WWW di DNS
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：ajouter www au dns；enregistrement cname www；pointer www；www vs sans www；cname apex
- 语气：口语工具站
- Title / H1 方向：Ajouter WWW au DNS — enregistrements A/CNAME et règles d’apex
- 按钮短词：Générer；Copier；Vérifier le DNS；Effacer；Exemple；Schéma
- 本地示例用词：example.com
- 可保留英文/符号：DNS、CNAME、A、AAAA、TTL
- 额外禁用：ne pas promettre d’écrire chez le registrar
- SERP 竞品 title（1–3）：Ajouter WWW au DNS；CNAME pour www
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：DNS に www を追加；www CNAME；www を設定；www と非 www；apex CNAME 不可
- 语气：偏正式开发者
- Title / H1 方向：DNS に WWW を追加 — A/CNAME と apex のルール
- 按钮短词：生成；コピー；DNS を確認；クリア；サンプル；方式
- 本地示例用词：example.com
- 可保留英文/符号：DNS、CNAME、A、AAAA、TTL、www
- 额外禁用：レジストラへ自動書き込みを約束しない
- SERP 竞品 title（1–3）：www サブドメインの DNS 設定；CNAME で www
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru

- 检索词（3–5）：добавить www в dns；cname запись www；направить www；www vs без www；cname на apex
- 语气：偏正式开发者
- Title / H1 方向：Добавить WWW в DNS — записи A/CNAME и правила apex
- 按钮短词：Сгенерировать；Копировать；Проверить DNS；Очистить；Пример；Схема
- 本地示例用词：example.com
- 可保留英文/符号：DNS、CNAME、A、AAAA、TTL
- 额外禁用：не обещать запись в панель регистратора
- SERP 竞品 title（1–3）：Как добавить www в DNS
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：www zu dns hinzufügen；www cname eintrag；www auf domain zeigen；www vs ohne www；cname am apex
- 语气：偏正式开发者
- Title / H1 方向：WWW zu DNS hinzufügen — A/CNAME-Einträge & Apex-Regeln
- 按钮短词：Erzeugen；Kopieren；DNS prüfen；Leeren；Beispiel；Schema
- 本地示例用词：example.com
- 可保留英文/符号：DNS、CNAME、A、AAAA、TTL
- 额外禁用：kein Auto-Schreiben ins Registrar-Panel versprechen
- SERP 竞品 title（1–3）：WWW im DNS einrichten；CNAME für www
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
