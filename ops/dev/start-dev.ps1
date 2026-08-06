# 启动本地开发服务器（构建静态页 + wrangler dev 后台）
# 用法: .\ops\dev\start-dev.ps1
#       .\ops\dev\start-dev.ps1 -NoBuild
#       .\ops\dev\start-dev.ps1 -Port 8787
param(
    [switch]$NoBuild,
    [int]$Port = 8787
)

$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..\..")

$args = @()
if ($NoBuild) { $args += "--no-build" }
if ($Port -ne 8787) { $args += "--port"; $args += "$Port" }

node ops/dev/start-dev.mjs @args
exit $LASTEXITCODE
