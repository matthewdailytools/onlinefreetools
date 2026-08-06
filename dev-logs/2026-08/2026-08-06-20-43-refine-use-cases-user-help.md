Date: 2026-08-06 20:43
Summary: More refined use cases help when they add workflow constraints and decisions; multiplying vague scene labels does not — deepen 2–3 scenarios, don’t flood the page.

[question]
用户使用场景是否更细化，这样会对用户更有帮助么？

[try to solve]
**会更有帮助——前提是「细化＝加上可执行约束/决策」，不是「多列几个行业名」。**

### 为何细化有用
策略把场景语境当作 IG（§3.1 ③），长尾默认「一带多场景」、慎拆页（§3.3）。用户真正需要的是：我这种情况该怎么设参数、会踩什么坑、结果能不能信。

### 何种细化有用 vs 无用

| 有用的细化 | 无用的「细化」 |
|---|---|
| 岗位 + 具体任务 + 约束 | 「适合学生 / 开发者 / 所有人」 |
| 参数建议或对照（按行 vs 按词；公制 vs 英制） | 同义场景堆砌凑长尾 |
| 失败/不适用边界 | 空壳拆 URL（doorway） |
| 一条带数字的迷你例 | 只换 title 的变体页 |

### 现状（en）已有好坏对照
- **已较细、较有用**：Headers（CORS / Cache-Control / CSP）；Markdown（CMS 导出、邮件 HTML→MD、剪贴板进 LLM）；百分比变化（GMV、DAU、价格且区分百分点）；Text Diff（.env、prompt 按词、校对）
- **仍偏浅**：BMI「fitness onboarding」；ROI「coursework practice」——点到岗位但缺步骤/限制

### 建议写法（仍保持 2–3 条，加深不堆量）
每条尽量含：**谁 + 任务 + 怎么用本工具 + 注意什么**。  
例（sqft 可从现有再深一层）：「美式 listing 850 sq ft ↔ 本地 m² 广告比对；本页只算矩形平面面积，不含套内/公摊定义。」

数量：默认仍 **2–3 条深场景**；第四条仅当有独立约束/例。不要为 SEO 扩到 8–10 条空标签。

**一句话**：场景应该更细，细在「任务步骤与边界」；细成「行业标签清单」对用户帮助有限，还容易像堆内容。

[actions]
- 对照 §3.1/§3.3 与 en 十工具 usecase 文案；未改代码
