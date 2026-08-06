# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`indexnow`  
**母版语言**：en  
**状态**：`pending-native-review`（en/zh 为母版级；es/pt/id/fr/de 已做检索向 UI+核心 FAQ；ar/ja/ru 待母语抽查）

> `briefs-ready`：brief 已填、待实现阶段按 brief 逐语重写并做 ≥3 轮核查。

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无 granularity / 对比粒度 等造词
- [ ] 无错义借译（如把 IndexNow 译成「索引立刻完成」；把 202 Accepted 说成「已收录」）
- [ ] 无残缺缩写
- [ ] 场景标题非「ユースケース」式空壳英借
- [ ] 十语非同一句式骨架；title 含该语检索说法
- [ ] 未依赖 `t()` 英文回退冒充缺语种
- [ ] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（IndexNow、Bing、HTTP、JSON、host、keyLocation、sitemap）可保留，**不可**替代本地主 title。

**本工具额外禁用**：

- 勿承诺「保证收录 / 提升排名 / 秒收 Google」
- 勿把 HTTP 202 表述为「key 已验证通过」
- 勿诱导用户提交他人站点 URL（文案强调仅提交你控制的 host）
- 可见正文勿写 doorway/薄页/slug 元叙述；勿把本站 `ops/seo` 运维脚本写成用户必读步骤

---

## 每语 brief

### en

- 检索词（3–5）：IndexNow；Bing IndexNow submit URL；IndexNow key file；IndexNow 202 Accepted；IndexNow key checker
- 语气：偏正式开发者 / 站长
- Title / H1 方向：IndexNow — Bing URL submit, key check & status codes
- 按钮短词：Generate key；Download .txt；Check key；Submit；Preview；Clear；Load sample
- 本地示例用词：www.example.com；https://www.example.com/page
- 可保留英文/符号：IndexNow、Bing、HTTP、keyLocation、host
- 额外禁用：do not promise indexing or rankings
- SERP 竞品 title（1–3）：IndexNow URL Submitter；IndexNow Key Checker；Submit URLs to Bing with IndexNow
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：IndexNow；Bing IndexNow 提交；IndexNow 密钥文件；IndexNow 202；IndexNow 验证 key
- 语气：口语工具站（偏站长可读）
- Title / H1 方向：IndexNow — Bing URL 提交、密钥检查与状态码说明
- 按钮短词：生成密钥；下载 txt；检查密钥；提交；预览；清空；载入示例
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow、Bing、HTTP、keyLocation
- 额外禁用：勿写「保证被收录」；202 勿写成「已验证通过」
- SERP 竞品 title（1–3）：什么是 IndexNow；Bing 网址提交；IndexNow 密钥
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：IndexNow；enviar URLs a Bing；archivo clave IndexNow；IndexNow 202；comprobar clave IndexNow
- 语气：口语工具站
- Title / H1 方向：IndexNow — enviar URLs a Bing, comprobar clave y códigos
- 按钮短词：Generar clave；Descargar .txt；Comprobar clave；Enviar；Vista previa；Limpiar
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow、Bing、HTTP、keyLocation
- 额外禁用：no prometer indexación garantizada
- SERP 竞品 title（1–3）：Qué es IndexNow；Enviar URLs a Bing
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词（3–5）：IndexNow؛ إرسال روابط Bing؛ ملف مفتاح IndexNow؛ رمز 202؛ التحقق من مفتاح IndexNow
- 语气：偏正式开发者
- Title / H1 方向：IndexNow — إرسال روابط Bing وفحص المفتاح ورموز الحالة
- 按钮短词：توليد مفتاح؛ تنزيل txt؛ فحص المفتاح؛ إرسال؛ معاينة؛ مسح
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow، Bing، HTTP، keyLocation
- 额外禁用：لا تَعِد بالفهرسة المضمونة
- SERP 竞品 title（1–3）：ما هو IndexNow
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### pt

