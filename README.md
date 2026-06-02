# 福岡七日自駕遊網頁 - 發布與使用指南

這是一個為**福岡七日自駕遊**設計的高質感、響應式單頁網頁（SPA）。它包含了互動式每日行程切換、日本自駕指南、互動式行前清單（具備瀏覽器儲存進度功能）以及深淺色主題切換。

本網頁完全由靜態網頁技術（HTML5, CSS3, JavaScript）建構，可以**完全免費**地部署到網路上，讓外面的朋友與家人瀏覽。

---

## 🚀 快速發布指南（免費平台）

以下提供兩種最推薦的免費發布方式，從最簡單的「拖放即發布」到專業的「Git 連動發布」：

### 方案 A：使用 Netlify Drop（最簡單，30 秒完成發布）
Netlify 提供一個叫做 Netlify Drop 的服務，你不需要安裝任何軟體，只需將網頁資料夾拖放到網頁瀏覽器中即可發布！

1. 準備好你的網頁資料夾（確保裡面有 `index.html`、`style.css`、`app.js`）。
2. 開啟瀏覽器並造訪 [Netlify Drop (netlify.com/drop)](https://app.netlify.com/drop)。
3. 將你的**「福岡自駕遊」資料夾整個拖曳**到網頁中的上傳框中。
4. 系統會自動開始上傳與部署，大約 5-10 秒後，你就會得到一個專屬的網址（例如：`https://wonderful-travel-12345.netlify.app`）！
5. **提示**：建議註冊一個免費的 Netlify 帳號，這樣你可以永久保留這個網頁，並修改網址名稱（例如改成 `fukuoka-drive-2026.netlify.app`）。

---

### 方案 B：使用 GitHub Pages（適合後續會持續更新內容的使用者）
如果你擁有 GitHub 帳號，這能讓你在電腦上修改代碼後，自動同步更新線上網頁。

1. **建立 GitHub 倉庫 (Repository)**:
   - 登入 GitHub，點擊右上角 `New` 建立新的 Repository。
   - 將 Repository 命名為 `fukuoka-drive`（或任何你喜歡的名字）。
   - 將權限設為 **Public**，然後點擊 `Create repository`。
2. **上傳檔案**:
   - 在新建立的倉庫頁面中，點擊 `uploading an existing file`。
   - 將本資料夾底下的所有檔案 (`index.html`, `style.css`, `app.js`) 上傳上來，並 Commit 提交。
3. **開啟 GitHub Pages**:
   - 進入該 Repository 的 **Settings** (設定) 頁面。
   - 點擊左側選單的 **Pages**。
   - 在 **Build and deployment** 下的 **Branch**，將 None 改成 **main** (或 master)，並點擊 **Save**。
4. **完成發布**:
   - 稍等約 1 分鐘，重新整理頁面。你會在 Pages 設定上方看到專屬的網址：`https://你的帳號.github.io/fukuoka-drive/`。

---

## 🛠️ 本地預覽與修改

在還沒有上傳到免費平台前，你可以直接在電腦上雙擊 `index.html` 檔案。它會在你的瀏覽器中開啟，讓你在本地端預覽完整的互動效果：

- **修改行程內容**：直接打開 `app.js`，找到頂部的 `itineraryData` 物件。你可以在各個 Day 的欄位中，修改景點名稱、行車時間、里程、過路費以及 timeline 中的細節項目。網頁會自動更新渲染。
- **修改自駕指南與行前準備**：直接打開 `index.html`，編輯對應區塊的文字或增減 `<input type="checkbox">` 的行前準備項目。

## 🎨 網頁設計特色

1. **雙色調主題切換**：點擊導覽列右上角的 ☀️/🌙 按鈕，即可切換為舒適的暗色夜間模式或清爽的亮色模式。
2. **地圖同步互動**：在「自駕行程詳細規劃」點擊 Day 1 - Day 7 時，上方地圖對應的行駛軌跡節點會自動發光標示；同時點擊地圖上的節點，行程表也會自動切換至該天，並滾動到可視範圍。
3. **進度自動儲存**：在「行前準備檢查表」中勾選任何項目，瀏覽器會使用 LocalStorage 自動記錄。即使重新整理網頁，進度也不會遺失。
