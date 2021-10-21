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
          text: 'Fountain 相关资源',
          link: '/guide/resources'
        },
        
      ]
    },
    {
      text: 'FAQ 常见问题',
      link: '/guide/faq'
    }
  ]
}
