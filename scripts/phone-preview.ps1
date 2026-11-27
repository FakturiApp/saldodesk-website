# Opens the website and the app to a phone on the same Wi-Fi (owner 2026-11-27: „localhost
# doesn't work on the phone"). Starts three servers in their own windows, open to the local
# network, and prints the addresses to type on the phone:
#   website  http://<this PC>:4321/mk/
#   app      http://<this PC>:5150/   (the demo company „Кони Копи", data/website-shots.db)
# The first time, Windows asks whether Node / Python may use the network: tick „Private
# networks" and Allow. Close the three windows to stop. Run from the website folder:
#   powershell -ExecutionPolicy Bypass -File scripts\phone-preview.ps1

$site = Split-Path -Parent $PSScriptRoot
$app = Join-Path (Split-Path -Parent $site) 'Business_M-main'

$ip = (Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object { $_.IPAddress -match '^(192\.168|10\.|172\.(1[6-9]|2\d|3[01]))\.' -and $_.PrefixOrigin -ne 'WellKnown' } |
  Select-Object -First 1).IPAddress
if (-not $ip) { $ip = '<this PC>' }

# The website (Astro), open to the network.
Start-Process powershell -ArgumentList '-NoExit', '-Command', "Set-Location '$site'; npm run dev -- --host 0.0.0.0 --port 4321"

if (Test-Path $app) {
  # The app's server, on the demo company's copy of the data (the same one the website's
  # pictures are taken on). Only the phone's browser talks to the frontend below; the frontend
  # passes /api on to this server, so it stays on this PC alone.
  $backend = "Set-Location '$app'; " +
    "`$env:DB_PATH='data/website-shots.db'; `$env:FISCAL_ALLOW_STUB='true'; `$env:UJP_ENABLED='false'; " +
    "`$env:DRAFT_PURGE_ENABLED='false'; `$env:RECURRING_SCHEDULER_ENABLED='false'; `$env:REMINDERS_SCHEDULER_ENABLED='false'; " +
    "`$env:RENTALS_SCHEDULER_ENABLED='false'; `$env:RESERVATIONS_SCHEDULER_ENABLED='false'; `$env:SNAPSHOTS_SCHEDULER_ENABLED='false'; " +
    "`$env:UJP_STATUS_SCHEDULER_ENABLED='false'; `$env:WEBSYNC_SCHEDULER_ENABLED='false'; `$env:BACKUP_EVERY_HOURS='0'; " +
    "& .venv/Scripts/python.exe -m uvicorn backend.main:app --port 8150"
  Start-Process powershell -ArgumentList '-NoExit', '-Command', $backend
  # The app's screens (Vite), open to the network.
  Start-Process powershell -ArgumentList '-NoExit', '-Command', "Set-Location '$app'; `$env:DEV_PORT='5150'; `$env:DEV_API_PORT='8150'; npm run dev --prefix frontend -- --host 0.0.0.0"
}

Write-Host ''
Write-Host 'On the phone (same Wi-Fi as this PC), open:' -ForegroundColor Green
Write-Host "  Website:  http://${ip}:4321/mk/"
if (Test-Path $app) { Write-Host "  App:      http://${ip}:5150/   (log in with the demo account in Business_M-main\data\website-shots-login.txt)" }
Write-Host ''
Write-Host 'Nothing opens? Windows may have blocked it: Windows Security > Firewall > Allow an app, tick Node.js on Private.'
