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

#### 2.1.1 环境以及要求

可以在[vite](https://cn.vitejs.dev/)官网上面查看node版本要求，现在推荐是16版本往上，下载了eslint9.0.0，版本需要v18.20.0以上了。这里使用：

```
node：v18.20.0
npm: 10.5.0
yarn:1.22.19
```

![](https://github.com/yanminxing/project_doc/blob/main/comImage/project_guili_select/initProject/createProject.png?raw=true)



#### 2.1.2 关联远程仓库

1 [git 将本地项目关联到远程仓库](https://blog.csdn.net/qq_40028324/article/details/110584326)

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



2 [提交git报错Failed to connect to github.com port 443 解决方案](https://blog.csdn.net/zpf1813763637/article/details/128340109)

如果使用https提交代码到githua上面，需要使用vpn代理。其实也可以使用ssh提交代码，这里介绍一下使用vpn代理提交。

```
// 设置代理
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
// 查看代理
git config --global --get http.proxy
git config --global --get https.proxy
// 取消
git config --global --unset http.proxy
git config --global --unset https.proxy
```

3 [git 合并无关分支](https://blog.csdn.net/wd2014610/article/details/80854807)

git合并无关分支时候，会报错`fatal: refusing to merge unrelated histories`，在后面添加git merge master --allow-unrelated-histories即可

```
git merge master --allow-unrelated-histories
```

####  2.1.3 项目自动启动

package.json修改dev命令。添加--open

```json
  "scripts": {
    "dev": "vite --open",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
```

### 2.2 eslint配置

1 安装

```
yarn add eslint -D  // 版本"eslint": "^9.0.0",你必须安装并构建 Node.js（^18.18.0、^20.9.0 或 >=21.1.0）并支持 SSL
```

2 生成配置文件（和视频不一样，不利于学习，故采用3进行配置）

```
npx eslint --init  或者 npm init @eslint/config
```

![](https://github.com/yanminxing/project_doc/blob/main/comImage/project_guili_select/initProject/addEslint.png?raw=true)



会在项目中生成一个文件eslint.config.js，

```
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
```

3 重新配置

下载插件

```
yarn add eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D
```



#### 4 配置学习

1 **.eslint.cjs配置文件**

```
module.exports = {
   //运行环境
    "env": { 
        "browser": true,//浏览器端
        "es2021": true,//es2021
    },
    //规则继承
    "extends": [ 
       //全部规则默认是关闭的,这个配置项开启推荐规则,推荐规则参照文档
       //比如:函数不能重名、对象不能出现重复key
        "eslint:recommended",
        //vue3语法规则
        "plugin:vue/vue3-essential",
        //ts语法规则
        "plugin:@typescript-eslint/recommended"
    ],
    //要为特定类型的文件指定处理器
    "overrides": [
    ],
    //指定解析器:解析器
    //Esprima 默认解析器
    //Babel-ESLint babel解析器
    //@typescript-eslint/parser ts解析器
    "parser": "@typescript-eslint/parser",
    //指定解析器选项
    "parserOptions": {
        "ecmaVersion": "latest",//校验ECMA最新版本
        "sourceType": "module"//设置为"script"（默认），或者"module"代码在ECMAScript模块中
    },
    //ESLint支持使用第三方插件。在使用插件之前，您必须使用npm安装它
    //该eslint-plugin-前缀可以从插件名称被省略
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    //eslint规则
    "rules": {
    }
}
```



2 **vue3环境代码校验插件**

> #### 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
>
> "eslint-config-prettier": "^8.6.0",
> "eslint-plugin-import": "^2.27.5",
> "eslint-plugin-node": "^11.1.0",
>
> #### 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
> "eslint-plugin-prettier": "^4.2.1",
> #### vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南
> "eslint-plugin-vue": "^9.9.0",
> #### 该解析器允许使用Eslint校验所有babel code
> "@babel/eslint-parser": "^7.19.1",

```
// 安装，有个yarn没有，所以使用npm安装
npm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```



**3 修改.eslintrc.cjs配置文件**

```js
// @see https://eslint.bootcss.com/docs/rules/

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	/* 指定如何解析语法 */
	parser: 'vue-eslint-parser',
	/** 优先级低于 parse 的语法解析配置 */
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
		jsxPragma: 'React',
		ecmaFeatures: {
			jsx: true,
		},
	},
	/* 继承已有的规则 */
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['vue', '@typescript-eslint'],
	/*
	 * "off" 或 0    ==>  关闭规则
	 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
	 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
	 */
	rules: {
		// eslint（https://eslint.bootcss.com/docs/rules/）
		'no-var': 'error', // 要求使用 let 或 const 而不是 var
		'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unexpected-multiline': 'error', // 禁止空余的多行
		'no-useless-escape': 'off', // 禁止不必要的转义字符

		// typeScript (https://typescript-eslint.io/rules)
		'@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
		'@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
		'@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
		'@typescript-eslint/semi': 'off',

		// eslint-plugin-vue (https://eslint.vuejs.org/rules/)
		'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
		'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
		'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
		'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
	},
}
```



4 **eslintignore忽略文件.eslintignore**

5 **运行脚本**

package.json新增两个运行脚本

```
"scripts": {
    "lint": "eslint src",
    "fix": "eslint src --fix",
}
```

### 2.3 配置**prettier**

有了eslint，为什么还要有prettier？eslint针对的是javascript，他是一个检测工具，包含js语法以及少部分格式问题，在eslint看来，语法对了就能保证代码正常运行，格式问题属于其次；

而prettier属于格式化工具，它看不惯格式不统一，所以它就把eslint没干好的事接着干，另外，prettier支持

包含js在内的多种语言。

总结起来，**eslint和prettier这俩兄弟一个保证js代码质量，一个保证代码美观。**

1 依赖下载

```
npm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

1 .prettierrc.json添加规则

```
{
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

2 prettierignore忽略文件

```
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

通过pnpm run lint去检测语法，如果出现不规范格式,通过pnpm run fix 修改



3 当eslint和prettier冲突的时候

可以.eslintrc.cjs里面配置对应的规则（eslint会覆盖prettier）
