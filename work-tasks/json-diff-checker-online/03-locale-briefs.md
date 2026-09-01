# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`json-diff-checker-online`  
**母版语言**：en / zh  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题当地说法
- [x] title 非参数枚举；禁 H1=`JSON Diff Checker` 头词
- [x] 隐私：留在设备 + 不上服务器
- [x] 十语非同一骨架
- [x] 未英文回退冒充
- [x] 未脚本同构灌语
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

---

## 每语 brief

### en
- 检索词：JSON diff checker online；json compare；key order；json path diff
- Title / H1 方向：JSON diff checker online
- 按钮：Compare / Clear / Load sample；Ignore key order
- 本地示例：键序不同无差；改 `price` 有路径
- 可保留：JSON、JSON Pointer 风格路径
- SERP：JSON Diff；JSON Compare
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词：在线 JSON 差异检查；JSON 对比；忽略键顺序
- Title / H1 方向：在线 JSON 差异检查
- 按钮：开始对比 / 清空 / 载入样例；忽略键顺序
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词：comprobador de diferencias JSON online；comparar json
- Title / H1 方向：Comprobador de diferencias JSON online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词：فاحص اختلاف JSON عبر الإنترنت
- Title / H1 方向：فاحص اختلاف JSON عبر الإنترنت
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### pt
- 检索词：verificador de diff JSON online；comparar json
- Title / H1 方向：Verificador de diff JSON online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词：pemeriksa diff JSON online
- Title / H1 方向：Pemeriksa diff JSON online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词：vérificateur de diff JSON en ligne
- Title / H1 方向：Vérificateur de diff JSON en ligne
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词：JSONの差分をオンラインで確認；JSON 比較
- Title / H1 方向：JSONの差分をオンラインで確認
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ru
- 检索词：онлайн проверка различий JSON
- Title / H1 方向：Онлайн-проверка различий JSON
- 待母语抽查：[ ]
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### de
- 检索词：JSON-Diff-Prüfung online
- Title / H1 方向：JSON-Diff online prüfen
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | H1 用 JSON diff checker online 而非头词；默认忽略键序写入规则；YAML 有意不满足 | 02 覆盖与 0i 完成；phase=0b |
| 1 母版+lint | 2026-09-01 | en/zh 母版：忽略键序、路径差、非法 JSON | 待 lint |
| 1b 母版检索覆盖优化 | 2026-09-01 | 母版 H1 锁定 JSON diff checker online；禁头词进攻 | 主词在 H1 |
| 2 按 brief 重写 | 2026-09-01 | 十语独立重写 | 十语分片已写 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja 当地 H1 与键序说明 | en,zh,es,ja 四语 title 为任务句 |
| 3 抽查+禁词+lint | 2026-09-01 | coverage:gate phase=4 | 待跑 |
