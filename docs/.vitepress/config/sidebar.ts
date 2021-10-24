export const sidebar = {
  '/guide': getGuideSidebar(),
}

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        {
          text: '为什么有 Fountain CN？',
          link: '/guide/why'
        },
        {
          text: '什么是 Fountain？',
          link: '/guide/'
        },
        {
          text: '语法',
          link: '/guide/syntax'
        },
        {
          text: '如何...',
          link: '/guide/howto'
        },
        {
          text: 'Fountain 相关资源',
          link: '/guide/resources'
        },
        {
          text: '术语',
          link: '/guide/term'
        },
      ]
    },
    {
      text: 'FAQ 常见问题',
      link: '/guide/faq'
    }
  ]
}
