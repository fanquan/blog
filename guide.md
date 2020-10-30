## markdown 拓展使用
### 信息框容器
```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
输出结果：

![](../blog/docs/.vuepress/public/article_img/guide.jpg)


### 布局容器
```javascript
::: center
  ### 我是居中的内容
  （可用于标题、图片等的居中）
:::

::: right
  [我是右浮动的内容](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效

console.log('这是一个详情块')
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。
::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::
```

输出效果：

![](../blog/docs/.vuepress/public/article_img/guide1.jpg)

### 普通卡片列表 
普通卡片列表容器，可用于`友情链接`、`项目推荐`、`诗词展示`等。

```
    ::: cardList
    ```yaml
    - name: 麋鹿鲁哟
    desc: 大道至简，知易行难
    avatar: https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200122153807.jpg # 可选
    link: https://www.cnblogs.com/miluluyo/ # 可选
    bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
    textColor: '#6854A1' # 可选，默认var(--textColor)
    - name: XAOXUU
    desc: '#IOS #Volantis主题作者'
    avatar: https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png
    link: https://xaoxuu.com
    bgColor: '#718971'
    textColor: '#fff'
    - name: 平凡的你我
    desc: 理想成为大牛的小陈同学
    avatar: https://reinness.com/avatar.png
    link: https://reinness.com
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
    ```
    :::
```

输出效果：

![](../blog/docs/.vuepress/public/article_img/guide3.jpg)


### 显示xmind
暂时没有找到

## 创建单独的目录页

```
---
pageComponent: 
  name: Catalogue
  data: 
    key: 01.页面
    imgUrl: /img/web.png
    description: html+css
title: 页面
date: 2020-10-24 21:50:53
permalink: /ui
sidebar: false
article: false
comment: false
editLink: false
---
```