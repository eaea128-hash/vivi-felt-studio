# Vivi Felt Studio — Claude 專案智慧文件

> 此檔案讓 Claude 每次對話都能快速掌握專案背景、避免重複犯錯、沿用已確認的決策。

---

## 🏷️ 專案基本資料

| 欄位 | 內容 |
|------|------|
| 專案名稱 | Vivi Felt Studio 薇薇V的羊毛氈手作坊 |
| 本地路徑 | `D:/AI專案/vivi-felt-studio/` |
| GitHub | https://github.com/eaea128-hash/vivi-felt-studio |
| 線上網址 | https://vivi-felt-studio.pages.dev |
| 部署方式 | GitHub push → Cloudflare Pages 自動部署 |
| 聯絡 Email | eaea128@gmail.com |
| Instagram | https://www.instagram.com/eaea_1282025/ |
| Facebook | https://www.facebook.com/profile.php?id=61559206236758 |

---

## 📁 目錄結構

```
vivi-felt-studio/
├── index.html              ← 首頁
├── custom-order.html       ← 客製訂製
├── courses.html            ← 羊毛氈課程
├── corporate.html          ← 企業包班
├── membership.html         ← 會員制度
├── faq.html                ← 常見問題
├── contact.html            ← 聯絡我們
├── admin-*.html            ← 後台（6頁，純前端雛形）
├── privacy.html            ← 隱私權政策
├── terms.html              ← 服務條款
├── refund-policy.html      ← 退款政策
├── styles/style.css        ← 全站設計系統（勿大幅改動變數）
├── scripts/main.js         ← 共用互動邏輯
├── assets/images/          ← 所有圖片集中此處
├── _VERSION.md             ← 版本歷程
└── CLAUDE.md               ← 本文件（專案智慧）
```

---

## 🎨 設計系統（禁止隨意更改）

```css
/* 主色 */
--cream: #F7F3EE      /* 奶茶米 */
--oat: #F0E9DF        /* 燕麥白 */
--sand: #E8DDD2       /* 淡駝色 */
--camel: #C9B49A      /* 駝色 */

/* 點綴色 */
--warm-brown: #8B6B52
--espresso: #3A2E25   /* 深棕，主要文字 */
--caramel: #C9A96E    /* 金棕 */

/* 字型 */
--font-serif: 'Cormorant Garamond'  /* 英文標題 */
--font-zh: 'Noto Serif TC'          /* 中文主要 */
```

---

## 🖼️ 圖片對應表（assets/images/）

| 檔名 | 內容 | 使用位置 |
|------|------|---------|
| `hero-bg.jpg` | Vivi 本人 + 貓咪作品 | 首頁 Hero 右側 |
| `about-vivi.jpg` | Vivi 工作照 | 首頁 About 區 |
| `work-01.jpg` | 梅花鹿羊毛氈 | 精選作品 / 課程進階 |
| `work-02.jpg` | 藍色翅膀狐狸 | 精選作品 |
| `work-03.jpg` | 羊毛氈包包（黑） | 精選作品 |
| `work-04.jpg` | 兩隻兔子擁抱 | 精選作品 |
| `work-05.jpg` | 鯨魚羊毛氈 | IG 格 |
| `work-06.jpg` | 黃色小女孩人偶 | 課程入門 |
| `work-animal-dog.jpg` | 柴犬動物角色 | 課程中階 |
| `work-animal-panda.jpg` | 貓熊動物角色 | 客製訂製頁 |
| `work-bag-gradient.jpg` | 粉藍漸層手提包 | 精選作品 Card3 |
| `work-bag-face.jpg` | 黃色人臉小包 | IG 格 |
| `work-slippers.jpg` | 黑色羊毛氈拖鞋 | IG 格 |
| `work-pet-01.jpg` | 白兔裱框（寵物紀念） | 寵物紀念特色區 |
| `work-pet-02.jpg` | 柴犬（寵物紀念） | 精選作品 Card1 |
| `work-pet-03.jpg` | 博美頭像（寵物紀念） | 精選作品 Card2 |
| `pendant-01~04.jpg` | 吊飾系列 ×4 | 精選作品 Card4（2×2格） |
| `course-beginner.jpg` | 入門課程圖 | courses.html |
| `course-intermediate.jpg` | 中階課程圖 | courses.html |

---

## 📬 表單系統

**方式：Formspree（直接寄信到 eaea128@gmail.com）**

| 表單 | 頁面 | Formspree ID |
|------|------|-------------|
| 客製訂單 | custom-order.html | `xrervybz` |
| 課程報名 | courses.html | `xrervybz` |
| 企業包班 | corporate.html | `xrervybz` |
| 聯絡我們 | contact.html | `xrervybz` |

