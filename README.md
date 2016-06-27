# vue-spa-template

> `vue` 单页应用项目模版

### 功能

* hot-reload
* css extraction
* es6/7

### 用法

这是 [vue-cli](https://github.com/vuejs/vue-cli) 的一个项目模版仓库。   

**推荐使用 `npm 3+` 简化包依赖关系**  

**安装缓慢可更换 `npm` 源，`npm config set registry https://registry.npm.taobao.org`。**

``` bash
$ npm install -g vue-cli
$ vue init luoye-fe/vue-spe-template my-project
$ cd my-project
$ npm install -d
$ npm run localdev
```

### 说明

这个项目模版大部分内容来自 `vue-cli` 提供的官方 [`webpack`](https://github.com/vuejs-templates/webpack) 示例。  

在原有基础上改进内容包括：  

* 集成了 `vue` 全家桶，`vuex` `vue-router` `vue-resource` 开箱即用，不用纠结

* 调整目录结构，适应内部开发习惯，也是多个项目下来的最佳实践

* 调整打包策略，

* 集成 `AMP` 接口平台，根据 AMP 的 `project ID` 设置 `vue-resource` 的根路径

* 适应公司的四套环境，打包构建分不同环境有不同的策略

* 提供格式化生成后的 `html` 插件



