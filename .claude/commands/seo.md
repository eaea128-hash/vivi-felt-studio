# Skill: SEO Audit（Vivi Felt Studio 版）

**觸發時機**：`/seo`、提到 SEO、搜尋排名、Google 找不到網站、meta tags、schema、sitemap

## 初始設定

- 網域：`https://vivi-felt-studio.pages.dev`
- 頁面：index、custom-order、courses、corporate、membership、faq、contact、blog-*（3篇）、admin-*（6頁）
- 目標關鍵字：羊毛氈、寵物紀念、療癒手作、羊毛氈課程、台灣手工藝

## 稽核範圍（9 大項目）

✓ 每頁 title、meta description、canonical URL
✓ Open Graph & Twitter Card（FB 分享預覽很重要！）
✓ JSON-LD 結構化資料（LocalBusiness、Course、Product、Article）
✓ robots.txt 與 sitemap.xml 是否存在
✓ 圖片 alt text（assets/images/ 下所有圖片）
✓ H1 標題使用與層級
✓ 內部連結結構
✓ HTTPS 與行動裝置友善性
✓ 頁面載入速度（WebP 圖片格式）

## Vivi 特別注意

- **FB 分享**：所有頁面應有 `og:image`（建議使用作品照）
- **在地 SEO**：加入 LocalBusiness schema（服務地區、聯絡資訊）
- **課程 schema**：courses.html 應有 Course 結構化資料
- **部落格**：blog-*.html 應有 Article schema

## 輸出格式

```
✅ 通過：[項目]
❌ 缺失：[項目] → 直接提供可插入的 HTML 程式碼
⚠️  建議：[項目] → 優化方向
```

## 指令範例

- `/seo` — 完整 19 頁稽核
- `/seo images` — 查圖片 alt text
- `/seo og` — 查 Open Graph（FB 分享預覽）
- `/seo schema` — 查結構化資料
