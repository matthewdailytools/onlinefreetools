# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`magnet-link-decoder`
**母版语言**：en
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如把 tracker 译成“追踪用户”而非 BitTorrent tracker）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：须说清 magnet 文本留在设备/浏览器且不上传服务器、不联系 tracker
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02` 有覆盖表；见 localization 步 0b）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名 Magnet、BitTorrent、URI、URL、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`、`xl`、`btih`、`btmh` 可保留，**不可**替代本地主 title。

**本工具额外禁用**：勿承诺下载、转 `.torrent`、验证内容是否合法、联系 tracker/DHT、获取 metadata；用户可见正文不要写 doorway / thin URL / slug 元叙述。

---

## 每语 brief

### en

- 检索词（3–5）：magnet link decoder；magnet link parser；decode magnet URI；magnet info hash extractor；torrent magnet link checker
- 语气：偏正式开发者
- Title / H1 方向：Magnet Link Decoder — Parse Info Hash and Trackers Locally
- 按钮短词：Decode；Copy info hash；Copy trackers；Copy JSON；Clear；Load sample
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`、`btih`、`btmh`
- 额外禁用：do not say download, convert to torrent, verify content, fetch metadata
- SERP 竞品 title（1–3）：Magnet Link Decoder；Magnet URI parser；Torrent magnet link parser
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：磁力链接解析；magnet 链接解码；磁力链接信息 hash；磁力链接 tracker 查看；torrent 磁力链接检查
- 语气：口语工具站（偏开发者）
- Title / H1 方向：磁力链接解析 — 本地查看 info hash 与 tracker
- 按钮短词：解析；复制 info hash；复制 tracker；复制 JSON；清空；加载示例
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`、`btih`、`btmh`
- 额外禁用：不要写“下载资源”“转换 torrent”“验证资源真假/合法”
- SERP 竞品 title（1–3）：磁力链接解析；magnet link decoder；磁力链转种子（FAQ 解释不做）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：decodificador de enlace magnet；parser magnet link；decodificar URI magnet；extraer info hash magnet；ver trackers magnet
- 语气：偏正式开发者
- Title / H1 方向：Decodificador de enlaces magnet — info hash y trackers en tu navegador
- 按钮短词：Decodificar；Copiar info hash；Copiar trackers；Copiar JSON；Limpiar；Cargar ejemplo
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`
- 额外禁用：no prometer descarga, conversión a torrent ni verificación legal
- SERP 竞品 title（1–3）：Magnet Link Decoder；Magnet URI Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：فك رابط magnet؛ محلل رابط magnet؛ استخراج info hash؛ عرض trackers magnet؛ فحص رابط تورنت magnet
- 语气：偏正式开发者
- Title / H1 方向：فك رابط Magnet — عرض info hash و trackers داخل المتصفح
- 按钮短词：فك؛ نسخ info hash؛ نسخ trackers؛ نسخ JSON؛ مسح؛ تحميل مثال
- 本地示例用词：sample-linux.iso؛ tracker.example.org
- 可保留英文/符号：Magnet، BitTorrent، URI، info hash، tracker، DHT، peer، `xt`، `dn`، `tr`
- 额外禁用：لا تعد بتنزيل أو تحويل إلى torrent أو التحقق من قانونية المحتوى
- SERP 竞品 title（1–3）：Magnet Link Decoder؛ Magnet URI Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### pt

- 检索词（3–5）：decodificador de link magnet；parser magnet；decodificar URI magnet；extrair info hash magnet；ver trackers magnet
- 语气：偏正式开发者
- Title / H1 方向：Decodificador de link magnet — info hash e trackers no navegador
- 按钮短词：Decodificar；Copiar info hash；Copiar trackers；Copiar JSON；Limpar；Carregar exemplo
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`
- 额外禁用：não prometer download, converter para torrent ou verificar legalidade
- SERP 竞品 title（1–3）：Magnet Link Decoder；Magnet URI Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：magnet link decoder；parser magnet link；decode URI magnet；ekstrak info hash magnet；cek tracker magnet
- 语气：偏正式开发者
- Title / H1 方向：Magnet Link Decoder — lihat info hash dan tracker di browser
- 按钮短词：Decode；Salin info hash；Salin tracker；Salin JSON；Hapus；Muat contoh
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`
- 额外禁用：jangan janji download, konversi torrent, atau verifikasi legalitas konten
- SERP 竞品 title（1–3）：Magnet Link Decoder；Magnet URI Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：décodeur lien magnet；parser lien magnet；décoder URI magnet；extraire info hash magnet；voir trackers magnet
- 语气：偏正式开发者
- Title / H1 方向：Décodeur de lien magnet — info hash et trackers dans le navigateur
- 按钮短词：Décoder；Copier info hash；Copier trackers；Copier JSON；Effacer；Charger l'exemple
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`
- 额外禁用：ne pas promettre téléchargement, conversion torrent ni vérification légale
- SERP 竞品 title（1–3）：Magnet Link Decoder；Magnet URI Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：magnet リンク 解析；マグネットリンク デコード；info hash 抽出；tracker 確認；torrent magnet チェック
- 语气：偏正式开发者
- Title / H1 方向：Magnet リンク解析 — info hash と tracker をブラウザで確認
- 按钮短词：解析；info hash コピー；tracker コピー；JSON コピー；クリア；サンプル
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`
- 额外禁用：ダウンロード、torrent 変換、合法性確認を約束しない
- SERP 竞品 title（1–3）：Magnet Link Decoder；Magnet URI Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### ru

- 检索词（3–5）：декодер magnet ссылки；парсер magnet link；декодировать magnet URI；извлечь info hash magnet；проверить tracker magnet
- 语气：偏正式开发者
- Title / H1 方向：Декодер magnet-ссылки — info hash и trackers в браузере
- 按钮短词：Декодировать；Копировать info hash；Копировать trackers；Копировать JSON；Очистить；Загрузить пример
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`
- 额外禁用：не обещать скачивание, конвертацию в torrent или проверку законности
- SERP 竞品 title（1–3）：Magnet Link Decoder；Magnet URI Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### de

