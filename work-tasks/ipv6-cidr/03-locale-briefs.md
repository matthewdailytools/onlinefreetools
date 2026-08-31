# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`ipv6-cidr`  
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
- [x] **检索覆盖已优化**（i18n 生成后步 2+4）

**本工具额外禁用**：H1 勿写成纯「IPv6 calculator」丢掉 CIDR；勿承诺连通性测试（test-ipv6）；勿把 IPv4 展开塞进本页主叙事；可见正文勿写 doorway/slug。

---

## 每语 brief

### en

- 检索词（3–5）：ipv6 cidr calculator；ipv6 cidr；ipv6 cidr notation；ipv6 prefix calculator；ipv6 /64
- 语气：偏正式开发者
- Title / H1 方向：IPv6 CIDR calculator — Expand a prefix into its address range
- 按钮短词：Calculate；Load sample；Clear；Copy
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR、RFC、/64、/127
- 额外禁用：do not title as an IPv6 connectivity test
- SERP 竞品 title（1–3）：IPv6 CIDR Calculator — IPVoid；IPv6 Subnet Calculator — DNS Checker
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：IPv6 CIDR 计算器；IPv6 网段计算；IPv6 前缀长度；IPv6 压缩地址；IPv6 /64
- 语气：口语工具站（偏运维）
- Title / H1 方向：IPv6 CIDR 计算器 — 把前缀展开成可用网段
- 按钮短词：计算；加载示例；清空；复制
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR、/64
- 额外禁用：H1 不要写成「IPv6 测试」；不要罗列「前缀、半字节、压缩、展开」目录腔
- SERP 竞品 title（1–3）：英文计算器站为主；中文常搜「IPv6 网段 / 前缀计算」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：calculadora cidr ipv6；cidr ipv6；notación cidr ipv6；prefijo ipv6；ipv6 /64
- 语气：偏正式开发者
- Title / H1 方向：Calculadora CIDR IPv6 — Convierte el prefijo en un rango usable
- 按钮短词：Calcular；Cargar ejemplo；Limpiar；Copiar
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR
- 额外禁用：no titular solo “calculadora IPv6” sin CIDR
- SERP 竞品 title（1–3）：IPv6 CIDR Calculator 英文站
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حاسبة cidr ipv6；بادئة ipv6；ترميز cidr ipv6；نطاق ipv6
- 语气：偏正式开发者
- Title / H1 方向：حاسبة CIDR لـ IPv6 — الشبكة وآخر عنوان والصيغة المضغوطة
- 按钮短词：احسب；تحميل مثال；مسح；نسخ
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR
- 额外禁用：لا تختبر الاتصال IPv6 في العنوان
- SERP 竞品 title（1–3）：حاسبات إنجليزية غالباً
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：calculadora cidr ipv6；cidr ipv6；notação cidr ipv6；prefixo ipv6
- 语气：偏正式开发者
- Title / H1 方向：Calculadora CIDR IPv6 — Rede, último endereço e forma compacta
- 按钮短词：Calcular；Carregar exemplo；Limpar；Copiar
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR
- 额外禁用：não usar “teste IPv6” no H1
- SERP 竞品 title（1–3）：calculadoras EN
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：kalkulator cidr ipv6；cidr ipv6；notasi cidr ipv6；prefiks ipv6
- 语气：口语工具站
- Title / H1 方向：Kalkulator CIDR IPv6 — Jaringan, alamat terakhir, dan bentuk ringkas
- 按钮短词：Hitung；Muat contoh；Hapus；Salin
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR
- 额外禁用：jangan judul tes koneksi
- SERP 竞品 title（1–3）：kalkulator EN
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：calculatrice cidr ipv6；cidr ipv6；notation cidr ipv6；préfixe ipv6
- 语气：偏正式开发者
- Title / H1 方向：Calculateur CIDR IPv6 — Réseau, dernière adresse et forme compressée
- 按钮短词：Calculer；Charger l’exemple；Effacer；Copier
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR
- 额外禁用：pas de « test IPv6 » en H1
- SERP 竞品 title（1–3）：calculateurs EN
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：IPv6 CIDR 計算；IPv6 プレフィックス；IPv6 サブネット；IPv6 圧縮表記；IPv6 /64
- 语气：偏正式开发者
- Title / H1 方向：IPv6 CIDR 計算機 — プレフィックスをアドレス範囲に展開
- 按钮短词：計算；サンプル読込；クリア；コピー
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR、/64
- 额外禁用：H1 を「IPv6 接続テスト」にしない；「ユースケース」空壳禁止
- SERP 竞品 title（1–3）：英語計算機が中心
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：калькулятор cidr ipv6；cidr ipv6；префикс ipv6；нотация cidr ipv6
- 语气：偏正式开发者
- Title / H1 方向：Калькулятор CIDR IPv6 — сеть, последний адрес и сжатая запись
- 按钮短词：Рассчитать；Загрузить пример；Очистить；Копировать
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR
- 额外禁用：не путать с тестом доступности IPv6
- SERP 竞品 title（1–3）：EN калькуляторы
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：ipv6 cidr rechner；ipv6 cidr；ipv6 präfix rechner；ipv6 cidr notation
- 语气：偏正式开发者
- Title / H1 方向：IPv6-CIDR-Rechner — Netz, letzte Adresse und komprimierte Form
- 按钮短词：Berechnen；Beispiel laden；Leeren；Kopieren
- 本地示例用词：2001:db8:1::/64
- 可保留英文/符号：IPv6、CIDR
- 额外禁用：kein „IPv6-Test“ im H1
- SERP 竞品 title（1–3）：EN-Rechner
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-31 | slug/title/关键词/desc；覆盖表与意图审查在 `02`；主词 IPv6 CIDR calculator 进 H1；nibble 作边界非 H1 | 保留 ipv6-cidr；连通性测试有意不满足；phase=0b 已绿 |
| 1 母版+lint | 2026-08-31 | 写完 en 全键（title/desc/How/Formula/Example/FAQ/UI） | lint:tool-page 源码绿；H1 含 IPv6 CIDR calculator |
| 1b 母版检索覆盖优化 | 2026-08-31 | 母版 title 去掉「Network, last address, and compressed form」三逗号目录腔，改为 Expand a prefix into its address range；主词仍在 H1；notation 与 /64 留在 desc/FAQ | H1 结果向；nibble 不进标题；phase=2 待跑 |
| 2 按 brief 重写 | 2026-08-31 | 按各语当地检索词独立重写十语 title/desc/How/FAQ（非 en 同构） | zh/es/ja/ar/pt/id/fr/ru/de 句式与主词已分叉 |
| 2b 抽查语检索覆盖优化 | 2026-08-31 | 抽查 en,zh,es,ja：去掉逗号/顿号目录腔副标题；en 改为 Expand a prefix；zh「把前缀展开成可用网段」；es Convierte el prefijo；ja プレフィックスをアドレス範囲に展開；notation 与 /64 仍在各语 desc/FAQ | 四语 H1 结果向且含当地主词 |
| 3 抽查+禁词+lint | 2026-08-31 | 禁词表全扫；抽查 en/zh/es/ja 无 granularity 造词、隐私句说清不上服务器 | 待母语抽查未勾；可标 i18n-done |
