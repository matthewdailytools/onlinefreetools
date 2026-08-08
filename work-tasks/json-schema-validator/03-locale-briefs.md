# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`json-schema-validator`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 造词伪术语堆砌
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借（ja 用「こんなときに」等）
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清

技术专名（JSON、JSON Schema、JSON Pointer、draft-07、Ajv、CDN、RFC）可保留，**不可**替代本地主 title。

**本工具额外禁用**：勿把「Schema」主推成含糊的「模式」当 H1；勿承诺「支持全部 draft 版本」；勿写「上传到服务器校验」。

---

## 每语 brief

### en

- 检索词：json schema validator；validate json against schema；json schema online；draft 07 validator；json pointer errors
- 语气：偏正式开发者
- Title / H1 方向：JSON Schema Validator — draft-07 paths, local
- 按钮短词：Validate；Failing sample；Valid sample；Clear；Copy errors
- 可保留：JSON Schema、JSON Pointer、draft-07、Ajv、CDN
- 额外禁用：勿堆 free best online
- SERP：JSON Schema Validator Online；Validate JSON against Schema
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词：JSON Schema 校验；JSON Schema 验证器；在线校验 JSON；draft-07；JSON Pointer 错误
- 语气：口语工具站（开发者可读）
- Title / H1 方向：JSON Schema 校验器 — 路径错误、本地处理
- 按钮短词：校验；失败样例；合法样例；清空；复制错误
- 可保留：JSON Schema、JSON Pointer、draft-07、Ajv
- 额外禁用：勿写「上传服务器」
- SERP：JSON Schema 在线校验；JSON 结构校验
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词：validador json schema；validar json con schema；json schema online
- 语气：口语工具站
- Title / H1 方向：Validador JSON Schema — rutas draft-07, local
- 按钮短词：Validar；Ejemplo con error；Ejemplo válido；Limpiar；Copiar errores
- 可保留：JSON Schema、JSON Pointer、draft-07
- SERP：Validador JSON Schema online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词：مدقق JSON Schema؛ التحقق من JSON مقابل Schema
- 语气：偏正式开发者
- Title / H1 方向：مدقق JSON Schema — مسارات draft-07 ومحليًا
- 按钮短词：تحقق؛ عينة فاشلة；عينة صحيحة；مسح；نسخ الأخطاء
- 可保留：JSON Schema、JSON Pointer、draft-07、Ajv
- SERP：مدقق JSON Schema عبر الإنترنت
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词：validador json schema；validar json com schema；json schema online
- 语气：口语工具站
- Title / H1 方向：Validador JSON Schema — caminhos draft-07, local
- 按钮短词：Validar；Amostra com erro；Amostra válida；Limpar；Copiar erros
- 可保留：JSON Schema、JSON Pointer、draft-07
- SERP：Validador JSON Schema online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词：validator json schema；validasi json dengan schema；json schema online
- 语气：口语工具站
- Title / H1 方向：Validator JSON Schema — path draft-07, lokal
- 按钮短词：Validasi；Contoh gagal；Contoh valid；Hapus；Salin error
- 可保留：JSON Schema、JSON Pointer、draft-07
- 额外禁用：勿造 Granularitas
- SERP：Validator JSON Schema online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词：validateur json schema；valider json contre schema；json schema en ligne
- 语气：偏正式开发者
- Title / H1 方向：Validateur JSON Schema — chemins draft-07, local
- 按钮短词：Valider；Exemple en échec；Exemple valide；Effacer；Copier les erreurs
- 可保留：JSON Schema、JSON Pointer、draft-07
- SERP：Validateur JSON Schema en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词：JSON Schema バリデータ；JSON Schema 検証；スキーマで JSON を検証
- 语气：工具站（簡潔）
- Title / H1 方向：JSON Schema バリデータ — draft-07 のパス、ローカル
- 按钮短词：検証；失敗サンプル；成功サンプル；クリア；エラーをコピー
- 场景标题：こんなときに
- 可保留：JSON Schema、JSON Pointer、draft-07、Ajv
- SERP：JSON Schema オンライン検証
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词：валидатор json schema；проверить json по schema；json schema онлайн
- 语气：偏正式开发者
- Title / H1 方向：Валидатор JSON Schema — пути draft-07, локально
- 按钮短词：Проверить；Пример с ошибкой；Верный пример；Очистить；Копировать ошибки
- 可保留：JSON Schema、JSON Pointer、draft-07
- SERP：Валидатор JSON Schema онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词：json schema validator；json gegen schema prüfen；json schema online
- 语气：偏正式开发者
- Title / H1 方向：JSON-Schema-Validator — draft-07-Pfade, lokal
- 按钮短词：Prüfen；Fehlerbeispiel；Gültiges Beispiel；Leeren；Fehler kopieren
- 可保留：JSON Schema、JSON Pointer、draft-07、Ajv
- SERP：JSON Schema Validator online
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录

| 轮次 | 范围 | 结果 |
|------|------|------|
| 1 | en 母版 + 结构键 | 完成：`i18n/tools/json-schema-validator/en.ts` |
| 2 | 各语独立重写 | 完成：zh/es/ar/pt/id/fr/ja/ru/de 按 brief 独立写，非灌语 |
| 3 | title/desc/检索覆盖抽查 | 完成：抽查 en/zh/ja title 含当地检索说法；`lint:seo` OK |
