import type { UserConfig } from 'vitepress'

import { nav } from './config/nav'

const config: UserConfig = {
  lang: 'zh-CN',
  title: 'Fountain',
  description: '剧本标记语言 Fountain 中文手册',
  themeConfig: {
    repo: 'advjs/fountain',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页',
    lastUpdated: '上次更新',

    nav
  },
}

export default config
