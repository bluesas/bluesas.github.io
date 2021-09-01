module.exports = {
  head: [
    [
      'link',
      {rel: 'icon', href: '/assets/favicon.jpg'}
    ]
  ],
  title: 'Bluesas 的学习笔记',
  description: 'Study, work, thinking',
  themeConfig: {
    logo: '/assets/favicon.jpg',
    sidebar: 'auto'
  },
  markdown: {
    lineNumbers: true
  },
  lastUpdated: 'Last Updated', // string | boolean
}