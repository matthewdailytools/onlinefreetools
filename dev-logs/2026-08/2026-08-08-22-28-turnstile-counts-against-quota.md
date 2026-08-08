Date: 2026-08-08 22:28
Summary: Explained Turnstile free tier unlimited challenges vs Worker/upstream request costs.

[question]
验证占不占请求次数？

[try to solve]
Turnstile Free 官方写明 Unlimited challenges（traffic or verification requests），验证本身不按次计费/不占 Turnstile 套餐次数。但每次点 Lookup 仍会打一次本站 Worker（含一次 siteverify 子请求）；只有校验通过后才会打 DoH/RDAP。仅加载 widget、未提交，一般不走业务 API。

[actions]
- 无代码改动
