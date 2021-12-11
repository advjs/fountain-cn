import type { UserConfig } from "vitepress";

import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";

const config: UserConfig = {
  lang: "zh-CN",
  title: "Fountain",
  description: "剧本标记语言 Fountain 中文手册",
  themeConfig: {
    iconClass: "i-ri-book-line",

    repo: "advjs/fountain-cn",

    docsDir: "docs",

    editLinks: true,
    editLinkText: "帮助我们改善此页",
    lastUpdated: "上次更新",

    nav,
    sidebar,
  },
};

export default config;
