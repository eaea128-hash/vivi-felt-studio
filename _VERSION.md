# Vivi Felt Studio — 版本紀錄

## 目前版本

```
版本號：v1.0.0
建立日期：2025-04-13
狀態：初版完成，待圖片整合與部署
```

---

## 版本歷程

| 版本 | 日期 | 說明 |
|------|------|------|
| v1.0.0 | 2025-04-13 | 初版建立：18 個頁面完整輸出，含前台、後台雛形與法律頁面 |

---

## v1.0.0 頁面清單（2025-04-13）

### 前台頁面
| 檔案 | 說明 |
|------|------|
| `index.html` | 首頁（Hero、服務介紹、精選作品、課程入口、見證等） |
| `custom-order.html` | 客製訂製（流程、費用表、詢問表單） |
| `courses.html` | 羊毛氈課程（4種課程、比較表、報名表單） |
| `corporate.html` | 企業包班（方案卡、流程說明、洽詢表單） |
| `membership.html` | 會員制度（等級制度、登入/註冊 Modal） |
| `faq.html` | 常見問題（分類篩選 Accordion） |
| `contact.html` | 聯絡我們（意圖選擇、Netlify 表單） |

### 後台雛形
| 檔案 | 說明 |
|------|------|
| `admin-dashboard.html` | 總覽儀表板（KPI、待辦、詢問列表） |
| `admin-orders.html` | 訂單管理（篩選、Data Table、側邊詳情） |
| `admin-courses.html` | 課程報名管理（場次卡、學員列表） |
| `admin-members.html` | 會員管理（等級分布、生日提醒） |
| `admin-content.html` | 內容管理（作品/課程/FAQ/Banner） |
| `admin-analytics.html` | 數據分析（KPI、圖表、流量來源） |

### 法律頁面
| 檔案 | 說明 |
|------|------|
| `privacy.html` | 隱私權政策 |
| `terms.html` | 服務條款 |
| `refund-policy.html` | 退款與取消政策 |

### 共用資源
| 檔案 | 說明 |
|------|------|
| `styles/style.css` | 全站設計系統（Design Tokens、元件庫） |
| `scripts/main.js` | 共用互動功能（導覽、表單、動畫） |

---

## 圖片資產規劃（待放置）

放置路徑：`assets/images/`

| 檔名（建議） | 用途 | 使用位置 |
|-------------|------|---------|
| `hero-bg.jpg` | 首頁主視覺背景 | index.html Hero 右側 |
| `about-vivi.jpg` | Vivi 本人工作照 | index.html About 區塊 |
| `work-01.jpg` ~ `work-06.jpg` | 精選作品照片 | index.html 精選作品區 |
| `work-pet-01.jpg` ~ `work-pet-03.jpg` | 寵物紀念作品 | index.html 寵物紀念特色區 |
| `course-beginner.jpg` | 入門課程照片 | courses.html |
| `course-intermediate.jpg` | 中階課程照片 | courses.html |
| `course-advanced.jpg` | 進階課程照片 | courses.html |
| `course-corporate.jpg` | 企業課程照片 | courses.html / corporate.html |
| `og-cover.jpg` | Social 分享預覽圖 | 所有頁面 Open Graph |
| `favicon.svg` | 網站圖示 | 所有頁面 |

---

## 技術規格

- **框架**：純 HTML / CSS / JS（無依賴框架）
- **表單**：Netlify Forms（`data-netlify="true"`）
- **字型**：Cormorant Garamond + Noto Serif TC + Noto Sans TC（Google Fonts）
- **部署目標**：Netlify / Vercel / GitHub Pages（靜態網站）
- **設計系統**：CSS Custom Properties（Design Tokens）
- **RWD 斷點**：960px（導覽收合）/ 768px（單欄）/ 640px（小螢幕）

---

## 品牌資訊

- **品牌名稱**：Vivi Felt Studio 薇薇V的羊毛氈手作坊
- **品牌標語**：手作的溫度，留給重要的人。
- **Instagram**：[@eaea_1282025](https://www.instagram.com/eaea_1282025/)
- **Facebook**：[Vivi Felt Studio](https://www.facebook.com/profile.php?id=61559206236758)
- **LINE**：建置中

---

*此檔案為版本管理戳章，請於每次重大更新後同步更新。*
