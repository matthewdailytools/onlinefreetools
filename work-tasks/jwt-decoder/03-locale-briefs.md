# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`jwt-decoder`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如把 payload 译成「载荷攻击」）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借
- [x] title/H1 非参数枚举目录腔
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（见 `02` 覆盖表，2026-08-08）
- [x] **检索覆盖已优化**（i18n 初稿后步 2+4）

**本工具额外禁用**：勿承诺「验证签名/可信 token」；勿写成 OAuth 服务器；可见正文勿写 doorway/薄页/slug 元叙述

---

## 每语 brief

### en

- 检索词（3–5）：jwt decoder；decode jwt；jwt parser；jwt payload viewer；jwt debug online
- 语气：偏正式开发者
- Title / H1 方向：JWT Decoder — Read Header & Payload Locally (No Verify)
- 按钮短词：Decode；Copy header；Copy payload；Clear；Load sample
- 本地示例用词：John Doe sample token；HS256
- 可保留英文/符号：JWT、Base64url、RFC 7519、Bearer
- 额外禁用：勿堆 free online best
- SERP 竞品 title（1–3）：JWT Decoder Online；Decode JWT Token；JWT Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：JWT 解码；JWT 解析；JWT payload 查看；JWT 在线解码；Bearer token 调试
- 语气：口语工具站（偏开发者）
- Title / H1 方向：JWT 解码 — 本地查看 Header 与 Payload（不验签）
- 按钮短词：解码；复制 Header；复制 Payload；清空；加载示例
- 本地示例用词：John Doe 示例 token；HS256
- 可保留英文/符号：JWT、Base64url、RFC 7519
- 额外禁用：勿写「已验证签名/可信」
- SERP 竞品 title（1–3）：JWT 在线解码工具；JWT 解析器；JWT Payload 查看
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：decodificador jwt；decodificar jwt；parser jwt；ver payload jwt；jwt online
- 语气：偏正式开发者
- Title / H1 方向：Decodificador JWT — header y payload en local (sin verificar)
- 按钮短词：Decodificar；Copiar header；Copiar payload；Limpiar；Cargar ejemplo
- 本地示例用词：token de ejemplo John Doe
- 可保留英文/符号：JWT、Base64url
- 额外禁用：no prometer verificación de firma
- SERP 竞品 title（1–3）：Decodificador JWT online；Decode JWT
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：فك ترميز JWT؛ محلل JWT؛ عرض payload JWT؛ jwt decoder؛ فك jwt online
- 语气：偏正式开发者
- Title / H1 方向：فك ترميز JWT — قراءة Header و Payload محليًا (بدون تحقق)
- 按钮短词：فك；نسخ header؛ نسخ payload؛ مسح؛ تحميل مثال
- 本地示例用词：رمز John Doe نموذجي
- 可保留英文/符号：JWT、Base64url
- 额外禁用：لا تَعِد بالتحقق من التوقيع
- SERP 竞品 title（1–3）：JWT Decoder Online
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：decodificador jwt；decodificar jwt；parser jwt；ver payload jwt；jwt online
- 语气：偏正式开发者
- Title / H1 方向：Decodificador JWT — header e payload local (sem verificar)
- 按钮短词：Decodificar；Copiar header；Copiar payload；Limpar；Carregar exemplo
- 本地示例用词：token exemplo John Doe
- 可保留英文/符号：JWT、Base64url
- 额外禁用：não prometer verificação de assinatura
- SERP 竞品 title（1–3）：Decodificador JWT online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：jwt decoder；decode jwt；jwt parser；lihat payload jwt；jwt online
- 语气：偏正式开发者
- Title / H1 方向：JWT Decoder — baca header & payload lokal (tanpa verifikasi)
- 按钮短词：Decode；Salin header；Salin payload；Hapus；Muat contoh
- 本地示例用词：token contoh John Doe
- 可保留英文/符号：JWT、Base64url
- 额外禁用：jangan janji verifikasi tanda tangan
- SERP 竞品 title（1–3）：JWT Decoder Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：décodeur jwt；décoder jwt；parser jwt；voir payload jwt；jwt en ligne
- 语气：偏正式开发者
- Title / H1 方向：Décodeur JWT — header et payload en local (sans vérifier)
- 按钮短词：Décoder；Copier en-tête；Copier payload；Effacer；Charger l'exemple
- 本地示例用词：jeton exemple John Doe
- 可保留英文/符号：JWT、Base64url
- 额外禁用：ne pas promettre vérification de signature
- SERP 竞品 title（1–3）：Décodeur JWT en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：JWT デコード；JWT 解析；JWT payload 表示；JWT オンライン；トークン デバッグ
- 语气：偏正式开发者
- Title / H1 方向：JWT デコーダー — Header/Payload をローカル表示（署名検証なし）
- 按钮短词：デコード；Header コピー；Payload コピー；クリア；サンプル
- 本地示例用词：John Doe サンプルトークン
- 可保留英文/符号：JWT、Base64url
- 额外禁用：署名検証を約束しない
- SERP 竞品 title（1–3）：JWT デコーダー オンライン
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：jwt декодер；декодировать jwt；jwt parser；просмотр payload jwt；jwt онлайн
- 语气：偏正式开发者
- Title / H1 方向：JWT декодер — header и payload локально (без проверки подписи)
- 按钮短词：Декодировать；Копировать header；Копировать payload；Очистить；Загрузить пример
- 本地示例用词：пример токена John Doe
- 可保留英文/符号：JWT、Base64url
- 额外禁用：не обещать проверку подписи
- SERP 竞品 title（1–3）：JWT Decoder Online
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：jwt decoder；jwt dekodieren；jwt parser；jwt payload anzeigen；jwt online
- 语气：偏正式开发者
- Title / H1 方向：JWT-Decoder — Header & Payload lokal (ohne Signaturprüfung)
- 按钮短词：Dekodieren；Header kopieren；Payload kopieren；Leeren；Beispiel laden
- 本地示例用词：John-Doe-Beispieltoken
- 可保留英文/符号：JWT、Base64url
- 额外禁用：keine Signaturprüfung versprechen
- SERP 竞品 title（1–3）：JWT Decoder Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | slug/title/关键词/desc 覆盖表写入 `02`；强调 no verify | 完成 |
| 1 母版+lint | 2026-08-08 | en 母版 i18n + jwtDecoderPage.ts 实现 | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title/description 对齐 brief 主词 jwt decoder/decode jwt；次词 parser/exp 落 FAQ/Rules | 完成 |
| 2 按 brief 重写 | 2026-08-08 | zh/es/ar/pt/id/fr/ja/ru/de 独立重写（非英模直译） | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | en/zh/es/ja title 结果向；次词 base64url/exp 落 Rules+FAQ | 完成 |
| 3 抽查+禁词+lint | 2026-08-08 | 十语键齐全；禁词表已扫；FAQ 句式各异 | 完成（待 merge:tools 后 lint:seo） |
| 2b/4b 覆盖 pass | 2026-08-08 | 十语 title 结果向回写 i18n；去参数枚举副标题；en/zh 锚定 | 完成 |
