# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`ip-address`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非「ユースケース」式空壳英借
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

**本工具额外**：禁止 title/description **同义词堆砌**（what is my ip + show my ip + lookup + finder 串联）。

---

## 每语 brief

### en

- 检索词（3–5）：what is my ip；my public ip address；show my ip；what’s my IP address
- 语气：口语工具站
- Title / H1 方向：What Is My IP Address — See Your Public IP（单一主意图）
- 按钮短词：Refresh / Copy IP（若有）
- 本地示例用词：保留地址示例 203.0.113.10（文案用）
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：title 堆砌 find/lookup/checker/detector
- SERP 竞品 title（1–3）：What Is My IP；Show My IP；My IP Address
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：IP 地址查询；我的 IP；公网 IP 查询；外网 IP；查 IP / 我的 ip 是多少
- 语气：口语工具站
- Title / H1 方向：IP 地址查询 — 查看我的公网 IP（IPv4/IPv6）（2026-08-08 按检索习惯优化：前置「IP 地址查询」，正文覆盖「外网 IP」口语）
- 按钮短词：刷新查询 / 复制
- 本地示例用词：公网/外网出口；192.168 对比；VPN/机场
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：title 堆「免费在线查询检测工具大全」
- SERP 竞品 title（1–3）：IP 地址查询；我的 IP；公网 IP 查询
- 用户分层（2026-08-08）：① 口语查 IP ② 路由器 vs 外网困惑 ③ VPN/白名单/NAS/游戏联机
- 轮次2已重写：[x]  轮次3已抽查：[x]  检索向再优化：[x] 2026-08-08

### es

- 检索词（3–5）：cuál es mi IP；ver mi IP pública；mi dirección IP；mostrar mi IP
- 语气：口语工具站
- Title / H1 方向：Cuál es mi IP — Ver tu IP pública
- 按钮短词：Actualizar / Copiar
- 本地示例用词：IP pública；VPN
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：title 同义堆砌
- SERP 竞品 title（1–3）：Cuál es mi IP；Mi IP pública
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：ما هو عنوان IP الخاص بي؛ معرفة IP؛ عنوان IP العام؛ عرض IP
- 语气：口语工具站
- Title / H1 方向：ما هو عنوان IP الخاص بي — اعرض IP العام
- 按钮短词：تحديث / نسخ
- 本地示例用词：VPN؛ عنوان عام
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：英模堆词
- SERP 竞品 title（1–3）：ما هو IP الخاص بي；عنوان IP
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：qual é o meu IP；ver meu IP público；meu endereço IP；mostrar meu IP
- 语气：口语工具站
- Title / H1 方向：Qual é o meu IP — Ver seu IP público
- 按钮短词：Atualizar / Copiar
- 本地示例用词：IP público；VPN
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：title 堆砌
- SERP 竞品 title（1–3）：Qual é meu IP；Meu IP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：berapa IP saya；cek IP publik；alamat IP saya；lihat IP saya
- 语气：口语工具站
- Title / H1 方向：Berapa IP saya — Lihat IP publik Anda
- 按钮短词：Muat ulang / Salin
- 本地示例用词：IP publik；VPN
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：堆砌 kata kunci di title
- SERP 竞品 title（1–3）：Cek IP Saya；IP Publik
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：quelle est mon IP；voir mon IP publique；mon adresse IP；afficher mon IP
- 语气：口语工具站
- Title / H1 方向：Quelle est mon adresse IP — Voir votre IP publique
- 按钮短词：Actualiser / Copier
- 本地示例用词：IP publique；VPN
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：title 同义堆砌
- SERP 竞品 title（1–3）：Quelle est mon IP；Mon IP publique
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：自分のIPアドレス；グローバルIP 確認；IPアドレス 調べる；マイIP
- 语气：口语工具站
- Title / H1 方向：自分のIPアドレスを確認 — グローバルIPを表示
- 按钮短词：更新 / コピー
- 本地示例用词：グローバルIP；VPN
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：ユースケース；キーワード羅列タイトル
- SERP 竞品 title（1–3）：IPアドレス確認；自分のIP
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：узнать свой IP；мой IP адрес；какой у меня IP；публичный IP
- 语气：口语工具站
- Title / H1 方向：Узнать свой IP — Показать публичный IP-адрес
- 按钮短词：Обновить / Копировать
- 本地示例用词：публичный IP；VPN
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：title 同义堆砌
- SERP 竞品 title（1–3）：Узнать IP；Мой IP адрес
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：was ist meine IP；meine öffentliche IP；IP-Adresse anzeigen；meine IP Adresse
- 语气：口语工具站
- Title / H1 方向：Was ist meine IP-Adresse — Öffentliche IP anzeigen
- 按钮短词：Aktualisieren / Kopieren
- 本地示例用词：öffentliche IP；VPN
- 可保留英文/符号：IP、IPv4、IPv6、VPN
- 额外禁用：Keyword-Stuffing im Title
- SERP 竞品 title（1–3）：Meine IP-Adresse；Was ist meine IP
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0 briefs | 2026-08-06 | 十语 brief；强调去堆词；`briefs-ready` | 待实现轮次 1–3 |
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
