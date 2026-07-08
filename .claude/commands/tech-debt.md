# Skill: Technical Debt Analysis（Vivi 版）

**觸發時機**：`/tech-debt`、程式碼混亂、維護困難、CSS 衝突、重複程式碼

## Vivi 適用的負債類型

### 1. HTML 負債
- 多頁面重複的 navbar / footer 程式碼未同步（R-06）
- `href="#"` 假按鈕殘留（R-10）
- 缺少語意標籤（用 div 代替 nav / section）

### 2. CSS 負債
- 重複定義的 class（R-09）
- Hardcode 色碼（未使用 design token）
- 頁面專屬樣式混入全域 style.css

### 3. JS 負債
- `scripts/main.js` 功能過多（單一職責違反）
- 缺少錯誤處理的 async 函數
- 事件監聽器未清除

### 4. 圖片 / 資源負債
- 未壓縮的大尺寸圖片
- 未使用的圖片佔用儲存空間
- 非 WebP 格式（載入較慢）

## 執行步驟

1. 掃描指定頁面或 `styles/style.css` / `scripts/main.js`
2. 依類型列出問題，對照已知 Retro（R-01 ~ R-11）
3. 評估優先級
4. 提出本週可完成的 Quick Win 清單

## 輸出格式

```
## Vivi 技術債報告

### 立即處理
- [問題] → 對應 Retro：R-XX → 修法：[建議]

### Quick Wins（本週可做）
- [問題] → 修法：[建議]
```

## 規則
- 只分析，不自動修改
- 修復前執行 `/before-change`
