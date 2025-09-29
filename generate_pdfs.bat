@echo off
echo Frehab Worksheet PDF Generator
echo ================================

REM Create output directory
if not exist "public\worksheets" mkdir "public\worksheets"

REM Check if Chrome is available
where chrome >nul 2>&1
if %errorlevel% neq 0 (
    echo Chrome not found in PATH. Trying common locations...
    set CHROME_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not exist %CHROME_PATH% (
        set CHROME_PATH="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    )
    if not exist %CHROME_PATH% (
        echo Chrome not found. Please install Google Chrome.
        pause
        exit /b 1
    )
) else (
    set CHROME_PATH=chrome
)

echo Using Chrome: %CHROME_PATH%

REM Generate alcohol-free-celebrations.pdf
echo Generating alcohol-free-celebrations.pdf...
%CHROME_PATH% --headless --disable-gpu --no-sandbox --print-to-pdf="public\worksheets\alcohol-free-celebrations.pdf" --print-to-pdf-no-header "alcohol-free-celebrations-worksheet.html"

REM Generate alcohol-wellness-tracker.pdf  
echo Generating alcohol-wellness-tracker.pdf...
%CHROME_PATH% --headless --disable-gpu --no-sandbox --print-to-pdf="public\worksheets\alcohol-wellness-tracker.pdf" --print-to-pdf-no-header "alcohol-wellness-tracker-worksheet.html"

echo.
echo PDF generation complete!
echo Check public\worksheets\ for your files.
pause
