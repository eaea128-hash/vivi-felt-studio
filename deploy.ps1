# ============================================================
#  Vivi Felt Studio — 一鍵批次部署腳本
#  用法：.\deploy.ps1 "這次修改的說明"
#  用法（無說明）：.\deploy.ps1
# ============================================================

param(
    [string]$Message = ""
)

Set-Location "D:\AI專案\vivi-felt-studio"

# 自動產生 commit 訊息（含時間戳記）
if (-not $Message) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
    $Message = "chore: 批次更新 $timestamp"
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Vivi Felt Studio 批次部署" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# 1. 檢查是否有根目錄圖片（R-01 防呆）
$rootImages = Get-ChildItem -Path "." -MaxDepth 1 -Include "*.jpg","*.jpeg","*.png","*.webp" -ErrorAction SilentlyContinue
if ($rootImages) {
    Write-Host "[警告] 偵測到根目錄有圖片檔案，應移至 assets/images/：" -ForegroundColor Yellow
    $rootImages | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor Yellow }
    Write-Host ""
}

# 2. 顯示變更清單
Write-Host "[1/3] 檢查變更..." -ForegroundColor White
git status --short
Write-Host ""

# 3. 加入所有變更
Write-Host "[2/3] 加入所有變更..." -ForegroundColor White
git add -A

# 4. Commit
Write-Host "[3/3] Commit 並推送..." -ForegroundColor White
git commit -m $Message

# 5. Push
git push

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "  部署完成！" -ForegroundColor Green
Write-Host "  Netlify 約 30~60 秒後自動更新" -ForegroundColor Green
Write-Host "  網址：https://vivifirt.netlify.app/" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
