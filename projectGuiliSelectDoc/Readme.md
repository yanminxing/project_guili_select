# 尚硅谷Vue3+typescript项目

[尚硅谷Vue项目实战硅谷甄选，vue3项目+TypeScript前端项目一套通关](https://www.bilibili.com/video/BV1Xh411V7b5?p=2&vd_source=0a0dd058ef849bffba564af91a70780d)

## 1 Vue基础

### 1.1 vue3组件通信方式(p2-p12)

![组件通信方式简介](https://github.com/yanminxing/project_doc/blob/main/comImage/project_guili_select/componentCommunicate/communicateOverview.png?raw=true)



#### 1.1.1  props组件通信方式

![propsParent](https://github.com/yanminxing/project_doc/blob/main/comImage/project_guili_select/componentCommunicate/propsParent.png?raw=true)

![propsChild](https://github.com/yanminxing/project_doc/blob/main/comImage/project_guili_select/componentCommunicate/propsChild.png?raw=true)



## 2  项目的搭建(p15-)

简介：从0-1搭建vue3+vite+typescript后台管理系统。

- 统一规范：需要使用eslint+stylelint+prettier对代码质量进行检测和修复。使用husky来做commit拦截，使用commitlint来统一提交规范，需要使用preinstall来统一报管理工具

### 2.1 项目初始化

### 2.1.1 环境以及要求

可以在[vite](https://cn.vitejs.dev/)官网上面查看node版本要求，现在推荐是16版本往上。这里使用：

```
node：v18.12.0
npm: 8.19.2
yarn:1.22.19
```

### 2.1.2 关联远程仓库

[git 将本地项目关联到远程仓库](https://blog.csdn.net/qq_40028324/article/details/110584326)

```
// 1  git 将本地项目关联到远程仓库
git init 
// 2 关联远程仓库
git remote add origin  https://xxxxxxxxx.git
// 查看是否添加成功 
git remote -v
// 提交代码 
git add .
git commit -m "一些描述"
git push origin master   或  git push -u origin master
```

