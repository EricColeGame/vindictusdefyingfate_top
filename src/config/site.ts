export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    steam?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Vindictus: Defying Fate Wiki",
  shortName: "Vindictus: Defying Fate",
  logoText: "VDF",
  tagline: "Character Builds, Boss Guides & Combat Tips",
  description: "Your ultimate guide to Vindictus: Defying Fate! Explore character builds, combat tips, boss strategies, weapon guides, system requirements, and release news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vindictusdefyingfate.top",
  supportEmail: "support@vindictusdefyingfate.top",
  gameUrl: "https://vdf.nexon.com/",
  heroVideoId: "3BJB2uy_9to", // Vindictus: Defying Fate – Alpha Test Final Trailer (official channel)
  social: {
    discord: "https://discord.gg/vdefyingfate",
    youtube: "https://www.youtube.com/@VindictusDefyingFate",
    steam: "https://store.steampowered.com/app/2814860/Vindictus_Defying_Fate/",
    twitter: "https://twitter.com/V_DefyingFate",
    tiktok: "https://www.tiktok.com/@vindictus_defyingfate",
  },
  locales: ["en", "ko", "ja", "de"],
  defaultLocale: "en",
};
