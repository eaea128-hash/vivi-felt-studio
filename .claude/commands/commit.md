# Skill: Smart Commit（Vivi 版）

**觸發時機**：使用者說「commit」、「提交」、「存檔」、「push」

## 執行步驟

1. 執行 `git status` 確認變更清單
2. 執行 `git diff --stat` 確認變更量
3. **檢查是否有不該 commit 的檔案**：
   - 截圖、暫存圖片（*.jpg / *.png 在根目錄）
   - `.env`、含 Token 的設定檔
   - `drafts/` 內未完成草稿（視情況）
4. 依照變更內容判斷 commit type：
   - `feat:` 新增頁面或功能
   - `fix:` 修復顯示問題或 bug
   - `style:` 純 CSS / 排版調整
   - `content:` 文字、圖片、商品資訊更新
   - `docs:` CLAUDE.md / README 更新
   - `chore:` 設定、部署腳本
5. 撰寫繁體中文說明（what + why）
6. 指定檔案 add（不用 `git add -A`）
7. Commit 後自動觸發 Cloudflare Pages 部署（約 30-60 秒）

## Commit 格式

```
<type>: <英文簡述>

<繁體中文說明 what + why，1-2 句>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

## 範例

```
style: fix navbar overlap on announcement bar

修正公告列與 navbar 重疊問題（R-08），補足 body padding-top 確保所有頁面頂部不被蓋住。

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

## 規則

- **不使用 `git add -A`**，逐一確認每個變更檔案（避免 R-02）
- push 後提醒使用者前往 https://vivi-felt-studio.pages.dev 確認部署結果
- 若有敏感資料（Channel Access Token、API Key）自動警告並拒絕 commit
