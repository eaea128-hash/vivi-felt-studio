# Skill: Performance Optimization（Vivi 版）

**觸發時機**：`/performance-optimization`、載入慢、圖片大、Core Web Vitals、PageSpeed 分數

## Vivi 效能稽核重點

### 1. 圖片優化（最大影響項）
- 格式：優先 WebP（比 JPG 小 25-35%）
- 尺寸：作品展示圖最大 1200px 寬，縮圖 600px
- 壓縮：Squoosh / TinyPNG（目標 < 200KB / 張）
- `loading="lazy"`：首屏以外的圖片必須加

```html
<!-- 正確 -->
<img src="assets/images/work-01.webp" alt="博美犬羊毛氈" loading="lazy" width="600" height="400">
```

### 2. Core Web Vitals 目標
| 指標 | 目標 | 常見原因 |
|------|------|---------|
| LCP  | < 2.5s | 首屏大圖未優化 |
| INP  | < 200ms | JS 阻塞渲染 |
| CLS  | < 0.1  | 圖片無 width/height |

**修 CLS**：所有 `<img>` 必須有 `width` 和 `height` 屬性。

### 3. Cloudflare 快取
- 靜態資源自動快取（CSS/JS/圖片）
- 更新後若顯示舊版 → Cloudflare Caching > Purge Everything
- 開發期間啟用 Development Mode（暫停快取）

### 4. CSS / JS 載入順序
- `<link rel="stylesheet">` 放 `<head>`（避免 FOUC）
- `<script>` 放 `</body>` 前（或加 `defer`）
- 移除未使用的 CSS class（可用 Chrome Coverage 工具）

### 5. 字體優化
- Google Fonts 加 `display=swap`：
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap" rel="stylesheet">
```

## 執行步驟

1. PageSpeed Insights 測試首頁（Mobile 優先）
2. 找出 LCP 元素（通常是首屏大圖）
3. 列出圖片大小超過 200KB 的清單
4. 確認所有 `<img>` 有 `width` / `height` / `loading="lazy"`

## 輸出格式

```
## Vivi 效能稽核報告

### 🔴 立即處理
- [問題] → 預估改善：[說明]

### Quick Wins（本週可做）
- [問題] → 修法

### 基線分數
- PageSpeed Mobile: XX / Desktop: XX
- LCP: Xs | CLS: X.X
```

## 規則
- 只分析，不自動壓縮圖片或修改檔案
- 建議圖片工具：Squoosh（免費線上壓縮）
- 修復前執行 `/before-change`
