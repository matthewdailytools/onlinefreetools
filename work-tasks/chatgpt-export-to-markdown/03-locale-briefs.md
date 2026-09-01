# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`chatgpt-export-to-markdown`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔
- [x] 隐私句非含糊「local/本地」：须该语说清「留在设备」+「不上服务器」
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

技术专名：ChatGPT、Claude、Markdown、JSON、CSV。  
**额外禁用**：H1 禁止 `chat-export-converter`、禁止暗示云端 AI 处理对话内容。

---

## 每语 brief

### en
- 检索词（3–5）：ChatGPT export to Markdown；chatgpt export markdown；claude export to markdown；chat export json
- 语气：口语工具站
- Title / H1 方向：ChatGPT export to Markdown
- 按钮短词：Choose file；Load sample；Convert；Copy；Download；Clear
- 本地示例用词：mapping → Markdown
- 可保留英文/符号：ChatGPT、Markdown、JSON
- 额外禁用：Do not H1 “chat export converter”.
- SERP 竞品 title（1–3）：ChatGPT export to markdown tool
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词（3–5）：ChatGPT 导出转 Markdown；ChatGPT 导出 markdown；Claude 导出转 MD；对话导出 JSON
- 语气：口语工具站
- Title / H1 方向：ChatGPT 导出转 Markdown
- 按钮短词：选择文件；加载示例；转换；复制；下载；清空
- 本地示例用词：导出 → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：隐私须留在设备且不上传服务器；H1 不要写成转换器工程名
- SERP 竞品 title（1–3）：ChatGPT 导出 Markdown
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词（3–5）：exportar ChatGPT a Markdown；ChatGPT export markdown；Claude a Markdown
- 语气：口语工具站
- Title / H1 方向：exportar ChatGPT a Markdown
- 按钮短词：Elegir archivo；Cargar ejemplo；Convertir；Copiar；Descargar；Limpiar
- 本地示例用词：exportación → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：Decir que no se sube al servidor
- SERP 竞品 title（1–3）：exportar ChatGPT a Markdown
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词（3–5）：تصدير ChatGPT إلى Markdown؛ تحويل تصدير شات؛ Claude إلى Markdown
- 语气：口语工具站
- Title / H1 方向：تصدير ChatGPT إلى Markdown
- 按钮短词：اختر ملفًا；حمّل مثالًا；حوّل；انسخ；نزّل；مسح
- 本地示例用词：تصدير → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：تقول الملفات تبقى على الجهاز دون رفع
- SERP 竞品 title（1–3）：تصدير ChatGPT إلى ماركداون
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt
- 检索词（3–5）：exportar ChatGPT para Markdown；ChatGPT export markdown；Claude para Markdown
- 语气：口语工具站
- Title / H1 方向：exportar ChatGPT para Markdown
- 按钮短词：Escolher arquivo；Carregar exemplo；Converter；Copiar；Baixar；Limpar
- 本地示例用词：exportação → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：Fica no dispositivo, não sobe ao servidor
- SERP 竞品 title（1–3）：exportar ChatGPT para Markdown
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词（3–5）：ekspor ChatGPT ke Markdown；ChatGPT export markdown；Claude ke Markdown
- 语气：口语工具站
- Title / H1 方向：ekspor ChatGPT ke Markdown
- 按钮短词：Pilih file；Muat contoh；Konversi；Salin；Unduh；Hapus
- 本地示例用词：ekspor → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：Tetap di perangkat, tidak diunggah
- SERP 竞品 title（1–3）：ekspor ChatGPT ke Markdown
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词（3–5）：exporter ChatGPT en Markdown；ChatGPT export markdown；Claude en Markdown
- 语气：口语工具站
- Title / H1 方向：exporter ChatGPT en Markdown
- 按钮短词：Choisir le fichier；Charger l’exemple；Convertir；Copier；Télécharger；Effacer
- 本地示例用词：export → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：Sur l’appareil, pas envoyé au serveur
- SERP 竞品 title（1–3）：exporter ChatGPT en Markdown
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词（3–5）：ChatGPTエクスポートをMarkdownに；ChatGPT エクスポート Markdown；Claude エクスポート
- 语气：口语工具站
- Title / H1 方向：ChatGPTエクスポートをMarkdownに
- 按钮短词：ファイルを選ぶ；サンプル読込；変換；コピー；保存；クリア
- 本地示例用词：エクスポート → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：端末内・サーバー非送信
- SERP 竞品 title（1–3）：ChatGPT エクスポート Markdown
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru
- 检索词（3–5）：экспорт ChatGPT в Markdown；ChatGPT export markdown；Claude в Markdown
- 语气：口语工具站
- Title / H1 方向：экспорт ChatGPT в Markdown
- 按钮短词：Выбрать файл；Загрузить пример；Преобразовать；Копировать；Скачать；Очистить
- 本地示例用词：экспорт → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：На устройстве, на сервер не отправляется
- SERP 竞品 title（1–3）：экспорт ChatGPT в Markdown
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de
- 检索词（3–5）：ChatGPT Export zu Markdown；ChatGPT Export Markdown；Claude Export Markdown
- 语气：口语工具站
- Title / H1 方向：ChatGPT Export zu Markdown
- 按钮短词：Datei wählen；Beispiel laden；Umwandeln；Kopieren；Speichern；Leeren
- 本地示例用词：Export → Markdown
- 可保留英文/符号：ChatGPT、Markdown
- 额外禁用：Bleibt auf dem Gerät, wird nicht hochgeladen
- SERP 竞品 title（1–3）：ChatGPT Export zu Markdown
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | 对照 B2：slug 保留 chatgpt-export-to-markdown；H1 锁定 ChatGPT export to Markdown；Claude/JSON/CSV 芯片或 FAQ；废止 chat-export-converter | 覆盖表已回写 02；意图总判满足；token 计数不拆进本 URL |
| 1 母版+lint | 2026-09-01 | 写入 en 全键：H1 ChatGPT export to Markdown；mapping/Claude 解析；MD/JSON/CSV；FAQ 五条 | 母版 title 非参数枚举；desc 含设备隐私与 Claude absorb |
| 1b 母版检索覆盖优化 | 2026-09-01 | 再扫 title/desc：主词落 H1；Claude/JSON/CSV 在芯片与 FAQ；token 计数划界 | H1 保持 ChatGPT export to Markdown；次词均有落点 |
| 2 按 brief 重写 | 2026-09-01 | 按当地搜法重写 zh/es/ar/pt/id/fr/ja/ru/de；各语 H1 用该语检索句 | 十语非同构；隐私均写设备+不上传 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 再扫 en,zh,es,ja 的 title/desc：主词进 H1；Claude/JSON/CSV 有落点 | en,zh,es,ja 均无参数枚举 H1；次词有落点 |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表全扫；抽查 en/zh/es/ja；ar/ja/ru 未留待母语抽查 | 无 converter 工程名 H1；无含糊 local |
