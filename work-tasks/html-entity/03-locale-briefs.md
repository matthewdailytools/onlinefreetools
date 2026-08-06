# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`html-entity`  
**母版语言**：en  
**状态**：`briefs-ready`

> `briefs-ready`：brief 已填、待实现阶段按 brief 逐语重写并做 ≥3 轮核查。轮次框与「待母语抽查」在实现时勾选/清理；全部完成且无未清待抽查后才可标 `i18n-done`。

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [ ] 无错义借译（如把 entity 译成「实体类/公司实体」而非「字符实体/字符引用」）
- [ ] 无残缺缩写（如 `Cars.`）
- [ ] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [ ] 十语非同一句式骨架；title 含该语检索说法
- [ ] 未依赖 `t()` 英文回退冒充缺语种
- [ ] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（HTML、Unicode、`&amp;`、`&#x…;`、WHATWG、CDN）可保留，**不可**替代本地主 title。

**本工具额外禁用**：勿承诺「任意 HTML 安全消毒」（本工具是实体编解码，不是 DOMPurify）；「entity」按当地习惯译为「HTML 实体 / entidad HTML / entité HTML / HTML-Entität / HTML-сущность / HTML エンティティ」等，勿译成法律/数据库「实体」；可见正文勿写 doorway/薄页/slug 等元叙述。

---

## 每语 brief

### en

- 检索词（3–5）：html entity encoder；html entity decoder；encode html entities；decode html entities；html escape unescape
- 语气：偏正式开发者
- Title / H1 方向：HTML Entity Encoder & Decoder — escape, unescape, local
- 按钮短词：Encode；Decode；Convert；Copy；Clear；Encoding scope (Minimal / Non-ASCII / All)；Output form (Named / Decimal / Hex)；Strict / Lenient
- 本地示例用词：Tom & Jerry；©；emoji sample
- 可保留英文/符号：HTML、Unicode、`&amp;`、`&#x1F600;`
- 额外禁用：勿堆「free online best」代替规则说明
- SERP 竞品 title（1–3）：HTML Entity Encoder/Decoder；Encode HTML Entities Online；HTML Escape Unescape Tool
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词（3–5）：HTML 实体编码；HTML 实体解码；HTML 转义；字符实体转换；在线 HTML entity
- 语气：口语工具站（偏开发者可读）
- Title / H1 方向：HTML 实体编解码 — 转义、反转义、本地处理
- 按钮短词：编码；解码；转换；复制；清空；编码范围（最小 / 仅非 ASCII / 全部）；输出形式（命名 / 十进制 / 十六进制）；严格 / 宽松
- 本地示例用词：汤姆和杰瑞；版权符号 ©；表情示例
- 可保留英文/符号：HTML、Unicode、`&amp;`、`&#x…;`
- 额外禁用：「实体」勿译成公司/法律实体；勿写「完全安全 HTML 消毒」
- SERP 竞品 title（1–3）：HTML 实体编码解码在线；HTML 转义工具；HTML Entity 编解码
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词（3–5）：codificar entidades html；decodificar entidades html；escape html；convertir entidades html；html entity online
- 语气：口语工具站
- Title / H1 方向：Codificar y decodificar entidades HTML — escape local
- 按钮短词：Codificar；Decodificar；Convertir；Copiar；Limpiar；Alcance (Mínimo / No ASCII / Todo)；Formato (Nombre / Decimal / Hex)；Estricto / Flexible
- 本地示例用词：Tom y Jerry；©
- 可保留英文/符号：HTML、Unicode、`&amp;`
- 额外禁用：no traducir «entity» como «entidad legal»
- SERP 竞品 title（1–3）：Codificador de entidades HTML；HTML Entity Encoder Online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词（3–5）：ترميز كيانات HTML؛ فك ترميز HTML entities؛ escape html؛ محول HTML entity
- 语气：偏正式开发者
- Title / H1 方向：ترميز وفك ترميز كيانات HTML — محليًا
- 按钮短词：ترميز؛ فك ترميز؛ تحويل؛ نسخ؛ مسح؛ النطاق (أدنى / غير ASCII / الكل)；الصيغة (اسم / عشري / hex)；صارم / متساهل
- 本地示例用词：Tom & Jerry；©
- 可保留英文/符号：HTML、Unicode、`&amp;`
- 额外禁用：لا تخلط بين «كيان» القانوني و«مرجع حرف HTML»
- SERP 竞品 title（1–3）：HTML Entity Encoder Online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：codificar entidades html；decodificar entidades html；escape html；converter html entities；html entity online
- 语气：口语工具站
- Title / H1 方向：Codificar e decodificar entidades HTML — local
- 按钮短词：Codificar；Decodificar；Converter；Copiar；Limpar；Escopo (Mínimo / Não ASCII / Tudo)；Formato (Nome / Decimal / Hex)；Rígido / Flexível
- 本地示例用词：Tom & Jerry；©
- 可保留英文/符号：HTML、Unicode
- 额外禁用：não confundir «entidade» com pessoa jurídica
- SERP 竞品 title（1–3）：Codificador de entidades HTML
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：encode html entity；decode html entity；escape html；konverter html entity；html entities online
- 语气：偏正式开发者
- Title / H1 方向：Encode & Decode HTML Entity — lokal di browser
- 按钮短词：Encode；Decode；Konversi；Salin；Hapus；Cakupan (Minimal / Non-ASCII / Semua)；Format (Named / Decimal / Hex)；Strict / Lenient
- 本地示例用词：Tom & Jerry；©
- 可保留英文/符号：HTML、Unicode、`&amp;`
- 额外禁用：jangan terjemahkan «entity» sebagai badan hukum
- SERP 竞品 title（1–3）：HTML Entity Encoder Decoder
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：encoder entités html；décoder entités html；escape html；convertisseur html entity；html entities en ligne
- 语气：口语工具站
- Title / H1 方向：Encoder et décoder les entités HTML — local
- 按钮短词：Encoder；Décoder；Convertir；Copier；Effacer；Portée (Minimal / Non-ASCII / Tout)；Format (Nom / Décimal / Hex)；Strict / Souple
- 本地示例用词：Tom & Jerry；©
- 可保留英文/符号：HTML、Unicode
- 额外禁用：ne pas confondre « entité » juridique et référence de caractère
- SERP 竞品 title（1–3）：Encodeur d'entités HTML en ligne
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：HTML エンティティ エンコード；HTML エンティティ デコード；HTML エスケープ；文字参照 変換；html entity ツール
- 语气：偏正式开发者
- Title / H1 方向：HTML エンティティのエンコード／デコード — ローカル処理
- 按钮短词：エンコード；デコード；変換；コピー；クリア；範囲（最小 / 非 ASCII / 全部）；形式（名前 / 10進 / 16進）；厳密 / 緩和
- 本地示例用词：トムとジェリー；©
- 可保留英文/符号：HTML、Unicode、`&amp;`
- 额外禁用：「エンティティ」を法人意味で使わない
- SERP 竞品 title（1–3）：HTMLエンティティ エンコーダー デコーダー
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru

