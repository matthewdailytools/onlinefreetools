# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`batch-convert-mp3-files-to-wav`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] **清单前检索覆盖已做**（见 02）
- [x] **同意图相关搜索词已写入 02**
- [x] **用户意图审查已做**（批量 PCM 输出和体积膨胀独立）
- [x] **检索覆盖已优化**（母版与他语完成后）
- [x] 十语独立改写，且不宣称 WAV 恢复 MP3 已丢失的质量。

| 语种 | 当地检索说法（3–5） | 结果向 title/H1 | 场景与禁词 |
|---|---|---|---|
| en | batch MP3 to WAV converter; convert multiple MP3 to WAV; bulk MP3 to WAV; PCM WAV for editing | Batch convert MP3 files to WAV | DAW; no quality restoration |
| zh | 批量 MP3 转 WAV; 多个 MP3 转 WAV; MP3 批量转换 WAV; PCM 音频编辑 | 批量将 MP3 转为 WAV | 不说无损恢复 |
| es | convertir varios MP3 a WAV; MP3 a WAV por lotes; conversor MP3 a WAV múltiple; WAV PCM | Convertir varios MP3 a WAV por lotes | edición; no recuperar calidad |
| ar | تحويل ملفات MP3 إلى WAV دفعة واحدة; عدة ملفات MP3 إلى WAV; محول MP3 إلى WAV جماعي; WAV PCM | تحويل عدة ملفات MP3 إلى WAV دفعة واحدة | لا استعادة لجودة مفقودة |
| pt | converter vários MP3 para WAV; MP3 para WAV em lote; conversor MP3 WAV em massa; WAV PCM | Converter vários MP3 para WAV em lote | edição; sem recuperar qualidade |
| id | ubah banyak MP3 ke WAV; konversi MP3 ke WAV massal; MP3 ke WAV sekaligus; PCM WAV | Ubah banyak MP3 menjadi WAV | penyuntingan; tidak memulihkan mutu |
| fr | convertir plusieurs MP3 en WAV; MP3 vers WAV par lot; convertisseur MP3 WAV; WAV PCM | Convertir plusieurs MP3 en WAV par lot | montage; pas de qualité récupérée |
| ja | MP3 をまとめて WAV に変換; 複数 MP3 の WAV 一括変換; MP3 から PCM WAV; 音声編集 WAV | 複数の MP3 をまとめて WAV に変換 | 失われた音質は戻らない |
| ru | пакетно конвертировать MP3 в WAV; несколько MP3 в WAV; массовый конвертер MP3 WAV; WAV PCM | Пакетно конвертировать MP3 в WAV | монтаж; качество не восстановится |
| de | mehrere MP3 in WAV umwandeln; MP3 zu WAV im Stapel; MP3-WAV-Stapelkonverter; PCM WAV | Mehrere MP3-Dateien stapelweise in WAV umwandeln | Bearbeitung; keine Qualitätsrückgewinnung |

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照批量 MP3→WAV SERP 与站内单件/反向转换页，确定共同设置、独立 PCM 输出、体积膨胀和失败边界 | 保留独立 batch slug；不承诺音质恢复、大 ZIP 或任意大文件 |
| 1 母版+lint | 2026-10-03 | 英语首屏先写 multiple MP3→separate 16-bit PCM WAV 和每行真实体积，设置/FAQ 解释不可恢复源质量；页面接线 lint 通过 | 英文自动样例真实下载 WAV，RIFF/16-bit PCM/双声道/44.1 kHz 与非静音内容通过浏览器 POC |
| 1b 母版检索覆盖优化 | 2026-10-03 | 将 batch MP3 to WAV converter 放 meta 开头，convert multiple MP3 与 16-bit PCM 放首段；How 中写 bulk，FAQ 前移膨胀和音质边界 | 主词和可验证独有结果都进入页面前部，不依赖关键词堆砌 |
| 2 按 brief 重写 | 2026-10-03 | 依据十语当地词分别写标题、首段、公式、实例、场景与 FAQ；将「WAV 不恢复 MP3 损失」写在前段且明确文件不上传服务器 | 十语均有 80 个对应键；通用队列按钮沿用本语已有表达，其余内容针对 PCM 膨胀独立重写 |
| 2b 抽查语检索覆盖优化 | 2026-10-03 | 抽查 en 的 batch MP3 to WAV、zh 的批量 MP3 转 WAV、es 的 por lotes、ja 的まとめて WAV；再查 fr/pt/de/id/ru/ar 标题的多文件转换说法与首段 PCM 结果，统一把具体转换对象和不可恢复音质说明提前 | 各语主词与同意图词自然分布在标题、首段、How 与 FAQ，不生成可见关键词清单 |
| 3 抽查+禁词+lint | 2026-10-03 | 静态核对十语 80 键/占位符，抽查 en/zh/es/ja 的首屏、步骤和 FAQ，检查十语隐私句都明确无服务器上传；覆盖 all、HTML/SEO/隔离门禁与十语浏览器样例已通过 | 页面源与产物一致；完整站点构建在最终收口时再跑 |