- 检索词（3–5）：magnet link decoder；magnet link parser；magnet URI dekodieren；info hash aus magnet link；magnet tracker anzeigen
- 语气：偏正式开发者
- Title / H1 方向：Magnet-Link-Decoder — Info-Hash und Tracker im Browser prüfen
- 按钮短词：Dekodieren；Info-Hash kopieren；Tracker kopieren；JSON kopieren；Leeren；Beispiel laden
- 本地示例用词：sample-linux.iso；tracker.example.org
- 可保留英文/符号：Magnet、BitTorrent、URI、info hash、tracker、DHT、peer、`xt`、`dn`、`tr`
- 额外禁用：keinen Download, keine Torrent-Konvertierung, keine Legalitätsprüfung versprechen
- SERP 竞品 title（1–3）：Magnet Link Decoder；Magnet URI Parser
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-13 | 重新立项并回写 slug/title/关键词/desc 覆盖表；主词 magnet link decoder 落 H1，parser/URI/info hash/tracker 落 desc·FAQ·Use cases | 覆盖表已写入 02；title 改为结果向；可进入 ready 与后续实现 |
| 1 母版+lint | 2026-08-14 | 完成 en 母版全部交互、说明、规则、场景与 FAQ 文案；核对默认样例的 hash、名称、1 MiB 与两个 tracker | 英文正文覆盖解析规则、失败边界、本地隐私和不下载限制；样例与页面实际输出一致 |
| 1b 母版检索覆盖优化 | 2026-08-14 | 复核并收紧母版 title/description：主词 magnet link decoder 位于 H1 开头；parser、decode magnet URI、info hash extractor 与 tracker checker 分布到说明、FAQ 和场景 | H1 保留结果向表达且无参数枚举；次要检索意图均有自然落点，可进入他语独立重写 |
| 2 按 brief 重写 | 2026-08-14 | 按每语 brief 分 zh/es/ja、ar/pt/id、fr/ru/de 三批独立重写；补齐全部交互、规则、错误、隐私、场景与 FAQ 键 | 十语均为 65 个本工具键，不依赖 en fallback；技术字段保留且 tracker 未误译为用户追踪 |
| 2b 抽查语检索覆盖优化 | 2026-08-14 | 抽查 en,zh,es,ja：逐语复核主词位于 title/H1，info hash、Magnet URI、tracker 查看与本地解析位于 description、FAQ 或 Use cases | en,zh,es,ja 均为结果向标题且无参数目录腔；隐私文案明确不上传并且不联系 tracker/DHT/peer |
| 3 抽查+禁词+lint | 2026-08-14 | 对比十语键集、按钮、FAQ、禁词和 no-download 边界，并运行 merge:tools 与 TypeScript 检查 | 十语键集一致，生成器合并成功，待母语抽查项已清；进入 coverage phase 4 与上线门禁 |
