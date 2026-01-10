日期：2026年01月11日01时21分
摘要：修复 build:site 因 siteConfig 初始化自引用导致的 TDZ 报错
【question】
> cloudflare-workers-openapi@0.0.1 build:site
> node scripts/build-site.mjs

file:///Users/xuli/vscodeai/onlinefreetools/scripts/site/config.mjs:20
              ...siteConfig.languages.map((l) => l.code),
                 ^

ReferenceError: Cannot access 'siteConfig' before initialization
    at file:///Users/xuli/vscodeai/onlinefreetools/scripts/site/config.mjs:20:18
    at file:///Users/xuli/vscodeai/onlinefreetools/scripts/site/config.mjs:29:5
    at ModuleJob.run (node:internal/modules/esm/module_job:274:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:644:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:98:5)

Node.js v23.10.0
【try to solve】
原因是 `siteConfig` 对象初始化期间在 `enabledLangs` 的 IIFE 里自引用了 `siteConfig.languages`，触发 TDZ（在初始化完成前访问自身）。

修复方式：把 `languages` 抽成独立常量，在构造 `siteConfig` 时引用该常量，并在 `enabledLangs` 计算里使用 `languages`，避免在初始化阶段访问 `siteConfig`。

修复后重新执行 `env SITE_LANGS=zh,en SITE_DEFAULT_LANG=en npm run build:site`，构建成功并输出 `Built site for langs: zh, en`。
【执行操作】
- 修改：`scripts/site/config.mjs`
- 运行：`env SITE_LANGS=zh,en SITE_DEFAULT_LANG=en npm run build:site`