> ⚠️ 如需更換 Email，登入 https://formspree.io → 各表單 Settings → Submission Email

---

## 🚀 批次部署指令

```powershell
# 一鍵部署（PowerShell）
cd "D:\AI專案\vivi-felt-studio"
.\deploy.ps1 "更新說明文字"

# 或手動執行
git add -A
git commit -m "描述這次的修改"
git push
# → Netlify 自動在 30~60 秒內完成部署
```

---

## ✅ SKILLS（已確認可用的做法）

### S-01｜新增圖片到網站
1. 把圖片存到 `assets/images/檔名.jpg`
2. 更新對應 HTML 的 `<img src="assets/images/檔名.jpg">`
3. `git add -A && git commit -m "新增圖片" && git push`

### S-02｜修改某頁面文字
1. 用 Read 工具讀取目標 HTML 確認行號
2. 用 Edit 工具做精準修改（避免整檔替換）
3. 確認預覽 → commit + push

### S-03｜新增表單欄位
1. 在 HTML `<form>` 內加 `<input name="欄位名">`
2. Formspree 會自動讀取，不需後端設定

### S-04｜更新版本號
1. 修改 `_VERSION.md` 的版本表
2. 修改各 HTML 檔頂端的版本注釋 `Version : vX.X.X`

### S-05｜CSS 新元件
- 全站 CSS 在 `styles/style.css`，新元件加在檔案最後
- 頁面專屬樣式寫在各 HTML 的 `<style>` 區塊內

---

## 🔴 RETRO（已知錯誤與避免方式）

### R-01｜圖片放錯位置
- **問題**：圖片放在根目錄而非 `assets/images/`，導致路徑錯誤
- **避免**：所有圖片一律放 `assets/images/`，根目錄不應有 `.jpg/.png`
- **檢查**：`ls D:/AI專案/vivi-felt-studio/*.jpg` 應為空

### R-02｜git add -A 把雜檔加進去
- **問題**：截圖、CLAUDE.md 草稿等被加入 commit
- **避免**：commit 前先 `git status` 確認，非必要檔案加入 `.gitignore`
- **急救**：`git rm --cached 檔名` 移出暫存區再重新 commit

### R-03｜LINE 連結空的被點到
- **問題**：`href="#"` 讓 LINE 按鈕點了沒有反應
- **已修正**：加上 `onclick="return false;"` + `opacity:0.4` 灰掉
- **未來**：取得 LINE 官方帳號後更新為正確連結

### R-04｜表單沒寄到 Email
- **問題**：Netlify Forms 只存在後台，沒有自動發信
- **已修正**：改用 Formspree，直接寄到 Gmail
- **避免重設**：勿將 `action` 屬性改回空白或 `/`

### R-05｜context 壓縮後遺失圖片清單
- **問題**：對話壓縮後，前幾輪上傳的圖片無法取回
- **避免**：圖片上傳後立即記錄在此 CLAUDE.md 圖片對應表
- **補救**：請使用者重新上傳圖片，或讀取 `assets/images/` 目錄確認

### R-06｜每頁 navbar / footer 不同步
- **問題**：index.html 加了 FAQ 連結，其他頁面沒更新
- **避免**：導覽列變動時，用 `sed` 或 Agent 批次更新所有 HTML
- **檢查指令**：`grep -l "faq.html" *.html`

### R-07｜未加 id="about" anchor
- **問題**：footer 連結 `index.html#about` 無效，因為 about 區缺少 id
- **已修正**：加上 `id="about"`
- **通則**：footer/nav 中的 anchor 連結，必須確認目標元素有對應 id

### R-08｜公告列/Banner 與 navbar 重疊（z-index 誤解）
- **問題**：navbar 是 `position:fixed; top:0; z-index:1000`，公告列/建置中 banner 原本在 normal flow，看得到但點不到（被 navbar 攔截）。加了 `z-index:1100` 後反而蓋住 navbar 連結。
- **根因**：`body` 沒有 `padding-top`，所有內容從 y=0 開始，跟 fixed navbar 撞在一起
- **已修正**：
  1. `body { padding-top: 72px }` 全站補足 navbar 高度
  2. 公告列改為 `position:fixed; top:0; z-index:1100`（移出 normal flow）
  3. 首頁 body 加 `class="has-announcement"`
  4. `body.has-announcement { padding-top: 116px }` + `.navbar { top: 44px }`
  5. `.page-hero { padding-top: 88px }` 從原本 160px 扣掉 body 已補的 72px
