# 停止本地 wrangler dev 开发服务器
# 用法: .\ops\dev\stop-dev.ps1
#       .\ops\dev\stop-dev.ps1 -Port 8787
param(
    [int]$Port = 8787
)

$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..\..")

$args = @()
if ($Port -ne 8787) { $args += "--port"; $args += "$Port" }

node ops/dev/stop-dev.mjs @args
exit $LASTEXITCODE
