$root = Split-Path -Parent $PSScriptRoot

Start-Process powershell -ArgumentList @(
  "-NoExit",
  "-Command",
  "cd '$root\apps\api'; npm run dev"
)

Start-Process powershell -ArgumentList @(
  "-NoExit",
  "-Command",
  "cd '$root\apps\web'; npm run dev -- --port 3000"
)

Write-Host "Adakan Library Core baslatildi."
Write-Host "API: http://localhost:5000"
Write-Host "Web: http://localhost:3000"
