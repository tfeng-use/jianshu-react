## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev
```
=======
# react-jianshu
仿简书官网简易版

# 主要功能
1. 轮播图
2. 加载更多；
3. 搜索内容切换；
4. 推荐作者切换；
5. 回到顶部；
6. 文章详情；
7. 登录以及状态；

# 技术栈
1. react （主体）
2. react-router-dom （实现路由）
3. axios （实现ajax请求）
4. react-redux （状态管理）
5. styled-components （实现组件的局部样式控制）
6. redux-immutable（防止直接修改状态管理里面的内容）
7. react-loadable （按需加载路由）
8. react-transition-group （实现动画）

# 效果
## homePage
![image](https://raw.githubusercontent.com/tfeng-use/jianshu-react/master/img/jianshu-home.gif)

## 搜索
1. 可以点击换一批实现热门搜索的切换； 

![image](https://raw.githubusercontent.com/tfeng-use/jianshu-react/master/img/home-search.gif)

## 推荐作者
1. 这儿与搜索有相似之处，都是通过点击切换实现内容的变换； 

![image](https://raw.githubusercontent.com/tfeng-use/jianshu-react/master/img/home-writers.gif)

## 下载app
1. 这儿的动画就是通过 react-transition-group 这个插件实现的； 
2. 值得注意的是显示框下面的小三角，是两个小三角叠加而成，或者将白色的小三角设置阴影。

![image](https://raw.githubusercontent.com/tfeng-use/jianshu-react/master/img/downloadApp.gif)

## 加载更多
1. 点击阅读更多就进行ajax请求，然后将数据与原来的数据进行合并，再进行渲染

![image](https://raw.githubusercontent.com/tfeng-use/jianshu-react/master/img/home-getmore.gif)

## 回到顶部
1. 当页面向上滚动到一定的部位时，就显示"回到顶部";
2. 点击回到顶部以后就滚动到顶部；

![image](https://raw.githubusercontent.com/tfeng-use/jianshu-react/master/img/home-backToTop.gif)

## 文章详情

1. 通过路由以及按需加载实现详情的跳转；
![image](https://raw.githubusercontent.com/tfeng-use/jianshu-react/master/img/detail.gif)

## 登录

![image](https://raw.githubusercontent.com/tfeng-use/jianshu-react/master/img/home-login.gif)


# 注意：
1. axios 请求的数据存放到public下面的json里面的，请求的时候直接访问 /api 下面对应的文件就行了；
2. 这儿推荐一个可以模拟假数据的工具 Charles ；
