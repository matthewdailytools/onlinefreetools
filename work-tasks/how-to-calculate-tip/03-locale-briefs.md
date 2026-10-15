# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-tip`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把税 / 取整 / 对照表串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 小费、AA / 平摊、税前、服务费、凑整；ja チップ、割り勘、税抜 / 税込、サービス料、端数；es propina、dividir la cuenta、antes de impuestos、cargo por servicio、redondear；pt gorjeta、dividir a conta、taxa de serviço (10%)、arredondar；fr pourboire、partager l'addition、service compris、arrondir；de Trinkgeld、Rechnung teilen、aufrunden、„Stimmt so“、Bedienungsgeld；ru чаевые、разделить счёт、до копейки、сервисный сбор、округлить；id tip、bagi rata tagihan、service charge、pajak restoran、pembulatan；ar البقشيش / الإكرامية، تقسيم الفاتورة، رسوم الخدمة، التقريب
- [x] **FAQ q4（各地习惯）**：保留「美国：Emily Post 建议餐桌服务税前 15–20%、自助 10%、出租车 / 美发 15–20%」一句；其余按本语用户所在地改写当地习惯，一律用「通常 / 常见」等限定语，不写法律条文或精确到个位的统计
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：金额写 80,00、102,40、34,14 + 34,13 + 34,13；百分比按当地写法（de / fr「15 %」）；页面把逗号当小数点
- [x] 引用页面控件名（Enter the tip as / An amount / Each person pays）须与本语 UI 键一致
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

80.00 × 15% = 12.00 → 92.00。86.40 含税 6.40 → 基数 80.00、20% → 16.00、102.40、1 × 34.14 + 2 × 34.13、每人小费 5.33、折合含税 18.52%；按含税 17.28。137.50 × 18% = 24.75 → 162.25、40.5625 → 41.00 × 4 = 164.00、小费 26.50（19.27%）；总额取整 163.00、25.50（18.55%）。心算 64.00：10% 6.40、20% 12.80、15% 9.60、18% 11.52；10.00 / 64.00 = 15.63%。

## 每语 brief

### en
- 检索词：tip calculator；how to calculate tip；20 percent tip；split bill with tip；tip before or after tax；how much to tip；tip percentage calculator
- 语气：口语
- Title：Tip Calculator — Work Out the Tip and Split the Bill Evenly, Down to the Cent
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：小费计算器；小费怎么算；美国小费给多少；小费按税前还是税后；AA 制计算器；聚餐平摊
- 语气：口语；场景以出境（美国 / 欧洲 / 日本）与聚餐 AA 为主；中国大陆餐馆通常不收小费，部分酒店餐厅加收服务费
- Title：小费计算器 — 按比例算出小费，并把账单精确分摊到每个人
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de propinas；cómo calcular la propina；cuánto dejar de propina；dividir la cuenta；propina antes o después de impuestos
- 语气：tú；兼顾西班牙（propina voluntaria、redondear）与墨西哥（10–15 % habitual）
- Title：Calculadora de propinas — calcula la propina y divide la cuenta a partes iguales, al céntimo
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة البقشيش；كيف أحسب البقشيش；كم أترك بقشيش；تقسيم الفاتورة؛ رسوم الخدمة
- 语气：فصحى مبسطة；拉丁数字；习惯：许多餐厅已加收رسوم خدمة，未加时常见约 10–15 %（限定语）
- Title：حاسبة البقشيش — احسب البقشيش وقسّم الفاتورة بالتساوي بدقة حتى آخر قرش
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de gorjeta；como calcular gorjeta；taxa de serviço 10%；dividir a conta；racha conta
- 语气：pt-BR 口语；巴西常见 10% taxa de serviço 已加在账单上（可选择不付）
- Title：Calculadora de gorjeta — calcule a gorjeta e divida a conta entre todos, centavo por centavo
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator tip；cara menghitung tip；berapa tip di Amerika；bagi rata tagihan；split bill；service charge
- 语气：Anda；本地常见 service charge（通常 5–10 %）+ 餐厅税，额外 tip 自愿
- Title：Kalkulator Tip — Hitung Tip dan Bagi Rata Tagihan sampai ke Sen Terakhir
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul pourboire；combien laisser de pourboire；pourboire aux États-Unis；partager l'addition；service compris
- 语气：vouvoiement；法国 service compris，pourboire 自愿、常见凑整或留几欧元
- Title：Calcul du pourboire — calculez le pourboire et partagez l'addition au centime près
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：チップ 計算；アメリカ チップ 相場；チップ 税抜 税込；割り勘 計算；端数 切り上げ
- 语气：です・ます；场景以海外旅行为主；日本国内通常不需要チップ
- Title：チップ計算ツール — チップの金額を求めて、割り勘も端数までぴったり分ける
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор чаевых；сколько оставлять чаевых；как посчитать чаевые；разделить счёт；чаевые в США
- 语气：нейтральный；俄罗斯餐厅常见约 10 %，自愿
- Title：Калькулятор чаевых — посчитайте чаевые и разделите счёт поровну, до копейки
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Trinkgeld berechnen；Trinkgeldrechner；wie viel Trinkgeld；Rechnung teilen；Trinkgeld USA
- 语气：Sie-Form；德 / 奥常见约 5–10 % 或 aufrunden，付款时报总额（„Stimmt so“）
- Title：Trinkgeldrechner — Trinkgeld berechnen und die Rechnung auf den Cent genau aufteilen
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 改为动作句「Work Out the Tip and Split the Bill Evenly, Down to the Cent」；02 新增同意图相关搜索全表（15 / 20% / 分摊 / 税前税后 / 给多少 / 金额反算 / 取整 / 服务费吸；tip pooling、销售税不吸）与意图审查（不满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 tip calculator + split the bill + down to the cent；desc 写 calculate、按分分摊、税前、三种取整、反算比例、10–25% 对照；20% tip → FAQ q1；before or after tax → FAQ q2；how much to tip → FAQ q4；tip percentage → FAQ q5；round up → FAQ q6；service charge → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地说法（小费 / AA、チップ / 割り勘、propina、gorjeta / taxa de serviço、pourboire / service compris、Trinkgeld、чаевые、tip / service charge、البقشيش）；FAQ q4 写当地习惯并保留美国 Emily Post 一句；小数逗号语种金额用逗号；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-tip；title 定为「Tip Calculator — Tip Amount and Split」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（分摊不平、无税前 / 取整、FAQ 一句话），已重写 |
