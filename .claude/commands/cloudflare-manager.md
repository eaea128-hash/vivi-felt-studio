# Skill: Cloudflare Manager（Vivi 版）

**觸發時機**：`/cloudflare-manager`、部署問題、網站沒更新、Cloudflare Pages、DNS

## Vivi 專案 Cloudflare 基本資訊

- 平台：Cloudflare Pages
- 網址：https://vivi-felt-studio.pages.dev
- 部署方式：GitHub push → 自動部署（約 30-60 秒）
- Build：無（純靜態 HTML，無 build command）

## 常見問題排查

### 網站沒更新
```
1. 確認 git push 有成功（git log --oneline -3）
2. 前往 Cloudflare Pages > Deployments 確認最新部署狀態
3. 若顯示 Success 但畫面舊 → 強制重新整理（Ctrl+Shift+R）
4. 若仍是舊版 → Cloudflare Pages > Caching > Purge Everything
```

### 部署失敗
```
1. Cloudflare Pages > Deployments > Failed > 查看 Build log
2. 常見原因：
   - 檔案路徑大小寫不符（Windows 不分大小寫，Linux 分）
   - 圖片檔名含空格或特殊字元
3. 修正後重新 git push 即可
```

### 自訂網域設定
```
□ CNAME 指向 vivi-felt-studio.pages.dev
□ SSL 模式：Full（Cloudflare 後台 > SSL/TLS > Overview）
□ HTTPS 強制重新導向：已啟用
```

### 快取控制
- 靜態資源（CSS / JS / 圖片）Cloudflare 預設快取 4 小時
- 修改後若客戶看到舊版：Cloudflare > Caching > Purge Everything
- 開發期間建議開啟「Development Mode」（暫時停用快取）

## 部署後確認清單

```
□ https://vivi-felt-studio.pages.dev 首頁正常顯示
□ 修改的頁面功能正常
□ 手機版不明顯跑版
□ Console 無新增紅色錯誤
□ 表單可正常送出（測試一次）
```
