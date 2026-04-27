# Vivi Felt Studio — Claude 專案智慧文件

> 此檔案讓 Claude 每次對話都能快速掌握專案背景、避免重複犯錯、沿用已確認的決策。

---

## 🏷️ 專案基本資料

| 欄位 | 內容 |
|------|------|
| 專案名稱 | Vivi Felt Studio 薇薇V的羊毛氈手作坊 |
| 本地路徑 | `D:/AI專案/vivi-felt-studio/` |
| GitHub | https://github.com/eaea128-hash/vivi-felt-studio |
| 線上網址 | https://vivifirt.netlify.app/ |
| 部署方式 | GitHub push → Netlify 自動部署 |
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
| 客製訂單 | custom-order.html | `xzzpkgeo` |
| 課程報名 | courses.html | `xpwzrjln` |
| 企業包班 | corporate.html | `mqaoknlq` |
| 聯絡我們 | contact.html | `xldrkgbn` |

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

---

## 📌 版本歷程摘要

| 版本 | 日期 | 重點 |
|------|------|------|
| v1.0.0 | 2025-04-13 | 初版 18 頁完成 |
| v1.1.0 | 2025-04-27 | 圖片整合、按鈕修正、表單接 Email、Skill/Retro 建立 |
