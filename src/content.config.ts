import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 雙語文字：每個欄位都同時提供中文 (zh) 與英文 (en)
const bilingual = z.object({
	zh: z.string(),
	en: z.string(),
});

const projects = defineCollection({
	// 讀取 src/content/projects/ 底下的所有 .md 檔
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: () =>
		z.object({
			// 專案名稱（雙語）
			title: bilingual,
			// 一句話簡介（雙語）— 顯示在卡片上
			summary: bilingual,
			// 分區：current = 現職作品；previous = 轉職前作品
			category: z.enum(["current", "previous"]),
			// 時間區間，例如「2023 – 2024」或「2022」
			period: z.string().optional(),
			// 使用的技術 / 工具
			tech: z.array(z.string()).default([]),
			// 相關連結（GitHub、線上 Demo、文章…）
			links: z
				.array(
					z.object({
						label: z.string(),
						url: z.string().url(),
					}),
				)
				.default([]),
			// 是否為精選（精選會排在區塊最前面）
			featured: z.boolean().default(false),
			// 排序用：數字越小越前面（同 featured 狀態下）
			order: z.number().default(100),
		}),
});

export const collections = { projects };
