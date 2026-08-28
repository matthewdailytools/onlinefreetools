# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`terraform-cidrsubnet`  
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

**本工具额外禁用**：H1 勿写成 CIDR Calculator / 参数枚举（prefix、newbits、netnum）；勿承诺「官方 Terraform 二进制」；勿做成 VPC 规划器或 Registry 模块 UI；可见正文勿写 doorway/薄页/slug。

---

## 每语 brief

### en

- 检索词（3–5）：terraform cidrsubnet；cidrsubnet；cidrhost terraform；cidrnetmask；terraform cidrsubnets
- 语气：偏正式开发者
- Title / H1 方向：Terraform cidrsubnet — Get the child CIDR Terraform would return
- 按钮短词：Evaluate；Load sample；Clear；Copy CIDR；Copy HCL
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28（HashiCorp docs sample）
- 可保留英文/符号：cidrsubnet、cidrhost、cidrnetmask、HCL、Terraform、CIDR、IPv4、IPv6
- 额外禁用：do not title it “CIDR Calculator”; no prefix/newbits/netnum laundry list in H1
- SERP 竞品 title（1–3）：cidrsubnet - Functions - HashiCorp；Terraform Cidrsubnet Function Explained；Terraform - cidrsubnet calculation tool
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：terraform cidrsubnet；cidrsubnet 计算；terraform 子网；cidrhost；cidrnetmask
- 语气：口语工具站（偏开发者）
- Title / H1 方向：Terraform cidrsubnet — 算出 Terraform 会返回的子网 CIDR
- 按钮短词：求值；加载示例；清空；复制 CIDR；复制 HCL
- 本地示例用词：10.1.2.0/24，newbits 4，netnum 15 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、cidrhost、cidrnetmask、Terraform、CIDR
- 额外禁用：H1 不要写「前缀、newbits、netnum」目录腔；不要写成「在线 CIDR 计算器」抢通用大词
- SERP 竞品 title（1–3）：英文官方文档为主；中文博客多为「Terraform 子网划分 cidrsubnet」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：terraform cidrsubnet；calcular cidrsubnet；subred terraform；cidrhost；cidrnetmask
- 语气：偏正式开发者
- Title / H1 方向：Terraform cidrsubnet — Obtén el CIDR hijo que devolvería Terraform
- 按钮短词：Calcular；Cargar ejemplo；Limpiar；Copiar CIDR；Copiar HCL
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、Terraform、CIDR、HCL
- 额外禁用：no enumerar prefix/newbits/netnum en el H1
- SERP 竞品 title（1–3）：documentación HashiCorp；artículos “función cidrsubnet”
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：terraform cidrsubnet；حساب cidrsubnet；شبكة terraform الفرعية；cidrhost；cidrnetmask
- 语气：偏正式开发者
- Title / H1 方向：Terraform cidrsubnet — احسب بادئة الشبكة الفرعية كما يعيدها Terraform
- 按钮短词：احسب；تحميل مثال；مسح；نسخ CIDR；نسخ HCL
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、Terraform、CIDR
- 额外禁用：لا تجعل العنوان قائمة معاملات
- SERP 竞品 title（1–3）：وثائق HashiCorp بالإنجليزية غالباً
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：terraform cidrsubnet；calcular cidrsubnet；sub-rede terraform；cidrhost；cidrnetmask
- 语气：偏正式开发者
- Title / H1 方向：Terraform cidrsubnet — Veja o CIDR filho que o Terraform devolveria
- 按钮短词：Calcular；Carregar exemplo；Limpar；Copiar CIDR；Copiar HCL
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、Terraform、CIDR
- 额外禁用：não listar prefix/newbits/netnum no H1
- SERP 竞品 title（1–3）：docs HashiCorp；tutoriais cidrsubnet
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：terraform cidrsubnet；hitung cidrsubnet；subnet terraform；cidrhost；cidrnetmask
- 语气：口语工具站（偏开发者）
- Title / H1 方向：Terraform cidrsubnet — Lihat CIDR anak yang akan dikembalikan Terraform
- 按钮短词：Hitung；Muat contoh；Hapus；Salin CIDR；Salin HCL
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、Terraform、CIDR
- 额外禁用：jangan jadikan H1 daftar parameter
- SERP 竞品 title（1–3）：dokumentasi HashiCorp
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：terraform cidrsubnet；calculer cidrsubnet；sous-réseau terraform；cidrhost；cidrnetmask
- 语气：偏正式开发者
- Title / H1 方向：Terraform cidrsubnet — Obtenez le CIDR enfant que Terraform renverrait
- 按钮短词：Calculer；Charger l’exemple；Effacer；Copier le CIDR；Copier le HCL
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、Terraform、CIDR
- 额外禁用：pas d’énumération prefix/newbits/netnum dans le H1
- SERP 竞品 title（1–3）：docs HashiCorp；tutoriels cidrsubnet
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：terraform cidrsubnet；cidrsubnet 計算；Terraform サブネット；cidrhost；cidrnetmask
- 语气：偏正式开发者
- Title / H1 方向：Terraform cidrsubnet — Terraform と同じ子ネット CIDR を求める
- 按钮短词：計算；サンプル読込；クリア；CIDR をコピー；HCL をコピー
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、Terraform、CIDR、HCL
- 额外禁用：H1 に prefix / newbits / netnum を並べない；「ユースケース」見出し禁止
- SERP 竞品 title（1–3）：HashiCorp 公式；英語解説記事が主
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：terraform cidrsubnet；рассчитать cidrsubnet；подсеть terraform；cidrhost；cidrnetmask
- 语气：偏正式开发者
- Title / H1 方向：Terraform cidrsubnet — Узнайте дочерний CIDR, который вернул бы Terraform
- 按钮短词：Вычислить；Загрузить пример；Очистить；Копировать CIDR；Копировать HCL
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、Terraform、CIDR
- 额外禁用：не перечислять параметры в H1
- SERP 竞品 title（1–3）：документация HashiCorp
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：terraform cidrsubnet；cidrsubnet berechnen；Terraform Subnetz；cidrhost；cidrnetmask
- 语气：偏正式开发者
- Title / H1 方向：Terraform cidrsubnet — Kindes-CIDR wie von Terraform ermittelt
- 按钮短词：Berechnen；Beispiel laden；Leeren；CIDR kopieren；HCL kopieren
- 本地示例用词：10.1.2.0/24 → 10.1.2.240/28
- 可保留英文/符号：cidrsubnet、Terraform、CIDR
- 额外禁用：keine Parameterliste im H1
- SERP 竞品 title（1–3）：HashiCorp-Doku；englische Tutorials
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-28 | slug 保留 terraform-cidrsubnet；H1 锁定主词 Terraform cidrsubnet，副标题改为求值结果向（禁止 prefix/newbits/netnum 目录腔）；cidrhost/cidrnetmask/cidrsubnets/模块长尾写入 desc·FAQ·次 UI；意图审查：首屏只做 cidrsubnet，How 先讲切子网再填表 | 覆盖表与意图表已回写 02；主词在 H1；03 勾选 0b 与意图审查 |
| 1 母版+lint | 2026-08-28 | 写 en 全键：title/description/How 五步/Formula/Example/FAQ6/隐私句；进页样例 10.1.2.240/28 | 待 merge 后 lint:seo |
| 1b 母版检索覆盖优化 | 2026-08-28 | 母版 en 落盘后重扫：H1 仍是 Terraform cidrsubnet，副标题求值结果向、无 prefix/newbits/netnum 目录腔；description 写入 calculate + Example 10.1.2.240/28、cidrhost/cidrnetmask、设备内不上服务器；FAQ 覆盖 newbits 误解、越界 netnum、cidrhost 负索引、cidrnetmask IPv6、cidrsubnets/模块、隐私 | 主词在 title/H1；次词在 desc/FAQ/usecase |
| 2 按 brief 重写 | 2026-08-28 | 九语按当地检索独立重写（非 en 同构）：FAQ 题序随语种变化；zh 口语句、es 以 calcular 起题、ja 以「求める」作 H1 | 十语分片齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-28 | 抽查 en,zh,es,ja：en H1 Terraform cidrsubnet；zh「算出…子网 CIDR」；es「Obtén el CIDR hijo」；ja「同じ子ネット CIDR を求める」。desc 均含当地 calculate/计算/calcular/計算 + 样例 10.1.2.240/28 + cidrhost/cidrnetmask + 设备/不上服务器 | 四语 title 非参数枚举；次词有落点 |
| 3 抽查+禁词+lint | 2026-08-28 | 扫 en+zh+es+ja title/按钮/FAQ/隐私；无 ユースケース 空壳、无 doorway 元叙述、待母语抽查未勾 | 禁词表已勾；待 verify:tool |
