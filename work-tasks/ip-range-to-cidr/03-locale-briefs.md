# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`ip-range-to-cidr`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：文件类须该语说清「留在设备」+「不上服务器」
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**（步 2+4 后勾）

技术专名 CIDR、IPv4、IPv6 可保留，**不可**替代本地主 title。  
**本工具额外禁用**：H1 勿写成 CIDR Calculator；勿堆 Start/End/Aggregate 目录腔；勿承诺「最优路由协议仿真」；可见正文勿写 doorway/薄页/slug。

---

## 每语 brief

### en

- 检索词（3–5）：ip range to cidr；convert ip range to cidr；cidr aggregation；ip range to cidr calculator；summarize ip ranges
- 语气：偏正式开发者
- Title / H1 方向：IP range to CIDR — Turn start–end addresses into prefix lists
- 按钮短词：Convert；Load sample；Clear；Copy CIDRs
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24；10.0.0.10 - 10.0.0.20 → several prefixes
- 可保留英文/符号：CIDR、IPv4、IPv6、ACL
- 额外禁用：do not title “CIDR Calculator”; no Start IP / End IP laundry list in H1
- SERP 竞品 title（1–3）：泛 Subnet Calculator；IP range converters buried in toolbox sites；Bing noise “what is my IP”
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：IP 段转 CIDR；起止地址转 CIDR；IP 范围转 CIDR；CIDR 汇总；IP range to cidr
- 语气：口语工具站（偏开发者）
- Title / H1 方向：IP 段转 CIDR — 把起止地址收成前缀列表
- 按钮短词：转换；加载示例；清空；复制 CIDR
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4、IPv6
- 额外禁用：H1 不要「起始 IP、结束 IP、汇总」目录腔；不要抢「CIDR 计算器」大词
- SERP 竞品 title（1–3）：子网计算器；IP 段换算博客
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：rango ip a cidr；convertir rango ip a cidr；agregar rangos cidr；ip range to cidr；resumir rangos ip
- 语气：偏正式开发者
- Title / H1 方向：Rango IP a CIDR — Convierte inicio–fin en lista de prefijos
- 按钮短词：Convertir；Cargar ejemplo；Limpiar；Copiar CIDR
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4、IPv6
- 额外禁用：no enumerar IP inicio/fin en el H1
- SERP 竞品 title（1–3）：calculadoras de subred genéricas
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل نطاق ip إلى cidr；نطاق ip إلى cidr；تجميع cidr；ip range to cidr
- 语气：偏正式开发者
- Title / H1 方向：نطاق IP إلى CIDR — حوّل البداية–النهاية إلى قائمة بادئات
- 按钮短词：تحويل؛ تحميل مثال؛ مسح؛ نسخ CIDR
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IP
- 额外禁用：لا تجعل العنوان قائمة حقول
- SERP 竞品 title（1–3）：غالباً إنجليزية
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：intervalo ip para cidr；converter intervalo ip em cidr；agregar cidr；ip range to cidr
- 语气：偏正式开发者
- Title / H1 方向：Intervalo IP para CIDR — Transforme início–fim em lista de prefixos
- 按钮短词：Converter；Carregar exemplo；Limpar；Copiar CIDR
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4、IPv6
- 额外禁用：não listar início/fim no H1
- SERP 竞品 title（1–3）：calculadoras de sub-rede
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：rentang ip ke cidr；konversi rentang ip ke cidr；agregasi cidr；ip range to cidr
- 语气：口语工具站（偏开发者）
- Title / H1 方向：Rentang IP ke CIDR — Ubah awal–akhir menjadi daftar awalan
- 按钮短词：Konversi；Muat contoh；Hapus；Salin CIDR
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IP
- 额外禁用：jangan judulkan daftar Start/End
- SERP 竞品 title（1–3）：kalkulator subnet umum
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：plage ip vers cidr；convertir plage ip en cidr；agrégation cidr；ip range to cidr
- 语气：偏正式开发者
- Title / H1 方向：Plage IP vers CIDR — Transformez début–fin en liste de préfixes
- 按钮短词：Convertir；Charger l’exemple；Effacer；Copier les CIDR
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4、IPv6
- 额外禁用：pas de liste début/fin dans le H1
- SERP 竞品 title（1–3）：calculateurs de sous-réseau
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：IPレンジ CIDR；IP範囲 CIDR 変換；CIDR 集約；ip range to cidr
- 语气：偏正式开发者
- Title / H1 方向：IPレンジをCIDRに — 開始～終了アドレスをプレフィックス一覧へ
- 按钮短词：変換；サンプル読込；クリア；CIDRをコピー
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4、IPv6
- 额外禁用：H1に開始/終了フィールド名を並べない
- SERP 竞品 title（1–3）：サブネット計算機系
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：диапазон ip в cidr；преобразовать диапазон ip в cidr；агрегация cidr；ip range to cidr
- 语气：偏正式开发者
- Title / H1 方向：Диапазон IP в CIDR — Превратите начало–конец в список префиксов
- 按钮短词：Преобразовать；Загрузить пример；Очистить；Копировать CIDR
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4、IPv6
- 额外禁用：не перечислять поля в H1
- SERP 竞品 title（1–3）：калькуляторы подсетей
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：ip bereich zu cidr；ip-bereich in cidr umwandeln；cidr aggregieren；ip range to cidr
- 语气：偏正式开发者
- Title / H1 方向：IP-Bereich zu CIDR — Start–Ende in Präfixlisten umwandeln
- 按钮短词：Umwandeln；Beispiel laden；Leeren；CIDR kopieren
- 本地示例用词：192.168.1.0 - 192.168.1.255 → 192.168.1.0/24
- 可保留英文/符号：CIDR、IPv4、IPv6
- 额外禁用：kein Start/Ende-Feldkatalog im H1
- SERP 竞品 title（1–3）：Subnet-Rechner
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-28 | 对照 Planner：slug 保留 ip-range-to-cidr；主词 ip range to cidr 进 H1；convert/aggregation/IPv6 落 desc·FAQ·usecase；意图审查总判满足；禁 CIDR Calculator 目录腔 | 覆盖表在 02；gate 0b 绿；可标 ready |
| 1 母版+lint | 2026-08-28 | 写 en 完整键 + catalog/Page/icon；lint:tool-page 绿 | 母版可交互；进页样例 192.168.1.0/24 |
| 1b 母版检索覆盖优化 | 2026-08-28 | 复核 en title/desc：主词 IP range to CIDR 在 H1；副标题结果向无 Start/End 目录腔；次词 convert 与 sample 在 description；aggregation 在 FAQ4/usecase3；非对齐多前缀在 example | 主词落 H1；次词有 desc/FAQ/usecase 落点；phase=2 绿 |
| 2 按 brief 重写 | 2026-08-28 | 九语按当地检索词独立重写（FAQ 题序/How 开篇随语变化；隐私句设备+不上服务器） | 十语分片齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-28 | 抽查 en,zh,es,ja：en 主词 IP range to CIDR；zh「IP 段转 CIDR」；es「Rango IP a CIDR」；ja「IPレンジをCIDRに」；各语 convert/aggregation 落 desc 或 FAQ；去目录腔 | 四语主词在 H1；次词有落点；phase=4 待绿 |
| 3 抽查+禁词+lint | 2026-08-28 | 禁词表全扫；ar/ja/ru 待母语勾已清；隐私句完整 | 可标 i18n-done |
