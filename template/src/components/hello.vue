<template>
	<div class="hello">
		<img class="logo" src="../assets/img/logo.png">
		<p>
			Welcome to your Vue.js app!
		</p>
		<p>
			To get a better understanding of how this boilerplate works, check out
			<a href="https://github.com/luoye-fe/vue-spa-template/blob/master/README.md" target="_blank">its documentation</a>. It is also recommended to go through the docs for
			<a href="http://webpack.github.io/" target="_blank">Webpack</a> and
			<a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>. If you have any issues with the setup, please file an issue at this boilerplate's
			<a href="https://github.com/luoye-fe/vue-spa-template/blob/master/README.md" target="_blank">repository</a>.
		</p>
		<p>
			This project based on vue-cli official templete of <a href="https://github.com/vuejs-templates/webpack" target="_black">webpack</a>.
		</p>
		<h3>
			Improvement
		</h3>
		<p>从配置文件到开发，全面支持 <code>ES6/7</code></p>
		<p>集成 <code>vue</code> 全家桶，<code>vuex</code> <code>vue-router</code> <code>vue-resource</code> 开箱即用</p>
		<p>调整目录结构，适应内部开发习惯，也是多个项目下来的最佳实践</p>
		<p>集成 <code>AMP</code> 接口平台，根据 AMP 的 <code>project ID</code> 自动设置 <code>vue-resource</code> 的根路径</p>
		<p>调整打包策略，适应公司的四套环境，打包构建分不同环境有不同的策略</p>
		<p>打包时向前端注入环境变量 <code>ENV</code>，前端可以根据这个做不同处理，随之更改了一些需要同步更改的配置</p>
		<p>去掉表态的 <code>eslint</code> 规则</p>
		<p>提供格式化生成后的 <code>html</code> 插件</p>
	</div>
</template>
<style>
html {
	height: 100%;
}

body {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.hello {
	color: #2c3e50;
	margin-top: -100px;
	max-width: 600px;
	font-family: Source Sans Pro, Helvetica, sans-serif;
	text-align: center;
}

.hello a {
	color: #42b983;
	text-decoration: none;
}

.logo {
	width: 100px;
	height: 100px
}
</style>
<script>
export default {
	name: 'Hello'
};
</script>
