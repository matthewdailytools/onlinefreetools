# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。Agent：按 brief **重写**，不要整页翻译。

**工具 slug**：`uuid-generator`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 错义借译 / 残缺缩写 / 空壳场景标题 / 参数枚举 title / 同构骨架 / 英文回退 / 脚本灌语
- [x] **清单前检索覆盖已做**（`02`，2026-08-08）
- [x] **检索覆盖已优化**（步 2+4 · 2026-08-08 实现时）

**额外禁用**：勿承诺 ULID/UUID 全局唯一保证；勿写成数据库主键迁移工具

---

## 每语 brief

### en

- 检索词（3–5）：uuid generator；uuid v4；ulid generator；generate uuid online；bulk uuid
- 语气：偏正式开发者
- Title / H1 方向：UUID & ULID Generator — Create IDs in Your Browser
- 按钮短词：Generate；Copy all；Copy；Clear；Load sample；UUID v4；ULID；Count
- 本地示例用词：test record id；trace id
- 可保留英文/符号：UUID、ULID、RFC 4122、v4
- 额外禁用：勿堆 free online best
- SERP 竞品 title（1–3）：UUID Generator Online；ULID Generator；Generate UUID v4
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词（3–5）：UUID 生成器；UUID v4 生成；ULID 生成；批量 UUID；在线 UUID
- 语气：口语工具站（偏开发者）
- Title / H1 方向：UUID / ULID 生成 — 在浏览器内创建标识符
- 按钮短词：生成；全部复制；复制；清空；加载示例；UUID v4；ULID；数量
- 本地示例用词：测试记录 ID；链路 trace id
- 可保留英文/符号：UUID、ULID、RFC 4122
- 额外禁用：勿写「保证数据库不冲突」
- SERP 竞品 title（1–3）：UUID 在线生成；ULID 生成器；UUID v4 生成
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词（3–5）：generador uuid；uuid v4；generador ulid；generar uuid online；uuid masivo
- 语气：偏正式开发者
- Title / H1 方向：Generador UUID y ULID — IDs en lote, local
- 按钮短词：Generar；Copiar todo；Copiar；Limpiar；Cargar ejemplo；UUID v4；ULID；Cantidad
- 本地示例用词：id de prueba；trace id
- 可保留英文/符号：UUID、ULID
- SERP 竞品 title（1–3）：Generador UUID online；ULID Generator
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词（3–5）：مولد uuid؛ uuid v4؛ مولد ulid؛ توليد uuid؛ uuid بالجملة
- 语气：偏正式开发者
- Title / H1 方向：مولد UUID و ULID — دفعات محليًا
- 按钮短词：توليد؛ نسخ الكل؛ نسخ؛ مسح؛ تحميل مثال؛UUID v4؛ULID؛العدد
- 可保留英文/符号：UUID、ULID
- SERP 竞品 title（1–3）：UUID Generator Online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：gerador uuid；uuid v4；gerador ulid；gerar uuid online；uuid em lote
- 语气：偏正式开发者
- Title / H1 方向：Gerador UUID e ULID — lote local
- 按钮短词：Gerar；Copiar tudo；Copiar；Limpar；Carregar exemplo；UUID v4；ULID；Quantidade
- SERP 竞品 title（1–3）：Gerador UUID online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：uuid generator；uuid v4；ulid generator；generate uuid；uuid bulk
- 语气：偏正式开发者
- Title / H1 方向：Generator UUID & ULID — batch lokal
- 按钮短词：Generate；Salin semua；Salin；Hapus；Muat contoh；UUID v4；ULID；Jumlah
- SERP 竞品 title（1–3）：UUID Generator Online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：générateur uuid；uuid v4；générateur ulid；générer uuid；uuid en lot
- 语气：偏正式开发者
- Title / H1 方向：Générateur UUID et ULID — lot local
- 按钮短词：Générer；Tout copier；Copier；Effacer；Charger l'exemple；UUID v4；ULID；Quantité
- SERP 竞品 title（1–3）：Générateur UUID en ligne
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：UUID 生成；UUID v4；ULID 生成；UUID オンライン；一括 UUID
- 语气：偏正式开发者
- Title / H1 方向：UUID / ULID ジェネレーター — ローカル一括生成
- 按钮短词：生成；すべてコピー；コピー；クリア；サンプル；UUID v4；ULID；件数
- SERP 竞品 title（1–3）：UUID ジェネレーター オンライン
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru

- 检索词（3–5）：генератор uuid；uuid v4；генератор ulid；создать uuid；uuid пакетом
- 语气：偏正式开发者
- Title / H1 方向：Генератор UUID и ULID — пакетно, локально
- 按钮短词：Сгенерировать；Копировать все；Копировать；Очистить；Загрузить пример；UUID v4；ULID；Количество
- SERP 竞品 title（1–3）：UUID Generator Online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：uuid generator；uuid v4；ulid generator；uuid erzeugen；uuid bulk
- 语气：偏正式开发者
- Title / H1 方向：UUID- & ULID-Generator — Batch lokal
- 按钮短词：Generieren；Alles kopieren；Kopieren；Leeren；Beispiel laden；UUID v4；ULID；Anzahl
- SERP 竞品 title（1–3）：UUID Generator Online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

> 行 ID 供 coverage:gate 解析。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | uuid+ulid 合并 slug；主词 uuid generator→H1；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 母版 + 10 语分片 | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title 改为 Create IDs in Your Browser；去掉 Batch 控件腔；主词 UUID/ULID 在 H1 | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 十语独立重写 | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja；各语 title 结果向；ulid 落 Rules/FAQ | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | 页面+catalog+i18n 落地 | i18n-done |
