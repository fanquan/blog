module.exports = [
  {text: '导读', link: '/'},
  {
    text: '页面', 
    link: '/ui/',
    items: [
      {text: 'HTML', link: '/pages/1603543031000/'},
      {text: 'CSS', link: '/pages/6809794/'},
    ]
  },
  {
    text: 'JS基础与进阶',
    link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: 'Javascript', items: [
        {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
        {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
      ]},
      {text: 'ES6.7.8.9系列', items:[
        {text: 'ES2020新特性', link: '/pages/a7a2d1/'},
        {text: '《JavaScript高级程序设计》笔记', link: '/note/js/'}
      ]},
      {text: 'Typescript', items:[
        {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
        {text: '《JavaScript高级程序设计》笔记', link: '/note/js/'},
        {text: '《ES6 教程》笔记', link: '/note/es6/'},
        {text: '《Vue》笔记', link: '/note/vue/'},
        {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
        {text: '小程序笔记', link: '/note/wx-miniprogram/'},
      ]}
    ]
  },
  {
    text: '框架', 
    link: '/framework/',
    items: [
      {text: 'Vue系列', items:[
        {text: 'vue封装UI组件',link: '/pages/e50055/'},
        {text: '盘点Vue3新特性',link: '/pages/768195/'},
      ]},
      {text: 'React系列', items:[
        {
          text:"React基础-jsx",
          link: '/pages/160385832/'
        }
      ]},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {
    text: '算法', 
    link: '/leetcode/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '面试', link: '/pages/aea6571b7a8bae86/'},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {
    text: '笔记',
    link: '/notes/',
    items: [
      // {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      {text: '工具', link: '/pages/60f971/'},
    ]
  },
  {
    text: '工程化', 
    link: '/build/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '面试', link: '/pages/aea6571b7a8bae86/'},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {
    text: '面试', 
    link: '/interview/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '面试', link: '/pages/aea6571b7a8bae86/'},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {
    // 收藏的技术文档、第三方库、好的网站、start高的项目
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  },
  // {text: '关于', link: '/about/'}
]
