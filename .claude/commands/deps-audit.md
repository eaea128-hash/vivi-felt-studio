# Skill: Dependency Audit（Vivi 版）

**觸發時機**：`/deps-audit`、外部腳本安全、CDN 套件、第三方服務風險

## Vivi 的依賴類型

Vivi 是純靜態 HTML 網站，沒有 npm 依賴。主要風險來自：

### 1. CDN / 外部腳本
核對 `<head>` 中所有外部 `<script src="">` 和 `<link rel="stylesheet">`：
- 是否使用固定版本號（`?v=X.X.X`）而非 `@latest`？
- CDN 是否為知名可信來源（cdnjs、unpkg、jsdelivr、Google Fonts）？
- 確認無不明來源的第三方追蹤腳本

### 2. Formspree
- Form ID：`xrervybz`（固定，無版本問題）
- 確認 Formspree Dashboard 無未讀垃圾訊息 / 濫用跡象
- Formspree Free Plan：每月 50 筆提交上限

### 3. Google Analytics 4
- 追蹤碼：`G-N5KTMTEY1C`
- 確認所有 19 個頁面都有載入（參考 `/deploy-checklist`）
- 無版本問題（GA4 snippet 會自動更新）

### 4. Google Apps Script（表單備份）
- GAS URL 在 commit 歷史中是否已曝露？
- 定期確認 GAS 部署版本為最新

### 5. 圖片 / 資源來源
- 所有圖片必須在 `assets/images/` 本地存放
- 禁止引用外部圖片 URL（可能失效或被替換）

## 執行步驟

1. 搜尋所有 HTML 檔案中的外部資源引用
2. 核對 CDN 來源可信度與版本固定性
3. 確認 Formspree / GA4 設定正確
4. 檢查 GAS URL 是否在公開 commit 中

## 輸出格式

```
## Vivi 依賴稽核報告

### 🔴 風險項目
- [問題] → 建議修法

### ✅ 通過項目
- Formspree ID 正確
- GA4 追蹤碼正確
- 無不明外部腳本

### 📋 建議優化
- [項目] → 說明
```

## 規則
- 只分析，不自動修改
- 不處理 API Key / Channel Token（請勿貼入對話）
