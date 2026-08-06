Date: 2026-08-06 21:04
Summary: Yes — cursor/rules already encode one-language factual master plus per-locale search-oriented rewrite at master quality; “事实卡” is implicit via the master lang, not a separate named artifact.

[question]
目前cursor/rules是否采用“一份事实母版 + 十语都按母版质量做检索向重写”规则

[try to solve]
**是，实质已采用；措辞是「一种母版语 + 逐语按 brief 独立重写」，没有单独名叫「事实卡」的文件。**

### 规则落点
| 文件 | 对应关系 |
|---|---|
| `tool-i18n-localization.mdc` 步 1 | **一份母版**：通常 en 或 zh，写齐 How/Rules/Example/Use cases/FAQ/UI |
| 同文件步 2 + 写法 | **十语母版质量重写**：按每语 brief 独立重写；禁 Translate；反同构 |
| `tool-creation.mdc` / `work-tasks-tool-brief.mdc` | 实现前 `03-locale-briefs`；稳妥常态：母版一语 → 逐语重写 → ≥3 轮 |
| `tool-i18n-seo.mdc` IG⑦ | 各语检索向重写；禁「母版 + 脚本灌其余语」同构交付 |
| `seo-google-policy.mdc` | scaled content → brief + 检索向重写 + ≥3 轮 |

### 未写死但隐含的
- 未单独规定「事实卡」产物名；**母版语文案 = 事实/IG 源**。
- 未逐条写「他语不得改公式/免责事实」，但流程是重写表达而非另起事实体系；YMYL/边界随母版键齐全落地。

### 明确反对的反面
- 十语各自当无关事实母版：未鼓励。
- 「母版定稿 → 脚本灌八语」：明确禁止。

**一句话**：**规则已是该模型**；若要把「事实不得漂移」写得更硬，可在 localization 加一句「他语可改检索表达与题序，不得改公式/默认行为/免责事实」——属增强清晰度，非换模型。

[actions]
- 核对 localization / creation / i18n-seo / work-tasks / google-policy；未改文件
