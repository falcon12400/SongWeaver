@echo off
setlocal

cd /d "%~dp0"
set "PORT=4173"
set "URL=http://127.0.0.1:%PORT%/"

if not exist "node_modules" (
  echo Installing dependencies...
  call pnpm install
  if errorlevel 1 (
    echo Failed to install dependencies.
    pause
    exit /b 1
  )
)

if not exist "dist\index.html" (
  echo Building SongWeaver...
  call pnpm build
  if errorlevel 1 (
    echo Failed to build SongWeaver.
    pause
    exit /b 1
  )
)

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "try { Invoke-WebRequest -UseBasicParsing '%URL%' -TimeoutSec 2 | Out-Null; exit 0 } catch { exit 1 }"

if errorlevel 1 (
  echo Starting local server on port %PORT%...
  start "SongWeaver Server" /min cmd /c "cd /d ""%CD%"" && python -m http.server %PORT% -d dist"
  timeout /t 2 /nobreak >nul
)

start "" "%URL%"
exit /b 0