- **通則**：新增任何 fixed/sticky 頂部元素，必須同步調整 body `padding-top` 與 navbar `top`

### R-09｜重複 CSS 定義導致後者覆蓋前者
- **問題**：`style.css` 中 `.form-success` 定義了兩次，第二個在後面，把第一個（含動畫）完全覆蓋掉
- **已修正**：刪除舊定義，合併成一個，支援 `.success-icon`/`h3`（舊 HTML）與 `.__icon`/`.__title`（新 HTML）兩種寫法
- **避免**：新增 CSS 元件前，先 `grep -n "class名稱" styles/style.css` 確認是否已存在

### R-10｜按鈕 `href="#"` 點了沒反應（假按鈕）
- **問題**：會員頁所有 CTA 按鈕都是 `href="#"`，點了頁面只是跳回最上面，給使用者「網站壞了」的感受
- **已修正**：全部改為有意義的連結（`#prereg`、`contact.html`、`courses.html`）
- **通則**：任何 `href="#"` 在上線前必須替換，允許暫時 `href="contact.html"` 作為過渡

### R-11｜表單成功畫面缺少下一步指引
- **問題**：四個表單頁送出後只顯示「謝謝你的訊息」，使用者不知道接下來會發生什麼，也沒有行動引導
- **已修正**：每頁各自添加：處理時間說明、IG 連結、下一步提示文字（.next-step 區塊）
- **通則**：表單成功畫面應包含：① 確認已收到 ② 預期等待時間 ③ 下一步行動

---

---

## 🔐 AI Agent 治理（三階段）

### 1｜設計期間（Design-time）— 入口把關
> 所有改變 Agent 行為的 artefact 必須走版控 + 審核，未審查的能力不進 production

| 項目 | Vivi 實作方式 |
|------|-------------|
| Prompt 版控 | `CLAUDE.md` 透過 git 管理，每次修改需 commit |
| 工具白名單 | Claude 僅操作 `D:/AI專案/vivi-felt-studio/` 以下檔案 |
| 禁止行為 | 不處理財務資料、密碼、API 金鑰（請勿貼入對話）|
| 人工核准 | 所有 `git push` 及部署由使用者手動執行，Claude 不自動推送 |

### 2｜執行防護（Runtime）— 輸入遮罩 + 輸出護欄
> 每次對話都有風險暴露機率，確保有問題的內容不進出

| 項目 | Vivi 實作方式 |
|------|-------------|
| 資料外流防護 | 表單僅收 name/email/message，Formspree 儲存 30 天可刪除 |
| Google OAuth | 僅讀取 name/email/picture，不儲存後端，session 存 localStorage |
| 輸出可信度 | Claude 只提建議與程式碼，最終判斷與執行由使用者決定 |
| 建議 vs 決策界線 | Claude **不可**自行：刪除檔案、推送程式碼、送出表單 |

### 3｜運營期監控（Observability）— 可追溯 + 緊急中止
> 出事能查清楚、能立刻停損、讓下一次不再發生

| 項目 | Vivi 實作方式 |
|------|-------------|
| 可追溯性 | Git history + `_VERSION.md` + `CLAUDE.md` Retro 記錄 |
| 流量監控 | Cloudflare Pages Analytics（內建，免費） |
| 費用警示 | Google Cloud → Budgets & alerts，上限 NT$300/月 |
| 緊急停用 | Cloudflare Pages → 停用部署 / Formspree → 停用表單 |
| 異常回流 | 發現問題 → 新增 Retro 條目 → 更新 CLAUDE.md → commit |

### 供應商資料政策
| 供應商 | 資料範圍 | 政策連結 |
|--------|---------|---------|
| Cloudflare Pages | 靜態檔案托管，不收集訪客個資 | cloudflare.com/privacypolicy |
| Formspree | 表單資料儲存 30 天，可後台刪除 | formspree.io/legal/privacy-policy |
| Google OAuth | 僅 name/email/picture，不用於廣告 | policies.google.com/privacy |
| GitHub | 程式碼版控，public repo | docs.github.com/site-policy |

---

## 📌 版本歷程摘要

| 版本 | 日期 | 重點 |
|------|------|------|
| v1.0.0 | 2025-04-13 | 初版 18 頁完成 |
| v1.1.0 | 2025-04-27 | 圖片整合、按鈕修正、表單接 Email、Skill/Retro 建立 |
| v1.2.0 | 2026-04-28 | Google OAuth、商品篩選、會員等級、AI Agent 治理文件 |
| v1.3.0 | 2026-05-23 | 首頁結構重整、GA4、GAS 後台、全站 UX 強化（按鈕/表單/hover/trust）、navbar 排版修正 |
