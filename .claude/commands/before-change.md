# Skill: Before Making Changes（Vivi 版）

**觸發時機**：每次修改 HTML、CSS、JS 或任何檔案前

## 執行步驟

1. **確認範圍**：明確說明「我打算修改哪個檔案的哪個區塊」
2. **說明原因**：解決什麼問題？
3. **列出風險**：此修改可能影響哪些頁面或功能？
4. **Navbar / Footer 同步確認**：若修改涉及導覽列或頁尾，列出所有需同步的 HTML 頁面（共 19 頁）
5. **確認 git 狀態乾淨**：提醒先 commit 目前狀態再動手
6. **等待確認**：影響 > 2 個頁面時，先列計畫再問使用者

## 範例輸出格式

```
📋 修改計畫
- 目標：index.html → .hero 區塊文字
- 原因：更新主打文案
- 影響：僅 index.html，不影響其他頁面
- 風險：低（純文字修改）
→ 確認繼續？
```

## Vivi 專案高風險操作清單

| 操作 | 風險 | 必要確認 |
|------|------|---------|
| 修改 `.navbar` | 高 | 確認所有 19 頁 navbar 同步（R-06）|
| 修改 `body padding-top` | 高 | 確認公告列 + navbar 排版不爆（R-08）|
| 修改 `styles/style.css` 變數 | 高 | 先 grep 確認無重複定義（R-09）|
| 修改 Formspree action ID | 高 | 確認 4 個表單 ID 一致（`xrervybz`）|
| 刪除或搬移圖片 | 中 | 確認所有 `<img src>` 路徑仍有效 |
| 修改 `z-index` | 中 | 確認 fixed 元素層級（navbar 1000 / announcement 1100）|
