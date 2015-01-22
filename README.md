# 事件过滤
## 背景
>  在实际需求中，我们往往需要在基础的事件功能中加上一些特殊的用途，比如**点击统计**，在点击某一类链接的时候，我们希望同时发出一个统计请求；再比如**抽奖**的时候，我们需要在点击的时候判断用户登录情况等等。

## 实现
>  通过在`dom`元素中加入我们自定义的`data-*`属性值，利用JS冒泡机制监听容器的点击事件，并在点击的时候触发我们自定义的回调事件。

## 用法
>  **HTML**

>  `<body data-login="true"></body>`

> **JS**

> `$("body").dataPicker({
			attr : "login",
			callback : function() {
				alert("login");
			}
		});`