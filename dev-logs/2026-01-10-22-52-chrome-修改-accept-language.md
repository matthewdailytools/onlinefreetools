日期：2026年1月10日22时52分
摘要：说明在 Chrome 中修改 Accept-Language 的几种方法（设置语言顺序/调试覆盖/启动参数）。
【question】
chrome 修改 accept-language
【try to solve】
1）影响“真实请求头”的方式（推荐）
- 打开：chrome://settings/languages
- 在“首选语言”里添加需要的语言，并把目标语言拖到最上方/调整顺序
- 重启 Chrome 后再验证（Accept-Language 通常会按该顺序生成）

2）仅用于调试/单次覆盖
- DevTools：打开开发者工具 → Network（网络）→ 右上角更多/More tools → Network conditions（网络条件）
  - 如果你的 Chrome 版本里有 Accept-Language 选项：取消“Use browser default”，手填例如：en-US,en;q=0.9
  - 注意：该方式通常只影响调试环境/当前会话，且不同版本 UI 可能略有差异

3）强制方式（更可控）
- 使用请求头改写工具：ModHeader 等扩展，或用代理工具（Charles / Proxyman）改写请求头 Accept-Language
- 启动参数（macOS 示例）：
  - 退出 Chrome 后执行：open -a "Google Chrome" --args --lang=en-US
  - 该参数会影响浏览器语言相关行为，常用于临时切换测试

验证建议
- 打开 https://httpbin.org/headers 或你自己的回显接口，查看请求头里 Accept-Language 是否按预期变化。
