// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 主站（使用者網站）網址。因為是 帳號.github.io，base 為根目錄 '/'，不需另設 base。
  site: 'https://jason21403019.github.io',
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en'],
    routing: {
      // 預設語言（中文）不加前綴：/  ；英文在 /en/
      prefixDefaultLocale: false,
    },
  },
});
