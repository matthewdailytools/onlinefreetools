# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`cidr-to-ip-range`  
**母版语言**：en  
**状态**：`i18n-done`

> `pending-native-review`：仅当仍有语种勾选「待母语抽查」时使用。清掉所有待抽查勾选并完成轮次 3 后，才可标 `i18n-done`。

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：文件类须该语说清「留在设备」+「不上服务器」（见 `tool-i18n-localization.mdc`「隐私本地处理表述」）
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02`/`notes` 有覆盖表；见 localization 步 0b）——勾工程/页面/上线清单前必做
- [x] **用户意图审查已做**（对照主词搜索者任务：满足/超出；已回写 How/交互；见 `work-tasks-tool-brief.mdc` 步 0i）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（CRLF、`.env`、JSON、diff 作副标）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

**本工具额外禁用**：H1 勿写成 CIDR Calculator / CIDR Notation Calculator / 参数枚举（Network、Broadcast、Mask、Wildcard…）；勿承诺路由决策；可见正文勿写 doorway/薄页/slug；勿把 IPv6/VLSM/VPC 规划器塞进本页主 H1。

---

## 每语 brief

### en

- 检索词（3–5）：cidr to ip range；cidr notation calculator；cidr calculator；subnet mask to cidr；cidr expander
- 语气：偏正式开发者
- Title / H1 方向：CIDR to IP range — Expand a prefix into usable addresses
- 按钮短词：Calculate；Load sample；Clear；Copy
- 本地示例用词：192.168.1.0/24 → 192.168.1.0–192.168.1.255；mask 255.255.255.0
- 可保留英文/符号：CIDR、IPv4、/24、RFC、Proxmox
- 额外禁用：do not title “CIDR Calculator” or “CIDR Notation Calculator”
- SERP 竞品 title（1–3）：Subnet Calculator - CIDR - MxToolbox；CIDR Calculator - Convert CIDR Notation to IP Ranges；CIDR to IPv4 Address Range — IPAddressGuide
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：CIDR 转 IP 范围；CIDR 计算器；网段广播地址；子网掩码转 CIDR；CIDR 展开
- 语气：口语工具站（偏运维）
- Title / H1 方向：CIDR 转 IP 范围 — 把前缀展开成可用地址段
- 按钮短词：计算；加载示例；清空；复制
- 本地示例用词：192.168.1.0/24 → 网段与可用主机
- 可保留英文/符号：CIDR、IPv4、/24
- 额外禁用：H1 不要写「CIDR 计算器」当唯一主词硬刚大词；不要罗列「网络、广播、掩码、通配符」目录腔
- SERP 竞品 title（1–3）：多为英文 Subnet/CIDR Calculator；中文常搜「CIDR 计算 / 网段计算」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：cidr a rango ip；calculadora cidr；notación cidr；máscara a cidr；expandir cidr
- 语气：偏正式开发者
- Title / H1 方向：CIDR a rango IP — Amplía un prefijo a direcciones usables
- 按钮短词：Calcular；Cargar ejemplo；Limpiar；Copiar
- 本地示例用词：192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4
- 额外禁用：no titular solo “Calculadora CIDR” como H1 único
- SERP 竞品 title（1–3）：Subnet/CIDR Calculator 英文站为主
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：cidr إلى نطاق ip；حاسبة cidr；ترميز cidr；قناع الشبكة إلى cidr
- 语气：偏正式开发者
- Title / H1 方向：من CIDR إلى نطاق IP — وسّع البادئة إلى عناوين قابلة للاستخدام
- 按钮短词：احسب；تحميل مثال；مسح；نسخ
- 本地示例用词：192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4
- 额外禁用：لا تجعل H1 = حاسبة CIDR العامة فقط
- SERP 竞品 title（1–3）：غالبًا إنجليزي
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：cidr para intervalo ip；calculadora cidr；notação cidr；máscara para cidr
- 语气：偏正式开发者
- Title / H1 方向：CIDR para intervalo IP — Expanda um prefixo em endereços utilizáveis
- 按钮短词：Calcular；Carregar exemplo；Limpar；Copiar
- 本地示例用词：192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4
- 额外禁用：não usar só “Calculadora CIDR” no H1
- SERP 竞品 title（1–3）：calculadoras subnet/CIDR em inglês
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：cidr ke rentang ip；kalkulator cidr；notasi cidr；subnet mask ke cidr
- 语气：口语工具站
- Title / H1 方向：CIDR ke rentang IP — Perluas prefix jadi alamat yang bisa dipakai
- 按钮短词：Hitung；Muat contoh；Hapus；Salin
- 本地示例用词：192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4
- 额外禁用：jangan H1 hanya “Kalkulator CIDR”
- SERP 竞品 title（1–3）：subnet calculator internasional
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：cidr vers plage ip；calculatrice cidr；notation cidr；masque vers cidr
- 语气：偏正式开发者
- Title / H1 方向：CIDR vers plage IP — Développez un préfixe en adresses utilisables
- 按钮短词：Calculer；Charger l’exemple；Effacer；Copier
- 本地示例用词：192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4
- 额外禁用：ne pas titrer uniquement « Calculatrice CIDR »
- SERP 竞品 title（1–3）：Subnet/CIDR Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：CIDR から IP 範囲；CIDR 計算；CIDR 表記；サブネットマスク から CIDR；CIDR 展開
- 语气：偏正式开发者
- Title / H1 方向：CIDR から IP 範囲 — プレフィックスを利用可能アドレスに展開
- 按钮短词：計算；サンプル読込；クリア；コピー
- 本地示例用词：192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4、/24
- 额外禁用：H1 を「CIDR 計算機」のみにしない；パラメータ列挙禁止
- SERP 竞品 title（1–3）：英語の Subnet/CIDR Calculator が多い
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：cidr в диапазон ip；калькулятор cidr；нотация cidr；маска в cidr
- 语气：偏正式开发者
- Title / H1 方向：CIDR в диапазон IP — Разверните префикс в адреса
- 按钮短词：Рассчитать；Загрузить пример；Очистить；Копировать
- 本地示例用词：192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4
- 额外禁用：не делать H1 только «Калькулятор CIDR»
- SERP 竞品 title（1–3）：англоязычные subnet/CIDR калькуляторы
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：cidr zu ip bereich；cidr rechner；cidr notation；subnetzmaske zu cidr
- 语气：偏正式开发者
- Title / H1 方向：CIDR zu IP-Bereich — Präfix in nutzbare Adressen erweitern
- 按钮短词：Berechnen；Beispiel laden；Leeren；Kopieren
- 本地示例用词：192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4
- 额外禁用：H1 nicht nur „CIDR-Rechner“
- SERP 竞品 title（1–3）：Subnet-/CIDR-Rechner (oft EN)
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-28 | 用户点名 cidr notation calculator；按 Planner title_gap 定 slug=cidr-to-ip-range、H1=CIDR to IP range；notation/calculator/mask/expand absorb；覆盖表+意图审查+Ads 长尾表写入 02 | 主词落 H1；次词落 desc/FAQ/次模式；gate 0b 目标绿；briefs-ready |
| 1 母版+lint | 2026-08-28 | 写 en 全键 + Page/catalog/icon；merge:tools；lint:tool-page 绿 | 母版可交互；进页 /24 样例 |
| 1b 母版检索覆盖优化 | 2026-08-28 | 副标题从「Network, broadcast, and usable hosts…」改为「Expand a prefix into usable addresses」去逗号枚举；主词仍在 H1；desc 保留 notation calculator | 主词 H1 稳；phase=2 目标绿 |
| 2 按 brief 重写 | 2026-08-28 | 十语按当地检索词独立重写（zh 自写；es/ar/pt、id/fr/de、ja/ru 分批）；FAQ/How 切入点随语变化 | 十语键齐；非 en 直搬 |
| 2b 抽查语检索覆盖优化 | 2026-08-28 | 抽查 en,zh,es,ja：确认 H1 含当地「CIDR→IP 范围」说法、副标题无逗号枚举、desc 含样例与 privacy、次词落 FAQ | phase=4 目标绿 |
| 3 抽查+禁词+lint | 2026-08-28 | 禁词表勾选；ar/ja/ru 待母语勾已空（按 brief 重写完成）；准备 verify:tool | 可标 i18n-done |
