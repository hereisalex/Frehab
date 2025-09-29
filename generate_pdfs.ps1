# Frehab Worksheet PDF Generator
# PowerShell script to generate PDFs from HTML files

Write-Host "Frehab Worksheet PDF Generator" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Create output directory
$outputDir = "public\worksheets"
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
    Write-Host "Created output directory: $outputDir" -ForegroundColor Yellow
}

# Find Chrome executable
$chromePaths = @(
    "chrome",
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
)

$chromePath = $null
foreach ($path in $chromePaths) {
    if (Get-Command $path -ErrorAction SilentlyContinue) {
        $chromePath = $path
        break
    }
}

if (!$chromePath) {
    Write-Host "Chrome not found. Please install Google Chrome." -ForegroundColor Red
    exit 1
}

Write-Host "Using Chrome: $chromePath" -ForegroundColor Cyan

# List of worksheets to generate
$worksheets = @(
    @{
        html = "alcohol-free-celebrations-worksheet.html"
        pdf = "alcohol-free-celebrations.pdf"
    },
    @{
        html = "alcohol-wellness-tracker-worksheet.html"
        pdf = "alcohol-wellness-tracker.pdf"
    }
)

$successCount = 0
$totalCount = $worksheets.Count

foreach ($worksheet in $worksheets) {
    $htmlFile = $worksheet.html
    $pdfFile = "$outputDir\$($worksheet.pdf)"
    
    if (!(Test-Path $htmlFile)) {
        Write-Host "HTML file not found: $htmlFile" -ForegroundColor Red
        continue
    }
    
    Write-Host "Generating: $($worksheet.pdf)..." -ForegroundColor Yellow
    
    try {
        # Chrome command for PDF generation
        $chromeArgs = @(
            "--headless",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--print-to-pdf=$pdfFile",
            "--print-to-pdf-no-header",
            "--disable-extensions",
            "--disable-plugins",
            "--virtual-time-budget=5000",
            $htmlFile
        )
        
        $process = Start-Process -FilePath $chromePath -ArgumentList $chromeArgs -Wait -PassThru -NoNewWindow
        
        if ($process.ExitCode -eq 0 -and (Test-Path $pdfFile)) {
            $fileSize = (Get-Item $pdfFile).Length / 1KB
            Write-Host "✅ Generated: $($worksheet.pdf) ($([math]::Round($fileSize, 1)) KB)" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "❌ Failed to generate: $($worksheet.pdf)" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "❌ Error generating $($worksheet.pdf): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "Completed: $successCount/$totalCount PDFs generated successfully" -ForegroundColor Cyan

if ($successCount -eq $totalCount) {
    Write-Host "✅ All worksheets are ready!" -ForegroundColor Green
    Write-Host "📁 Location: $(Resolve-Path $outputDir)" -ForegroundColor Cyan
} else {
    Write-Host "⚠️  Some PDFs failed to generate." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
