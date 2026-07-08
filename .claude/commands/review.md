# Skill: Code Review（Vivi 版）

**觸發時機**：「review」、「檢查」、「這樣對嗎」、「確認一下」

## 檢查清單

### 🎨 設計系統一致性
- [ ] 色彩使用 CSS 變數（`--cream` / `--camel` / `--espresso` 等），無 hardcode 色碼
- [ ] 字型使用 `--font-serif`（英文標題）、`--font-zh`（中文）
- [ ] 間距與 padding 風格與現有頁面一致
- [ ] 新元件的 hover 動畫與全站風格一致（柔和，非跳動）

### 📄 HTML 正確性
- [ ] 無 `href="#"` 假按鈕（R-10）
- [ ] 新增 anchor 連結的目標元素有對應 `id`（R-07）
- [ ] img 有 `alt` 屬性
- [ ] img src 使用相對路徑 `assets/images/xxx`
- [ ] 中文內容為**繁體中文**

### 🧩 CSS 安全性
- [ ] 未重複定義現有 class（先 grep 確認）（R-09）
- [ ] fixed 元素 z-index 未破壞 navbar(1000) / announcement(1100) 層級
- [ ] 新增 fixed/sticky 元素有對應調整 `body padding-top`（R-08）

### 📬 表單
- [ ] Formspree action ID 正確（`xrervybz`）
- [ ] 有防重複提交邏輯
- [ ] 成功畫面有下一步指引（R-11）
- [ ] 無敏感資料暴露在前端（API Key、Token）

### ⚙️ JavaScript
- [ ] 非同步操作有 try-catch 或 .catch()
- [ ] 無 console.error 被 silently 吃掉
- [ ] 用戶看到的錯誤訊息用繁體中文

### 🚀 部署準備
- [ ] 圖片在 `assets/images/`（根目錄無圖片）（R-01）
- [ ] 新頁面已加入 GA4 追蹤碼（G-N5KTMTEY1C）

## 輸出格式

```
✅ 通過：[項目]
⚠️ 建議：[項目] — [說明]
❌ 問題：[項目] — [說明] → 建議修法
```
