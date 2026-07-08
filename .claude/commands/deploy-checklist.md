# Skill: Deploy Checklist（Vivi Felt Studio 版）

**觸發時機**：`deploy`、`上線`、`部署`、`push 前`

## 角色定位

每次 git push 前逐項核對，確保網站正常上線。不允許跳過任何項目。

---

## Phase 1｜HTML 頁面核對

```
□ 修改的頁面是否有在瀏覽器本機預覽確認過？
□ Console 無紅色錯誤（favicon 404 除外）
□ 若有修改 navbar → 確認所有 19 頁 navbar 已同步（R-06）
  檢查指令：grep -l "navbar" *.html
□ 若有新增 anchor 連結 → 確認目標元素有對應 id（R-07）
□ 無 href="#" 假按鈕殘留（R-10）
  檢查指令：grep -n 'href="#"' *.html
```

---

## Phase 2｜CSS 核對

```
□ 新增 CSS 元件前是否已確認無重複定義（R-09）
  檢查指令：grep -n "class名稱" styles/style.css
□ 色彩使用 design system 變數（--cream / --camel / --espresso 等），無 hardcode 色碼
□ body padding-top 正確：
  - 一般頁面：72px
  - index.html（has-announcement）：116px
□ fixed 元素 z-index 正確：
  - .navbar：z-index 1000
  - .announcement-bar：z-index 1100
```

---

## Phase 3｜圖片核對

```
□ 所有圖片位於 assets/images/（根目錄無 .jpg/.png）（R-01）
  檢查指令：ls *.jpg *.png *.webp 2>/dev/null
□ 新圖片已記錄在 CLAUDE.md 圖片對應表
□ img src 路徑為相對路徑（assets/images/xxx）
□ 新圖片已壓縮為 .webp 格式（建議）
```

---

## Phase 4｜表單核對

```
□ Formspree ID 正確：xrervybz（4 個表單 + 會員預登記共用）
□ form action 未被意外清空（R-04）
□ 表單成功畫面有下一步指引（R-11）
□ 防重複提交邏輯存在（form.dataset.submitting）
□ Google Apps Script 端點未變動：
  https://script.google.com/macros/s/AKfycbzpTF810MngB7Iw3z2quyFec_K4l-5G14JvwSDl0d9NiZbWhSzlqJa-rthZFQyLOIL-/exec
```

---

## Phase 5｜GA4 核對

```
□ 修改的 HTML 頁面有無 GA4 追蹤碼（G-N5KTMTEY1C）
  共需安裝於 19 頁
  檢查指令：grep -L "G-N5KTMTEY1C" *.html
```

---

## Phase 6｜Git 核對

```
□ git status 確認無多餘檔案被加入（截圖、暫存圖片等）
□ 敏感資料未被 commit（Channel Token、API Key）
□ _VERSION.md 版本號已更新
□ CLAUDE.md 若有新 Retro 已記錄
```

---

## Phase 7｜Push 後確認

```
□ 前往 https://vivi-felt-studio.pages.dev 確認首頁正常
□ 確認修改的頁面功能正常
□ 手機版面不明顯跑版
□ Console 無新增紅色錯誤
```

---

## 完成標準

所有 □ 打勾後，才算部署完成。
任何一項 ❌ 必須修復後重新確認，不帶著已知問題上線。
