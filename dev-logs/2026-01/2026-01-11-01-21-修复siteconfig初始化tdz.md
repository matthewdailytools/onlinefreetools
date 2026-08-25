Date: 2026-01-11 01:21
Summary: Fixed `build:site` TDZ crash caused by `siteConfig` self-reference during initialization.

[question]
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

[try to solve]
Cause: while initializing `siteConfig`, an IIFE for `enabledLangs` referenced `siteConfig.languages`, hitting the temporal dead zone.

Fix: extract `languages` as a standalone constant; build `siteConfig` from that constant and compute `enabledLangs` from `languages` without reading `siteConfig` during init.

After the fix, `env SITE_LANGS=zh,en SITE_DEFAULT_LANG=en npm run build:site` succeeded and printed `Built site for langs: zh, en`.

[actions]
- Updated: `scripts/site/config.mjs`
- Ran: `env SITE_LANGS=zh,en SITE_DEFAULT_LANG=en npm run build:site`
