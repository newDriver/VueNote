# 示例代码


#### 一些基础问题

``` 
1.	data可以写成data:{}对象属性，为何写成data(){ return{} }返回一个object对象的函数；、
有更高的灵活性，不与其他组件共享数据
2.	组件模版只能由一个顶层元素
3.	:class和:style表达式内一定是json对象形式 :class绑定对象的值类型一定是布尔型，true表示添加此样式false则移除，:style则是 一个样式配置项，key属性名，value样式属性的值
4.	npm run dev 指令 在package.json的script属性中设置，实质是由npm 来引导执行入口程序dev-server.js完成加载过程
	加载环境变量（index.js和dev.env.js两个模块）->合并webpack配置（build目录下 base dev prod 三个配置文件）->	配置热加载 ->配置代理服务器（服务模拟）->	配置静态资源（编译文件后生成footprint并存放到开发服务器托管的一个static虚目录中）->加载开发服务器	->	->	->	
5.	npm run build  对必要的资源文件打包加上FootPrint，然后对脚本进行编译、压缩和包大小的分割
```

