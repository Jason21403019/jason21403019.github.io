// 介面文字的雙語對照表。
// 之後要改網站標題、自我介紹、區塊標題，都在這裡調整即可。

export const languages = {
	"zh-Hant": "中文",
	en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "zh-Hant";

export const ui = {
	"zh-Hant": {
		"site.name": "哲菘 · 作品集",
		"site.title": "哲菘的開發作品集",
		"site.description": "我在職涯中開發與維護的專案整理。",

		"hero.greeting": "你好，我是",
		"hero.name": "哲菘",
		"hero.tagline": "前端工程師 · 作品集",
		"hero.intro": "在這邊整理一下自己在職中所製作的專案，也把轉職前的放在底部，方便未來回顧。",

		"section.current.title": "現職作品",
		"section.current.desc": "目前任職期間開發與維護的專案。",
		"section.previous.title": "轉職前作品",
		"section.previous.desc": "轉職進入前端工程師之前完成的作品。",

		"card.role": "角色",
		"card.tech": "使用技術",
		"card.empty": "這個區塊還沒有專案，之後在 src/content/projects/ 新增 .md 檔即可。",

		"nav.skipToContent": "跳到主要內容",
		"footer.builtWith": "使用 Astro 建置",
	},
	en: {
		"site.name": "CHE-SUNG · Portfolio",
		"site.title": "CHE-SUNG's Developer Portfolio",
		"site.description": "A collection of projects I have built and maintained.",

		"hero.greeting": "Hi, I'm",
		"hero.name": "CHE-SUNG",
		"hero.tagline": "Software Engineer · Portfolio",
		"hero.intro":
			"A curated list of projects I have developed and maintained throughout my career. Click any project to learn more. (Edit this intro in src/i18n/ui.ts.)",

		"section.current.title": "Current Work",
		"section.current.desc": "Projects built and maintained in my current role.",
		"section.previous.title": "Before Career Change",
		"section.previous.desc": "Work completed before moving into software development.",

		"card.role": "Role",
		"card.tech": "Tech",
		"card.empty": "No projects here yet — add a .md file under src/content/projects/.",

		"nav.skipToContent": "Skip to main content",
		"footer.builtWith": "Built with Astro",
	},
} as const;

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)["zh-Hant"]): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}
