# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`compare-two-text-files-online`  
**母版语言**：en / zh  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非「ユースケース」空壳
- [x] title/H1 非参数枚举目录腔
- [x] 隐私句说清「留在设备」+「不上服务器」
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用脚本同构灌语作为唯一交付
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**（他语后勾）

---

## 每语 brief

### en
- 检索词：compare two text files online；txt compare；file diff online；compare text files；utf-8 bom
- 语气：口语工具站
- Title / H1 方向：Compare two text files online
- 按钮：Compare / Clear / Load sample；Choose first file / second file
- 本地示例：notes-a.txt vs notes-b.txt，第二行不同
- 可保留：UTF-8、BOM、CRLF、`.txt`
- 额外禁用：营销后缀；首屏大粘贴框文案抢主任务
- SERP：diff.tools file compare；online file diff
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：在线对比两个文本文件；txt 对比；文件 diff；两个 txt 比较
- 语气：口语工具站
- Title / H1 方向：在线对比两个文本文件
- 按钮：开始对比 / 清空 / 载入样例；选择第一个文件
- 本地示例：笔记甲.txt / 笔记乙.txt
- 可保留：UTF-8、BOM、`.txt`
- 额外禁用：英模 H1
- SERP：在线文件对比；txt 比较
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：comparar dos archivos de texto online；comparar txt；diff de archivos
- Title / H1 方向：Comparar dos archivos de texto online
- 按钮：Comparar / Borrar / Cargar ejemplo
- 本地示例：notas-a.txt vs notas-b.txt
- 可保留：UTF-8、BOM
- 额外禁用：英模直搬
- SERP：comparar archivos de texto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：مقارنة ملفين نصيين أونلاين；مقارنة txt
- Title / H1 方向：مقارنة ملفين نصيين عبر الإنترنت
- 按钮：قارن / امسح / حمّل مثالاً
- 本地示例：ملاحظات-أ.txt
- 待母语抽查：[ ]
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：comparar dois arquivos de texto online；comparar txt
- Title / H1 方向：Comparar dois arquivos de texto online
- 按钮：Comparar / Limpar / Carregar exemplo
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：bandingkan dua file teks online；bandingkan txt
- Title / H1 方向：Bandingkan dua file teks secara online
- 按钮：Bandingkan / Hapus / Muat contoh
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：comparer deux fichiers texte en ligne；comparer txt
- Title / H1 方向：Comparer deux fichiers texte en ligne
- 按钮：Comparer / Effacer / Charger un exemple
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：テキストファイルをオンラインで比較；txt 比較；ファイル diff
- Title / H1 方向：2つのテキストファイルをオンラインで比較
- 按钮：比較する / クリア / サンプルを読み込む
- 额外禁用：ユースケース
- 待母语抽查：[ ]
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：сравнить два текстовых файла онлайн；сравнить txt
- Title / H1 方向：Сравнить два текстовых файла онлайн
- 按钮：Сравнить / Очистить / Загрузить пример
- 待母语抽查：[ ]
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：zwei Textdateien online vergleichen；txt vergleichen
- Title / H1 方向：Zwei Textdateien online vergleichen
- 按钮：Vergleichen / Leeren / Beispiel laden
- 额外禁用：Diff-Granularität
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | slug 对齐长尾；H1 Compare two text files online；次词进 desc/FAQ；与粘贴页划界；意图审查满足文件选择器 | 覆盖表与 0i 已写入 02；phase=0b |
| 1 母版+lint | 2026-09-01 | en/zh 母版键齐：H1 长尾、how_item、FAQ 划界 | 待 lint:tool-page |
| 1b 母版检索覆盖优化 | 2026-09-01 | 母版 title 锁定 Compare two text files online；desc 含 process/example 与粘贴页划界 | 主词在 H1，非参数枚举 |
| 2 按 brief 重写 | 2026-09-01 | 按各语 brief 独立重写十语 title/desc/FAQ，非英模直搬 | 十语分片已写 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja 当地任务句 H1 与隐私句 | en,zh,es,ja 四语 title 均为任务句 |
| 3 抽查+禁词+lint | 2026-09-01 | 抽查禁词与 coverage:gate phase=4 | 待 verify:tool |