- 检索词（3–5）：IndexNow；enviar URLs ao Bing；arquivo de chave IndexNow；IndexNow 202；verificar chave IndexNow
- 语气：口语工具站
- Title / H1 方向：IndexNow — enviar URLs ao Bing, checar chave e códigos
- 按钮短词：Gerar chave；Baixar .txt；Verificar chave；Enviar；Pré-visualizar；Limpar
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow、Bing、HTTP
- 额外禁用：não prometer indexação garantida
- SERP 竞品 title（1–3）：O que é IndexNow；Enviar URLs no Bing
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：IndexNow；kirim URL Bing；file kunci IndexNow；IndexNow 202；cek kunci IndexNow
- 语气：偏正式开发者
- Title / H1 方向：IndexNow — kirim URL Bing, cek kunci & kode status
- 按钮短词：Buat kunci；Unduh .txt；Cek kunci；Kirim；Pratinjau；Hapus
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow、Bing、HTTP
- 额外禁用：jangan janjikan indexing pasti
- SERP 竞品 title（1–3）：Apa itu IndexNow
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：IndexNow；soumettre URL Bing；fichier clé IndexNow；IndexNow 202；vérifier clé IndexNow
- 语气：偏正式开发者
- Title / H1 方向：IndexNow — soumettre des URL à Bing, vérifier la clé et les codes
- 按钮短词：Générer la clé；Télécharger .txt；Vérifier la clé；Envoyer；Aperçu；Effacer
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow、Bing、HTTP、keyLocation
- 额外禁用：ne pas promettre l’indexation
- SERP 竞品 title（1–3）：Qu’est-ce qu’IndexNow；Soumettre des URL à Bing
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：IndexNow；Bing IndexNow 送信；IndexNow キーファイル；IndexNow 202；IndexNow キー確認
- 语气：偏正式开发者
- Title / H1 方向：IndexNow — Bing URL 送信・キー確認・ステータスコード
- 按钮短词：キー生成；txt ダウンロード；キー確認；送信；プレビュー；クリア
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow、Bing、HTTP、keyLocation
- 额外禁用：「必ずインデックス」と約束しない；202 を「検証完了」と書かない
- SERP 竞品 title（1–3）：IndexNow とは；Bing への URL 送信
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### ru

- 检索词（3–5）：IndexNow；отправить URL в Bing；файл ключа IndexNow；IndexNow 202；проверка ключа IndexNow
- 语气：偏正式开发者
- Title / H1 方向：IndexNow — отправка URL в Bing, проверка ключа и коды ответа
- 按钮短词：Сгенерировать ключ；Скачать .txt；Проверить ключ；Отправить；Превью；Очистить
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow、Bing、HTTP、keyLocation
- 额外禁用：не обещать гарантированную индексацию
- SERP 竞品 title（1–3）：Что такое IndexNow
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### de

- 检索词（3–5）：IndexNow；URLs an Bing senden；IndexNow Schlüsseldatei；IndexNow 202；IndexNow Key prüfen
- 语气：偏正式开发者
- Title / H1 方向：IndexNow — Bing-URL-Submit, Schlüsselprüfung & Statuscodes
- 按钮短词：Schlüssel erzeugen；.txt laden；Schlüssel prüfen；Senden；Vorschau；Leeren
- 本地示例用词：www.example.com
- 可保留英文/符号：IndexNow、Bing、HTTP、keyLocation
- 额外禁用：keine Indexierungs-Garantie versprechen
- SERP 竞品 title（1–3）：Was ist IndexNow；URLs an Bing übermitteln
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | 2026-08-07 | en 母版 + 页面/API 实现；`lint:seo` OK | 通过 |
| 2 按 brief 重写 | 2026-08-07 | zh 全文；es/pt/id/fr/de/ja/ru/ar 检索向 title/按钮/核心 FAQ | 部分语种长文仍可再润色 |
| 3 抽查+禁词+lint | 2026-08-07 | 禁「保证收录」；202≠key 通过；`lint:seo` | ar/ja/ru 保持待母语抽查 |
