# Skill: Accessibility Audit（Vivi 版 WCAG 核對）

**觸發時機**：`/accessibility-audit`、無障礙、色彩對比、鍵盤操作、視障

## 稽核範圍

### 色彩對比（Vivi 設計系統）
- `--espresso`（#3A2E25）on `--cream`（#F7F3EE）→ 確認符合 4.5:1
- `--caramel`（#C9A96E）on 白底 → 金棕色需特別查
- 按鈕文字對比：`--warm-brown` on 淺色背景

### 圖片 Alt Text
- 所有 `assets/images/` 作品照需有描述性 alt（「博美犬羊毛氈紀念作品」而非「work-01」）
- 純裝飾圖片用 `alt=""`

### 表單可及性（4 個表單頁）
- `<input>` / `<textarea>` 有對應 `<label>`
- 必填欄位有標示
- 錯誤訊息清楚
- 送出後成功畫面有文字回饋（已有 .form-success，確認 screen reader 可讀）

### 鍵盤導覽
- Tab 可到達所有按鈕、連結、表單欄位
- 無 `href="#"` 假按鈕（R-10）
- Mobile menu 可用鍵盤開關

### 語意標記
- 每頁一個 `<h1>`（頁面主標題）
- 標題層級不跳號
- 導覽列用 `<nav>`，頁尾用 `<footer>`

## 輸出格式

```
✅ 通過：[項目]
❌ 違規：[項目] → 提供修正後的 HTML 程式碼
⚠️  建議：[項目] → 優化方向
```