- 检索词（3–5）：кодирование html entities；декодирование html entities；html escape；конвертер html entity；html entities онлайн
- 语气：偏正式开发者
- Title / H1 方向：Кодирование и декодирование HTML-сущностей — локально
- 按钮短词：Кодировать；Декодировать；Преобразовать；Копировать；Очистить；Область (Минимум / Не-ASCII / Всё)；Формат (Именной / Десятичный / Hex)；Строго / Мягко
- 本地示例用词：Tom & Jerry；©
- 可保留英文/符号：HTML、Unicode
- 额外禁用：не путать «сущность» с юрлицом
- SERP 竞品 title（1–3）：HTML Entity Encoder Decoder
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：html entities kodieren；html entities dekodieren；html escape；html entity konverter；html entities online
- 语气：偏正式开发者
- Title / H1 方向：HTML-Entitäten kodieren & dekodieren — lokal
- 按钮短词：Kodieren；Dekodieren；Konvertieren；Kopieren；Leeren；Umfang (Minimal / Nicht-ASCII / Alle)；Format (Name / Dezimal / Hex)；Strikt / Nachsichtig
- 本地示例用词：Tom & Jerry；©
- 可保留英文/符号：HTML、Unicode
- 额外禁用：«Entität» nicht als Unternehmen übersetzen
- SERP 竞品 title（1–3）：HTML Entity Encoder Decoder Online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
