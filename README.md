# 車盛 · 作品集 (Che Sung Portfolio)

以 [Astro](https://astro.build) 建立的靜態雙語作品集網站。

- **語言**：繁體中文（預設，`/`）＋ 英文（`/en/`）
- **分區**：現職作品（current）／轉職前作品（previous）
- **風格**：簡約專業

## 開發指令

```bash
npm install      # 安裝相依套件
npm run dev      # 本機開發伺服器（預設 http://localhost:4321）
npm run build    # 產生靜態檔到 dist/
npm run preview  # 預覽 build 結果
```

## 新增一個專案

在 `src/content/projects/` 新增一個 `.md` 檔，複製現有範例的格式即可：

| 欄位       | 說明                                                  |
| ---------- | ----------------------------------------------------- |
| `title`    | 專案名稱，需有 `zh` 與 `en`                           |
| `summary`  | 卡片上的一句話簡介，需有 `zh` 與 `en`                 |
| `category` | `current`（現職）或 `previous`（轉職前）              |
| `period`   | 時間區間（選填），例如 `2023 – 2024`                  |
| `tech`     | 技術標籤陣列（選填）                                  |
| `links`    | 連結陣列 `{ label, url }`（選填）                     |
| `featured` | `true` 會排在區塊最前面（選填，預設 `false`）         |
| `order`    | 排序數字，越小越前面（選填，預設 `100`）              |

## 想改網站文字 / 自我介紹

編輯 `src/i18n/ui.ts`（站名、Hero 介紹、區塊標題等都在這裡）。

## 部署

`npm run build` 後將 `dist/` 上傳到任何靜態主機（GitHub Pages、Netlify、Vercel、Cloudflare Pages 皆可）。
記得到 `astro.config.mjs` 設定 `site` 為你的正式網址。
