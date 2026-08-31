# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`aws-vpc-cidr-planner`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔
- [x] 隐私句非含糊「local/本地」：须说清「留在设备」+「不上服务器」
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**（i18n 生成后步 2+4）

**本工具额外禁用**：H1 勿写成 “What is a VPC”；勿承诺登录 AWS / 创建真实 VPC；Azure 不得抢 H1；可见正文勿写 doorway/slug。

---

## 每语 brief

### en

- 检索词（3–5）：aws vpc cidr planner；aws vpc cidr；vpc cidr block；aws cidr block；vpc subnet cidr
- 语气：偏正式开发者
- Title / H1 方向：AWS VPC CIDR planner — Split a VPC into AZ subnets
- 按钮短词：Plan；Load sample；Clear；Copy
- 本地示例用词：10.0.0.0/16，3 AZs
- 可保留英文/符号：AWS、VPC、CIDR、AZ、Docker
- 额外禁用：do not H1 “AWS Console”
- SERP 竞品 title（1–3）：VPC CIDR blocks — AWS Docs；AWS Console signup
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：AWS VPC CIDR 规划；VPC 网段划分；AWS 子网 CIDR；VPC CIDR 块；可用区子网
- 语气：偏运维/云
- Title / H1 方向：AWS VPC CIDR 规划器 — 按可用区切开公有/私有子网
- 按钮短词：规划；加载示例；清空；复制
- 本地示例用词：10.0.0.0/16，3 个可用区
- 可保留英文/符号：AWS、VPC、CIDR、AZ
- 额外禁用：H1 不要「什么是 VPC」；不要顿号罗列「AZ、公有、私有、保留地址」
- SERP 竞品 title（1–3）：AWS 文档 / 控制台
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：planificador cidr vpc aws；cidr vpc aws；bloque cidr vpc；subred vpc cidr
- 语气：偏正式开发者
- Title / H1 方向：Planificador CIDR de VPC AWS — Parte la VPC en subredes por AZ
- 按钮短词：Planificar；Cargar ejemplo；Limpiar；Copiar
- 本地示例用词：10.0.0.0/16
- 可保留英文/符号：AWS、VPC、CIDR、AZ
- 额外禁用：no H1 de consola AWS
- SERP 竞品 title（1–3）：docs AWS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：مخطط cidr vpc aws；كتلة cidr vpc；شبكات vpc الفرعية
- 语气：偏正式开发者
- Title / H1 方向：مخطط CIDR لـ VPC على AWS — قسّم الـ VPC إلى شبكات فرعية حسب المنطقة
- 按钮短词：خطّط；تحميل مثال；مسح；نسخ
- 本地示例用词：10.0.0.0/16
- 可保留英文/符号：AWS、VPC、CIDR、AZ
- 额外禁用：لا تزعم إنشاء VPC حقيقي
- SERP 竞品 title（1–3）：وثائق AWS
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：planejador cidr vpc aws；cidr vpc aws；bloco cidr vpc；sub-rede vpc
- 语气：偏正式开发者
- Title / H1 方向：Planejador CIDR de VPC AWS — Divida a VPC em sub-redes por AZ
- 按钮短词：Planejar；Carregar exemplo；Limpar；Copiar
- 本地示例用词：10.0.0.0/16
- 可保留英文/符号：AWS、VPC、CIDR
- 额外禁用：não H1 “o que é VPC”
- SERP 竞品 title（1–3）：docs AWS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：perencana cidr vpc aws；cidr vpc aws；blok cidr vpc；subnet vpc
- 语气：偏运维
- Title / H1 方向：Perencana CIDR VPC AWS — Bagi VPC menjadi subnet per AZ
- 按钮短词：Rencanakan；Muat contoh；Hapus；Salin
- 本地示例用词：10.0.0.0/16
- 可保留英文/符号：AWS、VPC、CIDR
- 额外禁用：bukan halaman “apa itu VPC”
- SERP 竞品 title（1–3）：docs AWS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：planificateur cidr vpc aws；cidr vpc aws；bloc cidr vpc；sous-réseau vpc
- 语气：偏正式开发者
- Title / H1 方向：Planificateur CIDR VPC AWS — Découpez la VPC en sous-réseaux par AZ
- 按钮短词：Planifier；Charger l’exemple；Effacer；Copier
- 本地示例用词：10.0.0.0/16
- 可保留英文/符号：AWS、VPC、CIDR、AZ
- 额外禁用：pas « qu’est-ce qu’un VPC » en H1
- SERP 竞品 title（1–3）：docs AWS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：AWS VPC CIDR 設計；VPC CIDR 分割；AWS サブネット CIDR；VPC アドレス設計
- 语气：偏正式开发者
- Title / H1 方向：AWS VPC CIDR プランナー — AZ ごとにサブネットへ分割
- 按钮短词：計画；サンプル；クリア；コピー
- 本地示例用词：10.0.0.0/16、3 AZ
- 可保留英文/符号：AWS、VPC、CIDR、AZ
- 额外禁用：「ユースケース」空壳；H1 を「VPC とは」にしない
- SERP 竞品 title（1–3）：AWS ドキュメント
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：планировщик cidr vpc aws；cidr vpc aws；блок cidr vpc；подсеть vpc
- 语气：偏正式开发者
- Title / H1 方向：Планировщик CIDR VPC AWS — разбейте VPC на подсети по AZ
- 按钮短词：Спланировать；Пример；Очистить；Копировать
- 本地示例用词：10.0.0.0/16
- 可保留英文/符号：AWS、VPC、CIDR、AZ
- 额外禁用：не выдавать за консоль AWS
- SERP 竞品 title（1–3）：документация AWS
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：aws vpc cidr planer；aws vpc cidr；vpc cidr block；aws subnetz cidr
- 语气：偏正式开发者
- Title / H1 方向：AWS-VPC-CIDR-Planer — VPC in AZ-Subnetze teilen
- 按钮短词：Planen；Beispiel laden；Leeren；Kopieren
- 本地示例用词：10.0.0.0/16
- 可保留英文/符号：AWS、VPC、CIDR、AZ
- 额外禁用：kein „Was ist eine VPC“-H1
- SERP 竞品 title（1–3）：AWS-Doku
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-31 | slug/title/关键词/desc；`02` 覆盖表与意图审查；主词 AWS VPC CIDR planner 进 H1；vpc cidr block 落 desc | 保留 aws-vpc-cidr-planner；做成分配器非 what-is；phase=0b 待跑 |
| 1 母版+lint | 2026-08-31 | 写完 en 全键（title/desc/How/Formula/Example/FAQ/UI） | lint:tool-page 源码绿；H1 含 AWS VPC CIDR planner |
| 1b 母版检索覆盖优化 | 2026-08-31 | 母版 title 保持结果向「Split a VPC into AZ subnets」；主词 AWS VPC CIDR planner 在 H1；vpc cidr block 与五地址/172.17 留 desc/FAQ，不进 H1 | H1 非 what-is、非 Azure 抢标题；phase=2 待跑 |
| 2 按 brief 重写 | 2026-08-31 | 按各语当地检索词独立重写十语 title/desc/How/FAQ（非 en 同构） | zh/es/ja/ar/pt/id/fr/ru/de 句式与主词已分叉 |
| 2b 抽查语检索覆盖优化 | 2026-08-31 | 抽查 en,zh,es,ja：H1 含当地主词且非逗号目录腔；en Split a VPC into AZ subnets；zh「按可用区切开公有和私有子网」；es Parte la VPC en subredes por AZ；ja AZ ごとにサブネットへ分割；五地址与 Docker 警告仍在各语 FAQ | 四语 H1 结果向且含当地主词 |
| 3 抽查+禁词+lint | 2026-08-31 | 禁词表全扫；抽查 en/zh/es/ja 无 granularity 造词、未承诺创建真实 VPC、隐私句说清不上服务器 | 待母语抽查未勾；可标 i18n-done |
