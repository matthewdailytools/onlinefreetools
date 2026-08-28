# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`private-cidr-ranges`  
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

**本工具额外禁用**：H1 勿写成 CIDR Calculator / 参数枚举（RFC1918、CGNAT、ULA…）；勿承诺路由/防火墙决策；勿做 Tailscale 控制台；可见正文勿写 doorway/薄页/slug。

---

## 每语 brief

### en

- 检索词（3–5）：private cidr ranges；private ip ranges cidr；private cidr；tailscale cidr；RFC1918 private
- 语气：偏正式开发者
- Title / H1 方向：Private CIDR ranges — Check if an IP or prefix is private or special-use
- 按钮短词：Check；Load sample；Clear；Copy
- 本地示例用词：100.64.1.10 → CGNAT 100.64.0.0/10；10.0.0.5 → RFC1918
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale、IPv4、IPv6
- 额外禁用：do not title “CIDR Calculator”; no RFC laundry list in H1
- SERP 竞品 title（1–3）：Private IP Ranges Cheat Sheet — RFC 1918；Private IP Address Ranges…；CIDR Cheat Sheet — … Private IP Ranges
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：私有 CIDR；私网 IP 段；RFC1918；CGNAT 100.64；Tailscale CIDR
- 语气：口语工具站（偏运维）
- Title / H1 方向：私有 CIDR 网段 — 检查 IP/前缀是否属于私网或特殊用途
- 按钮短词：检查；加载示例；清空；复制
- 本地示例用词：100.64.1.10 → CGNAT；10.0.0.5 → RFC1918
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：H1 不要罗列「RFC1918、CGNAT、ULA」；不要写成「在线 CIDR 计算器」
- SERP 竞品 title（1–3）：多为英文 cheat sheet；中文常搜「私网地址段 / RFC1918」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：rangos cidr privados；ip privadas cidr；RFC1918；CGNAT；cidr tailscale
- 语气：偏正式开发者
- Title / H1 方向：Rangos CIDR privados — Comprueba si una IP o prefijo es privado o de uso especial
- 按钮短词：Comprobar；Cargar ejemplo；Limpiar；Copiar
- 本地示例用词：100.64.1.10 → CGNAT；10.0.0.5 → RFC1918
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：no enumerar RFC en el H1
- SERP 竞品 title（1–3）：hojas de rangos privados；artículos RFC1918
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：نطاقات CIDR الخاصة；عناوين IP الخاصة；RFC1918；CGNAT；tailscale cidr
- 语气：偏正式开发者
- Title / H1 方向：نطاقات CIDR الخاصة — تحقق إن كان العنوان أو البادئة خاصًا أو للاستخدام الخاص
- 按钮短词：تحقق；تحميل مثال；مسح；نسخ
- 本地示例用词：100.64.1.10 → CGNAT
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：لا تكتب حاسبة CIDR عامة في العنوان
- SERP 竞品 title（1–3）：غالبًا إنجليزي cheat sheet
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：intervalos cidr privados；ips privados cidr；RFC1918；CGNAT；cidr tailscale
- 语气：偏正式开发者
- Title / H1 方向：Intervalos CIDR privados — Verifique se um IP ou prefixo é privado ou de uso especial
- 按钮短词：Verificar；Carregar exemplo；Limpar；Copiar
- 本地示例用词：100.64.1.10 → CGNAT
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：não listar RFCs no H1
- SERP 竞品 title（1–3）：tabelas de IPs privados；RFC1918
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：rentang cidr privat；ip privat cidr；RFC1918；CGNAT；cidr tailscale
- 语气：口语工具站（偏运维）
- Title / H1 方向：Rentang CIDR privat — Cek apakah IP/prefix termasuk privat atau special-use
- 按钮短词：Periksa；Muat contoh；Hapus；Salin
- 本地示例用词：100.64.1.10 → CGNAT
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：jangan judul “kalkulator CIDR” generik
- SERP 竞品 title（1–3）：cheat sheet berbahasa Inggris
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：plages cidr privées；adresses ip privées cidr；RFC1918；CGNAT；cidr tailscale
- 语气：偏正式开发者
- Title / H1 方向：Plages CIDR privées — Vérifiez si une IP ou un préfixe est privé ou à usage spécial
- 按钮短词：Vérifier；Charger l’exemple；Effacer；Copier
- 本地示例用词：100.64.1.10 → CGNAT
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：pas d’énumération RFC dans le H1
- SERP 竞品 title（1–3）：fiches plages privées；RFC1918
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：プライベート CIDR；プライベート IP レンジ；RFC1918；CGNAT；Tailscale CIDR
- 语气：偏正式开发者
- Title / H1 方向：プライベート CIDR 範囲 — IP/プレフィックスが私有または特殊用途か確認
- 按钮短词：確認；サンプル読込；クリア；コピー
- 本地示例用词：100.64.1.10 → CGNAT
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：H1 に RFC 列挙や汎用「CIDR計算機」禁止
- SERP 竞品 title（1–3）：英語 cheat sheet；日本語は「プライベートアドレス帯」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：частные диапазоны cidr；частные ip cidr；RFC1918；CGNAT；cidr tailscale
- 语气：偏正式开发者
- Title / H1 方向：Частные диапазоны CIDR — Проверьте, является ли IP/префикс частным или special-use
- 按钮短词：Проверить；Загрузить пример；Очистить；Копировать
- 本地示例用词：100.64.1.10 → CGNAT
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：не перечислять RFC в H1
- SERP 竞品 title（1–3）：таблицы частных адресов；RFC1918
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：private cidr bereiche；private ip bereiche cidr；RFC1918；CGNAT；tailscale cidr
- 语气：偏正式开发者
- Title / H1 方向：Private CIDR-Bereiche — Prüfen, ob IP/Präfix privat oder special-use ist
- 按钮短词：Prüfen；Beispiel laden；Leeren；Kopieren
- 本地示例用词：100.64.1.10 → CGNAT
- 可保留英文/符号：CIDR、RFC1918、CGNAT、ULA、Tailscale
- 额外禁用：keine RFC-Aufzählung im H1；kein generischer „CIDR-Rechner“-Titel
- SERP 竞品 title（1–3）：Private-IP-Tabellen；RFC1918
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-28 | slug/title/关键词/desc；覆盖表与 Ads/Planner 长尾表在 `02`；意图审查总判满足；主词 Private CIDR ranges→H1；次词 private ip ranges/tailscale→desc·FAQ·表；CGNAT 样例进交互 | 主词落 H1；Tailscale 仅 FAQ+标签；不做主机展开；gate 0b 目标绿 |
| 1 母版+lint | 2026-08-28 | Wrote en shard + Page; lint:tool-page OK; H1 Private CIDR ranges | Master keys complete |
| 1b 母版检索覆盖优化 | 2026-08-28 | Kept H1 Private CIDR ranges (result-oriented subtitle); desc opens with private CIDR ranges + private IP ranges + CGNAT sample; Tailscale in FAQ/tip not H1; no RFC laundry-list title | Main keyword in H1; secondary words in desc/FAQ/usecase |
| 2 按 brief 重写 | 2026-08-28 | Ten locales rewritten from local briefs (zh/es/ja + ar/pt/id/fr/ru/de); FAQ order varied | Local titles + privacy wording |
| 2b 抽查语检索覆盖优化 | 2026-08-28 | Re-checked en,zh,es,ja titles for local main phrases (Private CIDR ranges / 私有 CIDR / Rangos CIDR privados / プライベート CIDR); desc keeps private-IP + CGNAT sample + Tailscale FAQ | Sample locales en,zh,es,ja optimized |
| 3 抽查+禁词+lint | 2026-08-28 | Banlist pass on titles/buttons/privacy; no RFC laundry-list H1; no pending-native | Ready for verify:tool |
