const SECOND = 1;
const HOUR = SECOND * 60 * 60;

const CONFIG = {
  // profile setting (required)
  profile: {
    name: "awesomehill",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "햇병아리 개발자🐥",
    email: "",
    linkedin: "",
    github: "minisyu",
    instagram: "",
  },
  projects: [
    // {
    //   name: `morethan-log`,
    //   href: "https://github.com/morethanmin/morethan-log",
    // },
  ],
  // blog setting (required)
  blog: {
    title: "awesomehill.farm",
    description: "Hello World",
  },

  // CONFIG configration (required)
  link: "https://github.com/minisyu",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: HOUR, // revalidate time for [slug], index
}

module.exports = { CONFIG }
