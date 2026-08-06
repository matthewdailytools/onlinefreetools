Date: 2026-08-06 21:06
Summary: “Rewrite expression, don’t invent new facts” is NOT an explicit rule line — only implied by one-master + rewrite-not-translate; fact-alignment across langs is unstated.

[question]
“重写表达、不另起事实”是否在规则里面

[try to solve]
**没有这句明文。** 规则里有「重写表达」侧，**没有**「不另起事实 / 各语事实须对齐母版」的硬约束。

### 规则里已有（表达侧）
- `tool-i18n-localization.mdc`：一种母版语 → 按 brief **独立重写**；重写非翻译；反同构（题序/开篇可变）
- `tool-creation.mdc` / `tool-i18n-seo.mdc`：检索向重写；禁脚本同构灌语

### 规则里没有（事实侧）
全文检索无：「事实」「不得改公式」「不另起事实」「各语事实对齐」「免责不得漂移」等表述。  
「一致」多指 JSON-LD↔可见文案、首页主词↔工具页，**不是**跨语公式/边界一致。

### 结论
| 说法 | 在不在 rules |
|---|---|
| 重写表达（非直译、反同构） | **在** |
| 不另起事实（公式/默认行为/免责对齐母版） | **不在（仅隐含）** |

若要变成可执行规则，需在 `tool-i18n-localization.mdc` 显式加一条，例如：他语可改检索词、题序、场景切入与示例用词；**不得**改公式、默认算法行为、隐私/YMYL 免责结论与固定 Example 数值（除非同步改母版与全语）。

[actions]
- 检索 `.cursor/rules` 与 docs SEO 相关措辞；未改文件
