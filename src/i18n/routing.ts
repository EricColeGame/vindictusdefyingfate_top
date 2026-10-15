import { defineRouting } from "next-intl/routing";

// 唯一真相源：最终语言集合（需与 src/locales/*.json、request.ts、language-switcher.tsx 保持一致）
export const locales = ["en", "ko", "ja", "de"] as const;

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
