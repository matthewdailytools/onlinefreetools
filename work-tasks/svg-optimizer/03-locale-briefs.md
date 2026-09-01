# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`svg-optimizer`  
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

技术专名：SVG、SVGO、SVGOMG、Inkscape、Sketch。  
**额外禁用**：H1 禁止参数枚举；用户文案禁 doorway/薄页元叙述。

---

## 每语 brief

### en
- 检索词（3–5）：svg optimizer；optimize svg；compress svg；minify svg
- 语气：口语工具站
- Title / H1 方向：SVG optimizer
- 按钮短词：Choose file；Load sample；Optimize；Copy；Download；Clear
- 本地示例用词：sample icon → bytes saved
- 可保留英文/符号：SVG、SVGO
- 额外禁用：Privacy must say device + not uploaded
- SERP 竞品 title（1–3）：SVGOMG；SVGO online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词（3–5）：SVG 优化器；压缩 SVG；SVG 压缩；优化 SVG
- 语气：口语工具站
- Title / H1 方向：SVG 优化器
- 按钮短词：选择文件；加载示例；优化；复制；下载；清空
- 本地示例用词：样例图标 → 体积对比
- 可保留英文/符号：SVG
- 额外禁用：须写不上传服务器、留在设备
- SERP 竞品 title（1–3）：SVG 在线压缩
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词（3–5）：optimizador de SVG；comprimir SVG；optimizar SVG
- 语气：口语工具站
- Title / H1 方向：optimizador de SVG
- 按钮短词：Elegir archivo；Cargar ejemplo；Optimizar；Copiar；Descargar；Limpiar
- 本地示例用词：icono → bytes
- 可保留英文/符号：SVG
- 额外禁用：sin subir al servidor；no salen del dispositivo
- SERP 竞品 title（1–3）：optimizador SVG online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词（3–5）：محسّن SVG؛ ضغط SVG؛ تحسين SVG
- 语气：口语工具站
- Title / H1 方向：محسّن SVG
- 按钮短词：اختر ملفًا；حمّل مثالًا；حسّن；انسخ；نزّل；مسح
- 本地示例用词：أيقونة → بايتات
- 可保留英文/符号：SVG
- 额外禁用：دون رفع إلى خادم؛ تبقى على جهازك
- SERP 竞品 title（1–3）：محسّن SVG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词（3–5）：otimizador de SVG；comprimir SVG；optimizar SVG
- 语气：口语工具站
- Title / H1 方向：otimizador de SVG
- 按钮短词：Escolher arquivo；Carregar exemplo；Otimizar；Copiar；Baixar；Limpar
- 本地示例用词：ícone → bytes
- 可保留英文/符号：SVG
- 额外禁用：sem enviar ao servidor；ficam no dispositivo
- SERP 竞品 title（1–3）：otimizador SVG online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词（3–5）：pengoptimal SVG；kompres SVG；optimalkan SVG
- 语气：口语工具站
- Title / H1 方向：pengoptimal SVG
- 按钮短词：Pilih file；Muat contoh；Optimalkan；Salin；Unduh；Hapus
- 本地示例用词：ikon → byte
- 可保留英文/符号：SVG
- 额外禁用：tanpa unggah ke server；tetap di perangkat
- SERP 竞品 title（1–3）：optimasi SVG online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词（3–5）：optimiseur SVG；compresser SVG；optimiser SVG
- 语气：口语工具站
- Title / H1 方向：optimiseur SVG
- 按钮短词：Choisir le fichier；Charger l'exemple；Optimiser；Copier；Télécharger；Effacer
- 本地示例用词：icône → octets
- 可保留英文/符号：SVG
- 额外禁用：sans envoi au serveur；restent sur l'appareil
- SERP 竞品 title（1–3）：optimiseur SVG en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词（3–5）：SVGオプティマイザー；SVGを圧縮；SVG 最適化
- 语气：口语工具站
- Title / H1 方向：SVGオプティマイザー
- 按钮短词：ファイルを選ぶ；サンプル読込；最適化；コピー；保存；クリア
- 本地示例用词：サンプルアイコン → バイト
- 可保留英文/符号：SVG
- 额外禁用：サーバーにアップロードしない；端末内
- SERP 竞品 title（1–3）：SVG 圧縮 オンライン
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词（3–5）：оптимизатор SVG；сжать SVG；оптимизация SVG
- 语气：口语工具站
- Title / H1 方向：оптимизатор SVG
- 按钮短词：Выбрать файл；Загрузить пример；Оптимизировать；Копировать；Скачать；Очистить
- 本地示例用词：иконка → байты
- 可保留英文/符号：SVG
- 额外禁用：без загрузки на сервер；остаются на устройстве
- SERP 竞品 title（1–3）：оптимизатор SVG онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词（3–5）：SVG-Optimierer；SVG komprimieren；SVG optimieren
- 语气：口语工具站
- Title / H1 方向：SVG-Optimierer
- 按钮短词：Datei wählen；Beispiel laden；Optimieren；Kopieren；Herunterladen；Leeren
- 本地示例用词：Icon → Bytes
- 可保留英文/符号：SVG
- 额外禁用：ohne Server-Upload；Dateien bleiben auf Ihrem Gerät
- SERP 竞品 title（1–3）：SVG Optimierer online
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | slug 保留 svg-optimizer；H1=SVG optimizer；compress/minify 落 desc/FAQ；对标 SVGOMG 交互 | 覆盖表已回写 02；意图总判满足 |
| 1 母版+lint | 2026-09-01 | en 全键：H1 SVG optimizer；五选项芯片；字节 tpl；样例 SVG | 母版非参数枚举；privacy 设备+不上传 |
| 1b 母版检索覆盖优化 | 2026-09-01 | 再扫 title/desc：主词进 H1；compress/minify 在 FAQ/usecase | H1 保持 SVG optimizer |
| 2 按 brief 重写 | 2026-09-01 | 按当地搜法重写 zh/es/ar/pt/id/fr/ja/ru/de | 十语非同构；隐私完整 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 再扫 en,zh,es,ja title/desc：主词进 H1；minify/compress 有落点 | en,zh,es,ja 无目录腔 H1 |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表全扫；抽查 en/zh/es/ja | 无含糊 local；无元叙述 |
